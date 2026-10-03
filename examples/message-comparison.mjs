import { readFile, open, rename, unlink, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import {
  MindsMcpClient, MindsBillingClient, MessageComparisonJourney, newComparison,
} from "../packages/mcp-client/dist/index.js";

const [command, checkpointPath, ...args] = process.argv.slice(2);
const commands = ["prepare", "run", "catalog", "checkout", "resume", "poll", "report"];
let lock;
let lockPath;
try {
  if (!commands.includes(command) || !checkpointPath) {
    throw new Error("Usage: node examples/message-comparison.mjs prepare|run|catalog|checkout|resume|poll|report CHECKPOINT [arguments]");
  }
  if (!process.env.MINDS_API_KEY) throw new Error("Set MINDS_API_KEY through your credential manager");
  const path = resolve(checkpointPath);
  await mkdir(dirname(path), { recursive: true, mode: 0o700 });
  lockPath = `${path}.lock`;
  lock = await open(lockPath, "wx", 0o600);
  const save = async state => {
    const temporary = `${path}.${crypto.randomUUID()}.tmp`;
    const file = await open(temporary, "wx", 0o600);
    try { await file.writeFile(JSON.stringify(state, null, 2)); await file.sync(); }
    finally { await file.close(); }
    await rename(temporary, path);
  };
  let state;
  try { state = JSON.parse(await readFile(path, "utf8")); }
  catch (error) {
    if (error.code !== "ENOENT" || command !== "prepare" || !args[0]) throw error;
    state = newComparison(JSON.parse(await readFile(args[0], "utf8")));
    await save(state);
  }
  const journey = new MessageComparisonJourney(state, {
    research: new MindsMcpClient({ apiKey: process.env.MINDS_API_KEY, clientName: "minds-message-comparison", clientVersion: "0.1.0" }),
    billing: new MindsBillingClient({ apiKey: process.env.MINDS_API_KEY }), save,
  });
  if (command === "prepare") {
    const checkpoint = await journey.prepare();
    console.log(JSON.stringify({ stage: checkpoint.stage, draft: checkpoint.draft }, null, 2));
  } else if (command === "run") {
    console.log(JSON.stringify(await journey.run({ id: args[0], revision: Number(args[1]) }), null, 2));
  } else if (command === "catalog") {
    console.log(JSON.stringify(await journey.catalog(), null, 2));
  } else if (command === "checkout") {
    if (!args[0]) throw new Error("Provide a purchase file containing input and buyerApproved");
    const purchase = JSON.parse(await readFile(args[0], "utf8"));
    console.log(JSON.stringify(await journey.purchase(purchase.input, purchase.buyerApproved), null, 2));
  } else if (command === "resume") {
    console.log(JSON.stringify(await journey.resume(args[0] === "--confirm"), null, 2));
  } else if (command === "report") {
    console.log(JSON.stringify(await journey.report(), null, 2));
  } else {
    console.log(JSON.stringify(await journey.poll(), null, 2));
  }
} catch (error) {
  // Provider errors can contain private account data. Keep CLI failures bounded.
  console.error(error.code === "EEXIST" ? "Checkpoint is locked by another process." :
    "Workflow did not complete. Inspect the saved stage, supplied arguments and authenticated account; retry the same checkpoint.");
  process.exitCode = 1;
} finally {
  if (lock) { await lock.close(); await unlink(lockPath); }
}
