---
title: "ShramDaybook — engaged-day daybook for gig aggregators"
slug: gig-engagement-daybook
date: 2026-08-06
category: Compliance / India
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Counts which gig workers crossed 90 engaged days, and files the eShram reports before the fine lands on a director."
tags:
  vertical: Compliance
  model: SaaS
  geography: India
  secondary: [Compliance-driven, SMB, AI-agent, Multilingual, Solo-builder]
axes:
  problem: 17
  demand: 12
  build: 10
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ShramDaybook

## 1. One-liner

Counts which gig workers crossed 90 engaged days, and files the eShram reports before the fine lands on a director.

## 2. Trend signal — why now?

India's Code on Social Security, 2020 came into force on 21 November 2025. The Social Security (Central) Rules, 2026 came into force on 8 May 2026 and turned an abstract statute into a live, dated reporting obligation with an API on the other end.

The specifics are what make this a product rather than a think-piece:

- **A hard deadline already passed.** The Labour Ministry issued a directive on 1 June 2026 requiring *all* online aggregators to complete onboarding and API integration on the eShram portal by **21 June 2026**, explicitly warning that non-compliance attracts penalties under Section 133 of the Code. As of that directive, only **15 aggregators** — Zomato, Swiggy, Blinkit, Uber, Ola, Rapido, Amazon, Zepto, Urban Company, Porter and a handful of others — had been onboarded.
- **The obligation is far broader than those 15.** The Seventh Schedule names **nine aggregator categories**: ride sharing, food and grocery delivery, logistics, professional services, marketplace and inventory-based e-commerce (B2B and B2C, goods *and* services), healthcare, travel and hospitality, content and media, and a catch-all "any other goods and service provider platform." Tracxn counts **7,010 gig economy companies in India**. The gap between 15 onboarded and thousands liable is the entire market.
- **The counting rule is genuinely hard.** A worker qualifies only after **90 days with a single aggregator, or 120 days cumulatively across multiple aggregators**, in a financial year. A worker is "engaged" on any calendar day they earn *any* amount — ₹10 counts. Days accrue cumulatively across platforms; three platforms on one day counts as three days. Aggregators must register new workers **in real time or daily via API** and report exits too.
- **Money is unambiguously moving.** Aggregators must contribute **1–2% of annual turnover** (excluding taxes, levy and cess), capped at 5% of total worker payouts. Inc42 estimated the labour codes could add **over ₹1,500 Cr in annual costs** across major gig platforms, working from a Morgan Stanley estimate of ₹1.5–2.5 per order. Late contributions carry **12% annual interest (1% monthly)** under the 2026 Rules.
- **A second, state-level layer stacked on top.** Rajasthan (2023), Jharkhand (2025), Karnataka, Bihar and Telangana (April 2026) each passed their own gig worker welfare laws with their own 1–2% levies and **quarterly electronic returns**. Karnataka's February 2026 notification mandates a welfare cess on gig transactions and runs a Payment and Welfare Fee Verification System (PWFVS) that monitors payouts transaction-by-transaction.

And the practitioners say out loud that the tooling doesn't exist. Debjani Aich of CMS INDUSLAW: *"The legal computation methods have not factored in current Indian practical cases, the key being the absence of a central recording module."* Balasubramanian A of TeamLease: companies are *"investing in app-based tracking systems, worker databases, and digital compliance tools to determine eligibility under the new rules."*

That is a category description written by a lawyer and a staffing executive who don't realise they're writing a product spec.

Provenance:
  - Signal 1 (demand): Labour Ministry set a 21 June 2026 deadline for *all* aggregators to complete eShram onboarding and API integration under threat of Section 133 penalties, with only 15 platforms onboarded against 7,010 gig economy companies in India — https://www.scconline.com/blog/post/2026/06/02/eshram-deadline-aggregators-june-21-gig-workers/ and https://tracxn.com/d/explore/gig-economy-startups-in-india/ — observed 2026-08-06
  - Signal 2 (feasibility): Social Security (Central) Rules, 2026 (in force 8 May 2026) define a machine-countable eligibility test — 90 days single-aggregator / 120 days multi-aggregator, where any day with any earning counts — and a published eShram Aggregator Module with API for worker registration and UAN verification, making the whole obligation a data-join problem rather than a legal-judgement problem — https://www.medianama.com/2026/05/223-social-security-central-rules-2026-gig-workers-90-days-work/ — observed 2026-08-06
  - Signal 3 (economic): Aggregators owe 1–2% of annual turnover to the Social Security Fund with 12% annual interest on delays; Inc42/Morgan Stanley put the aggregate cost at ₹1,500 Cr+ annually across major platforms; Section 133 carries ₹1,00,000 penalty plus 1–3 years imprisonment for contribution failures — https://inc42.com/features/how-new-labour-codes-could-add-inr-1500-cr-burden-on-gig-platforms/ — observed 2026-08-06
  Category: Regulatory arbitrage

## 3. The opportunity

The regulation created a new unit of account that nobody's system tracks: the **engaged day**.

Every platform in India already knows its payouts. Payout systems are built to answer "how much did we pay this person this month" — a rupee question. The Code asks a completely different question: "on how many distinct calendar days did this person earn a non-zero amount from us, and where does that put them against 90?" A ₹10 day and a ₹4,000 day are identical for eligibility. A worker who earns twice on one day gets one day. A worker who earned every day for three months and then went quiet is a liability; a worker who worked 200 days at high volume is the same liability. Rupee-shaped systems answer the rupee question and cannot answer the day question without being rebuilt.

The incumbents don't cover it. Keka, Darwinbox, greytHR, Zoho People and the rest of the Indian HRMS market are employee-payroll systems — PF, ESI, TDS, appointment letters, attendance for salaried staff. Their entire data model is the employment relationship. Gig workers are, by statutory design, *not* employees; they sit outside the HRMS in the payouts ledger or the ops database. The compliance functionality mid-size aggregators need is not a missing feature in these products, it's a different product.

So the mid-size aggregator — a ₹50–500 Cr regional logistics platform, a home-services app in three cities, a healthcare-at-home operator, a B2B marketplace with a delivery fleet — sits between two bad options. Build the eShram API integration, the day-counting engine and five state-level return formats in-house, which costs a senior engineer several months on work that generates zero revenue. Or hand it to a labour law consultant who does it in Excel, monthly, badly, and who cannot do real-time exit reporting at all.

The 15 giants solved this with headcount. Everyone else is exposed, and the exposure is personal: Section 133 attaches ₹1,00,000 and 1–3 years imprisonment to contribution failures, and no compounding is permitted for repeat offences. That last detail is why this sells. A founder will happily ignore a fine. A founder does not ignore a clause with a prison term attached to their own name.

## 4. Target market

**Primary customer:** The compliance owner — usually the CFO, Head of Ops, or in smaller shops the founder themselves — at an Indian platform company that engages 200–20,000 gig or platform workers, with ₹20 Cr–₹500 Cr annual turnover. Concretely: regional quick-commerce and dark-store operators, intra-city logistics and last-mile fleets, home-services and beauty-at-home platforms, healthcare-at-home and diagnostics collection networks, B2B distribution platforms with rider fleets, and the long tail of category marketplaces that hire delivery or service partners. Roughly 30–100 employees on payroll, thousands of workers off it.

**Why they buy:** Because they just discovered they're an "aggregator." Most of these companies do not think of themselves as gig platforms — they think of themselves as a logistics company or a salon-services company. The Seventh Schedule's nine categories, especially the "any other goods and service provider platform" catch-all, swept them in. Their pain, in their words, is closer to *"we missed the June deadline, we don't have the API integration, our worker data is in three systems and nobody can tell me how many of them cross 90 days."* The 90/120-day rule is the specific thing they cannot compute: Forbes India notes platform disclosures suggest the average delivery partner works fewer than 40 days annually, so the answer to "how many of our workers qualify" is neither zero nor all — it's a number that requires actually counting.

**Rough TAM reasoning:** 7,010 gig economy companies in India, of which 651 are funded and 170 at Series A or beyond. The funded cohort — call it 600–900 companies with real worker volume, real turnover, and a board that asks about regulatory exposure — is the serviceable market. Below that sits a longer tail of a few thousand smaller platforms who will buy a cheaper tier once enforcement becomes visible. At ₹15,000–60,000/month, 600 serious buyers is a ₹15–40 Cr ARR business. That's the shape of the opportunity — not a venture outcome, a very good bootstrapped one.

**Why now for them:** The 21 June 2026 deadline has already passed. That's the unusual and valuable thing about this timing — this is not a product selling against a future deadline, where the buyer can always defer. These companies are *currently non-compliant*, today, with a directive that has already expired and a penalty section that has already attached. The sales conversation starts from a fact the buyer cannot argue with. Meanwhile the contribution rate notification and state-level rules are still landing, so the compliance surface is still moving — which means the in-house build keeps needing rework, and the buy option keeps getting more attractive.

## 5. Product sketch (MVP)

- **Engaged-day ledger.** Ingest the payouts file or database (CSV, S3 drop, or read-only DB connection) and convert rupee transactions into the statutory unit: distinct calendar days with non-zero earnings, per worker, per financial year. This is the core artefact everything else reads from.
- **90/120 threshold board.** A live view of every worker's position against the 90-day single-aggregator threshold, bucketed — crossed, within 15 days of crossing, within 30, unlikely to cross. Answers the CFO's actual question: what is our qualifying population and what does it cost us this year.
- **eShram filing agent.** Registers new workers and reports exits against the eShram Aggregator Module API, on the daily/real-time cadence the Rules require, with retries and a queue for records that fail validation.
- **UAN reconciliation queue.** The unglamorous work that eats the most human hours: matching worker records to Aadhaar-linked UANs, flagging mismatches in name/DOB/mobile, and generating a worker-facing WhatsApp nudge in the worker's language to fix their own eShram record.
- **Contribution calculator with an audit trail.** Computes the 1–2% of turnover liability, applies the 5%-of-payouts cap, and shows the working — so when the rate is finally notified or a state changes its levy, the number is reproducible rather than re-derived by a consultant.
- **State returns pack.** Pre-filled quarterly electronic returns for Rajasthan, Jharkhand, Karnataka, Bihar and Telangana, each in its own format, from the same underlying ledger.
- **Exposure report.** A one-page PDF the CFO forwards to the board or an investor's diligence team: workers registered, days counted, contributions paid, filings made, gaps open. This is what gets renewed.

## 6. AI angle — what's load-bearing

Honest answer: AI is a genuine cost-killer here but it is not the whole product, and I'd rather say that plainly than dress this up as an AI company.

Where AI does real work:

**Entity resolution across filthy worker data.** This is the actual hard problem and it's why in-house builds stall. The same worker appears as "Ramesh Kumar" in the payouts system, "R. Kumar" in the ops app, and "Ramesh Kumar Singh" on their Aadhaar-linked eShram record, with two phone numbers and a transposed DOB. Multiply by 8,000 workers across Hindi, Tamil, Telugu, Bengali and Marathi name conventions, transliteration variance, and single-name records. Deterministic matching gets maybe 70% and dumps the rest on a human. This is the classic fuzzy-matching-at-scale problem that modern models handle well, and every percentage point of automated match rate is a person-week the customer doesn't spend.

**Regulation-to-schema tracking.** Five state regimes plus a central one, all issuing notifications, all changing formats. Keeping return templates current is a monitoring-and-diffing job across gazettes and portal notices — an agent watching sources and drafting the schema change for a human to approve is a real reduction in the maintenance cost that would otherwise make this business unattractive.

**Worker-side clarification.** The multilingual WhatsApp flow that tells a rider *why* their UAN doesn't match and what to fix, in their language, without a support agent on the phone.

If you removed the AI, the product still exists — it would just carry a services team to do the matching, which turns a 85%-margin SaaS into a 45%-margin BPO. That's the honest framing. The AI isn't what makes the product possible; it's what makes it a software business instead of a compliance consultancy. For a bootstrapper that distinction is the whole thing.

## 7. Localization angle

This is India-only by construction and that's a feature, not a limitation. The product is a direct function of the Code on Social Security 2020, the Central Rules 2026, the Seventh Schedule's nine categories, the eShram portal's Aggregator Module, Aadhaar-linked UANs, and five divergent state welfare acts. None of it ports anywhere.

The localization that matters is *inside* India:

- **State fragmentation is the moat, not the tax.** Karnataka's PWFVS, Rajasthan's older registration-led model, Telangana's April 2026 act — each with its own levy mechanics, return format and cadence. A generic compliance tool won't do this. Accumulating correct handling of all five, then the next five as more states pass laws, is exactly the kind of boring, compounding knowledge that a competitor can't shortcut.
- **Language at the worker edge.** UAN reconciliation requires talking to the rider, not the CFO. That means Hindi, Tamil, Telugu, Kannada, Bengali, Marathi over WhatsApp — the only channel that actually gets read.
- **Price point.** ₹15,000–60,000/month is the band where an Indian mid-market CFO signs without a procurement process. A $500–2,000/mo foreign tool priced for US mid-market would be laughed out of the room; ₹25,000/mo against a ₹1,00,000 penalty and a prison clause is an obvious purchase.

## 8. Business model — path to $1M–$5M ARR

**Pricing:** Tiered on active worker count, which is the honest scaling variable and the one the customer already knows.

- **Starter** — ₹15,000/mo, up to 500 active workers. Central compliance only (eShram filing, day ledger, one state).
- **Growth** — ₹35,000/mo, up to 5,000 workers. All states, contribution calculator, exposure reporting.
- **Scale** — ₹60,000–1,00,000/mo, 5,000–25,000 workers. Multi-entity, DB integration, SLA.
- **Setup/onboarding** — ₹50,000–1,50,000 one-time for data mapping and historical backfill. This matters more than it looks: it covers the messiest month of work, it filters tyre-kickers, and it front-loads cash for a bootstrapper.

**ACV:** ₹4.2L (~$5,000) blended, assuming the mix lands mostly in Growth.

**Rough math to $1M ARR (₹8.5 Cr):** ~200 customers at ₹35,000/mo. Against a funded cohort of 651 gig economy companies plus the broader liable population, 200 paying customers is roughly 30% of the funded segment — demanding but not fantasy, and reachable without touching the long tail at all.

**Rough math to $5M ARR (₹42 Cr):** ~700 customers at a ₹50,000/mo blended rate, which requires two things to be true. First, mix shifts up as customers grow worker counts — a quick-commerce platform going from 800 to 6,000 riders moves two tiers without a new sale. Second, the product expands past filing into the adjacent spend: contribution reconciliation, worker-facing benefits enrolment, and the insurance/ESIC layer that sits right next to the same data. If neither happens, this is a ₹15–20 Cr business, and I'd take that.

**Expansion path:** Worker-count tier creep is the reliable engine. Beyond it: additional states as they legislate (each new state act is a paid module for the existing base), multi-entity support as customers acquire, and eventually a per-worker benefits-administration take that rides on data already collected. The natural ceiling is that this is a tax on being an aggregator — priced as a fraction of the penalty risk, not of the payroll.

## 9. Go-to-market wedge — first 100 customers

The unusual asset here: **the target list is public and the qualifying event has already happened.**

1. **Work the eShram non-onboarded list directly.** 15 aggregators are publicly named as onboarded. Tracxn's 7,010-company gig economy list, filtered to the 651 funded and cross-referenced against the nine Seventh Schedule categories, produces roughly 400–600 named companies that are liable and demonstrably not on the list. Every one gets a personalised email to the CFO/founder naming their Schedule category, the passed 21 June deadline, and Section 133's ₹1,00,000-plus-imprisonment clause. This is not spray-and-pray outreach — it's a specific, verifiable, unpleasant fact about the recipient's own company. Expect 15–20% reply rates on a message like that; it only needs 5%.

2. **Free "Am I an aggregator?" exposure check as the top of funnel.** A public tool: pick your category, enter worker count and turnover band, get a PDF showing your Seventh Schedule classification, estimated 1–2% contribution liability, penalty exposure, and which of the five state acts apply. This is the highest-intent lead magnet imaginable for this audience, it's genuinely useful even if they never buy, and it produces the qualified list. Seed it in the founder communities where this cohort actually lives.

3. **Labour law consultants and CA firms as a channel, on referral fees.** Every mid-size platform already pays someone for labour compliance, and that person is currently doing this in Excel and hating it. They are not competitors — they're the ones who feel the pain most acutely and they have the relationship. A 20% first-year referral fee turns the incumbent workaround into a distribution network. Twenty active consultant relationships, each with 10–30 platform clients, covers a large share of the addressable market without a single cold email.

4. **Ride the notification cycle.** The contribution rate is still pending Central Government notification, and states are still passing acts (Telangana in April 2026; more coming). Every notification is a news event that sends this exact audience searching. Being the company with the clearest published explainer on each one — within 48 hours — is a repeatable, cheap acquisition spike, not a 6-month SEO bet.

5. **Sponsor the aggregator-adjacent trade bodies.** Regional logistics associations, quick-commerce operator groups, home-services networks. Small, cheap, and the entire membership is a qualified lead.

## 10. Build complexity — justification

**Medium.** The day-counting engine, threshold logic and contribution math are unremarkable data work — off-the-shelf stack, no novelty. The entity resolution across messy multilingual worker records is real engineering but it's a well-understood problem with good tooling. The two things that make this Medium rather than Low: the eShram Aggregator Module API integration is government infrastructure, meaning sparse documentation, credential provisioning delays, and validation quirks discovered only in production; and the five state return formats are five separate small integrations, each requiring someone to actually read the rules. Call it **14–18 weeks to a v1** for two people, one of whom must be willing to become genuinely expert in the Code and the state acts. The domain reading is not optional and cannot be delegated to the model.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance tooling for a statutory obligation. Handles Aadhaar-linked UAN data, so DPDP Act obligations apply from day one — a real design constraint, not a blocker. |
| Ethical — no harm / dark patterns | ✅ | Net effect is more gig workers correctly registered for benefits they're entitled to. One caveat worth naming: the same day-count data could inform a platform capping workers below 90 days. Don't build that feature, and say so in the contract. |
| Market exists (evidence above) | ✅ | Expired statutory deadline, 15 onboarded vs 7,010 liable companies, ₹1,500 Cr+ aggregate cost, named practitioners describing the missing tooling. |
| 1–5 person team can build this | ✅ | Two people, 14–18 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Two founders' time, modest infra, one legal opinion on the Rules. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Statutory, dated, already-missed deadline with personal criminal liability attached (₹1L + 1–3 years, no compounding on repeats). Buyers are non-compliant *today*. Held back from 19–20 only because enforcement against the long tail hasn't visibly started — until the first mid-size platform gets penalised publicly, some buyers will defer. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: the deadline, the 15-vs-7,010 gap, the ₹1,500 Cr cost estimate, and practitioners explicitly naming the missing "central recording module." What's missing is direct evidence — I found no mid-size aggregator saying "I would pay for this." Lawyers and staffing execs describing the gap is a proxy, not a purchase order. |
| Build feasibility | 15 | 10/15 | Standard stack, but government API integration and five state formats add real weeks. 14–18 weeks for a pair, not 6. |
| Distribution clarity | 15 | 12/15 | The list is public and the qualifying event is verifiable per-company — that's rare and it's the strongest thing about this idea. Docked for unproven conversion and for the consultant channel being an assumption. |
| Revenue mechanics | 15 | 11/15 | Pricing band is sane for Indian mid-market and trivially justified against penalty exposure. $1M ARR needs ~200 customers, which is ~30% of the funded cohort — achievable but not comfortable. $5M requires expansion that isn't yet proven. |
| Time to first revenue | 10 | 7/10 | Pre-selling to non-compliant companies against an expired deadline should produce paid pilots before the full build. But CFO-level purchase with data access means weeks, not days — realistically 8–12 weeks to first rupee. |
| Defensibility | 10 | 5/10 | Honest score. Execution moat plus accumulating state-by-state regulatory knowledge and workflow lock-in on filing history. But an HRMS incumbent — Keka, greytHR, Darwinbox — could bolt this on if the segment proves out. The bet is 12–18 months of head start and a segment too small to interest them until it isn't. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs someone who will read the Code on Social Security, the Central Rules 2026, and five state acts properly — and keep reading them as notifications land. Paired with an engineer who's comfortable with government APIs and dirty data. A pure technical founder will build the wrong thing; a pure compliance person can't ship it.

### Key assumptions to validate (3–5)

1. **Assumption:** Mid-size aggregators (₹20–500 Cr turnover) are genuinely non-compliant and know it. **How to test:** Call 30 companies off the Tracxn-minus-onboarded list. Ask one question: "Have you completed eShram API integration?" Anything above 60% "no" or "what's that" confirms the market. Below 40% and the giants' compliance has trickled down further than I think.
2. **Assumption:** They'll pay ₹35,000/mo rather than assign it to an existing employee or their CA. **How to test:** Take 15 of those 30 to a priced conversation with a mockup. Need 4+ to say yes to a paid pilot at full price. Discounting to close is a signal to walk.
3. **Assumption:** The eShram Aggregator Module API is accessible to a third-party software provider acting on an aggregator's behalf, not just to the aggregator directly. **How to test:** This is the one that can kill the product outright, so test it first — before any code. Apply for access, talk to the Ministry helpline, and get a lawyer's read on whether an agent can file. If filing must be done by the aggregator in their own credentials, the product degrades to a prepare-and-handoff tool, which is worth materially less.
4. **Assumption:** Entity resolution can hit 90%+ automated match rate on real worker data. **How to test:** Get anonymised worker records from two pilot customers and measure. Below 80% and the human review queue eats the margin.
5. **Assumption:** Labour law consultants will refer rather than build a competing service. **How to test:** Pitch 10 firms. Need 3 to sign a referral agreement.

### Risk flags

1. **Regulatory risk (inverted, and the dominant one):** The regulation *is* the product. Contribution rates are still un-notified, deadlines have already slipped once, and Indian labour code implementation has a long history of extension. If enforcement stays theoretical for another 18 months, urgency evaporates and buyers defer indefinitely — the product would be correct and unsold. Conversely, the first publicised penalty against a mid-size platform is worth more than any marketing spend.
2. **Platform dependency:** Total reliance on eShram portal availability, API stability and continued third-party access. A government portal change can break the core workflow overnight with no SLA and no recourse. Budget for it.
3. **Incumbent encroachment:** greytHR, Keka and Darwinbox all own the compliance relationship with Indian mid-market finance teams already. They're not built for gig workers today, but if this segment visibly monetises, a bolt-on module from a vendor already in the account is the obvious counter-move. The defence is depth in state-level handling and being 18 months ahead, not secrecy.
4. **Data sensitivity:** Aadhaar-linked UANs and worker PII, under DPDP Act obligations that themselves phase in through November 2026 and May 2027. A breach here is existential, and the security posture required is above what a two-person team naturally builds. This is a real cost, not a checkbox.
5. **Ethical drift:** Customers will ask for the feature that helps them keep workers under 90 days. Refusing it costs revenue. Decide the position before the first customer asks, not during the renewal.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who will genuinely learn the Code on Social Security
                        and five state gig acts, paired with an engineer comfortable with
                        government APIs and messy multilingual data. India-based strongly preferred —
                        this needs in-person CFO conversations.
Time to revenue:        8–12 weeks (paid pilots pre-build against an already-expired deadline)
Capital to launch:      ₹8–12 lakh ($10–14K)
Top 3 assumptions to validate first:
  1. Third-party software providers can access the eShram Aggregator Module API on an
     aggregator's behalf — apply for access and get a legal read BEFORE writing code.
     This one is binary and it decides whether the product is a filer or a preparer.
  2. 60%+ of mid-size aggregators off the Tracxn-minus-onboarded list are non-compliant —
     30 direct calls asking one question.
  3. 4 of 15 priced conversations convert to paid pilots at ₹35,000/mo without discounting.
Kill criteria:
  - Abandon if the eShram API cannot be accessed by a third party on the aggregator's
    behalf AND the prepare-and-handoff version fails to close 3 of 15 pilots.
  - Abandon if fewer than 40% of 30 surveyed mid-size aggregators are non-compliant —
    the market solved itself.
  - Abandon if the Central Government extends the aggregator deadline by 12+ months
    with no interim enforcement, and no mid-size platform has been penalised by then.
  - Abandon if automated entity-resolution match rate stays below 80% on real customer
    data — the margin becomes a services business.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2: Settle the binary question.** Apply for eShram Aggregator Module API access as a service provider. Call the Ministry's aggregator helpline. Brief a labour lawyer for a written opinion on whether a third party can register workers and file exits on an aggregator's behalf. Nothing else matters if this is a no — and the fallback (prepare-and-handoff) needs to be priced differently, so I need the answer before I talk price to anyone.
- **Day 3–4: Build the list, make the calls.** Pull Tracxn's gig economy list, filter to funded companies in the nine Seventh Schedule categories, subtract the 15 publicly onboarded. Call 30. One question first — "have you completed eShram API integration?" — then, for every "no," a second: "who owns it internally and what are they using?"
- **Day 5: Price it to 15 of them.** Mockup of the threshold board and the exposure PDF. Full price, no discount. Ask for a ₹50,000 pilot commitment.

**Go / no-go:** Go if (a) the API is accessible to a third party or the lawyer sees a workable agent structure, (b) 18+ of 30 are non-compliant, and (c) 4+ of 15 commit to a paid pilot at list price. Anything less than all three and I either reshape it as a preparer tool for consultants — a smaller, different business — or I walk.

The falsifiable core: **if third-party API filing is prohibited and fewer than 4 of 15 aggregators will pay ₹35,000/mo, this idea is dead in its current form and I'll have spent one week finding out.**
