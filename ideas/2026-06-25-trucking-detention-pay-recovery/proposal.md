---
title: "DockDun — detention-pay collector for small trucking fleets"
slug: trucking-detention-pay-recovery
date: 2026-06-25
category: Logistics / US Small For-Hire Trucking Fleets (1–15 trucks, owner-operators & micro-fleets)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Builds the broker-proof detention claim from your ELD data, files it, fights the denial — pay only on what it collects."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [Contingency-pricing, AI-agent, SMB, Solo-builder, Document-automation]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# DockDun — detention-pay collector for small trucking fleets

## 1. One-liner

Builds the broker-proof detention claim from your ELD data, files it, fights the denial — pay only on what it collects.

## 2. Trend signal — why now?

Detention — the hours a truck sits unpaid at a dock — is one of the biggest leaks in small-fleet trucking, and 2026 is the year the tooling and the policy attention finally caught up to it.

- **94.5% of carriers bill detention; fewer than 50% of those claims get paid** (TRADLINX, citing industry data). The OOIDA survey is even starker: 52% of operators always try to collect, but most of the other 48% *don't even attempt it* because they believe they'll never see the money.
- **ATRI puts the annual loss at $15.1B** ($11.5B lost productivity + $3.6B added cost), roughly **$11,000–$19,000 per driver per year.** This is not a rounding error for a 3-truck operation — it's a second truck's payment.
- **The #1 reason claims get denied is documentation**, specifically a mismatch between *when the driver says the clock started* and *what the rate confirmation demands as proof*. Brokers exploit the gap and run "the technique of silence and avoidance hoping I will go away," in one owner-operator's words.
- **What changed:** ELD telematics vendors (Samsara, Motive, et al.) now expose GPS + Hours-of-Service timestamps via REST APIs, and cheap LLM document parsing can read a messy rate-con PDF and a scanned BOL and assemble a claim that matches that specific broker's rules — within the 24–72hr deadline that kills most claims.

Existing tools (DockClaim at $49/mo, Toro TMS, OTR Solutions, McLeod) capture the time and spit out an invoice. **None of them file the claim, fight the denial, or carry the risk.** They hand the operator a nicer-looking invoice and leave him to lose the argument anyway.

Provenance:
  - Signal 1 (demand): 94.5% bill detention, <50% paid; 48% of operators don't attempt collection — https://blogs.tradlinx.com/over-90-charge-detention-fewer-than-50-get-paid/ + https://otrsolutions.com/blog/detention-pay-in-trucking — 2026-06-25
  - Signal 2 (feasibility): Samsara/Motive ELD REST APIs expose GPS + HOS timestamps for third parties; LLMs parse rate-cons/BOLs — https://developers.samsara.com/docs/rest-api-overview — 2026-06-25
  - Signal 3 (economic): ATRI $15.1B/yr detention loss ($11K–19K per driver); incumbents already charging $49/mo proving WTP; factoring takes 1–5% (contingency precedent) — https://logistiq.com/fmcsa-driver-detention-study/ — 2026-06-25
  Category: Workflow automation

## 3. The opportunity

Detention is a **paperwork-and-deadline fight that small operators systematically lose.** The money is owed — it's in the rate-con or in the carrier's terms — but collecting it requires matching GPS data to facility logs to rate-con language, doing it within 24–72 hours, and then surviving a denial with a written rebuttal. A guy driving the truck cannot do this from the cab, and he has no billing department.

The incumbents misread the problem. DockClaim, Toro, OTR, McLeod all treat detention as a *tracking* problem ("capture the time accurately"). It's actually a *collections* problem ("win the dispute and get the cash"). Tracking is table stakes — brokers still deny GPS-backed claims on technicalities (wrong clock-start, missing BOL completion time, late submission, detention not on the rate-con). Nobody fights that denial for a 3-truck fleet, because software vendors sell seats, not recovered dollars.

DockDun is AI-first collections, not tracking software. It does the unglamorous part the incumbents won't: read the rate-con, build the packet to *that broker's* spec, submit before the clock runs out, and rebut the denial — and it gets paid only when the operator does. That alignment is the whole pitch.

## 4. Target market

- **Primary customer:** US for-hire trucking fleets running 1–15 trucks — owner-operators and micro-fleets hauling spot/brokered freight, already on an ELD (Motive, Samsara, KeepTruckin/legacy, etc.). The dispatcher *is* the owner, or there's one part-time back-office person.
- **Why they buy:** "I sat 5 hours at a Walmart DC, billed $250 detention, and the broker just... ignored it. Did it three more times that month. I stopped bothering." They lose $11K–19K/yr per truck and have no leverage and no time to chase it.
- **Rough TAM reasoning:** ~350,000+ active US for-hire carriers, the vast majority operating fewer than 10 trucks (FMCSA registration skews overwhelmingly small). Even a few percent of small carriers at a few hundred dollars/mo of recovered-fee commission is a comfortably sub-$5M-ARR business many times over.
- **Why now for them:** Freight rates have been brutal for two years — operators are squeezing every accessorial dollar they used to leave on the table. Detention they once shrugged off is now the difference between making the truck payment and not.

## 5. Product sketch (MVP)

- Connect your ELD once (Motive/Samsara OAuth); DockDun watches stop dwell-time passively via GPS geofencing at shipper/receiver locations.
- Forward the rate-con (email/photo) and the signed BOL/POD; DockDun reads the detention terms, free-time window, clock-start rule, and submission deadline for *that load*.
- When dwell exceeds free time, it auto-assembles a claim packet: GPS arrival/departure timestamps, HOS duty-status proof, facility geofence log, BOL completion time, and the rate-con clause — formatted exactly how that broker requires.
- Files the claim with the broker before the deadline and tracks status (submitted / paid / denied / silent).
- On denial or silence, drafts and sends a written rebuttal citing the specific evidence and rate-con language, then escalates on a follow-up cadence.
- A dead-simple dashboard: dollars recovered this month, claims in flight, claims won/lost, and your effective hourly detention rate by facility (so you learn which docks to avoid).
- Contingency billing: DockDun takes a cut only of detention/accessorial dollars it actually collects.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. Three jobs are pure AI work: (1) **reading the unstructured rate-con and BOL** — every broker's PDF is different, clock-start rules are buried in prose, free-time and deadlines vary per load; an LLM extracts the governing terms reliably where regex cannot. (2) **Assembling the broker-specific packet** — matching the right GPS/HOS/facility evidence to the exact format and clause that *this* broker will accept, because a packet that wins with TQL loses with Landstar. (3) **Drafting the denial rebuttal** — a tailored written argument referencing the specific timestamps and contract language, the step that separates "broker ignores me" from "broker pays." The geofencing/ELD plumbing is commodity; the collections intelligence is the moat.

## 7. Localization angle (if any)

N/A — this is a US-first play by design. Detention economics, the broker/carrier rate-con structure, ELD mandates, and the FMCSA regulatory frame are US-specific. The same shape could later extend to Canada (similar broker market) but the wedge, the data plumbing, and the willingness-to-pay are all anchored in the US small-carrier market. Geography is the *focus* here, not a weakness.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Contingency — **25% of detention/accessorial dollars DockDun collects**, no monthly fee. (Alternative tier for fleets that want it: $39/truck/mo flat + 10% — but lead with pure contingency to kill the "is it worth it" objection.) Operators understand contingency from factoring (1–5%) and from injury/claims lawyers (33%); 25% on money they were getting *zero* of is an easy yes.
- **ACV:** A small fleet leaks $11K–19K/yr *per truck* in detention. Conservatively recover even $4K/yr/truck of it → DockDun's 25% = $1,000/yr/truck. A 5-truck fleet = ~$5,000 ACV.
- **Rough math to $1M ARR:** ~1,000 trucks under management at ~$1,000/yr commission = $1M. That's roughly 200–300 small fleets. Reachable.
- **Rough math to $5M ARR:** ~5,000 trucks under management, or a higher recovery rate per truck as the broker-specific packet library matures and win-rates climb. Plausible within the small-carrier TAM without touching big fleets.
- **Expansion path:** Start with detention; expand to the full accessorial stack the same operators leave uncollected — TONU, layover, lumper reimbursement, stop-off pay. Same data, same broker relationship, more dollars per truck → ACV grows without new logos.

## 9. Go-to-market wedge — first 100 customers

- **Trucking Facebook groups & TruckersReport/OOIDA forums.** This is where small operators vent about detention daily. Post the brutal math ("you're leaving $11K/truck on the table"), offer to recover a free first claim, convert. These communities are tens of thousands strong and detention is an evergreen rage topic.
- **Contingency = a frictionless cold pitch.** DM/email the operators who *publicly complained* about a broker stiffing them on detention ("we'll recover that $250 you got ignored on — you pay nothing unless we collect"). Risk-free offer; the only question is "does it work," which a free first claim answers.
- **Factoring & dispatch-service partnerships.** Factoring companies already touch every invoice and ask for detention receipts; they don't *fight* for the money. Rev-share referral: they look like heroes, DockDun does the work, the operator keeps trucking. Each factor relationship is a pipe to hundreds of small carriers.
- **YouTube/TikTok trucker creators.** Owner-operator influencers (the "watch me run my truck business" niche) have exactly this audience; a real recovered-check screenshot is the ad.

## 10. Build complexity — justification

Medium. The ELD integrations (Motive/Samsara OAuth + telematics endpoints) and document parsing are standard but real integration work, and the broker-specific packet/rebuttal logic needs a few iterations against real denials to get win-rates up. No custom models, no novel infra — off-the-shelf LLM APIs plus geofencing. A focused pair can ship a credible v1 (one ELD integration, one accessorial type, contingency billing) in ~3–4 months and harden it with live claims.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Filing/collecting money owed under a rate-con on the carrier's behalf; not legal practice, it's billing/collections. Keep clear of unauthorized debt-collection-agency licensing by acting as the carrier's agent — validate per-state. |
| Ethical — no harm / dark patterns | ✅ | Recovers money genuinely owed; aligns incentives via contingency. |
| Market exists (evidence above) | ✅ | $15.1B/yr loss, OOIDA/ATRI data, paying incumbents. |
| 1–5 person team can build this | ✅ | Pair, ~3–4 months to v1. |
| Launchable with <$50K / ₹40L | ✅ | API + LLM costs; no hardware, no upfront data buy. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | $11K–19K/truck/yr leak, felt weekly, hair-on-fire for a squeezed operator — but they've coped by giving up, so it's a tolerated wound, not a stop-everything emergency. |
| Demand evidence | 15 | 13/15 | Multiple hard signals: ATRI $ figure, OOIDA survey, paying incumbents, evergreen forum rage. A skeptic nods. |
| Build feasibility | 15 | 11/15 | Standard integrations + LLM parsing; broker-specific win-rate needs real-world tuning, which takes live claims. |
| Distribution clarity | 15 | 12/15 | Named communities + risk-free contingency pitch + factor partnerships. Conversion of "free first claim → paying" is the unknown. |
| Revenue mechanics | 15 | 11/15 | Contingency is wallet-friendly and benchmarked (factoring/legal), but ARR depends on win-rate × recovered $/truck — one real assumption rides on it. |
| Time to first revenue | 10 | 7/10 | First recovered check (and thus first revenue) in weeks once a claim is filed — but the claim → broker-payment cycle can be 30–60 days. |
| Defensibility | 10 | 6/10 | Soft moat: a compounding library of broker-specific packet rules + win/loss data per broker that raises win-rates over time. Copyable, but the data lead and trust compound. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs ELD/API integration chops *and* someone who actually understands rate-cons, accessorials, and how brokers deny claims. A founder from the freight/factoring/dispatch world plus an engineer is the ideal pair.

### Key assumptions to validate (3–5)

1. **Assumption:** A broker-matched, evidence-complete packet meaningfully beats the operator's DIY win-rate (i.e., DockDun actually collects where they failed). **How to test:** Hand-file 20–30 real denied/abandoned claims for volunteer operators; measure recovery rate vs. their baseline.
2. **Assumption:** Operators will hand over ELD access and rate-cons to a third party that takes 25%. **How to test:** Offer 30 operators a free first claim; count how many connect their ELD and forward a rate-con.
3. **Assumption:** ELD APIs (Motive/Samsara) grant the GPS/HOS data depth needed at a price/terms that work for a third party. **How to test:** Build one integration end-to-end against a live account before writing the rest.
4. **Assumption:** Acting as the carrier's billing agent stays clear of state debt-collection-licensing regimes. **How to test:** One transportation/collections attorney consult before launch.

### Risk flags

1. **Regulatory/licensing risk:** Collecting money on another business's behalf can trip state debt-collection-agency rules. Structuring as the carrier's billing agent (not a third-party debt collector chasing the carrier's *customers'* consumer debt) likely avoids it, but confirm per-state.
2. **Platform dependency:** Heavy reliance on ELD vendor APIs (Motive/Samsara). If they restrict third-party telematics access or build this feature themselves, the data moat shrinks. Mitigate by supporting manual evidence upload as a fallback.
3. **Win-rate risk:** If brokers simply refuse to pay even airtight claims (silence-and-avoidance at scale), recovery rates — and thus revenue — disappoint. The contingency model means *DockDun* eats that risk, which is the point but also the danger.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Freight/factoring/dispatch domain operator + integration engineer
Time to revenue:        First recovered check in 4–8 weeks of filing (broker pay cycle 30–60 days)
Capital to launch:      $15–35K ($5–10K dev/API + legal consult + first ELD integration)
Top 3 assumptions to validate first:
  1. Broker-matched packet beats DIY win-rate — hand-file 20–30 real claims, measure recovery vs baseline
  2. Operators connect ELD + forward rate-con for a 25% cut — free-first-claim offer to 30 operators, count connects
  3. Billing-agent structure clears state debt-collection licensing — one attorney consult pre-launch
Kill criteria:
  - Abandon if recovery rate on hand-filed claims is no better than the operators' own DIY baseline
  - Abandon if <10 of 30 free-first-claim operators will connect an ELD and forward a rate-con
  - Abandon if legal review finds debt-collection licensing required in most target states with no clean agent structure
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 10 small operators from a trucking Facebook group / OOIDA forum who've recently been stiffed on detention. Collect their last 3 abandoned/denied claims (rate-con + BOL + ELD export).
- **Day 3–4:** Hand-build and hand-file the broker-specific packets and rebuttals (no product yet — concierge MVP). Submit them for real.
- **Day 5:** Decide go/no-go on a **falsifiable** outcome: at least 4 of 10 claims either paid or moved to "broker engaged/agreed to pay" within the cycle, *and* at least 6 of 10 operators say they'd give a 25% cut of recovered money for this. Below that, the wedge isn't real — go back to signals.
