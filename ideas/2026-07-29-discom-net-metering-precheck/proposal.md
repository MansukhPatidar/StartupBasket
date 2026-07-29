---
title: "DiscomPass — submission gate for Indian rooftop solar EPCs"
slug: discom-net-metering-precheck
date: 2026-07-29
category: CleanTech / India-SMB — Rooftop Solar EPCs & Installers (₹2–30 Cr revenue)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Catches the format errors that get 37% of Indian net-metering submissions bounced, before the DISCOM sees them."
tags:
  vertical: CleanTech
  model: SaaS
  geography: India
  secondary: [SMB, AI-agent, Compliance-driven, Multilingual, Solo-builder]
axes:
  problem: 17
  demand: 12
  build: 10
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# DiscomPass — submission gate for Indian rooftop solar EPCs

## 1. One-liner

Catches the format errors that get 37% of Indian net-metering submissions bounced, before the DISCOM sees them.

## 2. Trend signal — why now?

India is running the largest residential solar subsidy programme on the planet, and its paperwork layer is held together with WhatsApp and stale AutoCAD templates.

- **The money is real and already flowing.** PM Surya Ghar has disbursed **₹17,967.53 crore** in Central Financial Assistance as of March 2026, against a total allocation of **₹75,021 crore** — one of the largest single clean-energy subsidy programmes globally. 40 lakh households solarised as of May 30, 2026. Target: 1 crore homes by FY2026-27.
- **The failure rate is the story.** Aggregated submission data across Indian DISCOMs shows a **37% average first-pass rejection rate**, with **17 days average delay** per rejected submission for rework and resubmission. Separately, **one in three** PM Surya Ghar applications gets rejected.
- **The formats are a moving target.** There are **54 functional DISCOMs** in India, each with its own application form, drawing format, technical checklist and portal. **Six major DISCOMs updated their formats between Q1 2025 and Q2 2026 alone.** MSEDCL updated its Annexure E format in early 2026 — firms using pre-2026 templates get rejected on purely administrative grounds.
- **The US already solved this and India didn't get the tool.** Aurora Solar acquired Lyra in July 2024 specifically to auto-generate permit-ready plan sets; SolarAPP+ (NREL/DOE-funded) cut US permit review from up to 20 business days to zero. Nothing equivalent exists for the 54-DISCOM Indian format space.
- **The drafting time is quantified.** A residential or C&I installer spends **90–180 minutes of senior engineering time** on a single PV single-line diagram when drafting in AutoCAD or Visio. Purpose-built tooling collapses that to **8–15 minutes of review time**.

The programme is scaling faster than the paperwork competence of the installer base. That gap is the product.

```
Provenance:
  - Signal 1 (Demand): 37% average first-pass DISCOM rejection rate, 17 days average rework delay per rejection, across 54 functional DISCOMs with divergent annexure formats — https://heavendesigns.in/blog/discom-net-metering-process-india-state-by-state/ — 2026-07-29
  - Signal 2 (Feasibility): SLD drafting is 90–180 min of senior engineer time in AutoCAD, collapsible to 8–15 min review with purpose-built generation; Aurora/Lyra proved automated permit-packet generation works in the US market — https://www.heavengreenenergy.com/blog/solar-sld-software + https://pv-magazine-usa.com/2024/07/16/with-acquisition-of-lyra-aurora-adds-automated-permitting-to-its-toolbox/ — 2026-07-29
  - Signal 3 (Economic): ₹17,967.53 Cr CFA disbursed as of March 2026 against ₹75,021 Cr allocated under PM Surya Ghar; Indian solar EPC software category actively funded (Solar Ladder raised ₹11 Cr from Axilor, Titan Capital, Stride) — https://www.reslink.org/blogs/pm-surya-ghar-is-blacklisting-bad-vendors-here-is-how-to-win-on-trust/ + https://inc42.com/startups/solar-ladder-fast-tracking-indias-solar-energy-adoption/ — 2026-07-29
  Category: Geographic arbitrage
```

## 3. The opportunity

Every rooftop solar job in India ends at the same chokepoint: a five-document submission to a DISCOM, in that specific DISCOM's current format. The industry calls it the **DISCOM Drawing Stack** — SLD, General Arrangement/Key Plan, technical spec sheets (with ALMM registration), structural certificate, and the state-specific application form with annexures. The set is universal. **The format of every document in it varies by DISCOM.**

Maharashtra wants Annexures A–F. Gujarat uses the Suraksha Shakti annex. Tamil Nadu has its own bidirectional metering notation. JVVNL routinely bounces load-calculation sheets for format non-compliance alone. An EPC expanding from Gujarat to Karnataka discovers that everything it learned about DISCOM submission in its home state applies nowhere else.

So the EPC does what EPCs do: keeps a folder of AutoCAD templates, cloned from the last approved job, edited by hand. Templates go stale silently. The DISCOM rejects, and nobody finds out for 7–15 working days. Add a re-inspection and it's another 5–10 days. The installer has already bought and installed the panels. Cash is sitting on a roof, uncommissioned.

**What the incumbents do badly:**

- **Solar Ladder (₹11 Cr raised)** — genuinely good product, but it's a CRM: sales, proposals, project management, and NBFC-backed financing. It sells you pipeline, not approval. The submission packet is still your problem.
- **ARKA 360, SurgePV, Sunbase** — design and proposal tools. SurgePV runs ~₹1.07 lakh/user/yr. They produce a beautiful proposal for the *homeowner*. The DISCOM doesn't read proposals.
- **Aurora Solar** — the right shape of product, wrong continent. NEC/US permit logic, US pricing, zero Indian DISCOM annexures.
- **CAD drafting outsourcers** — solve the drawing, not the format currency. They'll draft what you tell them to draft, in the template you send them, including the obsolete one.

Nobody owns the question *"will this specific DISCOM accept this specific packet today?"* That's a narrow, unglamorous, highly checkable question — exactly the kind AI is good at and VCs find boring.

## 4. Target market

**Primary customer:** Owner or operations head of a rooftop solar EPC/installer firm doing **8–60 installations a month**, ₹2–30 Cr annual revenue, 5–40 staff, operating across 1–4 states. Registered vendor on the National Rooftop Solar portal. Concentrated in Gujarat, Maharashtra, Rajasthan, Karnataka, Tamil Nadu, UP.

**Secondary customer:** The one- or two-person "solar consultant" who handles subsidy and net-metering paperwork on commission for multiple small installers. Lower ACV, faster close, excellent referral node.

**Why they buy:** The pain is cash, not paperwork. Panels are bought and installed before the DISCOM approves; the 30–45 day subsidy DBT clock doesn't even *start* until after final inspection approval. A rejection adds 17 days to a working-capital cycle the EPC is financing at NBFC rates. Beyond cash: **installers who accumulate complaints risk de-registration from the PM Surya Ghar portal** — a business-ending event. And rejections are not evenly distributed by fault. Of the 12 documented PM Surya Ghar rejection reasons, roughly a third are squarely the installer's (non-ALMM panels, poor roof photo quality, incomplete commissioning report, non-empanelled status) and most of the rest are homeowner data errors the installer could have caught at intake — Aadhaar/bill name mismatch, wrong consumer number, system exceeding sanctioned load, non-Aadhaar-seeded bank account.

**Rough TAM reasoning:** The National Rooftop Solar portal lists thousands of registered vendors state-wise. Against a 1 crore household target with 40 lakh done, the active installer base doing meaningful volume is plausibly 8,000–15,000 firms nationally. Assume 20% are large enough to feel format pain across multiple DISCOMs and can pay: **~2,000–3,000 realistic accounts.** At ₹6,000/mo average that's a ₹15–22 Cr ARR ceiling in the core segment — small for a VC, excellent for a two-person team. C&I/commercial installers and the state-level channel-partner networks extend it.

**Why now for them:** Volume just crossed the threshold where manual template management breaks. An EPC doing 6 jobs a month can keep formats in their head. At 30 jobs a month across three DISCOMs, they can't — and the 2026 format churn (six DISCOMs updated in five quarters) means their institutional memory is actively decaying.

## 5. Product sketch (MVP)

- **Pre-submission check** — upload the drawing stack + application form; get a pass/fail report against the target DISCOM's *current* format, itemised by document, before anything is filed.
- **Format currency alerts** — "MSEDCL changed Annexure E in February. Your template is the old one. 4 jobs in your pipeline use it."
- **Intake validator** — checks the homeowner-side data that causes the majority of rejections: Aadhaar-vs-bill name match, consumer number validity, sanctioned load vs proposed system capacity, bank account Aadhaar-seeding status. Run at *sale* time, not submission time.
- **ALMM + inverter compliance check** — verifies proposed modules are on the current ALMM list and the inverter carries the anti-islanding certification the target DISCOM requires.
- **Auto-generated SLD and GA/Key Plan** in the target DISCOM's title block, annotation format, and annexure structure — from system parameters, not a blank canvas.
- **Rejection playbook** — when a DISCOM does bounce something, the specific fix, the responsible party (installer vs homeowner), and the realistic clock on each remedy.
- **Multi-DISCOM job board** — every live application, which DISCOM, which stage, days elapsed, and what's about to breach an inspection-appointment limit. (Three missed DISCOM inspection appointments cancels the application in most states.)
- **Hindi/Gujarati/Marathi interface** for site and ops staff; English for engineering.

## 6. AI angle — what's load-bearing

Two places AI does real work, and one place it deliberately doesn't.

**Load-bearing #1 — format extraction and drift detection.** The core asset is a structured, current model of 54 DISCOMs' submission requirements. Nobody publishes that as an API. It lives in PDF circulars, portal help pages, updated annexure templates, and state regulatory commission orders — in inconsistent English and regional-language documents. Vision + document models continuously ingest those sources and diff them against the last known format. This is the moat and it's only maintainable by AI; a human team doing it manually across 54 DISCOMs is the entire company's payroll.

**Load-bearing #2 — checking a submitted packet against that model.** Reading a customer's uploaded SLD, GA drawing and filled application form, then judging conformance — correct title block, correct annexure set and version, load calc in the right format, metering notation matching state convention. That's vision-model work on messy real-world CAD exports and phone photos. Rules engines alone can't do it; the inputs are too unstructured.

**Deliberately not AI:** the actual filing. No auto-submission to government portals, no credential handling. The product hands the EPC a green light and a corrected packet; a human files it. That's a defensibility choice as much as a safety one — it keeps us clear of portal ToS and out of the "unauthorised intermediary" category.

Remove the AI and this is a PDF checklist that's wrong within a quarter. The whole value is that the model of 54 formats stays *current* without a 20-person ops team.

## 7. Localization angle

This product is localization. There is no global version.

- **The asset is Indian regulatory structure** — 54 DISCOM formats, ALMM lists, state annexure conventions, CEIG approval requirements for HT, IS 875 Part 3 structural referencing. None of it transfers anywhere.
- **Language:** DISCOM circulars and several state annexures are issued in regional languages. Marathi for MSEDCL, Gujarati for Gujarat DISCOMs. Ingestion has to handle them, and the ops-facing UI should speak them.
- **Pricing:** ₹4,000–15,000/mo works here. The same product at $49/mo would be mispriced upward for a 10-person Rajkot EPC and downward for what it saves them.
- **Distribution:** WhatsApp is the channel. Solar installer WhatsApp groups per state are where this industry actually coordinates — pricing, DISCOM gossip, subsidy status, labour. Product notifications should land there, not in email.
- **Payment:** UPI autopay / monthly mandate. Annual prepay is a hard sell to a business whose cash is stuck in uncommissioned rooftops.

## 8. Business model — path to $1M–$5M ARR

**Pricing** — per-firm, tiered on submission volume, not seats. Seats are the wrong meter; the EPC's pain scales with applications.

| Tier | Target | Price |
|---|---|---|
| Solo / consultant | ≤10 submissions/mo, 1 DISCOM | ₹2,500/mo |
| Growth | ≤40 submissions/mo, up to 3 DISCOMs | ₹7,500/mo |
| Multi-state | Unlimited submissions, all DISCOMs, priority format alerts | ₹18,000/mo |

**ACV:** ₹72,000 (~$830) blended, assuming the mix lands mostly on Growth.

**Anchor against what they already spend:** SurgePV runs ~₹1.07 lakh/user/yr and a 25-person EPC can pay ₹1.75–3.75 lakh/yr just for proposal software. Our top tier is ₹2.16 lakh/yr for the whole firm. More importantly, one avoided rejection saves 17 days of working capital on a job — at ₹3–8 lakh of installed cost per residential job financed at NBFC rates, a single catch pays for months of subscription. The ROI conversation is short.

**Rough math to $1M ARR (₹8.7 Cr):** ~1,200 customers at ₹72,000 ACV. Or a friendlier mix: 700 Growth (₹6.3 Cr) + 130 Multi-state (₹2.8 Cr) = ₹9.1 Cr from **830 firms** — well inside a 2,000–3,000 firm addressable base.

**Rough math to $5M ARR (₹43 Cr):** Doesn't come from the core segment; it needs three things true. (1) Move up into C&I/commercial EPCs where HT submissions, CEIG approvals and relay scheme drawings justify ₹40,000+/mo. (2) Sell the format-currency feed as an API to the CRM incumbents — Solar Ladder and ARKA 360 would rather license the DISCOM model than build it. (3) Attach a per-submission transaction fee (₹300–800) on top of subscription for firms with spiky volume. Honestly: $5M is a stretch case. The realistic, attractive outcome here is a ₹10–15 Cr ARR business run by three people at high margin.

**Expansion path:** Start at pre-submission check → add SLD/GA generation → add intake validation at sale time → add the C&I/HT module → license the format feed. Each step raises ACV without new customer acquisition.

## 9. Go-to-market wedge — first 100 customers

The customer list is public. That's the whole reason this GTM works.

1. **Scrape the National Rooftop Solar portal's state-wise registered vendor directory.** Thousands of empanelled installers, with state and contact details, published by the government. Filter to the six highest-volume states. That's the list — no lead-gen spend, no guessing.
2. **Lead with a free "format audit" of their last rejected submission.** Cold outreach on WhatsApp (this industry doesn't read email): *"Send us the last packet a DISCOM bounced. We'll tell you exactly which format rule killed it, free."* Every one of these firms has a recent rejection — the base rate is 37%. The audit report *is* the demo, and it produces the packet we then check. Target 2,000 contacts, 8% engage, 25% of those convert = ~40 customers.
3. **Own the state solar-installer WhatsApp groups.** Every state has them; they're where DISCOM format changes actually get discovered today, usually late and by rumour. Publish a free, fast, credible **"MSEDCL changed Annexure E today"** alert into those groups the day it happens. Being the first source of truth on format churn buys distribution that no ad spend does. This is the compounding channel.
4. **Partner with the paperwork consultants.** The one- and two-person subsidy consultants each serve 5–15 installers. Sign 20 of them at the ₹2,500 tier with a referral cut. They become a distribution layer that carries the tool into their client installers.
5. **Panel and inverter distributor co-marketing.** Regional distributors sell to hundreds of small EPCs and want their installers to close jobs faster (faster commissioning = faster reorder). A bundled 3-month trial through 3–4 regional distributors reaches the long tail we can't cold-call.

Realistic path to 100: ~40 from cold format audits, ~25 from WhatsApp group presence, ~20 via consultants, ~15 via distributors. That's a 4–5 month sprint, not a two-week one — India SMB sales requires phone calls and trust-building, which is why the distribution score isn't higher.

## 10. Build complexity — justification

**Medium.** The software is unremarkable — document upload, vision-model checks, PDF/DXF generation, a job tracker. Off-the-shelf models handle the extraction and conformance checking. Drawing generation from parameters is templated output, not CAD innovation.

The hard part is the **DISCOM format corpus**. v1 does not attempt 54 DISCOMs — it does **6** (MSEDCL, Gujarat's DISCOMs, JVVNL, BESCOM, TANGEDCO, UPPCL), covering the majority of residential volume. Each one needs a human-verified model of its current annexure set, built by reading circulars and, critically, by examining real approved and rejected packets from design partners. Budget 3–4 weeks per DISCOM for the first two, faster after the pattern is established.

**~4–5 months to v1 for two people** (one engineer, one with genuine Indian solar-EPC domain knowledge — this is not optional; the corpus cannot be built by someone who has never seen a rejected MSEDCL packet). The domain hire, not the code, is the schedule risk.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Checking a customer's own documents against published DISCOM formats. No portal automation, no credential handling, no filing on the customer's behalf — deliberately outside intermediary territory. |
| Ethical — no harm / dark patterns | ✅ | Increases approval rates for legitimate submissions and speeds up subsidised solar adoption. Does not help anyone evade a substantive requirement — ALMM and structural checks push *toward* compliance. |
| Market exists (evidence above) | ✅ | 37% first-pass rejection rate, 54 DISCOMs, ₹17,967 Cr disbursed, funded competitors in adjacent categories. |
| 1–5 person team can build this | ✅ | Two people, one of whom must have solar-EPC domain depth. |
| Launchable with <$50K / ₹40L | ✅ | Two salaries for five months plus inference costs. Comfortably under ₹40L; no capex, no inventory, no licences. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | 37% rejection rate, 17 days rework, working capital stuck in installed-but-uncommissioned rooftops, and portal de-registration risk for repeat offenders. Felt weekly. Not quite hair-on-fire only because EPCs have absorbed it as a cost of doing business rather than actively shopping for a fix. |
| Demand evidence | 15 | **12**/15 | Hard rejection statistics, quantified drafting time, massive documented government spend, and funded adjacent competitors. Docked because the evidence is largely industry-publisher and vendor-blog sourced — I could not find raw installer complaints in first-person forums, which is the signal I'd most want. |
| Build feasibility | 15 | **10**/15 | Software is standard. The DISCOM format corpus is genuine grind and needs a domain hire. 4–5 months, not 6 weeks. |
| Distribution clarity | 15 | **12**/15 | Government-published vendor directory = a free, complete, targeted list. WhatsApp groups are a real, identified channel. Docked because Indian SMB conversion is phone-call-heavy and slow — this is a 4–5 month sprint to 100, not a 2-week one. |
| Revenue mechanics | 15 | **11**/15 | Pricing well-anchored against existing spend (₹1.07 lakh/user/yr comparables) and against a concrete ROI. $1M ARR needs ~830 firms in a ~2,500 firm base — achievable but requires real penetration. $5M is a genuine stretch. |
| Time to first revenue | 10 | **8**/10 | The free format audit converts to paid quickly because it demonstrates value on a document the customer already has. Expect first revenue 6–8 weeks post-launch. Not 9–10 because v1 needs the corpus built before the first audit is credible. |
| Defensibility | 10 | **6**/10 | The corpus compounds: every checked packet and every rejection outcome improves the model, and format churn means a static competitor decays. But there's no structural lock-in — a determined Solar Ladder could build this, and they already have the customers. Head start plus focus, not a moat. |
| **Total** | **100** | **76**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This one genuinely requires a solar person. Not "did some research on solar" — someone who has personally had a DISCOM bounce their packet and knows why. Without that co-founder, the corpus will be subtly wrong and the first ten customers will find out before you do.

### Key assumptions to validate

1. **Assumption:** EPCs attribute rejections to *format* errors, not just homeowner data errors — i.e. the thing we check is the thing that's breaking. **How to test:** Collect 40 real rejected submissions from 10 installers across 3 states. Categorise the actual rejection reason. If <40% are format/document-conformance issues that a pre-check would have caught, the product is aimed at the wrong half of the problem and should pivot toward intake validation.
2. **Assumption:** A ₹7,500/mo tool clears the buying bar for a firm doing 30 jobs/month. **How to test:** 25 pricing conversations after showing a completed free format audit. Watch for the ROI objection specifically — if they push to ₹3,000, the ACV assumption and the $1M path both need rebuilding.
3. **Assumption:** DISCOM format changes are detectable from published sources with useful latency. **How to test:** Backtest. Take the six format changes documented between Q1 2025 and Q2 2026, and check whether each was discoverable in a published circular or portal update, and how many days before installers found out. If changes only surface via rejection, the alerting feature dies and the product is a checker only.
4. **Assumption:** Installers will actually upload their drawing stack to a third-party tool. **How to test:** The free audit offer itself is the test. If cold-outreach engagement is <5%, the friction or trust barrier is fatal to the wedge.

### Risk flags

1. **Incumbent risk (highest):** Solar Ladder is funded, Indian, focused on exactly this customer, and already inside their workflow. If they ship DISCOM submission checking, we're competing on depth against someone with distribution. Mitigation is speed and being *deeper* on the corpus than a CRM company will bother to go — and the API-licensing path turns them from competitor into customer.
2. **Corpus decay:** The moat is also the liability. 54 DISCOMs changing formats unpredictably means the maintenance burden never ends and never gets cheaper. A quarter of neglect and the product is actively harmful — a green light on a stale format is worse than no tool at all.
3. **Policy dependency:** The urgency is downstream of PM Surya Ghar. If the scheme's subsidy structure is cut, restructured, or the 1 crore target is abandoned after FY2026-27, installation volume drops and so does the pain. Net metering itself persists, so the floor isn't zero, but the growth story is scheme-dependent.
4. **Segment fragility:** Small Indian EPCs are cash-poor and churn hard — a lot of these firms won't exist in 18 months. Expect elevated churn regardless of product quality, and price/retain accordingly.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a solar-EPC operator who
                        has personally handled DISCOM submissions. The domain
                        half is non-negotiable.
Time to revenue:        6–8 weeks post-launch; ~6 months from a standing start
Capital to launch:      ₹18–25 lakh ($21–29K) — two salaries for five months
                        plus inference and tooling
Top 3 assumptions to validate first:
  1. Format/conformance errors are ≥40% of real rejections — categorise 40
     actual rejected submissions from 10 installers across 3 states
  2. ₹7,500/mo clears the bar at 30 jobs/month — 25 pricing calls after
     delivering a free format audit
  3. Format changes are detectable pre-rejection — backtest the six documented
     2025–2026 DISCOM format changes against published sources
Kill criteria:
  - Abandon if <40% of 40 sampled real rejections are format/document-conformance
    issues a pre-check would have caught
  - Abandon if <5% engagement on 500 WhatsApp cold outreaches offering a free
    audit of an already-rejected packet
  - Abandon if Solar Ladder ships DISCOM-specific submission validation before
    v1 launch
  - Abandon if fewer than 3 of the first 20 free-audit recipients convert to paid
    within 30 days
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape the state-wise registered vendor directory for Gujarat, Maharashtra and Rajasthan. Pull 500 contactable installer firms. Simultaneously, get the current MSEDCL and Gujarat annexure sets and read them end to end — if two people can't build a usable format model for one DISCOM in two days, the 54-DISCOM plan is fiction.
- **Day 3–4:** WhatsApp outreach to all 500 with one specific ask: *"Send us a packet a DISCOM rejected in the last 6 months. We'll tell you exactly which rule killed it, free, in 48 hours."* Measure reply rate. Target ≥5%.
- **Day 5:** Manually audit every packet received. Categorise each rejection by root cause: format/conformance, homeowner data, technical non-compliance, or DISCOM-side infrastructure. Then call every sender with the finding and ask the pricing question directly.

**Falsifiable outcome:** ≥25 packets received from 500 outreaches, **and** ≥40% of them rejected for reasons a pre-submission format check would have caught, **and** ≥8 senders state they'd pay ₹7,500/mo. Miss any of the three and this is a VALIDATE that hasn't earned a build — the most likely failure is the second condition, which would mean the real product is intake validation at sale time, not submission checking.
