---
title: "ShingleProof — claim-photo packet builder for storm roofers"
slug: roofing-claim-photo-mapper
date: 2026-07-24
category: HomeServices / US-SMB — Storm-Restoration Roofing Contractors
complexity: Medium
score: 76
verdict: GO
confidence: High
oneLiner: "Turns a roofer's raw storm photos into a line-item-mapped claim packet an adjuster can't wave away."
tags:
  vertical: HomeServices
  model: SaaS
  geography: US
  secondary: [AI-agent, Vision-AI, SMB, Workflow-automation, Insurance-adjacent]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ShingleProof — claim-photo packet builder for storm roofers

## 1. One-liner

Turns a roofer's raw storm photos into a line-item-mapped claim packet an adjuster can't wave away.

## 2. Trend signal — why now?

Three things are converging on the roofing-supplement workflow at once.

**Money is bleeding on the field side.** Roofing contractors "routinely leave 20 to 40% in revenue on the table when an insurance carrier underpays a claim," and the fix — a supplement backed by a defensible photo report — is exactly the tedious part. Supplement-writing services now charge $175–$425+ per claim, or 15–40% of the recovered money, precisely because contractors don't want to build these packets themselves.

**The manual work is now getting outsourced to humans at scale.** 2026 "construction virtual assistant" pitches sell $8/hr VAs whose entire job is labeling photos and cross-referencing them to Xactimate line items. When a market has stood up an offshore-labor category around a task, that task is (a) painful enough to pay for and (b) structured enough to automate.

**Vision AI crossed the reliability line.** Cross-referencing a hail-hit or lifted-shingle photo to the correct Xactimate line-item code is a multimodal classification + retrieval problem. 18 months ago that was a demo; in 2026 it's a shippable workflow. Meanwhile the incumbents in the stack — CompanyCam ($79/mo minimum, photos only), EagleView/Roofr (measurement), AccuLynx/JobNimbus (CRM) — each own one slab and none of them turn a phone gallery into a *submitted-ready, line-item-mapped supplement packet*.

Provenance:
  - Signal 1 (demand): Contractors leave 20–40% on the table on underpaid claims; supplement services charge $175–$425/claim or 15–40% of recovery — https://www.iasolutions.claims/blog/xactimate-supplement-guide-roofing-contractors — 2026-07
  - Signal 2 (feasibility): "Construction VA at $8/hr" services now sell photo-labeling + Xactimate line-item cross-referencing as a manual job, proving the task is structured and automatable — https://virtualnexgen.com/blog/roofing-va-hacks-maximize-claims-2026 — 2026-07
  - Signal 3 (economic): Storm-restoration software stack (CompanyCam $79/mo photos-only, AccuLynx from $250/mo, EagleView, JobNimbus) is a funded, growing market — but each owns one slab and none map photos to line items — https://roofingsoftwareguide.com/roundups/best-roofing-software-storm-restoration/ — 2026-07
  Category: Workflow automation

## 3. The opportunity

There is a gap sitting in plain sight between two well-funded tool categories.

On one side: **photo tools** (CompanyCam, TaskTag). They capture, geotag, and store photos in address folders. They stop there. They will not tell you *which* photos prove *which* line item, and they will not assemble a supplement.

On the other side: **supplement services** (American Roof Supplements, QuickPay Claims, IA Solutions). They do the mapping — but as a human service, at $175–$425/claim or a cut of the recovery, with a multi-day turnaround, and they own the customer relationship with the carrier.

ShingleProof collapses the human service into software. The contractor uploads the same 40–120 photos they already take. The product classifies each ("3-tab hail bruising, north slope," "lifted ridge cap," "damaged drip edge"), maps each to the correct Xactimate line-item code, flags the shots that are missing for a clean claim ("no close-up of the test square — reshoot before you leave the roof"), and outputs a submission-ready photo report + supplement line-item list. What a VA does in two hours and a supplement house charges 15–40% for, the contractor gets in four minutes and keeps the recovery.

The incumbent I'm disrupting isn't a software company — it's the **$175–$425-per-claim supplement service**. That's a services business with software-margin economics waiting to be taken.

## 4. Target market

- **Primary customer:** Storm-restoration roofing contractors in the US — the 5-to-50-crew shops that chase hail and wind claims. Owner or the office "supplement person" is the buyer. These are the outfits big enough to run 10–60 claims a month but too small to have a dedicated in-house Xactimate estimator on salary.
- **Why they buy:** In their words — they're "leaving 20–40% on the table" on underpaid claims, and the reason is that building the photo-backed supplement is grind work nobody on the crew wants to do. Their current options are a VA who mislabels shots or a supplement service that takes a cut. Both feel like a tax on money that's already theirs.
- **Rough TAM reasoning:** ~100,000+ roofing establishments in the US; the storm-restoration segment that files insurance claims is a large minority of that — call it tens of thousands of shops. At even 3,000 paying shops × ~$300/mo, that's ~$10M ARR before touching adjacent trades (restoration, water mitigation, exteriors) that run the identical claim workflow.
- **Why now for them:** The supplement-VA industry exploding in 2026 tells them the task is worth paying for; vision AI now does it cheaper than the VA; and carriers are tightening documentation standards, so a sloppy photo dump gets a claim reduced. The pain and the fix arrived in the same 12 months.

## 5. Product sketch (MVP)

- Upload a claim's photos (bulk, from phone or CompanyCam export) tagged to a property address.
- Auto-classify each photo by damage type and roof location (hail bruising, wind-lifted shingle, mat exposure, flashing/drip-edge damage, collateral: gutters, screens, AC fins).
- Map each classified photo to the matching Xactimate line-item code, with a confidence flag the user can override.
- **Missing-evidence checklist:** before the crew leaves the roof, flag the shots a strong claim needs but the upload lacks ("no wide slope shot," "no shingle-in-hand close-up," "no test-square marker").
- Generate a submission-ready photo report — captioned, indexed, cross-referenced to line items — as a clean PDF the adjuster opens in minutes.
- Export the supplement line-item list in Xactimate-friendly format so the office pastes it in without re-keying.
- Per-claim history so a denied claim's packet can be re-pulled and re-argued.

## 6. AI angle — what's load-bearing

Remove the AI and the product is a folder with a naming convention — i.e., it's CompanyCam, which already exists. The AI *is* the product: multimodal classification of damage photos, retrieval of the correct Xactimate line-item code for each, and generating the caption/narrative that ties photo to line item to code justification. The missing-evidence checklist is the AI reasoning backward from "what does a fundable claim for this damage pattern require" to "what's absent in this upload." This is the exact judgment a $8/hr VA or a $300 supplement house sells — and it's now a vision-model call. Load-bearing, unambiguously.

## 7. Localization angle (if any)

N/A — this is a US-only play by design. Xactimate is the US/Canada carrier-standard estimating platform and the entire claim-supplement economy is built around it. The wedge is being *narrow to the US roofing-claim workflow*, not broad. A localization angle would dilute it.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $199/mo (up to ~15 claims) and $399/mo (unlimited) per shop; or $19/claim pay-as-you-go for seasonal shops. Anchored well below the $175–$425/claim supplement service and framed as "keep your own recovery."
- **ACV:** ~$3,600/yr blended (most shops on the $299 effective tier once seasonal usage is smoothed).
- **Rough math to $1M ARR:** ~280 shops × $299/mo × 12 ≈ $1.0M (blended effective ACV, seasonality smoothed). Reachable — that's a fraction of one hail season's active claim-filing shops.
- **Rough math to $5M ARR:** ~1,400 shops, plus expansion into restoration/water-mitigation trades running the same Xactimate supplement workflow. Requires a repeatable acquisition channel (see §9) and one big-region hail season proving retention.
- **Expansion path:** per-seat as shops add estimators; a "done-for-you review" upsell where a human checks AI output on high-value claims (recreating the supplement service, at margin, inside the product); and eventually a data product — anonymized line-item recovery benchmarks ("shops in your region recover $X more on hail claims by adding these three line items").

## 9. Go-to-market wedge — first 100 customers

- **Hail-map ambulance chasing (the good kind).** Storm-restoration is geographic and seasonal. When a hail event hits a metro (NOAA/HailTrace data is public), the roofers in that zip code are about to file dozens of claims that week. Scrape the local roofing-contractor list for the struck region, send a personalized "here's the missing-photo checklist for the storm that just hit your area — first 5 claims free" the day after the event. Timing is the whole game.
- **Supplement-service defectors.** Contractors already paying 15–40% to supplement houses are the warmest lead there is — they've proven willingness to pay and they resent the cut. Find them where they complain (roofing Facebook groups, r/roofing, RoofingContractor forums) and pitch "stop paying 30% — keep it."
- **Trade-influencer + trade-show wedge.** Roofing has loud YouTube/Instagram operators (storm-restoration coaches selling courses on claim maximization). Three of them running a "here's my photo-report workflow" video is a direct pipe to the exact buyer. Pair with a booth at a regional roofing/restoration expo where the buyers already gather.

If I can't land the first 100 off "the storm that hit your town last Tuesday, here's the free photo-checklist," I don't understand this market — but I'm confident I do.

## 10. Build complexity — justification

Medium. Off-the-shelf: multimodal vision models for classification/captioning, standard web app, PDF generation, file storage. Custom work: building and maintaining the roof-damage → Xactimate line-item mapping (the domain knowledge), tuning classification on real field photos (which are dark, blurry, shot at bad angles), and the missing-evidence rule set. A technical founder with a roofing/supplement domain advisor ships a credible v1 in ~3–4 months; the moat and the risk both live in mapping accuracy, not in the stack.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Documentation tool; the contractor still files. No unlicensed public-adjusting if we stay on evidence assembly, not negotiating the claim. |
| Ethical — no harm / dark patterns | ✅ | Helps document real damage. Must guard against fabricating/exaggerating damage — a real risk flag (see §13). |
| Market exists (evidence above) | ✅ | Supplement services + VA industry + funded software stack all prove it. |
| 1–5 person team can build this | ✅ | Technical founder + domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Web app + model API costs; inference is the main variable cost. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money (20–40% of a claim) tied to a task they'll pay a VA or a 30% cut to avoid. Not daily hair-on-fire, but every claim, and it's cash. |
| Demand evidence | 15 | 13/15 | Multiple hard signals: supplement services charging $175–$425/claim, a whole $8/hr VA category built on this exact task, funded software stack. Skeptic nods. |
| Build feasibility | 15 | 11/15 | Stack is off-the-shelf; the line-item mapping and field-photo robustness are non-trivial. 3–4 months, not 4 weeks. |
| Distribution clarity | 15 | 12/15 | Storm-timed outreach + supplement-defector targeting is concrete and cheap. Conversion on cold trade outreach is the uncertainty. |
| Revenue mechanics | 15 | 12/15 | Pricing anchored below a known $175–$425/claim alternative; ACV and customer counts to $1M are modest. Seasonality is the wrinkle. |
| Time to first revenue | 10 | 8/10 | Free-first-5-claims → paid within the same storm cycle. Weeks, if timed to an event. |
| Defensibility | 10 | 4/10 | This is the weak axis. CompanyCam or a supplement house could bolt on AI mapping. Moat is domain-tuned accuracy + workflow lock-in, not structural. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone who can ship vision-AI pipelines *and* a partner who lives in the roofing-claim/Xactimate world. Wrong without the domain half.

### Key assumptions to validate (3–5)

1. **Assumption:** AI photo→line-item mapping hits accuracy contractors trust on messy real field photos (not clean demo shots). **How to test:** Run 300 real claim photo sets from 5 friendly contractors through the pipeline; measure line-item precision/recall against what a human supplement writer produced.
2. **Assumption:** Contractors will pay $199–$399/mo rather than keep using a VA or supplement house. **How to test:** Pre-sell 20 shops post-storm at that price with a money-back first month; measure paid conversion.
3. **Assumption:** The "keep your recovery, stop paying 30%" message out-pulls the incumbents' "we do it for you." **How to test:** A/B two cold-outreach angles to 200 storm-region shops; compare reply and trial-start rates.
4. **Assumption:** Xactimate export is clean enough that offices don't re-key. **How to test:** Watch 5 estimators paste our output into Xactimate; count manual corrections.

### Risk flags

1. **Ethics / fraud risk:** A tool that maps damage to payable line items can be nudged into exaggerating claims. Must ship guardrails (evidence required per line item, no fabrication) or it becomes a liability and a reputational bomb. This is the single biggest reason to build it carefully or not at all.
2. **Platform/incumbent dependency:** CompanyCam or AccuLynx adding "AI supplement mapping" as a feature erases the wedge by month 12. Defensibility is thin — must win on accuracy + speed + a loyal niche before they notice.
3. **Xactimate coupling:** Product is tied to a Verisk-owned standard. If Verisk changes line-item structures or restricts formats, rework follows.
4. **Seasonality:** Revenue spikes with hail season and sags off-season. Pricing/retention design has to survive the trough (annual plans, off-season use cases).

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             High
Best-fit builder:       Technical founder (vision AI) + roofing/Xactimate supplement domain advisor
Time to revenue:        4–8 weeks if launched into an active hail region
Capital to launch:      ₹8–20 lakh ($10–25K), mostly inference + a domain advisor
Top 3 assumptions to validate first:
  1. Photo→line-item mapping accuracy on real messy field photos (300-photo blind test vs. human)
  2. $199–$399/mo paid conversion from post-storm cold trials (pre-sell 20 shops)
  3. "Keep your recovery" message beats "we do it for you" (A/B cold outreach)
Kill criteria:
  - Abandon if mapping precision on real field photos stays below ~85% after tuning — contractors won't trust it
  - Abandon if paid conversion from free-trial shops is <10% across two storm events
  - Abandon if CompanyCam or a top-3 roofing CRM ships equivalent AI mapping before our v1 lands
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Get 5 storm-restoration contractors on calls. Collect 300+ real claim photo sets and the supplements a human produced from them. This is the ground-truth dataset and the demand interview in one.
- **Day 3–4:** Run those photos through an off-the-shelf multimodal model with a hand-built Xactimate line-item mapping prompt. Score precision/recall against the human supplements. Show 3 contractors the output cold.
- **Day 5:** Decide. **Go** if (a) mapping precision clears ~80% on messy real photos with a v0 prompt, and (b) ≥3 of the 5 contractors say "I'd pay for this" and one pre-pays a trial. **No-go** if the photos are too degraded for reliable classification or contractors shrug — because then the VA/supplement-house status quo wins.

The falsifiable result: measured line-item precision on real field photos + a count of pre-paid trial commitments. Numbers, not vibes.
