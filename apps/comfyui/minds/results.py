"""Rank exact API distributions by Audience. No cross-Audience pooling or fabricated uncertainty."""

import math

from .client import MindsError
from .contract import creative_identity, digest


def preference_results(run: dict, prepared: dict) -> dict:
    review = prepared["review"]
    if run.get("status") != "completed":
        raise MindsError("Only complete research can select creatives.")
    if run.get("runId") is None or run.get("studyId") != review["studyId"]:
        raise MindsError("The result does not belong to this reviewed Study.")
    artifacts = [item for item in run.get("artifacts", []) if item.get("kind") == "responses"]
    if len(artifacts) != 1 or artifacts[0].get("questionIndex") != 0:
        raise MindsError("The run did not return the exact preference question.")
    artifact = artifacts[0]
    output = artifact.get("outputData") or {}
    if (
        artifact.get("error")
        or artifact.get("responseCoverage")
        or artifact.get("administrability")
        or output.get("type") != "categorical"
        or output.get("ranking")
    ):
        raise MindsError("This result has incomplete or incompatible evidence; no creatives were selected.")
    coverage = output.get("responseCoverage")
    if coverage and coverage.get("status") != "complete":
        raise MindsError("The preference question has incomplete respondent coverage.")
    if run.get("respondentMediaEvidence", {}).get("status") == "incomplete":
        raise MindsError("Video evidence was incomplete; no creatives were selected.")
    labels = review["creativeLabels"]
    expected = {item["id"] for item in review["audiences"]}
    result = []
    seen = set()
    for audience in output.get("audiences", []):
        audience_id = audience.get("audienceId")
        if audience_id not in expected or audience_id in seen:
            raise MindsError("The result contains an unexpected or duplicate Audience.")
        seen.add(audience_id)
        distribution = audience.get("distribution")
        if (
            not isinstance(distribution, dict)
            or not distribution
            or set(distribution) - set(labels)
            or any(
                type(value) not in (float, int) or not math.isfinite(value) or value < 0
                for value in distribution.values()
            )
        ):
            raise MindsError("The API distribution does not match the reviewed creative alternatives.")
        total = sum(distribution.values())
        if total <= 0:
            raise MindsError("The API returned an empty preference distribution.")
        ranked = sorted(
            [
                {"label": label, "index": index, "share": distribution.get(label, 0) / total}
                for index, label in enumerate(labels)
            ],
            key=lambda item: -item["share"],
        )
        for item in ranked:
            item["rank"] = 1 + sum(other["share"] > item["share"] for other in ranked)
        result.append(
            {
                "audienceId": audience_id,
                "audience": audience.get("audience", audience_id),
                "ranking": ranked,
                "winners": [item["index"] for item in ranked if item["rank"] == 1],
                "estimation": output.get("estimation"),
                "confidence": None,
            }
        )
    if seen != expected:
        raise MindsError("At least one selected Audience has no preference result.")
    return {
        "studyId": review["studyId"],
        "runId": run["runId"],
        "reviewUrl": review["reviewUrl"],
        "question": review["question"],
        "audiences": result,
        "creativeFingerprint": digest([creative_identity(item) for item in prepared["creatives"]]),
        "interpretation": "Estimated preference among these alternatives; not measured ad performance.",
    }


def selected_creatives(result: dict, creatives: list[dict], audience_id: str, top_k: int) -> list[dict]:
    if digest([creative_identity(item) for item in creatives]) != result["creativeFingerprint"]:
        raise MindsError("These creatives are different from the ranked creative batch.")
    audiences = result["audiences"]
    if audience_id:
        audiences = [item for item in audiences if item["audienceId"] == audience_id]
    if len(audiences) != 1:
        raise MindsError("Choose one result Audience ID for downstream creative selection.")
    ranking = audiences[0]["ranking"]
    if type(top_k) is not int or not 1 <= top_k <= len(ranking):
        raise MindsError("Choose a shortlist size within the candidate count.")
    cutoff = ranking[top_k - 1]["share"]
    # Include ties at the cutoff: a tied winner must never be chosen by input order.
    selected = [item for item in ranking if item["share"] >= cutoff]
    if len(creatives) != len(ranking) or any(
        creatives[item["index"]]["label"] != item["label"] for item in ranking
    ):
        raise MindsError("These creatives are different from the ranked creative batch.")
    return [creatives[item["index"]] for item in selected]
