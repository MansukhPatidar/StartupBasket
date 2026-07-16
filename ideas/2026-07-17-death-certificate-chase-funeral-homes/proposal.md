---
title: "CertChase — signature expediter for funeral homes"
slug: death-certificate-chase-funeral-homes
date: 2026-07-17
category: ProfessionalServices / US — Independent Funeral Homes (death certificate certification and family status)
complexity: Medium
score: 72
verdict: GO
confidence: Medium
oneLiner: "Finds the doctor who must sign, fires the nudge on time, and shows families where their certificate stands."
tags:
  vertical: ProfessionalServices
  model: SaaS
  geography: US
  secondary: [Deathcare, Workflow-automation, SMB, Multi-party-coordination, AI-agent]
axes:
  problem: 15
  demand: 10
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# CertChase

## 1. One-liner

Finds the doctor who must sign, fires the nudge on time, and shows families where their certificate stands.

## 2. Trend signal — why now?

Every US death produces a death certificate, and every death certificate needs a medical certification — a physician, hospice medical director, PA/NP (state-dependent), or medical examiner signing cause of death, usually inside a statutory window (72 hours in several states). The funeral director owns the non-medical half and is the party the family blames when the certified copies don't arrive. The chase — figuring out who is authorized to sign in this jurisdiction, getting the fax attestation to them, following up until they sign, catching amendments — is pure phone-and-fax labor today, and it's getting worse, not better:

- **The signing bottleneck is now a legislative issue.** New York's S3363 (2025 session) exists specifically because hospice physicians refuse or fail to sign death certificates, funeral directors "seek out other physicians who may lack proper authorization, which further slows down the process and directly affects families." When a state senate has to legislate who chases the signature, the workflow is broken.
- **The infrastructure is fragile and the labor cost is visible.** When Florida's DOH e-vitals portal went down after a cyberattack, funeral homes reported "a consistent and growing backlog as they chase down medical examiners and doctors to sign certificates via email," and that it now takes "three people to do what one person used to handle."
- **Families feel it directly and expensively.** Death certificate delays stall life-insurance payouts, bank account access, and probate. Common causes are precisely the chase-able ones: "the clinician not completing medical cause-of-death certification… errors requiring formal corrections before certified copies can be issued."
- **AI just made the chase automatable.** Reading a case file to identify the certifier, resolving which of 50+ state/county rulebooks applies (EDRS vs. fax attestation, ME jurisdiction triggers, who may sign for hospice deaths), drafting the correctly-worded nudge, and predicting which cases will stall — that's a document-understanding-plus-rules problem that current models handle off the shelf. Two years ago this product was a call center.

Provenance:
  - Signal 1: NY Senate bill S3363 — hospice physicians reluctant to sign death certificates; funeral directors' workarounds slow the process and "directly affect families" — https://www.nysenate.gov/legislation/bills/2025/S3363 — 2025 session, observed 2026-07-17
  - Signal 2: Florida funeral homes describe chasing MEs and doctors for signatures amid DOH portal outage; "three people to do what one person used to handle" — https://www.wptv.com/news/region-c-palm-beach-county/royal-palm-beach/funeral-homes-frustrated-following-doh-cyberattack-delaying-families-from-getting-birth-and-death-certificates — observed 2026-07-17
  - Signal 3: Industry documentation of the fax-attestation certification loop and delay causes (uncompleted medical certification, ME jurisdiction, correction cycles) — https://www.ncbi.nlm.nih.gov/books/NBK526015/ and https://funeral.com/blogs/the-journal/why-death-certificates-get-delayed-and-how-to-prevent-it — observed 2026-07-17
  - Signal 4 (economic): ~19,100 US funeral establishments, 72% independent, 113 cases/yr average, already paying $245–795/mo for case-management software (funeralOne, Frontrunner, Halcyon) — https://www.nfda.org/your-business/business-resources/research/ and https://pulserevops.com/knowledge/gp0336 — observed 2026-07-17
  Category: Underserved niche

## 3. The opportunity

The incumbents — Passare, Osiris, funeralOne, Frontrunner — are case-management systems: arrangement records, contracts, obituaries, family portals. The certification chase lives *outside* all of them, in phone calls, faxes to physician offices, and logins to the state EDRS. Capterra reviews of the incumbents complain about weak reporting and back-office functionality; none of them owns the question every funeral home answers ten times a day: *"where is the death certificate for the Nguyen case, and whose desk is it stuck on?"*

The gap is a chase layer, not another case manager. Track every pending certificate as a pipeline: pronounced → certifier identified → attestation sent → signed → filed → certified copies ordered → in the family's hands. At each stage, know the jurisdiction's rules (who may sign, what the filing deadline is, what triggers ME jurisdiction), send the nudge that moves it, and escalate before the statutory clock runs out. Give the family a status link so they stop calling the funeral home, and the funeral home stops calling the doctor's front desk five times.

Nobody focused does this. It's too unglamorous for VC-scale players, too operational for the obituary-and-e-commerce crowd, and it was genuinely impossible to productize before AI could read a case packet and a state vital-records manual in the same breath.

## 4. Target market

- **Primary customer:** Owner or managing funeral director at an independent US funeral home, 75–300 calls/year, 2–8 staff. ~72% of the 19,100 US establishments are independent — roughly 13,700 homes.
- **Why they buy:** Every case has a certificate, every third certificate stalls, and the person chasing it is a licensed director billing their time at arranger rates — or the owner themself at 7pm. Meanwhile the widow calls daily because the insurer won't pay without a certified copy. It's the highest-friction, lowest-margin hour of their week, on every single case.
- **Rough TAM reasoning:** 13,700 independent homes × $149–249/mo ≈ $24–41M ARR ceiling for the core product. Small, defensible, perfect bootstrap territory. Expansion into hospices (the other side of the same chase) and county ME offices multiplies it later.
- **Why now for them:** Staffing is the industry's #1 complaint; the FL outage showed how much invisible labor sits in this loop; hospice-physician signing failures are worsening (hence NY legislating); and cremation-rate growth means more low-revenue cases where an hour of chase labor actually breaks the margin.

## 5. Product sketch (MVP)

- Case intake: forward the first-call sheet or case PDF; CertChase extracts decedent, place/manner of death, attending physician/hospice, and county.
- Certifier resolution: identifies who is authorized and obligated to sign in that state/county — attending physician, hospice medical director (where allowed), coroner/ME — and flags ME-jurisdiction triggers before you fax the wrong office.
- Deadline clock: statutory filing window per state, visible countdown per case, escalation alerts before breach.
- Auto-chase: sends the fax attestation / email nudge / portal reminder on a cadence, in registrar-appropriate wording; logs every touch so the file shows diligence.
- Stall prediction: flags cases likely to hang (unresponsive certifier history, pending toxicology, amendment loops) so a human calls early instead of late.
- Family status page: a link showing exactly where the certificate is and what happens next — kills the daily "any news?" calls.
- Certified-copy tracker: how many copies ordered, from which county, delivered when.
- Weekly pipeline digest: every open certificate, days pending, whose desk it's on.

## 6. AI angle — what's load-bearing

Three places, all load-bearing. First, extraction: reading heterogeneous first-call sheets, hospital face sheets, and hospice paperwork to build the case record without re-keying. Second, jurisdiction resolution: mapping a specific death onto the correct rulebook — 50 states plus county registrars and ME offices, each with its own EDRS behavior, authorized-signer list, and deadline — is a retrieval-and-reasoning task no static form can encode and no small team could maintain by hand. Third, the chase itself: drafting nudges that a physician's front desk acts on, adjusting tone and channel by recipient, and predicting stalls from case features. Strip the AI out and you're left with a to-do list, which is what funeral homes already have and already fail with.

## 7. Localization angle (if any)

N/A — this is a US play. The "localization" here is intra-US: 50 states' vital-records regimes are the moat, not a foreign market. UK/AU/CA have analogous registrar chases and are natural second acts, but each is a separate rules build; don't touch them before $1M ARR.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo (to 10 cases/mo) and $249/mo (unlimited, multi-location). No per-case fees — incumbents nickel-and-dime per case and directors hate it.
- **ACV:** ~$2,200 blended.
- **Rough math to $1M ARR:** ~460 homes at blended $180/mo. That's 3.4% of independent homes.
- **Rough math to $5M ARR:** ~1,900 homes plus a hospice-side product (hospices are getting legislated at over this exact failure; sell them the other end of the chase at $299/mo) and regional consolidator accounts (multi-rooftop groups at $199/rooftop).
- **Expansion path:** copies tracker → family-communication add-on; hospice-side certification desk; ME-office queue visibility; per-state compliance content that makes churn feel dangerous.

## 9. Go-to-market wedge — first 100 customers

- Every state licenses funeral establishments and publishes the register. Pull ~5,000 independent homes across the 10 states with the tightest filing windows and worst EDRS reputations (FL, NY, CA, TX, PA among them). Owner names are on the license.
- Email + call script keyed to the pain, not the product: "How many hours did your staff spend last month calling physicians' offices about unsigned certificates?" Offer a 2-week free pipeline audit: they forward their pending cases, we show the stall map. Expect 3–5% to take the audit from a warm-ish list; convert half of audits — 100 customers needs ~7,000 contacts. Grinding but mechanical.
- The FL wedge specifically: homes that lived through the DOH outage backlog are pre-sold on the problem. Reference the WPTV coverage in the outreach.
- NFDA International Convention (Oct) and state association meetings (independent homes over-index on attendance) — a booth plus a "state filing-deadline cheat sheet" giveaway that doubles as lead capture.
- Two deathcare trade publications (Connecting Directors, American Funeral Director) take vendor contributions; a data piece — "we tracked 1,000 certificates; here's where they stall by state" — is earned media the incumbents can't write.

## 10. Build complexity — justification

Medium. Off the shelf: document extraction (vision LLMs), fax/email dispatch (Telnyx/Documo APIs), standard web stack. Custom work: the 50-state certifier/deadline/ME-trigger rules base — genuinely laborious, maybe 6–8 weeks of research and encoding for the first 10 states, then incremental — plus stall-prediction heuristics that start as simple rules. V1 covering 10 states in 12–14 weeks for a two-person team. No EDRS integration attempted (states won't grant it); the product wraps the human loop instead, which is exactly where the pain is.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Coordination software; funeral home remains the filer. No vital-records authority claimed. HIPAA applies to certifier communications — BAA-ready infra from day one. |
| Ethical — no harm / dark patterns | ✅ | Reduces grieving families' wait; nudges licensed professionals to meet existing legal duties. |
| Market exists (evidence above) | ✅ | Legislated pain (NY S3363), documented labor cost (FL backlog), incumbents charging $245–795/mo prove wallet. |
| 1–5 person team can build this | ✅ | Two people, 12–14 weeks to 10-state v1. |
| Launchable with <$50K / ₹40L | ✅ | API costs trivial; biggest spend is the state-rules research and one conference booth. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Felt on every case, statutory clocks, family fury — but homes have a working (expensive) workaround: staff phone time. Not hair-on-fire for all, hair-on-fire for the understaffed majority. |
| Demand evidence | 15 | 10/15 | Legislation, news coverage, and adjacent wallet are strong; but no direct evidence anyone has tried to buy *this exact tool* — the slice is unproven as a purchase category. |
| Build feasibility | 15 | 11/15 | Standard stack + honest grind on the 50-state rules base. 12–14 weeks to credible v1; not a 6-week job. |
| Distribution clarity | 15 | 12/15 | Named, licensed, public list of every buyer; owner-reachable; conferences that independents actually attend. Conversion math is a guess, channel is not. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked under incumbent spend; 460 customers to $1M is credible for a 13,700-home universe; churn risk if chase volume is low at small homes. |
| Time to first revenue | 10 | 7/10 | Direct SMB sale, 4–8 week cycle post-launch; pilot-to-paid needs one full stalled certificate rescued to convert. |
| Defensibility | 10 | 5/10 | The rules base and chase-log data compound, and funeral homes churn software rarely — but a funded incumbent could bolt this on. Execution moat plus niche brand. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy` — the rules base and extraction need engineering discipline; the market only moves on phone calls and trade-show handshakes. A deathcare-industry advisor (retired director) is near-mandatory for credibility.

### Key assumptions to validate (3–5)

1. **Assumption:** Directors will pay $149–249/mo for the chase alone, separate from their case-management system. **How to test:** 30 calls to independent homes in FL/NY; ask what they'd pay to never make another certifier call; count concrete yeses at a named price.
2. **Assumption:** Physicians' offices respond meaningfully better to structured, well-timed nudges than to funeral-home phone calls. **How to test:** Run 20 real stalled certificates through a manual concierge pilot; measure days-to-signature vs. the home's baseline.
3. **Assumption:** The certifier/deadline rules for the top 10 states can be encoded and kept current by a small team. **How to test:** Build 3 states' rulebooks in 2 weeks; have a licensed director in each state audit them for correctness.
4. **Assumption:** The family status page reduces inbound calls enough that homes see it as a second product, not a liability. **How to test:** Pilot with 5 homes; count "any news?" calls per case before/after.

### Risk flags

1. **Platform/regime dependency:** State EDRS behavior and vital-records rules shift; a state modernizing its portal could shrink (or grow) the chase. Mitigation: the multi-party human loop — physicians, hospices, MEs — survives every portal redesign.
2. **Incumbent response:** Passare/Osiris could ship a "certificate tracker" checkbox feature. Their track record (weak back-office, per Capterra reviews) suggests it would be shallow, but it could freeze deals.
3. **HIPAA/PHI handling:** Certifier communications contain cause-of-death PHI. Not a launch blocker, but sloppy handling is an existential mistake — BAA, encryption, minimal retention from day one.
4. **Emotional-market sales cycle:** Deathcare buyers are conservative and relationship-driven; a pure cold-email motion underperforms the math above without association endorsements.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + deathcare-industry advisor; comfort with unglamorous phone-heavy sales
Time to revenue:        10–16 weeks from build start (12–14 wk build, pilots pre-sold during build)
Capital to launch:      $15–25K (rules research, fax/telecom APIs, one NFDA booth)
Top 3 assumptions to validate first:
  1. Willingness to pay for chase-only tool — 30 director calls in FL/NY, count priced yeses
  2. Nudges beat phone calls — manual concierge pilot on 20 stalled certificates, measure days-to-signature
  3. Rules base is maintainable — encode 3 states in 2 weeks, director-audited
Kill criteria:
  - Abandon if <10% of 50 director calls express willingness to pay ≥$99/mo
  - Abandon if the concierge pilot can't beat baseline days-to-signature by ≥30% on 20 cases
  - Abandon if any two of the first five pilot homes churn citing "our case manager should do this"
```

## 15. Next step — 1-week validation sprint

- Day 1–2: Pull FL + NY funeral establishment licenses; build a 300-home call list with owner names. Draft the one-question opener ("hours spent chasing signatures last month?").
- Day 3–4: 50 calls. Log: hours reported, current workaround, reaction to $149/mo, willingness to hand over 3 live stalled cases for a free manual rescue.
- Day 5: Decide go / no-go: **go if ≥5 homes commit live stalled cases to a concierge pilot AND ≥10% of reached directors say yes at $99–149/mo unprompted-price test.** Fewer than that, the pain is real but the wallet isn't — write it up as a PASS and move on.
