---
title: "FilingDesk — claim deadline desk for solo therapists"
slug: therapy-claim-deadline-desk
date: 2026-08-02
category: HealthTech / US-SMB
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Tells a solo therapist which unpaid claims are about to expire, while the money can still be collected."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, Solo-builder, AI-agent, Compliance-driven, Workflow-automation]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, content-heavy]
featured: false
---

# FilingDesk

## 1. One-liner

Tells a solo therapist which unpaid claims are about to expire, while the money can still be collected.

## 2. Trend signal — why now?

Three things converged in the last twelve months.

**The money is real and it's being written off silently.** Behavioral health billing sources put first-time audits at **$15,000–$40,000 in annualized recoverable revenue for a solo practitioner**, and $40,000–$120,000 for a two-to-four provider group. That's not a rounding error against a median private-practice revenue of **$80,412** (Heard's 2026 report, ~2,000 therapists surveyed). The same report pegs the hidden cost of insurance work at **5–12 unpaid hours per week plus 1–5% of billed revenue never collected**.

**The tooling gap is now explicit, not inferred.** Industry comparisons state flatly that TherapyNotes and SimplePractice "handle claim submission and ERA posting — but they do not handle denial management, credentialing, payer follow-up, or AR recovery." SimplePractice specifically "lacks advanced denial management... and accounts-receivable reporting." The two platforms that own the solo-therapist market have deliberately not built the thing that loses therapists the most money.

**The deadline is a hard, computable clock.** Payer filing windows run **90 to 365 days** and vary by affiliate — BCBS alone spans 90 days (MA, Anthem) to 365 days (NC, TX PPO, Florida Blue, Premera, FEP). Once it closes, "the payer will deny the claim with no obligation to pay, regardless of whether the services were medically necessary and properly documented." CO-29 (timely filing exceeded) is one of the few denials that is functionally unappealable — it "cannot be appealed on the underlying claim's merits." This is a countdown, and countdowns are exactly what software is good at and humans are bad at.

The failure mode is documented in the operators' own words: practices appeal "reactively, when someone finds time, which is usually never. The result is a pile of aging denials that age right past their filing deadlines into write-offs." **65% of denials are never resubmitted.**

Provenance:
  - Signal 1 (Demand): Solo behavioral-health practitioners carry $15K–$40K/yr in recoverable revenue lost to denials and expired filing windows; 65% of denials never resubmitted; practices appeal "when someone finds time, which is usually never" — https://www.breezybilling.com/blog/timely-filing-denial and https://www.medibillrcm.com/blog/mental-health-claims-denied/ — 2026-08-02
  - Signal 2 (Feasibility): Filing deadlines and denial reasons arrive as structured, machine-readable data — CO-29 and other CARC codes sit in the CAS adjustment segment of the 835 ERA, and payer-specific windows (90–365 days) are published and tabulated — https://clausea.us/blog/denial-code-29-guide and https://muni.health/blog/bcbs-timely-filing-limits-2026 — 2026-08-02
  - Signal 3 (Economic): Incumbent EHRs explicitly do not cover this — "TherapyNotes and SimplePractice... do not handle denial management, credentialing, payer follow-up, or AR recovery" — while outsourced billing charges solo therapists 7–9% of collections ($350–$900/mo), establishing a large, funded willingness-to-pay band beneath which a software product can sit — https://therapydial.com/providers/setup/therapynotes-vs-simplepractice-2026-billing-comparison/ and https://elitemedfinancials.com/mental-health-billing-services-cost/ — 2026-08-02
  Category: Underserved niche

## 3. The opportunity

The gap is between two products that both exist and neither of which serves this customer.

Above them: **outsourced billing services** at 6–9% of net collections — $350 to $900/month for a solo therapist, or $20K–$24K/year on a $200K practice. That's a real service and it works, but it's priced for someone who has decided to hand over the whole revenue cycle. Most solo therapists haven't. They're doing it themselves in SimplePractice at $69–99/month and telling themselves it's fine.

Below them: **the EHR itself**, which submits the claim, posts the ERA, and then goes quiet. It will show you a claim is unpaid. It will not tell you that the unpaid claim is 74 days into an 90-day window and dies in 16 days.

Between those two sits the actual product: a **watchdog that reads what already exists and shouts before the clock runs out**. Not a billing service. Not an EHR. A single-purpose instrument that turns an unstructured pile of aging claims into a ranked list of "call this payer this week or lose $340."

The incumbent weakness is specific and structural, not accidental. SimplePractice and TherapyNotes are practice-management platforms optimised for the clinical workflow — scheduling, notes, telehealth, submission. Denial management is an RCM discipline with a completely different data model and a different user. Building it well would mean serving a customer they've decided isn't theirs. And denial-management vendors that *do* build it (Rivet, AdvancedMD, Waystar) price and sell to physician groups — **$150–$400/month for 2–5 providers, or "request pricing" enterprise quotes**. Nobody has built the solo-therapist-shaped version.

The 10× claim is narrow and I'll defend it: this doesn't write better appeals than a human biller. It answers a question no one currently answers — *which of my unpaid claims are about to become permanently unpaid* — in two minutes instead of never.

## 4. Target market

- **Primary customer:** Solo and 2–4 clinician private-practice mental health providers in the US (LPC, LCSW, LMFT, PsyD) who accept insurance, bill in-house through SimplePractice / TherapyNotes / Headway-adjacent setups, and have no dedicated billing employee. Practice revenue $60K–$250K/year. Panelled with 3–8 payers.

- **Why they buy:** Their pain isn't "claims get denied" — they've accepted that. Their pain is **not knowing which denials are still worth chasing**. Behavioral health sources describe practices where correctable denials sit until "someone finds time, which is usually never," ageing "right past their filing deadlines into write-offs." A therapist bills a session, moves on, and finds out nine months later that the claim was rejected in week two and is now legally uncollectable. The reported cost to rework a single denied claim is around **$117** in staff time, which is exactly why a solo practitioner triaging blind reworks nothing — every claim looks like a $117 gamble on an unknown payout.

- **Rough TAM reasoning:** ~600,000 therapists in the US across specialties, with a workforce growing ~20% through 2033. Not all take insurance and not all are solo — but Heard surveyed ~2,000 private-practice therapists and characterises the majority as "solo practitioners juggling everything alone — sessions, billing, marketing, bookkeeping... without a business partner, office manager, or CFO." Even a conservative 80,000–150,000 insurance-accepting solo/micro practices is a market where 1,000 customers is a rounding error of penetration and a real business.

- **Why now for them:** Insurance already pays them ~30% below private pay (**~$111/session vs ~$159**). Expenses grew 45% year-over-year to a median $18,000. **62% have no plans to raise fees in 2026.** When you can't raise prices and can't cut costs, the only lever left is collecting the money you already earned. That's a new emotional position for this customer and it's why they'll listen this year and wouldn't have three years ago.

## 5. Product sketch (MVP)

- **Deadline board** — every unpaid or denied claim, sorted by days remaining in that payer's filing window, not by date of service. Red / amber / green. The therapist opens it once a week and knows what to do.
- **Payer window library** — the actual filing and appeal deadlines for the payers this therapist is panelled with, maintained as product data, so the clock is right without the therapist ever looking up a rule.
- **Denial decoder** — reads the CARC/RARC codes off the remittance and says, in plain English, what went wrong and whether it's fixable, unfixable, or fixable-but-only-until-a-date.
- **Recoverable-dollar ranking** — orders the worklist by expected recovery, not by claim age, so a therapist with 45 free minutes works the three claims worth working.
- **Appeal packet drafts** — for the fixable categories, generates the corrected resubmission or appeal letter with the supporting documentation checklist attached.
- **Dead-claim ledger** — the claims that already expired, totalled, with the reason each one died. Ugly on purpose. This is the number that makes someone pay.
- **Weekly digest** — one email: "3 claims worth $612 expire in the next 14 days." That email is the entire product for most users most weeks.

## 6. AI angle — what's load-bearing

Two places, both load-bearing, and I want to be precise because it's easy to fake this.

**Where AI is genuinely required:** the input is a mess. This customer does not have a clean API to hand you — SimplePractice's public API is famously limited, and the practical data sources are ERA/835 files, payer-portal exports, EOB PDFs, and CSV dumps that differ by payer and by clearinghouse. Turning that heterogeneous pile into a normalised claim ledger with reliable dates, payer identity, denial reason, and dollar amount is exactly the extraction-and-reconciliation problem that got cheap and reliable in the last eighteen months. Five years ago this product needed a parser per payer and a services team. It now needs neither.

**Where AI writes the output:** the denial explanation and the appeal draft. Translating "CO-97, N390" into "this was bundled into the code you billed on the 14th, here's the correction and you have until October 3rd" is language work over a technical corpus.

**Where AI is deliberately not used:** the deadline math. That's a lookup table and date arithmetic, and it must be exactly right, every time, because a wrong green light costs the customer money they can never get back. Anything that touches the clock is deterministic code with a cited source. I'd rather show "we don't have this payer's window yet" than a confident guess.

Remove the AI and you're left with a spreadsheet the therapist has to fill in by hand — which is the current state of the world, and the reason 65% of denials never get resubmitted.

## 7. Localization angle (if any)

N/A — this is a US-only play by construction. The entire product is a function of US payer filing windows, CARC/RARC code semantics, and the 835 ERA format. There is no meaningful international version; the analogous product in another market would share zero product data and only the shape of the idea. Within the US the "localization" that matters is *payer* coverage, not geography — depth across the payers a behavioral-health solo actually bills (BCBS affiliates, Aetna, Cigna/Evernorth, UHC/Optum, Medicaid MCOs) beats breadth.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $79/month solo, $149/month for 2–4 clinicians. Annual at ~2 months free. Priced deliberately as a *tool*, not a service — it has to read as an obvious yes against the $350–$900/month outsourced billing alternative, and as a small add-on next to a $69–99/month EHR.

- **ACV:** ~$950 blended. Skewed to solo early; the group tier lifts it over time.

- **Rough math to $1M ARR:** 1,050 customers at a $950 blended ACV. Against a floor of ~80,000 insurance-accepting solo/micro practices, that's ~1.3% penetration. That's the number that makes this work — it does not require winning the category, it requires being findable by the small minority of therapists who are already actively annoyed about denials.

- **Rough math to $5M ARR:** ~4,000–4,500 customers, which needs two things to be true that I can't yet prove: (a) the group tier converts at a meaningfully higher rate than solo, pushing blended ACV toward $1,200, and (b) at least one distribution partnership — a billing service reselling it, or a therapist-directory/accounting player like Heard bundling it. Pure self-serve at $79 grinding to $5M is possible but slow. Treat $5M as the upside case, not the plan.

- **Expansion path:** eligibility-check-before-session (prevents a whole denial class), credentialing-expiry tracking (same clock-watching muscle, different clock), and a "second set of eyes" tier where flagged claims get human review. Each is a price increase, not a new product.

- **Gross margin note:** cost per customer is document ingestion plus model calls on a low-volume corpus — a solo therapist generates on the order of tens to low hundreds of claims per month, not thousands. This is a high-margin business at any scale that matters here.

## 9. Go-to-market wedge — first 100 customers

- **The free audit as the entire top of funnel.** "Upload your last 12 months of remittances. We'll tell you how much you already lost to expired claims, free." This is the whole pitch. The output is a number the therapist has never seen and will not forget — and industry benchmarks say for a first-time solo audit that number lands in the $15K–$40K band. Half the value is delivered before payment. Convert on the ones where the number is large and the expiry dates are close.

- **Psychology Today and directory scraping — the list is public and enumerable.** Psychology Today's directory is the dominant channel in this profession (members rank it their #1 source of new clients; ~971,000 weekly US visitors) and every listing states which insurance panels the therapist accepts. That field is the qualifier: filter to solo practitioners listing 3+ commercial payers, which is precisely the customer. Build a list of 3,000, send a personalised email naming their actual panels and the actual filing window for their tightest payer. Target 3–5% to a free audit, ~20% of audits to paid.

- **Facebook practice-owner groups and the profession's own media.** Private-practice therapists organise in large, active, closed Facebook groups and around a well-defined content ecosystem (practice-building podcasts, Heard's financial reporting, TherapyDen/GoodTherapy). This is a profession that shares vendor recommendations obsessively and distrusts anything that smells like it's from a billing company. Publish the aggregate data — "we analysed 40,000 behavioral health claims: here's what actually expires, by payer" — which no one else can publish because no one else has the data. That's content-heavy, it's slow, and it compounds.

- **Billing services as a channel, not a competitor.** The 6–9% billing services have the same blind spot on the claims they inherit and would rather resell a triage tool than build one. Three or four of these relationships is a different growth curve than self-serve alone.

- **The one channel I'd skip:** partnering with SimplePractice or TherapyNotes. It's the obvious move and it's a trap — you'd be asking the incumbent to help you sell the module they chose not to build, and giving them the roadmap.

## 10. Build complexity — justification

**Low, bordering on the top of Low.** The stack is off-the-shelf: document ingestion, an LLM for extraction and drafting, standard web app, a scheduled job that computes dates. There is no novel infrastructure and no ML training.

The real work is not engineering, it's **product data** — assembling and maintaining accurate filing and appeal windows per payer per plan type, and mapping CARC/RARC codes to fixable/unfixable/conditionally-fixable with the right supporting-document checklist. That's a research grind, not a build problem, and it's also the only thing here that's hard to copy.

Call it **8–10 weeks to a v1 a real therapist can use**, for one or two people, with most of that time going into the payer table rather than the app. The deliberate scope cut is ingestion: v1 accepts uploads and exports rather than integrating with anything, because integration is where this becomes a six-month project and it isn't needed to prove the value.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Business-associate/HIPAA obligations apply and are well-trodden; a BAA plus standard safeguards is table stakes, not a barrier. No licensure required to provide billing-support software. |
| Ethical — no harm / dark patterns | ✅ | Helps providers collect money they legitimately earned for care already delivered. The one ethical line: never nudge toward upcoding or aggressive resubmission of genuinely non-covered claims. Product should mark unfixable claims as unfixable. |
| Market exists (evidence above) | ✅ | Documented recoverable-revenue benchmarks, a 65% non-resubmission rate, and an existing $350–900/mo outsourced alternative that people already pay for. |
| 1–5 person team can build this | ✅ | 1–2 people, 8–10 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Main costs are the founder's time and the payer-data research. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money, felt regularly, and irreversible once the window closes — that irreversibility is what pushes it above "acknowledged inconvenience." Held below 17 because it's a *silent* pain: the therapist doesn't feel it daily, they feel it in one nasty realisation. Silent pains are harder to sell against than loud ones. |
| Demand evidence | 15 | 12/15 | Strong and multi-sourced: quantified recoverable-revenue benchmarks, 65% non-resubmission, an incumbent gap stated explicitly by third parties, and a funded alternative at 6–9% of collections. Docked for what's missing — I could not surface verbatim therapist complaints about *deadline tracking specifically*. The complaints I found are about denials and reimbursement generally. |
| Build feasibility | 15 | 13/15 | Off-the-shelf stack, 8–10 weeks, no novel infra. Not a 15 because the payer-window dataset is real work and has to be right. |
| Distribution clarity | 15 | 11/15 | The Psychology Today list is enumerable and self-qualifying, and the free-audit offer is unusually strong — the product proves itself pre-purchase. Docked because cold email to therapists is a channel with a lot of noise in it, and the 3–5% response assumption is untested. |
| Revenue mechanics | 15 | 11/15 | $79/mo is well-benchmarked between a $69–99 EHR and a $350–900 billing service, and 1,050 customers for $1M is achievable. Docked because the $5M path genuinely needs a partnership that doesn't exist yet, and because low-ACV self-serve to solo practitioners has churn risk I can't price. |
| Time to first revenue | 8 | 8/10 | The free audit compresses the sales cycle hard — value is demonstrated in one interaction. Realistically 6–8 weeks from launch to first paid, not 4, because the audit needs the therapist to go and export their remittances, and that's a real friction step. |
| Defensibility | 3 | 3/10 | Honest score. The payer-window dataset and CARC mapping are a genuine 6–9 month head start and a maintenance burden a casual competitor won't carry. But it's copyable, the data is publicly derivable, and — the real risk — SimplePractice or TherapyNotes could ship a "claim deadline" widget as a feature and take most of the oxygen. Execution-only moat. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical because the ingestion-and-normalisation layer is the product. Content-heavy because this profession buys on peer trust and published data, not ads — and the aggregate claims data is the only content nobody else can write. Notably **not** sales-heavy, which is what makes it viable for a solo builder.

### Key assumptions to validate (3–5)

1. **Assumption:** A solo therapist, shown a credible number for what they've already lost to expired claims, will pay $79/month to stop it recurring. **How to test:** run 20 free audits by hand before writing any code. Deliver the number. Ask for the card. If fewer than 5 convert, the pain is real but the price or the packaging is wrong.
2. **Assumption:** Therapists can actually get their remittance data out — from SimplePractice/TherapyNotes exports or payer portals — without hand-holding that kills the funnel. **How to test:** in those same 20 audits, measure how many complete the export unassisted. If it's under half, ingestion is the product risk, not distribution, and the roadmap changes.
3. **Assumption:** Expired and near-expired claims are common enough in a *typical* solo practice to justify the subscription — not just in the disorganised tail. **How to test:** the audits produce this directly. If the median audit surfaces under ~$2,000 recoverable, the $15K–$40K benchmarks are group-practice numbers wearing a solo label, and the pricing has to come down or the target has to move up to groups.
4. **Assumption:** Payer filing windows can be compiled and maintained accurately enough to be trusted. **How to test:** build the table for the top 15 payers by behavioral-health volume and verify each against the payer's own provider manual. Track how many changed in the prior 12 months — that number is both the moat and the maintenance cost.

### Risk flags

1. **Incumbent feature risk (the big one):** SimplePractice or TherapyNotes adds a filing-deadline column. They have the data natively, they have the customer, and it's not a hard feature. This is the most likely way the business dies. The counter is depth — appeal drafting, payer-specific rules, cross-EHR support — but a founder should assume this happens and plan to be more than a deadline column by month 12.
2. **Data access / platform dependency:** SimplePractice's public API is limited, so v1 depends on user-initiated exports. That's fragile UX and it's the single biggest conversion risk. It's also, perversely, a partial defence — the same friction is why the incumbents' customers can't easily be served by anyone else.
3. **Compliance overhead:** PHI in, PHI out. HIPAA obligations, BAAs, and the security posture that goes with them are non-negotiable and add real cost and sales friction for a solo builder. Not a blocker — well-trodden ground — but don't price it at zero.
4. **Low-ACV churn:** $79/month to a solo practitioner is a cancellable line item. Once a therapist has cleared their backlog, the ongoing value drops — the product risks feeling like a one-time cleanup. Mitigation is the weekly digest habit and expansion into eligibility/credentialing clocks, but retention is the number to watch above all others.
5. **Silent-pain marketing:** the customer doesn't wake up searching for this. There is no meaningful search volume for "claim filing deadline tracker for therapists" because they don't know the category exists. Demand has to be created via the audit, which caps how fast this can grow on inbound alone.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder or pair, comfortable with document
                        extraction and HIPAA basics, willing to grind out a payer-rules
                        dataset by hand and publish data-led content into a
                        trust-driven profession. No sales team required.
Time to revenue:        6–8 weeks from launch (8–10 weeks build + audit-led conversion)
Capital to launch:      $8–15K (compliance setup, model costs, payer-data research time)
Top 3 assumptions to validate first:
  1. Willingness to pay — hand-run 20 free audits pre-code, ask for the card, need 5+ conversions
  2. Data extractability — measure unassisted export completion in those same 20; under 50% changes the roadmap
  3. Median recoverable amount per solo practice — if under ~$2,000, the benchmarks don't apply to this customer
Kill criteria:
  - Abandon if fewer than 5 of 20 hand-run free audits convert to paid
  - Abandon if the median audit surfaces under $2,000 in recoverable/expiring claims
  - Abandon if SimplePractice or TherapyNotes ships native filing-deadline tracking
    before v1 launches
  - Abandon if fewer than 50% of audit participants can export their own remittance
    data without a support call
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the payer-window table for the 10 payers a behavioral-health solo most commonly bills, sourced from each payer's provider manual. This is unglamorous and it is also the product. If this takes longer than two days, that's a finding — it means the dataset is harder than assumed and the moat is bigger but so is the cost.
- **Day 3:** Scrape 300 Psychology Today listings filtered to solo practitioners naming 3+ commercial panels. Email all 300 offering a free lost-revenue audit, referencing their actual panels and the tightest filing window among them.
- **Day 4–5:** Hand-process every remittance file that comes back — manually, in a spreadsheet, no software. Produce a one-page number for each: dollars already expired, dollars expiring in 30/60/90 days, and the three claims worth chasing this week. Deliver it, then ask for $79/month on the spot.
- **Day 5, decision:** Go if **≥15 of 300 request the audit, ≥8 successfully export their own data, and ≥4 of those pay**. That's a falsifiable triple gate covering the three things that can kill this independently: interest, data access, and willingness to pay. Failing the export gate specifically is not a no — it's a redirect toward solving ingestion first.

The trap to avoid: therapists being enthusiastic about the audit and not paying. Enthusiasm is not the outcome being measured. The card is.
