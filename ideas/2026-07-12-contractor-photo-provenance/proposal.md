---
title: "ShotSworn — capture notary for restoration contractors"
slug: contractor-photo-provenance
date: 2026-07-12
category: TradeTech / US
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Cryptographically signs every job-site photo at capture so insurers can't dismiss a contractor's evidence as AI-generated."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [Solo-builder, SMB, AI-agent, Compliance-driven, Mobile-first]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# ShotSworn

## 1. One-liner

Cryptographically signs every job-site photo at capture so insurers can't dismiss a contractor's evidence as AI-generated.

## 2. Trend signal — why now?

Two forces collided in the last twelve months and squeezed the restoration contractor from both sides.

**Side one: insurers stopped trusting photos.** A March 2026 Verisk study found 98% of insurers agree AI-powered editing tools are fueling a rise in digital insurance fraud, and 99% say they have already encountered manipulated or AI-altered documentation. The Insurance Fraud Bureau flagged AI-generated document fraud as its top emerging enforcement priority for 2026. Claims investigators have responded by hardening their evidence standards: per *Claims Journal* (May 2026), investigators now "request native files rather than screenshots to preserve metadata including creation dates, device data, GPS coordinates and edit history," run reverse image searches against prior losses and stock libraries, and verify documents by telephone. Admiral reported a 71% year-over-year increase in fraud in 2025, partly AI-driven.

**Side two: the automated denial machine turned on.** Insurers are buying high-resolution drone and satellite imagery to audit roofs proactively, and those "AI-driven reports often mistake shadows for moss or glare for damage." The recommended homeowner remedy is to hire a local roofer to produce a condition letter with ground-level photos to *refute the satellite data*. So the contractor's photo is now the rebuttal instrument in a fight against an algorithm — at the exact moment the carrier has decided photos are presumptively suspect. Courts are already allowing discovery into insurers' use of AI to deny claims.

The contractor is stuck in the middle. He is asked to prove reality with an artifact that no longer proves anything.

**What changed on the supply side:** cryptographic capture provenance became a commodity primitive in the last year. C2PA Content Credentials now ship in mainstream hardware — the Google Pixel 10 signs every photo by default with hardware-backed keys and on-device timestamping, Samsung's Galaxy S26 series signs at capture, and Apple's iOS 20 support is announced for fall 2026. What required a custom enterprise SDK in 2024 is now a standard a small team can implement against.

Provenance:
  - Signal 1 (demand): 99% of insurers report already encountering manipulated or AI-altered claim documentation; investigators now demand native files with intact metadata and reject screenshots — https://www.claimsjournal.com/news/national/2026/05/15/337321.htm — 2026-05-15
  - Signal 2 (feasibility): C2PA hardware-backed capture signing reached mainstream phones — Pixel 10 signs by default, Galaxy S26 at capture, iOS 20 announced for fall 2026 — https://c2pa.ai/smartphone-guide — 2026 (accessed 2026-07-12)
  - Signal 3 (economic): Insurers buying drone/satellite imagery to auto-audit roofs; "AI-driven reports often mistake shadows for moss or glare for damage," pushing contractors into an evidentiary rebuttal role. 38% of US roofing jobs are insurance claims; roof claims totaled $31B in 2024 — https://www.savingadvice.com/articles/2026/01/24/10716617_5-home-insurance-clauses-that-are-voiding-roof-claims.html — 2026-01-24
  Category: Tech-unlock

## 3. The opportunity

There are two camps in the photo-authenticity market and neither one serves the contractor.

**Camp one — the incumbents who own the contractor's workflow but not the proof.** CompanyCam is the category default at $79/mo for 3 users ($29/user beyond that). It gives contractors GPS-stamped and time-stamped photos and calls it "a legal-grade evidence trail." That claim was defensible in 2022 and is hollow in 2026. GPS and timestamp are *metadata*, and metadata is precisely the layer a fraudster edits — which is why investigators now cross-check edit history rather than trusting the stamp. CompanyCam is a photo *organization* product that happens to record location. It is not a provenance product. Its whole architecture assumes the photo is trustworthy and the problem is filing.

**Camp two — the vendors who own the proof but sell it to the other side.** Truepic has the real primitive: secure-enclave-signed capture, sensor-noise fingerprints binding a photo to a physical device. But Truepic sells enterprise, custom-priced, to insurers, lenders, and warranty carriers, with dedicated Enterprise agreements above 5,000 inspections/year. The buyer is the party doing the *accusing*. Truepic hands the carrier a fraud detector; nobody hands the contractor a defense.

The gap is the asymmetry itself. The insurer has an AI that flags your photos. You have a phone gallery and a hunch. ShotSworn arms the accused. It's the same primitive, pointed the other way, sold at a price a 6-truck roofing outfit can put on a credit card.

There's a second, sharper reason this works: **the contractor is the one with money on the line, and he's the one who can be made to pay for it.** A denied supplement is $3,000–$15,000 out of his pocket, not the homeowner's. He already buys tools to win supplements. This is one more, and it plugs the newest hole.

## 4. Target market

- **Primary customer:** Owner or production manager of an insurance-restoration contractor — roofing, water/fire restoration, storm repair — in the US, 3–40 employees, $1M–$15M revenue, where a meaningful share of jobs are carrier-paid. Concentrated in hail and hurricane alleys: Texas, Florida, Oklahoma, Colorado, the Gulf, the Southeast.
- **Why they buy:** Because a supplement got denied and he couldn't prove the damage existed before he touched it. Photo documentation is widely cited as the single biggest factor in getting supplements approved through Xactimate. The phase that wins or loses most supplements is documenting *hidden* damage after demo — the moment when the physical evidence is destroyed by the work itself and the photo is literally the only artifact that remains. If a carrier questions that photo, the contractor has nothing.
- **Rough TAM reasoning:** ~109,000 roofing contractor businesses in the US (IBISWorld, 2026), an industry with no player above 5% share. 38% of roofing jobs are part of an insurance claim. Restoration (water/fire/mold) adds tens of thousands more firms. Serviceable target: the ~25,000–35,000 firms doing insurance work at enough volume to feel a denial. Capturing 1,500 of them at $150/mo average is $2.7M ARR.
- **Why now for them:** Because the ground shifted under their evidence in the last year. The photo that got a supplement approved in 2024 gets a fraud flag in 2026, and simultaneously an algorithm is now denying claims from the sky that they're expected to rebut from the ground.

## 5. Product sketch (MVP)

- **Signed capture app.** A phone camera that produces a C2PA-signed, hardware-attested photo at the moment of capture — device identity, tamper-evident hash, time, and location bound together cryptographically, not written into editable metadata. On phones with native signing, use it. On everything else, secure-enclave signing in-app.
- **The verification page.** Every photo gets a permanent public verification URL. The adjuster clicks it and sees: this image was captured by this device, at this coordinate, at this time, and has not been altered by a single pixel since. No app install, no account, no argument.
- **The claim packet.** Select a job, get a PDF the carrier will accept: photos in the pre-work / in-progress / post-work sequence adjusters expect, each with its verification link and chain-of-custody attestation, ordered to map against Xactimate line items.
- **Tamper report on inbound photos.** Drop in a photo from a sub, a homeowner, or the carrier's own aerial report and get a read on whether it carries valid credentials, has been re-encoded, or shows manipulation artifacts. Cuts both ways — including at the carrier's AI-generated aerial audit.
- **Denial rebuttal draft.** Feed in the carrier's denial letter; get a drafted response that cites the specific signed photos refuting each stated ground, in the language adjusters respond to.
- **Crew mode.** Field techs shoot; the office never has to ask "when was this taken and is it really this roof."
- **Chain of custody log.** Immutable per-job record: who shot what, when, from where, and every time the packet was accessed by whom.

## 6. AI angle — what's load-bearing

Two places, and one of them is honest about not being AI.

The **provenance layer is cryptography, not AI** — and that's the point. The whole reason this product works is that AI cannot fake a hardware signature. Selling "AI-verified photos" into a market panicking about AI would be idiotic. The trust primitive must be math.

Where AI *is* load-bearing:

1. **Manipulation forensics on unsigned images.** Most photos in a claim file — the sub's, the homeowner's, the carrier's aerial render — carry no credentials. Detecting re-encoding artifacts, splice boundaries, diffusion-model signatures, and the physical impossibilities AI notoriously produces (shadows falling in the wrong direction, reflections not matching the environment, background text degrading into unreadable characters) is a vision-model job. This is what lets the contractor go on offense against a bad aerial audit.
2. **Damage-to-line-item mapping and rebuttal drafting.** Turning 340 job photos into an ordered, Xactimate-aligned packet, and turning a denial letter into a cited rebuttal, is the 2-hours-to-2-minutes collapse. Without it, the contractor has proof but still has to assemble the argument, and he won't.

Remove the AI and you have a signing camera — a feature, not a product. Remove the cryptography and you have another photo app making claims it can't back. It needs both.

## 7. Localization angle (if any)

N/A — this is a US-first play, and deliberately so. The wedge depends on US carrier claims practice (Xactimate as the estimating lingua franca, the supplement process, contractor-as-claim-advocate norms) which does not replicate cleanly. The UK is the nearest adjacent market — the FCA's Consumer Duty requires insurers to show their fraud controls don't cause disproportionate harm to genuine claimants and must be "calibrated, documented, and auditable," which is a regulatory tailwind for provenance — but that's expansion, not the wedge. Don't force it.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $99/mo for 3 seats (Crew), $199/mo for 10 seats (Shop), $399/mo for 25+ seats plus rebuttal drafting and API (Storm). Priced deliberately above CompanyCam's $79 — this is not a cheaper photo app, it's the thing that saves a $8,000 supplement, and pricing under the incumbent would signal it's a lesser version of the same category.
- **ACV:** ~$1,800–$2,400 realistic blended.
- **Rough math to $1M ARR:** 460 customers × $180/mo × 12 = $1.0M. That's 1.7% of the ~27,000 serviceable insurance-heavy contractors. Achievable.
- **Rough math to $5M ARR:** ~2,000 customers at a $210 blended ACV/mo, which means winning the storm-restoration segment properly and landing 2–3 franchise/network deals (restoration franchises like the big water-damage networks have hundreds of independently-owned locations and are a single sales motion into a long tail).
- **Expansion path:** Seats grow with crews. Then per-claim packet fees on high-value claims. Then the real prize — flip the model and sell verification *access* to carriers and independent adjuster firms who'd rather receive pre-verified evidence than fight over it. That's a second revenue line on the same graph, and it arrives only after enough contractors are on the network that a carrier sees ShotSworn links regularly.

## 9. Go-to-market wedge — first 100 customers

- **Chase the storm.** Restoration demand is event-driven and geographically legible. When a major hail or wind event hits a metro, hundreds of contractors surge in within 72 hours. Storm-intel tools (HailTrace and equivalents) publish where. Be on the ground — literally, and in the local contractor Facebook groups — inside a week of every major event in TX/OK/CO/FL, selling "the carriers are about to fight you on these photos."
- **Sell to the supplement specialists first, not the contractors.** There's an entire cottage industry of supplement-writing firms and public adjusters who fight carriers on contractors' behalf for a percentage. They feel this pain *most acutely and most often* — a denied supplement costs them their fee directly. There are a few hundred of these firms, they're findable, and each one touches dozens of contractors. Land 20 of them and they'll pull their contractor clients on. This is the real wedge; the contractors are downstream.
- **Weaponize a denial.** Get one contractor a reversed denial using a signed-photo rebuttal packet, document it in obsessive detail with the actual carrier letter and the actual reversal, and put it in front of every roofing group on Facebook, r/Roofing, and the roofing/restoration podcast circuit. Restoration contractors trade war stories about carriers constantly; a documented win against a denial is the most viral artifact that exists in this industry.
- **Free tamper-check on carrier aerial reports.** Give away, with no signup, a tool that analyzes an insurer's AI-generated aerial audit and flags where it likely mistook shadow for damage or glare for moss. Every contractor fighting an aerial-audit non-renewal is a qualified lead who arrives already angry at exactly the problem you solve.
- **The trade shows that matter.** IRE (International Roofing Expo) and the restoration industry events. This buyer still buys in person, from someone who can talk about a denial like they've lived one.

## 10. Build complexity — justification

**Medium.** The provenance core is standards work, not research: C2PA is a published spec with open tooling, and hardware-attested signing on iOS/Android secure enclaves is well-trodden. Off-the-shelf: mobile capture, the signing chain, storage, the verification web page, packet PDF generation, and the LLM layer for rebuttal drafting. The genuinely custom work is (a) making the manipulation-forensics model on unsigned images good enough to be trusted rather than embarrassing, and (b) the mobile capture app being fast and reliable enough that a guy on a roof in July actually uses it — field UX failure kills this product faster than any technical shortfall. Call it 4 months to a credible v1 with 2 people, one of whom must be a strong mobile engineer. The forensics model can ship as v1.5; the signing + verification + packet loop is the sellable core.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Producing verifiable evidence is the opposite of a legal problem. No licensing needed to sell software to contractors. |
| Ethical — no harm / dark patterns | ✅ | Increases evidentiary truth on both sides. A fraudulent contractor is *worse* off using this. That's a feature. |
| Market exists (evidence above) | ✅ | 109K roofing firms, 38% insurance-claim work, $31B roof claims, incumbents charging $79–$215/mo for adjacent tooling. |
| 1–5 person team can build this | ✅ | 2 people, 4 months. Mobile + backend + LLM glue. |
| Launchable with <$50K / ₹40L | ✅ | Sub-$20K. Storage and inference are the only real variable costs; a trade-show booth is the biggest line item. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money, real frequency — a denied supplement is $3K–$15K and denials are rising as carriers harden. Not quite hair-on-fire because most contractors haven't yet *named* the problem as a provenance problem; they experience it as "the adjuster is being difficult." You have to teach the pain before you sell the cure, and that costs you points. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: 99% of insurers encountering altered documentation, investigators formally hardening photo standards, contractors already paying $79–$215/mo for photo tooling and supplement services. What's missing is a direct signal of contractors *asking* for cryptographic provenance — nobody is searching for that yet. Demand for the outcome is proven; demand for this framing is inferred. |
| Build feasibility | 15 | 11/15 | Standards-based, no research risk, but mobile capture reliability and forensics quality are real engineering. 4 months for a pair, not 6 weeks. |
| Distribution clarity | 15 | 12/15 | The supplement-specialist channel is concrete, small, findable, and each node fans out to dozens of contractors. Storm-chasing is a named, dated, geographic trigger. Docks a few points because the "teach the pain first" tax makes conversion slower than a pure painkiller sale. |
| Revenue mechanics | 15 | 11/15 | $99–$399/mo is well inside this wallet — they already spend more than this on CompanyCam + EagleView + supplement fees. 460 customers to $1M is credible. The $5M path leans on franchise/network deals and the carrier-side flip, both of which are assumptions, not proven. |
| Time to first revenue | 10 | 8/10 | Sellable core (sign → verify → packet) can ship in ~10 weeks and pre-sold to supplement firms during the build. First dollar plausible inside 3 months of starting. |
| Defensibility | 10 | 5/10 | Honest score. The primitive is an open standard — CompanyCam can add C2PA signing and would obliterate a pure-provenance play. The real moat is accumulated: the chain-of-custody archive becomes the contractor's legal record and can't be migrated, and if adjusters start recognizing and trusting ShotSworn verification links, that recognition compounds. But that's a 12-month moat, not a month-3 moat. Month 3, this is copyable. **Speed and the supplement-specialist channel are the whole defense.** |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

You need a mobile engineer who can make a camera app that survives a July roof, and you need someone who can sit across from a supplement specialist in Dallas and speak the language of denials. A pure technical founder will build a beautiful provenance product nobody buys because they never taught the market the pain. A pure sales founder will get commitments and ship a photo app that fails in the field.

### Key assumptions to validate (3–5)

1. **Assumption:** Contractors experience carrier photo skepticism frequently enough and expensively enough to pay $99–$399/mo to fix it. **How to test:** 30 structured interviews with insurance-restoration contractors in TX/FL/CO. Ask directly: "In the last 12 months, how many supplements were denied or reduced where the carrier questioned your documentation? What did each cost you?" If the median answer is zero or one, the problem isn't intense enough yet and this is a VALIDATE, not a GO.
2. **Assumption:** Adjusters will actually *accept* and be moved by a cryptographic verification link — that provenance changes the outcome rather than just being technically correct. **How to test:** Take 10 real denied/disputed claims, produce a signed-photo rebuttal packet, and track how many get reversed or improved versus a control. This is the whole ballgame. If adjusters shrug at the verification link, the product is a very elegant no-op.
3. **Assumption:** Supplement specialists and public adjusters will act as a distribution channel rather than seeing this as competition to their fee-based service. **How to test:** Pitch 15 of them. Watch whether they lean in ("this makes my job easier") or pull back ("this makes me unnecessary").
4. **Assumption:** CompanyCam doesn't ship C2PA signing within 12 months. **How to test:** Monitor their release notes and job postings. If they announce it, the pure-provenance wedge collapses and you must have already moved to the rebuttal/forensics layer where the AI work is the differentiator.

### Risk flags

1. **Incumbent absorption:** CompanyCam owns the contractor's camera and the workflow around it. C2PA is an open standard. If they add signing, they win on distribution alone and ShotSworn becomes a feature. This is the single biggest risk and it is not hypothetical. The counter is to be more than a signing camera by month 6 — the forensics and rebuttal layer must be real.
2. **Market timing — the pain may be six months early.** Carriers are hardening now, but the contractor may not yet feel it as a *provenance* problem. Sell too early and you spend all your money educating the market for whoever comes second. The interviews in assumption 1 will tell you whether you're early or on time.
3. **Adjuster indifference:** Provenance only creates value if the counterparty cares. Adjusters are overworked and process-bound; a cryptographic link that requires them to understand cryptography may get ignored regardless of how correct it is. The verification page has to be legible to someone who does not care and has forty claims in the queue.
4. **The fraud-adjacent optics problem:** A meaningful slice of this industry is genuinely fraudulent — storm-chasing outfits, inflated supplements. A tool marketed as "beat the carrier" will attract exactly the wrong customer and burn the carrier-side relationship you eventually need. The positioning must be "prove you're honest," not "win against insurers," and that discipline has to hold under sales pressure.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with a strong mobile engineer, paired with
                        someone who can sell in-person to trades. Domain access to
                        supplement specialists / public adjusters is a large unfair advantage.
Time to revenue:        10–14 weeks (pre-sell to supplement firms during build)
Capital to launch:      <$20K
Top 3 assumptions to validate first:
  1. Contractors have had ≥2 supplements denied/reduced over documentation in the last
     12 months — 30 structured interviews in TX/FL/CO.
  2. A signed-photo rebuttal packet measurably improves denial outcomes — run 10 real
     disputed claims through it against a control.
  3. Supplement specialists treat this as leverage, not as a threat to their fee — pitch 15.
Kill criteria:
  - Abandon if fewer than 8 of 30 interviewed contractors can name a specific supplement
    denied or reduced over photo credibility in the last 12 months. The pain is too early.
  - Abandon if the 10-claim rebuttal test produces no measurable improvement over control —
    it means adjusters don't care about provenance and the primitive is inert.
  - Abandon if CompanyCam ships native C2PA capture signing before your v1 lands, and you
    have not yet built a forensics/rebuttal differentiator they can't trivially match.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the list. Pull supplement-writing firms and public adjusters serving TX/FL/CO (they advertise heavily and are easy to enumerate). Pull 60 insurance-restoration contractors in the same states from storm-event canvassing footprints. This is a list-building day, not a thinking day.
- **Day 3–4:** Run 30 contractor calls with one question that matters: *"In the last 12 months, how many supplements did you lose or get cut because the carrier questioned your photos — and what did each one cost you?"* Do not pitch. Do not describe the product. Just count. Simultaneously pitch 15 supplement specialists on being a channel and see who leans in.
- **Day 5:** Decide.

**Falsifiable outcome:** Go if **≥8 of 30 contractors name a specific documentation-credibility denial in the last 12 months with a dollar figure attached**, AND **≥4 of 15 supplement specialists agree to introduce clients in exchange for revenue share**. Below either bar, this is a real problem arriving too early — shelve it, set a calendar reminder for six months, and watch for CompanyCam's release notes. The thesis isn't wrong; the clock might be.
