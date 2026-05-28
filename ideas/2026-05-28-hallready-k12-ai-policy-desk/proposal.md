---
title: "HallReady — AI-policy desk for K-12 small school districts"
slug: hallready-k12-ai-policy-desk
date: 2026-05-28
category: EdTech / US K-12 Small & Mid Districts (500–15,000 students)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Builds the AI-policy packet, vendor inventory, and parent opt-in workflow K-12 small districts now owe by 2026-27."
tags:
  vertical: EdTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder]
axes:
  problem: 15
  demand: 12
  build: 12
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 6
founderFit: [content-heavy, domain-expertise-required]
featured: false
---

# HallReady — AI-policy desk for K-12 small school districts

## 1. One-liner

Builds the AI-policy packet, vendor inventory, and parent opt-in workflow K-12 small districts now owe by 2026-27.

## 2. Trend signal — why now?

Three things landed in the same six-month window and they all converge on the small-district superintendent's desk:

**State laws got teeth.** Texas's Responsible AI Governance Act (TRAIGA) became effective Jan 1 2026, mandating disclosure for AI used in public-sector decisions. Oklahoma SB 1734 (Responsible Technology in Schools Act) passed the Senate 42-0 on March 23 2026, requires every district to adopt a written AI policy before the 2027-28 school year, and explicitly requires districts to publish a public AI Tool Inventory plus annual parent disclosure. South Carolina HB 5253, filed Feb 24 2026, goes further: written opt-in parental consent before any AI use in instruction, plus annual disclosure, plus no academic penalty for opt-outs. NYC Public Schools posted a preliminary AI policy in March 2026 requiring vendor disclosure and a public approved-tools inventory. Vermont's Department of Education published a 50-page AI guidance framework Jan 23 2026. FutureEd tracked 134 AI-in-education bills introduced across 31 states in the 2026 session.

**The data shows districts are scrambling.** The CoSN/AASA "U.S. State of EdTech 2026" report (published May 2026, n=600+ leaders, 44 states) found 21% of districts still have no AI guidelines — down from 43% in 2025, but the remaining 21% of 13,318 districts is ~2,800 with zero policy by mid-2026, and the 79% who "have guidelines" mostly mean a one-page Acceptable Use Policy bullet, not the vendor-questionnaire + parent-disclosure + opt-in-tracker workflow the new laws demand. An April 2026 EdSource article reported San Diego County districts "scrambling to create rules, policies and best practices" with director-of-ed-tech Amy Fousek's line: "we gave students keys to the sports car before we gave them any drivers' ed."

**The execution gap is the product.** Lynwood Unified built an 18-point AI vendor fact sheet by hand, signed off by a six-person taskforce. LearnPlatform (Instructure) gives away a free Inventory Dashboard — but it's *discovery* only: scrape the proxy logs, see what URLs students hit, build a list. It doesn't run the vendor questionnaire, draft the parent disclosure, track opt-outs, or assemble the board-meeting policy packet. eSpark, AIforEducation, MagicSchool publish *templates* — Word docs the superintendent prints, fills in, and re-types into the SIS. No one is selling the workflow.

Provenance:
  - Signal 1: Oklahoma SB 1734 passed Senate 42-0 March 23 2026, requires every district AI policy + public AI Tool Inventory + annual parent disclosure before 2027-28 SY — https://www.future-ed.org/legislative-tracker-2026-state-ai-in-education-bills/ — May 2026
  - Signal 2: CoSN/AASA US State of EdTech 2026 report — 21% districts have no AI guidelines, 18% principals report district guidance — https://www.cosn.org/wp-content/uploads/2026/05/U.S.-State-of-EdTech-2026.pdf — May 2026
  - Signal 3: South Carolina HB 5253 filed Feb 24 2026, requires written opt-in parental consent before AI in instruction + annual disclosure — https://www.scstatehouse.gov/sess126_2025-2026/bills/5253.htm — Feb 2026
  Category: Regulatory arbitrage

## 3. The opportunity

State legislatures wrote the requirements, but they didn't ship the form. The Oklahoma model policy lists ten obligations a district must satisfy — written approval workflow, data-protection minimization, family transparency, AI Tool Inventory, periodic review, educator-directed use, no-AI-for-high-stakes-decisions clause, opt-out preservation, annual disclosure, vendor due-diligence record — and leaves the district to figure out *how*. Small and mid-size districts (500–15,000 students) don't have a Chief AI Officer or a Director of EdTech Compliance. The job lands on the superintendent, the IT coordinator, or whoever drew the short straw on the AI taskforce.

The incumbent answers are three:

- **LearnPlatform (Instructure) Inventory Dashboard** — free but discovery-only, scrapes traffic data, doesn't generate any of the documents the law requires. Real product is the paid Instructure/Canvas LMS bundle sold to large districts via direct sales. Small districts don't get a sales rep.
- **edprivacy / EducationFramework / TEC SDPA** — $1/student/yr (TEC capped at $4,999) student-data-privacy SaaS focused on FERPA/COPPA, not on AI policy. Vendor-agreement library + DPA tracking. No AI Tool Inventory module yet, no parent opt-in workflow.
- **Word docs + Google Forms + a spreadsheet.** What most small districts will actually default to. Costs 40–80 staff-hours per policy cycle, gets sloppy, gets out of date the minute a teacher signs up for a new GenAI tool, exposes the district to a parent-complaint lawsuit under SC HB 5253 or OK SB 1734.

An AI-first, narrowly-scoped product can collapse the 40–80 hours into a half-day workflow: vendor questionnaire goes out by email, comes back, gets parsed and risk-scored by an LLM, drops into the AI Tool Inventory; the inventory generates the annual parent disclosure PDF; the parent opt-in form goes out via the district's existing email/SIS integration; opt-outs flow into a roster the LMS/teacher can honour. The district pays $99–$499/mo to never write the policy in Word again.

## 4. Target market

- **Primary customer:** US K-12 school districts in the 500–15,000-student band, located in any state but especially in states with active 2026 AI-policy mandates (TX, OK, SC, NY, VT, IN, WA, CA). Buyer is the Superintendent, Director of Technology, or Director of Curriculum & Instruction — the person whose name shows up next to the policy on a board agenda. Roughly 7,500 of the 13,318 US districts sit in this band; ~2,800 still had no AI policy as of May 2026; another ~6,000 have a thin one-page AUP that fails the new state requirements.
- **Why they buy:** Their state DPI or attorney general just told them they need a public AI Tool Inventory + a written policy + annual parent disclosure + an opt-in/opt-out tracker by the start of the 2026-27 school year. They have one part-time IT person and a superintendent juggling six other compliance fires (Title IX, special-ed, Title I, ESSA, cybersecurity). They do not have the calendar to write a 30-page policy from scratch and they do not have the procurement runway to onboard LearnPlatform's enterprise SKU.
- **Rough TAM reasoning:** 7,500 small/mid districts × $1,500–3,000 ACV = $11M–$22M serviceable market in year one of the law cycle. Expanding to 13,318 total districts plus charter networks plus diocesan/Catholic school networks pushes serviceable to $25M–$50M. We don't need market dominance; capturing 1,500 districts at $2K = $3M ARR is the realistic shape.
- **Why now for them:** The 2026-27 school year starts in August–September 2026 in most states. Board agendas in May–August 2026 are where the policy gets ratified. If a parent files a complaint after Sept 2026 in SC or OK alleging the district allowed AI use without opt-in, the district faces an open-records request and a board-meeting headline. Risk is real and dated.

## 5. Product sketch (MVP)

- **AI Tool Inventory** — auto-imports the district's allow-listed and observed AI tools (CSV from Lightspeed/GoGuardian/Securly logs, or manual add). Each tool gets an entry with vendor, purpose, grade range, data flows, opt-in status.
- **Vendor questionnaire engine** — sends the Oklahoma-model-aligned questionnaire (training data sources, PII handling, model type, age gates, FERPA/COPPA posture, deletion policy) to vendor email. LLM parses responses, flags missing answers, scores risk against a district-configurable matrix.
- **Policy packet generator** — outputs the board-ready PDF: written AI policy aligned to the district's state mandate (OK, SC, TX, NY, VT presets), AI Tool Inventory appendix, vendor risk summary, opt-in/opt-out procedure.
- **Parent disclosure mailer** — generates the annual parent letter (English + Spanish presets, expandable), sends via SIS integration (PowerSchool / Infinite Campus / Skyward) or plain email blast, tracks opens and opt-out responses.
- **Opt-in/opt-out tracker** — per-student roster of who opted in/out of which tool. Exportable to LMS (Canvas/Schoology/Google Classroom) so teachers see a per-class "do not use AI with these 4 students" flag.
- **Public AI Tool Inventory page** — auto-generated public-facing page (subdomain or embed) the district links from its website to satisfy OK / NYC / Indiana "public inventory" mandates.
- **Renewal calendar** — annual review reminders, vendor re-questionnaire on a 12-month rolling cycle, board-meeting export bundle.

## 6. AI angle — what's load-bearing

Three load-bearing AI workflows. Remove any one and the product becomes a Word doc with a CRM:

1. **Vendor questionnaire parsing.** Vendors don't return clean structured answers — they reply with marketing PDFs, dodgy DPAs, or 4-paragraph email prose. LLM extracts the 18-point answer matrix and surfaces what's missing, contradictory, or evasive. This is the wedge over edprivacy's manual workflow.
2. **State-aligned policy drafting.** State laws differ — SC HB 5253 wants opt-in, OK SB 1734 wants opt-out, TRAIGA wants disclosure framing, NYC wants a public inventory. The product reads the district's state + grade levels + currently-used tools and drafts the policy in the right shape with the right citations. A solo IT coordinator cannot keep up with 31 active state bills. The LLM can.
3. **Parent-disclosure summarisation.** Each tool in the inventory needs a 2-sentence plain-English explanation of what it does and what data it sees. Generated from the vendor questionnaire output, written at a Grade-6 reading level, available in EN + ES presets. Today's process: someone in the superintendent's office Googles each tool and writes a paragraph.

Without the LLM, the product is "ed-privacy + a calendar." With it, the entire 40-80-hour annual policy cycle compresses to a half-day.

## 7. Localization angle (if any)

N/A — this is a US-only play. The wedge *is* state-level localization (TX, OK, SC, NY presets), but the product never leaves the US K-12 system. EU schools are governed by Article 26 EU AI Act + GDPR + national education ministries — different buyer, different cycle, different sales motion. India / SEA / LatAm school systems aren't running this regulatory wave yet. The Spanish-language parent-disclosure preset is required (Title VI Civil Rights Act compliance) but is not a separate market.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by enrolment band.
  - **Small** (under 1,500 students): $99/mo = $1,188/yr
  - **Mid** (1,500–7,500 students): $249/mo = $2,988/yr
  - **Large** (7,500–15,000 students): $499/mo = $5,988/yr
  - **One-shot** "Policy Packet Express" = $499 — gets the district their first board-meeting-ready packet in 7 days. Conversion path into annual SaaS.
- **ACV:** Blended ~$2,400/yr.
- **Rough math to $1M ARR:** 420 districts × $2,400/yr = $1.0M. Achievable in 12 months given ~2,800 districts have *no* policy today and another ~6,000 have a thin one. 5% saturation = 420.
- **Rough math to $5M ARR:** 2,080 districts × $2,400/yr = $5M. Roughly 28% of the 7,500-district SAM. Requires winning state-association endorsements in 3–4 states (AASA chapter, state superintendents' association, or state DPI listing) to drive that depth of saturation.
- **Expansion path:** (a) per-tool add-on — when district adds new AI tool above the included limit ($25/tool/yr); (b) ESSA-evidence add-on — pull effectiveness research per tool, $499/yr; (c) cybersecurity-incident binder ($199/incident) when the district has to disclose under a state breach law; (d) audit-defence pull when an open-records or parent complaint requires a binder.

## 9. Go-to-market wedge — first 100 customers

Concrete, dated, dollar-attached.

- **The 2,800-no-policy list.** CoSN survey + state DPI directories + NCES district data give a clean enrolment-banded list. Outbound: 7-day "Policy Packet Express" pitch via email + Loom demo to each superintendent and director of technology. Realistic: 20% open, 5% reply, 1.5% buy the $499 one-shot. 2,800 × 1.5% = 42 paying one-shot customers in 90 days. 60% upsell to annual = 25 annual.
- **State-association sponsorship in OK and SC first.** OK SB 1734 + SC HB 5253 are the cleanest forcing functions. Sponsor / co-host a $2,500 webinar with the Oklahoma State School Boards Association and the South Carolina Association of School Administrators. Pitch is "OK SB 1734 in 45 minutes — what your June board agenda must contain." Target: 200 registrants, 15% pilot conversion, 60% pilot-to-paid = 18 districts × $2,400 = $43K ARR per webinar.
- **EdTech-conference booth at TCEA (Texas) + CoSN + ISTE.** TCEA 2026 (Feb 2027 next cycle) and the regional EdTech leadership convenings. Booth + 20-minute breakout. ISTE alone draws 16,000 attendees, ~30% are district leaders. Expect 80 demo leads, 10% pilot, 6 paid = $14K ARR per event.
- **Twitter/X + EdWeek + EdSurge content distribution.** Bi-weekly thread "What OK SB 1734 actually requires of your June board agenda" — sponsored by the product. Drives ~50 inbound qualified leads in the back half of 2026.
- **Reseller / co-sell with the state-data-privacy consortium (SDPC) and Title IX firms.** SDPC member states route procurement to them; partner to add HallReady as an SDPC member offering, share revenue 70/30. SDPC has 22+ member states.

First 100 paying districts by month 9 is the target.

## 10. Build complexity — justification

Medium. Off-the-shelf stack: GPT-4-class for questionnaire parsing + policy drafting, Postgres for the inventory + opt-in roster, a transactional-email vendor for parent mailers, SIS integration via Clever or OneRoster (industry-standard, REST). The hard parts are: (a) keeping the state-law preset library up-to-date — that's content/legal work, not engineering, and is the moat; (b) handling the long tail of vendor-questionnaire response formats — solved by LLM extraction + manual fallback queue; (c) SIS integrations across PowerSchool, Infinite Campus, Skyward — each takes 1-2 weeks but unlocks meaningful conversion.

Estimate: 2 builders × 12-16 weeks to v1 (inventory + questionnaire + packet generator + one SIS), then 4-8 weeks per additional state preset and SIS integration. Solo founder shippable in 18-20 weeks. Calendar fits inside the May 2026 → August 2026 board-agenda window for early-adopter districts.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping districts comply with state law; FERPA/COPPA respected via design. |
| Ethical — no harm / dark patterns | ✅ | Pro-disclosure, pro-parental-rights workflow. No surveillance angle. |
| Market exists (evidence above) | ✅ | CoSN/AASA survey + 5 state laws + EdSource "scrambling" quote. |
| 1–5 person team can build this | ✅ | 2 builders × 12-16 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Mostly LLM API spend + a state-policy-content contractor. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real but seasonal — June-August board cycle is when intensity peaks. Off-cycle the urgency softens. Not hair-on-fire daily; hair-on-fire quarterly. |
| Demand evidence | 15 | 12/15 | Strong: CoSN/AASA n=600 survey, 5 named state bills, named-district "scrambling" quote. Slight discount for short track record — laws are weeks old, no enforcement actions yet. |
| Build feasibility | 15 | 12/15 | LLM + Postgres + SIS via Clever/OneRoster is straightforward. State-law content library is the slowest piece. |
| Distribution clarity | 15 | 11/15 | Named lists (CoSN survey, NCES, state DPIs), named conferences (TCEA, ISTE, CoSN), named partners (SDPC). K-12 sales cycle is famously seasonal — that drags the score. |
| Revenue mechanics | 15 | 11/15 | $1-5K wallet validated by edprivacy / TEC SDPA pricing. ACV math to $1M is tight (420 districts). $5M ARR requires real state-association endorsement work. |
| Time to first revenue | 10 | 7/10 | $499 one-shot can sell in <30 days; full annual SaaS lands on July-August procurement cycle. First revenue 6-8 weeks post-launch. |
| Defensibility | 10 | 6/10 | State-law content library compounds; SIS integration depth compounds; SDPC partnership is sticky. But a well-funded GovTech entrant (LearnPlatform/Instructure) can copy in 6-9 months — speed and state-association lock-in are the moats. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`content-heavy` · `domain-expertise-required`

Best-fit founder: ex-K-12 administrator or ex-ed-policy lawyer paired with a generalist full-stack engineer. The content work — keeping 31 state-bill presets accurate, knowing what a board agenda actually needs, having the credibility to email a superintendent and not get filtered — is the hard part. The engineering is mid-complexity.

### Key assumptions to validate (3-5)

1. **Assumption:** Small/mid district superintendents will pay $99-$499/mo for an AI-policy compliance SaaS within 60 days of demo. **How to test:** Cold-email 200 superintendents in OK + SC + TX with a 90-second Loom + $499 Policy Packet Express offer. Convert ≥3% to paid one-shot in 30 days, ≥40% of one-shots to annual.
2. **Assumption:** Vendor-questionnaire LLM extraction works on real vendor responses (PDFs, prose emails) with <15% required-correction rate. **How to test:** Collect 30 real vendor DPA / privacy-policy / AI-statement documents (publicly available from major K-12 AI vendors). Run extraction. Manually score accuracy on the 18-point Oklahoma matrix.
3. **Assumption:** State-association co-sell (OSSBA, SCASA) yields ≥10 districts per webinar at <$2,500 total spend. **How to test:** Pitch one webinar to OSSBA in July 2026; measure registration + pilot conversion.
4. **Assumption:** SIS integration via Clever / OneRoster removes meaningful friction (reduces opt-in roster setup time by 80%+ vs manual import). **How to test:** Build PowerSchool + Clever connector in week 6. Time-trial 5 pilot districts: manual CSV vs Clever sync.
5. **Assumption:** The Oklahoma + South Carolina + Texas + New York preset library covers 60%+ of US small-district enrolment by population. **How to test:** Map state-law-coverage to NCES district enrolment. Confirm coverage before expanding to next 4 states.

### Risk flags

1. **Platform/incumbent risk:** LearnPlatform (Instructure-owned) could extend its free Inventory Dashboard to include questionnaire + parent-disclosure within 12 months. Mitigation: ship state-aligned policy drafting + SDPC partnership before the incumbent's product cycle catches up. Also: small districts are not Instructure's commercial priority — that buys time.
2. **Regulatory timing risk:** SC HB 5253 may stall in committee; OK SB 1734 hasn't cleared the House yet (Senate only). If the laws weaken or slip a year, urgency softens. Mitigation: TRAIGA is law, NYC and Vermont guidance is live, 134 bills across 31 states — the wave is broad enough that no single bill failure kills the thesis.
3. **Sales-cycle risk:** K-12 procurement is famously slow and seasonal (May-August). A product launched in October waits 8 months for the next budget cycle. Mitigation: $499 one-shot "Policy Packet Express" lets districts pay out of discretionary/non-budgeted funds and bridges the procurement gap.
4. **Content-maintenance risk:** Keeping 10+ state-law presets current is a recurring content/legal cost. Mitigation: tracker subscription + part-time ed-policy contractor at $3-5K/mo is the operating cost; pass-through pricing.
5. **Free-template substitution risk:** AIforEducation, MagicSchool, Common Sense, state DPIs all give away free templates. Districts may DIY. Mitigation: the product's value is the *workflow* (questionnaire collection, opt-in roster, board-ready bundle) — not the template itself. Position against "templates + 40 hours of staff time."

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Ex-K-12 administrator or ex-ed-policy lawyer + 1 full-stack engineer
Time to revenue:        6–8 weeks (Policy Packet Express); 4-6 months (annual SaaS)
Capital to launch:      $25K–$40K (LLM API + content contractor + 2 founders, no salary)
Top 3 assumptions to validate first:
  1. Cold outbound to 200 OK/SC/TX superintendents → ≥3% buy $499 one-shot in 30 days
  2. LLM extraction on real vendor responses → <15% correction rate on 18-point matrix
  3. State-association webinar (OSSBA, July 2026) → ≥10 districts pilot per webinar
Kill criteria:
  - Abandon if LearnPlatform ships a competing AI-policy module before our v1 ships
  - Abandon if <2% of 200 cold-outbound districts buy the $499 one-shot within 60 days
  - Abandon if OK SB 1734 fails the House AND SC HB 5253 dies in committee AND no other state bill of similar shape passes by Sept 2026 (i.e. the regulatory wave breaks)
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Pull NCES district list, filter to 500-15,000 enrolment band in TX/OK/SC/NY/VT. Scrape superintendent contact info. Build list of ~500 superintendents + directors of tech.
- **Day 2:** Build a Carrd/Framer landing page describing "Policy Packet Express — your June board-ready AI-policy packet in 7 days, $499." Stripe payment link. No actual product yet.
- **Day 3:** Record 90-second Loom demo using a Word-doc mockup of the packet. Cold-email 100 superintendents with the Loom + landing-page link.
- **Day 4:** Post in r/k12sysadmin and the CoSN community + email 10 ed-policy reporters offering the "free template + workflow" pre-launch.
- **Day 5:** Decide go / no-go.
  - **Go criteria:** ≥3 paid Stripe checkouts at $499 OR ≥10 booked discovery calls OR ≥1 state-association webinar invite OR ≥2 named district pilots confirmed.
  - **No-go criteria:** <100 unique landing visits AND zero checkouts AND zero booked calls.

Falsifiable — Stripe is binary.
