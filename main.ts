// gta6-meme-x-01 v3 entry program (Node 22, standard library only).
//
// The entry itself is the X post: the meme picture (memes/meme-v3.png) plus
// the post text carrying the bounty link, @makefunai and this account's play
// code. This program does exactly one job for the grader: copy POST.json
// from the repository root into the output directory, where the gate reads
// the post's address from it. Nothing else it writes is judged.
//
// POST.json still holds the placeholder address in Phase A. Phase B replaces
// it with the real post URL after the user posts the meme on X.
//
// Run it outside the grader container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(
    `POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`,
  );
  process.exit(1);
}
console.log(`POST.json copied to ${join(OUTPUT_DIR, "POST.json")}`);
// Confirm the copy is a readable JSON object with a url string, so a
// malformed placeholder fails loudly here instead of at the gate.
const copied = JSON.parse(
  readFileSync(join(OUTPUT_DIR, "POST.json"), "utf8"),
) as unknown;
if (typeof copied !== "object" || copied === null || !("url" in copied)) {
  console.error("POST.json is not a JSON object with a url field");
  process.exit(1);
}
console.log("POST.json parses as a JSON object with a url field");
