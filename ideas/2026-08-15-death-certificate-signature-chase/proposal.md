---
title: "CertChase — signature chaser for independent funeral homes"
slug: death-certificate-signature-chase
date: 2026-08-15
category: DeathCare / US
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Works the doctors who haven't signed your death certificates yet, so cremations stop sitting on one missing signature."
tags:
  vertical: ProfessionalServices
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Voice-first, Workflow-automation, Solo-builder, DeathCare]
axes:
  problem: 17
  demand: 11
  build: 13
  distribution: 12
  revenue: 10
  time: 8
  defensibility: 3
founderFit: [sales-heavy, operations-heavy]
featured: false
---

# CertChase

## 1. One-liner

Works the doctors who haven't signed your death certificates yet, so cremations stop sitting on one missing signature.

## 2. Trend signal — why now?

Three things moved at once, and they all point at the same bottleneck.

**States started putting a clock on the physician, not just the funeral director.** Colorado's SB23-020 rewrote the deadline: the funeral director files within 72 hours of taking custody, and the *physician* must complete medical certification within 72 hours of receiving the EDRS request. Critically, the bill defines "repeated or willful failure without reasonable cause" as unprofessional conduct under the Medical Practices Act, and mandates monthly reporting that names physicians who miss the deadline. That is the first time the certifier's delay became the certifier's problem instead of the funeral home's problem.

**Michigan just did the same thing, with a hard date.** HB 4077 and HB 4078 were signed into law on 17 March 2026 (Public Acts 3 and 4 of 2026). They prohibit physicians from neglecting or refusing to certify a death record, require certification within 48 hours, and require every physician and medical examiner to submit medical certifications through the state's web-based EDRS on or before 16 March 2027. So there's a live, dated, statewide migration happening right now where thousands of physicians who have never touched EDRS are about to be forced into it — and the funeral home is the one who feels it when they fumble.

**The people who absorb the delay are running out of staff.** Over 60% of funeral directors plan to retire by 2028, entering-the-field numbers are down, and NFDA data has funeral service employment growing only 3% from 2022–2032 while annual US deaths climb toward 3.67 million by 2060. Roughly 15,400 funeral homes operate in the US, majority independently owned. Fewer people, more cases, same phone calls.

Meanwhile the delay itself is well documented and openly complained about. Trident Society and other operators list "waiting on the doctor's signature" as a primary cause of cremation delay, because an unsigned certificate means no cremation permit and no release. Families experiencing it say things like *"it shouldn't take this long to sign a document."* In the UK, where the same structural problem got worse under a new system, the National Association of Funeral Directors reported delays of four weeks or more, and directors described the resulting "difficult conversations" with bereaved families.

And the software incumbents have not touched this. Passare built the *first-ever* EDRS integration in the nation — with Pennsylvania, announced January 2021 — and it does data submission. It pushes the record into the state system. It does not work the certifier. Five years later that's still described as the first and only death certificate integration of its kind, and Passare treats it as a rare exception to its develop-to-our-public-API policy. The market's most advanced product automates the keystroke, not the chase.

```
Provenance:
  - Signal 1 (demand): Physician signature delay named as a primary cause of cremation delay; NAFD reported 4+ week delays and "difficult conversations" with families — https://www.tridentsociety.com/ask-a-funeral-director/what-can-cause-delays-in-the-cremation-process/ , https://feeds.bbci.co.uk/news/articles/ce3l239yn7xo — observed 2026-08-15
  - Signal 2 (feasibility/regulatory): Michigan HB 4077/4078 signed 2026-03-17 mandate electronic physician certification by 2027-03-16 with a 48-hour clock; Colorado SB23-020 sets a 72-hour certifier deadline enforceable as unprofessional conduct with monthly non-compliance reporting — https://www.legislature.mi.gov/Bills/Bill?ObjectName=2025-HB-4077 , https://leg.colorado.gov/bills/SB23-020 — observed 2026-08-15
  - Signal 3 (economic): ~15,400 mostly independent US funeral homes; 60%+ of directors retiring by 2028 against rising death volume; funeral home software market $285.4M in 2026 growing 8.7% CAGR, with incumbents priced from $135/mo — https://www.nfda.org/ , https://markwideresearch.com/global-funeral-home-software-market , https://www.capterra.com/p/124753/Osiris/pricing/ — observed 2026-08-15
  Category: Regulatory arbitrage
```

## 3. The opportunity

Every death certificate is a two-party document. The funeral director owns the demographic half — name, dates, disposition, informant details. A physician, medical examiner, or coroner owns the medical half — cause and manner of death. The certificate is worthless until both halves are done, and nothing downstream can move: no cremation permit, no burial, no release, no insurance payout, no estate.

The funeral director controls their half completely and controls the other half not at all. So the job becomes chasing. Call the hospital. Get told the doctor is on rounds. Call the office. Leave a message with a receptionist who has no idea what EDRS is. Fax the form. Call again tomorrow. Somewhere in there, if the doctor signs but gets a field wrong, the registrar bounces it and the whole loop restarts — and now the funeral director is calling a physician who thinks they already did this.

Incumbent funeral software — Passare, Gather, Osiris, FuneralTech — is case management. It holds the file. It stores the family's details, the obituary, the invoice, the merchandise, the schedule. The best of them will even push the record into the state EDRS. None of them do the one thing that actually consumes the director's afternoon: **applying persistent, escalating, documented pressure to a specific human being who has not signed yet.**

That's not a UX gap in an existing feature. It's a whole missing category of work. It's also work that's ideally shaped for automation — it's repetitive, it's low-judgment, it's mostly phone calls and messages to a small recurring cast of certifiers, and it happens at exactly the moment when the funeral director should be sitting with a family instead of on hold.

And here's what makes it fresh in 2026 rather than 2021: the new statutes give the chaser *leverage*. Before Colorado and Michigan, a funeral director calling a doctor was a supplicant asking a favor. After, they're referencing a statutory deadline that carries professional-conduct consequences and, in Colorado, monthly reporting to the medical board. A polite, precise, well-documented reminder that cites the actual clock is a fundamentally more effective message than "hey doc, when you get a sec." The product isn't just automating the chase — it's automating a chase that recently got teeth.

## 4. Target market

**Primary customer:** Owner-operator or general manager of an independent US funeral home doing 75–400 cases a year, in a state with an active EDRS and a statutory certifier deadline. Start with Colorado and Michigan (deadline + enforcement + a dated migration), then Pennsylvania, New Jersey, Nevada, Virginia, Vermont, Maryland, New York. Typically 2–12 staff. Often the owner is also a licensed director carrying their own caseload.

**Why they buy:** In their words, from the public record — families tell them *"it shouldn't take this long to sign a document,"* and directors describe having "difficult conversations" with the bereaved about delays they didn't cause and can't fix. Directors know that physicians are busy and routinely don't return certificates in the required window, and that when a doctor does sign but makes a mistake, the process starts over. The buyer isn't purchasing efficiency. They're purchasing the ability to stop being the face of someone else's delay, and to get the hours back.

**Rough TAM reasoning:** ~15,400 US funeral homes, majority independent. Restrict to states with mature EDRS plus a real certifier deadline and you're at maybe 4,000–5,000 homes in the near term, expanding as more states copy Colorado and Michigan (the direction of travel is one-way — no state is going back to paper). At $180/mo average that's a $9–11M serviceable ceiling in the beachhead states. That's small. It's also exactly the size that makes VCs walk past it and leaves it sitting there.

**Why now for them:** Michigan's 16 March 2027 physician mandate creates a hard, dated event. Between now and then, every Michigan funeral home is going to be dealing with physicians learning EDRS for the first time — which means more fumbles, more bounced records, more chasing, not less. The transition is where the pain spikes. A tool that shows up in Q4 2026 selling "we'll handle the doctors during the switchover" is arriving precisely on time.

## 5. Product sketch (MVP)

- **Pending board** — every open case with an unsigned medical certification, sorted by hours remaining against that state's statutory clock, with the specific certifier named and their contact history visible. The director opens this once in the morning instead of reconstructing it from memory.
- **Automated escalation ladder** — a defined sequence per certifier: SMS, then email, then an outbound AI voice call to the office line, then a call to the department, then a notice that references the statute and the accruing deadline. Cadence is configurable; the director can pause or take over any case with one tap.
- **AI voice agent for the office-line gauntlet** — calls the practice, navigates the phone tree, states the decedent's name and the pending EDRS request, asks for the certifier or their nurse, and either gets a commitment time or logs who said what. Handles the "on rounds, call back after four" loop without a human waiting on hold.
- **Certifier directory that compounds** — every physician the home has ever chased, with what actually works: the nurse's direct line, the fact that Dr. Patel signs on Tuesday afternoons, the office that only responds to fax. This is institutional knowledge that currently lives in one veteran director's head and walks out the door when they retire.
- **Bounce-back handler** — when a registrar rejects a record, the tool identifies the defective field, drafts the correction request in language the certifier can act on in thirty seconds, and reopens the chase without the director rebuilding context.
- **Statute-aware messaging** — message templates that cite the correct deadline and consequence for the state in question (Colorado's 72-hour rule and unprofessional-conduct exposure; Michigan's 48-hour certification requirement), so the reminder carries weight instead of reading as nagging.
- **Family-facing status note** — a plain-language, one-click update the director can send the family: where the certificate is, what's pending, what happens next. Converts a defensive phone call into a proactive text.
- **Delay documentation** — a timestamped record of every contact attempt per case. Protects the home when a family or an attorney asks why it took eleven days, and produces the evidence file if the home ever needs to report a chronically non-compliant certifier.

## 6. AI angle — what's load-bearing

Remove the AI and this is a task list with reminders — which the director already has, and which doesn't help, because the bottleneck was never remembering to chase. It was having a human available to actually make the fifth phone call at 3pm on a Thursday.

Two places AI does real work:

**The voice agent is the product.** Reaching a physician means surviving a phone tree, a receptionist, a "she's with patients," and a callback that never comes. That's a five-to-fifteen-minute human-attention tax per attempt, and it takes several attempts. An AI voice agent that can call a medical office, hold the conversational thread, explain a somewhat unusual request clearly and respectfully, and extract either a commitment or a reason — that became genuinely reliable only recently, and it's the difference between a $30/mo reminder app and something a funeral home pays $200/mo for. Voice AI investment ran $2.1B in 2024 against $315M in 2022, and 2026 funding is 68% above 2025 — the infrastructure layer (Retell, Bland, Vapi and peers) is commoditized enough that a small team can build on it rather than build it.

**Tone is a hard requirement, not a nice-to-have.** This is deathcare. A message that reads as aggressive, robotic, or careless damages a relationship the funeral home depends on — they'll be calling that same physician next month, and referral relationships with hospices and hospitals are how independents survive. Getting escalating firmness that stays professional and never sounds automated is a language problem, and it's the thing that would sink a naive version of this product.

Worth being honest: the underlying voice stack is a commodity. The AI is load-bearing for the product working at all, but it is not the moat. See section 13.

## 7. Localization angle (if any)

N/A as a geography play — this is US-first by necessity. But it localizes hard *by state*, and that's the real wedge.

Every state has its own EDRS, its own filing deadline, its own certifier deadline, its own registrar quirks, and its own escalation etiquette. Colorado's 72-hour certifier rule with medical-board reporting is not Michigan's 48-hour rule, which is not New Jersey's process. A generic "reminder tool" is useless because the entire persuasive force of the message comes from citing the correct clock and the correct consequence.

That's why you go state by state, and why the sequencing matters: dominate Colorado and Michigan first, where the statute gives the message teeth and there's an active migration creating pain. Each new state is a few weeks of statutory research and template work, plus relationships with that state's funeral directors association. Slow to expand — but equally slow for anyone to copy across the whole map, and each state association you win is a distribution channel a competitor has to win back.

The same structural problem exists in the UK and Australia (the NAFD's four-week delays are the same disease), but the certification regimes differ enough that they're a later, separate product. Don't chase them at v1.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo for homes under 150 cases/year, $249/mo for 150–400, $399/mo for multi-location. Voice call minutes included up to a fair-use cap, overage billed through. Priced deliberately above the $135/mo Osiris-tier case-management tools, because this is not a nice-to-have module — it's replacing labor. Benchmark the pitch against the cost of the staff hours it eliminates, not against other software.
- **ACV:** ~$2,200 blended.
- **Rough math to $1M ARR:** 455 funeral homes at $2,200. Against ~4,000–5,000 addressable homes in the beachhead states, that's roughly 10% penetration of a slice of the market — achievable, though not trivially so, and it will take state-association credibility rather than pure self-serve.
- **Rough math to $5M ARR:** ~2,270 homes, which requires expanding well beyond the first two states — realistically 12–15 states — plus ACV expansion. Assume a per-case fee tier or a hospice/hospital-side product to lift ACV toward $3,500. $5M is a genuine stretch here and depends on more states passing certifier-deadline statutes. $1–2M is the honest, defensible target; $5M is the upside case, not the plan.
- **Expansion path:** add cremation-permit tracking, then the transit permit and disposition filings, then a certifier-side lightweight tool that hospices and nursing homes pay for (they're on the other end of the same broken loop and have their own compliance exposure). Multi-location groups are the natural ACV ladder.

Gross margin is good but not software-perfect — voice minutes are a real COGS line, on the order of $8–25/mo per active customer depending on chase volume. Budget for it and cap fair use.

## 9. Go-to-market wedge — first 100 customers

This is a small, licensed, densely-networked, association-driven industry. It reads word-of-mouth and trade press, and it does not read Product Hunt. Play it accordingly.

- **Michigan, right now, on the mandate.** Every Michigan funeral home is licensed and publicly listed through the state's licensing lookup — that's a complete, enumerable list of a few hundred targets, not a scrape of maybe-prospects. Run a campaign specifically framed on the 16 March 2027 physician mandate: "Your certifiers are about to switch to EDRS. Here's who handles them while they learn." Personalized email plus a follow-up call, into a free pilot through the transition. A dated statutory deadline is the single best cold-open in B2B software.
- **State funeral directors associations as the primary channel.** MSFDA (Michigan), CFDA (Colorado), then outward. These associations run conventions, continuing-education sessions, and newsletters that members actually read, and they already have institutional history on EDRS rollouts — the Pennsylvania FDA co-built Passare's integration, so there's clear precedent for associations partnering with vendors. Sponsor a CE session on the new certification deadlines. Teach the statute; the product is the obvious conclusion. This is the channel that scales in this industry, and it's a relationship business — budget months, not days.
- **Funeral Director Daily and the trade press.** A small number of publications have near-total reach into owner-operators, and they cover staffing shortage and workflow burden constantly. A well-sourced piece on certifier delay data by state — original research the trade doesn't have — is both a credibility artifact and a lead magnet. Content works here specifically because the trade press is small and hungry for real data.
- **Hospice and nursing-home referral partners.** They sit on the other end of the same loop and get blamed for the same delay. Each relationship is a warm introduction to every funeral home they work with.
- **Manual concierge for the first 20.** Run the chases half-manually for the first cohort, with a human reviewing every voice call before it goes out. It won't scale and it isn't supposed to — it buys the escalation-cadence and tone data that makes the automated version not embarrassing, in a vertical where one badly-worded call to a physician is a real cost.

Realistic pace: 100 customers is a 9–12 month grind through associations and direct outreach, not a two-week sprint. This industry doesn't do impulse purchases.

## 10. Build complexity — justification

**Low.** Everything is off-the-shelf: an outbound voice agent on a commodity platform, SMS and email, a scheduling and escalation engine, a case board, and an LLM for message drafting and bounce-back parsing. There's no novel infrastructure.

The v1 explicitly does *not* integrate with state EDRS systems — Passare needed a state health department and a state association to land one integration, and it's still the only one five years later. Skip it. The funeral director enters the case and the certifier, or the tool ingests a CSV from their existing system. Manual entry is a two-minute task on a case that's about to consume hours, so it isn't the objection it sounds like.

A solo builder ships a credible v1 in 6–8 weeks. The hard work is not engineering — it's the statutory research per state and the tone calibration on outbound calls, both of which are content and judgment problems. Budget more time for those than for the code.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reminding a physician of a statutory duty is lawful. Outbound calls are B2B to a business line for an existing professional obligation. Decedent data requires a privacy posture and a BAA-ready stance, but funeral homes are not HIPAA covered entities in most contexts and the data set is deliberately minimal. |
| Ethical — no harm / dark patterns | ✅ | Reduces family distress and enforces an existing legal duty. The ethical line is tone and frequency — hard caps and human override are product requirements, not options. Never let it become physician harassment. |
| Market exists (evidence above) | ✅ | 15,400 homes, a $285M software market growing 8.7%, incumbents charging money, statutes written specifically because this delay is a known problem. |
| 1–5 person team can build this | ✅ | Solo builder, 6–8 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Voice platform credits, association memberships, and a convention booth. Well under $25K to first revenue. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire and daily. Blocks cremation, blocks the family, blocks revenue recognition, and it lands on the director at the worst possible moment. Docked 3 because homes have lived with it forever — normalized pain converts slower than acute pain, and "this is just the job" is a real objection. |
| Demand evidence | 15 | 11/15 | Strong indirect evidence: statutes written to fix it, documented multi-week delays, on-record complaints from families and directors, a real software market with paying customers. Docked because I have no direct evidence of funeral homes paying for *this specific* product — no competitor to point at, which cuts both ways. |
| Build feasibility | 15 | 13/15 | Off-the-shelf everything, 6–8 weeks solo. Docked for voice-agent reliability on medical phone trees being genuinely fiddly. |
| Distribution clarity | 15 | 12/15 | Enumerable licensed target list, a dated regulatory event to sell against, and associations as a proven vendor channel. Docked because association relationships are slow and this industry does not buy fast. |
| Revenue mechanics | 15 | 10/15 | Pricing is benchmarkable against incumbents and against labor cost, and $1–2M ARR is credible. Docked because $5M requires many more states, voice minutes are a real COGS drag, and the beachhead ceiling is genuinely modest. |
| Time to first revenue | 10 | 8/10 | Pilot-to-paid inside 8 weeks is realistic with the Michigan mandate as the hook. Not faster, because trust-building in deathcare takes a few conversations. |
| Defensibility | 10 | 3/10 | The honest weak axis. No technical moat. Real moats are slow-accumulating: per-state statutory content, the certifier directory that compounds per customer, and association relationships. Any of the incumbents could bolt this on if it works — they already own the case data and the customer. This is an execution-and-head-start play. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`sales-heavy` · `operations-heavy`

This is not a technical founder's idea. The build is the easy part. Winning here means going to state funeral directors association conventions, sitting with owner-operators, learning the statutory landscape state by state, and calibrating outbound tone in a profession where tone is everything. A builder who wants to ship and let SEO do the rest will fail at this specific idea.

### Key assumptions to validate (3–5)

1. **Assumption:** Funeral directors lose enough hours per case to certifier-chasing to justify $149–249/mo. **How to test:** 25 structured interviews with Michigan and Colorado owner-operators. Ask them to walk through their last three cases and count contact attempts and elapsed minutes. Need a median of 45+ minutes per delayed case to clear the bar.
2. **Assumption:** An AI voice agent can actually get through a medical office phone tree to a certifier or their nurse at a usable rate. **How to test:** Build the agent first, before anything else, and run 50 real calls on live cases for one friendly funeral home. Need ≥40% of calls reaching a human who can act, and zero complaints about tone.
3. **Assumption:** Physicians respond to automated escalation rather than ignoring or resenting it. **How to test:** A/B the statute-citing template against a neutral reminder across 100 chases. Measure time-to-signature and, just as importantly, track any relationship damage reported by the funeral home.
4. **Assumption:** State associations will partner rather than treat this as a vendor nuisance. **How to test:** Pitch a CE session to MSFDA and CFDA. If neither will host a session on the new deadlines, the primary distribution channel is broken and the whole GTM needs rethinking.
5. **Assumption:** Incumbents don't ship this within 12 months of you proving it. **How to test:** Not testable in advance. Manage it by moving fast on per-state statutory depth — the part that's tedious to replicate.

### Risk flags

1. **Defensibility:** Scored 3/10 for a reason. Passare, Gather, and Osiris already hold the case data and the customer relationship. If this works, the natural outcome is one of them building it or buying you. That's a fine outcome for a bootstrapper, but go in with eyes open — this is not a business you defend for a decade.
2. **Tone and reputational risk:** One aggressive or glitchy automated call to a physician can cost a funeral home a hospital referral relationship worth more than the subscription. The product must ship with conservative frequency caps, human override, and pre-send review in early days. This is the risk most likely to kill an otherwise-working product.
3. **Regulatory dependency, both directions:** The pitch leans on statutes that give reminders teeth. If states don't keep adopting certifier deadlines, expansion beyond the beachhead gets much harder. Conversely, if states build good automated nudging directly into their EDRS platforms — and PHII is actively working on next-generation EDRS — the state could commoditize the core loop. Watch that closely.
4. **Market ceiling:** ~15,400 homes total, with a realistic near-term serviceable base of 4,000–5,000. This is a $1–2M ARR business that might reach $5M. It will never be more. Correct for a bootstrapper, wrong for anyone with venture expectations.
5. **Slow-moving buyers:** Deathcare is conservative, relationship-driven, and often runs decades-old software precisely because switching feels risky. Sales cycles will be longer than the software's simplicity suggests.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Sales/ops-oriented founder willing to work state
                        associations and conventions, ideally with a deathcare
                        or medical-admin contact to open the first doors.
                        Wrong idea for a pure technical builder.
Time to revenue:        8-10 weeks to first paid pilot
Capital to launch:      $15-25K (voice platform credits, association
                        memberships, one convention booth, travel)
Top 3 assumptions to validate first:
  1. Certifier-chasing consumes 45+ median minutes per delayed case —
     25 structured interviews with MI/CO owner-operators, walking their
     last three cases attempt by attempt
  2. AI voice agent reaches an actionable human on a medical office line
     ≥40% of calls with zero tone complaints — 50 live calls for one
     friendly funeral home before building anything else
  3. A state funeral directors association will host a CE session on the
     new certification deadlines — pitch MSFDA and CFDA directly
Kill criteria:
  - Abandon if fewer than 8 of 25 interviewed directors describe
    certifier-chasing as a top-5 time drain
  - Abandon if the voice agent reaches an actionable human on under 25%
    of calls after two rounds of iteration, or generates any physician
    complaint about tone
  - Abandon if both MSFDA and CFDA decline a CE session and no association
    channel opens within 90 days
  - Abandon if Passare or Gather ships certifier-chase automation before
    your v1 reaches 20 paying homes
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the complete licensed funeral home list for Michigan and Colorado from state licensing lookups. Read the actual statutory text of HB 4077/4078 and SB23-020 — not summaries — and build the per-state deadline and consequence matrix. Draft the escalation ladder and message templates against the real language.
- **Day 3–4:** Call 25 owner-operators. Do not pitch. Ask them to walk through their last three cases: how many contact attempts to get the certification, how long each took, what actually worked, what happened when a record bounced. Record verbatim. Count minutes.
- **Day 5:** Stand up a bare outbound voice agent on an off-the-shelf platform. Get one friendly funeral home to let it run 10 real chases with a human listening on every call. Measure connection rate to an actionable human, and ask the director point-blank whether they'd have been comfortable with that call going out unsupervised.

**Falsifiable go/no-go:** Proceed only if (a) ≥8 of 25 directors independently name certifier-chasing as a top-5 time drain with a median of 45+ minutes per delayed case, and (b) the voice agent reaches an actionable human on ≥4 of 10 live calls with zero tone objections from the supervising director. Miss either and this is a VALIDATE at best — the pain is real but the automation isn't ready to carry it.
