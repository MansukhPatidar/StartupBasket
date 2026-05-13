---
description: Generate one fresh product idea using the full 6-stage pipeline (Signals → Triangulation → Shape → Filter → Research → Score → Publish).
---

You are running the **StartupBasket idea generator**. Your job is to produce exactly **one** new product idea by executing the full 6-stage pipeline. This is a research pipeline, not a creative writing exercise.

## Step 0 — Load context

Read these four files in full before doing anything else. They are not optional:

1. `PERSONA.md` — the operator voice you must adopt. Direct, opinionated, slightly impatient, allergic to fluff.
2. `PIPELINE.md` — the 6-stage generation framework. This is your process. Follow it.
3. `TEMPLATE.md` — the 15-section schema every proposal fills. Every section is required.
4. `RUBRIC.md` — the 4-layer scoring framework. Score honestly, not aspirationally.

## Step 1 — Scan for duplicates and portfolio balance

List the contents of `ideas/`. Read the titles, categories, and geographies of the most recent ~20 proposals.

- **Do not produce a near-duplicate.**
- **Check category balance.** If one category (e.g. India SaaS, DevTools) is over-represented in the last 15 ideas, deliberately target an under-represented category: regulatory arbitrage, geographic arbitrage, tech-unlock, underserved niche, workflow automation, or platform shift.
- **Check geography balance.** If one geography dominates the last 15 ideas, target a different one.
- **Check naming monotony.** Read the `title:` and `oneLiner:` fields of the last 20 proposals. Tally the head noun used after the em-dash (e.g. "cockpit", "copilot", "console", "shield"). **No single noun may appear in more than 2 of the last 20 titles.** If the obvious noun for your idea is already at the cap, you MUST pick a different one (see Step 7 for the naming rules).

## Step 2 — Signal Harvesting (Pipeline Stage 1)

Use `WebSearch` to collect 5–10 raw signals from diverse sources. Vary your queries across these categories:

**Complaint mines:**
- "I wish there was" site:reddit.com (niche subreddits)
- "why is there no" + a vertical you're targeting
- G2/Capterra 1-2 star reviews for a category

**Demand signals:**
- "trending SaaS products {{current month and year}}"
- "Product Hunt top products this week"
- YC batch announcements, Crunchbase recent fundings in a vertical

**Regulatory/policy shifts:**
- New regulations creating compliance needs (data privacy, ESG, labor law, etc.)

**Technology unlocks:**
- New AI capabilities, cheaper inference, new APIs, new hardware platforms

**Market structural shifts:**
- Platform changes, demographic shifts, emerging market trends

**Arbitrage signals:**
- Products successful in US/EU but absent in India/SEA/LatAm (or vice versa)
- Enterprise tools that SMBs can't afford — can AI make a $500/mo version of a $5K/mo tool?

For each signal, record: **what it is, source URL, date, and why it matters.**

## Step 3 — Signal Triangulation (Pipeline Stage 2)

Group your signals into opportunity clusters. An opportunity is valid **only when you can cite at least 3 independent signals**:

1. **One demand signal** — people want this (complaints, search volume, paid alternatives exist)
2. **One feasibility signal** — this became possible or cheaper recently (new API, model, platform, hardware)
3. **One economic signal** — money is moving here (competitor funding, market growth, regulatory spend)

Write out 2–4 triangulated clusters. **Discard any cluster that can't meet the 3-signal bar.** Single-signal ideas are noise, not opportunities.

## Step 4 — Shape Into Candidate (Pipeline Stage 3)

Pick the strongest triangulated cluster. Shape it into a concrete idea by answering all six questions:

1. **Who exactly?** — Not "SMBs". Specific job title, company size, geography, revenue range.
2. **What pain, how often?** — Specific moment of pain, frequency, current workaround.
3. **What do they currently pay for related things?** — Willingness-to-pay baseline.
4. **What would the product literally do?** — One sentence a customer would understand.
5. **Why now?** — What changed in the last 12 months.
6. **Why not already?** — The non-obvious reason this is fresh.

If you can't answer all six concretely, the cluster isn't ready. Try the next cluster or go back to Step 2.

## Step 5 — Audience Fit Filter (Pipeline Stage 4)

Apply the kill filter. **Any one auto-reject = kill the candidate:**

- Requires >$50K initial capital
- Requires team of >5 to ship v1
- Requires enterprise sales cycles (6+ months to first revenue)
- Requires regulatory approval before launch
- Requires network effects to create any value
- Requires proprietary data with no acquisition path
- Requires custom silicon or $10M+ manufacturing capex

**All must-haves required:**

- Path to first paying customer in <90 days of launch
- Buildable by 1–3 people in ≤6 months
- Sub-$5M ARR path that's attractive on its own
- Pricing that works for target wallets

If the candidate fails, try the next triangulated cluster. If none survive, **go back to Step 2 with different queries**. Do not lower the bar.

## Step 6 — Deep Research (Pipeline Stage 5)

The surviving candidate gets full research. Use `WebSearch` and `WebFetch` aggressively:

| Dimension | What to find |
|-----------|-------------|
| **Market mapping** | Who exists? What do they charge? Weaknesses? |
| **Customer voice** | Real quotes from potential customers (Reddit, Twitter, forums). Aim for 5–10 verbatim quotes. |
| **Unit economics** | Rough CAC, pricing model, path to $100K / $1M / $5M ARR |
| **Distribution playbook** | 3 specific channels with realistic conversion math |
| **Competitive moat** | What makes this hard to copy at month 3 vs month 12 |

**Zero tolerance for fabricated quotes or statistics.** If you can't source a claim, don't include it.

If research reveals a fatal flaw (market doesn't exist, incumbents are too strong, unit economics don't work), **reject the candidate and try the next cluster**. 20–30% rejection at this stage is healthy.

## Step 7 — Write the Proposal (Pipeline Stage 6)

### Step 7.0 — Name the product (do this BEFORE you start writing)

The `title:` and `oneLiner:` are the part of the proposal a reader sees first. They must NOT sound like the last 20 ideas. Follow these rules:

1. **Title format:** `ProductName — <descriptor> for <specific audience>`. The descriptor is the head noun (e.g. "audit defender", "claim engine", "duty desk").
2. **Pick the descriptor noun that most accurately fits the product shape.** Use this menu as a vocabulary prompt, not a closed list — invent a better noun if one fits:
   - **Workflow shape:** workspace, console, dashboard, hub, desk, studio, app, packet builder, packet engine, claim engine, builder, drafter, generator, formatter, autofiler, filer, scheduler, dispatcher
   - **Defensive / risk:** defender, sentry, watchtower, sweeper, scanner, validator, checker, auditor, monitor, sentinel, catcher, trap, screen
   - **Assistive:** copilot, autopilot, assistant, concierge, agent, sidekick, navigator, scribe, drafter
   - **Data / record:** ledger, vault, registry, archive, index, log, tracker, trail
   - Avoid the word **"cockpit"** unless the product is genuinely an operator's single-pane-of-glass for live, multi-stream operations — and even then, only if "cockpit" is not already used by ≥2 of the last 20 titles.
3. **Anti-monotony rule (HARD):** no descriptor noun may appear in more than 2 of the last 20 titles. Before writing the title, run a quick check:
   - `grep -h "^title:" ideas/*/proposal.md | tail -20`
   - Count the head noun frequency. If your first choice is at the cap, pick the next-best fit from the menu.
4. **The `oneLiner:` must not repeat the descriptor noun from the title.** If the title says "claim engine", the oneLiner uses a different verb/noun ("turns", "packages", "drafts", "files"). This keeps title+oneLiner from feeling like one phrase repeated twice.
5. **Slug** stays mechanical: lowercase, hyphen-separated, ≤5 words, descriptive of the domain not the descriptor noun.

### Step 7.1 — Create the file

1. Generate the slug per 7.0.5.
2. Create the folder: `ideas/YYYY-MM-DD-<slug>/` using **today's date**.
3. Write `proposal.md` filling every section of `TEMPLATE.md` in the operator's voice.
4. **The file MUST start with the YAML frontmatter block.** Fill every field. Use canonical taxonomy:
   - `vertical`: Retail | DevTools | HealthTech | CleanTech | EdTech | Creator Economy | GovTech | PropTech | HomeServices | TradeTech | Compliance | Logistics | RestaurantTech | IoT | ProfessionalServices | Robotics | AgriTech | FinTech (extend if genuinely new)
   - `model`: SaaS | Hardware+SaaS | IoT+SaaS | Marketplace | Hybrid
   - `geography`: India | Global | India+Global | LATAM | SEA | US | EU
   - `secondary`: free-form (WhatsApp-first, UPI-native, Multilingual, AI-agent, Voice-first, Compliance-driven, SMB, Solo-builder, Consumer, Mechatronics, Embedded, Robotics)
   - `axes`: After completing section 12 scoring, copy the per-axis scores into the frontmatter:
     ```
     axes:
       problem: {{score from Problem intensity row}}
       demand: {{score from Demand evidence row}}
       build: {{score from Build feasibility row}}
       distribution: {{score from Distribution clarity row}}
       revenue: {{score from Revenue mechanics row}}
       time: {{score from Time to first revenue row}}
       defensibility: {{score from Defensibility row}}
     ```
   - `founderFit`: technical-heavy | sales-heavy | content-heavy | operations-heavy | domain-expertise-required
   - `confidence`: High | Medium | Low
   - Default `featured: false` unless score ≥80 (STRONG GO).
5. Apply the full 4-layer rubric. Do not skip layers.
6. **Include a Provenance block** at the end of section 2 (Trend signal):
   ```
   Provenance:
     - Signal 1: [description] — [source URL] — [date]
     - Signal 2: [description] — [source URL] — [date]
     - Signal 3: [description] — [source URL] — [date]
     Category: [Regulatory arbitrage | Geographic arbitrage | Tech-unlock | Underserved niche | Workflow automation | Platform shift]
   ```
7. Assign verdict: STRONG GO (≥80), GO (70–79), VALIDATE (55–69), PASS (<55).

## Step 8 — Update the index

Insert a new row in `README.md` **directly below the HTML comment marker** (`<!-- new ideas get inserted here, directly below this line -->`).

Row format:
```
| YYYY-MM-DD | Product Name | Category | Score | Verdict | [folder](./ideas/YYYY-MM-DD-slug/) |
```

## Step 9 — Publish

1. Stage the new idea folder and the README index update: `git add ideas/YYYY-MM-DD-<slug> README.md`
2. Commit with message: `"Add <ProductName> — <one-liner> (<verdict>, <score>/100)"`
3. Push to origin: `git push`
4. Cloudflare will auto-deploy to startupbasket.ai.

## Step 9.5 — SEO Analysis

After publishing, verify the idea page will perform well in search. Check these against the proposal's YAML frontmatter and content:

### Title tag (generated from `title` field)
- [ ] Under 60 characters (Google truncates longer titles)
- [ ] Contains the product name and a compelling descriptor
- [ ] Does NOT start with "StartupBasket" — the product name comes first

### Meta description (generated from `oneLiner` + score/verdict/category)
- [ ] Under 155 characters
- [ ] Contains the primary keyword (product name or vertical)
- [ ] Includes a concrete value prop — not generic fluff
- [ ] Includes score and verdict as differentiators

### One-liner (`oneLiner` field)
- [ ] ≤20 words
- [ ] Reads as a complete, compelling sentence
- [ ] Would make sense as a Google snippet without additional context

### Slug
- [ ] Short (≤5 hyphenated words)
- [ ] Contains a descriptive keyword (not just the date)
- [ ] No special characters or uppercase

### Content structure (the proposal body)
- [ ] H1 is the product name + tagline (section 1)
- [ ] H2 headings use descriptive phrases (not just "Section 3")
- [ ] Key terms appear naturally in the first 200 words (vertical, product type, target customer)
- [ ] At least 800 words of substantive content (thin content penalty risk)

### Tags and structured data
- [ ] `vertical` tag is from the canonical taxonomy (maps to a tag page)
- [ ] `tags.secondary` includes 2+ relevant terms for long-tail discoverability
- [ ] JSON-LD Article schema will be generated correctly (requires `date`, `title`, `oneLiner`, `tags`)

### Fixes
If any check fails, fix it **before the final push**. Common fixes:
- Title too long → shorten the `title` field in frontmatter (keep product name, trim tagline)
- One-liner too vague → rewrite to include the specific customer and benefit
- Slug too generic → rename folder and update all references
- Thin content → expand the weakest proposal section with more specifics

Report any SEO fixes made in the final summary.

## Step 10 — Report back

Concise summary (<150 words):
- Title and one-liner
- Score, verdict, and confidence
- Idea category (from the 6 pipeline categories)
- The 3 signals that triangulated into this idea (one line each)
- Folder path
- Confirmation that git push succeeded

Do not dump the full proposal — it's in the file.

## Hard rules

- **Produce exactly ONE idea per run.** Not two, not three.
- **Every idea must have ≥3 triangulated signals.** No single-signal ideas.
- **Include a Provenance block.** Every idea traces back to its source signals.
- **Check portfolio balance before generating.** Don't produce the 5th India SaaS idea in a row.
- **Check naming monotony before titling.** No descriptor noun may appear in >2 of the last 20 titles. "Cockpit" is reserved for genuine operator-grade live-ops products — most ideas are not cockpits.
- **No code, no architecture, no implementation details.** Stay at the operator level.
- **If you can't write section 9 (first 100 customers) concretely, the idea is not ready — start over.**
- **Write in the persona's voice,** not in Claude's default tone.
- **Apply all 4 layers of the rubric.** Gating → Scoring → Qualitative → Structured verdict.
- **Zero tolerance for fabricated quotes or statistics.**
- **Only touch files inside the StartupBasket repo.** Never modify sibling projects.
