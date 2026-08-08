---
title: "FreeTimeProof — invoice-defect auditor for US importers"
slug: demurrage-invoice-defect-audit
date: 2026-08-08
category: Logistics / US-SMB — Importers of Record (20–400 Containers/Year) Paying Ocean Demurrage and Detention Invoices Without Checking Them Against the FMC's Mandatory Billing Elements
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Checks every container invoice against the FMC rule that voids it, and files the dispute inside 30 days."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Workflow-automation, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# FreeTimeProof

## 1. One-liner

Checks every container invoice against the FMC rule that voids it, and files the dispute inside 30 days.

## 2. Trend signal — why now?

Three things happened, and the third one is the reason this is a business and not a consulting gig.

**The money is enormous and nobody argues about that.** Between April 2020 and March 2025, nine ocean carriers collected roughly **$15.4 billion** in demurrage and detention charges from U.S. importers, per FMC quarterly data. Rates in 2025–2026 run **$75–$300+ per container per day**, escalating in tiers the longer the box sits. Even after post-2020 declines, levels hover around **85% above pre-2020 norms**.

**The law changed and made bad invoices unenforceable.** The FMC's final rule, 46 CFR Part 541, published in the Federal Register 26 February 2024 and effective 28 May 2024, requires every D&D invoice to carry a specific minimum set of elements — container number, bill of lading, the exact date and time free time started and ended, the per-diem rate, the tariff or contract clause the rate comes from, a named dispute contact, and notice of dispute rights. The consequence clause is the whole product: **"Failure to include the minimum information in an invoice as outlined in this Part eliminates the Billed Party's obligation to pay the applicable charges."** The invoice must also be issued within 30 calendar days of the last incurred charge — a late invoice is dead on arrival too.

**The clock is short and asymmetric.** The billed party gets **30 days from invoice issuance** to request refund, mitigation, or waiver. The billing party then gets 30 days to resolve. Miss your 30 days and a legally void charge becomes a paid charge. That deadline is what turns "we should look at these someday" into a recurring, automatable job.

The gap: this is now a *document-checking* problem — read 20 fields off a PDF, compare to a timeline — and a small importer with 40 containers a year has neither the staff nor the reflex to do it. They pay to release the cargo and never look back.

Provenance:
  - Signal 1 (demand): U.S. importers paid ~$15.4B in D&D to nine carriers Apr 2020–Mar 2025; 2026 rates $75–$300+/container/day and climbing; charges described as "one of the most painful and least predictable line items on any import budget" — https://www.unicargo.com/how-to-avoid-demurrage-and-detention-fees/ and https://blog.gettransport.com/logistics-guide/fmc-demurrage-detention-2026-shipper-guide/ — observed 2026-08-08
  - Signal 2 (feasibility): FMC 46 CFR Part 541 mandates ~20 invoice elements and states that missing elements eliminate the obligation to pay; terminal-level data (last free day, availability, holds, gate-out, appointments) is now available through commercial container-tracking APIs rather than manual terminal portal checks — https://www.ecfr.gov/current/title-46/chapter-IV/subchapter-B/part-541 and https://terminal49.com/docs/api-docs/useful-info/api-data-sources-availability — observed 2026-08-08
  - Signal 3 (economic): Funded incumbents validate the spend — BlueCargo (founded 2018, VC-backed) claims users "recover up to 75 percent of disputable per diem invoices" and sells through drayage TMS partnerships like Trinium; systematic audit programs reportedly cut net D&D spend "20 to 35 percent within two quarters" — https://www.bluecargo.io/post/demurrage-and-detention-billing-a-guide-to-osra-and-how-to-save-money and https://www.gocubic.io/guides/cost-optimization/demurrage-detention-dispute-playbook-2026 — observed 2026-08-08
  Category: Regulatory arbitrage

## 3. The opportunity

The FMC handed importers a loaded weapon in May 2024 and most of them never picked it up.

Here's the asymmetry. Disputing a demurrage charge on the *merits* is hard — you're arguing about congestion, chassis shortages, whose fault the delay was. It's a judgment call, the carrier owns the narrative, and you usually lose. Disputing on **invoice defect** is not hard. Either the invoice states the exact date and time free time ended or it doesn't. Either it cites the tariff rule the rate comes from or it doesn't. Either it arrived within 30 days of the last charge or it didn't. That's a checklist, not an argument. And when the checklist fails, the rule doesn't say "you may negotiate" — it says the obligation to pay is eliminated.

One documented example: a U.S. importer received a four-figure container invoice that "looked official" but omitted the specific date and time free time actually ended. They disputed in writing citing the rule. The carrier reissued two weeks later **for about 40% less**.

**Who exists and what they miss.** BlueCargo is the real competitor — funded, capable, claiming up to 75% recovery on disputable per-diem invoices. But look at the shape of it: their center of gravity is **drayage truckers and per-diem** (the trucker's equipment-return charge), distributed through drayage TMS integrations like Trinium and CargoWise Landside. That's an entirely different buyer from the importer of record who eats the demurrage. Cubic and nVision Global sell freight-audit programs, but those are managed-service engagements aimed at shippers with the volume to justify a program. ClickClaims, VCA, ClaimWizard are adjuster software — wrong industry entirely.

Nobody is selling a **$200/month self-serve product to the 40-container-a-year importer** whose entire D&D exposure is $30K–$80K but who has no logistics analyst, no TMS, and no idea the rule exists. That importer is the one who most needs it, because at their volume every voided invoice is a meaningful percentage of a thin margin, and they are exactly the customer an enterprise sales motion cannot afford to serve.

The 10× isn't smarter arguing. It's that a machine reads all 20 required fields off every invoice the day it lands, cross-checks the stated free-time window against terminal availability and gate records, and drafts the dispute letter before the 30-day clock burns — for a customer who would otherwise have done nothing at all.

## 4. Target market

**Primary customer:** The owner, controller, or single logistics/ops manager at a U.S. importer of record moving **roughly 20–400 FEU per year** — $3M–$60M revenue. Concretely: consumer-goods brands importing from Asia, Amazon FBA sellers at container scale, furniture and home-goods importers, specialty food importers, auto-parts distributors, building-products wholesalers. The tell is that one person handles customs broker, freight forwarder, and drayage coordination as part of a job that includes four other things.

**Why they buy:** In their world the container invoice is a hostage note. As one industry guide puts it, "There is no workable strategy other than to pay the charges in advance to stop the bleeding and dispute them later." They pay to get the box released, intend to dispute, and never do — because disputing means reconstructing a timeline from a terminal portal, a forwarder email chain, and a drayage confirmation, and that's two hours they don't have for a charge they assume they'd lose anyway. Matt Schrap, CEO of the Harbor Trucking Association, on the scale of it: *"We're talking millions of dollars. I've seen per-diem invoices collectively over a few month period [total] over a million dollars."* And on why the rule mattered: *"It's crazy to me that it finally took this long for us to pull back the veil."*

Jonathan Eisen of the ATA's Intermodal Motor Carriers Conference on the underlying pain: *"These charges can add up very, very quickly and have become a major source of contention within the supply chain."*

**Rough TAM reasoning:** Roughly 197,000 U.S. companies import goods, and ~97% of goods importers are SMEs under 500 employees (Census/ITA data). Most of those are tiny — the median importer moves well under a container. The addressable slice is the containerized band: importers moving enough boxes to eat D&D regularly but too few to staff a logistics analyst. Call it **15,000–40,000 firms**. At $200–$500/mo that's a $50M–$200M ceiling — far more room than needed for a $1M–$5M outcome, and unattractive enough at the top end that enterprise players won't chase down into it.

**Why now for them:** The rule is two years live and the 30-day dispute window is now well-defined enough that a defect-based dispute is routine rather than novel. Meanwhile 2026 D&D rates are climbing again across most U.S. ports, and post-de-minimis tariff pressure has already squeezed importer margins — the same dollar recovered matters more this year than it did in 2023.

## 5. Product sketch (MVP)

- **Invoice inbox.** Forward the carrier's D&D invoice to a dedicated address (or connect the mailbox). The system parses the PDF and extracts every field the FMC rule requires.
- **Defect scorecard.** A per-invoice checklist against all ~20 mandatory elements — container/BL identifiers, free-time start and end date *and time*, per-diem rate, the tariff or contract citation, liable-party rationale, dispute contact, dispute-rights notice, and issuance timeliness. Each element marked present, missing, or ambiguous, with the regulatory citation attached.
- **Timeline rebuild.** Pulls container-level terminal data — discharge, availability for pickup, holds and fees, appointments, last free day, gate-out — and lays it against the window the invoice claims. Flags when the invoice starts the clock before the box was actually available.
- **30-day clock.** Every invoice enters with a countdown to its dispute deadline. Escalating alerts. Nothing expires silently — this is the feature that pays for the subscription even in a quiet month.
- **Dispute letter drafter.** Generates the written dispute citing the specific missing elements and the eliminating-obligation provision, addressed to the invoice's named dispute contact, with the rebuilt timeline attached as evidence.
- **Outcome ledger.** Tracks what was disputed, what the carrier did, what got waived or reissued, and the running dollar total recovered — per carrier, so the customer learns which carrier bills sloppiest.
- **Escalation packet.** If the carrier stonewalls, exports a filing-ready packet for the FMC's charge complaint or small-claims process (claims ≤$50,000 handled informally by a settlement officer).

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist — it becomes a spreadsheet nobody fills in.

The load-bearing work is **reading**. Carrier D&D invoices are not a standard format. Every carrier and every terminal emits different PDF layouts, different field labels, different date conventions, and the required elements are scattered across headers, line items, and footnotes — or absent entirely, which is the whole point. Deciding whether "LFD 03/14" satisfies a requirement for the exact date *and time* free time ended is a judgment call on unstructured text, made hundreds of times a month. That's document extraction plus rule-application, and it's exactly what current vision-capable models are good at and what rules-based parsers have always failed at.

Second load-bearing piece: **reconciling two conflicting stories about one container's timeline** — the invoice's claimed window versus terminal availability, holds, and gate records that arrive in different formats with different timestamp conventions — and expressing the discrepancy as a written argument tied to a regulatory citation. Drafting that letter well, in the carrier's own vocabulary, is generation work.

What is *not* AI: the countdown clock, the API pulls, the ledger. Those are plumbing. But the plumbing has no value without a machine that can read a messy PDF and say "this invoice omits the free-time end time, which voids it."

## 7. Localization angle (if any)

`N/A — this is a US-only play, deliberately.` The entire wedge is a specific American regulation, 46 CFR Part 541, and its unusually sharp consequence clause. No other jurisdiction currently gives the billed party an equivalent "missing fields eliminates the obligation to pay" lever on ocean D&D. Porting to the EU or Asia would mean rebuilding on contract law and carrier tariffs rather than on a federal rule — a much weaker product with a much harder sale. Stay in the U.S. and go deeper (more carriers, more terminals, more ports) rather than wider.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers on container volume, not seats. **$149/mo** (up to 25 containers/mo), **$349/mo** (up to 100), **$799/mo** (up to 300). Above that, custom. Every tier includes unlimited invoice audits and dispute drafting.
- **The pricing question you have to answer:** pure success fee (20–30% of recovered) versus subscription. Success fee closes faster and destroys the business — recovery is lumpy, some months are zero, and you end up doing collections work. Subscription is correct, but the *pitch* is success-framed: "one voided invoice pays for the year." At $75–$300/day per container, a single successful dispute on a five-day charge covers a $349/mo tier for months. Offer a hybrid on the way in — first 90 days at 25% of recovered, converting to subscription — to remove the trial objection.
- **ACV:** Blended **$4,200/year**. Most customers land on the $349 tier.
- **Rough math to $1M ARR:** 240 customers × $349/mo × 12 = $1.0M. Two hundred forty importers out of a 15,000–40,000 firm addressable band is under 2% penetration.
- **Rough math to $5M ARR:** ~1,000 customers at a blended $420/mo, which means moving upmarket into the 200–400 container band *and* adding the channel — customs brokers and freight forwarders reselling it to their book. Realistically $5M requires the broker channel to work; $1–2M does not.
- **Expansion path:** Volume tier upgrades as customers grow. Then adjacent charge types on the same rails — chassis charges, terminal handling, forwarder accessorials — each a new audit module against the same invoice inbox. The natural upsell is a "recovered dollars" reporting layer the CFO looks at monthly.

Gross margin is healthy but not software-pure: container-tracking API calls and model inference are real per-invoice costs. Budget 20–25% COGS at small scale, improving with volume and caching.

## 9. Go-to-market wedge — first 100 customers

- **The customs broker channel is the whole game.** Every importer in this band has a customs broker, and the broker sees the D&D invoices already. There are ~1,000–1,500 active licensed brokerage firms in the U.S.; the small and mid-size ones compete on service and have nothing new to sell. Pitch 100 of them a revenue-share or white-label: they introduce, you deliver, they look like heroes to their book. Ten productive brokers with 30 importer clients each is 300 warm introductions. This is the channel that gets you from 20 customers to 200.
- **Bill of lading data is public and that's an unfair advantage.** U.S. import manifest data is commercially available — you can build a list of importers of record by container volume, by port, by carrier, filtered to the 20–400 FEU band. That's not a guess about who has this problem; it's a list of exactly who does, ranked by how much they're exposed. Cold email with a specific hook: *"You moved 62 containers through Long Beach last quarter on [carrier]. We audited a sample of that carrier's invoices — here's the field they omit on every one."* Expect 3–5% reply on that specificity.
- **Free teardown as the top of funnel.** "Send us your last three D&D invoices, we'll tell you free which ones are legally void." Zero-risk, produces an immediate concrete number, and self-qualifies — anyone who sends invoices has the problem and has volume. Run this as the CTA everywhere else.
- **Where they actually congregate.** Amazon FBA seller communities at container scale, r/logistics, the Harbor Trucking Association and regional import/export associations, and port-specific operator groups in LA/Long Beach, Savannah, Newark, and Houston. Combine with the trade press that already covers the FMC rule — JOC, FreightWaves, Transport Topics — where a "here's what carriers still get wrong on invoices" data piece using your own audit corpus is genuinely publishable.
- **Sequence it.** Months 1–2: teardowns off a scraped BOL list to get 20 paying customers and, critically, a corpus of real invoices per carrier. Months 3–6: take the resulting per-carrier defect-rate data to brokers as the pitch — that data *is* the sales collateral.

## 10. Build complexity — justification

**Medium.** The parsing layer is off-the-shelf — vision models handle multi-format PDF extraction well now, and the rule gives you a fixed, closed checklist to extract against, which is the easy case. Container-tracking data is a commercial API rather than terminal-portal scraping, which removes the historically nastiest part of this problem. The clock, ledger, and letter drafting are standard web application work.

What makes it Medium rather than Low: per-carrier invoice format coverage is a long tail you grind through one carrier at a time, timeline reconciliation across terminal data sources has real edge cases (holds, appointment denials, weekend/holiday free-time counting rules that vary by tariff), and you need enough regulatory precision that a generated dispute letter doesn't embarrass the customer in front of their carrier. Getting the checklist *wrong* is worse than not shipping.

**Estimate: 10–14 weeks to a credible v1** for one or two people, covering the top 5–6 carriers by volume and the top 4 U.S. ports. Domain access matters more than headcount here — you need a customs broker or ex-carrier billing person answering questions weekly, or you will get the tariff nuances wrong.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Auditing invoices and drafting disputes on your own behalf is unregulated. Drafting the letter for the customer to send is fine; do not represent customers before the FMC without counsel — keep escalation as an exportable packet, not a filing service. |
| Ethical — no harm / dark patterns | ✅ | Helps small importers enforce a consumer-protective federal rule against much larger counterparties. The disputes are merit-based on objective defects, not nuisance filings. |
| Market exists (evidence above) | ✅ | $15.4B collected in five years, funded incumbents in adjacent segments, a federal rule written specifically because the problem was severe. |
| 1–5 person team can build this | ✅ | 10–14 weeks for 1–2 people plus a domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Container-tracking API subscription, model inference, BOL data access, hosting. Well under $50K to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money, felt on every container, and the 30-day clock creates genuine urgency. Docked because it's episodic rather than daily — a quiet import month means no pain, and the customer may question the subscription. Not quite hair-on-fire for the *smallest* importers. |
| Demand evidence | 15 | 12/15 | Very strong on the money ($15.4B, published rates, FMC quarterly data) and on the regulation. Funded incumbents prove willingness to pay. Docked because the direct verbatim evidence is from *truckers and associations*, not from small importers of record — I could not source first-person importer complaints in the target band. That's the softest part of the case. |
| Build feasibility | 15 | 11/15 | Off-the-shelf extraction and commercial tracking APIs, but a genuine long tail of carrier formats and tariff edge cases. 10–14 weeks, not 6. |
| Distribution clarity | 15 | 11/15 | The BOL-derived target list and the free-teardown hook are concrete and cheap. The broker channel is the scalable path but is unproven and slow to activate — brokers are conservative and slow to adopt anything that touches client relationships. |
| Revenue mechanics | 15 | 12/15 | Pricing is well-anchored to demonstrable savings and the value story is unusually easy. Docked for real COGS (API + inference) and for churn risk when a customer has a quiet quarter with nothing recovered. |
| Time to first revenue | 10 | 8/10 | The free teardown converts fast because it produces a dollar figure immediately. Realistic first payment 6–8 weeks post-launch. |
| Defensibility | 10 | 4/10 | This is the weak axis and I won't dress it up. The checklist is public law. BlueCargo could point at this segment tomorrow. The only real moats are the accumulating corpus of per-carrier defect patterns (which compounds and is genuinely hard to replicate) and broker channel lock-in. Execution moat, not a structural one. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can ship document-extraction pipelines *and* someone who genuinely understands ocean freight billing. If you have only the first, recruit the second before writing code — the failure mode here is a beautiful parser that applies the rule slightly wrong and burns your credibility with the first ten customers.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of real carrier D&D invoices — call it 25%+ — actually fail one or more of the FMC's mandatory elements. **How to test:** Collect 100 real invoices across the top 6 carriers via free teardowns and hand-audit them against the checklist. This is the single number the entire business rests on. If it's 5%, there's no product.
2. **Assumption:** Carriers actually waive or reissue when presented with a well-drafted defect-based dispute, rather than ignoring it. **How to test:** Manually run 20 disputes end-to-end before building anything. Measure waiver rate and days-to-resolution. The 40%-reduction anecdote is one data point, not a rate.
3. **Assumption:** Importers in the 20–400 container band will pay a *subscription* rather than demanding pure contingency. **How to test:** Price-test both against 30 qualified prospects. If more than two-thirds insist on success-fee-only, the unit economics change materially and this drops toward VALIDATE.
4. **Assumption:** Customs brokers will introduce their clients rather than viewing this as a threat to their own value-add. **How to test:** Pitch 15 small brokerage firms directly; measure how many will do a warm intro versus how many say they'd rather do it themselves.
5. **Assumption:** Container-tracking API coverage is good enough at the terminals that matter to rebuild timelines reliably. **How to test:** Take 50 known containers across 4 ports and check whether availability, LFD, and gate-out data is complete and accurate enough to argue from.

### Risk flags

1. **Competitive encroachment:** BlueCargo is funded, capable, and one product decision away from this segment. Their current focus on drayage/per-diem via TMS channels is the gap — but that gap is a strategy choice, not a structural barrier. You are betting on them continuing to prefer the enterprise/drayage motion.
2. **Regulatory reversal:** The rule survived a Court of Appeals challenge, but the eliminating-obligation provision is exactly the kind of clause carriers will keep litigating and lobbying against. If that provision is softened, the defect-based wedge weakens dramatically and you're back to arguing merits. Watch FMC dockets.
3. **Platform/data dependency:** The timeline-rebuild feature depends on commercial container-tracking APIs. Pricing changes or coverage gaps at that layer hit your COGS and your product quality at once. Mitigate by making the invoice-defect audit — which needs no external data at all — the standalone core value, with timeline rebuild as the upsell.
4. **Episodic value / churn:** A customer with a good quarter recovers nothing and questions the bill. The 30-day clock and the outcome ledger are the retention mechanics; if they don't hold, churn will be ugly. This is the risk I'd watch most closely after month 6.
5. **Carrier relationship friction:** Some customers will fear that systematic disputing damages their carrier relationship or their service contract terms. Real objection, especially for importers dependent on one carrier. Answer it with data on waiver rates rather than argument.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can ship document-extraction pipelines,
                        paired with a customs broker or ex-carrier billing person as
                        domain advisor. Solo-technical without domain access will fail.
Time to revenue:        6–8 weeks post-launch (10–14 weeks build)
Capital to launch:      $15–25K (tracking API, inference, BOL data, hosting)
Top 3 assumptions to validate first:
  1. Defect rate — hand-audit 100 real invoices across 6 carriers against the FMC
     checklist. Need 25%+ failing at least one mandatory element.
  2. Carrier response — manually run 20 defect-based disputes end to end before
     building. Measure waiver/reissue rate and days to resolution.
  3. Willingness to pay subscription — price-test subscription vs contingency with
     30 qualified importers in the 20–400 container band.
Kill criteria:
  - Abandon if fewer than 15% of 100 sampled invoices fail an FMC mandatory element.
  - Abandon if fewer than 5 of 20 manually-run disputes result in waiver, reissue,
    or reduction within 60 days.
  - Abandon if fewer than 3 of 30 price-tested importers accept a subscription
    without demanding pure contingency.
  - Abandon if BlueCargo or an equivalent funded player ships self-serve importer-side
    demurrage audit under $500/mo before your v1.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2: Get invoices.** Post the free-teardown offer in three importer/FBA communities and cold-email 100 importers pulled from BOL data in the 20–400 container band. Target: 30 real D&D invoices in hand. If you cannot get 30 invoices from 100 targeted asks, the pain is not what you think it is — that's a signal in itself.
- **Day 3–4: Hand-audit against the rule.** Build the ~20-element checklist straight from 46 CFR Part 541 and manually score every invoice collected. Produce one number: **what percent of real invoices fail at least one mandatory element?** Simultaneously, draft and send defect-based disputes for every invoice still inside its 30-day window, with the customer's permission.
- **Day 5: Decide.** Go if **≥25% of sampled invoices fail at least one mandatory element** and **≥10 of the 30 importers ask what it would cost to have this done every month**. No-go if the defect rate is under 15% — that means carriers cleaned up their billing after 2024 and the wedge has already closed.

The falsifiable result is the defect rate. It's a countable number from real documents, it takes five days to produce, and it either supports the entire thesis or kills it outright. Run that before writing a line of code.
