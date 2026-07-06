---
title: "ClaimFrame — damage-claim dossier for Airbnb hosts"
slug: str-damage-claim-dossier
date: 2026-07-06
category: PropTech / US — Short-Term Rental Hosts (AirCover damage claims)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Turns each turnover's photos into the timestamped before/after evidence that wins Airbnb AirCover damage claims."
tags:
  vertical: PropTech
  model: SaaS
  geography: US
  secondary: [Short-term-rental, AI-agent, Vision-AI, SMB, Consumer, Airbnb]
axes:
  problem: 15
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, content-heavy]
featured: false
---

# ClaimFrame — damage-claim dossier for Airbnb hosts

## 1. One-liner

Turns each turnover's photos into the timestamped before/after evidence that wins Airbnb AirCover damage claims.

## 2. Trend signal — why now?

Three things moved at once.

First, **the money got tighter.** Since December 2025 Airbnb collapsed the split fee into a single ~15.5% host-side service fee ([Houst, 2026](https://www.houst.com/blog/airbnb-hosting-fees)). Hosts now eat the whole cut, so every avoidable dollar of guest damage matters more. AirCover offers up to $3M in Host Damage Protection ([Airbnb Help, article 279](https://www.airbnb.com/help/article/279)) — but it only pays if you document like an insurance adjuster.

Second, **the documentation bar is brutal and hosts keep failing it.** The single most common reason claims get denied is missing the **14-day window** (14 days from checkout *or* before the next guest checks in, whichever comes first). The second is the absence of a **pre-stay baseline** — without dated before-photos of every item, Airbnb "resolves the he-said-she-said by siding with the guest" ([RapidEye, 2026](https://rapideyeinspections.com/blog/airbnb-aircover-damage-claim-guide/); [Lodgify](https://www.lodgify.com/blog/how-to-file-airbnb-damage-claim/)). Winning claims share three traits: timestamped before-and-after photos, itemized invoices on professional letterhead, and obsessive baseline documentation. Almost no self-managing host does all three, every stay.

Third, **vision AI got cheap enough to do the boring part.** Multimodal models now do reliable item detection and before/after visual diffing at pennies per turnover — the exact task (inventory a room, flag what changed) that made this a manual chore in 2023.

Provenance:
  - Signal 1 (demand): Baseline/before-photo absence + 14-day window are the top AirCover denial causes; without a baseline Airbnb defaults to the guest — https://rapideyeinspections.com/blog/airbnb-aircover-damage-claim-guide/ — 2026
  - Signal 2 (feasibility): Cheap multimodal vision now does per-item detection and before/after diffing at pennies per turnover; turnover-photo apps (Turno, Properly) already collect the raw images but don't build claims — https://turno.com/features/photo-checklists/ — 2026
  - Signal 3 (economic): US STR market ~$72B, ~1.8M US rentals, Airbnb 5M+ hosts, AirCover up to $3M coverage; host fee rose to a flat 15.5% in Dec 2025, squeezing margins — https://stayfi.com/vrm-insider/2026/04/20/vacation-rental-statistics/ — 2026
  Category: Tech-unlock

## 3. The opportunity

The gap is not "take photos" — Turno, Properly, and eAuditor already make cleaners snap turnover photos for proof-of-clean. The gap is **turning those photos into a claim that pays.** None of the incumbents build a per-item *baseline inventory*, none *diff* before-vs-after to surface new damage, and none *assemble the deadline-bound, depreciation-adjusted, letterhead-invoice evidence packet* Airbnb's Resolution Center demands.

So today the host does it by hand: scroll through the cleaner's 40 photos, remember what the couch looked like last week, hunt for a "before" shot that may not exist, get a repair quote on proper letterhead, and file inside a window they often blow. Most just write the damage off — the exact behavior AirCover's fine print counts on.

ClaimFrame owns the claim, not the checklist. It rides *on top of* the photos a host is already taking (or makes taking them a 3-minute sweep), keeps a living per-item baseline, and the moment a cleaner reports damage it drafts the whole dossier and starts the 14-day countdown. The incumbents are complements. The insurer is the adversary, and the host is losing.

## 4. Target market

- **Primary customer:** US self-managing STR hosts and small co-hosts running 1–20 listings on Airbnb (and Vrbo). Not the 500-door property managers — they have ops staff. The 1–20 unit operator who cleans-turns-hosts themselves or with one cleaner.
- **Why they buy:** "I know that guest cracked the TV and burned the counter, but Airbnb denied me because I had no before-photos and I filed on day 16." The pain is a specific, remembered dollar loss — $400 here, $1,800 there — that they were told was covered and wasn't.
- **Rough TAM reasoning:** ~1.8M US vacation rentals ([StayFi, 2026](https://stayfi.com/vrm-insider/2026/04/20/vacation-rental-statistics/)); Airbnb 55–60% share. Conservatively 700K–900K US listings are held by self-managing 1–20-unit hosts — the buyers here. At $15–25/listing/mo that's a several-hundred-million-dollar reachable market before touching Vrbo or global.
- **Why now for them:** Fees just went up, AirCover denials are a recurring forum topic, and the "just take before-photos every stay" advice is universally given and universally ignored because it's tedious. Someone automating it lands on a felt, dated pain.

## 5. Product sketch (MVP)

- **Baseline sweep:** host (or cleaner) walks the unit once; the app auto-inventories rooms and high-value items (TV, sofa, appliances, art) into a dated, timestamped, geotagged baseline gallery.
- **Turnover diff:** after each stay, cleaner does a 3-minute photo pass from the app; vision AI compares against the last baseline and **flags new damage** (stains, breaks, missing items) instead of making the host eyeball 40 photos.
- **Claim drafter:** one tap on a flagged item assembles an AirCover-ready dossier — before shot, after shot, timestamps, item description, estimated depreciated value, and a professional-letterhead repair estimate template.
- **14-day countdown + nudge:** the clock starts at checkout; the app pings the host before the window closes and before the next guest checks in.
- **Resolution Center script:** pre-drafted factual, on-platform message to the guest (Airbnb requires you message the guest on-platform first) — tone tuned to what reviewers reward.
- **Vendor invoice helper:** turns a handyman's scribbled quote or a texted number into a letterhead invoice that survives Airbnb's "unprofessional invoice" denial reason.
- **Claim log:** every past claim, its evidence, and its outcome — the compounding record that also becomes the host's defense in a Vrbo or credit-card dispute.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses back into another photo-checklist app — which already exists and doesn't solve the problem. The load-bearing work is: (1) **item detection** to auto-build the baseline inventory without the host tagging every object, and (2) **before/after visual diffing** to surface *new* damage against a specific prior state — the judgment call that today eats an hour of the host's scrolling and is the reason they give up. The claim-drafting language model then converts a flagged pixel-diff into the specific, policy-referencing prose Airbnb reviewers reward over vague objections. That chain is the product.

## 7. Localization angle (if any)

N/A — this is a US-first play (Airbnb's largest, highest-ACV, most litigious host base and the market where AirCover terms are most fought over). Vrbo and Booking.com hosts are the same buyer with a different claims portal, so v2 is platform expansion, not localization. There's no language/payment-rail wedge; the wedge is the claims workflow itself.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $19/mo for up to 3 listings (solo host), $15/listing/mo above that; annual discount. Optional success add-on: a small flat fee per *filed* claim dossier for hosts who won't pay monthly but will pay when damage hits.
- **ACV:** ~$300–$450/yr for the typical 1–3 listing host; more for the 5–20 unit co-host.
- **Rough math to $1M ARR:** ~2,800 hosts × ~$360/yr ≈ $1M. That's ~0.4% of the reachable US self-managing base.
- **Rough math to $5M ARR:** ~12K–14K paying hosts plus a per-claim revenue line and Vrbo expansion. Would need to be true: <4% monthly churn and one working repeatable channel (see §9).
- **Expansion path:** more listings per account, per-claim add-on, a "concierge claim" tier where ClaimFrame files the dossier for you, and a referral cut from restoration/handyman vendors who provide the letterhead invoices.

## 9. Go-to-market wedge — first 100 customers

- **STR host Facebook groups + subreddits.** r/AirBnBHosts, r/vacationrentals, and the big regional STR Facebook groups run a "AirCover denied me" thread weekly. Answer them with a real teardown of *why* the claim died (no baseline, blown window), then offer the free baseline tool. Warm, self-selecting, in-pain audience.
- **Cleaner/turnover-tool complement, not competitor.** Turno and Properly have thousands of hosts and no claims product. Build a lightweight integration/import so ClaimFrame ingests their existing turnover photos; co-market to their host base as the "now actually get paid for the damage" layer.
- **Denial-defense content + calculator.** A "Did Airbnb wrongly deny your claim?" evaluator that grades a host's existing evidence against the 14-day/baseline/letterhead rules and outputs the gaps. It's genuinely useful, ranks for the exact denial searches hosts make at their moment of pain, and funnels into the baseline product for next time.
- **STR bookkeeper / co-host referrals.** The 5–20 unit co-hosts and STR-specialist bookkeepers already field the "help me fight this denial" ask; a referral cut turns them into a channel.

First 100 is a 2–4 week sprint through the Reddit/Facebook denial threads alone.

## 10. Build complexity — justification

Medium. The vision pipeline (item detection + before/after diff) is off-the-shelf multimodal API work, not custom model training — but tuning it to low false-positive damage flags, plus a clean mobile capture UX that a $20/turnover cleaner will actually use, plus the dossier assembly and platform-specific claim formatting, is real product work. Small team, ~3–4 months to a credible v1; no proprietary data needed at start, and the claim-outcome log becomes proprietary over time.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Documenting your own property and filing your own claims. No legal barrier. |
| Ethical — no harm / dark patterns | ✅ | Helps honest hosts prove real damage; must guard against fabricated-claim misuse (see risks). |
| Market exists (evidence above) | ✅ | Documented, recurring denial pain; funded adjacent tools; large host base. |
| 1–5 person team can build this | ✅ | Off-the-shelf vision + LLM, standard mobile/web stack. |
| Launchable with <$50K / ₹40L | ✅ | Inference is pennies/turnover; no capex. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, remembered dollar loss and a felt injustice — but it's periodic (per damage event), not daily hair-on-fire; many hosts get lucky for months. |
| Demand evidence | 15 | 12/15 | Strong: universal "before-photo/baseline" advice, recurring denial threads, top-two denial causes documented, funded adjacent tools. Short of 13+ because no one's yet charging specifically for *this* claim workflow — a gap and a risk. |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI, but damage-diff accuracy and cleaner-usable capture UX are non-trivial; ~3–4 months. |
| Distribution clarity | 15 | 11/15 | Named channels with in-pain, self-selecting audiences; conversion from "free evaluator" to paid recurring is the open question. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarks to Turno/Properly tiers; math to $1M is <0.5% penetration. Churn risk if hosts only value it right after a damage event. |
| Time to first revenue | 10 | 8/10 | Self-serve; a paid tier can convert in weeks, especially the per-claim add-on that captures the acute-pain moment. |
| Defensibility | 10 | 6/10 | Soft moat: accumulating baseline/claim-outcome data per host = switching cost, plus turnover-tool integrations. Copyable by a funded incumbent (Turno/Properly could bolt this on). |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (vision + LLM pipeline, mobile capture) · `content-heavy` (denial-defense content and community presence is the primary channel).

### Key assumptions to validate (3–5)

1. **Assumption:** Hosts will maintain a per-stay baseline sweep if it takes ≤3 minutes and is done by their existing cleaner. **How to test:** Ship the free baseline+diff tool to 30 hosts recruited from denial threads; measure what % actually complete a baseline for 3 consecutive turnovers.
2. **Assumption:** Vision diffing flags real new damage at a low enough false-positive rate that hosts trust it. **How to test:** Run 100 real before/after turnover photo sets; measure precision/recall on human-labeled damage.
3. **Assumption:** Hosts will pay *recurring*, not just at claim time. **How to test:** Offer both monthly and per-claim pricing to the first cohort; see which converts and retains.
4. **Assumption:** A dossier built by ClaimFrame measurably improves claim approval vs. the host's status quo. **How to test:** Track approval rate and payout for the first 50 filed claims vs. published denial-cause base rates.

### Risk flags

1. **Platform dependency:** Airbnb owns AirCover's rules and could change the claims flow, tighten terms, or ship a first-party evidence tool. Mitigant: span Vrbo + credit-card/insurance disputes + direct-booking hosts so the value isn't Airbnb-only.
2. **Market timing / periodic pain:** because damage is episodic, hosts may churn between events. Mitigant: the per-claim add-on and "keep your baseline current" habit loop; position as insurance you're glad you had.
3. **Abuse risk:** a claim-drafting tool could be misused to inflate or fabricate damage. Mitigant: require genuine timestamped/geotagged before/after evidence — the tool's integrity IS its value; fabricated claims fail Airbnb's own checks anyway.
4. **Incumbent response:** Turno or Properly could add a claims layer. Mitigant: move fast on the claim-outcome dataset and integrations, and be the neutral cross-platform claims layer rather than one cleaning tool's feature.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder comfortable with vision/LLM pipelines + a content operator who lives in STR host communities
Time to revenue:        6–10 weeks (per-claim add-on can convert acute-pain hosts fast)
Capital to launch:      $8–15K ($ mostly inference + a modest paid-pilot incentive)
Top 3 assumptions to validate first:
  1. Hosts sustain a ≤3-min per-stay baseline sweep — test with 30 recruited hosts over 3 turnovers each
  2. Vision damage-diff precision is high enough to be trusted — test on 100 labeled before/after sets
  3. Hosts pay recurring, not just at claim time — A/B monthly vs. per-claim on first cohort
Kill criteria:
  - Abandon if <30% of pilot hosts complete a baseline for 3 consecutive turnovers (the whole model depends on the baseline habit)
  - Abandon if damage-diff false-positive rate stays high enough that hosts distrust the flags after tuning
  - Abandon if Airbnb ships a first-party baseline+claim tool before v1 and Vrbo/dispute expansion can't carry the value
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the last ~40 "AirCover denied" posts from r/AirBnBHosts, r/vacationrentals, and 2 big STR Facebook groups. Categorize denial causes; confirm baseline-absence + 14-day-window dominate. DM 30 posters offering a free "claim evaluator."
- **Day 3–4:** Stand up the evaluator: host uploads their existing evidence, gets a graded gap report against the AirCover rules. Run 30 hosts through it. Separately, hand-run the vision diff on 20 real before/after photo sets to eyeball damage-flag quality.
- **Day 5:** Decide go/no-go. **Go** if ≥10 of 30 hosts say "I'd have won my last claim with this and I'd pay for it" AND the manual vision diff correctly flags the real damage in ≥15 of 20 sets.

Falsifiable result: a countable number of in-pain hosts who both recognize the value on their *own* past denial and pass a payment-intent check — not "people liked the demo."
