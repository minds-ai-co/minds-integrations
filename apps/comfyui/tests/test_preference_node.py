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
