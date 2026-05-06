---
title: VerifyChase — UK director ID-verification cockpit
slug: verifychase-acsp-cosec-uk
date: 2026-05-06
category: Compliance SaaS / UK Small Accounting Practices
complexity: Medium
score: 81
verdict: STRONG GO
confidence: Medium
oneLiner: ACSP-native cockpit that drags every UK director and PSC over the November 2026 Companies House ID-verification line.
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [UK, ACSP, Companies-House, ID-verification, Cosec, AI-agent, SMB, Solo-builder, Compliance-driven]
axes:
  problem: 18
  demand: 14
  build: 10
  distribution: 13
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, technical-heavy]
featured: true
---

# VerifyChase — ACSP-native co-sec cockpit for the UK ID-verification crunch

## 1. One-liner

ACSP-native cockpit that drags every UK director and PSC over the November 2026 Companies House ID-verification line — built for the 1–10 person accounting practice managing 50–500 limited companies.

## 2. Trend signal — why now?

Companies House identity verification went live 18 November 2025 under the Economic Crime and Corporate Transparency Act 2023. Twelve-month transition ends 18 November 2026. Companies House estimates **6–7 million directors and PSCs** must verify by then; just over 1 million have done so by April 2026. Every director/PSC of every UK limited company must hold an 11-character personal code, generated via GOV.UK One Login or by an Authorised Corporate Service Provider (ACSP), before the company's next confirmation statement can be filed. One unverified director on a board of three blocks the entire filing.

Accountants are now the de-facto frontline — but the existing tooling is a mess. Practice management suites (Karbon, Pixie, BrightManager, IRIS) bolt on generic checklist templates. AML-check vendors (Thirdfort, Credas, SmartSearch) are priced and shaped for one-off property and legal transactions, not the recurring annual confirmation-statement chase. Accountants on AccountingWEB report "500 PSCs to manage with different dates to track" and "elderly directors unable to make the website work." Companies House itself has a known unresolved bug where the same person appears as director and PSC under slightly different name strings ("Joe Bloggs" vs "Mr Joe Bloggs") and Companies House have no fix.

ACSP filing-on-behalf-of-clients opens November 2026 — meaning the year *after* the deadline gets even more interesting, because every annual confirmation statement is now a re-verification opportunity for the agent.

```
Provenance:
  - Signal 1: 6–7M directors/PSCs must verify by 18 Nov 2026; only ~1M done by April 2026 — https://companieshouse.blog.gov.uk/2025/10/16/making-identity-verification-simple-secure-and-trusted/ — 2025-10-16
  - Signal 2: AccountingWEB threads — "ridiculous, confusing and stressful," "500 PSCs to manage," elderly directors locked out, name-mismatch bug Companies House have no fix for — https://www.accountingweb.co.uk/any-answers/companies-house-verification-pscdirector — 2026-02
  - Signal 3: ICAEW & ICAS — accountants must register as ACSP, supervise staff, hold records 7 years; ACSP filing-on-behalf opens Nov 2026; Bright/Figsflow/Clarkwell publishing survival guides — https://www.icaew.com/insights/viewpoints-on-the-news/2026/feb-2026/challenges-of-companies-house-id-verification-for-accountancy-firms — 2026-02
  Category: Regulatory arbitrage
```

## 3. The opportunity

A statutory deadline funnels 6–7 million people through a verification process that is being run by their accountants, on top of all their existing workload, in tools that were not designed for this job. Practice management software treats verification as another row in a workflow template. AML providers treat each verification as a one-shot transaction.

The actual workflow is recurring, multi-party, deadline-cliff'd, and full of awkward edge cases (elderly directors, dual-role PSC/director name-mismatch, overseas directors with no UK passport, dormant companies with non-responsive shareholders, group structures with 5–15 PSCs). The accountant's day looks like: open AccountingWEB, search "name mismatch," cry, copy a list of directors into a spreadsheet, send 15 WhatsApps and 8 emails, get one personal code back, paste it into the CS01 form, repeat 200 times.

The opportunity is to be the **single tool a UK accountant logs into every morning during the verification window** — pulling every client's director/PSC list straight from the Companies House public record, ranking by deadline urgency, sending automated chase sequences that walk the client through GOV.UK One Login *or* book them into an ACSP-led video verification, capturing the personal code and pre-populating the confirmation statement.

10× better than incumbents on three axes: (a) recurrence-aware (not one-shot), (b) chase-engine baked in (not a generic task), (c) ACSP-native — the tool *is* the ACSP, not a bolt-on.

## 4. Target market

- **Primary customer:** UK independent accounting practices, 1–10 staff, 50–500 limited-company clients, £80K–£800K annual fees. The 80% of UK firms with ≤4 employees — roughly 32,000 firms — are the bullseye.
- **Why they buy:** Confirmation-statement filing is core revenue. Every blocked filing is a £100 hour spent chasing instead of billing. Every late filing is a strike-off risk and reputational damage to the firm.
- **Rough TAM reasoning:** 40,275 accounting firms in UK (NimbleFins). Conservative addressable: 25,000 firms doing limited-company work. At £99/mo blended ARPU, TAM is ~£30M ARR; capture 5% = £1.5M ARR. Layered ACSP-as-a-service margin (per-verification fees on harder cases) doubles that.
- **Why now for them:** The deadline is hard, the volume is unprecedented, and the existing tools are demonstrably failing. ICAEW and ICAS are running emergency webinars. Every confirmation-statement renewal between now and Nov 2026 is a forcing function.

## 5. Product sketch (MVP)

- **Client roster pull** — connect to Companies House public API, auto-import every director/PSC for every client company, including dormant companies the firm forgot about.
- **Verification status board** — single dashboard, every person colour-coded by status (verified / in flight / not started / blocked / name-mismatch flagged) with deadline urgency sorted by next confirmation statement date.
- **Chase engine** — automated nudge sequences (email + SMS + WhatsApp) per director, with bilingual scripts for overseas directors, plain-English for elderly directors, and an embedded Loom-style "how to verify in 4 minutes on your phone" walkthrough.
- **One Login deeplink workflow** — generate a personalised verify-here link per director that pre-fills name and DOB, captures the returned 11-char code into the firm's record automatically.
- **ACSP fallback path** — for directors who cannot or will not use One Login, book them into a 10-minute video ACSP verification slot run by the firm (or by VerifyChase as a managed service for solo accountants without AML supervisor capacity).
- **Confirmation-statement orchestration** — when all directors+PSCs of a company are green, flag CS01 as filable; pre-populate Companies House CS01 with personal codes; one-click submit.
- **Name-mismatch resolver** — automated diff between Companies House director/PSC records, suggest the appointment correction filings needed before verification will stick.
- **Audit trail** — 7-year record retention required by ACSP regime, exportable on demand.

## 6. AI angle — what's load-bearing

Three places AI is doing real work, not decoration:

1. **Chase orchestration agent** — LLM drafts personalised nudges per director (tone for elderly clients vs founders), reads client replies ("I tried it but it said my passport was unreadable"), routes to the right next step (re-try / book ACSP slot / escalate to firm partner). Without this, the accountant is back in the spreadsheet+WhatsApp loop.
2. **Name-mismatch detection** — fuzzy matching across Companies House director/PSC records, predicting which mismatches will block a One Login result vs which are cosmetic, drafting the CS01 + AP01/CH01 correction filings.
3. **Document triage** — for clients who upload passports/driving licences directly to the firm, vision-model OCR + sanity-check before pushing to ACSP verification.

Strip the AI out and you're back to spreadsheets and intern labour. Verification is a chase problem, and chasing is what AI is now obviously good at.

## 7. Localization angle (if any)

UK-only by design. The whole thesis is regulatory: Companies House, ECCTA 2023, ACSP regime, GOV.UK One Login. The product will not work outside the UK and shouldn't try to. Adjacent geographies (Ireland CRO Beneficial Ownership, US FinCEN BOI which was rolled back in 2025 for US persons but still applies to foreign entities) are *future* expansion options for v2 — not the wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers — Solo £49/mo (≤50 client companies), Practice £149/mo (≤200), Firm £349/mo (≤500). Plus per-verification overage £4 for ACSP-led video checks (pass-through cost ~£1.50 + margin).
- **ACV:** Blended £130/mo × 12 = **£1,560 per firm/year**, plus £600–£1,200/year in per-verification overages for active practices = **~£2,200 average**.
- **Path to £1M ARR:** ~450 paying firms × £2,200 = £1M. Feasible inside 18 months given 25,000-firm addressable base and a clear deadline.
- **Path to £5M ARR:** ~2,200 firms (9% of addressable). Requires retention past Nov 2026 — see expansion path.
- **Expansion path:** Once firms are inside, layer (1) confirmation-statement filing (CS01 fees), (2) AML onboarding checks (compete with Thirdfort head-on), (3) annual accounts filing for small companies, (4) self-assessment chase. The verification crunch is the wedge; co-sec orchestration is the durable product.

## 9. Go-to-market wedge — first 100 customers

- **AccountingWEB any-answers thread bombing.** Real accountants are posting verification pain in real time. Reply with a value-first comment ("we built a tool that handles the name-mismatch CH01 generation — happy to do yours free for the first 50") and DM. Already-warm leads.
- **ICAEW/ICAS/ACCA local district sponsorships.** Each professional body runs ~10–15 regional CPD events. A £200–£500 sponsorship + 10-min lightning talk per region, hand out QR codes for a free 30-day pilot. Convert 3–5 firms per event.
- **Founder-led cold outreach to AML-supervised firms.** Companies House publishes the public ACSP list. Scrape the first ~5,000 small-firm ACSPs, run a personalised Loom walkthrough showing the firm's own client roster pulled from CH (yes, that's legal — public data). Expect 3–5% reply rate, 1% close = 50 customers.
- **Migration carrot from Thirdfort/Credas.** "Bring your existing AML check budget — we cover £X of overage for 90 days when you migrate." Thirdfort's recurring-AML use case is mostly legal sector; accountancy customers are a softer base to peel off.
- **Single high-leverage partner.** One AML supervisor body (e.g. AAT or ICPA) endorsement = instant access to 4,000+ small firms.

## 10. Build complexity — justification

Medium. Companies House public API is free and well-documented. GOV.UK One Login does *not* expose a B2B API for verification (clients have to go through the gov.uk flow themselves), so the product is a chase-and-deeplink layer plus a video-verification ACSP product on top. ACSP registration is a £55–63 admin process gated by AML supervision (the founder must already be AML-supervised, or partner with a supervised firm). MVP scope = client roster + status board + chase engine + One Login deeplinks + audit trail = 12–16 weeks for a tight team of 2 (one full-stack, one with UK accountancy domain knowledge). ACSP video-verification flow adds 4–6 weeks. Confirmation statement pre-fill via Companies House software filing API adds another 4 weeks. Six months end-to-end is realistic.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Built directly on top of statutory ECCTA 2023 framework. ACSP registration is the licence. |
| Ethical — no harm / dark patterns | ✅ | Helps directors comply with statutory duty; reduces fraud. Net pro-social. |
| Market exists (evidence above) | ✅ | 6–7M people, 25K+ firms, £55–63 ACSP fees already moving, multiple paid AML incumbents. |
| 1–5 person team can build this | ✅ | 2-person team, 6 months. |
| Launchable with <£40K | ✅ | Domain + ACSP fees + AML supervision via partner + cloud + Twilio. £15–25K to MVP. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire for the next 6 months. Confirmation statements blocked, criminal liability, £5K fines, director disqualification. Felt weekly during peak filing season. |
| Demand evidence | 15 | 14/15 | Hard regulatory deadline, 6–7M affected, AccountingWEB complaints, paid incumbents (Thirdfort, Credas, SmartSearch), £55 ACSP reg fees moving. About as concrete as demand evidence gets. |
| Build feasibility | 15 | 10/15 | Medium build. Companies House API is friendly. ACSP registration is paperwork. Video verification ACSP product is a real chunk of work. AML supervision is a moat for non-accountant founders — slows time to launch. |
| Distribution clarity | 15 | 13/15 | Named channels (AccountingWEB, ICAEW districts, public ACSP list, AAT/ICPA bodies). Conversion math credible. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked against PracticeFlow (£29) / Pixie / Karbon (£40–£100/mo) and Thirdfort per-check. £130/mo blended ACV is reasonable. Risk: post-Nov-2026 deadline tail flattens demand for chase-specific feature; offset by annual confirmation-statement renewals. |
| Time to first revenue | 10 | 8/10 | 8–12 weeks to first £49 sub if launched Q3 2026. Dozens of firms already paying for "anything that helps" — direct DM-led pilots will pre-pay. |
| Defensibility | 10 | 6/10 | ACSP registration + AML supervision = 1–3 month moat to copy. Workflow lock-in (every client roster, every personal code on file) compounds across years of confirmation-statement cycles. Not patentable. Execution + speed advantage matter most. |
| **Total** | **100** | **81/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

The founder needs UK accountancy or AML domain knowledge — not just to register as ACSP under an AML supervisor, but to credibly speak to small-firm partners. Pure technical founders get gated at AML supervision; pure accountancy founders need a strong technical co-founder for the chase-engine + Companies House API plumbing. Pair shape: ex-small-firm partner + senior full-stack engineer.

### Key assumptions to validate (3–5)

1. **Assumption:** Small accounting firms will pay £49–£349/mo on top of existing practice management software, not as a replacement. **How to test:** 30 founder calls with practice partners; price-anchored mockup; collect pre-orders or LOIs from 10+ firms before write line one of code.
2. **Assumption:** The ACSP video-verification flow is differentiating enough vs GOV.UK One Login direct that firms will route 20%+ of their directors through it (overage revenue). **How to test:** Survey 50 firms — what % of their directors got stuck on One Login; what would they pay per ACSP-led check.
3. **Assumption:** Demand persists past 18 Nov 2026. **How to test:** Talk to firms about what their workflow looks like in year-2 — every confirmation statement still requires verified status to be on file; new directors triggered mid-year still need verification on appointment. Demand is recurring, just less spiky.
4. **Assumption:** The Companies House public API is enough to identify every director+PSC for every client without paid integrations. **How to test:** Build the roster-pull MVP in week 1, run it against 10 partner firms' actual client books.

### Risk flags

1. **Regulatory risk:** Companies House could expose its own free chase-and-link UI directly to directors, deflating the chase product. Mitigated because the buyer (the accountant) values workflow consolidation, not just nudges.
2. **Platform dependency:** Hard dependency on GOV.UK One Login behaviour, Companies House API uptime, and ACSP regime stability. ECCTA 2023 is now embedded — low policy-reversal risk, but the API contracts move.
3. **Deadline-cliff risk:** Most pain peaks Q3–Q4 2026. Post-deadline retention requires the product to evolve into general co-sec orchestration (CS01, AP01, CH01, AML on new clients). Roadmap must already plan for this.
4. **Incumbent counter-attack:** Thirdfort and Credas have 50,000+ existing accounting customers and could ship a verification-chase module in 90 days. Window to land before they react is real but narrow. Move fast or lose to them.

## 14. Structured verdict

```
Score:                  81/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       UK-AML-supervised accountancy founder + senior full-stack engineer
Time to revenue:        8–12 weeks (paid pilots from existing personal accountancy network feasible immediately)
Capital to launch:      £15–25K (₹16–27L / $19–31K)
Top 3 assumptions to validate first:
  1. 10+ small-firm partners will pre-commit £49–£349/mo before MVP — validate via 30 founder calls in 2 weeks
  2. ACSP video-verification overage is 20%+ of directors — validate via 50-firm survey
  3. Companies House public API surfaces every director+PSC reliably — validate by week-1 prototype against 10 real client books
Kill criteria:
  - Abandon if <5 of 30 founder calls produce a "yes I'd pay for this"
  - Abandon if Thirdfort or Credas ships an integrated chase-and-CS01-prefill module before MVP
  - Abandon if Companies House announces a free first-party agent-portal that handles roster + chase + CS01 prefill end-to-end
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Pull a list of 200 ACSP-registered small firms from the public Companies House list. Prepare cold-outreach copy and a 4-min Loom demo of the chase dashboard mockup against a real demo client roster.
- **Day 2–3:** Send 200 personalised emails. Book 25–30 founder calls.
- **Day 4–5:** Run the calls. Ask three questions: "How many client confirmation statements did you delay last quarter because of unverified directors?", "What would you pay per month to make this disappear?", "Would you pre-pay 3 months at 50% off for early access?" Collect £49 × 3 = £147 deposits via Stripe link.
- **Day 6:** Tally. **Falsifiable bar: 10 firms paid the £147 deposit, OR 20 firms gave a written soft-yes ("we'd pay £X/mo when ready")**.
- **Day 7:** Decide. If hit, start the 16-week build with one engineer and one ex-practice-partner. If miss, the demand is not as hot as the regulator's panic suggests — go back to the cluster pile.

Demand is unambiguous; the only real question is whether the buyer's wallet has space for one more £130/mo SaaS line right now. Find out in seven days.
