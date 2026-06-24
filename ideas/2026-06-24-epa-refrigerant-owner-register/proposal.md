---
title: "ChargeLog — refrigerant compliance register for facilities"
slug: epa-refrigerant-owner-register
date: 2026-06-24
category: Compliance / US-SMB
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns your HVAC vendors' messy service invoices into an audit-ready EPA refrigerant inventory and annual leak report."
tags:
  vertical: Compliance
  model: SaaS
  geography: US
  secondary: [Compliance-driven, AI-agent, SMB, Multi-site, Document-extraction]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# ChargeLog — refrigerant compliance register for multi-site facility owners

## 1. One-liner

Turns your HVAC vendors' messy service invoices into an audit-ready EPA refrigerant inventory and annual leak report.

## 2. Trend signal — why now?

On **January 1, 2026** the EPA's AIM Act Subpart C HFC Management Rule (40 CFR Part 84) dropped the leak-repair / recordkeeping threshold from **50 pounds to 15 pounds** of high-GWP refrigerant. BSI calls it a **70% expansion** of regulatory scope. Overnight, rooftop AC units, small commercial refrigeration, and process-cooling gear that "facilities never had to track before" got pulled into a full compliance program — and the responsibility lands on the **equipment owner/operator**, not the contractor (HVACRschool, June 2026).

The kicker: it's not just federal. California CARB (March 2025), New York Part 494 (March 2025), Washington (March 2025), and New Jersey (April 2025) already stacked their own refrigerant-tracking mandates. And the first federal reporting window is live — 2025 data is due, with chronically-leaking systems (≥125% of charge/yr) reportable by March 1 annually.

Every source agrees on the same bottleneck: owners don't have a baseline inventory and can't consolidate the data. Fexa: *"most facilities teams don't currently track data at this level of detail, and outdated CMMS platforms don't make it easy."* And: *"without unified tracking across providers, data fragmentation makes compliance reporting nearly impossible."* HVACRschool: *"many of them are currently unprepared for the sheer volume of data tracking required... most operators lack baseline inventories of equipment in the 15–50 pound range."*

Provenance:
  - Signal 1 (Demand): EPA AIM Act Subpart C drops threshold 50→15 lbs Jan 1 2026, owner is liable, "most facilities teams don't currently track data at this level" — https://fexa.io/blog/2026-new-refrigerant-and-emissions-reporting-requirements/ — 2026-06-24
  - Signal 2 (Feasibility): The named #1 blocker is building the baseline inventory and unifying fragmented per-vendor service data — exactly what cheap multimodal AI invoice/nameplate extraction now does — http://www.hvacrschool.com/the-epas-15-pound-refrigerant-threshold-in-2026/ — 2026-06-24
  - Signal 3 (Economic): HVAC refrigerant-management market $1.85B (2024)→$4.12B (2033), 9.3% CAGR; Trakref acquired by Fexa; EPA fines up to $60K/day per violation, CA up to $500K/yr — https://www.bsigroup.com/en-US/insights-and-media/insights/blogs/federal-regulators-just-expanded-refrigerant-oversight-by-70/ — 2026-06-24
  Category: Regulatory arbitrage

## 3. The opportunity

The compliance software that exists today was built for the old 50-pound world, and it splits into two camps that both miss the newly-created buyer:

- **Enterprise FM/CMMS** — Trakref (now Fexa), ServiceChannel, ERA-EHS. Quote-based, ~$200–500/user/mo, "dated interface, no mobile, no QR scan" per third-party comparisons. Built for billion-dollar multi-location operators who already run an FM platform.
- **Contractor-side logbooks** — RefriTrak, RefriComply ($59–99/mo for 5–25 *technicians*), OxMaint. These are for the HVAC *shop* logging its own service events, not for the *owner* who receives invoices from a dozen different shops.

The gap is the **mid-market facility owner**: a 10–150 location chain that does *not* run enterprise FM software, is *not* the contractor, and just inherited 50–500 small rooftop units. Their compliance data arrives as a fragmented mess — PDFs, photos, emailed work orders from whatever local HVAC vendor happened to do the job. Nobody is selling them an **owner-side register that assembles itself from the paperwork they already get**. AI invoice extraction collapses the 40-hour "go build an inventory" project into an upload-and-review flow. That's the 10×.

## 4. Target market

- **Primary customer:** Director of Facilities / Ops Manager at a US multi-site operator with 10–150 locations and 50–500 in-scope units (15–50 lb). Concrete segments: regional grocery & c-store chains, QSR franchisee groups, urgent-care / dental DSOs, self-storage portfolios, mid-market commercial real estate.
- **Why they buy:** "I'm now personally on the hook for a federal program I have no inventory for, I get service data from 12 different HVAC vendors in 12 different formats, and a single audit finding can run six figures." Fines are up to $60,000/day/violation federally; CA emissions misreports up to $500K/yr.
- **Rough TAM reasoning:** Hundreds of thousands of US commercial sites just crossed into scope. Even a narrow slice — say 30,000 mid-market multi-site operators in the 10–150 location band — at a few thousand dollars/year each is a $100M+ addressable line. We only need a few hundred to hit $1M ARR.
- **Why now for them:** The rule is live as of Jan 1 2026, the first reporting cycle is running, state mandates already bite, and they are demonstrably unprepared (every cited source says so).

## 5. Product sketch (MVP)

- **Vendor-invoice ingest:** forward or upload HVAC service invoices / work orders (PDF, photo, email); AI extracts site, unit ID, refrigerant type, charge size, lbs added/recovered, technician 608 cert, and date.
- **Auto-built asset register:** every covered unit (15–50 lb) with type, full charge, and location — the baseline inventory owners don't have.
- **Leak-rate engine:** running annualized leak-rate per unit; flags units crossing the repair threshold and starts the 30-day repair clock with reminders.
- **Chronic-leaker watchlist:** auto-flags ≥125%/yr systems that must be reported to EPA by March 1.
- **One-click annual report + audit binder:** export the EPA-format records and a per-site 3-year audit-ready packet.
- **Multi-state overlay:** federal plus CA CARB / NY Part 494 / WA / NJ rule profiles per location.
- **Vendor gap nudges:** detects when a service event is missing a required field and generates the request back to the HVAC vendor.

## 6. AI angle — what's load-bearing

Remove the AI and you have a spreadsheet nobody fills in — which is exactly the status quo that's failing. The load-bearing work is **multimodal document extraction**: turning a stack of inconsistent, vendor-specific invoices and nameplate photos into a normalized, structured refrigerant ledger. That's the single hardest, most labor-intensive step (every source names "data fragmentation across providers" as the wall), and it's the thing a human ops manager will not do by hand across 300 units. AI also classifies refrigerant types/GWP, infers charge size from model nameplates, and drafts the vendor follow-up when a record is incomplete. The product literally cannot exist as a manual tool — the whole value is collapsing the data-assembly cost to near zero.

## 7. Localization angle (if any)

N/A as a geography play — this is a US-first regulatory product. But the *state-overlay* is the local wedge: CA/NY/WA/NJ each layered their own tracking rules on top of the federal one in 2025, and a national operator needs all of them reconciled per-site. Owning the "federal + every state profile in one register" position is the localized moat within the US.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** per-portfolio SaaS by unit count. Starter $149/mo (≤25 units), Growth $399/mo (≤100 units), Multi-site $899/mo (≤300 units), plus a one-time **"inventory onboarding"** setup fee ($500–2,000) that funds the heavy first-pass extraction.
- **ACV:** ~$4,800–11,000/yr blended; mid-market lands near $6K.
- **Rough math to $1M ARR:** ~170 customers × ~$490/mo avg. Very reachable inside the newly-in-scope mid-market.
- **Rough math to $5M ARR:** ~700 customers, or fewer if the average tilts toward larger 100–300 unit portfolios; add the annual-report-as-a-service premium and vendor-network upsell.
- **Expansion path:** ACV grows with unit count as portfolios expand, plus add-ons — Scope-1 emissions reporting for CA $1B+ filers, A2L equipment-transition planning, and a managed "we'll chase your vendors for the missing records" tier.

## 9. Go-to-market wedge — first 100 customers

- **Compliance-deadline cold outreach:** scrape multi-site operators in the four early-mandate states (CA/NY/WA/NJ) from franchise directories, ICSC/retail tenant lists, and self-storage/DSO association rosters. Email the facilities lead a 90-second Loom showing *their* type of invoice turning into a finished audit binder. Deadline-driven fear converts; target 4–6% reply.
- **HVAC-vendor channel partnerships:** local HVAC service companies don't want owner-side liability but their owner-clients keep asking "how do I comply?" Offer vendors a referral cut and a co-branded "we keep your customer audit-ready" pitch. The contractor becomes the distribution channel.
- **Association + trade-media beachhead:** sponsor/teach a webinar with self-storage (SSA), c-store (NACS), and dental-DSO groups on "the 15-pound rule and what owners must now do." These bodies are actively warning members and have no tool to point at.
- **Compliance-consultant white-label:** EHS consultants (e.g. the U.S. Compliance / Lakeside types already blogging this) need software under their service — wholesale them the platform.

## 10. Build complexity — justification

Medium. The web app, multi-tenant data model, reminders, and report exports are standard stack. The real work is the extraction pipeline — building a robust prompt+schema layer over off-the-shelf multimodal models that reliably parses wildly inconsistent vendor invoices, plus encoding the federal + 4-state rule logic (leak-rate math, repair clocks, report formats). A focused pair can ship a credible v1 in ~3–4 months; the rule logic is finite and well-documented, and extraction is tunable with a human-review step in the loop for launch.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps owners comply with federal/state law; no legal advice given, just records. |
| Ethical — no harm / dark patterns | ✅ | Pure compliance enablement; reduces environmental leakage. |
| Market exists (evidence above) | ✅ | Live regulation Jan 2026 + $1.85B→$4.12B market + funded incumbents. |
| 1–5 person team can build this | ✅ | Pair in 3–4 months with off-the-shelf AI extraction. |
| Launchable with <$50K / ₹40L | ✅ | Web app + model API costs; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Federal liability, six-figure fines, hard deadline — but felt acutely a few times/year (reporting + leaks), not daily hair-on-fire. |
| Demand evidence | 15 | 12/15 | Strong regulatory + market + funded-incumbent signals; weak point is no verbatim *owner* quotes yet (rule is brand new). |
| Build feasibility | 15 | 11/15 | Standard stack + tunable extraction + finite rule logic; extraction reliability across vendor formats is the real work. |
| Distribution clarity | 15 | 11/15 | Named lists (state-mandate operators, associations) + contractor channel; conversion math is reasonable but unproven. |
| Revenue mechanics | 15 | 12/15 | Clear per-unit pricing benchmarked against $59–500/mo incumbents; setup fee funds onboarding. |
| Time to first revenue | 10 | 8/10 | Deadline panic + a finishable MVP → paid pilots inside 6–8 weeks of launch. |
| Defensibility | 10 | 6/10 | Workflow lock-in (the register becomes their system of record) + accumulated extraction tuning; but incumbents can pivot down-market. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (EPA refrigerant rule literacy) · `sales-heavy` (mid-market outbound + association/channel motion).

### Key assumptions to validate (3–5)

1. **Assumption:** Mid-market owners (10–150 sites) feel this acutely enough to pay $400–900/mo *now*, not "after our first audit notice." **How to test:** 25 cold calls/Looms to facilities leads in CA/NY mandate states; measure reply + demo-book rate.
2. **Assumption:** AI can extract refrigerant fields reliably enough across messy multi-vendor invoices to beat manual entry. **How to test:** collect 100 real anonymized HVAC invoices, run extraction, measure field-level accuracy vs. a 90% target.
3. **Assumption:** HVAC contractors will refer rather than build this themselves. **How to test:** pitch 10 local HVAC owners on a referral/white-label arrangement; measure willingness.
4. **Assumption:** The state-overlay (CA/NY/WA/NJ) is a real differentiator buyers will pay up for. **How to test:** A/B the pitch with and without multi-state in 20 outreach threads.

### Risk flags

1. **Regulatory risk:** A new administration could weaken or delay AIM Act enforcement, deflating the deadline urgency. Mitigant: state mandates persist regardless, and recordkeeping value outlasts federal mood swings.
2. **Platform/incumbent risk:** Fexa/Trakref or RefriComply could launch a cheap owner-side tier and outspend a bootstrapper. Mitigant: speed + sharp mid-market positioning + the invoice-extraction UX they don't have.
3. **Data-quality risk:** If extraction accuracy is poor, the human-review burden eats the margin and the "collapse the work" promise breaks. Mitigant: ship with review-in-the-loop, narrow to common invoice formats first.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can build the extraction pipeline, paired with someone who knows EPA 608/AIM Act and can run mid-market outbound
Time to revenue:        6–8 weeks from launch (deadline-driven paid pilots)
Capital to launch:      $8–15K ($ model API + landing/outbound tooling)
Top 3 assumptions to validate first:
  1. Mid-market owners pay $400–900/mo now — 25 cold Looms in CA/NY, measure demo-book rate
  2. Extraction hits ≥90% field accuracy on 100 real multi-vendor invoices
  3. HVAC contractors refer rather than build — pitch 10, measure willingness
Kill criteria:
  - Abandon if <8% of 50 targeted outreach threads book a demo within 3 weeks
  - Abandon if extraction can't clear ~90% field accuracy without per-customer custom work
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the target list — 200 multi-site operators in CA/NY/WA/NJ (franchise, self-storage, c-store, DSO directories). Collect 50–100 real anonymized HVAC service invoices (ask 3 friendly facilities contacts + public samples).
- **Day 3–4:** Run those invoices through an off-the-shelf multimodal model with a refrigerant-extraction schema; measure field-level accuracy. Record a single Loom: messy invoice stack → finished EPA annual-report binder. Send to 25 facilities leads.
- **Day 5:** Decide go/no-go on two falsifiable numbers — (a) extraction field accuracy ≥90%, and (b) ≥3 of 25 outreach targets book a demo. Hit both → build. Miss either → fix or pass.
