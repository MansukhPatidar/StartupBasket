---
title: "DryProof — billable-day sentry for water restoration crews"
slug: restoration-drying-log-auditor
date: 2026-07-18
score: 81
verdict: STRONG GO
confidence: Medium
complexity: Medium
category: PropTech / US — Independent Water-Damage Restoration Contractors (drying documentation vs. carrier-paid equipment days)
oneLiner: "Catches the missing moisture reading tonight, while the dehumidifier is still running and the day is still billable."
tags:
  vertical: PropTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Field-service, Insurance-claims, Mobile-first, Solo-builder]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 13
  revenue: 13
  time: 7
  defensibility: 7
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# DryProof

## 1. One-liner

Catches the missing moisture reading tonight, while the dehumidifier is still running and the day is still billable.

## 2. Trend signal — why now?

Three things moved at once, and they moved in opposite directions — which is exactly what creates an opening.

**Carriers armed up.** 65% of insurers are scaling AI agents for claims processing in 2026, and the industry expects 2026–2027 to be the transition from AI-assisted workflows to *agentic* ones where AI orchestrates the claim and the adjuster just reviews outcomes. Carriers now write initial estimates from satellite imagery before anyone visits the property. On the roofing side the shift is already explicit: supplement language "has to match what the carrier AI is trained to flag as legitimate," and generic copy "gets denied faster now than ever."

**Contractors did not.** The other side of the table is still a technician with a clipboard and a phone camera. A 250-company industry survey found restorers describing a **10–20% payment gap as if it is simply part of doing insurance work** — one owner said his team no longer argues small cuts because a few hundred dollars on one claim doesn't feel worth the admin time. That is the sound of a market that has stopped fighting.

**The loss is mechanical, not rhetorical.** In Xactimate, if an action isn't typed in as a line item, it doesn't get paid — the cost simply vanishes from the check. Dehumidifiers bill **$75–200 per unit per day** and are usually the largest single line on a mitigation invoice, but adjusters are justified in capping drying charges at ~3 days unless the contractor produces drying logs proving otherwise. A contractor forum case shows the mechanic in the raw: equipment ran **41 days, the carrier paid 13**, and said it would pay the rest if drying logs were submitted — logs that did not exist. At even $100/day that is roughly $2,800 of pure equipment revenue destroyed by absent readings, on one job.

The kicker: adjusters require *contemporaneous* records — daily moisture logs, psychrometric readings, equipment placement diagrams — **not retroactive summaries**. Which means this is unrecoverable after the fact. You cannot backfill your way out. The only fix is catching it on the night it happens.

```
Provenance:
  - Signal 1 (Demand): 250-company survey finds restorers normalizing a 10–20% claim payment gap; forum case shows 41 equipment-days run vs 13 paid due to absent dry logs — https://www.candrmagazine.com/the-claim-gap-why-restoration-contractors-are-normalizing-underpayment/ + https://thecleaningstandard.com/forum/threads/contractor-did-not-keep-dry-log-now-might-come-after-us.304236/ — 2026-07-18
  - Signal 2 (Feasibility): Protimeter BLE and Tramex 5-series meters stream live readings over Bluetooth with logging APIs and cloud reporting; cheap multimodal AI can read a photo of any non-BLE meter face — https://www.protimeter.com/ble + https://tramexmeters.com/tramex-meters-app — 2026-07-18
  - Signal 3 (Economic): 60,020 US damage-restoration businesses in a $7.1bn fragmented market (no player >5% share); existing supplement help is human labor at $99–125/hr or $99+/file, and dehumidifier line items bill $75–200/unit/day — https://www.ibisworld.com/united-states/industry/damage-restoration-services/6278/ + https://quickpayclaims.com/ — 2026-07-18
  Category: Tech-unlock
```

## 3. The opportunity

Every tool in this market is a **capture** tool. Encircle (~$250–590/mo), DocuSketch (~$70/claim all-in), magicplan ($9.99/user/mo) all do the same job well: they store what the technician actually recorded. Photos, sketches, floor plans, readings. Beautiful reports.

None of them audit for **absence**.

That's the whole insight. The money isn't lost because the drying log is ugly — it's lost because day 4 has no reading on the north wall, nobody noticed, and by the time the estimate is written that day is gone forever. The existing software has no opinion about what *should* be there. It's a filing cabinet, not an inspector.

The second gap is on the service side. Supplement and estimating shops — QuickPay Claims at $99/hr, Rebuild Estimator at $99/project or $1,999/mo for 10 files — sell *human* labor, priced like labor. They're also fundamentally retrospective: they help you write a better estimate from whatever documentation exists. They cannot conjure the missing day-4 reading either.

So the market is split between tools that don't check and humans who arrive too late. DryProof sits in the gap: a nightly automated audit that knows the Xactimate line items the carrier will pay, knows what evidence each one requires, and knows what's missing *while the crew can still drive back and get it*.

Against the incumbent's own logic: the carrier is now running AI that systematically flags weak claims. Answering that with a clipboard is a losing trade. This is the contractor's counter-stack.

## 4. Target market

- **Primary customer:** Owner or ops manager of an independent water-damage restoration firm, US, 3–25 technicians, $1M–8M revenue, running 30–150 mitigation jobs a month. IICRC-certified, uses Xactimate or Symbility, not a franchise with a corporate documentation mandate. The buyer is the owner — he signs the check and he's the one who eats the short-pay.
- **Why they buy:** Because the gap is quantified and it's his money. Restorers describe a 10–20% payment gap as the cost of doing business. Equipment days are the largest mitigation line item and the easiest to lose. The owner already knows his techs are inconsistent — a documented case in the trade press describes field teams whose "photo logs varied dramatically by technician," forcing multiple supplements before approval. He just has no mechanism to catch it before the job closes.
- **Rough TAM reasoning:** 60,020 US damage-restoration businesses in a $7.1bn industry, highly fragmented with no company above 5% share — meaning it's overwhelmingly small independents, exactly the wallet that can't afford a full-time internal file reviewer. Strip out sole operators and franchise-mandated shops and a realistic serviceable base is 12,000–18,000 firms. At $400/mo average, capturing 2% of the serviceable base is ~$1.4M ARR.
- **Why now for them:** Carriers got materially better at scrutinizing claims in the last 12 months while contractor documentation stayed manual. The gap widened this year. Owners feel it as margin compression they can't explain line by line.

## 5. Product sketch (MVP)

- **Nightly job audit.** Every open mitigation job gets checked at 8pm against what the carrier will require. Missing day-4 reading on the north wall, no psychrometric entry, equipment logged but zero monitoring hours — each becomes a specific, addressable flag.
- **Morning crew punch list.** The lead tech opens his phone to a ranked list: which job, which room, which reading, and the dollar value at risk if he doesn't get it today. Not a notification blast — a work order.
- **Dollars-at-risk meter per job.** Every gap carries a number derived from the line item it jeopardizes ("3 dehumidifier days unsupported ≈ $450"). Owners have never seen this quantified in real time, and it's what makes the product self-evidently worth its price.
- **Meter reading by photo.** Tech snaps the meter face; the reading, material, and location get logged without typing. For BLE meters (Protimeter, Tramex 5-series) readings stream in automatically.
- **Line-item evidence map.** For each billable Xactimate code the job will claim, show the supporting evidence attached and what's still thin — content manipulation, containment, after-hours multipliers, equipment-cleaning codes, EQ monitoring hours.
- **Close-out package.** At job end, a carrier-ready drying log and evidence bundle, with a plain-English justification for every day of equipment beyond three.
- **Post-mortem leakage report.** Monthly: what got flagged, what got fixed, what got lost anyway, and the recovered dollars. This is the renewal argument, delivered automatically.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist. Three places it's doing real work:

**Reading the physical world.** Restoration runs on instruments that mostly don't talk to anything. Multimodal vision turns a photo of a meter face into a structured reading with material and location — no typing, which is the only way field techs actually comply. BLE meters cover part of the fleet; vision covers the rest, including the cheap meters small shops actually own.

**Knowing what's missing.** This is the hard part and the actual moat. The system has to encode the mapping between Xactimate mitigation codes and the evidence each one needs to survive an adjuster, then reason over a specific job's state to find the holes. That's not a checklist — the required evidence shifts by water category, affected materials, drying duration, and the carrier's own guidelines. Judging "does this job's documentation support 11 dehumidifier days" is a reasoning task over messy, incomplete field data.

**Writing the justification.** When a job legitimately ran 15 days, someone must write the psychrometric argument for why. That's the expensive human labor being sold today at $99–125/hour — and it's exactly what carrier AI now scores. Generic language gets denied faster; specific, data-anchored language survives.

The pitch is honest: this is not a chatbot on a form. It's an automated file reviewer that costs a hundredth of the human one and runs every single night.

## 7. Localization angle (if any)

`N/A — this is a US-first play.` The wedge is Xactimate's line-item structure and US carrier adjudication practice, where ~75–80% of adjusters estimate in Xactimate. That specificity *is* the product. Canada shares the Xactimate/Symbility stack and IICRC S500 standards and is a natural second market with modest rework. The UK and Australia have different insurer workflows and would require rebuilding the core knowledge layer — not worth it before $3M ARR.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by active job volume, not seats — seats punish the field adoption the product needs. $249/mo (up to 25 active mitigation jobs), $499/mo (up to 75), $899/mo (unlimited + multi-branch). Sits deliberately under Encircle's ~$590 and well under a single supplement service retainer.
- **ACV:** ~$4,800 realistic blended average.
- **Rough math to $1M ARR:** 210 customers at $400/mo. In an industry of 60,020 businesses, that is a rounding error of market share — and it's the number the direct-outreach motion in section 9 can plausibly hit.
- **Rough math to $5M ARR:** ~870 customers at a $480/mo blended ACV, which requires two things: winning multi-branch regionals (the $899 tier) and adding the fire/smoke and mold verticals, which have their own documentation-to-line-item mappings and the same structural problem. Both are extensions of the same knowledge layer, not new products.
- **Expansion path:** Job-volume tier upgrades happen automatically as customers grow (and storm season spikes volume). Then: contents documentation, fire/smoke, mold clearance. The natural high-margin upsell is **outcome-priced supplement drafting** — the system already knows exactly which items are underpaid and holds the evidence, so charging a success percentage on recovered dollars is a short step, and it converts the product from a subscription into a revenue share on money it directly created.

**Margin note:** nightly audits on open jobs are a predictable, bounded inference cost — roughly $8–20 per customer per month at target volumes, against a $400 subscription. This is a healthy software business, not an AI-cost trap.

## 9. Go-to-market wedge — first 100 customers

- **The free leakage audit — the entire wedge.** Offer to review 10 recently closed job files for free and report what was billable but unsupported, in dollars. This is a genuinely great offer because the answer is almost never zero — the 10–20% gap is the industry's own self-reported number. It converts a sales conversation into a delivered finding. Target: 200 audits, 25–30% conversion. Runs on IICRC-certified firm directories, which are public and enumerable, plus state contractor licensing lists.
- **Xactimate-adjacent training networks.** Restoration estimators are trained in a small, tight ecosystem — Reets Drying Academy, IICRC WRT/ASD courses, Xactimate certification cohorts. These people are the internal champions and the instructors have distribution. Sponsor or co-teach a session on documentation-driven billing; the product is the worked example, not an ad.
- **Trade press and the underpayment conversation.** *Restoration & Remediation* and *C&R Magazine* are actively publishing on the claim gap right now — that's an open editorial door for original data. Publish a quarterly "Restoration Claim Leakage Index" from aggregated anonymized audit findings. Original data in a small trade gets cited, and it feeds the free-audit offer.
- **Supplement companies as channel partners, not rivals.** The $99/hr estimating shops want better-documented files — thin documentation is what makes their work hard and their recovery rates low. Referral partnerships with 10–15 of them puts DryProof in front of exactly the right owners, pre-qualified as people already paying to fix this problem.
- **Storm-season timing.** Demand is violently seasonal. Land customers ahead of named-storm season when owners are staffing up and acutely aware that documentation discipline collapses under volume.

## 10. Build complexity — justification

**Medium.** The mobile capture app, nightly job scanning, and report generation are standard off-the-shelf work — mobile-first web, vision APIs for meter reading, BLE integration for the Protimeter/Tramex fleet. Roughly 10–14 weeks for a pair.

The real work is the **evidence-requirement knowledge layer**: encoding which Xactimate mitigation codes require what documentation to survive adjuster scrutiny, and keeping it current as carrier guidelines shift. That is not an engineering problem — it's domain acquisition. It needs a restoration estimator or ex-adjuster co-builder feeding real files and real denials. Budget 4–6 months to a credible v1 with that person on board from week one. Without them, this is a 12-month flail and the product will be confidently wrong, which in this market is worse than useless.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps contractors document work they actually performed to bill covered line items. No adjusting license needed — the product organizes evidence and flags gaps; it does not negotiate or settle claims on a policyholder's behalf. Stay clear of public-adjusting scope. |
| Ethical — no harm / dark patterns | ✅ | The product surfaces evidence for work genuinely done. It must be built to flag *missing documentation*, never to fabricate or infer readings that weren't taken — that line is the entire integrity of the business. |
| Market exists (evidence above) | ✅ | 60,020 US firms; contractors already pay $99–125/hr for retrospective versions of this; self-reported 10–20% gap. |
| 1–5 person team can build this | ✅ | 2 builders + 1 domain expert. |
| Launchable with <$50K / ₹40L | ✅ | Sub-$20K: inference costs, a few meters for integration testing, and travel to ride along with crews. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Quantified, recurring, and irreversible after the fact. $2–5K lost on a single documented job; equipment days are the largest mitigation line. Not 18+ because owners have normalized the loss — "not worth the admin time" is real buyer apathy that must be overcome with a dollar figure. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: 250-company survey on the payment gap, a specific forum case (41 days run / 13 paid), and — strongest of all — people already paying $99–125/hr for a worse retrospective version. |
| Build feasibility | 15 | 11/15 | Software is standard; the knowledge layer is the constraint and needs a domain co-builder. 4–6 months, not 6 weeks. Honest downgrade. |
| Distribution clarity | 15 | 13/15 | The free leakage audit is a strong, concrete, high-conversion offer against an enumerable list. Not 14+ because field-tech adoption (not the owner sale) is the real hurdle and it's unproven. |
| Revenue mechanics | 15 | 13/15 | Pricing benchmarked against Encircle ($250–590) and supplement retainers ($1,999/mo). 210 customers to $1M in a 60K-firm market. Outcome-priced supplements are a credible ACV expander. |
| Time to first revenue | 10 | 7/10 | Free audits can pre-sell during build, but a credible v1 needs the knowledge layer. Realistically 4–5 months to first paid, faster if pilots convert. |
| Defensibility | 10 | 7/10 | The compounding asset is the mapping of documentation patterns to actual carrier outcomes — which codes get paid with which evidence, by carrier. That data only accrues by running real jobs and is genuinely hard to copy at month 12. Weak at month 3. |
| **Total** | **100** | **81/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

The second tag is not optional. A pure software team will build a plausible product that gets the evidence requirements subtly wrong, and in this market a confidently wrong audit destroys trust on the first job. Find the estimator before writing code.

### Key assumptions to validate (3–5)

1. **Assumption:** Field technicians will actually act on a morning punch list — the whole product collapses if gaps get flagged and ignored. **How to test:** Run a 3-week manual concierge pilot with 3 firms. A human reviews their open jobs nightly and texts the crew lead. Measure the percentage of flagged gaps closed within 24 hours. Below 50% and the product needs to be sold as an owner-enforcement tool, not a crew tool.
2. **Assumption:** The 10–20% gap contains a meaningful *documentation-caused* slice, not just carrier hardball on price. **How to test:** Free leakage audits on 30 closed files across 10 firms. Categorize each underpayment as documentation-fixable vs. pricing dispute. Need ≥40% documentation-fixable.
3. **Assumption:** Owners will pay $249–899/mo for prevention rather than a success fee on recovery. **How to test:** Present both models to 25 owners after delivering their free audit. If subscription resistance is high, pivot to outcome pricing — which is a better business anyway if recovery rates hold.
4. **Assumption:** Evidence requirements are consistent enough across carriers to encode. **How to test:** Collect 50 denial/short-pay letters across 5+ carriers and check whether the reasons cluster into a stable, encodable set.

### Risk flags

1. **Adoption risk (the big one):** This depends on behavior change from field technicians who are wet, tired, and behind schedule. Every field-service tool dies here. Mitigation: make the flagged action take under 15 seconds (photo, not form) and make the owner the enforcer via the dollars-at-risk view.
2. **Incumbent response:** Encircle or DocuSketch could add gap-detection to tools that already sit in these workflows with the capture data. This is the most serious competitive threat — they'd start with distribution and the underlying data. The defense is depth of the outcome mapping and moving fast to the supplement-recovery upsell they'd be slower to touch.
3. **Regulatory boundary:** Drafting supplement justifications can drift toward public adjusting, which is licensed state by state. Keep the product on the contractor's side of the table (documenting their own invoice) and take counsel before launching outcome-priced supplement drafting.
4. **Seasonality:** Revenue and usage swing hard with storms. Volume-tiered pricing partly absorbs this, but cash flow will be lumpy and churn will spike in slow quarters.

## 14. Structured verdict

```
Score:                  81/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       Technical pair + a restoration estimator or ex-adjuster as co-builder (non-negotiable)
Time to revenue:        4–5 months (pre-sell via free audits during build)
Capital to launch:      $15–20K
Top 3 assumptions to validate first:
  1. Techs close ≥50% of flagged gaps within 24h — 3-week manual concierge pilot, 3 firms
  2. ≥40% of the payment gap is documentation-fixable — 30 free leakage audits on closed files
  3. Owners accept subscription over success-fee pricing — offer both to 25 owners post-audit
Kill criteria:
  - Abandon if free leakage audits on 30 closed files show <$1,000 average recoverable per job
  - Abandon if <30% of flagged documentation gaps get closed by crews during the concierge pilot
  - Abandon if Encircle or DocuSketch ships equivalent gap-detection before v1 launch
```

Confidence is Medium, not High, for one reason: everything about the *problem* is well-evidenced, but the *behavioral fix* is unproven. The dollars are real and documented. Whether a soaked technician on job six will drive back for one reading is the question the concierge pilot exists to answer — and it's answerable in three weeks for almost no money.

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 5 restoration owners from IICRC directory outreach. Offer a free leakage audit of 10 recent closed job files. Frame it as "I'll tell you what you left on the table" — nobody refuses that.
- **Day 3–4:** Manually review those ~50 files against Xactimate mitigation requirements with a hired estimator ($500–1,000 of contract time). Categorize each finding: documentation-fixable vs. pricing dispute. Produce a per-firm dollar figure.
- **Day 5:** Deliver each audit live. Ask exactly one closing question: *"If a system caught these while the job was still open, would you pay $499/month?"* Then push for a paid concierge pilot at $250/mo starting immediately — a human doing the nightly audit by hand.

**Falsifiable outcome:** ≥3 of 5 firms show >$1,000 average documentation-fixable leakage per job, AND ≥2 commit money to the concierge pilot. Anything less means owner apathy is stronger than the dollar figure, and the idea is a VALIDATE at best — do not start building.
