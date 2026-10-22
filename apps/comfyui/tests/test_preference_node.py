"""Exercise one-node approval, native media selection and the actual response payload boundary."""

import copy
import json
import sys
import types
import unittest
from unittest.mock import Mock, patch

import torch
from test_contract_and_results import completed, prepared
from test_package import PACKAGE
from test_workflow import AUDIENCE, REQUEST

MODULE = sys.modules[PACKAGE.__name__ + ".nodes_preference"]


class Blocker:
    def __init__(self, message):
        self.message = message


class PreferenceNodeTests(unittest.TestCase):
    def setUp(self):
        graph = types.ModuleType("comfy_execution.graph")
        graph.ExecutionBlocker = Blocker
        self.patch_modules = patch.dict(sys.modules, {"comfy_execution.graph": graph})
        self.patch_modules.start()
        self.addCleanup(self.patch_modules.stop)
        self.node = MODULE.Preference()
        self.inputs = {
            name: [definition[1]["default"]]
            for name, definition in self.node.INPUT_TYPES()["required"].items()
        }
        self.inputs.update(
            audience_ids=[AUDIENCE], request_id=[REQUEST], labels_json=['["静かな映像", "Spoken story"]']
        )
        self.images = [torch.zeros((1, 2, 3, 3)), torch.ones((1, 4, 2, 3))]
        self.inputs.update(images=[self.images[0]], images_b=[self.images[1]])
        self.draft = prepared()
        self.draft["review"].update(approval="exact-hash", locale="en")
        self.draft["creatives"] = MODULE.collect_candidates(self.inputs)
        self.engine = Mock()
        self.engine.prepare.return_value = self.draft
        self.engine.run.return_value = completed()
        self.mock_engine = patch.object(MODULE, "workflow", return_value=self.engine)
        self.mock_engine.start()
        self.addCleanup(self.mock_engine.stop)

    def test_unapproved_or_stale_approval_prepares_without_running_or_selecting(self):
        for approval in ("", "stale-hash"):
            with self.subTest(approval=approval):
                self.inputs["reviewed_draft"] = [approval]
                output = self.node.test(**self.inputs)
                self.assertEqual(output["ui"]["minds_review"][0], self.draft["review"])
                self.assertTrue(all(isinstance(value, Blocker) for value in output["result"]))
        self.engine.run.assert_not_called()

    def test_approved_images_preserve_original_pixels_and_deliver_complete_api_output(self):
        self.inputs["reviewed_draft"] = ["exact-hash"]
        output = self.node.test(**self.inputs)
        selected_images, videos, text, result, selected = output["result"]
        self.assertTrue(torch.equal(selected_images[0], self.images[0]))
        self.assertIsInstance(videos[0], Blocker)
        self.assertEqual(json.loads(text), result)
        self.assertEqual(selected[0]["label"], "静かな映像")
        payload = output["ui"]["minds_response"][0]
        self.assertIs(payload["outputData"], self.engine.run.return_value["artifacts"][0]["outputData"])
        self.assertTrue(payload["finalResults"])
        self.assertEqual(payload["status"], "completed")
        self.assertNotIn("authToken", payload)

    def test_response_forwards_the_run_question_attachments_to_the_shared_widget(self):
        self.engine.run.return_value["questionAttachments"] = [
            {
                "questionIndex": 0,
                "files": [
                    {
                        "id": "creative-1",
                        "url": "/api/uploads/chat/a.png?sig=example",
                        "mimeType": "image/png",
                    },
                    {
                        "id": "creative-2",
                        "url": "/api/uploads/chat/b.png?sig=example",
                        "mimeType": "image/png",
                    },
                ],
            }
        ]
        self.inputs["reviewed_draft"] = ["exact-hash"]
        payload = self.node.test(**self.inputs)["ui"]["minds_response"][0]
        self.assertEqual(
            [item["name"] for item in payload["questionStimuli"][0]], ["静かな映像", "Spoken story"]
        )
        self.assertIs(payload["outputData"], self.engine.run.return_value["artifacts"][0]["outputData"])

    def test_video_list_is_one_test_and_retains_native_objects(self):
        class Video:
            def save_to(self, stream, format):
                stream.write(b"video-with-audio")

        first, second = Video(), Video()
        self.inputs.pop("images")
        self.inputs.pop("images_b")
        self.inputs["videos"] = [first, second]
        creatives = MODULE.collect_candidates(self.inputs)
        self.draft["creatives"] = creatives
        self.inputs["reviewed_draft"] = ["exact-hash"]
        output = self.node.test(**self.inputs)
        self.assertIs(output["result"][1][0], first)
        self.engine.prepare.assert_called_once()
        self.assertEqual(len(self.engine.prepare.call_args.args[0]), 2)

    def test_multiple_audiences_show_results_without_silently_selecting_one(self):
        other = "20000000-0000-4000-8000-000000000002"
        self.draft["review"]["audiences"].append({"id": other})
        self.inputs["audience_ids"] = [AUDIENCE + "," + other]
        value = copy.deepcopy(self.engine.run.return_value["artifacts"][0]["outputData"]["audiences"][0])
        value["audienceId"] = other
        self.engine.run.return_value["artifacts"][0]["outputData"]["audiences"].append(value)
        self.inputs["reviewed_draft"] = ["exact-hash"]
        output = self.node.test(**self.inputs)
        self.assertEqual(len(output["ui"]["minds_response"][0]["outputData"]["audiences"]), 2)
        self.assertIsInstance(output["result"][0][0], Blocker)
        self.assertIsInstance(output["result"][4], Blocker)
        self.inputs["selection_audience_id"] = [other]
        self.assertEqual(len(self.node.test(**self.inputs)["result"][0]), 1)

    def test_mixed_inputs_keep_label_order_and_reject_duplicates(self):
        self.inputs["assets_json"] = ['[{"label":"Concept","text":"Exact concept"}]']
        self.assertEqual(
            [v["label"] for v in MODULE.collect_candidates(self.inputs)],
            ["静かな映像", "Spoken story", "Concept"],
        )
        self.inputs["assets_json"] = ['[{"label":"Spoken story","text":"Duplicate"}]']
        with self.assertRaisesRegex(MODULE.MindsError, "distinct"):
            MODULE.collect_candidates(self.inputs)

    def test_invalid_selection_is_rejected_before_creating_or_running_research(self):
        self.inputs["selection_audience_id"] = ["not-selected"]
        with self.assertRaisesRegex(MODULE.MindsError, "selection Audience"):
            self.node.test(**self.inputs)
        self.engine.prepare.assert_not_called()
        self.inputs["selection_audience_id"] = [""]
        self.inputs["top_k"] = [3]
        with self.assertRaisesRegex(MODULE.MindsError, "shortlist"):
            self.node.test(**self.inputs)
        self.engine.prepare.assert_not_called()

    def test_four_image_sockets_form_one_review_with_automatic_labels_in_socket_order(self):
        self.inputs["labels_json"] = [""]
        self.inputs["images_4"] = [torch.full((1, 3, 2, 3), 0.75)]
        self.inputs["images_3"] = [torch.full((1, 2, 4, 3), 0.25)]
        self.node.test(**self.inputs)
        candidates = self.engine.prepare.call_args.args[0]
        self.assertEqual([item["label"] for item in candidates], [f"Creative {n}" for n in range(1, 5)])
        self.assertEqual(
            [tuple(item["native"].shape) for item in candidates],
            [(1, 2, 3, 3), (1, 4, 2, 3), (1, 2, 4, 3), (1, 3, 2, 3)],
        )
        self.engine.prepare.assert_called_once()
        self.engine.run.assert_not_called()

    def test_four_video_sockets_preserve_each_native_video_and_uploaded_bytes(self):
        class Video:
            def __init__(self, content):
                self.content = content

            def save_to(self, stream, format):
                stream.write(self.content)

        self.inputs.pop("images")
        self.inputs.pop("images_b")
        self.inputs["labels_json"] = [""]
        originals = [Video(f"video-{n}-with-audio".encode()) for n in range(4)]
        for name, video in zip(("videos", "videos_b", "videos_3", "videos_4"), originals, strict=True):
            self.inputs[name] = [video]
        self.node.test(**self.inputs)
        candidates = self.engine.prepare.call_args.args[0]
        self.assertEqual([item["native"] for item in candidates], originals)
        self.assertEqual([item["content"] for item in candidates], [video.content for video in originals])
        self.assertEqual(len({item["sha256"] for item in candidates}), 4)
        self.engine.prepare.assert_called_once()

    def test_batch_and_separate_socket_share_a_single_label_sequence(self):
        self.inputs["labels_json"] = [""]
        self.inputs["images"] = [torch.zeros((3, 2, 3, 3))]
        candidates = MODULE.collect_candidates(self.inputs)
        self.assertEqual([item["label"] for item in candidates], [f"Creative {n}" for n in range(1, 5)])

    def test_twenty_candidate_limit_is_checked_before_encoding(self):
        self.inputs["labels_json"] = [""]
        self.inputs["images"] = [torch.zeros((20, 2, 3, 3))]
        with patch.object(MODULE, "images_to_creatives") as encode:
            with self.assertRaisesRegex(MODULE.MindsError, "2–20"):
                MODULE.collect_candidates(self.inputs)
            encode.assert_not_called()

    def test_approved_four_image_result_selects_the_fourth_original_from_api_counts(self):
        self.inputs["labels_json"] = [""]
        self.inputs["images_3"] = [torch.full((1, 3, 4, 3), 0.25)]
        fourth = torch.full((1, 4, 3, 3), 0.75)
        self.inputs["images_4"] = [fourth]
        candidates = MODULE.collect_candidates(self.inputs)
        labels = [item["label"] for item in candidates]
        self.draft["creatives"] = candidates
        self.draft["review"]["creativeLabels"] = labels
        self.draft["review"]["question"]["response"]["categoricalOptions"] = labels
        api_output = self.engine.run.return_value["artifacts"][0]["outputData"]
        api_output["audiences"][0]["distribution"] = dict(zip(labels, (1, 2, 3, 4), strict=True))
        self.inputs["reviewed_draft"] = ["exact-hash"]
        output = self.node.test(**self.inputs)
        self.assertTrue(torch.equal(output["result"][0][0], fourth))
        self.assertEqual(len(output["result"][3]["audiences"][0]["ranking"]), 4)
        self.assertEqual(output["result"][3]["audiences"][0]["ranking"][0]["share"], 0.4)
        self.assertIs(output["ui"]["minds_response"][0]["outputData"], api_output)

    def test_sparse_numbered_sockets_keep_numeric_order_and_images_before_videos(self):
        class Video:
            def save_to(self, stream, format):
                stream.write(b"video-with-audio")

        self.inputs["labels_json"] = [""]
        tenth = torch.full((1, 1, 2, 3), 0.9)
        third = torch.full((1, 2, 1, 3), 0.2)
        video = Video()
        self.inputs.update(images_10=[tenth], videos_4=[video], images_3=[third])
        candidates = MODULE.collect_candidates(self.inputs)
        self.assertTrue(torch.equal(candidates[2]["native"], third))
        self.assertTrue(torch.equal(candidates[3]["native"], tenth))
        self.assertIs(candidates[4]["native"], video)
        self.assertEqual([item["label"] for item in candidates], [f"Creative {n}" for n in range(1, 6)])

    def test_explicit_labels_are_never_silently_replaced_for_extra_sockets(self):
        self.inputs["images_3"] = [self.images[0]]
        with self.assertRaisesRegex(MODULE.MindsError, "distinct"):
            self.node.test(**self.inputs)
        self.engine.prepare.assert_not_called()
