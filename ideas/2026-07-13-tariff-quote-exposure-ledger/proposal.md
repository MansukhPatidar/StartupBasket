---
title: "DutyDrift — exposure ledger for small US importers"
slug: tariff-quote-exposure-ledger
date: 2026-07-13
category: TradeTech / US — Small Importers & Distributors (open-quote and PO tariff exposure)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: Tells a small importer which live quotes and open POs just went underwater when the tariff rate moved.
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Solo-builder, Workflow-automation]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# DutyDrift

## 1. One-liner

Tells a small importer which live quotes and open POs just went underwater when the tariff rate moved.

## 2. Trend signal — why now?

The US tariff base has moved three times in five months, and it is about to move again inside the next two weeks.

- **Feb 20, 2026:** Supreme Court strikes down the IEEPA "reciprocal" and fentanyl tariffs.
- **Feb 24, 2026:** Administration replaces them with a flat 10% across-the-board surcharge under Section 122 of the Trade Act of 1974.
- **May 7, 2026:** The Court of International Trade rules the Section 122 surcharge unlawful (2–1) — but the Federal Circuit's administrative stay keeps CBP collecting it.
- **July 20, 2026:** USTR faces a completion deadline on two Section 301 investigations opened March 11. The proposal on the table is **12.5% Section 301 duties on 46 countries**, including China, Vietnam, India, Japan and South Korea.
- **July 24, 2026:** Section 122 sunsets *by operation of law* — the statute caps a balance-of-payments surcharge at 150 days and no extension legislation is pending.

So within a four-day window this month, a flat 10% that applied to everyone gets replaced by a country-by-country 12.5% that applies to *some* people. That is not a rate change. That is a re-sort of every importer's entire supplier book into winners and losers, and it happens while their quotes are already out and their containers are already on the water.

The trade bar is saying this out loud. Practitioners note that any **DDP contract running past July 24 needs review, because the party that accepted DDP responsibility accepted the duty burden at today's rate** — and if that rate changes materially, someone eats the difference. Meanwhile the operating reality for SMBs is that "tariff-driven cost spikes turn pricing into a weekly decision — not a quarterly one."

And the margin math is already broken before the next change lands: non-product costs now add **20–40% on top of the vendor's quoted price**, and most importers still calculate margin off the vendor invoice rather than true landed cost. If your landed-cost model predates the 2025–26 tariff and de-minimis changes, it understates your real cost today.

```
Provenance:
  - Signal 1 (demand): SMB importers now reprice weekly, not quarterly; pricing shifted from cost absorption (44% in 2025) to cost passthrough (82% in 2026); thin-margin firms with fixed-price contracts take the hardest hits — https://www.subredditsignals.com/blog/reddit-research-guide-for-marketing-experts-tariffs-and-pricing-strategy-in-2026 + https://www.netstock.com/research/2026-tariff-impact-report/ — observed 2026-07-13
  - Signal 2 (economic/regulatory): Section 122 10% surcharge sunsets by operation of law 12:01am EDT July 24, 2026; USTR Section 301 deadline July 20, 2026 with a 12.5%-on-46-countries proposal pending; CIT already ruled §122 unlawful May 7 pending appeal — https://www.tradelawcounsel.com/insights-news/2026/7/4/section-122-surcharge-sunsets-july-24-what-importers-should-do-beforeand-afterthe-150-day-clock-runs-out + https://www.skadden.com/insights/publications/2026/05/us-trade-court-strikes-down-section-122-tariffs — observed 2026-07-13
  - Signal 3 (feasibility): Duty stacking is now mechanical and machine-readable — MFN base + §122 + §301 + §232 apply additively per HTS line; public HTS/rate trackers and bulk HTS lookup tools exist, and LLMs can now classify a product description to a 10-digit HTS line and parse a supplier PO/quote PDF reliably — https://ustariffrates.com/tariff-tracker + https://www.china-fulfillment.com/news-import-duties-tariffs-landed-cost-china-2026.html — observed 2026-07-13
  Category: Regulatory arbitrage
```

## 3. The opportunity

Every tool in this market prices a **transaction**. Nobody prices a **book**.

- **Free tariff calculators** (tariffstool, ustariffcalc, Flexport's simulator, a dozen SEO clones) answer "what is the duty on this HTS code from this country today?" That is a snapshot of a hypothetical.
- **HTS-code alert products** tell you a code's rate changed. Great — you now have an email saying 8471.30 moved. You still don't know that it hit eleven of your open quotes and one PO that ships Tuesday.
- **Zonos** ($2 + 10% of duties, taxes and fees) is a checkout tax engine for cross-border ecommerce. It computes landed cost at the moment of sale. It does not remember the quote you emailed a customer three weeks ago.
- **Customs brokers** ($150–400/entry) price the entry *after* the goods arrive. They are structurally backward-looking — by the time the broker files, your pricing decision was made 60 days ago.
- **Trade consultants** ($5K–15K for a classification review) are project-based. An SMB importer doing $4M/yr is not buying a $12K engagement every time the Federal Circuit issues a stay.

The gap is the space between "here is the rate" and "here is what I already promised." An importer's real exposure lives in artifacts nobody has digitized: the quote PDF they emailed a customer, the PO they cut to a Vietnamese factory, the DDP contract with the delivery term buried on page four. When the rate moves, the importer's actual question is *"which of my commitments just broke, who do I have to call today, and what do I say?"* — and the honest answer today is that they find out one deal at a time, usually when the invoice lands.

The 10× is not the duty math. Duty math is arithmetic. The 10× is holding the book of live commitments and re-running it the moment the ground shifts.

## 4. Target market

- **Primary customer:** Owner, CFO, or ops lead at a US importer/distributor doing **$2M–$50M in annual imported goods** — 5 to 80 employees, sourcing from 3–20 overseas suppliers, cutting POs continuously and quoting B2B customers on 30–90 day price validity. Think industrial parts distributors, specialty food importers, furniture and lighting wholesalers, apparel brands, auto-parts resellers. The kind of firm that has a controller and a spreadsheet, but no trade compliance department.
- **Why they buy:** In their world, the pain is not "I don't know the tariff." It's "I quoted a customer at a 22% margin in June, the rate moved in July, and I found out I was actually at 4% when the entry cleared." The trade press describes exactly this squeeze: thin-margin firms with fixed-price contracts and price-sensitive customers get hit hardest, because *raising prices protects margin, absorbing costs protects the relationship, and neither option is clean.* They want to know which conversation they have to have, before the customer has it for them.
- **Rough TAM reasoning:** The US Census Importer Database identified **239,231 US importers in 2024**, and the vast majority are SMEs (<500 employees). Strip out one-off and micro importers and assume ~40–60K firms import continuously enough to carry a live book of quotes and POs. Capture 1,500 of them at ~$3.6K ACV and this is a $5M+ business. I need 0.5% of the addressable set.
- **Why now for them:** Because on July 24 the flat surcharge that applied uniformly to every country disappears, and the replacement — if the Section 301 proposal lands as drafted — applies at 12.5% to 46 named countries and not to the rest. A supplier book that was tariff-neutral in June becomes a set of relative winners and losers in August. Every importer with a Vietnam line and a Mexico line now has a sourcing decision *and* a repricing decision at the same time.

## 5. Product sketch (MVP)

- **Import your book, not your catalog.** Forward quote PDFs, POs and supplier invoices to a dedicated inbox, or drop them in. The system reads them, extracts line items, and asks you to confirm the HTS classification once per SKU (not per document).
- **The exposure ledger.** A single running view of every live commitment — quote #, customer, SKU, origin country, quantity, price you promised, duty assumed at quote time, duty today, and the delta in dollars and margin points. Sorted by how badly it's bleeding.
- **Rate-move blast radius.** When a program changes (§122 sunset, a new §301 list, a §232 action), you get one alert that says: *"This change hits 11 open quotes worth $340K and 2 POs in transit. Combined margin impact: −$41,200. Three quotes are now below cost."* Not "HTS 8471.30 changed."
- **Country re-sort view.** Same SKU, priced from each of your existing suppliers' countries under today's rules. Shows which of your own supplier relationships just became the expensive one — the sourcing question, answered with your actual suppliers rather than a generic table.
- **Delivery-term exposure flags.** Reads the incoterm on each contract and flags every DDP commitment running past a known rate-change date — the ones where *you* silently own the duty delta.
- **The customer conversation, drafted.** For each broken quote, a plain-English note to that customer explaining the specific change, the specific impact, and the proposed new price — with the source citation attached, so it reads as a fact rather than an excuse.
- **Entry-date reconciliation.** Match what you were actually billed at the border against what you assumed at quote time, so the gap gets caught in the same month, not at year-end.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist, because the input is unstructured and the customer will never structure it for you.

1. **Document → line items.** Small importers do not have clean ERP data. They have a PDF quote their sales guy built in Word, a PO in a supplier's format, and a contract with the incoterm written in prose. Extracting the SKU, origin, quantity, price, and delivery term out of that mess is the entire onboarding problem — and it's the thing that historically forced this category into $15K consulting engagements. An LLM does it in seconds. That's the unlock.
2. **Product description → HTS classification.** The classification step is the reason "just build a calculator" doesn't work: the customer doesn't know their 10-digit code, and guessing wrong makes every downstream number a lie. Model-assisted classification with a human confirmation step, memoized per SKU, turns a specialist task into a one-time 30-second review.
3. **Rate-change → blast radius.** Reading a CSMS bulletin or a Federal Register notice and determining *which of this specific customer's SKUs and countries it touches* is a reasoning task over messy legal text against a structured book. Rules alone break every time the legal instrument changes shape — which, this year, is every eight weeks.

The duty arithmetic itself is dumb addition and I'd never claim otherwise. The AI is doing the two jobs that stop this from being a spreadsheet: reading the paperwork, and reading the law.

## 7. Localization angle

N/A — this is a US-only play by construction. The product's entire value is knowing US tariff programs (§122, §301, §232, MFN stacking) and US entry mechanics. The *customers* are US importers of record, because the US IOR is the entity that legally pays the duty. There is a real EU analog later (CBAM has the same "your quote just broke" shape), but shipping v1 in two jurisdictions at once would halve the depth in each. Win the US first.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers, priced against what they already pay for pain in this category (a single $5K classification review, or $150–400 per entry to a broker):
  - **Watch — $149/mo:** up to 50 active SKUs, 25 open commitments, alerting + ledger.
  - **Operate — $399/mo:** up to 300 SKUs, unlimited commitments, country re-sort, DDP flags, drafted customer notes. **This is the target tier.**
  - **Book — $899/mo:** multi-entity, unlimited SKUs, entry reconciliation, broker/CPA seat sharing.
- **ACV:** ~$3,600 blended (assumes most land on Operate, some on Watch, a tail on Book).
- **Math to $1M ARR:** 280 customers on Operate at $399/mo = $1.34M. Realistically ~300 customers blended across tiers.
- **Math to $5M ARR:** ~1,400 customers blended, or ~900 customers plus an annual "rate event" surge product and a broker-channel white-label tier. Needs a second motion (see below), not just more of the same.
- **Expansion path:** ACV grows three ways. (a) SKU count — importers add lines faster than they drop them. (b) Entity count — distributors with multiple LLCs. (c) The reconciliation module, which is the one that pays for itself in hard dollars and justifies the $899 tier. Longer term, the accumulated per-SKU classification library is the thing they can't rebuild elsewhere, which is what makes the price stick.

## 9. Go-to-market wedge — first 100 customers

This is the section that decides the idea, and here it's unusually easy, because **the buyer is publicly identifiable and the trigger date is on the calendar.**

- **Ride July 24.** Ship a free, ungated "Section 122 Sunset Exposure Check": upload your open POs and quotes, get back a one-page PDF showing exactly which ones change on July 24 and by how much. That is a lead magnet with a legally-mandated deadline attached. Post it to r/smallbusiness (which the trade-marketing literature explicitly names as the high-signal room where "operators talk margins, suppliers, and what-would-you-do"), plus r/Entrepreneur, r/logistics, and the ImportExport and Freight LinkedIn groups. The free tool *is* the onboarding flow — everyone who uploads has already handed us their book.
- **Bill of lading data is public.** ImportGenius, ImportKey and Panjiva sell US customs manifest records: importer name, supplier, origin country, HTS, volume. I can pull a list of every US importer with active shipments from Vietnam, India, Japan, Korea or China in the last 90 days — i.e. exactly the firms whose duty position changes if the 12.5%/46-country proposal lands. That's not a cold list, it's a *diagnosed* list. Email 2,000 of them a personalized one-pager: "Your last 6 shipments from Vietnam totaled ~$X in declared value. Here's what happens to them on July 24." At a 3–5% reply rate that's 60–100 conversations from one send.
- **Customs brokers as a channel, not a competitor.** A broker files entries for 50–300 importers and gets panicked "what does this mean for me" calls every time the rate moves — calls they can't bill for and don't want. Give them a co-branded portal so their clients self-serve, revenue-share the seat. Ten brokers with 80 clients each is 800 warm introductions from someone the buyer already trusts. Brokers are listed publicly by CBP district; there are a few thousand licensed.
- **Write the thing nobody's writing.** Every trade-law firm publishes "here is what §122's sunset means" in the abstract. Nobody publishes "here is what it means to a $6M furniture importer sourcing from Vietnam, with the numbers." Two of those per month, with a real worked example, is the SEO and credibility base — and the free exposure check is the CTA at the bottom of each.

## 10. Build complexity — justification

**Medium.** Nothing here is research-grade. Document extraction and HTS classification are off-the-shelf LLM calls with a human confirmation step. The tariff rate data is public (HTS, CSMS bulletins, Federal Register) and already being scraped by a dozen free calculators — I'd rather license or scrape it than pretend it's proprietary. The real work is (a) the ingestion pipeline that tolerates whatever garbage PDF the customer forwards, (b) the commitment ledger model, which has genuine state and versioning complexity because you must reconstruct *what the rate was on the day the quote went out* to compute a delta, and (c) staying current with legal instruments that keep changing shape. Call it **10–14 weeks to v1 for a pair**, one of whom needs to actually learn duty stacking properly rather than vibe it.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Informational and analytical. Ships with a "verify with your licensed customs broker before entry" posture — this advises on commercial exposure, it does not file entries or practice customs law. |
| Ethical — no harm / dark patterns | ✅ | Helps small firms see costs they're already liable for. The pro-social read is that it stops SMBs from silently eating duty deltas they never agreed to. |
| Market exists (evidence above) | ✅ | 239K US importers; existing paid substitutes at $150–400/entry and $5–15K/project; documented weekly repricing behavior. |
| 1–5 person team can build this | ✅ | Two people, 10–14 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Main costs are LLM inference and a trade-data subscription. Well under $25K to first revenue. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | Hair-on-fire, and datable. Firms are repricing *weekly*, passthrough jumped from 44% to 82% year over year, and a legally-mandated rate change lands July 24. Money is leaking now, in known dollars. Not a 20 because the biggest importers already have brokers and staff on it — the acute version of this pain is concentrated in the mid-band. |
| Demand evidence | 15 | **12**/15 | Strong and multi-sourced: existing paid substitutes (brokers, consultants, Zonos), a swarm of SEO calculators competing for the keyword (which means the search volume is real and someone's monetizing it), documented behavior change in SMB pricing. Docked 3 because I could not surface direct verbatim customer quotes asking specifically for *quote-level exposure tracking* — the demand for the underlying pain is proven; the demand for this exact framing is inferred. |
| Build feasibility | 15 | **11**/15 | Off-the-shelf models, public rate data, standard stack. The point-in-time rate reconstruction and the ingestion of arbitrary PDFs are the two places this gets genuinely fiddly. 10–14 weeks, not 6. |
| Distribution clarity | 15 | **12**/15 | Unusually good: public customs manifest data means the target list is not just nameable but *pre-diagnosed*, and there's a hard calendar trigger to send against. The broker channel is real. Docked because cold email into SMB owners converts unpredictably and the July 24 trigger is a one-time boost, not a permanent engine. |
| Revenue mechanics | 15 | **12**/15 | Pricing is anchored to real existing spend and the value is denominated in the customer's own dollars ("this alert just saved you $41K") — the easiest sale there is. Docked because $399/mo is above the reflexive SMB comfort line and will need the free exposure check to do the proving. |
| Time to first revenue | 10 | **8**/10 | The free July 24 exposure check can convert to paid within weeks of launch — the urgency does the selling. Not a 9–10 because v1 is 10–14 weeks out and the sharpest trigger date may have passed by the time it ships. |
| Defensibility | 10 | **4**/10 | **This is the weak axis and I won't dress it up.** The rate data is public. The classification is an LLM call. A funded incumbent (Flexport, Zonos, Avalara) could bolt a commitment ledger onto an existing product. The only real moat is the accumulated per-customer SKU classification library and the workflow lock-in of having your whole book live in one place — a soft, month-12 moat, not a month-3 one. |
| **Total** | **100** | **76**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who will genuinely learn duty stacking — MFN + §122 + §301 + §232 applied additively, entry-date rules, incoterm liability. Get this wrong and you produce confidently incorrect numbers, which in this category is worse than producing none. Pair a builder with a licensed customs broker as an advisor, and pay them properly.

### Key assumptions to validate (3–5)

1. **Assumption:** Small importers actually keep a knowable book of open quotes and POs — i.e. the data exists somewhere retrievable, even if it's a mess. **How to test:** Ask 20 importers to forward their last 10 quote/PO documents. If most can't produce them within a day, the ingestion premise collapses and this becomes an ERP integration play instead.
2. **Assumption:** They'll pay ~$399/mo for exposure visibility rather than just calling their broker for free. **How to test:** Take 30 firms through the free exposure check, then put a price on the ongoing ledger. Look for ≥15% conversion. Below 8% and the value is real but the willingness-to-pay isn't.
3. **Assumption:** Customs brokers will channel rather than defend. **How to test:** Pitch 10 brokers on a revenue-shared co-branded portal. If they read it as disintermediation and refuse, the single best distribution channel is gone and distribution drops from 12 to ~7.
4. **Assumption:** LLM HTS classification is accurate enough that a human confirmation step is a 30-second review, not a re-do. **How to test:** Classify 200 real SKUs, have a licensed broker grade them. Need ≥85% correct at the 10-digit level for the workflow to feel like assistance rather than homework.

### Risk flags

1. **Regulatory whiplash cuts both ways.** The same volatility that creates this product could kill it. If the courts and Congress settle into a stable, boring tariff regime for three years, the "your book just broke" alert fires once a quarter and the product decays into a nice-to-have. The urgency is the business — and the urgency is not guaranteed to persist.
2. **Incumbent bolt-on.** Zonos, Avalara, Flexport and every ERP with a landed-cost module can add a commitment ledger. They have the rate data and the customers. The bet is that they're structurally aimed at transactions and enterprises, and won't chase a $399/mo SMB with messy PDFs — but that's a bet on their inattention, not on a moat.
3. **Correctness liability.** If the tool says a quote is fine and it isn't, the customer eats a real loss and blames you. This demands conservative UX (show the assumption, cite the source, flag low-confidence classifications) and hard disclaimers. It also means you cannot ship this fast and sloppy.
4. **Data dependency.** Customs manifest data (ImportGenius et al.) powers the best channel. If pricing or access changes, the pre-diagnosed cold list gets expensive.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who will do the domain homework, paired with a
                        licensed customs broker as a paid advisor. Comfort with cold outbound
                        into SMB owners is required — this is not a self-serve-only product.
Time to revenue:        10–14 weeks to v1; first paid within 4–6 weeks of launch
Capital to launch:      $15–25K (LLM inference, customs manifest data subscription, broker advisor)
Top 3 assumptions to validate first:
  1. Importers can produce their open quote/PO documents on demand — ask 20 to forward 10 each
  2. ≥15% of free-exposure-check users convert to a paid ledger at $399/mo
  3. Customs brokers channel rather than defend — pitch 10 on a revenue-shared portal
Kill criteria:
  - Abandon if <8% of free exposure-check users convert to paid after 60 days
  - Abandon if LLM HTS classification grades below 85% at the 10-digit level on 200 real SKUs
  - Abandon if the tariff regime stabilizes such that fewer than 2 material rate events
    occur in any rolling 6-month window — no volatility, no product
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull US customs manifest records for 300 importers with active Vietnam/India/Korea shipments in the last 90 days. For each, hand-compute their §122 sunset exposure on their actual declared volumes. This is the product, done manually, for 300 strangers.
- **Day 3–4:** Email all 300 a single personalized line — *"Your last N shipments from [country] carry ~$X in Section 122 duty that changes on July 24. Want the breakdown by SKU?"* Measure reply rate. This tests whether the *insight* is wanted, before building anything that produces it.
- **Day 5:** Get on the phone with everyone who replied. Ask exactly one question: *"Can you tell me right now which of your open quotes and POs this affects?"* Then shut up and listen.
  - **Go** if ≥5% reply, and ≥8 of the conversations end with them unable to answer that question and asking how to find out.
  - **No-go** if they answer it easily — because that means the book is already visible to them and I'm solving a problem they've solved.

The falsifiable result: **can they, or can they not, name their own broken commitments?** If they can, there's no product here and I'd rather find out on day 5 than in month 5.
