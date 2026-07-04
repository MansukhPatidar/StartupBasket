---
title: "SunClose — closeout autofiler for residential solar installers"
slug: solar-closeout-autofiler
date: 2026-07-05
category: CleanTech / US Residential Solar Installers (post-install close-out & PTO)
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Snap each panel's serial on the roof; SunClose assembles the PTO packet and homeowner warranty binder before the crew leaves."
tags:
  vertical: CleanTech
  model: SaaS
  geography: US
  secondary: [Solar, Field-service, Mobile-first, AI-agent, SMB, Compliance-driven]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# SunClose — closeout autofiler for residential solar installers

## 1. One-liner

Snap each panel's serial on the roof; SunClose assembles the PTO packet and homeowner warranty binder before the crew leaves.

## 2. Trend signal — why now?

Every design and CRM tool in residential solar stops at the customer's signature. Aurora Solar — the category leader — has "no native customer management and stops at the signature." The entire back half of the job (capture serials, build the commissioning record, assemble the utility interconnection packet, get Permission to Operate, hand the homeowner a warranty binder) is done by hand, on paper forms and personal-phone photos dumped into a shared drive.

That manual close-out is now a bleeding wound, and the numbers are public:

- **Return trips to collect missing photos:** 60% of installers send a team back to the job site at least once per project just to collect missing documentation, at an average $475 per trip — "more than $17,000 in avoidable losses annually" for a 60-project company (Timemark).
- **Interconnection rework:** over 90% of interconnection (PTO) applications contain errors requiring revision, each adding days or weeks. "Complete and accurate submissions move through interconnection review 40% faster."
- **Warranty exposure:** "undocumented panels face a majority of claims being delayed or outright rejected"; the rejection reflects "absent evidence rather than defects." One installer with 3,000+ residential installs admitted they have never provided serial numbers to a homeowner — so when a module fails in year 7, someone has to climb back on the roof.

Why now: the field-capture problem finally has a cheap fix. On-device OCR/vision reads a panel serial label from a phone photo reliably; doc-assembly LLMs turn a folder of photos + a spec sheet into a formatted, labeled packet. Neither existed cheaply 18 months ago. And there is **no MCS-style mandated format in the US** — unlike the UK, where GridGuru/SolarPlus already own the handover-pack niche — so the format layer is wide open.

Provenance:
  - Signal 1 (demand): "60% of solar installers send a team back to the job site at least once per project… average cost per return trip is $475… more than $17,000 in avoidable losses annually" — https://www.timemark.com/blog/the-solar-installers-photo-documentation-guide — 2026-07-05
  - Signal 2 (feasibility): Manual serial capture today — "write numbers by hand onto paper commissioning forms or type them into spreadsheets from photographs," with transposition errors and panels logged with no serial at all; mobile scan-to-cloud now viable — https://www.scanflow.ai/solar-serial-traceability-warranty-claims/ — 2026-07-05
  - Signal 3 (economic): Aurora Solar $2,640–$6,000+/user/yr, "prohibitive for small installers," and "no native customer management… stops at the signature" — the close-out layer is unserved by the money already flowing into solar software — https://www.surgepv.com/reviews/aurora-solar — 2026-07-05
  Category: Underserved niche

## 3. The opportunity

The solar software market spent the last five years perfecting the **front** of the funnel: design (Aurora, Scanifly, Pylon), proposals, and sales CRM. All of them explicitly end at the signed contract. The **back** of the funnel — the close-out — is where the money leaks: return trips, delayed PTO (which delays the installer's final payment *and* the homeowner's utility credits), and warranty liability that boomerangs years later.

The incumbents that touch close-out are the wrong shape:
- **Aurora / Scanifly / Pylon** — design & sales, stop at signature.
- **Payaca / ServiceTitan** — full field-service CRMs at $444–$1,724+/mo; heavy, generic, require ripping out your existing stack, and treat commissioning as one form among hundreds.
- **Timemark / Scanflow** — do the narrow serial-scan piece but not the assembled PTO packet, homeowner binder, or warranty registration.

SunClose does one job the way a specialist does it: it turns the crew's phone into a guided capture tool on the roof, then auto-assembles two artifacts — the **utility PTO packet** (in that utility's required layout) and the **homeowner warranty binder** (serials, registration links, monitoring credentials) — and files/registers what it can. A focused $99–199/mo tool an ops coordinator adopts in an afternoon beats a $1,700/mo CRM migration.

## 4. Target market

- **Primary customer:** US residential solar installers doing ~5–60 jobs/month — the 1–5-crew independents and regional EPCs. Buyer is the owner or the ops/permitting coordinator who lives in the PTO backlog.
- **Why they buy:** In their words — return trips cost $475 a pop, PTO delays hold up their final draw, and denied warranty claims come back as angry-homeowner phone calls years later. They already feel every one of these this month.
- **Rough TAM reasoning:** 11,054 solar-installation businesses in the US in 2026 (IBISWorld). Sunrun holds ~12.7% share and the top handful are covered by internal tools — leaving ~9,000–10,000 small/mid installers as the reachable base. At $150/mo that's a ~$16–18M/yr ceiling on the core product alone, before per-project or add-on revenue.
- **Why now for them:** 2025 residential contracted ~2% and margins tightened — installers are cutting admin cost and chasing faster PTO-to-payment, exactly what a close-out tool sells.

## 5. Product sketch (MVP)

- **Guided roof capture:** crew photographs each panel/inverter label; on-device OCR reads the serial, validates the format against the manufacturer, and flags duplicates/misses before they climb down.
- **Auto-assembled PTO packet:** photos + serials + spec sheets + line diagram compiled into the specific utility's required layout, with a completeness checklist so nothing goes out with the 90%-of-applications error.
- **Homeowner warranty binder:** a clean PDF/portal with every serial, warranty registration links, monitoring login, and inspection/permit docs — the thing the 3,000-install shop never handed over.
- **Warranty auto-registration:** pre-fills and submits module/inverter registrations to the manufacturers that support it.
- **Missing-doc alerts:** flags a job as "not PTO-ready" *before* the crew leaves site, killing the $475 return trip.
- **Metadata-safe storage:** keeps geotag/timestamp intact (messaging apps strip it — a documented failure mode).
- **Utility-format library:** a growing set of the top utilities' interconnection layouts, filled automatically.

## 6. AI angle — what's load-bearing

Two places AI is doing real work, not decorating:

1. **Field vision/OCR** reads serial labels off imperfect roof photos, validates against per-manufacturer serial formats, and catches transposition errors and missing panels *on site*. Remove it and you're back to hand-typing from photos — the exact failure the product exists to kill.
2. **Doc-assembly** ingests a messy folder (photos, spec PDFs, permit set) and produces a labeled, checklisted, utility-specific packet. Remove it and this is a manila folder.

Without the AI, SunClose is a shared drive with a nicer logo. With it, a 90-minute paperwork job becomes a 10-minute on-site capture.

## 7. Localization angle (if any)

N/A — this is a US-first play by design. The wedge *is* the US structural quirk: no MCS-equivalent mandated handover format (unlike the UK, where the niche is already owned), plus fragmented per-utility PTO layouts that a format library can monetize. A later port to Australia (CEC) or India (DISCOM net-metering paperwork) is plausible but is a different product; don't dilute v1.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo base (up to ~15 projects/mo) + $99/mo Pro tier (unlimited + auto-registration + priority utility formats). Optional $10/project overage for spiky installers.
- **ACV:** ~$2,000/yr blended.
- **Rough math to $1M ARR:** ~500 installers × ~$167/mo × 12 = $1.0M. That's ~5% of the reachable ~10,000-shop base.
- **Rough math to $5M ARR:** ~2,000 installers (~20% of base) at a slightly higher blended ACV as auto-registration and utility-format coverage expand — or fewer installers plus a per-project revenue line and a manufacturer-side warranty-data channel.
- **Expansion path:** seats as the shop grows → per-project overage → Pro auto-registration → eventually a data relationship with module manufacturers who want clean serial-level install records (they lose warranty claims to bad traceability today).

## 9. Go-to-market wedge — first 100 customers

- **Directory outbound:** ENF Solar and Solar Power World's Top Contractors lists name thousands of installers with sites and emails. Scrape the sub-100-employee segment, send a 90-second Loom showing a real roof photo → finished PTO packet, ask "how many return trips did you eat last month?" Expect 3–5% reply at this pain level.
- **Utility-specific beachhead:** pick the 2–3 utilities with the ugliest interconnection paperwork (California IOUs are a known nightmare), build those formats first, and target every installer working that territory — "we already speak your utility's format" is a concrete hook.
- **Distributor & permit-runner partners:** solar equipment distributors and third-party permit/PTO-submission services already talk to these installers daily; revenue-share referral beats cold email.
- **Forum + trade presence:** r/solar, SolarPanelTalk installer threads, and regional SEIA chapter events are where ops coordinators complain about exactly this. Show up with the $475/return-trip math.

## 10. Build complexity — justification

Medium. Off-the-shelf: mobile capture, OCR/vision APIs, PDF assembly, cloud storage, auth. Custom work: per-manufacturer serial-format validation, the guided on-roof capture UX (offline-tolerant), and the utility-format library — which is content/config grind, not research. A pair can ship a credible v1 (capture + one utility's PTO packet + homeowner binder) in ~10–14 weeks; the utility library then grows on demand. No novel models, no hardware, no regulatory approval.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Documentation tooling; no regulated activity. Installer stays the responsible party. |
| Ethical — no harm / dark patterns | ✅ | Improves warranty protection for homeowners; net-positive transparency. |
| Market exists (evidence above) | ✅ | 11,054 US installers; quantified return-trip and PTO-rework losses. |
| 1–5 person team can build this | ✅ | Off-the-shelf stack + content grind. |
| Launchable with <$50K / ₹40L | ✅ | Solo/pair build; low infra cost. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Quantified, recurring, money + liability. $475/trip, PTO delays hold final payment. Not quite daily hair-on-fire, but felt every job. |
| Demand evidence | 15 | 12/15 | Multiple independent sources on return-trip cost, PTO error rate, warranty denials; incumbents' explicit "stops at signature" gap. Missing: a direct installer quote begging for *this* product. |
| Build feasibility | 15 | 11/15 | ~10–14 weeks for v1. Utility-format library is ongoing grind, not a blocker. |
| Distribution clarity | 15 | 11/15 | Named directories, named utilities, clear ROI pitch. Cold outbound to busy ops people is the uncertainty. |
| Revenue mechanics | 15 | 12/15 | Pricing sits well under the $1,700/mo CRMs; $1M ARR = ~5% of base. Churn risk if perceived as one-time-per-job. |
| Time to first revenue | 10 | 8/10 | Pilot-to-paid in weeks; installers pay for tools that cut a measurable cost. |
| Defensibility | 10 | 5/10 | Moat is the utility-format library + workflow lock-in + eventual manufacturer data channel. Copyable by a funded field-service CRM if they cared — but they've ignored close-out for years. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — you need someone who has lived a solar close-out or can pull an installer advisor in fast; the utility-format nuances will eat a naive builder.

### Key assumptions to validate (3–5)

1. **Assumption:** Installers will pay $149/mo for a close-out-only tool rather than expect it inside their existing CRM. **How to test:** 20 discovery calls with sub-30-job/mo installers; put a real price on the table and watch the flinch.
2. **Assumption:** On-device OCR reads real roof-condition serial labels reliably enough to be trusted (glare, dust, angle). **How to test:** collect 200 real installer label photos, measure read accuracy; <90% clean-read = rework the capture UX.
3. **Assumption:** A utility-format library of the top ~10 utilities covers enough of a beachhead territory to sell. **How to test:** map which utilities the target installer list actually works in; confirm concentration.
4. **Assumption:** The value is recurring, not one-and-done per project. **How to test:** confirm installers see it as ongoing insurance/throughput, not a per-job purchase — check willingness for a monthly plan vs per-project.

### Risk flags

1. **Platform dependency:** utility interconnection portals and manufacturer registration flows can change formats without notice — the format library needs active maintenance.
2. **Incumbent encroachment:** Payaca/ServiceTitan or Aurora could bolt on close-out; the defense is being the specialist that's already embedded before they bother.
3. **Market timing:** 2025 residential contraction — if installs keep shrinking, the buyer base shrinks with it. Watch the segment.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with a solar close-out / permitting advisor
Time to revenue:        6–10 weeks (pilot to paid)
Capital to launch:      $8–15K
Top 3 assumptions to validate first:
  1. Installers pay for close-out as a standalone tool — 20 priced discovery calls
  2. OCR reads real roof-condition serial labels ≥90% clean — 200-photo test
  3. Top-utility format library covers a sellable beachhead — territory map of target list
Kill criteria:
  - Abandon if <15% of 40 discovery-call installers will commit to a paid pilot
  - Abandon if OCR clean-read on real label photos stays below 85% after two capture-UX iterations
  - Abandon if a funded field-service CRM ships a genuine close-out module before your v1 lands 25 paying installers
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 300 sub-100-employee installers from ENF Solar + Top Contractors lists in 2–3 target utility territories. Book 10 discovery calls.
- **Day 3–4:** On calls, quantify their return trips, PTO-rework days, and warranty callbacks; show a mocked capture→packet flow and name a $149/mo price. Collect 200 real serial-label photos from any willing installer.
- **Day 5:** Decide go/no-go. **Falsifiable bar:** ≥3 of 10 installers verbally commit to a paid pilot at $149/mo **and** OCR clean-reads ≥85% of the 200 collected label photos. Miss either and rework the wedge or kill it.
