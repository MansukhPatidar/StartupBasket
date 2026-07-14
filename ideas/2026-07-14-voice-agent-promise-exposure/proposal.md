---
title: "PromiseCatcher — overcommit screen for AI receptionists"
slug: voice-agent-promise-exposure
date: 2026-07-14
category: ProfessionalServices / US — Home Services, Clinics & Local SMBs Running AI Phone Receptionists (promise and quote exposure)
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Reads every call your AI receptionist took and tells you what it promised that you can't actually deliver."
tags:
  vertical: ProfessionalServices
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Voice-first, Solo-builder, Compliance-driven]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# PromiseCatcher

## 1. One-liner

Reads every call your AI receptionist took and tells you what it promised that you can't actually deliver.

## 2. Trend signal — why now?

Three things happened in the last eighteen months and they collide in exactly one place.

**One: SMBs bought AI phone agents en masse, and they are not technical.** As of Q1 2026 roughly 34% of US businesses with 10–500 employees have deployed or are piloting AI voice tech ([AInora, State of AI Voice Agents 2026](https://ainora.lt/blog/state-of-ai-voice-agents-report-2026)). Gartner projects 60% of small service businesses — healthcare, legal, dental, beauty, hospitality — will use some form of AI phone handling by 2028, up from ~25% today. The market is $4.8B in Q1 2026, up from $1.9B in 2024, and the *fastest-growing* segment is explicitly "SMB managed services, reflecting the wave of non-technical business owners adopting AI receptionists for the first time." One vet-clinic vendor alone claims 2,500+ clinics at $109/mo. These buyers are plumbers and dentists. They bought a thing that talks to customers all day and they do not read the transcripts.

**Two: the law already settled who eats the mistake — the SMB does.** The Air Canada precedent is decided law: the BC tribunal ruled the airline owed $812 because its chatbot invented a bereavement-fare policy, with the tribunal member writing that "it makes no difference whether the information comes from a static page or a chatbot" ([American Bar Association, Feb 2024](https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/)). Courts apply plain agency law: your voice agent is your electronic agent, and its promises are your promises. Meanwhile 88% of AI vendors cap their own liability at the monthly subscription fee ([Clifford Chance, Feb 2026](https://www.cliffordchance.com/insights/resources/blogs/talking-tech/en/articles/2026/02/agentic-ai-and-the-liability-gap-your-contracts-may-not-cover.html)). You pay Vapi $200/mo; their maximum exposure is $200. Yours is the job.

**Three — and this is the one nobody has priced in: insurance just walked away.** In 2026 the ISO began formally codifying the AI coverage gap through new endorsement forms, and carriers are adopting absolute AI exclusions across CGL, D&O and professional liability. Those exclusions specifically deny coverage for "statements or representations made by chatbots or virtual agents" ([Lathrop GPM, May 2026](https://www.lathropgpm.com/insights/the-ai-coverage-gap-what-new-insurance-exclusions-mean-for-your-business/)). Read that again. The exact thing the SMB's new receptionist does eight hours a day is the exact thing their policy now excludes. They find out at renewal.

So: mass adoption by non-technical owners, full legal liability on the owner, and the insurance backstop being pulled out from under them in the same twelve months. The failure isn't hypothetical either — a documented home-services case had an AI CSR promise same-day service when the business was booked out a week, and another promised priority service to 27 callers over three weeks that the business could not staff ([Tradesly](https://www.tradesly.ai/blog/when-your-ai-agent-makes-a-mistake-understanding-liability-for-autonomous-call-h)).

```
Provenance:
  - Signal 1 (Demand): 34% of US SMBs (10-500 employees) have deployed or are piloting AI voice agents as of Q1 2026; fastest-growing segment is explicitly non-technical first-time SMB buyers; Gartner projects 60% of small service businesses by 2028 — https://ainora.lt/blog/state-of-ai-voice-agents-report-2026 — 2026-07-14
  - Signal 2 (Feasibility/Economic): Courts apply agency law to AI agents — the deploying business is bound by its bot's promises (Air Canada, $812 damages, "no difference whether the information comes from a static page or a chatbot"); 88% of AI vendors cap liability at the monthly fee — https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/ + https://www.cliffordchance.com/insights/resources/blogs/talking-tech/en/articles/2026/02/agentic-ai-and-the-liability-gap-your-contracts-may-not-cover.html — 2026-07-14
  - Signal 3 (Economic/Regulatory): ISO codified AI exclusions in 2026; carriers adopting absolute exclusions that deny coverage for "statements or representations made by chatbots or virtual agents" — the uninsured gap opens at 2026 renewals — https://www.lathropgpm.com/insights/the-ai-coverage-gap-what-new-insurance-exclusions-mean-for-your-business/ — 2026-07-14
  Category: Tech-unlock
```

## 3. The opportunity

Every voice-AI QA tool on the market sells to the wrong person.

Coval, Cekura, Hamming, Bluejay — all real, all funded, all good. Look at who they sell to. Coval's cheapest tier is $100/mo for "100 simulation mins/month" and its own copy targets engineering teams shipping on "LiveKit, Pipecat, or custom stacks" ([Coval pricing](https://www.coval.ai/pricing/)). Cekura is a YC F24 company charging $30/mo for a *Developer* plan with credits burned at 5 per voice-testing minute; its named customers are Twin Health, Lindy, Mindtickle. These are **pre-production simulation platforms for the people who build voice agents**. They test that the agent behaves before it ships.

Nobody is selling to the person who *deploys* one and carries the liability. The dentist did not build her voice agent. She bought it from a $199/mo white-label reseller. She has no engineering team, no eval harness, no idea what a "simulation minute" is, and no intention of learning. She has exactly one question, and it is not "what is my agent's task-completion score." It is: **"did that thing promise anybody something I can't do?"**

That's the gap. The incumbents optimize the agent. Nobody defends the owner. The 10× isn't better AI — it's aiming the same technology at the person who actually gets sued, in language they already speak, at a price that sits next to the $109/mo they pay for the agent itself.

Second, quieter opportunity: the reseller channel. Thousands of agencies now white-label AI receptionists to SMBs at $199–599/mo with 50–80% gross margins ([Trillet, 2026](https://www.trillet.ai/blogs/white-label-ai-profit-margins)). Those agencies are the ones who get the angry phone call when the bot overpromises, and they have no answer. They will happily bundle a defensive layer and mark it up — because it's the thing that keeps their client from churning.

## 4. Target market

- **Primary customer:** Owner or office manager of a US service SMB running an AI phone receptionist — HVAC/plumbing/electrical contractors, dental and vet clinics, med spas, law firms, salons. 5–50 employees, $500K–$10M revenue, revenue directly tied to inbound calls. Secondary buyer: the white-label agency reselling receptionists to 20–100 such SMBs.
- **Why they buy:** They already know the bot is loose with its mouth. The industry's own testing writeup says the AI is "structurally worst at" exactly the calls that matter — price negotiation, complaints, high-value custom work — and that the classic owner mistake is "setting it up once and never reading the call transcripts again. The tool's weaknesses only show up in the actual conversations" ([Lilach Bullock, 2026](https://www.lilachbullock.com/ai-phone-receptionist-small-business-cost/)). Nobody has time to read 400 transcripts a month. They want the three that will cost them money.
- **Rough TAM reasoning:** ~6M US businesses with 5–500 employees. Take the call-driven service verticals (home services, dental, vet, legal, beauty, medical) — conservatively 1.5M. At 34% current AI-voice deployment, ~500K businesses are running a voice agent *today*, heading to 60% of small service businesses by 2028. I need 500 of them at $200/mo for $1.2M ARR. That's 0.1% of the ones that already have the problem.
- **Why now for them:** Their insurance renewal is the forcing function. The AI exclusion endorsements are landing in 2026 policies. The moment a broker tells a contractor "your policy no longer covers what your chatbot says," the contractor needs to know what his chatbot has been saying.

## 5. Product sketch (MVP)

- **Connect your receptionist in one click.** Pull call transcripts from the platforms SMBs actually use — Retell, Vapi, Bland, Synthflow, and the white-label wrappers on top of them — plus a plain phone-forward fallback for anything else.
- **The overcommit feed.** One screen. Every call where the agent made a commitment the business may not be able to honor: a price, a date, a discount, a warranty claim, an availability promise, a "we can definitely do that." Ranked by dollar exposure, not by chronology.
- **Ground truth from the business, not from the model.** The owner uploads their real price list, real service area, real lead time, real promo end dates. The product compares what the agent *said* against what the business can *actually deliver*. This is the whole trick — everyone else scores the agent against itself.
- **Daily "here's what it promised" digest.** Three lines at 6pm: what was committed, to whom, what it'll cost if honored, and the call recording. Owner clicks "honor it" or "call them back."
- **The promise ledger.** Every commitment the agent ever made, timestamped, with the audio and transcript, exportable as a PDF. This is what you hand your lawyer, your insurer, or the customer who says "your machine told me $99."
- **Drift alerts.** The agent starts quoting a promo that ended, or promising a service you dropped, or offering same-day when you're booked out — you hear about it that evening, not next quarter.
- **Disclosure check.** Flags calls where the agent failed to disclose it was AI, which several states now require and the FCC has an open NPRM on ([Henson Legal, 2026](https://www.henson-legal.com/ai-voice-compliance)).

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The core job is reading a rambling four-minute phone conversation between a homeowner and a bot and extracting a structured claim — *"agent committed to a $99 tune-up, same-day, Thursday"* — then reconciling it against the business's actual price list and actual calendar. That's semantic extraction plus contradiction detection over speech, at a per-call cost low enough to run on every call for a business paying $109/mo. That capability is about eighteen months old at this price point.

It's also nicely recursive: the load-bearing AI here exists *because* other AI is now making binding statements at scale. The product is a consequence of the wave, not a decoration on it.

Note what's *not* load-bearing: no custom model, no fine-tuning, no proprietary corpus. Off-the-shelf transcription plus a good extraction prompt plus the customer's own uploaded price list. That's the whole engine.

## 7. Localization angle (if any)

US-first, deliberately. The wedge is a US legal-and-insurance artifact: agency-law liability for electronic agents, ISO's 2026 exclusion endorsements, TCPA/FCC disclosure rules, and state bot-disclosure laws (California requires disclosure when a bot incentivizes a commercial transaction; Utah requires it on request and proactively for regulated professions). Those specifics are the moat and they don't travel.

The EU is the obvious second market and it's *stronger*, not weaker — AI Act Art. 50 deployer disclosure obligations plus stricter consumer-contract law — but it's a different product build, and I'd rather win one geography than half-serve two. India/SEA are wrong for v1: AI receptionist penetration among SMBs is early and willingness-to-pay for a defensive layer is near zero when the primary tool itself is a hard sell.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo (up to 500 calls/mo), $299/mo (up to 2,000), $599/mo (multi-location). Agency/reseller tier: $999/mo for up to 25 client businesses, white-labeled — they resell at $99–149/client and keep the spread.
- **Why this price holds:** it sits alongside what they already pay. The receptionist is $109–599/mo. The thing that stops the receptionist from costing you a $2,000 job is not a harder sell at $149 — it's the cheapest insurance in the stack, especially now that actual insurance has excluded it. One caught overcommit pays for a year.
- **ACV:** ~$2,400 blended (direct SMB ~$1,800/yr; agency accounts far higher).
- **Rough math to $1M ARR:** 420 direct SMBs at $199/mo average = $1.0M. Or 60 agency accounts at $999/mo + 250 direct = $1.3M. The agency path gets there with 60 sales, not 420 — that's the one I'd push.
- **Rough math to $5M ARR:** ~2,000 direct-equivalent accounts. Requires the reseller channel to carry the majority (150–200 agency accounts, each covering 20–50 SMBs) plus vertical land-grabs in dental and home services. Plausible inside 24 months *only* if the insurance-exclusion story is as sharp a wedge as it looks; if not, this is a $1–2M business, which is still fine.
- **Expansion path:** per-location pricing for multi-site clinics and franchise groups (a 12-clinic dental group is 12× the calls and 12× the exposure); an annual "promise audit" PDF the SMB hands to its insurance broker at renewal; eventually, sell the aggregated overcommit data back to the voice platforms and to insurers who need to price the risk they're currently just excluding.

## 9. Go-to-market wedge — first 100 customers

- **Attack the reseller channel first — it's a list, and it's short.** There is a dense, visible population of white-label AI-receptionist agencies (they advertise loudly: Vida, Trillet, Ringlyn, VoiceAI Connect, Vendasta and their partner directories). Enumerate 300 of them from their own reseller/partner pages and marketplace listings. The pitch writes itself: "your client's bot promised a $99 special that ended in March. You found out when they called you angry. Here's the tool that catches it first — white-label it, charge $129, keep $80." One agency lands 20–50 SMBs. 60 agencies is the whole $1M.
- **Insurance brokers are the trojan horse.** Independent commercial P&C brokers are, right now, having to tell SMB clients their new policy excludes chatbot representations. That's an awkward conversation with no solution attached. Give 50 brokers a free "AI exposure check" they can run for any client with a voice agent — it makes them look proactive, and every run surfaces the exposure that sells our product. Broker referral is a warm, credible, non-technical channel into exactly the right buyer.
- **Free "what did your bot promise last month?" audit as the top of funnel.** One-time, self-serve: connect the receptionist, we read last month's calls, we email you the list of commitments with dollar exposure. It's a demo that *is* the product. Run it as the offer in the two places these owners congregate — the trades and clinic subreddits/Facebook groups (r/HVAC, r/Plumbing, r/Dentistry, vet practice-management groups) and the vendor communities of Retell/Vapi/Synthflow where the agencies themselves hang out.
- **Ride the renewal calendar.** Commercial policies renew on a schedule. Content and outbound timed to "your AI exclusion lands at renewal — here's what your bot said this year" has a hard deadline attached, which is the only thing that reliably moves an SMB owner.
- **Land the vertical trade press.** Dental and home-services trade publications and podcasts are cheap, under-covered, and their audience just bought AI receptionists. One good "your AI receptionist is writing checks your business can't cash" piece in a trade outlet outperforms a month of cold email.

## 10. Build complexity — justification

**Low.** Everything is off the shelf: transcript ingestion via the voice platforms' existing APIs and webhooks, standard transcription where raw audio is all you get, an LLM extraction pass per call, and a reconciliation step against a price list the customer uploads as a spreadsheet. No custom models, no fine-tuning, no proprietary dataset, no hardware.

The only genuinely fiddly work is the integration surface — Retell, Vapi, Bland, Synthflow and the white-label wrappers each expose call data differently, and some of the cheap resellers expose almost nothing (which is why the plain call-forward + record fallback matters). Call it 6–8 weeks to a v1 a real customer can connect, for one or two people. The hard part of this business is distribution, not construction — which is exactly the shape I want.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Customer connects their own call data. Two-party-consent recording states are the one wrinkle, and the receptionist vendor already handles consent at call open — we consume what they captured. |
| Ethical — no harm / dark patterns | ✅ | The product exists to make businesses honor or correct what they promised. It surfaces commitments rather than hiding them. Actively pro-consumer. |
| Market exists (evidence above) | ✅ | ~500K US SMBs already running voice agents; funded QA incumbents prove the category, and they've left the deployer segment wide open. |
| 1–5 person team can build this | ✅ | Two people, 6–8 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Inference is the main variable cost and it's cents per call. Well under $20K to launch. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money, and now uninsured money. But it's felt *episodically* — the owner feels it hard the week a bot promises 27 people priority service, and forgets about it the other eleven months. That's a 16, not a 19. Fear-of-loss sells worse than bleeding-right-now. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: mass adoption, funded QA incumbents, decided case law, insurers actively excluding the risk. What I don't have is a pile of SMB owners on Reddit demanding *this specific product* — the searches for that came back thin. They feel the pain; they haven't named it yet. Docked accordingly. |
| Build feasibility | 15 | 13/15 | Off-the-shelf everything. Integration surface across a fragmented vendor landscape is the only real work. |
| Distribution clarity | 15 | 12/15 | The reseller-agency list is enumerable and the pitch is sharp; the insurance-broker channel is genuinely novel. Not a 14 because both channels are intermediated — I'm one step removed from the end buyer, and that always converts worse than the deck says. |
| Revenue mechanics | 15 | 11/15 | Pricing anchors cleanly against a tool they already pay for, and $1M needs only ~420 accounts. But this is a second purchase for a cost-conscious SMB, and "insurance against a thing that hasn't happened yet" churns when it's quiet. Retention is the assumption I'd least like to be wrong about. |
| Time to first revenue | 10 | 8/10 | The free audit is the demo and the demo is the product. Pilot cash from one agency inside 8 weeks is realistic. Not a 9 — agencies buy slower than individuals. |
| Defensibility | 10 | 4/10 | Honest answer: thin. Coval or Cekura could aim a "deployer" SKU at this in a quarter if they cared, and the voice platforms could ship a worse version of it for free. What accrues over time is the reconciliation corpus — knowing what a plumber's bot typically overpromises, per vertical — plus the insurer/broker relationships, which are slow and relationship-bound. That's a real head start, not a moat. Execution-only. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Technical enough to eat a fragmented integration surface and get extraction accurate enough that the digest is trusted. But the binding constraint is *sales* — this business is won or lost on whether you can get 60 white-label agencies and 50 insurance brokers to carry you. A pure builder will ship this in eight weeks and then starve.

### Key assumptions to validate (3–5)

1. **Assumption:** AI receptionists in the wild actually make material overcommitments at a meaningful rate — not once a year, but a few times a month per business. **How to test:** get transcript access from 10 SMBs (offer the audit free), read 3,000 real calls, count the commitments that contradict the business's actual price list and lead time. If the rate is under ~1 material overcommit per business per month, the product has no recurring value and the whole thing collapses to a one-time audit.
2. **Assumption:** the owner will pay ~$149/mo for a defensive tool on top of the $109–599 they already pay for the agent. **How to test:** run the free audit for 30 businesses, then put a price on continuing. Measure conversion, not enthusiasm. Under 20% and the pricing is wrong or the pain isn't recurring.
3. **Assumption:** white-label agencies will bundle and resell this rather than shrug. **How to test:** 30 conversations with agencies from their own partner directories. The tell isn't "interesting" — it's whether they'll commit to putting it in front of five clients this month.
4. **Assumption:** the insurance-exclusion story lands with brokers as a reason to refer. **How to test:** 15 broker conversations. If they can't name a single client who's asked about AI exclusions, the wedge is too early and I lean on the agency channel alone.

### Risk flags

1. **Platform dependency:** the whole product reads call data from Retell/Vapi/Bland/Synthflow and their resellers. Any of them can ship a native "compliance review" tab and blunt this, or restrict transcript access. Mitigation is the call-forward fallback and the fact that the reconciliation-against-real-price-list step is the customer's data, not the platform's — but this is the sharpest knife pointed at the business.
2. **Market timing (early):** the demand evidence is structural and legal, not yet a chorus of complaints. SMB owners feel this pain but haven't articulated it as a category, which means the first year is spent creating awareness, not capturing it. Category creation is expensive for a bootstrapper. This is why it's a 76 and not an 82.
3. **Weak moat:** execution-only. A funded incumbent with a deployer-facing SKU is a real threat, and the six-month head start is the entire advantage.
4. **Quiet-period churn:** if the bot behaves for three straight months, the owner cancels. The fix is making the promise ledger the system of record they hand to their insurer — an artifact they need annually whether or not anything went wrong — but that's a hypothesis, not a proven retention mechanic.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can sell — comfortable cold-calling
                        agency owners and insurance brokers, not just shipping
Time to revenue:        8–10 weeks (free audit → paid conversion; agency pilot)
Capital to launch:      $15–20K
Top 3 assumptions to validate first:
  1. Overcommit rate — read 3,000 real calls across 10 SMBs; need ≥1 material
     overcommitment per business per month for recurring value to exist
  2. Willingness to pay — free audit for 30 businesses, then price it; need >20%
     conversion to paid
  3. Channel — 30 white-label agency conversations; need ≥5 committing to put it
     in front of clients this month
Kill criteria:
  - Abandon if the overcommit rate across 3,000 real calls is <1/business/month —
    then it's a one-time audit, not a subscription, and there's no business here
  - Abandon if <20% of businesses that receive a free audit showing real dollar
    exposure will pay anything to keep it running
  - Abandon if Retell/Vapi/Synthflow ship a native promise-review feature before
    v1 lands — the platform owns the data and wins that fight on price (free)
```

## 15. Next step — 1-week validation sprint

The entire idea rests on one empirical question: **do these bots actually overpromise often enough to be worth a subscription?** Everything else is downstream. So spend the week finding out, not building.

- **Day 1–2:** Recruit 10 SMBs already running an AI receptionist — home services and dental, via the trades subreddits and two white-label agencies who'll introduce clients. The offer costs them nothing: "send me last month's call transcripts and your price list, I'll send back everything your bot promised that you can't deliver." Free, no product, done by hand.
- **Day 3–4:** Read the calls — target ~3,000 across the 10 businesses. Hand-tag every commitment: price quoted, availability promised, discount offered, warranty asserted, service committed. Reconcile each against that business's actual price list, lead time, and service area. Count the contradictions and put a dollar figure on each. This is a spreadsheet, not a codebase.
- **Day 5:** Send each owner their list. Then ask for money — "$149/mo and this lands in your inbox every evening." Their answer is the whole verdict.

**Falsifiable outcome:** ≥1 material overcommitment per business per month across the 3,000 calls, AND ≥3 of the 10 owners agree to pay $149/mo on the spot. Hit both, build it. Miss the overcommit rate and the idea is dead as a subscription — it's a one-off audit service and I walk. Hit the rate but miss the payment, and the problem is real but the pricing or the buyer is wrong, which means one more week testing the agency as the buyer instead of the SMB.
