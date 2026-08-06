---
title: "WarrantWatch — approved-state watch for auto part suppliers"
slug: ppap-change-drift-watch
date: 2026-08-07
category: Manufacturing / US+Mexico
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Tells a small auto supplier which parts drifted away from what the customer actually approved, before the audit finds it."
tags:
  vertical: TradeTech
  model: SaaS
  geography: Global
  secondary: [SMB, AI-agent, Compliance-driven, Manufacturing, Multilingual, Document-AI]
axes:
  problem: 16
  demand: 11
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# WarrantWatch

## 1. One-liner

Tells a small auto supplier which parts drifted away from what the customer actually approved, before the audit finds it.

## 2. Trend signal — why now?

Three things moved at once, and they all point at the same small shop.

**The approved state is now audited harder.** The IATF 16949 Rules 6th Edition ties certification-body audit time directly to supplier performance: if an IATF-certified supplier misses an OEM's quality or delivery targets, the certification body **must add four to eight hours** of audit time specifically to investigate causes and actions. Major findings carry a strict **15-day window** for containment and root cause. A planned 2026 revision of the standard tightens this further. Translation: the auditor now shows up with extra hours budgeted to go digging, and the first place they dig is the gap between what you submitted and what you're actually running.

**Nobody tracks the drift.** PPAP resubmission is triggered by new tooling, engineering revisions, plant moves, new sub-tier suppliers, and restart after extended downtime. Per AIAG PPAP 4th Edition Section 3, suppliers are responsible to notify the customer about "all changes." Small shops know this rule. They cannot operationalize it, because knowing whether today's change matters requires remembering what was in a packet submitted three years ago — and that packet is a PDF in a folder. The quality forums are full of exactly this scenario: a supplier that moved production location without informing the customer and got caught at a scheduled audit; a supplier unsure whether a plating sub-contractor swap requires a new PPAP at all.

**The packets themselves are now machine-readable.** Ballooning and GD&T extraction from 2D PDF drawings went commodity in the last 18 months — Balloonist, Net-Inspect, 1factory, HighQA, QA-CAD and Leo AI all auto-detect dimensions and populate AS9102 forms. That means the hard part of reading a supplier's own historical PPAP archive is solved and cheap. Nobody has pointed that capability *backwards* at the archive to answer "what did we promise?"

Meanwhile the volume is climbing: Mexico's shops report record CNC demand, overloaded fab shops, and lengthening onboarding timelines as nearshoring bites. More parts, more changes, same two-person quality department.

Provenance:
  - Signal 1 (demand): PPAP packet assembly takes suppliers 10–24 hours vs 2–6 hours for the buyer's engineer; manual, error-prone, labor-intensive — https://www.inspectionxpert.com/ppap — 2026-08-07
  - Signal 2 (demand/regulatory): AIAG PPAP 4th Ed. Section 3 requires notifying the customer of "all changes"; resubmission triggered by tooling, engineering revision, plant move, sub-tier supplier change — https://elsmar.com/elsmarqualityforum/threads/engineering-changes-for-customer-notification-ppap-submission.22017/ — 2026-08-07
  - Signal 3 (economic/enforcement): IATF 16949 Rules 6th Ed. requires certification bodies to add 4–8 hours of audit time when a supplier misses OEM quality/delivery targets; 15-day nonconformity window; 2026 standard revision underway — https://www.smithers.com/resources/2026/april/iatf-16949-news-2025-rules-and-2026-changes — 2026-08-07
  - Signal 4 (feasibility): Auto-ballooning and GD&T extraction from 2D PDF drawings now commodity across Balloonist, Net-Inspect, 1factory, HighQA, QA-CAD, Leo AI — https://www.getleo.ai/blog/ai-first-article-inspection — 2026-08-07
  - Signal 5 (market size): 102,449 IATF 16949 certified sites worldwide; US 3,664; Mexico 2,282; India 7,541 — https://www.simpleque.com/iatf-16949-certifications-worldwide/ — 2026-08-07
  Category: Workflow automation

## 3. The opportunity

Every PPAP tool on the market is built for the **buyer**. Kiuey, Net-Inspect, 1factory, iFactory — they exist so a Supplier Quality Engineer at a Tier 1 can chase forty suppliers, see submission status, and stop hunting through folders. The whole category is a chasing tool, priced around $95–99/user/month, sold to the party doing the chasing.

The party being chased has nothing.

A 60-person machine shop in Querétaro or Grand Rapids ships parts to six customers, each with a different portal, a different PPAP level, and a different definition of "notify us." Their approved state — what they warranted, on which drawing revision, with which sub-tier supplier, on which press, using which calibrated gage — lives across a few hundred PDFs on a shared drive. When the shop replaces a worn fixture, moves a job from Machine 4 to Machine 7, or switches heat treat vendors because the old one quoted six weeks, nobody asks "which of our 300 approved part numbers just became untrue?" Because answering it means reading 300 packets.

So the drift accumulates silently, and it surfaces in the worst possible way: an auditor with four extra mandated hours, or a customer discovering at a scheduled visit that production moved. Then it's a major finding on a 15-day clock, plus the resubmission you should have done voluntarily eighteen months ago, plus a supplier scorecard hit that buys you *more* audit hours next cycle.

The 10× is not "generate the packet faster." That race is over and the ballooning vendors won it. The 10× is **reading your own archive once and never being surprised again**. Point document AI at the PDFs the shop already has, extract the warranted state into a structured record, then sit on top of the shop's day-to-day changes and answer one question continuously: *does anything we changed this month contradict something we warranted?*

Incumbent weakness is structural, not technical. Buyer-side tools have no incentive to build this — their customer is the SQE, and the SQE doesn't care about your archive, only your next submission. Selling the supplier a tool that reduces their own audit exposure is a different buyer, a different price point, and a different sales motion.

## 4. Target market

**Primary customer:** The Quality Manager (often the *only* quality person, sometimes wearing the Engineering Manager hat too) at an IATF 16949-certified Tier 2 or Tier 3 manufacturer with 20–200 employees. Machining, stamping, injection molding, plating, fastener, rubber and seal shops. Geographies in priority order: Mexico (Bajío corridor — Querétaro, Guanajuato, San Luis Potosí, Aguascalientes), US Midwest and South, then India (Pune, Chennai, Gurugram).

**Why they buy:** Their pain is not writing the packet — they've done that a hundred times and they have a template. Their pain is the question they cannot answer without a week of reading: *"we changed X, do we owe somebody a notification?"* They currently answer it with memory and hope. When memory fails, it costs them a major nonconformity, a customer-directed resubmission, a scorecard downgrade, and in the bad cases a containment action at the customer's dock. The forum threads about suppliers moving production without notifying, or swapping a plating sub-contractor and not knowing whether that triggers a new PPAP, are the exact anxiety this sells against.

**Rough TAM reasoning:** 102,449 IATF 16949 certified sites worldwide. China holds roughly 60% and is not a realistic early market for a small Western team. That leaves a serviceable ~40,000 sites, of which the US (3,664), Mexico (2,282) and India (7,541) alone give ~13,500 addressable sites. Skew toward the small end — the majority of certified sites are not Tier 1s — and call it 8,000–10,000 shops that are small enough to have no eQMS and big enough to have real change volume. At $300/mo average, that's a ~$30M ceiling. Plenty of room for a $3–5M ARR business without ever fighting an enterprise vendor.

**Why now for them:** Extra mandated audit hours tied to their own scorecard, a standard revision landing in 2026, and nearshoring volume forcing more process changes per year than they've ever absorbed. The change rate went up and the audit intensity went up in the same 12 months.

## 5. Product sketch (MVP)

- **Archive ingest** — drop the folder of historical PPAP PDFs and customer portal exports; the system reads each packet and extracts the warranted state: part number, drawing revision, PPAP level, submission date, approving customer, named sub-tier suppliers, named equipment/tooling, gage IDs, and the certificate expiry dates buried in the material and calibration certs.
- **Approved-state record** — one clean page per part number showing what you actually promised, which customer holds that warrant, and when each supporting certificate goes stale. This is the artifact that does not exist anywhere today.
- **Change intake** — a two-minute form (and a WhatsApp/Teams bot) where anyone on the floor logs a change: new tooling, machine move, sub-tier swap, material lot source change, line relocation, restart after downtime.
- **Drift alerts** — the moment a logged change touches a warranted element, the affected part numbers and the affected customers are named, with the AIAG trigger category cited and a plain-language read on whether this is notify-only or full resubmission.
- **Expiry watch** — flags calibration certs, material certs and capability studies aging past the one-year freshness expectation *before* they invalidate a submission in flight.
- **Notification drafter** — generates the customer change-notification letter and pre-fills the PSW for the resubmission, per customer, in English or Spanish.
- **Audit binder** — one export that shows an auditor the change log, the notifications sent, and the approvals received, in date order. This is the thing that turns a four-hour dig into a twenty-minute review.

## 6. AI angle — what's load-bearing

Remove the AI and this product cannot be sold, because onboarding becomes a six-week manual data-entry project that nobody buys.

The load-bearing work is **reading the shop's unstructured historical archive**. A PPAP packet is a bundle of heterogeneous documents — a scanned ballooned print, a supplier's own dimensional results spreadsheet exported to PDF, a heat treat certificate from a vendor with its own layout, a PSW form, a control plan, an MSA study. Extracting "which sub-tier supplier is named in this packet, on which drawing revision, with which certificate expiring when" out of 300 of those is precisely the job that vision-capable document models became reliable and cheap at in the last 18 months. That extraction is what creates the approved-state record, and the approved-state record is the entire product.

The second AI job is judgment on the change: mapping a plain-language floor report ("we moved the op to the Haas in cell 3") onto the AIAG trigger taxonomy and the specific customer's supplier manual, which each state their own exceptions to the defaults. That's reading comprehension over a corpus of customer-specific PDF manuals — again, not classification anyone hand-codes.

What is deliberately *not* AI: the alert itself. When the system says "this change affects 7 part numbers across 2 customers," that's a join against structured records. The AI builds the records; deterministic logic fires the alerts. Nobody's audit exposure should hinge on a model's mood.

## 7. Localization angle

Mexico is the wedge market, not an afterthought.

The Bajío corridor has 2,282 certified sites concentrated in four states, most of them Tier 2/Tier 3 shops serving Tier 1s that answer to US and German OEMs. Their quality documentation is bilingual by necessity — customer manuals and PPAP forms arrive in English, the shop floor operates in Spanish, and the change gets logged by a supervisor who is not going to type it in English. A tool that ingests English packets, accepts Spanish change reports, and emits English customer notifications removes a real translation tax that no incumbent addresses.

Pricing matters too. A $99/user/month tool sold per-seat is a non-starter for a 60-person shop with one quality manager and four supervisors who all need to log changes. Flat per-site pricing at $249–399/mo works in Mexico where a $1,200/mo enterprise QMS does not, and the same flat structure travels to India later at a lower tier.

Distribution is local as well: the certification bodies, IATF auditors, and quality consultancies operating in the Bajío are a concentrated, reachable channel that does not exist as cleanly in the US.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Flat per site, not per seat. **$249/mo** (up to 100 active part numbers), **$449/mo** (up to 400), **$749/mo** (unlimited + multi-site rollup). One-time archive ingest fee of **$500–1,500** depending on packet count — this is important, it prices the onboarding labor and it qualifies serious buyers.
- **ACV:** ~$4,200 blended, plus first-year ingest fee. Call it $5,000 in year one, $4,200 recurring.
- **Rough math to $1M ARR:** 240 shops at $349/mo average = $1.0M. Against ~13,500 addressable sites in the US, Mexico and India, that's under 2% penetration.
- **Rough math to $5M ARR:** ~1,000 shops, or ~700 shops plus a multi-site tier landing groups that own three to six plants. The multi-site rollup is the realistic path — quality directors at small supplier groups will buy once for all plants, which triples ACV without tripling sales effort.
- **Expansion path:** part-number tiers grow naturally as shops win programs. Then adjacent warrant-tracking: AS9102 first-article state for the aerospace shops (same archive, different form), and sub-tier propagation — letting a shop push change requests down to *their* suppliers, which is the same product pointed one layer deeper and is where the ACV doubles.

Gross margin is healthy: inference is a one-time cost concentrated at ingest, and steady-state usage is a few change events a week per shop.

## 9. Go-to-market wedge — first 100 customers

- **Mine the certification registries.** IATF-certified sites are published with company name, location, and certification scope. Filter to Mexico and US sites with small-shop scopes (machining, stamping, molding, plating), which yields a list in the low thousands. Enrich for headcount under 200. This is a real, named, downloadable target list — not a persona.
- **Lead with the free archive audit, and make it the demo.** Offer to ingest 25 of a prospect's historical PPAP packets for free and hand back their approved-state record plus a list of every certificate that has already expired. This is not a teaser — it finds live problems in almost every archive, because certificate freshness decays silently. The output *is* the sales call. Expect this to convert far better than a Loom demo because it's about their parts, with their part numbers.
- **Go through the auditors and consultants.** IATF certification bodies and the quality consultancies in the Bajío (and the US Midwest) sit across dozens of small suppliers each and are trusted precisely on this topic. Referral fee or co-branded audit-prep offering. Ten consultants with twenty clients each is the whole first hundred.
- **Sell at the moment of pain.** Shops that just took a major finding are the warmest possible buyer and they're identifiable — supplier scorecard downgrades and containment actions travel through industry networks and LinkedIn quality-manager chatter. A 15-day nonconformity clock makes a $349/mo tool an obvious yes.
- **Spanish-language content on the exact question.** "¿Cambio de proveedor de recubrimiento requiere nuevo PPAP?" is a question quality managers actively search and the existing answers are forum threads and PDF manuals. Own that answer set in Spanish; it's uncontested and the searcher is mid-problem.

## 10. Build complexity — justification

**Medium.** The extraction pipeline over heterogeneous PPAP PDFs is the real work — packet layouts vary by customer and half the scans are photocopies — and getting the approved-state record trustworthy enough that a quality manager stakes an audit on it takes iteration against real archives, not synthetic ones. Everything else is standard: web app, structured records, rules engine for triggers, PDF generation for notifications and the audit binder. No custom models — off-the-shelf vision-language APIs handle the reading.

Two people, 4–5 months to a v1 that a design partner runs for real. One of them needs to have sat in an automotive quality role, or the trigger logic will be confidently wrong in ways that destroy trust on contact.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Supplier-side record keeping. No certification or approval authority claimed — the tool prepares, the customer approves. |
| Ethical — no harm / dark patterns | ✅ | Increases disclosure to customers. The failure mode it prevents is undocumented drift, which is the thing the standard exists to stop. |
| Market exists (evidence above) | ✅ | 102K certified sites, incumbents charging $95–99/user/mo on the buyer side, documented 10–24 hour supplier burden. |
| 1–5 person team can build this | ✅ | Two people, 4–5 months. Off-the-shelf document AI. |
| Launchable with <$50K / ₹40L | ✅ | Inference, hosting, and travel to the Bajío. Well under. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money and real audit exposure, and the 2026 audit-hour rule sharpens it. Docked because the pain is episodic — it bites at audit and at change events, not daily. Shops that haven't been burned recently will nod and stall. |
| Demand evidence | 15 | 11/15 | Strong indirect evidence: funded incumbents on the buyer side at $95–99/user/mo, quantified 10–24hr supplier burden, active forum threads on exactly this confusion. Docked because I found no direct evidence of *suppliers* paying for a supplier-side tool. That's the gap and it's the thing to validate. |
| Build feasibility | 15 | 11/15 | Standard stack plus a genuinely fiddly extraction pipeline over bad scans. 4–5 months for a pair, not 6 weeks. |
| Distribution clarity | 15 | 12/15 | Named, downloadable target list from certification registries; the free archive audit is a strong, concrete opener; auditor/consultant channel is real and concentrated. Docked because small-shop quality managers are slow to answer cold outreach. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against a real category ($95–99/user/mo buyer-side; $80/mo entry QMS). Flat site pricing is defensible. Docked because 240 shops at $349 requires a sales motion that isn't proven yet, and small manufacturers churn when programs end. |
| Time to first revenue | 10 | 7/10 | The free archive audit shortens the cycle, but this is a considered purchase by a cautious buyer. 8–12 weeks to first paid, realistically, with a design partner possibly paying sooner. |
| Defensibility | 10 | 5/10 | Execution moat plus accumulating workflow lock-in — once a shop's approved-state record and change log live here, the audit binder makes it painful to leave. But the extraction is copyable and a buyer-side incumbent could turn around and ship a supplier tier. A 12-month head start and a Mexico-first brand is the honest moat. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This idea punishes outsiders. The trigger logic — when a change genuinely requires notification versus resubmission versus nothing — is the product's credibility, and it's encoded in AIAG defaults that individual customer supplier manuals then override. Get it wrong twice and the quality manager stops trusting the alerts, which is death. Either the founder has worked automotive quality or there's a former SQE as a co-founder, not an advisor.

### Key assumptions to validate

1. **Assumption:** Small suppliers will pay for their *own* audit protection, rather than treating PPAP as a cost their customer forces on them. **How to test:** 25 structured calls with quality managers at IATF-certified shops under 200 people in the Bajío and US Midwest. Ask what a major finding cost them last time, in hours and dollars. If they can't quantify it, they won't buy.
2. **Assumption:** A shop's historical PPAP archive is complete and machine-readable enough to build a trustworthy approved-state record. **How to test:** Get three real archives. Run extraction. Measure what fraction of part numbers yield a confident record. Below ~70% and the onboarding promise collapses.
3. **Assumption:** The free archive audit finds real problems often enough to function as the sales motion. **How to test:** Across those same three archives, count expired certificates and undocumented changes found. If the average shop shows fewer than three live issues, the opener is a dud and CAC goes up sharply.
4. **Assumption:** Flat $249–449/mo site pricing clears the budget bar for a 60-person Mexican shop. **How to test:** Price-test directly in the validation calls against their current QMS spend.

### Risk flags

1. **Incumbent extension risk:** Kiuey, Net-Inspect or 1factory already own the buyer relationship. Any of them could ship a free supplier portal that partially does this, funded by the Tier 1 side. The defense is depth on the supplier's *own* archive and change log, which the buyer-side vendor has no reason to build.
2. **Trust cliff:** This product's value is a quality manager acting on its alerts. Two false alarms or one missed trigger and it becomes shelfware. Precision matters more than coverage here, which argues for shipping narrow (machining and stamping first) rather than broad.
3. **Standard-revision timing:** The 2026 IATF revision is a tailwind but also a moving target — trigger logic and customer manuals will need rework as it lands. Budget for it rather than being surprised.
4. **Buyer conservatism:** Small manufacturers are among the slowest software buyers there are. The sales cycle assumption (8–12 weeks) is the softest number in this proposal.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a former automotive SQE or supplier quality manager
Time to revenue:        8–12 weeks from launch
Capital to launch:      $15–25K (₹12–20L) — inference, hosting, and Bajío travel
Top 3 assumptions to validate first:
  1. Suppliers pay for their own audit protection — 25 quality-manager calls, ask what the last major finding cost
  2. Real archives extract cleanly enough — run 3 donated archives, need ~70%+ confident records
  3. The free archive audit surfaces real problems — need 3+ live issues per average shop or the wedge fails
Kill criteria:
  - Abandon if fewer than 5 of 25 quality managers can name a specific dollar or hour cost from a change they failed to notify
  - Abandon if extraction yields confident approved-state records for under 60% of part numbers across three real archives
  - Abandon if a buyer-side incumbent ships a free supplier-side archive tool before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the IATF certified-site registry, filter to sub-200-headcount machining/stamping/molding shops in Mexico and the US Midwest. Build a list of 300. Book 25 calls, offering the free archive audit as the reason to talk.
- **Day 3–4:** Run the calls. One question carries the week: *"Think of the last time you changed something — a fixture, a machine, a sub-tier vendor — and weren't sure if you owed the customer a notification. What did you do, and what did it cost you when you got it wrong?"* Record dollar and hour figures verbatim. Simultaneously, get three shops to donate their real PPAP archive under NDA and run extraction against them.
- **Day 5:** Decide. **Go** if ≥8 of 25 quantify a specific cost from a missed or late notification **and** extraction produces confident approved-state records for ≥70% of part numbers across the three donated archives **and** those archives contain an average of ≥3 live issues (expired certs or undocumented changes). **No-go** if quality managers describe this as their customer's problem rather than theirs — that answer means the wallet is on the buyer side after all, and the whole thesis inverts.
