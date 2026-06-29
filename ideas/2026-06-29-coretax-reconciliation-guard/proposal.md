---
title: "FiskaMatch — Coretax reconciliation guard for Indonesian firms"
slug: coretax-reconciliation-guard
date: 2026-06-29
category: FinTech / Indonesia Tax-Consultant & Bookkeeping Firms (KKP, 2–20 staff)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Flags every books-vs-Coretax mismatch before an Indonesian firm files, so a client's risk class never gets locked wrong."
tags:
  vertical: FinTech
  model: SaaS
  geography: SEA
  secondary: [Compliance-driven, Multilingual, AI-agent, SMB, Bahasa-Indonesia]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# FiskaMatch — Coretax reconciliation guard for Indonesian tax-filing firms

## 1. One-liner

Flags every books-vs-Coretax mismatch before an Indonesian firm files, so a client's risk class never gets locked wrong.

## 2. Trend signal — why now?

On 31 December 2025 Indonesia retired the old e-Faktur portal and made **Coretax** mandatory for all VAT-registered businesses and all 2026 corporate filings. Coretax is a "single source of truth" with **prepopulated returns** and a per-taxpayer **Compliance Risk Management (CRM) risk classification** baked in. Two things broke at once for the people who file taxes for a living:

1. **Coretax does NOT reconcile commercial books against fiscal data.** Its own auto-reconciliation only matches output-faktur to input-faktur *between Coretax users*. It does nothing to match a client's actual bookkeeping (Jurnal/Accurate/Excel) against the prepopulated VAT and withholding figures the system pushes into the return. The official Indonesian Tax Consultants Association (IKPI) and practitioners have publicly flagged the **"absence of automatic reconciliation between commercial and fiscal reports"** as a core gap, alongside prepopulated data that "don't always appear or don't match actual payment values."

2. **Mismatches are now irreversible once filed.** Errors in monthly VAT/withholding carry through to the annual return, and filing without pre-submission reconciliation can lock a taxpayer's CRM risk classification "in place — a position that cannot be reversed after submission." A wrong risk class = audit magnet for the client, and a reputation hit for the firm that filed it.

The 2026 SPT season is the **first full annual cycle under Coretax**. Firms are doing the books-vs-fiscal cross-check by hand, in Excel, per client, every month. Indonesia's accounting-software market is $143.9M (2023) → projected $395.4M by 2031 (12.6% CAGR), and Mekari Jurnal alone serves 20,000+ businesses — but those are whole-company accounting subscriptions sold to *end SMEs*, not a thin reconciliation layer for the *firms* filing on behalf of dozens of clients.

Provenance:
  - Signal 1 (demand): IKPI practitioners + DataOn cite "absence of automatic reconciliation between commercial and fiscal reports" and prepopulated data that "don't match actual payment values" — https://ikpi.or.id/sejumlah-masukan-mengemuka-praktisi-ikpi-soroti-implementasi-coretax-saat-lapor-spt/ — 2026
  - Signal 2 (feasibility): Coretax fully mandatory 31 Dec 2025; "automated data bridging is the only way to ensure 100% accuracy"; cheap multilingual OCR/LLM now handles messy Bahasa invoices & bank statements — https://livenworkindonesia.com/tax-accountancy/the-indonesia-coretax-system-2026-a-definitive-guide-to-the-new-era-of-business-reporting/ — 2026
  - Signal 3 (economic): Indonesia accounting-software market $143.9M→$395.4M by 2031, 12.6% CAGR; Mekari Jurnal 20,000+ businesses; entire konsultan-pajak/BPO industry re-tooling for Coretax — https://www.marketsandata.com/industry-reports/indonesia-accounting-software-market — 2025
  Category: Geographic arbitrage

## 3. The opportunity

Coretax assumes the data flowing into it is already correct. It isn't. The gap between a client's *commercial* books and the *fiscal* numbers Coretax prepopulates is where penalties, denied input-VAT credits, and bad risk classifications are born — and Coretax provides no tool to close that gap before you file.

The incumbents miss it from both ends. **Mekari Jurnal / Accurate / Kledo** sell full accounting subscriptions to a single SME; they help you keep books, not reconcile those books against Coretax's prepopulated return across a portfolio of clients. **DJP-mitra middleware (PajakExpress, Klikpajak)** focuses on issuing faktur and bulk-uploading to Coretax — pushing data *in*, not catching what won't reconcile *before* it goes in. Nobody sells the thing a 6-person konsultan-pajak firm actually needs at 11pm before the SPT deadline: a screen that says "Client #34: input-VAT in your books is Rp 12.4M, Coretax prepop shows Rp 9.1M, here are the 7 faktur causing the gap — fix before you file or the risk class locks."

That's a focused, AI-first wedge an incumbent won't prioritize because it cannibalizes nothing and serves a buyer (the firm) they treat as a channel, not a customer.

## 4. Target market

- **Primary customer:** Small Indonesian tax-consultant / bookkeeping firms — *Kantor Konsultan Pajak* (KKP) and outsourced-accounting shops, 2–20 staff, each managing 20–150 SME clients. Decision-maker is the partner/owner or the senior tax preparer.
- **Secondary customer:** PKP (VAT-registered) SMEs with Rp 5–50B revenue and one in-house finance person who files directly.
- **Why they buy (their words):** "Coretax has no automatic reconciliation between commercial and fiscal reports"; "prepopulated data doesn't match actual payment values"; "we re-input everything from the start when it fails." They are doing per-client Excel reconciliation monthly and they are terrified of locking a client's risk class wrong.
- **Rough TAM reasoning:** Indonesia has thousands of registered konsultan pajak and a large unregistered bookkeeping-shop long tail. Even 3,000 small firms × Rp 1.5M/mo average ≈ Rp 54B/yr (~$3.4M) of addressable spend from firms *alone*, before the direct-SME tier. The accounting-software market growing 12.6% CAGR is the macro tailwind.
- **Why now for them:** First full annual SPT season under Coretax (2026). The pain is monthly and the deadline is a recurring cliff.

## 5. Product sketch (MVP)

- **Pull two sides:** import a client's commercial books (CSV/Excel export from Jurnal, Accurate, Kledo, or raw spreadsheet) and their Coretax data (faktur list, prepopulated VAT/withholding figures via export).
- **Mismatch radar:** line-by-line diff of input-VAT, output-VAT, and withholding (PPh) between books and Coretax, ranked by rupiah impact.
- **Root-cause hints:** for each gap, name the likely cause — missing faktur, NIK/NPWP mismatch, timing difference, un-credited input VAT, third-party bukti potong that didn't integrate.
- **Pre-file checklist:** a go/no-go screen per client per tax period — "clean to file" vs "N unresolved mismatches" — so nothing gets filed blind.
- **Multi-client dashboard:** the firm sees all clients and which ones are deadline-at-risk this period (the one view Coretax and Jurnal don't give a firm).
- **Messy-document intake:** OCR + AI extraction of scanned faktur, bank statements, and bukti potong in Bahasa Indonesia, so reconciliation works even when the books are half-spreadsheet.
- **Amendment trail:** log of what was flagged and fixed, ready to justify the figures if DJP queries them later.

## 6. AI angle — what's load-bearing

Two places AI does the actual work, not decoration:

1. **Extraction & normalization.** Indonesian SME source documents are messy — scanned faktur, photographed bank statements, bukti potong from third parties, books kept in inconsistent Excel. AI vision/LLM extraction turns that into structured, comparable line items. Without it, "import your books" is a manual data-entry slog and the product dies.
2. **Mismatch reasoning.** A naive numeric diff finds *that* Rp 9.1M ≠ Rp 12.4M. The value is explaining *why* — mapping a gap to "these 3 faktur have a NIK that doesn't match, this bukti potong never integrated, this input VAT is in the wrong period." That classification across noisy, partial data is an LLM job. Remove the AI and you're left with a spreadsheet macro — which is exactly what firms already hate doing.

## 7. Localization angle

This **is** the localization play — it cannot exist as a generic global product. It is welded to Coretax's exact data formats, Indonesia's faktur pajak / bukti potong / SPT Masa structures, the CRM risk-classification mechanic, NIK/NPWP identity rules, and Bahasa Indonesia documents. Pricing in rupiah (Rp 500K–2.5M/mo) works where a $49–199 global SaaS price would feel both wrong and untranslated. Distribution runs through Indonesian channels — IKPI chapters, konsultan-pajak WhatsApp/Telegram groups (the FAQ Coretax Telegram is already a real gathering place), and local accounting influencers. A global incumbent has no reason to build this depth for one country's brand-new tax engine.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by client count. Firm Starter Rp 500K/mo (up to 15 clients), Firm Pro Rp 1.5M/mo (up to 60 clients), Firm Scale Rp 2.5M/mo (unlimited). Direct-SME solo tier Rp 199K/mo.
- **ACV:** ~Rp 18M/yr (~$1,100) blended across firm tiers; the firm tier is where the money is.
- **Math to $1M ARR (~Rp 16B):** ~900 firms on a Rp 1.5M/mo average = Rp 16.2B/yr. Reachable: that's a single-digit fraction of Indonesia's small-firm population.
- **Math to $5M ARR:** ~3,000–3,500 paying firms plus a direct-SME long tail, or layer in per-client usage upsells (extra document-extraction volume, multi-entity groups). Requires being the default reconciliation layer in the konsultan-pajak community, not just a tool.
- **Expansion path:** seats and client-count tiers grow with the firm's book of business; upsell document-extraction volume, a year-round PPh withholding reconciliation module, and an "audit-ready figures" export. ACV climbs as firms move clients onto the platform.

## 9. Go-to-market wedge — first 100 customers

- **IKPI + regional chapter route.** The Indonesian Tax Consultants Association is publicly complaining about exactly this gap. Attend/sponsor a chapter event, run a "reconcile-your-worst-client-live" workshop, sign firms in the room. The association *named the pain* — meet them at it.
- **Konsultan-pajak Telegram/WhatsApp groups.** Coretax has spawned active practitioner groups (e.g. the FAQ Coretax Telegram channel). Drop a genuinely useful "here are the 12 most common Coretax mismatch causes + a free single-client check" lead magnet, convert to trial.
- **Cold-DM the complainers.** Scrape practitioners publicly posting Coretax reconciliation pain on LinkedIn, X, and DDTC/Pajakku comment threads; offer a free reconciliation of one real client's current period. The "I'll show you 3 mismatches you're about to file" demo closes itself.
- **Accounting-software referral seam.** Jurnal/Accurate/Kledo users export easily; build the importers first and post in *their* user communities ("reconcile your Jurnal books against Coretax before you file").
- **Local accounting/tax YouTubers & Instagram educators** (there's a large Bahasa tax-education creator base) — sponsored "Coretax mismatch" explainer with a trial code.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: web stack, AI vision/LLM for extraction and mismatch classification, standard CSV/Excel importers for the 3–4 dominant accounting tools. Custom work is the gnarly part — modeling Coretax's data structures, faktur/bukti-potong/SPT-Masa formats, and the reconciliation logic correctly enough that firms trust the go/no-go call. That's integration-and-domain depth, not a research breakthrough. A 2–3 person team with one genuine Indonesian tax-domain person ships a credible v1 in ~3–4 months (start with one accounting-tool importer + VAT reconciliation, add withholding and more importers after).

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | A reconciliation/advisory tool; the firm still files. No DJP licensing needed to *check* data. |
| Ethical — no harm / dark patterns | ✅ | Reduces filing errors and unjust risk classifications. Pro-compliance. |
| Market exists (evidence above) | ✅ | IKPI + practitioners publicly name the gap; whole industry forced onto Coretax. |
| 1–5 person team can build this | ✅ | 2–3 people, ~3–4 months to v1. |
| Launchable with <$50K / ₹40L | ✅ | AI inference + hosting + one domain hire's time. Well under cap. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Monthly, money-and-audit-stakes, irreversible-on-filing. Hair-on-fire during SPT deadlines; slightly less so off-cycle. |
| Demand evidence | 15 | 12/15 | Official association names the exact gap; active practitioner complaints. Strong, though not yet someone charging specifically for this slice. |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI + importers, but real domain modeling of Coretax formats and reconciliation logic. |
| Distribution clarity | 15 | 12/15 | Concentrated, reachable buyer (IKPI, Telegram groups, named complainers). Conversion math credible. |
| Revenue mechanics | 15 | 12/15 | Rupiah pricing fits; firm tier gives healthy ACV; $1M needs ~900 firms — plausible. |
| Time to first revenue | 10 | 7/10 | Firms feel pain now; trial-to-paid within weeks during a filing period, but build needs ~3–4 mo first. |
| Defensibility | 10 | 4/10 | Moat is Coretax-format depth + firm workflow lock-in + community trust. Copyable by a determined local; head start + domain credibility is the edge, not a patent. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy` — you need someone who genuinely understands Indonesian VAT/withholding reconciliation and Coretax behavior, paired with an engineer who can wrangle messy-document AI extraction.

### Key assumptions to validate (3–5)

1. **Assumption:** Small firms will pay Rp 1.5M/mo for a reconciliation guard on top of accounting software they already buy. **How to test:** 30 paid-pilot offers to konsultan-pajak owners; measure willingness at that price.
2. **Assumption:** Coretax exports + the 3–4 main accounting tools' exports contain enough structured data to reconcile reliably. **How to test:** Run real client data from 10 firms end-to-end; measure % of mismatches correctly identified vs the firm's manual result.
3. **Assumption:** The CRM risk-classification fear is a real purchase driver, not just talk. **How to test:** In discovery calls, ask whether a past wrong-risk-class incident would have justified the price — count concrete stories.
4. **Assumption:** AI extraction is accurate enough on messy Bahasa faktur/bukti potong that firms trust the go/no-go. **How to test:** Blind-grade extraction on 200 real documents against human entry; require >95% line accuracy before firms rely on it.

### Risk flags

1. **Platform dependency:** Built entirely on Coretax data formats; DJP can change exports/APIs with little notice (and Coretax has been unstable). A format change can break ingestion overnight — mitigate with flexible importers and fast turnaround.
2. **Incumbent encroachment:** Jurnal/Accurate or a DJP-mitra (PajakExpress, Klikpajak) could add commercial-vs-fiscal reconciliation as a feature. Window is the head start while they're busy with their core products.
3. **Market timing / "DJP fixes it":** If DJP itself ships native commercial-vs-fiscal reconciliation in Coretax, the core wedge shrinks. Bet: a government tax engine that's currently unstable won't ship this depth soon — but watch it.
4. **Trust threshold:** Firms won't file on a tool's say-so unless extraction accuracy is very high; a few wrong "clean to file" calls kill word-of-mouth in a tight community.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Indonesian tax-domain expert + one AI/full-stack engineer (2–3 people)
Time to revenue:        Build ~3–4 months; first paid firms within weeks of a filing-period launch
Capital to launch:      Rp 250–600 juta ($15–35K)
Top 3 assumptions to validate first:
  1. Firms pay Rp 1.5M/mo on top of existing accounting SaaS — 30 paid-pilot offers
  2. Coretax + accounting-tool exports are rich enough to reconcile reliably — 10-firm end-to-end test
  3. AI extraction hits >95% line accuracy on messy Bahasa documents — blind grade on 200 docs
Kill criteria:
  - Abandon if <10% of 50 konsultan-pajak owners will start a paid pilot
  - Abandon if extraction/reconciliation accuracy can't clear the trust bar firms need to file on it
  - Abandon if DJP ships native commercial-vs-fiscal reconciliation in Coretax before v1 ships
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** List 60 small konsultan-pajak / bookkeeping firms (IKPI member directory + Google Maps + Telegram-group members). Draft a one-line Bahasa pitch built on the exact IKPI quote about missing commercial-vs-fiscal reconciliation.
- **Day 3–4:** Get real (anonymized) client data from 3–5 friendly firms for one tax period. By hand, run the books-vs-Coretax reconciliation and surface the mismatches — prove the gaps are real and material, and that firms didn't already catch them all.
- **Day 5:** Offer a paid pilot (Rp 1.5M/mo) to the 30 most engaged. **Go if ≥4 commit to pay; no-go if <2.** Falsifiable: either firms put money down to close this gap, or the pain is loud but not purchase-grade.
