---
title: "LastBuy — discontinuation watch for plant maintenance teams"
slug: spare-parts-obsolescence-watch
date: 2026-07-30
category: Logistics / Global
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Tells a plant which spare parts the OEM just killed, while the last-time-buy window is still open."
tags:
  vertical: Logistics
  model: SaaS
  geography: Global
  secondary: [SMB, AI-agent, AI-powered, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# LastBuy

## 1. One-liner

Tells a plant which spare parts the OEM just killed, while the last-time-buy window is still open.

## 2. Trend signal — why now?

Three things moved at once.

**The notification system structurally excludes small buyers.** When a manufacturer discontinues a part, it issues a PCN (product change notification) or PDN (product discontinuance notice). Those go to the manufacturer's *direct notification list* — which means large direct accounts. Roughly [25–30% of lifecycle changes happen without a preceding PCN reaching all affected customers](https://j2sourcing.com/blog/component-obsolescence-eol-last-time-buy-playbook-2026/), and smaller buyers not on those lists "often discover a part is obsolete only when they try to reorder and find zero stock. By then, the LTB window has already closed." That is a structural information asymmetry, not a bad-luck story.

**The clock is short and getting shorter.** The standard JEDEC path is a 6-month last-time-buy window, then 6–12 months of last-time-ship — [12–18 months total from EOL-announced to fully obsolete](https://j2sourcing.com/blog/component-obsolescence-eol-last-time-buy-playbook-2026/). In practice it's tighter: once a PDN is issued, authorized inventory can evaporate within weeks. Meanwhile [over 750,000 electronic components reached end-of-life in 2022 alone, a 40% year-over-year increase](https://j2sourcing.com/blog/component-obsolescence-eol-last-time-buy-playbook-2026/), and industrial semiconductor lifecycles have compressed to ~6.2 years. On the automation side, [Allen-Bradley SLC 500 and PLC-5 are fully discontinued and Siemens SIMATIC S7-300/400 are in formal phase-out](https://aiautomation.global/insights/obsolete-allen-bradley-plc-parts.html), while [factories still run production lines on PLCs that are 15, 20, or even 30 years old](https://www.industrialautomationco.com/blogs/news/legacy-plcs-explained-how-long-can-you-keep-running-yours).

**The buyers who need this most have no tool.** SPARETECH's 2025 survey of 300 manufacturing executives found [66% manage MRO with no dedicated system beyond ERP](https://reliamag.com/guides/mro-spare-parts-inventory-statistics/), 32% report frequent stockouts of critical spares, and 22% of inventory has sat unused 5+ years. Verdantis's 2026 research across ~1,900 senior operations executives found 51% cite data-quality problems and 5–7% duplicate purchases from bad data. The tools that solve this — SPARETECH, Z2Data, SiliconExpert — are enterprise-priced; [SPARETECH's own savings calculator starts at 10 plants with 5,000–30,000 parts per location](https://sparetech.io/). A 200-person plant with one storeroom is not the customer.

The unlock: cheap long-context vision models. [Gemini 2.0 Flash at $0.075 in / $0.30 out per 1M tokens](https://www.swfte.com/cheapest/vision) makes it economical to read a messy 4,000-line storeroom export — full of free-text descriptions, inconsistent naming, and typo'd part numbers — and resolve it to real manufacturer part numbers. That resolution step is what used to require a $60K data-cleansing consulting engagement, and it's the thing standing between a mid-market plant and any obsolescence monitoring at all.

```
Provenance:
  - Signal 1 (demand): 66% of manufacturers manage MRO with no system beyond ERP; 32% report frequent critical-spare stockouts; 22% of inventory unused 5+ years — SPARETECH survey of 300 manufacturing executives, 2025 — https://reliamag.com/guides/mro-spare-parts-inventory-statistics/ — observed 2026-07-30
  - Signal 2 (feasibility): Long-context vision models at $0.075/1M input tokens make messy storeroom-export part-number resolution economically trivial vs. prior consulting-priced data cleansing — https://www.swfte.com/cheapest/vision — observed 2026-07-30
  - Signal 3 (economic): 25–30% of lifecycle changes occur without PCNs reaching all affected customers; smaller buyers discover obsolescence only on reorder, after the LTB window closed; 750K+ components hit EOL in 2022, +40% YoY — https://j2sourcing.com/blog/component-obsolescence-eol-last-time-buy-playbook-2026/ — observed 2026-07-30
  Category: Underserved niche
```

## 3. The opportunity

The obsolescence-monitoring market is real and mature — it just refuses to serve anyone below the enterprise line.

SiliconExpert, Z2Data, and IHS Markit all sell lifecycle-risk monitoring, all on custom enterprise contracts, and all aimed at **electronics design teams monitoring a BOM before a product ships**. Their unit of analysis is the bill of materials. SPARETECH and Verdantis sell MRO master-data harmonization to multi-plant manufacturers, anchored to ERP integration and multi-site rollouts.

Nobody sells obsolescence monitoring to **the maintenance manager of one plant, whose unit of analysis is a storeroom, not a BOM**. That person has 3,000–8,000 line items in a spreadsheet or a thin CMMS parts module, no ERP master-data discipline, and no seat on any OEM's PCN distribution list. They find out a drive is discontinued at 2am when the line is down and the distributor says "that's NLA."

The gap has a specific shape:

- **Enterprise tools require clean data as an input.** LastBuy treats dirty data as the input — that's the whole point. A storeroom export with "AB POWERFLEX 40 DRIVE 3HP" in the description field is the normal case, not an error state.
- **Enterprise tools are priced per-plant-fleet.** LastBuy is priced per storeroom, at a number a maintenance manager can approve without a capex request.
- **BOM tools monitor what you're about to build.** LastBuy monitors what you already own and depend on.

The 10× isn't in the alerting — PCN feeds are semi-public. It's in **resolution**: turning a plant's junk-drawer parts list into monitorable manufacturer part numbers without a consulting engagement. That step is now cheap, and it wasn't 18 months ago.

## 4. Target market

- **Primary customer:** Maintenance manager, reliability engineer, or storeroom/MRO supervisor at a single-site or 2–4-site manufacturing plant, 50–500 employees. Discrete and process manufacturing — food & beverage, plastics, packaging, metal fabrication, building products. Runs a CMMS (Limble, UpKeep, Fiix, eMaint) or a spreadsheet. Has a parts crib with 2,000–10,000 SKUs and no master-data function. Geography: US and EU first — that's where the OEM lifecycle data is best published and where the automation installed base is oldest.

- **Why they buy:** Because the failure mode is career-visible. A discontinued drive discovered during a breakdown turns a 4-hour repair into a 3-day outage plus a scramble through grey-market resellers at 3–5× price for a refurbished unit of unknown provenance. [Options at that point shrink to "paying a premium for refurbished units on the secondary market, facing extended downtime, or executing an emergency migration under time pressure."](https://www.industrialautomationco.com/blogs/news/legacy-plcs-explained-how-long-can-you-keep-running-yours) None of those is a good day. The alternative — a $4,200 last-time-buy placed nine months earlier — is boring and cheap.

- **Rough TAM reasoning:** I'm not going to pretend I have a clean establishment count; I couldn't source one I trust. What I can anchor on: the SPARETECH survey says two-thirds of manufacturers run MRO on ERP alone, and CMMS vendors like Limble and UpKeep serve tens of thousands of small and mid-size plants at $20–70/user/month. If the addressable set is even 30,000–60,000 plants across US+EU with a real storeroom and aging automation, a 1–2% penetration at $300–500/mo is a $1.5–3M ARR business. That's the shape I want, and it doesn't need heroic assumptions.

- **Why now for them:** Their installed base crossed the line. The PLC-5 / SLC 500 / S7-300 generation is simultaneously (a) still running production and (b) formally discontinued or in phase-out. The obsolescence exposure that was theoretical in 2018 is now concentrated and dated.

## 5. Product sketch (MVP)

- **Upload your parts list as-is** — CSV export from the CMMS, an ERP material dump, or the actual spreadsheet. No schema, no mapping wizard, no cleanup required first.
- **Automatic part resolution** — each line gets matched to a manufacturer + real part number, with a confidence score. Ambiguous lines get surfaced for a one-click human confirm rather than silently guessed.
- **Lifecycle status per line** — Active / Not Recommended for New Designs / EOL announced / Last-Time-Buy open (with the date) / Obsolete. Sourced from OEM lifecycle publications and distributor availability signals.
- **The LTB countdown** — a ranked list of "buy these now, the window closes in N days," each with the LTB date and the OEM's named successor part where one exists.
- **Criticality overlay** — the user tags which assets are single-points-of-failure; LastBuy ranks obsolescence exposure by *what it takes down*, not by part cost. A $300 obsolete relay on the only filler line outranks a $9,000 obsolete spare on a redundant pump.
- **Ongoing monitoring + digest** — the list stays live. Weekly email: what changed status, what's newly at risk, what's about to close.
- **Successor mapping** — where the OEM published a migration path, show it; where it didn't, show which distributors still hold authorized stock.
- **Exportable buy-list** — a purchasing-ready sheet the maintenance manager forwards to procurement, with justification text attached.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist.

The entire business hinges on one hard step: **a plant's parts list is not machine-readable and never will be**. Real lines look like `AB 1336 PLUS II 5HP 480V DRIVE`, `pwrflx 40 - spare for line 3`, `SIEM 6ES7 315-2AG10-0AB0 (?)`. Free-text descriptions, inconsistent abbreviations, transposed digits, distributor SKUs mixed with OEM numbers, vendor names in the description field. Verdantis's finding that 51% of operations executives cite data quality problems is exactly this.

The enterprise answer to that has always been humans: a data-cleansing engagement, priced per SKU, taking months. That price is what makes SPARETECH and Verdantis enterprise-only, and it's the reason mid-market plants have no obsolescence monitoring at all — not because they don't want it, but because they can't clear the data prerequisite.

Long-context vision and text models collapse that. Reading 5,000 messy lines with surrounding context — sibling rows, the asset it's attached to, the vendor column — and resolving each to a canonical manufacturer part number is now a sub-dollar inference job at [$0.075/1M input tokens](https://www.swfte.com/cheapest/vision). Same for the reverse direction: a technician photographs a nameplate or a bin label and the model reads make/model/serial off it.

Second load-bearing use: **lifecycle-status extraction**. PCNs and PDNs are unstructured PDFs, published per-manufacturer in inconsistent formats, with the LTB date buried in prose or a table. Parsing thousands of those into structured (part, status, LTB date, successor) records is exactly a document-understanding job.

The alerting layer is dumb plumbing. The resolution layer is the product, and it's AI or it's a consulting firm.

## 7. Localization angle

`Global play, US+EU first — with a deliberate sequencing reason.`

This is not a localization play. The wedge is OEM lifecycle data, and that data is published in English by a concentrated set of vendors — Rockwell, Siemens, Schneider, ABB, Danfoss, Omron, Mitsubishi, SMC, Festo. The same Allen-Bradley PowerFlex is discontinued in Ohio and in Ontario on the same day.

Two real regional notes:

- **US and EU first** because the automation installed base is oldest there and the lifecycle publications are most complete. A US Midwest food plant running a 22-year-old line is the sharpest version of the customer.
- **India / SEA / LatAm are a strong phase-two**, and for an inverted reason: those plants disproportionately run *second-hand and grey-market imported machinery*, so their obsolescence exposure is worse and their access to OEM notification lists is nil. But they're also more price-sensitive and harder to reach, so they're a follow-on at a lower price point (₹8,000–15,000/mo), not the wedge.

Language matters only at the edges — German and Japanese OEM documentation needs handling, which the same models do fine.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by storeroom size, not seats. Seats are the wrong meter — the whole plant should look at this.
  - **Starter — $199/mo**: up to 1,500 monitored parts, one site, weekly digest.
  - **Plant — $399/mo**: up to 6,000 parts, criticality overlay, CMMS sync, buy-list export.
  - **Multi-site — $899/mo**: 3–5 sites, cross-site stock visibility, procurement seats.
  - **Onboarding resolution pass — $1,500 one-time**: the initial cleanup of the full parts list. This is the thing enterprises pay $40–80K for; charging a fraction of it both funds CAC and anchors the value.

- **ACV:** ~$5,200 blended ($4,800 subscription + amortized onboarding). Deliberately below the threshold where a plant needs capex approval — a maintenance manager can put $399/mo on a departmental card or a routine PO.

- **Rough math to $1M ARR:** 200 plants × $399/mo × 12 = $957K, plus onboarding fees ≈ $1.1M. Two hundred plants is a reachable number for a founder-led sales motion in a vertical with dense trade communities.

- **Rough math to $5M ARR:** ~800 subscribed sites blended across tiers, with roughly a third on multi-site. What has to be true: (a) resolution accuracy is high enough that onboarding is genuinely self-serve by month 12, otherwise ops cost eats the margin; (b) at least one CMMS partnership (Limble, UpKeep, eMaint) delivers a distribution channel rather than pure outbound; (c) net revenue retention above 100% via site expansion — land one plant, expand to the sister plants, which is the natural motion in multi-plant groups.

- **Expansion path:** Sites → parts monitored → procurement seats → a sourcing take-rate. The obvious phase-three: once you know exactly which plants need which obsolete part, you're sitting on the best demand signal in the secondary industrial parts market. Brokering that (a referral fee to authorized distributors and vetted refurbishers) is a real second revenue line — but it's a month-18 move, not a launch feature, and I'd resist it until the subscription business stands on its own.

## 9. Go-to-market wedge — first 100 customers

- **The free obsolescence audit as the entire top of funnel.** "Send me your parts list, get a free exposure report in 48 hours." This is a genuinely strong offer because the deliverable is alarming: a ranked list of parts already obsolete or with LTB windows closing, on their actual equipment. The report *is* the demo, and it converts because the customer didn't know. Target: 300 audits in the first six months, 20–25% conversion to paid.

- **Scrape the installed base and target it precisely.** Rockwell and Siemens publish which product families are discontinued or in phase-out. System integrators publish case studies naming the plants they've migrated. Job postings are the best signal of all — a plant advertising for a maintenance tech "experienced with SLC 500" is publicly announcing it runs discontinued hardware. Build a list of 2,000 such plants from Indeed/LinkedIn postings and integrator sites, send the free-audit offer to the maintenance manager by name. Expect 4–6% response on a message this specific.

- **Go where they actually are.** Reliabilityweb, Plant Services, Maintenance.org forums, r/PLC, r/industrialmaintenance, PlantPAx and Practical Machinist communities. These are dense, un-astroturfed, and receptive to a genuinely useful free tool. Publish the aggregate data — "the 40 most-stocked parts that went obsolete this quarter" — which is content only I can write once I have a hundred customers' lists. That's a compounding wedge, not generic content marketing.

- **System integrators as a referral channel.** Integrators doing PLC migration projects have a commercial interest in finding obsolescence exposure — it creates their pipeline. Revenue-share the audit: they bring the plant, LastBuy produces the report, the integrator sells the migration. Twenty active integrator relationships is a plausible route to 100+ plants, and the target list is small enough to work by hand.

- **CMMS marketplace listings.** Limble, UpKeep, eMaint and Fiix all have integration directories with weak parts-obsolescence stories. Being the obsolescence app in those directories is cheap distribution to exactly the right buyer.

## 10. Build complexity — justification

**Medium.** Roughly 12–16 weeks to a credible v1 for two people.

Off-the-shelf: the resolution and document-extraction layers (vision/long-context models), the web app, the alerting, the CSV ingest. Nothing here needs custom model training.

The real work is the **lifecycle data layer** — acquiring and maintaining structured status for a few hundred thousand parts across the top 20–30 industrial OEMs. Each manufacturer publishes differently (Rockwell's lifecycle tool, Siemens phase-out notices, distributor availability feeds), so this is a set of scrapers and parsers that need ongoing maintenance. That's a grind, not a research problem, and it's exactly the grind that becomes the moat.

The scope discipline that keeps this Medium: **launch with the top 20 OEMs by industrial installed base, not all of them.** Coverage of Rockwell, Siemens, Schneider, ABB, Danfoss, Omron, Mitsubishi, SMC, Festo, Phoenix Contact and a dozen more covers the large majority of a typical plant's automation exposure. Chasing the long tail before proving demand is how this becomes a 9-month build.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Aggregating published lifecycle notices. Respect ToS and rate limits on OEM sources; prefer official feeds and distributor APIs where available. No scraping of gated content. |
| Ethical — no harm / dark patterns | ✅ | Product tells plants to buy fewer, better-chosen parts earlier. If anything it reduces waste and emergency spend. No lock-in tricks — data is exportable. |
| Market exists (evidence above) | ✅ | Enterprise incumbents (SPARETECH, Z2Data, SiliconExpert) prove willingness to pay; the survey data proves the mid-market is unserved. |
| 1–5 person team can build this | ✅ | Two people, 12–16 weeks. Data-layer maintenance is the ongoing cost. |
| Launchable with <$50K / ₹40L | ✅ | Inference costs are trivial at this scale. Main spend is 3–4 months of two people's time plus modest data-source subscriptions. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Severe and expensive when it hits — emergency migration, 3–5× grey-market pricing, multi-day outage. Held back from higher because it's *episodic*, not daily. The plant feels it hard twice a year, not every morning, which makes it easier to defer than a payroll or compliance deadline. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: multiple funded enterprise incumbents charging real money, two independent surveys (n=300, n=1,900) documenting the gap, hard EOL volume data. Docked for the thing I couldn't get — I found no dense corpus of verbatim mid-market complaints, so willingness-to-pay *at $399* is inferred from adjacent spend, not observed. |
| Build feasibility | 15 | 11/15 | Core app is straightforward. The lifecycle data layer across 20+ OEMs with inconsistent publication formats is real, ongoing work and the main schedule risk. |
| Distribution clarity | 15 | 11/15 | The free-audit offer is a genuinely strong wedge with a self-evident deliverable, and the job-posting targeting trick is precise. Docked because maintenance managers are not a fast-moving digital audience and integrator partnerships take time to seed. |
| Revenue mechanics | 15 | 12/15 | $399/mo is well-benchmarked against CMMS spend ($20–70/user/mo × 5–10 users) and far below enterprise MRO tooling. Onboarding fee funds CAC. 200 customers to $1M is achievable. Churn risk is the open question — see assumptions. |
| Time to first revenue | 10 | 7/10 | Can pre-sell off manual audits before the product is finished — do the resolution by hand for the first ten plants. But procurement at a plant moves in weeks, not days, so realistically 8–12 weeks to first paid. |
| Defensibility | 10 | 5/10 | Honest assessment: the lifecycle database is a real grind and a 12-month head start, but it's assembled from public sources and a funded competitor could replicate it. Accumulating customer parts lists creates a compounding resolution advantage over time. Not a moat at month 3; a modest one at month 18. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

The data layer and resolution accuracy are engineering problems, and the founder needs enough industrial-automation literacy to know that a PowerFlex 40 and a PowerFlex 400 are not interchangeable. A pure SaaS generalist will produce a plausible product that maintenance managers don't trust. A domain advisor — a reliability engineer or an integrator — is close to mandatory.

### Key assumptions to validate

1. **Assumption:** Part resolution from messy real-world storeroom exports hits ≥85% auto-match at usable confidence. **How to test:** Get 10 real parts lists from maintenance managers (offer the free audit), run resolution, hand-score accuracy against ground truth. Below 70% and the onboarding cost model collapses.
2. **Assumption:** A maintenance manager will pay $399/mo without a capex process. **How to test:** Twenty pricing conversations off the back of delivered audits. Ask specifically who signs and what threshold triggers approval — not "would you pay."
3. **Assumption:** Lifecycle status for the top 20 OEMs is obtainable at sufficient coverage and freshness. **How to test:** Two-week spike building parsers for Rockwell, Siemens, Schneider, ABB. Measure coverage against a real plant's list. If a typical list is only 40% covered, the product isn't credible.
4. **Assumption:** The free audit converts at ≥20%. **How to test:** Run 30 audits manually before writing the product. Track conversion to a paid pilot.
5. **Assumption:** Churn stays low after the initial exposure is cleared. **This is the biggest one** — see risks.

### Risk flags

1. **"One-and-done" churn risk (the central risk).** The first audit surfaces years of accumulated exposure — a big, satisfying hit. Once a plant has bought its way out of that backlog, does it keep paying $399/mo for a slower drip of new EOL notices? If the answer is no, this is a $1,500 one-time product with a subscription costume on it. Mitigation is making it a live monitoring system that plants keep parts data *in* — CMMS sync, criticality mapping, procurement workflow — so it becomes the system of record for storeroom risk rather than a one-time report. Validate this before scaling spend.
2. **Data-source dependency.** OEM lifecycle publications can change format, move behind logins, or be rate-limited. The data layer needs continuous maintenance, and a major OEM closing off access would hurt coverage.
3. **Incumbent downmarket move.** SPARETECH or Z2Data could launch a self-serve mid-market tier. SPARETECH has raised money and has the data. My bet is that enterprise sales motions rarely move down cleanly — but it's a real threat, and the honest answer is that the head start is measured in months, not years.
4. **Sales-cycle drag.** Maintenance managers are busy, hard to reach, and not digitally native. The free audit mitigates this by leading with a finished artifact rather than a meeting request, but expect slower cycles than a typical SMB SaaS.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with an industrial-automation or reliability-engineering
                        advisor. Comfortable with data-plumbing grind and unglamorous outbound.
Time to revenue:        8–12 weeks (pre-sellable via manual audits before v1 ships)
Capital to launch:      $15–25K (₹12–20L) — mostly 3–4 months of two people's time
Top 3 assumptions to validate first:
  1. Resolution accuracy ≥85% auto-match on 10 real, messy storeroom exports — hand-score
     against ground truth before writing any product code
  2. Retention after the initial backlog is cleared — interview 15 maintenance managers on
     whether ongoing monitoring is a standing budget line or a one-time cleanup
  3. Lifecycle-data coverage for the top 20 OEMs — two-week parser spike, measured as
     % of a real plant's parts list resolvable to a live status
Kill criteria:
  - Abandon if resolution auto-match is below 70% on real exports after a serious attempt —
    the onboarding economics don't survive it
  - Abandon if fewer than 15% of 30 delivered free audits convert to a paid pilot
  - Abandon if top-20-OEM lifecycle coverage can't exceed 60% of a typical plant's list
  - Abandon if pilot customers churn above 5%/mo once their initial exposure is cleared —
    that means it's a report, not a subscription
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 10 maintenance managers from r/PLC, r/industrialmaintenance, Reliabilityweb and LinkedIn with a straight offer: "Send me your spare parts list, I'll send back a free obsolescence exposure report in 48 hours." No product, no deck. Collect the actual files — messy exports are the point.
- **Day 3–4:** Build the crude resolution pipeline and parsers for four OEMs (Rockwell, Siemens, Schneider, ABB). Run all 10 lists. **Hand-score resolution accuracy against ground truth** and measure what fraction of each list resolves to a live lifecycle status. Produce the 10 reports for real.
- **Day 5:** Deliver the reports and run a pricing conversation on each. Two questions that matter: "what would you have done differently if you'd had this nine months ago?" and "is $399/mo a card swipe or a capex request?"
- **Decide go / no-go on:** ≥85% auto-match resolution accuracy, ≥60% lifecycle coverage of a typical list, ≥5 of 10 managers naming a specific part they didn't know was obsolete, and ≥3 of 10 verbally committing to a paid pilot at $399/mo.

The falsifiable core: if I run 10 real plants' parts lists and **don't** find parts they didn't know were dead, the entire premise — that the information asymmetry is real and costly — is wrong, and I stop.
