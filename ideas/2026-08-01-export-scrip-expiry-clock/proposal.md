---
title: "ScripClock — expiry clock for Indian export incentives"
slug: export-scrip-expiry-clock
date: 2026-08-01
category: TradeTech / India
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Tracks every RoDTEP credit your exports earned and shouts before the one-year window quietly burns it."
tags:
  vertical: TradeTech
  model: SaaS
  geography: India
  secondary: [SMB, Compliance-driven, AI-agent, Multilingual, Solo-builder]
axes:
  problem: 16
  demand: 11
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# ScripClock

## 1. One-liner

Tracks every RoDTEP credit your exports earned and shouts before the one-year window quietly burns it.

## 2. Trend signal — why now?

Three things moved in the last eight months, and together they turned a filing annoyance into a money-on-fire problem.

**The clocks got teeth and nobody rebuilt their process around them.** RoDTEP has two independent one-year deadlines, and most exporters only know about one. First: scrips can be generated from approved scrolls within one year of the shipping bill date or scroll generation date, whichever is later. Second: once generated, an e-scrip is valid for one year from the date of generation on ICEGATE, and must be used against basic customs duty or transferred to another IEC holder inside that window. The critical detail is that the second clock starts at scrip generation, not at the shipping bill — so the two windows are staggered per shipment, and there is no single screen anywhere that shows both. **Scrips that expire unused cannot be revalidated.** No appeal, no grace, no revalidation. The money simply stops existing.

The failure mode is already documented in the trade press, and it is not exotic: *"Some exporters stop after scroll generation and never create the e-scrip ledger, leaving credits idle."* That is the entire product thesis in one sentence. The scroll appears in ICEGATE, the exporter assumes the benefit is banked, and the clock runs out on an amount they already earned.

**eBRC became a GST-linked instrument on 13 January 2026.** DGFT Public Notice No. 42 dated 9 January 2026 made GSTIN, GST Invoice Number and GST Invoice Date mandatory fields in the eBRC. Previously GSTIN was buried inside address fields and invoice details were optional or reference-based. This sounds like a bank's problem. It isn't. It forces exporters to track realisation at the **invoice level rather than the shipping-bill level**, and it means the whole chain — GST invoice → shipping bill → inward remittance → eBRC → scheme claim — now has to tie at a granularity most exporters have never maintained. The sequence is unforgiving: SB filed at ICEGATE, SWIFT credit received, IRM linked on EDPMS, e-BRC uploaded to DGFT, *then* the scheme claim. Any out-of-sequence claim burns processing cycles and delays scrip issuance — which pushes shipments closer to the expiry cliff.

**The pot got smaller, so leakage hurts more.** The FY2026-27 RoDTEP budget allocation is ₹10,000 crore, down sharply from ₹18,233 crore. Rates run 0.5%–4% of FOB value depending on HS code. When the scheme was generous, sloppiness was survivable. At half the allocation with rate caps restored after a 50% cut, every basis point an exporter fails to convert into cash is a visible dent in a thin margin.

Layer on the structural context: MSME-related exports were ₹9,52,023 crore in April–September FY2025-26. And the working-capital sensitivity is measured, not assumed — Deloitte India's GST@9 survey found nearly 89% of MSMEs want automatic interest on delayed GST refunds, because slow money forces them to borrow. These are businesses that feel a locked-up lakh.

Provenance:
  - Signal 1 (demand): Documented failure mode — exporters stop after scroll generation, never create the e-scrip ledger, leaving credits idle; scrips expire unused and cannot be revalidated — https://afleo.com/rodtep-scheme/ — 2026-08-01
  - Signal 2 (feasibility/regulatory): DGFT Public Notice No. 42 (09-Jan-2026) made GSTIN, GST invoice number and date mandatory in eBRC w.e.f. 13-Jan-2026, forcing invoice-level export reconciliation — https://www.caindelhiindia.com/blog/mandatory-gst-invoice-details-in-ebrc-w-e-f-13-01-2026/ — 2026-08-01
  - Signal 3 (economic): RoDTEP FY2026-27 allocation cut to ₹10,000 crore from ₹18,233 crore; scrips trade at a discount to face value and rates run 0.5–4% of FOB — https://eximpe.com/blog/b2b/rodtep-scheme-in-2026-meaning-rates-claim-process-practical-guide-for-exporters — 2026-08-01
  - Supporting: Five documented reconciliation breakages in the SB→eBRC→EDPMS chain, including consolidated remittance mis-tagging by FIFO and claims filed before eBRC upload — https://www.terra-insight.com/insights/e-brc-electronic-bank-realisation-certificate-textile-export/ — 2026-08-01
  - Supporting: EDPMS shipping bills open >2 years trigger automatic caution-listing, blocking packing credit and future incentives — https://razorpay.com/blog/rbi-circular-on-export-realisation/ — 2026-08-01
  Category: Regulatory arbitrage

## 3. The opportunity

The gap is not "exporters can't file." Filing is solved — the CHA files the shipping bill, the declaration goes in, the scroll eventually appears. The gap is that **nobody owns the clock after the scroll**.

Look at how the responsibility is actually distributed. The CHA's job ends when the shipping bill is filed correctly; they are paid per consignment and have zero economic interest in what happens twelve months later. The AD bank's job is the IRM and the eBRC upload; they are indifferent to whether the exporter converts a scroll into a scrip. The CA or DGFT consultant handles claims when asked, on a per-engagement basis — they are reactive, not monitoring. And ICEGATE and the DGFT portal are two separate government systems that each show you a fragment of the picture with no expiry countdown and no cross-linkage to your GST invoices.

So you have a five-party chain — exporter, CHA, AD bank, consultant, two government portals — where **the only party with money at risk is the one with the least visibility**. The exporter sees a scroll amount and assumes it's banked. It isn't. It's a claim with a fuse.

The 10× is not better filing. It is **a single ledger that knows, per shipping bill, exactly which of the five stages you're stuck at, how many days until each of the two clocks expires, and what specific action unsticks it.** Incumbents in this space are consultants who bill for the work, or ERP modules priced for companies with a finance team. Nobody sells a cheap, always-on watchdog to the ₹5–50 crore exporter who has one person doing accounts, GST, and export documentation simultaneously.

The reason this is a real business and not a feature: the chain breaks in five specific, recurring, *diagnosable* ways. Consolidated remittances where the buyer nets multiple invoices into one payment and the AD bank auto-tags by FIFO instead of correct shipment mapping. Short-realisation misclassified as write-off rather than routed to a receivables dispute. Exchange rate confusion — exporters using the bank TT-buying rate instead of the customs rate when computing the scheme amount. Claims filed before the banker uploads the eBRC, which parks them in the DGFT queue. EPCG authorisations with the wrong eBRCs tagged, leaving one authorisation under-fulfilled and triggering customs duty foregone plus 15% interest. Each of these has a signature you can detect from documents the exporter already has.

## 4. Target market

- **Primary customer:** The proprietor or the single "export executive" at Indian merchant exporters and manufacturer-exporters doing roughly ₹5 crore to ₹75 crore of annual export turnover — engineering goods, textiles and made-ups, chemicals, pharma intermediates, marine, leather. Concentrated in Tiruppur, Surat, Ludhiana, Rajkot, Morbi, Noida, Bhiwandi, Coimbatore, Kanpur. The buyer is one of two people: the owner himself, or the person whose entire job is "documentation."

- **Why they buy:** Because the alternative is finding out in month thirteen. The pain isn't filling a form — it's the phone call where the CA says the window closed on shipments from last March and there is no revalidation. On ₹20 crore of exports at a 1.5% average RoDTEP rate, that's ₹30 lakh of annual entitlement; letting even 8% of it lapse or sit unconverted is ₹2.4 lakh gone, against a subscription costing a fraction of that. The second, sharper fear is caution-listing: if a shipping bill stays open in EDPMS for more than two years without a bank/RBI extension, the exporter is automatically flagged as a caution-listed defaulter. That means increased scrutiny on every future transaction, difficulty getting packing credit, and delays or denials on incentives and GST refunds. Losing packing credit doesn't dent margin — it stops the business.

- **Rough TAM reasoning:** MSME-related exports ran ₹9,52,023 crore in April–September FY2025-26. I'm not going to invent an exporter headcount I can't source — the DGFT active-IEC number wasn't verifiable in my research, and I'd rather show a hole than fabricate. But the shape of the market is defensible from the spend side: at 0.5–4% RoDTEP rates against that base, the annual entitlement flowing to MSME exporters is measured in thousands of crores, and the scheme allocation alone is ₹10,000 crore for FY2026-27. A tool that protects even a slice of that has an obvious price umbrella. Realistically I need a few thousand paying accounts to build a ₹8–10 crore ARR business, and the cluster geography means they're physically findable.

- **Why now for them:** The 13 January 2026 eBRC change forced invoice-level reconciliation on people who were reconciling at shipping-bill level. Their existing process is now structurally insufficient, and they know it — they just don't know what to do about it. That's the opening.

## 5. Product sketch (MVP)

- **The clock board.** Every shipping bill as a row, with two countdowns: days until scrip-generation expiry, and days until scrip-utilisation expiry. Sorted by what dies first. This is the whole product in one screen and it's the screen nobody has.
- **Stage detection.** For each shipment, which of the five stages you're actually at — SB filed, remittance received, IRM linked on EDPMS, eBRC on DGFT, scheme claim filed, scrip generated, scrip utilised — and the specific blocker at the stuck stage.
- **The invoice-level tie-out.** Matches GST invoices to shipping bills to inward remittances to eBRCs, in the granularity Public Notice 42 now demands. Flags the consolidated-remittance FIFO mis-tag, the short-realisation misclassification, and the customs-rate-vs-TT-rate discrepancy.
- **Idle-credit alarm.** Scrolls that were approved but never converted into an e-scrip ledger entry. Named plainly, in rupees, with a countdown. This is the single highest-value alert in the product.
- **EDPMS ageing and caution-list warning.** Open shipping bills approaching the two-year mark, with a flag at the point where the exporter still has time to ask the AD bank for an extension.
- **Out-of-sequence guard.** Warns before a scheme claim is filed ahead of the eBRC upload, so the claim doesn't sit in the DGFT queue burning cycles.
- **The Monday WhatsApp.** One message every week to the owner: what's expiring in 30/60/90 days, in rupees, in English or the regional language. Not a dashboard invitation — the actual numbers in the message.
- **Banker-chase pack.** A pre-written, per-shipment email to the AD bank branch with the exact IRM/eBRC detail needed, because "follow up with your bank" is the standard advice and nobody does it well.

## 6. AI angle — what's load-bearing

Strip the AI out and this becomes a spreadsheet with a date column — which is exactly the thing exporters already fail to maintain. Three places where the model is doing real work:

**Document extraction across a genuinely ugly corpus.** Shipping bills, bank IRM advices, SWIFT MT-103 messages, GST invoices in whatever format the exporter's Tally spits out, DGFT portal screenshots. Different layouts per bank, per CHA, per customer. Getting a reliable invoice→SB→IRM→eBRC linkage out of this pile is the actual technical work, and it's the thing that stopped anyone from building this cheaply five years ago.

**Fuzzy reconciliation on the consolidated remittance.** When a buyer nets six invoices into one wire and the bank auto-tags them FIFO, correctly reassigning that payment to the right shipments requires reasoning over amounts, dates, currencies, partial payments, short-realisation deductions, and buyer naming inconsistencies. This is not a join. It's the case where deterministic matching fails and the whole chain silently breaks — and it's breakage #1 on the documented list.

**Diagnosis, not detection.** Anyone can compute "this is 340 days old." The value is "this scroll never became a scrip because your eBRC was uploaded after you filed the claim, so it's queued at DGFT — here is the email to send your branch manager." Mapping an observed document state to the specific cause and the specific unblocking action is where the model earns the subscription.

There's a supporting claim I should be honest about: a platform-reconciliation vendor cites a match-rate improvement from 51% to 88% on the SB-to-eBRC-to-EDPMS chain versus manual. It's a vendor number on their own marketing page, so I'm treating it as directional evidence that manual matching is bad, not as a benchmark to promise against.

## 7. Localization angle

This is India-only by construction, and that's the point rather than a limitation. RoDTEP, eBRC, EDPMS, ICEGATE, DGFT, IEC, caution-listing — none of these concepts port anywhere. A global trade-finance platform cannot serve this customer without rebuilding the entire domain model, and the market is too small for them to bother.

Concretely local:

- **Pricing.** ₹4,000–₹15,000/month works where $200–$700 does not. The customer thinks in lakhs of protected entitlement against a monthly number in thousands of rupees, and that ratio is obvious to them.
- **Language.** The Monday alert needs to land in Gujarati in Morbi, Tamil in Tiruppur, Punjabi in Ludhiana. Not the UI — the *alert*. The owner reads the WhatsApp; the executive uses the dashboard.
- **Channel.** WhatsApp is the notification layer, non-negotiable. Email alerts get ignored.
- **Distribution.** Export Promotion Councils, cluster associations, and the CHA/CA network are the real go-to-market, and they only exist as a channel in this market.
- **The regulatory moat is the localization.** Knowing that the utilisation clock starts at scrip generation and not at the shipping bill is the kind of detail that takes a foreign entrant a year to learn and a local operator a week.

## 8. Business model — path to ₹1M–$5M ARR

- **Pricing:** Three tiers by export turnover, billed annually with a monthly option.
  - Starter — ₹3,999/mo — up to ₹10 crore annual export turnover, single IEC
  - Growth — ₹8,999/mo — up to ₹50 crore, multi-branch, banker-chase pack, WhatsApp alerts to 3 people
  - Pro — ₹17,999/mo — above ₹50 crore, multiple IECs, EPCG authorisation tracking, CA seat access
- **ACV:** Blended ~₹95,000 ($1,100). Skews to Growth, which is where the cluster exporters sit.
- **Math to ₹8.5 crore (~$1M) ARR:** ~900 customers at blended ₹95K. Achievable inside one vertical-plus-geography slice — Tiruppur textiles plus Rajkot/Morbi engineering and ceramics would get most of the way.
- **Math to $5M ARR (~₹42 crore):** ~3,500–4,000 accounts, which requires going multi-scheme and multi-channel: adding duty drawback, EPCG fulfilment tracking, Advance Authorisation, and RoSCTL, plus a white-label tier sold through CA firms and CHAs who manage 30–80 exporter clients each. The channel tier is the realistic lever, not direct sales at that count.
- **Expansion path:** Start at one IEC and RoDTEP-only. Expand on three axes — additional schemes (drawback, EPCG, Advance Authorisation each add a distinct clock), additional IECs and group companies, and seats for the CA and the CHA. A scrip-marketplace referral fee is the obvious fourth leg, since scrips trade at a discount to face value and an exporter sitting on an expiring scrip needs a buyer fast — but I'd keep that out of v1 rather than take on brokerage.

Margin is clean SaaS: document extraction is the only meaningful variable cost and it's a few hundred rupees per account per month at realistic shipment volumes.

## 9. Go-to-market wedge — first 100 customers

- **The free expiry audit, run on their own data.** The wedge is a one-page PDF: "₹4.7 lakh of your RoDTEP entitlement expires in the next 90 days, across 23 shipping bills." Exporters can pull their own scroll and shipment data from ICEGATE; the ask is a 20-minute screen-share or a data export, and the output is a rupee number with a date. This converts because it's not a demo — it's a finding about their money. Run 200 of these to get the first 60 customers.
- **Cluster associations, in person, one district at a time.** Tiruppur Exporters' Association, the Rajkot and Morbi engineering and ceramic bodies, Ludhiana knitwear, Surat textiles. These bodies run member meetings, and a 15-minute slot titled "the two RoDTEP deadlines most members are missing" fills a room. One association endorsement is worth more than any amount of digital spend to this buyer. Target 6 associations in the first six months.
- **CA and CHA partner channel with revenue share.** Every one of these exporters already pays a CA and a CHA. Neither is monitoring expiry, and both look good bringing this to a client. Recruit 25 firms with a 20% recurring share; a firm with 40 export clients converting 10 is 400 accounts across the channel. This is the lever that gets past 100 and toward 1,000.
- **Cold outreach on public shipment data.** Indian export shipment data is commercially available by IEC, HS code and port. Filter to exporters in target HS codes with RoDTEP-eligible rates and consistent shipment volume, send a personalised WhatsApp with an estimated annual entitlement figure and the two-clock explanation. Personalised rupee figure in the first line, not a pitch.
- **Ride the eBRC change while it's fresh.** Public Notice 42 is recent enough that "what the 13 January eBRC change means for your RoDTEP claims" is a talk, a WhatsApp-group post, and a webinar that people actually attend. Regulatory changes are the cheapest attention in B2B, and this window closes.

## 10. Build complexity — justification

**Medium.** The clock logic, the stage state machine, and the alerting are straightforward — a competent pair builds that in six weeks. The complexity is concentrated in two places: reliable extraction and linkage across messy multi-source documents (bank IRM advices and SWIFT messages vary by bank; GST invoice exports vary by accounting package), and the absence of clean official APIs, which means data arrives by exporter upload and portal export rather than a tidy integration. Budget 14–18 weeks to a v1 that a paying customer trusts with their money, most of it spent on the reconciliation engine and on validating the diagnosis logic against real broken cases. No custom models needed — off-the-shelf document AI plus domain rules.

The non-obvious risk on build is that you need a real exporter's document set before you can build anything credible. Get design partners before writing code.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only monitoring and reconciliation of the customer's own documents. Not filing on their behalf in v1, so no DGFT intermediary licensing question. |
| Ethical — no harm / dark patterns | ✅ | Helps exporters claim money they legitimately earned within statutory windows. No incentive to overstate entitlement — the product should be conservative in its estimates by design. |
| Market exists (evidence above) | ✅ | Dated regulatory change (PN 42, 13-Jan-2026), documented failure mode (idle scrolls, non-revalidable expiry), measurable economic stake (₹10,000 cr allocation, 0.5–4% of FOB). |
| 1–5 person team can build this | ✅ | Two engineers plus a domain person who has actually filed these claims. The domain person is not optional. |
| Launchable with <$50K / ₹40L | ✅ | Realistically ₹12–18 lakh: two engineers for four months, a part-time EXIM consultant, document AI spend, and travel to three clusters. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money, hard deadline, no revalidation, plus a caution-listing tail risk that threatens packing credit. Held back from 18+ because the pain is *periodic and invisible* rather than daily — the exporter doesn't feel it until it's already gone, which is exactly what makes it a hard sell and a great product. |
| Demand evidence | 15 | 11/15 | Strong regulatory and economic signals with dates and figures. Docked because I could not source verbatim exporter complaints — the trade forums I found were guides and consultant marketing, not raw customer voice. That's a real gap and the validation sprint has to close it. |
| Build feasibility | 15 | 11/15 | Clock and state-machine logic is easy; multi-source document reconciliation is not, and there's no clean API. 14–18 weeks for a pair, which is solidly in "doable but requires discipline." |
| Distribution clarity | 15 | 12/15 | Named clusters, named associations, an existing CA/CHA channel with aligned incentives, and a free-audit wedge that produces a rupee number. Conversion rates are unproven, which is the only thing keeping this out of 13+. |
| Revenue mechanics | 15 | 11/15 | Pricing is anchored to a protected-rupees ratio the customer understands instantly. ~900 accounts to $1M is credible. $5M needs the partner channel to work, which is an assumption, not a fact. |
| Time to first revenue | 10 | 8/10 | The free audit can pre-sell before the product is finished — you can find expiring money with a spreadsheet and sell the monitoring. Realistically 8–10 weeks to first paid. |
| Defensibility | 10 | 6/10 | Soft moat: accumulated diagnosis rules for the five breakage patterns, per-bank document quirks, cluster brand, and switching cost once the ledger holds two years of history. Copyable by a determined local competitor in 9–12 months. Not defensible against a serious EXIM software incumbent deciding to ship this — the bet is that they won't, because the segment is too small for their sales motion. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This is not a product a generalist ships. Someone on the founding team needs to have personally chased a bank branch for an eBRC, or you will build the wrong reconciliation logic and lose credibility in the first customer meeting. It's also a feet-on-the-ground sale — cluster associations and CA firms are relationship channels, not funnels.

### Key assumptions to validate

1. **Assumption:** A meaningful share of mid-size exporters actually have expiring or idle entitlement right now — I'm inferring this from a documented failure mode, not from measured incidence. **How to test:** Run the free expiry audit on 25 real exporters across three clusters and record what percentage have any expiring or unconverted amount, and the median rupee value. If the median is under ₹50,000, the pricing collapses.
2. **Assumption:** The owner, not the CA, is the buyer and will pay a subscription rather than a success fee. **How to test:** Offer both to the first 25 audited exporters. If more than half insist on contingency pricing, the business model is a services firm, not SaaS.
3. **Assumption:** Exporters will hand over shipping bills, bank advices and GST invoices to a new vendor. **How to test:** Track drop-off in the audit funnel specifically at the document-request step. Above 50% drop-off there and the whole GTM needs rethinking.
4. **Assumption:** CA and CHA firms will actively resell rather than just tolerate the product. **How to test:** Sign 5 firms on revenue share and measure referrals per firm in 60 days. Fewer than 2 each means the channel is passive and the $5M path breaks.
5. **Assumption:** Document extraction is reliable enough across bank formats to be trusted with money decisions. **How to test:** Build the reconciliation against 200 real documents from 5 different AD banks before selling anything, and measure the false-negative rate on known-broken cases.

### Risk flags

1. **Regulatory risk (high, and cuts both ways):** RoDTEP is extended to 30 September 2026 by notification. If it lapses or is restructured, the primary use case changes shape overnight. Mitigation is to be multi-scheme early — drawback, EPCG and Advance Authorisation each carry their own clocks and aren't going anywhere — so the product is "export incentive clocks," not "the RoDTEP product." Conversely, continued regulatory churn is a tailwind: every change creates a fresh reason to buy.
2. **Data-access dependency:** There's no clean official API. The product depends on exporter uploads and portal exports, which is fragile and creates onboarding friction. If DGFT or ICEGATE changes portal formats, ingestion breaks.
3. **Incumbent encroachment:** EXIM software vendors and trade-finance fintechs already touch this data. Any of them could add an expiry countdown as a feature. The defence is depth of diagnosis and speed into the clusters, not technology.
4. **Buyer-attention risk:** This is money the exporter never sees on a P&L as a loss — an unclaimed entitlement doesn't show up as a line item the way a penalty does. Selling against invisible loss is materially harder than selling against a bill, and it's the main reason I scored problem intensity 16 and not 19.
5. **Services gravity:** The free-audit wedge is a consulting motion. There's a real risk the business drifts into a claims-filing services firm with better margins per hour and no scalability. That has to be a deliberate decision, not a drift.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical pair with an EXIM/DGFT domain co-founder who has personally
                        filed RoDTEP claims and chased AD banks for eBRCs. Comfortable with
                        in-person cluster selling in Tiruppur / Rajkot / Ludhiana.
Time to revenue:        8–10 weeks (pre-sell on free expiry audits before v1 ships)
Capital to launch:      ₹12–18 lakh ($14–21K)
Top 3 assumptions to validate first:
  1. Incidence and size of expiring/idle entitlement — run free audits on 25 real exporters
     across 3 clusters, record median rupee value at risk
  2. Subscription vs contingency — offer both to the same 25, see which they choose
  3. Document handover willingness — measure funnel drop-off at the document-request step
Kill criteria:
  - Abandon if median at-risk entitlement across 25 audited exporters is under ₹50,000/year
    (pricing has no room)
  - Abandon if >50% of audited exporters refuse to share shipping bills and bank advices
    (no data, no product)
  - Abandon if >60% of interested exporters insist on success-fee pricing
    (this is a services business, not SaaS — walk away or accept that)
  - Abandon if an EXIM incumbent ships a two-clock expiry tracker before your v1
```

## 15. Next step — 1-week validation sprint

The sprint has one job: find out whether the money is actually expiring, and how much. Everything else is secondary.

- **Day 1–2 — Build the manual audit.** No product. A spreadsheet that takes a shipment list plus scroll data and computes both clocks per shipping bill. Get one friendly exporter to hand over 12 months of data and run it. The output must be a single number: rupees at risk in the next 90 days. If you can't produce that number from real data in two days, the product premise is wrong.
- **Day 3–4 — Run it on 12 more exporters.** Two clusters, in person if possible. Tiruppur and Rajkot. Show each one their own number. Record three things per exporter: the rupee value at risk, whether they already knew, and what they say in the ten seconds after they see it. Those ten seconds are the whole research finding. This also closes the customer-voice gap that cost this idea points on demand evidence.
- **Day 5 — Price test and decide.** Go back to everyone with a non-zero number and ask for ₹8,999/mo, annual, card on file, product in 10 weeks. Not "would you pay" — an actual ask.

**Falsifiable outcome:** Of 13 exporters audited, at least 7 must show ≥₹1,00,000 of entitlement expiring or idle within 12 months, **and** at least 3 must commit money on Day 5. Fewer than 3 commitments means the pain is real but not urgent enough to sell against, and the idea drops to VALIDATE until the eBRC change bites harder.
