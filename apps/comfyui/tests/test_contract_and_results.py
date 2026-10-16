import copy
import json
import math
import unittest

from test_workflow import AUDIENCE, CREATIVES, QUESTION, RUN, STUDY

from minds.client import MindsError
from minds.contract import asset_manifest, audience_ids, creative_labels, instrument
from minds.results import preference_results, selected_creatives


def prepared():
    return {
        "creatives": CREATIVES,
        "review": {
            "studyId": STUDY,
            "question": instrument(QUESTION, "", CREATIVES),
            "creativeLabels": [item["label"] for item in CREATIVES],
            "audiences": [{"id": AUDIENCE}],
            "reviewUrl": "https://getminds.ai/",
        },
    }


def completed():
    labels = [item["label"] for item in CREATIVES]
    return {
        "runId": RUN,
        "studyId": STUDY,
        "status": "completed",
        "artifacts": [
            {
                "kind": "responses",
                "questionIndex": 0,
                "outputData": {
                    "type": "categorical",
                    "audiences": [
                        {
                            "audienceId": AUDIENCE,
                            "audience": "Viewers",
                            "distribution": {labels[0]: 7.25, labels[1]: 2.75},
                        }
                    ],
                },
            }
        ],
    }


class ContractTests(unittest.TestCase):
    def test_labels_preserve_unicode_and_authored_spaces(self):
        self.assertEqual(creative_labels('[" 赤 ", "青"]', 2), [" 赤 ", "青"])
        with self.assertRaises(MindsError):
            creative_labels('["A", "A"]', 2)

    def test_url_manifest_requires_explicit_media_types_and_no_credentials(self):
        values = [{"label": "Movie", "url": "https://example.org/movie.mp4", "mimeType": "video/mp4"}]
        self.assertEqual(asset_manifest(json.dumps(values))[0]["kind"], "url")
        for url in (
            "http://example.org/movie.mp4",
            "file:///tmp/movie.mp4",
            "https://user:secret@example.org/a",
        ):
            with self.assertRaises(MindsError):
                asset_manifest(json.dumps([{**values[0], "url": url}]))

    def test_text_concepts_are_not_media_descriptions(self):
        self.assertEqual(
            asset_manifest(json.dumps([{"label": "Concept", "text": "Exact script."}]))[0]["text"],
            "Exact script.",
        )

    def test_audiences_are_explicit_distinct_uuids(self):
        self.assertEqual(audience_ids(AUDIENCE), [AUDIENCE])
        for value in ("", "not-a-uuid", AUDIENCE + "," + AUDIENCE):
            with self.assertRaises(MindsError):
                audience_ids(value)

    def test_question_overflow_fails_before_upload(self):
        with self.assertRaisesRegex(MindsError, "2,000"):
            instrument(QUESTION, "x" * 2000, CREATIVES)


class ResultsTests(unittest.TestCase):
    def test_fractional_expected_counts_preserved_as_preference_shares(self):
        result = preference_results(completed(), prepared())
        self.assertEqual([item["share"] for item in result["audiences"][0]["ranking"]], [0.725, 0.275])
        self.assertIsNone(result["audiences"][0]["confidence"])
        self.assertEqual(selected_creatives(result, CREATIVES, "", 1), CREATIVES[:1])

    def test_ties_remain_ties_and_all_pass_downstream(self):
        run = completed()
        distribution = run["artifacts"][0]["outputData"]["audiences"][0]["distribution"]
        distribution.update(dict.fromkeys(distribution, 5))
        result = preference_results(run, prepared())
        self.assertEqual(result["audiences"][0]["winners"], [0, 1])
        self.assertEqual(selected_creatives(result, CREATIVES, "", 1), CREATIVES)

    def test_multiple_audiences_are_not_pooled(self):
        draft, run = prepared(), completed()
        other = "20000000-0000-4000-8000-000000000002"
        draft["review"]["audiences"].append({"id": other})
        output = run["artifacts"][0]["outputData"]
        output["audiences"].append(
            {"audienceId": other, "distribution": {CREATIVES[0]["label"]: 1, CREATIVES[1]["label"]: 9}}
        )
        result = preference_results(run, draft)
        self.assertEqual([item["winners"] for item in result["audiences"]], [[0], [1]])
        with self.assertRaisesRegex(MindsError, "one result Audience"):
            selected_creatives(result, CREATIVES, "", 1)
        self.assertEqual(selected_creatives(result, CREATIVES, other, 1), CREATIVES[1:])

    def test_missing_zero_count_option_is_zero_without_dropping_candidate(self):
        run = completed()
        run["artifacts"][0]["outputData"]["audiences"][0]["distribution"] = {CREATIVES[0]["label"]: 10}
        result = preference_results(run, prepared())
        self.assertEqual(result["audiences"][0]["ranking"][1]["share"], 0)

    def test_invalid_distributions_never_select_a_winner(self):
        for distribution in (
            {"unknown option": 1},
            {},
            {CREATIVES[0]["label"]: -1},
            {CREATIVES[0]["label"]: math.nan},
            {CREATIVES[0]["label"]: True},
            {CREATIVES[0]["label"]: math.inf},
            dict.fromkeys([item["label"] for item in CREATIVES], 0),
        ):
            run = completed()
            run["artifacts"][0]["outputData"]["audiences"][0]["distribution"] = distribution
            with self.assertRaises(MindsError):
                preference_results(run, prepared())

    def test_partial_coverage_and_incomplete_video_evidence_are_not_winners(self):
        for patch in (
            {"responseCoverage": {"status": "partial"}},
            {"error": "failed"},
            {"administrability": {"status": "delivery_check"}},
        ):
            run = completed()
            run["artifacts"][0].update(patch)
            with self.assertRaises(MindsError):
                preference_results(run, prepared())
        run = completed()
        run["respondentMediaEvidence"] = {"status": "incomplete"}
        with self.assertRaises(MindsError):
            preference_results(run, prepared())

    def test_missing_or_duplicate_audiences_fail(self):
        for audiences in (
            [],
            [{"audienceId": "wrong", "distribution": {}}],
            completed()["artifacts"][0]["outputData"]["audiences"] * 2,
        ):
            run = completed()
            run["artifacts"][0]["outputData"]["audiences"] = audiences
            with self.assertRaises(MindsError):
                preference_results(run, prepared())

    def test_changed_creative_batch_cannot_receive_old_ranking(self):
        result = preference_results(completed(), prepared())
        changed = copy.deepcopy(CREATIVES)
        changed.reverse()
        with self.assertRaises(MindsError):
            selected_creatives(result, changed, "", 1)
        changed = copy.deepcopy(CREATIVES)
        changed[0]["text"] = "Different creative under the same label."
        with self.assertRaises(MindsError):
            selected_creatives(result, changed, "", 1)
