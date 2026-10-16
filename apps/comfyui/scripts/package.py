"""Build a distribution containing only reviewed node-pack files."""

import argparse
import subprocess
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIRECTORIES = {"minds", "web", "locales", "example_workflows", "docs", "tests", "scripts"}
FILES = {
    "__init__.py",
    "nodes.py",
    "nodes_inputs.py",
    "nodes_outputs.py",
    "nodes_research.py",
    "pyproject.toml",
    "requirements.txt",
    "LICENSE",
    ".gitignore",
    ".comfyignore",
}


def distribution_files():
    tracked = (
        subprocess.run(["git", "ls-files", "-z", "--", "."], cwd=ROOT, capture_output=True, check=True)
        .stdout.decode()
        .split("\0")
    )
    for filename in sorted(filter(None, tracked)):
        path = ROOT / filename
        relative = path.relative_to(ROOT)
        if (
            not path.is_file()
            or any(part.startswith(".") or part == "__pycache__" for part in relative.parts[:-1])
            or path.suffix == ".pyc"
        ):
            continue
        if (len(relative.parts) == 1 and relative.name in FILES) or relative.parts[0] in DIRECTORIES:
            yield path, relative


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    with zipfile.ZipFile(args.output, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        for path, relative in distribution_files():
            archive.write(path, "ComfyUI-Minds/" + relative.as_posix())
    print(args.output.name)


if __name__ == "__main__":
    main()
