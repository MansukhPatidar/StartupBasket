---
title: "ClearFirst — SBA eligibility pre-screen for loan packagers"
slug: sba-eligibility-prescreen
date: 2026-06-07
category: FinTech / US-SMB
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Catches the deal-killing SBA eligibility flaw before a packager spends a dollar on appraisals or weeks of underwriting."
tags:
  vertical: FinTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder, Regulatory-arbitrage]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# ClearFirst — SBA eligibility pre-screen for loan packagers

## 1. One-liner

Catches the deal-killing SBA eligibility flaw before a packager spends a dollar on appraisals or weeks of underwriting.

## 2. Trend signal — why now?

The SBA rulebook (SOP 50 10 8) governing who can get a 7(a) or 504 loan has whiplashed **three times in twelve months**:

- **June 1, 2025** — SOP 50 10 8 took effect, rewriting eligibility, underwriting standards, and procedures.
- **January 1, 2026** — Procedural Notice 5000-872050 extended eligibility to businesses with ≤5% foreign/LPR ownership held outside the US.
- **March/April 1, 2026** — that carve-out was *eliminated*. Now 100% of direct and indirect owners must be US citizens or US nationals residing in the US. Green-card holders can no longer hold *any* ownership interest in an applicant, operating company, or eligible passive company.

That's a goalpost that moved twice in one quarter. The consequence is brutal and asymmetric: **an eligibility error makes a loan ineligible for the SBA guaranty from day one.** When the SBA later catches it at guaranty-purchase time, the lender eats a "repair" (monetary clawback) or a full denial of liability. Meanwhile the borrower has already paid for an appraisal ($2–5K), a Phase I environmental ($1.5–6K), and the packager has burned weeks of work — all torched the moment someone notices the affiliation chain or an LPR on the cap table.

No off-the-shelf tool screens for this *before* the spend. The loan-origination platforms (Centrex, Zeitro, LendingPad) are CRMs and document pipelines — they assemble the package, they don't rule on eligibility. Eligibility analysis today is a human reading a 400-page SOP from memory, or a $400/hr SBA attorney.

Provenance:
  - Signal 1 (demand): "The most common reason for an early denial of liability involves eligibility errors — if the borrower doesn't qualify for the program, the loan is ineligible for the guaranty from day one." Affiliation/size-standard mapping is a known, repeated failure mode. — https://michaelcarbonara.com/sba-loans-explained-common-denial-reasons/ and https://windsoradvantage.com/news/sba-loan-default-reasons-repair-denial — 2026-06-07
  - Signal 2 (feasibility): The SOP rules are now public, structured, and frequently revised — a perfect target for an LLM that ingests the current SOP and a borrower intake and returns a structured eligibility verdict. The Jan→Mar 2026 citizenship flip is fully documented in SBA procedural notices. — https://www.sba.gov/document/procedural-notice-5000-872050-procedural-notice-5000-872050-update-sop-50-10-8-citizenship-residency-requirements — 2026-06-07
  - Signal 3 (economic): Packaging fees run $2,500–$5,000 per loan and broker referral/packaging fees are capped at 0–1% of loan amount — there is already real money changing hands per deal, and a dead deal is pure loss. 1,306 active SBA lenders + 800+ Lender Match brokers + thousands of independent packagers. — https://starfieldsmith.com/2025/12/understanding-sba-7a-loan-fees-and-costs/ and https://www.sba.gov/partners/lenders/lender-reports — 2026-06-07
  Category: Regulatory arbitrage

## 3. The opportunity

The gap is a **pre-flight check that doesn't exist**. Today the eligibility decision happens implicitly — buried inside a human packager's head, surfaced too late, or paid for at attorney rates. The pain isn't "I can't find the SOP"; it's "I didn't apply the *current* version of three intersecting rules (citizenship, affiliation/size standard, ineligible-use) to *this specific* cap table and ownership chain, fast, on day one."

The incumbents to disrupt aren't software — they're (a) the SBA attorney doing $1,200 eligibility memos, and (b) the status quo of finding out at guaranty purchase. A focused AI-first tool wins because it does the boring, repeatable part — map the ownership/affiliation graph, check it against the *currently effective* SOP, flag the citizenship and size-standard landmines — in two minutes instead of two days, and re-runs it free every time the SOP changes (which it now does constantly).

This is regulatory arbitrage in its cleanest form: the regulation itself is the moat. The rules are too fluid for a generic tool and too narrow for a big LOS vendor to bother with, but they're life-or-death for the people who package these loans.

## 4. Target market

- **Primary customer:** Independent SBA loan packagers / consultants and small-to-mid SBA lending shops (the BDO + credit-analyst pods inside community banks, CDCs, and non-bank 7(a) lenders). Think 1–20 person operations that touch 5–50 SBA files a month.
- **Why they buy:** In their world, a killed-late deal is lost fees + a burned borrower relationship + reputational hit; for the lender, an eligibility miss is a guaranty repair that can cost six figures on one loan. They will pay to *never* be the person who told a borrower to order a $4K appraisal on a deal that was dead on arrival.
- **Rough TAM reasoning:** 1,306 active SBA lenders, 800+ Lender Match brokers, and an estimated several thousand independent packagers/consultants. Even 2,000 paying seats at ~$200/mo = ~$4.8M ARR. The addressable population is countable and reachable.
- **Why now for them:** The Jan→Mar 2026 citizenship reversal just nuked deals that were eligible 60 days earlier. Every packager who got burned in Q1 2026 is now paranoid and actively looking for a way to not get burned again.

## 5. Product sketch (MVP)

- Paste or upload a borrower intake (entity structure, owners + citizenship status, NAICS, affiliates, use of proceeds) → get a **GO / FLAG / KILL** eligibility verdict in under two minutes.
- **Ownership & affiliation mapping:** builds the ownership graph, applies the >50% affiliation tests and the applicant-plus-affiliates size-standard check against the borrower's NAICS.
- **Citizenship/residency screen:** flags any owner who is an LPR or non-citizen, or any US-citizen owner whose principal residence is outside the US — the exact landmines that changed in 2026.
- **Use-of-proceeds & ineligible-business check** against the current SOP's ineligible categories.
- **Versioned rulebook:** every verdict is stamped with which SOP/procedural-notice version it was run against, so a verdict run in February vs. April is auditable and re-runnable.
- **Plain-English "why" memo** for each flag, with the SOP citation — drop it in the file as the eligibility work product (replaces the attorney memo for the common cases).
- **Change alerts:** when the SOP changes, auto re-screens the customer's open pipeline and flags newly-dead deals.

## 6. AI angle — what's load-bearing

Remove the AI and you have a checklist PDF — which already exists and which nobody reads correctly under deadline pressure. The load-bearing work is: (1) parsing messy, unstructured borrower intake (org charts, cap tables, narrative descriptions) into a structured ownership/affiliation graph, and (2) reasoning over the intersection of three rule families against the *current* SOP text and returning a cited verdict. That's exactly the unstructured-input → structured-rule-application task LLMs got good at. The SOP is the ground truth; the model's job is faithful application + citation, not invention. This is RAG-over-regulation with a structured-output verdict — load-bearing, not decorative.

## 7. Localization angle (if any)

N/A — this is a US-only play by definition. SBA loans are a US federal program; the regulation *is* the product. There is no India/SEA cut. The "localization" here is regulatory-vintage localization: being pinned to the exact currently-effective SOP version is the whole game.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered SaaS. Solo packager: **$99/mo** (up to ~15 screens). Small shop: **$299/mo** (unlimited screens, 3 seats). Lending team: **$499–$999/mo** (more seats, pipeline auto-re-screen, audit export). Optional per-screen overage for high-volume.
- **ACV:** ~$2,400–$6,000 blended.
- **Rough math to $1M ARR:** ~350 customers × ~$240/mo × 12 ≈ $1.0M. Very reachable against a base of 1,300+ lenders and thousands of packagers.
- **Rough math to $5M ARR:** ~1,500–1,800 paying accounts, or fewer accounts trending toward team tiers ($499+). Requires landing inside lenders, not just solo packagers.
- **Expansion path:** seat expansion within lending teams; pipeline auto-re-screen as a premium add-on; adjacent rule engines (504 vs 7(a) specifics, franchise eligibility, change-of-ownership rules); a white-label API so an LOS vendor embeds the eligibility verdict.

## 9. Go-to-market wedge — first 100 customers

- **The Q1-2026 burn list:** Mine SBA-lending LinkedIn, the NAGGL community, and SBA-attorney blog comment sections for packagers/BDOs who publicly griped about the citizenship reversal. Cold-DM each a 90-second Loom showing their *own* style of deal run through ClearFirst flagging the LPR landmine. Expect 5–8% reply on a hyper-relevant pain.
- **Ride the SOP-change news cycle:** Every time the SBA issues a procedural notice, publish a same-day "what changed and who's now ineligible" breakdown + a free single-deal screen. The audience is already searching that exact query that week.
- **Partner with SBA-lending trainers/consultants** (CapitalAx-style broker-training programs, NAGGL course instructors) — they have the email lists of new packagers who are most scared of making an eligibility mistake. Rev-share or affiliate.
- **Land-and-expand via one lender pod:** sell one community-bank SBA team, get the case study ("caught 3 dead deals in month one"), use it to walk into the next 20 PLP lenders.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: LLM with structured output, RAG over the public SOP/procedural notices, standard web stack. Custom work: encoding the affiliation/size-standard logic as a deterministic rule layer the LLM feeds into (you do *not* want the model free-styling a >50% ownership test), building the versioned-rulebook ingestion so each SOP revision is a dated dataset, and an eval harness against known-good/known-bad fact patterns. A technical founder with an SBA-eligibility advisor ships a credible v1 in ~3–4 months. The hard part is correctness and trust, not infrastructure.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Advisory/screening tool; it informs an eligibility decision, doesn't make the loan. Disclaim "not legal advice." |
| Ethical — no harm / dark patterns | ✅ | Reduces wasted borrower spend and bad-faith approvals. Net-positive. |
| Market exists (evidence above) | ✅ | Eligibility errors are *the* most common early denial reason; real money per deal. |
| 1–5 person team can build this | ✅ | Technical founder + domain advisor, ~3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | Inference + hosting + advisor time. Well under $50K. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire for the lender (six-figure repair risk) and the packager (lost fees + relationship). Frequency is per-deal, weekly+. Not a daily grind, which caps it below 17. |
| Demand evidence | 15 | 12/15 | Strong: documented as the #1 early-denial cause, real per-deal spend, 3 rule flips in a year. Docked for lack of verbatim customer quotes — pain is sourced from legal/industry analysis, not yet from interviews. |
| Build feasibility | 15 | 11/15 | Doable in 3–4 months. Correctness bar is high; the deterministic affiliation logic + eval harness is real engineering, not a weekend. |
| Distribution clarity | 15 | 12/15 | Countable, reachable audience; a clear "burn list" + SOP-news-cycle wedge. Not a 2-week sprint, hence not 13+. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked against $2.5–5K packaging fees and $400/hr attorneys — easy to justify $99–499/mo. ARR math is reasonable; team-tier penetration is the swing assumption. |
| Time to first revenue | 10 | 7/10 | A scared packager can be sold in weeks once the tool demonstrably catches a real landmine. Needs a trust-building pilot, so not sub-4-weeks. |
| Defensibility | 10 | 5/10 | Moat is regulatory currency + accumulated eval set + workflow lock-in, not tech. A well-funded LOS could bolt this on — but the rules are too narrow/fluid for them to prioritize, and being *first and trusted* on each SOP change compounds. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

You need a real SBA-eligibility brain in the building (or as a co-founder/advisor). Get the affiliation or citizenship logic subtly wrong and the product is worse than useless — it gives false confidence on a six-figure-risk decision. The technical build is tractable; the domain correctness is the bar.

### Key assumptions to validate (3–5)

1. **Assumption:** Packagers/lenders will trust a software verdict enough to act on it (or at least to stop spending before a human confirms). **How to test:** Run 20 real anonymized historical deals (including known-dead ones) through a manual prototype; ask 15 packagers "would you have ordered the appraisal if you'd seen this?"
2. **Assumption:** The eligibility verdict can be made accurate enough on the common fact patterns to be relied upon. **How to test:** Build an eval set of 100 labeled fact patterns from SOP examples + attorney write-ups; target >95% on citizenship/affiliation/use-of-proceeds before charging.
3. **Assumption:** Willingness to pay $99–499/mo is real, not just nodding. **How to test:** Pre-sell 10 annual pilots at a launch discount off the cold-outreach burn list before building the full product.
4. **Assumption:** SOP volatility continues (or at least the fear of it persists). **How to test:** It already flipped 3× in 12 months; monitor for stabilization — if rules freeze for 18 months the "auto re-screen" value erodes but the core check remains.

### Risk flags

1. **Liability/trust risk:** A wrong "GO" on a deal that's actually ineligible is a serious failure. Mitigate with conservative FLAG-don't-GO defaults, mandatory human sign-off, clear "not legal advice" framing, and a citation for every verdict.
2. **Regulatory-dependency risk:** The product lives and dies by the SBA program existing roughly as-is. A major program restructuring is both a risk (rebuild) and an opportunity (everyone needs re-screening). Net: the volatility that creates the risk is also the demand engine.
3. **Platform/incumbent risk:** An LOS vendor (Centrex, Zeitro) or an SBA-attorney firm could add an eligibility module. First-mover trust on each SOP change + an accumulating eval set is the defense, not patents.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + SBA-eligibility domain expert (co-founder or close advisor)
Time to revenue:        8–12 weeks (pre-sold pilots possible earlier)
Capital to launch:      $15–30K ($ inference, hosting, advisor time, eval-set build)
Top 3 assumptions to validate first:
  1. Packagers will act on a software eligibility verdict — test with 20 historical deals + 15 interviews
  2. Verdict accuracy >95% on common fact patterns — build a 100-case labeled eval set before charging
  3. WTP $99–499/mo — pre-sell 10 annual pilots off the Q1-2026 burn list
Kill criteria:
  - Abandon if <3 of 15 interviewed packagers say a software verdict would change their pre-spend behavior
  - Abandon if eval accuracy on citizenship/affiliation can't clear 95% within the build window
  - Abandon if the SBA program is restructured so heavily that eligibility becomes trivial/automated upstream
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 20 real (anonymized) SBA fact patterns — mix of clean, affiliation-trap, and post-March-2026 citizenship-trap deals. Hand-run each through the current SOP to establish ground-truth verdicts.
- **Day 3–4:** Build a no-code prototype: paste intake → ClearFirst returns GO/FLAG/KILL + cited reasoning. Run all 20 cases; measure where it agrees with ground truth.
- **Day 5:** Put it in front of 15 packagers/BDOs from the burn list. **Go signal:** ≥8 of 15 say "I would have stopped spending / I'd pay for this," AND the prototype hits ≥90% agreement with ground truth on the citizenship + affiliation cases. **No-go:** below either bar — the trust or the accuracy isn't there yet.

The result is falsifiable: a counted agreement rate against ground truth, and a counted yes/no on changed pre-spend behavior. Not "people seemed interested."
