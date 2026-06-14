---
title: "HaulProof — claim defender for residential moving companies"
slug: mover-damage-claim-defense
date: 2026-06-14
category: Logistics / US Residential & Local Moving Companies (3–40 trucks)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "AI matches a customer's damage-claim photo to crew origin photos and builds the packet proving it was pre-existing."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [AI-agent, Vision-AI, SMB, Compliance-driven, Mobile-first]
axes:
  problem: 15
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# HaulProof

## 1. One-liner

AI matches a customer's damage-claim photo to crew origin photos and builds the packet proving it was pre-existing.

## 2. Trend signal — why now?

Three things lined up in the last 12 months.

First, the pain is structural and old, but the moment of pain has a hard clock most owners hate: by federal rule an interstate mover must acknowledge a damage claim in writing within 30 days and resolve it within 120. Consumer-side data is brutal — **"less than 1/4 of claims reach settlement,"** and **39% of FMCSA household-goods complaints report loss or damage to property**. Every one of those is a fight the mover has to litigate by hand. The dirty secret on the other side of the ledger: the valuation coverage movers sell is **"70–90% pure profit"** (SmartMoving's own claims-management blog). Claims are the thing eating that margin, and owners defend against them with a shoebox of crew phone photos.

Second, the raw material now exists but isn't being used. Crew apps — CrewPro (Move4U), Voxme, Movegistics — already capture room-by-room inventory with origin and delivery condition photos and exception codes. The photos are *being taken*. Nobody turns them into a defense. When a claim lands six weeks later, the owner manually scrolls through 200 photos hunting for the one frame that shows the dresser already had that gouge.

Third, the capability to do that automatically got cheap. Multimodal vision — visually re-identifying "this is the same dresser" across two photo sets and reading a scratch — was a research problem two years ago. Inference cost per token has fallen on the order of ~1000× across three years (NVIDIA Blackwell + open-model providers). A side-by-side visual rebuild that used to need a human now costs cents.

Provenance:
  - Signal 1 (Demand): "Less than 1/4 of claims reach settlement"; 39% of FMCSA HHG complaints are loss/damage; pre-existing damage is the #1 dispute flashpoint — https://moveadvisor.com/move/damages-movers-claims/ , https://www.fmcsa.dot.gov/protect-your-move/what-if-problems — 2026-06-14
  - Signal 2 (Feasibility): Crew apps already capture origin/delivery condition photos + exception codes (CrewPro, Voxme, Movegistics); multimodal vision re-ID + cheap inference (~1000× cost collapse over 3 yrs) makes auto-matching viable — https://move4u.com/removal-applications/crewpro , https://blogs.nvidia.com/blog/inference-open-source-models-blackwell-reduce-cost-per-token/ — 2026-06-14
  - Signal 3 (Economic): $16B moving-software market, 9% CAGR; valuation coverage is "70–90% pure profit"; incumbents ($289–399/mo) treat claims as a checkbox, not a product — https://www.smartmoving.com/blog/claims-management-chokehold , https://www.businessresearchinsights.com/market-reports/moving-company-software-market-116288 — 2026-06-14
  Category: Underserved niche

## 3. The opportunity

The moving-software market is $16B and growing 9% a year, and it is dominated by full-suite CRMs — SmartMoving ($299–399/mo), Elromco ($289/mo), Supermove, MoversTech. For all of them, **claims is a tab, not a product.** GetApp lists 21 products that "support claims management"; in practice that means a place to log a claim number and a status. None of them look at the photos. None of them answer the only question that decides who pays: *was this damage there before we touched it?*

The crew apps capture the photos but stop at capture. The CRMs track the claim but don't fight it. The gap in the middle — turn the photos you already have into evidence that defeats or shrinks the claim — is open. That's HaulProof.

This isn't "another claims clerk" tool. The job-to-be-done is adversarial: a customer sends a photo of a scratched table and a $900 demand. HaulProof finds the same table in the crew's origin photos, lines them up, and either (a) shows the scratch was already there → deny, or (b) confirms it's new → pay the right amount fast and stop the dispute from dragging to the 120-day wall. It's the difference between paying a $900 claim and paying $0 — multiplied across every move.

## 4. Target market

- **Primary customer:** Owner/operator of a US residential & local moving company running 3–40 trucks ($1M–$15M revenue). The person who personally signs claim checks. Secondary: their dispatcher/claims admin who currently does the photo-hunting.
- **Why they buy:** In their words, the recurring complaint is "the customer says we broke it, I *know* it was already broken, and I can't prove it fast enough so I just pay." Every avoidable payout is cash out of a thin-margin business, and unresolved claims tank their Google/BBB rating — which is their entire lead engine.
- **Rough TAM reasoning:** ~7,000+ FMCSA-registered HHG carriers plus a long tail of local intrastate movers — call it 15,000–18,000 US firms in the target band. At even 3% penetration and ~$3,600 ACV, that's ~$2M ARR; 8–10% gets you to the $5M zone. Not a unicorn TAM — exactly the bootstrapped-operator size this portfolio wants.
- **Why now for them:** Crews already shoot the photos (so adoption friction is low — no new field behavior to force). Claims volume and the cost of a bad review both went up; the tool to exploit the photos finally got cheap.

## 5. Product sketch (MVP)

- **Claim intake:** owner forwards the customer's claim email/photos to a HaulProof address (or drops them in). The job is auto-matched by customer name/date.
- **Photo re-identification:** AI finds the same item in the crew's origin and delivery photo sets and stacks them side by side, zoomed to the disputed area.
- **Pre-existing-damage verdict:** a clear call per item — "scratch visible at origin (high confidence)" / "new at delivery" / "inconclusive — needs human" — never a silent auto-deny.
- **Rebuttal packet generator:** one PDF with side-by-sides, the signed origin condition report, timestamps, and a drafted response letter sized to the FMCSA 30/120-day clock.
- **Settlement-math helper:** for genuine damage, computes the released-value liability ($0.60/lb) vs. full-value owed, so the owner pays the *correct* number, not the demand.
- **Claims log + clock:** every open claim with its deadline countdown, so nothing hits the 120-day wall by neglect.
- **Works with what they have:** ingests photo exports from CrewPro/Voxme/Movegistics or plain phone-camera dumps. No rip-and-replace.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — it's just a shared folder. The load-bearing work is **visual item re-identification**: given a customer's single damage photo of "a brown dresser," locate the same physical dresser among 200 origin photos shot in bad lighting from different angles, and then compare the specific surface to decide whether the defect pre-existed. That's a vision problem a human does slowly and a spreadsheet can't do at all. Secondary AI work: reading the customer's free-text claim email to extract which items/amounts are in dispute, and drafting the rebuttal letter. The matching is the moat-adjacent magic; everything else is plumbing around it.

## 7. Localization angle

N/A — this is a US-first play. The wedge is the US regulatory structure itself: FMCSA's 30-day-acknowledge / 120-day-resolve clock, the $0.60/lb released-value default, and the BBB/Google-review dependency of US movers. Those specifics don't transfer cleanly to other markets, and the US has both the carrier density and the litigious claims culture to make the problem acute. International expansion is a later question, not the wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $249/mo base for small fleets (3–10 trucks), $499/mo mid (11–40), with a per-claim-packet overage above an included monthly allotment. Anchored *below* the CRMs they already pay because HaulProof is additive, not a replacement.
- **ACV:** ~$3,600 blended.
- **Math to $1M ARR:** ~280 customers × $300/mo × 12 ≈ $1.0M. Reachable from a ~15K-firm pool at <2% penetration.
- **Math to $5M ARR:** ~1,150 customers, or fewer if the mid-tier and per-packet overage carry weight (a busy 30-truck firm fighting 40 claims/mo pays far above base). Add an upsell into proactive origin-photo *coverage scoring* (flag moves where the crew under-documented, before the claim ever lands).
- **Expansion path:** per-claim volume rises with the customer's growth; tiering by truck count; later, a valuation-upsell module that helps owners sell more of that 70–90%-margin coverage with confidence because they can now defend it.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the FMCSA HHG carrier registry + state mover licenses → ~7,000 emails with company size.** Send a personalized 60-second Loom: take one of *their own* public review-photo disputes (or a synthetic example) and show the side-by-side packet HaulProof would have produced. "This claim cost you $900. Here's the deny letter." Expect 3–5% reply on a demo that specific.
- **Go where the owners actually argue: the private mover Facebook groups and the AMSA / state moving-association forums.** These owners trade claims war-stories daily. Offer to run 5 free real claims through HaulProof for any owner who posts one — turn results into testimonials.
- **Partner with the crew-app vendors (CrewPro/Voxme/Movegistics) as the claims-defense layer they don't build.** They capture photos and have the distribution; HaulProof monetizes the photos. Revenue-share referral beats building distribution from zero.
- **Claims-adjuster / moving-arbitration consultants** (e.g. movingclaims.net-type services) refer the owners they can't fully serve.

## 10. Build complexity — justification

Medium. The matching engine is off-the-shelf multimodal vision plus a re-identification/retrieval layer — no custom model training to start; you prompt-and-retrieve against the photo set and tune. The PDF/letter generation, claims log, and clock are standard web stack. The real work is (a) ingesting messy real-world photo dumps reliably and (b) getting matching accuracy high enough that owners trust it — which is why it's Medium not Low, and why the verdict is "inconclusive → human," never silent auto-deny. A focused pair ships a credible v1 in ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Owner is processing their own claims data; supports (doesn't replace) FMCSA obligations. Must avoid advising illegal claim denials — tool informs, owner decides. |
| Ethical — no harm / dark patterns | ✅ | "Inconclusive → human review" by design; pays correct value for genuine damage. Risk: pushing unjust denials — mitigated by never auto-denying. |
| Market exists (evidence above) | ✅ | $16B software market, 39% of complaints are damage, claims defended manually today. |
| 1–5 person team can build this | ✅ | Off-the-shelf vision + standard web stack; ~3–4 months to v1. |
| Launchable with <$50K / ₹40L | ✅ | Inference + dev time; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring, costs money — but felt per-claim (weekly-ish), not literally hair-on-fire daily for every owner. Bigger fleets feel it more. |
| Demand evidence | 15 | 12/15 | Strong structural signals (settlement rate, complaint mix, margin-on-valuation) + 21 products tagging "claims." Weakness: operator-side verbatim quotes live in private FB groups, not indexable — couldn't surface clean direct quotes. |
| Build feasibility | 15 | 11/15 | Vision re-ID is the gnarly part; rest is standard. ~3–4 months, accuracy tuning is the risk. |
| Distribution clarity | 15 | 12/15 | Named lists (FMCSA registry, mover FB groups, crew-app partners) with specific outreach. Conversion on cold email still unproven. |
| Revenue mechanics | 15 | 12/15 | Pricing anchored below CRMs, ACV credible, $1M math conservative. Per-packet overage adds upside. |
| Time to first revenue | 10 | 7/10 | Free-claim trials → paid in 4–8 weeks plausible; needs a brief pilot to earn trust on accuracy. |
| Defensibility | 10 | 5/10 | Execution + workflow lock-in + accumulating matched-photo data. A CRM incumbent could bolt this on — but they've shown no interest, and the data/accuracy flywheel compounds. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (vision accuracy is the make-or-break) · `sales-heavy` (cold outreach to non-technical owners + FB-group hustle).

### Key assumptions to validate (3–5)

1. **Assumption:** Vision re-ID is accurate enough on real messy photo dumps that owners trust the verdict. **How to test:** run 100 real historical claims (photos + outcomes) from 5 friendly owners; measure match accuracy and false-deny rate against known outcomes.
2. **Assumption:** Owners will pay ~$249–499/mo for claims defense on top of their existing CRM. **How to test:** 30 owner interviews + a pre-sale offer at that price after showing their own packet.
3. **Assumption:** Crews actually capture enough origin photos to defend with (garbage in = no defense). **How to test:** audit 5 owners' last 50 moves for photo coverage; quantify the "under-documented move" rate (which is itself an upsell).
4. **Assumption:** The cold-email demo converts at ≥3%. **How to test:** send 500 personalized Looms, measure reply→demo→pilot funnel.

### Risk flags

1. **Accuracy / liability risk:** A wrong "pre-existing" call that pushes an unjust denial is both an ethical and a legal exposure. Mitigation: conservative thresholds, human-in-the-loop, position as decision-support not auto-deny.
2. **Garbage-in risk:** If crews didn't photograph the item at origin, there's nothing to match. The product is only as good as upstream capture — which is why crew-app partnerships (and the coverage-scoring upsell) matter.
3. **Platform/incumbent risk:** SmartMoving/Elromco could add photo-matching. Counter: they've treated claims as a checkbox for years, and the matched-photo dataset compounds for whoever owns the workflow first.
4. **Segment-size risk:** The truly painful problem concentrates in mid/large fleets; the smallest movers may not have the claim volume to justify $249/mo. Tier accordingly.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (vision/ML comfort) + scrappy outbound sales
Time to revenue:        6–10 weeks (free-claim pilots → paid)
Capital to launch:      $15–30K (inference + 3–4 months dev)
Top 3 assumptions to validate first:
  1. Vision re-ID accuracy on real messy photo dumps — backtest 100 historical claims vs known outcomes
  2. Owners pay $249–499/mo on top of their CRM — 30 interviews + pre-sale
  3. Crews capture enough origin photos to defend with — audit 250 real moves for coverage
Kill criteria:
  - Abandon if match accuracy < ~80% on real photo dumps (the verdict becomes untrustworthy and the product is just a folder)
  - Abandon if < 3 of 30 interviewed owners pre-commit at target price
  - Abandon if a major CRM ships credible photo-matching before your v1 and bundles it free
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Get historical claim files (origin photos + customer claim photos + known outcome) from 3–5 owners you can reach via mover FB groups. Offer to fight one free.
- **Day 3–4:** Run the re-ID matching by hand-with-AI on those real claims. Measure: did it find the same item, and did its pre-existing/new verdict agree with the real-world outcome?
- **Day 5:** Decide go / no-go on a **falsifiable** bar: **≥80% correct item-match AND ≥80% agreement with known claim outcomes across ≥40 disputed items.** Below that, the verdict isn't trustworthy enough to sell — stop or narrow scope to assisted-search only.
