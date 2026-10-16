"""Preserve native media for downstream selection; encode only the uploaded copy."""

import hashlib
import io

from .client import MAX_UPLOAD_BYTES, MindsError
from .contract import creative_labels, validate_creatives


class BoundedBuffer(io.BytesIO):
    def write(self, data):
        if self.tell() + len(data) > MAX_UPLOAD_BYTES:
            raise MindsError("The encoded creative exceeds the 50 MB Minds multipart upload limit.")
        return super().write(data)


def images_to_creatives(images, labels_json: str) -> list[dict]:
    from PIL import Image

    if len(images.shape) != 4 or images.shape[-1] not in (1, 3, 4):
        raise MindsError("Connect a ComfyUI IMAGE batch in [batch, height, width, channels] format.")
    labels = creative_labels(labels_json, images.shape[0])
    if not 1 <= len(labels) <= 20:
        raise MindsError("Supply 1–20 images.")
    result = []
    for index, label in enumerate(labels):
        pixels = images[index].detach().cpu()
        if not pixels.isfinite().all() or pixels.min() < 0 or pixels.max() > 1:
            raise MindsError("Image values must be finite and within [0, 1].")
        array = (pixels.numpy() * 255).round().astype("uint8")
        if array.shape[-1] == 1:
            array = array[:, :, 0]
        stream = BoundedBuffer()
        Image.fromarray(array).save(stream, format="PNG")
        content = stream.getvalue()
        result.append(
            {
                "label": label,
                "kind": "image",
                "content": content,
                "mimeType": "image/png",
                "sha256": hashlib.sha256(content).hexdigest(),
                "native": images[index : index + 1],
            }
        )
    return validate_creatives(result)


def video_to_creative(video, label: str) -> list[dict]:
    # Explicit MP4 format is required for a file-like target; preserve the VIDEO object and its audio.
    stream = BoundedBuffer()
    video.save_to(stream, format="mp4")
    content = stream.getvalue()
    if not content:
        raise MindsError("The video is empty.")
    return validate_creatives(
        [
            {
                "label": label,
                "kind": "video",
                "content": content,
                "mimeType": "video/mp4",
                "sha256": hashlib.sha256(content).hexdigest(),
                "native": video,
            }
        ]
    )
