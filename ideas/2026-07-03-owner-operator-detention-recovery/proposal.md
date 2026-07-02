---
title: "HaulDue — accessorial-recovery agent for owner-operators"
slug: owner-operator-detention-recovery
date: 2026-07-03
category: Logistics / US Owner-Operators & Micro-Fleets (detention & accessorial recovery)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "HaulDue chases the detention and TONU claims brokers ghost, until the owner-operator actually gets paid."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Solo-builder, Workflow-automation, Owner-operator]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# HaulDue — accessorial-recovery agent for owner-operators

## 1. One-liner

HaulDue chases the detention and TONU claims brokers ghost, until the owner-operator actually gets paid.

## 2. Trend signal — why now?

The trucking industry loses an estimated **$15.1 billion a year to detention** (ATRI 2024), and **~95% of fleets charge detention but fewer than 50% collect on the invoices they submit** — the same "under 50% get paid" figure shows up across ATRI, factoring-company blogs, and carrier forums. This is not a tracking problem anymore. Over the last 18 months a wave of GPS-geofence apps (DockClaim, Detention Pay/DMRG, Detention Source) solved the *generate-the-invoice* half: a driver arrives, the app timestamps it, and one tap emails the broker a clean, GPS-verified detention invoice.

What none of them solved is the half that actually moves money: **the broker receives that clean invoice and ignores it.** OOIDA survey data says 52% of drivers always try to collect detention, but most of the other 48% "believe they won't receive it no matter how hard they try." Factoring companies explicitly punt on this — their own marketing says they pay you in 24 hours on the base load *while you chase the detention separately.* Collections agencies want 15–30% and only bother with large, aggregated debts, not a single $175 detention claim. So the driver, who has no back-office and no time, writes it off. Multiply a few written-off accessorials a week across 350,000+ owner-operators and you get the $15.1B leak.

The forcing function for *now*: the tracking apps have, as a side effect, created a large population of **submitted-but-unpaid claims with clean, defensible evidence already attached** — claims that just need someone (something) to relentlessly pursue them. That pursuit — reading the rate confirmation's detention terms, following the broker's own claim rules, aging every open claim, escalating on schedule, and assembling a bond-claim packet as the final lever — is exactly the repetitive, document-heavy dunning work that got cheap to automate in the last 12 months.

Provenance:
  - Signal 1 (Demand): ATRI 2024 — industry loses $15.1B/yr to detention; <50% of detention invoices get paid; OOIDA: 48% of drivers believe they won't collect no matter what — https://www.thetruckersreport.com/truckingindustryforum/threads/how-to-get-brokers-to-actually-pay-detention.2145331/ — 2026-07-03
  - Signal 2 (Feasibility): Factoring explicitly skips accessorials ("get paid on the base load while you chase detention separately"); tracking apps generate clean evidence but stop at invoice — the pursuit layer is unautomated — https://www.bobtail.com/blog/what-to-do-if-a-broker-doesnt-pay/ — 2026-07-03
  - Signal 3 (Economic): Freight collections agencies charge 15–30% and target aggregated debt; ~95% of fleets charge detention, <50% collect — money is actively leaking with no per-claim economic solution — https://empirecollectionagency.com/freight-debt-collection-services/ — 2026-07-03
  Category: Underserved niche

## 3. The opportunity

The detention market has been mis-cut. Everyone built the same product — *detect arrival, generate invoice* — because that's the visible, demoable piece. But the invoice is not the bottleneck. The bottleneck is **everything that happens after the invoice is sent and the broker does nothing.**

Look at the two incumbents that flank the gap:

- **Tracking apps** (DockClaim, DMRG, Detention Source, plus TMS modules from Toro/Ditat): they end at "invoice sent." Their own value prop is the timestamp. After the send, the driver is on their own.
- **Collections agencies** (Empire, AWCollects, Freight Collection Solutions): 15–30% contingency, built for a carrier handing over a batch of large unpaid *linehaul* invoices. Nobody sends a collections agency a single $175 detention claim — the economics are absurd and the agency won't take it.

Between them sits the actual job to be done: a **patient, structured, automated collections process for small accessorial claims** — the thing a good back-office clerk would do if the owner-operator could afford one. Read the rate-con to know the detention terms and the broker's required claim procedure. Send claim #1 correctly the first time. Follow up on day 3, day 10, day 21 with escalating tone, each message citing the contractual terms and the attached GPS evidence. Track every open claim by age and broker. When a broker crosses the line into non-payment, generate the demand letter, then the **FMCSA bond/trust-fund claim packet** (the one real lever a small carrier has and almost never uses because they don't know how). Do all of this across dozens of open claims without the driver lifting a finger.

That's an AI-first product a focused team can do 10× better than a human clerk and infinitely better than "nothing," which is what 48% of drivers use today.

## 4. Target market

- **Primary customer:** US owner-operators and micro-fleets (1–10 trucks) running the spot market under freight brokers, doing their own back-office from a phone. Roughly 350,000+ owner-operators hold active authority; the sweet spot is the ~150,000 who run brokered spot freight and eat accessorials regularly.
- **Why they buy (in their words):** "I waited 6 hours, sent the detention invoice, and the broker just... never replied. It's $200. I'm not driving to small-claims court over $200." Multiply by a few loads a week and it's real money they've decided is un-collectable.
- **Rough TAM reasoning:** Even a conservative 120,000 reachable owner-operators × $39/mo = ~$56M/yr ceiling on subscription alone, before any recovery-share pricing. This is a healthy bootstrap TAM, not a unicorn — exactly the target.
- **Why now for them:** They already adopted a GPS-tracking app (so the evidence is clean), factoring won't touch accessorials, freight rates in the down cycle mean every $175 matters more than it did in the 2021 boom, and cheap AI finally makes "a robot back-office that chases my money" real at a $39 price point instead of a human clerk's salary.

## 5. Product sketch (MVP)

- **Rate-con ingest:** driver forwards or photographs the rate confirmation; HaulDue extracts the detention rate, free-time terms, and the broker's required claim procedure and deadline.
- **Claim launcher:** driver adds the GPS-timestamped arrival/departure evidence (imported from their tracking app, BOL photo, or check-in receipt) and HaulDue files the first claim to the broker, correctly formatted, within the rate-con's window.
- **Automated dunning sequence:** scheduled, escalating follow-ups (day 3 / day 10 / day 21) — each one citing the contractual terms and re-attaching evidence, in the broker's preferred channel (email, portal, or their AP contact).
- **Aging board:** every open claim in one list by age, broker, and dollar amount — the "who owes me what" view the driver has never had.
- **Escalation kit:** when a broker goes non-responsive, one tap generates a formal demand letter, then the **FMCSA surety-bond / trust-fund claim packet** with delivery proof and the unpaid-bill trail.
- **Broker reputation memory:** which brokers pay accessorials, which stall, which never do — accumulated across all HaulDue users (anonymized), surfaced before the driver books the next load.
- **Recovery ledger:** total dollars recovered to date — the number that justifies the subscription every month.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into a spreadsheet. The load-bearing work:

- **Rate-con comprehension:** every broker's rate confirmation is a differently-formatted PDF burying the detention rate, free-time, and a claim procedure ("detention must be reported within 24 hours to ops@…, with in/out times and a signed BOL"). Parsing that reliably across thousands of layouts is the core AI job — get the procedure wrong and the claim is dead on arrival.
- **Escalation drafting:** generating a firm, professional, broker-specific dunning message that cites *this* rate-con's terms and *this* claim's evidence — not a generic template — is what makes brokers pay instead of ignore.
- **Bond-claim assembly:** compiling the FMCSA trust-fund packet from scattered documents (rate-con, BOL, POD, the unpaid-invoice trail) is exactly the paralegal-grade document assembly AI now does cheaply.

Without the model doing the reading and the writing, you're asking a driver to do the work they already refuse to do. The AI *is* the back-office clerk.

## 7. Localization angle (if any)

N/A — this is a US-only play by design. Detention, TONU, the broker-carrier rate confirmation, and the FMCSA surety-bond mechanism are specific to the US freight brokerage system regulated under the FMCSA. The regulatory specificity (the bond/trust-fund lever) is actually the moat's raw material, not a limitation. A non-US version would be a different product against a different legal backdrop.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $39/mo flat for the owner-operator (unlimited claims), or a **recovery-share** option — free to start, 12% of dollars recovered — for drivers who won't pay upfront. Offer both; let the recovery-share tier de-risk adoption and convert winners to flat-rate.
- **ACV:** ~$468/yr on the flat tier; recovery-share users blend lower but cost nothing to acquire on a "we only win if you win" pitch.
- **Rough math to $1M ARR:** ~2,140 owner-operators on the $39/mo flat plan. Against 120,000+ reachable in the segment, that's a 1.8% penetration — very achievable for a product that literally returns cash.
- **Rough math to $5M ARR:** ~10,700 flat-plan subscribers, or a mix of ~7,000 flat + a large recovery-share base each throwing off $30–60/mo in contingency during peak dispute season. Requires becoming the default "how owner-operators collect accessorials," plus expansion into micro-fleets (per-truck pricing) and layover/TONU/lumper claims beyond detention.
- **Expansion path:** per-truck pricing as customers add trucks; broaden from detention to all accessorials (TONU, layover, lumper, tarp); sell the anonymized broker-payment reputation data as a premium "book-smart" tier; a light factoring or fast-pay partnership on recovered dollars.

## 9. Go-to-market wedge — first 100 customers

- **Trucking forums where the complaint already lives:** TheTruckersReport and r/Truckers have long-running "how do I get brokers to actually pay detention" threads. Show up in the exact threads with a before/after: "submitted this claim, broker ghosted 3 weeks, HaulDue's escalation got it paid in 8 days." Post the recovered-dollar receipt, not a pitch.
- **OOIDA + owner-operator YouTube/TikTok creators:** several trucker creators (50k–500k subs) built audiences on "brokers screwing drivers" content. Detention-recovery is native content for them — sponsor 5–10 with a recovery-share affiliate cut so their incentive matches ours.
- **Piggyback the tracking apps' users:** the drivers who already installed DockClaim/DMRG are pre-qualified — they've got clean evidence and have already decided detention is worth pursuing. Target their app-store reviews and the Facebook groups where those apps are discussed with "the app made the invoice; here's what actually collects it."
- **Dispatcher & authority-service partnerships:** small dispatch services and MC-authority filing services (who onboard new owner-operators weekly) can bundle HaulDue as a value-add — a named channel with a steady drip of exactly-right new customers.

If I can't recover a broker's first ignored claim inside 30 days, the driver churns — so the wedge is landing on drivers who have an *open, already-documented, already-ignored* claim right now. There are hundreds of thousands of those sitting idle.

## 10. Build complexity — justification

Medium. The rate-con parsing (varied PDFs → structured detention terms + claim procedure) and the escalation-drafting engine are real AI work but sit on off-the-shelf document-AI and LLM APIs — no custom models, no novel infra. The tricky parts are (a) reliably extracting the *claim procedure* so the first filing isn't dead-on-arrival, and (b) the FMCSA bond-claim packet logic, which needs domain research but is well-documented public process. Small team, 3–4 months to a credible v1: a phone app for evidence intake + claim launching, a dunning scheduler, and the aging board.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Assisting carriers to collect their own contractually-owed money; demand letters and bond claims are standard legal remedies. Stay clear of practicing law — provide document assembly + self-serve tooling, not legal representation. |
| Ethical — no harm / dark patterns | ✅ | Helps the party with least power (owner-operator) collect money they're genuinely owed. No dark patterns. |
| Market exists (evidence above) | ✅ | $15.1B/yr leak, <50% collection rate, active forum demand, adjacent apps already monetizing the tracking half. |
| 1–5 person team can build this | ✅ | Medium complexity, off-the-shelf AI, 3–4 months to v1. |
| Launchable with <$50K / ₹40L | ✅ | Solo/pair build + creator affiliate spend; no capital-intensive requirement. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real recurring money loss, felt weekly, currently written off. Not "hair-on-fire daily," but a persistent, quantifiable leak drivers actively complain about. |
| Demand evidence | 15 | 13/15 | Multiple independent hard signals: ATRI $15.1B, <50% collection rate, OOIDA 48%-give-up, funded tracking apps monetizing the adjacent half, existing 15–30% collections agencies. A skeptic nods. |
| Build feasibility | 15 | 11/15 | Doable in 3–4 months but rate-con parsing accuracy and bond-claim logic need discipline; not a 4-week solo build. |
| Distribution clarity | 15 | 12/15 | Named forums, named creator tier, pre-qualified users of adjacent apps. Conversion math realistic; requires content/community hustle. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked ($39/mo sits below factoring % and collections %); recovery-share de-risks. One assumption (drivers pay monthly vs. one-and-done) is a guess. |
| Time to first revenue | 10 | 7/10 | Drivers have open claims now; recovery-share tier can pre-sell. But proving a recovery takes weeks, so first paid conversions land in 4–8 weeks, not days. |
| Defensibility | 10 | 4/10 | Copyable feature set; moat is the accumulating broker-payment reputation data + rate-con parsing corpus + workflow lock-in once a driver's open claims live in the tool. Thin at month 3, real by month 12. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (rate-con parsing + escalation engine), `domain-expertise-required` (freight brokerage, FMCSA bond mechanics, accessorial norms — get these wrong and claims die).

### Key assumptions to validate (3–5)

1. **Assumption:** Owner-operators will pay $39/mo (or 12% recovery-share) rather than continue writing claims off. **How to test:** Offer 30 drivers with a specific open, ignored claim a recovery-share pilot; measure how many say yes and how many convert to flat-rate after a win.
2. **Assumption:** An automated, contractually-grounded escalation sequence measurably beats "driver sends one invoice and gives up" — brokers actually pay. **How to test:** Manually run the escalation playbook on 25 real ignored claims (concierge MVP); target ≥40% recovery vs. the ~<50% baseline being mostly one-shot invoices.
3. **Assumption:** Rate-con detention terms + claim procedures can be extracted reliably enough that first filings aren't dead-on-arrival. **How to test:** Parse 100 real rate-cons from different brokers; measure extraction accuracy on detention rate, free-time, and required claim procedure.
4. **Assumption:** The FMCSA bond/trust-fund claim is a credible lever brokers respond to. **How to test:** Interview 10 carriers who've filed bond claims + 3 freight attorneys on real-world response rates.

### Risk flags

1. **Unauthorized-practice-of-law risk:** demand letters and bond claims edge toward legal work. Stay a self-serve document-assembly tool, not a representative; get counsel to set the line before launch.
2. **Platform/channel dependency:** heavy reliance on trucking creators and forums for distribution — one policy change or a soured influencer relationship stings. Diversify channels early.
3. **Retention/seasonality:** if a driver clears their backlog, do they keep paying? Detention volume ebbs with freight cycles; flat-rate churn is a live risk. Recovery-share + always-on new claims mitigate but don't eliminate.
4. **Broker backlash:** aggressive automated dunning could get a driver blacklisted by a broker. Tone and cadence must be firm-but-professional and driver-controllable, or the product hurts the customer.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with a freight/brokerage domain advisor (ex-dispatcher, factoring, or freight-collections background)
Time to revenue:        6–10 weeks (concierge recovery-share pilots first, then flat-rate conversions)
Capital to launch:      $8–15K (build + creator affiliate seeding)
Top 3 assumptions to validate first:
  1. Automated escalation beats one-shot-and-give-up on recovery rate — concierge-run 25 real ignored claims, target ≥40% recovered.
  2. Drivers will pay $39/mo or 12% recovery-share — 30-driver pilot with an open claim, measure yes-rate + flat-rate conversion after a win.
  3. Rate-con claim procedures extract reliably — parse 100 broker rate-cons, measure procedure-extraction accuracy.
Kill criteria:
  - Abandon if concierge recovery rate on ignored claims is ≤ the ~50% baseline (i.e., escalation adds no lift).
  - Abandon if <20% of 30 piloted drivers convert to a paid plan after a successful recovery.
  - Abandon if a well-funded tracking incumbent (DockClaim et al.) ships an equivalent end-to-end dunning + bond-claim layer before your v1.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 40 real "broker won't pay detention" complaints from TheTruckersReport / r/Truckers / OOIDA threads. DM 30 drivers who have a *specific open, ignored* accessorial claim right now. Offer to recover it for them, free, in exchange for their rate-con + evidence + a call.
- **Day 3–4:** Manually run the escalation playbook (correctly-formatted claim → day-3 follow-up → escalation letter citing rate-con terms) on the 10–15 who hand over a real claim. This is the concierge MVP — no code. Simultaneously parse those 15 rate-cons by hand to gauge how hard procedure-extraction really is.
- **Day 5:** Decide go / no-go on a **falsifiable** outcome: did ≥40% of the pursued claims get paid (or get a concrete pay commitment) within the window, *and* did ≥6 of those drivers say yes to $39/mo or 12% recovery-share for the next one? If both hit, build. If escalation adds no recovery lift over one-shot invoicing, kill it — the whole thesis is that the pursuit, not the invoice, is the unmet need.
