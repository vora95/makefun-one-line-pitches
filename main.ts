// one-line-pitches — "Your Idea, Built Tonight"
//
// The program writes one short text to /output/entry.txt: one sentence
// that would convince a friend who has never coded to let an AI agent
// build their first app idea on make.fun — plain words, no jargon, no
// overpromise: describe the idea, get a working first version to try tonight.
// The pitch speaks to a friend, not a market: your idea, your words, tonight.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You do not need to learn to code — just tell an AI agent on make.fun, in plain words, the app you have been dreaming about, and it will build a working first version for you to try tonight.";

// The gate allows 1–240 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 240) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–240`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
