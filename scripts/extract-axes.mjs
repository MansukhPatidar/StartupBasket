#!/usr/bin/env node
/**
 * Extract 7-axis scores from the feasibility score table in each proposal.md
 * and inject them into the YAML frontmatter as an `axes:` block.
 *
 * Usage: node scripts/extract-axes.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const IDEAS_DIR = join(process.cwd(), "ideas");

const AXIS_PATTERNS = [
  { key: "problem", pattern: /Problem intensity\s*\|\s*\d+\s*\|\s*(\d+)\/\d+/ },
  { key: "demand", pattern: /Demand evidence\s*\|\s*\d+\s*\|\s*(\d+)\/\d+/ },
  { key: "build", pattern: /Build feasibility\s*\|\s*\d+\s*\|\s*(\d+)\/\d+/ },
  { key: "distribution", pattern: /Distribution clarity\s*\|\s*\d+\s*\|\s*(\d+)\/\d+/ },
  { key: "revenue", pattern: /Revenue mechanics\s*\|\s*\d+\s*\|\s*(\d+)\/\d+/ },
  { key: "time", pattern: /Time to first revenue\s*\|\s*\d+\s*\|\s*(\d+)\/\d+/ },
  { key: "defensibility", pattern: /Defensibility\s*\|\s*\d+\s*\|\s*(\d+)\/\d+/ },
];

let updated = 0;
let skipped = 0;

for (const dir of readdirSync(IDEAS_DIR).sort()) {
  const proposalPath = join(IDEAS_DIR, dir, "proposal.md");
  try {
    statSync(proposalPath);
  } catch {
    continue;
  }

  const content = readFileSync(proposalPath, "utf-8");

  // Skip if already has axes
  if (/^axes:/m.test(content.split("---")[1] || "")) {
    skipped++;
    continue;
  }

  // Extract scores
  const axes = {};
  let allFound = true;
  for (const { key, pattern } of AXIS_PATTERNS) {
    const m = content.match(pattern);
    if (m) {
      axes[key] = parseInt(m[1], 10);
    } else {
      allFound = false;
      console.warn(`  WARN: ${dir} missing ${key}`);
      axes[key] = 0;
    }
  }

  // Inject axes block before founderFit line in frontmatter
  const axesBlock = [
    "axes:",
    `  problem: ${axes.problem}`,
    `  demand: ${axes.demand}`,
    `  build: ${axes.build}`,
    `  distribution: ${axes.distribution}`,
    `  revenue: ${axes.revenue}`,
    `  time: ${axes.time}`,
    `  defensibility: ${axes.defensibility}`,
  ].join("\n");

  let newContent;
  if (content.includes("founderFit:")) {
    newContent = content.replace(/^(founderFit:)/m, `${axesBlock}\n$1`);
  } else if (content.includes("featured:")) {
    newContent = content.replace(/^(featured:)/m, `${axesBlock}\n$1`);
  } else {
    // Insert before closing ---
    const parts = content.split("---");
    parts[1] = parts[1].trimEnd() + "\n" + axesBlock + "\n";
    newContent = parts.join("---");
  }

  writeFileSync(proposalPath, newContent);
  updated++;
  console.log(`  OK: ${dir} → ${JSON.stringify(axes)}`);
}

console.log(`\nDone. Updated: ${updated}, Skipped (already had axes): ${skipped}`);
