---
title: "BidSort — RFQ triage desk for small machine shops"
slug: job-shop-bid-triage
date: 2026-07-20
category: Manufacturing / US-SMB
complexity: Medium
score: 72
verdict: GO
confidence: Medium
oneLiner: "Tells a 12-person machine shop which RFQs are worth quoting tonight — and which to politely decline."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Solo-builder, Workflow automation, Manufacturing]
axes:
  problem: 16
  demand: 11
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# BidSort

## 1. One-liner

Tells a 12-person machine shop which RFQs are worth quoting tonight — and which to politely decline.

## 2. Trend signal — why now?

Three things moved at once.

**Quoting is the bottleneck, and it's an unpaid one.** The Modern Machine Shop Top Shops benchmark puts the median quote-to-book ratio at 70% for Top Shops and 51% for everyone else. Read that second number honestly: the average shop does the full estimating work on two jobs to win one. Half of all estimating labour in the industry produces nothing. That's not a rounding error — for a shop where the owner is the estimator, it's the single largest source of unpaid overtime.

**The tools shops actually use are spreadsheets, and they hate them.** CNCCookbook surveyed 100 shops on job costing. Spreadsheets were "the number one player by a wide margin," with "eyeball guestimate" second. At least 40% of respondents said they must estimate without a CAD model, working from "back of napkin drawings and descriptions." The survey's own summary of sentiment: "nobody is happy with any of the available solutions," with responses it called "massively negative" — against 15–20% who'd consider switching CAD/CAM.

**The incumbents went upmarket and priced out the small shop.** Paperless Parts and CADDi both raised big and both target the shops that can afford them — CADDi took $38M in March 2025 at a $470M valuation, total raised ~$202M. Software Advice's roundup reports Paperless Parts' top Professional package at $799/month billed annually and notes smaller one-or-two-person operations find it expensive versus low-cost estimating platforms. (Paperless Parts does not publish pricing; treat that figure as third-party reported, not vendor-confirmed.) The 10–25 employee shop is squarely between "spreadsheet" and "$800/month."

And here's the part the incumbents structurally can't sell: **they all make quoting faster. None of them tell you not to quote.** CADDi's own guidance says it plainly — "It's also important to decline responding to specific RFQs from customers where your historical win rate is very low… If a customer rarely awards you business and seems to just include you for competitive bidding, it may not be worth the time and effort to keep bidding." That advice exists in a blog post. It does not exist in a product. A quoting vendor priced per quote or per seat has no incentive to build the button that says "skip this one."

```
Provenance:
  - Signal 1 (demand): Median quote-to-book ratio 70% Top Shops vs 51% average — half of average-shop estimating labour wins nothing — https://www.mmsonline.com/articles/using-benchmarking-to-establish-a-path-to-machine-shop-success — observed 2026-07-20
  - Signal 2 (demand/feasibility): CNCCookbook 100-shop job costing survey — spreadsheets dominate, ≥40% quote without CAD models, sentiment "massively negative" — https://www.cnccookbook.com/job-quote-cost-estimation-survey-results/ — 2024, observed 2026-07-20
  - Signal 3 (economic): CADDi $38M raise Mar 2025 at $470M valuation (~$202M total); Paperless Parts Professional reported at $799/mo annually, called expensive for small shops — https://fortune.com/2025/03/27/japanese-ai-startup-caddi-venture-capital-funding-atomico-supply-chain-optimization/ + https://www.softwareadvice.com/cpq/paperless-parts-profile/ — observed 2026-07-20
  - Signal 4 (gap): CADDi publicly advises declining low-win-rate RFQs — as advice, not as product — https://us.caddi.com/resources/insights/job-shop-rfq-management — observed 2026-07-20
  Category: Underserved niche
```

## 3. The opportunity

Every quoting product in this market optimises the wrong verb. Paperless Parts, CADDi, JobBOSS², Micro Estimating — all of them make *producing a quote* faster. That's genuinely useful and they do it well. But it treats the RFQ inbox as a given and the estimator's time as infinitely divisible.

The average shop's real problem isn't that each quote takes too long. It's that it quotes two jobs to win one, and it doesn't know in advance which one is which. Making a losing quote 40% faster still makes it a losing quote.

BidSort attacks the input side. It sits on the RFQ inbox, scores each incoming request against the shop's own history — which customers actually award, which part geometries this shop wins, which ones it's being used as a price-check on — and ranks tonight's pile. Quote the top four. Send a courteous decline or a deliberately high placeholder on the rest.

The wedge against incumbents is structural, not technical. A vendor whose pricing scales with quote volume cannot credibly ship a feature that reduces quote volume. BidSort's entire value proposition is that reduction, so it can price on shop size instead. That's a positioning incumbents would have to cannibalise themselves to copy.

Second-order value, and possibly the stickier one: shops don't currently track *why* they lost. Win/loss reasons live in the owner's head. BidSort forces a two-click disposition on every quote — won / lost on price / lost on lead time / no response / no-quoted — and after ninety days that's a proprietary dataset about this specific shop's market position that no incumbent has.

## 4. Target market

**Primary customer:** Owner or general manager of a US contract machine shop or metal fabricator, 8–35 employees, $1.5M–$12M revenue. The person who does the quoting is the owner, a working GM, or a single senior estimator who is also the person who can read a print fastest. Almost always the same person who is running the floor.

**Why they buy:** They are quoting at night and on weekends. Practical Machinist threads on quoting are full of this — one owner describes 20–30 hours to requote complex assemblies with 130 parts each. The gap between "quote fast enough to win" and "have any evenings" is the thing they'd pay to close. Their felt problem is not "my quotes are slow," it's "I am the bottleneck and I'm drowning."

**Rough TAM reasoning:** US Census County Business Patterns puts NAICS 3327 (machine shops, turned product, screw/nut/bolt) at roughly 20,000+ establishments; the majority are under 50 employees. Add sheet metal fabrication (NAICS 332322) and the addressable band of 8–35 employee shops is plausibly 12,000–18,000 establishments in the US alone. At $249/mo, 1% penetration of the low end of that range is ~$430K ARR. This is a genuinely small market — which is exactly why it's survivable. It is too small to interest a $470M-valuation company and large enough to build a $2–4M ARR business.

**Why now for them:** Reshoring has raised inbound RFQ volume for domestic suppliers — the Reshoring Initiative's 2025 report counts ~287,000 announced reshoring + FDI jobs, the second-highest year on record. More inbound requests, same one estimator. The constraint tightened rather than loosened. Note the honest caveat: announced jobs lag actual hiring by 12–24 months and only a fraction convert, so treat this as directional pressure, not a demand guarantee.

## 5. Product sketch (MVP)

- **RFQ inbox capture** — forward or auto-sync the address RFQs already land in (quotes@, sales@). Parses the email, attachments, and part files into a structured request without the estimator opening anything.
- **Tonight's pile, ranked** — one screen, every open RFQ scored 0–100 with a plain-English reason: "Ranked low — Kestrel Aerospace has sent 14 RFQs in 9 months, awarded 1. Likely price-checking."
- **Customer award history** — per-buyer scorecard built from the shop's own dispositions: RFQs sent, awarded, win rate, average time-to-award, whether they ever come back after losing.
- **Capability fit check** — flags requests that don't match the shop's machines, tolerances, materials, or certifications before anyone spends an hour on them. Catches the 5-axis titanium job at a 3-axis aluminium shop in ten seconds.
- **Two-click disposition** — every quote closes as won / lost-price / lost-leadtime / no-response / no-quoted. This is the data engine; the UI is built so it takes under five seconds.
- **Decline templates** — courteous no-quote and "capacity-priced" responses that keep the relationship warm without burning an evening.
- **Monthly reality report** — where estimating hours went, what they returned, which three customers to stop bidding.

Explicitly *not* in v1: cost estimating, CAM time calculation, ERP replacement, quote document generation. BidSort sits upstream of whatever they already use and does not try to replace it.

## 6. AI angle — what's load-bearing

Remove the AI and this becomes a spreadsheet with a win-rate column — which is exactly what a diligent shop already keeps and most don't. The AI does three things that are the product:

**Unstructured intake.** RFQs arrive as email threads with PDF prints, STEP files, photographed napkin sketches, and requirements buried in message bodies. The CNCCookbook finding that ≥40% of shops quote without CAD models means the parser must handle bad drawings and prose, not clean CAD. Vision models reading a scanned print for material, tolerance, quantity and finish is the enabling capability, and it's genuinely new enough to matter — this was not reliably possible on a $250/mo cost structure two years ago.

**Capability matching.** Deciding whether a part is quotable on this shop's equipment requires reading geometry and callouts against a machine list. That's a judgement call, done by a human today, and it's the one that eats the most time before producing zero output.

**Scoring with a cold start.** A new customer has no award history. The model has to generalise from similar parts, similar buyers, and similar outcomes across the shop's own record to produce a defensible score on day one.

The scoring itself is mostly regression on the shop's own data — deliberately so. That part should be explainable, because an owner will not act on a number they can't argue with.

## 7. Localization angle

N/A — this is a US-first play. The wedge depends on domestic reshoring RFQ pressure, US shop-size distribution, and English-language prints. India and SEA have large machining sectors but different economics: labour is cheap enough that estimator time is a far weaker constraint, which is precisely the thing this product sells against. EU is a plausible second market (Germany's Mittelstand fits the shop-size profile) but the language and drawing-standard work is real. Don't force it.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $249/mo for shops under 15 employees, $449/mo for 15–35. Flat per shop, explicitly not per quote and not per seat — the whole pitch is fewer quotes, so volume pricing would be self-defeating and shops will notice.
- **ACV:** ~$3,600 blended.
- **To $1M ARR:** ~280 shops. Achievable — it's under 2% of the addressable band.
- **To $5M ARR:** ~1,000–1,200 shops plus expansion, or the same customer count with an added estimating module at roughly double ACV. $5M requires either EU expansion or moving up into the 35–100 employee band where Paperless Parts is entrenched. Honest read: $2–3M is the comfortable ceiling on the core wedge alone. That is a good bootstrapped outcome and a bad venture outcome, which is the correct shape for this portfolio.
- **Expansion path:** capacity-aware lead-time suggestions, then a light estimating assist, then multi-site rollups. Each is a real upsell but each also moves toward the incumbents' turf — sequence carefully.

The margin structure is fine: inference on a few hundred RFQs per shop per month is a low-single-digit dollar cost against $249.

## 9. Go-to-market wedge — first 100 customers

- **The audit, not the demo.** Offer a free "quoting reality audit": the shop forwards twelve months of quote emails, gets back a one-page PDF showing which customers wasted their estimating hours and what their real win rate is per buyer. This is deliverable semi-manually for the first 50 prospects and it is *devastating* as a sales artifact — it tells the owner something true about their business they didn't know. Convert the audit into a trial. Target 25–30% audit-to-trial.
- **Practical Machinist and r/Machinists, as a participant not an advertiser.** The "what percentage of quotes do you win?" thread already exists and has years of engaged replies. Publish the aggregate audit data back to those communities — anonymised win rates by customer type — and let the audit offer ride along. These forums are small, high-trust, and hostile to marketing, so this must be genuine contribution or it backfires.
- **Regional manufacturing associations and MEP centers.** NIST MEP has centers in every state whose entire job is helping small manufacturers improve operations, and they run workshops shops already attend. A "stop quoting jobs you won't win" session is a natural fit and gets a warm room of 20–40 exact-profile owners.
- **IMTS and regional trade shows.** IMTS is the big one; regional Fabtech-style shows are cheaper and denser with small shops. Don't take a booth — walk the floor with the audit offer. First-year cost is a plane ticket.
- **Cold outreach on capability directories.** Thomasnet, MFG.com and state manufacturer directories list shops with employee counts and capabilities — filterable to exactly the 8–35 band. A few thousand named targets, personalised on their listed machines. Expect low single-digit reply rates; this is the volume backstop, not the primary channel.

The first channel is the one that matters. If the free audit doesn't convert, the idea is in trouble — see kill criteria.

## 10. Build complexity — justification

**Medium.** Email/attachment intake, a vision pipeline for prints, and a scoring layer are all off-the-shelf-model work — no training required, no custom infra. The genuine effort is in unglamorous parsing robustness (shops send everything, badly) and in a disposition UI fast enough that a busy owner actually uses it, because the entire data flywheel dies if they don't. Optional ERP read integrations (JobBOSS², E2, MIE Trak) add real time but aren't needed for v1. Two people, 12–16 weeks to a shop that can run its whole RFQ inbox through it.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Shop's own data; no regulated activity. ITAR-adjacent prints need care — see risk flags. |
| Ethical — no harm / dark patterns | ✅ | Helps a small business decline unprofitable work. No dark patterns; the product's stated aim is doing less. |
| Market exists (evidence above) | ✅ | 100-shop survey, published benchmark ratios, two funded incumbents in the adjacent lane. |
| 1–5 person team can build this | ✅ | Two people, 12–16 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Inference + hosting + one trade show. Well under. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, weekly, costs unpaid evenings and measurable margin — the 51% quote-to-book number is the whole argument. Not 18+: shops have lived with it for decades and the workaround (guess, quote anyway) functions. |
| Demand evidence | 15 | 11/15 | Strong indirect evidence — survey sentiment, benchmark ratios, funded incumbents adjacent. Docked because I found no verbatim customer asking for *this* product specifically; the demand for triage is inferred from the demand for faster quoting. |
| Build feasibility | 15 | 11/15 | Off-the-shelf models, standard stack. Parsing robustness against bad scans and the disposition-UX problem are the real work. |
| Distribution clarity | 15 | 11/15 | The free audit is a genuinely strong, concrete wedge with a named artifact. Docked because these channels are slow and high-touch — trade shows and MEP centers move at their own pace. |
| Revenue mechanics | 15 | 11/15 | Pricing sits credibly under a reported $799 incumbent tier; $1M needs only ~280 shops. Docked because $5M requires expansion beyond the core wedge. |
| Time to first revenue | 10 | 7/10 | Audit-to-trial-to-paid is a 6–10 week cycle with owners who are hard to reach. Manual audits can pre-sell before v1 ships. |
| Defensibility | 10 | 5/10 | Per-shop win/loss data compounds and creates real switching cost by month 6. But the concept is copyable and Paperless Parts could bolt on triage if it chose to — the barrier is that it doesn't want to, which is strategy, not moat. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can read a machining print or a co-founder/first hire who can. Selling to shop owners without credibility on the floor is close to impossible — they can smell a software person in one question. This is the single biggest founder-fit constraint.

### Key assumptions to validate

1. **Assumption:** Shops will act on a "don't quote this" recommendation rather than quoting anyway out of habit or fear of losing the relationship. **How to test:** Run 15 manual audits; in follow-up calls four weeks later, ask specifically which recommended declines they actually declined. If under a third acted, the product is an interesting report, not a workflow.
2. **Assumption:** Owners will complete the two-click disposition consistently enough to feed the model. **How to test:** Instrument a 10-shop pilot; require >70% of closed quotes dispositioned in month two without nagging.
3. **Assumption:** $249/mo clears the bar for an 8–15 employee shop. **How to test:** Price the audit-to-trial conversion at $249 from day one. Never validate pricing by asking — validate by charging.
4. **Assumption:** RFQ parsing works on the real garbage shops receive (photographed prints, faxes, prose emails). **How to test:** Collect 200 real RFQ emails during audits before building; measure extraction accuracy against manual review.

### Risk flags

1. **Incumbent response:** Paperless Parts or CADDi could add triage. Structurally disincentivised (it reduces the volume their pricing rides on) but not impossible, especially if either shifts to flat pricing. Mitigation is speed and the low-end price point they won't chase.
2. **Data cold start:** A shop with no history gets weak scores in month one — exactly when they're deciding whether to keep paying. The audit partly solves this by mining twelve months of past emails upfront, and that's the reason the audit is the wedge rather than just a marketing gimmick.
3. **ITAR / defense prints:** A meaningful slice of US job shop work is ITAR-controlled. Ingesting those drawings has real compliance obligations. v1 should explicitly exclude ITAR work and say so loudly; solving it properly is a later, deliberate investment (and is precisely why Paperless Parts advertises ITAR compliance).
4. **Behaviour change is the product:** "Do less work" is a harder sell than "do work faster," even when it's worth more. Some owners will not emotionally accept declining an RFQ from a name-brand buyer regardless of the math.
5. **Market ceiling:** This is a small market. Fine for $2–3M ARR, wrong if the builder wants more.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with genuine shop-floor credibility, or paired with a
                        former estimator/shop GM as co-founder
Time to revenue:        8–12 weeks (manual audits can pre-sell before v1 ships)
Capital to launch:      $15–25K
Top 3 assumptions to validate first:
  1. Shops act on decline recommendations — 15 manual audits, 4-week follow-up on actions taken
  2. Disposition capture sustains >70% in month two — 10-shop instrumented pilot
  3. $249/mo converts — charge from the first trial, never ask
Kill criteria:
  - Abandon if <30% of 15 audited shops can name a customer they'd stop quoting after seeing their own data
  - Abandon if disposition capture falls below 50% by month two of pilot — the flywheel can't turn
  - Abandon if Paperless Parts ships bid-triage with flat pricing below $400/mo before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 15 shop owners (8–35 employees) from Practical Machinist, r/Machinists, and one regional MEP center. Offer the free quoting audit. Ask each to forward twelve months of quote emails. The recruitment response rate is itself the first signal — if fewer than 15 of 60 approached will hand over the data, the trust barrier is higher than assumed.
- **Day 3–4:** Manually build the audit for 8–10 shops. Per-customer win rate, estimated hours spent per customer, and a ranked "stop quoting these three" list. Do this by hand — no product.
- **Day 5:** Deliver each audit on a live call. Ask exactly one question and shut up: *"Which of these three would you actually stop quoting?"*

**Falsifiable outcome:** ≥8 of the audited shops name at least one customer they will stop quoting, and ≥4 accept a paid pilot at $249/mo on the call. Below that, the insight is interesting but not a purchase, and the idea goes back in the drawer.
