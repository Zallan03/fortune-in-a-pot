// Entry for "Fortune in a Pot" (make.fun).
// Writes one kind, funny fortune for a houseplant to /output/entry.txt.
// Limit: 1 line, at most 120 characters.
//
// The winning line: a real fortune cadence ("will move in this week")
// written for THIS plant on THIS windowsill, dodging every flooded
// trope -- no sunbeam, no leaf, no outgrowing the pot, no "someone will
// learn your name". A small spider moves in, pays rent in compliments,
// and eats the flies: specific, warm, and funny to a plant lover.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A small spider will move in this week; do not panic \u2014 it pays rent in compliments and eats the flies.";

if (
  ENTRY.length > 120 ||
  Buffer.byteLength(ENTRY, "utf8") > 120 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error("Entry violates the 120-character single-line gate.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
