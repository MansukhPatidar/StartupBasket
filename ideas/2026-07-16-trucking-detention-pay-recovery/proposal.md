---
title: "DwellPay — detention pay recovery for small carriers"
slug: trucking-detention-pay-recovery
date: 2026-07-16
category: Logistics / US — Owner-Operators & 1–10 Truck Carriers Running Broker Freight (detention pay documentation and claims)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Reads each load's detention clause, fires the notice on time, and bills the broker with proof they can't deny."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Solo-builder, Mobile-first, ELD-integrated]
axes:
  problem: 16
  demand: 11
  build: 13
  distribution: 11
  revenue: 10
  time: 8
  defensibility: 5
founderFit: [technical-heavy, content-heavy]
featured: false
---

# DwellPay

## 1. One-liner

Reads each load's detention clause, fires the notice on time, and bills the broker with proof they can't deny.

## 2. Trend signal — why now?

Detention — sitting at a shipper's dock past the free-time window without pay — is the most reliably stolen money in trucking. ATRI put the industry's detention loss at **$15.1 billion in 2023**: $11.5B in lost productivity, $3.6B in direct expense. Per driver, the estimates run **$2,000–$6,000/year in unclaimed detention** for owner-operators, and up to $11,000–$19,000/year in total uncompensated detention time ([American Truckers LLC, 2026](https://www.americantruckersllc.com/blog/detention-pay-trucking-2026.html)).

The reason the money stays stolen is boring: **documentation**. Brokers deny claims that lack a timestamped arrival proof, an in/out record, and — the one that kills most claims — **notice sent inside the window the rate con demands**. Broker-carrier agreements routinely require the carrier to notify the broker 30–60 minutes *before* detention starts accruing ([Dray Alliance broker-carrier agreement](https://www.drayalliance.com/broker-carrier-agreement)). A driver who is strapping a load or sleeping through a 4-hour dock delay does not send that email. Claim dead on arrival. TruckersReport threads are full of exactly this: ["Lost detention pay again because broker said 'no proof' — how do you guys document it?"](https://www.thetruckersreport.com/truckingindustryforum/threads/lost-detention-pay-again-because-broker-said-no-proof-%E2%80%94-how-do-you-guys-document-it.2540236/) and ["How to get brokers to ACTUALLY PAY DETENTION?"](https://www.thetruckersreport.com/truckingindustryforum/threads/how-to-get-brokers-to-actually-pay-detention.2145331/) — where carriers who *did* have signed rate cons report winning $750 claims against TQL, XPO, and C.H. Robinson because the paper trail held.

Meanwhile the raw evidence became free. The ELD mandate means every truck in the country already emits timestamped GPS. Samsara and Motive expose it via open APIs and ship geofenced ["detention reports"](https://www.samsara.com/blog/introducing-detention-reports) — for enterprise fleets. The tooling to *use* that data for claims exists only upstream: [DetentionIQ](https://www.detentioniq.com/) launched targeting **50–500 truck fleets** with post-hoc detention invoicing and demo-call pricing. Nobody has packaged the same physics for the 91.5% of carriers that run 10 or fewer trucks. And FMCSA's driver-detention study (80 carriers, 2,500 drivers, ELD-based measurement) has put regulatory weight behind detention as a measurable, provable event ([FMCSA](https://www.fmcsa.dot.gov/research-and-analysis/impact-driver-detention-time-safety-and-operations)).

Provenance:
  - Signal 1: TruckersReport thread — "Lost detention pay again because broker said 'no proof'" + long-running "How to get brokers to ACTUALLY PAY DETENTION?" thread; documentation is the #1 stated denial reason — https://www.thetruckersreport.com/truckingindustryforum/threads/lost-detention-pay-again-because-broker-said-no-proof-%E2%80%94-how-do-you-guys-document-it.2540236/ — observed 2026-07-16
  - Signal 2: ELD ubiquity + open Samsara/Motive APIs make timestamped arrival/departure proof automatic; Samsara ships geofence-based detention reports for enterprise fleets — https://www.samsara.com/blog/introducing-detention-reports — observed 2026-07-16
  - Signal 3: ATRI: $15.1B industry detention loss (2023); $2K–6K/yr unclaimed per owner-operator; DetentionIQ launched for 50–500 truck fleets, proving carriers pay for detention recovery — https://www.detentioniq.com/ — observed 2026-07-16
  - Signal 4: FMCSA driver detention study collecting ELD/TMS data from 2,500 drivers — regulatory salience rising — https://www.fmcsa.dot.gov/research-and-analysis/impact-driver-detention-time-safety-and-operations — observed 2026-07-16
  Category: Underserved niche

## 3. The opportunity

The evidence layer is solved and the claims layer is empty — for small carriers.

Enterprise fleets have Samsara detention dashboards and now DetentionIQ to turn dwell into invoices. Owner-operators and micro-fleets — **91.5% of all US carriers operate ≤10 trucks** ([ATA 2025 Trends via Max Dispatch](https://maxdispatchservice.com/how-many-trucking-companies-in-the-us/)) — have the same ELD in the dash and none of the workflow. Their detention process is: scribble arrival time, maybe text the dispatcher, discover at invoice time that the rate con required written notice to a specific email within 30 minutes of hitting free-time expiry, get denied, eat it.

The unlock nobody upstream cares about: **every broker's detention terms are different, and they live in the rate con.** Free time (1.5, 2, 3 hours), rate ($30–$100/hr), cap ($150–$300), notice window, "signed detention form from facility required," specific claims email. That's an unstructured-document problem across thousands of broker templates — exactly what LLMs got cheap at. DetentionIQ and the TMS vendors do geofence math; none of them read the clause and **execute the notice obligation in real time**, which is the step that actually determines whether the claim survives. That's the wedge.

## 4. Target market

- **Primary customer:** US owner-operators with their own authority and small carriers (1–10 trucks) running spot-market broker freight — dry van, reefer, flatbed. ~580,000 registered carriers own or lease at least one truck; roughly 530,000 of them are in the ≤10 truck bracket. Secondary: independent dispatch services managing detention for 10–50 owner-operator clients each.
- **Why they buy:** "I sat four hours at that dock and the broker paid me nothing because I didn't have proof." In a soft freight market with rates at operating-cost level, $2,000–6,000/year of recoverable money is a truck payment.
- **Rough TAM reasoning:** 500K+ small carriers × $300/yr tool spend = $150M+ addressable; capturing 3,000 of them is a $1M ARR business. No VC math needed.
- **Why now for them:** Spot rates have been brutal since 2023; margin recovery beats revenue growth. Every one of them already carries an ELD that records the exact evidence brokers demand — they're just not weaponizing it.

## 5. Product sketch (MVP)

- Forward or snap the rate con → app extracts detention terms: free time, hourly rate, cap, notice deadline, required documents, claims email
- Connects to the driver's ELD (Motive, Samsara, or phone GPS fallback) and geofences the pickup/delivery addresses on the load
- Arrival auto-timestamped; countdown to free-time expiry runs per that load's actual clause
- **At the notice deadline, the app sends the compliant notice email to the broker automatically** — correct address, load number, arrival proof attached — and logs the send
- Prompts the driver for the two photos that win claims: trailer at the dock (geotagged) and the signed BOL/detention form at release
- On departure, assembles the claim packet: in/out timestamps, notice trail, photos, clause citation from the rate con — and emails the detention invoice to the broker
- Tracks claim status per broker: paid, shorted, denied, ignored — and shows the driver which brokers actually pay detention before they book the next load
- Weekly recap: detention hours logged, dollars claimed, dollars recovered

## 6. AI angle — what's load-bearing

The AI reads the rate confirmation. Rate cons are unstandardized PDFs — thousands of broker templates, detention terms buried in paragraph seven in six different phrasings, sometimes only in the master broker-carrier agreement. Extracting free time / rate / cap / notice window / required forms / claims email reliably from that mess is the product; without it, the app is a stopwatch. The AI also drafts the notice and claim emails in the register brokers respond to, citing the clause verbatim. Geofence detection and countdown logic are deterministic — correctly so. Remove the AI and you're asking a driver to hand-enter every load's terms at a truck stop; that product dies of friction, which is why it doesn't exist yet.

## 7. Localization angle (if any)

N/A — this is a US play. Detention economics, rate-con conventions, and the ELD mandate are US-specific. Canada (similar ELD rules) is a natural second market; nothing else transfers.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $25/mo per truck, 14-day free trial. Dispatch-service plan: $15/truck/mo at 10+ trucks under management.
- **ACV:** ~$300/truck/year. The tool pays for itself with one recovered 3-hour detention ($150–$300).
- **Rough math to $1M ARR:** 3,300 trucks × $25/mo × 12 ≈ $1M. That's 0.6% of the ≤10-truck carrier population.
- **Rough math to $5M ARR:** ~16,500 trucks. Requires the dispatch-service channel to work (each dispatch shop brings 10–50 trucks) plus a factoring-company partnership or two.
- **Expansion path:** per-truck seats as micro-fleets grow; broker scorecard data as a premium tier ("which brokers pay detention" is knowledge drivers currently trade in forum threads); adjacent claims — TONU and layover — use the same clause-extraction and evidence pipeline.

## 9. Go-to-market wedge — first 100 customers

- Post the broker detention scorecard as free content — "we analyzed 500 rate cons: here's each major broker's real free time, rate, and cap" — on TruckersReport and r/Truckers (500K+ members). This is data drivers argue about weekly with zero sourcing. Collect emails for the app waitlist.
- Sponsor 3–5 owner-operator YouTubers (the trucking niche has dozens with 50K–500K subs who do "what I made this week" breakdowns). Offer: run the app for a month on camera, show the recovered dollars. One recovered $300 claim on video is the whole pitch.
- Cold-DM the drivers who post detention complaints. TruckersReport and r/Truckers surface a steady stream of "broker denied my detention" posts — reply with the notice-deadline explanation (genuinely useful), link the tool.
- Partner with independent dispatch services (thousands of them, findable via dispatcher-training communities like LearnDispatch): detention recovery is a service they already promise clients and handle manually. $15/truck white-label makes them money.
- List on the Motive and Samsara app marketplaces once integration is live — enterprise won't convert, but small fleets browsing for detention tooling will find nothing else priced for them.

## 10. Build complexity — justification

Medium. Clause extraction from rate-con PDFs is prompt engineering over frontier vision/LLM APIs plus an eval set of real rate cons — no custom models. ELD integration is two REST APIs (Motive, Samsara) with OAuth; phone-GPS fallback covers everyone else. The hard 20% is mobile UX that works for a driver in a dock in 30 seconds, and the notice-email timing engine that must not fire late or double-fire. Small team ships v1 in 10–14 weeks: 4 weeks extraction + evals, 4 weeks ELD/geofence/notification engine, 4 weeks mobile app and claim-packet output.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Documenting and invoicing per a signed rate con is ordinary commerce; no claims-adjusting license involved — carrier bills its own receivable |
| Ethical — no harm / dark patterns | ✅ | Recovers contractually owed money for the weakest party in the chain |
| Market exists (evidence above) | ✅ | ATRI $15.1B; DetentionIQ funded segment upstream; forum demand |
| 1–5 person team can build this | ✅ | Two APIs, LLM extraction, mobile app |
| Launchable with <$50K / ₹40L | ✅ | API costs + app store + influencer budget |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | $2–6K/yr per truck lost, felt weekly. Docked from hair-on-fire because many drivers have normalized eating it — the pain is real but partially resigned |
| Demand evidence | 15 | 11/15 | Strong indirect signals (ATRI data, forum threads, DetentionIQ funding upstream, OTR's app for factoring clients). No direct proof O/Os pay for a standalone tool — that's the gap |
| Build feasibility | 15 | 13/15 | Off-the-shelf APIs end to end. Timing-critical notification engine and trucker-grade mobile UX are the honest work |
| Distribution clarity | 15 | 11/15 | Named channels with congregated audiences (TruckersReport, r/Truckers, trucker YouTube, dispatch services). Conversion unproven; O/Os are price-sensitive and app-fatigued |
| Revenue mechanics | 15 | 10/15 | $25/mo vs $2K+/yr recovery is an easy story; churn risk when freight is slow and every subscription gets audited. Contingency pricing is the fallback lever |
| Time to first revenue | 10 | 8/10 | Money-recovery tools convert fast; first paying customer within weeks of a working claim packet |
| Defensibility | 10 | 5/10 | Copyable mechanics. Accumulating moat: broker clause library + broker pay-behavior scorecard, which compounds with usage and is genuinely hard to cold-start |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy` — the product is an extraction + timing engine, and the distribution runs on trucking-community content (scorecards, YouTube proof videos).

### Key assumptions to validate (3–5)

1. **Assumption:** Rate-con detention clauses can be extracted at ≥95% accuracy across broker templates. **How to test:** Collect 200 real rate cons (drivers will share them for a $10 gift card in any trucking Facebook group), run extraction, hand-grade.
2. **Assumption:** Owner-operators will pay $25/mo rather than demand contingency-only. **How to test:** Landing page with both prices A/B'd against the broker-scorecard content; 100 waitlist signups → 20 pre-orders at $25/mo or pivot pricing.
3. **Assumption:** Automated on-time notice materially raises payment rates vs. post-hoc invoicing. **How to test:** Pilot with 10 drivers for 30 days; compare paid-claim rate on notified vs. un-notified detention events.
4. **Assumption:** Motive/Samsara APIs are accessible to apps acting for single-truck operators (not just fleet admins). **How to test:** Build the OAuth flow against both sandboxes in week 1 — this is a two-day spike, do it before anything else.

### Risk flags

1. **Platform dependency:** ELD APIs are the evidence source; Samsara/Motive could restrict third-party access or ship an O/O detention feature themselves. Mitigation: phone-GPS + photo evidence path works without any ELD API.
2. **Down-market drift by DetentionIQ:** they own the 50–500 segment and could release a self-serve tier. Their sales-led motion and geofence-only (no clause-execution) product make it a real but slow threat.
3. **Broker retaliation:** brokers can blacklist carriers who bill detention aggressively. The product must frame notices as neutral compliance, not confrontation — tone is a product feature.
4. **Market timing:** a freight-rate recovery would shrink the "every dollar matters" urgency, though detention itself persists in all cycles.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who will live in trucking forums; trucking-industry contact a big plus
Time to revenue:        10–14 weeks (build) + 2–4 weeks to first paid claim story
Capital to launch:      $15–25K (APIs, app store, 200-rate-con dataset, influencer pilots)
Top 3 assumptions to validate first:
  1. Clause extraction ≥95% on 200 real rate cons — hand-graded eval before writing app code
  2. ELD API access for single-truck operators — 2-day OAuth spike against Motive/Samsara sandboxes
  3. $25/mo subscription vs contingency — pre-order test on scorecard-content waitlist
Kill criteria:
  - Abandon if clause extraction can't clear 90% on the eval set after 4 weeks of iteration
  - Abandon if <10 of 100 waitlist drivers pre-order at any price point
  - Abandon if pilot shows on-time notice doesn't move broker payment rates vs plain invoicing
```

## 15. Next step — 1-week validation sprint

- Day 1–2: Post in two trucking Facebook groups + r/Truckers offering $10 for redacted rate cons; target 100 documents. Simultaneously run the Motive/Samsara OAuth spike.
- Day 3–4: Run LLM extraction on the corpus; hand-grade 50. Publish the "broker detention scorecard" teaser from the extracted data as the waitlist magnet.
- Day 5: Decide go / no-go: **go if extraction ≥90% on hand-graded set AND scorecard post drives ≥100 waitlist signups AND at least one ELD API grants single-operator access.** Any miss = revisit before building.
