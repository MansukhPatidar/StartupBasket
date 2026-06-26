---
title: "Adjoinr — deed-research plotter for boundary surveyors"
slug: surveyor-deed-research-plotter
date: 2026-06-26
category: TradeTech / US Small Land Surveying Firms (boundary & cadastral, 1–10 staff)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Reads the subject deed and every adjoiner, overlays them, and flags the gaps, overlaps and closure errors before fieldwork."
tags:
  vertical: ProfessionalServices
  model: SaaS
  geography: US
  secondary: [AI-agent, Workflow-automation, SMB, Domain-expertise-required, Solo-builder]
axes:
  problem: 15
  demand: 11
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 7
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# Adjoinr — deed-research plotter for boundary surveyors

## 1. One-liner

Reads the subject deed and every adjoiner, overlays them, and flags the gaps, overlaps and closure errors before fieldwork.

## 2. Trend signal — why now?

Three things converged in the last year.

First, the people who do this work are vanishing. The surveying workforce is in an acute, well-documented shortage — only 14% of licensed surveyors are under 34, the boomers are retiring, and the industry is forecast to grow headcount just ~2% by 2030. The result, in the trade's own words: "bid times stretch longer, job postings linger unfilled, and clients complain about delays they don't understand." A firm that used to put three or four people on a job now puts one. That one person is the bottleneck, and a big chunk of their week is records research.

Second, the work product that eats those hours — reading old deeds, typing metes-and-bounds calls, and reconciling the subject parcel against every adjoiner — is exactly the kind of dense, semi-structured text extraction that vision-LLMs got good at in the last 12 months. The incumbent tool, Net Deed Plotter, is a Windows desktop app that dates to 1987, was last meaningfully updated in 2019, and **still requires the user to type in every bearing and distance by hand.** That's the gap.

Third, money is moving. The land surveying market is ~$14B in 2026, growing 6.5% CAGR, pulled by a public-works and transit boom that is itself starving residential/boundary work of staff. Small firms already pay $26K–$38K for a perpetual Carlson license, or a recurring Civil3D subscription. A new entrant, DeedPlotter AI, has launched AI deed-to-plot for the *title* industry — proof the underlying tech works and that buyers will pay — but it is positioned for non-surveyor title users and doesn't do the surveyor-specific adjoiner reconciliation.

Provenance:
  - Signal 1 (demand): Surveying workforce shortage — "bid times stretch longer… clients complain about delays"; only 14% of licensed surveyors under 34 — https://landsurveyorsunited.com/articles/vanishing-lines-confronting-the-surveying-workforce-shortage / https://www.proplogix.com/blog/how-a-lack-of-surveyors-may-slow-down-your-closing/ — 2026-06-26
  - Signal 2 (feasibility): Incumbent Net Deed Plotter is a 1987 Windows desktop app, last real update 2019, requires manual entry of every deed call; vision-LLM extraction now reliable — https://deedplotter.com/ — 2026-06-26
  - Signal 3 (economic): $14B land-surveying market, 6.5% CAGR; small firms pay $26K–$38K for Carlson; DeedPlotter AI launched paid AI deed-plotting for title pros — https://www.cognitivemarketresearch.com/land-surveying-market-report / https://www.carlsonsurveysupply.com/product/carlson-survey-software/ / https://deedplotter.ai/use-cases/automate-land-transactions/ — 2026-06-26
  Category: Tech-unlock

## 3. The opportunity

Before a surveyor ever drives a stake, they do a "deed sketch": pull the subject deed plus the deeds and prior surveys of every adjoining parcel, plot them all in one coordinate space, and hunt for the conflicts — gaps, gores, overlaps — that determine where the real boundary is and who has senior rights. The trade describes it literally as a jigsaw: "build a jigsaw puzzle using the subject tract and adjoining descriptions, placing the corner piece first so all other pieces are rotated and translated to match," and "start with the senior-most deed and carefully apply dignity calls and junior/senior rights." Today a junior drafter does this by hand — reading PDFs from the county recorder, typing bearings and distances into a 1980s tool one call at a time, then eyeballing the overlaps.

The incumbent that owns this space (Net Deed Plotter) is explicitly built "for non-surveyors" and makes you type everything. The new AI entrant (DeedPlotter AI) automates extraction but is aimed at the title industry — single-deed plotting and closure for a real-estate closing, not the multi-deed adjoiner reconciliation a licensed surveyor needs before fieldwork. **Nobody is automating the surveyor's deed-sketch workflow specifically:** ingest subject + all adjoiners at once, auto-extract every call, overlay them in the right coordinate frame, and surface the gaps/overlaps/senior-rights conflicts as a reviewable worksheet the surveyor signs off on. That's a 10× cut on the single most repetitive pre-field task in a profession that is critically short on hands.

## 4. Target market

- **Primary customer:** Owner or party-chief at a small US land-surveying firm — boundary/cadastral work, 1–10 staff, doing residential and small-commercial lots. The buyer is the licensed surveyor (PLS) or the office manager who assigns research to a drafter.
- **Why they buy:** "Bid times stretch longer, job postings linger unfilled." They can't hire. Every hour a $35–60/hr drafter spends typing deed calls is an hour not spent on billable work, and the firm is turning away jobs. "Proper deed sketch execution can save considerable time when moving forward with the rest of a boundary problem" — they already know the research stage is where the time goes.
- **Rough TAM reasoning:** Tens of thousands of US surveying establishments; the long tail of 1–10-person boundary firms is the bulk by count. Capture a few thousand at $100–250/mo and you're in the $5M+ ARR range without ever touching the enterprise/infrastructure firms.
- **Why now for them:** The staffing crunch is acute *this year*, the source PDFs are now machine-readable by off-the-shelf models, and a competitor just proved title pros will pay for the adjacent product — so the category objection ("surveyors won't trust software for this") is already softening.

## 5. Product sketch (MVP)

- Drag in the subject deed and every adjoiner deed/prior survey (PDF, scan, or photo); the tool extracts all metes-and-bounds calls, lot-and-block references, and curve data automatically.
- Plots all parcels in one coordinate space — subject highlighted, adjoiners overlaid — so the "jigsaw" assembles itself instead of being typed by hand.
- Auto-flags closure errors per parcel (the bearing/distance loop that should return to its start), and gaps / gores / overlaps between subject and adjoiners.
- Surfaces a senior-rights view: orders parcels by deed date so the surveyor can apply junior/senior dignity calls without hunting recording dates manually.
- Every extracted call is shown next to the source text for one-click verify/correct — this is a draft the surveyor reviews and signs off on, never an autonomous answer.
- Exports a clean deed-sketch worksheet (PDF) and a DXF the firm drops straight into Carlson or Civil3D for field prep.
- "Solve the missing call" helper for defective descriptions that don't close.

## 6. AI angle — what's load-bearing

Remove the AI and the product collapses back into Net Deed Plotter — a blank grid where someone types calls for an hour. The load-bearing AI is the extraction-and-structuring layer: turning a stack of messy, inconsistently-worded, often-scanned 19th-and-20th-century deed PDFs into clean structured calls (bearing, distance, curve, monument, adjoiner reference) across *multiple* documents at once, then matching the same physical line as described differently in the subject deed and the adjoiner deed so the overlay and conflict-detection can run. That cross-document reconciliation — "the description of a boundary line in the subject's deed vs. the same line in the adjoiner's deed" — is the part a human drafter is slow at and a model is fast at. The geometry (closure, overlap) is deterministic; the AI earns its keep on the reading and the matching.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge *is* a localization, just not a linguistic one: US metes-and-bounds + recorded-deed + senior-rights doctrine is a specific legal-survey system. The product is deeply tuned to it (PLSS sections, lot-and-block, dignity-of-calls), which is precisely why a generic global tool can't serve it well. State-by-state recording quirks are an expansion surface, not a launch blocker.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $99/mo solo (PLS working alone), $249/mo firm (up to ~5 seats, higher monthly plot volume). Usage-metered overage on heavy months. This is rounding error against a $30K Carlson seat.
- **ACV:** ~$1,800–$3,000 blended.
- **Rough math to $1M ARR:** ~450 firms at a $185/mo blended ACV ($2,220/yr) ≈ $1.0M ARR. That's a low-single-digit-percent slice of the small-firm long tail.
- **Rough math to $5M ARR:** ~2,200 firms, plus an upsell tier for multi-office firms and a title-company SKU (the adjacent buyer DeedPlotter AI is already proving). Requires holding churn low by becoming the place the firm's research lives.
- **Expansion path:** seats as firms grow, plot-volume tiers, a per-state deed-template library, and an upsell into the title/real-estate-attorney segment that needs the same extraction with a lighter workflow.

## 9. Go-to-market wedge — first 100 customers

- **State surveyor association lists.** Every US state has a licensed-surveyor society (NSPS chapters, state boards publish licensee rosters). Scrape the small-firm PLS listings, send a personalized 90-second Loom: drop in a real local deed + its adjoiners, show the overlay and conflict flags assemble in seconds. Surveyors are a tight, skeptical, referral-driven trade — a working demo on *their* county's deeds converts.
- **The forums where they already complain.** RPLS.com, SurveyorConnect, and Land Surveyors United are active, high-trust communities literally discussing gaps/gores/deed-sketch workflow. Show up, solve a real plotting problem someone posted, link the tool. Not spammy SEO — earned credibility in the exact watering hole.
- **Net Deed Plotter's installed base.** There's a known universe of firms paying for / running the 1987 incumbent (it's even resold on RPLS's classifieds). Target "still typing every call by hand?" outreach directly at them — clearest possible switching pitch.
- **State-society conference circuit + CE.** Offer a short "modern deed research" continuing-education talk; surveyors need CE credits annually and these rooms are full of exactly the buyer.

## 10. Build complexity — justification

Medium. The web app, PDF/scan ingestion, and DXF export are off-the-shelf; the closure/overlap geometry is well-understood deterministic math. The hard, custom work is the extraction-and-reconciliation layer: deeds are wildly inconsistent, often scanned, and the same boundary is worded differently across documents — getting that reliable enough that surveyors trust the draft takes real iteration and a domain advisor. A technical founder plus a part-time PLS reviewer ships a credible v1 in ~3–4 months. Not a 6-week toy, but well short of research-grade.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Productivity tool; the licensed PLS still reviews, signs and seals. No practice-of-surveying issue. |
| Ethical — no harm / dark patterns | ✅ | Human-in-the-loop by design; draft + verify, never an unreviewed answer. |
| Market exists (evidence above) | ✅ | Incumbent has sold for 30+ years; new AI entrant funded/launched in the adjacent segment. |
| 1–5 person team can build this | ✅ | Technical founder + domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | API + web stack; main cost is the founder's time. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Felt on nearly every boundary job, by a workforce that physically cannot hire its way out. Not daily-hair-on-fire, but a chronic, billable-hour bleed. |
| Demand evidence | 15 | 11/15 | 30-year incumbent + funded AI entrant in adjacent segment + documented staffing crisis + active forums. Strong, but verbatim "I'd pay for this" from surveyors (vs. title) still to be gathered. |
| Build feasibility | 15 | 11/15 | Mostly off-the-shelf; extraction/reconciliation reliability is the real work. ~3–4 months. |
| Distribution clarity | 15 | 11/15 | Named lists (state rosters, forums, incumbent's base) and a tight referral trade. Conversion math still unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing is trivial vs. a $30K Carlson seat; ACV realistic. Churn/retention unproven — that's the risk on this axis. |
| Time to first revenue | 10 | 8/10 | Self-serve trial + targeted outreach; revenue plausible inside 8 weeks of a working demo. |
| Defensibility | 10 | 7/10 | Soft moat: state-by-state deed-template tuning, surveyor trust/brand in a skeptical niche, accumulating correction data. Generic AI plotter can't easily replicate the adjoiner/senior-rights workflow. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** Surveyors will trust an AI-extracted draft enough to make it their starting point (vs. re-typing for control). **How to test:** Put the verify-each-call UI in front of 15 PLS on a real deed packet; measure whether they'd start from the draft or insist on manual entry.
2. **Assumption:** Multi-deed adjoiner reconciliation — not single-deed plotting — is the part they'll pay for and the incumbents don't do well. **How to test:** Demo both modes to 20 firms; see which one they react to.
3. **Assumption:** Extraction accuracy on real, scanned, messy county deeds is high enough that correction time is small. **How to test:** Run 50 real deeds of varying age/quality; measure call-level error rate and time-to-clean.
4. **Assumption:** $99–249/mo lands as obvious-yes pricing for a 1–10-person firm. **How to test:** 30 pricing conversations; look for instant yes vs. hesitation.

### Risk flags

1. **Competitive timing:** DeedPlotter AI (title-focused) or an incumbent could pivot toward the surveyor workflow. Mitigant: go deep on adjoiner/senior-rights/DXF — the surveyor-specific moat — fast.
2. **Liability / trust:** Surveyors seal their work; a mis-read bearing that slips through is reputational poison. The product must be unambiguously a draft-and-verify assistant, not an oracle.
3. **Accuracy on bad scans:** Century-old, handwritten, or poorly-scanned deeds may defeat extraction and erode trust if not handled gracefully (clear "couldn't read this — enter manually" fallbacks).
4. **Slow-moving buyer:** A conservative, older trade adopts new tools slowly; sales cycle and onboarding hand-holding may be heavier than a typical SaaS.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + a licensed PLS advisor for domain truth and credibility
Time to revenue:        8–12 weeks from a working demo
Capital to launch:      $8–20K (API costs + founder time)
Top 3 assumptions to validate first:
  1. Surveyors trust a draft-and-verify AI extraction as their starting point — 15 PLS demos
  2. Adjoiner/senior-rights reconciliation is the paid wedge incumbents miss — 20 side-by-side demos
  3. Extraction is accurate enough on real messy deeds that correction time stays small — 50-deed test
Kill criteria:
  - Abandon if <20% of 50 PLS shown a working demo say they'd start from the AI draft rather than re-type
  - Abandon if call-level extraction error rate on real scanned deeds stays high enough that cleanup time ≥ manual entry
  - Abandon if a well-resourced incumbent ships the surveyor-specific adjoiner workflow before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 50 real deeds (subject + adjoiners) for 8–10 actual parcels from open county recorder sites across 3 states. Run them through current off-the-shelf extraction and hand-score call-level accuracy and time-to-clean.
- **Day 3–4:** Build a clickable mock of the overlay + conflict-flag + verify-each-call screen (no full backend). Book 12–15 calls with small-firm PLS off state rosters and RPLS/SurveyorConnect.
- **Day 5:** Walk each surveyor through the mock on *their* county's deeds. Decide go / no-go on a falsifiable bar: **≥40% say they'd make this their starting point AND ≥30% give a verbal yes at $149/mo.** Below that, the trust or pricing assumption is broken — fix or kill before building.
