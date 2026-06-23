---
title: "SoRo — tax-filing ledger for Vietnam service businesses"
slug: vietnam-household-tax-declaration-ledger
date: 2026-06-23
category: Compliance / Vietnam Household Businesses (hộ kinh doanh) above the VND500M threshold
complexity: Medium
score: 72
verdict: GO
confidence: Medium
oneLiner: "Reconstructs a phone-shop or salon owner's bank, QR and cash takings into a defensible monthly Vietnam tax declaration."
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [Regulatory-driven, Mobile-first, Multilingual, AI-agent, SMB]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 3
founderFit: [domain-expertise-required, operations-heavy]
featured: false
---

# SoRo — quarterly-tax ledger for Vietnam's service-business households

## 1. One-liner

Reconstructs a phone-shop or salon owner's bank, QR and cash takings into a defensible monthly Vietnam tax declaration.

## 2. Trend signal — why now?

On 1 January 2026 Vietnam abolished the *thuế khoán* (lump-sum) tax that every household business (hộ kinh doanh) had paid for decades. Overnight, 100% of household businesses must self-declare and self-calculate tax monthly or quarterly on **actual revenue** — something they have never done. There were ~3.6M registered household businesses as of end-2024, ~2M still on lump-sum in early 2025. The Politburo's Resolution 68-NQ/TW (4 May 2025) set the deadline; Decree 70/2025/ND-CP wired in the e-invoice and cash-register rules.

The state simultaneously raised the tax-exempt threshold from VND100M to **VND500M/year**, so ~2.3M households (≈90%) now pay nothing and are out of scope. The opportunity is the **~10% above VND500M** — roughly 300–400K businesses — who must now keep accounting books, file monthly/quarterly, and (above VND1B) issue e-invoices from a connected cash register.

Vietnamese-language financial press is full of the fallout: owners "worried about violating registration, taxes, invoices and facing heavy fines," a freelance teacher earning 500M–1B VND publicly anxious about how to declare, delegates complaining of "lack of guidance." The Ministry of Finance is running a nationwide propaganda-and-handholding campaign — a tell that the affected population genuinely cannot do this alone.

```
Provenance:
  - Signal 1 (demand): Lump-sum tax abolished 1 Jan 2026; 100% of household businesses must now self-declare on actual revenue; owners "worried about heavy fines," govt running guidance campaigns — https://www.vietnam.vn/en/tu-nam-2026-ho-kinh-doanh-phai-tu-ke-khai-va-tinh-thue — Jan 2026
  - Signal 2 (feasibility): Vietnamese mobile-receipt OCR matured (MC-OCR challenge corpus) and frontier LLMs hit ~97% receipt extraction accuracy, making cheap phone-photo + bank-statement ingestion viable — https://research.aimultiple.com/receipt-ocr/ — 2025
  - Signal 3 (economic): Outsourced household tax-accounting already sells from ~500,000 VND/month, and MISA/KiotViet/Sapo are racing to ship Decree-70 products and bank tie-ups — money is clearly moving — https://ketoan.man.net.vn/en/bang-gia-dich-vu-ke-toan-thue/ — 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

The incumbents — MISA (meInvoice, AMIS), KiotViet, Sapo — are POS-and-e-invoice companies. Their products assume a **retail counter with a cash register**: you ring up a sale, an e-invoice is generated, the tax declaration is auto-suggested. That works for a convenience store or a pharmacy.

It does **not** fit the service-business household: the hair salon, beauty spa, private tutor, motorbike-repair shop, physiotherapy clinic, small F&B without a till, freelance designer, the landlord renting three rooms. These owners take payment by **bank transfer, QR (VietQR / MoMo / ZaloPay) and cash** — there is no point-of-sale event to hang an e-invoice on. Yet they are squarely in the VND500M–3B band that must now keep books and file. For them the work is the opposite of POS: *reconstruct what came in from a mess of bank-app screenshots, QR settlement logs and a cash notebook, classify it, and turn it into a defensible monthly/quarterly declaration before the deadline.*

Nobody is building for that shape. MISA will tell them to buy a cash register they don't need. A tax agent will charge 500K–1.5M VND/month and still need the owner to hand over the raw records. SoRo sits in the gap: a phone-first ledger that ingests the records they already have and produces the filing.

## 4. Target market

- **Primary customer:** Owner-operator of a *service* household business in Vietnam with annual revenue VND500M–3B (~$19K–$115K) — salons, spas, tutoring, clinics, repair shops, small studios, room-rental landlords. One to five staff. Takes money by bank/QR/cash, has no cash register, currently has no accountant or pays a part-time bookkeeper cash.
- **Why they buy (their words):** "I don't know how to declare," "I'm afraid of the fines," "I don't have a cash register and I don't want one." They want the monthly filing to be *done*, not to learn accounting.
- **Rough TAM reasoning:** ~300–400K households sit above the VND500M threshold. If service-type businesses are even a third of that, the serviceable niche is ~100K+ owners. At a 99–199K VND/month price, capturing 5,000 of them is ~$1M+ ARR.
- **Why now for them:** The first real monthly/quarterly declarations under the new regime fall due through 2026. Penalties for late or wrong filing are the forcing function. This is a *this-quarter* pain, not a someday pain.

## 5. Product sketch (MVP)

- Snap or forward bank-transfer notifications, QR-wallet settlement screenshots, and a cash takings note; SoRo reads them (Vietnamese OCR + LLM) and builds the revenue book.
- Auto-classifies each inflow as business revenue vs personal, flags the ambiguous ones for a one-tap confirm.
- Tracks revenue against the VND500M / VND1B / VND3B thresholds and warns before a band change triggers e-invoice or method obligations.
- Generates the monthly/quarterly declaration figures in the exact line format the eTax Mobile / HKD declaration expects, ready to copy or hand to a tax agent.
- Deadline reminders in Vietnamese with the penalty amount spelled out ("file by the 20th or risk a fine of X").
- "Send to my tax agent" export — a clean PDF/CSV pack so an agent finishes in minutes instead of chasing the owner for shoeboxes.
- Runs entirely on a phone, Vietnamese-first, no desktop, no cash register.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The whole job is turning **unstructured, low-quality Vietnamese financial evidence** — blurry bank-app screenshots, QR settlement logs in three different wallet formats, a handwritten cash notebook, voice notes — into a clean, classified, deduplicated revenue ledger. That is exactly what Vietnamese-language vision-LLM OCR plus classification now does at ~97% on clean receipts and good-enough on messy ones with human-in-the-loop confirm. A rules-only app would just be an empty spreadsheet the owner still can't fill. The AI is the ingestion engine; the filing is the deliverable.

## 7. Localization angle

This *is* the localization play — it cannot exist as a generic global tool.
- **Language/script:** Vietnamese-first UI and OCR (diacritics, tonal text), not an afterthought.
- **Payment rails:** native parsing of VietQR, MoMo, ZaloPay, bank SMS/app formats — the actual rails these owners use.
- **Regulation:** built around Decree 70/2025, the VND500M/1B/3B bands, and the eTax Mobile declaration format. The regulation is the spec.
- **Pricing:** a 99–199K VND/month tier works where a $49/mo Western tool is absurd — but it's still attractive against a 500K VND/month tax agent.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** 99K VND/month (revenue-tracking + reminders) and 199K VND/month (full declaration generation + agent export). ~$4 and ~$8.
- **ACV:** ~VND1.8M/year (~$70) at the 149K blended tier.
- **Math to $1M ARR:** ~$1M ÷ $70 ≈ **14,000 paying owners** out of a 100K+ serviceable niche — ~14% penetration. Reachable but not trivial; that's why this is a GO, not a STRONG GO.
- **Math to $5M ARR:** ~70,000 owners (unrealistic on the niche alone) OR add the e-invoice-issuance tier for the VND1B+ band, a per-filing tax-agent seat (agents managing 50–200 clients each), and expansion into the retail household segment KiotViet under-serves. The agent channel is the real $5M lever.
- **Expansion path:** start solo-owner self-serve → land tax agents as multi-client power users (B2B2C) → upsell e-invoice issuance and year-end settlement.

## 9. Go-to-market wedge — first 100 customers

- **Tax-agent partner channel (primary):** Vietnam has thousands of small *đại lý thuế* / bookkeeping shops that just got buried in confused household clients. Recruit 10–20 as resellers — they onboard their own client books through SoRo, we split the subscription. Each agent brings 30–100 owners. Five agents = first 100+ customers.
- **Facebook group infiltration:** household-business and *kế toán hộ kinh doanh* Facebook groups have hundreds of thousands of members all asking the same "how do I declare?" question right now. Post a free "are you over the VND500M line?" checker that ends in the app. This is where these owners actually congregate.
- **Vertical association beachhead:** pick ONE service vertical with a trade community (e.g. salon/spa owners) and partner with a supplier or training academy that already has the WhatsApp/Zalo list; localized demo for their members.
- **Ward-level tax-office handholding events:** the government is running in-person transition clinics. Show up where the anxious owners already are with a Zalo QR.

## 10. Build complexity — justification

Medium. The ingestion engine (Vietnamese OCR + LLM classification of bank/QR/cash records) is off-the-shelf model work with a human-confirm loop — no custom model training. The genuinely hard part is *correctly modelling the Decree-70 declaration rules and bands* and keeping the output in the exact format the tax system accepts; that's domain work, not engineering. A pair with a Vietnamese tax-domain advisor ships a credible v1 in ~10–14 weeks. No POS hardware, no cash-register integration in v1 (that's the incumbents' game).

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping owners comply with their own filing; not acting as the filer of record. Position as a preparation tool, optionally agent-assisted. |
| Ethical — no harm / dark patterns | ✅ | Helps small owners avoid fines; pro-compliance. |
| Market exists (evidence above) | ✅ | 300–400K households forced into self-declaration in 2026; active anxiety, paid alternatives exist. |
| 1–5 person team can build this | ✅ | Pair + domain advisor, ~3 months. |
| Launchable with <$50K / ₹40L | ✅ | Inference + dev + a Vietnamese tax advisor retainer. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire for the in-scope tier — legal deadline + fines, never done it before. Capped because 90% of households are now exempt; the painful population is the smaller 10%. |
| Demand evidence | 15 | 12/15 | Strong: regulation forces it, owners publicly anxious, govt campaigns, paid tax agents already at 500K VND/mo. Docked for no direct evidence yet that *this specific app shape* converts. |
| Build feasibility | 15 | 11/15 | Ingestion is off-the-shelf AI; the rules engine and filing-format fidelity are real, ongoing domain work. |
| Distribution clarity | 15 | 11/15 | Tax-agent reseller channel and Facebook/Zalo groups are concrete and where customers already are; conversion math still unproven. |
| Revenue mechanics | 15 | 12/15 | Clear price, validated WTP baseline (500K VND/mo agents), credible $1M path. 14% niche penetration for $1M is the stretch. |
| Time to first revenue | 10 | 7/10 | Agent partner can pre-sell within weeks; self-serve funnel ~4–8 weeks. |
| Defensibility | 10 | 3/10 | **Weakest axis.** Govt promises "free accounting software"; MISA/KiotViet/Sapo are giants already shipping Decree-70 tools. Moat is the service-business niche + agent relationships + format accuracy, all copyable in <12 months. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `operations-heavy` — needs a Vietnamese tax-domain partner and hands-on agent-channel relationship building. A foreign solo founder cannot do this alone.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful slice of the VND500M–3B tier is service businesses *without* a cash register. **How to test:** interview 30 owners across salons/tutoring/repair in two districts; count how many have no POS.
2. **Assumption:** Owners (or their agents) will pay 99–199K VND/month rather than rely on the "free" government software. **How to test:** show both options to 30 owners, measure stated + deposit-backed intent.
3. **Assumption:** OCR/LLM ingestion of real Vietnamese bank/QR/cash records is accurate enough that confirm-effort stays low. **How to test:** run 200 real records through the pipeline, measure correction rate.
4. **Assumption:** Tax agents will resell rather than see SoRo as a threat. **How to test:** pitch 10 agents; measure how many sign as resellers vs balk.

### Risk flags

1. **Regulatory/competitive squeeze:** The government's promised "free accounting software support" and MISA/KiotViet's free e-invoice connectors could commoditize the category. Mitigate by owning the no-POS service niche and the agent channel, not competing on the retail-POS tier.
2. **Platform dependency:** Reliant on reading bank/wallet formats that can change, and on whatever filing format the tax system accepts. Format drift is ongoing maintenance.
3. **Market timing knife-edge:** Too early and owners haven't felt the fine; too late and an incumbent's free tier has captured them. The 2026 filing cycles are the window.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Vietnamese (or VN-resident) founder with a tax-domain advisor and agent-channel hustle
Time to revenue:        6–10 weeks via a tax-agent reseller partner
Capital to launch:      ₹8–16 lakh ($10–20K) — inference, dev, tax-advisor retainer
Top 3 assumptions to validate first:
  1. No-POS service businesses are a large share of the VND500M–3B tier — 30 owner interviews
  2. Willingness to pay 99–199K VND/mo over the free govt tool — paid-intent test with 30 owners
  3. Tax agents resell rather than compete — pitch 10 agents
Kill criteria:
  - Abandon if <30% of interviewed in-scope service owners lack a cash register (incumbents already cover them)
  - Abandon if <10% show paid intent over the free government software
  - Abandon if MISA/KiotViet ships a free no-POS service-business filer before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a one-question Zalo/Facebook "Are you over the VND500M line and have no cash register?" checker; post in 5 large household-business / kế toán hộ kinh doanh groups.
- **Day 3–4:** Interview 25–30 respondents who fit; ask how they pay/get paid, who files for them today, what they'd pay for the filing to be done. Run 100 of their real bank/QR records through an off-the-shelf Vietnamese OCR+LLM prompt to measure extraction accuracy.
- **Day 5:** Go/no-go. **Go if:** ≥30% of in-scope service owners have no POS AND ≥10 give deposit-backed intent at ≥99K VND/mo AND extraction accuracy clears a usable bar with manageable correction effort. Otherwise revisit scope or kill.

The result is falsifiable: a counted share of no-POS owners, a counted number of paid-intent commitments, and a measured extraction accuracy — not a vibe.
