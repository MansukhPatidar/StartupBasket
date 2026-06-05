---
title: "UdyamProof — MSME-status ledger for Indian buyers and CA firms"
slug: india-msme-status-evidence-ledger
date: 2026-06-05
category: Compliance / India SMB & CA Firms
complexity: Low
score: 75
verdict: GO
confidence: Medium
oneLiner: "Timestamps every vendor's Micro/Small/Medium status at each transaction so 43B(h) disallowance is computed on proof, not guesswork."
tags:
  vertical: Compliance
  model: SaaS
  geography: India
  secondary: [Compliance-driven, SMB, Tally-adjacent, AI-agent, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# UdyamProof — MSME-status ledger for Indian buyers and CA firms

## 1. One-liner

Timestamps every vendor's Micro/Small/Medium status at each transaction so 43B(h) disallowance is computed on proof, not guesswork.

## 2. Trend signal — why now?

Three things collided in the last 14 months and nobody has wrapped them into a finished product:

1. **Section 43B(h) turned vendor classification into a tax liability.** Since FY 2024-25, a payment to a Micro or Small enterprise made beyond 15/45 days isn't deductible in that year, plus interest at 3× the RBI bank rate (~20% p.a.), compounded and itself non-deductible. The disallowance turns on **whether the supplier was Micro/Small on the date of the transaction** — not the payment date, not year-end. ([cleartax](https://cleartax.in/s/section-43bh-of-income-tax-act))

2. **The April 1, 2025 reclassification reshuffled the whole supplier base.** Investment limits went up 2.5×, turnover limits doubled (Micro now ₹10cr turnover, Small ₹100cr). Suppliers that were Small last year are Micro this year; ones near the line flip back and forth. The Udyam portal **auto-reclassifies** when thresholds are crossed and marks a registration inactive if not updated annually. ([pmnco](https://pmnco.co.in/blog/msme-classification-2026/), [taxmann](https://www.taxmann.com/post/blog/revised-msme-classification))

3. **The portal only shows a current snapshot — there is no historical record.** Once a vendor is auto-reclassified or updates their certificate, the status that applied to your May invoice is gone. The auditee (not the supplier) must produce dated proof of the supplier's class at transaction time for Form 3CD Clause 22. Today that's manual screenshots in a folder. ([carajput](https://carajput.com/blog/auditor-responsibility-form-3cd-report-compliance-u-s-43bh/), [eudyamaadhar](https://eudyamaadhar.org/udyam-registration-status-check-2026/))

The Udyam verification *API* is now a commodity — IDfy returns in under 2 seconds, SignalX/Deepvue/Gridlines/Figment all sell bulk endpoints. The plumbing is cheap. What's missing is a product that turns one-time lookups into a continuously-maintained, point-in-time **evidence ledger** tied to a buyer's payables.

Provenance:
  - Signal 1 (demand): Auditee must maintain dated proof a supplier was Micro/Small at transaction time for Form 3CD Clause 22; done manually today — https://carajput.com/blog/auditor-responsibility-form-3cd-report-compliance-u-s-43bh/ — 2025
  - Signal 2 (feasibility): Udyam verification APIs commoditized — IDfy <2s, SignalX/Deepvue/Gridlines bulk CSV — https://signalx.ai/msme-verification-api/ — 2026
  - Signal 3 (economic): April 1 2025 classification overhaul (limits 2.5×/2×) + auto-reclassification + 3× RBI-rate non-deductible interest = real money and mass status churn — https://pmnco.co.in/blog/msme-classification-2026/ — 2025
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbent answer is **Tally's static MSME flag**. You type the Udyam number into the party ledger once, tag the vendor Micro/Small/Medium, and Tally filters overdue MSME payables. That's genuinely useful — and it's the trap. The flag is entered *once* and never re-checked against the live portal. When the government auto-reclassifies the vendor, Tally keeps showing last year's class. You either over-disallow (and overpay tax on payments that were actually fine) or under-disallow (and eat a penalty when the assessing officer pulls the current Udyam record and it doesn't match your books).

The API vendors solve the opposite half badly: they sell raw verification calls aimed at enterprise vendor-onboarding KYC teams. No buyer-side payables context, no point-in-time archive, no audit packet, no SMB pricing. A 40-person manufacturing firm in Coimbatore isn't integrating a REST API.

UdyamProof sits in the gap: it **continuously re-verifies your actual vendor list against the live Udyam portal, captures a dated, signed snapshot of each vendor's class at every transaction, and hands the CA an audit-ready packet at tax-audit time.** Tally tells you a vendor is Small; UdyamProof proves what they were on the day you bought from them, and tells you the day that changed.

## 4. Target market

- **Primary customer:** (a) Accounts/finance manager at Indian SMBs with ₹5cr–₹250cr turnover buying from dozens-to-hundreds of small vendors (manufacturing, trading, distribution, services). (b) **CA firms and tax-audit practices** that run 43B(h)/Clause 22 reporting for 30–300 clients each — the wedge buyer.
- **Why they buy (their pain):** "It is the responsibility of the assessee to classify and identify those suppliers covered by this Act" and to hold the documentary proof; the auditor cross-checks it. When the AO disputes a classification, the buyer needs dated evidence — and the portal won't give them history. CAs are doing this across an entire client base by hand, twice a year, against a deadline.
- **Rough TAM reasoning:** ~140,000+ tax-audit-eligible entities run by ICAI members; tens of thousands of CA firms file 3CD reports. Even 3,000 paying buyers (firms + direct SMBs) at ₹15k–60k/yr is a ₹6cr–₹18cr ARR business — squarely in the $1M–$5M band.
- **Why now for them:** FY 2024-25 was the first full year 43B(h) bit; AY 2025-26 tax audits (filed late 2025) were the first time AOs had data to scrutinize. The April 2025 reclassification means FY 2025-26 books are full of vendors whose class changed mid-year. The pain just became annual and the evidence gap just got wider.

## 5. Product sketch (MVP)

- **One-click vendor import** from a Tally/Busy/Zoho Books export or a CSV of PAN/GSTIN/Udyam numbers.
- **Live re-verification** of every vendor against the Udyam portal on a schedule (monthly, plus on-demand), returning Micro/Small/Medium/Unregistered/Inactive.
- **Point-in-time ledger:** every verification stored as a dated, immutable record — so "what was vendor X on 12-May-2025" is one query, forever.
- **Change alerts:** "4 vendors reclassified this month; 1 went Small→Medium (now outside 43B(h)); 2 went inactive — collect fresh certificates."
- **43B(h) exposure view:** overlay each vendor's transaction-date class on outstanding payables to flag amounts at disallowance risk before March 31.
- **Audit packet export:** per-client PDF bundle of dated status snapshots + Udyam certificates, formatted to drop into Form 3CD Clause 22 workpapers.
- **CA multi-client workspace:** one dashboard across all clients, bulk re-verify, per-client billing.

## 6. AI angle — what's load-bearing

AI isn't decoration here, but I'll be honest about where it sits. The verification call is deterministic (portal/API lookup). The load-bearing AI work is **reconciliation and matching**: vendor masters in Indian SMBs are filthy — same supplier under three spellings, missing Udyam numbers, PAN entered in the GSTIN field, trade name vs legal name mismatches. An LLM-driven entity-resolution layer maps a messy vendor list to verifiable identities and infers the right lookup key, which is the difference between "import works" and "user gives up in 5 minutes." Second, an agent reads the buyer's ledger export and **explains the 43B(h) consequence in plain Hindi/English per vendor** ("pay ₹2.3L to Sharma Industries before 31-Mar or lose the deduction") instead of dumping a table. Strip the AI and you're left with a CSV uploader nobody can get data into.

## 7. Localization angle

This is India-native by construction — the entire product is built on a single Indian government regime (Udyam / MSMED Act / Section 43B(h)) that exists nowhere else. Localization *is* the moat: ₹ pricing (a ₹1,499/mo tier works where a $49 global tool has no reason to exist), Tally/Busy import as table stakes, Hindi + regional output for accounts staff, and WhatsApp delivery of month-end change alerts to the proprietor. No global incumbent will ever build this; it's too specific to one country's tax code.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Direct SMB ₹1,499/mo (up to 150 vendors). CA-firm plans ₹4,999–₹14,999/mo by client count (50/200/500 clients), the core SKU. Per-verification billing absorbed into tiers; heavy users metered.
- **ACV:** ~₹18k direct SMB; ~₹90k–₹1.4L for CA firms.
- **To ₹1cr (~$1.2M) ARR:** ~700 CA-firm seats at ₹90k, or a blend of ~400 firms + 1,500 direct SMBs. Reachable through ICAI study-circle channels.
- **To ₹4cr (~$5M) ARR:** ~3,000 firms or a firm+SMB blend; requires becoming the default 43B(h) workpaper tool referenced in CA training material and a Tally TDL/connector that pulls status back into the party ledger.
- **Expansion path:** add full 45-day payment tracking, interest-liability computation, MSME Samadhaan dispute pack generation, and TReDS nudges — each a paid module. ACV grows as the tool moves from "evidence" to "the whole 43B(h) workflow."

## 9. Go-to-market wedge — first 100 customers

- **ICAI study circles & branches.** There are hundreds of local CA study circles that run CPE sessions. Offer a free 30-minute "43B(h) evidence & Clause 22" talk + a free audit-packet for one client. Sign 2–4 firms per session. 30 sessions → 60–120 firms.
- **Tax-audit-season cold outreach (Jul–Sep).** Scrape CA-firm listings from ICAI's member directory and Justdial/Sulekha by city; send a personalized Loom showing their *own* sample vendor list re-verified with a reclassification they didn't know about. Target ₹500cr-of-AOcity firms; 2,000 emails at 4% reply → 80 demos.
- **Tally-partner ecosystem.** ~25,000 Tally resellers/partners sell to exactly this SMB. Recruit 10 as referral partners at 20% rev-share; they already sit in the accounts room when 43B(h) comes up.
- **Content wedge:** one sharp piece — "The Udyam portal deletes your evidence: why your 43B(h) screenshots won't survive an AO query" — seeded in CA WhatsApp/Telegram groups and LinkedIn. This is a known fear; it travels.

If I can't sign 10 CA firms off two study-circle talks in a month, the wedge is wrong — but the audience is concentrated, reachable by name, and already feeling the deadline.

## 10. Build complexity — justification

**Low–Medium.** The verification layer is an off-the-shelf Udyam API (IDfy/SignalX/Deepvue) plus a scheduler and an append-only datastore — no novel infra. The genuinely custom work is the vendor entity-resolution/matching (LLM-assisted but bounded) and the audit-packet generator. Tally/Busy import is parsing known export formats. A 2-person team ships a credible v1 in 8–10 weeks; the CA multi-client workspace adds a few more. No research risk, no hardware, no regulatory approval to launch.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Uses official Udyam verification; helps statutory compliance. |
| Ethical — no harm / dark patterns | ✅ | Improves auditor honesty; reduces both over- and under-payment of tax. |
| Market exists (evidence above) | ✅ | 43B(h) is live, biting, and creates a documented evidence burden. |
| 1–5 person team can build this | ✅ | Off-the-shelf API + standard web stack + LLM matching. |
| Launchable with <$50K / ₹40L | ✅ | Build + API credits + CPE-session travel well under ₹40L. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money (disallowance + ~20% non-deductible interest) and audit exposure, but felt acutely ~twice a year, not daily. |
| Demand evidence | 15 | 12/15 | Documented auditee burden, mass reclassification, live API market, Tally feature gap — multiple independent signals. Short on raw verbatim user quotes. |
| Build feasibility | 15 | 13/15 | Mostly off-the-shelf; matching layer is the only real engineering. v1 in ~8–10 weeks. |
| Distribution clarity | 15 | 12/15 | ICAI study circles + Tally partners are named, concentrated channels; conversion math plausible but untested. |
| Revenue mechanics | 15 | 11/15 | ₹ pricing realistic; CA-firm ACV strong; depends on firms paying for an "evidence" tool vs absorbing it into fees. |
| Time to first revenue | 10 | 8/10 | Pre-sellable to CA firms during audit season; 4–8 weeks to first cheque. |
| Defensibility | 10 | 3/10 | Thin. The accumulating point-in-time ledger is the only compounding moat; verification itself is a commodity API a competitor can rent tomorrow. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (you must speak fluent 43B(h)/Form 3CD to sell to CAs) · `technical-heavy` (entity resolution + reliable scheduled verification)

### Key assumptions to validate (3–5)

1. **Assumption:** CA firms will pay a recurring fee for an evidence/ledger tool rather than absorb the work into audit fees. **How to test:** 30 firm interviews; pre-sell 10 annual plans before building the multi-client workspace.
2. **Assumption:** Status drift is frequent enough to matter — i.e. a meaningful share of vendors reclassify or go inactive within a year. **How to test:** re-verify a real 200-vendor master monthly for 60 days; measure the change rate.
3. **Assumption:** AOs are actually pulling current Udyam records and disputing classifications (so dated evidence has teeth). **How to test:** interview practitioners about AY 2025-26 scrutiny experience; find 3 real notices.
4. **Assumption:** Udyam API uptime/coverage is good enough to verify continuously at SMB-tolerable cost. **How to test:** run a paid pilot against IDfy + one alt; measure hit-rate, latency, per-call cost.

### Risk flags

1. **Defensibility risk:** The core verification is a rented API. The only durable asset is the accumulated historical ledger and CA-channel trust. Must get to "system of record for 43B(h) evidence" fast or get cloned.
2. **Platform dependency:** Total reliance on the Udyam portal/API. If the government opens a free historical-status lookup, the evidence wedge shrinks (though the workflow/CA layer survives).
3. **Seasonality:** Demand spikes at March year-end and Sep audit; risk of churn in quiet quarters. Mitigate by tying value to year-round change-alerting, not just audit season.
4. **Tally incumbency:** If Tally ships live re-verification into the party ledger, it eats the SMB-direct tier. The CA multi-client workspace and audit-packet output are the defensible flank.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a practicing CA (domain advisor) who sells into ICAI circles
Time to revenue:        4–8 weeks (pre-sell to CA firms in audit season)
Capital to launch:      ₹4–8 lakh ($5–10K) — build + API credits + CPE-session travel
Top 3 assumptions to validate first:
  1. CA firms pay recurring for an evidence tool — pre-sell 10 annual plans before building the workspace
  2. Vendor status drift is material — re-verify a real 200-vendor master for 60 days, measure change rate
  3. AOs dispute classifications — find 3 real AY 2025-26 notices where dated proof would have helped
Kill criteria:
  - Abandon if <3 of 30 interviewed CA firms will pre-pay an annual plan
  - Abandon if status-drift rate on a real vendor master is <2% per year (then static Tally flag is good enough)
  - Abandon if the government launches a free point-in-time Udyam history lookup before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Get one friendly CA firm's anonymized 150–300-vendor master. Re-verify every vendor against a paid Udyam API. Count how many are reclassified, inactive, or mismatched vs the firm's books.
- **Day 3–4:** Take that result to 10 CA firms in one city (or one study circle). Show them their peer's drift number and a mocked audit packet. Ask the closing question: "₹4,999/mo across your audit clients — pre-pay 3 months today?"
- **Day 5:** Go / no-go. **Falsifiable bar:** ≥3 firms verbally commit to pre-pay AND the test master shows ≥2% of vendors with a status change/mismatch the firm didn't know about. Miss either → the static Tally flag is good enough and this is a feature, not a company.
