---
title: "DueLane — carrier-selection docket for small freight brokers"
slug: freight-broker-selection-docket
date: 2026-06-27
category: Compliance / US-SMB
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Auto-builds a timestamped, court-ready record of why each carrier was safe to book — the moment you tender the load."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# DueLane — carrier-selection docket for small freight brokers

## 1. One-liner

Auto-builds a timestamped, court-ready record of why each carrier was safe to book — the moment you tender the load.

## 2. Trend signal — why now?

On **May 14, 2026** the Supreme Court ruled 9-0 in *Montgomery v. Caribe Transport II, LLC* that state negligent-hiring claims against freight brokers survive FAAAA preemption. For decades brokers hid behind federal preemption when a carrier they dispatched killed someone. That shield is gone in all 50 states. The plaintiffs' bar is already retooling.

What every law firm is now telling brokers, in writing: **document the carrier-selection process in real time.** Crowell & Moring, Faegre Drinker, Burr & Forman, Hanson Bridgett — all say the same thing. From the industry guidance: *"Screenshot communications and save PDFs as the load happens, not after it goes bad."* And: *"a contemporaneous record of the relevant data evaluated, including but not limited to safety ratings... and how those carriers are periodically reviewed."*

That's not a compliance checkbox. That's a product spec. The court (Kavanaugh concurrence) said brokers who act reasonably and document it **"should be able to successfully defend."** The defense IS the documentation. Nobody is producing it automatically per-load for the small broker.

Meanwhile the market got hit twice in 2026: Montgomery plus the FMCSA registration-modernization rules (MC→USDOT migration, bond changes). Insurers are already signaling that brokers who can't *demonstrate* a systematic, documented selection process will eat bigger premium hikes.

Provenance:
  - Signal 1 (demand): SCOTUS strips broker preemption shield; law firms instruct brokers to keep contemporaneous selection records; "potential extinction event for smaller brokers without mature compliance systems" — https://www.freightwaves.com/news/the-supreme-court-just-stripped-brokers-of-their-biggest-legal-shield + https://www.crowell.com/en/insights/client-alerts/bad-match-big-consequences-supreme-court-holds-freight-brokers-accountable-for-negligent-carrier-selection — 2026-05-14
  - Signal 2 (feasibility): FMCSA SAFER/QCMobile/L&I carrier safety + insurance data is public and API-accessible; LLM+vision can parse insurance certs and assemble a per-load evidence PDF — https://carrierchk.com/blog/freight-broker-carrier-vetting-guide — 2026-06
  - Signal 3 (economic): 120,000+ active US brokerages (+8,000/yr); incumbents (RMIS, Highway) cost $500+/mo and "do not make financial sense" for small brokers; mid-tier (Truckstop/SaferWatch) $99–399/mo; free tools do lookups but no evidence trail — https://carrierowl.com/blog/carrier411-alternatives — 2026-06
  Category: Regulatory arbitrage

## 3. The opportunity

The carrier-vetting market is crowded — RMIS, Highway, Carrier411, SaferWatch, CarrierOwl, CarrierCheck. But they all sell the same thing: **vetting and monitoring.** "Is this carrier OK right now?"

Montgomery changed the question. The question is no longer "is this carrier OK?" — it's **"two years from now, when a plaintiff's attorney deposes you about a crash, can you prove what you knew about this carrier the day you tendered the load, and that you acted reasonably on it?"**

That is a different product. Vetting tools show you a live dashboard. They don't freeze a defensible artifact. A screenshot the day of booking is what the lawyers ask for — and brokers are doing it by hand, inconsistently, or not at all. The incumbents optimize for the buying-decision moment; nobody optimizes for the **litigation moment that arrives 18 months later.**

The wedge: be the cheap, automatic, court-ready evidence layer for the 100,000+ small brokers who can't justify a $500/mo enterprise RMIS seat but just discovered they're personally exposed. Not "better vetting" — **defensible vetting, archived.**

## 4. Target market

- **Primary customer:** Owner-operators and small US freight brokerages — 1 to 20 employees, MC/USDOT broker authority, booking 50–2,000 loads/month. The classic "broker in a spare bedroom" up to a 15-desk shop. Often the owner is also the head dispatcher and the compliance person.
- **Why they buy:** "I just found out I can be personally sued if a truck I booked kills someone, and my lawyer says I need to *prove* I checked the carrier before every load. I don't have RMIS money and I'm not screenshotting SAFER 400 times a month." The fear is fresh, specific, and was on every trade-press front page in May/June 2026.
- **Rough TAM reasoning:** 120,000+ active US brokerages, growing ~8,000/year. Conservatively 80,000 are small enough to be priced out of enterprise tools and scared by Montgomery. At $79/mo that's a ~$75M/yr addressable line even at modest penetration — plenty for a sub-$5M ARR bootstrap.
- **Why now for them:** The liability became real on May 14, 2026. Insurance renewals through late 2026 will explicitly reward documented selection processes. The pain has a calendar date.

## 5. Product sketch (MVP)

- **One-click "Booking Docket":** enter a carrier's USDOT, get an instant snapshot of operating-authority status, safety rating, SMS/BASIC scores, crash/inspection history, and active insurance — pulled from public FMCSA sources at that exact moment.
- **Auto-archived evidence file:** every lookup is frozen as a timestamped PDF + JSON record. This is the artifact a lawyer wants — what you saw, when you saw it, for which load.
- **Selection rationale capture:** broker confirms "selected" or "rejected" with a one-tap reason from a lawyer-vetted dropdown ("active authority, adequate insurance, no red-flag BASICs"). The record now shows a *reasoned* decision, not just a data pull.
- **Red-flag gate:** if authority is inactive, insurance is lapsed, or a safety score crosses a threshold, the docket flashes a warning and logs that the broker was shown it (good defense if they refused the load — and an honest warning so they do).
- **Continuous re-check + alerts:** auto re-pull active carriers on a schedule (quarterly default, configurable), archive each, and alert on status changes — satisfying the "periodically reviewed" standard the courts cited.
- **Insurance-cert reader:** upload or forward a COI; AI extracts limits, expiry, and named insured, flags mismatches against the load, and files it in the carrier's docket.
- **Audit export:** one button produces a clean, chronological PDF binder for a given carrier or load — the thing you hand your defense attorney or insurer.

## 6. AI angle — what's load-bearing

Two places. First, **insurance-certificate and document parsing** — COIs arrive as wildly inconsistent PDFs and faxes; extracting limits, expiry, named insured, and matching them to the load is exactly the vision+LLM task that got cheap and reliable in the last 12 months. Second, **the reasoning summary** — turning a pile of FMCSA data points into a plain-English "why this selection was reasonable" paragraph that a non-lawyer broker can stand behind in a deposition, generated consistently every time.

Strip the AI and you're back to manual screenshotting and a spreadsheet — which is precisely the painful status quo. The AI is what makes per-load documentation take 10 seconds instead of 10 minutes, which is the only way a small broker actually does it on all 400 loads instead of skipping it.

## 7. Localization angle (if any)

N/A — this is a US-only play, and deliberately so. The wedge IS the US-specific regulatory event (FAAAA preemption + Montgomery + FMCSA modernization). The product's entire value is anchored to FMCSA data sources and US state tort law. No localization; the geography specificity is the moat, not a limitation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $79/mo flat for small brokers (unlimited dockets, up to ~500 active carriers monitored); $149/mo for multi-desk shops (more carriers, team seats, priority alerts). Deliberately undercuts the $99–399 mid-tier and the $500+ enterprise tier while doing the one thing they don't: archive court-ready artifacts.
- **ACV:** ~$1,000–1,800.
- **Rough math to $1M ARR:** ~900 brokers × $95/mo blended × 12 ≈ $1.03M. That's ~1.1% of the ~80K small-broker base.
- **Rough math to $5M ARR:** ~4,500 customers, or hold customer count lower and add a per-load "litigation binder export + attorney handoff" upsell and an insurer-facing reporting tier. Realistic only if churn stays low and an insurance-partner channel opens (see GTM).
- **Expansion path:** seats as shops grow; carrier-count tiers; an "insurer report" add-on that lets a broker prove their documented process at renewal for a premium discount — the insurer becomes a co-distributor and the broker's ROI is the discount itself.

## 9. Go-to-market wedge — first 100 customers

- **Ride the ruling's news cycle.** Every freight-broker insurance agent, factoring company, and trade outlet is publishing "what Montgomery means for you." Place a free "Are you Montgomery-ready?" self-audit tool + a one-page sample Booking Docket where they already are: r/FreightBrokers, FreightWaves comment sections, LinkedIn freight groups, and the BrokerCarrier/transportation broker Facebook groups (tens of thousands of members).
- **Cold outreach to fresh authorities.** FMCSA publishes new broker authorities weekly (~8,000/yr). Scrape the new-registrant list, send a short Loom: "You just got your authority — here's the $40K-lawsuit problem nobody told you about, and a 10-second fix." New brokers have no incumbent tool and maximum fear.
- **Insurance-agent channel.** Broker-liability insurers and their agents now *want* clients with documented processes (lower loss ratios). Partner with 3–5 transportation insurance agencies to bundle/recommend DueLane at renewal — their book of business is a pre-qualified list of exactly our buyer.
- **Factoring-company referral.** Freight factors touch thousands of small brokers; a co-branded "compliance-ready" offer is a warm intro.
- **Lawyer-authored content.** Co-publish "the exact docket a defense attorney wants" with a transportation-defense firm — credibility plus SEO on every "Montgomery broker" search.

## 10. Build complexity — justification

**Medium.** The data plumbing is off-the-shelf — FMCSA SAFER/QCMobile/L&I are public and API/scrape-accessible; insurance-cert parsing is a standard vision+LLM job; PDF/JSON archival with tamper-evident timestamps is routine. The non-trivial work is (a) reliable, defensible time-stamping and immutable archival that holds up as evidence, (b) the lawyer-vetted rationale templates and red-flag thresholds, and (c) keeping FMCSA data-source changes from breaking pulls. A technical founder with a transportation-compliance advisor ships v1 in ~10–14 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Uses only public FMCSA data; helps brokers comply, doesn't give legal advice (carry a clear disclaimer). |
| Ethical — no harm / dark patterns | ✅ | Genuinely reduces unsafe-carrier crashes by surfacing red flags; the incentive is aligned with road safety. |
| Market exists (evidence above) | ✅ | 120K+ brokers, dated SCOTUS trigger, funded incumbents, explicit small-broker price gap. |
| 1–5 person team can build this | ✅ | Solo technical founder + compliance advisor. |
| Launchable with <$50K / ₹40L | ✅ | Public data, standard stack, no enterprise sales required to start. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Brand-new personal/business liability with a calendar date. "Extinction event" language in trade press. Hair-on-fire for small brokers. |
| Demand evidence | 15 | 13/15 | Dated SCOTUS ruling, every major firm publishing the same "document it" advice, funded incumbents, explicit price-gap quotes. Slightly short of 15 only because nobody's yet *paying specifically for the evidence-archive cut.* |
| Build feasibility | 15 | 11/15 | Off-the-shelf data + AI parsing, but defensible archival and lawyer-vetted templates need care; ~10–14 weeks. |
| Distribution clarity | 15 | 12/15 | Named lists (new FMCSA authorities, insurance agents, factors, specific forums) with realistic warm channels. Insurer partnership is the unlock but takes time. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked below incumbents; $1M needs ~1% of base. Risk: small brokers are cheap and the "I'll just screenshot it myself" objection. |
| Time to first revenue | 10 | 7/10 | Self-serve trial-to-paid; fear is acute now, so weeks not months — but channel partnerships that drive volume take longer. |
| Defensibility | 10 | 5/10 | Data is public; incumbents could bolt on an "archive" feature. Moat is speed, the evidence-first positioning, lawyer/insurer relationships, and accumulating per-broker history. Execution moat, not structural. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs solid data engineering plus a transportation-compliance/legal advisor to make the artifacts genuinely defensible.

### Key assumptions to validate (3–5)

1. **Assumption:** Small brokers will pay ~$79/mo for *defensible archived* vetting when free lookup tools exist. **How to test:** Cold-pitch 50 brokers from the new-authority list with a sample docket; measure paid-trial conversion. Kill-line: <10% interest.
2. **Assumption:** The artifact DueLane produces is what defense attorneys actually want. **How to test:** Show the docket to 5 transportation-defense lawyers; ask "would this help you defend a negligent-selection claim?" Get written feedback.
3. **Assumption:** Insurers will reward/recommend documented selection at renewal. **How to test:** Interview 5 transportation-insurance agencies on whether they'd recommend or discount for it.
4. **Assumption:** "I'll just screenshot it myself" doesn't kill willingness-to-pay once volume is real. **How to test:** Ask brokers booking 200+ loads/mo how consistently they currently document — measure the honesty gap.

### Risk flags

1. **Platform dependency:** Built on FMCSA data sources. If FMCSA changes access (mid-modernization in 2026), pulls can break. Mitigate with multiple source paths and caching.
2. **Commoditization:** Incumbents (Highway, RMIS, SaferWatch) can add an "evidence archive" feature. First-mover speed + insurer/lawyer relationships are the only durable edge.
3. **Market timing / legal drift:** Lower courts will spend 2026–2028 defining what "reasonable" documentation is. The product spec may need to chase evolving case law — manageable, but a moving target.
4. **Cheap-customer churn:** Small brokers go out of business often and watch every dollar; churn could be high without the insurer-discount ROI hook.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + transportation-compliance/legal advisor
Time to revenue:        6–10 weeks (self-serve trial-to-paid)
Capital to launch:      $15–30K
Top 3 assumptions to validate first:
  1. Small brokers pay ~$79/mo for archived, defensible vetting — cold-pitch 50 new-authority brokers, need >10% paid-trial interest
  2. The docket is what defense attorneys want — written sign-off from 5 transportation-defense lawyers
  3. Insurers will recommend/discount documented selection — interview 5 transportation-insurance agencies
Kill criteria:
  - Abandon if <10% of 50 cold-pitched brokers start a paid trial
  - Abandon if defense attorneys say the artifact wouldn't help in litigation
  - Abandon if an incumbent ships an equivalent evidence-archive feature before your v1 and bundles it free
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a clickable mock of one Booking Docket (real FMCSA data for 3 sample carriers, frozen PDF output). No backend.
- **Day 3–4:** Cold-pitch 50 brokers off the latest FMCSA new-authority list with a 60-second Loom + the sample docket; simultaneously send the docket to 5 transportation-defense attorneys for a yes/no "would this help you defend a claim?"
- **Day 5:** Decide go / no-go. **Falsifiable bar:** ≥6 of 50 brokers ask for early access or start a paid waitlist deposit, AND ≥3 of 5 attorneys say the artifact is litigation-useful. Miss either and it's a no-go or a rework.
