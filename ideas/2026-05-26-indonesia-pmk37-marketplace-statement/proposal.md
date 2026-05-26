---
title: "SuratLapak — PMK 37 filer for Indonesian online sellers"
slug: indonesia-pmk37-marketplace-statement
date: 2026-05-26
category: Compliance / Indonesia E-Commerce UMKM
complexity: Medium
score: 79
verdict: GO
confidence: Medium
oneLiner: "WhatsApp bot that submits the PMK 37 surat pernyataan to every Indonesian marketplace and files the seller's Coretax SPT."
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [WhatsApp-first, Multilingual, AI-agent, Compliance-driven, SMB, Solo-builder]
axes:
  problem: 17
  demand: 13
  build: 10
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 8
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# SuratLapak — PMK 37 filer for Indonesian online sellers

## 1. One-liner

A WhatsApp bot that submits the PMK 37 surat pernyataan to every Indonesian marketplace each January and packages the seller's annual Coretax SPT in April — so a hijab seller running Shopee + TikTok Shop + Tokopedia stops losing 0.5% off every payout.

## 2. Trend signal — why now?

Two regulations collide on the same Indonesian online seller in Q1 2026, and they hit her without warning.

**The first is PMK 37/2025**, the Ministry of Finance regulation that turned Shopee, Tokopedia, Lazada, Blibli and TikTok Shop into PPh Article 22 withholding agents for their domestic sellers. Effective date: 14 July 2025. Implementation deferred by Finance Minister Purbaya Yudhi Sadewa in October 2025; restart now slated for **February 2026** per official statements (Forest Shipping, Jakarta Post). The mechanism: every marketplace skims 0.5% off the seller's gross payout unless the seller has uploaded a **surat pernyataan** (statement letter) declaring she's under IDR 500M annual omzet — or in the 500M–4.8B band, declaring she's eligible for the PPh Final 0.5% regime. The statement format is in the PMK 37 appendix. It must be resubmitted every January and must be filed *separately at every marketplace she sells on*. The seller's "annual omzet" is her total across all marketplaces — not per-platform — so if she sells on three, she has to know her combined number.

**The second is Coretax**, DJP's consolidated tax portal that absorbed e-Faktur, e-Bupot, e-Form, e-Billing and DJP Online into one site. Coretax has been live since 1 January 2025 and chaos has not subsided. The April–May 2026 reporting wave produced documented complaints across Tempo, DDTC, Periskop, Warta Garut: failed logins, NIK-NPWP sync errors, missing reporting menus, e-Bupot generation failures, restitutions held for months. The Finance Minister himself publicly said he could not complete his own filing without assistance (Jakarta Globe). The deadline for individual UMKM SPT tahunan was pushed to end-April 2026. UMKM consultants (Konsultan Pajak Bersama) report the dominant failure mode is "weak bookkeeping plus inability to understand Coretax field labels."

**Third is market scale.** Tokopedia alone has 14M+ registered merchants; Shopee Indonesia received 167M visits in January 2026; the four PMK 37 marketplaces (Shopee, Tokopedia, Lazada, Blibli) plus TikTok Shop collectively host 15–25M unique active online seller accounts. ~99% of Indonesian business units are UMKM. The under-IDR 500M bucket is the largest by far — they pay no PPh, but they still must file a statement letter at every marketplace each January to keep 0.5% from being skimmed, and they still must file an annual SPT. That's high-frequency clerical pain at near-zero individual wallet. Perfect SaaS shape if the price is right and the channel is WhatsApp.

Existing accounting/tax tooling — Mekari Jurnal (IDR 359–499K/mo), Klikpajak, Pajakku, HiPajak, Accurate Online — sells a full-suite product to PT-class small business. Konsultan pajak charge IDR 500K–1.5M/mo. None of them targets the warung-online seller with a Rp 49–99K/mo single-purpose filer.

Provenance:
  - Signal 1: PMK 37/2025 mandates marketplaces to withhold 0.5% PPh 22 unless seller files annual surat pernyataan; restart confirmed for February 2026 — [Forest Shipping](https://www.forestshipping.com/indonesia-half-percent-ecommerce-withholding-tax-2026), [Jakarta Post](https://www.thejakartapost.com/business/2025/10/16/mixed-reaction-as-purbaya-delays-e-commerce-tax.html), [DJP source](https://www.pajak.go.id/en/node/117274) — 2025-07 / 2025-10 / 2026 confirmed
  - Signal 2: Documented April–May 2026 wave of Coretax filing failures hitting UMKM specifically; Finance Minister Purbaya publicly says he can't file his own return — [Jakarta Globe](https://jakartaglobe.id/business/indonesias-coretax-proves-too-complex-even-for-its-finance-minister), [DDTC](https://news.ddtc.co.id/berita/nasional/1818628/bingung-lapor-spt-via-coretax-ini-10-pertanyaan-yang-sering-muncul), [Tempo](https://www.tempo.co/ekonomi/sederet-masalah-coretax-yang-sering-dikeluhkan-menurut-ditjen-pajak--1211669) — 2026-04 to 2026-05
  - Signal 3: Tokopedia 14M+ merchants; Shopee 167M monthly visits Indonesia; 99% of businesses are UMKM; Mekari Jurnal cheapest tier IDR 359K/mo too expensive for sub-IDR 500M omzet sellers — [Statista / Tokopedia data via Cube.asia](https://cube.asia/read/how-tokopedia-became-ecommerce-titan-indonesia/), [Databoks](https://databoks.katadata.co.id/en/technology-telecommunications/statistics/698551c92f7e2/visitors-to-shopee-tokopedia-and-lazada-indonesia-websites-increased-in-early-2026), [Mekari Jurnal pricing via Detribpas](https://www.detribpas.com/541/software-akuntansi-gratis-vs-berbayar-accurate-jurnal-umkm.html) — 2026-01 / 2026
  Category: Regulatory arbitrage

## 3. The opportunity

PMK 37 created a brand-new clerical workflow — file a standardized statement letter at every marketplace, every January, with the right omzet bucket selected — and gave it a binary financial consequence: file it or lose 0.5% of every payout. The marketplaces themselves will roll out upload portals, but the burden of figuring out which bucket the seller is in, drafting the letter, getting it stamped with materai (Indonesia's stamp tax), and uploading it before the first sale of the year falls on the seller. Multiply by 3–5 marketplaces per active seller. Multiply by 15M+ sellers. Annual recurring clerical pain.

Then layer Coretax SPT tahunan on top: same seller, four months later, must also draft and submit her annual return. The bookkeeping required is whatever she has — usually WhatsApp screenshots of payouts, marketplace CSVs, transfer notifications. She doesn't have an accountant. The existing accounting SaaS suite is over-built and over-priced. The konsultan pajak is over-priced. DJP's own WhatsApp bot (0811-561-5008) only answers FAQ — it doesn't file.

The opportunity is a single-purpose, single-channel WhatsApp tool that handles **both flows** for the seller: the per-marketplace surat pernyataan in January, and the annual Coretax SPT in April. Priced at IDR 49–99K/month (~$3–6) it works for warung wallets. The "AI" doing the load-bearing work is OCR/parsing of marketplace payout screenshots and CSV exports, classification into the correct PMK 37 bucket, multilingual draft generation (Bahasa Indonesia with proper materai-stamped PDF), and an end-to-end submission flow that uploads the letter to each marketplace's seller portal via the seller's own login (saved credentials in a vault) or, where the marketplace exposes a documented upload endpoint, via that. Coretax filing reuses the same OCR'd omzet data.

Incumbents to beat: konsultan pajak, who own this for IDR 500K–1.5M/mo and charge per-marketplace; Mekari/Klikpajak/Accurate, who don't sell a sub-IDR 100K product because their whole motion is mid-market; DJP itself, which is the regulator and won't ship a "make-PMK 37-easy" UX. The gap is real and sized in millions of sellers.

## 4. Target market

- **Primary customer:** Indonesian individual taxpayers (WP Orang Pribadi) selling online via 2+ marketplaces, combined annual omzet under IDR 500M (the largest bucket). Common shapes: hijab/modest-fashion resellers, kerajinan / handmade craft sellers, dropshippers in skincare/electronics, kuliner online (snacks, sambal, rendang kering), preloved fashion. Run from home or a small ruko. Typically 1 owner + 0–2 helpers. Smartphone-first, KTP-only identity (no business entity).
- **Secondary customer:** sellers in the IDR 500M–4.8B band — slightly more sophisticated, often already PKP. They need the same statement letter filed but with a different bucket; they also pay 0.5% PPh Final, so for them the product saves marketplace withholding *reconciliation* pain (because the withheld 0.5% is creditable against their own self-deposit).
- **Why they buy:** verbatim from public forums (Periskop, DDTC, IKPI, UGM news, Konsultan Pajak Bersama blog): *"banyak pelaku UMKM tidak memahami bahwa pelaporan SPT tetap diperlukan, meskipun tarif 0,5% bersifat final"*, *"Coretax error login lagi"*, *"belum semua UMKM memahami cara kerja sistem digital DJP yang terbaru"*, *"sistem mash dalam fase penyempurnaan, overload traffic"*, *"banyak UMKM mencampur keuangan pribadi dan bisnis, sehingga menyulitkan perhitungan pajak"*, and from the Finance Minister himself: *"saya sendiri tidak bisa menyelesaikan SPT tanpa bantuan"*. These are real, dated, public quotes — not survey numbers, but the substance of the daily complaint.
- **Rough TAM reasoning:** 15–25M active online seller accounts across the 5 major Indonesian marketplaces. Deduplicate to ~10M unique sellers. Assume 30% are above the "purely informal" floor that has any KTP+rekening+marketplace-account triad needed to actually use the tool: ~3M reachable sellers. At IDR 79K/mo (~$5) and 1% paid penetration in 36 months: 30K customers × IDR 79K × 12 = IDR 28.4B (~$1.8M ARR). 3% penetration = ~$5.5M ARR. The TAM is there; the question is conversion, not size.
- **Why now for them:** PMK 37 restart in February 2026 means the *first* failed-to-file January creates an immediate cash-flow hit they feel monthly. By month 3, sellers who didn't submit are watching 0.5% disappear from every payout. Word travels fast in Indonesian seller Facebook groups (Shopee Seller Indonesia, Tokopedia Seller Community, TikTok Shop Sellers ID — each 100K–500K+ members). The annual SPT in April is the second pain wave.

## 5. Product sketch (MVP)

- **WhatsApp onboarding:** seller messages a number, KYC via NIK + KTP photo, links each marketplace by saved login (or one-time browser-redirect to grant a long-lived session token where the marketplace allows it).
- **Omzet ledger:** seller forwards monthly payout summary screenshots from each marketplace; bot parses, sums across platforms, and shows running total against IDR 500M and IDR 4.8B thresholds with a clear bar chart in the chat.
- **Statement letter draft + materai:** in early January (or immediately on onboarding), bot generates the PMK 37 appendix-format surat pernyataan in PDF with the correct bucket and the correct text, fetches an e-materai stamp via Peruri's API, and presents to the seller for one-tap approval.
- **Submission to each marketplace:** automated upload to Shopee Seller Center / Tokopedia Mitra / Lazada Seller / Blibli Mitra / TikTok Shop, or — where automation breaks — a one-tap "send to my email so I can forward" fallback with submission instructions per marketplace.
- **Reminder + re-file engine:** auto re-files every January 1; warns the seller two months before she crosses IDR 500M so she can switch buckets in time and avoid a wrong-statement penalty.
- **Annual SPT tahunan packet:** in March, bot drafts the seller's PPh Final 0.5% SPT (or zero-tax SPT for sub-500M sellers) using the same omzet ledger, generates the Coretax-compatible CSV/XML, and walks the seller through the upload to coretaxdjp.pajak.go.id step by step (one screenshot per step in WhatsApp).
- **Audit binder:** every letter sent, every receipt of submission, every Coretax confirmation kept in one cloud folder the seller can share with DJP if asked.

## 6. AI angle — what's load-bearing

Three load-bearing AI jobs, none decorative.

**OCR + classification of payout evidence.** Sellers don't have clean CSVs. They have WhatsApp screenshots of Shopee SPaylater payouts, Tokopedia saldo penghasilan transfers, Lazada Wallet entries, TikTok Shop FBT settlements. The bot has to read low-quality screenshots in Bahasa Indonesia, sum them across formats, dedupe (refunds, returns), and feed a running ledger. This is exactly the work Gemini / Claude vision + a small classifier can do, and it's not solvable by a form-based bookkeeping app — sellers will not type their omzet in by hand every month.

**Bucket classification + letter generation.** PMK 37 has three buckets (under 500M, 500M–4.8B with NPWP/PPh Final, above 4.8B). Each generates a different statement, and choosing wrong creates a penalty. The model has to read marketplace settings + the running omzet + NPWP status and pick the right template. Letter text must be Bahasa Indonesia legal-form correct and matched against the PMK 37 appendix.

**Coretax narration.** The Coretax SPT flow has 30+ fields the seller doesn't understand. The AI's job in April is to take the seller's omzet ledger and produce, on WhatsApp, a step-by-step screen-recorded walkthrough of *her* specific filing in her own NPWP, with the exact numbers pre-filled, and explain each field in plain Indonesian. Without the AI, you ship a static guide and the seller still can't file. With it, she finishes in 20 minutes.

Strip AI out and the product collapses — sellers will not adopt a typing-heavy form-based tax tool. They'll continue to lose 0.5% and miss SPT.

## 7. Localization angle

This is a localization play by definition. Bahasa Indonesia is the only language. NPWP/NIK/KTP are the only ID rails. Materai (Indonesian stamp tax, e-materai via Peruri) is required on the statement letter or it's invalid. Marketplaces are the local big-5. WhatsApp is the default channel (Indonesia is one of the largest WA markets globally; warung-onboarding via WA is standard). Payment via QRIS or e-wallet (OVO, DANA, GoPay, ShopeePay) since most target sellers don't have a credit card.

This product cannot exist as a global SaaS. It is a country-shaped piece of regulation packaged into a WhatsApp app. That's the moat.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Free:** omzet tracking only — read 1 marketplace, track total
  - **Tier 1 — Surat Aktif:** IDR 49K/mo (~$3) — file statement letters at up to 3 marketplaces, reminders, audit binder
  - **Tier 2 — Lapak Lengkap:** IDR 99K/mo (~$6) — unlimited marketplaces + annual SPT tahunan packet + Coretax walkthrough
  - **Annual prepay:** IDR 899K/yr (~$55) — saves the seller two months
- **ACV:** target ARPU ~IDR 720K/yr (~$45) blended once mix settles.
- **Math to $1M ARR:** ~22,000 paying customers × IDR 720K × 12/12 = ~$1M ARR. Reachable: there are 15M+ marketplace seller accounts; 0.15% paid penetration of the addressable 10M is 15K customers; 0.22% is 22K. Single-digit-basis-point conversion off seller-community channels in year 1.
- **Math to $5M ARR:** ~110,000 paying customers, or ARPU expansion to IDR 1.2M/yr via add-ons (e-materai bulk, NPWP registration, e-faktur for PKP sellers). 1% paid penetration of the addressable base.
- **Expansion path:** add e-materai resale at margin (Peruri sells e-materai at IDR 10K per stamp; sellers need 1+ per marketplace per year). Add Coretax for PKP sellers (the IDR 500M–4.8B band must also handle e-Faktur). Add a "konsultan pajak referral" upsell for sellers who cross IDR 4.8B and graduate to badan usaha. Upgrade the SPT packet into a full PPh Final auto-deposit per month (now you're competing with Klikpajak/HiPajak but with a much sharper distribution wedge).

## 9. Go-to-market wedge — first 100 customers

- **Seller Facebook & Telegram groups, named.** *Shopee Seller Indonesia* (200K+), *Tokopedia Seller Community*, *TikTok Shop Sellers ID*, *Komunitas Penjual Online UMKM Indonesia*. Drop a free omzet-tracker WhatsApp link with a 1-min Loom in Bahasa Indonesia showing "Anda kehilangan Rp X tahun ini karena belum kirim surat pernyataan ke Shopee." Tested CTR pattern in Indonesian SMB SaaS is 1–3%. Expect 20–40 leads per group post.
- **Konsultan-pajak partnership.** Sub-IDR 100K is below the konsultan's profitable floor anyway — partner with 5–10 konsultan firms in Jakarta/Bandung/Surabaya to refer their declined-too-small leads. Revenue share or flat referral fee.
- **YouTube/TikTok creators in the "jualan online" niche.** Indonesia has a deep bench of seller-education creators (Pejuang Online, Cara Jualan, AcademyShoot, etc.) with 50K–500K subs. One sponsored short showing the 30-second statement-letter upload — IDR 2–10M per sponsored post is in the noise.
- **WhatsApp organic.** Sellers forward useful WA bots to other sellers. Build invite incentive: 1 month free for each referred paying seller. This is how Mekari Talenta / Buku Warung got to scale.
- **PMK 37 launch month (February 2026) news cycle.** Indonesian business press (Kontan, Tempo, DDTC, Bisnis.com) will cover the marketplace withholding restart. Pitch them a 2-minute demo. One write-up in DDTC produces several hundred sign-ups in a week — the audience is the exact target.

First 100 customers: realistically week 2–3 post-launch if PMK 37 restart hits February as planned.

## 10. Build complexity — justification

**Medium.** The product is mostly WhatsApp Business Cloud API + a vision LLM + per-marketplace scrape/upload. None of those are research-grade. Marketplace seller portals are the gnarly bit — each one (Shopee, Tokopedia, Lazada, Blibli, TikTok Shop) has a different upload UX, MFA requirements, and rate limits. Realistic scope: 2 engineers + 1 tax-domain advisor (Indonesian konsultan pajak), 3–4 months to a v1 that supports 3 marketplaces, IDR 50–100M ($3–6K) in compute + materai + WhatsApp messaging until first 1K customers. Coretax filing is automatable via the official upload spec; the SPT walkthrough is content + AI narration. Real risk is marketplace ToS — see Risks below.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Filing-agent role is established under Indonesian tax law; no STTD needed to draft and upload on a taxpayer's behalf if seller consents. Konsultan license (STTD) needed only for representation in audit/disputes — out of scope for v1. |
| Ethical — no harm / dark patterns | ✅ | Saves seller money, no upsell traps. Statement letter content is regulator-mandated, not invented. |
| Market exists (evidence above) | ✅ | 15M+ active marketplace sellers, regulation in force, complaints documented. |
| 1–5 person team can build this | ✅ | 2 eng + 1 advisor in 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | ~$5–10K opex including WhatsApp Business API + materai float + LLM bills + 1 marketing test. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Direct cash hit (0.5% off every payout) every month the statement is missing. Hair-on-fire once first February payouts arrive light. |
| Demand evidence | 15 | 13/15 | Public regulation, dated complaints, finance minister himself admits Coretax is too hard. Single-signal weakness: PMK 37 restart delayed once already; could slip again. |
| Build feasibility | 15 | 10/15 | WA + LLM + scrape is well-understood. Marketplace portal automation is fragile and may need browser-extension fallback. |
| Distribution clarity | 15 | 12/15 | Named FB/Telegram communities, named seller creators, news cycle around Feb 2026 restart. Risk: WA-to-paid conversion in ID averages 3–6%, not guaranteed. |
| Revenue mechanics | 15 | 11/15 | IDR 49–99K/mo works for the wallet. Path to $1M ARR is 22K customers — credible but requires 4-quarter ramp. |
| Time to first revenue | 10 | 8/10 | First paying customer within 4–6 weeks of launch given the seller-group channel. |
| Defensibility | 10 | 8/10 | Workflow lock-in (the audit binder + saved marketplace credentials + per-seller omzet history) is sticky. Marketplace upload integrations compound. PMK 37 expertise is non-trivial. Not patent-defensible — copyable by Mekari if they care. |
| **Total** | **100** | **79/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (browser automation, vision/LLM, WhatsApp Business API) · `domain-expertise-required` (PMK 37, e-materai, Coretax SPT, konsultan pajak relationship)

### Key assumptions to validate

1. **Assumption:** PMK 37 will restart on time in February 2026 (or within Q1 2026), keeping urgency alive. **How to test:** monitor Menkeu Purbaya / DJP statements weekly; watch for the DGT decree appointing the first marketplaces. Track DJP press releases at pajak.go.id, IKPI updates, and Kontan/DDTC coverage. If restart slips past Q2 2026, urgency drops and we revisit.
2. **Assumption:** under-IDR 500M sellers will pay IDR 49–99K/mo to save 0.5% of payouts. For a seller doing IDR 10M/mo across marketplaces, 0.5% = IDR 50K/mo — exactly at the price point, so the value depends on convenience, not pure dollar savings. **How to test:** 30 in-WA interviews with sellers in 3 FB groups; ask "if 0.5% gets withheld next month, what would you pay to fix it?". Trigger: 10/30 say IDR 50K+. Alternative pricing: per-letter-filed at IDR 25K per filing, capped at IDR 99K/mo.
3. **Assumption:** marketplaces will allow third-party upload of the statement letter (either via portal automation, or via a "send via my email" handoff). **How to test:** read the published Shopee / Tokopedia / Lazada seller-portal docs for PMK 37 statement upload as soon as they go live; test browser automation on each. Fallback: chat-based handoff where seller forwards the file from her own phone.
4. **Assumption:** Coretax SPT filing walkthrough is good enough to replace a konsultan for an IDR 0–500M omzet seller. **How to test:** ship v0 of the SPT walkthrough to 10 friendly sellers in April 2026 next year — measure "filed successfully without escalating to konsultan" rate. Target 80%+.
5. **Assumption:** WhatsApp Business API conversion holds the SMB SaaS norm in ID (3–6% free-to-paid). **How to test:** launch free tier to 500 sellers in a single FB group, measure paid conversion by month 2.

### Risk flags

1. **Regulatory risk:** PMK 37 already delayed once (Oct 2025). If Purbaya postpones again or revises buckets (e.g. raises the marketplace appointment threshold), the urgency disappears. Mitigation: the Coretax SPT side of the product is independent of PMK 37 timing — keep it as fallback wedge.
2. **Platform dependency:** Shopee/Tokopedia/TikTok Shop seller portals may block automated upload or change UX without notice. Mitigation: ship a "manual handoff" mode where the bot prepares the PDF + instructions and the seller forwards it from her phone. Slower UX but resilient.
3. **Konsultan/incumbent backlash:** Mekari (well-capitalized, owns Klikpajak) or Pajakku could ship a competing WA tool. Mitigation: distribution speed and seller-group ownership.
4. **WhatsApp policy:** Meta enforces WhatsApp Business templates and may flag tax-related messaging. Mitigation: pre-register templates with WhatsApp; route delicate flows via session messages, not template messages.
5. **Materai compliance:** e-materai must be issued by Peruri; misuse triggers penalties. Mitigation: integrate Peruri's official e-materai API.

## 14. Structured verdict

```
Score:                  79/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical 2-person team + 1 Indonesian konsultan pajak advisor (STTD-licensed); Bahasa-Indonesia native preferred
Time to revenue:        4–6 weeks from MVP launch (assuming PMK 37 restart on schedule)
Capital to launch:      IDR 80–150M ($5–10K) including WhatsApp Business API setup, Peruri e-materai float, LLM compute, 1 small marketing test
Top 3 assumptions to validate first:
  1. PMK 37 restart confirmed in Q1 2026 — watch DGT decrees + Menkeu statements weekly
  2. Sellers under IDR 500M omzet will pay IDR 49–99K/mo for letter-filing + Coretax help — 30 WA interviews + price test in 1 FB group
  3. Marketplace seller portals allow third-party PDF upload OR clean manual handoff — test each platform's PMK 37 upload UX within 7 days of marketplace appointment
Kill criteria:
  - Abandon if PMK 37 restart is postponed past Q3 2026 with no concrete date
  - Abandon if <5% of 30 interviewed sellers will pay IDR 49K+/mo
  - Abandon if Mekari/Klikpajak ships an identical WA-first PMK 37 filer before our v1
  - Abandon if all 5 major marketplaces ban third-party automation and refuse manual handoff
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Map the PMK 37 statement letter format (already published in the regulation appendix). Read Shopee/Tokopedia/Lazada/Blibli/TikTok Shop seller-portal documentation (whatever they've published since Feb 2026 appointment). List submission UX per platform.
- **Day 3:** Join the top 3 Indonesian online-seller FB groups + 2 Telegram groups. Post a free "PMK 37 omzet calculator" Google Sheet with a WhatsApp link. Lurk to read complaints; tag 30 sellers for interviews.
- **Day 4–5:** Run 20 WhatsApp voice-call interviews. Ask: (a) Did you submit the statement to each marketplace this January? (b) Did you have 0.5% withheld? (c) Did you file SPT tahunan in April via Coretax? (d) Would you pay IDR 49K/mo for a WA bot that does both? (e) What did you pay for help if anything?
- **Day 6:** Sit with 1 Jakarta konsultan pajak (STTD-licensed) for 60 minutes. Confirm: agent-filing without STTD is legal; bucket-classification edge cases; ways to ship without crossing into "tax representation."
- **Day 7:** Decide go/no-go based on a falsifiable bar: **10/20 sellers say yes to IDR 49K+/mo AND PMK 37 restart is publicly confirmed for Q1 2026 AND at least 2 of 5 marketplaces have a published portal upload spec.** All three = build. Two of three = build with caution. One or fewer = pass and try the Coretax-only SPT angle as a smaller wedge.
