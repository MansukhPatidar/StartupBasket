---
title: StillChase — TTB cockpit for solo craft distilleries
slug: stillchase-distillery-ttb
date: 2026-05-10
category: Compliance SaaS / US Solo & 2-Person Craft Distilleries (DSP)
complexity: Medium
score: 80
verdict: STRONG GO
confidence: Medium
oneLiner: Photo-and-voice cockpit that turns daily distillery readings into reconciled TTB monthly reports for solo craft distillers.
tags:
  vertical: Compliance
  model: SaaS
  geography: US
  secondary: [Voice-first, Photo-capture, AI-agent, Compliance-driven, SMB, Solo-builder, TTB, Craft-spirits]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 9
  defensibility: 8
founderFit: [domain-expertise-required, technical-heavy]
featured: true
---

# StillChase — TTB cockpit for solo craft distilleries

## 1. One-liner

Photo-and-voice cockpit that turns daily distillery readings into reconciled TTB monthly reports for solo craft distillers.

## 2. Trend signal — why now?

US craft distilling is now a 2,282-active-DSP industry (ACSA's 2025 census, methodology cleaned to drop dormant permits) doing $7.6B in retail value but margin-thin. The category got permanent federal excise relief in 2024 ($2.70/proof gallon for the first 100,000 PG), so micro-DSPs that survived the 2022-24 shakeout are staying open — but TTB enforcement against record-keeping sloppiness is sharper than ever.

The pain is well-documented:

- **78% of TTB violations against craft distilleries are record-keeping errors** (FX5 / industry reporting), and 73% of craft distilleries get hit with at least one violation in their first three years.
- Average violation cost > **$25K** when you add fines, legal, and remediation.
- A real example: Mountain View Distillery (Colorado) — $12K fine for three months of missing daily operating reports plus mismatched transfer records, plus quarterly TTB reviews for two years.
- **Failure-to-file penalty: $1,000 per occurrence + up to 1 year imprisonment** under 27 CFR Part 19.
- Existing software (Whiskey Systems, FIVE x 5, DISTILL x 5, OnBatch, TTB Tamer) starts at **$169/mo + per-bottle royalty** (Whiskey Systems) or annual contracts with 20% surcharge for month-to-month. ADI Forum has open complaint threads about price increases and "on it a few months and not liking it."

What changed in the last 12 months that makes a fresh entrant viable:

- Vision models cheap enough ($0.001/image) to read a **hydrometer/thermometer** photo and auto-apply the TTB Gauging Manual Table 1 (temperature correction → true proof) in the field, on a phone, in 8 seconds.
- Whisper-class voice transcription so a distiller in PPE can say "240 wine gallons in still A, hearts cut at 9:14, reading 158.4 at 72.6" while pumping, and the cockpit fills the production form without typing.
- TTB e-filing is now mandatory for tax returns ≥ $5M; the rest still file paper or PDF, but APIs and Pay.gov integration are mature enough to push semimonthly 5000.24 returns programmatically.

```
Provenance:
  - Signal 1: 78% of TTB violations are record-keeping; 73% of new craft distilleries get one in 3 years; avg $25K cost — https://barrelclarity.com/blog/ttb-compliance-mistakes/ — 2026-05-10 — and https://fx5.com/18-mistakes-ttb-audit/
  - Signal 2: ACSA 2024 Craft Spirits Data Project shows 2,282 active US craft DSPs; CBMA permanent reduced rate ($2.70/PG) keeps small DSPs viable post-2024 reform — https://americancraftspirits.org/wp-content/uploads/2017/02/2024-Craft-Spirits-Data-Project-Final.pdf — 2026-05-10 — and https://distilling.com/resources/government-affairs/temporary-tax-parity/
  - Signal 3: Whiskey Systems pricing $169/mo + per-bottle royalty + 20% surcharge for month-to-month; ADI forum thread on price increases — https://whiskeysystems.com/features-pricing/ — 2026-05-10 — and https://adiforums.com/topic/13536-whiskey-systems-price-increases/
  Category: Underserved niche (with workflow-automation overlap — daily logbook → TTB form is the workflow, and the existing tools price out the bottom 60% of the market)
```

## 3. The opportunity

The bottom 60% of the US craft distillery market — solo and 2-person DSPs producing under 10,000 proof gallons/year — is stuck in a bad place. They can't afford Whiskey Systems / FIVE x 5 at $169/mo plus per-bottle royalties on top of $12K/yr ERP overhead. So they keep daily records on **paper logbooks, Excel sheets, and handwritten dipstick notes** (confirmed pattern on ADI Forum). When TTB or the state ABC shows up for an audit, the paper trail doesn't reconcile to physical inventory, and they eat the $12-25K hit.

The incumbents are real ERPs that try to be cost-accounting + production tracking + TTB filing all at once. They were designed for distilleries with a controller. A solo distiller who's also the master distiller, sales rep, and forklift driver doesn't need ERP — they need the **daily operating record** to write itself, and the monthly TTB report to fall out the back of it.

That's the wedge: cheap, voice-first, photo-first daily logbook that **auto-generates the four TTB monthly forms (5110.40 Production, 5110.11 Storage, 5110.28 Processing, 5000.24 Excise)** and flags inventory mismatches *before* the auditor finds them.

## 4. Target market

- **Primary customer:** Owner-operator and 2-person US craft distilleries (DSPs) producing < 10,000 proof gallons/year. ~1,400-1,700 of the 2,282 active DSPs fall in this band. Annual revenue $150K-$1.5M.
- **Why they buy:** They already had one TTB letter, or they know the next one will end them. They've been told by their state ACSA chapter / industry consultant that "you have to log daily" but they're a one-person shop with no time to do data entry after a 12-hour distilling shift. Existing software is too expensive and too complex.
- **Rough TAM:** ~1,500 US solo/duo DSPs at $99-149/mo = $1.8M-$2.7M ARR US-only ceiling. With micro-cideries, micro-wineries (5120 series TTB forms — same shape), and small breweries (BROP), TAM expands to ~7,000 producers. Add Canada, UK, Australia, NZ versions of the same regulator-by-volume model and the ceiling moves to $5-8M ARR.
- **Why now for them:** TTB resumed normal audit cadence post-COVID; states are tightening their own beverage tax filings (e.g., new direct-to-consumer rules in 2024-2025 across NY, CT, KY); CBMA permanent reduced rate means they have to *prove* their proof-gallon numbers to claim it.

## 5. Product sketch (MVP)

- **Voice batch logger** — distiller speaks "Mash bill 70 corn 20 rye 10 malted barley, 800 lbs, 250 wine gallons mash water, fermenter F2, started 9:42" while moving; the system parses and writes a fermentation record entry with timestamp.
- **Photo-of-hydrometer proofing** — phone snap of the hydrometer + thermometer in the proofing parrot; vision model reads both, applies TTB Gauging Manual Table 1 temperature correction, returns true proof with audit-trail (the photo itself is the source document).
- **Photo-of-dipstick / scale** — for tank gauging and cooperage receipts; vision reads the scale, cross-checks the wine-gallon figure against the prior reading and the still output.
- **Auto-fill 4 TTB monthly forms** — TTB F 5110.40 (Production), 5110.11 (Storage), 5110.28 (Processing), and 5000.24 (semimonthly Excise Tax Return). Pre-flight check: every line ties back to a daily record source, and inventory at month-end = inventory at month-start + receipts - transfers - removals - losses.
- **Reconciliation flag** — the moment a daily record creates an inventory mismatch (e.g., 215 PG produced but only 208 PG into bond), the cockpit highlights it and prompts the distiller to either correct or annotate-the-loss before it shows up on the TTB report.
- **State ABC filings shim** — Kentucky, Tennessee, Texas, New York, California first; same daily records → state monthly beverage tax form.
- **3-year archive** — every photo, voice clip, and form export held in the format TTB expects on audit (3-year retention is the federal rule).
- **"Audit Ready" weekly digest** — Monday-morning email: what's missing, what's mismatched, what TTB or the state would flag if they walked in today.

## 6. AI angle — what's load-bearing

Without AI, this is a clipboard. With AI it collapses 90 minutes of daily paperwork into 8 minutes of pointing the phone at things and talking. Specifically:

- **Vision model** does the gauging — reading hydrometer + thermometer photos to within TTB's 0.1°F / 0.05 proof tolerance, applying the gauging tables, and producing an audit-quality record (with the photo as evidence). This is the manual step distillers most often get wrong, and the most-fined error category.
- **Voice transcription + structured extraction** — the distiller doesn't type. They talk. The model parses ingredients, batch IDs, timestamps, weights, and routes them into the right CFR Part 19 record category.
- **Reconciliation reasoner** — when a daily record creates a mass-balance violation, the model explains what's wrong in distiller-language and proposes the fix (operational loss vs. theft vs. data-entry typo). This is the work an outside compliance consultant charges $150/hr for.

Strip out the AI and you have Excel. The whole product is the AI doing the data entry.

## 7. Localization angle (if any)

US-first by design — TTB's regulatory regime is the wedge. No international v1.

After 18 months, the same shape ports to:

- **Canada** — CRA Excise Act distillery licensees (~250 distilleries), monthly K50B excise return.
- **UK** — HMRC W5 Distillers' Return for ~600 distilleries, plus AWRS.
- **Australia** — ATO Excise Returns for ~700 distilleries (PSP licence).

All three regulate by volume of pure alcohol and require similar daily records. Same vision model + same reconciliation engine + different output forms. That's the path from $2-3M US-only ARR to $5-8M Anglosphere.

## 8. Business model — path to $1M–$5M ARR

- **Pricing tier 1 (Solo):** $99/mo — single user, up to 5,000 PG/year, all 4 TTB forms, voice + photo capture, 3-year archive.
- **Pricing tier 2 (Duo):** $149/mo — 2-3 users, up to 15,000 PG/year, plus state ABC filings for one state, plus barrel/cooperage tracking.
- **Pricing tier 3 (Tasting Room):** $249/mo — adds DTC shipping compliance (per-state direct-shipping permits), club fulfillment receipts, COLA prep.
- **No per-bottle royalty.** Flat. This is the wedge against Whiskey Systems.
- **ACV:** $1,500-$2,000 average across mix.
- **Path to $1M ARR:** 600 customers × $140 ACV/mo × 12 = $1.0M. ~600 / 1,500 addressable solo DSPs = 40% penetration of bottom segment within 24 months.
- **Path to $5M ARR:** Add Anglosphere + micro-cideries/wineries (TTB 5120) + small breweries (BROP). ~3,500 customers × $120 ACV/mo × 12 = $5.0M.
- **Expansion path:** state ABC filings (each state = $25/mo add-on); DTC shipping compliance ($50/mo add-on); COLA assistant; trademark watch.

## 9. Go-to-market wedge — first 100 customers

- **Day 1 channel: ADI + ACSA forums.** The American Distilling Institute forum (adiforums.com) has an active "Distillery Software Pros & Cons" thread with named complaints about Whiskey Systems pricing. Post a side-by-side pricing comparison and a free "TTB audit pre-flight" tool. Expect ~30 leads in 60 days.
- **Day 2 channel: 2026 ACSA Convention (Sacramento, April 17-18).** Cheap booth or sponsor the compliance track. ACSA has the high-intent buyer who already pays for memberships and consultants. Expect 50-80 demo bookings, 15-25 conversions.
- **Day 3 channel: TTB compliance consultants as resellers.** ~30 named compliance consultants (NiekampLaw, ZahnLaw, BarrelClarity, FX5 itself) make money cleaning up violations. Offer 25% recurring rev share for referrals. They send the distillers who can't afford Whiskey Systems.
- **Day 4 channel: TTB Pay.gov submission scrapes — public DSP permit database.** TTB publishes the active DSP permit list (Permit Online). Filter to DSPs that registered in last 24 months (the 73%-violation cohort). ~1,200 emails. Personalized cold outreach: "You opened your DSP in 2024. 73% of distilleries in your cohort already have a record-keeping violation. Here's the 7 most common." Expect 4-6% conversion to demo.
- **Day 5 channel: Master Distiller workshop sponsorships.** Moonshine University, Distillery University, Siebel Institute. The new operators graduate, then need software within 90 days of permit issuance. Sponsor the compliance module.

If first-90-days target is 100 paying customers at $99-149/mo, that's $11K MRR — credible based on the ADI thread + ACSA convention math.

## 10. Build complexity — justification

**Medium.** Off-the-shelf tech everywhere — phone PWA, vision API, Whisper, Pay.gov form templates. The hard parts are: (1) every TTB form line item correctly mapped to a daily-record source so audits reconcile, (2) the reconciliation engine that detects mass-balance breaks across a fermentation→distillation→bottling chain, (3) state ABC form variants. None of this is novel R&D — it's domain-specific care. Solo founder with a distillery advisor can ship v1 (one TTB form + voice + photo) in 12 weeks; full 4-form + reconciliation in 5 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | TTB record-keeping is a customer obligation, not a regulated activity for the SaaS vendor; we're a tool, not a permit-holder |
| Ethical — no harm / dark patterns | ✅ | Helping operators stay legal |
| Market exists (evidence above) | ✅ | 2,282 active DSPs, 4 named software competitors, ADI forum complaint threads |
| 1–5 person team can build this | ✅ | Standard PWA + vision/voice APIs + form generators |
| Launchable with <$50K / ₹40L | ✅ | $20K covers AI API credits + LLC + ACSA booth |

All five clear.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | $25K avg violation cost; $1,000+ federal failure-to-file penalty per occurrence; permit suspension is an existential threat. Hair-on-fire for the 73% cohort. |
| Demand evidence | 15 | 12/15 | Multiple incumbents charging real money, public ADI forum complaints about pricing, ACSA census of 2,282 active DSPs. Direct user voice on solo-DSP pain still mostly secondhand — a few primary interviews would push this to 14. |
| Build feasibility | 15 | 11/15 | Vision + voice are commodity; TTB form mapping is meticulous but documented; state ABC variants add weeks. Solo can do it in 5 months. |
| Distribution clarity | 15 | 12/15 | ADI forum + ACSA convention + TTB permit list + compliance-consultant resellers — four named, costed channels. |
| Revenue mechanics | 15 | 11/15 | $99-149/mo benchmarks under Whiskey Systems' floor; ACV believable; $1M-$5M ARR math holds. Churn risk if a distillery closes — need to model. |
| Time to first revenue | 10 | 9/10 | Pre-sell at ACSA April 2026; ship beta-paid in 8-10 weeks. |
| Defensibility | 10 | 8/10 | Workflow lock-in (3 years of source documents in your system) + TTB form-mapping correctness as quality moat + state ABC integrations compound over time. Not patent-grade, but real. |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

The founder needs to have either run a DSP or worked with one closely (former TTB compliance consultant, ex-Whiskey Systems engineer, distillery controller). Without that, the form-mapping fidelity that customers actually pay for won't be there. Pair with a competent full-stack engineer for the build.

### Key assumptions to validate (3–5)

1. **Assumption:** Solo / 2-person DSPs will pay $99-149/mo flat for a daily-records-first tool, not full ERP. **How to test:** 25 in-person interviews at the April 2026 ACSA Convention with a printed mock landing page; ask "$99/mo, no per-bottle royalty, voice + photo, auto TTB forms — would you switch?" Need 40%+ "yes, today" rate.
2. **Assumption:** Vision model can read a hydrometer + thermometer in real distillery lighting (steam, cluttered parrot, gloved hands) within TTB's 0.05-proof tolerance. **How to test:** 200-image bench test against ground-truth manual gauging, in three real distilleries; need 95%+ within tolerance.
3. **Assumption:** Compliance consultants will refer business at 25% revshare. **How to test:** Direct outreach to 10 named consultants (NiekampLaw, ZahnLaw, BarrelClarity); need 4+ to commit to refer in writing.
4. **Assumption:** TTB Pay.gov / Permit Online endpoints are stable enough to programmatically push 5000.24 returns. **How to test:** TTB sandbox + 5 hand-tested submissions across permit types in first 60 days. If TTB blocks API push, fall back to PDF-export-and-manual-upload (still saves 90% of the work).
5. **Assumption:** Churn ≤ 18% annual once installed (workflow lock-in works). **How to test:** Track first 50 customers' retention at month 12; abort if churn > 25% — means the product is replaceable.

### Risk flags

1. **Regulator dependency:** TTB could change form formats or push its own e-filing portal that captures daily records directly. Mitigation: focus on state ABC + Anglosphere expansion early so no single regulator is >50% of value.
2. **Incumbent retaliation:** Whiskey Systems / FIVE x 5 cuts price to match $99/mo. Mitigation: ship faster, own the solo segment, and build state-ABC depth they don't bother with.
3. **Cohort timing:** The 2024-2025 craft-distillery shakeout removed ~800 DSPs. If consolidation continues, the addressable solo market shrinks. Mitigation: the per-customer LTV stays the same; just expand to micro-cideries and small breweries to widen the funnel.
4. **Vision model brittleness:** Hydrometer-reading accuracy in real distillery lighting could be the make-or-break edge case. Mitigation: photo always saved as source-document, manual override always available, and a "human in the loop" review tier for the first 90 days of customer life.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       Ex-distillery operator or TTB compliance consultant paired with one full-stack engineer comfortable with vision/voice APIs
Time to revenue:        8–12 weeks (pre-sell at ACSA April 2026, beta-paid by end of June 2026)
Capital to launch:      $20–35K (AI credits, ACSA booth, 6-month runway for one engineer)
Top 3 assumptions to validate first:
  1. Hydrometer + thermometer photo gauging within TTB tolerance — 200-image bench test in 3 real distilleries
  2. 40%+ "yes, today" intent at $99-149/mo flat from 25 ACSA Convention interviews
  3. 4+ compliance consultants signing letters of intent on 25% revshare referral
Kill criteria:
  - Abandon if vision gauging accuracy < 90% within tolerance after 200-image test
  - Abandon if < 25% intent rate at $99-149/mo from ACSA in-person interviews
  - Abandon if Whiskey Systems or FIVE x 5 launches a "$99 starter" tier within 90 days of validation sprint
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the bench-test rig — 200 photos of hydrometer/thermometer pairs across 3 friendly distilleries, ground-truth proof from manual gauging. Run them through Claude vision / GPT-4o vision / Gemini vision and measure tolerance. Pick the cheapest model that hits 95%+.
- **Day 3:** Cold-call / DM 30 solo DSPs from the ADI forum. Ask: "What's your current TTB record-keeping setup and what does it cost you per month?" Score for matching pattern (paper / Excel / Whiskey Systems / FIVE x 5).
- **Day 4:** Mock up landing page — "$99/mo, voice + photo, auto-fills your 5110.40 / 5110.11 / 5110.28 / 5000.24, no per-bottle royalty, no annual contract." Buy 200 clicks of LinkedIn ads targeting ACSA / ADI members; measure email-capture conversion.
- **Day 5:** Decide. Go condition: vision tolerance ≥ 95%, ≥ 8 of 30 solo DSPs say "yes I'd pay $99 today," landing page email-capture ≥ 12%. Anything less = back to Stage 2 with a different cluster.

Falsifiable. Numbers, not vibes.
