---
title: OwnPanel — Credentialing AI for therapists leaving Headway
slug: ownpanel-therapist-credentialing
date: 2026-05-05
category: HealthTech SaaS / US Solo & Micro Mental-Health Practices
complexity: Medium
score: 79
verdict: GO
confidence: Medium
oneLiner: Credentials US therapists on their own insurance panels in 90 days and files every claim — flat $299/mo.
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [AI-agent, Voice-first, Solo-builder, SMB, Compliance-driven]
axes:
  problem: 17
  demand: 13
  build: 9
  distribution: 13
  revenue: 11
  time: 9
  defensibility: 7
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# OwnPanel — Credentialing AI for therapists leaving Headway

## 1. One-liner

Credentials US therapists on their own insurance panels in 90 days and files every claim — flat $299/mo, no Headway lock-in.

## 2. Trend signal — why now?

The therapist–platform compact broke in 2025. From Jan 1, 2025, **Headway and Alma cut therapist payouts on UnitedHealth-Optum sessions by up to 30%** — drops from $144 to $103 per 45-minute session, with reported income hits of $6K–$28K per therapist per year ([ClearHealthCosts, Nov 2025](https://clearhealthcosts.com/blog/2024/11/2-digital-mental-health-platforms-cut-pay-rates-for-therapists-with-unitedhealths-optum-stirring-anger/)). A second wave of disenchantment hit in late 2025 when therapists realized **claims were submitted under the platform's group NPI, not theirs** — meaning they don't own the payer relationship and can't take it with them when they leave ([zynnyme, 2025](https://www.zynnyme.com/blog/are-third-party-credentialing-platforms-a-lifeline-or-a-trap-a-deeper-look-at-the-ethics-and-sustainability-of-alma-headway-and-grow-therapy)).

But going independent is brutal: solo therapists need NPI Type 1 + EIN + CAQH profile + 5–8 separate payer applications, each with 60–120 day approval cycles ([pie Health, 2026](https://www.piehealthusa.com/insurance-credentialing-timelines-in-2026-what-practices-should-expect/)). Most common delay: incomplete CAQH that cascades across every application. Credentialing services charge $150–500 per panel ($1,500–$3,500 to launch), then percentage billers eat 7–10% of net collections forever (~$15K–20K/yr on a $200K-revenue solo practice).

Layer in 2026 tech-unlock: voice-AI agents that hold on payer phone trees (SuperDial, $15M Series A, automating exactly this pattern in adjacent verticals); AI form fillers that can pre-populate CAQH from a license PDF; clearinghouse APIs (Claim.MD, Office Ally, Trizetto) cheap and accessible to solo dev teams. The same tooling that powers Toothy.ai and Arini for dentists hasn't been pointed at the therapist exodus yet.

> Provenance:
>   - Signal 1 (demand): Therapist platform pay cuts driving exodus; ClearHealthCosts reports income losses of $6K–$28K/yr — [ClearHealthCosts, 2024-11 + 2025-11 follow-up](https://clearhealthcosts.com/blog/2025/11/therapists-have-misgivings-on-the-platforms-alma-headway-etc-and-the-business-of-therapy/) — observed 2026-05-05
>   - Signal 2 (feasibility): Voice-AI agents for payer-hold automation now mainstream; SuperDial $15M Series A specifically for "automating insurance calls" — [Fierce Healthcare, 2025](https://www.fiercehealthcare.com/ai-and-machine-learning/voice-ai-company-superdial-picks-15m-series-automate-insurance-calls) — observed 2026-05-05
>   - Signal 3 (economic): Heard.com proved therapists pay $199/mo for vertical SaaS (4.2 Trustpilot, 60+ hrs/yr saved); credentialing services charging $150–500/panel × 5–8 panels = $1.5K–4K per therapist already moving as cash today — [Heard pricing](https://www.joinheard.com/pricing) + [Medibill RCM, 2026](https://www.medibillrcm.com/blog/best-credentialing-services-mental-health-providers-usa/) — observed 2026-05-05
>   - Category: **Workflow automation** (with strong Platform-shift undertone — the Headway exodus is the wedge)

## 3. The opportunity

Headway, Alma, Grow Therapy, and Rula built billion-dollar valuations by being the path of least resistance — they handle credentialing, billing, and intake in exchange for ~25% margin and full ownership of the payer contract. That trade was tolerable while reimbursement was healthy. Once the platforms cut pay, the trade collapsed. There is now a clear, motivated cohort of therapists who want to **(a) leave the platform, (b) keep being in-network on the same payers, and (c) not learn medical billing.**

The incumbents who serve that cohort today are split:

- **Old-school credentialing services** (PayerReady, MediBill RCM, Sirius Solutions): human specialists, $150–500/panel, 60–90 day promises, no claims component.
- **Outsourced billing companies**: 7–10% of net collections, no credentialing, no AI.
- **Practice mgmt EHRs** (SimplePractice, TheraNest, TherapyNotes): help you *file* claims if you already have contracts; do not get you contracts.
- **Heard.com**: bookkeeping/tax-only; explicit limitation that they don't do billing or credentialing.

Nobody bundles "we'll get you in-network on your own NPI in 90 days, then run your claims, denials, and re-credentialing forever" into a flat-fee subscription, AI-native. That's the gap. The Headway exodus is the demand wave; AI form-filling + voice agents + clearinghouse APIs are the supply unlock.

## 4. Target market

- **Primary customer:** Solo + 2-to-5-person mental-health private practices in the US — LCSW, LMFT, LPC, LPCC, PsyD/PhD psychologists. Particularly the cohort with 1–4 years of post-license experience, currently on at least one of Headway/Alma/Grow/Rula, billing $80K–$250K/yr.
- **Why they buy:** "I'm losing $10K–$25K/yr to platform fees and pay cuts, but I don't want to spend my Saturdays on hold with Aetna." Direct quote pattern from forums. They want their own panels, on their own NPI, without doing the work.
- **Rough TAM reasoning:** ~199K licensed therapists + ~81K psychologists = ~280K licensed mental-health clinicians ([Integrative Psychology Institute, 2025](https://www.integrativepsychology.org/us-mental-health-workforce-stats)). Conservatively, ~40% are in private/independent practice (vs hospitals, schools, agencies) → ~110K. Of those, current platform users + open to leaving = est. 30–50K addressable. At $299/mo × $200/mo blended (some on lighter "billing-only" tier) = $80M–$120M ARR ceiling for the niche. More than enough room for a $5M ARR business.
- **Why now for them:** Optum cuts hit Jan 2025; Cigna's downcoding rule (Jan 2026) is the next chapter; ACA marketplace plans tightening therapy reimbursement. Renewal season conversations are happening on r/therapists right now.

## 5. Product sketch (MVP)

- **One-tap CAQH builder**: therapist uploads license + diploma + DEA + malpractice cert; AI fills the 200-field CAQH ProView form, flags missing items, handles re-attestation every 120 days.
- **Panel selector**: pick 5–8 commercial payers from a curated list (Aetna, BCBS state plans, Cigna, UHC, Optum, Humana, regional plans). System auto-applies on therapist's own NPI/EIN.
- **Voice-agent payer follow-ups**: AI calls payer credentialing lines, navigates IVR trees, asks for status, reports back. Logs every call.
- **Clearinghouse-connected claims engine**: once paneled, every session note → 837P claim → ERA reconciliation. Auto-generated superbills for out-of-network sessions.
- **AI denial copilot**: parses 835/277 denial codes, drafts appeal letters with payer-specific argumentation, queues for therapist 1-click sign-off.
- **Pre-flight eligibility check**: before each new client's first session, voice-AI verifies eligibility, copay, deductible, and authorization requirement.
- **Migration runway**: 30–60 day co-existence period — therapist keeps Headway active while OwnPanel works on independent panels.
- **Light EHR-bridge**: SimplePractice and TherapyNotes integrations for note→claim handoff (we are NOT building an EHR).

## 6. AI angle — what's load-bearing

Three places AI is doing real work, not decoration:

1. **CAQH + payer-app form fill**: pulling fields from license PDFs, NPPES lookups, malpractice certs, and prior CAQH exports — populating ~80% of a typical 200-field application without the therapist re-typing. Validates inconsistencies (e.g. address on license vs CAQH vs W-9) that are the #1 cause of cascading delays.
2. **Voice-agent for payer phone trees**: status calls to credentialing lines, eligibility checks, claim-status inquiries. Each saves 15–45 min on hold. Therapist + ops team simply can't spend 4 hrs/wk on payer phones; AI must do this or the unit economics break.
3. **Denial appeal drafting**: 835/277 denial code → payer-specific argument template → context-aware letter referencing CPT, plan, and prior auth. Up to 60% of denied claims never get re-submitted ([elitemedfinancials, 2026](https://elitemedfinancials.com/mental-health-billing-small-group-practices/)) — AI draft + 1-click sign collapses that gap.

Strip the AI and this is just an old-school billing+credentialing service charging % of collections like 50 others. The AI is what makes flat-fee $299/mo work without burning ops margin.

## 7. Localization angle (if any)

N/A — this is a US-only play and that's deliberate. The wedge is the Headway/Alma/Grow/Rula exodus; those platforms are US-only. Payer ecosystem (Aetna/BCBS/Cigna/UHC/Optum) is US-specific. Don't dilute the focus by trying to support UK/Canada/AU on day one — they have completely different payer structures and the market doesn't have the same exodus narrative.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **OwnPanel Setup**: $299/mo (includes credentialing on up to 8 payers + ongoing re-attestation).
  - **OwnPanel Pro**: $499/mo (adds full claims billing, eligibility checks, denial appeals).
  - **Add-on**: $99/mo per additional clinician for group practices.
- **ACV:** $4,800 blended (mix of Setup + Pro tiers, modest expansion).
- **Rough math to $1M ARR:** ~210 paying customers at $400/mo blended × 12 mo = $1.0M.
- **Rough math to $5M ARR:** ~1,050 customers at the same ACV. There are ~110K independent therapists in the US private-practice pool, so this is <1% market penetration. Achievable.
- **Expansion path:** (a) start solo therapist on Setup, upsell to Pro after 90 days when first claims start flowing; (b) practice grows from 1→3 clinicians → +$200/mo per seat; (c) cross-sell EAP/Medicaid panels (more complex, $99 per panel one-off); (d) Heard-style adjacency: tax/payroll partnership rev-share.

## 9. Go-to-market wedge — first 100 customers

Concrete, named, measurable. The Headway exodus narrative *is* the marketing.

1. **Seed via "Optum cut" content + r/therapists**: long-form posts on Substack/LinkedIn breaking down the math of leaving Headway (e.g. "Here's exactly how much you lose at $103 per session"). Cross-post to r/therapists (~150K subs), r/psychotherapy (~95K subs), r/socialwork. Target: 30 inbound waitlist signups in 4 weeks.
2. **Therapist-influencer partnerships**: 5–10 paid partnerships ($500–$2K/mo) with therapists already producing content about leaving platforms — Stress Less Therapist, ZynnyMe, The Bad Therapist, Practice of the Practice. They already have skeptical audiences. Conversion math: 2 closes per influencer per month × 6 active = 12 customers/mo by month 4.
3. **Cold DM the platform-leavers**: scrape Psychology Today + LinkedIn for "private practice" therapists; cross-reference with Headway/Alma's directory pages; cold-email "hey, saw you're on Headway — did the Optum cut hit you? we'd get you on your own panels in 90 days, no more 25% platform cut." Realistic: 3% reply rate × 1% close on 2,000 sends = 6 customers per batch.
4. **Practice consultants / coach affiliates**: ZynnyMe, Practice of the Practice, AbundancePracticeBuilding all sell coaching to therapists building independent practices. Affiliate fee 20% of first-year subscription.
5. **AAMFT/NASW/ACA conference circuit**: 2 booth appearances ($3K–$6K each) — these are the trade orgs whose members are the exact customer. Realistic: 50 demos → 10 closes per conference.

If 30 + 12×6 + 18 + (10×2) ≠ ~140 customers in 8 months, kill criteria triggers.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: clearinghouse integration (Claim.MD, Office Ally, or Change Healthcare APIs are documented and fast); voice-AI stack (Bland, Vapi, Retell — pick one); LLM form-fill (Claude/GPT + custom validators); CAQH ProView is unfortunately scrapeable but no public API — build a robust selenium-style automation. Custom: payer-specific denial logic (200+ payer×plan combinations to learn over time), the ops workflow that picks up when AI hits a dead end. Realistic v1 in 4–5 months for a small team — 1 full-stack eng + 1 founder + 1 ops/credentialing specialist (this is the domain-expertise-required part — you NEED someone who has credentialed therapists before).

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Operating as MSO/admin services org is a well-trodden model; therapist remains the legal provider. State-specific MSO rules in CA/NY warrant review. |
| Ethical — no harm / dark patterns | ✅ | Therapists owning their own panels is unambiguously better for them and their clients (continuity, no surprise out-of-network fees). |
| Market exists | ✅ | Three+ independent demand signals; existing competitors charging real money today. |
| 1–5 person team can build this | ✅ | Medium build; 1 eng + 1 ops + 1 founder is the right shape. |
| Launchable with <$50K | ✅ | ~$15K AI APIs + $5K clearinghouse setup + $20K founder runway month 1–4 + $5K legal/state filings. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire for the cohort that just got Optum-cut. Therapists are publicly contemplating leaving practice; income hit of $6K–$28K/yr is felt every two weeks. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: ClearHealthCosts coverage, ZynnyMe ethics piece, Reddit threads on r/therapists, Heard.com $199/mo proves vertical-SaaS willingness-to-pay, PayerReady already charging for the human version. |
| Build feasibility | 15 | 9/15 | Medium build. CAQH automation is finicky (no public API), payer-by-payer denial logic accumulates over time. 4–5 months realistic for 1 eng + 1 ops + 1 founder. Voice-AI and clearinghouse pieces are off-the-shelf. |
| Distribution clarity | 15 | 13/15 | Named subreddits, named influencers, named conferences, scrapeable Psych Today directory. The exodus narrative is the wedge — 2026 is the moment. |
| Revenue mechanics | 15 | 11/15 | $299–$499/mo is in the comfort zone for therapists already paying Heard $199 + SimplePractice $99. ACV math closes at <1% penetration of the niche. Risk: churn after credentialing complete (must keep them on Pro for billing). |
| Time to first revenue | 10 | 9/10 | Pre-sell credentialing as a service from day one — collect $299 setup deposit before software is fully built. Revenue in week 2–4. |
| Defensibility | 10 | 7/10 | Soft moat: payer-by-payer denial intelligence compounds; ops playbook hard to copy fast; brand authority in "the anti-Headway" niche. Not patent-grade, but sufficient for $5M ARR. |
| **Total** | **100** | **79/100** | **GO** |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (CAQH automation, voice-AI orchestration, clearinghouse integration) · `domain-expertise-required` (must have or recruit a credentialing specialist who has done this for therapists — there are nuances per payer, per state, per license type that no LLM gets right out of the box).

### Key assumptions to validate (3–5)

1. **Assumption:** Therapists will actually pay flat $299–$499/mo over a 7–10% billing percentage, even if math is similar. **How to test:** Pre-sell to 30 therapists at the seed price; offer A/B between flat-fee and percentage and measure preference + close rate.
2. **Assumption:** AI + ops can actually credential a therapist on 5–8 panels in <90 days at gross margin >50%. **How to test:** Run 10 manual credentialings end-to-end with an experienced specialist; time-track every step; identify the 3 steps that consume 60% of the time and confirm AI/voice-agent tooling actually compresses them.
3. **Assumption:** The cohort actively looking to leave Headway/Alma is large enough to seed first 100 customers via cold + content alone (no paid ads). **How to test:** Single cold-email batch of 500 to scraped Psych Today + Headway directory therapists; reply rate >2%, demo-book rate >0.5%, signup intent >0.2%.
4. **Assumption:** Payers will credential a therapist with our help just as fast as without — i.e. we're not creating new friction. **How to test:** First 5 customers, track approval-time delta vs published payer SLA. If it's slower, our process is the bottleneck.
5. **Assumption:** Voice-AI agents calling payer credentialing lines won't get blacklisted. **How to test:** Run 50 calls in month 1; track payer pushback. Have a documented fallback to human callers.

### Risk flags

1. **Platform retaliation risk:** Headway/Alma could change terms-of-service to prevent therapists keeping client lists when they leave, or aggressively tighten non-compete language. Doesn't kill the business but could slow customer migration.
2. **Payer policy risk:** Aetna/UHC could restrict credentialing of solo providers in some states (already happening in some Medicaid lanes). Forces tier focus on commercial-only.
3. **CAQH automation fragility:** No public API; if CAQH ships an anti-bot update, automation breaks for weeks. Mitigation: maintain human-fallback ops capacity for at least year one.
4. **Cigna downcoding rule + similar:** Industry-wide reimbursement compression could shrink the addressable wallet by 10–20% over 24 months. Doesn't kill the wedge but compresses pricing power.

## 14. Structured verdict

```
Score:                  79/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a credentialing specialist (LCSW/LMFT background ideal but not required)
Time to revenue:        4–6 weeks (pre-sell credentialing as a service, software ships behind)
Capital to launch:      $40K–$50K ($15K AI, $5K clearinghouse, $20K runway, $5K legal/state)
Top 3 assumptions to validate first:
  1. Therapists prefer flat $299/mo over 7–10% percentage — A/B in pre-sell to 30 leads
  2. End-to-end credentialing in <90 days at >50% gross margin — manual baseline of 10 customers
  3. Cold + content alone fills first-100 funnel — single 500-email batch with >2% reply rate
Kill criteria:
  - Abandon if pre-sell lands <10 paid signups from 500-prospect cold batch (insufficient demand)
  - Abandon if month-2 cohort has any single credentialing exceeding 150 days (broken thesis on speed)
  - Abandon if Headway/Alma respond by dropping platform fees from 25% to <15% (margin gap closes; exodus stalls)
  - Abandon if payer phone lines actively block voice-AI agents in 3+ payers within 6 months (unit economics break)
```

## 15. Next step — 1-week validation sprint

Falsifiable test before committing build:

- **Day 1–2:** Scrape 1,000 therapists from Psychology Today directory who list "in-network with Aetna/Cigna/UHC" and have a Headway or Alma profile. Build a list. Draft a single, sharp cold email: "We get you off Headway and onto your own Aetna/UHC/Cigna contracts in 90 days, $299/mo flat. Reply if you'd take a 15-min call."
- **Day 3:** Send 500 emails. Schedule any inbound calls.
- **Day 4–5:** Run 10–15 discovery calls. Pitch flat-fee credentialing-only at $299/mo, $99 deposit to hold spot in first cohort. Capture deposits via Stripe.
- **Day 6–7:** Total $99 deposits collected. **Decision: ≥$1,500 in deposits (15+ paying signal-customers) = GO; $500–$1,500 = VALIDATE further with a second batch and content seeding; <$500 = PASS, the exodus narrative isn't strong enough to overcome inertia.**
