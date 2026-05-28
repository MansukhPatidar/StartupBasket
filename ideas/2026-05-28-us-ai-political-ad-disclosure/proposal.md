---
title: "BallotMark — AI-ad disclosure packet for US campaigns"
slug: us-ai-political-ad-disclosure
date: 2026-05-28
category: GovTech / US Political
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Generates the AI-disclosure text, on-screen overlay, and C2PA tag for political ads across the 30 US states mandating it."
tags:
  vertical: GovTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, AI-agent, SMB, Solo-builder, Election-cycle]
axes:
  problem: 16
  demand: 12
  build: 12
  distribution: 11
  revenue: 10
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# BallotMark — multi-state AI-ad disclosure packet for US down-ballot campaigns

## 1. One-liner

Generates the AI-disclosure text, on-screen overlay, and C2PA tag for political ads across the 30 US states mandating it.

## 2. Trend signal — why now?

Three things hit at once heading into the November 3, 2026 midterm:

1. **State-law cliff** — 30 US states have enacted AI-political-ad disclosure laws by May 2026, up from 28 at the start of 2026. CA (AB 2655/2839/2355), FL, HI, ID, IN, MI, NY, NV, ND, OR, UT, WA, WI all mandate disclosure on AI-generated/altered political content. Pennsylvania Act 35 adds criminal penalties. Minnesota bans portraying a candidate doing something they didn't do without consent. New York has a private right of action. The required text, font-size rule, audio-pacing rule, and trigger window (60–120 days pre-election) vary by state.

2. **Down-ballot AI ads went mainstream in early 2026** — Texas primary candidates (Kat Wall, anti-Talarico) ran AI-generated attack ads in down-ballot state-house races. Republican PACs released an AI deepfake of TX state rep James Talarico in March 2026. The Maine US Senate Platner deepfake ad in May 2026 used cloned voice + image. The Texas Tribune, Houston Public Media, CNN, Route Fifty all covered this as a 2026-midterm-first phenomenon. AI ad costs collapsed (Lovable, Sora 2, ElevenLabs at consumer prices) — meaning small races now ship the kind of ads that previously only national PACs could afford.

3. **Federal layer in motion** — FCC has a Notice of Proposed Rulemaking on AI political-ad disclosure for broadcast (Aug 2024, still open). FEC issued an Interpretive Rule confirming AI falls under fraudulent-misrepresentation ban. The FCC rule would require broadcasters to log AI-generated content in the political file — which means stations will demand a compliance artifact from candidates before they air the spot.

Provenance:
  - Signal 1: 30 US states with AI-political-ad disclosure laws by May 2026, list of enacted states, font-size and audio-pacing requirements — https://www.broadcastlawblog.com/2026/03/articles/ai-in-political-attack-ads-watch-state-laws-on-deep-fakes-and-synthetic-media-in-political-content/ — 2026-03
  - Signal 2: Down-ballot AI attack ads documented in TX 2026 primaries (Wall, Talarico) and ME US Senate race (Platner) — https://www.texastribune.org/2026/02/19/texas-2026-primaries-ai-ads-candidates-crockett-cornyn-paxton/ + https://wgme.com/news/local/graham-platner-says-hes-not-surprised-by-ai-attack-ad-from-republicans-us-senate-democrats-artificial-intelligence-reddit-maine — 2026-02 / 2026-05
  - Signal 3: Existing political-compliance software (Trail Blazer $100/mo, Aristotle $250/mo, ISPolitical, NGP VAN) is donor/finance-focused — none route on per-state content-disclosure rules — https://www.princetonstrategies.com/post/tech-tools-pcfc-5-different-filing-software-options-and-its-pros-and-cons — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The political-tech stack covers fundraising (ActBlue, WinRed), donor compliance (NGP VAN, Aristotle, ISPolitical, Trail Blazer), ad buying (AdImpact, Medium Buying), and creative production (Canva, Lovable, Capcut). **No one covers content-side regulatory compliance.** Big national campaigns hire law firms ($300–500/hr) to vet each spot. State-house candidates, county sheriffs, school-board races, judges, and small PACs running 5–30 candidates across 3–10 states cannot afford that — yet a missed disclosure exposes them to:

- Criminal misdemeanor in PA (Act 35)
- Civil suit + private right of action in NY
- Ad pulled by FCC-licensed station in any state with disclosure mandates
- Campaign-finance violation referrals in CA, MI, WI
- Reputational hit when the opposing campaign tweets a screenshot of the missing disclaimer

The opportunity is a focused tool that takes a finished AI-ad file (mp4/mp3/png), asks two questions (which state(s) will this run in, which weeks), and returns:
- The exact disclosure text required by each jurisdiction
- A re-encoded ad with the on-screen overlay rendered at the correct font size (CA AB 2839 requires "no smaller than the largest font appearing in the video")
- For audio: interspersed audio disclosures at the statutory cadence (CA AB 2655: every 2 minutes if audio >2 min)
- C2PA Content Credentials embedded
- A per-state PDF "compliance packet" the candidate's broadcast buyer hands the station

This is the **content-disclosure layer** of the political-tech stack, sized for the long tail that NGP VAN and Aristotle never serve.

## 4. Target market

- **Primary customer:** Down-ballot US candidates (state legislature, county, mayor, school board, judge) and the small political-consulting shops that run 5–50 races each cycle. ~7,400 state-legislative seats up in 2026 + 80,000+ local-government seats + ~150,000 school-board seats turning over in 2024-2026 cycles. Realistic addressable: 30,000–50,000 candidates + 2,000–3,000 small political consultancies (1–10 staff, not the top 20 firms).
- **Why they buy:** The exact phrase from MFStrategies's Marty Santalucia in WITF coverage — "he expects many local races to see AI misinformation come directly from candidates." If you're the candidate shipping the ad, you carry the personal liability. If you're the consultancy and one of your clients gets pulled off-air in Florida in October because the disclaimer was 4pt smaller than the largest on-screen text, you lose that account and the next three referrals.
- **Rough TAM reasoning:** 30K addressable candidates × $99 one-shot ad-packet × average 4 ads/cycle = ~$12M cycle revenue; or 3K consultancies × $399/mo × 9-month cycle = ~$11M. Even 5% capture in one midterm cycle = $1M+. ARR is cycle-amplified (peaks in even years).
- **Why now for them:** First midterm where AI-generated ads are normalised + first cycle where 30 states have disclosure laws on the books + 60–120-day enforcement window in most states starts around early-July through Sept 2026 → window for paying customers is roughly June–October 2026.

## 5. Product sketch (MVP)

- Upload an AI-generated or AI-altered political ad (video/audio/image)
- Pick states + general-election or primary + start date → product returns per-state disclosure obligations
- For video: auto-render the correct-font-size on-screen overlay for the full duration (CA AB 2839 mandate)
- For audio >2 min: auto-insert the statutory periodic spoken disclosure at 2-min intervals (CA AB 2655 mandate)
- Embed C2PA Content Credentials for platforms (Meta, TikTok, YouTube) reading the signal
- Generate a per-state PDF compliance packet (statute citation, disclosure text, rendered preview, hash of the final file, timestamp) the buyer hands the broadcast station with the media buy
- Archive every packet against the campaign's filing-treasurer email for the duration of the disclosure-retention window (most states: 2–5 years)
- Alerts when a new state law passes mid-cycle or a state AG issues guidance changing required text

## 6. AI angle — what's load-bearing

Two places AI does real work, not decoration:

1. **Statute-to-rule extraction.** Parsing 30+ state statutes (and tracking amendments in-cycle) into a structured per-state rule table that maps to disclosure text, font-size formula, audio-interval, candidate-consent carve-out, satire/parody carve-out, trigger window. The library has to update when a state AG releases interpretive guidance — this is where retrieval + small fine-tuned classifier saves a human lawyer 40 hours of monthly upkeep.
2. **Per-ad obligation routing.** Detecting from the uploaded asset whether it's "manipulated" (AB 2839 wording), "AI-generated" (AB 2355 wording), or a "deceptive depiction of a candidate" (AB 2655 wording) — each triggers a different statute. Audio-vs-video-vs-image classification + AI-content detection (C2PA presence, voice-clone heuristics) decides which disclosure text applies.

Strip out the AI and you have a webform that emails the candidate a static checklist — useless against the 30-state matrix that changes monthly.

## 7. Localization angle (if any)

N/A — this is a US-only play. The product is the **opposite** of localization: it abstracts away the per-state fragmentation that nobody else has the patience to maintain. International political-ad disclosure (EU DSA, UK Online Safety Act, India ECI rules) is a separate v2.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Solo Candidate:** $99 one-shot per ad packet (covers all states the candidate runs in)
  - **Campaign:** $299/month subscription — unlimited ads, all states, archive + alerts (state-legislature and competitive house races)
  - **Consultancy:** $999/month — manages 10 client campaigns, multi-user, white-label PDFs
  - **PAC / Network:** $2,499/month — unlimited campaigns, audit-ready archive, API for in-house production tools
  - One-shot **$499 "Cycle Compliance Audit"** — review the last 30 ads a campaign ran, produce retroactive packets where filings are missing
- **ACV:** Blended ~$1,800 cycle-revenue per paying account (consultancies and PACs anchor; solo candidates pay one-shot)
- **Rough math to $1M ARR:** 550 paying accounts × $1,800 = $990K cycle revenue. 1.8% capture of 30K addressable candidate market. Plausible inside the June–Oct 2026 enforcement window.
- **Rough math to $5M ARR:** ~2,800 accounts — requires 2–3 state party-committee endorsements (DCCC small-dollar SuperPAC contractor list, RNC down-ballot training, AAPC vendor directory) and one big multi-state PAC reference deal.
- **Expansion path:** Off-year (2027) revenue from state legislative special elections + municipal races + the 2028 presidential cycle (which inflates everything 3–5×). Add adjacent SKUs: FCC political-file-of-record automation, broadcaster-side ingestion API ($X per ad checked), and a paid "compliance defender" hot-line at $199/incident.

## 9. Go-to-market wedge — first 100 customers

Concrete, not "SEO." The cycle window is short — every move targets the people who are within 60 days of needing this.

- **Scrape the 7,400 state-legislative candidate filings from secretary-of-state databases**, filter for candidates in the 13 enforcement states, and send a 90-second Loom: "Your opponent dropped an AI attack ad in Pennsylvania last week. Here's the disclosure they had to use. Here's what you'd have to do." Expect 2–4% reply rate × ~4,000 targeted candidates = 80–160 demos.
- **AAPC (American Association of Political Consultants) directory** has ~1,500 listed firms. Cold-DM the 400 firms that explicitly list multi-state work or "creative services." First-mover advantage is huge — the firm that gets this product becomes the firm that *can take multi-state clients*.
- **Partnership with a creative-production tool** (Lovable for AI-generated video, ElevenLabs for voice). One-click "after-render compliance check" reaches their political customer surface. Realistic — both are looking for vertical use-case wins.
- **Pre-launch on Substack/Twitter through political-tech influencers** (Patrick Ruffini, Becca Siegel, Tim Lim, the AAPC roundup folks). 3–5 named posts moves 20–40 demos.
- **State-party vendor approvals** — DCCC/RNC/DLCC/RSLC publish approved vendor lists for down-ballot training programs. Win one, and 200 candidates get an email blast referencing the tool. 3-month sales cycle but compounds.

If the first 100 doesn't close inside 8 weeks of launch given the 2026 calendar, the wedge isn't real and the product won't survive the cycle.

## 10. Build complexity — justification

**Medium.** Three pieces:
- Statute knowledge base + per-state rule engine — ongoing manual + AI-assisted ingestion. 4–6 weeks for v1 covering the 13 enforcement states; 30-state coverage in 8.
- Media-rendering pipeline (ffmpeg + canvas overlay + audio interspersion + C2PA SDK from CAI) — well-trodden tech, ~3 weeks.
- The packet PDF generator + archive UI + state-AG-guidance monitor — standard SaaS, ~3 weeks.

Pair shipping in ~10–12 weeks. Domain expertise (election-law literacy) matters more than engineering complexity. Need at least one part-time election-lawyer advisor on retainer to vet the rule extractor.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Selling compliance tooling is unregulated. |
| Ethical — no harm / dark patterns | ✅ | Tool reduces undisclosed AI ads — clear public-interest direction. |
| Market exists (evidence above) | ✅ | 30 state laws + documented down-ballot AI ads + lack of vendor coverage. |
| 1–5 person team can build this | ✅ | Pair + election-law advisor on retainer. |
| Launchable with <$50K / ₹40L | ✅ | $20–30K covers v1, CAI/C2PA tooling, legal advisor for statute QA. |

All five pass — proceed to scoring.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16 | Down-ballot candidate exposure = criminal in PA, civil in NY, station pull elsewhere. Hair-on-fire for accounts within enforcement window. Slightly capped because off-cycle (2027, 2029) demand drops 70%+. |
| Demand evidence | 15 | 12 | 30 state laws + real documented incidents + existing political-compliance vendors charging $100–250/mo (proves SMB willingness-to-pay). Capped because no incumbent occupies exactly this content-disclosure niche — no direct revenue benchmark yet. |
| Build feasibility | 15 | 12 | Off-the-shelf C2PA SDK + ffmpeg + a curated statute table. Statute upkeep is the recurring cost. |
| Distribution clarity | 15 | 11 | Named lists (SOS filings, AAPC directory, party vendor lists) with realistic conversion math. Capped because cycle-window urgency is double-edged — if the first wave misses, the cycle is over by mid-November. |
| Revenue mechanics | 15 | 10 | Pricing benchmarks to Trail Blazer/Aristotle adjacency. Cycle-loaded ACV — heavy peaks, valleys in odd years. Cycle-amplified math works but requires off-year SKU expansion to be a steady SaaS. |
| Time to first revenue | 10 | 8 | One-shot $99 packets bookable on demo day. Subscription requires 1–2 sales calls. <30 days to first dollar. |
| Defensibility | 10 | 6 | Statute library + state-AG-guidance corpus compounds over 12+ months. Cycle-knowledge moat. Copyable by a determined competitor in 8 weeks. Brand-in-niche + party-vendor list lock-in does most of the moat work. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

Needs a founder with one foot in election-law/political-tech and one in product engineering. Solo non-political technical founder will hit a wall on statute interpretation in week 3.

### Key assumptions to validate (3–5)

1. **Assumption:** Down-ballot candidates / consultancies will pay $99–$999 inside the 60–120-day enforcement window. **How to test:** Pre-sell a $99 "Cycle Packet" with a Stripe link in 50 cold Loom outreaches to TX/CA/NY/PA/FL state-house candidates inside the next 4 weeks. <5 purchases = the urgency is theoretical. ≥10 = real.
2. **Assumption:** Stations and platforms will treat the PDF packet as the operational compliance artifact. **How to test:** 5 calls with traffic managers at local TV/radio stations in CA/PA/NY — does showing them a sample packet remove the "we'll only run this if your lawyer signs off" friction? If they say "we don't read it anyway, the candidate signs the FCC form," the packet is less load-bearing than assumed.
3. **Assumption:** Statute matrix is maintainable by a 2-person team. **How to test:** Track NCSL + StackCyber legislation tracker + Multistate.us updates for 4 weeks. If >2 substantive changes/week per state, the upkeep burden eats the gross margin. If <2/month, scales fine.
4. **Assumption:** Big political-tech (NGP VAN, Aristotle) won't ship a competing module before the November election. **How to test:** Check both vendors' Q2 2026 release notes + AAPC vendor expo announcements. If either publicly commits, the window narrows fast.

### Risk flags

1. **Cycle dependency.** Revenue peaks even years, drops in odd. Without an off-year SKU (state-AG investigation defense, broadcaster-side API, FCC political-file automation), this is a $1–2M cycle business, not a $5M SaaS. Must build the off-year wedge before the 2027 trough.
2. **Statute volatility + First Amendment litigation.** California AB 2839 was preliminarily enjoined in *Kohls v. Bonta* (Oct 2024). Whole state laws can flip overnight. Product must surface "this statute is currently enjoined" rather than send the candidate down a bad path.
3. **Big-political-tech competitive entry.** If Trail Blazer or Aristotle bolt on a free disclosure-text generator (zero render, zero packet), the perceived value collapses for the bottom half of the market. Defense: own the multi-state-render + archive + audit-trail layer they don't have.
4. **Partisan optics.** Tool is non-partisan by design but down-ballot political tech is bought through partisan channels. Must distribute through both AAPC chapters and parallel R/D vendor networks. A perceived partisan lean (intentional or not) cuts addressable market in half.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical co-founder + election-law advisor (or ex-NGP VAN / Aristotle product person)
Time to revenue:        4–6 weeks from launch (one-shot $99 packets bookable on first demo)
Capital to launch:      $20–30K (CAI C2PA SDK access, election-law advisor retainer, statute-monitoring stack)
Top 3 assumptions to validate first:
  1. ≥10/50 cold Loom outreach to state-house candidates buy $99 packet inside 4 weeks (validates urgency)
  2. 5/5 broadcast traffic managers say the per-state packet PDF removes friction (validates the packet vs. checklist)
  3. <2 substantive statute changes / state / month (validates that 2-person team can keep the matrix accurate)
Kill criteria:
  - Abandon if <10% of 50 cold outreach state-house candidates buy the $99 one-shot inside 4 weeks
  - Abandon if Trail Blazer or Aristotle ship a competing free disclosure-text module before v1
  - Abandon if California AB 2655/2839 stay enjoined AND PA Act 35 is enjoined by Sept 1 2026 (the two biggest enforcement teeth disappear)
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a static landing page + $99 Stripe payment link. Title: "AI-ad disclosure packet for your campaign — every state's required text, on-screen render, station-ready PDF." Mock a single sample packet for California AB 2655 disclosure.
- **Day 3–4:** Scrape 200 state-house candidate filings from CA + PA + NY secretary-of-state databases. Send personalised Loom videos referencing their district + the specific statute they're under. Track open + click + Stripe conversion.
- **Day 5:** Call 5 local-TV/radio traffic managers in those three states. Ask: "Would this PDF speed up clearing political spots for you?" Tally yes/no/maybe.
- **Day 6–7:** Decide go/no-go on: ≥3 paid purchases out of 200 outreach (1.5% baseline) AND ≥3/5 traffic managers say "yes, this would help." Below either threshold → revisit shape or shelve.

Falsifiable. If both thresholds clear, ship the build immediately — the cycle window closes in 5 months.
