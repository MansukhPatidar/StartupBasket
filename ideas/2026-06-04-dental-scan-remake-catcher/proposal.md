---
title: "PrepPass — remake catcher for independent dental labs"
slug: dental-scan-remake-catcher
date: 2026-06-04
category: HealthTech / US Independent Dental Labs
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Flags unclear crown-prep scans at the chair before they reach the lab, scanner- and lab-agnostic."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, domain-expertise-required, Workflow-automation]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PrepPass — remake catcher for independent dental labs

## 1. One-liner

Flags unclear crown-prep scans at the chair before they reach the lab — scanner- and lab-agnostic, so it works for every independent lab, not just the big DSO-backed ones.

## 2. Trend signal — why now?

The crown workflow went digital, and the remake problem went *with* it. The data is ugly: industry single-unit crown remake rates run 3.8% on average but with a per-dentist range of **0% to 42%** ([NIH PBRN study](https://pmc.ncbi.nlm.nih.gov/articles/PMC7005880/)), and on *digital* cases one survey put 73% of labs above a 15% remake rate ([TTT Dental](https://tttdental.com.hk/digital-impression-workflow-remake-ratescad-cam-department-efficiency/)). Each digital remake costs a lab ~$127 and 2.3 technician-hours; the *practice* loses ~40+ hours of chair time a year to rework ([Glidewell](https://glidewelldental.com/company/blog/how-to-reduce-crown-remake-rates-and-recover-lost-chair-time)). The root cause is boringly consistent: the dentist sent a scan where the margin isn't readable. As Associated Dental Lab puts it, *"If you can't see the margin in Stone View, the dental lab can't see the margin."*

Two things changed in the last 12 months. **One:** Dandy shipped "AI Scan Review" in Nov 2025 — a chairside AI that flags undercuts, margin obstructions, and occlusal clearance *before* a case ships ([Dandy](https://www.meetdandy.com/newsroom/dandy-launches-ai-scan-review-the-first-chairside-ai-assistant-for-crown-preparation/)). It works. It also only works if you scan on Dandy's software and send to Dandy's lab. **Two:** open-platform scanners now own 95% of the installed base ([Coherent](https://www.coherentmarketinsights.com/industry-reports/intraoral-scanners-market)) — Medit, 3Shape, iTero all export STL/PLY freely. So the exact capability Dandy locked behind its own walls is now buildable as an independent, any-scanner, any-lab tool. The 9,500 single-owner US labs that *aren't* Dandy have no equivalent.

Provenance:
  - Signal 1 (demand): Digital crown remakes run 15%+ at 73% of labs; root cause is unreadable margins dentists send anyway; lab↔dentist friction documented on Dental Lab Network forum — [TTT Dental](https://tttdental.com.hk/digital-impression-workflow-remake-ratescad-cam-department-efficiency/), [Dental Lab Network](https://dentallabnetwork.com/forums/threads/poor-quality-scans-lab-reject-and-remake-process.37533/) — 2026-06-04
  - Signal 2 (feasibility): Open-platform scanners = 95% of installed base with free STL/PLY export; Dandy proved chairside AI scan-QA works but locked it to its own scanner+lab — [Coherent Market Insights](https://www.coherentmarketinsights.com/industry-reports/intraoral-scanners-market), [Dandy](https://www.meetdandy.com/newsroom/dandy-launches-ai-scan-review-the-first-chairside-ai-assistant-for-crown-preparation/) — 2026-06-04
  - Signal 3 (economic): Intraoral scanner market $927M (2026) → $1.87B (2032), 12% CAGR; remake prevention is a named buying priority in lab-management software — [Coherent](https://www.coherentmarketinsights.com/industry-reports/intraoral-scanners-market), [Glidewell](https://glidewelldental.com/company/blog/how-to-reduce-crown-remake-rates-and-recover-lost-chair-time) — 2026-06-04
  Category: Tech-unlock

## 3. The opportunity

The remake economy is a closed loop of pain that nobody owns: dentist sends a marginal scan → lab either guesses (remake risk) or emails the dentist to rescan (friction, delay, the dentist takes offense). On the Dental Lab Network forum, techs debate whether *the doctor* should pay full price for a remake when they "proceeded with a case despite known issues." The lab eats the cost when they don't push back, and loses the client when they push too hard.

Dandy solved this — for Dandy. The incumbent weakness isn't quality; it's **architecture**. Dandy's scan review is a customer-retention feature welded to a vertically integrated lab. iTero and 3Shape ship QA inside their own scanner software, so it only helps the cases you keep on that brand. None of it serves the 89% of US labs that are 1–4 person independents whose dentist-clients scan on a mix of Medit, 3Shape, and iTero and send to whoever's cheapest and fastest. **PrepPass is the neutral, any-scanner, any-lab screen those labs can hand to every one of their dentists** — branded as the lab's own quality program. The lab pays to stop bleeding $127-a-pop remakes; the dentist gets a free chairside safety net; the patient doesn't get called back for a re-seat.

## 4. Target market

- **Primary customer:** Owner/operator of an independent US dental lab, 1–15 technicians, processing 50–500 crown/bridge units a month, that takes digital cases from 20–150 referring dentists. Secondary buyer later: the group dental practice (DSO-lite, 3–10 locations) that wants to cut its own chair-time loss.
- **Why they buy:** In their words from the forums — bad scans with "scatter/tissue along the margins, missing data" force a choice between an expensive remake and an awkward email that risks the relationship. A tool that catches the bad scan *at the dentist's chair*, branded with the lab's name, turns that lose-lose into a value-add the lab gives its clients.
- **Rough TAM reasoning:** ~10,700 US dental labs, of which ~9,500 are single-owner ([CompanyData via IBISWorld-adjacent](https://www.ibisworld.com/industry-statistics/number-of-businesses/dental-laboratories-united-states/)). Even a 5% paid penetration of the addressable digital-forward labs (~4,000) is ~200 labs. Add 159,000+ US general-practice dentists ([ADA](https://www.dentistemaillist.com/blog/how-many-dentists-in-the-us)) as the seat-expansion layer, and the per-lab ACV scales with referring-dentist count.
- **Why now for them:** Digital case volume is rising, remake rates on digital are *worse* than on analog at many labs, and the only good fix on the market (Dandy) requires the dentist to leave them for Dandy's lab. The independent lab needs its own answer this year or it loses cases to vertically integrated competitors.

## 5. Product sketch (MVP)

- **Drop-in chairside screen:** dentist (or assistant) uploads/exports the prep scan (STL/PLY) from any open scanner; PrepPass returns a pass/flag verdict in under 30 seconds.
- **Margin readability check:** highlights segments of the margin line that are obscured by tissue, blood, or scan void — the #1 remake cause — with a visual overlay on the mesh.
- **Clearance & undercut flags:** estimates insufficient occlusal/axial reduction and undercuts that will force a remake or a thin restoration.
- **Contact check:** flags open/light proximal contacts, the other top remake driver named by technicians.
- **One-tap "rescan this zone" guidance:** tells the dentist *exactly* which area to re-capture, so the fix happens while the patient is still numb and in the chair.
- **Lab-branded:** the lab's logo, the lab's name on the report. To the dentist it looks like "[Your Lab]'s scan check," not a third-party product.
- **Lab dashboard:** per-dentist remake-risk trends so the lab can see which referring offices send the most marginal scans and coach them.

## 6. AI angle — what's load-bearing

Remove the AI and this is a static checklist nobody follows. The whole product is a 3D-mesh + vision model that reads a raw intraoral scan and answers "is the margin actually readable, is there enough clearance, are the contacts clean" — the judgment a senior technician makes by eye in 10 seconds and a junior one gets wrong. There's published, peer-reviewed work on exactly this primitive: mesh-based segmentation for automated margin-line generation on prepped teeth ([arXiv 2507.22859](https://arxiv.org/pdf/2507.22859)) and AI-based evaluation of marginal/internal fit ([NIH](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12697518/)). Dandy already proved the chairside version works in production. AI isn't a sticker here — it *is* the product. No model, no verdict, no value.

## 7. Localization angle (if any)

N/A for v1 — this is a US-first play. The wedge is the fragmentation of the *US* independent-lab market and the open-scanner installed base, not language or payment rails. EU and Australia are obvious month-12 expansions (same scanners, same remake economics, similar lab fragmentation), but forcing a localization angle into v1 would dilute the GTM. The one "local quirk" worth respecting is that this is an advisory QA tool, not a diagnostic device — keep claims geometry-based ("the margin is not readable") not clinical ("this prep is inadequate") to stay clear of FDA SaMD territory.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Sold to the lab, priced by referring-dentist seats. $99/mo base (covers up to 10 referring dentists) + $15/mo per additional active dentist seat. A typical mid-size lab serving 40 dentists ≈ $99 + 30×$15 = **$549/mo**.
- **ACV:** ~$4,000–$7,000 per lab per year, blended across small and mid labs.
- **Rough math to $1M ARR:** ~180 paying labs at a ~$5,500 blended ACV = $1.0M. That's <2% of digital-forward US labs.
- **Rough math to $5M ARR:** ~700 labs *or* ~250 labs plus a direct-to-DSO tier (group practices paying $300–800/mo/location to cut their own chair-time loss). Either is inside the addressable base without leaving the US.
- **Expansion path:** seats grow as the lab onboards more dentists; upsell a "coaching" tier (the per-dentist trend dashboard + automated rescan-rate reports the lab uses in QBRs with its referrers); later, sell the same screen *direct* to multi-location practices that want it regardless of lab.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the NADL + state dental-lab directories** (~10,700 labs, owner names and emails partially public). Filter to labs advertising "digital" or "CAD/CAM" — these have the remake pain. Send a personalized Loom: "Here's a real scan with an unreadable margin, and here's PrepPass catching it in 22 seconds — branded with *your* lab's name." Expect 3–5% reply on a tight, pain-specific list of ~2,000.
- **Dental Lab Network + r/Dentistry + lab Facebook groups:** the remake-cost thread already exists and recurs. Show up with the actual tool, not a pitch. Offer 10 free pilot seats to vocal lab owners; convert pilots that see remake-rate drops.
- **Lab-equipment resellers and CAD/CAM trainers** (the people who already sell exocad/Medit setups to labs) as a referral channel — they're trusted, they do the install visits, and a remake-reduction add-on makes their hardware sale stickier. Rev-share the first year.
- **Convert the lab's dentists into a second funnel:** every dentist who uses the lab-branded screen and loves it is a warm intro to *their* lab(s) and to the DSO tier. The tool markets itself one operatory at a time.

If I can land 10 pilot labs from outreach #1 and #2 in the first quarter and show even a 20% remake-rate drop on their digital cases, the first 100 is a referral problem, not a cold problem.

## 10. Build complexity — justification

**Medium.** The web app, scan upload, STL/PLY parsing, lab-branded reports, and dashboard are all standard off-the-shelf work. The load-bearing risk is the mesh/vision model: margin-readability and clearance detection on raw scans is non-trivial but *not* research-grade — there's published prior art, a clear production proof (Dandy), and open scan formats to train on. A small team (one ML-leaning engineer + one full-stack + a part-time master technician advisor for labeling and validation) ships a credible v1 in ~4–5 months. The gating dependency is a labeled training set of "good vs. unreadable" prep scans, which the master-technician advisor and the first pilot labs supply.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Advisory QA tool on geometry; keep claims non-diagnostic to stay out of FDA SaMD scope. Confirm with a regulatory advisor before launch. |
| Ethical — no harm / dark patterns | ✅ | Reduces remakes and re-seats; net good for dentist, lab, and patient. No dark patterns. |
| Market exists (evidence above) | ✅ | Remake rates, lab counts, Dandy's launch, forum complaints all sourced. |
| 1–5 person team can build this | ✅ | 2–3 builders + part-time technician advisor, ~4–5 months. |
| Launchable with <$50K / ₹40L | ✅ | Main cost is engineering time + a modest labeling budget; inference is cheap per scan. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Remakes cost real money (~$127/lab + 40 chair-hrs/yr to the practice) and recur weekly. Felt acutely, but labs have lived with workarounds (email the dentist), so not quite hair-on-fire. |
| Demand evidence | 15 | 12/15 | Multiple independent signals: published remake-rate studies, forum threads, a funded incumbent (Dandy) validating the exact feature. Docked because no one's yet proven *independent labs* will pay vs. accept the cost. |
| Build feasibility | 15 | 11/15 | Standard app, but the vision/mesh model and labeled data are the real work. Published prior art + Dandy proof de-risk it. Not a 6-week solo build. |
| Distribution clarity | 15 | 12/15 | Named, scrapeable list (NADL/state directories), existing forums, reseller channel, and a built-in dentist referral loop. Conversion on cold lab outreach is the open question. |
| Revenue mechanics | 15 | 12/15 | Seat-based pricing benchmarked to lab software; ACV math to $1M needs <2% penetration. Churn and willingness-to-pay-vs-eat-the-cost are the guesses. |
| Time to first revenue | 10 | 7/10 | Pilot-to-paid likely 6–10 weeks once v1 exists, but v1 itself is ~4–5 months out — so first dollar is mid-year-one, not week-four. |
| Defensibility | 10 | 6/10 | Soft moat: lab-branded workflow lock-in + accumulating per-lab scan/remake data that tunes the model. Copyable, but the open-platform/any-lab neutrality is a position Dandy structurally *can't* take. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs real 3D/vision ML chops and a master dental technician in the loop. Not a no-code weekend build.

### Key assumptions to validate (3–5)

1. **Assumption:** Independent labs will pay $300–600/mo to cut remakes rather than continue eating ~$127 each. **How to test:** 30 lab-owner interviews + a pre-sale offer; count how many put a card down for a pilot.
2. **Assumption:** Dentists will actually run a lab-supplied screen before sending (not skip it). **How to test:** instrument the pilot; measure % of cases that pass through PrepPass vs. bypass it across 10 pilot labs.
3. **Assumption:** The model can flag unreadable margins reliably enough to be trusted (low false-negative rate). **How to test:** validate v1 predictions against the master technician's verdicts on 500 historical scans; target >90% catch on true-remake cases.
4. **Assumption:** Catching bad scans at the chair measurably lowers remake rate. **How to test:** before/after remake-rate delta on pilot labs' digital cases over 60 days.

### Risk flags

1. **Platform dependency:** Relies on open STL/PLY export. If a scanner vendor locks exports or ships its own free equivalent to all brands, the wedge narrows. Mitigate by being the *neutral* layer across all of them — the thing no single scanner vendor will build.
2. **Regulatory risk:** Drift from "geometry advisory" toward "clinical adequacy judgment" could pull it into FDA medical-device territory. Keep claims geometric and get a regulatory read before scaling.
3. **Market timing / incumbent:** Dandy (well-funded) could open its scan review to other scanners and labs. Unlikely — it cannibalizes their lab — but it's the scenario that kills this. Move fast on the independent-lab beachhead they won't chase.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (3D/vision ML) + master dental technician advisor
Time to revenue:        ~5 months to v1, then 6–10 weeks pilot-to-paid
Capital to launch:      $30–45K ($25–35K engineering + ~$8K data labeling/validation)
Top 3 assumptions to validate first:
  1. Labs pay $300–600/mo vs. eating remakes — 30 owner interviews + pre-sale card-down test
  2. Dentists run the screen instead of bypassing — instrument 10 pilot labs, measure pass-through %
  3. Model catches true-remake margins >90% — validate against technician verdicts on 500 historical scans
Kill criteria:
  - Abandon if <5 of 30 interviewed labs put a card down for a paid pilot
  - Abandon if pilot labs see no measurable remake-rate drop after 60 days
  - Abandon if a scanner vendor or Dandy ships a free any-scanner, any-lab equivalent before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 30 independent lab owners from NADL/state directories + the Dental Lab Network thread. Book 12–15 calls. Ask one thing: "What does a digital remake actually cost you, and would you pay to catch the bad scan at the dentist's chair?"
- **Day 3–4:** Build a fake-door landing page: lab-branded scan check, $99/mo, "upload a scan, we'll flag it." Drive the interviewed owners to it. Hand-grade 20 real scans they send (margin readable / not) to fake the AI and prove the *output* is what they want.
- **Day 5:** Decide go/no-go on a hard number — **≥5 lab owners put a card down for a paid pilot, OR ≥10 send real scans and agree the flagged output would have prevented a remake.** Anything less and the labs are choosing to eat the cost; that's a PASS, not a build.

The falsifiable result: a count of cards-down and a count of "yes, this scan would've been a remake." Not vibes — names and numbers.
