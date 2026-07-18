---
title: "CarrierClear — carrier-vetting dossier for freight brokers"
slug: freight-broker-carrier-vetting-dossier
date: 2026-07-18
category: Logistics / US — Small & Mid Freight Brokerages
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Builds a timestamped, court-ready record of why you cleared each carrier — the reasonable-care proof Montgomery now demands."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder, Legal-defensibility]
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

# CarrierClear — carrier-vetting dossier for freight brokers

## 1. One-liner

Builds a timestamped, court-ready record of why you cleared each carrier — the reasonable-care proof Montgomery now demands.

## 2. Trend signal — why now?

On **May 14, 2026** the Supreme Court ruled **9-0 in *Montgomery v. Caribe Transport II, LLC*** that freight brokers can be sued under state law for negligently selecting unsafe carriers — the FAAAA's federal preemption shield is gone. Overnight, the defense that killed these suits at the pleading stage evaporated. The industry press is not being subtle: FreightWaves ran "The Supreme Court just told every freight broker that they can be sued." Broker-defense firms (Crowell & Moring, Burr & Forman, Hinshaw, Gordon Rees) are all publishing the same instruction — *document your carrier selection contemporaneously, per load, with who decided and why.*

The kicker is who's exposed. Defense counsel are openly calling this "a potential extinction event for brokers, particularly smaller brokers without mature compliance systems." There are **~120,000 FMCSA-licensed brokerages**, but only ~800–1,000 clear $10M/yr and ~3,000 clear $1M/yr. The other **~116,000 are small shops** with no compliance stack — and they just inherited litigation exposure they can't paper over.

The tooling gap is real and admitted. FreightWaves, June 2026: *"A broker handling 50 loads a day cannot manually check six federal databases for every carrier on every load and document every finding in a timestamped record with a reviewer's name attached — that is not a workflow, that is a fantasy. A documented vetting process is now what protects you in court."*

Provenance:
  - Signal 1 (demand): SCOTUS *Montgomery v. Caribe* strips broker preemption; defense bar tells brokers to document per-load carrier selection — https://www.supremecourt.gov/opinions/25pdf/24-1238_1b7d.pdf / https://www.crowell.com/en/insights/client-alerts/bad-match-big-consequences-supreme-court-holds-freight-brokers-accountable-for-negligent-carrier-selection — 2026-05-14
  - Signal 2 (feasibility): FMCSA SAFER/A&I data is free and public; cheap LLMs can read a carrier's safety profile, apply a broker's criteria, and generate a defensible narrative record per load — https://www.freightwaves.com/news/the-carrier-vetting-tech-stack-is-the-new-line-of-defense-in-freight — 2026-06
  - Signal 3 (economic): Enterprise vetting tools (Highway, RMIS) are sales-led and priced out of small shops ("paying $500+/month does not make financial sense"); modern mid tools (CarrierOwl $79–149/mo) sell lookups + monitoring but none market an audit-trail / reasonable-care record — https://carrierowl.com/blog/carrier411-alternatives — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

Every incumbent solves the wrong half of the problem post-*Montgomery*. Highway, RMIS, MyCarrierPortal, Carrier411, CarrierOwl all answer **"is this carrier OK right now?"** — identity, fraud, live authority/insurance status. That's *screening*. None of them answer the question a plaintiff's attorney will ask in deposition three years later: **"Show me what you checked on the day you tendered this specific load, what your standard was, who cleared it, and why."** That's *defensibility* — a contemporaneous, immutable, per-load record.

The gap is documented in the market's own words: the CarrierOwl comparison page lists eight tools and their features; **none mention documentation, audit trails, or reasonable-care records.** SAFER is free but "raw" — brokers screenshot it into spreadsheets that a defense lawyer will shred. The enterprise tools bury a log somewhere but sell on fraud, not on producing the one PDF a broker hands their insurer and their attorney.

CarrierClear is a focused play: not a better SAFER lookup, not a fraud engine. It is the machine that turns each load's carrier check into a **signed, timestamped, court-ready dossier** — built around one broker's written vetting standard — for the 116,000 small shops that can't afford Highway and can't survive discovery on a spreadsheet.

## 4. Target market

- **Primary customer:** Owner-operators and ops managers at **small US freight brokerages** — 1 to ~25 people, roughly $500K–$10M gross revenue, tendering 10–150 loads/day. The person who signs the broker-carrier agreement and would be deposed. Secondary: freight agents operating under a larger broker's authority who carry personal exposure.
- **Why they buy (their words):** "One bad wreck with a carrier I booked and a plaintiff's lawyer proves I didn't vet them — that's my house." They are not buying software; they are buying a *litigation shield* and lower insurance friction. Post-*Montgomery* their E&O/contingent-auto underwriters are already asking what their documented process is.
- **Rough TAM reasoning:** ~116,000 sub-$10M brokerages. Even 3% penetration at ~$150/mo ACV ≈ 3,480 customers × $1,800 = **$6.3M ARR**. This is comfortably a sub-$5M business at 2–3% penetration and has real headroom above it.
- **Why now for them:** The shield they relied on for a decade is gone as of May 2026, the defense bar is telling them exactly what to do, and their insurers are starting to price the difference between "has a documented process" and "doesn't."

## 5. Product sketch (MVP)

- **Per-load vetting run:** enter or import a carrier's MC/DOT, and CarrierClear pulls FMCSA authority, insurance-on-file, safety rating, and out-of-service/BASIC signals, then applies *your* saved criteria.
- **Reasonable-care dossier (the product):** a one-page, timestamped PDF per load — what was checked, the source, the values, which rule flagged/cleared it, the human who approved, and a plain-English narrative of why the carrier met the standard.
- **Your standard, written down once:** a guided setup that turns a broker's vetting policy into explicit clear/flag rules (min insurance, disallowed safety ratings, authority age, OOS thresholds) — so the dossier proves you applied a *consistent* standard, not a vibe.
- **Immutable audit log:** every dossier hashed and archived for the 5–7 year retention window defense counsel recommend; nothing editable after sign-off.
- **Red-flag stop:** if a carrier trips a hard rule (unsatisfactory rating, lapsed insurance), the run blocks and records the refusal — the *"we said no"* record is as valuable as the *"we said yes"* one.
- **Re-check on re-book:** booking a carrier you cleared last month re-runs the check and stamps a fresh dossier, closing the "point-in-time is no longer enough" gap.
- **Discovery export:** one click produces the full carrier's-worth or date-range bundle a broker's attorney or insurer can hand over.

## 6. AI angle — what's load-bearing

Pull the data and you have a lookup — that's the free part everyone already has. The load-bearing AI work is **reading a messy, heterogeneous carrier safety profile and writing the defensible reasoning a court accepts**: normalizing BASIC percentiles, authority history, and insurance filings into a consistent narrative ("cleared: authority active 4y, no OOS orders, cargo + auto liability exceed contract minimums; no conditional rating") — and doing it identically across 50 carriers a day so the *record itself* demonstrates consistent care. Remove the AI and you're back to a broker hand-typing justifications into a Word doc, which is exactly the "fantasy" workflow FreightWaves called out. The AI is what makes per-load documentation actually happen at 50 loads/day instead of being skipped.

## 7. Localization angle (if any)

N/A — this is a US-only play by construction. The entire opportunity is a US Supreme Court ruling interpreting US federal preemption over US state negligence law, anchored on FMCSA data. There is no meaningful localization wedge; the "localization" here is deep US freight-regulatory specificity, which is the moat, not a barrier.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** tiered SaaS. **Solo/agent $49/mo** (low volume, single user), **Brokerage $149/mo** (multi-user, monitoring re-checks, archive), **Team $349/mo** (bulk, API into their TMS, priority). Priced deliberately *under* Highway/RMIS and in line with CarrierOwl, because the buyer is the shop that already said $500/mo "does not make financial sense."
- **ACV:** ~$1,800 blended (weighted toward the $149 tier).
- **Rough math to $1M ARR:** ~560 brokerages × $149/mo × 12 = **$1.0M**. That is 0.5% of the small-broker universe.
- **Rough math to $5M ARR:** ~2,300 paying shops blended, or a mix including a few hundred Team-tier + a TMS-embed/reseller deal. Requires becoming the default "reasonable-care record" small brokers reach for — plausible if insurers start asking for it.
- **Expansion path:** seats as shops grow; usage on load volume; an **insurance-facing tier** where an E&O underwriter co-brands/requires CarrierClear for a premium credit (turns the buyer's cost into a discount — strong pull).

## 9. Go-to-market wedge — first 100 customers

- **Ride the fear wave where it's already loud:** the FMCSA licenses ~8,000 new broker authorities/year and there are active broker communities (r/FreightBrokers, FreightWaves comment threads, LinkedIn broker groups) where *Montgomery* is the topic of the month. Post the plain-English "here's the record your attorney will ask for" explainer + a free single-dossier generator as the lead magnet.
- **Cold-target the exposed list:** FMCSA A&I registration data is public — filter to newer/small brokerages, send a personalized "here's what your carrier dossier for [a load you ran] would look like" sample. Freight is a phone/email business; a concrete artifact converts.
- **Partner with the messengers:** the broker-defense law firms and freight-insurance brokers publishing the *Montgomery* alerts are actively telling clients "document your process." Offer them a co-branded template + referral — they need something concrete to point clients at, and CarrierClear is that thing.
- **Freight factoring & TMS resellers:** small brokers already sit inside a factoring or light-TMS relationship; a bundle/referral reaches them where they operate.
- **Insurance credit as the closer:** approach 2–3 contingent-auto/E&O underwriters to recognize a CarrierClear-documented process for a premium credit — the strongest possible "first 100" flywheel.

## 10. Build complexity — justification

**Medium.** The data plumbing is off-the-shelf-ish — FMCSA SAFER/A&I is public and there are commercial carrier-data feeds to license for reliability. The hard parts are (a) a *credible* rules engine and narrative generator whose output actually reads as defensible to a litigator, and (b) an immutable, exportable audit-log store with real retention integrity. No novel ML, no hardware. A technical founder with a freight-compliance advisor ships a credible v1 in ~10–14 weeks; the advisor (or a transportation attorney's blessing) is non-negotiable because the product's entire value is legal credibility.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Uses public FMCSA data; helps brokers meet a court-defined standard. Must avoid implying it's legal advice. |
| Ethical — no harm / dark patterns | ✅ | Improves road safety incentives and honest recordkeeping. |
| Market exists (evidence above) | ✅ | 116K small brokers, SCOTUS-driven urgency, admitted tooling gap. |
| 1–5 person team can build this | ✅ | Data + rules engine + PDF/audit store; standard stack. |
| Launchable with <$50K / ₹40L | ✅ | Data feed license + inference + hosting; well under the cap. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire and existential for small brokers as of May 2026; "my house" stakes. Docked slightly because pain is *fear of a future event*, not a daily cash bleed. |
| Demand evidence | 15 | 13/15 | SCOTUS ruling, unanimous defense-bar guidance, priced-out small segment, admitted tooling gap. Missing only direct verbatim buyer quotes. |
| Build feasibility | 15 | 11/15 | Public data + rules + audit store; the "reads as defensible in court" bar and retention integrity add real work. |
| Distribution clarity | 15 | 12/15 | Public target list, hot communities, natural law-firm/insurer channel partners. Conversion of fear→spend on a preventative is the uncertainty. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked below incumbents; $1M ARR needs only ~0.5% penetration. Preventative-purchase churn risk. |
| Time to first revenue | 10 | 7/10 | 10–14 wk build, but the topic is white-hot now; pre-sell to worried brokers during build is realistic. |
| Defensibility | 10 | 5/10 | Data is public and rules are copyable; moat is the accumulating archive, the insurer relationships, and being first to own "the reasonable-care record" positioning — execution + timing, not IP. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs solid engineering plus a freight-compliance or transportation-law advisor whose credibility the product borrows.

### Key assumptions to validate (3–5)

1. **Assumption:** Small brokers will pay a monthly preventative fee for a litigation record before they've been sued. **How to test:** 30 cold calls/DMs to sub-$5M brokers with a sample dossier; measure how many pre-order or join a paid pilot.
2. **Assumption:** A generated dossier is genuinely persuasive as *reasonable-care* evidence. **How to test:** put a sample dossier in front of 3–5 transportation-defense attorneys and ask, blind, "would this help your client survive summary judgment?"
3. **Assumption:** Insurers will recognize a documented process for a premium credit. **How to test:** pitch 3 contingent-auto/E&O underwriters; a single soft "yes, we'd consider it" de-risks GTM enormously.
4. **Assumption:** Reliable, affordable carrier data at small-broker price points is licensable (not just scraped SAFER). **How to test:** get quotes from 2–3 carrier-data providers at target volumes.

### Risk flags

1. **Incumbent expansion:** Highway/CarrierOwl could bolt on a "dossier export" in a quarter. Mitigation: move fast, own the *reasonable-care* narrative and insurer relationships, not just the feature.
2. **Legal-credibility risk:** if a court ever discounts a CarrierClear dossier, the value proposition takes a hit. Mitigation: attorney-reviewed templates, conservative language, never claim to *guarantee* a defense.
3. **Market timing / fear decay:** urgency is peak now; if litigation is slower to materialize than feared, buying intent could soften before habit forms. Mitigation: sell the insurance-credit and operational-consistency benefits, not just fear.
4. **Platform dependency:** reliance on FMCSA data availability/format. Mitigation: license a redundant commercial feed.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + freight-compliance / transportation-law advisor
Time to revenue:        8–14 weeks (pre-sell during build)
Capital to launch:      $15–35K (data feed + inference + hosting + advisor)
Top 3 assumptions to validate first:
  1. Small brokers pre-pay for a preventative litigation record — 30-broker cold outreach with sample dossier
  2. A generated dossier reads as real reasonable-care evidence — blind review by 3–5 transportation-defense attorneys
  3. An E&O/contingent-auto underwriter will recognize it for a premium credit — 3 underwriter pitches
Kill criteria:
  - Abandon if <10% of 50 cold-outreach small brokers show buying intent within 4 weeks
  - Abandon if a majority of the reviewing attorneys say the dossier wouldn't materially help a defense
  - Abandon if Highway or CarrierOwl ships a marketed reasonable-care-dossier feature before your v1 and locks the positioning
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build one *real* sample dossier by hand from public FMCSA data for a plausible load — the artifact you'll sell with. Draft the vetting-standard→rules mapping for a typical small broker.
- **Day 3–4:** Get the sample in front of 3–5 transportation-defense attorneys (blind ask: "does this help a client survive summary judgment?") and DM/cold-email 30 sub-$5M brokers offering a paid pilot with the sample attached.
- **Day 5:** Decide go / no-go on a **falsifiable** bar: **≥5 of 30 brokers express concrete buying intent (pre-order, paid pilot, or "take my card") AND ≥3 of 5 attorneys say the dossier would materially help a defense.** Miss either and the idea waits or dies.
