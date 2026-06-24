---
title: "ScrubProof — HazCom binder builder for small cleaning crews"
slug: janitorial-hazcom-sds-binder
date: 2026-06-24
category: Compliance / US-SMB
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Scan every bottle in the janitor closet and ScrubProof assembles an inspection-ready HazCom packet: SDS, labels, written plan."
tags:
  vertical: Compliance
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Solo-builder, Compliance-driven, Mobile-first]
axes:
  problem: 15
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ScrubProof — HazCom binder builder for small cleaning crews

## 1. One-liner

Scan every bottle in the janitor closet and ScrubProof assembles an inspection-ready HazCom packet: SDS, labels, written plan.

## 2. Trend signal — why now?

Hazard Communication (HazCom, OSHA 1910.1200) is one of OSHA's **Top 10 most-cited standards every single year**, and the single most common gap is "missing or inaccessible SDS for products currently in use." In FY2023 OSHA issued **over 2,400 HazCom citations**, and a serious violation runs up to **$15,625 per instance** (2024 schedule) — willful goes far higher.

The forcing function is brand new. OSHA's HazCom 2024 final rule realigned the standard to **GHS Revision 7**. After a four-month extension published **January 15, 2026**, the employer deadline to update workplace labels, the written program, and worker training is now **November 20, 2026**. When a chemical's hazard classification changes under Rev 7, *every secondary-container label and binder entry derived from the old classification is now wrong.* Millions of small employers who use cleaning chemicals have a hard deadline and a re-paper job they don't know how to do.

Who feels it most: the fragmented small-cleaning industry. The US janitorial-services market is **$112B in 2026** across roughly **1.25 million businesses**, and the average janitorial business employs just **1.9 people** (IBISWorld). These are owner-operators, not facilities with an EHS department. The pain quote that defines the category, from a compliance write-up: a facility had *"22 entries in its SDS binder while the cleaning contractor was using 11 products, and not one of them was in the binder."* The binder drifts from reality the moment a distributor swaps a quat disinfectant — and nobody tells the owner.

Provenance:
  - Signal 1 (Demand): HazCom is OSHA Top-10 cited every year; missing/inaccessible SDS is the #1 gap; 2,400+ citations FY2023; $15,625/instance — https://www.worksafelysmb.com/blog/safety-data-sheets-hazard-communication-small-business — 2026-06-24
  - Signal 2 (Feasibility): HazCom 2024 GHS Rev 7 final rule; employer deadline extended to Nov 20, 2026 (Jan 15 2026 extension) → forced label/program/training re-paper for every chemical user — https://workplacecomplianceinsights.com/articles/osha-hazcom-compliance-deadline-may-2026-employer-guide/ — 2026-06-24
  - Signal 3 (Economic): $112B US janitorial market, 1.25M businesses, avg 1.9 employees, highly fragmented; incumbent SDS tools priced $1,299+/yr for mid-market EHS, not for 1.9-person shops — https://www.ibisworld.com/united-states/number-of-businesses/janitorial-services/1496/ — 2026-06-24
  Category: Regulatory arbitrage

## 3. The opportunity

There is a whole category of SDS-management software — SDS Manager, MySDS, MSDS Source, TotalSDS, 3E. They are **library tools built for an EHS manager**: a person whose job is chemical safety, who logs into a web console, curates a library of 150–10M documents, and prints QR codes. Pricing starts around **$1,299/yr** and climbs with database access.

That product does not exist for the janitorial owner-operator with 8 spray bottles and no idea what a "written HazCom program" is. They don't need a 10-million-document database; they need: *which of the things in my closet are hazardous, give me the right current SDS for each, print me labels, and hand me a binder/written plan an OSHA inspector will accept — by November.* Incumbents make them do the hardest part (identify and reconcile what's actually in use) by hand. The whole pain is the **reconciliation between the closet and the paperwork**, and that's exactly what nobody automates.

The 10× is: point a phone camera at the shelf → AI reads each product label/UPC → matches to the manufacturer's current Rev-7 SDS → flags what's hazardous → generates GHS secondary-container labels and a fill-in-the-blanks written program. A 2-hour-with-a-binder job becomes a 10-minute closet scan.

## 4. Target market

- **Primary customer:** Owner-operators of small commercial cleaning / janitorial firms in the US (1–25 employees), plus the adjacent long tail of small employers who keep a chemical closet — restaurants, auto shops, small manufacturers, landscapers. Beachhead = janitorial because the pain is acute, the firms are numerous (1.25M), and they fail inspections specifically on contractor-supplied chemicals.
- **Why they buy:** Fear and a deadline. "We had an OSHA inspector show up and ask for the binder and I had nothing" is a hair-on-fire moment. The Nov 20 2026 GHS deadline plus a $15,625-per-instance fine converts vague guilt into a dated to-do.
- **Rough TAM reasoning:** 1.25M janitorial firms is the core; even 0.3% at ~$300/yr ≈ $1.1M ARR. Widen to the broader small-employer-with-a-chemical-closet population (restaurants, shops, salons number in the millions) and the addressable base is far larger than the $5M ceiling we need.
- **Why now for them:** The GHS Rev 7 re-paper deadline (Nov 20, 2026) makes their *existing* binder wrong, not just incomplete. Every label and SDS tied to an old classification has to be redone — and they have no idea how.

## 5. Product sketch (MVP)

- **Closet scan:** Point the phone at the shelf; AI reads product labels / UPCs and builds your chemical inventory list automatically.
- **Auto-SDS match:** For each product, fetch the manufacturer's current GHS Rev-7 SDS and flag products that are hazardous vs. exempt (consumer-quantity household products).
- **Binder builder:** One-tap export of an inspection-ready SDS binder (PDF + shareable link / QR for "readily accessible during each shift").
- **Secondary-container labels:** Generate compliant GHS labels for spray bottles and decant containers, sized to print on a label sheet.
- **Written HazCom program:** Fill-in-the-blanks written plan that *matches your actual inventory* (the #1 inspector gotcha is a program that doesn't match reality).
- **Training log:** Lightweight worker training checklist + signature capture, stored as proof.
- **Drift alerts:** Re-scan reminders; flag when a product's SDS revision date changes so the binder doesn't silently go stale.

## 6. AI angle — what's load-bearing

Remove the AI and you're back to the incumbent: a human typing product names into a search box and reconciling a binder by hand — exactly the 2-hour chore nobody does. The load-bearing AI is **vision-to-inventory**: turning a shelf photo into a structured, matched, hazard-classified chemical list, including reading messy/partial labels and disambiguating to the right manufacturer SKU and current SDS revision. Secondary AI work: drafting the written program in plain English tailored to the inventory, and parsing fetched SDS PDFs to extract GHS classification for label generation. The product literally cannot exist as a "10-minute closet scan" without vision + document understanding.

## 7. Localization angle (if any)

N/A — this is a US-first regulatory play. The wedge *is* OSHA HazCom + the GHS Rev 7 deadline, which is US-specific. (A natural month-12 expansion is GHS-aligned regimes abroad — EU CLP, Canada WHMIS, UK COSHH — same scan-to-packet shape, different ruleset. But forcing a localization angle at launch would dilute the US deadline urgency that drives the first sale.)

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $29/mo (or $290/yr) for the solo/small-crew tier; $79/mo for multi-site cleaning firms (per-location binders + team training logs). Deliberately a tenth of the incumbent $1,299/yr EHS database.
- **ACV:** ~$350 blended.
- **Rough math to $1M ARR:** ~2,860 paying firms × $350 = $1.0M. Out of 1.25M janitorial businesses, that's **0.23% penetration** — trivially small.
- **Rough math to $5M ARR:** ~14,300 firms (1.1% of janitorial alone), or fewer firms + expansion into restaurants/auto/salons at the same price, or a higher multi-site mix. Both are realistic without leaving the SMB lane.
- **Expansion path:** Add per-location binders, recurring annual re-attestation (turn a one-time deadline panic into an annual renewal), supply ordering of compliant secondary-container label stock, and a "OSHA-ready packet" premium PDF. ACV grows from binder → binder + labels + training + annual renewal.

## 9. Go-to-market wedge — first 100 customers

- **OSHA-citation backsolve:** OSHA publishes inspection/citation data (establishment search + the annual Top-10). Pull recently-cited small employers in HazCom and cleaning NAICS codes, send a one-line "you were cited for SDS — here's a 10-minute fix before the Nov 20 GHS deadline" email with a scan demo video. High intent, named list.
- **Janitorial distributor / buying-group partnerships:** The firms buy chemicals through janitorial supply distributors and franchise networks (ServiceMaster, Jan-Pro, Stratus type franchisors). One distributor newsletter or franchisor compliance bulletin reaches thousands of exactly-right owners; offer them a co-branded "GHS deadline kit."
- **Facebook/owner groups:** Commercial-cleaning owner communities on Facebook and r/CommercialCleaning are large and active; the GHS deadline is a recurring panic thread. Post a free "scan your closet, get your binder" tool, gate the labels/written-program export behind paid.
- **Deadline content + ads:** Buy the high-intent search terms ("HazCom written program template," "GHS label deadline 2026," "OSHA SDS binder") that spike before Nov 20; land them on a free-scan funnel.

The named, high-intent list (OSHA-cited firms) plus a single distributor partnership is a credible 2–4 week path to the first 100 paying owners.

## 10. Build complexity — justification

**Low–Medium.** Off-the-shelf: phone-camera capture, a vision/OCR + LLM model for label-to-SKU extraction, a workflow for fetching SDS PDFs (public manufacturer SDS + commercial SDS databases via partnership/scrape), PDF generation for binders and labels, standard web/mobile stack. Custom work is the **SDS-matching pipeline** (mapping a read label to the correct current manufacturer SDS revision) and a curated mapping for the few hundred chemicals that dominate the janitorial closet — that's data-curation grind, not research. A pair can ship a credible v1 in **8–12 weeks**; the deeper SDS-coverage and label-template polish is the back half toward a 4-month build.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping employers comply with OSHA; no restricted activity. Avoid claiming to be a substitute for legal counsel. |
| Ethical — no harm / dark patterns | ✅ | Improves workplace safety compliance; genuine value. |
| Market exists (evidence above) | ✅ | 1.25M firms, OSHA Top-10 citation, paid incumbents, hard 2026 deadline. |
| 1–5 person team can build this | ✅ | Pair, 8–12 week v1. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf AI + web stack; main cost is SDS data access. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring, money-and-fine-backed; but felt acutely mostly at inspection/deadline moments, not daily. |
| Demand evidence | 15 | 12/15 | Multiple independent signals: OSHA Top-10 + 2,400 citations, paid incumbents at $1,299/yr, verbatim pain (22-vs-11 binder), $112B fragmented market. Direct "I'd pay for the scan version" evidence still anecdotal. |
| Build feasibility | 15 | 13/15 | Off-the-shelf vision + PDF gen; SDS-matching pipeline is the only gnarly bit. |
| Distribution clarity | 15 | 11/15 | OSHA-cited list + distributor partnership is concrete; conversion math on cold email to 1.9-person shops is unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked at 1/10 of incumbent; $1M needs only 0.23% penetration. Churn risk after deadline panic passes. |
| Time to first revenue | 10 | 8/10 | Deadline-driven urgency + free-scan funnel → pilots in weeks; pre-sellable against Nov 20. |
| Defensibility | 10 | 4/10 | Execution + accumulating SDS-match data + workflow lock-in (the binder lives here). Copyable; incumbents could move down-market. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (vision + document pipeline is the product) · `domain-expertise-required` (HazCom/GHS rules must be exactly right — wrong labels are worse than no tool).

### Key assumptions to validate (3–5)

1. **Assumption:** A phone-camera scan can identify the dominant janitorial-closet chemicals accurately enough (≥90% of the top ~300 products) to be trustworthy. **How to test:** Photograph real closets at 15 cleaning firms; measure match accuracy against ground truth.
2. **Assumption:** Owner-operators will pay ~$29–79/mo for a binder, not just grab a free SDS off the manufacturer site. **How to test:** Put up a paid pre-order/landing page targeting OSHA-cited firms; measure conversion before building.
3. **Assumption:** We can legally and reliably source current Rev-7 SDS PDFs at scale (public manufacturer SDS + a database partnership). **How to test:** Audit SDS availability for the top 300 janitorial chemicals; price a data-access deal.
4. **Assumption:** Demand survives past the Nov 2026 deadline (annual renewal, not one-time panic). **How to test:** Offer annual re-attestation in pilot pricing; measure renewal intent.

### Risk flags

1. **Market timing / deadline cliff:** Urgency peaks at Nov 20, 2026, then drops. Mitigate by converting to annual re-attestation + ongoing drift alerts so it's a renewing subscription, not a one-time purchase.
2. **Liability:** A wrong hazard label or "exempt" call could expose a customer to a citation. Must be conservative, cite the source SDS, and disclaim — domain accuracy is existential, not cosmetic.
3. **Data dependency:** Reliable SDS sourcing depends on manufacturer sites / a database partner; a partner price hike or scrape block hits margins. Validate the data deal before scaling.
4. **Incumbent move-down:** SDS Manager / MySDS could ship a phone-scan feature. Head start + janitorial-specific UX and distribution is the only moat — speed matters.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (vision/document AI) + a HazCom/EHS domain advisor
Time to revenue:        6–10 weeks (deadline-driven, pre-sellable)
Capital to launch:      $8–15K (mostly SDS data access + label/print testing)
Top 3 assumptions to validate first:
  1. Scan accuracy on top ~300 janitorial chemicals — photograph 15 real closets, measure match rate
  2. Willingness to pay $29–79/mo — paid pre-order page to OSHA-cited firms, measure conversion
  3. Legal/reliable SDS sourcing at scale — audit top-300 availability + price a data deal
Kill criteria:
  - Abandon if scan match accuracy on real closets stays below ~85% after two model/data iterations
  - Abandon if <3% of a 500-firm OSHA-cited cold list shows paid intent
  - Abandon if no viable SDS data-access path exists below a margin-killing per-lookup cost
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull OSHA establishment/citation data for HazCom + cleaning NAICS; build a 500-firm list of recently-cited small cleaning employers with emails.
- **Day 3–4:** Stand up a one-page "Scan your janitor closet, get your OSHA binder before Nov 20" landing page with a $29/mo pre-order and a 60-second mock scan video. Send the 500-firm sequence + post in two commercial-cleaning owner groups.
- **Day 5:** Decide go / no-go on a **falsifiable** outcome: ≥15 paid pre-orders (or ≥3% reply-to-intent on the cold list) = GO into the 8–12 week build; below that = the panic isn't convertible to dollars at this price, rework or PASS.
