---
title: "CertScout — AI cert-preflight robot for indie console ports"
slug: certscout-console-cert-preflight
date: 2026-05-07
category: DevTools / Indie Game Studios shipping to Switch 2 / PS5 / Xbox
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: "AI agent that plays your build and fails it the way Lotcheck/TRC/TCR will, before you pay $20K."
tags:
  vertical: DevTools
  model: SaaS
  geography: Global
  secondary: [AI-agent, Solo-builder, Workflow-automation, GameDev, Tech-unlock]
axes:
  problem: 17
  demand: 12
  build: 9
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CertScout — AI cert-preflight robot for indie console ports

## 1. One-liner

AI agent that plays your build and fails it the way Lotcheck/TRC/TCR will, before you pay $20K.

## 2. Trend signal — why now?

Three things shifted in the last 12 months that make a productized pre-cert tool finally viable:

1. **Switch 2 launched June 2025.** Nintendo started widening dev-kit access to indies through 2025 and into 2026. By Q1 2026 the supply backlog is mostly cleared and a wave of indie ports is hitting Lotcheck. May 2026 alone had 11 announced Switch 2 titles plus an Indie World showcase. ([nintendoeverything.com](https://nintendoeverything.com/switch-2-dev-kits-2026/), [gamerant.com](https://gamerant.com/nintendo-switch-2-new-games-coming-out-soon-list-may-2026/))

2. **AI agents that play games are production-ready.** A GDC 2026 QA talk reported AI agents using MCP to drive game instances found **34% of bugs human QA also found and 12% of bugs human QA missed**. That's the technical unlock — a year ago an automated agent couldn't navigate a menu reliably. ([strayspark.studio](https://www.strayspark.studio/blog/), [qawolf.com](https://www.qawolf.com/blog/the-12-best-ai-testing-tools-in-2026))

3. **Indie console pipeline is now a $4.4B funnel.** Indie games drove 25% of Steam revenue in 2025 ($4.4B), and 5,863 games earned >$100K each. Many of those are now porting to console. Third-party QA houses (iXie, Qualqore, Kudos) quote $10K–$50K per platform with multi-week turnarounds. Indies who DIY get rejected 2–3 times — Wadjet Eye's *Old Skies* missed Switch launch by months in 2025 because Nintendo "didn't quite seem to grok what was going on" with its patch waiver. ([gameworldobserver.com](https://gameworldobserver.com/2025/12/22/indie-projects-generated-a-quarter-of-the-total-game-revenue-on-steam-by-the-end-of-2025-analytics), [howtomarketagame.com](https://howtomarketagame.com/2026/01/08/how-many-games-were-released-in-2025/), [nintendolife.com](https://www.nintendolife.com/news/2025/04/frustrating-nintendo-cert-process-causes-last-minute-switch-delay-for-old-skies))

The bottom line: the buyer wallet is real ($10K–$50K paid today), the unlock (game-playing AI agents) just landed, and the platform refresh (Switch 2) is creating the submission wave right now.

```
Provenance:
  - Signal 1 — Demand: Indie console-cert pain documented; first-time submitters fail 2–3 times, 4–6 weeks lost; $10K–$50K per platform third-party QA quotes; Wadjet Eye Old Skies Switch delay April 2025. — https://www.nintendolife.com/news/2025/04/frustrating-nintendo-cert-process-causes-last-minute-switch-delay-for-old-skies + https://gamedo.live/news/how-to-port-indie-game-consoles-2026/ — Apr 2025 + 2026
  - Signal 2 — Feasibility: AI playtest agents at GDC 2026 found 34% of human-detected bugs + 12% extra; agentic test platforms (Testsigma, mabl, momentic) shipped multi-agent QA architectures by 2026. — https://www.strayspark.studio/blog/ + https://www.qawolf.com/blog/the-12-best-ai-testing-tools-in-2026 — 2026
  - Signal 3 — Economic: Switch 2 dev-kit supply largely resolved early 2026, wave of indie ports underway; indie share of Steam revenue $4.4B (25%) in 2025; 5,863 indie titles earned >$100K. — https://nintendoeverything.com/switch-2-dev-kits-2026/ + https://gameworldobserver.com/2025/12/22/indie-projects-generated-a-quarter-of-the-total-game-revenue-on-steam-by-the-end-of-2025-analytics — 2025–2026
  Category: Tech-unlock
```

## 3. The opportunity

Console certification is a brutal, opaque, expensive process with three failure modes for a small studio:

1. **DIY and eat 2–3 rejections.** Per gamedo.live: most first-time indies fail cert 2–3 times = 4–6 weeks of waiting + missed marketing window + ~$3K/mo burn × 1.5 months = $4.5K minimum, plus a publisher possibly losing faith.
2. **Pay a third-party QA house.** iXie's minimum project is $5K, but real console-cert engagements come in at $10K–$50K per platform. For a solo dev with a $30K total budget, that's gone.
3. **Pay a publisher to handle it.** Lose 30–50% of revenue forever.

**The wedge:** roughly 70% of cert rejection reasons are *publicly observable* behaviors — suspend/resume cycles, controller hot-swap, idle timeouts, save-fuzz, region/locale switching, UI scaling at 4K vs handheld, achievement triggers, accessibility flags, banned word lists in user input, ESRB metadata mismatches. None of these need NDA cert documents — they're documented in TRC/XR/TCR community write-ups, dev forums, and platform docs. The other 30% (the secret sauce) is what big QA houses gate-keep.

CertScout productizes the 70%: an AI agent that hooks into the developer's PC build, runs 80–120 cert-flavored behavior probes, and ships a Lotcheck/TRC/TCR-style report with screenshots and repro steps. The studio submits a much cleaner first build. Studios still need a human cert pass for the secret 30% on big titles, but for a $50K-budget indie shipping to Switch 2, CertScout is the difference between rejection #3 and rejection #0.

The incumbent QA houses (iXie, Qualqore, Kudos, Pingle) sell **services** at $50–99/hour with $10K minimums. Nobody is shipping a $399/mo SaaS. That gap is the play.

## 4. Target market

- **Primary customer:** Solo + 2–4-person indie game studios with a near-finished or shipped Steam title that wants to ship on Switch 2 and/or PS5/Xbox in the next 12 months. Sweet spot: studios that earned $50K–$2M on Steam and are now porting. Annual budget for the port + cert: $30K–$150K.
- **Why they buy:** They've heard the horror stories. Old Skies missed launch. Five Nights of cert resubmissions kills the launch trailer. They have $20K–$30K of "cert + QA" budget penciled in and zero affordable productized option to spend it on.
- **Rough TAM reasoning:** 5,863 indie titles cleared $100K on Steam in 2025 alone. Conservatively assume 25–35% port to at least one console within 24 months → 1,500–2,000 new console-cert events per year *just from the recent Steam cohort*. Add the back catalog of pre-2025 indies still porting + AA studios = ~5K addressable events/year. At even 5% capture × $399/mo × 12 mo = ~$1.2M ARR. At 15% capture × multiple platforms = the $5M ceiling.
- **Why now for them:** Switch 2 is the #1 demand-gen event of 2026 for ports. Every Steam-success indie is asking the same question right now: how do I get on Switch 2 without losing six months and $30K?

## 5. Product sketch (MVP)

- **Build connector:** drop a Windows/Mac/Linux build (and optionally a Steam build), CertScout spins it up in a controlled VM with input/save/state instrumentation.
- **Cert-flavored probe library** (v1 covers ~80 probes across the public layer of Sony TRC, Nintendo XR/Lotcheck, Microsoft TCR, Steam Deck Verified, SteamOS Standalone): suspend/resume cycles, controller disconnect/reconnect, idle timer, save-overwrite, save-corrupt-and-recover, locale/region switch, UI scaling 720p/1080p/4K, banned-word filter on text input, achievement/trophy edge cases, screen-reader/accessibility tags, ESRB/PEGI rating sync.
- **AI agent playthrough:** an LLM-driven agent that drives menus, completes a 30-minute golden-path run, then hammers the probe library against random save states.
- **Cert-style report:** PDF + dashboard with each probe's pass/fail/warning, screenshots, video clip of the failure, and a TRC/XR/TCR-flavored remediation note ("Save corruption likely violates Lotcheck XR-409-equivalent — call savefile mutex before sleep").
- **Publisher-grade output:** a one-page summary the studio can hand to a publisher or co-dev partner showing pre-flight pass-rate.
- **Re-run on every build:** CI hook so each nightly build gets a CertScout score; deltas highlighted vs last green.
- **Platform rules updates:** subscriber-only update channel with new probes as Sony/Nintendo/MS publish new requirements (Switch 2 thermal scaling, Steam Frame Verified, etc.).

## 6. AI angle — what's load-bearing

Two AI capabilities are doing the actual work:

1. **The play-through agent.** Driving a real game (menus, levels, save points) without breaking on visual variance is the part that was impossible until 2025. This isn't a chatbot bolted on — it's a vision-language agent that sees the game frame, decides where to click/press, and executes. Without it, you have a static linter, which existing tools already are.
2. **The remediation generator.** Translating "the agent observed a black screen for 4.2s after suspend at frame 18,431" into "this looks like a Lotcheck XR-style suspend/resume violation; check that the gameplay loop yields cleanly when applet state goes to FocusedApplicationContext.Suspended" is a domain-tuned LLM call. It saves the dev 1–2 hours of head-scratching per failure.

Strip the AI out and what's left is a probe runner — useful but no 10× over what the existing QA houses ship internally. The agent + remediation is the wedge.

## 7. Localization angle (if any)

N/A — this is a global play. Indie devs work in English regardless of country (US, UK, EU, JP, KR, BR, IN). The probes themselves *do* test localization (region/locale switch is a real cert axis), but the buyer interface is English-only with light JP support later.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - Solo tier: **$199/mo** per game, 1 platform, 30 probes, 5 nightly runs.
  - Studio tier: **$499/mo** per game, all platforms, full probe library, unlimited runs, CI integration, 1 cert-house warm intro.
  - Publisher tier: **$1,999/mo** for a portfolio of up to 10 titles, white-label reports, priority probe updates.
- **ACV:** Realistic blended ACV ~$5,400 (Studio tier 9-month average attach window — covers porting + cert + 1–2 patches).
- **Path to $1M ARR:** 185 active Studio-tier customers × $499/mo × 12 = $1.1M. Achievable in 12–18 months given the cohort size (~5K addressable cert events/year).
- **Path to $5M ARR:** 750 Studio + 60 Publisher tiers, plus add-on services (single-shot $1.5K cert-pass packages, paid integrations with publishers like Akupara, Versus Evil, Annapurna). Or expand into PC store cert (Epic, GOG) and mobile (Apple, Play) cert preflight — both have analogous rejection patterns.
- **Expansion path:** seat-by-game pricing scales naturally as a studio's catalog grows; publisher tier scales as portfolios consolidate; post-launch cert (every patch resubmits) keeps subs sticky long after launch.

## 9. Go-to-market wedge — first 100 customers

This is the make-or-break section. Indie devs are a tight, identifiable community.

- **Steam Next Fest cohort scrape (60 → 30 customers):** Every Steam Next Fest cohort lists ~700–1,000 demos. Filter to studios that have already shipped or are in active cert. Send a personalized 90-second Loom: "I noticed *Game Y* is on the Switch 2 publisher track. Here's CertScout running 5 probes against your Steam build — 2 fail. Want the report?" Realistic 5–8% reply, 30% close on a $199 trial.
- **Indie publisher partnerships (15–25 customers):** Akupara, Versus Evil, Yogscast Games, Coatsink, Annapurna's pickup process — they each evaluate 50–200 indie pitches/quarter and would happily send their roster a "free CertScout report" as a value-add. Negotiate a 20% rev-share for 12 months on referrals.
- **GDC + Develop:Brighton + PocketGamerConnects booth (10–20 customers):** $5K–$8K mini-booth at one of these = 2,000 dev conversations × 1% close. Game-dev events convert hard when the demo is a live cert-fail caught on a popular game in 5 seconds on stage.
- **r/gamedev + TIGSource + Discord communities (15 customers):** A quarterly "State of console cert" post — anonymized data from 200 builds showing the top-10 rejection causes — buys a top-of-feed thread on r/gamedev (340K subs). Built-in lead capture: "Want CertScout to run those 10 probes on your build for free?"
- **Nintendo Indie World + ID@Xbox newsletters (10 customers):** Both publish digestible indie newsletters; sponsor a single issue or line up a guest article.

If 100 paying customers in 6 months isn't visible from these channels, the idea is dead. With Switch 2 dev-kit unlock pulling the wave forward, it should be visible.

## 10. Build complexity — justification

**Medium.** v1 is buildable in 4–5 months by 2 engineers. Off-the-shelf: vision-language model + tool-use harness (Claude/Gemini), Steamworks SDK ingestion, Linux/Windows VM orchestration, video/screenshot capture, PDF report generator. Custom work: the probe library (40–60 probes for a credible v1, each ~1 dev-day), the play-through agent's reliability layer (this is the hardest part — making the agent navigate arbitrary indie games without crashing or stalling), and a knowledge base of cert rejection patterns mined from public dev forums + platform docs. No NDA-protected content needed for v1; the addressable rejection categories are the public 70%.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Public probe library only; no NDA platform material reproduced. Studios provide their own builds. |
| Ethical — no harm / dark patterns | ✅ | Helps small studios ship; no harm vector. |
| Market exists (evidence above) | ✅ | $4.4B indie Steam cohort, 5,863 >$100K titles in 2025, documented $10K–$50K QA-house spend. |
| 1–5 person team can build this | ✅ | Two engineers, four-to-five months for v1. |
| Launchable with <$50K / ₹40L | ✅ | ~$25K covers 4 months of two engineers part-time + GPU/cloud + a single demo dev kit purchase ($350–$500/Switch 2). |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Rejection costs 4–6 weeks + $4–8K direct + missed marketing windows. Quoted Old Skies / Wadjet Eye delay is dollar-tangible pain. |
| Demand evidence | 15 | 12/15 | Multiple QA-house competitors charging $10K–$50K = paid alternative exists. Direct customer quotes ("frustrating", "you wasted our time fee"). Lacks: a productized SaaS competitor doing exactly this is missing — could be opportunity or warning. |
| Build feasibility | 15 | 9/15 | Game-playing AI agent is the hard part — possible per GDC 2026 evidence, but reliability across arbitrary indie games is a real engineering grind. 4–5 months for credible v1. |
| Distribution clarity | 15 | 11/15 | Indie devs are clustered (r/gamedev, Discord servers, Steam Next Fest list). Publisher channel is real. Realistic conversion math. Slight risk: many devs will DIY rather than pay $499/mo. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked below QA-house rates and against existing $13/mo MyMusicStaff-style SaaS. ACV math works. ~185 customers to $1M ARR is achievable. |
| Time to first revenue | 10 | 8/10 | Pre-sale a "founder's cohort" before v1 ships — easy to sign 10 indies at $199/mo for early access in week 1 of outbound. First revenue in 4–6 weeks. |
| Defensibility | 10 | 6/10 | Probe library + cert-rejection knowledge base compounds with every customer. Brand in indie-dev community is sticky. But: a well-funded QA house could productize this if it lands big. Soft moat, not hard. |
| **Total** | **100** | **75/100** | |

Adjusted to **78/100** for the founder-fit upside (technical builder with prior gamedev exposure converts much higher) and the rare "platform refresh moment" timing of Switch 2.

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` — game-engine and AI-agent work is meaningful.
`domain-expertise-required` — needs at least one founder who's shipped a console title or worked QA on one. Without that, the probe library will have credibility holes.

### Key assumptions to validate (3–5)

1. **Assumption:** A v1 probe library covering only the *public* 70% of cert rejection reasons is a credible product, not a toy. **How to test:** interview 15 indie devs who recently shipped on Switch/PS5/Xbox; ask which of their rejection reasons were "obvious in hindsight" vs "secret sauce." Target ≥60% obvious.
2. **Assumption:** Indie devs will pay $499/mo SaaS rather than wait for a one-shot $2K consultant. **How to test:** pre-sell a 10-studio founder's cohort at $199/mo before v1; close ≥6.
3. **Assumption:** Game-playing AI agent works reliably on arbitrary indie game UIs. **How to test:** prototype against 10 randomly-picked Steam indies of varying genres; agent should complete the 30-min golden path on ≥7.
4. **Assumption:** Publishers will refer their roster. **How to test:** pitch 5 indie publishers (Akupara, Versus Evil, Coatsink, Yogscast Games, Raw Fury) on a free white-labeled report for their roster; ≥2 sign in 30 days.
5. **Assumption:** Studios value a productized $499/mo subscription over a $2K one-shot. **How to test:** A/B test landing-page pricing — sub vs one-shot vs both — and measure paid-conversion.

### Risk flags

1. **Platform-NDA risk:** Sony/Nintendo/MS could read this as reverse-engineering and apply pressure. Mitigation: probes are derived from public docs + community forum posts only; CertScout never claims to replicate the official cert process and explicitly recommends users still do a human cert pass.
2. **Big QA house clones in 12 months:** Qualqore, iXie, or Kudos has the cert-rejection knowledge base today and could ship a SaaS in 6–9 months. Mitigation: ship fast, brand in indie-dev community first, lock in publisher partnerships.
3. **AI agent reliability ceiling:** if the play-through agent only works on 50% of submitted games, the product is unusable. This is the technical risk — needs to be killed early via prototype.
4. **Indie spend collapse:** 2026 has seen layoffs. If the indie pipeline narrows, ACV erodes. Mitigation: expand to AA mid-tier and to mobile/PC store cert later.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + domain advisor (ex-console QA or indie dev who's shipped to Switch/PS5)
Time to revenue:        4–6 weeks (pre-sale founder's cohort), 4–5 months to credible v1
Capital to launch:      ~$25–35K (2 engineers part-time, cloud GPU, single Switch 2/PS5 dev environment)
Top 3 assumptions to validate first:
  1. Probe-library credibility — interview 15 console-shipped indies; ≥60% of their rejection reasons match the public-70% bucket
  2. Pre-sale conversion — close ≥6 of 10 in a $199/mo founder's cohort
  3. Agent reliability — complete 30-min golden path on ≥7 of 10 random Steam indies
Kill criteria:
  - Abandon if <3 paying founder's-cohort customers in first 60 days of outbound
  - Abandon if game-playing agent fails on >50% of test indie games at prototype stage
  - Abandon if a major QA house (iXie/Qualqore) ships an identical SaaS before v1
```

## 15. Next step — 1-week validation sprint

The single highest-leverage week:

- **Day 1–2:** scrape the 200 indie titles from the latest Steam Next Fest demo list filtered to "ports likely". Hand-build a one-page landing page with a pre-sale CTA at $199/mo for a founder's-cohort beta.
- **Day 3–4:** send 50 personalized Loom demos showing a manual probe pass-fail on each studio's *own* Steam build (suspend/resume + 4K UI scaling probe is enough for a 60-second video). Track replies, calls booked, and credit-card holds.
- **Day 5:** parallel — interview 5 indie devs who recently failed cert on Switch and 5 who passed. Ask them to rank the top-3 rejection reasons. If ≥60% are public-observable and ≥3 of 50 outbound put down a credit card hold by EOW, it's a go.

**Falsifiable outcome:** ≥3 paid pre-orders ($199/mo × 3 = $597 MRR) within 5 business days of cold outbound = green light. <3 = pause, re-evaluate either pricing or channel before committing the 5-month build.
