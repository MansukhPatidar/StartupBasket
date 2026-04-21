---
title: SolarSathi — plug-and-play solar rooftop monitor for Indian homeowners
slug: solar-rooftop-monitor
date: 2026-04-15
category: CleanTech IoT + SaaS / India
complexity: Medium
score: 77
verdict: GO
oneLiner: A ₹2,499 clamp-on device that monitors any rooftop solar system's output and sends WhatsApp performance reports — so Indian homeowners know whether their panels are earning what the installer promised.
tags:
  vertical: CleanTech
  model: IoT+SaaS
  geography: India
  secondary: [WhatsApp-first, AI-powered, Consumer, Compliance-driven]
featured: true
---

# SolarSathi — plug-and-play solar rooftop monitor for Indian homeowners

## 1. One-liner

A ₹2,499 clamp-on device that monitors any rooftop solar system's output and sends WhatsApp performance reports — so Indian homeowners know whether their panels are earning what the installer promised.

## 2. Trend signal — why now?

This is the best-timed hardware opportunity I've seen:

- **PM Surya Ghar has installed 26 lakh rooftop solar systems as of March 2026**, with a target of 1 crore by FY 2026-27. ₹17,967 crore in government subsidies disbursed. This is not a niche — it's a national infrastructure program creating millions of solar homeowners who have zero visibility into their system's performance.
- **Cheap installations use cheap inverters with no monitoring.** The ₹40,000-80,000 budget installations (after subsidy) use local-brand or no-name inverters without WiFi dongles. Branded monitoring apps (Growatt Shine, GoodWe SEMS) only work with their own inverters and have notoriously bad UX — users complain about crashes, devices not being recognized, and unreliable connectivity.
- **EPC vendors disappear after installation.** The IEEFA reports that just 22.7% of PM Surya Ghar applications convert to installations, and post-installation support is a known gap. Homeowners have no way to verify whether their system generates the promised 12-15 kWh/day. If panels get dusty, a cell fails, or the inverter malfunctions, months of lost generation go unnoticed.
- **India installed 7.1 GW of rooftop solar in 2025 alone** (pv magazine), with residential demand surging. This is the fastest-growing hardware installation market in India, and the monitoring layer is missing.

## 3. The opportunity

A family in Jaipur paid ₹60,000 (after subsidy) for a 3kW rooftop solar system. The installer said it would generate 12-14 kWh/day and save ₹1,500/month on electricity. Six months later, their electricity bill hasn't dropped as much as expected. Is the system underperforming? Are panels dirty? Is the inverter faulty? Is the net meter working? They have absolutely no idea. The installer doesn't pick up the phone.

The inverter-brand monitoring apps (Growatt, GoodWe, Enphase) only work with their specific hardware. Most budget installations use inverters with no monitoring at all. Even when monitoring exists, the apps are built for technical users, not for a retired government employee in Lucknow who just wants to know "is my solar working or not?"

The gap: a brand-agnostic, non-invasive monitor that works with ANY solar inverter. Clip a CT clamp around the solar output wire, connect to WiFi, and get WhatsApp messages: "Your system generated 13.8 kWh today. Expected: 14.5 kWh. Performance: 95% — normal." Or: "Your system generated 6.2 kWh today. Expected: 14.5 kWh. Performance: 43% — ALERT: likely panel soiling or inverter issue. Clean panels or contact installer."

## 4. Target market

- **Primary customer:** Indian homeowners who installed rooftop solar under PM Surya Ghar or independently. Typically middle-class families in tier-1, tier-2, and tier-3 cities with 1-5kW systems. Age 35-65, not technically sophisticated, care about ROI on their solar investment.
- **Why they buy:** They spent ₹60,000-2,00,000 on solar and want to know it's working. A ₹2,499 device that catches a 30% underperformance issue saves them ₹500/month in lost generation — the device pays for itself in 5 months. More importantly, it gives them the data to hold their installer accountable.
- **Rough TAM reasoning:** 26 lakh installations already, heading to 1 crore. Even if only 10% of installations lack monitoring (conservative — likely 30-40%), that's 2.6 lakh immediate addressable units at ₹2,499 each = ₹65 crore ($7.8M). At 1 crore installations with 20% adoption, the TAM is ₹500 crore ($60M).
- **Why now for them:** PM Surya Ghar installations are accelerating. The first wave of installations (2024-2025) are now 1-2 years old — old enough that panels are getting dirty, batteries are degrading in hybrid systems, and initial performance is declining. Homeowners who were happy at month 1 are starting to wonder why their bills are creeping up.

## 5. Product sketch (MVP)

- **Non-invasive CT clamp installation** — split-core CT clamp clips around the AC output wire from the solar inverter. No electrical connection, no cutting wires, no electrician needed. 2-minute installation by the homeowner.
- **WhatsApp daily report** — "Good morning! Yesterday your solar system generated 13.2 kWh. This month so far: 187 kWh. Expected: 210 kWh. You're at 89% — normal for this time of year."
- **Performance alert** — "Your generation dropped 40% compared to last week. Other systems in Jaipur are performing normally. Check your panels for dust or shading."
- **Monthly savings report** — "This month your solar saved you ₹1,247 on electricity. Lifetime savings: ₹14,960. System payback: 58% complete."
- **Comparison with local weather** — cross-references generation with local solar irradiance data (free from ISRO/IMD APIs). "It was cloudy 3 days this week, explaining your lower generation. On clear days, your system hit 100% expected output — panels are clean."
- **Installer accountability report** — "Your installer promised 14 kWh/day. Your 6-month average is 11.3 kWh/day (81%). Download this report and share with your installer for warranty claims."

## 6. AI angle — what's load-bearing

AI does three things a dumb energy meter can't:

1. **Expected generation modeling.** Every rooftop system should generate a specific amount based on panel capacity, orientation, tilt, location (latitude), time of year, and weather. The AI builds an expected-vs-actual model for each installation. "Your 3kW system in Jaipur facing south at 20° tilt should generate 14.2 kWh today given today's irradiance of 5.8 kWh/m²." This baseline is what makes underperformance detection possible. Without it, 10 kWh could be great (cloudy winter day) or terrible (clear summer day).
2. **Anomaly classification.** When generation drops, the AI classifies why: dust/soiling (gradual decline over weeks, fixed by cleaning), shading (predictable daily pattern from a new building/tree), inverter fault (sudden drop to zero or erratic output), panel degradation (slow decline over months/years), or weather (correlates with cloud cover data). Each cause has a different recommended action. "Clean panels" is different from "call your installer."
3. **Fleet-wide benchmarking.** As the device base grows, the AI compares each system against nearby systems with similar capacity. "Your 3kW system generated 30% less than the average 3kW system within 5km of you. This is not weather-related — investigate panel condition." This peer comparison is the most compelling data point for a homeowner who suspects underperformance but can't prove it.

## 7. Localization angle (if any)

This is India-only and deeply localized:

- **PM Surya Ghar integration.** The device helps homeowners verify that their subsidy-funded installation meets promised specifications. The installer accountability report is formatted per MNRE guidelines.
- **Indian solar irradiance data.** Uses ISRO's Solar Radiation Resource Assessment (SRRA) data and IMD weather stations for location-specific expected generation — far more accurate than generic solar calculators.
- **WhatsApp in Hindi.** The target customer is a 55-year-old in Udaipur, not a tech-savvy Bangalorean. Hindi-first WhatsApp interface. No app.
- **₹2,499 price point.** Global solar monitors (Sense, Emporia, Solar Analytics) cost $100-$300. The Indian homeowner who spent ₹60,000 on solar won't pay ₹25,000 for monitoring. They'll pay ₹2,499.
- **DISCOM net meter verification.** A common complaint: the DISCOM's net meter doesn't credit the right amount of exported solar. SolarSathi provides independent generation data to cross-check the DISCOM bill.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹2,499 one-time hardware (₹450 BOM for ESP32 + CT clamp + enclosure, ₹2,049 margin), ₹149/month optional premium (detailed analytics, installer report, DISCOM bill cross-check)
- **ACV:** Hardware: ~$30 one-time. SaaS: ₹1,788/year (~$21) for premium subscribers
- **Rough math to $1M ARR (hardware):** 33,000 units/year × $30 = $990K
- **Rough math to $1M ARR (SaaS):** 48,000 premium subscribers × $21 = $1M. At 25% conversion of hardware buyers, need 192,000 cumulative units sold.
- **Blended path:** Year 1: 20,000 units ($600K hardware) + 5,000 premium ($105K SaaS) = $705K. Year 2: 50,000 units ($1.5M hardware) + 20,000 premium ($420K SaaS) = $1.92M.
- **Expansion path:** Solar panel cleaning service marketplace (detect dirty panels → connect with local cleaning vendors → earn referral), battery health monitoring for hybrid solar systems, commercial rooftop monitoring (offices, factories — higher ACV), solar insurance product (guaranteed generation backed by monitoring data)

## 9. Go-to-market wedge — first 100 customers

1. **Solar installer partnerships.** There are 10,000+ registered solar EPC vendors under PM Surya Ghar. Offer the top 50 installers (by installation volume) SolarSathi at ₹1,800 wholesale. They bundle it with every new installation as a "free monitoring device" — which costs them ₹1,800 on a ₹2,00,000 sale. It differentiates them from competitors and reduces post-installation support calls. 5 installers × 20 installations/month = 100 devices/month.
2. **PM Surya Ghar Facebook and WhatsApp groups.** Thousands of Indian homeowners are in "PM Surya Ghar" WhatsApp groups and Facebook groups, sharing installation experiences and complaining about performance. Post real before/after monitoring data: "I found out my system was 30% underperforming because of a loose connector — saved ₹6,000/year."
3. **Amazon.in listing.** List in "Solar Accessories" category. Target keywords: "solar monitoring device," "solar panel performance tracker," "solar generation meter India." The PM Surya Ghar scheme creates massive organic search traffic for solar-related products.
4. **YouTube solar installer channels.** Indian solar installer YouTubers (channels like Solar Expert, Loom Solar, and dozens of regional channels) review equipment regularly. Send 20 devices for review. The performance report feature makes great content.
5. **Housing society solar projects.** Many gated communities are installing shared solar systems. Offer bulk pricing for society-wide monitoring: ₹1,999/unit for 50+ units. One RWA presentation, 30 sales.

## 10. Build complexity — justification

**Medium.** Hardware: ESP32 + SCT-013 split-core CT clamp (₹150 off-the-shelf) + burden resistor + ADC (built into ESP32) + 3D-printed enclosure + USB power. No custom PCB for v1. Firmware: sample AC current via CT clamp at 1-second intervals, calculate power (W) and energy (Wh), send hourly totals to cloud via WiFi MQTT. Software: time-series database, integration with ISRO/IMD solar irradiance APIs for expected generation modeling, WhatsApp Business API for reports. The AI expected-generation model is the most complex piece — requires per-location solar irradiance data and basic solar engineering formulas (PVWatts-style) — but these are well-documented. Two builders, 10-12 weeks. Same hardware logistics challenges as BatteryBuddy and ChillGuard — assembly, shipping, QC.

## 11. Feasibility score

| Axis                       | Weight | Score | Notes |
|----------------------------|--------|-------|-------|
| Demand signal strength     | 25     | 23/25 | 26 lakh installations and accelerating. Government target of 1 crore. IEEFA confirming post-installation support gaps. PM Surya Ghar Facebook groups full of "is my system working?" questions. This is not speculative — the installed base exists and is growing faster than any other IoT hardware market in India. |
| Build simplicity           | 25     | 16/25 | CT clamp energy measurement is well-understood. But hardware logistics (assembly, CT clamp calibration across different wire gauges, shipping) adds complexity. Solar irradiance API integration for expected generation adds software scope. |
| Distribution feasibility   | 20     | 17/20 | Solar installer bundling is the killer channel — they want to reduce support calls, and this does it. PM Surya Ghar communities are concentrated, vocal, and actively seeking solutions. Amazon/Flipkart solar accessories category is growing fast. |
| Revenue path clarity       | 20     | 15/20 | ₹2,499 hardware with ₹2,049 margin is the best margin of the three IoT ideas. Premium SaaS at ₹149/month adds recurring revenue. The installer accountability report is a feature people will pay for. Panel cleaning service marketplace is a clear monetization expansion. |
| Moat / defensibility       | 10     | 6/10  | Fleet-wide benchmarking data is a genuine network effect moat — the more devices deployed, the better the "is my system underperforming vs. neighbors" comparison becomes. But the hardware is commodity-simple. The moat is in the data layer, not the device. |
| **Total**                  | **100**| **77/100** | |

**Verdict:** GO

## 12. Risks & unknowns — top 3 things that could kill this

1. **CT clamp accuracy at low power.** Cheap SCT-013 CT clamps lose accuracy below 100W. A 3kW system generating 200-300W during cloudy mornings might get inaccurate readings. If the daily kWh total is off by 15-20%, the "underperformance detection" feature is unreliable. Need to test with a calibrated reference meter across multiple installations.
2. **Solar inverter brands add monitoring to cheap models.** If Growatt, Solis, and other budget inverter brands include WiFi monitoring as standard in their ₹15,000 inverters, the retrofit market shrinks. Mitigation: even with brand monitoring, homeowners want an independent, brand-agnostic tool — especially for installer accountability. But it's a real risk for new installations.
3. **Homeowner apathy.** The homeowner installed solar and forgot about it. They see ₹500/month savings on their bill and don't care whether it should be ₹700/month. If they're not motivated to optimize, they won't buy a monitor. The sell has to be emotional ("your installer may be cheating you") not rational ("optimize your generation by 12%").

## 13. Next step — 1-week validation sprint

- **Day 1-2:** Build 5 prototype units: ESP32 + SCT-013-030 CT clamp + burden resistor. Calibrate against a known reference meter (Kill A Watt or similar). Flash firmware that measures AC power and sends hourly kWh to a cloud endpoint. Build a WhatsApp bot that sends a daily generation summary. Total BOM: ₹2,500 for 5 units.
- **Day 3-4:** Install on 5 residential solar systems (own home if applicable, neighbors, family, friends-of-friends who installed PM Surya Ghar). Record: panel capacity, inverter brand, installation date. Compare SolarSathi's kWh reading against the inverter's display (if available) or the DISCOM net meter reading. Ask homeowners: "Did you know your system generated X kWh yesterday? Is that what you expected?"
- **Day 5:** Evaluate: (1) Did CT clamp readings match reference within 10% accuracy? (2) Did at least 3 of 5 homeowners express surprise at their generation data — either "that's less than I expected" or "I had no idea I could track this"? (3) Did anyone say "I want to show this to my installer"? If accuracy is within 10%, homeowner interest is high, and the installer accountability angle resonates — this is a strong GO. If CT clamp accuracy is off by 20%+, invest in a better CT clamp (YHDC SCT-019, ₹300 more) before proceeding.
