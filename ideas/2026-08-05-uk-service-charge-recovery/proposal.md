---
title: "ChargeSift — service charge auditor for UK occupiers"
slug: uk-service-charge-recovery
date: 2026-08-05
category: PropTech / UK-SMB — Multi-Site Retail, Hospitality and Leisure Occupiers (10–80 Leased Units) Paying Landlord Service Charges
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Reads every landlord service charge pack and flags the money a retailer can still claw back before the certificate binds."
tags:
  vertical: PropTech
  model: SaaS
  geography: EU
  secondary: [UK, Compliance-driven, SMB, AI-agent, Document-intelligence, Cost-recovery]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ChargeSift

## 1. One-liner

Reads every landlord service charge pack and flags the money a retailer can still claw back before the certificate binds.

## 2. Trend signal — why now?

Three things moved at once, and they moved in the occupier's favour for the first time in a decade.

**RICS rewrote the rulebook and made it mandatory.** The RICS professional standard *Service Charges in Commercial Property, 2nd edition* took effect **31 December 2025**, with full compliance expected for service charge years ending **31 December 2026 and beyond**. It is the biggest overhaul of service charge governance in nearly ten years. Critically, it converts what used to be soft "best practice" into **eight mandatory performance standards** binding on RICS members and regulated firms — the managing agents who issue these packs. Among them: management fees "must be fixed at the start of each service charge year" and cannot be a percentage of budgeted or actual costs; "any commissions, rebates, or third-party payments received in connection with service charge expenditure" must be declared in the accounts; advance payments must sit in discrete or virtual accounts; interest earned must be credited back; and the manager must "seek to recover no more than 100% of proper and actual costs."

That last set is the whole business. Percentage-based management fees and undisclosed insurance commissions are two of the most common line items in UK service charge packs, and both are now explicitly non-conforming. The standard also expects year-end accounts **within four months** of year end — a hard, checkable date.

**Costs are spiking and occupiers are shouting.** Shopping centre service charge budgets are rising ~4.5% in 2026. Shopping centres run roughly £10–25 per sq ft versus about £1 per sq ft at retail parks; UK offices average about £36,000 per annum, roughly £7.20 per sq ft. Labour is over half of all service charge expenditure, and site management, cleaning, security, M&E and fabric repairs are all rising at or above inflation. Trade press has reported service charge hikes pricing retailers out of shopping centres. The historic UK service charge pool has been estimated at around **£4.1 billion annually**.

**The law says pay first, argue later — so the argument is worth automating.** In *Sara & Hossein Asset Holdings Ltd v Blacks Outdoor Retail Ltd* [2023] UKSC 2, the Supreme Court upheld the landlord-friendly "pay now, argue later" model while confirming tenants keep the right to challenge reasonableness afterwards. Separately, the High Court in *Trocadero (2015) LLP v Picturehouse Cinemas Ltd* ordered a landlord to reimburse a tenant on insurance rent, with a Court of Appeal hearing listed for June 2026. Meanwhile leases routinely make the certificate "conclusive, final and binding on the tenant, save for clear errors" — so a tenant who misses the query window loses the money permanently, and solicitors warn that "many leases contain strict time limits" where "a delay can result in the tenant losing the right to dispute the charges."

Put together: the charges are going up, a mandatory standard now defines exactly what "wrong" looks like, and there is a closing window each year to say so.

```
Provenance:
  - Signal 1 (demand): UK commercial tenants dispute hundreds of millions in service charges annually, root cause opacity; shopping centre budgets +4.5% in 2026; centres run £10–25/sq ft; service charge hikes pricing retailers out of centres — https://princesurveyors.co.uk/blog/service-charges-in-commercial-property-rics-2nd-edition-standards-for-building-surveyors-in-2026-valuations-and-disputes/ , https://www.drapersonline.com/news/retailers-face-service-charge-hikes , https://shepcom.com/theaveragepriceofaservicecharge/ — observed 2026-08-05
  - Signal 2 (feasibility): RICS Service Charges in Commercial Property 2nd ed. effective 31 Dec 2025, eight mandatory performance standards incl. fixed management fees, commission/rebate disclosure, 100%-cost cap, accounts within four months — machine-checkable rules against a standardised cost classification — https://www.rics.org/content/dam/ricsglobal/documents/standards/Service-charges-in-CP_2nd-ed_amended-Oct-2025.pdf — observed 2026-08-05
  - Signal 3 (economic): ~£4.1bn annual UK service charge pool; non-compliant service charges treated as latent liability affecting net income and capital value; paid consultancies and fixed-fee challenge services already monetise this shape (£179–£1,000+ on the residential side) — https://servicechargechallenge.co.uk/ , https://www.servicechargeassociates.co.uk/ — observed 2026-08-05
  Category: Regulatory arbitrage
```

## 3. The opportunity

Every year a UK occupier receives, per site, a service charge budget and later a year-end reconciliation pack. For a 30-site retailer that's 60 documents a year, each 10–40 pages, each in a different managing agent's format, each with an apportionment schedule the tenant has no easy way to verify. The finance team pays them because the lease says pay now. Nobody reads them properly. The money that leaks out is invisible precisely because checking it costs more than most people think it recovers.

There are two existing ways to deal with this and both are bad for the target customer:

**Consultancies and accountancy firms** — Service Charge Associates, Wisteria, Carbon Accountancy, Edge, plus the surveying arms of the big agencies — do real, high-quality service charge audits. They are bespoke human engagements, priced and scoped for large portfolios and one-off disputes. If you have 25 sites and suspect a few thousand pounds is wrong at each, the audit fee eats the recovery. So you don't commission one, and the leak continues forever.

**Occupier lease-admin software** — Occupier, WebTerrier, Re-Leased and similar — stores your leases, tracks your break dates, and records what you paid. It is a filing cabinet with reminders. None of them opens the managing agent's PDF, maps the costs to the RICS cost classification, compares your apportionment against your demised area, checks the management fee basis, hunts for undisclosed insurance commission, and hands you a query letter. They tell you *that* you paid £84,000. They do not tell you that £6,200 of it shouldn't have been charged.

The gap is a **software-priced, per-site, every-year check** that sits between "ignore it" and "hire a surveyor." Document AI got good enough to read heterogeneous property PDFs reliably in the last 18 months, and RICS just published the ruleset to check them against. That's the unlock: before the 2nd edition, "is this fee reasonable?" was a matter of professional judgment. Now a large part of it is a rules test — is the management fee a fixed sum or a percentage? Is commission declared? Is there an improvement cost dressed up as repair? Are void units being charged to occupied tenants? Did the certificate arrive within four months?

The wedge is that the standard turned an opinion into a checklist, and a checklist is software.

## 4. Target market

**Primary customer:** Head of Property, Estates Manager, or Finance Director at a UK multi-site occupier with **10–80 leased units** — restaurant and pub groups, coffee and food-to-go chains, gyms and leisure operators, opticians/pharmacy/veterinary chains, regional fashion and homeware retailers, childcare and clinic groups. Typically £5M–£120M turnover. Crucially: big enough that service charge is a six-figure annual line, small enough that there is no in-house chartered surveyor. Often it's one property person and a part-time analyst, or the FD doing it between other jobs.

**Why they buy:** Because they are paying a number they cannot verify, and they know it. A 30-site operator in shopping centres and high streets might pay £700K–£1.5M a year in service charge. Practitioners consistently point at the same recurring faults: percentage-based management fees, undisclosed insurance commissions, improvement works recharged as repairs, void unit costs pushed onto paying tenants, apportionments that never got updated when the centre re-let, and sinking fund contributions with no visible fund. Even a 3–5% error rate on £1M is £30–50K a year — and under "pay now, argue later" they've already handed it over.

**Rough TAM reasoning:** The UK service charge pool has been estimated around £4.1bn annually. There are on the order of tens of thousands of UK businesses occupying 10+ commercial units — multi-site hospitality alone runs to several thousand operators, plus retail chains, healthcare groups, gyms, nurseries and franchise networks. A realistic serviceable base for a bootstrapped tool is **8,000–15,000 UK occupier organisations**. At £6K–£30K ACV, capturing 200–400 of them is a £3–6M ARR business. That is the whole ambition — no unicorn maths required.

**Why now for them:** Their 31 December 2026 year-end is the first one where the RICS 2nd edition mandatory standards fully bite. Budgets for that year are being issued right now. Occupiers who set up a checking process during 2026 are positioned to query the reconciliations that land in early-to-mid 2027 — inside the window, before the certificate goes conclusive. Occupiers who don't will pay whatever arrives, as usual.

## 5. Product sketch (MVP)

- **Drop the pack, get the findings.** Upload (or auto-forward from a mailbox) any managing agent's service charge budget or year-end reconciliation PDF. ChargeSift extracts every cost line, the apportionment basis, the management fee, the certificate date and the accompanying notes.
- **RICS 2nd edition conformance check.** Automatic test of each pack against the eight mandatory performance standards: is the management fee a fixed sum rather than a percentage; are commissions, rebates and third-party payments declared; is interest credited; is there evidence of >100% cost recovery; did the certificate arrive within four months of year end; are costs mapped to the Industry Standard Cost Classifications.
- **Non-recoverable line detector.** Flags the classic categories the standard excludes — landlord investment and improvement works, initial fit-out or new plant, void unit costs, marketing of empty units, rent collection costs — and quotes the specific line item and page.
- **Apportionment sanity check.** Compares the percentage you're charged against your demised floor area and the centre's lettable area, and flags where your share drifted year-on-year without explanation.
- **Year-on-year and cross-site benchmarking.** Your own portfolio becomes the benchmark: cleaning at £2.10/sq ft in one centre versus £3.80 in a comparable one, security up 22% with no stated cause. Across your sites, in one table.
- **Lease clause overlay.** You load the service charge and insurance clauses once per site; findings are filtered against what your specific lease actually permits, because the lease always outranks the standard.
- **Query letter generator.** Produces a dated, itemised query letter to the managing agent citing the line item, the amount in dispute, the lease clause and the relevant RICS mandatory standard — the thing that actually starts the clock and preserves the position.
- **Deadline tracker.** Per site: year end, four-month accounts expectation, your lease's query window, and whether the certificate has gone conclusive. Red before it closes.

## 6. AI angle — what's load-bearing

Remove the AI and this product cannot exist, because the input is the problem.

There is no standard file format for a UK service charge pack. Every managing agent — and there are hundreds, from Savills and JLL down to two-person regional firms — issues its own PDF layout, its own cost line naming, its own apportionment presentation. One calls it "M&E maintenance," the next "Mechanical & Electrical," the third "Plant & Systems Servicing." Some are text PDFs, plenty are scans. Historically this is exactly why the work stayed human and expensive: a surveyor had to read it.

The load-bearing AI work is threefold. First, **document extraction across unbounded formats** — pulling a reliable structured cost schedule out of an arbitrary pack, including scanned tables and footnotes where commission disclosures tend to hide. Second, **semantic mapping to the RICS Industry Standard Cost Classifications**, which is a judgment task, not a lookup: deciding that "Estate Wardening" belongs under Security, or that "Refurbishment of Entrance Atrium" is an improvement rather than a repair, is the finding itself. Third, **reading the narrative notes** — the disclosure of a commission, or the justification for a cost uplift, is usually prose buried on page 19, and detecting its presence or absence against a mandatory disclosure duty is a language task.

The rules engine on top — is the fee fixed or percentage, did the certificate land within four months — is deterministic and should be. But it has nothing to operate on until the AI has turned a shoebox of inconsistent PDFs into a comparable dataset. That conversion is 80% of the value and it became commercially viable only recently, as document-understanding models got accurate and cheap enough to run over thousands of pages per customer per year at a few pounds of inference cost.

## 7. Localization angle (if any)

This is a UK-first play, and the locality *is* the moat rather than a translation exercise.

The product encodes the RICS Service Charges in Commercial Property 2nd edition, the Industry Standard Cost Classifications, English commercial leasehold conventions, and case law that only makes sense in this jurisdiction — *Sara & Hossein v Blacks* on pay-now-argue-later, *Trocadero v Picturehouse* on insurance rent, and the "conclusive save for manifest error" certificate wording that appears in standard institutional leases. None of that transfers.

There is a natural second market in **Ireland**, which follows closely comparable practice, and a longer-term one in **Australia and Canada**, where retail leases have statutory service charge disclosure regimes of their own. But those are year-two conversations. Attempting a generic "global service charge" product would produce something that checks nothing specific and therefore finds nothing — the opposite of the wedge.

The other local dimension is distribution: this market is reachable through a small number of UK trade bodies, property trade press, and a genuinely tight community of multi-site property managers who all know each other.

## 8. Business model — path to $1M–$5M ARR

**Pricing:** Per-site annual subscription with a floor, because the work scales with sites, not seats.

- **Starter** — £249/mo for up to 15 sites (£2,988/yr)
- **Growth** — £749/mo for up to 40 sites (£8,988/yr)
- **Portfolio** — £1,650/mo for up to 100 sites (£19,800/yr)
- **Recovery assist** — optional 12% success fee on amounts actually credited back, for customers who want the query pursued rather than just identified

**ACV:** Realistically **£9,000** blended. Most early customers land on Growth. The success fee is deliberately optional and secondary — it's a strong closing tool for sceptics ("you pay us out of what we find") but a terrible primary model for a bootstrapper, because recoveries are lumpy and can take a year to land.

**Rough math to $1M ARR (~£790K):** ~88 customers at £9K ACV. That is 88 UK multi-site occupiers out of a serviceable base in the thousands. At a realistic pace — 4–8 new customers a month once the outbound motion works — that's roughly 15–20 months.

**Rough math to $5M ARR (~£3.95M):** ~330 customers at an ACV lifted to ~£12K by portfolio-tier mix and success fees. This needs three things true: the product handles the long tail of managing agent formats without hand-holding, at least one trade body or franchise network becomes a repeatable channel, and net revenue retention exceeds 100% as customers add sites. It also likely needs the **landlord-side inversion** — selling the same conformance check to managing agents who now have a mandatory standard to prove they meet. That's a bigger market and a warmer one, since non-compliance is a stated liability against their fee income.

**Expansion path:** More sites is the primary lever and it's automatic as chains grow. Then: insurance rent review as a separate module (a live issue given *Trocadero*), business rates cross-check, dilapidations exposure tracking, and multi-year historical sweeps — "audit our last three years" is a natural high-value one-off that converts into the subscription.

**Cost shape:** Inference is the main variable cost. A 30-site customer generates roughly 60 packs a year averaging 20 pages — about 1,200 pages annually. Even at generous per-page processing costs, that's well under £100/yr against a £9,000 ACV. Gross margin sits comfortably above 90%. The real cost is support during onboarding, which is why the lease-clause setup needs to be genuinely light.

## 9. Go-to-market wedge — first 100 customers

The single most important fact about this market: **the pain is provable for free, before anyone pays.** That shapes everything below.

- **The free retrospective audit as the entire top of funnel.** Build a list of 1,500 UK multi-site occupiers with 10+ sites — scrapeable from Companies House filings, retail and hospitality directories, franchise association member lists, and the tenant mix pages published by shopping centres themselves. Offer: *"Send us last year's service charge pack for your three biggest sites. We'll send back a findings report in 72 hours, free. If we find nothing, you've lost nothing."* This is the whole pitch. Expect ~6–9% to send documents, because the ask is one email forward and the downside is zero. Of those who send, the ones where real findings land convert at a high rate — you are showing them a number they didn't know they'd lost. Target 30–40 customers from this motion in the first six months.

- **The managing-agent-specific teardown, published.** Pick the twenty largest UK managing agents. For each, publish an anonymised analysis of how their packs perform against the RICS 2nd edition mandatory standards — commission disclosure present or absent, fee basis fixed or percentage, certificate timeliness. This is catnip for the trade press (Property Week, Drapers, Retail Gazette, Propel for hospitality) and it's the kind of content that gets forwarded between property managers. It also does something subtle and valuable: it makes agents aware they're being graded, which improves the market and cements you as the referee.

- **Trade bodies and peer groups, direct.** UK multi-site property managers cluster in a small number of places — the British Independent Retailers Association, UKHospitality, the British Retail Consortium's smaller-member tiers, Revo (the retail property body), and a handful of active LinkedIn communities and WhatsApp groups for estates managers. One well-received talk titled "What the new RICS standard lets you claw back" at a members' event puts you in front of 60–150 exact-fit buyers who all have the same year-end. Aim for six of these in year one.

- **Franchise networks as a multiplier.** Franchisors with 30–200 franchisees each holding a lease are a single conversation that reaches a whole cohort. Coffee, fast food, gyms, childcare, and convenience franchising in the UK is dense. Sell to the franchisor as a member benefit at a negotiated rate.

- **Ride the calendar.** The vast majority of UK service charge years end on 25 December (quarter day) or 31 December. Reconciliation packs therefore land in Q1–Q2. Outbound timed to February–April, when the pack is literally on the desk and unexplained, converts several times better than the same email sent in September. Build the year around that spike.

## 10. Build complexity — justification

**Medium.** The rules engine, the deadline tracking, the benchmarking tables and the query letter generation are all standard web application work — a competent pair does that in six to eight weeks. The lease clause overlay is light because the customer supplies the clauses.

The hard part, and the only genuinely hard part, is reliable extraction across hundreds of managing agent PDF layouts including scans, plus the semantic mapping to RICS cost classifications with high enough precision that findings aren't embarrassing. False positives are worse than misses here: a customer who sends a query letter about a charge that turns out to be perfectly proper looks foolish in front of their landlord and churns immediately. That demands a human-in-the-loop review step for v1 — the founder personally checking every findings report before it goes out — and a confidence threshold below which findings are marked "worth asking about" rather than "wrong."

Realistically **four to five months to a v1** that can serve paying customers, for two people, with the first two months spent almost entirely on document extraction accuracy against a corpus of real packs gathered during the free-audit outreach. That corpus is both the training input and the sales pipeline, which is a pleasing property of the plan.

Domain expertise is non-negotiable. Either a founder learns UK commercial service charge practice properly, or a chartered surveyor comes in as co-founder or paid advisor. Shipping this with a naive reading of the standard produces confidently wrong output.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Analysing documents your customer already lawfully holds and drafting query correspondence. Must stay clear of reserved legal activities — the product identifies and drafts, it does not litigate or give formal legal advice. Existing fixed-fee challenge services operate this way explicitly. |
| Ethical — no harm / dark patterns | ✅ | Helps tenants verify charges against a published professional standard. Improves market transparency. Requires honest confidence labelling so customers don't send baseless queries. |
| Market exists (evidence above) | ✅ | ~£4.1bn annual service charge pool, paid consultancies and fixed-fee challenge services already operating, budgets rising 4.5%, trade press covering hikes. |
| 1–5 person team can build this | ✅ | Two people plus a surveyor advisor. Document AI is off-the-shelf. |
| Launchable with <$50K / ₹40L | ✅ | Realistically £15–25K: inference, hosting, advisor fees, a few trade events. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money, annually, on a line customers admit they cannot verify — and "pay now, argue later" means it's already out the door. Held back from higher because it's a once-or-twice-a-year pain, not daily, and many occupiers have tolerated it for years without acting. Habituated pain converts slower than acute pain. |
| Demand evidence | 15 | 12/15 | Strong and multi-sourced: £4.1bn pool, consultancies charging real fees, a residential equivalent selling £179–£1,000 packs, rising costs in trade press, live case law. Docked because I could not source verbatim quotes from *commercial* multi-site occupiers specifically — the loudest public complaints are residential leaseholders, and that's an inference gap I'm not going to paper over. |
| Build feasibility | 15 | 11/15 | Rules and workflow are easy; extraction across unbounded PDF formats with low false-positive tolerance is not. Four to five months, needs domain expertise on the team. |
| Distribution clarity | 15 | 12/15 | The free retrospective audit is a genuinely strong, cheap, zero-risk opener with a nameable list and a seasonal spike. Trade bodies and franchisors are concrete multipliers. Not higher because the buyer is sometimes hard to identify from outside — "who handles property?" varies by org. |
| Revenue mechanics | 15 | 11/15 | Per-site pricing matches value delivery, margins above 90%, £1M ARR needs only ~88 customers. Uncertainty sits in whether Growth-tier pricing holds against a buyer who may anchor on "it's just reading PDFs" and in how much the optional success fee actually contributes. |
| Time to first revenue | 10 | 8/10 | Free audits can start before the product is finished — findings delivered semi-manually convert to paid subscriptions inside 8–10 weeks. Not a 9–10 because the buying decision usually touches an FD and a property lead, so a short internal cycle is normal. |
| Defensibility | 10 | 5/10 | Honest assessment: the rules are public and the AI is commodity. The moat is accumulating — a corpus of parsed packs per managing agent, per-centre benchmark data no single occupier can assemble alone, and brand as the referee. That compounds, but at month three it's an execution-only moat and a funded competitor or an incumbent like Bellrock pivoting to the occupier side could compress it. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

The technical work is document AI accuracy under a low false-positive tolerance. The domain work is UK commercial service charge practice, which cannot be improvised. Best shape is a technical founder paired with a chartered surveyor or ex-managing-agent who has issued these packs and knows exactly where the bodies are buried. A sales-heavy founder without either would build something plausible that finds nothing real.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of real-world service charge packs contain findings worth £2,000+ per site per year. **How to test:** Collect 40 genuine packs from 15 occupiers during the free-audit outreach and have a chartered surveyor audit them by hand. Measure findings rate and average recoverable amount per site. This is the load-bearing assumption for the entire business — everything else is downstream of it.

2. **Assumption:** Multi-site occupiers with 10–80 units will pay £3K–£20K/yr for identification alone, rather than insisting on a pure success-fee arrangement. **How to test:** Present both pricing models to 25 qualified prospects after delivering their free audit, and track which they choose and at what point they push back.

3. **Assumption:** Document extraction can hit acceptable precision across the long tail of managing agent formats without per-agent manual templating. **How to test:** Assemble 150+ packs from at least 25 distinct managing agents; measure line-item extraction accuracy and cost-classification precision. If precision on classification sits below ~90%, the human review step becomes permanent and the margin story changes.

4. **Assumption:** Occupiers will actually send the query letter, not just read the report and do nothing. **How to test:** Track send-rate among the first 20 customers. A high read-rate with a low send-rate means you've built an anxiety generator, not a recovery tool, and the product needs to move toward doing the chasing.

5. **Assumption:** The RICS 2nd edition genuinely changes agent behaviour and disclosure enough to be citable leverage. **How to test:** Compare packs issued for 2025 year-ends against those for 2026 year-ends on commission disclosure and fee basis. If nothing changes, the regulatory hook is weaker than assumed and the pitch reverts to plain benchmarking.

### Risk flags

1. **Landlord relationship risk.** This is the biggest non-obvious one. Some occupiers will not want to antagonise a landlord they need goodwill from at rent review or lease renewal. Expect a real segment to say "we don't want to rock the boat." Mitigation: position early findings as "clarification queries," not disputes, and lead with the sites where the relationship is already transactional.

2. **Standard is not law.** The RICS standard binds RICS members and regulated firms, but the lease always outranks it. A tenant whose lease permits percentage-based management fees has a weaker position regardless of what the standard says. The product must filter findings through the actual lease or it will produce confident nonsense.

3. **Incumbent pivot.** Bellrock already holds service charge benchmarking data and a system (InsightRE) built for the landlord/agent side. If they turned that toward occupiers, they'd start with a data asset that takes years to accumulate. Speed and occupier-side trust are the only answers.

4. **Seasonality and cash flow.** Revenue interest concentrates around Q1–Q2 reconciliation season. A subscription smooths this, but early-stage pipeline will be lumpy and the quiet half-year can look like the business is dying when it isn't.

5. **False positives as an existential quality risk.** One embarrassing query letter that a managing agent swats down publicly damages trust disproportionately in a small, gossipy market. Precision must be prioritised over recall in v1, even at the cost of finding less.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a chartered surveyor or
                        ex-managing-agent co-founder/advisor who has issued
                        service charge packs and knows where errors hide
Time to revenue:        8-10 weeks (free audits convert before full product ships)
Capital to launch:      £15-25K ($20-32K)
Top 3 assumptions to validate first:
  1. Real packs contain £2,000+/site/year of findings — hand-audit 40 genuine
     packs from 15 occupiers with a chartered surveyor
  2. Occupiers pay subscription for identification, not just success fee —
     present both models to 25 qualified prospects post-audit, track choice
  3. Extraction holds precision across 25+ managing agent formats — measure
     classification accuracy on a 150-pack corpus
Kill criteria:
  - Abandon if hand-auditing 40 real packs yields findings in under 30% of
    sites, or averages below £1,500 recoverable per site per year
  - Abandon if fewer than 8 of 25 post-audit prospects will commit to a
    subscription without a pure success-fee structure
  - Abandon if cost-classification precision stays below 85% after two months
    of work on a 150-pack corpus, making permanent human review unavoidable
  - Abandon if Bellrock or a comparable benchmarking incumbent ships an
    occupier-side conformance product before your v1
```

## 15. Next step — 1-week validation sprint

The whole week is aimed at one falsifiable question: **do real service charge packs actually contain recoverable money, and will occupiers hand them over?**

- **Day 1–2 — Build the list and make the ask.** Assemble 200 UK multi-site occupiers (10+ sites) from Companies House, hospitality and retail directories, and shopping centre tenant listings. Identify the property or finance contact. Send a single-paragraph email: *"We're testing a service charge checking tool. Send us last year's pack for your three biggest sites and we'll return a findings report in 72 hours, free, no obligation."* No product, no demo, no deck.

- **Day 3–4 — Audit by hand with a surveyor.** For every pack received, sit with a chartered surveyor and manually work through the RICS 2nd edition mandatory standards: fee basis, commission disclosure, non-recoverables, apportionment, certificate timing. Record for each site whether a finding exists and its estimated recoverable value. Do this manually and honestly — the point is to learn the true base rate, not to prototype.

- **Day 5 — Deliver findings and ask for money.** Send each participant their real report. Then ask the closing question directly: *"If this ran automatically across every site every year, would you pay £749 a month?"* Record the actual answer, not the polite one.

**Go / no-go, measured:** Proceed only if **≥12 of 200 occupiers send packs** (≥6% document-share rate), **≥40% of audited sites contain at least one legitimate finding**, average recoverable value is **≥£1,500 per site per year**, and **≥4 participants say yes to subscription pricing** unprompted by a success-fee alternative.

If occupiers won't even forward a PDF when the audit is free and the downside is zero, the pain is not felt strongly enough to sustain a subscription — and no amount of product quality fixes that. Kill it and move on.
