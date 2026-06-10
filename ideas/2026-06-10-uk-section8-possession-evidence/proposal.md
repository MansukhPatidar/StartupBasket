---
title: "ArrearsProof — possession dossier for self-managing UK landlords"
slug: uk-section8-possession-evidence
date: 2026-06-10
category: PropTech / UK Private Landlords (self-managing, 1–10 units)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns your rent ledger into a court-ready Section 8 bundle — right form, schedule, particulars — so no judge adjourns."
tags:
  vertical: PropTech
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, Solo-builder, AI-agent]
axes:
  problem: 16
  demand: 12
  build: 12
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 7
founderFit: [domain-expertise-required, content-heavy]
featured: false
---

# ArrearsProof — possession dossier for self-managing UK landlords

## 1. One-liner

Turns your rent ledger into a court-ready Section 8 bundle — right form, schedule, particulars — so no judge adjourns.

## 2. Trend signal — why now?

On **1 May 2026 the Renters' Rights Act 2025 abolished Section 21** "no-fault" evictions in England. Section 8 — which requires the landlord to *prove a ground* with evidence — is now the **only** route to possession. Overnight, every self-managing landlord with a non-paying tenant went from "serve a no-fault notice and wait" to "build a litigation-grade evidence bundle or lose in court."

The pain is concrete and expensive. Possession claims already take **33.8 weeks** on average and are modelled to hit **50+ weeks** by late 2026 as backlogs grow ([Elliot Leigh](https://www.elliotleigh.com/post/court-eviction-delays-2026-average-33-8-weeks-and-rising/)). A bundle that gets **adjourned or struck out** for a wrong form or a sloppy arrears schedule resets that clock — and every extra week is unrecovered rent. Legal guidance is blunt: "*It is imperative that the correct detailed evidence is before the Court prior to the hearing or there is a risk that it may be adjourned or, in the worst case, struck out*" ([P.L.A.N. Landlords](https://planlandlords.co.uk/2025/04/07/section-8-proceedings-under-the-housing-act-1988/)), and "*Courts will reject claims if notices are incorrect, timelines don't add up, or supporting documents are missing*" ([Helpland](https://helpland.co.uk/the-landlords-ledger/rock-solid-section-8-cases)).

The money is already in motion: arrears total **£470M across 210,000+ households**, average **£2,238** owed ([Property118](https://www.property118.com/landlords-face-470m-rent-arrears-across-england/)); solicitors charge **£350/hr** and full Section 8 eviction bills reach **£3,000** ([The Landlord Association](https://landlordassociation.org.uk/landlords-face-3000-eviction-bills-under-section-8-possession-claims/)). And from May 2026 the arrears threshold for mandatory Ground 8 rose from 2 to 3 months, so the schedule maths now genuinely decides which ground you can even rely on.

Provenance:
  - Signal 1 (demand): Section 21 abolished 1 May 2026; Section 8 evidence bundles now mandatory, cases adjourned/struck-out for documentation gaps — [Helpland](https://helpland.co.uk/the-landlords-ledger/rock-solid-section-8-cases) / [P.L.A.N.](https://planlandlords.co.uk/2025/04/07/section-8-proceedings-under-the-housing-act-1988/) — 2026-06-10
  - Signal 2 (feasibility): LLMs now parse bank-feed/CSV rent ledgers and draft structured legal-document bundles (rent schedule, particulars, correct forms) from off-the-shelf APIs — 2026-06-10
  - Signal 3 (economic): £470M arrears across 210k+ households; £3,000 eviction bills; solicitors £350/hr; 33.8→50+ week court delays make a botched bundle catastrophic — [Property118](https://www.property118.com/landlords-face-470m-rent-arrears-across-england/) / [Elliot Leigh](https://www.elliotleigh.com/post/court-eviction-delays-2026-average-33-8-weeks-and-rising/) — 2026-06-10
  Category: Regulatory arbitrage

## 3. The opportunity

The market is full of services that sell you the **notice** — Aatos has a free Section 8 generator, Legal for Landlords serves a notice from £250, Landlord Action does full-service legal at solicitor prices. Almost nobody sells the part that actually decides the case: the **evidence bundle and particulars statement** you file *after* the notice — the 24-month rent schedule that has to reconcile to the penny, the ground-by-ground particulars with numbered evidence references, the correct current form (Form 3, not the abolished 6A), proof of deposit protection, the chronology of payment demands.

That gap is exactly where cases die. The incumbents leave the landlord to assemble a litigation bundle by hand in Word the night before a hearing — or pay a solicitor £350/hr to do it. A focused AI-first tool ingests the rent ledger and tenancy file once and produces the whole court-ready packet, version-controlled and updated as new arrears accrue. Notice-generators are a commodity; the **bundle** is the unmet, high-stakes job.

## 4. Target market

- **Primary customer:** Self-managing private landlords in England with 1–10 units who don't use a full-service letting agent — the segment that handles its own arrears chase and can't absorb £3,000 of legal fees per eviction. Secondary: small letting agents and paralegals who'd white-label the bundle output.
- **Why they buy:** "*Every week of unpaid rent chips away at your profitability*" and many "*delayed action because they fear the legal complexity*" ([Helpland](https://helpland.co.uk/the-landlords-ledger/rock-solid-section-8-cases)). They are terrified of turning up to a 9-month-delayed hearing and getting adjourned over a maths error in their own spreadsheet.
- **Rough TAM reasoning:** 4.6M privately rented households in England, ~2.8M landlords, the majority self-managing 1–4 units. Roughly **30% of landlords hit arrears in a given year** and 210k+ households are in active arrears ([Property118](https://www.property118.com/landlords-face-470m-rent-arrears-across-england/)). Even a few hundred thousand of these are addressable; a paid possession event is a once-or-twice-a-year purchase per affected landlord, plus a low monthly "rent-ledger watch" subscription.
- **Why now for them:** The law changed *six weeks ago*. The familiar Section 21 escape hatch is gone, the first wave of post-Act Section 8 hearings is hitting courts, and word of struck-out claims is spreading through landlord forums right now.

## 5. Product sketch (MVP)

- Import the rent record: connect Open Banking feed, or upload a bank CSV / existing spreadsheet; the tool reconciles payments-due vs payments-received into a clean **24-month arrears schedule**.
- Auto-select the **right grounds** (8 / 10 / 11) based on the live arrears figure against the new 3-month threshold — and flag when you're one payment away from losing mandatory Ground 8.
- Generate the **correct current notice** (Form 3) with the legally-required notice period for each ground.
- Build the **particulars statement**: a chronological, numbered, ground-by-ground document with evidence references — the artefact that turns "they haven't paid" into "here is the proof."
- Assemble and paginate the full **court bundle**: tenancy agreement, deposit-protection certificate, rent schedule, correspondence log, notice + proof of service — in the order the court expects.
- **Pre-hearing checklist** that runs the bundle against the common strike-out reasons (wrong form, unreconciled schedule, missing deposit proof, timeline gaps) before you file.
- Re-generate on demand as arrears accrue or the tenant makes a partial payment, so the bundle is always current at the hearing date.

## 6. AI angle — what's load-bearing

Remove the AI and this is back to a £350/hr paralegal. The load-bearing work is: (1) parsing messy, inconsistent bank feeds and ad-hoc landlord spreadsheets into a reconciled, court-defensible rent schedule — the single most error-prone step that gets cases adjourned; (2) drafting a coherent ground-by-ground **particulars narrative** from the raw payment timeline and correspondence, in the register a judge expects; (3) checking the assembled bundle against a rule-set of known strike-out failure modes. That's document understanding + structured legal-style drafting + rule-checking — precisely what current models do well and what a spreadsheet template cannot.

**Guardrail:** this is a *document preparation tool*, not legal advice. It produces the bundle the landlord (or their solicitor) files; it does not represent them or opine on the merits. Staying on the tool side of that line is what keeps it launchable without regulatory approval.

## 7. Localization angle (if any)

This *is* the localization play — it's England-and-Wales-specific by design and that's the moat. The whole product is built around UK statute (Housing Act 1988 Section 8, the 2025 Renters' Rights Act amendments), UK court forms (Form 3, N5, N119), the deposit-protection regime, and the post-May-2026 3-month threshold. A generic global "eviction tool" is worthless here; the value is entirely in encoding the current English possession procedure correctly. Pricing in **£** at landlord wallets (a £39–£99 one-off bundle vs a £3,000 eviction bill) is the wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Hybrid. **£99 one-off** per court-ready bundle (the event purchase), plus an optional **£8/property/month** "ledger watch" subscription that keeps the arrears schedule live and pre-builds the bundle the moment a tenant crosses the threshold. Agent/paralegal white-label tier at £49/mo + per-bundle.
- **ACV:** A self-managing landlord with one arrears event ≈ £99–£200/yr; a subscribed multi-unit landlord or small agent ≈ £300–£600/yr.
- **Rough math to $1M ARR (~£780k):** ~6,500 bundles/yr at £99 (≈£640k) + ~1,500 ledger-watch subscriptions at £96/yr (≈£144k). Against 210k+ households in active arrears, that's a low-single-digit share of *just this year's* events.
- **Rough math to $5M ARR:** requires becoming the default bundle tool for self-managing landlords *and* a white-label engine inside small letting agents and online-eviction firms — i.e. owning the "after the notice" step that the notice-generators don't touch, plus expanding to Scotland's separate FTT process.
- **Expansion path:** ledger-watch subscriptions (recurring) → multi-property dashboards → ASB/other-ground bundles beyond arrears → agent white-label → adjacent landlord compliance (the Act's new landlord database, decent-homes evidence).

## 9. Go-to-market wedge — first 100 customers

- **NRLA / landlord-forum content + ad placement:** The National Residential Landlords Association and forums like Property118 and r/uklandlords are where terrified post-Act landlords are *right now* asking "how do I evict under Section 8?" Publish a free "Section 8 bundle checklist," gate the auto-built version. These are warm, self-identifying buyers.
- **Cold/warm outreach to small letting agents:** scrape the ~hundreds of independent agents who *don't* have in-house legal, pitch the white-label bundle as a service they resell to landlord clients — each agent is a distribution node to dozens of landlords.
- **Solicitor/paralegal "do the boring 80%" partnership:** eviction solicitors hate assembling schedules at £350/hr they can't fully bill. Offer the tool as their bundle-prep layer; they refer the self-serve cases too small for them.
- **Targeted search:** landlords actively Google "Section 8 particulars," "rent arrears schedule for court," "Form 3 template" at the moment of pain — high-intent, low-volume, cheap to capture.

## 10. Build complexity — justification

**Medium.** The document-generation, ledger-reconciliation, and bundle-assembly are off-the-shelf LLM + standard web stack — a pair could ship a credible v1 in **10–14 weeks**. The real work isn't engineering; it's **domain accuracy**: encoding the current Section 8 grounds, notice periods, correct forms, and strike-out failure modes correctly, and keeping them updated as the courts issue post-Act guidance. That demands a landlord-solicitor or experienced paralegal advisor on the team — hence `domain-expertise-required`. Open Banking ingestion adds modest integration work but is well-trodden in UK PropTech.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Document-prep tool, not legal advice/representation. Stay on the tool side of the SRA line. |
| Ethical — no harm / dark patterns | ✅ | Helps lawful possession with correct evidence; arguably reduces wrongful claims against tenants. |
| Market exists (evidence above) | ✅ | £470M arrears, law forcing the workflow, incumbents charging £250–£3,000. |
| 1–5 person team can build this | ✅ | Pair + domain advisor, 10–14 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Web app + LLM API + Open Banking; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire at the moment of an arrears event — every week is lost rent and an adjournment resets a 9-month clock. But it's episodic, not daily. |
| Demand evidence | 15 | 12/15 | Hard signals: £470M arrears, mandated workflow change, priced incumbents, forum chatter. Verbatim customer quotes are journalistic/legal sources, not yet raw landlord voice — hence not 13+. |
| Build feasibility | 15 | 12/15 | Off-the-shelf stack; main risk is domain accuracy and Open Banking edge cases, not novel tech. |
| Distribution clarity | 15 | 11/15 | NRLA/forum/agent channels are concrete and self-identifying, but conversion on an episodic purchase is unproven. |
| Revenue mechanics | 15 | 11/15 | £99 bundle vs £3,000 alternative is an easy yes; recurring revenue depends on the ledger-watch upsell landing. |
| Time to first revenue | 10 | 7/10 | Self-serve, pre-sellable to landlords in active arrears; realistic first paid bundle in 4–8 weeks of launch. |
| Defensibility | 10 | 7/10 | Moat = correctly-encoded, continuously-updated English possession procedure + bundle workflow lock-in. Copyable, but the regulatory-knowledge upkeep is real friction for a clone. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `content-heavy`

### Key assumptions to validate (3–5)

1. **Assumption:** Self-managing landlords will pay ~£99 for a bundle rather than DIY in Word or pay a solicitor. **How to test:** Put a landing page with the £99 offer in front of 3 landlord forums + NRLA; measure pre-orders / waitlist deposits from people in *current* arrears.
2. **Assumption:** The auto-built bundle is accurate enough that a judge accepts it without adjournment. **How to test:** Have 2 eviction solicitors / paralegals review 10 generated bundles against real cases and rate court-readiness.
3. **Assumption:** Open Banking / CSV ingestion reconciles real-world messy rent payments cleanly enough. **How to test:** Run 20 real anonymised landlord rent records through the reconciliation and measure error rate vs hand-built schedules.
4. **Assumption:** The episodic purchase converts into recurring ledger-watch revenue. **How to test:** Offer the £8/mo upsell at bundle checkout to the first 50 buyers; measure attach rate.

### Risk flags

1. **Regulatory/SRA risk:** Drifting from "document tool" into "giving legal advice" could trigger regulation. Mitigate with clear scoping, disclaimers, and a solicitor advisor — keep the human in the loop for the legal judgement.
2. **Accuracy/liability risk:** A wrong arrears figure or outdated form that loses a real case is reputationally fatal in a small, tight-knit landlord community. The strike-out checklist must be conservative and the procedure kept current.
3. **Market-timing / shrinking-base risk:** ~220k landlords are projected to *exit* the PRS in 2026 — the addressable base is contracting even as the per-event pain rises. Net effect is likely positive near-term (more disputes during the exodus) but watch it.
4. **Platform dependency:** Court forms and procedure can change again as the Act beds in; the product must track HMCTS guidance closely.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + UK landlord-solicitor/paralegal advisor (domain-heavy)
Time to revenue:        4–8 weeks from launch (self-serve, buyers already in pain)
Capital to launch:      £8–15k ($10–19k) — web app, LLM + Open Banking APIs, advisor fees
Top 3 assumptions to validate first:
  1. £99 willingness-to-pay among self-managing landlords in active arrears — forum landing-page pre-orders
  2. Bundle court-readiness — solicitor review of 10 generated bundles
  3. Ledger reconciliation accuracy on real messy records — 20-record error-rate test
Kill criteria:
  - Abandon if <8% of forum/landing-page visitors in active arrears pre-order at £99
  - Abandon if reviewing solicitors rate >2 of 10 generated bundles as "would be adjourned"
  - Abandon if a well-funded incumbent (Landlord Action, NRLA, a deposit scheme) ships an equivalent auto-bundle before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a landing page with the £99 bundle offer + a free "Section 8 strike-out checklist" lead magnet. Wire a waitlist with a refundable £10 deposit to filter intent.
- **Day 3–4:** Post the checklist (genuinely useful, not spam) into r/uklandlords, Property118, and one NRLA channel. DM 20 landlords who posted in the last month about arrears or "how do I evict under Section 8."
- **Day 5:** Decide go / no-go. **Falsifiable bar:** ≥8% of landlords-in-arrears who land on the page place a £10 deposit, AND ≥2 of 3 paralegals/solicitors shown a mocked bundle say it's "closer to court-ready than what most landlords bring me." Below either bar → no-go or rework the wedge.
