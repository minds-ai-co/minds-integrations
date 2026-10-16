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

    def research(self, creatives, question, context):
        prepare = self.node(
            "MindsPrepareCreativeTest",
            [("creatives", "MINDS_CREATIVES")],
            [("draft", "MINDS_CREATIVE_DRAFT"), ("review_json", "STRING")],
            ["", question, context, "en", ""],
        )
        run = self.node(
            "MindsRunCreativeTest",
            [("draft", "MINDS_CREATIVE_DRAFT")],
            [
                ("preference_result", "MINDS_CREATIVE_RESULT"),
                ("tested_creatives", "MINDS_CREATIVES"),
                ("results_json", "STRING"),
            ],
            ["", 900],
        )
        self.link(creatives, 0, prepare, 0)
        self.link(prepare, 0, run, 0)
        return run

    def selector(self, run, *, audience="", native="image"):
        select = self.node(
            "MindsSelectCreatives",
            [("preference_result", "MINDS_CREATIVE_RESULT"), ("tested_creatives", "MINDS_CREATIVES")],
            [("selected_creatives", "MINDS_CREATIVES"), ("selected_labels_json", "STRING")],
            [audience, 1],
        )
        self.link(run, 0, select, 0)
        self.link(run, 1, select, 1)
        if native:
            datatype = "IMAGE" if native == "image" else "VIDEO"
            output = self.node(
                "MindsSelectedImages" if native == "image" else "MindsSelectedVideo",
                [("selected_creatives", "MINDS_CREATIVES")],
                [(native, datatype)],
                [],
            )
            self.link(select, 0, output, 0)
            save = self.node(
                "SaveImage" if native == "image" else "SaveVideo",
                [(native + "s" if native == "image" else native, datatype)],
                [],
                ["Minds/selected"] if native == "image" else ["Minds/selected", "mp4", "auto"],
            )
            self.link(output, 0, save, 0)
        return select

    def save(self, slug):
        self.node(
            "Note",
            [],
            [],
            [
                self.title + "\n\nChoose source files and Audience IDs. Queue once to prepare. "
                "On Run Reviewed Test, open Review draft and approve. Queue again to run. "
                "Use New test request after changing inputs. API key stays in the server environment."
            ],
        )
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


def image_graph(title, labels):
    graph = Graph(title)
    first = graph.node(
        "LoadImage", [], [("IMAGE", "IMAGE"), ("MASK", "MASK")], ["minds-sample-a.png", "image"]
    )
    second = graph.node(
        "LoadImage", [], [("IMAGE", "IMAGE"), ("MASK", "MASK")], ["minds-sample-b.png", "image"]
    )
    candidates = []
    for source, label in zip((first, second), labels, strict=True):
        candidate = graph.node(
            "MindsCreativeImages",
            [("images", "IMAGE")],
            [("creatives", "MINDS_CREATIVES")],
            [json.dumps([label])],
        )
        graph.link(source, 0, candidate, 0)
        candidates.append(candidate)
    creatives = graph.node(
        "MindsCombineCreatives",
        [("first", "MINDS_CREATIVES"), ("second", "MINDS_CREATIVES")],
        [("creatives", "MINDS_CREATIVES")],
        [],
    )
    for index, candidate in enumerate(candidates):
        graph.link(candidate, 0, creatives, index)
    return graph, creatives


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
        graph, creatives = image_graph(title, labels)
        run = graph.research(creatives, question, "")
        graph.selector(run)
        if slug == "04-audience-differences":
            graph.selector(run)
        graph.save(slug)
    graph = Graph("Video concept preference before production")
    concepts = [
        {"label": "Demonstration", "text": "Show the product being used in one continuous shot."},
        {"label": "Story", "text": "A customer explains the problem and demonstrates the solution."},
    ]
    creatives = graph.node(
        "MindsCreativeAssets", [], [("creatives", "MINDS_CREATIVES")], [json.dumps(concepts)]
    )
    run = graph.research(
        creatives, "Which video concept would you prefer to watch?", "Compare the supplied concepts."
    )
    graph.selector(run, native=None)
    graph.save("06-video-concepts")
    graph = Graph("Compare native videos, including their audio")
    candidates = []
    for label, file in (("Video A", "minds-sample-a.mp4"), ("Video B", "minds-sample-b.mp4")):
        load = graph.node("LoadVideo", [], [("video", "VIDEO")], [file])
        candidate = graph.node(
            "MindsCreativeVideo", [("video", "VIDEO")], [("creatives", "MINDS_CREATIVES")], [label]
        )
        graph.link(load, 0, candidate, 0)
        candidates.append(candidate)
    combined = graph.node(
        "MindsCombineCreatives",
        [("first", "MINDS_CREATIVES"), ("second", "MINDS_CREATIVES")],
        [("creatives", "MINDS_CREATIVES")],
        [],
    )
    for index, candidate in enumerate(candidates):
        graph.link(candidate, 0, combined, index)
    run = graph.research(
        combined, "Which video do you prefer?", "Consider the complete video, including audio."
    )
    graph.selector(run, native="video")
    graph.save("07-native-video-selection")


if __name__ == "__main__":
    main()
