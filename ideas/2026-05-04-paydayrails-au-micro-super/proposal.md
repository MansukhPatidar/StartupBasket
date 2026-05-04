---
title: PaydayRails — Payday Super copilot for AU micro-employers
slug: paydayrails-au-micro-super
date: 2026-05-04
category: Compliance / Australia SMB
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: Payday Super copilot for Australian tradies, cafés, and clinics with 1–9 staff replacing the SBSCH.
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Australia, Payday-Super, SMB, Solo-builder, Compliance-driven, Workflow-automation]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 7
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PaydayRails — Payday Super copilot for AU micro-employers

## 1. One-liner

Payday Super copilot for Australian tradies, cafés, and clinics with 1–9 staff replacing the SBSCH.

## 2. Trend signal — why now?

**The Australian government just shoved 248,000+ micro-employers off a cliff and didn't build them a parachute.**

- 1 July 2026: **Payday Super** legislation kicks in. Every employer — sole-trader-with-one-staffer included, **no small-business exemption** — must pay Super Guarantee within 7 business days of every payday, not quarterly. ([ATO](https://www.ato.gov.au/businesses-and-organisations/super-for-employers/payday-super/about-payday-super))
- Same day: the ATO's free **Small Business Superannuation Clearing House (SBSCH)** is permanently switched off at 11:59pm 30 June 2026. New users have already been blocked since 1 October 2025. ([ATO](https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-contributions/how-to-pay-super/small-business-superannuation-clearing-house))
- ABS June 2025 data: **994,178 employing businesses** in Australia, of which ~25% (≈248,500) have 1–4 staff. Most use SBSCH today because it's free. ([ASBFEO](https://www.asbfeo.gov.au/small-business-data-portal/contribution-australian-employment))
- The 12-month soft-landing **PCG 2026/1** ends 30 June 2027 — after that, full SG charge + nominal interest + admin fee on every late payment. ([ATO](https://www.ato.gov.au/businesses-and-organisations/super-for-employers/payday-super))
- A new statutory concept — **Qualifying Earnings (QE)** — replaces OTE. Includes commissions, salary-sacrifice amounts, and certain contractor payments. Most micro-employers cannot tell you which contractors count. ([Reckon](https://www.reckon.com/au/small-business-resources/payday-super/qualifying-earnings/), [Grant Thornton](https://www.grantthornton.com.au/insights/client-alerts/payday-super-and-contractors-key-issues-for-employers/))
- New 3-business-day fund return window means bounces must be detected and re-lodged inside the same 7-day clock, or the employer is in breach. ([Microkeeper](https://info.microkeeper.com.au/blogs/payday-super-your-questions-answered))
- Search signal: "SBSCH closure" content was non-existent 18 months ago. As of May 2026 every Big-4 firm, MYOB, Xero, Reckon, AustralianSuper and dozens of accountants have published panic-mode 2026 guides. ([Xero](https://www.xero.com/au/guides/sbsch-closure/), [PayCat](https://www.paycat.com.au/blog/the-ato-clearing-house-is-closing-on-1-july))

This is a hard-deadline regulatory event affecting a quarter-million small businesses with no exemption and no government safety net.

```
Provenance:
  - Signal 1 (Demand): SBSCH closing 30 Jun 2026 strands ~248K micro-employers — ATO mandated migration — https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-contributions/how-to-pay-super/small-business-superannuation-clearing-house — observed 2026-05-04
  - Signal 2 (Feasibility): SuperStream gateway access available via partner providers (Wrkr / Beam) and free fund clearing houses; AI can classify QE/contractor obligations from pay data — https://wrkr.com.au/superannuation/ — observed 2026-05-04
  - Signal 3 (Economic): AU super sector AUM ~A$3.9T, A$4.7B annual unpaid-super gap drove the legislation; Xero/MYOB/Employment Hero racing $30+/mo bundles — https://theconversation.com/soon-your-boss-will-have-to-pay-your-wages-and-super-at-the-same-time-heres-how-everyone-could-benefit-256564 — observed 2026-05-04
  Category: Regulatory arbitrage
```

## 3. The opportunity

The incumbents are mis-pricing this market.

- **Xero / MYOB / Reckon / Employment Hero** all bundle Payday Super into full payroll suites starting around A$30–55/mo. They'd rather upsell a tradie with one apprentice into a $35/mo Xero Starter plan than ship a stripped-down $9 super-only product that cannibalises themselves.
- **Free fund clearing houses** (AustralianSuper QuickSuper, Industry Super, etc.) are technically free but anchor you to one fund's portal, ugly UX, no contractor-classification, no STP-vs-SuperStream-vs-bank reconciliation, no AI.
- **Payroller, Microkeeper, FREEPAY** have free or near-free tiers but they're full payroll mental models — STP, leave, awards, payslips. A sparky with one apprentice doesn't want that. He wants "did super land safely on Friday — yes/no."

The wedge: a **payments-and-compliance-only** app — no payroll bloat — that makes the Payday Super run literally one screen. Connect bank → confirm pay run (or paste from Xero/MYOB/CSV) → AI flags contractor risk → push via a partner clearing house → green tick on payday +7. Priced for the A$9/mo wallet.

Not "another payroll product." A focused appliance that solves one regulatory event well.

## 4. Target market

- **Primary customer:** Australian micro-employers with **1–9 staff** who don't run a full payroll suite today: sole-trader tradies (electricians, plumbers, builders, landscapers) with an apprentice, café/restaurant owner-operators with 3–8 casuals, allied-health solo practitioners with one receptionist, single-clinic GPs, single-site lawyers/accountants with admin staff. ABN-registered, turnover typically A$200K–A$2M.
- **Why they buy:** "SBSCH is closing and I don't want to pay $35/mo for Xero just to send super." Plus: "I have one contractor who maybe is and maybe isn't owed super under the new rules — just tell me." Plus: "If a contribution bounces, I want to know before the 7-day clock kills me."
- **Rough TAM:** ~248,500 employing businesses with 1–4 staff (ABS June 2025), plus another tranche of ~89,000 with 5–19 staff (9% of 994K) for whom a focused product still beats Xero+. Realistic addressable wedge: 50K–80K bookings if priced right. At A$9/mo that's A$5–8M ARR.
- **Why now for them:** The 30 June 2026 SBSCH switch-off forces every one of them to *do something different by July*. Most will procrastinate until late June and hit Google in panic mode.

## 5. Product sketch (MVP)

- **One-tap pay run import** — paste from Xero / MYOB Solo / Excel / a screenshot of your bank statement. Photo-OCR for shoebox operators.
- **Qualifying Earnings calculator** — for each employee + contractor, computes correct QE under the new rules. Shows the breakdown line-by-line so you can challenge it.
- **Contractor super-liability AI** — paste an ABN or describe the relationship in natural English; flags whether the contractor is "labour-only / treat as employee for super." Shows the test it applied.
- **One-click SuperStream submission** — pushes the contribution batch via partner gateway (Wrkr / Beam / fund-direct). Same SuperStream Alliance-compliant message every payroll suite uses.
- **7-day clock dashboard** — every contribution sits in "Sent → Accepted → Allocated → Done" with a countdown. Bounces light up red with a one-click re-lodge.
- **STP ↔ SuperStream ↔ bank reconciliation** — three numbers must agree per pay cycle. We compute the diff and tell you what to fix.
- **Accountant view** — your bookkeeper logs in, sees every client's payday status in one grid. No more chasing.
- **End-of-quarter SG audit pack** — auto-bundle for your accountant, ATO-ready.

## 6. AI angle — what's load-bearing

Two genuine AI jobs, both load-bearing:

1. **Contractor classification.** The "is this contractor owed super under Payday Super?" question requires reading the actual ATO multi-factor employee/contractor test against the relationship as the user describes it. Without an LLM doing this in plain English from the user's words, you've shipped a static FAQ. Most accountants currently bill A$200–$400 for this judgment per contractor. We collapse it to a chat answer with citations.
2. **Pay-run extraction.** Photo of a bank statement, paste of an MYOB Solo screenshot, screenshot of a Xero pay run — the cheapest path for a tradie is "send what you've got." Vision LLM extracts gross/OTE/QE/super per line into the SuperStream payload. Without this, onboarding is a 30-minute CSV-mapping exercise and we lose them.

Strip the AI out and you're left with a clearing-house front-end. Strip the wedge product instead and you're left with no margin. The AI does the work that previously required an accountant on a billable hour.

## 7. Localization angle

This **is** the localization. SuperStream + ATO + AUSTRAC + the SuperStream Alliance + the Payday Super statutory concept of Qualifying Earnings + Australia's award/casual labour mix is an entirely Australia-specific stack. A US/UK/global product cannot service this. Vice versa: this product cannot leave Australia (which is fine — A$5M ARR inside a single regulatory regime is the entire pitch).

- Pricing in AUD. Stripe AU + PayTo as billing rails.
- Plain-English "no-jargon" copy in the UI, because the audience is tradies not finance leads.
- Targeted by state (NSW, VIC, QLD have biggest tradie populations) for ad spend.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** A$9/mo flat for up to 5 employees+contractors, A$19/mo for 6–15, A$39/mo for 16–30. Annual prepay 2 months free. No per-transaction fee — gateway costs absorbed.
- **ACV:** ~A$140 (mix-weighted across the three tiers).
- **$1M ARR (USD ≈ A$1.5M):** ~10,700 paying customers. From a TAM of ~250K micro-employers facing the deadline, that's 4.3% capture. Realistic for a 12-month SBSCH-migration window where customers are *forced* to choose something.
- **$5M ARR (USD ≈ A$7.5M):** ~54K customers, or ~22% of the 1–4 staff segment plus penetration into 5–19 staff. Stretches the wedge — by month 18 we either expand into accountant-channel resale or add adjacent compliance modules (BAS reminder, Director ID, etc.).
- **Expansion path:** (a) accountant/bookkeeper firm tier — A$99/mo for up to 20 client books, A$249/mo unlimited, white-label optional. (b) Director ID + ASIC company-renewal compliance modules. (c) STP-only filing add-on for clients who outgrow super-only.

## 9. Go-to-market wedge — first 100 customers

This is the bullseye and it's surprisingly tight.

- **Day 0–14: Accountant/bookkeeper LinkedIn outbound.** Scrape the 4,800 IPA + 1,300 ICB Australia members list. DM the 800 micro-firm bookkeepers (sole proprietor or 2-4 staff) the same Loom: "Your tradie clients are about to switch payroll because of SBSCH. We give you a free pro-account if you let us be the SBSCH-replacement recommendation. We do super only. We won't compete on bookkeeping." Expect 8–12% reply, 25 first conversations, 8 pilot firms × 5 client referrals = 40 customers.
- **Day 14–45: Niche subreddit + Whirlpool.** /r/AusFinance (700K), /r/smallbusinessaustralia (50K), Whirlpool Small Business forum (the actual home of micro-employer Australia). Answer every "SBSCH closing what do I do" thread with a substantive guide and a soft mention. Hit 30 customers.
- **Day 30–60: Tradie Facebook groups.** "Sparky Australia," "Builders & Tradies AU," "Small Business Tradies Australia" — combined ~150K members. Run a free 5-min "Am I Payday Super ready?" diagnostic that drops them into the funnel. 30 customers.
- **Day 0–90: Google Ads on hand-raisers.** "SBSCH alternative", "payday super for one employee", "cheapest super clearing house Australia." Long-tail, low-volume, very high intent. CPCs in the A$3–6 range. A$2K spend → ~15 customers at 4% conversion.
- **Always-on: SEO content engine.** Two posts a week on the long-tail keywords above. Compound from month 3 onward.

If we can't get 100 paying customers in 90 days from this in a market of 248K forced movers, the idea is wrong and we kill.

## 10. Build complexity — justification

**Medium.** SuperStream message generation (SAFF / contribution XML / receipt parsing) is well-documented and a partner gateway like Wrkr or Beam handles the actual fund-routing leg under contract — not greenfield work. STP Phase 2 reporting is similar — the spec is open. The two AI features (vision extraction of pay runs + contractor classification chat) are off-the-shelf with prompts. The legal/ESA setup is the slowest path: ~4–8 weeks to get a partner-gateway contract signed and confirm we don't need our own AFSL by routing payments end-to-end through a licensed partner. Realistic v1 in **14–18 weeks** with two builders. Not a 6-week toy. Not a research project.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Operate as software in front of a licensed partner gateway. Confirm AFSL not required by *not* taking custody of funds. |
| Ethical — no harm / dark patterns | ✅ | Solving a forced regulatory move. Cheaper than incumbents. |
| Market exists (evidence above) | ✅ | ~248K forced movers, hard 30 Jun 2026 deadline. |
| 1–5 person team can build this | ✅ | 2 builders, 14–18 weeks. |
| Launchable with <$50K / ₹40L | ✅ | A$30K covers gateway partner contract, AU entity, AUSTRAC light-touch advice, 6 months of Stripe + LLM API. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire for the affected wallet. ATO penalties + SG charge + interest = real money. SBSCH closing is a forced event, not a "nice to have." |
| Demand evidence | 15 | 13/15 | 248K affected. Multiple Big-4 panic guides. ATO actively pushing migration. Only thing missing: I haven't seen a viral Reddit thread of SMEs panicking yet — that's a May/June 2026 thing. |
| Build feasibility | 15 | 11/15 | SuperStream + STP specs mature, AI tasks are off-the-shelf, but the gateway-partner contract is a non-trivial business-development lift before line one of code lands. |
| Distribution clarity | 15 | 11/15 | Accountant outbound + niche forums + Google long-tail intent are all named, addressable channels. Conversion math reasonable but unproven on the bookkeeper-channel leg. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against MYOB Solo (A$10/mo), Payroller (~A$16/mo min), Easy Business App (A$9.95). Math to A$1.5M ARR is realistic. A$7.5M ARR requires expansion modules. |
| Time to first revenue | 10 | 8/10 | Pre-launch waitlist with deposit can land first revenue at MVP launch (~week 16). Hard deadline pulls forward demand. |
| Defensibility | 10 | 7/10 | Soft moats: bookkeeper-channel relationships, AI contractor-classification corpus that compounds, brand as "the SBSCH replacement." Copyable in ~6–9 months by a Xero-style player but they don't want to. |
| **Total** | **100** | **78/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

The founder needs to either be an Australian who's run payroll, or pair with a registered BAS agent / bookkeeper as advisor from day 1. Without domain trust, the accountant channel doesn't open.

### Key assumptions to validate (3–5)

1. **Assumption:** Micro-employers will pay A$9/mo for a super-only product when free fund clearing houses exist. **How to test:** Pre-launch waitlist with a A$1 deposit, target 200 deposits in 30 days from a A$1K Google Ads + Reddit content spend. Read intent from conversion rate.
2. **Assumption:** A partner-gateway model (Wrkr / Beam / equivalent) lets us avoid AFSL/AUSTRAC custody licensing. **How to test:** Two paid 1-hour calls with an Australian fintech compliance lawyer + one term-sheet conversation with Wrkr partner team. Decision in 2 weeks.
3. **Assumption:** The bookkeeper/accountant channel will refer 5+ clients per pilot firm. **How to test:** Sign 3 unpaid pilot bookkeepers on a handshake before code is written; if none of them can name 5 clients who'd pilot, the channel is weaker than assumed.
4. **Assumption:** Vision-extraction of pay runs from photos / pasted screenshots works reliably enough that onboarding is sub-5-minute. **How to test:** Build the extraction step alone as a Streamlit demo on real anonymised pay slips, target ≥90% line-item accuracy on 50 samples.
5. **Assumption:** Customers will trust a 6-month-old startup with their super payment workflow. **How to test:** Ship via a known accountant brand co-sign / press release in `Accountants Daily` or `Accounting Times`, measure conversion lift vs cold ad traffic.

### Risk flags

1. **Regulatory risk:** ATO could change implementation rules or extend the SBSCH transition. Mitigation: the pain remains even if the deadline slips — Payday Super itself doesn't go away.
2. **Platform dependency:** We rely on a partner gateway (Wrkr / Beam). Their pricing or willingness to onboard a thin SaaS in front of them could become a chokepoint. Mitigation: have a second gateway warm.
3. **Incumbent retaliation:** Xero or MYOB launches a free "super-only" tier to defend territory. Probable in months 6–12. Mitigation: dig the bookkeeper-channel moat early; price-only is a weak attack against entrenched workflow.
4. **Capital intensity at scale:** Per-transaction gateway fees could compress margin if customers run weekly payroll. Need to model this carefully and consider tiering.
5. **Trust risk at zero history:** Hardest objection in the first 6 months. Surface ATO partner-gateway lineage prominently.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Australia-based technical founder with payroll/bookkeeping advisor or co-founder; or solo technical operator partnered with a registered BAS agent
Time to revenue:        14–18 weeks to MVP, first paid customers via pre-launch deposit list
Capital to launch:      A$30–40K (partner-gateway contract, AU entity, fintech compliance counsel, 6 months of LLM + Stripe + hosting)
Top 3 assumptions to validate first:
  1. Partner-gateway model avoids AFSL/AUSTRAC custody requirements (compliance lawyer call + Wrkr term sheet, 2 weeks)
  2. Bookkeeper channel will refer 5+ clients per firm (3 unpaid pilot bookkeepers signed pre-build, 3 weeks)
  3. A$9/mo pricing converts at ≥3% from intent traffic (200 deposits from A$1K paid spend in 30 days)
Kill criteria:
  - Abandon if Wrkr/Beam/equivalent partner won't onboard a thin SaaS in front of them at a workable per-payment cost (<A$0.50/contribution at <500 customer scale)
  - Abandon if pre-launch waitlist deposits convert below 1.5% from cold paid traffic
  - Abandon if Xero or MYOB ship a free "super-only" tier before we hit 1,000 paying customers — the wedge is gone
  - Abandon if the AFSL/AUSTRAC question can't be cleanly resolved with the partner-gateway model — the capital math breaks
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Book two fintech-compliance lawyer calls (Sophie Grace, Holding Redlich-style) on the AFSL question. Cost ~A$1,200 total.
- **Day 2:** Email Wrkr and Beam partner teams with a one-page proposed integration; ask for indicative per-payment pricing at 100 / 1,000 / 10,000 customer scale.
- **Day 3:** Build a 1-page landing page (`paydayrails.com.au`) — value prop + A$1 deposit waitlist via Stripe AU. Two pricing tiers shown.
- **Day 4:** Spin A$500 Google Ads campaign on "SBSCH alternative", "payday super clearing house small business", "cheapest super clearing house Australia." Plus 6 substantive Reddit/Whirlpool comments on existing SBSCH-closure threads.
- **Day 5:** DM 50 micro-bookkeepers via LinkedIn with a Loom demo. Target 5 reply-and-book-call conversions.
- **Day 6:** Read the data. Lawyer answer + gateway pricing + waitlist conversion + bookkeeper interest.
- **Day 7 — Decide:** **Go** if (a) lawyer says partner-model works without AFSL, (b) Wrkr/Beam quote <A$0.50/contribution at scale, AND (c) ≥30 deposits + ≥3 booked bookkeeper calls. **No-go** if any one of those misses.

Falsifiable. Cheap. One week.
