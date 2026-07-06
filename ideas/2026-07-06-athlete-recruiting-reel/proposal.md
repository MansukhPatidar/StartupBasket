---
title: "ReelPull — recruiting-reel cutter for youth-athlete parents"
slug: athlete-recruiting-reel
date: 2026-07-06
category: Creator Economy / US — Youth-Athlete Recruiting Video
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Upload any game footage plus your kid's jersey number, get a coach-ready recruiting reel back in minutes."
tags:
  vertical: Creator Economy
  model: SaaS
  geography: US
  secondary: [AI-agent, Consumer, Video-AI, Self-serve, Prosumer]
axes:
  problem: 15
  demand: 12
  build: 10
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy, content-heavy]
featured: false
---

# ReelPull

## 1. One-liner

Upload any game footage plus your kid's jersey number, get a coach-ready recruiting reel back in minutes.

## 2. Trend signal — why now?

Two things had to become true, and both did in the last 18 months.

**Footage went cheap and everywhere.** Veo, Trace, Hudl and XbotGo put full-game AI capture into every club and travel team in the country — Hudl alone claims 170,000+ college teams scouting on it, and Veo/XbotGo have six-figure installed bases of parents and coaches auto-recording games. A decade ago, getting usable full-field video of your kid's game meant a parent with a camcorder freezing on the sideline. Now the footage exists by default. The raw material is solved.

**Turning that footage into a *recruiting* reel is still manual labor.** Trace's own competitive page against Veo says it out loud: *"For every new match, a player needs to manually find highlights, edit footage, and then upload that footage onto a video hosting platform to send to college coaches"* and *"Veo does not offer any features around college recruiting… these limitations force many Veo customers to use time-consuming tools like iMovie or hire editors."* The capture platforms deliberately stop at the panorama and the raw clip. Somebody still has to cut the 3–5 minute reel coaches actually watch.

So a cottage industry of human editors sits in the gap, charging **$150–$500 per reel**, **$30–$450 per game just to pick clips**, and **$1,000–$5,000 for full-service packages** — with 2–4 week turnaround being standard. That's a lot of money and waiting for a task that is now, in 2026, a solvable AI problem: multimodal video models (Gemini, GPT-4o Vision) already detect goals, saves and key plays in sports footage, and open-source repos doing exactly this exist on GitHub. Jersey-number tracking — the one hard part — got cheap this year.

Provenance:
  - Signal 1 (Demand): Recruiting-reel editing services charge $150–$500/reel, $30–$450/game for clip selection, $1,000–$5,000 full-service, 2–4 week turnaround; coaches watch only first 20–30 sec — https://prospectreels.com/pricing/ , https://www.veo.com/article/how-much-does-a-recruiting-video-cost , https://recruitreels.com/sports-video-pricing/ — 2026-07-06
  - Signal 2 (Feasibility): Full-game footage exportable as MP4 from Veo/Hudl; multimodal video LLMs (Gemini/GPT-4o Vision) detect sports events off-the-shelf; open-source highlight-generation repos exist — https://support.veo.com/hc/en-us/articles/4451733961361-How-to-download-your-Veo-recordings , https://github.com/dennyschwender/sport-video-AI-analysis — 2026-07-06
  - Signal 3 (Economic): Capture platforms scaled/funded on hardware but explicitly avoid recruiting reels ("Veo does not offer any features around college recruiting"); $4.0B in NCAA athletic scholarships to 197,000 athletes/yr, over 40,000 coaches recruiting via video — https://site.traceup.com/trace-vs-veo-for-recording-soccer-games/ , https://ncaaorg.s3.amazonaws.com/compliance/recruiting/NCAA_RecruitingFactSheet.pdf — 2026-07-06
  Category: Tech-unlock

## 3. The opportunity

The gap is precise: **capture is solved, recruiting-reel assembly is not.**

Veo, Hudl and Trace are the incumbents — but they're incumbents in the *wrong* layer. They sell cameras and team subscriptions to coaches and clubs. Their business is the panorama for tactical review. Recruiting reels are a different buyer (the parent, not the coach), a different format (3–5 min, player circled every clip, coach-formatted), and a different moment (junior year, not every week of the season). They've stayed out on purpose.

Veo shipped **Player Spotlight** — shirt-number detection with auto per-player highlight reels — so this isn't a green field. But Player Spotlight has three fatal gaps for the recruiting use-case, and each is structural, not a bug they'll patch:

1. **Camera-locked.** You must own/subscribe to Veo. Every athlete on Hudl, Trace, XbotGo, a livestream, or a parent's iPhone is excluded. That's the majority of the market.
2. **Development reel, not recruiting reel.** It produces "standout moments," not a coach-formatted cut — no jersey spotlight/circle per clip, no intro card with position/grad-year/GPA/contact, no forced 3–5 min structure with best play first, no clean download for a recruiting profile.
3. **Team-admin gated.** Parents can't self-serve. The person who feels the pain and holds the credit card can't push the button.

The 10× is: **platform-agnostic, parent-self-serve, recruiting-formatted, minutes not weeks.** Bring footage from anywhere, get back the exact artifact a college coach expects, for the price of a pizza instead of $300 and a month.

## 4. Target market

- **Primary customer:** US parents of high-school club/travel athletes in the recruiting window (sophomore–junior year) — soccer, basketball, lacrosse, volleyball, football, softball. Household already spends thousands/yr on club fees, tournaments and travel; already has footage from the team's Veo/Hudl/Trace or their own phone.
- **Why they buy:** "The season is 20 games, my kid touches the ball in maybe 8 moments a game, coaches watch 30 seconds, and I either lose a Saturday to CapCut every week or pay an editor $300 and wait a month — every time there's new footage." The pain repeats after *every* game and tournament, and the recruiting clock is unforgiving (D1 contact opens June 15 after sophomore year).
- **Rough TAM reasoning:** ~197K athletes get NCAA scholarships yearly, but the recruiting-*hopeful* funnel is an order of magnitude larger — millions of HS club athletes across sports whose families believe a reel matters. Even 100–200K paying families is a large business at consumer price points.
- **Why now for them:** Their team started auto-filming in the last year or two, so for the first time the footage exists — but nobody handed them the reel. They're sitting on hours of MP4s they don't know what to do with.

## 5. Product sketch (MVP)

- **Upload from anywhere:** drag in an MP4 (Veo/Hudl export, iPhone clip, YouTube-unlisted link, tournament stream). No camera lock-in.
- **Tell it who:** enter jersey number + team color (home/away kits); AI finds and tracks that player across the footage.
- **Auto play-detection:** model flags the kid's touches, goals, assists, saves, tackles, rebounds — sport-specific.
- **Auto-circle / spotlight:** every clip highlights the player (arrow or spotlight) the way coaches demand — the single most-cited "must-have."
- **Coach-format reel:** 3–5 min cut, best play first, intro card (name, position, grad year, height, GPA, club, contact), music-off version for Hudl upload.
- **Per-game or full-season:** generate a single-game reel same-day or a cumulative season reel; re-run free when new footage lands.
- **Export + share:** MP4 download + a clean shareable link formatted for coach outreach.
- **Multi-sport templates:** soccer/basketball/lacrosse/volleyball on day one; add sports as demand shows.

## 6. AI angle — what's load-bearing

Remove the AI and this is a $300 human editor with a 3-week backlog — which is exactly the incumbent. The AI *is* the product:

- **Jersey-number + kit tracking** across a full-field panorama is the hard, load-bearing capability — it's what lets a parent skip four hours of scrubbing. This is precisely the thing that got cheap in the last 12 months.
- **Event detection** (goals, saves, key touches) via multimodal video models replaces the "watch 90 minutes and mark the good bits" labor that editors charge $30–$450/game for.
- **Auto-circling and reel assembly** turn detection into the finished, coach-formatted artifact.

No AI, no product. That's the test, and it passes.

## 7. Localization angle (if any)

N/A for v1 — this is a US play. The recruiting-video economy, the NCAA scholarship structure, the coach-outreach norms, and the willingness to pay are American-specific. A UK/EU academy version and an India/cricket-and-badminton version are real later expansions (the footage-is-cheap trend is global), but forcing localization now would blur a sharp US wedge. Geography is deliberately US-only for the wedge, not by neglect.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Consumer prosumer tiers. **$19 one-off** per single-game reel (impulse buy vs. $150 human editor); **$29/mo season pass** (unlimited reels through a season, re-cut as footage arrives); **$99 recruiting-season package** (full-season cumulative reel + re-cuts + coach-format exports). Radically undercuts the $150–$500 human market while carrying 80%+ software margin minus inference cost.
- **ACV:** Blended ~$120/yr — most buyers take a season pass or two-plus one-offs across a recruiting cycle.
- **Rough math to $1M ARR:** ~8,300 paying families × $120/yr = $1.0M. Against a funnel of millions of club athletes, that's <1% penetration.
- **Rough math to $5M ARR:** ~42,000 families × $120, *or* fewer families at higher ACV by adding sports, multi-year recruiting packages, and a coach-outreach upsell (the $1,000–$5,000 full-service tier that humans charge for, delivered as software + light human QA).
- **Expansion path:** one-off → season pass → multi-year recruiting package → outreach/coach-list add-on → younger siblings and new sports in the same household. A family in the funnel for 3 recruiting years is worth $300–$600.

## 9. Go-to-market wedge — first 100 customers

- **Club team admins as a channel, not the buyer.** DM/email the ~thousands of US club directors on TeamSnap/SportsEngine: "Your teams already film on Veo/Hudl — give every parent a free recruiting reel from footage you already have." Club shares a link, parents self-serve. One club = 15–20 warm families.
- **Recruiting-hopeful subreddits and Facebook groups.** r/collegesoccer, r/BasketballTips recruiting threads, and the massive sport-specific "college recruiting" Facebook parent groups (tens of thousands of members each) are full of parents literally asking "how do I make a highlight video." Post a before/after: raw Veo game → finished reel in 4 minutes.
- **Cold outreach to the human editors' customers.** The $150–$500 editors advertise publicly; their unhappy "$300 and I waited a month" customers are findable. Run a "same reel, $19, before you finish reading this" comparison.
- **Tournament-day pop-ups.** Big club tournaments = thousands of families in one field complex over a weekend. QR code on a flyer: "Reel of today's game before you drive home." Instant, emotional, impulse purchase.
- **Recruiting-service affiliate.** NCSA/CaptainU-adjacent coaches and consultants already tell families "you need a reel" — pay them a cut to point families at ReelPull instead of a $300 editor.

If I can't get a club director to forward one link, the idea's dead — but that's a one-week test, not a mystery.

## 10. Build complexity — justification

**Medium.** The web app, uploads, billing, and reel assembly are standard off-the-shelf. The load-bearing hard part is reliable **jersey-number tracking on messy amateur full-field footage** — variable camera angles, low resolution, occlusion. Off-the-shelf multimodal models plus existing sports-CV building blocks get you 70% there; the remaining 30% (accuracy on bad footage) is real tuning work and the honest reason this is Medium not Low. A small team ships a credible single-sport v1 in ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | User-supplied footage they own/have rights to; standard ToS on upload rights. |
| Ethical — no harm / dark patterns | ✅ | Minors involved → strict: parent-consent gating, no public gallery by default, deletable footage. Handle carefully but no inherent harm. |
| Market exists (evidence above) | ✅ | Active $150–$500/reel human market with 2–4 week backlogs. |
| 1–5 person team can build this | ✅ | Medium; ~3–4 months to single-sport v1. |
| Launchable with <$50K / ₹40L | ✅ | Inference + web stack; no hardware, no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, repeated, wallet-out pain — but seasonal/episodic, not daily hair-on-fire. Emotionally charged (my kid's future). |
| Demand evidence | 15 | 12/15 | Strong: multiple human services charging $150–$500, 2–4 wk backlogs, incumbents admit the gap in writing. Docked for thin verbatim parent quotes surfaced. |
| Build feasibility | 15 | 10/15 | Jersey tracking on amateur footage is the genuine risk; everything else off-the-shelf. |
| Distribution clarity | 15 | 12/15 | Club-director channel + recruiting FB groups + tournament pop-ups are concrete and warm; conversion unproven. |
| Revenue mechanics | 15 | 12/15 | Undercuts a proven $150–$500 market at software margin; ACV modest but repeatable across a multi-year recruiting window. |
| Time to first revenue | 10 | 8/10 | Parents pay same week; impulse price point. Needs the tracking to work first. |
| Defensibility | 10 | 5/10 | Execution + platform-agnostic + coach-format lock-in; but Veo Player Spotlight is adjacent and well-funded. Copyable at month 12. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (the CV/tracking accuracy is the whole moat) · `content-heavy` (before/after demo content is the distribution engine).

### Key assumptions to validate (3–5)

1. **Assumption:** Jersey-number tracking hits usable accuracy on typical amateur Veo/Hudl/iPhone footage. **How to test:** Run the pipeline on 30 real donated game files across lighting/angles; measure % of the target player's touches correctly found + circled. Need >80% before charging.
2. **Assumption:** Parents will self-serve at $19–$99 rather than pay $300 for a human. **How to test:** Landing page + Stripe against 3 recruiting Facebook groups; measure paid conversions on 100 uploads.
3. **Assumption:** Club directors will forward a free-reel link to their parent lists. **How to test:** Pitch 25 club directors; need ≥5 to actually share.
4. **Assumption:** The coach-format output (circle, intro card, 3–5 min) is what coaches actually want. **How to test:** Show 10 real college coaches a ReelPull reel vs. a raw Veo export; ask which they'd watch.

### Risk flags

1. **Platform dependency / incumbent squeeze:** Veo Player Spotlight could ship a parent-facing, camera-agnostic recruiting export and erase the wedge. Mitigate by owning the *cross-platform, coach-format* layer they won't (they sell cameras).
2. **Minors + footage:** kids in video = privacy, consent, and safety obligations. Get consent gating and deletion right from day one or it's a reputational landmine.
3. **Accuracy ceiling:** if tracking can't clear ~80% on bad footage, the product is a toy and refunds spike. This is the single kill risk.
4. **Seasonality:** recruiting demand spikes junior year and around showcase seasons; revenue is lumpy, not smooth SaaS.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder comfortable with video/CV, paired with a content marketer who lives in youth-sports-parent communities
Time to revenue:        8–12 weeks (once tracking clears the accuracy bar)
Capital to launch:      $8–15K ($ mostly inference + a few months runway)
Top 3 assumptions to validate first:
  1. Jersey tracking >80% accurate on 30 donated amateur game files
  2. Parents convert at $19–$99 self-serve (100 uploads via 3 FB groups)
  3. ≥5 of 25 club directors forward the free-reel link
Kill criteria:
  - Abandon if tracking accuracy stays <80% on real amateur footage after 8 weeks of tuning
  - Abandon if <2% of 100 landing-page uploads convert to paid
  - Abandon if Veo/Hudl ship a camera-agnostic, parent-facing recruiting export before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Collect 30 real amateur game files (donated via recruiting FB groups: "send me your kid's game, I'll make a free reel"). This simultaneously tests footage-access AND builds a test set.
- **Day 3–4:** Run the tracking + event-detection pipeline on all 30. Measure: % of the target player's key moments correctly found and circled. This is the falsifiable core.
- **Day 5:** Put up a landing page with the 3 best before/after reels and a Stripe button; post in 2 recruiting groups. **Go/no-go:** ≥80% tracking accuracy on the test set AND ≥3 paid conversions (or 20+ waitlist signups) from the posts. Anything less → the tech isn't ready or the parents won't self-serve, and I walk.
