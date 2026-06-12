---
title: "FakturMatch — input-VAT reconciler for Indonesia PKP firms"
slug: indonesia-coretax-input-vat-reconciliation
date: 2026-06-12
category: Compliance / Indonesia PKP SMBs & Tax Consultants (Coretax-era VAT)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Matches your purchases against suppliers' Coretax faktur and chases the gaps so you claw back every rupiah of input VAT."
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [Indonesia, Coretax, VAT-reconciliation, Tax-consultant, AI-agent, SMB]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# FakturMatch

## 1. One-liner

Matches your purchases against suppliers' Coretax faktur and chases the gaps so Indonesian PKP businesses claw back every rupiah of input VAT.

## 2. Trend signal — why now?

Indonesia forced every VAT-registered business (PKP) onto **Coretax**, the rebuilt national tax platform, from January 2025. 2026 is the first *full* filing year run entirely on it — and it broke the one workflow that costs PKPs real money: claiming input VAT (*pajak masukan*).

Under the old e-Faktur desktop app, your creditable input invoices were predictable. Under Coretax, a buyer's input faktur only appears once the **supplier** signs and successfully uploads it — and that pipeline is leaking everywhere. DJP's own list documents 22–34 recurring complaint categories; the April–May 2026 filing season produced a fresh wave of "approved but not appearing," "Saved Invalid," and NIK/NPWP-mismatch rejections. DJP issued a public apology. The concrete consequence: if your supplier's faktur isn't visible in *your* Coretax by filing time, you cannot credit that input VAT — you overpay, every month.

The current "solution" being passed around the konsultan community is **a manual Excel spreadsheet** with conditional-formatting that turns mismatched rows red (diskusipajak.com publishes the template). That is the incumbent. The only "tools" that exist are dumb XML converters (CoretaxConverter, ACIS's Accurate add-on) that push data *into* Coretax — none of them reconcile what's missing or chase the supplier to fix it.

Provenance:
  - Signal 1 (Demand): "Pajak masukan tidak muncul di Coretax" — input VAT not appearing because supplier entered wrong buyer NPWP/NIK or upload was rejected; buyer must chase supplier to credit it. — https://news.ddtc.co.id/review/konsultasi-coretax/1810134/faktur-pajak-masukan-tidak-muncul-di-coretax-wp-op-apa-solusinya — 2026
  - Signal 2 (Feasibility): Coretax exposes input-tax lists in real-time once the seller signs, and DJP officially sanctions third-party/PJAP data channels and 31 free Excel↔XML converter templates — so a tool can pull and match faktur data programmatically. — https://www.diskusipajak.com/bagaimana-format-spreadsheet-rekonsiliasi-faktur-pajak-untuk-coretax/ — 2026
  - Signal 3 (Economic): Tax consultants already bill ~Rp1,000,000/mo per PKP client for monthly VAT service, and local accounting SaaS (Mekari Jurnal) sells at Rp399k–1.17M/mo — recurring spend is already flowing into exactly this job. — https://bantupengusaha.id/layanan-pajak-bulanan-umkm/ — 2026
  Category: Workflow automation

## 3. The opportunity

The pain is **input-VAT reconciliation and recovery**, not invoice creation. Every month a PKP (or its konsultan) must prove that each purchase it wants to deduct matches a faktur the *supplier actually issued and got approved* inside Coretax. Post-migration, a meaningful share of those don't match — wrong NPWP/NIK on the supplier's side, unuploaded faktur, rejected uploads, DPP/PPN amount differences. Every unmatched faktur is input VAT you can't credit = cash overpaid to the state, or audit exposure if you over-claim.

Incumbents are in the wrong place. Mekari Jurnal and Accurate sell whole accounting/ERP suites — reconciliation is a manual step the human still does in Excel. The converter tools only move data *in*. **Nobody sells a focused reconcile-and-chase engine.** The new Coretax rule that lets you credit input VAT up to **3 tax periods later** actually makes systematic monthly chasing *worth doing* — you now have a recovery window, but only if something is tracking the gaps. That's the wedge a 1–3 person AI-first team takes before a suite vendor bothers.

## 4. Target market

- **Primary customer:** Indonesian **tax consultants / accounting offices** (KKP and bookkeeping firms) that each service 10–50 PKP clients. Secondary: in-house finance/tax staff at individual PKP companies (manufacturing, trading, distribution; 5–50 staff; turnover above the Rp4.8B PKP threshold).
- **Why they buy (their words):** "Faktur pajak masukan tidak muncul" / "approved tapi tidak muncul" — they spend filing week exporting Coretax lists, eyeballing them against purchase records in Excel, and WhatsApping suppliers "tolong approve/perbaiki fakturnya." It's manual, monthly, and the cost of missing one is real rupiah.
- **Rough TAM:** Only ~7,390 registered tax consultants in Indonesia (end-2024) for a base of millions of WP and 60M+ UMKM — they are chronically time-starved, the ideal buyer for capacity-multiplying automation. The PKP universe (turnover >Rp4.8B) is in the hundreds of thousands. Even 2,000 paying seats at Rp750k/mo is ~$1.1M ARR.
- **Why now for them:** 2026 is the first full year of monthly PPN filing entirely on Coretax. The manual workaround that worked for one client doesn't scale across a 30-client book — and the breakage is brand new (12–18 months old).

## 5. Product sketch (MVP)

- Import your **purchase ledger** (Excel/CSV from any accounting system) and your **Coretax input-faktur list** (export or, later, PJAP pull).
- **Auto-match** each purchase line to the supplier-issued faktur on amount, NPWP/NIK, period, and DPP/PPN.
- **Gap board:** every unmatched or mismatched faktur, classified — *missing/not uploaded, unapproved, rejected, wrong buyer NPWP/NIK, DPP/PPN mismatch, outside crediting window.*
- **AI-drafted supplier chase-up** in Bahasa Indonesia (WhatsApp/email), per gap type — "Faktur no. X belum muncul di Coretax kami, mohon dicek/di-approve sebelum [tanggal]."
- **Crediting-window tracker:** counts down the 3-period window per faktur so nothing expires unclaimed.
- **Multi-client workspace** for konsultan: one dashboard across their whole PKP book, with per-client filing-readiness status.
- **Pre-filing summary:** total creditable input VAT secured vs. at-risk this period, exportable for the SPT Masa PPN.

## 6. AI angle — what's load-bearing

Two places. First, **fuzzy matching**: supplier names, NPWP/NIK formatting, and amount rounding never line up cleanly between a buyer's ledger and Coretax's export — deterministic joins miss; an LLM/embedding matcher resolves "PT Maju Jaya" vs "MAJU JAYA, PT" and flags the genuinely-different from the merely-formatted-differently. Second, the **chase-up drafting**: each gap type needs a different, polite, correct Bahasa request to the right party, generated at volume. Remove the AI and you're back to the Excel-and-eyeball workaround — which is exactly the thing customers are paying konsultan Rp1M/mo to do by hand. The AI *is* the labor replacement.

## 7. Localization angle

This is localization as the entire product. It only exists because of Coretax's specific data model, Indonesia's NPWP/NIK identity rules, the 11/12 effective-rate DPP quirk, the 3-period crediting window, and Bahasa Indonesia supplier communication. A generic global "VAT reconciliation" tool cannot touch it. Pricing is rupiah-native (Rp499k–999k/mo tiers work where a $49 tool reads as expensive). Distribution is WhatsApp- and konsultan-community-led. Nothing here ports; everything here is the moat-by-locality.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Konsultan tier **Rp999k/mo** (up to ~25 client workspaces); solo-PKP tier **Rp499k/mo** (single entity). Usage add-on above included client count.
- **ACV:** ~Rp9–12M/year (~$580–750) blended.
- **To $1M ARR:** ~2,200 paying seats at ~Rp750k/mo blended × 12 ≈ Rp19.8B ≈ $1.2M. Reachable mostly through konsultan firms (each firm = one paying account covering many PKPs).
- **To $5M ARR:** ~9,000 seats, or fewer if konsultan firms move to per-client pricing as they scale their books — plus an output-VAT/full-PPN-close upsell. Requires being the default reconciliation layer for a few hundred KKPs.
- **Expansion path:** start with input-VAT gaps → add output-VAT reconciliation → full SPT Masa PPN close → per-client seat expansion inside each konsultan firm as their book grows.

## 9. Go-to-market wedge — first 100 customers

- **Konsultan WhatsApp/Telegram groups & forums.** The pain is being discussed *right now* on Ortax, DDTC konsultasi, and konsultan Telegram/FB groups (sourced threads above). Show up where "pajak masukan tidak muncul" is being asked and post a 90-second Loom of FakturMatch resolving exactly that. Warm, self-selecting audience.
- **The 7,390 registered konsultan are a finite, listed directory** (konsultan.pajak.go.id / sikop.kemenkeu.go.id). Scrape it, segment firms with 10+ clients, send a personalized before/after of their own filing-week workflow. Tiny universe = direct outreach is tractable.
- **IKPI (tax consultants' association) chapters & webinars.** Sponsor/present a "close your PPN in 30 minutes" session to chapter members during filing season. One good webinar = dozens of warm firms.
- **Free "Coretax input-VAT gap check"** lead magnet: upload your export, get a one-page report of how much creditable input VAT you're about to miss. Converts the anxiety directly into a trial.

## 10. Build complexity — justification

Medium. Off-the-shelf: web stack, file parsing, LLM matching + drafting via standard APIs, WhatsApp Business API. Custom work is in (a) the Coretax data model and export formats, which shift as DJP patches the system, and (b) the matching ruleset for NPWP/NIK/DPP edge cases. v1 is file-import based — no integration approval needed — so a 2-person team ships in ~10–14 weeks. A later PJAP/API pull is a v2 upgrade, not a launch blocker.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reconciliation tooling; uses customer's own tax data; file-import v1 needs no DJP authorization. |
| Ethical — no harm / dark patterns | ✅ | Helps WPs claim VAT they're legally owed and file accurately. |
| Market exists (evidence above) | ✅ | Active 2026 complaints, manual-Excel workaround, Rp1M/mo paid alternative. |
| 1–5 person team can build this | ✅ | Medium complexity, ~10–14 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Solo/pair build, API + WhatsApp costs only. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Monthly, money-losing (uncredited VAT), audit-relevant. Not daily, and the 3-period window softens urgency slightly. |
| Demand evidence | 15 | 12/15 | Multiple independent 2026 complaint sources, a published manual workaround, and a paid Rp1M/mo alternative. Direct "would you pay" still unproven. |
| Build feasibility | 15 | 11/15 | Off-the-shelf stack, but Coretax export quirks and matching edge-cases need care; DJP changes the system under you. |
| Distribution clarity | 15 | 11/15 | Finite, listed konsultan directory + active forums = warm, named channel. Conversion math still a guess. |
| Revenue mechanics | 15 | 12/15 | Rupiah-native pricing benchmarked to existing Rp1M/mo spend; konsultan-as-buyer multiplies seats. |
| Time to first revenue | 10 | 7/10 | Filing-season urgency + free gap-check lead magnet → paid in ~6–8 weeks of launch. |
| Defensibility | 10 | 5/10 | Execution + accumulating matching ruleset + konsultan workflow lock-in. A suite vendor could bolt this on — beat them on focus and a head start. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy` — needs someone who genuinely understands Indonesian PPN mechanics (or a konsultan co-founder/advisor) plus a builder comfortable with LLM matching pipelines.

### Key assumptions to validate (3–5)

1. **Assumption:** Konsultan firms will pay Rp999k/mo to automate input-VAT reconciliation across their book. **How to test:** 20 in-person/WhatsApp interviews with KKP firms during the June–July filing window; pre-sell 5 at a discount.
2. **Assumption:** Coretax exports contain enough structured input-faktur data to match against reliably. **How to test:** Get 5 real anonymized export files; measure auto-match rate and false-mismatch rate.
3. **Assumption:** Suppliers actually respond to AI-drafted chase-ups often enough to recover meaningful VAT. **How to test:** Run 50 real chase-ups for pilot clients; measure fix-and-reupload rate within the period.
4. **Assumption:** DJP won't ship its own one-click reconciliation that kills the wedge. **How to test:** Track DJP/Coretax roadmap and konsultan chatter; gauge how far behind the official tooling lags.

### Risk flags

1. **Platform dependency:** Entirely tied to Coretax data formats and DJP behavior — a major Coretax update can break the importer or, worse, fix the underlying pain. Mitigate by owning the konsultan relationship and expanding to full PPN close.
2. **Market timing:** If DJP stabilizes Coretax fast, the acute "missing faktur" pain eases — though reconciliation-as-a-discipline persists regardless of bugs.
3. **Regulatory/data:** Handling clients' tax data demands real security and trust; a breach in this category is fatal to reputation.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + Indonesian tax-consultant co-founder/advisor
Time to revenue:        6–10 weeks (filing-season-driven)
Capital to launch:      ₹3–6 lakh / $4–7K
Top 3 assumptions to validate first:
  1. Konsultan WTP at Rp999k/mo — 20 firm interviews + 5 pre-sells in the June–July window
  2. Auto-match reliability on real Coretax exports — measure on 5 anonymized files
  3. Chase-up response rate — run 50 real supplier follow-ups, measure same-period fixes
Kill criteria:
  - Abandon if <5 of 20 konsultan firms show buying intent after a live demo
  - Abandon if auto-match accuracy on real exports stays below ~85% after tuning
  - Abandon if DJP ships native input-VAT reconciliation before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the konsultan directory + the live Ortax/DDTC/Telegram threads on "pajak masukan tidak muncul." Build a 30-firm shortlist and a 90-second Loom of the gap-board concept.
- **Day 3–4:** Run 15–20 calls/WhatsApp demos with konsultan and PKP finance staff. Ask for one real anonymized Coretax export; test how cleanly a prototype matcher reconciles it.
- **Day 5:** Decide go / no-go. **Falsifiable bar:** ≥5 firms verbally commit to a paid pilot AND the prototype auto-matches ≥85% of lines on at least one real export. Miss either and it's a no-go or a rework.
