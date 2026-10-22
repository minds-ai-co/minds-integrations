"""Maintain runnable ComfyUI examples using only built-in nodes and this pack."""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class Graph:
    def __init__(self, title):
        self.title, self.nodes, self.links = title, [], []

    def node(self, kind, inputs, outputs, widgets, *, title=None):
        index = len(self.nodes) + 1
        node = {
            "id": index,
            "type": kind,
            "pos": [80 + ((index - 1) % 4) * 390, 100 + ((index - 1) // 4) * 330],
            "size": [350, 260],
            "flags": {},
            "order": index - 1,
            "mode": 0,
            "inputs": [{"name": name, "type": datatype, "link": None} for name, datatype in inputs],
            "outputs": [{"name": name, "type": datatype, "links": []} for name, datatype in outputs],
            "properties": {"Node name for S&R": kind},
            "widgets_values": widgets,
        }
        if title:
            node["title"] = title
        self.nodes.append(node)
        return node

    def link(self, source, slot, target, target_slot):
        index = len(self.links) + 1
        datatype = source["outputs"][slot]["type"]
        assert datatype == target["inputs"][target_slot]["type"]
        self.links.append([index, source["id"], slot, target["id"], target_slot, datatype])
        source["outputs"][slot]["links"].append(index)
        target["inputs"][target_slot]["link"] = index

    def research(self, labels, question, context="", assets=None):
        return self.node(
            "MindsPreference",
            [("images", "IMAGE"), ("images_b", "IMAGE"), ("videos", "VIDEO"), ("videos_b", "VIDEO")],
            [
                ("selected_images", "IMAGE"),
                ("selected_videos", "VIDEO"),
                ("results_json", "STRING"),
                ("preference_result", "MINDS_CREATIVE_RESULT"),
                ("selected_creatives", "MINDS_CREATIVES"),
            ],
            ["", question, context, json.dumps(labels), json.dumps(assets or []), "en", "", 1, "", "", 900],
        )

    def selector(self, node, native="image"):
        datatype = "IMAGE" if native == "image" else "VIDEO"
        save = self.node(
            "SaveImage" if native == "image" else "SaveVideo",
            [("images" if native == "image" else "video", datatype)],
            [],
            ["Minds/selected"] if native == "image" else ["Minds/selected", "mp4", "auto"],
        )
        self.link(node, 0 if native == "image" else 1, save, 0)
        return save

    def save(self, slug):
        note = self.node(
            "Note",
            [],
            [],
            [
                self.title + "\n\nChoose source files and Audience IDs. Queue once to prepare. "
                "Read the review dialog and approve. Queue again to run and see results inside Minds. "
                "Use New test request after changing inputs. API key stays in the server environment."
            ],
        )
        note["pos"] = [1180, 500]
        result = {
            "last_node_id": len(self.nodes),
            "last_link_id": len(self.links),
            "nodes": self.nodes,
            "links": self.links,
            "groups": [],
            "config": {},
            "extra": {"minds_example": slug},
            "version": 0.4,
        }
        path = ROOT / "example_workflows" / (slug + ".json")
        path.parent.mkdir(exist_ok=True)
        path.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n")


def image_graph(title, labels, question):
    graph = Graph(title)
    sources = [
        graph.node("LoadImage", [], [("IMAGE", "IMAGE"), ("MASK", "MASK")], [file, "image"])
        for file in ("minds-sample-a.png", "minds-sample-b.png")
    ]
    node = graph.research(labels, question)
    node["pos"] = [480, 60]
    node["size"] = [620, 1100]
    for index, source in enumerate(sources):
        source["pos"] = [40, 80 + index * 380]
        graph.link(source, 0, node, index)
    save = graph.selector(node)
    save["pos"] = [1180, 100]
    return graph, node


def main():
    examples = [
        (
            "01-ad-selection",
            "Ad creative selection",
            ["Ad A", "Ad B"],
            "Which ad makes you more interested in the product?",
        ),
        (
            "02-thumbnail-selection",
            "Thumbnail preference",
            ["Thumbnail A", "Thumbnail B"],
            "Which thumbnail would you prefer to open?",
        ),
        (
            "03-packaging-selection",
            "Packaging preference",
            ["Packaging A", "Packaging B"],
            "Which packaging design do you prefer?",
        ),
        (
            "04-audience-differences",
            "Separate Audience preferences",
            ["Creative A", "Creative B"],
            "Which creative do you prefer?",
        ),
        (
            "05-original-versus-revision",
            "Original versus revision",
            ["Original", "Revision"],
            "Which version communicates the offer more clearly?",
        ),
    ]
    for slug, title, labels, question in examples:
        graph, node = image_graph(title, labels, question)
        if slug == "04-audience-differences":
            node["title"] = "Minds · Compare Audience preferences"
        graph.save(slug)
    graph = Graph("Video concept preference before production")
    concepts = [
        {"label": "Demonstration", "text": "Show the product being used in one continuous shot."},
        {"label": "Story", "text": "A customer explains the problem and demonstrates the solution."},
    ]
    node = graph.research(
        [], "Which video concept would you prefer to watch?", "Compare the supplied concepts.", concepts
    )
    node["pos"], node["size"] = [100, 60], [620, 1100]
    graph.save("06-video-concepts")
    graph = Graph("Compare native videos, including their audio")
    sources = [
        graph.node("LoadVideo", [], [("video", "VIDEO")], [file])
        for file in ("minds-sample-a.mp4", "minds-sample-b.mp4")
    ]
    node = graph.research(
        ["Video A", "Video B"], "Which video do you prefer?", "Consider the complete video, including audio."
    )
    node["pos"], node["size"] = [480, 60], [620, 1100]
    for index, source in enumerate(sources):
        source["pos"] = [40, 80 + index * 380]
        graph.link(source, 0, node, index + 2)
    save = graph.selector(node, "video")
    save["pos"] = [1180, 100]
    graph.save("07-native-video-selection")
    for native, slug in (("image", "08-four-image-selection"), ("video", "09-four-video-selection")):
        graph = Graph(f"Compare four {native}s in one Study")
        kind, datatype, extension = (
            ("LoadImage", "IMAGE", "png") if native == "image" else ("LoadVideo", "VIDEO", "mp4")
        )
        sources = [
            graph.node(
                kind,
                [],
                [("IMAGE", "IMAGE"), ("MASK", "MASK")] if native == "image" else [("video", "VIDEO")],
                [f"minds-sample-{letter}.{extension}", "image"]
                if native == "image"
                else [f"minds-sample-{letter}.{extension}"],
            )
            for letter in ("a", "b", "a", "b")
        ]
        node = graph.research(
            [],
            f"Which {native} do you prefer?",
            "Replace the four illustrative inputs with four different creatives before testing.",
        )
        node["widgets_values"][3] = ""  # Automatic labels follow the actual connected candidate count.
        node["inputs"].extend({"name": f"{native}s_{n}", "type": datatype, "link": None} for n in (3, 4))
        node["pos"], node["size"] = [480, 60], [620, 1100]
        for index, source in enumerate(sources):
            source["pos"] = [40, 50 + index * 280]
            slot = (index if native == "image" else index + 2) if index < 2 else index + 2
            graph.link(source, 0, node, slot)
        save = graph.selector(node, native)
        save["pos"] = [1180, 100]
        graph.save(slug)


if __name__ == "__main__":
    main()
