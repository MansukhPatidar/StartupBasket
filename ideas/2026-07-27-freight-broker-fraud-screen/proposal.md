---
title: "LoadVet — pre-booking fraud screen for small freight brokers"
slug: freight-broker-fraud-screen
date: 2026-07-27
category: Logistics / US-SMB — Small Freight Brokerages
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Runs the whole carrier-vetting checklist in 90 seconds before you book, returns a go/no-go, and files the audit trail."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Workflow-automation]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# LoadVet — pre-booking fraud screen for small freight brokers

## 1. One-liner

Runs the whole carrier-vetting checklist in 90 seconds before you book, returns a go/no-go, and files the audit trail.

## 2. Trend signal — why now?

Freight fraud stopped being a nuisance and became an extinction event for small brokers.

- **Cargo-theft losses hit ~$725M across the US and Canada in 2025 — up ~60% year over year.** Double-brokering alone is pegged by the TIA at $700M–$1B/year. This is not a tail risk anymore; a single hit can wipe a small brokerage's margin for the quarter.
- **The playbook is industrialized.** A scammer lifts a legitimate broker's MC number off a public board, spins up a look-alike email domain, spoofs caller ID, books the load, and vanishes. Highway reported blocking **400,000+ sophisticated fraud attempts in Q1 2025 alone.**
- **Regulators finally moved.** FMCSA's **Motus** platform became mandatory for brokers (deadline **May 14, 2026** — live now), and broker **bond increases land July 2026**, with tracking rules following January 2027. The whole industry is being forced to formalize identity and vetting.
- **The manual workaround is absurd.** Small brokers pay virtual assistants to run a "7-step vetting" ritual per load — ghost-calling the FMCSA registry number, WHOIS-ing the email domain, calling the insurance agent, Street-View-ing the carrier's address. It's real, documented, and screaming to be collapsed into software.

The money, the regulation, and the manual pain are all converging in the same quarter. That's the signal.

Provenance:
  - Signal 1 (demand): Cargo-theft losses ~$725M in 2025, +60% YoY; TIA pegs double-brokering at $700M–$1B/yr; brokers run manual 7-step VA vetting per load — https://loadlyapp.com/sl/blog/double-brokering-fraud-crisis-what-brokers-must-do-now-2025-sl and https://virtualnexgen.com/blog/logistics-va-fraud-prevention-double-brokering — 2025/2026
  - Signal 2 (feasibility): FMCSA QCMobile API is free with a Login.gov key and returns carrier authority/safety JSON; WHOIS, phone-reputation, and Street-View checks are cheap API calls — an AI agent can run the full 7-step check in ~90s — https://mobile.fmcsa.dot.gov/QCDevsite/docs/qcApi — 2026
  - Signal 3 (economic): FMCSA Motus mandate (May 14, 2026) + broker bond increases (July 2026); Highway blocked 400K+ fraud attempts in Q1 2025; TriumphPay/Highway/DAT all investing in fraud tooling — but priced for mid/large brokers — https://arktms.com/blog/fmcsa-motus-freight-brokers-2026 — 2026
  Category: Workflow automation

## 3. The opportunity

There are two kinds of anti-fraud tooling in freight today, and both miss the long tail.

**The enterprise networks** — Highway, DAT, Carrier Assure, RMIS — are data-moat plays. They cross-reference a proprietary carrier-reputation graph and sell subscriptions priced for brokerages that book hundreds of loads a day. A three-person brokerage booking 15 loads a day can't justify the seat cost and often can't even get past the sales motion.

**The manual VA ritual** — the small broker's actual defense today — is a human running a checklist: call the FMCSA registry number, not the email in the signature; WHOIS the domain and flag anything under 12 months old; call the insurance agent independently instead of trusting the PDF COI; Street-View the address to catch a UPS-store "headquarters"; check inspection history for equipment mismatches. It works, but it's slow, inconsistent, and — as one broker put it — *"you're paying a $60,000/year broker to do $8/hour administrative tasks, and you're still not 100% sure the vetting was done right."*

LoadVet takes the second group's exact workflow and automates it. Not a reputation database — a **verification agent** that runs every public and cheap-API check the VA runs, on the specific carrier/email/phone/COI you're about to book, and returns a scored go/no-go plus a timestamped, retention-ready record. I'm not trying to out-data Highway. I'm turning a 20-minute manual ritual into a 90-second button for the 25,000+ brokers Highway isn't courting.

## 4. Target market

- **Primary customer:** Owner-operator freight brokerages and small agencies — 1 to ~10 people, booking 10–60 loads/day, US-based, holding an active FMCSA MC (property broker) authority. The kind of shop where the owner still books loads personally and a VA does the paperwork.
- **Why they buy:** *"One bad load and I've eaten my margin for the month — or lost the shipper account entirely."* They know they should vet harder; they don't have the time or the enterprise budget to do it right on every load. They're terrified of double-brokering and of their own MC number being used in a scam.
- **Rough TAM reasoning:** ~27,000–28,000 active US property brokers (FMCSA). Top 1,000 control ~88% of revenue — meaning the long tail is ~26,000 small shops, exactly the segment enterprise vetting ignores. Even 3–4% penetration at a small-shop price clears the ARR target.
- **Why now for them:** Fraud losses spiked 60% in a year, FMCSA is forcing formalization (Motus, bond increases), and shippers are starting to *demand* documented vetting before awarding contracts. "We vet every carrier" is becoming a sales requirement, not just risk hygiene.

## 5. Product sketch (MVP)

- **One-click load screen:** paste or forward the carrier's MC#, email, phone, and COI PDF → get a green/yellow/red verdict in ~90 seconds.
- **FMCSA authority check:** live pull from QCMobile — active/inactive authority, out-of-service status, safety flags, entity mismatch between MC# and the name on the rate con.
- **Impostor-domain detector:** WHOIS domain-age check, look-alike-domain scoring against the legit carrier's known domain, free-email-provider flag.
- **COI cross-check:** OCR the insurance certificate, verify policy dates/limits, flag when the agent/insurer doesn't match FMCSA's on-file insurer.
- **Phone & address sanity:** caller-ID/VOIP reputation flags, Street-View-based address classification (real terminal vs. residential/UPS-store/virtual office).
- **Rate-vs-lane anomaly flag:** "this rate is 30% below market for this lane" — the classic too-good-to-be-true tell.
- **Retention-ready record:** every screen saved as a dated PDF/JSON packet the broker can hand to a shipper, an insurer, or an FMCSA audit — the 3-year retention requirement, handled.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses back into the manual VA checklist. The AI is doing three jobs no rules engine does cleanly: (1) **document understanding** — reading messy, non-standard COI and rate-con PDFs, extracting insurer/policy/limits/named-insured and reconciling them against FMCSA's structured record; (2) **judgment synthesis** — weighing a dozen weak-but-correlated signals (young domain + VOIP number + suspiciously low rate + address is a UPS store) into a single defensible verdict with a plain-English "here's why I flagged this"; (3) **anomaly reasoning** — learning what a normal rate/lane/equipment profile looks like and surfacing the outlier. A dumb checklist gives you 12 disconnected checkmarks; the agent gives you a *decision* and a paragraph the broker can act on in the 90 seconds before the load goes to someone else.

## 7. Localization angle (if any)

N/A — this is a US-only play, and deliberately so. The wedge *is* the regulatory quirk: FMCSA authority, QCMobile data, US double-brokering law, and the Motus/bond timeline. That specificity is the moat against a generic "fraud checker." An India/SEA version would be a different product against different registries. Staying US-native is the right call, not a limitation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** tiered by volume. Starter **$99/mo** (up to ~150 screens), Pro **$249/mo** (up to ~600 screens), plus per-screen overage (~$0.50). Positioned as "one prevented fraud pays for 3+ years."
- **ACV:** ~$2,000–$3,000/year blended (most small shops land on Pro once they trust it and route every load through it).
- **Rough math to $1M ARR:** ~450 brokerages × ~$185/mo avg × 12 ≈ $1M. That's <2% of the ~26,000-shop long tail.
- **Rough math to $5M ARR:** ~1,800 brokerages on the Pro tier, or the same base plus expansion into (a) a per-seat model as brokerages add dispatchers, and (b) a "shipper-facing" tier where shippers pay to require/verify vetting from their brokers. ~7% penetration of the long tail.
- **Expansion path:** overage → seats → shipper-side subscriptions → a paid API so TMS vendors embed LoadVet as their vetting step. Usage naturally grows with the broker's load volume.

## 9. Go-to-market wedge — first 100 customers

- **Fraud-report ambulance-chasing (in the best sense):** brokers who just got burned post about it constantly — Reddit (r/FreightBrokers, r/Truckers), the TIA Watchdog fraud alerts, FreightWaves comment threads, LinkedIn freight-fraud posts. DM every one of them within 48 hours with a free retroactive screen of the carrier that scammed them. Nothing sells a fraud tool like "here's the 4 red flags LoadVet would have caught."
- **Load-board and TMS communities:** the small brokers live in DAT and Truckstop ecosystems and in freight Facebook groups. Post a free "screen your last suspicious carrier" tool as a lead magnet; convert the ones who get a red flag.
- **Insurance & factoring partners:** freight-broker insurers and factoring companies (they eat fraud losses too) will happily co-market a tool that reduces claims. One embedded referral deal = a channel to thousands of small brokers.
- **Cold outreach off FMCSA data:** the broker list is *public*. Filter active property brokers by authority age and size, email a personalized "here's your MC number's fraud exposure" report. Expect a low single-digit reply rate but a high close rate on repliers — the pain is acute.

If a broker who got scammed last month won't take a free retroactive screen, the idea is wrong. I don't think they'll say no.

## 10. Build complexity — justification

**Medium.** The checks themselves are off-the-shelf: FMCSA QCMobile is free JSON, WHOIS/phone-reputation/Street-View are cheap APIs, COI parsing is a vision-model call. The custom work is the orchestration layer (running a dozen checks concurrently, fast), the scoring/verdict logic that has to be *right* and *explainable*, and the OCR-to-FMCSA reconciliation. A technical founder plus a domain advisor ships a credible v1 in ~10–14 weeks. Not a weekend project — the verdict has to be trustworthy — but nowhere near research-grade.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | All data is public/consented (FMCSA, WHOIS, submitted COIs). No scraping of gated systems. |
| Ethical — no harm / dark patterns | ✅ | Reduces fraud; helps small operators. Must avoid false-positive blacklisting — verdicts advisory, not defamatory. |
| Market exists (evidence above) | ✅ | $725M losses, enterprise incumbents charging, manual VA workarounds, active regulation. |
| 1–5 person team can build this | ✅ | Technical founder + domain advisor, ~10–14 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf APIs, no proprietary dataset required to start. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire. One fraud hit can wipe a quarter; brokers actively pay VAs to prevent it today. |
| Demand evidence | 15 | 13/15 | $725M losses, enterprise incumbents charging money, documented manual workarounds, regulatory spend. A skeptic nods. |
| Build feasibility | 15 | 11/15 | Doable in ~10–14 weeks but verdict accuracy and COI reconciliation demand real engineering discipline. |
| Distribution clarity | 15 | 12/15 | Named channels (fraud-report threads, FMCSA public list, insurer partners) with a strong "free retroactive screen" hook; conversion math still needs proving. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked below enterprise, ACV realistic, ARR math needs <2% of a 26K-shop market. One churn/adoption assumption is a guess. |
| Time to first revenue | 10 | 7/10 | Pilot-to-paid in ~4–8 weeks; brokers can start on a paid trial fast once the free screen hooks them. |
| Defensibility | 10 | 3/10 | Thin. The checks are copyable; the moat is execution speed, workflow lock-in, and fraud-pattern data that compounds only over time. Enterprise players could move down-market. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone who can build a fast, accurate multi-source verification agent AND someone who genuinely understands broker workflow and fraud patterns (ideally a freight-industry advisor or ex-broker co-founder).

### Key assumptions to validate (3–5)

1. **Assumption:** Small brokers will route *every* load through a paid tool, not just "suspicious" ones. **How to test:** 20 broker interviews — ask what % of loads they'd screen and whether they'd pay a monthly fee vs. per-screen.
2. **Assumption:** The automated verdict is trustworthy enough that brokers act on it (a red flag actually stops a booking). **How to test:** Run LoadVet retroactively on 50 known-fraud loads from public reports; measure catch rate and false-positive rate.
3. **Assumption:** Free/cheap public data is sufficient without Highway-grade proprietary reputation data. **How to test:** Blind-compare LoadVet verdicts vs. a Highway/DAT verdict on a shared set of carriers.
4. **Assumption:** Insurers/factors will co-market. **How to test:** Pitch 5 freight-broker insurers on a referral pilot; measure willingness.

### Risk flags

1. **Defensibility / incumbent-descent:** Highway or DAT could ship a cheap small-broker tier and use their data moat to win. Mitigate by owning the *workflow* and the small-broker relationship before they bother.
2. **Liability:** A false "green" that lets a fraud through, or a false "red" that defames a legit carrier, is a real legal/reputational risk. Verdicts must be advisory, well-hedged, and logged; needs careful ToS and E&O coverage.
3. **Data dependency:** FMCSA API uptime/rate limits and any future access changes are a single point of failure. Cache aggressively; have fallbacks.
4. **Market timing at the low end:** Freight brokerage is in a rate trough — small shops are cash-strapped. The pitch must be pure ROI ("cheaper than one fraud"), not a nice-to-have.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + freight-industry domain advisor / ex-broker co-founder
Time to revenue:        6–10 weeks (free retroactive screen → paid trial → subscription)
Capital to launch:      ₹4–8 lakh ($5–10K) — mostly API costs and a domain advisor's time
Top 3 assumptions to validate first:
  1. Brokers screen EVERY load (not just suspicious ones) and pay monthly — 20 broker interviews
  2. Automated verdict catches real fraud with low false positives — retroactive test on 50 known-fraud loads
  3. Public/cheap data rivals enterprise reputation data on catch rate — blind compare vs. Highway/DAT
Kill criteria:
  - Abandon if retroactive test catches <60% of known-fraud loads or false-positive rate >15%
  - Abandon if <15% of 40 burned brokers convert a free retroactive screen into a paid trial
  - Abandon if an enterprise incumbent ships a sub-$150/mo small-broker tier before your v1 ships
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 50 documented double-brokering / carrier-fraud cases from public fraud-report threads and TIA alerts. For each, gather the carrier MC#, email domain, phone, address. This is the ground-truth test set.
- **Day 3–4:** Hand-run the 7-step check on all 50 (or wire a rough script against QCMobile + WHOIS + Street View). Measure: what % of the known-fraud loads throw at least two red flags? Simultaneously, DM 40 brokers who posted fraud complaints, offering a free retroactive screen of the carrier that scammed them.
- **Day 5:** Decide **go/no-go** on two falsifiable numbers: (a) **catch rate ≥60%** with a **false-positive rate ≤15%** on the ground-truth set, and (b) **≥15% of the 40 brokers** engage with the free screen and say they'd pay for it on live loads. Miss either → back to signals.
