---
title: "ProofReel — originality evidence trail for YouTube studios"
slug: originality-evidence-trail
date: 2026-08-03
category: Creator Economy / Global — Multi-Channel YouTube Operators & Faceless-Content Studios in YPP
complexity: Low
score: 73
verdict: GO
confidence: Medium
oneLiner: "Captures how each video was actually made, so a demonetized channel can prove human authorship in 21 days."
tags:
  vertical: Creator Economy
  model: SaaS
  geography: Global
  secondary: [AI-agent, Solo-builder, Compliance-driven, Creator, Platform-dependency]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 2
founderFit: [technical-heavy, content-heavy]
featured: false
---

# ProofReel

## 1. One-liner

Captures how each video was actually made, so a demonetized channel can prove human authorship in 21 days.

## 2. Trend signal — why now?

YouTube spent eighteen months converting a vague "repetitious content" rule into an enforcement machine, and in 2026 it started swinging hard.

In July 2025 YouTube renamed its "repetitious content" policy to **"inauthentic content"** and began demonetizing mass-produced, templated video. Enforcement stayed sporadic until December 2025, when Screen Culture and KH Studio (2M+ combined subs) were terminated. Then January 2026: **11 channels terminated, 6 wiped of content — 35 million subscribers, 4.7 billion lifetime views, roughly $9.8M/year in ad revenue erased.** By June 2026 removals became a routine cadence rather than a news event ([OutlierKit enforcement timeline](https://outlierkit.com/resources/youtube-ai-slop-crackdown-2026/)).

The casualties are not small. CuentosFacianantes (5.95M subs), Imperiodejesus (5.87M subs), Super Cat League (4.21M subs), Three Minute Wisdom (1.7M subs / 2B views). One Bible-story channel with 588,000 subscribers lost **$30,000/month** in ad revenue in a single action ([Mediacube](https://mediacube.io/en-US/blog/youtube-demonetization)).

Here's the part that makes this a product. The appeal is **evidentiary, not rhetorical**. Guidance across the creator-services industry converges on the same instruction: *"Appeals succeed on evidence, not sincerity. Reviewers reject explanations of intent and accept proof of originality: your scripting process, project files, drafts, recording sessions, anything that shows a human production behind the uploads"* ([Mediacube](https://mediacube.io/en-US/blog/youtube-demonetization)). ChannelMedic's appeal guide lists the same artifacts: script drafts with version history, research sources, licensed-asset receipts, and NLE project files — noting that *"non-linear editor project files with timeline history are the clearest evidence of human creative decisions, and should be archived alongside the final export"* ([ChannelMedic](https://channelmedic.com/how-to-appeal-reused-content-demonetization/)).

And the clock is brutal: **21 days to appeal**, ~14 days for YouTube's review, **90 days before you can reapply** if rejected. A channel earning $30K/month that loses the appeal is out roughly $90K before it can even try again.

Every piece of advice in this market is retrospective — "archive your drafts." Nobody archives their drafts. The creator who needs the evidence discovers on day one of a 21-day window that the evidence was never captured. That gap is the product.

The third leg: **May 2026 — disclosure requirements tightened and C2PA checks expanded** on the platform ([OutlierKit](https://outlierkit.com/resources/youtube-ai-slop-crackdown-2026/)). C2PA tooling is now open-source under MIT with a royalty-free spec, and signing certificates run ~$289/year from DigiCert ([EyeSift C2PA adoption status](https://www.eyesift.com/faq/c2pa-content-credentials-2026-cryptographic-provenance-adoption/)). Samsung Galaxy S25 and Google Pixel 10 sign natively. Cryptographic provenance stopped being a standards-body slide deck and became something a solo builder can ship on.

```
Provenance:
  - Signal 1 (Demand): YouTube's 2026 inauthentic-content enforcement wave — 16 channels, 35M subs,
    4.7B views, ~$9.8M/yr revenue erased; one 588K-sub channel lost $30K/mo. Appeals require
    process evidence creators never captured. 21-day appeal window, 90-day reapply penalty.
    — https://outlierkit.com/resources/youtube-ai-slop-crackdown-2026/ — 2026-07-15
  - Signal 2 (Feasibility): May 2026 — YouTube disclosure requirements tightened and C2PA checks
    expanded; C2PA spec royalty-free, core tooling open-source MIT, signing certs ~$289/yr,
    native signing on Pixel 10 / Galaxy S25.
    — https://www.eyesift.com/faq/c2pa-content-credentials-2026-cryptographic-provenance-adoption/ — 2026
  - Signal 3 (Economic): 3M+ creators monetized in YPP; faceless operators run 5–20 channel
    portfolios structured as mini media companies; creator-tool pricing benchmarked $19–49/mo
    with 100% of YouTube growth tools priced under $49/mo.
    — https://stealwhatworks.com/blogs/news/youtube-growth-pricing — 2026
    — https://howsociable.com/news/2026/04/how-youtubes-partner-program-works-in-2026 — 2026-04
  Category: Platform shift
```

## 3. The opportunity

The entire creator-tooling market is built around **making more content faster**. Not one meaningful product is built around **proving you made it**.

That was fine when originality was unenforced. It stopped being fine in January 2026. YouTube now evaluates *whole channels* rather than individual videos, which means the failure mode isn't "this video got a strike" — it's "your entire revenue stream is gone, prove yourself within 21 days."

The incumbent isn't a company. It's **a folder of advice blog posts** telling creators to archive their Google Docs version history. That advice fails for a structural reason: it requires discipline applied continuously, months before the event that makes it valuable, against a risk the creator doesn't believe applies to them. Nobody does it. Then the notification arrives and there is nothing to submit.

What a focused team does 10× better: make evidence capture **automatic and passive**. The creator connects their existing tools once — Google Docs, Notion, Premiere/DaVinci/CapCut project folders, ElevenLabs, their asset licenses — and ProofReel silently builds a timestamped, cryptographically signed production record per video. No new workflow. No discipline required. When the notification lands, the creator clicks one button and gets an appeal-ready dossier instead of a panic attack.

The second thing incumbents can't do: **tell you you're at risk before YouTube does.** The three policy buckets are public and specific. A tool that already ingests a channel's full production history can score each upload against those buckets — template similarity across videos, share of original footage vs. stock slideshow, human-recorded vs. fully synthetic voiceover, upload cadence, thumbnail/title repetition — and flag the channel weeks before an enforcement review. That's a monitoring product with a compliance product underneath it.

## 4. Target market

**Primary customer:** Multi-channel YouTube operators and small faceless-content studios — 3 to 25 channels, $10K–$150K/month combined ad revenue, teams of 2–15 (a producer, some editors, some VAs). Global, but concentrated in the US, UK, India, Philippines, and Eastern Europe where the faceless-content labor market sits.

**Secondary customer:** Solo YPP creators earning $2K–$15K/month who use AI tools in their workflow and know they're in the blast radius. Lower ACV, much higher volume, self-serve.

**Why they buy — in their words:**

- *"So you can earn $4,250,000 USD a year by letting AI spam YouTube garbage at new users?"* — Reddit user, r/youtube ([via OutlierKit](https://outlierkit.com/resources/youtube-ai-slop-crackdown-2026/))
- *"The issue isn't AI itself. It's laziness."* — Reddit user, r/SmallYoutubers ([via OutlierKit](https://outlierkit.com/resources/youtube-ai-slop-crackdown-2026/))
- *"Mistakes will become proof of truth. If you do not make mistakes, people will suspect it is artificial intelligence."* — Prakhar Gupta, AI Impact Summit 2026 ([via OutlierKit](https://outlierkit.com/resources/youtube-ai-slop-crackdown-2026/))
- *"In a world flooded with AI slop, people are seeking real community, lived experience, and trusted opinions."* — Steve Huffman, Reddit CEO ([via OutlierKit](https://outlierkit.com/resources/youtube-ai-slop-crackdown-2026/))
- *"If AdSense is a creator's only income stream, they are one policy change away from zero revenue."* — [AITuber analysis](https://aituber.app/blog/faceless-youtube-channels-demonetized-2026/)
- *"Asserting originality without demonstrating process gets rejected."* — [ChannelMedic appeal guide](https://channelmedic.com/how-to-appeal-reused-content-demonetization/)
- *"Appeals succeed on evidence, not sincerity."* — [Mediacube](https://mediacube.io/en-US/blog/youtube-demonetization)
- *"Many popular tools are simply too expensive for creators earning $2K-$5K/month."* — [Steal What Works pricing survey of 20 YouTube growth tools](https://stealwhatworks.com/blogs/news/youtube-growth-pricing)

The honest read on this voice sample: creator sentiment is mostly *approving* of the crackdown, aimed at other people's slop. That's a real nuance. It means this product cannot be sold as "protect your AI slop." It has to be sold to the legitimate operator who uses AI in a real production pipeline and is terrified of being swept up in a channel-level automated review. That's the actual buyer, and there are a lot of them.

**Rough TAM reasoning:** 3M+ monetized YPP channels globally. Assume 8–12% use AI meaningfully in production and sit in the risk zone — call it 250K–350K channels. Multi-channel operators running 5–20 channel portfolios are perhaps 15,000–30,000 businesses. Capturing 2,000 paying accounts at a $110 blended monthly ACV is a $2.6M ARR business. That's the shape I want — no unicorn math required.

**Why now for them:** Before January 2026 this was a theoretical risk. After 16 terminations and $9.8M/year of erased revenue, every operator running a channel portfolio has done the arithmetic on their own exposure. Enforcement became routine cadence by June 2026. The fear is current, specific, and denominated in dollars they can name.

## 5. Product sketch (MVP)

- **Passive production capture** — connect Google Docs/Notion, cloud drive folders, and editor project files; ProofReel watches for script drafts, revision history, project timelines, and asset licenses tied to each video, with no change to how the team works.
- **Per-video evidence dossier** — every published video gets a timestamped record: script version history with edit timestamps, research source list, voiceover recording sessions, NLE timeline complexity, licensed-asset receipts, and which humans touched which step.
- **Signed provenance** — each dossier is cryptographically sealed at capture time (C2PA-aligned), so a reviewer can see the evidence predates the enforcement action rather than being assembled after it.
- **Risk score against the three buckets** — each upload scored on template similarity, original-footage share, synthetic-voice share, upload cadence, and thumbnail/title repetition, mapped to YouTube's actual policy buckets (generic/repetitive, off-putting, AI persona on sensitive topics).
- **Channel-level early warning** — a portfolio dashboard flagging which channels are drifting into risk, because YouTube reviews channels, not videos.
- **One-click appeal packet** — on a demonetization notice, generate a submission-ready dossier: process narrative, evidence index, and the specific bucket rebuttal, formatted for the 21-day window.
- **AI-persona detector** — flags videos where a synthetic voice discusses health, finance, legal, or political topics, the fastest path to permanent demonetization.
- **Multi-channel roles** — assign editors/VAs so contributor attribution is captured automatically as proof of human production.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist.

**Risk scoring is the AI.** Judging whether videos across a channel are "template-made" or show "substantial variation" requires actual multimodal comparison — thumbnails, audio patterns, script structure, pacing, visual composition — across a channel's full library. YouTube's own reviewers examine "channel's main theme, most viewed and newest uploads, metadata, production patterns across the channel." Replicating that judgment is a vision+language problem, not a rules engine. You cannot regex your way to "does this feel repetitive after watching several in a row."

**Evidence synthesis is the AI.** Turning a pile of Google Docs revisions, a Premiere project file, and 40 research URLs into a coherent narrative of human creative decision-making — *"the writer revised the third act four times over six days after adding two new sources"* — is a summarization and argumentation task under a hard deadline. A human consultant doing this costs $500+ and takes a week; the creator has 21 days total.

**Synthetic-content detection is the AI.** Determining whether a voiceover is human-recorded or TTS, and whether an AI persona is presenting as a human expert on a sensitive topic, is a classification problem on audio and transcript.

What is *not* AI: the capture plumbing and the cryptographic signing. That's boring integration work, and it's exactly what makes the moat weak — see section 13.

## 7. Localization angle (if any)

N/A — this is a global play. YouTube's policy is enforced identically worldwide and the buyer is defined by platform exposure, not geography.

One real nuance worth exploiting: a large share of the faceless-content production labor force sits in India and the Philippines, and multi-channel operators frequently run distributed editor/VA teams there. Multi-language script capture (Hindi, Tagalog, Spanish, Portuguese) matters for the contributor-attribution feature, and pricing should be USD-denominated since revenue is USD AdSense — a $99/mo tool against $30K/mo of protected revenue is trivially affordable regardless of where the team sits. No local payment rail work needed.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Solo** — $29/mo, 1 channel, evidence capture + risk score. Sits right on the category's psychological line where a tool "starts to feel like a serious growth tool."
  - **Studio** — $99/mo, up to 5 channels, portfolio dashboard, contributor attribution, appeal packet generation.
  - **Network** — $299/mo, up to 25 channels, priority appeal support, API.
  - **Appeal Rush** — $499 one-time, expedited dossier build inside an active 21-day window. High-margin, and it's the wedge that gets non-customers to sign up on the worst day of their year.

- **ACV:** Blended ~$110/mo → **$1,320/year**. Mix assumption: 60% Solo, 30% Studio, 10% Network.

- **Rough math to $1M ARR:** 760 paying accounts at $110/mo blended. Realistically ~450 Solo + 230 Studio + 80 Network. Against a risk pool of 250K–350K channels, that's under 0.3% penetration.

- **Rough math to $5M ARR:** ~3,800 accounts, or a mix shift toward Network tiers plus a second platform. The honest version: $5M requires either expanding beyond YouTube (TikTok and Meta are running parallel authenticity enforcement) or moving upmarket into MCNs and media companies managing 50+ channels at $1,000+/mo. I'd underwrite this idea at $1.5–2.5M ARR and treat $5M as the upside case, not the plan.

- **Expansion path:** channel count is the natural usage meter and it grows on its own — operators add channels. Then contributor seats. Then Appeal Rush events. Then adjacent platforms as their enforcement matures. Retention is the question mark: if YouTube's enforcement wave cools, so does urgency. See risk flags.

## 9. Go-to-market wedge — first 100 customers

- **Target the already-wounded, by name.** Every terminated or wiped channel from the January 2026 wave was covered by press with the channel named. Kapwing's study catalogued **278 AI-slop channels**; press covered 16 terminations specifically. Their operators almost always run *other* channels. Build a list of every named channel from the Kapwing study and the enforcement coverage, find the operator's business email or Twitter/X, and send a single message: "You had a channel terminated in January. Here's the evidence file you would have needed. We built it for the rest of your portfolio." Expect a high reply rate — these people just lost real money and are actively looking.

- **Free channel risk audit as the top of funnel.** Ship a public tool: paste a channel URL, get a free score against YouTube's three policy buckets with the specific videos flagged. Costs a few cents of inference per scan. This is inherently shareable, ranks for "is my channel at risk of demonetization," and every scan is a qualified lead with their exposure already quantified. Convert scan → paid at 3–5%; 3,000 scans in the first quarter is a realistic 100+ customers.

- **The appeal-guide publishers are the distribution channel.** ChannelMedic, Mediacube, VidIQ, OutlierKit, ScaleLab and a dozen others are already publishing detailed appeal guides that rank for exactly the searches a panicking creator makes. They give advice; they don't have a product. Offer them affiliate revenue (30% recurring) to link ProofReel as the tool that produces the evidence their guide says you need. Five of these partnerships beats any amount of my own SEO.

- **Multi-channel operator communities.** Noah Morris (~20 channels), Matt Par (12+ channels) and similar operators run paid communities and courses teaching portfolio channel-building — audiences of exactly the buyer, already paying for education on this business model. Sponsor or revenue-share into 3–4 of these. Their entire pitch is now threatened by enforcement risk, so a tool that de-risks it is aligned, not adversarial.

- **Be the first responder on enforcement day.** Set up monitoring for demonetization complaints on X, r/PartneredYoutube, and r/NewTubers. When enforcement waves hit, dozens of operators post within hours, inside their 21-day window, with real money on the line. Reply with genuine help plus Appeal Rush. This is the highest-intent moment that will ever exist in this market.

## 10. Build complexity — justification

**Low.** The capture layer is OAuth integrations against well-documented consumer APIs — Google Docs revision history, Drive, Notion, Dropbox — plus parsing NLE project files (Premiere `.prproj` and DaVinci/CapCut equivalents are XML-ish and documented enough). Risk scoring rides off-the-shelf multimodal models against video frames, thumbnails, and transcripts; no training required. C2PA signing uses the open-source MIT-licensed toolkit plus a ~$289/year certificate. The appeal-packet generator is structured LLM output over data you already hold.

Realistic v1 for a strong pair: **8–10 weeks.** The free channel-risk-audit tool alone is a 2-week build and can ship first as a standalone lead magnet while the capture layer is finished. The genuinely fiddly parts are editor project-file parsing across three or four formats and getting risk-score calibration credible enough that creators trust it — both are grind, not research.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping creators document their own production process and appeal platform decisions. No ToS violation — YouTube explicitly invites appeals with evidence. |
| Ethical — no harm / dark patterns | ✅ | With one line to hold: this must document genuine human production, not fabricate it. Positioned as protection for legitimate operators, not laundering for slop farms. See risk flags. |
| Market exists (evidence above) | ✅ | 16 channels terminated, $9.8M/yr revenue erased, 3M+ YPP channels, benchmarked creator-tool pricing. |
| 1–5 person team can build this | ✅ | Pair ships v1 in 8–10 weeks on off-the-shelf APIs. |
| Launchable with <$50K / ₹40L | ✅ | Inference, hosting, a C2PA cert (~$289/yr). Under $10K to first revenue. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **16**/20 | Real money, named dollar amounts ($30K/mo channel), hard 21-day deadline, 90-day penalty for failure. Not a full 17+ because it's an *episodic* catastrophe, not daily pain — most creators feel it as insurance-shaped anxiety, and insurance is chronically under-bought until the fire. |
| Demand evidence | 15 | **12**/15 | Strong: documented terminations with revenue figures, a whole cottage industry of appeal guides, benchmarked pricing. Weak spot: the guides prove *interest*, not that anyone pays for a tool. No competitor revenue to point at because no competitor exists — which cuts both ways. |
| Build feasibility | 15 | **13**/15 | Off-the-shelf APIs, open-source C2PA, no model training. 8–10 weeks for a pair. Project-file parsing across formats is the only real grind. |
| Distribution clarity | 15 | **11**/15 | Named lists (278 catalogued channels, named terminations), a genuinely viral free audit tool, named affiliate partners, named community operators. Not higher because conversion on the free-scan funnel is an untested guess and the "wounded operator" list is finite. |
| Revenue mechanics | 15 | **11**/15 | Pricing sits inside a benchmarked band ($19–49 solo, higher for business tiers), 760 accounts to $1M is achievable. Docked for retention uncertainty — this is a fear-driven purchase and fear decays. |
| Time to first revenue | 10 | **8**/10 | Free audit tool ships in 2 weeks and generates leads immediately; Appeal Rush can be sold manually to wounded operators before the product is finished. Revenue in 4–8 weeks is realistic. |
| Defensibility | 10 | **2**/10 | The honest score. No moat. The integrations are copyable in a quarter, the scoring is prompt engineering, and VidIQ or TubeBuddy could bolt this on in a sprint with 100× the distribution. Accumulated per-channel production history creates mild switching cost by month 12, and nothing before that. |
| **Total** | **100** | **73**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical for the integration and multimodal scoring work. Content-heavy because the free-audit tool and the appeal-guide affiliate strategy both live or die on ranking for panic searches and being genuinely useful in creator communities. A founder who's operated a YouTube channel would move meaningfully faster on the risk-score calibration.

### Key assumptions to validate (3–5)

1. **Assumption:** Creators will pay a monthly fee for evidence they only need if disaster strikes — i.e. this sells as insurance, not just as an emergency service.
   **How to test:** Offer 40 wounded operators from the January wave both options at once — $99/mo ongoing vs. $499 one-time Appeal Rush. If >70% choose only the one-time, this is a services business with churn baked in, not SaaS.

2. **Assumption:** The free channel-risk audit converts scans into paid accounts at 3–5%.
   **How to test:** Ship the audit tool standalone in week 2. Drive 500 scans through creator subreddits and X. Measure email capture and paid conversion before building any capture integrations.

3. **Assumption:** A risk score built on public policy buckets is accurate enough that creators trust it — and specifically that it flags channels YouTube later actions.
   **How to test:** Backtest against the 278 channels in the Kapwing study and the 16 known terminations. If the score doesn't separate terminated channels from surviving ones, the monitoring half of the product is theater.

4. **Assumption:** Evidence dossiers actually improve appeal outcomes.
   **How to test:** This is the hardest and most important one. Track the first 20 appeals submitted with ProofReel dossiers against the published baseline. Cannot be validated pre-launch — which is precisely why confidence is Medium and not High.

5. **Assumption:** Multi-channel operators, not solo creators, are the real buyer.
   **How to test:** 25 interviews split across both segments; measure stated willingness to pay and, more usefully, who agrees to a paid pilot on the call.

### Risk flags

1. **Platform dependency — severe.** The entire product exists because of one company's enforcement posture. If YouTube softens enforcement, ships its own provenance dashboard in Studio, or simply makes appeals easier, the urgency evaporates overnight. YouTube has every incentive to build C2PA-based provenance natively — they already expanded C2PA checks in May 2026. This is the single biggest reason this isn't scored higher.

2. **Defensibility is near zero.** Scored 2/10 and I mean it. VidIQ, TubeBuddy, and the MCNs have the distribution and could ship a competing feature in a quarter. The only real answer is speed and owning the "originality evidence" category before anyone notices it's a category.

3. **Ethical edge that must be actively policed.** A tool that helps document production can be misread as a tool that helps fabricate it. If ProofReel becomes known as the way slop farms launder appeals, YouTube will treat its dossiers as a negative signal and the product dies instantly. The capture must be genuinely passive and tamper-evident — that's a product requirement, not a values statement. Refuse the customers who ask for the other thing.

4. **Fear-driven purchase, decaying urgency.** Retention risk is structural. Enforcement waves create spikes of demand followed by troughs. The mitigation is making the risk score valuable *between* waves — as content-strategy feedback rather than pure insurance — but that's an unproven second act.

5. **Customer-voice quality.** Verbatim quotes here came through secondary compilations because Practical Machinist–style forum blocks and Reddit search limits prevented direct primary sourcing during research. The sentiment I did find is mostly *pro-crackdown*, aimed at other people. I have not directly heard the target buyer say "I would pay for this." That's a genuine gap and it's why confidence is Medium.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical pair, ideally one who has operated a monetized YouTube
                        channel; strong content/community distribution instinct required
Time to revenue:        4–8 weeks (free audit tool in week 2, Appeal Rush sold manually first)
Capital to launch:      $8–10K (₹7–9 lakh) — inference, hosting, C2PA certificate
Top 3 assumptions to validate first:
  1. Insurance vs. emergency purchase — offer 40 wounded January-wave operators both
     $99/mo and $499 one-time; if >70% take only the one-time, it's a services business
  2. Free-audit conversion — ship standalone in week 2, drive 500 scans, measure paid
     conversion before building capture integrations
  3. Risk-score validity — backtest against the 278 Kapwing-catalogued channels and the
     16 known terminations; must separate terminated from surviving
Kill criteria:
  - Abandon if <5 of 40 wounded operators convert to a paid monthly plan (confirms
    services business, not SaaS)
  - Abandon if the risk score fails to separate the 16 terminated channels from a
    control set in backtest
  - Abandon if YouTube ships native provenance/appeal evidence tooling in Studio
  - Abandon if free-audit → paid conversion is under 1.5% across 500+ scans
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the list. Every channel named in the Kapwing 278-channel study plus the 16 documented terminations; trace operators to their surviving channels and find contact details. Target 60 reachable multi-channel operators. In parallel, hand-build one real evidence dossier for a friendly creator's video — do it manually, no product — to find out how hard the artifact actually is to produce and what it looks like.

- **Day 3–4:** Send all 60 a single specific message with the sample dossier attached and both price points offered — $99/mo ongoing protection vs. $499 one-time appeal build. No demo, no deck. Measure replies, and specifically measure *which price they reach for*.

- **Day 5:** Run the backtest. Score the 16 terminated channels and 30 comparable surviving channels against the three policy buckets. Check whether the score separates them.

**Go / no-go:** Go if ≥8 of 60 operators reply with genuine interest, **≥4 of those choose the monthly plan over the one-time**, and the risk score separates terminated from surviving channels with clear margin. No-go if replies cluster entirely on the one-time offer — that result says build a $499 service business or walk, but don't build SaaS. The monthly/one-time split is the falsifiable outcome that matters; everything else is noise.
