---
title: "VerifyClear — ID-verification board for UK accountants"
slug: uk-companies-house-id-verification
date: 2026-06-05
category: Compliance / UK Accountancy Practices
complexity: Medium
score: 78
verdict: GO
confidence: High
oneLiner: "Flags every client director who'll bounce a Companies House filing before the confirmation statement is due."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [UK-first, Compliance-driven, SMB, ProfessionalServices, Solo-builder, AI-agent]
axes:
  problem: 17
  demand: 13
  build: 12
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# VerifyClear — ID-verification clearance board for UK accounting practices

## 1. One-liner

Flags every client director who'll bounce a Companies House filing before the confirmation statement is due.

## 2. Trend signal — why now?

The UK rewired company filing in 2025–26. Since **18 November 2025**, identity verification is a mandatory pre-condition for appointing directors and registering PSCs. Every existing director must verify before their company's next confirmation statement after **5 March 2026**, with a hard backstop of **18 November 2026**. And from **spring 2026**, any agent filing on behalf of clients must register as an Authorised Corporate Service Provider (ACSP). Three deadlines, all live right now.

The accountants are drowning. ICAEW (Feb 2026): firms are "experiencing an increase in workloads… a new layer of due diligence and administrative burden." AccountingWEB is blunter: "compliance is faltering," uptake is "far lower than Companies House might have hoped," and the burden "falls disproportionately on advisers" while the system stays "unintuitive, fragmented and unforgiving of historic data issues."

The failure mode is mechanical and trackable. Verification is **two-stage**: an individual gets an 11-character personal code (stage 1), then that code must be submitted and *accepted* against each role — director and/or PSC — inside the correct submission window (stage 2). Someone who's both a director and a PSC has to submit the same code twice. Records that say "Bill" when the passport says "William," or carry an old wrong date of birth, reject outright. Miss the 14-day confirmation-statement window with any director unverified and the company **cannot file at all** — fines, prosecution, strike-off.

That is a per-client, per-director, per-deadline state machine. Today accountants run it in spreadsheets and memory.

Provenance:
  - Signal 1 (Demand): "Compliance is faltering… burden falls disproportionately on advisers; unintuitive, fragmented and unforgiving" — https://www.accountingweb.co.uk/community/industry-insights/companies-house-id-verification-why-compliance-is-faltering-and-what — 2026
  - Signal 2 (Feasibility): Verification is a two-stage code-against-role process with deterministic reject triggers (name/DOB mismatch, dual director+PSC) — public Companies House data + API — https://changestoukcompanylaw.campaign.gov.uk/identity-verification/ — 2026
  - Signal 3 (Economic): 29,582 UK accounting firms, £39.8bn industry; firms already charge £125–175+VAT per verification and pay for practice-management software — https://www.icaew.com/insights/viewpoints-on-the-news/2026/feb-2026/challenges-of-companies-house-id-verification-for-accountancy-firms — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents (BrightManager, Senta/IRIS, Karbon) integrate Companies House to *pull confirmation-statement deadlines*. They do **not** model the new verification state. Their Companies House sync tells you "this company's CS is due 14 July" — it does not tell you "this filing will be rejected because director #2 is a PSC who only submitted his code once, and director #3's record reads 'Bill' not 'William'."

That gap is the wedge. VerifyClear is a thin, sharp layer that watches one thing across a firm's whole client book: **is this filing actually clearable, and if not, exactly who is blocking it and why.** Horizontal practice-management suites are slow to bolt on a failure mode that's six months old. A focused tool ships the correct mental model — code → role → window — on day one, and surfaces it as a single red/amber/green board the practice manager scans every Monday.

This isn't an ACSP and doesn't perform verification. It tracks status and tells the firm what to chase. That keeps it out of AML supervision and regulatory approval entirely — it's advisory plumbing, not a regulated filer.

## 4. Target market

- **Primary customer:** Owner or practice manager at a UK accountancy / bookkeeping practice, 1–20 staff, 50–800 client companies. Also company-formation agents and company-secretarial boutiques.
- **Why they buy:** "I have 300 clients, each with 1–4 directors, and if I miss one verification the filing bounces and the client gets struck off — and that's *my* fault. I'm tracking this in a spreadsheet and I can't sleep." The liability is the practice's, not the client's.
- **Rough TAM reasoning:** ~29,600 UK accounting firms. Conservatively 12,000–15,000 are small/mid practices that file confirmation statements for client companies. At even £40–120/mo, a few thousand customers is a £2–5M ARR business.
- **Why now for them:** The transition window (Mar–Nov 2026) is a forcing function. Every firm is touching this *this quarter*. After Nov 2026 it becomes permanent annual hygiene — the recurring hook is the confirmation-statement cycle, which never stops.

## 5. Product sketch (MVP)

- Import a firm's full client book from Companies House (company numbers, directors, PSCs, confirmation-statement dates) via the public API.
- Per-director **verification status**: not started / code issued / code linked to role / fully cleared — tracked separately for the director role and the PSC role.
- **Rejection pre-flight**: flag records likely to bounce — name mismatches ("Bill"/"William"), DOB inconsistencies, dual director+PSC needing two submissions.
- **Clearance board**: red/amber/green per company, sorted by confirmation-statement deadline. "These 9 filings due in 30 days will bounce. Here's who to chase."
- One-click **client chase**: generate a plain-English email/SMS to each unverified director with their exact next step.
- **Deadline radar**: rolling alerts as each client's CS window approaches, with the verification gap attached.
- Weekly digest to the practice owner: what cleared, what's at risk, what bounced.

## 6. AI angle — what's load-bearing

AI does two jobs that are otherwise manual grind. First, **mismatch detection**: parsing Companies House records against likely ID-document forms to predict rejections before submission — "Bill Smith on the register, passport says William, this will reject" — across hundreds of directors no human re-reads. Second, **the chase copy**: generating per-director, plain-English instructions (most directors have never heard of a "personal code") tuned to that director's specific blocker, at the firm's tone. Strip the AI out and you're back to a junior staffer eyeballing 1,200 director records and hand-writing emails. The status state machine is deterministic; the AI is what makes it scale without a verification clerk.

## 7. Localization angle (if any)

UK-first by definition — this is a Companies House regime. The deeper play: the same ECCTA-style identity-verification-before-filing pattern is spreading (EU UBO registers, beneficial-ownership transparency mandates globally). The product's core — "track verified-identity status of officers against a rolling statutory filing deadline" — ports to any registry that adds a verification pre-condition. UK is the beachhead because the deadline is now and the pain is acute; the data model generalizes. Tagged Global for that reason, but go to market UK-only.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by client-company count. Starter £39/mo (≤75 companies), Practice £89/mo (≤300), Firm £199/mo (≤800+). Per-practice, not per-seat — the practice manager is the buyer.
- **ACV:** ~£1,000–1,200/year blended.
- **Rough math to $1M ARR (~£800K):** ~700 practices × ~£95/mo × 12 ≈ £800K. 700 of 12,000+ small practices = under 6% penetration.
- **Rough math to $5M ARR (~£4M):** ~3,500 practices on a blended ~£95/mo, or hold customer count and expand ACV via add-ons (PSC-register monitoring, AML deadline tracking, multi-jurisdiction registers).
- **Expansion path:** Land on ID-verification clearance, expand into the whole company-secretarial calendar (annual accounts, CS, PSC changes), then adjacent registries. The client book is already imported — every new statutory deadline is a feature, not a new sale.

## 9. Go-to-market wedge — first 100 customers

- **AccountingWEB + ICAEW community.** The exact firms in pain are reading the exact articles cited above, this month. Write a sharp "here are the 5 ways your Companies House filings will bounce in 2026 — and a free checker" piece; the comment sections are full of named practice owners. Cold-email 500 of them a 60-second Loom of their *own* client book's red/amber/green board (built live from public Companies House data — no signup needed). Expect 5–8% reply at this pain level.
- **The ACSP register is a lead list.** Companies House publishes registered ACSPs — that's a directory of firms who've already committed to filing for clients and feel this acutely. Scrape it, segment by size, sequence outbound.
- **Practice-management adjacency, not competition.** Bookkeeper/accountant Facebook groups, the r/AccountingUK and ICB/AAT member communities, and local accountant meetups. Offer a free "deadline-bounce audit" — run their client list, hand back the at-risk filings. The audit *is* the demo.

## 10. Build complexity — justification

Medium. Companies House has a robust public API for companies, officers and PSCs — the import is off-the-shelf. The state machine (code → role → window) and the rejection-prediction heuristics are custom but bounded. AI calls for mismatch detection and chase copy are standard. No regulated component, no AML supervision (it doesn't verify), no payments rails. A technical founder plus a part-time domain advisor (an actual practising accountant) ships a credible v1 in 8–12 weeks; the domain advisor is the long pole, not the code.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reads public Companies House data; advisory only, not a filer or ACSP. |
| Ethical — no harm / dark patterns | ✅ | Helps firms keep clients compliant; no manipulation. |
| Market exists (evidence above) | ✅ | ICAEW + AccountingWEB document the burden; 29,600 firms. |
| 1–5 person team can build this | ✅ | Solo technical founder + domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | API access + AI inference; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Missed filing = strike-off and practice liability. Hair-on-fire through Nov 2026, then permanent annual hygiene. |
| Demand evidence | 15 | 13/15 | Multiple independent industry bodies (ICAEW, AccountingWEB) document the exact burden; firms already pay for verification + PM software. |
| Build feasibility | 15 | 12/15 | Public API + bounded state machine. Domain modeling is the real work, not infra. 8–12 weeks. |
| Distribution clarity | 15 | 12/15 | Named channels (AccountingWEB, ACSP register, accountant communities) with a free-audit wedge. Conversion math realistic but unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against PM tools; per-practice model clean. Churn risk once the 2026 panic passes is the open question. |
| Time to first revenue | 10 | 8/10 | Deadline panic = fast yes. Free-audit-to-paid funnel can close in 4–8 weeks. |
| Defensibility | 10 | 5/10 | Execution + workflow lock-in (client book imported, weekly habit). Incumbents could copy in 12 months — speed is the moat. |
| **Total** | **100** | **78/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs a builder plus a practising-accountant advisor who lives the confirmation-statement cycle.

### Key assumptions to validate (3–5)

1. **Assumption:** Small practices will pay £40–120/mo for a single-purpose tracker rather than wait for BrightManager/Senta to add it. **How to test:** 30 outbound demos to firms with 100–400 clients; measure verbal commitment + £1 pre-order.
2. **Assumption:** The rejection-prediction heuristics (name/DOB mismatch, dual-role) catch enough real bounces to be trusted. **How to test:** Run the predictor against 1,000 real public director records and manually verify hit rate with the domain advisor.
3. **Assumption:** Demand survives past Nov 2026 as recurring annual hygiene, not a one-off panic. **How to test:** Interview 15 practice owners on whether they'd keep paying once the transition window closes; probe the annual CS cycle as the retention anchor.
4. **Assumption:** Companies House API terms permit bulk client-book monitoring at practice scale. **How to test:** Read API terms; confirm rate limits support a 800-company practice.

### Risk flags

1. **Incumbent fast-follow:** BrightManager/Senta/IRIS could ship a verification-status field in their next release. Mitigation: own the niche, the chase-copy quality, and the free-audit funnel before they wake up.
2. **Regulatory timing decay:** After Nov 2026 the acute panic fades; product must convert urgency-buyers into habit-buyers via the recurring CS cycle.
3. **Platform dependency:** Entire product rides the Companies House API. A terms change or rate-limit clampdown is an existential dependency.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             High
Best-fit builder:       Technical founder + practising-accountant advisor
Time to revenue:        4–8 weeks (free-audit-to-paid funnel)
Capital to launch:      £8–15K ($10–19K)
Top 3 assumptions to validate first:
  1. Small practices pay for a point tool vs. waiting for PM-suite feature — 30 demos + £1 pre-order
  2. Rejection-prediction hit rate is trustworthy — backtest against 1,000 real director records
  3. Demand recurs post-Nov-2026 — interview 15 owners on annual-CS retention
Kill criteria:
  - Abandon if <10% of 50 cold-outreach demos convert to a paid pilot in 6 weeks
  - Abandon if a major PM suite (BrightManager/Senta) ships an equivalent verification-status board before v1 launches
  - Abandon if Companies House API terms forbid practice-scale monitoring
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a throwaway script that pulls one volunteer practice's client book from the Companies House API and renders a red/amber/green clearance board. No auth, no UI polish — just the artifact.
- **Day 3–4:** Run that artifact live for 8 practice owners (sourced from AccountingWEB comments + the ACSP register). Show them *their own* at-risk filings. Watch the reaction.
- **Day 5:** Decide go / no-go on a falsifiable bar: **do at least 4 of 8 owners say "I'd pay for this today" and put down a £1 pre-order?** Fewer than 4 = the spreadsheet is good enough for them; pass or rework pricing.
