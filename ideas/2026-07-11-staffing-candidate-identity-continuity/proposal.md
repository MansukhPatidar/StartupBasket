---
title: "SameHand — identity-continuity dossier for staffing agencies"
slug: staffing-candidate-identity-continuity
date: 2026-07-11
category: HRTech / US-SMB
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Proves the person you interviewed is the person on the client's payroll — and hands the client the receipt."
tags:
  vertical: ProfessionalServices
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Compliance-driven, Trust-and-safety, Staffing]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# SameHand

## 1. One-liner

Proves the person you interviewed is the person on the client's payroll — and hands the client the receipt.

## 2. Trend signal — why now?

Candidate identity fraud stopped being an anecdote and became an operating condition of remote staffing.

The numbers moved fast. Gartner projects **1 in 4 candidate profiles will be fake by 2028**. SIA's Workforce Solutions Buyer Survey found **41% of staffing buyers already report candidate-fraud challenges**, and more than half — **54%** — reported experiencing some type of identity-related fraud in their contingent workforce program. Reported losses from job-related fraud went from **$90M in 2020 to over $501M in 2024** — a 457% jump in four years.

The damage lands on the agency, not the platform. Of businesses hit by a fraudulent placement, **23% lost over $50,000 and 10% lost more than $100,000**. And when InCruiter switched on deepfake detection in early 2026, it found fraudulent activity in **25–30% of flagged sessions** — roughly double what experienced human interviewers were catching.

The state-actor angle turned this from an HR annoyance into a liability event. DOJ's "DPRK RevGen: Domestic Enabler" initiative explicitly targets entities that place "workers with falsified credentials into U.S. companies **via staffing platforms**." In April 2026 Mandiant said hundreds of Fortune 500 organizations have unwittingly hired North Korean IT workers; CrowdStrike logged a **220% YoY increase** in DPRK IT-worker activity across 320 incident-response cases. One U.S. facilitator used **60 stolen identities to place workers at 300+ companies**. OFAC penalties can land on a company that never knew.

Meanwhile the tooling to *fix* it got cheap. Document + biometric identity verification is now a commodity API at **$1.50–$5 per verification** (Stripe Identity ~$1.50, Persona $2–$5, biometric-only checks $0.50–$1.50). Face-match and liveness that cost an enterprise integration project three years ago is now a $2 API call.

So: the fraud is epidemic, the liability is now criminal-adjacent, the buyer is terrified, and the fix costs two dollars. That gap is the business.

**Provenance:**
  - Signal 1 (demand): ASA — "We're seeing it, and we're not just seeing it once in a while; we're seeing it all the time." Staffing "uniquely impacted"; 23% of affected firms lost >$50K — https://americanstaffing.net/posts/2026/01/06/fake-workers-real-damage/ — 2026-01-06
  - Signal 2 (feasibility): Identity verification + liveness/face-match commoditized to $1.50–$5/verification via Stripe Identity, Persona, and peers — https://trustswiftly.com/blog/identity-verification-pricing-comparison-and-alternatives/ — 2026 (accessed 2026-07-11)
  - Signal 3 (economic): DOJ "DPRK RevGen" enforcement explicitly names staffing platforms; CrowdStrike reports 220% YoY rise in DPRK IT-worker cases; Gartner projects 1-in-4 fake profiles by 2028 — https://www.crowell.com/en/insights/client-alerts/doj-announces-major-enforcement-actions-targeting-north-korean-remote-it-worker-schemes and https://staffinghub.com/hiring/candidate-verification-ai-resume-fraud-staffing-firms-2026/ — 2026
  Category: Tech-unlock

## 3. The opportunity

Every existing tool guards **one moment**. SameHand guards **the seam between moments**.

Background-check incumbents (HireRight $39.95–$79.95/check, Checkr ~$30–$87 all-in) answer "does this identity have a clean record?" They do not answer "is the human on the Zoom the human on the ID?" They run once, at offer stage, and go quiet forever.

The new deepfake-detection crop — Sherlock AI, Verif-Hire, InCruiter — answers "is this interview being faked *right now*?" They live inside the interview, sell to enterprise HR, and go quiet the moment the call ends.

Neither closes the loop that actually burns the staffing agency. The fraud pattern that kills a contract is a **swap**: a real, verifiable person passes ID and passes the interview, and a different person shows up to do the work. From the *Ask a Manager* and Reddit case files — a new hire introduced himself as "Josh" with a Midwestern accent when the interviewed candidate was Guatemalan; another stopped appearing on camera, and when finally forced on, was visibly lip-syncing to someone else's audio. A point-in-time check cannot catch this by construction. Only **continuity** catches it.

And here's the commercial insight the incumbents miss: the staffing agency's real product is **not** a verified candidate. It's a **client who believes the candidate is verified**. When a placement goes bad the agency doesn't just lose a fee, it loses the account and the MSP relationship behind it. So the agency will pay not for a check, but for **a document it can hand its client** that transfers the trust — and, if it ever goes wrong, transfers the blame.

Nobody is selling the small agency a defensible, client-facing chain-of-custody record. That's the hole.

## 4. Target market

- **Primary customer:** Owner or Director of Delivery at a **US contract/contingent staffing agency, 5–40 recruiters, $3M–$40M in annual placement revenue**, placing **remote IT/engineering contractors** — the segment where the worker is never seen in person. Not the Fortune-500 MSP. The independent shop that lives or dies on 3–8 client relationships.
- **Why they buy:** In their own words. Susie Dietrich of AllTek Staffing: *"We're seeing it, and we're not just seeing it once in a while; we're seeing it all the time."* ASA General Counsel Brittany Sakata: *"Staffing is uniquely impacted because these are not workers coming in daily with face time."* They buy because one bad placement into their biggest client is an extinction-level event for a 20-person shop — and because their clients have started *asking them* how they verify identity, and they currently have no good answer.
- **Rough TAM reasoning:** ~26,000 staffing and recruiting agencies in the US; ~57% are in temporary/contract staffing (≈15,000). Strip to those placing remote knowledge workers at meaningful volume and the realistic serviceable base is **~4,000–6,000 agencies**. At a $600/mo average, 1,400 of them is $10M ARR. I need a fraction of a fraction.
- **Why now for them:** Clients are writing identity-verification language into MSA renewals, DOJ enforcement now explicitly names staffing platforms as the vector, and their own recruiters are visibly losing the arms race — **62% of hiring professionals believe job seekers are better at faking with AI than HR teams are at detecting it.**

## 5. Product sketch (MVP)

- **Sealed identity at submittal.** Candidate completes a 90-second document + selfie liveness check from a link. We store a face template, not a photo album. This becomes the anchor.
- **Interview continuity check.** A lightweight join-link or recorded-interview upload confirms the face on the interview is a match to the sealed anchor, and flags proxy/deepfake tells (lip-sync drift, gaze anomaly, virtual-camera signatures).
- **Day-1 and day-30 re-attestation.** A 15-second re-check pinged to the worker on start date and again a month in. This is the swap-catcher, and it is the feature nobody else ships.
- **The dossier.** A single, timestamped, client-facing PDF/URL: this identity, verified at these four moments, matched at each. Agency-branded. This is the artifact they email to the client — the whole product wraps around it.
- **Anomaly signals.** Time-zone/IP inconsistency between interview and work sessions, one face appearing under two candidate identities across the agency's own pipeline, and repeat-face detection across the customer base (see §6).
- **Break-glass alert.** If day-30 doesn't match day-1, the agency's delivery lead gets told before the client does. Getting to tell your client first is the entire value.
- **ATS drop-in.** Bullhorn and JobDiva first — that's where this segment lives.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. Three places it does real work:

1. **Face matching + liveness across time and compression.** Matching a passport selfie to a webcam frame to a laptop-camera check 30 days later, across different lighting, hardware and codecs, is a model problem. A human reviewer cannot do this at 200 placements/month and would be worse at it.
2. **Deepfake and proxy detection.** Real-time synthesis artifacts, lip-sync desynchronization, virtual-camera injection, gaze/blink irregularity. This is the arms race, and it is model-versus-model. InCruiter's own data — fraud found in 25–30% of flagged sessions, ~2× what human interviewers caught — is the proof that human review is not a substitute.
3. **The cross-customer face graph.** As agencies onboard, we accumulate face templates across the industry. The same operative applying to four different agencies under four identities is *invisible* to each agency alone and *obvious* to us. This is the one asset that compounds — see §12 defensibility.

The commodity ID-check APIs are the floor, not the product. The product is continuity + the graph on top of them.

## 7. Localization angle

`N/A — this is a US-first play.` The wedge is specifically US: the DOJ/OFAC enforcement pressure, the ASA-member agency structure, and the MSP/VMS contracting norms that make a client-facing dossier commercially meaningful. UK/EU is a fast-follow (same fraud, weaker enforcement hook), but shipping to both at once dilutes the one thing that makes the sale easy — "your client is going to ask you about DPRK exposure, and you need an answer."

One real constraint, not a localization angle but adjacent: biometric consent law. Illinois BIPA and Texas CUBI mean the consent flow and retention policy are a first-class product feature, not a footnote. Get this wrong and it's a class action. See §13.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered SaaS with a usage floor. **$399/mo** (up to 25 verified placements), **$899/mo** (up to 75), **$1,899/mo** (up to 200 + ATS integration + cross-agency graph alerts). Overage $12/placement.
- **Unit economics:** COGS per verified placement ≈ **$2–4** (one ID+liveness anchor at ~$1.50–$3, plus 3 lightweight re-checks at pennies each on our own face-match). At $899/mo for 75 placements that's ~$12/placement revenue against ~$3 cost — **~75%+ gross margin**, and it improves as we run more of the matching in-house.
- **ACV:** ~$7,200 realistic blended.
- **Math to $1M ARR:** **140 agencies × $600/mo × 12 = $1.0M.** One hundred and forty agencies out of ~5,000 addressable. That is a 3% penetration of a market that is actively frightened.
- **Math to $5M ARR:** ~600 agencies at a blended $700/mo, *or* 250 agencies plus one channel deal with a VMS/MSP that resells it into their supplier base. The second path is likelier and faster — and it's the natural acquisition trigger.
- **Expansion path:** Placements grow → tier upgrades. Then: (a) sell the dossier to the *client side* (the enterprise buying contract labor wants to mandate it across all its suppliers — that's a 10× ACV motion), (b) continuous monitoring for the duration of the contract, not just day-30, (c) insurance partnership — an underwriter will eventually price "SameHand-verified" placements differently, and that's real leverage.

## 9. Go-to-market wedge — first 100 customers

The buyer is countable, listed, and currently scared. That's as good as it gets.

- **The ASA member directory + SIA lists.** The American Staffing Association publishes its membership. Filter to IT/engineering contract staffing firms in the 5–40 recruiter band — that's a list of roughly 1,500–2,000 named agencies with named principals. This is not "SEO." This is a spreadsheet.
- **The fear-first cold email.** To each Director of Delivery: *"If one of your placed contractors is a proxy, your client finds out before you do. Here's a 3-minute Loom showing how you find out first."* Attach a sample dossier with their own logo on it. This segment answers email — they're salespeople. Expect 8–12% reply on a well-personalized 500-agency send; 100 demos gets me my first 15–20 paying agencies.
- **Ride the DPRK news cycle into the trade press.** Staffing Industry Analysts, StaffingHub, and ASA's own channels are *actively publishing on this* — I have three cited articles from 2026 alone. A vendor with real data ("we found N repeat faces across M agencies") is a story they will run for free. That's the content engine, and it is a credibility engine, not a traffic engine.
- **Bullhorn Marketplace.** Bullhorn is the ATS of record for this segment. Listing there is a distribution channel with pre-qualified intent, and the integration is the retention hook.
- **Sell the failure, not the feature.** Offer a free retroactive audit: send us your last 50 placements' interview recordings, we'll tell you if any two are the same face. When it comes back with a hit — and at a 25–30% flag rate on suspicious sessions, sometimes it will — that agency buys on the spot and tells three peers. Staffing is a gossip industry. Use it.

## 10. Build complexity — justification

**Medium.** The identity primitives are bought, not built — document verification, liveness and initial face-match are off-the-shelf APIs at $1.50–$5. What needs real engineering: the continuity state machine across four checkpoints, the deepfake/proxy detection layer (fine-tuning and evaluating on synthesis artifacts is genuine ML work, and it's an arms race that never ends), the cross-customer face-template graph with its privacy architecture, and the BIPA/CUBI-safe consent and retention design. Add the Bullhorn integration. Call it **14–18 weeks to a credible v1 for two people**, one of whom must be comfortable with vision models and biometric-data handling. This is the top end of Medium and I want to be honest that the ML arms race is a permanent operating cost, not a one-time build.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Legal, but biometric consent (BIPA/CUBI) is a hard compliance requirement, not optional. Consent flow must ship in v1. |
| Ethical — no harm / dark patterns | ✅ | With a caveat I take seriously: false positives accuse innocent job-seekers of fraud. Product must surface *signals for human review*, never auto-reject. Design this in or the idea is unethical. |
| Market exists (evidence above) | ✅ | SIA: 41% of buyers report fraud challenges, 54% report identity fraud. Not hypothetical. |
| 1–5 person team can build this | ✅ | Two people, 14–18 weeks. |
| Launchable with <$50K / ₹40L | ✅ | ~$25–35K: two founders' time, API credits, a modest GPU budget for the detection model, and legal review of the consent flow. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | Hair-on-fire. 23% of affected firms lost >$50K; a bad placement into a top-3 client can end a 20-person agency. Felt continuously, not seasonally. Not a 19 only because many agencies are still in denial and haven't been burned *yet* — which slows the sale. |
| Demand evidence | 15 | **13**/15 | Multiple independent hard signals: SIA buyer survey (41%/54%), Gartner 1-in-4 by 2028, DOJ enforcement naming staffing platforms, incumbents raising and shipping. A skeptic nods. Docked 2 because I have no direct evidence yet that agencies pay *for continuity specifically* rather than a cheaper point-in-time check. |
| Build feasibility | 15 | **11**/15 | ID primitives are commodity APIs. But deepfake detection is a real ML arms race and biometric-privacy architecture is non-trivial. 14–18 weeks, two people, one with vision-model chops. Solidly buildable, not trivially. |
| Distribution clarity | 15 | **12**/15 | Named, listed, countable buyers (ASA directory). Email-responsive segment. Trade press actively covering the topic. Bullhorn marketplace. Docked because agency owners are busy and the sale needs a fear trigger — conversion is real but not effortless. |
| Revenue mechanics | 15 | **12**/15 | 75%+ gross margin, $600/mo blended ACV benchmarked against $30–$87/check incumbents they already pay. $1M ARR = 140 agencies out of ~5,000. Docked because churn is an open question: if an agency goes a year without a fraud hit, do they still see the value? |
| Time to first revenue | 10 | **7**/10 | Pre-sellable on a design partnership before the product exists — this buyer will pay for a pilot. But it's a considered B2B purchase with a security review, not a credit-card swipe. 6–10 weeks to first dollar, realistically. |
| Defensibility | 10 | **4**/10 | Honest score. The workflow is copyable; the ID APIs are commodity. The *only* real moat is the cross-agency face graph — and it needs scale before it means anything, which is a chicken-and-egg. Month 3: no moat. Month 12: ATS workflow lock-in plus a graph with teeth. A funded incumbent (Checkr, HireRight) could ship this. That's the central risk. |
| **Total** | **100** | **76**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

You need someone who can fine-tune and evaluate a vision model on adversarial synthesis artifacts, *and* someone who can sit across from a staffing-agency owner and sell fear without being a ghoul. This is not a solo build.

### Key assumptions to validate (3–5)

1. **Assumption:** Agencies will pay for *continuity* (day-1/day-30 re-check), not just a cheaper interview-time check. **How to test:** Put both offers in front of 30 agency owners at identical price. If they pick the point-in-time check, the whole thesis collapses and I'm just a worse Sherlock AI.
2. **Assumption:** The client-facing dossier is the actual buying trigger — agencies want a thing to hand over, not a thing to use. **How to test:** Show 20 prospects two mockups: an internal risk dashboard vs. a client-branded verification certificate. Watch which one they immediately ask to send to their client.
3. **Assumption:** Candidates will complete a biometric check without abandoning. **How to test:** Run the flow on 200 real candidates in a design-partner agency. If completion is <85%, the recruiters will kill it internally — they will not risk losing candidates in a tight market.
4. **Assumption:** Cross-agency repeat-face detection actually finds hits at modest scale. **How to test:** Retroactive audit across the first 5 design partners' back catalogs. Zero hits across ~1,000 placements means the graph moat is a fantasy.

### Risk flags

1. **Incumbent risk (the big one):** Checkr and HireRight already own this buyer's screening budget and could bolt continuity on. My only defense is speed and the graph. If Checkr ships "continuous identity" before I have 100 agencies, I'm done. This is the single most likely way this dies.
2. **Biometric privacy / BIPA:** Illinois BIPA is a plaintiff's-bar magnet with statutory damages per violation. Sloppy consent or retention = class action that kills the company outright. This must be engineered correctly from day one, with real legal review in the launch budget. Non-negotiable.
3. **False-positive harm:** Wrongly flagging a legitimate job-seeker as fraudulent causes real damage to a real person and creates legal exposure for the agency. The product must never auto-reject — signals go to a human. If I get this wrong I fail the ethics gate retroactively.
4. **Arms-race treadmill:** Deepfake generation improves faster than detection. Detection accuracy is a permanent, ongoing engineering cost with no finish line. Budget for it forever or watch the product silently degrade into false confidence — which is worse than no product.
5. **Market timing (mild):** If enterprise clients start mandating their *own* identity verification directly on contractors, they disintermediate the agency's need to prove anything. Watch for VMS platforms building this natively.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Two-person team — one vision/ML engineer comfortable with
                        biometrics and adversarial detection, one operator who can
                        sell into staffing-agency owners. Prior HRTech or
                        trust-and-safety experience is a real edge.
Time to revenue:        6–10 weeks (design-partner pilots are pre-sellable)
Capital to launch:      $25–35K (API credits, modest GPU budget, legal review of
                        the biometric consent flow — do not skimp on the last one)
Top 3 assumptions to validate first:
  1. Agencies pay for continuity over a point-in-time check — A/B the offer at
     identical price across 30 agency owners.
  2. The client-facing dossier is the buying trigger — mockup test, internal
     dashboard vs. client-branded certificate, watch what they ask to forward.
  3. Candidate completion rate >85% on the biometric flow — run 200 real
     candidates through a design partner. Recruiters kill anything that loses
     candidates.
Kill criteria:
  - Abandon if <10% of 200 targeted ASA-directory agencies take a demo call.
  - Abandon if candidate completion rate on the biometric flow is <80% —
     recruiters will refuse to deploy it regardless of how good the detection is.
  - Abandon if Checkr or HireRight ships continuous identity verification for
     staffing before I have 100 paying agencies. That race is unwinnable from
     behind.
  - Abandon if the retroactive audit across the first 5 design partners' back
     catalogs surfaces zero cross-agency repeat faces — no graph, no moat, and
     it's a feature not a company.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the list. Pull the ASA member directory, filter to IT/engineering contract staffing firms with 5–40 recruiters. Target: 200 named agencies with a named Director of Delivery or owner. Simultaneously, mock up one thing only — the **client-facing dossier PDF**, agency-branded, showing identity verified at submittal, interview, day-1 and day-30.
- **Day 3–4:** Send the 200-agency sequence. Two variants, split evenly: (A) *"catch the fraud"* — an internal risk dashboard. (B) *"prove it to your client"* — the dossier. Identical price point in both. The variant that wins tells me what business I'm actually in, and if (A) wins I should probably not build this.
- **Day 5:** Run the demo calls. In each, ask one question and shut up: **"Has a client ever asked you how you verify a remote contractor is who they say they are — and what did you tell them?"** The answer tells me whether this is a vitamin or an emergency.

**Falsifiable go/no-go:** Book **≥20 demo calls from 200 emails (10%)** and get **≥6 agencies to verbally commit to a paid pilot at $399+/mo** by end of week. Below 10% reply, the fear isn't sharp enough to sell against yet — shelve it and revisit after the next DOJ enforcement headline. If the dossier variant (B) doesn't beat the dashboard variant (A) on reply rate, I've misread the buyer and the product needs reshaping before a line of code gets written.
