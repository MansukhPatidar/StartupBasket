---
title: "DwellProof — detention packet builder for owner-operators"
slug: trucking-detention-claim-packet
date: 2026-06-20
category: Logistics / US-SMB
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "DwellProof assembles a court-grade detention evidence packet and files the claim before the broker's 24-hour deadline."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Solo-builder, Mobile-first, Workflow-automation]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# DwellProof — detention packet builder for owner-operators

## 1. One-liner

DwellProof assembles a court-grade detention evidence packet and files the claim before the broker's 24-hour deadline.

## 2. Trend signal — why now?

Detention pay is the single biggest pile of money small carriers leave on the table, and the reason is always the same: no proof, filed too late. Brokers deny by default. The whole game is documentation inside a 24–72 hour window.

The numbers are not soft. ATRI pegs the annual economic loss from driver detention at **$15.1 billion**. FMCSA estimates drivers lose **$1.1–1.3 billion in wages per year** to detention — roughly **$11,000–$19,000 per driver per year** in lost productive time. Of carriers who actually bill detention (94.5% of them), **fewer than 50% get paid**. For an individual owner-operator, that's **$2,000–$6,000/year of unclaimed detention** sitting on the table, across **2–4 detention events per month** at an average **~$85/hour**.

Why it's solvable *now*: cheap multimodal AI can read a Bill of Lading photo, pull GPS coordinates and timestamps out of a phone photo's EXIF metadata, parse an ELD CSV export, and cross-reference the detention clause on a rate confirmation — the exact evidence bundle a broker demands — in seconds instead of the driver doing it by hand at a truck stop at 11pm. The February 2026 FMCSA final rule authorizing electronic DVIRs (effective March 23, 2026) is the regulatory tailwind: digital trucking records are now explicitly first-class, not a workaround.

Verbatim driver pain (TruckersReport forum, thread "Lost detention pay again because broker said 'no proof'"):
- "Waited 4+ hours at a receiver, broker refused to pay because my only proof was a handwritten note on the BOL."
- "Most guys I've talked to still end up in a back-and-forth with brokers even with ELD data."
- "It is not in the financial best interest of the broker nor the dock to willingly pay detention so the driver must document it in a way that will hold up in court."
- "In general brokers and docks assume drivers are incompetent in running the drivers end of the business and exploit that to minimize detention payouts."

Provenance:
  - Signal 1 (demand): Forum thread "Lost detention pay again because broker said 'no proof'"; <50% of detention claims get paid; $2K–$6K/yr unclaimed per owner-operator — https://www.thetruckersreport.com/truckingindustryforum/threads/lost-detention-pay-again-because-broker-said-no-proof-%E2%80%94-how-do-you-guys-document-it.2540236/ — 2026-06-20
  - Signal 2 (feasibility): Detention is detected inside expensive telematics (Samsara) but "billing and charge automation typically happen outside the platform"; cheap multimodal AI now reads BOL/EXIF/ELD evidence; FMCSA eDVIR rule effective 2026-03-23 — https://www.torotms.com/blog/driver-detention-management-software — 2026-06-20
  - Signal 3 (economic): ATRI $15.1B annual detention loss; FMCSA $1.1–1.3B/yr lost wages; factoring boom (eCapital, Bobtail, OTR) monetizing carrier cashflow — https://www.abltrucking.com/post/the-real-cost-of-driver-detention-what-the-data-tells-us — 2026-06-20
  Category: Workflow automation

## 3. The opportunity

Detention recovery has a structural gap. The expensive end — Samsara, Motive — *detects* dwell time with GPS and timestamps, but stops there: detention billing and the actual claim packet happen outside the platform, manually. The cheap end — Tailwind, AOS, TruckingOffice — treats detention as a manual invoice line item the driver has to justify himself. And broker-side tools (MacroPoint, FourKites) exist to *minimize* what the broker pays, not help the driver collect.

So the small carrier — the guy who isn't paying $40/truck/month for Samsara — has nothing. He documents detention with a handwritten note on the BOL, files it three days late because he was driving, and gets auto-denied. The broker wins by default because the burden of "court-grade proof inside 24 hours" is exactly the burden a solo driver can't meet from the cab.

DwellProof is the carrier-side weapon that closes that gap: it watches the clock, assembles the proof the moment the wheels start turning toward "billable," and files before the window slams shut. It doesn't compete with telematics — it's the layer that turns detected dwell into collected dollars, for the 90% of the market that telematics priced out.

## 4. Target market

- **Primary customer:** US owner-operators and micro-fleets (1–10 trucks) running under their own authority or leased-on, hauling for brokers on rate confirmations with detention clauses. The dry-van and reefer OTR segment feels this most. ~350,000+ owner-operators in the US; the FMCSA register lists hundreds of thousands of small carriers.
- **Why they buy:** In their words — "I waited 4 hours and the broker said no proof." It's not abstract. It's $85/hour walking out the door 2–4 times a month, and the fix (rigorous documentation + filing inside 24h) is precisely the part a one-man operation can't execute while driving.
- **Rough TAM reasoning:** Even a conservative serviceable slice — say 150,000 small carriers who bill detention and lose half their claims — at $39/mo is a ~$70M/yr ceiling on subscription alone, before any contingency-fee model. Plenty of room for a $1–5M ARR bootstrapped business taking a sliver of it.
- **Why now for them:** Freight rates have been in a multi-year trough; margins are thin enough that $4,000/year of recovered detention is the difference between a profitable and an underwater quarter. Drivers are actively hunting for every recoverable dollar, and the tooling to assemble proof finally got cheap.

## 5. Product sketch (MVP)

- Snap a photo of the rate confirmation; DwellProof reads the detention clause (rate/hour, free time, who-signs requirement) automatically.
- Tap "Arrived" / "Departed" at the dock, or let the app capture GPS-stamped geofence entry/exit — building a defensible arrival/departure timeline.
- Auto-pulls timestamp + GPS metadata from photos of the gate pass, guard shack, and check-in kiosk; OCRs the signed BOL in/out times.
- Optional ELD CSV import (driver forwards their ELD's export) to corroborate the dwell window minute-by-minute.
- One-tap assembled **claim packet**: rate-con clause reference, exact billable hours, the timeline, every timestamped exhibit, and a pre-written email to the broker — ready to send the moment free time is exceeded.
- Deadline guard: counts down the broker's 24/48/72-hour window per rate con and nags the driver to file before it expires.
- Recovery ledger: tracks filed / paid / denied per broker, surfacing which brokers stiff you so you can price loads accordingly.

## 6. AI angle — what's load-bearing

Remove the AI and this is a manual form again — which is exactly the product that already exists and doesn't get used. The AI is doing the work the driver can't: reading an arbitrary broker's rate-con PDF and extracting the specific detention clause (every broker formats differently); parsing EXIF GPS/timestamp data and reconciling it against the ELD export and the OCR'd BOL into one coherent, contradiction-free timeline; and drafting the claim email that cites the exact clause and hours in the language brokers can't easily dispute. The product's promise — "court-grade packet in 60 seconds from the cab" — is only deliverable because multimodal extraction collapses a 30-minute paperwork chore into a tap. That's the whole wedge.

## 7. Localization angle (if any)

N/A — this is a US-only play by design. Detention/accessorial mechanics, FMCSA rules, rate confirmations, and the broker-carrier contract structure are US-specific. The geographic arbitrage here is *vertical depth in one regulatory regime*, not cross-border. A future analog could exist for demurrage in container drayage, but that's a different document set and a separate product.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Two-tier. (a) **$39/month flat** per driver for the documentation + filing app. (b) Optional **15% contingency** on recovered detention for the "we file and chase it for you" tier — aligns incentive perfectly with the skeptical driver who won't pay upfront.
- **ACV:** ~$468/year on the flat tier; meaningfully higher on contingency for active claimers ($4,000 recovered × 15% = $600/yr, plus the base).
- **Rough math to $1M ARR:** ~1,800 paying drivers × $39/mo × 12 = $842K, plus contingency upside crossing $1M comfortably. 1,800 of 150,000+ target carriers = ~1.2% penetration.
- **Rough math to $5M ARR:** ~9,000 flat subscribers blended with a contingency book on the heaviest claimers; or land 50-truck fleets at per-seat pricing to raise ACV. Requires proving the filing engine wins claims at a rate brokers stop fighting.
- **Expansion path:** From detention → all accessorials (TONU, layover, lumper, tarp, stop-off), then a "broker scorecard" data product (which brokers pay detention, which don't) that becomes the real moat. Fleet tier ($25–50/extra truck) lifts ACV.

## 9. Go-to-market wedge — first 100 customers

- **TruckersReport + r/Truckers + Facebook owner-operator groups:** the exact detention threads are public and recurring. Reply to the person who just posted "lost detention again" with a free packet built from their screenshots. Closeable because the pain is live and dollar-quantified.
- **YouTube/TikTok trucking creators:** a dozen owner-operator influencers (e.g. the "trucking business" educators) already make "how to get your detention paid" content. Sponsor or co-produce a "watch me recover $1,200 in 60 seconds" demo. Their audience *is* the customer.
- **Factoring company partnerships:** factors (Bobtail, OTR, eCapital) already touch every invoice and want carriers to have more billable revenue to factor. Bundle DwellProof as a value-add; they have the distribution and the trust.
- **Dispatcher channel:** independent dispatchers manage detention claims for their drivers and would white-label/refer a tool that saves them the paperwork.
- **Cold:** scrape new-authority carriers from the FMCSA SAFER/Carrier register (public), send a personalized "here's $4,000/year you're probably losing" walkthrough. New carriers don't yet have a system.

## 10. Build complexity — justification

Medium. Off-the-shelf: multimodal OCR/extraction APIs, EXIF parsing, geofencing on a standard mobile stack, email send. The custom work is the rate-con clause extractor across messy broker formats and the evidence-reconciliation logic that produces a packet that actually holds up — plus the per-broker filing/deadline rules. A focused pair ships a credible v1 in 10–14 weeks; the moat-building (broker rules, win-rate tuning) is ongoing.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping a carrier document and bill a legitimate contractual charge. No legal-advice line crossed if it stays evidence-assembly, not representation. |
| Ethical — no harm / dark patterns | ✅ | Helps the underdog collect money he's contractually owed. The detention clause is already signed. |
| Market exists (evidence above) | ✅ | $15.1B loss, <50% of claims paid, active forum demand, existing manual workarounds. |
| 1–5 person team can build this | ✅ | Mobile app + extraction pipeline + filing logic. Pair, 10–14 weeks. |
| Launchable with <$50K / ₹40L | ✅ | API + app-store + founder time. Well under cap. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | $2K–6K/yr per driver, felt 2–4×/month, money walks out the door. Hair-on-fire for thin-margin owner-ops, but they've tolerated the workaround for years. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: dollar-quantified losses, recurring forum threads with verbatim pain, existing (inadequate) paid tooling. A skeptic nods. |
| Build feasibility | 15 | 11/15 | Mostly off-the-shelf, but rate-con extraction across broker formats and packet reconciliation are real engineering. 10–14 weeks, not 4. |
| Distribution clarity | 15 | 12/15 | Named channels (forums, trucking creators, factors, FMCSA register) with live, self-identifying buyers. Conversion math is plausible, not yet proven. |
| Revenue mechanics | 15 | 11/15 | Contingency model aligns incentives beautifully; flat $39 is an easy ROI sell. Penetration to $1M is ~1.2% — reasonable. Churn risk if claims don't win. |
| Time to first revenue | 10 | 8/10 | Free-packet wedge → paid in days; contingency means revenue lands when a claim pays. First dollars in 4–8 weeks of launch. |
| Defensibility | 10 | 5/10 | Execution + accumulating broker-behavior data is a soft moat. Telematics players could bolt this on; first-mover focus + the broker scorecard is the defense. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (multimodal extraction + mobile) · `domain-expertise-required` (rate-con structure, accessorial rules, broker-carrier dynamics — get a dispatcher or owner-op advisor on day one).

### Key assumptions to validate (3–5)

1. **Assumption:** Drivers will trust an app with their evidence and let it auto-file to brokers. **How to test:** Manually build 25 packets for drivers from forum threads; measure how many send them and how many get paid.
2. **Assumption:** AI extracts the detention clause correctly across the long tail of broker rate-con formats. **How to test:** Run 100 real rate cons (collectable from drivers) through the extractor; target >90% clause-accuracy before charging.
3. **Assumption:** A well-assembled packet actually lifts the paid-rate above the ~50% baseline. **How to test:** A/B the same drivers' claims with vs. without the packet over 60 days; need a measurable win-rate delta.
4. **Assumption:** Owner-ops will pay $39/mo (or 15%) rather than keep doing it free-but-badly. **How to test:** 30 sales conversations; offer both tiers; measure which converts.

### Risk flags

1. **Platform dependency:** Relies on broker willingness to honor claims; a broker can still stonewall regardless of proof quality. The product improves odds, not certainty.
2. **Incumbent bolt-on:** Samsara/Motive already have the dwell data and could add carrier-side filing. Mitigant: they serve the carriers who *pay for telematics*; DwellProof targets the underserved cheap end, and the broker scorecard data compounds.
3. **Legal line:** Drafting claim language edges toward "practice"; keep it evidence-assembly + templates, not representation/negotiation-as-a-service, or it invites a different regulatory posture.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + owner-operator/dispatcher domain advisor
Time to revenue:        4–8 weeks (free-packet wedge → paid/contingency)
Capital to launch:      $8–15K ($/API + app store + founder time)
Top 3 assumptions to validate first:
  1. Packet lifts paid-rate above ~50% baseline — A/B same drivers' claims with vs. without
  2. Clause extraction >90% accurate across broker rate-con formats — run 100 real rate cons
  3. Owner-ops pay $39/mo or 15% — 30 sales conversations, both tiers
Kill criteria:
  - Abandon if packets don't measurably beat the ~50% paid baseline over 60 days
  - Abandon if <10% of 50 cold owner-op outreach show interest after seeing a free packet
  - Abandon if a telematics incumbent ships carrier-side detention filing before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 20 recent "lost my detention" posts from TruckersReport / Reddit / Facebook owner-op groups. DM each driver: "Send me your rate con + your arrival/departure photos and I'll build you the claim packet free." Goal: collect 10 real document sets.
- **Day 3–4:** Hand-assemble each packet (manual = the AI's job, faster to fake). Send packets back; ask each driver to file it. Log whether they actually send it and to which broker.
- **Day 5:** Decide go / no-go on a falsifiable bar: **≥6 of 10 drivers file the packet AND ≥1 broker pays a claim that the driver expected to lose.** If drivers won't even file a free, finished packet, the willingness isn't there and no app fixes it.
