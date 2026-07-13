---
title: "TransmitProof — e-invoice proof desk for PH taxpayers"
slug: bir-eis-transmission-proof
date: 2026-07-13
category: Compliance / Philippines — Mid-Market Taxpayers and Accounting Firms in BIR EIS Scope (sales-data transmission assurance)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Catches the invoices that never reached BIR, and proves you sent them before the daily fine starts."
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [Compliance-driven, SMB, AI-agent, Regulatory-arbitrage, Philippines, Accountant-channel]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# TransmitProof

## 1. One-liner

Catches the invoices that never reached BIR, and proves you sent them before the daily fine starts.

## 2. Trend signal — why now?

On 1 January 2027, e-invoicing goes live for real in the Philippines. Every covered taxpayer must issue invoices as structured JSON, digitally sign each one with JWS, and transmit it to the Bureau of Internal Revenue's Electronic Invoicing System **within three calendar days of the transaction**. The deadline to be ready is 31 December 2026 — five and a half months from today.

The penalty structure is what makes this urgent rather than merely annoying. Under Section 264-A of the Tax Code, failure to transmit sales data carries a fine of **₱10,000 or one-tenth of one percent of annual net income, whichever is higher — for each day of failure.** Cross 180 days of violations in a year and the BIR may order your business closed. This is not a one-time slap. It is a meter that runs.

Now the part that turns a compliance chore into a product. The BIR's EIS platform is not a reliable counterparty. The 2022 pilot with 100 large taxpayers was, in VATupdate's words, "plagued by bugs, errors, and downtime." On 15 November 2023 the BIR advised stakeholders that the platform was experiencing problems and **paused the pilot outright.** It stayed paused until RR 11-2025 restarted the programme, and RR 26-2025 pushed the deadline to end-2026 — an extension that, as the reporting notes, acknowledged "the time needed not only by taxpayers but also by the government."

Read that again. The government extended the deadline partly because *the government* wasn't ready. And when it does go live, the daily penalty for a failed transmission lands on the taxpayer, not on the platform that dropped it.

Meanwhile the vendors are all selling the same half of the problem. QNE, Juan, HashMicro, AutoCount, Xero-plus-a-CPA — every one of them sells *invoice issuance*. Not one of them sells *proof the invoice arrived*. And the BIR does not accredit software vendors at all: "Any product marketed as 'BIR-accredited e-invoicing software' is a marketing claim, not an official BIR designation." So the market is full of confident-sounding tools whose confidence is unearned.

Provenance:
  - Signal 1 (demand): Philippine SMEs face e-invoicing implementation costs of ₱100,000 to ₱1 million and "often do not have sufficient technology expertise," per BusinessWorld, the Philippines' main business daily, published 6 July 2026 — one week ago — under the headline "The real cost of e-invoicing: Are Philippine businesses ready?" — https://bworldonline.com/economy/2026/07/06/761502/the-real-cost-of-e-invoicing-are-philippine-businesses-ready/ — 2026-07-06
  - Signal 2 (feasibility): BIR EIS technical spec is now public and machine-tractable — JSON payloads with 20+ mandatory fields, JWS signing with taxpayer private keys, API transmission within 3 calendar days, EIS Certification Portal plus Permit to Transmit. A spec this precise is a spec you can build a validator and a watchdog against. — https://rtcsuite.com/bir-e-invoicing-philippines-eis-by-2026-a-comprehensive-guide-to-scope-stages-and-technical-compliance/ — 2026-07-13
  - Signal 3 (economic): Sec. 264-A imposes ₱10,000/day or 0.1% of annual net income per day of failed transmission, with business closure available after 180 days; Sec. 264 adds ₱1,000–₱50,000 per non-compliant invoice. Regulatory spend is being forced by statute on a hard date. — https://www.vatupdate.com/2026/03/07/briefing-document-podcast-philippines-e-invoicing-and-e-reporting/ — 2026-03-07
  - Signal 4 (the wedge): The BIR's own EIS pilot was "plagued by bugs, errors, and downtime" and was paused by BIR advisory on 15 November 2023. The counterparty you are legally required to reach is historically unreliable. — https://www.vatupdate.com/2024/09/03/the-current-state-of-the-philippines-eis-pilot/ — 2024-09-03
  Category: Regulatory arbitrage

## 3. The opportunity

Every e-invoicing vendor in the Philippines is solving **issuance**. Nobody is solving **assurance**.

Here is the failure mode that will define 2027, and it is a quiet one. A mid-market company issues 4,000 invoices a month. Their accounting system generates the JSON, signs it, fires it at the EIS API. On the screen, the invoice looks perfect. It prints. The customer takes it. Everyone is happy.

But 60 of those transmissions failed. Maybe the JWS signature was rejected. Maybe field 14 of 20 was malformed on a particular transaction type. Maybe the EIS gateway was simply down — as it demonstrably has been before. The accounting system fired and forgot. No one reconciled the acknowledgements. And the ₱10,000-per-day meter started running on 60 invoices, silently, and nobody will find out until a BIR letter arrives months later, by which point the arithmetic is genuinely frightening.

This is a *reconciliation* problem wearing a *compliance* costume, and reconciliation problems are exactly what software eats. The incumbent accounting platforms will not fix it, because to them a successful API call is a successful API call — they are built to push invoices out, not to prove receipt and chase the gaps. Chasing gaps is unglamorous, it is where the liability lives, and it is a wholly different product with a wholly different user: not the clerk who cuts the invoice, but the controller or the external accountant who signs off on the year.

The 10-year record-retention requirement makes this sharper still. When BIR comes asking in 2031 about a transaction from 2027, "our system said it sent" is not a defence. A timestamped, signed log of every transmission attempt, every acknowledgement, every rejection, every retry, and every eventual success — that is a defence. Nobody is building the evidence locker.

## 4. Target market

- **Primary customer:** The finance controller or external accounting firm serving Philippine companies in EIS Phase 1 scope — large taxpayers, companies over ₱1B annual gross sales, e-commerce and digital platform sellers, and any business already running a Computerized Accounting System (CAS). Micro-enterprises under ₱3M in sales are exempt and are explicitly *not* the customer. Sweet spot: companies doing 500–20,000 invoices a month, with a 1–4 person finance team and no in-house engineer who understands JWS.

- **Why they buy:** Because the penalty is per-day and they cannot see whether they are exposed. Every mid-market controller in the country is about to be personally accountable for a machine-to-machine integration they do not understand, talking to a government platform with a public track record of dropping messages. Note that BIR guidance itself instructs taxpayers to "monitor reporting logs, acknowledgements, and validation outcomes to identify errors or rejected submissions" — the regulator has already told them this is their job. It has not told them how, and their accounting vendor does not do it.

- **Rough TAM reasoning:** Phase 1 is deliberately narrow — large taxpayers, e-commerce sellers, CAS users. Realistically a few thousand entities in the first wave, expanding to the broader Small/Medium band in Phase 2 (expected 2027+), which is where the market becomes tens of thousands. I do not need precise counts: at ₱15,000/mo, capturing 600 entities is roughly ₱108M/yr (~$1.9M). Phase 2 is the expansion engine, and it arrives right as the product matures. Crucially, I am not betting the business on Phase 2 — Phase 1 alone supports a $1–2M ARR company, which is exactly the size I want.

- **Why now for them:** 31 December 2026 is 5.5 months away. Budget conversations for e-invoicing readiness are happening this quarter. The BusinessWorld piece running last week is the tell — this is now front-page anxiety for Philippine finance leaders, not a niche tax-nerd topic.

## 5. Product sketch (MVP)

- **Transmission ledger.** Every invoice your system sends to the EIS gets logged with its payload hash, timestamp, signature, and the exact BIR response. One screen answers "are we clean right now?" with a number, not a vibe.
- **Silent-failure alarm.** The product knows what you issued (from your accounting system) and what BIR acknowledged. Anything issued-but-not-acknowledged past 48 hours pages the controller — with a day of the 3-day window still in hand.
- **Pre-flight validator.** Before an invoice is ever transmitted, check it against the EIS JSON schema and all 20+ mandatory fields, and verify the JWS signature will actually verify. Catch the malformed invoice on your own machine, not on BIR's.
- **Retry-and-chase queue.** When EIS is down — and it will be down — hold, retry with backoff, and prove you tried. The retry log *is* the compliance artifact.
- **Penalty exposure meter.** For every unacknowledged invoice, show the running Sec. 264-A arithmetic in pesos. This is the screen that sells the product. Controllers do not act on "3 errors." They act on "₱180,000 and climbing."
- **Audit pack export.** One click produces the 10-year-retention evidence bundle for any date range: what was sent, when, what BIR said, what was retried, what was cured.
- **Multi-entity view for accounting firms.** One dashboard, every client, sorted by who is bleeding.

## 6. AI angle — what's load-bearing

I want to be honest about this, because the persona file says AI must be load-bearing and this is a product where I could easily bolt on a chatbot and pretend.

The core loop — ledger, reconcile, alarm, retry — is deterministic engineering, not AI. That is a feature, not a bug: you do not want a language model deciding whether an invoice was legally transmitted. Correctness here is arithmetic, and arithmetic should be arithmetic.

Where AI genuinely earns its place is **the mapping problem, and it is a big one.** Every customer arrives with a different accounting system — QNE, HashMicro, Xero, SAP, AutoCount, a 2009 FoxPro thing a cousin wrote — and each emits invoice data in a different shape. Getting from *their* schema to *BIR's* 20-field JSON is a bespoke mapping exercise that traditionally eats two weeks of consultant time per customer, and that consultant cost is precisely why compliance runs ₱100K–₱1M a shot. An LLM that ingests a sample export and proposes a validated field mapping — which the human confirms once — collapses onboarding from weeks to an afternoon. That is the difference between a services business that cannot scale and a SaaS business that can.

Second real use: **rejection triage.** When BIR rejects a payload, the error is a schema violation buried in a machine response. Turning that into "invoice #4471 was rejected because the buyer TIN is missing its branch code; here are the 12 other invoices with the same defect" is exactly the pattern-matching-plus-explanation job models are now good at, and it is the difference between a controller fixing 12 invoices in one pass and finding them one at a time over three weeks.

Strip out the AI and this product still exists — but its onboarding cost is 10× and its gross margin dies. AI is what makes the unit economics work, not what makes the demo look clever.

## 7. Localization angle

This *is* the localization play — the entire product is a bet on one country's tax code and one government API. There is no generic global version, which is the point. A US or EU vendor will not build this because the Philippines is too small to appear on their roadmap; the global e-invoicing giants (Sovos, Pagero, EDICOM, Comarch, ClearTax) treat PH as one row in a 60-country compliance matrix and sell enterprise deals, not ₱15K/mo subscriptions to a 4-person finance team.

Local specifics that matter and that a foreign team would get wrong:
- **Peso pricing.** ₱10,000–₱25,000/mo is a real, payable number for a mid-market Philippine controller. $500/mo framed in dollars feels foreign and gets escalated for approval; ₱15,000/mo does not.
- **The accountant channel.** Philippine SMEs run on external bookkeepers and CPA firms to a degree that surprises Western founders. The firm is the buyer and the distributor. Sell to the firm, land the portfolio.
- **English-language market.** Business, tax, and regulatory discourse in the Philippines is conducted in English. No translation layer, no multilingual model cost. This is a meaningful build advantage over a comparable Indonesia or Vietnam play.
- **Regulatory intimacy.** You must actually track BIR RMCs and advisories as they drop. That is unglamorous local work — and it is the moat.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₱12,000–₱25,000/mo (~$210–$440) per entity, banded by invoice volume. Accounting firms buy a multi-entity seat at ₱8,000/client/mo with volume breaks. Deliberately priced *below* the pain: the first day of a single Sec. 264-A penalty is ₱10,000. The product costs less per month than one day of being wrong. That is the entire sales pitch and it fits on one slide.
- **ACV:** ~₱180,000/yr (~$3,150) for a direct mid-market entity. Firm deals land bigger — a 20-client firm at ₱8,000/client is ₱1.9M/yr.
- **Math to $1M ARR:** ~₱57M/yr. That is roughly 320 direct entities at ₱15,000/mo, or — more realistically — 25 accounting firms averaging 15 clients each (375 entities) plus 100 direct logos. Achievable inside 18 months if the Dec-2026 deadline lands as scheduled.
- **Math to $5M ARR:** Requires Phase 2 to arrive and pull the Small/Medium band into scope, expanding the addressable base by an order of magnitude — plus expansion revenue from the audit-pack and archive product, which is a natural upsell as the 10-year retention obligation starts to feel heavy. Honest assessment: $5M is a Phase-2-dependent outcome and I would not underwrite it. $1–2M on Phase 1 alone is the real business, and it is a good one.
- **Expansion path:** Per-entity growth as clients add subsidiaries; the archive/retention tier; cross-border e-invoicing (CEI) support, flagged for early 2027; and eventually the same product shape aimed at Vietnam and Indonesia, which are on the same continuous-transaction-controls trajectory.

## 9. Go-to-market wedge — first 100 customers

The whole game is that there is a *known, enumerable list* of people who must comply by a *known date*, and that list is public.

- **Scrape the BIR Large Taxpayers Service list and the CAS/PTU registrants.** These are published. Cross-reference with SEC company filings for finance-leadership names. This is not a guess about who the customer is — the regulator has published the customer list. Cold email with one subject line: "Your EIS transmissions are not being reconciled." Send it in November, three weeks before the deadline, when the panic is peak.
- **Go through the CPA firms, not around them.** The Philippine Institute of Certified Public Accountants (PICPA) has chapters that run continuing-education sessions. Offer a free, genuinely useful 45-minute CPE-style session: "What happens when your EIS transmission fails, and how to prove it wasn't your fault." That talk is a product demo that the audience is required to attend for credit. Land 3 firms, get 40 entities.
- **Free exposure scan as the wedge.** Ask a prospect for a CSV export of last month's invoices. Return a report showing which ones would fail EIS schema validation *today*, and the peso exposure if they went live tomorrow. This costs me nothing to run and it converts, because the number at the bottom is large and they did not know it. This is the "personalized Loom demo" of this market and it should close 10%+.
- **Ride the BIR's own instability.** The first time the EIS gateway goes down for a day after go-live — and on the pilot's track record, it will — every controller in the country will discover simultaneously that they have no idea which invoices got through. Have the retry-log-and-proof story published, indexed, and ready to be the thing they find. That day is the single best marketing moment this company will ever get, and it can be prepared for in advance.
- **Partner with the accounting-software vendors who don't want to build this.** QNE, Juan, HashMicro all sell issuance and none want to own the liability of transmission assurance. Integration partnership beats competition; they have the install base and a gap in their story.

## 10. Build complexity — justification

**Medium.** The core — ingest invoice data, validate against a published JSON schema, sign with JWS, transmit to a documented API, reconcile acknowledgements, retry with backoff, log immutably — is standard, well-understood backend engineering. No custom models, no novel infrastructure. Off-the-shelf: the crypto (JWS is a solved standard), the queueing, the web app.

The real work is in two places. First, **integration breadth**: reading invoice data out of a long tail of Philippine accounting systems, which is grinding, unglamorous connector work — and is exactly where the AI-assisted schema mapping earns its keep. Second, **regulatory tracking**: the BIR spec is a moving target, RMCs drop without warning, and edge cases (triangulation, reverse charges, incentivized enterprises) remain publicly acknowledged as unclear. That is a permanent tax on the roadmap and it needs a Philippine tax professional on the team or on retainer — not optional.

Two engineers plus a PH tax advisor, 12–16 weeks to a credible v1 that can onboard a design partner. The deadline does the marketing; the build just has to be ready before it.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance-assisting software. BIR does not accredit vendors, so no approval is required to sell — you help taxpayers meet their own obligation. |
| Ethical — no harm / dark patterns | ✅ | Helps businesses avoid penalties for failures that are frequently not their fault. The penalty meter is honest arithmetic, not manufactured fear. |
| Market exists (evidence above) | ✅ | Statutory mandate, hard date, per-day penalties, mainstream press coverage last week. |
| 1–5 person team can build this | ✅ | Two engineers + a PH tax advisor. |
| Launchable with <$50K / ₹40L | ✅ | Cloud infra, no capex. Main cost is the tax advisor's time. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Per-day penalties with business closure at 180 days. Hair-on-fire — but the fire starts on 1 Jan 2027, not today, so it's a 17 and not a 19. |
| Demand evidence | 15 | 12/15 | Statutory mandate + hard date + mainstream press + a real vendor market already forming. Docked because I found no direct verbatim customer complaints about *transmission failure specifically* — the pain is inferred from the pilot's documented instability, not yet voiced. That's the gap in my evidence and I won't paper over it. |
| Build feasibility | 15 | 11/15 | Published schema, standard crypto, standard backend. Dragged down by long-tail accounting-system integrations and a spec that is still officially "unclear" on edge cases. |
| Distribution clarity | 15 | 12/15 | The regulator publishes the customer list. PICPA chapters are a real channel. Free exposure scan is a strong wedge. Not a 14 because cold-emailing PH controllers is unproven for me. |
| Revenue mechanics | 15 | 12/15 | Pricing anchors cleanly below one day of penalty. $1–2M path is credible on Phase 1 alone; $5M genuinely depends on Phase 2 arriving. |
| Time to first revenue | 10 | 7/10 | The deadline creates urgency but also a shape: little revenue before Q4 2026, then a hard spike. Design partners payable in ~8 weeks; volume comes in November–January. |
| Defensibility | 10 | 5/10 | Honest score. Copyable in month 3 by anyone who reads the same spec. Defence is speed, the accumulating transmission ledger (switching cost grows with every logged invoice), and the CPA-firm relationships. No structural moat. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can implement JWS signing and a reliable retry/reconciliation engine correctly, and you absolutely need a Philippine tax professional who reads BIR RMCs for a living. This is a bad idea for a solo generalist with no PH presence — the regulatory tracking alone will sink you.

### Key assumptions to validate (3–5)

1. **Assumption:** EIS transmissions will fail at a materially non-zero rate in production, creating silent exposure. **How to test:** Interview 10 taxpayers who participated in the 2022 pilot. Ask directly: what fraction of your transmissions failed, and how did you find out? If the answer is "they didn't fail" or "our vendor handled it," the core premise is wrong and this is a much weaker product.
2. **Assumption:** Controllers see transmission assurance as a *separate purchase* from their invoicing software, not something they expect their vendor to include. **How to test:** Show 20 controllers the penalty-exposure screen and ask who they think should be responsible for it. If they say "that's QNE's job," the wedge is a feature, not a company.
3. **Assumption:** ₱15,000/mo clears the bar without procurement drama. **How to test:** Get 5 verbal price commitments before writing the reconciliation engine.
4. **Assumption:** The 31 Dec 2026 deadline holds. **How to test:** It has already slipped once (March 2026 → December 2026). Track RR issuances monthly. A second slip to 2028 does not kill the idea but it stretches the runway badly and would push me from GO to VALIDATE.

### Risk flags

1. **Regulatory timing risk — the big one.** This deadline has already moved once. If BIR slips again, revenue slides right by 12 months and a bootstrapped team may not survive the wait. Mitigate by keeping burn near zero until Q3 2026 and pre-selling design partners rather than building on spec.
2. **Platform dependency, in the most literal sense.** The entire product is a client of one government API whose schema, endpoints, and uptime are outside your control — and whose track record is a paused pilot. This is simultaneously the product's reason to exist and its largest structural risk. If BIR ships first-class transmission dashboards and acknowledgement reconciliation themselves, the product's core value evaporates overnight.
3. **Incumbent absorption.** QNE, HashMicro, Juan, or ClearTax could add a reconciliation view to their existing product. They probably will, eventually. The bet is that "eventually" is 12+ months and that owning the liability is a job they don't want. Partnership is the hedge; a real chance this becomes an acquisition rather than a standalone company.
4. **Evidence gap.** I could not source a single verbatim complaint from a Philippine taxpayer about a failed EIS transmission — because the mandate isn't live yet. The pain is *forecast* from the pilot's documented failures, not *observed*. That is a genuine weakness in the thesis and it is exactly what assumption #1 exists to kill.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (backend/crypto competent) with a Philippine
                        tax professional as co-founder or first hire. PH presence strongly preferred.
Time to revenue:        Design partners in 8 weeks; volume revenue Nov 2026 – Jan 2027.
Capital to launch:      $15–25K (₱850K–₱1.4M) — mostly the tax advisor and 4 months of runway.
Top 3 assumptions to validate first:
  1. EIS transmissions fail at a material rate — interview 10 taxpayers from the 2022 pilot cohort.
  2. Controllers will buy assurance separately from issuance — show 20 of them the exposure meter.
  3. ₱15,000/mo clears without procurement drama — get 5 verbal commitments pre-build.
Kill criteria:
  - Abandon if <2 of 10 pilot-cohort interviewees report any transmission failure they had to chase.
  - Abandon if BIR ships native acknowledgement-reconciliation dashboards before your v1.
  - Abandon if the deadline slips a second time to 2028 — the market goes back to sleep and
    you cannot fund a bootstrapped team through an 18-month dead zone.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the list. Pull the BIR Large Taxpayers Service register and CAS registrants. Identify the 2022 EIS pilot cohort — 100 named large taxpayers, and their participation is a matter of record. These are the only people on earth who have actually operated against this API.
- **Day 3–4:** Call them. Ten conversations, one question that matters: *"During the pilot, did you ever discover an invoice that your system said it sent but BIR never received? How did you find out, and what did it cost you?"* Everything hinges on the answer. Simultaneously, run the free exposure scan on any invoice CSV a friendly prospect will hand over — build the schema validator first, it is a weekend of work and it is the demo.
- **Day 5:** Decide. **Go if ≥4 of 10 pilot participants describe a transmission they had to chase or reconcile manually, AND ≥2 controllers say the exposure meter is something they'd pay for separately from their accounting system.** No-go if the pilot cohort shrugs — because that means the failures either didn't happen or were absorbed invisibly by their vendors, and in either case I am selling a solution to a problem nobody feels.

The falsifiable claim is precise: **the BIR EIS drops invoices, and taxpayers cannot currently tell when it does.** Ten phone calls settle it. If that claim is false, this idea is dead and I want to know inside a week, not inside a year.
</content>
</invoke>
