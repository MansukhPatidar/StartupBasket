---
title: PinHunt — WhatsApp eTIMS reverse-invoicer for Kenyan SMBs
slug: pinhunt-etims-reverse-invoicer
date: 2026-05-03
category: Compliance SaaS / Kenya SMBs (Buyers from Informal Suppliers)
complexity: Medium
score: 79
verdict: GO
confidence: Medium
oneLiner: WhatsApp tool that turns Kenyan SMBs' M-Pesa statements into KRA-compliant buyer-initiated eTIMS invoices.
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [WhatsApp-first, M-Pesa-aware, Kenya, Africa, AI-agent, Compliance-driven, SMB, Buyer-side]
axes:
  problem: 18
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# PinHunt — Stop Losing Your Deductions to KRA's eTIMS Trap

## 1. One-liner

WhatsApp tool that turns Kenyan SMBs' M-Pesa statements into KRA-compliant buyer-initiated eTIMS invoices.

## 2. Trend signal — why now?

Kenya flipped a switch on January 1, 2026. KRA now validates **every line** of every income tax return against eTIMS data. If an expense doesn't have a compliant eTIMS invoice tagged with your PIN, KRA treats it as profit and taxes it. The KRA's own X notice (Nov 2025) spells it out: "all declared income and expenses must be supported by a valid electronic tax invoice, correctly transmitted with the buyer's PIN."

The pain is concentrated where Kenyan SMBs source goods — **informal suppliers**: jua kali artisans, farmers, market wholesalers (Eastleigh, Gikomba), transporters without PINs, individual contractors. These suppliers either can't or won't issue eTIMS invoices. Buyers eat the loss.

KRA's response was to publish **Buyer-Initiated Invoicing Guidelines** (March 25, 2025) and an API on GavaConnect that lets the buyer self-issue an eTIMS invoice on the supplier's behalf. eTIMS Lite (USSD *222#) was opened to non-VAT taxpayers. The plumbing is in place — but the workflow is brutal: log into eCitizen, manually key each transaction one-by-one, hunt down each supplier's National ID, name, mobile, and validate. A small trader with 200 supplier transactions a quarter just gives up.

Compounding it: the KSh 5M small-business turnover exemption that protected sub-scale buyers was scrapped — *every* business with sub-VAT-threshold suppliers now needs reverse invoicing.

April 2026: KRA enforcement against Eastleigh wholesalers begins. May 1, 2026: deadline for traders to be compliant. Filing season closes June 30, 2026. The fire is lit.

```
Provenance:
  - Signal 1 (demand): KRA validating every expense vs eTIMS from Jan 1 2026; non-eTIMS expenses become taxable profit. KRA crackdown on Eastleigh traders, May 1 deadline. — https://nairobiwire.com/2026/04/kra-etims-crackdown-eastleigh-traders-deadline-compliance.html — 2026-04
  - Signal 2 (feasibility): KRA published Buyer-Initiated Invoicing Guidelines (March 25, 2025) + GavaConnect API + eTIMS Lite USSD; reverse invoicing is now legal & API-accessible for non-VAT suppliers. — https://bowmanslaw.com/insights/kenya-the-revenue-authority-publishes-the-reverse-invoicing-guidelines/ — 2025
  - Signal 3 (economic): Kenya outsourced SME bookkeeping costs Ksh 30K-100K/year; ICPAK floor pricing protects incumbents; Cleartax KE, ProTax, DigiTax actively monetizing eTIMS niche. KRA flagged Sh30B revenue leak from missing invoices. — https://thesharpdaily.com/kra-etims-georeferencing-fraud-crackdown-sh30-billion/ — 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

KRA's eTIMS ecosystem is bristling with **seller-side** software — POS plugins, ERP integrators, OSCU/VSCU vendors (ProTax, Symatech, Greytrix, Tally). They all answer the question: *I'm a seller; how do I issue an invoice to KRA?*

Almost no one has wrapped the **buyer-side** problem: *I bought from someone who can't issue an invoice; how do I avoid losing the deduction?* The KRA eCitizen reverse-invoicing portal exists, but it's web-only, manual, and keyed transaction-by-transaction. Accountancy firms do it as a billable add-on at Ksh 50-100K/year.

PinHunt is the focused, productized buyer-side tool. WhatsApp-first because WhatsApp is the de-facto OS for Kenyan SMBs. M-Pesa-statement-aware because M-Pesa till/pochi is where 80%+ of supplier payments happen. SMS-based supplier-PIN chase because most suppliers have no email. The wedge: turn an unstructured pile of pochi payments + paper receipts + supplier names into a clean iTax purchase ledger before June 30 deadline.

Disrupting whom: KRA's free eCitizen portal (UX is hostile to batches), the Ksh 50K/yr accountancy outsourcing (overkill for the specific pain), and Excel-spreadsheet-and-prayer.

## 4. Target market

- **Primary customer:** Kenyan SMBs with annual turnover **Ksh 1M–50M (~$7K-$385K)**, buying from informal/non-VAT suppliers monthly. Sweet spot: mid-tier restaurants, butcheries, hardware shops, salons-with-products, agribusiness aggregators, construction subcontractors, transporters with informal fuel/repair vendors, retail shops in Eastleigh/Gikomba/Nyamakima sourcing from informal wholesalers.
- **Why they buy:** "If I can't get eTIMS receipts from my farm suppliers, KRA taxes my entire purchase as profit. I'd lose more in disallowed deductions than I'd ever pay PinHunt." (Real example from Caine Wanjau, DigiTax: *"transactions with non-compliant suppliers carry increased tax exposure."*)
- **TAM reasoning:** Kenya has ~7.4M MSMEs, ~1.5M registered. KRA targets ~95% of large/medium already onboarded; focus is now on micro/small. ~300K-500K SMBs in the Ksh 1M-50M turnover band buy meaningfully from informal suppliers. Plausible serviceable market: 30-50K paying customers in 36 months.
- **Why now for them:** Q1 2026 was the first filing cycle under expense-validation rules. Returns rejected even after taxes paid. Eastleigh crackdown made it tangible. They now actively google "how to claim expense without eTIMS invoice."

## 5. Product sketch (MVP)

- **WhatsApp ingestion:** Forward your M-Pesa pochi/till statement (PDF) and a supplier list (typed or photo of address book) to a WhatsApp number. AI parses transactions, matches to supplier names.
- **Reverse-invoice generator:** For each non-VAT supplier transaction, auto-fills the KRA buyer-initiated invoice (ID, name, phone, description, qty, price) and submits via GavaConnect API. Returns the eTIMS invoice number to your WhatsApp.
- **PIN-hunt SMS bot:** For suppliers missing a National ID/Phone, sends a polite SMS in Swahili/English asking "Halo, I need your ID number to settle Ksh X with KRA. Reply with your ID." Closes the loop without a phone call.
- **Receipt-photo OCR:** Photograph a paper supplier receipt; AI extracts amount, date, vendor; flags it for reverse invoicing.
- **iTax purchase-ledger reconciliation:** Pulls your monthly eTIMS Purchase Report, diffs vs. our ledger, flags missing/duplicate invoices, exports a filing-ready CSV.
- **Audit trail vault:** Every reverse invoice, every SMS chase, every original receipt — kept 5+ years for KRA audits.
- **Filing-season alerts:** "It's June 10. You have 47 unreversed M-Pesa expenses. At a 30% rate you'll lose Ksh 142,500. Click to fix."

## 6. AI angle — what's load-bearing

Three places where AI is doing real work, not decorating:

1. **Statement parsing** — M-Pesa till/pochi PDFs are inconsistent, half-text half-table; vendor names are short-form ("KIM ELEC", "MAMA MBOGA"). LLM + entity-resolution links transactions to a normalized supplier identity. A regex parser would fail on 30%+ of rows.
2. **Receipt OCR + line-item extraction** — Kenyan paper receipts are handwritten, faded, in mixed Swahili/English. Vision models (Gemini 2.5 / GPT-4o vision) handle the noise.
3. **Supplier-PIN chase agent** — The SMS conversation is short but adversarial: "ID nayo wapi?" "Acha bro, why do you need it?" "I just need it to pay you and clear KRA." A small fine-tuned conversational model handles ~80% of replies without human intervention; humans escalate only on the long tail.

Remove the AI and you're back to manual eCitizen entry. The AI is what makes 200 transactions/quarter doable in 30 minutes vs. 8 hours.

## 7. Localization angle

This is *only* a Kenya play. Every load-bearing element is Kenyan:

- KRA's specific reverse-invoicing API (GavaConnect)
- M-Pesa pochi/till statement format
- Kenya National ID number conventions
- Swahili/English code-switching for SMS
- Pricing in Ksh — Ksh 2,000-7,000/mo lands; $50/mo doesn't
- Distribution via Safaricom Spark, ICPAK accountants, Eastleigh/Gikomba trader associations

Adjacent geos: Nigeria FIRS rolls 2027-2028 with similar structure (FIRSMBS, mandatory invoice, supplier-PIN linking). Tanzania, Uganda follow similar OECD/IMF-pushed e-invoicing patterns within 2-3 years. The Kenya playbook is the wedge into a 5-country roadmap.

## 8. Business model — path to $1M–$5M ARR

- **Pricing tiers:**
  - Starter: **Ksh 2,000/mo (~$15)** — 50 reverse invoices/mo, WhatsApp bot, OCR
  - Pro: **Ksh 5,000/mo (~$38)** — 250 invoices, PIN-hunt agent, iTax reconciliation
  - Business: **Ksh 12,000/mo (~$92)** — unlimited, 2 user seats, accountant-share, priority support
  - Add-on: **Ksh 1,500/quarter** filing-season audit-prep package
- **ACV target:** ~$420/year (Ksh ~55K). Modest by US SaaS, big for Kenyan SMB software.
- **$1M ARR math:** 2,400 paying customers × $420 = $1.0M. Roughly 0.5% of the 500K-buyer band.
- **$5M ARR math:** 12,000 paying customers across Kenya + 1 follow-on geo (Nigeria) = $5M. Achievable in 24-30 months if Kenya hits 6,000-8,000.
- **Expansion path:** Per-user seats for in-house accountants → annual filing-prep packages → connect-to-bank-statement (Equity, KCB) for non-M-Pesa expenses → cross-sell into Nigeria FIRS-MBS (2027 SMB rollout).

## 9. Go-to-market wedge — first 100 customers

1. **Eastleigh/Gikomba/Nyamakima trader associations.** These markets are where KRA's enforcement is most visible right now. Partner with the local market association leader; do a free Saturday workshop ("How to not lose your expenses to KRA"); convert 30-50% of attendees on the spot. Estimate: 4 markets × 25 customers = 100.
2. **ICPAK accountant referral channel.** Kenya has 27,000+ ICPAK-registered accountants. Many already do reverse invoicing manually for clients at high markup. Offer them a 20% recurring revenue share — they refer their pain-in-the-ass small clients, we handle them, they keep the high-margin big ones. Top-50 accountants referring 2 clients each = 100.
3. **WhatsApp Group seeding.** Join 50 Kenya SME WhatsApp groups (KEPSA, KAM, county-level chamber groups, KEBS sector groups). When someone complains about KRA expense rejection — and they do, weekly — DM with a personalized 60-second loom of their exact situation. Aim 10% conversion on 200 DMs.
4. **Twitter/X reply-bot to public KRA complaints.** Search "KRA eTIMS rejected" — there's a steady drumbeat. Manual replies offering to fix it free for the first 50 to validate.
5. **Safaricom Spark Accelerator / KCB Foundation.** Apply once we have 200 paying customers; their distribution into M-Pesa-merchant rails could 5x us.

## 10. Build complexity — justification

**Medium.** GavaConnect API integration (Buyer-Initiated Invoicing endpoint) is documented but bureaucratic — third-party vendor onboarding takes 4-6 weeks. WhatsApp Cloud API + Meta business verification = 2-4 weeks. M-Pesa statement parser + receipt OCR = off-the-shelf vision models. Supplier-PIN SMS agent = standard LLM workflow. Audit trail + iTax purchase-report reconciliation = standard backend. **MVP shippable in 12-16 weeks** by a team of 2 (one full-stack/AI, one Kenya-based ops/sales-engineering). The bureaucratic onboarding is the gating item, not the code.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | KRA explicitly authorizes buyer-initiated invoicing for sub-VAT suppliers; reverse invoicing is the legal mechanism. |
| Ethical — no harm / dark patterns | ✅ | Helps SMBs avoid unfair tax-on-phantom-profit; suppliers get on-record (with consent). |
| Market exists (evidence above) | ✅ | KRA crackdown live; Eastleigh deadlines documented; Sh30B revenue leak being chased. |
| 1–5 person team can build this | ✅ | 2-person team in 12-16 weeks. KRA bureaucracy is the slow path, not engineering. |
| Launchable with <$50K / ₹40L | ✅ | ~$15-25K covers KRA vendor onboarding, WhatsApp Cloud API, Meta verification, Kenya entity, 6-month runway for 2 founders living lean. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire. Disallowed expense = direct cash loss this filing cycle. SMB owners losing 10-30% of margin to phantom profit tax. |
| Demand evidence | 15 | 13/15 | Multiple expert quotes, KRA's own X account, Eastleigh crackdown news, Sh30B revenue-leak figure, Cleartax/DigiTax monetizing the niche. Light on direct social-media trader complaints (Reddit thin in Kenya). |
| Build feasibility | 15 | 11/15 | API exists but onboarding is slow; WhatsApp Cloud API is mature; M-Pesa statement parsing has no API (PDF-only), adds messy work; vendor approval = 4-6 weeks of paperwork. |
| Distribution clarity | 15 | 12/15 | Three named channels (markets, ICPAK, WhatsApp groups) with realistic conversion math. Risk: market-association partnerships need on-the-ground founder presence. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against accountancy outsourcing (well below); $420 ACV reasonable; path to $1M needs 2,400 customers. Risk: SMBs squeezed for cash, churn could be high. |
| Time to first revenue | 10 | 8/10 | Pre-sold workshops can close cash in week 1 of MVP. KRA vendor approval gates GA. Realistic: paid pilots in 4-8 weeks of WhatsApp MVP, full GA in 16 weeks. |
| Defensibility | 10 | 6/10 | Workflow lock-in (purchase-ledger history, audit-trail vault), KRA vendor status (4-6wk barrier for clones), accountant-channel exclusivity. Not a deep moat — a 6-month head start. |
| **Total** | **100** | **79/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This is not a remote-only build. You need a Kenya-based co-founder or strong local advisor who knows ICPAK, KRA vendor onboarding paperwork, and how to walk into Eastleigh on a Saturday. Solo overseas-only founder = high failure risk.

### Key assumptions to validate (3–5)

1. **Assumption:** SMBs in the Ksh 1M-50M band actually have 50+ non-eTIMS supplier transactions per month and feel the pain acutely. **How to test:** 30 in-person interviews in Eastleigh + Nyamakima + Kariobangi over 1 week; ask to see last month's M-Pesa statement; count non-VAT supplier rows.
2. **Assumption:** They will pay Ksh 5,000/mo (vs. their current Ksh 0 or Ksh 30K/yr accountant). **How to test:** Pre-sell 20 paid pilots at Ksh 5K/mo with a money-back guarantee; if <10 pre-sell from 30 demos, pricing is wrong.
3. **Assumption:** KRA's vendor approval for buyer-initiated invoicing API access is achievable for a 2-person startup in 4-8 weeks. **How to test:** Submit application week 1; track timeline; have backup of doing reverse-invoices via eCitizen browser automation if API path stalls.
4. **Assumption:** Suppliers will actually reply to SMS PIN-chase requests at >50% rate. **How to test:** A/B test 3 SMS scripts on 200 real Kenyan numbers via a friendly partner SMB; measure reply rate and willingness to share ID.
5. **Assumption:** Filing-season urgency (Q1 + June) creates a seasonal traffic spike that converts. **How to test:** Track inbound leads in May-June 2026; if ratio of free signups to paid > 20:1, repricing/repackaging needed.

### Risk flags

1. **Regulatory risk:** KRA could change buyer-initiated invoicing rules, narrow the eligibility, or revoke vendor access. Mitigation: stay close to KRA stakeholder forums; build dual paths (API + browser-automation fallback).
2. **Platform dependency (WhatsApp + Meta):** WhatsApp Business API rate limits + Meta verification could throttle a fast-growth scenario. Mitigation: SMS fallback (Africa's Talking), USSD entry path via *222# integration.
3. **Channel risk (Eastleigh enforcement):** If KRA softens enforcement (politically common in Kenya), urgency drops. Mitigation: anchor on the legal-deduction angle ("save 30% tax") rather than fear of audit.
4. **Competitive risk:** A Cleartax or DigiTax adds a buyer-side tier. Mitigation: 6-month head-start on workflow + accountant referral exclusivity in the first 12 months.
5. **M-Pesa data access risk:** Safaricom could restrict scraping/downloading of M-Pesa statements or push their own native solution. Mitigation: partner directly with Safaricom Spark; pursue Daraja API where applicable.

## 14. Structured verdict

```
Score:                  79/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Kenya-based 2-person team — one full-stack/AI engineer, one ex-accountant or ex-KRA staffer; or a Nairobi-experienced founder with Kenya ops co-founder
Time to revenue:        6-10 weeks from MVP-on-WhatsApp; full GA after KRA vendor approval (~16 weeks)
Capital to launch:      $15-25K (Ksh 2-3.5M) — KRA vendor compliance, WhatsApp Cloud API, Meta verification, 6-month lean runway
Top 3 assumptions to validate first:
  1. SMB pain is acute and frequent → 30 in-person interviews in 3 markets
  2. Willingness to pay Ksh 5K/mo → pre-sell 20 paid pilots from 30 demos
  3. KRA vendor approval timeline ≤8 weeks → submit week 1, track
Kill criteria:
  - Abandon if <10 of 30 interviewed SMBs say they'd pay Ksh 3K+/mo
  - Abandon if KRA vendor approval not granted by week 12 AND browser-automation fallback gets blocked
  - Abandon if a well-funded incumbent (Cleartax KE, ProTax, Heru-style) launches an identical WhatsApp+M-Pesa product before MVP
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Land in Nairobi or activate Kenya-based partner. Build target list of 30 SMBs in Eastleigh, Gikomba, Nyamakima from Google Maps + ICPAK referrals.
- **Day 2:** Conduct 10 in-person interviews. Ask: How many supplier payments last month had no eTIMS invoice? How much tax did you lose to disallowed expenses last cycle? Would Ksh 5K/mo be worth it?
- **Day 3:** 10 more interviews. Show a 2-minute mockup video on phone — WhatsApp screen with "forward your M-Pesa statement" → "X invoices issued, Y supplier PINs missing, here's the chase list."
- **Day 4:** 10 more interviews + 5 ICPAK accountant calls (would you refer for 20% rev share?).
- **Day 5:** Decide go/no-go on:
  - **Go** if ≥15/30 SMBs commit to a paid pilot at Ksh 3K+/mo, AND ≥3/5 accountants commit to refer.
  - **No-go** if pain real but willingness-to-pay <50%, OR if KRA paperwork looks structurally blocked.

The result is falsifiable: 15 paid pilots committed in writing or it's not real.
