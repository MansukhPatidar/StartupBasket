---
title: "Reclaw — recoupment sentry for solo therapy practices"
slug: therapist-clawback-defense
date: 2026-05-30
category: HealthTech / US Solo & Small Behavioral-Health and Allied-Health Practices
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Catches surprise insurance clawbacks, checks if they're legal, and drafts the deadline-bound appeal."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, Solo-builder, AI-agent, Compliance-driven]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# Reclaw — recoupment sentry for solo therapy & allied-health practices

## 1. One-liner

Catches surprise insurance clawbacks, checks if they're legal, and drafts the deadline-bound appeal.

## 2. Trend signal — why now?

Insurance "clawbacks" — retroactive takebacks of payments already made — have gone from billing footnote to a named crisis that is actively driving therapists out of insurance networks. NPR, Georgia Public Broadcasting, and Commonwealth Beacon all ran 2024–2025 features on it. The mechanism is brutal: a therapist verifies eligibility, gets authorized, delivers care, gets paid — then six months to two years later the payer "discovers" they weren't the insurer of record (or didn't like a note) and demands the money back. One colleague got a letter demanding **$27,000**. One practice "eventually lost about $1.5 million in total clawbacks and had to take out loans to pay staff before shutting their doors" (Commonwealth Beacon).

The kicker is the clock. Providers typically get **30 days from the recoupment notice to appeal** — but the notices arrive late, get buried, and the rules differ by state. Several states cap the lookback (Massachusetts: 1 year) or prohibit recoupment until appeals are exhausted. So a large share of clawbacks are **procedurally improper and beatable** — one therapist got a $1,700 BCBS recoupment "wiped out immediately" simply by citing the MA one-year statute. But solo therapists don't know the rules, miss the deadline, and write the money off. As of May 2026 this is live news: Behavioral Health Business covered Massachusetts autism (ABA) providers "rattled" by a Carelon clawback effort demanding repayment within 30 days "before the opportunity to appeal had even run."

Provenance:
  - Signal 1 (Demand): Clawbacks driving therapists out of networks; verbatim "$27,000" and "$1.5M total... took out loans... shut their doors"; one BCBS recoupment beaten by citing the MA 1-yr statute — https://commonwealthbeacon.org/health-care/clawbacks-threaten-mental-health-services/ , https://clearhealthcosts.com/blog/2024/04/medicare-clawbacks-strike-therapists-nationwide/ — 2024–2025
  - Signal 2 (Feasibility): 2026 multimodal LLMs read EOB/ERA remits + clinical notes and match them against per-payer rules and per-state recoupment statutes; enterprise proof that AI can do this — Waystar AltitudeAI "take-backs" product cuts reconciliation time 80% — https://www.fiercehealthcare.com/health-tech/waystar-builds-out-ai-solution-uncover-lost-revenue-payer-takebacks — 2025
  - Signal 3 (Economic): Live 2026 clawback fight (Carelon vs. MA ABA providers, 30-day repayment); behavioral-health billing services already charge 4–10% of revenue and platforms (Headway) advertise "clawback protection" as a selling point — https://bhbusiness.com/2026/05/01/can-i-survive-here-massachusetts-autism-therapy-providers-rattled-by-contentious-medicaid-clawback-effort/ — May 2026
  Category: Underserved niche

## 3. The opportunity

Two tiers of tooling exist, and a giant middle is unserved.

**Top tier:** enterprise RCM — Waystar (AltitudeAI take-back detection), MD Clarity, Quadax, CombineHealth, Aptarro. Built for hospitals and DSOs, priced and integrated for them. A solo LCSW will never touch this.

**Platform tier:** Headway, Alma, Grow Therapy bundle "clawback protection" — but **only for therapists on their platform**, and they're financially cornered (reportedly making ~$0/session on some Optum contracts while absorbing the clawback liability). The therapists fleeing insurance *because* of clawbacks are precisely the independent billers these platforms don't cover.

**The gap:** the independent solo/small practice who bills insurance directly (via SimplePractice, TherapyNotes, or a small biller) has **no clawback defense at all**. SimplePractice even auto-records clawbacks as "adjustments" — it shows you the money vanishing but offers zero dispute workflow. The pain is real, the money is large, the appeals are winnable on procedural grounds, and nobody is selling these people a focused tool. That's the opening: an AI that watches every remit for a takeback, instantly checks it against the payer's rules and the state's recoupment statute, tells the provider whether it's improper, and drafts the appeal inside the 30-day window.

## 4. Target market

- **Primary customer:** Solo and small (1–8 clinician) US private practices that bill insurance directly — LCSWs, LMFTs, LPCs, psychologists, and adjacent allied-health (small PT, OT, chiro, ABA/autism therapy) clinics. Owner-operator is the buyer.
- **Why they buy:** "I got paid for six months of sessions and now they want it all back a year later and I have 30 days to respond and I don't even know if they're allowed to do this." It's a cash-flow-threatening, anxiety-inducing event with a hard deadline and an opaque process. They currently either eat the loss or pay a lawyer/biller hourly to fight it.
- **Rough TAM reasoning:** ~200K+ US mental-health clinicians in private practice (roughly half of outpatient providers work in private practice settings), plus tens of thousands of small PT/OT/chiro/ABA clinics. Even the insurance-billing solo subset is six figures of potential accounts. A few hundred customers clears $1M ARR — TAM is not the constraint.
- **Why now for them:** Clawback frequency and dollar size are rising (payers now run "predictive overpayment" AI), the news cycle has named the enemy, and 2026 LLMs finally make per-payer/per-state rule-matching cheap enough to sell at $49/mo instead of $5K/mo.

## 5. Product sketch (MVP)

- **Clawback radar:** connect the practice's clearinghouse/ERA feed (or forward remittance PDFs/835s); Reclaw flags every retroactive adjustment, offset, or recoupment the moment it lands — no more finding out when the deposit is short.
- **Legality check:** for each flagged takeback, it pulls the service date, the payer, and the provider's state, then tells them in plain English: "This recoupment is for sessions 14 months ago. [State] caps lookback at 12 months. This is likely time-barred — appeal it."
- **Deadline clock:** a visible countdown per clawback (e.g. "23 days left to appeal"), with reminders, because the 30-day window is where most money is lost.
- **Appeal drafter:** generates a payer-specific, statute-citing appeal letter pre-filled with the dates, amounts, claim IDs, and the exact legal/contractual ground (timely-filing, statute of limitations, eligibility-was-verified, appeal-rights-not-exhausted).
- **Document assembler:** bundles the appeal with the supporting EOB, original authorization, and eligibility-check record into a single submit-ready packet.
- **Recovery ledger:** tracks each clawback's status (flagged → appealed → recovered/lost) and tallies dollars saved — the number the customer screenshots to justify the subscription.
- **Note-gap pre-check (v1.1):** scans a clinical note against the payer's documentation requirements *before* an audit, flagging what would trigger a recoupment.

## 6. AI angle — what's load-bearing

Remove the AI and this is a deadline tracker — useless. The work is reading messy, heterogeneous remittance data (835 EDI, scanned EOB PDFs, payer portal screenshots) AND a clinical note, extracting the specific facts (service dates, payer, reason code, dollar amount), and reasoning across three reference layers at once: the payer's own recoupment policy, the state's recoupment statute (lookback period, notice requirements, appeal-rights rules), and the provider's documentation. Then it composes a persuasive, correctly-grounded appeal letter. That cross-document, cross-jurisdiction reasoning is exactly what a year ago required a human biller or a $5K/mo enterprise suite — and exactly what 2026 multimodal LLMs collapse into seconds. The "is this even legal" verdict is the load-bearing magic.

## 7. Localization angle (if any)

N/A — this is a US-only play, and that's the point. The moat IS the localization: 50 states' recoupment statutes plus each major payer's clawback rules. There's no global version; the value is entirely in the per-state, per-payer rule corpus. (A future analog could exist in other litigious payer markets, but the US clawback crisis is uniquely acute and uniquely well-documented right now.)

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered SaaS. Solo $49/mo, small-group (2–8 clinicians) $129/mo. Plus an optional **15% success fee on recovered dollars** for practices that want zero-risk — the recovered-money framing sells itself.
- **ACV:** ~$800–1,500 (blended subscription + occasional success fees).
- **Rough math to $1M ARR:** ~800 practices × ~$105/mo avg = ~$1M. Add success fees on top.
- **Rough math to $5M ARR:** ~3,500–4,000 practices, expanding from behavioral health into small PT/OT/chiro/ABA (same clawback mechanic, same state statutes, larger dollar amounts) and adding the pre-audit note-gap product as an upsell.
- **Expansion path:** seats as practices grow; success fees scale with recovered dollars; cross-sell the note-gap pre-check; a "clawback insurance"-style flat add-on.

## 9. Go-to-market wedge — first 100 customers

- **Reddit r/therapists + r/privatepractice:** these communities have recurring, emotional clawback threads. Show up with a genuinely useful free "is this clawback legal?" answer engine and a recovered-dollars story. Not generic content — direct, in-thread help.
- **Free clawback-legality checker as the hook:** "Paste your recoupment notice, we'll tell you in 60 seconds whether it's time-barred under your state's law and what to cite." Ungated, viral-able, and it surfaces exactly the people in active pain inside their 30-day window.
- **Therapist billing/practice influencers:** TheraThink, The Insurance Maze (Barbara Griswold), zynnyme, and private-practice coaches already publish about clawbacks and platform risk — affiliate/co-marketing with the people therapists already trust on billing.
- **State association + listserv seeding:** state psychological/counseling associations circulate clawback warnings; get the free checker into those newsletters.
- **Cold outreach to the fleeing:** therapists publicly posting "I'm dropping insurance because of clawbacks" are the warmest possible leads — reach them with "before you drop the panel, see how much of this is improper."

## 10. Build complexity — justification

Medium. The web app, ERA/835 ingestion, and LLM extraction/drafting are off-the-shelf. The real work — and the moat — is building and maintaining the structured rule corpus: 50 states' recoupment statutes (lookback, notice, appeal-rights) and the top ~15 payers' clawback policies, kept current. That's domain research and ongoing curation, not novel engineering. A technical founder with a billing-savvy domain advisor ships a credible v1 (radar + legality check + appeal drafter for the top 5 states and top 5 payers) in ~10–14 weeks, then expands coverage.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Admin/financial tooling + appeal drafting; not clinical advice, not legal practice if positioned as document prep (add a "not legal advice" line + attorney-referral for contested cases). |
| Ethical — no harm / dark patterns | ✅ | Helps small providers recover money improperly taken; no dark patterns. |
| Market exists (evidence above) | ✅ | Named crisis, large dollar figures, enterprise + platform incumbents validate willingness to pay. |
| 1–5 person team can build this | ✅ | Solo + domain advisor for v1. |
| Launchable with <$50K / ₹40L | ✅ | Web app + LLM API + rule-corpus research. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire: surprise five-figure takeback, 30-day clock, threatens cash flow. They'd pay this week. |
| Demand evidence | 15 | 12/15 | Multiple independent press features, verbatim dollar figures, enterprise + platform incumbents charging for adjacent protection. Direct SMB-tool demand inferred, not yet proven by a paying SMB competitor. |
| Build feasibility | 15 | 11/15 | App is easy; the state×payer rule corpus is real, ongoing curation work. |
| Distribution clarity | 15 | 12/15 | Named communities, an obviously viral free hook, trusted influencers. Conversion math still a guess. |
| Revenue mechanics | 15 | 11/15 | Clear WTP vs. $11K–$27K losses and 4–10% biller fees; success-fee model derisks. Retention depends on clawback frequency staying high enough to feel the value. |
| Time to first revenue | 10 | 8/10 | Free checker → paid in weeks; people are in active, deadline-driven pain. |
| Defensibility | 10 | 5/10 | Moat = the maintained rule corpus + niche brand + workflow lock-in. Copyable in 6–12 months by a motivated competitor or by Headway extending off-platform. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs solid AI/document engineering plus a billing/legal domain advisor who knows recoupment statutes cold.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of clawbacks hitting solo therapists are procedurally improper and therefore winnable. **How to test:** Collect 30–50 real recoupment notices (via the free checker / community) and have the domain advisor classify how many are time-barred or procedurally defective.
2. **Assumption:** Solo therapists will connect their ERA/clearinghouse feed (or forward remits) to a third-party tool. **How to test:** Run the free checker as a manual-upload flow first; measure how many upload an actual notice vs. bounce.
3. **Assumption:** They'll pay $49–129/mo for protection against an event that's painful but intermittent. **How to test:** Offer the success-fee-only tier alongside subscription in early outreach; see which converts and at what mix.
4. **Assumption:** Headway/Alma won't quickly extend clawback protection to off-platform billers. **How to test:** Monitor their product announcements; interview therapists on why they stay independent.

### Risk flags

1. **Defensibility risk:** Execution + rule-corpus moat only. A funded RCM player or a platform could move down-market. Mitigant: speed, niche brand, and a free hook that compounds a notice dataset.
2. **Unauthorized-practice-of-law risk:** Drafting appeal letters that cite statutes flirts with UPL. Mitigant: position strictly as document preparation / information, ship clear disclaimers, and partner with attorneys for contested escalations.
3. **Demand-frequency risk:** If a single practice gets clawbacks only a few times a year, perceived value between events may dip and churn rises. Mitigant: always-on radar + recovery ledger + pre-audit note-check keep it valuable between hits.
4. **Platform dependency:** Relies on ERA/835 access and payer portal formats. Mitigant: support manual upload as a permanent fallback.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + behavioral-health billing/legal domain advisor
Time to revenue:        6–10 weeks (free checker → paid)
Capital to launch:      $8–20K (LLM API + rule-corpus research + landing/app)
Top 3 assumptions to validate first:
  1. Share of solo-therapist clawbacks that are procedurally improper — classify 30–50 real notices with a domain advisor
  2. Willingness to connect ERA feed / forward remits — measure upload rate on a manual free checker
  3. Subscription vs. success-fee preference and price — A/B in first-100 outreach
Kill criteria:
  - Abandon if <25% of collected real clawback notices are plausibly improper/winnable (no defensible "is this legal" verdict to sell)
  - Abandon if free-checker → paid conversion stays <3% after 300 qualified notices uploaded
  - Abandon if Headway/Alma or a major EHR (SimplePractice/TherapyNotes) ships native off-platform clawback defense before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Stand up a single-page "Is your insurance clawback legal?" tool — paste/upload a recoupment notice, get back a plain-English verdict (time-barred? procedurally defective? what to cite) for the top 5 states and top 5 payers. Manual/LLM-assisted backend is fine.
- **Day 3–4:** Drop it into r/therapists and r/privatepractice clawback threads and 2–3 therapist-billing communities, plus DM 20 therapists who recently posted about dropping insurance over clawbacks.
- **Day 5:** Decide. **Go** if ≥40 real notices uploaded AND ≥10 people ask "can you actually file this for me?" / give an email for the paid version. **No-go** if uploads are trickling and nobody asks to pay — the pain isn't pulling hard enough to beat the deadline.

The result is falsifiable: either people in active 30-day pain hand over a real notice and ask to pay, or they don't.
