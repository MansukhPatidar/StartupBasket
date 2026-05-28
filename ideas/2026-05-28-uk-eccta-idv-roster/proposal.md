---
title: "ClearRoster — Companies House IDV roster for UK accountants"
slug: uk-eccta-idv-roster
date: 2026-05-28
category: Compliance / UK Small & Solo Accountancy Practices (1–15 staff)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Walks an accountant's full client book through ECCTA director/PSC identity verification before the 18 Nov 2026 cliff."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [UK, ACSP, ECCTA, Companies-House, AML, Compliance-driven, SMB, Solo-builder, Professional-Services]
axes:
  problem: 16
  demand: 13
  build: 12
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# ClearRoster — Companies House IDV roster for UK small accountancy practices

## 1. One-liner

Walks an accountant's full client book through ECCTA director/PSC identity verification before the 18 Nov 2026 cliff.

## 2. Trend signal — why now?

Identity verification under the Economic Crime and Corporate Transparency Act 2023 (ECCTA) flipped from optional to *enforced* on 18 Nov 2025. Every director and every Person with Significant Control (PSC) of every UK company — including dormant ones — must have a verified Companies House personal code before the company can file its next confirmation statement. The absolute backstop is **18 Nov 2026**. After that date, missing IDV is a criminal offence carrying up to **£5,000 per individual**, director disqualification, and the company can be struck off the register.

Scale of the wave:
- **5.48 million companies** on the Companies House register at end of March 2026 (GOV.UK incorporated companies statistics).
- Companies House's own published estimate: **6–7 million individuals** must verify by mid-Nov 2026.
- Vistra survey (early 2026): **only 28% of UK directors are ready** for the reforms.
- ICAEW + ICAS guidance both warn that **from Spring 2026, only Authorised Corporate Service Providers (ACSPs) can file** on a client's behalf — and from Nov 2026 any third-party filer must be ACSP-supervised.
- AccountingWEB forum threads through Q1–Q2 2026 are full of practice owners asking "do I register now or wait" and reporting that **Companies House rejected a chunk of early ACSP applications over data mismatches**.
- Companies House blog comments (Nov 2025 → May 2026): One Login bounces directors back and forth, app push notifications never arrive, "verification process is not well designed."

The cliff is real, dated, criminal, and the supply of verifiers is way behind: the public ACSP directory shows only **~2,668 registered ACSPs** as of mid-May 2026 (1,823 AML-supervised on the consent list plus ~845 visible through incorporation filings). HMRC alone supervises 30K+ accountancy firms; ICAEW, ACCA, AAT, CIOT, IFA, ICB add tens of thousands more. **Adoption is in the single-digit-percent range with six months to deadline.**

Provenance:
  - Signal 1 (demand): Vistra, "Only 28% of UK directors are ready for Companies House reforms" — https://www.vistra.com/insights/only-28-uk-directors-are-ready-companies-house-reforms-despite-looming-deadlines-and — 2026 (early-year survey).
  - Signal 2 (feasibility): Companies House blog, "Verifying your identity for Companies House with GOV.UK One Login" (free IDV API + ACSP IDV route; Inform Direct/Bright biometric IDV £4 + VAT, £5 + VAT including address) — https://companieshouse.blog.gov.uk/2025/11/19/verifying-your-identity-for-companies-house-with-gov-uk-one-login/ — 19 Nov 2025.
  - Signal 3 (economic): Companies House ACSP registration regime (£55 fee, 2,668 ACSPs listed in Verify My Client's public directory, ICAEW + ICAS warning practices to register before clients defect) — https://verifymyclient.com/acsp-directory/ — 2026.
  Category: Regulatory arbitrage

## 3. The opportunity

The compliance burden is dropped on UK accountants, but the **specialist tool to manage that burden was built for the top of the market**. Inform Direct (Bright Software) sells a full company-secretarial suite, manages 650K companies for ~5,000 of the largest accountancy practices, and bundles IDV inside subscriptions starting in the high two-digit £/month range. Karbon and Pixie are practice-management suites ($59–$99/user/mo, "too expensive for a one-man-band practice" per AccountingWEB).

Underneath those five thousand practices sit **30K–45K small and solo UK practices** — sole-practitioner CAs, AAT/IFA/ICB-licensed bookkeepers, two-partner firms — who:
- Run their books on Xero + spreadsheets + Outlook.
- Have between 30 and 500 limited-company clients each.
- Have **not** bought Inform Direct because the CoSec workload didn't justify the price.
- Just got handed a one-off, dated, criminal-liability cliff: every director on their book needs a verified personal code, and the cleanest evidence audit is on the practice.
- Don't want a full CoSec migration. They want a **single-screen "who's verified, who isn't, what do I send them this week"** queue, and they want it now.

The 10× cut is **focus + price**: a deadline-prioritised IDV concierge that ingests the practice's client book, calls Companies House's public APIs to check personal-code status, prioritises by next confirmation-statement date, sends the right outreach template at the right cadence, and produces the 7-year audit trail an AML supervisor will demand. £19–49/mo. No CoSec ledger, no share register, no dividend voucher generator — just clear the roster.

## 4. Target market

**Primary customer:** Sole-practitioner and small-firm UK accountants/bookkeepers (1–15 staff), AML-supervised by HMRC / ICAEW / ACCA / AAT / IFA / ICB / CIOT. 30–500 limited-company clients on the books. Operating from a home office or single high-street unit, turnover £80K–£800K.

**Why they buy:** Every confirmation statement filed for an unverified director will be rejected from spring 2026 onwards. Their clients (often a single-director micro-business owner who barely understands Companies House) will look at *them* when filings bounce, fines stack, and the company gets warned of strike-off. They are personally on the hook through their ACSP licence and the AML record-retention rule (seven years from the verification request). Today they manage this on a printed spreadsheet, sticky notes, and forwarded emails. They will pay this week to make the spreadsheet die.

**Rough TAM reasoning:**
- HMRC AML-supervised practices alone: ~30,000+ (HMRC publication, Oct 2024–Mar 2025: £3.2m AML fines across the supervised population).
- ICAEW practising-cert firms: ~12,000. ACCA UK practising firms: ~7,000. AAT licensed members: ~4,500. ICB + IAB + IFA: ~10,000+. Overlap accounted for, conservatively **40,000–50,000 UK accountancy/bookkeeping practices** in scope, of which the top ~5,000 are Inform Direct/IRIS customers and out of reach. Addressable: **35,000–45,000 small/solo practices**.
- If 5% pay £29/mo: 1,750 × £29 × 12 = **£609K ARR**. 10% at £29 = **£1.2M ARR**. 15% at £35 = **£2.2M ARR**.

**Why now for them:** First confirmation-statement filings under the new regime are bouncing right now. Practice newsletters and AccountingWEB threads are full of "client phoned in panic" anecdotes. The 18-Nov-2026 backstop is six months out; every CS date between now and then is a forced verification event. Inaction = lost clients to the practice next door that *is* ACSP-registered.

## 5. Product sketch (MVP)

- **Roster import**: drop in a CSV (or pull from Companies House Public Data API by ACSP number) listing every limited-company client, every director, every PSC, with the CS date for each company.
- **Verification state board**: each director/PSC tagged Unstarted / In Progress / Verified / Rejected / Expired, ordered by next CS date and the absolute 18-Nov-2026 backstop.
- **Outreach engine**: branded email + SMS templates that point the director at the **free GOV.UK One Login self-service flow** as the cheapest path; auto-reminds at +3, +7, +14 days; escalates to "we will book you in for biometric IDV" if no response.
- **ACSP fallback flow**: when a director can't self-verify (overseas, no UK ID, struggles with the app), one-click route to a partnered IDV provider's biometric check (£4–£8 wholesale cost passed through with markup, or done in-person via the accountant).
- **Personal-code locker**: stores each verified director's 11-character personal code against the right company role, ready to be quoted in the next filing (today this lives in random emails and notes apps — a real security mess).
- **AML audit log**: every verification request, document, time-stamp, and outcome retained for the statutory 7-year window — a defensible evidence binder per client per director.
- **Filing-gate dashboard**: "Can we file the CS for Acme Holdings Ltd today?" with a green light only when every director + PSC has a current personal code on file.
- **Bulk SMS/email blast** for "all directors with CS dates in the next 30 days who are still unverified" — single most-used button.

## 6. AI angle — what's load-bearing

AI does three concrete jobs, none of them cosmetic:

1. **Director matching from messy inputs**: practices have client lists in Xero/QBO/IRIS/Sage/Excel with names like "Mr R Patel" or "R. Patel" vs Companies House records that say "Rakesh Kumar Patel" with a DOB and an appointment date. An LLM-driven fuzzy match (name + DOB + appointment date + role) collapses the human-disambiguation step that today eats hours.
2. **Outreach drafting in the practice's voice**: a small fine-tuned generator drafts the chase email/SMS in the accountant's tone, in plain English (or Welsh, or transliterated Gujarati for the elderly client who doesn't read English well), and rewrites it after a rejection.
3. **Risk red-flagging at onboarding**: when an unfamiliar director arrives for IDV, an LLM cross-checks the name against the **public sanctions/PEP/strike-off feeds** and surfaces "this person was disqualified in 2019" — the ACSP's *own* AML compliance is at stake here, and getting it wrong revokes their ACSP status. This is a hair-on-fire pain.

Strip AI out and you have a glorified Trello board. Keep it in and one solo accountant can shepherd 400 directors through verification without hiring an assistant.

## 7. Localization angle (if any)

UK-only by design. The wedge is the ECCTA cliff, the ACSP regime, and Companies House's specific personal-code workflow. Adjacent expansion later:
- **Ireland (CRO Beneficial Ownership Register)** has a similar UBO-disclosure regime — natural second market.
- **EU AMLA single rulebook (2027–28)** will create analogous obligations across member states. Not a wedge today.
- Welsh-language outreach templates day-one for accountants serving Welsh clients.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers on the practice's company-book size.
  - **Solo** (≤50 client companies): **£19/mo**.
  - **Practice** (51–250 companies): **£49/mo**.
  - **Firm** (251–1,000 companies): **£129/mo**.
  - **One-shot Cliff Sprint:** **£299** flat for a 30-day book triage that ends with every director's IDV status known and outreach kicked off — sold to firms who want to procrastinate but still de-risk before Nov.
  - **IDV transaction add-on:** biometric ACSP checks at wholesale + 50% margin (~£8 sold, ~£5 cost) for directors who can't self-verify.
- **ACV blend:** ~£35/mo blended (£420/yr) for SaaS + £150 average IDV pass-through revenue = **£570/yr ACV**.
- **Path to £1M ARR (~$1.25M):** 1,750 practices × £570 = **£997K ARR**. That is ~4% of the addressable 40K practices.
- **Path to $5M ARR:** 8,000 practices × £570 + add-on per-verify revenue (high-volume firms) = ~£4.6M ARR. Requires ~17% saturation of addressable plus the IDV-pass-through margin scaling with the 6-month spike.
- **Expansion path:** post-Nov-2026 the product pivots from "cliff" to **annual confirmation-statement gating + new-appointment IDV + AML KYC re-checks at five-year intervals**. The roster becomes a recurring directory the practice keeps for every new client they onboard. Add-on modules: PSC change-tracking, dormant-company striking-off avoidance, sanctions screening.

## 9. Go-to-market wedge — first 100 customers

Five concrete moves:

1. **AccountingWEB "Any Answers" threads.** A live forum thread already exists for nearly every ACSP/IDV question. Drop in as a named human (the founder, ICAEW-licensed if possible), answer two questions properly, then in the third post link the free **IDV-Readiness Audit** (see #2). The forum mods don't ban genuine helpful contributors. Conversion target: 2 sign-ups per high-traffic thread × 30 threads in 90 days = ~60 trials.
2. **Free "IDV-Readiness Audit" tool.** Accountant pastes their ACSP number → tool pulls their visible client list from Companies House Public Data + scores how many directors have already verified vs how many have CS dates in the next 90 days. Output: a downloadable PDF "you have 73 directors at risk of CS rejection by 30 Sep — start now." No login required for the report. Email-gated for the full breakdown.
3. **ICB / IFA / AAT branch meeting sponsorships.** The 30K HMRC-supervised + 4,500 AAT-licensed cohort meet locally. £200 sponsors a regional branch evening; bring 30-min slot + cliff sprint vouchers. 8 events × ~20 attendees × 15% conversion = ~24 customers per cycle, repeatable.
4. **LinkedIn outbound to named principals.** Companies House publishes the ACSP register; LinkedIn Sales Navigator filter for "Accountancy Practice Owner / Partner" with 1–5 employees in the UK. ~12K matches. Personal Loom video of *their own client book's risk profile* (auto-generated from the free audit). 50/day for 60 days = 3,000 touches, 3% reply, 30% close on reply = ~27 customers.
5. **Inform Direct's *defectors*.** Inform Direct's PAYG users (the ones who bounce off the £30–60/mo subscription wall) leave reviews on G2 / Capterra / SourceForge and complain on AccountingWEB. Direct, polite "if you only want IDV without the full CoSec, here's our £19 tier" outreach.

## 10. Build complexity — justification

**Medium.** No bespoke ML, no hardware. Standard SaaS stack consuming three public APIs (Companies House Public Data API for company/officer lookups, Companies House Personal Code verification endpoint, an off-the-shelf IDV vendor's API for biometric fallback — Onfido/Yoti/iDenfy resell for ~£3-5/check). The hard work is workflow logic — IDV state machine per director per company per filing event, retention policies (7 years), outreach scheduling, AML evidence packaging. Realistic build: **10–14 weeks for a pair** of which 4 weeks is integration testing against the still-twitchy Companies House sandbox.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | We are a software vendor; the *accountant* is the ACSP. We do not need an ACSP licence ourselves unless we offer to verify on a director's direct behalf (we resell, we don't ourselves verify). |
| Ethical — no harm / dark patterns | ✅ | Helping legitimate practices clear a state-mandated deadline. The risk-flagging feature actually reduces fraud. |
| Market exists | ✅ | Public ACSP directory, AccountingWEB forum activity, 6–7M individuals on the hook, Vistra "28% ready" data. |
| 1–5 person team can build | ✅ | 10–14 weeks for pair to v1. Solo founder can do v1 in 16 weeks with strong product instincts. |
| Launchable with <$50K / ₹40L | ✅ | Companies House APIs are free; IDV API is per-transaction; Stripe + Postmark + Twilio + hosting < £400/mo at 100 customers. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Criminal-offence-by-Nov-2026 with personal financial penalty + ACSP-licence-loss risk. Hair-on-fire for the practice, weekly-recurring for clients with rolling CS dates. Loses one point because *individual* directors can also DIY through GOV.UK One Login (some practices will let them). |
| Demand evidence | 15 | 13/15 | Vistra "28% ready", AccountingWEB threads (verifiable), ICAEW/ICAS published guidance, Inform Direct's 650K-company traction proves accountants pay for CoSec tooling — but the *focused* sub-product (just IDV, not full CoSec) is unproven. |
| Build feasibility | 15 | 12/15 | All APIs exist; IDV vendor commodity; main risk is Companies House sandbox flakiness during the rush. |
| Distribution clarity | 15 | 12/15 | Named channels (AccountingWEB, ICB/IFA/AAT branches, public ACSP directory). The "free Readiness Audit" hook is a real lead gen play, not vapor. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked vs Inform Direct (high £20s–£100s) and Karbon ($59+/user); £19–49 is credible. Risk: ACVs don't expand much beyond the cliff if accountants treat it as a one-time cleanup. |
| Time to first revenue | 10 | 7/10 | Realistic 8–10 weeks to first paying customer with the free-audit hook. Not 2 weeks. |
| Defensibility | 10 | 5/10 | Execution + workflow-lock-in + 7-year audit log per practice = soft moat. Inform Direct could ship a focused tier in months (real threat, see kill criteria). |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

The founder needs to *speak accountant* — know what a Confirmation Statement is, what a PSC is, what AAT vs ICAEW supervision means, what AML record-keeping actually looks like. Cold opening a sole-practitioner CA on "your client book has X exposed directors" without that vocabulary fails. A second co-founder ICAEW/ACCA-licensed is gold here, both for credibility and for personally being the first ACSP customer.

### Key assumptions to validate (3–5)

1. **Assumption:** Small UK practices will pay £19–49/mo for a focused IDV-roster tool *separately* from their existing CoSec/practice-management stack. **How to test:** Build the free Readiness Audit landing page; run £500 of LinkedIn ads to "accountancy practice owner UK 1-10 employees"; measure email-gated audit pulls (target ≥40), then convert 5 to a £29/mo waitlist deposit via Stripe in two weeks.
2. **Assumption:** Confirmation-statement bounce-back is the trigger that converts. **How to test:** Survey 30 AccountingWEB respondents — what made them register as ACSP / search for IDV tooling? "Client CS filing rejected" should outrank "saw an article".
3. **Assumption:** The 7-year audit-log feature is a stronger selling point than the outreach chase. **How to test:** A/B the audit page vs a chase-emails page in the same Loom outbound; measure reply rates.
4. **Assumption:** Inform Direct and FigsFlow won't ship a £19 IDV-only tier in 6 months. **How to test:** Watch their changelogs + Capterra "what's new" weekly. Have a kill-by-Sep date.

### Risk flags

1. **Platform dependency**: 100% reliant on Companies House Public Data API + the still-buggy IDV system. Their sandbox issues are documented; an API outage during the November rush is plausible.
2. **Incumbent flank**: Inform Direct (Bright) is well-funded, owns the CoSec category, has IDV inside subscription, and has 5,000 practices already paying. A £15/mo IDV-only tier from them would be brutal.
3. **Regulatory drift**: Companies House has *already delayed* mandatory IDV for filers once (from spring 2025 to Nov 2026). A second delay deflates urgency. The £299 Cliff Sprint mitigates this — keeps cash even if SaaS attach weakens.
4. **Short cliff, long product**: post-Nov-2026 the daily urgency collapses. The roster has to gracefully transition to "ongoing AML hygiene + new-client onboarding" or revenue plateaus.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Solo technical founder + ICAEW/ACCA-licensed advisor or co-founder. UK-based or UK-network.
Time to revenue:        8–10 weeks (free Readiness Audit → 30-day Cliff Sprint sale).
Capital to launch:      £15K–£25K ($20K–$32K) — APIs, infra, AML supervision setup for own ACSP licence, 2 months runway.
Top 3 assumptions to validate first:
  1. ≥10% of the 40 AccountingWEB-thread/forum-direct contacts will pull the free Readiness Audit when offered.
  2. ≥5% of audit pullers convert to a £29 paid waitlist within 14 days.
  3. ≥30% of paying users renew at the 3-month mark (vs treating it as one-off).
Kill criteria:
  - Abandon if Inform Direct / FigsFlow / TaxCalc ship a £15–25/mo IDV-only tier before our v1 ships.
  - Abandon if Companies House officially extends the Nov-2026 backstop by 12+ months (urgency collapses).
  - Abandon if <2% of 60-practice cold-outbound list converts to paid trial inside 8 weeks.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Stand up the free "IDV-Readiness Audit" page. Accept ACSP number, pull Companies House Public Data, render PDF score: "X directors exposed, Y past their CS date". Email-gate the full breakdown.
- **Day 3–4:** Post one substantial, named, helpful answer to each of three live AccountingWEB ACSP threads. Post one detailed walkthrough on r/UKAccountancy. Send 20 LinkedIn DMs to named practice owners with a personal Loom video of *their own audit*.
- **Day 5:** Decide go / no-go. **Go if** ≥30 audit pulls AND ≥5 founders book a 15-min call AND ≥2 say "yes, take £99 as a deposit on the Cliff Sprint." **No-go** if any one of those three thresholds misses. Falsifiable, fast, costs ~£300 in tooling + ads.
