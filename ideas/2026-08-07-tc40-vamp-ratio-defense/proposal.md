---
title: "AlertScrub — TC40 ratio scrubber for Visa CNP merchants"
slug: tc40-vamp-ratio-defense
date: 2026-08-07
category: FinTech / Global — Card-Not-Present Merchants ($5M–$80M Card Volume) Enrolled or Near-Enrolled in Visa's VAMP After the April 2026 Threshold Cut
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Fights the fraud alerts that raise your Visa ratio even after you refunded the customer."
tags:
  vertical: FinTech
  model: SaaS
  geography: Global
  secondary: [SMB, AI-agent, Compliance-driven, Payments, Solo-builder]
axes:
  problem: 18
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# AlertScrub

## 1. One-liner

Fights the fraud alerts that raise your Visa ratio even after you refunded the customer.

## 2. Trend signal — why now?

Three things happened in the last four months and they compound in a way almost nobody has priced in.

**One — Visa cut the ceiling by a third, overnight.** On April 1, 2026 the VAMP merchant "excessive" threshold dropped from 2.20% to 1.50% across the US, Canada, EU, APAC and LATAM. That is a 32% tightening in a single step with no phased ramp. The consequence is arithmetic, not strategy: a merchant sitting at 1.8% in March was compliant, and on April 2 — same volume, same dispute count, nothing changed operationally — was in violation and exposed to $8 per fraudulent-or-disputed transaction.

**Two — the metric that kills you is no longer the one your software fights.** The VAMP ratio is `(TC40 fraud reports + TC15 disputes) / settled CNP transactions`. TC40 is the report an *issuer* files when a cardholder says "I didn't authorize that." It is filed whether or not a chargeback ever follows. And since April 1, 2025, Visa reversed its earlier position: TC40s resolved through RDR or CDRN **still count** toward VAMP. Refund the customer, deflect via RDR, resolve it perfectly — the TC40 stays in your numerator. As one compliance write-up puts it flatly, the only mechanism that removes a TC40 after the fact is a successful representment under Compelling Evidence 3.0.

**Three — CE3.0 was extended to cover exactly this case, four months ago.** Effective April 18, 2026, Visa expanded Compelling Evidence 3.0 to cover "non-disputed fraud" — situations where an issuer files a TC40 but never files a corresponding TC15. Before that date, CE3.0 only bit when an actual chargeback existed. There was literally no route to contest a standalone TC40. Now there is, and it is fifteen weeks old.

Put those together and you get the gap. Every chargeback platform on the market — Chargeflow, Chargebacks911, Justt, Midigator — is built to win *chargebacks*, and most price as a cut of recovered revenue (Chargeflow: 25% of what it wins, nothing if it loses). A standalone TC40 has no recoverable revenue attached. There is nothing to win back. So under a revenue-share model, the incumbent earns exactly zero for fighting the single event type that is dragging the merchant toward account termination. The incentive is not slightly misaligned. It is absent.

Meanwhile the alert vendors are happily selling the wrong cure: roughly $29 per Ethoca alert and $15 per Visa RDR alert as of July 2026. Merchants are paying $15 a pop to auto-refund transactions, believing they are protecting their standing, while the TC40 those alerts are attached to sits in the numerator untouched.

Provenance:
  - Signal 1 (demand): VAMP merchant threshold cut from 2.20% to 1.50% effective April 1, 2026, with $8/transaction fees and MATCH-list/termination risk; merchants unchanged in behaviour became non-compliant overnight — https://merchantriskcouncil.org/learning/resource-center/member-news/blog/2026/stricter-vamp-ratio-thresholds-are-now-in-effect-heres-how-to-stay-compliant and https://beancount.io/blog/2026/07/17/visa-vamp-chargeback-threshold-drop-small-merchants-guide — 2026-08-07
  - Signal 2 (feasibility): CE3.0 expanded to cover non-disputed fraud (TC40 without TC15) effective April 18, 2026, creating a contest route that did not previously exist; required evidence is structured and machine-matchable (device ID, IP, shipping address, account ID, with IP or device ID mandatory) — https://chargebacks911.com/compelling-evidence-3-0-update-april-2026/ — 2026-08-07
  - Signal 3 (economic): Merchants already spend $15–$29 per alert on Verifi/Ethoca deflection that does not remove TC40s from the ratio; RDR/CDRN resolution stopped excluding TC40s from VAMP as of April 1, 2025 — https://solidgate.com/blog/visa-announces-new-change-to-vamp-rules/ and https://redo.com/resources/articles/comparisons/chargeback-alert-pricing — 2026-08-07
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents are optimised for the wrong denominator of their own business model.

Chargeback automation is a recovery business. Its unit of value is a won dispute, and its pricing — 15–25% of recovered revenue, or ~$10 flat per case worked — assumes there is money coming back. That model has worked for a decade because the merchant's pain and the vendor's revenue pointed the same direction: more wins, more recovered cash, more fees.

VAMP broke that alignment. The merchant's existential risk is now a *ratio*, and the fastest-growing input to that ratio is an event with zero recoverable revenue. A TC40 with no TC15 behind it costs the merchant nothing today in cash — the transaction may already be refunded — but it pushes the ratio toward 1.50%, and crossing 1.50% costs $8 on every fraud-or-dispute transaction plus, at the tail, account termination and a MATCH listing that makes replacement processing extremely hard to obtain.

So the merchant desperately wants these fought. The vendor gets paid nothing to fight them. Nobody fights them.

What a focused team does 10× better: build the product whose unit of value is **a TC40 removed from the numerator**, price it per removal, and let the customer's metric and your invoice be the same number. That is not a feature the incumbents can bolt on casually — it inverts their pricing model. Chargeflow cannot charge 25% of zero.

The second thing done better is *visibility*. TC40 data is notoriously hard for merchants to see. Merchants typically do not receive TC40 reports unless enrolled in Visa's INFORM program or working with a processor that shares the data proactively, and most acquirers do not offer real-time access. Merchants are being judged monthly on a number they cannot independently compute. Handing them a live, correct ratio — before the processor's warning letter arrives — is a wedge on its own.

## 4. Target market

- **Primary customer:** Head of Payments, Director of Risk, or a hands-on CFO/COO at a card-not-present merchant doing roughly $5M–$80M in annual card volume. Subscription commerce, digital goods, supplements/nutra, ticketing, gaming top-ups, DTC with heavy promotional cadence, travel OTAs. Typically 20–300 staff. Geography: US first, then UK/EU and APAC — VAMP thresholds apply identically across those regions, so the product is not geographically bounded.
- **Why they buy:** Because the enforcement floor is 1,500 combined fraud-and-dispute events in a single month, and a merchant generating that has real volume and a real payments person whose job is this number. They buy the week their acquirer sends a warning letter, or the month they watch the ratio cross 1.2% and realise the buffer is gone. The pain is not abstract: $8 per fraud-or-disputed transaction at excessive tier, on top of existing chargeback fees, and above that the risk that a terminated merchant struggles to find a new processor because acquirers check violation history before approval.
- **Rough TAM reasoning:** The addressable set is merchants at or near the 1,500-events/month enforcement trigger. At a 1.0–1.5% event rate that implies roughly 100,000–150,000 settled CNP transactions a month — call it $3M–$10M+ monthly volume at typical AOVs, or the low tens of thousands of merchants globally in the Visa CNP footprint across US/CA/EU/APAC/LATAM. High-risk MCC concentration means the near-threshold subset is disproportionately large. I do not need a big share: 400 merchants at $1,000/mo blended is $4.8M ARR.
- **Why now for them:** The threshold moved under their feet on April 1, 2026 and the contest route for standalone TC40s opened on April 18, 2026. A merchant who did nothing is now materially closer to enforcement than they were in Q1, and the tool that fixes it has existed for fifteen weeks.

## 5. Product sketch (MVP)

- **Live VAMP ratio, computed independently.** Pull TC40 and TC15 data via the processor/acquirer feed or INFORM enrolment, compute the ratio the way Visa computes it — CNP-only in the denominator, TC40+TC15 in the numerator — and show it daily against the 1.50% line and the 1,500-event enforcement trigger.
- **Double-count detection.** Flag transactions that appear as both a TC40 and a subsequent TC15, which count twice in the numerator. Merchants routinely do not know this is happening to them.
- **CE3.0 eligibility screening on every TC40.** For each incoming fraud report, automatically check whether the cardholder has prior undisputed transactions in the 120-day history window and whether two matching data elements exist — with at least one being IP address or device ID, as Visa requires.
- **Auto-assembled representment packets.** For eligible TC40s, build and submit the CE3.0 evidence package: matched device ID/fingerprint, IP, shipping address, account/login ID, prior transaction history. This is the action that actually removes the TC40 from the numerator.
- **Ratio forecast.** Given current run-rate and pending items, project the ratio 30/60/90 days out and show the date the merchant crosses 1.50% if nothing changes. Payments leads need this to justify budget internally.
- **Alert-spend audit.** Show the merchant which of their Ethoca/RDR alert spend bought them nothing on the VAMP ratio. This is uncomfortable, specific, and sells the product by itself.
- **Root-cause slice.** Break TC40 volume by SKU, campaign, billing descriptor, subscription tier and geography, so the merchant can fix the upstream cause rather than only contest downstream.
- **Grace-period tracker.** First-time violations in a rolling 12-month window get a three-month grace period before enrollment. Knowing exactly where you sit in that window changes what you do this month.

## 6. AI angle — what's load-bearing

Remove the AI and this becomes a dashboard, which is not a business.

The load-bearing work is **identity matching under ambiguity across a merchant's own transaction history.** CE3.0 requires two matching data elements between the disputed transaction and prior undisputed ones, at least one being IP or device ID. In clean textbook data that is a SQL join. In real merchant data it is not: device fingerprints rotate, IPs are dynamic or carrier-NATed or VPN'd, shipping addresses are free-text and inconsistently formatted ("Apt 4B" vs "#4B" vs "Unit 4B"), account IDs fork across guest checkout and registered login, and the same human appears under three email addresses. Deciding whether two records are the same person to a standard that will survive an issuer's review is a fuzzy-matching and judgment problem, and doing it at a scale of thousands of TC40s a month is not something a payments analyst does by hand.

Second load-bearing piece: **eligibility triage.** Submitting weak representments is not free — it burns operational capacity and, done systematically, erodes credibility with the issuer. The model has to decide which TC40s are genuinely winnable versus which are real fraud that should be conceded and fixed upstream. Getting that call right is the difference between a product that improves the ratio and one that generates noise.

Third: **narrative assembly.** The evidence package is not just fields; it is a case. Turning a fragmented order/session/fulfilment record into a coherent, issuer-readable account of "this cardholder has bought from us four times, from this device, at this IP, shipped to this address, and never disputed" is generation work with a hard factual constraint — every claim must be traceable to a record, because a fabricated element is worse than no submission.

None of that is a chatbot on a form. Take the model out and the merchant is back to manual review of thousands of alerts, which is exactly why nobody does it today.

## 7. Localization angle (if any)

`N/A — this is a global play.` VAMP thresholds apply on identical terms across US, Canada, EU, APAC and LATAM as of April 1, 2026, and the underlying rails (TC40/TC15 reporting, CE3.0, Order Insight) are Visa-global, not country-specific. The product's constraint is processor/acquirer data access, not language or payment rails. Sell in English to payments teams anywhere. If anything, the *second* market is Mastercard's equivalent monitoring programme rather than a different country.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Two-part. A platform fee of $499–$1,499/mo depending on transaction volume, covering live ratio monitoring, forecasting and root-cause analytics. Plus $12–$18 per successfully removed TC40 — priced deliberately just under the $15 RDR alert and well under the $29 Ethoca alert the merchant already pays for outcomes that do *not* touch the ratio. Charge only on removal. If the TC40 stays in the numerator, the merchant pays nothing for it.
- **Why this pricing works:** The comparison is not "another SaaS subscription." It is against $8 per fraud-or-disputed transaction at excessive tier, and against a $15–$29 alert spend the merchant is already making with strictly worse ratio outcomes. A merchant with 1,500 events/month who removes even 15% of TC40s buys meaningful ratio headroom for low four figures a month.
- **ACV:** Blended $12,000/year. A small merchant near the enforcement floor lands around $8K; a $50M-volume subscription merchant with heavy TC40 flow lands $25K–$40K.
- **Rough math to $1M ARR:** 85 customers × $1,000/mo × 12 = $1.02M. At the 1,500-events/month enforcement floor there are far more than 85 qualifying merchants in the US alone.
- **Rough math to $5M ARR:** ~400 customers at a $12K blended ACV, which requires two things to be true: (a) the per-removal component grows with merchant volume rather than staying flat, and (b) the product expands beyond Visa/VAMP into Mastercard's monitoring programme, roughly doubling the addressable event volume per customer. Neither is exotic; both are year-two work.
- **Expansion path:** Per-removal volume scales naturally with the customer's growth. Then: Mastercard programme coverage, multi-MID/multi-entity rollups for merchants running several processors, and an agency/ISO tier where payment consultants and high-risk ISOs resell to their book.

## 9. Go-to-market wedge — first 100 customers

- **The free ratio audit, sold on the number they cannot see.** Merchants generally cannot get real-time TC40 visibility without INFORM enrolment or a cooperative processor. Offer a one-week read-only audit: connect the processor feed, return their true VAMP ratio, their double-counted transactions, their CE3.0-eligible TC40 backlog, and the date they cross 1.50% at current run-rate. That last number is the close. Nobody who sees a dated cliff in their own data does nothing about it.
- **High-risk ISO and payment-consultant channel.** The people who already know which merchants got warning letters are the ISOs, payment consultants and merchant-account brokers serving high-risk MCCs. They currently have nothing useful to offer a client sliding toward VAMP except "reduce your chargebacks," which does not address TC40s at all. Sign 8–10 as referral partners on a rev-share. They have the list, the trust, and an active reason to make the call. This is the highest-yield channel and it should be first.
- **Merchant Risk Council and the payments-ops community.** MRC is where exactly this buyer congregates and it has been publishing on the April 2026 threshold change. Attend, and publish one genuinely useful artefact: a plain-English teardown of which deflection tools do and do not remove TC40s from VAMP, with the RDR reversal spelled out. Most merchants still believe RDR protects their ratio. Being the party that corrects that misconception, with sources, is worth more than any amount of generic content.
- **Target the alert-vendor customer base directly.** Anyone buying Ethoca or RDR alerts is by definition volume-qualified, ratio-aware, and already spending $15–$29 per event. They are pre-sold on the problem and mispriced on the solution. Outbound to that segment with a single subject line — "your RDR alerts are not removing your TC40s" — is specific, true, and verifiable by the recipient in about ten minutes.
- **Post-warning-letter interception.** Merchants who receive a processor VAMP warning letter enter a three-month grace period. That is a hard deadline with a known clock, and it is the single highest-intent moment in this market. Content and paid search targeted at "VAMP warning letter," "VAMP threshold," "TC40 remove" — low volume, extremely high intent, cheap.

## 10. Build complexity — justification

**Medium.** The analytics, ratio computation, forecasting and dashboard layer is standard web work — a pair ships it in 6–8 weeks. The real cost sits in two places. First, **data access**: TC40/TC15 ingestion varies by processor and acquirer, and some merchants will need INFORM enrolment or a cooperative acquirer relationship. Expect meaningful per-processor integration work and start with the two or three processors most common in the target segment rather than building a universal connector. Second, **CE3.0 submission mechanics** — assembling and filing representments correctly, through Order Insight or the acquirer's path, with evidence that survives issuer review. That requires domain knowledge more than engineering heroics, and it is where a domain advisor from the chargeback world is worth more than an extra engineer. Realistic v1 for two people: 3–4 months. No custom models needed; matching and packet generation run on off-the-shelf APIs.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Contesting fraud reports through Visa's own sanctioned CE3.0 framework. No regulatory approval needed; the merchant is exercising an existing right. |
| Ethical — no harm / dark patterns | ✅ | Every submitted element must be traceable to a real record. The product concedes genuine fraud and routes it to upstream fixes rather than contesting it — that is the honest position and also the commercially correct one. |
| Market exists (evidence above) | ✅ | Enforcement live since October 2025, threshold cut April 2026, merchants already spending $15–$29/alert on adjacent tooling. |
| 1–5 person team can build this | ✅ | Two builders plus a chargeback-domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Main costs are inference and integration time. No capex, no licensing, no float. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Genuinely hair-on-fire at the top of the range: $8/transaction fees, account termination, MATCH listing that blocks replacement processing. Not 19–20 only because merchants below the 1,500-event floor feel it as future risk rather than present bleeding, which narrows the acutely-desperate segment. |
| Demand evidence | 15 | 12/15 | Strong structural evidence — threshold cut, enforcement live, existing $15–$29/alert spend proving willingness to pay for ratio outcomes. Held below 13 because I could not source verbatim merchant complaints; the evidence is industry/vendor publications and rule changes, not merchants in their own words. That gap is the first thing to close. |
| Build feasibility | 15 | 11/15 | Analytics layer is easy. Processor data access and correct CE3.0 submission are the real work and are integration-heavy and partner-dependent. 3–4 months for a pair, not 6 weeks. |
| Distribution clarity | 15 | 12/15 | The ISO/consultant channel and the alert-vendor customer base are both named, reachable and pre-qualified, and the warning-letter moment is a known high-intent trigger. Short of 13–15 because there is no clean scrapeable directory of "merchants near 1.5%" — that information sits with processors, so the channel runs through partners rather than direct list-building. |
| Revenue mechanics | 15 | 12/15 | Pricing is benchmarked against a real, adjacent, already-paid spend ($15 RDR / $29 Ethoca), and pay-per-removal aligns invoice to outcome. The assumption carrying weight is the removal rate — if only a small fraction of TC40s are CE3.0-eligible, the variable component underdelivers and the platform fee has to carry more than I have modelled. |
| Time to first revenue | 8 | 8/10 | The free audit converts fast because it surfaces a dated cliff in the customer's own data, but the CE3.0 submission machinery must work before anyone pays the per-removal fee. 8–10 weeks to first dollar, not 4. |
| Defensibility | 10 | 4/10 | Honestly weak, and I am not dressing it up. The rules are public, the evidence fields are published, and a funded incumbent could build this. What protects you is pricing-model inversion — Chargeflow cannot charge 25% of a zero-recovery event without rebuilding its commercial model — plus accumulated processor integrations and a matching corpus that improves with volume. That is a head start, not a moat. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs someone who can do fuzzy identity matching properly *and* someone who has actually filed representments. If the team has only the first, the product will compute a beautiful ratio and lose every case. Bring in a chargeback-operations advisor before writing the submission logic, not after.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of standalone TC40s — call it 15%+ — are CE3.0-eligible, i.e. the cardholder has prior undisputed transactions in the 120-day window with two matchable elements including IP or device ID. **How to test:** Get read-only historical data from 3–5 friendly merchants and compute the eligibility rate directly. This is a spreadsheet exercise on real data and it decides whether the per-removal pricing works at all. Do it first.
2. **Assumption:** CE3.0 representments against non-disputed TC40s actually get accepted and actually remove the item from the VAMP numerator in practice, not just per the rulebook. **How to test:** Run 30–50 submissions through a cooperative acquirer and measure the acceptance rate and the ratio movement. The April 18, 2026 expansion is fifteen weeks old — the operational reality may not yet match the published rule, and this is the single biggest technical risk in the idea.
3. **Assumption:** Merchants can get us TC40 data at usable frequency. **How to test:** Ask 10 target merchants what their processor gives them and how often. If most cannot obtain TC40 data without a fight, the product has an access problem before it has a product problem.
4. **Assumption:** Payments leads will pay a platform fee for visibility even before removals start landing. **How to test:** Offer the audit, then ask for $499/mo to keep it live. If nobody pays for the monitoring alone, the business rests entirely on the variable fee and the model gets thinner.
5. **Assumption:** ISOs and payment consultants will refer rather than build. **How to test:** Pitch 10; count how many sign a rev-share versus how many ask how it works in suspicious detail.

### Risk flags

1. **Rule-change risk — severe and asymmetric.** This entire product exists because of two Visa policy decisions: that RDR-resolved TC40s count toward VAMP, and that CE3.0 covers non-disputed fraud. Visa has already reversed itself once on the first point. If Visa restores TC40 exclusion for RDR-resolved items, the core problem evaporates overnight and the product becomes a reporting tool. This is not a tail risk; it is the defining risk. Build the ratio-analytics layer so it retains standalone value if the representment business disappears.
2. **Platform dependency.** Single-network, single-programme, dependent on processor and acquirer cooperation for data. Three separate chokepoints, none of which you control.
3. **Incumbent response.** Chargeflow, Justt and Chargebacks911 all have the domain knowledge and the merchant relationships. Their obstacle is commercial, not technical — a revenue-share model cannot price a zero-recovery event. They will eventually add a flat-fee TC40 tier. The window is measured in quarters, not years, and the correct response is speed plus locking in the ISO channel early.
4. **Market timing on the enforcement floor.** The 1,500-events/month trigger means smaller merchants feel this as anxiety rather than invoices. If enforcement stays concentrated at high volume, the addressable set is narrower than a naive count of CNP merchants suggests. Model the pipeline off merchants near the floor, not off the total merchant population.
5. **Evidence integrity.** The temptation to loosen matching thresholds to raise removal counts — and therefore revenue — is structural, because you are paid per removal. That is a straight line to submitting weak or misleading representments. Set the eligibility bar conservatively and hold it; the pricing model quietly pushes the other way.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder comfortable with fuzzy entity matching and
                        payments data, paired with a chargeback-operations domain advisor
                        who has filed representments. Solo technical founder without the
                        domain half will build the wrong product convincingly.
Time to revenue:        8–10 weeks (audit converts early; per-removal fee waits on
                        working CE3.0 submission)
Capital to launch:      $15–25K (₹12–20L) — inference, processor integration time,
                        domain advisor
Top 3 assumptions to validate first:
  1. CE3.0 eligibility rate on real standalone TC40 data — pull historical data from
     3–5 merchants and compute it. If it lands under ~10%, the per-removal model is
     dead and the whole thing is a monitoring tool.
  2. Representments against non-disputed TC40s are accepted in practice and do move
     the numerator — run 30–50 live submissions through a cooperative acquirer.
  3. TC40 data is obtainable at usable frequency — survey 10 merchants on what their
     processor actually provides.
Kill criteria:
  - Abandon if CE3.0 eligibility on real TC40 samples is below 10% across 3+ merchants.
  - Abandon if fewer than 30% of submitted non-disputed-TC40 representments are accepted
    after 50 attempts.
  - Abandon if Visa restores TC40 exclusion for RDR/CDRN-resolved items — the problem
    disappears and so does the product.
  - Abandon if fewer than 3 of 15 audited merchants convert to a paid platform fee.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Get read-only TC40/TC15 history from 3–5 merchants in the target band. Warm intros through payment consultants; offer the ratio audit free and permanently. Compute their true VAMP ratio and — the actual output of this sprint — the **CE3.0 eligibility rate**: what share of standalone TC40s have a prior undisputed transaction within 120 days sharing two matchable elements including IP or device ID. This number decides the business.
- **Day 3–4:** Take the eligibility findings back to those same merchants with a specific claim: "X% of your TC40s are contestable, worth Y basis points off your ratio, here is your projected 1.50% crossing date." Ask for $499/mo to keep the monitoring live and a per-removal commitment. In parallel, pitch 10 ISOs and payment consultants on referral rev-share and count signatures.
- **Day 5:** Decide on three falsifiable numbers. **Go** if: eligibility rate ≥15% across at least 3 merchants, ≥3 of the audited merchants verbally commit to a paid platform fee, and ≥3 of 10 ISOs sign a referral agreement. **No-go** if eligibility is under 10% — at that rate the per-removal fee cannot carry the business and the remaining product is a dashboard, which is not worth four months.

The eligibility rate is the falsifiable core. Everything else in this proposal is downstream of one measurable percentage that can be computed in two days on real data. Measure it before writing a line of production code.
