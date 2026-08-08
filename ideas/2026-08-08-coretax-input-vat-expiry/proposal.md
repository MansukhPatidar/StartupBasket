---
title: "KreditLedger — input-VAT expiry ledger for Indonesian PKPs"
slug: coretax-input-vat-expiry
date: 2026-08-08
category: Compliance / Indonesia-SME
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Tracks every Coretax purchase invoice against its 3-month credit window so Indonesian firms stop expensing VAT they could have reclaimed."
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [SMB, AI-agent, Compliance-driven, Multilingual, Solo-builder]
axes:
  problem: 16
  demand: 11
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# KreditLedger

## 1. One-liner

Tracks every Coretax purchase invoice against its 3-month credit window so Indonesian firms stop expensing VAT they could have reclaimed.

## 2. Trend signal — why now?

Indonesia rewired its entire VAT machine in 18 months, and the buyer side of that machine now leaks money on a clock.

Three things changed:

**Coretax became the only door.** From 31 December 2025 Coretax fully replaced the legacy e-Faktur desktop app for essentially all VAT-registered businesses, and DJP clearance became a legal precondition for a valid invoice rather than a post-hoc check. PER-11/PJ/2025 moved the invoice upload deadline to the 20th of the following month. Invoices uploaded after that date are not valid for VAT credit.

**The crediting window is now an explicit, enforced clock.** DJP confirmed in writing that under UU PPN Article 9(9) input tax may be credited *paling lama 3 (tiga) masa pajak berikutnya* — at most three tax periods after the period in which the tax invoice was created. Miss it and the credit right is extinguished: the VAT can no longer offset output tax and must be booked as expense. That is a permanent 12% margin hit on the purchase, not a timing difference.

**The population that has to care roughly doubled in urgency.** DJP reported PKP count rising from 674,964 at end-2024 to 735,838 by November 2025 — a 9.02% jump of 60,874 new PKPs, which DJP itself attributed partly to Coretax rollout. Every one of those is a new entity that must run a monthly input-VAT credit decision it has never run before.

And the failure mode is documented, not hypothetical. Input invoices routinely fail to appear in the buyer's Coretax dashboard — most commonly because the seller typed the buyer's NIK into the National ID field instead of NPWP into the TIN field. When that happens the Pajak Masukan simply does not surface for the buyer, and cannot be credited. The buyer has no notification. They find out when someone goes looking — if someone goes looking.

Provenance:
  - Signal 1 (demand): Documented, DJP-acknowledged failure where input invoices never appear in the buyer's Coretax dashboard due to seller NIK/NPWP field errors, leaving Pajak Masukan uncreditable with no buyer-side alert — https://pajakku.com/artikel/pajak-masukan-tidak-muncul-di-coretax-ini-solusinya — 2026-08-08
  - Signal 2 (feasibility): Coretax exposes prepopulated input-VAT data covering the current period plus 3 prior periods, and PJAP/ASP API access is an established licensed channel — https://pajak.go.id/en/node/41027 — 2026-08-08
  - Signal 3 (economic): PKP population grew from 674,964 to 735,838 (+60,874, 9.02%) in 2025, growth DJP partly attributes to Coretax; incumbent Mekari Klikpajak monetises this base at Rp250K–999K/mo with reconciliation sold as a paid add-on — https://news.ddtc.co.id/berita/nasional/1815492/lakukan-ekstensifikasi-djp-catat-60874-pkp-bertambah-tahun-ini — 2026-08-08
  Category: Regulatory arbitrage

## 3. The opportunity

Every incumbent in Indonesian tax software is built around **issuing** invoices. Klikpajak, OnlinePajak, Pajakku — their pricing pages are denominated in e-Faktur *upload quota* (100/300/750 per month). That tells you exactly where they think the job is: getting your outbound invoices into DJP.

The buyer side is an afterthought. Klikpajak does ship input-VAT reconciliation, and it does the obvious part well — matching supplier name, NPWP, document number, values, dates against your purchase ledger, with a manual "Cocokkan" button for rounding drift. What it does not do, anywhere in its published material, is treat the **three-period credit window as a deadline with an expiry date attached to each individual invoice**.

That's the gap. Reconciliation answers "do these two records match?" It does not answer "which of my uncredited invoices die at the end of this month, and what is that worth?"

Those are different products. The first is a matching engine. The second is an aging ledger with money on it. An invoice can reconcile perfectly and still expire uncredited because nobody was counting.

Worse, the highest-value cases are the ones reconciliation *structurally cannot* catch: the invoice that never arrived in your Coretax dashboard at all because the seller miskeyed your tax ID. There is nothing to reconcile against. It is invisible by construction. The only way to find it is to compare what you *bought* — your AP ledger, your GR records — against what Coretax *shows you*, and flag the difference. Incumbents match Coretax-to-ledger for the invoices that exist. Nobody hunts the absences.

The 10× claim is narrow and defensible: incumbents tell you what matched this month. KreditLedger tells you what you are about to permanently lose, in rupiah, with 30–90 days left to fix it.

## 4. Target market

**Primary customer:** Finance/tax lead (Manajer Keuangan, Staf Pajak, or the owner in smaller firms) at an Indonesian PKP with roughly Rp 20–500 billion annual turnover — comfortably past the Rp 4.8bn PKP threshold, 50–500 purchase invoices a month, running Accurate/Jurnal/Zahir or spreadsheets alongside Coretax. Manufacturing, distribution, trading, contracting, F&B supply — anything with heavy purchasing. Jabodetabek, Surabaya, Medan, Bandung, Semarang.

Secondary and arguably better wedge: **Konsultan Pajak firms** — the small tax-consulting practices that run monthly SPT Masa PPN for 20–80 client PKPs each. One sale covers dozens of entities. They feel the pain repeatedly and they carry the blame when a client's credit expires.

**Why they buy:** Because expired input VAT is a loss the finance lead personally has to explain. It is not a fine, not a penalty — it is worse, in a way. It is money the company was legally entitled to and simply forgot to take. There is no external villain. Documented consequence: once past three periods the credit right is extinguished, the VAT can no longer be deducted from output tax, and it must be charged as a cost — directly reducing profit. On a Rp 500 million purchase at 12%, that is Rp 60 million evaporated because a field was miskeyed and nobody noticed for four months.

**Rough TAM reasoning:** 735,838 registered PKPs as of November 2025. The large majority are too small to care — no meaningful purchase volume, or an accountant handling three clients on WhatsApp. Assume 8–12% have enough purchase invoice volume for this to be a live monthly risk: roughly 60,000–90,000 entities. Plus several thousand konsultan pajak practices as a multiplier channel. At Rp 400K/mo blended, that is a serviceable market well north of Rp 300 billion annually — far more room than a $5M ARR target needs.

**Why now for them:** Before 2025 this clock existed on paper but the desktop e-Faktur workflow kept input invoices under the buyer's own control. Under Coretax the buyer's input list is populated by *what sellers did*, which means a counterparty's data-entry error silently becomes your loss. The dependency inverted. Most finance teams have not internalised that yet — they are still treating the Coretax dashboard as authoritative rather than as something to audit against their own books.

## 5. Product sketch (MVP)

- **Expiry ledger** — every uncredited input invoice listed with its period of issue, its hard expiry period, days remaining, and the rupiah at risk. Sorted by what dies soonest. This is the home screen and the whole product in one view.
- **Ghost-invoice hunt** — upload or sync your AP/purchase ledger; the product flags purchases from PKP vendors that have no matching invoice in your Coretax input list. These are the invisible ones — the NIK-in-the-NPWP-field cases — surfaced while there is still time to get a Faktur Pengganti issued.
- **Vendor chase pack** — for each ghost or defective invoice, a generated Bahasa Indonesia email/WhatsApp message to the vendor's AP contact stating exactly which invoice, what is wrong with the tax ID field, what they need to re-issue, and by when. One click to send, with follow-up cadence.
- **Month-end close brief** — a one-page summary before each SPT Masa PPN filing: total creditable this period, total expiring within 30/60/90 days, total already lost, and the specific invoices driving each number.
- **Replacement-invoice tracker** — Faktur Pengganti sits in "Waiting for Amendment" until the buyer confirms. Track which ones are pending on your side and which are pending on the counterparty's, so nobody files on an unsettled position.
- **Loss report** — cumulative rupiah recovered vs. rupiah expired since signup. This is the renewal argument, so it is a first-class feature, not an afterthought.
- **Multi-entity switcher** — for konsultan pajak: all client PKPs in one list, sorted by whoever is closest to losing money this month.

## 6. AI angle — what's load-bearing

Honest answer: AI is doing real work here, but it is not the reason the product exists. The deadline is.

Where it genuinely carries weight:

**Vendor matching across dirty records.** The core hunt is comparing your purchase ledger against your Coretax input list — and the same vendor appears as "PT Sinar Jaya Abadi", "SINAR JAYA ABADI, PT", and "Sinar Jaya" across three systems, with NPWP sometimes 15-digit-padded and sometimes 16-digit. Deterministic joins fail on this constantly. Fuzzy entity resolution over Indonesian company-name conventions is where most of the engineering value sits, and an LLM handles the ambiguous tail that rules cannot.

**Purchase document extraction.** Many of these firms receive supplier invoices as scans and PDFs, not structured data. Vision extraction pulls vendor, NPWP, DPP, PPN, and date well enough to reconcile — this was genuinely not practical at this price point three years ago.

**Chase message drafting.** Correct, polite, specific Bahasa Indonesia telling a vendor's AP clerk they miskeyed your tax ID and must issue a Faktur Pengganti. Tone matters in this market; a blunt template gets ignored.

If you removed the AI you would still have a viable product — a worse one, needing clean structured input and manual vendor mapping, but the expiry ledger would still save people money. I would rather say that plainly than pretend otherwise. The AI is what makes it work on messy real-world data at Rp 400K/month instead of requiring a Rp 5 million implementation project.

## 7. Localization angle

This is localization all the way down — it does not exist as a global product.

- **Regulation is the product.** The three-period window, the 20th-of-month upload deadline, Faktur Pengganti bilateral confirmation, NIK-vs-NPWP field semantics. None of it transfers anywhere.
- **Language.** Product UI and every vendor chase message in Bahasa Indonesia. Finance staff at a Semarang distributor are not working in English.
- **Price point.** Rp 400K/mo (~$25) is a real SaaS price in Indonesia. Klikpajak anchors Rp 250K–999K. A $99/mo global tool is dead on arrival here; a $25/mo tool is unbuildable by anyone treating Indonesia as a rounding error on a global roadmap.
- **Payment rails.** QRIS and bank transfer, invoiced monthly. Card-only checkout loses most of this segment.
- **Distribution.** WhatsApp is the business channel. Vendor chase messages must go out over WhatsApp, and support happens there too.
- **Integration reality.** Accurate Online, Mekari Jurnal, and Zahir are the accounting systems that matter. Not QuickBooks, not Xero.

## 8. Business model — path to $1M–$5M ARR

**Pricing:**
- Solo PKP — Rp 299,000/mo (~$18): one entity, up to 150 purchase invoices/month
- Business — Rp 599,000/mo (~$37): one entity, unlimited invoices, ledger integrations, WhatsApp chase
- Konsultan — Rp 2,500,000/mo (~$155): up to 25 client entities, multi-entity dashboard, white-label chase messages
- Konsultan+ — Rp 150,000/entity/mo above 25

Deliberately anchored just under Klikpajak's tiers. This is not a replacement for their e-Faktur issuance — it sits alongside it, which makes the buying decision additive and cheap rather than a migration.

**ACV:** Rp 7.2M (~$440) for a direct business customer. Rp 30M (~$1,850) for a konsultan practice.

**Rough math to $1M ARR (~Rp 16.5bn):** 1,200 direct Business customers at Rp 599K plus 250 konsultan practices at Rp 2.5M ≈ Rp 8.6bn + Rp 7.5bn = Rp 16.1bn. Call it 1,200 direct + 260 consultants. Against 60,000–90,000 addressable entities and several thousand practices, that is roughly 1.5–2% penetration of the direct segment. Achievable, not trivial.

**Rough math to $5M ARR (~Rp 82bn):** needs the konsultan channel to carry it — roughly 1,200 practices averaging Rp 4M/mo (larger books, more entities) plus 4,000 direct. That requires being the default input-VAT tool taught inside IKPI circles, plus at least one ERP partnership (Accurate or Jurnal) putting you in front of their installed base. Plausible in 3–4 years, not 18 months. I would plan the business around $1–2M and treat $5M as upside.

**Expansion path:** per-entity growth inside consultant accounts is the cleanest lever — a practice that signs with 12 clients and grows to 40 triples its bill with zero new sales effort. Beyond that: output-side Faktur Pengganti tracking, a withholding-tax (e-Bupot) aging module on the same clock mechanic, and an annual "VAT leakage audit" report priced as a one-off for non-subscribers.

## 9. Go-to-market wedge — first 100 customers

The whole GTM rests on one asset: **you can quantify a prospect's loss before they pay you anything.**

1. **The free leakage audit.** Landing page offers a one-off audit: send your Coretax input-VAT export and your purchase ledger for the last four periods, get back a PDF listing every invoice that expired uncredited, every one expiring within 90 days, and the total rupiah. Free, 24-hour turnaround, run semi-manually for the first 50. When the number comes back non-zero — and for a firm with 200+ monthly purchase invoices it will — the sales conversation is over. Target 300 audits in the first quarter.

2. **Konsultan pajak firms, one region at a time.** IKPI (Ikatan Konsultan Pajak Indonesia) has chapter structure and regular events. Build a list of 400 practices in Jabodetabek and Surabaya from IKPI directories, firm websites, and LinkedIn. Offer each a free audit across three of their client entities. A practice that finds Rp 40 million of expired credit across three clients has a professional problem it must now solve — and 30 more clients to check. Expect a 20–25% audit uptake and 15–20% audit-to-paid from those. That is 12–20 practices, each worth Rp 30M/year.

3. **Ride the month-end panic cycle.** SPT Masa PPN is due end of the following month; the upload deadline is the 20th. The 15th–25th of every month is when this audience is actively thinking about input VAT. Run tightly-timed content in exactly that window — LinkedIn and Instagram posts in Bahasa Indonesia walking through one real failure mode (the NIK/NPWP field error is the best hook, since it is DJP-acknowledged and most people have not heard of it). Seed into Indonesian accounting and tax Facebook/Telegram groups, which remain genuinely active in this market. Cheap, repeatable, monthly.

4. **Accurate Online / Mekari Jurnal partner ecosystems.** Both run implementation-partner networks — consultancies that install and support their accounting software for SMEs. These partners are already inside the customer's finance function and are hunting for add-on revenue. Recruit 10 as resellers on 25% recurring.

5. **Vendor chase as a growth loop.** Every chase message goes to another PKP's AP department — a company that has the same problem on its own purchase side, now receiving a well-formatted message with your footer on it. Not the primary channel, but it compounds for free.

## 10. Build complexity — justification

**Low.** The hard parts are data plumbing, not novel technology: pull the buyer's input-VAT list (prepopulated data covering the current plus three prior periods is exposed via the DJP-integrated channel), ingest purchase ledgers by CSV/Excel export first and Accurate/Jurnal API second, resolve vendors fuzzily, subtract, and attach a countdown to each row. A competent pair ships a credible v1 in 8–10 weeks. Start with CSV upload only — no PJAP licensing on the critical path for v1 — and add API integration once revenue justifies the partnership work. The genuinely fiddly bits are Indonesian entity-name resolution and NPWP format normalisation (15-digit padded vs. 16-digit), both of which are grind, not research.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only analysis of the customer's own tax and purchase data. Helps taxpayers claim credits they are legally entitled to, on DJP's own timeline. |
| Ethical — no harm / dark patterns | ✅ | Pure loss-prevention. No aggressive tax positions, no avoidance schemes. Argues for claiming what the law already grants. |
| Market exists (evidence above) | ✅ | 735,838 PKPs; incumbents charging Rp 250K–999K/mo; DJP-documented failure modes. |
| 1–5 person team can build this | ✅ | Two people, 8–10 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Under $15K: infrastructure, LLM inference, one Indonesian tax advisor on retainer. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, quantifiable, recurring monthly money loss with a hard legal deadline and no external villain to blame. Docked because it is felt at month-end rather than daily, and many firms genuinely do not know they are bleeding — unfelt pain is harder to sell than screaming pain. |
| Demand evidence | 15 | 11/15 | Strong structural evidence: PKP counts, incumbent pricing, DJP-documented failure modes, a paid reconciliation add-on category that already exists. Docked hard because I could not source verbatim customer complaints — Indonesian finance staff do not vent on Reddit, and I refuse to invent quotes. This is the weakest axis and the first thing to validate. |
| Build feasibility | 15 | 13/15 | Off-the-shelf stack, CSV-first ingestion, no PJAP dependency for v1. Fuzzy Indonesian entity resolution is the only real engineering. |
| Distribution clarity | 15 | 11/15 | The free leakage audit is a genuinely strong wedge — it quantifies loss pre-purchase. Konsultan channel is a named, enumerable list. Docked because audit-to-paid conversion is unproven and the audit is manual-ish at first, capping early throughput. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked directly against Klikpajak's published tiers; $1M ARR needs ~1.5–2% penetration, which is sane. Docked because Rp 599K/mo against recovered amounts of tens of millions should support higher pricing, yet Indonesian SMB price sensitivity likely caps it — and the $5M path depends on partnerships not yet in hand. |
| Time to first revenue | 8 | 8/10 | Audits can be sold manually in week 1–2 of launch; paid conversions realistically 6–8 weeks in. Month-end cycle timing means you get one strong shot per month, which paces things. |
| Defensibility | 10 | 4/10 | The honest weak point. Klikpajak could ship an expiry column in a quarter if they noticed. What you get is regulatory depth, workflow lock-in through vendor chase history, and consultant relationships — a 6–12 month head start, not a moat. Execution-only. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

You need an Indonesian tax practitioner as founder or co-founder. Not an advisor — a partner. Every rule in this product has exceptions a foreigner reading regulations will get wrong, and konsultan pajak buy from people they recognise as peers. The technical build is the easy half.

### Key assumptions to validate

1. **Assumption:** A typical mid-size PKP with 200+ monthly purchase invoices actually has non-trivial expired or at-risk input VAT — enough that the number shocks them. **How to test:** Run 15 free manual audits. Measure the distribution of rupiah at risk. If the median is under Rp 5 million, the pain is too small to price against and the idea is dead.
2. **Assumption:** Buyers do not already have a reliable internal process for this. **How to test:** In those same 15 engagements, ask directly how they currently track uncredited invoices against the 3-period window. If most say "our Klikpajak/Accurate report handles it," the gap I think I found is not there.
3. **Assumption:** Konsultan pajak will pay Rp 2.5M/mo rather than absorb this as billable manual work. **How to test:** 25 conversations with IKPI-member practices. Ask what they bill for monthly PPN work per client and whether tooling that prevents a client loss is a cost or a margin.
4. **Assumption:** Coretax input-VAT data can be exported or accessed reliably enough for monthly automated use without full PJAP licensing. **How to test:** Have a practitioner walk the actual export path on a live account in week 1. If it requires PJAP licensing from day one, build complexity and time-to-revenue both get worse.

### Risk flags

1. **Incumbent response:** Klikpajak, OnlinePajak, and Pajakku all have the data, the customers, and the DJP integration. An expiry-aging view is a feature, not a moonshot. Mitigation is speed plus owning the konsultan relationship layer they underserve.
2. **Platform dependency:** The entire product depends on DJP's Coretax data surface. DJP changes rules and formats frequently — PER-11/PJ/2025 already moved a deadline mid-stream. A DJP-shipped native expiry alert would meaningfully damage the value proposition.
3. **Regulatory drift in your favour or against:** If DJP extends the crediting window or auto-credits eligible invoices, the urgency evaporates. Conversely, tighter enforcement makes this more valuable. Watch DJP announcements as a leading indicator.
4. **Unverified demand voice:** I scored demand at 11 without a single sourced customer quote. That is a real gap, not a rounding error. The 15-audit sprint exists specifically to close it, and if it comes back weak the score drops into VALIDATE territory.
5. **Founder access:** Without a credible Indonesian tax practitioner, the konsultan channel — which carries the $5M case — will not open. This is a hard dependency, not a nice-to-have.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Indonesian tax practitioner paired with a technical
                        co-founder; Jakarta or Surabaya based; existing
                        konsultan pajak relationships are the unfair advantage
Time to revenue:        6–10 weeks (audits sellable from week 2)
Capital to launch:      Rp 200-250 juta ($12-15K)
Top 3 assumptions to validate first:
  1. Median at-risk/expired input VAT per mid-size PKP exceeds Rp 5 million
     — 15 free manual audits, measure the distribution
  2. No reliable existing internal or incumbent process covers the 3-period
     expiry clock — ask all 15 audit subjects how they track it today
  3. Konsultan practices will pay Rp 2.5M/mo for multi-entity coverage
     — 25 structured conversations with IKPI-member firms
Kill criteria:
  - Abandon if median at-risk VAT across 15 audits is under Rp 5 million
  - Abandon if >50% of audited firms already have a working expiry process
  - Abandon if Klikpajak or OnlinePajak ships per-invoice expiry aging
    before your v1 reaches 20 paying customers
  - Abandon if fewer than 3 of 25 konsultan conversations reach a pricing
    discussion
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** With a practitioner co-founder, walk the real Coretax export path on two live PKP accounts. Confirm you can pull the input-VAT list including prior-period uncredited invoices, and confirm what identifiers come with it. This is a hard gate — if the data is not reachable without PJAP licensing, everything downstream changes.
- **Day 3–4:** Recruit 15 PKPs (via the practitioner's network) for a free leakage audit. Run the comparison by hand in a spreadsheet: purchase ledger vs. Coretax input list, flag ghosts and expiring rows, total the rupiah. Record the number for each firm and ask every one of them how they track this today.
- **Day 5:** Call 25 konsultan pajak practices. Lead with the aggregate finding from Day 3–4 ("across 15 firms we found a median of Rp X at risk"). Ask what they would pay to run this across their whole book monthly.
- **Decide go / no-go on:** median at-risk VAT across the 15 audits ≥ Rp 5 million, **and** fewer than half of them already having a working process, **and** ≥3 of 25 konsultan conversations reaching an explicit pricing discussion. Miss any of the three and this is a VALIDATE, not a GO — go back and re-scope around the konsultan channel alone.
