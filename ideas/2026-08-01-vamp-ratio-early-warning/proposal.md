---
title: "RatioMeter — VAMP threshold gauge for online merchants"
slug: vamp-ratio-early-warning
date: 2026-08-01
category: FinTech / Global
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Shows a merchant the Visa ratio that gets them terminated, weeks before their acquirer picks up the phone."
tags:
  vertical: FinTech
  model: SaaS
  geography: Global
  secondary: [SMB, Compliance-driven, AI-agent, Solo-builder, Payments]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# RatioMeter

## 1. One-liner

Shows a merchant the Visa ratio that gets them terminated, weeks before their acquirer picks up the phone.

## 2. Trend signal — why now?

Visa rewrote the rules of merchant survival in 2026 and most small merchants have no idea.

On **1 April 2026**, Visa's Acquirer Monitoring Program (VAMP) compressed the merchant "Excessive" threshold from 2.20% to **1.50%** — a 32% cut — and merged what used to be two separate programs (fraud monitoring and dispute monitoring) into a single combined ratio. Merchants crossing it pay **$8 per disputed or fraudulent transaction**, applied monthly, **with no warning tier**. Full enforcement lands **1 October 2026** — two months from today. ([Corgi Labs](https://www.corgilabs.ai/insights/vamp-2026-merchant-compliance), [cside](https://cside.com/blog/vamp-2026-merchant-playbook))

The formula is the part that quietly kills people: the numerator is **TC40 fraud reports + TC15 disputes**, and the denominator is **card-not-present settled transactions only**. One disputed transaction generates both a fraud report and a chargeback — **it hits the ratio twice**. A merchant doing 60,000 monthly transactions could previously absorb 1,320 combined incidents; now the ceiling is 900. ([Corgi Labs](https://www.corgilabs.ai/insights/vamp-2026-merchant-compliance))

Here's the kicker, and it's the whole business: **merchants cannot see the TC40 half of their own numerator.** Banks are under no obligation to notify a merchant when a transaction lands in a TC40 or SAFE report. Merchants can't pull TC40s themselves — they depend entirely on their acquirer to share the data, and acquirers rarely do. As one payments write-up puts it, companies "may face penalties for fraud exposure they were completely unaware of." ([ChargebackGurus](https://www.chargebackgurus.com/blog/faq-fraud-monitoring-with-tc40-and-safe), [Corepay](https://corepay.net/articles/merchants-need-to-know-about-tc40-safe-data-to-avoid-fraud-surprises/))

Meanwhile the numerator is growing on its own. Nearly **half of consumers (49.79%) have already used generative AI tools like ChatGPT to help with a return or refund claim** — and merchants report facing well-constructed disputes from people who a year ago would have filed a generic "item not as described" complaint. The AI is coaching the fraud. ([Riskified 2026 returns report](https://www.riskified.com/resources/guide/ecommerce-return-abuse-2026/))

And acquirers have every incentive to shoot first. Acquirer-level portfolio thresholds sit at 0.50% and 0.70% — far tighter than the merchant's 1.50% — so acquirers "have strong financial incentive to proactively restrict or offboard merchants whose individual ratios threaten portfolio compliance." Small merchants get terminated not for breaching their own limit but for polluting someone else's average. Terminated for cause means MATCH listing, and MATCH is a **five-year** industry-wide blacklist that every standard processor checks at underwriting. ([Corgi Labs](https://www.corgilabs.ai/insights/vamp-2026-merchant-compliance), [SeamlessChex](https://www.seamlesschex.com/blog/vamp-compliance-for-high-risk-merchants-2026-guide), [HL Hunt](https://www.hlhunt.org/uncategorized/payment-processor-shut-down-your-account-why-it-happens-and-the-best-alternatives-2026-hl-hunt/))

```
Provenance:
  - Signal 1 (Demand): Shopify merchants describing systematic dispute losses and total
    blindness into what their bank is doing — "we lose all the chargebacks that come across
    our way", "$3200" lost "although the evidence is clear as day" —
    https://community.shopify.com/t/why-are-we-losing-all-chargeback-disputes-even-with-good-customer-service/187858
    — observed 2026-08-01 (thread active 2023–2024, still the top result for the query)
  - Signal 2 (Feasibility): Verifi RDR now supports up to ten self-serve customizable rules
    per BIN/CAID with seven decision attributes each, and resellers/merchants can modify
    decisioning rules without engaging Verifi client support — the deflection lever became
    programmable — https://www.verifi.com/rdr-decision-api-faq/ — observed 2026-08-01
  - Signal 3 (Economic): VAMP merchant Excessive threshold cut 2.20% → 1.50% on 1 Apr 2026,
    $8/transaction fines with no warning tier, full enforcement 1 Oct 2026; acquirer
    portfolio thresholds at 0.50%/0.70% push offboarding downhill onto small merchants —
    https://www.corgilabs.ai/insights/vamp-2026-merchant-compliance — observed 2026-08-01
  Category: Regulatory arbitrage
```

## 3. The opportunity

The chargeback industry has spent fifteen years building tools to **win disputes after they happen**. Chargeflow takes 25% of recovered funds. Chargebacks911 wants $1,000/month per feature on a two-year contract. Justt and Riskified serve enterprise volumes. Every one of them is optimizing **recovered revenue**. ([Chargeflow](https://www.chargeflow.io/blog/chargeflow-vs-chargebacks911-which-chargeback-solution-for-your-business), [Beast Insights](https://beastinsights.com/alternatives/chargebacks911))

That was the right metric until 1 April 2026. It isn't anymore.

Winning a representment gets your money back. It does **not** reliably scrub the event from your ratio — the TC40 fraud report was filed by the issuer the moment the cardholder cried fraud, and it sits in your numerator regardless of whether you later prove the shipment was delivered. (Visa carved out an exception — successfully resolved TC40 fraud disputes stop counting toward VAMP — but that carve-out only rewards merchants who know the TC40 exists in time to act on it, which is precisely the data merchants cannot see. ([Chargebacks911](https://chargebacks911.com/prevent-chargebacks/prevent-visa-disputes/visa-compelling-evidence-3-0/)))

So the small merchant is playing a game where:
1. The score that determines whether they keep their business is **partially invisible to them**.
2. The tools they can afford optimize a **different number** (dollars recovered) than the one that kills them (ratio).
3. The tools that *do* move the ratio — Verifi RDR, Ethoca alerts, Order Insight — are sold at **$30–40 per alert** with **$500–$2,000 setup fees**, packaged for merchants with a payments team. ([Chargeblast](https://www.chargeblast.com/blog/chargeback-alert-integration-verifi-vs-ethoca-cost-analysis), [Beast Insights](https://beastinsights.com/blog/chargeback-alerts))

The gap is not "help me win disputes." It's **"tell me where my ratio is, tell me where it's heading, and tell me the cheapest three actions this week that pull it back under 1.5%."**

Nobody sells that to a merchant doing $200K–$3M/year in card-not-present volume. That merchant is big enough to get terminated and too small to be worth an enterprise sales call.

**What a focused team does 10× better:** incumbents are paid on recovered dollars, which structurally biases them toward fighting expensive disputes and ignoring cheap ones. But a $19 dispute and a $900 dispute damage the ratio **identically** — the denominator doesn't care about ticket size. A ratio-first product will tell a merchant to *refund* the $19 dispute instantly via a deflection rule and *fight* the $900 one. An incumbent taking 25% of recoveries has no reason to ever tell you that.

## 4. Target market

- **Primary customer:** Owner or head of ops at a **card-not-present ecommerce or subscription business doing $200K–$3M/year in CNP volume** — DTC brands, supplement and nutra sellers, digital products, SaaS with consumer billing, subscription boxes. US, UK, EU, Australia. Team of 2–20. They use Stripe, Shopify Payments, Braintree, or a high-risk acquirer. No dedicated payments or risk hire.
- **Why they buy:** Not for the money back. For the **existential threat**. Stripe's own excessive-dispute threshold is 0.75% — half of Visa's — and Stripe will hold a portion of funds for months over disputes. ([Chargeback.io](https://www.chargeback.io/blog/stripe-chargeback-rate)) The merchant's actual fear, in their words, is what happens when the processor goes quiet: *"Payment processor shut down your account"* is a search query with an entire content industry built around it. Once you're on MATCH, "every standard processor checks MATCH at underwriting, making a listing an automatic decline nearly everywhere for five years." ([HL Hunt](https://www.hlhunt.org/uncategorized/payment-processor-shut-down-your-account-why-it-happens-and-the-best-alternatives-2026-hl-hunt/))
- **Rough TAM reasoning:** Visa's CNP merchant base is in the millions globally. The specific slice — CNP merchants in categories with structurally elevated dispute rates (subscription, supplements, apparel, digital) at $200K–$3M volume — is plausibly in the low hundreds of thousands across US/UK/EU/AU. I do not have a defensible hard count and I'm not going to invent one. At **$149–$399/mo**, capturing 1,000 of them is $2–4M ARR. That's the whole thesis; I don't need the TAM to be precise, I need 1,000 merchants to exist and be reachable. They are.
- **Why now for them:** Their ceiling dropped 32% in April, the fines start biting with no warning tier, full enforcement is 1 October 2026, and the numerator is being inflated by consumers using ChatGPT to write better dispute claims. A merchant who was comfortably at 1.8% under the old 2.20% rule is now **20% over the line** and may not know it.

## 5. Product sketch (MVP)

- **Live ratio gauge** — a single number, updated daily: your current VAMP ratio, your Stripe/processor internal dispute rate, and the distance to each threshold. Trailing 30/60/90-day trend with a projected month-end landing.
- **The invisible half, reconstructed** — merchants can't pull TC40s directly, so the product estimates the fraud-report side from the signals they *do* have (dispute reason codes, refund-after-fraud-claim patterns, issuer behavior, alert feeds where connected) and clearly labels it as an estimate with a confidence band. Where the merchant's acquirer *will* share TC40/SAFE data on request, the product generates the request and ingests the file.
- **Ratio-first triage on every dispute** — for each incoming dispute: fight, refund, or deflect, ranked by **ratio impact per dollar of effort**, not by ticket size. Explicitly recommends conceding small disputes that incumbents would waste a representment on.
- **Deflection rule generator** — proposes the specific Verifi RDR rule set (amount thresholds, customer IDs, product categories) that would have deflected last quarter's disputes, with a simulated before/after ratio. The merchant applies the rules in their own RDR console.
- **CE3.0 eligibility checker** — for every 10.4 fraud dispute, checks whether two qualifying prior undisputed transactions from the same cardholder exist in the merchant's own order history, and assembles the pre-dispute data. This is the single highest-leverage evidence type Visa added and most small merchants don't know it exists.
- **Runway-to-breach alert** — "at your current 14-day trend you cross 1.50% on 12 September. Here are the three cheapest interventions." Email + Slack.
- **Acquirer conversation pack** — a one-page PDF showing your ratio trend and remediation actions taken, for when the risk team calls. This is what stops an offboarding.
- **Root-cause clustering** — groups disputes by product SKU, ad creative, traffic source, and billing descriptor to find the actual leak. Often one SKU or one descriptor is generating a third of the numerator.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into a dashboard, so let me be precise about where it's doing real work.

**Reason-code and evidence classification.** Dispute reason codes are notoriously noisy — the code the issuer files is frequently not the actual dispute. An LLM reading the cardholder's stated reason, the merchant's order notes, the support ticket thread, and the shipping record classifies the *true* dispute type and, crucially, predicts whether a representment is winnable. That prediction is what makes the fight/refund/deflect recommendation more than a coin flip. A rules engine can't do this because the input is unstructured free text from four systems.

**Root-cause clustering across unstructured evidence.** Finding that "disputes spiked 40% and 60% of them trace to the new checkout descriptor plus the Meta creative launched 3 June" requires correlating support tickets, order metadata, and dispute narratives. This is embedding-and-cluster work over text, not SQL.

**CE3.0 matching.** Determining whether two prior transactions genuinely qualify as compelling evidence requires reasoning over device fingerprints, addresses, and account identifiers with fuzzy matching and a judgment call about whether Visa will accept the link.

**Where AI is NOT load-bearing, and I won't pretend otherwise:** the ratio math is arithmetic. The threshold monitoring is a comparison. Those are the *hook*, and they're honest — the merchant's core problem is that nobody shows them the number at all. But the *retention* comes from the triage and root-cause work, and that's where the model earns its keep.

## 7. Localization angle (if any)

**N/A — this is a global play, but with a deliberate regional sequencing.**

VAMP is a Visa program with near-global scope, which is exactly why this isn't a localization play — the rule is the same in Ohio and Manchester. Two wrinkles worth knowing: the **CEMEA region retained the 2.20% threshold**, so it's a lower-urgency market; **LatAm and the Caribbean were already at 1.50%** before April 2026, so those merchants have had longer to adapt and the "sudden compression" hook lands softer. ([Corgi Labs](https://www.corgilabs.ai/insights/vamp-2026-merchant-compliance))

Sequence: **US first** (largest CNP base, most acute processor-termination culture, English-language distribution channels), then **UK/EU**, then **Australia**. No language, payment-rail, or pricing localization needed for any of those. Skip CEMEA until their threshold moves.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Watch — $149/mo.** Ratio monitoring, trend projection, breach alerts, root-cause clustering. One processor connection.
  - **Steer — $299/mo.** Adds per-dispute triage, CE3.0 eligibility checking, RDR rule generation, acquirer conversation pack. Multiple processors/MIDs.
  - **Portfolio — $799/mo.** For agencies and multi-brand operators managing 5+ MIDs.
  - Flat subscription, deliberately. **Not** a percentage of recovered funds — because the entire product thesis is that recovered dollars are the wrong objective. Charging on recoveries would recreate the incumbent's bias inside my own P&L.
- **ACV:** ~$2,900 (blended, assuming most land on Steer and some on Watch).
- **Rough math to $1M ARR:** 350 customers on Steer at $299/mo = $1.25M. Or a realistic blend: 200 Watch + 250 Steer + 20 Portfolio ≈ $1.45M.
- **Rough math to $5M ARR:** ~1,400 paying merchants at blended $2,900, **or** ~700 merchants plus an agency/reseller channel where chargeback consultancies and high-risk ISOs white-label the ratio monitoring for their books. The reseller path is the more credible route to $5M — a single ISO with 300 merchants on its book has a direct portfolio-threshold reason to want every one of them monitored. Their 0.50%/0.70% acquirer thresholds mean *they* get punished for their merchants' ratios, which makes them a buyer, not just a channel.
- **Expansion path:** MID count (multi-brand operators add MIDs), then alert-feed passthrough (reselling Ethoca/Verifi alerts at a margin once volume justifies a direct relationship), then a managed-remediation tier for merchants already in breach.

**Margin note:** gross margin is high on Watch (pure data processing) and thinner on any tier that resells alerts at $30–40 a pop. I'd keep alerts as passthrough-at-cost initially rather than pretend they're a profit center.

## 9. Go-to-market wedge — first 100 customers

1. **The 1 October enforcement deadline is a free cold-email hook, and it expires.** Build a public **VAMP ratio calculator** — merchant enters monthly CNP transaction count and dispute count, gets their ratio, their distance to 1.50%, and a projected annual fine at $8/transaction. Gate the full breakdown behind an email. This is the single best-converting asset available because the answer is often genuinely alarming and completely non-obvious. Push it into the payments channels below before October.

2. **Shopify Community and Stripe support forums — answer the termination threads.** There are long-running, high-traffic threads of merchants describing exactly this pain (the "why are we losing all chargeback disputes" thread has 40+ replies spanning years). These threads rank in search. Answer them substantively — explain the TC40 blindness, explain why their evidence didn't matter, link the calculator. This is not "content marketing," it's showing up in the exact place the pain is being typed, and it compounds because those threads are the top search results.

3. **High-risk ISOs and payment consultants as a reseller wedge.** There are a few hundred ISOs and high-risk merchant account brokers serving exactly this segment — Corepay, Daystar, SeamlessChex and dozens of smaller shops all publish content about VAMP because their book is threatened by it. They face **0.50%/0.70% portfolio thresholds** and get fined for their merchants' behavior. Pitch: white-labeled ratio monitoring across their whole book, so they can intervene before they have to offboard. Twenty ISOs each activating 15 merchants is 300 customers. This is the highest-leverage channel and it's a warm sale — their incentive is already aligned.

4. **Chargeback-adjacent agency partnerships.** Agencies doing representment-as-a-service (there are many small ones) can't sell ratio monitoring because they're paid on recoveries. Offer them a referral fee. They have the customer list and no conflicting product.

5. **Merchant-of-record and subscription-billing platform directories.** Subscription businesses have structurally elevated dispute rates. List in the app directories/partner pages of subscription billing tools where these merchants already are.

**Honest read on conversion:** channels 1 and 3 are the real ones. Channel 2 is slow but compounds and costs nothing. I'd expect first 100 to come roughly 40% from ISO partnerships, 35% from the calculator + cold email, 25% from forums and referral.

## 10. Build complexity — justification

**Medium.** Roughly **10–14 weeks to v1** for a pair.

Off-the-shelf: Stripe/Shopify Payments/Braintree/Adyen dispute APIs are well documented and give you the TC15 half of the numerator plus the CNP denominator directly. Ratio math, trending, and alerting are straightforward. LLM classification of dispute narratives is an API call. Standard web stack.

The custom work, and where the weeks go: **normalizing dispute and transaction data across four or five processor schemas** so the ratio is computed consistently, and **modelling the TC40 estimate** — the numerator half merchants can't see. That estimate is the product's credibility. Get it wrong and you've sold a merchant a false sense of safety, which is worse than selling nothing. Expect to spend real time calibrating it against the subset of merchants whose acquirers *will* share TC40 files, and to ship it with an explicit confidence band rather than a false precision.

Not required for v1: direct Visa/Verifi/Ethoca integrations. The merchant applies RDR rules in their own console; the product recommends them. That keeps v1 out of a network partnership dependency, which would otherwise be a 6-month blocker.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reads merchant's own transaction data with their authorization via standard processor OAuth. Recommends actions within published Visa program rules. No circumvention of anything. |
| Ethical — no harm / dark patterns | ✅ | One thing to watch: the product must never optimize the ratio by suppressing legitimate consumer disputes. Recommending a fast refund on a small dispute is *good* for the consumer. Recommending deflection rules that auto-refund is also consumer-favorable. The ethical line is that this must never become "how to hide fraud from Visa" — and the product should refuse to help a merchant whose root cause is that they're actually defrauding customers. |
| Market exists (evidence above) | ✅ | Existing spend at $30–40/alert and 25%-of-recovery pricing; active merchant complaint threads; a hard regulatory deadline. |
| 1–5 person team can build this | ✅ | Pair, 10–14 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Processor API access is free. Costs are two people's time, LLM inference, and hosting. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | This is genuinely hair-on-fire — not "we lose money on disputes" but "we lose the ability to accept cards for five years." Felt as a background dread continuously, acutely on the day the acquirer emails. Docked 3 because the *acute* moment is episodic; many merchants sit comfortably under the threshold and feel nothing, which makes it a real problem for a subset rather than a daily problem for everyone. |
| Demand evidence | 15 | **12**/15 | Multiple independent signals: existing paid market at $30–40/alert and 25%-of-recovery, an entire content industry around processor termination, active merchant complaint threads, a dated regulatory forcing function. Docked 3 because all the *existing* spend is on the adjacent product (recovery), not on ratio monitoring specifically. Nobody has proven merchants will pay a flat fee for the number itself. That's the real unknown. |
| Build feasibility | 15 | **11**/15 | Pair ships in 10–14 weeks on documented APIs. Docked because multi-processor schema normalization is tedious and the TC40 estimation model is genuinely hard to get right and is load-bearing for trust. |
| Distribution clarity | 15 | **12**/15 | The ISO/reseller channel is specific, named, and incentive-aligned — their portfolio thresholds are tighter than their merchants'. The calculator hook is concrete and the deadline is dated. Docked 3 because ISO partnerships take longer to land than cold email math suggests, and the deadline hook decays after October. |
| Revenue mechanics | 15 | **11**/15 | $149–$799 sits well inside what this segment already pays for payments tooling, and 350 customers to $1M is achievable. Docked 4 because flat-fee pricing for a *monitoring* product has a known churn problem: merchants who stay safely under threshold for six months cancel. Retention depends on the triage/root-cause features actually working, not on the gauge. |
| Time to first revenue | 10 | **7**/10 | 4–8 weeks post-launch. Merchants can be pre-sold off the calculator before the product is complete, and the October deadline creates urgency. Not 9–10 because the buyer wants to see their own real data before paying, which needs a working processor connection. |
| Defensibility | 10 | **4**/10 | Honestly weak. The ratio math is public. Chargeflow or Disputifier could ship a ratio gauge in a quarter — though their recovery-percentage business model actively disincentivizes the "just refund it" advice that makes this product good, which is a real if soft structural moat. Accumulating cross-merchant dispute-pattern data improves the TC40 estimate over time and is the only compounding asset. This is an execution-and-speed play, not a moat play. |
| **Total** | **100** | **74**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who has actually lived through a processor risk review, or you will get the TC40 estimation wrong and the recommendations will be plausible nonsense. A payments-native co-founder or a paid advisor from an ISO risk team is close to mandatory. This is not a domain you can read your way into in two weeks.

### Key assumptions to validate (3–5)

1. **Assumption:** Merchants in the $200K–$3M CNP band will pay a flat monthly fee for ratio visibility, when their existing spend is all success-based. **How to test:** Put the calculator live, and at the results screen offer a $149/mo pre-order for monitoring at launch. Measure pre-order conversion from merchants whose computed ratio is above 1.0%. Target: 5% of above-1.0% merchants pre-order.

2. **Assumption:** The TC40 half can be estimated accurately enough to be trustworthy. **How to test:** Recruit 10 merchants whose acquirers will share TC40/SAFE files. Backtest the estimate against the actual files over 90 days. Target: estimate within ±20% of the true count. If it can't hit that, ship the product without the estimate and be explicit that you only cover the dispute half — a smaller but honest product.

3. **Assumption:** ISOs and high-risk brokers will resell rather than build it themselves. **How to test:** Pitch 15 ISOs directly. Target: 3 signed LOIs for white-label within 6 weeks. If they all say "we'll build it," the best channel is gone and this drops toward VALIDATE.

4. **Assumption:** Merchants will act on the recommendations rather than just watching the number. **How to test:** In the first 20 pilots, measure what fraction implement at least one RDR rule or change a billing descriptor within 30 days. Target: 50%. Below that, retention will be bad regardless of the gauge's accuracy.

### Risk flags

1. **Platform dependency (high).** The entire product depends on processor API access — Stripe, Shopify, Adyen. If Stripe ships native VAMP ratio monitoring, a large chunk of the addressable market evaporates overnight. Stripe already does merchant health alerting; extending it to a VAMP-specific ratio view is a small step for them. This is the most likely way the idea dies.
2. **Regulatory risk, in an unusual direction.** Visa can change VAMP thresholds, formulas, or the TC40 carve-out at any time — they just did, twice. A loosening of the threshold would deflate the urgency hook immediately. Conversely, further tightening grows the market. Asymmetric but real.
3. **Market timing — the deadline is a wasting asset.** The 1 October 2026 enforcement date is the sharpest sales hook available, and it's two months out. A team that isn't in market with at least the calculator by mid-September loses the best distribution moment. After October the pitch shifts from "prepare" to "recover," which is a harder, less urgent sale.
4. **Trust risk from the estimate.** Shipping a confident-looking ratio that's materially wrong — telling a merchant they're at 1.1% when they're at 1.6% — is worse than shipping nothing. It's a lawsuit-adjacent failure mode and a reputation-ending one in a small, gossipy market. Confidence bands and conservative rounding are not optional polish; they're the product.
5. **Incumbent response.** Chargeflow has 222+ five-star Shopify reviews and existing distribution into the exact segment. If they add a ratio dashboard as a free feature to drive their recovery business, they can give away what you're charging for.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical pair with a payments-native co-founder or paid ISO
                        risk advisor. Domain access matters more than engineering skill here.
Time to revenue:        6–10 weeks (pre-sales possible from week 2 via the calculator)
Capital to launch:      $15–25K (two people's time, inference, hosting, ISO travel)
Top 3 assumptions to validate first:
  1. Flat-fee willingness to pay — calculator pre-order test, target 5% conversion
     among merchants computing above 1.0%
  2. TC40 estimate accuracy — 90-day backtest against 10 merchants with real
     acquirer-supplied files, target ±20%
  3. ISO reseller appetite — pitch 15, target 3 white-label LOIs in 6 weeks
Kill criteria:
  - Abandon if the TC40 estimate cannot hit ±20% on backtest AND merchants reject
    the dispute-half-only version in pilot interviews
  - Abandon if Stripe or Shopify Payments ships native VAMP ratio monitoring before
    your v1 launches
  - Abandon if fewer than 2 of 15 pitched ISOs will sign a white-label LOI
  - Abandon if <20% of pilot merchants implement any recommended action within 30 days
    (means it's a vitamin, not a painkiller, and it will churn)
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build and ship the public VAMP ratio calculator. Nothing else — no backend, no processor integration. Input: monthly CNP transaction count, dispute count, estimated fraud reports. Output: computed ratio, distance to 1.50%, projected monthly fine at $8/transaction, days until 1 October enforcement. Email gate on the detailed breakdown. Post it to the Shopify Community threads, r/ecommerce, r/shopify, and three payments LinkedIn groups.

- **Day 3–4:** Cold-call 15 high-risk ISOs and payment consultants (Corepay, Daystar, SeamlessChex and a dozen smaller shops all publish VAMP content — they're findable and self-identified). Pitch white-labeled portfolio-wide ratio monitoring. The specific question: *"You're getting fined at 0.50% portfolio. Would you pay per-merchant per-month to see which of your book crosses before you have to offboard them?"* Ask for a price, not an opinion.

- **Day 5:** Decide on two falsifiable numbers.

**Go / no-go criteria (both must clear):**
- **≥200 calculator completions** in five days, of which **≥25 merchants compute a ratio above 1.0%** and **≥8 of those** hand over an email for the detailed breakdown. This proves the segment exists, is reachable through free channels, and is scared enough to identify itself.
- **≥3 of 15 ISOs** give a specific per-merchant price they'd pay, unprompted, rather than "interesting, send me a deck."

Miss either and the honest read is that merchants know about VAMP and don't care enough to pay a subscription for it — in which case the fallback is not to lower the bar, it's to pivot the same data into the ISO-only product and sell to twenty buyers instead of a thousand.
