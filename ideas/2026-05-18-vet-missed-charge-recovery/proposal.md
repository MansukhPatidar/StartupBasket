---
title: "ChargeSweep — missed-charge recovery for legacy-PIMS vet clinics"
slug: vet-missed-charge-recovery
date: 2026-05-18
category: HealthTech / US Independent Veterinary Practices
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Reads your day's medical records against the invoices and catches the exams, labs and meds nobody billed."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Vet, Revenue-recovery, PIMS-overlay]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 13
  time: 7
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ChargeSweep — missed-charge recovery for legacy-PIMS vet clinics

## 1. One-liner

Reads your day's medical records against the invoices and catches the exams, labs and meds nobody billed.

## 2. Trend signal — why now?

Three things landed in the same 12 months.

**The pain got measured and got worse.** The AVMA pegs missed charges at 5–10% of revenue. The 2025 VHMA audit survey found inaccurate billing was a top-two finding in 51% of practices and incomplete documentation in 54%. A multi-doctor hospital audit found 5–20% of charges unbilled — roughly $500K/year. And for the first time in several years, bottom-line profits *fell* at US veterinary practices in 2025. The leak was always there; the margin to absorb it is gone.

**The tech to read a vet record cheaply arrived.** AI scribe and ambient charge-capture went from demo to production in 2025. Instinct reports hospitals seeing "at least 6% increase in captured revenue" after switching to its integrated charge capture. Lupa raised $25M (Series A Oct 2025, reportedly 50x revenue growth between rounds) building an AI-native PIMS. ScribbleVet was acquired by Instinct Science in Jan 2026. "Veterinary AI" search volume grew ~1,680% YoY 2024→2025.

**But the money chasing this is all rip-and-replace.** Every funded player — Lupa, Instinct, Digitail, Shepherd — wants you to *replace your PIMS*. ~9,000 clinics run AVImark and Cornerstone is ~20% of the rest. Server-based legacy. These owners will not migrate twenty years of records to capture 7% — but they'd happily pay to plug the leak without touching their PIMS.

Provenance:
  - Signal 1 (demand): AVMA 5–10% missed-charge revenue loss; 2025 VHMA survey 51% inaccurate billing, 54% incomplete docs; US vet profits fell 2025 — Today's Veterinary Business, https://todaysveterinarybusiness.com/missed-charges-0226/ — 2026-02
  - Signal 2 (feasibility): Ambient charge capture in production — Instinct reports ≥6% captured-revenue lift post-switch; ScribbleVet acquired by Instinct Science Jan 2026 — https://www.shepherd.vet/blog/8-best-ai-powered-veterinary-practice-management-software-platforms-2026-comparison-guide/ — 2026-01
  - Signal 3 (economic): Lupa $25M raised, Series A Oct 2025, ~50x revenue growth; "veterinary AI" search +1,680% YoY — https://www.co.vet/post/veterinary-ai-scribe — 2026-01
  Category: Tech-unlock

## 3. The opportunity

The whole funded field made the same bet: own the entire clinic OS. That bet works on greenfield and cloud-curious practices. It strands the largest, stickiest segment — independent practices on AVImark/Cornerstone — because the switching cost (data migration, retraining a 12-person team, downtime) dwarfs the 7% they'd recover.

The 10× move is to *not* be the PIMS. ChargeSweep is a read-only overlay: it ingests the day's finalized medical records and the day's invoices from whatever PIMS the clinic already runs, and within minutes flags every documented service that has no matching line item — "Bella's chart says senior wellness panel drawn, fecal run, gabapentin dispensed; invoice has exam + vaccine only." A practice manager clears the worklist before the client leaves or, worst case, before the day closes.

Incumbents do this badly because their charge capture only works *inside their own ecosystem*. Vetsource, dvm360 and every PIMS blog tell practices to "spot-check 10 charts per provider per week" manually — an admission that comprehensive audit is too labor-intensive to do by hand. That manual gap is the wedge.

## 4. Target market

- **Primary customer:** Owner or practice manager of an independent US small-animal practice, 1–6 vets, $700K–$4M annual revenue, running AVImark, Cornerstone, or Impromed (server-based), no in-house RCM staff.
- **Why they buy:** In their words — *"We did much better yesterday. We only missed a six-month heartworm preventive, one fecal test, and a senior blood panel."* (practice owner, Today's Veterinary Business). That's ~$400 in one day they only caught because someone happened to look. They know it's happening; they have no systematic, low-effort way to stop it short of buying a whole new PIMS.
- **Rough TAM reasoning:** ~28,000–30,000 US companion-animal practices; AVImark alone ~9,000 customers, Cornerstone large share of the rest. Conservatively 12,000–15,000 independent practices on legacy server PIMS. At $4,800/yr ACV, even 5% penetration ≈ $3M+ ARR.
- **Why now for them:** 2025 was the first profit-down year in memory. The owner who shrugged at "7% leakage" while practices grew 10%/yr is now staring at a flat P&L and a recovery that pays for itself in week one.

## 5. Product sketch (MVP)

- Daily import of finalized medical records + invoices from the clinic's existing PIMS (export file, scheduled DB read, or PIMS API where one exists)
- AI cross-check: every documented service, diagnostic, and dispensed med matched against invoice line items
- Discrepancy worklist: ranked by dollar value, one click to mark "billed / waived / not applicable," with the chart snippet shown inline
- Same-day "catch-it-at-checkout" mode: morning's records swept by lunch so front desk can recover before clients leave
- Weekly leakage report by provider and category (the number that makes the owner renew)
- Recovery dashboard: dollars flagged vs. dollars recovered, cumulative — the ROI receipt
- No writes to the PIMS. Read-only by design (removes the #1 IT objection)

## 6. AI angle — what's load-bearing

The entire product is an LLM reading free-text and semi-structured veterinary records and reconciling clinical intent against a billing ledger. "Doctor noted 'started on Apoquel 16mg, dispensed 30 tabs'" → does an Apoquel line exist on the invoice at the right quantity? That's entity extraction + clinical-synonym normalization (a SOAP note says "ED&C," the price list says "mass removal") + reconciliation logic, per record, at clinic scale. Remove the AI and you're back to a human spot-checking 10 charts a week — which is exactly the status quo this replaces. AI is the product, not a feature.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is structural to the US market: a long legacy-PIMS tail (AVImark/Cornerstone) plus high per-visit revenue that makes 7% leakage worth four figures a month. The same idea is weaker in markets with lower ticket sizes and more cloud-native PIMS adoption. US-only is the right call, not a missing angle.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $399/mo single-doctor, $599/mo 2–4 doctor, $899/mo 5+ doctor. Flat per-practice, not per-seat (per-seat punishes the exact behavior — more staff touching records — that causes the leak).
- **ACV:** ~$5,800 blended.
- **Rough math to $1M ARR:** ~170 practices × ~$5,800 = ~$1M. ~170 of 12,000+ target practices = 1.4% penetration.
- **Rough math to $5M ARR:** ~860 practices (~6% of the legacy-PIMS segment), plus an upsell tier (controlled-drug log reconciliation, inventory shrink detection — same record-reading engine, new worklist).
- **Expansion path:** Land on missed-charge recovery; expand into adjacent record-vs-reality audits (Rx vs. dispensed controlled-substance logs, lab-machine run logs vs. invoices, inventory depletion vs. billed). Each is a new module on the same ingestion pipe; ACV climbs to $10K+ without adding seats.

## 9. Go-to-market wedge — first 100 customers

- **ROI-on-a-plate cold outreach:** Run a free 5-day retroactive sweep. Practice exports last month's records + invoices; we hand back "you left $9,400 on the table in 30 days, here are the 140 charts." That report *is* the sales pitch. Target list: scrape the AVMA / state veterinary board directories + AVImark/Cornerstone user forums and Facebook groups (e.g., "Veterinary Practice Managers" ~30K+ members).
- **Practice-manager communities:** VHMA (Veterinary Hospital Managers Association) members are the buyer and the influencer. Sponsor/present a "what your missed-charge number actually is" session; offer free sweeps to attendees.
- **Consolidator & buy-side angle:** Vet practice acquirers run charge-capture audits during diligence anyway. Sell ChargeSweep as the post-acquisition tool to lift recovered revenue across a portfolio of newly-bought independents still on legacy PIMS.
- **CPA / practice-consultant channel:** Veterinary-specialist CPA firms (KSM, VMG-aligned consultants) already advise clients on missed charges; referral fee for every practice they route.

The pitch closes itself because the free sweep produces a falsifiable dollar number tied to the prospect's own records.

## 10. Build complexity — justification

Medium. The AI reconciliation on off-the-shelf models is tractable and most of the value. The real work is *ingestion from legacy server PIMS*: AVImark/Cornerstone have no clean public API, so v1 leans on scheduled record/invoice exports (and read-only DB connections where IT allows). That's integration grind, not research — a small team with one engineer who'll go deep on AVImark's data layout ships a credible v1 in ~3–4 months. Clinical-synonym normalization needs a vet advisor but not a custom model.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only audit of the clinic's own records; clinic is data controller. No PHI/HIPAA (animal records). |
| Ethical — no harm / dark patterns | ✅ | Recovers revenue for legitimately performed work; flags, doesn't auto-bill. Improves documentation. |
| Market exists (evidence above) | ✅ | AVMA/VHMA quantified loss, owner quotes, funded incumbents in adjacent space. |
| 1–5 person team can build this | ✅ | 1 AI/integration engineer + 1 vet-domain advisor + founder for GTM. |
| Launchable with <$50K / ₹40L | ✅ | Inference + infra + a few legacy-PIMS test environments. Well under $50K. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Quantified daily money loss, owner already feels it, 2025 profit squeeze makes it hair-on-fire. Not 20: it's tolerated until it isn't. |
| Demand evidence | 15 | 13/15 | AVMA %, VHMA survey, owner verbatims, ≥6% lift claims from incumbents, heavy funding nearby. Direct demand for a *standalone* tool is inferred, not yet proven. |
| Build feasibility | 15 | 11/15 | AI part easy; legacy-PIMS ingestion is real integration grind with no clean API. 3–4 months, not 4–6 weeks. |
| Distribution clarity | 15 | 12/15 | Free retroactive sweep = falsifiable ROI pitch; VHMA + FB groups + consolidators are named, reachable channels. Cold conversion math still unproven. |
| Revenue mechanics | 15 | 13/15 | Pricing trivially justified by recovered $; flat per-practice clean; $1M needs only ~170 clinics. |
| Time to first revenue | 10 | 7/10 | Free sweep can convert in weeks, but ingestion plumbing per PIMS delays a smooth funnel. 6–10 weeks to first paid. |
| Defensibility | 10 | 6/10 | Soft moat: accumulated PIMS-export quirk handling + clinical-synonym dictionary + workflow lock-in. Funded incumbent could bolt this on, but they're committed to rip-and-replace. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** Independent legacy-PIMS practices will pay $400–900/mo for recovery without changing their PIMS. **How to test:** Free retroactive sweeps for 15 practices; measure how many convert to paid at quoted price within 30 days.
2. **Assumption:** AVImark/Cornerstone records can be reliably exported or read often enough for same-day catch. **How to test:** Build ingestion against 3 real practice environments (one each AVImark, Cornerstone, Impromed); confirm daily cadence is feasible without IT heroics.
3. **Assumption:** AI reconciliation hits a precision/recall good enough that the worklist is trusted, not ignored. **How to test:** Run against hand-audited records from 5 practices; target ≥90% precision on flagged misses with manageable false-positive rate.
4. **Assumption:** Recovered dollars materially exceed price (clear ROI). **How to test:** In the free sweeps, measure flagged-then-recovered $ vs. proposed subscription; need ≥5× in month one.

### Risk flags

1. **Platform dependency:** Ingestion depends on legacy PIMS export/DB access; a vendor could restrict it. Mitigation: read-only exports are owner-controlled data; multiple ingestion paths.
2. **Incumbent encroachment:** A funded player (Instinct/Lupa) could ship a non-rip-and-replace overlay. Their org incentive is to sell the full platform — but watch for it; it's the main kill risk.
3. **Trust/false-positive risk:** A noisy worklist gets switched off in week two. Precision is existential, not a nice-to-have.
4. **Market timing:** If legacy-PIMS clinics migrate to cloud PIMS faster than expected, the strandeded-segment thesis shrinks. (Migration is historically very slow — low probability, high impact.)

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who'll go deep on AVImark/Cornerstone data layouts, with a practicing-vet or VHMA-credentialed advisor
Time to revenue:        6–10 weeks (free sweep → paid)
Capital to launch:      $15–30K ($ inference + infra + legacy-PIMS test setups + advisor)
Top 3 assumptions to validate first:
  1. Legacy-PIMS practices pay $400–900/mo for overlay recovery — 15 free sweeps, measure 30-day conversion
  2. Daily record/invoice ingestion from AVImark/Cornerstone is feasible without IT heroics — build against 3 real environments
  3. Reconciliation precision ≥90% so the worklist is trusted — validate against hand-audited records from 5 practices
Kill criteria:
  - Abandon if <3 of 15 free-sweep practices convert to paid within 30 days
  - Abandon if reliable daily ingestion proves impossible for both AVImark and Cornerstone without per-practice custom IT work
  - Abandon if a funded incumbent ships a credible read-only, no-migration overlay before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 8–10 independent practices on AVImark/Cornerstone (VHMA forums, vet practice-manager FB groups). Get one to share a real month of de-identified records + invoices.
- **Day 3–4:** Hand-build the reconciliation on that real data. Produce the leakage report: dollars missed, charts, by provider. Show it to 5 owners/managers.
- **Day 5:** Decide go/no-go on a falsifiable bar: **≥3 of 5 say "I would pay $500+/mo for this today" AND the sample's flagged-recoverable revenue is ≥5× the monthly price.** Below either bar → no-go or rework segment/pricing.

The output is a dollar number from the prospect's own records and a written price commitment — not a vibe.
