---
title: "BolChaap — call conduct evidence for recovery agencies"
slug: recovery-call-conduct-evidence
date: 2026-08-15
category: FinTech / India — Outsourced Loan-Recovery Agencies (20–200 Tele-Agents) Who Must Preserve the Content of Every Recovery Call from 1 January 2027 and Cannot Read Their Own Hinglish Audio
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Reads every Hinglish recovery call your agents make and proves to the lender nobody crossed the line."
tags:
  vertical: FinTech
  model: SaaS
  geography: India
  secondary: [Compliance-driven, Multilingual, Voice-first, SMB, AI-agent]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 13
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# BolChaap

## 1. One-liner

Reads every Hinglish recovery call your agents make and proves to the lender nobody crossed the line.

## 2. Trend signal — why now?

Three things landed inside twelve months, and they landed on top of each other.

**The regulation got teeth, and the teeth bite speech.** On 6 August 2026 the RBI notified nine simultaneous circulars amending the Responsible Business Conduct framework — including the RBI (Non-Banking Financial Companies — Responsible Business Conduct) Third Amendment Directions, 2026 — effective **1 January 2027**. Paragraph 100P requires lenders to document the time and number of calls and to preserve **the content of calls for at least six months** (or until disposal where the matter is sub judice). Paragraph 100Y bans "minatory or abusive language" and requires agents deal in "a civil manner, with decency and decorum," with contact restricted to 08:00–19:00. Paragraph 100F makes the lender **compensate borrowers for losses caused by recovery actions that breach these Directions**. Read that again: the compliance object is no longer a call log. It is *what was said*. Nobody has ever had to prove that at scale in India.

**The lender is liable for the agency, and has already been fined for it.** The RBI fined RBL Bank ₹2.27 crore for, among other things, failing to ensure recovery agents engaged "either directly or through recovery agencies" had completed IIBF certification, failing to ensure pre-employment police verification, and failing to ensure agents "did not resort to intimidation or harassment of any kind." That is a bank paying for an agency's conduct. Every compliance head at every NBFC read that. From 1 July 2026 agents need IIBF certification — 100 hours on code of conduct and borrower rights — before onboarding.

**The technology to read the audio became cheap in June.** Speechmatics launched Melia on 17 June 2026: native code-switching across 55+ languages in a single pass, no language selection in advance, one continuous transcript when a speaker switches language mid-sentence — from **$0.129/hour**, batch. This matters more than it sounds. Indian collections calls are not Hindi calls or English calls. They are Hinglish calls that swerve into Marathi when the borrower's mother picks up. The documented failure mode of the previous generation: vendors claim "30+ languages" but on real Hindi or Tamil calls accuracy drops to **60–70%**, because the models are English-first, and agents get penalised for violations "manufactured entirely by the transcription layer." At 60–70% accuracy you cannot make a compliance claim. At Melia-class accuracy and 12.9 cents an hour, you can audit 100% of calls for less than the tea budget.

Meanwhile the incumbent QA method is statistically incapable of the job: Indian BPOs sample **2–5% of calls**, leaving ~142,500 of 150,000 monthly calls unaudited. One documented case — a 200-agent Noida BPO on 3% sampling with two dedicated analysts — missed eight agents skipping a mandatory identity-verification step for three months, across 14,000 calls. Sampling estimates aggregate quality; it does not find the one agent who threatens people.

```
Provenance:
  - Signal 1 (demand/regulatory): RBI Responsible Business Conduct Third Amendment Directions 2026, notified 6 Aug 2026, effective 1 Jan 2027 — para 100P requires preserving the CONTENT of recovery calls 6 months; 100Y bans abusive language; 100F makes lender compensate borrowers for breaches — https://taxupdate.in/finance/843/rbi-loan-recovery-rules-2027-responsible-business-conduct-amendment-directions-6-august-2026-recovery-agents/ and https://www.corporateprofessionals.com/articles/when-the-recovery-call-comes-rbi-rewrites-the-rules-of-engagement-for-nbfcs/ — observed 2026-08-15
  - Signal 2 (feasibility/tech-unlock): Speechmatics Melia launched 17 Jun 2026 — native code-switching across 55+ languages in a single pass, one continuous transcript, from $0.129/hr batch — https://www.speechmatics.com/company/articles-and-news/introducing-melia-multilingual-speech-to-text-model — observed 2026-08-15
  - Signal 3 (economic): RBI fined RBL Bank ₹2.27 crore partly for failing to ensure agency-engaged recovery agents were IIBF-certified, police-verified, and non-harassing — lender pays for agency conduct — https://www.business-standard.com/amp/article/finance/rbi-fines-rbl-bank-rs-2-27-cr-for-failure-on-internal-ombudsman-scheme-123032000958_1.html — observed 2026-08-15
  - Supporting (market gap): Indian BPO QA samples 2–5% of calls, ~142,500 of 150,000 monthly calls unaudited; documented 3-month miss across 14,000 calls — https://www.gistly.ai/blog/qa-fail-manual-sampling-missed-compliance-pattern — observed 2026-08-15
  - Supporting (accuracy gap): mainstream STT drops to 60–70% on real Hindi/Hinglish calls; agents penalised for errors "manufactured entirely by the transcription layer" — https://www.dictaai.com/blog/hinglish-transcription-the-missing-link-in-ai-transcription-for-india — observed 2026-08-15
  Category: Regulatory arbitrage + Tech-unlock
```

## 3. The opportunity

The obvious product here is "AI call QA for NBFCs," and it already exists. Gistly sells exactly that — RBI-FPC scoring, DPDP consent, calling hours, code-switched Hinglish, 100% coverage. I checked. Their reference deployment is a **500-agent floor at ₹4–8 lakh/month**, positioned against manual QA at ₹8–15 lakh/month. That is a real product for a real buyer, and I am not going to pretend otherwise.

But look at who that pricing excludes. It is sold to the **lender**, to sit above the agency and watch it. The entity whose neck is actually in the noose — the outsourced recovery agency with 40 tele-agents working on commission — cannot write a ₹4 lakh cheque. Financial institutions have outsourced collections to a long tail of small, commission-only agencies for whom compliance spend is pure margin destruction. Those agencies are the ones who get deboarded. And "loss of lender partnerships" is the actual death sentence in this business — not an RBI fine, which lands on the bank.

So the gap is not "nobody audits calls." The gap is **the small agency has no way to prove it behaved.** Today the evidentiary record is asymmetric and the asymmetry runs one direction: borrowers record agents on their phones and escalate with audio; there are documented cases of borrowers holding recorded proof of threats while the lender's nodal officer sits on it. The agency has a dialer log showing a call happened for 4 minutes 12 seconds. That is not evidence of conduct. When a complaint lands, the agency cannot say "here is the transcript, here is the sentiment curve, here is the agent identifying himself at 0:04, here is nothing resembling a threat" — so it eats the accusation, and after two or three it loses the mandate.

From 1 January 2027 that asymmetry becomes a legal obligation with a six-month preservation window attached. The agency has to keep call content anyway. The insight is that the same file it is now forced to retain is also the exhibit that defends it — but only if something can actually read Hinglish well enough to be believed. Until June 2026 nothing could, cheaply. That is the arbitrage: an enterprise-priced capability, sold at agency wallet size, to the party with the most to lose and the least budget.

Reframed: Gistly sells **oversight** to lenders. BolChaap sells **defence** to agencies. Same audio, opposite side of the table, one-tenth the price, and a buyer who feels the pain personally rather than departmentally.

## 4. Target market

**Primary customer:** Owner or compliance head of an outsourced loan-recovery agency in India running **20–200 tele-calling agents**, empanelled with 2–8 NBFCs/banks/fintechs, working unsecured personal loans, credit cards, two-wheeler and microfinance books. Concentrated in Noida, Gurugram, Mumbai, Pune, Hyderabad, Chennai, Jaipur, Indore. Revenue is commission on recovery, typically single-digit percent of collected value.

**Why they buy:** Not for a dashboard. They buy because (a) from 1 January 2027 their lender clients will contractually push the 100P content-preservation obligation down the chain — lenders are liable for agency conduct and have already been fined ₹2.27 crore for exactly that, so they will demand evidence, not assurances; (b) when a borrower complaint arrives, the agency currently has nothing to answer with, and "loss of lender partnerships" is how agencies die; (c) empanelment and renewal now require producing SOPs, certification records, timestamped interaction logs and audit samples — the agency that walks in with per-call conduct evidence wins mandates from the agency that walks in with a spreadsheet.

**Rough TAM reasoning:** I don't have a clean census of Indian recovery agencies and I'm not going to invent one. What is known: essentially every formal lender category — commercial banks, SFBs, RRBs, co-operative banks, NBFCs, HFCs, AIFIs — is covered by the new circulars, and collections outsourcing to a distributed network of external vendors is the industry norm. If the addressable set is even 1,500–4,000 agencies of the target size, at ₹25–60K/month, that is a ₹45–290 crore/year market. I need less than 2% of the low end for a ₹3 crore ARR business. That is the right shape for this: too small to interest the funded players chasing lender ACVs, big enough to be a real company.

**Why now for them:** The 1 January 2027 date is fixed and close. Agencies have roughly four months of budget cycle to solve it, and their lender clients are already writing the requirement into renewal contracts. Nobody buys compliance software in the abstract; they buy it when a customer's procurement form asks a question they cannot answer.

## 5. Product sketch (MVP)

- **Drop-in audio ingestion** from the agency's existing dialer/cloud-telephony recordings — no rip-and-replace of the calling stack, which is the single biggest adoption blocker.
- **Hinglish-native transcription** of 100% of calls, with mid-sentence language switching preserved in one continuous transcript and each language labelled.
- **Conduct scoring against the RBI paragraphs that actually exist** — 100Y civil-manner and abusive-language checks, calling-window 08:00–19:00 breaches, third-party contact (spoke to a neighbour/relative rather than borrower or guarantor), mandatory agent self-identification, and the recording-disclosure notice.
- **Six-month preservation locker** with the retention clock, sub-judice hold, and deletion schedule handled per 100P — so the obligation is discharged by using the product, not by a separate process.
- **One-click defence pack** — for any disputed call: transcript, translated English version, flagged/clean verdict against each conduct rule, timestamps, and agent identity, exported as a dated PDF the agency can hand a lender's compliance team or a grievance officer.
- **Agent-level heat view** showing which agents drift — the Noida failure mode was eight agents doing the wrong thing for three months inside a 3% sample. This surfaces the pattern, not the average.
- **Lender-ready monthly attestation** summarising coverage (100%), violations found, and remediation taken — the artefact an agency brings to empanelment renewal.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The entire thing is: *machine reads 100% of code-switched Indian-language audio accurately enough that a compliance claim can rest on it.* That capability is roughly two months old at a price a 40-agent agency can pay.

Two things are genuinely hard and genuinely AI:

**Reading the audio.** Hinglish is not a language pair you can bolt on with language detection — the switch happens mid-sentence, mid-clause, often mid-word-borrowing, over a mobile connection with background floor noise. The documented 60–70% accuracy of English-first models on real Hindi calls is not a rounding error; it is the difference between evidence and noise. Single-pass code-switching STT is the unlock.

**Judging conduct, not keywords.** "Minatory language" is not a banned-word list. An agent saying *"aapko problem ho jayegi"* in a flat tone is a factual statement about credit consequences; the same phrase with escalation and repetition is a threat. Keyword spotting produces false positives that destroy trust with agents — which is exactly the failure that made agents distrust the last generation of tools. This needs an LLM reasoning over a transcript span with context, and it needs to output a citation ("at 2:14 the agent said X") because the whole product is evidence, and evidence without a pointer is an opinion.

Notably, the AI here is *exculpatory* as often as accusatory. Most calls are clean. The product's most-used output is "this call was fine, here is the proof" — which is why the agency, not the lender, is the natural buyer.

## 7. Localization angle

This is not a localised version of a global product. This is a product that only exists because of local conditions, which is the stronger position.

- **Language:** Hinglish plus Marathi, Tamil, Telugu, Bengali, Kannada, Gujarati — and specifically the *switching*, which no US-built collections QA tool has any reason to solve well.
- **Regulation:** The conduct rules are RBI paragraph numbers, not generic "compliance." The scoring rubric is a direct encoding of 100P/100Y/100F and the 08:00–19:00 window. A US FDCPA tool cannot be reskinned into this.
- **Pricing:** ₹25–60K/month works where $500–1,000/month does not, and the ₹4–8 lakh/month enterprise tier is irrelevant to this buyer. Indian STT-cost-to-price ratios make a 40-agent agency profitable to serve; that maths does not work at Western labour-replacement pricing.
- **Distribution:** These agencies are reachable — they are clustered geographically, they are listed in lender empanelment panels and on IndiaMART, and the industry is relationship-dense. This is a WhatsApp-and-a-site-visit sale, not a webinar funnel.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹700–900 per agent seat per month, floor ₹20,000/month. A 40-agent agency lands at ~₹30,000/month (~$350). A 150-agent agency at ~₹1.05 lakh/month (~$1,250). Priced deliberately *below* the ₹4–8 lakh/month enterprise tier by an order of magnitude — this is a different buyer, not a discount.
- **Gross margin:** STT at $0.129/hr is the dominant variable cost. A tele-agent generates maybe 3–4 hours of talk time daily, ~75 hours/month → ~$10/agent/month of transcription, plus LLM conduct-scoring on flagged spans. At ₹800 (~$9.50)/seat that is uncomfortably thin at list STT rates — so v1 runs batch-only, scores conduct on sampled-plus-flagged spans rather than every minute, and negotiates committed-volume STT pricing. Realistic target: **60–70% gross margin**, not the 85% a pure-software SaaS enjoys. I'd rather state that honestly than pretend inference is free.
- **ACV:** ₹3.6L average (~$4,200), assuming a mid-size agency.
- **To $1M ARR (₹8.5 crore):** ~235 agencies at ₹30K/month, or ~120 at ₹60K. Against an addressable set of 1,500–4,000, that is 6–15% penetration. Achievable but not trivial — this is the number to be honest about.
- **To $5M ARR:** Needs two more things to be true: (1) move upmarket into the 200–500 agent agencies and the in-house collections floors of mid-size NBFCs, roughly tripling ACV; (2) expand the same engine into adjacent RBI-recorded-conduct surfaces — insurance mis-selling calls, mutual-fund distributor calls, and the outbound tele-sales floors that face similar conduct rules. Same audio pipeline, different rubric.
- **Expansion path:** Seats grow with the agency's book. Then per-dispute defence packs as a paid artefact. Then the lender-side mirror: sell the agency's own attestation feed upward to its NBFC clients as a verified vendor-oversight channel — which is the interesting long game, because the agency becomes the distribution into the lender.

## 9. Go-to-market wedge — first 100 customers

The deadline does the selling. My job is to be standing in front of the right 400 people in October.

- **Work the empanelment lists.** NBFCs and banks publish or disclose their empanelled recovery-agency panels, and agencies advertise their lender empanelments on IndiaMART, GoodFirms and their own sites. Build a list of 800 agencies with named owners and phone numbers — this is a scrapeable, verifiable list, not a fantasy. Cold-call and WhatsApp them (this industry answers the phone; it is a phone business) with one line: *"From 1 January your lender has to preserve what your agents said, not that they called. Can you produce that today?"* At 800 dials, 15% conversation rate, 20% pilot rate → 24 pilots.
- **Lead with a free audit of their own calls.** Take 200 of the agency's existing recordings, run them, and hand back the transcripts plus the three worst calls with timestamps. This is the entire pitch and it costs me about $3 of inference. Every agency owner believes their floor is clean; roughly none of them have listened to 200 calls. The demo *is* the product, and it is falsifiable in front of them.
- **Sell through the lender's procurement pressure.** Get 3–5 NBFC compliance heads to add "per-call conduct evidence" to their agency renewal checklist — they want this, it reduces *their* 100F liability for free. Every agency in that lender's panel then has to buy something by 1 January. This is the highest-leverage move available: one compliance head can create 20–40 forced buyers, and costs me nothing but meetings.
- **IIBF certification adjacency.** Agents need 100-hour IIBF certification on code of conduct from July 2026. Training providers and the agencies routing agents through them are a natural referral channel — they are already in the room discussing conduct compliance.
- **The regional clusters.** Noida, Gurugram, Hyderabad, Pune. Agency owners in these clusters know each other and poach each other's staff. Ten reference customers in Noida sells the eleventh without a call. Physical presence at a couple of collections/credit industry meets beats any digital channel here.

## 10. Build complexity — justification

**Medium.** Transcription is a paid API. Conduct scoring is an LLM with a well-specified rubric. Storage with a retention clock is standard. The real work is unglamorous: ingesting audio from a dozen different Indian cloud-telephony providers and on-prem dialers with inconsistent export behaviour, building a conduct rubric that a compliance officer will actually defend, and keeping false-positive rates low enough that agents don't revolt. Call it **14–18 weeks for a pair** to a credible v1, with the first four weeks spent entirely on rubric calibration against real audio, because a wrong verdict is worse than no verdict in an evidence product. Batch-only for v1 — the real-time Melia tier isn't in production yet and this use case doesn't need it.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Processing call recordings the agency already lawfully makes and is now legally obliged to retain. Borrower is informed calls are recorded per 100P. DPDP obligations apply — data stays in India, role-based access, defined retention. |
| Ethical — no harm / dark patterns | ✅ | Net effect is fewer harassed borrowers. The product's honest tension: it is sold as agency defence, so it must not become a tool for burying violations — hence tamper-evident logs and no delete-the-bad-call feature. Stated plainly because it matters. |
| Market exists (evidence above) | ✅ | Funded incumbent at enterprise tier proves willingness to pay; the gap is the price point and the buyer, not the need. |
| 1–5 person team can build this | ✅ | Two engineers plus a domain advisor who has run a collections floor. |
| Launchable with <$50K / ₹40L | ✅ | Inference, cloud, and a founder's time. No capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hard dated obligation (1 Jan 2027) plus existential commercial risk (lender deboarding). Not 19 because the pain is currently anticipated rather than bleeding — the fines land on lenders first, and some agencies will gamble on non-enforcement. |
| Demand evidence | 15 | 12/15 | Strong: dated regulation, a real ₹2.27cr penalty precedent, a funded incumbent charging ₹4–8L/mo for the enterprise cut. Docked because I have zero verbatim quotes from *small agency owners* — the customer-voice research came back empty on Reddit/forums, which is expected for this offline buyer but means the specific segment's willingness-to-pay is inferred, not observed. |
| Build feasibility | 15 | 11/15 | Off-the-shelf STT and LLM, but dialer-integration sprawl and rubric calibration are genuine 14–18 week work. Not a 6-week solo build. |
| Distribution clarity | 15 | 13/15 | Named, scrapeable list; a phone-answering industry; a hard deadline; and a lender-procurement lever that manufactures buyers. Strongest axis. |
| Revenue mechanics | 15 | 12/15 | Pricing anchored against a known incumbent tier. Docked for the honest margin problem — inference cost is a real drag at ₹800/seat, and $1M ARR needs 6–15% penetration of a set I could not size precisely. |
| Time to first revenue | 10 | 7/10 | Pilots can be paid within 8 weeks given the deadline urgency, but agencies budget slowly and v1 needs ~4 months. Realistically first meaningful revenue at 3–4 months. |
| Defensibility | 10 | 5/10 | Execution-and-focus moat. The tech is buyable by anyone; the incumbent could launch an SMB tier tomorrow. What compounds: the calibrated conduct rubric, accumulating dispute-outcome data, and being the name that lender procurement lists by default. Real but not deep. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy` — needs someone who can ship a multilingual audio pipeline *and* someone who will sit in a Noida agency office. A domain advisor who has run a collections floor is close to mandatory for rubric credibility.

### Key assumptions to validate

1. **Assumption:** Small agencies (20–200 agents), not just lenders, will pay for this out of their own commission margin. **How to test:** 40 structured calls with agency owners; ask directly whether their lender contracts have added content-preservation language for 2027 renewals, and quote ₹30K/month. Look for 25%+ saying "send me the pilot."
2. **Assumption:** Code-switched Hinglish transcription is accurate enough on *real dialer audio* — compressed, noisy, mobile — to support a conduct claim. **How to test:** Run 200 real recordings through Melia, have a bilingual reviewer score word-error-rate and, more importantly, conduct-verdict agreement. Need >90% verdict agreement, not just decent WER.
3. **Assumption:** Lenders will push the obligation down to agencies contractually rather than absorbing it with their own enterprise tooling. **How to test:** Interview 8 NBFC compliance heads about their 2027 agency-renewal checklists. If they say "we'll just buy Gistly and watch the agencies ourselves," the buyer is wrong and this becomes a lender-side product.
4. **Assumption:** Gross margin survives at ₹800/seat. **How to test:** Get committed-volume STT quotes; model against measured average talk-minutes per agent from pilot data.

### Risk flags

1. **Incumbent moves down-market:** Gistly or a collections-platform player (Credgenics, CarmaOne, LeadSquared) ships an SMB tier at ₹25K/month. This is the most likely way the idea dies. Mitigation is speed and owning the agency-defence framing rather than the oversight framing.
2. **Regulatory slippage:** Dates in this saga have already moved — reporting has variously cited July 2026, October 2026, and January 2027 across draft and final stages. The final circulars say 1 January 2027, but enforcement intensity in year one is unknown. A soft-pedalled rollout removes the urgency that makes the GTM work.
3. **Wrong side of the table:** If lenders buy oversight tooling for the whole panel, agencies never become buyers. Watch this closely — it is assumption 3 and it is the structural bet.
4. **Margin compression from inference:** Unlike typical SaaS, cost scales with usage. Heavy-calling agencies could be unprofitable at flat per-seat pricing. May need a talk-minute cap or usage tier.
5. **Ethical drift / platform dependency:** The product must never become a way to hide violations, and it currently rests on one STT vendor's newest model. Both need mitigation — tamper-evident storage, and a second STT provider benchmarked before scale.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can ship a multilingual audio pipeline, paired with
                        someone willing to sell face-to-face in Noida/Hyderabad collections offices.
                        Domain advisor from a collections floor strongly recommended.
Time to revenue:        3–4 months (paid pilots possible at 8 weeks given the 1 Jan 2027 deadline)
Capital to launch:      ₹8–12 lakh ($10–14K)
Top 3 assumptions to validate first:
  1. Agencies pay from their own margin — 40 owner interviews, quote ₹30K/mo, need 25% pilot interest
  2. Hinglish conduct verdicts are >90% accurate on real dialer audio — 200-call bilingual review
  3. Lenders push the obligation down rather than buying oversight themselves — 8 NBFC compliance interviews
Kill criteria:
  - Abandon if <20% of 40 agency owners say their lender has raised 2027 content-preservation in contract talks
  - Abandon if conduct-verdict agreement on real dialer audio is <85% after rubric tuning
  - Abandon if an incumbent ships a sub-₹50K/month agency tier before v1 ships
  - Abandon if blended gross margin cannot clear 55% at ₹800/seat on measured pilot talk-minutes
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the list. 200 recovery agencies with named owners from lender empanelment disclosures, IndiaMART and GoodFirms. Simultaneously beg, borrow or buy 200 real Hinglish collections recordings — an agency owner will hand these over in exchange for a free audit, which is also the sales pitch.
- **Day 3–4:** Run the audio through Melia plus a conduct rubric. Have a bilingual reviewer independently verdict the same 200 calls. Compute verdict agreement, not just word-error-rate. This is the technical go/no-go and it costs under $50.
- **Day 5:** 40 dials to agency owners. Two questions only: *"Has any lender asked you about preserving call content for 2027?"* and *"If I could hand you a defence pack for any disputed call, is ₹30,000 a month interesting?"* Log answers verbatim.
- **Decide go / no-go on:** ≥90% conduct-verdict agreement on real audio **AND** ≥10 of 40 owners confirming lender-side pressure **AND** ≥8 of 40 asking for a pilot. Miss any one and the idea is either a lender-side product or not a product.

Falsifiable, cheap, and finishes inside a week. If the audio doesn't read accurately on real dialer recordings, nothing else matters and I want to know that on Wednesday.
