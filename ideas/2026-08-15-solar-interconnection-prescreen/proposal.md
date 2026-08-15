---
title: "QueueGate — interconnection screen for solar installers"
slug: solar-interconnection-prescreen
date: 2026-08-15
category: CleanTech / US-SMB — Residential Solar Installers (200–2,000 Installs/Year) Whose Rejected Interconnection Packets Restart the Utility Queue and Freeze the Last 10–20% of Every Job's Revenue
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Checks your interconnection packet against that utility's actual rules before you submit, so a typo doesn't cost eight weeks."
tags:
  vertical: CleanTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Workflow automation, Document-intelligence, Solo-builder]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# QueueGate

## 1. One-liner

Checks your interconnection packet against that utility's actual rules before you submit, so a typo doesn't cost eight weeks.

## 2. Trend signal — why now?

Three things happened at once, and they point the same direction.

**The penalty for a bad packet got brutal.** A rejected residential interconnection application doesn't just bounce back for a quick fix — it **restarts the queue position**, and a single resubmission cycle costs 6–8 weeks on the critical path ([Energyscape, 2026](https://energyscaperenewables.com/post/solar-interconnection-critical-path-2026/)). Other 2026 industry reporting puts a resubmission at 60–120 days in a busy utility service area. The gap between a first-pass approval and a resubmission is, in the words of one 2026 installer guide, "a documentation error that takes 15 minutes to fix — and 2 weeks to recover from." That asymmetry — 15 minutes of prevention against 6–8 weeks of penalty — is the entire product thesis.

**The error rate is not marginal.** Based on contractor interviews reviewed in 2026, **30 to 40 percent of residential applications have at least one error on the first submission** ([Energyscape / Solarinfopath, 2026](https://solarinfopath.com/interconnection-delays-causes-timelines/)). Meanwhile best-in-class engineering shops advertise 99% first-submission approval across 188,000+ projects — proving the problem is *solvable*, just not solved for the ordinary installer who can't afford a full engineering desk.

**The money got tighter, so the delay hurts more.** The 25D residential ITC expired 31 December 2025. Residential installs are projected to contract ~18–19% in 2026 and Wood Mackenzie projects a **40% spike in customer acquisition cost** ([Wood Mackenzie, 2026](https://www.woodmac.com/news/opinion/us-residential-solar-customer-acquisition-costs-set-to-spike-40-in-2026-before-gradual-decline/)). Over 100 solar companies have filed bankruptcy or shut down since 2023, including the #2 US residential installer in April 2026. In TPO deals, **the final 10–20% of the payment is held back until PTO** ([R11, 2026](https://r11inc.com/learn/tpo-milestone-payments)). An installer in a contracting market with a 40% CAC spike, holding 10–20% of revenue hostage to a queue they just got kicked to the back of, feels this every single week.

And it's getting worse, not better. A formal CPUC complaint found PG&E and SCE miss state-mandated interconnection deadlines **up to 73% of the time**, and in March 2026 California's Joint Legislative Audit Committee voted unanimously to audit CPUC oversight. SCE rejection notices are reportedly vague, leaving installers to guess what the utility actually wanted and resubmit into another rejection.

The critical structural fact: **SolarAPP+ does not solve this.** SolarAPP+ automates the *building permit* with the local AHJ — 240+ jurisdictions, free, genuinely good. The *utility interconnection* is a completely separate submission, to a separate body, under separate rules, with its own forms and portal. Every guide says the same thing: run them in parallel, never in series. The permit side got automated. The interconnection side did not.

```
Provenance:
  - Signal 1 (Demand): 30–40% of residential interconnection applications have at least one error on first submission; a rejection restarts queue position and costs 6–8 weeks — https://energyscaperenewables.com/post/solar-interconnection-critical-path-2026/ — 2026
  - Signal 2 (Feasibility): Vision-language models now reliably parse engineering drawings — fine-tuned VLM work on single-line/multi-view drawing extraction reports 99.68% precision on instrument listing; rejection causes are an enumerable 8-item taxonomy (equipment mismatch, invalid UL 1741 SA vs SB certification, inaccessible disconnect, oversized system, plan-set discrepancy, etc.) — https://arxiv.org/abs/2411.03707 + https://www.solarpermitsolutions.com/blog/utility-interconnection-guide-for-solar-installers — 2026
  - Signal 3 (Economic): 25D ITC expired Dec 2025; residential market contracting ~18–19% with 40% CAC spike in 2026; TPO holds final 10–20% of payment until PTO; DOE funding $50.5M FOA for solar permitting automation software and $11.2M iQMS for interconnection queue software — https://www.woodmac.com/news/opinion/us-residential-solar-customer-acquisition-costs-set-to-spike-40-in-2026-before-gradual-decline/ + https://www.energy.gov/cmei/systems/funding-notice-solar-energy-supply-chain-incubator — 2026
  Category: Workflow automation
```

## 3. The opportunity

There are roughly **3,000 electric utilities** in the United States, each with its own interconnection forms, portals, capacity thresholds, equipment standards and review tiers. As one 2026 installer guide puts it: "the specific thresholds, forms, and portals differ enough between utilities that a plan set built for one territory rarely transfers cleanly to another."

That's the gap. An installer working three utility territories is running three different rulebooks from memory, and the rulebooks change — UL 1741 SA is being phased out for SB, IEEE 1547-2018 adoption is spreading, CEC Grid Support Inverter List entries are **model-specific** (a manufacturer may have SB on their 50 kW unit but not the 30 kW variant of the same product line).

**Who's in the market today, and what they miss:**

- **GreenLancer** — the real incumbent. Sells done-for-you interconnection application preparation, flat fee, roughly $250–300 for residential permit packages with PE stamps $150–200 more. Excellent service. But it's *human labor priced per application*, which means (a) it costs real money per job in a market where margins just compressed, (b) it has turnaround time of its own, and (c) installers who already have an in-house ops person doing this don't want to outsource the whole job — they want to know if the packet their person just built is going to bounce.
- **SolarAPP+** — free, NREL-built, genuinely excellent, and **structurally out of scope**. AHJ building permits only, not utility interconnection.
- **GridUnity and the iQMS cohort** — real software, but sold to *utilities* to manage their inbound queue. Nobody in that cohort sells to the installer submitting into the queue. The tooling exists on the receiving end of the pipe, not the sending end.
- **Design tools (Aurora, OpenSolar, Scoop)** — they design the system and produce the plan set. They do not know that ComEd wants a different disconnect placement than National Grid Massachusetts, and they do not tell you your inverter model variant fell off the CEC list last quarter.

So the market has: a human service that costs per-job, a free tool for the wrong half of the problem, utility-side software, and design tools that stop before the rulebook starts. Nobody sells the installer a **cheap, instant, pre-submission check**.

The 10× claim is narrow and defensible: not "we replace your ops person," but "we tell your ops person in 90 seconds what a utility reviewer would have told them in three weeks."

## 4. Target market

- **Primary customer:** Operations manager or permitting coordinator at a residential solar installer doing **200–2,000 installs/year**, working 2–15 utility territories, in CA, TX, AZ, NY, MA, NJ, IL, CO or FL. Company size 15–150 people. These firms are big enough to have a dedicated permitting person (so there's a named buyer who owns this metric) and small enough that they cannot staff a proper engineering review desk.
- **Why they buy:** Because a rejection costs them 6–8 weeks of queue position and freezes the 10–20% TPO holdback on a job they've already paid crews to build. In a year where CAC is up 40% and volume is down 18%, cash conversion cycle *is* the business. The pain is not "paperwork is annoying" — it's "I have $40K of completed installs sitting at pending-customer-corrections."
- **Rough TAM reasoning:** 10,000+ US solar businesses; the residential installer segment doing meaningful volume with multi-utility exposure is plausibly 1,500–3,000 firms. At a $400–1,200/mo ACV that's a $10–40M addressable band — too small for a VC, correct size for this portfolio.
- **Why now for them:** The ITC expiry killed the volume cushion that let them absorb rework. Rejection notices from major utilities are getting vaguer while backlogs get longer. And the UL 1741 SA→SB transition means the equipment-certification failure mode — historically rare — is now a live, recurring trap on every job.

## 5. Product sketch (MVP)

- **Drop the packet, get a verdict.** Upload the interconnection application PDF, single-line diagram, site plan and equipment cut sheets. Get a pass/fail per rule with the specific line, page and fix.
- **Utility rulebook per territory.** Pick the utility; the check runs against *that* utility's thresholds, forms, tiers and disconnect requirements — not a generic checklist.
- **Cross-document consistency check.** The highest-yield check in the product: inverter model on the cut sheet vs. the application form vs. the single-line diagram vs. the site plan, plus panel count and system size vs. what was submitted to the AHJ. Plan-set discrepancy between AHJ and utility submissions is a named, common rejection trigger.
- **Live equipment certification lookup.** Flags inverters that aren't UL 1741 SB certified *for that exact model variant*, or that have fallen off the CEC Grid Support Inverter List.
- **Net-metering sizing check.** Compares proposed system capacity against the customer's trailing-12-month usage and the utility's cap, and flags where a documented variance request is required.
- **Disconnect accessibility flag.** Reads the site plan for disconnect placement behind gates, fences, or enclosed patios — a named rejection reason that is invisible until a utility inspector shows up.
- **Rejection decoder.** Paste the vague utility rejection notice you just received; get a plain-English translation into which document needs which specific change. This is a wedge feature — installers hit this pain *before* they'll pay for prevention.
- **Territory change log.** Weekly digest of what changed in the rulebooks you actually submit into.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist.

The core operation is: read a heterogeneous bundle of PDFs — a scanned utility form, a CAD-exported single-line diagram, a site plan, a manufacturer cut sheet — extract structured facts from each (inverter model string, breaker rating, disconnect location, panel count, system kW), and reconcile them against each other and against a rulebook. That is a vision-language task on engineering drawings, and it is exactly the capability that became reliable recently: fine-tuned VLM work on engineering drawing extraction reports 99.68% precision / 95.91% recall on instrument listing generation, and 100% on legend classification. Multi-stage hybrid frameworks combining detection models with VLMs for multi-view drawing interpretation are 2026-current research, not speculation.

Five years ago this needed a bespoke CAD parser per drawing convention and would have been a 5-person, 2-year build. That's precisely why it doesn't exist yet.

The second load-bearing use is the rejection decoder: turning a terse, jargon-laden utility notice into a specific document edit. That's a translation task with a domain-specific rulebook behind it — a natural LLM job with a real retrieval layer under it.

What is **not** AI: the rulebook itself. That's hand-curated per utility, and that curation is the moat (see §"Defensibility"). Anyone who tries to make the LLM *guess* the rules ships a product that hallucinates a rejection reason and destroys installer trust on day one. The AI reads documents; the rulebook decides.

## 7. Localization angle

`N/A — this is a US-only play, and the US-specificity is the point.`

The product's entire value is encoded knowledge of individual American utility interconnection rulebooks — Rule 21 in California, Rule 14H in Hawaii, the specific tier thresholds at ComEd, AEP Ohio, National Grid MA vs. NY. None of that transfers. A parallel product could exist for Australia's DNSP connection rules or Germany's Netzbetreiber process, but it would be a separate rulebook build from zero, not a localization. Start with the 8–10 highest-volume US territories and go deep, not wide.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by install volume, not seats. **$399/mo** (up to 25 packets/mo, 3 utility territories) · **$899/mo** (up to 100 packets, 10 territories) · **$1,899/mo** (unlimited, all supported territories, API into their project management tool). Benchmarked directly against GreenLancer's ~$250–300 per interconnection application: an installer doing 40 packets/month is looking at $10–12K/mo of outsourced prep, so $899 for a check layer on work their own team does is an easy comparison to win.
- **ACV:** ~$9,600 (blended, weighted toward the middle tier).
- **Math to $1M ARR:** 105 installers at $899/mo. That is roughly 4–7% of the plausible 1,500–3,000-firm segment. Achievable.
- **Math to $5M ARR:** ~430 customers at a blended $11.6K ACV — requires (a) 20+ utility territories covered, (b) moving upmarket into the 2,000+ install/year regional EPCs at the $1,899 tier, and (c) attaching the commercial/C&I interconnection workflow, where packets are more complex and per-project stakes are 10–50× higher. Commercial is where the $5M case actually lives.
- **Expansion path:** territories added → volume tier upgrades → C&I module → API/integration seat for their PM system → eventually sell the aggregate "which utilities reject what, how often" benchmark data back to the industry as a paid report. Note: that last one is a real asset but only after meaningful packet volume.

## 9. Go-to-market wedge — first 100 customers

1. **Mine the Solar Power World Top Solar Contractors list, filtered by state.** It's public, it's segmented by state and market, and it names residential contractors with volume. Pull the 400 firms in CA/TX/AZ/NY/MA. For each, identify the permitting/ops manager on LinkedIn. Send a 90-second Loom where you run *one of their actual recent public plan sets* (or a representative packet for their utility) through the tool and find a real defect. Personalized-defect-video outreach in a niche this specific should clear a 15–20% reply rate; target 5% close on a $399 entry tier = 20 customers from this list alone.
2. **Lead with the rejection decoder, not the pre-check.** Prevention is a hard cold sell; *"paste the rejection notice you're staring at right now"* is not. Ship the decoder as a free, no-login tool. Every paste is a qualified lead who has a live rejection, knows which utility, and just felt the pain. This is the top of the funnel and it's self-selecting for urgency.
3. **Own the utility-specific long tail in search.** Not "content marketing" — a programmatic page per utility territory: "SCE interconnection rejection reasons 2026," "ComEd Level 1 thresholds," "National Grid MA vs NY interconnection differences." The rulebook you're building for the product *is* the content. Installers already search these exact strings when stuck, and the current top results are competitors' blog posts written to sell services.
4. **Partner with the design tools, not against them.** Aurora, OpenSolar and Scoop end their workflow where this one begins, and none want to build 3,000 utility rulebooks. A referral or embedded-check integration puts the product in front of the installer at the exact moment the plan set is finished.
5. **The state solar trade associations.** CALSSA, TXSES, NYSEIA and their peers run member forums and hold monthly meetings where interconnection delay is a standing agenda item — it's the industry's most-complained-about topic and these bodies are actively lobbying on it. A free "2026 interconnection rejection benchmark" report for members buys the room.

## 10. Build complexity — justification

**Medium.** The document-intelligence layer is off-the-shelf — frontier VLMs handle PDF/drawing extraction well enough today that you're doing prompt and evaluation engineering, not model training. The genuine work is the **rulebook**: hand-encoding the interconnection requirements for the first 8–10 utility territories, which is domain research, not engineering, and needs someone who will read Rule 21 and ComEd's tariff carefully. Budget 12–16 weeks for a credible v1 covering 5 territories with the top 6 rejection checks, built by two people — one on the document pipeline, one on rulebook curation. The accuracy bar is the schedule risk: a false "pass" that leads to a rejection is worse than no product, so the eval harness has to be built alongside the checks, not after.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Checking documents against published utility tariffs. No licensure required — the product advises, the installer submits. Must avoid representing itself as providing PE-stamped engineering. |
| Ethical — no harm / dark patterns | ✅ | Reduces rework and grid-connection delay. Aligned with customer, installer and utility interest. |
| Market exists (evidence above) | ✅ | GreenLancer sells the adjacent service at $250–300/application; 30–40% first-submission error rate; 10,000+ US solar businesses. |
| 1–5 person team can build this | ✅ | Two people, 12–16 weeks to a 5-territory v1. |
| Launchable with <$50K / ₹40L | ✅ | Inference costs, a rulebook researcher's time, and outbound tooling. Well under. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | A rejection restarts queue position at 6–8 weeks and freezes the 10–20% TPO holdback, in a year with 40% CAC inflation and 100+ industry bankruptcies. Felt weekly, costs real cash, and the buyer personally owns the metric. Not a 19 only because the biggest installers have already built internal QA and the smallest don't submit enough volume to care. |
| Demand evidence | 15 | 12/15 | Strong: a priced incumbent service (GreenLancer $250–300/app), a documented 30–40% error rate, DOE putting $50.5M+$11.2M into adjacent permitting/queue automation, and a CPUC audit of interconnection oversight. Docked because I could not source verbatim installer complaints directly — the pain is documented by industry publications and a regulatory complaint rather than by raw customer voice I could quote. That gap is the single biggest thing to close in validation. |
| Build feasibility | 15 | 11/15 | Document extraction is off-the-shelf; the rulebook curation is slow, manual and unglamorous, and the accuracy bar is unforgiving. Two people, 12–16 weeks. Solidly Medium. |
| Distribution clarity | 15 | 12/15 | Named public list (Top Solar Contractors, state-filtered), named buyer (permitting/ops manager), a self-qualifying free wedge tool, and named trade associations. Conversion math is estimated rather than tested, so not higher. |
| Revenue mechanics | 15 | 12/15 | Pricing anchors cleanly against a real per-application incumbent cost. 105 customers to $1M is credible. The $5M case leans on the C&I module, which is a genuine assumption rather than a proven extension. |
| Time to first revenue | 10 | 8/10 | The decoder wedge can be live in weeks and monetized shortly after; full pre-check needs the rulebook. Realistic first paying customer at 10–14 weeks. |
| Defensibility | 10 | 5/10 | The moat is accumulated rulebook coverage plus a growing dataset of which packets actually got rejected and why — that compounds and is genuinely tedious to replicate. But it's curation, not a structural moat: a funded competitor with a research team can catch up in 12 months, and GreenLancer already has both the domain knowledge and the customer list to move here if it wanted. Execution and focus moat, honestly scored. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs someone who can build a reliable document-extraction pipeline **and** someone willing to spend months reading utility tariffs. If the founding team has no solar or electrical background, hire or partner with a former permitting coordinator in week one — this is not a domain you can bluff.

### Key assumptions to validate (3–5)

1. **Assumption:** Installers will pay for a *check* rather than outsourcing the whole packet to GreenLancer. **How to test:** 20 interviews with permitting managers at 200–2,000 install/year firms. Ask what they currently spend on interconnection prep and whether they'd pay $899/mo to cut rejections. Watch for the answer "we'd rather just outsource it all" — that's the kill signal.
2. **Assumption:** The 8-item rejection taxonomy actually covers the majority of real rejections. **How to test:** collect 100 real rejection notices (the free decoder tool harvests these organically) and classify them. If the top 6 checks don't cover ~70%, the product's promise is too thin.
3. **Assumption:** Cross-document extraction is accurate enough that a "pass" is trustworthy. **How to test:** build the eval set first — 50 packets with known outcomes, half rejected. Measure false-pass rate specifically. A false pass is the product-killing error, not a false flag.
4. **Assumption:** A rulebook for one utility is maintainable by one person at reasonable cost as territories scale. **How to test:** time-box building ComEd and SCE rulebooks; measure hours per territory and hours/month to maintain. If maintenance is >4 hrs/territory/month, the 20-territory business doesn't work.

### Risk flags

1. **Incumbent adjacency:** GreenLancer has the domain knowledge, the engineer network and the installer relationships to launch a pre-check product as a defensive move. They currently make money *per application*, which is the classic incumbent disincentive — but that protection is thin and temporary.
2. **Market contraction:** Selling into a segment shrinking 18–19% with 100+ bankruptcies since 2023. Customers will churn by going out of business, not by disliking the product. Underwrite churn conservatively and prefer the healthier multi-state operators.
3. **Accuracy/liability:** If the tool passes a packet that gets rejected, you own the installer's 6–8 weeks emotionally even if not legally. Terms must be explicit that this is advisory, not engineering sign-off — and the product should show its work per check so a human can verify rather than blindly trust.
4. **Rulebook churn:** 3,000 utilities changing forms, thresholds and certification requirements independently. Maintenance cost grows with coverage and is the thing most likely to quietly break the margin.
5. **Regulatory tailwind cuts both ways:** if FERC/state reform or a DOE-funded standardization effort genuinely harmonizes interconnection submission the way SolarAPP+ standardized permitting, the rulebook moat erodes. Unlikely inside 3 years across 3,000 utilities, but it's the long-term structural risk.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder strong on document/vision pipelines,
                        paired with a former solar permitting coordinator or
                        interconnection engineer as co-founder or first hire.
Time to revenue:        10–14 weeks (decoder wedge earlier)
Capital to launch:      $15–25K
Top 3 assumptions to validate first:
  1. Installers pay for a check, not full outsourcing — 20 permitting-manager interviews
  2. Top 6 checks cover ~70% of real rejections — classify 100 real rejection notices
  3. False-pass rate is near zero — 50-packet eval set with known outcomes, built before the product
Kill criteria:
  - Abandon if <15% of 40 interviewed installers can name a rejection that cost them
    4+ weeks in the last 6 months
  - Abandon if false-pass rate on the 50-packet eval set exceeds 5%
  - Abandon if rulebook maintenance exceeds 4 hours per territory per month
  - Abandon if GreenLancer or a design-tool incumbent ships an equivalent
    pre-submission check before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free rejection decoder against a single utility (SCE — biggest backlog, vaguest notices, loudest complaints). Post it in CALSSA member channels and the r/solar installer-side threads with one line: "paste your rejection notice, I'll tell you what they actually want." Instrument every paste.
- **Day 3–4:** Call 20 permitting/ops managers pulled from the state-filtered Top Solar Contractors list. Two questions that matter: *"How many packets bounced last quarter, and what did the worst one cost you?"* and *"You currently spend $X per application on outside prep — would you pay $899/mo to cut your bounce rate in half?"* Record verbatim answers; this closes the demand-evidence gap that cost the score three points.
- **Day 5:** Decide on two falsifiable numbers: **(a)** ≥25 rejection notices pasted into the decoder in 72 hours, and **(b)** ≥6 of 20 interviewed managers name a specific rejection in the last 6 months that cost them 4+ weeks *and* give a non-hedged yes to the pricing question.

Both hit → build the ComEd and SCE rulebooks and go. Only (a) hits → the pain is real but the wallet isn't; reconsider as a per-packet transactional product rather than SaaS. Neither hits → the rework is being absorbed quietly and this is a vitamin. Kill it.
