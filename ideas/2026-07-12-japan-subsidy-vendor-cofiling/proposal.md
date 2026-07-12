---
title: "JoinFile — co-filing desk for Japan's subsidy-catalog vendors"
slug: japan-subsidy-vendor-cofiling
date: 2026-07-12
category: GovTech / Japan
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Runs the joint subsidy application every Japanese equipment vendor must co-sign, so deals stop dying in paperwork."
tags:
  vertical: GovTech
  model: SaaS
  geography: Global
  secondary: [Japan, Compliance-driven, SMB, AI-agent, Multilingual, Workflow automation]
axes:
  problem: 16
  demand: 11
  build: 12
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, sales-heavy, domain-expertise-required]
featured: false
---

# JoinFile

## 1. One-liner

Runs the joint subsidy application every Japanese equipment vendor must co-sign, so deals stop dying in paperwork.

## 2. Trend signal — why now?

Japan is running out of workers, and the state is now writing cheques to fix it with machines. Three things landed at once.

**The labor shortage stopped being an abstraction and started killing companies.** Labor-shortage bankruptcies (人手不足倒産) hit a record for the third consecutive year — 441 cases in FY2025, per Teikoku Databank reporting. Construction alone accounted for 112 of them; road freight 55; elderly welfare 22. Critically for us: **77% of those failures were firms with fewer than 10 employees.** These are exactly the SMEs the subsidy targets. As of April 2026, 50.6% of Japanese firms still report a shortage of regular employees — above 50% for a fourth straight year.

**The government's answer is a subsidy that legally requires a vendor to co-sign.** The 中小企業省力化投資補助金 (SME Labor-Saving Investment Subsidy) pays **1/2 of the cost** of labor-saving equipment — robots, self-checkout, IoT, automation — up to ¥5M/¥7.5M/¥10M by headcount band (rising to ¥7.5M/¥10M/¥15M with a wage-increase commitment), per the March 19, 2026 revision. The catalog type (カタログ注文型) is accepting applications **on a rolling basis**. And here is the structural detail that makes this a business: it is a **joint application (共同申請)**. The SME cannot apply alone. A registered sales vendor (販売事業者) must be a *co-business implementer* — jointly authoring the business plan, supplying product data, and sharing the post-award results reporting (事業実績報告) obligation.

**The catalog is now big enough to be a market.** 2026 expanded the budget and the catalog now carries **1,000+ registered products** — serving robots, collaborative robots, self-checkout, and more. Every one of those products has vendors behind it who must co-file, repeatedly, for every single customer.

Meanwhile, the only "solution" on the market is people. Japanese 行政書士 (administrative scriveners) and subsidy consultants run 申請代行 services on **success fees of 8–15% of the awarded amount**, typically with no upfront cost. On a ¥10M award that's ¥800K–¥1.5M of margin evaporating — per deal. There is no software product doing this. There is a labour market doing it by hand.

Provenance:
  - Signal 1 (Demand): Labor-shortage bankruptcies hit a record 441 in FY2025 — third straight record year; 77% were firms under 10 employees; 50.6% of firms still short-staffed as of April 2026 — https://www.tdb-en.jp/news_reports/backnumber/brr2601.html — July 2026
  - Signal 2 (Feasibility/Regulatory): The 省力化投資補助金 catalog type mandates a joint application (共同申請) with a registered 販売事業者 as co-implementer, who shares business-plan authoring and results-reporting duties; 1/2 subsidy up to ¥15M post-2026-03-19 revision; rolling applications; 1,000+ catalog products — https://shoryokuka.smrj.go.jp/catalog/ and https://mirasapo-plus.go.jp/subsidy/shoryokuka/ — July 2026
  - Signal 3 (Economic): Subsidy application support in Japan is sold as human labour at 8–15% success fees by 行政書士 firms — a large, software-free margin pool; METI is actively expanding budget and opened a Catalog Registration Support Center to push volume — https://office-tree.jp/blog/subsidy/subsidy-application-success-fee-only/ and https://www.chusho.meti.go.jp/keiei/sapoin/2024/240806shoryokuka.html — July 2026
  Category: Geographic arbitrage

## 3. The opportunity

Everyone looks at this subsidy and sees a consumer-ish play: "help the SME get the grant." That's the obvious cut, and it's a bad business — it's a one-shot transaction, the customer never comes back, and 行政書士 firms already own it on a success-fee model you can't undercut with software.

Flip the counterparty. **The vendor is the one with recurring pain and recurring money.**

A vendor selling serving robots to restaurants doesn't co-file once. They co-file for *every deal they close*. Each one means: inviting the SME into the portal, jointly drafting a business plan that demonstrates labor-saving effect, assembling product spec documents, chasing the customer for delivery confirmations, payment proof, installation photos and operational records, and then filing results reporting — with a 12-month clock from order to delivery-inspection-payment-and-report. Get it wrong and the application is returned (差し戻し) or rejected outright; incomplete submissions are automatically rejected.

So the vendor's sales rep is now a part-time bureaucrat. The subsidy is the *reason the customer buys at all* — it's half the price — which means **paperwork failure is deal failure.** The rep is not incentivised to be good at this and is not trained for it. Today the vendor's options are: (a) let the rep wing it and eat the rejections, (b) hire a scrivener and hand over 8–15% of the award, or (c) staff an internal subsidy team.

None of these scale. That's the gap.

**What a focused team does 10× better:** the joint application is not creative work. It is the *same document*, with the same labor-saving argument, filled out against a different SME's headcount, overtime hours, and workflow, over and over. That is exactly the shape of problem AI now eats. The vendor's product data is constant. The customer's data is a short intake. The business plan is a generated artifact. The results-reporting chase is a scheduled workflow with a document checklist.

We're not competing with a software incumbent. We're competing with a human being charging 8–15%.

## 4. Target market

- **Primary customer:** Japanese equipment and software vendors registered (or seeking registration) as 販売事業者 in the 省力化投資補助金 catalog. Think 20–200 person distributors and manufacturers of serving robots, collaborative robots, self-checkout/POS, kitchen automation, warehouse IoT, and cleaning robots. The buyer is the **sales operations manager or business unit head** — the person whose reps are losing deals to paperwork — not the CEO.
- **Why they buy:** Because the subsidy is not a nice-to-have in their sales motion, it is the sales motion. Half the price comes from the state. A rejected or delayed application doesn't cost them a grant — it costs them the *sale*. Their reps are burning hours on 事業実績報告 chase-work instead of selling, and their alternative is handing a scrivener ¥800K–¥1.5M per deal.
- **Rough TAM reasoning:** The catalog carries 1,000+ registered products. Products carry multiple registered vendors each; vendors carry multiple products. A conservative read puts the registered-vendor population in the low thousands, and the addressable set (vendors doing enough volume to feel the pain) in the high hundreds to low thousands. I could not find an official published count of registered 販売事業者 — **this is the single biggest number I'm missing and it's the first thing to go verify.** Even at 800 real vendors, capturing 300 at ¥50K/mo is ~¥180M ARR (~$1.2M). That's the shape of the business.
- **Why now for them:** The catalog type moved to rolling applications and the budget expanded in 2026. Volume is going *up*, which means their paperwork load is going up in direct proportion to their success. The pain scales with the thing they want more of.

## 5. Product sketch (MVP)

- **Deal-to-filing pipeline.** Every prospective SME customer becomes a filing record. The vendor's rep sees exactly which of their live deals is blocked on which missing document.
- **Business plan generator.** Vendor's product data is stored once. Rep enters the SME's headcount, overtime hours, current manual workflow, and target wage commitment; the system drafts the joint business plan arguing labor-saving effect in the register and format the secretariat expects.
- **Eligibility pre-check.** Before a rep wastes a week, flag whether this SME plausibly clears the "state of labor shortage" evidence bar (e.g. recent average overtime above 30 hours, or headcount decline) and which subsidy cap band their headcount puts them in.
- **Document chase-bot.** Auto-sequenced requests to the SME for the artifacts results reporting demands — delivery confirmation, payment proof, installation photos, operational records — with the 12-month order-to-report clock visible and ticking.
- **Rejection/return log.** Every 差し戻し and its stated reason is captured and fed back as a pre-submission warning to the next rep filing a similar case.
- **Wage-commitment calculator.** Show the SME live whether the wage-increase exception moves them from the ¥7.5M cap to the ¥10M cap — because that is a closing argument, not a compliance detail.
- **Portfolio view for the sales manager.** Award rate by rep, average days to decision, value at risk in pending filings.

## 6. AI angle — what's load-bearing

Strip the AI out and this is a project tracker with document checkboxes. Nobody pays ¥50K/mo for that.

The AI is load-bearing in one specific place: **generating a Japanese-language business plan that argues a labor-saving effect, in the bureaucratic register the secretariat expects, from a thin intake of customer facts.** That is the part the 行政書士 charges 8–15% for. It's a writing task with a house style, a fixed argument structure, and a known failure mode (vague, unsubstantiated effect claims get returned). Model quality here is the whole product — and Japanese formal business writing is precisely the thing a scrivener spent years learning and a good model now does in seconds.

Secondary but real: extracting and validating the results-reporting artifacts (is this photo actually an installation photo, does this payment proof match the awarded amount, is this invoice inside the 12-month window) rather than making a human eyeball each one.

If the generated plan can't clear the same bar a scrivener's does, there is no product. That is the core technical risk and it is testable in week one.

## 7. Localization angle

This is not a localization angle — this *is* the product. The entire opportunity is that the 省力化投資補助金 is a Japan-only construct with a Japan-only quirk (mandatory vendor co-signature) and a Japan-only incumbent (行政書士 on success fees). You cannot build this in English and port it.

That means: native-grade Japanese business writing is table stakes, not a feature. The formal register (敬体/常体 discipline, the specific vocabulary the secretariat's reviewers expect) is the product surface. Pricing must sit in yen and be legible against the alternative — "¥50,000/month" reads as cheap next to "¥1,200,000 of this one award." And distribution runs through Japanese channels: the vendor associations, the trade shows, and the Catalog Registration Support Center's orbit.

The flip side is the honest one: **a non-Japanese solo founder cannot build this.** This idea requires a Japanese-native operator or co-founder. That's a real constraint, and it's also part of why the space is empty.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** SaaS seat/workspace hybrid. **¥30,000/mo** (small vendor, ~3 reps) / **¥80,000/mo** (mid, ~10 reps) / **¥200,000/mo+** (large distributor, unlimited reps + priority support). Roughly $200 / $530 / $1,300 per month.
- **Deliberately NOT success-fee.** The scriveners own that model and it caps you at their price. We win by being an order of magnitude cheaper than 8–15% and by being *always on* rather than per-deal. A vendor doing 20 subsidised deals a year at ¥10M each is looking at ¥16M–¥24M in scrivener fees. We charge ¥960K/yr. That's not a discount, it's a different category.
- **ACV:** ~¥720K (~$4,800) blended.
- **Math to $1M ARR:** ~150M yen ≈ 210 vendors at the ¥60K/mo blended tier. Reachable — this is a countable, listed, addressable population.
- **Math to $5M ARR:** Requires either (a) ~1,000 vendors, which likely exceeds the registered population and is therefore *not* the path, or (b) expanding to the adjacent subsidy programs the same vendors also co-file under — the IT導入補助金 / デジタル化・AI導入補助金 line has the identical "registered support vendor co-applies" structure. **The honest read: $5M needs the multi-subsidy expansion. The single-program business tops out closer to $1.5–2.5M ARR.** That's still a very good bootstrapped outcome and it's the number I'd underwrite.
- **Expansion path:** More reps → more seats. Then more subsidy programs per vendor. Then, eventually, sell the accumulated rejection-reason dataset back as a benchmark ("your award rate is 61%, category median is 74%").

## 9. Go-to-market wedge — first 100 customers

The beautiful thing about a government catalog is that **it is a public list of your customers.**

- **Scrape the catalog, then work the vendor list product by product.** The official product catalog (shoryokuka.smrj.go.jp/catalog/product_catalog/) lists 1,000+ registered products, and each product's detail page carries its **販売事業者 list**. That is a name-by-name target list of every company legally required to co-file. Build it in a week. This is the entire top of funnel and it's free.
- **Lead with a done-for-you first filing.** Cold email/call is weak in Japan; a concrete artifact is not. Pick 50 vendors, generate a *sample* joint business plan for a plausible customer profile in their category, and send it. The pitch is one sentence: "This took 40 seconds. Your rep takes two days and your scrivener takes ¥1.2M." Expect low single-digit reply, but the ones who reply are qualified and desperate.
- **Go where they're already being handled.** METI's Catalog Registration Support Center exists precisely because vendors struggle with this process. So do the subsidy-portal media sites (補助金ポータル, 省力化投資補助金ナビ) that vendors read obsessively. Sponsor/partner there — the audience is 100% our ICP with zero waste.
- **Partner with, don't fight, the scriveners.** A 行政書士 firm handling 30 vendor clients is either our biggest competitor or our biggest reseller. Offer them the tool at a per-seat rate so they can take 3× the caseload at the same headcount. Their success fee stays; their cost collapses. Some will bite, and each one drags a book of vendors with them.
- **Trade shows.** The vendors selling serving robots and self-checkout all exhibit at the same restaurant/retail tech shows. One booth, one demo, a room full of ICP.

Realistic: 20–30 paying vendors in the first 6 months via direct + scrivener channel. 100 inside 12–15 months.

## 10. Build complexity — justification

**Medium.** No novel tech. It's a document-workflow SaaS with a strong LLM generation core, plus a customer-facing artifact-collection flow. Everything is off-the-shelf: standard web stack, a frontier model for the Japanese plan generation, vision for artifact validation.

The complexity isn't engineering, it's **domain**. You must actually understand what a passing 事業計画 looks like, what gets returned and why, and how the secretariat's reviewers think. That knowledge has to be bought (hire/partner with a 行政書士) or earned (file a dozen applications yourself). Budget 3–4 months to a credible v1 for a pair, of which a meaningful chunk is domain acquisition, not code.

Risk of scope creep is real: resist building a full CRM. Integrate with what the vendor already uses.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Preparing subsidy documents as software is not a reserved 行政書士 act; we sell a tool to the applicant/co-applicant, we do not represent them. **Worth a lawyer's confirmation before launch — see risk flags.** |
| Ethical — no harm / dark patterns | ✅ | We help legitimate applicants file accurate applications faster. We must not help fabricate labor-shortage evidence — that's a hard product line. |
| Market exists (evidence above) | ✅ | 1,000+ catalog products, mandatory co-filing, and an existing human services market charging 8–15%. |
| 1–5 person team can build this | ✅ | Two people + a domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Inference + hosting + a scrivener advisor's retainer. Well under. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | The subsidy is half the purchase price, so filing failure = lost sale. Felt on every deal, not occasionally. Not a 19 only because the vendor *can* limp along by paying a scrivener — expensive, but not existential. |
| Demand evidence | 15 | 11/15 | Strong indirect evidence: mandatory co-filing, 1,000+ products, a thriving 8–15% success-fee human market, record labor-shortage bankruptcies driving volume. Docked because I could not find a published count of registered 販売事業者, and I have **zero verbatim vendor complaints** — the Japanese web doesn't air grievances the way Reddit does. This axis is an inference, not a quote. |
| Build feasibility | 15 | 12/15 | Standard stack + LLM core. Domain knowledge is the long pole, not engineering. 3–4 months for a pair. |
| Distribution clarity | 15 | 12/15 | The customer list is a public government catalog — that's as clear as it gets. Docked because Japanese B2B cold outreach converts poorly and the scrivener-as-reseller channel is unproven. |
| Revenue mechanics | 15 | 12/15 | Pricing is trivially justified against an 8–15% success fee. Docked because the $5M path genuinely requires multi-subsidy expansion; the single-program ceiling is ~$2M. |
| Time to first revenue | 10 | 7/10 | Japanese enterprise-ish sales cycles are slow and trust-heavy. Realistically 8–12 weeks to first paying vendor, and only if you're Japanese-native. |
| Defensibility | 10 | 4/10 | This is the weak axis and I won't dress it up. Execution-only moat at month 3. The rejection-reason corpus becomes a modest data moat by month 12, and a scrivener-partner network is sticky. But a competent Japanese team could clone the core in a quarter. **Speed and domain relationships are the entire defence.** |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy` · `domain-expertise-required`

The domain tag is doing heavy lifting here. This is **not** a build for a non-Japanese founder. Native-level Japanese business writing and the ability to sit across from a 行政書士 and a distributor sales manager are prerequisites, not nice-to-haves.

### Key assumptions to validate (3–5)

1. **Assumption:** There are enough registered 販売事業者 doing enough volume to support a ¥150M+ ARR business. **How to test:** Scrape the full product catalog, extract every vendor from every product detail page, de-duplicate. This is a two-day job and it either confirms or kills the TAM. Do this **first, before anything else.**
2. **Assumption:** A model-generated 事業計画 can clear the secretariat's bar at a rate comparable to a scrivener's. **How to test:** Obtain 5–10 successful past applications (via a 行政書士 partner), generate plans for the same fact patterns, and have that scrivener blind-rank ours against the originals.
3. **Assumption:** Vendors — not SMEs — actually feel this pain and will pay for it. **How to test:** 15 interviews with sales managers at catalog-registered vendors. Ask one question: "Who fills out the joint application, and what does it cost you when it's returned?" If they shrug, this idea is dead and the SME-side cut isn't better.
4. **Assumption:** Software-assisted document preparation doesn't trip Japan's 行政書士法 reserved-acts rules. **How to test:** One hour with a Japanese lawyer. Cheap, and it's a binary gate.
5. **Assumption:** Scriveners will resell rather than resent. **How to test:** Pitch 5 of them. If all 5 see us as a threat, the channel is direct-only and distribution drops a couple of points.

### Risk flags

1. **Regulatory / platform dependency (severe):** The entire business is a rider on one subsidy program. METI changes the scheme, folds the catalog type, or slashes the budget in a fiscal cycle — and the product's reason to exist evaporates. This is the single largest risk and the reason the multi-subsidy expansion isn't just an upsell, it's *risk mitigation*. Get onto the second program early.
2. **Reserved-acts risk:** If Japan's 行政書士 lobby successfully argues that generating application documents is a reserved act, the product becomes a "drafting assistant the customer must review" — survivable, but it dents the value prop. Confirm before building.
3. **Evidence-fabrication temptation:** Customers will ask us to help them *look* labor-shortaged. Refusing this costs deals and must be a founding principle, because getting caught assisting fraudulent applications ends the company and poisons the channel.
4. **Founder-market fit:** A non-Japanese team will fail at this regardless of how good the software is. If you can't staff it native, don't start.
5. **Weak defensibility:** 4/10. A funded Japanese competitor with better vendor relationships beats a better product here. Land the scrivener partnerships early — they're the stickiest thing available.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japanese-native technical founder + a 行政書士 / subsidy-consultant
                        co-founder or advisor. Sales-led. Not a solo gaijin build.
Time to revenue:        8–12 weeks to first paying vendor
Capital to launch:      ¥3–5M (~$20–35K) — mostly the domain advisor's retainer and inference
Top 3 assumptions to validate first:
  1. Registered 販売事業者 count is in the high hundreds+ — scrape the official product
     catalog's vendor lists and de-duplicate. Two days. Do this before writing any code.
  2. AI-generated 事業計画 clears the bar — blind-rank generated plans against 5–10 real
     successful applications, judged by a practising scrivener.
  3. The vendor, not the SME, is the one who feels the pain and holds the budget —
     15 interviews with sales managers at catalog-registered vendors.
Kill criteria:
  - Abandon if the de-duplicated registered-vendor count is under ~300. The ARR ceiling
    collapses below the point of interest.
  - Abandon if fewer than 5 of 15 interviewed vendor sales managers name the joint
    application as a real cost or a lost-deal cause.
  - Abandon if a scrivener blind-ranks our generated plans below their own on 4 of 5
    fact patterns — the AI core is the product, and if it can't write, there's nothing here.
  - Abandon if METI signals the catalog type is being wound down or the budget cut.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape the official 省力化投資補助金 product catalog. Pull every product detail page, extract the 販売事業者 list from each, de-duplicate into a single vendor roster. **This produces a hard number.** If it's under ~300 vendors, stop — the sprint is over and the answer is no. If it's 800+, we have a market and we also have our entire prospect list.
- **Day 3–4:** Retain a 行政書士 for a day rate. Get 5 real, previously-successful 事業計画 documents (redacted). Generate our own plans against the same fact patterns. Have them blind-rank all 10. Simultaneously, book and run interviews with vendor sales managers off the Day 1–2 roster — target 15, accept 8.
- **Day 5:** Decide.

**Falsifiable go/no-go:** Proceed only if **(a)** the de-duplicated vendor roster exceeds 300, **AND (b)** the scrivener ranks our generated plans at or above their own on at least 3 of 5 fact patterns, **AND (c)** at least 5 of the interviewed vendor sales managers independently describe the joint application as a source of lost deals or meaningful cost.

Miss any one of the three and this is a PASS, not a GO. All three are measurable inside five days, and none of them require writing a line of production code.
