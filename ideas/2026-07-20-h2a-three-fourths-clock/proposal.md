---
title: "GuaranteeClock — three-fourths hours tracker for H-2A farms"
slug: h2a-three-fourths-clock
date: 2026-07-20
category: AgriTech / US — Small Growers (5–25 H-2A Workers) Exposed to the Three-Fourths Guarantee
complexity: Low
score: 73
verdict: GO
confidence: Medium
oneLiner: "Counts down the hours a grower still owes each H-2A worker, while there are still weeks left to offer them."
tags:
  vertical: AgriTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, Solo-builder, Multilingual, Seasonal]
axes:
  problem: 16
  demand: 11
  build: 13
  distribution: 11
  revenue: 10
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# GuaranteeClock

## 1. One-liner

Counts down the hours a grower still owes each H-2A worker, while there are still weeks left to offer them.

## 2. Trend signal — why now?

Three things moved at once.

**The program is growing fast and the growth is in people who've never done this before.** H-2A certifications hit 254,688 certified positions in the first half of FY2026 — up 16.9% year over year and 19.2% above FY2024's first half ([Farm Policy News](https://farmpolicynews.illinois.edu/2026/06/h-2a-guest-farmworker-certifications-up-17-so-far-in-2026/)). The program nearly topped 400,000 requested positions for the first time ([Fresh Fruit Portal](https://www.freshfruitportal.com/news/2026/04/29/h-2a/)). Michigan alone was up 30% to start FY2026 ([Michigan Farm News](https://www.michiganfarmnews.com/h-2a-certifications-up-30-in-mi-to-start-2026-fiscal-year-as-program-use-accelerates)). Every year a new cohort of small growers enters a program with a compliance trap most of them don't understand until it bites.

**The wage math got more volatile, which makes the trap more expensive.** DOL issued a new interim final rule changing AEWR methodology to use OEWS data ([Federal Register, Oct 2025](https://www.federalregister.gov/documents/2025/10/02/2025-19365/adverse-effect-wage-rate-methodology-for-the-temporary-employment-of-h-2a-nonimmigrants-in-non-range)). Growers say the unpredictability and volatility of AEWR increases have made it extremely difficult to budget and plan ahead ([Fruit Growers News](https://fruitgrowersnews.com/article/aewr-rates/)). Nearly half of participating farmers report being "not at all" or "slightly satisfied" with the H-2A system ([AgAmerica](https://agamerica.com/blog/h2a-reform/)).

**Enforcement on this specific clause is real and large.** One labor contractor who failed the three-fourths guarantee was ordered to pay $558,298 in back wages to 649 farmworkers plus $475,211 in penalties ([DOL WHD](https://www.dol.gov/newsroom/releases/whd/whd20230919-0)). A federal court ordered a major agricultural employer to pay $427K for H-2A violations in August 2025 ([DOL WHD](https://www.dol.gov/newsroom/releases/whd/whd20250822)). DOL is explicit that a missing entry, a wrong piece-rate count, or a math error can trigger civil money penalties, back-wage liability, and even debarment.

The gap: existing software serves the top of the market. Seso serves ~350 employers annually including 27 of the 100 largest ([Seso](https://www.sesolabor.com/)). Meanwhile DOL analysts spend most of their time processing applications from the **7,500 employers certified for fewer than 10 workers each** ([USDA ERS / Wilson Center](https://www.wilsoncenter.org/article/h-2a-program-expands-2023)). That long tail has the same legal exposure and none of the tooling.

```
Provenance:
  - Signal 1 (Demand): H-2A certifications up 16.9% YoY in FY2026 H1 to 254,688 positions; ~7,500 employers certified for <10 workers each are underserved by existing software — https://farmpolicynews.illinois.edu/2026/06/h-2a-guest-farmworker-certifications-up-17-so-far-in-2026/ — 2026-06
  - Signal 2 (Feasibility): Agricultural payroll stacks remain paper timesheets, spreadsheets and disconnected workflows; specialist tools (Time Portal, Seso) target large FLCs and top-100 growers, leaving small-farm three-fourths tracking unautomated — https://www.sesolabor.com/blog/agricultural-payroll-processing-why-it-s-so-complex-and-how-to-fix-it — 2026
  - Signal 3 (Economic): DOL enforcement on the three-fourths guarantee produced a $558,298 back-wage + $475,211 penalty judgment against a single contractor; growers already spend up to $15,000 per H-2A worker before harvest — https://www.dol.gov/newsroom/releases/whd/whd20230919-0 — 2023-09 (ongoing enforcement posture confirmed 2025-08)
  Category: Underserved niche
```

## 3. The opportunity

The three-fourths guarantee is a **deferred, compounding liability that looks like nothing until the season ends.**

The mechanic: an employer must offer each worker hours equal to at least 75% of the workdays in the contract period. DOL's own example — a 10-week contract at 6 days × 8 hours = 480 hours, guarantee = 360 hours. A longer one: 180 workdays × 8 hours = 1,440 hours, guarantee = 1,080 hours. If weather cuts actual offered work to 960 hours, **the employer owes 120 hours per worker** — at contract rate, for every worker on the certification ([másLabor](https://www.maslabor.com/news/what-is-the-h-2a-three-fourths-guarantee)).

For a 12-worker farm at ~$18/hr, a 120-hour shortfall is roughly $26,000 owed at season end for work nobody performed. The grower who tracked hours on paper finds this out in November.

Here's what makes it a product rather than a spreadsheet: **the shortfall is preventable right up until it isn't.** A grower who knows in week 14 that they're 90 hours behind across the crew can offer Saturday shifts, extend the day, or bring workers onto a second job order. A grower who finds out in week 22 can only write the check. Nobody is selling the small grower a running clock.

Incumbents and why they don't cover this:
- **Seso** — full-stack H-2A filing + payroll, aimed at large employers (27 of the top 100). Overkill and overpriced for a 9-worker farm.
- **másLabor / USA Farm Labor / agents** — file the application, charge $1,500–$3,500 per application plus $100–$250 per worker recruitment ([AFBF](https://www.fb.org/market-intel/snail-mail-and-government-bills-h-2a-application-costs)). They get you certified; in-season hour tracking isn't their product.
- **Time Portal** — genuine H-2A time tracking, but positioned at farm labor contractors and ag payroll services (the aggregators), not the direct small grower.
- **Paychex / ADP** — handle piece rate and seasonal payroll mechanics. They compute what you paid. They do not model the contract-period guarantee or forecast the shortfall.

The wedge is narrow and deep: one dreaded number, computed continuously, for the segment everyone else considers too small.

## 4. Target market

- **Primary customer:** Owner-operator or farm manager at a US specialty-crop farm (fruit, vegetable, nursery, tobacco) running **5–25 H-2A workers on 1–2 job orders per season**. Revenue roughly $500K–$5M. Typically in NC, GA, FL, MI, WA, NY, CA. The person is the owner, their spouse, or a single office administrator — not an HR department.
- **Why they buy:** They already spend up to $15,000 per H-2A employee before a single crop is picked ([AgAmerica](https://agamerica.com/blog/h2a-reform/)). A five-figure end-of-season guarantee payment on top of that is the difference between a thin year and a loss. They also know DOL audits growers of every size, and that records must be retained three years — field tally records and supporting summary payroll ([Gislason & Hunter](https://www.gislason.com/top-5-compliance-issues-for-employers-using-h-2a-visa-workers/)).
- **Rough TAM reasoning:** ~12,200 unique H-2A employers were certified in FY22, averaging 32 workers each; ~7,500 are certified for fewer than 10 workers ([USDA ERS](https://ers.usda.gov/data-products/chart-gallery/chart-detail?chartId=106011)). The 5–25 worker band plausibly holds 3,000–4,000 farms. At $1,800/season ACV that's a $5.4–7.2M ceiling for the core wedge — genuinely small, which is exactly why Seso isn't chasing it and why it suits a bootstrapper.
- **Why now for them:** Program usage is accelerating (+17% in FY2026), AEWR volatility makes every hour more expensive to owe, and the enforcement record on this clause is public and growing.

## 5. Product sketch (MVP)

- **Import the job order.** Upload the ETA-790/certification; the product reads contract start/end dates, hours per workday, days per week, worker count, and contract wage rate — and computes the guaranteed hour floor per worker.
- **The clock.** One screen: for each worker, hours offered to date, hours still owed, days remaining, and the *required average hours/day from here to close* to land on target. Green / amber / red.
- **Projected shortfall in dollars.** "At your current 14-day pace you will finish 96 hours short per worker — an estimated $23,400 owed at close." Updated daily.
- **Dead-simple hour entry.** Crew-lead phone entry or a photo of the paper tally sheet parsed into the record. Weekly rather than real-time is fine — small farms are not going to adopt a punch clock.
- **Weather and holiday handling.** Log rain-out days; federal holidays and a worker's declared Sabbath are excluded from the guarantee denominator automatically, as DOL requires.
- **Recovery suggestions.** When amber: how many Saturdays or extended days across the remaining calendar close the gap.
- **Audit-ready export.** Three-year retention of hours offered vs. hours worked, per worker per week, in the shape WHD asks for.
- **Bilingual worker-facing hour summary** (English/Spanish) so workers can confirm their own recorded hours — reduces the disputed-records finding that shows up in WHD cases.

## 6. AI angle — what's load-bearing

Honest answer: **AI is a real but supporting actor here, and I'd rather say that than oversell it.** The core value is a correctly-implemented regulatory calculation and a daily-updating forecast — that's deterministic arithmetic, and it should be, because a hallucinated compliance number is worse than no number.

Where AI genuinely does work:

1. **Job order ingestion.** Reading ETA-790s and certification packets — layouts vary by agent, state, and year — into structured contract terms. Document extraction is the difference between a 3-minute onboarding and a 40-minute one, and onboarding friction is what kills adoption in this segment.
2. **Paper tally sheet parsing.** This is the load-bearing one. Small farms record hours on paper, in the field, in pen, often by a crew lead whose first language is Spanish. Turning a phone photo of a handwritten tally into per-worker hours is what makes the product usable by the actual customer. Without it you're asking a grower to do double data entry, and they won't.
3. **Plain-language explanation.** Turning "you are 96 hours short" into what the grower can do about it this week.

If you removed the AI, the product still exists — but it becomes a spreadsheet with a login, and the paper-to-digital gap means nobody in this segment actually uses it. AI is what makes it adoptable, not what makes it valuable. That's a weaker AI story than I'd like, and it's reflected in the defensibility score.

## 7. Localization angle (if any)

Not a geography play — it's a US federal program. But there is a **language** angle that matters operationally: the workforce is overwhelmingly Spanish-speaking, and crew leads are the people entering hours. Spanish-first crew-lead UX and bilingual worker hour summaries aren't a nice-to-have; they determine whether the data ever gets entered. The worker-facing summary also has a compliance benefit — several WHD cases involve disputed or absent hour records, and a worker-confirmed log is stronger evidence than a grower-only ledger.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Seasonal, not monthly — this is a seasonal business and monthly SaaS pricing reads wrong to growers. **$150/month per active job order, billed only for contract months** (typically 6–9 months), plus a $300 setup in year one. A typical 10-worker farm on one 8-month order pays ~$1,500/season.
- **ACV:** ~$1,500–$2,000 for a single-order farm; $3,000–$4,500 for a farm running two or three staggered orders.
- **Rough math to $1M ARR:** ~550 farms × ~$1,800 average = $990K. That's roughly 15% of the 3,000–4,000 farm core band — achievable but not trivial.
- **Rough math to $5M ARR:** The wedge alone doesn't get there; the core band caps around $5–7M at full penetration, which is unrealistic. $5M requires expanding beyond the clock: full H-2A recordkeeping (housing inspections, transportation receipts, recruitment reports), the domestic-worker corresponding-employment records, and moving upmarket into the 25–100 worker band where ACV is $5K+. Realistically this is a **strong $1–2M business** with a harder path to $5M. I'd rather state that than pretend.
- **Expansion path:** More job orders per farm → full audit-record vault → serve the agents (másLabor-type firms) as a white-label in-season module for their existing client books. That last one is the real ACV multiplier and also the biggest distribution unlock.

## 9. Go-to-market wedge — first 100 customers

The distribution here is unusually tractable because **the customer list is public.**

1. **DOL's OFLC disclosure data is a free, complete, structured prospect list.** Every certified H-2A employer is published quarterly with employer name, address, worker count, contract dates, and crop. Filter to 5–25 workers. That's ~3,000–4,000 named farms with mailing addresses and contract end dates. No scraping guesswork, no lead-gen spend — it is literally a government-published CSV of every prospect and how many workers they have.
2. **Time the outreach to the pain.** Contact growers in **October–December**, right when they're computing or paying a guarantee shortfall, with a direct-mail piece plus follow-up call: "Did you owe hours at close this year? Here's what it would have looked like in week 12." Direct mail works in this segment where cold email doesn't. Expect 3–5% conversion on a well-timed, well-targeted list of 1,000 — 30–50 customers from one seasonal push.
3. **Agent and consultant channel.** The H-2A agent firms (másLabor, USA Farm Labor, regional ag consultants) have client books of exactly these farms and are not in the in-season tracking business. Referral or white-label. Three agent partnerships could deliver more farms than all cold outreach combined — this is the highest-leverage channel and the one to test first.
4. **State Farm Bureau and commodity association channels.** NC, GA, FL, MI Farm Bureaus run H-2A workshops and their member newsletters reach precisely this grower. Cornell Agricultural Workforce Development and MU Extension publish H-2A audit-preparedness guidance — extension programs are actively looking for tools to point growers toward.
5. **Pre-season webinar with an ag employment attorney.** "The three-fourths guarantee: what it costs you and how to see it coming." Attorneys get leads, you get qualified growers, the topic sells itself because everyone in the room has either been burned or knows someone who was.

## 10. Build complexity — justification

**Low.** The regulatory calculation is well-documented arithmetic against contract terms — the hard part is getting it exactly right and staying current with DOL guidance, not building it. Off-the-shelf document extraction handles job orders and tally sheets. Standard web stack, mobile-web for crew leads, no real-time infrastructure needed since weekly entry is acceptable. A competent solo builder ships a credible v1 in **8–10 weeks**; the domain research to get the guarantee math and its edge cases (contract extensions, early termination, worker substitution, Sabbath exclusions, transfers between job orders) correct is a bigger time sink than the code.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Recordkeeping and calculation tool. Not legal advice — must be positioned carefully and disclaimed. |
| Ethical — no harm / dark patterns | ✅ | Net-positive for workers: better hour records, bilingual confirmation, and growers who hit the guarantee rather than shortchange it. |
| Market exists (evidence above) | ✅ | 12,200 certified employers, +17% program growth, public enforcement actions on this exact clause. |
| 1–5 person team can build this | ✅ | Solo builder, 8–10 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Main cost is domain expertise (an ag employment attorney on retainer for a review pass). |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Five-figure liability, legally mandatory, with documented six-figure enforcement. Docked because it's felt acutely *once a season*, not daily — and a grower having a good weather year may feel it not at all. |
| Demand evidence | 15 | 11/15 | Strong structural evidence: program growth, employer counts, enforcement records, incumbent gap. Docked because I found no verbatim small-grower complaints specifically about the three-fourths clock — the pain is documented by DOL and law firms, not by growers in public. That's a real gap in the evidence. |
| Build feasibility | 15 | 13/15 | Deterministic math + document extraction. Edge cases in the regulation are the main risk. |
| Distribution clarity | 15 | 11/15 | Government-published prospect list with worker counts is a rare advantage. Docked because growers are famously slow adopters of software and direct mail conversion is unproven here. |
| Revenue mechanics | 15 | 10/15 | Pricing fits the wallet and ACV is defensible against a $26K liability. Docked hard because the $5M path genuinely isn't there in the wedge — this is a $1–2M business unless expansion works. |
| Time to first revenue | 10 | 8/10 | Seasonal buying window means timing matters; land in the Oct–Dec or Jan–Mar window and revenue comes fast, miss it and you wait months. |
| Defensibility | 10 | 4/10 | Execution-only moat. The calculation is public. Seso or Time Portal could add this in a quarter if they decided the small-farm segment was worth it. The defense is that it isn't worth it *to them* — which is a market-structure moat, not a product one. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You do not need to be a farmer, but you need an ag employment attorney or a former H-2A agent close at hand. Getting the guarantee math wrong in an edge case is a product-ending event — a grower who relies on your green light and still owes $26K will not be a reference customer.

### Key assumptions to validate (3–5)

1. **Assumption:** Small growers (5–25 workers) actually experience three-fourths shortfalls often enough to pay to prevent them — rather than routinely over-offering hours and never coming close to the floor. **How to test:** This is the make-or-break question. Interview 25 growers in the band across two states; ask directly whether they've paid a guarantee shortfall in the last three seasons and how much. If fewer than a third have, the pain is theoretical and the idea is dead.
2. **Assumption:** Growers will enter hours weekly with enough discipline for the clock to be accurate. **How to test:** Run a manual concierge pilot with 5 farms for one season — collect tally sheet photos by text, return a weekly clock email. Measure whether they keep sending photos past week 6.
3. **Assumption:** H-2A agents will channel-partner rather than build it themselves. **How to test:** Pitch three agent firms directly in the first month. Their reaction tells you whether this is a wedge or a feature.
4. **Assumption:** $1,500/season clears the willingness-to-pay bar for a farm already spending $15K/worker. **How to test:** Pre-sell at that price before building; a signed LOI or deposit from 5 farms is the only real proof.

### Risk flags

1. **Weak evidence of felt pain (highest risk):** I can document the liability and the enforcement, but I could not find small growers publicly complaining about *this specific clause*. It's possible most small farms in a normal season offer well above the floor and the shortfall is a bad-weather-year event. If so, this is insurance against an occasional risk, which is a much harder sale than relieving a constant one. Assumption #1 exists to kill the idea fast if this is true.
2. **Seasonality of revenue and of pain:** Both the buying window and the felt pain are concentrated in a few months. Cash flow is lumpy and a missed season is a lost year.
3. **Slow-adopter segment:** Small growers are among the least software-adopting SMB segments in the US. Even a genuinely valuable tool can fail on adoption friction alone. The paper-tally-photo path is the mitigation and it must be excellent.
4. **Regulatory churn:** AEWR methodology is actively being litigated and rewritten; H-2A reform bills are live in Congress. A reform that softens or removes the three-fourths guarantee removes the product. Conversely, reform that tightens it makes this much bigger.
5. **Thin moat:** Execution-only. The bet is on segment economics deterring incumbents, not on anything hard to copy.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder with an ag employment attorney or ex-H-2A-agent advisor
Time to revenue:        8–14 weeks if launched into the Oct–Mar buying window
Capital to launch:      $8–15K (mostly advisory/legal review + direct mail for the first campaign)
Top 3 assumptions to validate first:
  1. Small growers actually incur three-fourths shortfalls — 25 grower interviews; kill if <1/3 have paid one in 3 seasons
  2. Weekly hour entry sustains past week 6 — 5-farm manual concierge pilot over one season
  3. H-2A agents will partner rather than build — direct pitch to 3 agent firms in month 1
Kill criteria:
  - Abandon if fewer than 8 of 25 interviewed growers have paid a guarantee shortfall in the last three seasons
  - Abandon if fewer than 3 of 5 concierge pilot farms are still submitting tally sheets at week 10
  - Abandon if a major agent firm or Seso ships small-farm guarantee tracking before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the OFLC disclosure file. Filter to employers certified for 5–25 workers. Build the call list with names, crops, worker counts, and contract dates. This costs nothing and takes an afternoon — and it simultaneously proves out the distribution claim.
- **Day 3–4:** Call 25 growers on that list. One question above all others: *"In the last three seasons, have you had to pay workers for hours they didn't work because of the three-fourths guarantee? How much?"* Then: how do you track hours today, and who does it. Do not pitch. Just find out whether the wound exists.
- **Day 5:** Decide.

**Falsifiable go/no-go:** Proceed only if **≥8 of 25 growers report paying a three-fourths shortfall in the last three seasons**, and **≥12 of 25 describe tracking hours on paper or in a spreadsheet with no running guarantee calculation**. Below either threshold, the liability is real on paper but not felt in practice — and I'd rather learn that in week one for the price of 25 phone calls than after a 10-week build.
