---
title: "CaseReferee — remake-fault referee for dental labs"
slug: dental-lab-remake-fault
date: 2026-07-11
category: HealthTech / US — Independent Commercial Dental Laboratories (remake fault attribution & scan intake screening)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Screens every incoming dental scan before a technician touches it, and proves who caused the remake when one happens."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Workflow-automation, Solo-builder, Vertical-SaaS]
axes:
  problem: 17
  demand: 11
  build: 10
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CaseReferee

## 1. One-liner

Screens every incoming dental scan before a technician touches it, and proves who caused the remake when one happens.

## 2. Trend signal — why now?

Three things moved at once, and they moved in the lab's favour for the first time.

**The case data became machine-readable.** Scanner penetration hit roughly 60% of US practices, and the big labs report the majority of crown orders now arriving as digital files rather than physical impressions — Glidewell reportedly took 78% of its 2025 crown orders as STL. A lab used to receive a box of stone and a handwritten script. Now it receives a mesh file and a form. You cannot algorithmically inspect a lump of plaster at 6am. You can inspect a mesh.

**The remake bill got heavier.** The national remake average sits around 4%, with plenty of labs running 6–7%, and the per-case damage is real money on both sides: a practice eats roughly $420 all-in per crown remake once you count the 50% lab refee, temporaries, round-trip shipping, staff time and 45 minutes of chair time at ~$375/hr overhead. The lab's side is worse than it looks, because it's paid out of margin, not revenue — the widely repeated industry rule of thumb on the lab forums is that **a lab must fabricate about 7 units to recover the loss on a single remake.** Meanwhile the technician shortage is bidding up the cost of every hour a tech spends rebuilding something they already built once.

**A funded aggregator turned "we catch bad scans" into a competitive weapon.** Dandy — $172M raised, 6,000+ practices, $100M+ revenue, giving away scanners — launched AI Scan Review, chairside AI that flags undercuts, margin obstructions and occlusal clearance before the case is ever submitted. That capability is now table stakes in the dentist's mind, and the independent lab has no answer to it.

The thing nobody has built: the same screening, but pointed the *other* way — sitting at the **independent lab's** intake door, working across every scanner brand its 40 client practices happen to own, and producing a defensible record of what arrived.

Because here is the actual wound. Industry write-ups on lab–clinic communication put up to 65% of remakes down to communication failure rather than technical error, and note the pattern that follows: when a verbal instruction leads to a remake, nobody can prove what was said, and the lab absorbs the cost to preserve the relationship. The lab pays for the dentist's bad prep. Every time. Not because the lab is at fault, but because it cannot *prove* it isn't and it cannot afford to lose the account arguing.

Provenance:
  - Signal 1 (demand): Remake rates average 4% (range 1–7%); ~$420 all-in cost per crown remake to a practice; "for every crown a laboratory has to remake, it has to fabricate 7 units to recover the loss"; up to 65% of remakes trace to communication failure, and where a verbal instruction is disputed the lab absorbs the cost to preserve the relationship — https://sprintray.com/lab-costs-killing-roi-what-crown-remakes-cost/ , https://dentallabnetwork.com/forums/threads/cost-of-remake.15363/ , https://trazalab.com/blog/dental-lab-clinic-communication-guide.html — observed 2026-07-11
  - Signal 2 (feasibility): Intraoral scanner penetration ~60% of US practices; Glidewell took 78% of 2025 crown orders as STL files; scanner-native AI (Dandy AI Scan Review, SmileShape SmartScan, Shining 3D) now demonstrates that undercut / margin / clearance defects are reliably detectable from a mesh — https://www.mordorintelligence.com/industry-reports/intraoral-scanners-market , https://www.meetdandy.com/newsroom/dandy-launches-ai-scan-review-the-first-chairside-ai-assistant-for-crown-preparation/ — observed 2026-07-11
  - Signal 3 (economic): US dental laboratories = $7.6B industry, ~4,375 businesses, declining 1.6% CAGR under consolidation; ~$6B still manufactured domestically "largely by family-owned dental laboratories employing less than 10 technicians"; Dandy has raised $172M and reached 6,000+ practices attacking exactly this base — https://www.ibisworld.com/united-states/industry/dental-laboratories/4087/ , https://www.crunchbase.com/organization/dandy-7e2a — observed 2026-07-11
  Category: Tech-unlock

## 3. The opportunity

The independent dental lab is in a fight it is currently losing, and it is losing it on evidence.

A case arrives at 7am. The technician opens it, sees a prep with no clear margin or a scan with a hole in the mesh, and faces three bad options: build it anyway and hope, call the dentist and be told "just make it work," or reject it and risk the account. Most labs build it anyway. Three weeks later the crown doesn't seat, the dentist declares it a lab failure, and the lab remakes it free — burning the margin on the next seven units to pay for a defect that walked in the front door.

The incumbents don't touch this. Lab management systems — 3Shape LMS from ~$79/mo, Evident and LabStar in the $150–300/mo band plus setup fees, SimpleLabOS at $29–149/mo — are **case-tracking** software. They tell you where a case *is*. Kanban boards, invoicing, shipping labels, due dates. Not one of them looks at the case and tells you whether it is *buildable*, and not one of them constructs the record you need when the argument starts. They manage the workflow around the defect while the defect goes through it untouched.

The scanner-side AI doesn't touch it either, and structurally can't. Dandy's Scan Review runs chairside, inside Dandy's own vertically-integrated pipeline, and exists to make Dandy's labs cheaper to operate. Shining 3D's margin suggestions run on Shining 3D hardware. Every one of these tools is owned by a party whose incentive is the *scanner* or the *captive lab*. The independent lab receives cases from forty practices running six different scanner brands, and no vendor in that list has any reason to serve it.

So the gap is precise: **an intake screen that belongs to the lab, is brand-agnostic by necessity, and whose output is not a warning but a receipt.** The AI's job isn't to be smart. It's to be a witness.

That reframing is what makes this a business instead of a feature. Nobody buys "AI checks your scans" — it's a nice-to-have that gets undercut by the scanner vendor next quarter. Labs will buy a thing that stops them eating $420 of someone else's mistake, because the alternative is fabricating seven crowns to break even on it.

## 4. Target market

- **Primary customer:** Owner-operator of an independent US commercial dental lab, 3–25 technicians, doing 200–1,500 units/month, serving 20–60 client practices. The buyer is the owner (often a technician-turned-owner), not a procurement committee. IBISWorld counts ~4,375 US lab businesses; the FDA-derived split says ~$6B of the $7.6B is made domestically, "largely by family-owned dental laboratories employing less than 10 technicians." That family-owned tier is the target — big enough to feel remakes as a P&L line, small enough that the owner signs up on a Tuesday.

- **Why they buy:** Not "to improve quality." To stop paying for other people's errors. A 500-unit/month lab at a 5% remake rate is eating ~25 remakes/month. Even at a conservative $120 internal cost per remake (materials + tech hours, no chair time — the lab doesn't pay for chair time), that's ~$3,000/month walking out the door, and by the seven-units-to-recover rule it's chewing through the margin on ~175 units. The owner does not need this explained to them. They have a number in their head already and it makes them angry.

- **Rough TAM reasoning:** ~4,375 US lab businesses. Strip the ones too small to pay (single-tech studios) and the captive/DSO-owned ones, and call the serviceable base 2,000–2,500 labs. At $300–600/mo that is a $7M–$18M ceiling in the US alone before you touch Canada, UK, Australia, or the offshore labs in Vietnam/China that serve US practices and have the *worst* fault-attribution problem of anyone. A $1M–$5M ARR business fits inside this comfortably. It is far too small to interest Dandy's investors, which is exactly why it's available.

- **Why now for them:** Two clocks. The consolidation clock — the industry is shrinking 1.6% a year and Dandy is handing out free scanners to take their accounts, so anything that lets an independent look more rigorous than the venture-backed competitor is a retention tool, not just a cost tool. And the digital clock — until scans became the majority of inbound, there was nothing to screen. Now there is.

## 5. Product sketch (MVP)

- **Intake screen.** Every incoming case file (STL/PLY/OBJ, plus the Rx form) gets automatically checked the moment it lands — before it hits a technician's bench. Flags the defects the industry already knows cause remakes: indistinct or missing margin line, undercuts, insufficient occlusal/interproximal clearance, holes or voids in the mesh, missing antagonist or bite scan, prep taper out of range.

- **Traffic-light verdict per case.** Green = build it. Amber = buildable with a documented compromise. Red = will not seat, do not start. The amber case is the important one: it's the one the lab currently builds silently and then eats.

- **One-click "case query" back to the practice.** Auto-drafts the note to the dentist with the annotated screenshot of the defect attached — the thing techs currently spend 45 minutes a day chasing by phone. Sends it, timestamps it, and logs the reply (or the non-reply).

- **The receipt.** Every case accumulates an immutable record: what arrived, when, what was flagged, what the lab told the practice, what the practice said back, and what the lab was instructed to do anyway. This is the artifact. When the crown comes back in six weeks with "your lab screwed this up," the owner pulls up one page.

- **Proceed-at-instruction sign-off.** When the dentist says "just make it work" on a red case, the lab captures that as an explicit acknowledgement. Now the remake is billable and the lab has the standing to bill it.

- **Remake ledger.** Every remake logged and attributed — lab fault, practice fault, or unattributed — with the evidence attached. Monthly rollup: "you did 31 free remakes this quarter; 22 of them arrived with a defect you flagged; that's $9,240 you gave away."

- **Practice scorecard (the wedge that grows).** Per-client-practice defect rates. "Dr. Chen's preps arrive with an unreadable margin 31% of the time — the lab average is 6%." The lab has never had this number. It changes what they charge, who they fire, and what they can say in a meeting.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. That's the test and it passes cleanly.

The core job is geometric inspection of a 3D mesh a technician hasn't opened yet: is there a continuous, findable margin line; are there undercuts relative to the path of insertion; is there enough vertical clearance against the antagonist; is the mesh watertight. This is real 3D/ML work on scan data, and the fact that Dandy, SmileShape and Shining 3D all independently shipped versions of it is the proof it's now tractable rather than research-grade. A rules-only version — "check the file has an antagonist attached" — catches maybe a fifth of what matters and would be laughed out of a lab.

The second AI job is the Rx form: a large share of prescriptions arrive with critical fields missing, ambiguous, or contradicting the scan (shade blank; "full contour zirconia" written against a prep with 0.3mm of clearance). Reading a semi-structured form against the geometry and catching the contradiction is squarely a model job.

The honest caveat, stated up front: **the model quality is the product, and it is the hardest part of this build.** Getting from "flags obvious garbage" to "trusted enough that a lab will put its money behind the verdict" is where this idea lives or dies, and it's the reason the build score below is a 10 and not a 14.

## 7. Localization angle (if any)

`N/A — this is a US-first play, deliberately.` The dollar value of the pain is set by US labour costs and US remake economics ($420/remake, $375/hr chair overhead); the same product in India or Brazil has a fraction of the willingness-to-pay because a remake there costs a fraction as much in absorbed labour.

One genuinely interesting adjacency worth noting rather than building first: **the offshore labs** (Vietnam, China, Philippines) that manufacture the ~38% / $1.32B of US restorations done abroad have the most extreme version of this problem — they're the furthest from the dentist, the least able to pick up the phone, and the first to be blamed. They are a second beachhead, not the first, because selling into them is a different motion.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered on lab volume, which is how labs already think.
  - Small lab (<300 units/mo): **$299/mo**
  - Mid lab (300–800 units/mo): **$549/mo**
  - Large independent (800+ units/mo): **$899/mo**

  This is deliberately priced *above* the LMS incumbents ($79–300/mo). That's not a mistake — the LMS is an admin tool and gets shopped on price; this is loss-prevention and gets shopped against the size of the loss. A 500-unit lab bleeding ~$3,000/mo in absorbed remakes will pay $549 to recover a third of it. If they won't, the idea is wrong and the kill criteria below will find that out in week 3.

- **ACV:** ~$5,400 (blended ~$450/mo).

- **Math to $1M ARR:** ~185 labs at a $450/mo blend. Out of a serviceable base of 2,000–2,500. That's under 10% penetration — a bar I believe you can clear, and the single most important reason this idea is a GO rather than a VALIDATE.

- **Math to $5M ARR:** ~925 labs at $450 gets you there but implies ~40% of the serviceable US base, which I don't believe as a base case. The honest $5M path is three legs: (a) ~450 US labs at a higher blended ACV as the practice-scorecard data justifies $700–900 tiers, (b) the offshore/export labs serving US practices, (c) UK/AU/CA, where the lab structure is similar and Dandy isn't. Call $5M a stretch that requires geographic expansion, not a straight-line extrapolation. $1M–$2M in the US alone is the realistic, attractive core.

- **Expansion path:** Volume tiers rise as the lab grows. Then the real expansion: once the lab has per-practice defect data, the lab's *clients* want to see it — a light "your prep quality vs. peers" report the lab hands (or resells) to its dentists. That's a second SKU sold through the lab into the practice, and it's how ACV doubles without a new sales motion.

## 9. Go-to-market wedge — first 100 customers

This industry is unusually reachable — it's small, it's associated, and it's loud in exactly two places.

- **The remake-ledger audit as the cold open.** The pitch is not a demo, it's a number. Offer any lab a free retrospective: send us your last 90 days of case files and remake list, and we'll tell you how many of the remakes you ate arrived with a detectable defect. Do this manually for the first 30 labs if you have to — it's a services-flavoured wedge that produces the one thing that closes: "you gave away $9,240 last quarter." A lab owner who sees that number does not need a trial.

- **Dental Lab Network + the LMT / NADL channel.** dentallabnetwork.com is where lab owners already argue about exactly this — the "COST OF REMAKE" and "Remakes and repairs industry standards" threads are literally lab owners debating who eats it. NADL represents 1,600+ labs, LMT Magazine is the trade press, and both run regional meetings. This is a ~4,000-business industry with two watering holes. Post the audit findings (anonymized, aggregate: "we looked at 40,000 cases; here's the real fault split"), which is content the trade press will run because it's the argument the industry has been having without data.

- **LMT Lab Day Chicago.** The industry's single biggest gathering, and it is thick with exactly the owner-operator persona. One booth, one pitch: "bring a USB stick of your worst 10 remakes, we'll tell you whose fault they were." That's a demo that draws a queue, and it's a same-day close for a $549/mo product.

- **Scanner-brand-agnostic partnerships with the labs' own software.** The LMS vendors (SimpleLabOS, LabStar/3Shape) are complements, not competitors — they track cases, we screen them. An integration + referral arrangement puts the product in front of an installed base without paying for it.

- **The Dandy wedge, used directly.** Every lab that has lost an account to Dandy knows exactly what it lost it to. "Dandy tells its dentists their prep is bad before they send it. Now you can too, on whatever scanner they own." That's a message that lands because the wound is fresh.

**Realistic math:** ~4,000 addressable businesses, two trade channels that reach most of them, a free audit that produces a dollar figure, and a $549/mo price against a $3,000/mo bleed. 100 customers is a hard 6–9 months of founder-led selling — not a 2-week sprint — which is why distribution scores 12 and not 15.

## 10. Build complexity — justification

**Medium**, and I want to be honest that it sits at the upper end of Medium rather than the comfortable middle.

Off-the-shelf: the entire application layer. File intake, case records, the audit trail, the notification flow to practices, billing, the reporting. Standard web stack, no novelty, maybe 6 weeks.

The custom work is the mesh inspection, and that's the whole risk. Margin-line detection, undercut analysis relative to insertion path, and occlusal clearance measurement on meshes from six different scanner vendors with different export conventions is real 3D geometry plus ML, and it needs a corpus of scans with known outcomes to be trusted. Existence proof is strong — three separate vendors shipped it — but *they* had captive scan pipelines and I'd be cold-starting the data. Realistic path: geometry-first (a lot of margin/undercut/clearance checking is computable, not learned), ML on top for the fuzzy calls, and buy the initial corpus by doing the free retrospective audits from section 9 — the audit *is* the data acquisition strategy, which is the neatest thing about this idea.

**Call it 4–5 months to a v1 a lab will trust, for two people, one of whom must be comfortable with 3D geometry.** Not a 6-week weekend build. The technical-heavy + domain-expertise founder tags are load-bearing, not decorative — a founder without access to a working technician to label cases will build something labs laugh at.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Business-to-business workflow and record-keeping software. Not a medical device — it makes no diagnostic or treatment claim about a patient; it assesses whether a manufacturing input is fit to manufacture from. Worth a lawyer's read on FDA software positioning before marketing copy hardens, and worth never phrasing the output as clinical advice to the dentist. |
| Ethical — no harm / dark patterns | ✅ | It arms the smaller party in a lopsided commercial relationship with evidence. The one thing to keep clean: the tool must not become a way to bully dentists over marginal calls — the amber/red distinction matters, and the record has to be fair or labs will lose accounts using it. |
| Market exists (evidence above) | ✅ | $7.6B industry, ~4,375 businesses, quantified remake losses, three funded companies building adjacent capability. |
| 1–5 person team can build this | ✅ | Two people, 4–5 months, one with 3D/ML competence. |
| Launchable with <$50K / ₹40L | ✅ | Compute for mesh processing, a trade-show booth, and time. Well under. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | Hair-on-fire and it's *financial*, not aesthetic. A lab fabricates ~7 units to recover one remake, absorbs the cost of defects it didn't cause, and cannot argue back without evidence. Felt weekly, quantified in dollars, and the owner already knows the number. Not a 19 only because labs have lived with it for decades — it's chronic pain, and chronic pain is easier to keep tolerating than acute pain. |
| Demand evidence | 15 | **11**/15 | Strong but indirect. Hard: quantified remake rates and costs from multiple independent sources, an entire trade-forum genre arguing about who pays, three funded vendors shipping adjacent tech, a $172M-funded aggregator weaponizing it. Missing: I could not fetch the lab forums directly (403), so I do not have verbatim lab-owner quotes about *this specific product*, and nobody is currently paying for a lab-side fault referee. The willingness-to-pay is inferred from the size of the loss, not observed. That gap is exactly what the validation sprint attacks. |
| Build feasibility | 15 | **10**/15 | Application layer is trivial; the mesh-inspection engine is genuinely hard and is the product. 4–5 months, two people, needs 3D/ML skill and labelled scans. Existence proof from three vendors de-risks *whether* it's possible, not whether this team can do it well enough to be trusted. |
| Distribution clarity | 15 | **12**/15 | Unusually good for a niche B2B: ~4,000 businesses, two watering holes (Dental Lab Network, NADL/LMT), one dominant trade show, and a cold-open — the free remake audit — that terminates in a dollar figure. Docked because it's founder-led sales into a conservative, relationship-driven industry; this is a 6–9 month grind to 100, not a launch-week spike. |
| Revenue mechanics | 15 | **12**/15 | $299–899/mo against a $3,000/mo bleed is a defensible ratio, and $1M ARR needs only ~185 labs (<10% of the serviceable base). Docked because the price is *above* the LMS incumbents labs are anchored to, so the value story has to do real work, and because $5M requires geographic expansion rather than falling out of the US base. |
| Time to first revenue | 10 | **7**/10 | The free audit can be run manually and sold before the engine is finished — a lab can be paying in week 6–8 of selling. But the honest v1 is 4–5 months of build, so first *real* revenue is a quarter-plus out. Pre-selling off audits is the move that pulls this up. |
| Defensibility | 10 | **5**/10 | Month 3: nothing but execution — the geometry is knowable and Dandy has already built its version. Month 12: the moat is the corpus and the ledger — accumulated per-practice defect baselines across thousands of cases, and the switching cost of a lab's entire fault-dispute history living in the tool. Real but soft. The genuine structural protection is that the market is too small for Dandy's investors to chase and the scanner vendors have no reason to serve a brand-agnostic intake. That's a positioning moat, not a technology one, and positioning moats leak. |
| **Total** | **100** | **74**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This is not a founder-agnostic idea. The mesh work needs real 3D/ML competence, and the product needs a dental technician in the room from day one — someone who can say "that margin is fine, stop flagging it." A generalist SaaS founder without a technician co-founder or advisor will ship something that cries wolf, and a tool that cries wolf in a lab gets turned off in a week.

### Key assumptions to validate (3–5)

1. **Assumption:** Labs will pay $300–900/mo — above their LMS spend — for loss prevention rather than workflow. **How to test:** Run the free remake audit for 15 labs. Present the dollar figure. Ask for a signed LOI at $549/mo before any product exists. If fewer than 4 sign, the pricing thesis is wrong.

2. **Assumption:** A meaningful share of the remakes labs currently absorb *are* detectable from the incoming scan. This is the load-bearing assumption of the entire business — if most remakes trace to lab-side execution rather than intake defects, there is no product. **How to test:** Get 200–300 historical cases with known remake outcomes from 3 friendly labs. Manually (with a technician) classify how many of the eaten remakes had a visible intake defect. Need >40% to have a business.

3. **Assumption:** Labs will actually *use* the evidence — i.e. they'll bill the dentist or push back — rather than filing it and eating the cost anyway to protect the account. **How to test:** This is behavioural and the sneakiest risk. Interview 20 lab owners: "if you could prove the prep was bad, would you charge for the remake?" Listen for hesitation. A lab too scared of losing an account will not use the receipt, and then the product is a very expensive feelings-validator.

4. **Assumption:** Cross-scanner-brand ingestion is tractable enough that a lab's whole inbound flow works, not 60% of it. **How to test:** Collect export files from the six most common scanners in the field and run them through a prototype ingest. Any brand that fails is a hole in the value prop.

### Risk flags

1. **Incumbent expansion risk (the big one):** Dandy has AI Scan Review, $172M, and a reason to keep independents weak. 3Shape owns both a major scanner line *and* the leading LMS — it is the single most natural acquirer of this idea and could ship a version into its installed base. The defence is that neither has an incentive to build *brand-agnostic lab-side* screening, but "they'd have to change strategy to kill me" is thinner protection than "they can't."

2. **Behavioural risk:** The tool produces evidence; the lab still has to be willing to use it against a customer it depends on. The dentist–lab power imbalance is the root cause of the problem, and software does not fix power imbalances by itself. If labs buy it and then never bill a remake, churn will be brutal at renewal.

3. **Model-trust risk:** A false positive costs a technician time and credibility; enough of them and the lab ignores the traffic light. Trust is the product and it's earned slowly and lost instantly. This is why the build is 4–5 months and not 6 weeks.

4. **Market timing / consolidation risk:** The customer base is shrinking 1.6% CAGR. You are selling to an industry being consolidated, which means your TAM erodes under you and your best customers get acquired. Tolerable at a $1M–$2M ARR target; fatal if you need $20M.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder strong in 3D geometry/ML, paired with a dental
                        technician or lab-owner co-founder. Domain access is non-negotiable.
Time to revenue:        6–8 weeks to first paid pilot (sold off manual audits);
                        4–5 months to a trustworthy v1.
Capital to launch:      $20–35K (compute, trade-show booth, 4–5 months of two people's time)
Top 3 assumptions to validate first:
  1. >40% of the remakes labs currently absorb are detectable from the incoming scan —
     classify 200–300 historical cases with known outcomes across 3 friendly labs.
  2. Labs will pay $549/mo for loss prevention — 15 free audits, ask for LOIs, need 4+.
  3. Labs will actually use the evidence to bill or push back — 20 owner interviews,
     listen for the flinch.
Kill criteria:
  - Abandon if <40% of absorbed remakes show a detectable intake defect in the
    historical-case audit. This is the whole thesis; if it fails, nothing else matters.
  - Abandon if fewer than 4 of 15 audited labs sign an LOI at $549/mo after being shown
    their own dollar figure. If the number doesn't sell it, nothing will.
  - Abandon if lab owners consistently say they'd file the evidence but not bill the dentist.
    A receipt nobody is willing to present is not worth $549/mo.
  - Abandon if 3Shape or Dandy ships brand-agnostic lab-side intake screening before v1.
```

## 15. Next step — 1-week validation sprint

The sprint attacks assumption #2 above — *are the remakes we'd catch actually the remakes they're eating* — because every other question is downstream of it. If that's false, the pricing question and the behavioural question don't matter.

- **Day 1–2: Get the cases.** Call 30 lab owners off the NADL directory and Dental Lab Network. The ask is not a sales call and must not sound like one: "I'm researching remake fault attribution. Send me 50 historical cases where you ate the remake, and I'll send you back an analysis of what arrived in each one." Free work, no product mentioned. Target 3 labs who say yes — this industry answers the phone, and nobody has ever offered them this.

- **Day 3–4: Grade them with a technician.** Sit with a working dental technician (pay them; $100/hr is cheap for this) and go case by case through 200+ eaten remakes. One question each: **was there a visible, detectable defect in the incoming scan or Rx?** Tally it. This is manual, unglamorous, and it is the entire experiment.

- **Day 5: Compute the number and show it back.** Take the fault split to the three labs with their own dollar figure attached — "of the 50 remakes you ate, N arrived broken; at your unit economics that's $X you gave away." Then ask the only question that matters: *"if a tool caught these at intake and gave you the record, would you pay $549 a month for it?"*

**Falsifiable outcome:** Go if **>40% of absorbed remakes had a detectable intake defect** AND **≥2 of the 3 labs say yes to $549/mo without being talked into it.** Anything less and the pain is real but the product isn't — the remakes are coming from the lab's own bench, and I'd rather learn that in a week for $800 of a technician's time than in five months of building a mesh engine nobody needs.
