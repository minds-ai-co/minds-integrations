from .minds.contract import asset_manifest, validate_creatives
from .minds.media import images_to_creatives, video_to_creative


class Images:
    CATEGORY = "Minds/Creatives"
    FUNCTION = "collect"
    RETURN_TYPES = ("MINDS_CREATIVES",)
    RETURN_NAMES = ("creatives",)
    DESCRIPTION = "Label each generated image, preserving its order and native pixels for selection."

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "labels_json": ("STRING", {"default": '["Creative A", "Creative B"]', "multiline": True}),
            }
        }

    def collect(self, images, labels_json):
        return (images_to_creatives(images, labels_json),)


class Video:
    CATEGORY = "Minds/Creatives"
    FUNCTION = "collect"
    RETURN_TYPES = ("MINDS_CREATIVES",)
    RETURN_NAMES = ("creatives",)
    DESCRIPTION = "Accept a native ComfyUI VIDEO, including its audio, as one creative candidate."

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {"video": ("VIDEO",), "label": ("STRING", {"default": "Video A"})}}

    def collect(self, video, label):
        return (video_to_creative(video, label),)


class Assets:
    CATEGORY = "Minds/Creatives"
    FUNCTION = "collect"
    RETURN_TYPES = ("MINDS_CREATIVES",)
    RETURN_NAMES = ("creatives",)
    DESCRIPTION = (
        "Use labelled HTTPS image/video files or exact text concepts. File URLs are imported by Minds."
    )

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {"assets_json": ("STRING", {"default": "[]", "multiline": True})}}

    def collect(self, assets_json):
        return (asset_manifest(assets_json),)


class Combine:
    CATEGORY = "Minds/Creatives"
    FUNCTION = "combine"
    RETURN_TYPES = ("MINDS_CREATIVES",)
    RETURN_NAMES = ("creatives",)
    DESCRIPTION = "Combine image, video or concept candidates. Keep labels unique across both inputs."

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {"first": ("MINDS_CREATIVES",), "second": ("MINDS_CREATIVES",)}}

    def combine(self, first, second):
        return (validate_creatives([*first, *second]),)
