---
title: "PaydayPilot — payday-super dispatcher for AU micro employers"
slug: au-payday-super-micro-clearing
date: 2026-05-25
category: Compliance / Australia Micro Employers
complexity: Medium
score: 81
verdict: STRONG GO
confidence: High
oneLiner: "Replaces the SBSCH on July 1 2026 — pays each payday's super and beats the 7-day deadline for AU micro employers."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Australia, Payday-Super, SuperStream, Micro-SMB, Compliance-driven, Solo-builder]
axes:
  problem: 18
  demand: 14
  build: 11
  distribution: 13
  revenue: 12
  time: 9
  defensibility: 4
founderFit: [operations-heavy, domain-expertise-required]
featured: true
---

# PaydayPilot — payday-super dispatcher for Aussie micro employers

## 1. One-liner

Replaces the SBSCH on July 1 2026 — pays each payday's super and beats the 7-day deadline for AU micro employers.

## 2. Trend signal — why now?

Three forced-migration events collide on **1 July 2026**:

1. **Payday Super becomes law.** From 1 July 2026 every Australian employer must pay Super Guarantee at the same time as wages — not quarterly. Money has to reach the employee's super fund within **7 business days** of payday. Penalties (Super Guarantee Charge) climb to 25–50%, non-deductible. (Treasury / ATO, "About Payday Super", 2026.)
2. **The free SBSCH closes.** The ATO's Small Business Superannuation Clearing House — used by **over 200,000** small employers — shuts down permanently at 11:59 pm AEST on 30 June 2026. New registrations stopped 1 October 2025. The ATO publicly states SBSCH "was not designed to handle real-time or pay-cycle-based super payments." (ATO; Treasury OIA impact analysis, "Closing the ATO's SBSCH", 2024/2025.)
3. **Bank rails are being rebuilt to match.** Commonwealth Bank is relaunching Colonial First State's Essential Super with a clearing house facility (CBA Newsroom, May 2026); SuperChoice and Beam are explicitly pitching themselves as SBSCH replacements (SuperChoice Solutions / Beam Connect, 2026); WRKR confirms its API gateway is "rebuilding for SBSCH closure" (WRKR Updates, 29 April 2026).

The current free option dies in **5 weeks** from today (2026-05-25). 200K-plus businesses must pick a paid replacement *this quarter*. There is a hard wall and a panicked buying window.

**Provenance:**
- Signal 1 (Demand): ATO confirms SBSCH closure 1 July 2026; >200K small employers forced to migrate — https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-contributions/how-to-pay-super/small-business-superannuation-clearing-house — accessed 2026-05-25
- Signal 2 (Feasibility): SuperChoice publishes white-label/API/SFTP reseller integration paths for DSPs under its PayClear AFSL (AFSL 336522), Beam Connect offers free partner API — https://www.superchoiceservices.com/who/digital-service-providers/ — accessed 2026-05-25
- Signal 3 (Economic): Treasury OIA impact analysis: closure increases regulatory burden by $1.2M/yr on affected employers; CBA, AustralianSuper, Xero, MYOB and Employment Hero all running migration campaigns in Q2 2026 — https://oia.pmc.gov.au/published-impact-analyses-and-reports/closing-atos-small-business-superannuation-clearing-house — accessed 2026-05-25
- Category: **Regulatory arbitrage** (a free government utility is being deprecated; a forced-migration window opens for a focused replacement)

## 3. The opportunity

The ATO did the world a favour for 15 years by giving micro employers a free SuperStream-compliant clearing house. That subsidy ends 1 July 2026, and the market it created — sub-payroll-software employers with 1–4 staff and choice-of-fund employees — is now homeless.

The "obvious" replacements all miss this customer:

- **Xero / MYOB / Reckon / Employment Hero ($14–$50/mo + setup)** — solve it *if* you adopt full payroll software. Most SBSCH cafes never did and don't want to. New tax-bill = $200–$600/yr on top of an accountant.
- **Super-fund-sponsored clearing houses (free)** — work only when *all* employees are with the sponsoring fund. Useless for a cafe with one Aware Super employee, one HostPlus, one REST.
- **Beam (free via partners)** — only available *through* an integrating payroll product.
- **Commercial gateways (SuperChoice, ClickSuper, WRKR)** — built for enterprise DSPs, not for a sole trader who pays three staff by bank transfer.

The gap: a $5–$15/mo, one-screen tool that is the SBSCH replacement and nothing else. No payroll module. No general ledger. No HR. Add employees + fund + ABA, log a pay, single payment goes out, money arrives at every fund within 7 business days, STP-aligned super reporting filed. AI handles the messy bits (parsing employee Tax File Number Declaration PDFs and fund Choice forms, reconciling bank statements against pays, drafting the catch-up letter when a pay slips past day 7).

10× better than a full payroll suite for the cafe-grade buyer who only ever wanted one thing: pay super, don't get fined.

## 4. Target market

- **Primary customer:** Australian sole traders and Pty Ltds with **1–4 employees**, currently using SBSCH, no incumbent payroll software (or only a spreadsheet + STP-lite filer). Cafes, hair salons, single-chair dentists, allied health solos, family farms, tradies with 1–2 apprentices, NDIS sole providers with admin staff.
- **Why they buy:** SBSCH dies in five weeks. They will get a Super Guarantee Charge notice if super is even one day late after payday from 1 July 2026, and the charge is now non-deductible. They have no choice but to switch — they will buy the cheapest, simplest thing that an accountant will say yes to.
- **Rough TAM reasoning:** ABS Counts of Australian Businesses (Jun 2024): ~2.6M total businesses; 25.2% have 1–4 employees (~655K) and 8.5% have 5–19 (~221K). Treasury impact statement says "over 200,000 small employers" currently use SBSCH. If we capture 5% of the SBSCH cohort at $10/mo blended ACV = $1.2M ARR. 15% capture = $3.6M ARR.
- **Why now for them:** 5 weeks to the wall. Every Australian accountant is sending the "you need to migrate" email in May–June 2026. Search traffic for "SBSCH closure" is in vertical liftoff (Xero, MYOB, AustralianSuper, EmploymentHero all running dedicated landing pages in 2026 — confirmed in research).

## 5. Product sketch (MVP)

- **One-screen onboarding:** ABN lookup, add up to 4 employees, paste their Super Fund USI + member number from a photo of their Choice form (AI extracts).
- **"Log a pay" button:** date, employee, gross wages. Tool calculates 12% SG. Done in 30 seconds per pay run. Optional bank-feed import (Basiq / Banked.com) auto-detects pays.
- **One bank transfer per pay run:** single PayID/ABA push to our clearing partner (SuperChoice white-label or Beam reseller), funds split and routed to each employee's fund within 7 business days. Confirmation receipt back into the dashboard.
- **STP-aligned super reporting:** files the super liability event with ATO via DSP partner so STP Phase 2 data matches reality.
- **Deadline alarm:** SMS + email at T+3, T+5, T+6 business days if a pay hasn't been cleared. One-tap "pay now" from the alert.
- **Auto-catch-up packet:** if super does slip past day 7, drafts the Super Guarantee Charge statement (SGC) the ATO requires and pre-fills the form.
- **Accountant view:** read-only login for the bookkeeper to verify and export to Xero/MYOB at year end.
- **Yearly Choice-form refresh:** AI-generated SMS to each employee asking "still your fund?" — replies parse-back into the dashboard, kills the #1 cause of failed contributions.

## 6. AI angle — what's load-bearing

AI does three jobs no clearing house does today:

1. **Choice form / TFN declaration intake.** Employees send their fund info in 12 different formats — phone screenshots of MyGov, scanned PDFs, handwritten paper. Vision LLM extracts USI, ABN, member number, name — turns a 15-minute data-entry task into a photo upload. This is the #1 friction in onboarding to a clearing house today; staff turnover keeps creating it.
2. **Bank reconciliation against pay events.** The micro employer pays wages by direct bank transfer outside any payroll system. We read their bank feed and infer pay events (frequency, amount, employee) so the user doesn't have to "log a pay" — they confirm what we surfaced. This is the difference between an admin chore and a passive utility.
3. **SGC statement drafting.** If something slips, ATO Super Guarantee Charge paperwork is brutal — interest calcs, admin component, nominal interest, lodgement form NAT 9600. AI drafts the whole packet from the bank feed + pay record. Worth $300/yr to any cafe owner the first time it happens.

Remove the AI and the product becomes a 2010-era data-entry portal — the SBSCH replacements that already exist. AI is the only reason this can be priced at $10/mo and not need a bookkeeper.

## 7. Localization angle (if any)

Australia-only by construction — the entire wedge is the AU regulatory event. SuperStream, the SBSCH, STP Phase 2, the Super Guarantee Charge, the 7-business-day rule — none of these have analogs elsewhere. This is **geographic specialisation, not arbitrage** — Australia is the market.

Adjacent expansions later: STP Phase 2 lodgement add-on (NZ has a structurally similar IRD payday filing rule that micro NZ employers face — possible v2 in 2027), but v1 is AU end-to-end.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Solo plan** — 1 employee — $5 AUD/mo
  - **Cafe plan** — 2–4 employees — $12 AUD/mo
  - **Tradie plan** — 5–9 employees — $25 AUD/mo
  - Annual prepay 2 months free.
  - Add-on: **SGC rescue** packet drafting — $49 one-off per incident.
- **ACV:** Blended $140 AUD/yr ≈ $93 USD/yr. Realistic given the buyer has been paying $0 for 15 years; anything under "$20/month" is a yes from an accountant.
- **Path to $1M ARR:** 11,000 paying employers × $93 USD = $1.02M USD. 11K is **5%** of the 200K-plus SBSCH cohort being forced to migrate this quarter. Realistic.
- **Path to $5M ARR:** 54,000 paying employers (~25% of SBSCH cohort) or blended ACV creep to $200/yr via SGC rescue add-on. Either is plausible by end of FY28.
- **Expansion path:** add SGC rescue ($49/incident, ~1–2/yr per customer = +$50–$100 ACV), then STP Phase 2 lodgement ($5/mo), then full single-touch payroll lite ($30/mo — only for customers who outgrow micro tier).
- **Unit economics:** SuperChoice/Beam clearing partner = $0 marginal (Beam is free via DSP partner; SuperChoice white-label is a fixed platform fee). Stripe ~3% on subscription. AWS infra ~$0.50/customer/mo at 10K accounts. Gross margin >85% even at $5 plan.

## 9. Go-to-market wedge — first 100 customers

The clock is the entire marketing budget.

1. **Accountant channel (target: 60 customers).** There are ~30K Australian public-practice accountants. The 8,000 who service SBSCH-cohort clients are sending mass "you must migrate" emails May–June 2026. Build a partner microsite + 20% rev-share for accountant referrals. Pick the 50 loudest ones on AccountantsDaily, IPA and CPA Australia LinkedIn and DM them a Loom: "5 of your clients × $12/mo paid back to you." Sponsor one slot in *Accountants Daily* newsletter ($1.5K AUD).
2. **AusFinance & smallbusinessau Reddit + Facebook group blitz (target: 25 customers).** "SBSCH closing" is the single most-asked question on r/AusFinance, r/SmallBusinessAU, r/Australia and "Aussie Business Owners" FB group (~85K members). Cold post, not spammy: "Built this because my sister's cafe got the ATO letter. $5/mo, made for 1–4 staff, no payroll software needed." Real product, real founder — these communities reward that.
3. **Industry-fund partnership (target: 15 customers).** AustralianSuper, HostPlus, REST already publish SBSCH-closure pages. Offer a *free-for-their-employer-base* tier (their fund pays $3/mo per employer-account), they push the link to their employer portal users. One fund deal = 5–10K eligible employers exposed.
4. **Long-tail SEO ambush.** Rank for "SBSCH closure alternative," "Payday Super 7 day deadline calculator," "Super Guarantee Charge worksheet." Free calculators bait. ~3K AU monthly searches today per Ahrefs-style estimate, growing weekly toward 1 July.

First 100 happens in 6–8 weeks if we launch in early June.

## 10. Build complexity — justification

**Medium.** The clearing-house plumbing (SuperStream message schema, USI directory, fund routing) is real engineering and AFSL-touching — but we ride a licensed gateway (SuperChoice white-label under their PayClear AFSL 336522, or Beam as a partner DSP) instead of becoming one. That collapses the regulatory build to a contractual integration and a UI.

Concrete v1 = ~10–14 weeks for a 2-person team: 4 weeks SuperChoice/Beam integration + ABA file generation, 3 weeks vision-LLM Choice form intake, 3 weeks dashboard + STP-event mock, 2 weeks bank-feed (Basiq) reconciliation, 1 week SGC drafter. AFSL on partner. ASIC reporting on partner. Our risk surface is data + UX, not financial-services licensing.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Acting as a registered SuperStream sender through a licensed gateway (PayClear AFSL 336522 / Beam partner) is the normal architecture. Hundreds of DSPs operate this way today. |
| Ethical — no harm / dark patterns | ✅ | Helping micro employers comply on time *reduces* the SGC penalty risk to their employees. |
| Market exists (evidence above) | ✅ | >200K SBSCH users forced to migrate by 1 July 2026 (ATO + Treasury). |
| 1–5 person team can build this | ✅ | 2-person team, 12 weeks via gateway partner. |
| Launchable with <$50K / ₹40L | ✅ | Main cost is SuperChoice DSP integration fee (unpublished — assume $5–15K AUD setup + 10–20¢/transaction wholesale) and 3 months engineering runway. <$30K AUD all-in. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire. Hard regulatory deadline on 1 July 2026, free incumbent dies same day, penalties (SGC 25–50%, non-deductible) make non-compliance unbearable. -2 only because some buyers will get pulled into Xero/MYOB by their accountant before we reach them. |
| Demand evidence | 15 | 14/15 | ATO confirms >200K affected employers; CBA, AustralianSuper, Xero, MYOB, Employment Hero all running migration campaigns; Reddit/Facebook AU SMB communities asking weekly. Hard skeptic would nod. |
| Build feasibility | 15 | 11/15 | Doable in 12–14 weeks but contractual onboarding to SuperChoice/Beam adds 4–8 weeks of legal/contract time before code is useful. AFSL is the gateway's, not ours, but partner due-diligence is real. |
| Distribution clarity | 15 | 13/15 | Named channels: 8K AU accountants servicing the cohort + 3 named subreddits + 4 named industry super funds. Time-boxed window forces decision-making. |
| Revenue mechanics | 15 | 12/15 | $5–25/mo against $0 incumbent is a step-up but $0 was a government subsidy that everyone knows is ending. Per-customer gross margin >85%. ACV honest. -3 because subscription stickiness untested against accountant-pushed alternatives. |
| Time to first revenue | 10 | 9/10 | Pre-sell waitlist by June 2026, paid signups week of 1 July 2026. First $ in 4 weeks of launch is realistic. |
| Defensibility | 10 | 4/10 | Almost none. SuperChoice/Beam will sell to anyone. Brand + first-mover with accountant channel is the only moat. After 12 months, will need to add adjacent features (STP filing, leave tracking) or get acquired by a fund / payroll player. Honestly: a 12-month window, not a 5-year company on its own. |
| **Total** | **100** | **81/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`operations-heavy` · `domain-expertise-required`

This needs someone who can sit in front of an AU accountant or fund product manager and not get blank stares. Best-fit founder: ex-Xero/MYOB/Employment Hero ops person, or an AU bookkeeper who's spent the last decade inside SBSCH and is sick of it.

### Key assumptions to validate (3–5)

1. **Assumption:** SuperChoice or Beam will sign a DSP/reseller agreement with a 2-person startup at a wholesale price (≤25¢ per contribution) that supports a $5–12/mo retail tier. **How to test:** Direct sales convo with SuperChoice (sales@superchoice.com.au) and Beam Partnerships in week 1. If wholesale economics break, kill candidate or pivot to pure SaaS layer over Beam's free integration via a named payroll partner.
2. **Assumption:** ≥5% of the 200K SBSCH cohort will pick a non-Xero/MYOB replacement in the 90 days around 1 July 2026. **How to test:** Run $500 of Google Ads on "SBSCH replacement" / "SBSCH alternative" in June 2026, measure CPC and intent. If CPC > $4 and conversion < 2%, channel is saturated by incumbents.
3. **Assumption:** Accountants will refer for 20% rev-share rather than pushing clients into existing Xero subscriptions they already manage. **How to test:** 30 cold accountant calls in week 2; measure "would you push 5 SBSCH clients to a $12/mo dedicated tool" response rate. Need ≥30% yes.
4. **Assumption:** Cafe-grade owners are willing to do a 5-minute setup themselves without a bookkeeper. **How to test:** Recruit 10 SBSCH users via Facebook group, run unmoderated Maze test of the onboarding flow, target 70% completion in <8 min.
5. **Assumption:** ATO won't soften enforcement enough in year-one to remove urgency (transitional support is already announced). **How to test:** Monitor ATO PCG (Practical Compliance Guideline) drafts through May/June 2026; budget reduces by 50% if hard 7-day rule is deferred to FY28.

### Risk flags

1. **Platform dependency (high):** Entire product rides on SuperChoice or Beam continuing to offer reseller economics. If either pulls the integration, product is dead. Mitigation: dual-integrate from day one (Beam free + SuperChoice paid as fallback).
2. **Time window (high):** ~70% of customer acquisition will happen May–September 2026. Miss the launch window and a competitor (CBA Essential Super, EmploymentHero HeroClear) takes the cohort. This is a sprint, not a marathon.
3. **Regulatory drift (medium):** ATO has signalled "first year flexibility" — if they extend to a soft-landing year, urgency collapses. Less likely than it sounds; SBSCH still closes regardless.
4. **Competitive snipe (medium):** A super fund could give the same tool away free to its employers as customer acquisition. Mitigation: be the *multi-fund* default before any single fund builds it.

## 14. Structured verdict

```
Score:                  81/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       Ex-Xero/MYOB ops person OR AU bookkeeper-turned-founder paired with one full-stack engineer
Time to revenue:        4–6 weeks from launch (target: 1 July 2026 paid go-live)
Capital to launch:      AUD $25–40K (engineering + SuperChoice/Beam onboarding + accountant-channel collateral)
Top 3 assumptions to validate first:
  1. SuperChoice or Beam wholesale economics that support a $5–12/mo retail tier — direct sales conversation, week 1
  2. ≥5% capture of 200K SBSCH cohort — Google Ads search-intent test in June 2026
  3. Accountant referral economics — 30 cold accountant calls, measure ≥30% yes on rev-share
Kill criteria:
  - Abandon if SuperChoice and Beam both refuse a sub-25¢ per-contribution wholesale price
  - Abandon if ATO defers Payday Super or extends SBSCH past 30 June 2026
  - Abandon if a super fund launches a free multi-fund clearing service for non-members before 15 June 2026
```

## 15. Next step — 1-week validation sprint

If I had one week to prove this is real before committing:

- **Day 1:** Cold-call SuperChoice DSP partnerships (sales@superchoice.com.au) and Beam Connect partnerships. Frame: "shipping a micro-employer SBSCH replacement in 30 days, what's your wholesale per-contribution rate and onboarding timeline?" Decision input: do gateway economics support $5–12/mo retail.
- **Day 2:** Build a 1-page landing — "PaydayPilot — replaces SBSCH for cafes and tradies, $5/mo, founder-built, launches 1 July 2026" — with a $1 deposit waitlist via Stripe.
- **Day 3:** Spend $300 on Google Ads ("SBSCH closure," "SBSCH replacement," "Payday Super small employer," "SBSCH alternative") to Australia only. Measure CPC, CTR, deposit conversion rate.
- **Day 4:** Cold-email 50 AU accountants (IPA + CPA Australia public-practice directories), Loom included, ask for a 15-min call about referral economics. Target: 5 calls booked.
- **Day 5:** Decision. Go if: (a) gateway partner says yes to ≤25¢/contribution; (b) Google Ads delivers ≥30 waitlist deposits at <$15 CAC; (c) ≥3 accountants verbally commit to referring 5+ clients. No-go on any one.

Falsifiable outcome: paying-deposit count + signed accountant verbal commits + gateway wholesale quote. Numbers, not vibes.
