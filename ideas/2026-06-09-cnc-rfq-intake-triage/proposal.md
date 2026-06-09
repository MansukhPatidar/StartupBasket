---
title: "ShopSift — RFQ intake desk for small machine shops"
slug: cnc-rfq-intake-triage
date: 2026-06-09
category: TradeTech / US Small CNC & Job Shops (1–10 employees)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Reads every messy RFQ — PDF, photo, email — and hands a small shop a ranked worklist of what's worth quoting."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [Workflow-automation, AI-agent, SMB, Vision-AI, Tech-unlock]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ShopSift — RFQ intake desk for small machine shops

## 1. One-liner

Reads every messy RFQ — PDF, photo, email — and hands a small machine shop a ranked worklist of what's actually worth quoting.

## 2. Trend signal — why now?

Three things converged in the last 12–18 months.

First, the pain got loud. "Overwhelming RFQ Backlog — Strategies on Being Selective & Bidding Quickly" is a literal thread title on Practical Machinist, the largest machine-shop forum. Owners are openly trading hacks for triaging an inbox they can't keep up with — A-list/B-list/trash sorting, tire-kicker smoke-tests, "quote the high-margin stuff first then work down the list." This is a manual ritual today, run on gut and a folder of quote numbers.

Second, the math is brutal and now quantified by people in the trade. A shop processing 40 RFQs/week spends 80–120 hours on *intake alone* — 2–3 full-time bodies "doing nothing but reading emails and typing data into spreadsheets" (Approved Sheet Metal / Lumari). At the same time the win rate on cold price-shoppers is ~20%, so most of that intake labor is spent on jobs that were never going to land.

Third — the unlock — vision-language models now read engineering drawings, GD&T, *and* messy scanned PDFs / phone photos / inline email text. There's active 2024–2025 research fine-tuning VLMs (and benchmarking GPT-4o and Claude) on drawing extraction. Crucially, ~40% of RFQs arrive with **no clean CAD file** — napkin sketches, marked-up PDFs, photos of a broken part. That fact kills naive "upload your STEP file" quoting tools. It's exactly what a VLM-first intake reader is good at.

Provenance:
  - Signal 1 (Demand): "Overwhelming RFQ Backlog" thread + manual A/B/trash triage + "intake is a full-time job at some shops" — https://practicalmachinist.com/forum/threads/overwhelming-rfq-backlog-strategies-on-being-selective-bidding-quickly.377904/ and https://www.approvedsheetmetal.com/blog/want-sheet-metal-parts-fast-submit-a-digital-rfq — accessed 2026-06-09
  - Signal 2 (Feasibility): VLMs reading engineering drawings / GD&T / messy PDFs; ~40% of RFQs have no CAD file — https://arxiv.org/abs/2411.03707 and https://www.cnccookbook.com/job-quote-cost-estimation-survey-results/ (survey published 2024-03-09) — accessed 2026-06-09
  - Signal 3 (Economic): VC flowing into job-shop software — Steelhead (~$107M raised), Fulcrum ($18M Series A2, 2023), Paperless Parts ($30M Series B) building adjacent RFQ-intake ("Smart RFQ Form") — https://gosteelhead.com/ , https://techfundingnews.com/us-based-fulcrum-snaps-18m-to-connect-manufacturers-digitally/ , https://www.paperlessparts.com/demos/smart-rfq-form/ — accessed 2026-06-09
  Category: Tech-unlock

## 3. The opportunity

The whole quoting-software category is aimed at the wrong moment. Paperless Parts, Machine Research, KipwareQTE, Fulcrum — they all help you *compute a price* once you've decided to quote. But the small shop's bottleneck is upstream: deciding **which of the 40 things in the inbox are even worth opening**, and getting the relevant numbers off a scanned drawing without re-keying them by hand.

Incumbents are mid/large-shop tools. Forum owners call Paperless Parts "a solution in search of a problem" for their size and say it's "targeted to shops where quoting takes one or more full-time employees." The cheap tools (KipwareQTE at $495 perpetual, shopVOX ~$99–199/mo) are dumb spreadsheets-with-a-UI — they don't read the inbound mess and they don't triage.

The 10× wedge: a focused **intake desk** that (a) ingests the RFQ in whatever format it arrives, (b) extracts part name, qty, material, key dims/tolerances, due date, (c) scores each against the shop's own win-history and capability ("you're 5-axis aluminum, low-volume; this is a 10k-unit screw-machine job → decline"), and (d) ranks the queue by likely-profit-and-winnable. Not a quoting engine. A pre-quoting filter that turns a chaotic inbox into a one-screen worklist.

## 4. Target market

- **Primary customer:** Owner/estimator at a US CNC or job shop with 1–10 employees, <$2.5M annual revenue (the majority of the ~16,600 US machine shops fall here per SICCODE/IBISWorld). The person doing intake is usually the owner, after hours.
- **Why they buy:** "I'm drowning in RFQs and I quote at night." "Most of what comes in is price-shoppers and tire-kickers, but I can't tell which until I've burned an hour." "Customers send me a photo of a part and a one-line email." They're not asking for a better quote calculator — they're asking to stop wasting evenings on jobs that were never real.
- **Rough TAM reasoning:** ~16,600 US machine shops; majority sub-$2.5M/sub-20-employees. Even a serviceable slice of 8,000–10,000 small shops at $200–400/mo is a $20M–$40M ceiling — comfortably a sub-$5M-ARR bootstrap target with room.
- **Why now for them:** RFQ volume is up (reshoring, more shops listed on Thomasnet/Xometry/MFG.com pulling in cold inbound), the labor to handle it is the scarcest thing in the shop, and the AI to read the mess just became good enough.

## 5. Product sketch (MVP)

- **Forward your RFQ email** (or connect the shop inbox) — ShopSift reads the body, attachments, scanned PDFs, and phone photos.
- **Structured part card per RFQ:** part name, quantity, material, headline dimensions/tolerances, finish, due date — extracted, with low-confidence fields flagged for a 5-second human check.
- **Capability fit check:** flags jobs outside the shop's machines/envelope/volume sweet-spot (configured once at onboarding).
- **Winnability + priority score:** ranks the queue using the shop's own quoted/won history (existing customer? repeat part? price-shopper pattern?).
- **One-screen worklist:** "Quote first / Quote if time / Decline" buckets, sortable by estimated margin.
- **Tire-kicker flag** on cold senders with no order history and price-only language.
- **One-click polite decline** template for the no-quote pile (so relationships don't silently rot).
- **Export the clean structured part data** into whatever they price with (their spreadsheet, KipwareQTE, etc.) — explicitly *not* trying to replace their pricing step.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The core is a vision-language model reading unstructured, low-quality inputs — scanned drawings, marked-up PDFs, photos, free-text emails — and emitting structured, confidence-scored part data. That's the thing no spreadsheet tool does and the thing the 40%-no-CAD reality demands. The second AI job is the ranking/triage judgment over the shop's own history. Both are squarely in current model capability and neither is a research project.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is the English-language RFQ inbox of US small shops, where reshoring is driving inbound volume and where Thomasnet/MFG.com/Xometry are the lead surfaces. A later EU/India cut is plausible (the intake pain is universal) but adds no wedge today, and US shops have the clearest willingness-to-pay in dollars.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $199/mo (Solo, 1 inbox, ~100 RFQs/mo) and $399/mo (Shop, multiple inboxes/seats, higher volume, capability profiles per machine cell). Annual discount. Deliberately above the dumb $99 tools, far below opaque enterprise.
- **ACV:** ~$3,000 blended.
- **Math to $1M ARR:** ~330 shops at ~$250/mo avg × 12. Out of ~8,000+ serviceable small shops, that's <5% penetration.
- **Math to $5M ARR:** ~1,400 shops, or hold customer count and expand ACV via per-cell capability profiles and a usage tier for high-RFQ shops, plus an upsell into lightweight quote-tracking (the other thing forums beg for).
- **Expansion path:** start as triage → add quote-status tracking → add the actual price assist last (where the money and stickiness compound), walking *up* into the territory Machine Research/Paperless occupy, from a beachhead they ignore.

## 9. Go-to-market wedge — first 100 customers

- **Practical Machinist, surgically.** The exact threads exist ("Overwhelming RFQ Backlog," "Quote Tracking," "What percentage of quotes do you win?"). Show up with a genuinely useful intake teardown of a sample RFQ, not a pitch. The owners in those threads ARE the first 100.
- **r/Machinists (274k), r/CNC (119k), r/machining (33k).** Post a "I built a thing that reads your RFQ pile and tells you what to quote" demo video; the no-CAD/photo reading is the hook that proves it's not vaporware.
- **Cold, targeted, video-first.** Pull small shops off Thomasnet/MFG.com listings, send a 60-second Loom that ingests *their own* publicly-listed capabilities and a sample drawing into a ranked worklist. Personalized demo > generic email. Expect low-single-digit reply, high demo-to-trial.
- **CNCCookbook / Modern Machine Shop / Production Machining** — these outlets run owner surveys on exactly this pain and have the readership; a guest teardown or sponsored "RFQ triage" piece converts.
- **NTMA / PMPA member communities** — small precision shops, peer networks; one champion shop → referrals.

## 10. Build complexity — justification

Medium. The intake reader is off-the-shelf VLM API plus a hardening layer for low-quality scans/photos and confidence scoring — the gnarly part is reliability on garbage inputs, not novel ML. Triage ranking is straightforward over the shop's own history. Inbox connection (email forwarding first, OAuth later) and a clean worklist UI are standard web work. A pair ships a credible v1 in ~3–4 months; the risk is extraction accuracy on the worst 20% of inputs, which is an iteration problem, not a research one.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reading the shop's own inbound docs; no regulated data. |
| Ethical — no harm / dark patterns | ✅ | Helps owners reclaim time; polite-decline feature protects relationships. |
| Market exists (evidence above) | ✅ | Named forum threads, quantified intake labor, funded adjacents. |
| 1–5 person team can build this | ✅ | VLM API + web app; ~3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | Inference + hosting + founder time; well under cap. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, regular, money-and-time pain — but not universal; some small owners say quoting is "1% of my time." Targets the drowning subset. |
| Demand evidence | 15 | 12/15 | Named threads, quantified intake hours, survey data, funded adjacents. Docked: no clean "people paying for *triage specifically*" proof yet. |
| Build feasibility | 15 | 11/15 | VLM off-the-shelf; reliability on worst-case scans is the real work. |
| Distribution clarity | 15 | 12/15 | Exact forums/subreddits/directories named; conversion math still unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked between dumb-cheap and enterprise; ACV reasonable; penetration needed is low. |
| Time to first revenue | 10 | 8/10 | Forward-an-email trial → paid is fast; demo-driven. |
| Defensibility | 10 | 6/10 | Soft moat: per-shop win-history data compounds + workflow lock-in. Paperless/CADDi/Machine Research circling — execution + niche focus is the edge, not tech. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

A builder who can get VLM extraction reliable on bad scans, paired with (or who is) someone who has lived the machine-shop RFQ inbox. Domain credibility is what gets you taken seriously in those forums.

### Key assumptions to validate (3–5)

1. **Assumption:** Small shops will pay $200–400/mo to *triage* RFQs, separate from pricing them. **How to test:** 30 owner interviews from the named PM threads + a fake-door pricing page; look for ≥1/3 saying "yes, the inbox is the problem, not the calculator."
2. **Assumption:** VLM extraction hits usable accuracy on the messy 40% (photos, marked-up PDFs). **How to test:** Collect 100 real anonymized RFQs, run extraction, measure field-level accuracy and human-correction time. Target <30s correction per RFQ.
3. **Assumption:** Triage ranking beats the owner's gut enough to be worth keeping. **How to test:** Backtest ranking against a shop's last 6 months of quoted-vs-won; did "Quote first" correlate with actual wins?
4. **Assumption:** This subset (drowning shops) is large enough. **How to test:** Census CBP NAICS 332710 small-shop counts + survey on RFQ volume distribution.

### Risk flags

1. **Competitive encroachment:** Paperless Parts (Smart RFQ Form), CADDi, Lumari, Machine Research are all near this. They could fold triage into existing products. Mitigant: own the small-shop beachhead they explicitly don't serve and the no-CAD inputs they de-prioritize.
2. **Pain isn't universal:** Some 1–10-person owners genuinely don't feel RFQ overload. The market is the *drowning* subset — segment hard or the TAM shrinks.
3. **Extraction trust:** One bad miss on a tolerance and an owner stops trusting it. Confidence-flagging and "human-checks-the-flagged-fields" UX is essential, not optional.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder strong on VLM/document-AI, paired with a machine-shop domain advisor
Time to revenue:        8–12 weeks (forward-an-email trial → paid)
Capital to launch:      $8–15K ($ inference + hosting + founder time)
Top 3 assumptions to validate first:
  1. Owners pay for triage (not pricing) — 30 interviews + fake-door pricing page
  2. VLM extraction usable on the messy 40% — 100 real RFQs, measure accuracy + correction time
  3. Triage ranking beats gut — backtest against a shop's 6-month quoted-vs-won history
Kill criteria:
  - Abandon if <1/3 of 30 interviewed owners say the inbox (not the calculator) is their real bottleneck
  - Abandon if extraction needs >60s of human correction per RFQ on real-world inputs
  - Abandon if a well-funded incumbent ships small-shop RFQ triage before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 100 real (anonymized) RFQs — beg them off 5–10 owners in the PM "Overwhelming RFQ Backlog" thread in exchange for a free triage of their pile. Run them through a stock VLM. Measure field-level extraction accuracy and per-RFQ human-correction time.
- **Day 3–4:** 30 owner interviews from the named forums/subreddits. One question that matters: "Is your problem deciding *which* to quote, or *pricing* the ones you've picked?" Put up a fake-door pricing page ($199/$399) and drive the interviewees to it; count clicks-to-"start trial."
- **Day 5:** Go / no-go. **Go** if (a) extraction needs <30s correction/RFQ on the messy set, and (b) ≥10 of 30 owners say the inbox/triage — not pricing — is the real bottleneck and ≥5 hit the trial button. Otherwise, no-go or re-segment.

The result is falsifiable: a measured correction-time number and a counted interview/fake-door conversion, not a vibe.
