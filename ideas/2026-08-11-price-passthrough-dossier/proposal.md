---
title: "NegoDossier — price-rise evidence pack for Japan's suppliers"
slug: price-passthrough-dossier
date: 2026-08-11
category: ProfessionalServices / Japan — Sub-100-Employee Suppliers Who Are Legally Entitled to a Price Negotiation and Never Ask for One
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Builds the cost-evidence packet a small Japanese supplier needs to ask its biggest customer for a price rise."
tags:
  vertical: ProfessionalServices
  model: SaaS
  geography: Global
  secondary: [Japan, Compliance-driven, SMB, AI-agent, Document-generation, Solo-builder]
axes:
  problem: 16
  demand: 13
  build: 13
  distribution: 11
  revenue: 10
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# NegoDossier

## 1. One-liner

Builds the cost-evidence packet a small Japanese supplier needs to ask its biggest customer for a price rise.

## 2. Trend signal — why now?

Japan spent three years telling small suppliers they are allowed to raise prices. It worked about half way, and the half that failed is the product.

**The law changed on 1 January 2026.** The old 下請法 (Subcontract Act) was rewritten and renamed 中小受託取引適正化法 — "取適法" for short. The headline change is not the payment terms. It is this: a buyer that **refuses to engage when a small supplier asks to discuss price, or that sets the price unilaterally, is now in violation** ([政府広報オンライン](https://www.gov-online.go.jp/article/202511/entry-9983.html), [辻・本郷税理士法人](https://www.ht-tax.or.jp/topics/toritekiho-2026/)). Ignoring the request, endlessly postponing the meeting, or making negotiation deliberately difficult all count. Promissory notes are banned outright, payment compresses to 60 days, and buyers can no longer push bank transfer fees onto the supplier.

**Enforcement stopped being theoretical.** In FY2025 the JFTC issued **39 formal recommendations** for Subcontract Act violations — up 18 year-on-year and the highest since the start of the Heisei era — plus **1,454 improvement directives**, itself up 272 ([日本経済新聞](https://www.nikkei.com/article/DGXZQOUD093DV0Z00C26A6000000/), [日刊工業新聞](https://www.nikkan.co.jp/articles/view/00783770)). Buyers are genuinely nervous. That nervousness is the supplier's leverage, and almost no supplier is using it.

**And the pass-through still fails, specifically on labour.** METI surveys 300,000 supplier SMEs every March and September. The March 2026 round: 90.7% report that a negotiation happened, but the pass-through rate is only **54.2%** — materials 55.7%, **labour costs 50.0%**, energy 48.9% ([METI](https://www.meti.go.jp/press/2026/06/20260626003/20260626003.html), [PSRネットワーク](https://www.psrn.jp/topics/detail.php?id=41526)). A JFTC special survey put labour-cost pass-through at **30.0%** against 80.0% for raw materials ([JFTC guideline materials](https://www.jftc.go.jp/dk/guideline/unyoukijun/romuhitenka.html)). Materials have a published index anyone can point at. Labour does not — you have to build the argument yourself, and small suppliers cannot.

The government's own diagnosis of why suppliers stay quiet is blunt: they fear **転注** — the order being moved to a competitor. Firms report an industry-wide reluctance where negotiating alone risks losing volume ([中小企業庁 follow-up survey](https://www.chusho.meti.go.jp/keiei/torihiki/follow-up/dl/202509/result_01.pdf)).

And when they do ask, this happens, verbatim from METI's own supplier hearings: the buyer runs **its own cost calculation** and tells the supplier *"this is what the price should be"* — 親事業者による原価計算により「この金額であるべき」と言われる ([中小企業庁 生声資料](https://www.chusho.meti.go.jp/koukai/kenkyukai/kenjinkaigi/2020/download/200123kenjinkaigi_sanko.pdf)). Industry sources describe made-to-order manufacturers who simply *do not know the cost of an individual product*, so when the buyer says "show me the basis per item," the conversation ends ([Factory Advance](https://factoryadvance.jp/blog/877/), [TECHS](https://www.techs-s.com/media/show/188)).

The right to negotiate exists. The buyer's fear exists. The evidence packet does not get written. That gap is the product.

```
Provenance:
  - Signal 1 (Demand): METI's March 2026 follow-up survey of 300,000 supplier SMEs shows pass-through stuck at 54.2% overall and 50.0% on labour; JFTC special survey puts labour pass-through at 30.0% vs 80.0% for raw materials; suppliers report buyers running their own cost models and dictating "this is what the price should be" — https://www.meti.go.jp/press/2026/06/20260626003/20260626003.html and https://www.chusho.meti.go.jp/koukai/kenkyukai/kenjinkaigi/2020/download/200123kenjinkaigi_sanko.pdf — observed 2026-08-11
  - Signal 2 (Feasibility): The revised 取適法 took effect 1 January 2026, making refusal-to-negotiate and unilateral price-setting violations; the Cabinet Secretariat/JFTC "12 actions" labour-cost guideline gives a published, checkable list of buyer conduct, revised 26 December 2025 — https://www.gov-online.go.jp/article/202511/entry-9983.html and https://www.jftc.go.jp/houdou/pressrelease/2025/dec/202512_roumuhi.html — observed 2026-08-11
  - Signal 3 (Economic): JFTC FY2025 enforcement hit 39 recommendations (highest since start of Heisei, +18 YoY) and 1,454 improvement directives (+272); METI publishes a graded, named buyer list (A–G) covering 210+ companies, with the next edition due early-to-mid August 2026 — https://www.nikkei.com/article/DGXZQOUD093DV0Z00C26A6000000/ and https://monoist.itmedia.co.jp/mn/articles/2501/22/news109.html — observed 2026-08-11
  Category: Regulatory arbitrage
```

## 3. The opportunity

The incumbent here is a **free Excel file from the government**, and that is exactly why this is available.

METI, the SME Agency, and several prefectures publish price-negotiation support tools. Saitama's is the best of them: 1,400+ raw material and service price series, updated monthly, and it will chart any of them for you ([TECHS](https://www.techs-s.com/media/show/387), [中小企業庁 support tools](https://www.chusho.meti.go.jp/keiei/torihiki/shien_tool.html)). The SME Agency also ships a Word template for cost-item-by-cost-item negotiation and a 価格交渉ハンドブook, and staffs a 価格転嫁サポート窓口 in all 47 prefectures.

Every one of these produces **a chart of an industry index**. None of them produces **an argument about your customer**.

That distinction is the whole business. A commodity index chart says "steel went up 12% nationally." The buyer's purchasing officer already knows that, has the same chart, and answers "we've absorbed that for everyone, and your competitor didn't ask." What actually moves a price is the thing the supplier cannot assemble:

- **This customer specifically.** Which of your SKUs go to them, what you have been paid per unit, how that price has moved over 36 months against your own wage bill and material costs, and what your margin on their work is *today* versus when the price was set.
- **The labour-cost argument, built the approved way.** The JFTC/Cabinet Secretariat guideline explicitly tells suppliers to use **published references** — minimum wage increases, 春闘 settlement rates — rather than inventing bespoke calculations, precisely because published references are hard for a buyer to dispute. Almost no small supplier knows this is the sanctioned method.
- **The conduct record.** The date you asked. The date they replied, or did not. Whether the meeting was postponed three times. Under the 2026 取適法 that record is not a grievance diary — it is evidence of a violation, and both the JFTC and the sector ministry now accept complaints.

The 12-action guideline is the unlock. It is a **published checklist of what a buyer is supposed to do**. Structure the supplier's request so it maps onto that checklist, cite it, and the buyer's cheapest path stops being "ignore this" and becomes "engage." You are not threatening anyone. You are making the polite, correct, well-evidenced request that is annoying to refuse in writing.

The 10× is not analysis quality. It is that a 40-person parts maker with no cost accountant gets a customer-specific, guideline-aligned, citation-backed 6-page packet in an afternoon instead of never.

## 4. Target market

- **Primary customer:** Owner or 専務 of a Japanese supplier firm, 10–100 employees, ¥300M–¥3B revenue, where one to three customers are >40% of sales. Made-to-order manufacturing, metal/plastic parts, printing, packaging, industrial subcontracting, building maintenance, food processing subcontractors. No full-time cost accountant — the president and one back-office person do everything.
- **Why they buy:** Their wage bill has risen every year through 春闘 and minimum-wage hikes. Their price to their largest customer has moved once, or not at all. They know they are supposed to negotiate. They open the government Excel, produce a chart of an index, look at it, and conclude it will not survive contact with the purchasing department — because it will not. In their own words, from METI hearings: they are told *"show me the basis per product"* and cannot.
- **Rough TAM reasoning:** METI's own survey frame is **300,000 supplier SMEs** contacted twice a year. Japan has roughly 3.3M SMEs total; the subcontracting-dependent manufacturing and services core with real buyer concentration is credibly in the low hundreds of thousands. I do not need a big slice. 1,000 paying firms is a business.
- **Why now for them:** Three things landed at once. The law changed in January 2026 and now names refusal-to-negotiate as a violation. Enforcement hit a post-1989 record. And METI publishes the graded buyer list — A through G, 210+ named companies — in **early-to-mid August 2026**, which is a public, dated, forwardable event that tells a supplier exactly how their own customer scored.

## 5. Product sketch (MVP)

- **Customer-level cost picture from what they already have.** Upload the last 24–36 months of invoices or sales ledger exports per customer, plus payroll totals and main material purchases. Get per-customer revenue, unit price history, and the gap between price movement and cost movement.
- **The margin-erosion chart.** One page: what this customer pays you, versus what it costs to serve them, indexed to the date the current price was agreed. This is the slide the buyer cannot wave away with an industry average.
- **Guideline-aligned labour-cost argument.** Auto-builds the labour case from *published* references — regional minimum wage trajectory, 春闘 settlement rates, relevant sector wage indices — because that is the method the JFTC guideline sanctions. Cites the source under each figure.
- **The request letter (申入書).** A formal, correct, politely-worded price consultation request that references the 取適法 and the 12-action guideline without ever sounding like a threat. Japanese business register, not translated English.
- **Buyer scorecard lookup.** Pulls the customer's published METI grade and pass-through evaluation, if they are on the list, and folds it into the packet.
- **Negotiation log.** Timestamped record of every request sent, reply received, and meeting postponed — formatted so it can be handed to the JFTC or the sector ministry unchanged if it comes to that.
- **The objection drill.** Before the meeting, the supplier gets the four objections their buyer is most likely to use, with the evidence-backed reply to each.

## 6. AI angle — what's load-bearing

Remove the AI and this is the government's Excel file again. Three places it does real work:

**Reading the mess.** The input is Japanese invoices, sales ledgers, 見積書 and payroll summaries in every layout imaginable — PDF, scanned paper, ancient spreadsheet exports, 会計ソフト dumps. Normalising those into a per-customer, per-SKU price and volume history is the hard, unglamorous core. Vision-capable models made this a weeks-long build instead of a per-customer integration project. This is the part a small supplier will never do by hand, which is precisely why they never negotiate.

**Writing the argument in the right register.** A Japanese price-increase request to a long-standing major customer is a genre with rules. Too blunt and you damage a 30-year relationship; too soft and it gets filed and forgotten. Producing that document, in correct 敬語, citing the right statute and the right guideline clause, is squarely what current models are good at — and it is what a 40-person parts maker cannot produce and will not pay a lawyer ¥200,000 to draft.

**Anticipating the buyer.** Given the customer's industry, the buyer's published grade, and the supplier's own numbers, generating the likely objections and the sourced rebuttals is genuine reasoning over assembled evidence, not template-filling.

The rule I'd hold: every number in the packet traces to an uploaded document or a cited public index. No model-invented figures. In a document that may end up in front of the JFTC, a hallucinated cost line is fatal to the whole company's credibility.

## 7. Localization angle

This is Japan-only and could not be anything else. The wedge *is* the localization.

The statute is Japanese (取適法, effective 2026-01-01). The guideline is Japanese (労務費転嫁指針, 12 actions). The wage references are Japanese (春闘, prefectural minimum wage). The buyer grading list is METI's. And the document register — a formal 申入書 that asks firmly without causing the customer to lose face — has no equivalent in an English-language tool. A generic global "price increase letter generator" is useless here and would in fact be actively harmful.

Pricing localizes too. ¥9,800/month reads as reasonable to a Japanese SME owner in a way $200/month does not. Payment must include 銀行振込 and invoice-based billing, not card-only — a 60-year-old 社長 in Higashi-Osaka is not entering a credit card.

Distribution is local: 商工会議所 (chambers of commerce), 中小企業診断士 (the certified SME consultant profession), and 税理士 — the tax accountant who is, for most of these firms, the only outside professional they trust and speak to monthly.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ¥9,800/month (~$65) for up to 3 customer dossiers; ¥24,800/month (~$165) for unlimited customers plus the negotiation log and objection drill. Annual prepay at 2 months free, which suits Japanese SME budgeting.
- **One-shot option:** ¥49,800 for a single dossier, no subscription. This matters more than it looks — many suppliers have exactly one negotiation they are afraid of. It also converts: once the price rise lands, the next customer is obvious.
- **ACV:** ~¥180,000 (~$1,200) blended, assuming a mix skewed to the ¥9,800 tier with meaningful upgrade.
- **Rough math to $1M ARR:** 850 firms × ¥14,500/mo average × 12 ≈ ¥148M ≈ $1M. Against a 300,000-firm survey frame, that is under 0.3%.
- **Rough math to $5M ARR:** ~3,500 paying firms, which needs the 診断士 and 税理士 channel working as a repeatable referral engine rather than direct sales — plus the seasonal cycle (below) doing real acquisition work twice a year.
- **Expansion path:** More customers per supplier (most have 3–10 relationships worth arguing about). Then the annual re-run — this is not a one-time job; wages rise every year, so every dossier regenerates each March. Then the accountant/consultant multi-client tier, where a 税理士 office runs dossiers for 30 client firms, which is the real ACV unlock at ¥98,000/month.
- **Honest note:** retention is the risk. A supplier who wins a price rise may feel done. The annual wage cycle and the twice-yearly METI 価格交渉促進月間 (March and September) are the structural answer — the reason to come back is on the calendar, twice a year, forever.

## 9. Go-to-market wedge — first 100 customers

- **Ride the buyer list, in August.** METI publishes named buyer grades (A–G) covering 210+ companies in early-to-mid August 2026 — days from now. Build a free public lookup: "search your customer's price-negotiation grade." Suppliers to the D/E/G-graded buyers are the most under-paid and now have public, government-issued proof of it. That page is the top-of-funnel, it is genuinely useful, and it is news-pegged twice a year forever.
- **The 中小企業診断士 channel.** ~30,000 certified SME consultants, professionally obligated to help exactly this problem, currently doing it by hand in Excel. They are listed, reachable, and organised into prefectural associations. Offer a free multi-client account plus revenue share. Twenty active consultants each bringing five clients is the first 100. This is the primary channel, not a footnote.
- **税理士 offices as the trust proxy.** ~80,000 registered tax accountants; a small manufacturer talks to theirs monthly and takes their advice on everything financial. Most tax accountants have no product for the price-negotiation question and would like one. Same multi-client tier.
- **商工会議所 seminars.** Chambers of commerce run 取適法 compliance seminars constantly right now because the law just changed — they are actively looking for speakers and content. A free "how to build your price-increase evidence packet" session puts you in a room of 40 owners who each brought the problem with them.
- **Target the JFTC enforcement trail.** Every JFTC recommendation is published with the offending buyer named. Those buyers' suppliers are, by definition, firms that were being squeezed and now have a regulator on their side. Public supplier lists and industry directories make this a workable outbound list.

## 10. Build complexity — justification

**Low, edging Medium.** No custom models, no hardware, no regulatory approval, no integrations required for v1 — the first version can accept file uploads and never touch an accounting API. The genuinely fiddly parts are Japanese document ingestion across messy real-world formats, and maintaining the public reference data (minimum wage by prefecture, 春闘 rates, sector indices, the METI buyer list) as a curated, cited dataset. Call it 8–10 weeks to a v1 a real supplier can use, for one or two people, with the majority of that time going into document parsing and getting the Japanese document register right.

The non-negotiable dependency is **domain review**. A 中小企業診断士 or a lawyer who works the 取適法 must sign off on the request-letter templates and the guideline citations before anything ships. Get that wrong and you damage a customer relationship the supplier has held for three decades. That is a paid advisor, not a co-founder — but it is not optional.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping a supplier assemble cost evidence and write a lawful negotiation request. Must stay clear of 非弁行為 — no representing the client, no acting as their agent. Document preparation and analysis, supplier signs and sends. |
| Ethical — no harm / dark patterns | ✅ | The stated policy of the Japanese government is that these negotiations should happen. This makes the sanctioned process accessible to firms too small to afford it. |
| Market exists (evidence above) | ✅ | 300,000-firm government survey frame, 54.2% pass-through, 39 JFTC recommendations, free tools that exist but produce the wrong artifact. |
| 1–5 person team can build this | ✅ | Two people, ~10 weeks, plus a paid domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Main costs are the advisor and inference. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Margin erosion is severe and compounding, and the pain is felt every wage cycle. Docked because it is annual-to-semiannual, not daily — a supplier can defer it another year, and many have deferred it for five. The fear of 転注 is real and cuts both ways: it motivates the purchase and it suppresses action. |
| Demand evidence | 15 | 13/15 | Unusually strong. A 300,000-firm government survey, hard pass-through numbers by cost category, record enforcement, direct verbatim supplier complaints in METI's own materials, and existing free tools proving the need is recognised. Docked only because nobody is yet demonstrably *paying* for this specific artifact. |
| Build feasibility | 15 | 13/15 | Off-the-shelf models, standard web stack, upload-based v1. Japanese document ingestion is the only real engineering. |
| Distribution clarity | 15 | 11/15 | The 診断士/税理士 channels are named, enumerable and structurally motivated, and the August buyer list is a dated hook. Docked because Japanese SME software sales through professional intermediaries is a relationship business that moves slowly, and a foreign or unknown founder will feel that. |
| Revenue mechanics | 15 | 10/15 | Pricing is defensible against the value of even a 2% price rise on a ¥200M account. Docked for genuine retention risk after a win, and because Japanese SME willingness to pay monthly for software is below Western norms — the ¥49,800 one-shot may end up carrying more of the mix than the subscription. |
| Time to first revenue | 10 | 8/10 | The one-shot dossier can be sold before the product is fully automated — do the first ten by hand. Revenue inside 6–8 weeks is realistic. |
| Defensibility | 10 | 3/10 | This is the weak axis and I won't dress it up. The dossier is copyable. The curated reference dataset and the accumulating library of what actually worked against which named buyer compound slowly, and the 診断士 channel relationships are sticky, but a well-funded Japanese incumbent — a 会計ソフト vendor, or freee/Money Forward — could ship this as a feature. Speed and channel ownership are the only real answer. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Native or near-native Japanese is a hard requirement — not for the code, for the document register and the channel conversations. A non-Japanese founder needs a Japanese co-founder or a very committed 診断士 partner, and should assume the sales motion will not work without one.

### Key assumptions to validate (3–5)

1. **Assumption:** A supplier owner will pay ¥49,800 for a dossier before they have any proof it will win them a price rise. **How to test:** Build 10 dossiers by hand for 10 real firms sourced through one 商工会議所, charge for five of them, and see who actually transfers the money.
2. **Assumption:** The dossier changes the outcome — buyers concede more, or faster, than they do against a generic index chart. **How to test:** Track those 10 through to the actual negotiation. Measure the price change achieved versus what the firm got in their previous attempt. This is the assumption the whole business rests on and it is the slowest to test.
3. **Assumption:** 診断士 and 税理士 will bring clients rather than treat the tool as competition for their own billable advisory hours. **How to test:** Pitch 20 consultants directly with the multi-client tier and revenue share. Count how many bring a real client within 30 days.
4. **Assumption:** Suppliers will hand over invoices and payroll data to a small unknown vendor. **How to test:** Part of the same 10-firm pilot — measure how many stall at the data request. Japanese SMEs are conservative about financial data and this could be the quiet killer.
5. **Assumption:** Retention survives the first win. **How to test:** Can't fully test in a week. Proxy: ask the pilot firms how many *other* customers they would want a dossier for. If the median answer is 1, this is a one-shot business and should be priced accordingly.

### Risk flags

1. **Relationship risk — the real one.** If a dossier is too aggressive and a supplier loses a 30-year customer, the product caused catastrophic harm to a small business. The tone of these documents is not a UX detail, it is the core safety property. Ship conservative, advisor-reviewed templates and refuse to make them sharper on request.
2. **Platform/incumbent risk.** freee, Money Forward, or a 会計ソフト vendor already holds the invoice and payroll data this product asks users to upload. If any of them ships a price-negotiation module, the ingestion moat vanishes overnight. The counter is owning the 診断士 channel and the reference dataset before they notice.
3. **Regulatory boundary — 非弁行為.** Preparing documents and analysis is fine; representing or negotiating on the client's behalf is not. The line must be drawn deliberately, in writing, with a lawyer, and the product must never drift across it as customers ask for more help.
4. **Political timing.** This entire opportunity rests on a government push — 価格転嫁 policy, the 取適法, active enforcement. That push is strong now and has cross-party support because it is tied to wage growth. But if enforcement attention fades in three years, the urgency fades with it.
5. **Demand is seasonal.** March and September are 価格交渉促進月間. Expect lumpy acquisition around those months and quiet stretches between. Cashflow planning must assume it.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japanese-native technical founder, paired with a 中小企業診断士
                        or 取適法-literate lawyer as paid advisor
Time to revenue:        6–8 weeks (hand-built dossiers sold before automation)
Capital to launch:      ¥3–5M (~$20–33K), mostly advisor fees and inference
Top 3 assumptions to validate first:
  1. Willingness to pay ¥49,800 for a dossier pre-proof — sell 5 of 10 hand-built pilots
  2. The dossier beats a generic index chart at the table — track pilot negotiation outcomes
  3. 診断士/税理士 refer rather than compete — 20 pitches, count clients delivered in 30 days
Kill criteria:
  - Abandon if fewer than 3 of 10 hand-built pilot firms will pay for the dossier
  - Abandon if pilot firms achieve no better price outcome than their previous unaided attempt
  - Abandon if fewer than 2 of 20 pitched consultants bring a paying client within 30 days
  - Abandon if freee or Money Forward ships an equivalent module before v1 has 50 customers
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the METI buyer list published this month. Identify 40 named buyers graded D or below. Work backwards to their suppliers via industry directories and 商工会議所 member lists. Build a target list of 60 supplier firms with real buyer concentration.
- **Day 3–4:** Hand-build three complete dossiers for three real firms, free, using their actual invoices and payroll totals. Time the work honestly — if a dossier takes more than a day of human effort with AI assistance, the unit economics of the one-shot tier need rethinking before anything else.
- **Day 5:** Put the three dossiers in front of the owners and ask for ¥49,800 for the next one, for a different customer. Simultaneously pitch 10 中小企業診断士 on the multi-client tier.

**Falsifiable outcome:** at least **2 of 3** pilot owners pay for a second dossier on the spot, and at least **2 of 10** consultants commit a named client within the week. Anything less and the artifact is not worth what I think it is worth — which is the only question that matters here, because the demand signal is already proven and the build is not the risk.
