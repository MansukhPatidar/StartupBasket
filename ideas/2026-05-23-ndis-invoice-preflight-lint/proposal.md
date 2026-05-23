---
title: "ClaimGreenlight — pre-submit lint for NDIS invoices"
slug: ndis-invoice-preflight-lint
date: 2026-05-23
category: HealthTech / Australia NDIS Sole-Trader Providers
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Forward an NDIS invoice draft and catch line-item, price-cap, and service-agreement errors before the plan manager rejects it."
tags:
  vertical: HealthTech
  model: SaaS
  geography: Global
  secondary: [Compliance-driven, SMB, Solo-builder, Email-first, Australia]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 11
  revenue: 10
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ClaimGreenlight

## 1. One-liner

Forward an NDIS invoice draft and catch line-item, price-cap, and service-agreement errors before the plan manager rejects it.

## 2. Trend signal — why now?

Three things converged in the last 12 months that turned NDIS invoice errors from "annoying" into "you don't get paid this week":

- **Plan managers can no longer help.** Multiple Australian plan-management providers confirm: "Plan managers Australia-wide can no longer provide NDIS-funded support to providers for preparing or correcting invoices. Providers now need to ensure invoices are compliant before submission." That hand-holding used to absorb sole-trader errors silently — now every typo bounces back to the provider.
- **New 2025-26 Pricing Arrangements (PAPL) replaced the old Price Guide on 24 November 2025.** After 31 July 2025, the generic "Other Professional" line item was eliminated; allied health providers must bill under their exact registered profession code. Invoices using legacy 2024-25 codes are auto-rejected.
- **The scheme is at $46.3 billion annually across ~269,000 providers.** A big chunk of those are sole-trader support workers and 1-3 person allied health practices who invoice in Word, Excel, or a free template, then email a PDF to the plan manager.

The pain is acute and recurring. Practitioner blog Tweed Coast Plan Management lists "incorrect rates, non-fundable services, duplicate claims, wrong plan period, calculation errors" as the standard rejection menu. Imploy says "staff must spend hours chasing, correcting, and resubmitting invoices." Cash flow on rejected invoices stalls 30-60 days per plan-manager industry coverage.

Provenance:
  - Signal 1 (demand): "Plan managers Australia-wide can no longer provide NDIS-funded support to providers for preparing or correcting invoices" — myplanmanager.com.au "Little Black Book of Line Items" — observed 2026-05-23
  - Signal 2 (feasibility): NDIS PAPL 2025-26 published 24 Nov 2025 with structured support-item catalogue and registered-profession-specific codes; LLMs + cheap OCR can now parse PDF invoice + service agreement and cross-check against catalogue — ndis.gov.au pricing-arrangements — observed 2026-05-23
  - Signal 3 (economic): $46.3B NDIS scheme, ~269,000 providers, multi-vendor PMS market (Splose, Brevity, GoodHuman, Lumary, Flowely all in market with $5-150+/mo per user pricing) — vccg.com.au/state-ndis-provider-market-2025-industry-report; flowely.com.au; goodhuman.me — observed 2026-05-23
  Category: Regulatory arbitrage

## 3. The opportunity

Sole traders and 1-3 person allied health practices don't want a full practice-management system. They already have Xero, Halaxy, or a Word template. What they want is a tiny checker that reads the invoice they're about to send and tells them — *before* it bounces — "your line item 15_055_0128_1_3 doesn't exist in this participant's service agreement, you've coded weekday rate for a Saturday session, and the unit price is $4.20 over the PAPL cap."

Incumbents fall into three buckets:
- **Full PMS** (Splose, Brevity, Lumary, GoodHuman, ShiftCare) — replace your whole stack, $44-150+/mo, way more than a sole trader wants.
- **Free templates** (Sole App, ShiftCare, NDSP, Leap in!) — they give you the structure, they don't validate anything.
- **Validator-shaped tools** — Flowely (desktop, pre-launch, paid trial), AussieSmart NDIS Invoice Validator (free Beta, price+code only). Neither does service-agreement cross-check; neither lives in the inbox where invoices already get sent.

Wedge: keep the customer's existing invoice template, sit in the email flow, validate against the *specific participant's service agreement* (not just the global catalogue), price at sole-trader budgets ($19-39/mo).

## 4. Target market

- **Primary customer:** NDIS sole-trader support workers and 1-3 person allied health practices (OT, physio, speech, psychology, exercise physiology) operating as unregistered providers serving self- and plan-managed participants. Australia, $80-280K annual billing, invoices 5-40 participants/month.
- **Why they buy:** Their cash flow is hostage to a 9-digit NDIS number, a 12-character support item code, and the right time-of-day variant. One rejected invoice = 2-6 weeks of float on $400-2,000 they've already earned. Plan managers explicitly told them in 2026: "fix it yourself before you send."
- **Rough TAM:** ~269,000 NDIS providers; conservatively 80,000-120,000 are sole traders or micro-practices invoicing manually. Capture 2% at $29/mo = $700K-$835K ARR; 5% = $1.7M-$2M ARR; 10% = $3.5M-$4.2M ARR. Plenty of headroom under $5M.
- **Why now for them:** PAPL 2025-26 rewrote line items 24 Nov 2025; "Other Professional" codes died 31 July 2025; plan managers stopped fixing invoices 2026. Three policy hits in 12 months = providers actively googling for help.

## 5. Product sketch (MVP)

- **Email forward inbox.** Provider drafts invoice in Word/Xero/their template, then forwards it as a PDF attachment (or pastes line items in the body) to `check@claimgreenlight.com.au`. Reply within 30 seconds: ✅ green-light or ❌ list of issues with the exact fix.
- **Service-agreement on file.** Provider uploads each participant's signed NDIS service agreement once; ClaimGreenlight extracts the agreed line items, hours, rates, and plan-period dates and stores them.
- **Pre-flight checks.** Line item code exists in current PAPL ✅ • Code matches provider's registered profession ✅ • Unit price ≤ PAPL cap for that state/remote tier ✅ • Time-of-day variant matches session timestamp ✅ • Date inside the participant's plan period ✅ • Code matches the participant's service agreement ✅ • No duplicate of an invoice already sent ✅
- **Reject-reason translator.** Paste in a plan manager's rejection email and ClaimGreenlight tells you in one line what to change before resending. (Educates the customer; doubles as lead magnet.)
- **Plan-period calendar.** Each participant's plan start/end visible in a simple list; pings the provider 14 days before expiry so they don't invoice past it.
- **Web dashboard** for the 30% who'd rather paste than forward, and for monthly summary.
- **WhatsApp inbound (Phase 2).** Send a photo of a handwritten timesheet; we OCR + draft a compliant invoice.

## 6. AI angle — what's load-bearing

The LLM does the boring stuff a human plan-manager admin used to do:
- Parse PDF invoice (OCR + structured extract: ABN, participant NDIS#, line items, dates, units, rates).
- Parse the participant's service agreement (line items, agreed hours, rates, plan period).
- Cross-reference both against the NDIS PAPL catalogue (publicly published).
- Generate a plain-English fix list.

Strip the AI and you're back to a hand-maintained rules engine plus humans reading PDFs. The catalogue has ~700 line items, each with state/remote tier variants and time-of-day variants — that's the kind of fuzzy-but-structured matching where modern LLMs eat traditional rules engines.

## 7. Localization angle (if any)

This is an Australia-only play by definition — NDIS is a national scheme with no overseas analog of the same structure. The "localization" is that the entire product is built around the PAPL catalogue, AHPRA registered-profession mapping, and Australian time-zone/public-holiday rules. A US/UK clone wouldn't exist. The Australia-specificity *is* the moat — generic SaaS won't bother.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - Solo tier: $19/mo for up to 10 participants on file, 50 invoice checks/mo.
  - Practice tier: $39/mo for up to 30 participants, unlimited checks, 2 seats.
  - Small clinic: $89/mo for up to 100 participants, unlimited seats.
- **ACV:** Blended ~$340/yr (mostly Solo + Practice).
- **Math to $1M ARR:** 2,940 paying customers × $340/yr ≈ $1M. Out of ~80-120K sole-trader / micro-practice TAM, that's 2.5-3.7% penetration.
- **Math to $5M ARR:** 14,700 customers, ~12-18% penetration of the same segment — needs strong word-of-mouth + Facebook-group presence, not impossible but not guaranteed.
- **Expansion path:** Add WhatsApp timesheet → invoice generation, add Xero/MYOB sync (push the cleaned invoice straight to your accounting), add plan-period budget tracker showing how much of each participant's funding is left. Each layer pushes Solo customers up to Practice tier.

## 9. Go-to-market wedge — first 100 customers

- **Targeted Facebook-group outreach.** There are large communities like "NDIS Independent Support Workers" and "Participants Engaging Independent Providers" (50K+ members across the major ones). Post the free "Why was my invoice rejected?" decoder tool, link to a free trial. The Facebook group "Need help with NDIS invoicing and item line codes" alone is full of leads.
- **SEO ambush of rejection-code searches.** Build a public, indexable page per NDIS rejection code (C09, C14, V31, S01, etc.) with "what it means + how ClaimGreenlight prevents it." This is a hand-and-glove fit for desperate Google traffic.
- **Allied-health micro-influencers.** Pay 5-10 OT/physio/speech sole-trader content creators on Instagram and TikTok (Australia has a healthy NDIS-creator scene) for "how I stopped getting paid late" video reviews.
- **Plan-manager referral kickback.** Plan managers hate processing rejected invoices as much as providers hate getting them. Offer plan managers a co-branded "submit-ready" badge — they recommend ClaimGreenlight to providers whose invoices they keep rejecting. 20% rev share for 12 months. Two or three plan-manager partnerships ≈ thousands of warm leads.
- **Whirlpool + Reddit r/NDIS organic.** Show up where providers complain. Reply with the free decoder; soft-pitch the paid tier.

100 paying customers from ~3,000 trial signups in 90 days is the realistic shape.

## 10. Build complexity — justification

Low. Off-the-shelf stack: web app + email-ingest service + PDF OCR + LLM API + Postgres for participant/service-agreement storage. The NDIS PAPL catalogue is a public CSV-style download that gets refreshed quarterly — straightforward to ingest. No model training, no proprietary data acquisition. Solo founder + 1 part-time engineer ships v1 in 10-12 weeks; service-agreement parsing + edge-case rules eat most of the time.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only validation tool, not a registered NDIS provider itself |
| Ethical — no harm / dark patterns | ✅ | Helps providers comply with public pricing rules |
| Market exists (evidence above) | ✅ | $46.3B scheme, ~269K providers, multiple existing paid PMS competitors |
| 1–5 person team can build this | ✅ | Off-the-shelf stack, 10-12 weeks to v1 |
| Launchable with <$50K / ₹40L | ✅ | ~$15K LLM credits + dev costs + hosting for year 1 |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Cash flow held hostage by typos. Recurring weekly. Sole traders feel it directly in their own bank account. Not quite hair-on-fire because workarounds exist (just resubmit), but the 30-60 day float is real. |
| Demand evidence | 15 | 12/15 | Multiple practitioner blogs name rejection as the dominant pain; competitors exist at every price point (Flowely launching, AussieSmart in beta, full PMS up-market); free-template SEO is enormous; Facebook groups full of "help me code this" posts. Lacking: direct verbatim Reddit/Whirlpool customer quotes (most NDIS-provider chatter happens in private FB groups). |
| Build feasibility | 15 | 13/15 | Off-the-shelf APIs throughout. The one tricky bit is OCR + line-item extraction across the long tail of provider invoice templates — that's a 4-6 week tail of robustness work, not a research problem. |
| Distribution clarity | 15 | 11/15 | Facebook groups, plan-manager partnerships, and rejection-code SEO are all concrete and named. Conversion math is realistic but not pre-validated. |
| Revenue mechanics | 15 | 10/15 | Pricing benchmarked vs Splose ($4.90/wk = ~$21/mo) and ShiftCare ($9/user/mo) — competitive and below full-PMS norms. $1M needs 2.5-3% penetration of TAM — achievable. $5M needs 12-18% — harder, expansion features carry the back half. |
| Time to first revenue | 10 | 8/10 | 7-day free trial → paid in week 2 is standard SaaS. First 10 paid customers within 4-6 weeks of public launch with a working free decoder tool driving traffic. |
| Defensibility | 10 | 4/10 | The product is copyable. Flowely is shipping a similar shape on desktop. Defensibility is execution + a tight participant-service-agreement data layer that compounds the longer a provider uses the tool. Low score is honest — this is a speed-and-distribution race, not a moat play. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

A solo technical founder can ship the v1, but customer development needs at least one founder spending weeks with NDIS providers — joining their Facebook groups, reading service agreements, understanding why "Capacity Building" vs "Core Supports" matters for line-item selection. Either a co-founder in the sector or a paid domain advisor (ex-plan-manager admin) is essential.

### Key assumptions to validate (3–5)

1. **Assumption:** Sole-trader providers will pay $19-39/mo for a pre-flight check rather than absorb rejections for free. **How to test:** Build the free email-decoder for rejection codes in week 1, drive 500 free users via Facebook-group posts, measure conversion to a $19/mo "now validate before you send" upgrade at 30, 60, 90 days. Need ≥3% trial→paid.
2. **Assumption:** Email-forward as a channel beats "log in and paste." **How to test:** Ship both ingestion paths from day 1, instrument which gets used. If <60% of validations come via email forward, the value prop changes.
3. **Assumption:** Plan managers will refer in exchange for kickback. **How to test:** 5 plan-manager partnership conversations in month 2. Need ≥2 willing to pilot a co-branded badge for a 90-day rev-share trial.
4. **Assumption:** The PAPL + service-agreement cross-check catches enough errors to be felt. **How to test:** Run silent validation across 50 historic invoices from 5 friendly providers (with permission); measure how many ClaimGreenlight would have caught vs how many were actually rejected. Need ≥70% catch rate to claim "fewer rejections" honestly.
5. **Assumption:** Flowely's desktop launch doesn't capture the market first. **How to test:** Monitor Flowely launch traffic, pricing, and review velocity for the first 90 days post-launch. If Flowely hits 1,000+ paying users at competitive price before our public beta, reassess differentiation.

### Risk flags

1. **Regulatory risk — scheme reform.** The NDIS is under permanent political renegotiation (new framework introduced 2026). A reform that simplifies invoicing (e.g., NDIS-portal-only direct claims) erodes the product's reason to exist. Watch quarterly NDIS legislation news.
2. **Platform dependency — PAPL parsing.** NDIS publishes the catalogue as PDFs and spreadsheets that aren't versioned cleanly. A breaking format change requires hours of catalogue-rebuilding per cycle. Mitigation: maintain a manual fallback and a quarterly catalogue-refresh runbook.
3. **Competitive risk — Flowely first-mover.** Flowely is pre-launch desktop with similar validator framing. Speed-to-paid-customer matters; if Flowely captures the channel-savvy provider segment before our launch, we're fighting for scraps.
4. **Channel dependency — Facebook groups.** A lot of distribution leans on private Facebook communities. If Meta further throttles group-post reach or owners crack down on commercial posts, GTM stalls.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Solo technical founder + paid NDIS domain advisor (ex-plan-manager or allied-health sole trader)
Time to revenue:        6-8 weeks from public beta launch
Capital to launch:      ~$15K AUD ($10K USD) — LLM credits, hosting, domain, ABN/insurance
Top 3 assumptions to validate first:
  1. ≥3% conversion from free rejection-code decoder to $19/mo trial within 90 days
  2. Email-forward is the dominant ingestion path (>60% of checks)
  3. Catch-rate ≥70% across a backtest of 50 historic rejected invoices
Kill criteria:
  - Abandon if <100 paying customers by month 6 post-launch
  - Abandon if Flowely (or a similar validator) reaches 2,000+ paid users with parity feature set before our public beta
  - Abandon if NDIS publishes a portal-direct claim flow that lets sole traders submit straight to NDIA, bypassing plan managers
```

## 15. Next step — 1-week validation sprint

- **Day 1-2:** Recruit 8-12 NDIS sole-trader providers from Facebook groups for 30-minute paid interviews ($50 voucher each). Ask: how often does an invoice get rejected; how much float does each rejection cost you; what would you pay for a check-before-you-send tool. Collect 3 rejected invoices each (anonymized) for the backtest.
- **Day 3:** Hand-validate those ~30 historic rejected invoices against the PAPL catalogue + service agreement. Quantify catch rate. Anything below 70% kills the idea.
- **Day 4:** Build a one-page landing site with the free rejection-code decoder (no validator yet) and an email signup for "early access to the pre-flight checker — $19/mo when we launch." Post in 4 Facebook groups + r/NDIS.
- **Day 5:** Measure: ≥100 email signups OR ≥30 use the free decoder OR ≥2 plan managers reply "we'd send our providers to this." If hit, build the MVP. If not, deeper interviews to find out whether the pain is price-sensitivity or just not real enough.

The falsifiable result: catch rate ≥70% on real rejected invoices, AND ≥100 organic email signups in 48 hours. If either misses, the idea is parked.
