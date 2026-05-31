---
title: VerifyDesk — ID-verification desk for UK accountancy practices
slug: companies-house-idv-tracker
date: 2026-05-31
category: Compliance / UK-SMB
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: Tracks and chases every UK director and PSC to clear Companies House identity verification before their confirmation-statement deadline.
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder, ProfessionalServices]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# VerifyDesk

## 1. One-liner

Tracks and chases every UK director and PSC to clear Companies House identity verification before their confirmation-statement deadline.

## 2. Trend signal — why now?

The Economic Crime and Corporate Transparency Act (ECCTA) made identity verification (IDV) **mandatory at Companies House from 18 November 2025** for newly appointed directors and PSCs. Existing companies fall into a **12-month transition window** — every existing director and PSC must be verified by the date of the company's first confirmation statement filed on or after 18 Nov 2025, which spreads the deadline across the entire window ending ~Nov 2026. Roughly **6+ million individuals** need to verify. Today is 31 May 2026 — we are squarely inside the transition window, which is exactly when the pain peaks for the people who manage these filings: accountants and company-formation agents.

The structural problem: a single accountancy practice manages dozens to hundreds of client companies. Each company's verification deadline is tied to its own confirmation-statement anniversary, so a 200-client practice has 200 different deadlines, each with one or more humans (directors + PSCs) who must individually verify via GOV.UK One Login or via an Authorised Corporate Service Provider (ACSP). The current workaround is a spreadsheet plus manual email chasing. Practice-management suites (Karbon, Senta/IRIS, TaxCalc, Capium) track generic deadlines and tasks but none ship a purpose-built IDV pipeline that knows who is verified, who isn't, and whose confirmation statement is next.

Provenance:
  - Signal 1 (demand): Accountants report client-chasing and per-client deadline tracking as a notable administrative burden under ECCTA IDV; confirmation-statement dates vary across portfolios making tracking complex — AccountingWeb / practitioner discussion — https://www.accountingweb.co.uk/ — observed 2026-05-31
  - Signal 2 (feasibility): IDV became mandatory 18 Nov 2025 with a 12-month transition for existing directors/PSCs tied to confirmation-statement dates; GOV.UK One Login + ACSP verification rails now live and documented — https://www.gov.uk/government/news/identity-verification-at-companies-house — observed 2026-05-31
  - Signal 3 (economic): UK practice-management software is an established paid category (Karbon ~£45-65/user/mo, Senta ~£29-39/user/mo) and ACSPs already charge per-client verification fees — money is moving in compliance tooling for this exact buyer — https://karbonhq.com/ — observed 2026-05-31
  Category: Regulatory arbitrage

## 3. The opportunity

A hard, government-mandated deadline with a 12-month fuse just lit under ~6M people, and the burden of getting them over the line lands on accountants who have no tool built for it. Incumbent practice-management suites are horizontal — they treat "Companies House IDV" as one more checkbox, not a workflow with its own state machine (not started → invited → verification in progress → verified → recorded against the company). They also don't reconcile verification status against each company's confirmation-statement date, which is the thing that determines whether a client is about to miss a statutory deadline.

The 10× is in collapsing the manual chase loop. Today an accountant exports a client list, eyeballs confirmation-statement dates, figures out which directors/PSCs are unverified, drafts individual emails, and re-checks weeks later. VerifyDesk does the whole loop: it knows the portfolio, knows each deadline, knows who's outstanding, and runs automated, personalised, plain-English chase sequences (email + SMS) with a one-tap "how to verify" guide for the director — then surfaces a single dashboard of who's at risk this month.

## 4. Target market

- **Primary customer:** Owner or compliance manager at a small-to-mid UK accountancy practice or company-formation/ACSP firm — typically 2–30 staff, managing 80–1,500 client companies.
- **Why they buy:** "I've got 300 clients and every one has directors who need to verify before their next confirmation statement. I'm tracking it in a spreadsheet and chasing people by email one at a time. I can't see who's at risk and I'm terrified a client files late because someone never verified." It's their professional reputation and their client's statutory compliance on the line.
- **Rough TAM reasoning:** ~40,000+ accountancy firms in the UK, plus thousands of registered ACSPs and formation agents. Even targeting the long tail of 2–30 person practices, the serviceable base is in the tens of thousands. A few thousand paying firms is a $1M–$5M business.
- **Why now for them:** The transition window closes ~Nov 2026. The pain is live *this quarter* and intensifies every month as more confirmation statements come due. This is a now-or-never wedge — the acute version of the problem has a ~12–18 month half-life, after which it becomes steady-state (new appointments only).

## 5. Product sketch (MVP)

- Import client companies in bulk (CSV from practice-management export, or Companies House API lookup by company number) and auto-pull each company's directors, PSCs, and confirmation-statement date.
- Per-director / per-PSC verification status tracker with a clear state machine: Not started → Invited → In progress → Verified.
- "At risk this month" dashboard: every company whose confirmation statement is due in the next 30/60/90 days with any unverified person flagged red.
- Automated chase sequences: personalised email + SMS reminders to each unverified individual, with escalation cadence and a plain-English "how to verify your identity at Companies House" guide tailored to GOV.UK One Login vs ACSP routes.
- AI-drafted, individualised nudge copy (and Welsh-language variants) that references the person's company and deadline, so chases don't read like spam.
- One-click status update logging (accountant marks "verified" or client self-confirms via a tracked link).
- Practice-level rollup: % of portfolio verified, outstanding count, projected late-filing risk.

## 6. AI angle — what's load-bearing

AI does two real jobs. First, **personalised, deadline-aware chase generation at scale**: writing a different, human-sounding nudge for hundreds of directors — each referencing their specific company, role, deadline, and the right verification route — in English and Welsh, then adapting tone across an escalation sequence. A generic mail-merge gets ignored; the chase has to read like the accountant wrote it. Second, **inbound triage**: parsing the messy replies that come back ("I tried but it failed", "which link?", "I did it last week") and auto-updating status or routing to the accountant. Strip the AI and you're left with a spreadsheet and a mail-merge — which is exactly the painful status quo. The AI is what makes the chase loop hands-off, which is the entire value proposition.

## 7. Localization angle (if any)

This *is* a localization play — it's UK-statute-specific and cannot exist as a generic global product. The moat is encoding the exact ECCTA/Companies House rules: who must verify, how confirmation-statement dates map to deadlines, the One Login vs ACSP routes, and Welsh-language obligations for relevant clients. A US or India team can't ship this without doing the same regulatory homework. The flip side: this knowledge expires partially as the transition window closes, so the durable version pivots to steady-state new-appointment monitoring plus adjacent UK filing deadlines.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by client-company count. £39/mo (up to 100 clients), £99/mo (up to 500), £249/mo (up to 1,500). Optional SMS credits as metered add-on.
- **ACV:** ~£1,200/year blended (most small practices land on the £99 tier).
- **Rough math to $1M ARR:** ~700 practices × £99/mo × 12 ≈ £830K ≈ ~$1.05M. Very achievable against a base of tens of thousands of UK firms.
- **Rough math to $5M ARR:** ~3,000–3,500 practices blended, with a meaningful share on the £249 tier plus SMS add-on revenue. Requires becoming the default IDV-tracking tool for small UK practices during the window, then converting to steady-state deadline-monitoring after.
- **Expansion path:** After IDV settles, expand into adjacent UK statutory deadline tracking (confirmation statements, PSC changes, new-appointment IDV monitoring, AML re-checks) — turning a one-shot compliance scramble into a permanent practice tool. ACV grows via client-count tiers and SMS volume.

## 9. Go-to-market wedge — first 100 customers

- **AccountingWeb + ICAEW/ACCA community seeding:** AccountingWeb's forums and the IDV discussion threads are where this exact complaint lives. Post a genuinely useful "free IDV deadline calculator + portfolio risk template," then convert template users to the tool. The audience self-selects as in-pain buyers.
- **Companies House data scrape for ACSPs/formation agents:** The register of Authorised Corporate Service Providers is public. Scrape it, find the small formation agents and bookkeeping firms, send a personalised demo video showing their own client-deadline risk. These firms feel the pain most acutely because verification *is* their service line.
- **LinkedIn outreach to practice owners:** Target "Practice Owner / Director" at sub-30-person UK accountancy firms. Cold message offering a free portfolio IDV audit (import their client list, show who's at risk). Expect single-digit % reply, high close on the demo because the dashboard sells itself.
- **Partner with practice-management resellers / bookkeeping networks:** Offer a referral cut to regional bookkeeping associations whose members all face the same November deadline.

## 10. Build complexity — justification

Low. It's a standard web app: Companies House public API for company/officer/PSC data, off-the-shelf email + SMS providers, an LLM API for chase generation and reply triage, and a deadline state machine. No custom models, no novel infra. The real work is correctly encoding the IDV rules and confirmation-statement deadline logic, and a clean bulk-import. A solo founder with a domain advisor (a practising accountant) ships v1 in 6–8 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Uses public Companies House data + standard comms; no regulated activity, no IDV performed by us |
| Ethical — no harm / dark patterns | ✅ | Helps people meet a statutory obligation; chase cadence must be respectful, not harassing |
| Market exists (evidence above) | ✅ | Hard mandate, ~6M affected, accountants already chasing manually |
| 1–5 person team can build this | ✅ | Solo + domain advisor, 6–8 weeks to v1 |
| Launchable with <$50K / ₹40L | ✅ | API + comms + hosting costs are modest; main cost is founder time |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Statutory deadline with reputational + late-filing risk; felt weekly during the window. Not quite daily-money-bleeding, hence 16 not 19. |
| Demand evidence | 15 | 12/15 | Strong structural corroboration (mandate, 6M affected, accountant complaints) but thin verbatim customer quotes in search; one signal short of "skeptic nods instantly." |
| Build feasibility | 15 | 13/15 | Off-the-shelf APIs + LLM; only nuance is encoding the rules correctly. |
| Distribution clarity | 15 | 12/15 | Named channels (AccountingWeb, public ACSP register, LinkedIn) with plausible conversion; not yet a proven 2-week sprint. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked to practice-management norms; risk is willingness to pay for a single-purpose tool vs bundling into existing suite. |
| Time to first revenue | 10 | 8/10 | Acute live deadline = fast urgency-driven sales; short pilot, paid within 4–8 weeks. |
| Defensibility | 10 | 6/10 | Regulatory-knowledge + workflow lock-in moat, but an incumbent suite could bolt on a feature. Window-driven, so speed matters more than moat. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

### Key assumptions to validate (3–5)

1. **Assumption:** Small practices will pay £99/mo for a single-purpose IDV tracker rather than wait for their existing suite to add it. **How to test:** 20 practice-owner interviews + a pre-sell landing page; target ≥10% of demo'd practices commit a paid pilot.
2. **Assumption:** The manual chase loop is painful enough that automated chasing is the killer feature (not just the dashboard). **How to test:** Ask interviewees to quantify hours/week spent chasing now; look for ≥2 hrs/week.
3. **Assumption:** Incumbent practice-management suites won't ship an equivalent IDV pipeline before our v1 lands. **How to test:** Audit Karbon/Senta/Capium release notes and roadmaps; track for an IDV-specific feature.
4. **Assumption:** Companies House API exposes enough (officers, PSCs, confirmation-statement dates) to auto-build the deadline map. **How to test:** Build the import against 50 real company numbers, confirm coverage.

### Risk flags

1. **Market timing (decay):** The acute pain has a ~12–18 month half-life as the transition window closes. Must convert to steady-state deadline monitoring before the window shuts or revenue plateaus.
2. **Platform dependency:** Relies on Companies House API and GOV.UK verification rails; rule or API changes could force rework.
3. **Incumbent bolt-on:** A funded practice-management suite could add IDV tracking as a feature and undercut on bundling. Speed and a sharper UX are the only defence.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Solo technical founder + a practising UK accountant as domain advisor / first customer
Time to revenue:        4–8 weeks (urgency-driven pilots)
Capital to launch:      £4–8K ($5–10K) — APIs, comms credits, hosting, landing page
Top 3 assumptions to validate first:
  1. Willingness to pay £99/mo single-purpose — 20 interviews + pre-sell page, ≥10% pilot commit
  2. Chase automation is the killer feature — quantify current chase hours, look for ≥2 hrs/week
  3. Incumbent suites won't ship equivalent IDV pipeline before v1 — audit roadmaps/release notes
Kill criteria:
  - Abandon if <10% of 30 demo'd practices commit to a paid pilot
  - Abandon if a major practice-management suite ships an equivalent IDV pipeline before v1 launch
  - Abandon if Companies House extends/scraps the deadline in a way that removes the urgency
```

## 15. Next step — 1-week validation sprint

- Day 1–2: Build a no-code "portfolio IDV risk" calculator (paste company numbers → pull officers/PSCs/confirmation dates via Companies House API → show who's at risk). Post the free template on AccountingWeb + 2 UK accountant LinkedIn/Slack groups.
- Day 3–4: Run 15–20 calls with practice owners who used the calculator. Ask: how do you track this today, how many hours/week chasing, would you pay £99/mo to automate it. Put up a pre-sell page with a "reserve a pilot — £49 first month" button.
- Day 5: Decide go / no-go. **Go if ≥10% of demo'd practices commit a paid pilot AND ≥half report ≥2 hrs/week of current manual chasing.** Both are falsifiable; either fails → no-go.
