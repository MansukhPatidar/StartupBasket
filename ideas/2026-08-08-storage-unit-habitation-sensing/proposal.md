---
title: "DwellSign — habitation sentinel for unmanned self-storage"
slug: storage-unit-habitation-sensing
date: 2026-08-08
category: PropTech / US-SMB — Independent Self-Storage Operators (100–800 Units) Running Unmanned or Lightly Staffed Sites Whose Insurance Voids the Moment a Tenant Starts Living in a Unit
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: Radar sensors that tell storage operators someone is sleeping in a unit, before the insurer finds out first.
tags:
  vertical: PropTech
  model: IoT+SaaS
  geography: US
  secondary: [Mechatronics, Embedded, SMB, Compliance-driven, AI-agent]
axes:
  problem: 16
  demand: 11
  build: 10
  distribution: 13
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [technical-heavy, operations-heavy]
featured: false
---

# DwellSign

## 1. One-liner

Radar sensors that tell storage operators someone is sleeping in a unit, before the insurer finds out first.

## 2. Trend signal — why now?

Three things moved at once, and they moved toward each other.

**The humans who used to catch this are gone.** Unmanned and lightly staffed self-storage went from roughly 5% of facilities to an estimated 15–20% of new institutional properties. 10 Federal Storage runs 120 properties entirely through automation as of February 2026. Copper Storage Management oversees 150 locations on a hybrid remote model with only scheduled maintenance visits. The industry press called the move toward unmanned and lightly staffed facilities one of the biggest themes at the 2026 Inside Self Storage Show.

Here's the problem nobody costed into that transition. Read how operators actually detect live-in tenants today, per Inside Self-Storage: managers notice "tenants who hang around the facility all the time," they monitor "restroom paper product usage and trash accumulation," they watch for "excessive food waste in trash." And the tell that matters most — managers rely on their "'spidey' or 'sixth' sense, or simply that something doesn't 'feel right.'"

That is the entire detection stack. Intuition, and counting toilet paper. Now fire the manager and run the site from a call center in another state. The detection stack goes to zero.

**The consequence is not a slap on the wrist.** Per industry legal guidance, "most facility insurance policies become void if residential use is detected," and "if a fire, injury, or death occurs, the operator can face lawsuits and criminal charges for negligence." There is a documented fire case where the fire marshal stated he believed the tenant had been living in the unit. Operators also risk fines from code enforcement and suspension of business licenses.

There's a second, sharper legal edge. Self-storage operators enjoy a legal "self-help" remedy — the lien sale — which specifically exists *outside* residential landlord-tenant law. A tenant who establishes habitation is the one thing that threatens to drag the operator into a court eviction instead. Detection speed is what protects the cheap remedy.

**The sensing got cheap and stopped being creepy.** 24GHz mmWave radar modules (HLK-LD2410 family) run roughly $15–20 retail, less in volume. They detect a person sitting perfectly still by picking up micro-movements from breathing — not motion events, *presence*. They see through non-metallic barriers. They produce no image. That last property is the whole business: you cannot put a camera inside a rented storage unit, but you can put a radar chip that reports a single number — is a human body present, and for how long.

**Provenance:**
  - Signal 1 (demand): Operators detect live-in tenants via manager intuition, trash inspection, and restroom supply usage — no technology in the stack — while insurance voids on residential use and operators face negligence exposure — https://www.insideselfstorage.com/tenant-insurance-protection/self-storage-squatters-uncovering-and-booting-live-in-tenants-before-they-get-comfortable + https://www.recnationstorage.com/blog/living-in-a-self-storage-unit/ — accessed 2026-08-08
  - Signal 2 (feasibility): HLK-LD2410 24GHz mmWave modules at ~$15–20 detect static human presence via breathing micro-movements, through non-metallic barriers, with no imaging — https://www.atomic14.com/esp32/sensors/hlk-radar-decoder/ + https://bishalkshah.com.np/blog/esp32-mmwave-presence-sensor-home-assistant — accessed 2026-08-08
  - Signal 3 (economic): Unmanned facilities scaling from ~5% to 15–20% of new institutional properties; 10 Federal at 120 fully automated properties (Feb 2026); market already pays $3.50–15/door/month for access control — https://www.insideselfstorage.com/automation/the-impact-of-automation-and-remote-management-on-self-storage-facility-value + https://www.coram.ai/post/access-control-system-cost — accessed 2026-08-08
  Category: Tech-unlock

## 3. The opportunity

The self-storage sensor market exists. OpenTech's INSOMNIAC SmartMotion, Vantiva's Peek camera, and StorageDefender all ship unit-level sensors in 2026. Every single one is pointed the wrong way.

They all sell **motion events for break-in detection**, and the alert is framed as *tenant protection* — StorageDefender sends "real-time activity text alerts to tenants, so they can confirm whether it's expected access." Vantiva Peek lets "renters access live and stored camera images." These are products sold to the operator so the operator can offer a premium amenity to the renter. The tenant is the beneficiary.

Habitation is the inverse problem in three specific ways, and that inversion is the entire wedge:

1. **The signal is duration, not events.** A break-in is a spike. Living in a unit is a flat line — eight hours of continuous presence overnight. A motion sensor tuned to alert on movement generates a single event when someone walks in and then goes quiet, which reads as *less* suspicious than a tenant actively loading boxes. Habitation is literally the quietest thing that happens in a storage unit.
2. **The alert goes to the operator, and the tenant must not know.** Every incumbent's notification path runs to the renter. You cannot tell someone you suspect of living in a unit that you're watching for it — they change their pattern, and you've also created a harassment claim.
3. **Motion sensors can't see stillness.** This is the physics. A PIR or motion-triggered device reports nothing when a person is asleep. mmWave radar reports presence *because* it reads breathing. The incumbents chose a sensor modality that is structurally blind to the exact problem.

Nobody is selling detection-of-occupancy to the operator as the buyer with the operator's liability as the pitch. The hardware to do it costs $15. That's the gap.

## 4. Target market

- **Primary customer:** Owner-operators and regional operators of self-storage facilities with 100–800 units, running unmanned or single-part-time-staff sites, in the US. Job titles: Owner, District Manager, Director of Operations. These are the people who personally sign the insurance renewal.
- **Why they buy:** Not to be virtuous. They buy because their carrier's policy contains a habitation exclusion and they are running a site with nobody in it. The pitch that closes is "your policy voids on residential use and you have no way to know." The secondary pitch is the legal one: catch it in week one and it's a lease violation you resolve with a phone call; catch it in month four and you may have a person establishing something that looks like tenancy in a facility built on the assumption that lien law, not eviction law, applies.
- **Rough TAM reasoning:** Roughly 52,000+ US self-storage facilities, with over 30,000 owned by small independent "mom and pop" operators and 70%+ independently owned. The near-term serviceable slice is the unmanned/lightly-staffed cohort — call it 15–20% of facilities and rising, so ~8,000–10,000 sites today. Not every unit needs a sensor; the deployable target is the ground-floor, drive-up, and climate-controlled interior units most commonly used for habitation — typically 15–30% of a facility's doors.
- **Why now for them:** They removed the on-site manager in the last 24 months to cut opex, and the detection capability left with them. They haven't yet connected those two facts. The first fire or the first carrier questionnaire connects it for them.

## 5. Product sketch (MVP)

- Battery-powered radar sensor that mounts inside a unit in under a minute — adhesive, no wiring, no drilling, no imaging of any kind
- Occupancy-duration engine that distinguishes normal access (tenant loading for 40 minutes) from habitation patterns (overnight presence, repeated 6+ hour dwells, presence during closed hours)
- Operator alert with a confidence level and the evidence trail: dates, dwell durations, overlap with gate-access logs
- **Silent by default** — no tenant-facing notification, no indicator light, nothing that tips off the occupant or creates a confrontation before the operator chooses one
- Pattern dossier that exports as a clean PDF: dwell history, access-log correlation, timestamps — the document you hand your attorney or your insurer
- Gate-access log integration to flag the classic mismatch — a person present in a unit with no corresponding gate entry, or an entry with no matching exit
- Fleet view across sites, ranked by which units need a physical walk-through this week
- Sensor health and battery reporting, so a dead sensor doesn't read as an empty unit

## 6. AI angle — what's load-bearing

Strip the AI out and you have a radar chip that says "human present, yes/no." That's a $15 part, not a product. Two things make it a product, and both are inference problems.

**Discriminating habitation from legitimate use.** A tenant reorganizing a unit for three hours on a Saturday and a person sleeping there are both "presence." The difference lives in the shape of the signal across days: time-of-day distribution, dwell-length clustering, regularity, gaps, correlation with gate events, and — critically — the respiration-derived stillness signature of a sleeping body versus an active one. This is a time-series classification problem over noisy, cheap sensors, and it has to run at a false-positive rate low enough that operators don't stop reading the alerts. Getting this wrong in the accusatory direction is worse than not shipping.

**Turning a signal into a defensible narrative.** The alert's job is not to say "unit 214 is bad." It's to produce a document an operator can act on — plain-language summary of the pattern, the specific dates and durations, what it does and doesn't establish. That's a generation task, and it's what converts a sensor reading into something the operator will actually put in front of a lawyer or an insurance adjuster.

The moat compounds here too. Every confirmed and every dismissed alert labels the model. After a year of operator feedback across thousands of units, the discrimination quality is the product, and it's not something a competitor buys off a shelf.

## 7. Localization angle (if any)

N/A — this is a US-first play, and the reason is regulatory, not linguistic. The wedge depends on a specific legal structure: the Self-Service Storage Facility Acts that grant operators lien-sale self-help remedies explicitly outside residential landlord-tenant law, combined with US commercial property insurance habitation exclusions. That combination is what makes early detection worth paying for. The UK, Australia, and Canada have analogous self-storage sectors and are credible market-two expansions on the same product with different legal copy. Emerging markets have the habitation problem in volume but not the insurance-and-liability structure that funds the purchase.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $2.50/monitored unit/month, sensor hardware at $39 one-time per unit (roughly 2× landed cost, deliberately near-cost to kill the adoption barrier). Minimum 25 units per site. Typical 400-unit facility monitors ~100 high-risk units = $250/mo + $3,900 upfront.
- **Benchmark sanity check:** operators already pay $3.50–15/door/month for cloud access control and $100–250/facility/month for management software. At $2.50/unit on a *subset* of doors, this lands under the line they already clear for access control, which is the number their brain anchors to.
- **ACV:** ~$3,000/year per facility, plus first-year hardware.
- **Math to $1M ARR:** 335 facilities × $250/mo × 12 = $1.0M recurring, plus roughly $1.3M of one-time hardware across those sites. 335 facilities is ~4% of the unmanned/lightly-staffed cohort. That's a reachable number, not a fantasy one.
- **Math to $5M ARR:** ~1,700 facilities, which requires two things to be true: penetration beyond the unmanned cohort into staffed facilities (where the pitch shifts from "you have no detection" to "your manager shouldn't have to guess"), and expansion of monitored units per site from ~100 to ~180 as operators see value and widen coverage. Realistically also needs one regional/REIT logo to make the category legible.
- **Expansion path:** more units per facility, then adjacent sensing on the same installed radar (unit vacancy verification — confirming a "rented" unit is genuinely being used, and confirming an "empty" unit is genuinely empty, which is an auditing problem operators have and currently solve by walking the property). The second sensor sale is free; it's a firmware change.

## 9. Go-to-market wedge — first 100 customers

- **Insurance channel first, because they have the strongest incentive.** A handful of specialty carriers and brokers write the majority of self-storage policies (MiniCo, Ponderosa, and similar are the names in this niche). They carry the habitation exclusion and they eat the fires. Approach 15 of them with a single proposition: co-market DwellSign to your book, or offer a premium credit for monitored facilities. Even one broker agreeing to mention it in renewal conversations puts the product in front of thousands of operators at the exact moment they're thinking about risk. This is the highest-leverage door and it should be knocked on in week one.
- **Third-party management companies, not individual owners.** Copper Storage Management runs ~150 locations; 10 Federal runs ~120. There are perhaps 40 firms in the US managing 20+ unmanned facilities each. One signed management company is 100+ facilities from a single sales conversation. Build the target list by hand from Inside Self-Storage's top-operator lists — it's a few hundred rows, not a scrape.
- **The industry has exactly two trade shows and everyone goes.** Inside Self Storage World Expo and the SSA (Self Storage Association) conferences. Take a table with a live demo: a mock unit door with a sensor behind it and a screen showing the dwell signal as someone stands still behind the door. It demos in eight seconds and it demos *silently*, which is the point. This industry buys hardware at trade shows — that's how PTI, Noke, and OpenTech all got distributed.
- **Facility-level cold outreach with a specific hook.** Pull unmanned facilities from operator directories and Google Street View (unmanned sites are visually identifiable — no office signage, kiosk-only entry). Email the owner one question: "When did you last verify nobody is living in units 100–140?" No demo video, no deck. The question is the pitch.
- **Where the operators actually complain.** The r/selfstorage subreddit, the Self Storage Investing communities, and the Inside Self-Storage comment sections carry recurring live-in-tenant threads. Answer them usefully — including when the answer is "you don't need our product for this." That earns the reputation that makes the trade show conversation short.

## 10. Build complexity — justification

Medium. The sensing is off-the-shelf: HLK-LD2410-class radar modules, an ESP32-class MCU, LTE-M or LoRaWAN backhaul to avoid depending on facility WiFi that often doesn't reach interior corridors. No custom silicon, no novel radar work — Hi-Link's modules already expose presence and distance over UART.

The real work is in three places. **Power** — a battery-powered always-on radar needs careful duty-cycling to hit a 2+ year service life, and a sensor you have to service annually across 100 units destroys the unit economics. **Enclosure and mounting** — it has to survive a corrugated steel unit that swings between 0°F and 130°F and install in under a minute by someone who is not a technician. **The discrimination model** — which needs real-world labeled data, meaning the first 10 facilities are as much a data collection exercise as a revenue one.

Call it 4–5 months to a field-credible v1 for a two-person team (one embedded/hardware, one backend/ML), plus contract manufacturing lead time. The first pilots can and should run on hand-assembled units.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Operator-owned sensing of operator-owned property, disclosed in the lease. No imaging, no audio. Lease addendum language is a solved problem in this industry. Must be sold as habitation-safety monitoring, never as general surveillance. |
| Ethical — no harm / dark patterns | ✅ | Uncomfortable but defensible. People living in storage units are in genuine physical danger — no ventilation, no egress, no fire suppression, no water. Detection routes them out of a hazard and toward the operator's local-resource referral, and it protects the operator's ability to use lien law rather than eviction. The "silent by default" design is a real ethical tension and the answer is that the alert must trigger a welfare-aware human response, not a lockout. This must be a product requirement, not a marketing line. |
| Market exists (evidence above) | ✅ | 52,000+ US facilities, existing unit-sensor market (OpenTech, Vantiva, StorageDefender) proving operators buy in-unit hardware, documented insurance and liability exposure. |
| 1–5 person team can build this | ✅ | Two people: embedded + backend/ML. Off-the-shelf radar modules and MCUs. |
| Launchable with <$50K / ₹40L | ✅ | ~$8K for prototypes and certification prep, ~$15K first production run of 500 units, ~$10K trade show and travel. Under $40K to first revenue. FCC Part 15 certification for a 24GHz module is a known, budgeted path (~$5–10K) using a pre-certified module to minimize scope. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real and expensive when it hits — voided policy, negligence exposure, potential license risk, and the threat of losing lien-sale self-help. Docked 4 because it's a tail risk, not a daily bleed. Most operators go years without a fire, and "I've never had a problem" is the objection that will kill a lot of deals. This is insurance-shaped pain, and insurance-shaped pain is always harder to sell than a bleeding wound. |
| Demand evidence | 15 | 11/15 | Strong indirect evidence: an existing in-unit sensor market proves operators buy this hardware class, documented insurance voidance, published operator guidance on detection. Docked 4 because I found no direct evidence of operators *searching for* or *paying for* habitation detection specifically. The demand is inferred from the liability, not observed in a purchase. That's the single biggest thing to validate. |
| Build feasibility | 15 | 10/15 | Off-the-shelf radar and MCU, but it's hardware — enclosure, power budget, FCC cert, contract manufacturing, plus an ML model that needs field data. 4–5 months, not 6 weeks. |
| Distribution clarity | 15 | 13/15 | Unusually good. The buyers concentrate: ~40 management companies control thousands of unmanned facilities, two trade shows reach everyone, and the insurance channel has aligned incentives. Named lists, small numbers, short paths. |
| Revenue mechanics | 15 | 12/15 | Pricing sits below an anchor operators already pay ($3.50–15/door for access control). ACV ~$3K is enough to justify a real sales conversation. Docked 3 for hardware margin drag and the working-capital cycle of an inventory business. |
| Time to first revenue | 10 | 8/10 | Pilots can run on hand-built units within 8–10 weeks; paid pilots are realistic in the same window since operators buy hardware from trade show floors. Full production revenue is 4–6 months out. |
| Defensibility | 10 | 6/10 | Month 3: pure execution, and OpenTech could add a dwell-duration alert to SmartMotion — though they'd have to change sensor modality to do it properly, since motion sensors can't see a sleeping person. Month 12: the labeled discrimination dataset, insurance channel relationships, and management-company contracts are genuinely hard to replicate quickly. Soft moat, not a hard one. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `operations-heavy`

Needs someone who can take a radar module to a certified, manufacturable product — this is not a pure software team. Also needs the patience for hardware logistics: inventory, RMAs, field failures. The ML work is time-series classification, not frontier research.

### Key assumptions to validate (3–5)

1. **Assumption:** Operators perceive habitation as a live financial risk rather than a rare nuisance, and will pay to detect it. **How to test:** 30 structured calls with unmanned-facility operators. Ask two questions before pitching anything — "how would you know today if someone were living in a unit?" and "what does your policy say about residential use?" If they can't answer the second question, the liability pitch doesn't land and the whole thesis needs reframing.
2. **Assumption:** mmWave radar reliably distinguishes a sleeping person from an empty unit through a closed corrugated steel roll-up door, or from a mounting position inside the unit that survives tenant interference. **How to test:** Build 5 sensors, deploy in a friendly operator's facility across unit types, and run 30 days of ground-truth testing including staged overnight occupancy. This is a physics question with a binary answer and it should be tested in week one — steel is exactly the material that blocks mmWave, so mounting position is make-or-break.
3. **Assumption:** Insurance carriers/brokers will co-market or offer premium credit. **How to test:** Direct conversations with 10 self-storage specialty brokers. Ask whether a monitored-facility credit is something they'd underwrite. A yes from even one changes the CAC math entirely.
4. **Assumption:** Operators will accept the silent-alert design without legal cold feet. **How to test:** Have a self-storage attorney review the lease addendum and alert workflow; run it past 10 operators. If their counsel balks, the product needs a disclosed-monitoring variant.

### Risk flags

1. **Demand is inferred, not observed.** This is the honest weak point in the score. The liability is documented; the *willingness to pay to prevent it* is not. Tail-risk products are hard to sell to owner-operators who've never been burned. Validate before building hardware.
2. **Incumbent response.** OpenTech, StorageDefender, and Vantiva have installed bases, trade-show presence, and existing integrations. If one adds a dwell-duration feature it compresses the window — though switching sensor modality from motion to radar is a real hardware change, not a software update, which buys more time than usual.
3. **Physics risk on steel.** mmWave penetrates non-metallic barriers; storage units are corrugated steel. Detection almost certainly has to happen from a sensor *inside* the unit, which means tenant access to the device — tampering, covering, removal. Sensor health monitoring partially covers this but a determined occupant can defeat an in-unit sensor. Test early.
4. **Ethical and reputational exposure.** "Startup builds surveillance to evict homeless people from storage units" is a headline that exists whether or not it's fair. The defense has to be structural, not rhetorical: no imaging, no audio, operator-owned property, and an alert workflow that routes to welfare-aware response and local resources. Build that in from v1 or the story writes itself.
5. **Hardware working capital.** Inventory ties up cash ahead of revenue. At 500-unit production runs this is manageable, but growth is gated by cash in a way pure SaaS isn't.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Embedded/hardware founder with an ML-capable partner; comfortable
                        with contract manufacturing, FCC certification, and a physical
                        install base. Prior IoT product experience matters more than
                        self-storage domain knowledge, which is learnable in a month.
Time to revenue:        8–12 weeks to paid pilot; 4–6 months to production revenue
Capital to launch:      $35–40K
Top 3 assumptions to validate first:
  1. Radar reliably detects a still/sleeping person in a real storage unit —
     5 prototypes, 30 days, staged ground-truth occupancy, multiple unit types
  2. Operators will pay to prevent a tail risk — 30 calls asking what their
     policy says about residential use before pitching anything
  3. Insurance brokers will co-market or credit monitored facilities —
     10 broker conversations
Kill criteria:
  - Abandon if fewer than 6 of 30 operators can state their policy's habitation
    exclusion or express concern when it's explained — the liability pitch is the
    whole product, and without it this is a solution nobody's shopping for
  - Abandon if radar cannot achieve >90% detection of staged overnight occupancy
    with <5% false-positive rate on normal tenant access across 30 days
  - Abandon if OpenTech or StorageDefender ships radar-based dwell detection
    before your v1 — they own the installed base and the integrations
  - Abandon if no insurance broker will discuss a monitored-facility credit after
    10 conversations; CAC without that channel likely exceeds tolerable payback
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Buy 5 HLK-LD2410 modules and wire them to ESP32 dev boards. Find one friendly local storage operator — offer free monitoring in exchange for access. Mount sensors in three unit configurations: interior climate-controlled, drive-up with steel roll-up door, and a corridor-facing unit. Test detection of a still human at 10-minute and 60-minute dwells, from both inside-unit and corridor-mounted positions. This is the physics gate and it comes first because a failure here kills everything downstream.
- **Day 3–4:** 30 calls to unmanned-facility operators, sourced from operator directories. Script opens with two questions asked *before* any pitch: "How would you know today if someone was living in one of your units?" and "What does your insurance policy say about residential use?" Log the answers verbatim. Do not lead the witness — the value is in what they volunteer.
- **Day 5:** Call 10 self-storage insurance brokers and ask one question: would a facility with unit-level habitation monitoring earn a premium credit or a favorable underwriting note?
- **Decision:** Go if (a) radar detects staged still-occupancy at >90% in at least one viable mounting position, AND (b) ≥6 of 30 operators express unprompted concern or can cite their habitation exclusion, AND (c) ≥2 of 10 brokers will engage on a credit conversation. Anything less than all three and the honest answer is that this is a real problem nobody has decided to buy a solution for yet — which is a fine thing to learn in a week for under $500.
