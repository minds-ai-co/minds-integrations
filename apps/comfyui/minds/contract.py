"""Explicit authored questions and stable identities, without interpreting creative content."""

import hashlib
import json
import uuid
from urllib.parse import urlsplit

from .client import MAX_CANDIDATES, MindsError

LOCALES = ("ar", "de", "en", "es", "fr", "ja", "ko", "tr", "zh")


def digest(value) -> str:
    return hashlib.sha256(
        json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":"), allow_nan=False).encode()
    ).hexdigest()


def uuid_text(value: str) -> str:
    try:
        return str(uuid.UUID(value))
    except (ValueError, TypeError, AttributeError):
        raise MindsError("Use a valid UUID for each Audience and request ID.") from None


def audience_ids(text: str) -> list[str]:
    values = [uuid_text(item.strip()) for item in text.split(",") if item.strip()]
    if not values or len(values) > 100 or len(values) != len(set(values)):
        raise MindsError("Choose one or more distinct Audience IDs (comma-separated, at most 100).")
    return values


def creative_labels(text: str, count: int) -> list[str]:
    try:
        labels = json.loads(text)
    except (ValueError, TypeError):
        raise MindsError(
            "Creative labels must be a JSON array, in the same order as the creatives."
        ) from None
    if (
        not isinstance(labels, list)
        or len(labels) != count
        or any(not isinstance(label, str) or not label.strip() or len(label) > 200 for label in labels)
        or len(set(labels)) != count
    ):
        raise MindsError("Give every creative a distinct, non-empty label (up to 200 characters).")
    return labels


def validate_creatives(creatives: list[dict], *, minimum: int = 1) -> list[dict]:
    if not isinstance(creatives, list) or not minimum <= len(creatives) <= MAX_CANDIDATES:
        raise MindsError(f"Supply {minimum}–{MAX_CANDIDATES} creative candidates.")
    creative_labels(json.dumps([item.get("label") for item in creatives]), len(creatives))
    return creatives


def asset_manifest(text: str) -> list[dict]:
    try:
        values = json.loads(text)
    except (ValueError, TypeError):
        raise MindsError("Assets must be a JSON array of labelled HTTPS files or text concepts.") from None
    if not isinstance(values, list) or any(not isinstance(item, dict) for item in values):
        raise MindsError("Assets must be a JSON array of objects.")
    result = []
    for value in values:
        label = value.get("label")
        if set(value) == {"label", "text"}:
            content = value["text"]
            if not isinstance(content, str) or not content.strip() or len(content) > 20000:
                raise MindsError("Each text concept must contain 1–20,000 characters.")
            result.append({"label": label, "kind": "text", "text": content})
        elif set(value) == {"label", "url", "mimeType"}:
            url, mime = value["url"], value["mimeType"]
            if not isinstance(url, str) or len(url) > 4096 or not isinstance(mime, str):
                raise MindsError("Use an HTTPS file URL and its image/video MIME type.")
            parsed = urlsplit(url)
            if (
                parsed.scheme != "https"
                or not parsed.hostname
                or parsed.username
                or parsed.password
                or parsed.fragment
                or not (mime.startswith("image/") or mime.startswith("video/"))
            ):
                raise MindsError("Use an HTTPS image/video file without embedded login details.")
            result.append({"label": label, "kind": "url", "url": url, "mimeType": mime})
        else:
            raise MindsError("Each asset needs label/text, or label/url/mimeType, and no other fields.")
    return validate_creatives(result)


def creative_identity(item: dict) -> dict:
    # Media has a checksum; URLs and exact text are inputs to the fingerprint, not local receipts.
    return {key: item[key] for key in ("label", "kind", "sha256", "url", "mimeType", "text") if key in item}


def instrument(question: str, context: str, creatives: list[dict]) -> dict:
    labels = [item["label"] for item in creatives]
    references = [
        f"{item['label']}: {item['text']}"
        if item["kind"] == "text"
        else f"{item['label']}: attached creative {index + 1}"
        for index, item in enumerate(creatives)
    ]
    text = "\n\n".join(part for part in (context, "\n".join(references), question) if part)
    if not question.strip() or len(text) > 2000:
        raise MindsError(
            "Supply one preference question. Its text, creative labels and context must fit 2,000 characters."
        )
    return {
        "id": "creative-preference",
        "text": text,
        "response": {"type": "categorical", "categoricalOptions": labels},
    }


def review_snapshot(draft: dict, ids: list[str]) -> dict:
    plan = draft.get("plan")
    if not isinstance(plan, dict):
        raise MindsError("Minds did not return a reviewable plan.")
    return {
        "draftPlanId": draft["draftPlanId"],
        "revision": draft["revision"],
        "audienceIds": ids,
        "plan": plan,
        "attachments": [
            {key: asset.get(key) for key in ("id", "name", "path", "mimeType")}
            for asset in draft.get("attachments", [])
        ],
    }
