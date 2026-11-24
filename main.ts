// The Most Honest Outage Line — program/v1 entry.
// Writes a single honest status-page line to /output/entry.txt.
// Deterministic and self-contained: no network, no files it does not ship.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "All servers are down, and so am I. I cannot check what broke, because the tools I would use are down too, and I will not guess at a cause or a time to fix it.";

// Fail loudly rather than ever writing an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-160 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
