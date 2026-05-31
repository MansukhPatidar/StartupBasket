---
title: "AppointKit — labour-code packet for Indian micro-employers"
slug: india-labour-code-appointment-letters
date: 2026-05-31
category: Compliance / India MSME
complexity: Low
score: 75
verdict: GO
confidence: Medium
oneLiner: "Per-state appointment letters, payslips, and 2-day exit settlements for the 2–30-staff Indian firm hit by the new labour codes."
tags:
  vertical: Compliance
  model: SaaS
  geography: India
  secondary: [Compliance-driven, SMB, Multilingual, WhatsApp-first, AI-agent]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# AppointKit — labour-code paperwork packet for India's micro-employers

## 1. One-liner

Generates per-state appointment letters, payslips, and 2-day exit settlements for the 2–30-staff Indian firm the labour codes just turned into a record-keeper overnight.

## 2. Trend signal — why now?

India's four Labour Codes came into force **21 November 2025**, replacing 29 laws. The draft Central Rules landed 30 December 2025; final central rules and most state rules are notifying through 2026. The provisions that bite a tiny employer immediately, regardless of headcount:

- **Mandatory written appointment letter for *every* worker** — permanent, fixed-term, contract, gig — in a prescribed format covering designation, wage breakdown, and social-security entitlements. "A written appointment letter for every worker is no longer a best practice — it is a legal obligation." Penalties run **₹50,000–₹1,00,000** per violation, with imprisonment for repeats.
- **50% basic-wage rule** — basic + DA must be ≥50% of total remuneration; the excess of other allowances is added back. Forces salary restructuring; raises statutory cost 5–15%.
- **Full-and-final settlement within 2 working days** of any exit — fine ₹20,000–₹40,000, escalating to prosecution. "If your system cannot produce an accurate, pro-rated final pay run within 48 hours… you have a compliance problem."
- **Digital records mandatory** — "Paper systems are noncompliant." Registers must be electronic and retained 7–10 years.

Named MSME-sector voices are on record that small firms cannot absorb this: *"Unlike large corporations, MSMEs do not have in-house legal or HR teams… labour codes may be perceived less as ease of doing business and more as compliance pressure"* (Pratik Vaidya, India SME Forum, Business Standard, 11 Jan 2026). Editors describe codes "in force" while the rules to follow them lag — *"like being given a car with no engine"* (HRKatha, 28 Dec 2025).

The market: **6.25 crore MSMEs, 92% micro, most employing 10–15 people**, most of whom were never under EPF/ESI and have no HR.

Provenance:
  - Signal 1 (Demand): Mandatory appointment letters for all workers + ₹50k–₹1L penalties under codes effective 21 Nov 2025 — https://www.key4comply.com/indias-new-labour-codes-2026-end-exploitation-of-gig-contract-informal-workers-equal-pay-appointment-letters-48-hour-settlement — Nov 2025 / https://futurexsolutions.com/employment-contract-india-appointment-letter-2026/ — 2026
  - Signal 2 (Feasibility): Excel/manual is non-compliant; 50% rule + 2-day FnF "unachievable without structural change"; multimodal LLMs can draft prescribed-format letters cheaply while math stays deterministic — https://ezhrm.in/excel-vs-hrms-payroll-india-2026/ — 2026 / https://www.zfour.in/post/multi-state-payroll-compliance-india-the-2026-reality — 2026
  - Signal 3 (Economic): Active payroll-SaaS spend (greytHR 23k brands; Kredily raised $3.05M) and brand-new code-first entrants (Offrd ₹50/emp letter-first; LabourCodes360 ₹360/mo) prove money + competitors are moving here — https://kredily.com/pricing/ — 2026 / https://www.offrd.co/pricing_plans — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The codes split the payroll-software market cleanly into two camps that both miss the micro-employer:

- **Cheap tools** (Kredily free-forever, SalaryBox ₹30/user, PagarBook ₹499/yr) treat the codes as *the owner's problem to configure*. They give you a blank payslip; they do not restructure your salaries to the 50% rule, do not generate a prescribed-format appointment letter for each worker, do not map your state's forms. SalaryBox doesn't mention appointment letters at all.
- **Compliant suites** (greytHR, Keka, Pocket HRMS) do automate the codes well — but are priced and shaped for 50+ employees. Keka enforces a **25-employee billing floor + ₹15,000–50,000 setup + 12-month contract**. Irrelevant to a 12-person fabrication unit.

The wedge is the single obligation with criminal penalties, no headcount threshold, hard deadline, and *no cheap purpose-built tool*: **the appointment letter, issued to every existing and new worker, in the right state format.** An Excel firm physically cannot produce 15 correct per-state letters plus matching digital registers. We do that in an afternoon, then expand into the recurring jobs (payslips, 2-day FnF, restructuring) once we own the employee data.

We are not trying to out-payroll Kredily's free tier. We are the "make my paperwork legally bulletproof this week" tool — a compliance packet, not a payroll engine.

## 4. Target market

- **Primary customer:** Owner of a 2–30-employee Indian business — manufacturing/fabrication unit, retail chain of 2–3 shops, clinic, restaurant, small services/agency, trading firm — typically Tier-1/Tier-2, ₹50L–₹15Cr turnover, **no HR person**, payroll done by the owner in Excel or handed to a CA.
- **Why they buy:** "I have 14 people, I just learned every one of them legally needs an appointment letter in a format I've never seen, and I can be fined a lakh per worker. My CA charges per filing and is slammed. I need this fixed before an inspector or a disgruntled ex-employee shows up." It's fear-driven and dated.
- **Rough TAM reasoning:** 6.25cr MSMEs; 92% micro. Even restricting to firms that (a) have 2+ employees on payroll and (b) will pay for a tool, a conservative addressable slice is several million establishments. We need ~2,000 paying to clear $1M ARR.
- **Why now for them:** Codes in force since Nov 2025; state rules notifying through 2026; CAs publicly reframing this as a service line; the appointment-letter penalty is per-worker and applies to existing staff, not just new hires. The clock is running.

## 5. Product sketch (MVP)

- **Per-state appointment-letter generator** — enter (or bulk-upload from Excel/photo of a register) each worker's name, role, wage; AI drafts a prescribed-format letter for the firm's state, in English + the regional language, ready to print/e-sign.
- **50% wage-rule restructurer** — paste current CTC structure; deterministic engine flags every employee below the 50% basic threshold and proposes a compliant breakup with the new PF/gratuity impact shown.
- **2-day full-and-final calculator** — on an exit, computes pro-rated salary, leave encashment, notice adjustment, statutory dues; outputs a settlement statement same-day.
- **Digital register & document vault** — auto-generates and retains the mandatory electronic registers and every issued letter/payslip, timestamped, for the 7–10-year retention rule.
- **Payslip generator** — compliant monthly payslips with the new wage definition.
- **"Could you survive an inspection?" readiness check** — a free self-scan that lists exactly which workers lack a compliant letter and what the exposure (₹) is. This is the lead magnet *and* the onboarding.
- **WhatsApp delivery** — letters and payslips pushed to the owner (and optionally workers) over WhatsApp, the channel this buyer actually lives in.

## 6. AI angle — what's load-bearing

AI does the **messy-input → prescribed-document** translation: reading a photographed handwritten staff register or a chaotic Excel into structured employee records, then drafting each appointment letter in the correct per-state format and regional language with the right clauses. That's the slow, error-prone, expertise-heavy human step — exactly what a 12-person firm can't do and what makes a generic blank-template tool useless to them.

What is **deliberately NOT AI**: the 50% math, PF/gratuity/ESI calculations, and FnF settlement. A hallucinated statutory number creates the very liability we're selling protection against, so that stays deterministic rules. Remove the AI and you're back to blank templates the owner can't fill correctly — i.e., Kredily. The AI is the wedge.

## 7. Localization angle

This is an India-only play and localization *is* the moat:
- **Per-state formats** — appointment-letter and register formats vary by state (Gujarat fully notified, Karnataka partial, Delhi not yet). A generic global HR tool cannot do this; even national incumbents treat it as config.
- **Regional language** — letters in Hindi/Gujarati/Tamil/Marathi etc. for workers who don't read English.
- **Pricing** — ₹499–1,999/mo works where a $49 tool can't; a one-time ₹1,499 "get-compliant" pack matches how this buyer thinks about a deadline.
- **Distribution** — WhatsApp, CA networks, vernacular MSME communities.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Flat tiers, no per-employee math the buyer hates. **₹499/mo** (Micro, ≤10 workers), **₹999/mo** (Standard, ≤30), **₹1,999/mo** (Plus, ≤30 + multi-entity/multi-state + FnF + priority). Plus a one-time **₹1,499 "Get-Compliant Pack"** (bulk letters + register + readiness report) as the low-friction front door that converts to subscription.
- **ACV:** ~₹9,000–12,000 (blend of ₹999 core + some Plus).
- **To $1M ARR (~₹8.5Cr):** ~7,500 firms at a ~₹11k blended ACV — or ~2,000 firms if mix skews to Plus + add-ons. Round number to anchor on: **~2,500–7,500 paying firms.**
- **To $5M ARR:** ~30,000–40,000 firms, achieved by (a) CA/payroll-bureau white-label reselling to their client books, (b) adding recurring payslip + statutory-filing tiers so we retain beyond the one-time compliance scramble, (c) state-by-state expansion as rules notify.
- **Expansion path:** Land on the one-time letter panic → keep them on monthly payslips + FnF → upsell multi-entity and managed filing → bureau white-label.

## 9. Go-to-market wedge — first 100 customers

- **CA / payroll-bureau co-sell (primary).** CAs are publicly being told this is a growth service line but lack tooling and bandwidth. Sign 10 CAs/bureaus; each has 30–100 SMB clients newly panicked about appointment letters. White-label the packet to them at a wholesale rate; one bureau = 30–80 logos. This is the fastest path to 100.
- **"Survive an inspection?" readiness scanner as a free lead magnet** dropped into MSME-owner WhatsApp/Facebook/Telegram groups and Tier-2 trade associations. The scanner returns a per-worker ₹ exposure figure — fear converts to the ₹1,499 pack.
- **Cold outreach off public signals** — Shops & Establishment registries, Justdive/IndiaMART seller lists, and GST directories give name + state of small firms. Personalized message: "Your state notified labour-code rules on [date]; here's a sample compliant appointment letter for a [their trade] worker — you need one per employee." 
- **Vernacular MSME creators / regional CA YouTubers** explaining the codes already have the exact audience mid-panic; sponsor a "here's the tool" segment.

## 10. Build complexity — justification

**Low–Medium.** Off-the-shelf: LLM for register-reading and letter drafting, standard web stack, WhatsApp Business API, e-sign. Custom work is the **per-state format/rule library** — the deterministic templates and statutory math for each state, which is domain grind, not engineering risk, and can ship one or two states first (Gujarat + Maharashtra, the most-notified) then expand. A small team ships a credible v1 (2–3 states, letters + restructurer + FnF + vault) in **~8–12 weeks**; defensibility comes from accumulating the state library, not from tech.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | We help firms comply with the law; document generation is legal. Add disclaimer + CA review for edge cases. |
| Ethical — no harm / dark patterns | ✅ | Pro-compliance, pro-worker (workers get real letters). No dark patterns. |
| Market exists (evidence above) | ✅ | 6.25cr MSMEs, dated mandate, named pain, paying incumbents, new entrants. |
| 1–5 person team can build this | ✅ | Off-the-shelf AI + deterministic rules + per-state templates. |
| Launchable with <$50K / ₹40L | ✅ | Low infra; main cost is the state-rule library research (can use CA advisors). |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Criminal penalties, per-worker, dated, applies to existing staff. Hair-on-fire for the firm that realizes it — but many don't yet realize, and enforcement on micro units is "facilitative" early, capping urgency below 17+. |
| Demand evidence | 15 | 12/15 | Strong: dated law, named MSME-rep complaints, paying payroll market, code-first new entrants. Weak point: forum-level small-owner *verbatim* demand for this specific product is thin (Reddit/Quora unreachable); demand is inferred from law + adjacent spend. |
| Build feasibility | 15 | 13/15 | Off-the-shelf AI + deterministic math; per-state library is grind not risk; ship 2 states first. |
| Distribution clarity | 15 | 11/15 | CA/bureau co-sell + registry cold outreach + WhatsApp groups are concrete and named, but conversion math is unproven and CA channel needs hustle. |
| Revenue mechanics | 15 | 11/15 | Pricing fits the wallet; flat tiers avoid per-employee friction. Risk: one-time-pack buyers may churn before recurring value lands, and Kredily's free tier caps price ceiling. |
| Time to first revenue | 10 | 8/10 | One-time ₹1,499 pack is sellable from week one off the readiness scanner; CA co-sell can pre-sell. |
| Defensibility | 10 | 4/10 | Soft. State-library + CA relationships + accumulating employee data are real but copyable; Offrd/greytHR could close the gap. Speed and channel ownership, not moat. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (labour-code/payroll knowledge or a CA co-founder/advisor is essential to get the per-state formats and math right) · `sales-heavy` (CA-channel and MSME-owner outreach is the engine).

### Key assumptions to validate (3–5)

1. **Assumption:** Micro-employers see the appointment-letter mandate as urgent enough to pay this quarter. **How to test:** Run the free readiness scanner to 300 owners via WhatsApp groups; measure how many request the paid pack within 7 days. Need ≥10%.
2. **Assumption:** CAs/bureaus will white-label rather than build it themselves or send clients to free tools. **How to test:** Pitch 15 CAs; close ≥3 to a paid reseller pilot with a real client list.
3. **Assumption:** Owners trust an AI-generated legal document enough to issue it. **How to test:** Have a labour lawyer review 30 generated letters across 2 states; need ≥90% issuable without rework.
4. **Assumption:** Flat pricing beats Kredily-free for this buyer because we do the *codes*, not just payroll. **How to test:** A/B the value prop ("we make your paperwork inspection-proof") vs. "free payroll" in outreach; measure reply/convert.

### Risk flags

1. **Regulatory flux:** State rules are still notifying and the "50% of all remuneration" denominator is litigated/undefined. We must update templates fast or we ship wrong documents — the exact harm we sell against. Mitigate with CA advisory + versioned templates + disclaimers.
2. **Competitive encroachment:** greytHR (free ≤25, automated state letters) or Offrd (₹50/emp, letter-first) could push a cheap micro tier down before we get traction. Window is months, not years.
3. **Demand-realization risk:** Enforcement on micro units is "facilitative" early; if inspectors don't act, urgency softens and the buyer defers. The CA channel (which sells the fear professionally) de-risks this.
4. **Churn after the scramble:** If we only sell the one-time pack, we don't reach $1M. Recurring payslip/FnF value must land fast.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Domain-savvy operator with a CA/labour-law co-founder or advisor; sales-led
Time to revenue:        4–8 weeks (one-time compliance pack from readiness scanner)
Capital to launch:      ₹6–12 lakh ($7–14K) — mostly state-rule library + advisory
Top 3 assumptions to validate first:
  1. ≥10% of 300 scanned owners buy the pack within 7 days (urgency)
  2. ≥3 of 15 CAs sign a paid reseller pilot with a client list (channel)
  3. ≥90% of AI-generated letters issuable without lawyer rework (trust)
Kill criteria:
  - Abandon if <10% of 30 cold-outreached owners show paid interest after the readiness scan
  - Abandon if a labour lawyer rejects >25% of generated letters as non-compliant across 2 states
  - Abandon if greytHR/Offrd ships a sub-₹500/mo, zero-config, per-state letter+FnF micro tier before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free "Survive an Inspection?" readiness scanner (no payroll engine — just: enter your state + worker count, get a per-worker ₹-exposure number and a list of missing documents). Hand-make compliant sample appointment letters for ONE state + trade.
- **Day 3–4:** Drop the scanner into 4–5 MSME-owner WhatsApp/Telegram groups and DM 30 firms pulled from a Shops & Establishment / IndiaMART list. Pitch 5 CAs on white-label.
- **Day 5:** Decide go/no-go on a falsifiable result: **≥10% of scanned owners request the paid pack AND ≥1 CA verbally commits to a reseller pilot.** Below that, the urgency or the channel isn't real yet — iterate the message or pass.
