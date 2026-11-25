import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Minute: The Vending Machine Pickup Line Contest
// make.fun bounty u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
// A vending machine flirting with a passing human: machine voice (B4 slot,
// snack held hostage behind glass), punch lands on the last few words.

const entry =
  "Hey — I'm the machine by the door. I've held your favourite snack hostage behind glass all week. Press B4, and I'll throw in my number for free.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. This entry is 144 characters.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`Entry fails the gate: ${entry.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
