---
title: "CarrierProof — selection-defense ledger for freight brokers"
slug: freight-broker-carrier-selection-defense
date: 2026-06-18
category: Logistics / US Small & Mid-Size Freight Brokers & 3PLs
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Snapshots FMCSA, insurance and fraud checks at booking and builds a court-defensible carrier-selection record for every load."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [Compliance-driven, AI-agent, SMB, Regulatory-arbitrage, Litigation-defense]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CarrierProof — selection-defense ledger for freight brokers

## 1. One-liner

Snapshots FMCSA, insurance and fraud checks at booking and builds a court-defensible carrier-selection record for every load.

## 2. Trend signal — why now?

On **May 14, 2026**, the Supreme Court ruled **unanimously** in *Montgomery v. Caribe Transport II, LLC* that state-law negligent-hiring claims against freight brokers are **not** preempted by the FAAAA. Translation: the single biggest legal shield brokers leaned on for a decade is gone. A broker who books a load with a carrier that later kills someone can now be sued in state court for "negligent selection" — and the case survives the pleading stage, which means discovery, which means a plaintiff's attorney subpoenas your file.

The legal industry reacted instantly and loudly:
- Every major transportation defense firm (Benesch, Clausen Miller, Lewis Brisbois, Cozen O'Connor, McCarter & English) published "what brokers must do now" alerts within three weeks.
- The uniform advice: **document your carrier-selection process in real time** — which data sources you checked (FMCSA SAFER, SMS BASIC scores, crash rates, OOS rates, insurance, authority), the safety metrics you weighed, and the contemporaneous rationale for picking that carrier.
- FreightWaves: *"The Supreme Court just told every freight broker that they can be sued."* And separately: the insurance gap is now real — many small brokers carry only a $75K surety bond that **does not respond to tort claims** and no contingent liability policy at all.

The pain is acute precisely because the artifact courts now demand — a timestamped, per-load record proving reasonable care — is exactly what brokers **don't** have. Intelligent Audit's post-ruling analysis names the gap directly: brokers struggle with *"fragmented data, informal processes, and inconsistent exception handling"* scattered across TMS, email, and screenshots.

Provenance:
  - Signal 1 (Demand): SCOTUS *Montgomery v. Caribe Transport II* strips broker preemption defense; defense firms uniformly tell brokers to produce contemporaneous, documented carrier-selection records per load — https://www.supremecourt.gov/opinions/25pdf/24-1238_1b7d.pdf , https://www.beneschlaw.com/insight/one-battle-after-another-freight-brokers-in-a-post-montgomery-world/ — 2026-05-14
  - Signal 2 (Feasibility): FMCSA safety/authority/insurance data is API-accessible (SAFER, QCMobile, L&I), insurance-COI OCR is commodity, and LLMs can assemble a structured rationale narrative per load in seconds — automated carrier onboarding flows already approve in <4 hrs vs 2–5 days manual — https://carrierowl.com/blog/carrier-packet-checklist , https://onramp.us/solutions/carrier-onboarding — 2026
  - Signal 3 (Economic): ~24,000–28,000 licensed US brokers; insurers are repricing broker contingent-liability premiums upward post-ruling; existing vetting tools (Highway/RMIS $500+/mo, Carrier411) already pull spend in this category — https://www.freightwaves.com/news/the-freight-broker-insurance-gap-is-now-real , https://pfaprotects.com/2026/06/04/freight-broker-insurance-cost/ — 2026-06
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents in carrier vetting — Highway, RMIS, Carrier411, CarrierOwl — sell **safety scores and ongoing monitoring**. They answer "is this carrier risky *right now*?" None of them produce the thing the *Montgomery* ruling made suddenly valuable: a **defensible, contemporaneous, per-load artifact** that proves *to a jury* you exercised reasonable care *at the moment you booked this specific load*.

That is a different product. Monitoring is a dashboard you glance at. A selection-defense ledger is a frozen, tamper-evident record — "here is exactly what we knew, when we knew it, and why we chose this carrier over the alternatives" — generated automatically and stored for the years-long tail of a tort claim. Carrier411 tells you a carrier's BASIC scores today; it does not snapshot them at booking, attach your written rationale, log the exception approval, and hand your defense attorney a clean PDF eighteen months later when the lawsuit lands.

The 10× wedge: incumbents are built for the *operational* question (route the load safely). CarrierProof is built for the *evidentiary* question (survive the lawsuit). Same data inputs, completely different output and buyer motivation. And the buyer motivation just changed by Supreme Court order five weeks ago.

## 4. Target market

- **Primary customer:** Owner-operators and ops managers at **small-to-mid US freight brokerages and 3PLs** — 1 to ~20 agents, booking 50–2,000 loads/month. The ones too small for Highway/RMIS ($500+/mo enterprise tooling) but now carrying real, uninsured tort exposure.
- **Why they buy (in their words):** *"They have a $75,000 surety bond that does not respond to tort claims, no liability insurance, and a Supreme Court opinion that says state courts can hold them accountable."* They are scared, their insurance broker is telling them to "tighten documentation," and they have no system to do it.
- **Rough TAM reasoning:** ~24,000–28,000 licensed US brokers. Conservatively 12,000 are small/mid shops outside enterprise tooling. At $150–400/mo that's a $20M–$130M serviceable line item — comfortably a sub-$5M ARR target with low single-digit market share.
- **Why now for them:** The ruling is 5 weeks old. Insurers are repricing premiums and, at renewal, will start *asking to see* a documented selection process. The forcing function (renewal cycle + first wave of post-*Montgomery* lawsuits) lands over the next 6–12 months.

## 5. Product sketch (MVP)

- **One-click load defense record:** Enter (or sync from TMS) a carrier MC/DOT + load details → CarrierProof pulls FMCSA authority, safety rating, SMS BASIC scores, crash/OOS history, and insurance status, then freezes a timestamped snapshot.
- **Auto-written selection rationale:** An AI drafts the contemporaneous "reasonable care" narrative — which sources were checked, which thresholds were met, why this carrier cleared your bar — in plain, defense-attorney-friendly language.
- **Red-flag + exception workflow:** If a carrier trips a disqualifying signal (conditional rating, lapsed insurance, double-brokering pattern), it forces a documented override with a sign-off and reason — exactly the "exception handling" the courts want logged.
- **Tamper-evident archive:** Every record is locked, timestamped, and retained for the 3–5 year claims tail. Searchable by carrier, load, or date range.
- **Litigation export packet:** One button produces a clean, paginated PDF dossier for a specific load — the artifact you hand your insurer or defense counsel.
- **Policy templates:** Pre-built minimum-safety-criteria policy (vetting thresholds, cooling-off periods) so brokers can codify "our standard" — which is half the legal battle.
- **Renewal-ready summary:** A quarterly "here's our documented selection program" report to hand the insurance broker at renewal.

## 6. AI angle — what's load-bearing

Two load-bearing AI jobs. First: **synthesizing a defensible narrative** from heterogeneous data (FMCSA fields, COI OCR, your policy thresholds) into the contemporaneous written rationale a jury and an attorney can read. That is genuinely hard to template — every carrier's data profile differs, and the rationale must reference the *specific* metrics that mattered for *this* selection. Second: **fraud/anomaly detection** — flagging double-brokering, reincarnated carriers, and identity discrepancies, which courts now expect brokers to have screened for.

Remove the AI and you're left with a glorified screenshot tool. The whole value is that it reads the same scattered data a paralegal would and writes the defense memo automatically, per load, at booking speed.

## 7. Localization angle (if any)

N/A — this is a US-only play by construction. The opportunity *is* a specific US Supreme Court ruling, FMCSA's specific data systems, and state-law tort doctrine. There is no localization wedge; the regulatory specificity *is* the moat (see §3). A future analog could exist in Canada (CVOR) but it's a separate build, not a translation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered SaaS by load volume. Starter $149/mo (up to ~150 loads), Pro $349/mo (up to ~750 loads), plus $0.10–0.25 per load overage. Litigation-export and policy templates included to drive the "insurance-required" wedge.
- **ACV:** ~$3,000 blended (mix of $149 and $349 tiers + overage).
- **Math to $1M ARR:** ~330 brokerages × $250/mo × 12 = $990K. Out of 12,000 target shops, that's <3% penetration.
- **Math to $5M ARR:** ~1,400 brokerages at a slightly higher blended ACV (~$300/mo) as larger 3PLs adopt, plus an insurer-distribution channel (below) bundling CarrierProof into broker policies. Requires winning one or two contingent-liability insurers as referral partners.
- **Expansion path:** Per-load overage grows with the customer. Upsell: continuous monitoring add-on (close the loop with incumbents), multi-agent seats, and an "insurer dashboard" sold to the carriers' insurance brokers who want proof their insureds are documenting selection.

## 9. Go-to-market wedge — first 100 customers

- **Ride the legal-alert wave:** Every transportation defense firm just published a "what to do now" client alert. Co-publish a free "Post-*Montgomery* Carrier Selection Checklist" with 3–5 of them; they distribute it to their broker clients (who are exactly the buyer). The checklist's last step is "generate this automatically → CarrierProof."
- **Cold outreach to the FMCSA broker list:** Broker authority is public. Scrape the ~12,000 small/mid broker records, segment by load activity, and send a personalized email: "Here's the *Montgomery* exposure for [your MC#] and a 90-second demo of the defense file we'd have generated for your last load." Expect 2–4% reply at this fear-level.
- **Insurance broker channel:** Contingent-liability insurers and the wholesale brokers (Amwins et al.) repricing these policies want their insureds documenting selection. Pitch CarrierProof as a premium-reducing/loss-control tool they recommend at renewal — warm, high-intent referrals.
- **r/FreightBrokers + FreightWaves + CCJ:** The community is actively discussing the ruling. A genuinely useful free exposure-calculator ("paste your MC#, see your gap") seeds inbound from the exact panicked operator.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: FMCSA APIs (SAFER/QCMobile/L&I), COI OCR, LLM for narrative + anomaly flags, standard web stack, PDF generation, append-only storage for tamper-evidence. Custom work: the defensible-rationale generation must be legally credible (needs a transportation-defense attorney advisor reviewing output), the exception/sign-off workflow, and lightweight TMS sync (DAT, Truckstop, McLeod) to remove data entry. A technical founder + part-time domain attorney ships a credible v1 in ~10–14 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | It *is* a legal-compliance tool; uses public FMCSA data. Must avoid practicing law — sells documentation, not legal advice. |
| Ethical — no harm / dark patterns | ✅ | Genuinely reduces accident exposure by formalizing safety vetting. Pro-safety. |
| Market exists (evidence above) | ✅ | SCOTUS ruling + insurer repricing + 24K brokers + existing vetting spend. |
| 1–5 person team can build this | ✅ | Technical founder + attorney advisor; off-the-shelf data/AI. |
| Launchable with <$50K / ₹40L | ✅ | API + inference + dev time. No capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire: uninsured tort exposure created by SCOTUS five weeks ago. Brokers are actively scared, insurers are forcing the issue at renewal. |
| Demand evidence | 15 | 13/15 | Multiple independent signals — SCOTUS ruling, uniform defense-firm guidance, FreightWaves "insurance gap is real," existing vetting spend. A skeptic nods. Slightly short of 15 only because no one's yet *paying for this exact artifact*. |
| Build feasibility | 15 | 11/15 | Doable in ~3 months but the rationale must be legally credible (attorney-in-the-loop) and TMS integrations add real work. Not a 4-week solo build. |
| Distribution clarity | 15 | 12/15 | Public broker list + defense-firm co-marketing + insurer channel = named, high-intent paths. Conversion math reasonable; insurer channel is the uncertainty. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked below incumbents, ACV realistic, <3% share gets to $1M. Risk: brokers may treat documentation as a checkbox and resist a monthly bill. |
| Time to first revenue | 10 | 8/10 | The fear is live now; a focused pilot with 5–10 brokers could pay within 6–8 weeks of MVP. |
| Defensibility | 10 | 5/10 | Execution + regulatory-knowledge moat and a few months' head start. But incumbents (Highway, Carrier411) can bolt on a "defense record" feature — that's the central risk. Moat is speed, legal credibility, and the insurer relationships. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` (transportation law / freight ops). Best built by a technical founder paired with a transportation-defense attorney advisor.

### Key assumptions to validate (3–5)

1. **Assumption:** Small/mid brokers will pay a monthly fee for a litigation artifact they hope never to use (insurance-style spend). **How to test:** Cold-call/demo 30 brokers; measure how many pre-commit to a paid pilot after seeing their own exposure.
2. **Assumption:** A defense attorney will vouch that CarrierProof's auto-generated record materially strengthens a negligent-selection defense. **How to test:** Get 2–3 transportation-defense attorneys to review sample output and put their endorsement in writing.
3. **Assumption:** Insurers/wholesale brokers will recommend it (or discount premiums for it) as loss control. **How to test:** Pitch 3 contingent-liability underwriters; see if any will pilot a referral or premium-credit arrangement.
4. **Assumption:** Incumbents won't ship a "good-enough" defense-record feature before you reach escape velocity. **How to test:** Monitor Highway/Carrier411 release notes; track whether the defense-artifact framing stays absent for 2–3 quarters.

### Risk flags

1. **Platform/incumbent risk:** Highway, RMIS, or Carrier411 already hold the data and the customers; a defense-record feature is a plausible bolt-on. Must win on legal credibility + insurer channel + speed before they notice.
2. **Regulatory risk (positive-then-uncertain):** The opportunity rests on one ruling. Federal legislation could later set a safe-harbor standard that either *helps* (codifies what to document — tailwind) or *commoditizes* the artifact. Watch FMCSA rulemaking and any Congressional response.
3. **"Checkbox" adoption risk:** If brokers decide a free screenshot folder is "good enough," willingness-to-pay craters. The insurer-required wedge is the antidote and must be proven early.
4. **UPL risk:** Selling a "defense record" flirts with practicing law. Must position as documentation/record-keeping software, not legal advice, with attorney review of templates.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + transportation-defense attorney advisor
Time to revenue:        6–10 weeks from MVP (fear is live now)
Capital to launch:      $15–35K ($ for FMCSA data access, inference, dev + attorney review)
Top 3 assumptions to validate first:
  1. Brokers pre-commit to paid pilot after seeing own exposure — demo 30, target ≥6 pilots
  2. Defense attorneys endorse the artifact in writing — secure 2–3 written endorsements
  3. At least one contingent-liability insurer will pilot a referral/premium-credit — pitch 3
Kill criteria:
  - Abandon if <5 of 30 demoed brokers will pay for a pilot within 6 weeks
  - Abandon if no transportation-defense attorney will endorse the artifact's evidentiary value
  - Abandon if Highway or Carrier411 ships an equivalent defense-record feature before your v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape 300 small/mid broker records from the FMCSA broker authority list. Build a one-page "Post-*Montgomery* exposure report" for 30 of them (their MC#, safety profile, the gap). Line up 2 transportation-defense attorneys for a 30-min review call.
- **Day 3–4:** Run 30 personalized cold demos ("here's your exposure + the defense file we'd auto-generate"). Pitch the attorneys on endorsing sample output. Email 3 contingent-liability underwriters about a referral pilot.
- **Day 5:** Decide go/no-go on a **falsifiable** bar: **≥6 brokers verbally pre-commit to a paid pilot AND ≥1 attorney agrees in writing the artifact strengthens a defense.** Miss both → park it (revisit if a federal safe-harbor standard codifies the documentation requirement).
