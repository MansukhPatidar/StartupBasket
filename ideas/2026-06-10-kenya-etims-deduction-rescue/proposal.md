---
title: "HesabuRescue — deduction rescue for Kenyan eTIMS SMEs"
slug: kenya-etims-deduction-rescue
date: 2026-06-10
category: Compliance / Kenya SMEs & Accounting Practices
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Flags every Kenyan SME deduction KRA will clawback for missing eTIMS proof, then files the fix per supplier."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Kenya, eTIMS, M-Pesa, Compliance-driven, SMB, AI-agent]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 6
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# HesabuRescue

## 1. One-liner

Flags every Kenyan SME deduction KRA will clawback for missing eTIMS proof, then files the fix per supplier.

## 2. Trend signal — why now?

Kenya flipped a switch on 1 January 2026. KRA's Income and Expense Validation Engine now auto-validates every income-tax return against three live data sources — eTIMS/TIMS invoice records, withholding-tax data, and customs import records. Any expense **not** backed by a valid, buyer-PIN-linked eTIMS invoice is automatically disallowed: the amount is added back to taxable income and taxed. KRA's own framing — "if you cannot defend a KSh 1 million expense with a proper eTIMS invoice, your tax liability could increase by 30% of that amount — an extra KSh 300,000." The first full filing season under this regime closes **30 June 2026**.

The consequence lands on the *buyer*, not the supplier. If your mama-mboga, your transporter, or your informal-sector vendor never transmitted an eTIMS invoice, *you* lose the deduction. To plug this, KRA published **Reverse Invoicing (Buyer-Initiated Invoicing) Guidelines** (25 March 2025), clarified them (27 May 2026) and expanded them (early June 2026): a buyer can now generate a compliant eTIMS invoice *on behalf of* a sub-KES-5M supplier via eCitizen, with the seller confirming over USSD (`*222#`). In late May 2026 KRA also quietly added a CSV-upload path on iTax to declare informal expenses for the June filing. So the rule, the penalty, and the remediation rails all went live inside a 6-month window — and almost nobody has tooling that connects them.

Provenance:
  - Signal 1 (Demand): KRA's 2026 Validation Engine auto-disallows expenses lacking eTIMS invoices; penalty ≈30% of the expense added to taxable income; first filing closes 30 June 2026 — https://sokodirectory.com/2025/11/kras-2026-e-invoice-crackdown-your-expenses-without-etims-receipts-will-become-taxable-income/ — 2025-11 / confirmed 2026-06
  - Signal 2 (Feasibility): KRA publishes a public PIN Validation API on developer.go.ke, plus eTIMS invoice/obligation verification; Reverse Invoicing runs on eCitizen + USSD `*222#`; iTax now accepts CSV expense uploads — https://developer.go.ke/apis/PinValidation — 2026-06
  - Signal 3 (Economic): Buyers are re-sourcing to pricier compliant suppliers purely to protect deductions; a Kenyan cloud-accounting boom (ZYNO Books, uHasibu, Cute Profit, Zoho Books KE, Accountabl) is competing on "eTIMS compliance" as the headline feature — https://www.vatupdate.com/2026/06/07/kenya-introduces-reverse-invoicing-under-etims-expanding-control-over-supplier-compliance/ — 2026-06
  Category: Regulatory arbitrage

## 3. The opportunity

The accounting suites (ZYNO Books, uHasibu, Zoho Books Kenya, Cute Profit, Accountabl) all sell "eTIMS compliance" — but they sell it as a *forward* feature: issue your own compliant invoices, reconcile M-Pesa, file VAT. None of them does the thing an SME actually panics about in June: **"Of the KES 14M I already spent this year, which chunks is KRA about to tax me on, and what is the exact fix for each one?"**

That's a backward-looking, expense-side, remediation problem — and it's brutal manually. The accountant has to: pull the year's bank + M-Pesa + petty-cash ledger, match each expense to whether a valid eTIMS invoice exists, look up each supplier's PIN/eTIMS status, decide per supplier whether to (a) chase them for a real invoice, (b) reverse-invoice them via eCitizen, or (c) CSV-declare it — and do it all before 30 June or eat a 30% add-back. Incumbents make you do this with eyeballs and spreadsheets. An AI-first tool that ingests the ledger, auto-classifies disallowance risk, hits the KRA PIN API, and produces a ranked worklist with the right remediation per line is 10× faster and lands squarely on the wallet's pain nerve.

## 4. Target market

- **Primary customer:** Owner-accountant or in-house bookkeeper at a Kenyan SME with KES 25M–500M annual turnover (the band big enough to have meaningful expenses across many small/informal suppliers, small enough to lack an ERP team). Secondary: the ~3,000+ small accounting & tax-agent practices in Nairobi, Mombasa, Kisumu, Nakuru who each file for 20–80 such clients.
- **Why they buy:** "KRA will tax me on money I never made if I can't prove my expenses." It's not abstract compliance — it's a direct, quantified hit to the tax bill, due on a hard date. Accountants buy it because reconciling a client's year of expenses against eTIMS by hand is days of work they can't bill enough for.
- **Rough TAM reasoning:** Kenya has well over 1.5M registered businesses on iTax; the slice with non-trivial expense bases and multiple suppliers (the disallowance-exposed band) is conservatively 150K–300K. Capturing even 3,000 paying SMEs + 300 practices is a multi-million-ARR business.
- **Why now for them:** The rule is live as of Jan 2026 and the *first* return under it is due 30 June 2026. Every subsequent quarter and year-end repeats the pain. This is a recurring, calendar-driven fire drill, not a one-off.

## 5. Product sketch (MVP)

- **Ledger import:** upload bank statement, M-Pesa statement (the Safaricom PDF/CSV most SMEs already pull), and expense ledger / QuickBooks-Zoho export.
- **Disallowance radar:** every expense line is auto-classified — ✅ has valid eTIMS proof, ⚠️ supplier exists but no transmitted invoice found, ❌ informal/no PIN — with the KES tax-at-risk quantified per line and in total ("KES 412,000 of deductions at risk = ~KES 124,000 extra tax").
- **Supplier compliance lookup:** batch-checks each supplier PIN against KRA's PIN/eTIMS status so you instantly see who's compliant, who's lapsed, who's informal.
- **Per-line remediation playbook:** for each at-risk line, the right fix — "chase supplier (auto-drafted WhatsApp/SMS request)", "reverse-invoice via eCitizen (pre-filled field sheet + USSD steps)", or "CSV-declare (generates the iTax-format upload file)."
- **Reverse-invoice pack generator:** produces the exact buyer-initiated invoice payload per sub-KES-5M supplier, ready to enter on eCitizen, with the supplier's `*222#` confirmation instructions auto-sent to them.
- **Year-end readiness score + countdown:** a single dashboard showing % of expenses defensible and days to filing deadline.
- **Audit trail export:** a clean PDF/CSV the SME's accountant or a KRA officer can review line-by-line.

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet nobody finishes. AI is doing three loads of real work: (1) **messy ledger normalization** — M-Pesa statements, bank PDFs, and informal expense notes are inconsistent, bilingual (English/Swahili), and full of paybill/till noise; an LLM extraction + classification layer turns them into structured supplier+amount+category lines reliably. (2) **risk classification** — deciding whether a line is defensible, fixable-by-reverse-invoice, or only CSV-declarable requires reading the transaction context (supplier type, amount vs KES 5M threshold, category eligibility) and applying KRA rules per line. (3) **remediation drafting** — generating the supplier chase messages, the reverse-invoice field sheets, and the iTax-format CSV. The KRA PIN API gives ground truth on compliance status; the AI does the judgment and the paperwork around it.

## 7. Localization angle

This *is* the localization play — it's unbuildable as a generic global product. It's hard-wired to Kenyan rails: KRA PIN/eTIMS API, eCitizen buyer-initiated invoicing, the `*222#` USSD confirmation, the iTax CSV format, M-Pesa statement parsing, English/Swahili ledgers, and KES-denominated pricing. Pricing must work at Kenyan wallets — a KES 2,500–6,000/mo SME tier where a $49 global SaaS price would be DOA. The same engine ports later to the *structurally identical* regimes now switching on: Nigeria's FIRS/MBS e-invoicing (SME go-live July 2027), and the buyer-side validation logic already familiar from Saudi ZATCA and Brazil. Kenya first because the deadline is now.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** SME self-serve KES 2,500/mo (~$19) for up to ~500 expense lines/mo; KES 6,000/mo (~$46) for high-volume. Accounting-practice tier KES 18,000–40,000/mo (~$140–310) for multi-client dashboards + bulk reverse-invoicing. Plus a one-off "year-end rescue" pack at KES 7,500 for seasonal SMEs who only surface at filing time.
- **ACV:** SME ≈ $300/yr; practice ≈ $2,400/yr blended.
- **Rough math to $1M ARR:** 2,000 SMEs × $300 + 150 practices × $2,400 = $600K + $360K ≈ **$960K**. Achievable within the disallowance-exposed band.
- **Rough math to $5M ARR:** ~10,000 SMEs + ~700 practices, OR add Nigeria/SEA as the e-invoicing mandates there hit enforcement — same engine, new rails.
- **Expansion path:** seasonal "rescue" buyers convert to always-on monitoring; per-supplier reverse-invoice volume becomes a usage upsell; practices add seats per client. Natural land-and-expand from "save my June filing" to "watch my deductions all year."

## 9. Go-to-market wedge — first 100 customers

- **Practice channel (fastest):** Kenya's tax-agent and small-audit firms already do this reconciliation by hand for clients. Scrape the ICPAK member directory + the Nairobi/Mombasa accounting-firm listings (a few thousand named firms), send each a 90-second Loom showing a real M-Pesa statement turned into a ranked at-risk worklist in 2 minutes. Practices are aggregators — one signs, brings 30 clients. Target 5% reply, close 10–15 practices in 8 weeks.
- **Deadline-triggered paid + organic:** the 30 June filing date is a forcing function. Run cheap Facebook/Google KE ads on "eTIMS expense disallowed" / "KRA reverse invoicing" keywords in May–June; the search intent is already spiking in the news cycle (sokodirectory, Business Daily, Capital FM all running eTIMS-clawback explainers).
- **WhatsApp/SME communities:** Kenyan SME owners cluster in WhatsApp/Telegram business groups and on Biashara forums. Seed the at-risk-calculator as a free lead magnet ("upload your M-Pesa statement, see how much KRA is about to tax you") → paywall the remediation packs.
- **Content + the news wave:** publish a plain-Swahili "your expenses are about to become income" explainer that rides the existing media panic; gate the calculator behind email.

## 10. Build complexity — justification

Medium. Off-the-shelf: LLM extraction/classification, standard web stack, KRA PIN Validation API (public on developer.go.ke), M-Pesa/bank statement parsing (well-trodden — BankStatement.app and others already do M-Pesa→QuickBooks). Custom work: a reliable rules layer encoding KRA's disallowance + reverse-invoicing logic (must be accurate — wrong advice on a tax filing is a trust-killer), the eCitizen reverse-invoice field generation, and the iTax CSV format. No eTIMS *transmission* integration needed for v1 — the product produces the inputs the user enters into KRA's own portals, sidestepping certification. Small team, ~3–4 months to a credible v1 ahead of a year-end season.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps taxpayers comply with KRA rules; uses KRA's own published APIs and guidelines. |
| Ethical — no harm / dark patterns | ✅ | Reduces wrongful over-taxation; surfaces real obligations, doesn't help evade. |
| Market exists (evidence above) | ✅ | Live rule, hard deadline, quantified penalty, booming compliant-accounting market. |
| 1–5 person team can build this | ✅ | Off-the-shelf AI + public KRA APIs; no transmission certification for v1. |
| Launchable with <$50K / ₹40L | ✅ | Software-only; main cost is domain-expert review of the rules layer. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Quantified, money-on-the-table, hard-deadline pain. Caps below 17 only because it's seasonal-peaked, not daily. |
| Demand evidence | 15 | 12/15 | Strong: live rule, penalty math, media wave, competitors selling adjacent "eTIMS compliance." Lacks direct verbatim customer quotes on the *expense-rescue* framing specifically. |
| Build feasibility | 15 | 11/15 | Public APIs + off-the-shelf AI, but the rules layer must be tax-accurate and eCitizen/iTax formats need careful handling. |
| Distribution clarity | 15 | 12/15 | Practice channel + deadline-triggered ads + free at-risk calculator are concrete and named. Conversion unproven. |
| Revenue mechanics | 15 | 11/15 | Kenyan wallets cap SME pricing; needs volume + practice tier to hit $1M. Math works but not generous. |
| Time to first revenue | 10 | 7/10 | Deadline-driven urgency = fast pilots, but the June 2026 window is tight for this cycle; first big season may be the next one. |
| Defensibility | 10 | 6/10 | Soft moat: the encoded KRA rules layer, practice relationships, and accumulating supplier-compliance data. Incumbents could bolt this on, hence not higher. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

### Key assumptions to validate (3–5)

1. **Assumption:** SMEs/accountants will pay KES 2,500–6,000/mo specifically for expense-side *rescue*, separate from their existing accounting suite. **How to test:** show 30 Nairobi accountants a live demo on their own client's M-Pesa statement; count how many pre-commit to a paid pilot.
2. **Assumption:** the KRA PIN/eTIMS API reliably returns supplier compliance status at batch scale. **How to test:** run 500 real supplier PINs through the developer.go.ke API; measure coverage, accuracy, rate limits.
3. **Assumption:** the reverse-invoicing + CSV remediation paths are stable enough to automate the paperwork around. **How to test:** walk 5 real sub-KES-5M supplier transactions end-to-end through eCitizen + `*222#` and confirm the generated field sheets are accepted.
4. **Assumption:** the practice channel aggregates demand (1 firm → many SMEs). **How to test:** sign 3 firms, measure how many client filings each routes through the tool.

### Risk flags

1. **Platform dependency:** Built on KRA's APIs, eCitizen, and iTax formats — KRA can change rules, formats, or close the CSV path with little notice (the May 2026 CSV path appeared "quietly"). Mitigate by keeping the rules layer config-driven.
2. **Incumbent fast-follow:** ZYNO Books / Zoho Books KE could ship an "expense-risk scan" as a feature. Counter with focus, speed, and the practice relationships they don't have.
3. **Market timing (seasonal):** Pain peaks around filing deadlines; off-season usage and churn are the real revenue risk. Always-on supplier monitoring is the answer — must be in the roadmap early.
4. **Trust/accuracy:** Wrong advice on a tax filing destroys credibility instantly. The rules layer needs domain-expert sign-off, not vibes.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a Kenyan tax/CPA domain advisor (ICPAK network)
Time to revenue:        6–10 weeks via accounting-practice pilots
Capital to launch:      KES 1.5–3M (~$12–23K)
Top 3 assumptions to validate first:
  1. SMEs/accountants pay for expense-side rescue separate from their accounting suite — 30 live demos on real statements
  2. KRA PIN/eTIMS API gives reliable batch supplier-compliance status — 500-PIN test run
  3. Practice channel aggregates demand (1 firm → many clients) — sign 3 firms, count routed filings
Kill criteria:
  - Abandon if <10% of 40 accounting-firm demos pre-commit to a paid pilot
  - Abandon if KRA's PIN/eTIMS API can't return compliance status at batch scale (no reliable ground truth = no product)
  - Abandon if off-season monthly churn exceeds 12% after the first filing peak (means it's a one-shot, not a SaaS)
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free "at-risk calculator" stub — upload an M-Pesa + bank statement, return total deductions at risk and estimated extra tax. No remediation yet. This is the lead magnet *and* the demo.
- **Day 3–4:** Take it to 30 accountants/SME owners (ICPAK network, Nairobi SME WhatsApp groups). Run it live on *their* real statements. Pitch the paid remediation tier.
- **Day 5:** Decide go / no-go on a hard number: **≥6 of 30 verbally pre-commit to a paid pilot at KES 2,500+/mo, AND the KRA PIN API returns valid compliance status for ≥80% of a 200-PIN test batch.** Both conditions must hold — demand without reliable ground-truth data is a dead end here.

A falsifiable result: pre-commitments counted, API coverage measured. Not "people seemed interested."
