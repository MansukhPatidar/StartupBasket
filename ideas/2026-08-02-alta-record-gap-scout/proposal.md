---
title: "ExceptionGap — records scout for land surveyors"
slug: alta-record-gap-scout
date: 2026-08-02
category: PropTech / US-SMB — Land Surveying Firms (1–20 Staff) Producing ALTA/NSPS Land Title Surveys
complexity: Medium
score: 72
verdict: GO
confidence: Medium
oneLiner: "Tells a surveyor which record documents are missing from the title commitment before fieldwork starts, not after."
tags:
  vertical: PropTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Document-extraction, Workflow-automation, Solo-builder, Compliance-driven]
axes:
  problem: 15
  demand: 11
  build: 12
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ExceptionGap

## 1. One-liner

Tells a surveyor which record documents are missing from the title commitment before fieldwork starts, not after.

## 2. Trend signal — why now?

Three things converged, and the third one has a date on it.

**The 2026 ALTA/NSPS standards moved the research burden onto the surveyor.** The new Minimum Standard Detail Requirements took effect **February 23, 2026**. I read the official NSPS redline rather than the law-firm summaries, because the summaries disagree with each other and several of them are wrong. Here is what actually changed in Section 4 (Records Research):

The 2021 standard required that the surveyor *"will be provided"* the listed documents. The 2026 standard changes that to *"**must** be provided."* New Section 4.A now requires *"complete copies of the most recent title commitment or, if a title commitment is not available, other title evidence satisfactory to the title insurer (if a recent title commitment is not provided, in some cases, **additional title research may be required on the part of and by the insurer or on the part of the surveyor due to state law**)."*

And the closing paragraph of Section 4 — this is the load-bearing one:

> *"Except, however, if the documents outlined in **B and C of** this section are not provided to the surveyor **or if non-public or quasi-public documents (e.g., highway or railroad plans) are otherwise required to complete the survey**, the surveyor must conduct that research which is required pursuant to the statutory or administrative requirements of the jurisdiction where the surveyed property is located."*

The 2021 version had a narrower carve-out. The 2026 version explicitly names non-public and quasi-public documents — highway plans, railroad valuation maps — as the surveyor's problem to go find when they're needed and nobody handed them over.

**A correction worth stating plainly, because it changes who the customer is.** Several widely-circulated law-firm alerts claim the 2026 standards shifted *adjoining property deed* research onto surveyors. That is backwards. The redline **strikes** old Section 4.C.i — *"The current record descriptions of any adjoiners to the property to be surveyed, except where such adjoiners are lots in platted, recorded subdivisions"* — from the list of documents to be furnished. It was deleted, not reassigned. Holland & Knight's reading is the correct one: the revisions *"will not materially expand survey scope, cost or timing in most real estate transactions."* I am **not** building on a claim of a big new mandated workload. I'm building on the narrower and more durable fact: when the furnished set is incomplete, closing that gap is now unambiguously the surveyor's job, and the standard now names the ugly categories by example.

**The profession that inherited this work is shrinking.** The average licensed Professional Land Surveyor in the US is **57 years old**. Of roughly 65,000 surveyors and related professionals, only about **9,000 are 34 or younger**. Some states report annual retirement rates as high as 10%. Capacity is leaving the building faster than it's being replaced, and the residual work is exactly the kind that can't be delegated to a field crew — it's desk research feeding a licensed signature.

**Money is already moving into surveyor AI — but only on the geometry side.** AirWorks sells autonomous linework from aerial data at a base of **$32.67/acre**. Attentive.ai raised a **$30.5M Series B** (Insight Partners, Nov 2025), taking it to **$48M** total, to push AI across preconstruction. Both prove surveying firms will buy AI tooling. Neither touches records.

Provenance:
  - Signal 1 (Demand): 2026 ALTA/NSPS standards effective Feb 23, 2026 — Section 4 changes "will be provided" to "must be provided" and makes the surveyor responsible for research when documents including non-public/quasi-public highway or railroad plans aren't furnished — https://cdn.ymaws.com/nsps.us.com/resource/resmgr/alta_standards/2026_OFFICIAL_REDLINE_PDF_AL.pdf — 2026-08-02
  - Signal 2 (Feasibility): Deed-plotting AI is now commodity (DeedPlotter AI, Deed Reader Pro, CADastral, Acres DeedAI all ship PDF→DXF), and nationwide recorder-document APIs cover 2,690+ counties (ATTOM) — proving cheap document AI and record retrieval are both off-the-shelf, while nobody applies them to gap detection — https://deedplotter.ai/ + https://www.attomdata.com/data/transactions-mortgage-data/recorder-data/ — 2026-08-02
  - Signal 3 (Economic): Surveying & Mapping Services in the US is a $11.5B market across 17,511 firms; record research bills at $85–160/hr and missing or conflicting deeds add $200–$1,000 of research per job; PLS average age 57 with only ~9,000 of 65,000 under 34 — https://www.ibisworld.com/united-states/market-research-reports/surveying-mapping-services-industry/ + https://www.homeadvisor.com/cost/architects-and-engineers/hire-a-land-surveyor/ + https://blog.airworks.io/how-to-mitigate-the-effects-of-retirement-labor-shortages-in-the-surveying-industry — 2026-08-02
  Category: Regulatory arbitrage

## 3. The opportunity

Every AI tool aimed at surveyors starts from a document you already have. Upload the deed PDF, get DXF linework back. DeedPlotter AI, Deed Reader Pro, CADastral, Acres DeedAI, DeedChek — five products, one shape. ALTA-Plot goes a step further and pulls Schedule B exception documents and returns geo-referenced linework.

All of them answer *"what does this document say?"*

None of them answer the question the surveyor asks first: **"do I have everything I need to start?"**

That's the gap. A title commitment arrives with Schedule B listing 22 exceptions. Some reference recorded instruments with book-and-page. Some reference instruments where the exception document itself wasn't attached. Some are blanket easements that can never be plotted and need a note instead. Some point at a railroad right-of-way whose valuation map lives in a state DOT archive or the National Archives, not the county recorder. Some are plattable, some aren't, and some *look* plattable until you read them.

Today a surveyor or a project manager reads all 22 by hand to sort them into those buckets, then starts emailing the title company for what's missing. The expensive failure isn't the reading — it's discovering on day 9, after the crew has already been to the site, that exception 14 needed a document nobody ever sent, and now the deliverable slips and the crew goes back out.

The incumbents can't easily follow here. Their product is a converter: document in, geometry out. Gap detection is the inverse — it reasons about *absence*, about what the commitment implies should exist, and about which categories of record live outside the county recorder entirely. Different job, different data plumbing, and it sits earlier in the workflow than anything they touch.

## 4. Target market

- **Primary customer:** Owner or project manager at a US land surveying firm with 1–20 staff that does ALTA/NSPS land title surveys for commercial transactions. The buyer is usually the licensed PLS who owns the firm, or the survey PM who assembles the job file.
- **Why they buy:** Not because a regulator will fine them — nobody fines you for this. They buy because a records gap discovered late costs a re-mobilization and a blown deadline on a transaction where the client is a lender with a closing date. ALTA surveys run **$3,000–$8,000** typically and $10,000–$20,000+ on large or complex sites, with standard turnaround of 2–3 weeks and rush service at a 30–50% premium. One avoided re-trip pays for a year of software.
- **Rough TAM reasoning:** IBISWorld counts **17,511 US surveying & mapping firms** in an **$11.5B** market. ALTA work concentrates in the commercial-capable subset — call it 3,000–5,000 firms that do it with any regularity. At $200/mo that's a $7–12M ceiling on the core wedge, which is exactly the size I want: too small to attract a funded competitor, plenty for a bootstrapper.
- **Why now for them:** The Feb 23, 2026 standards are the conversation-opener — every firm doing ALTA work has had to re-read Section 4 this year, and confusion is high enough that respected law firms published contradictory summaries of it. That's an unusually good moment to show up with a tool that has actually read the redline.

## 5. Product sketch (MVP)

- Upload the title commitment PDF; get back every Schedule B-II exception parsed into a line item with its recording reference
- Each exception auto-classified: **plottable** (has a legal description), **blanket / non-plottable** (needs a survey note instead), **needs document** (referenced but not attached), or **off-recorder** (railroad, highway, or other quasi-public source)
- A "what's missing" list, ranked by what will block fieldwork, ready to paste into an email to the title company
- Auto-retrieval of the recorded exception documents that are available through county recorder APIs, attached to their line items
- For off-recorder items, a pointer to the actual likely source — state DOT right-of-way map office, railroad valuation records at the National Archives, county surveyor's office
- A draft Summary of Easements note block, in the form the 2026 standards expect, stating for each item whether it's plotted, not plotted, or not plottable and why
- A one-page job-readiness sheet the PM can attach to the file before the crew mobilizes

## 6. AI angle — what's load-bearing

Remove the AI and this is a manual checklist, which is what firms already do and already lose money on.

The load-bearing work is judgment over messy prose. Schedule B exceptions are unstructured legal text written by dozens of different title examiners, and the classification a surveyor needs — *can this be plotted, does it burden or benefit, is the underlying document even in this packet, does this instrument live outside the recorder's office* — requires reading the exception the way an experienced PM reads it. That is precisely what a strong language model does well now and could not do reliably three years ago.

Note carefully what the AI does **not** do here: it doesn't certify anything, doesn't decide boundaries, doesn't replace licensed judgment. It produces a triage list a licensed professional reviews. That's a deliberate design choice — it keeps the product on the safe side of the licensure line, which is also why it can be sold without professional-liability exposure that would sink a solo builder.

## 7. Localization angle

`N/A — this is a US-only play.` The ALTA/NSPS standard is a US instrument, and the whole product is shaped around US county recording practice and US title commitment conventions. There's no meaningful port to another market; the analogous work elsewhere is structured completely differently.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo solo PLS · $299/mo firm (up to 10 seats) · $599/mo multi-office. Per-job overage credits for document retrieval, since recorder API pulls have real marginal cost.
- **ACV:** ~$3,600 blended.
- **Rough math to $1M ARR:** 280 firms at $299/mo ≈ $1.0M. Against 3,000–5,000 ALTA-capable firms that's 6–9% penetration — believable for a tool with a named channel, not believable for a horizontal SaaS.
- **Rough math to $5M ARR:** Needs either ~1,400 firms (roughly a third of the addressable base — hard) or expansion beyond the wedge. The honest path is the second: sell the same gap-detection to the *title* side, where the same incomplete commitment causes the same rework, and to the ALTA survey *review* step that commercial real estate counsel performs. I'd treat $5M as a stretch that depends on an expansion I haven't validated, and underwrite the business on $1–2M.
- **Expansion path:** Seats, then document-retrieval volume, then a reviewer-side product for the lender/counsel who receives the survey.

## 9. Go-to-market wedge — first 100 customers

- **State surveying societies, one at a time.** Every state has one (Texas TSPS, California CLSA, Florida FSMS, etc.), all of them run annual conferences and monthly chapter meetings, and all of them have spent 2026 running continuing-education sessions on the new standards. Sponsor or speak at chapter meetings in the five biggest states. A 20-minute talk titled "What the 2026 redline actually changed in Section 4 — and what three law firms got wrong about it" is a genuinely useful talk that ends with a demo. This is the primary channel and it is cheap.
- **Publish the redline analysis as the lead magnet.** The contradictory law-firm summaries are an opening. A clear, correct, cited side-by-side of 2021 vs 2026 Section 4 will get passed around surveyor Slack/Discord groups, RPLS.com, and LinkedIn on its own merits. Gate nothing; put the product at the bottom.
- **Direct outreach to the ALTA-capable subset.** NSPS member firm directories plus state license rosters are public. Filter to firms whose sites advertise ALTA/NSPS work, which is a strong buying signal — that's a few thousand names, not 17,511. Send a worked example: take a real (public, redacted) commitment, run it, and send the firm the gap sheet it produces. Show, don't pitch.
- **Title company side-door.** Title companies are the ones who get emailed for missing exception documents. A tool that makes those requests arrive complete and specific the first time is something a title rep will happily mention to the surveyors they work with. Warm intros, zero CAC.
- **CE credit.** Getting a short course approved for continuing-education credit in two or three states puts the product in front of licensees who are *required* to sit through it. Slow to set up, unusually durable once done.

## 10. Build complexity — justification

**Medium.** The document parsing and classification is off-the-shelf model work against a well-structured input (title commitments are formulaic even when the prose inside them isn't). The genuinely fiddly part is document retrieval: county recorder coverage is uneven, some counties are API-accessible through aggregators like ATTOM, many are portal-only, and a few are still counter-only. The right MVP scope is to nail classification and the missing-list everywhere, and offer auto-retrieval only in the counties where it actually works, labeling the rest honestly. A pair could ship this in 10–14 weeks; a solo builder in about four months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Produces a triage list for a licensed professional; makes no certification and offers no legal opinion. |
| Ethical — no harm / dark patterns | ✅ | Reduces rework. No lock-in tricks, no dark patterns. |
| Market exists (evidence above) | ✅ | 17,511 firms, $11.5B; research already billed at $85–160/hr; adjacent AI tools funded and selling. |
| 1–5 person team can build this | ✅ | Document AI plus recorder APIs. No novel research. |
| Launchable with <$50K / ₹40L | ✅ | Model inference, recorder API credits, conference travel. Well under. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring, costs money via re-mobilization and blown closing dates. Docked because it's a margin-and-schedule problem, not hair-on-fire: no regulator fines you for a late records gap, and firms have limped along with checklists for decades. |
| Demand evidence | 15 | 11/15 | Strong indirect evidence — funded adjacent AI (AirWorks, Attentive.ai $48M), five shipping deed-plotting tools, research billed hourly at known rates, a dated standards change. Docked hard because I could not obtain direct customer voice: RPLS.com forums returned 403 and Reddit was unreachable. I have no verbatim surveyor quote saying this specific gap hurts. That is the weakest link in this proposal and I'm not dressing it up. |
| Build feasibility | 15 | 12/15 | Off-the-shelf document AI; the uneven county-recorder coverage is the only real engineering drag. |
| Distribution clarity | 15 | 12/15 | State societies and CE credit are named, finite, and cheap; ALTA-capable firms are identifiable from public rosters. Not a 2-week sprint, though — conference cycles are slow. |
| Revenue mechanics | 15 | 11/15 | $149–599/mo is comfortably inside a wallet that already bills $85–160/hr for this work. $1M is credible; $5M depends on an unvalidated expansion. |
| Time to first revenue | 10 | 8/10 | Pre-sellable from the redline analysis before the product is finished; 6–10 weeks to first paid seat is realistic. |
| Defensibility | 10 | 3/10 | Execution-only. The classification prompt is copyable by any of the five deed-plotting incumbents in a quarter if it works. What little moat exists accrues from per-county retrieval knowledge and society relationships. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs someone who will actually read the ALTA standard and ideally has a surveyor or title professional as a design partner from week one. A generalist SaaS builder will produce something that classifies exceptions plausibly and wrongly, and surveyors will spot it immediately.

### Key assumptions to validate (3–5)

1. **Assumption:** Late-discovered records gaps cause re-mobilization or schedule slip often enough to be worth $299/mo. **How to test:** 15 structured interviews with ALTA-doing PMs — ask for the count of jobs in the last 12 months where a missing exception document delayed fieldwork or the deliverable, and what it cost. This is the assumption the whole idea rests on and it is currently unverified.
2. **Assumption:** Classification is accurate enough on real commitments to be trusted. **How to test:** Run 50 real commitments; have a licensed PLS grade the four-way classification. Needs ≥90% agreement to be useful, because a tool that misses exceptions is worse than no tool.
3. **Assumption:** The buyer is the firm owner/PM and the sale doesn't need a committee. **How to test:** Get to a signed order from a conference conversation without a second stakeholder appearing.
4. **Assumption:** Recorder auto-retrieval works in enough counties to feel magical rather than patchy. **How to test:** Measure hit rate across the 100 highest-transaction-volume US counties before promising the feature.

### Risk flags

1. **Incumbent adjacency:** ALTA-Plot already pulls Schedule B exception documents and returns linework. It is one product decision away from adding gap detection. This is the most serious competitive risk and it argues for speed and for going deeper on off-recorder sources than a converter would bother with.
2. **Evidence risk:** The demand case is assembled from market structure and adjacent funding, not from surveyors saying they want this. The 1-week sprint below exists specifically to attack that.
3. **Thin problem risk:** It's possible firms simply absorb this cost as the way the job has always been, and treat a $299/mo tool as unnecessary. Long-tenured professions tolerate a lot of manual work.
4. **Market timing:** The Feb 2026 standards attention window is a 2026 phenomenon. By 2027 the change is old news and the wedge narrative gets weaker.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with a licensed PLS or title professional as design partner
Time to revenue:        6–10 weeks
Capital to launch:      $8–15K (inference, recorder API credits, two state conferences)
Top 3 assumptions to validate first:
  1. Late records gaps cause real, countable rework — 15 PM interviews asking for incident counts and costs
  2. Four-way exception classification hits ≥90% agreement with a licensed PLS across 50 real commitments
  3. Firm owner/PM can buy alone at $299/mo without a committee
Kill criteria:
  - Abandon if fewer than 6 of 15 interviewed PMs can name a specific job in the last year where a missing
    exception document delayed fieldwork or the deliverable
  - Abandon if classification accuracy stays below 90% against PLS grading after two iterations
  - Abandon if ALTA-Plot or a deed-plotting incumbent ships gap detection before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the redline analysis of 2021 vs 2026 Section 4 — the correct one, citing the NSPS PDF, noting where the law-firm summaries diverge. Publish it. Post to RPLS.com, LinkedIn surveying groups, and two state society mailing lists. This costs nothing and is useful whether or not the product gets built.
- **Day 3–4:** Use it as the reason for 15 conversations with ALTA-doing PMs. One question carries the week: *"In the last 12 months, how many jobs had fieldwork or delivery delayed because an exception document wasn't in the packet — and what did that cost you?"* Record counts and dollars, not enthusiasm.
- **Day 5:** Hand-run 20 real commitments through a prompt and have a PLS grade the classification.
- **Decide:** Go only if **≥6 of 15** name a specific costly incident **and** hand-classification clears **90%**. Below either threshold, the pain is real but too cheap to sell against, and this becomes a feature of somebody else's product rather than a company.

The failure mode this sprint is designed to catch: surveyors agreeing the gap is annoying while being unable to name a single job it actually cost them money on. Agreement is not demand.
