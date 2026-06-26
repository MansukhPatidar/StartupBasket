---
title: "RemediMap — EICR remedial decoder for UK letting agents"
slug: uk-eicr-remedial-decoder
date: 2026-06-26
category: PropTech / UK Letting Agents & Portfolio Landlords
complexity: Low
score: 73
verdict: GO
confidence: Medium
oneLiner: "Upload a failed EICR, get a plain-English plan splitting legally-required fixes from optional ones and sanity-checking the quote."
tags:
  vertical: PropTech
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, AI-agent, SMB, UK-first, Document-AI]
axes:
  problem: 15
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# RemediMap — EICR remedial decoder for UK letting agents

## 1. One-liner

Upload a failed EICR, get a plain-English action plan that splits legally-required fixes from optional ones and sanity-checks the electrician's quote.

## 2. Trend signal — why now?

Three things are converging in the UK private rented sector right now.

**The compliance net is tightening.** Every privately rented home in England must hold a valid EICR (Electrical Installation Condition Report) renewed at least every 5 years under the Electrical Safety Standards in the Private Rented Sector Regulations 2020. Non-compliance fines reach £30,000. There are ~5.6M privately rented dwellings and 4.7M PRS households — a number that grew 52% between 2008-09 and 2023-24. The **PRS Database** (Renters' Rights Act) goes operational late-2026 and requires EICR details registered per property. That turns "I'll get to it" into a logged, enforceable obligation across millions of units.

**The contents of a failed report are a black box to the person who has to act on it.** When an EICR comes back "unsatisfactory," the landlord/agent gets a dense 5-page form full of C1/C2/C3/FI codes and observation references, and a legal clock: remedials within **28 days**. They must then decide which faults are *legally mandatory* (C1, C2 — required) vs *optional* (C3 — recommendation only), whether the electrician's remedial quote is fair, and what to tell the tenant. Industry bodies admit the follow-up "continues to generate much controversy and often unnecessary dispute, which can sometimes end up involving litigation."

**Incumbents track dates, not contents.** Fixflo, Arthur and the rest send "your EICR expires soon" reminders and store the PDF. None parse the *report itself* into an action plan. Fixflo's answer to the confusion is a static "EICR explainer guide" blog post — which is itself proof the demand exists and nobody's productised it.

Provenance:
  - Signal 1 (demand): Landlords/agents confused over C1/C2/C3 coding and suspicious of remedial quotes; "Nothing stops you from getting another quote… Some contractors may do EICRs on the cheap side and push up the remedials quote to compensate." — https://www.electriciansforums.net/threads/should-we-be-issuing-unsatisfactory-eicr-certificates-with-remedials-quote.221121/ — 2026-06-26
  - Signal 2 (feasibility): Cheap multimodal LLMs now reliably parse messy scanned/PDF inspection forms and reason over a fixed code taxonomy (C1/C2/C3/FI, BS 7671 observation references) — capability that was unreliable and expensive 18 months ago. — https://www.fixflo.com/eicr-explainer-guide — 2026-06-26
  - Signal 3 (economic): Mandatory 5-yearly EICRs across ~5.6M PRS dwellings + £30,000 fines + PRS Database (late-2026) registering EICR details per property = a recurring, enforced compliance spend the whole sector must service. — https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-rented-sector-guidance / https://www.ons.gov.uk/peoplepopulationandcommunity/housing/articles/privaterentedsectorstatisticsfromacrosstheuk/2025 — 2026-06-26
  Category: Regulatory arbitrage

## 3. The opportunity

The EICR compliance workflow is split badly. The *inspection* is done by electricians with their own certification software. The *date tracking* is done by property-management platforms (Fixflo, Arthur). But the **middle step — turn an unsatisfactory report into a defensible plan of action** — is done manually, by a stressed letting agent or landlord, under a 28-day legal deadline, with no tooling.

That manual step is where money leaks and disputes start:
- Agents/landlords can't tell mandatory (C1/C2) from optional (C3), so they either over-spend fixing things they don't legally need to, or under-spend and stay non-compliant.
- They can't sanity-check the remedial quote, so overcharging goes unchecked — a known pattern where a cheap EICR is recouped via an inflated remedials bill.
- They produce ad-hoc emails to landlords/tenants explaining what's wrong, eating hours per failed report at portfolio scale.

The incumbent weakness is specific and exploitable: **Fixflo and Arthur are dumb pipes for the document.** They never read it. A focused AI-first tool that reads the report, classifies each observation, prices the remedials against benchmarks, and produces a competitive scope-of-works does the one job the £50/mo incumbents refuse to do — and can sit *alongside* them, not replace them.

## 4. Target market

- **Primary customer:** UK letting agents and small property-management firms (≈50–500 managed units). The average UK letting firm manages 340 properties with 14 staff; 54% have ≤5 staff. Secondary: self-managing portfolio landlords (5+ properties; mortgaged BTL portfolios now average ~5 and "portfolio landlords" average ~13).
- **Why they buy (in their words / sector voice):** EICR compliance is described by the trade as "one of the most stressful parts of a letting agent's role… a time-draining admin nightmare." On the electrician side: when a report fails, "electricians usually notify the failure, provide a quote for remedials and issue the failed certificate." The agent in the middle has to translate that for the landlord, defend the spend, and hit 28 days.
- **Rough TAM reasoning:** ~5.6M PRS dwellings, EICR every 5 years ≈ ~1.1M inspections/year. Industry "unsatisfactory" rates commonly run a meaningful minority of inspections → on the order of a few hundred thousand failed reports a year, each a moment of acute pain. Even capturing agents managing a few million of those units at a modest per-unit fee is a comfortable sub-£5M ARR business.
- **Why now for them:** PRS Database (late-2026) makes per-property EICR status a registered, audited fact. The cost of getting remedials wrong (fines, void compliance, tenant disputes, litigation) is rising at the exact moment the volume of logged obligations spikes.

## 5. Product sketch (MVP)

- **Upload / forward a report:** drop the EICR PDF (or a phone photo of the paper form) or forward the electrician's email; the tool reads it even when scanned and handwritten-annotated.
- **Coded observation table:** every observation extracted and classified — C1 (immediate danger), C2 (potentially dangerous), C3 (improvement), FI (further investigation) — with a plain-English explanation of each.
- **Mandatory vs optional split:** a clear "you legally must fix these (C1/C2) by [date = inspection + 28 days]" vs "these are recommendations only (C3)" — with the countdown.
- **Remedial scope-of-works:** an itemised, electrician-agnostic scope the landlord can send to 2–3 electricians for competing quotes (instead of accepting the inspector's bundled quote blind).
- **Quote sanity-check:** benchmark each remedial line against typical UK price ranges (e.g. consumer-unit replacement, RCD/RCBO upgrade, remedial circuit work) and flag lines that look high.
- **Landlord/tenant-ready summary:** auto-drafted plain-English letter explaining the result, what's being done, and by when — the email the agent writes by hand today.
- **Compliance log:** per-property record of report → action plan → completed works confirmation, exportable for the PRS Database and the local authority's 7-day request.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The core job is reading an unstructured, inconsistently formatted, often scanned-and-annotated 5-page inspection form and turning it into structured, classified, explained, priced output. That's exactly the multimodal document-understanding + domain-reasoning task that became cheap and reliable in the last ~18 months. The "explanation," "mandatory-vs-optional," and "quote sanity-check" layers are LLM reasoning over a fixed regulatory taxonomy (BS 7671 codes + ESSPRS rules) — not a form with a chatbot bolted on. A spreadsheet can't do this; a date-reminder can't do this.

## 7. Localization angle

This **is** the localization play. It's UK-first by construction: BS 7671 coding, ESSPRS 28-day rule, EICR form structure, UK remedial price benchmarks, the late-2026 PRS Database. A generic "document AI" can't compete because the value is entirely in encoding *this jurisdiction's* rules and price norms. Natural expansion targets are jurisdictions with analogous mandatory electrical-inspection regimes (Scotland's own PRS electrical rules, Ireland, parts of Australia) — each a localized clone, not a translation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered SaaS for agents — e.g. £49/mo (up to ~150 units), £99/mo (up to ~400), £199/mo (up to ~1,000), plus a pay-as-you-go £9–£15 per report for self-managing landlords with occasional failures. Sits *beside* Fixflo/Arthur (which charge ~£50/mo base, 50-unit minimum), not instead of them.
- **ACV:** Agents land around £600–£1,800/yr; the realistic blended ACV is ~£900.
- **Rough math to $1M ARR (~£800K):** ~900 agent accounts at ~£890/yr. Given ~tens of thousands of UK letting firms, that's low-single-digit market penetration.
- **Rough math to $5M ARR (~£4M):** ~3,500–4,500 agent accounts plus a PAYG landlord long-tail and one adjacent-jurisdiction expansion (Scotland/Ireland). Requires becoming the default "what do I do with this failed report" tool referenced inside the property-management workflow.
- **Expansion path:** ACV grows by (a) units managed, (b) widening from EICR to the other ~11 letting-agent compliance obligations (gas safety CP12, EPC, fire/smoke) using the same read-the-document → action-plan engine, and (c) a quote-marketplace take from vetted remedial electricians.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the agent directories.** rightmove/OnTheMarket/Google Maps list letting agents by town with email + phone. Pull 2,000 independent firms, send a personalised 90-second Loom: drop in a real (anonymised) failed EICR, show the action plan generate in 30 seconds. Expect ~3–5% reply on a pain this acute → ~60–100 demos.
- **Go where the disputes already are.** The EICR-confusion threads on Screwfix Community, electriciansforums.net, Property118, LandlordZONE and r/uklandlords are full of exactly these questions. Answer them genuinely with a free single-report decode; convert the askers.
- **Partner with EICR-booking firms.** Companies booking EICRs at portfolio scale for agents already sit on the moment of failure. Offer a white-label "what next" report they hand the landlord with every unsatisfactory result — they look helpful, we get distribution.
- **NRLA / agent bodies.** The National Residential Landlords Association and ARLA/Propertymark run member newsletters and events; a "decode your failed EICR free" tool is exactly the lead magnet they circulate.

## 10. Build complexity — justification

**Low.** It's off-the-shelf multimodal document parsing + LLM reasoning over a fixed, well-documented rule set (BS 7671 codes, ESSPRS 28-day rule), wrapped in a simple upload → report web app. No hardware, no real-time, no marketplace at v1. The genuinely hard parts are (a) reliable extraction from messy scanned forms and (b) curating a defensible UK remedial price-benchmark table — both solvable by a small team. A technical founder with an electrical/letting domain advisor ships v1 in ~8–12 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Decision-support/admin tool; not issuing certificates or doing notifiable work. |
| Ethical — no harm / dark patterns | ✅ | Reduces overcharging and non-compliance; pro-consumer. Must label output as guidance, not a substitute for a qualified electrician. |
| Market exists (evidence above) | ✅ | Mandatory regime, millions of units, active dispute threads, incumbents tracking dates only. |
| 1–5 person team can build this | ✅ | Document-AI web app, no novel infra. |
| Launchable with <$50K / ₹40L | ✅ | Inference + web hosting + one domain advisor. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Acute at the moment of failure (28-day clock, £30K fines, dispute risk) — but it's a *per-event* pain, not a daily one. Felt hard, intermittently. |
| Demand evidence | 15 | 12/15 | Active forum disputes, sector calling it a "nightmare," incumbents publishing explainer content. No one selling the exact product yet — strong signal, but direct WTP for *this* tool is still unproven. |
| Build feasibility | 15 | 13/15 | Off-the-shelf document AI + fixed rule set; main risk is messy-scan extraction quality. |
| Distribution clarity | 15 | 11/15 | Named directories, named forums, named partners (EICR bookers, NRLA). Agents are reachable; conversion on a per-event tool is the open question. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked beside Fixflo/Arthur; ACV modest. PAYG landlord tier has churn risk (use it once, leave). |
| Time to first revenue | 10 | 7/10 | A free-decode → paid funnel can close agents in weeks, but per-event usage lengthens the path to recurring revenue. |
| Defensibility | 10 | 4/10 | Copyable engine; moat is the curated UK rule+price benchmark data, the agent workflow lock-in, and being first to own the "failed EICR" query. Incumbents (Fixflo/Arthur) could bolt this on. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs solid document-AI engineering plus an electrical-inspection / letting-compliance advisor to get coding and price benchmarks defensibly right.

### Key assumptions to validate (3–5)

1. **Assumption:** Letting agents will pay a recurring fee for a tool used only when reports fail (a few times/month at mid-portfolio scale). **How to test:** 30 agent interviews; offer 3 paid pilots at £49–£99/mo and see who actually subscribes after free decodes.
2. **Assumption:** AI can extract observations reliably from real-world scanned/annotated EICRs, not just clean PDFs. **How to test:** run 50 real anonymised failed reports through the pipeline; measure extraction + classification accuracy against an electrician's manual review (target ≥95% on C1/C2 calls — false "optional" on a mandatory fault is the dangerous error).
3. **Assumption:** The quote sanity-check is accurate enough to be trusted, not a liability. **How to test:** benchmark 100 real remedial quotes against the price table; have the advisor grade flags as fair/over/under.
4. **Assumption:** Incumbents (Fixflo/Arthur) won't ship this in 6 months. **How to test:** monitor their roadmaps/changelogs; design for integration-alongside, not head-on replacement.

### Risk flags

1. **Liability risk:** If the tool says "C3, optional" on something that should've been remediated and harm follows, that's serious. Must be framed as guidance with a qualified-electrician sign-off, with conservative defaults (when uncertain, escalate, never downgrade).
2. **Platform dependency / incumbent encroachment:** Fixflo/Arthur own the workflow and could add a "read the report" feature. First-mover + better domain data is the only defence — defensibility scored low for this reason.
3. **Per-event demand, not daily:** A failed EICR is intermittent; risk that agents decode for free and never convert to recurring. Mitigate by expanding to the full compliance-doc set (gas/EPC/fire) so the tool earns a permanent seat.
4. **Market timing:** PRS Database is a tailwind but its phased 2026–2028 rollout means the enforcement spike is gradual, not a single launch-day surge.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (document-AI) + electrical/letting-compliance advisor
Time to revenue:        8–12 weeks to first paid pilot
Capital to launch:      £8–15K ($10–19K) — inference, hosting, advisor
Top 3 assumptions to validate first:
  1. Agents pay recurring for a per-event tool — 30 interviews + 3 paid pilots after free decodes
  2. ≥95% extraction/classification accuracy on real scanned failed EICRs (no mandatory→optional errors) — 50-report test vs electrician review
  3. Quote sanity-check is trustworthy, not a liability — 100 real quotes benchmarked + advisor grading
Kill criteria:
  - Abandon if <2 of 30 interviewed agents convert to a paid pilot after a free decode
  - Abandon if classification mislabels any C1/C2 as optional in the 50-report accuracy test and the error can't be driven to zero with conservative defaults
  - Abandon if Fixflo or Arthur ships native report-content parsing before v1 launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Collect 20–30 real, anonymised unsatisfactory EICRs (from a friendly electrician, agent, or the public forum attachments). Hand-build the C1/C2/C3 classification + plain-English explanation for 5 of them as the "gold standard."
- **Day 3–4:** Wire a throwaway pipeline (upload → parse → classify → explain → mandatory/optional split) and run all 20–30 reports. Score extraction + classification accuracy against the gold standard and an electrician's spot-check.
- **Day 5:** Call 10 letting agents, screen-share the generated action plan for a real failed report, and ask the one question that matters: *"Would you pay £49/mo for this?"* Get a verbal yes/no and a price.
- **Decision:** Go if (a) classification accuracy ≥95% with zero mandatory→optional errors on the test set, **and** (b) ≥3 of 10 agents give a credible "yes" at £49/mo. Otherwise no-go or rescope to a free lead-magnet feeding a different paid product.
