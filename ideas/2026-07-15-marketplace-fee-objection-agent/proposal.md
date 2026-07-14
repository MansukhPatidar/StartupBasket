---
title: "PotongBalik — fee-objection agent for Indonesian sellers"
slug: marketplace-fee-objection-agent
date: 2026-07-15
category: Retail / Indonesia — UMKM Sellers on Shopee, Tokopedia & TikTok Shop (unagreed fee recovery under Permendag 19/2026 and Permen UMKM 3/2026)
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Finds every rupiah the marketplace took that you never agreed to, and files the objection that makes them give it back."
tags:
  vertical: Retail
  model: SaaS
  geography: SEA
  secondary: [SMB, Compliance-driven, AI-agent, Multilingual, WhatsApp-first, Solo-builder]
axes:
  problem: 18
  demand: 14
  build: 11
  distribution: 13
  revenue: 10
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PotongBalik

## 1. One-liner

Finds every rupiah the marketplace took that you never agreed to, and files the objection that makes them give it back.

## 2. Trend signal — why now?

Two things happened in the last 60 days that turn a chronic complaint into a collectable debt.

**The squeeze got unbearable.** Indonesian marketplace take rates have gone from roughly 5% in 2019 to a realistic 25–30% of sale price in 2026 once admin fees, service fees, order-processing fees, promo deductions and logistics are stacked. Shopee raised seller fees twice by mid-2026; TikTok Shop three times. From 18 May 2026 Shopee's maximum per-item fee jumped to Rp 650,000. Tokopedia's per-order processing charge can exceed Rp 10,000 pre-tax. Sellers are not quietly absorbing this — there is a visible *"tinggalkan e-commerce"* movement on Threads and X, and recognisable local brands (True to Skin, Raecca) have publicly walked off the marketplaces to sell direct. UMKM Minister Maman Abdurrahman, 13 May 2026: *"Keluhannya sudah lumayan banyak. Hampir setiap hari masuk ke saya."*

**The government handed sellers a weapon and nobody has picked it up.** Permendag 19/2026 (in force 8 June 2026) requires platforms to disclose every fee in a downloadable contract, obtain seller approval before changing terms, and — the load-bearing clause — **respond to a seller's written objection within 14 working days, failing which the objection is deemed accepted.** Two weeks later, Permen UMKM 3/2026 (17 June 2026) went further: platforms are **banned from unilaterally setting or changing fees on micro and small sellers**, must give **90 calendar days' notice** of any fee change, and must give **verified UMK selling only domestic products at least a 50% service-fee discount** — a discount the ministry is targeting for July–August 2026 rollout, claimable via self-declaration in SAPA UMKM.

So: a legal right to object, a deemed-accepted default if the platform stays quiet, a ban on the unilateral increases that caused the pain, and a mandatory 50% discount most sellers have never heard of. Meanwhile the seller is staring at a settlement report they cannot read.

The tooling gap is the whole opportunity. BigSeller, Jubelio, Ginee and iSeller will happily *show* you a reconciliation table — BigSeller's marketplace reconciliation feature even colour-codes the shipping-fee variance red or green. Then it stops. Not one of them drafts the objection, files it, tracks the 14-working-day clock, or claims the discount. They tell you that you were robbed. They don't help you get the money back.

Provenance:
  - Signal 1 (demand): Indonesian marketplace fees now consume 25–30% of sale price; sellers publicly exiting platforms; UMKM Minister receiving complaints "almost every day" — https://www.beritasatu.com/ekonomi/2994237/biaya-admin-marketplace-menggila-seller-bertahan-atau-kabur-aja-dulu and https://www.idntimes.com/tech/trend/seller-mundur-perlahan-karena-fee-e-commerce-makin-mencekik-c1c2-01-7cxy7-mj9077 — 13–15 May 2026
  - Signal 2 (feasibility/regulatory): Permendag 19/2026 Art. 14 — written seller objection to unilateral fee changes; platform must respond in 14 working days or the objection is deemed accepted — https://www.nusantaradfdl.com/insights/content-hub/indonesia-ecommerce-regulation-permendag-19-2026/ and https://mitrakonsultindo.co.id/2026/06/marketplace-wajib-tanggapi-keberatan-pedagang-online-dalam-14-har/ — in force 8 June 2026
  - Signal 3 (economic): Permen UMKM 3/2026 bans unilateral fee changes on UMK, mandates 90-day notice, and compels a ≥50% service-fee discount for verified domestic-product sellers, targeted for July–Aug 2026 — https://teknologi.bisnis.com/read/20260622/266/1982355/permen-umkm-no32026-shopee-lazada-cs-wajib-pangkas-biaya-layanan-50-bagi-umkm and https://www.antaranews.com/berita/5617856/menteri-umkm-terbitkan-aturan-pelindungan-umkm-di-marketplace — 17 June 2026
  - Signal 4 (market size): Tokopedia alone reports 11M sellers, near-100% UMKM; Indonesia e-commerce GMV ~US$57.7B — https://www.tempo.co/ekonomi/tokopedia-catat-11-juta-penjual-hampir-100-persen-umkm-473425
  Category: Regulatory arbitrage

## 3. The opportunity

The gap is between *knowing* and *collecting*.

Every Indonesian seller with more than a few hundred orders a month has the same private suspicion: the settlement number doesn't match what they expected, and they can't prove it. Shopee deducts across three separate stages — at order confirmation, at settlement processing, and at final payout reconciliation. Each deduction has its own name, its own basis, and its own rate card that changed twice this year. The seller's mental model is "harga jual minus komisi." Reality is a dozen line items, some of which were never in any contract the seller signed.

Until 8 June 2026, the seller's only options were to eat it or to leave. Now there's a third: object in writing, and the platform has 14 working days to justify the charge or the objection is deemed accepted. Permen UMKM 3/2026 makes the underlying unilateral increase unlawful for micro and small sellers in the first place, and adds a 90-day notice requirement platforms have plainly not been honouring.

The incumbents are the wrong shape to exploit this. Jubelio, BigSeller and Ginee are omnichannel operations tools — their customer promise is inventory sync and order flow, and reconciliation is a reporting tab. They also sit in a delicate commercial relationship with the very platforms whose money we'd be clawing back; several are official Shopee/TikTok service partners. They are structurally disinclined to ship a button that says *"File objection against Shopee."* That reluctance is the moat window.

What a focused team can do 10× better: read the settlement export the way a forensic accountant would, cross-reference it against the platform's own published fee schedule *as of the order date*, flag every charge that has no contractual basis or that was introduced without the required notice, quantify it in rupiah, and produce a filed, dated, tracked written objection with the clock running. The seller's job becomes clicking "kirim."

## 4. Target market

- **Primary customer:** The owner-operator of an Indonesian UMKM store doing roughly **Rp 50 juta – Rp 1 miliar/month GMV** across Shopee + TikTok Shop/Tokopedia. Typically 1–15 staff. Fashion, skincare/beauty, home goods, F&B packaged, accessories. They run the store themselves or have one admin person. They are on Threads and in seller WhatsApp groups. Secondary customer: the **agency / brand consultant** managing 5–40 such stores, who feels the pain multiplied.

- **Why they buy:** In their own words, from the record — sellers say *"potongan dari setiap transaksi kini terasa semakin besar"* and that maintaining profit has become the problem, with the marketplace *"tidak lagi seideal beberapa tahun lalu"* (IDN Times, May 2026). A seller writing to Media Konsumen in June 2026 described being charged Rp 6.5 juta in return shipping on goods that were not defective — a charge they believed they did not owe and could not get reversed. That's not a rounding error for an UMKM; that's a month of profit. The buying trigger is not "I want better reports." It's "they took Rp 6.5 juta from me and I want it back."

- **Rough TAM reasoning:** Tokopedia alone reports ~11M sellers, near-100% UMKM. The overwhelming majority are dormant or hobby-scale and irrelevant. The honest serviceable slice is sellers with enough volume that a 2–5% recovery is worth a subscription — call it the **150,000–400,000 stores** doing ≥Rp 50 juta/month across the big three platforms. At even 1% penetration and Rp 400K/mo, that's a Rp 7–19 miliar/yr business. The success-fee layer is where it actually gets interesting.

- **Why now for them:** Before June 2026, objecting was shouting into a void. Now silence is a win. And the 50% domestic-product discount — free money for a huge share of UMKM sellers — requires an SAPA UMKM registration and self-declaration that almost nobody has completed, because almost nobody knows it exists. That's a concrete, dated, expiring reason to sign up this month rather than next year.

## 5. Product sketch (MVP)

- **Connect your stores.** Shopee, TikTok Shop and Tokopedia seller accounts link in; PotongBalik pulls the income/settlement statements and order-level fee breakdowns.
- **The Rupiah Number.** One screen, one figure: *"Rp 4.2 juta in charges this quarter have no contractual basis or were applied without the required 90-day notice."* Broken down by fee type, by order, by date.
- **Unagreed-charge detection.** Every deduction is matched against the platform's published fee schedule *as it stood on the order date* — versioned, so a fee introduced in May can't be silently applied to an April order. Charges that don't reconcile get flagged with the reason.
- **Objection drafting.** For each flagged cluster, generate the written objection in formal Bahasa Indonesia, citing Permendag 19/2026 Art. 14 and Permen UMKM 3/2026, itemising the disputed charges with order IDs and rupiah amounts, and attaching the evidence.
- **The 14-day clock.** File it, timestamp it, track it. If the platform doesn't respond within 14 working days, PotongBalik generates the follow-up asserting the objection is deemed accepted, and escalates to a Kementerian UMKM complaint packet.
- **50% discount enrolment.** Checks whether the store qualifies for the mandatory domestic-product service-fee discount, walks them through NIB + SAPA UMKM self-declaration, and then *verifies the discount is actually being applied* to subsequent settlements — because it won't be, unless someone is watching.
- **Return/refund abuse flagging.** Surfaces returnless refunds and disputed returns where the seller was charged return shipping on non-defective goods — the Rp 6.5 juta scenario — and packages those for objection too.
- **WhatsApp digest.** Weekly: what they took, what we're claiming, what came back.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist, because the underlying documents are not machine-friendly and the reasoning is not a rules engine.

Three places AI does real work:

**Reading the fee schedules.** Shopee, Tokopedia and TikTok Shop publish their seller fee terms as prose across dozens of help-centre articles and PDF announcements, in Bahasa Indonesia, restructured every time they change. There is no clean machine-readable rate card. Extracting "as of 18 May 2026, category X, Star Seller, admin fee = N%, capped at Rp 650,000" from that sprawl — and versioning it by effective date — is a document-understanding problem that used to require a permanent analyst. That extracted, dated schedule is the asset the whole product stands on.

**Adjudicating the charge.** Deciding whether a given deduction is contractually grounded is not `if fee > expected`. It's: which schedule version was in force on the order date, does this fee category even apply to this store tier and product category, was the seller notified 90 days ahead as Permen UMKM 3/2026 now demands, did the seller opt into the programme this fee belongs to. That's judgement over messy evidence, and it's exactly what cheap long-context inference is now good enough — and cheap enough — to do per-order across tens of thousands of orders.

**Writing the objection.** The output has to be a formal, correctly-cited legal objection in Bahasa Indonesia that a platform's compliance team will act on rather than bin. Generating that, grounded in the specific order IDs and the specific regulation articles, at a cost that works inside a Rp 400K/mo subscription, is only viable now that inference is a fraction of a cent per document.

The seller-facing promise is a rupiah number and a filed document. The AI is the entire machinery between the settlement CSV and that document.

## 7. Localization angle

This is not a localized version of a global product. It is a product that **only exists inside Indonesian law**, and that is the point.

- **Regulatory:** the entire wedge is Permendag 19/2026 Art. 14 and Permen UMKM 3/2026. Neither has an analogue in the US or EU. The 14-working-day deemed-accepted rule is the specific mechanic that makes filing worth doing.
- **Language:** the fee schedules, the settlement reports and the objection letters are all Bahasa Indonesia. An English-first product is dead on arrival.
- **Pricing:** must work at UMKM wallets. Rp 199K–999K/mo, not $49–$249/mo. UMKM will pay a success fee on recovered money far more readily than a fixed subscription — culturally and economically, "you get paid when I get paid" lands.
- **Distribution:** Threads, X, seller WhatsApp/Telegram groups, and the local seller-education YouTube ecosystem. Not LinkedIn, not Product Hunt.
- **Rails:** QRIS/bank transfer, and the SAPA UMKM government portal for the discount enrolment.

The same regulatory shape may eventually appear elsewhere in SEA — Indonesia is the bellwether and Vietnam/Philippines regulators watch it — but that's the year-two question, not the wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Two-part, deliberately.
  - **Subscription:** Rp 299K/mo (~$18) for a single store up to Rp 250 juta/mo GMV; Rp 999K/mo (~$61) for multi-store / higher volume; agency tier Rp 4.9 juta/mo (~$300) for 10+ stores.
  - **Success fee:** **15% of recovered/reversed charges and of the first 6 months of the 50% discount we get switched on.** This is the part that closes deals — a seller who doesn't believe you costs nothing to onboard.
- **ACV:** Realistic blended ACV of **~$420/yr** — roughly $220 subscription + ~$200 average success fee, assuming a mid-size seller recovers a few million rupiah a year and enrols in the discount. Agencies run 5–8× that.
- **Rough math to $1M ARR:** ~2,400 paying stores at $420 blended ACV. Against a serviceable base of 150K–400K real UMKM sellers, that's under 1% penetration. Reachable.
- **Rough math to $5M ARR:** ~12,000 stores, *or* ~4,000 stores plus 300 agencies at ~$3,600/yr each, *or* the same seller base with a higher recovery rate as the fee-schedule corpus matures and the objections get more successful. The success fee is the expansion engine: every quarter the platforms change fees, and every change creates a new objection surface.
- **Expansion path:** More platforms (Lazada, Blibli). More claim types (return-shipping abuse, ad-spend disputes, promo cost-sharing). Then the natural adjacency — once you hold the ground truth on what every platform actually charges every store type, you're the only credible source for "which channel is actually profitable for me," which is a data product the agencies will pay real money for.

## 9. Go-to-market wedge — first 100 customers

The good news about this idea is that the angry customers have already self-identified in public.

1. **The Threads / X exit movement.** There is an active, named *"tinggalkan e-commerce"* conversation on Threads and X of sellers publicly announcing they're quitting the marketplaces over fees. These are people who have already done the emotional work of deciding they've been wronged. Scrape the posters over the last 90 days, DM each one a free audit of their own store: connect read-only, get back a single number — "Shopee took Rp X from you last quarter with no contractual basis." Expect a high reply rate from a list this pre-qualified. Convert on the audit, not on the pitch.

2. **The Media Konsumen / complaint-letter list.** Sellers who have publicly written up a specific grievance (the Rp 6.5 juta return-shipping case is one of many) are the hottest possible leads: they have a named amount, a named platform, and a documented refusal. Work the complaint archives, contact each writer, and offer to file the objection under the new regulation for a pure success fee. These convert into case studies, which is the real product for channel #1.

3. **Seller WhatsApp/Telegram groups and the seller-education YouTube tier.** Indonesian marketplace sellers organise in large WhatsApp groups and follow a small set of seller-education creators. Pay 3–5 of these creators to run a live "we audited my own store on camera" segment. The reveal — a real rupiah number pulled from the host's own settlement report — is the entire ad. This is the channel that scales past the first 100.

4. **The 50% discount as the door-opener.** Most eligible sellers do not know Permen UMKM 3/2026 entitles them to a ≥50% service-fee cut for selling domestic products, or that it requires SAPA UMKM self-declaration. Run this as free content and a free eligibility checker. It's a pure-value, zero-risk first touch that puts you in front of exactly the seller you want, and the natural next sentence is "while we were checking, we also noticed Rp 3.1 juta of charges you never agreed to."

5. **Agencies and brand consultants.** A few hundred agencies manage portfolios of UMKM stores. One agency sale = 10–40 stores. They have the volume to make the success fee material and the sophistication to understand the regulation immediately.

The first 100 is channel 1 + channel 2, run by hand, in about six weeks.

## 10. Build complexity — justification

**Medium.** The settlement/fee data comes in through Shopee Open Platform and the TikTok Shop / Tokopedia seller APIs plus statement exports — real integration work, three platforms, each with its own quirks, but well-trodden ground that the existing omnichannel tools have all walked. Standard web stack, standard auth.

The genuinely custom work is the **versioned fee-schedule corpus**: continuously ingesting each platform's help-centre articles and fee announcements, extracting the rate cards, and stamping them with effective dates so a charge can be adjudicated against the rules that were actually in force when the order was placed. That's a scraping-plus-extraction pipeline with a human in the loop for the first few months, and it is the thing that takes the build from six weeks to about four months. The objection drafting itself is comparatively easy — it's a templated legal document with AI-generated specifics.

Call it **12–16 weeks to a credible v1 for a pair**, one of whom needs to actually read Indonesian regulation carefully. Costs are low: inference is a fraction of a cent per document at 2026 prices, and the whole thing runs on off-the-shelf APIs.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | The product exercises a right the regulation explicitly grants sellers. Not legal *advice* — a document-preparation and filing tool, positioned carefully. Worth an Indonesian lawyer's review on the "are we practising law" line before launch. |
| Ethical — no harm / dark patterns | ✅ | Helps small sellers recover money they were charged without agreement. The success fee is transparent and only charged on money actually recovered. |
| Market exists (evidence above) | ✅ | Ministerial complaints "almost every day," a public seller-exit movement, 25–30% take rates, and two fresh regulations written specifically because this pain is real. |
| 1–5 person team can build this | ✅ | Two people, 12–16 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Three API integrations, an extraction pipeline, inference costs measured in cents. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **18/20** | Hair-on-fire. Sellers are abandoning their primary sales channel over this. A single disputed charge can be a month's profit (the Rp 6.5 juta case). Felt every settlement cycle — weekly or better. They would pay this week. Not a 19–20 only because the pain is chronic-and-endured rather than a hard deadline with a fine attached. |
| Demand evidence | 15 | **14/15** | Unusually strong. Minister of UMKM on record receiving complaints daily; two separate ministries wrote regulations in the same month; a named public exit movement; established brands publicly leaving; existing paid tools (BigSeller, Jubelio, iSeller at Rp 300K–2.16 juta/mo) prove sellers already pay for adjacent software. A skeptic nods. |
| Build feasibility | 15 | **11/15** | Three platform integrations plus a versioned fee-schedule extraction pipeline is real engineering — 12–16 weeks for a pair, not 6 weeks solo. Nothing is research-grade, but the fee corpus needs babysitting. |
| Distribution clarity | 15 | **13/15** | Named channels with named lists: the Threads/X exit posters, the Media Konsumen complaint archive, specific seller-education creators. The free-audit motion is concrete and the reveal is a rupiah number. Docked for uncertain conversion on cold DMs. |
| Revenue mechanics | 15 | **10/15** | Pricing is benchmarked (iSeller Rp 300K–2.16 juta/mo proves the band). But the model leans on a success fee whose size depends on recovery rates that are **currently unknown** — the regulation is six weeks old and nobody has a track record of platforms actually paying up. That's the single softest number in this proposal, and it's why this isn't an 80. |
| Time to first revenue | 10 | **8/10** | Pure-success-fee pilots can start the day the first objection lands, and the free-audit motion means no trial friction. But the first recovery has to actually clear before money moves — call it 6–10 weeks. |
| Defensibility | 10 | **3/10** | Honest answer: weak. The fee-schedule corpus and the accumulating record of which objection arguments actually work is a compounding asset, but it's an execution moat, not a real one. Jubelio or BigSeller could ship this in a quarter if they decided to — the only reason they won't is that they're partnered with the platforms they'd have to attack, and that reluctance is not a moat, it's a head start. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can build a resilient extraction pipeline against three hostile-ish platforms, and someone who can read Indonesian ministerial regulation precisely enough to write objections that hold up. Indonesian-market presence is non-negotiable — this is not a remote play.

### Key assumptions to validate (3–5)

1. **Assumption:** Platforms actually honour objections filed under Permendag 19/2026 — or, failing that, the deemed-accepted default has practical force and Kementerian UMKM escalation produces results. **How to test:** File 20 real objections by hand for 20 real sellers, for free. Measure: how many get a response inside 14 working days, how many result in an actual reversal, how many rupiah come back. This is the make-or-break experiment and it can be run in 4 weeks with zero code.
2. **Assumption:** A meaningful share of deductions genuinely lack contractual basis — i.e. there is real money to find, not just seller resentment. **How to test:** Hand-audit 15 stores' settlement reports against the dated fee schedules. Measure the recovered-rupiah-per-store. If the median store has less than ~Rp 1 juta/quarter of defensibly-objectionable charges, the success fee doesn't carry the model.
3. **Assumption:** Sellers will grant API/read access to their store accounts to a new tool they found in a DM. **How to test:** In the 20-seller pilot, count how many complete the connection versus how many go quiet at the OAuth screen. Indonesian SMB trust in unknown SaaS is not automatic.
4. **Assumption:** The 50% domestic-product discount actually gets enforced and applied (targeted July–Aug 2026, currently unproven). **How to test:** Enrol 10 eligible pilot sellers in SAPA UMKM and watch their next two settlement cycles for the discount actually landing.
5. **Assumption:** The platforms won't simply revoke API access for sellers using an objection tool. **How to test:** Read the API ToS carefully; ask a lawyer; and structure so that the core value works from a settlement-report CSV export as a fallback, not only from the API.

### Risk flags

1. **Platform retaliation / dependency:** This product's entire data supply comes from the APIs of the companies it exists to extract money from. Shopee can degrade, rate-limit, or revoke access, or simply change their ToS to prohibit this class of tool. **Mitigation: the product must work from a manually-exported settlement CSV from day one.** If it only works via API, the platforms have a kill switch and they will find it.
2. **Regulatory risk (in the unusual direction):** The whole wedge is two ministerial regulations that are six weeks and four weeks old respectively. Ministerial regulations in Indonesia can be revised, softened after platform lobbying, or simply not enforced. If Kemendag quietly waters down the deemed-accepted clause after industry pressure, the sharpest tooth is gone. Also watch for the regulations being harmonised/superseded — two ministries writing overlapping rules in the same month is not a stable equilibrium.
3. **Unproven recovery rate:** Nobody — including me — knows what percentage of objections actually results in money moving. The success-fee model is elegant precisely because it doesn't require knowing, but the *business's size* absolutely does. This is the number to go find before writing a line of code.
4. **The "practising law" line:** Preparing and filing legal objections on behalf of others, for a contingency fee, brushes against regulated legal practice. This needs an Indonesian lawyer's opinion early. Positioning as document-preparation software the seller files themselves is probably fine; positioning as "we represent you" is probably not.
5. **Incumbent fast-follow:** BigSeller already computes the settlement variance. The step from "here's the difference" to "here's the objection letter" is small for them. Their disincentive is their platform partnership — but a Jubelio or a new entrant with no such relationship has no such disincentive.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Indonesia-based technical pair; one strong integrations/pipeline engineer,
                        one who can read ministerial regulation and talk to sellers in their language.
                        Local presence mandatory.
Time to revenue:        6–10 weeks (success-fee pilots can start before the product is finished)
Capital to launch:      $10–20K (Rp 160–320 juta) — mostly two people's time plus modest inference/scraping costs
Top 3 assumptions to validate first:
  1. Platforms actually pay up on objections — file 20 by hand, for free, and count the rupiah that comes back
  2. There is real money in the settlement reports — hand-audit 15 stores, measure median objectionable rupiah/quarter
  3. Sellers will connect their store accounts to a stranger's tool — measure OAuth completion in the pilot
Kill criteria:
  - Abandon if <25% of 20 hand-filed objections produce either a platform response or a reversal within 14 working days
  - Abandon if the median audited store has <Rp 1 juta/quarter of defensibly-objectionable charges
  - Abandon if Shopee or TikTok Shop amends its API terms to prohibit third-party fee-dispute tooling AND
    the CSV-export fallback proves too lossy to adjudicate charges
  - Abandon if Kemendag revises away the 14-day deemed-accepted clause
```

## 15. Next step — 1-week validation sprint

The beautiful thing here is that the single most important question needs no code at all.

- **Day 1–2: Get the raw material.** Recruit 15 sellers from the Threads exit movement and the Media Konsumen complaint archive. Offer a free manual audit, no strings. Collect their Shopee/TikTok settlement report exports. In parallel, hand-build the dated fee schedule for the top 5 product categories on Shopee and TikTok Shop for Jan–Jul 2026 from the platforms' own announcements.

- **Day 3–4: Audit by hand.** Reconcile each of the 15 stores' deductions against the dated schedule. Produce, for each seller, one number: rupiah charged with no contractual basis, or applied without the 90-day notice Permen UMKM 3/2026 now requires. **Write down the median.** This is the number the entire business is built on.

- **Day 5: File.** Hand-draft and submit real written objections under Permendag 19/2026 Art. 14 for the sellers with the largest exposure. Start the 14-working-day clock and diarise it. (The result lands after the sprint, but starting it in week 1 means you have an answer in week 3 rather than week 8.)

- **Decide go / no-go on:** the median objectionable rupiah per store per quarter. **If the median store has <Rp 1 juta/quarter of defensible claim, stop** — the success fee can't carry the business and the subscription alone won't justify the build. If it's >Rp 3 juta/quarter, build immediately and don't wait for the objections to land, because the audit alone is a sellable product.

Falsifiable, cheap, and it kills the idea in five days if the money isn't there.
