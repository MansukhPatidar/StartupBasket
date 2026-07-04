---
title: "PetroTally — diesel-spend ledger for Nigerian SME generator owners"
slug: nigeria-generator-fuel-ledger
date: 2026-07-04
category: CleanTech / Nigeria SME Generator Owners (diesel-spend reconciliation)
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Snap the diesel receipt, log the runtime on WhatsApp — PetroTally flags the litres that never made it into your tank."
tags:
  vertical: CleanTech
  model: SaaS
  geography: Global
  secondary: [WhatsApp-first, Nigeria, Africa, Multilingual, AI-agent, SMB, Fraud-detection]
axes:
  problem: 16
  demand: 11
  build: 12
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [operations-heavy, sales-heavy]
featured: false
---

# PetroTally — diesel-spend ledger for Nigerian SME generator owners

## 1. One-liner

Snap the diesel receipt, log the runtime on WhatsApp — PetroTally flags the litres that never made it into your tank.

## 2. Trend signal — why now?

Diesel is the single largest line item in the Nigerian SME operating budget and nobody is watching it properly. Fuel is 70–80% of a Nigerian generator owner's operating expense; a modest 5-litre/hour genset running 10 hours a day burns roughly ₦1.875M of diesel a year at 2026 prices (~₦1,250/litre). One published cost analysis puts fuelling at **86% of total generator cost of ownership**. A Lagos petrol-station operator quoted a 45kW set "eating ₦180,000 in diesel every week." Since the 2023 subsidy removal, diesel prices roughly tripled and the pain went from annoying to existential — margins that survived cheap fuel don't survive expensive fuel plus leakage.

And leakage is endemic. The documented pattern isn't just siphoning from the tank — it's collusion at the point of purchase: "the fuel supplier connives with admin staff or security to supply less than the agreed amount and the price differential is shared amongst the fraudsters." Owners know it's happening — they just can't prove which purchase was short, because their record is a paper logbook and a stack of hand-scrawled fuel "receipts" from an informal supplier.

The tools that exist to fight this are all **hardware**: tank-probe sensors and fuel flow-meters from telematics firms (360 AutoSecure, CarTracker, Landmark FuelSecure, GlobalTrack) sold to fleets, telecom tower operators and construction sites. They cost real money per genset to install, and a tank probe catches siphoning *after* delivery — it does nothing about being short-changed *at* the pump. No software-only, WhatsApp-first tool exists that a pharmacy, a 20-room guesthouse, a small clinic or a two-machine workshop can adopt in an afternoon with zero hardware.

Provenance:
  - Signal 1 (demand): Fuel = 70–80% of Nigerian generator operating expense; ~₦1.875M/yr for a small genset; fuelling = 86% of total cost; "eating ₦180,000/week" real quote — https://titaniumpowersolutions.com/reduce-generator-fuel-consumption/ , https://kpakpakpa.com/diesel-generator-cost-business-nigeria/ — 2026-07-04
  - Signal 2 (feasibility): Cheap multimodal AI reads photographed receipts/logbooks; WhatsApp is Nigeria's default business channel; incumbents already offer WhatsApp support but only as a sales line for hardware — https://www.techcityng.com/do-not-be-a-victim-of-fuel-fraud/ , https://autosecure.ng/2025/07/22/fuel-monitoring-solution-in-nigeria-360-autosecure/ — 2026-07-04
  - Signal 3 (economic): Africa/Nigeria diesel genset market large and growing; fuel-monitoring hardware is a live paid category (multiple funded telematics vendors) proving willingness to pay to stop diesel loss — https://www.mordorintelligence.com/industry-reports/africa-diesel-generator-market , https://cartracker.com.ng/fuel-monitoring/ — 2026-07-04
  Category: Geographic arbitrage

## 3. The opportunity

The fuel-monitoring incumbents made a bet: to trust a number, you must measure it with a sensor. That's true for a 500-truck fleet. It's the wrong bet for the millions of SMEs running one or two sub-75kVA gensets, because the sensor's install cost and per-asset economics price them out — and the sensor still misses the most common fraud, short-delivery at purchase.

PetroTally exploits the gap with a different premise: you don't need a probe to catch a lie, you need two independent records that should agree and don't. Diesel *bought* (from the receipt photo) should roughly equal diesel *burned* (from logged runtime × the genset's known litres/hour) plus the change in tank level. When purchased litres consistently exceed burn-implied litres, someone is either over-invoicing, under-delivering, or siphoning — and PetroTally shows the owner exactly which supplier, which week, and how many naira. It also cross-checks the price paid against the crowdsourced local diesel price so the owner sees when they're being charged ₦1,400 in a ₦1,250 market.

It's not a dashboard with a chatbot. It's a reconciliation engine that turns a shoebox of receipts and a paper logbook into a defensible number the owner can wave in a supplier's face — over WhatsApp, with no hardware, at a price a corner business pays without a second thought.

## 4. Target market

- **Primary customer:** Owner-managers of Nigerian SMEs that run one to four diesel gensets (10–75 kVA) as primary or heavy backup power — pharmacies, private clinics, guesthouses/small hotels, cold-storage shops, event centres, small manufacturers, filling stations, printing shops. Typically ₦5M–₦150M annual turnover, 3–40 staff, in Lagos, Abuja, Port Harcourt, Ibadan, Kano.
- **Why they buy:** "Diesel is bleeding me and I can't tell how much is real consumption versus my staff and my supplier robbing me." They already suspect theft; what they lack is proof and a habit for catching it. A tool that pays for itself the first month it catches one short-delivery is an easy yes.
- **Rough TAM reasoning:** Nigeria has millions of generator-dependent businesses; even a conservative slice — say 300,000–500,000 SMEs with meaningful monthly diesel spend and a smartphone-using owner — is a large enough pool that capturing 3,000–8,000 paying accounts is a healthy business. Extends naturally to Ghana, Kenya, Uganda, Pakistan, Lebanon — anywhere grid failure makes gensets a way of life.
- **Why now for them:** Post-subsidy diesel prices turned a tolerable cost into the thing that decides whether the business is profitable this month. The margin for "I'll just eat the leakage" is gone.

## 5. Product sketch (MVP)

- **WhatsApp receipt capture:** owner or manager forwards a photo of the fuel receipt/delivery note; AI extracts date, supplier, litres, price/litre, total — no typing.
- **Runtime log:** a two-tap daily "genset ran X hours" message (or a start/stop ping); PetroTally knows each genset's litres/hour benchmark from its make/model and load.
- **Reconciliation alert:** weekly "You bought 620 L, your runtime implies ~540 L burned, tank up ~10 L — ~70 L (₦87,500) unaccounted. Supplier: Musa Diesel. This is the 3rd short week." delivered as a plain WhatsApp message.
- **Price watch:** flags when price/litre paid exceeds the local crowdsourced market rate; shows the naira overpay.
- **Supplier scorecard:** ranks your diesel suppliers by average shortfall and overprice so you know who to drop.
- **Monthly fuel P&L:** clean statement of litres bought, burned, cost/kWh, and estimated leakage recovered — the artefact the owner shows their spouse/partner/board.
- **Multi-site roll-up:** owners with several outlets see all gensets in one weekly summary.

## 6. AI angle — what's load-bearing

Two places. First, **document understanding**: Nigerian diesel receipts are informal — handwritten dockets, faded thermal slips, WhatsApp-photographed at an angle in bad light. Robust multimodal extraction of litres/price/supplier from that mess is the whole on-ramp; if the owner has to type, they won't. Second, **the reconciliation judgment**: turning noisy runtime logs, model-based consumption benchmarks, load estimates and tank-level guesses into a confident "this shortfall is real, this one is noise" call, phrased in language a non-technical owner trusts. Remove the AI and you're back to a spreadsheet the owner will never keep — the product's entire reason to exist is that it does the reading and the maths so the owner only has to snap a photo. The AI isn't decoration; it's the reason a busy shop owner sticks with it past week two.

## 7. Localization angle (if any)

This *is* the localization play. WhatsApp-native because that's where Nigerian SME business runs. Informal-receipt OCR tuned for handwritten dockets and thermal slips, not clean PDF invoices. Naira pricing (₦2,000–6,000/mo tiers that make sense against a ₦150K+/mo diesel bill where a $49 tool is absurd). Crowdsourced local diesel price feeds by city. Pidgin/Hausa/Yoruba prompts and summaries. Payment via local rails (Paystack/Flutterwave, transfer, USSD) — not a US card form. A generic global "fleet fuel card + telematics" product cannot serve this buyer; the whole value is in fitting the informal, cash-and-WhatsApp reality of a Lagos SME.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₦3,000/mo (~$2) single-genset Starter; ₦8,000/mo (~$5) multi-genset/multi-site Pro; ₦20,000/mo (~$13) small-fleet tier with supplier scorecards and monthly P&L export. Annual prepay discount (cash upfront matters in this market).
- **ACV:** ~$60–150/yr blended; small-fleet accounts $150–350/yr.
- **Rough math to $1M ARR:** ~10,000 accounts at a $100 blended ACV = $1M ARR. Given a pool of hundreds of thousands of genset-heavy SMEs and a tool that self-justifies the first time it catches a short-delivery, 10K accounts is aggressive but not fantasy.
- **Rough math to $5M ARR:** needs either ~40K accounts across Nigeria + Ghana + Kenya, or a shift up-market to chains/franchises (pharmacy chains, QSR groups, telecom-tower managers) at $1,000–4,000/yr for the multi-site roll-up. Realistically $5M comes from the up-market roll-up plus a second country, not from single-shop accounts alone.
- **Expansion path:** genset count → sites → adjacent spend (generator servicing schedule, parts, diesel group-buy where PetroTally negotiates a verified-honest supplier for its base and takes a spread). The diesel group-buy is where ACV and defensibility both jump.

## 9. Go-to-market wedge — first 100 customers

- **Diesel-supplier and genset-service technician referral:** every SME's genset is serviced by a technician who visits monthly and is trusted. Recruit 15–20 of these technicians in Lagos/Ibadan as paid referrers (₦2,000 per activated account); they onboard the owner on the spot by photographing the last receipt. This is the fastest path — the technician already has the relationship and access to the logbook.
- **WhatsApp Business group and estate/market association seeding:** post a "how much is your generator really costing you — free 2-week reconciliation" offer into trade-association and market-cluster WhatsApp groups (pharmacy associations, hotel/guesthouse owner groups, printers' clusters). One caught short-delivery becomes a testimonial that spreads inside the group.
- **"Caught leak" case-study content on Nairaland / X / local business YouTube:** publish real (anonymised) reconciliations — "This guesthouse in Surulere was losing ₦140K/month to a colluding supplier; here's the proof PetroTally found." This community loves a fraud-exposed story and it converts because every owner suspects the same thing.
- **Cold WhatsApp to filling-station and cold-storage owners** (public directories, GMB listings) with a personalised "send me last month's diesel receipts and I'll tell you what you lost, free" hook — the free reconciliation is the demo.

## 10. Build complexity — justification

Medium. Off-the-shelf: multimodal receipt OCR, WhatsApp Business API, standard web backend, local payment SDK. Custom work: a reliable genset consumption-benchmark library (litres/hour by make/model/load), a reconciliation engine that stays sane under noisy logs and missing tank readings, and OCR robustness on informal handwritten dockets — that's where the weeks go. A small team ships a credible v1 in ~12–16 weeks; the moat-building consumption library and supplier data accrue after launch.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Bookkeeping/reconciliation tool; no regulated activity. |
| Ethical — no harm / dark patterns | ✅ | Helps owners recover losses; flags theft with evidence, doesn't accuse blindly. |
| Market exists (evidence above) | ✅ | Fuel = majority of opex; live paid hardware-monitoring market proves WTP. |
| 1–5 person team can build this | ✅ | Off-the-shelf AI + WhatsApp + payments; custom reconciliation engine only. |
| Launchable with <$50K / ₦40L | ✅ | No hardware, no inventory; software + field-referral spend. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Fuel is the biggest opex line and leakage is endemic and known. Just short of hair-on-fire because owners have tolerated it for years — the habit-forming behaviour change (log runtime daily) is the friction. |
| Demand evidence | 15 | 11/15 | Strong indirect signal: huge fuel spend, documented collusion pattern, multiple funded hardware-monitoring vendors. Weaker on *direct* "I'd pay for a software-only version" quotes — mostly inferred. |
| Build feasibility | 15 | 12/15 | Mostly off-the-shelf; the consumption-benchmark library and informal-receipt OCR are the real work. ~12–16 weeks. |
| Distribution clarity | 15 | 11/15 | Technician-referral and WhatsApp-group seeding are concrete and cheap; conversion math is estimated, not proven. |
| Revenue mechanics | 15 | 11/15 | Pricing fits the wallet and self-justifies, but low ACV means $1M ARR needs ~10K accounts — volume-dependent. Up-market roll-up rescues $5M. |
| Time to first revenue | 10 | 8/10 | The free-reconciliation demo converts fast; owners can pay within weeks of a caught leak. |
| Defensibility | 10 | 4/10 | Copyable on the surface. Real moat only accrues later via the consumption-benchmark data, supplier-honesty scorecards and diesel group-buy relationships. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`operations-heavy` · `sales-heavy` — this lives or dies on field distribution (technician network, market-association seeding) and on-the-ground trust, not on engineering cleverness. A Nigeria-based operator with genset-service or SME-sales relationships massively de-risks it.

### Key assumptions to validate (3–5)

1. **Assumption:** Owners will log runtime daily/reliably enough for reconciliation to work. **How to test:** run 20 SMEs manually for 3 weeks; measure logging compliance without nagging. If <60% log 5+ days/week, the reconciliation is unreliable and the model breaks.
2. **Assumption:** Runtime × model-benchmark consumption is accurate enough to make shortfall calls owners trust. **How to test:** for 10 gensets, compare benchmark-implied burn against a physically dipped tank over a month; measure error band.
3. **Assumption:** Catching one leak converts a free trial to paid. **How to test:** run 30 free reconciliations; track how many that surface a real shortfall convert to a paid plan within 30 days.
4. **Assumption:** Technicians will refer for ₦2,000/account. **How to test:** sign 5 technicians, measure activated accounts per technician per month.

### Risk flags

1. **Market timing / adjacency:** Nigeria is pushing solar+storage hard and filling stations are "ditching diesel." Long-term, gensets decline — but the transition is a decade-plus and the diesel-pain window is wide open now. Build for today's fleet, keep an eye on a "solar+battery spend tracker" pivot.
2. **Behaviour-change dependency:** the whole model needs the owner/manager to keep logging runtime. If that habit doesn't stick, reconciliation degrades. Mitigate with dead-simple two-tap logging and a hardware-lite runtime pinger later.
3. **Low ACV / volume dependency:** single-shop economics require thousands of accounts for a real business. If technician-referral CAC doesn't stay cheap, the math strains — the up-market roll-up is the release valve.
4. **Data-quality moat is slow:** at month 3 this is copyable. The defensible consumption library and supplier scorecards take a year of accounts to accrue.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Nigeria-based operator with genset-service, diesel-supply, or SME-field-sales relationships, plus one technical builder
Time to revenue:        6–10 weeks (free reconciliation → paid after first caught leak)
Capital to launch:      ₦6–12 lakh equiv. ($4–8K) — software + field-referral spend
Top 3 assumptions to validate first:
  1. Runtime-logging compliance stays >60%/week without nagging — 20-SME 3-week manual pilot
  2. Benchmark-implied burn matches dipped-tank reality within a tight band — 10-genset month of physical dips
  3. A caught leak converts free→paid within 30 days — 30 free reconciliations, measure conversion
Kill criteria:
  - Abandon if <60% of pilot SMEs log runtime 5+ days/week (reconciliation unusable)
  - Abandon if benchmark-vs-dipped-tank error exceeds the typical theft signal (can't distinguish fraud from noise)
  - Abandon if <15% of free reconciliations that surface a real shortfall convert to paid in 30 days
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 15–20 genset-owning SMEs in Lagos/Ibadan (via 2–3 service technicians). Collect last month's diesel receipts and any logbook by WhatsApp photo.
- **Day 3–4:** Hand-reconcile each: extract purchased litres, estimate burn from runtime × model benchmark, compute shortfall and overprice. Do it manually — no product yet.
- **Day 5:** Present each owner their reconciliation. **Go/no-go on:** how many (a) had a real, credible shortfall surfaced, and (b) said "yes, I'll pay ₦3,000/mo to keep catching this" and put down the first month. Target ≥6 of ~18 committing money. Fewer than that and either the leakage isn't as catchable-by-software as assumed, or the willingness-to-pay isn't there — falsifiable either way.
