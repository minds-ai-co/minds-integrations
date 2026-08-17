const target = process.argv[2] || "https://getminds.ai/studies/private-label-surge-us-2026-05";
const response = await fetch(target, { redirect: "follow" });
if (!response.ok) throw new Error(`Dataset page returned HTTP ${response.status}`);
const html = await response.text();
const scripts = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
const records = scripts.flatMap((match) => {
  try {
    const parsed = JSON.parse(match[1]);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    return [];
  }
});
const datasets = records.flatMap((record) => {
  if (record?.["@type"] === "Dataset") return [record];
  if (Array.isArray(record?.["@graph"])) return record["@graph"].filter((item) => item?.["@type"] === "Dataset");
  return [];
});
if (!datasets.length) throw new Error("No Dataset JSON-LD found");
for (const dataset of datasets) {
  for (const required of ["name", "description"]) {
    if (!dataset[required]) throw new Error(`Dataset is missing ${required}`);
  }
}
console.log(JSON.stringify({ target, datasetCount: datasets.length, names: datasets.map((item) => item.name) }, null, 2));
