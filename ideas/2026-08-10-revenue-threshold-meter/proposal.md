---
title: "NguongMeter — threshold meter for Vietnam's shop owners"
slug: revenue-threshold-meter
date: 2026-08-10
category: Compliance / Vietnam
complexity: Low
score: 72
verdict: GO
confidence: Medium
oneLiner: "Adds up a household business's cash, bank and Shopee income so it knows the day it crossed VND 1 billion."
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [Vietnam, Zalo-first, SMB, Compliance-driven, Solo-builder, Multilingual]
axes:
  problem: 15
  demand: 12
  build: 13
  distribution: 11
  revenue: 10
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# NguongMeter

## 1. One-liner

Adds up a household business's cash, bank and Shopee income so it knows the day it crossed VND 1 billion.

## 2. Trend signal — why now?

Vietnam just did something no other country in the region has done at this scale: it abolished the presumptive lump-sum tax (`thuế khoán`) that roughly five million household businesses had used for decades, and pushed them onto real self-declaration from 1 January 2026.

The specifics that matter:

- **Lump-sum tax is gone.** From 1 Jan 2026 household businesses declare and pay on *actual* revenue. Resolution 68-NQ/TW frames this as moving households "into the modern management orbit like enterprises — with accounting books, electronic invoices and periodic tax declaration obligations."
- **The threshold is VND 1 billion.** Decree 141/2026/ND-CP raised the PIT and VAT exemption threshold for household businesses from VND 500 million to VND 1 billion/year. Households at or above VND 1 billion in annual revenue must use e-invoices with a tax authority code, or cash-register-generated e-invoices.
- **There is a 30-day fuse.** If a household crosses VND 1 billion *during* the year, it must move to e-invoicing within 30 days from the last day of the tax period in which the threshold was reached. Miss it and Decree 310/2025 penalties for failing to issue invoices run to VND 60–80 million for organisations, with individuals at 50% of that — VND 30–40 million (roughly USD 1,100–1,500) against a business whose whole year's turnover is VND 1 billion.
- **Revenue is explicitly defined across every channel.** Tax authority guidance is blunt: revenue is the total from all sales channels — direct sales, e-commerce platforms, bank account, e-wallet, and cash. Not just what runs through the till.
- **The tax office now has the other side of the ledger.** Decree 117 has had Shopee, Lazada and TikTok Shop withholding 1.5% (1% VAT + 0.5% PIT) and reporting seller revenue since July 2025. Critically, platform withholding does *not* discharge the seller's own invoice obligation — these are separate legal obligations. Authorities are also cross-referencing bank data and payment systems.
- **Households know they can't do this.** A VCCI survey reported by Pham Ngoc Thach found 49% of business households worry about the cost and time of managing invoices and documents; 73% say they lack the technological knowledge and skills, 53% find the procedures complicated.

The asymmetry is the whole idea. The tax authority can already sum a household's income across channels. The household cannot.

Provenance:
  - Signal 1 (demand): Lump-sum tax abolished 1 Jan 2026 for ~5.2M household businesses; VCCI survey shows 73% lack the tech skills and 49% fear invoice/document cost and time — https://vietnamnet.vn/en/from-manual-to-digital-how-small-businesses-will-survive-the-2026-tax-shift-2473996.html — 2026-08-10
  - Signal 2 (feasibility): Circular 64/2024/TT-NHNN mandates bank open APIs from 1 Mar 2025 (full compliance 1 Mar 2027); SePay and Casso already resell bank transaction webhooks/reconciliation across 12+ Vietnamese banks — https://sepay.vn/api-ngan-hang.html — 2026-08-10
  - Signal 3 (economic): Decree 310/2025 penalties of VND 60–80M (individuals 50%) for failure to issue invoices, triggered by a 30-day switch deadline after crossing VND 1B — https://vietnamfinance.vn/doanh-thu-vuot-1-ty-dong-nhung-chua-dang-ky-hoa-don-dien-tu-ho-kinh-doanh-bi-phat-nang-d148102.html — 2026-08-10
  - Signal 4 (economic/structural): Decree 117 platform withholding since Jul 2025 gives the tax office cross-channel visibility households don't have; invoice obligation remains separate from platform filing — https://insightplus.bakermckenzie.com/bm/tax/vietnam-implementing-decree-requiring-e-commerce-platforms-and-digital-platforms-to-withhold-tax-on-individual-sales — 2026-08-10
  Category: Regulatory arbitrage

## 3. The opportunity

Every existing tool in this market measures **one channel** — its own.

KiotViet, Sapo, MISA eShop, PosApp, iPOS all sell point-of-sale software. Each of them reports revenue beautifully, for the transactions that pass through that POS. MISA meInvoice connects free to all of them to issue e-invoices. This is a well-served, competitive, commoditised market and I am not going to win it.

But the regulation is not written against POS revenue. It is written against **total** revenue — cash, bank transfer, e-wallet, Shopee, TikTok Shop, Lazada, and the till, summed. A typical near-threshold household in Vietnam runs a physical shop with a QR standee, takes cash, and also sells on TikTok Shop. Three or four income streams, three or four different apps, and no single number anywhere.

So the household's actual question — *"have I crossed VND 1 billion, and when exactly?"* — is a question no incumbent answers, because answering it requires reading data from outside their own product. A POS vendor has a structural disincentive to tell a merchant about revenue that didn't happen on their POS.

The gap is narrow and specific: a cross-channel revenue meter with a legal trigger attached to it. Not accounting software. Not a POS. A single number, a projected crossing date, and a countdown that starts the day the number goes over.

The 10× is not AI cleverness. It's that the incumbent literally cannot see two-thirds of the data.

## 4. Target market

- **Primary customer:** Owner-operators of registered Vietnamese household businesses (`hộ kinh doanh`) doing roughly VND 600M–1.5B/year — call it USD 23K–57K — with at least two income channels (a physical location plus online, or cash plus bank transfer). Retail, F&B, personal services. Concentrated in HCMC, Hanoi, Da Nang, Binh Duong, Dong Nai. Typically 1–5 staff, owner does the books, often on paper or in Zalo messages to themselves.
- **Why they buy:** In their own words. A Da Lat grocery owner, quoted in local press on the new regime: *"I was very happy to hear that only those with revenue exceeding 500 million VND have to pay taxes; but with such a diverse range of goods, I don't know how to declare it."* A fermented pork roll business owner in the VietnamNet piece asked how to comply when buying raw materials like banana leaves from farmers who give no invoices. The VCCI numbers say the same thing at scale: 73% lack the tech skills, 53% find the procedures complicated, 49% fear the cost and time.
- **Rough TAM reasoning:** Vietnam's 2026 economic census counts ~5.3 million non-agricultural household businesses (some official statements say 6.1 million). The band that matters is those near or above the threshold. A useful ground-truth datapoint: Tax Department 1 of Lam Dong province reported 10,688 tax-paying households at end-2025, of which 2,785 (26%) were above VND 500 million. If ~26% of registered households sit above VND 500M nationally, the near-threshold and above-threshold population is on the order of one million businesses. I only need thousands.
- **Why now for them:** Three dates. Lump-sum tax died 1 Jan 2026. The VND 1 billion e-invoice obligation bites from 1 July 2026. And the annual actual-revenue notification to the tax authority is due 31 January of the following year. 2026 is the first year every one of these applies at once, and the first year in which "I didn't know" stops being an answer.

## 5. Product sketch (MVP)

- **One number, always current.** A single running total of revenue year-to-date across every connected channel, against the VND 1 billion line, on a Zalo-first mobile view.
- **Bank inflow capture.** Connect the business bank account via a Vietnamese bank-API aggregator; incoming transfers are pulled automatically and classified as sales vs. non-sales (owner top-ups, loans, refunds) with the owner confirming the ambiguous ones.
- **Marketplace import.** Shopee / TikTok Shop / Lazada seller revenue pulled in via seller-centre exports or API, including the gross figure *before* the 1.5% platform withholding — because the threshold is measured on gross, not on what landed in the wallet.
- **Cash entry in three taps.** A daily cash-takings entry that takes seconds, in Vietnamese, with a Zalo reminder at closing time. Voice entry for owners who won't type.
- **Projected crossing date.** Based on trailing 8-week run rate: *"At your current pace you cross VND 1 billion around 12 October. You would then have 30 days to switch to e-invoicing."* This is the feature people will talk about.
- **The 30-day countdown.** The moment the total goes over, the meter turns into a countdown with a named checklist: register for e-invoice with tax authority code or cash-register e-invoice, obtain digital signature, pick a provider.
- **Duplicate-proofing.** A Shopee payout landing in the connected bank account must not be counted twice. Matching payouts to marketplace gross is a core job, not a nicety.
- **31 January revenue notification pack.** A clean annual actual-revenue figure with the per-channel breakdown and supporting records behind it, in the shape the tax authority asks for, including the S1a-HKD sales log.

## 6. AI angle — what's load-bearing

Remove the AI and this product still exists, but it becomes a spreadsheet the owner abandons in three weeks. The AI does the work that makes it stick:

**Transaction classification is the real job.** A Vietnamese household's bank statement is a mess of terse, unpunctuated, abbreviation-heavy transfer memos — customer payments, the owner moving their own money, a relative repaying a loan, a supplier refund, a Shopee payout. Deciding which of these is taxable business revenue is a judgement call made hundreds of times a month, and getting it wrong in either direction is expensive: over-count and you tell someone they crossed a threshold they didn't; under-count and you hand them a VND 30–40M penalty. An LLM over Vietnamese transfer memos, learning each merchant's own patterns and counterparties, does this at a quality that rules cannot.

**Payout-to-gross reconciliation.** Matching a lump Shopee payout against the underlying gross orders net of withholding, fees and returns is fuzzy matching over messy data — a genuine AI task, and the difference between a number the owner trusts and one they don't.

**Explaining the rule in the owner's language.** 73% say they lack the technological knowledge. The product has to answer "so what do I actually do now" in plain Vietnamese, grounded in the specific decrees, without the owner reading Decree 141 or 310.

Without the classifier, someone has to hand-categorise every transaction — which is precisely the work these owners already refuse to do.

## 7. Localization angle

This is not a localized version of a global product. It only exists because of Vietnamese law, and it is unbuildable anywhere else without a rewrite.

- **Language:** Vietnamese-only at launch. The customer does not read English.
- **Distribution rail:** Zalo, not WhatsApp and not email. Zalo Official Account for reminders, alerts and the daily cash prompt is the difference between retention and churn.
- **Payment rails:** VietQR / NAPAS bank transfer is how these businesses get paid, and bank-API aggregators (SePay, Casso) are how you read it. Subscription collection also has to be bank transfer / VietQR — card penetration in this segment is poor.
- **Price point:** Has to be VND-native. A USD 20/mo tool is unsellable here; VND 99,000–199,000/mo is the range that clears.
- **Regulatory quirk is the entire moat surface:** the VND 1B threshold, the 30-day switch, Decree 310/2025 penalty schedule, the 31 January notification, the S1a-HKD sales log, Decree 117 platform withholding. All Vietnam-specific, all subject to change, all requiring someone to track them.

The same product shape is portable to Indonesia and Thailand later — every SEA tax authority is moving the same direction — but the content is not.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** VND 149,000/month (~USD 5.60) for the standard tier — bank connection, one marketplace, cash entry, threshold meter, alerts. VND 299,000/month (~USD 11.30) for multi-channel: 3+ marketplaces, multiple bank accounts, multi-location, the 31 January notification pack, and a year of stored records.
- **Free tier as the whole funnel:** manual cash + one bank account, meter only, no marketplace sync, no notification pack. The free tier's job is to show someone their real number for the first time. That number is the sales pitch.
- **ACV:** Blended ~VND 2.2M/year (~USD 83). Assume mix skews to the cheap tier early.
- **Rough math to $1M ARR:** ~12,000 paying households at a blended USD 83/yr. Against a near-threshold population plausibly around one million, that is roughly 1.2% penetration of the relevant band. Achievable but not trivial — this is a low-ACV, high-count business and that is the central commercial risk.
- **Rough math to $5M ARR:** ~60,000 paying households, which realistically requires two things beyond the wedge: (a) ACV expansion — becoming the filing tool, not just the meter, and taking a cut on e-invoice issuance and digital signature resale, which is a real revenue line in Vietnam; (b) an accountant/agent channel selling in bulk to their household book. Standalone at VND 149K/mo, $5M is a stretch. I'd underwrite this as a $1–2M ARR business with a credible path further, not as a confident $5M.
- **Expansion path:** meter → e-invoice issuance and digital signature resale (recurring, attach-rate driven) → the annual notification service → multi-location → accountant multi-client console. The natural progression is that once you hold the revenue data, you are the least-effort place to also file.

Gross margin is healthy: the cost line is bank-API aggregator fees and inference on transaction classification, both small per account.

## 9. Go-to-market wedge — first 100 customers

- **The free "what is my real number" audit, run through Zalo.** The hook is a one-off: connect your bank, upload your Shopee export, and we tell you your true year-to-date total and your projected crossing date, free. For a large fraction of near-threshold households this is the first time they will have seen the figure. Run it manually for the first 100 — concierge, not automated — and convert to paid on the alerting.
- **Vietnamese Facebook and Zalo seller groups, by name.** Groups like the POS-review communities (the KiotViet/Sapo/PosApp comparison groups running tens of thousands of members) and the TikTok Shop / Shopee seller groups are where this audience actually discusses tax panic. Post the free audit offer, answer the threshold question in public repeatedly, and let the specificity do the selling. Target: 30–40 of the first 100 from here.
- **Tax agents and bookkeeping shops (`đại lý thuế`).** Every province has small agents servicing dozens to hundreds of households each, and the abolition of lump-sum tax just made their job much harder — they now need actual revenue from clients who can't produce it. Sign 10 agents with a multi-client view and a revenue share. One agent with 60 household clients is worth 60 direct acquisitions and costs one conversation. This is the highest-leverage channel and probably where the business really lives.
- **Ride the deadline calendar.** Two hard spikes a year: the run-up to 1 July 2026 (e-invoice obligation) and January (the 31 Jan notification). Concentrate spend and content on those windows; demand in this category is seasonal and event-driven, not steady.
- **Content on the exact search terms.** Vietnamese-language explainers targeting the literal queries people type — *"vượt 1 tỷ có phải dùng hóa đơn điện tử không"*, *"hộ kinh doanh tính doanh thu thế nào"*. Slow channel, but it compounds and the competition is writing for enterprises.

## 10. Build complexity — justification

**Low.** No custom models, no hardware, no novel infrastructure. Bank connectivity is bought off the shelf from SePay or Casso rather than negotiated bank by bank — that is the decision that keeps this Low instead of Medium. Marketplace revenue starts as seller-centre CSV import (a day's work) and graduates to API later. Transaction classification is prompt-and-eval work over an off-the-shelf LLM, and the eval set is the only part that demands real discipline. Zalo OA integration is well documented.

Realistic estimate: 8–10 weeks to a chargeable v1 for one or two people, with most of the time going into the classifier's accuracy and the payout deduplication, not the UI. The genuine non-engineering cost is regulatory: someone has to own the decree tracking, and that person should be a Vietnamese tax practitioner on retainer, not the founder guessing.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only financial aggregation with user consent, under Circular 64/2024/TT-NHNN's consent-based open API regime. Positioned as record-keeping, not as licensed tax agency work — the filing itself stays with the owner or their agent. |
| Ethical — no harm / dark patterns | ✅ | Helps small operators comply with a law that already applies to them. The failure mode to actively avoid: never market it as a way to *stay under* the threshold. That's tax evasion assistance and it would be the fastest way to kill the company. |
| Market exists (evidence above) | ✅ | 5.3M household businesses, VCCI survey on inability to cope, penalty schedule with real numbers, incumbents selling adjacent tools. |
| 1–5 person team can build this | ✅ | 8–10 weeks, two people, off-the-shelf components. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Main costs are aggregator fees, inference, and a tax advisor retainer. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, dated, penalty-backed, and felt by a specific population. Held below 17 for one honest reason: authorities have signalled that early 2026 enforcement prioritises "guidance, reminders and real-time support rather than aggressive inspections," and 2026 declarations won't be used for retroactive lump-sum assessment. The fuse is lit but the first year is cushioned, so this is not yet hair-on-fire for every household — it's acute for the near-threshold ones and it sharpens through 2026–27. |
| Demand evidence | 15 | 12/15 | Strong and independent: VCCI survey percentages, named press quotes from affected owners, provincial revenue-distribution data, a competitive POS market proving these businesses already pay for software. Short of 13–15 because I have no direct evidence anyone has paid for *this specific* cross-channel meter — the adjacent spend is on POS and e-invoicing. |
| Build feasibility | 15 | 13/15 | Solo-to-pair in 8–10 weeks on bought components. Docked for the classifier accuracy bar and payout deduplication, which are genuinely fiddly. |
| Distribution clarity | 15 | 11/15 | The tax-agent channel and named seller groups are concrete and cheap, and the free-audit hook is strong. Docked because reaching a million low-ACV micro-merchants is a grind, and conversion from free audit to VND 149K/mo subscription is unproven. |
| Revenue mechanics | 15 | 10/15 | Pricing is benchmarked against real local comparables (KiotViet at VND 220–550K/mo, MISA free tiers) and clears the wallet. But ACV is low, $1M needs ~12,000 payers, and $5M needs expansion revenue that isn't proven. Low-ACV SMB churn in this segment is the thing that breaks the model. |
| Time to first revenue | 10 | 8/10 | 8–10 weeks to v1 and a pre-launch free-audit list means paid conversions inside ~3 months. Not instant, because trust has to be earned before someone connects a bank account. |
| Defensibility | 10 | 3/10 | Weakest axis by far. KiotViet, MISA or Sapo could add cross-channel aggregation, and MISA in particular has distribution, capital (TA Associates-backed) and the e-invoice rails already. The only real defence is speed, being the neutral party that isn't trying to sell them a POS, and accumulating merchant-specific classification data. Assume it's copyable. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs someone who can ship an LLM classification pipeline against messy Vietnamese financial text, plus a genuine Vietnamese tax practitioner in the loop. A non-Vietnamese founder should not attempt this without a local co-founder — the language, the Zalo distribution, the tax-agent relationships and the decree tracking are all insider work.

### Key assumptions to validate

1. **Assumption:** Near-threshold household businesses genuinely cannot state their true cross-channel revenue today. **How to test:** Ask 40 owners in HCMC and Hanoi markets for their YTD total across all channels, then run the free audit and compare. If most are within 10% of correct already, the core premise is dead.
2. **Assumption:** They will pay VND 149K/mo for a number plus alerts, not just accept it free. **How to test:** Pre-sell to 30 audit recipients at a discounted annual rate before building the paid tier. Target ≥15% conversion.
3. **Assumption:** They will connect a bank account to a startup they've never heard of. **How to test:** Measure connection rate in the free audit. This is the single biggest product risk and it's a trust problem, not a technical one. If <30% connect, the product has to be redesigned around manual and CSV entry.
4. **Assumption:** Tax agents will resell rather than treat this as a threat to billable hours. **How to test:** Pitch 15 agents; look for 3 signed pilots with ≥10 clients each.
5. **Assumption:** LLM classification of Vietnamese transfer memos can hit ~95% precision on business-revenue identification. **How to test:** Hand-label 2,000 real transactions from 10 volunteer merchants and measure before writing any UI.

### Risk flags

1. **Incumbent absorption (high).** MISA and KiotViet already own the merchant relationship and the e-invoice rails. Cross-channel aggregation is a feature they can ship. This is the most likely way the business dies, and it argues for moving fast and going hard at the tax-agent channel, which incumbents serve poorly.
2. **Regulatory whiplash (high).** The threshold moved from VND 200M to 500M to 1B inside about a year, and deadlines in this programme have already shifted. A change to the threshold, the 30-day rule, or the penalty schedule rewrites the product's core logic overnight. This cuts both ways — churn risk if the rules relax, tailwind if they tighten — but it means permanent maintenance cost.
3. **Enforcement softness (medium).** If the tax authority's guidance-first posture extends through 2027, urgency deflates and the pitch weakens from "avoid a VND 40M penalty" to "be tidy." Watch actual penalty issuance rates as the leading indicator.
4. **Platform dependency (medium).** Reliant on bank-API aggregators and on marketplace export/API access. Shopee or TikTok Shop restricting seller data access would force a fallback to manual upload and materially degrade the product.
5. **Low-ACV churn (medium).** Micro-merchant SaaS at USD 6/mo churns hard, and this product has a seasonal shape — a household that just crossed the threshold and switched to e-invoicing may feel done. The counter is the 31 January notification and continuous record-keeping, which must be built early to give a year-round reason to stay.
6. **Positioning hazard (low, but fatal if mishandled).** Must never be marketed as threshold avoidance. Keep the messaging on knowing and complying.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Vietnamese technical founder (or a pair with a Vietnamese
                        co-founder) with a tax-practitioner advisor on retainer
Time to revenue:        10–14 weeks
Capital to launch:      USD 15–25K (₹13–21 lakh) — aggregator fees, inference,
                        tax advisor, and a small Zalo/Facebook content budget
Top 3 assumptions to validate first:
  1. Near-threshold households can't state their true cross-channel revenue —
     40 in-person audits vs. their own estimate, measure the gap
  2. Bank-connection consent rate ≥30% in the free audit — this is the make-or-break
  3. Tax agents will resell — 15 pitches, look for 3 pilots at ≥10 clients each
Kill criteria:
  - Abandon if fewer than 15% of 40 audited households are off by >10% on their
    own revenue estimate (the premise is wrong)
  - Abandon if bank-connection consent stays below 20% after two onboarding rewrites
  - Abandon if MISA or KiotViet ships cross-channel revenue aggregation with
    threshold alerting before your v1 reaches 200 paying customers
  - Abandon if free-audit → paid conversion is under 8% across 100 audits
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build nothing. Go to three markets in HCMC or Hanoi with a Vietnamese speaker. Ask 40 household business owners two questions: *"What is your total revenue so far this year, across everything?"* and *"How did you arrive at that?"* Record the answer and the method. Separately, collect their channel mix.
- **Day 3–4:** For the 15 most willing, do the audit by hand — take their bank statement export and marketplace exports, sum it in a spreadsheet, and produce the real number and a projected crossing date. Present it to them in person. Watch the reaction; the size of the gap between their guess and reality is the entire thesis. In parallel, call 15 tax agents and pitch the multi-client view.
- **Day 5:** Decide. **Go if:** ≥60% of the 40 owners are off by more than 10% on their own revenue estimate, AND ≥15 of the 40 agree to connect a bank account to a pilot, AND ≥3 tax agents commit to a pilot. **No-go if** owners are broadly accurate about their own numbers, or if bank-connection willingness is under 25% — the first means there's no problem, the second means there's no product.

The falsifiable result is the measured gap between what these owners *think* they earned and what they actually earned. If that gap is small, there is no company here and I want to find that out for the price of a week and some coffee.
