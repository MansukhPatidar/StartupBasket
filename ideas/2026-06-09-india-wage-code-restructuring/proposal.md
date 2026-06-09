---
title: "WageFix — wage-code rebuilder for India's payroll teams"
slug: india-wage-code-restructuring
date: 2026-06-09
category: HRTech / India SMB & CA Payroll Practices
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Flags every salary structure the new 50% wage rule breaks, models the PF and gratuity cost, and hands you compliant CTCs."
tags:
  vertical: Compliance
  model: SaaS
  geography: India
  secondary: [Compliance-driven, SMB, Payroll, AI-agent, Multilingual]
axes:
  problem: 16
  demand: 12
  build: 12
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# WageFix — wage-code rebuilder for India's payroll teams

## 1. One-liner

Flags every salary structure the new 50% wage rule breaks, models the PF and gratuity cost, and hands you compliant CTCs.

## 2. Trend signal — why now?

India's four Labour Codes came into force on **21 November 2025**, and the Ministry of Labour's own FAQ (16 March 2026) confirms the bomb buried inside them: the **Code on Wages mandates that "wages" (Basic + DA) be at least 50% of total remuneration** — allowances like HRA, conveyance, and special pay cannot collectively exceed 50% of CTC. Any excess gets added back into "wages," which automatically inflates PF, ESI, gratuity, and bonus liability.

Here's the problem: for 15 years, Indian employers deliberately kept basic pay at 30–40% of CTC to suppress statutory cost. **That entire industry-standard salary structure is now illegal.** The government FAQ states companies with Basic+DA below 50% are "already non-compliant from April 1, 2026 in states where final rules have been notified" — and penalties under the Codes apply **per employee, per violation, from the commencement date.** This isn't a future deadline; the clock is already running.

The cost of a wrong move is brutal and asymmetric. One documented mid-size IT firm found **34 of its 90 employees** sat below 40% basic; fixing them raised monthly employer PF materially, and gratuity accrual roughly doubled for affected staff. Industry estimates put the gratuity-liability jump at **25–50%**. Get the restructure wrong and you owe back-dated PF arrears with interest plus penalties — and the Codes attach **criminal liability to HR heads and directors** for habitual default.

Money is already moving: payroll incumbents (greytHR, Keka, RazorpayX, Zoho Payroll) are publishing "Labour Code readiness" pages, and consultancies are selling manual CTC-audit-and-model engagements right now. The work exists; it's just being done by hand on spreadsheets.

Provenance:
  - Signal 1 (demand): Govt Labour Ministry FAQ (16 Mar 2026) + multiple consultancies confirm structures below 50% basic are already non-compliant from 1 Apr 2026, penalties per-employee-per-violation; consultants selling manual CTC audits — https://www.labour.gov.in/static/uploads/2026/03/a4ccf4c6d97c4f1f36a6d83f8c64213d.pdf — 2026-03-16
  - Signal 2 (feasibility): Cheap multilingual LLM inference can parse any payroll register / offer letter and run the 50%-test + statutory-delta math; Codes live since Nov 2025, registers cut 84→8 and mandated in electronic format — https://www.bdo.in/en-gb/insights/alerts-updates/alert-implementation-of-labour-codes-key-provisions-notified-effective-21-november-2025 — 2025-11-21
  - Signal 3 (economic): Payroll SaaS market (greytHR, Keka, RazorpayX ₹100/emp/mo, Zoho) racing to publish Labour-Code-readiness; Suvit acquired by Vyapar Nov 2025 — money flowing into India compliance automation; consultancies billing CTC-restructure audits — https://hrone.cloud/blog/best-payroll-software-india/ — 2026-03
  Category: Regulatory arbitrage

## 3. The opportunity

The payroll incumbents own the **monthly run** — they calculate PF/ESI/TDS and push payouts. What they do *badly* is the **one-time, high-stakes restructuring decision** the new Code forces: "Which of my 80 salary structures are now illegal, what does each cost me to fix, what's the least-painful compliant version, and how do I prove to a labour inspector that I acted from commencement?"

That's not a payroll-engine task — it's an advisory + audit-trail task, and right now it's done by consultants on Excel at consultant rates, or not done at all by SMBs who don't know they're exposed. greytHR and Keka will eventually bolt a "compliance check" toggle onto their products, but they're optimized to keep running *the existing* structure, not to redesign every structure and defend the redesign. WageFix is the focused tool that does exactly the scary part: detect non-compliance, model the cost, generate the compliant restructure, and produce the dated evidence file an inspector will ask for.

The 10× is in the modeling. A human takes hours per company to audit grades, build the PF/gratuity/bonus delta model, and draft revised offer letters. WageFix collapses that to minutes and produces a defensible, citation-backed packet — the same shape that works for tax-trap products, applied to wage-code traps.

## 4. Target market

- **Primary customer:** (a) Payroll/HR managers and founders at Indian SMBs with **20–300 employees** (too big to wing it, too small for a Big-4 retainer); and (b) **CA / payroll-outsourcing firms and labour-law consultants** who run payroll for 10–50 client companies and now face this restructure across their whole book.
- **Why they buy:** In their words — "I have 90 people, I just learned 34 of their salary structures are non-compliant, the penalty is per-head, my HR head is personally liable, and I have no idea what fixing it costs me." It's a hair-on-fire, deadline-attached, money-and-jail problem.
- **Rough TAM reasoning:** India has well over a million GST-registered businesses in the 20–300 employee band, and every one of them with a sub-50% basic structure (i.e. nearly all of them) is now exposed. Even a few thousand SMBs plus a few hundred CA/payroll firms at ₹5K–25K/year clears a multi-crore ARR business. This is a niche-but-deep regulatory wedge, not a TAM moonshot.
- **Why now for them:** The Codes are *live* (Nov 2025); state rules are notifying through 2026; the govt FAQ says non-compliance bites from April 2026. The window where everyone needs this and no focused tool exists is open *right now* and closes once payroll incumbents ship a real module — call it 12–18 months.

## 5. Product sketch (MVP)

- Upload your current salary structures (payroll export, offer letters, or a CSV) — WageFix parses every employee's CTC into Basic, DA, HRA, allowances.
- **Compliance flag:** instantly marks which structures violate the 50% rule, employee by employee, with the exact gap.
- **Cost-delta model:** shows the rupee impact of fixing each structure — incremental monthly employer PF/ESI, the gratuity-liability jump, bonus exposure — at employee, department, and company level.
- **Restructure generator:** proposes the least-cost compliant CTC for each employee (preserving take-home where possible, flagging where take-home must drop), with side-by-side before/after.
- **Defense file:** generates revised offer-letter / wage-revision letter drafts and a dated, citation-backed audit log proving the employer identified and acted on exposure from commencement — the thing you hand an inspector.
- **The 8 registers:** outputs the new electronic-format wage and related registers the Codes now mandate (down from 84 to 8).
- **State tracker:** flags which states have notified final rules so multi-state employers know where the clock has already started.

## 6. AI angle — what's load-bearing

Two load-bearing jobs. First, **ingestion**: salary data arrives as messy offer-letter PDFs, inconsistent payroll exports, and per-company naming of allowances ("site allowance", "special pay", "flexi") — an LLM normalizes any format into a clean Basic/allowance breakdown, which is the unglamorous wall every spreadsheet approach hits. Second, **the restructure reasoning**: there are many compliant ways to rebuild a CTC, each with different PF/gratuity/take-home trade-offs; the model proposes and explains the option set in plain language (and in Hindi/regional languages for SMB owners), and grounds each recommendation in the specific Code provision. Remove the AI and you're back to a consultant and a spreadsheet — which is exactly the status quo this replaces. The statutory math itself is deterministic and rule-coded (you do *not* let the model freestyle PF percentages); the AI does the parsing, the option-generation, and the explanation.

## 7. Localization angle

This is India-first by definition — it exists *because* of an Indian regulation. The localization isn't a nice-to-have, it's the entire product: the Code on Wages 50% rule, state-by-state notification timing, PF/ESI/gratuity formulas, the new 8-register format, and Hindi/regional-language explanation for SMB owners who don't read legalese. Pricing is rupee-native (₹499–₹2,499/mo tiers work where a $49/mo global tool would be irrelevant). A generic global "comp-planning" tool cannot touch this.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** SMB self-serve tiers — ₹499/mo (≤25 employees), ₹1,499/mo (≤100), ₹2,499/mo (≤300). CA/payroll-firm tier at ₹6,999/mo for multi-client (10–50 companies). Optional one-time "restructure + defense file" pack at ₹4,999 for one-and-done buyers.
- **ACV:** Blended ~₹18,000/year (mix of monthly SMB subs that retain through the transition + the higher-value firm tier).
- **Rough math to $1M ARR (~₹8.3 Cr):** ~4,600 customers at ₹18K ACV. Realistic split: ~4,000 SMBs at ₹12K + ~600 CA/payroll firms at ₹84K ≈ ₹8.5 Cr.
- **Rough math to $5M ARR:** needs the CA/payroll-firm channel to carry it — ~3,000 firms at ₹84K = ₹25 Cr, since each firm is a multiplier over many client companies. Requires the product to become the firm's standing labour-code workbench, not a one-time fix.
- **Expansion path:** start as the restructure tool, retain by becoming the **ongoing labour-code compliance layer** — annual register filing, the unified annual return, new-hire CTC validation at offer-stage, and alerts when a state notifies new rules. Recurring compliance turns a one-time event into a subscription.

## 9. Go-to-market wedge — first 100 customers

- **CA / payroll-firm direct outreach:** ICAI regional directories and LinkedIn list thousands of CA firms advertising payroll services. Scrape ~2,000, send a one-screen Loom: "Here's your client's salary structure scored against the 50% rule in 30 seconds." Firms feel this pain across their whole book — highest-leverage, fastest-closing segment. Target 3–5% reply.
- **Ride the existing content wave:** dozens of consultancies and payroll blogs are ranking for "50% basic rule" / "new salary structure 2026" right now. Buy/sponsor or guest-write the *tool* into those exact posts, where panicked HR managers are already landing.
- **LinkedIn HR/founder communities + WhatsApp CA groups:** Indian HR managers and CAs live in active WhatsApp/LinkedIn groups. A free "Is your CTC structure legal?" instant-check (upload one structure, get a flag) is shareable and lands you the email. Free check → paid full-company model is the funnel.
- **Webinar with a labour-law consultant:** co-host "Restructuring before the inspector knocks," demo the tool live, convert attendees. The fear is doing the selling.

## 10. Build complexity — justification

**Medium.** The statutory engine (PF/ESI/gratuity/bonus math, 50%-test, register formats) is deterministic and rule-coded — non-trivial but well-documented and stable. The parsing layer (any-format payroll/offer-letter ingestion) leans on off-the-shelf LLM APIs. No proprietary data, no novel ML, no hardware. The real work is correctness and keeping the rule-set current as states notify — domain discipline, not research. A two-person team (one strong eng, one with payroll/labour-law domain depth or a paid advisor) ships a credible v1 in **10–14 weeks**.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance-assist tool; advisory disclaimer needed, but the activity is legal and encouraged. |
| Ethical — no harm / dark patterns | ✅ | Helps employers comply with worker-protective law; must avoid being marketed as a take-home-suppression tool. |
| Market exists (evidence above) | ✅ | Live regulation, govt FAQ, consultants already billing for the manual version. |
| 1–5 person team can build this | ✅ | 2-person team, 10–14 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf stack + LLM API + a labour-law advisor retainer. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire: per-employee penalties, personal criminal liability, back-dated PF. Docks slightly because severity of enforcement on small firms is still ramping. |
| Demand evidence | 15 | 12/15 | Live law + govt FAQ + consultants billing manually + incumbents publishing readiness pages. Strong, though direct "I'd pay for this exact tool" quotes are thin. |
| Build feasibility | 15 | 12/15 | Deterministic math + LLM parsing; main risk is keeping the rule-set current across states. |
| Distribution clarity | 15 | 11/15 | CA/payroll-firm channel is concrete and concentrated; SMB self-serve conversion less proven. |
| Revenue mechanics | 15 | 11/15 | Rupee pricing benchmarked to payroll SaaS; risk that buyers treat it as one-time, not recurring. |
| Time to first revenue | 10 | 8/10 | Pain is immediate and deadline-driven; the firm tier can be pre-sold off a demo within weeks. |
| Defensibility | 10 | 6/10 | Soft moat: rule-set upkeep, firm workflow lock-in, audit-trail data. Incumbents can bolt on a module — race against the clock. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

### Key assumptions to validate (3–5)

1. **Assumption:** CA / payroll-outsourcing firms will pay ₹7K/mo because the restructure spans their whole client book. **How to test:** 20 firm interviews; offer paid pilots; target ≥5 commitments.
2. **Assumption:** SMBs perceive the per-employee penalty + personal liability as urgent enough to buy a tool rather than wait for their payroll vendor. **How to test:** run the free "Is your CTC legal?" check; measure free→paid conversion and willingness to pre-pay the ₹4,999 one-time pack.
3. **Assumption:** The deterministic statutory engine can be kept correct as states notify divergent rules without ballooning maintenance. **How to test:** build the engine for 3 notified states, get a labour-law advisor to red-team outputs against real cases.
4. **Assumption:** Payroll incumbents won't ship a credible equivalent within ~12 months. **How to test:** monitor greytHR/Keka/RazorpayX release notes; track how deep their "readiness" pages actually go.

### Risk flags

1. **Regulatory timing risk:** State notifications are staggered and rules are still being finalized (draft allowance limits early 2026). The product must track a moving target; a federal clarification could reshape the math overnight.
2. **Platform/incumbent risk:** greytHR, Keka, RazorpayX, Zoho already own the payroll relationship and the customer. If one ships a strong restructure module, the standalone wedge narrows fast — speed and the CA-firm channel are the only defense.
3. **One-time-purchase risk:** Buyers may treat the restructure as a single event and churn. The whole ARR thesis depends on converting them to ongoing register-filing + compliance subscription.
4. **Liability/positioning risk:** Must ship with clear advisory disclaimers and ideally a labour-law partner; selling "compliance certainty" you can't legally guarantee invites trouble.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + labour-law/payroll domain advisor (or co-founder)
Time to revenue:        6–10 weeks (CA-firm pilots can pre-sell off a demo)
Capital to launch:      ₹4–7 lakh ($5–8K)
Top 3 assumptions to validate first:
  1. CA/payroll firms pay ₹7K/mo for whole-book restructuring — 20 interviews, target 5 paid pilots
  2. SMB free-check → paid conversion is viable — run the instant CTC check, measure funnel
  3. Statutory engine stays correct across staggered state notifications — advisor red-teams 3 states
Kill criteria:
  - Abandon if <3 of 20 CA-firm pilots convert to paid within 6 weeks
  - Abandon if a payroll incumbent ships a credible restructure-and-defense module before v1 launch
  - Abandon if free-check → paid SMB conversion stays below 2% after 1,000 checks
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a no-code landing page + a manual "send us your salary structure, get a compliance scorecard in 24h" offer (Wizard-of-Oz the engine by hand). Draft the 50%-test + PF/gratuity delta model in a spreadsheet for one real company.
- **Day 3–4:** Cold-outreach 50 CA/payroll firms and 50 SMB HR managers on LinkedIn + WhatsApp groups with the free-scorecard hook. Run 8–10 discovery calls; ask the price question directly (₹7K/mo firm tier; ₹4,999 one-time SMB pack).
- **Day 5:** Decide go / no-go on a **falsifiable** bar — **≥5 firms or SMBs verbally commit to pay**, or **≥15 inbound scorecard requests** from the outreach. Below that, the urgency isn't translating to wallet and the idea waits.

The result is falsifiable: either qualified buyers commit money/time against a concrete price within a week, or they don't.
