---
title: "ReviveWatt — adoption workbench for solar service shops"
slug: orphaned-solar-service-intake
date: 2026-07-17
category: CleanTech / US — Independent Solar Service & Repair Companies (orphaned-system intake, remote triage, manufacturer warranty claims)
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Turns an orphaned-solar inquiry into a diagnosed, warranty-checked repair quote before the truck rolls."
tags:
  vertical: CleanTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Solo-builder, Field-service, Warranty-claims]
axes:
  problem: 16
  demand: 11
  build: 12
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ReviveWatt

## 1. One-liner

Turns an orphaned-solar inquiry into a diagnosed, warranty-checked repair quote before the truck rolls.

## 2. Trend signal — why now?

The US residential solar industry is collapsing into its service era, and nobody built the tooling for it.

- **Over 100 solar companies have gone bankrupt or closed** in the last few years — "a number unseen before in almost 20 years in the solar sector," per Solar Insure's running tracker. SunPower (Aug 2024, ~600K customers), Titan Solar, ADT Solar, Pink Energy, PosiGen, Sunnova — and the big one: **Freedom Forever, one of the two largest US residential installers, filed Chapter 11 in April 2026** with ~190,000 systems on roofs across 35 states.
- **More than 1.3 million homeowners** now have solar on their roof and no installer behind it. Their workmanship warranties evaporated in bankruptcy; their equipment warranties (10–25 years, from Enphase, SolarEdge, Tesla, Maxeon, REC) are still valid — but a homeowner can't file a manufacturer RMA alone. They need a certified installer, and most installers "won't touch a system they didn't install."
- **The residential ITC (Section 25D) died December 31, 2025.** New-install demand is contracting hard, and industry outlets (GreenLancer, SiteCapture) are openly telling installers the pivot is O&M and repair on the legacy base. Brazil's trade press says the same thing about its own contracting market: post-sales is now "the most strategic area of the integrator's business." The install boom built ~5M US rooftops; the service era has to maintain them.
- **Money is moving into the service layer**: Omnidian raised an **$87M Series C (April 2025)** to service residential fleets, bought Sunnova's servicing platform out of bankruptcy for $7M, and was contracted by Renewbrook Energy (Feb 2026) to service PosiGen's orphaned portfolio. Solar Insure is selling monitoring-plus-warranty programs into the same gap.

Omnidian serves the asset owners — the financiers who own tens of thousands of systems. The local independent service shop that a cash-purchase homeowner actually calls has nothing.

Provenance:
  - Signal 1: 100+ solar company closures; Freedom Forever Ch. 11 April 2026 (~190K homes); 1.3M+ orphaned homeowners — https://www.solarinsure.com/the-complete-list-of-solar-bankruptcies-and-business-closures and https://www.energysage.com/solar/solar-company-warranty-bankruptcy/ — observed 2026-07-17
  - Signal 2: Omnidian $87M Series C for post-installation servicing; $7M Sunnova servicing-platform stalking-horse; Renewbrook/PosiGen orphan servicing contract — https://www.businesswire.com/news/home/20250423479966/en/ and https://www.solarpowerworldonline.com/2026/02/renewbrook-energy-acquires-posigens-orphaned-residential-solar-projects/ — observed 2026-07-17
  - Signal 3: Residential ITC (25D) expired 2025-12-31; industry guidance telling installers to pivot to O&M/repair on legacy systems — https://www.greenlancer.com/post/solar-tax-credit-ending and https://sitecapture.com/solar-tax-credit-2025/ — observed 2026-07-17
  - Signal 4 (feasibility): Mature fleet APIs from Enphase, SolarEdge, SMA, Fronius, Tesla let third parties pull per-system production and fault data; remote triage before truck roll is established practice in commercial O&M — https://www.surgepv.com/best-solar-software/monitoring and https://www.scoop.solar/blog/renewable-energy-operations-and-maintenance/ — observed 2026-07-17
  Category: Platform shift (install era → service era) + Workflow automation

## 3. The opportunity

Every orphaned-system job starts with archaeology. A homeowner calls: "my app stopped working two years ago and my electric bill doubled." The shop has no design docs, no permit records, no monitoring access, no idea what's on the roof. Someone spends an hour on the phone extracting fragments, then rolls a truck ($200–300 fully loaded) to discover what a monitoring API could have said for free: inverter fault code, one dead string, firmware from 2021. Then the office manager fights a manufacturer RMA portal — each brand different, each demanding serial numbers, proof of fault, and commissioning records that don't exist because the installer that had them is a Delaware bankruptcy docket now.

The incumbents don't touch this workflow:

- **Omnidian** ($87M raised) serves fleet owners and financiers — it *subcontracts* field work to exactly the local shops I'm targeting. It is a demand generator for my customer, not a competitor for this tool.
- **SurgePV, FieldEx, 60Hertz, Scoop** are installer O&M platforms. They assume you installed the fleet and already have the docs and the monitoring logins.
- **Solar Insure** sells a warranty product with monitoring attached — a program, not a workbench.
- Shops like ElectriCare (SoCal) and Solar Medix (NJ) are doing orphan intake **manually** and advertising it as a specialty. Their process pages read like a product spec nobody has built: inspect, reconnect monitoring, file the manufacturer claim, replace under warranty, bill labor.

The gap: purpose-built software for **adopting systems you didn't install** — intake, monitoring reconnection, remote diagnosis, warranty determination, RMA drafting — sold to the thousand-plus independent shops picking up the orphan wave.

## 4. Target market

- **Primary customer:** Owner or service manager at an independent solar service/repair company or an installer pivoting to service — 3–30 employees, US, doing 20–200 service calls a month. Second segment: the long tail of installers who survived the ITC cliff and are standing up a service department because installs fell off a cliff.
- **Why they buy:** "Half my inbound is orphans now. Every one costs me an hour of intake and half the time the first truck roll is just diagnosis I could have done from my desk. And Enphase's RMA portal is where my office manager's week goes to die."
- **Rough TAM reasoning:** SEIA counts ~10,000 solar companies in the US; even after the shakeout, a conservative 2,000–3,000 do residential service work. At $200–500/mo that's a $5–18M/yr attainable pool — right-sized for a bootstrapper, invisible to VCs. The orphan base itself (1.3M+ systems, growing with each bankruptcy) guarantees years of inbound for these shops.
- **Why now for them:** Freedom Forever alone just dumped 190K systems into the orphan pool in April. Install revenue is shrinking (25D gone), service is the growth line, and every shop is improvising the same workflow in spreadsheets and manufacturer portals.

## 5. Product sketch (MVP)

- **Orphan intake link** — shop sends homeowner a link; homeowner (or the shop, on the phone) enters address, uploads photos of the inverter/panel labels and their electric bill; system auto-identifies equipment make/model/serial from label photos.
- **Monitoring takeover assistant** — walks through re-claiming the system on Enphase Enlighten / SolarEdge / Tesla / SMA as the new maintainer; pulls production history and live fault codes via API once connected.
- **Remote triage verdict** — combines fault codes, production-vs-weather history, and photos into a plain-English diagnosis with confidence level: "String 2 down since March; likely failed optimizer; covered under SolarEdge 25-yr warranty" — before any truck rolls.
- **Warranty determiner** — equipment DB maps make/model/install-date to what's still under manufacturer warranty vs. dead workmanship warranty; tells shop and homeowner what's free equipment + billable labor.
- **RMA drafter** — pre-fills each manufacturer's claim with serials, fault evidence, and photos in the format that brand's portal wants; tracks claim status and replacement shipment.
- **Quote builder** — one click from diagnosis to homeowner-facing quote: warranty-covered parts at $0, labor and non-covered items priced from the shop's rate card.
- **Job packet export** — pushes the diagnosed, documented job into whatever FSM the shop already runs (ServiceTitan, Jobber, Housecall Pro) — this is intake-and-triage, not another scheduler.

## 6. AI angle — what's load-bearing

Three places AI does the actual work: (1) **vision on label and bill photos** — extracting make/model/serial from a sun-bleached inverter sticker shot at an angle is exactly what multimodal models got good at; (2) **triage synthesis** — fusing fault codes, production curves, weather normalization, and homeowner description into a ranked differential diagnosis with a recommendation (roll truck / file RMA / remote fix); (3) **claim drafting** — converting the diagnosis into each manufacturer's idiosyncratic RMA narrative. Remove the AI and you're left with a forms tool that still makes the shop do the archaeology — the product wouldn't exist.

## 7. Localization angle (if any)

N/A — US-first play. The bankruptcy wave, the ITC cliff, and the manufacturer-RMA structure are US-specific right now. Brazil is the obvious second market (29% install contraction, integrator trade press screaming "post-sales is the business now," Reclame Aqui full of abandoned-system complaints) — but it's a later expansion, not the wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $199/mo (solo shop, 25 intakes/mo) / $399/mo (standard) / $799/mo (multi-crew, API/FSM integrations). Anchor: one avoided truck roll ($200–300) per month pays the subscription.
- **ACV:** ~$4,000 blended.
- **Rough math to $1M ARR:** 250 shops × ~$333/mo avg × 12 = $1M. 250 shops out of 2,000–3,000 doing residential service = ~10% penetration of a market with no direct competitor.
- **Rough math to $5M ARR:** 800 shops at higher blended ACV (multi-crew tiers) + per-claim success fee on RMA recoveries (equipment value flows through the claim; a $2–5 per-claim processing fee is invisible) + Brazil/Australia expansion.
- **Expansion path:** intakes/mo volume tiers → RMA claim volume fees → homeowner-paid "system health report" the shop white-labels ($49 retail, rev-share) → parts-availability data licensing back to distributors.

## 9. Go-to-market wedge — first 100 customers

1. **Google-scrape the shops already advertising the pain.** Search every metro for "solar repair," "orphaned solar," "solar company out of business help" — the shops with those landing pages (ElectriCare, Solar Medix, OC Solar, Sunny Energy RX, NC Solar Now, Solar Source and dozens more are already indexed) self-identify as target customers doing this workflow manually. Build the list of ~500, send each a Loom: their own intake form vs. an orphan intake done in 4 minutes with a triage verdict. Expect 8–10% demo rate — this is their #1 growth line.
2. **Omnidian's and Solar Insure's field networks.** Both maintain networks of local service partners — those partner lists are the buyer directory. A shop doing subcontracted Omnidian tickets plus direct orphan work is the highest-intent customer alive.
3. **Freedom Forever's 35-state fallout, state by state.** Every metro paper and local subreddit has "Freedom Forever went bankrupt, who fixes my panels?" threads. Answer them as the vendor arming local shops; run $500 of geo-targeted ads pointing homeowners to a "find a certified orphan-service shop" directory — free for homeowners, shops must be ReviveWatt subscribers to be listed. The directory is lead-gen bait for shop signups.
4. **r/solar pro community + NABCEP-certified installer forums.** The pros complain about manufacturer RMA portals constantly; a "we draft the Enphase claim for you" demo lands there without ad spend.
5. **One anchor case study**: give 3 shops free pilot for 60 days, publish "Shop X cut first-truck-rolls 40% on orphan jobs" with real numbers before charging anyone else.

## 10. Build complexity — justification

Medium. Off-the-shelf: multimodal LLM APIs for label/bill extraction and claim drafting; Enphase, SolarEdge, SMA and Fronius all publish monitoring/fleet APIs. Custom work: 4–5 monitoring-API integrations (each with its own maintainer-takeover flow), an equipment-warranty database (scrapeable from manufacturer spec sheets — a grind, not a mystery), and per-manufacturer RMA templates. No hardware, no marketplace, no regulatory approval. Two technical founders (one with solar domain exposure or a hired NABCEP advisor) ship v1 in 3–4 months with two inverter brands (Enphase + SolarEdge cover ~70% of US residential) and expand.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Software for licensed contractors; the shop does the electrical work, not us |
| Ethical — no harm / dark patterns | ✅ | Gets abandoned clean-energy assets producing again; homeowner wins |
| Market exists (evidence above) | ✅ | 1.3M+ orphans, 100+ closures, $87M funded adjacent player, shops advertising the service |
| 1–5 person team can build this | ✅ | API integrations + LLM workflows; 2 people, 3–4 months |
| Launchable with <$50K / ₹40L | ✅ | Standard SaaS stack; biggest cost is founder time on integrations |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Felt on every orphan inquiry — hours of intake, wasted truck rolls, RMA-portal purgatory. Real and frequent, but it's an efficiency drain, not a compliance clock; shops survive it with manual grind today. |
| Demand evidence | 15 | 11/15 | Macro signals are overwhelming (bankruptcy wave, Omnidian's raise, shops marketing orphan services). But zero direct evidence shops are searching for *software* for this — the demand is inferred from their manual behavior, not from stated tool-buying intent. |
| Build feasibility | 15 | 12/15 | Published APIs + LLM extraction. Real integration grind (each brand's takeover flow differs) and warranty DB is tedious, but nothing research-grade. 3–4 months honest. |
| Distribution clarity | 15 | 12/15 | Nameable, scrapeable list: shops with orphan-solar landing pages, Omnidian/Solar Insure partner networks, per-state bankruptcy fallout threads. Conversion math untested but channels concrete. |
| Revenue mechanics | 15 | 11/15 | One avoided truck roll/mo justifies price — clean anchor. $1M ARR needs 250 of ~2,500 shops; plausible but the shop count doing sufficient orphan volume is an assumption. |
| Time to first revenue | 10 | 7/10 | Pilot shops onboardable in weeks; paid conversion realistically 6–8 weeks post-launch after pilot proof. |
| Defensibility | 10 | 6/10 | Compounding assets: cross-brand fault-pattern corpus, RMA playbooks per manufacturer, warranty DB, homeowner-directory network. All copyable individually; together they're a 12-month grind a fast-follower must repeat. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — you need API/LLM chops plus someone who has actually stood on a roof or run a service desk; the RMA templates and triage heuristics come from domain scar tissue.

### Key assumptions to validate (3–5)

1. **Assumption:** Independent shops handle enough orphan volume (≥10 inquiries/mo) to pay $199–399/mo. **How to test:** Call 25 shops with orphan-solar landing pages; ask monthly orphan inquiry count and current intake time. Threshold: ≥40% report 10+/mo.
2. **Assumption:** Manufacturer monitoring APIs permit maintainer takeover without homeowner-hostile friction. **How to test:** Run the Enphase and SolarEdge system-transfer flow end-to-end on 3 real orphaned systems during pilot week.
3. **Assumption:** Remote triage from API data + photos is right often enough (≥70%) to actually kill first truck rolls. **How to test:** Shadow 20 real orphan jobs at 2 pilot shops; compare desk diagnosis vs. field finding.
4. **Assumption:** Shops will pay for intake/triage as a layer on top of their existing FSM rather than demanding all-in-one. **How to test:** In the 25 calls, ask what FSM they run and whether a bolt-on is acceptable — listen for "another login" objections.

### Risk flags

1. **Platform dependency:** Product leans on Enphase/SolarEdge APIs and their transfer policies. A manufacturer locking third-party maintainer access (to push its own certified-service program) breaks a limb of the product. Mitigation: photo-and-bill triage path works with zero API access.
2. **Incumbent adjacency:** Omnidian or Solar Insure could ship a shop-facing intake tool. Their incentives point at fleet owners and warranty programs, not shop SaaS — but the Sunnova platform purchase shows appetite for the service layer broadly.
3. **Market timing (decay):** The orphan wave is a surge, not a permanent state. In 5–7 years the pool shrinks as systems get re-homed. Fine for a $1–5M ARR bootstrap horizon; wrong for a venture story. Expansion path (general solar service intake, Brazil, storage) is the hedge.
4. **Wallet risk:** Solar shops are themselves financially stressed in a contracting market; churn from customer bankruptcy is a real line item. Price monthly, no annual lock, keep CAC recoverable in <4 months.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + solar-service domain advisor (or NABCEP tech co-founder)
Time to revenue:        10–14 weeks (2 pilot shops in weeks 1–6, paid from week 10)
Capital to launch:      $15–25K (API dev, LLM costs, 500-shop outbound sprint)
Top 3 assumptions to validate first:
  1. Orphan inquiry volume per shop ≥10/mo — 25 phone interviews with orphan-page shops
  2. Monitoring takeover flows are tractable — run Enphase + SolarEdge transfers on 3 real systems
  3. Desk triage ≥70% accurate vs. field finding — shadow 20 jobs at pilot shops
Kill criteria:
  - Abandon if <30% of 25 interviewed shops report 10+ orphan inquiries/month
  - Abandon if manufacturer transfer flows require homeowner actions that fail >50% of the time
  - Abandon if desk triage matches field diagnosis <50% of the time in the 20-job shadow
```

## 15. Next step — 1-week validation sprint

- Day 1–2: Scrape/compile 200 US shops with orphan-solar or solar-repair landing pages. Call 25. Script: "How many calls a month from homeowners whose installer disappeared? Walk me through what happens next." Record inquiry volume, intake time, truck-roll rate, RMA pain.
- Day 3–4: Get access to 2 real orphaned systems (r/solar, local Freedom Forever fallout threads — homeowners will volunteer). Run the Enphase/SolarEdge maintainer-transfer flow manually. Draft one real Enphase RMA from photos + API data; time it.
- Day 5: Go/no-go on numbers: ≥40% of shops report 10+ orphan inquiries/mo AND both transfer flows completed AND the manual RMA draft took <30 min with the assisted process vs. shops' reported 2+ hours. Two of three misses = pass.
