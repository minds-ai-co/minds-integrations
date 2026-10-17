"""Display the confirmed question's assets through the existing MCP response contract."""

from urllib.parse import urlsplit

from .client import ORIGIN


def question_stimuli(run: dict, prepared: dict, question_index: int) -> list[dict]:
    labels = {
        f"creative-{index + 1}": creative["label"]
        for index, creative in enumerate(prepared["creatives"])
        if creative["kind"] != "text"
    }
    question = next(
        (item for item in run.get("questionAttachments", []) if item.get("questionIndex") == question_index),
        {},
    )
    stimuli = []
    for asset in question.get("files", []):
        label = labels.get(asset.get("id"))
        url = asset.get("url", "")
        mime = asset.get("mimeType", "")
        if not label or not isinstance(url, str) or not isinstance(mime, str):
            continue
        if url.startswith("/") and not url.startswith("//"):
            url = ORIGIN + url
        try:
            parsed = urlsplit(url)
        except ValueError:
            continue
        if parsed.scheme != "https" or not parsed.hostname or parsed.username or parsed.password:
            continue
        if not (mime.startswith("image/") or mime.startswith("video/")):
            continue
        stimuli.append(
            {
                "name": label,
                "url": url,
                **({"mediaType": "video"} if mime.startswith("video/") else {}),
            }
        )
    return stimuli
