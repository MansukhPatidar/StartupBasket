---
title: "ShortPay — underpayment auditor for specialty practices"
slug: specialty-practice-underpayment-recovery
date: 2026-06-16
category: HealthTech / US Independent Specialty Physician Practices (1–10 providers)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "ShortPay reads every 835 against the payer contract and claws back the claims insurers quietly short-paid."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, AI-agent, SMB, RCM, Revenue-recovery]
axes:
  problem: 17
  demand: 12
  build: 10
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ShortPay — underpayment auditor for independent specialty practices

## 1. One-liner

ShortPay reads every 835 against the payer contract and claws back the claims insurers quietly short-paid.

## 2. Trend signal — why now?

Underpayment is the revenue leak nobody is watching. Denials get screamed about; underpayments slip through because the claim *got paid* — just not in full. The numbers are not small:

- MD Clarity / industry data: **1.8–3.4% of paid claims carry an unrecovered payer underpayment**; a 3% rate on a $10M practice ≈ **$300K/year** evaporating silently.
- Multi-specialty groups lose **$150K–$400K/year** to revenue leakage hidden in denial write-offs, *underpayments*, and missed charge capture (Medical Billers & Coders, 2026).
- Tebra / Aroris: "**most independent practices have at least some services priced below their contracted allowable rates without realizing it**" — when payers update fee schedules but never align claims logic, providers get short-paid *with no explanation*.

The enabling shift: payer contracts and 835/ERA remittances are now machine-readable end-to-end. LLMs can extract a structured fee schedule (DRGs, carve-outs, lesser-of provisions, escalators) out of a messy contract PDF in minutes — work that used to require a human contract analyst billed hourly. CMS's 2026 prior-auth transparency rules (every denial must carry a specific reason) are pushing the whole industry toward line-level payment scrutiny. The tooling to *detect* underpayments at the line level was, until ~12 months ago, only economical for $1B health systems running R1/Cloudmed.

Provenance:
  - Signal 1 (demand): "Most independent practices have at least some services priced below their contracted allowable rates without realizing it" + $150K–400K/yr leakage — https://www.tebra.com/theintake/getting-paid/rcm-and-claims/how-to-reduce-medical-billing-underpayments , https://www.medicalbillersandcoders.com/blog/is-your-practice-losing-revenue/ — 2026-06-16
  - Signal 2 (feasibility): 835/ERA is a fully structured EDI transaction (CO-45, allowed amount, CARC) and LLMs now extract structured reimbursement terms from contract PDFs cheaply — https://arrowhq.com/blog/835-era-file-guide , https://www.mdclarity.com/revfind — 2026-06-16
  - Signal 3 (economic): Underpayment recovery is a real outsourced industry — R1/Cloudmed is "the largest and longest-running outsourced underpayment recovery program in the country," MD Clarity sells RevFind on contingency — but built for health systems, not 1–10 provider practices — https://www.r1rcm.com/solutions/underpayment-recovery , https://www.mdclarity.com/comparison/best-healthcare-underpayment-recovery-services — 2026-06-16
  Category: Geographic arbitrage (enterprise tool → SMB-affordable tier)

## 3. The opportunity

The incumbents — MD Clarity's RevFind, Waystar, FinThrive, Experian, R1/Cloudmed — are real and good. They are also built, priced, and sold for **hospitals and large groups**. Their reference cases are "$1.8B health system," "$8M in missed revenue," "$25M total recoveries." A solo gastroenterologist or a 4-doc orthopedic group doing $4M does not get a call back from R1, and could not stomach the implementation if they did. So the small practice does one of two things: nothing (eats the leak), or pays an outsourced biller who "doesn't have the time and bandwidth to chase" — the incumbent's own marketing copy admits this is why practices give up.

What they all do badly for the small end of the market:
- **Onboarding assumes a contract-management team.** ShortPay needs one thing: upload your payer contracts + connect your 835 feed. The LLM does the contract-to-fee-schedule extraction the enterprise tools make you (or a consultant) do by hand.
- **Pricing assumes a six-figure book.** A $99–$399/mo or modest contingency tier is invisible to enterprise vendors and perfect for a practice clawing back $20K/year.
- **They flag; they don't fight.** ShortPay drafts the appeal letter with the exact contract clause and CARC cited, ready to send. That last mile is where small practices stall.

10× better isn't a smarter algorithm. It's "a $4M practice gets enterprise-grade underpayment detection in an afternoon for the price of a streaming bundle."

## 4. Target market

- **Primary customer:** Owner or practice manager of an **independent single-specialty practice, 1–10 providers**, in a procedure-heavy specialty where contracted rates and underpayments bite hardest — orthopedics, gastroenterology, dermatology, ophthalmology, cardiology, pain management. US-only at launch.
- **Why they buy:** "Payers happily pay us less than they owe and we never catch it." Owners feel the squeeze directly — independent practices already get reimbursed *less than half* of hospital-owned rates for the same service, so every short-paid claim on top of that is intolerable. They have no contract analyst and their biller is buried in denials.
- **Rough TAM reasoning:** ~395K active physician group practices in the US; ~42% private/independent; ~37% single-specialty. Conservatively **40,000–60,000 small independent specialty practices** in procedure-heavy specialties. Add the **secondary channel**: thousands of third-party RCM/billing companies (Kareo/Tebra-adjacent, DrChrono billers, regional shops) who could white-label ShortPay across their whole book. At even $200/mo, 50K practices is a $120M ceiling — far past the $5M target.
- **Why now for them:** Margin compression is acute, hospital-buyout pressure is at record highs (private-practice share fell from 60% in 2012 to 42% in 2024), and CMS 2026 reforms force payers to itemize reasons — making line-level underpayment detection both more urgent and more tractable.

## 5. Product sketch (MVP)

- **Contract ingest:** upload payer contract PDFs; AI extracts the fee schedule — allowed amounts by CPT, lesser-of provisions, carve-outs, escalators, timely-filing limits — into a structured rate table the owner can eyeball and correct.
- **835/ERA feed:** connect remittance files (clearinghouse export or direct 835 drop). Each paid line gets matched to its contracted rate.
- **Underpayment ledger:** every claim where paid < contracted (net of legitimate CO-45 contractual allowance) surfaces in a worklist, ranked by dollar value and recoverability.
- **Pattern alerts:** "Aetna has been paying CPT 45378 12% under contract since March" — systemic underpayments, not just one-offs.
- **Appeal drafter:** one-click letter citing the specific CPT, contracted rate, CARC, and contract clause — formatted to the payer's appeal channel.
- **Fee-schedule guard:** flags your *own* charge master line items priced below contracted allowable (the silent self-inflicted leak).
- **Recovery dashboard:** dollars flagged, dollars recovered, yield by payer — the number the owner screenshots for the next contract negotiation.

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet nobody fills in — which is exactly why the leak exists today. The AI does the two jobs that previously required paid human specialists: (1) **turning a non-standard, payer-specific contract PDF into a clean structured fee schedule** (the bottleneck that makes enterprise tools need a consultant), and (2) **reading every 835 line, reconciling it against that schedule net of legitimate adjustments, and writing the appeal in payer-ready language with the right clause cited.** Contract extraction across hundreds of payer formats is genuinely an LLM problem — rules engines have failed at it for a decade, which is why this stayed an enterprise-services business. AI is the reason a 2–3 person team can now offer at $200/mo what used to cost a contingency fee on a hospital's book.

## 7. Localization angle (if any)

N/A — this is a US-only play by design. The wedge *is* the US payer-contract system (commercial fee schedules, 835/ERA EDI standard, CARC/CO-45 codes, the appeal-rights regime). That specificity is the moat, not a limitation. No India/LatAm version makes sense; single-payer and other systems don't have the contracted-rate-vs-paid-rate gap that defines the product.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Two tiers. **Self-serve SaaS** at $149–$399/mo per practice (by provider count / claim volume). **Performance tier** for the skittish: free detection + **15–20% of recovered dollars** for the first 6 months, then convert to flat SaaS. RCM-biller channel: volume license, e.g. $49–$99/practice/mo across their book.
- **ACV:** ~$3,000/yr blended (mix of $200/mo SaaS and contingency converts).
- **Rough math to $1M ARR:** ~340 practices × $250/mo × 12 = $1.02M. Or land 6–8 RCM billing companies each running 60+ practices.
- **Rough math to $5M ARR:** ~1,400 practices direct, or a dozen mid-size RCM partners white-labeling across 100+ practices each, plus an enterprise tier for multi-site groups. Entirely inside the 40K–60K TAM.
- **Expansion path:** start with underpayment detection → add denial-prevention, contract-negotiation benchmarking ("you're 9% under market on CPT X across all payers"), and charge-capture leak detection. ACV grows as ShortPay becomes the practice's revenue-integrity layer.

## 9. Go-to-market wedge — first 100 customers

- **Contingency pilot, named list:** pull 500 independent orthopedic + GI practices from NPI/CMS provider directories and state medical board lists. Offer a free 60-day underpayment audit: "We'll find what Aetna short-paid you last quarter; you pay 20% of what you recover, nothing if we find nothing." Risk-free framing closes a money-losing owner fast. Expect 8–12% to take a free audit, half to convert.
- **RCM-biller channel:** the highest-leverage move. Sign 5–10 small third-party billing companies (the DrChrono/Kareo-adjacent shops) who already hold the 835 feeds for dozens of practices. ShortPay makes *them* look good and adds a revenue line — one signed biller = 40–80 practices.
- **Specialty MSO / association angle:** procedure-heavy specialties have buying groups and state societies (AIMPA advocates for 14,000+ independent physicians). One webinar + a member discount puts ShortPay in front of exactly the right owners.
- **Founder-led proof:** run the audit by hand on the first 10 design-partner practices, publish anonymized "we found $X in 90 days" case studies — the only marketing a skeptical practice owner trusts.

## 10. Build complexity — justification

Medium. Off-the-shelf: LLM contract extraction, 835/EDI parsing libraries (the format is standardized), standard web stack, a BAA-covered cloud. Custom work: the reconciliation engine (paid vs contracted net of legitimate adjustments — must be precise or it cries wolf), the contract-extraction QA loop (owners must trust the rate table), and HIPAA operational hygiene (a config and discipline burden, *not* a pre-launch approval). A 2–3 person team ships a credible v1 in ~3–4 months, faster if the first version is concierge (founder runs the audit, software catches up).

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reviewing your own claims data; appeals are a contractual right. BAA required, no license. |
| Ethical — no harm / dark patterns | ✅ | Recovers money legitimately owed under contract. Pro-provider, anti-leak. |
| Market exists (evidence above) | ✅ | Quantified leakage, existing enterprise vendors, outsourced recovery industry. |
| 1–5 person team can build this | ✅ | 2–3 people, ~3–4 months to v1. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf APIs + cloud; concierge-first keeps build cost low. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Direct, recurring, quantified money loss owners can't see. Hair-on-fire once shown the number. |
| Demand evidence | 15 | 12/15 | Multiple independent sources, funded enterprise incumbents, an outsourced recovery industry. Direct SMB-tier demand still to be proven. |
| Build feasibility | 15 | 10/15 | Standard stack + EDI, but reconciliation precision and contract-extraction QA are non-trivial; HIPAA hygiene adds discipline. |
| Distribution clarity | 15 | 11/15 | Named lists + contingency offer + RCM-biller channel. Healthcare sales is slower than the offer implies. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked to incumbents; contingency lowers buying friction; clear customer count to $1M. |
| Time to first revenue | 10 | 7/10 | Contingency pilot can pay inside 8 weeks; full SaaS conversion is slower. |
| Defensibility | 10 | 5/10 | Execution + accumulating contract-extraction library + biller-channel lock-in. Copyable, but the small-practice niche is unglamorous and incumbents won't chase it down-market fast. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone who can build precise reconciliation logic AND someone who genuinely understands payer contracts, CARC/CO codes, and the appeals process. A technical founder + an RCM/billing-veteran advisor is the ideal pair.

### Key assumptions to validate (3–5)

1. **Assumption:** Small specialty practices have enough recoverable underpayment ($10K+/yr) to justify paying. **How to test:** Run free manual audits on 10 design-partner practices; measure recoverable dollars found.
2. **Assumption:** AI can extract a usable fee schedule from real-world payer contract PDFs at >90% line accuracy. **How to test:** Feed 25 actual contracts across 5 payers; have an RCM expert grade the extracted rate tables.
3. **Assumption:** Practices will connect their 835 feed / hand over remittances to a young vendor. **How to test:** Track how many of the first 30 prospects actually complete data connection vs. stall on trust/security.
4. **Assumption:** RCM billing companies will adopt rather than view it as a threat to their own value. **How to test:** Pitch 10 small billers; measure interest in white-label vs. defensiveness.

### Risk flags

1. **Sales-cycle risk:** Healthcare buyers move slowly and security-review even small vendors. The contingency offer is the antidote but doesn't fully erase it.
2. **Incumbent down-market move:** MD Clarity or Waystar could ship an SMB tier. Mitigant: they're structurally focused on health systems and contingency on big books; the small-practice niche is unattractive to them — for now.
3. **Accuracy / trust risk:** A reconciliation engine that flags legitimate contractual allowances as underpayments destroys credibility instantly. Precision is existential, not a nice-to-have.
4. **Platform/data-access risk:** Reliance on clearinghouse/835 export pathways; if a major clearinghouse closes access, onboarding friction rises.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + RCM/payer-contract domain advisor
Time to revenue:        8–12 weeks (contingency pilot); 4–6 months (SaaS conversion)
Capital to launch:      $15–30K (₹12–25L)
Top 3 assumptions to validate first:
  1. Recoverable underpayment per small practice ≥$10K/yr — manual audits on 10 design partners
  2. AI fee-schedule extraction ≥90% accuracy on real contracts — expert-graded test set of 25 contracts
  3. Practices will connect 835/remittance data to a new vendor — track data-connection completion rate on first 30 prospects
Kill criteria:
  - Abandon if median recoverable underpayment across 10 audited practices is <$5K/yr (no ROI to sell against)
  - Abandon if contract-extraction accuracy can't clear ~90% after tuning (false positives kill trust)
  - Abandon if <2 of first 10 RCM billers show channel interest AND direct data-connection completion stays <30%
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 3–5 independent specialty practices (orthopedics/GI) via warm intros or an RCM-biller contact. Get them to share one quarter of de-identified 835 remittances + their top-2 payer contracts.
- **Day 3–4:** Manually (with LLM assist) extract the fee schedules and reconcile that quarter's paid lines against contracted rates. Tally recoverable underpayment dollars per practice.
- **Day 5:** Decide go / no-go on a falsifiable bar: **median recoverable underpayment ≥ $2,500 per practice per quarter** (≈$10K/yr) across the cohort, AND at least 2 of the 5 owners say "yes, send the appeals and take a cut." If the dollars aren't there or owners shrug, kill it — the whole thesis rests on visible, recoverable money.
