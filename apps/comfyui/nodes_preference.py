"""One-node adapter over the existing reviewed creative-test workflow."""

import json

from .minds.client import MindsError
from .minds.contract import LOCALES, asset_manifest, audience_ids, creative_labels, validate_creatives
from .minds.media import images_to_creatives, video_to_creative
from .minds.response import question_stimuli
from .minds.results import preference_results, selected_creatives
from .nodes_research import workflow


def collect_candidates(inputs):
    image_batches = [*inputs.get("images", []), *inputs.get("images_b", [])]
    videos = [*inputs.get("videos", []), *inputs.get("videos_b", [])]
    count = sum(batch.shape[0] for batch in image_batches) + len(videos)
    labels = creative_labels(inputs["labels_json"][0], count) if count else []
    candidates, offset = [], 0
    for batch in image_batches:
        end = offset + batch.shape[0]
        candidates.extend(images_to_creatives(batch, json.dumps(labels[offset:end])))
        offset = end
    for video, label in zip(videos, labels[offset:], strict=True):
        candidates.extend(video_to_creative(video, label))
    manifest = inputs["assets_json"][0].strip()
    if manifest and manifest != "[]":
        candidates.extend(asset_manifest(manifest))
    return validate_creatives(candidates, minimum=2)


def response_payload(run, prepared):
    artifact = next(item for item in run["artifacts"] if item["kind"] == "responses")
    return {
        "type": "response",
        "mode": "study",
        "finalResults": True,
        "status": "completed",
        "apiBase": "https://getminds.ai",
        "studyId": run["studyId"],
        "runId": run["runId"],
        "questionId": artifact.get("questionId"),
        "locale": prepared["review"]["locale"],
        "question": prepared["review"]["question"]["text"],
        "outputData": artifact["outputData"],
        "questionStimuli": [question_stimuli(run, prepared, artifact["questionIndex"])],
    }


class Preference:
    CATEGORY = "Minds"
    FUNCTION = "test"
    INPUT_IS_LIST = True
    RETURN_TYPES = ("IMAGE", "VIDEO", "STRING", "MINDS_CREATIVE_RESULT", "MINDS_CREATIVES")
    RETURN_NAMES = (
        "selected_images",
        "selected_videos",
        "results_json",
        "preference_result",
        "selected_creatives",
    )
    OUTPUT_IS_LIST = (True, True, False, False, False)
    OUTPUT_NODE = True
    DESCRIPTION = "Compare creatives with your selected Audiences. Review once, then read Minds results here."

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "audience_ids": ("STRING", {"default": "", "multiline": True}),
                "question": ("STRING", {"default": "Which creative do you prefer?", "multiline": True}),
                "context": ("STRING", {"default": "", "multiline": True}),
                "labels_json": ("STRING", {"default": '["Creative A", "Creative B"]', "multiline": True}),
                "assets_json": ("STRING", {"default": "[]", "multiline": True}),
                "study_locale": (list(LOCALES), {"default": "en"}),
                "selection_audience_id": ("STRING", {"default": ""}),
                "top_k": ("INT", {"default": 1, "min": 1, "max": 20}),
                "request_id": ("STRING", {"default": ""}),
                "reviewed_draft": ("STRING", {"default": ""}),
                "timeout_seconds": ("INT", {"default": 900, "min": 5, "max": 3600}),
            },
            "optional": {
                name: (kind,)
                for name, kind in (
                    ("images", "IMAGE"),
                    ("images_b", "IMAGE"),
                    ("videos", "VIDEO"),
                    ("videos_b", "VIDEO"),
                )
            },
        }

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float("nan")

    def test(self, **inputs):
        from comfy_execution.graph import ExecutionBlocker

        # Comfy's list protocol batches media in one Study rather than running one Study per item.
        for name in self.INPUT_TYPES()["required"]:
            if len(inputs[name]) != 1:
                raise MindsError(
                    "Use one value per Minds setting; media inputs may contain lists or batches."
                )
        value = {name: inputs[name][0] for name in self.INPUT_TYPES()["required"]}
        candidates = collect_candidates(inputs)
        ids = audience_ids(value["audience_ids"])
        if value["selection_audience_id"] and value["selection_audience_id"] not in ids:
            raise MindsError("Choose a selection Audience from the Audience IDs for this test.")
        if not 1 <= value["top_k"] <= len(candidates):
            raise MindsError("Choose a shortlist size within the candidate count.")
        engine = workflow()
        prepared = engine.prepare(
            candidates,
            ids,
            value["question"],
            value["context"],
            value["study_locale"],
            value["request_id"],
        )
        review = prepared["review"]
        if value["reviewed_draft"] != review["approval"]:
            return {
                "ui": {"minds_review": [review]},
                "result": tuple(ExecutionBlocker(None) for _ in self.RETURN_TYPES),
            }
        run = engine.run(prepared, value["reviewed_draft"], value["timeout_seconds"])
        result = preference_results(run, prepared)
        selected = ExecutionBlocker(None)
        images, videos = [ExecutionBlocker(None)], [ExecutionBlocker(None)]
        if len(result["audiences"]) == 1 or value["selection_audience_id"]:
            selected = selected_creatives(
                result, prepared["creatives"], value["selection_audience_id"], value["top_k"]
            )
            images = [item["native"] for item in selected if item["kind"] == "image"] or images
            videos = [item["native"] for item in selected if item["kind"] == "video"] or videos
        text = json.dumps(result, ensure_ascii=False, indent=2)
        return {
            "ui": {"minds_review": [review], "minds_response": [response_payload(run, prepared)]},
            "result": (images, videos, text, result, selected),
        }
