---
title: "TurnPage — transcript finisher for solo court reporters"
slug: court-reporter-ai-scopist
date: 2026-06-18
category: ProfessionalServices / US Freelance Court Reporters & Small Deposition Firms
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Turns a court reporter's raw steno draft and audio into a near-final transcript in minutes — no scopist, no wait."
tags:
  vertical: ProfessionalServices
  model: SaaS
  geography: US
  secondary: [AI-agent, Solo-builder, Workflow-automation, Legal, Domain-expertise-required]
axes:
  problem: 16
  demand: 12
  build: 10
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# TurnPage — transcript finisher for solo court reporters

## 1. One-liner

Turns a court reporter's raw steno draft and audio into a near-final transcript in minutes — no scopist, no wait.

## 2. Trend signal — why now?

Three things collided in the last 18 months:

1. **The reporter shortage is acute and structural.** The number of working court reporters has fallen ~21% over the decade to under 23,000. In California alone, since April 2023 more than two million civil/family/probate hearings have happened with no verbatim record, and over a million hearings in the year ending March 2025 had no transcript. Demand for transcripts is up; the people who make them are disappearing. ([Speechmatics court-reporter-shortage report](https://www.speechmatics.com/company/articles-and-news/court-reporter-shortage); [moneywise](https://moneywise.com/managing-money/employment/court-reporter-shortage-ai))

2. **The money is moving — but at the wrong end of the workflow.** Steno raised a **$49M Series C in March 2026** to build AI court-transcript tech. But their flagship "Transcript Genius" is a *post-delivery analysis* tool for litigators (summaries, search, indexing) — not the production step. The legal-transcription market is ~$2.56B (2025) heading to ~$5B by 2035 at ~6.9% CAGR. ([SiliconANGLE on Steno's $49M](https://siliconangle.com/2026/03/26/steno-raises-49m-change-court-reporting-ai-enabled-transcript-analysis/); [MRFR market size](https://www.marketresearchfuture.com/reports/legal-transcription-market-12066))

3. **The post-production bottleneck is open.** A reporter captures steno on the day, but the *certified transcript* gets made afterward — by hand or by a paid human **scopist** who corrects untranslates, adds punctuation, and checks proper-name spellings against the steno. Scopists charge **$1.25–$3.50/page** (rush $5–6), eat **$100–200 of a reporter's $300–800 day**, and run a **5-day standard turnaround**. Scopists themselves are in short supply and advertise to reporters who "find [themselves] turning down jobs due to the backlog of depositions that need scoping." ([World of Freelancers scopist rates](https://www.worldoffreelancers.com/scopists-salary/); [Transcript Brigade scoping overview](https://transcriptbrigade.com/an-overview-of-scoping/))

Long-context LLMs + forced-alignment ASR can now do what a scopist does on a first pass: align the audio to the steno-translated draft, resolve untranslates, punctuate, and flag proper names — at a quality level the reporter only has to *proof*, not redo.

Provenance:
  - Signal 1 (demand): Court-reporter headcount down ~21% to <23,000; millions of CA hearings with no record; scopist backlog so bad reporters turn down work — [speechmatics.com court-reporter-shortage](https://www.speechmatics.com/company/articles-and-news/court-reporter-shortage) / [worldoffreelancers.com scopist rates](https://www.worldoffreelancers.com/scopists-salary/) — 2025–2026
  - Signal 2 (feasibility): Long-context LLMs + audio forced-alignment can resolve untranslates, punctuate and ID speakers against a steno draft; CAT tools already expose ASCII/steno exports — [stenograph.com CATalyst Edit](https://www.stenograph.com/software/case-catalyst/catalyst-edit-39266) — 2026
  - Signal 3 (economic): Steno raised $49M Series C (Mar 2026) for AI transcript tech but aimed it at litigator analysis, not production; legal-transcription market ~$2.56B→~$5B by 2035 — [siliconangle.com](https://siliconangle.com/2026/03/26/steno-raises-49m-change-court-reporting-ai-enabled-transcript-analysis/) — 2026
  Category: Underserved niche

## 3. The opportunity

The whole AI-court-reporting wave is attacking the wrong steps. Sonix/Rev do **generic ASR transcription** (positioned as "support, not replacement," and they don't ingest a reporter's CAT steno + personal dictionary). Steno's $49M went into **after-the-fact analysis** for the law firm. Stenovate is a **human marketplace** — it helps you *find* a scopist, it doesn't *be* one. CATalyst Edit is a **manual editing tool** for the human scopist.

Nobody is automating the scopist's actual job: turning the reporter's raw steno-translated draft into a near-final transcript. That step is the throughput cap on a profession that is already turning away work. A focused tool that ingests the reporter's own ASCII/steno export *plus the audio* and produces a draft the reporter proofs in 30 minutes instead of waiting 5 days for a $150 scopist is a direct, felt, dollarized win. The reporter still reviews and certifies — so it's a force multiplier inside the existing legal chain of custody, not a replacement that triggers admissibility fights.

## 4. Target market

- **Primary customer:** US freelance/independent court reporters and 2–15-seat deposition firms — the reporters who currently pay scopists out of pocket or stay up editing their own pages. Steno-trained, own a CAT package (Case CATalyst, Eclipse, StenoCAT).
- **Why they buy:** Every page they don't have to scope or wait on is money and capacity. In their world: "Do you find yourself turning down jobs due to the backlog of depositions that need scoping?" A scopist eats $100–200 of a $300–800 day and adds a 5-day clock. TurnPage gives most of that margin back and compresses the clock to hours.
- **Rough TAM reasoning:** ~23,000 working reporters; even the freelance/depo slice that pays for scoping is tens of thousands of seats. At $99–299/mo that's a $30–80M+ ceiling before adjacent buyers (transcription firms, CART providers, hearing-recording vendors filling the shortage with digital reporters who *need* heavy editing help).
- **Why now for them:** The shortage means they can bill more pages than they can finish. The constraint isn't demand — it's the editing hours. AI now removes the editing hours.

## 5. Product sketch (MVP)

- Import the reporter's CAT export (ASCII/RTF/steno) + the deposition audio.
- AI aligns audio to the draft and resolves **untranslates** (steno strokes that didn't translate), inserts **punctuation**, and applies the reporter's preferred formatting.
- **Proper-noun catcher:** flags names, technical terms, and geographic references that need spelling confirmation, with the audio timestamp to jump straight to it.
- **Speaker/Q&A cleanup:** correct attribution and colloquy formatting against the audio.
- Learns the reporter's **personal dictionary and style** over time (their globals, their preferred spellings, their job-specific term lists).
- One-screen **proof-and-certify view**: every AI change is reviewable with the audio snippet; reporter accepts/rejects and exports a finished transcript back into their CAT format.
- Page-count and turnaround dashboard so a firm sees throughput per reporter.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — it's the scopist. The AI does the judgment work: aligning spoken audio to steno output, deciding the right word for an untranslate from acoustic + linguistic context, punctuating legal Q&A correctly, and catching the proper-noun spellings that a generic ASR mangles. This is *not* "ASR that spits out a transcript" — it's editing an existing steno draft using the audio as ground truth, which is a different and higher-accuracy task than transcribing from scratch. The personal-dictionary learning loop is what makes each reporter's output progressively need less proofing.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is the US steno court-reporting workflow (CAT software, ACORD-style legal formatting, the scopist economy, the LCRI-of-this-world reporter shortage). It does not translate to markets that use digital/ASR court recording by default. A later UK/Canada/Australia cut is possible (same steno tradition) but localization is not the wedge — domain depth in US steno is.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo solo tier (fair-use page cap), $299/mo pro/firm-seat tier with unlimited pages + personal-dictionary training; optional per-page overage that still undercuts a human scopist's $1.25–$3.50.
- **ACV:** ~$1,800–$3,600 per reporter/year.
- **Rough math to $1M ARR:** ~450 reporters × ~$185/mo blended × 12 ≈ $1M. That's ~2% of the working reporter population.
- **Rough math to $5M ARR:** ~2,300 paying seats blended, *or* land 30–50 deposition firms at 10–40 seats each on the pro tier. Plausible inside the ~$2.5B+ legal-transcription market.
- **Expansion path:** per-page overage on heavy months → firm seats → adjacent buyers (digital-reporting vendors, CART/captioning providers, single-reporter agencies) → optional "rush" pricing tier that mirrors the scopist rush premium.

## 9. Go-to-market wedge — first 100 customers

- **The scopist-shortage ad swap:** scopists *advertise to reporters* on StenoSearch, CSRNation, and the NCRA Facebook groups about backlog. Run the same message, but "your scopist, instantly." These communities are small, named, and concentrated.
- **State-association + NCRA channel:** court reporters cluster in state associations and the NCRA. Sponsor/demo at 3–4 state conventions and the NCRA event; reporters trust peer and association endorsement heavily in this tight-knit field.
- **Direct outreach to depo firms:** there are scrape-able directories of deposition/court-reporting firms (StenoSearch, agency listings). Send a 90-second Loom showing a real ASCII export turned into a proofed transcript; the math (kill the $150 scopist line + 4 days) sells itself. Target 5–8% reply on a few thousand firms.
- **Scopist-turned-advocate angle:** experienced scopists/proofreaders who can't keep up with backlog become paid "QA reviewers" or referrers — turning the displaced incumbent into a channel rather than an enemy.

## 10. Build complexity — justification

Medium. The hard parts are real but bounded: forced audio-to-text alignment, parsing/round-tripping CAT export formats (ASCII/RTF, ideally native Case CATalyst/Eclipse), and an LLM editing layer tuned to legal Q&A punctuation and untranslate resolution. All off-the-shelf models + standard web stack; no custom model training required for v1 (fine-tune later on accepted edits). The domain learning curve — understanding steno, scoping conventions, and certification rules — is the bigger risk than the engineering. Small team, ~4–5 months to a credible v1.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reporter still proofs and certifies; AI assists, doesn't certify or alter the record without review. |
| Ethical — no harm / dark patterns | ✅ | Augments a shortage-stricken profession; keeps human in the loop on the legal record. |
| Market exists (evidence above) | ✅ | Active scopist economy, paid per page; $49M just funded into the adjacent space. |
| 1–5 person team can build this | ✅ | Off-the-shelf ASR + LLM + format parsing; domain advisor needed. |
| Launchable with <$50K / ₹40L | ✅ | Inference + dev; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Felt every job; dollarized ($100–200/job) and time-boxed (5-day wait). Not quite hair-on-fire daily-survival, but a hard throughput cap on income. |
| Demand evidence | 15 | 12/15 | Paid human scopists, advertised backlog, fresh $49M into adjacent AI; not yet a proven willingness to trust AI editing on the certified record. |
| Build feasibility | 15 | 10/15 | Alignment + CAT format round-trip + legal-punctuation LLM is real engineering; doable in ~4–5 months, not 4 weeks. |
| Distribution clarity | 15 | 11/15 | Named, concentrated communities (NCRA, CSRNation, state associations, depo-firm directories); conversion math credible but conservative trust barrier. |
| Revenue mechanics | 15 | 12/15 | Clear per-seat/per-page pricing benchmarked against scopist cost; $1M ARR needs ~2% of reporters. |
| Time to first revenue | 10 | 7/10 | 6–10 weeks: needs a working demo on real ASCII exports before reporters pay; trust-gated trial. |
| Defensibility | 10 | 6/10 | Moat builds via per-reporter dictionary/style data + CAT-format integrations; copyable early, stickier by month 12. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** Reporters will trust AI-edited drafts enough to proof-and-certify rather than re-scope from scratch. **How to test:** Run 15–20 real ASCII exports through a prototype; measure how many AI changes the reporter accepts vs. rejects, and time-to-proof vs. their normal scoping time.
2. **Assumption:** Audio-aligned editing beats generic ASR accuracy enough to matter on untranslates and proper nouns. **How to test:** Benchmark untranslate-resolution and proper-noun accuracy against a Sonix/Rev baseline on the same 20 jobs.
3. **Assumption:** Reporters/firms will pay $149–299/mo. **How to test:** 30 outreach calls to freelance reporters and 10 depo-firm owners; pre-sell annual at a discount.
4. **Assumption:** CAT export round-tripping (Case CATalyst/Eclipse) is reliable enough that output drops back into their workflow cleanly. **How to test:** Round-trip 50 files across the top two CAT packages and verify no formatting loss.

### Risk flags

1. **Trust / liability:** The transcript is a legal record. If the AI introduces a subtle error the reporter misses, that's on the reporter — adoption hinges on a proof UI that makes review fast *and* trustworthy. Under-selling "you still certify" loses the sale; over-automating loses the trust.
2. **Platform dependency:** Reliance on closed CAT export formats (Stenograph, Advantage). A format change or a Stenograph-native competitor (they already own the editing tool) could squeeze the integration.
3. **Incumbent entry:** Steno ($49M) or Stenograph could pivot from analysis/marketplace into production. Speed and reporter-loyalty (personal-dictionary lock-in) are the only defenses early.
4. **Market timing / culture:** Court reporters are protective of the human record and skeptical of "AI replacing reporters." Messaging must be force-multiplier, not replacement, or the community rejects it.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + a working/former court reporter or scopist as domain advisor
Time to revenue:        6–10 weeks (trust-gated trial → paid)
Capital to launch:      ₹8–15 lakh / $10–18K (inference + dev; no capex)
Top 3 assumptions to validate first:
  1. Reporters accept AI edits and proof-certify faster than they scope — measure accept rate + time on 20 real jobs
  2. Audio-aligned editing beats generic ASR on untranslates/proper nouns — head-to-head benchmark vs Sonix/Rev
  3. $149–299/mo willingness to pay — 30 reporter calls + 10 firm calls, pre-sell annual
Kill criteria:
  - Abandon if reporters reject >30% of AI edits or proofing takes as long as scoping from scratch on the 20-job test
  - Abandon if <10% of 50 depo-firm outreach Looms convert to a trial
  - Abandon if Stenograph or Steno ships a native production-automation tool before v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Get 15–20 real anonymized CAT ASCII exports + matching audio from 3–4 cooperative reporters (recruit via CSRNation / NCRA Facebook group). Define the falsifiable metrics: AI-edit accept rate and proof-time vs. their normal scoping time.
- **Day 3–4:** Run a thin prototype (audio-aligned LLM editing on the draft) over the files; sit with 2 reporters while they proof the output and log every accept/reject and the clock.
- **Day 5:** Decide go/no-go. **Go if** reporters accept ≥70% of AI changes *and* proof in materially less time than they'd scope (target ≤40% of normal), *and* ≥3 of the reporters say they'd pay $149+/mo. Anything less, reshape or pass.

The result is falsifiable: a measured accept-rate and a measured time delta on real legal transcripts — not "reporters seemed interested."
