---
title: "ReceiptRun — e-invoice dispatcher for Philippine sellers"
slug: ph-marketplace-einvoice-eis
date: 2026-06-18
category: Compliance / Philippines E-commerce Sellers (Shopee, Lazada, TikTok Shop)
complexity: Medium
score: 71
verdict: GO
confidence: Medium
oneLiner: "Files a BIR-signed e-invoice for every Shopee, Lazada and TikTok order inside the 3-day window."
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [Compliance-driven, SMB, AI-agent, E-commerce, Marketplace-native]
axes:
  problem: 16
  demand: 11
  build: 10
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ReceiptRun — e-invoice dispatcher for Philippine marketplace sellers

## 1. One-liner

Files a BIR-signed e-invoice for every Shopee, Lazada and TikTok order inside the 3-day window.

## 2. Trend signal — why now?

The Philippine Bureau of Internal Revenue's Electronic Invoicing System (EIS) hit Stage 1 mandatory status on **31 March 2026**, with the hard compliance deadline pushed to **31 December 2026**. E-commerce / online sellers are *explicitly named* in Stage 1 alongside large taxpayers — not an afterthought, a primary target. Every covered sale now requires a **structured JSON invoice, signed with a JWS RS256 digital signature, issued from BIR-accredited software, and transmitted to the EIS within three calendar days.** Penalty: up to **₱50,000 per violation** (RR 11-2025).

Here's the part that turns a compliance chore into a real operational crisis: **the marketplaces refuse to do it.** Shopee removed the invoice-printing interface from Seller Center and stated plainly it "does not generate or issue sales invoices to buyers on behalf of sellers." So a seller doing 800 orders a month across three platforms is personally on the hook for 800 signed JSON payloads a month, each inside a 72-hour clock. The only sanctioned manual path — keying each order into the BIR EIS portal by hand — is, per one accredited reseller's own write-up, "extremely time-intensive."

The existing fix is ERP. Odoo (~₱1,400–2,000/user/mo), Autocount, QuickBooks PH, Juan (₱2,000–10,000/mo), and enterprise filers like Sovos / EDICOM / Taxilla / Comarch — all built for a company with a finance team, not a solo seller running a phone and a spreadsheet.

Provenance:
  - Signal 1 (demand): Marketplaces don't issue invoices; sellers must self-issue per order, manual BIR-portal entry is "extremely time-intensive" — https://www.bigseller.com/blog/articleDetails/4285/how-can-shopee-philippines-sellers-print-and-upload-einvoice.htm — 2026-06
  - Signal 2 (feasibility): EIS spec is a fixed, public contract — JSON + JWS RS256 + API transmit within 3 days from accredited software — buildable on off-the-shelf crypto/web stack — https://rtcsuite.com/bir-e-invoicing-philippines-eis-by-2026-a-comprehensive-guide-to-scope-stages-and-technical-compliance/ — 2026
  - Signal 3 (economic): Mandate live for e-commerce since 31 Mar 2026, ₱50k/violation, Dec 2026 hard deadline; incumbents are ERP-priced for finance teams, not solo sellers — https://sovos.com/regulatory-updates/vat/philippines-deadline-for-mandatory-structured-e-invoicing-extended/ — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

A hard government mandate just landed on a population — high-volume Philippine marketplace sellers — that the platforms have explicitly abandoned and that the incumbents have priced out. The gap is not "invoicing software exists or doesn't." It exists. The gap is **shape and price**: every credible EIS solution today is a full ERP or accounting suite that assumes you already keep books, already enter orders into a system, and have a person whose job is finance.

The marketplace seller has none of that. Their orders live inside Shopee/Lazada/TikTok Seller Center, not in any ERP. So the load-bearing work isn't "generate an invoice" — it's **getting 800 messy marketplace orders/month, in three different export formats, mapped cleanly to a BIR-compliant invoice line set, signed, and transmitted before the 3-day clock runs out, with zero manual keying.** That's an orchestration-and-reconciliation problem, and it's exactly the part the ERPs treat as an afterthought feature.

Disrupt vector: BigSeller already bolts "one-click invoice" onto its cross-border ERP — so this is contested, not greenfield. But BigSeller is a sprawling listing/inventory/logistics suite; EIS is a checkbox feature buried in it. A PH-only product that does **one thing — never let a single order miss its EIS window** — wins the seller who doesn't want to adopt an ERP to satisfy a tax rule.

## 4. Target market

- **Primary customer:** Philippine marketplace sellers doing **₱500K–₱30M/yr** across Shopee, Lazada and/or TikTok Shop — the band above the ₱500K withholding-exemption line (so they're already on BIR's radar) but below the size where a full ERP+bookkeeper is already in place. Typically 1–4 people, often the owner plus a virtual assistant.
- **Why they buy (their words, paraphrased from seller-tax guidance forums):** "Shopee won't give my buyers an invoice anymore and BIR wants one for every order — I have hundreds a month and I can't sit in the EIS portal all day." The fear is concrete: ₱50,000 × every un-filed order is an existential number.
- **Rough TAM reasoning:** The Philippines has well over a million registered online sellers and the BIR has been aggressively pulling marketplace sellers into the net (1% withholding on >₱500K remittances, RMC 38-2026 "blue check" registration drive). Even a conservative 150,000–300,000 sellers in the >₱500K, multi-platform, high-order-count band is the serviceable wedge. Capturing 5,000 of them at ₱700/mo is ~₱42M ARR (~$750K).
- **Why now for them:** Stage 1 went mandatory March 2026; the Dec 2026 hard deadline means every covered seller must be transmitting compliant invoices *this calendar year* or eat per-invoice penalties. The clock is the campaign.

## 5. Product sketch (MVP)

- **One-tap marketplace connect:** authorize Shopee / Lazada / TikTok Shop (or drag in their order CSV exports) — ReceiptRun pulls new orders automatically.
- **Auto-invoice per order:** maps each marketplace order to a BIR-compliant invoice (buyer details, line items, VAT, supply type), generates the structured JSON.
- **Sign + transmit:** applies the JWS RS256 signature and pushes the payload to the BIR EIS within the 3-day window — operating under the SDTS-accredited software channel.
- **Deadline watchtower:** a live queue of every order and its time-to-transmit; nothing can silently miss the 72-hour clock.
- **Exception inbox:** orders with missing/ambiguous data (no buyer TIN, mixed VAT, returns/cancellations) get flagged for one-tap human resolution instead of failing silently.
- **Buyer-facing copy:** auto-emails/links the issued invoice to the buyer when required.
- **Month-end pack:** a clean reconciliation export the seller's accountant can drop straight into the BIR returns.

## 6. AI angle — what's load-bearing

AI is not the headline — compliance plumbing is — but it earns its place on the messy edge. Marketplace order exports are inconsistent and dirty: buyer names in free-text fields, bundled SKUs, partial cancellations, mixed VAT/zero-rated lines, COD vs. prepaid quirks that differ per platform. A rules-only mapper breaks on every new edge case. An LLM-assisted normalizer that reads a raw order row and resolves it to the correct invoice line set — VAT treatment, supply-type code, buyer-info completeness — is what keeps the exception queue small enough that one VA can clear it. Remove the AI and you'd need a hand-coded parser per marketplace per format change, plus a human reviewing far more rows. The signing and transmission are deterministic crypto/API — no AI there, and that honesty matters.

## 7. Localization angle

This is localization *as the entire product*. It is PH-only by definition: BIR EIS spec, JWS-signed JSON, SDTS accreditation, peso VAT rules, Shopee/Lazada/TikTok-PH order schemas, and a ₱-denominated price point a solo seller will actually pay. A generic global e-invoicing tool cannot serve this seller — wrong format, wrong rails, wrong price, wrong distribution (these sellers live in Filipino seller Facebook groups and Viber/Telegram channels, not on G2). The whole moat such as it is comes from being the narrow PH-marketplace specialist nobody at enterprise-vendor scale bothers to be.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** tiered by order volume. Starter ₱490/mo (up to ~150 orders), Growth ₱990/mo (up to ~800), Scale ₱1,990/mo (up to ~3,000) + per-order overage. Anchored *below* Juan's ₱2,000 Essentials and Odoo per-seat, *above* free-but-manual.
- **ACV:** ~₱10,000–14,000 (~$180–250) blended across tiers.
- **Rough math to $1M ARR:** ~₱57M. ~4,800 sellers at a ₱990/mo blended ACV. Against a 150K+ serviceable base, that's ~3% penetration — plausible for a mandate-driven category.
- **Rough math to $5M ARR:** ~24,000 paying sellers, or expand ACV via add-ons (bookkeeping handoff, BIR returns filing, multi-store, withholding-tax reconciliation) lifting blended ACV toward ₱2,500/mo so ~9,500 sellers clears it.
- **Expansion path:** start as the EIS-transmit pipe → add returns/withholding reconciliation → become the seller's whole BIR back office. Order volume naturally pushes sellers up tiers as their stores grow.

## 9. Go-to-market wedge — first 100 customers

- **Filipino seller Facebook groups + Viber/Telegram channels:** there are large, active "Shopee/Lazada sellers PH" communities where BIR compliance threads already go viral with panic. Post a plain-language "how to not get fined ₱50k per order" explainer + free EIS-readiness checker; convert readers into trials. This is where the customer already is.
- **Accountant / bookkeeper channel partners:** PH bookkeepers servicing online sellers are drowning in manual EIS entry for their clients. Offer a partner dashboard + revenue share — they onboard 10–40 seller clients each. The first 100 customers can come from 5–10 bookkeepers.
- **Marketplace-adjacent service providers:** virtual-assistant agencies and "Shopee store management" freelancers who run sellers' back offices — embed ReceiptRun as the compliance layer they resell.
- **Direct outreach to the visibly-exposed:** scrape high-volume PH seller stores and DM/email a personalized "you've issued ~X orders this month — here's what un-filed looks like in penalties" message during the Q3–Q4 2026 deadline crunch.

## 10. Build complexity — justification

Medium. The hard parts are real but bounded: (1) BIR **SDTS accreditation** — a certification/testing cycle with the EIS that takes weeks and is a gating dependency (and a moat once held); (2) reliable order ingestion from three marketplaces whose export formats and APIs shift; (3) correct JWS RS256 signing + EIS API transmission. None of it is research-grade — it's a fixed public spec, off-the-shelf crypto, standard web stack, plus an LLM normalizer. A 2–3 person team ships a credible v1 in ~3–4 months, with the accreditation timeline as the real long pole rather than the code.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Directly enables compliance with a BIR mandate; requires SDTS accreditation (a process, not a blocker). |
| Ethical — no harm / dark patterns | ✅ | Helps small sellers avoid ruinous per-invoice fines. |
| Market exists (evidence above) | ✅ | Hard mandate live since Mar 2026, marketplaces abandoned the task, ERP incumbents priced out the SMB. |
| 1–5 person team can build this | ✅ | 2–3 people, ~3–4 months to v1. |
| Launchable with <$50K / ₱40L | ✅ | Build + accreditation well under the cap. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire: ₱50k/violation × hundreds of orders/mo, marketplaces won't help, hard deadline. Just short of top band because some sellers will ignore it until BIR actually enforces. |
| Demand evidence | 15 | 11/15 | Strong mandate + abandoned-by-platform signals, but customer-voice is inferred from accountant/seller guidance, not a wall of direct seller complaints yet; BigSeller already ships a competing feature. |
| Build feasibility | 15 | 10/15 | Fixed public spec and standard stack, but SDTS accreditation + multi-marketplace ingestion + signing push it past a 6-week solo build. |
| Distribution clarity | 15 | 12/15 | Named channels (seller FB/Viber groups, bookkeeper partners), deadline-driven urgency, clear conversion motion. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked below incumbents, ₱ tiers fit the wallet; ~3% penetration to $1M is reasonable but not guaranteed. |
| Time to first revenue | 10 | 7/10 | Trials convertible fast during deadline crunch, but accreditation gates *compliant* go-live, delaying first real revenue ~3–4 months. |
| Defensibility | 10 | 4/10 | Accreditation + workflow lock-in are soft moats; an ERP incumbent or a funded local can replicate. Speed and niche focus, not a structural moat. |
| **Total** | **100** | **71/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (crypto signing, multi-platform ingestion, accreditation), `domain-expertise-required` (PH BIR/VAT rules — needs a local tax advisor on the team or as co-founder).

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful slice of >₱500K multi-platform sellers will pay ₱500–2,000/mo rather than do manual EIS entry or ignore it. **How to test:** 30–40 seller interviews in PH seller FB groups; pre-sell 20 paid pilot slots before building.
2. **Assumption:** SDTS accreditation is achievable by a small team in a reasonable window. **How to test:** read the EIS-cert portal requirements end-to-end, talk to one already-accredited provider, scope the test cycle before committing.
3. **Assumption:** Shopee/Lazada/TikTok order data can be pulled reliably (API or stable export) at volume. **How to test:** build the ingestion spike against all three within week 1–2.
4. **Assumption:** BigSeller / ERP incumbents won't aggressively undercut on the EIS feature for solo sellers. **How to test:** sign up for their tools, price the EIS feature, gauge how buried/clunky it is for a non-ERP user.

### Risk flags

1. **Platform dependency:** core value depends on Shopee/Lazada/TikTok order access — if they tighten APIs or (less likely) start issuing compliant invoices themselves, the wedge narrows. Mitigate by also accepting CSV exports and broadening to non-marketplace sellers.
2. **Regulatory/accreditation risk:** no SDTS accreditation = no compliant product. It's a gating dependency and the timeline is partly out of your hands.
3. **Enforcement timing:** if BIR is slow to actually fine sellers, urgency (and willingness to pay) softens — the mandate exists but the *fear* drives the sale.
4. **Competition:** BigSeller already offers one-click EIS invoicing inside its ERP; defensibility is thin.

## 14. Structured verdict

```
Score:                  71/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + a Philippine tax/BIR domain advisor (ideally a co-founder bookkeeper)
Time to revenue:        3–4 months (gated by SDTS accreditation, not by code)
Capital to launch:      ₱8–18 lakh equivalent ($10–22K) — mostly the team's time + accreditation
Top 3 assumptions to validate first:
  1. Sellers pay ₱500–2,000/mo vs. manual entry — 30 interviews + 20 pre-sold pilots
  2. SDTS accreditation is achievable by a small team in ~weeks — read cert portal, talk to an accredited provider
  3. Reliable multi-marketplace order ingestion at volume — build the spike in week 1
Kill criteria:
  - Abandon if <8 of 20 pilot-pitch sellers will pre-pay during the Q3 2026 deadline crunch
  - Abandon if SDTS accreditation realistically takes >4 months or is closed to small new entrants
  - Abandon if Shopee/Lazada/TikTok begin issuing BIR-compliant invoices for sellers natively
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Read the BIR EIS certification portal and one accredited provider's docs end-to-end; confirm the SDTS path, timeline, and whether small new entrants are admitted. This alone can kill the idea.
- **Day 3–4:** Join 5–6 large PH seller Facebook/Viber groups; post a plain-language EIS explainer + "free readiness check"; DM 30 visibly high-volume sellers and ask the three questions: how many orders/mo, how are you filing EIS today, would you pay ₱X/mo to never miss the 3-day window.
- **Day 5:** Decide go / no-go on a falsifiable bar — **≥10 of 30 sellers confirm the pain *and* a price ≥₱490/mo, AND the accreditation path is open to a small team.** Anything less, park it until enforcement tightens.
