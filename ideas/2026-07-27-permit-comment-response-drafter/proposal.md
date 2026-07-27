---
title: "PlanReply — comment-response drafter for small architecture firms"
slug: permit-comment-response-drafter
date: 2026-07-27
category: PropTech / US-SMB — Small Residential & Light-Commercial Architecture / Design-Build Firms
complexity: Medium
score: 71
verdict: GO
confidence: Medium
oneLiner: "Turns a city's plan-check correction letter into an itemized, code-cited response the reviewer accepts first time."
tags:
  vertical: PropTech
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Workflow-automation, Solo-builder, Compliance-adjacent]
axes:
  problem: 15
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 6
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PlanReply — comment-response drafter for small architecture firms

## 1. One-liner

Turns a city's plan-check correction letter into an itemized, code-cited response the reviewer accepts first time.

## 2. Trend signal — why now?

Permit-tech is where the money is going right now, and every dollar of it is chasing the *approval* side of the loop — not the part where the small firm has to answer the city.

- **PermitFlow raised a $54M Series B** (Accel, Kleiner Perkins, Felicis, Initialized, Altos, YC) — permit logistics/filing, not code reasoning on the response.
- **CodeComply.Ai raised $2M seed** at **$3,000/seat/year**, selling to cities and large developers. 15–20 orgs piloting.
- **Kestrel Labs raised $2.15M pre-seed** for compliance *inside Autodesk Revit* — a pre-submission BIM play, wrong shape (and wrong price) for a two-person residential shop that draws in AutoCAD.
- Independent tools (PlanCheckPro, PlanCheckerPro, Archistar PreCheck) do same-day **pre-submission** code review — proving LLMs can now read a drawing set + code and produce cited findings. That capability is the unlock; nobody's pointed it at the *inbound correction letter*.

And the pain is documented, specific, and recurring:

- "The far more common outcome is a correction cycle: you receive comments, you revise the set, you write responses, and you resubmit, with each round adding weeks." (cadtri.com)
- Cities reject generic responses: "Generic responses like 'Done,' 'Corrected,' or 'Fixed' are not considered sufficient." — response letters must list each comment verbatim, the action taken, and the exact sheet/detail location (Danville CA guideline; Seattle SDCI).
- "Response letters from design professionals accompany less than 1/3 of resubmittals" — so most resubmittals bounce again on format alone (jdj-consulting.com).
- Average delay from a rejected application is **30 to 90 days**; a rejection forcing redesign "can reset the timeline by a month or more" (permitplace.com, cadtri.com).

Provenance:
  - Signal 1 (Demand): Correction/response cycle adds weeks per round; <1/3 of resubmittals include a proper response letter; cities reject "Done/Fixed" and require verbatim-comment + action + sheet-location format — https://jdj-consulting.com/how-to-prepare-a-complete-building-permit-package-that-wont-get-rejected/ , https://www.danville.ca.gov/DocumentCenter/View/4352/Response-to-Comment-Letter-Guideline-PDF — 2026-07-27
  - Signal 2 (Feasibility): LLMs now read a drawing set + code sections and return same-day, citation-backed reviews (PlanCheckPro, Archistar PreCheck); Sumer Innovations ships an AI comment-response generator for engineers — the capability is proven and cheap — https://plancheckpro.ai/ , https://sumerinnovations.com/comment-response-generator/ — 2026-07-27
  - Signal 3 (Economic): PermitFlow $54M Series B, CodeComply.Ai $2M seed ($3K/seat/yr), Kestrel Labs $2.15M pre-seed — heavy 2025–26 permit-tech funding, all aimed at cities / pre-submission BIM, leaving the small-firm response loop uncontested — https://americanentrepreneurship.com/permitflows-54m-in-series-b-funding-to-revolutionize-construction-with-ai/ , https://refreshmiami.com/news/with-2m-in-tow-ai-startup-codecomply-ai-aims-to-accelerate-construction-approvals-and-reshape-compliance-checks/ — 2026-07-27
  Category: Underserved niche (with a workflow-automation core)

## 3. The opportunity

The permit-tech gold rush is fighting over the two ends of the loop and ignoring the middle. City-side reviewers (CodeComply, CivCheck, Archistar) sell to municipalities. Pre-submission checkers (Kestrel-in-Revit, PlanCheckPro) try to stop the first rejection. PermitFlow handles filing logistics. **Nobody owns the moment the correction letter lands back in the small firm's inbox** — which is the moment that actually burns the calendar, because the average firm resubmits 2–3 times per project.

That moment is a grind: read 18 numbered comments, find the code section each one cites (or *should* cite), figure out which sheet and detail it touches, decide whether to fix the drawing or push back, and then write a formatted letter that quotes each comment verbatim with the action taken and the location. A senior person does this because a junior gets the code wrong. It's a half-day to a full day of a $150/hr person's time, per resubmittal, and if the format is sloppy the whole thing bounces on procedure — which is exactly why <1/3 of resubmittals even ship with a proper letter.

The seam that makes this fresh: the funded players are Revit-native and priced for developers/cities ($3K/seat). The buyer who feels this pain hardest — the 2–8 person residential/light-commercial firm and the solo permit expediter — draws in AutoCAD/PDF, has no Revit compliance budget, and just wants the correction letter turned around correctly, today. PlanReply is the tool built for *their* half of the loop, at *their* price.

## 4. Target market

- **Primary customer:** Owner or senior architect at a 2–8 person residential / light-commercial architecture or design-build firm in the US; and solo/small permit expediters who resubmit on behalf of others. Job title: Principal, Project Architect, or Permit Expediter. These firms run 15–60 active permit projects a year.
- **Why they buy:** "Each correction cycle adds weeks." Their senior person loses half a day per resubmittal cross-referencing code and writing a response letter that the city won't reject on format — and if a junior does it, it bounces and costs another 2–4 weeks. They already know they lose money every time a resubmittal round-trips.
- **Rough TAM reasoning:** ~120,000 architecture firms in the US; the large majority are <10 people. Add tens of thousands of design-build contractors and permit expediters who submit plans. A serviceable target of even 20,000 small firms + expediters at a few hundred dollars a month is a solid multi-million-ARR niche — too small to interest the $54M-Series-B crowd, perfect for a bootstrapper.
- **Why now for them:** The capability to read a drawing set + a comment letter + the code and draft a cited response only became cheap and reliable in the last ~12 months (same-day AI code review is now a shipping product). Before that, this was irreducibly a senior human's job.

## 5. Product sketch (MVP)

- **Upload the correction letter + the drawing set (PDF).** PlanReply parses every numbered comment and maps it to the sheet/detail it references.
- **Per-comment draft response** in the exact format cities demand: comment quoted verbatim → action taken → sheet/detail location → the specific code section that supports it.
- **Code citation lookup** — pulls the relevant IBC / IRC / Title 24 (start with 2–3 model codes + California) section for each comment so the response cites chapter and verse instead of "Corrected."
- **Fix-or-push-back flag** — for each comment, suggests whether it needs a drawing change or a written clarification, and drafts the clarification argument when the reviewer looks wrong.
- **Punch list export** — the drawing-change items as a checklist the drafter works through, so nothing gets missed and re-bounced.
- **One-click formatted response letter** (PDF/DOCX) matching the jurisdiction's expected layout, ready to attach to the resubmittal.
- **Jurisdiction memory** — remembers a given city's format quirks and this reviewer's recurring hot-buttons across projects.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — it's a blank Word template. The load-bearing work is: (a) reading an unstructured, scanned, or oddly-formatted correction letter and splitting it into discrete comments; (b) matching each comment to the right sheet/detail in a large drawing set; (c) retrieving and correctly citing the governing code section; and (d) drafting a response in the reviewer-acceptable register (specific, cited, not "Done"). That's four language/vision tasks that only became reliable and cheap recently. This is the same capability the funded pre-check tools proved works — just pointed at the inbound letter instead of the outbound plan.

## 7. Localization angle (if any)

N/A — this is a US-first play, and deliberately so. The value is entirely in knowing US model codes (IBC/IRC), state amendments (California Title 24 first — it generates the most correction cycles), and the response-letter conventions US jurisdictions enforce. I looked hard at an India version (RERA + OBPS objection memos) and rejected it: India's approval friction is substantially bribe- and relationship-driven, objection text is less standardized, and the state portals already run pre-submission auto-checks — a written-response tool doesn't hit the real bottleneck there. Geography here is a moat *because* code knowledge doesn't travel.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo solo tier (unlimited comments, ~5 active projects); $399/mo firm tier (up to ~8 seats / 25 active projects). Optional per-project overage. Benchmarked below CodeComply's $3K/seat/yr because we serve the down-market they ignore.
- **ACV:** ~$3,000–$4,800/yr for firm tier; ~$1,800/yr solo.
- **Rough math to $1M ARR:** ~300 firm accounts × $300/mo × 12 = $1.08M. Reachable from a base of 120K US firms.
- **Rough math to $5M ARR:** ~1,200 accounts at a blended ~$350/mo, plus a per-project usage layer for expediters who process high volume. Requires expanding beyond CA into the top 8–10 states' amendments and landing the expediter segment as a channel.
- **Expansion path:** seats as firms grow → per-project overage → adjacent modules (initial-submission pre-check to *prevent* the first rejection, and a completion/CO document assembler). Land on the response letter, expand across the permit lifecycle.

## 9. Go-to-market wedge — first 100 customers

- **Permit expediters first — they feel it 20× a month.** There are public directories/listings of permit expediting services by metro. Scrape ~500, send each a personalized Loom: take one *real* redacted correction letter from that city and show PlanReply drafting the response in two minutes. Expediters resubmit constantly; a tool that saves 3 hours/project is an instant yes.
- **AIA local chapters + state licensing rosters.** Small-firm architects cluster in local AIA chapters. Offer a "beat your plan-check backlog" lunch-and-learn to 5 chapters in California; each chapter is 50–200 small firms in one room.
- **Own the correction-letter forums.** The Building Code Forum, r/Architects, r/Construction, and city-permit Facebook groups are full of people venting about the resubmittal loop. Answer their actual questions with a free single-letter analysis; the free tool is the funnel.
- **City-specific SEO/landing pages.** "[City] plan check correction response" is a searched, high-intent, near-zero-competition query. One page per top-50 jurisdiction, each linking to a free single-letter draft.
- **Design-build contractor associations (NAHB remodeler councils).** Design-build shops eat the permit delay directly in their construction schedule — high willingness to pay to compress it.

## 10. Build complexity — justification

Medium. The parsing (comment letter → discrete items), drawing-set retrieval (find the referenced sheet), code retrieval + citation, and letter generation are all off-the-shelf LLM + document/vision work — no custom models, no hardware. The genuine build cost is the **code corpus**: ingesting and structuring IBC/IRC + California Title 24 (and later state amendments) so citations are correct, plus tuning per-jurisdiction letter formats. That's the moat and the work. A technical founder with a code-savvy architect advisor ships a credible California-only v1 in ~10–14 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Drafting a response letter for a licensed professional to review/sign is standard assistive tooling; the architect remains the signatory. |
| Ethical — no harm / dark patterns | ✅ | Speeds a legitimate compliance workflow; output is reviewed and signed by a licensed pro. Must guard against over-trusting citations (see risks). |
| Market exists (evidence above) | ✅ | Documented correction cycles, funded adjacent players, existing paid tools. |
| 1–5 person team can build this | ✅ | Off-the-shelf AI over documents; hardest part is the code corpus, not headcount. |
| Launchable with <$50K / ₹40L | ✅ | Solo/pair build, inference + code-data ingestion the main costs. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring, dollar-costed pain (weeks of delay per round). Not hair-on-fire *daily* — it's per-project, and firms have grudgingly-tolerated workarounds (do it by hand). |
| Demand evidence | 15 | 12/15 | Multiple independent signals: funded competitors, existing paid pre-check tools, an existing engineer-focused response generator, city guidelines proving the format pain. Direct small-architect verbatim demand for *this exact* product is still thin. |
| Build feasibility | 15 | 11/15 | Standard LLM/document stack, but the code corpus + citation accuracy is non-trivial and the failure mode (a wrong citation) is costly. 10–14 weeks to a CA v1. |
| Distribution clarity | 15 | 12/15 | Expediter directories + AIA chapters + high-intent city SEO give a concrete, cheap first-100 path. Conversion math still unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked below a funded incumbent; ACV and customer count for $1M ARR are realistic. Churn risk if firms only permit seasonally. |
| Time to first revenue | 10 | 6/10 | Needs the CA code corpus before first paid value; realistically 8–12 weeks to first dollar, not pre-sellable in a week. |
| Defensibility | 10 | 4/10 | Execution + accumulating code/jurisdiction corpus is a soft moat, but a funded player could bolt this onto their existing pre-check product. Head start + niche focus, not a wall. |
| **Total** | **100** | **71/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — you need someone who can build reliable document/code retrieval, paired with an architect or plans examiner who knows what a reviewer actually wants to read.

### Key assumptions to validate (3–5)

1. **Assumption:** Small firms/expediters will pay $149–$399/mo to compress the response loop rather than keep doing it by hand. **How to test:** 20 discovery calls with expediters + small-firm principals; get 5 to commit to a paid pilot before building past a demo.
2. **Assumption:** An LLM can cite the *correct* code section reliably enough that a licensed pro trusts (and reviews) the draft, not distrusts it. **How to test:** Run 30 real redacted correction letters through a prototype; measure citation accuracy vs. an architect's ground truth. Kill if accuracy is embarrassing.
3. **Assumption:** The response-letter format is standardized enough across jurisdictions to productize (not bespoke per city). **How to test:** Collect response-letter guidelines from 15 CA jurisdictions; confirm >80% share the same verbatim-comment + action + location skeleton.
4. **Assumption:** A funded incumbent won't ship the same feature before a 6-month head start converts to lock-in. **How to test:** Track PermitFlow / CodeComply / Kestrel roadmaps; watch for "response" language in their releases.

### Risk flags

1. **Citation-accuracy / liability risk:** A confidently wrong code citation in a signed submittal is worse than no tool. The product must position as a *draft for professional review* and be tuned for precision over coverage. This is the make-or-break.
2. **Incumbent encroachment (platform-adjacent):** Pre-check players already read drawings + code; adding "and now draft the response" is a plausible line item on their roadmap. The bootstrapper's defense is owning the down-market and the expediter channel they won't chase.
3. **Market timing / seasonality:** Permit volume and firm cash flow are lumpy; monthly SaaS may see churn in slow quarters. A per-project option hedges this.
4. **Jurisdiction sprawl:** Value depends on code + format coverage; expanding past California multiplies the corpus work. Sequencing states by correction-cycle volume matters.

## 14. Structured verdict

```
Score:                  71/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (document/LLM retrieval) + architect or plans-examiner advisor
Time to revenue:        8–12 weeks (California-only v1)
Capital to launch:      $8–15K ($ inference + code-corpus ingestion + a design-partner architect's time)
Top 3 assumptions to validate first:
  1. Willingness to pay $149–399/mo — 20 discovery calls, 5 paid-pilot commits before full build
  2. Citation accuracy an architect trusts — 30 real letters through a prototype, measure vs ground truth
  3. Format standardization across jurisdictions — collect 15 CA guidelines, confirm >80% shared skeleton
Kill criteria:
  - Abandon if <5 of 20 discovery targets will commit to a paid pilot
  - Abandon if prototype code-citation accuracy is low enough that architects say they'd rather write it themselves
  - Abandon if a funded incumbent ships an equivalent response-drafting feature before your CA v1 is live
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 30 real, redacted plan-check correction letters (ask 5 friendly small firms / expediters; scrape public examples from city portals). This is the ground-truth set.
- **Day 3–4:** Hack a thin prototype — letter in, drafted itemized responses + code citations out for one city (a California jurisdiction). Have an architect or ex-plans-examiner grade the citations and the draft quality on all 30.
- **Day 5:** Decide go / no-go on a **falsifiable** bar: **on ≥20 of the 30 letters, an architect judges the drafted response "I would submit this after a light edit," AND ≥3 of the discovery-call targets commit to a paid pilot.** Miss either number → no-go or rework the scope.
