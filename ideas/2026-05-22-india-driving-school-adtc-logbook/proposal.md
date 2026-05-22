---
title: "TrackPass — accreditation logbook for India's driving schools"
slug: india-driving-school-adtc-logbook
date: 2026-05-22
category: Compliance / India Motor Driving Schools
complexity: Medium
score: 72
verdict: GO
confidence: Medium
oneLiner: "Captures every training hour on a phone and hands a driving school the inspection-ready registers an RTO officer demands each month."
tags:
  vertical: Compliance
  model: SaaS
  geography: India
  secondary: [WhatsApp-first, Multilingual, Mobile-first, Compliance-driven, SMB]
axes:
  problem: 15
  demand: 11
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [operations-heavy, domain-expertise-required]
featured: false
---

# TrackPass — accreditation logbook for India's driving schools

## 1. One-liner

Captures every training hour on a phone and hands a driving school the inspection-ready registers an RTO officer demands each month.

## 2. Trend signal — why now?

India spent four years quietly rewriting how a driving licence gets earned, and the change landed hard in 2025.

- The Central Motor Vehicles Rules added **Rules 31B–31J** (the Accredited Driver Training Centre, or ADTC, framework) effective July 2021. An ADTC that completes a candidate's course issues **Form 5B**, which — per MoRTH's own June 2024 clarification — **exempts that candidate from the RTO driving test**. An ordinary Rule-24 driving school issues plain Form 5, which exempts nobody. That is a direct, paid competitive advantage dangling in front of every school owner.
- From **July/August 2025**, certified practical training became effectively mandatory: candidates must log **at least 30 hours of structured training** at a certified school before the permanent-licence stage, and RTOs standardized the test-track modules nationwide. Schools are now being told to upgrade tracks, instructors, and "technology-based monitoring systems."
- Driving schools are **inspected every month on a rotation basis** by RTO officers, who can demand Form 14 (the training register), Form 5/5A attendance records, and instructor logs — and licensees must **preserve those records for five years**. Most schools still keep this in paper ledgers and a WhatsApp group.

So the squeeze is real: more mandatory hours to document, a monthly inspector at the door, and a lucrative accreditation tier (ADTC) that demands clean digital records to even qualify. The existing "driving school ERP" products (DSMS, Hashstudioz, Teachworks-style tools) are generic scheduling and fee-collection software. **None of them is built around surviving the inspection or qualifying for ADTC.** That gap is the opening.

Provenance:
  - Signal 1 (demand): India's July/Aug 2025 rules — 30 hours of certified training now mandatory, standardized RTO test tracks, schools told to add tech-based monitoring — https://www.cardekho.com/india-car-news/new-rto-rules-for-driving-licence-in-india-are-driving-schools-ready-32592.htm — 2025
  - Signal 2 (economic): MoRTH clarification — ADTC Form 5B certificate exempts holder from the RTO driving test; ordinary Form 5 does not — https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2022428 — June 2024
  - Signal 3 (feasibility / compliance burden): Driving schools inspected monthly on rotation; Forms 5/14/15 must be preserved 5 years and produced on demand — http://rtocircular.blogspot.com/2010/10/driving-school.html — confirmed current under CMVR
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents sell a *calendar*. The school owner's actual nightmare is the *inspection* and the *upgrade path*.

A typical Tier-2 driving school owner runs 2–4 cars, 2–3 instructors, and 40–120 active learners. He keeps a paper Form 14 register, scribbles attendance, and reconstructs it the night before an RTO officer visits. If the register doesn't tally with the certificates issued, that's a notice — and at renewal it's leverage. Meanwhile the school down the road that got ADTC-accredited can advertise "no RTO test, guaranteed" and quietly charges ₹3,000–8,000 more per student.

Generic ERP software treats the register as an afterthought — a report you *can* export if you happened to enter everything perfectly all month. Nobody enters everything perfectly. The 10× move is to flip it: make the **inspection-ready register the product**, captured automatically as a by-product of running each lesson from a phone, so the paperwork is *always* current and an ADTC application is a button, not a six-month scramble.

This is not a disruption of a software incumbent — it's a disruption of the **paper ledger and the pre-inspection panic**, with a regulatory tailwind doing the selling.

## 4. Target market

- **Primary customer:** Owner-operator of a single-branch motor driving school in a Tier-2/Tier-3 Indian city — 2–5 training vehicles, 2–4 instructors, 40–150 learners enrolled at any time, annual revenue ₹15–60 lakh. The decision-maker is the owner himself, often also an instructor.
- **Why they buy:** In their words — "RTO inspection aaya toh register match nahi karta," "ADTC banना hai but paperwork samajh nahi aata," "instructor bolta hai class hui, student bolta hai nahi hui." They are afraid of the renewal, and they are watching the ADTC-accredited competitor steal higher-paying students.
- **Rough TAM reasoning:** India has tens of thousands of RTO-registered motor driving schools (every district has dozens; ~1,000+ RTOs). A conservative serviceable base of **25,000–40,000 schools**. At ₹1,500/mo average, even 3% penetration (~1,000 schools) is ~₹1.8 crore ARR; 8% is a ₹5 crore-plus business.
- **Why now for them:** The 30-hour mandate means more documented training per student than ever; the ADTC tier turns clean records into pricing power; and the monthly inspection rotation is being enforced more visibly post-2025. The pain moved from "annoying" to "this affects my licence and my revenue."

## 5. Product sketch (MVP)

- **Phone-first lesson capture:** instructor opens the app, picks the learner, taps start/stop — each session is timestamped, GPS-stamped, and the running 30-hour total per learner is visible to everyone.
- **Learner self-confirm:** at lesson end the learner confirms attendance via a one-tap WhatsApp message, killing the "class hui / nahi hui" dispute and creating a second-party record.
- **Auto-built Form 14 training register** and Form 5/5A attendance — always current, exportable as the exact format an RTO officer expects, with a clean five-year archive.
- **Inspection mode:** a single tap produces a tidy PDF pack — register, attendance, instructor logs, vehicle list — so an officer's visit is a 5-minute handover, not an all-nighter.
- **ADTC-readiness checklist:** maps the school's current records and infrastructure against Rule 31B–31J requirements and flags exactly what's missing before they apply.
- **Vehicle & instructor calendar:** lightweight scheduling so cars and instructors don't double-book — table stakes, kept deliberately simple.
- **Fee ledger with WhatsApp reminders:** track each learner's course fee and nudge dues — included so TrackPass replaces the school's whole paper stack, not just one sheet.
- **Owner dashboard in Hindi/English:** active learners, hours logged today, registers up to date yes/no, dues outstanding.

## 6. AI angle — what's load-bearing

AI does the work that makes the records *trustworthy without typing*:

- **Voice-note logging:** an instructor speaks "Rahul ne aaj parallel parking aur hill start kiya, 1 ghanta" in Hindi after a lesson; the model transcribes, extracts learner, skills covered, and duration, and files it into Form 14. Typing on a phone between lessons is exactly why paper wins today — voice removes the friction.
- **Register reconciliation:** the model cross-checks logged hours, learner confirmations, certificates issued, and the calendar, and surfaces mismatches ("3 learners issued Form 5 with under 30 hours logged") *before* an inspector finds them.
- **ADTC gap reading:** parsing the messy Rule 31 requirements and the school's own uploaded documents into a plain-language "you are missing X, Y, Z" list.

Remove the AI and you're back to a data-entry app the owner won't keep current — which is precisely why the paper ledger still wins. The AI is what makes the logbook *stay true on its own*.

## 7. Localization angle

This is India-first by construction — it has no meaning anywhere else.

- **Forms and rules are CMVR-specific:** Form 5, 5A, 5B, 14, 15, Rules 24 and 31B–31J. A global "driving school CRM" cannot touch this.
- **Language:** instructors and owners operate in Hindi and regional languages; voice capture and the dashboard must be multilingual. English-only kills adoption.
- **Channel:** WhatsApp is the spine — learner confirmations, fee reminders, owner alerts. No separate app to install for learners.
- **Price:** must land at ₹999–2,499/mo. A $49/mo global tool is a non-starter for a ₹20-lakh-revenue school.
- **State variance:** accreditation is granted by State Transport Authorities, so register formats and inspection norms vary by state — a local team that encodes those quirks has a real edge over any generic product.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹1,499/mo per school (single branch) on the standard plan; ₹2,499/mo "ADTC plan" adding the readiness checklist, document vault, and priority support. Annual prepay discount to cut churn.
- **ACV:** ~₹18,000–22,000 (₹1,500–1,800 blended monthly).
- **Rough math to $1M ARR (~₹8.5 cr... target ₹1M ≈ ₹8.3 cr is too high — use ₹1M USD ≈ ₹8.3 cr):** $1M ARR needs roughly **4,600 schools at ₹1,500/mo**. That's a big number; a more honest near-term milestone is **₹1 crore ARR ≈ 550 schools** — very reachable within 18 months district by district.
- **Rough math to $5M ARR:** needs ~23,000 schools or a higher ACV. Realistic path is ACV expansion, not just logo count (see below) — $5M is the optimistic ceiling, not the base case. Base case is a healthy ₹3–5 crore ARR business.
- **Expansion path:** (1) per-vehicle add-on as schools grow fleets; (2) a small **per-certificate fee** when schools issue Form 5B at scale post-ADTC; (3) a learner-facing "training progress" upsell parents will pay for; (4) instructor licence-renewal and refresher-course tracking. ACV can plausibly climb from ₹18K toward ₹35–45K per school over 2–3 years.

## 9. Go-to-market wedge — first 100 customers

- **RTO directory scrape, district by district:** every State Transport Department publishes lists of authorized motor driving schools (e.g. UP, Delhi, Maharashtra portals). Scrape one state, get phone numbers, and run WhatsApp + call outreach. Pitch is one line: "RTO inspection ke liye register hamesha ready — 5 minute mein, paper nahi."
- **Ride the ADTC anxiety:** target schools that have *not yet* gone ADTC in districts where a competitor has. The hook — "your neighbour charges ₹5,000 more per student because he's accredited; here's your checklist to catch up" — sells itself. ADTC-readiness is the demo.
- **Driving-instructor associations and RTO agent networks:** most districts have a motor driving school association that meets and shares a WhatsApp group. Land 2–3 vocal owners per district, demo at one association meeting, let word travel. These owners all know each other.
- **Pre-inspection trigger campaign:** since inspections rotate monthly, time outreach to schools in the upcoming inspection rotation — "officer is coming this month, want your register sorted in an afternoon?" Highest-intent moment possible.
- **Maruti / brand-affiliated schools as a later channel:** branded school chains (Maruti Suzuki Driving School and similar) run dozens of franchised branches with consistent compliance needs — one chain deal is 30–80 branches.

First 100 is a single-state, on-the-ground sprint: pick 3–4 districts, work the association groups and the inspection calendar, expect to close owners who are actively scared or actively ambitious.

## 10. Build complexity — justification

**Medium.** The core — phone lesson capture, voice transcription via off-the-shelf multilingual speech models, WhatsApp Business API for confirmations and reminders, PDF register generation — is all standard, buildable by 2–3 people in roughly 12–16 weeks. The genuine work is **domain encoding**: getting Form 14/5/5A formats exactly right, mapping Rule 31B–31J into a usable checklist, and absorbing state-by-state variation. That's research and customer-interview effort, not engineering risk. No custom models, no hardware, no novel infrastructure.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Record-keeping aid; the school remains the licensee and certifier. No regulated activity performed by the product. |
| Ethical — no harm / dark patterns | ✅ | Improves training documentation honesty; learner self-confirm reduces fake-attendance. Net positive for road safety. |
| Market exists (evidence above) | ✅ | Tens of thousands of schools, paid ERP category already exists, fresh regulatory pressure. |
| 1–5 person team can build this | ✅ | 2–3 people, ~12–16 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Standard web/mobile stack + API costs; bootstrappable well under ₹40L. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring, money- and licence-linked pain (monthly inspection, ADTC revenue gap). Not quite hair-on-fire daily — the panic spikes monthly and at renewal. |
| Demand evidence | 15 | 11/15 | Strong regulatory signal + existing paid ERP category. Docked because direct "owners begging for this" verbatim evidence is thin — driving-school owners are not loud online. |
| Build feasibility | 15 | 11/15 | Off-the-shelf stack; the drag is domain encoding and state variance, not tech. |
| Distribution clarity | 15 | 11/15 | Named lists (RTO directories), named channels (associations), high-intent timing (inspection rotation). On-the-ground and slowish, hence not higher. |
| Revenue mechanics | 15 | 11/15 | Clear pricing inside the wallet; ₹1 cr ARR is reachable. $5M is a stretch — honest math docks it. |
| Time to first revenue | 10 | 8/10 | Short trial then paid; pre-inspection urgency can close fast. First rupees within 6–8 weeks of launch. |
| Defensibility | 10 | 5/10 | Execution + accumulating compliance-format knowledge + workflow lock-in (5-year archive lives here). Copyable, but a focused head start and state-by-state depth hold a clone off. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`operations-heavy` · `domain-expertise-required` — needs district-level field selling and someone who genuinely understands CMVR forms and RTO inspection behaviour. A founder who has dealt with an RTO has a real edge.

### Key assumptions to validate (3–5)

1. **Assumption:** School owners will pay ₹1,499/mo for inspection-readiness, not just scheduling. **How to test:** 30 in-person owner interviews across 3 districts; show the register mockup, ask for a pre-order at price.
2. **Assumption:** Instructors will actually log lessons by voice between classes. **How to test:** two-week paper-shadow pilot with 5 schools — measure logging compliance vs the paper ledger.
3. **Assumption:** The ADTC upgrade is a strong enough carrot to drive purchase. **How to test:** count how many of 30 interviewed owners are actively trying to get accredited and would pay for a readiness tool.
4. **Assumption:** Register/form formats are stable enough that one product covers a state without per-RTO custom work. **How to test:** collect actual Form 14 samples from 10 schools in 2 states; compare variance.

### Risk flags

1. **Regulatory risk:** CMVR rules and ADTC norms are still evolving; a format change forces product updates. Mitigated — change is also what *creates* the need; encode flexibly.
2. **Adoption risk:** If instructors don't log in real time, the register decays and the value evaporates. The voice-capture friction-kill is the whole bet; weak voice UX kills the product.
3. **Distribution speed:** District-by-district field selling is slow and unglamorous. No paid-ads shortcut — this is a grind, and the ARR ramp reflects that.
4. **Defensibility:** A determined ERP incumbent could bolt on an "inspection mode." Speed and depth of state coverage are the only moat.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Operations-led founder with RTO/motor-vehicle domain knowledge + one mobile engineer
Time to revenue:        6–8 weeks after launch (pre-inspection urgency closes deals)
Capital to launch:      ₹8–15 lakh ($10–18K)
Top 3 assumptions to validate first:
  1. Owners pay ₹1,499/mo for inspection-readiness — 30 in-person interviews with price-tagged pre-order ask
  2. Instructors log lessons by voice in real time — 2-week shadow pilot with 5 schools, measure compliance
  3. ADTC upgrade is a real purchase driver — count actively-accrediting owners among the 30 interviewed
Kill criteria:
  - Abandon if <8 of 30 interviewed owners will pre-order at ₹1,499/mo
  - Abandon if instructor real-time logging compliance is <60% after the 2-week pilot
  - Abandon if Form 14 formats vary so wildly per RTO that no single product covers a state without custom work
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the authorized-driving-school directory for one state (e.g. UP or Maharashtra). Pick 3 districts. Build a one-page Hindi mockup of the auto-generated Form 14 register and the inspection PDF pack.
- **Day 3–4:** Visit 30 school owners in person. Show the mockup. Ask three things: (a) walk me through your last RTO inspection, (b) are you trying to become ADTC-accredited, (c) would you pay ₹1,499/mo for this — sign here to pre-order. Collect 10 real Form 14 samples to gauge format variance.
- **Day 5:** Decide. **Go** if ≥8 of 30 owners pre-order at price *and* the Form 14 samples are consistent enough to productize per-state. **No-go** otherwise.

The result is falsifiable: a count of signed pre-orders at a real price, and a measured variance in actual register formats. Not vibes.
