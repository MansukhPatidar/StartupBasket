---
title: "DutyBack — duty-refund reclaimer for small importers"
slug: import-duty-refund-recovery
date: 2026-07-05
category: TradeTech / US Small & DTC Importers (IEEPA tariff refund + duty recovery)
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Reconstructs which entries a small DTC brand overpaid IEEPA duty on and files the CAPE claim to get the cash back."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, AI-agent, SMB, Deadline-driven, Contingency-billing]
axes:
  problem: 17
  demand: 13
  build: 10
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# DutyBack — duty-refund reclaimer for small importers

## 1. One-liner

Reconstructs which entries a small DTC brand overpaid IEEPA duty on and files the CAPE claim to get the cash back.

## 2. Trend signal — why now?

Three things collided in the last twelve months, and the window has a hard deadline.

**The IEEPA tariffs got struck down and CBP built a refund pipe.** The Court ruled against the IEEPA tariffs; CBP launched **CAPE** (Consolidated Administration and Processing of Entries) on **April 20, 2026** as the mechanism to claim refunds. CBP has collected roughly **$166B** in IEEPA duties; Phase 1 has accepted claims covering ~$90B, with ~$23B already approved for refund. Enormous money is in motion and most of it hasn't been claimed yet.

**De minimis died, so a whole class of merchants who never touched customs now has a paper trail of overpaid duty.** The $800 de minimis exemption was suspended for China May 2025, globally August 29, 2025, and is permanently repealed. Every parcel now requires a formal entry with duty paid. DTC brands that "built their entire fulfillment strategy around the duty-free threshold" (Shopify/Dedola/Passport all say this in near-identical words) suddenly paid IEEPA duty on hundreds of small shipments — and are owed some of it back.

**The incumbents openly admit they can't serve the small end.** From an incumbent's own blog: "the economics of CAPE often do not work for occasional importers, small DTC brands, or merchants whose IEEPA exposure is spread thinly across many low-value entries." And the killer structural gap: on DDP shipments "the carrier's brokerage is the IOR, not the merchant… merchants generally do not have legal standing to file a CAPE declaration directly, even when they absorbed the cost through DDP pricing." The people who paid the tariff literally can't file for it without help.

Provenance:
  - Signal 1 (demand): Incumbents state CAPE economics "do not work for occasional importers, small DTC brands, or merchants whose IEEPA exposure is spread thinly across many low-value entries"; DDP merchants "do not have legal standing to file a CAPE declaration directly" — https://zonos.com/ieepa-tariff-refunds-cape , https://flavorcloud.com/blog/ieepa-tariff-refunds-and-cape-declarations-what-importers-need-to-know-in-2026 — 2026-07-05
  - Signal 2 (feasibility): CBP launched CAPE April 20, 2026 — refund filing is a CSV of up to 9,999 entries per declaration, all electronic; refunds now issued electronically as of Feb 2026 — https://www.cbp.gov/trade/programs-administration/trade-remedies/ieepa-duty-refunds , https://www.whiteandwilliams.com/resources-alerts-IEEPA-Tariff-Refunds-CBP-Launches-CAPE-Process — 2026-07-05
  - Signal 3 (economic): ~$166B IEEPA duties collected, ~$90B in Phase 1 claims accepted, ~$23B approved; broader duty-refund market has an estimated $50B/yr left unclaimed and legacy providers "won't take clients unless they have at least $100,000 in annual refund potential" — https://www.morganlewis.com/pubs/2026/06/tariff-refund-battle-continues-government-appeals-order , https://gingercontrol.com/blog/duty-drawback-for-dummies — 2026-07-05
  Category: Regulatory arbitrage

## 3. The opportunity

There's a one-time flood of refundable duty ($166B, most unclaimed) with a **hard deadline** (protective protests / CIT complaints must land before ~end of January 2027 for the earliest entries, or the refund right can be waived on liquidation). The refund *mechanism* CBP built — a CSV of entries uploaded to ACE — is mechanically simple. But it's gated behind three things a small DTC founder does not have:

1. **A reconstruction of which entries they actually paid IEEPA duty on.** DDP merchants aren't the Importer of Record; the duty is buried in carrier and commercial invoices spread across hundreds of small shipments. Nobody hands them a clean list.
2. **A standing/pathway determination.** Own-ACE filing vs. getting the broker-of-record to file/assign vs. a protective protest before liquidation — different entries need different routes, and getting it wrong forfeits the money.
3. **An ACE/CAPE filing capability.** ACE onboarding "is built with licensed customs brokers and high-volume importers in mind," and existing contingency shops charge like ~$200 first entry + $125 per additional entry — which is insane for someone with 400 tiny entries.

Incumbents (Flexport, Zonos, UPS, the drawback shops) serve importers where *they* are the IOR or the account is big enough. The stranded merchant — DDP, sub-$300K duty, entries spread thin — is the exact customer everyone's pricing model rejects. DutyBack is built for that person: AI reconstructs the entry list from their messy invoice pile, classifies which refund pathway each entry needs, batches them into one CAPE declaration (or a protective protest before the deadline), and files through a licensed-broker partner. Paid on found money.

## 4. Target market

- **Primary customer:** US-based DTC / Shopify / Amazon brand founders and their ops person, importing physical goods (apparel, accessories, home, beauty, gadgets) primarily from China/Asia, roughly $500K–$15M revenue, who paid IEEPA duty on many small DDP shipments in 2025–2026 and have between ~$10K and ~$300K of refundable duty spread across dozens-to-hundreds of entries.
- **Why they buy:** "I know I paid these tariffs, everyone says there are refunds, but my broker says my account's too small / I shipped DDP so I'm not even the importer of record, and I have no idea which of my 300 shipments qualify or how to file before the deadline." It's real cash they're owed, on a clock, with no obvious path.
- **Rough TAM reasoning:** Hundreds of thousands of US e-commerce sellers import from Asia. Even a conservative slice — say 50,000–150,000 brands with meaningful IEEPA exposure that's too small for a trade lawyer but too large to ignore — at an average recoverable ~$25K each is billions in refundable duty sitting with exactly the customer incumbents won't touch. We only need a few thousand of them.
- **Why now for them:** The CAPE process is live *now* (April 2026), Phase 3 (finally-liquidated entries) requires a filed CIT complaint, and the earliest deadlines start expiring ~January 2027. This is a use-it-or-lose-it window. Urgency is manufactured by the government, not by us.

## 5. Product sketch (MVP)

- **Invoice/entry ingest:** Upload the pile — carrier invoices, commercial invoices, CBP 7501s if they have them, ACE statements, broker statements, a CSV export from ShipStation/Flexport/Passport. Forward-your-email inbox works too.
- **IEEPA duty reconstruction:** AI reads the mess and reconstructs a per-entry ledger: entry number (or flags where it's missing), date, IEEPA duty paid, current liquidation status, and refundable amount. This is the load-bearing step nobody else does for the small merchant.
- **Refund estimate up front:** "You have ~$41,300 refundable across 214 entries. ~$28K is Phase 1 (file now), ~$13K needs a protective protest before Nov 2026." A concrete number before they commit.
- **Pathway router:** Each entry tagged with its filing route — own-ACE CAPE, broker-of-record assignment needed (with a pre-drafted request to that broker), or protective protest to preserve the right before liquidation.
- **CAPE declaration builder:** Assembles the CBP-format CSV (up to 9,999 entries per declaration) ready for upload, or files it through our licensed-broker partner under a limited POA.
- **Deadline radar:** Tracks each entry's liquidation date and the CIT complaint clock; nags before any right is about to lapse.
- **Status tracking:** Once filed, shows where each claim sits (accepted / under review / approved / paid) so the founder isn't emailing CBP into the void.

## 6. AI angle — what's load-bearing

Remove the AI and this is a $500/hr trade-law engagement that ignores anyone under $100K in refunds — which is exactly why the small merchant is stranded. The AI does the expensive human work: reading a chaotic, inconsistent pile of carrier invoices and commercial invoices from a merchant who was **never the importer of record**, and reconstructing a defensible per-entry duty ledger — matching shipments to entries, isolating the IEEPA line from Section 301/MPF/base duty, inferring entry numbers where the merchant never saw them, and flagging what needs to be pulled from the broker. Then it reasons over each entry's liquidation status and the phased CAPE rules to route it to the right filing pathway before a deadline. That reconstruction-plus-routing is the entire product; without it there's nothing to file.

## 7. Localization angle (if any)

N/A — this is a US-specific regulatory play. The value is entirely CBP/CAPE/CIT process knowledge. There's a distant analog (any country that issues bulk duty refunds), but the wedge, the deadline, and the money are US. Localization is not the lever here; the deadline is.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Contingency on the wedge — **15–20% of duty actually refunded**, no upfront fee (matches how the merchant thinks about "free money" and removes the "is this worth it" objection). Optional flat "reconstruction + estimate" report at $199 for DIY-ers, credited against contingency if they proceed.
- **ACV:** At an average ~$25K recovered per customer and 18% contingency, that's ~$4,500 per customer — collected once, on payout.
- **Rough math to $1M ARR:** ~225 successful recoveries at ~$4,500 net. Given the deadline urgency and a market of tens of thousands of stranded merchants, a few hundred closed claims in the refund window is very reachable — this is the *land*.
- **Rough math to $5M ARR:** The IEEPA one-time flood is the beachhead, not the business. The **expand** is the recurring post-de-minimis world: every one of these brands now imports formally forever and keeps overpaying via wrong HTS classification, missed duty drawback on returns/re-exports, and first-sale/Ch.98 opportunities. Convert the one-time refund customer into an ongoing "duty-overpayment sweep" subscription ($99–$299/mo) plus drawback contingency. 5M = a few thousand refund customers landed in 2026, a meaningful slice retained on recurring recovery through 2027+.
- **Expansion path:** One-time IEEPA refund → recurring classification-overpayment monitoring → duty drawback on exports/returns → managed filing. ACV climbs from "one payout" to "annuity."

## 9. Go-to-market wedge — first 100 customers

- **Ride the deadline in the exact forums where the panic already is.** r/ecommerce, r/FulfillmentByAmazon, r/shopify, and DTC Slack/Discord communities are full of "de minimis killed my margins / do I get tariff refunds?" threads *right now*. Post a free **IEEPA Refund Estimator** (upload invoices → instant refundable number). The number is the hook; the filing is the upsell. Answer the existing threads with the tool.
- **3PL and freight-forwarder partnerships.** The forwarders who onboarded these DDP merchants (Passport, Dedola-tier, mid-size 3PLs) have the client list and the invoice data but not a small-account refund product — they *turn these merchants away*. Revenue-share referral: they send us the sub-threshold accounts they can't serve.
- **Shopify/Amazon-adjacent ops agencies and fractional-CFO/bookkeeping firms** serving DTC brands. They see the duty line hitting their clients' P&L and want a "we found you $30K" win to bring their client. Referral fee.
- **Cold outreach to identifiable importers.** Import manifest data (bill-of-lading records) is public; filter for small consignees shipping from Asia, send a personalized "we estimate you're owed ~$X, deadline is Y" email with a one-click estimate. Deadline + a dollar figure is a strong open.

## 10. Build complexity — justification

Medium. The ingest + reconstruction (document AI over invoices, entry-ledger assembly) and the CAPE CSV builder are off-the-shelf-model work on a standard web stack — a small team ships a credible v1 in ~3–4 months. The genuinely hard, non-code parts are (a) encoding the phased CAPE / liquidation / protest rules correctly (domain expertise, and the rules are still moving with the litigation), and (b) the licensed-customs-broker partnership required to actually file. That partnership plus the compliance discipline is why this is Medium, not Low — but none of it needs custom models or capex.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Filing legitimate refund claims via a licensed-broker partner / limited POA. Must not offer legal advice; stay on the process/filing side. |
| Ethical — no harm / dark patterns | ✅ | Recovering money the merchant is legally owed. Contingency = aligned incentives. Must be honest about estimates. |
| Market exists (evidence above) | ✅ | $166B collected, ~$50B/yr broader unclaimed, incumbents openly refusing the small end. |
| 1–5 person team can build this | ✅ | Ingest + builder is standard; needs one domain advisor and one broker partner. |
| Launchable with <$50K / ₹40L | ✅ | Software + a broker revenue-share. No inventory, no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Real cash owed, on a hard government deadline, with no path for the target customer. Hair-on-fire once they see the number. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: $166B collected/mostly unclaimed, incumbents explicitly refusing small/DDP merchants, live forum panic. Skeptic nods. |
| Build feasibility | 15 | 10/15 | Ingest + CSV builder is standard, but phased-rules encoding and the broker-filing partnership add real work and moving-target risk. |
| Distribution clarity | 15 | 12/15 | Named forums mid-panic, forwarder referral lists, public manifest data, a dollar-figure hook. Conversion on contingency should be high. |
| Revenue mechanics | 15 | 12/15 | Contingency on found money is a proven, easy-yes model; ACV solid. Recurring-expansion path exists but is the assumption to prove. |
| Time to first revenue | 10 | 8/10 | Deadline pulls demand forward; but revenue lands only when CBP actually pays (60–90 days post-acceptance), so cash lags the close. |
| Defensibility | 10 | 5/10 | Execution + reconstruction-workflow + broker relationships. IEEPA flood is time-boxed; Flexport/Zonos could move down-market. Moat is the small-account niche and recurring expansion, not the one-time event. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

Needs someone who genuinely understands CBP entry/liquidation/CAPE/drawback mechanics (or a co-founder/advisor who does) paired with a builder who can do document-AI reconstruction. A licensed customs broker in the cap table or as a filing partner is close to mandatory.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful population of DTC merchants has $10K–$300K refundable and no viable path today. **How to test:** Run the free estimator against 30 real merchants' invoice piles; measure the distribution of refundable amounts and how many already have a filing route.
2. **Assumption:** The reconstruction is doable at acceptable accuracy from carrier/commercial invoices when the merchant is *not* the IOR and lacks entry numbers. **How to test:** Manually reconstruct 10 merchants' entry ledgers; measure how often we can recover/verify entry numbers and isolate the IEEPA line.
3. **Assumption:** A licensed-broker partner will file batched small-account CAPE declarations under a revenue-share. **How to test:** Get one signed LOI with a broker before building.
4. **Assumption:** Merchants accept a 15–20% contingency for money they'd otherwise leave on the table. **How to test:** 20 pricing conversations; measure close rate at 18%.
5. **Assumption:** The one-time customer can be retained on recurring overpayment/drawback recovery. **How to test:** Offer the recurring sweep to the first 15 refund customers; measure attach rate.

### Risk flags

1. **Regulatory/litigation risk (high):** The IEEPA refund rules are *still being litigated* — the government has appealed the refund order, CBP has reversed positions (CAPE→CAPE-to-Cope), and pathways/deadlines can shift. Build must track this weekly; a bad ruling could shrink the refundable pool.
2. **Standing / broker dependency:** For DDP merchants without IOR standing, filing may require the broker-of-record's cooperation or a protest — an execution dependency partly outside our control. The whole product hinges on solving standing cleanly.
3. **Time-boxed core event:** The IEEPA flood is one-time with a ~Jan 2027 deadline. If the recurring-expansion thesis (classification + drawback) doesn't convert, this is a great 12-month business, not a durable one. That's the real bet.
4. **Incumbent move-down:** Flexport/Zonos already have refund tooling and the merchant relationships; if they cheaply automate the small-account long tail, the window closes. Speed matters.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical builder + customs/trade domain expert (or licensed-broker co-founder)
Time to revenue:        First close in weeks (deadline-driven); cash on CBP payout ~60–90 days after filing
Capital to launch:      ₹8–15 lakh / $10–18K (software + domain advisor + broker revenue-share)
Top 3 assumptions to validate first:
  1. Refundable amounts are large enough and un-served — run the free estimator on 30 real invoice piles
  2. Reconstruction works from non-IOR invoices — hand-build 10 entry ledgers, measure accuracy
  3. A licensed broker will file small-account batches on revenue-share — sign one LOI before building
Kill criteria:
  - Abandon if <30% of 30 estimator runs surface >$10K refundable with no existing filing path
  - Abandon if no licensed-broker partner will file batched small accounts within 6 weeks of outreach
  - Abandon if a final adverse IEEPA ruling collapses the refundable pool before launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the throwaway "IEEPA Refund Estimator" — upload invoices, AI reconstructs a rough refundable number and entry count. Doesn't file anything; just produces the hook number.
- **Day 3–4:** Get it in front of 30 real DTC importers via r/ecommerce, r/FulfillmentByAmazon, and two DTC Slack communities. Have them run their actual invoice piles. Record: how much refundable, do they already have a path, would they pay 18% to get it.
- **Day 5:** Decide go / no-go on this falsifiable bar — **at least 10 of 30 surface >$10K refundable with no existing filing route, AND at least 5 verbally commit to 18% contingency, AND at least one licensed broker agrees in principle to file batched small accounts.** Miss it, and the small-account whitespace is a mirage.
