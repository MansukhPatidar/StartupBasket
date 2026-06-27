---
title: "HeldSeat — no-show fee defender for restaurants & salons"
slug: no-show-fee-chargeback-defense
date: 2026-06-27
category: FinTech / US-SMB
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Auto-deflects and wins the chargebacks customers file on your no-show and cancellation fees, before VAMP gets your account killed."
tags:
  vertical: RestaurantTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Payments, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# HeldSeat — no-show fee defender for restaurants & salons

## 1. One-liner

Auto-deflects and wins the chargebacks customers file on your no-show and cancellation fees, before VAMP gets your processing account killed.

## 2. Trend signal — why now?

Three things collided in the last 12 months and put service merchants in a vise:

- **Visa dropped the VAMP merchant ratio to 1.5% on April 1, 2026** (from 2.2%), with $8 charged per dispute in any month over threshold and MATCH-list termination on the far end. The ratio now blends fraud reports *and* non-fraud disputes — and no-show fees generate exactly the kind of "I don't recognize this / I never agreed" disputes that count against you. ([MRC](https://merchantriskcouncil.org/learning/resource-center/member-news/blog/2026/stricter-vamp-ratio-thresholds-are-now-in-effect-heres-how-to-stay-compliant), [Seamless Chex](https://www.seamlesschex.com/blog/vamp-threscholds))
- **The dispute response window shrank to ~9 days in the US** (down from 20) as of July 2025 under Visa's VCR process, and "no response" is no longer a default option — miss the clock, lose automatically. ([Sift](https://sift.com/blog/visa-chargeback-changes-merchants/))
- **Booking platforms made no-show fees one-click easy** (Resy, Tock, SevenRooms, Vagaro, Boulevard, Square Appointments all charge cards on file) — so the *volume* of fee charges exploded, and with it the volume of disputes. Vagaro, Phorest, and Boulevard are all now publishing "how to defend against chargeback/friendly fraud" guides — a tell that the pain is hot. ([Phorest](https://www.phorest.com/us/blog/defend-your-salon-against-chargeback-fraud/), [Vagaro](https://www.vagaro.com/learn/minimize-chargebacks-friendly-fraud-with-vagaro))

The kicker: banks **side with the cardholder by default** on these. A restaurant service director quoted in industry coverage said fighting them "is futile, they always side with the customer." Salon guides flatly state "many clients don't think they should be charged for no-shows" — so they dispute, win, and the merchant eats $25–50 plus a 120-day fund hold plus ratio damage.

Provenance:
  - Signal 1 (Demand): Restaurant & salon owners report banks "always side with the customer" on no-show/cancellation fee disputes; $25–50 fee + 120-day hold per dispute — [Phorest](https://www.phorest.com/us/blog/defend-your-salon-against-chargeback-fraud/) / [Washingtonian](https://washingtonian.com/2024/05/29/canceling-your-dinner-reservation-could-cost-you-925/) — 2024–2026
  - Signal 2 (Feasibility): Visa RDR / Order Insight now self-serve via resellers; booking-platform data accessible; LLMs assemble reason-code-tailored representment PDFs in seconds — [DisputeHelp](https://disputehelp.com/how-visa-rdr-is-transforming-merchant-operations/) / [Chargeback.io](https://www.chargeback.io/blog/what-is-rapid-dispute-resolution-rdr) — 2026
  - Signal 3 (Economic): VAMP merchant ratio cut to 1.5% on April 1, 2026; $8/violation; MATCH-list termination; chargeback-management is a funded category (Chargeflow, Justt, Chargebacks911) that targets ecommerce, not service no-show fees — [MRC](https://merchantriskcouncil.org/learning/resource-center/member-news/blog/2026/stricter-vamp-ratio-thresholds-are-now-in-effect-heres-how-to-stay-compliant) — 2026
  Category: Tech-unlock

## 3. The opportunity

There's a category of chargeback that the entire chargeback industry ignores: the **no-show / late-cancellation / deposit fee** on a service appointment.

It's ignored because it's small-dollar ($25–250), service-specific, and the winning evidence is *nothing like* an ecommerce dispute. There's no tracking number, no delivery confirmation, no SKU. What wins is a **consent trail**: timestamped proof the cardholder saw and accepted the cancellation policy at booking, the reservation/appointment record, the cancellation-window math, and proof the slot was actually held (and lost). That data lives inside Resy / Tock / Vagaro / Boulevard / Square — not in the merchant's payment processor where Chargeflow and friends plug in.

So the incumbents (Chargeflow, Justt, Chargebacks911, Disputifier, Kount) optimize for ecommerce GMV recovery and skip this entirely. The booking platforms acknowledge the problem but their "solution" is a help-doc telling you to *manually* screenshot your policy and email it to your bank within 9 days. Nobody automates the actual fight.

The 10× play: **plug into the booking system AND the payment account, deflect what's deflectable via RDR/Order Insight, auto-assemble the consent-trail PDF for the rest, file before the 9-day clock — and watch the VAMP ratio so the merchant doesn't get terminated.** Two-minute job that a chargeback analyst used to bill for, now automatic.

## 4. Target market

- **Primary customer:** US independent restaurants taking deposits/no-show fees (Resy, Tock, SevenRooms) — 1–5 locations; and US salons / spas / med-spas charging cancellation fees (Vagaro, Boulevard, Square Appointments) — 1–5 chairs/rooms. Owner-operator or office manager buys.
- **Why they buy (their words):** "We charge a no-show fee, the client disputes it, the bank refunds them, and now I'm out the fee *plus* a $30 chargeback fee *plus* my Square balance is frozen for 90 days — and I just got a 'high dispute rate' warning email." The med-spa/salon version is sharper because tickets are bigger ($150–500 no-shows are common).
- **Rough TAM reasoning:** ~700K US food-service establishments + ~270K beauty/personal-care + ~50K med-spas. Realistically serviceable wedge = the subset on deposit-enabled booking platforms actively charging fees: low hundreds of thousands of locations. Capture a few thousand at $79–199/mo = a healthy sub-$5M bootstrapped business.
- **Why now for them:** April 2026 VAMP made the ratio existential. A busy restaurant or med-spa charging 30 no-show fees a month with a 40% dispute rate is now staring at termination, not just nuisance fees.

## 5. Product sketch (MVP)

- **Connect once:** OAuth/export link to one booking platform (start with Square Appointments — single combined booking+payments surface) and the payment account.
- **Dispute inbox:** every incoming no-show/cancellation-fee dispute lands in one place with its 9-day countdown clock front and center.
- **Auto-deflect:** for eligible disputes, fire RDR/Order Insight rules so the small ones resolve *before* they count against the VAMP ratio (refunding a $40 fee beats a $30 chargeback fee + ratio hit).
- **One-click evidence packet:** auto-pulls the booking record, the timestamped policy-acceptance, the cancellation-window calc, and the slot-held proof into a reason-code-tailored representment PDF, formatted to the network's spec.
- **VAMP ratio meter:** live dispute-ratio gauge with a "you're at 1.2%, three more disputes this month trips $8/each" warning and a projected-termination alert.
- **Policy hardener:** flags weak spots in the merchant's current cancellation policy/consent flow that cause auto-losses, with copy-paste fixes.
- **Outcome ledger:** what was deflected, what was won, what was lost, and the dollars + ratio points saved.

## 6. AI angle — what's load-bearing

The load-bearing AI is **evidence assembly and reason-code matching**. Every network/issuer wants a different representment narrative for a different reason code, tailored to *this* transaction's facts — historically a trained analyst's job. The model reads the booking record + policy + timestamps and writes the specific, reason-code-correct rebuttal narrative and assembles the exhibit PDF, per dispute, in seconds. Remove the AI and you're back to a $40/hr human doing it manually within a 9-day window — which is exactly why no-show disputes go undefended today. The deflection rules and ratio math are deterministic plumbing; the *winning argument generation at zero marginal cost* is the unlock.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge *is* the US card-network rule set: Visa VAMP thresholds, the 9-day VCR window, RDR/Order Insight availability, and MATCH-list mechanics. The same shape could later port to other Visa/Mastercard regions, but the rules, deadlines, and deflection tooling differ enough that US is the clean v1 and there's no localization shortcut worth taking first.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $79/mo (single location, up to ~30 disputes/mo) and $199/mo (multi-location / med-spa tier, higher volume + priority RDR). Optional success fee on recovered funds for the highest-volume accounts, but the flat SaaS tier is the spine — bootstrap-friendly, predictable.
- **ACV:** ~$1,400 blended ($79–199/mo).
- **Rough math to $1M ARR:** ~600 locations × ~$140/mo × 12 ≈ $1.0M. Very reachable inside the deposit-charging restaurant + med-spa wedge.
- **Rough math to $5M ARR:** ~3,000 locations on the SaaS tiers, plus success-fee upside on a few hundred high-volume med-spas/fine-dining accounts. Requires multi-platform connectors (Square + Resy/Tock + Vagaro/Boulevard) and a real referral motion through booking-platform communities.
- **Expansion path:** per-location seats as chains add rooms; usage tier as dispute volume grows; upsell a "policy + consent flow" compliance module and a quarterly VAMP-health report the owner can show their acquirer.

## 9. Go-to-market wedge — first 100 customers

- **Med-spa first, not restaurants.** Bigger tickets ($150–500 no-shows) = sharper pain = higher WTP. Scrape the ~50K US med-spas, filter to those publicly advertising a cancellation/deposit policy (they're telling you they have the problem), send a personalized Loom showing their own policy's auto-loss weak spots. Expect 3–5% reply on a pain this specific.
- **Booking-platform Facebook/Reddit communities.** Vagaro, Boulevard, and Resy each have active owner groups where "got hit with a chargeback again" is a recurring thread. Show up with a free "VAMP ratio check" teardown, not a pitch.
- **Ride the April-2026 VAMP scare.** Acquirers are sending "high dispute rate" warning emails right now. Run a simple landing page — "Got a dispute-rate warning from Square/Stripe? Don't get terminated" — against search terms like *square high dispute rate warning* and *salon chargeback no show*. These are bottom-funnel, low-volume, high-intent queries the incumbents don't target.
- **Bookkeeper / salon-consultant referral.** The people who already clean up these merchants' books and operations see the chargeback bleed monthly; a 20% rev-share turns them into a channel.
- **POS reseller / ISO co-sell.** Independent sales orgs that place Square/Clover/processing for restaurants get blamed when accounts get flagged; a co-branded retention tool is in their interest.

## 10. Build complexity — justification

**Medium.** The hard part is the booking-platform connectors (each has its own API or export quirks) and getting RDR/Order Insight enrollment wired through a reseller — both are integration grind, not research. Evidence-PDF generation, reason-code mapping, and the ratio meter are off-the-shelf LLM + standard web stack. Start with Square Appointments (one surface for both booking and payments) to ship a credible v1 in ~10–14 weeks for a pair, then add Resy/Tock/Vagaro/Boulevard connectors one at a time. No custom models, no novel infra.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Representment and RDR are sanctioned card-network processes; we file evidence the merchant is entitled to file. |
| Ethical — no harm / dark patterns | ✅ | We win *legitimately-charged, properly-consented* fees and flag weak/unfair policies to fix — not help merchants charge fees they shouldn't. |
| Market exists (evidence above) | ✅ | Active owner complaints, incumbent "how-to-defend" content, funded adjacent category. |
| 1–5 person team can build this | ✅ | Pair ships Square-only v1 in ~3 months. |
| Launchable with <$50K / ₹40L | ✅ | API access + LLM inference + a reseller relationship; no capital-heavy lift. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money + termination risk, felt weekly by busy bookers. Not quite "daily hair-on-fire" for the median small salon, hence not 18+. |
| Demand evidence | 15 | 12/15 | Multiple independent signals (owner complaints, incumbent defense content, VAMP rule change, funded adjacent category). No public revenue proof for *this exact* niche yet. |
| Build feasibility | 15 | 11/15 | Doable in ~3 months for Square-only, but connectors + RDR enrollment are real integration grind. |
| Distribution clarity | 15 | 12/15 | Named lists (med-spas, booking communities), bottom-funnel intent queries, referral channels. Conversion math still a hypothesis. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against existing chargeback tools and booking subscriptions; ACV reasonable; flat-SaaS path to $1M clean. |
| Time to first revenue | 10 | 8/10 | Self-serve SMB, urgent pain, short trial — revenue in 4–8 weeks of launch plausible. |
| Defensibility | 10 | 6/10 | Soft moat: accumulating booking-platform connectors + reason-code win-rate data + workflow lock-in. Copyable, but the connector + reseller grind buys a head start. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — you need someone who can grind booking-platform integrations *and* someone who actually understands chargeback reason codes and RDR enrollment. A payments/chargeback domain advisor is close to mandatory.

### Key assumptions to validate (3–5)

1. **Assumption:** Med-spas/restaurants with no-show fees lose the *majority* of disputes today and will pay $79–199/mo to flip that. **How to test:** 25 owner interviews + pull their last 3 months of dispute outcomes.
2. **Assumption:** RDR/Order Insight can be enrolled for these merchants through a reseller without an enterprise contract, at a per-merchant cost that fits the price. **How to test:** get quotes from 2–3 RDR resellers for a single small merchant.
3. **Assumption:** Booking-platform data (policy consent timestamp, slot-held proof) is actually retrievable via API/export at sufficient fidelity to win representments. **How to test:** integrate Square Appointments and run 10 real disputes end-to-end.
4. **Assumption:** The 9-day window is winnable with auto-assembled evidence — i.e. our PDFs beat the merchant's manual ones. **How to test:** A/B 20 disputes, our packet vs. their status quo, compare win rates.

### Risk flags

1. **Platform dependency:** RDR/Order Insight and booking-platform APIs are controlled by Visa/Square/Resy; pricing or access changes could squeeze the model. Mitigate by spreading across connectors and keeping the manual-representment path as a fallback.
2. **Win-rate ceiling:** if issuers continue to side with cardholders even on well-evidenced no-show fees, the value prop weakens to "deflect + ratio management" rather than "win." Validate win-rate lift early (assumption #4) — it's the make-or-break.
3. **Incumbent encroachment:** a Chargeflow or a booking platform itself (Square, Vagaro) could bolt on a no-show evidence feature. The defense is niche depth, connector breadth, and being first to own the "VAMP-survival for service merchants" position.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can grind API connectors, paired with a payments/chargeback domain advisor
Time to revenue:        6–10 weeks from launch (Square-only v1)
Capital to launch:      $10–20K (LLM inference, RDR reseller setup, API access)
Top 3 assumptions to validate first:
  1. Win-rate lift — our auto-assembled packet beats the merchant's manual one (A/B 20 real disputes)
  2. RDR/Order Insight enrollable for small service merchants via reseller at a price the model supports
  3. Booking-platform data is retrievable at fidelity sufficient to win representments (Square integration + 10 live disputes)
Kill criteria:
  - Abandon if our evidence packets don't beat status-quo win rates by a meaningful margin across 20 real disputes
  - Abandon if RDR/Order Insight can't be enrolled for sub-$200/mo merchants without an enterprise contract
  - Abandon if <8% of 50 targeted med-spa outreach show buying intent
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Interview 15 med-spa / restaurant owners who charge no-show fees. Pull their actual last-90-day dispute count and win/loss outcomes. Quantify the bleed (fees lost + chargeback fees + any dispute-rate warnings received).
- **Day 3–4:** Call 2–3 RDR/Order Insight resellers and get real per-merchant enrollment terms and pricing for a single small merchant. Confirm Square Appointments exposes the consent-timestamp and booking data we need via API/export.
- **Day 5:** Go / no-go. **Go only if:** (a) ≥10 of 15 owners report losing the majority of no-show disputes today AND say they'd pay ≥$79/mo to fix it, AND (b) RDR is enrollable for a small merchant at a cost that fits the price, AND (c) Square actually exposes the consent-trail data. Falsifiable: if owners say they win most disputes already, or RDR needs an enterprise contract, the idea is dead.
