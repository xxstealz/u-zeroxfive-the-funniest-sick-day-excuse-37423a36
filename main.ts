// The Funniest Sick-Day Excuse — u-zeroxfive-the-funniest-sick-day-excuse-37423a36
// Writes a single line to /output/entry.txt: one funny reason to call in
// sick, under 200 characters, in the voice of a real person typing a message.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My laptop caught a virus from my smart fridge, and now we're both quarantined. I can't come in.";

// Gate check (competition: 1 to 200 characters, one line, not only whitespace).
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, outside the 1-200 gate`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${[...LINE].length} chars to ${join(outDir, "entry.txt")}`);
