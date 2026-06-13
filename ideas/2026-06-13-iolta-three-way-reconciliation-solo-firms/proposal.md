---
title: "TriTally — trust-reconciliation closer for solo law firms"
slug: iolta-three-way-reconciliation-solo-firms
date: 2026-06-13
category: ProfessionalServices / US Solo & Small Law Firms (1–5 attorneys, IOLTA-holding)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns a solo lawyer's messy bank statements and client ledgers into a signed, audit-ready monthly trust reconciliation."
tags:
  vertical: ProfessionalServices
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, Solo-builder, AI-agent, Legal]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# TriTally — trust-reconciliation closer for solo law firms

## 1. One-liner

Turns a solo lawyer's messy bank statements and client ledgers into a signed, audit-ready monthly trust reconciliation — before the 30-day bar deadline.

## 2. Trend signal — why now?

A hard, dated regulatory catalyst just landed on the exact segment least equipped to handle it.

Twelve state bars — including the five largest legal markets (California, Florida, New York, Texas, Illinois, plus Pennsylvania, Ohio, Georgia, North Carolina, Virginia, Massachusetts, New Jersey) — adopted a uniform IOLTA standard that **mandates three-way reconciliation for the first time**, cuts the completion window from 45 to **30 days** after each statement, requires seven-year electronic retention, and sets a compliance deadline of **July 1, 2026**. Miss it and you're auto-referred to disciplinary review.

The people this hits hardest are solos. Industry guidance is explicit: solo and 1–5-attorney firms typically reconcile *quarterly* (or "whenever someone gets around to it"), and the jump to monthly three-way adds **6–10 hours of bookkeeping per month** for a firm with 15–30 active matters. IOLTA violations are already the **#2 cause of attorney discipline** behind outright misappropriation; **1,247 attorneys received public discipline tied to trust-account mismanagement in 2025**. This is a fear-driven, deadline-driven purchase.

The existing tools don't close the gap. TrustBooks ($49–199/mo) and Clio are *do-it-yourself bookkeeping systems* — they assume you already keep clean books. Outsourced legal bookkeepers will do the reconciliation for you, but they charge **$600–800/mo for a solo** because they bundle full financials the lawyer doesn't want. Nobody sells the narrow thing a scared solo actually needs at 9 PM on the 28th: *take what I have, produce the signed three-way packet, and tell me what doesn't tie out.*

Provenance:
  - Signal 1 (Demand): Twelve states now mandate monthly three-way IOLTA reconciliation; solos most at risk, adds 6–10 hrs/mo; IOLTA = #2 discipline cause, 1,247 disciplined in 2025 — https://stephsbooks.com/news/three-way-iolta-reconciliation-mandatory-12-states & https://bennettfinancials.com/trust-account-reconciliation-for-law-firms-managing-financial-and-tax-risk-in-2026/ — 2026-06-13
  - Signal 2 (Feasibility): Voice/document AI now reliably parses bank statements, IVR/portal data, and ledgers; insurance-call voice AI (SuperDial) raised $51.5M proving payer/portal automation is productized — https://www.fiercehealthcare.com/ai-and-machine-learning/voice-ai-company-superdial-picks-15m-series-automate-insurance-calls — 2026-06-13
  - Signal 3 (Economic): Outsourced legal bookkeepers charge $600–800/mo for solos to perform exactly this reconciliation; TrustBooks runs a $49–199/mo SaaS ladder in the adjacent DIY niche — money is already moving for this job — https://www.accountingatelier.com/blog/law-firm-bookkeeping-cost & https://trustbooks.com/trust-accounting-software/ — 2026-06-13
  Category: Regulatory arbitrage

## 3. The opportunity

The new rule reframes the job. Before July 2026, a solo could limp along reconciling the trust account quarterly in a spreadsheet. Now, every month, they must produce a *defensible, signed three-way reconciliation* — bank statement = trust general ledger = sum of all client sub-ledgers — within 30 days, and keep it for seven years. The work isn't conceptually hard; it's tedious, error-prone, and high-stakes, and solos hate it.

The incumbents sit at the wrong two poles. **DIY software (TrustBooks, Clio Accounting, LawPay)** hands the lawyer a ledger and says "keep it clean and reconcile yourself" — useless to the large share of solos whose books are a bank export plus sticky notes. **Outsourced bookkeepers** do the work but cost $600–800/mo and bundle P&Ls, 1099s, and financial statements a solo with one trust account doesn't need. TriTally takes the narrow middle: a focused engine that *performs* the reconciliation from whatever inputs the solo already has, flags every line that doesn't tie out (the only thing that actually gets people disciplined), and emits the signed PDF packet the bar wants — for a fraction of a bookkeeper's fee. The wedge is "produce my compliant packet," not "be my accounting system."

## 4. Target market

- **Primary customer:** Solo and 1–5-attorney US law firms that hold an IOLTA trust account — family law, PI, immigration, estate, criminal defense, small-firm transactional. The owner-attorney is the buyer; there's no office manager to delegate to.
- **Why they buy:** "I have a trust account, my books are a mess, and my state just made monthly three-way reconciliation mandatory with a discipline referral if I miss the 30-day deadline. I don't want to learn accounting or pay $700/mo for a bookkeeper — I just need the reconciliation done and proof I did it."
- **Rough TAM reasoning:** ~463K US law firms; roughly half are solos and a large share of the rest are 1–5 attorneys — call it 200K+ small firms, the majority holding an IOLTA account. The 12 mandate states contain the densest legal markets (CA/NY/TX/FL/IL alone are an enormous share of US lawyers). Even 1% of trust-holding small firms in mandate states at ~$120/mo is well past $5M ARR.
- **Why now for them:** The July 1, 2026 deadline and the 45→30-day window. This is a "comply this quarter or risk your license" event, not a nice-to-have.

## 5. Product sketch (MVP)

- Upload a trust bank statement (PDF/CSV) + the firm's trust transactions (CSV export from the bank, Clio/LawPay/QuickBooks, or a guided manual entry) and TriTally builds the three ledgers automatically.
- One-click **three-way reconciliation**: bank balance vs. trust general ledger vs. sum of client sub-ledgers, with every variance surfaced as a plain-English exception ("Client ledger 'Garcia' is $1,200 over its deposits — likely an unrecorded disbursement").
- **Discrepancy catcher** that flags the specific failure modes that get lawyers disciplined: negative client balances, commingling (operating funds in trust), stale uncleared checks, earned fees left in trust.
- **Signed, audit-ready PDF packet** formatted to the reconciling state's rule, with attorney attestation, all three ledgers, and the exception log — the artifact the bar examiner asks for.
- **Deadline tracker**: knows each account's statement cycle and the 30-day clock, nags before the window closes, and keeps the seven-year archive.
- Per-state rule profiles so the packet and retention match CA, NY, TX, FL, etc.
- Year-over-year archive view so a bar audit pulls instantly instead of triggering a fire drill.

## 6. AI angle — what's load-bearing

AI does the part that makes the messy-input promise possible. It ingests heterogeneous, ugly inputs — scanned bank statements, inconsistent CSV exports, free-text memos like "settlement Garcia less fee" — and normalizes them into structured trust transactions tied to the right client matter. It then *explains* each reconciliation exception in language a non-accountant lawyer understands and recommends the correcting entry. Remove the AI and you're back to either TrustBooks (lawyer must structure everything by hand) or a human bookkeeper. The AI is what lets a solo with a shoebox of statements get a clean packet in minutes instead of hours — that's the entire value proposition, not decoration.

## 7. Localization angle (if any)

N/A — this is a US-only play by design. The wedge *is* the localization: per-state bar trust-accounting rules. The defensibility comes from encoding 12 (then 50) states' specific reconciliation formats, retention periods, and packet requirements. There's no India/LatAm version of this idea; the regulatory geography is the product.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $99/mo solo (one trust account), $149/mo small firm (up to 3 trust accounts + multi-user), annual discount. Anchored *below* a bookkeeper ($600–800/mo) and *above* DIY ($49 TrustBooks) — justified because TriTally does the work TrustBooks makes you do yourself.
- **ACV:** ~$1,300/year blended.
- **Rough math to $1M ARR:** ~770 firms × ~$108/mo avg × 12 ≈ $1M. That's <0.4% of trust-holding small firms in mandate states — very reachable.
- **Rough math to $5M ARR:** ~3,850 paying firms. Requires expanding past the 12 launch states as more bars adopt the uniform standard (the trend is clearly spreading), plus add-ons.
- **Expansion path:** per-additional-trust-account fees, a "bar-audit defense" premium tier (examiner-ready export + a CPA review add-on), 1099/year-end light add-on, and a per-packet fee for bookkeepers who white-label TriTally across their law-firm book of business.

## 9. Go-to-market wedge — first 100 customers

- **State-bar deadline lists, by name.** Several mandate-state bars publish CTAPP-style trust-account compliance registries and CLE attendee lists. Run deadline-themed outreach: "Your three-way reconciliation is due in 30 days — produce your first compliant packet free." Direct, timely, fear-relevant.
- **Trust-accounting CLE webinars.** Bars and vendors (Justia, state bars) run "trust accounting dos and don'ts" CLEs that solos attend *because they're scared*. Sponsor or co-present one per mandate state; the audience is 100% qualified and showed up voluntarily on this exact topic.
- **r/LawFirm, r/Lawyertalk, and solo/small-firm Facebook groups** are full of "how do I actually do three-way reconciliation before July" threads right now. Answer them with a genuinely useful breakdown + a free first-packet offer. Low volume, but every responder is a hand-raiser.
- **Legal bookkeepers as a channel, not just a competitor.** Bookkeepers doing this manually at $600+/mo for 10–20 firms would rather run it through TriTally and keep the margin. Sign 5 bookkeepers → instant access to 50–200 firms.
- **Malpractice carriers and bar practice-management advisors** push risk-reduction tools to solos; a co-marketed "stay off the discipline list" angle fits their loss-prevention mandate.

## 10. Build complexity — justification

Medium. The reconciliation logic is deterministic accounting, not research — off-the-shelf. The real work is (a) robust ingestion of messy bank statements and ledger exports via document AI, and (b) encoding 12 states' specific packet formats and rules correctly, which is domain-heavy and unforgiving (a wrong packet is worse than no packet). No custom models, no hard infra. A technical founder paired with a legal-bookkeeping advisor ships a credible single-state v1 in ~10–12 weeks, then adds states.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Software that produces a reconciliation the lawyer attests to; it doesn't practice law or accounting on their behalf. |
| Ethical — no harm / dark patterns | ✅ | Helps lawyers protect client funds and stay compliant — squarely pro-consumer. |
| Market exists (evidence above) | ✅ | Mandate in 12 states, hard July 2026 deadline, incumbents charging $49–800/mo for adjacent jobs. |
| 1–5 person team can build this | ✅ | Technical founder + legal-bookkeeping advisor. |
| Launchable with <$50K / ₹40L | ✅ | Standard web stack + document-AI APIs; no capex. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire: discipline referral, license risk, hard 30-day clock, monthly. #2 discipline cause. Not quite 18+ because some solos use a bookkeeper and feel it indirectly. |
| Demand evidence | 15 | 12/15 | Mandate + deadline + $600–800/mo bookkeeper spend + $49–199 SaaS ladder. Docked because direct "I'd pay for *this specific tool*" quotes are thinner than the regulatory evidence. |
| Build feasibility | 15 | 11/15 | Deterministic core, but messy-input ingestion + multi-state packet correctness is real engineering and must be exactly right. |
| Distribution clarity | 15 | 11/15 | Named channels: bar registries, trust-accounting CLEs, bookkeeper resellers, scared-solo subreddits. Solos are reachable but diffuse; conversion is plausible, not proven. |
| Revenue mechanics | 15 | 12/15 | Clean pricing between two anchored poles; $1M needs <800 firms. Churn risk after the panic subsides is the open question. |
| Time to first revenue | 10 | 8/10 | Deadline manufactures urgency; a single-state v1 + free-first-packet offer can convert within weeks. |
| Defensibility | 10 | 5/10 | Multi-state rule encoding + workflow lock-in + seven-year archive create switching cost, but a funded incumbent (TrustBooks, Clio) could bolt this on. Execution-and-focus moat, not structural. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs solid document-AI/ingestion engineering plus a legal-bookkeeping advisor who knows what each state's bar actually accepts. Get the packet format wrong and you've shipped a liability.

### Key assumptions to validate (3–5)

1. **Assumption:** Solos will pay ~$99/mo for *just* reconciliation rather than buy TrustBooks ($49) or a full bookkeeper ($600+). **How to test:** Pre-sell to 30 solos in 2 mandate states with a fake-door pricing page + deposit; target ≥20% deposit rate.
2. **Assumption:** Messy real-world inputs (scanned statements, bank CSVs, Clio exports) can be ingested cleanly enough to produce a *correct* packet without heavy manual fixup. **How to test:** Run 15 real solo trust accounts (recruited via a bookkeeper) end-to-end; measure % needing manual correction. Kill if >40%.
3. **Assumption:** Demand persists after the July 2026 panic — i.e., monthly compliance is recurring, not a one-time scramble. **How to test:** Track month-2 and month-3 retention of the first cohort; the rule is monthly, so it should stick.
4. **Assumption:** Bars/CLE channels are accessible to a vendor. **How to test:** Cold-contact 5 mandate-state bar practice-management advisors and 5 CLE organizers; book ≥2 co-marketing conversations.

### Risk flags

1. **Platform/incumbent risk:** TrustBooks or Clio adds a "one-click compliant three-way packet" and undercuts the wedge. Mitigation: move fast on the panic window, lock in bookkeeper resellers, own multi-state packet correctness.
2. **Regulatory-precision risk:** A packet that's subtly non-compliant in one state is worse than nothing and erodes trust instantly. Mitigation: legal-bookkeeping advisor sign-off per state; launch narrow (1–2 states) before scaling.
3. **Market-timing risk:** Demand is front-loaded around July 2026; a late launch misses the urgency peak. Mitigation: ship a single-state v1 in weeks, not months, and ride the deadline.
4. **Liability perception:** Lawyers may fear relying on software for a discipline-relevant artifact. Mitigation: position as "you attest, we assemble and check" + clear that the attorney remains the signer.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (document-AI/ingestion) + legal-bookkeeping advisor
Time to revenue:        6–10 weeks (single-state v1 riding the July 2026 deadline)
Capital to launch:      $8–15K ($ document-AI APIs, standard web stack, advisor)
Top 3 assumptions to validate first:
  1. Solos pay ~$99/mo for reconciliation-only — pre-sell 30 with deposits, want ≥20%
  2. Messy inputs reconcile cleanly — run 15 real accounts, kill if >40% need manual fixup
  3. Demand recurs post-panic — track month-2/3 retention of first cohort
Kill criteria:
  - Abandon if <20% of 30 pre-sell targets put down a deposit
  - Abandon if >40% of test accounts require heavy manual correction to produce a correct packet
  - Abandon if TrustBooks/Clio ship an equivalent one-click compliant packet before your v1 lands
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a sharp landing page — "Three-way IOLTA reconciliation done for you before your state's 30-day deadline, $99/mo. First packet free." Pull the published trust-accounting CLE/compliance contact lists for CA, NY, and TX.
- **Day 3–4:** Direct-message and email 30 solo attorneys in those 3 states with a deadline-framed pitch and a deposit/pre-order link. Simultaneously recruit 2 legal bookkeepers and ask to run 5 of their real client trust accounts through a manual mock of the workflow.
- **Day 5:** Decide. **Go** if ≥6 of 30 solos put down a deposit *and* the 5 mock reconciliations produce correct packets with <40% manual fixup. **No-go** if solos won't pre-pay or the inputs are too messy to reconcile reliably.

Falsifiable outcome: a deposit count and a manual-fixup percentage — not "people seemed interested."
