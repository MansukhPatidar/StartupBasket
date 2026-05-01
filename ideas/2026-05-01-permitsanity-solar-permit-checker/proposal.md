---
title: PermitSanity — AI permit-packet checker for US solar installers
slug: permitsanity-solar-permit-checker
date: 2026-05-01
category: CleanTech SaaS / US Solar Installers
complexity: Medium
score: 80
verdict: STRONG GO
confidence: Medium
oneLiner: AI checker for US solar installers that flags AHJ + NEC 2026 rejections before you submit the permit packet.
tags:
  vertical: CleanTech
  model: SaaS
  geography: US
  secondary: [Solo-builder, SMB, AI-agent, Workflow-automation, Solar, Permit-tech]
axes:
  problem: 17
  demand: 12
  build: 12
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 8
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# PermitSanity — AI permit-packet checker for US solar installers

## 1. One-liner

AI checker for US solar installers that flags AHJ + NEC 2026 rejections before you submit the permit packet.

## 2. Trend signal — why now?

Three things converged at the wrong moment for the small US solar installer:

- **The 30% residential ITC expired Dec 31, 2025.** Wood Mackenzie projects 2026 residential installs to drop ~20%, the lowest since COVID. ~17,000 layoffs and a wave of bankruptcies in 2025-26. Big players (SunPower, PosiGen) collapsed; the surviving market is fragmenting back to thousands of small regional installers who now have to squeeze profit out of fewer jobs.
- **NEC 2026 just started rolling out.** California enforces it; most of NC and FL are still on 2020 with state amendments; everyone else is somewhere in between. Sections 690.4(G), 690.8 (string sizing), 690.12 (rapid shutdown), 705.11 (supply-side conductors) all changed and trip up plan sets that look fine on the previous code year. Reviewers are flagging non-compliant packages immediately.
- **Permit rejection became the single biggest profit leak.** Industry-tracked data: revision cycle costs $2,000–$5,000 per rejected project, adds 1–2 weeks each, and accounts for up to **40% of all project delays**. NEC 690.8 violations alone cause an estimated 30–40% of nationwide rejections. CALSSA filed a $10M complaint with the CPUC against PG&E and SCE in Aug 2025 over Rule 21 timeline violations — compliance rates on some Rule 21 review steps run 27–45%.

Provenance:
  - Signal 1: Solar industry layoffs + ITC expiration + 20% residential install drop in 2026 — https://www.solarpowerworldonline.com/2026/01/solar-layoffs-and-closures-run-rampant-in-trumps-first-year-back/ — Jan 2026
  - Signal 2: $2K–$5K per rejected project, 40% of delays, 30–40% of rejections from NEC 690.8, NEC 2026 partial adoption — https://energyscaperenewables.com/post/how-solar-planset-errors-delay-projects/ + https://energyscaperenewables.com/post/solar-permit-rejection-10-mistakes-killing-your-ahj-approval/ — 2026
  - Signal 3: SolarAPP+ proves automated review works (NREL/DOE), CivCheck + Aurora Solar prove AI-plan-check is feasible at scale, but no standalone scrubber priced for the long tail of 1–10-person installers — https://www.gosolarapp.org/, https://www.claritisoftware.com/products/civcheck-ai-plan-review-software, https://aurorasolar.com/pricing/ — 2026
  Category: Tech-unlock + workflow automation

## 3. The opportunity

Three solar software camps already exist; none own the cheap, focused, installer-side scrubber.

- **Full design CAD platforms** (Aurora Solar $159–$259/mo, OpenSolar, Solargraf, Helioscope, PVComplete) sell sales-and-design suites with NEC checks bolted on. They're priced for an installer who lives in their CAD. They don't read a finished PDF that came out of someone else's CAD.
- **Plan-set-as-a-service shops** (Permit Design, GreenLancer, Sun Supply PV, Planet Plan Sets, Wattmonk) sell PE-stamped plan sets at $150–$400/project. They will not sell you a $25 sanity check on the plan set you already have — that would commoditize their core revenue.
- **AHJ-side AI** (CivCheck, SolarAPP+) is built for *city plan reviewers* to triage incoming applications. Useful only after you submit, and only in the ~5% of US AHJs that have adopted it.

The gap: a small installer who DIYs plan sets in Aurora or AutoCAD, or buys them outsourced, has no fast way to ask "given that this is going to City of Tucson + TEP for a 9.6 kW + 13.5 kWh battery, what will get flagged?" before submitting. Today they ask a senior PE (slow, $$$), or just submit and hope. PermitSanity reads the finished packet, knows the destination AHJ + utility + NEC code year, and returns a precise rejection-likelihood report in 5 minutes.

## 4. Target market

- **Primary customer:** Owner-operators and ops leads at US solar installer / EPC shops with 1–10 employees, doing 5–50 installs/month, residential-and-light-commercial PV + battery storage. They permit across 5–50 AHJs and 1–4 utilities. Title is "owner," "permitting coordinator," or "head of design."
- **Why they buy:** Each rejection eats $2K–$5K of margin on a $25K–$30K install (their gross margin is 20–40%). One rejection per month = a full project's worth of margin gone. Post-ITC, they cannot absorb it. They are running lean: they laid off the senior PE who used to catch these errors, or they never had one.
- **Rough TAM reasoning:** SEIA / NABCEP data points to ~6,000–8,000 active US residential solar installer companies, plus another ~2,000 small commercial EPCs. Even if the market shrinks 20% in 2026, that's 6,000+ targetable shops. Each loses 30–60 jobs/year to permit cycles. ARPU $1.5K–$3K/yr → addressable ~$15M–$25M ARR.
- **Why now for them:** ITC expired → margin pressure is acute. NEC 2026 rolling out → senior-PE knowledge baseline reset. Layoffs → they no longer have an in-house permit specialist. AI just got good enough to read plan-set PDFs reliably (GPT-4o vision + structured outputs + cheap inference).

## 5. Product sketch (MVP)

- **Drop-in PDF check.** Upload plan set + spec sheets + interconnection app. Pick destination AHJ from a searchable list (we pre-load the top 500 AHJs) and pick utility.
- **Rejection-likelihood report in <10 minutes.** Each finding rated High / Medium / Low risk, with the exact NEC section or AHJ checklist line cited and a suggested fix.
- **Cross-check engine.** Verifies SLD vs equipment cut sheets vs system size vs string sizing vs OCPD vs label set vs site plan setbacks vs roof structural sheet — the cross-document mismatches that cause most rejections.
- **NEC code-year auto-detect.** PermitSanity knows whether your destination AHJ is on 2020, 2023, or 2026 NEC, and grades against the right one. No more "we wrote it for 2023 but the city is on 2026."
- **AHJ memory.** When a real rejection comes in, paste the rejection letter — PermitSanity learns that AHJ's reviewer quirks ("this reviewer always wants module specsheets at 200% scale") and applies them next time.
- **Per-utility interconnection delta.** PG&E vs SCE vs Duke vs APS — different application checklists, different PE stamp rules, different timing requirements. The tool flags utility-specific gaps separately from AHJ gaps.
- **Team workspace.** Permit coordinator runs the check, owner sees a green/yellow/red status on the project board.
- **Audit trail.** Every check stored as evidence — useful when the AHJ rejects something the tool said was clean (and useful for the tool to learn).

## 6. AI angle — what's load-bearing

AI is the entire product, not garnish.

- **Vision-grade PDF reading** is what makes pre-submit checking economical. Plan sets are messy — title blocks scattered, SLDs in vector or raster, spec sheets in 4 different layouts per manufacturer. Five years ago this required custom OCR + brittle templates. GPT-4o-class vision now reads them as well as a junior plan reviewer.
- **Cross-document reasoning** — "the SLD says REP-1 but the spec sheet PDF is labeled REP, and the contract lists REP-1A; is that a flagged inconsistency for SCE Rule 21?" — is exactly what an LLM is good at and what brittle rule engines are bad at. This is why CivCheck's AHJ-side product works and why a brittle template-driven QC tool would not.
- **Code-year-aware grading.** Three years of NEC text + every AHJ amendment + every utility checklist all live in a structured rule library; the LLM applies the right rule set to the right plan set. Rule library is curated, but the reading + reasoning is LLM.

Remove the AI and the product is a checklist PDF.

## 7. Localization angle (if any)

US-only by design. AHJ + NEC + utility-rule fragmentation is the moat. Each AHJ checklist + each utility tariff is a separate rule pack. Trying to do this for the EU or Australia (different code base entirely) is a v3 conversation, not v1.

Within the US, sequence: California first (most rejections, fastest NEC 2026 adoption, most pain), then Texas + Florida + AZ + NC. Six states cover ~60% of residential install volume.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Solo plan:** $99/mo, 20 packet checks/mo, 1 user.
  - **Shop plan:** $249/mo, unlimited checks, 5 users, AHJ-memory, audit trail.
  - **Pay-as-you-go:** $35 per packet check (for tire-kickers and seasonal installers).
  - **Add-on:** $99/mo per state for rule-pack updates beyond the home state.
- **ACV:** ~$2,400/yr blended (most customers on Shop plan).
- **Math to $1M ARR:** ~420 paying installer shops. Across ~6,000 active US residential installers, that's a 7% penetration. Plausible.
- **Math to $5M ARR:** ~2,100 shops, plus adjacent expansion: outsourced engineering shops (GreenLancer, Wattmonk, PEs) using it as a workflow tool internally → adds $500K–$1M ARR; insurance carriers underwriting solar warranties paying for permit-defect data → adds $500K–$1M ARR; AHJ partnerships (white-label the same engine for the city plan reviewer side) → $500K–$1M ARR.
- **Expansion path:** add the EV-charger permit checker (NEC 625), then commercial solar (NEC 690 for >25 kW with three-phase calcs), then standalone battery storage permits.

## 9. Go-to-market wedge — first 100 customers

- **NABCEP directory scrape + Solar Power World Top Solar Contractors list.** ~3,000 named, certified installers with company name, city, NABCEP cert ID. Personalized email: "I ran your last 3 publicly visible AHJ submissions through PermitSanity. Here are 4 things that will probably get flagged on your next submission. Want a free trial?" 5% reply rate target → 150 conversations → 30 paying customers.
- **r/solar + DIY Solar Power Forum + the Mayfield Renewables / Solar Power World comment sections.** Long-form posts: "I analyzed 200 publicly-posted permit rejection letters; here are the 7 errors that cause 80% of them." Drives waitlist.
- **IronRidge / Enphase / Tesla installer Slack-and-distributor channels.** Distributors love this because installer churn hurts their volume. Co-marketed webinar: "What changes in NEC 2026 and how to not lose $5K per rejection."
- **Permit-design subcontractor partnerships, NOT the leaders.** Approach the second-tier plan-set shops (SolarPlanSets, Sun Supply PV, Wattmonk, Planet Plan Sets) — they fear losing customers to GreenLancer's scale. Offer them PermitSanity as a value-add ("we run our plan sets through PermitSanity before delivery") in exchange for referrals.
- **California-specific PG&E Rule 21 / SCE Rule 21 angle.** Free public dashboard tracking "interconnection rejections this month by AHJ + reason," seeded with our own scraping. Becomes the de-facto data source the trade press cites → installers find us through media.

## 10. Build complexity — justification

Medium. The hard part isn't the AI — it's curating + maintaining a structured rule library across NEC code years × top 500 AHJs × top 30 utilities, plus pulling reviewer-specific patterns from real rejection letters. Founding team needs one strong AI engineer (RAG + structured outputs + vision pipelines) plus one solar-domain hire (ex-installer, ex-PE, or ex-AHJ plan reviewer) on a 4-month MVP. v1 covers California + 50 AHJs + NEC 2023 & 2026 + PG&E + SCE + SDG&E. Off-the-shelf: GPT-4o / Claude vision, Postgres, basic Next.js dashboard, Stripe, Hubspot. Custom: rule library (curated content) + plan-set parser + AHJ-memory feedback loop.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Advice tool. PE sign-off stays with installer. No engineering-of-record liability. |
| Ethical — no harm / dark patterns | ✅ | Tool surfaces real defects; doesn't fabricate compliance. |
| Market exists (evidence above) | ✅ | $2K–$5K per rejection × 40% of delays × 6K+ installers. |
| 1–5 person team can build this | ✅ | 1 AI eng + 1 domain hire, 4 months to v1. |
| Launchable with <$50K / ₹40L | ✅ | LLM API + Next.js + Postgres. ~$15K–$30K to MVP. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | $2K–$5K hit per rejection, repeated multiple times/month. Hair-on-fire in a contracting market. |
| Demand evidence | 15 | 12/15 | Strong: industry articles, cost data, CALSSA filing, NREL research. Weak: zero direct cold-outreach validation yet. |
| Build feasibility | 15 | 12/15 | LLM-readable PDFs + curated rule library is well-trodden. AHJ rule curation is the long tail. |
| Distribution clarity | 15 | 12/15 | NABCEP directory + Top Solar Contractors list + IronRidge channels are concrete. Conversion is unproven. |
| Revenue mechanics | 15 | 11/15 | $99–$249/mo lands inside what installers already pay for Aurora ($159+). ROI math is one rejection. |
| Time to first revenue | 10 | 8/10 | Self-serve free trial → paid in 4–6 weeks of launch. Pilot 5 paid design partners pre-launch. |
| Defensibility | 10 | 8/10 | AHJ-memory + curated rule library compound; first-mover in the niche; switching cost grows with project history. |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (vision + structured-output AI pipeline) · `domain-expertise-required` (NEC + AHJ + utility plan-review knowledge — must hire or co-found with an ex-plan-reviewer or ex-installer head of design)

### Key assumptions to validate (3–5)

1. **Assumption:** 1–10-person installers will pay $99–$249/mo for a checker, not just use ChatGPT for free. **How to test:** 30 cold calls / Looms to NABCEP-listed shops in CA with a personalized "we found 4 likely rejections in your last submission" demo. Goal: 10% trial signups, 25% trial-to-paid.
2. **Assumption:** GPT-4o-class vision reads real plan sets reliably enough that the false-positive rate on findings is <15%. **How to test:** Hand-score 100 plan sets against a senior-PE benchmark; require ≥85% precision before charging.
3. **Assumption:** The top 50 California AHJs cover enough volume for v1 to be useful. **How to test:** Pull 6 months of public AHJ-permit data; confirm top 50 cover ≥60% of residential installs in CA.
4. **Assumption:** Senior-PE-level rule curation can be done by a contractor solar engineer in <10 hrs/AHJ. **How to test:** Hire one ex-plan-reviewer for 40 hours and ship 4 AHJs end-to-end; measure cost.

### Risk flags

1. **Market timing risk:** If the 2026 residential solar market shrinks 30%+ (worse than current 20% forecast), the addressable customer base contracts faster than we can onboard. Counter-bet: commercial / battery / EV-charger expansion still on 30% ITC through 2027.
2. **Incumbent risk:** Aurora Solar adds a free plan-checker tier and bundles it. Counter: Aurora's customer is the design seat; their checker would only verify designs *they generated*. PermitSanity's wedge is reading **anyone's** PDF.
3. **AHJ data freshness risk:** Rule packs go stale fast. NEC code cycles + AHJ amendments + utility tariff changes are constant. Need a content-ops budget from day 1, not just engineering. Underbudgeting this kills the product over 12 months.
4. **Liability creep:** Installers who follow PermitSanity advice and still get rejected will blame the tool. Mitigate with clear "advisory only, PE-of-record signs the plan" language and stored audit trail.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       Solo technical founder (AI/vision) + domain co-founder or first hire who is an ex-PE plan reviewer or ex-head-of-design at a small-to-mid solar installer
Time to revenue:        8–12 weeks (5 design-partner installers paying during MVP build)
Capital to launch:      $15K–$30K (LLM API + Postgres + 40 hrs of contracted plan-reviewer rule-curation)
Top 3 assumptions to validate first:
  1. 30 cold demos to NABCEP CA installers → ≥3 paid design partners at $249/mo within 30 days
  2. False-positive rate on findings ≤15% across 100 hand-scored plan sets vs. PE benchmark
  3. Top 50 CA AHJs cover ≥60% of residential install volume — confirms v1 scope is meaningful
Kill criteria:
  - Abandon if <2% trial-to-paid conversion after 100 trials
  - Abandon if false-positive rate stays >25% after 3 rounds of prompt + rule iteration
  - Abandon if Aurora Solar or Solargraf ships a free, equivalent standalone PDF-checker before our v1 ships
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull NABCEP CA installer directory + Top Solar Contractors CA list + 6 months of public r/solar permit-rejection threads. Build a list of 200 named shops with permit-coordinator contact info. Find 30 publicly-visible-on-permit-portals plan sets to test with.
- **Day 3:** Run the 30 plan sets through a Claude / GPT-4o vision prompt with a hand-curated NEC 2023/2026 + LA County / SF / SD AHJ checklist. Score the output: how many findings would a senior PE agree with?
- **Day 4–5:** Cold-DM + Loom-video the 30 shops behind the 30 plan sets, showing them the actual rejection-likely findings on their own publicly-posted submission. "Here's $2K–$5K of saved revision cost. Want a 30-day free trial?"
- **Day 5 decision:** Go if ≥3 of 30 (10%) book a paid pilot at $249/mo and ≥80% of findings hold up to a second-PE review. No-go if <2 paid pilots or precision <70%.
