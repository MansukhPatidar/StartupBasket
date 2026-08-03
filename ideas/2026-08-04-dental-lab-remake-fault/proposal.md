---
title: "PrepScreen — intake screen for small dental labs"
slug: dental-lab-remake-fault
date: 2026-08-04
category: HealthTech / US-SMB — Family-Owned Dental Laboratories (2–15 Technicians) Taking Digital Cases From Independent Dentists
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Catches the unusable scan before your technician touches it, and proves whose fault it was."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Workflow automation, Solo-builder, Dental]
axes:
  problem: 16
  demand: 12
  build: 10
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PrepScreen

## 1. One-liner

Catches the unusable scan before your technician touches it, and proves whose fault it was.

## 2. Trend signal — why now?

Three things moved at once, and they moved in the lab's direction.

**Digital submission became the default, which means the evidence now exists.** US intraoral scanner penetration hit roughly 60–62% of practices, and Glidewell — the largest lab in the country — received 78% of its 2025 crown orders as STL files ([Cerec Tips, 2026](https://cerectips.com/blog/the-evolution-of-dental-scanners-where-we-are-in-2/)). Five years ago a bad case arrived as a physical impression in a box: unarguable, unmeasurable, and gone once you poured it. Today it arrives as a file with a timestamp. That is the whole unlock. You cannot build an evidence product on top of a polyvinyl impression. You can build one on top of an STL.

**The remake problem is quantified and it eats the entire margin.** US national average remake rate is 4%, ranging up to 6–7% ([Spear Education](https://www.speareducation.com/resources/spear-digest/the-cost-of-laboratory-remakes/)). Meanwhile NADL puts typical lab net profit margin at 5–10%. Sit with that for a second: the remake rate and the net margin are the same number. A lab running 6% remakes at 6% margin is working for free. And the causes are not exotic — margin-fit discrepancy 29.5%, proximal-fit 23.2%, improper fit 22.7% ([PMC review](https://pmc.ncbi.nlm.nih.gov/articles/PMC12901796/)) — with up to 65% of remakes tracing to communication failure rather than technical error, and 80% of dentists not completing the information legally required on the prescription form.

**Vision models got good enough and cheap enough to inspect 3D scan data at intake.** Margin detection, soft-tissue and saliva artifact removal, and preparation-line identification are now standard in AI-integrated scanning workflows, reportedly saving 30–45 minutes per case ([Yucera, 2026](https://www.yucera.com/blogs/ai-integration-in-dental-scanning-and-design-2026/)). Inference costs collapsed roughly 90% from 2023 levels. A per-case automated inspection that would have been a research project in 2023 now costs cents.

The one that convinced me: Glidewell runs a **Centralized Digital Order Processing team** — actual salaried humans — whose job is screening every incoming scan for design-readiness before production starts ([Glidewell Chairside](https://glidewelldental.com/education/chairside-magazine/volume-12-issue-3/digital-dentistry-lab)). The biggest lab in America decided this function is worth a department. A 6-technician family lab needs the identical function and cannot possibly staff it. That is the arbitrage.

```
Provenance:
  - Signal 1 (Demand): US remake rate 4% (range 1–7%) against NADL-cited lab net margin of 5–10%; 65% of remakes trace to communication failure; 80% of dentists submit incomplete Rx forms; technicians publicly describe absorbing no-charge remakes for dentist-caused defects — https://www.speareducation.com/resources/spear-digest/the-cost-of-laboratory-remakes/ and https://www.dentistryiq.com/dentistry/prosthodontics-and-laboratory/article/16367401/from-chair-to-lab-things-dentists-do-that-make-lab-techs-jobs-more-challenging — accessed 2026-08-04
  - Signal 2 (Feasibility): US intraoral scanner penetration ~60–62%; Glidewell took 78% of 2025 crown orders as STL; AI margin detection and scan-artifact cleanup now standard, 30–45 min/case savings; inference costs down ~90% since 2023 — https://cerectips.com/blog/the-evolution-of-dental-scanners-where-we-are-in-2/ and https://www.yucera.com/blogs/ai-integration-in-dental-scanning-and-design-2026/ — accessed 2026-08-04
  - Signal 3 (Economic): ~5,000 US dental laboratories employing ~45,000 technicians, majority family-owned with <10 technicians; active paid software market from $29/mo (SimpleLabOS) to $250/mo (LabStar) to $199–500+/mo enterprise tiers; Glidewell staffs a dedicated Centralized Digital Order Processing screening team; 3Shape acquired LabStar — https://www.grandviewresearch.com/industry-analysis/us-dental-laboratories-market-report and https://simplelabos.com/blog/top-dental-lab-management-software-2026 — accessed 2026-08-04
  Category: Tech-unlock
```

## 3. The opportunity

Every dental lab software vendor on the market sells the same thing with a different logo: case management. Kanban boards, invoicing, tracking, a client portal. TrazaLab sells a "Structured Case Capture intake form." SimpleLabOS sells $29/mo case tracking. LabStar sells $250/mo at the higher end and got bought by 3Shape. They all help you *organize* cases. **None of them tell you a case is going to fail before you build it, and none of them produce evidence you can put in front of a dentist.**

That distinction is the entire business. A form collects what the dentist chose to type. A gate renders a verdict on what the dentist actually sent.

The incumbent I'm displacing isn't really software — it's the lab owner's own eyeballs, applied inconsistently at 7pm, plus a remake policy that amounts to surrender. The industry norm is that labs eat remakes "irrespective of whose fault it was." One technician on Dental Lab Network described it as "Sometimes feel as if we just bend over and take 1 for the team!" Another said flatly: "I charge for remakes where I have warned you about something." That second quote is the product spec. The only technicians who successfully charge for remakes are the ones who documented the defect in advance. Right now that documentation is a phone call nobody logged.

What a focused team does 10× better: inspect every incoming file in under two minutes, automatically, against the specific defects that actually cause remakes, and emit a timestamped record that converts a losing argument into a billable one.

EviSmart is the closest competitor and it does gesture at "AI QC at intake" and "Rx-to-scan matching." Real threat, and I'm not going to pretend otherwise. But it's sold as a module inside a full lab-management platform — a rip-and-replace of the lab's existing system. I'm selling a thin layer that sits in front of whatever they already run, which is a dramatically easier sale to a lab that just spent two years getting onto LabStar.

## 4. Target market

- **Primary customer:** Owner-operator of a US commercial dental laboratory, 2–15 technicians, 150–800 crown-and-bridge units per month, taking digital cases from 15–60 independent dentist accounts. The owner is usually a CDT who still works the bench. There are roughly 5,000 US labs employing ~45,000 technicians, and the majority are family-owned with under 10 technicians.
- **Why they buy:** Because a remake is not a 4% problem, it's a margin-elimination problem. At 5–10% net margin and a 4% remake rate, every avoided remake is nearly pure profit. And because losing the fault argument is personally infuriating in a way that generic efficiency software never touches. From DentistryIQ, technicians on what dentists do: *"When a digital case is sent and the margins aren't marked and they expect you to mark their impossibly terrible prep."* And: *"Only getting minimal clearance and expecting a no charge remake after grinding."* And the one I keep coming back to — dentists sending cases back claiming *"Margins marked incorrectly, remake at no charge!"* That is a lab being billed for a dentist's error, with no way to prove otherwise.
- **Rough TAM reasoning:** ~5,000 US labs. Strip out the sub-2-person shops and the mega-labs with in-house screening teams, and the serviceable set is ~2,500–3,000. At $200/mo average that's a $6–7M ARR ceiling in the US alone. Small — which is exactly why 3Shape and Evident aren't going to build a dedicated product for it, and exactly why a bootstrapper should. Adjacent expansion into UK, Canada, Australia and the German *Meisterlabor* market roughly doubles it.
- **Why now for them:** Their case mix crossed from physical to digital in the last three years. The evidence they need has existed only for about as long. Simultaneously, DSO consolidation is squeezing their per-unit pricing, so cost recovery on remakes went from annoying to existential.

## 5. Product sketch (MVP)

- **Intake inspection.** Every incoming STL/PLY and its Rx get automatically checked within minutes of arrival, before a technician opens the case.
- **Defect verdict on the failure modes that actually matter.** Unmarked or unreadable margin line, insufficient occlusal/axial clearance for the prescribed material, missing scan bodies on implant cases, soft-tissue and saliva obstruction over the prep, distorted or incomplete bite registration. These map directly to the published remake causes rather than a generic "quality score."
- **Rx completeness check.** Flags the fields that are missing or contradict the scan — no shade, no material, missing implant system, pontic design unspecified, a stated material the measured clearance won't physically support.
- **Traffic-light disposition.** Green: build it. Yellow: buildable but flagged, with the risk noted on the record. Red: do not start, return to dentist.
- **One-click dentist callback.** Generates the message back to the practice with an annotated image of the exact problem area, so the argument happens in hour one instead of week three.
- **The fault ledger.** A permanent timestamped record per case: what arrived, what was flagged, what the lab told the dentist, when. When a remake demand lands, the lab opens the case and has its answer.
- **Account scorecards.** Per-dentist rolling stats — flag rate, red rate, remake rate. The lab finally knows which three accounts are quietly unprofitable.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — you'd be selling a checklist, and labs already have checklists they don't fill in.

Two genuinely load-bearing jobs. First, **geometric interpretation of 3D scan data**: identifying the preparation, finding or failing to find a defined margin line, measuring occlusal and axial clearance against the material's minimum thickness, and detecting tissue or saliva obstructing the finish line. This is vision and geometry work on mesh data, and it's the part that became reliable and cheap enough only recently.

Second, **cross-checking the prescription against the scan** — a language-and-reasoning task. The dentist wrote "zirconia, full contour." The scan shows 0.4mm occlusal clearance. Those two facts contradict each other and no amount of form validation catches it, because each field is individually valid. That contradiction is a remake, three weeks early.

The honest caveat, and it's the main technical risk: automated margin detection is good, not perfect. So the product is deliberately built as a **triage layer, not an oracle**. It doesn't need to be right about every case. It needs to catch the obvious disasters — the ones a human screener would also catch, if the lab could afford a human screener — and be conservative about the ambiguous ones. Yellow is a legitimate answer.

## 7. Localization angle (if any)

US-first, and this is a case where localization is a distraction rather than a wedge. The remake-cost problem is universal, but the US has the specific combination that makes it a business: high scanner penetration, ~5,000 independent labs that haven't consolidated away, and dentist–lab relationships that are contractual and adversarial enough that documented fault has cash value.

The natural second markets are the UK, Canada, and Australia — same language, same dynamics, near-zero adaptation cost. Germany is interesting later for a different reason: the *Meisterlabor* system and the BEL/BEB fee structure make documentation culturally normal, so evidence-first positioning lands well. India and SEA are the wrong call here, not because labs don't exist but because a lab doing $8 crowns has no margin at any price point I'd want to charge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered on monthly case volume. $149/mo up to 200 cases, $299/mo up to 600, $549/mo above that. Priced deliberately below the value of a single avoided remake per month.
- **ACV:** ~$2,900 blended.
- **Rough math to $1M ARR:** 345 labs at $2,900 average. That's roughly 12% of the serviceable 2,500–3,000 US labs. Reachable.
- **Rough math to $5M ARR:** Requires two things beyond the US core. Deeper penetration (~30–35% of serviceable US labs, ~1,000 labs) plus English-speaking international expansion, or a second SKU sold to the other side — a pre-submission check for group practices and DSOs who want their scans to pass before they send them. That second SKU is where the real headroom is, but I wouldn't build it before year two.
- **Expansion path:** Volume tier creep as labs grow, then per-seat for multi-technician review workflows, then the dentist-side product. Note the pleasant dynamic — a lab that reduces remakes takes on more accounts, which pushes it into a higher tier. Expansion is aligned with the customer actually winning.
- **Margin note:** Per-case inference cost is cents against a per-case revenue of roughly $0.50–$1.00. Gross margin is comfortably in normal SaaS territory. This doesn't break at scale.

## 9. Go-to-market wedge — first 100 customers

- **The audit as the sales pitch.** Ask a lab for their last 60 completed digital cases — files they already have. Run them through the gate for free and hand back a one-page report: "11 of these had defects at intake. Four of them became remakes. Here's the money, and here's which two dentists sent them." This is a retrospective, verifiable, no-risk demo of a product the lab is already generating data for. That report *is* the sale, and I'd expect 20%+ close on any lab that agrees to hand over the files.
- **Named list, not a directory scrape.** NADL represents ~1,000 commercial labs, with state and regional associations covering 1,600+. Combined with the CDT registry and state association member lists, this is a few thousand named labs with named owners — a finite, enumerable market. 500 targeted outreaches to get the first 40–60 audits.
- **Dental Lab Network and the technician communities.** This is where the complaints already are, verbatim, publicly. The forum threads I pulled quotes from are the exact watering hole. Not a sponsorship play — show up with real data on remake causes across labs, which nobody currently publishes because nobody has the cross-lab view.
- **Trade shows where the buyer physically attends.** LMT Lab Day Chicago and the NADL Vision meeting are the two events where several thousand lab owners are in one building. A booth demoing "hand me a case file, I'll tell you if it's going to fail" is a live demo that closes in the aisle. One event should produce 30–50 audits.
- **The CDT consultant channel.** A small set of lab-management consultants advise dozens of labs each on profitability. A tool that visibly cuts remake cost is exactly what they're paid to recommend. Revenue-share three of them.

## 10. Build complexity — justification

**Medium.** The mesh-geometry work is the real engineering — parsing STL/PLY reliably across scanner vendors, isolating the preparation, measuring clearance, and assessing margin definition. That's genuine 3D work, not an API call, and it needs a technical founder who's comfortable with computational geometry. The Rx cross-check and everything above it is standard off-the-shelf model work. Integrations are mercifully simple, since digital cases arrive through a small number of channels the lab already monitors.

Call it 12–16 weeks to a v1 that inspects crown-and-bridge cases well enough to demo, with implants and full-arch deferred. The retrospective-audit GTM is a gift here: I can validate accuracy on real historical cases with known outcomes before a single line of production UI exists. I know if the detection works before I commit.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | B2B tooling between labs and dentists. Not a medical device — it does not diagnose patients or drive treatment. It inspects a manufacturing input for production readiness. Worth a formal FDA opinion before scaling, but the software-as-manufacturing-QC framing is well-trodden. |
| Ethical — no harm / dark patterns | ✅ | Catching a defective restoration before it's built is straightforwardly good for the patient too. |
| Market exists (evidence above) | ✅ | Quantified remake rates, published margin data, an active paid software market from $29–$500/mo, and Glidewell staffing this exact function as a department. |
| 1–5 person team can build this | ✅ | Two people. One strong on 3D geometry, one on product and sales. |
| Launchable with <$50K / ₹40L | ✅ | Inference is cents per case. The real cost is a trade show booth and travel. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Remake rate equals net margin — this is money the owner already knows he's losing, plus a genuine emotional charge around unfair blame. Not a 17+ only because labs have normalized eating remakes as a cost of doing business; some owners have made peace with it. |
| Demand evidence | 15 | 12/15 | Strong published data on rates, causes and costs, plus verbatim technician complaints and a paid software market. Docked because no one is currently paying for *this specific product* — nearest paid proxy is a bundled QC module. |
| Build feasibility | 15 | 10/15 | 12–16 weeks, two people. The mesh geometry is real work and detection accuracy is the binding constraint, not the UI. |
| Distribution clarity | 15 | 12/15 | Finite enumerable market with named owners, a retrospective-audit demo that proves value on the prospect's own data, and two trade shows where the whole buyer base shows up. Docked because lab owners are famously slow adopters. |
| Revenue mechanics | 15 | 11/15 | Pricing is anchored to a known avoided cost and sits within the existing $29–$500/mo band. Docked because $1M ARR needs 12% of the serviceable market and the US ceiling is genuinely ~$6–7M without the second SKU. |
| Time to first revenue | 10 | 8/10 | The audit converts to paid within weeks, and can pre-sell before v1 is complete. Not 9–10 because labs buy on a considered cycle, often waiting for the owner to be off the bench. |
| Defensibility | 10 | 5/10 | Honest score. Execution moat early. It compounds into a data moat — a corpus of defect-to-remake outcomes across many labs, which nobody else has and which makes the yellow/red threshold progressively sharper. But at month 3 this is copyable, and 3Shape or EviSmart could bolt it on. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs someone who can do computational geometry on mesh data, paired with someone who genuinely knows dental lab workflow — ideally a CDT co-founder or a very engaged first design partner. Faking the domain here is fatal; techs will spot a fake in one demo, and the false-positive threshold is a domain judgment call, not an engineering one.

### Key assumptions to validate (3–5)

1. **Assumption:** Automated intake inspection catches enough remake-causing defects to matter — meaningfully better than the lab's current ad-hoc glance. **How to test:** Get 200–300 historical cases from 4–5 labs where the remake outcome is already known. Measure catch rate on cases that became remakes, and false-positive rate on cases that shipped fine. This is the whole ballgame and it's testable before building any product.
2. **Assumption:** Lab owners will pay $149–549/mo for defect prevention plus fault evidence. **How to test:** Take 25 audit reports to 25 owners and ask for a signed LOI or a card at a discounted founding price. Talk is cheap; a card is data.
3. **Assumption:** The fault ledger actually changes remake outcomes — that labs will use it to push back and dentists will accept it rather than walk. **How to test:** Interview 20 owners about their last five disputed remakes. Ask specifically: with timestamped proof, would you have charged? Would you have risked the account? The answer to the second question is the one I'm genuinely unsure about.
4. **Assumption:** False positives don't kill trust. A gate that cries wolf gets turned off in week two. **How to test:** Set the target false-positive rate with design partners *before* building, then hold to it. Ship conservative.

### Risk flags

1. **Relationship risk — the one that could sink it.** Labs are the weaker party in the dentist relationship. An owner who fears losing a 60-unit-a-month account may choose to eat the remake and never open the evidence. If that's the dominant behavior, the fault ledger is a feature nobody uses and the product collapses back to defect prevention alone — still worth something, but a smaller business and a lower price point.
2. **Competitive risk.** EviSmart already markets AI QC at intake, and 3Shape (which owns LabStar) sits on both the scanner and lab-software sides of this workflow. If scanner vendors push quality checks upstream into the chairside capture itself, the lab-side gate gets less necessary over time. Watch this closely.
3. **Accuracy risk.** Margin detection on genuinely bad preps is hard — that's precisely why the case is problematic in the first place. The hardest cases to judge are the ones most worth judging.
4. **Market ceiling.** ~5,000 US labs, declining at roughly 1.6% CAGR through consolidation. This is a shrinking market. Fine for a $3–5M bootstrapped business, wrong for anything larger, and the shrinkage means the clock is running.
5. **Regulatory ambiguity.** The medical-device line is close enough to warrant a real legal opinion before scaling. I believe manufacturing-QC framing holds, but "I believe" isn't good enough at 300 customers.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder strong in 3D/computational geometry, paired with a CDT
                        or ex-lab-manager co-founder. Not a first-time solo builder — the domain
                        judgment is as load-bearing as the geometry.
Time to revenue:        8–12 weeks (audit-led pre-sales can start before v1 ships)
Capital to launch:      $15–25K (inference, trade show booth, travel)
Top 3 assumptions to validate first:
  1. Detection accuracy on 200–300 historical cases with known remake outcomes, across
     4–5 labs — measure both catch rate and false-positive rate before writing product code
  2. Willingness to pay — 25 audit reports to 25 owners, count signed LOIs or cards at a
     founding price
  3. Whether labs will actually use fault evidence against dentists they depend on, or
     quietly eat the remake anyway — 20 owner interviews on their last five disputes
Kill criteria:
  - Abandon if detection catches <50% of known remake-causing defects at a false-positive
    rate under 15% — below that the gate is noise and labs will switch it off
  - Abandon if fewer than 5 of 25 audited labs convert to paid within 60 days
  - Abandon if owner interviews show >70% would not invoke evidence against a significant
    account — the product loses its differentiated half and reverts to a commodity QC module
  - Abandon if 3Shape or a major scanner vendor ships equivalent intake screening as a
    bundled free feature before v1
```

## 15. Next step — 1-week validation sprint

The nice thing about this idea is that the riskiest assumption is testable on data that already exists, without building a product.

- **Day 1–2:** Recruit 4 labs from Dental Lab Network and NADL state lists. Ask each for 50–75 historical digital cases with the remake outcome labelled. Offer the finished analysis free as the trade — they get a report on their own remake causes, which none of them currently have.
- **Day 3–4:** Run detection over the corpus. Measure two numbers only: percentage of known-remake cases where a defect was flagged at intake, and percentage of clean cases falsely flagged. Do not build UI. Do not build a portal. Just get the two numbers.
- **Day 5:** Take the results to the 4 owners plus 15 more. Show them their own losses. Ask for a card at a founding price of $99/mo. Also ask the uncomfortable question directly: "on the four remakes we caught, would you have billed the dentist?"

**Falsifiable outcome:** Go only if detection catches ≥50% of known-remake cases at ≤15% false positives, **and** ≥5 of 19 owners put a card down. Two numbers, one week, no product. If either fails, the idea is dead and I've spent a week instead of four months.
