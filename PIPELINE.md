# Idea Generation Pipeline

> This file defines the 6-stage pipeline that every idea passes through before publication. The rubric (RUBRIC.md) is the final gate — this pipeline is everything upstream that determines whether you have anything worth gating.

## Core Insight

Most AI idea generators fail because they either remix existing companies ("Uber for X") or hallucinate plausible-sounding but unvalidated concepts. Both produce slop. This pipeline is a **research pipeline, not a creative writing exercise**. Every idea must be grounded in real-world signals.

## Meta-Principles

1. **Signal-driven, not imagination-driven** — Every idea originates from a real observable signal (a complaint, a regulation, a technology shift, a market gap), not from "wouldn't it be cool if..."
2. **Reproducible** — Given the same inputs, the pipeline should produce similar-quality outputs. No magic.
3. **Filtering before generation** — Most signals don't become ideas. The pipeline rejects aggressively.
4. **Traceable provenance** — Every idea traces back to the specific signals that produced it. This is the credibility moat.
5. **Audience-constrained** — Ideas are shaped for the target audience (SMB / 1–5 team / sustainable ARR) from the start, not shoehorned in later.

---

## Stage 1: Signal Harvesting

The raw input layer. Collect signals from sources where real pain and real demand show up.

### Source Categories

| Category | What to look for | Where |
|----------|-----------------|-------|
| **Complaint mines** | "I wish there was...", "why is there no...", 1-2 star reviews | Reddit (r/smallbusiness, r/SaaS, r/indiehackers, niche subs), Twitter/X, Quora, Amazon/G2 reviews |
| **Demand signals** | Traction, growing search volume, funded competitors | Google Trends, Product Hunt, YC batches, Crunchbase, GitHub trending, App Store |
| **Regulatory/policy shifts** | New laws = new compliance needs | Government gazettes, legal news, industry newsletters (DPDP Act, GST changes, GDPR analogs, etc.) |
| **Technology unlocks** | What became possible in the last 6 months? | New model capabilities, cheaper inference, new APIs (Whisper, vision, agentic tools), new hardware (ESP32-S3, RPi 5) |
| **Market structural shifts** | Platform changes, demographic shifts | Q-commerce, WhatsApp-as-business-OS, UPI ubiquity, remote work normalization |
| **Arbitrage signals** | Products that exist in one market but not another | US/EU tools absent in India (or vice versa), enterprise tools SMBs can't afford, manual workflows in billion-dollar industries |

### Output

A list of 5–10 tagged, dated raw signals with source URLs. Each signal gets a one-line description of why it matters.

---

## Stage 2: Signal Triangulation

Single signals are noise. Three signals pointing at the same underlying pain are an opportunity.

### The Triangulation Test

An idea candidate graduates from signal to opportunity **only when you can point to at least three independent signals**:

1. **One demand signal** — people want this (complaints, search volume, paid alternatives)
2. **One feasibility signal** — this became possible or cheaper recently (new API, new model, new platform)
3. **One economic signal** — money is moving in this direction (competitor funding, market growth, regulatory spend)

### Example

> **Kirana quick-commerce idea:**
> - Demand: Kiranas losing revenue to q-commerce (news reports, owner complaints on Reddit)
> - Feasibility: WhatsApp Business API matured + cheap multilingual AI inference
> - Economic: Billing software boom in SMB retail, rider-delivery infrastructure commoditized
>
> Three signals converging = real opportunity. One signal alone = noise.

### Output

2–4 triangulated opportunity clusters, each with 3+ cited signals. Discard any cluster that can't meet the triangulation bar.

---

## Stage 3: Shape Into Candidate

Convert each surviving opportunity into a concrete, buildable idea. This stage forces specificity.

### Shaping Questions (all required)

| Question | Why it matters |
|----------|---------------|
| **Who exactly?** | Not "SMBs" — "standalone kirana stores in Tier-2 Indian cities with 1-2 employees and ₹5-15L monthly turnover" |
| **What pain, how often?** | Specific moment of pain, frequency, current workaround |
| **What do they currently pay for related things?** | Establishes willingness-to-pay baseline |
| **What would the product literally do?** | One-sentence description a customer would understand |
| **Why now?** | What changed in the last 12 months that makes this possible/urgent |
| **Why not already?** | If obvious, someone would have built it — what's the non-obvious reason it's fresh |

### Failure Mode

"AI for SMBs" fails this stage. "WhatsApp-based ordering agent for kirana customers with multilingual voice input" passes.

### Output

1–3 shaped candidate ideas, each answering all six questions in 2–3 sentences each.

---

## Stage 4: Audience Fit Filter

Ruthlessly filter candidates against the builder profile constraints. This stage kills 60–70% of candidates. That's correct.

### Auto-Reject (any one = kill)

- Requires >$50K initial capital
- Requires team of >5 to ship v1
- Requires enterprise sales cycles (6+ months to first revenue)
- Requires regulatory approval before launch
- Requires network effects to create any value (chicken-and-egg too brutal for solo founder)
- Requires proprietary data you don't have a path to acquire
- Requires custom silicon fabs or $10M+ manufacturing capex

### Must-Have (all required)

- Path to first paying customer in <90 days of launch
- Buildable by 1–3 people in ≤6 months
- Sub-$5M ARR path that's actually attractive (not "step 1 to a unicorn")
- Pricing that works for target wallets (typically $20–500/mo for tools, $500–5,000/mo for operational software)

### Output

0–2 surviving candidates. If zero survive, return to Stage 1 with different signal sources. Do not lower the bar.

---

## Stage 5: Deep Research

Surviving candidates get full research treatment. This is where AI leverage is highest.

### Research Dimensions

| Dimension | What to find |
|-----------|-------------|
| **Market mapping** | Who exists? What do they charge? What are their weaknesses? (G2, Capterra, direct search) |
| **Customer voice** | Actual quotes from actual potential customers — Reddit, Twitter, YouTube comments, forum posts. 5–10 verbatim quotes minimum. |
| **Unit economics** | Rough CAC, pricing model, gross margin assumptions, path to $100K / $1M / $5M ARR with customer counts |
| **Tech stack** | Specific tools/APIs/frameworks to build it. Cost to operate at 100 / 1,000 / 10,000 customers |
| **Distribution playbook** | 3 specific, tested channels (not "content marketing") |
| **Competitive moat** | What makes this hard to copy in month 3 vs month 12 |

### AI-Verify Loop

1. AI generates research draft from signals + templates
2. Flag any claims that can't be sourced — zero tolerance for fabricated quotes or statistics
3. If a critical claim can't be verified, downgrade confidence or reject the candidate

### Reject Rate

20–30% of candidates should be rejected at this stage. If everything passes, verification isn't rigorous enough.

### Output

One fully-researched candidate with sourced claims, ready for scoring.

---

## Stage 6: Rubric Scoring & Publication

The surviving, fully-researched candidate gets scored via the 4-layer rubric (see RUBRIC.md).

### Scoring

Apply all four layers:
1. **Gating checklist** — all 5 gates must pass
2. **7-axis scoring** — Problem intensity /20, Demand evidence /15, Build feasibility /15, Distribution clarity /15, Revenue mechanics /15, Time to first revenue /10, Defensibility /10
3. **Qualitative modifiers** — founder-fit tags, key assumptions, risk flags
4. **Structured verdict** — score, verdict, confidence, kill criteria

### Provenance Block (required)

Every published proposal must include a provenance section tracing the idea back to its source signals:

```
Provenance:
  - Signal 1: [description] — [source URL] — [date observed]
  - Signal 2: [description] — [source URL] — [date observed]
  - Signal 3: [description] — [source URL] — [date observed]
  Category: [Regulatory arbitrage | Geographic arbitrage | Tech-unlock | Underserved niche | Workflow automation | Platform shift]
```

### Publication

1. Write `proposal.md` using TEMPLATE.md (15 sections + provenance block)
2. Update the README.md index
3. Commit and push to IdeaFactory repo
4. Copy to StartupBasket repo, commit and push (auto-deploys to startupbasket.ai)

---

## Portfolio Balance

Don't generate ideas randomly. Deliberately balance across categories to prevent monoculture.

| Category | ~% of Ideas | Characteristic |
|----------|-------------|----------------|
| Regulatory arbitrage | 15% | New laws create new needs |
| Geographic arbitrage | 20% | Proven in one market, absent in another |
| Tech-unlock plays | 25% | Became possible in last 6–12 months |
| Underserved niches | 20% | Small markets ignored by VC-scale players |
| Workflow automation | 15% | Manual work in $1B+ industries |
| Platform shifts | 5% | New platform creates new app category |

Before generating, check the recent 10–15 ideas in the index. If one category is over-represented, deliberately target an under-represented category.

---

## Pipeline Health Metrics

Track these to detect pipeline drift:

| Metric | Healthy Range | If Outside Range |
|--------|---------------|------------------|
| Signal-to-idea conversion | 2–5% of harvested signals become published ideas | Too high = not filtering enough. Too low = weak signal sources. |
| Triangulation rate | 100% of published ideas have ≥3 signals | If publishing single-signal ideas, you're guessing. |
| Category balance | No single category >30% of last 20 ideas | Rebalance by targeting under-represented categories. |
| Score distribution | Spread across 55–90 | If everything is 70–80, generation is too narrow. Include PASSes and VALIDATEs. |
| Geography distribution | No single geography >50% of last 20 ideas | Rebalance by researching different markets. |

---

## The Full Pipeline

```
Signals → Triangulation → Shape → Filter → Research → Score → Publish
```

The rubric is the final gate. This pipeline is everything upstream that determines whether you have anything worth gating.
