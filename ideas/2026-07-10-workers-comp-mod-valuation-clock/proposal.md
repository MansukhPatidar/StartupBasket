---
title: "ModClock — reserve-review clock for small contractors"
slug: workers-comp-mod-valuation-clock
date: 2026-07-10
category: FinTech / US — Small Contractors & Trade Employers (workers' comp experience-mod valuation window)
complexity: Medium
score: 72
verdict: GO
confidence: Medium
oneLiner: "Counts down to the day your workers' comp mod locks for three years, and which claim reserves to fight first."
tags:
  vertical: FinTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Insurance, Construction, Document-AI, Deadline-driven]
axes:
  problem: 17
  demand: 12
  build: 10
  distribution: 12
  revenue: 11
  time: 6
  defensibility: 4
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# ModClock — reserve-review clock for small contractors

## 1. One-liner

Counts down to the day your workers' comp mod locks for three years, and which claim reserves to fight first.

## 2. Trend signal — why now?

Every US employer that buys workers' compensation carries an **experience modification factor** — the "mod," "e-mod," or "EMR." It is a multiplier applied straight to premium: a 0.75 mod cuts premium 25%, a 1.25 mod raises it 25%. It is computed by NCCI (or a state bureau) from three years of the employer's claim data, and it is not a soft metric. It is a gate.

Three things make this the right moment to attack it.

**The mod is set from the insurer's guesses, not from what claims actually cost.** Claim *reserves* — the adjuster's estimate of a claim's ultimate cost — are reported into the rating data at full value. The claims industry says plainly what that means. Reserves "are often set according to worst-case scenario rather than the most probable outcome" ([Plethy](https://plethy.com/reserving-workers-compensation-claims/)), and "no claim is accurately reserved until it is permanently closed" ([Alliant](https://alliant.com/news-resources/article-5-common-mistakes-to-avoid-with-claims-reserves/)). An open claim reserved at $50,000 that eventually settles for $15,000 still enters the mod at $50,000.

**There is a hard, irreversible deadline that almost no small employer knows exists.** Claim values are frozen on the **valuation date**. After that, nothing helps: "Even if a claim reserve is reduced after the Valuation Date — say it drops from $50,000 to $20,000 — your Experience Mod will still reflect $50,000" ([Cytron Group](https://www.cytrongroup.com/post/reduce-your-next-ncci-experience-mod-reserve-auditing-1)). And: "once submitted on the valuation date, this data locks in for your upcoming renewal. You cannot correct it until the following year" ([Coyle Group](https://thecoylegroup.com/workers-comp-understanding-valuation-date/)). Because the mod uses a rolling three-year window, one over-reserved claim inflates premium across **three consecutive policy years**.

**The people paid to watch that clock admit they don't.** Kevin Ring of the Institute of WorkComp Professionals — a training body, not a vendor selling recovery — states that work must start **90 to 120 days ahead of the valuation date**, and that "while closed claims are 'baked into the cake,' **open claims are still malleable — particularly their reserves, and producers often overlook this opportunity**" ([Killing Commercial](https://killingcommercial.com/blog/mastering-the-experience-mod-how-proactive-claims-management-before-the-valuation-date-saves-clients-money-a-conversation-with-kevin-ring/)). "Producers" are brokers. The free service everyone assumes the broker performs is, by the industry's own educator, routinely skipped.

Meanwhile the stakes are not merely financial. An EMR above 1.0 disqualifies contractors from bid lists — a fact contractors state in their own words, unprompted, below.

**A note on what I refused to cite.** The claim that "roughly 1 in 4 mod worksheets contains an error" is repeated across broker blogs. It traces to firms selling free mod reviews as a lead magnet, with no independent source. I searched Reddit, contractortalk, electriciantalk, JLC, and YouTube for a single real employer describing a worksheet error or a stale reserve on their own paperwork and **found none**. The error-rate statistic is a sales claim and this proposal does not rest on it. What employers *do* say, verbatim, is that the mod is opaque, arrives as a surprise, and cannot be undone. That is the pain this product sells against.

Provenance:
  - Signal 1 (Demand): Contractors state that EMR >1.0 disqualifies them from bidding and "there is no way to bring this down in any reasonable time"; a Kansas owner with one $17k claim reports a 1.35 mod and says he'd have been better off paying it out of pocket — https://www.reddit.com/r/Construction/comments/1cob3t7/ , https://www.reddit.com/r/WorkersComp/comments/1aimab8/how_long_will_a_claim_affect_employers_rates/ — 2026-07-10
  - Signal 2 (Feasibility): The employer's own NCCI Experience Rating Worksheet is purchasable by an authorized representative via Riskworkstation for roughly $15–$24 with a Letter of Authority; carrier loss runs are obtainable on request (California Insurance Code §11663.5 mandates delivery within 10 business days), making a PDF-in/parse-out product buildable without any carrier API — https://www.ncci.com/ServicesTools/Pages/ERMODS.aspx , https://codes.findlaw.com/ca/insurance-code/ins-sect-11663-5/ — 2026-07-10
  - Signal 3 (Economic): A contingency-fee industry (35% of recovered premium) exists solely to correct mod and premium errors, proving large, persistent dollars; yet the trade's own educator says brokers "often overlook" pre-valuation reserve work, leaving the preventive window unserved — https://costrecoveryconsultants.com/ , https://killingcommercial.com/blog/mastering-the-experience-mod-how-proactive-claims-management-before-the-valuation-date-saves-clients-money-a-conversation-with-kevin-ring/ — 2026-07-10
  Category: Workflow automation

## 3. The opportunity

Everyone in the room is misaligned with the small contractor.

The **carrier's adjuster** sets reserves conservatively because under-reserving is the sin that gets an adjuster fired; over-reserving costs the adjuster nothing and costs the employer three years of premium. The **broker** earns commission as a percentage of premium — a lower mod literally shrinks the broker's paycheck — and, per the industry's own training body, skips the pre-valuation reserve review anyway. The **premium-recovery consultant** only shows up *after* the damage, takes 35% of any refund, and has no incentive to sell a $99/mo tool that would cannibalize a $35,000 contingency fee.

So the contractor sits inside a 90-to-120-day window in which open reserves are still malleable, and nobody tells him the window is open. Then it shuts, and the number follows him for three years — through premium, and worse, through prequalification.

The wedge is not "find the error on your worksheet." That framing is commoditized, given away free, and — critically — I could not find one real employer who actually voices it. The wedge is **the clock**. A product that knows the employer's valuation date, tells them which open claims still have movable reserves, and hands them the specific ask to make of the adjuster *before* the freeze, is doing work no incumbent is paid to do.

This is explicitly the mirror image of [PremiumBack](../2026-06-01-workers-comp-premium-recovery/) in this same catalog. PremiumBack reads the annual **premium audit** (payroll and class codes) *after* the bill lands and drafts a dispute. ModClock watches the **unit statistical report** (claim reserves) *before* the valuation date and prevents the charge from ever being set. Different artifact, different error class, opposite end of the timeline. One recovers dollars; the other protects bid eligibility.

## 4. Target market

- **Primary customer:** Owner, controller, or safety manager at a US trade contractor — electrical, mechanical, concrete, roofing, framing, industrial services — with **10–150 field employees** and **$50K–$500K in annual workers' comp premium**, operating in an NCCI state. These firms bid work where the general contractor imposes an EMR ceiling. Secondary: staffing agencies and trucking fleets, where frequency of small claims dominates.
- **Why they buy, in their words:**
  - *"an EMR over 1.0 will disqualify you from working on many jobsites… One bad accident or multiple 'small' ones can easily send your EMR over 1.0."* — u/Just_Gur_9828, r/Construction, May 2024
  - *"A high EMR will crush you financially and kick you off bid lists and that is all you need to keep safety #1."* — u/dogdayafter (39 years in construction), r/Construction, Jul 2024
  - *"There is no way to bring this down either (at least not in any sort of reasonable time)."* — u/SpaceGhost4004, r/Construction, May 2024
  - *"I could have paid the claim out of pocket and been better off in 2 years. My workers comp just renewed and I am still at the higher rate. My experience rating is about 1.35 now. This is the only claim we have ever had."* — r/WorkersComp, Feb 2024
  - *"I've sat in meeting after meeting the last few months about if we have any more recordables our EMR rate will be too high to bid continuing work on a lot of long term multi phase projects we have going."* — u/woody83404, r/Construction, 2024
  - *"The reasons why PMs hesitate is because it might have an effect on emod/emr rating. Over a 1.0 is no bueno and you will lose jobs."* — u/Ill-Message-1023, r/Construction, May 2024
  - *"My insurance broker doesn't want to get involved at all and is ZERO help, so I am also looking for a new broker."* — Grumpy, contractortalk.com, Jan 2006
  - *"I haven't had a claim in years and I have a .96 rate mod. So guess what? Nobody wants my business."* — kiteman, contractortalk.com, Apr 2013
- **Rough TAM reasoning:** Roughly 700,000+ construction establishments exist in the US, the large majority under 150 employees, and NCCI administers experience rating in about 35 states. Experience rating applies only above a state premium threshold, which trims the pool — but a beachhead of NCCI-state trade contractors carrying $50K+ premium is comfortably in the tens of thousands of firms. This does not need to be a big market to clear $1M–$5M.
- **Why now for them:** The mod is increasingly a *bid gate*, not just a cost line. Contractors describe being kept off bid lists and losing multi-phase work. Meanwhile the 2023 NCCI shift to **state-specific split points** (roughly $9,500 in Oregon to $38,000 in Louisiana, most states $15K–$25K) is still rolling through state filings in 2026, which changes how much each small claim hurts — and frequency of small claims is punished harder than a single large one, because each claim below the split point lands in the primary layer at full weight.

## 5. Product sketch (MVP)

- **Valuation-date countdown.** Enter your policy effective date; ModClock computes your valuation date and starts a visible clock, with alerts at 120, 90, 60, and 30 days out.
- **Loss-run intake.** Upload the carrier's loss run (PDF, Excel, or scanned image — no API exists, so we parse what carriers actually send). ModClock normalizes claims into a clean, structured ledger.
- **Movable-reserve triage.** Sorts open claims by how much reserve movement is still possible and how much each dollar of reserve is costing the mod — flagging the classic patterns: an open claim on a worker who has long since returned to work, a claim reserved above its likely settlement, a medical-only claim not receiving its 70% ERA reduction.
- **Mod impact simulator.** "If this $50,000 reserve is negotiated to $20,000 before your valuation date, your projected mod moves from 1.18 to 1.04." Shows the premium delta across all three affected years — and whether it crosses the 1.0 bid threshold.
- **Adjuster ask-letter.** Drafts the specific, evidence-backed request to the claims adjuster to review a given reserve, citing return-to-work status, treatment posture, and settlement posture. This is the artifact the contractor actually sends.
- **Bid-eligibility watch.** Projects your mod forward and warns when you are on track to cross 1.0 — the number that costs jobs, not just premium.
- **Worksheet pull.** With a signed Letter of Authority, retrieves the NCCI Experience Rating Worksheet (~$15–$24) and reconciles it against your loss run, flagging mismatches for a correction request through the carrier.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist, because the input is a mess.

There is **no carrier API** for loss runs. Every carrier and TPA emits a different artifact — PDF, Excel, CSV, or a scanned image of a fax — and the schema, column names, and claim-status vocabulary differ across all of them. The load-bearing AI work is document understanding: reading an arbitrary carrier's loss run and reliably extracting, per claim, the claim number, injury date, status, paid-to-date, outstanding reserve, indemnity-vs-medical split, and return-to-work signals. That extraction is what everything downstream depends on, and it is exactly the task that was a $200/hr human's job until document AI got good and cheap.

The second load-bearing piece is **reserve-movability judgment**: reading adjuster notes and claim narratives to infer which open claims are plausibly over-reserved — the worker is back at full duty, treatment has ended, no litigation is pending — and drafting the adjuster ask-letter in the language a claims professional will actually act on.

The mod formula itself is arithmetic. Anyone can code it. The moat is not the math; it is turning a stack of ugly carrier PDFs into a defensible, prioritized set of asks.

## 7. Localization angle (if any)

`N/A — this is a US-only play, and deliberately so.` The experience modification system is a specific artifact of US workers' compensation. The wedge *is* the local regulatory quirk: NCCI's rating plan, the unit statistical reporting cadence, and state-specific split points.

The relevant "localization" is **intra-US**, and it is a real constraint. Roughly 35 states use NCCI; about eleven run independent bureaus with their own portals, forms, and rules — California (WCIRB), New York (NYCIRB), New Jersey, Pennsylvania (PCRB), Delaware, Indiana, Massachusetts, Michigan, Minnesota, North Carolina, Wisconsin — and four states (North Dakota, Ohio, Washington, Wyoming) are monopolistic state funds where NCCI experience rating does not apply at all. **Launch NCCI-only.** Each independent bureau is a separate integration, and California alone is a large enough market to be its own v2.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $199/mo for the standard tier (one entity, one policy, unlimited loss-run uploads, valuation clock, simulator, ask-letters). $499/mo for multi-entity / multi-state contractors. Worksheet pulls billed at cost plus a small margin.
- **Why not contingency:** the recovery consultants take 35% because they carry the labor. We are selling *prevention*, where there is no refund to take a percentage of — the money never leaves. Subscription is the honest structure, and it is what makes this a software business rather than a consultancy. It also prices well under the consultant: a contractor paying $150K premium who moves a 1.18 mod to 1.04 saves roughly $21K/yr for three years. Against that, $199/mo is trivially justified.
- **ACV:** ~$2,400 standard, ~$6,000 multi-entity. Blended ~$3,000.
- **Rough math to $1M ARR:** 340 customers × $199/mo × 12 ≈ $812K, plus a modest multi-entity mix → ~$1M. Roughly **300–350 contractors.**
- **Rough math to $5M ARR:** ~1,400–1,700 customers, which almost certainly requires (a) the California/WCIRB build, (b) staffing and trucking verticals, and (c) an agency tier sold to the independent brokers and safety consultants who advise many contractors at once. The agency tier is the realistic path — one broker relationship carries dozens of insureds.
- **Expansion path:** multi-entity → multi-state → agency/broker seats → a claims-advocacy add-on where we manage the adjuster correspondence rather than merely drafting it. Note the strategic tension: the agency tier sells to brokers, whose commission shrinks when the mod drops. The brokers who *will* buy are the independent risk-advisory shops that already compete on being better than the incumbent broker — precisely the ones Kevin Ring trains.

## 9. Go-to-market wedge — first 100 customers

The customer is findable by name, and their pain has a public timestamp.

1. **Mine the bid-threshold moment.** Contractors who lost work to an EMR gate say so publicly. Pull the r/Construction, r/electricians, r/Plumbing, and r/HVAC threads where EMR/e-mod/x-mod is discussed (the threads cited in section 4 are live and recurring), plus contractortalk and JLC business subforums. These are people describing *exactly* this pain in their own words. Reply usefully, then DM a free "when does your mod lock?" calculation. Target the first 20 design partners here — this is a hand-to-hand phase, not a funnel.
2. **Sell the countdown, free, at scale.** Build a free public **valuation-date calculator**: enter your policy effective date and state, get your valuation date and the number of days remaining. This is genuinely useful, requires no data from us, and reveals the buyer at the exact moment of urgency. Contractors who land inside a 120-day window are the qualified list; everyone else gets an email when their window opens. This is the top of the funnel and the reason for the product's name.
3. **Go through the IWCP-trained advisors, not the incumbent brokers.** The Institute of WorkComp Professionals certifies independent agents specifically on mod management — the ones who already believe pre-valuation reserve work matters and who differentiate against lazy incumbents. They have contractor books and every reason to look sharper than the broker they're displacing. Recruit 10–15 as referral partners; each carries dozens of insureds. This is the single highest-leverage channel and the one that turns 100 customers into 1,000.
4. **Ambush the safety associations.** ABC (Associated Builders and Contractors) and AGC chapters run EMR-reduction sessions because their members are bid-gated. Offer a free chapter workshop: "Your mod locks on a date you don't know. Here's how to find it." Chapter workshops are cheap, the audience is exactly right, and the EMR gate is already the topic they showed up for.
5. **Time the outreach to renewal.** A contractor's valuation date is 18 months after policy effective date; most policies renew 1/1 or 7/1. That means predictable seasonal spikes — cold outreach lands hardest 120 days before those dates. Buy nothing; just time the sequence.

## 10. Build complexity — justification

**Medium.** The mod arithmetic (primary/excess split, ERA reduction, D-ratio, ballast/weight) is published and deterministic — a solved coding problem. The valuation-date logic and countdown are trivial. The real work is a **robust loss-run parser** across a long tail of carrier and TPA formats, none of which expose an API and many of which arrive as scanned images. That is the engineering risk and the thing that will consume most of v1.

Everything else is off-the-shelf: document AI for extraction, a standard web stack, a manual/assisted Letter-of-Authority flow for worksheet pulls. A pair could ship a credible v1 for **NCCI states only, top ~10 carrier formats**, in **3–4 months**, and hand-parse the tail while the model improves. Deliberately excluded from v1: California and the other independent bureaus, and any attempt to file corrections directly — we draft the ask, the employer sends it, the carrier files.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Advisory software. We do not transact insurance, do not act as broker of record, and do not file bureau data. Correction requests flow through the employer to the carrier. Must be careful not to cross into unlicensed insurance advice — see risk flags. |
| Ethical — no harm / dark patterns | ✅ | Asks adjusters to reserve claims at *probable* cost rather than worst case. It does not suppress claims, discourage reporting, or reduce injured-worker benefits — reserves are an accounting estimate, not the worker's entitlement. This distinction is load-bearing and must stay load-bearing. |
| Market exists (evidence above) | ✅ | Verbatim contractor complaints about EMR bid gates; a 35%-contingency consulting industry; broker tools (ModMaster, ModAdvisor) sold to brokers, proving the analysis has commercial value. |
| 1–5 person team can build this | ✅ | Pair, 3–4 months, NCCI states only. |
| Launchable with <$50K / ₹40L | ✅ | Web app, document AI inference, ~$24 worksheet pulls. No capital intensity. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | Hair-on-fire, and it is *revenue*, not just cost: an EMR over 1.0 loses bids outright. Contractors say so unprompted. One over-reserved claim is locked in for three years, irreversibly. The only reason this isn't 19 is that the pain is episodic — acute at renewal and at prequalification, dormant in between, so the buyer is not feeling it every single day. |
| Demand evidence | 15 | **12**/15 | Strong and multi-sourced: verbatim contractor complaints, a 35%-contingency consulting industry, and two commercial SaaS products (ModMaster, ModAdvisor) that prove the analysis sells — to brokers. Docked 3 because *nobody is currently buying this specific preventive product*, the incumbent alternative is a free (if neglected) broker review, and the one damning gap is that I could not find a single employer complaining in their own words about a reserve or worksheet error — only about the mod's opacity and permanence. Demand for the *outcome* is proven; demand for *this artifact* is inferred. |
| Build feasibility | 15 | **10**/15 | Mod math is deterministic and published. The long tail of carrier loss-run formats — PDF, Excel, scanned fax, no API anywhere — is genuinely gnarly and is the whole build. Pair, 3–4 months, NCCI-only. Not a weekend project; not research-grade. |
| Distribution clarity | 15 | **12**/15 | Named channels with real mechanics: a free valuation-date calculator that self-identifies urgent buyers, IWCP-certified independent agents as a leveraged referral tier, ABC/AGC chapters, and live forum threads full of the exact complaint. Docked because the highest-leverage channel (brokers) contains a genuine incentive conflict, and the seasonal timing concentrates outreach into a few windows a year. |
| Revenue mechanics | 15 | **11**/15 | $199/mo against a documented $20K+/yr saving is an easy sell on arithmetic. ~340 customers to $1M is very reachable. Docked because $5M requires the broker/agency tier — whose commission *falls* when we succeed — plus the California build. The path to $1M is clean; the path to $5M has a strategic knot in it. |
| Time to first revenue | 10 | **6**/10 | Roughly 3–4 months to a credible v1, then a real sales conversation with a contractor who is often mid-policy. Worse: the product's value is only legible to a buyer inside their 120-day window, so the *addressable* buyer at any moment is a fraction of the market. Design partners can be pre-sold, but this is not a 4-week-to-revenue business. |
| Defensibility | 10 | **4**/10 | Honest answer: thin. The formula is public. A competent competitor copies the countdown and the simulator in a quarter. The only durable assets are the accumulated loss-run parsing corpus across carrier formats (a real, compounding grind) and IWCP/chapter relationships. Execution-and-relationships moat, not a structural one. |
| **Total** | **100** | **72**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This needs someone who can talk to a claims adjuster and a contractor's controller in their own languages, and who will not fumble the licensing boundary. A pure technical founder will build a beautiful mod calculator and fail to sell it. Pair a builder with someone out of the workers' comp broker or claims-advocacy world — ideally IWCP-certified.

### Key assumptions to validate (3–5)

1. **Assumption:** Adjusters will actually move reserves when presented with a well-evidenced, specific ask from an employer. **How to test:** Recruit 5 contractors with open claims inside their window. Send 20 evidence-backed reserve-review requests. Measure how many reserves get reduced within 60 days. If fewer than 4 in 20 move, the entire product thesis is dead — we are selling a letter nobody honors.
2. **Assumption:** Contractors will pay $199/mo for prevention, given that recovery consultants charge nothing up front and brokers nominally do this free. **How to test:** Put up the free valuation-date calculator with a $199/mo pre-order behind it. Measure the calculator→pre-order conversion on 300 qualified visitors inside a 120-day window.
3. **Assumption:** Loss runs from the top ~10 carriers can be parsed to >95% field accuracy without human cleanup. **How to test:** Collect 50 real loss runs across carriers; measure extraction accuracy per field. Reserve amount and claim status are the fields that must be near-perfect — an error here produces a wrong mod projection and destroys trust instantly.
4. **Assumption:** The employer (not the broker of record) can obtain the worksheet and loss run without friction. **How to test:** Run the Letter-of-Authority + Riskworkstation purchase end to end for 5 real employers, and request loss runs from 5 carriers. Measure days-to-delivery and refusal rate.
5. **Assumption:** Enough contractors sit inside a 120-day pre-valuation window at any given time to sustain a sales pipeline. **How to test:** Arithmetic against policy-renewal seasonality (1/1 and 7/1 concentration), validated against a sample of 50 contractors' actual effective dates.

### Risk flags

1. **Regulatory / licensing risk.** Advising on insurance matters for a fee brushes against state producer-licensing and unauthorized-practice rules. The mitigation is structural: ModClock is an analytics tool. It computes, projects, and drafts; the *employer* signs and sends; the *carrier* files bureau corrections. This boundary must be enforced in the product, not just the terms of service. Get a coverage lawyer's opinion before charging the first dollar.
2. **Ethical drift — the one that matters.** A product that reduces reported claim costs sits one bad decision away from becoming a claim-suppression tool. Contractors already admit the incentive exists: *"You're now punished if you do report it"* (u/Low-Wrangler1077, r/electricians). ModClock must target the *reserve* (an insurer's estimate) and never the *claim* (a worker's entitlement), and must refuse to help delay or discourage reporting. If the product ever nudges toward non-reporting, kill it. This is a genuine, live hazard in this category, not a box to tick.
3. **Platform / data dependency.** No carrier API exists. Everything depends on parsing documents carriers are under no obligation to standardize, and a carrier that changes its loss-run template silently breaks extraction. The statutory duty to *provide* loss runs is state-specific (California's §11663.5 is confirmed; a national "10-day rule" is industry lore, not law).
4. **The correction lever runs through the carrier.** We cannot edit bureau data. We can pull the worksheet with a Letter of Authority, identify a discrepancy, and push the carrier to file a correction. If carriers stonewall, the product's *corrective* half degrades to advisory — which is why the *preventive* half (pre-valuation reserve negotiation) must carry the value proposition.
5. **Broker channel conflict.** Broker commission is a percentage of premium. Lowering the mod lowers the commission. The agency tier — the path to $5M — is therefore structurally opposed to the product's benefit, and only the independent, advisory-positioned agents will sell it. This caps the channel.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical builder paired with a workers' comp claims-advocacy or
                        IWCP-certified insurance professional
Time to revenue:        4–6 months (3–4 to v1, then a seasonally-timed sales cycle)
Capital to launch:      $15–30K
Top 3 assumptions to validate first:
  1. Adjusters actually move reserves on a well-evidenced employer request —
     send 20 real requests via 5 design-partner contractors, measure reductions in 60 days
  2. Contractors pay for prevention despite a nominally-free broker review —
     free valuation-date calculator gated by a $199/mo pre-order, 300 qualified visitors
  3. Top-10 carrier loss runs parse to >95% accuracy on reserve amount and claim status —
     50 real loss runs, measured per-field
Kill criteria:
  - Abandon if fewer than 4 of 20 evidence-backed reserve-review requests produce a
    reduction within 60 days. Without adjuster responsiveness there is no product.
  - Abandon if <2% of qualified calculator users (inside a 120-day window) convert to a
    paid pre-order. That means prevention doesn't sell and only contingency does.
  - Abandon if loss-run extraction accuracy on reserve/status stalls below 90% across the
    top 10 carriers after 50 samples — a wrong mod projection is worse than no product.
  - Abandon if a well-funded incumbent (Zywave/ModMaster, ModAdvisor) launches a direct-to-
    employer self-serve tier before v1 ships.
```

## 15. Next step — 1-week validation sprint

The single riskiest belief is that **an adjuster will move a reserve because an employer asked**. Everything else is downstream of that. Test it first, and test it in a way that can come back "no."

- **Day 1–2:** Recruit 5 contractors from the live r/Construction and contractortalk EMR threads plus one ABC chapter. Requirement: at least one open claim, and a valuation date more than 60 days out. Offer the analysis free in exchange for the loss run and permission to observe. Compute each firm's valuation date by hand.
- **Day 3–4:** Hand-analyze their loss runs — no software, a spreadsheet. Identify open claims where the reserve looks materially above probable settlement (worker back at full duty, treatment concluded, no litigation). Draft the evidence-backed reserve-review request for each. Have the contractors send them to their adjusters over their own signatures.
- **Day 5:** Two measurements, both falsifiable.
  - **Adjuster responsiveness:** of ~20 requests, how many produced a written reserve reduction or a scheduled file review within 60 days? (Day-5 reads the leading indicator; the 60-day figure is the real gate.)
  - **Willingness to pay:** ship the free valuation-date calculator behind a $199/mo pre-order and drive the forum threads to it. Of qualified visitors inside a 120-day window, what fraction pre-orders?

**Go / no-go:** proceed only if **≥4 of 20 reserve requests move** *and* **≥2% of qualified calculator visitors pre-order**. If adjusters ignore evidence-backed asks, the preventive thesis is false and this collapses into the same after-the-fact contingency business the consultants already own — a business I do not want and cannot win. Kill it and move on.
