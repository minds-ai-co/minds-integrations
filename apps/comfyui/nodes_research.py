import json
from pathlib import Path
from urllib.parse import urlencode

from .minds.client import MindsClient
from .minds.contract import LOCALES
from .minds.contract import audience_ids as parse_audience_ids
from .minds.receipts import ReceiptStore
from .minds.results import preference_results
from .minds.workflow import CreativeWorkflow


def workflow():
    import comfy.model_management
    import folder_paths

    return CreativeWorkflow(
        MindsClient(),
        ReceiptStore(Path(folder_paths.get_user_directory()) / "minds" / "receipts"),
        interrupt=comfy.model_management.throw_exception_if_processing_interrupted,
    )


class Audiences:
    CATEGORY = "Minds/Research"
    FUNCTION = "find"
    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("audiences_json",)
    OUTPUT_NODE = True
    DESCRIPTION = (
        "Read your visible Audiences and their readiness. Never creates an Audience or runs research."
    )

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {"search": ("STRING", {"default": ""}), "offset": ("INT", {"default": 0, "min": 0})}
        }

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float("nan")

    def find(self, search, offset):
        value = MindsClient().request(
            "GET",
            "/api/v1/audiences?"
            + urlencode(
                {
                    "search": search,
                    "offset": offset,
                    "limit": 100,
                }
            ),
        )
        result = {
            "audiences": [
                {key: item.get(key) for key in ("id", "name", "mindCount", "readiness")}
                for item in value["data"]
            ],
            "pagination": value.get("pagination"),
        }
        text = json.dumps(result, ensure_ascii=False, indent=2)
        return {"ui": {"text": [text]}, "result": (text,)}


class Prepare:
    CATEGORY = "Minds/Research"
    FUNCTION = "prepare"
    RETURN_TYPES = ("MINDS_CREATIVE_DRAFT", "STRING")
    RETURN_NAMES = ("draft", "review_json")
    OUTPUT_NODE = True
    DESCRIPTION = (
        "Prepare an exact preference test without running it. Review the returned draft before approval."
    )

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "creatives": ("MINDS_CREATIVES",),
                "audience_ids": ("STRING", {"default": "", "multiline": True}),
                "question": ("STRING", {"default": "Which creative do you prefer?", "multiline": True}),
                "context": ("STRING", {"default": "", "multiline": True}),
                "study_locale": (list(LOCALES), {"default": "en"}),
                "request_id": ("STRING", {"default": ""}),
            }
        }

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        # Always revalidate account and saved revision. The API and receipt provide reuse.
        return float("nan")

    def prepare(self, creatives, audience_ids: str, question, context, study_locale, request_id):
        ids = parse_audience_ids(audience_ids)
        prepared = workflow().prepare(creatives, ids, question, context, study_locale, request_id)
        text = json.dumps(prepared["review"], ensure_ascii=False, indent=2)
        return {"ui": {"text": [text], "minds_review": [prepared["review"]]}, "result": (prepared, text)}


class Run:
    CATEGORY = "Minds/Research"
    FUNCTION = "run"
    RETURN_TYPES = ("MINDS_CREATIVE_RESULT", "MINDS_CREATIVES", "STRING")
    RETURN_NAMES = ("preference_result", "tested_creatives", "results_json")
    OUTPUT_NODE = True
    DESCRIPTION = "Run the exact reviewed draft through Minds. Retries resume its saved run."

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "draft": ("MINDS_CREATIVE_DRAFT",),
                "reviewed_draft": ("STRING", {"default": ""}),
                "timeout_seconds": ("INT", {"default": 900, "min": 5, "max": 3600}),
            }
        }

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float("nan")

    def run(self, draft, reviewed_draft, timeout_seconds):
        run = workflow().run(draft, reviewed_draft, timeout_seconds)
        result = preference_results(run, draft)
        text = json.dumps(result, ensure_ascii=False, indent=2)
        return {"ui": {"text": [text]}, "result": (result, draft["creatives"], text)}
