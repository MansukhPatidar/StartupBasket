---
title: "DwellProof — detention-claim engine for trucking carriers"
slug: trucking-detention-claim-recovery
date: 2026-06-12
category: Logistics / US-SMB
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Turns ELD gate timestamps into a court-ready detention claim and chases the broker until it pays."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Workflow-automation, Owner-operator, Recovery]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# DwellProof — detention-claim engine for trucking carriers

## 1. One-liner

Turns ELD gate timestamps into a court-ready detention claim and chases the broker until it pays.

## 2. Trend signal — why now?

Detention — the time a driver sits past free hours at a shipper or receiver dock — is the single most disputed line in freight. The numbers are ugly and public: **94.5% of carriers charge detention, but fewer than 50% of those claims actually get paid** ([TRADLINX, 2026](https://blogs.tradlinx.com/over-90-charge-detention-fewer-than-50-get-paid/)). The trucking industry eats an estimated **$3.6B in direct annual losses** from unpaid detention and $11.5B in total productivity loss. Rates aren't trivial: $50–75/hr dry van, $60–90/hr reefer and flatbed.

Why it's hot *right now*:
- The small carrier is the one who eats it. Industry guidance is blunt: brokers "would rather sacrifice the independent owner-operators than hurt their relationship with shippers," and small operators lack the leverage to enforce detention ([TheTrucker / Overdrive, 2025–26](https://www.overdriveonline.com/overdrive-extra/article/15638339/ownerops-weigh-in-on-fmcsas-detentiontime-study-efforts)). **Carriers using manual processes capture only ~40% of the detention they're owed** ([Toro TMS, 2026](https://www.torotms.com/blog/driver-detention-management-software)).
- A regulatory shift just lit the fuse. A court overturned the FMC's trucking rule, putting demurrage and detention liability **back on motor carriers** in 2026 ([FreightWaves / Land Line, 2026](https://landline.media/truckers-back-on-the-hook-for-demurrage-and-detention-charges/)), and FMCSA is actively soliciting carrier input on detention. The "who owes what" question is being re-litigated in carriers' faces this year.
- The forums are on fire about *proof*, not money. The April 2026 TruckersReport thread title says it all: *"Lost detention pay again because broker said 'no proof' — how do you guys document it?"*

This isn't a hunch. It's a multi-billion-dollar leak with a documentation bottleneck and a fresh regulatory catalyst.

Provenance:
  - Signal 1 (Demand): 94.5% of carriers charge detention, <50% paid; $3.6B annual unpaid; small carriers capture only ~40% owed — [TRADLINX](https://blogs.tradlinx.com/over-90-charge-detention-fewer-than-50-get-paid/) + [Toro TMS](https://www.torotms.com/blog/driver-detention-management-software) — 2026
  - Signal 2 (Feasibility): ELD mandate made geofenced arrival/departure timestamps + dwell ubiquitous and API-exportable; cheap LLMs now read rate-confirmation detention terms and draft claims — [Truckstop / O Trucking detention guides](https://otrucking.com/resources/guides/detention-time-and-pay/) — 2026
  - Signal 3 (Economic): Freight-billing/TMS boom for small carriers ($200–600/mo, multiple funded players: Toro, Truckbase, Dashdoc); FMC trucking rule overturned, pushing D&D liability back onto carriers — [FreightWaves](https://landline.media/truckers-back-on-the-hook-for-demurrage-and-detention-charges/) — 2026
  Category: Workflow automation

## 3. The opportunity

Detention is money the carrier already earned and can't collect because they can't *prove* it in the format the broker will accept. The proof exists — it's sitting in the ELD as geofenced gate-in/gate-out timestamps and dwell duration — but nobody auto-assembles it into a broker-ready, contractually-grounded claim packet and then files and chases it.

The incumbents miss this from both sides:
- **TMS players** (Toro, Trimble TMW, McLeod, Tailwind, Dashdoc) treat detention as *one accessorial line item* on an invoice. They'll flag dwell, maybe drop a charge on the order — but they don't build the evidentiary packet, read the rate-con's specific detention clause, or run the dispute follow-up. Toro itself admits most tools "only identify that delays occurred but cannot turn those delays into billable charges."
- **Telematics platforms** (Samsara) have the timestamps but bill outside the platform — detention is an afterthought report, not a recovery workflow.
- **Invoice-reconciliation tools** like Laneproof are built for the *broker* — to catch carriers padding detention. That's the opposite side of the table.
- **Recovery services** exist in adjacent markets (Amazon FBA reimbursement, dental underpayment) on a 20–25% commission model. Nobody has packaged that motion for small-carrier detention, where the per-event dollar is smaller but the volume is relentless.

A focused AI-first team can be the one tool whose entire job is: detect the detention event → read the contract terms → assemble the court-grade packet → file it → chase it → book the recovery. That's a 10× UX collapse over a driver scribbling wait times on a BOL and arguing on the phone for ten business days.

## 4. Target market

- **Primary customer:** US trucking carriers running 5–25 power units, plus serious owner-operators (1–4 trucks), who haul broker freight and have no dedicated billing clerk. The dispatcher or the owner's spouse does the invoicing.
- **Why they buy:** In their words — *"Lost detention pay again because broker said 'no proof'."* They are leaving real money on the table every single week, they know it, and the existing answer ("negotiate it into the rate up front") doesn't help them recover the detention that already happened.
- **Rough TAM reasoning:** ~95,000 US carriers operate 6–20 trucks, and there are ~350,000+ very small carriers/owner-operators overall. Even a beachhead of small fleets that run heavy broker freight is tens of thousands of accounts. At $99–249/mo or a recovery commission, a few thousand paying carriers is a $3–6M ARR business.
- **Why now for them:** ELD data is finally good enough and exportable; the FMC ruling put D&D liability back on them in 2026; and brokers, squeezed in a soft freight market, are denying detention harder than ever. The pain went from chronic to acute this year.

## 5. Product sketch (MVP)

- **Auto-detect detention events.** Pull geofenced gate-in / gate-out timestamps and dwell from the carrier's existing ELD/telematics (Samsara, Motive, etc.) via their export/API — no new hardware.
- **Read the rate confirmation.** Upload or forward the rate-con; AI extracts the detention clause (free hours, hourly rate, notification requirements) so the claim is built against *that load's actual terms*.
- **Assemble a court-ready packet.** One PDF per event: timestamped ELD trail, signed BOL, geofence map, dwell calculation, the contractual rate math, and the dollar owed — formatted the way brokers and, if it comes to it, small-claims court will accept.
- **File and chase.** Generate the detention invoice + demand email, send it to the broker, and run automated follow-up on the 3–10 business-day approval cycle until it's paid or formally denied.
- **Recovery ledger.** Dashboard of every detention event, status (filed / approved / paid / denied), dollars recovered vs. owed, and per-broker pay rates so the carrier knows who actually pays.
- **Notification compliance guard.** Many claims die because the carrier didn't send the "arrival check call" in time — the app prompts the driver to trigger the contractually-required notification and timestamps it.

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet. The load-bearing AI work is **contract reading + claim assembly**: every rate confirmation states detention terms differently (free time, rate, who to notify, within what window), and the AI parses each one and maps the ELD evidence to *those* terms to produce a defensible dollar figure and a packet that survives a broker's "no proof" reflex. It also drafts the demand letters, classifies broker responses (approved / disputed / stalling), and decides the next chase step. The human just clicks "file." That's an hour-of-paralegal-work-per-claim collapsed to seconds — exactly the "2 hours → 2 minutes" shape this portfolio chases.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is bolted to US-specific structures: the FMCSA ELD mandate, the FMC/STB detention-liability regime, the US broker-carrier rate-confirmation workflow, and US small-claims procedure. Those are the moat ingredients, so this should be built US-only and deep, not global and shallow. A Canada extension is plausible later (similar ELD regime); EU/India have entirely different freight contracting and aren't a near-term target.

## 8. Business model — path to $1M–$5M ARR

- **Pricing (hybrid, pick-your-lane):**
  - **Subscription:** $99/mo (owner-operator, up to ~4 trucks) to $249/mo (5–25 trucks) for unlimited claim assembly + filing.
  - **Or success fee:** 15% of detention dollars recovered, for carriers who won't pay upfront — mirrors the FBA-reimbursement and dental-underpayment recovery model that already works on commission. Start commission-first to kill the "hard sell at any price" objection, then convert provers to flat subscription.
- **ACV:** ~$1,800–3,000/yr blended (subscription tiers + commission overage).
- **Rough math to $1M ARR:** ~450 carriers × $185/mo avg × 12 = $1.0M. Achievable inside the beachhead.
- **Rough math to $5M ARR:** ~1,900 carriers at the same blend, or fewer carriers + a meaningful commission take on recovered dollars. Would need a repeatable channel (see §9) and a second accessorial (lumper, TONU, layover) to lift ACV.
- **Expansion path:** Start at detention. Expand to *all* disputed accessorials (lumper fees, TONU, layover, reconsignment) — same evidence-packet engine, higher recovery per account. Then a "broker scorecard" data product (who actually pays detention) that compounds with every claim filed.

## 9. Go-to-market wedge — first 100 customers

- **Answer the exact thread.** Owner-ops are *publicly asking* "how do I document this?" on TruckersReport, r/Truckers, and trucking Facebook groups (there's an active FB group literally about "detention and accessorial recovery services for carriers"). Show up with a free "detention proof packet" generator (upload BOL + ELD export → get the PDF) and convert the askers. These are warm, self-identified leads.
- **Dispatch-service partnerships.** Independent dispatchers managing 5–30 owner-ops each are a force multiplier — they file the carrier's invoices and feel the detention pain on the carrier's behalf. Sign 10 dispatchers, get 100+ carriers. Rev-share the commission.
- **ELD/telematics marketplace + cold outreach.** List in the Motive / Samsara app marketplaces (carriers are already there for the data). In parallel, scrape FMCSA SAFER for carriers in the 5–25 truck band and run a personalized cold email: "Here's $X of detention you probably left on the table last quarter — we'll prove it."
- **Carrier-coach creators.** Trucking YouTubers/TikTokers who teach owner-ops the business side have exactly this audience and run affiliate deals.

## 10. Build complexity — justification

Medium. Off-the-shelf: LLM contract parsing, PDF packet generation, email/dispute automation, standard web app. Custom work is the **ELD/telematics integrations** (Samsara, Motive, and a few others each have their own export/API quirks) and getting the evidentiary packet format genuinely broker- and court-defensible — that needs a domain advisor (ex-broker or freight attorney) and real claim iteration. A two-person team ships a credible v1 in ~3–4 months: start with manual ELD-export upload (no integration) to prove recovery, then add direct API pulls.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping a carrier collect contractually-owed detention is plain commercial collections; stay clear of unlicensed legal practice by templating, not "representing." |
| Ethical — no harm / dark patterns | ✅ | Recovering money the carrier actually earned. Anti-fraud guardrails: only claim against real ELD timestamps. |
| Market exists (evidence above) | ✅ | $3.6B unpaid, <50% paid, public forum demand, funded adjacent tooling. |
| 1–5 person team can build this | ✅ | 2 people, ~3–4 months to v1 with manual upload first. |
| Launchable with <$50K / ₹40L | ✅ | Mostly off-the-shelf APIs + a domain advisor; no hardware, no capex. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Recurring weekly money-loss; carriers feel it and name it. Not quite "daily hair-on-fire" for the smallest operators who haul few detention-heavy loads, hence not 18+. |
| Demand evidence | 15 | 13/15 | Multiple hard, independent signals: $3.6B figure, <50% paid, public "how do I document this" threads, funded adjacent tooling. A skeptic nods. |
| Build feasibility | 15 | 11/15 | Core is off-the-shelf, but multi-ELD integrations + a packet that holds up under broker/court scrutiny is real engineering + domain iteration. |
| Distribution clarity | 15 | 11/15 | Named warm channels (forums, dispatchers, ELD marketplaces) and a SAFER list to scrape; conversion math still unproven, and small-dollar accounts can be slow to close. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked to TMS ($200–600/mo) and recovery-commission norms (15–25%). Risk: per-event dollar is modest, so ACV leans on volume + accessorial expansion. |
| Time to first revenue | 10 | 7/10 | Commission-first model + free proof-packet lead magnet can convert warm forum demand in weeks, but trust-building in a skeptical audience takes a beat. |
| Defensibility | 10 | 5/10 | Execution + accumulating broker-pay data + ELD integrations give a head start, but a TMS could bolt this on. Moat is the data ledger and the focus, not tech. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (ELD integrations, AI contract parsing) · `domain-expertise-required` (freight detention rules, broker behavior, evidentiary standards — get an ex-broker or freight attorney advisor on day one).

### Key assumptions to validate (3–5)

1. **Assumption:** A DwellProof-assembled packet meaningfully raises the paid-claim rate above the manual ~40–50% baseline. **How to test:** Hand-build packets for 20 real detention events from 5 carriers and track broker pay rate vs. their historical norm.
2. **Assumption:** Small carriers will pay (subscription or 15% commission) rather than just grumble. **How to test:** Pre-sell 20 carriers on a commission deal off a free proof-packet lead magnet before building integrations.
3. **Assumption:** ELD export/API data is clean and granular enough (real gate-in/out, not just "near facility") to stand as proof. **How to test:** Pull raw exports from Samsara + Motive for 10 carriers and verify geofence timestamp fidelity.
4. **Assumption:** Dispatchers will resell/refer for a rev-share. **How to test:** Pitch 10 independent dispatch services; aim for 3 LOIs.

### Risk flags

1. **Market timing / skepticism:** Drivers are jaded — one forum reply flat-out said a detention app "would be a hard sell at any price." The product must lead with *recovered dollars*, not a timer, or it dies in the demo.
2. **Platform dependency:** Reliant on ELD/telematics export access. If Samsara/Motive restrict APIs or ship their own detention-recovery feature, the integration moat thins.
3. **Counterparty resistance:** Even a perfect packet can't force a broker to pay if their shipper refuses and they choose to absorb-or-deny. Payment gaps persist *even with valid documentation* — the product improves odds, it doesn't guarantee collection.
4. **Regulatory whiplash:** The FMC/FMCSA detention-liability picture is actively moving in 2026; a rule change could help (mandated pay) or complicate (new notification requirements) the claim mechanics.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + freight domain advisor (ex-broker or freight attorney)
Time to revenue:        6–10 weeks (commission-first, manual-upload MVP)
Capital to launch:      $15–30K ($ for advisor + ELD API access + build)
Top 3 assumptions to validate first:
  1. Packet raises paid-claim rate above ~50% — hand-build 20 real packets, measure broker payout vs. history
  2. Carriers pay (commission or subscription) — pre-sell 20 on commission off a free proof-packet lead magnet
  3. ELD export data is granular enough to be defensible proof — pull raw Samsara/Motive exports for 10 carriers
Kill criteria:
  - Abandon if hand-built packets don't lift broker payout rate by ≥15 points across the first 20 test claims
  - Abandon if <5 of 50 cold-outreached carriers will commit to even a no-upfront 15% commission deal
  - Abandon if a major ELD vendor ships native detention-recovery and locks export APIs before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 5 small carriers from the active TruckersReport / Facebook detention threads. Get raw ELD exports + the rate confirmations for ~20 recent detention events they were *not* paid for.
- **Day 3–4:** Hand-assemble court-grade packets for those 20 events (timestamps + BOL + contract math) and have the carriers re-file them with the brokers.
- **Day 5:** Decide go / no-go on a **falsifiable** result: did re-filing with a real packet flip ≥3 of the previously-denied claims to paid (or formally approved)? If the packet doesn't move broker behavior, the whole thesis collapses and it's a no-go regardless of how nice the demo looks.
