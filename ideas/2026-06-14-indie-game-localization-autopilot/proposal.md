---
title: "PolyShip — localization autopilot for indie game studios"
slug: indie-game-localization-autopilot
date: 2026-06-14
category: Creator Economy / Global Indie Game Developers
complexity: Medium
score: 72
verdict: GO
confidence: Medium
oneLiner: "Turns your game's text files into UI-tested, build-ready translations in a dozen languages — no translator emails, no broken menus."
tags:
  vertical: Creator Economy
  model: SaaS
  geography: Global
  secondary: [AI-agent, Solo-builder, GameDev, Multilingual, Developer-tool]
axes:
  problem: 15
  demand: 13
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 4
founderFit: [technical-heavy, content-heavy]
featured: false
---

# PolyShip — localization autopilot for indie game studios

## 1. One-liner

Turns your game's text files into UI-tested, build-ready translations in a dozen languages — no translator emails, no broken menus.

## 2. Trend signal — why now?

Localization is the single highest-ROI growth lever an indie dev has, and it's still painful enough that most solo devs skip it. The signals are loud:

- **Money is sitting on the table.** Industry write-ups peg a typical indie five-language localization spend at **$12k–$25k**, returning **$120k–$400k+ in year-one revenue**. Localizing into Simplified Chinese has taken catalogs from "5% or less of units sold in China" to "20% or more." Russian players "leave low ratings for games that lack a Russian version." (gamediscover.co, homebusinessmag.com, contextheroes.com)
- **The price is the wall.** Indie-quality human-led localization runs **$0.10–$0.15/word**. itch.io threads are full of solo devs saying it "would delay the game for months, if not years, and cost way more money than being earned back," and that "even at rock-bottom prices, large word counts make translation impractical." (itch.io community posts)
- **The tech just crossed the line.** 2026 game-aware LLMs comprehend dialogue, quests, and lore while holding terminology consistent — the exact thing that used to require a human team. Cheap inference makes per-word cost collapse from $0.12 to fractions of a cent.

The incumbents prove the wallet exists but don't serve this customer: **Smartling requires a $60K+ annual contract and 4–8 week implementation** — "particularly unsuitable for indie developers." Crowdin and Lokalise are dev-team TMS platforms that still leave the dev doing all the translating and all the QA.

```
Provenance:
  - Signal 1 (Demand): Indie devs on itch.io repeatedly say localization "would delay the game for months" and "cost way more than earned back"; Russian players downrate un-localized games — https://itch.io/post/8025693 / https://newsletter.gamediscover.co/p/case-study-how-localization-amps — observed 2026-06-14
  - Signal 2 (Feasibility): 2026 game-aware LLMs preserve dialogue/quest/lore consistency at near-zero per-word inference cost; text-overflow is "the single most common localization bug" and goes uncaught until build — https://crowdin.com/blog/game-localization / https://sandvox.io/glossary/character-limit-localization/ — observed 2026-06-14
  - Signal 3 (Economic): Typical indie 5-language spend $12k–$25k → $120k–$400k+ y1 revenue; Smartling's $60K+/yr contracts prove enterprise willingness-to-pay while leaving the SMB wallet uncovered — https://calcix.net/guides/business-startup/global-game-expansion-profitability-guide / https://www.smartling.com/blog/best-game-localization-services — observed 2026-06-14
  Category: Tech-unlock
```

## 3. The opportunity

Two camps exist and both miss the indie. **Agencies** (LocalizeDirect, Allcorrect, OneSky's human tier) charge $0.10–0.15/word — fine for a funded studio, fatal for a one-person team with a 60k-word RPG. **TMS platforms** (Crowdin, Lokalise, Smartling, Phrase) are string-management software: they store your keys, give you an editor, and hand the actual translation and QA back to you. Either you pay agency money or you become a localization project manager. Most solo devs do neither and ship English-only, leaving the 2x–4x revenue lift on the floor.

The 10x play is to **close the entire loop with one upload**: ingest the game's native localization files (Unity `.po`/CSV, Godot, Ren'Py, Unreal, generic JSON/CSV), translate with a game-tuned LLM that preserves `{player_name}` variables and `<b>` tags, hold a per-project glossary so "Mana" is never accidentally "Magic," **render each translated string in a sandbox UI to catch overflow and truncation before the dev ever opens the engine**, and emit drop-in build-ready files. The thing TMS platforms structurally don't do — render-test the translation against the game's UI constraints — is exactly the thing that causes "the single most common localization bug." That's the wedge and the load-bearing AI work in one.

## 4. Target market

- **Primary customer:** Solo and 2–4 person indie game studios shipping text-heavy games (RPGs, visual novels, sims, roguelikes, narrative adventures) on Steam and itch.io, English-first, $0–$200k lifetime revenue, with 10k–150k words of in-game text.
- **Why they buy:** "I want Chinese and Russian because that's where my wishlists are, but an agency quote was $4,000 and I'm not paying a translator to re-do work every time I patch in new content." Localization is the clearest revenue lever they have and the one they keep postponing.
- **Rough TAM reasoning:** ~19,000 games ship on Steam each year, the large majority indie; itch.io adds tens of thousands more. Even a few percent of new text-heavy releases per year that would pay $50–$300/project or a small subscription is a comfortable sub-$5M ARR pool — this is a niche too small for a VC-scale localization player to chase but perfect for a bootstrapper.
- **Why now for them:** Wishlist-to-region data is more visible than ever (Steam analytics, gamediscover), so devs *know* their Chinese/Russian/Portuguese demand. The cost-to-act just dropped 20–50x with game-aware LLMs. The gap between "I know I should" and "I can afford to" finally closed.

## 5. Product sketch (MVP)

- **One-upload ingest** of common indie formats: Unity `.po`/CSV, Godot `.csv`/`.po`, Ren'Py, Unreal, plus generic JSON/CSV/XLIFF — auto-detects keys, variables, and markup.
- **Game-tuned LLM translation** into the high-ROI "core" set (Simplified Chinese, Russian, Brazilian Portuguese, Spanish-LatAm, German, French, Japanese, Korean) with one click.
- **Variable & markup lock:** `{name}`, `%d`, `<color>`, BBCode and engine tags are preserved, never translated, validated on output.
- **Project glossary & lore memory:** lock canonical terms (item names, character names, spells) so they stay consistent across every string and every future patch.
- **UI overflow render-test:** the dev sets per-string or per-screen character/width budgets; PolyShip flags every translation that would overflow or truncate and offers a shorter rewrite — *before* it hits the build.
- **Continuous re-sync:** on the next content patch, only new/changed strings get translated, glossary-consistent, in minutes — solving the "translator won't re-do work every two weeks" complaint.
- **Steam store-page pack:** translated store description, tags, and capsule text — the discovery half of localization most tools ignore.
- **Build-ready export** back to the exact file format and folder structure the engine expects. Drop in, build, ship.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — it collapses back into a TMS where a human does the translating. The LLM does three jobs no rules engine can: (1) **context-faithful translation** that respects game tone, register, and lore across tens of thousands of strings; (2) **glossary-consistent re-translation** of incremental content so a patch doesn't drift terminology; (3) **constraint-aware rewriting** — given "this string must fit 18 characters," produce a natural translation that *fits*, the exact judgment call that today forces an expensive human rework cycle. The render-test harness is plumbing; the intelligence that makes a translation both correct and fit-for-UI is the LLM, and it's the part competitors structurally don't attempt.

## 7. Localization angle (if any)

N/A as a geography play — the product is global by nature (English-speaking devs are everywhere). The irony is the product *is* localization, just sold to creators rather than enterprises. No India/LatAm-first wedge; the customer is the global indie dev wherever they are, and pricing is already at a creator-friendly point.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Hybrid. **Per-project credits** for the one-shot crowd ($79 for up to ~15k words/2 languages; $249 for a full RPG across the core set) **plus a $39/mo Studio subscription** for devs in active development who want continuous re-sync and glossary persistence across patches. Compare to a $4,000 agency quote — the value framing sells itself.
- **ACV:** Blended ~$350–$600/year. One-shotters buy a pack near launch; subscribers stick for a 6–18 month dev cycle.
- **Rough math to $1M ARR:** ~2,200 paying customers/year at a blended ~$450 = ~$1M. Against ~19k Steam indie releases + itch.io, that's low-single-digit penetration of *new* releases plus the back-catalog re-localizing.
- **Rough math to $5M ARR:** Needs the subscription mix to dominate (continuous-content games, live-service indies), an agency-grade "human review" upsell at $0.04–0.06/word margin, and a publisher/porting-house tier that runs many titles through one account. ~6,000–9,000 active paying studios.
- **Expansion path:** more languages, voiceover/subtitle localization (TTS is cheap now), QA-pass-as-a-service, and a "human polish" marketplace where PolyShip routes the AI draft to a vetted linguist for a markup — capturing the customers who graduate past pure-AI.

## 9. Go-to-market wedge — first 100 customers

- **itch.io + Steam "coming soon" scrape, personalized proof.** Pull text-heavy upcoming/recent releases, run the dev's *own public demo strings* (devlogs, store text) through PolyShip, and send a 60-second before/after: "here's your store page in Simplified Chinese + the 3 buttons that would've overflowed in German." Tangible, specific, and free to produce. Expect a strong reply rate from a "here's your thing, already done" cold message.
- **Live where the complaints are.** r/gamedev, r/IndieDev, the itch.io community forums, and TIGSource are full of recurring "is localization worth it / how much does it cost" threads. Show up with a genuinely useful answer and a free-tier link. These threads already rank and recur — durable, not a one-time hit.
- **Engine-community plugins.** Ship a Godot asset-library plugin and a Unity Asset Store connector that export straight to PolyShip. Godot's indie-heavy, price-sensitive community is the ideal beachhead and an under-served distribution surface.
- **Bundle/jam partnerships.** Sponsor a localization prize at game jams (Ludum Dare, GMTK Jam) and offer jam finishers free credits — the exact moment a dev decides whether to take a prototype global.

## 10. Build complexity — justification

Medium. The translation, glossary, and variable-locking are off-the-shelf LLM orchestration. The real engineering is the **format adapters** (each engine's localization file format has quirks) and the **UI render-test harness** that approximates text fit per language — non-trivial but bounded, no research breakthrough required. A technical pair could ship a credible v1 (2–3 formats, core languages, overflow flagging, build export) in roughly 3–4 months, expanding format coverage from there.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Standard SaaS; dev owns and uploads their own content. |
| Ethical — no harm / dark patterns | ✅ | Transparent it's AI translation; human-polish upsell offered, not hidden. |
| Market exists (evidence above) | ✅ | Verbatim cost complaints + documented 2–4x revenue lift + paying incumbents. |
| 1–5 person team can build this | ✅ | Technical pair, ~3–4 months to v1. |
| Launchable with <$50K / ₹40L | ✅ | Inference + hosting + a laptop. Main cost is the founders' time. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, repeated, money-on-the-table pain — but it's a "should do" growth lever, not hair-on-fire; devs survive shipping English-only, which softens urgency. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: verbatim cost complaints, documented revenue lift, paying agencies, an enterprise incumbent at $60K+. A skeptic nods. |
| Build feasibility | 15 | 11/15 | LLM core is easy; format adapters + render-test harness are the honest 3–4 month grind. |
| Distribution clarity | 15 | 11/15 | Named channels (itch/Steam scrape, r/gamedev, engine stores) with a strong "already-done-for-you" hook; conversion math still unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarks beautifully against $4k agency quotes, but indie willingness-to-pay-recurring is the risk; one-shot buyers churn by design. |
| Time to first revenue | 10 | 7/10 | A scoped MVP (one engine format + core languages) can pre-sell to devs in active development within weeks of a working demo. |
| Defensibility | 10 | 4/10 | Soft moat at best: glossary/project lock-in and engine-plugin distribution. A funded TMS could bolt on render-testing in months — speed and niche focus are the only edge. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (format adapters, render harness, LLM orchestration) · `content-heavy` (the GTM is showing up in dev communities with genuinely useful before/afters).

### Key assumptions to validate (3–5)

1. **Assumption:** Solo devs will trust pure-AI translation enough to ship it without a human pass. **How to test:** Offer 30 devs a free localized build of their game; measure how many actually ship it vs. ask for human review.
2. **Assumption:** The UI render-test is the differentiator devs care about, not just cheaper translation. **How to test:** A/B two landing pages — "cheap AI game translation" vs. "translations that won't break your UI" — measure signup rate.
3. **Assumption:** Enough devs want *continuous* re-sync to support a subscription, vs. one-and-done credit buys. **How to test:** Track what % of the first 50 paying customers return for a second patch within 90 days.
4. **Assumption:** Format-adapter coverage for 2–3 engines captures the majority of the addressable indie market. **How to test:** Poll r/gamedev on engine usage among text-heavy projects; confirm Unity+Godot+Ren'Py covers the bulk.

### Risk flags

1. **Defensibility / fast-follow:** Crowdin or Lokalise could add AI render-testing; the moat is execution speed and indie-native focus, not technology.
2. **Quality perception:** One viral "AI ruined my game's translation" thread could poison the well. Mitigate with the human-polish upsell and conservative claims.
3. **Platform dependency:** Heavy reliance on third-party LLM APIs for cost and quality; a price hike or quality regression hits margins directly.
4. **Market timing:** General LLMs keep improving — a dev might just paste strings into ChatGPT for a tiny game. The defense is everything around the translation (format, glossary, overflow, re-sync), not the translation itself.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who ships indie games (or has) — domain credibility sells in dev communities
Time to revenue:        6–10 weeks from working demo (pre-sell to in-development studios)
Capital to launch:      $5–10K ($/₹4–8L) — mostly inference + hosting + founder time
Top 3 assumptions to validate first:
  1. Will devs ship pure-AI translations? — free localized build to 30 devs, measure ship rate
  2. Is UI render-testing the hook, or just price? — A/B landing pages on the two value props
  3. Subscription vs. one-shot mix — track 90-day return rate of first 50 buyers
Kill criteria:
  - Abandon if <15% of 30 devs given a free localized build actually ship it
  - Abandon if neither one-shot nor subscription clears a blended $300 ACV at 50 customers
  - Abandon if a funded TMS ships indie-priced render-tested AI localization before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a no-backend demo: hand-wire one engine format (Godot CSV) → LLM translate to Simplified Chinese + German → flag overflow against fixed button widths → export. Record a 90-second before/after on a real public indie game's strings.
- **Day 3–4:** Cold-DM 40 devs with "coming soon" text-heavy Steam pages, each getting *their own* store page localized + a screenshot of which buttons would break. Drop the same demo in two recurring r/gamedev "is localization worth it" threads.
- **Day 5:** Decide go / no-go. **Go if** ≥6 of 40 devs reply asking "how do I get this for my whole game" *and* ≥2 say they'd pay today. **No-go if** the dominant reaction is "I'd just use ChatGPT" — that means the wrapper-risk is real and the product needs a sharper wedge.

The result is falsifiable: either in-development studios ask to buy, or they tell you they'd DIY it for free.
