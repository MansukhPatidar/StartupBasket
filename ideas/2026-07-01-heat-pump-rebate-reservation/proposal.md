---
title: "RebateLock — reservation desk for heat-pump installers"
slug: heat-pump-rebate-reservation
date: 2026-07-01
category: CleanTech / US HVAC & Electrification Contractors
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: "RebateLock shows heat-pump installers which state rebate funds are still open and locks each reservation before install."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Workflow-automation]
axes:
  problem: 17
  demand: 12
  build: 12
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# RebateLock — reservation desk for heat-pump installers

## 1. One-liner

RebateLock shows heat-pump installers which state rebate funds are still open and locks each reservation before install.

## 2. Trend signal — why now?

The federal rebate world for home electrification blew up on **December 31, 2025**. The Section 25C energy-efficiency credit and the 30% residential solar credit both expired. The identical heat pump a homeowner installed in 2025 for a $2,000 federal write-off now gets **nothing** federal in 2026. What replaced it is a fractured patchwork of state-run **HOMES** and **HEAR/HEEHRA** programs (up to $8,000–$14,000 per household) plus a couple thousand utility rebates ($200–$2,500), each with its own portal, its own eligibility rules, its own finite pot of money, and — critically — a **pre-approval reservation you must lock before the equipment goes in.**

The kicker: the money runs out, region by region, with almost no warning. Colorado's **HEAR Region 1 (Front Range) closed April 28, 2026**. Contractors got roughly four days' notice; the state stopped reviewing new income verifications on April 17 unless a project proposal was already on file. Any contractor still quoting that rebate to a Front Range homeowner on April 25 was selling a job they couldn't deliver.

This is a brand-new operational nightmare that did not exist 12 months ago. Every quote a heat-pump installer writes in 2026 now carries a live question — *is this rebate still funded, and did we reserve it before we touched the equipment?* — and the tools they already pay for (ServiceTitan, Housecall Pro, Jobber) don't answer it.

Provenance:
  - Signal 1 (Demand): Colorado HEAR Region 1 closed April 28, 2026 with ~4 days' notice; new-application path shut April 17 — contractors lost the ability to offer the rebate mid-sale. — https://unicolorado.com/hear-rebate-update-april-2026/ — 2026-04
  - Signal 2 (Feasibility): Cheap LLM extraction of equipment nameplates / AHRI certs plus agentic monitoring of ~50 state portal fund-status pages is now trivial; state "registered contractor" lists and program dashboards are public. — https://resources.instafill.ai/docs/hvac-construction/energy-efficiency-rebate-programs — 2026
  - Signal 3 (Economic): ~$8.8B IRA home-energy rebate pool flowing through state programs in 2026, up to $14K/job, on top of $200–$2,500 utility rebates; manufacturer-side rebate-software vendors (Snipp, RebatePros) prove money moves in this workflow. — https://homes.rewiringamerica.org/federal-incentives/home-efficiency-rebates — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The 2025→2026 transition moved the incentive from a **tax credit the homeowner claimed later** (contractor barely involved) to a **pre-approval reservation the contractor must secure before install** (contractor squarely on the hook). That flips the burden onto the installer and creates three ways to lose money that didn't exist before:

1. **Quote a dead rebate.** Fund closes mid-sale-cycle. Homeowner was promised $10K off, contractor now looks like a liar or eats the difference.
2. **Miss the reservation gate.** Install first, apply after — rejected. On HEAR that's an $8–14K hole per job.
3. **Bounce the submission.** Missing AHRI cert, wrong model number, no income verification on file — claim denied, contractor absorbs it or chases the homeowner.

The incumbents are the wrong shape. **Snipp and RebatePros** are manufacturer/big-builder rebate platforms — they process brand promotions, not the small installer's state-reservation clock. **Rewiring America and WattRebate** publish free *homeowner* eligibility calculators — great for "do I qualify," useless for "is this fund still open today and did my crew reserve it before Tuesday." **ServiceTitan / Housecall Pro** run dispatch and invoicing and have no rebate module at all. Nobody owns the contractor's operational layer: *live fund status across programs + a hard pre-approval gate wired into the job.*

## 4. Target market

- **Primary customer:** Owner or office manager at a small US HVAC / electrification contractor — 2 to 25 employees, installs heat pumps, heat-pump water heaters, and electrical panel upgrades. The shops that are "registered contractors" in one or more state HEAR/HOMES programs.
- **Why they buy:** In their words — *"I quoted a rebate, the money ran out, and now I'm the bad guy."* / *"We installed before the reservation cleared and ate $9,000."* The pain is a specific, expensive, repeatable moment: writing a quote that hinges on a rebate they can't personally verify is still live.
- **Rough TAM reasoning:** Contact databases list ~82,000 US HVAC companies. Even if only the 15,000–25,000 that actively chase electrification rebates are in scope, at $150–$400/mo that's a $30M–$100M ARR ceiling — comfortably a sub-$5M bootstrapped business without needing the whole market.
- **Why now for them:** Heat-pump installs are projected up 15–20% in 2026, and the rebate is now the deciding factor in whether the homeowner says yes. The contractor who can *confidently* promise a still-funded rebate wins the job; the one who guesses loses it or loses money.

## 5. Product sketch (MVP)

- **Live funding board:** a per-state, per-program status light — Open / Running Low / Closed — for the programs the contractor operates in, updated from the official portals and dashboards.
- **Rebate finder for a quote:** enter address + equipment + household income band → returns the specific programs that apply, dollar amounts, and whether each is currently funded.
- **Reservation gate:** every job gets a status (Not Reserved / Reservation Pending / Reserved / Installed). The system will not let a job move to "schedule install" while a required reservation is still pending, and screams if someone tries.
- **Doc checklist per program:** auto-generated list of exactly what this program needs (AHRI cert, model/serial, itemized invoice, income verification, pre-approval form) with photo/upload capture from the field.
- **Deadline + fund-depletion alerts:** SMS/email when a program the contractor uses drops to "running low" or announces a closure date, and when a reservation window is about to lapse.
- **Submission packet:** assembles the required documents into the format each state portal expects, ready to paste/upload.
- **Homeowner-facing one-pager:** a clean "here's your rebate, here's the status" sheet the contractor hands the customer to close the sale.

## 6. AI angle — what's load-bearing

Two places AI does real work, not decoration:

1. **Program monitoring & rule extraction.** State portals and utility pages are unstructured, inconsistent, and change without notice. An agentic layer reads them, extracts fund status, eligibility rules, doc requirements, and deadlines, and normalizes ~50+ programs into one schema. Doing this by hand across states is exactly the labor that makes the problem unsolved today.
2. **Document capture & validation.** Photograph the equipment nameplate → extract model/serial, match to the AHRI/ENERGY STAR cert, flag mismatches before submission. This is the single most common rejection cause. Cheap vision + LLM extraction turns a 15-minute clerical task into 15 seconds and kills the error class.

Remove the AI and you're left with a static rebate directory — which already exists for free and doesn't solve the live-fund or per-job-validation problem. The AI is what makes it operational.

## 7. Localization angle (if any)

N/A — this is a US-only play by design, and that's the point. The opportunity *is* the localization: it's hyper-local to US state and utility program structure. The equivalent "geography" wedge here is **state coverage** — win the 6–8 states with the biggest, messiest HEAR/HOMES rollouts (CA, CO, NY, MA, WA, ME, and the next tier) before anyone else maps them, and expand state by state as programs launch through 2026–2027.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo for a solo/small shop (single state, unlimited jobs), $299/mo standard (multi-state), $499/mo for larger crews with team seats and API into their CRM. Optional per-submission assist add-on.
- **ACV:** ~$2,500–$3,600/year blended.
- **Rough math to $1M ARR:** ~350 contractors × $250/mo × 12 ≈ $1.05M. That's ~1–2% of the ~25K rebate-active installers.
- **Rough math to $5M ARR:** ~1,400 paying contractors at the same blended ACV, plus expansion into panel-upgrade electricians and solar installers who face the identical reservation clock. Needs multi-state coverage mature enough to serve national franchise groups.
- **Expansion path:** seats as shops grow; add adjacent trades (electricians doing panel upgrades, HPWH plumbers, solar); a "done-for-you submission" premium tier where RebateLock actually files; eventually a lead-referral angle (homeowners searching "who does rebate-eligible installs near me").

## 9. Go-to-market wedge — first 100 customers

- **Scrape the public "registered contractor" directories.** Every state HEAR/HOMES program publishes a list of approved contractors (Colorado, Massachusetts Mass Save, Connecticut EnergizeCT, etc.). That's a named, pre-qualified list of *exactly* the shops with this pain — email + call with a 60-second Loom showing their state's live fund status.
- **Ride the next closure.** When a state region goes "running low," that's the moment of maximum pain. Monitor closures, then blast the registered-contractor list in that state within 24 hours: *"Region 1 funds close Friday — here's what's still open."* Fear-of-loss converts.
- **Distributor & manufacturer rep channels.** Heat-pump distributors (Daikin/Mitsubishi/Carrier reps) run contractor training and want their installers to close rebate-dependent jobs. Co-market: they get more equipment sold, we get warm intros to their contractor books.
- **r/hvacadvice and contractor Facebook groups.** The rebate-confusion threads are already there; show up with the free funding board as a lead magnet.
- **Free "Is this rebate still open?" widget.** Public, ungated, SEO-friendly per state ("Colorado HEAR status") — captures search traffic from panicked contractors and homeowners, funnels to the paid product.

## 10. Build complexity — justification

**Medium.** The core app (job tracking, checklist, reservation gate, alerts, doc capture) is a standard web + mobile-upload stack an experienced pair ships in 8–10 weeks. The real work is the **program-coverage layer** — mapping and maintaining ~50 state/utility programs' rules, doc requirements, and live fund status. That's not a research problem, it's a grind: agentic scraping + human review to launch 6–8 states, then expand. Budget ~10–14 weeks to a credible multi-state v1 for a small team, with ongoing content-ops to keep programs current.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Aggregating public program data + workflow tooling. No licensing needed. |
| Ethical — no harm / dark patterns | ✅ | Helps contractors deliver rebates they promise; reduces homeowners getting burned. |
| Market exists (evidence above) | ✅ | Documented closures, doc-burden, adjacent funded vendors, CRM gap. |
| 1–5 person team can build this | ✅ | Standard stack + off-the-shelf AI; coverage is ops, not R&D. |
| Launchable with <$50K / ₹40L | ✅ | Solo/pair build; main cost is time on program coverage. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Losing or eating an $8–14K rebate per job is hair-on-fire, and it recurs on every rebate-dependent quote. |
| Demand evidence | 15 | 12/15 | Strong indirect signals (dated closures, doc-burden coverage, adjacent funded vendors, confirmed CRM gap). Docked because direct contractor-voice quotes on *this exact* pain were thin. |
| Build feasibility | 15 | 12/15 | App is off-the-shelf; multi-state program coverage is the grind, but it's ops not research. |
| Distribution clarity | 15 | 12/15 | Named, public, pre-qualified contractor lists per state; closures create timed demand spikes. Conversion still to be proven. |
| Revenue mechanics | 15 | 11/15 | Clean per-seat pricing against $8–14K jobs; risk is WTP for a politically finite incentive category. |
| Time to first revenue | 10 | 8/10 | Self-serve, trial-to-paid; revenue in 4–8 weeks off the registered-contractor lists. |
| Defensibility | 10 | 6/10 | Moat is the maintained cross-state fund-status + rule dataset that compounds; copyable but a real grind. Platform/political risk on the programs themselves. |
| **Total** | **100** | **78/100** | GO. |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy` — needs someone who understands the HVAC/electrification contractor workflow (or a design partner who does) plus the engineering to build and maintain the agentic program-coverage layer.

### Key assumptions to validate (3–5)

1. **Assumption:** Rebate-active installers will pay $150–$300/mo to avoid quoting-a-dead-rebate and missed-reservation losses. **How to test:** 30 discovery calls with registered contractors in CO/MA/NY; pre-sell 10 at $149/mo before building full coverage.
2. **Assumption:** The pre-approval-before-install gate is the pain they'd pay for, not just the rebate finder (which is free elsewhere). **How to test:** show two mockups (finder-only vs finder+reservation-gate) and see which they say they'd pay for.
3. **Assumption:** Program fund-status can be monitored reliably enough to be trusted in a sales conversation. **How to test:** manually track 6 states' fund status for 3 weeks; measure how fast/accurately we'd have caught the next "running low."
4. **Assumption:** The 2026 program money and structure survives long enough to build a business on (political/funding risk). **How to test:** map program authorization horizons per state; confirm at least a 2–3 year runway in the target states.

### Risk flags

1. **Regulatory / political risk:** These are government-funded, finite, politically contingent programs. A future administration or state legislature could shrink or kill them — the exact same shift that created this opportunity could remove it. Mitigate by expanding into permanent *utility* rebates (which persist regardless of IRA) and adjacent trades.
2. **Platform dependency:** Coverage depends on scraping/reading state and utility portals that change format without notice. Requires ongoing ops discipline; a broken scraper = stale fund status = broken trust.
3. **Market timing:** If federal money fully drains before multi-state coverage matures, the acute pain softens. Move fast on the states with the biggest active rollouts.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + an HVAC/electrification contractor design partner
Time to revenue:        6–10 weeks (pre-sell off registered-contractor lists)
Capital to launch:      $8–15K ($ mostly founder time + AI/scraping infra)
Top 3 assumptions to validate first:
  1. Contractors pay $150–$300/mo — pre-sell 10 before full build
  2. Reservation-gate (not the free finder) is the willingness-to-pay driver — mockup test
  3. Fund-status monitoring is reliable enough to trust in a sale — 3-week manual shadow
Kill criteria:
  - Abandon if <8 of 30 discovery-call contractors will pre-commit at $149/mo
  - Abandon if target states announce program wind-down inside 12 months, gutting the runway
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape the registered-contractor lists for Colorado, Massachusetts, and New York. Build a throwaway "live fund status" board for those three states by hand.
- **Day 3–4:** Cold-call/email 30 registered contractors. Lead with their state's current fund status. Pitch: "$149/mo — never quote a dead rebate or miss a reservation again." Offer a founding-member pre-sell.
- **Day 5:** Decide go / no-go. **Falsifiable outcome:** ≥8 of 30 contractors verbally commit or put down a deposit at $149/mo. Below that, the operational pain isn't worth paying for yet — shelve and revisit as more states launch programs.
