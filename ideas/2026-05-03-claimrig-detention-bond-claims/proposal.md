---
title: ClaimRig — Detention & bond-claim agent for small carriers
slug: claimrig-detention-bond-claims
date: 2026-05-03
category: Logistics SaaS / US Owner-Operators + Small Fleets (1–10 Trucks)
complexity: Medium
score: 80
verdict: STRONG GO
confidence: Medium
oneLiner: AI agent that turns ELD timestamps into paid detention, accessorial, and BMC-84 bond claims for small US carriers.
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Compliance-driven, Workflow-automation, Owner-operator]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 7
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# ClaimRig — End-to-end detention, accessorial & broker-bond claims for small US carriers

## 1. One-liner

AI agent that turns ELD timestamps into paid detention, accessorial, and BMC-84 bond claims for small US carriers.

## 2. Trend signal — why now?

Three independent forces converging in the first half of 2026:

- **The FMCSA Broker & Freight Forwarder Financial Responsibility Rule went live Jan 16, 2026.** Sureties must now notify FMCSA and initiate cancellation of a broker's bond within 7 days of any unpaid claim. For the first time, small carriers have an enforceable lever against deadbeat brokers — but the lever is useless if you don't know how to pull it.
- **Broker collapse wave.** R&R Family of Companies (R&R Express, RFX, Taylor Express) shut down in January 2026 with **~$65M in unpaid carrier invoices**. AGX Freight Group froze hundreds of loads in late January. Hundreds of owner-operators are scrambling to file BMC-84 surety claims against $75K bond pools that get pro-rated across all claimants — first-in-line wins, latecomers get pennies. Carrier bankruptcies in 2025: **5,000–8,000 firms exited the market**.
- **ATRI: <50% of detention claims get paid** despite 94.5% of carriers charging them. Average lost detention per carrier: **$5K–$15K/year**. Industry-wide loss: **$1.3B/year in driver wages**. Forum quote (TruckersReport, April 2026): *"Lost detention pay again because broker said 'no proof' — waited 4+ hours and my only proof was a handwritten note on the BOL."* The pain is weekly and quantifiable.

The market also has a single competent point solution — **DockClaim** ($49/mo, GPS geofencing for owner-ops) — that proves the wedge but stops at "generate an invoice." The unmet half of the workflow (broker email follow-ups, denial responses, surety bond filings) is still manual and where most lost dollars live.

```
Provenance:
  - Signal 1: ATRI / TRADLINX — 94.5% of carriers charge detention, <50% get paid; $1.3B/yr lost — https://blogs.tradlinx.com/over-90-charge-detention-fewer-than-50-get-paid/ — 2025
  - Signal 2: FMCSA Broker Financial Responsibility Rule effective Jan 16, 2026 — https://www.fmcsa.dot.gov/registration/broker-and-freight-forwarder-financial-responsibility-rule-overview-and-compliance — 2026-01-16
  - Signal 3: R&R/AGX broker collapse leaving hundreds of carriers unpaid (~$65M frozen) + ATRI 91.5% of carriers ≤10 trucks — https://www.overdriveonline.com/business/article/15817227/hundreds-of-carriers-unpaid-after-big-brokers-rr-agx-freight-helix-logistics-shutter — 2026-01
  Category: Regulatory arbitrage
```

## 3. The opportunity

The detention/accessorial dispute workflow is fundamentally a **paperwork loop**: capture timestamps → assemble evidence → email broker → wait → respond to denial → escalate → if broker won't pay, file a $75K BMC-84 bond claim with the right surety in <90 days. Each step is doable manually. None of them are doable consistently by an owner-operator who is also driving 10+ hours/day.

The incumbents miss the point:

- **DockClaim ($49/mo)** stops at GPS-stamped invoice generation. Doesn't draft demand letters, doesn't follow up, doesn't file bond claims, doesn't handle TONU/layover/lumper. Detention-only.
- **Toro TMS, AscendTMS, McLeod ($3K–$15K+/yr)** are full TMS suites where detention tracking is a tab. Way too expensive and complex for a 1-truck carrier; no automated dispute escalation.
- **Freight collection law firms** charge 25–35% contingency on bond claims. Carriers avoid them because the math kills the recovery on small claims.
- **Factoring companies (Triumph, RTS, eCapital)** advance against the invoice but don't recover unpaid accessorials and explicitly exclude them from advance.

The wedge is the **end-to-end agent**: capture event → generate evidence package → email the broker → handle the denial → escalate to bond claim with the right surety, all without the carrier writing a single email. AI does what a $35K/yr A/R clerk would do, for $99/mo.

## 4. Target market

- **Primary customer:** Owner-operators (1 truck) and small fleets (2–10 trucks) running broker freight in the US. Dry van and reefer mostly, with some flatbed. Title: owner / dispatcher (often the spouse). Revenue: $200K–$2M/yr per truck.
- **Why they buy:** Every week, 1–3 of their loads sit at a shipper or receiver for 3+ hours. They invoice for detention. Half the time the broker pays. The other half, the broker says "we need proof" or ghosts. The owner-operator is too tired after a 14-hour shift to fight it. Annualized loss: **$5K–$15K per truck**. They've heard about the new FMCSA rule but don't know what BMC-84 means or how to file. Pain felt **weekly**, often **daily**.
- **Rough TAM reasoning:** ATRI 2025: ~750K active US motor carriers. **91.5% (~687K) operate ≤10 trucks**. **54.4% (~408K) are 1-truck.** Conservative target: 50K paying customers in 5 years × $1,200 ACV = $60M ARR ceiling. Even 1% capture (7,500 customers) = $9M ARR. Realistic Year 2 capture: 1,000 customers = ~$1.2M ARR.
- **Why now for them:** R&R/AGX collapse spooked the entire small-carrier community in Jan 2026. Forums are full of "how do I file a bond claim?" threads. FMCSA tightened enforcement Jan 16, 2026. Sureties are now obligated to initiate cancellation within 7 days of insolvency — first claimant in line wins.

## 5. Product sketch (MVP)

- **Auto-capture wait events.** ELD integration (Motive, Samsara, KeepTruckin, Geotab — open APIs) detects arrival/departure at shipper/receiver. Geofence + GPS timestamp. No driver action required.
- **One-tap evidence package.** Driver photographs the BOL/POD, ClaimRig OCRs the in/out times, cross-references with ELD, and bundles into a PDF with rate confirmation, GPS map, ELD log excerpt, and signed BOL. Court-grade.
- **AI drafts the broker email.** Claim is auto-emailed to the broker's billing contact (pulled from the rate confirmation) with the evidence package attached. Polite, firm, references the specific contract terms.
- **Denial → response automation.** When the broker replies "we don't pay detention without check-in/out times," ClaimRig drafts the rebuttal citing the BOL stamp and GPS. Three-stage follow-up cadence: 7 / 14 / 30 days.
- **Accessorial coverage beyond detention.** TONU, layover, lumper reimbursement, fuel surcharge gaps. Each with its own evidence template.
- **Surety bond claim 1-click escalation.** When 60 days pass without payment, ClaimRig pulls the broker's MC# from SAFER, identifies the surety company, formats the claim per that surety's specific intake (each one is different — Travelers wants form A, Pacific Financial wants affidavits, etc.), and submits within the 90-day window. Tracks payout.
- **Carrier-side dashboard.** "Money owed to you: $4,820 across 12 brokers. Money recovered this month: $1,950." Single number that sells the renewal.

## 6. AI angle — what's load-bearing

AI does three things a human A/R clerk does and a TMS rule engine can't:

1. **Drafts dispute letters that sound human.** A $50/load detention claim doesn't justify a lawyer. Templates feel canned and brokers ignore them. LLMs can produce contract-cite-anchored prose that varies per claim, references the specific rate confirmation language, and adapts tone to the broker's last reply.
2. **Reads denial emails and responds in context.** Brokers reply with reasons ("no in/out times on BOL", "outside the 4-hour grace per our master agreement", "we need check-in confirmation from your driver"). Each requires a different evidence pull. AI parses the denial, picks the right counter-evidence, and replies. No human in the loop for >70% of disputes.
3. **Translates surety-specific filing requirements.** Each of the ~15 active broker-bond sureties has different intake forms, document orders, claim-period interpretations. AI normalizes the carrier's evidence package into whichever surety's format is needed, in <5 minutes vs. the 2-hour DIY path.

Strip the AI out and you have a glorified TMS module. The AI is the product.

## 7. Localization angle (if any)

N/A — this is a US-only play tied to FMCSA regulation and the BMC-84/BMC-85 surety bond regime. Canada has analogous mechanisms (CTA bond) but the volume and broker bankruptcy frequency is much lower. Stay focused on US until $5M ARR, then evaluate Canada as adjacent expansion.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Owner-Op tier — $79/mo** per truck (1-truck), unlimited claims, basic accessorials.
  - **Small Fleet tier — $59/mo per truck** (2–10 trucks), volume discount, multi-driver.
  - **Bond Claim Boost — flat $149 per BMC-84 filing** OR **8% contingency** on recovered bond amount (carrier picks). Carrier always nets more than going DIY because most miss the 90-day window and recover $0.
- **ACV:** $79/mo base + ~3 bond claims/yr × $149 = ~$1,400/yr per truck average. Recovered-money upsell pushes to $1,800.
- **$1M ARR math:** ~700 paying trucks × $1,400 ACV. Achievable in 12–18 months in a market of 687K eligible carriers if even 1 in 1,000 converts.
- **$5M ARR math:** ~3,500 trucks. 0.5% market penetration. Needs paid acquisition + factor partnerships kicking in, but no enterprise sales required.
- **Expansion path:** Per-truck SaaS scales naturally with fleet size. Upsells: bond-claim contingency tier, factoring partner referrals (kickback from Triumph/RTS for warm leads), carrier-protect bundle (legal + bond filing + insurance audit), shipper-side product (sell the same evidence to shippers for in-house dispute defense).

## 9. Go-to-market wedge — first 100 customers

1. **R&R/AGX bond-claim lead magnet.** Stand up a free tool: "Are you owed money by R&R Express, AGX Freight, or Helix Logistics? File your BMC-84 claim before the 90-day window closes." Pull MC# lookups from SAFER, generate a draft claim packet, capture email. **Hundreds of carriers actively searching this query right now.** Target 200 leads in 30 days, convert 15% to a paid SaaS trial after they file the free claim.
2. **Trucking subreddit + forum cold outreach.** r/Truckers (350K+), r/Trucking, ClassADrivers, TruckersReport. Reply to detention/non-payment threads with a specific answer + free claim audit offer. Expect 50–100 replies/week, ~5% trial-to-paid conversion.
3. **Owner-op podcast tour.** Overdrive Radio, Trucker Dump, Bret's Big Rig Banter — owner-op-only audience, hosts will trade 2 episode mentions for a flat $500 sponsorship. 3 podcasts × 10K listeners × 0.5% = ~150 trials.
4. **Factoring company partnership.** Triumph Business Capital, RTS, eCapital factor 50K+ small carriers. Their pain is unpaid accessorials they don't advance against. Embed ClaimRig as a referred add-on; they kick 10% revshare. One signed partner = 10K+ warm pipeline.
5. **Truck stop flyering + ELD integration QR.** Pilot Flying J / Loves driver lounges. QR code → "Are you owed detention? Free 30-day audit." Cheap, geo-targeted, and the audience is literally sitting in detention while reading it.

If lead magnet #1 doesn't pull 200 R&R/AGX-affected leads in 30 days at <$5 CAC, the broader funnel is broken — go back to step 2.

## 10. Build complexity — justification

**Medium.** ELD API integrations (~5 vendors, but they have OpenAPI docs and dev sandboxes), LLM-driven email generation/parsing, OCR for BOL stamps, FMCSA SAFER lookup, surety filing automation (15 sureties, scrape + form-fill, manual fallback for outliers). 1 senior full-stack + 1 AI engineer + 1 ops/domain person ships v1 in **10–14 weeks**. The hard part isn't engineering — it's encoding the surety-specific filing rules and broker-specific dispute templates. That's domain knowledge, not infra. Buy a freight-claims attorney 4 hours/month to keep the templates current. Pre-build hardcoded surety profiles for the top 10 (covers ~85% of all active broker bonds).

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | We're not practicing law — we're document-prep + claim filing, same as Stamps.com or LegalZoom for small claims. |
| Ethical — no harm / dark patterns | ✅ | Net positive: carriers get paid what they're owed under existing contracts. |
| Market exists (evidence above) | ✅ | ATRI, FMCSA, broker bankruptcy news, DockClaim's existence. |
| 1–5 person team can build this | ✅ | 3 people in 14 weeks. |
| Launchable with <$50K / ₹40L | ✅ | $20K covers domain expert retainer + LLM costs + first 6 months of infra. |

All gates pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire for the affected segment. Weekly money loss, quantified. Slightly under 20 because not *every* carrier hits R&R-class collapse — average pain is $5–15K/yr, real but not existential. |
| Demand evidence | 15 | 13/15 | ATRI hard data, FMCSA regulatory unlock, named broker bankruptcies, forum complaints, DockClaim's traction. Multiple independent signals. |
| Build feasibility | 15 | 11/15 | 10–14 weeks for 3 people. Real domain encoding work (15 sureties, dispute templates) but no novel ML or hardware. |
| Distribution clarity | 15 | 12/15 | R&R lead magnet is a named, urgent, time-bound channel. Subreddit + podcast tour validated for trucking SaaS. Factoring partnership is real but slow. |
| Revenue mechanics | 15 | 12/15 | $1,400 ACV with clear upgrade path. Sub-$5M ARR achievable on hundreds of customers. Mild risk on contingency model adoption. |
| Time to first revenue | 10 | 8/10 | First paid in week 4 from lead magnet, conservative. Free → paid trial conversion is the question mark. |
| Defensibility | 10 | 7/10 | Surety-rule library + broker dispute templates + outcome dataset = a flywheel. DockClaim could expand into this; legal-tech competitors won't bother below $5M ARR. 3-month head start matters. |
| **Total** | **100** | **80/100** | STRONG GO |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

A solo non-technical founder won't ship this. A solo technical founder without trucking/freight-broker exposure will misjudge surety filing nuance and broker dispute language. Best-fit team: 1 engineer with workflow-automation chops + 1 person who has either dispatched freight, worked in factoring, or done freight collections. Hire a freight-claims attorney for 5 hrs/month from day one.

### Key assumptions to validate (3–5)

1. **Assumption:** Owner-operators will pay $79/mo for end-to-end claim automation, not just $49/mo DockClaim-style invoice generation. **How to test:** R&R-affected lead magnet → offer $79/mo trial with 30-day money-back. Need 15% trial-to-paid in first cohort.
2. **Assumption:** AI-drafted dispute emails win >50% of denials without human escalation. **How to test:** Hand-process 50 real dispute cases through prompted GPT-4-class models, score reply quality vs. broker payment outcome. Kill if <40% win rate.
3. **Assumption:** Surety bond claim filing can be normalized across the top 10 sureties in <2 weeks of domain work. **How to test:** Acquire actual claim packets from 5 sureties (FMCSA Licensing & Insurance database is public), document differences. If any surety blocks API/form automation hard, scope it as manual-assist tier.
4. **Assumption:** ELD vendors will allow write-of-record integration via OAuth without partner-tier blocking. **How to test:** Spike Motive + Samsara dev sandboxes in week 1. Both have docs. Geotab is the wildcard.
5. **Assumption:** FMCSA Jan 16, 2026 rule is genuinely accelerating bond cancellations vs. pre-rule baseline. **How to test:** Pull pre/post rule cancellation data from FMCSA Licensing & Insurance for Q1 2026 vs. Q1 2025.

### Risk flags

1. **Platform dependency (ELD vendors).** If Motive or Samsara restricts API access or launches a competing detention-claim feature, our auto-capture story weakens. Mitigation: support manual photo + voice note capture as a fallback path, don't require ELD integration on day one.
2. **Regulatory drift.** FMCSA could weaken the new rule under industry lobbying or extend the compliance date again (it's been kicked twice already). Product still works without the regulatory unlock — bond claims have been allowed since the 1980s — but the urgency narrative softens.
3. **Concentrated default risk.** If a carrier files 5 bond claims that all hit a near-empty $75K pool, our contingency tier loses. Cap contingency exposure per surety; revert to flat $149 fee for high-risk pools.
4. **DockClaim expansion.** They have first-mover and a brand. They'll likely expand into accessorial/follow-up territory. Compete on end-to-end (their stop-at-invoice posture is the gap), price slightly higher with included bond-claim service. Don't try to out-DockClaim DockClaim on detention-only.
5. **Broker pushback / blacklisting.** Heavy auto-dispute could get carriers informally blacklisted by repeat-offending brokers. Mitigate with tone calibration in AI templates and an opt-in "aggressive" mode the carrier toggles.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       Technical founder + freight-domain operator (factoring/dispatch/collections background)
Time to revenue:        4–6 weeks from soft launch via R&R/AGX lead magnet
Capital to launch:      $15K–$25K (domain attorney retainer + LLM costs + 6 mo infra)
Top 3 assumptions to validate first:
  1. R&R-affected lead magnet pulls 200+ leads at <$5 CAC in 30 days
  2. AI-drafted dispute emails win >50% of broker denials in 50-case manual trial
  3. Top 10 surety filing flows can be encoded in <2 weeks of domain work
Kill criteria:
  - Abandon if R&R lead magnet pulls <50 leads in 30 days at any reasonable CAC
  - Abandon if trial-to-paid conversion <8% across first 100 trials
  - Abandon if DockClaim launches end-to-end bond claim filing within 6 months at <$79/mo
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Stand up a one-page lead magnet — "R&R Express owes you money? Free BMC-84 claim packet generator. Filed in 5 minutes." Hand-build the first 10 packets. Post once in r/Truckers, r/Trucking, TruckersReport, ClassADrivers.
- **Day 3:** Phone-interview 10 owner-ops who downloaded the packet. Ask: weekly hours lost on collection, what they'd pay/mo for an end-to-end agent, what they tried before, do they have an ELD with API access.
- **Day 4:** Build a Stripe checkout for $79/mo "claim agent" — no product behind it, just a manual concierge service for 10 carriers. Charge the card. Did anyone pay?
- **Day 5:** Decide go / no-go. **Falsifiable threshold: 50+ lead-magnet downloads, 5+ booked phone interviews, ≥3 paid trial signups by EOD Friday.** Anything less = signal weaker than projected, rework the wedge or kill.
