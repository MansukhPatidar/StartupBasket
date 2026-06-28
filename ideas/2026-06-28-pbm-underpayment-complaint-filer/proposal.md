---
title: "PaybackRx — PBM underpayment complaint filer for pharmacies"
slug: pbm-underpayment-complaint-filer
date: 2026-06-28
category: HealthTech / US Independent & Small-Chain Retail Pharmacies
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns a flagged PBM underpaid claim into a filed, state-specific complaint with statute and NADAC math attached, for pharmacies."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Regulatory-arbitrage, RevenueRecovery]
axes:
  problem: 16
  demand: 12
  build: 12
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 6
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# PaybackRx

## 1. One-liner

Turns a flagged PBM underpaid claim into a filed, state-specific complaint with statute and NADAC math attached, for pharmacies.

## 2. Trend signal — why now?

Three things landed in the last 12 months that, together, make this a window rather than a wish.

**One — the law finally bites.** For a decade, an independent pharmacy could spot a PBM underpayment and do nothing, because filing a complaint cost more in staff time than it could ever recover. That math flipped in 2026. South Carolina's 2025–2026 Bill 342 now requires that when an underpayment complaint is *upheld*, the PBM pays the pharmacy **twice the amount of the insufficiency within thirty days** — and applies the fix to every similarly situated pharmacy. Virginia's S.B. 669 (signed March 31, 2026, effective July 1, 2026) makes it a *prohibited practice* to reduce payments to an effective reimbursement rate not in the provider agreement. Ohio H.B. 229 (March 31, 2026) built a separate PBM licensure framework with real audit and enforcement teeth. Arkansas already runs a formal complaint-intake pipeline (forms + email) under its PBM Licensure Act and Rule 128. **The complaint is now a financial instrument, not a letter to the void.**

**Two — federal transparency cracked the data open.** A landmark federal PBM reform package became law in early 2026 (Hall Render, Feb 5, 2026), and a new federal rule on *Improving Transparency Into Pharmacy Benefit Manager Fee Disclosure* hit the Federal Register Jan 30, 2026. Combined with CMS killing retroactive DIR fees, pharmacies for the first time can line up *what they were contractually owed* against *what they were actually paid* with enough paper to win a grievance.

**Three — the money is bleeding now.** A 2024 survey cited by industry press found financial pressure could push **30%+ of independent pharmacists out of business**; the NYT (Oct 2024) reported PBMs "systematically underpaying independent drugstores, creating pharmacy deserts." This isn't a nice-to-have. Underpayment is the thing closing the store.

The reconciliation tools (Net-Rx RecRx, Innovatix Scriptmax, EnlivenHealth) already *detect* the underpaid claim. What nobody does is the next step the new laws reward: package and file the state-specific complaint that turns a detected underpayment into a check.

Provenance:
  - Signal 1 (demand/economic): 30%+ of independent pharmacies at financial risk; PBM underpayment is existential; "effective rate reconciliation" clawbacks opaque — https://www.luqra.com/blog/unpredictability-pharmacy-reimbursements/ , https://ncpa.org/newsroom/qam/2024/10/22/new-york-times-found-pbms-are-underpaying-independent-pharmacies-cvs-told — 2024-2026
  - Signal 2 (regulatory): SC Bill 342 (2× underpayment payout on upheld complaint), VA S.B. 669 (bans below-effective-rate pay, eff. Jul 1 2026), OH H.B. 229, AR Rule 128 complaint intake — https://www.scstatehouse.gov/sess126_2025-2026/bills/342.htm , https://www.frierlevitt.com/articles/2026-state-pbm-reform-nadac-reimbursement-spread-pricing-bans/ — 2026
  - Signal 3 (feasibility/economic): Federal PBM reform + PBM fee-disclosure transparency rule + CMS DIR elimination open the contract-vs-paid data — https://www.federalregister.gov/documents/2026/01/30/2026-01907/improving-transparency-into-pharmacy-benefit-manager-fee-disclosure , https://hallrender.com/2026/02/05/federal-pbm-reform-is-here-unpacking-key-provisions-of-the-landmark-legislation/ — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The reconciliation incumbents stop at the diagnosis. RecRx will tell you "100% of your third-party claims are matched, here are the underpaid ones." Scriptmax flags rate discrepancies. EnlivenHealth gives you a financial dashboard. Then they hand the pharmacist a spreadsheet of red rows and walk away — because *filing the complaint* is legal-clerical work, it's different in all 50 states, and it was historically worthless to chase.

That worthlessness is exactly what just changed. PaybackRx lives downstream of the reconciler. It takes a flagged underpaid claim — ideally imported straight from the pharmacy's existing reconciliation export or PMS — and does the part everyone hates:

1. Maps the underpayment to the **correct state statute** (NADAC-plus-dispensing-fee floor, below-effective-rate prohibition, MAC-appeal right, etc.).
2. Computes the **insufficiency math** (contracted/NADAC rate vs. paid amount, per claim, aggregated).
3. Pulls the **right state complaint form** (Department of Insurance, or Medicaid agency, or AR/PA specialized portal) and fills it.
4. Assembles the **evidence packet** the state requires (claim records, remittance, contract clause) and produces a clean, citation-anchored complaint ready to submit.

NCPA's own guidance is the spec: "specific state statute citations… records, claims, or other evidence… quantity and quality are equally important." Quantity-and-quality at volume is an automation problem. That's the whole product.

## 4. Target market

- **Primary customer:** Owner-operators and PIC (pharmacist-in-charge) of independent and small-chain retail pharmacies (1–15 locations) in the ~40 states with real PBM underpayment statutes and complaint pathways. Title that buys: owner, or the office manager/billing tech they delegate to.
- **Why they buy, in their words:** "I know I'm being underpaid — my reconciliation report says so every month — but I don't have a paralegal, I don't know which statute applies, and I'm not spending a Saturday filling out an insurance-department form for a $4 claim." PaybackRx makes the $4 claims worth filing by aggregating them and doing the form.
- **Rough TAM reasoning:** ~19,000 independent pharmacies in the US (NCPA figures historically ~19–21K). Even at a conservative 3,000 paying at ~$150/mo, that's $5.4M ARR. The math to a single-digit-million ARR business does not require dominating the category.
- **Why now for them:** Pre-2026, an upheld complaint got you the missing $4. Post-SC-342 it can get you $8 plus a rate fix applied going forward, and other states are following. The expected value of filing crossed zero. They feel it because the underpayment is the thing threatening the store this year.

## 5. Product sketch (MVP)

- Import underpaid-claim data via CSV/export from existing reconciliation tools (RecRx, Scriptmax, EnlivenHealth) or common PMS reports — no rip-and-replace.
- Per-claim **statute mapping**: identify which state law the underpayment violates (NADAC floor, effective-rate prohibition, MAC appeal window).
- **Insufficiency calculator**: contracted/NADAC-plus-dispensing-fee owed vs. paid, per claim and aggregated by PBM and time window.
- **Auto-filled state complaint form** + cover narrative with statute citations and the math, formatted to that state's Department of Insurance / Medicaid / portal requirements.
- **Evidence packet assembly**: bundles claim records, remittance advice, and the relevant contract clause into the submission.
- **Deadline & window tracker**: flags MAC-appeal windows and the state's response clock (e.g., SC's 30-day determination) so nothing lapses.
- **Filing log + outcome tracker**: what was filed, when, status, recovered amount — the audit trail that makes the *next* complaint stronger.

## 6. AI angle — what's load-bearing

Remove the AI and this is a 50-state legal-research-and-drafting firm you can't afford. The load-bearing work: (a) reading a heterogeneous, messy claim/remittance line and the pharmacy's PBM contract clause, and classifying *which* statutory violation it represents in *that* state; (b) generating the complaint narrative that cites the exact statute and lays out the insufficiency math in the language the Department of Insurance expects; (c) keeping the state-by-state rulebook current as 2026's wave of laws keeps changing. That's classification + structured extraction + jurisdiction-aware drafting — the model is the paralegal. The reconciliation math itself is deterministic and *not* the moat; the statute-mapping-and-drafting is.

## 7. Localization angle (if any)

N/A — this is a US-only regulatory play. The "localization" is *interstate*: the product's value is precisely that it knows the difference between South Carolina, Virginia, Arkansas, and Ohio complaint regimes. There is no India/LATAM analog because the wedge *is* the US state PBM-law patchwork.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $99–$249/mo per pharmacy by location count and claim volume. Plus an optional **success fee** (e.g., 10–15% of recovered underpayment) on upheld complaints — aligns with the new "you get paid when you win" reality and lets price-sensitive owners start cheap.
- **ACV:** ~$1,800–$3,000 base; meaningfully higher for multi-location small chains and for owners who opt into success-fee on large aggregated filings.
- **Math to $1M ARR:** 500 pharmacies × $167/mo × 12 = $1.0M. Achievable inside the independent base alone.
- **Math to $5M ARR:** ~2,300 pharmacies at the same blended ACV, *or* fewer pharmacies plus material success-fee revenue from upheld SC/VA-style 2× recoveries. Layer in small-chain (5–15 location) seats and the per-pharmacy ACV climbs.
- **Expansion path:** add PBMs and states as laws expand; add MAC-appeal automation (the pre-complaint step); add a "similarly situated" filing module that rides SC-342's class-wide remedy; sell aggregated, anonymized underpayment data back to state pharmacy associations and advocacy groups.

## 9. Go-to-market wedge — first 100 customers

- **State pharmacy associations as the channel.** There are ~40+ state associations actively pushing members to file complaints (NCPA literally publishes the playbook). Partner with 3–5 of the most aggressive (SC, AR, OH, VA, and one NADAC-floor state like Tennessee or Kentucky). Run a "file your first 10 complaints in an afternoon" workshop at their CE events. These associations *want* complaint volume — "quantity and quality matter" — so we're rowing with their incentive, not against it.
- **Ride the reconciliation tools' blind spot.** The 3,000+ pharmacies already paying Net-Rx/Scriptmax/EnlivenHealth have the underpaid-claim list and nowhere to take it. Targeted outreach: "You already know you're underpaid. We file the complaint." Co-list or integrate where possible; compete-by-completing where not.
- **NCPA + buying-group (PSAO) co-marketing.** NCPA and the PSAOs (the groups that already aggregate independents) are explicitly advocacy-oriented. A webinar to a PSAO's member base of a few thousand pharmacies, framed as "turn your 2026 statute rights into recovered dollars," is a warm, high-intent list.
- **Founder-led for the first 100:** identify the ~600 pharmacies in the 4–5 most aggressive states, send a one-page "here's $X we estimate you're owed under your state's new law, and here's the filed complaint we'd generate" teaser using their own claim sample. Close on the demonstrated recovery, not the feature list.

## 10. Build complexity — justification

Medium. The reconciliation math and form-fill are off-the-shelf web-stack work. The hard, defensible part is building and maintaining the **state-by-state statute-to-violation rulebook** and the jurisdiction-aware drafting — that's domain-research-heavy and needs a pharmacy-PBM-law advisor in the loop, but it's curation and prompt/rule engineering, not a research breakthrough. No regulatory approval to launch (we file *on behalf of* the pharmacy; the pharmacy submits). Realistic v1 for one founder + a part-time domain advisor covering 5 states: ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | We prepare complaints the pharmacy files; states actively solicit these complaints. Avoid UPL by keeping the pharmacy as filer, not giving legal advice. |
| Ethical — no harm / dark patterns | ✅ | Helps small businesses recover legally-owed money under new consumer-protective laws. |
| Market exists (evidence above) | ✅ | Underpayment is documented (NYT, NCPA, surveys); reconciliation tools have paying users; new laws create the remedy. |
| 1–5 person team can build this | ✅ | Founder + domain advisor; standard stack + LLM. |
| Launchable with <$50K / ₹40L | ✅ | Mostly time + a pharmacy-law advisor retainer; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Underpayment is existential for the segment; but the *complaint-filing* pain is a delegated chore, not literally hair-on-fire for the owner unless framed as recovered dollars. |
| Demand evidence | 15 | 12/15 | Strong indirect signals (NYT, NCPA volume push, paying reconciliation users, new laws). Weaker on direct "I'd pay for the filer specifically" quotes — that's the #1 thing to validate. |
| Build feasibility | 15 | 12/15 | Stack is easy; the 50-state rulebook + UPL-safe drafting is the real work. Start narrow (5 states). |
| Distribution clarity | 15 | 12/15 | State associations + PSAOs + reconciliation-tool blind spot are concrete, warm, incentive-aligned channels. |
| Revenue mechanics | 15 | 11/15 | Subscription is modest; success-fee is the upside but depends on win rates that are still being established under brand-new statutes. |
| Time to first revenue | 10 | 7/10 | Pilot in 5 states could presell to association members in 8–12 weeks; success-fee revenue lags filing outcomes. |
| Defensibility | 10 | 6/10 | Moat = curated 50-state rulebook + accumulating outcome data + association relationships. Copyable, but a head start + the data flywheel compounds. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (pharmacy PBM law) · `technical-heavy` (LLM extraction + drafting) — best built by a technical founder paired with a pharmacy-law/PSAO insider.

### Key assumptions to validate (3–5)

1. **Assumption:** Independent pharmacy owners will pay a monthly fee (or success fee) to have complaints filed for them, rather than ignoring the chore. **How to test:** Offer 30 owners in SC/AR/VA a done-for-you "we'll file your first batch" at a price, measure paid conversion, not verbal interest.
2. **Assumption:** Win rate on filed complaints under the new laws is high enough that the success-fee model works. **How to test:** File 50 real complaints across 3 states in months 1–3; track upheld %, recovered $, and time-to-determination.
3. **Assumption:** State complaint regimes are stable and structured enough to template (not bespoke per filing). **How to test:** Map the actual forms/portals/evidence rules for the first 5 target states and confirm coverage with a pharmacy-law advisor.
4. **Assumption:** Reconciliation incumbents won't simply bolt on a filer overnight. **How to test:** Read their roadmaps/positioning; gauge whether their "we don't give legal advice" stance keeps them out of this lane.

### Risk flags

1. **Regulatory/UPL risk:** Preparing legal complaints can brush against unauthorized practice of law. Mitigate by keeping the pharmacy as the filer, surfacing statute info rather than "advice," and having a licensed advisor review templates.
2. **Platform/incumbent dependency:** We sit downstream of reconciliation tools' exports; if one builds a native filer, our wedge narrows. Counter with state-coverage breadth and outcome-data moat they don't have.
3. **Market timing:** Laws are brand new (some effective mid-2026). Win rates and enforcement vigor are unproven — the 2× remedy could be under-enforced in practice, deflating the success-fee upside.
4. **Statute churn:** 50 states legislating fast means the rulebook needs constant maintenance — a real ongoing ops cost, though also part of the moat.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + pharmacy-PBM-law / PSAO insider advisor
Time to revenue:        8–12 weeks (presell to association members in 5 pilot states)
Capital to launch:      $15–30K (advisor retainer + build time)
Top 3 assumptions to validate first:
  1. Owners pay for done-for-you filing — paid conversion on 30 SC/AR/VA owners, not verbal interest
  2. Win rate under new statutes high enough for success-fee — file 50 real complaints, track upheld % and $ recovered
  3. First 5 states' regimes are templatable — map forms/portals/evidence with a pharmacy-law advisor
Kill criteria:
  - Abandon if <20% of 30 done-for-you offers convert to paid in the 3 pilot states
  - Abandon if upheld-complaint rate is so low (or determinations so slow) that recovered $ doesn't beat staff time, even with the 2× remedy
  - Abandon if a reconciliation incumbent ships a native, multi-state complaint filer before our v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the actual complaint forms, portals, evidence rules, and the operative statute text for SC, AR, VA, OH, and one NADAC-floor state. Confirm with one pharmacy-law advisor that they're templatable and that pharmacy-as-filer keeps us clear of UPL.
- **Day 3–4:** Take one real (or realistic sample) underpaid-claim export and hand-build a single complete filed-ready complaint packet for two of those states — statute cite, insufficiency math, evidence bundle. This is the demo asset.
- **Day 5:** Put the demo packet in front of 15–20 independent owners (via a state association contact) with a price and a done-for-you offer. **Go/no-go on:** ≥4 of them commit to pay (deposit or signed LOI) for us to file their next batch. Verbal "sounds useful" is a no-go; a deposit is a go.
