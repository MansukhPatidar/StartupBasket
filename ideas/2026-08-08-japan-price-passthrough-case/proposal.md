---
title: "TenkaCase — price-hike case builder for Japan's suppliers"
slug: japan-price-passthrough-case
date: 2026-08-08
category: TradeTech / Japan-SME — Subcontracting Suppliers (5–100 Staff) Who Absorb Cost Increases Because They Cannot Assemble the Evidence to Ask for More
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns a Japanese small supplier's own cost data into the negotiation packet their buyer is now legally obliged to answer."
tags:
  vertical: TradeTech
  model: SaaS
  geography: Global
  secondary: [Japan, Compliance-driven, SMB, AI-agent, Multilingual, Document-generation]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# TenkaCase

## 1. One-liner

Turns a Japanese small supplier's own cost data into the negotiation packet their buyer is now legally obliged to answer.

## 2. Trend signal — why now?

Three things moved at once, and they moved in the supplier's favour for the first time in decades.

**The law changed on 1 January 2026.** Japan's 下請法 (Subcontract Act) was renamed and rewritten into the 中小受託取引適正化法 ("取適法"). The amendment does something genuinely new: it makes it a **prohibited act** for a buyer to unilaterally set price without responding to a supplier's request to negotiate, or to refuse to provide the explanations and information the negotiation requires. Previously the law policed outcomes (late payment, unfair discounts). Now it polices the *process* — the buyer must come to the table. The JFTC also gained the power to publicly name violators, and the 60-day payment clock was clarified to run from delivery, not from inspection sign-off, closing the loophole most large buyers used.

**The money is measurably sitting on the table.** METI's price-negotiation follow-up survey — run every March and September across 300,000 companies, ~70,000 responding — puts the cost pass-through rate at **53.5% (September 2025)** and **54.2% (March 2026)**. Nearly half of every yen of cost increase is absorbed by the supplier and never recovered. Labour cost pass-through is worse at **50.0%**, energy at **48.9%**. The worst-hit sector is information services and software at **50.9%**.

**Nobody sells the thing that closes the gap.** The Tokyo Chamber of Commerce runs 価格転嫁ナビ. METI runs 価格転嫁検討ツール and もうかる経営キヅク君. There is a 価格交渉ハンドブook, last revised January 2026. Every one of these is free, and every one of them stops at the same place — it shows you a raw-materials price index and tells you that you *ought* to negotiate. None of them produce the document you actually hand across the table. The gap between "here is a chart proving steel went up" and "here is a 6-page packet showing what that did to *your* margin on *this* customer's part numbers, with the statutory citation attached" is exactly where the 46% is trapped.

The reason that gap persists is unglamorous and well documented: Japanese SMEs, especially outside manufacturing, **do not do product-level cost accounting at all**. They hand the books to their 税理士 and the owner never sees a per-customer margin. One industry write-up on the problem puts it plainly: "サービス業などの場合は、そもそも原価計算をおこなっていないことがよくあり、税理士にまかせきりにしていて、経営者が内容を把握していない" — in service businesses it's common that no cost accounting is done at all; it's left entirely to the tax accountant and the owner doesn't grasp the contents. You cannot argue for a price increase you cannot compute.

And the government is now paying for the fix. The Tokyo Metropolitan Government's FY2026 programme (令和8年度スタートアップ等を活用した価格転嫁・賃上げ支援事業) subsidises **up to ¥1,000,000 per company, tax included, at zero cost to the SME**, for startup-provided cost-management and price-negotiation tooling. That is a government-funded acquisition channel with a named budget line.

Provenance:
  - Signal 1 (demand): METI/SME Agency price negotiation follow-up survey — pass-through rate stuck at 53.5% (Sept 2025) / 54.2% (Mar 2026); labour 50.0%, energy 48.9%; ~70,000 responding firms — https://www.meti.go.jp/press/2026/06/20260626003/20260626003.html and https://www.chusho.meti.go.jp/keiei/torihiki/follow-up/index.html — observed 2026-08-08
  - Signal 2 (feasibility/regulatory unlock): 2026 amendment to the Subcontract Act (取適法), effective 2026-01-01, newly prohibits refusing to negotiate price or withholding explanation, and empowers JFTC to publicly name violators — https://www.jftc.go.jp/file/toriteki_leaflet.pdf and https://www.dlapiper.com/en-us/insights/publications/2025/12/major-amendments-to-japan-subcontract-act — observed 2026-08-08
  - Signal 3 (economic): Tokyo Metropolitan Government FY2026 subsidy pays up to ¥1M per SME for startup-supplied cost-management / price-negotiation tools; existing支援ツール from METI and Tokyo CCI are all free, static reference material that stops short of producing a negotiation document — https://kakaku-chinage-tokyo.jp/ and https://www.tokyo-cci.or.jp/kakaku-support/tools.html — observed 2026-08-08
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents here are not companies. They are **free government PDFs and a tax accountant who doesn't do management accounting**. That's an unusual competitive setup and it's why this is open.

What the government tools do: publish macro price indices (原材料価格ウォッチャー), offer a spreadsheet that asks you to type in your own costs, and provide a handbook explaining negotiation etiquette. What they don't do: read your actual invoices, compute what a specific buyer's specific parts did to your margin over the last 18 months, and emit a document.

What the 税理士 does: file taxes. Japanese tax accountants are compensated for compliance filing, not for management accounting. Asking your 税理士 for a per-customer contribution-margin analysis is out of scope for a standard ¥30,000–50,000/month engagement, and most SME owners never ask.

The AI-first cut is straightforward. The supplier already has the raw material — invoices, purchase orders, delivery slips, payroll totals, utility bills — sitting in accounting software (弥生, freee, マネーフォワード), in PDFs, and in a filing cabinet. Extracting per-customer, per-SKU cost movement from that mess used to require a human management accountant at ¥800K+/month. It is now a document-extraction and reconciliation job that runs for a few hundred yen of inference per customer per month.

The 10× isn't "a chatbot for negotiation advice." It's that **the packet gets produced at all**. Today, for the median SME, the packet does not exist, so the negotiation does not happen, so the 46% is written off. Going from zero to one document is a bigger delta than any UX improvement on an existing workflow.

The legal change is what converts the document into leverage. Before January 2026, a supplier could send a beautifully argued cost breakdown and the buyer's procurement desk could ignore it with no consequence. After January 2026, ignoring a documented request to negotiate is itself a prohibited act, reportable to the JFTC, with public naming on the table. The packet is now a formal demand that starts a clock, not a polite letter.

## 4. Target market

- **Primary customer:** Owner or 経営企画/管理部長 at a Japanese subcontracting supplier with **5–100 employees and ¥100M–¥3B annual revenue** — metal fabrication, plastic moulding, printing, logistics subcontractors, contract food processing, and notably **IT subcontractors and software development shops** (the sector with the worst pass-through rate at 50.9%). These are 下請 firms whose revenue concentrates in 3–20 large buyers.

- **Why they buy:** Their input costs — steel, resin, electricity, and above all wages, which they are under national pressure to raise every spring — have risen for four straight years, and they've recovered barely half. They know the number is bad. What stops them is not courage, it's homework: they cannot produce a credible per-customer cost argument, and they are terrified of asking with a weak case and damaging a relationship that is 40% of their revenue. From the SME Agency's own negotiation handbook framing, the binding constraint is 根拠資料 — the evidentiary basis — not willingness.

- **Rough TAM reasoning:** Japan has roughly 3.3–3.6 million SMEs. The METI survey alone distributes to 300,000 firms specifically identified as being in subcontracting relationships where pass-through is at issue, with ~70,000 actively responding. Take the 5–100 employee band of genuine subcontractors: a defensible serviceable market of **150,000–250,000 firms**. At ¥30,000/month, capturing 0.5% of the low end is ¥270M ARR (~$1.8M). This does not require market dominance.

- **Why now for them:** The 取適法 took effect 1 January 2026 — the leverage is new and most suppliers don't yet know they have it. March and September are 価格交渉促進月間 (price negotiation promotion months), when METI actively pushes firms to negotiate and buyers are primed to expect requests. That's two hard-dated selling seasons per year. Add the annual 春闘 wage round, which forces a labour-cost increase the supplier must recover or eat.

## 5. Product sketch (MVP)

- **Cost movement extraction** — connect freee / マネーフォワード / 弥生, or drop in PDFs and scanned invoices, and get a per-buyer, per-product view of how input costs moved over the last 12–24 months. No manual spreadsheet entry.
- **Per-customer margin ledger** — the number the owner has never seen: what each major buyer actually contributes after real cost, and how much that has eroded since the last price revision.
- **Index-linked substantiation** — automatically attaches the relevant public series (原材料価格, energy tariffs, regional minimum wage and 春闘 settlement data) so the argument rests on citable public data, not just the supplier's word.
- **The negotiation packet** — generates the deliverable in proper Japanese business register: cover letter, cost-movement summary, per-item breakdown, requested revision with justification, and the statutory basis under the 取適法. Editable, exportable, print-ready.
- **Statutory citation layer** — flags which specific prohibited act applies if the buyer stonewalls (refusal to negotiate, unilateral price determination, failure to explain), with plain-language guidance on the escalation ladder to the JFTC / 中小企業庁 窓口.
- **Negotiation log** — timestamped record of when the request was sent, what the buyer said, and what was agreed. Doubles as the supplier's own evidence file and satisfies the record-retention expectations both sides now face.
- **Buyer-response triage** — when the buyer replies with a counter ("we can do 3%, not 8%"), models what that does to margin and drafts the counter-response.
- **Deadline tracker** — the 60-day payment clock from delivery, and follow-up prompts if a negotiation request goes unanswered past a reasonable window.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist — it reverts to the free METI spreadsheet that nobody fills in.

Two jobs are genuinely AI-shaped:

**Reconciliation of messy source documents.** Japanese SME invoices, 納品書 and 注文書 arrive as scanned PDFs, faxes, and inconsistent CSV exports, in Japanese, with buyer-specific part numbering that never matches the supplier's internal SKU names. Mapping "SUS304-t2.0-ブラケット" on a purchase order to the same item on three different suppliers' invoices, then tracking its landed cost across 24 months, is exactly the fuzzy-matching work that was infeasible to automate cheaply before current vision-and-language models. This is the moat-adjacent hard part.

**Register-correct Japanese business writing.** A price increase letter to a長年の取引先 is a genuinely delicate document. Get the keigo wrong, or lead with the legal citation instead of burying it, and you damage the relationship you were trying to preserve. Producing something an owner will actually send — appropriately deferential, factually dense, with the statutory basis present but not brandished — is a language task, and it's the reason a template pack doesn't substitute.

What is *not* AI: the price indices and the legal rules. Those are structured lookups and should stay deterministic. Any product that lets a model freestyle the statutory citations will produce a hallucinated legal claim in front of a buyer's legal department, which is a company-ending failure mode in this market. The legal layer is a curated rules table with human-reviewed language, not generation.

## 7. Localization angle

This is a Japan-only play and the localization *is* the product. It does not generalize by translation.

- **Language:** The output document must be in correct Japanese business register with appropriate keigo. This is not a translation layer bolted onto an English product — the document is the deliverable, and a foreign-sounding letter is worse than no letter.
- **Regulatory:** The entire leverage mechanism is the 取適法 as amended January 2026. The prohibited-act taxonomy, the 60-day rule, the JFTC escalation path — none of it exists elsewhere in this form.
- **Accounting rails:** Integration targets are freee, マネーフォワード, and 弥生 — the three that matter in Japan and essentially nowhere else. QuickBooks/Xero integration is worthless here.
- **Data sources:** 原材料価格ウォッチャー, regional 最低賃金 schedules, 春闘 settlement figures. Japan-specific public series.
- **Pricing culture:** ¥30,000/month reads as a serious business tool to a Japanese SME; $49/month reads as a toy. The local price point is *higher* than the global-SaaS instinct, which helps the unit economics.
- **Distribution:** 商工会議所 chapters, 中小企業診断士, regional banks and 信用金庫, and the よろず支援拠点 network are the real channels. There is no Product Hunt equivalent that reaches this buyer.

The flip side: a non-Japanese-speaking founder cannot build or sell this. That's a real constraint and it's priced into the founder-fit tags.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ¥30,000/month (~$200) for the standard tier — up to 10 buyer relationships tracked, unlimited packets. ¥60,000/month (~$400) for firms with 10–30 buyers and multi-site cost tracking. Annual prepay at 10 months' price, which matches Japanese SME purchasing habit.
- **ACV:** ¥360,000 (~$2,400) standard; blended realistic ACV ~¥420,000 (~$2,800) accounting for tier mix.
- **Rough math to $1M ARR:** 360 customers × ¥30,000 × 12 = ¥130M ≈ **$870K**. Call it **~420 customers for $1M ARR**. Against a serviceable base of 150,000+ firms, that's 0.3% penetration.
- **Rough math to $5M ARR:** ~1,800–2,000 customers, with tier mix shifting upward and an accountant-channel motion carrying most of the volume. Requires the 商工会議所 / 中小企業診断士 channel to work as a repeatable referral engine rather than one-off deals — that's the load-bearing assumption for the 5× step, and it's the one I'd want proven before hiring.
- **Expansion path:** (a) more tracked buyer relationships; (b) the negotiation log matures into an ongoing 取適法 compliance record that the supplier keeps year-round rather than a seasonal tool — this is what fixes churn; (c) a 税理士/中小企業診断士 multi-client console at ¥150,000/month for advisors managing 10–30 SME clients, which is both an expansion product and the distribution channel; (d) the buy side — larger firms who must now demonstrate they *did* negotiate in good faith have a mirror-image compliance need, though selling to them is a different, slower motion.
- **Gross margin:** Document extraction is the main variable cost. Realistically ¥1,500–3,000/month of inference per active customer at MVP quality, trending down. ~90% gross margin at the ¥30,000 price point.

**The honest revenue risk:** this has a seasonal, event-shaped usage pattern. A supplier renegotiates a given buyer once or twice a year. If the product is *only* a packet generator, customers will subscribe in February, negotiate in March, and cancel in April. The margin ledger and the ongoing compliance log are not nice-to-haves — they are the entire retention story, and they need to be in v1, not v2. I've scored revenue mechanics at 11 rather than 13 for exactly this reason.

## 9. Go-to-market wedge — first 100 customers

- **Ride the two negotiation months.** March and September are 価格交渉促進月間. METI actively campaigns, and every 商工会議所 in the country runs seminars where the audience is literally SME owners who showed up because they want to raise prices and don't know how. Sponsor or speak at chapter seminars in the top 15 industrial cities (Ota-ku, Higashiosaka, Hamamatsu, Toyota, Kawasaki, Suwa). The Ota-ku and Higashiosaka chapters alone cover thousands of small fabricators. Target: 20–30 customers from the September 2026 season, walking in with a done-for-you first packet as the close.

- **The Tokyo subsidy as a free trial with a budget line.** The FY2026 令和8年度 programme pays up to ¥1M per SME for exactly this category of tool, at zero cost to the SME. Get listed as a qualifying provider and the sales conversation stops being about price. This is a named, funded government channel — 30–40 customers is a realistic take from a single programme year, and it produces reference logos for everything downstream.

- **Recruit 10 中小企業診断士 as a referral channel.** SME management consultants are a licensed profession, there are ~28,000 of them, and their entire job is advising exactly this customer on exactly this problem — usually with no tooling. Offer a revenue share plus the multi-client console. A single active 診断士 with 15 clients who converts a third is 5 customers. Ten of them is 50. This is also the mechanism that makes the $5M number credible rather than aspirational.

- **Named-list outbound off public directories.** Japanese manufacturing SMEs are exhaustively catalogued — 工業組合 member lists, prefectural manufacturer directories, J-Net21. Build a list of 2,000 firms in the 5–100 employee band in high-absorption sectors, and send a physical letter (still the effective channel for this demographic, and it signals seriousness in a way cold email does not) containing a *pre-built sample cost-movement analysis for their industry* using public index data. Expect 2–4% response — that's 40–80 conversations for the cost of postage.

- **Publish the number nobody wants to say out loud.** A quarterly "業種別価格転嫁実態" report — which sectors are recovering costs and which are being squeezed — built from METI's own published series plus anonymised aggregate product data. Japanese trade press (日刊工業新聞, 中小企業向け media) reliably picks up sector-specific pass-through data, and it makes the founder the person who talks about this problem publicly.

## 10. Build complexity — justification

**Medium.** Roughly 14–18 weeks to a credible v1 for a two-person team.

Off-the-shelf: document extraction from Japanese invoices and delivery slips (current vision models handle Japanese business documents well), the accounting integrations (freee and マネーフォワード both have documented public APIs; 弥生 is more awkward and can be CSV-import for v1), and standard web stack.

The custom work is in three places. First, the part-number reconciliation across buyer and supplier naming conventions — this is genuinely fiddly and is where the engineering weeks go. Second, the legal rules layer, which must be curated and reviewed by a Japanese lawyer or 中小企業診断士 rather than generated; budget for a paid legal review engagement, not a weekend of reading. Third, the document templates in correct business Japanese, which need a native writer.

What keeps it out of High: no custom models, no novel infrastructure, no regulatory approval to operate, and the first version can ship with CSV upload instead of live integrations if needed. What keeps it out of Low: you cannot fake the legal layer or the Japanese business writing, and the reconciliation problem is real work.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping a supplier assemble a factual cost case and cite applicable law is ordinary business support. Must stay clear of 弁護士法 restrictions on non-lawyers providing legal representation or handling disputes for fee — the product informs and documents, it does not represent. Requires a legal review to draw that line precisely, and the escalation guidance should route to the free JFTC/中小企業庁 窓口 rather than positioning the product as an advocate. |
| Ethical — no harm / dark patterns | ✅ | The product helps small firms recover costs they legitimately incurred, using a mechanism the government is actively promoting. The one ethical care point: never encourage a frivolous JFTC report as leverage. Escalation guidance must be conservative. |
| Market exists (evidence above) | ✅ | ~70,000 firms respond to a government survey on this exact problem; pass-through stuck at 54%; a government body is subsidising tools for it. |
| 1–5 person team can build this | ✅ | Two builders plus a paid Japanese legal reviewer and a native business writer. |
| Launchable with <$50K / ₹40L | ✅ | Legal review engagement (~$8–12K), inference and infra, seminar sponsorships, and a physical mail campaign. Comfortably under $50K. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Firms are demonstrably eating ~46% of cost increases, year after year, in an inflationary environment with mandated wage rises. That's direct, measurable, recurring margin loss. Not a 19–20 because it's a chronic bleed the owner has learned to tolerate rather than an acute deadline — nobody's business fails next Tuesday if they don't act. |
| Demand evidence | 13/15 | 13/15 | Unusually strong for a pre-launch idea: a 300,000-firm government survey with 70,000 respondents, a published 53.5%/54.2% pass-through figure, sector-level breakdowns, a funded subsidy programme, and free tooling that exists precisely because demand was identified. Short of 14–15 only because no one has yet proven SMEs will *pay* for this rather than use the free tools badly. |
| Build feasibility | 15 | 11/15 | Standard stack plus real integration and reconciliation work. 14–18 weeks for a pair. Legal layer must be human-curated. Not a 4-week solo build. |
| Distribution clarity | 15 | 12/15 | Named channels with real conversion logic: a funded government programme, two dated selling seasons, 28,000 licensed consultants, exhaustive public directories. Docked because all of these are relationship-paced Japanese B2B channels — slower than a subreddit, and the 診断士 channel is unproven. |
| Revenue mechanics | 15 | 11/15 | ¥30,000/month is well within Japanese SME software norms and 420 customers for $1M ARR is modest. Held at 11 by the seasonality/churn risk described in section 8 — the retention story depends on the margin ledger becoming a year-round habit, which is an assumption, not a fact. |
| Time to first revenue | 10 | 7/10 | Japanese SME sales cycles are not fast, and trust-building with this demographic takes meetings. But the subsidy channel and the seminar season give concrete near-term paths. Realistically 8–14 weeks to first paid customer, faster if a first packet is delivered done-for-you. |
| Defensibility | 10 | 5/10 | Honest assessment: mostly execution moat. The legal knowledge is public, the indices are public, the tech is replicable. What accumulates is the per-customer cost history — a supplier two years in has a longitudinal margin record they can't recreate elsewhere, which is real switching cost — plus the 診断士 channel relationships. But a well-funded Japanese competitor (freee or マネーフォワード shipping this as a feature) is the live threat, and they own the data already. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This one is unusually gated on founder fit. It needs **native or business-fluent Japanese**, comfort in the 商工会議所 / 診断士 relationship world, and access to a lawyer who can review the statutory layer. A brilliant technical founder without Japanese market access cannot execute this, and the score should be read as conditional on that fit. With the right founder it's a 76; without, it's unbuildable.

### Key assumptions to validate (3–5)

1. **Assumption:** SME owners will pay ¥30,000/month for a tool whose government-provided equivalents are free. **How to test:** Take 20 firms through a manual, done-by-hand version of the packet. Charge ¥50,000 as a one-off for the first one. Measure how many pay, and separately how many *use* the packet in an actual negotiation — payment without use predicts churn.

2. **Assumption:** The packet actually moves the outcome — buyers concede more when presented with a documented, statute-citing case than with a verbal ask. **How to test:** Follow those same 20 firms through one negotiation cycle and record the delta between requested and achieved increase, against their own prior-year result as baseline. This is the claim the whole product rests on; if the packet doesn't change buyer behaviour, nothing else matters.

3. **Assumption:** Retention survives past the negotiation event — the margin ledger is used between cycles. **How to test:** Instrument logins in months 2–5 after a completed negotiation for the pilot cohort. If usage goes to zero after the packet is sent, the pricing model must change to per-event rather than subscription, and the ARR math needs rebuilding.

4. **Assumption:** The 中小企業診断士 channel converts. **How to test:** Sign 5 consultants, give them the multi-client console free for 3 months, count client conversions. Fewer than 1 conversion per consultant means the $5M path needs a different engine.

5. **Assumption:** Cost extraction from real Japanese SME documents works well enough to be trusted in front of a buyer. **How to test:** Run 500 real invoices and 納品書 from 10 firms through extraction and have a human accountant verify line-item accuracy. Below ~95% and the owner won't stake a customer relationship on the output.

### Risk flags

1. **Incumbent platform risk (the big one):** freee and マネーフォワード already hold the cost data and sell to exactly this customer. Either could ship a price-negotiation module as a feature. Mitigation is depth in the legal and document layer plus the advisor channel — the parts that are annoying for a horizontal platform to do well — but this is the risk that most plausibly kills the company, and it should be watched actively rather than hand-waved.

2. **Regulatory-boundary risk:** 弁護士法 restricts non-lawyers from providing legal services for fee. The product must sit clearly on the "information and document preparation" side of that line, not the "representation and dispute handling" side. Get this reviewed before launch, not after. A misstep here is existential, not a fine.

3. **Relationship-culture risk:** Some suppliers will decline to use a tool that makes the ask feel adversarial, regardless of the legal backing. Japanese buyer-supplier relationships are long and the fear of damaging one is genuine, not irrational. The product's tone and framing — assisting a legitimate business conversation, not arming a fight — is a product requirement, not marketing.

4. **Seasonality risk:** Usage concentrates around March and September. Cash flow and churn both feel this. Annual prepay contracts and the year-round compliance-log positioning are the mitigations, and neither is proven.

5. **Enforcement-follow-through risk:** The January 2026 amendment's teeth depend on the JFTC actually enforcing the refusal-to-negotiate prohibition and actually naming firms. If enforcement proves nominal through 2026–27, the leverage narrative weakens and the product falls back to being a cost-accounting tool — still useful, less compelling.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japanese-fluent founder with SME/manufacturing or accounting domain
                        access, paired with one engineer. Legal reviewer on retainer.
                        Without Japanese market access this is not executable.
Time to revenue:        8–14 weeks
Capital to launch:      ¥3–5M (~$20–35K), dominated by legal review and channel development
Top 3 assumptions to validate first:
  1. Packets change buyer behaviour — run 20 firms through a manual version and measure
     achieved-vs-requested increase against their own prior-year baseline
  2. Willingness to pay ¥30,000/mo against free government tools — charge for the manual
     version before writing code
  3. Retention past the negotiation event — instrument months 2–5 usage in the pilot cohort
Kill criteria:
  - Abandon if fewer than 8 of 20 pilot firms pay for a manual packet
  - Abandon if pilot firms show no improvement in achieved pass-through vs their prior cycle
  - Abandon if freee or マネーフォワード ships a native price-negotiation module before v1
  - Abandon if legal review finds the escalation guidance cannot be delivered without
    running afoul of 弁護士法
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the METI follow-up survey micro-data and the 中小企業白書 sector tables. Identify the three sectors with the worst pass-through (information services at 50.9% is the standout). Build one complete cost-movement packet by hand for a hypothetical firm in each — this forces discovery of what data is actually obtainable and how long the manual version takes. Book a 90-minute consultation with a lawyer on the 弁護士法 boundary.

- **Day 3–4:** Get in front of 15 real suppliers. The 商工会議所 chapters in Ota-ku and Higashiosaka will make introductions, and 診断士 contacts will too. Show the hand-built packet. Do not ask "would you use this" — ask **"what did you achieve in your last negotiation, and would you have asked for more with this in hand?"** Then ask for ¥50,000 to build theirs.

- **Day 5:** Decide on a falsifiable threshold. **Go if ≥5 of 15 hand over money for a manually-built packet, and ≥8 can state a specific past negotiation where they asked for less than they needed because they lacked evidence.** Below that, either the pain is tolerated rather than felt, or the free tools are good enough — and this is a PASS regardless of how good the regulatory story sounds.

The trap to avoid: every one of these owners will *agree* the problem is real, because the government has been telling them so for four years. Agreement is worthless here. The only signal that counts is money for the manual version, because that's the one thing free government PDFs have already failed to extract from them.
