---
title: "SuryaCare — AI copilot for rooftop solar after-sales"
slug: suryacare-solar-om-copilot
date: 2026-04-25
category: CleanTech SaaS / India
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: "WhatsApp-first AI copilot that runs after-sales, AMC, and O&M for India's small rooftop solar installers."
tags:
  vertical: CleanTech
  model: SaaS
  geography: India
  secondary: [WhatsApp-first, AI-agent, SMB, Solar, O&M, Compliance-driven]
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# SuryaCare

## 1. One-liner

WhatsApp-first AI copilot that runs after-sales, AMC, and O&M for India's small rooftop solar installers.

## 2. Trend signal — why now?

India's rooftop solar market just had its breakout year. 7.1 GW installed in 2025 — a 122% jump over 2024 — driven by PM Surya Ghar subsidies that put panels on 3 million+ homes. The government wants 10 million by 2027. That's an avalanche of post-installation service obligations landing on a fragmented installer base that is completely unprepared for it.

Here's the ugly truth: 65%+ of small solar EPC firms in India still run their post-install operations on Excel and WhatsApp. Only 12% have a dedicated post-sale support budget. The result? Companies lose ₹5–10 lakh annually to unbilled AMC tasks, missed warranty claims, and churned customers who never renew their annual maintenance contracts. Meanwhile, dirty panels silently lose 15–30% of their output, homeowners blame the installer, and referrals — the lifeblood of the residential solar business — dry up.

The existing solar CRMs (Solar Ladder, CRMLeaf, QuickEst) all focus on the lead-to-install pipeline. Nobody owns the install-to-AMC-to-service lifecycle for the small Indian EPC. Generic AMC tools like AntMyERP exist but aren't solar-specific — they don't speak inverter data, don't know what a performance ratio is, and don't integrate with the WhatsApp-centric workflow these businesses already use.

Three things converged to make this buildable now: WhatsApp Business API is mature and affordable, inverter manufacturers (Growatt, Sungrow, Solis) expose cloud APIs for monitoring data, and LLM inference is cheap enough to power a WhatsApp-native AI agent that can triage customer complaints, generate service tickets, and send proactive maintenance alerts — all in Hindi or regional languages.

Provenance:
  - Signal 1: India installed 7.1 GW rooftop solar in 2025 (122% YoY), 3M+ homes under PM Surya Ghar — [pv-magazine-india.com](https://www.pv-magazine-india.com/2026/02/26/india-installs-7-1-gw-of-rooftop-solar-in-2025-up-122-yoy/) — 2026-02-26
  - Signal 2: 65%+ of Indian solar MSMEs use Excel/WhatsApp for project management; firms lose ₹5–10L/year to unbilled tasks — [crmleaf.app](https://www.crmleaf.app/blog/survey-to-installation-how-to-manage-solar-projects-without-the-excel-mess) — 2026
  - Signal 3: Only 12% of solar businesses have a dedicated post-sale support budget; 55% of small solar companies handle 100+ service tickets/week manually — [bodhi.solar](https://www.bodhi.solar/blog/hidden-challenges-of-solar-customer-service) — 2025
  - Signal 4: Inverter cloud APIs (Growatt, Sungrow) now accessible for third-party integration; WhatsApp Business API mature — [home-assistant.io/integrations/growatt_server](https://www.home-assistant.io/integrations/growatt_server/) — 2025
  Category: Tech-unlock + Underserved niche

## 3. The opportunity

India has thousands of small solar EPC companies — outfits with 5–30 employees doing 10–100 residential installations per month. They're brilliant at selling and installing. They're terrible at everything that comes after: warranty tracking, AMC renewals, cleaning schedules, inverter fault response, customer complaint resolution.

The incumbents don't serve them. Bodhi (just acquired by OneEthos) is US-focused and enterprise-priced. SunBase serves larger firms. AntMyERP is a generic field service tool that doesn't know a string inverter from a microinverter. The India-specific solar CRMs (Solar Ladder, CRMLeaf) stop at the installation handover — they're sales pipelines, not service platforms.

The gap: a WhatsApp-native, AI-powered O&M copilot purpose-built for the Indian small solar installer. It ingests inverter monitoring data, auto-detects underperformance, messages homeowners proactively ("Your panels produced 12% less than expected this week — likely dust buildup. Want us to schedule a cleaning?"), manages AMC contracts and renewals, creates and dispatches service tickets, and tracks warranty claims against manufacturer timelines. All through WhatsApp, because that's where these businesses already live.

## 4. Target market

- **Primary customer:** Owner/operations manager of a small solar EPC/installer firm in India, 5–30 employees, doing 10–100 residential/commercial rooftop installations per month, managing 200–2,000 active installations.
- **Why they buy:** They're drowning in post-install service requests managed via WhatsApp groups and notebooks. They miss AMC renewal dates (lost revenue), miss warranty claim windows (eat the cost), can't prove performance to unhappy customers (lost referrals), and can't scale service operations without hiring more people.
- **Rough TAM reasoning:** India has an estimated 5,000–10,000 active small-to-mid solar EPC firms (companies outside the top 10 accounted for 74% of 2025 installations per Mercom India). At ₹3,000–10,000/month, the addressable market is ₹180Cr–₹1,200Cr ($20M–$140M) annually.
- **Why now for them:** PM Surya Ghar has created a tsunami of installations. These firms went from 20 installs/month to 80+. Their Excel-and-WhatsApp systems are cracking. The ones who figure out after-sales will dominate referrals; the ones who don't will churn customers to competitors.

## 5. Product sketch (MVP)

- **WhatsApp bot for homeowners**: Customers message the installer's WhatsApp number → AI agent handles status queries, schedules cleaning visits, logs complaints, sends performance reports — all in Hindi/English/regional languages.
- **Inverter monitoring bridge**: Connects to Growatt/Sungrow/Solis cloud APIs, pulls daily generation data, auto-flags underperforming systems (>15% below expected output).
- **Proactive alerts**: Auto-messages homeowners when performance drops (likely soiling) or inverter throws a fault code. Offers to schedule service.
- **AMC contract manager**: Tracks every installation's AMC status, renewal dates, and payment history. Sends WhatsApp reminders to customers 30/15/7 days before renewal.
- **Service ticket system**: Complaints (via WhatsApp or inverter alerts) auto-create tickets, assign to nearest available technician, track resolution.
- **Technician dispatch**: Technicians get job cards on WhatsApp with customer address, system specs, fault description. Close tickets with photos.
- **Installer dashboard (web)**: Overview of fleet health, AMC pipeline, open tickets, revenue from service contracts, technician utilization.

## 6. AI angle — what's load-bearing

AI is doing three things that would otherwise require hiring more staff:

1. **Natural-language complaint triage**: Homeowner messages "mere panel se bijli kam aa rahi hai" (my panels are producing less power) → AI classifies the issue (soiling vs. inverter fault vs. shading vs. grid issue), checks the inverter data to confirm, and either schedules cleaning or escalates to a technician. Without AI, this is a human reading WhatsApp messages all day.

2. **Predictive underperformance detection**: AI compares actual vs. expected generation (accounting for weather, season, panel age) and flags anomalies before the customer complains. This turns reactive service into proactive service — the installer looks competent instead of negligent.

3. **AMC renewal nudges with ROI data**: AI generates personalized renewal messages showing the customer how much generation was recovered through maintenance, making the AMC renewal a no-brainer. Without this, renewal is a cold call.

Remove the AI and you have a dumb ticketing system. The AI makes a 5-person installer firm feel like a 20-person operation to their customers.

## 7. Localization angle (if any)

This is an India-first play by design:

- **WhatsApp-native**: Indian SMBs live on WhatsApp. No app downloads, no portal logins. The bot meets them where they already are.
- **Hindi + regional language support**: Homeowner interactions in Hindi, Tamil, Telugu, Marathi, etc. LLMs handle this well now.
- **India-specific inverter ecosystem**: Growatt, Luminous, Microtek, Havells dominate the Indian residential market. Integration priorities are India-specific.
- **PM Surya Ghar compliance**: Subsidy documentation, net metering paperwork, DISCOM coordination — all India-specific workflows that a global tool wouldn't bother with.
- **Pricing for Indian wallets**: ₹2,999–₹9,999/month is a sweet spot for these businesses. US solar O&M tools charge $500+/month.
- **Expansion path**: India first, then Southeast Asia (Vietnam, Philippines — both booming in rooftop solar with similar fragmented installer markets).

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹2,999/month (Starter, up to 200 installations tracked) → ₹5,999/month (Pro, up to 500) → ₹9,999/month (Growth, up to 2,000). Per-SMS/WhatsApp message charges above included tier.
- **ACV:** ~₹60,000–₹1,20,000/year ($720–$1,440/year) per installer.
- **Rough math to $1M ARR:** 700 paying installers × ₹1,00,000/year avg = ₹7Cr (~$840K). Round up with overage charges: ~$1M.
- **Rough math to $5M ARR:** 2,500 installers at blended ₹1,50,000/year avg = ₹37.5Cr (~$4.5M). Add white-label monitoring for larger EPCs.
- **Expansion path:** Upsell premium monitoring (thermal imaging analysis from field photos), lead generation (connect homeowners wanting new installations to existing installer customers), insurance/extended warranty partnerships.

## 9. Go-to-market wedge — first 100 customers

1. **Scrape PM Surya Ghar empanelled vendor directory** (publicly available on pmsuryaghar.gov.in) — filter for small firms (non-top-50) in Maharashtra, Gujarat, Rajasthan, Tamil Nadu (top installation states). This gives 2,000+ targets with verified contact info.
2. **WhatsApp outreach with a personalized demo**: "We pulled your installation data from the MNRE portal. Here's what SuryaCare would look like for your 300 active installations." Send a 2-minute video showing their real data in the dashboard. Target 8–10% reply rate.
3. **Free 60-day pilot for first 50 installers**: Connect their inverter accounts, onboard their AMC data, show them the first proactive alert that catches a fault before the customer calls. Conversion to paid after pilot: target 40%+.
4. **Partner with 3–5 inverter distributors** (Growatt India, Sungrow India) who want to improve their channel partner retention. Co-market SuryaCare as "the after-sales tool your installer partners need." Distributors push it to their dealer networks.
5. **Solar installer WhatsApp groups and YouTube channels**: India's solar installer community is active on WhatsApp groups (many have 200+ members) and YouTube. Sponsor 2–3 popular solar installer YouTubers for integration walkthroughs.

## 10. Build complexity — justification

**Medium.** The core is a web dashboard + WhatsApp Business API integration + inverter API connectors + an LLM-powered triage agent. No custom ML models needed — off-the-shelf LLMs handle multilingual classification and generation. The inverter API integrations are the heaviest lift (each manufacturer has different APIs, auth flows, data schemas), but Growatt's API is well-documented via the open-source community, and starting with 2–3 brands covers 60%+ of the Indian residential market. A team of 2–3 engineers ships a credible v1 in 10–12 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | SaaS tool for solar service management — no regulatory barriers |
| Ethical — no harm / dark patterns | ✅ | Improves solar system performance and customer service |
| Market exists (evidence above) | ✅ | 3M+ installations, 5,000+ small installers, ₹5–10L/year lost per firm |
| 1–5 person team can build this | ✅ | 2–3 engineers, 10–12 weeks to v1 |
| Launchable with <$50K / ₹40L | ✅ | Cloud hosting + WhatsApp API costs. Total under ₹20L for first 6 months |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money lost daily (unbilled AMCs, missed warranties, churned referrals). Not hair-on-fire yet because installers have survived with WhatsApp — but PM Surya Ghar volumes are breaking that workaround. |
| Demand evidence | 15 | 12/15 | 65% still on Excel/WhatsApp, ₹5–10L annual loss cited, multiple articles flagging after-sales as the #1 gap. No direct competitor in this exact niche for India's long tail. |
| Build feasibility | 15 | 12/15 | Standard web stack + WhatsApp API + inverter APIs. Inverter integration is the hardest part but well-documented. 2–3 engineers, 10–12 weeks. |
| Distribution clarity | 15 | 12/15 | PM Surya Ghar vendor directory gives a named, scrapeable list of thousands of targets. Inverter distributor partnerships are a realistic force multiplier. |
| Revenue mechanics | 15 | 11/15 | ₹2,999–₹9,999/month is reasonable for India SMB. 700 customers to $1M ARR is achievable but not trivial. Retention depends on proving ROI through AMC revenue recovery. |
| Time to first revenue | 10 | 7/10 | 60-day free pilot means first revenue at ~month 4–5 post-launch. Could be faster with a paid pilot model. |
| Defensibility | 10 | 8/10 | Inverter integrations + installer workflow data + customer communication history create meaningful switching costs. First mover in India-specific solar O&M for SMBs builds a data moat over time. |
| **Total** | **100** | **78/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Technical founder needed for inverter API integrations and WhatsApp bot architecture. Sales-heavy because distribution requires direct engagement with installer owners — these aren't people who discover SaaS through Google searches. Field sales or WhatsApp-based selling is the path.

### Key assumptions to validate (3–5)

1. **Assumption:** Small solar installers will pay ₹3,000–₹10,000/month for post-install management software. **How to test:** 30 in-person interviews with installers in Gujarat and Maharashtra. Show a clickable prototype. Ask: "Would you pay ₹3,000/month if this recovered ₹50,000+ in unbilled AMC revenue per year?"
2. **Assumption:** Inverter cloud APIs (Growatt, Sungrow, Solis) are reliable and accessible enough for real-time monitoring at scale. **How to test:** Build a proof-of-concept that pulls data from 50 Growatt accounts for 2 weeks. Measure API uptime, data freshness, and rate limits.
3. **Assumption:** Homeowners will engage with a WhatsApp bot for solar service (not just ignore it). **How to test:** Run a pilot with 200 homeowners of 3 partner installers. Measure response rate to proactive cleaning reminders and AMC renewal nudges.
4. **Assumption:** The installer's willingness to share inverter credentials/API access with a third-party platform. **How to test:** Ask during the 30 interviews. If resistance, explore Modbus-direct alternatives.

### Risk flags

1. **[Platform dependency]:** Heavy reliance on WhatsApp Business API. Meta could change pricing, rate limits, or terms. Mitigant: WhatsApp is the channel, not the product — can add Telegram/SMS fallback.
2. **[Inverter API stability]:** Manufacturer APIs aren't officially designed for third-party O&M tools. Could break or get locked down. Mitigant: Start with Growatt (most open), build direct Modbus bridges as backup.
3. **[SMB churn]:** Indian SMBs are price-sensitive and quick to churn if ROI isn't immediately visible. Mitigant: 60-day pilot proves value before payment starts. Dashboard shows AMC revenue recovered.
4. **[Market timing]:** If the PM Surya Ghar subsidy pace slows, new installation volumes drop and the urgency for O&M tools decreases. Mitigant: The 3M+ already-installed base still needs service regardless of new installation pace.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with solar industry connections or willingness to do field sales in Tier-1/2 Indian cities
Time to revenue:        4–5 months (including 60-day pilot)
Capital to launch:      ₹15–20 lakh ($18–24K)
Top 3 assumptions to validate first:
  1. Installer WTP for post-install software — 30 in-person interviews with ₹3K/mo price anchor
  2. Inverter API reliability — 2-week proof-of-concept with 50 Growatt accounts
  3. Homeowner WhatsApp engagement — pilot with 200 homeowners, measure response rates
Kill criteria:
  - Abandon if <15% of 30 interviewed installers express willingness to pay ₹3,000/month
  - Abandon if inverter API uptime is below 95% over a 2-week test
  - Abandon if <20% of homeowners respond to proactive WhatsApp maintenance alerts in pilot
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape 200 small solar installers from PM Surya Ghar vendor directory in Gujarat and Maharashtra. Cold-call or WhatsApp 50 of them with a one-line pitch: "We help solar installers manage after-sales and AMC on WhatsApp. Can I show you a 2-minute demo?" Track response rate.
- **Day 3–4:** Conduct 10–15 video calls with interested installers. Show Figma prototype. Ask: current AMC renewal rate, monthly service tickets, how they track warranties, biggest post-install headache. Confirm willingness to pay ₹3K/month and share inverter API access.
- **Day 5:** Tally results. Go if ≥7 of 15 interviewed installers say they'd pay and grant API access. No-go if <4. If 4–6, run a second week with a different geography before deciding.
