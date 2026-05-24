---
title: "MarkRent — rent-review autopilot for UK landlords"
slug: uk-section-13-rent-review
date: 2026-05-25
category: PropTech / UK Self-Managing Private Landlords
complexity: Low
score: 78
verdict: GO
confidence: Medium
oneLiner: "Drafts your Section 13 rent-increase notice and bundles the comparable-evidence pack that beats a tribunal challenge."
tags:
  vertical: PropTech
  model: SaaS
  geography: Global
  secondary: [UK-only, Compliance-driven, AI-agent, SMB, Solo-builder]
axes:
  problem: 17
  demand: 13
  build: 13
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# MarkRent — rent-review autopilot for UK landlords

## 1. One-liner

Drafts your Section 13 rent-increase notice and bundles the comparable-evidence pack that beats a tribunal challenge.

## 2. Trend signal — why now?

On **1 May 2026** the Renters' Rights Act 2025 came into force across England. The relevant bits for this idea:

- **Section 21 is gone.** Every existing AST converted to an Assured Periodic Tenancy. No more end-of-fixed-term re-letting at a new rent.
- **Section 13 is now the only legal route to raise rent.** Once per 12 months, two months' notice, served on Form 4A.
- **Tenants can challenge any Section 13 notice at the First-tier Tribunal for £47.** The Tribunal can confirm or *reduce* the proposed rent — never raise it. Under the new rules, the Tribunal cannot set rent above what the landlord proposed in Form 4A. The risk now sits entirely on the landlord side.
- **The Information Sheet deadline is 31 May 2026** (six days from this proposal). Failing to serve carries fines starting at £4,000 and topping out at £7,000 for an initial breach, £40,000 if you keep ignoring it.

The government published *24 separate guides* totalling more than 11,000 words to explain implementation, which the landlord trade press has openly mocked as a "compliance trap". 2.8 million private landlords in England, ~80% of whom self-manage, are reading this in the next four weeks.

Provenance:
  - Signal 1: Renters' Rights Act 2025 implementation roadmap and tenant-challenge mechanics — https://commonslibrary.parliament.uk/renters-reform-in-england-whats-happening-and-when/ — observed 2026-05-25
  - Signal 2: Demand evidence — Landlord Today coverage of the "compliance trap" sentiment and 24-guide / 11,200-word govt complexity criticism — https://www.landlordtoday.co.uk/breaking-news/2026/05/have-landlords-over-reacted-to-renters-rights-act/ — observed 2026-05-25
  - Signal 3: Economic — LeaseSafe launched a per-action compliance platform; LetCompliance prices at £14.99/mo. Money is moving — https://www.landlordtoday.co.uk/breaking-news/2026/05/new-compliance-platform-charges-landlords-per-action/ — observed 2026-05-25
  Category: Regulatory arbitrage

## 3. The opportunity

The legal landscape inverted on 1 May. Pre-Act, a landlord raised rent by ending the fixed term and re-letting. Section 13 existed but was rarely the primary tool. Now it is the *only* tool. And every notice is a free shot for the tenant at the Tribunal.

Most existing landlord software (OpenRent, Landlord Studio, Hammock, Goodlord) was designed around the *old* world — tenancy creation, rent collection, basic compliance. None of them generate the one thing that now matters every year: **a tribunal-defensible Form 4A bundle**. LeaseSafe and LetCompliance launched into this gap a few weeks ago, but their wedge is the whole RRA stack (Information Sheet, Section 8 grounds, pet requests, etc.) at low price points. Neither has built the deep comparable-evidence engine that actually wins at the Tribunal.

The wedge: be the *best* product in the single highest-value moment of the year — the rent review. Charge for outcomes, not seat fees.

## 4. Target market

- **Primary customer:** UK private landlord with 1–9 rental properties, self-managing (no full-service letting agent). English Private Landlord Survey 2024 says ~43% of all stock is held by single-property landlords, and a further ~39% by landlords with 2–4 properties. Total addressable: ~2.3M individuals.
- **Why they buy:** They want to raise rent in line with the market without (a) losing the rent for a year if the Tribunal reduces it, or (b) getting served a £47 challenge they're terrified of defending in person. Forums show landlords already worried about "being made to seem an unsuitable landlord" by tenant representatives.
- **Rough TAM reasoning:** 2.3M self-managing landlords × ~80% who raise rent in a given year × £49 per notice = £90M annual transactional market. Subscription model captures a fraction; transactional model captures the moment of pain.
- **Why now for them:** The first wave of post-Act Section 13 notices is being served *right now*. Two-month notice period means the earliest tribunal challenges land in late summer 2026. There's a 12–18 month window where every landlord is doing this for the first time.

## 5. Product sketch (MVP)

- **Form 4A generator** — paste property address + current rent + proposed rent. Validates notice period, formatting, and the procedural traps that invalidate the increase (wrong period dates, missing tenant names, electronic-service rules).
- **Comparable-evidence pack** — pulls 8–12 nearby active and recently-let listings from Rightmove / Zoopla / OnTheMarket within the same postcode sector, filters for like-for-like (bedrooms, type, EPC band, condition), and presents them as a one-page table the Tribunal recognises.
- **Adjustments worksheet** — applies standard RICS-style adjustments (size, condition, EPC, garden, parking) to bring comparables to a single defensible figure. Shows the maths.
- **Tribunal-ready PDF bundle** — Form 4A + cover letter + comparable schedule + adjustments + photo evidence, all in one downloadable file matched to FTT presentation conventions.
- **Service log** — captures proof of service (email confirmation, postal receipt) so the procedural defence is airtight.
- **"Will this hold?" risk score** — a 1-page assessment showing how much headroom the proposed rent has against market evidence, and what figure would be the safest defensible ceiling.
- **(later) Tribunal-day pack** — printable cards, suggested talking points, prior FTT decisions in the same borough on similar properties.

## 6. AI angle — what's load-bearing

The product is mostly worthless without AI.

- LLM parses scraped listing descriptions into structured features (bedrooms, EPC, parking, condition adjectives) — Rightmove free-text descriptions need real comprehension, not regex.
- LLM drafts the **adjustments narrative** ("subject property has a refurbished kitchen; comparable 3 is dated, +£75/mo adjustment") in the formal RICS-adjacent voice Tribunals read every day.
- LLM produces the **risk score and recommended figure** based on the comparable distribution and current FTT decision patterns in the area.
- Vision model reads photos the landlord uploads and tags condition factors that strengthen or weaken the case.

Strip out the AI and you have a notice template + a CSV of listings — i.e. what LetCompliance already sells for £14.99. The AI is what turns it into a *defensible bundle*.

## 7. Localization angle (if any)

The product is England-only by design — that *is* the localization. The RRA is England-only legislation (Wales has separate rules; Scotland has its own regime). Pricing in GBP. Form 4A is the prescribed government form for England. The comparable data sources (Rightmove, Zoopla, Land Registry Price Paid, EPC register) are all UK-specific. Tribunal decisions are public via Justice.gov.uk in standardised format.

This is a deliberate single-market play. The exact equivalent for Scotland is the First-tier Tribunal Housing & Property Chamber — different rules, different forms, different evidence weighting — and would be a separate product or a second module.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Two tiers.
  - **Pay-per-notice:** £49 per Form 4A bundle generated. No subscription. Designed for the 1–2 property landlord who does this annually.
  - **Subscription:** £19/mo per landlord (any portfolio size up to 9 properties), includes unlimited notices + tribunal-day prep packs + alerts when FTT decisions in your area shift the comparable benchmark.
- **ACV blend:** ~£90/year transactional, ~£228/year subscription. Assume 70/30 mix → ~£130 blended.
- **Math to $1M ARR:** ~9,800 customers at £130 ACV. From 2.3M-landlord pool that's 0.43% penetration. Comfortably achievable in 18 months given the timing.
- **Math to $5M ARR:** ~38,500 customers. ~1.7% penetration. Requires NRLA partnership or letting-agent white-label channel (the channel where the 110K NRLA membership becomes leverage). Achievable in 30 months.
- **Expansion path:** Section 8 evidence packets (eviction defence) → Information Sheet bulk service (the £40K-fine deadline driver) → annual gas/EICR/EPC compliance reminders → letting-agent white-label seat sales. Land on rent review; expand to whole portfolio.

## 9. Go-to-market wedge — first 100 customers

Concrete, named channels. No "content marketing".

- **NRLA & Property118 forums.** 110K NRLA members at £125/yr — these are the most engaged 4% of landlords. Pay for sponsored placement in *Listen Up Landlords* podcast (NRLA-owned) and the NRLA newsletter. Expected CTR is low but quality is high. Target: 30 customers in 30 days.
- **Cold outreach to the 600+ landlords who already posted Section 13 questions** on OpenRent Community, LandlordZONE forum, and Property118 in the last 60 days. Personalised replies offering a free first notice in exchange for a Loom-recorded testimonial. Target: 20 conversions.
- **Letting-agent referral white-label.** Independent letting agents (3–10 staff) are losing fee revenue to self-managing landlords. A £29-per-bundle revenue share where they pass on landlords doing their own rent reviews is pure upside for them. Target: 5 agents × 4 landlords each = 20 customers.
- **First-tier Tribunal public decisions monitor.** FTT publishes rent determinations. After 1 May 2026, every published case includes a landlord who probably wishes they had a comparable pack. Send a polite postal letter to the address on each new published case offering a free analysis. Cost: ~£0.75 per letter. Target: 15 customers over 90 days.
- **Targeted Reddit + Twitter monitoring.** r/uklandlords (~32K) and r/HousingUK (~85K) — daily monitoring for "Section 13" and "rent increase" posts. Helpful reply with link. Target: 15 customers.

## 10. Build complexity — justification

**Low.** v1 is: a form-generator (PDF rendering), a comparables scraper or API integration (Rightmove/Zoopla — both have public listings; PaaS scrapers like Apify already cover them), an LLM call chain for adjustments + narrative, a Stripe checkout. No proprietary data, no novel ML, no embedded hardware. Two people, 8–10 weeks to v1. The defensibility work (case-law-aware risk scoring, deep FTT decision archive) is a v2 problem.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Generating notices for landlords is legal. We are a software tool, not a legal-services provider; clear disclaimers required. |
| Ethical — no harm / dark patterns | ✅ | Tool helps landlords obey the law and avoid invalid notices that hurt both parties. Pricing transparent. |
| Market exists (evidence above) | ✅ | 2.8M landlords, RRA live, competitors already raising prices. |
| 1–5 person team can build this | ✅ | Solo founder with frontend + backend competence, plus a part-time property-law advisor for templates. |
| Launchable with <$50K / ₹40L | ✅ | ~£15K covers v1 build (mostly founder time) + £2K Rightmove API or scraper credits + £3K NRLA-channel ad spend. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire moment — every annual rent review now carries Tribunal risk. Landlords lose 12 months of income if the Tribunal reduces. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: competitor launches (LeaseSafe, LetCompliance), 110K-strong NRLA membership, government's own 24-guide complexity, active forum traffic. |
| Build feasibility | 15 | 13/15 | Off-the-shelf LLM + scraper + PDF stack. Form 4A is standardised. EPC + Land Registry are open. Solo dev ships in 8–10 weeks. |
| Distribution clarity | 15 | 11/15 | NRLA + forums + FTT decision monitor + letting-agent white-label. Channels named with realistic conversion. Less than 13 because none of these are *certain*. |
| Revenue mechanics | 15 | 12/15 | £49 per notice is right-sized vs. the alternative (£300+ RICS valuation or £125/yr NRLA + DIY). 9,800 customers to $1M ARR is plausible. Subscription stickiness untested. |
| Time to first revenue | 10 | 8/10 | Pre-sale possible to landlords already serving notices this month. Real revenue inside 60 days of launch. |
| Defensibility | 10 | 4/10 | Soft moats only — accumulated FTT decision corpus + comparable-data cache get better with time. Cloneable in 90 days by a focused team. Speed wins. |
| **Total** | **100** | **78/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — need a developer who can ship the scraper + LLM pipeline, paired with a property-law-literate advisor (paralegal, ex-letting-agent compliance lead, or a junior surveyor) for template authority.

### Key assumptions to validate (3–5)

1. **Assumption:** Self-managing landlords will pay £49 for a one-shot tribunal-defensible bundle.
   **How to test:** Stand up a one-page Stripe-checkout landing page. Drive 500 visitors from r/uklandlords and NRLA forum sponsorship. Measure pre-pay rate (need ≥2%).
2. **Assumption:** Comparable-evidence packs *actually* win tribunal challenges or deter them.
   **How to test:** Read 20 recent FTT rent-determination decisions. Tally which side won and how heavily the decision turned on comparable evidence. If <60% of cases hinge on comparables, the wedge is weaker than claimed.
3. **Assumption:** Rightmove/Zoopla scraping is operationally sustainable.
   **How to test:** Pilot a scraper against 500 postcodes for two weeks. If blocked, fall back to official partner APIs (Rightmove has one) or PriceHubble / Hometrack data deals.
4. **Assumption:** NRLA / letting-agent channels deliver paid customers, not just leads.
   **How to test:** Pay £1,500 for one issue of the NRLA newsletter promotion. Track signups → paid conversion. Need ≥0.5% paid conversion to scale.

### Risk flags

1. **Regulatory risk (low):** RRA is settled law as of 1 May 2026. Future amendments could change forms but not the underlying need. PRS Database registration (late 2026) and Ombudsman (2028) expand the product surface, not shrink it.
2. **Platform dependency (medium):** Rightmove/Zoopla data is core. They can block scrapers or refuse API access. Mitigation: multi-source (Zoopla + OnTheMarket + Land Registry rent-deposit data) plus a small in-house panel of letting agents who supply local comparables for a fee.
3. **Market timing (low):** The first big wave of Section 13 notices is *right now*. Late entry by 6 months still leaves a multi-year compliance market.
4. **Competitor reaction (medium):** LeaseSafe, LetCompliance, OpenRent, Hammock can all add a Section 13 module. Defence is depth on the evidence side, not breadth. If MarkRent only matches their form-generator, it loses.
5. **Legal-services line:** Drafting notices for fee can blur into reserved legal activity. Mitigation: clear "tool, not solicitor" framing + RICS-style adjustments framing (data, not legal opinion).

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Full-stack developer + part-time property-law advisor (paralegal or junior surveyor)
Time to revenue:        6–8 weeks from build start; pre-sale possible immediately
Capital to launch:      £15–20K (~$19–25K) — mostly founder time + first-channel ad spend
Top 3 assumptions to validate first:
  1. £49 per-notice pricing converts at ≥2% on landing-page traffic from r/uklandlords + NRLA channel
  2. Comparable evidence is the deciding factor in ≥60% of recent FTT rent-determination cases
  3. Rightmove/Zoopla data acquisition is operationally repeatable (scrape or API)
Kill criteria:
  - Abandon if landing-page pre-pay conversion <1% after 1,000 visitors
  - Abandon if FTT decisions show comparables are decorative (decisions mostly turn on procedural defects, not evidence quality)
  - Abandon if a well-resourced incumbent (OpenRent, Goodlord, NRLA) ships an equivalent evidence-pack module before v1 launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Read 25 First-tier Tribunal rent-determination decisions published since 1 May 2026. Tally landlord-win rate and whether comparable evidence was the deciding factor. Goal: confirm comparables matter.
- **Day 3:** Build a one-page landing site. Offer "free first Section 13 bundle, £49 thereafter" in exchange for an email. Hand-generate the bundle for the first 10 signups.
- **Day 4:** Post twice on r/uklandlords, once on the NRLA forum, with a genuine helpful answer + soft link. Buy a £200 sponsored slot on a UK landlord newsletter.
- **Day 5:** Tally signups, hand-conversions to paid, and direct landlord feedback. Decide go / no-go based on: ≥30 email signups, ≥3 paid £49 sales, and ≥1 strong testimonial.

Falsifiable: if the £49 doesn't convert within a week of warm traffic, the willingness-to-pay hypothesis is wrong and the idea needs rework toward subscription or a lower-friction price.
