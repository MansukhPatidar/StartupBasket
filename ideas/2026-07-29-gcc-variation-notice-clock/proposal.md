---
title: "NoticeClock — 28-day claim clock for GCC subcontractors"
slug: gcc-variation-notice-clock
date: 2026-07-29
category: TradeTech / GCC-SMB — Specialist Subcontractors on FIDIC-Based Contracts (UAE, KSA, Qatar, Oman)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns every verbal site instruction into a served FIDIC notice before the 28-day time-bar kills the money."
tags:
  vertical: TradeTech
  model: SaaS
  geography: Global
  secondary: [Compliance-driven, WhatsApp-first, Multilingual, AI-agent, SMB, Voice-first]
axes:
  problem: 18
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 3
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# NoticeClock

## 1. One-liner

Turns every verbal site instruction into a served FIDIC notice before the 28-day time-bar kills the money.

## 2. Trend signal — why now?

Three things converged in the last eighteen months, and the third one happened in January.

**The time-bar just got teeth at the highest level.** On 29 January 2026 the Privy Council decided *Uniform Building Contractors Ltd v Water and Sewerage Authority of Trinidad and Tobago* [2026] UKPC 2, holding that clause 20.1 of the FIDIC 1999 General Conditions is a **condition precedent** to a contractor's claim. UBC had done four items of work it argued were Engineer-instructed variations. It recovered nothing — approximately TT $13.91 million written off — not because the work wasn't done, not because the claim lacked merit, but because the notice wasn't served inside 28 days. This is now the leading appellate authority that every GCC employer's legal team will quote back at a subcontractor in 2026. The commentary is blunt about the practical lesson: treat the notice requirement as an emergency procedure, and do not be led astray by informal assurances, even from the Engineer — the Engineer cannot amend the contract or relieve notice obligations.

**The lower tiers of the GCC contracting chain are structurally exposed to exactly this.** Analysis of UAE energy subcontracts describes the failure mode precisely: EPC contracts impose strict procedural requirements for submission and approval of variations, and where those procedures flow down, a subcontractor who fails to follow them loses the variation claim *regardless of the merits*. In practice — their words — subcontractors at the lower tiers of the chain frequently perform additional work on instruction and then discover they cannot recover for it because the procedural path was not followed. Meanwhile the Saudi research literature identifies delay in employer issuance of variation orders as a leading cause of payment delay in public construction, and liquidity pressure on giga-projects is squeezing the chain from the top.

**Nobody is selling the clock.** There is a real and growing market for construction claims software, and it is priced for SMBs — ClaimMaster.ai runs £39/mo Standard and £99/mo Pro, and pitches specialist MEP, civils, structural and façade subcontractors by name. But its product is *evidence structuring and defensibility scoring* — capturing cause, effect and entitlement and grading how well a claim would hold up. Deadline tracking, notice requirements, and time-bar management are simply not in the product. The category has built the thing that helps you write a good claim, and skipped the thing that stops your claim from being void before you write it.

Underneath all three: the recording problem is well-quantified. Gather Insights puts unrecovered legitimate change at roughly 40% on a typical NEC4 project with poor diary records — about £600,000 on a £50M job at 3% variations. And the industry consensus on why claims fail is unanimous and boring: the most common reason a contractor cannot obtain an extension of time or recover delay costs is insufficient contemporaneous evidence. Tribunals are unforgiving when records are missing; a contractor cannot reconstruct entitlement from memory months later.

```
Provenance:
  - Signal 1 (Demand/Economic): Privy Council holds FIDIC cl. 20.1 is a condition precedent; contractor loses ~TT$13.91M on meritorious variation claims purely for late notice — https://www.charlesrussellspeechlys.com/en/insights/expert-insights/construction-engineering-and-projects/2026/fidic-time-bar-bites--privy-council-holds-clause-20.1-is-a-condition-precedent/ — 29 Jan 2026
  - Signal 2 (Demand): UAE energy subcontract analysis — lower-tier subcontractors routinely perform instructed work then cannot recover because the procedural path was not followed; variation orders named a top cause of cost overrun in GCC contracting — https://www.kayrouzandassociates.com/insights/how-uae-energy-subcontracts-allocate-risk — 2026
  - Signal 3 (Economic/Feasibility): Claims software category is live and SMB-priced (ClaimMaster.ai £39–£99/mo targeting specialist subcontractors) but sells narrative structuring, not notice-deadline or time-bar tracking — https://claimmaster.ai/ — accessed 29 Jul 2026
  - Supporting: ~40% of legitimate change unrecovered on typical NEC4 projects due to poor diary records (~£600K on a £50M job) — https://www.gatherinsights.com/en/site-diary/nec4-compensation-events — 2026
  - Supporting: Payment delay + variation-order delay documented as leading causes in Saudi public construction; giga-project liquidity pressure flowing down the chain — https://www.mdpi.com/2075-5309/14/6/1792 and https://dispute-iq.com/news/payment-delays-impacting-contractors-on-saudi-giga-projects/ — 2024–2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

The claims industry sells the wrong half of the problem to the wrong people.

Claims consultants — the Diales, Delta Gulf, HKA tier — are excellent and they are retained *after* the money is already in dispute. They do forensic delay analysis, they reconstruct entitlement, they write the submission. They bill like specialists. A subcontractor with a AED 400,000 variation dispute cannot economically retain one, and by the time the dispute is big enough to justify the fee, the 28-day window closed eleven months ago and the consultant's first job is to explain that there is nothing to analyse.

The software tier — ClaimMaster.ai and the change-event modules inside the big PM platforms — has the same blind spot from the other direction. They assume a competent commercial team is already noticing events and logging them, and they help make the resulting claim more defensible. They are downstream tools for people who already do the upstream thing.

The upstream thing is what actually loses the money, and it is unglamorous: a foreman gets told to do something on site, does it, mentions it to the project manager three weeks later, and by then the claim is legally dead. The failure is not analytical. It is clerical. It is a *timer* nobody started.

That's the gap. A product that does one narrow job — watch every instruction that lands on site, classify whether it's a potential variation or delay event, start the contractual clock the moment it lands, and generate a compliant, contract-referenced notice the commercial manager can serve the same day. Not "help you win the claim." **Preserve the right to make one.**

The 10× is availability, not intelligence. A claims consultant is expensive and retrospective. A commercial manager covering five sites is overloaded and reactive. Software that reads every WhatsApp voice note, site diary line and email the moment it appears, and puts a red countdown against the ones that carry entitlement, is doing a job that currently only gets done on projects big enough to afford a dedicated contracts administrator — which is to say, not on the projects where subcontractors live.

## 4. Target market

- **Primary customer:** The commercial manager or contracts manager at a specialist subcontractor in the GCC — MEP, civils, façade, fit-out, structural steel — doing roughly AED 20M–200M (US$5M–55M) of annual turnover, 40–400 staff, working as a second- or third-tier subcontractor on FIDIC-based or FIDIC-derived main contracts in UAE, Saudi, Qatar or Oman. Typically one or two commercial people covering four to eight live projects. Often the same person also does payment applications and final accounts.

- **Why they buy:** Because they are personally the one who has to explain the write-off. The pattern documented in the UAE subcontract literature is the pattern they live: work gets instructed informally, gets done, and cannot be recovered because the procedural path was not followed. The Privy Council has now removed any residual hope that an arbitrator will feel sorry for them — the *UBC* contractor lost roughly TT$13.91M on claims that were, on the pleaded facts, genuine variations. The buying trigger is not aspiration, it is the last one that got away.

- **Rough TAM reasoning:** The UAE construction market alone sits in the tens of billions of dollars annually (estimates for 2026 range from ~US$44.5B to ~US$127B depending on scope definition), and GCC-wide is a multiple of that. I'm not going to pretend I have a clean registered-subcontractor count — Saudi's Balady/MOMRAH classification registry gates contractors by grade but doesn't publish a usable SMB subcontractor census, and I won't invent one. Directionally: a market of this size supports thousands of specialist subcontractors in the AED 20M–200M band across the four countries. I need roughly 400 of them paying to hit $1M ARR. That is a small enough slice of a big enough pool that the TAM question isn't the risk — distribution is.

- **Why now for them:** January 2026. The condition-precedent question used to be arguable, jurisdiction-dependent, and something a good advocate could sometimes talk an arbitrator out of. It is now settled at Privy Council level on the exact FIDIC wording that GCC contracts are built on. Employers' counsel know this. The first thing a subcontractor is going to hear in 2026 when it raises a late claim is the case name.

## 5. Product sketch (MVP)

- **Instruction inbox.** Forward site emails, WhatsApp exports, and voice notes into one project stream. Voice notes in English, Arabic, Hindi, Urdu, Malayalam and Tagalog transcribe automatically — that's the actual language mix on a GCC site, where fewer than 30% of UAE construction workers have working-level English.
- **Entitlement triage.** Every incoming item gets classified: routine work, potential variation, potential delay event, or noise. Anything carrying entitlement is flagged with what it looks like and why.
- **The clock.** The moment a potential entitlement event is detected, a countdown starts against the notice period in *that project's* contract — 28 days on FIDIC 1999 cl. 20.1, whatever the bespoke amendment says if the main contract has been edited. Red at 7 days, escalation at 3.
- **Notice drafter.** One click produces a served-ready notice: the contractual clause reference, the event description, the date the contractor became aware, and the reservation of rights. Formatted to the contract's own notice provisions — correct addressee, correct delivery method.
- **Contemporaneous record pack.** Every event accumulates its own evidence bundle — the original voice note plus transcript, dated photos, the diary lines that reference it, resource allocation for the days worked. Exportable as a single indexed PDF when the claim gets real.
- **Contract ingestion.** Upload the subcontract and the flowed-down main contract conditions once; the system extracts the notice periods, the addressees, the delivery requirements, and the condition-precedent language so the clocks are set to the actual document rather than to generic FIDIC.
- **Weekly exposure report.** One page for the commercial manager: open events, days remaining on each, notices served this week, estimated value at risk from anything about to time-bar.

## 6. AI angle — what's load-bearing

Remove the AI and this product is a shared spreadsheet with a reminder column, which is what these firms already have and already fail to use. Three places where the model is doing the actual work:

**Multilingual speech-to-text on site audio.** The raw input is a foreman's WhatsApp voice note recorded next to a generator, in accented English or Malayalam or Urdu. Getting usable text out of that is the entry condition for everything downstream, and it became commodity-priced in the last two years. No transcription, no product.

**Entitlement classification.** Deciding whether "the consultant told us to move the riser to grid line 7" is a variation, a clarification of existing scope, or nothing — and doing it across hundreds of messages a week per project — is judgment work that a commercial manager currently performs badly because they perform it in batch, late, from memory. This is the load-bearing call. It doesn't need to be perfect; it needs to surface candidates with high recall so a human spends two minutes a day confirming rather than two hours a month reconstructing. False positives cost a click. False negatives cost six figures.

**Contract-aware drafting.** Reading a bespoke amended FIDIC subcontract, locating the notice provisions, and generating a notice that cites the right sub-clause with the right facts in the right register — that is a paralegal task that used to require a paralegal.

The honest limit: this is decision-support, not legal advice, and the product must say so loudly. A human serves the notice.

## 7. Localization angle

This is a GCC-first play, and the localization is real rather than cosmetic.

- **Language.** The site-floor language mix — South Asian workforces across UAE, Qatar and Saudi, with Arabic at the consultant/Engineer tier and English as contract language — means the input layer must handle at least six languages and the output layer must produce formal English (and often Arabic) correspondence. A US-built change-order tool does not do this.
- **Contract form.** FIDIC-based but locally amended is the GCC norm, and the amendments are where the notice traps live. A product that ships with generic FIDIC defaults and no ingestion of bespoke conditions will give wrong clocks, which is worse than no clocks.
- **Legal texture.** UAE and Saudi are civil-law jurisdictions where good-faith doctrines have historically softened strict time bars — which is precisely why the January 2026 hardening matters and why local commentary is circulating it. Knowing that argument space is domain knowledge a generic vendor won't have.
- **Adjacent expansion.** The same product works anywhere FIDIC is the local norm — the wider MENA region, parts of Africa, South and Southeast Asia infrastructure. NEC4 in the UK is a related but distinct build (compensation-event mechanics differ) and is the natural second market rather than the first.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $299/mo per active project, or $1,499/mo for an unlimited-project company plan. Sell the company plan; the per-project tier exists to make the company plan look obvious and to let a skeptical firm pilot on one job.
- **ACV:** ~$18K–20K/year for a firm on the company plan. A firm running 5–8 live projects is paying roughly $200–300 per project per month — against a single unrecovered variation that routinely runs into six figures. The ROI pitch writes itself and does not require exaggeration.
- **Rough math to $1M ARR:** 55 firms × $1,499/mo × 12 ≈ $990K. Fifty-five contracting firms across four countries. That is a reachable number for one founder doing in-person sales in Dubai, Riyadh and Doha over eighteen months.
- **Rough math to $5M ARR:** ~275 firms at the same ACV, or ~180 firms with ACV expanded to $28K via seat growth and a claims-pack add-on. Realistically this needs a second geography (UK/NEC4 or wider MENA) and one or two reseller relationships with regional QS practices. It's a stretch but not a fantasy.
- **Expansion path:** Start with the commercial manager. Expand to project managers and site engineers as named users (the people forwarding the instructions). Then upsell the **claims pack** — a prepared, indexed evidence bundle for a specific dispute, priced per event at $500–1,500, which is a fraction of a consultant's fee and cannibalises nothing the customer was otherwise buying. Longer term, the accumulated notice history across projects becomes the input to a genuine final-account product.

## 9. Go-to-market wedge — first 100 customers

- **Ride the case.** *UBC v WASA* is the single best cold-open in this market for the next twelve months. Write the definitive plain-English subcontractor's briefing on it — what the Privy Council held, what it means when your main contract flows down cl. 20.1, and a one-page notice checklist. Publish it, then send it directly. The email subject line is the case name. This is not "content marketing" — it's a specific, dated, legally significant event that every target has heard about and none of them have read.
- **Work the QS and claims-consultant channel.** Regional quantity surveying practices and claims consultancies (Delta Gulf and the dozens of smaller outfits like it) already have relationships with exactly these subcontractors, and NoticeClock is *complementary* to them — it creates better-documented claims, which makes their work easier and more winnable. Offer a referral fee or a white-label tier. Twenty consultancies each introducing three clients is sixty customers.
- **Trade-body and event ground game.** The GCC construction calendar is dense and concentrated — Big 5 Global in Dubai, the Saudi build events, the local contractor associations. These are markets where deals still close face-to-face over coffee. Budget for a founder to be physically present. This is a sales-heavy business and pretending otherwise is how it fails.
- **Target the specialist subcontractor associations by trade.** MEP and façade contractors are the most variation-exposed trades and have the tightest informal networks. Land three well-known MEP firms in Dubai and the reference selling does more than any campaign.
- **Land-and-expand through a single project.** Offer a free 90-day pilot scoped to one live project with a named commercial manager. The pilot's success metric is concrete and self-evident: number of entitlement events flagged that the firm had not otherwise noticed. If that number is above zero, the renewal conversation is short.

## 10. Build complexity — justification

**Medium.** The pipeline components are all off-the-shelf: multilingual speech-to-text, document ingestion, LLM classification and drafting, a scheduler for the clocks. Nothing here needs a custom model. The genuine work is in three places — contract ingestion that reliably extracts notice provisions from bespoke amended FIDIC documents; a classification layer tuned for high recall on entitlement events (which needs real project data and iteration with design partners); and the notice templates themselves, which must be right because a defective notice is arguably worse than a late one. Call it 14–18 weeks to a credible v1 with two people, one of whom needs to be, or be joined at the hip with, a GCC-experienced quantity surveyor. The domain expertise is the bottleneck, not the engineering.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Decision-support software, not legal practice. Must be positioned and disclaimed as such — a human reviews and serves every notice. No regulatory approval required to launch. |
| Ethical — no harm / dark patterns | ✅ | Helps the weaker party in the contracting chain preserve rights it already has. If anything the ethical pressure runs the other way — it makes the chain fairer. |
| Market exists (evidence above) | ✅ | Claims consultancies, claims software at £39–99/mo, and a documented pattern of lost variations. Money is already being spent adjacently. |
| 1–5 person team can build this | ✅ | Two builders plus domain expertise. 14–18 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Main costs are inference, a founder's travel to Dubai/Riyadh, and legal review of the notice templates. Comfortably under $50K. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire, and now legally sharpened. Losing a meritorious six-figure variation to a clerical failure is the kind of pain a commercial manager carries personally. Docked 2 because it's felt acutely but episodically — the pain spikes at final account, not daily, which weakens urgency at the moment of the sales call. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: a live SMB-priced software category, a large consultancy market, quantified unrecovered-change data, and a landmark 2026 ruling. Docked 3 because I could not source verbatim GCC subcontractor complaints — my Reddit and forum searches came back empty. The people with this pain don't post about it, which is a real gap in the evidence base and the first thing to close. |
| Build feasibility | 15 | 11/15 | Off-the-shelf components throughout, but bespoke-contract ingestion and high-recall entitlement classification need iteration against real project data. 14–18 weeks with two people, gated on domain expertise. |
| Distribution clarity | 15 | 12/15 | The *UBC* case is a genuinely excellent named wedge with a twelve-month half-life, and the QS/consultant referral channel is concrete. Docked 3 because GCC construction sales are relationship-driven and in-person — this is not a self-serve motion and the founder has to get on a plane. |
| Revenue mechanics | 15 | 12/15 | $1,499/mo is defensible against a single six-figure recovery, and 55 customers to $1M ARR is a small, countable number. Docked 3 because pricing in this band is unvalidated in the GCC SMB contracting segment and the incumbent software anchor (£99/mo) is 15× lower — that gap needs to be justified by outcome, and it might not be. |
| Time to first revenue | 10 | 8/10 | Pilots convert fast when the pilot output is "here are four events you were about to lose." Realistically 8–12 weeks from launch to first paid, with a 90-day pilot compressing to 60 for motivated firms. |
| Defensibility | 10 | 3/10 | This is the weak axis and I won't dress it up. Nothing here is technically hard to copy. The moat, such as it is, is a library of ingested bespoke contract forms, accumulating notice-outcome data, and brand within a tight professional community. That's a 6–12 month head start, not a wall. ClaimMaster.ai could ship notice tracking as a feature in a quarter if it decided to. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This is not a builder's idea. Without a co-founder or first hire who has been a quantity surveyor or contracts manager on GCC projects, the classification layer will be wrong, the notice templates will be wrong, and the sales calls will be transparently naive. The engineering is the easy half.

### Key assumptions to validate (3–5)

1. **Assumption:** Subcontractors in the AED 20M–200M band genuinely lose entitlement to the notice mechanism at meaningful frequency — not once every three years, but several times per project. **How to test:** Twenty structured interviews with commercial managers in Dubai and Riyadh. Ask for a specific number: how many variations in the last completed project were performed and not recovered, and why. If the median answer is under two, the pain is too episodic to sustain $1,499/mo.

2. **Assumption:** They will pay $1,499/mo when the visible software comparable is £99/mo. **How to test:** Put the price in front of the same twenty interviewees with the ROI framing, and separately test $499 and $999 company tiers. Measure not stated willingness but signed pilot agreements with a price on them.

3. **Assumption:** Entitlement classification from raw site chatter can hit useful recall. **How to test:** Get three firms to hand over 90 days of historical project WhatsApp and email from a *completed* job. Run classification, then compare against the variations that were actually claimed and the ones the commercial manager admits were missed. Target: catch ≥80% of the actually-claimed events plus at least one they missed.

4. **Assumption:** Bespoke amended FIDIC subcontracts can be parsed for notice provisions reliably enough to set correct clocks. **How to test:** Collect fifteen real subcontracts from design partners. Extract notice periods, addressees and delivery requirements automatically; have a QS mark the results. Below ~90% accuracy the product ships wrong deadlines, which is a liability rather than a feature.

5. **Assumption:** QS practices and claims consultancies will refer rather than perceive this as disintermediation. **How to test:** Pitch five regional consultancies directly on the white-label/referral tier and see whether any signs.

### Risk flags

1. **Liability risk.** If the product sets a wrong clock or drafts a defective notice and a customer times out relying on it, the exposure is the value of the lost claim. This must be managed with explicit contractual limitation, professional indemnity insurance, and a UI that makes human review unavoidable rather than skippable. This is the single biggest structural risk in the business and it is not fully solvable by disclaimer.

2. **Incumbent fast-follow.** ClaimMaster.ai already owns the adjacent workflow and the customer relationship. Notice tracking is a feature they could ship in a quarter. The defensibility score of 3 reflects this honestly. The answer is speed and depth in GCC-specific contract handling, not secrecy.

3. **Evidence gap on the demand side.** I found the structural pain thoroughly documented by lawyers and consultants, and I found zero first-person subcontractor complaints. Lawyers describing a pain and sufferers articulating it are not the same signal. It's possible this pain is fully absorbed as a cost of doing business and nobody is actually shopping for a fix.

4. **Sales-cycle risk.** GCC contracting is relationship-driven and payment-delayed. A firm whose own receivables are 120 days late is a hard firm to sell a new subscription to — the cash-flow pressure that creates the pain also constrains the budget to fix it.

5. **Cultural/behavioural risk.** Serving a formal notice on a main contractor you want future work from is commercially awkward, and many subcontractors deliberately don't do it. If the real blocker is relationship management rather than record-keeping, better software doesn't fix it. The counter — reservation-of-rights notices framed as routine administration — is the product's most important positioning problem.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a GCC-experienced quantity surveyor
                        or contracts manager. Domain expertise is non-negotiable.
Time to revenue:        14-18 weeks to v1, first paid pilot 8-12 weeks after launch
Capital to launch:      $30-45K (inference, PI insurance, legal review of templates,
                        founder travel to Dubai/Riyadh/Doha)
Top 3 assumptions to validate first:
  1. Frequency of lost entitlement — 20 commercial-manager interviews, ask for a count
     from their last completed project. Median under 2 = kill.
  2. Price tolerance at $1,499/mo against a £99/mo visible comparable — test with signed
     pilot agreements carrying a price, not stated willingness.
  3. Classification recall on historical site chatter — 90 days of real data from three
     completed jobs, target >=80% recall against actually-claimed variations.
Kill criteria:
  - Abandon if fewer than 5 of 20 interviewed commercial managers can name a specific
    variation lost to late notice on their last project.
  - Abandon if classification recall stays below 70% on real project data after two
    iteration cycles — below that the product creates false confidence, which is worse
    than no product.
  - Abandon if zero of the first 10 pilot firms convert to paid at >=$999/mo within
    90 days of pilot completion.
  - Abandon if ClaimMaster.ai or an equivalent incumbent ships contract-aware notice-
    deadline tracking before v1 launch.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the target list. Pull 150 specialist subcontractors (MEP, façade, civils, fit-out) in UAE and Saudi in the AED 20M–200M band from contractor directories and LinkedIn. Identify the commercial or contracts manager by name at each. Draft the *UBC v WASA* briefing — two pages, plain English, no pitch, with a notice checklist on the back page.

- **Day 3–4:** Send the briefing to all 150 with a single ask: a 20-minute call about how their firm handles notice deadlines. No product mentioned. Target 15–20 calls booked. In every call, ask the one question that matters and write down the number: *on your last completed project, how many instructed variations did you perform and not recover, and what was the reason?*

- **Day 5:** Count. The decision rule is falsifiable and set in advance:
  - **Go** if ≥8 of the interviewed managers name a specific variation lost to a procedural/notice failure on their last project, **and** ≥3 agree on the spot to hand over historical project data for a classification test.
  - **No-go** if the dominant answer is "we recover most things through relationship negotiation with the main contractor" — that answer means the pain is absorbed socially rather than contractually, and software is the wrong instrument.

The interview question is deliberately a count, not an opinion. "Is this a problem for you?" gets a yes from everyone and means nothing. "How many, last project, and why?" produces a number I can be wrong about.
