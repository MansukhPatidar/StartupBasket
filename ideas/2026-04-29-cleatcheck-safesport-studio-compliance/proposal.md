---
title: "CleatCheck — AI SafeSport compliance copilot for US studios"
slug: cleatcheck-safesport-studio-compliance
date: 2026-04-29
category: Compliance SaaS / US Youth Sports Studios
complexity: Low
score: 81
verdict: STRONG GO
confidence: High
oneLiner: "AI copilot that runs SafeSport screening, training, and audit packs for US martial arts, gymnastics, and dance studios."
tags:
  vertical: Compliance
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Solo-builder, Compliance-driven, Workflow-automation, YouthSports]
axes:
  problem: 18
  demand: 13
  build: 14
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy]
featured: true
---

# CleatCheck — SafeSport compliance copilot for small US youth-sports studios

## 1. One-liner

An AI copilot that runs SafeSport background screening, prevention training, and audit-ready record-keeping for US martial arts schools, gymnastics gyms, and dance studios — without an admin.

## 2. Trend signal — why now?

**The January 1, 2026 NCSI mandate landed.** USOPC and the U.S. Center for SafeSport rewrote background-check policy for every NGB-affiliated club: all checks must now run through NCSI, the only approved screening provider, on a 24-month cycle. Multiple NGBs — USA Cycling, USRowing, USA Football, USA Hockey, USA Gymnastics — published 2026 policies that took effect this January. NGBs that don't comply risk decertification under Executive Order 14201.

**The Safe Sport Act reaches further than NGB clubs.** Legal analysis is consistent: the 2018 Protecting Young Victims from Sexual Abuse and Safe Sport Authorization Act applies "beyond Olympic NGBs … to almost all teams, leagues, camps, tournaments" — which means the 72,029 US martial arts studios (IBISWorld 2025, +7.4% YoY), the dance studios, the gymnastics gyms, the swim schools. Every adult in regular contact with a minor athlete is a "covered individual" and must complete prevention training, mandatory-reporter training, and (in most states) a background check. *"If you don't record the policy, procedure and compliance in writing, legally it never happened."*

**The lawsuit math finally caught up.** Pomona USD settled coach-abuse cases for **$25M** in September 2025. Ninnekah Public Schools paid **$7.5M**. NWSL settled with three state AGs for **$5M** in February 2025. Insurers in 2026 are pricing martial-arts and gymnastics general-liability premiums on whether the studio can produce a current SafeSport audit pack on demand — no pack, no policy.

**The studio-management stack does not handle this.** Mindbody, Gymdesk, ZenPlanner, MyStudio, Wellyx — the platforms ~80% of small studios actually run on — do scheduling, billing, and member access. None of them issue NCSI screening invites, track SafeSport-training expiry, store mandatory-reporter logs, or generate the insurer audit pack. Their compliance feature is an empty checkbox.

**Ankored validated the buyer.** Ankored raised a $4M seed from Rally Ventures in September 2025 to do exactly this — for *organized* youth leagues with a paid administrator. Their pricing and onboarding assume a full-time compliance officer. That ICP excludes the single-studio operator with one phone and a Google Sheet.

**AI inference dropped under the cost line.** A coach-onboarding agent that drafts the welcome email, sends the NCSI invite, parses the returned report, schedules the SafeSport course, and drafts the renewal nudge in 4 different tones now costs cents per coach per year on Claude Haiku or GPT-4o-mini. That's the unlock that makes a $79/month per-studio product viable.

Provenance:
  - Signal 1: USOPC + U.S. Center for SafeSport policy: all NGB background checks must run through NCSI, effective Jan 1 2026; non-compliance = decertification under EO 14201 — https://usrowing.org/news/policy-changes-for-2026 — 2026-01
  - Signal 2: Safe Sport Act applies to "almost all teams, leagues, camps, tournaments"; 72,029 US martial arts studios (+7.4% YoY) and 60M youth athletes covered — https://www.sadlersports.com/new-safe-sport-act-applies-amateur-sports-organizations/ + https://www.ibisworld.com/united-states/number-of-businesses/martial-arts-studios/4187/ — 2025
  - Signal 3: Coach-abuse settlements in 2025 — Pomona USD $25M, Ninnekah $7.5M, NWSL $5M; insurer pricing tied to documented compliance — https://www.lawsuit-information-center.com/youth-sports-sex-abuse-lawsuits.html — 2025
  - Signal 4: Ankored raised $4M seed (Rally Ventures, Sept 2025) for exactly this category — but built for organized leagues with admin staff, not single studios — https://www.globenewswire.com/news-release/2025/09/23/3154663/0/en/Ankored-Secures-Seed-Funding-to-Simplify-Safety-and-Compliance-in-Youth-Sports.html — 2025-09
  Category: Regulatory arbitrage

## 3. The opportunity

The Safe Sport Act covers the studio operator the same way it covers the NGB-affiliated club. The compliance burden is identical: every adult who touches a minor athlete needs an annual SafeSport prevention course, an NCSI-grade background check, written mandatory-reporter acknowledgment, and a documented one-on-one-interaction policy. The penalty for missing it is not a fine — it's a coach who can't legally be on the floor, an insurer who declines to renew, and a $5M–$25M lawsuit exposure if anything goes wrong.

The supply side has split into two categories that both miss this customer:

- **Studio management platforms** (Mindbody, Gymdesk, ZenPlanner, MyStudio, Wellyx, Glofox) handle scheduling and billing. They do not run NCSI invites, track SafeSport-training expiry, or generate audit packs. Compliance is a free-text "notes" field.
- **Compliance platforms** (Ankored, SportsEngine, Jersey Watch) target organized leagues with paid administrators. Ankored's pricing and onboarding model — case manager, custom configuration, multi-program rollouts — is wrong-shape for a single dojo with a head instructor and one phone. Jersey Watch ($45/mo) bundles compliance into a club-management product that a martial-arts studio doesn't need and won't switch billing onto.

CleatCheck slots into the gap. It does **only** compliance, sits alongside whatever studio software the operator already uses, and is priced and onboarded for one person to set up in 20 minutes.

**What it actually does:** Upload your roster CSV (or paste from Mindbody / Gymdesk / ZenPlanner). For every coach and front-desk staff member, the AI agent issues the NCSI screening invite, parses the returned report, drives them through SafeSport's annual training, captures mandatory-reporter sign-off, and stores everything in an inspector-shaped record. Every quarter the agent generates a single PDF — *"as of today, all 14 covered individuals at Apex Martial Arts are SafeSport-current; here are the certificates and screening dates"* — that goes straight to the insurance carrier or a parent who asks. When a screening is 30 days from expiry, the agent drafts the renewal email in the studio owner's voice and waits for a one-tap approval.

The 10× UX move is that the operator never opens a dashboard. Status arrives by SMS — *"3 coaches expire next month, tap to send renewal"* — and the audit pack arrives in their inbox quarterly without a request.

## 4. Target market

- **Primary customer:** Owner-operator of a single-location US youth-sports studio with 5–25 coaches/staff and 50–400 enrolled minors. Sweet spot is martial arts (~72K studios), gymnastics (~3,500 USAG-affiliated + thousands of non-affiliated), dance (50K+ studios per Dance/USA), and swim schools (4,000+ USSSA-affiliated). Annual revenue $200K–$2M. No dedicated administrator. Operator handles compliance personally between teaching classes.
- **Why they buy:** "My USAG renewal hit and they asked me to upload background-check certificates for every coach with a date in the last 24 months. Half my coaches let theirs lapse. I spent 11 hours on a Sunday chasing them on group text." Or: "My insurance broker asked for a SafeSport policy and current training records to renew my GL policy. I had nothing on paper." Or: "A parent asked if my coaches are background-checked. I said yes, but I can't actually prove it."
- **Rough TAM reasoning:** Conservatively address 100K small US youth-sports operators (martial arts + dance + gymnastics + swim + climbing + tumbling). At $79/mo blended ARPU = $94M annual TAM. Realistic 3-year capture of 0.5–1.5% = $470K–$1.4M ARR; 3% capture = $2.8M ARR. The expansion path (adjacent compliance modules, multi-location, insurance-broker channel) takes the ceiling well past $5M.
- **Why now for them:** Three forces converge in 2026. (1) NGB-affiliated members of these studios face the new January 2026 NCSI mandate and are getting explicit policy emails. (2) State-level legislation following Safe Sport is widening the "covered individual" definition each year. (3) Insurance carriers are now using "documented SafeSport compliance" as a condition of renewal — *if* the operator can produce the audit pack, premiums are flat or down; if they can't, premiums rise 10–25% or coverage drops.

## 5. Product sketch (MVP)

- **Roster ingestion** — paste a roster, upload a CSV, or paste-export from Mindbody, Gymdesk, ZenPlanner, MyStudio. Every coach gets a profile in 30 seconds.
- **NCSI invite agent** — for each coach, the agent issues an NCSI invite link (or the equivalent state-approved provider when the studio's NGB allows it), tracks completion, parses the returned report PDF, and flags adverse hits for the operator.
- **SafeSport training drip** — pushes the SafeSport Trained Core course on day 0 and the annual refresher on day 365, with SMS + email nudges and a one-tap "remind everyone overdue."
- **Mandatory-reporter acknowledgment capture** — captures e-signature on a state-correct mandatory-reporter policy, stores the signed PDF.
- **One-on-one interaction policy generator** — produces a Safe Sport Act-compliant written MAAPP-style policy customized to the studio's space and class structure (private-lesson rules, locker-room rules, electronic-comms rules).
- **Audit pack PDF** — one-click "SafeSport audit pack" generates a single PDF with current screening + training status, certificates, signed policies, and timestamps, ready for insurer or USAG/USA Cycling/USA Hockey membership renewals.
- **Expiry radar** — SMS to the owner at 60-, 30-, and 7-day windows: "3 coaches expire in 30 days. Tap Send to nudge."
- **Insurer one-pager** — quarterly auto-emailed compliance summary the operator can forward to their broker without editing.

## 6. AI angle — what's load-bearing

AI does three jobs that turn the product from "form-with-storage" into "compliance copilot":

1. **Voice-of-owner outbound.** The renewal nudge to a 19-year-old part-time gymnastics coach reads completely differently than the renewal nudge to a 55-year-old head sensei. The agent learns the operator's tone from the first 5 messages they sign off on, then drafts every subsequent nudge in that tone — the difference between 30% and 80% renewal-on-first-ask.

2. **Document parsing + risk classification.** NCSI returns a multi-page PDF with criminal records, sex-offender registry hits, motor-vehicle records, and SSN trace. The agent reads the report, classifies severity per NGB-published rubric ("clear," "review required," "ineligible per USAG policy 4.2.1"), and surfaces only the ones that need the operator's eyes. Today this is a 15-minute manual read per coach; AI does it in under 10 seconds with citations to the relevant policy section.

3. **Policy drafting.** The MAAPP-style one-on-one interaction policy must be tailored to the physical space and class structure of the studio (do you have private rooms, locker rooms, online lessons?). LLMs can ingest the U.S. Center for SafeSport's MAAPP template, ask the operator 8–10 yes/no questions, and produce a state-and-NGB-correct policy — which a lawyer would charge $500–$2,000 to draft.

Strip the AI out and the product is a forms-and-storage tool with no operator leverage. A studio owner won't pay $79/mo for a forms tool. They'll pay it for "the thing that does compliance for me."

## 7. Localization angle (if any)

This is a US-first play. The Safe Sport Act, the NCSI provider monopoly, the USOPC EO 14201 framework, and the NGB structure are all US-specific. State-level variation (mandatory-reporter laws, state-specific background-check rules in California, Florida, New York, Texas) is itself a moat — a national multi-studio chain needs the tool to keep policies current across states.

International expansion path is real but sequel-stage: UK Safeguarding for Sport (CPSU), Australia's Sport Integrity framework, and Canada's UCCMS each have analogous policy structures and similar small-studio gaps. Not v1.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Solo studio** (≤10 covered individuals): **$79/month**. Includes screening invites + training tracking + audit pack. NCSI screening cost (~$30–$80 per coach) is passed through, billed direct.
  - **Studio Pro** (11–25 covered individuals + multi-location prep): **$149/month**. Adds policy generator, insurer one-pager, and mandatory-reporter automation.
  - **Multi-studio franchise** (3+ locations): **$249–$499/month** depending on coach count. Adds multi-location dashboard, cross-location coach mobility tracking.
- **ACV:** Blended ~$1,200/year.
- **Path to $1M ARR:** ~830 paying studios × $1,200 = $1M. At 100K-studio TAM that's 0.83% — credible in 12–15 months with insurance-broker + NGB-state-association channels.
- **Path to $5M ARR:** ~3,500 studios with mix shift toward Studio Pro and franchise tiers. Requires 3.5% market penetration plus an insurance-broker-driven enterprise channel.
- **Expansion path:** (1) Adjacent compliance modules — concussion-protocol logging (state-mandated in all 50 states for youth athletes), CDC HEADS UP training acknowledgments, COPPA parent-consent flows for 13-and-unders. (2) Insurance-broker reseller channel — broker bundles CleatCheck with GL policy at a co-branded $49/mo, broker keeps the GL premium uplift. (3) NCSI rev-share — referral fee on every screening invoice the platform issues. (4) Franchise vertical — every Premier Martial Arts, ATA, Goju Karate franchisee at HQ-mandated price.

## 9. Go-to-market wedge — first 100 customers

1. **Insurance-broker channel.** Five US insurance brokers (K&K Insurance, Sadler Sports, Markel, USI, Philadelphia) underwrite the bulk of small-studio GL policies. Pitch: "Your renewal pipeline includes 3,000 martial-arts and gymnastics studios this quarter. Bundle CleatCheck at $49/mo co-branded; you keep the premium-uplift differential where the studio actually has a documented SafeSport program." One signed broker = 25–40 referred customers in 90 days.
2. **State trade-association partnerships.** USA Martial Arts Association, USA Gymnastics' state associations, Dance Masters of America, Dance Educators of America. Sponsor their annual conferences (~$8K/booth) and offer member discount. One conference × 250 attendees × 6% close = 15 customers per event.
3. **Cold outreach to recently-cited studios.** USA Gymnastics' public sanctions list and U.S. Center for SafeSport's centralized disciplinary database are both public. Studios with recent disciplinary findings or members appearing on the database are pre-qualified buyers — they have a board-ordered remediation plan and 90 days to implement it. Personalized outreach with a 5-minute Loom: "We saw the [date] finding. Here's how CleatCheck would have caught it." Expect 25%+ reply rate from a list of 200.
4. **Studio software complementor strategy.** Gymdesk, MyStudio, and ZenPlanner all openly publish "we don't do compliance — bring your own." Pitch a Zapier-based one-click integration that pulls coach roster from their app. Co-list in their integration directory, co-marketing email goes to their installed base. Free distribution to a warm list.
5. **Paid Facebook in martial-arts/gymnastics owner groups.** Specific groups — "Martial Arts Business Owners," "Gymnastics Gym Owners," "Dance Studio Owners United" — have 30K–80K members each. $2K test budget on a 60-second video ad ("January 1 just changed your insurance renewal — here's how to survive it") at $0.40 CPC for 5,000 click sessions, 2% trial-to-paid = 100 trials, 30 paid.

## 10. Build complexity — justification

**Low.** v1 is a standard web app + AI agent. Stack: Next.js + Supabase + a queueing layer (Inngest or BullMQ) + Claude/GPT for the agent loops + DocuSign or Boldsign for e-signature + Twilio for SMS. NCSI integration is the single non-trivial piece — it's a partner-API integration (not public REST) but every NCSI competitor uses an "invitation link + webhook callback" pattern that takes ~2 weeks to wire. SafeSport's training is a third-party redirect with completion-callback. PDF generation is a solved problem. A solo full-stack dev ships v1 in 8–10 weeks. A pair ships it in 6.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance facilitation tool. Not a screening provider, not legal counsel. Standard disclaimers apply. |
| Ethical — no harm / dark patterns | ✅ | Improves safeguarding for minor athletes. Net positive. |
| Market exists (evidence above) | ✅ | 100K+ small studios, $25M coach-abuse settlements, mandatory NCSI on Jan 1 2026, Ankored just raised $4M into the same space. |
| 1–5 person team can build this | ✅ | Solo dev in 8–10 weeks for v1; pair in 6. |
| Launchable with <$50K / ₹40L | ✅ | $5–10K to launch — mostly NCSI integration cost + initial paid Facebook tests. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire for any studio with a USAG/USA Cycling/USA Hockey-affiliated member or an upcoming GL insurance renewal. Daily exposure: every coach on the floor. |
| Demand evidence | 15 | 13/15 | Ankored $4M seed, Jersey Watch SafeSport feature, NCSI vendor monopoly all priced — competitor revenue is the strongest signal. -2 because most demand evidence is in the *organized league* segment; small-studio segment is inferred. |
| Build feasibility | 15 | 14/15 | Off-the-shelf APIs, no novel ML, no hardware. NCSI partner integration is the only friction. |
| Distribution clarity | 15 | 12/15 | Insurance-broker channel and trade-association channel are concrete and named. -3 because the broker partnership is uncertain until validated. |
| Revenue mechanics | 15 | 12/15 | $79/mo is in the wallet for a $200K–$2M studio. ACV math works. -3 because churn is a real risk if the studio leaves the affiliated NGB. |
| Time to first revenue | 10 | 8/10 | Pre-sold to 5–10 studios via cold outreach during build; first paid customer in week 10–12. |
| Defensibility | 10 | 4/10 | Workflow lock-in is real (audit-pack history is sticky), but moat is thin against Ankored if they go down-market and against Mindbody/Gymdesk if they bundle compliance. -6 because the pure 10/10 would require a regulatory or data moat we don't have. |
| **Total** | **100** | **81/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (NCSI partner integration, document parsing, agent design)

### Key assumptions to validate (3–5)

1. **Assumption:** NCSI will grant a partner-channel integration to a startup of ≤5 people. **How to test:** Direct outreach to NCSI's partner team in week 1; if they decline, a state-approved alternate provider (Verified Volunteers, Sterling, JDP) becomes plan B. Two weeks to confirm.
2. **Assumption:** Single-studio operators (martial arts, gymnastics) will pay $79/mo for a compliance-only tool that *isn't* their studio-management platform. **How to test:** 30 cold-outreach calls to studio owners with a Loom demo + $79/mo offer; need ≥15% verbal commit.
3. **Assumption:** Insurance brokers will co-market or bundle. **How to test:** 10 broker meetings in weeks 4–8; need ≥1 LOI before scaling.
4. **Assumption:** Audit-pack PDF is the buyer's actual job-to-be-done (not the screening itself). **How to test:** 10 customer-development interviews with operators who recently renewed GL or USAG/USA Cycling membership.
5. **Assumption:** Churn is < 4%/month. **How to test:** Cohort tracking from month 4 onward.

### Risk flags

1. **Platform dependency (NCSI):** NCSI is the USOPC's sole approved screening vendor for NGB checks. If NCSI declines a partnership and offers no public API, the product still works for non-NGB studios via alternate providers — but the "single source of truth across NGB and non-NGB" pitch weakens.
2. **Incumbent down-market move:** Ankored ($4M seed) could expand into single-studio with a price cut. Mindbody could ship a compliance bolt-on. Defense is speed-to-market and a simpler operator UX.
3. **Regulatory drift:** If states pass divergent youth-sports safeguarding laws, the policy generator must keep up. This becomes a content moat over time but is a maintenance burden in year one.
4. **Liability framing:** The product must be careful not to imply legal certification of compliance — the audit pack is "evidence," not "approval." Standard disclaimers handle this, but messaging discipline matters.

## 14. Structured verdict

```
Score:                  81/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       Solo or pair-of-two technical founders, ideally one with US youth-sports
                        operator background (former gym owner, ex-NGB compliance staff, or
                        ex-insurance-broker)
Time to revenue:        10–12 weeks from start to first paying studio
Capital to launch:      $5–10K ($3K NCSI integration + $2K first paid Facebook test +
                        $2K legal/policy review)
Top 3 assumptions to validate first:
  1. NCSI partner integration is achievable for a ≤5-person startup (or a state-approved
     alternate is acceptable to NGB-affiliated members) — direct outreach, week 1
  2. ≥15% verbal commit at $79/mo from 30 cold-outreach studio owners — week 2–3
  3. ≥1 broker LOI from 10 broker meetings — weeks 4–8
Kill criteria:
  - Abandon if NCSI declines partnership AND state-approved alternates can't cover
    studios affiliated with at least 5 large NGBs (USAG, USA Cycling, USA Hockey,
    USA Football, USA Swimming)
  - Abandon if <10% of 30 cold studio outreach calls show $79/mo verbal commit
  - Abandon if Ankored or Jersey Watch ships a single-studio SKU at <$60/mo before v1 launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Cold-call 30 single-location martial-arts and gymnastics studio owners (scrape Google Maps + USAG affiliated club list). Pitch the $79/mo CleatCheck value prop in a 5-minute Loom. Track verbal commit rate.
- **Day 3:** Email NCSI's partner team and three alternate state-approved screening vendors. Ask: "Can a SaaS product issue invite links and receive callback webhooks at scale?" Document answers.
- **Day 4:** Email five insurance brokers (Sadler Sports, K&K, Markel, Philadelphia, USI) with a one-page co-marketing pitch. Track meeting-acceptance rate.
- **Day 5:** Decision. **Go** if (a) ≥6 of 30 studios verbally commit at $79/mo AND (b) NCSI replies with a viable partner path OR a state-approved alternate confirms API access AND (c) ≥1 broker accepts a follow-up meeting. **No-go** if any of the three fails.
