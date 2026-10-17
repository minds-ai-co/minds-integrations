import unittest

from minds.response import question_stimuli


class ResponseTests(unittest.TestCase):
    def setUp(self):
        self.prepared = {
            "creatives": [
                {"label": "Concept text", "kind": "text", "text": "Exact concept"},
                {"label": "Poster A", "kind": "image"},
                {"label": "Film B", "kind": "video"},
            ]
        }
        self.files = [
            {"id": "creative-2", "url": "/api/uploads/chat/a.png?sig=example", "mimeType": "image/png"},
            {"id": "creative-3", "url": "https://getminds.ai/b.mp4?sig=example", "mimeType": "video/mp4"},
        ]
        self.run = {"questionAttachments": [{"questionIndex": 0, "files": self.files}]}

    def test_uses_exact_confirmed_assets_and_labels_without_guessing_from_position(self):
        self.run["questionAttachments"][0]["files"] = list(reversed(self.files))
        self.assertEqual(
            question_stimuli(self.run, self.prepared, 0),
            [
                {"name": "Film B", "url": self.files[1]["url"], "mediaType": "video"},
                {"name": "Poster A", "url": "https://getminds.ai" + self.files[0]["url"]},
            ],
        )

    def test_does_not_reuse_assets_from_another_question_or_invent_missing_previews(self):
        self.assertEqual(question_stimuli(self.run, self.prepared, 1), [])
        self.assertEqual(question_stimuli({}, self.prepared, 0), [])
        self.files[0]["id"] = "unrelated-file"
        self.assertEqual(len(question_stimuli(self.run, self.prepared, 0)), 1)

    def test_drops_non_display_urls_without_leaking_unrelated_asset_fields(self):
        for url in (
            "javascript:alert(1)",
            "//other.example/a.png",
            "https://user:password@x.test/a",
            "https://[",
        ):
            with self.subTest(url=url):
                self.files[0].update(url=url, authorization="never forwarded", path="private/path")
                stimuli = question_stimuli(self.run, self.prepared, 0)
                self.assertEqual([item["name"] for item in stimuli], ["Film B"])

    def test_text_concepts_remain_in_the_exact_authored_question_not_fabricated_media(self):
        self.run["questionAttachments"][0]["files"] = [
            {"id": "creative-1", "url": "https://example.org/text.txt", "mimeType": "text/plain"}
        ]
        self.assertEqual(question_stimuli(self.run, self.prepared, 0), [])
