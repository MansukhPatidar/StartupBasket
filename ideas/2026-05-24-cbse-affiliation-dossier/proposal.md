---
title: "SarasFold — affiliation dossier for small CBSE schools"
slug: cbse-affiliation-dossier
date: 2026-05-24
category: Compliance / India Small CBSE Schools
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: Packages the SARAS, OASIS and Mandatory Public Disclosure paperwork that small CBSE schools normally pay ₹2L consultants to assemble.
tags:
  vertical: Compliance
  model: SaaS
  geography: India
  secondary: [EdTech, AI-agent, Compliance-driven, SMB, Multilingual]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 10
  revenue: 12
  time: 8
  defensibility: 7
founderFit: [domain-expertise-required, operations-heavy]
featured: false
---

# SarasFold — affiliation dossier for small CBSE schools

## 1. One-liner

Packages the SARAS, OASIS and Mandatory Public Disclosure paperwork that small CBSE schools normally pay ₹2L consultants to assemble.

## 2. Trend signal — why now?

Three deadline-driven shifts hit CBSE schools in the last 90 days.

**SARAS 7.0 launched 26 Feb 2026** for session 2027-28 affiliations and extensions. Window stays open until 31 July 2026. Notification 06/2026 changed the rules — number of permitted sections is now derived from total built-up area (3 sections per 400 sqm), and **100% physical inspection** is mandatory for fresh affiliation and upgradation. Schools that had stretched section counts now need to redo their math and re-file.

**OASIS data refresh circular dated 9 Feb 2026** forced every affiliated school to re-verify Class 11–12 teacher records (email, mobile, qualifications, subjects) for the new On-Screen Marking evaluation system. Sync takes 6 hours per teacher. If the principal mis-types a single email, that teacher misses OSM allocation and the school gets an explanation circular.

**Mandatory Public Disclosure (Appendix IX) deadline 15 Feb 2026** required all 21,500+ affiliated schools to refresh the MPD section on their public website with self-attested infrastructure, fee, staff and result data. CBSE has been issuing reminder circulars about non-compliance and threatening affiliation review.

Independent CBSE schools (~16,741 of them) without an in-house compliance officer end up paying affiliation consultants ₹50K–₹2L/year retainer plus ₹5–15L for full affiliation/extension work. ERP vendors (₹25K–₹4L/year) sell student attendance and fees — they explicitly do not touch SARAS / OASIS / MPD.

Provenance:
  - Signal 1: Demand — Affiliation consultants charge ₹5–15L for full CBSE affiliation/extension work; ERPs charge ₹25K–₹2L/yr but skip compliance — https://vapstech.com/how-much-does-school-erp-software-cost-in-india/ and https://www.raysolute.com/cbse-school-affiliation-consultants.html — 2026-05-24
  - Signal 2: Regulatory — CBSE SARAS 7.0 portal opens 26 Feb 2026 with new built-up area / section rules and mandatory 100% physical inspection — https://www.indiatvnews.com/education/news/cbse-releases-saras-7-0-portal-for-2027-28-school-affiliations-with-new-built-up-area-rules-details-2026-02-26-1031840 — 2026-02-26
  - Signal 3: Feasibility — CBSE 9 Feb 2026 OASIS data circular forces every school to update Class 11–12 teacher records for OSM (sync 6h, every typo blocks evaluation) — https://www.cbse.gov.in/cbsenew/documents/OASIS_data_updation_teachers_OSM_09022026.pdf — 2026-02-09
  Category: Regulatory arbitrage

## 3. The opportunity

Three separate CBSE compliance surfaces (SARAS affiliation portal, OASIS teacher data, Appendix IX public disclosure) are owned by one person at a small school — usually the Principal or an admin assistant. None of the three has decent software. The consultants who own the high end of this market are slow, expensive, and won't pick up the phone for a 400-student school. The ERP vendors deliberately stay out. The result: most independent CBSE schools below 1,000 students do this work in Word, Excel and panicked WhatsApp threads, and they pay ₹50K–₹2L/year to a consultant who is mostly correcting their typos.

The wedge is a vertical compliance tool: ingest the school's existing scattered docs (staff CSVs, infrastructure photos, fee notification PDFs, last year's MPD page), run them against the live SARAS 7.0 / Appendix IX / OASIS schemas, return a colour-coded gap list + a ready-to-publish MPD HTML block + a SARAS-ready PDF pack. Annual subscription, priced below what the consultant already costs.

Incumbents to displace: regional CBSE consultants (RGF Edu, Raysolute, Bhavishya, hundreds of one-man shops). What they do badly: manual document handling, no version control, no proactive alerting when CBSE issues a new circular, no self-service. An AI-first tool collapses their ₹2L retainer into a ₹15K/year SaaS that does 80% of the job and flags the 20% that needs a human.

## 4. Target market

- **Primary customer:** Principal or Head of Administration at an independent CBSE-affiliated school, 200–1,500 students, Tier-2 or Tier-3 Indian city, no in-house compliance officer. Single decision-maker, owns the SARAS login.
- **Why they buy:** "I just got another CBSE circular and I have no idea if my disclosure page is still compliant. The consultant takes 3 days to respond. My affiliation extension is in 14 months and I can't sleep." They feel acute pain at four moments per year — MPD refresh, OASIS update, annual SARAS data sync, and pre-inspection panic.
- **Rough TAM reasoning:** 16,741 independent CBSE schools (SARAS 7.0 portal stats); strip out the top ~1,500 chains that have in-house compliance teams, leaves ~15,000 addressable. At ₹15K/year ARPU, ceiling is ~₹22.5 crore (~$2.7M) ARR. Add ICSE (~2,400 schools), CISCE, state boards adopting NEP framework — the same compliance shape extends to ~60K schools total in 3 years.
- **Why now for them:** SARAS 7.0 introduced section-area math that invalidates previous affiliation paperwork; MPD non-compliance is being publicly named in CBSE press releases; OSM mandates teacher data accuracy or the school misses evaluation slots. The combination means doing it in Word is no longer survivable.

## 5. Product sketch (MVP)

- **MPD generator** — paste school's SARAS code, pull existing data, surface the Appendix IX fields that are missing or out of date, output a copy-paste HTML block for the school website
- **OASIS reconciler** — upload current teacher CSV, get a diff against what OASIS shows, flag email/mobile/qualification mismatches before they break OSM allocation
- **Section-area calculator** — enter built-up area, get the max permissible sections under Notification 06/2026, compare to current strength, flag the gap before SARAS does
- **Circular tracker** — every CBSE circular gets parsed and the principal gets a one-line WhatsApp message: "New circular X means you need to do Y by Z"
- **Pre-inspection checklist** — staff qualifications, fire-NOC, building-NOC, lab equipment, library books, CCTV footage retention — green/amber/red against the live inspection schema
- **Affiliation extension packet** — 14 months before expiry, system starts building the renewal dossier; principal answers prompts, system assembles the SARAS-ready PDF bundle
- **Multi-user roles** — principal, admin head, and the school's external CA / consultant can all see the same compliance state

## 6. AI angle — what's load-bearing

Two AI-load-bearing pieces. First, document understanding — CBSE publishes circulars as scanned PDFs with tables, infrastructure inspection schemas as Word docs, MPD as a strict-but-poorly-documented HTML format. Parsing those into a structured compliance schema and keeping it current as CBSE changes its mind every quarter is exactly the work LLMs do well and rule-based scrapers do badly. Second, school-side ingest — schools send WhatsApp photos of staff appointment letters, fee notifications scribbled in Hindi-English, Excel sheets with no headers. The product reads all of that and normalises it into the SARAS schema. Strip the AI out and you are back to the consultant's manual workflow at consultant prices.

## 7. Localization angle

This is India-only by definition — CBSE is a uniquely Indian regulatory surface. Localisation depth matters: the product has to handle Hindi-script staff names, regional-board cross-references (e.g. a school migrating from state board to CBSE brings legacy paperwork in Marathi or Tamil), and WhatsApp as the dominant comms channel for principals. UPI for ₹15K annual subscription, GST e-invoice for the school's books. Pricing must work at the rural Tier-3 wallet — ₹15K/year is roughly two months of a single PRT teacher's salary, which is a defensible expense for a 400-student school. A US/EU SaaS pricing of $49/mo would not survive 5 minutes.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹15,000/year base for schools up to 500 students. ₹25,000/year for 500–1,500. ₹45,000/year for 1,500+. Add-on: ₹35,000 one-shot for affiliation-extension dossier build (replaces a ₹2L consultant engagement).
- **ACV:** ~₹18,000 (~$216) base + ₹8,000 average add-on attach = **~₹26,000 (~$310)**.
- **Path to $1M ARR (~₹8.3 crore):** ~3,200 paying schools × ₹26,000. That is ~21% of the addressable 15K independent CBSE schools. Aggressive but reachable in 24 months if pre-inspection panic and SARAS-window timing drive concentrated sales sprints.
- **Path to $5M ARR (~₹42 crore):** ~16,000 paying schools, which requires breaking out of independent CBSE into ICSE + state-board NEP-compliance equivalents. Plausible in year 3–4 with a vertical sales motion + channel partners (district-level consultant resellers).
- **Expansion path:** teacher CPD (NEP 50-hour) tracking, NIOS / state-board variants, parent-side fee-receipt UPI integration, then payroll for staff. Compliance is the wedge; the school admin OS is the prize.

## 9. Go-to-market wedge — first 100 customers

- **CBSE affiliated-schools directory scrape** — SARAS 7.0 publishes the full state-wise list with principal email/phone. Filter to independent schools <1,500 students in 5 Tier-2 cities (Indore, Jaipur, Lucknow, Coimbatore, Bhubaneswar). That gives ~2,000 names. Send a personalised WhatsApp + email with "your MPD page is missing Section B fields 3, 7, 11" — auto-generated by running the public site through the gap-checker. Expect 5–8% reply rate.
- **CBSE Sahodaya cluster meetings** — every district has a Sahodaya cluster of CBSE principals that meets monthly. Show up at 6 of them with a 20-minute demo and a free MPD audit for any school that hands over their SARAS login.
- **Affiliation-extension hit list** — SARAS portal reveals which schools' affiliation expires in 2027–28 (the current open window). That is a finite, named, time-pressured list of ~3,500 schools — cold them directly with the affiliation-extension dossier offer.
- **Consultant channel** — small affiliation consultants (one-person shops) are drowning. License the tool to them at ₹5,000/school/year as a productivity layer; they keep their margin, we ride their distribution.
- **WhatsApp circular-summary newsletter** — free, daily, "today's CBSE circular in one line + what you should do." Principal-targeted content that funnels into the paid product.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: doc-parsing LLM, web scraping (SARAS/OASIS public lists), HTML generation, WhatsApp Business API, UPI billing. Custom: the compliance schema (Appendix IX field map, OASIS field map, inspection checklist) needs to be hand-built and version-controlled as CBSE changes it. The first three months are mostly compliance domain work, not engineering. Pair of one technical founder + one ex-CBSE-consultant operator should ship v1 in 14–16 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | No regulatory barrier — we are not the school, we help the school comply |
| Ethical — no harm / dark patterns | ✅ | Helps comply, not evade |
| Market exists (evidence above) | ✅ | 16,741 independent CBSE schools, existing consultant spend ₹50K–₹15L |
| 1–5 person team can build this | ✅ | 2 founders, 14–16 weeks |
| Launchable with <$50K / ₹40L | ✅ | Sub-₹10L launch budget |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Acute and deadline-bound; principal loses sleep before MPD/OASIS/SARAS deadlines. Not daily pain, but spike pain. |
| Demand evidence | 15 | 12/15 | Established consultant spend (₹50K–₹15L), 21,500+ schools forced into action by Feb 2026 circulars. Direct WTP signal. |
| Build feasibility | 15 | 11/15 | Domain-knowledge-heavy schema work; not tech-novel. 14–16 weeks honest estimate. |
| Distribution clarity | 15 | 10/15 | Named, finite list (SARAS public directory). Sahodaya clusters give physical channel. Conversion rate untested. |
| Revenue mechanics | 15 | 12/15 | Pricing well below consultant baseline; ₹15K is a no-brainer line item. Add-ons attach naturally. |
| Time to first revenue | 10 | 8/10 | First paid school in <8 weeks via Sahodaya demo or cold-WhatsApp. |
| Defensibility | 10 | 7/10 | Compliance schema gets sharper with every CBSE circular processed — accumulates over time. Brand among principals matters. Copyable in year 1, hard to catch in year 2. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `operations-heavy`

A founder who has never sat across from a CBSE inspector will get the schema wrong. Either co-found with an ex-affiliation-consultant or spend the first 8 weeks doing on-site work at 10 schools.

### Key assumptions to validate (3–5)

1. **Assumption:** A Tier-2 CBSE principal will pay ₹15K/year for a tool that today's free Word-template gets them through. **How to test:** 30 in-person Sahodaya-cluster demos in Indore + Jaipur, ask for a signed LOI at ₹15K — target 5+ commitments.
2. **Assumption:** Schools' existing data (staff CSVs, fee PDFs, photos) is parseable enough that 80%+ of MPD fields can be auto-filled. **How to test:** run the parser against 20 real schools' artefacts, measure % auto-filled vs. human-edit needed.
3. **Assumption:** The CBSE-side schemas (Appendix IX, OASIS, SARAS 7.0) are stable enough that schema-maintenance does not become a full-time job. **How to test:** diff CBSE circulars from Jan–May 2026, count schema-breaking changes per quarter — abandon if >2.
4. **Assumption:** Cold-WhatsApp to principals lands above 5% reply rate. **How to test:** 500-message pilot in 3 cities, measure reply + booked-demo rate.

### Risk flags

1. **Platform dependency:** SARAS / OASIS are CBSE-controlled portals. If CBSE builds its own free MPD generator (they have hinted at it), the wedge collapses. Mitigate by going broader into school-admin OS quickly.
2. **Regulatory risk:** CBSE changes the schema every 12–18 months. Schema maintenance is real ongoing cost, not a one-time build.
3. **Sales-cycle risk:** School year decision-making is seasonal. April–June and Nov–Jan are buy windows; mid-cycle, principals do not even pick up. Cash-flow planning must account for lumpy revenue.
4. **Consultant pushback:** Existing consultants will badmouth the tool to retain ₹2L retainers. Channel-licensing them mitigates but does not eliminate.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with ex-CBSE affiliation consultant
Time to revenue:        6–8 weeks (first paid school via Sahodaya cluster)
Capital to launch:      ₹8–10 lakh ($10–12K)
Top 3 assumptions to validate first:
  1. ₹15K/yr WTP at Tier-2 independent CBSE schools — 30 in-person Sahodaya demos, target 5 signed LOIs
  2. ≥80% MPD auto-fill from existing school artefacts — parser test against 20 real schools
  3. >5% cold-WhatsApp reply rate to principals — 500-message pilot in 3 cities
Kill criteria:
  - Abandon if <3 of 30 Sahodaya-cluster demos convert to signed LOI in 6 weeks
  - Abandon if CBSE launches its own free MPD generator before our v1 ships
  - Abandon if schema-maintenance load exceeds 2 days/week per engineer in month 4
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape SARAS 7.0 directory for independent CBSE schools 200–1,500 students in Indore + Jaipur. Build a 600-school named list with principal contact + current MPD page URL.
- **Day 3:** Run a hand-built MPD gap-checker against 60 of those schools' public MPD pages. Generate a per-school one-page audit ("you are missing fields 3, 7, 11; here is the correct format").
- **Day 4:** WhatsApp + email the audit to 60 principals with a calendly link for a 15-min call. Free, no sell.
- **Day 5:** Take whatever calls book in. On each call, ask "would you pay ₹15K/year for a tool that does this and 4 other things?" Document responses. **Go criterion:** ≥6 principals say yes and ≥2 hand over their SARAS login for a pilot.
