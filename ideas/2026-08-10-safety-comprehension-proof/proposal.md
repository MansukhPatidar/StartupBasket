---
title: "TeachBack — comprehension proof for multilingual crews"
slug: safety-comprehension-proof
date: 2026-08-10
category: Compliance / US-SMB
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Records what your Spanish-speaking crew actually understood from the safety talk, in their own words."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [Voice-first, Multilingual, Compliance-driven, SMB, AI-agent]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# TeachBack

## 1. One-liner

Records what your Spanish-speaking crew actually understood from the safety talk, in their own words.

## 2. Trend signal — why now?

Three things moved at once, and they moved in the same direction.

**OSHA's standard is comprehension, not delivery — and everyone documents delivery.** OSHA's 2010 Training Standards Policy Statement requires training be presented so that "employees receiving it are capable of understanding." A separate 2010 interpretation letter states plainly: *"There are no OSHA construction standards that specifically require that information be conveyed and understood in English."* The accepted verification methods are quizzes in the worker's language, **teach-back where workers explain concepts in their own words**, observed hands-on demonstration, and records noting language of delivery. What actually happens on 90% of jobsites is a signed attendance roster — which proves a body was present, not that a brain engaged. Serious violations run $16,550; willful or repeated run $165,514.

**The workforce shifted faster than the training stack.** Hispanic workers are now 34% of the US construction workforce, up from 16.5% in 2000. In 2022 there were 408 Hispanic construction worker deaths — a 107.1% increase since 2011, against a 16.5% rise for non-Hispanic workers. Latino construction workers had fatality rates 41.6% higher than peers in 2020. OSHA attributes language barriers as a contributing factor in roughly 25% of jobsite accidents.

**Speech AI got cheap enough to sit in the middle of a 10-minute huddle.** Real-time speech translation now runs $0.04–$0.20 per translated minute at moderate volume, versus $0.60–$1.25/min for interpreter-bundled event platforms. ElevenLabs Scribe v2 RT hits sub-150ms transcription latency over WebSocket; Speechmatics Ursa 2 delivers sub-1s real-time across 55+ languages. A daily toolbox talk for a 12-person crew is now a sub-$1 AI event. Three years ago it was an interpreter booking.

That last point is what makes this a business rather than a wish. The compliance requirement has existed since 2010. The economics of satisfying it honestly appeared in the last 18 months.

```
Provenance:
  - Signal 1 (demand): OSHA requires training "in a language workers understand"; teach-back is an accepted verification method but signed rosters are the norm; $16,550/serious violation; Hispanic workers 34% of construction workforce with 41.6% higher fatality rate — https://evolutionsafetyresources.com/bilingual-safety-training-osha-compliant-guide/ — 2026-08-10
  - Signal 2 (feasibility): Real-time speech translation collapsed to $0.04–$0.20/translated-minute; sub-150ms streaming transcription latency; 55+ languages at sub-1s — https://www.forasoft.com/blog/article/real-time-speech-translation-vendor-benchmarks — 2026-08-10
  - Signal 3 (economic): Construction safety platforms sustain $15–$40/user/mo; a 40-person team already pays $960–$1,960/mo; GC prequalification increasingly demands auditable safety training records — https://makesafetyeasy.com/blog/construction-safety-software-pricing-2026 — 2026-08-10
  Category: Tech-unlock
```

## 3. The opportunity

The safety training market sells **content delivery**. Tyfoom, modONE Pro, Alchemy, SafetyCulture — all of them will translate your course into 100+ languages, play a 2-minute video, and administer a multiple-choice quiz. That is a genuinely better product than a paper handout, and it is still not what OSHA asks for.

Here's the gap. A multiple-choice quiz translated into Spanish proves a worker can pattern-match four options. It does not prove they understood the hazard. OSHA's own guidance names teach-back — the worker explaining the concept back in their own words — as the verification that counts. Nobody productizes teach-back, because until recently capturing it meant a bilingual supervisor standing there listening, and then writing down an impression. It was a verbal act that evaporated the moment it happened.

That's the thing AI just made cheap. A foreman runs the toolbox talk however he already runs it. Each worker then speaks 20 seconds into a phone, in their own language, saying what they're supposed to watch out for today. The system transcribes it, translates it, judges whether the answer actually demonstrates understanding of the specific hazard covered, and files a dated, per-worker, per-topic record with the audio attached. The foreman gets a red flag on his phone when someone clearly didn't get it — *before* that worker walks onto the deck.

The incumbents can't easily follow, and the reason is structural rather than technical. Their entire business is licensing and delivering course libraries — content is the asset and seat-based delivery is the meter. Teach-back inverts it: the valuable artifact is generated by the customer's own workers, on the customer's own topics, and it makes the polished course library less necessary rather than more. It's a knife that cuts toward their margin.

Second gap, more mundane and possibly more commercially useful: **Procore's safety module isn't sold separately.** A specialty sub doing $10M/year who needs OSHA documentation is looking at $10,000–$30,000/year for a full project-management platform. Per-user safety platforms run $20–$49/user/month — a 40-person crew pays $960–$1,960/month. There is room underneath all of that for a $199–$499/month tool that does one job the expensive tools don't do at all.

## 4. Target market

**Primary customer:** The safety director or owner-operator at a US specialty trade subcontractor — framing, drywall, concrete, roofing, mechanical, landscaping — with 25–250 field workers, where 40%+ of the crew's first language isn't English. Revenue $3M–$50M. Usually one person wearing the safety hat part-time, often the ops manager or the owner's brother-in-law.

**Why they buy:** Two reasons, and only one of them is OSHA.

The stated reason is the citation. From the field, quoted in EHS Today: a worker told a Washington supervisor *"I did not understand half of what you said, but I was too embarrassed to ask."* Another supervisor's account: *"I nodded out of respect, not comprehension. It was a cultural misunderstanding."* A Manitoba meat-processing supervisor: *"I had workers who understood everything I showed them but struggled with every word I said."* Every safety director in this segment knows the roster on their clipboard is theater. They sign it anyway because there's no alternative that fits in ten minutes at 6:45am.

The unstated and stronger reason is that they are getting squeezed from above. GCs run subcontractor prequalification with safety-history fields; many set maximum EMR thresholds at 1.00, and 0.85 for industrial and energy work. Contractors who pair documented safety training with return-to-work programs often see EMR drop below 0.80 in three to four years. EMR is a direct multiplier on workers' comp premium, which for a 100-person trade contractor is real money — six figures. A tool that produces auditable per-worker comprehension records isn't a compliance cost; it's an input to the number that decides whether they can bid the good jobs.

**Rough TAM reasoning:** US construction has roughly 750,000 establishments; specialty trade contractors are the bulk of them. Filter to firms with 20+ employees and meaningful LEP crews and you get a serviceable population in the low tens of thousands. At $300/mo average, 1,000 customers is $3.6M ARR. This does not need to be a large share of the market.

**Why now for them:** The fatality gap widened sharply (107% increase in Hispanic construction deaths since 2011), GC prequalification tightened, and their crews got more linguistically diverse — while their documentation method stayed a clipboard.

## 5. Product sketch (MVP)

- **Run the talk your way.** Foreman picks today's topic (or uploads the GC's required talk). No course library to buy into. The product doesn't care where the content came from.
- **20-second teach-back per worker.** Each crew member speaks into the foreman's phone — passed around, or scanned to their own — answering "what's the hazard today and what are you doing about it?" in whatever language they speak.
- **Comprehension scoring, not attendance.** AI judges whether the spoken answer actually demonstrates understanding of the specific hazard, and returns pass / unclear / didn't-get-it. Not a transcript dump — a judgment.
- **Red flag before boots hit the deck.** Foreman sees on his phone who needs a 60-second re-explain, while the crew is still standing in front of him.
- **The audit packet.** Per-worker, per-topic, per-date record with original audio, transcript, English translation, and language-of-delivery noted — the exact fields OSHA guidance asks for. One-click export as a PDF packet.
- **Prequal export.** Roll it up into the safety-documentation format GCs ask for during subcontractor prequalification.
- **Works with bad signal and dirty hands.** Queues offline, uploads when the truck hits LTE. Nobody types anything.
- **Bilingual foreman relief.** Stops the crew's one bilingual guy from being the unpaid, unrecognized, and legally insufficient translation department.

## 6. AI angle — what's load-bearing

Remove the AI and the product is a voice recorder — which is to say, it doesn't exist. The load-bearing work is three-layered and none of it was affordable at this price point two years ago:

1. **Multilingual ASR on hard audio.** Jobsite noise, generators, accented and non-standard dialects, code-switching mid-sentence. This is the part that was genuinely unavailable at $0.04/min until recently.
2. **Semantic judgment, not keyword matching.** The system must decide whether *"I have to keep away from the edge and clip on when I go up"* demonstrates understanding of a fall-protection talk. Keyword matching fails immediately — the worker won't use the training vocabulary, and demanding they do so defeats the entire point.
3. **Judgment under an evidentiary standard.** This record may be read by an OSHA inspector or a plaintiff's attorney after an incident. A false "pass" is worse than useless — it's a manufactured document that says the employer verified comprehension when they didn't. The scoring must be conservative and must abstain rather than guess, flagging "unclear" liberally.

Point 3 is also the biggest product risk, and I'll name it plainly rather than bury it in section 13: you are generating evidence that can be used against your customer. Get the calibration wrong toward leniency and you have built a liability generator. The correct design bias is aggressive abstention — when in doubt, flag for human re-explain — which happens to also be the design that makes the foreman trust it.

## 7. Localization angle

N/A as a geographic play — this is US-first by regulatory design. OSHA's language-comprehension standard, the $16,550 penalty schedule, EMR-driven insurance pricing, and GC prequalification norms are all specifically American, and they're the entire reason someone pays.

But the product is *linguistically* localized to its core, which is a different axis. v1 targets Spanish (34% of the workforce), then Portuguese, Haitian Creole, Polish, Vietnamese, and Mam/K'iche' — the last two matter far more than their headcount suggests, because indigenous Guatemalan workers are routinely logged as Spanish speakers and given Spanish materials they don't understand. Being the tool that catches that misclassification is a genuinely differentiated position.

Natural expansion: Canadian provincial OHS regimes have parallel comprehension requirements, and Gulf-state construction has extreme linguistic diversity — but neither has the OSHA penalty structure that makes US buyers move, so both are later.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Flat per-crew, not per-seat. $199/mo up to 25 field workers, $399/mo to 75, $799/mo to 200. Deliberately priced under the $20–$49/user/month incumbents — a 40-person crew pays $399 here versus $960–$1,960 there. Per-seat pricing is wrong for this market anyway: field headcount swings 30% seasonally and safety directors hate true-up invoices.
- **ACV:** ~$3,600 blended.
- **Math to $1M ARR:** 280 customers × $300/mo × 12 = $1.0M. That's a plausible 18-month number for a two-person team working trade associations.
- **Math to $5M ARR:** ~1,150 customers at a slightly richer $360 blended ACV, or 600 customers plus a GC-side product. The GC-side upsell is the real lever — a general contractor paying $1,500–$3,000/mo to see verified comprehension across all subs on a project changes the ACV math and drags subs in behind it.
- **Expansion path:** crew-count tiers → additional languages → GC portfolio view → insurance-carrier channel, where the carrier subsidizes the tool because verified training records reduce their loss ratio. The carrier channel is the one that could make this much bigger than $5M, and I'd chase it only after 200 direct customers prove the retention.

Gross margin is healthy: a 12-person crew doing daily teach-backs is roughly 4 minutes of audio a day, call it $0.50–$2.00/month in inference at current rates against $199–$799 in revenue.

## 9. Go-to-market wedge — first 100 customers

- **Safety consultants as the channel, not the customer.** Independent safety consultants each serve 5–20 small contractors and personally write the safety programs those contractors run. There are thousands of them, they're findable through ASSP chapter rosters and BCSP certificant directories, and they are structurally hungry for anything that makes their clients audit-ready. Sign 20 consultants on 20% recurring referral; each brings 3–8 accounts. This is the single highest-yield motion and it's where I'd spend month one.
- **The citation list is public and dated.** OSHA publishes establishment-level inspection and citation data. Filter for training-standard citations (1910.1200, 1926.503, 1910.147) against specialty trade contractors in high-LEP metros — Houston, Dallas, Phoenix, Atlanta, LA, Miami. A contractor cited 60 days ago for inadequate training is the warmest lead in this entire business. Personalized video: their citation on screen, then 45 seconds of the product producing the record that would have defended it.
- **Trade association safety committees.** ABC (Associated Builders and Contractors) and NUCA chapters run monthly safety committee meetings where this exact problem gets discussed out loud. Get on three agendas a month as a 10-minute demo. Chapter endorsement deals are common in this industry and convert far better than cold outreach.
- **The bilingual-foreman angle on Spanish-language trade media.** The people who feel this pain most acutely are bilingual foremen who've been drafted as unpaid interpreters. Spanish-language construction YouTube and Facebook groups have real audiences and near-zero B2B advertising competition. Cheap, and it reaches the person who will champion the tool internally.
- **Workers' comp brokers as a second-order channel.** Brokers competing on EMR reduction want differentiated tools to bring their construction clients. Warm-intro machine, though slower to activate than the consultant channel.

First 100 is a consultant-channel plus citation-list sprint — roughly two quarters, not two weeks. I'm not going to pretend this is a 2-week PLG motion; it isn't.

## 10. Build complexity — justification

**Low.** Everything load-bearing is an off-the-shelf API call: streaming multilingual ASR, translation, and an LLM doing constrained comprehension judgment against a topic rubric. The custom work is a rugged mobile capture flow that survives no-signal jobsites, an offline queue, and a PDF packet generator. No custom models, no novel infrastructure.

The genuinely hard parts aren't engineering. They are (a) calibrating the pass/unclear/fail judgment so it's defensible in an evidentiary context, which needs real jobsite audio and a safety professional's review loop, and (b) ASR quality on noisy accented field audio, which will require per-language tuning and honest measurement. A two-person team ships a credible v1 in 8–10 weeks; the calibration work continues for the following two quarters and never fully stops.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps employers meet an existing standard. Worker voice recording needs clear consent and a stated purpose — solvable with onboarding disclosure, and single-party-consent rules cover most target states. |
| Ethical — no harm / dark patterns | ✅ | Net-positive: non-English-speaking workers currently sign rosters for talks they didn't understand. One real hazard — records could be used punitively against workers rather than to re-train them. Product must be built so flags route to re-explain, never to a discipline log. |
| Market exists (evidence above) | ✅ | $15–$40/user/mo already being spent; funded incumbents; quantified penalties. |
| 1–5 person team can build this | ✅ | Two people, 8–10 weeks to v1. |
| Launchable with <$50K | ✅ | Well under. Inference is pennies; main cost is a few months of runway and travel to trade chapter meetings. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, quantified, with dollar penalties and fatality data behind it. Held under 17 because it's felt acutely only at inspection or incident — a daily annoyance the rest of the time, and plenty of contractors have lived with the clipboard for twenty years. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: existing spend at $15–$40/user/mo, funded incumbents, OSHA guidance naming teach-back explicitly, verbatim worker quotes. Docked because nobody is currently buying *teach-back capture* specifically — that demand is inferred, not observed. |
| Build feasibility | 15 | 13/15 | Off-the-shelf APIs end to end. Offline-first mobile and evidentiary calibration are the only real work. |
| Distribution clarity | 15 | 12/15 | Named channels with named lists: OSHA citation data, ASSP/BCSP directories, ABC chapters. Not instant — consultant channel takes a quarter to activate — but concrete and cheap. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked under incumbents, margins excellent, $1M needs only 280 customers. Docked because SMB contractor churn is genuinely bad and seasonal, and flat-tier pricing caps expansion revenue. |
| Time to first revenue | 10 | 7/10 | 6–10 weeks realistically. Safety directors will pilot fast but buy on a cycle; consultant channel shortens it materially. |
| Defensibility | 10 | 5/10 | Honest answer: a competent team clones the core in a quarter. The moat that accumulates is the comprehension-rubric library per trade and per language plus the archive customers won't leave behind, but at month 3 there is no moat at all. Execution and channel ownership is the game. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Needs someone comfortable with speech pipelines and evidentiary calibration, paired with someone who can sit in an ABC chapter meeting and speak contractor. A safety-professional advisor is close to mandatory — the pass/fail rubric has to be authored by someone who has defended a citation.

### Key assumptions to validate

1. **Assumption:** Safety directors believe a spoken teach-back record is materially stronger evidence than a signed roster. **How to test:** Interview 25 safety directors and 3 OSHA-defense attorneys; ask directly whether they'd bring this record to an informal conference. Attorney opinion is the one that matters — if defense counsel shrugs, the compliance pitch collapses and only the EMR pitch survives.
2. **Assumption:** Comprehension scoring can be calibrated conservatively enough to be trustworthy. **How to test:** Collect 300 real teach-back clips across 3 trades and 2 languages, have a certified safety professional label them, measure agreement. Target: <2% false-pass rate, and accept a high abstention rate as the cost.
3. **Assumption:** Crews will actually do it — foremen won't quietly abandon it in week three. **How to test:** 5 paid pilots, 6 weeks; measure daily active crews in weeks 5–6, not week 1. Adoption decay is the real killer here.
4. **Assumption:** $199–$799/mo flat clears the bar without a per-seat comparison fight. **How to test:** Price-test three tiers across 30 outbound conversations.

### Risk flags

1. **Evidentiary double-edge:** You are creating discoverable records. A "pass" that precedes an incident is a document a plaintiff's attorney will enjoy reading. Mitigation is conservative calibration and clear language about what the record does and doesn't assert — but this risk never goes to zero and should be disclosed to customers rather than papered over.
2. **Worker-surveillance perception:** If crews read this as recording-for-discipline, adoption dies and the union reaction is justified. The framing and the actual data flow both have to route flags to re-training, never to HR.
3. **Incumbent fast-follow:** SafetyCulture or Tyfoom can bolt on voice teach-back. They're slow and content-anchored, which buys 9–18 months, but they own the distribution. Speed to the consultant channel matters more than product depth.
4. **ASR quality on indigenous languages:** Mam and K'iche' are the highest-value differentiator and the weakest technical ground — genuinely research-grade coverage. Do not promise these in v1; ship Spanish and Portuguese, and treat the indigenous-language catch as a v2 flag ("this worker may not be a Spanish speaker") rather than full comprehension scoring.
5. **Enforcement dependency:** OSHA enforcement intensity is politically variable. The EMR/insurance driver is the hedge — it operates regardless of enforcement posture, and I'd lead with it if citation activity softens.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder comfortable with speech pipelines,
                        paired with a contractor-world salesperson and a
                        certified safety professional as advisor
Time to revenue:        6–10 weeks
Capital to launch:      $15–25K
Top 3 assumptions to validate first:
  1. OSHA-defense attorneys rate spoken teach-back records as materially
     stronger than signed rosters — 3 attorney interviews, and they decide
     whether the compliance pitch or the EMR pitch leads
  2. Comprehension scoring hits <2% false-pass on 300 labeled real jobsite
     clips across 3 trades and 2 languages
  3. Paid pilot crews are still running daily teach-backs in week 6 — measure
     decay, not launch enthusiasm
Kill criteria:
  - Abandon if <2% of 200 targeted safety directors take a demo after the
    citation-list outbound sequence
  - Abandon if false-pass rate stays above 5% after two calibration rounds —
    an unreliable record is worse than no record in this market
  - Abandon if pilot crews drop below 40% daily usage by week 6
  - Abandon if SafetyCulture ships native voice teach-back before v1 launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull OSHA establishment-level citation data for training-standard violations among specialty trade contractors in Houston, Dallas, Phoenix and Atlanta over the last 18 months. Build a list of 200 named companies with citation dates and standards cited. This list either exists at useful density or it doesn't — that alone is a signal.
- **Day 3:** Call 3 OSHA-defense attorneys and 10 safety directors. One question to the attorneys: *"If your client walked in with dated per-worker audio of each crew member explaining the hazard in their own language, does that change how you handle the informal conference?"* Their answer determines whether this is a compliance product or an insurance product.
- **Day 4:** Record 30 real teach-back clips — stand in a parking lot at 6:30am with a phone and a bilingual foreman if that's what it takes. Run them through an off-the-shelf ASR-plus-LLM scoring chain. Measure false-pass rate against a safety professional's labels.
- **Day 5:** Decide.

**Falsifiable go/no-go:** Go only if (a) ≥6 of 10 safety directors say the signed roster wouldn't hold up and ask to see a pilot, (b) ≥2 of 3 defense attorneys say the teach-back record changes their handling, and (c) false-pass rate on 30 real clips is under 10% before any tuning. Miss any one of the three and this is a VALIDATE, not a GO — and if the attorneys shrug, re-cut the entire pitch around EMR reduction and re-test before writing a line of code.
