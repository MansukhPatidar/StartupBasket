---
title: "FactDrift — misinformation sentry for local businesses"
slug: ai-answer-fact-drift
date: 2026-08-02
category: HomeServices / US-SMB — Contractors, Clinics, Restaurants & Local Service Firms Losing Bookings to Wrong AI Answers
complexity: Low
score: 72
verdict: GO
confidence: Medium
oneLiner: "Catches the month ChatGPT starts telling your customers the wrong hours, price or service area."
tags:
  vertical: HomeServices
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Solo-builder, Local-search, Agency-resold]
axes:
  problem: 15
  demand: 12
  build: 14
  distribution: 11
  revenue: 11
  time: 9
  defensibility: 0
founderFit: [technical-heavy, content-heavy]
featured: false
---

# FactDrift

## 1. One-liner

Catches the month ChatGPT starts telling your customers the wrong hours, price or service area.

## 2. Trend signal — why now?

Three things changed in 2026, and together they turn a nuisance into a recurring bill.

**AI now answers instead of linking, and it gets local facts wrong a lot.** A July 20, 2026 Search Engine Journal report found AI tools get local business information wrong in roughly half of local-business answers. SOCi's 2026 data puts business-profile accuracy on ChatGPT and Perplexity at about **68%** — versus near-perfect on Gemini. That 32-point gap is not a branding problem. For a business that runs on inbound phone calls, it is a wrong phone number, a "permanently closed" flag, or a service area that omits the suburb where half the revenue lives.

**The answers do not hold still.** This is the part the market has not priced in. AI citations swing **40–60% month over month** as models retrain and competitors publish. AI Overview content changes roughly 70% of the time for the same query, and when it updates, nearly half the citations get replaced. One brand went from appearing in 86% of AI answers for a prompt in one period to 14% the next. A correct answer in March is not evidence of a correct answer in June.

**Traffic that used to arrive by link now arrives by answer — or not at all.** Zero-click searches are ~60% of queries; publisher referral traffic fell 38% YoY, and where AI Overviews appear, organic CTR fell 61%. The channel that local businesses spent a decade optimizing is being replaced by a channel where nobody is checking whether the facts are right.

The tell that this is real money: SEO agencies already sell "AI visibility audits" to law firms and contractors, and tracking tools run $29/mo (Otterly) to $499/mo (Profound, which raised a $96M Series C in Feb 2026 at a $1B valuation). Money is moving. But all of it is aimed at *"do they mention me?"* — not *"is what they say about me true?"*

```
Provenance:
  - Signal 1 (Demand): AI tools get local business info wrong in ~half of answers; ChatGPT/Perplexity profile accuracy ~68% vs near-perfect Gemini — https://pushleads.com/how-to-fix-business-info-in-ai-search-results-before-wrong-data-costs-you-custom/ (citing Search Engine Journal, Jul 20 2026; SOCi 2026) — observed 2026-08-02
  - Signal 2 (Feasibility): AI citations/answers swing 40–60% month-to-month; AI Overview content changes ~70% of the time for the same query — https://www.similarweb.com/blog/marketing/geo/ai-citation-volatility/ and https://kime.ai/blog/url-volatility-ai-search-geo-strategy — observed 2026-08-02
  - Signal 3 (Economic): AEO/AI-visibility tracking is a funded, priced category — Otterly $29/mo, AthenaHQ $295/mo, Profound $499/mo and a $96M Series C at $1B valuation (Feb 2026); home-services firms already pay $1,000–$2,500/mo SEO retainers — https://www.justlegalmarketing.com/ai-visibility-audit-law-firms-chatgpt-gemini.html and https://hookagency.com/blog/digital-marketing-costs-for-home-service-businesses-in-2026/ — observed 2026-08-02
  Category: Platform shift
```

## 3. The opportunity

The entire AEO/GEO tool category is built on one question: **"Does the AI mention my brand?"** Profound, AthenaHQ, Otterly, Scrunch, Semrush's GEO suite — all rank-tracking, reskinned for LLMs. They are selling to marketing teams who care about share-of-voice.

Nobody is selling the other question: **"Is the AI stating a fact about me that is flatly wrong and costing me a booking today?"**

That gap exists because the two questions have different buyers. Share-of-voice is a CMO metric at a brand with a marketing budget. Wrong-phone-number is an owner-operator problem at a plumbing company — and it's not a *marketing* complaint, it's an *operations* complaint. It shows up as "we got fewer calls this month" and nobody connects it to an AI answer, because nobody is looking.

The closest thing that exists is LocalFox, which does check accuracy — for **$9, one time**. That's the proof the audit is already commoditized and near-worthless as a business. And it's exactly the wrong shape for this problem: given 40–60% monthly answer churn, a one-time audit is a photograph of a moving target. The recurring watch is the product; the audit is the free sample.

Incumbent listings platforms (Yext, Uberall) fix the *upstream* data — they syndicate correct NAP to 180+ directories. But they sell to multi-location enterprises ($4,000+/yr for 25 locations; Uberall from ~$330/mo for 50). They verify that *directories* are correct. They do not verify that *the model's answer* is correct — and the model happily contradicts correct directory data, because it associates information probabilistically rather than reading a verified record. Correct listings are an input, not a guarantee.

## 4. Target market

- **Primary customer:** Owner-operator or office manager at a US local service business doing $300K–$5M/yr that lives on inbound calls — HVAC, plumbing, electrical, roofing, med spas, dental, veterinary, auto repair, restaurants. 1–3 locations. Already spending $500–$2,500/mo on local marketing.
- **Secondary customer (higher value):** The local SEO agency serving 20–150 such clients. They need a retention story and a new line item now that "we got you to #3 on Google" is a shrinking asset.
- **Why they buy:** They already believe AI is eating their lead flow and they have no instrument to see it. The pitch is not "rank in AI" (vague, unprovable). It's "ChatGPT is telling people you close at 5; you close at 7. Here's the screenshot." That's a concrete, verifiable, embarrassing fact — and the fix is a checklist.
- **Rough TAM reasoning:** Home services alone is hundreds of thousands of US establishments; the constraint is not market size, it's reachable share. A realistic serviceable slice is the ~30–50K local businesses already buying managed local SEO — reachable via the few thousand agencies that serve them. At $79/mo I need ~1,050 businesses for $1M ARR. That's a rounding error on the category, which is the correct posture for a bootstrapped play.
- **Why now for them:** Their 2026 lead volume is down and they're being told it's "AI." They want an explanation and a lever. Right now they're being sold vague AEO retainers.

## 5. Product sketch (MVP)

- **Fact sheet setup (5 minutes):** Owner confirms the ground truth once — hours, phone, address, service area ZIPs, services offered/not offered, price ranges, license numbers, "we do NOT do X." This is the assertion set everything is checked against.
- **Recurring multi-engine interrogation:** Weekly, the product asks ChatGPT, Gemini, Perplexity, Copilot and Google AI Overviews the ~40 questions a real customer asks — "is [business] open on Saturday", "does [business] serve [suburb]", "what does [business] charge for a drain cleaning", "is [business] still in business".
- **Drift alerts, not dashboards:** Email/SMS only when an answer *contradicts* the fact sheet or *changes* from last week. Silence means fine. This is the whole UX discipline — the buyer will not log into a dashboard.
- **Severity ranking:** "Marked permanently closed" and "wrong phone" rank above "founding year wrong." Ranked by revenue impact, not by count.
- **Screenshot + provenance receipt:** Every flagged answer captured verbatim with date/engine, plus the sources the engine cited — so the owner sees *which* stale directory or old article is feeding the error.
- **Fix-this-next playbook:** For each error, the specific corrective action (update GBP field, correct the Yelp/Apple/Bing listing, add schema markup, publish a clarifying page, request a review mentioning the correct fact) — ordered by what actually moves the model.
- **Re-check confirmation:** After a fix, keep asking and tell them the week it flips correct. This is the retention loop — proof the money did something.
- **Agency mode:** One console, all clients, white-labeled monthly PDF the agency forwards under its own logo.

## 6. AI angle — what's load-bearing

AI is both the subject and the instrument, which is unusual and good.

**As instrument:** The product must ask questions in natural, varied phrasing (a customer says "is the plumber on Main St open Sunday", not a keyword), then *semantically judge* whether a free-text answer contradicts a structured fact. "Open till 5" vs "closes at 7pm" — that's an entailment check across paraphrase, negation, and hedging, run over thousands of answer/assertion pairs weekly. No rules engine or string match does this. Remove the LLM judge and the product is not buildable.

**As subject:** The thing being measured only exists because generative answers replaced links. There was no product here in 2023.

The honest caveat: this is a *measurement and remediation* tool, not a control surface. Nobody can guarantee an LLM changes its answer. The product must sell the instrument and the playbook, never a guaranteed outcome — and the fix rate is the #1 assumption to validate (see §13).

## 7. Localization angle (if any)

`N/A — US-first by design.` The wedge depends on high LLM assistant penetration among consumers, high local-search dependence for lead flow, and an existing SMB habit of paying monthly for local marketing. The US has all three at once. UK/Canada/Australia are near-identical follow-ons requiring nothing but different directory playbooks. India/LATAM fail the third condition today — local service discovery still runs through WhatsApp, JustDial and word-of-mouth, and the willingness to pay a recurring fee for AI-answer hygiene isn't there yet. Forcing a localization angle here would weaken the idea.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $49/mo single location (self-serve), $79/mo with SMS alerts + re-check confirmations, $199/mo multi-location (up to 5). Agency: $299/mo for 25 client slots, $699/mo for 100 — roughly $7/client, resold at $50–100/client.
- **ACV:** ~$950 blended for direct SMB; ~$5,400 for agency accounts.
- **Rough math to $1M ARR:** 1,050 direct customers × $79 × 12 ≈ $1M. Or, more realistically, a mix: 500 direct ($475K) + 100 agency accounts at $450/mo avg ($540K) ≈ $1.02M. The agency path gets there with 100 sales instead of 1,000 — that's the one to lean on.
- **Rough math to $5M ARR:** Needs the agency channel to carry it — ~400 agency accounts averaging $700/mo ($3.4M) plus ~1,700 direct ($1.6M). What must be true: agencies find it retains clients (so they don't churn), and the vertical expands beyond home services into legal, dental, and restaurants, where the same wrong-fact problem exists with higher ticket values.
- **Expansion path:** More locations, more engines as they emerge, more question coverage per vertical, then the natural upsell — done-for-you remediation (we fix the listings and publish the schema) at $299–$500/mo, which converts a monitoring tool into a service margin.
- **Cost structure:** The real variable cost is inference. ~40 questions × 5 engines × 4 weeks = ~800 calls/customer/month, plus judging. At current API prices that's low single-digit dollars per customer per month — call it 85–92% gross margin at $79. This works because the query set is small and fixed; it would break if the product tried to be a general crawler.

## 9. Go-to-market wedge — first 100 customers

The free audit is the entire engine. It produces a specific, screenshotted, embarrassing fact — the single most forwardable artifact in local marketing.

- **Run the audit before asking for anything.** Scrape 2,000 HVAC/plumbing/roofing businesses in 5 metros from Google Maps. Run the fact check unprompted. Roughly a third will have a materially wrong answer somewhere. Email only those, subject line naming the error: *"ChatGPT says you don't serve Round Rock."* Screenshot in the body, fix instructions free, soft CTA to monitor. Expect 25–40% open, 3–6% conversion to a $49 trial. That's 60–120 customers from one 2,000-name run.
- **Agencies via their own client books.** Cold-email 300 local SEO agencies offering to audit 10 of *their* clients free. The report makes the agency look attentive and hands them an upsell they didn't have. One agency signed = 20–100 businesses. Ten agency wins ≈ the first 100 customers on their own. This is the highest-leverage channel and should get most of the effort.
- **Trade Facebook groups and forums.** HVAC/plumbing owner groups (tens of thousands of members, high complaint density) — post the aggregate finding, not a pitch: "I checked 500 HVAC companies in Texas; 34% had ChatGPT reporting a wrong fact. Here's the list of the most common errors and how to fix them." Offer free checks in the comments.
- **Franchise and trade associations.** A single association newsletter or franchisor recommendation reaches hundreds of same-vertical operators who share a fact-sheet template — the cheapest possible batch acquisition.
- **The "AI said you're closed" horror-story content loop.** Every audit generates real anonymized examples. Publish them monthly. This is the one content play that works here because the artifacts are free byproducts of the product running.

## 10. Build complexity — justification

**Low.** Everything is off-the-shelf: assistant APIs (plus headless browsing for surfaces without one), an LLM for question generation and contradiction judging, a scheduler, a fact-sheet CRUD app, alerting. No custom models, no proprietary data, no integrations with anyone's ERP. A competent solo builder ships a credible v1 in **6–8 weeks**; the free-audit funnel is a weekend on top.

The two real engineering problems are not scale, they're quality: (1) building the vertical-specific question sets so the checks mirror actual customer phrasing, and (2) driving the false-positive rate near zero — an alert that says "wrong hours" when the hours are right destroys trust on the first email and the account churns. Both are prompt/eval discipline, not infrastructure. Budget most of the build time to the eval harness, not the app.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Querying public assistants and reporting outputs. Respect ToS/rate limits; use official APIs where available. No scraping of private data. |
| Ethical — no harm / dark patterns | ✅ | Corrects factual misinformation about real businesses. Must not promise guaranteed AI ranking — that would be the dark pattern, and it's an explicit product rule. |
| Market exists (evidence above) | ✅ | Funded AEO category, priced tools $29–$499/mo, existing SMB local-marketing spend, sourced error-rate data. |
| 1–5 person team can build this | ✅ | Solo builder, 6–8 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Well under $10K: inference, scraping infra, email. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real and revenue-linked when it hits — wrong phone/hours/service area kills bookings. Held back because it's **invisible and intermittent**: the owner doesn't feel it daily, doesn't attribute lost calls to it, and a third of businesses have no error at any given moment. Latent pain, not hair-on-fire. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: funded competitors at real prices, agencies already selling AI-visibility audits, sourced error-rate and volatility data. Docked because the evidence is for the *adjacent* question (visibility) — I could not source verbatim SMB owners complaining about factual AI errors. That's a genuine gap. |
| Build feasibility | 15 | 14/15 | Off-the-shelf everything, 6–8 weeks solo. Only real work is eval quality. |
| Distribution clarity | 15 | 11/15 | The free-audit cold email is concrete, cheap, and produces its own hook — genuinely strong. Agency channel is high-leverage. Docked because conversion math is estimated, not tested, and SMB cold email is a noisy channel with real deliverability risk. |
| Revenue mechanics | 15 | 11/15 | Pricing is benchmarked against a real category ($29–$499/mo) and margins are fat. Docked because $49–79/mo against 1,000+ customers means churn is the whole game, and a monitoring tool that reports "all clear" for three months straight is easy to cancel. |
| Time to first revenue | 10 | 9/10 | Audit-first motion means paid conversions in weeks. Nothing to integrate, no procurement. |
| Defensibility | 10 | 0/10 | **Effectively none.** A weekend clone. No proprietary data, no network effect, no lock-in beyond a fact sheet that takes 5 minutes to re-enter. Any AEO incumbent can add a fact-accuracy tab; Profound has $96M to do it with. The only asset that compounds is a longitudinal record of how answers drift per vertical, and the brand you build before anyone notices. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical for the eval discipline that keeps false positives near zero. Content-heavy because the audit-report-as-marketing loop *is* the distribution, and it must be run relentlessly.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share (>25%) of local service businesses have at least one materially wrong AI-stated fact at any given time. **How to test:** Run the check against 300 businesses across 3 verticals and 3 metros. Count material errors — wrong phone, hours, service area, closed status. This is a pure measurement task, needs no customers, and can be done in days. **If it's under 15%, the whole idea dies.**
2. **Assumption:** The errors are *fixable* — corrective actions actually flip the AI answer within 4–8 weeks. **How to test:** Take 20 businesses with confirmed errors, fix them free, re-check weekly for 8 weeks. Measure the flip rate. This is the highest-risk assumption: if fixes don't work, the product is a thermometer nobody wants.
3. **Assumption:** Owners find the audit alarming enough to pay a recurring fee. **How to test:** Send 500 audit emails with real errors; measure reply rate and trial starts. Target >3% trial conversion.
4. **Assumption:** Agencies will resell rather than build it themselves. **How to test:** Pitch 30 agencies; count how many ask about white-label pricing vs. how many say "we'll just check manually."
5. **Assumption:** Alerts stay rare enough to be trusted but frequent enough to justify $79/mo. **How to test:** Measure alert frequency per business over 8 weeks of monitoring.

### Risk flags

1. **Defensibility (severe):** Zero moat. This scores 0/10 and it is the dominant risk. Mitigation is speed, vertical focus, and owning the agency channel before an incumbent bothers. Accept that this may be a $1–3M ARR business that gets squeezed, not a durable franchise.
2. **Platform dependency:** Depends on continued API/interface access to assistants that may rate-limit, price-change, or ban automated querying. A ToS change at two major engines materially degrades the product.
3. **Fixability risk:** If corrective actions don't reliably change model answers, the product measures a problem it can't solve. Customers tolerate that for one or two billing cycles, not six.
4. **Churn / "all clear" problem:** The better the product works, the quieter it gets, and quiet tools get cancelled. Needs a monthly "here's what we checked and what stayed correct" artifact so the value stays visible — cheap to build, essential to survival.
5. **Category noise:** "AI visibility" is already a crowded, hype-soaked space full of vendors making unfalsifiable claims. Being credible in a market full of snake oil is a marketing burden, not just a product one.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder who can run a content/outbound loop;
                        local-marketing or agency background is a strong plus
Time to revenue:        6–10 weeks
Capital to launch:      $5–10K (₹4–8L)
Top 3 assumptions to validate first:
  1. Error prevalence — check 300 businesses across 3 verticals; need >25% with a
     material wrong fact. Under 15% = kill.
  2. Fixability — remediate 20 confirmed errors free, re-check weekly for 8 weeks;
     need a majority to flip correct.
  3. Willingness to pay — 500 audit emails with real errors; need >3% trial starts.
Kill criteria:
  - Abandon if <15% of audited businesses show a material factual error
  - Abandon if fewer than 40% of remediated errors correct themselves within 8 weeks
  - Abandon if <2% of 500 error-bearing audit emails convert to a paid trial
  - Abandon if Profound/AthenaHQ/Yext ship an equivalent fact-accuracy monitor
    before you reach 200 paying customers
```

## 15. Next step — 1-week validation sprint

The beautiful thing here: assumption #1 needs no customers, no product, and no permission. It's a measurement.

- **Day 1–2:** Pull 300 local service businesses (HVAC, dental, restaurants) across 3 metros with their verified ground truth from Google Business Profile. Write the 40-question customer-phrasing set.
- **Day 3–4:** Run all 300 against ChatGPT, Gemini and Perplexity. Score every answer against ground truth. Produce one number: **% of businesses with ≥1 material factual error.**
- **Day 5:** Email the 50 worst offenders with their screenshot and free fix instructions. Measure reply rate. In parallel, pitch 10 local SEO agencies on white-label.
- **Decide go / no-go on:** error prevalence ≥25% **and** ≥5 of 50 owners reply asking for help **and** ≥2 of 10 agencies ask about pricing.

Falsifiable in five days for under $200 of inference. If the prevalence number comes back at 8%, there is no business here and you've lost a week — which is exactly the right trade.
