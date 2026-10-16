"""Fixed-origin transport. Credentials never enter a workflow or API error message."""

import os
from urllib.parse import urlsplit

import requests

ORIGIN = "https://getminds.ai"
MAX_UPLOAD_BYTES = 50 * 1024 * 1024  # Existing multipart proxy limit; remote imports allow 100 MB.
MAX_CANDIDATES = 20


class MindsError(RuntimeError):
    def __init__(self, message: str, *, status: int = 0):
        super().__init__(message)
        self.status = status


class MindsClient:
    def __init__(self, api_key: str | None = None, *, session=None):
        self._key = api_key if api_key is not None else os.environ.get("MINDS_API_KEY", "")
        if not self._key or self._key != self._key.strip() or "\n" in self._key or "\r" in self._key:
            raise MindsError("Set MINDS_API_KEY in the ComfyUI server environment before using Minds.")
        self._session = session or requests.Session()

    def request(self, method: str, path: str, *, body=None, files=None, key: str | None = None):
        parsed = urlsplit(path)
        if parsed.scheme or parsed.netloc or not parsed.path.startswith("/api/") or parsed.fragment:
            raise MindsError("Minds requests must use an authenticated Minds API path.")
        headers = {
            "Authorization": f"Bearer {self._key}",
            "Accept": "application/json",
            "User-Agent": "comfyui-minds/0.1.0",
        }
        if key:
            headers["Idempotency-Key"] = key
        try:
            response = self._session.request(
                method,
                ORIGIN + path,
                headers=headers,
                json=body,
                files=files,
                timeout=(15, 120),
                allow_redirects=False,
            )
        except requests.RequestException:
            raise MindsError(
                "Minds could not be reached. Retry with the same request ID to resume safely."
            ) from None
        if not 200 <= response.status_code < 300:
            guidance = {
                401: "Check the Minds API key in the server environment.",
                402: "Review this account's access and allowances in Minds.",
                403: "Check access to the selected Audiences and the account's plan allowances.",
                409: "The request changed or its Minds are not ready. Review it in Minds before retrying.",
                413: "This asset exceeds the Minds upload limit.",
                429: "Minds is busy. Retry the same request later.",
            }.get(response.status_code, "Review the saved Study in Minds, then retry the same request.")
            # Never echo upstream bodies, signed URLs, headers or requests exception strings.
            raise MindsError(
                f"Minds returned HTTP {response.status_code}. {guidance}", status=response.status_code
            )
        try:
            return response.json()
        except (ValueError, requests.exceptions.JSONDecodeError):
            raise MindsError("Minds returned an unreadable response; retry the same request ID.") from None

    def data(self, method: str, path: str, **kwargs):
        value = self.request(method, path, **kwargs)
        if not isinstance(value, dict) or not isinstance(value.get("data"), dict):
            raise MindsError("Minds returned an unexpected API receipt.")
        return value["data"]

    def identity(self) -> str:
        from .contract import uuid_text

        return uuid_text(self.request("GET", "/api/v1/auth/me").get("id"))

    def upload(self, content: bytes, name: str, mime: str) -> dict:
        if not 0 < len(content) <= MAX_UPLOAD_BYTES:
            raise MindsError("Each locally uploaded creative must be non-empty and no larger than 50 MB.")
        value = self.request("POST", "/api/uploads/proxy", files={"file": (name, content, mime)})
        path = value.get("path", "")
        # Account authentication authorizes the stored path. Do not retain its signed URL.
        if not isinstance(path, str) or not path.startswith("chat/") or ".." in path.split("/"):
            raise MindsError("Minds did not confirm the stored creative.")
        return {
            "path": path,
            "url": "/api/uploads/chat/" + path.removeprefix("chat/"),
            "name": name,
            "mimeType": mime,
        }
