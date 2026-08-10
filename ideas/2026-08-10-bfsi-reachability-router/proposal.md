---
title: "DeadAir — reachability switchboard for small Indian lenders"
slug: bfsi-reachability-router
date: 2026-08-10
category: FinTech / India — Base-Layer NBFCs, Co-operative Banks and RRBs (₹50Cr–₹2,000Cr AUM) Whose Mandatory 1600-Series Calls Are Being Blocked as Spam by Their Own Borrowers
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Tells a small lender which borrowers stopped answering the phone, and moves them to a channel that still works."
tags:
  vertical: FinTech
  model: SaaS
  geography: India
  secondary: [Compliance-driven, WhatsApp-first, Multilingual, AI-agent, SMB]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# DeadAir

## 1. One-liner

Tells a small lender which borrowers stopped answering the phone, and moves them to a channel that still works.

## 2. Trend signal — why now?

India's telecom regulator did something with the best intentions and broke the phone for every regulated lender in the country.

On 19 November 2025, TRAI directed every RBI-, SEBI- and PFRDA-regulated entity to move all service and transactional calls onto a dedicated `1600` number prefix, phased by sector: commercial banks by 1 January 2026, large NBFCs and payments banks by 1 February, insurers and AMCs by 15 February, and the long tail — remaining NBFCs, co-operative banks, regional rural banks — by 1 March 2026. The logic was sound: give consumers one prefix that means "this is really your bank," and impersonation fraud dies. Non-compliance carries ₹2,00,000 per instance, escalating to ₹10,00,000 for repeat violations.

What actually happened is the opposite. Consumers learned the prefix — and started treating it as a spam signature. By July 2026 the numbers were ugly enough that TRAI had to publicly lean on Truecaller: daily blocking actions against 1600-series numbers had risen **208% since October 2025**, and **more than 51 million calls a day from the 140 and 1600 series now go unanswered**. Truecaller logs roughly **1.25 lakh spam reports per day on the 1600 series alone**. Banks complained to TRAI that their calls were being categorised as spam and blocked outright, disrupting their access to their own customers. TRAI's response was to forbid the filtering apps from tagging the series and to seek "authorised agency" status to act against Truecaller, Hiya and Whoscall. Truecaller is challenging it.

Read that fight for what it is: the regulator is trying to legislate a trust signal back into a prefix that consumers have already independently decided is garbage. Regulators lose that fight. Meanwhile every lender is legally required to keep calling from it.

The collections economics show the damage. Connect rates in Indian collections have fallen from **65% to 45%** on stale lists and 60+ DPD buckets. Average Right Party Contact sits around **26%**, with 23% of call centres below 20%. Fully-loaded human telecallers cost **₹26–₹72 per connected call**. And the line that matters most: as connect rates fall, per-connected costs fall roughly in proportion, but outcomes fall with them — so **effective cost per outcome barely improves**. Lenders are burning the same money for less recovery and nobody's instrumenting the leak.

Then the compliance screw turns. RBI's Responsible Business Conduct (Second Amendment) Directions, released 15 June 2026 and effective **1 January 2027**, require lenders to maintain records of recovery calls, preserve recordings for a minimum of six months, document a pre-escalation engagement step before escalating, and operate a board-approved escalation matrix. From January, "we called them and nobody picked up" stops being an operational annoyance and becomes an evidentiary problem.

Provenance:
  - Signal 1 (Demand): Daily blocking of 1600-series calls up 208% since Oct 2025; 51M+ calls/day from 140/1600 unanswered; 1.25 lakh daily spam reports on 1600; banks formally complained to TRAI that mandated calls are being blocked — https://www.business-standard.com/industry/news/trai-clarifies-1600-and-140-series-calls-can-t-be-blocked-or-tagged-by-apps-126071000972_1.html and https://techchannel.news/the-battle-over-indias-140-and-1600-number-series-explained/ — July 2026
  - Signal 2 (Feasibility): MeitY launched VoicERA, an open-source end-to-end voice AI stack on BHASHINI national language infrastructure, covering real-time speech, conversational AI and multilingual telephony across 700+ dialects, cloud- or on-prem-deployable with no vendor lock-in — https://ddnews.gov.in/en/meity-launches-open-source-voicera-voice-ai-stack-on-bhashini-infrastructure-at-india-ai-impact-summit-2026/ — 18 February 2026
  - Signal 3 (Economic): TRAI 1600 mandate carries ₹2L–₹10L per-violation penalties across ~9,000 base-layer NBFCs, 351 DCCBs, 34 StCBs and 28 RRBs where Phase III compliance is "patchy at best"; RBI enforced against 99 regulated entities (56 co-op banks, 21 NBFCs) with ₹8.96 crore in penalties per the June 2026 Financial Stability Report; connect rates fell 65%→45% while cost per outcome stayed flat — https://caller.digital/blog/trai-1600-series-phase-3-cooperative-banks-rrb-deadline-india and https://www.indiancooperative.com/co-op-news-snippets/rbi-penalizes-56-cooperative-banks-in-six-months/ — March–June 2026
  Category: Regulatory arbitrage

## 3. The opportunity

Every vendor in this market sells the same thing: **more calling**. Cloud telephony (Tata Tele, Frejun, Deepijatel/ConVox), AI voice agents (Caller Digital, Vomyra, Ringg, Oli AI), collections platforms (Credgenics, CarmaOne, Creditas). Every one of them is priced and architected on the assumption that the call connects. Their pitch is "dial more, dial smarter, dial in Hindi." Their dashboards report connect rate as an outcome to be optimised, not as a per-borrower property to be *known*.

That assumption just broke at the infrastructure layer, and it broke for reasons no dialer can fix. When a borrower has muted the 1600 prefix on their handset, no amount of predictive dialing, sentiment analysis or better Hindi TTS will reach them. You can burn ₹72 a connect forever and never touch that person. The industry's response has been to buy more voice AI because it's cheaper per attempt — which, as the benchmark data shows, leaves cost-per-outcome roughly where it was.

The gap is a **reachability layer**: a per-borrower, per-channel model of whether this specific person can actually be reached, on what, and when — and the machinery to stop wasting dials on the ones who are structurally unreachable by phone and push them to WhatsApp, SMS, or a field visit instead. Nobody sells this. The contact-centre analytics vendors (Vanie, Observe.AI, Uniphore) analyse the calls that *did* connect. The interesting data is in the calls that didn't.

The second half of the opportunity is compliance. From 1 January 2027 the lender must be able to show documented pre-escalation engagement. A tool that already holds a per-borrower, timestamped, channel-by-channel record of every attempt and outcome doesn't just save dialing spend — it emits the exact artifact RBI is about to ask for. Same data, two buyers inside the same institution: the collections head who wants recovery, and the compliance officer who wants to not be one of the 99 entities in next year's enforcement table.

Incumbents won't chase the bottom of this market. Credgenics-class platforms price on loan volume and sell enterprise; a 40-person co-operative bank in Nashik with ₹300 crore of AUM is not their customer and never will be. That's ~9,400 institutions with a legal problem and no vendor.

## 4. Target market

- **Primary customer:** Head of Collections or Head of Operations at a base-layer NBFC, urban/district co-operative bank, or RRB branch network in India. ₹50Cr–₹2,000Cr AUM, 5,000–150,000 active borrower accounts, 10–80 people in a tele-calling or field collections function. Tier-2 and Tier-3 concentrated: Maharashtra, Gujarat, Tamil Nadu, Karnataka, UP, Rajasthan. Secondary buyer inside the same account: the Compliance Officer, who owns the RBI RBC exposure.
- **Why they buy:** Their tele-calling team's numbers went sideways after Q1 2026 and nobody can explain it in a way that survives a board question. Connect rate is down, the calling cost line is flat or up, DPD buckets are ageing, and the honest internal answer — "customers are blocking our new mandated number" — is not something you can fix by shouting at the team. They are paying ₹26–₹72 per connected call for a channel that reaches roughly a quarter of the right parties.
- **Rough TAM reasoning:** ~9,000 base-layer NBFCs, 351 District Central Co-operative Banks, 34 State Co-operative Banks, 28 RRBs (operating 22,000+ branches across 700 districts), plus 12 small finance banks and several hundred middle-layer NBFCs. Call it ~9,400 institutions in the addressable long tail, of which perhaps 3,000–4,000 run a collections function large enough to feel this. At ₹25,000/mo average, a 3% penetration of 3,500 serviceable accounts is ~₹3.1 crore ARR; the model below gets to $1M on 105 accounts at the mid-tier price.
- **Why now for them:** Three clocks converge. Phase III of the 1600 mandate closed 1 March 2026, so they are already on the broken prefix. The blocking curve steepened through mid-2026 — this got materially worse in the last two quarters, not gradually. And RBI's RBC Second Amendment lands 1 January 2027, which turns their undocumented contact attempts into an audit finding. They have roughly five months.

## 5. Product sketch (MVP)

- **Reachability score per borrower** — a live per-account rating of whether this person is actually contactable by voice, built from attempt/outcome history, ring-duration patterns, time-of-day response, handset behaviour and prior channel success. Not a call log; a prediction.
- **Dead-number detection** — flags the accounts where the 1600 calls are ringing into a void (blocked, silenced, auto-rejected) versus genuinely busy or unavailable, so the team stops re-dialing corpses.
- **Channel switch recommendations** — for every unreachable borrower, the next-best channel with a confidence figure: WhatsApp (via Meta Cloud API, the only supported path since on-prem retired October 2025), SMS on the correct DLT-registered header, or escalate to field visit. Ranked by expected contact, not by cost.
- **Multilingual voice attempt agent** — outbound reminder and confirmation calls in Hindi, Marathi, Tamil, Telugu, Bengali, Gujarati and Hinglish code-switching, honouring the 8:00 AM–7:00 PM contact window automatically.
- **Contact-attempt evidence file** — for each borrower, a timestamped, immutable record of every attempt across every channel, its outcome, its language, its operator, and its recording reference. Exportable as the pre-escalation engagement documentation RBI's RBC directions require, with the six-month recording retention handled.
- **Escalation matrix runner** — encodes the lender's board-approved escalation ladder and shows which accounts are eligible to advance to the next rung and which have not yet cleared the documented-engagement precondition.
- **Wasted-spend report** — the number the Collections Head takes to the board: rupees burned this month dialing borrowers our own model said were unreachable, and what switching them recovered instead.
- **1600-compliance posture check** — confirms outbound traffic is originating from compliant CLIs per the entity's category, and flags calls that would be blocked independent of content.

## 6. AI angle — what's load-bearing

Two places, both structural.

The reachability model is the core. Predicting per-borrower channel contactability from sparse, noisy, heavily imbalanced telephony signal — ring duration, disposition codes, time-of-day, day-of-week, recency, handset-level rejection patterns, historical channel outcomes — is a genuine modelling problem, not a rules table. A rules engine gives you "3 failed attempts = try WhatsApp," which is what a competent ops manager already does in a spreadsheet and which is worth nothing. What's worth money is "this borrower answers unknown numbers at 7:10 PM on Saturdays and has never once picked up a 1600 call on a weekday" — and that only falls out of a model fed enough attempt history. It also compounds: every attempt across every tenant sharpens the priors.

The second is the multilingual voice layer, and this is where VoicERA changes the arithmetic. Before February 2026, credible Indic-language telephony meant a commercial vendor contract with per-minute pricing that put the unit economics of a ₹15,000/mo product out of reach. MeitY's open-source stack on BHASHINI — real-time speech, conversational AI and multilingual telephony across 700+ dialects, deployable on-prem, explicitly built so no vendor can lock you in — removes both the cost floor and the dependency. On-prem deployability also solves the co-operative-bank objection about borrower data leaving the institution.

Strip the AI out and you have a call log with a filter on it. That's not a product; that's a report the incumbent dialer already generates and everyone ignores.

## 7. Localization angle

This is India-only by construction and that's the whole point. The 1600-series mandate is a TRAI instrument with no analogue anywhere else; the failure mode it created — a regulator-mandated prefix that consumers spam-filter — exists in exactly one market. The buyer set (base-layer NBFCs, DCCBs, StCBs, RRBs) is an Indian regulatory taxonomy. The compliance artifact is defined by RBI's RBC directions. The contact-hour window (8 AM–7 PM), the DLT header regime, the IIBF certification requirement for recovery agents, the 140/160/1600 series split — all Indian.

Language is not a feature here, it is the product surface. A Nashik DCCB's borrowers answer in Marathi; a Coimbatore NBFC's in Tamil; most of urban India in code-switched Hinglish. VoicERA's dialect coverage is the reason a two-person team can serve all of them without a per-language vendor deal.

Pricing localises too. ₹15,000–₹50,000/mo lands where a $500–$5,000/mo product would be laughed out of the room, and it's trivially justified against a tele-calling line item running ₹26–₹72 per connected call.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers by borrower-account volume. **₹15,000/mo** (up to 15,000 active accounts), **₹40,000/mo** (up to 75,000), **₹90,000/mo** (up to 250,000, includes on-prem deployment and the compliance evidence module). Voice-attempt minutes metered separately at a small margin over cost, or brought-your-own-trunk.
- **ACV:** ₹4.8L (~$5,500) blended, assuming the mid-tier dominates. Land at ₹15K, expand on account volume and the compliance module.
- **Rough math to $1M ARR:** 105 institutions at ₹40,000/mo × 12 = ₹5.04 crore ≈ $1.02M ARR at ₹49/$. Against ~3,500 serviceable institutions that's 3% penetration.
- **Rough math to $5M ARR:** ~370 institutions at a ₹1.1L/mo blended ACV — requires the compliance module to become the primary line item rather than the add-on, plus expansion into middle-layer NBFCs and the insurance/AMC side of the mandate (the 1600 problem is identical for IRDAI-regulated entities), plus metered voice revenue at scale. Realistically 30 months, not 18.
- **Expansion path:** Account-volume tiers first. Then the compliance evidence module as a separate SKU sold to the Compliance Officer as January 2027 approaches. Then metered voice minutes as tenants shift outbound volume onto the platform. Then per-recovery outcome pricing for lenders who prefer it — the per-outcome model is already appearing in Indian voice AI, and holding the reachability data makes it safe to underwrite.

## 9. Go-to-market wedge — first 100 customers

- **The free 1600 reachability audit.** RBI publishes the register of NBFCs; NAFCUB and state federations list co-operative banks; RRB lists are public. Build a target file of ~1,200 institutions with a collections function. Offer a two-week diagnostic: they hand over 90 days of anonymised call disposition logs, we return a report showing what percentage of their borrower base is structurally unreachable by phone and what the wasted dial spend was in rupees. That report *is* the sales pitch — it quantifies a leak they cannot currently see. Expect 8–12% to accept a free audit, and 20–30% of audits to convert, because the report either shows a big number or it doesn't and both are honest.
- **The compliance deadline campaign.** Direct outreach to Compliance Officers and Company Secretaries at the same institutions, on the single question of whether they can produce documented pre-escalation engagement records when the RBC Second Amendment bites on 1 January 2027. Time it September–November 2026. Compliance officers at small lenders return calls about deadlines in a way collections heads don't return calls about software.
- **Ride the fintech consultants and CA firms.** The small-NBFC and co-operative bank world buys software on the word of its compliance consultants — the Vinod Kothari / Corporate Professionals tier of advisory firm, plus regional CA practices doing NBFC compliance retainers. Ten referral relationships with revenue share reach several hundred institutions with a warm intro. This is how software actually enters this segment.
- **State co-operative federations and NBFC associations.** FIDC (Finance Industry Development Council) for NBFCs and the state co-operative bank federations run member seminars where the 1600 problem is already an agenda item. A speaking slot plus a member-rate offer puts you in front of 50–150 qualified institutions in a day.
- **The Truecaller fight as content.** The TRAI–Truecaller dispute is being covered in mainstream business press and every lender in the country is reading it. Publish a monthly reachability index — measured blocking and answer rates on 1600 traffic across the tenant base — and become the cited source on a fight everyone is watching. That is earned distribution to precisely the right room.

## 10. Build complexity — justification

**Medium.** The web app, tenant management, dashboards and evidence exports are standard work. The telephony integration is the real cost: connecting to whatever the tenant already runs (Tata Tele, Exotel, Knowlarity, ConVox, or an on-prem Asterisk box in a co-operative bank's server room) to ingest call disposition data is a long tail of unglamorous integrations, and the co-operative segment will have some genuinely archaic setups. WhatsApp goes through Meta Cloud API, which is well-trodden. VoicERA is new enough that the deployment story will have rough edges, and on-prem deployment for data-sensitive tenants adds packaging work.

The reachability model needs real attempt data before it beats a good heuristic, so v1 ships with sensible rules and earns its way to a model over the first 10–15 tenants. That's fine — the wasted-spend report is valuable on rules alone.

Call it **16–20 weeks to a credible v1** for two people, one of whom is comfortable with telephony plumbing. Add 4 weeks if the first design partner is a co-operative bank insisting on on-prem.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps entities comply with TRAI and RBI directions rather than evade them. Operates inside the 8 AM–7 PM window, DLT headers, and consent requirements. DPDP obligations are real and manageable; on-prem option available for sensitive tenants. |
| Ethical — no harm / dark patterns | ✅ | Reduces repeat dialing of borrowers who have signalled they don't want calls, which is squarely aligned with RBI's borrower-protection direction. No shaming, no third-party contact, no circumvention of blocking — the product respects the block and routes elsewhere. |
| Market exists (evidence above) | ✅ | 208% blocking rise, 51M daily unanswered calls, connect rates 65%→45%, ₹2L–₹10L penalties, 99 entities enforced against, ~9,400 institutions on the broken prefix. |
| 1–5 person team can build this | ✅ | Two people, 16–20 weeks. Telephony integrations are the long pole, not a research problem. |
| Launchable with <$50K / ₹40L | ✅ | Two founders, cloud infra, Meta Cloud API costs, VoicERA is open source. Well under ₹40L to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Lenders are legally compelled onto a channel their customers are blocking, paying ₹26–₹72 per connect for ~26% RPC, with an audit deadline in January. Money bleeds weekly and the board is asking. Not 19–20 because most of them have absorbed it as "collections is hard" rather than diagnosed it. |
| Demand evidence | 15 | 12/15 | Hard third-party numbers on blocking, unanswered volume, connect-rate decline and cost-per-call, plus a public regulator-vs-Truecaller fight. Docked because the specific claim — that lenders will pay for a *reachability layer* rather than another dialer — is inferred from the economics, not yet observed in a purchase. |
| Build feasibility | 15 | 11/15 | Standard stack plus VoicERA, but a long tail of telephony integrations into small-lender infrastructure and an on-prem packaging requirement. 16–20 weeks for two, not 8. |
| Distribution clarity | 15 | 12/15 | Named, enumerable target list from public registers; the free audit is a concrete wedge that produces a rupee figure; consultant and federation channels are how this segment actually buys. Docked because small co-operative banks are slow, relationship-driven buyers and the audit-to-close rate is a guess. |
| Revenue mechanics | 15 | 11/15 | ₹15K–₹90K/mo is comfortably justified against an existing tele-calling line item, and 105 accounts to $1M is achievable against ~3,500 serviceable. Docked because the $5M path leans on the compliance SKU and insurance expansion, and ACV expansion in this segment is historically sticky-but-slow. |
| Time to first revenue | 10 | 8/10 | The audit can be delivered manually before the product is finished, so paid pilots are plausible inside 8–10 weeks. Not 9–10 because these institutions have procurement rituals and committee approvals even at ₹15K/mo. |
| Defensibility | 10 | 5/10 | Accumulating cross-tenant attempt data is a genuine compounding advantage and the compliance workflow creates lock-in once it's the system of record. But the first 12 months are execution-only — any of the existing voice AI vendors could bolt on a reachability score if they noticed. Regulatory knowledge and segment relationships are the real barrier, and they're soft. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can do telephony integration and modelling, and someone who genuinely knows how RBI-regulated small lenders buy — the co-operative bank world does not respond to product-led growth. Without the second person this is a good product nobody lets in the door.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of a typical small lender's borrower base is *structurally* unreachable by 1600-series voice — blocked or silenced, not merely busy — and this share is large enough to be worth money. **How to test:** Get 90 days of anonymised call disposition logs from 5 institutions and measure never-connected accounts against ring-duration and disposition signatures. If structurally-unreachable is under 15% of active accounts, the wedge is too thin.
2. **Assumption:** Collections heads will pay for reachability intelligence rather than buying another voice AI vendor promising more dials for less. **How to test:** Run the free audit on 15 institutions and see how many ask "what would you charge to fix this" unprompted versus how many say "we're already talking to a voice AI vendor." Under 4 of 15 is a kill signal.
3. **Assumption:** The RBC Second Amendment's pre-escalation documentation requirement is understood by compliance officers as a real January 2027 obligation, not a distant one. **How to test:** 25 structured calls with compliance officers and CS at target institutions asking what they're doing about it. If most haven't read it, the compliance SKU is a 2027 product and the 2026 pitch must stand on wasted spend alone.
4. **Assumption:** VoicERA is production-usable for outbound telephony in the top 6 Indic languages, not a summit demo. **How to test:** Deploy it and run 500 live outbound calls across Hindi, Marathi and Tamil, measuring completion and comprehension. If it isn't ready, unit economics need a commercial vendor and the price floor rises.
5. **Assumption:** Small lenders' existing telephony can actually be integrated for disposition ingestion without per-tenant bespoke work. **How to test:** Audit the telephony stack at 10 target institutions. If more than half are unintegrable without custom work, gross margin dies in services.

### Risk flags

1. **Regulatory reversal:** TRAI is actively fighting to restore trust in the 1600 prefix and has sought authorised-agency status to force filtering apps to stop tagging it. If TRAI wins decisively and blocking collapses back to pre-mandate levels, the acute version of this problem softens considerably. The compliance half of the product survives; the wasted-spend half weakens. Watch the Truecaller litigation.
2. **Incumbent absorption:** Credgenics, CarmaOne or a well-funded voice AI vendor adds a reachability score as a feature. They have the call data already. The defence is segment focus and the compliance artifact, neither of which is durable for more than a year or so.
3. **Segment velocity:** Co-operative banks and small NBFCs are slow, committee-driven, relationship-gated buyers with real procurement friction even at small ticket sizes. The 90-day-to-first-revenue target is plausible but the 100-customer timeline could stretch badly. This is the most likely way the idea underperforms without being wrong.
4. **Platform dependency:** Meta Cloud API for WhatsApp, VoicERA/BHASHINI for voice, and tenant telephony vendors for ingestion. Three dependencies, one of them a government stack whose long-term maintenance commitment is unproven.
5. **Data protection:** Borrower contact behaviour is personal data under DPDP. Cross-tenant model training needs to be done on properly de-identified aggregates or the compounding-data moat becomes a liability. Get this right at the schema level on day one, not at Series A.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder comfortable with telephony plumbing and
                        modelling, paired with someone who has sold into Indian
                        NBFCs or co-operative banks and can get past the gate
Time to revenue:        8–12 weeks (paid audit pilots before full product)
Capital to launch:      ₹12–18 lakh ($14–21K)
Top 3 assumptions to validate first:
  1. Structurally-unreachable share of borrower base ≥15% — measure on 90 days of
     disposition logs from 5 institutions
  2. Collections heads buy reachability intelligence over more dialing — 15 free
     audits, count unprompted "what do you charge" responses, need ≥4
  3. VoicERA is production-ready for outbound Indic telephony — 500 live calls
     across Hindi, Marathi, Tamil, measure completion
Kill criteria:
  - Abandon if structurally-unreachable accounts are <15% of active borrowers
    across the first 5 diagnostic institutions
  - Abandon if fewer than 4 of 15 free audits produce an unprompted pricing
    conversation
  - Abandon if TRAI wins its Truecaller action and 1600 blocking rates fall back
    below pre-October-2025 levels before v1 ships
  - Abandon if more than half of the first 10 target institutions cannot be
    integrated for disposition ingestion without bespoke engineering
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the target file. Pull the RBI NBFC register, NAFCUB and state federation co-operative bank lists, and the RRB list into ~1,200 institutions with contact details for Collections and Compliance heads. In parallel, deploy VoicERA and place 50 test outbound calls in Hindi and Marathi to confirm it's real.
- **Day 3–4:** Offer the free reachability audit to 40 institutions by phone and email. Target 5 who will hand over 90 days of anonymised call disposition logs under a one-page NDA. Simultaneously run 25 structured compliance-officer calls on the RBC pre-escalation documentation requirement.
- **Day 5:** Analyse whatever logs came back. Compute the structurally-unreachable percentage and convert it to a rupee figure at ₹40/connect.

**Go/no-go:** Proceed only if (a) at least 3 institutions returned usable logs, (b) the mean structurally-unreachable share across them is ≥15% of active accounts, and (c) at least 8 of the 25 compliance officers identified the January 2027 documentation requirement as something they currently have no system for. Anything less and the pain is real but not yet purchasable — revisit in Q4 2026 as the RBC deadline closes.
