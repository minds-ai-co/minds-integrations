"""Publish from the standalone distribution using a runtime-injected Registry credential."""

import os
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main():
    token = os.environ.get("COMFY_REGISTRY_TOKEN")
    if not token:
        raise SystemExit("Configure the verified Comfy publisher's Registry token in the credential owner.")
    # Publish only the public distribution, never another repository's surrounding files.
    top = subprocess.run(
        ["git", "rev-parse", "--show-toplevel"], cwd=ROOT, capture_output=True, text=True, check=True
    ).stdout.strip()
    if Path(top).resolve() != ROOT:
        raise SystemExit("Publish from the standalone ComfyUI-Minds distribution checkout.")
    # The official CLI accepts the key through its hidden prompt. No token in arguments or logs.
    result = subprocess.run(
        [sys.executable, "-m", "comfy_cli", "--skip-prompt", "--no-enable-telemetry", "node", "publish"],
        cwd=ROOT,
        input=token + "\n",
        text=True,
        capture_output=True,
        env={key: value for key, value in os.environ.items() if key != "COMFY_REGISTRY_TOKEN"},
        timeout=300,
    )
    if result.returncode:
        raise SystemExit(
            "Comfy Registry publication failed. Verify publisher ownership and the package version."
        )
    print("Comfy Registry accepted the publication. Verify the listed version before announcing it.")


if __name__ == "__main__":
    main()
