---
title: "FatooraGuard — pre-clearance validator for Saudi Wave-24 SMEs"
slug: zatca-preclearance-validator
date: 2026-06-26
category: Compliance / Saudi Arabia SMEs (Wave 23/24 ZATCA Phase 2, SAR 375K–3M turnover)
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Catches every ZATCA e-invoice error before Fatoora rejects it — plain-language fixes, no accounting migration."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Compliance-driven, Multilingual, SMB, AI-agent, API-first]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# FatooraGuard

## 1. One-liner

Catches every ZATCA e-invoice error before Fatoora rejects it — plain-language fixes, no accounting migration.

## 2. Trend signal — why now?

Saudi Arabia's ZATCA Phase 2 ("Integration") e-invoicing mandate is rolling out in waves, and the threshold just collapsed. **Wave 23** (deadline 31 March 2026) caught firms above SAR 750K revenue; **Wave 24** (deadline 30 June 2026 — i.e. this week) drops the bar to **SAR 375,000**, pulling thousands of true small businesses into mandatory real-time integration with ZATCA's Fatoora platform for the first time. These are not ERP-running enterprises with consultants on retainer. They're shops, contractors, and service firms running legacy POS, Excel, or non-certified billing.

The technical bar is brutal for that cohort. Every standard (B2B) invoice must be **cleared** by ZATCA before it can be delivered to the buyer; every simplified (B2C) invoice must be **reported** within 24 hours. A single validation error — wrong VAT category code (`BR-KSA-31`), broken Previous-Invoice-Hash chain (`KSA-3`), invalid TLV-encoded QR (`KSA-9`), expired CSID certificate (401), or a hash mismatch — gets the **entire invoice rejected**. Penalties run **SAR 5,000–50,000 per violation**, and ZATCA's penalty-amnesty window closes 30 June 2026.

The developer pain is visible and verbatim. On ZATCA's own Fatoora developer forum, an implementer building QR generation without an SDK posted: *"I really need help in this I am stuck please someone help me in resolving this issue"* — after *"I keep encountering an 'INVALID QR CODE FORMAT' error"* even though *"when I scan the QR code… it indicates that the QR code is compatible with Phase 2."* That's a sophisticated developer. The SAR-375K shop owner has zero chance of self-diagnosing `BR-KSA-31`.

Provenance:
  - Signal 1 (demand): ZATCA Phase 2 rejection-error troubleshooting guides + developer forum thread where an implementer is "stuck" on QR/clearance errors — https://zatca1.discourse.group/t/invalid-qr-code-in-phase-2-for-simplified-invoices-while-performing-invoice-compliance-check/3221 and https://qeemahcloud.com/en/blog/zatca-phase-2-rejection-errors-troubleshooting-guide/ — June 2026
  - Signal 2 (feasibility): ZATCA publishes the full UBL 2.1 XSD, business-rule set (KSA-* / BR-KSA-*), TLV QR spec, and a public Sandbox/Simulation compliance API — every rejection reason is a deterministic, documented rule, plus cheap LLM inference to translate error codes into Arabic plain-language fixes — https://qeemahcloud.com/en/blog/complete-zatca-phase-2-einvoicing-requirements-guide/ — 2026
  - Signal 3 (economic): KSA processed 8.2B e-invoices in 2025 (+64% YoY); Wave 24 lowers threshold to SAR 375K bringing "thousands of SMEs" into scope; ZATCA reimburses up to SAR 2,500/establishment for approved e-invoicing software and Monsha'at Mezaya stacks up to 63% vendor discounts — https://www.ey.com/en_gl/technical/tax-alerts/saudi-arabia-announces-23rd-wave-of-phase-2-e-invoicing-integration and https://lkwjd.com/vat-compliance-software-saudi-smes — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents — Wafeq, Qoyod, Zoho Books KSA, Qeemah, Rewaa — are **full accounting/ERP platforms**. Their pitch is "move your entire books to us and we'll handle ZATCA." That's the right answer for a firm starting fresh. It's the *wrong* answer for the Wave-24 cohort that already runs a POS or a legacy invoicing system they don't want to rip out, and whose accountant already does their VAT. Telling a SAR-375K mechanic to migrate his whole accounting stack two weeks before a deadline is a non-starter — so he either limps along getting rejected, or pays a consultant SAR 8,000–15,000 for a one-time integration that breaks the next time ZATCA bumps the schema.

The gap is a **thin pre-clearance layer, not another accounting suite**. FatooraGuard sits *in front of* Fatoora: the SME's existing system (or a CSV/PDF/manual entry) hands an invoice to FatooraGuard; FatooraGuard validates it against the live ZATCA ruleset, fixes or flags every error in plain Arabic ("VAT category should be `S` not `Z` for this item — your QR will be rejected"), generates the compliant signed XML + TLV QR, submits to Fatoora, and returns the cleared invoice. No migration. No accounting lock-in. One job, done right, the day before the deadline.

What incumbents do badly here: (1) they force a platform switch; (2) their error surfacing is still raw ZATCA codes the owner can't read; (3) they're priced and packaged as accounting software, not as a SAR-99/mo compliance utility; (4) none of them lead with "keep your current system."

## 4. Target market

- **Primary customer:** Saudi micro/small businesses newly in scope under Wave 23/24 — SAR 375K–3M annual VATable turnover. Retail shops, F&B outlets, auto workshops, salons, trade contractors, clinics, and service firms running a non-certified POS, spreadsheets, or a billing tool that isn't a ZATCA-Qualified provider. Decision-maker is the owner or their part-time/external accountant.
- **Why they buy (in their words):** "I keep getting my invoices rejected and I don't understand why" / "I am stuck, please someone help" / "I don't want to change my whole system two weeks before the deadline, I just need ZATCA to accept my invoices." The fear is concrete: SAR 5K–50K per violation and amnesty ending.
- **Rough TAM reasoning:** Wave 24 alone brings "thousands" of new SMEs into scope; the SAR 375K+ population across all waves is in the **hundreds of thousands** of establishments (KSA has ~1M+ registered commercial establishments; the VAT-registered SME slice in this band is conservatively 200K–400K). Capture even 0.5–1% and you have 1,000–4,000 paying accounts.
- **Why now for them:** The deadline is *this quarter*. The amnesty for past errors ends 30 June 2026. After that, every rejection is a live penalty. This is the most acute, calendar-driven version of the pain that will ever exist.

## 5. Product sketch (MVP)

- **Drop-in invoice intake:** paste/upload an invoice (CSV, PDF, manual form) or POST it via a simple API from the existing POS — no books migration.
- **Live ZATCA rule check:** validate against the current UBL 2.1 XSD + KSA business rules (VAT category codes, ICV sequence, PIH chain, mandatory fields, totals/VAT math) *before* anything is sent to Fatoora.
- **Plain-language error fixes in Arabic + English:** every `BR-KSA-*` / `KSA-*` code translated into "here's what's wrong and here's the exact fix," not the raw rejection string.
- **One-click compliant output:** generate the signed XML, correct TLV-encoded QR (all 9 Phase-2 tags), and submit to Fatoora for clearance/reporting; return the cleared invoice + ZATCA UUID.
- **Chain & certificate watchdog:** track the ICV/PIH chain and warn before a CSID certificate expiry causes 401 rejections.
- **Rejection inbox:** for invoices that still bounce, a daily digest in plain language with the fix and a "resubmit" button.
- **Schema-update shield:** when ZATCA bumps the spec, the validator updates centrally — the SME does nothing.

## 6. AI angle — what's load-bearing

Two load-bearing roles. First, the **translation layer**: mapping cryptic, versioned ZATCA error codes and XSD validation failures into specific, correct, Arabic-language remediation a non-technical owner can act on — this is exactly what an LLM grounded on the published ruleset does well and what every incumbent does badly. Second, **field inference and auto-correction**: reading a messy invoice (PDF/CSV/photo of a paper bill) and inferring the correct VAT category, mandatory fields, and totals to produce valid XML — vision + extraction + rule-grounded reasoning. Strip the AI out and you're back to a developer reading a 200-page ZATCA PDF — which is precisely the status quo that's failing this cohort. The deterministic XML/QR generation itself is plain engineering; the AI is what makes it usable by someone who can't read `BR-KSA-31`.

## 7. Localization angle

This **is** the localization play — it can't exist as a generic global product. Wedges: (1) **Arabic-first** error remediation and UI, RTL, with English secondary; (2) **payment rails** — mada/STC Pay/SADAD, not Stripe-cards-only; (3) **local pricing** — a SAR 99–299/mo utility tier where a $49 global SaaS framing doesn't fit a SAR-375K shop, *and* eligibility for ZATCA's SAR 2,500/establishment reimbursement and Monsha'at Mezaya discount stacking makes the net cost near-zero, a killer sales line; (4) **regulatory quirk as moat** — the entire product is encoded ZATCA-specific knowledge; (5) **distribution** — Saudi accountant/bookkeeper networks and WhatsApp-first onboarding. The same engine re-points to UAE (FTA e-invoicing, 2026 phased rollout) and the broader GCC later, but KSA Wave 24 is the wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** SAR 149/mo (~$40) Core tier (single establishment, validation + clearance + fixes, capped invoice volume); SAR 349/mo (~$93) Pro (multi-establishment, API, higher volume, certificate watchdog); usage add-on above volume caps. ZATCA reimbursement (up to SAR 2,500) effectively refunds 12+ months for many buyers — lean on it hard in the pitch.
- **ACV:** ~SAR 2,400 (~$640) blended.
- **Math to $1M ARR:** ~$1M / $640 ≈ **1,560 paying establishments**. Against a "thousands of new SMEs per wave" inflow and 200K+ in-scope population, that's <1% penetration.
- **Math to $5M ARR:** ~7,800 establishments, or hold ~3,000 establishments and expand ACV via Pro/multi-branch + add the UAE FTA market in 2026–27. Requires retention past the deadline panic (see risk flags) and at least one channel scaling reliably.
- **Expansion path:** establishment count (chains/multi-branch), per-invoice volume, then geography (UAE FTA, GCC), then adjacent ZATCA services (VAT-return pre-fill from cleared invoices, buyer-side invoice validation).

## 9. Go-to-market wedge — first 100 customers

- **ZATCA Solution-Providers / accountant channel:** Saudi bookkeepers and small accounting firms each shepherd dozens of these SMEs through the deadline and are drowning in rejection tickets. Recruit 15–20 accountants with a revenue share + white-glove "send us your rejected clients" offer. Each can refer 10–30 establishments. This alone can clear the first 100.
- **Rejection-thread outreach:** developers and owners actively posting rejection errors on the ZATCA Fatoora developer forum, Saudi business Facebook/WhatsApp groups, and X — DM them the specific fix for their exact error code as a free teaser, then convert. (The "I am stuck please help" posts are a live lead list.)
- **Deadline ad blitz, mada-friendly:** tightly targeted Arabic search/social ads on "ZATCA invoice rejected," "فاتورة مرفوضة," "Wave 24 deadline" — high-intent, deadline-driven, cheap because it's a narrow keyword set incumbents under-target (they bid on "accounting software," not "invoice rejected").
- **Reimbursement hook:** lead every touch with "ZATCA refunds up to SAR 2,500 — this is effectively free for your first year," which collapses the buying decision.

## 10. Build complexity — justification

**Medium.** Everything is off-the-shelf: ZATCA publishes the XSD, the KSA business rules, the TLV QR spec, the digital-signature/CSID flow, and a public Sandbox + Simulation compliance API to test clearance. The validator and XML/QR/signature generation is deterministic engineering against documented specs; the AI remediation/extraction is standard LLM + vision on grounded rules. The genuine work is (a) getting the cryptographic chain (PIH/ICV, CSID onboarding, hash) exactly right, (b) handling the messy invoice-intake long tail, and (c) staying current as ZATCA versions the spec. A 2–3 person team ships a credible v1 in **~10–14 weeks**. Becoming a formally *ZATCA-Qualified* provider is a later upgrade, not a launch gate — v1 can operate as a validator/clearance helper that submits via the SME's own onboarded CSID.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | A compliance-assist tool; aligns with ZATCA's own goals. No approval needed to launch as a validator. |
| Ethical — no harm / dark patterns | ✅ | Reduces penalties and confusion; pure upside for the SME. |
| Market exists (evidence above) | ✅ | Deadline-driven mandate, thousands newly in scope, visible rejection pain, funded incumbents. |
| 1–5 person team can build this | ✅ | 2–3 people, ~10–14 weeks on published specs + sandbox. |
| Launchable with <$50K / ₹40L | ✅ | API integration + LLM costs; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire and calendar-bound: per-invoice rejection blocks delivery, SAR 5K–50K fines, amnesty ending 30 June 2026. Slightly below max only because the most acute pain is concentrated around deadlines. |
| Demand evidence | 15 | 12/15 | Multiple independent signals: documented rejection guides, verbatim "I am stuck" developer posts, thousands of SMEs in scope, thriving paid incumbents, 8.2B invoices (+64%). Strong but mostly inferred volume, not a measured conversion. |
| Build feasibility | 15 | 11/15 | All specs + sandbox public; deterministic core. Cryptographic chain and spec-versioning are the real work. ~10–14 weeks. |
| Distribution clarity | 15 | 12/15 | Accountant channel + live rejection-thread lead list + narrow high-intent keywords incumbents ignore. Conversion math is credible, not yet tested. |
| Revenue mechanics | 15 | 11/15 | Clear SAR pricing, ZATCA reimbursement de-risks the buy, <1% penetration hits $1M. Retention-past-deadline is the open question. |
| Time to first revenue | 10 | 8/10 | Deadline-driven urgency means pre-sellable now; first paid in ~4–8 weeks of a working validator. |
| Defensibility | 10 | 5/10 | Moat is encoded ZATCA knowledge + accountant relationships + staying current on spec; incumbents could bolt this on, and qualified-provider status is copyable. Execution + focus moat, not structural. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** Wave-24 SMEs will pay for a thin clearance layer rather than migrating to a full accounting platform. **How to test:** 20–30 interviews with in-scope owners + their accountants; offer pre-sale at SAR 149/mo and count deposits.
2. **Assumption:** Accountants/bookkeepers will channel their rejected clients for a revenue share. **How to test:** Sign 5 accountant partners to a written referral deal in 2 weeks; measure referrals per partner.
3. **Assumption:** Retention survives the deadline panic — they keep paying once the amnesty fear fades. **How to test:** Track month-2/month-3 churn on the first cohort; if churn >8%/mo, reposition around recurring value (VAT-return pre-fill, certificate watchdog).
4. **Assumption:** We can stay current as ZATCA versions the spec without a re-cert treadmill that breaks customers. **How to test:** Run the v1 against the ZATCA Simulation env across a spec bump and measure how fast we adapt.

### Risk flags

1. **Platform dependency:** Entirely dependent on ZATCA's API, spec, and onboarding flow; a major schema change or ZATCA shipping a free SME tool of its own would hurt. Mitigate by being the fastest to update and owning the accountant relationship.
2. **Market timing / churn cliff:** Demand spikes at each wave deadline and may sag between waves; the business must convert deadline panic into recurring value or it's a one-time-sale trap.
3. **Incumbent fast-follow:** Wafeq/Qoyod could add "keep your system, just validate" mode. Defense is speed, narrower pricing, and accountant lock-in before they react.
4. **Onboarding friction:** CSID/EGS onboarding is itself fiddly; if FatooraGuard can't make *that* step painless, the validator value is blunted.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder comfortable with crypto/XML + a ZATCA/VAT domain advisor; Arabic-fluent GTM partner
Time to revenue:        4–8 weeks (deadline-driven pre-sales possible immediately)
Capital to launch:      $8–15K (LLM + API + sandbox testing; no capex)
Top 3 assumptions to validate first:
  1. SMEs pay for a thin clearance layer vs. full migration — 20–30 owner/accountant interviews + pre-sale deposits
  2. Accountants channel rejected clients for rev-share — sign 5 partners in 2 weeks
  3. Retention survives past the deadline — track month-2/3 churn on cohort 1
Kill criteria:
  - Abandon if <5 of 30 interviewed in-scope SMEs will pre-pay (the migration objection wins)
  - Abandon if month-2 churn >8%/mo and no recurring-value hook lands (one-time-sale trap)
  - Abandon if ZATCA or an incumbent ships a free, equivalent SME validator before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a landing page + 60-second Arabic demo of "paste your rejected invoice → see exactly why ZATCA rejected it → get the fix." Pull 40 live rejection posts from the ZATCA forum / Saudi business groups as a lead list.
- **Day 3–4:** DM those 40 the specific fix for their exact error code (manual, free). Cold-call/DM 15 small Saudi accounting firms with the rev-share "send us your rejected clients" offer. Open pre-sale at SAR 149/mo.
- **Day 5:** Decide go / no-go on a **falsifiable** bar: **≥8 of 40 SMEs ask for the tool or pre-pay, AND ≥2 accountants commit in writing to refer.** Below that, the migration objection or the channel is weaker than the signal suggested — iterate or kill.
