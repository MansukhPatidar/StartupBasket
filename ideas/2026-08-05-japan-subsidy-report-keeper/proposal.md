---
title: "HojoKeeper — obligation book for Japan's IT subsidy vendors"
slug: japan-subsidy-report-keeper
date: 2026-08-05
category: GovTech / Japan-SMB — Registered IT導入支援事業者 (Software Resellers, SIers and Web Agencies) Carrying Subsidy Reporting Duties for Their Installed Base
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Tracks every subsidy report your customers still owe Japan's secretariat, so nobody gets a clawback letter."
tags:
  vertical: GovTech
  model: SaaS
  geography: Japan
  secondary: [SMB, Compliance-driven, AI-agent, Multilingual, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 13
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# HojoKeeper

## 1. One-liner

Tracks every subsidy report your customers still owe Japan's secretariat, so nobody gets a clawback letter.

## 2. Trend signal — why now?

Japan renamed and restructured its flagship SME software subsidy in 2026. The old IT導入補助金 became the デジタル化・AI導入補助金, and the restructure made "AI introduction" the *maximum evaluation target* — subsidy rates of 1/2 to 4/5, up to ¥4.5M per SME, with application deadlines every one to two months through the year. This is the Japanese government paying SMEs to buy AI software, at scale, on a rolling calendar.

That creates a boom on the vendor side. To sell into this money you must be a registered **IT導入支援事業者**. The secretariat publishes the adopted-vendor list as a PDF that it re-versions continuously (last updated 2026/07/29). Registration is not a rubber stamp: the secretariat and an external review committee vet each vendor, and **if your vendor registration is rejected, you cannot re-apply in the same fiscal year** — you wait until next year, in either registration form.

The volume is real and so is the failure rate. In the 2025 program, 9,442 entities applied and 3,838 were adopted. That is a **59% adoption rate — roughly 4 in 10 applications died.** And the secretariat's public position is that rejection reasons *are not disclosed*: the 公募要領 states reasons won't be published, so rejected applicants are told to self-diagnose against the guidelines. Vendors are running a 41% failure rate blindfolded.

The part nobody has built for is what happens *after* the money lands. Recipients owe 事業実績報告 (results reporting) and then 事業実施効果報告 — **three annual reports over three years** for 通常枠, reporting revenue, cost of sales, headcount and working hours. Miss the window and the rule is explicit: **全部又は一部返還** — full or partial repayment of the subsidy. The windows are not a single national date; the effect-report period is defined as "the fiscal year following the grant application date, counted as year one, through year three," so it keys to each customer's own fiscal calendar. Windows run wide and staggered — one published 通常枠 year-one window ran 2026-04-01 10:00 to 2027-01-29 17:00, while the インボイス枠 year-one window ran 2026-01-15 to 2026-03-31. Different 枠, different report counts, different clocks, per customer.

The secretariat's own definition of the vendor role makes this the vendor's problem, not the SME's. A registered IT導入支援事業者 is obligated to field applicant inquiries *on behalf of the secretariat*, mediate the secretariat's instructions to recipients, and actively **police improper subsidy receipt**. A vendor with 200 subsidized customers is carrying ~600 dated obligations across overlapping, fiscal-year-keyed windows — and is contractually the party responsible for making sure they land.

They are tracking this in Excel.

Provenance:
  - Signal 1 (demand/economic): 2025 program ran 9,442 applications → 3,838 adopted (~41% rejected); rejection reasons are not disclosed by the secretariat, forcing self-diagnosis — https://mirasapo-plus.go.jp/infomation/30008/ and https://carearc.co.jp/blog/2942/ — observed 2026-08-05
  - Signal 2 (regulatory/economic): 2026 restructure to デジタル化・AI導入補助金 makes AI adoption the top-scored criterion, 1/2–4/5 subsidy up to ¥4.5M, deadlines every 1–2 months; effect reporting runs 3 years with 全部又は一部返還 for missed windows — https://www.spreadoffice.com/subsidy/it2026/ and https://so-labo.co.jp/hojyokin/it-hojyo/basic/781/ — observed 2026-08-05
  - Signal 3 (feasibility): incumbent 補助金クラウド (Stayway) sells subsidy *discovery* to SMEs/士業/banks at ~¥30,000/mo, proving Japanese SMB willingness to pay for subsidy SaaS — but ships no post-award obligation tracking for vendors — https://www.hojyokincloud.jp/price/ — observed 2026-08-05
  Category: Regulatory arbitrage

## 3. The opportunity

The Japanese subsidy software market has been built entirely around **getting the money**. 補助金クラウド, the category leader, is a discovery-and-matching engine: it tells you which subsidies you qualify for and helps you apply. It sells to SMEs, to 士業 (licensed professionals), to banks, and to corporate sales teams. Every competitor in the space is aimed at the front of the funnel, because that's where the commission is.

Nobody owns the back of the funnel. Once the 交付決定 lands, the vendor inherits a three-year, per-customer obligation that (a) has a hard financial penalty attached, (b) is keyed to each customer's individual fiscal year, (c) varies by 枠 and by whether they took the 賃上げ加点, and (d) requires pulling revenue, cost, headcount and working-hours figures out of a customer who has long since stopped thinking about the subsidy.

That's the gap. The front of the funnel is a *sales* problem, well served. The back is an *operations liability* problem, unserved. And it's the vendor — not the SME — who is on the hook, because the secretariat explicitly deputizes the vendor to mediate its instructions and prevent improper receipt.

The incumbent's weakness is structural, not a feature gap. Discovery tools are priced and sold per-application; their whole business model assumes churn after the award. A product that gets *more* valuable the longer a customer has been on the books is the opposite shape, and a discovery vendor would have to fight its own pricing model to build it.

The second lever is the 41% rejection rate against undisclosed reasons. Vendors have no feedback loop. Every submitted application is a coin flip they can't learn from, and each loss costs them a booked deal plus locks the customer out for the fiscal year. Pre-submission defect detection — checking the application against the published 公募要領 and the known failure patterns (証明書 older than 3 months, mismatched figures between the application and attachments, no quantified targets, zero 加点 items) — is a service with an obvious price tag: a fraction of the deal it saves.

## 4. Target market

- **Primary customer:** Registered IT導入支援事業者 in Japan — software resellers, small SIers, web/DX agencies and accounting-software dealers with 5–80 staff, who have onboarded 20–500 subsidized SMEs. The buyer is the 補助金担当 or sales operations lead, usually a person who inherited the spreadsheet.
- **Why they buy:** Two fears, both concrete. First, a customer misses an effect-report window, gets a 返還 demand, and blames the vendor who sold them the tool and promised 伴走支援. That's a reference destroyed and possibly a refund. Second, an application gets rejected, and because reasons aren't disclosed, they can't tell their customer why — and can't stop it from happening again next quarter.
- **Rough TAM reasoning:** The secretariat's adopted-vendor list is a published PDF. The program processed 9,442 applications in 2025 across a vendor base large enough to serve them; a plausible active-vendor population is in the low thousands. If 2,000 vendors are actively carrying installed bases and 15% eventually pay ¥30–80K/mo, that's ~300 customers × ~¥50K/mo × 12 ≈ ¥180M (~$1.2M) ARR. Getting to $3–5M requires either deeper ACV on the larger vendors or extending to the adjacent subsidy programs (ものづくり補助金, 省力化投資補助金) that share the same reporting architecture.
- **Why now for them:** The 2026 AI restructure is actively growing their installed base right now, with a new cohort every 1–2 months. Every cohort they add compounds the obligation book they can't track. The pain scales with their success, which is the best possible timing.

## 5. Product sketch (MVP)

- **Obligation calendar** — one row per subsidized customer showing which reports are due, in which window, computed from their grant-application date, their 枠, and their fiscal year end. Red/amber/green, sorted by days-to-close.
- **Pre-submission defect check** — upload the draft application package; get back a list of the things that historically kill applications: 履歴事項全部証明書 dated over 3 months back, figures that disagree between the application and its attachments, business plans with no quantified time/cost reduction, zero 加点 items claimed.
- **Effect-report data chase** — auto-generates the Japanese-language request to the end customer for the exact figures that year's report needs (売上, 原価, 従業員数, 就業時間), tracks who has and hasn't replied, and escalates as the window narrows.
- **Report drafter** — takes the returned figures and produces the completed effect-report content for the vendor to review and submit, with the prior year's numbers alongside for consistency.
- **Clawback exposure meter** — total yen of subsidy across the book currently at risk from unreported obligations, which is the number the vendor's owner actually cares about.
- **Vendor registration watch** — flags when the vendor's own registration or tool registration needs renewal, given that a failed re-registration locks them out for a full fiscal year.
- **Handoff log** — records what the vendor asked the customer, when, and what came back, so if a 返還 does happen the vendor can show they discharged their 伴走支援 duty.

## 6. AI angle — what's load-bearing

Two places, both doing real work.

The defect check is document understanding against a moving rulebook. The 公募要領 is reissued each program year, the 枠 structure changed materially in 2026, and the registration manual itself was revised mid-year (策定 2026-03-26, 改訂 2026-06-24). A model reading the current guidelines plus the submitted package and flagging mismatches is doing what a ¥200K consultant does — and consultants are the current alternative. Note that full 申請代行 is a rules violation: you legally cannot outsource the whole application to the support vendor. That makes an *assistive checker* the compliant shape and a done-for-you service the non-compliant one. The regulation itself pushes the market toward software.

The second is the data chase. Extracting 売上/原価/従業員数/就業時間 from whatever the customer sends back — a PDF 決算書, a photographed spreadsheet, a LINE message with numbers in it — and normalizing it into the report fields is exactly the messy-input problem that got cheap in the last 18 months.

Strip the AI out and you have a calendar with reminders. Useful, but a ¥5,000/mo product, not a ¥50,000/mo one. The AI is what makes the defect check and the data extraction credible enough to price against the consultant it replaces.

## 7. Localization angle

This *is* the localization play — it is unbuildable by a non-Japanese team without a domain partner, which is most of the defensibility.

Everything is Japanese-language and Japan-specific: the 公募要領, the gBizID Prime authentication flow (which itself must be obtained ~2 months before a deadline), the 枠 taxonomy, the fiscal-year conventions that drive every date calculation, and the secretariat's procedural vocabulary (差戻し, 不採択, 交付決定, 返還). Pricing must land in yen at Japanese SMB software norms — the incumbent's ¥30,000/mo SME tier is the anchor to price against.

The cultural layer matters as much as the language. The vendor relationship is framed as 伴走支援 — walking alongside the customer — and the product has to reinforce that the vendor is discharging that duty, not automating it away. A tool that reads as "we outsourced your support to a bot" fails in this market regardless of feature quality.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered on the size of the obligation book. ¥30,000/mo up to 50 subsidized customers, ¥60,000/mo to 200, ¥100,000/mo above. Add-on: ¥5,000 per pre-submission defect check, or bundled at the higher tiers.
- **ACV:** ~¥600,000 (~$4,000) blended.
- **Rough math to $1M ARR:** ~250 vendors at ¥600K/yr ≈ ¥150M ≈ $1M. Against a low-thousands active-vendor base, that's a low-double-digit penetration — demanding but not fantasy.
- **Rough math to $5M ARR:** Needs the adjacent programs. ものづくり補助金 and 省力化投資補助金 run the same architecture — registered support bodies, staged reporting, clawback for non-report. Same buyer, same product shape, roughly 3–4× the addressable obligation volume. Alternatively, sell a thin end-customer seat so the SME sees its own obligations directly, expanding seats within each vendor's book.
- **Expansion path:** ACV grows mechanically as the vendor's installed base grows — and the 2026 AI restructure is growing it for them, every 1–2 months. This is the rare SMB SaaS where the customer's success automatically increases their tier. Churn is structurally low because the obligations run three years; leaving mid-book means re-adopting the spreadsheet you escaped.

## 9. Go-to-market wedge — first 100 customers

- **The list is a published PDF.** The secretariat maintains `it2026_it_vendor_list.pdf` — the adopted IT導入支援事業者 roster — and re-versions it continuously. That is a government-verified, contact-resolvable list of exactly the companies that have this problem, with no scraping ambiguity about qualification. Cross-reference against the ITツール search directory to see how many tools each vendor registered, which proxies for book size and tells you who to call first.
- **Lead with their own exposure number.** For a target vendor, estimate their subsidized-customer count from their registered tools and public case studies, and open with: "You have roughly N customers in effect-reporting windows over the next 12 months. Here are the ones closing first." A concrete, dated, yen-denominated risk beats a demo. Expect this to work best on vendors in the 50–300 customer band, where the spreadsheet has just started failing.
- **Sell through the 士業 channel.** 行政書士 and 税理士 firms already advise on subsidy applications and several publish extensively on it (CAREARC, Planbase, and 行政書士 practices are all producing 不採択 content, which means they're fielding the questions). They're not competitors — they serve the SME, not the vendor. Referral fee, and they get a tool that makes their own advisory faster.
- **Time the deadline cycle.** Deadlines land every 1–2 months and effect-report windows open on published dates. Both are known in advance. Run outbound in the 3 weeks before each, when the pain is acute and the budget conversation is easy.
- **Land on the rejection loop, expand to the obligation book.** The defect check is the easier first sale — it's cheap, it maps to a deal they're about to lose, and it proves value within one cycle. The obligation tracker is the retention product. Sell the first, keep them with the second.

## 10. Build complexity — justification

Medium. The heavy lifting is a date-computation engine keyed to per-customer fiscal years, 枠 type, and 加点 status, plus a rules layer that has to be re-derived each program year when the 公募要領 is reissued — that's ongoing maintenance, not one-time build. Document understanding for the defect check and the financial-figure extraction runs on off-the-shelf models. No government API integration is required or available for the MVP; the vendor still submits through the official portal themselves, which keeps this a preparation-and-tracking tool and sidesteps any 申請代行 rules problem. Realistically 12–16 weeks to v1 for a pair, with the hard constraint being access to a Japanese domain expert who has actually filed these reports — without that, the date logic will be subtly wrong and subtly wrong is fatal here.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Assistive tool for the vendor's own filings. Deliberately does not perform 申請代行, which is a rules violation — the vendor submits. |
| Ethical — no harm / dark patterns | ✅ | Helps SMEs avoid clawbacks and helps vendors discharge a duty the secretariat assigns them. Aligned with the program's own anti-fraud mandate. |
| Market exists (evidence above) | ✅ | 9,442 applications in 2025; published vendor roster; incumbent proving ¥30K/mo willingness to pay for adjacent subsidy SaaS. |
| 1–5 person team can build this | ✅ | Pair plus a domain advisor. 12–16 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Main cost is the domain expert and Japanese-language GTM, not infrastructure. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hard financial penalty (全部又は一部返還), vendor is deputized by the secretariat, and 41% of applications fail with no stated reason. Not quite hair-on-fire because the deadlines are slow-moving — a vendor can survive on a spreadsheet longer than they should. |
| Demand evidence | 15 | 12/15 | Strong program-level data (9,442 applications, published vendor roster, incumbent pricing at ¥30K/mo) and abundant Japanese-language content on 不採択 and 効果報告. Docked because I have no verbatim vendor complaints — Japanese SMB pain rarely surfaces on public forums the way it does on Reddit. |
| Build feasibility | 15 | 11/15 | Standard stack plus document AI. The date/rules engine is fiddly and must be re-derived each program year. 12–16 weeks with a pair. |
| Distribution clarity | 15 | 13/15 | The government publishes the exact prospect list as a PDF, deadlines are on a known calendar, and 士業 firms are an available referral channel. As close to a named list as this repo gets. |
| Revenue mechanics | 15 | 11/15 | Pricing anchored to a real incumbent tier. $1M needs ~250 vendors, which is credible; $5M requires program expansion that I haven't verified in equal depth. |
| Time to first revenue | 10 | 8/10 | The defect check can be sold before the tracker is finished, timed to a deadline cycle. 6–10 weeks to first yen is realistic given a warm domain-expert network; longer without one. |
| Defensibility | 10 | 5/10 | Execution and domain moat only. The date logic and failure-pattern library compound, and switching mid-obligation-book is painful — but a Japanese incumbent with the same domain access could copy the shape in two quarters. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This is not a solo-technical-founder idea. It needs someone who can read the 公募要領, hold a sales conversation in Japanese, and ideally has filed one of these reports. A foreign founder without a Japanese co-founder or first employee should not attempt it — the failure mode is confidently shipping wrong date logic.

### Key assumptions to validate (3–5)

1. **Assumption:** Vendors with 50+ subsidized customers genuinely track obligations in spreadsheets and have felt near-misses. **How to test:** 20 interviews from the published roster; ask them to show the actual file. If they open a proper system, the idea is dead on arrival.
2. **Assumption:** A 返還 event, or the fear of one, is attributed to the vendor and damages the relationship. **How to test:** Ask directly whether they've had a customer miss a window, and what happened commercially. If the answer is "the customer's problem, we didn't hear about it," problem intensity drops hard.
3. **Assumption:** Pre-submission defect checking measurably beats the 59% baseline adoption rate. **How to test:** Retrospectively run the checker over 30 known-outcome applications sourced from friendly vendors. Needs to separate adopted from rejected better than chance.
4. **Assumption:** ¥30–100K/mo clears the bar for a vendor whose subsidy business is a side revenue line rather than their core. **How to test:** Price conversation in the same 20 interviews; look for who asks about annual billing versus who goes quiet.
5. **Assumption:** The published vendor PDF resolves to reachable decision-makers at acceptable cost. **How to test:** Take 100 rows, attempt contact resolution, measure hit rate and reply rate on a Japanese-language opener.

### Risk flags

1. **Program dependency:** This is a single-government-program business at MVP. Japan restructures this subsidy regularly — it was renamed and reframed in 2026 alone. If the program is cut, narrowed, or has its reporting requirement simplified, the product's reason to exist changes overnight. Mitigation is expanding to the adjacent subsidy programs early, but that's a v2 concern that could become a v1 emergency.
2. **Incumbent adjacency:** Stayway's 補助金クラウド already sells subsidy SaaS to 士業 and banks in Japan and has the brand, the channel, and the domain team. They've chosen the discovery side, but the post-award module is an obvious extension for them. The bet is that their per-application pricing model makes them slow to build a product that rewards retention.
3. **Market access:** Japanese SMB software sales are relationship-led and slow to trust unknown vendors, especially on anything touching government money. The published list solves *targeting* but not *credibility*. Expect the 士業 referral channel to matter more than cold outreach, which makes GTM slower than the distribution score implies.
4. **Rules-drift maintenance:** The 公募要領 and manuals are reissued and revised mid-year (the registration manual was revised 2026-06-24, three months after issue). Every revision is unbilled engineering work, and being wrong about a date is worse than having no product.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japanese-speaking operator with subsidy-program domain access,
                        paired with one technical co-founder. Foreign solo founders should pass.
Time to revenue:        6–10 weeks (defect check sold ahead of the full tracker)
Capital to launch:      ¥3–5M (~$20–33K), mostly domain expertise and Japanese-language GTM
Top 3 assumptions to validate first:
  1. Vendors with 50+ subsidized customers track obligations manually — 20 roster interviews, ask to see the file
  2. Missed effect-report windows land commercially on the vendor — direct question in the same interviews
  3. Defect checking beats the 59% baseline — retrospective run over 30 known-outcome applications
Kill criteria:
  - Abandon if fewer than 6 of 20 interviewed vendors can name a real near-miss or missed report
  - Abandon if the defect checker cannot separate adopted from rejected applications better than chance on 30 retrospective cases
  - Abandon if Stayway or another incumbent ships post-award obligation tracking for vendors before v1
  - Abandon if the program's effect-reporting requirement is simplified to a single report or removed
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Pull the current `it2026_it_vendor_list.pdf` roster and the ITツール search directory. Build a ranked target list of 150 vendors by registered-tool count as a proxy for book size. Confirm how cleanly the PDF resolves to company contacts — this doubles as the distribution test.
- **Day 2–3:** Book and run 20 interviews with vendors in the 50–300 customer band. Two questions carry the week: *show me how you currently track which customers owe which report*, and *has a customer ever missed a window — what happened to your relationship?* Everything else is texture.
- **Day 4:** Collect 30 real applications with known outcomes (adopted/rejected) from two or three friendly vendors. Run a rough defect check against the current 公募要領 and the documented failure patterns.
- **Day 5:** Decide.

**Falsifiable go/no-go:** Go only if (a) ≥12 of 20 vendors show a spreadsheet or equivalent manual system, (b) ≥6 can name a specific missed-or-nearly-missed report and describe commercial fallout, and (c) the defect check correctly separates adopted from rejected on ≥20 of the 30 retrospective applications. Miss any of the three and this is a VALIDATE at best — the obligation pain is real on paper, but paper isn't a customer.
