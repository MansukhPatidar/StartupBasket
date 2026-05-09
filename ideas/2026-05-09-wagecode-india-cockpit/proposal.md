---
title: WageCode — India Labour Codes cockpit for SMB employers
slug: wagecode-india-cockpit
date: 2026-05-09
category: Compliance SaaS / India SMB Employers (10–100 employees)
complexity: Medium
score: 80
verdict: STRONG GO
confidence: Medium
oneLiner: Restructure SMB salaries for India's April 2026 Labour Codes and run the 2-day FnF clock — sold via CAs.
tags:
  vertical: Compliance
  model: SaaS
  geography: India
  secondary: [WhatsApp-first, Multilingual, Compliance-driven, SMB, AI-agent, CA-distributed]
axes:
  problem: 17
  demand: 13
  build: 12
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, sales-heavy]
featured: true
---

# WageCode — India Labour Codes cockpit for SMB employers

## 1. One-liner

Restructure SMB salaries for India's April 2026 Labour Codes and run the 2-day FnF clock — sold via CAs.

## 2. Trend signal — why now?

India's four Labour Codes (Wages, Industrial Relations, Social Security, OSH) became enforceable on **21 November 2025** with full operational enforcement on **1 April 2026**. They consolidate 29 prior labour laws. Three load-bearing provisions hit small employers hard:

- **50% Wage Rule** — Basic + DA + Retaining Allowance must be ≥50% of CTC. Most SMBs today run basic at 25–35% to suppress PF and gratuity. April 2 onward, every salary stack that misses the threshold is auto-rebased — employer PF can literally double overnight ([cleartaxadvisors.in, May 2026](https://cleartaxadvisors.in/new-labour-codes-2026/); [indiapolicyhub.in, Apr 2026](https://indiapolicyhub.in/2026/04/14/pf-contribution-calculation-new-labour-code-2026/)).
- **2-day Full & Final Settlement** — Section 17(2) of Code on Wages: all dues paid within two working days of exit, not the historical 45–60 days. Repeat default = up to 3 months imprisonment plus fines ([Nexdigm, 2026](https://www.nexdigm.com/inthenews/2-day-full-and-final-settlement-post-employees-resignation-now-mandatory-under-labour-codes-what-it-means-for-employers/); [angelone.in, 2026](https://www.angelone.in/news/personal-finance/new-labour-codes-2025-2-day-full-and-final-settlement-rule-for-all-employees)).
- **Fixed-term gratuity from day one** — Fixed-term employees now accrue gratuity after 1 year of service (not 5), at 15-days-wages-per-year. Every fixed-term contract is now a balance-sheet liability that has to be provisioned ([labourlawreporter.com, 2026](https://labourlawreporter.com/gratuity.asp)).

Compounding it: the Ministry of Labour itself shipped an "Additional FAQs" PDF in March 2026 because employers were so confused. A widely-syndicated industry headline: *"Most small business owners are waiting to 'see what happens.' Most HR departments are scrambling."* ([loophealth.com, 2026](https://www.loophealth.com/post/what-indias-new-labour-codes-mean-for-hr-a-complete-compliance-checklist-for-2026)).

Provenance:
  - Signal 1 (demand): India's Ministry of Labour notified all four Codes effective Nov 21, 2025; final rules and full enforcement from April 1, 2026; SMB HR teams scrambling, owners frozen — [key4comply.com, 2026](https://www.key4comply.com/indias-2026-labour-codes-gig-worker-recognition-50-basic-pay-rule-national-floor-wage-osh-compliance) — Mar 2026
  - Signal 2 (feasibility): EPFO/ESIC/Shram Suvidha unified return APIs are live; multilingual LLMs can draft Hindi/Tamil/Marathi appointment letters at near-zero marginal cost; WhatsApp Business API mature for employee comms — [labour.gov.in FAQ](https://www.labour.gov.in/static/uploads/2026/03/a4ccf4c6d97c4f1f36a6d83f8c64213d.pdf) — Mar 2026
  - Signal 3 (economic): Indian payroll outsourcing for 10–50 employee shops costs ₹16K–₹83K/mo with manual Excel hand-offs; Keka starts at ~₹17,600/mo for 50 employees; existing labour-code calculators (KSK, hrcalcy, labourcodecalc) are free standalone toys, not workflow tools — [tmservices.co.in, 2026](https://tmservices.co.in/payroll-outsourcing-cost-india/), [authencio.com, 2026](https://www.authencio.com/blog/keka-hr-software-guide-features-pricing-pros-cons-alternatives-for-indian-smbs) — Apr–May 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The full-stack HRMS players (Keka, Zoho People, GreytHR, Darwinbox) are racing to add Labour-Code modules for their *existing* mid-market customers. Nobody is shipping a focused, sub-₹2,000/month tool for the 5–10 million Indian SMBs who run payroll on Excel + WhatsApp + their CA — and who now face a hard April 1, 2026 wall.

The wedge is sharp: don't sell a full HRMS, sell **the four things the Codes force**:
1. Restructure every employee's salary stack to clear the 50% rule, model the cash impact, and show the owner the new monthly burn.
2. Generate the new appointment letters / addenda in the employee's language and walk-through the "your take-home is changing because of the law" conversation over WhatsApp.
3. Run the 2-day FnF clock the moment a resignation/termination is logged — auto-build the settlement statement, show the owner exactly what to pay before the imprisonment-risk clock expires.
4. Maintain a live gratuity provision per fixed-term contract and per permanent employee, exportable into the books.

What incumbents do badly:
- **Keka / Zoho People / GreytHR** — Built for 50–500 employee shops with an HR person. Onboarding takes weeks. Pricing too high for sub-30 employee owner-operated SMBs. They treat the Labour Codes as a feature update, not an emergency.
- **CAs and outsourced payroll consultants** — Have the relationship and the trust, but no software. Their leverage today is Excel + email. They are precisely the channel partner who needs WageCode the most.
- **Free calculators (KSK, hrcalcy, labourcodecalc)** — Single-employee toys. Don't ingest your roster, don't generate documents, don't track FnF clocks, don't accrue gratuity, don't WhatsApp employees.

Focused tool + CA channel = a six-month land-grab while the giants are still scoping the feature.

## 4. Target market

- **Primary customer:** Owner of a 10–100 employee Indian SMB — proprietorship, LLP, or private limited. Sectors: small manufacturing units, IT services bench shops, restaurant chains (3–10 outlets), retail chains, logistics SMBs, healthcare clinics, ed-tech & coaching institutes. Tier 1/2/3 cities. Annual turnover ₹2–50 crore. The buyer is usually the owner or a finance/HR-of-one. Often the *real* buyer is the company's outside CA.
- **Why they buy:** "April 2 I am non-compliant on a code that says I can be jailed for repeat FnF defaults, my PF cost is going up 5–15% per employee, and I have no idea what to put on the new appointment letters. My CA says 'restructure everyone' and emails me an Excel sheet I don't understand."
- **Rough TAM reasoning:** India has 7.3 crore Udyam-registered enterprises (~73M); ~1.5% are "small" + ~0.8% "medium" — call it ~1.7M small+medium with paid employees. Strip to ones with 10+ employees (ESIC trigger) — conservatively 1.5–2 million firms in scope. Even 0.5% penetration = 7,500–10,000 customers. ([statista, 2025](https://www.statista.com/statistics/1384894/india-number-of-registered-msmes-by-type/); [pib.gov.in, Dec 2025](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2209712&reg=3&lang=1))
- **Why now for them:** Hard April 1 deadline; first PF / ESIC return cycle on the new wage definition lands May–June 2026; the first 2-day FnF dispute escalation to Shram Suvidha against an SMB will make news within 60 days and panic the rest of the market.

## 5. Product sketch (MVP)

- **Roster ingest** — CSV/Excel from Tally, Zoho Books, Marg, BUSY, or hand-typed. Pulls current CTC, basic, DA, allowances per employee.
- **50% Rule auditor** — Per-employee diff: "Old basic ₹15,000 → New basic ₹25,000. Old PF ₹1,800 → New PF ₹3,000. Take-home down ₹1,200/month. Owner cost up ₹1,400/month." Roll-up: "Your monthly payroll burn rises ₹2.4 lakh, your annual gratuity provision rises ₹3.1 lakh."
- **Restructure recommender** — Three options per employee (preserve take-home, preserve owner cost, balance both); owner picks one and locks it.
- **Bilingual appointment-letter generator** — One-click new offer letter / addendum in English + Hindi / Tamil / Marathi / Bengali / Gujarati / Kannada / Telugu, ready to print or e-sign.
- **WhatsApp explainer** — Employee gets a vernacular WhatsApp message: "your salary structure is changing because of the new law — here's why your take-home moves; here's why your retirement corpus grows." Avoids the manager-vs-employee fight.
- **2-day FnF clock** — Mark resignation/termination → countdown timer → auto-built settlement statement (notice pay, leave encashment, pro-rata bonus, gratuity, deductions) → printable receipt + payment-rail handoff (RazorpayX / Cashfree / direct UPI link).
- **Fixed-term gratuity ledger** — Every fixed-term contract carries a live accrual; export into Tally / Zoho Books at month-end.
- **CA workspace** — A CA logs in, sees all client SMBs in one panel, runs audits in bulk, charges the SMB through WageCode and earns a revshare.

## 6. AI angle — what's load-bearing

Three places AI is doing real work:

1. **Salary-stack restructuring under constraints** — For each employee the system has to find the new wage stack that satisfies the ≥50% rule *and* preserves either take-home or employer cost or finds a Pareto-balance — across hundreds of employees with different statutory states (Karnataka vs. Maharashtra vs. Tamil Nadu PT, ESIC threshold, state minimum wages). LLM does the explanation + edge-case handling; deterministic engine does the math.
2. **Vernacular employee comms** — Auto-drafted WhatsApp messages and one-pager PDFs in 8+ Indian languages explaining *why* take-home is dropping. Without LLMs, this is ten lawyer-hours per employee. With LLMs, ten cents.
3. **CA copilot for the FnF and audit panels** — Free-text "draft Mr Sharma's settlement letter, he has 4.2 years tenure, 12 days notice owed, leave balance 8.5 days, gratuity due ₹54,200" → returns the document in the CA's voice.

Strip AI out and you're back to Excel + a labour-law textbook — i.e. the current status quo that this product is replacing. AI is the unlock.

## 7. Localization angle

This is the localization angle. India-only:

- **Language:** Appointment letters and employee comms must run in 8+ vernaculars. Generic global HRMS players don't.
- **Payment rails:** UPI links + RazorpayX payouts for the FnF settlement. No US payroll DNA needed.
- **Distribution:** Via the country's CA / company-secretary network — a uniquely Indian channel.
- **Pricing:** ₹999–2,999/mo per company hits a wallet that $49/mo Western tools can't.
- **Regulatory granularity:** State-by-state PT, ESIC thresholds, professional tax slabs, region-specific minimum wages, state notification timelines for the Codes themselves (Codes are central law but several enabling state rules still trickle in).

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Owner-operated SMB plan:** ₹999/mo for ≤25 employees, ₹1,999/mo for 26–60, ₹3,499/mo for 61–100. One-time onboarding & restructuring exercise: ₹4,999.
  - **CA plan:** ₹4,999/mo flat for the first 10 client SMBs in a CA's panel, ₹399/mo per additional SMB. Revshare 20% of any direct SMB conversions referred by the CA.
- **ACV:** Blended ~₹18,000/year direct + ~₹60,000/year per CA (≈ $215 / $725 per logo per year).
- **Path to $1M ARR (~₹8.5 cr):** 4,000 direct SMB seats × ₹18K ACV = ₹7.2 cr + 200 CAs × ₹60K = ₹1.2 cr → ₹8.4 cr ARR. Realistic in 18 months given the deadline urgency.
- **Path to $5M ARR (~₹42 cr):** 18,000 direct SMBs + 800 CAs covering 6,000 panel SMBs. Needs to outlast the deadline panic and become the default ongoing labour-codes layer; expansion into the unified single-window quarterly return + statutory-deduction filing helps.
- **Expansion path:** Annual recompute (every salary revision triggers a re-audit). Add: PT filing, monthly PF/ESIC challan generation, e-nomination tracking under SS Code, gig-worker contract tracking (gig-worker fund is a separate Codes provision picking up momentum). Within two years, become the labour-side counterpart to ClearTax for an SMB.

## 9. Go-to-market wedge — first 100 customers

The deadline is the marketing budget. Use it.

- **Channel 1 — CA partner blitz (50 of the 100):** ICAI has 4+ lakh members and ~1.5 lakh practising CAs. Identify the ~5,000 small CA firms that publicly list "payroll outsourcing" or "labour law compliance" on their websites or LinkedIn. Cold-call 1,500 in Pune, Bengaluru, Hyderabad, Delhi-NCR, Surat, Indore. Offer: free audit of any 3 of their client SMBs, then 20% revshare on conversion. Expect 8–12% to engage, 2–3% to actively partner. That's 30–45 active CAs, each bringing 2–4 client SMBs in the first month.
- **Channel 2 — Industry associations (20 of the 100):** Cold-pitch CII MSME chapter, FICCI MSME, NASSCOM startup hub, AIDC (auto), IESA (electronics). Offer free webinars: "Your 90-day Labour Codes plan." Webinar → free audit → paid plan. Each webinar with 80–150 attendees converts 2–4 paying SMBs.
- **Channel 3 — LinkedIn outbound to founders + SMB owners (15 of the 100):** Sales-Navigator-filter for "Founder / Director / Proprietor" at companies with 11–100 employees in India, posted about hiring or HR in the last 90 days. Personalised DM with a one-screen audit of their likely PF cost increase under the Codes (we can ballpark from public salary data). 1,500 DMs → ~6% reply → 1.5% close = ~22 customers.
- **Channel 4 — SEO + paid intercept on "labour code calculator" (10 of the 100):** Free calculator that out-performs the existing free calculators (multi-employee bulk upload, vernacular output). Lead-gen the email and book a 15-minute "show me the full audit" call. Cheap Google Ads on `[india labour code calculator]`, `[50% wage rule calculator]`, `[2-day full and final settlement rule]`. Converts the highest-intent fraction.
- **Channel 5 — One viral founder story per month (5 of the 100):** Anonymised case study: "How a 38-employee Indore textile factory cut its FnF risk and absorbed ₹2.1L/mo PF cost in 9 days." Post on r/IndianStreetBets (founders read it), r/IndiaInvestments, LinkedIn, Twitter. Founders text founders.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: Next.js + Postgres + LLM API for the explainer/letter generator + WhatsApp Business API + RazorpayX/Cashfree for FnF payouts + simple CSV ingest. Custom: a deterministic salary-restructuring engine encoding the Codes' constraints and ~36 state-specific PT/ESIC/min-wage rule tables. The salary engine + state rule library + bilingual document templates are the real work — call it 10–14 weeks for a 2-engineer + 1-domain-expert team to a credible v1, with the FnF clock and CA workspace landing in weeks 14–20.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance tool is legal and pro-regulator. Must register as an authorised payroll service provider for any direct payouts; can sidestep by handing off to existing rails. |
| Ethical — no harm / dark patterns | ✅ | Helps employers comply with worker-protective law. Vernacular employee comms increase transparency, not the reverse. |
| Market exists (evidence above) | ✅ | Hard regulatory deadline, ~1.7M companies in scope, established willingness to pay for payroll/CA services. |
| 1–5 person team can build this | ✅ | 2 engineers + 1 domain (CA or labour-law adviser) is the right shape. |
| Launchable with <$50K / ₹40L | ✅ | Build + 4 months runway + LinkedIn/CA outreach budget under ₹35L. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire for 10–100 employee owners. PF doubling, jail risk on FnF, every salary stack technically non-compliant. Loses points only because some owners will ignore the rule until enforcement actually bites. |
| Demand evidence | 15 | 13/15 | Hard April 2026 deadline; widely-syndicated "HR scrambling" coverage; existing free calculators getting traffic; payroll-outsourcing market already pays ₹16K–₹83K/mo. Loses points because no one yet has an SMB-shaped paid product to benchmark conversion against. |
| Build feasibility | 15 | 12/15 | Deterministic restructuring engine + 36 state rule tables + multilingual templates is real work but bounded. Off-the-shelf for everything else. 14–20 weeks credible. |
| Distribution clarity | 15 | 12/15 | CA channel is concrete and sized; LinkedIn outbound math works; deadline-driven webinars are a known motion. Loses points because CA channel conversion is unproven and slower than direct SaaS. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked against payroll outsourcing (we are 5–20× cheaper) and Keka (we are 5–10× cheaper for the use case). $1M ARR math is sound; $5M needs the expansion path to hold. |
| Time to first revenue | 10 | 8/10 | Pre-sellable to CAs from week 4 of build via a ₹999 audit-only SKU, paid plan from week 12. |
| Defensibility | 10 | 6/10 | Soft moats: state rule library, CA partner network, vernacular template corpus, accumulating salary-stack benchmarks. No hard moat. A funded incumbent (Keka, RazorpayX Payroll) could clone in 9 months — speed and the CA channel are the only real defenses. |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (Indian labour law / payroll), `sales-heavy` (CA and association channel motion is the core distribution).

### Key assumptions to validate (3–5)

1. **Assumption:** CAs in Tier 1/2 cities will sign a 20% revshare partner agreement and actively push the tool to ≥3 SMB clients each. **How to test:** 30 in-person CA meetings in Pune + Bengaluru + Surat in week 1; signed LOIs from ≥6 by end of week 2.
2. **Assumption:** SMB owners will pay ₹1,999/mo for a tool that touches payroll without a brand they know. **How to test:** Land 10 paying SMBs from the CA-driven pipeline by end of month 3 at ≥₹999/mo. If average ACV is below ₹12K, the business model is fragile.
3. **Assumption:** Restructuring + FnF cockpit + vernacular comms together is a stickier wedge than any one alone (low first-year churn). **How to test:** Track usage events 30/60/90 days post-restructure. If <50% of customers log in for an FnF event within 90 days, the FnF cockpit isn't load-bearing — re-pitch as a one-time restructuring product with optional renewals.
4. **Assumption:** Keka / Zoho People / Darwinbox don't ship a competitive labour-codes-only SKU at <₹999/mo within 9 months. **How to test:** Quarterly competitive scan; if any incumbent prices an SMB-tier Labour Codes module, we need a defensive pricing or feature move.
5. **Assumption:** The Ministry doesn't push the April 1, 2026 deadline back another 3–6 months. **How to test:** Watch labour.gov.in notifications and PIB releases monthly. A delay is a real risk that compresses urgency.

### Risk flags

1. **Regulatory risk:** State-level rules under each Code are still being notified piecemeal; the central rules can be amended; enforcement intensity is the real driver of urgency. If states delay or enforcement is lax, urgency leaks out of the deal.
2. **Channel dependency:** Heavy reliance on CA partners. If revshare conversion is below 1%, the math breaks and we're stuck with much more expensive direct outbound.
3. **Incumbent response:** Keka, GreytHR, Zoho People, RazorpayX Payroll all see the same opportunity. A funded competitor pricing at ₹499/mo with a brand SMBs trust is the existential risk.
4. **Liability surface:** Telling an SMB "this is what to pay employee X" carries real legal weight. Need terms-of-service that pin liability on the employer + insurance + a CA in the loop for non-trivial cases.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       Indian labour-law-fluent founder + senior payroll engineer + CA advisor on the cap table
Time to revenue:        8–12 weeks (pre-sold via CA pilots in week 4)
Capital to launch:      ₹30–40 lakh ($35–47K) — covers build + 4 months runway + outbound budget
Top 3 assumptions to validate first:
  1. CA channel revshare lands signed LOIs from 6+ practices in 14 days of in-person outreach
  2. SMB owners pay ₹1,999/mo direct without an HRMS brand they know — 10+ paying logos by end of month 3
  3. Re-engagement after the one-time restructure exists (FnF/gratuity events drive ≥50% of customers to log in within 90 days)
Kill criteria:
  - Abandon if <2% of 200 cold CA outreach attempts convert to a signed partner LOI by end of month 2
  - Abandon if Ministry pushes the April 1, 2026 effective date out by 12+ months — urgency collapses
  - Abandon if a funded incumbent (Keka / RazorpayX / GreytHR) ships a Labour-Codes SMB SKU priced ≤₹999/mo before our v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a one-screen "what your payroll cost will be on April 2, 2026" calculator that takes a CSV roster and outputs a ₹-per-month delta. Land it on a single landing page.
- **Day 3–4:** 25 in-person / phone meetings with practising CAs in Pune + Bengaluru. Pitch the CA workspace + revshare. Show the calculator. Ask for signed pilot LOIs at ₹4,999/mo.
- **Day 5:** Decide go / no-go based on the falsifiable bar — **≥6 signed CA pilot LOIs and ≥3 SMB owners willing to pay ₹999 for a one-time restructuring exercise** by end of day 5.

If both numbers hit, build for 12 weeks and ship before October. If either misses, the wedge isn't where I think it is — re-shape or kill.
