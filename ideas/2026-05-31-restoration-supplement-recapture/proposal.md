---
title: "ScopeGap — supplement recapture for restoration contractors"
slug: restoration-supplement-recapture
date: 2026-05-31
category: TradeTech / US Independent Water & Fire Restoration Contractors
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Turns the carrier's Xactimate estimate plus your field photos into a line-item supplement and photo-matched justification in minutes."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Workflow-automation, Document-extraction]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ScopeGap — supplement recapture for restoration contractors

## 1. One-liner

Turns the carrier's Xactimate estimate plus your field photos into a line-item supplement and photo-matched justification in minutes.

## 2. Trend signal — why now?

Water damage is the **second most common homeowners claim in the US — ~24% of all claims, ~14,000 claims/day, ~$15,400 average, ~$13B/yr to insurers** ([ConsumerAffairs water-damage statistics, 2026](https://www.consumeraffairs.com/homeowners/water-damage-insurance-claims-statistics.html)). Every one of those jobs runs through an insurer estimate written in Xactimate or Symbility/Cotality — and the carrier's first number is almost always low. The contractor's job is to write a **supplement**: extra scope, the missing line items, and a photo-backed justification narrative sent to the desk adjuster.

The problem: writing a good supplement in Xactimate is slow, requires expertise, and "takes time away from other more critical aspects of your business" ([R&R Magazine / Empire Estimators, 2026](https://www.empireestimators.com/xactimate-estimate-writers-for-restoration-contractors/)). An entire **human outsourcing industry** has grown up to do it — QuickPay Claims (**$99/hr, $125/hr interior, $49.50 minimum per estimate**, [quickpayclaims.com](https://quickpayclaims.com/)), Empire Estimators, Assistimate, DocuSketch, One Claim Solution (**percentage-of-supplement pricing**, which contractors complain "turns a $150 estimate into $1,000+", [One Claim Solution](https://www.oneclaimsolution.com/common-pricing-structures-in-restoration-contracting-and-how-the-right-one-can-increase-profit-for-your-business/)). Supplement specialists report an **average +30% recovery** on claims they touch ([RestorationAI](https://www.restorationai.com/)).

What changed in the last 12 months: **2026 multimodal LLMs can now read the carrier's Xactimate PDF, parse the line items, ingest field photos, and detect omitted/underpaid scope** — the exact judgment the human estimating shops bill by the hour for. The tech-unlock splits the work cleanly: the AI does the *reading and gap-detection* (the slow human step); the *pricing math stays Xactimate's own deterministic database* (deliberately not the AI — a hallucinated price gets the supplement rejected by the desk adjuster).

Provenance:
  - Signal 1 (Demand): Human supplement-writing shops charge $49.50–125/hr or a % of the supplement; contractors complain the % model inflates a $150 estimate to $1,000+ — [oneclaimsolution.com](https://www.oneclaimsolution.com/common-pricing-structures-in-restoration-contracting-and-how-the-right-one-can-increase-profit-for-your-business/), [quickpayclaims.com](https://quickpayclaims.com/) — 2026-05-31
  - Signal 2 (Feasibility): 2026 multimodal LLMs read Xactimate estimate PDFs + field photos and reconcile line items; supplement specialists report avg +30% recovery (the judgment the AI now replicates) — [restorationai.com](https://www.restorationai.com/) — 2026-05-31
  - Signal 3 (Economic): Water damage = ~24% of US home claims, ~$15,400 avg, ~$13B/yr; Servpro 2,345 + PuroClean 505 + Restoration 1 298 franchise locations plus a far larger independent long tail — [consumeraffairs.com](https://www.consumeraffairs.com/homeowners/water-damage-insurance-claims-statistics.html) — 2026-05-31
  Category: Tech-unlock

## 3. The opportunity

The incumbents fall into two camps and both leave a gap:

1. **Human estimating shops** (QuickPay, Empire, Assistimate, DocuSketch, One Claim). They work — avg +30% recovery — but they're **slow (5–12 hrs / 24–48h turnaround), per-estimate or %-priced, and a dependency**. The contractor hands off the file and waits. The % shops are actively resented.
2. **RestorationAI** — the one real AI-first player — is **roofing-first**: its hero product is a *roof waste calculator* ("10% gables / 15% hips" recalculation) plus a **searchable template library** of pre-written supplement items with Xactimate codes, priced at **$120 / 25 transactions**. A contractor still manually searches templates and knows what to look for; it doesn't read the carrier's PDF and *tell you what's missing*.

The gap ScopeGap exploits: **interior water/fire/mitigation supplements** (the bigger, more frequent segment — water is the #2 claim type), driven by **omission-detection, not template search**. You upload the carrier's estimate PDF and your photos; ScopeGap reads both, flags the line items the carrier omitted or underpaid (missing antimicrobial application, drying-equipment days, detach-and-reset, supervisory time, PPE, thermal imaging), and drafts the photo-matched justification narrative in Xactimate-ready language. The contractor reviews and submits. Minutes, flat monthly fee, no human in the loop, no % skim.

## 4. Target market

- **Primary customer:** Owner/estimator at an **independent water & fire damage restoration firm in the US — 1 to 15 crew, IICRC-certified, $500K–$5M revenue** — the long tail beneath the Servpro/PuroClean franchises. The owner often *is* the estimator and hates the desk-adjuster paperwork.
- **Why they buy:** "Xactimate takes time I don't have, and I know I'm leaving money on the table on every job." They either skip supplements (revenue gone) or pay a shop $50–125/hr or a % cut. They want the +30% recovery without the dependency or the skim.
- **Rough TAM reasoning:** Servpro 2,345 + PuroClean 505 + Restoration 1 298 = ~3,150 franchise locations *alone*; the independent (non-franchise) IICRC-certified water/fire restoration population is several times that — a credible **15,000–25,000 US firms** that touch insurer estimates. Even 3% penetration at ~$200/mo = ~$1.5M ARR.
- **Why now for them:** Carriers are leaning harder on AI-assisted estimating (Xactimate/Cotality) that systematically under-scopes; the contractor needs a symmetric AI tool to push back. The reading capability only crossed the reliability line in 2026.

## 5. Product sketch (MVP)

- Upload the carrier's Xactimate/Symbility estimate PDF — ScopeGap parses every line item, quantity, and unit price.
- Upload field photos and the loss type (water cat 1/2/3, fire, mold) — ScopeGap maps damage to expected scope.
- **Gap report:** the line items the carrier omitted or underpaid, ranked by recovery dollars, each with the correct Xactimate code.
- **Justification drafter:** a photo-matched, adjuster-ready narrative per flagged item ("antimicrobial required per IICRC S500 cat-2 loss; see photo 4").
- One-click export to a clean supplement document the contractor pastes/imports into Xactimate and sends to the desk adjuster.
- Recovery tracker: dollars flagged vs. dollars approved per job, so the owner sees ROI on the subscription.
- Template/knowledge library of common interior + mitigation line items, kept current with Xactimate code changes.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — it's the human estimating shop again. The AI does two things humans bill hours for: (1) **reads** the carrier's PDF estimate and the field photos and (2) **reasons about omission** — what *should* be on this estimate for this loss type that isn't. That gap-detection is the entire value. Critically, the AI does **not** invent prices — it surfaces the missing Xactimate code and lets Xactimate's own deterministic price database fill the number, because a hallucinated price is exactly what gets a supplement bounced by the desk adjuster. AI for reading + judgment; deterministic engine for money.

## 7. Localization angle (if any)

N/A — this is a US-only play. Xactimate/Symbility and the carrier-supplement workflow are a US insurance-industry artifact; the moat *is* knowing that workflow. No localization wedge, and forcing a global angle would dilute it.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $99/mo Solo (1 estimator, up to ~15 supplements/mo), $249/mo Team (multi-estimator, unlimited), per-supplement overage above tier. Deliberately **flat and below the human shops' per-estimate/% pricing** — the pitch is "stop paying $50–125 per estimate or a % cut."
- **ACV:** ~$2,000–3,000 blended.
- **Rough math to $1M ARR:** ~400 firms × ~$210/mo × 12 ≈ $1M.
- **Rough math to $5M ARR:** ~1,800 firms, plus expansion into roofing/exterior supplements (head-to-head with RestorationAI), public-adjuster and GC adjacent buyers, and a per-supplement usage tier for high-volume shops.
- **Expansion path:** seats as firms grow; usage overage in storm season (claim volume is spiky — Q3/Q4 CAT events drive overage revenue); add Symbility/Cotality parsing; sell the recovery-analytics layer back as a reporting upsell.

## 9. Go-to-market wedge — first 100 customers

- **Restoration owner Facebook groups & forums.** Large IICRC/restoration owner communities exist (RIA, "restoration nation"-type groups, R&R Magazine audience). Post a 90-second screen recording: drop a real carrier PDF + photos in, get a ranked gap report out. The "+30% recovery, no % skim, no waiting" framing is the hook.
- **Free "supplement teardown" lead magnet.** Contractor uploads one redacted carrier estimate; ScopeGap returns the top 5 missing line items and the dollars left on the table — for free. The teardown *is* the demo and converts the "never-got-to-it" pile into live trials.
- **Cold outreach off IICRC / franchise directories.** Scrape the public IICRC-certified-firm and independent-restoration directories, send a Loom that runs a *sample loss* through ScopeGap and shows the gap report. Restoration owners are reachable and money-motivated.
- **Estimating-shop displacement.** Target firms already paying QuickPay/One Claim (visible in their testimonials/forum mentions) with a direct "same +30%, flat fee, no waiting" message.

## 10. Build complexity — justification

Medium. PDF/line-item parsing of Xactimate estimates + multimodal photo reasoning + an Xactimate-code knowledge base is real integration and domain work — not a weekend wrapper. But it's all off-the-shelf models + document pipelines; no custom training, no hardware, no regulatory approval. A technical founder with a restoration-domain advisor ships a credible v1 (water/mitigation loss type first) in **3–4 months**. The hard part is accuracy and Xactimate-code currency, not infrastructure.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Drafting supplements is standard, legal contractor practice. |
| Ethical — no harm / dark patterns | ✅ | Recovers legitimately owed scope; AI surfaces codes, doesn't fabricate prices. |
| Market exists (evidence above) | ✅ | Human shops charge by the hour/% today; AI incumbent exists in adjacent (roofing) segment. |
| 1–5 person team can build this | ✅ | Off-the-shelf models + doc pipeline; domain advisor needed. |
| Launchable with <$50K / ₹40L | ✅ | Inference + dev time; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Recurring, money-direct pain — every job, +30% recovery on the table. Not hair-on-fire daily but felt on every claim. |
| Demand evidence | 15 | 12/15 | Hard signal: multiple paid human shops + a live AI incumbent + per-hour/% pricing. Strong. |
| Build feasibility | 15 | 11/15 | Medium build — PDF parsing + multimodal + code KB, 3–4 months. Accuracy is the risk, not infra. |
| Distribution clarity | 15 | 11/15 | Reachable owner communities + scrapeable directories + teardown lead magnet. Conversion uncertain. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked below incumbents; ACV and customer count for $1M clearly achievable. |
| Time to first revenue | 10 | 8/10 | Teardown-to-trial-to-paid is fast; storm-season urgency helps. ~6–8 weeks post-launch. |
| Defensibility | 10 | 3/10 | **Weakest axis.** RestorationAI already AI-first; estimating shops well-funded with relationships. Moat is execution + interior-segment focus + Xactimate-code accuracy, not anything structural. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs multimodal/document-pipeline engineering **and** a restoration estimator who actually knows what desk adjusters approve. Without the domain advisor, the gap reports will be plausible and wrong.

### Key assumptions to validate (3–5)

1. **Assumption:** AI gap-detection clears ~90% accuracy on real carrier estimates so supplements get *approved*, not bounced. **How to test:** Run 30 historical carrier-estimate + photo sets past it, have an IICRC estimator grade the flagged items against what the desk adjuster actually paid.
2. **Assumption:** Owners will pay a flat $99–249/mo instead of per-estimate human shops. **How to test:** 20 cold Loom demos + a pre-sale offer; measure teardown-to-deposit conversion.
3. **Assumption:** Interior/water (not roofing) is a defensible wedge vs. RestorationAI. **How to test:** Compare ScopeGap's water-loss gap reports head-to-head against RestorationAI's template search on 10 real water jobs.
4. **Assumption:** Xactimate-code currency is maintainable by a small team. **How to test:** Track code/price changes over one quarter; estimate the upkeep load.

### Risk flags

1. **Competitive / defensibility:** RestorationAI is live and AI-first; if it ships a strong interior/water module before v1, the wedge narrows fast. This is the #1 risk and caps the score.
2. **Accuracy/trust:** One bounced supplement and the contractor reverts to a human shop. In a word-of-mouth trade, a few bad gap reports kill referrals.
3. **Platform dependency:** Xactimate (Verisk) owns the codes and price database; a format change or a Verisk-native AI feature could undercut the whole workflow.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + IICRC-certified restoration estimator advisor
Time to revenue:        6–8 weeks post-launch (teardown → trial → paid)
Capital to launch:      $8–15K (inference + dev tooling)
Top 3 assumptions to validate first:
  1. ~90% gap-detection accuracy that gets supplements APPROVED — grade 30 historical claims vs. what the desk adjuster actually paid
  2. Owners pay flat $99–249/mo over per-estimate human shops — 20 Loom demos + pre-sale deposit
  3. Interior/water is a real wedge vs. roofing-first RestorationAI — 10 head-to-head water jobs
Kill criteria:
  - Abandon if gap-detection can't clear ~90% approved-line-item accuracy on real carrier estimates
  - Abandon if <15% teardown-to-paid conversion across the first two channels
  - Abandon if RestorationAI (or a funded incumbent) ships a self-serve interior/water supplement module at SMB price before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Collect 15–20 real (redacted) carrier Xactimate estimates + matching field photos from 3–4 friendly restoration owners. Hand-run them through a multimodal model with a domain-expert prompt; have an IICRC estimator grade the omission-detection against what the desk adjuster actually approved.
- **Day 3–4:** Build a one-screen "supplement teardown" demo (PDF + photos in → ranked gap report out) and record a 90-second Loom. Cold-send to 25 restoration owners from IICRC/franchise directories with a free-teardown offer.
- **Day 5:** Go/no-go. **Falsifiable bar:** ≥90% of flagged line items judged "would be approved by a desk adjuster" by the estimator, AND ≥3 of 25 owners accept a paid pilot or pre-pay a deposit. Miss either → no-go or re-scope.
