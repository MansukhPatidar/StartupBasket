---
title: "PlaceMargin — per-child margin ledger for English nurseries"
slug: nursery-place-margin
date: 2026-08-15
category: EdTech / England — Private Day Nurseries (30–120 Places) Cutting Funded Places on Gut Feel Because Nothing They Own Tells Them Which Child Loses Money
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Allocates staff cost down to each child's session so a nursery knows which places it is subsidising."
tags:
  vertical: EdTech
  model: SaaS
  geography: Global
  secondary: [SMB, Compliance-driven, AI-agent, Solo-builder, Multilingual]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PlaceMargin

## 1. One-liner

Allocates staff cost down to each child's session so a nursery knows which places it is subsidising.

## 2. Trend signal — why now?

The English early-years market has spent two years absorbing an entitlement expansion it cannot fund, and 2026 is the year the arithmetic broke in public.

The funding gap is now measured and growing. Providers estimate an average shortfall of **£2.61 per hour per child for three- and four-year-olds, up from £2.36 the prior year**, and £1.79 for two-year-olds ([Early Years Alliance survey coverage](https://nmt-magazine.co.uk/early-years-alliance-survey/)). **87% of nurseries say the 3–4 year old funded rate does not cover delivery cost.** Nurseries receive roughly **£6.42/hour against an average delivery cost of £8.67/hour** ([Your Harlow analysis of DfE data, 10 Aug 2026](https://www.yourharlow.com/2026/08/10/parents-say-childcare-costs-too-much-the-data-shows-nurseries-are-barely-breaking-even/)). Nursery World put the average annual subsidy at **£32,000 per setting**; one Derbyshire nursery reported losing **£1,800 a week** on funded versus fee-paying hours.

The cost side moved against them at the same time. **National Living Wage rose to £12.71/hour from April 2026.** Staffing is **74–75% of total operating cost** and is not discretionary — England's statutory ratios (1:3 babies, 1:5 two-year-olds, 1:8–13 preschool) fix the headcount by law. Agency cover to plug absence runs **£20–30/hour plus VAT against a ~£12.60/hour practitioner wage — a 90–185% markup**. The average private nursery in England now clears **£933.66 profit per child per year**, about £78 a month.

And providers are already acting on this — blind. **One in six providers have already cut funded places, and another 20% are about to follow. One in ten expect to close within two years.** NDNA's November 2025 survey of 545 settings found **37% expect to operate at a loss and 39% fear closure within 12 months**.

Here is the thing nobody has built for. Every nursery MIS in the UK — Famly, Blossom, Connect Childcare, Cheqdin, Nursery in a Box — reports **occupancy and revenue**. None of them allocates the wage bill down to the child. As one nursery-sales advisory puts it plainly: *"A nursery running at 95% occupancy may look strong, but if it is full of low-margin funded sessions, profit may still be under pressure."* Famly's top tier stops at **"revenue forecasting"** — revenue, not margin. Funding Loop, the best-funded specialist in the space, automates headcount submission and eligibility-code checking. That is the paperwork. Nobody does the P&L.

So a manager deciding which funded places to cut in September is guessing which children are the expensive ones.

```
Provenance:
  - Signal 1 (Demand): 87% of English nurseries say 3–4yo funded rates are below delivery cost; average gap £2.61/hr, up from £2.36. One in six providers have already cut funded places, 20% about to follow — https://nmt-magazine.co.uk/early-years-alliance-survey/ — 2026
  - Signal 2 (Feasibility): Every target setting already runs an MIS (Famly £79–209/mo, Blossom £2–5/child/mo) holding bookings, funding status, room allocation and rota. Data exists and is exportable; none of these platforms allocates cost to the child — https://www.famly.co/pricing — 2026-08-15
  - Signal 3 (Economic): NLW to £12.71/hr April 2026; staffing 74–75% of opex under statutory ratios; agency cover at 90–185% markup; average profit £933.66/child/year — https://ndna.org.uk/nurseries-struggling-with-financial-pressures-amid-budget/ — Nov 2025 survey, 545 settings
  Category: Underserved niche
```

## 3. The opportunity

The English nursery sector runs a cross-subsidy business model that none of its software can see.

The mechanics: a funded three-year-old generates £6.42/hour. A privately-paying two-year-old in the same building generates £9–12/hour but consumes a 1:5 staff ratio instead of 1:8. The setting is profitable only if the mix of funded-versus-private and baby-versus-preschool, across every session of every week, nets out above the wage bill. That is a real calculation with real inputs — and it is currently done, when it is done at all, in an annual spreadsheet by an accountant who sees the whole year as one number.

The incumbent failure is specific and structural. Nursery MIS platforms were built as **parent-engagement and compliance tools** — learning journals, EYFS observations, invoicing, headcount returns. Finance was bolted on as billing. They know what each child is *charged*. They have never had a reason to know what each child *costs*, because until the entitlement expansion the private-fee cushion made the question academic. It isn't academic now.

The 10× is not a better dashboard. It is that the wage bill — three-quarters of spend, currently treated as a fixed monthly lump — becomes attributable. Once you can join the rota to the room to the child's booking, you can say: *this Tuesday-Wednesday funded preschool place returns £3.10/hour of contribution; this Monday-only funded baby place costs you £4.40/hour to hold.* Nobody can say that today. And 36% of the market is about to cut places without being able to say it.

## 4. Target market

- **Primary customer:** Owner-operator or group finance lead of a private day nursery in England, **30–120 registered places**, one to six sites, turnover £400K–£3M. The buyer is the person who signs the payroll and reads the management accounts — typically the owner in a single setting, an operations director above three sites. Not the room leader.

- **Why they buy:** In their words, from the NDNA November 2025 provider survey: *"I am a limited company that has made a loss over the last 5 financial years. I expect to continue on that trajectory with no hope of recovery."* And: *"I will be forced to close my nursery that I have operated for 34 years due to all of the above issues. I am absolutely heartbroken."* And on the wage squeeze that drives the whole problem: *"Please help us with funding so that we can pay our staff more and retain them. Many people are leaving childcare as they can work in supermarkets for more money and less stress!"* From the sale-side advisory view: *"A nursery may be 85% full overall"* yet fail, because *"funded sessions are not covering the true cost of delivery. That is why occupancy should always be read alongside income and margin."* And: *"two nurseries with similar occupancy may have very different financial results."*

- **Rough TAM reasoning:** England has roughly 25,000–27,000 group-based childcare providers on the Ofsted register. Strip out maintained nursery schools, childminders and settings under 25 places, and the addressable private/voluntary group segment is on the order of **12,000–15,000 settings**. At £120/month that is a £17–21M/year ceiling in England alone — comfortably above a $5M ARR target without needing Scotland, Wales or the Irish market, all of which run analogous funded-hours schemes.

- **Why now for them:** Three things landed together. The entitlement expansion completed in September 2025, so funded children are now the majority of the roll rather than a minority — the cushion is gone. NLW rose again in April 2026. And the 2026-27 funding rates were set with a known, published gap. The decision in front of them right now, for the September 2026 intake, is *which funded places do I stop offering* — and 36% of the market is making it this term.

## 5. Product sketch (MVP)

- **Read-only sync from the existing MIS** — pulls child records, session bookings, funded-hours status, room allocation and the staff rota out of Famly, Blossom, Connect Childcare or a CSV export. The nursery keeps its MIS; PlaceMargin sits beside it.
- **Contribution per child per session** — the core number. Revenue for that booking (funded rate for that local authority, or the private fee) minus the allocated staff cost for the room during that session, apportioned by the statutory ratio the child's age band demands.
- **The subsidy list** — a ranked view of every child in the setting from most contributive to most loss-making, with the weekly pound figure attached. This is the screen the owner actually opens.
- **Session heatmap** — the week laid out by room and session, showing which slots run below break-even. Friday afternoons and Monday-only bookings are usually where the money leaks.
- **Ratio slack detector** — flags sessions where the room is staffed above what the booked children require, and prices the gap. This is where the over-hiring cost surfaces without the owner having to accuse anyone.
- **Admissions what-if** — before accepting an enquiry, model the child: age band, days requested, funded or private. Returns the contribution and shows whether the booking forces an extra staff member into the room.
- **Agency cost attribution** — when agency cover is used, the premium lands on the sessions it actually covered rather than disappearing into a monthly invoice line.
- **Monthly board pack** — a one-page PDF of margin by room, by funding type, by day of week. Ready for the accountant, the bank, or a buyer doing diligence.

## 6. AI angle — what's load-bearing

Honest answer: the margin arithmetic is not AI. It is allocation logic, and it should be deterministic — an owner making a place-cutting decision needs a number they can defend to their accountant, not a model's opinion.

AI is load-bearing in exactly two places, and both are the reason this is buildable by a small team rather than a services firm:

**Local authority rate ingestion.** There are roughly 150 upper-tier local authorities in England, each publishing its own early-years funding formula as a PDF or a council-committee appendix — base rate, deprivation supplement, quality supplement, SEN inclusion fund, the 2026-27 termly adjustment of 17–26p/hour. These documents are inconsistent, badly formatted, and republished annually. Parsing them by hand is a full-time job; parsing them with a document model is a weekend and a review queue. Without this, the product only works in one county.

**Rota and booking reconciliation.** Real nursery data is messy — a child booked 8–1 who actually attends 8–3, a staff member logged to Room 2 who spent the morning covering Babies, contracted hours that don't match the shift pattern. Mapping the actual attendance and actual staffing back onto the planned rota is fuzzy joining across systems that don't share IDs. This is where naive imports produce numbers the owner immediately disbelieves, and disbelief kills the product on day one.

Strip out the AI and you have a consultancy that charges £4,000 for a one-off cost analysis. Several accountants already sell exactly that. The AI is what turns it into a £120/month recurring product that updates every Monday morning.

## 7. Localization angle (if any)

This is a **country-specific play by construction**, and that is a feature.

England's funded-entitlement scheme — three termly headcount returns, per-LA hourly rates, statutory ratios by age band, EYPP and disability access funding — is a bespoke regulatory machine. A generic childcare-margin tool built for the US or Australia is useless here because the revenue side is set by 150 different local formulas rather than by a price list.

That specificity is the moat in months 1–12. It is also the expansion path: **Scotland** (1140 hours), **Wales** (Childcare Offer) and **Northern Ireland** run structurally similar funded schemes with different rate mechanics — each is a rate-ingestion project on top of an already-built allocation engine, not a rebuild. The **Republic of Ireland's** NCS and Core Funding scheme is the fourth. That is a realistic route from a £17–21M England ceiling to something meaningfully larger without touching the product's core.

Pricing localises naturally: £99–£249/month sits below the £4,000 one-off accountancy analysis and inside the same budget line as the MIS subscription the setting already pays.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Per setting, per month, banded by registered places.
  - **£99/mo** — single setting, under 50 places
  - **£179/mo** — single setting, 50–120 places
  - **£149/mo per site** — groups of 3+, with a cross-site comparison layer
  - Annual prepay at 10 months for 12.

- **ACV:** £1,400 blended, reflecting a mix skewed toward single settings early and groups later. Groups of 4–8 sites land at £6,000–£12,000.

- **Rough math to £1M ARR (~$1.3M):** 715 settings at £1,400 ACV. Against 12,000–15,000 addressable English settings that is **5–6% penetration**. For context, Famly and Blossom each serve thousands of UK settings, so a 5% share of a narrower, more urgent problem is not a heroic assumption.

- **Rough math to $5M ARR (~£3.9M):** ~2,800 settings, or roughly 20% of England, which is too aggressive on its own. The realistic composition is **~1,400 English settings (10%) plus Scotland/Wales/Ireland plus a meaningful group mix** — the group tier is what carries it, because a 20-site operator at £149/site is £35,760/year and needs only 40 such groups to add £1.4M. Nursery group consolidation is running hard right now, which works in this product's favour.

- **Expansion path:** Start at margin reporting. Expand into (a) **fee-setting recommendations** — what should the private rate be in this postcode to cover the funded shortfall, (b) **rota optimisation** — the ratio-slack detector becomes prescriptive, which is where the £27,510 fully-loaded cost of one surplus practitioner gets recovered, and (c) **a valuation/diligence pack**, because nursery acquirers pay for exactly this analysis and the sector is consolidating. Each of those is a price-tier jump, not a new product.

## 9. Go-to-market wedge — first 100 customers

This sector is unusually reachable. It is regulated, so the customer list is public; it is trade-associated, so the customers are pooled; and it is in visible distress, so the message lands.

1. **The Ofsted register is the target list, and it is free.** Ofsted publishes the full childcare provider register — name, address, registered places, provider type, inspection date. Filter to private/voluntary group settings in England with 30+ places. That is a clean list of roughly 12,000–15,000 named businesses with addresses. Cross-reference against Companies House for turnover band and — critically — for **filed losses**, which is public. A setting that filed a loss last year is a warm lead who already knows they have the problem. Target the ~2,000 loss-filing settings first with a physical letter plus email: *"Your 2025 accounts show a loss of £X. We can tell you which of your places caused it. Free analysis, one CSV export."*

2. **Run the free analysis as the product demo.** Ask for one CSV export from their MIS. Return a two-page PDF: their five most loss-making places, the weekly pound figure, and the session heatmap. This is a 20-minute turnaround once the engine exists and it is devastating as a sales artifact, because the owner has never seen these numbers. Expect a high conversion from analysis to trial — the pain is already acute and the output is not arguable. **200 letters/week × 10% analysis uptake × 30% analysis-to-paid** is roughly six customers a week once the loop is running.

3. **NDNA and Early Years Alliance channels.** Both associations run member magazines, regional meetings and annual conferences, and both are actively campaigning on exactly this funding gap — the NDNA survey quoted above is their own advocacy work. A tool that quantifies the subsidy per setting is *ammunition for their campaign*, not just a vendor pitch. Offer aggregated, anonymised sector data back to them in exchange for member-channel access. Nursery World and Nursery Management Today cover this beat weekly and will run the data.

4. **Nursery group operators and the accountants who serve them.** There is a small, identifiable set of specialist early-years accountants and nursery-sale brokers (Abacus Day Nursery Sales and peers) who already produce this analysis manually for clients and for acquisition diligence. They are a referral channel and a white-label channel — they currently bill days of manual work for what the product does continuously.

5. **Local authority early-years teams.** Every LA has a team supporting provider sustainability, and they are the ones fielding closure notices. They will not buy, but they will circulate a free sustainability tool to their provider list. That is 150 warm introductions to clusters of 50–200 settings each.

## 10. Build complexity — justification

**Medium.** The allocation engine itself is straightforward business logic — ratios, rates, sessions, apportionment. The two things that make it a 3–4 month build rather than a 6-week one are the **150 local authority rate schedules** (an AI-assisted ingestion pipeline plus a human review queue, and it has to be right or the revenue side is wrong) and the **MIS integrations** — Famly and Connect Childcare have APIs of varying quality; Blossom and the long tail will need CSV import with tolerant column mapping. A pair could ship a credible single-LA, CSV-only v1 in **8–10 weeks** and reach broad LA and API coverage by month four. No custom models, no novel infrastructure, no hardware.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only analysis of the customer's own operational data. Child records are personal data, so UK GDPR applies — handled as a processor under a DPA, and the product needs no child names to work (IDs and age bands suffice), which materially reduces exposure. |
| Ethical — no harm / dark patterns | ✅ | Worth stating plainly: this tool will help some nurseries stop offering funded places, which is bad for the parents affected. But the alternative outcome is the setting closing entirely — 39% fear closure within 12 months — and providers are already cutting places on guesswork. Better information produces better-targeted cuts and, in some cases, shows the place is viable after all. The product should not recommend cuts; it should report margin and let the operator decide. |
| Market exists (evidence above) | ✅ | 87% report a funding shortfall; 36% cutting or about to cut funded places; £32K average annual subsidy per setting. |
| 1–5 person team can build this | ✅ | Two people, 3–4 months to broad coverage. |
| Launchable with <$50K / ₹40L | ✅ | Roughly £25–35K covers two founders' runway, LA rate ingestion review, and hosting. No inventory, no field ops. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | £32K/year average subsidy, 37% operating at a loss, 39% fearing closure within 12 months, and an active September decision about which places to cut. This is money bleeding weekly with a decision deadline attached. Held back from 19–20 only because it is a *margin visibility* pain rather than a hard compliance deadline — a stressed owner can defer buying software in a way they cannot defer a statutory return. |
| Demand evidence | 15 | 13/15 | Multiple independent, quantified signals: EYA survey (800+ providers), NDNA survey (545 settings), DfE cost data, published LA rates. Verbatim distress quotes from named surveys. Docked two points because the evidence proves the *problem* comprehensively but nobody is yet proven to be *paying for this specific solution* — the closest paid analogue is one-off accountancy work. |
| Build feasibility | 15 | 11/15 | Standard stack, no novel tech. The 150-LA rate ingestion and the messy multi-MIS reconciliation are real work and real accuracy risk. 8–10 weeks to a narrow v1, ~4 months to broad coverage. |
| Distribution clarity | 15 | 12/15 | Genuinely strong: a free public register of every named target, Companies House filings identifying who is already losing money, two trade associations actively campaigning on this exact issue, and a free-analysis demo that is hard to argue with. Not 14–15 because the buyers are small, cash-poor, time-poor owner-operators — reaching them is easy, getting 20 minutes of their attention in September is not. |
| Revenue mechanics | 15 | 11/15 | £99–£249/mo is well-benchmarked against MIS subscriptions they already pay and far below the £4K one-off analysis. But the customer is by definition financially distressed, which is the central tension: selling a £150/month subscription to someone losing £32K/year is logical and still a hard conversation. Churn risk is elevated because some customers will close. £1M ARR needs 5–6% of England, which is credible; £5M needs the group tier and the devolved nations to work. |
| Time to first revenue | 10 | 7/10 | The free-analysis-to-paid loop is short and the pain is present-tense, so 6–10 weeks from launch to first paying customer is realistic. Not higher because the v1 needs at least a handful of LA rate schedules loaded before any analysis is trustworthy, which front-loads work before the first pound arrives. |
| Defensibility | 10 | 5/10 | The allocation logic is copyable. The real defences are the accumulated, maintained 150-LA rate corpus (annually republished, tedious, and wrong-answers-are-fatal), the accumulating benchmark dataset — *"your Tuesday preschool room is 14% below the regional median"* is a number only the incumbent can produce — and workflow lock-in once admissions decisions route through it. Honest ceiling: an incumbent MIS could bolt this on. The bet is that they won't quickly, because they are engagement-and-compliance companies whose product roadmaps have pointed at parents and Ofsted for a decade. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

The build is ordinary; the domain is not. Getting statutory ratios, funded-entitlement mechanics, EYPP, and per-LA rate formulas right is the whole product, and an outsider will produce numbers that nursery owners correctly reject. This needs a founder who has run a setting, or a co-founder / advisor who has — ideally an early-years-specialist accountant or a group operations director with equity in the outcome.

### Key assumptions to validate (3–5)

1. **Assumption:** Nursery owners will believe a per-child margin number produced by software they've had for a week, and act on it. **How to test:** Run the free analysis for 20 settings. Present the five most loss-making places. Measure how many owners say "that's wrong" versus "I suspected that" — and critically, how many change an admissions or session decision within 30 days. If most dispute the numbers, the reconciliation layer is not good enough and the whole product fails.

2. **Assumption:** A financially distressed owner will pay £99–£179/month for visibility rather than treating it as another cost to cut. **How to test:** Price the free analysis conversion directly. Offer the 20 analysis recipients a paid subscription at £149/mo with no discount. Anything under 25% conversion means the pricing or the framing (cost-saving tool vs. survival tool) is wrong.

3. **Assumption:** MIS data is extractable with enough fidelity to allocate cost — specifically, that rota data and booking data can be joined per session without heroic manual mapping. **How to test:** Get real exports from five settings across three different MIS platforms before writing the engine. If two of five require bespoke mapping, the integration cost model breaks.

4. **Assumption:** The 150-LA rate corpus can be ingested and maintained by one person with AI assistance, not a team. **How to test:** Time-box ingesting 15 LA schedules end-to-end including review. If it takes more than two days for 15, the annual maintenance burden is a business, not a feature.

5. **Assumption:** Incumbent MIS platforms will not ship this within 12 months. **How to test:** Read their public roadmaps and changelogs, and talk to their sales teams as a prospective nursery. Watch specifically for Famly moving past "revenue forecasting."

### Risk flags

1. **Customer financial fragility.** The defining risk. This product's ideal customer is one who may go out of business. Churn will run above normal SMB SaaS regardless of product quality, and some of it will be for the saddest possible reason. Model gross churn at 15–20% annually and price accordingly; the group tier is the stability ballast.

2. **Incumbent absorption.** Famly, Blossom and Connect Childcare already hold the data. If any of them ships per-child margin as a Professional-tier feature, the standalone product's reason to exist narrows to depth and the LA rate corpus. Mitigation is to go deeper faster than a feature team will — and to consider that being acquired by one of them is a perfectly good outcome at this scale.

3. **Platform dependency.** Read-only access to third-party MIS platforms that could restrict APIs or price them. CSV import as a permanent fallback is not optional; it is the insurance policy.

4. **Policy reversal.** If a future funding settlement closes the £2.61/hour gap, the urgency evaporates. Unlikely on any near horizon given fiscal conditions, and the product retains value as ordinary cost management — but the *hair-on-fire* framing depends on the gap persisting.

5. **Data protection.** Children's personal data raises the stakes on any breach well above typical B2B SaaS. Design to never ingest names — child IDs and age bands are sufficient for every calculation the product makes. This is a genuine constraint on the product, not a checkbox.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with an early-years operator or
                        sector-specialist accountant. The domain knowledge is not
                        optional and cannot be researched into existence.
Time to revenue:        6–10 weeks from launch; 4–5 months from a standing start
Capital to launch:      £25–35K ($32–45K)
Top 3 assumptions to validate first:
  1. Owners believe and act on the per-child margin number — run 20 free analyses,
     measure disputes vs. decisions changed within 30 days
  2. Distressed buyers pay £149/mo for visibility — convert those same 20 at full
     price, need >25%
  3. Rota-to-booking joins work across 3+ MIS platforms — get 5 real exports before
     building the engine
Kill criteria:
  - Abandon if more than half of the first 20 free analyses are disputed as
    inaccurate by the owner
  - Abandon if free-analysis-to-paid conversion is below 15% across 40 analyses
  - Abandon if an incumbent MIS ships per-child margin reporting before v1 launches
  - Abandon if ingesting 15 LA rate schedules takes more than 4 person-days
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the Ofsted register. Filter to English private/voluntary group settings with 30+ places. Cross-reference Companies House for settings that filed a loss in the most recent year. Target the resulting list. Separately, ingest the funding formulas for three contrasting local authorities — one London borough, one shire county, one northern metropolitan — by hand, and time it honestly.

- **Day 3–4:** Get real data. Call 30 settings from the loss-filing list and offer a free margin analysis in exchange for one CSV export from their MIS. Target 8 exports across at least three different platforms. Build the allocation by hand in a spreadsheet — no software yet. This is the real test: can the numbers even be produced from what these settings actually hold?

- **Day 5:** Present the analysis to the 8 owners on a call. Do not pitch software. Show them their five most loss-making places and stay quiet.

**The falsifiable outcome:** of the eight owners shown their own numbers, **at least five must (a) accept the figures as broadly correct and (b) name a specific decision — an admissions rule, a session change, a fee adjustment — they will make as a result.** Fewer than five and either the data can't support the calculation or the calculation doesn't change behaviour. Either way, no product.

Secondary read: of those five, how many say yes to £149/month on the same call. That number is the business.
