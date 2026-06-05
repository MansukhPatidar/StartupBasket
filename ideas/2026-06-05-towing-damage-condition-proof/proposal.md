---
title: "RigProof — damage dossier for towing operators"
slug: towing-damage-condition-proof
date: 2026-06-05
category: TradeTech / US Towing & Vehicle-Storage SMBs
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Tamper-evident before-and-after condition records that win damage disputes for small towing and impound operators."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Mobile-first, Dispute-defense, Provenance]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# RigProof

## 1. One-liner

Tamper-evident before-and-after condition records that win damage disputes for small towing and impound operators.

## 2. Trend signal — why now?

Towing is a $11.8B US industry split across ~40,000 businesses, none holding more than 5% market share, and most running with 1–5 employees ([IBISWorld, 2026](https://www.ibisworld.com/united-states/industry/automobile-towing/1206/)). Every one of those operators lives with the same recurring accusation: *"you damaged my car."* The entire personal-injury / consumer-law content ecosystem exists because of how often it happens — pages of lawyers coaching vehicle owners to photograph their car "alongside the driver" because "damage discovered after a vehicle has been released often falls on the owner to document and prove" ([Geyer's Towing legal guide, 2026](https://geyerstowing.com/are-tow-companies-liable-for-damage/)).

Two things changed in the last 12 months that make a focused product viable now:

1. **C2PA Content Credentials hit mobile.** The provenance standard now has 6,000+ members including Google, Meta, Sony, Nikon and Leica, with camera-maker workflows shipping in production ([eyesift C2PA status, 2026](https://www.eyesift.com/faq/c2pa-content-credentials-2026-cryptographic-provenance-adoption/)). Cryptographically-signed, tamper-evident capture is now an off-the-shelf build, not a research project.
2. **AI image fraud made plain photos suspect.** Synthetic-media claims cost US insurers an estimated $308.6B/year, with auto claims "increasingly containing AI-fabricated images of vehicle damage" ([ECIKS, 2026](https://eciks.org/6336-73684-insurance-industry-tackles-ai-generated-image-fraud-308-6b-annual-threat)). A regular phone snap from a tow operator's gallery now carries *less* evidentiary weight than it did two years ago — provenance is becoming the premium feature.

Provenance:
  - Signal 1 (Demand): Endemic "you damaged my car" disputes in towing/impound; legal ecosystem coaches owners to photograph and warns proof burden falls on whoever documents — [Geyer's Towing](https://geyerstowing.com/are-tow-companies-liable-for-damage/) — 2026; corroborated by 86% LTL damage-claim incidence — [Accio freight claims](https://www.accio.com/business/freight_claims_trends) — 2026
  - Signal 2 (Feasibility): C2PA Content Credentials shipped in mobile/camera workflows, 6,000+ members — [eyesift](https://www.eyesift.com/faq/c2pa-content-credentials-2026-cryptographic-provenance-adoption/) — 2026
  - Signal 3 (Economic): $11.8B towing market, towers already pay $109–$429/mo for dispatch software (Towbook); AI-image fraud a $308.6B/yr driver making provenance a paid feature — [IBISWorld](https://www.ibisworld.com/united-states/industry/automobile-towing/1206/) / [Towbook Capterra](https://www.capterra.com/p/94188/Towbook-Management-Software/) / [ECIKS](https://eciks.org/6336-73684-insurance-industry-tackles-ai-generated-image-fraud-308-6b-annual-threat) — 2026
  Category: Tech-unlock

## 3. The opportunity

The dispute is always the same shape: a vehicle owner claims damage happened during the tow or in the lot; the operator says it was pre-existing; it's word against word, and whoever has credible before-and-after evidence wins. Towers know this — they're told everywhere to "take timestamped photos." So why isn't it solved?

Because the existing tools treat condition photos as an **afterthought attachment inside a dispatch suite**, not as a defensible evidence package. Towbook — the dominant towing platform at $109–$429/mo — lets drivers "attach geocoded photos to a call and create a vehicle damage report" ([Towbook features](https://towbook.com/features)). That's a diagram with photos stapled to it. It is not cryptographically tamper-evident, it produces no independently-verifiable record a claimant or adjuster can check, and it carries no AI-generated damage narrative. Towbook is a dispatch-and-billing company; rebuilding their capture flow around C2PA for the dispute-defense edge case is not their game.

The opportunity is the narrow, sharp slice they won't build: a capture-to-verdict evidence product. Signed-at-capture photos, automatic damage tagging, and a single shareable verification link that a claimant, insurer, or small-claims judge can open and see is genuinely untampered. That's worth money the day a tower gets their first $4,000 "you scratched my bumper" letter.

## 4. Target market

- **Primary customer:** Owner-operators and small fleet owners of light/medium-duty towing and vehicle-storage/impound businesses in the US — 1–10 trucks, the owner answers the phone and drives. ~40,000 such businesses exist; the 1–5 employee segment dominates.
- **Why they buy:** In their words, the pain is *"they're just going to say, 'Wasn't me'"* and *"that was already there when I got it"* ([ARM Software, equipment-rental analog](https://www.armsoftware.com/damaged-rental-equipment/)). One disputed claim can mean a $2,000–$8,000 repair bill, an insurance deductible, a chargeback, or a 1-star review that costs more than the claim. They already believe in photos; they just don't have proof a skeptic can't wave away.
- **Rough TAM reasoning:** 40,000 US towing businesses. Realistically reachable, dispute-conscious operators (those who've eaten a claim) are maybe 30–40% = 12,000–16,000. At a $39–$79/mo target, the serviceable slice is a $5–10M ARR business well before saturation — perfect bootstrap size, too small for a VC-backed incumbent to chase.
- **Why now for them:** AI fabrication is starting to be raised *against* honest operators ("how do I know you didn't doctor that photo?"), and adjusters are getting trained to distrust loose images. The operator who can hand over a verifiable record stops losing the coin-flip.

## 5. Product sketch (MVP)

- One-tap **guided capture** at hook-up and at drop-off: app walks the driver through the standard angles (all four corners, roofline, wheels, interior, odometer) so nothing is missed.
- Every photo and short clip is **signed at the moment of capture** with time, GPS, and a tamper-evident credential — alter it later and the seal visibly breaks.
- **AI damage tagging + plain-English narrative:** on-device/vision model auto-flags and labels existing scratches, dents, cracks, and missing parts, and writes the condition summary ("front bumper: 3in scuff, driver-side; pre-existing at pickup").
- **Side-by-side before/after comparison** generated automatically when the vehicle is released — new damage highlighted, pre-existing damage greyed out.
- **One shareable verification link** per job: the claimant, insurer, or court opens it and sees the full signed record plus a "verified untampered" badge — no app install required for the viewer.
- **Dispute packet export:** a clean PDF (photos, timestamps, GPS map, AI narrative, signature trail) formatted for an insurance claim or small-claims filing.
- Works **offline** (capture in a dead-zone impound lot, sync later) and integrates with Towbook/TRAXERO via a "attach RigProof link to this call" handoff rather than trying to replace dispatch.

## 6. AI angle — what's load-bearing

Two jobs, both load-bearing. First, **vision-based damage detection and narration**: a driver hooking up a car at 2am will not write "3-inch scuff, driver-side rear quarter, pre-existing." The AI does it consistently, in seconds, for every vehicle — turning a rushed phone snap into a structured, defensible condition report. Remove it and you're back to a manual photo dump nobody fills out properly. Second, **automatic before/after diffing**: the model aligns pickup and drop-off shots and surfaces what changed, which is the exact question every dispute turns on. Without the AI this is a glorified camera app — with it, it's an evidence machine that does the paralegal-grade documentation work the operator never has time for. The provenance/C2PA layer is plumbing; the AI is what makes the record worth reading.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is the US legal-dispute / insurance-claim / small-claims environment plus the FMCSA-adjacent towing-industry structure. A localization angle would dilute focus; expansion is to adjacent US verticals (auto-transport, equipment rental, valet/parking, vehicle storage) before any geography move.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $49/mo per single-truck operator (flat), $79/mo for up to 5 trucks, $149/mo for 6–15. Annual discount to lock retention. One-time "dispute packet" exports included; no per-claim nickel-and-diming (the whole point is they reach for it without hesitation).
- **ACV:** ~$700/yr blended (mix of solo and small-fleet).
- **Rough math to $1M ARR:** ~1,430 paying accounts × ~$700/yr ≈ $1M. That's ~3.6% of the 40,000-business universe — credible for a sharply-targeted SMB tool.
- **Rough math to $5M ARR:** ~7,100 accounts (~18% of the universe) plus expansion into auto-transport and equipment-rental (same capture engine, different guided checklist). The adjacent verticals are what take it from $1–2M to $5M.
- **Expansion path:** seats/trucks as fleets grow; a "claim concierge" upsell (we assemble and format the small-claims/insurance packet for you) at $25/dispute; and white-label for motor clubs and insurers who want their contracted towers documenting to standard.

## 9. Go-to-market wedge — first 100 customers

- **Towing trade Facebook groups and forums.** Towing is a forum-heavy, word-of-mouth trade. Post genuinely useful "how to survive a damage claim" content + a free dispute-packet template in the big tow-operator Facebook groups and on TowTimes/TruckersReport, with RigProof as the obvious tool. Towers share what saves them money.
- **The dispute moment is the trigger.** Run tightly-targeted ads ("Accused of damaging a car you towed?") and rank for the long-tail terms operators search *the night they get a claim letter* — the legal-FAQ pages prove that search intent is huge and currently served only by personal-injury lawyers.
- **Direct outreach to the 40,000.** FMCSA / state tow-license rosters are public. Scrape the list, send a 60-second Loom showing a real before/after verification link beating a fake claim, target 2–3% reply → demo → close. First 100 is a few thousand emails, not a mystery.
- **Motor-club and insurer angle (channel, later).** AAA-contracted and insurer-network towers are required to document; pitch a co-branded standard. One regional motor-club deal seeds hundreds of operators at once.

## 10. Build complexity — justification

Medium. The capture app, photo/clip storage, and PDF/share-link generation are standard mobile + web work. The C2PA signing and the vision-based damage tagging/diffing are off-the-shelf in 2026 (C2PA libraries are maturing; damage-detection vision models for vehicles already exist for the insurance market). The genuinely fiddly parts are reliable offline capture-and-sync in dead-zone lots, and making the before/after alignment robust enough that the AI narrative holds up under a skeptical adjuster. Call it 3–4 months to a credible v1 for a technical founder plus one mobile-capable engineer.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Documenting condition is encouraged by the legal ecosystem itself. |
| Ethical — no harm / dark patterns | ✅ | Cuts both ways — protects honest towers AND gives owners verifiable records. Net-honest product. |
| Market exists (evidence above) | ✅ | 40k businesses, $11.8B, towers already pay $109–$429/mo for software. |
| 1–5 person team can build this | ✅ | Off-the-shelf C2PA + vision; 3–4 month v1. |
| Launchable with <$50K / ₹40L | ✅ | Solo/pair build, inference + storage costs modest at SMB scale. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money on the line, recurring, but episodic — felt acutely at claim-time, not daily. Just shy of hair-on-fire. |
| Demand evidence | 15 | 12/20→12/15 | Strong indirect signals (legal ecosystem, 86% claim incidence, paid incumbents) but no direct "towers begging for THIS product" quote yet. |
| Build feasibility | 15 | 11/15 | Standard stack + maturing C2PA + existing vehicle-damage vision models. Offline sync is the only real engineering risk. |
| Distribution clarity | 15 | 11/15 | Named channels (forums, FMCSA rosters, claim-moment search) with plausible math, but conversion on cold tower outreach is unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked below Towbook; $1M needs ~3.6% penetration — credible. Churn between disputes is the risk. |
| Time to first revenue | 10 | 8/10 | Pre-sellable to operators who just ate a claim; short trial-to-paid once v1 exists. |
| Defensibility | 10 | 5/10 | Execution + niche-brand moat. Towbook *could* bolt on C2PA, but won't prioritize it; first credible-evidence brand in towing wins the word-of-mouth. Copyable, not trivially. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (mobile capture + C2PA + vision) · `sales-heavy` (cold outreach to 40k blue-collar operators and forum trust-building).

### Key assumptions to validate (3–5)

1. **Assumption:** Towers will pay $49+/mo for dispute-defense specifically, on top of (or instead of) their existing dispatch tool. **How to test:** 30 operator interviews + a pre-sell landing page; target ≥8% of qualified visitors leave a card/deposit for early access.
2. **Assumption:** A verifiable record materially improves dispute outcomes (claims dropped, insurers paying out, small-claims wins). **How to test:** Interview 10 operators who recently fought a claim and a tow-claims attorney; confirm credible-provenance evidence changes the result.
3. **Assumption:** Damage frequency makes the tool sticky between disputes (else they cancel after winning one). **How to test:** Survey claim frequency per operator/year; target a high enough rate that "insurance against the next one" justifies a standing subscription.
4. **Assumption:** Cold FMCSA-roster outreach converts at 2–3% to demo. **How to test:** 500-email test batch with the Loom before building further.

### Risk flags

1. **Incumbent bolt-on risk:** Towbook/TRAXERO already own the workflow and could add a "verified photo" feature. Mitigation: out-focus them on the dispute-defense edge and own the brand before they notice.
2. **Episodic-value churn:** Operators may subscribe at claim-time and cancel after winning. Mitigation: annual plans, claim-frequency framing, and the claim-concierge upsell to keep value visible.
3. **Provenance-skeptic adoption:** Adjusters and judges may not yet recognize C2PA badges, blunting the "verified" payoff early. Mitigation: lead with the plain before/after + AI narrative value (useful regardless) and let provenance be the upgrade as recognition grows.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (mobile + vision) with a sales-hungry co-founder comfortable cold-calling blue-collar operators
Time to revenue:        8–12 weeks (pre-sell at claim-moment, paid trial once v1 ships)
Capital to launch:      $8–15K ($ for inference/storage + outreach tooling; mostly sweat)
Top 3 assumptions to validate first:
  1. Towers pay $49+/mo for dispute-defense — 30 interviews + pre-sell landing page, target ≥8% conversion
  2. Verifiable records change dispute outcomes — 10 post-claim operator interviews + 1 tow-claims attorney
  3. Claim frequency high enough to prevent win-then-cancel churn — operator survey
Kill criteria:
  - Abandon if <8% of 50 qualified operators show buying intent (pre-sell card / deposit)
  - Abandon if post-claim interviews show provenance doesn't change outcomes (then it's a vitamin, not a painkiller)
  - Abandon if Towbook ships a credible C2PA verified-photo feature before your v1 lands
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a one-page pre-sell site — "Win the next 'you damaged my car' fight. Verifiable before/after records for tow operators." Mock the before/after verification link and the dispute PDF. Stand up a $1 deposit / waitlist-with-card flow.
- **Day 3–4:** Pull 300 emails from FMCSA/state tow-license rosters and identify 10 active tow-operator Facebook groups/forums. Send the Loom + drop the free "how to survive a damage claim" template. Book 15 operator calls; specifically recruit operators who fought a claim in the last 6 months.
- **Day 5:** Decide go / no-go on a **falsifiable** bar: **≥4 of 50 qualified operators leave a deposit/card for early access, AND ≥6 of 15 interviewees confirm they'd have paid to have a verifiable record in their last dispute.** Below that, the pain is real but the willingness-to-pay isn't — shelve or re-aim at auto-transport.
