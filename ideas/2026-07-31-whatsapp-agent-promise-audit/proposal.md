---
title: "SaidWhat — transcript auditor for WhatsApp AI agents"
slug: whatsapp-agent-promise-audit
date: 2026-07-31
category: Retail / India+LATAM-SMB — Businesses Running Meta Business Agent on WhatsApp
complexity: Low
score: 72
verdict: GO
confidence: Medium
oneLiner: Reads every message your WhatsApp AI sent customers and flags the prices, discounts and promises you never approved.
tags:
  vertical: Retail
  model: SaaS
  geography: India+Global
  secondary: [WhatsApp-first, AI-agent, SMB, Multilingual, Solo-builder, Platform-shift]
axes:
  problem: 15
  demand: 11
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 2
founderFit: [technical-heavy, content-heavy]
featured: false
---

# SaidWhat

## 1. One-liner

Reads every message your WhatsApp AI sent customers and flags the prices, discounts and promises you never approved.

## 2. Trend signal — why now?

On **3 June 2026**, Meta launched **Meta Business Agent** globally — an AI agent built directly into the WhatsApp Business app that answers customer questions, recommends products from your catalog, books appointments, qualifies leads and closes sales. No developer, no integration, no subscription. Setup "in minutes." Over **one million businesses** are already running one.

Read Meta's own launch post carefully and notice what is missing: it markets "enterprise-grade controls, guardrails, and measurement," and says **nothing whatsoever about accuracy, reliability, error rates, or limitations**. Not a single caveat. Meanwhile WhatsApp's help centre quietly states that AI-generated messages "may not be accurate or appropriate."

Independent deployment write-ups are blunter. Documented failure modes: the agent "might accidentally promise a customer a 50% discount, quote an incorrect product price, or misinterpret an unapproved return policy." One deployment guide reports **5–10 hallucinations across a representative question set**, and warns that teams who skip corpus preparation hit hallucination problems "that cannot be debugged by week three."

Now the part that turns an annoyance into a liability. In *Moffatt v. Air Canada* (BC Civil Resolution Tribunal, Feb 2024), Air Canada argued its chatbot was "a separate legal entity that is responsible for its own actions." The tribunal called that "a remarkable submission" and held the airline responsible for everything its site said — static page or generative agent alike. The operative principle now widely cited: **any promise, price or policy your chatbot states can be held against you as if a human employee said it.**

So: a million-plus businesses just pointed an unsupervised salesperson at their customers, that salesperson demonstrably invents discounts, and the law says you own every word it says. Nobody is reading the transcripts.

Money is moving too. Free testing ended — **token billing started 1 August 2026** at $2.00 per million tokens (~4–5¢ per conversation), and from **1 October 2026** Meta begins charging for service messages that have been free since Nov 2024. Businesses are about to start paying per conversation, which is exactly when they start caring what happened inside those conversations.

Provenance:
  - Signal 1 (Demand/pain): Meta Business Agent live globally with 1M+ businesses; documented hallucination modes include inventing a 50% discount, quoting wrong prices, misstating return policy; 5–10 hallucinations per representative question set — https://greentick.ai/blogs/meta-business-agent-whatsapp/ and https://callitdev.com/en/blog/meta-business-agent-whatsapp-deployment-guide — observed 2026-07-31
  - Signal 2 (Feasibility/platform): Meta Business Agent launched 3 June 2026, global, no developer required, human handoff built in — https://about.fb.com/news/2026/06/meta-business-agent/ and https://techcrunch.com/2026/06/03/metas-ai-agent-for-whatsapp-business-is-now-available-globally/ — observed 2026-07-31
  - Signal 3 (Economic/legal): Token billing begins 1 Aug 2026 ($2/M tokens), service-message charges from 1 Oct 2026; enterprise guardrail vendors price from ~$100K/yr (Cisco acquired Galileo, Apr 2026); Moffatt v. Air Canada binds the deployer to what the bot said — https://www.techtimes.com/articles/320787/20260716/meta-business-agent-billing-starts-aug-1-free-test-window-ends-days.htm and https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot — observed 2026-07-31
  Category: Platform shift

## 3. The opportunity

The AI-supervision category exists. It is just priced for people who are not these customers.

Galileo, Patronus, Guardrails AI, NeMo — real products solving real hallucination detection, sold to ML engineers with observability budgets. Galileo got acquired by Cisco in April 2026 and folded into Splunk's AI Agent Monitoring. Enterprise deployments in this category start around **$100,000/year**. The self-serve tiers are priced per-event for developers instrumenting their own LLM calls.

None of that reaches a 14-person Bangalore fashion label or a São Paulo auto-parts dealer whose entire AI deployment was clicking "activate" inside the WhatsApp Business app. They have no LLM to instrument. They didn't build the agent. They cannot install a callback. They have a phone, a catalog, and a bot that Meta runs, that talks to their customers in Hindi and Portuguese all day, and that they have never once read the output of.

That's the gap: **enterprise-grade AI supervision, delivered as a post-hoc transcript audit, priced at ₹2,000/month.** You cannot sit inside Meta's inference loop — Meta owns the model and the runtime. You don't need to. You need to read what it said afterwards, against what the business actually authorized, and surface the twelve conversations out of four thousand where the bot went off-script.

The incumbent WhatsApp vendors (Wati, AiSensy, Interakt) are the obvious alternative and they don't do this. They sell message sending, campaign blasts and chatbot flow builders at ₹1,500–2,566/mo, plus chatbot add-ons at ₹1,999–2,500/mo. Their published feature sets contain no conversation-quality audit. Their reviews are a catalogue of support failures — "a nightmare for 2 years," 24-hour email response, four weeks of silence from an account manager after payment. They are not positioned to be the trusted supervisor of anything.

## 4. Target market

- **Primary customer:** Owner or head-of-sales at a 5–50 person consumer-facing SMB running Meta Business Agent on WhatsApp — fashion and D2C brands, clinics and diagnostic labs, coaching institutes, auto dealers, real-estate brokerages, travel agents. India first (WhatsApp is the default commercial channel), then Brazil and Mexico. Revenue ₹2–50 Cr / R$2–40M. Doing 500–10,000 customer conversations a month.
- **Why they buy:** Because the bot is now the front desk and nobody is watching it. The specific fear is concrete and cheap to explain: *it quoted someone a price I don't sell at, and now they're standing in my shop with a screenshot.* Secondary: staff dispute resolution ("the customer says we promised free delivery — did we?"), and knowing which questions the bot keeps failing so they can fix the catalog.
- **Rough TAM reasoning:** Meta reports 1M+ businesses already on Business Agent, with pilots concentrated in India, Mexico and Brazil before global launch. Brazil alone: 78% of businesses actively sell via WhatsApp, 165M users. Mexico: 2M+ active WhatsApp Business catalogs, transaction volume +38% YoY. If even 3% of the current 1M installed base is large enough to fear a mispriced quote and small enough to have nobody reading transcripts, that's ~30,000 businesses — and the installed base is growing, not shrinking.
- **Why now for them:** They activated the agent in June/July while it was free. Token billing hit 1 August. October adds service-message charges. The first invoice makes the agent a line item they must justify, and justification means looking at what it actually did — which nobody has tooling for.

## 5. Product sketch (MVP)

- **Connect once** — link the WhatsApp Business account, SaidWhat ingests agent conversations on an ongoing basis
- **Ground truth sheet** — the business states, in plain language, what's true: price list, discount ceiling ("never below 10% off"), return window, delivery promise, service areas, what the bot must never commit to
- **Promise flags** — every conversation scanned for statements the bot made that contradict the ground truth: wrong price, invented discount, unauthorized refund, a delivery date you can't hit, a service you don't offer
- **Daily digest** — one WhatsApp message each morning: "3,412 conversations. 4 need you. Here they are, with the exact line and the customer's number."
- **One-tap recovery** — for each flagged conversation, a suggested correction message to the customer, in their language, before they show up expecting the promised price
- **Repeat-failure report** — weekly: the five questions the bot answers wrong most often, so the owner can fix the source catalog or knowledge entry
- **Exposure ledger** — a timestamped, exportable record of what was promised, to whom, when, and whether it was corrected. This is the artifact you want if a promise ever gets disputed
- **Multilingual out of the box** — Hindi, Hinglish, Tamil, Portuguese, Spanish. The bot talks to customers in these; the audit has to read them

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The core task is reading thousands of free-form multilingual sales conversations and deciding whether a given sentence constitutes a commitment that contradicts a stated policy. That is not a keyword scan — "we can work something out on the price for you, ma'am" is a discount promise with no number in it, and "yeah that'll reach you before Diwali" is a delivery commitment with no date in it. Detecting *implied commitment* against *stated policy*, across Hinglish and Portuguese, is precisely a language-model task and was not economically viable at ₹2,000/month until recently.

The economics work now. At current inference prices, scanning a typical 20–25K-token conversation costs a fraction of a cent with a small model; you only escalate ambiguous cases to a larger model. Auditing 4,000 conversations a month lands in low tens of rupees of compute against a ₹2,000 subscription. That ratio is the whole business, and it is a 2026 ratio.

Second load-bearing use: turning a flagged violation into a correction message the owner can actually send, in the customer's language and register, in one tap. The flag is the diagnosis; the repair is what they pay to keep.

## 7. Localization angle

India-first, and this is a genuine wedge rather than a translation exercise.

- **Language:** Indian WhatsApp commerce runs on Hinglish, Devanagari, Tamil, Telugu, Marathi — often code-switched inside one sentence. A generic English-only audit misses most of what was actually promised.
- **Pricing:** ₹1,999/month works where $99/month is unsellable. That's the AiSensy-add-on price point — a number this buyer already pays for WhatsApp tooling without blinking.
- **Regulatory tailwind:** India's DPDP Act reaches full enforcement on **13 May 2027**, with the Data Protection Board operational since 13 Nov 2025 and Consent Manager registration opening 13 Nov 2026. Businesses must keep consent records with timestamps for **seven years**, collect consent separately for transactional vs marketing purposes, and honour opt-outs immediately — with cumulative exposure across DPDP, TRAI TCCCPR and WhatsApp's own Business Messaging Policy. A product already reading every conversation is the natural place to also flag *"your bot pitched a promotion to someone who only consented to transactional messages."* That's the year-two expansion, and it's a durable one.
- **Then LATAM:** Brazil and Mexico are the same product with Portuguese and Spanish, the same WhatsApp-native buyer, and 43% of the region's conversational commerce volume. Ship India, port the language layer.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹1,999/mo (~$24) Starter up to 2,000 audited conversations; ₹4,999/mo (~$60) Growth up to 10,000; ₹12,999/mo (~$155) Multi-location for chains and agencies managing several numbers. Global/LATAM tiers at $39 / $99 / $249.
- **ACV:** ₹40,000–55,000 (~$500–650) blended, once the mix includes LATAM and multi-location accounts.
- **Rough math to $1M ARR:** ~1,700 customers at a $600 blended ACV. Against an installed base already north of a million Business Agent deployments, that is roughly 0.17% penetration.
- **Rough math to $5M ARR:** ~6,000–7,000 customers, which realistically needs the agency channel carrying a third of the book and the DPDP consent-audit module lifting Indian ACV. Achievable, not guaranteed.
- **Expansion path:** conversation volume tiers → additional WhatsApp numbers/locations → DPDP consent-and-retention audit module (2027, ahead of May enforcement) → agency multi-tenant dashboard billed per managed account.
- **Margin note:** inference is the only meaningful variable cost and it sits at low single-digit percent of revenue at these tiers. The risk is a customer running a viral campaign and blowing through their conversation cap — hence volume tiers rather than unlimited.

## 9. Go-to-market wedge — first 100 customers

1. **The invoice moment, targeted.** Token billing started 1 Aug and service-message charges land 1 Oct. Every business running Business Agent gets a bill they didn't get before. Run a "What did your WhatsApp AI actually promise last month?" free audit: connect the account, get a one-page report on the last 1,000 conversations, no card. The report either finds violations (they convert on the spot) or finds none (they sleep better and some still convert for the ledger). This is a demo that does the selling.
2. **Ride the WhatsApp BSP resellers, not the BSPs.** India has a long tail of small agencies reselling AiSensy/Interakt/Wati to local SMBs, and their customers are exactly the installed base. They have zero conversation-QA offering and their upstream vendors' support reputation is poor. Offer 30% recurring, a multi-tenant view, and a co-branded monthly audit report they can hand to each client as their own value-add. Ten active agencies at ten clients each is the first hundred.
3. **Screenshot bait in the owner communities.** Indian D2C/retail owner groups on WhatsApp, r/IndiaBusiness, r/smallbusiness, Brazilian lojista Facebook groups. The content is a single recurring format: real, anonymized transcripts of bots promising things. "This bot gave a 40% discount nobody authorized." Owners forward that to other owners because it is their live fear. Each post ends with the free audit link.
4. **Vertical beachhead first.** Start with jewellery, fashion and diagnostics in India — high price variance per SKU, so a hallucinated price hurts immediately and visibly. Win 20 in one vertical, get named referrals inside that trade association, then move.
5. **Direct outreach with proof attached.** Scrape businesses publicly advertising WhatsApp ordering, message their own WhatsApp line, ask the bot three pricing questions, and if it contradicts their published prices, send the owner that transcript. A cold email containing your own bot misquoting your own product converts unlike anything else.

## 10. Build complexity — justification

**Low.** No model training, no novel infrastructure. Conversation ingestion from the WhatsApp Business Platform, a structured ground-truth capture form, an LLM evaluation pass with a small-model-first / large-model-escalation ladder, a digest delivered over WhatsApp, and a flat React dashboard. The genuine work is in evaluation quality — building the prompt and test harness so it catches implied commitments in Hinglish without drowning the owner in false positives, which is a corpus and iteration problem, not an engineering-difficulty problem. A technical solo founder ships a credible v1 in 6–8 weeks; a pair does it in 5.

The one dependency worth naming: this rests on programmatic access to agent conversation history for the connected business. That is the first thing to verify in the validation sprint, and if access is materially thinner than expected, the fallback is the on-device/forwarded-transcript route — worse UX, same product, and it removes the dependency entirely.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Business audits its own customer conversations; consent and retention handled under DPDP as data fiduciary support |
| Ethical — no harm / dark patterns | ✅ | Product exists to make businesses honour what customers were told. Consumer-positive by construction |
| Market exists (evidence above) | ✅ | 1M+ Business Agent deployments; documented hallucination modes; enterprise equivalents at $100K/yr |
| 1–5 person team can build this | ✅ | Off-the-shelf APIs, no training, 6–8 weeks solo |
| Launchable with <$50K / ₹40L | ✅ | Realistically ₹4–6L: inference, WhatsApp messaging, hosting, one contract Portuguese/Spanish reviewer |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real and legally consequential — deployer is bound by what the bot said — but it's a *latent* pain until an incident happens. Many owners haven't been burned yet, and unburned owners buy slower. This is the honest cap on the score. |
| Demand evidence | 15 | 11/15 | Strong platform and legal evidence, strong adjacent-spend evidence (₹1,999–2,500/mo chatbot add-ons; $100K/yr enterprise guardrails). Weak spot: I could not source verbatim SMB owners complaining specifically about Meta Business Agent errors — the launch is eight weeks old and that corpus doesn't exist yet. Marked down accordingly. |
| Build feasibility | 15 | 13/15 | Off-the-shelf everything; 6–8 weeks solo. Held back only by the conversation-access dependency. |
| Distribution clarity | 15 | 12/15 | Free-audit-as-demo is unusually strong, and the agency reseller channel is real and named. Not a 14 because reaching Indian SMB owners at volume is a grind regardless of how good the hook is. |
| Revenue mechanics | 15 | 11/15 | Price points benchmarked against what this buyer already pays. 1,700 customers to $1M is credible. Sub-$25 entry ACV means churn hurts and support cost per rupee is high. |
| Time to first revenue | 10 | 8/10 | Free audit → paid conversion inside a week is plausible; realistic first revenue 5–7 weeks post-launch. |
| Defensibility | 10 | 2/10 | This is the weak axis and it deserves the low mark. Meta could ship a "review what your agent said" panel and end the category overnight. Wati/AiSensy/Interakt could bolt it on and they own the customer relationship. What you accumulate — violation patterns per vertical, evaluation corpora in Hinglish, the exposure ledger as a record customers won't want to abandon — is real but slow. Assume a 9–12 month head start, not a moat. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical because evaluation quality is the product and false positives kill trust fast. Content because distribution runs on a stream of real anonymized "look what the bot promised" artifacts, published relentlessly in owner communities.

### Key assumptions to validate

1. **Assumption:** A business can programmatically retrieve its Meta Business Agent conversation history at usable fidelity. **How to test:** Stand up a test WhatsApp Business account, activate Business Agent, and attempt ingestion in week one. This is the binary that gates everything.
2. **Assumption:** Real deployed agents produce authorization violations at a rate owners find alarming — target ≥1 material violation per 500 conversations. **How to test:** Run free audits on 20 live businesses and count. Below that rate, the daily digest is empty and the product has no recurring reason to exist.
3. **Assumption:** SMB owners will pay ₹1,999/mo for a risk they haven't personally been burned by. **How to test:** Take the first 30 free audits to a paid ask. Watch whether the ones who converted are disproportionately those whose report contained a violation — if conversion is near-zero without a finding, the product only sells to the already-burned and the market is far smaller than the installed base suggests.
4. **Assumption:** Evaluation is accurate enough in Hinglish/code-switched text to be trusted. **How to test:** Hand-label 500 real conversations, measure precision and recall on commitment detection. Precision matters more than recall here — three false alarms and the owner stops opening the digest.

### Risk flags

1. **Platform dependency — severe.** The entire product sits downstream of a Meta surface. Meta controls the model, the runtime, the data access and the roadmap. A first-party "agent review" panel is an obvious thing for them to build, and API access terms can change without notice. This is the defining risk and the reason defensibility scored 2.
2. **Incumbent bolt-on.** Wati, AiSensy and Interakt already bill these customers monthly. Conversation QA is a plausible add-on for any of them. Their poor support reputations buy time, not safety.
3. **Latent-pain sales cycle.** "Something bad might have happened" sells worse than "something bad did happen." If the free audit comes back clean, there's no urgency. Mitigate by leading with the vertical where price variance makes violations most likely.
4. **False positives destroy trust faster than misses.** An owner who gets three bogus alarms stops reading the digest, and a digest nobody reads churns in month two.
5. **Data sensitivity.** You're ingesting full customer conversations including personal data, under a DPDP regime whose full enforcement lands May 2027 with seven-year consent-record duties. Retention, residency and processor terms have to be right from day one, not retrofitted.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder or pair, comfortable with LLM evaluation
                        work, with distribution reach into Indian SMB / WhatsApp
                        reseller-agency circles
Time to revenue:        5–7 weeks post-launch
Capital to launch:      ₹4–6 lakh ($5–7K)
Top 3 assumptions to validate first:
  1. Programmatic access to Business Agent conversation history — build a test
     account and attempt ingestion in week one. Binary gate.
  2. Violation base rate ≥1 material incident per 500 conversations — measure
     across 20 free audits on live businesses.
  3. Willingness to pay absent a personal incident — take 30 free audits to a
     paid ask and compare conversion between clean and violation-found reports.
Kill criteria:
  - Abandon if conversation history cannot be ingested at usable fidelity and the
    forwarded-transcript fallback tests as unusable with 10 owners.
  - Abandon if 20 live-business audits surface fewer than 1 material violation per
    2,000 conversations — the digest would be permanently empty.
  - Abandon if fewer than 4 of 30 free-audit businesses convert to paid within
    two weeks of the report.
  - Abandon if Meta ships a first-party agent transcript-review and violation
    surface before v1 reaches 100 paying customers.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Stand up a WhatsApp Business account, activate Meta Business Agent, load a fake 40-SKU catalog with a stated discount ceiling. Attempt programmatic retrieval of the conversation history. Simultaneously, adversarially interrogate the agent — haggle, ask for bulk discounts, push on delivery dates, ask about products not in the catalog — and log every commitment it makes that the ground truth doesn't support. This answers both the access question and the base-rate question on synthetic data.
- **Day 3–4:** Recruit 15–20 real businesses running Business Agent from Indian D2C owner groups by offering a free audit of their last 1,000 conversations. Run the evaluation manually if the pipeline isn't ready — the output matters, not the automation. Count material violations per business.
- **Day 5:** Take every business whose report contained a violation, plus every business whose report was clean, to the same ₹1,999/mo ask. Record conversion split by finding.
- **Go/no-go:** Proceed only if (a) conversation history is retrievable or owners accept the fallback, (b) material violations run at ≥1 per 500 conversations across the cohort, and (c) ≥4 of the ~20 audited businesses commit to paying. Anything less and the pain is real but too rare to charge a subscription for — which is a falsifiable result, not a vibe.
