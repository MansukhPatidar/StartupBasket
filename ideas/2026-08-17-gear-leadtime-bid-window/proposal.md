---
title: "LeadLock — gear lead-time window for electrical estimators"
slug: gear-leadtime-bid-window
date: 2026-08-17
category: TradeTech / US
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Tells an electrical estimator which long-lead gear will blow the schedule before the bid goes out, not after award."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Solo-builder, Procurement, Construction]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# LeadLock

## 1. One-liner

Tells an electrical estimator which long-lead gear will blow the schedule before the bid goes out, not after award.

## 2. Trend signal — why now?

Electrical gear lead times broke and never healed. This is not a 2021 supply-chain story that resolved — it got worse through 2026 because AI data centre buildout is eating manufacturing slots that commercial contractors used to walk into.

The current numbers, from a publicly maintained index updated 13 August 2026: power/substation transformers **160+ weeks**, generator step-up transformers **144 weeks**, low-voltage switchgear **54 weeks**, medium-voltage switchgear **44 weeks**, switchboards **32–41 weeks**, panelboards **21–32 weeks**. Commodity breakers are still in stock. The spread between "in stock" and "three years" inside a single bid package is the whole problem.

Two things make this urgent rather than merely annoying:

**Quotes go stale inside a quarter.** Eaton's disclosed 2026 price-letter cadence is roughly quarterly (15 January, 1 April, more expected), with prices moving 4–10%. A bid assembled in February against a January quote is wrong by April.

**The schedule cost dwarfs the price delta.** The sharpest framing I found in the trade press: on gear feeding a facility with a fixed commissioning date, a 60-to-90-day delay in placing the order "does not just re-quote at a higher list — it slips to the back of a queue measured in quarters." You do not lose 6% on the line item. You lose the milestone. And liquidated damages at $1,000/day over 30 days is $30,000, which erases the profit on a mid-size job.

Meanwhile the estimator's actual process today is manual and admitted to be so. The advice given to estimators in 2026 is to phone OEMs or distributors for current lead-time indications on every bid — "this step takes an hour but it is the single most important thing you can do" — and explicitly *not* to quote "from your memory of what it was last year." The documented failure mode is estimators "who quote programmes based on pre-2024 lead time assumptions are quoting incorrectly," missing 40+ week delays.

An hour of phone calls per bid, repeated across every bid a shop chases, most of which it loses. That is the workflow sitting on the table.

Provenance:
  - Signal 1 (demand): Estimators told to spend ~1 hour per bid phoning OEMs/distributors for lead times; those quoting on pre-2024 assumptions "are quoting incorrectly" and miss 40+ week delays — https://www.electronate.app/blog/switchgear-lead-times-2026-data-center-boom — observed 2026-08-17
  - Signal 2 (feasibility): Public, sourced, trend-tagged lead-time index covering transformers/switchgear/switchboards/panelboards, last updated 2026-08-13, drawing on Siemens CompAS, NEMA, Wood Mackenzie, SEC filings, Census M3, ISM — https://usevawn.com/resources/electrical-equipment-lead-times/ — observed 2026-08-17
  - Signal 3 (economic): Eaton 2026 price letters roughly quarterly, prices moving 4–10%, parts 60+ weeks; a 60–90 day ordering delay slips the order "to the back of a queue measured in quarters," where schedule cost dwarfs the list-price delta — https://getuniqcli.com/news/eaton-price-increase-2026 — observed 2026-08-17
  Category: Workflow automation

## 3. The opportunity

Estimating software prices *material*. It does not price *time*.

Accubid, ConEst IntelliBid, and the rest are mature, expensive, and very good at what they do: take off quantities, apply labour units, assemble a bid. They assume the material shows up. That assumption held for thirty years and stopped holding in 2022.

So the lead-time question got pushed into the gap between tools — a phone call, a rep's email, a number in someone's head. It is the single highest-consequence input in the bid and the only one with no system of record.

The gap is not data availability. Aggregate lead-time data is public and free (see the VAWN index above). The gap is that nobody binds that data **to a specific bid, on a specific date, against a specific required-on-site date, with a record of what you knew when you priced it.**

That last clause is what turns a free chart into a product. When the job goes sideways and the GC asks why the gear is late, the estimator who can produce "here is the 44-week MV switchgear read as of 12 March, here is the order-by date I published in my proposal, here is the date you actually awarded" is in a completely different negotiating position than the one who cannot.

Incumbent weakness, named plainly: Accubid and ConEst will not build this, because lead-time intelligence is not a takeoff feature and their release cycles are measured in years. The free index will not build it either, because it is a marketing asset for a consultancy, not a workflow tool. Neither is wrong. Both leave the estimator alone at 11pm before a bid deadline.

## 4. Target market

- **Primary customer:** Chief estimator or estimating manager at a US commercial electrical contractor, 20–200 field employees, $5M–$80M annual revenue, bidding commercial/institutional/light-industrial work with gear packages. The buyer is the person whose name is on the bid.
- **Why they buy:** Because they have already been burned once. The pain is not abstract — it is the job where the switchgear landed eleven weeks after rough-in was scheduled, and the argument about whose fault that was cost more than the gear. They buy to never have that conversation undefended again.
- **Rough TAM reasoning:** There are roughly 70,000+ electrical contracting establishments in the US. The slice that bids gear packages rather than pure service/resi work — call it firms above ~20 employees — is a five-figure count, plausibly 8,000–15,000 shops. At $300/mo that is a $30M–$50M ceiling. I do not need the ceiling; I need 300 of them.
- **Why now for them:** Data-centre demand is actively pulling manufacturing capacity away from ordinary commercial work, and the lead times have moved far enough that pre-2024 intuition is not merely stale but dangerous. An estimator's twenty years of experience is now a liability on this one input.

## 5. Product sketch (MVP)

- **Bid-level gear register.** Enter the long-lead items on a bid (gear type, voltage class, OEM if known, required-on-site date). Not a takeoff — a short list of the five to fifteen things that can hurt you.
- **Order-by date, computed.** For each item: current lead time, plus buffer, back-solved from the required-on-site date. Output is a single date per item — "PO must be placed by 14 November" — and a red/amber/green on whether the bid schedule is even physically achievable.
- **Bid-day snapshot, frozen.** One click stamps what the lead times were on the day you priced it, with sources. Immutable. This is the evidence artefact.
- **Quote staleness alarm.** Log the vendor quote date and validity; get told when a quote on a live pursuit has aged past its window or an OEM price letter lands.
- **Award-date drift check.** When a bid you priced in March gets awarded in July, LeadLock re-runs the arithmetic and tells you what moved and what it costs — before you sign.
- **Proposal clause generator.** Drafts the lead-time qualification and order-by contingency language to attach to the bid, populated with the actual dates. This is what gets the estimator out of the argument later.
- **Portfolio view.** Every live pursuit and its worst-offender item, ranked by how close the order-by date is.

## 6. AI angle — what's load-bearing

Remove the AI and the product still exists but becomes a manual data-entry chore nobody completes. The AI does three jobs that are genuinely hard as plumbing:

**Reading the quotes.** Gear quotes arrive as PDFs and emails from reps, in wildly inconsistent formats, with lead time expressed as "38-42 weeks ARO," "shipping week 47," "approx 9 months from approved submittals," or buried in a note on page four. Extracting item, price, validity window, and lead-time basis out of that mess is exactly the job that got cheap and reliable in the last two years. This is the load-bearing use.

**Normalising the lead-time basis.** "ARO" (after receipt of order) and "after approved submittals" can differ by six to ten weeks of submittal review. An estimator who treats them as the same number is wrong in a way that eats the entire buffer. Mapping vendor phrasing onto a consistent clock is a language problem before it is a data problem.

**Matching bid items to categories.** A spec calls for "1200A MV switchgear, arc-resistant." Mapping that to the right lead-time category and flagging the arc-resistant premium as a further constraint requires reading spec language, not a dropdown.

What is *not* AI: the order-by arithmetic. That is subtraction, and it should be transparent and auditable, because the estimator is going to stake a claim on it. I would resist any temptation to make the core number model-generated.

## 7. Localization angle

N/A — this is a US-first play. The wedge depends on US-specific OEM behaviour (Eaton/Siemens/Square D price-letter cadence, NEMA data, US distributor structure) and on US contracting norms around liquidated damages and bid qualifications. The same pain exists in EU/UK and the Gulf, but the data sources and the OEM mix differ enough that it is a second market, not a launch market. India is not a fit — different gear supply chain, different bid culture, far lower willingness to pay for estimating tooling.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $249/mo for a single-estimator shop, $499/mo for up to five estimators, $999/mo for a full estimating department with the portfolio view and API. Annual billing discounted 15%.
- **ACV:** ~$4,500 blended, assuming the mix skews to the $499 tier.
- **Rough math to $1M ARR:** 220 shops × $499/mo × 12 ≈ $1.3M. Two hundred and twenty shops out of a plausible 8,000–15,000 that bid gear is well under 3% penetration.
- **Rough math to $5M ARR:** ~900 customers at a slightly higher blended ACV, which realistically requires either the mechanical trade (chillers, AHUs, generators — same disease) or an integration into an estimating suite that carries distribution. I would not underwrite $5M on electrical alone.
- **Expansion path:** Seats first, then adjacent trades, then the genuinely valuable one — a paid data product for GCs and owners' reps who want to sanity-check the schedules their subs are handing them. That flips the customer from the person defending the date to the person interrogating it, which is a bigger wallet.

Sanity check on price: these shops already pay $150–$1,500 per seat per month for estimating software, with full Accubid/ConEst deployments running $5,000–$20,000/year. $249–$999/mo sits comfortably inside an existing budget line and is trivially justified against one $30,000 liquidated-damages event.

## 9. Go-to-market wedge — first 100 customers

- **The free order-by calculator, seeded where estimators already argue.** A single-page tool: pick gear type, enter required-on-site date, get the order-by date and a shareable dated snapshot. Post it into the Mike Holt business-management/estimating forum (an active, decades-old community where this exact cohort posts daily) and the electrician/construction subreddits. Estimators share dated screenshots with GCs; every share is a branded impression at the moment of maximum relevance. Target: 2,000 calculator uses in 90 days, 4% to trial.
- **NECA chapter attack, one chapter at a time.** NECA has local chapters that run estimator training and roundtables. Offer a free 45-minute session — "what gear lead times actually are in 2026, and how to qualify your bid so you don't eat the delay" — which is genuinely useful content, not a pitch. Chapters are hungry for programming. Ten chapters × ~25 estimators, expect 10–15% to trial. This is the highest-conversion channel and the slowest; start it in week one.
- **Direct outreach off public bid tabs.** State and municipal bid tabulations publish the electrical subs who bid public work, by name, with contact details, continuously. Scrape a state's tabs, identify shops bidding gear-heavy institutional work, send a two-minute Loom showing their *own* recently-awarded project with the order-by math run against the published NTP date. That is a specific, personalised, slightly alarming artefact. 300 sends, 15% reply, 5% trial.
- **Rep and distributor co-marketing.** Gear reps *want* their contractors to order earlier — late orders are their problem too. A rep who forwards LeadLock to their contractor list is doing their own job. Ten rep firms, each with 30–80 contractor relationships.

The first hundred come from channels two and three; channel one is what makes month six cheaper than month one.

## 10. Build complexity — justification

**Low.** The core is a dated register, back-solved arithmetic, and document extraction — all off-the-shelf. Aggregate lead-time baselines are publicly published and can be seeded manually at launch; there is no dataset to acquire and no model to train. The quote-parsing pipeline is standard document extraction against messy PDFs, which is the well-trodden path in 2026. A competent solo builder ships a credible v1 in 8–10 weeks; a pair does it in 6 with a better onboarding flow.

The honest complexity is not technical — it is *editorial*. Keeping lead-time baselines current and trustworthy is ongoing human work, roughly a day a week of calling reps and reconciling published indices. Budget for that as a permanent cost, not a launch task.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | No regulated activity. Publishing lead-time estimates carries a duty to be clear they are estimates, not guarantees — handled with plain disclaimers. |
| Ethical — no harm / dark patterns | ✅ | Product makes a hidden risk visible earlier. If anything it reduces disputes. |
| Market exists (evidence above) | ✅ | Estimators already spend an hour per bid doing this manually; incumbents charge $5K–$20K/yr for adjacent tooling. |
| 1–5 person team can build this | ✅ | Solo-buildable v1 in 8–10 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Under $15K: inference, hosting, and the founder's time. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money, felt on every bid, with a documented $30K-scale downside. Not quite hair-on-fire because the pain is probabilistic — it bites on the job that goes wrong, not every job. Estimators have a workaround (phone the rep) that mostly works. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: published guidance telling estimators to do this manually every bid, an actively maintained free index proving demand for the data, quantified OEM price/lead-time movement. Docked because I could not surface verbatim estimator complaints — the forum where they live (Mike Holt) is not well indexed by search, and I will not fabricate quotes to fill the gap. |
| Build feasibility | 15 | 13/15 | Off-the-shelf extraction plus arithmetic. No novel infra. Ongoing editorial burden keeps it off 15. |
| Distribution clarity | 15 | 11/15 | NECA chapters and public bid tabs are named, enumerable channels with real conversion logic. Not 13+ because the highest-conversion channel (chapters) is slow, and the cohort is not reachable by pure self-serve motion. |
| Revenue mechanics | 15 | 11/15 | Pricing sits inside a proven budget line and is easy to justify against one LD event. Docked because $5M almost certainly requires expanding beyond electrical, which is an assumption, not a plan. |
| Time to first revenue | 10 | 8/10 | Sellable pre-build off the calculator plus a Loom. Realistic first paid customer in 6–8 weeks; no procurement cycle at this company size. |
| Defensibility | 10 | 3/10 | This is the weak axis and I will not dress it up. The arithmetic is trivial, the baseline data is public and free, and a determined competitor clones the v1 in a month. What accumulates is the dated snapshot archive per customer (switching cost after a year of bids) and the editorial trust of being *right* about lead times. That is an execution moat, not a real one. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can talk to a chief estimator without being laughed at. If the founder has never seen a gear submittal, the product will be subtly wrong in ways that destroy credibility on the first call. Either bring the domain or recruit a chief-estimator advisor before writing a line of code.

### Key assumptions to validate (3–5)

1. **Assumption:** Estimators will pay for lead-time intelligence as a standalone tool rather than waiting for Accubid/ConEst to bundle it. **How to test:** 30 discovery calls with chief estimators; ask directly what they'd pay and whether they'd buy outside their estimating suite. Look for unprompted mention of a past burn.
2. **Assumption:** The bid-day snapshot is the feature they actually value — i.e. the defensive evidence, not the convenience. **How to test:** Split the pitch across two cohorts, one led with "save an hour per bid," one led with "never lose the delay argument again." Compare trial conversion.
3. **Assumption:** Manually maintained lead-time baselines are accurate enough that estimators trust them over their own rep. **How to test:** Publish weekly baselines for eight weeks, have five friendly estimators grade each against what their reps quote. Anything under 80% agreement kills the trust premise.
4. **Assumption:** A shop bids enough gear packages per month for this to stay top-of-mind and avoid churn. **How to test:** Ask in discovery how many gear-bearing bids per month. Under four, the product is used too rarely to retain.

### Risk flags

1. **Defensibility:** Genuinely thin. Public data plus simple math. The only durable asset is the customer's own snapshot archive, which takes a year to matter.
2. **Incumbent bundling:** Accubid or ConEst adding a lead-time field is a real possibility and would compress pricing hard. Mitigation is to be the trusted data source they'd rather license than rebuild — and to move to mechanical trades before they react.
3. **Market timing (two-sided):** If lead times normalise, urgency drains and this becomes a nice-to-have. If they get dramatically worse, contractors may stop bidding fixed-date work entirely and push the risk to owners. Both ends hurt. The comfortable middle — bad but bidding — is where the business lives, and that is where 2026 sits.
4. **Data liability:** Someone will eventually claim they missed a date because LeadLock's number was wrong. Disclaimers, source attribution on every figure, and never presenting a baseline as a guarantee. Insurable, but design for it from day one.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder with a chief-estimator advisor, or an ex-estimator who codes
Time to revenue:        6–8 weeks
Capital to launch:      $12–15K
Top 3 assumptions to validate first:
  1. Estimators pay standalone rather than wait for their estimating suite — 30 discovery calls, ask price directly
  2. The dated bid-day snapshot outranks time-saving as the reason to buy — A/B the pitch, compare trial conversion
  3. Manual lead-time baselines hit >80% agreement with what reps quote — 8-week accuracy bake-off with 5 estimators
Kill criteria:
  - Abandon if <8 of 30 chief estimators in discovery can name a specific job where a gear lead time hurt them
  - Abandon if baseline accuracy stays under 80% against rep-quoted lead times after 8 weeks
  - Abandon if Accubid or ConEst ships a lead-time module before your v1 reaches 30 paying customers
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free order-by calculator — gear type in, order-by date and dated snapshot out. One page, no login. Seed the current public baselines by hand.
- **Day 3–4:** Post it to the Mike Holt business-management/estimating forum and two construction subreddits. In parallel, pull one state's public bid tabs, identify 40 electrical subs bidding gear-heavy work, and send each a personalised Loom running the math against their own recently-awarded project.
- **Day 5:** Book and run as many chief-estimator calls as the outreach yields. Ask one question first, before pitching anything: *"Tell me about the last time gear showed up late — what did it cost you and whose fault was it?"*
- **Decide go / no-go on:** ≥8 of 30 estimators name a specific costly incident unprompted, **and** ≥3 verbally commit to paying $249/mo for the snapshot-and-order-by product. Anything less and the pain is real but not purchase-triggering — which means this is a feature inside someone else's suite, not a company.

Falsifiable, and cheap enough to run before writing real code.
