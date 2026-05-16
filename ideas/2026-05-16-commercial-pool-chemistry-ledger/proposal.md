---
title: "WetVault — chemistry ledger for commercial pool operators"
slug: commercial-pool-chemistry-ledger
date: 2026-05-16
category: PropTech / US Commercial Pool & Aquatic Facility Operators
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Phone-captured, timestamped pool water-chemistry records that survive a health inspector and a lawsuit, for hotels, gyms and HOAs."
tags:
  vertical: PropTech
  model: SaaS
  geography: US
  secondary: [SMB, Compliance-driven, AI-agent, Voice-first, Mobile-first]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [operations-heavy, domain-expertise-required]
featured: false
---

# WetVault — tamper-evident chemistry ledger for commercial pool operators

## 1. One-liner

Phone-captured, timestamped pool water-chemistry records that survive a health inspector and a lawsuit, for hotels, gyms and HOAs.

## 2. Trend signal — why now?

The pain here isn't a hunch — it's documented in health-code data and inspector anecdotes.

- The CDC and state health codes require **free chlorine and pH logged every 2–4 hours while a public pool is open** (every 1 hour for spas and wading pools). Most facilities still do this with a **paper binder at the pump room** — which gets skipped when staff are busy, lost, water-damaged, or back-filled the morning of an inspection.
- **"Incomplete or missing documentation" is ~20% of all commercial pool health-code violations** — the single most common citation category after chlorine itself. Inspectors don't have to prove the water was bad; a three-day-old log entry is enough to close the pool.
- Real, sourced closure: a county inspector closed the outdoor pool of a **340-room full-service hotel** because the last chemistry log entry was three days old; the pool was shut for **48 hours over a weekend**, the amenity revenue was lost, and the violation was posted publicly in the county health database.
- Penalty exposure is not trivial: state codes allow **immediate closure, fines up to $10,000/day, and criminal liability for willful negligence**.
- The incumbent that owns "pool chemical tracking" — **Skimmer ($98/mo + per-location)** — is built for **residential route techs doing one weekly stop**. It is not built for a facility operator who must log the *same pool* every two hours, hand a binder to an inspector on demand, and prove nobody back-dated it.

This is a workflow trapped on paper because the existing software was designed for a different customer (the route guy), not the facility operator who actually carries the regulatory and legal liability.

Provenance:
  - Signal 1 (Demand): "Incomplete chemical logs" among top commercial-pool violations; documented 340-room hotel pool closure over a 3-day-old log gap — https://oxmaint.com/industries/hospitality/hotel-swimming-pool-spa-maintenance-chemistry-compliance / https://pooldial.com/resources/articles/business/commercial-pool-log-book — 2026-05-16
  - Signal 2 (Feasibility): Commodity phone-camera vision + on-device voice transcription now reliably reads a test strip / photometer and captures a spoken reading per stop with timestamp+geotag, cheap enough for a $/facility tier — CDC operating guidance documents the 2–4h logging cadence the tool must capture — https://www.cdc.gov/healthy-swimming/toolkit/operating-public-pools-hot-tubs-and-splash-pads.html — 2026-05-16
  - Signal 3 (Economic): Active, funded pool-software market (Skimmer $98/mo, Pool Brain, Jobber) + named "chemical safety insurance" product line + $62B pool industry, 125,000 service firms; state fines up to $10,000/day make this a budget line, not a nice-to-have — https://www.getskimmer.com/pricing / https://www.thesppa.com/chemical-safety-insurance-for-pool-professionals/ — 2026-05-16
  Category: Underserved niche

## 3. The opportunity

Skimmer, Jobber and Pool Brain all sell "chemical tracking," but every one of them is architected around the **residential service route**: a tech visits a backyard pool once a week, logs one reading, emails the homeowner a service summary. None of them solve the **commercial facility** problem, which is structurally different:

- The **same pool** is logged **3–12 times a day**, not once a week.
- The reader is often a **non-technical hourly employee** (front-desk, maintenance, lifeguard), not a CPO-certified route tech.
- The document's job is not "show the homeowner you came" — it is **"survive a health inspector and a plaintiff's attorney."** That means tamper-evidence: every entry locked to a server timestamp, GPS, and the device that took it, so a back-filled binder is impossible.
- The buyer who feels the pain is the **facility (hotel GM, HOA manager, gym ops director)** — the entity that gets fined, closed, and publicly listed — not a pool-route SMB.

A focused tool that does *only this*, beautifully, beats a residential-route product bolted into a setting it wasn't designed for. We are not competing with Skimmer for the pool guy; we are selling to the hotel that the pool guy doesn't even invoice.

## 4. Target market

- **Primary customer:** Facility/operations manager at a US property with one or more public pools that gets health-inspected — limited-service & full-service hotels, multifamily apartment communities, HOAs, fitness clubs/gyms, splash pads, municipal aquatic centers. Decision-maker is the GM, regional facilities manager, or HOA property manager.
- **Why they buy (their words):** "The inspector closed my pool over Memorial Day weekend because the binder was three days behind — not because the water was bad." "My night maintenance guy just doesn't fill the log and I find out when I fail." "Legal asked for two years of chlorine logs after a kid got sick and I had a shoebox of water-stained paper."
- **Rough TAM reasoning:** ~14M+ US pools; commercial/public pools are a minority but every one is regulated. Conservatively **300,000–500,000 inspected commercial pool/spa bodies of water** across hotels, apartments, HOAs, gyms and municipalities. A property with 1–4 pools paying $59–149/mo is a $700–1,800 ACV. Even 5,000 facilities = ~$5M ARR.
- **Why now for them:** Post-COVID staffing churn means the binder is filled by whoever is on shift — turnover destroys documentation continuity exactly when health departments have digitized and *publicly post* violations, so a closure is now a TripAdvisor/Google-visible reputational event, not a private slap.

## 5. Product sketch (MVP)

- **Two-tap reading capture:** open app at the pool, point camera at test strip / photometer (vision reads the values) OR speak the numbers (voice transcription); app stamps server-time, GPS, device ID, and the employee who logged it.
- **Lock-by-design ledger:** entries are append-only and tamper-evident — no edit/back-date; corrections are new entries with an audit trail. This is the entire value prop, so it is the core, not a setting.
- **"Inspector mode":** one tap produces a clean, date-ranged, jurisdiction-formatted log a health inspector can read on the spot or take as PDF — including the gaps, honestly, with corrective-action notes.
- **Cadence alarms:** per-pool schedule (e.g. every 2h while open) with escalating reminders to the on-shift logger and an SMS to the manager if a reading window is missed — closing the "nobody logged it" gap *before* the inspector finds it.
- **Out-of-range guardrail:** if a reading is outside the state's legal band, app prompts the required corrective action and forces a re-test entry, so the record shows a closed loop.
- **Multi-pool / multi-property roll-up:** a regional manager sees every property's compliance status and missed-reading risk in one list.
- **Two-year retention + one-click legal/insurance export** of any pool's full history.

## 6. AI angle — what's load-bearing

Two AI capabilities are doing real work, not decorating a form:

1. **Vision reading of test strips / photometer displays** — turns a non-technical hourly employee + a phone into a reliable data-capture device with no manual typing (typing is exactly what gets skipped). Remove this and the logging burden falls back on staff who already don't do it.
2. **Voice capture + structured extraction** — "free chlorine two point one, pH seven point four, combined point three" → structured, validated entry hands-free at a wet pump room. Remove it and you're back to the wet binder.

If you strip the AI out, you have a digital form that staff ignore exactly like they ignore the paper one. The AI is what makes a distracted maintenance worker actually create the record. The tamper-evident ledger is the *moat-shaped* part; the AI is what makes the data exist at all.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is US state/county health-code logging cadence and the publicly-posted-violation dynamic. International commercial pool codes exist (AU, UK, EU) and are a credible expansion, but the v1 value depends on US jurisdiction-formatted inspector exports, so localization is a *later market*, not a launch wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $59/mo for a single-pool property; $99/mo up to 3 pools; $149/mo unlimited pools single property; multi-property/portfolio quoted per door (HOA management cos, hotel groups). Annual prepay discount.
- **ACV:** ~$900 blended (mix of single-pool hotels/HOAs and 3-pool apartment communities), higher for portfolio property managers.
- **Rough math to $1M ARR:** ~1,100 facilities × ~$900 = ~$1M. That is a tiny fraction of 300k+ inspected commercial pools.
- **Rough math to $5M ARR:** ~5,500 facilities, OR ~150 property-management / hotel-group portfolio accounts at $30k+ each. The portfolio motion (one HOA-management company = 60 community pools) is the real $5M lever.
- **Expansion path:** more pools/properties per account; add liability-insurance-partner discount (carriers love provable logs); add CPO certification tracking, equipment maintenance logs, and incident/fecal-event reporting — all things the same inspector asks for, all natural upsells once you own the chemistry record.

## 9. Go-to-market wedge — first 100 customers

- **Public violation databases are a free, pre-qualified lead list.** County health departments publicly post pool inspection results with the facility name and the violation. Scrape the "incomplete/missing documentation" and "closed" line items in 5–10 large counties (LA, Maricopa, Harris, Broward, Clark). Every name is a property that *just got burned for the exact thing we fix*. Cold email/call the GM within 2 weeks of their posted violation with "we saw your pool was cited for documentation on [date]."
- **HOA and multifamily property-management companies** manage dozens of community pools under one roof and one liability policy. Land 10 of these regional managers and each is 20–60 facilities. Direct outreach to the named regional facilities manager (LinkedIn + the property-management trade groups: CAI chapters, NAA).
- **CPO instructors and pool-management service firms** train/run commercial pools all day and are trusted by operators. Revenue-share referral with 5–10 of them in pool-dense states (FL, TX, AZ, CA).
- **Pool-liability insurance brokers** (the named "chemical safety insurance for pool professionals" segment) — provable logs reduce their loss exposure; co-marketed discount is a warm, recurring channel.

The violation-database scrape alone is a concrete, repeatable first-100 motion: a constantly-refreshing list of named buyers who just felt the exact pain, in public.

## 10. Build complexity — justification

**Low.** Off-the-shelf vision + voice APIs read strips/photometers and capture spoken readings; the rest is a standard mobile-first web app with an append-only datastore and a PDF export. The only genuine engineering discipline is the tamper-evidence model (server-authoritative timestamps, immutable entries, audit trail on corrections) and per-jurisdiction export formatting — both well-understood, no research risk. A 1–2 person team ships a credible v1 in **~10–14 weeks**; jurisdiction export templates are added incrementally per market entered.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Recording one's own compliance data; we don't certify or replace the inspector. |
| Ethical — no harm / dark patterns | ✅ | Tamper-evidence *prevents* falsification; product makes safety records more honest, not less. |
| Market exists (evidence above) | ✅ | Documented violations, named closures, $10k/day fines, active paid incumbents in adjacent niche. |
| 1–5 person team can build this | ✅ | Off-the-shelf AI + standard stack, ~10–14 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Solo/pair build; CAC is scrape-and-call, not paid ads. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire when it happens: closure, lost weekend revenue, public violation, lawsuit discovery. But it's episodic — felt hard at inspection/incident, easy to ignore between. Knocks it off a 17+. |
| Demand evidence | 15 | 12/15 | Multiple hard signals: 20% of violations are documentation, sourced closure anecdote, $10k/day fines, paid incumbents in adjacent niche, paper-logbook SKUs sell well. No direct "I'd pay for this" forum quote yet (forums are residential-tech heavy) — caps it at 12. |
| Build feasibility | 15 | 13/15 | Off-the-shelf AI, standard stack, ~10–14 wks. Only nuance is tamper-evidence + per-jurisdiction exports. |
| Distribution clarity | 15 | 11/15 | Public violation databases = a refreshing, named, pre-burned lead list — genuinely strong. Held below 13 because outbound to hotel/HOA managers has a real but not trivial close cycle, and per-county scraping is manual to stand up. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked vs Skimmer; ACV credible; $1M needs only ~1,100 facilities. Portfolio motion is the $5M lever but unproven — keeps it at 11. |
| Time to first revenue | 10 | 8/10 | Sellable pre-build via the violation list; realistic first paid pilot in 4–8 weeks of outbound. Single-property sale is fast; portfolio deals are slower. |
| Defensibility | 10 | 5/10 | Execution + workflow lock-in (your 2-year legal record lives here) + accumulating per-jurisdiction export library + insurance partnerships. Skimmer *could* build a "commercial mode" — real threat — so not higher. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`operations-heavy` · `domain-expertise-required` — success hinges on understanding county health-code logging requirements and selling into facility operations, not on ML sophistication. A founder with hospitality/facilities or aquatics-compliance background is ideal; a CPO advisor is close to mandatory.

### Key assumptions to validate (3–5)

1. **Assumption:** Facility managers will pay $59–149/mo to de-risk an episodic-but-severe event. **How to test:** Pull 50 recently-cited facilities from 3 county databases; cold outreach; measure whether ≥10% take a paid pilot call within 2 weeks.
2. **Assumption:** Hourly staff will actually use a two-tap/voice capture where they skip the paper binder. **How to test:** 5-facility design-partner pilot; measure logged-reading completion rate vs their prior paper baseline over 30 days.
3. **Assumption:** Health inspectors will accept a digital tamper-evident export in lieu of the paper binder. **How to test:** Interview 8–10 county environmental-health inspectors across 3 states on whether a timestamped digital log satisfies the on-site presentation requirement.
4. **Assumption:** The portfolio motion (HOA/hotel-group) is real and not a 12-month enterprise slog. **How to test:** Pitch 10 property-management regional managers; measure interest and stated procurement timeline.

### Risk flags

1. **Incumbent encroachment:** Skimmer/Jobber could ship a "commercial facility mode." Mitigation: go deep on tamper-evidence + inspector-format library + insurance partnerships — the boring regulatory depth a horizontal player won't prioritize.
2. **Episodic pain / churn:** between incidents, a manager may see it as insurance they're tempted to cancel. Mitigation: annual prepay, insurance-discount tie-in, and bundling in adjacent daily-use logs (equipment, CPO) so it's not single-purpose.
3. **Jurisdiction fragmentation:** every county formats requirements slightly differently; export library is a long tail. Mitigation: launch in 5 pool-dense counties first; add per-market on demand, not all at once.
4. **Liability framing:** must never market as "guarantees you pass" — we record, we don't certify. Mitigation: careful positioning and disclaimers.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Operations/hospitality or aquatics-compliance founder + CPO advisor; 1–2 person build team
Time to revenue:        4–8 weeks (pre-sellable off public violation lists)
Capital to launch:      $8–15K ($)
Top 3 assumptions to validate first:
  1. Cited facilities convert — 50 scraped recently-cited facilities, measure ≥10% paid-pilot interest in 2 weeks
  2. Staff actually log — 5-facility pilot, measure reading-completion rate vs paper baseline over 30 days
  3. Inspectors accept digital export — interview 8–10 county environmental-health inspectors across 3 states
Kill criteria:
  - Abandon if <10% of 50 freshly-cited facilities will take a paid-pilot call within 2 weeks
  - Abandon if pilot facilities' logged-reading completion does not beat their paper baseline by 30 days
  - Abandon if inspectors in 2+ target states will not accept a digital tamper-evident log in lieu of the paper binder
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape the public pool-inspection databases of 3 large counties (e.g. Maricopa, Harris, Broward) for facilities cited in the last 90 days for documentation/closure. Build a named list of 50 with the GM/property contact.
- **Day 3–4:** Cold call/email all 50 with a sharp message referencing their *specific* posted violation and a 1-paragraph offer of a free pilot. Separately, call 8 county environmental-health inspectors and ask the binary question: would you accept a timestamped, tamper-evident digital log on-site instead of the paper binder?
- **Day 5:** Decide go / no-go. **Falsifiable bar:** ≥5 of 50 cited facilities agree to a paid pilot conversation, AND ≥5 of 8 inspectors say a digital tamper-evident log is acceptable on-site. Miss either and the wedge or the regulatory acceptance is not real — stop.
