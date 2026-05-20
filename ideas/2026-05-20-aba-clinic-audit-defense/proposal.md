---
title: "ClawbackShield — audit-defense layer for ABA clinics"
slug: aba-clinic-audit-defense
date: 2026-05-20
category: HealthTech / US ABA & Autism-Therapy Providers (1–3 BCBA, 5–30 RBT)
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: "Hardens every ABA session note in real time and assembles the audit packet the day the recoupment letter lands."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, AI-agent, SMB, Medicaid, audit-defense, behavioral-health]
axes:
  problem: 18
  demand: 13
  build: 10
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 7
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# ClawbackShield

## 1. One-liner

Hardens every ABA session note in real time and assembles the audit packet the day the recoupment letter lands.

## 2. Trend signal — why now?

Medicaid is mid-pivot from "pay-and-chase" to "audit-and-claw" on Applied Behavior Analysis (ABA) therapy. Spend exploded — North Carolina's ABA Medicaid spend went from $122M in fiscal 2022 to a projected $639M in fiscal 2026 (+423%). HHS-OIG audits have surfaced massive overpayments: $285.2M in Colorado in 2022-2023, $599.8M nationally across recent state audits, $16.8M MassHealth clawback. Behavioral Health Business in May 2026 ran a piece titled "'Can I Survive Here?': Massachusetts Autism Therapy Providers Rattled by Contentious Medicaid Clawback Effort." NC's DHHS posted draft Clinical Coverage Policy 8F revisions on May 14, 2026 with comments due June 14 — tighter telehealth rules, stricter supervision ratios, more documentation hurdles.

Mechanically: payers run post-payment utilization review 6-24 months after service, flag anomalies (supervision ratio drift, 97153 volume vs 97155, place-of-service mismatch), pull a record sample, extrapolate the failure rate across the entire audit window, and issue a recoupment demand payable in 30-60 days. Appeals rarely recover more than 20-40% without pre-existing documentation. The only defense is documentation that was right *before* the audit letter arrived.

Provenance:
  - Signal 1: HHS-OIG identified $285.2M in improper/potentially-improper ABA payments in Colorado alone (2022-2023); $599.8M nationally across recent state audits — https://www.statnews.com/2026/03/02/hhs-medicaid-audit-finds-autism-therapy-overpayment-colorado/ — 2026-03-02
  - Signal 2: BHB "Can I Survive Here?" piece on MA providers facing contentious MassHealth clawback effort; $16.8M overpayment estimate — https://bhbusiness.com/2026/05/01/can-i-survive-here-massachusetts-autism-therapy-providers-rattled-by-contentious-medicaid-clawback-effort/ — 2026-05-01
  - Signal 3: NC DHHS proposed Clinical Coverage Policy 8F revisions (May 14, 2026), tightening telehealth & supervision documentation; comment window to 2026-06-14 — https://www.autismsociety-nc.org/policy-legislative-update-may-19-2026-why-aba-treatment-is-in-the-news-in-north-carolina/ — 2026-05-19
  Category: Regulatory arbitrage

## 3. The opportunity

CentralReach is the 800-pound EHR — broad, expensive, designed for enterprise multi-state operators. Rethink has an AI medical-necessity assessment add-on. Neither is a *focused, before-the-letter-lands* audit-defense product, and both are slow to ship per-state policy changes. The 1-3 BCBA / 5-30 RBT clinics that account for most of the long tail run on CR Essentials, Noteable, Theralytics, or a spreadsheet/paper hybrid. They feel the same audit risk as the big chains but have no compliance officer, no audit-readiness consultant on retainer, and no time to read 80-page Clinical Coverage Policies as they change.

The wedge is narrow and obvious: a single overlay that does three things only — (1) catches every session note as it's written and flags the specific gaps that get clinics clawed back (vague behavior descriptions, missing medical-necessity language, supervision-ratio drift, missing parent signatures, place-of-service mismatch), (2) keeps an immutable, time-stamped trail of every fix, and (3) when a payer audit letter arrives, builds the full audit-defense packet (notes, supervision logs, signatures, auth letters, credentialing copies) for any date range in one click. Sold as defensive insurance, not yet-another-PMS.

## 4. Target market

- **Primary customer:** Owner-BCBA of a US ABA clinic with 1-3 BCBAs and 5-30 RBTs, $500K-$5M annual Medicaid revenue, serving 30-200 active clients. Concentrated initially in states where the clawback wave is loudest: MA, CO, NC, TX, NY, MI, OH, IN. Mostly already on CentralReach, CR Essentials, Theralytics, or Noteable; some still on paper + Google Drive.
- **Why they buy:** They've either just been audited, watched a peer clinic eat a six-figure recoupment, or seen the BHB / state-Medicaid coverage and now lose sleep. Their RBTs write rushed notes between sessions, their BCBA co-signs in a 24-72h batch, and they have no way to know — *before* the audit letter — whether last quarter's notes will hold up. Recoupment demands routinely run $50K–$500K for clinics this size and are payable in 30-60 days.
- **Rough TAM reasoning:** ~10,000 ABA provider organizations bill US Medicaid for autism services. Strip out the 50-100 enterprise multi-state operators and the smallest single-BCBA shops — the addressable middle is ~4,000-6,000 clinics. At $500/mo average ACV, that's a $24-36M ARR ceiling for a focused product before geographic or vertical expansion.
- **Why now for them:** The audits started landing in 2024-2025 but the *industry-wide* recognition that "this is going to happen to me" became unavoidable in Q1-Q2 2026 with Colorado, Massachusetts, and now North Carolina. Provider Reddit threads and state ABA association calls are full of "what do I do if I get the letter."

## 5. Product sketch (MVP)

- Real-time note checker: as an RBT writes a session note (in our overlay or via Zapier-style pull from CentralReach / Theralytics), AI scores it against a rubric derived from BACB standards, the relevant state Medicaid Clinical Coverage Policy, and audit-letter precedent. Returns red/yellow/green plus specific fix prompts: "add the antecedent for the second behavior episode," "tie this to goal #3.2," "specify the supervision activity for the 12 min of 97155."
- Supervision-ratio guard: tracks 97153 vs 97155 ratios per client per week against the authorization letter; alerts the BCBA when a client is drifting outside their authorized ratio *that week*, not at quarter-end.
- Parent-signature trail: each treatment plan, monthly summary, and parent training session captures a time-stamped e-signature with IP/photo proof; missing signatures auto-trigger a parent text/email.
- Audit-packet builder: when the clinic gets a payer audit letter, owner selects date range + client list + auditor's request scope. Output: a single PDF bundle of session notes, supervision logs, signed plans, credentialing copies, and auth letters, indexed by date and CPT code, plus a one-page "documentation completeness score" summary cover letter.
- State-policy diff feed: a one-screen feed of "what changed in your state's Clinical Coverage Policy this month and how it affects what you should be documenting." Driven by us watching the gazettes; clinic just reads the diff.
- Audit-letter intake: clinic uploads the payer letter, we extract the date range, sample size, and asks, and pre-populate the packet builder.

## 6. AI angle — what's load-bearing

The note-quality scorer is the load-bearing AI piece. Without it, this is just another forms product. The scoring model has to do three things at once: (1) read free-text RBT prose and detect whether it actually documents an antecedent → behavior → consequence chain or just narrates the session ("we played with cars"), (2) check whether the prose supports the CPT code being billed and the medical necessity of *this* dosage of *this* service at *this* time, and (3) check it against the specific state's current Clinical Coverage Policy language (which differs across MA, CO, NC, TX, NY etc.). LLMs with good retrieval over state-specific policy corpora can do this today; nothing else can do it at $0.001/note. Speech-to-text on the RBT phone for in-session capture is the secondary AI piece. Without AI this product collapses back into a manual checklist that nobody fills in.

## 7. Localization angle (if any)

N/A — this is a US-only play. Medicaid is a state-by-state regulatory thicket and the value is *inside* the US healthcare patchwork, not a translation of it. Within the US there is real per-state customization: the state-policy diff feed and the note-quality rubric must be tuned per state. Launch in 3-4 highest-pain states first (MA, NC, CO, TX), expand in waves.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered per clinic: Starter $399/mo (1 BCBA, up to 5 RBTs), Standard $799/mo (1-3 BCBA, up to 15 RBTs), Pro $1,499/mo (3+ BCBA, up to 30 RBTs). Add-on $1,500-$3,000 one-time fee per actual audit response packet over a quota.
- **ACV:** ~$9,600/year blended.
- **Rough math to $1M ARR:** 105 paying clinics at $800/mo average = $1.0M ARR. Realistic in 12-18 months from launch given the panic level in MA + NC alone.
- **Rough math to $5M ARR:** ~520 clinics × $800/mo blended. Requires expansion across 8-10 states and the Pro tier becoming the majority. Tight but credible if a high-profile audit defense win drives word-of-mouth.
- **Expansion path:** Per-RBT seat upgrades as clinic grows; audit-response packet add-ons; an "audit-defense legal partner" referral revenue share with healthcare-law firms specializing in Medicaid recoupment appeals; eventually a BCBA-supervision-training module that overlaps with BACB CEU requirements.

## 9. Go-to-market wedge — first 100 customers

- Scrape the state Medicaid provider directories for ABA / autism-services NPIs in MA, NC, CO, TX (publicly available). Filter to organizations with 5-30 RBTs via NPI roster cross-reference and LinkedIn employee count. ~3,000 candidates in those four states alone.
- Cold outreach by personalized Loom — owner-BCBA's name + the specific clawback news in their state + a 90-second walkthrough of their actual last-published Clinical Coverage Policy diff. Target 4% reply rate, 25% reply-to-trial conversion, 30% trial-to-paid.
- Buy a booth at the BACB-adjacent state autism-services conferences (CASP National Conference, state ABA association annual meetings — MABA, NCABA, etc.) — these cost $2-5K/booth, draw exactly the owner-BCBA buyer, and audit-defense fits a 20-minute sponsored breakout perfectly.
- Partner referral with the 5-10 healthcare-law firms that already advertise ABA Medicaid audit defense (BillingParadise, Benesch, Cube Therapy Billing); offer them a 20% referral fee and free seats for their clients under active audit. Their clients are panicking and pre-qualified.
- Content angle: publish a free monthly "ABA Medicaid Audit Watch" newsletter — what audits landed last month, in which states, what triggered them, what documentation gaps the auditor flagged. This is the kind of intelligence owner-BCBAs already pay $200/mo to compliance newsletters for.

## 10. Build complexity — justification

Medium. The core MVP is a Postgres + Next.js + Anthropic API stack with state-policy retrieval (vector store over CMS + state Clinical Coverage Policies), Stripe billing, Twilio for parent-signature texts, and S3-encrypted note storage. All BAA-friendly with AWS + Anthropic. The hard parts are (1) the per-state policy corpus curation and keeping it current — this is ongoing labor, not a one-time build, (2) HIPAA controls (encryption at rest/in transit, access logs, BAAs with every vendor, periodic risk assessment) which add 4-6 weeks of work but are well-trodden, and (3) integrations with CentralReach / Theralytics / Noteable for note pull — none of these have great public APIs, so v1 is a manual or browser-extension shim. A pair could ship a credible v1 in 14-18 weeks if one founder is the BCBA / ABA-clinic domain expert.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | HIPAA-covered, BAA-friendly stack; we sit as a Business Associate to the clinic. |
| Ethical — no harm / dark patterns | ✅ | Improves documentation quality for vulnerable population (autistic clients) and protects therapy continuity by keeping clinics solvent. |
| Market exists (evidence above) | ✅ | Active clawback wave, ~10K provider orgs, named incumbents already monetizing adjacent slices. |
| 1–5 person team can build this | ✅ | Pair (technical + BCBA domain) ships v1 in 14-18 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Cloud + AI costs are modest at <100 clinics; main spend is conference booths and HIPAA setup. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Existential. A single $200K recoupment kills a 5-RBT clinic. Owner-BCBAs are losing sleep. |
| Demand evidence | 15 | 13/15 | Three independent recent signals (HHS-OIG CO, MA clawback, NC policy 8F) plus active provider-Reddit and state-association chatter. Adjacent paid products (BillingParadise, audit-readiness consultants at $2-10K/project) confirm willingness to pay. |
| Build feasibility | 15 | 10/15 | LLM + standard web stack, but HIPAA + per-state policy curation + integration shims add real work. Not a 6-week MVP. |
| Distribution clarity | 15 | 11/15 | Named NPI lists, named conferences, named referral law firms. Specific 4-state launch plan. Cold outreach to small clinics is medium-difficulty (BCBAs are time-poor). |
| Revenue mechanics | 15 | 12/15 | Clear ACV in line with comparable RCM/compliance products; willingness-to-pay benchmarked against $2-10K audit-readiness projects and $25-200K legal defense. |
| Time to first revenue | 10 | 7/10 | Realistic 6-10 weeks from v1 ship to first paid clinic given panic level; longer if HIPAA sign-off lags. |
| Defensibility | 10 | 7/10 | The state-policy corpus + audit-letter precedent dataset compounds over time; switching cost grows as a clinic accumulates 6+ months of hardened notes in our system. CentralReach is the real risk if they bolt on a focused audit module. |
| **Total** | **100** | **78/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy` — needs a co-founder who is, or works closely with, a practicing BCBA or ABA-clinic operator. Without that the note-quality rubric will not pass the first demo. The other founder should be technical with HIPAA/healthcare experience.

### Key assumptions to validate (3–5)

1. **Assumption:** Owner-BCBAs at 5-30 RBT clinics will pay $400-$1,500/mo for a focused audit-defense overlay even though they already pay CentralReach. **How to test:** 30 cold-outreach calls to MA + NC clinics in the next 14 days; specifically ask "if a product did only X, Y, Z and cost $X, would you trial it?" Target ≥40% verbal yes.
2. **Assumption:** Our note-quality scorer can reliably flag the gaps that actually drive recoupments (not just generic "be more specific"). **How to test:** Take 50 anonymized RBT notes from publicly available training corpora plus 5 anonymized real notes from a friendly clinic; score them, blind-compare against three independent BCBAs' audit assessments. Target ≥80% agreement on red flags.
3. **Assumption:** We can build a tolerable v1 integration shim with CentralReach / Theralytics / Noteable without official APIs. **How to test:** 5-day spike with a browser-extension or scheduled-export shim against a friendly clinic's CR Essentials instance. Target: pull yesterday's notes into our scorer without manual copy-paste.
4. **Assumption:** The state-policy diff feed alone (the simplest piece) is worth $99-199/mo on its own to clinics not ready for the full product. **How to test:** Sell the diff feed as a paid newsletter to 20 clinics for $149/mo; this also seeds the broader product audience.

### Risk flags

1. **Incumbent expansion risk:** CentralReach and Rethink could each ship a focused audit-defense module within 12-18 months. Mitigation: own the small-clinic segment they treat as low-priority, and own the audit-letter dataset they don't have.
2. **Regulatory whiplash:** ABA Medicaid coverage is being cut and reshaped state by state (NC 8F, hour caps, age limits, telehealth restrictions). If a major state slashes ABA coverage, that state's TAM evaporates overnight.
3. **HIPAA breach risk:** A single PHI exposure incident would be brand-ending. Requires real security investment from day 1, not bolt-on later.
4. **AI hallucination liability:** If our scorer tells a clinic "this note is fine" and the auditor disagrees, we get blamed. Need to frame output as advisory, never warranty; capture the BCBA's explicit override and sign-off.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + BCBA / ABA-clinic operator co-founder; healthcare/HIPAA experience strongly preferred
Time to revenue:        14-20 weeks (10-14 weeks build, 4-6 weeks first paid pilot)
Capital to launch:      $35-50K (HIPAA setup, conference booths, BAA-stack tooling, first 4-6 months of LLM inference)
Top 3 assumptions to validate first:
  1. WTP in target segment — 30 cold-outreach calls to MA+NC clinics, target ≥40% verbal yes
  2. Note-quality scorer agreement with BCBA audit assessment — blind-compare on 55 notes, target ≥80% agreement
  3. Integration shim feasibility — 5-day spike against a friendly CR Essentials instance, target zero manual copy-paste
Kill criteria:
  - Abandon if <20% of 30 cold-outreach calls express interest in a paid trial within 14 days
  - Abandon if CentralReach or Rethink ships a focused, small-clinic audit-defense product at <$300/mo before our v1 ships
  - Abandon if HIPAA + BAA setup costs blow past $30K before first paying customer
  - Abandon if note-quality scorer accuracy stalls below 70% agreement with BCBA assessment after 4 model iterations
```

## 15. Next step — 1-week validation sprint

- Day 1: Pull NPI lists for ABA providers in MA + NC; filter to 5-30 RBT clinics; build a 200-clinic outreach list with owner-BCBA name + state-specific audit-news hook.
- Day 2: Personalised Loom + email to 50 of those clinics. Pitch: "60-second product brief, would you trial at $X?"
- Day 3: Source 50 anonymised RBT session notes (training corpora + 2 friendly clinics under NDA); have 3 independent BCBAs score them for audit-readiness, in parallel.
- Day 4: Build the v0 note-quality scorer (single prompt + state-policy retrieval) and compare against the BCBA assessments.
- Day 5: Synthesize — go/no-go.
  - Go criteria: ≥10 of the 50 outreached clinics expressed paid-trial interest AND scorer agrees with BCBA judgment on ≥80% of notes.
  - No-go criteria: <5 paid-trial interest OR scorer agreement <60%.

The validation is falsifiable in both directions — we either see the demand and accuracy, or we don't.
