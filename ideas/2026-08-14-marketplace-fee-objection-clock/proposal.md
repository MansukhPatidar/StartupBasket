---
title: "PotongProof — fee objection desk for Indonesian sellers"
slug: marketplace-fee-objection-clock
date: 2026-08-14
category: Retail / Indonesia — Marketplace Sellers (Rp200jt–Rp10M/Month GMV) Who Got a Statutory Right to Reject Fee Hikes in June 2026 and Have No Way to Exercise It Before the Clock Runs Out
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: Catches every marketplace fee change and files the seller's objection before Indonesia's 14-day statutory window closes.
tags:
  vertical: Retail
  model: SaaS
  geography: SEA
  secondary: [Compliance-driven, SMB, AI-agent, Multilingual, Solo-builder]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, content-heavy]
featured: false
---

# PotongProof

## 1. One-liner

Catches every marketplace fee change and files the seller's objection before Indonesia's 14-day statutory window closes.

## 2. Trend signal — why now?

Three things happened in Indonesia inside five months, and they happened in the right order.

**First, the fees went up — hard.** Effective 1 January 2026, Shopee Indonesia raised seller administration fees to as much as 10% for certain categories, the highest in the platform's history. Then in early May 2026, all three majors — Shopee, Tokopedia, TikTok Shop — adjusted service fees upward again. Tokopedia raised its dynamic commission cap from Rp40,000 to Rp650,000 per item starting 18 May 2026 — a 16× increase in the ceiling. Tokopedia and TikTok Shop began charging sellers logistics service fees on every new order from 1 May 2026. Stack commission, service fees, free-shipping programs and ads and the total take reaches 15–25% of sale price, with sellers reporting 25–30% once optional programs are layered on.

**Second, sellers revolted loudly and publicly.** The Shopee Indonesia Seller Community on Facebook filled with complaints within hours of the 2 May 2026 fee update, threads pulling 130+ comments. Coverage in BeritaSatu ran under headlines like "Seller Ramai-ramai 'Kabur Aja Dulu' dari Marketplace, Ngaku Tercekik" — sellers fleeing, saying they're being strangled. The MSME Minister publicly acknowledged receiving direct complaints from business actors about marketplace fees.

**Third — and this is the part nobody has tooled — the government handed sellers a weapon.** Permendag No. 19 of 2026 took effect 8 June 2026, revoking Permendag 31/2023. Article 14 requires platforms to disclose all fees in a **downloadable written contract**, obtain **explicit seller consent before modifying fees**, allow sellers to **object to unilateral changes**, respond to objections **within 14 working days** — and if the platform does not respond in time, **the objection is deemed accepted**.

Read that last clause again. Silence equals the seller wins. That is a deadline-driven, evidence-driven workflow with a default judgment at the end of it — and there is currently no software that runs it.

Trade Minister Budi Santoso, 13 May 2026: *"Platform harus transparan di dalam pengenaan biaya, biaya admin atau biaya apapun itu harus transparan dan harus ada perjanjian yang bisa diunduh ya di platform"* and *"Platform juga harus menyediakan layanan aduan. Layanan aduan dengan SLA yang jelas."*

The market is enormous and the timing is exact: Indonesian e-commerce runs USD 104.21 billion in 2026, growing 15.32% CAGR, on a base of 64 million MSMEs.

```
Provenance:
  - Signal 1 (Demand): Shopee/Tokopedia/TikTok Shop raised seller fees Jan and May 2026; total deductions now 15-25%+ of sale price; seller communities filled with complaints, sellers deactivating stores — https://www.idntimes.com/tech/trend/seller-mundur-perlahan-karena-fee-e-commerce-makin-mencekik-c1c2-01-7cxy7-mj9077 — 8 May 2026
  - Signal 2 (Feasibility/Regulatory): Permendag 19/2026 Art. 14 effective 8 June 2026 — downloadable fee contracts, seller consent before fee change, right to object, 14 working day platform response deadline, objection auto-accepted on platform silence — https://www.dfdl.com/insights/legal-and-tax-updates/indonesia-ecommerce-regulation-permendag-19-2026/ — 8 June 2026
  - Signal 3 (Economic): Indonesia e-commerce USD 90.35bn (2025) to USD 104.21bn (2026), 15.32% CAGR to USD 212.58bn by 2031, over a 64 million MSME base — https://www.mordorintelligence.com/industry-reports/indonesia-ecommerce-market — 2026
  - Supporting: Trade Minister Budi Santoso on mandated fee transparency + complaint SLA — https://www.suara.com/bisnis/2026/05/13/151927/kemendag-bakal-wajibkan-marketplace-transparan-soal-biaya-admin-seller — 13 May 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

The gap is the difference between **having a right** and **being able to exercise it**.

Permendag 19/2026 gives every Indonesian marketplace seller the right to object to a fee change and a 14-working-day clock that runs against the platform. But exercising that right requires the seller to do four things they currently cannot do:

1. **Notice** the fee change at all. Platforms push fee updates through seller-center announcements, email, and terms updates. A seller running three stores across three platforms gets dozens of notices a month and reads approximately none of them.
2. **Quantify** the impact. "Dynamic commission cap raised from Rp40,000 to Rp650,000" means nothing until you compute it against your actual SKU mix. For a seller of Rp2 million electronics it's a Rp610,000 swing per item. For a seller of Rp50,000 accessories it's zero. Same notice, wildly different stakes.
3. **Prove** the discrepancy. Settlement reports carry a dozen fee lines — commission, dynamic commission, order processing, Voucher Xtra service fee, Bonus Cashback service fee, affiliate commission, logistics. Crucially, RekapCepat documents that *"data di dashboard seller center bisa berbeda dengan data settlement karena timing pencatatan yang berbeda"* — dashboard and settlement disagree because of recording timing. So a seller who spots a shortfall genuinely cannot tell whether they were overcharged or whether it's a timing artifact. That ambiguity is why almost nobody disputes.
4. **File** before the window shuts, in the platform's own complaint channel, with the reference numbers and evidence that make ignoring it expensive.

The incumbents don't do this. Jubelio (Rp150/order) is an omnichannel stock-and-order platform with payment reconciliation for **bookkeeping**. Accurate Online syncs transactions into the ledger. RekapCepat is a settlement-report profit calculator with a 7-day trial. SmartSeller (Rp450K–Rp1.2M per 6 months) and Majoo (Rp149K–599K/mo) are store management. Every one of them answers *"what did I earn?"* — a backward-looking accounting question. **None of them answers "what am I owed back, and by when must I ask?"** That's a legal-deadline question, and it only became answerable on 8 June 2026.

This is the classic regulatory arbitrage shape: a new statute creates a procedural right with a hard clock, the beneficiaries are numerous and unsophisticated, and the incumbent software category is pointed the wrong way.

## 4. Target market

**Primary customer:** The owner-operator of an Indonesian marketplace business doing **Rp200 million – Rp10 billion monthly GMV** (roughly USD 12K–600K) across 2–4 channels — typically Shopee, Tokopedia, TikTok Shop, sometimes Lazada/Blibli. Usually 3–30 staff, one person nominally "handling finance," often the owner's spouse or a single admin. Categories where deductions bite hardest: fashion, FMCG, daily-needs — the exact categories Shopee moved to the 10% top tier.

Secondary: the **enabler/agency** segment — Indonesian e-commerce enablers managing 10–100 seller accounts on behalf of brands. They feel every fee change across a portfolio at once and have staff to action objections.

**Why they buy, in their words:** From @mutiasalmakha on Threads, posting a screenshot of her own Shopee deductions: *"Buat yang nanya kenapa seller pengen offline, karena adminnya shopee gede. Ini contoh biaya potongan di toko Shopee aku."* (Why sellers want to go offline — because Shopee's admin fee is huge. Here's an example of the deductions in my Shopee store.) From @jaisyanwaruddin, himself a Shopee seller: *"Sedangkan potongan admin kan berkisar di 10-20%an."* From @puutkirana: *"Karena admin shopee naik, kalo mau murah jangan lewat shopee."* Press summary of the sentiment: *"potongan dari setiap transaksi kini terasa semakin besar dibanding sebelumnya"* and *"Beberapa seller bahkan memutuskan untuk menonaktifkan toko secara penuh di platform tertentu."*

Note what's in these quotes: sellers are screenshotting deductions and arguing about percentages in public. They are already doing the analysis manually and emotionally. They just have nowhere to send it.

**Rough TAM reasoning:** Indonesia has 64 million MSMEs, but that's a vanity number — most are micro and won't pay for software. The honest denominator is sellers with enough monthly deduction volume that a 1–3% recovery exceeds a subscription. At Rp200 million/month GMV and a 15% blended take, monthly deductions are Rp30 million; a 2% error rate is Rp600,000/month recoverable. That's the floor where the math works. Indonesian marketplace-enabler and seller-tool vendors credibly address a population in the low hundreds of thousands at this tier. Capturing 2,000 of them is a real business; capturing 200 pays a small team.

**Why now for them:** Before 8 June 2026, a seller who felt overcharged had one option — complain into a support ticket with no deadline and no default. After 8 June 2026, an unanswered objection **wins by operation of law**. The value of filing went from near-zero to concrete, and the entire seller base is currently unaware of this or unable to act on it. That window — where the right exists but the tooling doesn't — is the business.

## 5. Product sketch (MVP)

- **Fee-change radar.** Watches each connected platform's seller-center announcements, terms updates, and fee schedules. When a fee changes, it fires — no more reading 40 notices a month.
- **Personal impact estimate.** Reprices the seller's last 90 days of actual orders under the new fee schedule and states the number: "This change costs you Rp4.2 juta/month at your current mix. Your objection window closes 3 September."
- **Objection clock.** A live countdown per open objection against the 14-working-day statutory response deadline, with Indonesian working-day and public-holiday handling. Flags the moment a platform's silence converts into a deemed-accepted objection.
- **Settlement discrepancy sweep.** Ingests settlement reports, recomputes every order's expected deduction line-by-line against the contracted fee schedule, and surfaces only the gaps that survive timing-artifact filtering — so the seller sees real shortfalls, not the dashboard-vs-settlement noise that makes them give up.
- **Objection packet builder.** Drafts the objection in formal Bahasa Indonesia, citing the specific Permendag 19/2026 provision, the affected order IDs, the contracted rate versus the applied rate, and the rupiah delta — ready to paste into the platform's complaint channel.
- **Contract vault.** Stores each downloadable fee agreement the platform is now obliged to provide, versioned over time, so "what rate did I actually agree to in March?" is a lookup and not an argument.
- **Recovery ledger.** Tracks every objection filed, the platform's response or silence, amounts credited, and a running total recovered — the number the seller repeats to other sellers.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist. Three places it does real work:

**Reading unstructured fee notices.** Platform fee announcements arrive as prose in Bahasa Indonesia, in seller-center posts, banner notices, PDFs and emails — different structure per platform, changing constantly. Converting "mulai 18 Mei 2026, batas maksimum komisi dinamis naik dari Rp40.000 menjadi Rp650.000 per item untuk kategori tertentu" into a structured rule (effective date, fee type, old value, new value, affected categories) that can be applied against an order book is exactly the extraction problem that got cheap and reliable in the last 18 months. Hand-maintaining parsers across four platforms would eat the whole team.

**Separating a real overcharge from a timing artifact.** This is the hard part and the moat. Sellers abandon disputes because dashboard and settlement disagree for legitimate reasons. Classifying each discrepancy — genuine misapplied rate, promo program the seller was auto-enrolled in, cross-period timing, refund/return adjustment — requires reasoning across several documents that don't share a schema. Getting this wrong in either direction is fatal: false positives make the seller look foolish filing bad objections, false negatives mean they leave money behind.

**Drafting the objection.** Formal Bahasa Indonesia, correct regulatory citation, right evidence attached, tone that gets a compliance team's attention rather than a canned support reply. Sellers at this tier do not write these documents. This is the 2-hours-to-2-minutes collapse.

## 7. Localization angle

This is not a localized version of a global product — it is only a product *because* of local specifics, which is the strongest form of the angle.

- **The regulation is the product.** Permendag 19/2026 Article 14's 14-working-day deemed-acceptance rule exists nowhere else. Amazon and eBay sellers have no equivalent statutory objection right. There is no US or EU product to copy down.
- **Language.** Fee notices, settlement reports and the objection filings themselves are all Bahasa Indonesia. A global tool cannot read the inputs or write the outputs.
- **Working-day math.** "14 hari kerja" requires Indonesian public holidays and *cuti bersama* — the collective-leave days that shift annually. Getting this wrong loses the seller their window.
- **Pricing.** At Rp299,000–1,499,000/month this sits comfortably beside Majoo (Rp149K–599K) and SmartSeller (Rp75K–200K/mo equivalent). A $49/mo US price point would be dead on arrival; a rupiah-native price with local payment rails (QRIS, bank transfer, virtual account) is table stakes.
- **Distribution.** Indonesian sellers organize in Facebook Groups, WhatsApp communities and TikTok — not on Reddit or Twitter. The channel is as local as the product.

The natural expansion is not the US — it's Vietnam, Thailand and the Philippines, where platform-fee scrutiny is rising and similar seller-protection rules are plausible follow-ons. Same product shape, different statute.

## 8. Business model — path to $1M–$5M ARR

**Pricing** (rupiah-native, tiered by GMV since value scales with deduction volume):

| Tier | Target | Price/mo | Included |
|---|---|---|---|
| Solo | 1–2 stores, <Rp500jt GMV | Rp299,000 | Fee radar, clock, 5 objections/mo |
| Toko | 3–5 stores, Rp500jt–3M | Rp799,000 | + discrepancy sweep, unlimited objections |
| Enabler | Agencies, 10+ accounts | Rp1,499,000+ | + multi-client, per-account reporting |

Roughly USD 18 / 48 / 90 per month. Deliberately below the pain threshold and far below the recovery: a Toko-tier seller recovering Rp600,000/month against a Rp799,000 subscription is marginal, which is why the tier is aimed at sellers recovering Rp2–5 juta. **Blended ACV ≈ Rp7.2 juta (~USD 435)/year.**

**Path to $1M ARR:** ~2,300 customers at blended ACV. Realistically that's ~1,500 Toko-tier + 600 Solo + 200 Enabler. In a market of USD 104bn GMV and hundreds of thousands of qualifying sellers, that is low-single-digit-percent penetration of the addressable tier. Achievable but not a layup — this is the number to be honest about.

**Path to $5M ARR:** Requires two of three things to be true: (a) expansion into Vietnam/Thailand/Philippines as comparable rules land, (b) the Enabler tier becoming the dominant mix at higher ACV — one enabler contract replaces 20 solo sellers, (c) a success-fee product on recovered amounts. That last one deserves scrutiny: taking a percentage of recovered funds massively raises ACV and aligns incentives, but it edges toward a regulated debt-collection or legal-services posture. **v1 must be flat subscription only**; the success fee is a year-two question for a lawyer, not a launch decision.

**Expansion path:** stores connected → objections filed → GMV tier upgrade → enabler/multi-client. Natural land-and-expand: a seller who recovers Rp3 juta in month one does not churn, and adds their second and third store immediately.

**Cost note:** gross margin is healthy but not pure SaaS — document processing costs scale with order volume. Budget meaningful inference cost per high-volume account; price the top tier accordingly rather than offering unlimited processing at Rp299,000.

## 9. Go-to-market wedge — first 100 customers

The sellers are already gathered, already angry, and already posting screenshots. That is the whole wedge.

- **The free objection-window calculator, dropped into seller Facebook Groups.** The Shopee Indonesia Seller Community filled with 130+ comment threads within hours of the May 2026 fee update — these groups are large, active and full of the exact buyer. Ship a free tool: upload one settlement report, get back "here is your deduction breakdown, here are N discrepancies worth Rp X, and your objection window on the May fee change closes in 6 working days." Post it into the 10 largest seller groups the next time any platform changes a fee — which, on 2026 evidence, is roughly quarterly. Conversion from free-report to paid is the number to watch; target 5–8%.
- **Ride the next fee change with content.** Every fee hike in 2026 produced a wave of Indonesian-language explainer content (RekapCepat, webekspor, longetiv, remarketing.id all publish fee-comparison posts). Be first and be the only one who publishes the *objection deadline* alongside the fee table, with a filled-in template. This is content-heavy work and it compounds: the seller searching "biaya admin Shopee naik" is a buyer with intent.
- **Enabler partnerships — 30 phone calls, not 3,000 emails.** Indonesia's e-commerce enabler community (SIRCLO, Jubelio's agency network, independent enablers) manage brand storefronts at scale. Each one is a multi-account contract. Thirty targeted conversations offering revenue-share on recovered amounts for their clients is a plausible route to the first 20 paying accounts, and they have the staff to actually file.
- **TikTok, in Bahasa, with real numbers.** Indonesian seller education runs heavily through TikTok and Instagram. "I filed an objection and got Rp4.7 juta back — here's the exact template" is a format that travels. One seller's verified recovery screenshot is worth more than any ad spend in this market.
- **Direct outreach to the loud ones.** Sellers posting deduction screenshots on Threads and TikTok are self-identifying with public handles. DM them with their own numbers analyzed. Small list, very high intent.

The honest weakness: this needs consistent Bahasa Indonesia content production and community presence. A founder who cannot operate natively in Indonesian seller communities should not build this.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: web stack, document extraction and reasoning via commodity model APIs, standard billing with local payment rails. The custom work is real but bounded — settlement-report ingestion for 3–4 platforms (formats differ and change), a fee-rule engine that can reprice a historical order book under a changed schedule, and Indonesian working-day/holiday calendar logic.

The genuine risk to the timeline is **platform data access**. Shopee, Tokopedia and TikTok Shop offer seller Open APIs, but access terms, approval and rate limits vary, and a tool built around disputing those platforms' fees is not guaranteed a warm reception. The MVP must therefore work on **seller-exported settlement reports (CSV/Excel upload)** as the primary path — no API dependency, no approval needed, works on day one — with API integration as a convenience upgrade for those who grant it. Design it upload-first and the platform risk drops from existential to annoying.

Realistic estimate: **12–16 weeks to v1** for two people, one of whom must be fluent in Bahasa Indonesia and Indonesian marketplace mechanics. Single-platform (Shopee only, upload-only) demo is achievable in 6 weeks and is the right thing to put in front of a Facebook group.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps sellers exercise a right the statute grants them. Not legal representation — document preparation and deadline tracking. Success-fee model deferred pending counsel. |
| Ethical — no harm / dark patterns | ✅ | Recovers money sellers are contractually owed. Main ethical duty is accuracy: a false-positive objection wastes the seller's credibility, so precision must be tuned conservative. |
| Market exists (evidence above) | ✅ | Documented fee hikes Jan/May 2026, public seller revolt, ministerial acknowledgment, USD 104bn market. |
| 1–5 person team can build this | ✅ | Two people, 12–16 weeks, upload-first architecture. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Main costs are two salaries and inference. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Sellers are losing 15–25% of sale price and posting screenshots about it publicly. Real money, felt monthly. Not 18+ because the *objection* pain is latent — sellers feel the fees acutely but don't yet know the right exists, so demand must be created rather than merely captured. |
| Demand evidence | 15 | 13/15 | Strong and multi-sourced: documented fee increases across three platforms, 130+ comment complaint threads, sellers deactivating stores, ministerial acknowledgment, incumbents charging money in adjacent categories. Docked for zero direct evidence that sellers will pay for *dispute filing* specifically. |
| Build feasibility | 15 | 11/15 | Upload-first design removes API dependency. Multi-platform settlement parsing plus a repricing engine plus holiday logic is honest 12–16 week work, not a 6-week weekend. |
| Distribution clarity | 15 | 12/15 | Named channels with gathered, angry audiences and a free-tool wedge that fits them. Not higher because it leans on sustained Bahasa content production and the conversion rate from free report to paid is unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against Majoo/SmartSeller/Jubelio. ACV credible. Docked because 2,300 customers for $1M ARR is a lot of SMB logos in a price-sensitive market, and inference costs scale with order volume rather than seats. |
| Time to first revenue | 10 | 7/10 | Single-platform upload demo in ~6 weeks, then a free-report funnel into a paid tier. Realistically 8–10 weeks to first rupiah, gated on the next fee-change news cycle. |
| Defensibility | 10 | 5/10 | Execution moat mainly. Accumulating fee-schedule history and objection-outcome data compounds into something real by month 12 — knowing which objections actually get paid is proprietary and valuable. But at month 3 it's copyable, and Jubelio could bolt it on. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Needs someone who can build reliable document extraction over messy multi-format financial reports, paired with someone who lives in Indonesian seller communities and can produce Bahasa content weekly. A non-Indonesian founder cannot execute section 9.

### Key assumptions to validate

1. **Assumption:** Sellers will pay a subscription to file objections, not just to *see* their deductions. **How to test:** Run the free settlement-report analyzer for 100 sellers. Measure how many click "file this objection" versus how many just take the numbers and leave. If the analyzer is the product and the objection is ignored, this is a reporting tool competing with RekapCepat, not a regulatory play — and the score drops 15 points.
2. **Assumption:** Real, provable discrepancies exist at meaningful rates — that platforms actually misapply their own schedules. **How to test:** Manually reconcile 30 sellers' settlement reports against contracted rates. If the median recoverable amount is under Rp500,000/month, the ROI story collapses and only the fee-change-objection half of the product survives.
3. **Assumption:** Platforms will honor the objection process rather than stonewalling. **How to test:** File 10 real objections and track outcomes over 60 days. The deemed-acceptance clause is powerful on paper; whether Shopee actually credits a seller on silence is an empirical question with no answer yet.
4. **Assumption:** Settlement report formats are stable enough to parse without constant breakage. **How to test:** Collect 6 months of historical exports from 20 sellers across platforms and count format changes.
5. **Assumption:** Enablers will resell/adopt. **How to test:** 15 conversations with Indonesian e-commerce enablers; look for 3 willing to pilot on client accounts.

### Risk flags

1. **Platform retaliation / dependency.** This product exists to argue with Shopee, Tokopedia and TikTok Shop. API access can be revoked and terms can be changed to discourage it. Mitigated by upload-first design — a platform cannot stop a seller downloading their own settlement report — but a hostile platform response is a live scenario, not a hypothetical.
2. **Enforcement risk.** Permendag 19/2026 is four months into effect with no track record. If enforcement proves toothless and platforms routinely ignore objections without consequence, the deemed-acceptance clause becomes decorative and the core value proposition evaporates. This is the single biggest threat and it is genuinely unresolved today.
3. **Regulatory drift.** The rule that creates the product could be amended or softened under platform lobbying. Indonesia revised this exact regulation in 2023 and again in 2026.
4. **Adjacent-incumbent encroachment.** Jubelio already does reconciliation for bookkeeping and has the seller relationships. Adding an objection module is a quarter of work for them, not a rebuild.
5. **Accuracy liability.** Systematically filing wrong objections damages sellers' standing with platforms they depend on for their livelihood. Precision must be prioritized over recall, which caps the recoverable amount the product can claim.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Indonesian technical founder (or Indonesia-based pair) with
                        marketplace-seller domain knowledge and the ability to produce
                        Bahasa Indonesia content weekly. Not executable remotely by a
                        non-Indonesian team.
Time to revenue:        8-10 weeks (6-week single-platform upload demo, then free-report funnel)
Capital to launch:      Rp150-250 juta (USD 9-15K) — two people part-time for a quarter
                        plus inference and infrastructure
Top 3 assumptions to validate first:
  1. Sellers pay to FILE, not just to SEE — run free analyzer for 100 sellers, measure
     the click-through from "here are your discrepancies" to "file this objection"
  2. Recoverable amounts are material — manually reconcile 30 sellers, need median
     above Rp500,000/month to justify the subscription
  3. Platforms honor the 14-working-day deemed-acceptance rule — file 10 real
     objections, track outcomes over 60 days
Kill criteria:
  - Abandon if fewer than 8 of 30 manually reconciled sellers show recoverable
    discrepancies above Rp500,000/month
  - Abandon if 0 of 10 filed objections produce a credit or a substantive platform
    response within 60 days — means the statute has no teeth and the wedge is fiction
  - Abandon if Jubelio or a major enabler ships an equivalent objection module before
    v1 launch — they own the seller relationship and will win on bundling
```

## 15. Next step — 1-week validation sprint

The whole idea rests on one unknown: does the objection mechanism actually pay out? Everything else is secondary.

- **Day 1–2: Get the raw material.** Post in 5 Indonesian seller Facebook Groups and WhatsApp communities offering a free manual deduction audit. Target 30 sellers who send a settlement report export plus their contracted fee schedule. Given the temperature of these groups after the May fee changes, 30 should be attainable — if it isn't, that's itself a finding about how reachable this audience is.
- **Day 3–4: Reconcile by hand.** No software. Line-by-line, recompute expected versus applied deductions for each seller. Classify every gap as genuine overcharge, auto-enrolled program, timing artifact, or return adjustment. Produce the distribution: what fraction of sellers have real recoverable money, and how much. This also tells you whether the timing-artifact separation is tractable or a swamp.
- **Day 5: File and price.** Help 10 of those sellers file a real objection with the correct Permendag 19/2026 citation. Simultaneously, put the price in front of all 30: "Rp799,000/month to do this automatically every month" — and count how many say yes on the spot, before any recovery has landed.

**Falsifiable go/no-go:** Proceed only if **≥8 of 30 sellers show recoverable discrepancies above Rp500,000/month** AND **≥6 of 30 commit to paying Rp799,000/month before seeing a recovery**. Then keep the 10 filed objections running for 60 days — if none of them produce a credit or substantive response, kill it regardless of how good the day-5 numbers looked. Willingness to pay without enforcement reality is a trap: sellers will happily buy hope, and this business cannot be built on selling it.
