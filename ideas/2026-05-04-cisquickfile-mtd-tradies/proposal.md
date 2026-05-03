---
title: CISQuickFile — WhatsApp MTD-ITSA copilot for UK CIS tradies
slug: cisquickfile-mtd-tradies
date: 2026-05-04
category: Compliance SaaS / UK Self-Employed Tradespeople (CIS Subcontractors + Sole Traders)
complexity: Medium
score: 79
verdict: GO
confidence: Medium
oneLiner: WhatsApp-first MTD-ITSA bookkeeper for UK plumbers, sparkies, and builders panicking about the August 7 quarterly deadline.
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [WhatsApp-first, AI-agent, Compliance-driven, SMB, TradeTech, CIS, MTD-ITSA, Solo-builder]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# CISQuickFile — WhatsApp MTD-ITSA copilot for UK CIS tradies

## 1. One-liner

WhatsApp-first MTD-ITSA bookkeeper for UK plumbers, sparkies, and builders panicking about the August 7 quarterly deadline.

## 2. Trend signal — why now?

MTD for Income Tax Self-Assessment went **mandatory on 6 April 2026** for UK sole traders and landlords with qualifying income above £50,000. ~780,000 people in scope. As of 10 April 2026, **only 28% had registered** — meaning ~562,000 mandated taxpayers are behind on a regime where the **first quarterly deadline is 7 August 2026**. The Register reported the figure; HMRC has confirmed letters will go out to non-registrants. The 2026/27 year is a soft-landing (no penalty points), but from April 2027 fines start at £200 after four late submissions, and the threshold drops to £30,000 (catalogue doubles) — and again to £20,000 in April 2028.

47% of accountancy firms surveyed by TaxCalc plan to **raise fees** for MTD clients; estimates put the increased load at "tens of millions" across 200,000+ unrepresented sole traders. Sole tradies on Electricians Forums openly complain that FreeAgent at £24/mo is "steep when all I need is CIS calculator, receipt photos, and a quarterly HMRC export." MoneySavingExpert threads are full of variants of "I've done my own taxes for 20 years, now I have to pay for software."

The market reaction so far is desktop-/app-shaped: Coconut, FreeAgent, Pie, TaxNav, TapTax, Sage Individual, QuickFile. **WhatsTax** is the one obvious WhatsApp-shaped competitor — but as of May 2026 it is still pre-launch (waitlist + "pricing announced closer to launch"). **Manano** does WhatsApp invoicing/expenses for tradies but is not HMRC MTD-ITSA-recognised and doesn't do quarterly submissions.

The product the panicking 562K need is the one nobody has shipped yet: an HMRC-recognised, CIS-aware, WhatsApp-native filing agent priced like a phone bill, not like an accounting platform.

```
Provenance:
  - Signal 1 (demand): "Fewer than 3 in 10 register for HMRC's Making Tax Digital shake-up" — https://www.theregister.com/2026/04/10/mtd_hmrc/ — 10 April 2026
  - Signal 2 (feasibility): Coconut HMRC-recognised announcement + HMRC MTD-ITSA OAuth API GA — https://www.getcoconut.com/knowledge-hub/hmrc-approved-mtd-software — 2026
  - Signal 3 (economic): "More than 200,000 businesses enter MTD without an accountant" + 47% of firms raising fees — https://www.bytestart.co.uk/news-insights/200000-businesses-mtd-no-accountant/ — 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

A regulatory deadline just bit ~780K people, the majority of whom haven't moved. The incumbent shape — desktop accounting apps (FreeAgent, Coconut, Xero, QuickBooks) — assumes the user wants to "log into a dashboard." Tradies don't. Their phone is open all day for two things: customers on WhatsApp, and the bank app. Receipts arrive as photos in WhatsApp ("did you get that one mate?"). Tools like Tradify and Manano have already proven the WhatsApp/voice surface works for trades.

The crack in the market: **HMRC-recognised + WhatsApp-native + CIS-aware**. WhatsTax is targeting the WhatsApp surface but pre-launch and not trade-niched. Coconut/FreeAgent are HMRC-recognised but ask the user to learn an app. Nobody has stitched the three together for the specific persona — the £50K-£100K CIS subcontractor whose monthly admin is a plastic bag of B&Q receipts and an Excel sheet his sister-in-law fills in.

The wedge is **"forward your receipts to one number, we file the quarterly for you, £15/mo"**. AI does the categorisation, CIS deduction matching, and pre-fills the HMRC submission. User confirms via WhatsApp button. Done.

## 4. Target market

- **Primary customer:** UK self-employed tradespeople — plumbers, electricians, gas engineers, builders, painters, decorators, roofers, landscapers, mechanics — operating as sole traders or under CIS, with annual turnover £50K-£100K. Solo or with 1-2 helpers. Phone-only digital. Currently shoebox + accountant or shoebox + spreadsheet.
- **Why they buy:** "I'm gonna miss the August deadline. My accountant just bumped me to £900/yr. I don't want to learn FreeAgent. Just take my receipts off WhatsApp and file the bloody thing." Direct quotes from forums:
  - *"FreeAgent costs £24/month, which seems steep when I only need CIS calculator, receipt photos, and quarterly HMRC export."* — Electricians Forums thread on MTD prep
  - *"I've been doing my own accounts and filing returns online for 20 years and find it unreasonable to now have to pay for software."* — MoneySavingExpert MTD discussion
  - *"My records live across bank statements, email receipts, WhatsApp messages, and a spreadsheet."* — quoted in Dext MTD ITSA guide
  - HMRC's own framing: a self-employed plumber + landlord faces 8 quarterly updates per year + final declaration — "it can feel challenging" (Sage MTD blog)
- **Rough TAM reasoning:** ~780K sole traders & landlords in scope from April 2026 (>£50K). Of those, the trades-shaped persona is conservatively ~25-30% (~200K-230K) — UK Construction Industry Scheme has 250K+ active CIS subcontractors, many already over £50K. Add electricians, plumbers, mechanics, landscapers outside CIS. April 2027 the threshold drops to £30K → roughly doubles the tradie cohort.
- **Why now for them:** Quarterly deadlines hit 7 Aug 2026, 7 Nov, 7 Feb, 7 May 2027. The WhatsApp letter from HMRC is real — they're chasing the 562K who didn't register. Soft-landing year ends April 2027 → real fines start. £30K threshold drop in April 2027 = big cohort moves into scope mid-year-2 of MTD.

## 5. Product sketch (MVP)

- Send a WhatsApp number any business receipt (photo, PDF, voice note). AI extracts amount, VAT, supplier, date, suggested HMRC expense category.
- Forward customer-paid invoices and CIS payment & deduction statements (PDS) the same way; product reconciles CIS deductions against contractors automatically.
- Ledger lives in the cloud; user never logs in. Weekly summary on WhatsApp: "this week — £642 in, £180 out, 3 receipts unread." Reply with corrections in plain English.
- **One-tap quarterly submission**: 10 days before each MTD deadline, bot WhatsApps "Q1 ready: £14,200 turnover, £3,180 expenses, £620 CIS deductions. Reply YES to file with HMRC." User taps once. Submission goes via HMRC OAuth.
- HMRC MTD-ITSA recognised software listing (this is the build cost — see complexity section).
- Mileage log via voice ("just did 42 miles to Hounslow"). Bank feed (Open Banking) optional add-on.
- End-of-year: bot pre-fills the Final Declaration; user signs off via WhatsApp; £49 add-on.

## 6. AI angle — what's load-bearing

AI does the work, not decoration:

1. **Receipt OCR + categorisation** at GPT-4-class accuracy with HMRC SA103F category mapping. Without this you need a human bookkeeper at £25/hr — the entire unit economics collapse.
2. **CIS deduction matching** — parsing PDS PDFs against invoices, reconciling 20% deductions against gross. This is the "I hate spreadsheets" job.
3. **Conversational corrections** — "actually that B&Q receipt was for the Hounslow job, not materials" → ledger updates. No app, no menus.
4. **Quarterly summary generation + plain-English explanations** — turning 90 days of mess into a 4-line WhatsApp message a plumber understands.

Strip the AI out and you're back at a manual-data-entry app. The AI is the product.

## 7. Localization angle (if any)

This **is** the localization angle. Generic global accounting tools (Xero, QuickBooks) treat MTD as a feature on a much bigger product. A UK-only, MTD-ITSA-only, WhatsApp-only, CIS-aware build is the local play. UK-specific elements:

- **MTD-ITSA HMRC API + recognised software listing** — UK regulatory requirement, not transferable.
- **CIS (Construction Industry Scheme)** — a uniquely UK tax-deduction-at-source regime; competitors lump it into "expenses."
- **WhatsApp dominance among UK tradies** — different from US (where SMS rules) or India (where it's true cross-segment).
- **Pricing** — £15/mo lands neatly under the £24/mo FreeAgent gripe and crushes £600+/yr accountant fees.

April 2027 the £30K threshold and again £20K in 2028 = same regulatory engine drives growth. Could later extend to Ireland (Revenue's mTax) but not without rework. Don't over-extend; the UK alone is enough for £1M-£5M ARR.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** £15/mo flat (£12 with annual upfront). Final-Declaration add-on £49/year. Bank-feed add-on £5/mo.
- **ACV:** ~£200/year average customer (£180 base + ~£20 add-ons amortized).
- **Math to £1M ARR:** 5,556 paying tradies × £180 = £1M. That's ~0.7% of the 780K mandated cohort. Achievable in ~12 months with the deadline panic tailwind.
- **Math to £5M ARR:** 27,800 paying tradies. Threshold drop to £30K in April 2027 expands TAM to ~1.4M+. 5M ARR = ~2% of that. Plausible by month 24.
- **Expansion path:** Final-declaration add-on (every customer, once a year). Banking integrations. Limited-company tier (when sole trader incorporates — common at £80K+). Partner channel: small accountants who want a "tech offload" for cheap clients (revenue share).

## 9. Go-to-market wedge — first 100 customers

Concrete, named channels — the August 7 deadline IS the marketing.

- **Trade Facebook groups + forums.** Specific named: Electricians Forums (~35K members on the MTD thread alone), Plumbers Forums UK, Builders Talk, "UK Tradesmen" / "UK Plumbers" / "UK Sparks" Facebook groups (10-50K members each). Pin a value-bomb post: "£15/mo, all-WhatsApp, August 7 deadline-ready, free until you hit submit." Comment-funnel driven. Realistic 3-5% click → 30% sign-up of clickers in the panic week.
- **Trade-counter partnership pilots.** Walk into 20 City Plumbing, Screwfix, and CEF branches in Greater London with a printed flyer + QR code. £100 trade-counter manager spiff per signup. Tradies see a flyer at the till the morning they're buying £600 of copper. Realistic 2 signups/branch/week × 20 branches × 4 weeks = 160 signups for £16K.
- **Cold WhatsApp from accountant referral lists.** Identify 50 small accountancy firms that posted "we won't take new MTD clients" or hiked fees. Offer them a referral commission (£20/customer) for clients they're shedding. They have lists — they need offload.
- **TikTok / Instagram Reels — "MTD panic" content.** Tradesman archetypes ("yer accountant just doubled your bill?"). Cheap to produce (founder + tradies-as-actors). Tradify and similar built early audiences here.
- **Cold post to specific Reddit threads:** r/UKTradesmen (~25K), r/UKPersonalFinance (770K, MTD posts going viral), r/Plumbing UK threads. Founder-narrated posts, not promo-shaped.

The deadline does the convincing. We just have to show up in the moment of pain.

## 10. Build complexity — justification

**Medium.** Off-the-shelf stack: WhatsApp Business Cloud API, GPT-4-class vision/OCR, Postgres, HMRC MTD-ITSA OAuth (live + documented). The two long poles:

1. **HMRC software recognition listing** — bureaucratic, requires sandbox tests + production approval. Multiple recent vendors (TapTax, TaxHeaven, Pie) cleared it in <6 months. Not a research problem; a checklist problem.
2. **CIS deduction reconciliation logic** — needs domain expertise (CIS PDS format, 20% deductions, gross-payment status edge cases). 1 month of build with a UK chartered-accountant advisor.

A 2-3 person team (1 backend, 1 mobile/integrations, 1 founder/domain) ships v1 in 4-5 months. Soft launch June 2026, full launch by August deadline. Submission feature may need the soft-landing year as a buffer if HMRC listing takes the long end of estimates — acceptable since fines don't bite until April 2027.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | HMRC has a published recognition route; MTD-ITSA APIs are public |
| Ethical — no harm / dark patterns | ✅ | Helps users meet a legal obligation cheaper than incumbents |
| Market exists (evidence above) | ✅ | 780K mandated, 562K behind, public Register article |
| 1–5 person team can build this | ✅ | Off-the-shelf stack + a known regulatory listing process |
| Launchable with <$50K / ₹40L | ✅ | Build + recognition-application + WhatsApp Cloud API costs all fit |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire compliance with a real fine schedule and ~562K mandated taxpayers behind. Tradies actively avoid software they don't understand — pain is daily, not abstract. Not 19+ because soft-landing year softens the immediate fine. |
| Demand evidence | 15 | 13/15 | Hard signals: The Register stat (28% registered), 200K+ unrepresented per TaxCalc, 47% of accountants raising fees, multiple forum threads with verbatim complaints. Pre-launch competitor (WhatsTax) is itself a demand signal. |
| Build feasibility | 15 | 11/15 | Off-the-shelf stack but the HMRC software-recognition listing is a real 8-12 week process; CIS logic adds modest complexity. Doable but not a 4-week MVP. |
| Distribution clarity | 15 | 12/15 | Specific named channels — trade forums, City Plumbing/Screwfix counter, accountant offload referrals. Founder needs to actually go stand in trade counters. |
| Revenue mechanics | 15 | 12/15 | £15/mo nuts-and-bolts pricing, ACV ~£200, 5.5K customers = £1M. Pricing is benchmarked off a verbatim "I'd pay less" complaint. |
| Time to first revenue | 10 | 8/10 | Soft launch June 2026 → revenue by July (manual-assist version while HMRC listing pending). Submissions live by August deadline. |
| Defensibility | 10 | 6/10 | Soft moats: HMRC recognition is a permission gate; WhatsApp-shaped UX is a habit; tradie brand. Nothing patented. Coconut, FreeAgent, or WhatsTax could clone in 6 months. Speed and niche execution win. |
| **Total** | **100** | **79/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (or close advisor — UK ACCA/CTA chartered accountant who knows CIS); `sales-heavy` (channel partnerships, in-person trade-counter walkabouts).

### Key assumptions to validate (3–5)

1. **Assumption:** UK tradies will trust a WhatsApp-only flow for filing tax — not insist on a "real app." **How to test:** 30 in-person interviews at 5 City Plumbing/Screwfix branches in Greater London + concierge MVP for 20 paying tradies (manual back-office, WhatsApp front-end) by July 2026.
2. **Assumption:** £15/mo is the right price point — not £9 (too commodity), not £25 (FreeAgent territory). **How to test:** Van-Westendorp pricing on the same 30 interviews; A/B landing page test on £9 / £15 / £19 / £25 with paid Facebook traffic in trade groups.
3. **Assumption:** HMRC software recognition is achievable in <12 weeks for a focused team. **How to test:** Talk to 2 vendors who completed it in 2025 (TapTax, TaxHeaven); read HMRC developer docs end-to-end before committing capital.
4. **Assumption:** Trade-counter and accountant-offload channels both produce signups at <£40 CAC. **How to test:** 4-week pilot at 5 trade-counter branches with paid spiffs; outreach to 50 small accountancy firms on a referral commission basis.
5. **Assumption:** CIS deduction matching is a meaningful wedge vs generic apps, not just feature-bait. **How to test:** Ask 30 CIS subcontractors how they currently reconcile PDS — if 80%+ say "I don't / my accountant does it / it's a mess", confirmed.

### Risk flags

1. **WhatsTax launches first and closes the obvious WhatsApp gap.** Mitigation: niche harder (CIS-aware, trade-counter distribution) + ship faster.
2. **HMRC recognition slippage.** If listing takes 16+ weeks, August deadline is missed; concierge MVP and an emergency-deadline manual filing (charge £49 one-shot) bridges revenue. The soft-landing year (no penalty points) cushions the customer.
3. **Trade-counter partnerships fail to convert.** Tradesmen famously skim past flyers. Mitigation: lean on Facebook/Reddit channel which has zero distribution cost, and use the trade-counter as a brand-awareness play, not direct response.
4. **Big incumbents (FreeAgent / NatWest, Coconut / Zempler) bundle MTD for free with bank accounts.** They already are. Defence: tradies still hate the UX; WhatsApp surface is the durable wedge. Plus they bundle the £24/mo platform, not a niche WhatsApp tool.

## 14. Structured verdict

```
Score:                  79/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       UK technical founder + chartered-accountant advisor (ACCA/CTA, CIS-experienced); 1 backend, 1 mobile/integrations, 1 founder/domain
Time to revenue:        8-10 weeks (concierge MVP) → 16-20 weeks (HMRC-recognised auto-submission)
Capital to launch:      £30-40K (~$40-50K) — covers 5 months of build + WhatsApp Cloud API + HMRC sandbox + initial paid pilots
Top 3 assumptions to validate first:
  1. Tradies will pay £15/mo for WhatsApp-only filing — 30 in-person interviews + concierge MVP with 20 paying users
  2. HMRC software recognition is achievable in <12 weeks — call 2 recently-listed vendors and confirm process
  3. Trade-counter / accountant-offload channels produce sub-£40 CAC — 4-week pilot at 5 branches + 50 accountant outreach calls
Kill criteria:
  - Abandon if <40% of 30 interviewed tradies say they would pay £15/mo for a WhatsApp-only MTD service
  - Abandon if HMRC software-recognition route takes >16 weeks based on actual conversations with previously-listed vendors
  - Abandon if WhatsTax launches a CIS-aware GA product priced ≤£15/mo before our v1 ships
```

## 15. Next step — 1-week validation sprint

- **Day 1-2:** Stand outside 5 trade counters (City Plumbing / Screwfix / Toolstation, Greater London) at 7am. Pitch the £15/mo WhatsApp MTD idea to 30 tradies with a one-page mockup. Capture: would they pay, what's their current setup, do they file via accountant, are they in CIS.
- **Day 3:** Cold-call/email 50 small accountancy firms (Cheshire/Yorkshire/Midlands — outside London). Pitch as "client offload" for tradie clients earning £50-100K. Ask: would you refer for £20/conversion?
- **Day 4:** Phone interviews with 2 vendors recently HMRC-recognised for MTD-ITSA (TapTax, TaxHeaven) — get the actual process, time, gotchas.
- **Day 5:** Ship a £15 landing page (WhatsApp deeplink, "join the August 7 deadline waitlist") + £200 paid traffic into 3 named UK tradie Facebook groups. Decide go/no-go on 3 thresholds:
  - **GO** if ≥40% of 30 interviewed tradies say they'd pay £15/mo, AND ≥3 of 50 accountants say they'd refer, AND landing-page email signup CPL is <£10.
  - **PASS** otherwise — re-shape or kill.

The whole sprint is falsifiable: numeric thresholds, concrete people pitched, public-channel metrics.
