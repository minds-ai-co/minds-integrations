import json

from .minds.client import MindsError
from .minds.results import selected_creatives


class SelectCreatives:
    CATEGORY = "Minds/Selection"
    FUNCTION = "select"
    RETURN_TYPES = ("MINDS_CREATIVES", "STRING")
    RETURN_NAMES = ("selected_creatives", "selected_labels_json")
    DESCRIPTION = "Select a shortlist for one Audience. Includes every tie at the cutoff."

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "preference_result": ("MINDS_CREATIVE_RESULT",),
                "tested_creatives": ("MINDS_CREATIVES",),
                "audience_id": ("STRING", {"default": ""}),
                "top_k": ("INT", {"default": 1, "min": 1, "max": 20}),
            }
        }

    def select(self, preference_result, tested_creatives, audience_id, top_k):
        selected = selected_creatives(preference_result, tested_creatives, audience_id, top_k)
        return (selected, json.dumps([item["label"] for item in selected], ensure_ascii=False))


class SelectedImages:
    CATEGORY = "Minds/Selection"
    FUNCTION = "images"
    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("images",)
    DESCRIPTION = "Pass selected generated images to an upscaler, animator or Save Image node."

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {"selected_creatives": ("MINDS_CREATIVES",)}}

    def images(self, selected_creatives):
        import torch

        if not selected_creatives or any(item["kind"] != "image" for item in selected_creatives):
            raise MindsError("Selected Images requires native generated image candidates.")
        shapes = {tuple(item["native"].shape[1:]) for item in selected_creatives}
        if len(shapes) != 1:
            raise MindsError("Selected images need matching dimensions for a ComfyUI IMAGE batch.")
        return (torch.cat([item["native"] for item in selected_creatives], dim=0),)


class SelectedVideo:
    CATEGORY = "Minds/Selection"
    FUNCTION = "video"
    RETURN_TYPES = ("VIDEO",)
    RETURN_NAMES = ("video",)
    OUTPUT_IS_LIST = (True,)
    DESCRIPTION = "Pass each selected native VIDEO to downstream nodes. Tied winners remain separate videos."

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {"selected_creatives": ("MINDS_CREATIVES",)}}

    def video(self, selected_creatives):
        if not selected_creatives or any(item["kind"] != "video" for item in selected_creatives):
            raise MindsError("Selected Video requires native generated video candidates.")
        return ([item["native"] for item in selected_creatives],)
