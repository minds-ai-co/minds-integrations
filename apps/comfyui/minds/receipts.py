"""Identifier-only, account-scoped retry receipts with process-safe locking."""

import contextlib
import json
import os
import tempfile
from pathlib import Path

from .client import MindsError
from .contract import digest

FIELDS = {"studyId", "draftPlanId", "revision", "runId", "fingerprint", "assetFingerprint"}


class ReceiptStore:
    def __init__(self, directory: Path):
        self.directory = directory
        directory.mkdir(parents=True, exist_ok=True, mode=0o700)

    @contextlib.contextmanager
    def locked(self, owner: str, request_id: str):
        path = self.directory / (digest([owner, request_id]) + ".lock")
        with path.open("a+b") as stream:
            os.chmod(path, 0o600)
            if os.name == "nt":
                import msvcrt

                stream.write(b"0")
                stream.flush()
                stream.seek(0)
                try:
                    msvcrt.locking(stream.fileno(), msvcrt.LK_NBLCK, 1)
                except OSError:
                    raise MindsError("This request is already running. Wait before retrying.") from None
                try:
                    yield
                finally:
                    stream.seek(0)
                    msvcrt.locking(stream.fileno(), msvcrt.LK_UNLCK, 1)
            else:
                import fcntl

                try:
                    fcntl.flock(stream, fcntl.LOCK_EX | fcntl.LOCK_NB)
                except OSError:
                    raise MindsError("This request is already running. Wait before retrying.") from None
                try:
                    yield
                finally:
                    fcntl.flock(stream, fcntl.LOCK_UN)

    def path(self, owner: str, request_id: str) -> Path:
        return self.directory / (digest([owner, request_id]) + ".json")

    def read(self, owner: str, request_id: str) -> dict:
        path = self.path(owner, request_id)
        if not path.exists():
            return {}
        try:
            value = json.loads(path.read_text())
        except (OSError, ValueError):
            raise MindsError(
                "The local retry receipt cannot be read. Restore it before retrying this request."
            ) from None
        if not isinstance(value, dict) or set(value) - FIELDS:
            raise MindsError("The local retry receipt is invalid.")
        return value

    def write(self, owner: str, request_id: str, receipt: dict):
        if set(receipt) - FIELDS:
            raise MindsError("Only retry identifiers may be saved locally.")
        handle, temporary = tempfile.mkstemp(dir=self.directory, suffix=".tmp")
        try:
            with os.fdopen(handle, "w") as stream:
                json.dump(receipt, stream)
                stream.flush()
                os.fsync(stream.fileno())
            os.replace(temporary, self.path(owner, request_id))
        finally:
            if os.path.exists(temporary):
                os.unlink(temporary)
