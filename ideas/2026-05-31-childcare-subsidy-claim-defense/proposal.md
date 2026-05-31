---
title: "TallySheet — subsidy-claim defender for childcare providers"
slug: childcare-subsidy-claim-defense
date: 2026-05-31
category: EdTech / US Childcare Subsidy Providers
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Turns a daycare's messy attendance records into a state-formatted subsidy claim and an audit-proof file that defends every billed dollar."
tags:
  vertical: EdTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 6
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# TallySheet — subsidy-claim defender for childcare providers

## 1. One-liner

Turns a daycare's messy attendance records into a state-formatted subsidy claim and an audit-proof file that defends every billed dollar.

## 2. Trend signal — why now?

Three things converged in the last six months, all of them dated and federal:

- **The payment rule flipped back to attendance.** On Jan 5, 2026 HHS published "Restoring Flexibility in the Child Care and Development Fund," rescinding the 2024 rule that let states pay providers on *enrollment* and re-encouraging *attendance verification*. Translation: providers must now document who actually showed up, every day, to get paid — and to keep what they were paid.
- **States are clawing money back over exactly this.** A March 2026 Washington State auditor report flagged **$37M in questionable child-care subsidy payments in 2025**; 67% of audits reviewed found overpayments. The mechanism is brutally specific: per DCYF, "a provider receives an overpayment for **all** child care claimed for a period of time if they fail to provide attendance records when requested." Miss the records, owe the whole month back.
- **The tooling that exists serves the government, not the provider.** Every state runs its own portal — Virginia's Child Care PASS (launched Dec 2025 with KinderSystems), Missouri's CCBIS, Washington's WCCC, New York's CAPS Online. The two market-leading provider apps, **Brightwheel ($200–300/mo) and Procare (~$85/mo), have no dedicated subsidy claim or audit module at all.** The provider runs Brightwheel for parents and then does the subsidy claim by hand in a clunky state portal, from a paper sign-in sheet.

So: a fresh federal mandate to document attendance, live state enforcement that takes the whole month's money when you can't, and a market where the dominant apps punted on the hardest part. That's the wedge.

Provenance:
  - Signal 1 (demand/economic): WA auditor — $37M questionable child-care subsidy payments, 67% of audits found overpayments; failure to produce attendance records = full-period overpayment — https://washingtonstatestandard.com/2026/03/31/audit-questions-37m-in-child-care-payments-in-wa/ , https://dcyf.wa.gov/sites/default/files/pdf/reports/child-care-subsidy-program-overpayment-2025.pdf — 2026-03-31
  - Signal 2 (regulatory/feasibility): HHS "Restoring Flexibility in the CCDF" rule re-encourages attendance verification over enrollment-based payment — https://www.federalregister.gov/documents/2026/01/05/2025-24272/restoring-flexibility-in-the-child-care-and-development-fund-ccdf — 2026-01-05
  - Signal 3 (market gap): Childcare-software comparison — Brightwheel and Procare have no dedicated subsidy module; only niche tools (Kangarootime, Illumine, PebbleDesk) do subsidy *billing splits*, none do per-state claim + audit defense — https://icaresoftware.com/child-care-billing-and-administration-comparison-procare-brightwheel-icare — 2026 (accessed 2026-05-31)
  Category: Regulatory arbitrage

## 3. The opportunity

The subsidy claim is the highest-stakes, lowest-tooled task in a subsidized daycare's month. The provider keeps attendance on a clipboard sign-in sheet or a kiosk, then once a month logs into a state portal and re-keys it into a claim — matching the state's authorization rules (authorized hours, absence caps, holiday rules) that differ by state and change yearly. Get it wrong in the provider's favor and you've created an overpayment the state can recoup for the **entire** period. Get it wrong the other way and you've underbilled care you delivered.

Incumbents do badly here for a structural reason: the dominant provider apps (Brightwheel, Procare) optimize the high-volume, high-margin private-pay business — parent messaging, photos, autopay. The subsidy claim is fragmented across 50 state formats, low-margin, and regulator-facing. They left it on the table. The state portals, meanwhile, are built for the *agency's* convenience, not the provider's — they accept a claim, they don't help you assemble or defend one.

An AI-first team can own the seam: **read the provider's actual attendance evidence → reconcile it against the authorization → produce the claim in the state's exact format → and keep a frozen, timestamped audit file behind it.** That last part is the moat: when the integrity reviewer asks for records 14 months later, the provider has them in one click instead of a panic.

## 4. Target market

- **Primary customer:** US licensed childcare providers that accept state subsidy (CCDF/CCAP) — family child care homes (1–2 staff, 6–12 kids) and small/mid centers (under ~75 kids). The owner-operator does the billing herself or has one admin.
- **Why they buy (their words):** "If I can't produce the attendance, they take back the whole month." "I spend a Saturday every month re-typing the sign-in sheet into the portal." "The state paid me in the 15th for last month and I still don't know if a kid's hours were authorized."
- **Rough TAM reasoning:** ~140,000 providers participate in the federal subsidy program. Even at a conservative serviceable slice — say the 40–60K that are small enough to lack a back office but large enough to feel monthly subsidy pain — the math to $1–5M ARR needs only low-single-digit-thousands of paying accounts.
- **Why now for them:** The Jan 2026 federal pivot to attendance verification plus visible state crackdowns (WA's $37M) turned "keep decent records" into "keep audit-grade records or lose money." The fear is fresh and dated.

## 5. Product sketch (MVP)

- **Attendance capture, any format in:** snap a photo of the paper sign-in/out sheet, upload the kiosk CSV, or import from Brightwheel/Procare — TallySheet structures it into a clean daily attendance ledger per child.
- **Authorization guardrails:** store each child's subsidy authorization (authorized days/hours, absence allowance, copay) and flag claims that exceed it *before* you submit — the over-bill trap that creates recoupments.
- **State-formatted claim output:** generate the monthly claim in the target state's required layout (start with 2–3 states: e.g. a paper/PDF state, a portal-CSV state) so the provider re-keys nothing or pastes one file.
- **Absence & holiday logic:** apply the state's absence-day caps and closure rules automatically so claimed days are defensible.
- **Audit-ready freeze file:** every submitted claim is locked with its source evidence (the original sheet photo, the kiosk export, the authorization on file) into a single timestamped packet the provider can hand to an integrity reviewer.
- **Reconciliation alert:** when the state payment lands, match it line-by-line to what was claimed and surface shortfalls ("you billed 22 days for Maya, they paid 19").
- **Deadline nudges:** monthly reminder keyed to the state's claim window so providers stop missing the cutoff.

## 6. AI angle — what's load-bearing

The AI does the one job nobody could productize cheaply before: **reading messy, handwritten, photographed attendance evidence and turning it into structured, reconciled, defensible data.** A family-home sign-in sheet is initials, scribbled times, cross-outs, a parent who signed for three days at once. Multimodal models in 2026 read that at usable accuracy and map it to the right child, day, and in/out times.

Remove the AI and you're back to manual data entry — which is the status quo the provider already hates and won't pay to keep. The downstream claim math (authorized-hours checks, absence caps, state format) is deliberately **deterministic rules, not the model** — a hallucinated claimed day is exactly the error that triggers a recoupment, so the formatting/validation layer is fixed code, and the AI is fenced to the extraction step where a human can eyeball it.

## 7. Localization angle (if any)

N/A — this is a US-only play, and the "localization" is *per-state* rather than per-country: every state's authorization rules, absence caps, and claim format differ, and that fragmentation is itself the moat (see §3). The wedge is going deep on 2–3 states' formats first, not broad.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $39/mo Home (family child care, one provider), $89/mo Center (multi-room, multiple staff, up to ~75 kids), $149/mo Multi-site (2–4 locations). Priced *below* Brightwheel because TallySheet is the subsidy layer a provider runs *alongside* their parent app, not a rip-and-replace.
- **ACV:** ~$700–900 blended (mix skewed to Home tier).
- **Math to $1M ARR:** ~1,300 accounts at ~$65/mo blended × 12 ≈ $1.0M. Against ~140K subsidy providers, that's under 1% penetration.
- **Math to $5M ARR:** ~6,000–6,500 accounts, *and* state coverage expanded from 3 launch states to ~12, plus an "audit-response" upsell (assemble the full evidence packet on demand for a per-event fee) and a per-claim overage on the Home tier for high-volume homes.
- **Expansion path:** more states unlock more of the existing base; centers grow into multi-site; the audit-defense packet becomes a paid event; CACFP food-program claims (same providers, same attendance data, separate federal reimbursement) is the obvious second product on the same ledger.

## 9. Go-to-market wedge — first 100 customers

- **Facebook provider groups.** Family-child-care and daycare-owner Facebook groups (tens of thousands of members, intensely active on subsidy/billing threads). Post a 90-second screen recording: photo of a sign-in sheet → finished state claim + audit file. These groups share tools relentlessly.
- **State-by-state launch = state-by-state targeting.** Launch one state at a time. For state #1, scrape that state's *public licensed-provider directory* (every state publishes one) and send a personalized Loom: "Here's last month's sign-in sheet turned into a [State] claim — want yours?" Subsidy is state-scoped, so a state-by-state list is both buildable and exhaustive.
- **CCR&R and provider-coach co-sell.** Child Care Resource & Referral agencies and the paid "start/run your daycare" coaches (big on Facebook/YouTube) already teach providers how to bill subsidy. One coach endorsement = a cohort of provider trials.
- **Audit-panic lead magnet.** A free "Could you survive a subsidy audit?" checklist that, when a provider uploads one month's sheet, shows the gaps that would trigger a recoupment — turns the WA-style fear into a live trial.

## 10. Build complexity — justification

Medium. The extraction (messy attendance → structured ledger) is off-the-shelf multimodal AI with a human-review step. The genuinely custom work is encoding each launch state's authorization rules, absence/holiday logic, and claim format — that's careful domain work, not hard engineering, and it's *per state*, so v1 scopes to 2–3 states. A small team ships a credible single-state v1 in ~10–14 weeks; the moat (and the slog) is adding states over time.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | A recordkeeping/claim-prep tool; provider remains the filer of record. Not a regulated entity. |
| Ethical — no harm / dark patterns | ✅ | Pushes *accurate* claims (flags over-billing), which serves both provider and program integrity. |
| Market exists (evidence above) | ✅ | 140K subsidy providers, dated federal rule, live state recoupments, leaders with no subsidy module. |
| 1–5 person team can build this | ✅ | Multimodal extraction + deterministic per-state rules. Medium build. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf APIs; cost is domain time to encode 2–3 states. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Monthly grind plus catastrophic clawback downside. Not daily hair-on-fire, but "owe the whole month back" is a strong pay-now motive. |
| Demand evidence | 15 | 12/15 | Dated federal rule + WA $37M audit + leaders with no subsidy module + per-state portals. Strong, though direct provider-quote volume is thinner than ideal. |
| Build feasibility | 15 | 11/15 | Extraction is easy; per-state rule/format encoding is real work and gates expansion. Single-state v1 in ~3 months. |
| Distribution clarity | 15 | 11/15 | Public provider directories + active FB groups + coach co-sell are concrete; conversion uncertain and state-by-state slows scale. |
| Revenue mechanics | 15 | 11/15 | Wallet validated against Brightwheel/Procare; sub-1% penetration to $1M. Home-tier price is modest, so volume-dependent. |
| Time to first revenue | 10 | 7/10 | Monthly pain + clear trial; first paid in 4–8 weeks once one state is live. Build precedes revenue. |
| Defensibility | 10 | 6/10 | Per-state rule libraries + accumulating audit-file lock-in compound; not patent-grade, but a 50-state grind deters lazy clones. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (must understand CCDF/CCAP claim mechanics and at least one state's rules cold) · `technical-heavy` (multimodal extraction + reliable per-state validation).

### Key assumptions to validate (3–5)

1. **Assumption:** Providers will pay $39–89/mo for a subsidy layer *on top of* their existing parent app. **How to test:** Offer 30 providers in one state a paid pilot before building beyond that state; require a card, not a "yes."
2. **Assumption:** Multimodal extraction clears usable accuracy on real handwritten/photographed family-home sign-in sheets (not clean kiosk data). **How to test:** Collect 50 real sheets from group members, measure field-level accuracy against manual ground truth; target ~95% on times/child-match with human review.
3. **Assumption:** The audit-defense angle (not just "save time") is what unlocks the wallet. **How to test:** A/B the lead magnet — "save your Saturday" vs "survive an audit" — and compare trial starts.
4. **Assumption:** One state's claim format/rules can be encoded in a few weeks and stay stable enough to maintain. **How to test:** Fully encode state #1 and run three real monthly cycles before committing to state #2.

### Risk flags

1. **Platform/format dependency:** States change portals and rules yearly (and some, like VA, are rolling out new vendor systems). Maintenance is perpetual; a state moving to a closed mandatory system could foreclose that state.
2. **Slow scale (per-state grind):** Revenue is gated by states-shipped, not just sales effort. The $5M case requires ~12 states encoded — a real operational drag, not a flip of a switch.
3. **Liability framing:** If a TallySheet-generated claim triggers a recoupment, the provider may blame the tool. Must stay firmly "you review and file; we assemble and flag," with the human-review step non-skippable.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a childcare-subsidy domain expert (ex-CCR&R, ex-state agency, or a provider who has lived the billing)
Time to revenue:        6–10 weeks after first state is live (build precedes revenue)
Capital to launch:      $8–15K ($/API + domain time to encode 2–3 states)
Top 3 assumptions to validate first:
  1. Pre-sell 30 providers in one state on a paid pilot (card required) before broad build
  2. Prove ~95% extraction accuracy on 50 real handwritten sign-in sheets
  3. Confirm audit-defense framing beats time-saving framing for trial starts
Kill criteria:
  - Abandon if <10 of 30 targeted providers in the launch state will put a card down for a pilot
  - Abandon if extraction can't clear ~90% field accuracy on real family-home sheets after tuning
  - Abandon if a funded incumbent (Brightwheel/Procare/Kangarootime) ships a real per-state subsidy claim + audit module before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pick ONE state with a painful claim process and a public provider directory. Read its subsidy billing manual until you can hand-build one month's claim yourself.
- **Day 3–4:** Collect 40–50 real sign-in/out sheets from a daycare-owner Facebook group (offer a $20 gift card). Run them through an off-the-shelf multimodal model; manually score field accuracy on child-match and in/out times.
- **Day 5:** DM/email 30 providers in that state a Loom of one of *their* sheets turned into the state claim + audit file, and ask for a card-on-file pilot at $39/mo. 
- **Go/no-go:** Proceed only if (a) extraction clears ~90% field accuracy on real sheets AND (b) ≥10 of 30 providers put a card down. Both are falsifiable; "they seemed interested" is not a pass.
