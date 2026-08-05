---
title: "TailgateCheck — rebate tailgate check for HVAC installers"
slug: hvac-rebate-field-capture
date: 2026-08-05
category: HomeServices / US-SMB — Residential HVAC Contractors (3–40 Trucks) Filing Utility and State Heat-Pump Rebates
complexity: Low
score: 77
verdict: GO
confidence: Medium
oneLiner: "Tells your tech the rebate photos are wrong while they're still standing at the unit."
tags:
  vertical: HomeServices
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Mobile-first, Field-service, Workflow-automation, Solo-builder]
axes:
  problem: 17
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# TailgateCheck

## 1. One-liner

Tells your tech the rebate photos are wrong while they're still standing at the unit.

## 2. Trend signal — why now?

Three things moved in the last twelve months, and they moved in the same direction.

**The federal credit died and pushed everything down to fragmented state and utility programs.** Federal residential tax credits expired December 31, 2025, which shifted the center of gravity to state and utility programs. The 25C credit was easy — the homeowner claimed it on their own tax return and the contractor never touched it. That's gone. What's left is a patchwork where "each state is rolling them out on its own timeline" and "individual utility companies run their own incentive programs with their own rules." Programs "demonstrate remarkable heterogeneity in structure, funding levels, and implementation timelines."

**And the contractor is now the one who has to file.** This is the part people miss. Many state Home Electrification and Appliance Rebates programs and a growing number of utility incentives "require a participating or trained contractor to submit through a portal the homeowner cannot use directly." In Colorado, "as of April 2026, the HEAR program application process is contractor-initiated — your registered installer opens the application on your behalf." The paperwork burden didn't disappear with 25C. It got transferred onto the contractor's back office.

**The money at stake per job got big enough to hurt.** Colorado HEAR stacks to a "$14,000 maximum" for a below-80%-AMI household; a combined Xcel + HEAR example runs "$6,190 + $8,000 + $2,500 = $16,690" on a "$24,000" project. Mass Save whole-home heat pumps go "up to $10,000." And the contractor typically fronts it: "you collect maybe nine or ten thousand dollars from the homeowner at completion, and you file paperwork for the rest." One industry write-up calls it "fifteen thousand dollars or more sitting in someone else's approval queue per job."

Then there's the 2026 refrigerant cliff, which quietly invalidated a lot of institutional knowledge. Under the EPA's Technology Transitions Program, new residential systems with GWP over 700 are no longer permitted as of January 1, 2026. R-454B (GWP 466) and R-32 are the replacements. Rebate documentation now includes "refrigerant GWP confirmation" as a top-five denial cause — a requirement that did not exist eighteen months ago. Every tech who learned the paperwork on R-410A jobs is now working from a stale mental checklist.

Here's the number that made me write this up. Rebate paperwork costs contractors "$12 to $53 per job" at a $35/hour loaded admin rate — "20 to 45 minutes for straightforward utility programs; 60 to 90 minutes for income-qualified federal programs." That's the *clean* case. The dirty case is a denial, and the denial causes are absurdly mundane: "blurry nameplate photos are the most common cause of resubmission." Programs "check the AHRI number against the installed model pair exactly. A certificate for a similar pairing gets rejected." Miss it and someone drives back to the house.

Provenance:
  - Signal 1 (demand): Rebate paperwork costs contractors $12–$53/job; blurry nameplate photos are the #1 resubmission cause; five documentation items drive most denials; 30–90 day submission windows with short resubmission windows — https://www.bellafsm.com/hvac-rebate-paperwork/ — 2026-08-05
  - Signal 2 (economic): Federal credit expiry shifted incentives to fragmented state/utility programs; contractor-initiated applications through portals homeowners can't use; $14,000–$16,690 stacked per job; contractor floats the rebate for 60–90 days — https://www.acdirect.com/blog/2026-2027-us-solar-hvac-incentives-post-federal-credit-era/ and https://hvacknowitall.com/blog/carrying-the-rebate-what-utility-programs-cost-you-in-cash-flow — 2026-08-05
  - Signal 3 (feasibility): Vision-model inference collapsed in price — Gemini 2.5 Flash-Lite at $0.10/1M input tokens, batch API at 50% off — making per-photo OCR + nameplate validation cost fractions of a cent; AHRI Directory provides a public matched-system lookup keyed on certified reference number — https://ai.google.dev/gemini-api/docs/pricing and https://www.ahridirectory.org — 2026-08-05
  Category: Workflow automation

## 3. The opportunity

There are already startups in HVAC rebates. I looked hard at them before deciding this was still open, because if Eli or Rock Rabbit had this covered I'd have killed it.

They don't. Every funded player is solving **discovery and filing** — which rebates exist, and getting the form submitted. Sealed Pro "streamlines rebate applications" and fronts cash for a 25% cut of the rebate. Rock Rabbit ($3.1M seed, Feb 2024) is "a one-stop shop for finding rebates, tax credits, and financing options." Eli Technologies ($6.8M seed, Feb 2024) "walks contractors through a unified application" at a monthly fee capping at $500 plus "$100–$350 per project."

All three are back-office tools. They assume the evidence already exists and is correct. The unified application is a better *form*. But the denials don't come from the form — they come from what the tech did or didn't photograph three days earlier, at a house nobody is going back to.

That's the gap. **The failure happens in the field, and every existing product lives in the office.** By the time an Eli or a Sealed Pro touches the job, the tech has packed up, the drywall guy has covered the indoor unit, and the nameplate photo is a blurry thumbnail of a sticker at a bad angle. The office finds out when the portal kicks it back, which is 30 to 60 days later, inside a resubmission window that is "often short."

Sealed Pro's 25% take is the other tell. If filing rebates were a solved, low-risk clerical task, nobody would pay a quarter of the rebate to make it go away. That fee is priced against *failure risk and float*, not against typing. Cut the failure rate and you've attacked the thing they're actually charging for — at a fraction of the price.

I'm not competing with them on filing. I'm the thing that runs before they do, and I'd happily hand a clean, validated evidence packet to Eli's API on the way out.

## 4. Target market

**Primary customer:** Owner or general manager of a residential HVAC contractor running **3 to 40 trucks**, doing heat-pump changeouts in a state with live stacked incentives — Colorado, California, New York, Massachusetts, Illinois, Maine, Washington, Oregon. Typically $2M–$20M revenue, one or two people in the back office, no dedicated rebate coordinator. Big enough that denials cost real money, small enough that there's no full-time person absorbing them.

**Why they buy:** In their words, via people in the trade: "getting a rebate is essentially as complicated as getting a mortgage" (Andrew Krause, CEO, Northern Pacific Power Systems). "Most contractors have been burned by rebate programs and [have] very limited trust in them" (same). "Contractors are not accountants. Time spent completing applications, doing trainings, marketing and communicating incentives, etc., takes time away from their sales and installs" (Lacey Tan, RMI). And the reputational edge Krause names: "When homeowners make investment decisions [based] on bad data…that puts a contractor's brand and reputation at risk."

The buying trigger isn't the admin minutes. It's the specific memory of a denied $8,000 rebate on a job where the homeowner had already been promised the discount. That's a conversation the owner personally had to have, and it's why they'll take the call.

**Rough TAM reasoning:** Roughly 100,000+ HVAC contracting establishments in the US. Filter to residential-heavy shops with 3+ trucks operating in states with meaningful contractor-filed rebate programs and I get to a serviceable base in the low tens of thousands. At my pricing I need about 400 of them for $1M ARR. That's under 2% of a conservatively-drawn base — the kind of number I like, because it doesn't require winning the market.

**Why now for them:** 25C is gone, so the rebate is no longer the homeowner's problem. It's a line item the contractor discounts up front and then has to go collect. Simultaneously the A2L refrigerant transition means the documentation rules changed on January 1, 2026, and every experienced tech's mental checklist is now subtly out of date. New rules plus higher dollars plus contractor-carries-the-float is a bad combination, and it landed this year.

## 5. Product sketch (MVP)

- **Tailgate check before the tech leaves.** Tech opens the job on their phone, shoots the required photos, and gets a pass/fail per item in seconds — not a checklist to self-certify, an actual read of the image.
- **Nameplate legibility scoring.** Reads model number, serial number, and refrigerant type off both indoor and outdoor nameplates. If it can't read the characters cleanly, neither can the reviewer — it says "reshoot the outdoor nameplate, serial is cut off" while the tech is still standing there.
- **AHRI match verification.** Takes the indoor and outdoor model pair as read from the photos, checks the combination against the AHRI Directory, and returns the certified reference number — or flags that this pair has no matched certificate, which is the denial nobody catches until it's too late.
- **GWP / A2L eligibility flag.** Confirms the installed refrigerant clears the post-January-2026 GWP-700 threshold, and flags sell-through R-410A equipment that may or may not qualify for a given program.
- **Program-aware requirement lists.** Pick the utility or state program on the job and the required-evidence list reconfigures — Mass Save asks for different things than Xcel + HEAR. Includes the itemized-invoice rule (single-line invoices get rejected) and the signed homeowner authorization.
- **Deadline clock per job.** Shows days remaining in the submission window (30–120 days depending on program) and escalates to the office before it expires.
- **Clean evidence packet.** One export per job with every validated photo, the AHRI certificate, the itemized invoice and the signed authorization — ready to hand to whoever files, whether that's the back office, Eli, or a processor.
- **Denial ledger.** When something does get kicked back, the reason gets logged against the program so the requirement list gets sharper for every customer on that program.

## 6. AI angle — what's load-bearing

Remove the AI and this is a checklist app, which is a thing that already exists and that nobody pays for, because a checklist only records that the tech *said* they took a good photo.

The load-bearing work is visual judgment at the moment of capture: reading a dirty, angled, sun-glared nameplate sticker and deciding whether a human reviewer at a utility will be able to read the model and serial off it. That's a genuine perception task — the input is a bad photograph and the output is a decision about legibility and character extraction. There is no rules engine for "is this photo good enough."

The second AI-dependent piece is normalization. Manufacturer model numbers on nameplates carry suffixes, revision codes and distributor variants that don't match the AHRI Directory string exactly. Getting from what's physically printed on the unit to the string that resolves to a certified reference number is fuzzy matching against a messy reality, and it's the step that decides whether the AHRI check works at all.

Economics make it viable now rather than in 2023: Gemini 2.5 Flash-Lite runs $0.10 per million input tokens with a 50% batch discount, so a handful of photo evaluations per job costs a fraction of a cent against a rebate worth thousands. That ratio is what turns "technically possible" into "obviously worth doing."

## 7. Localization angle (if any)

N/A — this is a US-only play, and deliberately so. The entire value is encoded in American program specifics: AHRI matched-system certification, EPA Technology Transitions GWP thresholds, state HEAR implementations, and individual utility portal rules. None of that travels. An India or EU version wouldn't be a translation, it would be a different product against a different regulatory object. I'd rather own one market's rules completely.

The real "localization" here is *state-level*, and that's the actual work: Colorado's Xcel + HEAR stack behaves differently from Mass Save, which behaves differently from NYSERDA. Launch in one state, get the requirement list genuinely right, then port. That sequencing is the moat-building exercise.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $199/month base (up to 3 trucks) and $299–$599/month for 4–15 trucks, with a $899/month tier above that. Flat subscription, not per-rebate.
- **Why flat, not a rebate cut:** Sealed Pro takes 25% of the rebate. On a $16,690 stack that's over $4,000. I'm charging a contractor a few hundred a month to prevent the denial in the first place. The pitch writes itself: for less than the admin cost of one denial you cover every job for a month. Flat pricing also keeps me out of the payments/float business, which is where capital requirements come from and which I explicitly don't want.
- **ACV:** ~$4,800 blended ($400/mo average across tiers).
- **Rough math to $1M ARR:** 210 contractors × $400/mo × 12 = $1.0M. Two hundred and ten shops is a phone-callable number — that's the whole point.
- **Rough math to $5M ARR:** ~870 contractors at a $480 blended ACV, which requires being live and requirement-accurate in 8–12 states rather than 2, plus expansion into adjacent trades that file the same kinds of rebates (electrical panel upgrades, heat pump water heaters, insulation). Realistically a 30-month path, not an 18-month one.
- **Expansion path:** Truck count is the natural meter and it grows with the customer. Then per-program packs as states are added. Then the genuinely interesting upsell — a filing service on top of validated packets, where the packet quality is already proven, priced per submission. That's where ACV could double, and it's only credible *after* the validation layer is trusted.

## 9. Go-to-market wedge — first 100 customers

Concretely, and in order:

- **Mine the program participant lists — they're public.** State and utility programs publish their registered/participating contractor directories, because homeowners need to find them. Colorado HEAR, Mass Save, TECH Clean California, NYSERDA. These lists are the most qualified lead list I've ever seen for a product: every name on them is, by definition, a contractor filing contractor-initiated rebates. Scrape 2,000 across four states, and the targeting problem is solved on day one.
- **Lead with a free denial audit, not a demo.** Ask a shop for their last 20 rebate submissions. Run the photos through the tool and hand back a report: "six of these have nameplate photos a reviewer will bounce; two have AHRI pairs with no matched certificate." That's not a pitch, it's evidence about their own money, and it converts because it's specific. Expect to run 100 audits to close 15–20.
- **Distributor and manufacturer rep channel.** Trane/Carrier/Daikin distributor branches run contractor training days and already push rebate education as a way to move equipment. They have the relationships and a direct interest in rebates closing smoothly, because rebate friction kills heat pump sales. Three or four branch partnerships in one state puts me in front of a few hundred shops with a warm introduction.
- **HVAC School, HVAC Know It All, and the podcast circuit.** This trade has an unusually strong independent media layer, and the rebate cash-flow problem is already being discussed there — HVAC Know It All published on carrying the rebate float. These audiences are owners and senior techs, exactly the buyer, and a guest segment on "why your rebates get denied" is native content, not an ad.
- **State program administrators themselves.** They have a real incentive here: denied applications cost them staff time and make their program look broken. A pilot where the administrator recommends a pre-submission check to participating contractors is a plausible distribution deal that costs nothing to explore.

I can see the first 100 clearly, which is the test. It's a list of named shops on published directories in four states, reached by an audit that shows them their own denials.

## 10. Build complexity — justification

**Low.** The v1 is a mobile capture flow plus a vision-model evaluation loop plus a lookup against the AHRI Directory, wrapped in a standard web back office. No custom models — off-the-shelf vision APIs handle nameplate reading, and cost per job is fractions of a cent. No hardware. No payments to move, deliberately.

The real work is not engineering, it's **requirement encoding**: getting the per-program evidence lists exactly right for the first two or three programs, which means reading program manuals closely and talking to people who've been denied. That's a research task with an engineering wrapper. A technical founder plus a domain-savvy second person ships a credible v1 in 8–10 weeks for one state, and each additional program is incremental.

The thing that could push this to Medium is AHRI Directory access at scale. If there's no usable programmatic path, that becomes a data-maintenance burden rather than a lookup — annoying, not fatal, but worth checking in week one.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping contractors document their own installations accurately. No filing on anyone's behalf in v1, no regulated activity. |
| Ethical — no harm / dark patterns | ✅ | Increases the share of rebates that actually reach homeowners. Directly counters the "contractor folds the rebate into a higher price" pattern by making the real amount visible. |
| Market exists (evidence above) | ✅ | Three funded competitors adjacent to this problem, documented $12–$53/job admin cost, documented denial causes, contractor quotes on the pain. |
| 1–5 person team can build this | ✅ | Two people, 8–10 weeks to a one-state v1. |
| Launchable with <$50K / ₹40L | ✅ | Inference is fractions of a cent per job. Main cost is founder time plus travel to distributor training days. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Real money, felt per job, with a memorable failure event. $8K–$16K denials on jobs where the discount was already given to the homeowner. Not daily, but every denial is a story the owner personally owns. Held short of 18+ because a shop with a disciplined coordinator has a workaround that mostly holds. |
| Demand evidence | 15 | 12/15 | Strong: three funded competitors ($3.1M and $6.8M seeds), documented per-job admin cost, named contractor quotes, documented denial causes. Docked because the evidence is for the *adjacent* problem (filing) — nobody is yet demonstrably paying for field validation specifically. |
| Build feasibility | 15 | 13/15 | Off-the-shelf vision APIs, standard mobile + web, no custom models. 8–10 weeks to one-state v1. AHRI lookup access is the one open question. |
| Distribution clarity | 15 | 12/15 | Public participating-contractor directories are a near-perfect lead list, and the free denial audit is a concrete converting motion. Docked because it's outbound to contractors, who are famously hard to reach during season. |
| Revenue mechanics | 15 | 11/15 | Flat $199–$899/mo is benchmarked against Eli's ~$500/mo cap, so pricing is grounded. 210 customers to $1M is achievable. Docked because the ROI is *avoided* denials, which is harder to sell than recovered cash — a known friction in prevention products. |
| Time to first revenue | 10 | 8/10 | Denial audits can pre-sell before the product is finished; realistic first paid customer in 6–10 weeks. Not 9–10 because contractors buy slowly in peak season. |
| Defensibility | 10 | 4/10 | Honest score, and the weak axis. The vision layer is copyable within months. The only durable asset is the accumulated denial ledger — knowing what each program actually rejects, which compounds but slowly. A funded incumbent (Eli, Sealed) could bolt a field-capture module onto an existing distribution base and erase the head start. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Vision pipeline and model-number normalization need real engineering, but the harder half is calling HVAC shop owners and getting distributor branches to open doors. A pure builder will stall on distribution here.

### Key assumptions to validate (3–5)

1. **Assumption:** Denial and resubmission rates are high enough to be worth preventing — the industry target is "90 percent approval without additional information requests," implying real shops sit meaningfully below it. **How to test:** Run free denial audits on the last 20 submissions from 10 shops. If the average bounce-worthy rate is under 5%, the pain is too thin and pricing collapses.
2. **Assumption:** Contractors will pay a flat monthly fee to *prevent* denials rather than a success fee on *recovered* rebates. **How to test:** Offer both structures to the first 20 prospects and see which they pick. If they overwhelmingly want the success fee, the business is a services business and the score drops.
3. **Assumption:** Techs in the field will actually use it before leaving the site. **How to test:** Two-week shadow pilot with 3 shops; measure the share of jobs where the tailgate check was completed on-site versus back-filled from the office. Below 60% on-site, the core mechanic doesn't work.
4. **Assumption:** AHRI matched-pair data is accessible programmatically at acceptable cost and terms. **How to test:** Contact AHRI data services in week one and read the directory terms. If it's fully blocked, the flagship check needs a different approach.
5. **Assumption:** Model numbers read off physical nameplates normalize reliably to directory entries. **How to test:** Collect 200 real nameplate photos from 5 shops and measure end-to-end match accuracy. Below 85%, the AHRI check produces false alarms and techs will ignore it.

### Risk flags

1. **Competitive encroachment:** Eli ($6.8M) and Sealed have funding, distribution, and an obvious reason to add field capture. This is the single biggest risk and it's why defensibility scored 4. The counter is to be the neutral layer everyone's filing tool can consume, rather than a competing filing product.
2. **Platform/data dependency:** The AHRI check is the differentiated feature and it depends on a third party's data. Terms could change.
3. **Regulatory/funding volatility:** These programs run out of money. HEEHRA single-family rebates were "fully reserved statewide as of February 2026" in California, operating on a waitlist; TECH Clean California closed reservations "as of January 7, 2026" in multiple regions. If programs stall broadly, the pain evaporates. Mitigation is multi-state coverage from early on — never be a one-program company.
4. **Prevention-product friction:** Selling avoided losses is structurally harder than selling recovered cash. Sealed sells "here's $15K in 10 days." I sell "you won't lose $8K." The audit-first motion exists specifically to make the loss concrete.
5. **Seasonality:** HVAC shops are unreachable in peak summer and winter. Sales cycles will be lumpy and shoulder seasons matter disproportionately.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder comfortable with vision pipelines,
                        paired with someone who can call HVAC shop owners and
                        work distributor branch relationships. Prior home-services
                        or energy-program exposure is a meaningful advantage.
Time to revenue:        6–10 weeks (denial audits can pre-sell before v1 ships)
Capital to launch:      $15–25K
Top 3 assumptions to validate first:
  1. Denial rates are materially above zero — free audits on last-20 submissions
     from 10 shops; kill if bounce-worthy rate averages under 5%
  2. Techs complete the check on-site — 2-week shadow pilot with 3 shops;
     kill if under 60% completed before leaving the property
  3. AHRI matched-pair data is programmatically accessible — contact AHRI data
     services and read directory terms in week one
Kill criteria:
  - Abandon if fewer than 8 of 40 audited shops convert to a paid pilot
  - Abandon if on-site completion rate stays below 60% after two pilot iterations
  - Abandon if Eli or Sealed ships an equivalent field-capture module before v1,
    unless a neutral-layer partnership with them is available instead
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape participating-contractor directories for Colorado (Xcel + HEAR) and Massachusetts (Mass Save). Build a list of 300 shops with 3+ trucks. In parallel, contact AHRI data services about programmatic matched-pair access and read the directory terms — this answers the single biggest technical unknown before any code exists.
- **Day 3–4:** Email and call 60 shops offering a free rebate denial audit: send us your last 20 submissions, we'll tell you which ones a reviewer would bounce and why. Do the analysis by hand — no product needed, just careful eyes on nameplate photos and AHRI pairs. Target 10 shops sending real submission packets.
- **Day 5:** Score the audits and take the results back to every shop that participated. Ask one question with a number attached: at $299/month, would you put this on your trucks?
- **Go / no-go:** Proceed only if **≥25% of audited submissions contain at least one bounce-worthy defect** AND **≥4 of 10 audited shops verbally commit at $299/month**. Below either threshold, the denial problem is smaller than the sources suggest, and this is a feature inside somebody else's filing product rather than a company.

The audit output is falsifiable by construction: either their real submissions have defects a reviewer would reject, or they don't. I'm not asking anyone whether they like the idea.
