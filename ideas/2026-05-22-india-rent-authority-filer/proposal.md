---
title: "TenancyTick — Rent Authority filer for Indian landlords"
slug: india-rent-authority-filer
date: 2026-05-22
category: Compliance / India PropTech
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Snap a tenant's Aadhaar and TenancyTick drafts, e-stamps and registers the tenancy with the state Rent Authority on time."
tags:
  vertical: PropTech
  model: SaaS
  geography: India
  secondary: [Compliance-driven, WhatsApp-first, Multilingual, SMB, AI-agent]
axes:
  problem: 15
  demand: 11
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, operations-heavy]
featured: false
---

# TenancyTick — Rent Authority filer for India's small landlords & brokers

## 1. One-liner

Snap a tenant's Aadhaar and TenancyTick drafts, e-stamps and registers the tenancy with the state Rent Authority on time.

## 2. Trend signal — why now?

Something structural just broke in Indian residential renting, and most of the market hasn't noticed yet.

For two decades, every landlord and broker in India used the same hack: write the rent agreement for **11 months** so you never have to register it. Registration under the Registration Act, 1908 kicked in only at 12 months, so 11-month leases were the universal dodge.

That hack is now dead in a growing list of states. Under the Model Tenancy Act framework — adopted aggressively by **Uttar Pradesh, Tamil Nadu, Andhra Pradesh and Assam**, with more states queued — **every** tenancy agreement, regardless of duration, must be registered with a state **Rent Authority** on a dedicated digital portal. Tamil Nadu's portal (tenancy.tn.gov.in) is explicit: "All tenancy agreements shall be compulsorily registered with the Rent Authority… **independent of the registration requirement under the Registration Act, 1908**." UP runs upawas.up.gov.in for the same purpose. Filing windows are 60–90 days from execution; miss it and the agreement isn't legally enforceable, plus the landlord carries liability.

This is not a hypothetical regulation. Police are already enforcing the adjacent verification norms: in April 2026 a Vadodara PG operator was **booked by Karelibagh police** for failing to produce registered rental agreements for his occupants. Landlords now have real downside.

The incumbents (NoBroker, eDrafter, LegalDesk) sell a one-off "online rent agreement" through an SEO funnel — a consumer transaction. They draft and e-stamp; the new Rent Authority *registration filing* is a separate step they don't own. RentOk and Crib serve PG/hostel bed-management. Nobody is selling the small whole-flat broker or the multi-flat individual landlord a **recurring compliance tool** that tracks every tenancy's filing deadline and pushes the registration through the state portal.

Provenance:
  - Signal 1: New Rent Rules 2026 — MTA-adopted states mandate Rent Authority registration of every tenancy within 60 days; non-compliance voids enforceability — https://www.mondaq.com/india/landlord-tenant-leases/1764982/ — 2026-05
  - Signal 2: Tamil Nadu Rent Authority portal states registration is compulsory for all durations and independent of the Registration Act, 1908 — https://www.tenancy.tn.gov.in/Home/RentAuthoriy — 2026-05
  - Signal 3: April 2026 — Vadodara PG operator booked by police for failing to produce registered rental agreements; paid drafting incumbents (NoBroker rated 1.9★ on delays) leave the recurring filing layer unserved — https://deshgujarat.com/2026/04/09/pg-operator-booked-in-vadodara-for-tenant-verification-lapses/ — 2026-04-09
  Category: Regulatory arbitrage

## 3. The opportunity

The opportunity is a new, recurring, deadline-driven compliance obligation that landed in the last 18 months and that no existing tool is shaped to serve.

Incumbents are mis-shaped two ways:

- **NoBroker / eDrafter / LegalDesk** sell a *single* rent agreement to a *consumer* who needs one this week. The buyer is a one-time customer; the product is a transaction, not a relationship. Reviews are brutal on turnaround (NoBroker's rental-agreement service sits at 1.9★ on review sites — "stuck for a month," "no one responds"). Critically, they hand you a stamped PDF and stop. The Rent Authority portal filing — the new legal requirement — is on you.
- **RentOk / Crib** serve PG and hostel operators with rent collection, bed occupancy and e-KYC. Good products, but built for the bed-by-bed PG model. They don't serve the small *residential broker* doing whole-flat tenancies, or the *individual landlord with 4–30 flats*, and they treat agreement registration as one stored PDF — not a tracked, per-state, deadline-bound filing pipeline.

A focused team can do one thing 10× better: treat each tenancy as a compliance object with a state, a 60-day clock, a filing status, and a renewal date — and drive it through the correct Rent Authority portal automatically. The wedge is not "make a rent agreement." It's "**never miss a Rent Authority deadline across 30 flats**."

## 4. Target market

- **Primary customer:** (a) Small residential rental brokers / property-management outfits in MTA-adopted metros (Chennai, Lucknow, Noida, Vijayawada, Guwahati) managing 20–200 active whole-flat tenancies with 0–3 office staff; (b) individual landlords with 4–30 flats who self-manage. Annual rent throughput ₹15L–₹3Cr.
- **Why they buy (in their words):** "Every move-in I'm WhatsApping a lawyer ₹800 for the agreement, then someone has to go register it — I've got eight agreements sitting unfiled and I don't even know which ones are past the deadline." The pain is not drafting; it's *tracking and filing across a portfolio* with personal liability attached.
- **Rough TAM reasoning:** MTA-adopted states cover 300M+ people. Conservatively, 150,000–300,000 small brokers and multi-flat landlords across these states have a portfolio large enough (≥5 tenancies) to feel recurring filing pain. Capturing 3,000–6,000 paying accounts is a ₹3–9Cr ARR business — comfortably inside the $1M–$5M target.
- **Why now for them:** The 11-month workaround stopped working in their state in the last 12–24 months. They are doing a *new* manual job they never had to do before, with a deadline and a penalty, and no tool tells them which tenancy is overdue.

## 5. Product sketch (MVP)

- **Aadhaar-photo intake:** snap the tenant's Aadhaar (and landlord's), product extracts name, address, ID — multilingual, handles regional-script cards.
- **MTA-compliant agreement drafting:** state-specific tenancy agreement generated from the new MTA template (not a stale 11-month template), with deposit caps, notice and escalation clauses pre-filled to that state's rules.
- **e-Stamp + e-Sign:** procures the correct state e-stamp value and runs Aadhaar e-sign — agreement execution end to end, no office visit.
- **Rent Authority filing:** pushes the executed agreement and parties' details into the correct state portal (tenancy.tn.gov.in, upawas.up.gov.in, etc.) as a property-manager-on-behalf submission, and tracks status: drafted → e-signed → filed → certificate issued.
- **Portfolio compliance board:** every tenancy as a row — state, filing deadline countdown, status, renewal date. Red flags anything inside 10 days of its 60-day window.
- **Police verification queue:** generates and routes the tenant police-verification request for the same tenancy (a parallel obligation in most of these states).
- **WhatsApp deadline nudges:** the operator and the landlord get a WhatsApp ping when a tenancy is approaching its filing deadline or renewal date.

## 6. AI angle — what's load-bearing

AI does two jobs that would otherwise need a paralegal:

1. **Document understanding from messy inputs.** Aadhaar cards photographed at an angle, in Tamil or Hindi script, with glare — vision models extract structured identity and address data reliably. This is the difference between "type everything in" and "snap and go." Remove it and the operator is back to a data-entry form for every move-in.
2. **State-aware clause assembly.** MTA rules differ by state (deposit caps, notice periods, escalation limits, filing windows). An LLM assembles a compliant agreement and flags clauses that violate the operator's state — e.g., a deposit above the cap. Without it, this is a lawyer reading the act per state.

If you stripped the AI out, you'd have a form plus a PDF template — which is exactly the commodity incumbent, and exactly what loses. The AI is what collapses a 90-minute per-tenancy chore into 4 minutes.

## 7. Localization angle

This is India-first by construction — the regulation, the portals, the documents and the buyer are all Indian:

- **Script/language:** Aadhaar OCR must handle Devanagari, Tamil, Telugu, Assamese — a generic global OCR product won't.
- **Portal integration:** each state Rent Authority runs its own portal; the moat is the operational know-how of filing on each one correctly.
- **Pricing:** a ₹999–4,999/mo tier works where a $49/mo tool would never land with a small Lucknow broker.
- **Distribution:** WhatsApp is the operating system — nudges, status, document collection all ride WhatsApp, not email.

There is no generic global product to localize against. The regulation *is* the product.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered SaaS subscription. Starter ₹999/mo (up to 15 active tenancies), Pro ₹2,999/mo (up to 75), Agency ₹4,999/mo (up to 200). Plus a pass-through per-filing fee (₹149/tenancy) covering e-stamp/portal handling beyond the plan quota. No per-document one-off sale — that's the incumbents' trap.
- **ACV:** Blended ~₹30,000/year (mix weighted to Pro).
- **Rough math to $1M ARR:** ~₹8.3Cr ARR ≈ 2,800 accounts × ₹30K. Across four-plus MTA states with 150K+ eligible operators, that's ~2% penetration.
- **Rough math to $5M ARR:** ~₹41Cr ARR — needs ~10,000 accounts and expansion: more states adopting MTA, plus upsell into rent-collection and renewal-management so ACV rises toward ₹50–70K. Realistic over 3–4 years if state adoption keeps spreading.
- **Expansion path:** land on compliance filing → expand to renewal automation → rent collection/reconciliation → tenant police-verification as a paid add-on. Each tenancy under management compounds ACV.

## 9. Go-to-market wedge — first 100 customers

- **Scrape RERA agent registries by state.** Tamil Nadu, UP and AP RERA portals publish registered real-estate agents with contact details. Filter to small residential agents in target metros; cold-call/WhatsApp with a 60-second screen-recording of one tenancy filed end to end. Target the 2,000 highest-density agents first.
- **Walk the rental-broker clusters.** Every Indian metro has physical broker streets and JustDial-listed local agencies. A two-week on-ground sprint in Chennai's broker belts — demo on a phone, sign them on the spot. This is operations-heavy and that's fine; it's also un-copyable by an SEO incumbent.
- **Target unfiled-agreement panic.** When a state publicises enforcement (like the Vadodara booking), run hyper-local Facebook/WhatsApp-group posts in landlord and broker groups: "Have unregistered tenancies? Check your 60-day deadlines free." Free portfolio audit → paid filing.
- **Lawyer/CA referral loop.** Small-town lawyers currently earn ₹500–1,500 per agreement. Offer them a referral cut to route their landlord clients — convert the incumbent channel into a distribution channel.
- **PG-adjacent landlords first.** Many multi-flat landlords also run a PG. Land them on the simpler whole-flat filing where RentOk doesn't compete.

## 10. Build complexity — justification

**Medium.** Document AI (Aadhaar OCR, clause assembly) is off-the-shelf — vision + LLM APIs. The genuine work is the **state portal integrations**: each Rent Authority portal differs, some have no API, and filing-on-behalf flows must be handled carefully and kept current as portals change. e-Stamp and Aadhaar e-sign go through established licensed aggregators. A 2–3 person team ships a single-state v1 (Tamil Nadu or UP) in 12–16 weeks; each additional state is a few weeks of integration work. The moat and the complexity are the same thing: the portal operational knowledge.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Filing on behalf of landlords is explicitly permitted (property manager / authorised representative on the portals). |
| Ethical — no harm / dark patterns | ✅ | Helps landlords *comply*; no exploitation. Aadhaar handling must follow DPDP norms — built-in, not optional. |
| Market exists (evidence above) | ✅ | Mandatory new obligation, active enforcement, paid incumbents in the adjacent drafting market. |
| 1–5 person team can build this | ✅ | 2–3 people, 12–16 weeks to single-state v1. |
| Launchable with <$50K / ₹40L | ✅ | Software + API costs + a small on-ground GTM budget. Well under cap. |

All five gates pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring, deadline-bound, with personal liability. Not hair-on-fire daily, but felt on every move-in and escalating as enforcement spreads. |
| Demand evidence | 15 | 11/15 | Strong regulatory signal + active enforcement + paid incumbents in adjacent drafting. Docked: no direct verbatim "I'd pay for a filing tracker" quotes yet — adjacent, not exact. |
| Build feasibility | 15 | 11/15 | Document AI is easy; multi-state portal integrations are the gnarly part and some lack APIs. |
| Distribution clarity | 15 | 11/15 | Named lists (RERA registries), physical clusters, enforcement-triggered campaigns. Operations-heavy but concrete. |
| Revenue mechanics | 15 | 11/15 | Subscription + per-filing pricing benchmarked against ₹500–1,500/agreement spend. ACV modest; needs volume. |
| Time to first revenue | 10 | 8/10 | Can pre-sell to brokers during build; revenue within 6–8 weeks of single-state launch. |
| Defensibility | 10 | 6/10 | Soft moat: portfolio lock-in (their tenancy data lives here) + per-state portal know-how. RentOk could extend down-market. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `operations-heavy`

Needs someone who understands Indian rental regulation state-by-state and is willing to do on-ground broker sales. Not a pure-technical founder play.

### Key assumptions to validate (3–5)

1. **Assumption:** Small brokers/landlords will pay a recurring ₹999–4,999/mo subscription rather than ₹800 one-off per agreement. **How to test:** 30 in-person interviews with brokers in Chennai and Lucknow, pitch both pricing models, measure stated and pre-commit conversion.
2. **Assumption:** State Rent Authority portals permit reliable property-manager-on-behalf filing without per-tenant in-person attestation. **How to test:** Manually file 10 real tenancies on tenancy.tn.gov.in and upawas.up.gov.in end to end; document every friction point and whether physical presence is forced.
3. **Assumption:** Enforcement fear is strong enough to drive action, not just awareness. **How to test:** Run the "free portfolio deadline audit" campaign in 5 landlord WhatsApp groups; measure audit-to-paid conversion.
4. **Assumption:** Aadhaar OCR is accurate enough on regional-script cards to beat manual entry. **How to test:** Run 200 real Aadhaar photos through vision models; measure field-level accuracy by language.

### Risk flags

1. **Platform dependency:** Built on state-run portals that can change UI, add APIs, or restrict on-behalf filing without notice. Mitigate by treating portal-ops as a maintained core capability and spreading across multiple states.
2. **Incumbent encroachment:** RentOk already does e-KYC + agreement + police verification for PG operators. If they extend down-market to whole-flat brokers, the differentiation narrows to the registration-tracking layer. Speed and broker-channel ownership matter.
3. **Regulatory timing:** MTA adoption is uneven — a target state could stall or amend rules, shrinking the addressable base. Mitigate by launching in the most-committed state (TN or UP) first.
4. **DPDP / Aadhaar handling:** Storing Aadhaar data carries compliance obligations under India's DPDP Act. Mishandling is a legal and reputational risk; minimal-retention design is mandatory, not optional.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Domain-savvy operator (Indian rental regulation) paired with one engineer; willing to do on-ground broker sales
Time to revenue:        6–8 weeks after single-state launch; pre-sales possible during build
Capital to launch:      ₹8–15 lakh ($10–18K)
Top 3 assumptions to validate first:
  1. Brokers pay recurring subscription vs one-off — 30 in-person interviews, two MTA-state metros
  2. Portals allow reliable on-behalf filing without per-tenant attestation — manually file 10 real tenancies
  3. Enforcement fear converts to action — free deadline-audit campaign in 5 landlord WhatsApp groups
Kill criteria:
  - Abandon if <15% of 30 interviewed brokers will pre-commit to a recurring plan
  - Abandon if state portals legally force per-tenant in-person attestation, killing the on-behalf filing flow
  - Abandon if RentOk or NoBroker ships an equivalent multi-tenancy filing tracker before single-state v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Manually file 2–3 real tenancy agreements on tenancy.tn.gov.in and upawas.up.gov.in start to finish. Confirm whether property-manager-on-behalf filing actually works without forcing physical attestation. This is the make-or-break technical risk.
- **Day 3–4:** Phone or visit 30 small brokers and multi-flat landlords in Chennai and Lucknow. Show a clickable mockup of the compliance board. Pitch ₹999/₹2,999 plans. Ask for a ₹500 pre-commit deposit.
- **Day 5:** Decide. **Go** if (a) on-behalf filing is confirmed viable and (b) ≥5 of 30 brokers pre-commit money. **No-go** if the portal forces per-tenant attestation or fewer than 15% will pay recurring.

The result is falsifiable: either the portal lets you file on behalf and brokers put down deposits, or they don't.
