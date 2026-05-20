---
title: "RisitiBora — eTIMS reclaim engine for Kenyan SMEs"
slug: kenya-etims-expense-reclaim
date: 2026-05-21
category: Compliance / Kenya
complexity: Medium
score: 79
verdict: GO
confidence: Medium
oneLiner: "Rescues every M-Pesa Till outflow Kenyan SMEs make to informal suppliers so KRA validation never disallows the expense."
tags:
  vertical: Compliance
  model: SaaS
  geography: Kenya
  secondary: [M-Pesa-native, eTIMS, SMB, WhatsApp-first, AI-agent, Compliance-driven, Solo-builder]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 9
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# RisitiBora — eTIMS reclaim engine for Kenyan SMEs

## 1. One-liner

Rescues every M-Pesa Till outflow Kenyan SMEs make to informal suppliers so KRA validation never disallows the expense.

## 2. Trend signal — why now?

Three concrete shifts converged in the last six months and the operator deadline is **June 30, 2026** — six weeks from today.

- **Jan 1, 2026 enforcement live.** KRA now validates every shilling of declared expense on a 2025 income-tax return against eTIMS-stamped invoices. No eTIMS receipt = expense disallowed = added back to taxable income. At Kenya's 30% rate, KSh 1,000,000 of un-receipted spend becomes KSh 300,000 of phantom tax. ([sokodirectory.com](https://sokodirectory.com/2025/11/kras-2026-e-invoice-crackdown-your-expenses-without-etims-receipts-will-become-taxable-income/))
- **Most suppliers can't or won't issue eTIMS.** KRA's own numbers: ~120,000 of 663,000 firms registered for eTIMS (≈81% non-compliant). Mama mboga, Jua Kali welders, matatu mechanics, hardware-souk dealers — the people SMEs actually buy from — don't issue eTIMS receipts. ([nation.africa](https://nation.africa/kenya/business/small-businesses-suffer-as-etims-nightmare-unfolds--4585552))
- **KRA quietly shipped the rescue valve on May 17, 2026.** iTax now accepts a Manual Non-eTIMS CSV upload for informal expenses — supplier PIN field optional, instant processing, no officer approval. The file format is brand new; zero accounting software vendors have wired it in. ([nairobiwire.com](https://nairobiwire.com/2026/05/kra-itax-upgrade-informal-expenses-etims-invoices-csv-upload-june-2026-filing.html))

Customer voice on the existing pain (verbatim, sourced):

- *"We used to get up to 20 company cars a day, but now we rely on regular customers and a few taxis."* — James Kituku, car wash owner, Dennis Pritt Road, Nairobi. Lost his fleet clients because they refuse to deal with non-eTIMS suppliers. ([nation.africa](https://nation.africa/kenya/business/small-businesses-suffer-as-etims-nightmare-unfolds--4585552))
- *"There are three platforms on eTIMS all of which require the internet. Should someone travel from Turkana to Nairobi to get internet connectivity and then go back to conduct business?"* — Job Wanjohi, Chief of Policy and Advocacy, Kenya Association of Manufacturers. ([nation.africa](https://nation.africa/kenya/business/small-businesses-suffer-as-etims-nightmare-unfolds--4585552))
- *"It took 2 days to raise an invoice through eTIMS."* — Twitter/X user on the eTIMS interface ([Julians Amboko, X](https://x.com/AmbokoJH/status/1894749132440351227)).
- KRA's own framing: *"eTIMS is arguably the most talked about, most complained about, and most misunderstood of Kenya's tax systems."* ([ushuru.com](https://ushuru.com/etims-kenya-faqs-updated-2025-what-every-business-should-know/))

Provenance:
- Signal 1 (demand): KRA's 2026 expense-validation rule disallows non-eTIMS expenses; 81% of firms non-compliant; daily owner pain — [sokodirectory.com](https://sokodirectory.com/2025/11/kras-2026-e-invoice-crackdown-your-expenses-without-etims-receipts-will-become-taxable-income/), [nation.africa](https://nation.africa/kenya/business/small-businesses-suffer-as-etims-nightmare-unfolds--4585552) — 2026-05-21
- Signal 2 (feasibility): KRA shipped Manual Non-eTIMS CSV upload May 17, 2026; eCitizen Buyer-Initiated-Invoicing endpoint live; M-Pesa Daraja API exposes Till statements — [nairobiwire.com](https://nairobiwire.com/2026/05/kra-itax-upgrade-informal-expenses-etims-invoices-csv-upload-june-2026-filing.html), [developer.safaricom.co.ke](https://developer.safaricom.co.ke/) — 2026-05-21
- Signal 3 (economic): KRA already netted KSh 800M in buyer-generated invoices; Kenya MSME base 7.4M (1.56M licensed); existing accounting SaaS priced KSh 1,200–6,000/mo with none addressing the expense-defense side — [businessdailyafrica.com](https://www.businessdailyafrica.com/bd/economy/buyer-generated-tax-invoices-net-sh800m-transactions-for-kra-5328098), [msme.go.ke](https://msme.go.ke/sites/default/files/2025-03/Draft%20MSME%20Policy%202025.pdf) — 2026-05-21
- Category: Regulatory arbitrage

## 3. The opportunity

Every accounting tool sold to Kenyan SMEs (Sage, QuickBooks, Zoho Books, Xero, Cute Profit, Biashara Books, Accountabl) is built around the **sales** side of eTIMS — "we'll stamp your outgoing invoice." None of them solve the **expense** side, which is where the 2026 enforcement bites.

The actual operator workflow today: SME owner pulls an M-Pesa Till statement, sees 300 outflows that month, has to figure out which ones need a regular eTIMS invoice from a registered supplier, which qualify for buyer-initiated reverse-invoicing on eCitizen (only valid for non-VAT suppliers ≤KSh 5M turnover), and which now go on the brand-new Manual Non-eTIMS CSV. Today they pay an accountant KSh 8K–20K per return to do this by hand in Excel. The accountant hates it.

RisitiBora is the **expense-defense layer** the incumbents won't ship in 6 months: M-Pesa-native ingest → AI classifier per supplier → reverse-invoice draft pushed to supplier via WhatsApp/USSD with consent capture → ready-to-upload iTax CSV. One screen, one button, ready for June 30.

## 4. Target market

- **Primary customer:** Kenyan SME owner-operator, KSh 5M–50M annual turnover (above the KSh 5M reverse-invoicing exemption — these are the firms that MUST file with eTIMS rigor). Sectors that buy heavily from informal suppliers: hardware shops, restaurants & food businesses, salons & beauty, micro-contractors, small transport SACCOs, fashion/mtumba resellers, M-Pesa agents, small clinics, school suppliers. 1–10 employees. Owner does books or has 1 in-house bookkeeper. Geography: Nairobi, Mombasa, Kisumu, Nakuru, Eldoret first; rest of Kenya by month 6.
- **Why they buy:** A 30% tax bill on every shilling they can't defend with an eTIMS receipt — and most of their spend (rent paid via M-Pesa, vegetables, spare parts, transport) is to suppliers who don't issue one. June 30, 2026 is the first filing under the new rule. They are terrified, and so are their accountants.
- **Rough TAM reasoning:** Kenya has ~1.56M *licensed* MSMEs (KNBS/MSME Policy 2025). The KSh 5M–50M band is roughly the top 300K–400K of those — the ones with audit risk and bookkeeping discipline to pay. Even 3% capture = 10,000+ paying customers. Then layer the ~5,000 small accounting/bookkeeping firms serving them.
- **Why now for them:** The first filing under the new rule lands June 30, 2026. Every month they wait, they accumulate more undefended outflows. Returns are paid for by Q4. Their accountant will recommend a tool if one exists — there isn't one.

## 5. Product sketch (MVP)

- **One-click M-Pesa Till + bank statement import.** Pull last 90 days of outflows via Daraja API (or PDF/CSV paste for paybill users without API yet).
- **AI classifier per outflow.** For each debit, determine: (a) which supplier (M-Pesa stores name/till), (b) routing — has eTIMS / needs reverse-invoice / non-eTIMS CSV / personal-not-business.
- **Supplier roster with KRA PIN verification.** Auto-runs the supplier's PIN against the KRA iTax PIN Checker to confirm VAT status — the single most error-prone step in the Quartet/Cleartax guides.
- **Reverse-invoice drafter on eCitizen.** For eligible suppliers (non-VAT, ≤KSh 5M turnover), pre-fills the buyer-initiated invoice and sends the supplier a WhatsApp + USSD *222# nudge to consent.
- **Non-eTIMS CSV builder.** Auto-formats the new May 2026 iTax CSV (supplier name, amount, date, category, optional PIN) — one-click download.
- **eTIMS receipt inbox.** Suppliers who do issue eTIMS can WhatsApp/email the PDF; AI extracts and reconciles to the matching M-Pesa outflow.
- **June 30 readiness dashboard.** "KSh 2.3M defended / KSh 480K still exposed / 14 suppliers haven't consented." Operator's view of their audit exposure.
- **Accountant multi-client view.** A bookkeeper handling 30 clients sees a single screen per client + status.

## 6. AI angle — what's load-bearing

AI is doing the work no human wants to do: looking at 300–2,000 monthly M-Pesa outflows and classifying every one of them into one of four legal buckets (eTIMS-required, reverse-invoice eligible, non-eTIMS CSV, personal). It also normalizes informal supplier names ("MAMA NJERI FOOD," "M. NJERI MAMA MBOGA," "NJERI VEGETABLES") into a single supplier identity so the reverse-invoice flow doesn't double-issue.

Strip the AI out and you have a Google Sheet with a CSV exporter — useless against 300 outflows a month. The classifier and the supplier-deduplication are the value.

OCR layer on incoming eTIMS PDFs handles the long tail of suppliers who *do* issue but only via PDF/WhatsApp screenshot. Standard tools — Claude/Gemini vision, fine-tuned on the eTIMS receipt format which is small and consistent.

## 7. Localization angle

This is a Kenya-native play, not a localized global product. Wedges:

- **M-Pesa Daraja is the ingestion layer.** No incumbent global SaaS owns this integration depth (Sage and QuickBooks both have weak/manual M-Pesa import in Kenya).
- **eTIMS, eCitizen Buyer-Initiated-Invoicing, and the May-2026 iTax CSV are Kenya-specific regulatory surfaces.** Knowing them in detail is the moat against generic global SaaS.
- **Pricing in KSh.** Mass-market band is KSh 999–2,499/mo per SME (matches Sage/QuickBooks-Lite). Accountant tier KSh 6,999/mo for up to 25 client books.
- **Distribution via WhatsApp + USSD.** Supplier consent nudges happen on *222# — works on every feature phone in the country. Owner notifications via WhatsApp Business.
- **Swahili + English UI.** Nairobi tier-1 owners are fine in English; Tier 2/3 cities and rural shopkeepers want Swahili.

Adjacent markets if this works: Tanzania (TRA EFD), Uganda (URA EFRIS), Rwanda (EBM 2.1), Ethiopia (rolling out eTax 2026). The architecture transfers; the regulatory surface area changes.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - SME tier: KSh 1,499/mo (~$11.50/mo). Includes M-Pesa import, classifier, CSV builder, 50 reverse-invoices/mo.
  - Pro SME tier: KSh 2,999/mo (~$23/mo). Unlimited reverse-invoices, multi-Till support, Swahili WhatsApp supplier nudges.
  - Accountant tier: KSh 6,999/mo (~$54/mo) for up to 25 client books; KSh 12,999/mo for up to 75.
- **ACV:** Blended ~KSh 22,000/yr (~$170/yr) for SMEs, KSh 95,000/yr (~$730/yr) for accountants.
- **$1M ARR math:** 5,500 SME seats × $170 ARPU = $935K — plus 150 accountant firms × $730 = $110K = **~$1.05M ARR**. Plausible inside 18 months in a market of 1.56M licensed MSMEs.
- **$5M ARR math:** 25,000 SMEs + 700 firms, with Tanzania + Uganda port-overs in year 2–3. Aggressive but on-territory.
- **Expansion path:** (a) add VAT-return filing on top of the expense layer, (b) sell SACCOs and franchisors a roll-up dashboard for their member-shops, (c) bundle Daraja-powered cash-flow forecasting once we already see every Till outflow.

## 9. Go-to-market wedge — first 100 customers

The deadline does the selling. Pre-June-30 panic = the cheapest acquisition window we will ever get.

1. **The 5,000-strong accountant army.** Scrape ICPAK's member directory and the public lists of CPA firms registered as Tax Agents (KRA publishes both). Cold-WhatsApp the 1,500 firms with public numbers, offer them 60 days free + Pro pricing for the first 20 clients they onboard. Each firm = 20 SMEs. 100 firms × 1 SME = 100 paying SMEs in 4 weeks. **This is the only channel that needs to work week 1.**
2. **The 543K KRA-listed non-compliant firms.** KRA has named-and-shamed publicly. Many have published M-Pesa Tills. Scrape the Till numbers from Google Maps + Jumia + business directories, push a WhatsApp Business templated message: "Your June 30 return is at risk — here's a 10-minute fix."
3. **Sector communities on WhatsApp.** Kenya runs on WhatsApp groups: Mama Boga Suppliers Association, Kenya Hairdressers, matatu SACCOs, Gikomba traders. Buy a slot in the 30 biggest with KSh 5K–10K per blast per group. CAC test target: <KSh 800.
4. **Daily Nation / Business Daily / Citizen Digital paid op-eds.** KSh 80K–150K buys a Sunday business-section column; the eTIMS topic is editorial gold right now.
5. **KRA Huduma centres.** Position a representative outside the busiest 3 Huduma centres on the 3 days before June 30. Captive audience filing returns by hand who just discovered they have KSh 400K in disallowed expenses.

If we can't show 100 paying SMEs by July 31, 2026, the wedge isn't real.

## 10. Build complexity — justification

Medium. M-Pesa Daraja API takes ~5 weeks to get production keys (the bureaucratic gate, not the technical one — start it Day 1). eCitizen Buyer-Initiated-Invoicing has no public API: needs a headless browser flow with KRA PIN login + 2FA. The May-2026 non-eTIMS CSV format is documented and small. AI classifier is GPT/Claude-class with a few-shot prompt over M-Pesa narration strings — not novel. WhatsApp Business API + Africa's Talking SMS/USSD are off-the-shelf. Realistic v1: 12–14 weeks for a 2-person team.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | KRA-blessed workflow — RisitiBora helps comply, not evade. |
| Ethical — no harm / dark patterns | ✅ | Supplier consent is opt-in on the supplier's side; no scraping personal M-Pesa data. |
| Market exists (evidence above) | ✅ | 1.56M licensed MSMEs, 81% non-compliant, June 30 deadline. |
| 1–5 person team can build this | ✅ | 2 builders × 12–14 weeks. |
| Launchable with <$50K / ₹40L | ✅ | <$20K cash needed — mostly Daraja/eCitizen testing + WhatsApp BSP + AI API spend. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | 30% phantom-tax-bill risk, daily M-Pesa outflows, hard June 30 deadline. Hair-on-fire. |
| Demand evidence | 15 | 13/15 | Daily Nation "nightmare" coverage, KRA's own 81% non-compliance stat, named owner quotes, KRA shipped the rescue feature May 17 — confirms the agency itself sees the gap. |
| Build feasibility | 15 | 11/15 | Daraja API bureaucratic delay; eCitizen has no public API (headless browser); CSV format is new and small. 12–14 weeks not 6. |
| Distribution clarity | 15 | 12/15 | Named channels: ICPAK directory, KRA tax-agent list, sector WhatsApp groups, Huduma centres. Conversion math untested. |
| Revenue mechanics | 15 | 11/15 | KSh 1,499–2,999 SME tier benchmarked against Sage/QuickBooks-Lite. $1M needs 5,500 SMEs + 150 firms — plausible but ambitious. |
| Time to first revenue | 10 | 9/10 | Pre-sell to accountants within 2 weeks; first paid SME inside 6 weeks. The deadline IS the funnel. |
| Defensibility | 10 | 6/10 | Workflow lock-in once we hold supplier roster + consent history. Sage/Zoho can copy in 6–9 months. Regulatory expertise is a moving target. |
| **Total** | **100** | **79/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (Daraja + headless eCitizen + AI classifier + WhatsApp BSP) · `domain-expertise-required` (eTIMS rules, KRA filing mechanics, ICPAK ecosystem — needs a Kenyan tax-savvy co-founder or paid CPA advisor on retainer).

### Key assumptions to validate (3–5)

1. **Assumption:** Kenyan SMEs in the KSh 5M–50M turnover band will pay KSh 1,499/mo for an expense-defense tool. **How to test:** 30 in-person interviews across Eastleigh + Industrial Area + Gikomba in week 1, hand them a $11/mo pre-order link. Target: 8/30 say yes and pay.
2. **Assumption:** Accountants will resell to their book of 20+ SMEs. **How to test:** WhatsApp 50 ICPAK members; offer 60 days free for them and Pro pricing for clients. Target: 5/50 onboard ≥3 clients each.
3. **Assumption:** Reverse-invoicing consent rate from informal suppliers is ≥40% via WhatsApp+USSD nudges. **How to test:** Run 100 reverse-invoice requests in a controlled pilot. <40% = the CSV-only path becomes the main flow.
4. **Assumption:** M-Pesa Daraja Production access lands in <8 weeks for a Kenyan-registered company. **How to test:** Start the Daraja application Day 1 of build. <8 weeks = clean. >8 weeks = paybill manual import only, slower onboarding.

### Risk flags

1. **Regulatory risk:** KRA could change the non-eTIMS CSV format or pull the feature. Mitigation: stay close to KRA, build the eTIMS-receipt-inbox path in parallel so the product still works without the CSV.
2. **Platform dependency:** Heavy on M-Pesa Daraja + eCitizen. If Safaricom restricts Daraja or eCitizen adds CAPTCHA hardening, ingestion breaks. Mitigation: support manual PDF upload from Day 1.
3. **Incumbents wake up:** Sage, Zoho Books, QuickBooks could ship the same workflow in 6–9 months. Mitigation: outrun them on Kenya-native distribution + the accountant channel; price below them.
4. **Internet/connectivity:** KAM itself flagged the 32% rural internet penetration. Mitigation: USSD fallback for supplier consent; offline CSV download for upload at the next internet point.

## 14. Structured verdict

```
Score:                  79/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Kenyan technical founder + CPA/tax co-founder or advisor.
                        Daraja experience a plus.
Time to revenue:        4–6 weeks (paid pilot via accountant channel)
Capital to launch:      $15K–25K (~KSh 2M–3.3M) for 14-week v1 incl. AI APIs,
                        WhatsApp BSP setup, Daraja onboarding, 2 builder months.
Top 3 assumptions to validate first:
  1. SMEs in KSh 5M–50M band will pay KSh 1,499/mo — 30 owner interviews + pre-order link.
  2. ICPAK accountants will channel-resell — WhatsApp 50, target 5 onboarding ≥3 clients each.
  3. ≥40% supplier consent rate on WhatsApp+USSD reverse-invoice nudges — 100-request pilot.
Kill criteria:
  - Abandon if <5/30 SMEs in interview round will pre-pay KSh 1,499/mo.
  - Abandon if <3 of 50 ICPAK firms onboard in the first 30 days post-launch.
  - Abandon if supplier consent rate stays <25% after two consent-flow iterations.
  - Abandon if Sage Kenya or Zoho Books ships expense-side eTIMS reclaim before our v1.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape ICPAK directory + the KRA Tax Agent list. Pull the 200 firms with public WhatsApp/phone. Build a one-pager landing page (Kenyan domain, KSh pricing, June 30 countdown).
- **Day 3:** WhatsApp 50 accountants with a 4-line pitch + Calendly. Target 8 booked calls.
- **Day 4–5:** 8 calls. Push for two concrete commitments — (a) "would you channel-resell to your clients at a 30% rev share?" (b) "would you pay KSh 6,999/mo if v1 shipped July 1?" Capture verbatim objections.
- **Day 6:** Walk Eastleigh + Industrial Area. 15 in-person SME owner conversations. Show the mock M-Pesa-import → CSV flow. Ask for a KSh 100 pre-order deposit (refundable). Measure: deposits taken.
- **Day 7:** Decide. **Go signal = ≥3 of 8 accountants commit + ≥4 of 15 SMEs leave a deposit.** Anything less, kill the wedge or rework pricing before committing the 14-week build.
