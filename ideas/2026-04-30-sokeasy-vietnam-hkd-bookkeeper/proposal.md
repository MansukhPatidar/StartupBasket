---
title: SoEasy — Zalo AI bookkeeper for Vietnam household businesses
slug: sokeasy-vietnam-hkd-bookkeeper
date: 2026-04-30
category: Compliance SaaS / Vietnam Household Businesses
complexity: Medium
score: 79
verdict: GO
confidence: Medium
oneLiner: Zalo-native AI bookkeeper turning photo receipts and voice notes into compliant tax filings for Vietnam's hộ kinh doanh.
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [Zalo-first, Voice-first, Multilingual, AI-agent, Compliance-driven, SMB, Vietnam]
axes:
  problem: 18
  demand: 14
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# SoEasy — Zalo-native AI bookkeeper for Vietnam's 5M household businesses post-khoán

## 1. One-liner

Zalo-native AI bookkeeper turning photo receipts and voice notes into compliant tax filings for Vietnam's hộ kinh doanh.

## 2. Trend signal — why now?

January 1, 2026 is the day Vietnam's lump-sum tax (`khoán`) regime for household businesses (`hộ kinh doanh` — HKD) officially died. Five million HKDs that used to pay a flat ward-office-negotiated tax now must self-declare VAT and PIT based on actual revenue, keep accounting ledgers, collect input invoices to deduct expenses, and reconcile cash-register e-invoices that stream live to the General Department of Taxation. The April 2026 VCCI survey of 1,001 HKDs across 34 provinces is brutal: 71% can't collect customer info to issue e-invoices, 67.6% can't track deductible expenses, 73% lack the tech skills, 68% fear penalties. Penalty schedule under Decree 310/2025 (effective Jan 16, 2026) ranges from a few million VND for missed invoices to 50–80M VND for persistent non-compliance. Decree 70/2025 forces cash-register e-invoices for all HKDs above 1B VND/year in retail, F&B, hospitality, salon, and personal services. Decree 68/2026 (March 5, 2026) confirms the abolition of khoán and lays out the new accounting-ledger requirements (Group 1: 1 ledger; Group 3 — over 500M VND: 4 mandatory ledgers).

The government's response is to bundle 24-month free e-invoice software through MISA, Viettel, VNPT, Sapo. The Ministry of Finance is patting itself on the back. The reality on the ground is a 55-year-old phở-shop owner in Hanoi staring at MISA AMIS and panicking. Quote from Ms. Khanh, Hanoi restaurant owner under 1B VND, in vietnam.vn: *"Previously, paying taxes on a lump-sum basis was quite simple, but now I have to declare them myself, so I was very confused at first."* Quote from a small retailer in Tuoi Tre: *"For a long time, small businesses were very anxious about bookkeeping and invoicing, now that they've just gotten used to it they're being asked to stop."* This is the largest forced-formalization event in Vietnamese SMB history.

Provenance:
  - Signal 1: Decree 68/2026 + Decree 70/2025 + Decree 310/2025 force 5M HKDs to self-declare, keep ledgers, issue e-invoices, with fines up to 80M VND from Jan 2026 — https://vietnamnews.vn/economy/1732806/tax-reform-boosts-transparency-integrates-household-businesses.html — 2026-04
  - Signal 2: VCCI April 2026 survey of 1,001 HKDs: 71% can't collect customer info for e-invoices, 67.6% struggle with deductible expense accounting, 73% lack tech skills, 68% fear penalties — https://vietnamnet.vn/en/most-household-businesses-struggle-with-thin-profits-in-vietnam-2509801.html — 2026-04
  - Signal 3: KiotViet (Vietnam POS leader) raised $45M Series B from KKR; MISA launched MISA AMIS OneAI explicitly targeting "business households and families"; Bizzi at $3M raised on invoice-automation thesis — https://www.misa.vn/en/154177/misa-launches-misa-amis-oneai-a-unified-ai-platform-that-helps-popularize-ai-for-all-organizations-businesses-households-and-families/ — 2026-04
  Category: Regulatory arbitrage

## 3. The opportunity

Pre-2026: HKD owners paid a fixed monthly tax negotiated with the ward, did zero bookkeeping, ran cash. Post-2026: same owner has to operate like a junior accountant — track every input invoice over 5M VND (must be non-cash for deduction), record every sale, file VAT+PIT quarterly, sync cash-register data to GDT in real time, file annual finalization. The 24-month free MISA package the government is pushing solves invoice **issuance**. It does not solve the actual job: convert messy cash-and-paper reality into a compliant ledger and a correct declaration.

Existing players are wrong-shaped:
- **MISA AMIS / meInvoice**: enterprise accounting platform with a 50-screen UI. Built for accountants. Free for 24 months but requires bookkeeping literacy the owner doesn't have. Government subsidy is a feature distribution, not a workflow solution.
- **Viettel SInvoice / VNPT eInvoice**: telco-grade infrastructure. Same UX problem.
- **KiotViet / Sapo / iPOS**: POS-first. Solve the front-of-house invoice mandate. Don't solve the back-office declaration.
- **Outsourced tax agents (đại lý thuế)**: charge ₫1M+/month, often unaffordable for a 50M-VND/month phở shop, and there aren't enough of them — 5M HKDs vs. ~10K licensed tax agents.
- **Bizzi**: targets enterprise AP departments, not the owner.

The gap is the owner-facing, conversational, voice/photo bookkeeper that lives on Zalo (85% of Vietnamese, near-monopoly messenger). A 50-year-old can't navigate MISA. They can absolutely send photos and voice notes in Zalo — they already do. AI eats the gap between unstructured Zalo input and the structured ledger + declaration the tax authority requires.

## 4. Target market

- **Primary customer:** Owner of a hộ kinh doanh in Group 2 or lower Group 3 — annual revenue ₫500M–₫3B (~$20K–$120K), 1–4 staff, single physical location (shop, café, F&B, salon, repair, mini-mart, pharmacy, tailor). Age 35–60, smartphone-native via Zalo, basic computer skills, no formal accounting training.
- **Why they buy:** From Jan 2026 they are personally exposed to ₫5–80M VND fines per violation under Decree 310/2025. Their 24-month free MISA software doesn't solve declaration, only issuance. They can't afford a ₫1M/month accountant. They don't want to learn AMIS. Decree 70 means the GDT sees every cash-register transaction in real time — they cannot hide. The fear is acute and the deadline is now.
- **Rough TAM reasoning:** 5M total HKDs (Vietnam Investment Review, vietnam.vn). ~90% under ₫500M threshold (tax-exempt but still must register revenue). The paying segment — Group 2 and 3 with ₫500M–₫3B — is roughly 500K–800K owners based on the ₫1B threshold cohort cited by GDT (over 110K already on cash-register e-invoices, with ramp pressure into hundreds of thousands). At ₫150K/mo ARPU, 200K paying customers = $144M ARR theoretical ceiling. Bootstrapper target: 6,000 paying customers = $1M ARR. Achievable.
- **Why now for them:** Khoán abolished Jan 2026. Decree 310 fines start Jan 16, 2026. First quarterly declaration due April 2026. VCCI survey shows 73.7% report only modest profits in 2025 with 81% revenue decline — they are stretched thin and a wrong filing is existential.

## 5. Product sketch (MVP)

- **Zalo OA chat is the entire product.** Owner adds SoEasy as a Zalo Official Account contact and onboards via 2-minute Vietnamese voice flow.
- **Photo any input invoice/receipt** into the chat — AI vision extracts seller name, MST (tax code), date, line items, VAT, total — and tags it as deductible/non-deductible per Decree 70 rules (especially the 5M VND non-cash payment rule).
- **Voice-record sales** — "bán 12 tô phở 50K, 3 cốc cà phê 30K" — auto-converted to ledger entries in `Sổ Bán Hàng Hóa Dịch Vụ` (Mẫu S2a-HKD).
- **Daily summary message** — "Hôm nay doanh thu 1,8M, chi phí 600K, lãi 1,2M. Còn 4 ngày tới hạn nộp tờ khai quý 2."
- **One-tap quarterly declaration** — auto-generates the VAT+PIT declaration in eTax Mobile-compatible XML/PDF; owner signs with VNPT/Viettel digital signature; submitted directly or routed to a partner đại lý thuế for review.
- **Cash-register e-invoice reconciliation** — connects to MISA, KiotViet, Sapo, Viettel SInvoice via existing APIs to pull issued invoices and reconcile against owner-recorded sales (catches the typical mismatch between what the POS issued and what the owner remembers).
- **Penalty radar** — proactive Zalo nudges before each deadline; flags missing input invoices for the 5M VND rule, missing customer MST on B2B sales, late-filing risk.
- **Tax-agent escape hatch** — for a one-time ₫500K/quarter add-on, a partner đại lý thuế reviews and stamps the declaration before submission.

## 6. AI angle — what's load-bearing

Three places AI is the product, not decoration:

1. **Vietnamese OCR + structured extraction from messy phone photos** of Vietnamese receipts and red-VAT-invoices, including hand-written annotations on top of printed invoices (very common in Vietnamese F&B). GPT-4o vision + a Vietnamese-specific extraction prompt + a calibration loop against the standardized VN e-invoice fields (per Decree 70) gets this to ≥95% line-item accuracy.
2. **Vietnamese voice → structured ledger entry**, tolerant of regional accents, mixed Vietnamese-English numerals ("hai mươi cái 50K"), and noisy environments (kitchen, traffic). Whisper-V3 + a domain-specific Vietnamese language model adapter that knows F&B/retail vocabulary and the standardized item taxonomy.
3. **Decree-aware reasoning agent** — given the owner's group classification, sector, monthly revenue, and ledger state, decide which form to file (Mẫu 01/CNKD, 01-1/CNKD, etc.), which VAT/PIT rate applies (5% VAT + 2% PIT for tourism/F&B; 3% + 1.5% for retail; etc.), and what's missing before submission.

Strip the AI out and it's just another invoice form. With the AI, a 55-year-old grandma running a phở shop literally talks to her phone and gets a compliant filing. That's the entire reason this exists.

## 7. Localization angle (if any)

This product cannot exist without deep Vietnam localization. Wedge components:

- **Zalo OA + Zalo Mini App** as primary surface — 85% of Vietnamese use Zalo daily. WhatsApp barely exists here. Government's tax authorities already run Zalo OA channels for HKDs (Hanoi tax office's three-tier Zalo network is real). Customers are already in Zalo.
- **Vietnamese voice-first UX** — owners speak faster than they type, and Vietnamese typing on a phone is awkward (tone marks). Voice + photo is the right input mode for this demo.
- **VND-native pricing**: ₫99K-₫299K/month tiers, billed via MoMo / ZaloPay / VNPay / bank transfer. USD pricing models do not work.
- **Domestic API integrations**: VNPT-CA / Viettel-CA / FPT-CA digital signatures, KiotViet/Sapo/MISA/Viettel SInvoice POS+invoice APIs, eTax Mobile and the General Department of Taxation's filing endpoints.
- **Decree-specific knowledge base**: 68/2026, 70/2025, 310/2025, 117/2025, Circular 152, Circular 88, Tax Administration Law 2025. None of this exists in any English-trained model — this has to be curated.

This is not a localizable global play; it's a Vietnam-only play. That's a feature: it's why a US/EU SaaS won't beat us locally and Bizzi/MISA won't ship grandma-friendly UX.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Free** — under ₫500M/year revenue (tax-exempt segment); read-only ledger, no declaration, used as a funnel.
  - **Cơ Bản** — ₫99K/mo (~$4) — full bookkeeping, ledger generation, quarterly declaration draft.
  - **Pro** — ₫199K/mo (~$8) — adds POS reconciliation, penalty radar, multi-location.
  - **Pro + Đại Lý Thuế** — ₫299K/mo + ₫500K/quarter review fee (~$12 + $20/Q) — a partner tax-agent reviews and stamps the declaration before submission. Revenue share with the tax-agent partner: 30/70.
- **ACV:** Blended ~₫150K/mo × 12 = ₫1.8M (~$72) base; with tax-agent attach (~30% of paying base), blended ~$110/year.
- **Math to $1M ARR:** ~12,000 paying customers × ~$83 ACV. Capture <2% of the ~700K addressable Group 2/3 HKDs. Plausible inside 24 months given regulatory deadline tailwinds.
- **Math to $5M ARR:** ~50,000 paying customers + tax-agent attach + B2B feed-up to small enterprises. Requires capturing ~7% of the ~700K segment + expansion into 1B–10B VND companies, which sounds aggressive but matches KiotViet's POS penetration trajectory.
- **Expansion path:** add (a) payroll for HKDs with 1–10 staff, (b) social-insurance filings (BHXH), (c) micro-credit underwriting feed (cash-flow data is gold for lenders like Lemon, Validus, Funding Societies VN), (d) e-commerce seller pack for ho kinh doanh online on Shopee/TikTok Shop/Facebook/Zalo.

## 9. Go-to-market wedge — first 100 customers

The 5M-HKD panic IS the distribution. Three concrete channels:

1. **Đại Lý Thuế partnerships (10 customers/agent × 10 agents = 100).** Vietnam has ~10,000 licensed tax agents drowning in HKD inquiries they can't service profitably at ₫1M/month. Partner with 10 mid-tier tax-agent firms in HCMC + Hanoi. They route their unaffordable HKD leads to us; we share 30% of subscription revenue + book all the ₫500K/Q review fees back to them. They keep their high-ACV enterprise clients and make incidental income on what was previously dead leads.
2. **Zalo OA + Zalo Mini App + Tiktok HKD-niche creators.** Hire 5–10 micro-creators (Nguyễn Thái Học-tier, 50K–200K followers in the bookkeeping/HKD space — they exist; "Kế Toán Cho Hộ Kinh Doanh" type content already trends on TikTok VN). Sponsored "how to file your first quarterly declaration in 90 seconds" videos with a free trial Zalo deeplink. CAC target: ₫150K-₫300K per paying customer.
3. **Local market and ward-association cold sweep.** Send 2 reps to physical wholesale markets (Bình Tây, Đồng Xuân, Bến Thành) for hands-on demos at vendor stalls. The customer is literally sitting there with their phone. Goal: 5 demos/day/rep, 30% trial conversion, 40% trial-to-paid. 100 paying customers via this channel inside 60 days.

The single best signal: 71% of HKDs say compliance is hard. That's not "addressable market" — that's a queue of panicked customers waiting for the first sane product.

## 10. Build complexity — justification

**Medium.** No model training needed — GPT-4o vision + Whisper handle Vietnamese acceptably; Vietnamese-fine-tuned alternatives (PhoWhisper, Bartpho) exist as fallbacks. The custom work is: (a) Decree-aware rules engine with the actual ledger templates (S1a/S2a-HKD), (b) eTax Mobile XML formats and digital-signature integration, (c) POS API connectors (KiotViet, Sapo, MISA, SInvoice), (d) Zalo OA + Mini App UX. Two engineers + one Vietnamese tax-agent on retainer ship credible v1 in 12–16 weeks, polished v2 in 5 months. The deepest moat is the ledger/decree knowledge base, which is curation labor, not engineering.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Tax-prep software is unregulated; declaration filing requires owner signature, which we collect via VNPT-CA. |
| Ethical — no harm / dark patterns | ✅ | We're helping owners avoid 80M VND fines they can't afford. |
| Market exists (evidence above) | ✅ | 5M HKDs forced into compliance; VCCI survey shows the pain. |
| 1–5 person team can build this | ✅ | 2 engineers + 1 domain expert. |
| Launchable with <$50K / ₹40L | ✅ | API costs + small team for 6 months ≪ $50K. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire. Personal fines up to 80M VND, deadline already passed (Jan 2026), VCCI says 68% fear penalties. |
| Demand evidence | 15 | 14/15 | Multiple official surveys, regulatory mandate, public complaints, MISA + KiotViet aggressively positioning. As strong as demand evidence gets. |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI + domain rules. The eTax Mobile + digital-signature integration and POS connectors are the real time sink. 12–16 weeks honest. |
| Distribution clarity | 15 | 12/15 | Tax-agent partnerships and physical-market cold sweep are concrete and testable. Zalo creator channel is plausible. CAC needs validation. |
| Revenue mechanics | 15 | 11/15 | ₫99–299K/mo fits wallet; tax-agent attach validated by ₫1M/mo benchmark. Conversion math is reasonable but the free-tier-to-paid jump is a real risk. |
| Time to first revenue | 10 | 8/10 | Pre-sells via panicked owners hitting the April 2026 first-declaration deadline. Realistic first revenue inside 6–8 weeks of beta. |
| Defensibility | 10 | 5/10 | MISA and KiotViet are bigger and well-funded. Defensibility is execution speed, ledger/decree knowledge depth, Zalo-native UX, and tax-agent revenue-share lock-in — none patentable. |
| **Total** | **100** | **79/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (Vietnamese tax + ledger rules; cannot be Anglo-only), `sales-heavy` (tax-agent partnerships and physical-market sweep are sales work, not content). A solo Vietnamese ex-MISA / ex-KiotViet / ex-đại lý thuế operator + 1 engineer + GPT-equivalent AI fluency is the ideal founding shape.

### Key assumptions to validate (3–5)

1. **Assumption:** HKD owners will trust an AI bookkeeper enough to file their declaration. **How to test:** 30 in-person demos at HCMC and Hanoi wholesale markets; measure trial-to-first-filing rate. Target ≥40%.
2. **Assumption:** ₫150K/mo blended ACV is acceptable to Group 2/3 HKDs. **How to test:** Pricing-ladder test in onboarding; measure conversion at ₫99K, ₫149K, ₫199K. Kill if <15% paid conversion at ₫149K.
3. **Assumption:** Tax agents will partner rather than compete. **How to test:** Cold-pitch 20 HCMC + Hanoi mid-tier đại lý thuế firms in 30 days; close 3 paid revenue-share pilots. Kill if <2.
4. **Assumption:** Zalo OA delivery rate + voice/photo UX adoption beats web-app onboarding. **How to test:** A/B Zalo OA vs. web onboarding on first 200 leads; measure activation. Expect ≥2× Zalo.
5. **Assumption:** Government's free MISA bundle does NOT solve the actual declaration job, leaving room for us. **How to test:** Interview 20 owners currently using free MISA — do they still file declarations on time? Survey says 71% won't; verify in person.

### Risk flags

1. **Platform dependency (Zalo):** VNG could change OA terms or pricing. Mitigation: parallel WhatsApp/web fallback; Zalo OA is durable enough for 24 months.
2. **Regulatory whiplash:** Decree 141/2026 already raised the 500M threshold to 1B in late April 2026 — rules are still moving. Mitigation: rules engine as data, fast turnaround on changes; this is also our moat.
3. **MISA / KiotViet incumbent response:** Both are big and well-capitalized. Mitigation: speed and Zalo-native UX. They will not ship grandma UX in 6 months.
4. **Tax-authority direct competition:** GDT could ship its own free tool. Mitigation: government has a 2-year track record of free tools that owners refuse to use because UX is bad. Our edge is exactly the part the government can't ship.
5. **CAC blow-up:** if neither tax-agent partnerships nor market sweep convert, paid acquisition is brutal at this ARPU. Kill criterion below.

## 14. Structured verdict

```
Score:                  79/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Vietnamese operator with domain depth (ex-MISA / ex-KiotViet / ex-đại lý thuế) + 1 engineer + Zalo-platform fluency
Time to revenue:        6–8 weeks from MVP launch
Capital to launch:      $25–40K (₫600M–₫1B)
Top 3 assumptions to validate first:
  1. 40%+ of HKD demos convert to paid trial → 30 in-person demos at HCMC/Hanoi markets
  2. ≥3 mid-tier đại lý thuế firms accept revenue-share partnership → cold pitch 20 in 30 days
  3. ₫149K/mo achieves ≥15% paid conversion → live pricing test on first 200 trials
Kill criteria:
  - Abandon if <30% trial-to-paid conversion after 200 trials at ₫149K/mo
  - Abandon if zero tax-agent partners close in 60 days
  - Abandon if MISA or KiotViet ships a Zalo-native owner-facing bookkeeper before our v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 30 HKD owners in HCMC (mix of phở/cà phê, tạp hóa, salon, repair shop) via Zalo and physical-market intercepts. Prepare a Figma + Zalo OA mock with photo-receipt and voice-sales flows in Vietnamese.
- **Day 3–4:** In-person walk-through with each owner. Measure (a) "would you pay ₫149K/mo for this?" (target ≥40% yes), (b) successful first photo-to-ledger end-to-end (target ≥80%), (c) willingness to upload digital signature (target ≥30%).
- **Day 5:** Cold-pitch 5 HCMC mid-tier đại lý thuế firms with the partnership pitch and revenue-share term sheet. Look for 1 verbal yes.
- **Decide:** Go if ≥12/30 owners say yes at ₫149K AND ≥1 đại lý thuế verbal yes. No-go and revisit signal-set otherwise. Falsifiable.
