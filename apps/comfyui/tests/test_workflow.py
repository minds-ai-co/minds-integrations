import copy
import json
import tempfile
import unittest
from pathlib import Path

from minds.client import MindsError
from minds.contract import instrument
from minds.receipts import ReceiptStore
from minds.workflow import CreativeWorkflow

OWNER = "10000000-0000-4000-8000-000000000001"
AUDIENCE = "20000000-0000-4000-8000-000000000001"
STUDY = "30000000-0000-4000-8000-000000000001"
DRAFT = "40000000-0000-4000-8000-000000000001"
RUN = "50000000-0000-4000-8000-000000000001"
REQUEST = "60000000-0000-4000-8000-000000000001"
CREATIVES = [
    {"label": "静かな映像", "kind": "text", "text": "A quiet product demonstration."},
    {"label": "Spoken story", "kind": "text", "text": "A narrated customer story."},
]
QUESTION = "Which do you prefer?"


class FakeApi:
    def __init__(self):
        self.calls = []
        self.owner = OWNER
        self.draft = None
        self.lost_start = False
        self.statuses = ["completed"]
        self.uploads = []

    def identity(self):
        return self.owner

    def upload(self, content, name, mime):
        self.uploads.append((content, name, mime))
        return {
            "path": f"chat/{OWNER}/{name}",
            "url": f"/api/uploads/chat/{OWNER}/{name}",
            "mimeType": mime,
            "name": name,
        }

    def data(self, method, path, *, body=None, key=None):
        self.calls.append((method, path, copy.deepcopy(body), key))
        if path == "/api/v1/studies":
            return {"id": STUDY}
        if path.endswith("/research-plans/preview"):
            if not body.get("loadLatest"):
                self.draft = {
                    "draftPlanId": DRAFT,
                    "revision": 1,
                    "draftStatus": "draft",
                    "startReadiness": {"ready": True},
                    "audiences": [{"id": AUDIENCE, "name": "Viewers"}],
                    "attachments": copy.deepcopy(body["attachments"]),
                    "plan": {
                        "modules": [
                            {"questions": body["questions"], "method": {"optIn": {"required": False}}}
                        ],
                        "confirmation": {"missingInputs": []},
                    },
                }
            return copy.deepcopy(self.draft)
        if path.endswith("/research-runs"):
            self.draft.update(draftStatus="confirmed", runId=RUN)
            if self.lost_start:
                self.lost_start = False
                raise MindsError("Lost confirmation response")
            return {"runId": RUN}
        if path.endswith(f"/research-runs/{RUN}"):
            status = self.statuses.pop(0) if len(self.statuses) > 1 else self.statuses[0]
            return {"runId": RUN, "studyId": STUDY, "status": status}
        raise AssertionError(path)


class WorkflowTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.store = ReceiptStore(Path(self.temp.name))
        self.api = FakeApi()
        self.clock = 0
        self.interruptions = 0
        self.flow = CreativeWorkflow(
            self.api, self.store, sleep=self.sleep, clock=lambda: self.clock, interrupt=self.interrupt
        )

    def sleep(self, seconds):
        self.clock += seconds

    def interrupt(self):
        self.interruptions += 1

    def prepare(self, creatives=None, **kwargs):
        return self.flow.prepare(
            creatives or CREATIVES,
            [AUDIENCE],
            kwargs.get("question", QUESTION),
            "",
            "en",
            kwargs.get("request_id", REQUEST),
        )

    def starts(self):
        return [call for call in self.api.calls if call[1].endswith("/research-runs")]

    def test_prepare_preserves_exact_authored_question_and_alternatives_without_running(self):
        prepared = self.prepare()
        self.assertEqual(prepared["review"]["question"], instrument(QUESTION, "", CREATIVES))
        self.assertEqual(prepared["review"]["creativeLabels"], [item["label"] for item in CREATIVES])
        self.assertEqual(self.starts(), [])
        draft = next(call[2] for call in self.api.calls if call[3] and call[1].endswith("preview"))
        self.assertEqual(draft["questions"][0]["response"]["type"], "categorical")
        # Public execution uses its controlled-source default; experimental overrides are not sent.
        self.assertNotIn("sourcePolicy", draft)
        self.assertNotIn("suggestQuestionStimuli", draft)

    def test_media_is_labelled_and_bound_to_the_only_question(self):
        creatives = [
            {
                "label": "Movie",
                "kind": "video",
                "content": b"video",
                "sha256": "one",
                "mimeType": "video/mp4",
            },
            {
                "label": "Poster",
                "kind": "url",
                "url": "https://example.org/poster.jpg",
                "mimeType": "image/jpeg",
            },
        ]
        self.prepare(creatives)
        draft = next(call[2] for call in self.api.calls if call[3] and call[1].endswith("preview"))
        self.assertEqual(len(self.api.uploads), 1)
        self.assertEqual(
            draft["questionAttachments"],
            [{"questionNumber": 1, "attachmentIds": ["creative-1", "creative-2"]}],
        )
        self.assertEqual([item["id"] for item in draft["attachments"]], ["creative-1", "creative-2"])

    def test_repeated_prepare_reuses_study_and_draft(self):
        first, second = self.prepare(), self.prepare()
        self.assertEqual(first["review"], second["review"])
        self.assertEqual(len([call for call in self.api.calls if call[1] == "/api/v1/studies"]), 1)

    def test_changed_input_requires_new_request_id(self):
        self.prepare()
        with self.assertRaisesRegex(MindsError, "changed"):
            self.prepare(question="Which would you buy?")

    def test_no_unseen_draft_can_run(self):
        prepared = self.prepare()
        for approval in ("", "an earlier draft"):
            with self.assertRaisesRegex(MindsError, "Review"):
                self.flow.run(prepared, approval)
        self.assertEqual(self.starts(), [])

    def test_approved_run_and_retry_start_once(self):
        prepared = self.prepare()
        for _ in range(2):
            self.assertEqual(self.flow.run(prepared, prepared["review"]["approval"])["runId"], RUN)
        self.assertEqual(len(self.starts()), 1)
        self.assertEqual(
            self.starts()[0][2]["confirmation"], {"accepted": True, "advancedMethodOptIn": False}
        )

    def test_lost_confirmation_receipt_reconciles_with_server(self):
        prepared = self.prepare()
        self.api.lost_start = True
        with self.assertRaises(MindsError):
            self.flow.run(prepared, prepared["review"]["approval"])
        self.assertEqual(self.flow.run(prepared, prepared["review"]["approval"])["runId"], RUN)
        self.assertEqual(len(self.starts()), 1)

    def test_changed_saved_revision_invalidates_approval(self):
        prepared = self.prepare()
        self.api.draft["revision"] = 2
        with self.assertRaisesRegex(MindsError, "changed after review"):
            self.flow.run(prepared, prepared["review"]["approval"])
        self.assertEqual(self.starts(), [])

    def test_changed_stored_assets_require_a_new_request_even_with_the_same_labels(self):
        creatives = [
            {"label": "A", "kind": "url", "url": "https://example.org/a.mp4", "mimeType": "video/mp4"},
            {"label": "B", "kind": "url", "url": "https://example.org/b.mp4", "mimeType": "video/mp4"},
        ]
        self.prepare(creatives)
        self.api.draft["attachments"][0]["path"] = "chat/owner/replaced.mp4"
        with self.assertRaisesRegex(MindsError, "assets changed"):
            self.prepare(creatives)

    def test_changed_account_cannot_run_another_accounts_draft(self):
        prepared = self.prepare()
        self.api.owner = "10000000-0000-4000-8000-000000000002"
        with self.assertRaisesRegex(MindsError, "account changed"):
            self.flow.run(prepared, prepared["review"]["approval"])

    def test_timeout_resumes_same_run(self):
        prepared = self.prepare()
        self.api.statuses = ["running"]
        with self.assertRaisesRegex(MindsError, "still running"):
            self.flow.run(prepared, prepared["review"]["approval"], timeout_seconds=5)
        self.api.statuses = ["completed"]
        self.flow.run(prepared, prepared["review"]["approval"])
        self.assertEqual(len(self.starts()), 1)
        self.assertGreaterEqual(self.interruptions, 7)

    def test_partial_failed_cancelled_and_plan_limits_are_not_complete(self):
        prepared = self.prepare()
        for status in ("partial", "failed", "cancelled", "plan_limited"):
            self.api.statuses = [status]
            with self.assertRaisesRegex(MindsError, "No winners"):
                self.flow.run(prepared, prepared["review"]["approval"])

    def test_local_receipts_contain_only_identifiers(self):
        self.prepare()
        receipt = json.loads(self.store.path(OWNER, REQUEST).read_text())
        self.assertEqual(
            set(receipt), {"studyId", "draftPlanId", "revision", "fingerprint", "assetFingerprint"}
        )
        with self.assertRaises(MindsError):
            self.store.write(OWNER, REQUEST, {"apiKey": "never-store"})

    def test_lock_prevents_concurrent_duplicate_execution(self):
        with self.store.locked(OWNER, REQUEST), self.assertRaisesRegex(MindsError, "already running"):
            self.prepare()

    def test_corrupt_receipt_fails_closed(self):
        self.store.path(OWNER, REQUEST).write_text("broken")
        with self.assertRaisesRegex(MindsError, "receipt cannot be read"):
            self.prepare()
