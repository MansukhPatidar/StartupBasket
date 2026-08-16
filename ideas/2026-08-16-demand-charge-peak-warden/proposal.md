---
title: "PeakWarden — demand-charge warden for small commercial shops"
slug: demand-charge-peak-warden
date: 2026-08-16
category: CleanTech / US-SMB
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Warns a shop before its 15-minute power spike locks in eleven months of higher electric bills."
tags:
  vertical: CleanTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Solo-builder, Energy, Utility-data]
axes:
  problem: 17
  demand: 11
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# PeakWarden

## 1. One-liner

Warns a shop before its 15-minute power spike locks in eleven months of higher electric bills.

## 2. Trend signal — why now?

Three things moved at once.

**The money got bigger and the mechanic got meaner.** Demand charges — billed on your single highest 15-minute interval, not your total consumption — now account for [30–70% of a commercial electricity bill](https://www.sanalifeenergy.com/blog/peak-demand-charges-explained-the-biggest-line-item-nobodys-managing). In Texas, demand charges become mandatory once [average summer peak demand exceeds 10 kW](https://comparepower.com/demand-charges-explained/) — that is a small shop, not a factory. Typical rates run $12–15/kW. A 250 kW peak at $14/kW is $3,500 *in a single month*, and a 300 kW facility pays [$15,000–$25,000 per year](https://comparepower.com/demand-charges-explained/) in total demand costs.

**The ratchet turns one bad afternoon into a year-long tax.** Most commercial tariffs carry a ratchet clause setting minimum billing demand at 75–80% of the highest peak in the [previous 11 months](https://www.energytoolbase.com/blog/utility-rates/understanding-demand-ratchets-the-hidden-force-behind-energy-bills/). A 400 kW summer peak bills at a 320 kW floor for eleven more months — roughly [$42,240 per year](https://comparepower.com/demand-charges-explained/) at $12/kW. Energy Toolbase documents a Unisource Arizona schedule where a 100 kW peak locks in $1,134/month even when actual demand falls to 63 kW. The industry's own description: facility managers "discover they have a ratchet clause the hard way."

**The data finally became reachable without hardware.** Green Button Connect and AMI rollouts now expose 15-minute interval data for non-residential accounts at PG&E (ESPI 1.1 API, OAuth 2.0), SCE, Eversource, Seattle City Light and others — [documented utility-by-utility](https://nectarclimate.com/utilities/pacific-gas-electric-pge). UtilityAPI resells authorized access at a [$15 base price per meter](https://utilityapi.com/pricing). Five years ago this product needed a $2K submeter and an electrician. Today it needs an OAuth consent screen.

The kicker: the fix is usually free. Industry guidance is that [delaying equipment startup by 15–20 minute intervals cuts peak demand 20–35%](https://www.reliant.com/en/business/small-business/help-support/small-business-resources/understanding-demand-charges) with no capital investment. Nobody is selling that, because there's no hardware margin in it.

```
Provenance:
  - Signal 1 (demand): Demand charges = 30–70% of commercial bills; ratchet clauses lock 75–80% of a single 15-min peak into 11 subsequent months; operators "discover it the hard way" — https://www.energytoolbase.com/blog/utility-rates/understanding-demand-ratchets-the-hidden-force-behind-energy-bills/ + https://comparepower.com/demand-charges-explained/ — 2026-08-16
  - Signal 2 (feasibility): Green Button Connect / ESPI 1.1 OAuth interval data now live for non-residential accounts across PG&E, SCE, Eversource, Seattle City Light; UtilityAPI resells at $15/meter — https://nectarclimate.com/utilities/pacific-gas-electric-pge + https://utilityapi.com/pricing — 2026-08-16
  - Signal 3 (economic): Demand-charge management is a funded category — Sanalife E360, Stem Athena, Vutility, Fermata Energy — but every player monetizes batteries, hardware or enterprise EMS, leaving sub-100kW shops unserved — https://www.sanalifeenergy.com/energy-management-software/demand-management + https://www.cbinsights.com/company/vutiliti/alternatives-competitors — 2026-08-16
  Category: Tech-unlock
```

## 3. The opportunity

The demand-charge market is real and funded — Stem, Sanalife, Vutility, Fermata Energy, Energy Toolbase all live here. Every one of them sells the *expensive* answer: batteries, controllers, submetering hardware, or an enterprise EMS with a multi-site sales cycle. That's rational, because a battery has margin and a behavior nudge doesn't.

It leaves an obvious hole. The machine shop with a 60 kW peak, the bakery with a morning oven ramp, the small grocer, the fabrication shop with three CNC machines — they're on a demand tariff (Texas triggers it at 10 kW), they're paying real money, and no incumbent will call them because a $40K battery quote doesn't close on a business that spends $2,000/month on power. These operators get exactly one artifact today: a paper bill, thirty days late, with a kW number on it and no indication of which Tuesday afternoon caused it.

The 10× isn't a better battery. It's **timing and attribution**. Tell an owner *which quarter-hour* set the peak and *what was running*, and warn them in the current billing cycle while the month's peak can still be beaten — because once the month closes, the ratchet locks it in for eleven more. Incumbents sell equipment to shave peaks. This sells the knowledge that the peak is happening right now, to people no one will sell equipment to.

The second, quieter wedge: **ratchet forensics**. A huge share of these businesses are paying a floor set by a spike months ago and have no idea. Reading twelve months of interval data and saying "your billed demand hasn't matched your actual usage since last August, and here is the 15-minute window that did it" is a report nobody currently produces for a small account, and it converts into a paid subscription because the owner immediately understands the number is still bleeding.

## 4. Target market

- **Primary customer:** Owner or operations manager of a single-site commercial business on a demand-metered tariff — machine and fabrication shops, bakeries and commissary kitchens, small groceries and cold storage, car washes, plastics/injection molders, craft breweries. 5–50 employees, monthly electric bill $800–$6,000, peak demand roughly 25–200 kW. US, concentrated first in high-demand-charge deregulated territories: Texas (ERCOT), California (PG&E/SCE), Illinois (ComEd), Massachusetts/Connecticut (Eversource), Arizona.
- **Why they buy:** The bill went up and they can't explain it. Demand charges are 30–70% of it, the ratchet keeps it high even in slow months, and their own trade press tells them facility managers only notice "by noticing that their billed demand never changes month to month even when actual usage drops." They aren't buying software; they're buying an answer to "why am I paying this."
- **Rough TAM reasoning:** US small commercial electricity accounts run into the millions, and the demand-tariff threshold is low enough (10 kW in Texas) that any shop with real equipment crosses it. I don't need a big share. At $149/mo, ~560 sites is $1M ARR. That's a rounding error against the population of US machine shops and bakeries alone.
- **Why now for them:** Commercial power rates and peak-demand cost allocation have been climbing, and AMI rollouts mean their own 15-minute data now exists and is legally theirs to authorize — which was not true for most of these meters a few years ago.

## 5. Product sketch (MVP)

- **One-time ratchet audit.** Owner authorizes utility data via Green Button OAuth; within minutes they get a report showing the exact 15-minute interval that set each month's peak, whether a ratchet floor is currently active, and the dollars that floor is costing per month until it expires.
- **Peak race alarm.** Mid-cycle alert by SMS/WhatsApp/email when the month's running peak is approaching or has just exceeded the prior peak — the only moment when action still changes the bill.
- **Attribution guess.** Plain-language reading of what likely caused a spike: simultaneous startup, HVAC coincidence with production ramp, a compressor cycling with the oven. Derived from load shape and a short onboarding questionnaire about the equipment on site.
- **Stagger plan.** A concrete, dated schedule — "start the second oven at 6:20 not 6:00; hold the compressor until the HVAC pull-down finishes" — with the estimated kW and dollar effect of each change.
- **Verified savings statement.** Monthly before/after showing billed demand, what the peak would have been, and cumulative dollars avoided. This is the renewal argument.
- **Tariff decoder.** Reads the customer's actual rate schedule (ratchet %, lookback months, demand rate, seasonality) so the math is theirs, not a generic model.
- **Broker/portfolio view.** A partner-facing screen where an energy broker sees every client's ratchet exposure ranked by dollars at risk.

## 6. AI angle — what's load-bearing

Two places where AI does actual labor, not decoration.

**Tariff ingestion.** US utility tariff sheets are sprawling, inconsistent PDFs; ratchet terms hide under "Billing Demand" clauses with different percentages, lookback windows and seasonal carve-outs per schedule. Parsing those into structured rules is the unglamorous work that has kept this analysis expensive and manual — it's why the category serves large accounts, where a consultant's hours are justified. LLM extraction, with human review on each new schedule, collapses per-account setup from consultant-hours to minutes. That's what makes a $149/mo price possible at all.

**Attribution and coaching in plain language.** Turning a load curve plus an equipment list into "your 6:00 AM oven-and-HVAC overlap set your peak; move one by twenty minutes" is a reasoning-and-explanation task. The alternative today is an energy consultant, which small shops don't buy.

Remove the AI and the product still technically exists — as a spreadsheet a consultant fills in for $3,000 per site. That's precisely the incumbent shape, and it's why the small end goes unserved. The AI is what moves this from a service to a product. I'll be honest that the peak detection itself is arithmetic, not intelligence; the intelligence is in tariffs and explanation.

## 7. Localization angle (if any)

N/A — this is a US-first play, and deliberately so. The wedge *is* the local specificity: ratchet clauses, 15-minute interval conventions, Green Button/ESPI authorization, and state-by-state tariff structures are US utility constructs. The equivalent products elsewhere (UK/AU capacity charges, India's contract demand and maximum-demand penalties) are real but structurally different enough to be separate products, not translations. India in particular has a strong analog — contract demand penalties bite hard on MSMEs — but the data access story is nowhere near Green Button's maturity, so the tech-unlock that makes this cheap doesn't hold there yet.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo per site (single meter). $99/mo on annual prepay. $399 one-time ratchet audit, credited toward the first year — this is the real door-opener because it's a fixed-fee answer to a question they already have.
- **ACV:** ~$1,500–1,800 single-site. Multi-meter operators (small chains, 3–8 sites) land at $4,000–8,000.
- **Rough math to $1M ARR:** 560 sites × $149/mo × 12 ≈ $1.0M. With a blend of audits and multi-site accounts, ~450–500 logos gets there.
- **Rough math to $5M ARR:** ~2,800 site-equivalents. Realistically this comes from broker/consultant channel resale — one broker with 200 small commercial accounts is 200 sites from a single relationship — plus multi-site franchise operators (car washes, bakery chains, laundromats). Not from one-at-a-time SMB self-serve.
- **Gross margin:** healthy. Marginal cost per site is roughly the $15/meter data charge plus modest inference; the tariff-parsing cost is amortized per rate schedule, not per customer, and schedules are shared across every customer in that territory. That's the quiet compounding advantage.
- **Expansion path:** more meters, then adjacent load-shifting advice, then referral fees on the batteries/controls we *don't* sell — the natural handoff when a site's peak can't be fixed behaviorally. That referral flow is worth real money precisely because we've already quantified the savings the hardware would produce.

## 9. Go-to-market wedge — first 100 customers

- **Energy brokers as the primary channel.** Brokers serving small commercial accounts already hold the bills, the letters of authority, and the trust. They earn on [procurement uplift, typically $0.001–0.01/kWh or 3–10% of annual spend](https://diversegy.com/energy-brokers/energy-broker-fees/) — and they have no product to sell between renewals. Offer a free ratchet audit across 20 of their accounts, hand back a ranked list of who's bleeding, revenue-share the subscription. Recruit 10 brokers; each converting 10 accounts is the first 100. This is the highest-conviction path because the data authorization is already in their hands.
- **Ratchet-audit cold outreach with the number in the subject line.** Target Texas and Arizona first (mandatory demand charges above 10 kW, common ratchets). Pull machine shops, bakeries, and food processors from state manufacturer directories and Google Maps in ERCOT territory. The offer isn't a demo — it's "authorize read-only access to your meter, get a report in 24 hours telling you which 15 minutes set your bill." Expect low single-digit reply rates but high close rates on replies, because the audit *is* the sales call.
- **Trade associations and equipment dealers.** State machine-shop and baker associations, plus compressor and HVAC service contractors who are on-site anyway and get asked "why is my power bill so high." Co-branded audit; contractor gets referral fee and a warm lead for the equipment fix we surface.
- **Content aimed at one exact search.** Owners googling "why did my electric bill go up when I used less" and "what is billing demand ratchet" are pre-qualified and in pain. A tariff-by-tariff ratchet explainer library (one page per major utility schedule) is durable SEO that also doubles as the tariff database we're building anyway.

## 10. Build complexity — justification

**Low.** Off-the-shelf across the board: UtilityAPI or direct Green Button/ESPI OAuth for interval data, standard web stack, LLM APIs for tariff parsing and explanation, Twilio for alerts. No hardware, no installation, no field ops — which is the whole point of the wedge and the reason it can be priced at $149. The genuine work is the tariff rule library (tedious, needs human verification per schedule) and getting alert thresholds tuned so they fire early enough to be actionable without becoming noise. A solo builder ships a credible v1 for two or three utility territories in 6–8 weeks; the tariff library then grows territory by territory with demand.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Customer-authorized data access via Green Button/ESPI OAuth. No utility permission needed beyond standard third-party registration. |
| Ethical — no harm / dark patterns | ✅ | Saves customers money on a charge they can't currently see. Read-only data. Savings claims must be verifiable against actual bills — that's a discipline, not a conflict. |
| Market exists (evidence above) | ✅ | Funded incumbents (Stem, Sanalife, Vutility, Fermata) prove spend exists; they serve the large end only. |
| 1–5 person team can build this | ✅ | Solo-to-pair build. No hardware. |
| Launchable with <$50K / ₹40L | ✅ | Data costs ~$15/meter, no inventory, no capex. Well under $15K to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Quantified, recurring, and compounding — 30–70% of the bill, with a ratchet that extends one mistake across 11 months. Not hair-on-fire only because it's invisible: the pain is severe but the customer often doesn't know its name. That invisibility is both the opportunity and the friction. |
| Demand evidence | 15 | 11/15 | Strong published evidence of the cost mechanic and a funded competitor set proving budget exists. Docked meaningfully: I could not surface verbatim small-operator complaints in-channel, so willingness-to-pay *at the small end specifically* is inferred from incumbent pricing at the large end, not observed. This is the axis to validate first. |
| Build feasibility | 15 | 13/15 | Off-the-shelf data APIs and standard stack; no hardware. Tariff library is tedious but bounded and compounds. |
| Distribution clarity | 15 | 12/15 | Broker channel is concrete, named, and already holds authorizations. Docked because broker partnerships take real selling and the direct-SMB motion requires data authorization before value is proven — a genuine friction step. |
| Revenue mechanics | 15 | 11/15 | Pricing is defensible against $15–25K/yr of exposure and margins are good. Docked because $149/mo against a channel that must be worked one broker at a time makes the path to $5M dependent on channel leverage that isn't yet proven. |
| Time to first revenue | 10 | 8/10 | The $399 audit is sellable the week the tariff parser works for one territory. Revenue in 4–8 weeks is realistic. |
| Defensibility | 10 | 4/10 | Honestly weak. The peak math is arithmetic. The tariff rule library and accumulated attribution patterns compound, and broker relationships are sticky, but a competent competitor rebuilds the core in a quarter. This is an execution-and-focus moat, not a structural one. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Technical for the utility data integrations and tariff parsing; sales-heavy because the broker channel is a relationship business and the direct motion requires walking owners through an OAuth consent they've never seen. A builder who won't get on the phone with brokers should skip this one.

### Key assumptions to validate (3–5)

1. **Assumption:** Small operators (25–200 kW) will pay $149/mo for visibility and coaching with no hardware. **How to test:** Sell 15 paid $399 ratchet audits before building the subscription. Paid audits, not signups — a free audit tests nothing.
2. **Assumption:** A meaningful share of small commercial accounts are actually sitting on an active ratchet floor. **How to test:** Run 30 real accounts' 12-month interval data and count how many show billed demand decoupled from actual usage. If it's under a third, the sharpest hook weakens and the pitch has to shift entirely to live peak alerts.
3. **Assumption:** Behavioral staggering delivers enough real savings to justify renewal. **How to test:** Instrument 10 pilot sites for 90 days; measure actual billed-demand reduction against the recommended plan. The 20–35% figure is industry guidance, not my measurement.
4. **Assumption:** Energy brokers will co-sell rather than see this as a threat to their procurement pitch. **How to test:** 10 broker conversations; look for whether they'll hand over 20 accounts for a batch audit.
5. **Assumption:** Green Button authorization completion rates are tolerable for non-technical owners. **How to test:** Measure drop-off on the first 50 authorization attempts. This is a silent killer if owners abandon the OAuth flow.

### Risk flags

1. **Platform dependency:** The entire product rests on utility data access — Green Button coverage, ESPI API stability, or UtilityAPI's pricing and terms. Coverage is uneven and some utilities (Unitil, for example) still don't expose interval data. Territory selection is a strategic decision, not a detail.
2. **Attribution honesty:** Savings claims are the renewal argument and also the reputational risk. Weather, production volume and seasonality all move demand independently of our advice. Claiming credit for savings we didn't cause is the fastest way to lose brokers, who will notice.
3. **Incumbent downmarket move:** Sanalife, Vutility or Energy Toolbase could ship a light software-only tier. Nothing stops them but margin preference. The defensibility score already reflects this.
4. **The fix can be free — and then they leave.** Some customers will get their stagger plan, fix the peak, and churn. Retention depends on ongoing alerting genuinely mattering (new equipment, seasonal ramps, staff changes), not on the one-time insight. If churn after the first fix is brutal, this is an audit business, not a SaaS business — a real possibility worth watching.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder comfortable with API integrations who will
                        personally work an energy-broker channel by phone
Time to revenue:        4–8 weeks (paid ratchet audits precede the subscription)
Capital to launch:      $10–15K (data access, inference, incorporation)
Top 3 assumptions to validate first:
  1. Small operators pay for visibility without hardware — sell 15 paid $399 audits first
  2. Ratchet floors are actually active on a third or more of small accounts — run 30 real datasets
  3. Brokers will co-sell — 10 conversations, look for handover of 20 accounts to audit
Kill criteria:
  - Abandon if fewer than 5 of 40 qualified outreach targets will pay $399 for an audit
  - Abandon if pilot sites show under 10% real billed-demand reduction over 90 days
  - Abandon if Green Button authorization completion falls below 40% for non-technical owners
  - Abandon if post-fix churn exceeds 50% in the first 6 months — that's a service, not SaaS
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the tariff rule sheet by hand for three schedules in one territory (start ERCOT — mandatory demand charges above 10 kW, common ratchets). No code. Confirm from published tariff documents exactly what the ratchet percentage and lookback are. If the terms turn out to be rare or toothless in that territory, the premise is wrong on day two — which is the point of doing this first.
- **Day 3–4:** Get 5 real bills and 12 months of interval data from friendly local businesses (machine shops, bakeries — offer the analysis free in exchange for the data). Compute by hand: which 15-minute window set each peak, is a ratchet floor active, what would staggering have saved. This tests assumption 2 with real data, not estimates.
- **Day 5:** Call 40 shops in the same territory with a specific, concrete offer: $399 for a ratchet audit delivered in 5 days. Take payment, not interest.

**Falsifiable outcome:** ≥5 of 40 pay $399 upfront, *and* ≥2 of the 5 hand-analyzed accounts show an active ratchet floor costing over $200/month. Both conditions must hold. Verbal enthusiasm, free-audit signups, and "send me info" count as failures — the whole reason this idea needs validating is that the demand evidence at the small end is inferred rather than observed.
