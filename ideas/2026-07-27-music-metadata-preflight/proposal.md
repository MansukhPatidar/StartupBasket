---
title: "CleanCut — royalty preflight for self-releasing musicians"
slug: music-metadata-preflight
date: 2026-07-27
category: Creator Economy / Global
complexity: Medium
score: 69
verdict: VALIDATE
confidence: Medium
oneLiner: "Catches the metadata and split errors that strand your streaming royalties — while you can still fix them."
tags:
  vertical: Creator Economy
  model: SaaS
  geography: Global
  secondary: [AI-agent, Solo-builder, Consumer, Music-tech]
axes:
  problem: 15
  demand: 12
  build: 11
  distribution: 10
  revenue: 10
  time: 7
  defensibility: 4
founderFit: [technical-heavy, content-heavy, domain-expertise-required]
featured: false
---

# CleanCut — royalty preflight for self-releasing musicians

## 1. One-liner

Catches the metadata and split errors that strand your streaming royalties — while you can still fix them.

## 2. Trend signal — why now?

The DIY release wave collided with a royalty-matching crisis, and the two facts sit right next to each other.

- **65% of music released in 2026 is self-released.** DistroKid alone serves 2M+ registered artists ($97.2M revenue in 2024). These artists get a blank metadata field and a "did you register with the MLC and a PRO?" checkbox — and no help filling either.
- **$1B+ in royalties go unpaid every year** because of bad metadata, missed registrations, or artists not knowing where to sign up. The MLC's $424M "black box" mostly went to major publishers *because independent songwriters never registered.* Indie artists who only sit with a PRO collect roughly half their available publishing income.
- **You can't cheaply fix it after release.** DistroKid/TuneCore state plainly: you cannot delete and re-upload with corrected metadata, and re-uploading with a changed ISRC makes Spotify treat it as a brand-new track — your streams reset to zero. The error is only cheap to fix in the 10 minutes *before* you upload.
- **The cost floor dropped.** LLM inference is 5–10x cheaper than 2023 (DeepSeek-V4 at $0.09/M tokens, Gemini Flash at $0.06/M). Parsing a release's credits, explaining IPI vs ISWC vs ISRC in plain English, and validating splits is now a sub-cent-per-release operation — cheap enough to sell at a consumer price.
- **Money is moving into rights-data.** MusicInfra (backers: The Raine Group, SNÖ, UTA Ventures), Fix Music, Claimy, Rights'Up all raised to chase unmatched royalties — but every one targets publishers and catalog funds, not the DIY artist.

Provenance:
  - Signal 1 (demand): Over $1B/yr in royalties unpaid from bad metadata; MLC $424M black box mostly went to majors because indies never registered — https://www.omarimc.com/black-box-royalties-explained/ and https://blog.groover.co/en/tips/music-publishing-royalties-explained-what-independent-artists-are-missing/ — 2026-07-27
  - Signal 2 (feasibility): LLM inference 5–10x cheaper (DeepSeek-V4 $0.09/M, Gemini Flash $0.06/M) makes per-release parse/validate/explain a sub-cent operation — https://medium.com/@anyapi.ai/cheapest-ai-apis-in-2026-developers-should-know-45c5eb7009b4 — 2026-07-27
  - Signal 3 (economic): MusicInfra raises round (Raine, SNÖ, UTA); Fix Music, Claimy, Rights'Up all funded on the unmatched-royalty thesis — but all target publishers/funds, not DIY artists — https://musically.com/2025/09/18/rights-clearinghouse-musicinfra-raises-funding-round/ — 2026-07-27
  Category: Underserved niche

## 3. The opportunity

The whole rights-data industry is aimed at the wrong end of the market. Fix Music, MusicInfra, Claimy — they sell to publishers and investment funds sitting on catalogs worth millions, cleaning up *after* the money is already stranded in the black box. That's post-mortem work on someone else's catalog.

Nobody stands at the one moment that actually matters for a DIY artist: **the 10 minutes before they click upload on DistroKid.** That's the last cheap moment to fix a wrong split, a missing songwriter credit, an unregistered publishing side, or a title that won't match at the PRO. After upload, the fix costs you your stream count or months of MLC dispute tickets.

Why is that moment empty? Because the two players adjacent to it are structurally disincentivized:
- **Distributors** (DistroKid, TuneCore) profit on release *volume*. A validator that slows the upload flow and tells you to go register elsewhere first is friction they don't want.
- **Publishing admins** (Songtrust, CD Baby Pro) want the 15% forever-cut, not a $10/mo flat fee — and their DIY onboarding is famously slow and confusing (4-month support responses, canned replies, TrustPilot/Reddit complaint pile).

An AI-first tool can do the boring, load-bearing explanation-and-validation work for a flat fee, sit *before* the distributor instead of competing with it, and take zero percentage of the artist's royalties. That's a genuinely open lane.

## 4. Target market

- **Primary customer:** Self-releasing DIY musician / producer, US-first (MLC applies), 1K–500K annual streams, releasing 2–12 tracks a year through DistroKid/TuneCore/CD Baby, no manager or label, treats music as side income or a growing full-time hustle.
- **Why they buy (their words):** "I found out two years later I'd never registered with the MLC and left money on the table." "I put the wrong split on a collab and now my co-writer and I can't get it matched." "I don't understand IPI vs ISWC vs ISRC and DistroKid just let me upload anyway." The pain is a delayed, expensive discovery of a mistake that was trivially preventable.
- **Rough TAM reasoning:** DistroKid alone reports 2M+ artists; 65% of all music is self-released. Even a conservative several million active self-releasers globally, of whom a serious minority release often enough and earn enough to care about royalties, is a multi-hundred-thousand-buyer addressable pool. This is a niche VCs underprice because ACV is low — perfect for a bootstrapper.
- **Why now for them:** They released more this year than ever (release cadence is up), the black-box story has gone mainstream, and their peers on YouTube/Reddit are now openly talking about "the money you're leaving on the table."

## 5. Product sketch (MVP)

- **Preflight scan:** paste your release details (or connect the distributor draft) and get a checklist of the errors that strand royalties — missing/wrong ISRC, blank or inconsistent songwriter credits, splits that don't sum to 100%, artist-name mismatches that break DSP matching.
- **Plain-English identifier coach:** explains IPI vs ISWC vs ISRC vs UPC in the context of *your* release, and tells you exactly which one you still need and where to get it.
- **Registration walkthrough:** step-by-step for MLC + a PRO (both are required, and most indies do neither correctly), with the exact fields pre-filled from your release data so you copy-paste instead of guessing.
- **Split-sheet generator:** produces a clean, signable split sheet for collaborators with IPI capture — the artifact that prevents the "unmatched co-writer" royalty freeze.
- **Consistency guard:** flags when this release's artist name/title formatting differs from your prior releases (the silent killer that splits your streams across two "artists").
- **Pre-upload readiness score:** one green/amber/red verdict — "you're clear to upload" or "fix these 3 things first."

## 6. AI angle — what's load-bearing

Remove the AI and this is a static checklist and a PDF form — dead on arrival, because the whole reason artists skip this today is that the *rules are confusing and situational*. The load-bearing work is: (1) reading a messy, free-text release description and normalizing it into structured metadata; (2) reasoning about which identifiers a *specific* release actually needs given its collaborators, cover-vs-original status, and territories; (3) generating the plain-English "here's what's wrong and why it costs you money" explanation tuned to this artist's exact situation. That contextual explanation-and-validation is exactly what LLMs now do for a fraction of a cent — and it's the thing a human music lawyer used to charge $200 for.

## 7. Localization angle (if any)

US-first is the right wedge because the MLC (a uniquely US mechanical-royalty body) is the single biggest source of the black-box problem, so the "you never registered" pain is sharpest there. But the design is global-portable: the identifier logic (ISRC/ISWC/IPI) is international, and the localization play is swapping the "which collection society" module per territory (PRS in the UK, GEMA in Germany, etc.). That's a v2 expansion lever, not a v1 requirement. Not a language/payment-rail play.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $9/mo or $79/yr for an active artist (unlimited preflights + registration guidance). A one-off "single-release checkup" at $19 for the occasional releaser, as a top-of-funnel wedge.
- **ACV:** ~$79/yr blended (annual plans dominate; music is seasonal, monthly churns).
- **Rough math to $1M ARR:** ~12,700 paying artists at $79/yr. Against a pool of millions of active self-releasers, that's a low-single-digit-percent penetration of the *serious* segment.
- **Rough math to $5M ARR:** ~63,000 paying artists, or a lower artist count plus an ISRC/UPC issuance add-on and a per-release "verified metadata" badge that distributors or sync libraries might co-market. Requires becoming the default "did you do this right?" step in the indie release ritual.
- **Expansion path:** ongoing catalog monitoring (alert when a new MLC unmatched pool appears that might be yours), team/label-lite tier for artists managing a few other acts, and affiliate revenue from the PRO/distributor sign-ups you drive.

## 9. Go-to-market wedge — first 100 customers

- **Reddit where they already vent:** r/WeAreTheMusicMakers, r/independentmusic, r/DistroKid, r/musicproduction. Answer the recurring "did I mess up my metadata / how do I register with the MLC" threads with a genuinely useful reply + a free preflight. These threads recur weekly.
- **YouTube creator partnerships:** the DIY-royalty-education niche (channels doing "the money you're leaving on the table" videos) already has the exact audience warmed up. Offer them an affiliate cut of annual plans; their viewers arrive pre-sold on the problem.
- **Free single-release checkup as the hook:** one free scan surfaces the artist's actual errors ("your split doesn't sum to 100%, you're not registered with the MLC") — the report itself is the sales pitch. Convert to paid on their next release.
- **Distributor-adjacent SEO/comparison:** rank for "DistroKid metadata mistakes," "how to register with the MLC," "Songtrust alternative flat fee" — long-tail, high-intent, and the incumbents (who profit on volume) aren't writing honest content here.
- **Producer/beat-marketplace communities:** BeatStars-adjacent Discords where collab-splits confusion is a constant fight; the split-sheet generator is the wedge product there.

## 10. Build complexity — justification

Medium. The web app, LLM parsing/explanation, and split-sheet PDF are all off-the-shelf and shippable by a solo builder in 6–8 weeks. The real work is **domain accuracy** — encoding the MLC/PRO registration rules and identifier logic correctly, because a tool that gives *wrong* royalty advice is worse than none. That needs a music-rights advisor and careful testing against real release scenarios, pushing it to a small-team, ~3–4 month honest v1. No heavy infra, no proprietary data required at launch.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Advisory/validation tool; not collecting royalties or holding rights. |
| Ethical — no harm / dark patterns | ✅ | Helps artists collect money they're owed; no percentage-of-royalty rent. |
| Market exists (evidence above) | ✅ | $1B+/yr stranded, funded incumbents on the enterprise end, 2M+ DistroKid artists. |
| 1–5 person team can build this | ✅ | Web app + LLM + PDF, plus a rights advisor for accuracy. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf stack; main cost is the advisor's time. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring, and expensive — but the pain is *delayed*; the artist feels it months later, not at the upload moment. Getting them to act pre-emptively is the whole challenge. |
| Demand evidence | 15 | 12/15 | Strong: $1B+ stranded, funded incumbents, dense forum complaints. Docked because the evidence is about the *problem*, not proof that DIY artists will pay a flat fee to prevent it. |
| Build feasibility | 15 | 11/15 | App is easy; correctness is not. Wrong advice is a liability, so domain rules must be right — that's the gating work. |
| Distribution clarity | 15 | 10/15 | Named subreddits + creator affiliates + free-scan hook are concrete, but conversion from a low-urgency preventive product is genuinely uncertain. |
| Revenue mechanics | 15 | 10/15 | Pricing benchmarked against Songtrust/DistroKid wallets and clearly affordable, but low ACV means you need real volume, and consumer music tools churn. |
| Time to first revenue | 10 | 7/10 | Free scan → paid can convert in weeks, but the ~3–4 month accuracy-hardening delays a *safe* launch. |
| Defensibility | 10 | 4/10 | Copyable. Moat is accumulated rule-accuracy, brand trust in the community, and being the default ritual step — thin at month 3, real only if you win the niche's trust. |
| **Total** | **100** | **69/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** DIY artists will pay a flat fee *pre-emptively* to prevent a delayed, invisible loss. **How to test:** run the free single-release checkup on 100 artists from the target subreddits; measure how many, after seeing their real errors, buy an annual plan within 14 days. This is the make-or-break assumption.
2. **Assumption:** the preventive framing beats the recovery framing (i.e., "fix it before upload" sells better than "recover what you lost"). **How to test:** A/B two landing pages against the same Reddit/YouTube traffic; compare signup rate.
3. **Assumption:** the domain rules can be encoded accurately enough that the tool never gives royalty-losing advice. **How to test:** build the rule set with a rights advisor, then blind-test against 50 real past releases with known-correct answers; target zero harmful errors.
4. **Assumption:** creator/affiliate distribution converts cheaply enough to survive the low ACV. **How to test:** one paid partnership with a DIY-royalty YouTuber; measure CAC against the $79 ACV.

### Risk flags

1. **Low urgency / preventive-product risk:** the single biggest threat. People don't buy insurance against a loss they can't see yet. If the free scan doesn't scare them into acting, the funnel stalls — this is why it's VALIDATE, not GO.
2. **Platform dependency:** distributors could bolt a "metadata check" into their own upload flow and eat the wedge. Mitigant: they're disincentivized to add upload friction, but it's not impossible.
3. **Liability:** wrong advice that costs an artist royalties is reputational poison in a tight-knit community. Accuracy is non-negotiable and slows launch.
4. **Low ACV + consumer churn:** music income is seasonal; monthly plans will churn hard. Annual-first pricing is essential and still risky.

## 14. Structured verdict

```
Score:                  69/100
Verdict:                VALIDATE
Confidence:             Medium
Best-fit builder:       Technical founder who is (or partners with) a working DIY musician / music-rights advisor, comfortable doing community-led content marketing
Time to revenue:        Free scan can convert in weeks; safe full launch ~3–4 months
Capital to launch:      ₹3–6 lakh ($4–7K), mostly the rights advisor's time
Top 3 assumptions to validate first:
  1. Artists will pay pre-emptively — run free checkup on 100 target-subreddit artists, measure 14-day paid conversion
  2. Preventive framing > recovery framing — A/B two landing pages on identical traffic
  3. Rules can be encoded without harmful errors — blind-test against 50 real past releases
Kill criteria:
  - Abandon if <5% of artists who see their real errors in a free scan buy within 14 days
  - Abandon if a rights advisor can't get the rule set to zero harmful-advice errors on the 50-release blind test
  - Abandon if a major distributor ships an equivalent built-in metadata validator before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** build a dead-simple "free single-release checkup" — a form + LLM that returns the 3 most likely royalty-stranding errors and whether the artist is MLC/PRO-registered. No payments, no accounts.
- **Day 3–4:** seed it into 4 target subreddits and 2 DIY-royalty YouTuber comment sections by genuinely answering the recurring "did I mess up my metadata / how do I register" questions, with the free scan as the tool. Track scans run.
- **Day 5:** put a "$79/yr to run this on every release + registration walkthrough" waitlist/pre-order button behind the scan result. **Go/no-go: ≥5% of artists who complete a scan click through to pre-order or join the paid waitlist.** Below that, the preventive-product risk is real and the idea sits until the framing or the funnel changes.

The falsifiable result: not "people liked the tool" — but a hard pre-order/waitlist conversion rate off real artists seeing their own errors.
