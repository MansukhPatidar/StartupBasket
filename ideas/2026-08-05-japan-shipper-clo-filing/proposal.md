---
title: "NinushiFiler — CLO report filer for Japan's big shippers"
slug: japan-shipper-clo-filing
date: 2026-08-05
category: Logistics / Japan mid-market shippers (特定荷主, 90K+ tonnes/year)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns scattered dock logs into the waiting-time numbers Japan's new logistics law makes shippers report by October."
tags:
  vertical: Logistics
  model: SaaS
  geography: Japan
  secondary: [Compliance-driven, Japanese-language, AI-agent, Mid-market, Deadline-driven, Workflow-automation]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# NinushiFiler

## 1. One-liner

Turns scattered dock logs into the waiting-time numbers Japan's new logistics law makes shippers report by October.

## 2. Trend signal — why now?

Japan's revised 物流効率化法 (Act on Streamlining Distribution Services) came into full force **1 April 2026**. It creates a new legal category — **特定荷主** ("specified shipper") — covering any shipper handling **90,000 tonnes or more of freight per year**. That's roughly 250 tonnes a day, about 25 ten-tonne trucks.

Roughly **3,200 companies** meet the threshold. They are ~2% of all shippers but move ~50% of Japan's domestic freight ([houmu-pro.com/legalrevision/385](https://houmu-pro.com/legalrevision/385/)).

Being designated triggers three obligations:

1. **Appoint a CLO (物流統括管理者)** — a board-level executive, not a logistics manager. Someone "参画する管理的地位にある者" — in a management position participating in important business decisions.
2. **File a 中長期計画書 (medium-to-long-term plan)** covering three specific levers: truck load factor (積載率), driver waiting time (荷待ち時間), and cargo handling time (荷役時間).
3. **File a 定期報告書 (periodic report)** with per-facility average waiting and handling times.

The deadline is the interesting part. Normally the plan is due end of July. **For FY2026 only, it was pushed to 31 October 2026** — twelve weeks from today. Practitioners advise starting 3–4 months ahead because "現状データの収集・社内調整・物流統括管理者のレビューに相応の時間がかかる" (collecting current data, internal coordination, and CLO review take considerable time). Which means the cohort is scrambling *right now*, and many started late.

Non-compliance escalates: 助言・指導 → 勧告 → **公表 (public naming)** → 命令 → fine. For a listed Japanese manufacturer, being named publicly by a ministry is the part that actually stings.

The measurement requirement is where this gets hard. Shippers must report **average waiting and handling time per facility** — but the truck waits at *their* dock while the clock data sits with the carrier. MLIT's own guidance concedes full measurement is often impossible and permits **sampling**: for each facility, at least five consecutive business days per quarter, outside peak season, covering in principle all trips.

Provenance:
  - Signal 1 (Demand): Revised 物流効率化法 in force 1 Apr 2026; ~3,200 companies designated 特定荷主 at the 90,000-tonne threshold; 中長期計画書 due 31 Oct 2026, 定期報告書 due Jul 2027; escalation ends in public naming and fine — [houmu-pro.com/legalrevision/385](https://houmu-pro.com/legalrevision/385/), [hacobu.jp/blog/archives/3468](https://hacobu.jp/blog/archives/3468) — observed 2026-08-05
  - Signal 2 (Feasibility): MLIT/METI published the official 手引書 and 記載事例集 (worked examples for manufacturing, wholesale, retail, and chain operators, in two maturity tiers) in Mar–Apr 2026, plus the sampling protocol — turning a bespoke consulting deliverable into a templatable, gradeable artifact — [mlit.go.jp/.../001984872.pdf](https://www.mlit.go.jp/seisakutokatsu/freight/content/001984872.pdf), [revised-logistics-act-portal.mlit.go.jp](https://www.revised-logistics-act-portal.mlit.go.jp/information/details/post_18.html) — observed 2026-08-05
  - Signal 3 (Economic): Money already moves for adjacent logistics tooling — Hacobu's MOVO Berth (share-leading berth reservation system) starts at ¥30,000/month per site with 99% retention; consultancies are publishing that manual reporting has hit its limit — [hacobu.jp/movo-berth/price](https://hacobu.jp/movo-berth/price/), [pal-style.co.jp/column/logistics-periodic-report-data-platform](https://www.pal-style.co.jp/column/logistics-periodic-report-data-platform/) — observed 2026-08-05
  Category: Regulatory arbitrage

## 3. The opportunity

There's a clean gap between what exists and what's required.

**What exists:** MLIT publishes blank forms and worked examples. Hacobu sells MOVO Berth, a berth-reservation system — it schedules trucks into dock slots and, as a by-product, knows arrival and departure times. Telematics vendors (SmartDrive, Hacobell) sell fleet tracking. Big-four-adjacent consultancies will write your plan for a consulting fee.

**What's required:** a filled-in 様式第３ and 様式第５ with per-facility measured numbers, defensible methodology, and a narrative that a ministry reviewer accepts.

Nobody sells that. The berth systems solve a *different* problem and only capture trucks that book a slot — at a mid-market shipper's regional DC, plenty of trucks just show up. A ¥30K/month/site berth system across eleven sites is ¥4M/year and a change-management project, sold as dock optimization. The buyer under deadline pressure doesn't want dock optimization. They want the form filed correctly.

The disruption angle isn't "AI beats Hacobu at berth booking." It's that **the compliance artifact has been unbundled from the operational system**. You do not need to digitize your entire dock operation to produce a legally sufficient sampled measurement. MLIT explicitly said sampling is fine. That's a regulator handing you permission to build a much smaller product than the incumbents assume is necessary.

The second gap is who's on the hook. The CLO is a board-level officer who has just been made personally accountable for a domain they've never operated in. They're being asked to sign a plan committing the company to load-factor and waiting-time targets. They need to understand what they're signing and whether the targets are survivable. That's an anxious executive with budget — the best kind of buyer.

## 4. Target market

- **Primary customer:** The logistics or SCM department head at a Japanese manufacturer, wholesaler, or retail chain designated 特定荷主 — 90,000+ tonnes/year, typically ¥20B–500B revenue, 3–30 shipping facilities. The economic buyer is the newly-appointed CLO; the user is the 物流部長 or their deputy who actually assembles the numbers. Excludes the top ~200 (Toyota, Aeon, Suntory) who have consultants and internal teams.
- **Why they buy:** Their data is scattered exactly as the practitioner writeup describes — "物流データは複数の拠点、委託先、配車システム、倉庫管理システム、勤怠データなどに分散しており、これらを毎回Excelやメールで集め、手作業で整える運用は…限界を迎えます." Facilities record differently — some daily, some monthly. Subcontractors use different formats. There's no per-facility waiting-time number anywhere in the company, because until this year nobody was required to produce one.
- **Rough TAM reasoning:** ~3,200 designated shippers. Strip the top 200 who buy consulting and the smallest tail with a single site, and the realistic serviceable base is **~2,000–2,500 companies**. Every one of them has a statutory annual filing obligation that does not go away. At ¥600K/year average that's a ¥1.2–1.5B (~$8–10M) serviceable market — too small for a Japanese enterprise software vendor to chase properly, right-sized for a 2–3 person team.
- **Why now for them:** 31 October 2026 is twelve weeks away and it is a statutory deadline with public naming attached. The 定期報告書 then lands July 2027 with per-facility measured numbers — meaning measurement has to be running by roughly Q4 2026 to have four quarters of sampling. Both clocks are already ticking.

## 5. Product sketch (MVP)

- **Designation check** — enter your freight tonnage by mode and facility; get a clear yes/no on 特定荷主 status and, if yes, your filing calendar with both deadlines.
- **Sampling planner** — pick which facilities, which five-day windows, which quarters, per MLIT's protocol. Outputs a measurement schedule that satisfies the guidance, so the company measures the minimum defensible amount rather than everything.
- **Dock-side capture** — a lightweight tap-in / tap-out capture for the sampling windows. Gate staff or the driver records arrival, unloading start, unloading end. Works on a phone or a tablet at the gate; no integration required to start.
- **Log ingestion** — upload whatever already exists: 運転日報 spreadsheets, WMS exports, carrier-supplied waiting-time records, berth-system CSVs. The product normalizes wildly inconsistent per-facility formats into one schema.
- **Per-facility metrics** — average 荷待ち時間 and 荷役時間 per facility, plus 積載率, computed the way the guidance defines them, with the calculation shown so a reviewer can follow it.
- **Plan drafter** — generates a 中長期計画書 (様式第３) draft: measures, concrete targets, timing, for each of the three levers — grounded in the company's actual measured baseline and patterned on MLIT's published 記載事例集 for their industry type.
- **Report drafter** — generates the 定期報告書 (様式第５) with per-facility figures, subcontractor coordination narrative, and consigned-facility measures.
- **CLO briefing pack** — a plain-Japanese summary for the board-level officer who has to sign: what you're committing to, whether the targets are achievable given the baseline, and where the risk sits.

## 6. AI angle — what's load-bearing

Two places where AI does real work, and one place where it deliberately doesn't.

**Load-bearing #1 — normalizing the mess.** The core input is a pile of inconsistent artifacts: per-facility Excel with different column names and units, handwritten 運転日報 scans, carrier PDFs, WMS exports with different timestamp conventions. One facility logs "待機" in minutes, another logs arrival and start times separately and expects you to subtract, a third only has monthly totals. A document-understanding model that maps arbitrary Japanese logistics spreadsheets and scans into a normalized waiting/handling schema is the product's spine. Without it, this is a data-entry sweatshop and the margins die.

**Load-bearing #2 — drafting a filing that reads like a professional wrote it.** The 中長期計画書 isn't a numeric form; it's a narrative committing to measures, targets, and timing, judged against 判断基準. MLIT published worked examples across four industry types and two maturity tiers. Generating a company-specific draft grounded in that corpus and the firm's measured baseline is exactly what a language model is good at, and it's what a consultant currently charges ¥2–5M to do.

**Where AI stays out:** the compliance determination itself. Whether you're 特定荷主 and what the sampling protocol requires are deterministic rules from the ordinance. Those get coded as rules, not inferred. Getting a designation wrong is unrecoverable trust damage, and a hallucinated threshold would end the company.

Strip the AI and you have a form with an upload box — which is what MLIT already provides free. The AI is what converts "here's a blank 様式第３" into "here's your filled 様式第３."

## 7. Localization angle

This is a Japan-only product and that's the entire point, not a limitation.

- **Language:** Everything is Japanese — the statute, the forms, the guidance, the source spreadsheets, the buyer. Both the document normalization and the drafting must be strong in business Japanese and logistics terminology (荷待ち, 荷役, 積載率, 附帯業務). A generic English product retrofitted with translation will produce filings that read wrong to a ministry reviewer.
- **Regulatory specificity:** The moat *is* the localization. 様式第３ and 様式第５, the 90,000-tonne test, the sampling protocol, the 判断基準 — none of this transfers anywhere else on earth.
- **Sales culture:** Japanese mid-market enterprise buying runs on introductions, industry associations, and in-person meetings. JILS (日本ロジスティクスシステム協会) and industry bodies are the channel. A cold-email-only motion will underperform badly here — this is the main reason the go-to-market is sales-heavy rather than self-serve.
- **Pricing:** ¥ pricing benchmarked against Japanese consulting fees and the ¥30K/month/site berth systems, not against US SaaS.

The flip side: there is no international expansion path. This is a Japan business with a hard ceiling. For a bootstrapper targeting $1–5M ARR that's acceptable; for anyone wanting a global platform it's disqualifying.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Annual subscription tiered by facility count.
  - **Starter** (1–3 facilities): ¥360,000/year (~$2,400)
  - **Standard** (4–10 facilities): ¥720,000/year (~$4,800)
  - **Multi-site** (11+ facilities): ¥1,440,000/year (~$9,600)
  - **First-filing service** (one-time, year one): ¥400,000–800,000 — hands-on help assembling the baseline and getting the October filing out the door.
- **ACV:** ~¥600,000 (~$4,000) blended subscription. Year-one customers add the service fee, so first-year revenue per customer runs ~¥1.0–1.2M.
- **Rough math to $1M ARR:** 250 customers × ¥600K = ¥150M ≈ **$1M ARR**. That's ~10–12% of the serviceable 2,000–2,500 base. Achievable in 18–24 months with a sales-led motion in a market where the deadline does the prospecting for you.
- **Rough math to $5M ARR:** ¥750M needs either ~1,250 customers (50% of serviceable base — unrealistic) or a higher ACV. The honest path is expansion: move up-market into the ~200 large shippers at ¥3–5M/year, and add the adjacent designated categories — **特定倉庫業者** (warehouse operators) and **特定貨物自動車運送事業者** (carriers), who have parallel obligations under the same act. Roughly: 400 shipper customers at ¥700K + 60 large accounts at ¥4M + 200 warehouse/carrier accounts at ¥500K ≈ ¥620M. Call $5M a stretch case that requires winning the adjacent segments; **$2–3M is the realistic ceiling on shippers alone.**
- **Expansion path:** Facility count grows (more sites onboarded → tier upgrade). Then measurement frequency — companies that start with minimum sampling often move to continuous capture once they see their own numbers. Then adjacent filings under the same act.

## 9. Go-to-market wedge — first 100 customers

The deadline is the campaign. Three concrete channels:

- **The designated list.** Companies are formally designated by the ministry, and industry coverage names them. Build a target list from designation notices, 有価証券報告書 disclosures mentioning CLO appointment, and industry press. Cross-reference with corporate directories for the 物流部長 and the named CLO. Target: **800 identified companies with a named contact by week 6.** These are not anonymous SMBs — they're identifiable listed and large-private firms.

- **Deadline-triggered direct outreach, Japanese-style.** Not cold spam. A physical 資料送付 (information packet) plus follow-up call is still how this market works — a one-page 現状診断 showing their filing deadline, the three metrics they must report, and a specific question: "do you currently have per-facility average 荷待ち時間?" Most will not. Expect ~15% meeting rate on a well-targeted 800-company list at this level of deadline pressure = ~120 meetings; 25% close on a ¥360–720K deal under statutory deadline = **~30 customers from the October push alone.**

- **JILS and industry associations.** 日本ロジスティクスシステム協会 runs seminars, publishes to exactly this audience, and is already fielding member questions about the act. Sponsor or speak at 3–4 seminars between now and October. A 100-person JILS seminar where 60% are designated shippers, converting 8–10% to trials = 5–6 customers per event, plus credibility that makes the direct outreach land. This is the highest-leverage channel and it compounds.

- **The 定期報告 second wave.** The October plan deadline is only act one. July 2027's 定期報告書 requires *measured per-facility numbers* — a much harder ask than the plan. Companies that filed a plan themselves in October will hit the measurement wall in Q1 2027. Re-market to every company that didn't buy the first time: "you filed the plan; do you have the numbers for the report?" This is a warm list of ~700 known-designated companies with a known new pain, in month 8.

- **Consultant partnerships.** Mid-tier logistics consultancies are being asked for this and can't scale the delivery. White-label the tool, they keep the client relationship, 30% revenue share. Two or three such partners could deliver 40–60 customers without direct sales cost.

## 10. Build complexity — justification

**Medium.** The regulatory rules engine (designation test, sampling protocol, metric definitions, form generation for 様式第３/第５) is straightforward deterministic logic against published ordinance text — tedious, well-documented, no ambiguity. The document normalization layer is the real engineering: ingesting arbitrary Japanese logistics spreadsheets and scanned 運転日報 into one schema needs solid document-AI work plus a correction UI, because it will be wrong sometimes and a human must fix it fast. The dock capture app is a simple timestamp recorder. No integrations required for v1 — upload and manual capture cover it, and integrations (berth systems, WMS) come later as pull demand appears.

Estimate: **12–16 weeks to a v1** that can produce a defensible 中長期計画書, for a pair where one has real Japanese logistics domain knowledge. The domain requirement is the binding constraint, not the code.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance-support tooling; the filing is made by the company, not by us. No licensing needed to prepare documents. |
| Ethical — no harm / dark patterns | ✅ | Helps companies meet a worker-welfare law aimed at cutting driver overwork. Genuinely aligned with the regulation's intent. |
| Market exists (evidence above) | ✅ | ~3,200 legally designated companies, statutory deadline 31 Oct 2026, adjacent tooling already sells at ¥30K/mo/site. |
| 1–5 person team can build this | ✅ | 2–3 people; the scarce input is Japanese logistics domain knowledge, not headcount. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf document AI, standard web stack. Main cost is the domain expert's time and Japanese-market sales travel. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | Statutory deadline, escalating to public naming — for a listed Japanese firm that's a serious sanction. Not hair-on-fire daily, but acute and calendared. Docked 3 because the immediate consequence is administrative guidance, not an instant fine. |
| Demand evidence | 15 | **12**/15 | Hard: 3,200 designated companies, published deadlines, MLIT publishing guidance because demand for help is evident, adjacent vendors charging real money, practitioners publicly writing that manual reporting has hit its limit. Docked 3 — no direct evidence yet that shippers will pay *a software vendor* rather than their existing consultant. |
| Build feasibility | 15 | **11**/15 | Deterministic rules + document normalization + drafting. 12–16 weeks for a pair. Not a 4-week solo build; the Japanese document ingestion is genuinely fiddly. |
| Distribution clarity | 15 | **12**/15 | Named, enumerable, identifiable target companies — the best possible list. JILS is a real channel. Docked 3 because Japanese mid-market enterprise sales is slow and relationship-gated; a foreign or non-networked founder will struggle. |
| Revenue mechanics | 15 | **12**/15 | Pricing benchmarked against ¥30K/mo/site incumbents and consulting fees; ¥600K ACV is defensible. $1M ARR needs a plausible 10–12% share. Docked 3 because $5M requires winning adjacent segments — the shipper-only ceiling is ~$2–3M. |
| Time to first revenue | 10 | **8**/10 | The October deadline compresses the cycle hard — pre-selling the first-filing service can generate revenue before the product is finished. Docked 2 for Japanese procurement cycles, which are rarely fast even under pressure. |
| Defensibility | 10 | **4**/10 | Honest assessment: regulatory knowledge and accumulated per-facility benchmark data give a modest edge, and Japanese-market trust is a real barrier to foreign entrants. But Hacobu could bolt filing onto MOVO Berth in a quarter if they choose to, and they have the customer list. Execution speed is the only real defense. |
| **Total** | **100** | **76**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This needs a founder who genuinely knows Japanese logistics operations and can sell into 物流部 in Japanese. This is not a remote-friendly idea for an outsider — the domain and the sales motion both require being inside the market. That constraint is real and it's the single biggest filter on who should build this.

### Key assumptions to validate (3–5)

1. **Assumption:** Designated shippers will pay a software vendor ¥360–720K/year rather than absorbing the work internally or paying an existing consultant. **How to test:** 20 structured interviews with 物流部長 at designated companies; ask directly what they've budgeted for FY2026 compliance and who they've already engaged. If the majority have a consultant on it, the wedge must shift to partnering with consultants rather than competing.
2. **Assumption:** Companies do not already have per-facility waiting-time data, and getting it is the actual bottleneck. **How to test:** in the same interviews, ask them to produce last quarter's average 荷待ち時間 for their largest facility. If they can, the measurement product is unnecessary and only the drafting product remains — a much thinner business.
3. **Assumption:** A generated 中長期計画書 is accepted by ministry reviewers without rework. **How to test:** produce three drafts for pilot customers, have an experienced logistics consultant or 行政書士 grade them against the 記載事例集, and track what happens to the first filings in October. Filing rejection would be fatal to word-of-mouth.
4. **Assumption:** Hacobu and the berth-system incumbents don't ship a filing module before the October deadline. **How to test:** monitor their product releases and seminar content weekly. They have the distribution; if they move, the window closes fast.
5. **Assumption:** The one-time first-filing service can be delivered at acceptable margin and doesn't turn the company into a consultancy. **How to test:** deliver the first five manually, measure actual hours. If it exceeds ~40 hours per customer, the service price is wrong or the product isn't doing enough.

### Risk flags

1. **Market timing — the window is narrow and possibly already half-shut.** Twelve weeks to the October deadline. Some designated companies have been working on this since spring and already have a solution. Arriving now means competing for the laggards on the first filing. The mitigation is that the July 2027 定期報告 is the bigger, harder deadline and it's fully ahead of us — but a builder who treats October as the main prize will be disappointed.
2. **Incumbent adjacency — Hacobu is one product decision away.** MOVO Berth already holds arrival/departure timestamps for share-leading numbers of Japanese docks and has the customer relationships. Adding report generation is a quarter of work for them. The counter-argument is that berth systems only see booked trucks and only at customers who bought a berth system, which leaves the mid-market genuinely uncovered — but this is the risk that most plausibly kills the business.
3. **Regulatory softness — enforcement may never bite.** The escalation ladder is long: guidance, then recommendation, then naming, then order, then fine. If MLIT enforces gently in year one (likely, for a new regime), urgency evaporates and this becomes a nice-to-have. Watch for whether any company is actually named in FY2027.
4. **Market access — this is closed to outsiders.** Japanese mid-market enterprise sales runs on introductions and in-person trust. A founder without a Japanese network and fluent business Japanese cannot execute this playbook, regardless of product quality. Not a risk to be mitigated so much as a hard eligibility test.
5. **Hard revenue ceiling.** Japan-only, ~2,500 serviceable companies, no international path. $2–3M ARR on the core segment is the honest expectation. Fine for a bootstrapper, wrong for anyone with larger ambitions.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japanese logistics domain expert (ex-3PL, ex-shipper logistics dept,
                        or logistics consultant) paired with one technical co-founder.
                        Fluent business Japanese and an existing industry network are
                        non-negotiable prerequisites, not nice-to-haves.
Time to revenue:        6–10 weeks (pre-sell the first-filing service against the Oct deadline
                        before the product is complete)
Capital to launch:      ¥4–6M (~$27–40K) — mostly domain expert time and Japanese sales travel
Top 3 assumptions to validate first:
  1. Shippers will pay a vendor, not a consultant — 20 interviews with 物流部長 at designated
     companies, asking for their actual FY2026 compliance budget and current provider
  2. Per-facility waiting-time data genuinely doesn't exist today — ask each interviewee to
     produce last quarter's average 荷待ち時間 for their largest facility
  3. Generated 中長期計画書 passes ministry review — three pilot drafts graded by an
     experienced consultant, then tracked through the October filing
Kill criteria:
  - Abandon if >50% of 20 interviewed designated shippers already have a consultant or
    internal solution locked in for the October filing
  - Abandon if Hacobu or another berth-system incumbent ships a 中長期計画書/定期報告書
    module before the October 2026 deadline
  - Abandon if fewer than 5 paying customers close by 31 October 2026 — the deadline is the
    single strongest forcing function this business will ever have, and failing to convert
    under it means the willingness-to-pay isn't there
  - Abandon if no company is subject to 公表 (public naming) through FY2027, indicating
    enforcement is toothless and urgency will not recur
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the target list. Pull designation notices, industry press, and 有価証券報告書 mentions of CLO appointment to identify 60–80 confirmed 特定荷主 with named logistics leads. This list is itself an asset regardless of the outcome — and if it can't be built in two days, the distribution thesis is already wrong.
- **Day 3–4:** Run 20 phone or in-person interviews with 物流部長 or CLO at designated companies. Three questions that matter: (a) what's your status on the October 中長期計画書, (b) can you produce last quarter's average 荷待ち時間 for your largest facility right now, (c) what have you budgeted and who's doing the work.
- **Day 5:** Attempt to pre-sell. Offer 5 companies a ¥400,000 first-filing engagement — delivered manually, no product required — to get their 中長期計画書 filed by 31 October. Take deposits.

**Falsifiable go/no-go:** ≥3 of 5 companies accept a paid pre-sell engagement AND ≥12 of 20 interviewees cannot produce a per-facility 荷待ち時間 figure on request. Both conditions must hold. If they can produce the numbers, the measurement half of the product is dead weight. If they won't pay under a twelve-week statutory deadline, they will never pay.
