---
title: "TruthDesk — AI fact-correction desk for local business"
slug: ai-fact-correction-desk
date: 2026-08-09
category: HomeServices / US-SMB — Single-Location Home Service and Health Practices ($400K–$5M Revenue) Whose Phone, Hours and Services Are Wrong in the AI Answers Half Their Customers Now Use
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Chases the stale listing that makes ChatGPT hand your customer a competitor's phone number, until the answer flips."
tags:
  vertical: HomeServices
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Solo-builder, Local-search, Workflow-automation]
axes:
  problem: 15
  demand: 13
  build: 11
  distribution: 12
  revenue: 10
  time: 7
  defensibility: 5
founderFit: [technical-heavy, content-heavy]
featured: false
---

# TruthDesk

## 1. One-liner

Chases the stale listing that makes ChatGPT hand your customer a competitor's phone number, until the answer flips.

## 2. Trend signal — why now?

Three things moved at once, and they moved fast.

**Consumers switched channels in a single year.** BrightLocal's 2026 Local Consumer Review Survey (1,002 US adults, representative SurveyMonkey panel) found the share of consumers using AI to find local business recommendations went from **6% to 45% in one year**. AI is now the #3 discovery channel — ahead of Yelp and Tripadvisor, behind only Google and Facebook. ChatGPT specifically was used by 31% of consumers for business recommendations; Google AI Mode by 23%. Among 30–44 year olds — the people who buy HVAC systems and book dentists — adoption is 64%.

**The answers are wrong at an absurd rate.** A July 2026 Search Engine Journal report found AI tools serve incorrect location data, hours, or service details in **nearly half** of local business answers, and that **93% of businesses have at least one fact wrong or missing** in AI answers. SOCi's 2026 measurement put business-profile accuracy on ChatGPT and Perplexity at 68% on average, versus near-perfect on Gemini. The 5W Hallucination Index (May 2026), which asked models 25 core business questions per brand, found 20% of answers contained material errors.

**Search stopped sending clicks.** 68% of US Google searches ended without a click in early 2026. AI Overviews now appear in 80%+ of local service queries, up from ~20% in early 2024. The overlap between pages cited in AI Overviews and Google's top 10 collapsed from 75% in mid-2025 to 17–38% by early 2026 — which means a business can hold every ranking it ever had and still watch leads die, with no dashboard anywhere showing why.

Put those together and you get a specific, ugly mechanic: a homeowner asks ChatGPT for an emergency electrician, gets your name, dials a number you disconnected three years ago, and books your competitor. You never learn the call existed.

The older Yext consumer research (May 2022, 1,000+ US consumers) sizes the downstream damage on the simplest possible error: 44% had visited a closed location because hours were wrong, and 73% said they were unlikely to return to a business that was listed open but found closed. That study predates AI search — it establishes the baseline cost of a wrong fact, not the new trend.

```
Provenance:
  - Signal 1 (Demand): BrightLocal 2026 Local Consumer Review Survey — consumers using AI to find local businesses jumped 6% → 45% in one year; AI is now the #3 discovery channel — https://www.brightlocal.com/research/lcrs-ai-trust/ — 2026
  - Signal 2 (Feasibility): AI tools serve wrong location/hours/service data in ~half of local business answers; 93% of businesses have ≥1 fact wrong or missing (Search Engine Journal, July 2026); SOCi 2026 puts ChatGPT/Perplexity profile accuracy at 68% — https://stanislav-peev.com/research/ai-wrong-business-information-statistics/ — July 2026
  - Signal 3 (Economic): Zero-click reached 68% of US Google searches; AI Overviews appear in 80%+ of local service queries; AIO-citation vs top-10 overlap collapsed from 75% to 17–38% — https://searchengineland.com/google-zero-click-searches-2026-study-479717 — early 2026
  - Supporting: Local Falcon reviewers note tracking tools are "only half the job (you'll still need a tool to act on the data)" — https://gbppromote.com/local-falcon-review/ — 2026
  - Supporting (dated baseline): Yext research — 44% of consumers visited a closed location due to wrong hours; 73% unlikely to return — https://www.stocktitan.net/news/YEXT/ — May 2022
  Category: Platform shift
```

## 3. The opportunity

There are already eight tools that will tell you AI is wrong about you. Profound, Peec, Otterly, Local Falcon, Birdeye Search AI, Yext Scout, and a rotating cast of GEO startups all run prompts, screenshot the answers, and hand you a score.

Not one of them fixes anything.

Read Local Falcon's own guidance on AI hallucinations and it terminates in homework: audit your descriptions, locate the problematic sources, expand your digital presence. Read any of the two dozen agency blog posts on the topic and you get the same five-step manual workflow — trace the error to its source, correct the source-of-truth pages, publish corrective crawlable content, file feedback inside each engine, monitor until it propagates. That is a week of tedious work per error, repeated per engine, for a plumber who does not have a marketing person.

The gap is the verb. Everyone sells **detection** to marketing teams at $25–$332/month per seat, priced per tracked prompt, designed for brand managers who want share-of-voice. Nobody sells **remediation** to the single-location operator who just wants the phone number to be right.

And remediation is genuinely hard in a way that's worth money: the citation shown under an AI sentence is frequently not where the claim came from. Correcting the page you were shown often doesn't change the answer. Finding which of forty stale directory entries, old press mentions, aggregator records, and abandoned profiles is actually feeding the model is detective work — exactly the kind of multi-source, fuzzy, repetitive reasoning task that got cheap in the last 12 months and stayed expensive in human hours.

The incumbents won't chase this. Birdeye's real first-year cost for a small business runs $4,000–$6,000 with annual contracts and setup fees; their business is multi-location enterprise, and G2 reviewers from small businesses repeatedly flag per-location pricing as the barrier. A $99/month single-location remediation product is beneath their sales motion and would cannibalize nothing they want to keep.

## 4. Target market

- **Primary customer:** Owner-operator or office manager at a single-location US service business doing $400K–$5M revenue, where one job is worth $300–$8,000 and inbound phone calls are the revenue engine. Concretely: HVAC, plumbing, electrical, roofing, auto repair and collision, dental and orthodontic practices, med-spas, veterinary clinics. 2–30 employees. Usually one person loosely "handles the website."

- **Why they buy:** Because a lost call is not an abstraction to them. For a plumbing company with a $3,000 average job, one misrouted call is $3,000. They already believe in this category — they pay for Google Ads, they pay for review management, they have been sold local SEO for fifteen years. What they've never been able to buy is proof that the AI answer is wrong plus somebody to go fix it. The pitch that lands is not "improve your AI visibility score." It is: *here is a screenshot of ChatGPT giving your customer the wrong number, and here is the date we made it stop.*

- **Rough TAM reasoning:** The US has roughly 700K+ home service contractor businesses, ~200K dental practices, ~30K veterinary clinics, and ~160K auto repair shops. Restrict to single-location operators above $400K revenue who already spend on digital marketing and you're looking at a serviceable pool in the low hundreds of thousands. At $99–$249/month, capturing 800 of them is $1.4M ARR. This does not need to be a big market to work.

- **Why now for them:** Their lead mix shifted underneath them inside twelve months. 67% of contractors surveyed in 2025 already reported declining lead quality. Their rankings look fine and their phone rings less, and every SEO agency they call gives them a different story. The BrightLocal 6%→45% jump is the thing that turned this from a curiosity into a channel they are losing.

## 5. Product sketch (MVP)

- **The wrong-answer inbox.** We ask the engines the questions your customers actually ask — "emergency plumber near [suburb]", "is [business] open Sunday", "what does [business] charge for a crown" — across ChatGPT, Google AI Overviews/AI Mode, Perplexity, and Gemini, from the geographies you serve. Every answer gets checked against your verified truth record. You see only the ones that are wrong, with the screenshot and the date.

- **Severity triage, in dollars not scores.** A wrong phone number and a slightly stale service list are not the same emergency. Errors are ranked by revenue exposure — wrong/disconnected phone, wrong address, wrong hours, competitor attribution, and pricing errors sit at the top; tone and description issues sit at the bottom.

- **Source tracing.** For each wrong fact, we hunt the origin: which directory entry, aggregator record, old press mention, abandoned social profile, or stale page still carries that exact string. You get a ranked list of the specific URLs feeding the error, not a lecture about entity consistency.

- **The correction run.** One click launches the actual remediation sequence — generate and file the Google Business Redressal complaint, correct the Bing Places record that feeds ChatGPT, submit per-engine feedback with the specific correction, produce the corrective crawlable page and schema on your own domain, and generate the outreach emails to third-party directories that need a human to update them. We draft everything; you approve.

- **Propagation watch.** We keep re-asking the same question on a schedule until the answer flips, per engine. Corrections land unevenly — Perplexity may turn in a week while the same fact persists in ChatGPT for months — so the product's job is to keep score until each one is actually done.

- **The proof-of-fix report.** A one-page, dated before/after: here was the wrong answer on this date, here is the correct answer on this date, here is what we filed. This is the artifact that renews the subscription and the one an agency forwards to its client.

- **New-fact broadcast.** When you change your hours, phone, or service list, that becomes a correction run across every source and engine automatically — instead of the change quietly propagating over the following eighteen months.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product, in two separate places.

First, the monitoring surface *is* AI — the thing being audited is a set of generative answers that differ per phrasing, per geography, and per session. You cannot rank-track this. You have to interrogate it in natural language, at volume, from many angles, and semantically compare free-text answers against a structured truth record to decide whether "open until 5" contradicts "closes at 5:30." That comparison is a judgment call on prose, not a string diff.

Second, and this is the harder half: source tracing is a fuzzy multi-document reasoning problem. Given a wrong claim and forty candidate sources across directories, press, social profiles, aggregators, and archived pages, determine which ones plausibly generated it — knowing the cited link often isn't the real origin. Then draft engine-appropriate correction filings and outreach for each one. Doing that by hand takes an experienced local SEO several hours per error. Doing it with cheap inference takes minutes and is the entire reason this can be sold at $99 rather than $2,000.

The load-bearing test: if inference cost were what it was in 2023, the unit economics of running hundreds of prompts per customer per month plus multi-document tracing would not clear a $99 price point. It does now.

## 7. Localization angle (if any)

N/A — this is a US-first play, deliberately. The wedge depends on the specific correction rails: Google Business Profile's redressal complaint form, Bing Places feeding ChatGPT, and a mature US directory/aggregator ecosystem. It depends equally on US consumer AI adoption being far enough along (45%) that the business owner already feels the lead loss. The same product will be right in the UK, Canada and Australia within a year, and the engine-feedback plumbing largely transfers. India and SEA are wrong for this now — local discovery there runs through WhatsApp, JustDial and Google Maps directly, and the AI-answer channel isn't yet large enough for an owner to feel revenue moving.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $99/month single location (monitoring + up to 3 correction runs/month). $249/month "done-for-you" tier where we file and chase everything and the owner only approves. Agency/multi-location: $79/location/month, minimum 10 locations.

- **ACV:** ~$1,500 blended. Direct SMB lands near $1,200–$3,000; agency accounts land much higher per logo and churn less.

- **Rough math to $1M ARR:** 700 customers at a $1,500 blended ACV = $1.05M. Realistically that's ~450 direct SMB subscriptions plus 12–15 agency accounts averaging 20 locations each. The agency channel is what makes this number reachable without a large sales team.

- **Rough math to $5M ARR:** Needs the agency/franchise motion to dominate — roughly 2,500 direct-equivalent locations plus 60–80 agency partners, and a vertical expansion beyond home services into dental, veterinary and legal. It also likely needs the monitoring scope to widen from "facts about you" to "facts about you versus the three competitors the AI recommends alongside you," which is a natural upsell and raises ACV without new distribution.

- **Expansion path:** Locations are the obvious axis. Beyond that: competitor-answer intelligence, a review-corpus tier (since reviews are a dominant input to what AI says), and per-correction-run overage for heavy remediation months. The proof-of-fix report is also a standalone artifact agencies will pay for as white-label.

## 9. Go-to-market wedge — first 100 customers

The distribution advantage here is unusual: **the pitch is a demo you can run before the prospect has ever heard of you.** Every cold outreach can contain the specific wrong answer an AI gave about that specific business. That's not a value proposition, it's evidence.

- **The audit-first cold email.** Pull a list of 2,000 single-location HVAC/plumbing/electrical businesses in 8 metros from Google Maps scraping plus state contractor license registries. Run the free audit on all of them before contact. Email only the ~40% where we find a materially wrong fact — subject line names the error ("ChatGPT is giving your customers a disconnected number"), body contains the screenshot, CTA is a $0 correction of that one error. Expect 8–12% reply rate on a message containing a screenshot of the prospect's own broken listing, and 10–15% of repliers converting after the free fix demonstrates propagation. That's 60–100 customers from one 2,000-name list.

- **Local SEO agencies as the resale channel.** There are hundreds of small agencies servicing exactly this customer, currently doing AI remediation by hand or not at all, and getting asked about it weekly. Target 50 of them via the local SEO community (LocalSearchForum, the Local Search Association, agency owners active on LinkedIn). Offer white-label proof-of-fix reports and $79/location. Landing 12 agencies at 20 locations each is 240 locations without touching an SMB.

- **The industry-vertical Facebook groups and trade forums.** HVAC, plumbing and auto repair owners congregate in large private Facebook groups and trade forums where "my calls are down and nobody can tell me why" is a recurring thread. Post the aggregate finding — "we audited 500 HVAC companies in Texas, 46% had at least one materially wrong fact in AI answers, here's the breakdown" — with a free audit link. Original data in these communities travels; this is the cheapest top-of-funnel available and it doubles as the content engine.

- **Franchise and dealer networks.** A single franchisor conversation covers 50–400 locations with one decision-maker and one contract. Slower than the others and not the first move, but this is where the path past $1M ARR actually runs.

## 10. Build complexity — justification

Medium. Everything required is off-the-shelf: engine querying, LLM comparison of answers against a structured truth record, multi-source retrieval for tracing, and document generation for filings. There is no model training and no novel infrastructure.

The real work is threefold and unglamorous: reliably querying four engines at geographic scale without getting rate-limited or blocked (the most fragile part, and it needs proper proxy and scheduling discipline); building the correction rails, several of which are forms and emails rather than APIs; and the propagation tracker that keeps state per fact per engine over weeks. A technical pair ships a credible v1 in 10–14 weeks. A solo builder can get a monitoring-plus-manual-remediation version — where a human does the filings behind the scenes — live in 6 weeks, which is the right first move because it's how you learn which corrections actually work before automating them.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Querying public AI interfaces and filing accuracy corrections on behalf of a consenting business. Correcting your own business facts is the sanctioned use of every one of these feedback channels. ToS on automated querying needs care — use official APIs where they exist. |
| Ethical — no harm / dark patterns | ✅ | The product makes true information true in public answers. Explicit guardrail: only correct facts to verified truth, never used to suppress accurate negative information or manipulate competitor answers. |
| Market exists (evidence above) | ✅ | 45% consumer AI adoption for local discovery, ~50% error rate in local answers, eight funded tools already selling detection into this pain. |
| 1–5 person team can build this | ✅ | Pair in 10–14 weeks; solo concierge version in 6. |
| Launchable with <$50K / ₹40L | ✅ | Inference, proxies, and scraping infrastructure. Under $15K to first revenue. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real money, but the pain is *invisible* — the whole problem is the owner never sees the lost call. That's the discount. They feel "calls are down," not "AI has my old number." Sold correctly (screenshot in hand) it's hair-on-fire; discovered passively it's a 12. |
| Demand evidence | 15 | 13/15 | Unusually strong. BrightLocal's 6%→45% is verified at source, error rates are documented across three independent 2026 studies, and eight competitors are already charging money for the adjacent (detection) product. A skeptic nods. |
| Build feasibility | 15 | 11/15 | No novel tech, but multi-engine querying at geographic scale is genuinely fragile, and the correction rails are a grind of forms and email rather than clean APIs. 10–14 weeks, not 4. |
| Distribution clarity | 15 | 12/15 | The audit-first cold email is close to ideal — evidence-based outreach with a named list and a free demo that costs us pennies. Docked because reply-rate math is estimated, not tested, and SMB service businesses are notoriously hard to reach by email. |
| Revenue mechanics | 15 | 10/15 | $99–$249 is well inside what this customer already spends on marketing, and the agency channel makes $1M reachable. Docked because SMB churn in this segment is brutal (owner-operators cancel everything in a slow quarter) and the value is a fix that, once done, feels finished. |
| Time to first revenue | 10 | 7/10 | 6-week concierge MVP plus an outreach cycle puts first dollars around week 8–10. Not pre-sellable at scale, but the free-audit motion converts fast. |
| Defensibility | 10 | 5/10 | Execution moat, honestly. The correction rails and a growing library of what-actually-works-per-engine compound, and per-customer fact history creates real switching friction. But a funded detection incumbent could bolt on remediation in two quarters. The bet is speed and a segment they don't want. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical because the querying infrastructure and tracing pipeline are the product. Content-heavy because the aggregate-audit data ("we scanned 500 HVAC companies, here's what's broken") is simultaneously the best marketing asset and the cheapest lead source in the plan.

### Key assumptions to validate (3–5)

1. **Assumption:** Corrections actually propagate — that filing the redressal complaint, fixing Bing Places, publishing corrective schema, and submitting engine feedback measurably flips wrong answers within 60 days for a majority of errors. **How to test:** Take 20 real businesses with documented wrong facts, run the full manual correction sequence by hand, and re-query weekly for 8 weeks. Measure flip rate per engine. This is the existential assumption — if corrections don't land, the product is a monitoring tool nobody needs.
2. **Assumption:** Owners will pay for a fix to a problem they cannot independently perceive. **How to test:** Run the audit-first cold email on 300 businesses. Measure not just reply rate but conversion after the free single-error fix — the free fix *is* the test of whether proof-of-propagation is worth $99/month.
3. **Assumption:** The ~50% error rate holds for real single-location businesses in our target verticals, not just in published aggregate studies. **How to test:** Audit 500 businesses across HVAC, dental and auto repair in 5 metros. This costs almost nothing, it's needed for outreach anyway, and it doubles as the content asset.
4. **Assumption:** Multi-engine querying can be operated reliably and affordably at ~200 prompts/customer/month without being blocked. **How to test:** Run a two-week infrastructure spike at 10,000 queries and measure block rate, cost per query, and answer variance across repeat identical prompts.

### Risk flags

1. **Platform dependency (severe):** The entire product sits on four AI interfaces that can change access terms, add rate limits, or ship a native "claim your business" flow at any time. Google in particular could make much of the remediation layer redundant by giving verified GBP owners direct control over AI Mode facts — and they have every incentive to. This is the single biggest threat, and it argues for building the multi-engine correction library fast.
2. **Incumbent encroachment:** Eight detection tools already own the customer relationship and the monitoring data. Remediation is the obvious adjacent feature. Birdeye and Yext both have the distribution to add it; the defense is that the SMB single-location segment is priced beneath their sales motion.
3. **Attribution is unprovable:** We can prove the answer changed. We cannot prove it produced revenue. Churn risk is real when the owner asks "did this make me money?" and the honest answer is a propagation report, not a booked-jobs number. Mitigate with call tracking integration in v2.
4. **Fix-once psychology:** Once the facts are correct, perceived value drops. The product must credibly reframe as ongoing surveillance — stale data re-emerges, models retrain, directories resurrect old records — or it churns hard at month 4.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can run scraping/inference infrastructure,
                        paired with someone who genuinely enjoys SMB cold outreach and
                        publishing original audit data. Local SEO background is a real edge.
Time to revenue:        8–10 weeks (6-week concierge MVP + outreach cycle)
Capital to launch:      $10–15K (₹8–12 lakh) — inference, proxies, scraping infra
Top 3 assumptions to validate first:
  1. Corrections propagate — run the full manual sequence on 20 businesses,
     re-query weekly for 8 weeks, measure per-engine flip rate within 60 days
  2. Owners pay for an invisible problem — 300-business audit-first cold email,
     measure conversion after the free single-error fix
  3. Error rate holds in the real target segment — audit 500 businesses across
     HVAC/dental/auto repair in 5 metros
Kill criteria:
  - Abandon if <40% of documented wrong facts flip within 60 days across at least
    two engines after the full correction sequence. Detection-only is a commodity
    and is not this business.
  - Abandon if the audit-first cold email — screenshot of their own broken listing
    included — produces <5% reply rate across 300 sends. That is the strongest
    possible cold message; if it fails, the channel is closed.
  - Abandon if Google ships native AI-fact control for verified GBP owners
    covering phone, hours, address and services before v1 launches.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the crude auditor. Pull 500 single-location businesses (HVAC, dental, auto repair) across 5 metros from Maps data. Ask each engine the 6 highest-value customer questions per business — phone, address, hours, services, price range, open-now — and diff against the verified GBP record. Output: a hard error rate for the actual target segment, and a ranked list of error types by frequency. This alone tells you whether the premise survives contact with reality.

- **Day 3–4:** Pick the 20 worst offenders. Run the complete correction sequence by hand on each — redressal complaints, Bing Places, engine feedback, corrective schema on a hosted page where possible. Log exactly what was filed and when. In parallel, send the audit-first cold email to 150 of the businesses where you found a materially wrong fact, screenshot included, offering the free single-error fix.

- **Day 5:** Decide on two numbers. **Go** if (a) ≥35% of the 500 audited businesses have at least one materially wrong high-value fact — confirming the pain is dense enough to build a list from — and (b) the cold email clears a 6% reply rate. Both must hold. Then keep re-querying the 20 corrected businesses weekly for the following 8 weeks; the propagation flip rate is the real go/no-go, and it cannot be compressed into week one.

The falsifiable core: either wrong facts are dense in this segment and owners respond to seeing their own broken listing, or they aren't and they don't. Both are measurable in five days for under $500.
