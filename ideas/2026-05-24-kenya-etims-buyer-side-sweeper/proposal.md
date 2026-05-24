---
title: "KodiSweep — eTIMS expense sweeper for Kenyan SMEs"
slug: kenya-etims-buyer-side-sweeper
date: 2026-05-24
category: Compliance / Kenya SME
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Catches every supplier expense missing an eTIMS invoice and reverse-bills it before KRA wipes the deduction."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [WhatsApp-first, AI-agent, SMB, Compliance-driven, Africa, Mobile-first]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 11
  revenue: 10
  time: 8
  defensibility: 8
founderFit: [domain-expertise-required, operations-heavy]
featured: false
---

# KodiSweep — eTIMS expense sweeper for Kenyan SMEs

## 1. One-liner

Catches every supplier expense missing an eTIMS invoice and reverse-bills it before KRA wipes the deduction.

## 2. Trend signal — why now?

From **1 January 2026** KRA validates every Kenyan business's declared expenses against the eTIMS ledger. If a supplier didn't transmit a compliant electronic tax invoice (correct buyer PIN, valid CU number, QR code resolvable on the KRA portal), the expense is **automatically disallowed** — meaning the cash you spent is reclassified as taxable income. Penalties stack to **KES 1,000,000 or 200% of the tax due**, plus up to three years' imprisonment for sustained non-compliance.

The carnage is already visible: tax press is publishing weekly "your expense will become taxable income" explainers, finance teams report spending hours chasing suppliers and downloading KRA ledgers to reconcile, and Capital FM has run an op-ed warning that "eTIMS [is] threatened by system gaps, supplier challenges." iTax was quietly patched in mid-2026 to accept informal expenses *without* a vendor PIN — admission that the supplier-side rollout isn't keeping up. KRA itself launched a WhatsApp invoice service to drag the long tail of micro-traders into the net.

Existing accounting software in Kenya — Uhasibu, Zoho, Qwan, ZYNO Books — focuses on the **seller** side: helping a business *issue* eTIMS invoices to its own customers. Nobody is shipping a dedicated **buyer-side hygiene** tool that audits, chases, and reverse-invoices the supplier side. That's the gap.

Provenance:
  - Signal 1: "KRA's 2026 e-Invoice Crackdown — Your Expenses Without eTIMS Receipts Will Become Taxable Income" — https://sokodirectory.com/2025/11/kras-2026-e-invoice-crackdown-your-expenses-without-etims-receipts-will-become-taxable-income/ — Nov 2025
  - Signal 2: "eTIMS threatened by system gaps, supplier challenges - Expert" (Capital FM Business) — https://www.capitalfm.co.ke/business/2026/02/etims-threatened-by-system-gaps-supplier-challenges-expert/ — Feb 2026
  - Signal 3: "KRA Quietly Fixed a Major iTax Problem That Was Costing Businesses Valid Tax Deductions" — https://nairobiwire.com/2026/05/kra-itax-upgrade-informal-expenses-etims-invoices-csv-upload-june-2026-filing.html — May 2026
  Category: Regulatory arbitrage

## 3. The opportunity

Every Kenyan business that buys things from other businesses (so: every Kenyan business) just inherited a new operational duty — **policing its suppliers' tax invoicing**. ERPs and accounting tools were built for the seller workflow; the buyer-side workflow is currently somebody's spreadsheet at month-end plus a flurry of WhatsApps to suppliers begging for an eTIMS slip before filing day.

The 10× cut: a phone-first workflow that (a) intercepts every supplier receipt at the moment of payment (snap, forward, M-Pesa hook), (b) validates the eTIMS CU/QR against KRA in real time, (c) auto-drafts a **reverse invoice** through the KRA Buyer-Initiated Invoicing API when the supplier is under the KES 5M turnover threshold, and (d) generates a daily "chase list" of non-compliant suppliers with WhatsApp templates the owner can fire off in two taps. Heavyweight ERPs can't reach the SME wallet; existing Kenya-native accounting tools are sized to do bookkeeping, not buyer-side compliance enforcement. A focused tool wins on speed and price.

## 4. Target market

- **Primary customer:** Owners of VAT-registered Kenyan SMEs — turnover KES 8M–500M — in expense-heavy verticals: hardware shops, garages, agro-dealers, salons & spas, restaurants/cafés, building contractors, transporters, schools. Typically 1–25 staff, 1 owner-operator handling tax, no dedicated finance team.
- **Why they buy:** They've spent the money already; if KRA disallows the expense at filing time, they pay corporation tax on cash that's already left the business. One disallowed KES 500k construction invoice = KES 150k clawback + potential penalty. Real money, felt within 90 days of every quarterly filing.
- **Rough TAM reasoning:** KRA counts ~750,000 active VAT-registered taxpayers; even if only the top quintile (~150,000) is large enough to suffer real disallowance pain and small enough to lack ERP integration, that's a 150k-business serviceable market. East Africa expansion (Tanzania VFD, Uganda EFRIS, Rwanda EBM) plugs into the same playbook.
- **Why now for them:** January 2026 was Day Zero. The first quarter where disallowances bite shows up at the June 2026 monthly VAT return and the 2026/27 income-tax filing. Owners are about to feel the burn — not theoretically, but in the actual amount KRA bills them.

## 5. Product sketch (MVP)

- **Snap-and-validate:** Photograph or forward a supplier receipt (paper, PDF, WhatsApp screenshot). OCR pulls supplier PIN, CU number, QR URL. Validates against KRA in <10 seconds. Returns ✅ valid / ⚠️ missing buyer PIN / ❌ not transmitted.
- **M-Pesa expense pull:** Connect the business M-Pesa Paybill/Till. Every outgoing payment lands in an "awaiting invoice" queue. Each entry shows the supplier name + amount + age; sweeps unattended ones into the chase list.
- **One-tap reverse invoice:** When supplier qualifies (under KES 5M turnover, or simply not transmitting), draft a Buyer-Initiated Invoice via KRA's eCitizen API; nudge supplier for consent via USSD/WhatsApp template; mark the expense protected.
- **WhatsApp supplier chaser:** Templated nudges ("Habari [Supplier], pls share eTIMS invoice for KES [X] paid on [date], else we cannot pay further invoices"). Fires from the owner's WhatsApp; tracks who's replied.
- **Monthly KRA ledger reconciliation:** Pulls the buyer's KRA purchases ledger, diffs against KodiSweep's expense log, surfaces "in your books, not at KRA" and vice versa. One screen, ready by the 10th of each month.
- **Filing-readiness report:** A printable "no-disallowance" attestation the owner hands to their tax agent at filing. List of every expense, its eTIMS status, and which were reverse-invoiced.
- **Supplier scorecard:** Per-supplier compliance rate. Auto-suggests dropping or renegotiating with the worst offenders.

## 6. AI angle — what's load-bearing

Three load-bearing AI jobs:

1. **Receipt parsing** — varied supplier formats, mixed Swahili/English, smudged thermal prints, M-Pesa SMS snippets. A vision LLM normalises them into a structured expense record with supplier PIN and CU number extracted reliably enough to drive an automated KRA call. Generic OCR won't cut it.
2. **Compliance reasoning** — given a receipt and the supplier's filed turnover band, decide: (a) does this need reverse invoicing? (b) is the supplier exempt? (c) is the CU number stale because the supplier was de-registered? The rule surface is wide, KRA's circulars change quarterly. Without LLM-grounded reasoning every change becomes engineering work.
3. **WhatsApp chase drafting** — culturally calibrated, polite-but-firm Swahili/Sheng/English nudges tuned to the specific supplier relationship (one-shot vendor vs. long-standing partner). Templates alone get ignored or burn relationships.

Remove the AI and you're left with a glorified KRA portal shortcut, which Uhasibu already gives away.

## 7. Localization angle (if any)

This is a Kenya-first product by design — KRA-specific APIs, KES pricing, M-Pesa hooks, Swahili UI, WhatsApp distribution. The compliance regime *is* the moat: a tool that masters KRA's quarterly circulars, the Buyer-Initiated Invoicing flow, the iTax CSV-upload feature, and the supplier consent USSD codes cannot be cloned by a generic global SaaS.

The same playbook ports cleanly: **Tanzania VFD** (Virtual Fiscal Devices, mandated for VAT-registered traders), **Uganda EFRIS** (Electronic Fiscal Receipting & Invoicing Solution, 2024 rollout), **Rwanda EBM** (Electronic Billing Machine). All three are buyer-side-rejecting regimes with the same supplier-chase pain. Year-2 expansion plan, not Day-1 distraction.

Pricing tier: **KES 1,500/mo (~$11) Starter / KES 4,500/mo (~$33) Pro / KES 12,000/mo (~$90) Multi-branch**. Sits above Uhasibu's KES 1,000/mo and well below QuickBooks' KES 3,000–8,000 — credible price for a category Kenyan SMEs already pay for.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** KES 1,500/mo (~$11) Starter (≤50 supplier receipts/mo, single user), KES 4,500/mo (~$33) Pro (unlimited receipts, WhatsApp chaser, KRA ledger sync), KES 12,000/mo (~$90) Multi-branch (per location).
- **ACV:** Blended ~KES 36,000/yr (~$275) — Pro tier is the gravity point because the WhatsApp chaser is the killer feature.
- **Rough math to $1M ARR:** ~3,600 Pro-tier customers × $275/yr = $990K. Kenya alone, ~2.4% of the addressable 150,000 VAT-registered SMEs.
- **Rough math to $5M ARR:** 18,000 customers across Kenya + Uganda + Tanzania + Rwanda, plus a KES 25,000/mo "Agent" tier for tax consultants managing 20+ SME books. Reachable in 24–30 months.
- **Expansion path:** (a) per-branch seats for multi-location SMEs, (b) Agent tier with bulk dashboards for tax consultancies — already a strong channel because every SME above KES 5M turnover uses one, (c) value-add: penalty-defence service if KRA still disallows an expense KodiSweep marked compliant (paid retainer, "compliance insurance" wrapper).

## 9. Go-to-market wedge — first 100 customers

Concrete plays in priority order:

- **Tax consultants as resellers (the wedge).** Kenya has ~3,000 registered tax practitioners running SME books, each painfully aware of the eTIMS reconciliation burden because *they* are the ones currently doing it manually. Cold-call the top 200 (ICPAK directory + KRA-listed agents). Offer them a free Agent dashboard and 30% revenue share for every SME they onboard. Realistic conversion: 25 agents sign on, each brings 4 paying SME books = 100 customers in 90 days.
- **WhatsApp + Facebook Group raid.** "Kenya Small Business Owners" and "VAT Returns Kenya Community" Facebook groups (50–100k members combined) light up at every KRA circular. Drop authoritative "what changes for buyers" explainers, link to a free 24-hour ledger audit. Conversion target: 1% of engagers to paid trial.
- **County Chamber of Commerce partnerships.** Nairobi, Mombasa, Nakuru, Kisumu chambers run monthly compliance clinics. Sponsor 3 clinics in Q3 2026; pitch the eTIMS expense audit at every one. 30 leads per clinic, 5–10% close.
- **eTIMS-rejection ambulance chasing.** When a buyer rejects a supplier's invoice (very public — corporate procurement notices on LinkedIn), DM the supplier with a "this happened to you because of X — here's how KodiSweep prevents the next one for your buyers." Low volume, high relevance.
- **Pay-per-disallowance demo:** Run a free audit on a prospect's last 3 months of M-Pesa Paybill outflows; show them in numbers how much corporation tax they're about to lose. Hard to walk away from "you're about to overpay KES 240,000."

## 10. Build complexity — justification

**Medium.** The OCR + LLM pipeline is off-the-shelf (GPT-4 vision, Anthropic, or a local Kiswahili-tuned model). KRA exposes documented APIs for validation, system-to-system integration, and Buyer-Initiated Invoicing through the eCitizen platform — integration work, not research. M-Pesa Daraja API is mature. WhatsApp Business API is standard. The hard parts are (a) reliably parsing the long tail of supplier receipt formats, (b) keeping up with KRA circulars that shift the rules quarterly, and (c) the reverse-invoicing UX, which has to be near-zero-friction or owners won't use it. Realistic v1 for a 2-person team: 14–16 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | KRA has explicitly published Buyer-Initiated Invoicing as a sanctioned flow; APIs are public. |
| Ethical — no harm / dark patterns | ✅ | Tool helps SMEs comply, not evade. Reverse invoicing is a KRA-sanctioned feature. |
| Market exists (evidence above) | ✅ | Mandate live Jan 2026; press, KRA circulars, accountant op-eds all converging. |
| 1–5 person team can build this | ✅ | Off-the-shelf OCR + LLM + KRA APIs + M-Pesa + WhatsApp. No novel infra. |
| Launchable with <$50K / ₹40L | ✅ | <$30K for 16-week build, plus modest marketing for the tax-consultant channel. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | KRA disallowance hits real cash flow; first quarterly bite arrives at the very moment KodiSweep launches. Hair-on-fire for SMEs with significant supplier spend. |
| Demand evidence | 15 | 12/15 | Hard regulatory mandate + active press + KRA's own iTax patch + supplier-chase pain widely discussed. Lacking a single dominant Reddit/X complaint thread because Kenyan SME chatter happens on WhatsApp/Facebook — hence one point deducted. |
| Build feasibility | 15 | 11/15 | All APIs documented and public; the receipt-parsing edge cases and rapidly shifting KRA rule surface mean it's not a 6-week solo build. 14–16 weeks for a pair. |
| Distribution clarity | 15 | 11/15 | Tax consultant reseller channel is named, sized, and reachable. The Facebook-group/Chamber channels are concrete but unproven for this exact audience. |
| Revenue mechanics | 15 | 10/15 | Pricing benchmarks line up with category norms (Uhasibu, Qwan, Zoho). Path to $1M ARR is 3,600 paying SMEs in a market of ~150k — credible but requires the agent channel to work. |
| Time to first revenue | 10 | 8/10 | Mandate is live; SMEs are panicking now. A working OCR + KRA-validation MVP can pre-sell in 8–10 weeks. |
| Defensibility | 10 | 8/10 | Compliance-regime mastery + consultant-channel lock-in + supplier-history data accumulating per customer = soft moat that compounds over 12 months. Hard to copy at month 6, very hard at month 18. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `operations-heavy`

Best founder profile: a Kenyan tax-tech operator (ex-Cellulant, ex-Pesapal, ex-Uhasibu, or ex-Big4 tax practice) with KRA-circular fluency and existing relationships in the tax-agent community. A purely technical founder without local tax-policy reflex will lose 3 months to false starts on circulars.

### Key assumptions to validate (3–5)

1. **Assumption:** Mid-sized Kenyan SMEs (KES 8M–500M turnover) will pay KES 3k–5k/mo for buyer-side expense hygiene, on top of whatever they already pay for accounting software. **How to test:** Interview 30 owners across hardware, agro-dealer, garage, café segments. Show a Loom of the M-Pesa-to-reverse-invoice flow. Pre-sell 10 annual subscriptions at half-price for sign-up before Aug 2026 quarterly filing.
2. **Assumption:** Tax consultants will resell the Agent tier rather than build a spreadsheet workaround for their own clients. **How to test:** 20 cold calls to ICPAK-listed practitioners. Offer 30% rev share + free dashboard. Track sign-ups in 14 days.
3. **Assumption:** The KRA Buyer-Initiated Invoicing API is reliable enough for daily production use (vs. eCitizen portal only). **How to test:** Apply for system-to-system integration credentials; reverse-invoice 50 real-world transactions over 30 days; log failure rate. >5% failure means UX needs a manual fallback path.
4. **Assumption:** OCR accuracy on Kenyan thermal-printed/handwritten supplier receipts is ≥92% on PIN + CU extraction. **How to test:** Collect 500 real supplier receipts from 10 SMEs; run through GPT-4 vision + open-source alternatives; measure field-level accuracy.
5. **Assumption:** The June 2026 iTax patch (allowing informal-expense filing without supplier PIN) does NOT collapse the demand by giving SMEs an easy out. **How to test:** Read circular fine print + interview 5 tax consultants on real-world enforcement; if the patch effectively legalises non-eTIMS expenses, the urgency drops by 50%.

### Risk flags

1. **Regulatory risk:** KRA could (a) tighten the informal-expense workaround patch, raising demand — fine, or (b) materially relax the disallowance regime under SME-lobby pressure — kills demand. The May 2026 iTax patch is the warning shot in the second direction.
2. **Platform dependency:** Heavy reliance on KRA APIs (validation + Buyer-Initiated Invoicing) and Safaricom M-Pesa Daraja. Either party throttling, breaking, or pricing access changes the unit economics.
3. **Market timing — adjacent vendor encroachment:** Uhasibu, Zoho, Qwan are one product release away from bolting a "buyer-side" module onto existing accounting. 12-month head start required to build customer + consultant moat before they wake up.
4. **Willingness-to-pay ceiling:** Kenyan SME software pricing is brutally compressed. Going north of KES 5,000/mo without enterprise features is risky; the path to $5M ARR therefore depends on the agent tier and multi-country expansion, both of which carry their own execution risk.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Kenyan tax-tech operator with KRA fluency + 1 technical co-founder; ICPAK-network relationships a strong plus
Time to revenue:        8–12 weeks (pre-sales possible immediately given mandate is live)
Capital to launch:      $25,000–$35,000 (KES 3.5M–5M)
Top 3 assumptions to validate first:
  1. Mid-sized SMEs (KES 8M–500M turnover) will pay KES 3,000–5,000/mo for buyer-side eTIMS hygiene — test with 30 owner interviews + 10 pre-sales
  2. Tax consultants will actively resell rather than build their own spreadsheet workaround — test with 20 ICPAK cold calls + Agent tier offer
  3. KRA Buyer-Initiated Invoicing API is production-reliable — test with 50 real reverse-invoices over 30 days
Kill criteria:
  - Abandon if <5 of first 30 owner interviews show willingness to pay KES 3,000+/mo before the August 2026 quarterly filing
  - Abandon if KRA materially relaxes the disallowance regime in any 2026 finance act amendment
  - Abandon if BIRA API failure rate >15% over a 30-day reverse-invoice batch test
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull a list of 50 ICPAK-listed tax consultants and 30 owner-operators across 4 verticals (hardware, agro-dealer, garage, café). Build a 90-second Loom showing the M-Pesa → snap → reverse-invoice flow as a mockup, not code. Apply for KRA system-to-system integration credentials in parallel.
- **Day 3–4:** Run 15 owner interviews + 10 consultant calls. Ask the same five questions: (a) how much KRA disallowance pain have you seen in Q1 2026? (b) who currently chases your suppliers? (c) would you pre-pay KES 18,000 for an annual subscription right now? (d) consultants: would you resell at 30% rev share? (e) what's missing from the mockup?
- **Day 5:** Decide go/no-go on the threshold: ≥5 pre-sales captured + ≥3 consultants verbally committed to reseller pilot. Anything less = either the pain isn't sharp enough (kill) or the channel is wrong (re-test consumer-direct in week 2).

The validation produces a hard, falsifiable outcome — money on the table or not — within 7 days.
