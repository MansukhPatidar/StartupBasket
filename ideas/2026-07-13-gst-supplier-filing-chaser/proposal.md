---
title: "VendorNudge — filing chaser for Indian CA firms"
slug: gst-supplier-filing-chaser
date: 2026-07-13
category: Compliance / India
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Chases the suppliers who haven't filed GSTR-1 yet, so your client's GSTR-3B isn't blocked on the 20th."
tags:
  vertical: Compliance
  model: SaaS
  geography: India
  secondary: [WhatsApp-first, AI-agent, Multilingual, SMB, Compliance-driven]
axes:
  problem: 18
  demand: 13
  build: 11
  distribution: 13
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# VendorNudge

## 1. One-liner

Chases the suppliers who haven't filed GSTR-1 yet, so your client's GSTR-3B isn't blocked on the 20th.

## 2. Trend signal — why now?

Three things changed in India's GST regime inside twelve months, and together they turned a book-keeping annoyance into a cash-flow emergency.

**The Invoice Management System became mandatory on 1 April 2026** for every regular GST-registered taxpayer who files GSTR-3B. Every inward invoice must now be actioned — Accept, Reject, or Pending — and inaction is not neutral: no action by the deadline means **deemed acceptance**.

**The Zero Mismatch Policy landed at the same time.** From April 2026 the portal blocks GSTR-3B filing outright where the ITC claimed exceeds what GSTR-2B reflects. Not a warning. Not a flag for later. The return does not file. As one CA put it plainly: *"The portal simply blocks you."* Outward liability in GSTR-3B has already been non-editable since July 2025; with hard-locking, *"what flows into GSTR-3B from GSTR-1 and GSTR-2B is final."*

**And here is the part that makes this a product rather than a feature.** IMS lets you accept, reject, or defer the invoices a supplier *has* reported — *"it cannot add an invoice the supplier never reported. If a supply isn't in the system, no amount of IMS action will conjure it."* Reconciliation software is structurally powerless against the most common failure. There is exactly one fix, and it is not software-shaped: someone has to make the supplier file.

The survival procedure, written by a practising CA in a public guide, is literally this: *"Call suppliers whose invoices are missing. Chase them to upload GSTR-1 before the 11th next month."*

That is a human being on a phone. In 2026. Against a hard deadline. For every client.

The window is six days wide. GSTR-2B is generated on the 14th; GSTR-3B is due on the 20th. For firms managing significant invoice volumes, six days to identify exceptions, follow up with vendors, and post IMS actions leaves very little margin for manual workflows. And the cost of losing that race is not a penalty — it is cash. *"When credit is delayed, queried or reversed, the liability does not wait. The tax has to be discharged in cash, and working capital that was meant for the business funds the government instead."*

Scale it across a practice and the arithmetic gets ugly fast: *"7 steps × 30 clients × 12 months = 2,520 reconciliation cycles per year. At even 2 hours each, that's 5,040 hours."*

Meanwhile roughly **30% of Indian suppliers delay GSTR-1 filing**. That is not a tail risk. That is a near-certainty that some supplier, somewhere in your client's book, is about to block a return.

```
Provenance:
  - Signal 1 (Demand): "Zero Mismatch Policy" blocks GSTR-3B filing outright when ITC claimed exceeds GSTR-2B; ~30% of Indian suppliers delay GSTR-1 filing; CAs publicly prescribe manually phoning suppliers as the fix — https://www.caclubindia.com/articles/the-portal-will-block-you-a-cas-survival-guide-to-itc-reconciliation-after-gstr3b-hardlocking-54858.asp — accessed 2026-07-13
  - Signal 2 (Feasibility): GSTN publishes IMS + GSTR-2B fetch APIs through GSP/ASP channels (Sandbox/Quicko, MasterGST, Whitebooks) with free sandboxes; WhatsApp Business API is mature and is where Indian suppliers actually answer — https://developer.gst.gov.in/apiportal/ + https://developer.sandbox.co.in/api-reference/gst/overview — accessed 2026-07-13
  - Signal 3 (Economic): Vendor-compliance monitoring is already a paid category in India, but priced at the enterprise tier — ₹40,000–₹1 lakh+/yr for IRIS GST, ClearTax, Mysa — leaving the SMB and small-practice tier exposed to a mandate that is not tier-aware — https://www.aiaccountant.com/blog/vendor-risk-assessment-tools-india — accessed 2026-07-13
  Category: Regulatory arbitrage
```

## 3. The opportunity

The GST software market in India is crowded and I want to be honest about that. ClearTax, IRIS, Tally, KDK, Mysa, Taxilla — they all do GSTR-2B reconciliation, and several of them will sell you a "vendor compliance report."

Here is what they all have in common: **they tell you that you have a problem, and then they stop.**

A reconciliation tool produces an exception list. A vendor compliance report produces a scorecard. Both hand the output to a human, and the human's next action is to open WhatsApp and start typing to a supplier's accountant who is not reading, does not care, and has no deadline of his own on the 11th.

The gap is not detection. Detection is solved and commoditised. **The gap is the collection.** Nobody has built the thing that actually goes and gets the invoice filed.

That is a strange gap to find in a mature market, and the reason it exists is structural. The incumbents are *filing* companies. Their product surface ends at your GSTIN. Reaching outward to a third party who isn't their customer, in that third party's language, on the channel that third party actually reads, and escalating on a schedule — that is an outbound-agent product wearing a compliance product's clothes. It sits in an organisational blind spot at every one of them.

The disruption play is specific: incumbents charge ₹40K–₹1L a year and give you a *report*. I'll charge a fraction of that and give you a *result* — the invoice appears in GSTR-2B, or the client gets told on the 12th, not the 19th, that it never will and the ITC must be deferred.

## 4. Target market

**Primary customer:** The 20–80 client CA / tax-practice firm. Two to eight people. Tier-1 and Tier-2 cities. They file GSTR-1 and GSTR-3B for small and mid-size businesses and they are the ones who eat the 20th-of-the-month panic. The partner signs the cheque; the article-clerk is the one drowning.

**Secondary customer:** The in-house finance lead at a ₹20–200 crore turnover manufacturer or distributor with 100–800 active suppliers — the profile with enough vendors that non-filing is statistically guaranteed every single month, but not enough budget or headcount to run an enterprise vendor-compliance suite.

**Why they buy, in their words:** *"Call suppliers whose invoices are missing. Chase them to upload GSTR-1 before the 11th next month."* That sentence is the job description of the person this product replaces. And the consequence of failing is not abstract: *"Credit denied despite payment made"* → *"Cash outflow now, recovery from supplier uncertain."*

**Rough TAM reasoning:** India has well over a hundred thousand practising CAs, and GST practice is the bread-and-butter of small firms. I don't need the whole population. I need a few thousand firms at ₹3,000–₹12,000/month. That is a ₹1–5 crore ARR business inside a market where the *enterprise* tier alone is already selling ₹1 lakh contracts. The ceiling is comfortably above where I need to land, and the floor is reachable with a few hundred firms.

**Why now for them:** Before April 2026, a missing invoice was a deferred ITC claim — annoying, fixable next month. After April 2026, it is a **blocked return**. The pain went from chronic to acute on a specific date, and every practice in India felt it in the same week.

## 5. Product sketch (MVP)

- **Connect once, watch everything.** Link a client's GSTIN via GSP/ASP APIs. Pull GSTR-2B and the IMS inbox automatically each cycle. No CSV shuffling.
- **The gap list, on the 12th — not the 19th.** Diff the client's purchase register against what's actually landed in GSTR-2B and IMS, and surface exactly which suppliers have not filed. Early, while there is still time to do something about it.
- **The chase runs itself.** For every missing invoice, an AI agent opens a WhatsApp thread with that supplier's registered contact, in Hindi, Gujarati, Tamil or English, naming the invoice number, the amount, and the date it needs to be on the portal by. It follows up on a schedule. It does not get embarrassed. It does not forget.
- **Escalation ladder.** No response in 48 hours → escalate to the supplier's listed accountant. Still nothing → a formal, ready-to-send notice to the supplier citing the contractual and Section 16(2)(aa) consequence, drafted and waiting for the partner's one-click approval.
- **IMS actions, batched and safe.** Recommend Accept / Reject / Pending on every document with the reasoning shown, and let the practice bulk-apply. Never silently accept — deemed acceptance is the trap, and the product's whole job is to make sure nothing gets accepted by accident.
- **The call, made early.** By the 15th, every invoice is in one of two buckets: it will land, or it won't. If it won't, the client is told to defer the ITC *now*, in daylight, rather than discovering a blocked return at 11pm on the 20th.
- **Practice-wide board.** All 40 clients, one screen, sorted by rupees of ITC at risk. The partner sees where to spend the last two days before the deadline.

## 6. AI angle — what's load-bearing

Strip the AI out and this is a spreadsheet plus a human calling suppliers. Which is precisely the status quo the product exists to kill — so the test is honest and the answer is clear.

The AI is doing three things no rules engine can:

1. **It runs the conversation.** A supplier's accountant replies "arre bhai woh humne kar diya tha" or "next week dekhta hoon" in mixed Hindi-English on WhatsApp. Something has to understand that, know that "kar diya" is a claim that can be checked against the portal (and check it), know that "next week" misses the 11th and push back, and know when to stop pushing and escalate. That is the entire product and it is irreducibly a language problem across a dozen Indian languages.

2. **It reasons about the ledger.** Matching a purchase register to GSTR-2B is not string equality — it's fuzzy reconciliation across inconsistent invoice numbering, GSTIN typos, partial credit notes and amendments. Rules get you most of the way; the tail is where the blocked returns live.

3. **It drafts the escalation.** A supplier-facing notice that cites the correct provision, in the right register of formality, for a specific invoice, without a partner spending twenty minutes writing it.

Nobody would build this in 2019. The multilingual conversational layer simply wasn't there, and the whole thing collapses into an SMS blaster that suppliers ignore.

## 7. Localization angle

This isn't a localized product. **It is a product that could not exist anywhere else.** IMS, GSTR-2B and the Zero Mismatch Policy are inventions of the Indian GST regime; the pain is manufactured by Indian law and it does not export.

The localization *inside* India is where the execution lives:

- **Language.** The buyer is a CA who speaks English. The person who has to be persuaded to file is a supplier's accountant in Surat or Coimbatore who does not want to. Get that wrong and the chase fails silently.
- **WhatsApp or nothing.** Email to an Indian SMB supplier is a message sent into the void. WhatsApp is where business actually happens, and it is the only channel where this workflow has a pulse.
- **Price in rupees, priced for a practice.** ₹3,000–₹12,000/month works for a 40-client firm. The $500/mo that the same product would fetch in the US does not exist here, and the enterprise tools that price like that are exactly why the SMB tier is unserved.

## 8. Business model — path to $1M–$5M ARR

**Pricing:** Per practice, tiered by GSTIN count.
- Starter — ₹2,999/mo, up to 15 GSTINs
- Practice — ₹7,999/mo, up to 50 GSTINs
- Firm — ₹17,999/mo, up to 150 GSTINs
- Direct-to-business (the ₹20–200cr manufacturer) — ₹9,999/mo, one GSTIN, unlimited suppliers

**ACV:** ~₹96,000 (roughly $1,150) blended.

**Math to $1M ARR (~₹8.5 crore):** ~880 practices at the ₹7,999 tier. Or a realistic mix: 600 practices + 150 direct businesses. In a country with six figures of practising CAs, a few hundred paying firms is a distribution problem, not a market-size problem.

**Math to $5M ARR (~₹42 crore):** needs ~4,000 practices, which means moving from founder-led sales into the ICAI-chapter and regional-partner channel, plus meaningful direct-to-enterprise expansion. Honest read: $1–2M ARR is very reachable on this wedge; $5M requires a second product line — most naturally, turning the accumulated supplier-behaviour data into a pre-transaction vendor risk score sold to procurement teams.

**Expansion path:** GSTIN count grows as the practice grows. Then usage — supplier volume. Then the real prize: **the supplier-reliability dataset**. After twelve months of chasing tens of thousands of suppliers, I know which GSTINs file on time and which ones habitually don't, at a granularity nobody else has, because nobody else is talking to them.

## 9. Go-to-market wedge — first 100 customers

The buyer is the single most reachable professional audience in India. They are organised into chapters, they gather in study circles, and they complain in public on forums with their real names attached.

- **Ride the deadline, monthly.** The 12th to the 20th of every month is a recurring, predictable panic. Run the product live in that window and publish, on the 21st, a plain post-mortem: *"This month, N invoices across M practices went missing. We got 71% of them filed before the 20th. Here's the breakdown."* Real numbers, monthly, in the exact week the wound is open. That is the content engine and it writes itself.
- **CAclubindia and TaxGuru, where they already asked for this.** These forums have live threads of practitioners describing exactly this problem — the "how to comply with IMS" threads are populated by named CAs stating their pain in public. Answer them usefully, with the tool as a footnote. This is a few hundred identifiable, self-selected leads with the problem already confessed.
- **ICAI branch study circles.** Every regional branch runs GST sessions. Post-April-2026 the demand for anyone who can speak clearly about IMS and hard-locking is enormous. Do the talk for free, thirty to eighty CAs in the room, all of whom filed a blocked return last month. Ten branches is a pipeline.
- **The free gap-scan, as the front door.** "Give me one client's GSTIN, I'll tell you in five minutes which suppliers are about to block your 3B." Zero commitment, instantly falsifiable, and it demos the entire value proposition before anyone pays. If the scan comes back with three names, the pitch is already over.
- **GSP/ASP partner channel.** The GSPs already sell API access to hundreds of small practices and have no interest in building the chase layer themselves. Revenue-share and get shelf space next to a product the customer already trusts.

## 10. Build complexity — justification

**Medium.** The AI is off-the-shelf — a good multilingual model handles the WhatsApp conversation and the fuzzy matching without any custom training. The web app is unremarkable.

The cost sits in two places. **GSP/ASP onboarding** is real bureaucracy: you route GSTN API access through a certified provider (Sandbox/Quicko, MasterGST, Whitebooks), the sandboxes are free, but the paperwork and the API's quirks will eat weeks. **WhatsApp Business API** onboarding plus template approvals is another few weeks of Meta's patience being tested. Neither is hard. Both are slow.

Realistic v1 for a technical pair: **12–16 weeks.** A solo builder should assume five months and plan the GSP application on day one, not week eight.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Standard GSP/ASP route; the client authorises access to their own GSTIN. Supplier outreach is ordinary business communication about an invoice the supplier issued. |
| Ethical — no harm / dark patterns | ✅ | The product asks suppliers to do the thing they are legally obliged to do. Escalation is transparent and partner-approved. Hard rule: never auto-accept an IMS document silently — deemed acceptance is the trap, not the tactic. |
| Market exists (evidence above) | ✅ | Vendor-compliance tooling is already a paid category at ₹40K–₹1L/yr. The mandate is live. The manual workaround is published by CAs as procedure. |
| 1–5 person team can build this | ✅ | Technical pair, 12–16 weeks. |
| Launchable with <$50K / ₹40L | ✅ | GSP fees, WhatsApp messaging costs and inference. Well under ₹15L to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire and calendared. A blocked return is not an inconvenience — it is cash out the door on a fixed date, every month, forever. The pain recurs on the 20th with perfect reliability. Not a 20 only because the practice has a brutal, functioning workaround: make the article-clerk phone people. |
| Demand evidence | 15 | 13/15 | Multiple independent hard signals: a live statutory mandate, an existing paid category at the enterprise tier, ~30% supplier late-filing, and CAs publishing "call your suppliers" as literal survival procedure. What's missing is the one thing that would make it a 15 — I have not yet watched a CA hand over a card. |
| Build feasibility | 15 | 11/15 | AI and web stack are commodity. The GSP/ASP and WhatsApp API onboarding are the tax — slow, bureaucratic, and entirely outside your control. 12–16 weeks, not 6. |
| Distribution clarity | 15 | 13/15 | A named, organised, forum-dwelling audience with a monthly recurring panic and a free scan that proves value in five minutes. About as clean as bootstrap distribution gets. |
| Revenue mechanics | 15 | 11/15 | Pricing is anchored against a real ₹40K–₹1L incumbent tier, so the willingness-to-pay is not hypothetical. But Indian SMB software pricing is punishing, churn among small practices is real, and $5M needs a second act. |
| Time to first revenue | 10 | 8/10 | The GSP onboarding delays launch, but the moment it's live the deadline does the selling. First cheque within 4–8 weeks of launch is very plausible; the free scan converts in the same week the client's return got blocked. |
| Defensibility | 10 | 3/10 | **The weak axis, and I won't dress it up.** ClearTax could ship this as a feature. Nothing stops them. The only real moat is the accumulating supplier-behaviour dataset — which GSTINs actually respond, to which message, in which language — and that takes a year to become valuable. Until then this is a pure execution-speed play against incumbents who are slow and looking the other way. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who has actually filed a GSTR-3B under duress. Without a GST-native co-founder or a very close advisor, you will build a beautiful reconciliation dashboard — the exact thing the market already has six of — and miss that the entire product is the outbound chase.

### Key assumptions to validate

1. **Assumption:** Suppliers actually respond to a WhatsApp nudge from a third-party agent — enough of them, fast enough, to move the needle. **How to test:** Manually chase 200 non-filing suppliers over one GST cycle for five friendly practices. Measure the filed-before-the-11th rate against the practice's own historical baseline. If an automated-feeling nudge doesn't beat a human phone call by a wide margin on volume, the thesis is in trouble.
2. **Assumption:** CA firms will pay ₹8,000/month for this rather than absorbing it with an article-clerk who costs less. **How to test:** Twenty pricing conversations with 30–60 client practices. Ask what a blocked GSTR-3B cost them in April, May and June 2026 — in hours and in client goodwill. Then quote the price and watch the face.
3. **Assumption:** GSP/ASP API access is obtainable by a two-person startup without a corporate war chest. **How to test:** Start the Sandbox/Quicko and MasterGST applications in week one. This is a gating dependency, not a detail — if it takes six months, the whole timeline is fiction.
4. **Assumption:** ClearTax and IRIS don't ship supplier-chasing as a feature in the next twelve months. **How to test:** You can't test it. You can only be faster and own the niche before they notice.

### Risk flags

1. **Incumbent absorption.** This is the big one. The feature gap is obvious in hindsight and the incumbents have the distribution, the GSTIN connections and the brand. The bet is that outbound multilingual supplier engagement is culturally and organisationally alien to a filing company — and that betting on a large company's blind spot is a real strategy, just not a comfortable one.
2. **Platform dependency, doubled.** The product sits on two platforms it does not control: GSTN (via a GSP) and WhatsApp (via Meta). Either can change terms, throttle, or reclassify your message templates into a more expensive bucket. Both have done versions of this to somebody.
3. **Regulatory whiplash.** The GST Council moves. A softening of the Zero Mismatch Policy, or a grace mechanism for supplier default, would take a chunk of urgency out of the product overnight. The regulation *is* the moat — which cuts both ways.
4. **Supplier fatigue.** If every practice in India runs an automated chaser, suppliers start ignoring all of them and the channel burns out. Early-mover advantage is real here and it has a shelf life.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical pair, one with real GST-practice scar tissue
Time to revenue:        4–8 weeks post-launch; 4–5 months from a standing start (GSP onboarding is the long pole)
Capital to launch:      ₹10–15 lakh ($12–18K)
Top 3 assumptions to validate first:
  1. Suppliers respond to third-party WhatsApp chasing — manually chase 200 non-filers across one GST cycle, measure filed-before-11th rate vs. baseline
  2. Practices pay ₹8K/mo rather than absorb it with a clerk — 20 pricing conversations with 30–60 client firms, anchored on what April–June 2026 actually cost them
  3. A two-person startup can get GSP/ASP API access — file the applications in week one, before writing any code
Kill criteria:
  - Abandon if the manual chase of 200 suppliers doesn't lift the pre-11th filing rate by at least 25 points over the practice's own baseline. If nudging doesn't work when a human does it, automating it changes nothing.
  - Abandon if fewer than 5 of 20 practices will commit to ₹8K/mo after seeing a live gap-scan on their own client book.
  - Abandon if ClearTax or IRIS ships supplier-chasing with WhatsApp outreach before your v1 is live. You will not out-distribute them from behind.
```

## 15. Next step — 1-week validation sprint

The whole idea rests on one question that has nothing to do with software: **when a stranger nudges a supplier to file, does the supplier file?** Everything else is downstream. So test that, and only that, and don't write a line of code.

- **Day 1–2:** Get five CA firms to hand over their unfiled-supplier lists from the last cycle — the actual GSTINs and invoice numbers that didn't land in GSTR-2B. Offer the work free. They will say yes, because right now this list is a problem they own and hate. Target 200+ supplier records.
- **Day 3–4:** Chase every one of them by hand over WhatsApp, in their language, from a plain business number. Name the invoice, the amount, the date. Follow up once. Vary the script deliberately — polite reminder vs. consequence-citing — and log which one moves people. This is a wizard-of-oz run of the entire product, performed by you, with a phone.
- **Day 5:** Pull GSTR-2B for those clients and count. How many of the 200 got filed? Then walk the numbers into the five firms and ask for ₹8,000/month.
- **Decide:** Go if **(a)** the pre-11th filing rate beats the practice's own baseline by 25+ points, **and (b)** at least 2 of the 5 firms say yes to the price with the result sheet in front of them. Anything less and the chase doesn't work — in which case the product is a reconciliation dashboard, the market already has six, and you should walk away.
