---
title: "VetTrail — carrier-selection record for freight brokers"
slug: freight-broker-carrier-selection-record
date: 2026-06-11
category: Logistics / US Small & Mid Freight Brokerages (1–25 staff)
complexity: Low
score: 77
verdict: GO
confidence: High
oneLiner: "Locks a timestamped, court-ready proof of reasonable care for every carrier you book — the defense Montgomery now demands."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [Compliance-driven, AI-agent, SMB, Solo-builder]
axes:
  problem: 17
  demand: 13
  build: 13
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# VetTrail — carrier-selection record for freight brokers

## 1. One-liner

Locks a timestamped, court-ready proof of reasonable care for every carrier you book — the defense Montgomery now demands.

## 2. Trend signal — why now?

On **May 14, 2026**, the U.S. Supreme Court ruled **9-0** in *Montgomery v. Caribe Transport II, LLC* that the FAAAA does **not** preempt state-law negligent-selection claims against freight brokers. The shield brokers leaned on for decades to get these suits dismissed is gone. The first negligent-hiring suits against brokers were filed within weeks of the ruling.

Every lawyer and insurer covering the space is now saying the same thing, and it points straight at a product. From Transfix's post-ruling guidance: *"The vetting you do, the data you review, the criteria you apply — document all of it with timestamps. If a subpoena arrives years from now asking what you knew about the carrier you dispatched on a load that ended in a fatality, you want to have a paper trail to support you."* From defense-bar analysis: *"Evidence generated after a claim arrives is worth far less than a timestamped record created at the moment of selection."*

But the same lawyers admit nobody has operationalized it. Benesch's post-Montgomery piece tells brokers to "have a written policy" and "train personnel" — then concedes *"The honest answer is that no one knows"* what reasonable care concretely requires. There is a duty with no tool to discharge it.

Provenance:
  - Signal 1 (demand): SCOTUS 9-0 *Montgomery v. Caribe* makes ~28,000 US freight brokers suable for negligent carrier selection; suits already filed; lawyers/insurers demanding contemporaneous documentation — https://www.scotusblog.com/2026/05/court-rules-freight-brokers-can-face-negligent-hiring-suits-under-state-law/ — 2026-05-14
  - Signal 2 (feasibility): FMCSA SAFER/CSA safety data is public and free; cheap AI to parse safety ratings, capture rationale, and assemble a per-load record needs no proprietary dataset — https://transfix.io/insights/carrier-vetting-after-montgomery-v-caribe-what-broker-compliance-now-requires — 2026-05
  - Signal 3 (economic): Freight broker software market $20B (2024) → $35B (2031); incumbents (Highway, RMIS, Carrier Assure) price $149–$500+/mo at enterprise, leaving small brokers exposed and unserved on the defense angle — https://www.skyquestt.com/report/freight-brokerage-market — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents — Highway, RMIS, Carrier Assure, Carrier411 — are built to **screen carriers in real time**: fraud detection, identity verification, double-brokering alerts. Useful, but that's a different job than the one Montgomery just created. Montgomery doesn't ask "is this carrier a fraud right now?" It asks, two years later in discovery, "**prove you exercised reasonable care at the moment you tendered this specific load.**"

Nobody packages *that*. The enterprise tools generate dashboards and scores; they don't produce a sealed, timestamped, per-load **defense artifact** a broker's attorney can drop into a motion for summary judgment. And at $500/mo they're priced out of the 20,000+ small brokerages — many "run from a laptop and a cell phone" (FreightWaves) — that are now equally exposed but can't afford an enterprise seat.

The 10× move: collapse "reasonable care" from a vague legal aspiration into a 30-second, one-click record at booking time. Pull the carrier's live FMCSA safety picture, snapshot it, capture the broker's selection rationale against their own written policy, and freeze the whole thing into an immutable, exportable record. Cheap. Self-serve. Defensive by design.

## 4. Target market

- **Primary customer:** US freight brokerages with active FMCSA broker authority, **1–25 staff**, booking ~50–2,000 loads/month. Owner-operator brokers and small TMS-light shops who do their vetting in SAFER tabs and spreadsheets.
- **Why they buy:** "I just found out I can be personally sued over a crash by a carrier I booked once. My insurance guy says I need to document everything and I have no idea how." Post-Montgomery, the contingent-auto insurance gap (many small brokers carry none) makes the paper trail their *only* defense.
- **Rough TAM reasoning:** ~28,000 licensed US freight brokers (FreightWaves). Conservatively 15,000–18,000 are small/mid shops outside enterprise-tool budgets. At even $79–$199/mo, a 5% capture is 750–900 customers — a multi-million ARR business well inside the target band.
- **Why now for them:** The duty is **four weeks old**. Insurers are re-underwriting contingent-auto and asking brokers what their documentation process is. The fear is fresh, the renewal questionnaires are landing now, and no off-the-shelf answer exists at SMB price.

## 5. Product sketch (MVP)

- **One-click load record:** Enter MC#/DOT#, VetTrail pulls the carrier's live FMCSA picture (authority status, safety rating, CSA BASIC scores, OOS rates, insurance-on-file, inspection history) and snapshots it.
- **Policy-aware rationale capture:** Broker defines their written vetting policy once; each booking is scored against it, and the broker records why this carrier passed (or why an exception was approved).
- **Immutable timestamped seal:** Each record is frozen with a tamper-evident timestamp — what was checked, what the data showed, who approved, when.
- **Red-flag prompts:** If the carrier has a conditional rating, recent OOS spikes, or lapsed insurance, VetTrail forces an explicit acknowledge-and-justify step (mirroring the *Montgomery* "conditional rating" fact pattern).
- **Defense-pack export:** Pull any single load's record, or a date-range, as a clean PDF bundle formatted for an attorney/insurer — "here is exactly what we knew and when."
- **Continuous monitoring (tier 2):** Re-check booked carriers and flag if a carrier's safety standing degrades mid-relationship.
- **Insurer-ready summary:** A one-page "our vetting process" artifact a broker hands their underwriter at renewal.

## 6. AI angle — what's load-bearing

AI does the judgment-compression. FMCSA data is messy, multi-source, and full of edge cases (reincarnated carriers, authority churn, BASIC percentiles that need context). The AI (1) **normalizes and interprets** the safety picture into a plain-English risk read a non-lawyer broker understands, (2) **drafts the selection rationale** against the broker's own policy so the contemporaneous note is substantive, not a checkbox, and (3) **flags the specific red flags a plaintiff's expert would seize on** — pre-empting the "battle of the experts" the defense bar describes.

Remove the AI and you're left with a screenshot tool. The defensibility of the record — that it reads like reasonable care *was actually exercised and reasoned about*, not rubber-stamped — is the AI's job. That's load-bearing.

## 7. Localization angle

N/A — this is a US-only regulatory play. *Montgomery*, FAAAA, FMCSA, and the negligent-selection tort are entirely US constructs. The whole product is the arbitrage on a four-week-old US Supreme Court ruling; there is no localization wedge and forcing one would dilute it.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $79/mo solo/starter (≤150 loads), $199/mo growth (≤1,000 loads + monitoring), $399/mo for higher volume + multi-user + insurer export. Undercuts Highway/RMIS deliberately.
- **ACV:** ~$1,800 blended.
- **To $1M ARR:** ~560 customers at $199/mo, or a blend of ~700 across tiers. Inside a 28,000-broker market, that's <3% penetration.
- **To $5M ARR:** ~2,800 paying brokers (~10–15% of the addressable small/mid segment) **or** an insurer channel deal where carriers' contingent-auto underwriters bundle/mandate VetTrail and subsidize seats. The insurance angle is the realistic 5× lever.
- **Expansion path:** per-seat as brokerages grow, monitoring add-on, an insurer-facing "verified vetting" certification, and a litigation-export premium when a broker actually gets sued (highest WTP moment in the customer's life).

## 9. Go-to-market wedge — first 100 customers

- **Ride the ruling's news cycle.** Every legal/insurance firm has published a *Montgomery* alert. Brokers are searching "what do I do about Montgomery" right now. Publish the one concrete answer — a free "Montgomery vetting checklist" and a per-load record template — and gate the automated version. This is the rare moment SEO/content converts fast because the search intent is acute and dated.
- **FMCSA broker list is public.** The licensing database yields MC#s and contact info for active brokers. Scrape the small/mid segment, send a personalized note: "Here's a sample defense record for a load you booked last week — generated in 30 seconds. Want this for every load?" Lead with their own data.
- **Insurance brokers are the multiplier.** Contingent-auto underwriters and freight-insurance agencies are fielding panicked broker calls and have no tool to recommend. Partner with 5–10 agencies as a referral/co-marketed answer; they *want* their insureds documenting. One agency relationship can seed dozens of brokers.
- **Trade channels:** TIA (Transportation Intermediaries Association) members, the r/FreightBrokers and TruckersReport communities, and FreightWaves' audience are all actively discussing exactly this. Webinar + a defense-bar attorney as co-host.

## 10. Build complexity — justification

**Low.** FMCSA SAFER/CSA data is public and accessible; the core is a clean web app over off-the-shelf AI for interpretation and drafting, plus immutable record storage and PDF export. No proprietary dataset, no hardware, no marketplace. The only genuine care item is making the timestamp/record tamper-evident enough to satisfy an evidentiary standard — solvable with standard hashing/audit-log patterns. A small team ships a credible v1 in **6–10 weeks**.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Records public data; helps brokers meet a legal duty. |
| Ethical — no harm / dark patterns | ✅ | Improves road safety incentives and honest documentation. |
| Market exists (evidence above) | ✅ | 9-0 SCOTUS ruling, 28k brokers, suits already filed. |
| 1–5 person team can build this | ✅ | Low complexity, off-the-shelf stack. |
| Launchable with <$50K / ₹40L | ✅ | No capital-heavy components. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Brand-new personal-liability exposure; brokers feel it per-load and are actively searching for an answer. Just short of 18+ because pain is dread-driven, not yet a daily out-of-pocket cost for most. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: unanimous SCOTUS ruling, suits filed, insurer re-underwriting, lawyers explicitly demanding timestamped records, $20B+ adjacent market. |
| Build feasibility | 15 | 13/15 | Public data + off-the-shelf AI; only the evidentiary-grade record needs care. 6–10 weeks. |
| Distribution clarity | 15 | 11/15 | Public broker list + acute dated search intent + insurer channel are real, but conversion through insurers is unproven and content/SEO has a ramp. |
| Revenue mechanics | 15 | 12/15 | Clear SMB pricing benchmarked below incumbents; <3% penetration hits $1M. 5× depends on the insurer channel landing. |
| Time to first revenue | 10 | 8/10 | Acute, dated demand + self-serve = paying customers within weeks of a content+outreach push. |
| Defensibility | 10 | 3/10 | Public data, copyable mechanics. Moat is speed, an insurer-channel lock-in, and accumulating per-broker record history — soft at best. Incumbents could bolt this on. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** Small brokers will pay $79–$199/mo for a defense record they hope to never use (insurance-shaped WTP). **How to test:** Pre-sell to 30 brokers off a landing page + sample record; target ≥10% deposit/commit.
2. **Assumption:** A timestamped, AI-reasoned per-load PDF is what defense attorneys actually want in discovery. **How to test:** Show the export to 5 transportation defense lawyers; ask "would this help you win summary judgment?" Need ≥4 yes.
3. **Assumption:** Contingent-auto insurers/agencies will refer or co-market. **How to test:** Pitch 8 freight-insurance agencies; ≥2 agree to refer insureds.
4. **Assumption:** FMCSA data access is reliable and complete enough to build an evidentiary record on. **How to test:** Pull 200 carriers, audit completeness/freshness of safety fields.

### Risk flags

1. **Defensibility (low moat):** Highway/RMIS could ship a "Montgomery defense record" feature and out-distribute you overnight. Mitigant: own the SMB price tier and the insurer channel fast.
2. **Legal-efficacy risk:** If courts decide the *content* of reasonable care in ways your record doesn't capture, the product's core value claim weakens. Mitigant: defense-bar advisory, keep the record schema legally current.
3. **Platform dependency:** Entirely reliant on FMCSA data availability/format. Mitigant: cache snapshots (which is the product anyway), monitor for API/format changes.
4. **Market timing — fast incumbents:** The same ruling that creates the opening alerts every well-funded incumbent. The window to plant the SMB flag is months, not years.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             High
Best-fit builder:       Technical founder + freight/insurance domain advisor
Time to revenue:        4–8 weeks
Capital to launch:      $8–15K
Top 3 assumptions to validate first:
  1. Brokers pay insurance-shaped WTP — pre-sell 30, need ≥10% commit
  2. Defense attorneys validate the export — 5 interviews, need ≥4 yes
  3. Insurance agencies will refer — pitch 8, need ≥2
Kill criteria:
  - Abandon if <10% of 50 cold-outreached brokers show interest after seeing their own sample record
  - Abandon if Highway or RMIS ships an equivalent SMB-priced defense-record feature before your v1
  - Abandon if ≥3 of 5 defense attorneys say the record adds no litigation value
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a landing page + a hand-made sample defense record for one real carrier (pulled from SAFER). Draft the free "Montgomery vetting checklist" lead magnet.
- **Day 3–4:** Scrape 200 small brokers from the FMCSA list; send 50 personalized notes with a sample record generated for a carrier in their lane. Book 5 defense-attorney calls and 8 insurance-agency calls.
- **Day 5:** Decide go / no-go. **Go** if: ≥5 brokers say "take my money" (or commit a deposit), **and** ≥4 of 5 attorneys confirm the export has litigation value, **and** ≥2 agencies agree to refer. Anything less → the demand is dread, not dollars, and it's a VALIDATE-only.

The falsifiable bar: paid commitments + attorney sign-off, not "brokers said it sounds useful."
