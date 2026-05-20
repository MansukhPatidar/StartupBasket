---
title: "PortAlibi — uptime defender for small EV charging operators"
slug: ev-charger-uptime-exclusion-defense
date: 2026-05-20
category: CleanTech / US Small EV Site Hosts (4–20 ports)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns OCPP logs and utility-outage proof into the exclusion packet that defends a small EV operator's 97% uptime score."
tags:
  vertical: CleanTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, OCPP-native, NEVI, EV-ChART]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 7
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PortAlibi — uptime defender for small EV charging operators

## 1. One-liner

PortAlibi turns OCPP logs and utility-outage proof into the exclusion packet that defends a small EV operator's 97% uptime score.

## 2. Trend signal — why now?

Three things changed in the last 12 months that make this idea unavoidable, and none of them are about the chargers themselves — they're about *paperwork around the chargers*.

**The federal 97% rule has teeth now.** 23 CFR 680 requires every charging port built with NEVI dollars to maintain >97% annual uptime *per port*. Exclusions exist — utility outages, vandalism, vehicle fault, scheduled maintenance — but the operator has to *prove* each excluded minute or it counts against them. That's a documentation problem, not a hardware problem.

**California pulled the same rule onto every publicly-funded DCFC.** Any DC fast charger placed in service after 1 Jan 2024 that took state, ratepayer or federal dollars must hit 97% uptime for six years and file semi-annual reports via EV-ChART. The very first report covers Jul–Dec 2026 and is due **31 Jan 2027** — about 8 months from today. That's a hard, dated trigger event.

**The "uptime gap" is now a regulator-and-press story.** ChargerHelp's published research shows networks reporting 98.7–99.9% uptime while first-time charge success sits at 71%. UK regulators audited 38 networks and only 16 met their 99% rule. Half of US operators are about to walk into the same audit with the same gap. The ones with the resources to hire a compliance lead (EVgo, Electrify America, ChargePoint) will be fine. The 4-stall hotel chain, the 20-port dealer group, the multifamily owner with state EVSE money — they don't have that lead.

Add a fourth shoe waiting to drop: the 30C tax credit (commercial EV charger basis credit) is subject to a 3-year recapture if the property stops qualifying. "Stops qualifying" is increasingly being read by tax advisors to include sustained non-use, which uptime data feeds.

Provenance:
  - Signal 1: NEVI 97% uptime requirement with operator-proof exclusion regime — https://afdc.energy.gov/laws/13085 — May 2026
  - Signal 2: CA EV-ChART semi-annual uptime reporting; first deadline 31 Jan 2027 for H2 2026 — https://www.energy.ca.gov/programs-and-topics/programs/clean-transportation-program/ev-charger-data-and-reliability-1 — May 2026
  - Signal 3: US/UK reliability gap and half of UK networks failing 99% rule — https://www.fastcharge.email/p/half-of-networks-fail-99-reliability — May 2026
  Category: Regulatory arbitrage

## 3. The opportunity

ChargerHelp built a real business by selling "Reliability-as-a-Service" to networks with 10–10,000 chargers — sales cycle is a demo with their VP of Ops. EMPWR is fine product, wrong customer. The customer the enterprise CPMS world ignores is the 4–20 port site host: the Hilton franchisee with four DCFCs in the lot, the Audi dealer with a row of L2s the carmaker subsidised, the multifamily REIT with a CEC rebate-funded array. They run on whatever CPMS came with the hardware (Blink, ChargePoint, EVgo Optimum, ABB, Tritium). None of those CPMSs are organised around *exclusion-claim assembly* — they tell you when a charger went down, not how to prove it wasn't your fault.

The wedge is "Voosh for EV uptime exclusions." Voosh built a $1M+/yr business proving DoorDash/Uber Eats error charges weren't the restaurant's fault. Same shape: messy data, defensible rebuttal, regulator/funder you can't talk back to, recurring deadline, asymmetric stake (small restaurant, restaurant-killing chargeback). Here the stake is funding clawback or 30C recapture, not chargebacks, but the operator's problem is identical — assemble the audit packet before the deadline.

The 10× UX collapse: today the site host either eats the uptime hit, or pays a maintenance-contract operator to argue the exclusions for them at $400–$600/port/yr bundled into O&M. PortAlibi reads the OCPP stream, cross-references against the local utility's outage feed and the on-site camera, drafts the exclusion narrative, and files it into EV-ChART (or attaches it to the NEVI quarterly the funding agency wants). 8 minutes of operator time per site per month.

## 4. Target market

- **Primary customer:** Operations manager at a US property/business that owns 4–20 publicly-accessible EV ports built post-2024 with any flavour of public funding (NEVI sub-award, state EVSE grant, utility make-ready, 30C). Job titles: Director of Sustainability, Facilities Manager, GM (hotels), Fixed-Ops Director (dealers), Asset Manager (multifamily). Company size: $20M–$2B revenue parent, but the EV charging is a sub-line nobody resourced to staff.
- **Why they buy:** They signed a grant agreement with uptime language they didn't read closely. The first reporting deadline is coming. Their CPMS gives them a CSV they don't know what to do with. They Google "NEVI exclusion packet template" and find nothing.
- **Rough TAM reasoning:** ~55,000 public DC fast charging ports in the US as of Q1 2026 (DOE AFDC); state-funded L2 public ports are ~140,000. Strip out the big networks (~60% of DCFCs) and you have ~22,000 DCFC + ~80,000 L2 ports in third-party/site-host hands. At 4–20 ports per site, that's ~7,000–10,000 small operator sites. CA alone has ~5,500 publicly funded post-2024 DCFCs whose first EV-ChART report is due Jan 2027.
- **Why now for them:** Q3 2026 is when their state DOT or the Joint Office sends the first "your data is missing" email. Q4 they realise the CPMS doesn't generate the right format. Q1 2027 the first reports are filed publicly and laggards become a Canary Media story.

## 5. Product sketch (MVP)

- **Connect once.** OCPP 1.6/2.0.1 webhook ingest, plus read-only API hookups to the four CPMS that cover 70% of small-operator chargers (ChargePoint commercial, Blink, EVgo Optimum, ABB myEV).
- **Auto-tag every downtime event.** Each "Unavailable / Faulted / SuspendedEV / SuspendedEVSE" stretch gets a candidate exclusion category: utility outage, comms loss, vehicle fault, scheduled maintenance, vandalism, real operator fault.
- **Triangulate the exclusion.** Cross-reference utility outage feeds (EAGLE-I, PowerOutage.us), weather (NOAA), site camera/RTSP snapshots (if connected), and prior dispatch tickets to confirm or reject each tag.
- **Generate the audit packet.** Per port, per quarter: an exclusion narrative, the raw OCPP timeline, the corroborating evidence, and the resulting "true" uptime number — formatted for NEVI quarterly, EV-ChART CSV, and the operator's state DOT custom template.
- **One-click file.** EV-ChART API push, NEVI partner-network upload, or a signed PDF the operator emails to their state account manager.
- **Funding-risk meter.** Live dashboard showing days remaining in the reporting window, projected uptime by port, gap to 97%, and what funding source/clause is on the hook if a specific port slips.
- **Audit-ready archive.** Seven-year retention of every exclusion packet and underlying evidence — because NEVI long-term stewardship is a 5–6 year obligation.

## 6. AI angle — what's load-bearing

The AI does three jobs that an operator can't and a generic CPMS won't.

First: **error-code disambiguation.** OCPP gives you an error string and an EVSE status. Whether a `PowerMeterFailure` was vehicle-side, charger-side, or grid-side is a *narrative* that the LLM constructs from the surrounding sequence (recent Heartbeat gaps, neighbouring port behaviour, utility feed, MeterValues drift). This is real reasoning work — not classification — and it's the same work a $150/hr EV consultant does today by hand.

Second: **exclusion narrative drafting.** Each excluded minute needs a one-paragraph justification a regulator's analyst can read. "Port A2 reported StatusFault from 03:14–04:48 local; PowerOutage.us shows Duke Energy substation 4471 lost service at 03:09 affecting this address through 04:51; logs show normal Heartbeat returning at 04:52" is a sentence an LLM writes in 1.5 seconds and a facilities manager writes in 35 minutes if they ever do it.

Third: **policy parsing.** NEVI guidance, EV-ChART specs, individual state DOT templates, and 30C IRS notices are evolving documents. A retrieval-augmented agent that watches the AFDC, FHWA, IRS, and 50 state DOT pages, and re-maps "the operator wants to exclude X minutes" to "the right clause in the right form" — that's a moat that compounds. Strip the AI out and you have a glorified ETL job.

## 7. Localization angle (if any)

US-only at launch. NEVI / EV-ChART are US-specific. The same shape transplants cleanly to UK (Public Charge Point Regulations 2023 mandates 99% reliability and Open Data sharing) and EU (AFIR Article 5 reliability metrics), but that's an expansion play in year 2 once the US playbook is grooved. China and India follow different rule paths and aren't worth the founder distraction in v1.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Per-port subscription with site minimums. $25/port/mo for L2; $79/port/mo for DCFC. Minimum 4-port site = $100/mo (L2) or $316/mo (DCFC). One-time onboarding $499/site to set up CPMS connectors and load historical evidence.
- **ACV:** Average site has 6 ports (2 DCFC + 4 L2). Average MRR per site ~$258; ACV ~$3,100. Onboarding adds another $499 first year.
- **Rough math to $1M ARR:** 325 sites × $258/mo × 12 = $1.0M. That's roughly 0.4% of the 7,000–10,000 addressable small-operator sites in the US. Eminently reachable in 18 months if the CA EV-ChART deadline funnels customers in Q4 2026 / Q1 2027.
- **Rough math to $5M ARR:** ~1,600 sites. Adds three things: (1) move upmarket to 20–100 port site clusters at $2K+ MRR each, (2) attach a $99/mo "30C recapture monitor" SKU, (3) sign 2–3 reseller deals with CPMS vendors that don't want to build it (Blink, ABB) — bundled $15–$20/port/mo white-label.
- **Expansion path:** Year 1 — uptime exclusions. Year 2 — pricing/revenue reporting modules (NEVI also requires session and revenue reporting), state DOT compliance templates as add-ons. Year 3 — utility incentive reconciliation (utilities pay performance incentives that nobody automates the claim for).

## 9. Go-to-market wedge — first 100 customers

Five concrete channels, prioritised:

- **The "you didn't know your deadline is in 90 days" cold sequence.** Joint Office of Energy and Transportation publishes a NEVI award list; California DOT publishes Block Grant recipients; NYSERDA publishes Charge Ready NY 2.0 awardees. Scrape ~1,800 funded entities, dedupe to the 600 that aren't a top-10 network, run a Clay+LinkedIn enrichment to find Facilities/Sustainability/Asset Mgmt contact, send a personalised Loom in October 2026 showing them their projected EV-ChART filing gap and an exclusion packet sample. 5–8% reply rate, 2% closed within 60 days = 12–18 customers from the cold list alone.
- **CPMS partnership land grab.** Blink, ABB, Tritium and ChargeLab all sell hardware/CPMS but don't sell compliance services to their long-tail customers. Sign a 70/30 revenue-share with one mid-tier CPMS (Blink most likely — public co under cost pressure) and let their CSMs upsell PortAlibi on every quarterly review. One CPMS deal = 200+ warm intros.
- **The state DOT advisor channel.** Each state DOT has 3–6 NEVI sub-awardee contracts they're worried will fail audit. Direct outreach to the 12 state EV infrastructure leads (CA, NY, TX, FL, OH, GA, NC, WA, MI, IL, NJ, MD) offering a free "audit gap report" for any of their flagged operators. State DOT vouches → site host signs.
- **NACS-conference + ACT-Expo booth, fall 2026.** Both events draw site hosts not networks. $8K booth + $4K of swag, prep a "filing simulator" demo. Past benchmarks at ACT Expo: 40–60 qualified leads per booth-day for tools targeting fleet/site operators. Two events = ~150 leads, 5% close = 8 customers and 50 pipeline.
- **The 30C tax-advisor whisper network.** Big-4 ESG advisory teams (KPMG/PwC/EY/Deloitte) and second-tier (Baker Tilly, Crowe, Grant Thornton) are answering panicked client questions about 30C recapture. They don't want to build the data layer. Become the reference vendor — referral fee, white-label PDF in their client deliverable. Five firms × 8 referrals each = 40 sites.

## 10. Build complexity — justification

Medium, not Low. The OCPP webhook ingest, utility-outage cross-reference, and LLM packet drafter are all off-the-shelf. EV-ChART API is documented; NEVI partner uploads are CSV. The wrinkles are real but bounded: handling 4 CPMS connector quirks (each vendor's "Faulted" semantics differ), parsing 50 state DOT custom templates over 12 months, and building the IRS 30C recapture monitor in year 2. Realistic timeline for a 2-person team (one EV-domain dev, one regulatory ops lead) is ~14 weeks to a working v1 across two CPMS, then 6 more weeks to add the EV-ChART filing flow before the Jan 2027 deadline crunch.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping operators meet existing federal/state reporting; no licence required |
| Ethical — no harm / dark patterns | ✅ | Filing accurate exclusion packets, not gaming the rule |
| Market exists (evidence above) | ✅ | 23 CFR 680, CA EV-ChART, half-of-UK-networks-failing |
| 1–5 person team can build this | ✅ | OCPP + LLM + 4 CPMS connectors fits 2 people in 14 weeks |
| Launchable with <$50K / ₹40L | ✅ | ~$30K for dev costs, infra, conference booth |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hard deadline (31 Jan 2027 first CA EV-ChART filing); funding clawback risk + 30C recapture is dollar-quantified pain. Not yet hair-on-fire because most operators don't realise the deadline — but they will, fast. |
| Demand evidence | 15 | 12/15 | Three regulator-cited signals + a $40M-revenue analogue (Voosh) in restaurants. Direct customer-voice signal weak — operators are quiet, not yelling on Reddit. Cost: -3. |
| Build feasibility | 15 | 11/15 | OCPP is open; LLM-drafted exclusion narrative is in a sweet spot for current models. CPMS connectors are the slog — 4 vendors, each with quirks, that's the real 14-week burn. |
| Distribution clarity | 15 | 11/15 | Named lists (NEVI awardees, EV-ChART filers), named conferences, named tax-advisor channel. CPMS partnership is the high-leverage shot. Some uncertainty on close rates because category is new. |
| Revenue mechanics | 15 | 11/15 | Per-port pricing benchmarks against ChargerHelp managed services (~$400–600/port/yr). PortAlibi at $25–$79/port/mo is competitive and ACV math closes at 325 sites. Risk: if a CPMS bundles a "free" exclusion module, pricing power compresses. |
| Time to first revenue | 10 | 8/10 | Deadline-driven sales = short cycle. Realistic first paid pilot in 6–8 weeks with a friendly state DOT + 3 of their flagged operators. |
| Defensibility | 10 | 7/10 | Soft moats: 50-state template library, CPMS partnership lock-in, accumulated regulatory-policy graph. Hard moat: 7-year evidence archive customers can't migrate. Vulnerable to a well-funded entrant for ~12 months. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can read OCPP messages without flinching, and someone who can read 23 CFR 680 without flinching. Either one founder with both halves (rare) or a tight technical/regulatory pair. Sales-light — the deadline does most of the closing work.

### Key assumptions to validate (3–5)

1. **Assumption:** Small site hosts (4–20 ports, post-2024 build, public funding) believe their existing CPMS does NOT generate a defensible exclusion packet. **How to test:** 30 calls in 3 weeks to NEVI sub-awardees and EV-ChART filers; ask "show me what you'd file Jan 31" — if 80% can't, validated.
2. **Assumption:** Willingness to pay $258/mo per site to avoid funding clawback risk. **How to test:** Letter-of-intent close on 6 pilot sites at full price by end of validation sprint. If fewer than 3 sign at full price, downgrade pricing or kill.
3. **Assumption:** At least one mid-tier CPMS (Blink, ABB, Tritium, ChargeLab) signs a reseller LOI within 6 months. **How to test:** Three exec intro calls with named partnership leads; convert one to a term-sheet conversation by week 12.
4. **Assumption:** LLM exclusion narrative drafting achieves >90% acceptance by state DOT reviewers without re-writing. **How to test:** Submit 50 sample packets to a paid EV-compliance consultant; if >5 need substantive re-writing, narrative quality is the bottleneck.
5. **Assumption:** EV-ChART's API/CSV import will accept third-party-generated reports. **How to test:** Push 10 test filings via the documented API in the Joint Office sandbox; confirm acceptance before promising customers a "one-click file" feature.

### Risk flags

1. **Regulatory risk:** The current administration could weaken NEVI enforcement or roll back the 97% rule. Mitigates: CA's parallel rule survives federal cuts, and 30C recapture is IRS-administered and harder to politicise.
2. **Platform dependency:** Heavy on OCPP standards and CPMS vendor cooperation. Mitigates: OCPP is genuinely open; CPMS lock-in is a year-2 problem if the data ingest stays clean.
3. **Market timing:** If a CPMS vendor ships a "free" exclusion module bundled into the management fee, the willingness-to-pay collapses. Mitigates: become *their* OEM partner before they build it (the Twilio play — they're the trusted layer the CPMS routes to).
4. **Customer-voice gap:** Couldn't surface direct operator complaints on Reddit/Twitter — these people don't post. The pain is real (audit + funding clawback) but the demand evidence is inferred from regulator behaviour, not customer behaviour. Validation sprint must close this gap before serious build.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + regulatory-ops partner (EV-domain advisor non-optional)
Time to revenue:        6–8 weeks to first paid pilot, 14–20 weeks to v1 paying customers at scale
Capital to launch:      $25K–$40K (dev + conferences + first CPMS partnership stipend)
Top 3 assumptions to validate first:
  1. 30 calls to NEVI sub-awardees and EV-ChART filers — does their CPMS produce a defensible exclusion packet? (target: <20% say yes)
  2. 6 LOIs at $258+/mo MRR from validation calls (target: 3 hard yeses to proceed)
  3. EV-ChART sandbox accepts third-party filings via documented API (target: 10/10 test pushes)
Kill criteria:
  - Abandon if <3 of 30 cold calls produce a hard "yes I'd pay for this today"
  - Abandon if a CPMS (Blink, ChargePoint, EVgo, ABB) ships native exclusion-packet generation before v1
  - Abandon if the federal 97% rule and CA EV-ChART rule are both materially rolled back before Q4 2026
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the target list. Scrape Joint Office NEVI awardees, CA Block Grant recipients, NYSERDA Charge Ready 2.0 list — filter to non-network site hosts with 4–20 ports. Aim: ~600 named entities, dedupe to 80 with reachable Facilities/Sustainability contacts.
- **Day 3:** Send 80 personalised outreach messages with a screenshot mockup of an "exclusion packet" plus the line "your first EV-ChART or NEVI quarterly is due [exact date based on their grant], can we show you the gap?"
- **Day 4:** Book 12 calls. Ask each: (a) who's responsible for the filing internally, (b) what's their current process, (c) would they pay $258/mo per site to outsource it.
- **Day 5:** Score the answers. Go/no-go on:
  - ≥3 of 12 say "yes, send me a contract" → **GO** to build v1.
  - 1–2 hard yeses + 5+ "interested, validate when you have a demo" → **VALIDATE** more with a 4-week design partner program.
  - 0 hard yeses → **KILL** and revisit after Q4 2026 when deadlines have actually bitten.

Falsifiable result: number of LOI-quality "yes" replies from 12 booked calls in one week.
