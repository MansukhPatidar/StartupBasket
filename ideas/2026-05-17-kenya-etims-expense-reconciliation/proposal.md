---
title: "KodiMatch — expense-leak reconciler for Kenyan businesses"
slug: kenya-etims-expense-reconciliation
date: 2026-05-17
category: Compliance / Kenya-SMB
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Finds every booked expense with no matching KRA eTIMS invoice and chases the supplier to fix it before you file."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Kenya, eTIMS, KRA, SMB, Accountant-channel, Tax-compliance, M-Pesa]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# KodiMatch — expense-leak reconciler for Kenyan businesses

## 1. One-liner

Finds every booked expense with no matching KRA eTIMS invoice and chases the supplier to fix it before you file.

## 2. Trend signal — why now?

From **1 January 2026**, KRA validates every income and expense entry in a tax return directly against its e-invoicing data. Any expense without a matching, buyer-PIN-linked eTIMS invoice on KRA's server is auto-disallowed — added back to profit and taxed at 30% corporation tax. The compliance window closes **31 March 2026**. This isn't a future threat; it's live and biting now.

The structural problem: Kenya's supply chains are heavily informal. A business books legitimate costs from suppliers who have no KRA PIN, aren't on eTIMS, or forget to put the buyer's PIN on the invoice. KPMG, Business Daily and Capital FM are all running pieces on it. Worked example from Pulse Kenya / techweez: a business spends Sh1,000,000, but only Sh300,000 carries eTIMS documentation — the remaining Sh700,000 inflates taxable profit, costing ~Sh210,000 in tax on money already spent.

Accounting firms have flagged supplier non-compliance as their #1 client headache for the 2026 filing season. Meanwhile KRA has published a documented OSCU/VSCU system-to-system API and explicitly allows third-party integrators, and a Buyer-Initiated Invoicing solution exists for suppliers under KES 5M turnover.

Provenance:
  - Signal 1: KRA auto-disallows any expense without a matching eTIMS invoice from 1 Jan 2026; informal suppliers make this a mass problem; Sh700K-disallowed worked example — https://www.pulse.co.ke/story/how-kras-2026-expense-rules-will-change-the-way-businesses-operate-2025111009542061562 / https://adamjeeauditors.com/e-tims-2026-kra-expense-validation-business/ / https://www.capitalfm.co.ke/business/2026/02/etims-threatened-by-system-gaps-supplier-challenges-expert/ — 2026-02
  - Signal 2: KRA published OSCU/VSCU system-to-system API + third-party integrator path + Buyer-Initiated Invoicing solution — https://www.kra.go.ke/business/etims-electronic-tax-invoice-management-system/learn-about-etims/etims-system-to-system-integration — 2026-05
  - Signal 3: Active, funded Kenya accounting-software market (Zoho Books KES 849/mo, Sage KES 1,200/mo, QuickBooks KES 1,500/mo, Qwan) all racing native eTIMS — money moving, willingness-to-pay proven — https://qwan-accounting.com/blog/best-accounting-software-kenya.html — 2026-05
  Category: Regulatory arbitrage

## 3. The opportunity

Every incumbent — Zoho Books, Sage, QuickBooks, Qwan, Uhasibu, ERPNext — solves the **sell side**: generate *your* eTIMS sales invoices and push them to KRA. Nobody guards the **buy side leak**, which is where the 2026 money is actually lost. Your sales invoices aren't the problem; KRA disallowing your *purchases* because a fundi, a rural fertiliser dealer, or a small landlord didn't issue a buyer-PIN'd eTIMS invoice — that's the problem.

KodiMatch is purpose-built for that one job: pull what the business booked as expenses, pull what KRA's eTIMS feed actually has against the business's PIN, diff them, and turn each gap into a recoverable action — chase the supplier to issue it, or generate the buyer-initiated reverse invoice where the supplier qualifies. It's a single-purpose loss-recovery tool that sits *alongside* whatever accounting suite the business already runs, not a rip-and-replace.

## 4. Target market

- **Primary customer:** Kenyan accounting/bookkeeping firms (2–20 staff) filing returns for 30–300 SME clients each, and directly, owner-managed Kenyan SMEs with KES 5M–500M turnover and many small/informal suppliers (agribusiness, construction, retail, light manufacturing, logistics).
- **Why they buy:** In their words (sourced) — "their non-compliance becomes your problem at filing time"; an agribusiness "buying fertiliser and seeds from a rural supplier who has no PIN" has that cash "automatically treated as profit"; "Sh700,000 will inflate profits, increasing the company's tax bill." A firm with 100 clients faces this 100 times, manually, against a 31 March wall.
- **Rough TAM reasoning:** Kenya has well over 1.5M registered businesses and tens of thousands of bookkeeping/accounting practices. Even 3,000 firms + 5,000 direct SMEs at modest pricing is a multi-million-dollar ARR ceiling — small for VC, ideal for a bootstrapper.
- **Why now for them:** The rule went live 1 Jan 2026 and KRA's validation is automated and unappealable ("no room for manual overrides"). The pain is dated, quantified in shillings, and recurring every filing cycle.

## 5. Product sketch (MVP)

- One-time connect: business authorises its eTIMS/KRA feed (OSCU/VSCU integrator credentials) and uploads or syncs its expense ledger (CSV from any accounting suite, or M-Pesa/bank statement).
- **Leak report:** every booked expense with no matching, buyer-PIN-linked eTIMS invoice — ranked by shillings at risk and the tax it will cost if unfixed.
- Per-supplier rollup: "These 14 suppliers account for Sh2.3M of your exposure" — so you fix the biggest holes first.
- **Supplier chase:** auto-send a WhatsApp/SMS to each missing supplier with the exact invoice details and the buyer's PIN, requesting they issue the eTIMS invoice; track who has complied.
- **Buyer-initiated invoice generator:** for suppliers under the KES 5M turnover threshold, produce the reverse invoice the buyer is allowed to issue on the supplier's behalf, KRA-formatted.
- Pre-filing "clean-or-not" verdict per period: green only when every material expense is matched.
- Firm dashboard: all client books in one list, sorted by unresolved exposure and days to deadline.

## 6. AI angle — what's load-bearing

Matching is the hard part and it's where AI earns its keep. Supplier names never tie out: "J. Kamau Hardware", "Kamau H/ware", an M-Pesa till name, and the eTIMS legal entity are the same vendor described four ways. Amounts split across part-payments; dates drift; descriptions are free text. Deterministic joins fail on real Kenyan books. The product is a fuzzy entity-and-transaction reconciliation engine — LLM-assisted name/vendor resolution, amount-cluster matching, and confidence-scored gap detection — plus drafting the chase messages and reverse invoices in English/Swahili. Remove the AI and you're back to an accountant eyeballing two spreadsheets line by line, which is exactly the unpaid labour this replaces.

## 7. Localization angle

This *is* the localization play — it cannot exist as a generic global product. It's bound to KRA's eTIMS schema, the OSCU/VSCU integrator regime, the KES 5M buyer-initiated-invoicing threshold, M-Pesa till/paybill statement formats, English/Swahili supplier comms, and KES pricing. A ₹/$ generic "expense reconciler" has none of these. The same pattern is portable later to Nigeria's FIRS MBS mandate (SME enforcement 2027–28) and other African e-invoicing rollouts, but Kenya 2026 is the beachhead with the live deadline.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Direct SME — KES 2,500/mo (~$19) per business, positioned above a KES 849 accounting suite because it recovers far more than it costs. Firm/practice tier — KES 1,200/mo (~$9) per active client book, volume-tiered, billed to the firm.
- **ACV:** ~$230/yr direct SME; firm ACV scales with client count (a 100-client firm ≈ $9,000+/yr).
- **Rough math to $1M ARR:** 120 firms averaging 60 client-books × $9/mo × 12 ≈ $780K, plus ~1,000 direct SMEs × $19 × 12 ≈ $230K → ~$1.0M ARR.
- **Rough math to $5M ARR:** ~600 firms at deeper book counts plus direct SME base of ~6,000; requires expansion into Nigeria FIRS and one more African e-invoicing market to widen the funnel.
- **Expansion path:** ACV grows as a firm onboards more client books, then upsells — quarterly exposure monitoring, KRA correspondence handling, input-VAT recovery module, and the Nigeria FIRS port for firms with cross-border clients.

## 9. Go-to-market wedge — first 100 customers

- **Accounting-firm cold list:** scrape the Kenya ICPAK member directory and Nairobi/Mombasa/Kisumu accounting-firm listings (rankingkenya, F6S, ensun all publish them). Email/WhatsApp a 90-second Loom: their own (anonymised) sample ledger run through KodiMatch showing "Sh X disallowed, here's the recovery list." Deadline-driven; expect strong reply rates ahead of 31 March / filing season.
- **Ride the panic content:** the KPMG/Business Daily/Capital FM/Adamjee articles are already driving searches. Publish a free "eTIMS expense-leak self-check" (upload a ledger, get exposure number, paywall the fix) and seed it in the comment sections and the r/Kenya / Kenyan business Facebook & WhatsApp groups where this is being argued.
- **Webinar with one ICPAK chapter or a known Nairobi tax firm:** "Surviving the 2026 eTIMS expense rule" — they bring the audience that already has the pain and a budget, you bring the tool. Co-branded, recurring each filing cycle.
- **Bank/SACCO SME-portal partnership:** the same banks pushing eTIMS readiness to SME customers can bundle the self-check as a value-add — warm channel into thousands of qualifying businesses.

## 10. Build complexity — justification

Medium. Off-the-shelf: web stack, LLM APIs for vendor/transaction resolution, WhatsApp/SMS providers (bulk SMS is KES 0.25). Real work: KRA OSCU/VSCU integrator certification (a documented but bureaucratic process — schedule it early), a robust fuzzy reconciliation engine that survives messy real ledgers and M-Pesa statements, and the buyer-initiated reverse-invoice generator in KRA's exact format. A 2–3 person team ships a credible v1 in roughly 4–5 months; the integrator cert timeline, not the code, is the long pole.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | KRA explicitly sanctions third-party integrators and buyer-initiated invoicing |
| Ethical — no harm / dark patterns | ✅ | Helps businesses pay correct tax and recover legitimate deductions; no evasion |
| Market exists (evidence above) | ✅ | Live 2026 rule, quantified shilling pain, active paid accounting-software market |
| 1–5 person team can build this | ✅ | 2–3 people, ~4–5 months |
| Launchable with <$50K / ₹40L | ✅ | API + small team; main cost is time-to-cert, not capital |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire: live rule, auto-disallowed, 30% tax on real spend, hard 31 Mar window, recurs every cycle |
| Demand evidence | 15 | 13/15 | Multiple independent signals — KPMG/Business Daily/Capital FM coverage, quantified pain, funded incumbents, ICPAK chatter |
| Build feasibility | 15 | 11/15 | Doable in ~4–5 months but KRA integrator cert + robust real-world reconciliation are non-trivial |
| Distribution clarity | 15 | 11/15 | Named channels (ICPAK directory, firm cold list, panic-content) with deadline urgency; conversion still to prove |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked to existing KES suites; firm-channel ACV strong; conversion assumption unproven |
| Time to first revenue | 10 | 7/10 | Free self-check → paid fix can convert in weeks given deadline, but cert may gate full product |
| Defensibility | 10 | 5/10 | Execution + integrator-cert + accumulating reconciliation data; an incumbent could bolt this on |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs solid engineering for the reconciliation engine and a KRA/eTIMS-literate operator (or close advisor) to get the integrator cert and the reverse-invoice format exactly right.

### Key assumptions to validate (3–5)

1. **Assumption:** Accounting firms will pay a per-client-book fee for buy-side leak detection on top of their existing suite. **How to test:** 30 structured calls with Nairobi/Mombasa firms; offer paid pilot at KES 1,200/book before building.
2. **Assumption:** The KRA OSCU/VSCU integrator cert is obtainable by a small team within ~3 months. **How to test:** Start the application week 1, talk to existing certified integrators, treat a >5-month cert as a kill signal.
3. **Assumption:** A free "exposure self-check" converts to paid fix at a viable rate. **How to test:** Ship the self-check first; measure upload→paid conversion before building the full chase/reverse-invoice engine.
4. **Assumption:** Fuzzy reconciliation hits acceptable accuracy on real messy Kenyan ledgers + M-Pesa statements. **How to test:** Run 10 real anonymised client books from pilot firms; require >90% correct match/gap classification.

### Risk flags

1. **Platform dependency:** Entirely dependent on KRA's eTIMS API and integrator regime; a schema change or cert-process change directly hits the product.
2. **Incumbent encroachment:** Zoho/Sage/Qwan could add buy-side reconciliation as a feature; defensibility is the head start plus accumulated matching data and firm relationships, not a hard moat.
3. **Market timing:** The acute 31 March 2026 urgency fades after filing season; product must transition from deadline-panic sale to recurring every-cycle compliance hygiene to sustain ARR.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + KRA/eTIMS-literate operator or advisor
Time to revenue:        8–14 weeks (self-check paid tier ahead of full cert)
Capital to launch:      $6–12K (KES ~0.8–1.6M)
Top 3 assumptions to validate first:
  1. Firms pay per-client-book — 30 firm calls + paid pilot before full build
  2. Integrator cert obtainable in ~3 months — apply week 1, kill if >5 months
  3. Self-check → paid fix converts — ship self-check first, measure conversion
Kill criteria:
  - Abandon if <10% of 40 firm outreach conversations show willingness to pay a per-book fee
  - Abandon if KRA integrator certification cannot be secured within 5 months
  - Abandon if reconciliation accuracy stays below 90% on real client books after 2 iterations
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the ICPAK / Nairobi accounting-firm list. Build a one-page mock leak report from a realistic synthetic Kenyan ledger. Open the KRA OSCU/VSCU integrator application and document the real timeline.
- **Day 3–4:** Run 25–30 WhatsApp/calls to firms and owner-managed SMEs: show the mock report, ask the direct question — would you pay KES 1,200/book (firm) or KES 2,500/mo (SME) to never get an expense disallowed? Capture verbatim objections.
- **Day 5:** Go/no-go on a single falsifiable number — **≥8 of 30 conversations give a concrete "yes, at that price" (or a paid pilot commitment)** AND the integrator cert timeline comes back ≤5 months. Below either threshold: no-go, revisit when the Nigeria FIRS SME deadline (2027) firms up.
