---
title: "QuoteSift — RFQ gatekeeper for CNC job shops"
slug: cnc-rfq-triage-gatekeeper
date: 2026-05-18
category: Manufacturing / US-SMB
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Reads every incoming RFQ, kills the junk, and tells your estimator which jobs are worth quoting today."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Workflow-automation, Manufacturing, Email-first]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# QuoteSift — RFQ gatekeeper for small CNC and sheet-metal job shops

## 1. One-liner

Reads every incoming RFQ, kills the junk, and tells your estimator which jobs are worth quoting today.

## 2. Trend signal — why now?

Three things landed in the same 18 months.

First, the pain got louder and quantified. Modern Machine Shop's reporting on RFQ response time is brutal: shops that respond within 2 hours win ~90% of jobs; shops taking 5+ days win under 5%. A buyer survey cited across the trade press says 53% of buyers expect a response within 24 hours. Meanwhile shops are buried — Practical Machinist threads describe a 15-machine shop taking 5–15 RFQs a day and only 3–4 surviving the filter into the ERP. Incomplete specs and missing tolerances drive 56.5% of cost overruns and 40% of project delays per the fabrication trade analyses. The estimator's morning is spent opening PDFs and STEP files to decide what's even quotable — not quoting.

Second, the enabling tech crossed the line. Vision-language models can now parse 2D engineering drawings — title blocks, GD&T, tolerances, materials, thread callouts — at 95%+ accuracy. Werk24 ships this as a commercial API today; academic work (arXiv 2506.17374, Florence-2 fine-tunes, 2024–2026) confirms lightweight models now beat generic OCR by 40–50% on F1. Reading a drawing well enough to triage it was a research problem in 2023. It's an API call in 2026.

Third, money is moving. The quoting-software market is forecast $1.5B (2024) → $3.2B (2033) at 9.1% CAGR. Paperless Parts raised a $30M Series B (OpenView, Jul 2024) explicitly to push AI quoting and NLP. DigiFabster starts at $350/mo. But every dollar of that funding is chasing *quote generation and pricing* — the high-ACV CAD-to-price prize. Nobody well-funded is working the unglamorous step *before* that: deciding which RFQs deserve a quote at all.

Provenance:
  - Signal 1 (demand): Job shops get 5–15 RFQs/day, only 3–4 quotable; missing tolerances/material/qty force no-quotes and 3–5 days of back-and-forth; 90% win rate if quoted <2hr vs <5% at 5+ days — https://www.practicalmachinist.com/forum/threads/overwhelming-rfq-backlog-strategies-on-being-selective-bidding-quickly.377904/ and https://www.mmsonline.com/articles/when-it-comes-to-rfq-response-time-is-money — observed 2026-05-18
  - Signal 2 (feasibility): VLMs parse 2D engineering drawings (GD&T, tolerances, materials) at 95%+ accuracy; commercial API (Werk24) + academic confirmation — https://werk24.io/ and https://arxiv.org/abs/2506.17374 — observed 2026-05-18
  - Signal 3 (economic): Quoting-software market $1.5B→$3.2B (9.1% CAGR); Paperless Parts $30M Series B Jul 2024 chasing quote *generation*, not triage; DigiFabster from $350/mo — https://startupsavant.com/news/paperless-parts and https://digifabster.com/pricing/ — observed 2026-05-18
  Category: Workflow automation

## 3. The opportunity

The whole quoting-software industry is fighting over the wrong end of the funnel. Paperless Parts, DigiFabster, Phasio, Machine Research — they all start from "you've decided to quote this part, now let's price it fast." That's a real product and a real market. But it assumes the estimator has already done the work everybody hates: triaging the inbox.

The inbox is the bottleneck. An estimator at a 20-person shop opens email and three customer portals every morning to a pile of RFQs. Each one means: open the PDF or STEP, eyeball whether it's in our capability (do we even have a 5-axis? do we run titanium?), hunt for the things that make a quote impossible (no quantity, "stainless steel" with no grade, four-place dims with a two-place tolerance block, no material spec, NDA-only with no print), and then decide bid / no-quote / ask-for-info. Two-plus hours a day, gone, before a single real quote is built. And the cruel part: the jobs they *should* win are time-sensitive, so the hour wasted reading junk is the hour that loses the good job.

QuoteSift owns that step. It's not a quoting engine — it's the gatekeeper that runs before the quoting engine. It reads everything, throws out what can't or shouldn't be quoted (with a drafted, polite no-quote or clarification reply), and hands the estimator a ranked shortlist of "quote these, in this order, here's why." Incumbents won't build this because it's beneath the ACV they're chasing and orthogonal to their CAD-pricing moat. That's the gap.

## 4. Target market

- **Primary customer:** Owner or lead estimator at a US contract CNC machine shop or sheet-metal fab shop, 5–40 employees, $1M–$10M revenue, where 1–2 people do all the quoting and the owner is often one of them.
- **Why they buy (their words):** "I spent the whole morning opening prints just to throw most of them away." "We lost a job we wanted because I was buried in RFQs that were never going to pay." "Half these RFQs don't even have a quantity or a material — I have to email back and wait three days." "If I can't quote it in a day the customer's already gone." The pain is daily, it's the owner's own time, and it directly costs jobs.
- **Rough TAM reasoning:** ~25,000–30,000 US machine shops and a comparable count of sheet-metal/fab shops; the sweet spot (5–40 employees, active quoting, drowning) is conservatively 20,000–30,000 shops. At $300/mo that's a $70M–$100M+ revenue ceiling — far past the $5M target, small enough that VCs chase quote-generation instead.
- **Why now for them:** Reshoring and defense/medical demand have pushed RFQ volume up while skilled estimators are scarce and aging out. The buyer-side expectation of a sub-24-hour response (53% per survey) has hardened. Shops feel the squeeze every single morning.

## 5. Product sketch (MVP)

- Connects to the RFQ inbox: a dedicated email address (rfq@yourshop) plus forwarding rules; later, polling of the 2–3 big OEM/portal sources.
- Reads every attachment — PDF drawings, STEP/IGES models, spreadsheets, free-text email bodies — and extracts part, material, quantity, tolerances, finishes, due date, and customer.
- Runs each RFQ against the shop's own capability profile (machines, materials, max size, processes, industries they won't touch) set up in a 20-minute onboarding wizard.
- Auto-classifies each RFQ: **Quote it** (in capability, complete), **Missing info** (good fit but no qty/material/tolerance — drafts the exact clarification email), **No-quote** (out of capability or chronically bad customer — drafts a polite decline), **Review** (model says unsure).
- Ranks the "Quote it" pile by win-worthiness: response-time sensitivity, fit to shop's profitable work, repeat/known customer, completeness.
- One-screen morning digest: "9 RFQs overnight. 3 quote now (ranked). 4 need info (replies drafted, click send). 2 auto-declined. Est. 95 min saved."
- Logs every decision so the owner can audit "why did it decline this?" and tune the rules.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The core is a vision-language model reading a messy 2D drawing or a 30-line email thread and pulling structured facts — material grade, GD&T, missing quantity, a tolerance block that contradicts the dims — then reasoning against a capability profile to make a bid/no-bid call and *draft the human-quality reply*. That's not OCR and it's not a rules engine; it's judgment on unstructured engineering documents, which is exactly what crossed from research-grade to API-grade in the last 18 months. A keyword filter would mis-triage constantly and shops would never trust it. The whole value is "trust it to read the print like a junior estimator would."

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is the US job-shop density, English-language drawings, and the ITAR/defense-adjacent RFQ flow that makes response speed existential. A localized version (German Mittelstand, Indian MSME machining) is plausible later but the drawing conventions, language, and buyer behavior differ enough that forcing it now would dilute the wedge. Start where the pain, the wallets, and the shop density are highest.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $249/mo (single estimator, up to ~150 RFQs/mo) and $499/mo (multi-estimator shop, ~500 RFQs/mo, portal connectors, audit log). Annual discount to lock retention.
- **ACV:** ~$4,000 blended (mix skews to the $499 tier as shops see the time saved).
- **Rough math to $1M ARR:** 250 shops × $333/mo avg × 12 = $1.0M. 250 shops out of 20,000+ in the ICP = ~1.2% penetration. Believable.
- **Rough math to $5M ARR:** ~1,100 shops, ~5% penetration of the core ICP, plus an upsell tier (auto-draft the first-pass quote for the "quote it" pile via a Paperless/ERP handoff) lifting ACV toward $7K. Requires that retention holds and that the capability-profile setup is genuinely self-serve.
- **Expansion path:** seats as the shop grows estimators; volume tiers as RFQ count rises; a premium "warm handoff" that pre-fills the shop's existing quoting tool/ERP so QuoteSift owns triage *and* the bridge into pricing.

## 9. Go-to-market wedge — first 100 customers

- **Practical Machinist + r/Machinists + r/Manufacturing where the complaint already lives.** These owners post the exact pain ("buried in RFQs", "spent the morning throwing prints away") weekly. Reply with a 90-second Loom showing their kind of inbox getting triaged. Not a banner ad — answer the actual thread.
- **The "free RFQ teardown" cold play.** Scrape the ~5,000 US shops listed on Thomasnet/MFG.com with a public quote email. Send a short note: forward us last week's RFQs (or we'll use sample ones), get back a free written triage report showing what we'd have killed and what we'd have prioritized. The artifact *is* the demo. Target 3–5% conversion to a paid pilot.
- **Estimator/owner trade channels.** Sponsor or guest on the machining YouTube/podcast tier (NYC CNC, Titans of CNC adjacent, Practical Machinist content) — owners genuinely watch these. One credible case study ("we saved our estimator 8 hrs/week and stopped missing the good jobs") travels in this tight-knit community.
- **Fab-shop association lists and regional manufacturing extension partnerships (MEP centers)** for warm intros at small scale once 10–20 reference shops exist.

If I can't see customers 1–100, this is a PASS. I can: it's the ~5,000-shop scraped directory + the forum where they complain by name, with a free teardown artifact as the wedge. That's a concrete, testable plan.

## 10. Build complexity — justification

**Medium.** The drawing/email parsing leans on off-the-shelf VLM APIs (or a commercial parser like Werk24 as an accelerator), so the hardest perception problem is bought, not built. The custom work is the capability-profile model, the classification/ranking logic, the reply drafting, and the email/portal plumbing — real engineering but standard web/LLM stack, no novel ML. A technical founder plus a part-time machining-domain advisor ships a credible v1 in roughly 3–4 months. The risk isn't feasibility; it's accuracy good enough that owners trust the auto-decline.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reading a shop's own inbound RFQs; no regulated activity. ITAR data handled by keeping processing in US/SOC2-friendly infra; flag-don't-export ITAR-marked prints in v1. |
| Ethical — no harm / dark patterns | ✅ | Owner sees and can override every decision; auto-replies are drafts by default. |
| Market exists (evidence above) | ✅ | Quantified pain, funded adjacent market, active forum complaints. |
| 1–5 person team can build this | ✅ | Technical founder + domain advisor, 3–4 months to v1. |
| Launchable with <$50K / ₹40L | ✅ | API + infra + a few pilot months of founder time; well under $50K. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Daily, owner's own time, directly loses winnable jobs. Not 17+ because shops have a (bad) workaround: just power through it. |
| Demand evidence | 15 | 12/15 | Quantified response-time data, funded adjacent market, repeated forum complaints. Short of 13+ because no one is selling *triage specifically* yet, so willingness-to-pay for this exact slice is inferred, not proven. |
| Build feasibility | 15 | 11/15 | Perception bought via API; custom logic is standard stack, 3–4 months. Trust/accuracy bar is the real work. |
| Distribution clarity | 15 | 12/15 | Named directory (~5,000 shops), named forum where they complain, free-teardown artifact. Conversion math still unproven. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked below DigiFabster's $350; 250 shops to $1M is ~1% penetration. ACV expansion is the assumption. |
| Time to first revenue | 10 | 8/10 | Pilot-to-paid in 4–8 weeks; teardown shortens the sales cycle. Not 9+ because trust-building needs a short pilot. |
| Defensibility | 10 | 5/10 | Execution + workflow lock-in + accumulating per-shop capability profiles. Copyable by a funded incumbent if they choose to care; head start + niche focus is the moat, not tech. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone who can ship an LLM-document pipeline *and* a machining advisor who knows what a real no-quote looks like, or owners won't trust the auto-decline.

### Key assumptions to validate (3–5)

1. **Assumption:** Owners will trust an AI to auto-classify (even draft-only) no-quotes. **How to test:** Run the free teardown on 15 shops' real past RFQs; measure agreement between QuoteSift's calls and what the owner actually did. Target ≥85% agreement.
2. **Assumption:** The time saved (~90 min/day) is worth $250–500/mo to a 5–40 person shop. **How to test:** 20 owner interviews quoting the number back to them and asking for a pre-commit/LOI at that price.
3. **Assumption:** VLM drawing parsing is accurate enough on *real, messy, scanned* shop prints (not clean vendor samples). **How to test:** Benchmark the parser on 200 actual customer-supplied prints from 5 pilot shops; measure extraction accuracy on qty/material/tolerance.
4. **Assumption:** A cold "free RFQ teardown" converts ≥3% to paid pilot. **How to test:** 200-shop scraped outreach, measure reply → teardown → pilot funnel.

### Risk flags

1. **Platform/incumbent risk:** Paperless Parts or DigiFabster could bolt triage onto their funded product. Mitigated by being the focused tool shops adopt *before* they can afford the big suite, and by integrating into (not competing with) their pricing step.
2. **Trust/accuracy risk:** One wrongly auto-declined dream job and the owner rips it out. Must ship draft-only by default and earn auto-mode over time.
3. **Data-sensitivity risk:** ITAR/defense prints are common in this segment; mishandling export-controlled drawings is a real liability. v1 must detect-and-quarantine ITAR-marked docs, not process them blindly.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (LLM-document pipeline) + part-time machining/estimating domain advisor
Time to revenue:        6–10 weeks (teardown → pilot → paid)
Capital to launch:      $15–30K (API + infra + founder runway through pilots)
Top 3 assumptions to validate first:
  1. ≥85% agreement between QuoteSift's triage calls and owners' actual decisions on real past RFQs (free teardown on 15 shops)
  2. Owners will pay $250–500/mo for ~90 min/day saved (20 interviews + LOI at price)
  3. VLM parser holds ≥90% extraction accuracy on messy real shop prints, not clean samples (200-print benchmark)
Kill criteria:
  - Abandon if teardown agreement with owner decisions is <70% across 15 shops
  - Abandon if <3% of 200 cold-outreach shops convert to a paid pilot
  - Abandon if a funded incumbent ships equivalent triage before a 20-shop reference base exists
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull a list of 60 US shops (Thomasnet/MFG.com) with public RFQ emails. Hand-collect ~50 real anonymized RFQs from public portals and 3 friendly shops to build a test set.
- **Day 3–4:** Wire a thin pipeline (VLM API + capability profile + classifier prompt) and run it over the 50 RFQs. Get 5 shop owners on a call to compare QuoteSift's bid/no-quote/missing-info calls against what they'd actually do.
- **Day 5:** Decide go / no-go on a falsifiable bar: **≥85% of QuoteSift's calls match the owners' calls, AND ≥3 of 5 owners say "I'd pay $250+/mo for this today."** Below that bar, the trust thesis is wrong and the idea waits.
