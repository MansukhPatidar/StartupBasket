---
title: "LampiranSatu — COA mapper for Indonesian tax preparers"
slug: coretax-l1-mapper
date: 2026-07-31
category: FinTech / Indonesia-SMB — Tax Consultants, Accounting Offices (KJA) & In-House Finance Staff Filing SPT Tahunan Badan
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns a client's trial balance into every Coretax L1 line, tied and reconciled, instead of hand-keying it."
tags:
  vertical: FinTech
  model: SaaS
  geography: SEA
  secondary: [Compliance-driven, SMB, Solo-builder, AI-agent, Multilingual, Bahasa-Indonesia]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# LampiranSatu

## 1. One-liner

Turns a client's trial balance into every Coretax L1 line, tied and reconciled, instead of hand-keying it.

## 2. Trend signal — why now?

Three things landed on Indonesian tax preparers inside twelve months, and they compound.

**Coretax removed the import button.** DJP's Coretax system replaced e-Filing for SPT Tahunan Badan. The financial statement attachment — Lampiran 1 (L1) — is filled *manually*. Ortax states it flatly: "Di Coretax, rekonsiliasi langsung dilakukan pada Lampiran 1 dan diisi secara manual (*key in*)." The article's headline is literally "Tak Ada Menu Impor." There is no CSV upload, no accounting-software connector, nothing. A preparer opens the browser and types numbers.

The one escape hatch doesn't help anyone in this market: "Saat ini, fitur *prepopulated* pada Lampiran 1 hanya berlaku untuk wajib pajak yang menyampaikan laporan keuangan dengan format XBRL." XBRL filing is the world of listed companies and financial institutions. Every SMB, every CV, every accounting office keys it in.

**The mapping is not mechanical.** Coretax defines twelve sector-specific chart-of-accounts formats — General (L1-A), Manufacturing (L1-B), Trade (L1-C), Services (L1-D), plus banking, pension, insurance, property, Islamic banking, infrastructure, securities and financing. Each sector has its own account codes. The preparer must map the client's commercial COA onto that fixed structure, and the fit is lossy by design: one Coretax account can absorb several commercial accounts, and some commercial accounts have no exact counterpart — guidance says use the closest account in substance, or an "other" account with a note. Then the balance sheet must tie exactly: total assets = liabilities + equity, and the totals must agree with the commercial financial statements. Any gap traces back to a missed account or a bad mapping, and Pajakku warns that even tiny differences invite trouble at examination.

**PP 20/2026 just pushed a large new population into this workflow.** Effective 22 April 2026, PP 20 Tahun 2026 restricts the 0.5% final UMKM regime to individuals, Perseroan Perorangan, and cooperatives. Ordinary PTs, CVs, Firmas and BUMDes are out. Entities formed after the rule takes effect need proper books from day one — bookkeeping they never had to keep when they were paying a flat percentage of turnover with no balance sheet at all. Existing entities ride out their remaining final-tax window and then land in the same place. These businesses are now filing a real corporate return with a real L1, mostly for the first time, and they're doing it through a preparer.

The strain is already visible in the numbers. DJP received 13.09 million annual returns by 3 May 2026, including 856,254 corporate returns in rupiah; by 30 April the corporate count was 1,098,274. DJP extended the corporate deadline from 30 April to 31 May 2026 *and* waived late penalties and interest. Regulators do not hand out blanket relief when a filing season goes smoothly.

Against that: roughly 7,390 registered tax consultants at end-2024, and IKPI membership at 7,931 as of 30 January 2026 — against a corporate filing population north of a million. Every hour a preparer spends retyping a trial balance is an hour stolen from a queue that is already too long.

```
Provenance:
  - Signal 1 (demand): Coretax L1 reconciliation has no import menu — filled manually (key in), COA mapped by hand across 12 sector formats; prepopulation limited to XBRL filers — https://ortax.org/rekonsiliasi-laporan-keuangan-langsung-di-spt-tahunan-coretax-tak-ada-menu-impor — observed 2026-07-31
  - Signal 2 (feasibility/economic): PP 20 Tahun 2026 (effective 22 April 2026) removes CV, Firma, ordinary PT and BUMDes from the 0.5% final UMKM regime, forcing full pembukuan and normal-rate corporate filing — https://ortax.org/pemerintah-revisi-aturan-pajak-umkm-cv-dan-pt-tak-masuk-kriteria — observed 2026-07-31
  - Signal 3 (economic): 13.09M returns filed by 3 May 2026 incl. 856,254 corporate rupiah filers; corporate deadline extended 30 April → 31 May with administrative penalties waived — https://news.ddtc.co.id/berita/nasional/1819163/djp-terima-1309-juta-spt-wp-badan-masih-bisa-lapor-tanpa-kena-sanksi — observed 2026-07-31
  - Supporting: L1 mechanics — 12 sector COAs, balance sheet must tie, fiscal reconciliation judgment required — https://pajakku.com/artikel/panduan-mengisi-lampiran-rekonsiliasi-laporan-keuangan-spt-tahunan-pph-badan-di-coretax — observed 2026-07-31
  - Supporting: ~7,390 registered tax consultants (end-2024); IKPI membership 7,931 as of 30 Jan 2026 — https://siptax.id/jumlah-konsultan-pajak-di-indonesia-2025-belum-mencukupi-kebutuhan-wajib-pajak/ — observed 2026-07-31
  Category: Regulatory arbitrage
```

## 3. The opportunity

The gap is embarrassingly specific: **the government built a system that requires a structured financial statement and then didn't build a way to get one in.**

Indonesia has perfectly good accounting software. Accurate Online, Mekari Jurnal, and Kledo all produce a clean trial balance and balance sheet. Coretax needs exactly that data, in a fixed shape. Nobody has connected the two ends. The preparer is the connector — a human ETL job, paid by the hour, working a browser form at 11pm in May.

This isn't a disruption play against an incumbent. There is no incumbent. It's a missing piece of plumbing in a mandatory, deadline-driven, annually-recurring workflow — the kind of gap that exists only because the regulation is fifteen months old and the software vendors are busy with bigger roadmap items.

Why the incumbents haven't closed it: Mekari, Accurate and Kledo sell *bookkeeping*. Their customer is the business. This tool's customer is the *preparer*, who works across dozens of clients using whatever software each client happens to run — plus a depressing number who run Excel. A vendor-specific export button only helps that vendor's users. The value here is being vendor-agnostic: take any trial balance, in any format, from any client, and produce the L1.

And crucially, the hard part isn't the file parsing. It's the **mapping judgment** — knowing that this client's "Beban Sewa Kantor" belongs in the Coretax operating expense account, that "Pendapatan Bunga Deposito" is final-taxed and gets excluded from fiscal profit, that a Trade-sector client (L1-C) needs a different account tree than a Services client (L1-D). That judgment is exactly what a language model with a good account taxonomy does well, and exactly what a human finds tedious and error-prone at 200 accounts per client.

## 4. Target market

**Primary customer:** Solo and small tax consultants (konsultan pajak) and accounting offices (Kantor Jasa Akuntansi) in Jakarta, Surabaya, Bandung, Medan and Semarang, handling 15–120 corporate clients each. Also: in-house finance staff at mid-size PTs who file their own returns. The buyer is the person who personally types the L1.

**Why they buy:** Their busy season is a wall. Corporate returns are due end of April (extended to 31 May in 2026), and every client's L1 is a manual retyping-and-reconciling job that takes 45 minutes to three hours depending on account count and how clean the books are. A consultant with 60 corporate clients is looking at 60–180 hours of pure data transcription inside a 6-week window. They currently solve this by hiring seasonal staff, working nights, or turning clients away. Turning clients away is the interesting one — it means the constraint is directly costing them revenue.

**Rough TAM reasoning:** ~7,400 registered tax consultants plus ~500 licensed KJA firms, plus a much larger unlicensed layer of bookkeeping shops and freelance preparers — call the serviceable population 15,000–25,000 preparer businesses. Behind them sit 1.1M+ corporate filers. Even 3% penetration of the preparer population at Rp 500K/month average is roughly Rp 2.7–4.5 billion ARR (~$165–275K); the path to $1M runs through per-client pricing on the bigger firms plus direct-to-filer self-serve. Not a venture-scale market. A very good bootstrapped one.

**Why now for them:** PP 20/2026 is adding corporate filers to their book at exactly the moment Coretax made each filing more labor-intensive. Their client count is going up and their per-client minutes are going up at the same time. That's the squeeze that makes someone pay for a tool in month one rather than "next season."

## 5. Product sketch (MVP)

- **Drop in a trial balance** — Excel, CSV, or a PDF of the neraca and laba rugi. Handles the export formats of Accurate, Jurnal, Kledo, and generic Excel without configuration.
- **Auto-mapped to the right sector COA** — picks the L1 sector format (A/B/C/D and the rest), proposes an account-by-account mapping from the client's COA to Coretax accounts, and shows its reasoning per line.
- **Tie-out check before you file** — verifies assets = liabilities + equity, that L1 totals agree with the source financial statements, and flags the specific account causing any variance. No more hunting a Rp 3,000 difference at midnight.
- **Fiscal reconciliation worksheet** — surfaces the usual koreksi fiskal candidates: non-deductible expense categories, entertainment and donations, commercial-vs-tax depreciation gaps, and income already subject to final PPh that must come out of fiscal profit. Preparer confirms or overrides each one.
- **Key-in companion** — a clean, ordered, copy-ready worksheet matching Coretax's on-screen field order, so entry is a top-to-bottom pass with no scrolling between two windows. (Plus a browser helper that fills the fields where DJP's interface permits it.)
- **Client memory** — once you've mapped a client's COA, next year's filing is one click. Year two is where the product stops being a utility and starts being a habit.
- **Review trail** — every mapping decision, override and reconciliation is logged with a timestamp, so a partner can review a junior's work and the firm has something to show if the return is later examined.
- **Bahasa Indonesia throughout** — account names, guidance, and support. Not a translated US product.

## 6. AI angle — what's load-bearing

Remove the AI and this becomes a mapping spreadsheet somebody has to configure per client — which is roughly what a diligent firm already maintains, and why they haven't bought anything.

The AI is doing three jobs that are genuinely hard to hand-code:

1. **Semantic account matching.** Indonesian SMB charts of accounts are idiosyncratic and inconsistently named — "B. Gaji & Upah", "Beban Pegawai", "Salary Expense", "By. Karyawan" all mean the same thing and none of them string-match a Coretax account label. A model that understands accounting semantics in Bahasa Indonesia and English does this in one pass; a rules engine needs a dictionary that never stops growing.
2. **Sector classification and structural fit.** Deciding that a client is L1-C (Trade) rather than L1-A (General), then reshaping their COA into that sector's tree — including recognizing that a manufacturing client's COGS build-up needs opening inventory, purchases and closing inventory broken out, per Coretax's calculation structure.
3. **Fiscal adjustment triage.** Reading account descriptions and flagging what's likely non-deductible or already final-taxed. This is judgment work with a stable rulebook — the ideal shape for a model that proposes and a human that confirms.

The product never files anything autonomously and never asserts a tax position on its own. It proposes, explains, and ties out; the preparer signs. That's both the right liability posture and, honestly, the only version a licensed consultant would ever use.

## 7. Localization angle

This is localization all the way down — the product cannot exist outside Indonesia. The L1 sector formats, the account codes, the koreksi fiskal rules, and Coretax's field order are DJP-specific. Bahasa Indonesia is the working language, not a translation layer.

Pricing has to be Indonesian too. Kledo starts at Rp 89,000/month with a free micro tier; Mekari Jurnal's Essentials sits around Rp 399,000/month. A tool priced at $49/month reads as expensive against those anchors, so the tiers are set in rupiah and the entry point has to be under Rp 300K. Payment rails: QRIS and bank transfer (BCA/Mandiri VA) before cards — a lot of small KJA firms simply don't put a company card into a SaaS checkout.

Distribution is local too: the professional conversation happens in WhatsApp groups, IKPI chapter meetings, Ortax's forum, and Telegram channels like FAQ Coretax — not on Twitter and not on Product Hunt.

## 8. Business model — path to $1M–$5M ARR

**Pricing** (rupiah, annual-commit discount):
- **Solo** — Rp 249,000/month, up to 15 corporate clients. Aimed at the freelance preparer.
- **Kantor** — Rp 749,000/month, up to 60 clients, multi-user with review trail. The core tier.
- **Firma** — Rp 1,990,000/month, unlimited clients, team seats, priority support during filing season.
- **Per-return credit** — Rp 75,000 per one-off L1 for in-house finance staff who file once a year. This is the on-ramp, not the business.

**ACV:** ~Rp 7.2M (~$440) blended, assuming most paying accounts land on Kantor.

**Rough math to $1M ARR:** ~Rp 16.5 billion. At blended Rp 7.2M ACV that's roughly 2,300 paying firms — about 10–15% of the serviceable preparer population. Ambitious but not fantasy for a category with no competitor.

**Rough math to $5M ARR:** Requires going past the preparer channel into direct-to-filer, which means self-serve for the 1.1M corporate filers at the Rp 75K–249K end, plus adjacent Coretax pain (SPT Masa PPN reconciliation, bukti potong matching, e-Faktur tie-outs). Realistically a 4–5 year story and probably needs a small sales team. I'd plan the business at $1–2M and treat $5M as upside.

**Expansion path:** Client-count tiers expand naturally as firms grow their book — which PP 20/2026 is actively causing. Then adjacent filings: the monthly PPN return is the obvious second product, and it converts the business from seasonal to recurring-usage.

**The seasonality problem, stated honestly:** this is a once-a-year workflow with a brutal peak from February to May. Annual contracts are mandatory, not optional — monthly billing invites subscribe-in-March-cancel-in-June behavior. The monthly-filing product line is the real fix, and it needs to ship by year two.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the registries, then send proof.** IAI publishes a searchable KJA directory (kja.iaiglobal.or.id) and Kemenkeu runs SIKoP (sikop.kemenkeu.go.id) for registered consultants. That's a named, public list of several thousand exact-fit buyers with firm names and cities. Send each one a 90-second Loom in Bahasa Indonesia: a real messy trial balance dropped in, mapped, tied out, done — the whole video shorter than the task it replaces. Expect 4–8% reply rate on a demo that specific.
- **Answer the question where it's being asked.** Ortax's forum, the FAQ Coretax Telegram channel, and konsultan-pajak WhatsApp groups are full of L1 mapping and balance-not-tying questions right now. Answer them properly — actual mapping guidance, no pitch — for six weeks before mentioning the product. This channel converts slowly and then all at once, and it doubles as free requirements gathering.
- **Free public mapping table as the SEO asset.** Publish the definitive COA-to-Coretax-L1 mapping reference for the four SMB sectors (A/B/C/D), free and ungated. Every preparer searching "mapping COA Coretax L1" lands on it. That query has intent you cannot buy.
- **Ride the seasonal panic with a per-return offer.** In February, run a "first three returns free" campaign. A preparer with a wall of deadlines will try anything that saves an evening, and the client-memory feature means the second season's switching cost is already built.
- **Partner with the bookkeeping-service shops.** Firms like the outsourced-pembukuan providers already serve exactly this client base and hit the same wall. Ten of them reselling to their client list beats a hundred cold emails.

## 10. Build complexity — justification

**Low.** File parsing (Excel/CSV/PDF), an LLM mapping layer over a fixed account taxonomy, arithmetic validation, and a worksheet UI. No integrations required for v1 — the trial balance arrives as a file, which is how preparers already move data. The genuinely hard input isn't engineering, it's building an accurate Coretax L1 account taxonomy for the four SMB-relevant sectors and getting the fiscal adjustment rules right; that's domain work best bought by paying a practicing consultant for a few weeks of their time.

A technical founder with a tax-consultant advisor ships a credible v1 in 6–8 weeks. The browser-assist component is nice-to-have and should not block launch.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Preparation aid only. Doesn't file on the taxpayer's behalf, doesn't touch DJP credentials, doesn't require a tax-consultant license to sell. |
| Ethical — no harm / dark patterns | ✅ | Reduces filing errors. Human confirms every position. No autonomous tax advice. |
| Market exists (evidence above) | ✅ | 1.1M corporate filings, mandatory annual workflow, no import path, deadline extended under load. |
| 1–5 person team can build this | ✅ | One engineer plus a domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Well under — inference costs and a domain consultant are the only real line items. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Sharp, expensive, deadline-enforced pain — but felt intensely for ~3 months a year, not daily. That seasonality is the only thing keeping it out of the 17+ band. |
| Demand evidence | 15 | 12/15 | Strong documentary evidence: no import menu, XBRL-only prepopulation, extended deadline with waived penalties, PP 20/2026 expanding the filer base. Docked for thin *verbatim* practitioner complaint — I found the structural evidence, not a wall of first-person quotes. |
| Build feasibility | 15 | 13/15 | Off-the-shelf stack, no integrations needed for v1, 6–8 weeks. Taxonomy accuracy is the only real work. |
| Distribution clarity | 15 | 12/15 | Named public directories (IAI KJA, SIKoP), known forums, obvious SEO wedge. Docked because cold-email conversion in this market is unproven and the community channels are slow-burn. |
| Revenue mechanics | 15 | 11/15 | Rupiah pricing benchmarked against Kledo and Mekari. $1M ARR needs ~2,300 firms, which is a real slog, and seasonality threatens retention until the monthly product ships. |
| Time to first revenue | 8 | 8/10 | Pre-sellable during build, but the buying urgency peaks Feb–May. Launch timing matters more than usual here — ship by January. |
| Defensibility | 10 | 4/10 | Honestly weak. Accurate or Mekari could ship an L1 export for their own users; DJP could add an import menu and vaporize the core value overnight. The moat is client-mapping memory, review trails, and being vendor-agnostic — a head start, not a wall. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need an engineer who can ship fast and a practicing Indonesian tax consultant close enough to correct the taxonomy weekly. Without the second person this becomes a plausible-looking tool that produces subtly wrong returns, which in this market kills you on the first bad word-of-mouth.

### Key assumptions to validate (3–5)

1. **Assumption:** L1 preparation genuinely costs 45+ minutes per client and preparers can name the number. **How to test:** 20 structured interviews with consultants from the IAI KJA directory. Ask them to time their last three L1s from memory. If the median is under 20 minutes, the willingness-to-pay collapses.
2. **Assumption:** A model maps a real Indonesian SMB COA to the correct L1 accounts at ≥90% line accuracy on first pass. **How to test:** Collect 15 anonymized real trial balances, build the taxonomy, measure against a consultant's manual mapping. Below 90%, review burden eats the time savings and the product is pointless.
3. **Assumption:** Preparers will pay Rp 749K/month for a seasonal tool. **How to test:** Pre-sell annual licenses at a 40% launch discount before v1 ships. Ten paid commitments from cold outreach is the signal.
4. **Assumption:** DJP won't ship a general import menu within 18 months. **How to test:** Can't be tested — monitor DJP release notes and Coretaxpedia monthly. Mitigate by building toward the client-memory and multi-filing layer rather than the one-time conversion.

### Risk flags

1. **Platform dependency (severe):** The entire product exists because Coretax lacks an import path. DJP adding one — or extending prepopulation beyond XBRL filers — removes most of the value. Prepopulation already exists for XBRL; extending it is a roadmap item, not a research problem. This is the single biggest risk and it's not hypothetical.
2. **Incumbent adjacency:** Mekari (raised $71M total, $50M led by Money Forward) and Accurate own the accounting layer and the customer relationship. If any of them ships "Export to Coretax L1," they take their own installed base instantly. The counter is being the only tool that works across *all* of them, which matters to preparers and not at all to the vendors.
3. **Seasonality:** A Feb–May product with an eight-month trough. Annual contracts and a monthly-filing second product are not optional extras — they're survival.
4. **Accuracy liability:** A wrong mapping surfacing in a DJP examination is reputational poison in a profession that talks to itself constantly. The review trail and human-confirmation design mitigate this, but the messaging must never promise correctness — only speed and a tie-out.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Indonesian technical founder (or a founder with a Jakarta-based
                        co-founder) paired with a practicing konsultan pajak as domain advisor.
                        Bahasa Indonesia fluency is non-negotiable for both product and GTM.
Time to revenue:        6–10 weeks to first paid (pre-sell during build); revenue concentrates Feb–May.
Capital to launch:      $6–10K (Rp 100–165 juta) — mostly the domain advisor's time and inference.
Top 3 assumptions to validate first:
  1. L1 prep takes 45+ min/client today — 20 interviews from the IAI KJA directory
  2. LLM mapping hits ≥90% line accuracy — benchmark against 15 real anonymized trial balances
  3. Preparers pay Rp 749K/mo — pre-sell 10 annual licenses at launch discount before building
Kill criteria:
  - Abandon if DJP announces a general L1 import or non-XBRL prepopulation before v1 ships
  - Abandon if mapping accuracy stays below 85% after taxonomy work on 15 real trial balances
  - Abandon if <10 of 20 interviewed consultants report L1 prep exceeding 30 minutes per client
  - Abandon if fewer than 5 of 100 cold-emailed firms reply to a working demo video
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the IAI KJA directory and SIKoP consultant list. Build a clean list of 150 firms with contact details. Simultaneously, get 5 real anonymized SMB trial balances — from an advisor, from an outsourced-bookkeeping shop, from anywhere.
- **Day 3–4:** Hand-build the L1-A, L1-C and L1-D account taxonomies from DJP's published materials. Run the 5 trial balances through a raw prompted mapping — no product, just a prompt and a spreadsheet. Score line-level accuracy against a consultant's manual mapping. This is the make-or-break technical test and it costs one day.
- **Day 5:** Record the mapping run as a 90-second screen capture in Bahasa Indonesia. Send to 100 firms from the list with one question: "what does this take you today, and would you pay Rp 749K/month for it in filing season?"
- **Decide go / no-go on:** mapping accuracy ≥90% on the 5 test balances **and** ≥8 replies from 100 emails **and** ≥5 of those replies naming a per-client time cost above 30 minutes. Miss any of the three and the idea doesn't have the legs the score implies.
