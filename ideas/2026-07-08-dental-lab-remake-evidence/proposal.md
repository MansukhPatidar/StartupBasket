---
title: "DocketProof — intake docket for small dental labs"
slug: dental-lab-remake-evidence
date: 2026-07-08
category: HealthTech / US — Independent Dental Labs (remake-dispute evidence)
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "AI reads every scan and Rx at intake, then hands the lab signed proof to bill the dentist when the remake comes back."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Compliance-driven, Vision-AI, Workflow-automation]
axes:
  problem: 15
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# DocketProof — intake docket for small dental labs

## 1. One-liner

AI reads every scan and Rx at intake, then hands the lab signed proof to bill the dentist when the remake comes back.

## 2. Trend signal — why now?

The remake fight has quietly become a margin-killer for small labs, and the evidence is everywhere:

- **Half of all case scripts arrive broken.** Industry communication guides put it bluntly: *"About 50% of Rx's have something missing: shade, photos, date, implant size."* When the case fails, the lab is the one holding the bill.
- **82% of external remakes are dentist error** — bad scans, margin voids, ambiguous instructions — yet the lab eats the cost by default. At a 5% profit margin, a lab does *"19 units at NO PROFIT to pay for ONE remake."* (Spear Education, SprintRay, 2026.)
- **The dispute is described by lab owners as "a constant battle."** On Dental Lab Network, the accepted policy is: if the lab *documented* the scan defect and warned the dentist, the lab charges for the remake and it doesn't count against their reject rate. The problem is the documenting — today it's ad-hoc screenshots and emails.
- **Digital case submission is now the norm** (the 2025→2026 shift), which means the scan file and Rx are digital assets a machine can read at intake — a thing that wasn't universally true even two years ago.
- **Money is moving into lab-QC AI**: Evident rebuilt itself as an "intelligent lab" ecosystem with AI QC, and EviSmart shipped a full intake-QC suite. The category is validated — but everyone frames it as *prevention*, not *billing defense*.

Provenance:
  - Signal 1 (demand): "~50% of Rx's have something missing"; scan-reject disputes are "a constant battle"; 82% of external remakes are dentist error — Dental Lab Network forums + Spear Education — https://www.speareducation.com/resources/spear-digest/the-cost-of-laboratory-remakes/ — 2026-07-08
  - Signal 2 (feasibility): Digital case submission now dominant; vision models cheaply parse intraoral scan renders + Rx text; EviSmart proves intake QC is technically doable — https://evismart.com/post/the-remake-that-shouldnt-have-shipped — 2026-07-08
  - Signal 3 (economic): Remakes cost labs $50–150/case in materials+labor; at 5% margin one remake wipes 19 units of profit; Evident + EviSmart funding/expansion into AI lab QC — SprintRay / Spear / Evident — https://sprintray.com/lab-costs-killing-roi-what-crown-remakes-cost/ — 2026-07-08
  Category: Underserved niche

## 3. The opportunity

Every small dental lab loses money to remakes it didn't cause. The lab receives a scan with a margin void or an Rx missing the shade, notices the problem, and faces a lose-lose: reject the case (delay the crown, annoy a loyal dentist) or proceed and hope. When the crown comes back for a remake weeks later, the lab and the dentist argue about whose fault it was. The lab almost always loses that argument — because it has no clean, timestamped, dentist-visible record that it flagged the defect *before* fabrication.

The incumbents (EviSmart, Evident's AI QC) attack this as a **prevention** problem: "catch the defect so you don't build a bad crown." That's useful but it misframes the lab owner's actual pain. The lab owner doesn't primarily want fewer remakes — remakes on dentist error are somewhat unavoidable. The owner wants to **stop paying for remakes that aren't the lab's fault.** That's a billing-and-evidence problem dressed up as a QC problem.

DocketProof takes the same vision-AI intake read and points it at a different outcome: it produces a **case condition report** — an annotated, timestamped, hard-to-argue-with docket the lab sends the dentist at intake ("margin void distal on #14, shade not specified — proceeding at your instruction"). When the remake request lands, the lab attaches the docket and bills with confidence. It converts a verbal warning into signed, billable evidence.

10× better than the status quo (a tech manually screenshotting and typing an email on the cases they *remember* to flag) because it runs on 100% of cases automatically, speaks the dentist's language, and creates the paper trail that wins the dispute.

## 4. Target market

- **Primary customer:** Owner-operator of an independent US dental lab, 2–20 technicians, serving 30–150 dentist accounts, doing crowns/bridges/implants. The person who signs the invoices and personally feels every remake.
- **Why they buy (in their words):** *"We told the doctor the scan was bad, they said do the best you can, and now they won't pay for the remake."* They want to charge for dentist-caused remakes without torching the relationship — and they want a record that makes the charge stick.
- **Rough TAM reasoning:** US has ~4,200–14,700 dental labs depending on the count; ~89% are single-owner operations and ~23,000 establishments have 1–4 employees (IBISWorld / Ampliz, 2026). Even the conservative 4,200-formal-lab figure at a few hundred dollars a month is a comfortably sub-$5M-ARR-attractive market with room above it.
- **Why now for them:** Digital submission made scans and Rx machine-readable; remake economics got worse as material and labor costs rose against flat lab fees; and dentists are consolidating into DSOs that dispute charges more aggressively. The pressure to defend every dollar of remake billing is higher than it's ever been.

## 5. Product sketch (MVP)

- **Intake auto-read:** On every incoming case, AI parses the scan render (margins, voids, missing anatomy) and the Rx text (shade, material, implant size, date, missing fields) and scores case completeness.
- **Case condition report ("the docket"):** Auto-generated, annotated, timestamped one-pager flagging each defect in plain, dentist-facing language, with the scan snapshot marked up.
- **One-click send-to-dentist:** Fire the docket to the dentist's office by email/portal *before* fabrication, capturing a delivery timestamp and (optionally) an acknowledgment.
- **Remake-defense file:** When a case comes back as a remake, DocketProof pulls the original docket + send record into a single dispute-ready PDF the lab attaches to the invoice.
- **"Proceed at your instruction" workflow:** If the dentist says "do the best you can," the lab logs that reply against the case — the exact scenario labs cite as their strongest billing justification.
- **Remake ledger:** Running tally per dentist account of flagged-then-remade cases, so the owner can see which accounts cost them money and have the "your scans are the problem" conversation with data.
- **Fits existing tools:** Works alongside lab management software (Magic Touch, Evident, DLCPM) — DocketProof is the evidence layer, not a rip-and-replace.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into a manual checklist nobody fills out — which is exactly today's failing status quo. The load-bearing work is: (1) **reading the scan render** to detect margin voids / missing anatomy without a human opening every file, and (2) **reading the Rx** to catch the missing shade/implant-size/date fields, then (3) **writing the dentist-facing flag in language that doesn't start a fight.** The value is that it does this on *every* case automatically and consistently — the consistency is the moat against disputes, and only automation delivers consistency at 40+ cases/day. Vision + language models are the only reason a 2-person lab can run airport-grade intake QC without hiring a QC tech.

## 7. Localization angle (if any)

`N/A — this is a US-first play.` The wedge is US dental-lab billing dynamics (DSO disputes, US remake-fee norms, English Rx). India/SEA labs exist but the remake-billing-dispute economics and the digital-scan penetration that makes the AI read possible are strongest in the US. A UK/AU expansion is natural later (same language, same digital workflow, similar "nothing's ever the dentist's fault" complaint surfaced in forums) — but don't split focus at v1.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo base for small labs (up to a case-volume cap), $299/mo mid-tier for higher volume + multi-tech accounts. Sits inside the established $69–200/mo mid-tier band for lab software, and is trivially justified against one avoided remake ($50–150 in hard cost + chair-time goodwill).
- **ACV:** ~$2,400/yr blended.
- **Rough math to $1M ARR:** ~420 labs × $199/mo × 12 ≈ $1.0M. That's under 10% of the conservative 4,200-lab formal market, or well under 2% of the broad establishment count.
- **Rough math to $5M ARR:** ~2,100 labs, OR keep ~700 labs and expand ACV via per-seat QC-tech logins, a remake-analytics upsell for owners, and a dentist-facing "clean case" scoring tier the lab can offer its accounts. Realistically $5M needs the analytics/expansion motion plus UK/AU, not just US logo count.
- **Expansion path:** Land on remake-defense → expand to full intake QC (prevention) → sell the per-dentist remake analytics as an owner dashboard → offer a co-branded "scan quality report card" the lab hands its dentists (turns DocketProof into the lab's retention tool).

## 9. Go-to-market wedge — first 100 customers

- **Scrape and DM the complaint source directly.** Dental Lab Network forums and LMTmag's marketing group are where lab owners already argue about remake billing. Show up in the exact threads ("who pays for the remake") with a real before/after docket, not a pitch.
- **Buy the list.** A ~6,676-contact dental-lab decision-maker email database exists (MedicoReach, 2026). Cold email a personalized 90-second Loom: "here's the docket that would've let you bill the last dentist-error remake you ate." Expect 2–4% reply at this specificity.
- **Partner with lab associations and networks.** Cal-Lab (owner advocacy) and AmericaSmiles (independent-lab network with monthly online education) both convene exactly this buyer. One webinar slot = a room full of owners who feel this pain weekly.
- **Ride the lab-management-software channel.** Offer DocketProof as the evidence layer that bolts onto Magic Touch / DLCPM; those vendors want stickiness and don't build billing-dispute tooling.
- **Founder-led demos at the state lab-association meetings.** These are small, high-trust rooms; a single credible demo travels by word of mouth in a loyalty-driven, skeptical B2B niche.

## 10. Build complexity — justification

**Medium.** The scan-read (vision model over intraoral scan renders/STL snapshots for margin voids and missing anatomy) is the one genuinely non-trivial piece — EviSmart proves it's buildable off modern vision APIs, but tuning it to lab-grade reliability takes iteration. Rx parsing, the docket generator, the send-and-timestamp flow, and the dispute-PDF assembly are all standard web + LLM work. No new infra, no regulatory approval (this is a business tool, not a medical device — it doesn't design or alter the restoration). Estimate ~14–18 weeks to a credible v1 for a technical founder plus a dental-lab domain advisor.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Business documentation/billing tool; not a medical device, doesn't alter restorations. |
| Ethical — no harm / dark patterns | ✅ | Makes an existing, legitimate billing dispute transparent and evidence-based — better for both sides than a shouting match. |
| Market exists (evidence above) | ✅ | Forum "constant battle," 50% broken Rx, funded QC incumbents. |
| 1–5 person team can build this | ✅ | Technical founder + domain advisor; 14–18 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf APIs, direct outreach GTM, no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Felt weekly, costs real money, and labs already do the manual workaround — but it's a bleed, not hair-on-fire; some owners have made peace with eating remakes. |
| Demand evidence | 15 | 12/20→12/15 | Multiple independent signals: "constant battle" forums, 50%-broken-Rx stat, 82% dentist-error, funded QC incumbents. Not yet proven that labs will pay specifically for *evidence* vs. prevention. |
| Build feasibility | 15 | 11/15 | Everything off-the-shelf except lab-grade scan defect detection, which needs real tuning. |
| Distribution clarity | 15 | 11/15 | Named lists, named forums, named associations, buyable email DB — but skeptical, loyalty-driven B2B buyer with slow trust cycles. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked in-band, ACV realistic, ARR math clean at conservative penetration; $5M needs expansion motion. |
| Time to first revenue | 10 | 8/10 | Owner is the decision-maker, buys fast; a compelling docket demo can close in weeks, but the scan-detection v1 gates launch. |
| Defensibility | 10 | 5/10 | Execution + workflow lock-in (the remake ledger accrues per-dentist history that compounds), but EviSmart/Evident could reframe toward billing defense. 6–12 month head start, not a durable moat. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (vision + LLM pipeline) · `domain-expertise-required` (must speak dental-lab and understand the remake-billing dance to write dentist-facing flags that don't torch relationships).

### Key assumptions to validate (3–5)

1. **Assumption:** Labs will pay for *evidence to win the billing dispute*, not just defect prevention. **How to test:** Interview 30 lab owners; ask directly "would a timestamped docket change whether you bill the dentist for the last remake you ate?" and get a price reaction.
2. **Assumption:** A dentist-facing docket actually shifts who pays, rather than just souring the relationship. **How to test:** Run 10 real cases through a manual (Wizard-of-Oz) docket with pilot labs; track whether the dentist accepts the charge.
3. **Assumption:** Scan defect detection can hit lab-trusted reliability without a huge labeled dataset. **How to test:** Benchmark a v0 vision pipeline on 200 real cases against a senior tech's judgment; measure false-negative rate on margin voids.
4. **Assumption:** Owners will send the docket to loyal dentists at all (fear of losing the account may override). **How to test:** In interviews, probe the relationship-risk objection explicitly; look for the "proceed at your instruction" framing as the acceptable softening.

### Risk flags

1. **Relationship risk (customer-side):** Labs are terrified of annoying loyal dentist accounts. If the docket reads as accusatory, adoption stalls regardless of accuracy. The product lives or dies on tone.
2. **Incumbent reframe:** EviSmart / Evident already have the scan-read tech and the lab relationships; if they add a "dispute file" feature, DocketProof's wedge narrows. Speed and billing-first framing are the only defense.
3. **Detection reliability:** A false "your scan is fine" that later remakes destroys trust faster than manual review ever did. The bar for the vision model is high before you can charge dentists on its say-so.
4. **DSO consolidation (market timing, double-edged):** As labs get acquired by DSOs, the buyer shifts from owner-operator to procurement — slower, and the DSO may bring the dispute in-house. Land independents fast while they're still independent.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (vision/LLM) + dental-lab domain advisor
Time to revenue:        10–16 weeks (gated by scan-detection v1)
Capital to launch:      ₹3–6 lakh / $4–7K
Top 3 assumptions to validate first:
  1. Labs pay for evidence-to-bill, not just prevention — 30 owner interviews with price reaction
  2. A docket actually shifts who pays the remake — 10 Wizard-of-Oz cases with pilot labs
  3. Scan defect detection hits trusted reliability — benchmark v0 on 200 cases vs. senior tech
Kill criteria:
  - Abandon if <8 of 30 interviewed owners say the docket would change their billing behavior
  - Abandon if pilot dentists reject the charge on >70% of docket-backed remakes (evidence doesn't move the money)
  - Abandon if EviSmart/Evident ship a billing-dispute file before your v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 20 lab owners from Dental Lab Network + LMTmag threads and the buyable email list. Book 30-minute calls framed as "how do you handle remakes you didn't cause?"
- **Day 3–4:** Hand-build one real docket by hand for 3 pilot labs' actual recent remake cases (Wizard-of-Oz, no product yet). Have them send it to the dentist and report back whether the charge sticks.
- **Day 5:** Decide go / no-go on a **falsifiable** bar: **≥8 of the 30 owners say the docket would change whether they bill the dentist AND ≥1 of the 3 pilot dockets results in an accepted remake charge.** If neither, the pain is real but the evidence-wedge doesn't monetize — kill or pivot to pure prevention.
