---
title: SiteLine — AI voice receptionist for independent US RV parks
slug: siteline-rv-park-voice
date: 2026-05-13
category: HomeServices SaaS / US Independent RV Parks & Campgrounds (30–200 sites, 1–3 properties)
complexity: Medium
score: 80
verdict: STRONG GO
confidence: High
oneLiner: AI phone agent that answers every RV-park call, checks live availability, and books the site mid-call.
tags:
  vertical: HomeServices
  model: SaaS
  geography: US
  secondary: [Voice-first, AI-agent, SMB, Hospitality, RV, Campground, Phone-automation, Solo-builder]
axes:
  problem: 18
  demand: 13
  build: 12
  distribution: 13
  revenue: 12
  time: 8
  defensibility: 7
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# SiteLine — AI voice receptionist for independent US RV parks

## 1. One-liner

AI phone agent that answers every RV-park call, checks live availability, and books the site mid-call.

## 2. Trend signal — why now?

Three forces converged in the last 12 months.

**(a) Voice-agent unit economics collapsed.** Retell AI publishes a flat **$0.07/min** voice agent rate. Synthflow lists **$0.08/min** bundled. Vapi headline **$0.05/min** (with stacked fees). A 4-minute campground call now costs $0.28–$0.40 in inference — under a tenth of a human answering service.

**(b) Mom-and-pop campgrounds are getting crushed by missed calls.** ALM Corp's 2026 SMB study cites **62% of calls to small businesses go unanswered, 85% of those callers never try again**, and the average SMB loses **~$126K/yr** to missed calls. RV parks are the textbook case: the owner is mowing site 14, the office phone rings, voicemail picks up, the caller is in a Class A on I-40 looking for tonight — they call the next pin on the map.

**(c) PE consolidation of campground PMS is pushing owners to bolt-ons.** Storable owns Newbook. Campspot is venture-backed (per PitchBook profile). 127 parks were rolled up by PE in 2023 alone; the Blue Metric $97M seven-park deal closed in 2025. Independent operators (78% of the ~15,000 US parks) are watching incumbent PMS prices creep and looking for cheaper plug-ins, not a $7,500-setup-fee API rebuild.

Forum sentiment matches:
- *"by the time we get around to some of them the people have made their reservations elsewhere"* — campground owner, RV LIFE forum, on manual reservation entry from website forms
- *"performs like software did in 1997 (very cumbersome and not intuitive)"* — captainehh, MobileHomeUniversity forum, on a legacy PMS
- *"incredibly un-user friendly and lacking in certain features"* — Suburban, MobileHomeUniversity forum, on Campspot

Provenance:
  - Signal 1 (demand): 62% of SMB calls unanswered, $126K/yr lost per SMB — https://almcorp.com/blog/best-ai-receptionist-products-2026/ — 2026-05-13
  - Signal 2 (feasibility): Retell $0.07/min, Synthflow $0.08/min, Vapi $0.05/min flat — https://www.retellai.com/blog/ai-voice-agent-pricing-full-cost-breakdown-platform-comparison-roi-analysis — 2026-05-13
  - Signal 3 (economic): PE rolling up campgrounds, Blue Metric $97M deal, Storable owns Newbook — https://ohweekly.substack.com/p/blue-metric-groups-97m-rv-portfolio + https://www.newbook.cloud/our-platform/channel-manager/ — 2026-05-13
  Category: Underserved niche × Tech-unlock

## 3. The opportunity

Campground PMS players (Campspot, Newbook, RoverPass, CampLife, Firefly, Bonfire) are racing to add AI receptionist features as part of a full-PMS replacement. That is the wrong shape for the 12,000 independent parks already locked into a PMS, paper books, or Google Calendar. None of them want a rip-and-replace migration in shoulder season.

The wedge is **bolt-on voice, not bolt-on PMS**. SiteLine plugs into whatever the park already runs — Campspot, Newbook, RoverPass, Firefly, even Google Sheets / iCal / paper-and-confirm-back — and answers the phone with a campground-fluent agent that:
- knows the difference between a 30-amp back-in and a 50-amp big-rig pull-through,
- can quote *this park's* rates including weekly/monthly/seasonal,
- takes the deposit via SMS link mid-call (Stripe / Square),
- writes the reservation back to the PMS or holds it for owner confirmation if no API.

Generic AI receptionists (Rosie $49+, Goodcall $79+, RingConnect, NextPhone, Allo) are field-services-flavored. They will book a plumber. They do not know what "sani-dump" means. A vertical-tuned product wins on *every metric the owner cares about* — call resolution rate, mis-quote rate, abandonment rate.

## 4. Target market

- **Primary customer:** Owner-operator of an independent US RV park or campground, 30–200 sites, 1–3 properties. Often a retiree couple or a second-career operator. Already on a PMS but bleeding calls, OR off-PMS and bleeding both.
- **Why they buy:** "The phone rings while I'm mowing. By the time I'm back to the office, they've called Jellystone." Real, daily, *measurable* lost revenue. Average campground nightly rate ~$45–$80. A single saved call/week = $2K+/year in incremental revenue, well past the SaaS line.
- **Rough TAM reasoning:** ~15,000 US RV parks + campgrounds. ~78% independent = ~11,700. Strip out the bottom quartile (too small / paper-only and never coming online) and the corporate top — addressable ~8,000–9,000 parks. Adjacent: glamping (~3,000 in US), youth/church camps (~5,000), state-park concessionaires.
- **Why now for them:** Camping demand softened in 2025 (Hipcamp: "uneven, families more careful with budgets"). Owners feel every lost site. Meanwhile their PMS price is creeping post-PE-acquisition. They want a cheap, high-ROI lever they can flip *this season*.

## 5. Product sketch (MVP)

- Local US phone number (or port the park's existing 800/local) that AI answers 24/7 in seconds
- Campground-fluent voice persona: full-hookup, back-in, pull-through, big-rig, 30/50-amp, sani-dump, holding tank, weekly/monthly rate
- Live availability check against Campspot / Newbook / RoverPass API where available, iCal/Google Calendar fallback elsewhere, "human will confirm by SMS" fallback for paper books
- Mid-call SMS deposit link (Stripe/Square), confirmation back to caller before hang-up
- Park-specific FAQ memory: pet policy, age of allowed rigs, generator quiet hours, propane availability, nearest dump station — owner trains it once in a 20-minute setup
- Email + SMS digest to owner each morning: "8 calls answered, 5 booked ($1,840), 2 needed callback, 1 directed to voicemail" with transcripts
- Park-branded greeting and on-hold voice in the owner's actual recorded voice (ElevenLabs clone, ~3 min sample)
- Spanish handoff for ESL callers (huge in TX/CA/FL/AZ snowbird traffic)

## 6. AI angle — what's load-bearing

Without AI this product is impossible. The whole point is a sub-1.5s-latency, multi-turn voice agent that:

1. **Transcribes campground-noisy calls** (callers on cell in moving rigs, road wind, kids in background) — Whisper-class STT.
2. **Reasons over campground vocabulary, the park's specific rate sheet, this week's site availability, and policy edge cases** ("can we bring our 45-foot toy hauler?") — LLM with retrieval over the park's loaded config.
3. **Drives a structured booking action mid-call** — function-calling into the PMS API or the iCal fallback.

Strip the AI and you have a phone tree — i.e. exactly what the owner has now, the one that loses 62% of calls. The AI *is* the product.

## 7. Localization angle (if any)

US-first, English + Spanish. The Spanish wedge alone is meaningful — south-Texas, Florida, Arizona, and California snowbird traffic includes a non-trivial Hispanic share, and *zero* current campground PMS voice systems handle Spanish well. After v1, Canadian English + French Canadian opens ~3,000 Canadian parks. UK caravan/holiday parks, AU/NZ holiday parks are eventual adjacencies — different vocabulary ("touring pitch", "powered site"), same architecture.

## 8. Business model — path to $1M–$5M ARR

- **Pricing tiers:**
  - **Starter $99/mo** — up to 200 answered calls/mo, 1 park, iCal/manual confirm only
  - **Pro $199/mo** — up to 600 answered calls/mo, PMS integration (Campspot/Newbook/RoverPass/Firefly), Spanish, owner-voice clone
  - **Multi-park $349–$549/mo** — 2–3 properties, central dashboard, fleet of numbers
  - **Overage:** $0.20 per call beyond plan cap (still 50%+ gross margin at Retell's $0.07/min)
- **ACV:** Blended ~$1,800/yr (most parks land on Pro)
- **Path to $1M ARR:** **555 parks × $149/mo blended × 12** = $1.0M. ~5% of addressable ~11,700 independents.
- **Path to $5M ARR:** **~2,300 parks** + multi-park upgrades + glamping/youth-camp adjacency. Requires moving past direct-to-owner into channel partnerships (Newbook resell, state campground associations).
- **Expansion path:** SMS marketing reactivation (texting past callers who didn't book), upsell premium voices, post-stay review-collection calls, lost-reservation reactivation, eventually outbound winter snowbird booking calls.

## 9. Go-to-market wedge — first 100 customers

1. **OHCE 2026 in Fort Worth, Nov 9–11** — $129 expo pass. ~3,000 attendees, almost all of them buyer-owners. A 10x10 booth with a live demo phone ("call this number, try to break it") closes 30–50 if the product works. Pre-conference: cold-email the published exhibitor list.
2. **State campground associations** (TXCOA, FloridaARVC, CalARVC, GeorgiaCOA, etc.) — 35+ in the US. Pay $1K–$3K to sponsor a webinar to their member list. Each list is 100–800 owners. Conversion math: 1% paid trial = 1–8 customers per webinar. Run 8 in the first 6 months.
3. **Modern Campground + Woodall's Campground Magazine** — both publish weekly e-newsletters to ~25K outdoor-hospitality decision-makers. Sponsor + content collaboration ($1K–$2K/issue).
4. **Cold outbound to Campspot/Newbook complaint posters** — scrape Capterra, G2, Software Advice reviews of the major PMS players (Campspot 200+ reviews, Newbook 100+). DM/email the named reviewers who complained about service/pricing, offer 30-day free trial.
5. **PMS partnership** — Firefly, Bonfire, CampLife are too small to build their own voice product. Co-sell deal: SiteLine pays 20% revshare for referrals. Aligns incentives — PMS doesn't lose seats, gains a sticky bolt-on.

Demo strategy: ship a public "call this number to try the demo" with a fake "Pine Ridge Campground" persona. Lets prospects feel it before any sales conversation.

## 10. Build complexity — justification

Medium. Off-the-shelf stack: Retell or Vapi for voice (won't build the speech layer), Twilio for telephony, Stripe/Square for deposits, OpenAI/Claude for reasoning, ElevenLabs for owner-voice clones. Custom work: (a) campground vocabulary/rate-sheet ingestion + RAG, (b) per-PMS connectors (Campspot, Newbook, RoverPass, Firefly — each ~1–2 weeks), (c) owner dashboard + transcript review, (d) iCal/Google Cal fallback path. Pair of builders, v1 in ~12 weeks, polished GA in ~16. The connectors are where the calendar blows — accept it.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Standard AI voice disclosure ("calls may be recorded for service") + state TCPA-equivalents handled. |
| Ethical — no harm / dark patterns | ✅ | Agent identifies as AI on first turn; opt-out to human callback always offered. |
| Market exists (evidence above) | ✅ | $126K/yr/SMB lost-call cost + 11,700 independent US parks + forum quotes confirm. |
| 1–5 person team can build this | ✅ | 2 engineers, 12–16 weeks to GA on off-the-shelf voice stack. |
| Launchable with <$50K / ₹40L | ✅ | ~$15K for v1: voice agent credits, Twilio numbers, a few PMS sandbox subs, basic landing site. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Daily, measurable revenue loss. Owners can quote the exact number of calls they missed last weekend. |
| Demand evidence | 15 | 13/15 | Multiple PMS competitors, generic AI receptionists with paid traction, public lost-call stats, forum complaints. Missing one strong signal: a direct "I'd pay for this" quote from a campground owner specifically. Validate in week 1. |
| Build feasibility | 15 | 12/15 | Off-the-shelf voice stack handles 80%. The 20% — PMS connectors and per-park config — is real engineering. |
| Distribution clarity | 15 | 13/15 | OHCE + state associations + Modern Campground media + cold outbound to PMS complainers is a named, costed playbook. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked vs Rosie/Goodcall + below human answering services. ACV/customer-count math credible. Risk: usage overage caps eat margin if a viral park gets 2K calls/mo. |
| Time to first revenue | 10 | 8/10 | 6–8 weeks to first paying park if you pre-sell at a state association webinar pre-launch. Without that, 10–12 weeks. |
| Defensibility | 10 | 7/10 | Workflow lock-in (owner trains voice + FAQ once, painful to redo), PMS integration depth, campground-vocabulary brand. Not a fortress; a focused 6–12 month head start. |
| **Total** | **100** | **80/100** | STRONG GO. |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (voice agents + PMS connectors), `domain-expertise-required` (must speak campground; ideally a co-founder who has owned or worked at a park, or a 2-month immersion). A non-domain founder can still ship this but must front-load 30+ owner interviews before line one of code.

### Key assumptions to validate (3–5)

1. **Assumption:** Owners will pay $149–$199/mo for a bolt-on (vs replacing PMS). **How to test:** 30 owner phone interviews, ask the exact price with a credit-card-pre-auth ask at end. Looking for ≥10 willing to put $1 hold to reserve.
2. **Assumption:** Voice agent quotes correct rates and reads PMS availability accurately ≥95% of the time on real campground calls. **How to test:** Wizard-of-Oz at 3 friendly pilot parks for 2 weeks; transcript-audit every call.
3. **Assumption:** Campspot/Newbook/RoverPass/Firefly will let a bolt-on read availability without an enterprise contract (Campspot's published API is $7.5K setup — pricing here matters). **How to test:** Direct outreach to each PMS BD team. Identify minimum 2 viable PMS paths + iCal fallback before commit.
4. **Assumption:** Owner-trust hurdle is crossable — i.e. owners are willing to let "AI book a campsite" without their human review. **How to test:** A/B "auto-book" vs "AI proposes, SMS owner to confirm" in the first 10 pilots. If only the SMS-confirm path lands, that's still a viable product, just a thinner one.

### Risk flags

1. **Platform dependency on voice agent vendor.** Retell/Vapi/Synthflow could change pricing or terms. *Mitigation:* design the orchestration layer to be voice-vendor-agnostic, run pilot on Retell + parallel test on Vapi.
2. **Storable / Campspot launches a competing in-PMS AI receptionist.** Likely within 12–18 months. *Mitigation:* (a) get to 200+ parks fast on bolt-on speed, (b) be cross-PMS, which neither incumbent will ever be, (c) explore reseller deal with Firefly/Bonfire/CampLife (smaller PMS players who can't build their own).
3. **Seasonality risk on usage.** Northern parks are dead Nov–Mar. Plans must accommodate seasonal pause/resume, or churn will be brutal in winter.
4. **TCPA / call-recording compliance.** Multi-state recording rules differ. *Mitigation:* default to two-party-consent disclosure in greeting.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       Technical co-founder + a co-founder/advisor who owned or
                        worked at an RV park; alternative is a solo technical
                        founder who lives in the parks for 60 days pre-build
Time to revenue:        6–12 weeks (faster if pre-sold at a state-association webinar)
Capital to launch:      ₹12L / $15K
Top 3 assumptions to validate first:
  1. Owner willingness-to-pay $149–$199/mo (30 interviews + soft pre-auth)
  2. Voice agent rate/availability accuracy ≥95% on real calls (3-park WoZ pilot)
  3. PMS read-access viability (BD calls with Campspot/Newbook/RoverPass/Firefly)
Kill criteria:
  - Abandon if <8 of 30 owner interviews show $149+/mo willingness
  - Abandon if voice accuracy <90% after 2 weeks of pilot tuning
  - Abandon if Storable ships a free in-Newbook AI receptionist before MVP
  - Abandon if no PMS partner agrees to read-access at <$2K/year by month 3
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a one-page landing site with a live "call this number" demo persona ("Pine Ridge Campground"). Wire to a basic Retell agent loaded with a fake rate sheet + 30-site fake availability. Cost: $200.
- **Day 3–4:** Cold-email 200 RV park owners scraped from OHI member directory + Capterra Campspot/Newbook reviewers. Pitch the live demo line. Target 25 to actually call the demo, 15 to take a 20-minute interview.
- **Day 5:** Run 12+ interviews. Two questions matter: (a) "If this worked for your park, would you pay $199/mo?" (b) "Can I put a $1 pre-auth on your card to hold a launch spot?"
- **Decision:** Go if ≥8/12 say yes to (a) AND ≥4/12 give the $1 pre-auth. Anything less = back to Stage 2.

The falsifiable signal is the $1 hold. Talk is cheap. A card on file is not.
