"""Reviewed drafts and durable runs over the existing public Study API."""

import time
import uuid

from .client import MindsError
from .contract import (
    LOCALES,
    creative_identity,
    digest,
    instrument,
    review_snapshot,
    uuid_text,
    validate_creatives,
)


def study_path(study_id: str, suffix: str = "") -> str:
    return f"/api/v1/studies/{uuid_text(study_id)}{suffix}"


def request_key(request_id: str, stage: str) -> str:
    return str(uuid.uuid5(uuid.UUID(request_id), stage))


def check_draft(draft: dict, expected_question: dict, ids: list[str]):
    uuid_text(draft.get("draftPlanId"))
    if type(draft.get("revision")) is not int or draft["revision"] < 1:
        raise MindsError("Minds did not return a versioned research draft.")
    plan = draft.get("plan", {})
    questions = [question for module in plan.get("modules", []) for question in module.get("questions", [])]
    if (
        len(questions) != 1
        or questions[0].get("text") != expected_question["text"]
        or questions[0].get("response") != expected_question["response"]
    ):
        raise MindsError(
            "The saved research differs from the requested preference question. Review it in Minds."
        )
    attached = [uuid_text(audience.get("id")) for audience in draft.get("audiences", [])]
    if set(attached) != set(ids):
        raise MindsError("The saved Study has different Audiences. Prepare a new request.")
    if (
        draft.get("startReadiness", {}).get("ready") is not True
        or plan.get("confirmation", {}).get("missingInputs")
        or any(
            module.get("method", {}).get("optIn", {}).get("required") for module in plan.get("modules", [])
        )
    ):
        raise MindsError("This draft needs further review in Minds before it can run.")


class CreativeWorkflow:
    def __init__(self, client, receipts, *, interrupt=lambda: None, sleep=time.sleep, clock=time.monotonic):
        self.client, self.receipts = client, receipts
        self.interrupt, self.sleep, self.clock = interrupt, sleep, clock

    def prepare(
        self, creatives: list[dict], ids: list[str], question: str, context: str, locale: str, request_id: str
    ) -> dict:
        validate_creatives(creatives, minimum=2)
        request_id = uuid_text(request_id)
        if locale not in LOCALES:
            raise MindsError("Choose one of the nine supported Study languages.")
        authored = instrument(question, context, creatives)
        fingerprint = digest(
            {
                "creatives": [creative_identity(item) for item in creatives],
                "audiences": ids,
                "question": authored,
                "locale": locale,
            }
        )
        owner = self.client.identity()
        with self.receipts.locked(owner, request_id):
            receipt = self.receipts.read(owner, request_id)
            if receipt and receipt.get("fingerprint") != fingerprint:
                raise MindsError(
                    "The creatives, question or Audiences changed. Use a new request ID and review again."
                )
            receipt["fingerprint"] = fingerprint
            self.receipts.write(owner, request_id, receipt)
            if not receipt.get("studyId"):
                study = self.client.data(
                    "POST",
                    "/api/v1/studies",
                    key=request_key(request_id, "study"),
                    body={
                        "name": "ComfyUI creative preference",
                        "audienceIds": ids,
                        "isLinkSharingEnabled": False,
                    },
                )
                receipt["studyId"] = uuid_text(study.get("id"))
                self.receipts.write(owner, request_id, receipt)
            path = study_path(receipt["studyId"], "/research-plans/preview")
            if receipt.get("draftPlanId"):
                draft = self.client.data(
                    "POST", path, body={"loadLatest": True, "draftPlanId": receipt["draftPlanId"]}
                )
            else:
                assets = []
                for index, creative in enumerate(creatives):
                    self.interrupt()
                    if creative["kind"] == "text":
                        continue
                    mime = creative["mimeType"]
                    name = f"creative-{index + 1}." + ("mp4" if mime.startswith("video/") else "png")
                    if creative["kind"] == "url":
                        asset = {"url": creative["url"], "mimeType": mime, "name": name}
                    else:
                        asset = self.client.upload(creative["content"], name, mime)
                    assets.append({**asset, "id": f"creative-{index + 1}"})
                draft = self.client.data(
                    "POST",
                    path,
                    key=request_key(request_id, "draft"),
                    body={
                        "questions": [authored],
                        "studyLocale": locale,
                        "attachments": assets,
                        "questionAttachments": [
                            {"questionNumber": 1, "attachmentIds": [asset["id"] for asset in assets]}
                        ],
                    },
                )
                receipt.update(
                    draftPlanId=uuid_text(draft.get("draftPlanId")), revision=draft.get("revision")
                )
                self.receipts.write(owner, request_id, receipt)
            check_draft(draft, authored, ids)
            asset_fingerprint = digest(review_snapshot(draft, ids)["attachments"])
            if receipt.get("assetFingerprint") and receipt["assetFingerprint"] != asset_fingerprint:
                raise MindsError("The saved creative assets changed. Use a new request and review again.")
            expected_assets = {
                f"creative-{index + 1}" for index, item in enumerate(creatives) if item["kind"] != "text"
            }
            if {item.get("id") for item in draft.get("attachments", [])} != expected_assets:
                raise MindsError("The saved draft does not contain every creative asset.")
            receipt["assetFingerprint"] = asset_fingerprint
            self.receipts.write(owner, request_id, receipt)
            approval = digest(review_snapshot(draft, ids))
            names = {item["id"]: item["name"] for item in draft["audiences"]}
            review = {
                "studyId": receipt["studyId"],
                "draftPlanId": draft["draftPlanId"],
                "revision": draft["revision"],
                "audiences": [{"id": item, "name": names[item]} for item in ids],
                "question": authored,
                "creativeLabels": [item["label"] for item in creatives],
                "locale": locale,
                "approval": approval,
                "reviewUrl": f"https://getminds.ai/?studyId={receipt['studyId']}&draftPlanId={draft['draftPlanId']}",
            }
            return {
                "owner": owner,
                "requestId": request_id,
                "fingerprint": fingerprint,
                "review": review,
                "creatives": creatives,
            }

    def run(self, prepared: dict, approval: str, timeout_seconds: int = 900) -> dict:
        review = prepared["review"]
        if not approval or approval != review["approval"]:
            raise MindsError(
                "Review this exact draft and approve it before running. Use the Review draft button."
            )
        owner = self.client.identity()
        if owner != prepared["owner"]:
            raise MindsError("The authenticated Minds account changed. Prepare and review a new request.")
        request_id = uuid_text(prepared["requestId"])
        with self.receipts.locked(owner, request_id):
            receipt = self.receipts.read(owner, request_id)
            if (
                receipt.get("fingerprint") != prepared["fingerprint"]
                or receipt.get("studyId") != review["studyId"]
                or receipt.get("draftPlanId") != review["draftPlanId"]
            ):
                raise MindsError("This request does not match the saved retry receipt. Prepare it again.")
            path = study_path(review["studyId"])
            latest = self.client.data(
                "POST",
                path + "/research-plans/preview",
                body={
                    "loadLatest": True,
                    "draftPlanId": review["draftPlanId"],
                },
            )
            ids = [item["id"] for item in review["audiences"]]
            check_draft(latest, review["question"], ids)
            if digest(review_snapshot(latest, ids)["attachments"]) != receipt.get("assetFingerprint"):
                raise MindsError("The saved creative assets changed after review. Prepare a new request.")
            if digest(review_snapshot(latest, ids)) != approval:
                raise MindsError(
                    "The saved draft changed after review. Prepare it again and approve the new revision."
                )
            if latest.get("draftStatus") == "confirmed":
                run_id = uuid_text(latest.get("runId"))
                if receipt.get("runId") and receipt["runId"] != run_id:
                    raise MindsError("Minds returned a different run for this reviewed draft.")
                receipt["runId"] = run_id
            elif not receipt.get("runId"):
                self.interrupt()
                started = self.client.data(
                    "POST",
                    path + "/research-runs",
                    body={
                        "draftPlanId": review["draftPlanId"],
                        "revision": review["revision"],
                        "confirmation": {"accepted": True, "advancedMethodOptIn": False},
                        "audienceIds": ids,
                        "idempotencyKey": request_key(request_id, "run"),
                    },
                )
                receipt["runId"] = uuid_text(started.get("runId"))
            self.receipts.write(owner, request_id, receipt)
            deadline = self.clock() + timeout_seconds
            while True:
                self.interrupt()
                run = self.client.data("GET", path + f"/research-runs/{uuid_text(receipt['runId'])}")
                if run.get("runId") != receipt["runId"] or run.get("studyId") != review["studyId"]:
                    raise MindsError("Minds returned results for a different Study or run.")
                if run.get("status") == "completed":
                    return run
                if run.get("status") not in ("queued", "running"):
                    raise MindsError(
                        f"Research is {run.get('status', 'unavailable')}. "
                        "No winners were selected; open the saved Study."
                    )
                if self.clock() >= deadline:
                    raise MindsError(
                        "Research is still running. Queue the same workflow "
                        "to resume polling without starting again."
                    )
                # Check cancellation during the API's minimum five-second polling interval.
                for _ in range(5):
                    self.interrupt()
                    self.sleep(1)
