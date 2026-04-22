---
title: "TariffPilot — AI landed-cost copilot for small US importers"
slug: tariff-pilot-smb-importer
date: 2026-04-22
category: TradeTech SaaS / US SMB
complexity: Medium
score: 79
verdict: GO
confidence: High
oneLiner: "AI copilot that gives small US importers accurate landed costs and sourcing scenarios as tariffs shift weekly."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Compliance-driven, Solo-builder]
founderFit: [technical-heavy]
featured: false
---

# TariffPilot

## 1. One-liner

AI copilot that gives small US importers accurate landed costs and sourcing scenarios as tariffs shift weekly.

## 2. Trend signal — why now?

The US tariff regime went from stable background noise to weekly chaos in 2025. Three things happened simultaneously:

- **De minimis exemption killed (Aug 2025).** The $800 duty-free threshold for all imports is gone. Every shipment — even a $15 phone case — now faces formal customs entry, duties, and broker fees. Overnight, hundreds of thousands of micro-importers who never dealt with tariffs became tariff-paying businesses.
- **Tariff stacking hit triple digits.** Chinese imports now face cumulative rates north of 100% in many categories (base 10% + Section 301 + reciprocal + fentanyl surcharge). Rates change monthly. Free calculators routinely miss one or more layers, producing 15–30% underestimates on actual landed cost.
- **97% of US importers are SMBs, and they're drowning.** According to US Census Bureau data, SMBs comprise 96–97% of importers by count. The average small-business importer paid roughly $306,000 more in tariffs over the last 12 months. 85% of small-business owners say they're worried about tariff impact. One Amazon seller reported a 28% month-over-month revenue drop after de minimis ended.

The enterprise tools exist (Avalara, Coupa, Kinaxis) but cost $50K+/year and require integration teams. Free calculators (Flexport, PaidNice, TariffsTool) are static one-shot tools that miss fee layers and don't track your SKUs over time. ImportSignal does nightly HTS alerts but doesn't model landed cost or sourcing alternatives. Nobody is serving the $100K–$5M importer with ongoing, SKU-level tariff intelligence at a price they can stomach.

Provenance:
  - Signal 1: De minimis exemption eliminated Aug 2025, all imports now face formal entry and duties — [Stickiply US Tariff Reset 2026](https://stickiply.com/blogs/small-business-focus/us-tariff-changes-2025-de-minimis-impact) — 2025-08
  - Signal 2: 97% of US importers are SMBs, avg $306K/yr tariff increase — [FreightMango / US Census](https://www.freightmango.com/blog/us-census-bureau-uscb-data-showed-vast-majority-us-importers/) — 2025
  - Signal 3: Free tariff calculators miss 15–30% of actual landed cost (MPF, HMF, anti-dumping, brokerage) — [ClearIt USA Landed Cost Guide](https://clearitusa.com/total-landed-cost-before-importing/) — 2025
  - Signal 4: Tariff volatility unprecedented — US tariff revenue >$30B/mo vs <$10B pre-2025 — [Yale Budget Lab Tariff Tracker](https://budgetlab.yale.edu/research/tracking-economic-effects-tariffs) — 2025-2026
  - Signal 5: Scribenote/VetRec-style vertical AI agents getting a16z/YC funding — proving the "AI copilot for niche vertical" model works — 2024-2025
  Category: Regulatory arbitrage + Workflow automation

## 3. The opportunity

Small US importers are operating blind. Tariff policy changes weekly, rates stack in non-obvious ways, and the penalty for misclassification is steep (CBP fines increased 34% in FY2026). The current options are:

1. **Hire a customs broker** — $125–$300 per entry, plus ongoing classification fees. Works but expensive for small sellers doing 10–50 shipments/month.
2. **Use a free calculator** — Static, misses layers, no SKU memory, no scenario modeling.
3. **Enterprise platforms** — Avalara ($15K+/yr minimum), Zonos ($2 + 10% of duties per transaction — adds up fast), Coupa/Kinaxis ($50K+/yr).
4. **Wing it** — What most small sellers do. Pray the surprise duty bill doesn't kill the quarter.

TariffPilot fills the gap: a $99–$299/month SaaS that knows your SKUs, monitors HTS changes nightly, calculates accurate multi-layer landed costs, and models "what if I source this from Vietnam instead of China?" The AI doesn't replace a customs broker — it gives you the intelligence to decide when you actually need one.

## 4. Target market

- **Primary customer:** US-based e-commerce sellers and small DTC brands importing 10–200 SKUs, primarily from China/Southeast Asia. Revenue $100K–$5M. Typically 1–10 person operations. Sell on Amazon, Shopify, Walmart, or their own DTC site.
- **Why they buy:** Their margins are being eaten alive by tariffs they don't fully understand. They're making sourcing decisions based on gut feel because they can't model the true landed cost of switching from China to Vietnam or India. Every surprise duty bill is a cash flow crisis.
- **Rough TAM reasoning:** ~300,000 US small-business importers source primarily from China (US Census: 96–97% of importers are SMBs, ~600K total importers, ~50% touch China). At $200/mo average, 1% penetration = $7.2M ARR. Even 0.5% = $3.6M.
- **Why now for them:** De minimis death (Aug 2025) turned casual importers into customs-paperwork-filing businesses overnight. Tariff rates change monthly. The February 2026 executive order made the de minimis suspension permanent with no end date. This isn't a blip — it's the new normal.

## 5. Product sketch (MVP)

- **SKU dashboard:** Import your product catalog (CSV or Shopify/Amazon sync). Each SKU gets an HTS code, current duty rate (all layers stacked), and accurate landed cost per unit.
- **Multi-layer landed cost calculator:** Calculates base tariff + Section 301 + Section 232 + reciprocal + MPF + HMF + anti-dumping/CVD + brokerage estimate. No more "my calculator said 7% but the bill was 34%."
- **Nightly tariff watch:** Monitors Federal Register + USITC HTS schedule for changes affecting your specific HTS codes. Alerts via email/Slack when a rate changes.
- **Sourcing scenario modeler:** "What's my landed cost if I source SKU #47 from Vietnam instead of China?" Side-by-side comparison including tariff rate, shipping differential, and lead time estimate.
- **Margin impact view:** Shows how tariff changes affect your per-unit margin and total P&L. "The Feb 2026 rate change just cost you $4,200/month across your top 10 SKUs."
- **AI classification assistant:** Paste a product description, get suggested HTS codes with confidence scores and duty rate lookups. Not a replacement for a licensed broker on edge cases, but handles the 80% that are straightforward.

## 6. AI angle — what's load-bearing

AI is doing the hard work in three places:

1. **HTS classification from product descriptions.** LLMs are surprisingly good at mapping natural-language product descriptions to 10-digit HTS codes — Zonos reports 90%+ accuracy. TariffPilot uses this for initial classification and flags low-confidence cases for human review.
2. **Multi-layer tariff stacking.** The US tariff regime is now a spaghetti of overlapping programs (base MFN rate, Section 301, Section 232, reciprocal tariffs, anti-dumping duties, fentanyl surcharges). An AI agent can parse the current state nightly from official sources and compute the correct stacked rate — something free calculators consistently get wrong.
3. **Sourcing scenario generation.** Given a product category and current source country, the AI models alternative landed costs from 5–10 alternative countries, factoring in tariff differentials, estimated freight, and known manufacturing capability. This is the "strategic advisor" layer that no free calculator offers.

Remove the AI and you have a static spreadsheet. The AI makes it a living, SKU-aware intelligence layer.

## 7. Localization angle (if any)

N/A — this is a US-focused play. The tariff chaos is a US-specific regulatory event. The entire product is built around the US Harmonized Tariff Schedule and US-specific duty programs (Section 301, 232, IEEPA-based tariffs). International expansion would require rebuilding for each country's tariff regime — possible later, but the US market alone is more than large enough.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers:
  - **Starter ($99/mo):** Up to 50 SKUs, landed cost calculator, nightly tariff alerts, basic sourcing scenarios. Targets micro-importers and side-hustle sellers.
  - **Growth ($199/mo):** Up to 200 SKUs, Shopify/Amazon sync, margin impact dashboard, unlimited sourcing scenarios, Slack alerts.
  - **Pro ($299/mo):** Up to 500 SKUs, API access, team seats, priority HTS classification review, quarterly tariff briefing.
- **ACV:** ~$2,400/yr blended ($200/mo average)
- **Rough math to $1M ARR:** 417 customers × $200/mo = $1M ARR
- **Rough math to $5M ARR:** 2,083 customers × $200/mo = $5M ARR. Alternatively, introduce an Enterprise tier at $500–$1,000/mo for 100+ SKU importers and freight forwarders.
- **Expansion path:** Per-entry classification ($5/entry for one-off HTS lookups), customs broker referral fees, freight forwarder partnerships, and eventually cross-border expansion (EU CBAM, UK customs).

## 9. Go-to-market wedge — first 100 customers

1. **Amazon seller communities (Week 1–4).** The r/FulfillmentByAmazon subreddit (250K+ members), Amazon seller Facebook groups, and Seller Sessions podcast audience are ground zero for tariff pain. Offer a free "tariff health check" — upload your top 10 SKUs, get a report showing your actual stacked duty rate vs. what you think you're paying. The gap is the sales pitch.
2. **Content + SEO on tariff queries (Week 1–8).** "HTS code lookup + [product]", "landed cost calculator 2026", "China tariff rate [category]" are high-intent, growing-volume queries. Publish a superior free calculator that actually shows all layers, gated behind email capture. Convert to paid via the SKU dashboard.
3. **Freight forwarder partnerships (Week 4–8).** Small freight forwarders (Unicargo, FBA Freight, FreightFBA) serve exactly this customer base and lack tariff intelligence tools. White-label or referral partnership: they embed TariffPilot in their dashboard, we get warm leads.
4. **Shopify App Store (Week 6–12).** Tariff-related Shopify apps are thin. A "Tariff & Landed Cost" app that syncs with product catalog and shows real duty rates would get organic installs from the 2M+ Shopify merchants, many of whom import.
5. **Cold outreach to importers filing entries (Week 2–6).** US import records are public via ImportGenius/Panjiva. Filter for importers with 10–200 entries/month from China. Email: "Your last 3 shipments paid $X in duties — here's how to cut that by 15%."

## 10. Build complexity — justification

**Medium.** The core product is a web app (React + Node/Python backend) that integrates with:
- USITC HTS API (public, free) for tariff schedule data
- Federal Register API for nightly monitoring
- OpenAI/Anthropic API for HTS classification from product descriptions
- Shopify/Amazon APIs for catalog sync

The data pipeline (nightly HTS diff + Federal Register parsing + rate stacking logic) is the hardest part — not technically complex, but requires careful handling of the multi-layer tariff regime. Expect 10–12 weeks for a 2-person team to ship a credible v1 with the core calculator, alerts, and basic scenario modeling.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Tariff information is public data. Not providing customs broker services (licensed activity) — providing intelligence tools. Clear disclaimers needed. |
| Ethical — no harm / dark patterns | ✅ | Helping small businesses understand their legal duty obligations. No evasion facilitation. |
| Market exists (evidence above) | ✅ | 300K+ China-sourcing SMB importers, 85% worried about tariffs, avg $306K/yr increase. |
| 1–5 person team can build this | ✅ | 2–3 engineers, 10–12 weeks to v1. Standard web stack + AI APIs. |
| Launchable with <$50K / ₹40L | ✅ | Cloud hosting + AI API costs minimal at launch scale. Primary cost is engineering time. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire. Small importers are losing money every shipment they misestimate. De minimis death made this existential for micro-importers. $306K/yr average increase. |
| Demand evidence | 15 | 13/15 | Multiple strong signals: 85% of small biz owners worried, 28% revenue drops reported, free calculators getting massive traffic, ImportSignal and Zonos both growing. |
| Build feasibility | 15 | 12/15 | Doable in 10–12 weeks with 2 engineers. Public data sources (HTS, Federal Register). Main challenge is getting the multi-layer stacking logic right for edge cases. |
| Distribution clarity | 15 | 12/15 | Amazon seller communities are concentrated and reachable. Free calculator as lead magnet is proven. Shopify App Store is a distribution channel. Freight forwarder partnerships provide warm leads. |
| Revenue mechanics | 15 | 12/15 | $99–$299/mo is within SMB willingness-to-pay for a tool that saves $300+/shipment in surprise costs. 417 customers for $1M ARR is achievable. Retention should be strong — SKU data creates switching cost. |
| Time to first revenue | 10 | 7/10 | Revenue in 6–8 weeks post-launch. Free calculator drives traffic, tariff health check converts. No long sales cycle — self-serve with credit card. |
| Defensibility | 10 | 5/10 | Execution moat, not structural. SKU-level data accumulation creates some lock-in. But Zonos/Avalara could build down-market, and new entrants could copy. Speed and niche focus are the moat for the first 12 months. |
| **Total** | **100** | **79/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` — Requires strong engineering to build reliable tariff data pipeline and accurate multi-layer stacking logic. Trade compliance domain knowledge helps but can be acquired via customs broker advisor.

### Key assumptions to validate (3–5)

1. **Assumption:** Small importers will pay $99–$299/mo for tariff intelligence when free calculators exist. **How to test:** Launch the free "tariff health check" tool, measure how many users have >5% gap between their estimated and actual landed cost, then offer the paid SKU dashboard to those with the largest gaps.
2. **Assumption:** AI-powered HTS classification can achieve >85% accuracy on the first pass for common product categories. **How to test:** Classify 500 real products against known HTS codes, measure accuracy. If <80%, the AI classification feature isn't ready — ship without it and use manual entry.
3. **Assumption:** Amazon/Shopify sellers will connect their catalogs to a third-party tariff tool. **How to test:** Build the Shopify app, measure install-to-activation rate. If <20% of installs actually sync their catalog, the integration friction is too high.
4. **Assumption:** Tariff volatility will persist through 2026–2027, maintaining urgency. **How to test:** Monitor policy signals. If a comprehensive US-China trade deal stabilizes rates, the urgency drops — but the de minimis death is permanent, so baseline need persists.

### Risk flags

1. **[Platform dependency]:** Heavy reliance on USITC and Federal Register data feeds. If these APIs change or go down, the nightly monitoring breaks. Mitigate with scraping fallbacks and multiple data sources.
2. **[Competitive response]:** Zonos ($2 + 10% of duties per transaction) or Avalara could launch a $99/mo SMB tier. Their existing data infrastructure would give them an advantage. TariffPilot's defense is focus and speed — purpose-built for the small importer workflow, not adapted from an enterprise tool.
3. **[Regulatory]:** If tariff policy stabilizes dramatically (comprehensive trade deal, return to pre-2025 de minimis), the urgency drops. But even in a stable regime, SMB importers still need landed cost tools — the de minimis exemption is gone for good per the Feb 2026 executive order.

## 14. Structured verdict

```
Score:                  79/100
Verdict:                GO
Confidence:             High
Best-fit builder:       Technical founder with trade/logistics domain advisor
Time to revenue:        8–10 weeks
Capital to launch:      $15–25K (mostly engineering time + cloud/API costs)
Top 3 assumptions to validate first:
  1. SMB willingness-to-pay: free tariff health check → measure gap → convert to paid (target: 5% conversion)
  2. AI HTS classification accuracy: benchmark 500 products against known codes (target: >85% first-pass)
  3. Catalog sync adoption: Shopify app install-to-activation rate (target: >20%)
Kill criteria:
  - Abandon if <3% of tariff health check users convert to paid trial after 60 days
  - Abandon if HTS classification accuracy <75% after tuning — manual entry isn't a viable long-term UX
  - Abandon if US-China trade deal eliminates Section 301 tariffs AND restores de minimis — urgency collapses
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a minimal multi-layer landed cost calculator (web form: enter HTS code + value + country of origin → get stacked rate including MPF, HMF, Section 301, etc.). Deploy as a free tool. Post to r/FulfillmentByAmazon, r/ecommerce, and 3 Amazon seller Facebook groups.
- **Day 3–4:** Run the "tariff health check" — invite 50 small importers (recruited from Reddit/Facebook posts) to submit their top 5 SKUs. Calculate their actual stacked duty rate and show them the gap vs. what they thought they were paying. Collect willingness-to-pay data: "Would you pay $99/mo for a tool that tracked this for all your SKUs and alerted you to changes?"
- **Day 5:** Decide go/no-go based on: (a) >200 users of the free calculator in 5 days, (b) >40% of health check participants report a >5% gap between estimated and actual duties, (c) >30% of health check participants say they'd pay $99+/mo for ongoing monitoring.
