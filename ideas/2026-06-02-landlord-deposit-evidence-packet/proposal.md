---
title: "DepositProof — move-out evidence packet for landlords"
slug: landlord-deposit-evidence-packet
date: 2026-06-02
category: PropTech / US
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Walks small landlords through the three legally-required photo sets and auto-drafts the compliant 21-day itemized deposit statement."
tags:
  vertical: PropTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, Solo-builder, Mobile-first, AI-agent]
axes:
  problem: 15
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, content-heavy]
featured: false
---

# DepositProof — move-out evidence packet for self-managing landlords

## 1. One-liner

Walks small landlords through the three legally-required photo sets and auto-drafts the compliant 21-day itemized deposit statement.

## 2. Trend signal — why now?

Two states just rewrote security-deposit law in the same 12 months, and both put the documentation burden squarely on the landlord with money-on-the-line penalties:

- **California AB 2801** rolled out in two stages — move-out photos required from **April 1, 2025**, and a full move-in / before-repair / after-repair photo sequence for all new tenancies from **July 1, 2025**. Within 21 days the landlord must hand the tenant an itemized statement *backed by photo evidence*. Fail in bad faith and you forfeit the right to claim **any** of the deposit, plus statutory damages.
- **Colorado HB 25-1249** (signed June 3, 2025, effective **January 1, 2026**) redefined "normal wear and tear," banned a pile of common deductions (carpet, paint), and added a tenant right to demand all supporting photos/invoices within 14 days. Penalty for getting it wrong: **triple** the wrongfully-withheld amount plus attorney fees.

Meanwhile the burden of proof in small claims has always been on the landlord — "the landlord has the legal burden of proving that damage justified keeping a deposit, and if the landlord fails to do that, the tenant will win" (Nolo). The new laws just made the proof *itemized, photographic, and time-bound*. The 10M+ "mom and pop" landlords who own 91% of US rental units by count don't have property-management software built for this — they have a phone camera and a Notes app.

Provenance:
  - Signal 1 (demand): "Handling the security deposit at move-out is the number one reason landlords and tenants end up in a dispute"; landlord loses if they can't prove damage with dated before/after photos — https://www.mypropertymanaged.com/post/rental-security-deposit-laws-2026-a-comprehensive-landlord-guide / https://www.nolo.com/legal-encyclopedia/free-books/small-claims-book/chapter20-2.html — 2026-06-02
  - Signal 2 (feasibility/why-now): CA AB 2801 (3-stage photo sequence + 21-day photo-backed itemized statement, phased Apr 1 & Jul 1 2025) and CO HB 25-1249 (effective Jan 1 2026, 3x penalty) — https://members.aagla.org/news/reminder-ab-2801---new-security-deposit-requirement-effective-july-1st / https://leg.colorado.gov/bills/hb25-1249 — 2026-06-02
  - Signal 3 (economic): ~10–11M individual landlords, 91% own ≤10 units, 41% of rental units; penalty exposure of "3x deposit + $2,000–$5,000 attorney fees" per botched move-out — https://ipropertymanagement.com/research/landlord-statistics / https://www.mypropertymanaged.com/post/rental-security-deposit-laws-2026-a-comprehensive-landlord-guide — 2026-06-02
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents — Baselane (free + $20/mo), RentRedi ($5–12/mo), Hemlane ($30/mo + $2/unit) — are **rent-collection and accounting** suites. They bolt deposit handling onto the side: a ledger line, maybe a generic move-in checklist. None of them runs the specific AB 2801 / HB 25-1249 *evidence sequence* — capture move-in photos before possession, capture move-out photos before any cleaning, capture after-repair photos for each deduction, then assemble all three into a tenant-ready itemized statement that ships inside the 21-day clock with the right legal language for the right state.

The 10× isn't a prettier dashboard. It's that a self-managing landlord doing one or two move-outs a year **does not know the rules, does not remember the photo sequence, and does not draft a defensible itemized statement** — and the penalty for screwing it up just went from "annoying" to "forfeit the deposit + 3x damages." A focused app that turns the law into a checklist they literally cannot skip is worth more to them than a $30/mo PM suite they'll never log into between tenants.

## 4. Target market

- **Primary customer:** US individual landlords who self-manage 1–10 units, starting in California and Colorado (the two states where the law is live and scary). Not institutions, not PM companies — the dentist with a duplex, the family that kept the old house as a rental.
- **Why they buy:** "I have 21 days, I don't know what I'm allowed to deduct, and if I get it wrong the tenant can take 3x the deposit." They feel this at exactly one moment — the day a tenant hands back keys — and they feel it sharply.
- **Rough TAM reasoning:** ~10–11M individual landlords nationally; CA + CO alone hold millions of units. Even capturing 50,000 paying landlords at ~$100–150/yr is a $5–7M ARR business, and that's a rounding error of the addressable base.
- **Why now for them:** AB 2801's move-in photo rule hit July 2025; CO's law went live January 2026. The 2026 move-out season is the first full cycle under both regimes. Landlord associations (AAGLA, SoCalRHA, BPOA) are actively blasting "new law reminder" notices — the fear is fresh and the search intent is spiking.

## 5. Product sketch (MVP)

- **Guided photo capture** — the app tells the landlord exactly which photos to take and when (move-in before possession, move-out before cleaning, after-repair per deduction), refusing to let them skip a required set. Every photo is timestamped and geotagged on capture.
- **State-aware deduction coach** — pick the state, answer a few questions per room; the app flags "that's normal wear and tear, you can't deduct that" before the landlord makes the mistake that loses the case.
- **Auto-drafted itemized statement** — generates the legally-formatted 21-day itemized statement, line by line, each deduction tied to its photo and its receipt/estimate, in the correct language for CA or CO.
- **21-day countdown + delivery** — a clock from move-out date, with one-tap delivery to the tenant by email/link (the methods the statute allows) and a stored proof-of-delivery record.
- **Evidence vault** — all three photo sets, receipts, and the final statement bundled into one immutable, exportable packet — the thing you hand a small-claims judge.
- **Receipt/estimate capture** — snap a repair invoice; it's OCR'd and attached to the matching line item.

## 6. AI angle — what's load-bearing

Two places AI does real work, not decoration:

1. **Wear-and-tear vs. damage classification.** The single most common reason landlords lose is deducting for normal wear and tear. A vision model that looks at a move-out photo and says "scuffed paint after 3-year tenancy = wear and tear, don't deduct" — with the statutory reasoning attached — is the product's spine. Remove it and you're back to a dumb checklist the landlord ignores.
2. **Itemized-statement drafting.** Turning "carpet stain, bedroom, $180 estimate" into a paragraph of defensible, state-correct statutory language — and adjusting it per jurisdiction — is exactly the 2-hour-to-2-minute collapse the operator looks for. A solo landlord can't write this; a lawyer charges $300 to.

If you stripped the AI, you'd have a photo album and a form. The classification + drafting is why a landlord pays.

## 7. Localization angle

N/A in the international sense — this is a US play. But it has a **strong intra-US "localization" wedge**: security-deposit law is state-by-state, and the new photo/penalty regimes are the localization. Launch CA + CO deep (correct statutes, correct deadlines, correct prohibited-deduction lists), then add a state per quarter as more states copy the model (this is a well-worn legislative pattern — wage transparency and data-privacy laws spread state-by-state the same way). The state-specific legal logic *is* the moat-ish thing; a generic "rental photos app" that doesn't know CA's 21-day rule from CO's 14-day documentation-request rule is useless.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Two tiers. **$12/mo or $99/yr** flat for the active landlord (unlimited move-outs). **Per-move-out one-shot at $39** for the once-a-year landlord who won't subscribe — buy it the week the tenant leaves. Most revenue from annual.
- **ACV:** ~$99–120 blended.
- **Rough math to $1M ARR:** ~9,000 paying landlords × ~$110 = ~$1M. CA + CO addressable base is in the millions; 9,000 is a sliver.
- **Rough math to $5M ARR:** ~45,000 paying landlords, which realistically means expanding past CA+CO to the next 6–8 states and adding the one-shot transactional buyers (who never subscribe but pay $39 each move-out). Plausible inside 24–36 months if state expansion keeps pace with new legislation.
- **Expansion path:** (a) more states = more addressable; (b) attach lease-document generation and move-in inspection upsell; (c) a "send to small-claims-ready packet" paid export; (d) referral pipe from real-estate agents and landlord associations.

## 9. Go-to-market wedge — first 100 customers

- **Landlord-association co-marketing.** AAGLA, SoCalRHA, Berkeley POA, Apartment Association of Greater LA are *already emailing members "AB 2801 reminder"* notices. Offer them a member discount + a co-branded "AB 2801 compliance kit." These lists are thousands of exactly-right landlords; one newsletter placement = the first 100.
- **Search intent capture.** "AB 2801 how to comply," "Colorado HB 25-1249 landlord," "security deposit itemized statement template California" are high-intent, low-competition queries from terrified landlords. A free statement-template + photo-checklist lead magnet → email → paid. The search volume is real and seasonal-spiking.
- **County/eviction-attorney referral.** Tenant-landlord attorneys and eviction-defense firms know which landlords just lost a deposit case. A "next time, do it right" referral card converts the burned ones.
- **Property-tax / rental-license mailing overlap.** CA and CO cities with rental registration have public landlord rolls — direct-mail/email the new-registrants a one-pager on the penalty exposure.

## 10. Build complexity — justification

**Low–Medium.** Mobile-first photo capture with timestamps, an LLM for the statement drafting, a vision model for wear-vs-damage classification, and a per-state rules table are all off-the-shelf. No custom ML training (few-shot the classifier against statute text). The genuinely fiddly part is *getting the per-state legal logic exactly right* — that's a content/legal-research task, not an engineering one, and it's why a domain advisor (a landlord-tenant paralegal or attorney) belongs on the team. A small team ships a CA-only v1 in 8–10 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | It's a compliance aid; no licensing needed. Must avoid "this is legal advice" — position as a tool, with attorney-reviewed templates. |
| Ethical — no harm / dark patterns | ✅ | Helps landlords comply with tenant-protective law; pro-tenant alignment, not adversarial. |
| Market exists (evidence above) | ✅ | New laws + 10M+ landlords + active association outreach. |
| 1–5 person team can build this | ✅ | Off-the-shelf vision/LLM + per-state rules content. |
| Launchable with <$50K / ₹40L | ✅ | App + legal-content review is the main cost. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Sharp pain, but felt rarely — once or twice a year per landlord. High-stakes when it hits, low-frequency between. That caps intensity. |
| Demand evidence | 15 | 12/15 | Two new laws, association blasts, well-documented dispute frequency, penalty teeth. Couldn't pull verbatim landlord-forum quotes (Reddit access blocked), so one notch off full marks. |
| Build feasibility | 15 | 13/15 | Off-the-shelf stack; the only hard part is per-state legal accuracy, which is content not code. |
| Distribution clarity | 15 | 11/15 | Association lists + high-intent search are concrete and cheap, but conversion of a once-a-year buyer to a subscription is the open question. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against incumbents; $1M math easy, but the once-a-year usage pattern pressures retention and pushes toward the lower-ACV one-shot tier. |
| Time to first revenue | 10 | 8/10 | CA landlords are scared *now*; a lead-magnet→paid funnel can convert within weeks of launch. |
| Defensibility | 10 | 4/10 | Per-state legal logic + association relationships are a soft moat, but a funded incumbent (Baselane) could bolt this on. Speed and niche focus are the only real edge. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (mobile + vision/LLM) · `content-heavy` (per-state legal research and template maintenance is ongoing work; ideally a landlord-tenant paralegal/attorney advisor).

### Key assumptions to validate (3–5)

1. **Assumption:** Self-managing landlords will pay ~$99/yr (or $39/move-out) for compliance peace-of-mind rather than wing it with a free template. **How to test:** Put a $39 pre-order / paid-waitlist page behind the association newsletter blast; measure conversion on real traffic.
2. **Assumption:** The once-or-twice-a-year usage pattern still supports a subscription (vs. everyone churning to the one-shot tier). **How to test:** Offer both tiers from day one; watch the annual-vs-one-shot split across the first 200 buyers.
3. **Assumption:** A vision model can classify wear-vs-damage accurately enough to be trusted (and not create liability). **How to test:** Score the classifier against 200 labeled move-out photos reviewed by a landlord-tenant attorney; require >90% agreement before shipping it as advisory (not determinative).
4. **Assumption:** Landlord associations will co-market. **How to test:** Pitch 3 CA associations a member discount within week 1.

### Risk flags

1. **Liability risk:** If the tool's advice is wrong and a landlord loses a case, they may blame you. Mitigate with "tool, not legal advice" framing, attorney-reviewed templates, and advisory-not-determinative AI output.
2. **Low-frequency usage:** Landlords engage twice a year, which hurts retention and makes subscriptions leak toward the one-shot tier. Pricing must absorb this.
3. **Platform/incumbent dependency:** Baselane/RentRedi/Hemlane could add an "AB 2801 mode" and out-distribute you on existing install base. The window is the 18 months before they bother.
4. **Regulatory drift:** State laws change; the per-state content is a perpetual maintenance cost, not a one-time build. (It's also the moat — cuts both ways.)

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo/pair founder + a landlord-tenant paralegal or attorney advisor
Time to revenue:        6–10 weeks (CA-only v1 + association blast)
Capital to launch:      $15–30K (mostly legal-content review + app build)
Top 3 assumptions to validate first:
  1. Willingness to pay ~$99/yr or $39/move-out — paid-waitlist conversion on real association traffic
  2. Subscription survives once-a-year usage — annual-vs-one-shot split across first 200 buyers
  3. Wear-vs-damage classifier >90% attorney agreement on 200 labeled photos before shipping as advisory
Kill criteria:
  - Abandon if paid-waitlist converts <2% of a warm association newsletter audience
  - Abandon if a major incumbent ships a comparable state-aware deposit-compliance flow before your v1
  - Abandon if >60% of buyers pick the one-shot tier AND never return (ARR can't compound)
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a one-page landing site for "DepositProof — AB 2801 done in 10 minutes" with the photo-checklist + free CA itemized-statement template as the lead magnet, and a $39 pre-order / $99-annual paid-waitlist button.
- **Day 3–4:** Pitch 3 California landlord associations (AAGLA, SoCalRHA, BPOA) on a co-branded member blast; buy a small batch of "AB 2801 how to comply" search ads to a cold audience for a price read.
- **Day 5:** Decide go/no-go. **Falsifiable bar:** ≥2% of warm association traffic puts down money (pre-order or annual). Below that, the pain is real but the wallet isn't open — kill or rework pricing.
