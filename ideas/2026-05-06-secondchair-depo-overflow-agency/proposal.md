---
title: SecondChair — AI second-chair reporter for court-reporting agencies
slug: secondchair-depo-overflow-agency
date: 2026-05-06
category: LegalTech SaaS / US Small Court-Reporting Agencies
complexity: Medium
score: 80
verdict: STRONG GO
confidence: Medium
oneLiner: AI second-chair reporter that lets small court-reporting agencies cover the depositions they currently turn away.
tags:
  vertical: ProfessionalServices
  model: SaaS
  geography: US
  secondary: [LegalTech, AI-agent, Voice-first, SMB, Workflow-automation, Tech-unlock]
axes:
  problem: 18
  demand: 14
  build: 11
  distribution: 12
  revenue: 13
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# SecondChair — AI second-chair reporter for small court-reporting agencies

## 1. One-liner

AI second-chair reporter that lets small court-reporting agencies cover the depositions they currently turn away.

## 2. Trend signal — why now?

Court reporting is a $2.7B US service market in structural collapse. Three signals converged in 2025:

- **Workforce cliff.** NCRA reported average member age ~56 as of June 2025, with 50% retirement-eligible. Stenography school enrollment down 74%, half of programs closed. ~23,000 stenographers left in the US, down 21% in a decade.
- **Gap is now public.** California Judicial Council disclosed that **74% of unlimited civil/family/probate hearings in Q2 2025 occurred with no verbatim record** (255,334 of 344,845). CA needs 458 additional reporters to meet current demand. NCSC's August 2025 workforce findings: 70%+ of legal end-users report shortages, 76% cite scheduling difficulties.
- **Tech unlock landed.** OpenAI gpt-realtime hit GA Aug 28 2025 with native SIP and image input + 20% price drop. Speech-to-speech speaker-attributed transcription is now economic at $0.50–1/hr of audio. Verbit, Steno, and AAERT-certified digital reporters have built credibility — but tools target enterprise (Verbit) or vertically-integrated agencies (Steno, $49M Series C March 2026, building its own reporters).
- **Money on the table.** Per-page rates climbed to $3–7 standard, $6.50–7.50 in major markets, plus $250–400 appearance fees. Rough drafts are billable at $2–3.50/page. Every depo a small agency declines is $400–1,200 of margin walking out the door.

Provenance:
  - Signal 1 (demand): NCSC + CA Judicial Council disclose 74% of civil hearings have no verbatim record; 70%+ of legal users report shortages — https://courts.ca.gov/news-reference/research-data/shortage-court-reporters-california — 2025-08
  - Signal 2 (feasibility): OpenAI gpt-realtime GA + SIP/image + 20% price cut — https://openai.com/index/introducing-gpt-realtime/ — 2025-08-28
  - Signal 3 (economic): Steno raises $49M Series C for AI-enabled court reporting; AAERT certifications gaining state-level acceptance — https://siliconangle.com/2026/03/26/steno-raises-49m-change-court-reporting-ai-enabled-transcript-analysis/ — 2026-03-26
  - Reinforcing signal: stenoimperium.com chronicles disappearing reporters in rural counties — https://stenoimperium.com/2025/11/02/they-dont-know-we-need-them-the-growing-silence-around-the-disappearing-court-reporter/ — 2025-11-02
  - Category: Tech-unlock (with regulatory tailwind from state-level digital-reporter acceptance)

## 3. The opportunity

Two ecosystems exist today and neither serves the small agency:

- **Stenograph / Eclipse / Case CATalyst** sell desktop tooling to the individual stenographer. Brilliant for steno — useless when the steno doesn't exist.
- **Verbit / Veritext / Steno / Esquire** are the giants. They sell *services* to law firms — and they're the ones eating the small agency's lunch by becoming the default backstop when the corner agency can't cover.

The 800–1,200 small agencies in the middle (5–25 reporters, $1–10M revenue) get squeezed. They can't hire stenographers — there aren't any. They can't afford Verbit-tier infrastructure. And they've watched Veritext/Steno rep their attorneys, eat their accounts, and absorb their reporters with signing bonuses.

What's missing: a tool the **small agency owner** runs, that turns one human (a junior digital reporter or a notary-trained AAERT CER) plus an AI second chair into the equivalent capacity of a senior stenographer. Cover the overflow. Bill the rough draft. Hand off to a scopist for certified transcript. Keep the account.

That's a 10× UX shift versus paying $200K all-in for a stenographer who's also retiring.

## 4. Target market

- **Primary customer:** Small court-reporting agency owner. Title: Owner / President / Director of Operations. Company size: 5–25 reporters, 200–2,000 jobs/yr, $1–10M annual revenue. Geography: US, with concentrated demand in CA, FL, TX, NY, GA, IL, OH, NJ — states with mixed digital/steno acceptance and worst shortages. Most are 1–2 generation family businesses.
- **Why they buy:** "I turned down 14 depos last week." Every declined job is lost margin AND a relationship handed to a competitor. They are literally watching their book shrink. Quote pattern from industry reporting: 76% of legal users cite scheduling delays as their #1 complaint — small agencies are the ones telling them no.
- **Rough TAM reasoning:** ~1,000 small US court-reporting agencies (Yelp/Google maps + AAERT directory triangulation). At $1,000–2,500/mo blended ACV → $12–30M ARR if half are reachable. Adjacent: solo freelancers running their own brand (~3,000–5,000 of them) at lower price tier. Adjacent #2: county/municipal court systems (longer sales but bigger contract).
- **Why now for them:** State-by-state legislative shifts in 2024–2025 expanded digital reporter acceptance (TN, NC, GA, FL, CA pilots). AAERT CER certification is a real path now ($275 exam, $125/yr membership, online schools). The bottleneck moved from "is this allowed?" to "is the tooling good enough to keep my agency competitive?" Today the answer is finally yes.

## 5. Product sketch (MVP)

- **One-click join** for Zoom, Webex, Teams, RingCentral depos + an iOS app for in-person hearings (uses an external lavalier mic per speaker via 3.5mm/USB-C splitter).
- **Speaker-attributed live transcript** with 2–4 second latency, automatic objection/exhibit/ruling tagging, and inline read-back-on-demand for attorneys.
- **Rough-draft generator** — produces a billable rough draft within 15 minutes of proceedings ending, with confidence scoring per line and exhibit thumbnails inline.
- **Scopist hand-off** — exports clean draft into Case CATalyst / Eclipse formats so the agency's existing scopists/proofreaders certify the final transcript without retooling.
- **Agency dashboard** — schedule view of which jobs are AI-covered vs steno-covered, billing per page generated, scopist throughput, attorney-facing branded portal.
- **Concierge backstop** — first 90 days, agency operations team can call a SecondChair human reviewer (us) for any job we flag <90% confidence. Customer never explains AI to attorneys; they explain "our digital reporter."
- **Compliance bundle** — auto-generates AAERT-aligned chain-of-custody records, audio archive, signed certification statement template for the certifying transcriber.

## 6. AI angle — what's load-bearing

Strip the AI and there's no product. The wedge is:
- **Speaker diarization on legal speech** with overlapping crosstalk — gpt-realtime + a domain-tuned diarizer hits agency-acceptable rough-draft quality.
- **Real-time tagging** of objections, exhibits, off-the-record breaks — a legal-domain agent that runs on the live transcript every 3–5 seconds.
- **Rough-draft polish** — small fine-tuned model converts raw ASR into Case CATalyst-formatted draft (Q&A blocks, page/line numbers, parenthetical descriptions).
- **Confidence-routing** — the system routes ambiguous segments to human scopists rather than over-promising. The AI's *ability to say I don't know* is a feature, not a bug.

This is exactly what just became possible in 2025–2026. Two years ago the rough draft was unusable; today it beats a junior digital reporter on consistency.

## 7. Localization angle

N/A — this is a US-only play (state-by-state legal acceptance gates international expansion). Court systems in UK, Canada, Australia have analogous shortages but different procedural rules and different transcript formats. Phase 2 only after US lock-in.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by agency size.
  - **Solo / freelancer:** $299/mo for 20 hrs of covered audio + $15/hr overage.
  - **Agency Standard:** $999/mo for 100 hrs + $10/hr overage. Includes 5 reporter seats.
  - **Agency Pro:** $2,499/mo for 300 hrs + $8/hr overage. Includes 15 seats, scopist routing, branded attorney portal, priority concierge.
- **ACV:** Blended ~$18,000–24,000 across small agencies. Solo tier ~$3,600.
- **$1M ARR math:** 60 agencies on Pro ($150K) + 200 agencies on Standard ($240K) + 2,000 solos on $300/mo ($720K) = $1.11M. Realistic at month 12–15.
- **$5M ARR math:** 200 Pro + 800 Standard + 5,000 solos = $5.0M. Requires US-wide brand inside court-reporting trade — hit by month 30 if the 2025 state-acceptance trend continues.
- **Expansion path:** (1) per-page billing — take 5–10% of agency's rough-draft revenue as transactional layer. (2) certified transcript marketplace — offer scopist supply when agency runs short. (3) lawyer-facing transcript-search SKU sold *through* agency to their attorney clients (a la Steno's Transcript Genius but co-branded).

## 9. Go-to-market wedge — first 100 customers

- **Scrape the AAERT certification directory + state court-reporting boards** → ~3,500 agency contacts. Personalize a 90-second Loom of "your last 10 declined jobs, recovered" and email the owner. Conversion target: 3–5% reply, 1% close = 30–50 customers from 3,500 emails.
- **NCRA renegades + AAERT trade events.** AAERT national conference (annual, ~600 attendees), CSRA, NVRA. Sponsor a $2K booth, demo the second-chair live on a mock depo. Agencies sign on-site. Target: 15–25 agencies per event.
- **Stenonymous + court-reporter Facebook groups** — the trade press is already screaming about the shortage. Pay industry bloggers (Stenonymous has a known audience of 10K+ reporters/agencies) for a sponsored case study with a named agency. Lead-gen through trade press is huge in this niche.
- **Channel partner: scopist co-ops.** ~500 freelance scopist groups exist. They want more work. Offer them 80% of polish revenue to refer their agency clients. They become unpaid sales force.
- **Competitive switch from Veritext/Steno overflow.** The junior reporter Veritext drops because the venue is "too small" is a perfect lead. Run a "we cover what they won't" referral on PACER / state court calendars. Niche but pointed.

If 100 customers in 6 months isn't realistic from the above — the idea isn't ready. From the math, it is.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: gpt-realtime / Gemini Live for ASR+diarization, Zoom/Teams/Webex SDKs for capture, standard SaaS stack. Custom: legal-domain post-processing, Case CATalyst export format (RTF-CRE), confidence routing UI, scopist workflow. iOS capture app needed for in-person. Realistic v1 in 4–5 months for a 2-person team (1 full-stack, 1 ML/audio). The hard part is not the model — it's earning agency-owner trust on real depos. That's domain operations, not engineering.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Certified transcript still produced by human (CER+CET or CSR). AI is workflow, not the legal record. State-by-state acceptance trending favorable. |
| Ethical — no harm / dark patterns | ✅ | Replaces missing capacity, not existing reporters. Concierge backstop ensures quality floor. |
| Market exists (evidence above) | ✅ | $2.7B services market, NCSC + CA + NCRA all confirm shortage in writing. Steno's $49M Series C confirms VC bet. |
| 1–5 person team can build this | ✅ | 2–3 people, 4–5 months to MVP. |
| Launchable with <$50K / ₹40L | ✅ | ~$10–15K — API credits, AAERT exam fees for in-house QC, conference sponsorship. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Agency owners are losing 20–40% of incoming bookable work. Hair-on-fire — they'd pay this week. |
| Demand evidence | 15 | 14/15 | State-government published statistics, $49M VC round on adjacent thesis, AAERT certification growth. Skeptic-proof. |
| Build feasibility | 15 | 11/15 | Realtime ASR + legal-domain post-processing + Case CATalyst export is non-trivial but not research-grade. 4–5 months. |
| Distribution clarity | 15 | 12/15 | Named directories (AAERT, NCRA, state boards), trade conferences, trade press. Not 13/15 because conversion math is still estimate. |
| Revenue mechanics | 15 | 13/15 | Pricing benchmarked against ReporterBase, Stenograph, Verbit. Per-page transactional upside well-trodden. |
| Time to first revenue | 10 | 8/10 | Agency owners pre-pay pilots. Realistic first dollar in week 6–8 from a friendly agency. |
| Defensibility | 10 | 6/10 | Workflow lock-in (scopist integrations, agency portal), accumulating audio for fine-tuning, brand trust in a tight-knit industry. Not deep moat — Steno could clone if they pivot from full-stack. |
| **Total** | **100** | **82/100** | Adjusting down to 80 for confidence — score below. |

Final adjusted total: **80/100**.

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Best-fit founder: a technical operator who can ship realtime audio + LLM workflows, paired with someone who's run or worked at a court-reporting agency (or has a close family member who has). Without the domain partner, the agency-owner trust gap is too wide.

### Key assumptions to validate (3–5)

1. **Assumption:** Small agencies will hand a real depo to an AI second-chair with a junior human supervising. **How to test:** Sign 3 agencies for paid pilots in CA, TX, FL. Run 30 depos, measure: rough-draft acceptance rate, scopist hours per page vs steno baseline, billed per-page recovery.
2. **Assumption:** Rough drafts at gpt-realtime+post-processing quality are billable at $2–3/page without attorney complaint. **How to test:** Blind A/B with 5 attorneys — give them rough drafts from human stenographer vs SecondChair and measure complaint rate, redo requests, and billing-dispute rate.
3. **Assumption:** Agency owners will pay $1,000–2,500/mo SaaS, not just per-job. **How to test:** Pricing-page split test + 30 outreach calls. Measure intent-to-pay at each tier.
4. **Assumption:** Scopist supply is sufficient at the price points implied. **How to test:** Survey 50 freelance scopists on capacity + rate at $0.30/page polish for AI-prepped drafts.
5. **Assumption:** State legal acceptance keeps trending favorable through 2026–2027. **How to test:** Monthly tracker of state Supreme Court rules + AAERT advocacy filings. If 3 major states reverse course, kill criterion triggers.

### Risk flags

1. **Regulatory whiplash.** NCRA is actively lobbying *against* digital reporting in CA and other steno-heavy states. A high-profile transcript error in a published case could trigger a rule change.
2. **Steno / Veritext moves down-market.** They have the brand and capital. If Steno launches "Steno for Agencies" as a tools-only SKU, our wedge narrows. Counter: their incentive is the opposite (they want to own the agency, not enable it).
3. **Per-page billing dispute.** First time an attorney finds a material AI error in a billed page, the agency pulls the product. The concierge backstop is mandatory in year one to avoid this.
4. **Workforce model pushback.** Industry trade press (Stenonymous and similar) is loudly skeptical of AI. Go-to-market needs to position as "fill the bookings the steno can't take" — not "replace the steno."

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       Technical founder + court-reporting domain partner (operator/agency owner)
Time to revenue:        6–8 weeks from MVP
Capital to launch:      $10–15K
Top 3 assumptions to validate first:
  1. Agency owners will pilot AI second-chair on real depos — 3 paid pilots in CA/TX/FL, 30 jobs, 90% rough-draft acceptance
  2. Scopist supply at $0.30/page polish exists — survey 50 scopists for capacity
  3. State legal acceptance trend continues — monthly tracker of state Supreme Court rules
Kill criteria:
  - Abandon if <2 of 3 paid pilots renew at month 3
  - Abandon if attorney complaint rate on AI-generated rough drafts >8%
  - Abandon if 3+ major states (CA, NY, IL, FL, TX) reverse digital-reporter acceptance in 12 months
  - Abandon if Steno or Veritext launches a tools-only agency SKU before our 100th customer
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Pull AAERT directory + state court-reporting boards. Build a list of 200 small agency owners (5–25 reporters). Personalize cold email referencing their public job-board postings and their state's shortage data.
- **Day 2:** Send the 200 emails. Subject: "How many depos did you turn down last month?" Goal: 8–12 booked discovery calls.
- **Day 3–4:** Run discovery calls. Specifically ask: "If I gave you a tool that let one CER cover the same load as a senior stenographer, what would you pay?" Capture verbatim.
- **Day 5:** Decide go/no-go on this measurable outcome:
  - **GO** if ≥4 agencies say they'd pay >$1,000/mo AND ≥2 commit to a paid pilot at a per-job rate.
  - **NO-GO** if fewer. The signal is real but the wedge into agencies isn't, and we should restage the idea.

Falsifiable. Either I can sell paid pilots in five days of cold outreach or I can't.
