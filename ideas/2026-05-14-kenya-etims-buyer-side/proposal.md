---
title: "RisitiChase — eTIMS invoice chaser for Kenya SMEs"
slug: kenya-etims-buyer-side
date: 2026-05-14
category: Compliance SaaS / Kenya SMEs facing KRA's January 2026 expense validation
complexity: Medium
score: 81
verdict: STRONG GO
confidence: High
oneLiner: "WhatsApp tool that hunts every missing eTIMS invoice from your suppliers before KRA disallows the expense."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Kenya, WhatsApp-first, AI-agent, Compliance-driven, SMB, Swahili, M-Pesa-native]
axes:
  problem: 18
  demand: 14
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, sales-heavy, technical-heavy]
featured: true
---

# RisitiChase — eTIMS invoice chaser for Kenya SMEs

## 1. One-liner

WhatsApp tool that hunts every missing eTIMS invoice from your suppliers before KRA disallows the expense.

## 2. Trend signal — why now?

January 1, 2026: Kenya Revenue Authority went live with automated **expense validation**. Every shilling a Kenyan SME claims as an expense on its 2025 income-tax return (filed Apr–Jun 2026) must be supported by an eTIMS invoice that **also carries the buyer's KRA PIN**. If the supplier didn't put your PIN on the eTIMS invoice — or didn't issue one at all — KRA disallows the expense, adds it back to taxable income, and tacks on penalties + interest at 30% corporate rate.

This is a *buyer-side* nightmare that did not exist 6 months ago. Daily Nation ran "Small businesses suffer as eTIMS nightmare unfolds." Carol Musyoka — one of Kenya's most-read business columnists — published "When You Become The Taxman's Footsoldier" documenting her own Mexican standoff with a sub-VAT-threshold supplier who refused to issue eTIMS. BDO, KPMG, RSM, PKF, every Big-and-mid-tier firm published 2026 alerts in Q1.

Sellers have tools (Zoho Books eTIMS, Cute Profit, Uhasibu, Qwan, plus 50+ KRA-accredited integrators). **Buyers don't.** Reconciling inbound supplier invoices, chasing missing ones, and verifying each one before April 2026 is being done in WhatsApp groups and Excel by overworked bookkeepers right now. First Apr–Jun 2026 filing season is the customer's "oh shit" moment.

```
Provenance:
  - Signal 1: "Small businesses suffer as eTIMS nightmare unfolds" — Daily Nation business desk — 2025–2026
  - Signal 2: Carol Musyoka "When You Become The Taxman's Footsoldier" + Adamjee Auditors "eTIMS in 2026: How KRA's Expense Validation Rules Affect Kenyan Businesses" — buyer-side Mexican-standoff anecdotes and rule explainers — Apr 2026
  - Signal 3: BDO / KPMG / RSM Kenya tax alerts confirming 1 Jan 2026 automated expense validation, supplier-PIN-on-invoice rule, and 30% adverse-tax risk — Q4 2025 / Q1 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

KRA's rule shifts compliance cost from seller to **buyer**: the buyer's books determine the buyer's tax bill, so the buyer is the one bleeding if the supplier is sloppy. That creates a brand-new buyer-side workflow that does not yet have a category-defining product.

Incumbent ERPs (Zoho Books, Cute Profit, Uhasibu, QuickBooks-via-integrators) are seller-issuance tools with bolt-on eTIMS hooks. None of them are designed for the specific job of (a) ingesting every photographed receipt and emailed PDF from 50+ suppliers a month, (b) verifying eTIMS-CUIN + buyer-PIN match on each one, (c) flagging non-compliant suppliers, (d) auto-dispatching a polite-but-pointed WhatsApp message to the supplier with a one-tap link to KRA's own eTIMS WhatsApp service (+254 711 099 999) so they can fix it in 30 seconds, and (e) exporting a clean iTax-ready expense schedule.

Disruption shape: do **one job** dramatically better than a full ERP's afterthought feature. KES 2,500–6,000/mo, no migration, no rip-and-replace, just plug it in alongside what the bookkeeper already uses.

## 4. Target market

- **Primary customer:** Kenya SMEs with KES 5M–100M annual turnover (the small + medium MSME band), 5–50 employees, 1–3 retail/operating locations, 30–300 supplier invoices/month. Sectors with the worst pain: hospitality (cafés, lodges, restaurants), distribution & wholesale, manufacturing, professional services, construction subcontractors. Nairobi, Mombasa, Kisumu, Nakuru.
- **Why they buy:** They will physically owe more tax in April 2026 unless every supplier invoice is eTIMS-compliant with their PIN on it. Their bookkeeper currently chases suppliers manually over WhatsApp; their accountant warns them at year-end that 20–40% of expenses are at risk; they have no way to verify a QR code at scale. The moment we say *"upload your last month of supplier invoices, we'll tell you which ones KRA will reject"*, they hand us their phone.
- **Rough TAM reasoning:** ~1.56M MSMEs licensed by Kenyan counties (KNBS 2016 survey). The small + medium band (KES 5M–100M turnover) is roughly 100K–200K firms. Realistic SAM for a $30–$70/mo SaaS: ~80K firms. 1% penetration = 800 customers = ~KES 36M/yr (~$280K) at KES 3,750/mo. 5% = $1.4M ARR. That's *only* Kenya. Rule structure is being copied across East Africa (Uganda EFRIS, Tanzania VFD).
- **Why now for them:** Apr 30, 2026 is the income-tax filing deadline. The first full year of automated expense validation. Their 2025 books are being closed this quarter. Adverse tax assessments, penalties, and interest land 60–90 days after filing. By Q3 2026 the war stories will be everywhere — we want to be the obvious answer.

## 5. Product sketch (MVP)

- **WhatsApp inbox**: bookkeeper forwards every supplier invoice (PDF, photo, email-screenshot) to a dedicated number; tool OCRs + parses CUIN, buyer-PIN, supplier PIN, line items, KES total.
- **Real-time KRA verification**: scans the eTIMS QR / hits the iTax invoice-number-checker for every parsed invoice; flags missing, fake, or buyer-PIN-mismatched invoices on the spot.
- **Auto-chase**: for non-compliant invoices, generates a personalized WhatsApp message in Swahili + English with the supplier's name, the invoice number, the specific defect ("your invoice has no buyer PIN"), and a one-tap link to KRA's own WhatsApp eTIMS bot (+254 711 099 999) for them to reissue. Tracks reply, escalates after 48h.
- **Supplier scorecard**: every supplier gets a green/amber/red eTIMS health rating; the dashboard surfaces "your 5 highest-spend suppliers who are eating into your tax deduction".
- **Monthly close report**: one PDF — *"This month you spent KES 1.84M with suppliers. KES 1.72M is eTIMS-compliant. KES 124K is at risk = KES 37K of disallowed tax. Here are the 6 suppliers to chase."*
- **iTax expense schedule export**: pre-formatted CSV with supplier PINs, CUINs, dates and amounts; bookkeeper uploads directly during filing.
- **Year-end mode**: April surge feature — bulk verifies the last 12 months of invoices against eTIMS in one pass.

## 6. AI angle — what's load-bearing

Three places AI does real work, not decoration:

1. **OCR + entity extraction on Kenyan invoice chaos**: PDFs from Sage, photos of carbon-copy hand-written receipts, screenshots from Cute Profit, WhatsApp images. Off-the-shelf OCR (Document AI / Gemini Flash) gets most of it; a small fine-tune on KRA invoice layouts handles the long tail. Without this, a human is keying data and the product collapses to a glorified spreadsheet.
2. **Swahili-English mixed chase messages**: tone-aware, supplier-specific WhatsApp drafts. "Mzee mwema, sahihi ya invoice yako Inv-3412 haina PIN yetu — tafadhali pitisha tena kwa eTIMS…". Multilingual LLMs do this trivially now; in 2023 they didn't.
3. **Fraud / mismatch detection**: catching fake QR codes, edited CUINs, supplier-PIN mismatches with KRA records, duplicate invoices. Classification + rule engine. Newstrends.co.ke already reported fake-QR receipts circulating; the buyer's tax filing is the one that gets penalized.

Remove the AI and the product becomes manual data entry + a chase template. The AI is what lets one bookkeeper handle 300 invoices/month without missing one.

## 7. Localization angle

This is the wedge.

- **Language**: Swahili-English code-mixed UI and chase messages. Generic Zoho/QuickBooks notifications are tone-deaf in Kenyan supplier relationships.
- **Channel**: WhatsApp-first, because Kenyan SME bookkeeping happens on WhatsApp. KRA itself ships eTIMS-via-WhatsApp (+254 711 099 999). Our chase messages link directly into KRA's own bot — we're not competing with the tax authority, we're surfing their rails.
- **Payment**: M-Pesa Paybill for monthly subs. KES-denominated pricing. KES 2,500–6,000/mo is a $20–$50 sweet spot the wallet accepts; $49/mo USD-denominated SaaS reads as expensive.
- **Compliance quirks**: KRA-specific — CUIN format, buyer-PIN rule, iTax export format, the 10-category exempted-expense list (RMC-style), supplier turnover-threshold for VAT exemption, etc. A global tool will never invest in this.
- **Distribution**: ICPAK accountant directory is public-ish; bookkeepers are the buyers / influencers. Local fintech bundling potential (M-Pesa for Business, KCB SME, Equity Eazzy Biz).

A US founder building a global "AP automation" tool will never have the patience to learn the eTIMS exemption matrix or write Swahili chase messages. A Kenyan founder ships this in 4 months.

## 8. Business model — path to $1M–$5M ARR

- **Pricing tiers (priced in KES, M-Pesa Paybill):**
  - **Starter** — KES 2,500/mo ($19) — up to 50 invoices/mo, 1 user. Sole proprietors + freelancers.
  - **Business** — KES 4,500/mo ($35) — up to 200 invoices/mo, 3 users, supplier scorecard, monthly PDF report. Sweet spot.
  - **Pro** — KES 8,500/mo ($65) — unlimited invoices, 10 users, multi-entity, year-end bulk verify, API to existing accounting software. Accounting firms managing books for 10–50 clients.
- **ACV:** Blended ~KES 60K/yr (~$465). Pro accounting-firm seats blend up.
- **Math to $1M ARR:** ~2,200 paying customers × $465 ACV. Penetration <3% of the small/medium MSME band. Achievable in 18–24 months.
- **Math to $5M ARR:** ~10,000 customers + East Africa expansion (Uganda EFRIS, Tanzania VFD copy-paste of the playbook) + accountant-firm tier dominating local CPA practices. 3–4 years.
- **Expansion path:** start with chase + verify. Add receipt-side issuance for the customer's own outbound invoices (we already have the eTIMS plumbing). Then bank feed reconciliation. Then a lightweight full ledger. Cross-sell to East Africa as their mandates copy Kenya's.

## 9. Go-to-market wedge — first 100 customers

Concrete playbook, weeks 1–8 post-launch:

- **Week 1–2: Accountant beach-head.** ICPAK's public member directory + ICPAK firm-verification site lists ~1,000 accounting practices. Scrape, segment to SME-serving boutiques (5–25 staff), send a Loom: *"Your client's 2025 expenses just got 20% less deductible. Here's a tool that fixes it. Free for your first 5 client books."* Target: 25 firm sign-ups bringing 80–120 clients each.
- **Week 3–5: Carol Musyoka / Bizna / Techweez plant.** Pitch a guest column to the same outlets already screaming about eTIMS pain. "We built the buyer-side tool everyone was asking for." Carol's column alone clears 50K weekly readers; Bizna 250K monthly. Convert via free 7-day verify-everything sprint landing page.
- **Week 4–8: Cold WhatsApp to KEPSA / KAM / KNCCI member directories.** Kenya Private Sector Alliance and Kenya Association of Manufacturers publish member lists; KNCCI county chapters publish theirs. ~3,000 SME contacts. Personalized voice-note in Sheng-English from a Kenyan founder — 15–20% reply rate is realistic, 3% close = ~90 customers.
- **Week 6–10: M-Pesa Paybill bundle pitch.** Safaricom for Business sells "M-Pesa for Business" to ~250K Kenyan merchants. A revenue-share or co-marketing deal turns the bill payer into a distribution channel.
- **Week 10+: SEO + comparison content.** "Zoho Books vs RisitiChase for buyer-side eTIMS" type comparison pages, plus the cheapest distribution channel of all: WhatsApp word-of-mouth between bookkeepers who already chat in groups.

If the accountant-firm beach-head doesn't deliver 100 paying client-books by month 3, the idea is wrong — kill or rethink.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: WhatsApp Business Cloud API, Gemini Flash / Document AI for OCR, KRA iTax public invoice-checker (HTML scrape + their published QR format), M-Pesa Paybill (Daraja API), Next.js dashboard, Postgres + Cloudflare R2 for invoice storage. Custom: invoice-classification fine-tune, Swahili-English chase-message templates with the specific cultural register, the supplier-PIN matching rules, the eTIMS exemption matrix encoded as a rule engine, year-end iTax CSV exporter. Realistic v1 in 12–16 weeks for a pair (1 full-stack + 1 product/distribution); 8 weeks if both are sharp and the founder is Kenyan.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | KRA publishes the rules; we read invoices the customer already owns. No PII risk beyond standard data handling. |
| Ethical — no harm / dark patterns | ✅ | Helps SMEs comply, not evade. Surfacing fake QRs is genuinely pro-buyer-protection. |
| Market exists (evidence above) | ✅ | National-press coverage, Big-4 alerts, $0 dedicated buyer-side product today. |
| 1–5 person team can build this | ✅ | Pair-shippable in 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | Mostly engineering time + KES 100K WhatsApp Business API setup + paid OCR credits. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire — direct cash tax bill consequence in <12 months. Bookkeepers and accountants already burning hours/week on this. Mexican-standoff anecdotes in national press. |
| Demand evidence | 15 | 14/15 | Daily Nation, Carol Musyoka, Big-4 alerts, "Kenyans Raise Alarm Over Alleged Fake eTIMS Receipts" — multi-channel screaming. Two notches off perfect because no one's measured exact tool spend yet. |
| Build feasibility | 15 | 11/15 | Medium build. OCR + WhatsApp + KRA scrapes are all standard. Long tail: invoice-format diversity, edge cases in the exemption matrix, KRA API drift. 12–16 weeks honest. |
| Distribution clarity | 15 | 12/15 | Accountant beach-head + KEPSA/KAM/KNCCI directories + bizna/Carol Musyoka are real and listed. Conversion math depends on local trust; founder-fit needed. |
| Revenue mechanics | 15 | 12/15 | KES 2,500–8,500/mo benchmarks against Zoho Books KES 849–10K; below local accountant retainer KES 10K–50K/mo. Path to $1M is ~2,200 customers — under 3% of the addressable band. Defensible. |
| Time to first revenue | 10 | 8/10 | Pre-Jan-2026 was theoretical; Apr 2026 filing season + paid pilots from accounting firms = paid customers in weeks. |
| Defensibility | 10 | 6/10 | Soft moat: local language + workflow + accountant-firm relationships + WhatsApp habit + KRA-rule encoding. Defensible against US/global entrants; vulnerable to a focused Kenyan copycat 6 months later. Speed matters. |
| **Total** | **100** | **81/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (Kenyan tax + bookkeeping culture)
`sales-heavy` (accountant-firm beach-head needs human handshakes)
`technical-heavy` (OCR + WhatsApp + KRA scraping orchestration)

Ideal team: one Kenyan operator with accounting / SME-fintech background, one full-stack engineer comfortable with LLM tooling and African mobile payment APIs.

### Key assumptions to validate (3–5)

1. **Assumption:** Kenyan SMEs in the 5M–100M turnover band will pay KES 2,500–6,000/mo for a *dedicated* buyer-side tool when they already pay for an ERP. **How to test:** Pre-sell 30 LOIs from accountant firms before writing a line of code. If <10 sign, pricing or pain is wrong.
2. **Assumption:** Supplier non-compliance is concentrated enough (5–20% of invoices) to make the chase product valuable, not so high (>40%) that the supplier ecosystem is structurally broken. **How to test:** 20 free "audit my last 30 days" reports against real SMEs — measure the % non-compliant.
3. **Assumption:** KRA's iTax invoice-checker remains scrape-friendly OR an accredited integrator status is realistically obtainable for a 2-person team. **How to test:** Apply to KRA's accredited integrators program in week 1. Have a fall-back scrape architecture.
4. **Assumption:** Accountant firms become the dominant channel, not direct-to-SME. **How to test:** Track CAC and conversion by source for first 100 customers — firm-channel should be ≥3× cheaper than direct.

### Risk flags

1. **Regulatory drift risk:** KRA could (a) ease the buyer-PIN rule under SME-lobby pressure, (b) re-launch the iTax checker behind auth, (c) bless one vendor as the official buyer-side tool. The first two reduce TAM; the third kills the company. Watch KRA bulletins weekly.
2. **Platform dependency:** WhatsApp Business pricing/policy changes; KRA API surface changes; M-Pesa Daraja rate limits. Spread risk by also offering email + dashboard ingestion, but WhatsApp is the wedge.
3. **Copycat risk:** Local accountant-software incumbents (Cute Profit, Uhasibu, Qwan) can bolt on a "buyer-side eTIMS" tab in months. Must win on focus + speed + accountant-firm distribution before they wake up. 6-month head start is realistic, 18-month is not.
4. **Founder geography risk:** A non-Kenyan operator will not nail the supplier-chase tone or the accountant-trust dynamics. Domain expertise required is genuine, not nominal.

## 14. Structured verdict

```
Score:                  81/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       Kenyan operator with SME-fintech / accounting background + 1 senior full-stack engineer
Time to revenue:        6–10 weeks post-MVP via paid pilots from 5–10 accounting firms
Capital to launch:      KES 4–6M (~$30–45K)
Top 3 assumptions to validate first:
  1. 30 LOI pre-sells from accountant-firm partners before writing code
  2. Free-audit reports on 20 real SMEs to measure supplier-noncompliance % per book
  3. KRA accredited-integrator application accepted (or scrape fall-back works at scale)
Kill criteria:
  - Abandon if <10 LOI in 30 days of outbound to 100 accountant firms
  - Abandon if average noncompliant-invoice % per SME book is <5% (tool not valuable enough)
  - Abandon if KRA softens the buyer-PIN rule before launch (TAM collapses)
  - Abandon if Cute Profit or Zoho ships a focused buyer-side feature within 90 days of our launch with >50% feature parity
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape ICPAK firm directory + KEPSA/KAM/KNCCI member contacts. Build a list of 200 Nairobi-based accounting firms and SME bookkeepers. Write a 60-second Loom in Sheng-English: "Here's the tool you wished existed for buyer-side eTIMS. Want a free 30-day audit of your client's books?"
- **Day 3–4:** Run 50 manual "free audits" by hand: customer forwards their last 30 days of supplier invoices, we OCR + verify against iTax + return a PDF showing % at risk and the specific suppliers. No software — humans + a spreadsheet. Measure: % of invoices noncompliant, % of customers who say "send me the bill."
- **Day 5:** Decide go / no-go on the metric: **≥10 paid LOI from accounting firms at KES 4,500/mo (firm pays, covers their clients)** OR **≥15 individual SMEs handing over M-Pesa Paybill auth at KES 2,500/mo on the spot** = GO. Anything less = either pricing is wrong, pain isn't acute yet, or accountant trust takes longer than the playbook assumes.

Falsifiable target: 10 LOI from firms in 5 days. Hit it or rethink.
