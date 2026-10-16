import importlib.util
import json
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location(
    "comfyui_minds", ROOT / "__init__.py", submodule_search_locations=[str(ROOT)]
)
PACKAGE = importlib.util.module_from_spec(spec)
sys.modules[spec.name] = PACKAGE
spec.loader.exec_module(PACKAGE)


class PackageTests(unittest.TestCase):
    def test_package_loads_without_initializing_a_comfy_server_or_credentials(self):
        self.assertEqual(len(PACKAGE.NODE_CLASS_MAPPINGS), 11)
        for node in PACKAGE.NODE_CLASS_MAPPINGS.values():
            self.assertTrue(callable(getattr(node, node.FUNCTION)))
            self.assertFalse(any("key" in name.lower() for name in node.INPUT_TYPES()["required"]))

    def test_every_locale_covers_every_node_and_input(self):
        for locale in ("ar", "de", "en", "es", "fr", "ja", "ko", "tr", "zh"):
            value = json.loads((ROOT / "locales" / locale / "nodeDefs.json").read_text())
            self.assertEqual(set(value), set(PACKAGE.NODE_CLASS_MAPPINGS))
            for name, node in PACKAGE.NODE_CLASS_MAPPINGS.items():
                self.assertEqual(
                    set(value[name]["inputs"]),
                    set(node.INPUT_TYPES()["required"]) | set(node.INPUT_TYPES().get("optional", {})),
                )
                self.assertEqual(len(value[name]["outputs"]), len(node.RETURN_TYPES))

    def test_examples_have_valid_bidirectional_links_and_require_explicit_approval(self):
        examples = list((ROOT / "example_workflows").glob("*.json"))
        self.assertEqual(len(examples), 7)
        for path in examples:
            graph = json.loads(path.read_text())
            nodes = {node["id"]: node for node in graph["nodes"]}
            for link_id, source, source_slot, target, target_slot, datatype in graph["links"]:
                self.assertIn(link_id, nodes[source]["outputs"][source_slot]["links"])
                self.assertEqual(nodes[target]["inputs"][target_slot]["link"], link_id)
                self.assertEqual(nodes[target]["inputs"][target_slot]["type"], datatype)
            for node in nodes.values():
                if node["type"] == "MindsPreference":
                    self.assertEqual(node["widgets_values"][9], "")
            self.assertEqual(sum(node["type"] == "MindsPreference" for node in nodes.values()), 1)
            self.assertFalse(
                any(
                    node["type"].startswith("Minds") and node["type"] != "MindsPreference"
                    for node in nodes.values()
                )
            )
            self.assertNotIn("Authorization", path.read_text())
