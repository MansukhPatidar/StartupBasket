---
title: "FirstPass — pre-submission screen for solar installers"
slug: solar-interconnection-prescreen
date: 2026-06-09
category: CleanTech / US Residential Solar Installers
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Catches the plan-set vs. cut-sheet vs. utility-form mismatches that bounce 1-in-5 solar permits — before you hit submit."
tags:
  vertical: CleanTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Solar, Workflow-automation]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# FirstPass

## 1. One-liner

Catches the plan-set vs. cut-sheet vs. utility-form mismatches that bounce 1-in-5 solar permits — before you hit submit.

## 2. Trend signal — why now?

Three things converged in the last 18 months. First, the paperwork got stricter: NEM 3.0 and the battery-storage wave forced new single-line-diagram and interconnection-form requirements, and utilities turned nitpicky — reviewers now reject applications over a model-number format or a breaker size on the one-line that doesn't match the OCPD calc. Industry reporting in 2026 says **over 90% of interconnection applications contain errors requiring revision**, and budget plan-set providers run **first-pass approval below 80%** while top engineering teams hold **96–99%**. Second, every rejection is expensive and slow: a single permit rejection **costs most US installers $2,000–$5,000**, and each resubmission **adds two to four weeks**. Third, money is pouring into solar software — the category was **~$7.4B in 2025 heading to ~$19.8B by 2034 (11.6% CAGR)**, Aurora Solar has raised **$523M**, and GridUnity is automating the *utility* side of interconnection for PG&E and others. Nobody is selling the boring pre-submission consistency check to the *installer*.

The tell: the #1 documented cause of rejection isn't a hard engineering problem — it's **data that doesn't agree across three documents** (the plan set, the equipment cut sheets, and the utility/AHJ application form). System size, inverter model, conductor sizes, OCPD/breaker ratings, NEC code edition. That's an extraction-and-reconciliation job, which is exactly what cheap multimodal models got good at in the last year.

Provenance:
  - Signal 1 (demand): "over 90% of interconnection applications in 2026 contain errors requiring revision"; budget providers <80% first-pass vs. 96–99% for top teams; a rejection costs $2,000–$5,000 and adds 2–4 weeks — https://energyscaperenewables.com/post/solar-permit-first-pass-approval/ and https://uspowersolar.com/blog/sce-solar-pto-delays-what-to-do-while-waiting — 2026
  - Signal 2 (feasibility): the dominant rejection cause is data mismatch *between* the plan set, cut sheets, and interconnection form (system size, OCPD, inverter model, conductor sizes) — a cross-document extraction/reconciliation task — https://energyscaperenewables.com/post/nem-3-0-plan-set-requirements-california-solar-installers/ and https://energyscaperenewables.com/post/solar-permit-rejected-incomplete-electrical-diagrams/ — 2026
  - Signal 3 (economic): solar software market ~$7.4B (2025) → ~$19.8B (2034) at 11.6% CAGR; Aurora Solar raised $523M; GridUnity sells interconnection automation to utilities (not installers) — https://www.greenlancer.com/post/choosing-solar-panel-design-software and https://www.energy.gov/cmei/success-stories/articles/eere-success-story-solar-software-platform-fast-tracks-grid — 2026
  Category: Tech-unlock

## 3. The opportunity

The solar permitting stack is split into two camps, and there's a $2,000–5,000-per-job gap between them.

On one side: **design and plan-set shops** — Aurora, OpenSolar, GreenLancer, PermitDesign. They *produce* the drawings. They are structurally the wrong party to QA their own output against a utility form, and they bill per plan set, so a high-revision business isn't their problem to fix. On the other side: **GridUnity-style platforms** that automate the *utility's* grid-impact study. They sell to PG&E, not to the 30-installs-a-month shop in Fresno.

Nobody owns the **last mile before "submit"** — the moment an installer's permit coordinator is about to upload a package to an AHJ portal or a utility interconnection portal and has no cheap way to know whether the breaker size on the one-line matches the OCPD calc, whether the inverter model on the form matches the cut sheet, or whether the NEC edition is the one this jurisdiction adopted. Today that check is a human eyeballing three PDFs, or paying a premium engineering shop to do it implicitly. AI can collapse that 30–60 minute manual cross-check into a 2-minute scan with a fix list — and unlike the design shops, a pure checker has no incentive to wave its own work through.

## 4. Target market

- **Primary customer:** The owner or permit/interconnection coordinator at a **small-to-mid US residential solar installer** — roughly 5–50 installs/month, no in-house PE or dedicated permitting engineer, currently using budget plan-set shops and living below the 80% first-pass line.
- **Why they buy:** In their words, the pain is "the utility kicked it back again over a stupid mismatch and now we've lost three weeks and the crew is rescheduled." Every kickback is $2K–5K and a customer whose confidence is eroding while they wait. First-pass rate is the metric that quietly controls their cash conversion cycle.
- **Rough TAM reasoning:** The US has on the order of ~10,000 active solar contractors; even the long tail of a few thousand small-to-mid residential shops doing dozens of permit packages a month is a deep enough vein. At $300–600/mo per shop, a few thousand shops is a $10–20M ARR ceiling — comfortably past $5M without needing the majors.
- **Why now for them:** NEM 3.0 + battery attach rates raised the documentation bar in 2024–2025, utilities got stricter, and interconnection queues are at record length — so the cost of a *self-inflicted* revision (the kind that's 100% avoidable) is more infuriating than ever.

## 5. Product sketch (MVP)

- Upload a permit package: plan set PDF, equipment cut sheets, and the target utility/AHJ interconnection or permit application (or fill the form in-app).
- **Cross-document consistency check:** flags every mismatch across plan set ↔ cut sheets ↔ application — system size (DC/AC), inverter make/model, module make/model and count, conductor sizes, OCPD/breaker ratings, disconnect ratings, point of interconnection.
- **NEC + jurisdiction check:** flags the wrong NEC code edition for the selected AHJ, common 690.8 conductor-sizing issues, missing structural-calc or title-block items.
- **Utility-specific rule pack:** for the top high-volume utilities (PG&E, SCE, SDG&E, Con Ed, PSEG, Duke, etc.), checks the format quirks that get apps bounced — model-number formatting, required attachments, signature blocks.
- A plain-English **fix list** ranked by "this will get you rejected" vs. "nice to have," each tied to the page/field it came from.
- A **first-pass scorecard** per package and a running first-pass-rate dashboard across the shop's jobs.
- Export a clean, reconciled submission packet ready to upload.

## 6. AI angle — what's load-bearing

Remove the AI and there's no product. The core job is reading heterogeneous, badly-scanned PDFs — hand-marked plan sets, manufacturer cut sheets in a dozen layouts, and utility forms — and **extracting the same ~15 electrical facts from each, then reconciling them**. That's multimodal extraction plus structured reconciliation, and it only became cheap and reliable enough to trust in the last year. The rule-checking layer (NEC edition, OCPD math, utility format quirks) is deterministic and rides on top of the extraction. The AI isn't a chatbot bolted on a form — it's the thing that turns three unstructured documents into one comparable table. No extraction, no check, no product.

## 7. Localization angle (if any)

N/A — this is a US play, and the "localization" is *jurisdictional*, not national. The moat-relevant local quirks are the **20,000 AHJs and the top ~50 high-volume utilities**, each with its own adopted NEC edition, form format, and pet rejection reasons. Going deep on the handful of utilities that cover most residential volume (California IOUs first, given NEM 3.0 pain) is the wedge. International expansion isn't the move; utility-by-utility depth is.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered SaaS by package volume. Starter **$199/mo** (up to ~20 checks), Pro **$499/mo** (up to ~75 checks), plus **$15–25/check** overage. Per-check pricing is trivially justified against a $2,000–5,000 rejection.
- **ACV:** ~$4,500/yr blended (most paying shops land on the $300–500/mo band).
- **Rough math to $1M ARR:** ~220 shops × ~$4,500/yr ≈ $1.0M. That's a single-digit % of the small-to-mid residential installer base.
- **Rough math to $5M ARR:** ~900–1,100 paying shops, OR the same ~500 shops plus a per-check API sold to the plan-set/design platforms who'd rather embed a checker than build one. A "powered-by-FirstPass first-pass guarantee" white-label to one mid-size design shop alone could be a six-figure line.
- **Expansion path:** start at QA-only; expand into auto-correcting the form, then into a managed "we'll get it to 95% first-pass or it's free" tier, then API/embed revenue. ACV grows with check volume as the shop grows and as battery/commercial packages (higher value, more revision-prone) get added.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the installer directories** (EnergySage installer pages, state licensing boards, NABCEP-certified contractor lists, SolarReviews company pages). Filter to residential shops in **California first** — NEM 3.0 made their pain acute and their utilities (PG&E/SCE/SDG&E) are the nitpickiest. Send each a 90-second Loom: take *their own* recent public permit-rejection-prone setup and show the checker catching a mismatch. Personalized teardown beats a generic demo; aim for a 5% reply rate on 1,500 targeted emails.
- **Permit coordinators hang out in the trade forums and groups** — r/solar, the solar installer Facebook/Slack groups, DIYSolarForum, and NABCEP communities. Post a free "first-pass scorecard" tool (upload one package, get the rejection-risk list free) as the top-of-funnel lead magnet; the free scan is the demo.
- **Channel through the budget plan-set shops' own customers:** the shops with <80% first-pass have angry customers. Run a "bring your last 5 rejections, we'll tell you why" audit offer — converts the most pained installers directly.
- **Distributor / aftermarket angle:** sponsor a session at a regional solar contractor meetup or RE+ regional event where small installers actually show up, and demo live against a volunteer's real package.

## 10. Build complexity — justification

**Medium.** The web app, uploads, dashboard, and rule engine are standard off-the-shelf work. The two real efforts are (a) reliable multimodal extraction from messy plan-set/cut-sheet/utility-form PDFs — solvable with current models plus a verification pass, but it needs honest accuracy testing — and (b) **building the utility/AHJ rule packs**, which is grindy domain work: encoding the top ~25 utilities' format quirks and NEC editions. That's a domain-expert-plus-engineer effort, ~3–4 months to a credible v1 covering California IOUs and a dozen common AHJs, then expand utility-by-utility.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | QA/advisory tool; no PE stamp claim, no regulated filing. |
| Ethical — no harm / dark patterns | ✅ | Reduces rework and grid-connection delay; aligned incentives. |
| Market exists (evidence above) | ✅ | 90%+ apps need revision; $2K–5K/rejection; $7.4B software market. |
| 1–5 person team can build this | ✅ | Engineer + solar-permitting domain expert. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf stack + model API; main cost is domain time. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | $2K–5K + 2–4 weeks per avoidable rejection, felt on a real share of jobs. Hair-on-fire for shops under 80% first-pass; merely painful for the disciplined ones. |
| Demand evidence | 15 | 12/15 | Strong, multi-source industry signal on rejection rates and costs; weaker on *verbatim installer* quotes (Reddit poorly indexed). Incumbent spend on adjacent design tools proves willingness to pay. |
| Build feasibility | 15 | 11/15 | Extraction is doable now but needs accuracy proof; utility rule-packs are grindy. 3–4 months, not 6 weeks. |
| Distribution clarity | 15 | 11/15 | Named lists (EnergySage, NABCEP, licensing boards), free-scorecard lead magnet, clear CA-first beachhead. Conversion math is plausible, not yet proven. |
| Revenue mechanics | 15 | 11/15 | Pricing trivially justified vs. rejection cost; ACV and customer counts to $1–5M are sane. Churn risk if a shop's first-pass is already fine. |
| Time to first revenue | 10 | 8/10 | Free-scan funnel + acute CA pain → paid pilots in 6–8 weeks plausible. |
| Defensibility | 10 | 6/10 | Soft moat: accumulated utility/AHJ rule packs + rejection-reason dataset compound; design incumbents could bolt this on, but won't QA their own work eagerly. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs an engineer who can wrangle multimodal extraction *and* someone who actually knows solar permitting/interconnection cold (ex-permit-coordinator, ex-EPC, ex-plan-set shop). Without the domain half, the rule packs will be wrong and trust evaporates on the first bad flag.

### Key assumptions to validate (3–5)

1. **Assumption:** Extraction is accurate enough that the fix list is trusted, not ignored. **How to test:** Run 50 real historical packages (with known rejection outcomes) through the checker; measure how many real rejections it would have caught and its false-positive rate.
2. **Assumption:** Small/mid installers will pay $300–500/mo for a checker rather than just buying a better plan set. **How to test:** 30 cold calls + 10 paid pilots; track conversion and stated willingness-to-pay against their current first-pass rate.
3. **Assumption:** Utility/AHJ rule packs for the top ~25 high-volume utilities cover enough of a shop's volume to matter. **How to test:** For 10 target shops, map what % of their last 50 packages went to utilities/AHJs we'd cover at launch.

### Risk flags

1. **Incumbent encroachment:** A design platform (Aurora/OpenSolar/GreenLancer) bolts a consistency-check on as a feature. Mitigant: they're conflicted QA'ing their own output, and a neutral checker can sell *to* them as API.
2. **Market timing / policy:** Solar install volume is sensitive to ITC/NEM policy. A federal incentive cut could shrink the install base — though it would also raise the cost-sensitivity that sells this tool.
3. **Trust / liability:** A missed mismatch that still gets rejected erodes trust fast. Position as a risk-reducer with a scorecard, never a guarantee, until accuracy is proven; be explicit it's advisory, not a PE stamp.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + a solar-permitting domain expert (ex-permit coordinator / ex-EPC)
Time to revenue:        6–10 weeks (CA-first paid pilots off a free-scan funnel)
Capital to launch:      $15–30K ($ for model API + 3–4 months of two people's time)
Top 3 assumptions to validate first:
  1. Extraction accuracy on 50 real historical packages — would it have caught the real rejections? (measure catch rate + false positives)
  2. Willingness-to-pay $300–500/mo from sub-80%-first-pass shops — 10 paid pilots
  3. Top-25-utility rule packs cover enough of a target shop's package volume to be worth it — map last 50 packages for 10 shops
Kill criteria:
  - Abandon if the checker catches <70% of real historical rejections, or false-positive rate is high enough that pilots ignore the fix list
  - Abandon if <15% of 50 cold-outreach CA installers agree to a paid pilot
  - Abandon if a design incumbent ships an equivalent free embedded checker before v1 and locks the channel
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 50 real permit/interconnection packages with known outcomes (beg them off 3–5 friendly installers or a plan-set shop). Hand-tag which were rejected and why.
- **Day 3–4:** Wire a throwaway extraction + reconciliation prototype over those 50 packages. Measure: of the known rejections caused by cross-document mismatch / NEC edition, how many would it have flagged? What's the false-positive rate on the clean ones?
- **Day 5:** Decide go / no-go on a **falsifiable** bar: **GO only if it would have caught ≥70% of the real avoidable rejections with a tolerable false-positive rate, AND ≥3 of 10 installers shown the result say they'd pay for it.** Anything less, the extraction isn't trustworthy enough yet — revisit when models improve or narrow to a single utility.
