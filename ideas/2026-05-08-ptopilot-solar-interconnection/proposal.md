---
title: PTOPilot — PTO chase cockpit for US solar installers
slug: ptopilot-solar-interconnection
date: 2026-05-08
category: CleanTech SaaS / US Small Residential Solar Installers (PG&E, SCE, SDG&E first)
complexity: Medium
score: 81
verdict: STRONG GO
confidence: Medium
oneLiner: PTOPilot preflights solar interconnection packages and chases PG&E/SCE/SDG&E for PTO so small installers get paid faster.
tags:
  vertical: CleanTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Workflow-automation, Cash-flow]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 8
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# PTOPilot — PTO chase cockpit for US solar installers

## 1. One-liner

PTOPilot preflights solar interconnection packages and chases PG&E/SCE/SDG&E for PTO so small installers get paid faster.

## 2. Trend signal — why now?

Five things converged in early 2026 to make this a hair-on-fire problem for small US residential solar installers — the people who put 4.6 GW on rooftops in 2025 and lost ~1,000 California jobs after NEM 3.0.

**The PTO bottleneck got political.** In March 2026, California's Joint Legislative Audit Committee voted unanimously (13–0) to launch a state audit of CPUC's oversight of utility interconnection delays after eighteen state legislators sent a formal letter calling out missed deadlines. CPUC compliance data shows utilities meet some Rule 21 review steps only **27–45% of the time**. SCE quotes "10 business days" but installers report 8–12 weeks for solar+battery. ([Power Wattz Solar](https://www.pandwsolar.com/sce-pto-delays-solar-storage-interconnection-guide/))

**The April 14, 2026 NEM 2.0 deadline created a backlog surge.** Every legacy NEM 2 application not at PTO by April 14 lost grandfathered rates — last installs are still draining the utility "Your Projects" portal in May 2026. ([SolarReviews NEM 3.0 explainer](https://www.solarreviews.com/blog/california-nem-3-net-billing))

**90% of interconnection applications contain errors that trigger revision cycles.** Each rejection resets the clock by weeks. The errors aren't exotic — they're documented and avoidable: AC size mismatches between application form and SLD, inverter model not on the utility's approved list, mislabeled "PV AC Disconnect" instead of required "Utility AC Disconnect," outdated SLD templates that don't reflect UL 1741 SB, expired insurance certificates, customer name not matching utility account name. ([GreenLancer interconnection requirements guide](https://www.greenlancer.com/post/solar-interconnection-application-requirements))

**PTO delay = installer bankruptcy.** Lender milestones structure final payment at M3 (PTO). If a job doesn't reach PTO inside the 90–150 day clawback window, the finance company yanks back M1 and M2 funds — installer has paid 100% of the install cost and now sits at $0 revenue. Per Sunvoy: "waiting for PTO or up to 30 days post-PTO is brutal for cash flow and can tank a business." Multiple national solar installers went insolvent in 2024–25 with PTO-cycle cash crunches as a contributing cause. ([Sunvoy](https://sunvoy.com/blog/solar-cash-flow), [SolarInsure bankruptcy list](https://www.solarinsure.com/the-complete-list-of-solar-bankruptcies-and-business-closures))

**The vision-AI unlock just landed.** As of 2026 the cheap multimodal models (GPT-5o, Claude Opus 4.7, Gemini 2.5 Pro) can read a PDF single-line diagram, a spec sheet PDF, a contract, and a utility application form — and reliably tell you whether the inverter model on the SLD matches the spec sheet matches the contract matches the installed hardware. That's the central preflight check the human admin is doing today, badly, at $25–40/hr. ([Aurora 2026 Snapshot](https://aurorasolar.com/resources/2026-aurora-solar-snapshot/))

```
Provenance:
  - Signal 1 (Demand): 90% of interconnection applications contain errors that trigger revision cycles; SCE PTO running 8–12 weeks for solar+battery vs 10-day SLA; CPUC compliance as low as 27–45% on Rule 21 review steps — Power Wattz Solar — observed 2026-05-08
    https://www.pandwsolar.com/sce-pto-delays-solar-storage-interconnection-guide/
  - Signal 2 (Economic): California Joint Legislative Audit Committee voted 13–0 in March 2026 to audit CPUC interconnection oversight after 18 legislators demanded action; April 14 2026 NEM 2 deadline drove a backlog surge — installer side — pv-magazine USA / SolarReviews — observed 2026-05-08
    https://www.solarreviews.com/blog/california-nem-3-net-billing
  - Signal 3 (Cash-flow / Financial Demand): PTO milestone is M3 lender payment; clawback windows of 90–150 days; "waiting for PTO is brutal for cash flow and can tank a business"; multiple installer bankruptcies attributed in part to PTO delays — Sunvoy + SolarInsure — observed 2026-05-08
    https://sunvoy.com/blog/solar-cash-flow
    https://www.solarinsure.com/the-complete-list-of-solar-bankruptcies-and-business-closures
  - Signal 4 (Feasibility): Cheap multimodal models (Aurora AI 3D from imagery; GPT-5o / Opus 4.7 / Gemini 2.5 Pro PDF reasoning) can now reliably cross-check SLD vs spec sheet vs contract — Aurora 2026 Snapshot — observed 2026-05-08
    https://aurorasolar.com/resources/2026-aurora-solar-snapshot/
  Category: Workflow automation (with a Tech-unlock layer — vision-LLM cross-document diff is the wedge)
```

## 3. The opportunity

The wedge is "the boring middle of a solar install." The market has tooling on both ends:

- **Design / sales / proposal:** Aurora ($159+/mo), Pylon, Sunbase, Solargraf
- **Local AHJ permit:** SolarAPP+ (free, govt-backed, only ~25% of jurisdictions)
- **Field ops:** Scoop, ServiceTitan
- **Utility-side workflow:** GridUnity, Pearl Street Technologies, Nira Energy — all selling to *utilities* (SCE, PG&E, Hawaiian Electric), not installers
- **Outsourced engineering review:** Greenlancer ($150–400 per plan-set, human turnaround)

Nobody owns the **installer-side utility interconnection package + PTO chase**. That work today is a back-office admin in QuickBooks + a shared Google Drive folder + checking PG&E "Your Projects" in a browser tab. Aurora doesn't read PG&E's portal. Greenlancer is humans-in-the-loop and doesn't chase status. SolarAPP+ is the AHJ side and PG&E doesn't use it for interconnection.

PTOPilot is the wedge product that (a) preflight-checks the package the installer is about to submit, (b) submits via portal automation, and (c) chases status daily and parses any deficiency notice into a fix-it ticket the admin can close in minutes.

The 10× claim: every install that PTOs 3 weeks faster is 3 weeks of cash unlocked, plus avoidance of the clawback cliff. At a $30K average residential install, an installer doing 20/mo who shaves 3 weeks off their PTO cycle pulls forward ~$450K in receivables. The tool pays for itself the first project.

## 4. Target market

- **Primary customer:** US residential solar installation companies, 1–25 employees, $1M–$15M annual revenue, 5–50 installs/month. Owner-operator or owner + small admin/PM team. C-46 or C-10 license in California; equivalent state license elsewhere.
- **Why they buy:** "Every PTO that slips is payroll I can't make. I just spent four hours rebuilding a SLD because PG&E rejected the package — for an inverter model number suffix." Per Sunvoy: "the odds are decent that you check your bank account before you perform any bodily functions each morning."
- **TAM reasoning:** 11,177 solar installation businesses in the US (SEIA + workforce data, 2025). California alone has 500+ licensed active installer companies. Conservatively, 4,000 small/mid US installers do residential interconnection at >5 installs/month. At $400/mo blended, US TAM ≈ $19M ARR floor; with multi-utility expansion, plus add-ons (NEM 3 export-mode docs, battery storage, commercial), realistic SAM is $50–80M.
- **Why now for them:** April 14 2026 deadline drained NEM 2 backlog — they're now living in NEM 3 land where every project is battery-paired (more documentation, more rejection points, longer review). The CPUC audit is making utilities more procedural, not less. Federal solar tax credit clarification ties ITC eligibility to PTO, raising the stakes. ([Infinity Energy on ITC vs PTO](https://thenewutility.com/federal-solar-tax-credit-clarity-pto-vs-commissioning/))

## 5. Product sketch (MVP)

- **One-page Project Vault** — Drop the proposal PDF, signed contract, SLD, site plan, inverter & module spec sheets, customer authorization. PTOPilot OCR-parses every doc into a structured project record.
- **Preflight Inspector** — Vision-LLM diffs every cross-document field that utilities reject for: AC size match (form ↔ SLD), inverter model+revision (SLD ↔ spec sheet ↔ install photos), AC disconnect labeling (SLD ↔ photos), inverter on utility approved equipment list (live check), site plan completeness (array ↔ MSP ↔ AC disconnect ↔ meter), SLD template version (current UL 1741 SB), insurance currency, customer-name vs utility-account match. Each fail is a single-sentence fix instruction.
- **One-click submit** — Preflight green → submit to PG&E "Your Projects" / SCE PowerClerk / SDG&E IConnect via authenticated browser automation. Saves the confirmation number and timestamp to the project.
- **PTO Chase Bot** — Daily authenticated check on every open project's portal status. Parses any deficiency notice, alerts the admin in Slack/SMS, suggests the fix, and queues a one-click resubmission.
- **Cash-clock dashboard** — For every project, show days-since-M1, lender clawback deadline, PTO days remaining, and projected dollars-at-risk. Sorted by "fix this Tuesday or you lose $42K Friday."
- **NEM 3 export-control kit** — Pre-built compliant SLD annotations and operating-mode docs for the top 8 hybrid inverters (Tesla, Enphase IQ8, SolarEdge, Franklin, Sol-Ark, EG4, Generac PWRcell, Schneider). Drag-and-drop into the SLD.
- **Template hygiene watchdog** — Auto-pulls each utility's current SLD/site-plan template and flags any project still using a deprecated version.
- **Lender / finance handshake** — Webhook to Sunlight, GoodLeap, Mosaic, Sunnova: as soon as PTO is detected, notify the lender within minutes to trigger M3 funds.

## 6. AI angle — what's load-bearing

Two AI workloads carry the product, and removing either kills it.

**Cross-document vision diff.** The job a utility reviewer does is "compare these 4–6 PDFs for inconsistency." That's vision + reasoning. Aurora has proven 2026-era multimodals can read SLDs, spec sheets, and proposals well enough to do code-compliant designs. PTOPilot uses the same primitive narrowly — same model class, but pointed at "match these fields exactly" instead of "design a PV system." Without it, this is a $40/hr admin clicking through PDFs. With it, it's a 30-second preflight that beats human accuracy.

**Deficiency-notice parser.** Utility deficiency emails / portal notices are messy semi-structured prose ("rev'd SLD missing utility-side AC disconnect per Rule 21 §H.2.b"). LLMs collapse these to structured remediation steps the admin can act on without reading the rule book. Removing the AI here makes the chase bot a glorified RSS reader.

The portal automation, lender webhooks, and dashboard are commodity. The AI is the wedge.

## 7. Localization angle (if any)

US-only at v1. Each utility has its own portal (PG&E "Your Projects," SCE PowerClerk, SDG&E IConnect, Eversource, ConEd, Hawaiian Electric, Oncor, etc.) — that's a long localization tail of *utilities*, not languages. Sequence:

1. **California IOUs** (PG&E, SCE, SDG&E) — covers 60%+ of US residential interconnection volume that hurts. Single-state launch.
2. **Maryland + Massachusetts** — pv-magazine documented similar permitting/interconnection bottlenecks; high SREC value makes PTO timing existentially important.
3. **Hawaii (Hawaiian Electric)** — 10–14 month interconnection norms, biggest delta, highest willingness-to-pay.
4. **Texas (Oncor, CenterPoint), New York (ConEd, NYSEG), Arizona (APS, SRP)** — phase 2.

International (Australia, UK, Germany) is a 2027 question, not a launch question. AU has its own DNSP fragmentation; Pylon already plays there. Germany BAFA / KfW is an adjacent but different opportunity (heat pumps, not solar).

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by install volume + utility coverage.
  - **Solo** ($199/mo) — up to 5 active interconnection projects, single utility, 1 admin seat
  - **Crew** ($499/mo) — up to 25 active projects, 3 utilities, 5 seats, lender webhooks
  - **Fleet** ($1,499/mo) — unlimited projects, all utilities, multi-office, API
  - **Per-PTO success fee** ($49/PTO) — optional add-on, charged only when PTO lands; sells the value proposition crisply
- **ACV:** Blended ~$5,800/yr ($480/mo + occasional success fees). Target Crew tier as the modal customer.
- **$1M ARR math:** 175 customers × $480/mo × 12 = $1.0M. Achievable from a single state (CA has 500+ licensed installer companies).
- **$5M ARR math:** 850 customers across CA + MA + MD + HI + TX. Requires multi-utility coverage and channel partnerships with 2–3 lenders. Five years of moderate-pace expansion, not a moonshot.
- **Expansion path:** Per-PTO success fee → battery storage interconnection module → commercial interconnection (different paperwork, larger ACV) → O&M and PTO post-mortem analytics → grant/SREC paperwork (MA, NJ, IL).

## 9. Go-to-market wedge — first 100 customers

1. **Scrape the CSLB C-46 + C-10 PV registry** (public). Filter to active licenses with workers' comp insurance and 1–25 employees by cross-referencing CA EDD. That's ~700 California targets. Send each owner a Loom showing PTOPilot ingesting one of *their own past rejected applications* (pulled from the public CPUC interconnection complaint dataset) and producing the corrected version in 30 seconds. Expect 4–6% reply rate → ~30 demos → ~12 paid pilots.
2. **Solar Power World 2026 Top Contractors list** — known list of mid-tier installers, mostly small-to-mid. Direct LinkedIn DMs to owners. ~150 targets, ~10% reply rate. Higher-ACV (Crew tier) prospects.
3. **Lender channel** — Sunlight Financial / GoodLeap / Mosaic loan officers see PTO delays directly (delayed M3 = delayed loan close). Pitch the lenders on a co-branded "PTO accelerator" referral. They get fewer clawbacks; we get installer intros. 3 lender deals = 200+ warm installer leads.
4. **Solar subreddit + r/solarDIY + Solar Power World comments** — content seeded around "the PG&E rejection reasons that cost you the most money" with a free preflight calculator. Funnels to a free-tier signup; converts via friction-of-active-projects.
5. **Distribution events** — Intersolar North America (Jan, San Diego) and RE+ (Sept, Vegas). Booth + free preflight clinic. Aurora and Greenlancer sponsor; we crash the parking lot with a $99/mo launch tier for booth scans.

100 customers in 6 months is realistic from California alone if the preflight demo lands.

## 10. Build complexity — justification

**Medium.** Two non-trivial integration surfaces — utility portals (PG&E "Your Projects," SCE PowerClerk, SDG&E IConnect) require authenticated browser automation with reliable status parsing, and each has a different schema. Each utility integration is ~3–5 weeks. v1 with PG&E only is 8–10 weeks for a 2-person team; SCE+SDG&E adds another 6–8 weeks. The vision-AI preflight pipeline itself is 3–4 weeks against existing multimodals. Lender webhooks and dashboard are commodity. Total: 4–5 months to a defensible v1 covering CA IOUs.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Submitting an installer's own interconnection paperwork via portal is a service the installer already pays admins to do — no licensing question. Browser automation against utility portals is in the gray zone *only if* it scrapes data we're not authorized to see; with installer-provided creds it's the same as a remote VA. |
| Ethical — no harm / dark patterns | ✅ | We help installers actually deserve the PTO they're submitting for. We don't help cheat the review — we help pass it cleanly the first time. |
| Market exists (evidence above) | ✅ | 11K installers, 90% rejection rate, $242M software TAM, audit-level political pressure. |
| 1–5 person team can build this | ✅ | 2 engineers + 1 ops/domain person ships v1 in 4–5 months. |
| Launchable with <$50K / ₹40L | ✅ | Vision API + Stripe + portal automation infra. ~$15–25K to first revenue. |

All five pass. Proceed to scoring.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17/20** | Hair-on-fire. Cash flow blocker. Documented installer bankruptcies. Solo lose-payroll-this-month pain. |
| Demand evidence | 15 | **13/15** | 90% rejection rate, CPUC audit, NEM 2 deadline surge, multiple incumbent design tools (=existing willingness to pay), public industry-rep complaints. Not a "would you pay?" — it's "which tier?" |
| Build feasibility | 15 | **11/15** | 4–5 months for 2-person team. Utility portal automation is the gnarly bit; vision preflight is straightforward. Each new utility = 3–5 weeks. |
| Distribution clarity | 15 | **12/15** | Public CSLB registry + Top Contractors list + lender channel + 3 named conferences. Outreach math is concrete. Conversion is the only unknown. |
| Revenue mechanics | 15 | **12/15** | $200–$1500/mo SaaS in a market that already pays $159–500/mo for Aurora and $100–400 per Greenlancer plan-set. ACV math reaches $1M with 175 customers — single state. |
| Time to first revenue | 10 | **8/10** | First paid pilot inside 60 days post-MVP via direct outreach. Possibly pre-sell pilot slots before MVP using the Loom-of-their-own-rejection demo. |
| Defensibility | 10 | **8/10** | Soft moat compounds: per-utility portal-automation library + per-utility deficiency taxonomy + lender integrations + project-data corpus. A clone has to rebuild the utility integrations one at a time. |
| **Total** | **100** | **81/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (browser automation reliability + vision-LLM pipeline matter), `domain-expertise-required` (someone on the team needs to have lived through interconnection paperwork — a former installer ops lead or a recovering Aurora/Greenlancer operator).

### Key assumptions to validate (3–5)

1. **Assumption:** The cross-document vision preflight catches ≥80% of the errors that today get rejected by utilities.
   **How to test:** Get 50 historical rejected interconnection packages from 5 friendly installers. Run the preflight. Score recall on documented deficiency notices. If we miss >25%, the wedge fails.
2. **Assumption:** Small installers (5–50 installs/mo) will pay $400–500/mo for this — not just want it free.
   **How to test:** 30 paid intros (NOT free). Charge $499/mo for the first 90 days as a "pilot tier" before the product is fully built. If <10 of 30 sign, pricing or pain is wrong.
3. **Assumption:** PG&E "Your Projects" portal automation is reliable enough to ship — they don't change layout monthly, and they don't actively block automated logins from the installer's own credentials.
   **How to test:** 2-week spike. Build status-check + submit. Run it for 100 cycles across 10 test projects. If it breaks more than 5%, the chase-bot half of the product is fragile.
4. **Assumption:** Lender clawback math is real and installers feel the pain at the dollar level claimed.
   **How to test:** 10 installer interviews. Ask explicitly: "Have you been clawed back in the last 12 months? How much?" If <5/10 say yes, the cash-clock framing is overcooked.
5. **Assumption:** Greenlancer / Aurora won't ship a competing preflight in the next 12 months.
   **How to test:** Read their roadmaps and product updates monthly. Watch job postings (Aurora hiring "interconnection" engineers = warning shot). If they ship, our wedge survives only on speed and lender integrations.

### Risk flags

1. **Platform dependency:** Utility portal layouts can change without notice. PG&E could (in theory) start blocking automation. Mitigation: keep the portal layer behind an adapter, support manual upload as a fallback, build relationships with utility innovation teams.
2. **Regulatory drift:** CPUC audit could push utilities into a unified API (good for us — easier integration; bad for us — commoditizes the wedge). Net is probably good, but timing matters.
3. **Incumbent encroachment:** Aurora is the most plausible threat — they own the design surface. If they ship "Aurora Interconnection," we get squeezed unless we have lender integrations + PG&E/SCE/SDG&E coverage they don't.
4. **Solar market contraction:** California residential install volume already dropped 2% in 2025 post-NEM 3. If volume keeps falling, ACV math gets harder. Mitigation: per-PTO success fee scales with pain regardless of volume; commercial expansion if residential weakens further.
5. **Lender consolidation risk:** If GoodLeap or Sunlight goes under (one nearly did in 2024), the clawback narrative loses a referral channel — but pain to installers gets worse, not better.

## 14. Structured verdict

```
Score:                  81/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       2 technical co-founders + 1 domain advisor (ex-Aurora / ex-Greenlancer / ex-installer ops lead). California-based for first-100 customer in-person.
Time to revenue:        60–90 days post-MVP. Pre-sell pilot in week 1 via Loom-of-their-own-rejection.
Capital to launch:      $20–35K (vision-API spend, portal infra, Stripe, basic ops).
Top 3 assumptions to validate first:
  1. Preflight catches ≥80% of historical rejection reasons — test on 50 real rejected packages from 5 friendly installers.
  2. 10/30 small installers will pay $499/mo for a pilot tier before product is fully built.
  3. PG&E "Your Projects" portal automation holds up at 95%+ reliability over a 2-week 100-cycle spike.
Kill criteria:
  - Abandon if preflight recall <70% on the 50-package validation set.
  - Abandon if <5/30 outreach targets convert to paid pilot at $499/mo.
  - Abandon if Aurora ships "Aurora Interconnection" with PG&E/SCE/SDG&E coverage before our v1.
  - Abandon if California residential install volume drops >15% YoY (market is shrinking faster than we can capture share).
```

## 15. Next step — 1-week validation sprint

If I had one week and $0 to prove this is real before committing, here's the sprint:

- **Day 1–2:** Pull the public CSLB C-46 registry. Pick 30 small CA installer companies (5–25 employees). Cross-reference public CPUC interconnection complaint dataset and Solar Power World contractor list to find ones with documented PTO-delay exposure.
- **Day 2–3:** Build a one-page demo: drop in a publicly-available rejected SLD + spec sheet, manually run a multimodal model (Claude / GPT) with a hardcoded prompt to find the field mismatches. Record a 90-second Loom for each of 10 specific installers showing *their style* of rejection getting auto-fixed.
- **Day 3–4:** Send the 30 personalized Looms. Pitch a $499/mo 90-day pilot, charged on day 1, refundable if we don't ship a working preflight in 30 days.
- **Day 5:** Phone interviews with anyone who replies. Ask explicitly: clawback exposure last 12 months, average PTO cycle in days, current admin hours/week on interconnection paperwork, current SaaS stack and spend.
- **Decision rule:** GO if ≥6/30 reply, ≥3/30 sign a pilot at $499/mo, and ≥5/10 phone interviews confirm clawback exposure ≥$50K in trailing 12 months. Anything below = VALIDATE harder or rework the wedge.

The validation is falsifiable: dollars committed inside a week, or no.
