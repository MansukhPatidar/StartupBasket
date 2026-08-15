---
title: "TenureTender — driver-tenure file for freight brokers"
slug: broker-driver-tenure-attestation
date: 2026-08-15
category: Logistics / US-SMB — Licensed Property Freight Brokerages (5–75 Staff) Who Became Suable for Negligent Selection in May 2026 and Still Cannot Name the Human Driving Their Load
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Captures who is actually driving your load and how long they have worked there, before the truck rolls."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Workflow-automation, Risk-evidence]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# TenureTender

## 1. One-liner

Captures who is actually driving your load and how long they have worked there, before the truck rolls.

## 2. Trend signal — why now?

Three things moved inside five months, and together they changed what a freight broker is legally required to know.

**The Supreme Court removed the broker's shield.** On 14 May 2026, in *Montgomery v. Caribe Transport II*, the Court held 9-0 that the Federal Aviation Administration Authorization Act does not preempt negligent-hiring claims against freight brokers. For two decades brokers batted these suits away on preemption. That defence is gone. In July 2026 a Dallas jury returned a verdict of roughly $604M in a case involving C.H. Robinson. Every brokerage's insurer now wants to see how carrier and driver selection decisions were documented at the moment they were made — not reconstructed afterwards from email.

**The theft playbook moved inside the cab.** TAPA Americas documented the "Trojan Driver Scam" in April 2026: theft rings place operatives as genuine employees inside legitimate, fully-vetted carriers. The operative passes the carrier's own hiring checks, drives normally, then parks a high-value load at a designated spot during a "routine break" and walks away looking like a victim. The carrier fires him for protocol violation — which is the plan — and he cycles to the next carrier. TAPA's recommended countermeasure is specific and, today, unenforceable: require drivers to have been employed six to twelve months before assigning high-value loads. No broker can check that.

**The money is concentrating, which is what makes it a budget line.** Verisk CargoNet put 2025 cargo theft losses at about $725M, up ~60% year over year on essentially flat incident counts. H1 2026 continued the pattern — incidents down 6%, losses up 125% to $304.6M. Fewer, bigger, smarter hits. That shape of loss is the kind underwriters reprice.

The important detail is what got solved in April 2026 and what did not. Highway launched "Know Your Driver," Verified Carrier launched "Verified Pickup" (government ID plus facial recognition), and E3 Group launched "Shield" (CDL authentication plus biometric selfie) — all within days of the TAPA warning. Driver *identity* at pickup is now a solved, competitive category. **Driver tenure is not built by anyone.** And identity verification structurally cannot stop a Trojan Driver: the operative is a real employee holding a real CDL who passes every biometric check by design. The one countermeasure the industry has actually proposed is the one nobody sells.

```
Provenance:
  - Signal 1 (demand): TAPA Americas "Trojan Driver Scam" — theft-ring operatives embedded as bona-fide employees inside vetted carriers; recommended countermeasure is a 6–12 month driver tenure bar before high-value loads — https://www.truckinginfo.com/news/new-trojan-driver-cargo-theft-scam-bypasses-carrier-vetting-systems — April 2026
  - Signal 2 (economic): Montgomery v. Caribe Transport II, 9-0, holding FAAAA does not preempt broker negligent-hiring claims — https://www.supremecourt.gov/opinions/25pdf/24-1238_1b7d.pdf — 14 May 2026; ~$604M Dallas verdict followed July 2026
  - Signal 3 (feasibility): Driver-identity verification shipped April 2026 (Highway "Know Your Driver", Verified Carrier "Verified Pickup", E3 "Shield") proving brokers will adopt driver-level checks at pickup — https://www.sdcexec.com/transportation/trucking/news/22965207/ — 15 April 2026
  - Signal 4 (economic): Verisk CargoNet — 2025 losses ~$725M, +60% YoY on flat incident counts; H1 2026 losses +125% to $304.6M on 6% fewer thefts — https://www.verisk.com/company/newsroom/cargo-theft-losses-surge-to-estimated-$725-million-in-2025-verisk-cargonet-analysis-reveals/ — 2025/2026
  Category: Regulatory arbitrage (court-driven) + Underserved niche
```

## 3. The opportunity

Every carrier-vetting product on the market verifies the wrong unit. Highway, Carrier Assure, MyCarrierPortal, RMIS, DAT CarrierWatch, FreightValidate — all of them answer "is this carrier real and authorised?" The April 2026 wave answered the next question: "is this human the authorised driver?" Nobody answers the question that actually predicts the loss: **"how long has this human worked here?"**

That gap exists because of where the data sits. Federal driver-data rails are closed to brokers. PSP is contractually limited to pre-employment screening and carries 18 U.S.C. §1001 exposure. The Drug & Alcohol Clearinghouse, DAC reports, and DPPA §2721(b)(9) are all employer-, agent-, or insurer-scoped. A broker cannot pull any of it. So the obvious build is illegal, and everyone stopped there.

The legal path runs through the carrier, and it is narrow but real. Carriers already hold driver employment history — federally mandated under 49 CFR §391.51 and §391.21. FCRA §1681a(d)(2)(A)(i) excludes a party's own transactions-and-experiences information from "consumer report," and §1681b(a)(2) permits disclosure on the consumer's written instructions. So the carrier attests to its own employment record, per load, with the driver's consent. The bright line is hard and must never be crossed: **aggregating a cross-carrier driver database or scoring individual drivers makes you a consumer reporting agency.** Per-load attestation only. Store the attestation, not a dossier.

That constraint is the moat. It looks like a limitation and it is actually why the incumbents can't casually bolt this on — Highway and Verified Carrier are building identity graphs and driver rosters, which is the CRA-adjacent direction. A product deliberately architected to never hold a cross-carrier driver record is doing something structurally different.

Reframe the pitch and it gets stronger. This is not primarily a theft product — theft is the story that gets the meeting. It is a **negligent-selection evidence product**. After *Montgomery*, a brokerage needs a timestamped, contemporaneous record showing what it knew about carrier and driver at the moment it tendered the load. Most have nothing but a rate confirmation and a Highway screenshot. That is a bad exhibit.

## 4. Target market

- **Primary customer:** Owner or VP of Operations at a licensed US property freight brokerage, 5–75 staff, moving 200–4,000 loads/month, especially those hauling high-theft commodities (electronics, food and beverage, household goods, pharma). Also target the brokerage's insurance broker as a channel.
- **Why they buy:** Two reasons, in this order. First, their liability insurer or a large shipper customer started asking how they vet at the driver level and they have no answer. Second, they have personally been hit by — or watched a peer get hit by — a load that vanished after passing every carrier check. Andrey Drotenko, president of Verified Carrier, put the operational reality plainly: *"The weakest link, though, is still going to be at the point of pickup. That's where you have the highest turnover."* Cornell Heldenbrand, J.B. Hunt's VP of Security, on a carrier that cleared vetting and then stole: *"They ran one load for this customer, and it went fine. The very next load they picked up, they drove to a truck stop a few miles away, dropped it off and went to watch wrestling in Mexico."*
- **Rough TAM reasoning:** ~25,087 active licensed brokerages as of April 2025, down 8.6% YoY. The top 1,000 (3.5%) generate about 88% of revenue, so the long tail is overwhelmingly sub-10-person shops that cannot afford enterprise tooling. Realistic serviceable target: the 3,000–5,000 mid-tier brokerages with enough volume and enough exposure to care. Capturing 400 of them is a real business.
- **Why now for them:** Before 14 May 2026 a negligent-selection suit was usually disposed of on preemption. It no longer is. Renewal season is when this becomes a purchase order rather than a good intention.

## 5. Product sketch (MVP)

- **Tenure request at tender.** When a load is tendered, the carrier's dispatcher gets a single link: name the driver assigned, and attest to their hire date and current employment status.
- **Driver consent capture.** The driver confirms by SMS link, giving the written instruction FCRA requires. One tap, no app install.
- **Tenure bar enforcement.** The broker sets a policy — e.g. "≥6 months tenure for loads over $250K declared value" — and the system flags, warns, or blocks tenders that breach it.
- **The tender file.** Every load produces a timestamped PDF: carrier authority snapshot, insurance status, driver named, tenure attested, consent recorded, policy applied, who overrode it and why. This is the exhibit.
- **Override log with reasons.** Brokers will override under load-board pressure. Capturing *why*, in the moment, is worth more legally than a clean record nobody believes.
- **Anomaly flags.** Carrier attests a hire date inside the last 30 days on a high-value load; same driver name attested by a different carrier last month; attestation returned in nine seconds by a dispatcher who cannot have checked. These are signals, not scores.
- **Insurer/shipper export.** One-click pack of tender files for a date range, for renewal submissions or a shipper's quarterly vendor review.

## 6. AI angle — what's load-bearing

Honest answer: AI is doing real work here, but it is not the reason the product exists. The legal structure is.

Where it earns its place: parsing the wildly inconsistent artefacts carriers send back — a photographed driver qualification file page, a screenshot of a payroll system, a typed email reply — into a structured hire date and status. That is a genuine document-understanding problem across thousands of small carriers with no common format, and it is what makes the flow take 40 seconds instead of a phone call. Second, the anomaly layer: correlating attestation timing, hire-date clustering, and cross-load patterns *within a single broker's own book* to surface the tenders worth a human second look.

If you removed the AI you would still have a product — a slower, more manual one that brokers would use less. That is an honest Medium AI-dependency, not a load-bearing one, and I am scoring defensibility accordingly rather than pretending otherwise.

## 7. Localization angle

N/A — this is a US-only play, and deliberately so. The entire thesis rests on US-specific legal machinery: FAAAA preemption and its removal in *Montgomery*, FCRA's transactions-and-experiences exclusion, 49 CFR §391.51 driver qualification file mandates, and FMCSA broker licensing. None of that transfers. An EU or India version would be a different product built on different law, not a translation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $399/mo base (up to 250 tendered loads/mo) → $899/mo mid (up to 1,000) → $1,899/mo for multi-branch. Benchmarked against the two vendors who publish: Carrier Assure at $149/mo and MyCarrierPortal starting at $515/mo. Highway is contact-sales; the "$1,500–2,500/mo" figure circulating in the market comes from competitor marketing and I would not rely on it.
- **ACV:** ~$9,600 realistic blended.
- **Rough math to $1M ARR:** 105 brokerages at $899/mo. That is 2–4% of the serviceable mid-tier — reachable, but it is a sales grind, not a signup funnel.
- **Rough math to $5M ARR:** ~520 brokerages blended, or ~350 brokerages plus an insurer channel deal where a carrier or MGA subsidises the tool across its book. The insurer path is the realistic route to $5M; pure direct sales to sub-10-person brokerages caps out earlier.
- **Expansion path:** per-load overage above tier; a shipper-side seat so beneficial cargo owners can demand and view tender files from their brokers; an annual "renewal pack" for insurance submissions.

## 9. Go-to-market wedge — first 100 customers

- **Sell through transportation insurance brokers and MGAs, not to shippers.** There is a concentrated set of specialist transport insurance brokers writing contingent cargo and broker liability. After *Montgomery* they are actively hunting for defensible-process evidence to put in front of underwriters. Pitch 30 of them; a single one recommending the tool at renewal delivers 10–40 brokerages. This is the highest-yield channel and it should be built first.
- **Work the TIA membership directly.** The Transportation Intermediaries Association runs the conference where all three driver-identity products launched in April 2026. Its members are exactly the mid-tier licensed brokerages targeted here. Exhibit, run a session on tenure as the unaddressed half of the TAPA countermeasure, and leave with a list.
- **Target the freshly burned.** CargoNet and FreightWaves report specific theft events continuously, and brokers post about their own losses publicly. A brokerage that lost a load last month takes the meeting this month. Monitor reported incidents, identify the broker where public, and reach out within two weeks with a tender-file example built from that load's public facts.
- **Land through compliance consultants.** A modest number of consultants do FMCSA compliance and safety-management work for small brokerages. They already have the trust relationship and are being asked "what do we do about *Montgomery*?" Give them a referral fee.
- **Direct outbound to the high-theft commodity slice.** Filter FMCSA broker records for those brokering electronics, food and beverage, and household goods. Roughly 2,000 targets; send a two-minute walkthrough of the tender file for a load they actually moved. Expect low single-digit reply, which at this ACV is enough.

## 10. Build complexity — justification

Medium. The mechanics are ordinary: a tender-time workflow, an SMS consent loop, document parsing, PDF generation, and integrations with the TMS systems mid-tier brokers run. Nothing needs a research breakthrough. What makes it Medium rather than Low is the integration surface — brokers live inside their TMS and will not adopt a separate tab, so the first two integrations are mandatory, not optional. Budget 14–18 weeks for a pair to reach a credible v1, plus real legal spend up front (see risks) to get the FCRA boundary drawn correctly by counsel before the first line of code.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Carrier-attested, driver-consented, per-load. Requires FCRA counsel sign-off and a hard architectural ban on cross-carrier driver records. |
| Ethical — no harm / dark patterns | ✅ | Driver consents; no scoring of individual drivers; no cross-employer dossier. A tenure bar could disadvantage legitimately job-changing drivers — mitigate by flagging for review, never auto-blacklisting. |
| Market exists (evidence above) | ✅ | Three competitors shipped adjacent products in one week of April 2026. |
| 1–5 person team can build this | ✅ | Pair plus fractional counsel. |
| Launchable with <$50K / ₹40L | ✅ | Main cost is legal, not engineering. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Post-*Montgomery* liability plus $725M/yr concentrated theft losses. Real and expensive. Held below 18 because most brokers have not yet felt a suit personally — the fear is anticipatory. |
| Demand evidence | 15 | 13/15 | Three funded competitors shipped driver-level products in one week; TAPA named the countermeasure explicitly. Docked for having no verified quote of a broker asking specifically for *tenure*. |
| Build feasibility | 15 | 11/15 | Ordinary stack, but TMS integrations are mandatory and the legal architecture must be right before build. |
| Distribution clarity | 15 | 12/15 | Insurance-broker channel is concrete and high-yield; TIA is a named venue. Not higher because the channel is relationship-led and slow to start. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against two published competitors. $1M is clearly reachable; $5M leans on an insurer channel deal that is assumed, not proven. |
| Time to first revenue | 10 | 7/10 | 8–12 weeks to first paid pilot via a warm insurance-broker intro. Not faster — brokers buy on renewal cycles. |
| Defensibility | 10 | 5/10 | Honest score. The FCRA-compliant architecture and insurer relationships are real but copyable; Highway could add tenure to "Know Your Driver" in a quarter if it decides the CRA risk is acceptable. This is an execution-and-focus moat with a 6–12 month head start, not a structural one. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs someone who can hold an FCRA conversation with counsel and a TMS integration conversation with a broker's ops lead in the same week. A pure engineer will build the illegal version.

### Key assumptions to validate (3–5)

1. **Assumption:** Carriers will actually complete a per-load tenure attestation rather than ignoring it or lying. **How to test:** Run 50 real attestation requests manually through friendly brokers' carrier bases. Measure completion rate and time-to-return. Below 60% completion, the workflow dies at the carrier, not the broker.
2. **Assumption:** Brokers will pay for evidentiary documentation before they are sued, not after. **How to test:** 25 paid-pilot conversations. Track how many convert without a live claim in progress. This is the single biggest commercial risk.
3. **Assumption:** The FCRA carrier-attestation path survives counsel review as designed. **How to test:** Two independent FCRA opinions before build, specifically on per-load attestation with driver consent and no cross-carrier retention.
4. **Assumption:** Insurance brokers will actively recommend it. **How to test:** 10 conversations with transport-specialist insurance brokers; a real signal is one agreeing to co-present to their book, not vague enthusiasm.
5. **Assumption:** Trojan Driver operatives actually fall below a 6–12 month tenure bar. **How to test:** No public source quantifies operative dwell time — this is a genuine unknown. Interview CargoNet/TAPA investigators directly. If operatives routinely outlast a year, the theft rationale weakens and the product rests on the liability case alone.

### Risk flags

1. **Incumbent absorption:** Highway shipped "Know Your Driver" in April 2026 and has FTV Capital growth equity behind it. Adding a tenure field is not technically hard. The defence is the CRA boundary they may not want to cross and a channel they do not own — thin, but real.
2. **Regulatory/legal risk:** This idea lives one bad architectural decision from being a consumer reporting agency. Illinois BIPA is the adjacent hazard if biometrics are ever added — Lytx settled $4.25M with truck drivers over facial geometry. Do not add biometrics.
3. **Sensor-based end-run:** GenLogs raised $60M Series B in February 2026 doing roadside sensor verification, observing trucks in public and sidestepping FCRA entirely. If physical observation gets good enough to infer driver-carrier stability, the attestation approach gets outflanked from a direction it cannot defend against.
4. **Carrier-side friction:** Every attestation is unpaid work for a small carrier's dispatcher during a capacity crunch. If carriers revolt, brokers will drop the requirement rather than lose trucks.
5. **Market timing:** Post-*Montgomery* urgency is real but may be absorbed by insurers rewriting policy language rather than brokers buying tools.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with freight/TMS domain access and an FCRA-literate advisor
Time to revenue:        8–12 weeks to first paid pilot
Capital to launch:      $25–40K (majority legal, not engineering)
Top 3 assumptions to validate first:
  1. Carrier attestation completion rate ≥60% — run 50 live requests before writing product code
  2. Brokers pay pre-claim, not post-claim — 25 paid-pilot conversations, measure conversion without an active suit
  3. FCRA per-load attestation path is clean — two independent legal opinions before build
Kill criteria:
  - Abandon if carrier attestation completion is <50% after 50 live requests and two workflow redesigns
  - Abandon if Highway or Verified Carrier ships tenure attestation before v1 launch
  - Abandon if <3 of 25 pilot conversations convert to paid without an active claim driving the purchase
  - Abandon if FCRA counsel cannot clear per-load attestation without CRA registration
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Book two FCRA attorneys with consumer-reporting experience. Put the exact architecture in front of them: per-load carrier attestation, driver SMS consent, no cross-carrier retention, no driver scoring. Get written positions. If both say this makes you a CRA, stop here — the week ends on day two and that is a cheap kill.
- **Day 3–4:** Recruit three friendly brokerages. Using their real carrier base, send 50 manual tenure attestation requests by email and SMS — no product, just a person and a form. Measure completion rate, median time-to-return, and how many carriers push back or refuse.
- **Day 5:** Call five transport-specialist insurance brokers. Ask one question: post-*Montgomery*, what evidence of driver-level vetting would change how you place or price a brokerage's liability cover? Listen for whether "tenure" comes out of their mouth unprompted.
- **Decide go / no-go on:** ≥60% carrier attestation completion within 24 hours, AND at least one clean FCRA opinion, AND ≥2 of 5 insurance brokers naming driver-level vetting evidence as something that affects placement. Miss any of the three and this is a VALIDATE at best — the carrier completion rate is the one that kills it fastest and costs the least to learn.
