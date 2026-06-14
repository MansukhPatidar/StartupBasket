---
title: "ProofKeep — Reg S-P evidence binder for small RIAs"
slug: ria-reg-sp-evidence-binder
date: 2026-06-15
category: Compliance / US Small Registered Investment Advisers (under $1.5B AUM)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "ProofKeep keeps a small RIA's incident-response and vendor-oversight controls running on schedule and produces the dated evidence an SEC examiner asks for."
tags:
  vertical: Compliance
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder, RegTech]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# ProofKeep — Reg S-P evidence binder for small RIAs

## 1. One-liner

ProofKeep keeps a small RIA's incident-response and vendor-oversight controls running on schedule and produces the dated evidence an SEC examiner asks for.

## 2. Trend signal — why now?

The SEC's amended **Regulation S-P** hit its compliance deadline for smaller entities on **June 3, 2026** — twelve days ago as I write this. Every SEC-registered investment adviser under $1.5B AUM now must, by rule, maintain a *written* incident-response program, notify affected customers within 30 days of a breach, oversee service providers in writing (with a 72-hour vendor-incident reporting requirement), and **keep records documenting that all of this actually happened**. The deadline is not theoretical — it's law, now, and FY2026 SEC exam priorities keep cybersecurity and books-and-records front and center.

Here's the kicker, and it's the whole thesis: the most common cybersecurity deficiency the SEC writes up is **"programs that exist on paper but cannot produce evidence the controls were actually in force."** Most firms have a policy. Far fewer can show dated reviews, vendor due-diligence logs, incident logs, and training records proving the policy was followed. Buying a template WISP does not fix this — a template that claims controls you don't operate is a *liability*, not a defense.

Meanwhile the small-RIA wallet is real: compliance consultants run **$8K–$15K/yr ongoing** ($10K–$25K to start), and the incumbent compliance suites (COMPLY/RIA-in-a-Box, ACA's ComplianceAlpha) are demo-gated, enterprise-flavored GRC platforms — overkill and over-priced for a 3-person shop that just needs to survive an exam.

Provenance:
  - Signal 1 (Demand): Reg S-P amendments — small RIAs (<$1.5B AUM) must maintain written incident-response program, 30-day breach notice, vendor oversight, and recordkeeping by June 3, 2026 — https://www.kroll.com/en/publications/financial-compliance-regulation/navigating-new-regulation-sp-amendments — 2026-05
  - Signal 2 (Economic): Small-RIA compliance consultants cost $8K–$15K/yr ongoing, $10K–$25K to start; incumbent RIA compliance suites are demo-gated and enterprise-priced — https://transitiontoria.com/how-much-does-an-ria-compliance-consultant-cost/ — 2026
  - Signal 3 (Feasibility + moat): The most common cybersecurity exam deficiency is "programs that exist on paper but cannot produce evidence the controls were actually in force" — dated reviews, drift reports, incident logs, vendor due diligence — https://mtradecraft.com/sec-exam-readiness/ — 2025
  Category: Regulatory arbitrage

## 3. The opportunity

The gap is between **the policy document and the proof it was followed.** Three classes of incumbent each miss it:

- **Template vendors / IRS-Pub-5708-style WISP kits** hand you a Word doc. The doc is the *start* of the obligation, not the end. They produce no ongoing evidence, so they don't address the deficiency that actually gets written up.
- **Compliance consultants ($8K–15K/yr)** do real work but are expensive, slow, and human — the small RIA gets an annual review and a binder that's stale by March. Examiners want dated, continuous evidence, not a once-a-year snapshot.
- **Enterprise GRC suites (COMPLY, ComplianceAlpha)** are broad, demo-gated, and built for firms with a dedicated CCO. A solo or 3-person RIA drowns in modules it doesn't need and can't price.

ProofKeep does one narrow thing 10× better: it turns Reg S-P from a document you wrote once into a **living, scheduled, self-evidencing program**. It generates the tailored IRP and vendor-oversight policies from the firm's *actual* stack (custodian, CRM, email, portfolio software, cloud vendors), then runs the calendar — quarterly access reviews, annual policy attestations, vendor due-diligence refreshes, training sign-offs — and timestamps every completed task into an exam-ready binder. When the SEC letter arrives, the RIA exports the binder. That's the product.

## 4. Target market

- **Primary customer:** Owner / Chief Compliance Officer (often the same person) at a small US RIA — solo to ~10 employees, under $1.5B AUM, serving individual clients. The CCO-hat is worn by the founder or an office manager, not a dedicated compliance professional.
- **Why they buy:** "I have a WISP my consultant gave me, but if an examiner asks me to *prove* we did the quarterly access review, I have nothing. I can't afford a $12K consultant retainer and the big platforms are built for firms ten times my size." The pain is sharpest in the 6–12 months after the June 2026 deadline as exam cycles begin testing it.
- **Rough TAM reasoning:** ~16,544 SEC-registered advisers in 2025; ~93% have under 100 employees and firms serving individuals average ~8 staff — so the small-firm core is comfortably 12K–15K SEC RIAs, plus thousands of state-registered advisers whose states are adopting parallel standards. A serviceable obtainable market of even 5–8K firms is plenty for a sub-$5M ARR play.
- **Why now for them:** The rule is live as of June 3, 2026. The first wave of post-deadline SEC exams will test it, and the deficiency pattern is already known — paper without proof. This is a "this quarter" purchase, not a "someday."

## 5. Product sketch (MVP)

- **Stack intake → tailored policy:** Advisor answers a guided questionnaire (custodian, CRM, email host, portfolio tools, cloud vendors, who-has-admin). ProofKeep generates a Reg-S-P-compliant incident-response program and vendor-oversight policy *mapped to their actual systems* — not a generic template.
- **Vendor register + due-diligence tracker:** Pulls every named service provider into a register, drafts the contractual 72-hour-notice language, schedules annual due-diligence refreshes, and stores each completed review with a date stamp.
- **The compliance calendar:** Quarterly access reviews, annual policy attestation, employee training sign-offs, incident-response tabletop test — all scheduled, with reminders and one-click "mark complete + attach evidence."
- **Incident workflow:** If something happens, a guided runbook walks the CCO through assessment, containment, the 30-day customer-notification clock, and generates the notification letter and the incident log entry.
- **The exam-ready binder:** One-click export — policies, dated review logs, vendor DD records, training records, incident history — in the order an examiner requests it. This is the deliverable that wins the deal.
- **Drift alerts:** Flags overdue reviews, lapsed vendor DD, and untrained new hires before they become a gap in the binder.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into a glorified checklist app. The AI does three things that are genuinely hard otherwise:

1. **Tailoring at intake:** It reads the firm's described stack and the Reg S-P rule text and produces a *firm-specific* IRP and vendor-oversight policy — mapping each required control to the actual systems and owners. That mapping is exactly the work consultants charge $10K+ for and templates skip.
2. **Evidence interpretation:** When the advisor uploads a vendor SOC-2, an email-security config screenshot, or a training completion record, the AI classifies it, confirms it satisfies a specific control, and files it against the right binder section — so the human doesn't have to know the taxonomy.
3. **Incident triage:** During an incident, it assesses scope against the "did customer information get accessed" test, drives the 30-day-notice decision, and drafts the customer notification — the highest-stakes, lowest-frequency task where small firms freeze.

## 7. Localization angle (if any)

N/A — this is a US-only regulatory play. The wedge *is* the regulation (Reg S-P is SEC/US-specific), so geography isn't a localization lens, it's the entire moat. There's a future adjacency to FINRA broker-dealers and to state-registered RIAs as states adopt parallel rules, but v1 is deliberately SEC-RIA-only.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $249/mo for solo/2-person; $399/mo for 3–10 staff (priced explicitly *below* the consultant retainer and as a no-demo, self-serve sign-up to undercut the demo-gated suites). Annual ~$2,700–$4,300/firm.
- **ACV:** ~$3,500 blended.
- **Rough math to $1M ARR:** ~290 firms × $3,500 = ~$1.0M. Against a 12K–15K small-RIA core, that's ~2% penetration. Believable.
- **Rough math to $5M ARR:** ~1,400 firms (~10% of the small-SEC-RIA core) plus the state-registered and broker-dealer adjacencies opening a second segment. Needs a real distribution engine (below) and the product proven through one full exam cycle.
- **Expansion path:** add-on modules at +$100–150/mo — Form ADV annual-amendment workflow, marketing-rule (Rule 206(4)-1) review, books-and-records archiving — turning a single-rule wedge into the small-RIA compliance binder. Multi-entity (for advisers running several RIAs) is a per-entity upsell.

## 9. Go-to-market wedge — first 100 customers

- **The SEC IAPD / Form ADV directory is a scraped, targeted list.** Every SEC RIA's filing is public, including AUM, employee count, and the CCO's name and email. Filter to firms under $1.5B with <10 employees → a clean list of ~12K named CCOs. Cold email with a one-click "free Reg S-P gap check" → expect 2–4% to start the gap check, single-digit % of those to convert.
- **The free Reg S-P gap-check as the hook:** advisor pastes their stack, gets a one-page "here are the 6 evidence gaps an examiner would find" report. It's genuinely useful, it's the demo, and it produces the binder-shaped anxiety that closes the sale.
- **Compliance-consultant channel partnerships:** the $8–15K consultants can't profitably serve the smallest firms and hate the ongoing-evidence grind. White-label ProofKeep as their "between-reviews" tool and revenue-share. They have the trust and the list.
- **Where small CCOs gather:** NSCP (National Society of Compliance Professionals), state IA associations, and the RIA-focused corners of LinkedIn and r/CFP. Sponsor the post-deadline "did your firm survive Reg S-P?" content moment with a webinar + the free gap check.

## 10. Build complexity — justification

Medium. The AI tailoring and document generation are off-the-shelf LLM work; the calendar/evidence-binder engine is a standard scheduled-workflow + document-store web app — no exotic infra. The hard parts are (a) getting the Reg S-P control mapping *correct* enough to be examiner-defensible, which needs a compliance SME's review, and (b) the incident-notification logic where mistakes have real consequences. Call it 12–16 weeks to a credible v1 for a pair (one builder, one compliance advisor on retainer).

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | RegTech tooling; ProofKeep assists compliance, doesn't practice law or provide regulated advice. Disclaim clearly. |
| Ethical — no harm / dark patterns | ✅ | Helps firms genuinely meet a real obligation. Must avoid "compliance theater" — the product's value is that evidence is real, so don't let it fake controls. |
| Market exists (evidence above) | ✅ | Hard deadline, named firms, existing $8–15K consultant spend. |
| 1–5 person team can build this | ✅ | Builder + compliance SME advisor. |
| Launchable with <$50K / ₹40L | ✅ | LLM API + web stack + SME retainer. Comfortably under. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Legal obligation live now + known exam-deficiency pattern. Not quite "daily money-loss" hair-on-fire, but exam exposure is sharp and dated. |
| Demand evidence | 15 | 12/15 | Hard regulatory deadline, $8–15K existing consultant spend, established compliance-software market. Docked: couldn't source verbatim small-RIA-owner complaint threads — evidence is analyst/industry, not raw customer voice. |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI + standard workflow app, but control-mapping must be examiner-defensible — SME-gated, not pure code. |
| Distribution clarity | 15 | 11/15 | IAPD/Form ADV gives a named, scraped list of exact buyers + a consultant channel. Conversion on cold email to compliance officers is the uncertainty. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked below consultant retainer, clear ACV, ~290 firms to $1M is plausible. Churn risk if firms treat it as one-and-done post-exam. |
| Time to first revenue | 10 | 7/10 | The free gap-check → paid is a fast funnel, but compliance buyers move on their own clock; 6–10 weeks to first dollar realistic. |
| Defensibility | 10 | 5/10 | Execution + accumulating per-firm evidence history (switching cost grows as the binder fills) + regulatory-knowledge moat. But copyable by an incumbent who decides to ship a focused Reg S-P module. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This needs a builder paired with someone who genuinely understands SEC compliance — the control mapping has to be defensible, and selling to compliance officers is a trust sale, not a viral one.

### Key assumptions to validate (3–5)

1. **Assumption:** Small RIAs see "evidence the program runs" as a distinct, urgent need beyond the policy doc they already bought. **How to test:** Run the free gap-check on 30 firms scraped from IAPD; measure how many say "I don't have that evidence" and ask to fix it.
2. **Assumption:** They'll pay ~$3,500/yr self-serve rather than fold it into their existing consultant. **How to test:** 20 cold outreach calls/emails to sub-$1.5B CCOs; gauge price reaction and "why not just my consultant" objection rate.
3. **Assumption:** The control mapping can be made examiner-defensible without a lawyer per firm. **How to test:** Have a compliance SME and an ex-examiner review three generated IRPs; do they pass?
4. **Assumption:** Post-deadline exams actually test this in the next 6–12 months (urgency timing). **How to test:** Track SEC exam deficiency letters / NSCP chatter through H2 2026.

### Risk flags

1. **Regulatory dependency:** The entire wedge is one rule. If the SEC delays enforcement or softens it, urgency drops. (Counter: the obligation is live; even loose enforcement leaves the books-and-records requirement.)
2. **Incumbent fast-follow:** COMPLY or ComplianceAlpha could ship a Reg S-P evidence module and bundle it. Moat is speed + small-firm focus + price, not technology.
3. **Liability surface:** If ProofKeep's incident-notification logic or generated policy is wrong and a firm gets a deficiency, that's a trust-killing event. Needs SME review, clear disclaimers, and conservative defaults.
4. **One-and-done churn:** Firms may buy to pass one exam then cancel. Mitigate by making the value continuous (the binder must stay current to be worth anything) and pricing annual.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + SEC-compliance SME advisor (or ex-examiner)
Time to revenue:        6–10 weeks
Capital to launch:      $8–20K (LLM API + web stack + SME retainer)
Top 3 assumptions to validate first:
  1. Small RIAs feel the "evidence gap" as urgent — run free gap-check on 30 IAPD-scraped firms, measure "I don't have that" rate
  2. ~$3,500/yr self-serve beats folding it into existing consultant — 20 CCO outreach calls, measure price + "why not my consultant" objection
  3. Generated control mapping is examiner-defensible — SME + ex-examiner review 3 outputs
Kill criteria:
  - Abandon if <20% of 30 gap-checked firms acknowledge a real, unaddressed evidence gap they'd pay to close
  - Abandon if SME/ex-examiner review says the generated IRP isn't defensible without per-firm legal work
  - Abandon if a major incumbent ships a focused, cheap Reg S-P evidence module before v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape IAPD/Form ADV for SEC RIAs under $1.5B with <10 employees. Build the free "Reg S-P evidence gap check" as a manual concierge (no product yet) — a one-page report I generate by hand from their answers.
- **Day 3–4:** Cold-email 40 named CCOs offering the free gap check. Run the check live with whoever bites; at the end, ask: "If a tool kept this binder current and exam-ready for $299/mo, would you start a paid trial today?"
- **Day 5:** Decide go / no-go. **Falsifiable bar:** ≥6 of 40 (15%) complete the gap check AND ≥3 of those verbally commit to a paid trial at ~$3.5K/yr. Below that, the evidence-gap pain isn't urgent enough to outrun the "my consultant already handles it" objection — and I rework or pass.
