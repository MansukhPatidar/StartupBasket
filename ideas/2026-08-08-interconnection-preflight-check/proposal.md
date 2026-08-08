---
title: "GridPreflight — interconnection bench for solar installers"
slug: interconnection-preflight-check
date: 2026-08-08
category: CleanTech / US
complexity: Medium
score: 72
verdict: GO
confidence: Medium
oneLiner: "Catches the field mismatch that will get your interconnection application kicked back, before the utility sees it."
tags:
  vertical: CleanTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Solo-builder, Workflow-automation]
axes:
  problem: 16
  demand: 11
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# GridPreflight

## 1. One-liner

Catches the field mismatch that will get your interconnection application kicked back, before the utility sees it.

## 2. Trend signal — why now?

Three things moved at once, and they moved in the direction of "the paperwork got harder while the market got smaller."

**The rejection tax is now quantified.** Solar permit and interconnection rejections cost roughly **$2,000–$5,000 per project** in revision fees, admin time and crew rescheduling — before client delay penalties. A single resubmission cycle costs **6–8 weeks** on the interconnection critical path, and during that window the crew either sits idle or gets juggled across other jobs, cascading backlog across the whole pipeline. Industry write-ups claim **over 90% of interconnection applications contain errors requiring revision**. Treat that last number as vendor-flavored — it comes from a firm selling engineering services — but even a fraction of it is brutal.

**Enforcement tightened in 2026.** Installers are seeing tighter enforcement of documentation, safety features and inverter behavior under the IEEE 1547-2018 / UL 1741 SA-SB rollout. Concretely: the CEC's **legacy Power Control Systems request form dies June 30, 2026** — requests using the old form after that date are *automatically rejected*. Portal drop-downs are pre-filtered to CEC-listed equipment; anything off-list means extra documentation and longer review.

**The market is shrinking, which makes each lost job hurt more.** SEIA/Wood Mackenzie's Q2 2026 report (June 10, 2026) forecasts **US solar additions flat over the next five years** and the **residential market down 21% in 2026**, with permitting bottlenecks named as the near-term headwind. This cuts both ways and I'll say so plainly: a declining market is a worse market to sell into. But it also means installers are fighting for margin on fewer jobs, and a 6-week rework on a job you already won is exactly the wound they're now feeling.

The deficiency causes are not mysterious — they are enumerable. PG&E Rule 21 rejections cluster into a short, boring list: customer-of-record mismatch between the PG&E account and the property, service agreement ID and meter ID errors, equipment not in the CEC portal drop-down, incorrect inverter anti-islanding group settings, single-line diagram missing the utility disconnect / point of interconnection / PV breaker value, storage AC totals exceeding service size when combined with PV output, charging source not declared, CSLB license number mismatch or expired license, missing HIS registration. That's a checklist. Checklists are software.

```
Provenance:
  - Signal 1 (demand): Solar permit/interconnection rejections cost $2,000–$5,000 per project and a single resubmission adds 6–8 weeks to the critical path; enumerated PG&E Rule 21 deficiency causes (customer-of-record mismatch, meter ID, CEC-unlisted equipment, SLD missing utility disconnect/POI/breaker value, CSLB mismatch) — https://energyscaperenewables.com/post/solar-interconnection-critical-path-2026/ and https://www.greenlancer.com/post/pg-e-rule-21-interconnection — observed 2026-08-08
  - Signal 2 (feasibility): IEEE 1547-2018 / UL 1741 SB enforcement tightening in 2026; CEC legacy Power Control Systems request form auto-rejected after June 30, 2026; CEC Solar Equipment Lists published as machine-readable approved-equipment lists — https://www.energy.ca.gov/programs-and-topics/programs/solar-equipment-lists — observed 2026-08-08
  - Signal 3 (economic): SEIA/Wood Mackenzie US Solar Market Insight 2026 Q2 (June 10, 2026) forecasts flat US additions for five years and residential down 21% in 2026, naming permitting bottlenecks as the headwind; 457 solar and storage projects have permits pending; ~11,177 US solar installation businesses — https://www.solarpowerworldonline.com/2026/06/permitting-delays-to-hold-solar-install-numbers-flat-over-next-5-years/ — observed 2026-08-08
  Category: Workflow automation
```

## 3. The opportunity

Today, if a small installer wants fewer interconnection rejections, their only real option is to **buy more labor**. GreenLancer, Wattmonk, Solar Permit Solutions and a fleet of India-based drafting shops all sell the same thing: a human does your plan set and your application, and you pay per project. Published and reported rates: a residential solar-only permit plan set listed at **$480** through a GreenLancer reseller, structural engineer review and stamp at **$375**, installers reporting full stamped packages near **$1,550**; Solar Permit Solutions publishes flat **$1,200 per residential plan set** with unlimited revisions; India-based shops undercut US vendors by 40–60%.

Notice what nobody sells: **a cheap, instant check on the application you already drafted yourself.**

That gap exists because the incumbents' business model forbids it. Their revenue is per-plan-set labor. A $49 pre-flight validator that lets an installer keep doing their own drafting is a direct attack on their unit of sale. Wattmonk advertises an AI quality tool trained on 125,000+ approved submissions — but it's a quality layer *inside* their paid engineering service, not a standalone product an installer can point at their own work.

The wedge: sell the **check**, not the labor. Most installers who do 10–80 jobs a month already have someone drafting applications in-house or through a cheap offshore shop. They don't want to replace that person. They want to know, in 90 seconds, whether the packet about to go into PowerClerk is going to bounce.

The 10× claim is narrow and I'll defend it: a human QA pass on an interconnection packet from an engineering vendor costs hundreds of dollars and takes a day or more. Reading a plan set, extracting the inverter model and breaker values, and diffing them against a utility's published rules and the CEC equipment list is now a sub-dollar inference job. That's the whole thesis.

## 4. Target market

- **Primary customer:** Permitting/interconnection coordinator — often titled "permit coordinator," "project administrator," or just the ops person — at a US residential solar installer doing **10–80 installs/month**, operating across **2–5 utility territories**. Company size 15–120 people. Also: the small EPC owner who does this himself at 9pm.
- **Why they buy:** In their world the rejection isn't an abstraction — it's the phone call where they tell a homeowner who already signed that the system sitting on their roof won't turn on for another two months. The mechanism is documented: any mismatch between the application and the utility's records triggers a hold *before review begins*, so you burn the queue position without ever getting engineering eyes on the file. And when data conflicts — a breaker size on the one-line not matching OCPD calculations, or the inverter model shown not matching the cut sheet — the application gets returned.
- **Rough TAM reasoning:** ~**11,177 solar panel installation businesses** in the US (IBISWorld, 2025), 10,000+ solar companies employing ~300,000 people (SEIA). The addressable slice — installers big enough to have recurring interconnection volume but too small to have in-house engineering — is realistically **2,000–4,000 firms**. At a $300–600/mo blended ACV that's a $10–25M ceiling. Right-sized for this portfolio; nowhere near VC-sized. Good.
- **Why now for them:** Volume is falling 21% this year. When you did 60 jobs a month, a rejection was noise. At 40 jobs a month with thinner margins, six weeks of dead crew time on a won job is the difference between a profitable quarter and a bad one.

## 5. Product sketch (MVP)

- **Drop the packet, get a verdict.** Upload the plan set PDF, the SLD, equipment cut sheets and the filled application form. Get a pass/fail report in under two minutes.
- **Per-utility rule packs.** Start with the four that cover the most pain and have the best-published rules: PG&E, SCE, SDG&E (Rule 21) and one non-CA utility. Each pack encodes that utility's specific deficiency triggers, not a generic checklist.
- **Cross-document consistency diff.** The highest-value check and the one humans fail at: does the inverter model on the SLD match the cut sheet, match the application form, and match the CEC-listed equipment drop-down? Does the breaker value on the one-line match the OCPD calc? Does storage AC total plus PV output exceed the service size?
- **CEC equipment list lookup, live.** Flag any module, inverter or battery that isn't on the current CEC Grid Support Inverter List — the single most mechanical rejection cause there is.
- **Deadline and form-version guard.** Warn when a packet uses a form or operating-mode declaration that's about to expire or already auto-rejects (the June 30, 2026 legacy PCS form being the canonical example).
- **Fix-it list, ranked.** Not "your SLD has issues." Instead: "Page 3, inverter labeled IQ8A-72-2-US; cut sheet on page 11 is IQ8PLUS-72-2-US. One of these is wrong. This is a customer-of-record class hold."
- **Rejection log.** Every packet you run, every issue found, and — once you tell it what actually happened — whether the utility agreed. This is the data flywheel.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist.

The core job is reading **unstructured, inconsistently formatted engineering documents** — scanned plan sets, hand-marked SLDs, manufacturer cut sheets in a dozen layouts — and extracting a structured set of facts: inverter model, module model, breaker rating, point of interconnection, service size, storage AC total, license number. That extraction is the product. Vision-capable models made it economically viable to do this for a few cents per packet; three years ago it was a human's afternoon.

The rules layer on top is deliberately *not* AI. Once you have the facts extracted, "is this inverter on the CEC list" and "does the breaker on page 3 match the calc on page 7" are deterministic comparisons. That split matters: AI does perception, code does judgment. It's why the output can be trusted enough to act on, and why a hallucinated rule can't silently pass a bad packet.

Non-obvious point: because SLDs are visual, the check has to actually *look at the drawing* — a missing utility disconnect symbol or an unlabeled point of interconnection isn't in any text layer. That's the part that was genuinely impossible to automate cheaply until recently, and it's a top-listed PG&E deficiency cause.

## 7. Localization angle

N/A — this is a US-only play, and deliberately so. The entire value is encoded in per-utility interconnection rules, CEC equipment lists, CSLB licensing and IEEE 1547 adoption. That specificity *is* the product. A "global interconnection checker" would be worthless everywhere.

The interesting adjacency: the offshore drafting shops (Heaven Designs and peers, delivering PE-stamped packets at 40–60% below US rates) are a **channel**, not a competitor. They eat rejection rework at their own cost. Selling them a QA layer that cuts their revision load is a plausible second revenue line — India-based supply, US-based rules.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers. **Solo $99/mo** (15 packets). **Shop $349/mo** (75 packets, 3 utility territories, rejection log). **Multi-market $899/mo** (unlimited packets, all utility packs, API, team seats). Overage at $8/packet.
- **Anchor:** This has to look obviously cheap next to the alternative. A single rejection costs $2,000–$5,000. A $349/mo subscription pays for itself if it prevents **one rejection every 14 months**. That's not a hard sell — that's arithmetic.
- **ACV:** Blended ~**$4,200/yr**. Realistic mix skews to the Shop tier.
- **Math to $1M ARR:** ~**240 customers** at $349/mo. Out of a 2,000–4,000 firm addressable base, that's 6–12% penetration. Achievable but not trivial — this is the number to be honest about.
- **Math to $5M ARR:** ~800 customers plus meaningful multi-market and API revenue, plus the engineering-vendor channel (each offshore drafting shop is worth 10–50 installers of volume). Requires expanding well past California into the top 20 utility territories nationally. This is a 3–4 year shape, not an 18-month one.
- **Expansion path:** Utility packs are the natural upsell — an installer who expands into a new territory buys a new pack. Then: AHJ permit packs (separate filing, same document, same extraction), and post-submission status tracking through PTO.

## 9. Go-to-market wedge — first 100 customers

- **The Top Solar Contractors list is a scraped lead list with revenue bands attached.** Solar Power World publishes it annually; the 2026 edition explicitly notes more small-scale residential contractors than any prior year. Filter to residential firms in CA/AZ/NV, pull the permit coordinator on LinkedIn, and send a **rejection-risk report on one of their real recent jobs** — public permit records in most CA jurisdictions expose enough to identify a live project. A personalized "here are 3 things in your packet that will get flagged" beats any demo. Target 400 firms, 8% reply, 25% of those convert = ~8 customers from cold alone. Slow but high-signal.
- **Camp the PowerClerk moment.** PowerClerk (Clean Power Research) automates workflows for **75+ utilities** and has processed 3M+ interconnection applications. Every installer in those territories has a login and a scar. Run tightly-targeted search and LinkedIn ads against "PowerClerk deficiency," "Rule 21 resubmit," "interconnection application rejected" — tiny volume, near-zero competition, perfect intent.
- **The NABCEP and state-association channel.** ~18,000 NABCEP PV Installation Professional certifications issued; CALSSA and state solar associations run member forums and continuing-ed. Offer a free "2026 interconnection deficiency teardown" webinar — the June 30 legacy PCS form deadline is a genuine news hook, not manufactured urgency. Association email lists convert far better than cold.
- **Sell to the drafting shops, wholesale.** Heaven Designs, Wattmonk-alternative shops and freelance drafting providers absorb revision cycles as pure cost. Pitch: cut your rework rate, we charge per packet. Three shops signed = thousands of packets/month and a reference base.
- **Free single-packet check, no signup.** The check is cheap to run. Give away one. The report itself is the sales pitch, and it produces the shareable artifact ("look what it caught") that travels in installer Slack groups and forums like Mike Holt's.

## 10. Build complexity — justification

**Medium.** The document extraction pipeline is off-the-shelf — vision models read plan sets, SLDs and cut sheets without custom training. The web app is standard. Two things make it Medium rather than Low: (1) **per-utility rule encoding is manual, unglamorous domain work** — each utility pack is days of reading tariff documents and deficiency notices, and it does not generalize automatically; (2) **SLD visual inspection needs real accuracy tuning** — flagging a missing utility disconnect on a hand-marked drawing is the hard case, and false positives destroy trust faster than false negatives.

Realistic: **12–16 weeks to v1** for one strong builder plus a part-time solar permitting consultant, covering three utility packs. The consultant is not optional — without domain input the rule packs will be wrong in ways that are invisible until a customer's application bounces.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reading public utility rules and a customer's own documents. No filing on their behalf in v1, so no PE-stamp or licensure exposure. |
| Ethical — no harm / dark patterns | ✅ | Reduces rework and grid-connection delay. Must be explicit that it is not a substitute for PE review. |
| Market exists (evidence above) | ✅ | Quantified rejection costs, named deficiency taxonomy, 11,177 installer businesses, an incumbent category charging $480–$1,550 per plan set. |
| 1–5 person team can build this | ✅ | One builder + fractional domain consultant. |
| Launchable with <$50K / ₹40L | ✅ | Inference costs are cents per packet. Main cost is the consultant's time. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **16**/20 | $2–5K and 6–8 weeks per rejection is real money and real crew idle time, felt several times a month. Not quite hair-on-fire because installers have absorbed it as a cost of doing business for a decade — the workaround (pay an engineering vendor) exists and works. |
| Demand evidence | 15 | **11**/15 | Strong indirect evidence: a whole paid category exists (GreenLancer, Wattmonk, Solar Permit Solutions) with published pricing, plus enumerated deficiency taxonomies from multiple independent sources. Docked because I could not surface verbatim installer complaints at volume — the pain is documented by vendors selling the fix, which is a biased source. Needs primary validation. |
| Build feasibility | 15 | **11**/15 | Extraction is off-the-shelf; SLD visual checks and per-utility rule encoding are genuine work. 12–16 weeks, not 6. |
| Distribution clarity | 15 | **12**/15 | Named list (Top Solar Contractors), named intent channel (PowerClerk-adjacent search), named partner channel (drafting shops), named association channel. Conversion math is estimated, not tested. |
| Revenue mechanics | 15 | **11**/15 | Pricing anchors cleanly against a $2–5K rejection and a $480–1,550 plan set. $1M ARR needs ~240 customers = 6–12% of the addressable base, which is a real but not absurd ask. Docked for the shrinking market. |
| Time to first revenue | 10 | **7**/10 | The free-check-then-upgrade funnel is short, but v1 needs 12–16 weeks before anyone can pay. Realistically 4–6 months to first dollar. |
| Defensibility | 10 | **4**/10 | The honest weak spot. Rule packs are copyable given effort, and Wattmonk already has an AI quality layer plus 125,000+ approved submissions of training data. The only compounding asset is the rejection log — which packets got flagged and what the utility actually said. That's a 12-month moat at best, and only if enough customers report outcomes back. |
| **Total** | **100** | **72**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can build a document-extraction pipeline **and** access to someone who has personally had interconnection applications rejected. The second is harder to fake than the first, and faking it is how this idea dies.

### Key assumptions to validate

1. **Assumption:** Installers will pay for a *check* rather than buying the *labor* they already outsource. **How to test:** 25 calls with permit coordinators at 10–80 install/month firms. Ask what they paid for plan sets last quarter and whether they'd pay $349/mo to keep that work in-house with a safety net. Look for unprompted mentions of specific rejections.
2. **Assumption:** The deficiency causes are stable and enumerable enough that a rule pack stays accurate for months, not weeks. **How to test:** Collect 30 real deficiency notices from 3 utilities. If >70% map to a fixed taxonomy, the product works. If every notice is bespoke utility discretion, it doesn't.
3. **Assumption:** Vision models read real-world SLDs — including hand-marked and scanned ones — accurately enough that false positives stay under ~5%. **How to test:** Run 50 real plan sets through a prototype, hand-score against known outcomes. This is a weekend, and it is the single highest-information test.
4. **Assumption:** A shrinking residential market still buys efficiency tools rather than freezing all software spend. **How to test:** Ask directly in the 25 calls — "what software did you cancel this year?" The answer tells you everything.

### Risk flags

1. **Market contraction:** Residential solar is forecast **down 21% in 2026** with five flat years ahead. You are selling into a market that is shrinking, and some of your prospects will go out of business mid-contract. This is the biggest single risk and it is not fixable by execution.
2. **Incumbent squeeze:** Wattmonk already advertises an AI quality tool with 125,000+ approved submissions behind it. If they unbundle it as a standalone paid check, they start with better data and an existing customer base. Speed and a sharper wedge are the only defenses.
3. **Accuracy liability:** A false pass that leads to a rejection destroys trust instantly and permanently. The product must be positioned as a pre-flight screen, never a guarantee — and the terms of service must be unambiguous.
4. **Rule drift and maintenance drag:** Utility requirements change without notice. Rule pack maintenance is an ongoing operating cost that scales with the number of territories, and it never goes away. This quietly caps how fast you can expand geographically.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can ship a document-extraction
                        pipeline, paired with a solar permitting consultant
                        who has personally eaten interconnection rejections
Time to revenue:        4–6 months (12–16 weeks to v1, then a short funnel)
Capital to launch:      $15–25K (mostly the domain consultant's time)
Top 3 assumptions to validate first:
  1. Installers pay for the check, not the labor — 25 coordinator calls,
     look for unprompted specific rejection stories
  2. Deficiency causes map to a stable taxonomy — collect 30 real deficiency
     notices across 3 utilities, require >70% taxonomy fit
  3. Vision models read real scanned/hand-marked SLDs at <5% false positives
     — 50 real plan sets through a prototype, hand-scored
Kill criteria:
  - Abandon if <70% of 30 collected deficiency notices map to a fixed,
    encodable taxonomy (means the rules are utility discretion, not rules)
  - Abandon if SLD false-positive rate stays above 15% after tuning on
    50 real plan sets
  - Abandon if <5 of 25 interviewed coordinators name a specific rejection
    from the last 6 months unprompted
  - Abandon if Wattmonk or GreenLancer ships a standalone per-packet
    validator before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2: Get the notices.** Pull 30 real interconnection deficiency notices — from the permitting consultant's network, from installer forums, from public utility filings. Tag every stated reason. **Falsifiable output:** the percentage that map to a fixed taxonomy. Below 70% and the product thesis is wrong, because you cannot encode discretion.
- **Day 3–4: Break the extraction.** Get 50 real residential plan sets (drafting shops and installers will share these more readily than you'd expect). Run inverter model, breaker value, POI presence and utility disconnect presence extraction. Hand-score every one. **Falsifiable output:** false-positive rate on the SLD visual checks. Above 15% after a tuning pass and the core is not ready.
- **Day 5: Call 25 coordinators.** Cold, from the Top Solar Contractors list. One question that matters: *"Tell me about the last application that got kicked back."* Count how many name a specific incident from the last six months without prompting, and how many say yes to a $349/mo pre-flight check.
- **Decide:** GO requires **all three** — >70% taxonomy fit, <15% SLD false positives, and ≥5 of 25 coordinators with an unprompted recent rejection story plus ≥3 saying they'd pay. Miss any one and it's a VALIDATE at best. Given the 21% market contraction, I'd rather kill this in week one than in month nine.
