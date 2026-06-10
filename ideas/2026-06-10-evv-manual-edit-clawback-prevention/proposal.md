---
title: "ClockCatcher — clock-in catcher for home-care agencies"
slug: evv-manual-edit-clawback-prevention
date: 2026-06-10
category: HealthTech / US Medicaid Home-Care Agencies (HCBS)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Catches missed caregiver clock-ins in real time and captures audit-proof EVV verification before a clawback hits."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Voice-first, Medicaid, EVV]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [operations-heavy, domain-expertise-required]
featured: false
---

# ClockCatcher — clock-in catcher for Medicaid home-care agencies

## 1. One-liner

Catches missed caregiver clock-ins in real time and captures audit-proof EVV verification before a clawback hits.

## 2. Trend signal — why now?

Electronic Visit Verification (EVV) went from "have a system" to "stay under a number" in 2026. States flipped from **soft edits** (minor errors paid with a warning) to **hard edits** (automatic denial, no grace period). The new audit hammer is the **manual-edit rate** — every retroactive edit a coordinator makes because a caregiver didn't clock in/out in real time.

The thresholds are now explicit and punishing:
- **Pennsylvania:** no more than **15%** of EVV records may be manual edits; exceeding it for **two consecutive quarters** triggers a formal non-compliance notice and a required Corrective Action Plan.
- **Minnesota:** compliance floor jumped to **80%** in early 2026.
- Multiple states: exceeding a **15–20%** manual-edit rate triggers a compliance review, a corrective-action letter, or **direct payment holds**.
- **Maryland:** caps mistakes at **four per caregiver per month** — Medicaid simply does not pay the agency for the fifth.

And the root cause is documented, not behavioral: *"the fix isn't disciplining caregivers… high manual entry rates trace back to EVV software that creates friction in the field — apps that load slowly, don't handle poor connectivity, or require more steps than caregivers can reliably complete at the start of a shift."* Agencies are told to *"review EVV exceptions daily: missed clock-ins, GPS mismatches, time discrepancies, before they stack up."* That daily scramble is the workflow we automate.

Provenance:
  - Signal 1 (demand): 2026 hard-edit enforcement + manual-edit thresholds (PA 15% over 2 quarters → Corrective Action Plan; payment holds for excessive manual corrections) — https://www.myezcare.com/state-by-state-evv-requirements-for-2026-what-every-home-care-agency-must-know/ — 2026-06-10
  - Signal 2 (feasibility): Cheap real-time AI voice/SMS now production-grade — OpenAI gpt-realtime-mini, audio ~$0.06/min, sub-second latency, no-code builders (Retell/Synthflow) — https://www.forasoft.com/blog/article/openai-realtime-api-voice-agent-production-guide-2026 — 2026-06-10
  - Signal 3 (economic): ~9,961 US home-health agencies, 5M+ Medicaid HCBS recipients across 300+ programs; documented payment withholds for excessive manual edits; Maryland non-payment past 4 mistakes/caregiver/month — https://homecentris.com/mistakes/ + https://www.kff.org/medicaid/medicaid-home-care-hcbs-in-2025/ — 2026-06-10
  Category: Regulatory arbitrage

## 3. The opportunity

The EVV systems of record — HHAeXchange, Sandata, AuthentiCare, CareBridge — are **paid by states to record visits**, not to chase caregivers and prevent edits. Their incentive ends at "data captured." Most small Medicaid-only agencies are mandated onto the **free** aggregator portal (HHAeXchange's free Mobile App + IVR), which records visits but does nothing active when a caregiver no-shows the clock.

Full-suite platforms (CareSmartz360, AxisCare, Alora, myEZcare) do bolt on "missed clock-in reminders" — but a reminder that a caregiver ignores still ends as a manual edit. None of them **watch the live manual-edit ratio against the specific state threshold** and run an automated capture-and-document loop that produces audit-ready reason-code evidence.

The gap is a thin **compliance overlay** that sits on top of whatever EVV the agency already runs (free aggregator or paid suite), monitors the manual-edit rate in real time, and intercepts at-risk visits before they tip the agency over the line. We don't rip and replace the system of record — we defend it. That's a focused wedge incumbents are structurally disincentivized to build.

## 4. Target market

- **Primary customer:** Owner / scheduling coordinator at a small US Medicaid home-care agency — **5–75 caregivers**, personal-care / 1915(c)-waiver services, operating in open-model EVV states (PA, TX, IL, MN, OH, NC, MD, etc.).
- **Why they buy:** "Every billing cycle I'm manually fixing 20–30% of visits because caregivers forgot to clock in, and now the state is threatening to hold my Medicaid payments over that exact number. One bad quarter and I'm on a corrective action plan." Margins are thin (personal-care rates $15–30/hr) and a payment hold is existential.
- **Rough TAM reasoning:** ~9,961 US home-health agencies plus tens of thousands of non-Medicare personal-care/HCBS agencies. Conservatively **15,000–25,000** agencies live in open-model EVV states with a manual-edit exposure. Capturing 1,000 at ~$300/mo = $3.6M ARR.
- **Why now for them:** 2026 is the first year manual-edit rate carries automatic financial penalties. The clock-in problem they've tolerated for years just became a balance-sheet risk.

## 5. Product sketch (MVP)

- **Live manual-edit meter:** pulls the agency's visit + exception data (via aggregator export/API or, where needed, a thin portal sync) and shows the rolling manual-edit % against *that state's* threshold, with a red line.
- **Real-time miss interception:** the moment a scheduled visit window opens with no clock-in, ClockCatcher texts the caregiver a one-tap verify link; if ignored, it escalates to an **AI voice call** that confirms presence, captures start/end time, service, and location by voice.
- **Audit-proof reason-code documentation:** every capture generates the state-valid reason code + a timestamped note and (optional) client-confirmation record — the exact evidence auditors demand — instead of a bare "Other."
- **Daily exception worklist:** replaces the manual "review EVV exceptions daily" scramble with a ranked queue of only the visits that still need a human.
- **Threshold early-warning:** alerts the owner *before* the rolling rate crosses the state line, not after the corrective-action letter arrives.
- **Caregiver friction report:** flags which caregivers / which times-of-day generate the most misses, so owners fix the source.
- **Multi-state rule pack:** state-specific thresholds, reason-code lists, and consecutive-quarter logic baked in.

## 6. AI angle — what's load-bearing

Two places. First, the **voice capture**: when a caregiver ignores SMS, an AI voice agent calls and conducts a compliant verification conversation — confirming the six required data points (service type, recipient, caregiver, date, start/end, location) and writing a clean reason-code note. That's only viable now because real-time voice dropped to ~$0.06/min with sub-second latency. Second, **note generation**: turning a messy voice/SMS exchange into audit-grade, reason-code-mapped documentation that survives a state review. Remove the AI and you're back to a coordinator phoning each caregiver and hand-typing notes — i.e., the exact manual labor that creates the problem. The AI is the product, not a garnish.

## 7. Localization angle (if any)

N/A — this is a US-only play by design. The wedge *is* the regulatory localization: per-state EVV thresholds, reason-code tables, and aggregator quirks (HHAeXchange vs. Sandata vs. AuthentiCare). The moat is encoding 15+ state rule packs correctly — there is no global version because EVV is a US Medicaid construct.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** tiered by caregiver count — **$199/mo** (up to 15 caregivers), **$399/mo** (16–50), **$699/mo** (51+). Anchored well below a single avoided clawback and below the $24–36K/yr verification suites quoted for mid-size practices.
- **ACV:** ~$4,000–$5,000.
- **Math to $1M ARR:** ~220 agencies × $375/mo × 12 ≈ $1.0M.
- **Math to $5M ARR:** ~1,100 agencies at the same blended ACV, or fewer agencies with a per-AI-call usage add-on and a "managed exception desk" upsell.
- **Expansion path:** per-state expansion (each new state = new addressable agencies), usage-based AI-call overage, and an upsell where ClockCatcher *fully works* the daily exception queue as a done-for-you service at a higher tier.

## 9. Go-to-market wedge — first 100 customers

- **State Medicaid provider directories are public lists.** Most open-model states publish enrolled HCBS/personal-care provider rosters with addresses. Scrape PA + IL + MD (high-threshold-pressure states), filter to 5–75-caregiver agencies, send a personalized one-pager: *"Your state now holds payment if manual edits exceed 15%. Here's a free 60-second read of your last quarter's rate."* — lead with the threshold, not the feature.
- **Free manual-edit audit as the hook.** Offer a no-cost "where do you stand vs. your state's line" report from a single exported visit file. It's a falsifiable, scary number that converts to a paid pilot.
- **Ride the aggregator transition moments.** When a state announces a new threshold or hard-edit date (frequent in 2026), run targeted outreach + a webinar with a state home-care association. Associations (e.g., PHA, state chapters of HCAOA) have member lists and actively warn about compliance.
- **Billing-company channel.** Outsourced home-care billers ($3–10/visit) feel the manual-edit pain on every claim. Partner: they resell ClockCatcher to their book of agencies; revenue share.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: AI voice (Retell/Synthflow/OpenAI realtime), SMS (Twilio), standard web app, state rule packs as config. Custom work: reliable ingestion of visit/exception data from aggregators — some have APIs (HHAeXchange EDI, Sandata), others need scheduled CSV export sync, which is fiddly per state/aggregator. The compliance-grade note + reason-code mapping must be exactly right per state. A pair can ship a single-state v1 in **10–14 weeks**; multi-state and deeper aggregator integrations push to ~4–5 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | A compliance-assist overlay; reads the agency's own data with consent. No regulated entity status needed. |
| Ethical — no harm / dark patterns | ✅ | Helps agencies capture *true* visits accurately; reduces fraud risk, doesn't manufacture records. Must guardrail against fabricating un-worked visits. |
| Market exists (evidence above) | ✅ | 2026 thresholds, documented payment holds, 5M+ recipients. |
| 1–5 person team can build this | ✅ | Pair ships single-state v1 in ~3 months. |
| Launchable with <$50K / ₹40L | ✅ | API + dev time; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire in 2026: payment holds and corrective-action plans tied directly to a number the agency can't currently control daily. |
| Demand evidence | 15 | 12/15 | Strong regulatory + vendor signals; documented penalties. Light on direct verbatim owner quotes (forums sparse) — verify in interviews. |
| Build feasibility | 15 | 11/15 | Voice/SMS off-the-shelf; aggregator data ingestion per-state is the gnarly part. |
| Distribution clarity | 15 | 11/15 | Public provider directories + association channel + billing-company resellers; conversion math realistic but unproven. |
| Revenue mechanics | 15 | 12/15 | Clear $/caregiver pricing, ACV well below avoided clawback, benchmarked vs. $24–36K suites. |
| Time to first revenue | 10 | 8/10 | Free-audit hook → paid pilot is a weeks-not-months funnel. |
| Defensibility | 10 | 5/10 | Moat = multi-state rule packs + workflow lock-in + aggregator integrations; suites could bolt on a meter, so speed matters. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`operations-heavy` · `domain-expertise-required` — you need someone who understands EVV mechanics state-by-state and can talk credibly to agency owners. Not a pure-tech play.

### Key assumptions to validate (3–5)

1. **Assumption:** Small agencies will pay $199–699/mo to stay under their state's manual-edit threshold. **How to test:** 20 owner interviews + 5 paid pilots from the free-audit hook in PA/IL.
2. **Assumption:** We can reliably ingest visit/exception data from at least HHAeXchange and Sandata without an official partnership. **How to test:** Build the ingestion for one state, confirm export/API access with 3 real agencies.
3. **Assumption:** An AI voice call recovers enough missed clock-ins to materially drop the manual-edit rate (e.g., a 25% rate → under 15%). **How to test:** Run the loop for 3 agencies for one billing cycle, measure before/after.
4. **Assumption:** State auditors accept ClockCatcher-generated reason-code documentation. **How to test:** Have a compliance consultant / state association review sample records.

### Risk flags

1. **Platform dependency:** Aggregators (HHAeXchange et al.) could restrict data export or ship their own meter. Mitigate by being aggregator-agnostic and moving fast on the rule-pack moat.
2. **Regulatory drift:** State thresholds and reason-code lists change often — maintenance burden is permanent (also a barrier to entry, so double-edged).
3. **Ethics / fraud line:** The product must only capture *real* visits. A tool that nudges toward fabricating verification is a compliance and legal landmine — hard guardrails required.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Operations-minded founder with EVV/home-care domain advisor
Time to revenue:        6–10 weeks (free-audit hook → paid pilot)
Capital to launch:      $8–15K ($ for voice/SMS APIs + dev time)
Top 3 assumptions to validate first:
  1. Owners pay $199–699/mo to stay under state threshold — 20 interviews + 5 paid pilots
  2. Reliable HHAeXchange/Sandata data ingestion without partnership — build for 1 state, test on 3 agencies
  3. AI voice loop drops a 25%+ manual-edit rate under 15% — one billing cycle, 3 agencies, before/after
Kill criteria:
  - Abandon if <3 of 20 interviewed owners convert to a paid pilot
  - Abandon if the AI capture loop can't move the manual-edit rate below the state line in pilot data
  - Abandon if a major aggregator ships an equivalent live-meter + capture loop before your multi-state v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape the PA + IL Medicaid HCBS provider directories; filter to 5–75-caregiver agencies; build a list of 200 with owner contacts.
- **Day 3–4:** Cold-email/call 60 with the "free manual-edit audit" offer; for any that send an export, hand-compute their rate vs. the state line.
- **Day 5:** Decide go / no-go on a **falsifiable** bar: **≥5 agencies hand over a visit export AND ≥3 of those are already over (or within 5 points of) their state threshold AND verbally commit to a paid pilot if the loop drops their rate.** Under that, the pain isn't acute enough to bleed — go back to signals.
