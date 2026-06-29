---
title: "CaseProof — Rx-intake screen for dental labs"
slug: dental-lab-rx-intake-proof
date: 2026-06-30
category: HealthTech / US Independent Dental Laboratories (1–4 staff, crown & bridge)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Catches incomplete dental Rx before the bench starts and timestamps every dentist instruction so the lab wins remake fights."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [AI-agent, Voice-first, SMB, Workflow-automation, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CaseProof — Rx-intake screen for dental labs

## 1. One-liner

Catches incomplete dental Rx before the bench starts and timestamps every dentist instruction so the lab wins remake fights.

## 2. Trend signal — why now?

Three things converged in the last 12 months.

First, the pain is loud and old. Incomplete or ambiguous prescriptions are "a leading cause of production delays, rework, and workflow disruptions" — missing shades, no margin details, vague product selections that "stall the case, tie up the team, and delay the patient's restoration" ([Keating Dental Lab](http://www.keatingdentallab.com/news/streamline-dental-lab-efficiency-by-getting-the-prescription-right-the-first-time/), 2025). On the remake side, lab owners describe an "ego-bruising tug-of-war over who is to blame" — and surveys put **"more than three-quarters of remakes" down to dentist error**, with most traced to a bad impression ([Glidewell, The Remake Debate](https://glidewelldental.com/education/chairside-dental-magazine/volume-7-issue-1/lab-perspectives-the-remake-debate/)). The lab usually has no proof, so it eats the cost.

Second, the economics are brutal and quantified. A single remake forces the lab to "fabricate and sell approximately eight additional crowns just to recoup the profit lost" ([Spear Education](https://www.speareducation.com/resources/spear-digest/the-cost-of-laboratory-remakes/)). National remake rates run 4% on average (1–7% range). For a 1–4-person lab that is real money walking out the door every month.

Third — the unlock — multimodal LLMs can now read a sloppy handwritten Rx, parse a PDF lab slip, and transcribe a phone call cheaply and accurately enough to flag a missing shade or a contradicted material *before* the technician starts. That capability did not exist at usable price/quality two years ago. Existing AI in the space lives on the **scanner/clinic side** (chairside scan-QA baked into intraoral scanner platforms, and clinic documentation tools like [Denti.AI](https://www.denti.ai/)). Nobody sits on the **lab's** side of the wire.

Provenance:
  - Signal 1 (demand): Incomplete Rx is "a leading cause of production delays, rework" + remake "blame game" with no proof — [Keating](http://www.keatingdentallab.com/news/streamline-dental-lab-efficiency-by-getting-the-prescription-right-the-first-time/) / [Glidewell](https://glidewelldental.com/education/chairside-dental-magazine/volume-7-issue-1/lab-perspectives-the-remake-debate/) — 2025
  - Signal 2 (feasibility): Multimodal LLMs + cheap voice transcription now read handwritten/PDF Rx and phone calls; current AI scan-QA only serves the clinic side — [ai.dentist](https://ai.dentist/blog/ai-driven-digital-impressions-eliminate-dental-lab/) / [Denti.AI](https://www.denti.ai/) — 2026
  - Signal 3 (economic): One remake = ~8 crowns of lost profit; 4% national remake rate; ~$4,200/yr direct remake cost per practice — [Spear](https://www.speareducation.com/resources/spear-digest/the-cost-of-laboratory-remakes/) / [SprintRay](https://sprintray.com/lab-costs-killing-roi-what-crown-remakes-cost/) — 2025
  Category: Tech-unlock

## 3. The opportunity

Lab management software already exists — SimpleLabOS ($29–149/mo), Evident ($150–300/mo + setup), Magic Touch, LabStar. But every one of them is a **case-tracking and invoicing** system: Kanban boards, due-date alerts, a dentist portal. They assume the Rx that arrives is complete and correct. It usually isn't. And when a remake fight breaks out, none of them give the lab a shred of neutral evidence about what the dentist actually instructed.

CaseProof is not another lab-OS. It's the **intake-and-evidence layer** that bolts on top of whatever workflow the lab already runs. Two jobs:

1. **Screen the case at the door.** Whatever the lab receives — handwritten Rx photo, PDF lab slip, scan-file metadata, or a phone call where the dentist changes the shade — gets parsed, normalized, and checked for missing or contradictory fields (shade, margin, material, tooth #, due date, contact preference). The bench doesn't start a case that's going to bounce.
2. **Build the proof.** Every instruction — including recorded/transcribed phone changes — is timestamped and attached to the case. When the remake dispute comes, the lab opens the case and shows the dentist exactly what was sent, when, and by whom. The "blame game" stops being a he-said-she-said.

The incumbents won't do this fast: their AI roadmap, where it exists, points at the scanner and the dentist (their bigger-spending customer), not at giving the small lab a weapon to bill the dentist for a remake.

## 4. Target market

- **Primary customer:** Owner-operator of a US independent dental lab, 1–4 employees, crown-and-bridge focused, serving 10–60 dentist accounts. The owner is also the head technician and the person who makes the awkward "this one's on you, doc" phone call.
- **Why they buy:** "If you don't enforce a remake charge, it gives the dentist the impression that he can send you an inadequate impression at no risk to himself" (Marc Posen, Posen Dental Laboratory, via Glidewell). They want to enforce remake charges but can't, because they can't prove fault. They also lose hours a week to phone tag chasing missing Rx fields.
- **Rough TAM reasoning:** ~7,000–10,700 dental labs in the US depending on source, with ~89% single-owner operations (~9,500) and the bulk in the 1–4 employee band ([IBISWorld](https://www.ibisworld.com/united-states/number-of-businesses/dental-laboratories/4087/) / industry counts). Even capturing 1,000 of them at a few hundred dollars a month is a real bootstrapped business.
- **Why now for them:** Margins are compressing as DSOs and corporate lab groups consolidate and squeeze prices. A small lab can't afford to give away eight crowns of profit per remake. The first tool that lets them confidently bill back dentist-fault remakes pays for itself in one case.

## 5. Product sketch (MVP)

- **Drop-in intake:** forward a case the way it already arrives — photo of the paper Rx, emailed PDF slip, or a scan-portal screenshot — and CaseProof parses it into a structured case record.
- **Pre-bench completeness check:** flags missing or contradictory fields (no shade, missing margin design, material conflicts with prep, missing tooth #) and lists exactly what to ask the dentist before starting.
- **Phone-change capture:** a "log a call" button records/transcribes the dentist's verbal change, structures it ("shade changed A2 → A3.5, 11:42am Tue"), and attaches it to the case with a timestamp.
- **One-tap clarification message:** generates the "we can't start case #2841 until we have the margin design — reply here" text/email to the dentist's office.
- **Dispute pack:** for any case, export a clean PDF showing the original Rx, every change, and timestamps — the artifact you attach when you bill a dentist-fault remake.
- **Remake ledger:** running tally of remakes by dentist account, fault attribution, and recovered vs. eaten cost — so the owner sees which accounts are unprofitable.
- **Works alongside, not instead of** the lab's existing case-tracking software (no rip-and-replace).

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The core is: read whatever messy artifact a dentist sent (handwriting, a faxed PDF, a 30-second voicemail) and turn it into a structured, validated case record while catching what's *missing or contradictory*. That is exactly the multimodal-LLM + speech-to-text capability that became cheap and reliable in the last year. A dumb form would just be SimpleLabOS again — the whole point is that the lab does **not** get to dictate a clean digital form to its dentists; it has to accept the slop and make sense of it. The completeness/contradiction reasoning ("a zirconia crown with a feather-edge margin is a flag") is genuine domain-rule-plus-LLM work, not a regex.

## 7. Localization angle (if any)

N/A — this is a US-first play. Remake economics, the dentist-lab fee relationship, and the fragmentation of independent labs are sharpest in the US, and the customer-voice evidence is US/UK English. The same shape could later extend to UK/AU labs (same language, same blame dynamics), but there's no India/SEA pricing or payment-rail wedge here, and forcing one would weaken the focus.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $199/mo per lab (flat), with a $349/mo tier for multi-bench labs (more accounts, call-minutes, team seats). Anchored above SimpleLabOS ($29–149) because this isn't tracking — it recovers remake dollars and saves clarification hours.
- **ACV:** ~$2,400–4,200/yr.
- **Math to $1M ARR:** ~350 labs × $240/mo avg × 12 ≈ $1.0M. Out of ~9,500 single-owner labs, that's <4% penetration.
- **Math to $5M ARR:** ~1,400 labs at a blended ~$300/mo, *or* fewer labs plus an expansion line — a per-remake "dispute pack" upsell, or a small per-account fee charged to the dentists who get billed back. $5M needs the product to become the lab's default front door and likely a light marketplace/portal angle with dentists.
- **Expansion path:** start at intake screening → add dispute packs (recovered-revenue framing, easy to upsell) → add the remake-ledger analytics tier → eventually a dentist-facing portal that the lab pushes onto its accounts (the lab becomes the distribution).

## 9. Go-to-market wedge — first 100 customers

- **Dental Lab Network forum + Facebook group** — 26,000 members, 369K messages, the watering hole for exactly this owner. Post a teardown ("here's the dispute pack that got me paid for a dentist-fault remake") and DM the owners already complaining in the remake threads.
- **Scrape the dentallabprofile.com / NADL directories** — thousands of listed independent labs with contact info. Send a 90-second Loom showing a real sloppy Rx going in and a flagged completeness report coming out. Expect low single-digit reply; the pain is specific enough that the demo lands.
- **DLOBA (Dental Lab Owners Business Association)** and NADL — pitch a session/sponsor slot to owner-operators who meet specifically to fix business problems like this one.
- **Founder-led pilots:** hand-onboard the first 20 labs personally, recover one disputed remake each, turn the dollar figure into the case study that sells the next 80.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: multimodal LLM for Rx/PDF parsing, speech-to-text for call capture, standard web stack, Stripe. Custom work is the domain rule layer (what makes an Rx "incomplete" or "contradictory" for crown-and-bridge), the call-logging UX, and the dispute-pack export. No proprietary dataset is required — the rules come from public Rx forms and a domain advisor. A technical founder plus a part-time dental-lab advisor ships a credible v1 in ~10–14 weeks; full polish in 4–5 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | B2B software; call recording needs per-state consent handling (one-party vs two-party) — solvable with a consent prompt. |
| Ethical — no harm / dark patterns | ✅ | Gives the smaller party (the lab) evidence; reduces disputes rather than manufacturing them. |
| Market exists (evidence above) | ✅ | ~9,500 single-owner labs, quantified remake pain, paid incumbents. |
| 1–5 person team can build this | ✅ | Technical founder + domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf APIs, founder-led sales, no inventory. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Money-losing and weekly. One remake = 8 crowns of profit; intake gaps cause daily phone tag. Not quite hair-on-fire because labs have limped along with the blame game for decades. |
| Demand evidence | 15 | 12/20→12/15 | Quantified remake economics, owner quotes, paid incumbents, a 26K-member forum full of the complaint. Strong, though no one is yet paying *specifically* to solve intake+disputes. |
| Build feasibility | 15 | 11/15 | Mostly off-the-shelf; domain rule layer + call capture is the real work. ~10–14 weeks to v1. |
| Distribution clarity | 15 | 11/15 | Concentrated, named channels (forum, directories, DLOBA/NADL) but reaching solo owners is slow and high-touch. |
| Revenue mechanics | 15 | 11/15 | $199–349/mo is defensible against an 8-crown remake loss; needs only ~350 labs for $1M. Churn and willingness-to-pay above the $29 incumbents is the open question. |
| Time to first revenue | 10 | 8/10 | Hand-onboard pilots can pay within weeks once one disputed remake is recovered. |
| Defensibility | 10 | 5/10 | Execution + domain-rule depth + accumulating remake-fault data per account. Copyable by incumbents in 12 months if they bother — but they're aimed at the dentist. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** Lab owners will pay $199+/mo — well above the $29–149 incumbents — because it recovers remake dollars. **How to test:** 30 owner interviews + a pre-sale offer ("$199/mo, first recovered remake or refund"). Need ≥8 verbal commits.
2. **Assumption:** The dispute pack actually changes outcomes — dentists pay (or stop disputing) when shown timestamped proof. **How to test:** run 10 real disputed remakes through the pack with pilot labs; measure recovery rate vs. their historical ~0.
3. **Assumption:** Multimodal parsing of real-world sloppy handwritten Rx hits usable accuracy. **How to test:** collect 200 real anonymized Rx slips from 5 labs; measure field-extraction precision/recall on shade, margin, material, tooth #.
4. **Assumption:** Labs will adopt a tool *alongside* their existing lab-OS rather than demanding replacement. **How to test:** in interviews, ask whether a bolt-on intake layer is acceptable or a dealbreaker.

### Risk flags

1. **Incumbent reaction:** SimpleLabOS/Evident could add an "AI intake check" feature. Mitigant: their gravity is toward the dentist/scanner; move fast on the dispute-evidence angle they won't prioritize.
2. **Adoption friction:** solo owners are busy, change-averse, and reachable mostly one-to-one — CAC is human time. Mitigant: founder-led onboarding + recovered-dollar proof, not paid ads.
3. **Call-recording consent:** two-party-consent states require careful handling. Mitigant: build consent prompts; lean on transcribe-after-consent or written-change capture where recording is awkward.
4. **Willingness-to-pay ceiling:** if owners anchor to the $29 incumbents, the premium tier stalls. Mitigant: sell on recovered remake $, never on "case tracking."

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + part-time dental-lab owner/advisor
Time to revenue:        6–10 weeks (hand-onboarded pilots)
Capital to launch:      $8–15K ($/mo API + light tooling, founder-led sales)
Top 3 assumptions to validate first:
  1. Owners pay $199+/mo for remake recovery — 30 interviews + pre-sale, need 8 commits
  2. Dispute pack changes dispute outcomes — run 10 real remakes through it, measure recovery
  3. Sloppy-Rx parsing is accurate enough — 200 real slips, measure field precision/recall
Kill criteria:
  - Abandon if <8 of 30 interviewed owners verbally commit to $199+/mo
  - Abandon if dispute-pack recovery rate on 10 real cases is no better than their status quo
  - Abandon if Rx field-extraction precision stays below ~90% on real handwritten slips
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 40 owner names from the Dental Lab Network forum's remake threads + the dentallabprofile directory. Collect 50–100 real anonymized Rx slips/PDFs from 3 friendly labs.
- **Day 3:** Run those slips through a multimodal LLM extraction prototype (no UI). Measure how reliably it catches a missing shade/margin/material. Build one mock dispute pack from a real disputed case.
- **Day 4:** 15-minute calls with 8–12 owners. Show the extraction demo + dispute pack. Ask the $199/mo pre-sale question directly.
- **Day 5:** Go / no-go on a falsifiable bar — **≥8 of the owners say they'd pay $199+/mo AND extraction precision on real slips ≥90%.** Miss either, and it's a VALIDATE-again, not a build.
