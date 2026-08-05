---
title: "PriceSentry — drift sentry for UK veterinary practices"
slug: vet-price-list-drift
date: 2026-08-05
category: VetTech / UK
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Catches the day your vet practice starts charging a price its published CMA list no longer matches."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [SMB, Compliance-driven, AI-agent, Solo-builder, VetTech]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 12
  revenue: 10
  time: 8
  defensibility: 5
founderFit: [technical-heavy, content-heavy]
featured: false
---

# PriceSentry

## 1. One-liner

Catches the day your vet practice starts charging a price its published CMA list no longer matches.

## 2. Trend signal — why now?

On 25 March 2026 the CMA closed a two-year market investigation into UK veterinary services and imposed binding remedies. Every first-opinion practice in Great Britain must publish a standard price list — on its website within one click of the homepage, and on display in reception.

The list is not small. Practices must publish 36 defined items across six pet weight categories — cat, small dog under 10kg, medium 10–25kg, large 25–40kg, extra-large 40–60kg, giant over 60kg. That is roughly **216 individual prices**, each VAT-inclusive, each required to bundle every clinically necessary component (you cannot quote a spay fee and omit the anaesthetic).

Here is the sentence that makes this a product rather than a form-filling exercise. From the CMA's own guidance on GOV.UK:

> "Where prices change, price lists must be updated **before** new prices are charged to pet owners."

That is a synchronisation obligation, not a publishing one. The moment a practice raises a price in its practice management system and charges it before the website catches up, it is in breach of a legally binding Order. Drug costs move. Suppliers reprice. A practice manager nudges a consult fee. Nobody rebuilds a 216-cell price list that afternoon.

The CMA has three escalating enforcement levers for Order breaches: engagement, binding directions, and **financial penalties**. The RCVS will oversee compliance and run the comparison service, funded by a levy on veterinary businesses estimated at £450–£550 per practice per year — so practices are already being billed for the regime that will audit them.

Timelines are live. CMA Orders are expected September 2026. Small businesses (under 15 first-opinion practices) get six months for price lists, twelve months for itemised bills, written estimates, and prescription fee caps. Large groups (15+) move faster — three and nine months. Full compliance lands through 2027.

Compliance is already understood to be brutal. Kern Nightingale, co-owner of the free Pricebook.vet tool, put the arithmetic plainly: for a price list of just 36 items there are **"close to 250 to 300 compliance checks,"** and that is *"going to be very tricky, especially for independent practices that do not have a corporate IT department to sort it out for them."*

The CMA's own baseline shows how far practices are starting from: when the investigation began, only **16% of 2,552 vet practices** had pricing information on their website. That had risen to 59% by the time of the final survey — meaning four in ten still had nothing, months from a binding deadline.

Provenance:
  - Signal 1 (Demand): CMA final report imposes mandatory price lists on all UK first-opinion vet practices; only 16% of 2,552 practices had website pricing at investigation start — https://www.gov.uk/government/news/cma-concludes-market-investigation-with-major-reforms-to-veterinary-sector — 25 Mar 2026
  - Signal 2 (Feasibility/Pain): CMA guidance requires price lists be "updated before new prices are charged"; 36 items × 6 weight bands ≈ 216 prices; practitioner quotes "250 to 300 compliance checks" and warns independents lack corporate IT — https://www.gov.uk/guidance/what-veterinary-businesses-and-vets-need-to-do-following-the-cmas-final-vets-report and https://www.vettimes.com/news/business/finance/free-cma-pricing-compliance-tool-offered-to-amazingly-supportive-community — 2026
  - Signal 3 (Economic): Paid compliance tooling already emerging and selling — VetGuard £49/mo+VAT, VetComply planned £29/mo; RCVS levy of £450–£550 per practice per year establishes the compliance budget line — https://vetguard.uk/ , https://vetcomply.co.uk/ , https://www.vettimes.com/news/business/practice-developments/cma-transparency-rules-what-do-you-need-to-know — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

Three tools already exist for UK vet CMA pricing. I looked at all three, and they solve the same half of the problem.

**Pricebook.vet** is free, built by a practitioner, and lets you assemble a compliant list in about 30 minutes. **VetComply** (planned £29/mo) is a compliance checklist dashboard covering twelve non-clinical streams — H&S, COSHH, radiation, GDPR, CMA pricing. **VetGuard** (£49/mo + VAT) hosts the price list, ownership disclosure, and a complaints inbox.

Every one of them is a **build-and-publish** tool. They get you compliant on day one and then go quiet. VetComply's own positioning gives the game away — it markets itself on the fact that "PMS handles clinical, not compliance," explicitly declining to touch the practice management system. Press coverage of Pricebook.vet is silent on how it handles ongoing price updates, because it doesn't.

Day one is the easy day. Day 90 is when you break the Order — quietly, without noticing, because a wormer went up 40p and the PMS took the new price while the website kept the old one.

**The gap: nobody is watching the practice's actual charging data against its own published list.** That is the entire product. Read the price file out of the PMS on a schedule, diff it against what is published, and tell the practice manager — before the new price is charged — exactly which cells moved and which of the 216 need republishing.

This is a monitoring play in a market where everyone else sold a form builder. Different product, different retention profile: a form builder is bought once and churns; a sentry that emails "3 prices diverged this morning" is renewed forever, because cancelling it means going blind on a regulated obligation.

## 4. Target market

- **Primary customer:** Practice manager or owner-vet at an **independent UK first-opinion small-animal practice**, 1–6 sites, typically £400K–£3M turnover, no in-house IT. The CMA classes anything under 15 first-opinion premises as a "small business" for compliance timing — that is my whole market, and it is the cohort that gets the *later* deadline and therefore is still unsold today.
- **Why they buy:** In their words, via the trade press — compliance is *"going to be very tricky, especially for independent practices that do not have a corporate IT department to sort it out for them."* They are not worried about building the list once. They are worried about a regulator with penalty powers finding a mismatch eighteen months from now, and having no record of when the price changed or who approved it.
- **Rough TAM reasoning:** Roughly 2,552 practices were in the CMA's survey frame. Corporate ownership has moved from ~10% to ~60% over the last decade, leaving on the order of **1,000–1,300 independently owned practices** — plus small groups under the 15-premises threshold. At £59/mo, 1,000 reachable practices is a ~£700K ARR ceiling on UK independents alone. That is small, and it is why this is a bootstrap play, not a venture one. Expansion beyond that ceiling is section 8's problem.
- **Why now for them:** The Order lands September 2026 with a six-month price-list clock for small practices. Between now and mid-2027 every independent practice in Britain has to solve this once — and then live with it permanently. The buying window is open and dated.

## 5. Product sketch (MVP)

- **Daily price diff.** Pulls the practice's price/product file from its PMS (or a scheduled export where no API exists) and compares every mapped item against the published list.
- **Pre-charge alert.** Emails the practice manager the morning a divergence appears: "Bitch spay 10–25kg moved £312 → £335 in RoboVet. Published list still shows £312. Update before you charge it."
- **The 216-cell grid.** Live view of all 36 items × 6 weight bands, colour-coded: matched, drifted, never-set. Makes the gaps visible instead of buried in a spreadsheet tab.
- **One-click republish.** Pushes corrected prices to the practice's hosted price-list page and a website embed, so fixing the breach takes a minute rather than a call to the web designer.
- **VAT and bundling checker.** Flags prices that look ex-VAT, and surgical items priced suspiciously close to a bare procedure fee — the anaesthetic-omitted trap the CMA specifically calls out.
- **Compliance timeline log.** Immutable record of every price change, when it was published, and who approved it. This is the artefact you hand a regulator to show you updated *before* charging.
- **Prescription fee guard.** Watches written prescription fees against the £21 first-item / £12.50 additional-item caps and alerts on breach.
- **Estimate threshold nudge.** Flags when typical invoice values cross the £500 written-estimate trigger, so the practice knows which procedures now need written estimates.

## 6. AI angle — what's load-bearing

Remove the AI and this product genuinely does not work, because the hard problem is **semantic mapping, not diffing**.

A practice's PMS holds several thousand billing codes with names like `SPAY BITCH 10-25 INC GA`, `Consult - Repeat (Nurse)`, `CREM-IND-SM`. The CMA's schedule holds 36 canonical items across six weight bands. Nobody maintains a crosswalk between them, every practice names its codes differently, and asking a practice manager to hand-map thousands of codes to 216 cells is exactly the 250–300-check drudgery that makes them hate this regime.

An LLM reads the practice's code list once and proposes the mapping — which codes constitute "bitch spay, 10–25kg, including anaesthetic," which cremation code is individual versus communal, which consult code is out-of-hours. The manager confirms or corrects; the mapping becomes durable config. That onboarding step collapses from a day of spreadsheet work to about twenty minutes.

AI does a second load-bearing job: judging whether a bundled price is *complete*. Detecting that a surgical code's price omits a separately-coded anaesthetic requires reading the code descriptions and reasoning about what a "standard case with minimal complexity" includes. That is a language problem, and it is the exact thing the CMA will penalise.

The daily diff itself is trivial arithmetic. The mapping and the completeness judgement are the moat, and they are only cheap now.

## 7. Localization angle

This is a UK-only regulatory play by construction — the product is a function of a specific CMA Order, its 36-item schedule, its six weight bands, and its £21/£12.50 prescription caps. There is no meaningful sub-national localization within Britain.

The interesting adjacency is *regulatory export*, not translation. Ireland, Australia and Canada all have veterinary bodies watching the UK outcome, and the CMA's investigation was itself prompted by consolidation dynamics common to all three. If any follows with a transparency remedy, the mapping engine and the 216-cell grid re-point at a new schedule in weeks. That is a bet to place later, not to build for now.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** £59/mo per practice site (single-site independent). £39/site for groups of 2–6. Sits deliberately above VetGuard's £49 — this is monitoring, not hosting, and it is cheaper than one hour of a compliance consultant.
- **ACV:** ~£710 single-site; ~£1,900 for a typical 4-site small group. Note the RCVS levy is already £450–£550/practice/year, so £708 is a recognisable order of magnitude for this line item, not a shock.
- **Math to £250K ARR:** 350 practices × £59 × 12 = £248K. That is roughly 30% of the reachable UK independent base — achievable, and enough to support a two-person team very comfortably.
- **Math to $1M ARR (~£790K):** UK independents alone cannot get there. Requires one of: (a) taking the small-group segment plus a slice of the corporate estate, (b) expanding the product beyond pricing into the itemised-bill and written-estimate obligations that hit at the 12-month mark, or (c) a second country adopting a comparable remedy. Honest read: **£1M ARR is a 3-year outcome contingent on (b) plus (c), not a 24-month certainty.** I am scoring revenue mechanics down accordingly.
- **Math to $5M ARR:** Not credible on this product in this market. Would require becoming the general non-clinical compliance layer for veterinary practices across several English-speaking markets — a different, bigger company. I would not underwrite it today.
- **Expansion path:** Price monitoring → itemised bill auditing (12-month CMA deadline) → written estimate compliance → the full non-clinical compliance record. Each new obligation is a price rise on an installed base that cannot easily leave.

The honest framing: this is a **£250K–£700K ARR business with high margins and brutal retention**, with an option on more. For a solo operator or a pair, that is a genuinely good outcome. For anyone expecting a rocket, it is not.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the non-compliant.** The RCVS publishes a searchable register of practice premises. Crawl every independent practice website and check one thing: is there a price list within one click of the homepage, and does it cover all 36 items across six weight bands? The CMA's own survey says a large minority still have nothing. Each failing practice gets a personalised email with a screenshot of their own homepage and the specific cells they are missing, plus the date their six-month clock expires. This is a list of roughly 1,000 addressable practices, individually diagnosed, and the diagnosis *is* the sales pitch.
- **Sit downstream of the free tool.** Pricebook.vet solves publishing for free and has community goodwill. I am not competing with it — I integrate with it. Offer a free "drift check" that reads any published price list and re-checks it monthly. Practices that used the free builder are pre-qualified: they have already accepted they need a list, and they are exactly the ones with no process for maintaining it.
- **Buying groups and the independent networks.** XLVets, VetPartners-adjacent independent alliances, and the SPVS (Society of Practising Veterinary Surgeons) exist specifically to give independents the scale benefits corporates have. A regime that explicitly disadvantages practices without corporate IT is the single most on-message thing these groups will discuss in 2026. One partnership deal reaches hundreds of practices with an implied endorsement.
- **The trade press has already framed the story.** Vet Times, VetSurgeon and VetNurse are actively covering CMA compliance and quoting practitioners about the burden. A genuinely useful free artefact — "we checked all 2,552 UK practice websites against the CMA's 36-item schedule, here is who is compliant" — is a story those outlets will run, and it doubles as the lead-gen scrape from bullet one.
- **SPVS/BVA congress season.** Practice managers buy operational software at these events, and the 2026–27 cycle is the compliance-anxiety peak. A live demo that reads a practice's own website on the stand and shows them their gaps closes in one conversation.

Realistic math: 1,000 diagnosed practices, ~35% open a personalised gap report, ~8% book a demo, ~35% of demos convert = roughly 28 customers from cold outreach alone. Buying groups and press carry the rest to 100.

## 10. Build complexity — justification

**Low.** The engine is a scheduled job, a diff, and a hosted page — standard web stack, no novel infrastructure. The LLM mapping step is an off-the-shelf model call over a code list, done once per practice at onboarding.

The one real cost is PMS connectivity. The UK market is fragmented across RoboVet, Merlin, Panacea, VetIT, ezyVet, Provet Cloud and Lupa, and not all offer clean partner APIs. I would ship v1 against the two or three most common systems among independents plus a **scheduled CSV export fallback** that works for everything else — a manager dropping a weekly export into an inbox still gets 95% of the value. That fallback is what keeps this Low rather than Medium.

A capable pair ships a credible v1 in **8–10 weeks**.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps practices comply with a binding CMA Order. No regulated activity performed. |
| Ethical — no harm / dark patterns | ✅ | Pushes practices toward accurate public pricing. Consumer interest and customer interest align. |
| Market exists (evidence above) | ✅ | ~1,000+ independent practices under a dated legal obligation; three paid/free tools already trading in the category. |
| 1–5 person team can build this | ✅ | Two people, 8–10 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Well under £15K — inference, hosting, and a congress stand. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Legally binding, penalty-backed, and permanent — not a one-off. Docked because the pain is a slow leak, not daily blood: a practice can be technically in breach for months without feeling anything, which weakens urgency versus a hair-on-fire problem. |
| Demand evidence | 15 | 12/15 | Very strong regulatory evidence with hard dates and CMA's own 16%-compliance baseline. Competitors charging money confirms budget. Docked because I found no direct verbatim customer demand for *drift monitoring specifically* — the sourced quotes prove the compliance burden, not that practices will pay to have it watched. That is the core untested assumption. |
| Build feasibility | 15 | 13/15 | Off-the-shelf stack, 8–10 weeks. PMS fragmentation is the only friction, mitigated by the CSV fallback. |
| Distribution clarity | 15 | 12/15 | Named, enumerable list of ~1,000 practices, each individually diagnosable by scraping their own website. Real conversion uncertainty on cold email, but the channel is concrete and cheap. |
| Revenue mechanics | 15 | 10/15 | Pricing is benchmarked against live competitors and the RCVS levy, so willingness-to-pay is grounded. Scored down honestly: the UK independent base caps out near £700K ARR, so $1M+ needs product expansion or a second country. Good business, limited ceiling. |
| Time to first revenue | 10 | 8/10 | Practices under a dated deadline buy fast, and the gap report is a strong opener. Revenue plausible 6–8 weeks post-launch; not instant, because practice managers move at practice-manager speed. |
| Defensibility | 10 | 5/10 | Execution-and-integration moat only. The mapping crosswalk and PMS connections compound, and switching means re-onboarding a regulated record — but a determined incumbent (VetGuard already has the customers) could add monitoring. Speed matters more than moat here. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical because PMS integration and the mapping engine are the product. Content because the distribution wedge is a research artefact — auditing 2,552 websites and publishing the findings — and the trade press is the amplifier.

### Key assumptions to validate

1. **Assumption:** Practices perceive *ongoing drift* as a real risk, not just initial publication. **How to test:** 25 calls with independent practice managers. Ask directly: "When you next raise a price, what is your process for updating the published list first?" If most have a confident answer, the product is unnecessary. If they go quiet, it is real.
2. **Assumption:** Prices actually drift often enough to justify a subscription. **How to test:** Snapshot 100 practice published price lists now, re-scrape at 60 and 120 days, measure the change rate. If fewer than 20% of practices change any price in four months, this is an annual product, not a monthly one — and the pricing model breaks.
3. **Assumption:** Enough PMS price data is reachable without formal partner APIs. **How to test:** Get five practices to attempt a price-file export from their own PMS. If three of five cannot produce one in under fifteen minutes, onboarding friction kills the funnel.
4. **Assumption:** £59/mo clears when a free builder exists. **How to test:** Put the price in front of 20 practices already using Pricebook.vet. Monitoring must be understood as a distinct category from publishing, or the free tool anchors the price to zero.

### Risk flags

1. **Competitive encroachment:** VetGuard (£49/mo) and VetComply (£29/mo) already hold the customer relationship. Monitoring is a feature they can bolt on. My head start is the mapping engine and the PMS connections — that is a 6–12 month lead, not a decade.
2. **Regulatory wobble:** Digital Practice has formally warned that publishing prices for *some* parasiticides but not others may breach POM-V advertising rules — *"As soon as you pick and choose to list the prices of some but not others, this is illegal"* — and noted the CMA cannot change that interpretation unilaterally without the VMD. This threatens the parasiticide slice of the schedule, not the whole remedy, but it could delay or reshape part of the list.
3. **Market ceiling:** ~1,000–1,300 independent practices is a hard wall. Corporate groups have in-house IT and will not buy. This is structurally a sub-£1M ARR business unless it expands scope or geography.
4. **Timing sensitivity:** The buying window is the compliance run-up through 2027. Launch after practices have muddled through once and urgency drops sharply — this idea is worth materially less in 2028 than in 2026.
5. **Platform dependency:** PMS vendors (ezyVet, Provet, RoboVet) could ship native CMA price publishing and close the seam entirely. Provet and ezyVet are already integration-hungry.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can ship integrations, paired with someone
                        credible in UK veterinary circles for trade-press and buying-group access
Time to revenue:        6–8 weeks post-launch; 4 months from a standing start
Capital to launch:      £10–15K ($13–19K)
Top 3 assumptions to validate first:
  1. Practices fear ongoing drift, not just initial publication — 25 practice-manager calls
  2. Prices drift measurably — scrape 100 published lists at 0/60/120 days, measure change rate
  3. £59/mo clears against a free publishing tool — price test with 20 Pricebook.vet users
Kill criteria:
  - Abandon if <20% of 100 monitored practices change any published price within 120 days
    (no drift = no product)
  - Abandon if fewer than 5 of 25 practice managers can articulate a fear of mismatch penalties
  - Abandon if VetGuard or a major PMS ships automated price-drift monitoring before v1
  - Abandon if the CMA delays or materially guts the price list Order past mid-2027
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the scraper. Pull the RCVS premises register, crawl every independent practice website, and score each against the 36-item × 6-band schedule. Output: a ranked list of non-compliant practices. This is simultaneously the validation instrument and the sales list.
- **Day 3–4:** Snapshot 100 practices' published prices as a baseline for the drift measurement — the clock on assumption 2 starts now, because it needs 120 days and I want it running before I commit. Then call 25 independent practice managers. One question carries the week: *"When you next change a price, what happens to your website?"*
- **Day 5:** Decide. **Go if ≥12 of 25 managers have no defined process for updating the published list before charging, and ≥8 express concern about being caught mismatched.** No-go if managers are confident it is handled, or if they treat CMA compliance as a solved one-off.

The falsifiable core: if practice managers already have a reliable update process, there is no product here — and one week of calls proves it either way.
