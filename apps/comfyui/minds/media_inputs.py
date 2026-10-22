"""Stable typed socket names, including the original two-input workflow boundary."""

from .client import MAX_CANDIDATES


def media_input_names(kind: str) -> tuple[str, ...]:
    return (kind, f"{kind}_b", *(f"{kind}_{index}" for index in range(3, MAX_CANDIDATES + 1)))


def media_input_types() -> dict:
    # Keep the original four sockets first so saved graph slot indices remain valid.
    inputs = {"images": ("IMAGE",), "images_b": ("IMAGE",), "videos": ("VIDEO",), "videos_b": ("VIDEO",)}
    for kind, datatype in (("images", "IMAGE"), ("videos", "VIDEO")):
        inputs.update({name: (datatype,) for name in media_input_names(kind)[2:]})
    return inputs
