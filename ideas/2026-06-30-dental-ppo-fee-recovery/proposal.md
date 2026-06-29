---
title: "PlanPry — PPO fee-recovery engine for dental practices"
slug: dental-ppo-fee-recovery
date: 2026-06-30
category: HealthTech / US Independent & Small-Group Dental Practices (1–8 chairs)
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Finds every PPO plan a dental practice is silently leased into, benchmarks its top codes, and drafts the renegotiation packet."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, Compliance-driven, AI-agent, Revenue-recovery, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# PlanPry — PPO fee-recovery engine for dental practices

## 1. One-liner

Finds every PPO plan a dental practice is silently leased into, benchmarks its top codes, and drafts the renegotiation packet.

## 2. Trend signal — why now?

Three things just lined up.

First, the **money is provably on the table and dentists know it**. Industry resources are blunt: practices are "leaving tens — or hundreds — of thousands on the table," and many "don't realize their reimbursements could be 20–40% lower than they should be because of indirect network participation." Negotiation firms quote average increases of **7–13% of total practice revenue** from a single re-negotiation cycle. For a $1M practice that's $70K–$130K/year of found money.

Second, **the umbrella-network problem became a regulatory event in 2026**. Colorado enacted a law in April 2026 introducing an *opt-in* standard — insurers must get affirmative consent before leasing a dentist's services to third parties, and dentists can *request a network participation report*. New Jersey published similar guidance in December 2025. The thing that was always murky — "which plans am I actually in, and at what rate?" — is now a legal right dentists can exercise but have no tool to act on.

Third, **the data and the drafting both got cheap**. UCR percentile fee data by ZIP is licensable (Context4 Healthcare segments the country into 360+ geographic zones; FairHealth, Henry Schein, FeePro all sell it). And LLMs can now read a messy fee-schedule PDF, map a practice's top 25 CDT codes against the regional 80th percentile, untangle which TPA/umbrella each plan routes through, and draft a data-backed negotiation letter — the exact billable work a $5,200-per-project consultant does by hand.

Provenance:
  - Signal 1 (demand): "Many practices don't realize their reimbursements could be 20–40% lower… tens or hundreds of thousands in lost revenue"; negotiation firms report 7–13% revenue lifts — https://veritasdentalresources.com/post/ppo-fee-negotiation-fails-why-dentists-get-burned-and-how-to-avoid-it — 2026-06-30
  - Signal 2 (feasibility/economic): Colorado opt-in network-leasing law (April 2026) + dentists' right to a network participation report; NJ guidance Dec 2025 — https://adanews.ada.org/ada-news/2026/april/coloradoenacts-dental-insurance-reform-targeting-network-leasing-practices/ — 2026-06-30
  - Signal 3 (feasibility): Licensable UCR fee data by ZIP/percentile (Context4 360+ segments, FairHealth, FeePro) makes benchmarking a software call, not a consulting engagement — https://www.context4healthcare.com/industry/life-care-planners/ — 2026-06-30
  Category: Workflow automation

## 3. The opportunity

PPO fee renegotiation is a **$5,200-per-project / contingency-fee consulting category** (PPO Dental Consulting starts at $5,200; Apex Reimbursement takes a cut of recovered revenue; PPO Profits, Veritas, eAssist all sell the same high-touch service). The work is genuinely valuable but structurally mismatched to most practices: it's expensive, episodic (every 12–24 months), opaque, and gated behind a sales call.

The incumbents are consultants, not software. The data vendors (Context4, FairHealth, FeePro) sell *raw UCR numbers* but don't tell you which plans you're leased into, don't prioritize your highest-leverage codes, and don't write the letter. Nobody packages **"discover your hidden plans → benchmark your real codes → draft the negotiation"** into a self-serve product a practice can run itself for under $300/mo.

The 10× is collapsing a $5,200 episodic engagement into a $199/mo subscription that runs continuously, flags when a plan drifts below the 80th percentile, and produces the renegotiation packet on demand. AI does the consultant's reading-and-drafting; the regulatory tailwind hands customers the legal lever to extract the participation report PlanPry then parses.

## 4. Target market

- **Primary customer:** Owner-dentist or practice/office manager at an independent or small-group practice, **1–8 chairs**, heavily PPO-dependent (50%+ of revenue from PPO patients), $700K–$3M annual collections. The person who already mutters about insurance write-offs every month.
- **Why they buy:** "I know I'm underpaid on crowns and SRP but I have no idea by how much, which plans, or how to even start — and the consultants want $5K and a sales call." It's a recurring revenue leak they *feel* but can't quantify.
- **Rough TAM reasoning:** ~155K dental practice locations in the US; the vast majority are 1–8 chairs and PPO-dependent. Even 0.5% penetration at $199/mo ≈ 775 practices ≈ $1.85M ARR. The renegotiation-consulting market already proves willingness to pay four-figure sums for this exact outcome.
- **Why now for them:** Colorado/NJ leasing reform gives them a fresh legal right to demand network-participation reports — and a reason to finally look. Post-COVID margin compression makes a 7–13% revenue lift the difference between hiring a hygienist or not.

## 5. Product sketch (MVP)

- Upload current fee schedules (PDF/spreadsheet) + a one-time export of top procedures from the practice management system.
- **Leased-plan finder:** parse the practice's plan list and the participation report (now obtainable by law in reform states) to surface every umbrella/TPA the practice is silently routed through, with the rate each pays.
- **Code-level benchmark:** rank the top 25 CDT codes by revenue impact and show each against the regional UCR 80th/90th percentile — "you're at the 52nd percentile on D2740, $214 vs $289 regional."
- **Leverage score per payer:** which plans are worth fighting, which to drop, which to leave alone.
- **Auto-drafted negotiation packet:** a payer-specific letter with the data, the asks, and the business justification — ready to send, editable.
- **Drift monitor:** re-checks quarterly and alerts when a plan slips below threshold or a new leased relationship appears.
- **Renegotiation calendar:** tracks each payer's 12–24-month re-open window so practices stop missing the negotiation cycle.

## 6. AI angle — what's load-bearing

Remove the AI and this is back to a $5,200 consultant. AI does three jobs no rules engine can: (1) reads heterogeneous, ugly fee-schedule and EOB PDFs and normalizes them to CDT codes; (2) reasons over the umbrella/TPA tangle to infer *how* a practice is in-network with each payer (direct vs leased) from fragmentary documents; (3) drafts a persuasive, payer-specific negotiation letter grounded in the benchmark numbers. The benchmark math is deterministic; the document-understanding and the drafting — the expensive human parts — are the AI. That's load-bearing, not decorative.

## 7. Localization angle (if any)

N/A — this is a US-only play by design. UCR data, CDT coding, PPO/TPA structure, and the state-level leasing reforms (Colorado, NJ) are US-specific. The wedge *is* the US regulatory and payer structure; there's no meaningful international cut. Pricing tiers can flex for solo vs multi-location, but geography isn't the lever here — payer-structure depth is.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $199/mo per location (solo/independent), $399/mo for multi-location/small-group with consolidated reporting. Optional one-time "deep audit + first packet" onboarding at $499 to anchor value and fund CAC.
- **ACV:** ~$2,400/location/year base; ~$3,000 blended with onboarding and multi-location mix.
- **Rough math to $1M ARR:** ~420 locations × $199/mo × 12 ≈ $1.0M. Entirely reachable inside the independent-practice segment.
- **Rough math to $5M ARR:** ~1,700 locations, or fewer if DSOs (10–100-location groups) adopt at $399+/location — a 40-location DSO is a $190K+ ACV account. Add a credentialing/participation-report module and ACV expands further.
- **Expansion path:** start with fee benchmarking → add drift monitoring → add credentialing & participation-report automation → sell up into small DSOs who manage dozens of fee schedules and feel this pain at scale.

## 9. Go-to-market wedge — first 100 customers

- **Dental CPA / consultant referral loop:** dental-specific CPAs and practice-management consultants advise hundreds of owner-dentists and currently have no software to hand them for this. Sign 5–10 as affiliates; each refers a handful of clients. Warm, high-trust intro to the exact buyer.
- **Reform-state cold outreach (timely hook):** Colorado and NJ practices now have a legal right to a network-participation report. Pull the state dental-board licensee lists, email a free "Are you leased into plans you never agreed to? Find out under the new law" teardown of one of their public fee codes. The regulation is the opener.
- **Dental Facebook groups & study clubs:** "Dental Practice Owners," "Dentaltown" forums, and local study clubs are where owners vent about insurance write-offs daily. Post a free benchmark of three common codes by metro; the comments are the lead list.
- **Free single-code benchmark as lead magnet:** a landing page where a dentist enters their fee for D2740 + ZIP and instantly sees their percentile. The gap is the pitch; the paywall is the other 24 codes and the leased-plan map.
- **State/local dental association webinars:** associations need member-value content on the new leasing laws. Run the educational session; PlanPry is the tool that operationalizes what you just taught.

## 10. Build complexity — justification

Medium. Off-the-shelf: LLM document parsing, a licensed UCR data feed, standard web stack, Stripe billing. Custom work is the messy middle — normalizing wildly inconsistent fee-schedule and participation-report formats to clean CDT-coded data, and encoding the leased-plan/TPA inference logic well enough to trust. No PHI is strictly required (fee schedules and aggregate code volumes aren't patient data), which sidesteps the heaviest HIPAA burden, though handling practice data still demands a BAA-grade posture. A focused pair ships a credible v1 in ~10–14 weeks; the data-normalization quality is the thing that takes the back half.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Fee benchmarking and negotiation support are legal; reform laws *encourage* transparency. Avoid giving regulated legal/billing-compliance advice. |
| Ethical — no harm / dark patterns | ✅ | Helps practices recover fair reimbursement; transparent, no patient-facing manipulation. |
| Market exists (evidence above) | ✅ | Multiple paid consultancies, $5,200+ price points, documented 7–13% lifts. |
| 1–5 person team can build this | ✅ | Pair + licensed data feed; ~10–14 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Main cost is the UCR data license + dev time; well under $50K. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, recurring, quantified revenue leak; buyers already pay $5K to fix it. Not quite hair-on-fire (it's chronic, not acute) so 16 not 19. |
| Demand evidence | 15 | 12/15 | Whole consulting category exists with public pricing and outcome claims; multiple firms. Slightly short of top band — no direct evidence a *self-serve* version converts yet. |
| Build feasibility | 15 | 11/15 | Document normalization and leased-plan inference are non-trivial; data license is buyable. Solid Medium. |
| Distribution clarity | 15 | 12/15 | Named channels (dental CPAs, reform-state licensee lists, owner groups) with a timely regulatory hook. Referral loop is warm. |
| Revenue mechanics | 15 | 12/15 | Pricing well below incumbent consultants, clear ACV, believable path to $1M. Churn after first win is the open question. |
| Time to first revenue | 10 | 7/10 | Cold outreach + onboarding fee can produce revenue in 6–10 weeks; not instant self-serve. |
| Defensibility | 10 | 5/10 | Execution + data-license + accumulating fee-schedule benchmark dataset. Copyable by another consultant-turned-SaaS; the proprietary benchmark corpus compounds over time. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

Needs someone who understands dental insurance mechanics (or a co-founder/advisor who does — ex-dental-billing or PPO-consultant background). Distribution is relationship-led (CPAs, associations), so a sales-capable founder matters more than a pure technologist.

### Key assumptions to validate (3–5)

1. **Assumption:** Owner-dentists/office managers will trust a self-serve tool's benchmark and letter enough to act, instead of hiring a consultant. **How to test:** Run the free single-code benchmark on 200 reform-state practices; measure how many request the full report and how many actually send a packet.
2. **Assumption:** A clean UCR data license is affordable enough to keep gross margin healthy at $199/mo. **How to test:** Get quotes from Context4 / FairHealth / FeePro; model COGS at 100 and 1,000 customers.
3. **Assumption:** Leased-plan inference from real participation reports is accurate enough to be trusted (a wrong "you're leased into X" is reputationally fatal). **How to test:** Parse 25 real participation reports against ground truth from cooperating practices; target >90% precision before launch.
4. **Assumption:** Retention survives the "I won, now what?" moment after the first renegotiation. **How to test:** Frame value as the *continuous drift monitor + 12–24-month re-open calendar*, and measure month-9 retention in a pilot cohort.

### Risk flags

1. **Defensibility / commoditization:** A competing consultant could wrap the same data feed in software. Mitigation: accumulate a proprietary benchmark corpus and own the dental-CPA referral channel early.
2. **Platform/data dependency:** Reliant on a third-party UCR data license; a price hike or loss of access dents margin. Mitigation: dual-source the data and build a proprietary fee corpus from customer uploads.
3. **Regulatory scope:** Crossing from "benchmarking/negotiation support" into anything resembling legal advice or unauthorized billing-compliance counsel invites trouble. Mitigation: stay strictly on data + drafting; route legal questions to partners.
4. **Retention cliff:** One-and-done renegotiation risks churn after the first win. Mitigation: lean the product toward monitoring, not a one-time audit.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Dental-billing/PPO-consulting domain expert + a technical co-founder
Time to revenue:        6–10 weeks (cold outreach + paid onboarding audit)
Capital to launch:      $15–35K (UCR data license + ~3 months dev)
Top 3 assumptions to validate first:
  1. Self-serve trust — do dentists act on a software-generated benchmark + packet? (free single-code benchmark on 200 reform-state practices)
  2. Leased-plan inference accuracy >90% precision on 25 real participation reports
  3. Data-license COGS keeps gross margin healthy at $199/mo (quotes from Context4/FairHealth/FeePro)
Kill criteria:
  - Abandon if <8% of practices shown a quantified underpayment request the full report
  - Abandon if a usable UCR data license can't be secured under terms that keep gross margin >70% at $199/mo
  - Abandon if leased-plan inference can't exceed 90% precision (false "you're leased in X" is fatal to trust)
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** License or trial a UCR data sample for 2–3 metros. Build a one-page "free benchmark" that takes a dentist's fee for D2740 + ZIP and returns their percentile and the dollar gap.
- **Day 3–4:** Pull Colorado + NJ dental-board licensee lists. Email 150 practices the regulatory hook ("the new law lets you demand your network-participation report — here's what your D2740 fee says about how underpaid you are"). Offer the full 25-code report + leased-plan map for a $99 founder's-rate audit.
- **Day 5:** Decide go/no-go on a falsifiable bar: **≥8% click through to the report and ≥3 paid $99 audits booked** from 150 emails. Below that, the self-serve thesis is weak and this stays a consulting business, not a SaaS.

The result is falsifiable: either reform-state dentists pay for a self-serve benchmark when handed the regulatory lever, or they don't.
