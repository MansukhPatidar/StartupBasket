---
title: "VerifyDesk — comp verification desk for CRE appraisers"
slug: comp-verification-desk
date: 2026-08-03
category: PropTech / US-SMB — Certified General Appraisers & Small Commercial Valuation Firms (1–15 Staff)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Chases the brokers, pulls the deed, and builds the verification record behind every comp you cite."
tags:
  vertical: PropTech
  model: SaaS
  geography: US
  secondary: [AI-agent, Voice-first, SMB, Compliance-driven, Workflow-automation]
axes:
  problem: 16
  demand: 12
  build: 10
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# VerifyDesk

## 1. One-liner

Chases the brokers, pulls the deed, and builds the verification record behind every comp you cite.

## 2. Trend signal — why now?

Three things moved at once, and they point at the same three hours of an appraiser's week.

**The capacity gap is now measurable, not anecdotal.** The number of certified general appraisers grew 0.1% from 2020 through 2025 while unique certified generals producing work declined more than 20% over five years — against commercial real estate loan volume growing 6% annually at all banks ([ABA Banking Journal, June 2026](https://bankingjournal.aba.com/2026/06/effective-strategies-for-managing-an-appraiser-shortage/)). The ASC National Registry showed 40,751 active certified general appraisers as of June 29, 2026 ([Appraisal Buzz analysis of ASC data](https://appraisalbuzz.com/analysis-of-2025-asc-appraisal-license-data/)). Appraisal Institute data for 2026 shows volume growing faster than the count of actively producing appraisers for the first time since 2022 ([Appraisal Institute, July 2026](https://www.appraisalinstitute.org/insights-and-resources/insights/newsroom/appraisal-now/20260707-appraisal-insights)). Busy appraisers book three weeks out; rural and underserved markets add two to three weeks to a deal ([HousingWire](https://www.housingwire.com/articles/appraisal-industry-challenges/)).

**The bottleneck is a known, quantified chunk of the job.** On AppraisersForum, practitioners break a typical commercial assignment at 35–45 hours total, with courthouse research at 3 hours, MLS research at 1 hour, and phone-call research at 1–2 hours ([Average commercial report time thread](https://appraisersforum.com/forums/threads/average-commercial-report-time-if-there-is-such-a-thing.130522/)). One appraiser: *"It usually takes at least three hours to get the lease/rent comps and sales verified for a 'typical' property, not including the property inspection."* This is not the analysis. This is chasing people.

**The verification standard has teeth but no tooling.** USPAP Standards Rule 1-4 requires the appraiser to *"collect, verify, and analyze all information necessary for credible assignment results"* — but as the Appraiser's Advocate notes, USPAP *"does not define what 'to verify' means or how the appraiser is to carry out this task"* ([Appraisal Buzz, USPAP and Verification](https://appraisalbuzz.com/uspap-and-verification/)). The workfile is what a state board demands when a complaint opens — Oregon gives a respondent 30 days to produce the entire workfile ([OAR 161-006-0160](https://regulations.justia.com/states/oregon/chapter-161/division-6/section-161-006-0160/)). USPAP's Record Keeping Rule requires retention 5 years after preparation ([McKissock](https://www.mckissock.com/appraisal/uspap/understanding-uspap/uspap-record-keeping-rule/)). So the least glamorous hour of the week is also the hour that defends your licence.

Meanwhile the software category has decided this problem doesn't exist. Valcre, Narrative1, Datappraise, DataComp and LightBox all compete on *writing the report* and *storing the comp*. None of them go get the comp verified.

```
Provenance:
  - Signal 1 (demand): Appraisers self-report 3+ hours per assignment on sales/lease verification — courthouse 3h, MLS 1h, phone research 1–2h of a 35–45h report — https://appraisersforum.com/forums/threads/average-commercial-report-time-if-there-is-such-a-thing.130522/ — observed 2026-08-03
  - Signal 2 (feasibility): County recorder/deed data now available via unified APIs — ATTOM at ~$0.10/call across 2,690+ counties, BatchData from $500/mo across 3,200+ sources — plus production-grade outbound voice agents shipping on Product Hunt through July 2026 — https://www.attomdata.com/data/transactions-mortgage-data/recorder-data/ + https://www.producthunt.com/categories/ai-voice-agents — observed 2026-08-03
  - Signal 3 (economic): Certified general count grew 0.1% 2020–2025 while unique producing certified generals fell >20%, against 6% annual CRE loan volume growth; appraisers book 3 weeks out — https://bankingjournal.aba.com/2026/06/effective-strategies-for-managing-an-appraiser-shortage/ — observed 2026-08-03
  Category: Workflow automation
```

## 3. The opportunity

Every commercial appraisal report cites four to eight comparable sales. For each one, USPAP expects the appraiser to do more than copy a number off a listing site. They need to know: did it actually close, at what price, was it arm's length, was there seller financing, was it a portfolio deal allocated across assets, was the buyer a related party, what were the conditions of sale. The only reliable way to get that is the deed plus a human on the phone — a listing broker, a title officer, a buyer's rep.

So the appraiser spends three hours a report playing phone tag. Brokers don't call back. As one forum thread on verification put it plainly, direct agent response to verification requests is rare. The appraiser leaves voicemails, sends emails, waits, follows up, and eventually writes *"attempted verification with listing broker; unable to confirm"* into a report they'd rather not have to caveat.

Here's the gap. The incumbents — **Valcre** (most expensive of the category, per practitioner comparisons), **Narrative1** (~$1,000/user/year as of a 2021 forum data point, ExactBid-owned since 2015), **Datappraise** (cheapest), **DataComp**, **LightBox** — all solved *report assembly*. They give you templates, math, and a comp database. **CoStar** and **CompStak** and **Trend** ($35/user/mo) sell you the comp *record*. Nobody sells you the *verification of that record*, and nobody sells you the *evidence trail* proving you tried.

That's the 10× cut. An AI agent that (a) pulls the recorded deed and grantor/grantee from the county record, (b) calls and emails every party to the transaction on a persistent schedule until someone confirms, (c) transcribes what they said, and (d) drops a timestamped, USPAP-shaped verification memo into the workfile. Three hours becomes fifteen minutes of reviewing what came back.

The reason this is fresh: until roughly the last 12 months, the "call the broker" step was irreducibly human. Outbound voice agents were too brittle for a real conversation with a hostile, busy commercial broker. That changed. And unified county recorder APIs mean the deed pull no longer means a trip to the courthouse or a per-county scraper.

## 4. Target market

**Primary customer:** The owner or senior appraiser at a 1–15 person commercial appraisal firm in the US — a certified general holding an MAI or working toward it, billing $2,500–$8,000 per assignment, running 3–8 active files at a time. Second-tier buyer: the review/valuation desk at a community bank or credit union that keeps 1–3 in-house appraisers.

**Why they buy:** Because verification is the part of the job that is simultaneously (a) unbillable in any meaningful sense, (b) impossible to delegate to a trainee who can't get callbacks either, (c) the first thing a state board asks for, and (d) the reason a report slips a week. The forum voice on this is consistent: appraisers know *what* verification requires and resent *how long* it takes. One practitioner comparing software noted his tooling saved him nothing — *"The time savings hasn't been significant."* Another, running a five-person shop, described the actual felt problem as coordination waste: *"there are five of us and we would like to have a central location to store all of our comps...unknowingly rewrite comps that someone else has already written."* That's the same wound. Verified comps are expensive to produce and the firm keeps producing them twice.

**Rough TAM reasoning:** 40,751 active certified general appraisers in the ASC registry (June 2026). Cut to those doing commercial fee work at small firms — call it 12,000–18,000 realistic seats, clustered in maybe 4,000–6,000 firms. At $200–400/seat/month that's a $30M–$85M addressable line. Small enough that CoStar won't chase it, big enough for a $5M ARR business. That's exactly the shape I want.

**Why now for them:** Capacity is the binding constraint. When you're booked three weeks out and volume is growing faster than the appraiser count, every hour you claw back converts directly into another billable assignment. This is not a cost-savings pitch — it's a throughput pitch to people who are turning work away.

## 5. Product sketch (MVP)

- **Comp intake** — paste an address, APN, or drop a comp from your existing database. VerifyDesk figures out what needs verifying.
- **Deed pull** — recorded instrument, grantor/grantee, consideration, date, and instrument type retrieved from county recorder data, attached automatically.
- **Party discovery** — identifies the listing broker, title company, and buyer/seller representation from the record plus listing history.
- **Persistent outbound chase** — an AI voice agent calls each party on a schedule (call, voicemail, follow-up email, second call at a different hour, escalation to the office line), and stops the moment it gets confirmation.
- **Structured confirmation capture** — asks the specific questions that matter: did it close, at what price, arm's length, financing terms, deferred maintenance, portfolio allocation, conditions of sale. Transcribes and structures the answer.
- **Verification memo** — a timestamped, USPAP-shaped record for the workfile: who was contacted, when, by what method, what they said, and what remains unverified. Exportable as PDF into the file.
- **Firm-wide verified comp library** — every comp your firm verifies once is verified for everyone, with the provenance attached. Kills the duplicate-work complaint directly.
- **Unverified flag** — tells you before you certify which comps in the report are still standing on unverified data.

## 6. AI angle — what's load-bearing

Remove the AI and this product is a spreadsheet and a summer intern who can't get brokers to call back. The AI is doing three things a human currently does badly:

**The call itself.** A voice agent that can hold a two-minute, domain-specific conversation with a commercial broker — introduce itself honestly as an automated assistant working on behalf of a named appraisal firm, ask six specific questions, handle "who is this?" and "I'm driving" and "let me check" — is the entire product. This is exactly the class of thing that became reliable in the last year and was not viable in 2024.

**Persistence at zero marginal cost.** A human appraiser gives up after two attempts because attempt three costs them another twenty minutes. An agent that retries across days, hours-of-day, and channels costs cents. Verification rates go up *because* the thing chasing doesn't get tired or embarrassed.

**Extraction into a defensible record.** Turning "yeah that one had about 200 grand of roof work the buyer ate, and it was a 1031 so he was motivated" into structured fields — conditions of sale, buyer motivation, deferred maintenance adjustment — plus a verbatim transcript, is the piece that makes the output workfile-grade rather than a note.

Honest caveat: this is AI as a labor substitute, not AI as judgment. The appraiser still decides whether the comp is usable and how to adjust it. That boundary is deliberate — the moment this thing starts opining on value, it's practicing appraisal without a licence and the liability profile changes completely.

## 7. Localization angle

`N/A — this is a US-only play.` The wedge is specifically the USPAP verification standard, the ASC-licensed certified general population, and US county recorder data availability. Canada's CUSPAP is close enough that a phase-two expansion is plausible, but nothing about India, LatAm, or SEA improves this product. Forcing a localization angle here would be theater.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $299/user/month base including 40 verified comps, then $6 per additional verified comp. Firm plan at $249/seat for 5+ seats with the shared verified-comp library.
- **ACV:** ~$4,600 for a typical 1.3-seat solo/small shop; ~$16,000 for a five-seat firm. Blended target ACV $7,500.
- **Rough math to $1M ARR:** 135 firms at $7,500 blended. At 40,751 certified generals nationally, that's a rounding error of the licensed population — roughly 2–3% of the small commercial firms I estimate exist.
- **Rough math to $5M ARR:** ~670 firms, or ~2,500 seats. Requires the shared-library effect to pull whole firms rather than individual appraisers, plus the bank valuation-desk segment carrying maybe 20% of revenue. This is the real bet: does a solo trial convert the firm?
- **Cost floor to watch:** each verified comp costs real money — county record call (~$0.10–0.50), voice minutes across multiple attempts, transcription. Call it $1.50–3.00 per successful verification at the low end and worse on hard comps that take eight attempts. At $6 marginal that's tight but workable; the base subscription is what carries gross margin. **If average attempts-to-verification runs above six, the unit economics need repricing to usage-first.** I'd rather find that out in month two than month twelve.
- **Expansion path:** seats first, then verified-comp volume, then the lease-comp equivalent (harder, more valuable), then selling anonymized verified-comp coverage back to the bank valuation desks that already buy evaluations.

## 9. Go-to-market wedge — first 100 customers

This is a small, findable, loud profession. That's the whole reason I like it.

- **The ASC National Registry is a public list of every licensed appraiser in the country, with credential type and state.** Filter to certified general, cross-reference against firm websites to find the 1–15 person commercial shops, and you have a named target list of a few thousand — not a guess, an actual list. Personalized cold email with a demo comp: *"we verified a sale in your county, here's the memo, took nine minutes."* That specificity is the pitch.
- **Run the product on your prospect's own market before you email them.** Pick 200 appraisers, pull one recent commercial sale in each of their counties, actually verify it, and send them the finished verification memo unsolicited. Cost per prospect is a few dollars. This is a demo that can't be argued with. Expect 15–20% reply, 5% to trial.
- **AppraisersForum.com is where this profession argues in public** — the software comparison threads I sourced above run for pages. Participate honestly as a builder, not a marketer. The same crowd that dissects Valcre vs Narrative1 pricing line by line will dissect this, publicly, and that thread becomes the top search result for "appraisal comp verification."
- **Appraisal Institute chapters run local meetings in every major metro.** ~90 chapters. Sponsor or present at ten of them in year one for a few thousand dollars each; the audience is literally the buyer, in a room, with a name badge.
- **Trainee/PAREA angle.** With PAREA now letting candidates log experience hours without a supervisor, and supervisors historically refusing trainees because trainees slow them down, a tool that makes a trainee's verification work as good as a senior's is a direct answer to a stated objection. Partner with PAREA providers.

## 10. Build complexity — justification

**Medium.** The report-writing side is off the shelf — I'm not competing with Valcre on documents. The custom work is three integrations and one hard loop: county recorder data normalization across a long tail of counties (buy ATTOM/BatchData coverage, accept gaps in the worst counties and flag them honestly), an outbound voice agent with a domain script and real call-state handling, and structured extraction into a workfile-shaped artifact. Call it 14–18 weeks for two people to a credible v1, with the first 6 weeks going almost entirely into making the voice agent not embarrassing on a real broker call. The gnarly part isn't technical — it's that a bad call damages the customer's professional reputation, so the quality bar on that agent is unusually high for an MVP.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Recording disclosure required — agent discloses it's automated and states which firm it represents; two-party-consent states handled by consent prompt at call open. No appraisal opinion is rendered, so no unlicensed-practice exposure. |
| Ethical — no harm / dark patterns | ✅ | Agent identifies itself as automated on every call. Brokers can opt out of future contact permanently. Persistence is bounded, not harassment — hard cap on attempts per party. |
| Market exists (evidence above) | ✅ | 40,751 certified generals; incumbents charging $1,000–$3,000+/user/yr for adjacent tooling; documented 3h/report pain. |
| 1–5 person team can build this | ✅ | Two people, 14–18 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Data API commitments and voice minutes are the main line items; ~$25–35K to a paying pilot. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, recurring, quantified at 3+ hours per assignment, and tied to licence risk via the workfile. Not hair-on-fire — appraisers have lived with it for 30 years and built workarounds — but it's felt on every single file, and capacity constraints have made the hours newly expensive. |
| Demand evidence | 15 | 12/15 | Multiple independent signals: quantified time breakdowns from practitioners, a documented and worsening capacity gap, incumbents charging real money for adjacent tooling, public forum threads dissecting the category. What's missing is direct evidence anyone has asked for *this specific* product — no one is posting "I'd pay for a comp verification service." Docking 3 for that. |
| Build feasibility | 15 | 10/15 | Standard stack plus three integrations, but the voice agent quality bar is high and county data coverage is genuinely uneven. 14–18 weeks for a pair. |
| Distribution clarity | 15 | 12/15 | ASC registry is a public, filterable list of every buyer in the country, and the pre-verified-comp cold outreach is a demo that costs $3 to produce. Docking 3 because converting a solo trial into a firm-wide seat expansion is unproven. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked against Narrative1 (~$1,000/user/yr) and CoStar ($1,000–2,000/mo) — $299/mo sits credibly between. 135 firms to $1M is achievable. Docked because per-verification COGS is the one number that could break the model and I don't know it yet. |
| Time to first revenue | 10 | 8/10 | Pre-sellable off the pre-verified-comp demo before the product is finished. Realistic first dollar 6–8 weeks post-launch; pilots earlier. |
| Defensibility | 10 | 4/10 | This is the weak axis and I won't dress it up. Valcre or LightBox can bolt verification onto an existing distribution base. The only real moat is the accumulating corpus of verified comps with provenance — genuinely valuable at month 18, worth nothing at month 3. Execution-speed moat only. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can ship a production voice agent that doesn't humiliate the customer, and you need a certified general in the building — as cofounder or a paid advisor with equity — because the difference between a verification memo that survives a state board complaint and one that doesn't is invisible to an outsider.

### Key assumptions to validate (3–5)

1. **Assumption:** Commercial brokers will answer a disclosed AI agent's verification questions at a rate comparable to or better than a human appraiser's callback rate. **How to test:** Run 100 real verification calls manually-supervised across three metros before writing product code. Measure confirmation rate and hostility rate. This is the assumption the whole company rests on.
2. **Assumption:** Appraisers will accept an AI-gathered verification into their workfile without the perceived liability making them uncomfortable. **How to test:** Put the actual memo artifact in front of 20 certified generals and 3 state-board-experienced attorneys. Ask directly: would you certify a report resting on this?
3. **Assumption:** Average attempts-to-successful-verification is ≤4, keeping COGS per comp under $3. **How to test:** Instrument the 100-call pilot in assumption 1 and count.
4. **Assumption:** A solo appraiser trial converts to firm-wide seats. **How to test:** Land 10 solo trials at multi-person firms, measure how many expand within 90 days.
5. **Assumption:** County recorder API coverage is good enough in the counties small commercial firms actually work. **How to test:** Take the 200-prospect target list, attempt a deed pull in each of their primary counties, measure hit rate. Below 70% and the product has an honesty problem.

### Risk flags

1. **Incumbent bolt-on risk:** Valcre or LightBox adds verification as a feature to an installed base you'd need three years to reach. Mitigated only by moving fast and by the verified-comp corpus compounding — but this is a genuine threat, not a hypothetical one.
2. **Voice agent reputational risk:** One badly-behaved call to a broker who then posts about it on AppraisersForum is worse than no marketing at all. In a profession this small and this vocal, reputation is the distribution channel and it's fragile in both directions.
3. **Data coverage risk:** County recorder coverage is genuinely uneven. Rural markets — where the appraiser shortage is worst and the need is highest — are exactly where the data is thinnest. There's a real chance the product works best where it's needed least.
4. **Regulatory ambiguity:** USPAP doesn't define "verify." Today that's the opportunity. If the Appraisal Foundation issues guidance that verification requires direct appraiser contact, the product's core value proposition takes a serious hit overnight.
5. **Market timing:** The capacity gap is what makes hours valuable. If CRE lending volume drops hard, appraisers stop being capacity-constrained and this becomes a cost-savings pitch to people with time on their hands. Much weaker sale.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can ship a production voice agent,
                        paired with a certified general appraiser as cofounder or
                        equity advisor. Two people.
Time to revenue:        6–8 weeks post-launch; paid pilots achievable earlier
                        off the pre-verified-comp demo.
Capital to launch:      $25–35K (data API commitments, voice minutes, 4 months runway)
Top 3 assumptions to validate first:
  1. Brokers answer a disclosed AI agent at a usable rate — 100 supervised
     real calls across 3 metros, measure confirmation and hostility rates
  2. Appraisers will certify a report resting on an AI-gathered verification
     memo — show the artifact to 20 certified generals and 3 board attorneys
  3. COGS per verified comp stays under $3 — instrument the pilot, count
     attempts-to-verification
Kill criteria:
  - Abandon if broker confirmation rate on disclosed AI calls is below 35%
    across the 100-call pilot (human baseline appears to be roughly 40–60%)
  - Abandon if fewer than 8 of 40 cold-outreach prospects who receive a free
    verified comp memo agree to a paid pilot
  - Abandon if average attempts-to-verification exceeds 6, making per-comp
    COGS uneconomic at any price the market will bear
  - Abandon if Valcre or LightBox ships native verification before your v1
```

## 15. Next step — 1-week validation sprint

The entire company is one question: *will a commercial broker talk to a robot about a closed deal?* Everything else is engineering. So spend the week finding out.

- **Day 1:** Pull the ASC registry, filter to certified general, build a 200-name list of small commercial firms across three metros with different data-coverage profiles — one major metro, one mid-size, one rural-adjacent. Pull 30 recent commercial sales across those counties from a trial ATTOM key. Measure deed-pull hit rate as a free side result.
- **Day 2–3:** Stand up a rough outbound voice agent with the six-question verification script and honest AI disclosure. No product, no UI, just the call. Run 100 real calls to real listing brokers and title officers on those 30 sales. Log: pickup rate, confirmation rate, hostility rate, attempts-to-confirmation, and whether the answers are structured enough to be usable.
- **Day 4:** Take the transcripts and produce 5 finished verification memos in workfile format. Send each to the appraiser whose county it came from, cold, with one question: *"would you put this in your file?"*
- **Day 5:** Decide.

**Go if:** broker confirmation rate ≥35%, average attempts ≤4, and ≥3 of 5 appraisers say they'd put the memo in their workfile.

**No-go if:** confirmation rate is under 35%, or appraisers flag the memo as a liability rather than an asset. Both are falsifiable in five days for under $2,000, and either one kills the idea cleanly — which is the point.
