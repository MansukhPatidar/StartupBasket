---
title: "SunVerdict — payback estimator for solar-storage sellers"
slug: balcony-solar-storage-payback
date: 2026-06-22
category: CleanTech / Germany + EU SMB Solar Retailers
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Sizes the battery and proves the euro payback before a balcony-solar shop promises savings it can't back up."
tags:
  vertical: CleanTech
  model: SaaS
  geography: EU
  secondary: [SMB, Compliance-driven, AI-agent, Multilingual, Solar]
axes:
  problem: 16
  demand: 12
  build: 12
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# SunVerdict — payback estimator for balcony-solar storage sellers

## 1. One-liner

Sizes the battery and proves the euro payback before a balcony-solar shop promises savings it can't back up.

## 2. Trend signal — why now?

Germany crossed **1 million registered balcony solar systems** in mid-2025 — double the year before — and the plug-in PV trade association estimates **4–5 million units already running across Europe, 1.5–4M in Germany alone** once you count the unregistered ones. The thing that changed in the last 18 months: **batteries.** The share of balcony systems sold *with* storage jumped from ~20% in 2023 to ~40% in 2025 as per-kWh storage cost fell from €1,000 to €300–400.

That's exactly where the trouble starts. Storage flips a clean 3–5-year payback into a "speculative" 5–8.5-year one that depends entirely on the buyer's consumption pattern, panel orientation, and tariff. The German press and forums are full of it: a NotebookCheck-summarized study concludes storage "only pays off under favorable conditions"; a Finanztip/ComputerBase forum thread math-checks a €500–600 battery saving only "150–200 kWh ≈ €60/year → 8.5 years to recoup." Installers, per a Reslink EPC guide, "size the battery on generic rules of thumb rather than the client's actual consumption pattern," guaranteeing a chunk of mismatched-expectation sales.

Meanwhile the inputs to do this *properly* all went free or cheap in the last year: EPEX SPOT moved to **15-minute pricing (Oct 2025)**, **aWATTar's market-data API is free with no auth**, **Tibber's developer API now exposes quarter-hourly prices**, and the brand inverter/battery clouds (Deye, Hoymiles, Marstek, Anker) expose generation/SoC data post-install. The data to prove payback exists; nobody has packaged it for the people doing the selling.

Provenance:
  - Signal 1 (demand): Storage payback "speculative / only pays under favorable conditions"; forum math shows €60/yr → 8.5yr recoup; installers size batteries on "generic rules of thumb." — https://www.notebookcheck.net/Study-Balcony-solar-systems-almost-always-pay-off-but-storage-is-more-complicated.1261338.0.html / https://www.finanztip.de/community/forum/thema/45087-eure-erfahrungen-mit-balkonkraftwerken/ / https://www.reslink.org/blogs/germany-solar-battery-storage-2026-epc-guide/ — 2026-06-22
  - Signal 2 (feasibility): EPEX SPOT 15-min pricing since Oct 2025; aWATTar API free/no-auth; Tibber dev API quarter-hourly; brand clouds expose actuals. — https://developer.tibber.com/docs / https://www.epexspot.com/en/dynamic-pricing-license-electricity-retailers — 2026-06-22
  - Signal 3 (economic): Balcony-solar storage market 17.2% CAGR → ~$10B by 2031; ~40% of 2025 sales include storage; ~€620/yr arbitrage value per 10kWh on dynamic tariff. — https://reports.valuates.com/market-reports/QYRE-Auto-1M17875/global-balcony-solar-energy-storage-system / https://www.deyestore.com/blogs/deye-smart-ct-unlock-the-new-solar-storage-system/can-dynamic-electricity-tariffs-and-a-home-battery-really-cut-your-energy-bill-in-2026 — 2026-06-22
  Category: Tech-unlock

## 3. The opportunity

Balcony-solar storage is being sold on a payback promise the seller can't substantiate. The existing tooling is split into two useless halves:

- **Consumer ROI calculators** (VoltFlow, balconysolar.energy, the Anker/Deye marketing widgets) take three inputs — panel watts, sun hours, tariff — and spit out a flattering number that ignores shading, orientation (vertical railing mounting loses 15–25%; E/W loses 20–30%), the household's actual load curve, and whether storage even helps. They exist to close a sale, not to be right.
- **Pro solar-design suites** (PV*SOL, Reonic, OpusFlow, autarc, SurgePV) are built for rooftop EPCs doing full €10–25k installs with MaStR/KfW/EEG paperwork. They're overkill, over-priced (€100–300+/mo, per-seat ERP), and none of them model a plug-in 800W + small-battery system against a *dynamic tariff* the way the balcony segment now needs.

The gap: a fast, dishonest-by-omission-proof tool that takes the buyer's real consumption profile + address (for irradiance/shading) + tariff (flat or dynamic via the live EPEX/Tibber/aWATTar feed) and produces a **defensible, branded payback report** the shop hands the customer — *and* a recommended battery size so the seller stops guessing. Post-install, it ingests the brand cloud's actuals and shows promised-vs-delivered, which kills the dispute before it becomes a return.

The disruption isn't "a better calculator." It's moving the calculator from a sales-conversion toy to a **liability shield + sizing brain** for the seller. A focused team beats PV*SOL here because PV*SOL will never bother with €600 sales, and beats the consumer widgets because those are owned by hardware brands who *want* the optimistic number.

## 4. Target market

- **Primary customer:** Small balcony-solar retailers and Fachbetriebe in Germany (then AT/NL/PL) — online shops (priwatt, Solakon-tier) and 1–10-person installer/electrician outfits that sell plug-in PV + storage. Not rooftop EPCs.
- **Why they buy (their words):** "Customers come back angry that the savings are lower than I told them"; "I'm sizing batteries on a rule of thumb and it bites me"; "the manufacturer calculator makes me look like a liar when reality undershoots." A payback report they can stand behind reduces returns, chargebacks, and bad reviews — and closes more deals because a credible number sells better than a suspiciously round one.
- **Rough TAM reasoning:** BSW represents 1,000+ German solar companies; the plug-in segment specifically has spawned hundreds of dedicated online shops and thousands of small electrician outfits now attaching storage. Call it **3,000–6,000 sellers in DACH**, more across the EU as EPBD transposition (deadline 29 May 2026) pushes plug-in PV in NL/PL/ES. Even 1,500 paying €79/mo is ~€1.4M ARR.
- **Why now for them:** Storage attach rate doubled to 40% in two years, dynamic tariffs (Tibber 1M+ users) made payback math genuinely harder, and the first wave of "it didn't pay off" complaints is landing in their inboxes and Trustpilot pages right now.

## 5. Product sketch (MVP)

- **3-minute payback report:** enter address, panel/inverter/battery spec, and a rough consumption profile (or upload a utility CSV / pick an archetype) → branded PDF with honest year-by-year payback, self-consumption %, and a confidence range.
- **Battery sizing recommendation:** "for this load curve, 2kWh pays back in 6.1y, 5kWh in 9.4y — don't oversell the 5." Stops rule-of-thumb mistakes.
- **Dynamic-tariff mode:** pull live EPEX/Tibber/aWATTar prices and model charge/discharge arbitrage value on top of self-consumption — the differentiator no consumer calculator does.
- **Shading & orientation haircut:** address-based irradiance + a guided "vertical railing / E-facing / partial shade" picker that applies the real 15–30% losses instead of hiding them.
- **Promised-vs-delivered tracking:** connect the buyer's Deye/Hoymiles/Marstek cloud after install; auto-flag if reality drifts >X% from the promise so the shop fixes it before the customer rages.
- **White-label embed:** the calculator as a widget on the shop's product page that captures the lead and pre-fills the report.
- **Multilingual:** DE first, then NL/PL/EN.

## 6. AI angle — what's load-bearing

Two places AI does real work, not decoration:

1. **Consumption-profile inference.** Most balcony buyers have no idea what their hourly load looks like and won't upload a clean CSV. AI takes sparse inputs (household size, home-office yes/no, EV/heat-pump, a photo of a monthly bill) and infers a plausible 15-minute load curve — the single biggest driver of whether storage pays. Without this the report is garbage-in-garbage-out, which is exactly why the incumbent calculators are wrong.
2. **Plain-language report generation + dispute triage.** Turning a simulation into a customer-readable, jurisdiction-aware narrative ("here's why 2kWh not 5kWh," "here's the realistic range") in DE/NL/PL, and post-install, explaining *why* delivered undershot promised (shading? tariff moved? undersized?) so the seller has an answer.

Remove the AI and you're back to a dumb three-field calculator — which already exists and is the problem. The load-curve inference is the moat-y part.

## 7. Localization angle

This is localization-as-the-whole-game. The product is worthless without country-specific irradiance, the local dynamic-tariff feeds (EPEX/Tibber/aWATTar for DE/AT, ENTSO-E elsewhere), local flat-tariff norms (~€0.28–0.40/kWh DE), MaStR registration context, and German/Dutch/Polish report language. A generic global ROI calculator is precisely the incumbent we're beating. €79/mo works for a German micro-retailer; the play expands country-by-country as EPBD transposition pushes plug-in PV across the EU.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €49/mo solo (capped reports), €99/mo shop (unlimited reports + white-label widget + sizing), €199/mo multi-location. Usage-light, seat-light — these are tiny businesses.
- **ACV:** ~€1,000–1,200 blended.
- **Math to €1M ARR:** ~900 shops × €95/mo × 12 ≈ €1.03M. Against a 3,000–6,000 seller DACH base, that's 15–30% penetration of one region — achievable.
- **Math to €5M ARR:** ~3,500 sellers across DACH+NL+PL+ES, or layer a per-report transaction tier and a hardware-brand co-marketing/referral revenue line (brands want credible payback numbers attached to their batteries — but we stay brand-neutral to keep trust).
- **Expansion path:** seats → unlimited white-label → post-install monitoring add-on (recurring per active system) → lead-gen marketplace where the embedded calculators feed qualified buyers back to shops.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the sellers, hit them direct.** The German plug-in PV shops and storage-attaching electricians are enumerable: marketplace seller lists, the Bundesverband Steckersolar member directory, Google Maps "Balkonkraftwerk + Speicher" by city, and the comment sections of the big DE solar forums (Finanztip, ComputerBase, PV-Forum). Build a list of ~1,500, send a personalized email with a *pre-generated payback report for a system they actually sell* showing how the honest number differs from their current widget. Expect 4–6% to book a demo.
- **Ride the complaint threads.** Reply (founder, not bot) to "Speicher lohnt sich nicht" forum/Reddit threads with a genuinely useful honest calc — converts both the angry buyer's seller and lurking sellers.
- **Intersolar Europe + regional installer trade days.** The segment physically gathers there; one booth/sidebar demo of "size it right, prove it, defend it" lands a dozen shops at once.
- **Hardware-brand back door.** Deye/Hoymiles/Anker distributors want their resellers to stop overselling and getting returns — co-market the tool to their German reseller networks (we stay neutral on brand choice).

## 10. Build complexity — justification

Medium. The web app, report generator, and tariff-API integrations (aWATTar free, Tibber, EPEX, ENTSO-E) are off-the-shelf. The two non-trivial pieces are (a) a credible irradiance+shading+self-consumption simulation engine — buildable on open PV models (PVGIS data, pvlib-style methods) without a research breakthrough — and (b) the brand-cloud connectors for post-install actuals, which are fiddly but documented. AI load-curve inference is an API + prompt + a modest validation dataset. A 2–3 person team ships a credible v1 in 3–4 months; the report quality is the work, not the plumbing.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Decision-support tool; no regulated advice, no approval needed. |
| Ethical — no harm / dark patterns | ✅ | The entire pitch is *anti* dark-pattern — honest numbers vs. inflated ones. |
| Market exists (evidence above) | ✅ | 1.5–4M DE systems, 40% storage attach, documented payback disputes. |
| 1–5 person team can build this | ✅ | 2–3 people, 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | APIs are free/cheap; cost is dev time. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money + reputation pain for sellers (returns, bad reviews), felt on every storage sale. Not daily-hair-on-fire, but recurring and costly. |
| Demand evidence | 15 | 12/15 | Strong demand signals (forum disputes, "speculative payback" press, rule-of-thumb sizing) but the *seller's* willingness-to-pay for this specific tool is inferred, not yet observed. |
| Build feasibility | 15 | 12/15 | Mostly off-the-shelf; the simulation engine + brand connectors are the honest 3–4-month work. |
| Distribution clarity | 15 | 11/15 | Sellers are enumerable and reachable direct; conversion math is plausible but unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing fits micro-wallets, path to €1M is 15–30% of one region; €5M needs multi-country + add-ons. |
| Time to first revenue | 10 | 8/10 | Direct outbound to an enumerable list + a tool that closes their sales = paid pilots within 6–8 weeks. |
| Defensibility | 10 | 6/10 | Load-curve inference + accumulating promised-vs-delivered data + neutral-broker trust compound; but a determined incumbent (autarc/Reonic) could add a balcony module. Speed + niche focus is the moat. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (PV simulation + integrations) · `domain-expertise-required` (German solar/tariff/storage economics — get a solar-savvy co-founder or advisor).

### Key assumptions to validate (3–5)

1. **Assumption:** Balcony-solar sellers will pay €79–99/mo for a payback/sizing tool to reduce returns and close more deals. **How to test:** 30 direct seller interviews + a pre-sell of paid pilots at €49/mo before building the full engine.
2. **Assumption:** An honest, consumption-aware payback number *increases* conversion (sellers don't just want the inflated number). **How to test:** A/B the SunVerdict report vs. the shop's current widget on real product pages of 3–5 pilot shops; measure close rate.
3. **Assumption:** AI load-curve inference from sparse inputs is accurate enough that delivered tracks promised within tolerance. **How to test:** Backtest inferred curves against 50 real smart-meter datasets; require median error under target before launch.
4. **Assumption:** Brand-cloud connectors (Deye/Hoymiles/Marstek) are stable enough to power post-install tracking. **How to test:** Build two connectors first; monitor uptime/data quality for a month.

### Risk flags

1. **Platform dependency:** Tariff feeds (Tibber/aWATTar) and brand clouds can change/restrict APIs. Mitigate by leaning on the free/open feeds (aWATTar, ENTSO-E, EPEX) and treating brand connectors as a nice-to-have, not core.
2. **Incumbent encroachment:** autarc/Reonic/OpusFlow could ship a lightweight balcony module. The defense is being the *neutral, seller-defense-first* tool the brands and EPC-suites won't be — and owning the niche before they care.
3. **Market timing / policy:** If a government subsidy or a brand bundles "guaranteed sizing" for free, the standalone value erodes. Watch DE storage-subsidy moves and brand calculator quality.
4. **Thin per-customer revenue:** These are micro-businesses; churn and price sensitivity are real. Needs volume + low-touch onboarding to work.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + German solar/storage domain advisor
Time to revenue:        6–8 weeks to first paid pilots
Capital to launch:      €15–40K (mostly 3–4 months of build time)
Top 3 assumptions to validate first:
  1. Sellers pay €79–99/mo to cut returns & close deals — 30 interviews + paid-pilot pre-sell
  2. Honest payback report raises conversion vs. inflated widget — A/B on 3–5 pilot shops' product pages
  3. AI load-curve inference is accurate within tolerance — backtest vs. 50 real smart-meter datasets
Kill criteria:
  - Abandon if <10% of 50 cold-contacted sellers show concrete interest (book a demo)
  - Abandon if the A/B shows the honest report does NOT beat the inflated widget on close rate
  - Abandon if a hardware brand or PV*SOL/autarc ships an equivalent free balcony payback+sizing tool before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the seller list — scrape Bundesverband Steckersolar directory, Google Maps "Balkonkraftwerk Speicher" across 10 DE cities, marketplace seller lists → ~300 named shops with email.
- **Day 3–4:** Hand-build 5 *real* payback reports for systems specific shops actually sell (using open PV models + live aWATTar prices), showing honest vs. their current widget number. Send personalized to 80 sellers + DM 10 forum complainants' sellers.
- **Day 5:** Decide. **Go if** ≥8 sellers reply with interest and ≥3 agree to a paid pilot at €49/mo; **no-go if** replies are polite-indifferent (<10%) — meaning sellers prefer the inflated number to the honest one, which would be fatal.

Falsifiable outcome: paid-pilot commitments, not "they liked it."
