---
title: "SelectProof — carrier-selection vault for freight brokers"
slug: freight-broker-carrier-selection-vault
date: 2026-06-04
category: Logistics / US-SMB
complexity: Low
score: 78
verdict: GO
confidence: High
oneLiner: "Auto-captures tamper-proof FMCSA vetting evidence at booking so small freight brokers can defend negligent-selection lawsuits."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Litigation-defense]
axes:
  problem: 17
  demand: 13
  build: 13
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# SelectProof

## 1. One-liner

Auto-captures tamper-proof FMCSA vetting evidence at booking so small freight brokers can defend negligent-selection lawsuits.

## 2. Trend signal — why now?

On **May 14, 2026** the U.S. Supreme Court ruled **9-0 in *Montgomery v. Caribe Transport II*** that state-law negligent-selection claims against freight brokers are **not preempted** by the FAAAA when safety is the issue. Translation: a broker who booked a load with an unsafe carrier that later caused a crash can now be dragged into state court and held personally liable. The federal shield brokers leaned on for a decade is gone.

The whole industry is scrambling. C.H. Robinson started purging carriers by safety score within two weeks of the ruling. Every law firm with a transport practice has published the same advice: **document your carrier-selection process or pay for it in discovery.** The industry-recommended "best practice" right now is comically manual — brokers are told to go to safer.fmcsa.dot.gov, pull the Company Snapshot, **save it as a PDF named `2026-02-19_USDOT-1234567.pdf`**, and stash an approval note next to the load. That's the state of the art. Nobody with 30 loads a day is doing that by hand reliably.

The top 3% of brokerages have compliance teams and enterprise TMS. The other ~24,000 small shops don't. They're the most exposed and the least equipped — exactly the gap.

Provenance:
  - Signal 1 (demand): *Montgomery v. Caribe* SCOTUS 9-0 ruling exposes brokers to negligent-selection suits; law firms uniformly advising "document carrier selection or lose in discovery." — https://www.mwl-law.com/scotus-broker-liability/ — 2026-05-14
  - Signal 2 (feasibility): Current workaround is manually saving FMCSA Company Snapshot PDFs + approval notes; FMCSA SAFER/Company Snapshot data is free and public, trivially snapshot-able and AI-summarizable. — https://otrucking.com/resources/guides/fmcsa-company-snapshot/ — 2026-06-04
  - Signal 3 (economic): ~25,271 active brokers ($160B industry); only ~1,000 make >$10M (have budgets), leaving ~24,000 small shops underserved; incumbents (Highway/MyCarrierPackets) priced at $50–500/seat/mo. — https://www.freightcaviar.com/freight-broker-statistics/ — 2026-01
  Category: Regulatory arbitrage

## 3. The opportunity

The Montgomery ruling instantly created a **compliance liability that didn't exist three weeks ago** for 25,000 businesses. The legal exposure is real, catastrophic (wrongful-death verdicts run into seven figures), and the defense is purely evidentiary: *did you exercise reasonable care, and can you prove it?*

The incumbents don't fit. **Highway** and **Carrier Assure** are real-time *fraud/identity* tools — they tell you if a carrier is who they say *today*. They're priced for 10–50-seat brokerages ($50–500/seat/mo plus per-carrier monitoring). They are not litigation-evidence systems and most small brokers can't afford them. The free workaround (manual PDF saving) fails the moment a busy broker forgets, and a manually-saved PDF has zero tamper-evidence — a plaintiff's lawyer will argue it was backdated.

The 10× play: **SelectProof captures the carrier's full FMCSA safety posture automatically at the exact moment of booking, time-stamps it cryptographically, applies the broker's own written selection criteria, flags red flags, and produces a litigation-ready evidence packet the broker can hand straight to their insurance defense counsel.** Not a vetting tool that competes with Highway — a *defensible record* the broker keeps regardless of which vetting tool (or none) they use.

## 4. Target market

- **Primary customer:** Owner-operator and small freight brokerages in the US — 1 to 15 brokers, roughly $1M–$10M in annual gross revenue, booking 10–100 loads/day. The person who buys is the broker-owner or the ops/compliance lead.
- **Why they buy, in their words:** *"Smaller shops feel the most pressure... higher defense costs, tougher insurance questions, more pressure from shippers to prove how each carrier was selected."* They are scared, their insurer is asking new questions at renewal, and they have no system. They want to sleep at night and pass the insurance audit.
- **Rough TAM reasoning:** ~25,000 active brokers; strip the ~1,000 large shops with enterprise tooling and you have ~24,000 small/mid brokerages. Even 3% penetration at ~$1,800 ACV = ~$1.3M ARR. The serviceable target is the 4,000 shops doing $1M+ that have real load volume and real exposure.
- **Why now for them:** The ruling is three weeks old. Insurance renewals over the next 12 months will ask "show me your carrier-selection program." Brokers without an answer face premium hikes or non-renewal. The buying trigger is external and dated.

## 5. Product sketch (MVP)

- **One-click capture at booking:** paste a USDOT/MC number (or push from TMS), and SelectProof pulls the live FMCSA Company Snapshot, BASIC/CSA scores, authority status, insurance-on-file, and crash/inspection history — and freezes a dated snapshot.
- **Tamper-evident timestamp:** every snapshot is hashed and time-stamped so the record is provably contemporaneous, not backdated — the thing a manual PDF can never claim.
- **Your written selection policy, applied automatically:** broker defines criteria once (e.g. "no conditional safety rating, insurance on file, authority >6 months"); SelectProof checks each carrier against it and records pass/fail with reasons.
- **Red-flag summary in plain English:** AI reads the raw FMCSA data and writes the one-paragraph "why this carrier was acceptable (or flagged)" note that the lawyers say you need.
- **Per-load evidence packet:** every booking gets a permanent, exportable PDF dossier — snapshot + policy check + rationale + timestamp — keyed to the load number.
- **Insurance-audit export:** one click produces the "here is our carrier-selection program and 90 days of records" package an underwriter asks for at renewal.
- **Forgot-to-vet alerts:** flags any booked load that has no evidence record before it ships.

## 6. AI angle — what's load-bearing

Two places AI does real work, not decoration:

1. **Red-flag interpretation & rationale drafting.** Raw FMCSA data is a wall of BASIC percentiles, inspection codes, and out-of-service rates. A small broker doesn't know which numbers matter in a *Montgomery*-style negligence claim. The model reads the snapshot, identifies the litigation-relevant deficiencies (the same categories Montgomery's lawyers used — driver qualification, HOS, maintenance, crash rate), and drafts the defensible written rationale in language that holds up. That's the deliverable lawyers charge $400/hr to produce.

2. **Policy reasoning at scale.** Mapping a broker's plain-English selection criteria onto messy, inconsistent FMCSA fields across thousands of carriers is fuzzy-matching work AI is good at and rules engines are brittle at.

Remove the AI and you're left with a glorified PDF-screenshotter — which is the free workaround. The AI is what turns raw data into a *defense*.

## 7. Localization angle (if any)

N/A — this is a US-only play by design. The entire opportunity is a single US Supreme Court ruling against a single US regulatory dataset (FMCSA). There is no localization wedge and forcing one would dilute the product. The narrowness *is* the moat: a focused US freight-litigation tool beats any generic global compliance suite.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo for solo/small (up to ~30 loads/day), $399/mo for mid (up to ~150 loads/day), usage add-on above that. Anchored well below Highway's per-seat enterprise pricing — affordable for the long tail.
- **ACV:** ~$1,800–$4,800. Call blended ACV ~$2,400.
- **Math to $1M ARR:** ~420 customers × ~$2,400 = ~$1M. Out of 24,000 targets, that's <2% penetration.
- **Math to $5M ARR:** ~1,700 customers (~7% of serviceable base) **or** land a few mid-market shops + an insurance-channel deal (insurers bundling SelectProof as a premium-discount requirement — see GTM). The insurance angle is the realistic $5M lever.
- **Expansion path:** per-load usage as volume grows; add carrier *monitoring* (alert when a previously-vetted carrier's safety score degrades); add a "shipper-facing" report so brokers can prove diligence to their shippers (who are also now nervous). Each is a price-tier bump.

## 9. Go-to-market wedge — first 100 customers

- **The r/FreightBrokers + freight Twitter/LinkedIn panic.** The ruling is the #1 topic in every broker forum right now. Post a genuinely useful "here's exactly what discovery will ask for and a free template" guide, with SelectProof as the automated version. Direct-DM the brokers actively asking "what do I do about Montgomery?" — they are self-identifying daily.
- **Freight insurance brokers & MGAs as a referral channel.** Insurers are the ones asking "show me your selection program" at renewal. A broker-insurance agent who can hand clients a $149/mo tool that lowers their loss exposure looks like a hero. Sign 5–10 agencies; each has hundreds of broker clients. This is the highest-leverage channel and the path to $5M.
- **FMCSA broker directory cold outreach.** The list of 25,000 active brokers with authority is public. Filter to $1M+ shops, send a personalized one-pager: "Montgomery means you now need this — here's a 90-second Loom of your own carriers vetted." Expect low single-digit reply but the list is free and huge.
- **Transport-attorney co-marketing.** Defense lawyers want clients who kept records (easier to defend). Partner with 3–5 firms to recommend SelectProof to their broker clients post-incident and at intake.

## 10. Build complexity — justification

**Low.** FMCSA SAFER/Company Snapshot data is free and publicly queryable; capture + hash + store is a standard web stack; the AI summary/rationale is off-the-shelf LLM calls against a known data shape. No proprietary data, no hardware, no model training. The only real engineering care is the tamper-evidence (hashing/timestamping) and reliable FMCSA data ingestion. A technical founder ships a credible v1 in 6–8 weeks; TMS integrations come later as a fast-follow.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Uses public FMCSA data; helps brokers comply, no legal-advice liability if positioned as evidence capture |
| Ethical — no harm / dark patterns | ✅ | Improves road safety incentives and gives small brokers a fair defense |
| Market exists (evidence above) | ✅ | 25K brokers, three-week-old ruling, uniform legal advice to document |
| 1–5 person team can build this | ✅ | Off-the-shelf data + LLM + standard stack |
| Launchable with <$50K / ₹40L | ✅ | Solo/pair build, free data source, minimal infra |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire: brand-new catastrophic legal exposure, insurer pressure at renewal. Just shy of 20 because the lawsuit is a tail risk, not a daily cash bleed. |
| Demand evidence | 15 | 13/15 | SCOTUS ruling + uniform legal advice + insurer behavior + active forum panic. Multiple independent signals a skeptic would nod at. |
| Build feasibility | 15 | 13/15 | Free public data, off-the-shelf LLM, standard stack. Tamper-evidence is the only non-trivial bit. |
| Distribution clarity | 15 | 11/15 | Clear channels (forums, insurance agents, FMCSA list) but conversion on cold outreach uncertain; insurance channel is leverage but takes time to land. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked below Highway, sane ACV, <2% penetration to $1M. $5M needs the insurance channel. |
| Time to first revenue | 10 | 8/10 | The fear is acute and immediate; can pre-sell during build. Slightly short of 10 because brokers need to feel insurer pressure to pull the trigger. |
| Defensibility | 10 | 4/10 | Data is public; a competitor can copy the capture. Moat is brand-in-niche, insurer relationships, and accumulated per-load record lock-in — real but soft. |
| **Total** | **100** | **78/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone who can ship clean data ingestion + tamper-evidence and who understands (or partners with someone who understands) freight liability and what discovery actually demands.

### Key assumptions to validate (3–5)

1. **Assumption:** Small brokers will pay $149+/mo *now*, before they personally get sued, on fear + insurer pressure alone. **How to test:** 30 cold calls/DMs to $1M+ brokers; measure how many will pre-pay or commit to a paid pilot within 2 weeks.
2. **Assumption:** Insurers/MGAs will treat documented selection as a premium or underwriting factor and refer the tool. **How to test:** interview 8–10 freight-insurance agents; ask if a documented selection program changes how they quote/renew.
3. **Assumption:** Tamper-evident timestamping is a real buying differentiator vs. free manual PDFs. **How to test:** show both to 10 brokers + 2 defense attorneys; see if the integrity story moves the decision.
4. **Assumption:** FMCSA data is reliably accessible at the volume/frequency needed without rate-limit or access problems. **How to test:** build the ingestion spike against SAFER and load-test before committing.

### Risk flags

1. **Defensibility:** Public data means fast clones; an incumbent (Highway) could bolt "evidence locker" onto its product. Mitigate by owning the small-broker + insurance-channel niche they don't serve and accumulating per-load record lock-in.
2. **Platform dependency:** Entirely reliant on FMCSA data access. If FMCSA changes access terms or the data format (they were already overhauling MC numbers in 2025), ingestion breaks. Monitor closely.
3. **Market timing / legal drift:** "Reasonable care" is undefined and will develop through state-by-state litigation. If courts settle on a low bar, urgency softens. Conversely, if a big verdict lands, demand spikes — net upside-skewed but watch it.
4. **Positioning/liability:** Must position as evidence *capture*, not legal advice or a guarantee of defense, or the founder inherits liability.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             High
Best-fit builder:       Technical founder + freight-liability/insurance advisor
Time to revenue:        6–10 weeks (pre-sell during build)
Capital to launch:      $8–15K ($ for infra, LLM usage, FMCSA ingestion build)
Top 3 assumptions to validate first:
  1. Small brokers pre-pay on fear+insurer pressure — 30 cold DMs, measure paid-pilot commits
  2. Insurers refer/reward documented selection — interview 8–10 freight-insurance agents
  3. Tamper-evidence beats free manual PDFs as a buying trigger — demo to 10 brokers + 2 defense attorneys
Kill criteria:
  - Abandon if <10% of 50 cold-outreach brokers show paid interest within 3 weeks
  - Abandon if no insurance agent will refer after 10 interviews (kills the $5M path)
  - Abandon if Highway/MyCarrierPackets ships an equivalent evidence-locker at small-broker pricing before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a no-code mock: take 3 real carriers from the public FMCSA directory, manually produce the SelectProof evidence packet (snapshot + AI-style rationale + timestamp). This is the demo asset.
- **Day 3–4:** DM/call 30 small brokers active in the post-Montgomery forum threads. Show the packet. Ask the only question that matters: *"Would you pay $149/mo for this, and can you start a paid pilot this month?"* In parallel, call 5 freight-insurance agents and ask if a documented selection program changes their renewal terms.
- **Day 5:** Go / no-go. **Go if ≥5 brokers commit to a paid pilot AND ≥2 insurance agents say documented selection affects underwriting.** Falsifiable: if brokers nod but won't commit money, the fear isn't yet a budget — shelve and revisit after the first big post-Montgomery verdict.
