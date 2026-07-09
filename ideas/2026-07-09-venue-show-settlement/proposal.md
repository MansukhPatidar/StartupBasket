---
title: "SetList — settlement clerk for independent music venues"
slug: venue-show-settlement
date: 2026-07-09
category: Live Events / US-SMB
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Turns a deal memo, box-office report, and a pile of receipts into a reconciled show settlement in five minutes."
tags:
  vertical: Creator Economy
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Document-parsing, Live-events, Solo-builder]
axes:
  problem: 15
  demand: 11
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# SetList — settlement clerk for independent music venues

## 1. One-liner

Turns a deal memo, box-office report, and a pile of receipts into a reconciled show settlement in five minutes.

## 2. Trend signal — why now?

Show settlement — the night-of-show reconciliation where a venue booker and a tour manager agree what the artist actually walks out with — is still done on spreadsheets and, per the trade's own how-to guides, "a pen and a napkin." The math is not hard in theory (`(Gross Box Office − Taxes − Expenses) × 85% = artist walkout`), but in practice it's a stressful, receipt-heavy, error-prone reconciliation done at 1am with real money on the line and an agent's email waiting the next morning. The tooling that exists is either free-and-dumb (settlement-sheet generators, gig calculators) or a full booking suite (Prism.fm, Opendate, VenuePilot) priced and scoped for multi-venue operators — overkill for the solo booker at a 250-cap room.

Three things converged in the last 12 months:
1. **The niche is bleeding.** NIVA represents 8,000+ independent venues; ~150 small-cap (200–800) clubs closed in 2024 and 64% of independent stages were unprofitable that year. When you're that thin, a settlement math error or a leaked expense is real money.
2. **Doc-parsing got good and cheap.** Deal memos, box-office reports from a dozen ticketing systems, and a stack of vendor receipts are exactly the messy semi-structured documents 2026 vision models now read reliably — the technical thing that made this a manual job just got automated.
3. **Money is in the category.** Prism.fm and VenuePilot are funded and growing; live music generated $153B in economic output in 2024. But the venue-management incumbents sell a CRM-plus-booking suite; settlement is one buried feature, not the product.

Provenance:
  - Signal 1: Settlement is a stressful night-of-show math/receipt task — "Big numbers... large amounts of money... you don't want to get it wrong"; industry teaches it as pen-and-napkin work — https://tourcollective.co/the-two-minute-tm/001 — 2026-07-09
  - Signal 2: 8,000+ NIVA independent venues, ~150 small-cap closures in 2024, 64% unprofitable — https://www.hypebot.com/niva-state-of-live-how-us-independent-venues-power-local-economies/ — 2026-07-09
  - Signal 3: Incumbents (Prism.fm, Opendate, VenuePilot) sell full venue-management/booking suites where settlement is one feature of a larger CRM, not a standalone tool — https://prism.fm/opendate/ — 2026-07-09
  Category: Underserved niche

## 3. The opportunity

Every incumbent treats settlement as a downstream feature of a booking CRM. That means to get good settlement you first buy — and configure, and migrate your calendar into — a whole venue-management platform. The solo booker at an independent club doesn't want that. She wants the *last 30 minutes of the night* to stop being painful: take the deal she already agreed to, the box-office numbers, and the receipts, and produce a clean, backup-linked settlement sheet that the tour manager signs without an argument.

The 10× is narrow and real: an AI-first tool that ingests the *documents that already exist* (offer/deal memo, ticketing report, expense receipts) and produces the reconciled sheet — catching the versus-vs-guarantee comparison, the co-pro splits, and the expense-cap overages that humans fat-finger at 1am — beats both the napkin (error-prone, no audit trail) and the suite (heavy, expensive, requires you to move your whole life into it). It's a wedge, not a suite: do the single most-hated 30 minutes better than anyone, then earn the right to expand.

## 4. Target market

- **Primary customer:** The talent buyer / booker / GM at an independent US music venue in the 150–800 capacity band — the club that runs 8–25 shows a month, often with 1–2 people wearing every hat, and settles on spreadsheets. Also independent promoters routing 20–40 dates a month who co-pro with those rooms.
- **Why they buy:** In their words — settlement is where "you don't want to get it wrong," co-pro reconciliation "takes weeks" of matching spreadsheets that don't agree, and expenses without a backup receipt cause settlement delays and agent disputes. It's the recurring, high-stakes, low-joy part of the job.
- **Rough TAM reasoning:** 8,000+ NIVA venues; conservatively 3,000–4,000 in the target capacity band that settle manually, plus a few thousand independent promoters and small booking agencies. A niche measured in low tens of thousands of seats — too small for a VC-scale venue-OS, right-sized for a bootstrapped tool at $79–199/mo.
- **Why now for them:** Margins are gone (64% unprofitable) and staff is stretched thinner than ever, so any tool that removes a stressful hour and prevents a money-losing math error is an easy yes — and the doc-parsing that makes it possible only just got reliable and cheap enough to offer at their price point.

## 5. Product sketch (MVP)

- **Upload the deal.** Drop the offer/deal memo (PDF, email, or paste); SetList extracts guarantee, split %, deal type (flat / versus / door), expense caps, and co-pro terms.
- **Pull the box office.** Upload the ticketing/box-office report (Eventbrite, DICE, See Tickets, AXS export, or a photo of the manifest); it reads gross, comps, taxes, and fees.
- **Drop the receipts.** Throw in the stack — sound/light hire, stagehands, catering, PRS/ASCAP, ad spend, security — and it itemizes each expense with the receipt linked as backup.
- **Auto-reconciled sheet.** Produces the settlement: net box office, expenses, guarantee-vs-percentage comparison, artist walkout, and each side's cut — with the math shown, not hidden.
- **Error catcher.** Flags the classic mistakes: expense over its contracted cap, missing backup receipt, versus deal where the percentage beat the guarantee (or vice versa), co-pro split that doesn't sum to 100%.
- **Co-pro mode.** One shared sheet both promoters see, so the "your numbers don't match my numbers" argument disappears.
- **Signable + branded.** One-click branded PDF the tour manager can approve on the spot; every past show archived and searchable.

## 6. AI angle — what's load-bearing

Remove the AI and this is just another settlement-sheet template — which already exists for free and nobody's happy with. The load-bearing work is **reading the messy documents that make settlement manual today**: deal memos written in inconsistent free text, box-office reports from a dozen ticketing platforms in a dozen formats, and a physical pile of receipts and vendor invoices. Extracting structured line items from all three and mapping them to the right settlement fields — then applying the deal logic (versus comparison, caps, splits) and *catching* the mismatches — is exactly what a modern vision+reasoning model does and what a plain calculator can't. The AI is the thing that turns "documents you have" into "sheet that's done," which is the entire product.

## 7. Localization angle (if any)

N/A — this is a US-first play. The deal structures (versus deals, co-pros, guarantee-vs-percentage), the ticketing platforms, and the NIVA ecosystem are US-specific enough to be a moat of familiarity, not a localization gap. UK/EU/AU are natural expansions later (same shape, different ticketing systems and PRS bodies), but v1 wins by nailing the American independent-venue vernacular, not by translating anything.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $99/mo per venue for the standard tier (unlimited shows, one room); $199/mo for multi-room / promoter tier with co-pro sharing and 3+ users. Add-on: $10/settlement pay-as-you-go for tiny rooms that only book a few shows a month.
- **ACV:** ~$1,400/yr blended (mix of monthly and promoter tiers).
- **Rough math to $1M ARR:** ~700 paying venues/promoters × ~$1,400 = ~$1M. Out of a 3,000–4,000-venue reachable base plus promoters, that's ~15–20% penetration — aggressive but not fantasy for a tool that removes the single most-hated task.
- **Rough math to $5M ARR:** Needs the promoter/agency tier to carry more weight (more seats, more rooms) and a UK/EU expansion, plus an ancillary-revenue module (merch/bar reconciliation) lifting ACV toward $2,500–3,000. ~1,800 accounts at that blended ACV.
- **Expansion path:** Land on settlement, expand into the adjacent night-of-show and post-show workflow: advance/day-sheets, expense-log-from-day-one, artist payment initiation, and a booker-facing archive/analytics ("what did we actually clear on hip-hop Thursdays"). Each is a seat/usage upsell without becoming a bloated booking suite.

## 9. Go-to-market wedge — first 100 customers

- **NIVA is a list.** The National Independent Venue Association's 8,000+ members are addressable through the association's directory, regional chapters, and its conference (NIVA's annual event) — one warm room full of exactly the buyer. Sponsor/attend, demo the 5-minute settlement live.
- **Cold, but specific.** Scrape the ~3,000 target-capacity independent venues (Bandsintown/Songkick listings expose room + capacity), find the booker on the venue site, and send a personalized 90-second Loom: "here's your last show settled in SetList." Bookers are a tiny, findable, tight-knit world — a 3–5% reply rate on a hyper-relevant demo is realistic.
- **Ride the tour managers.** TMs settle at dozens of venues; they're the ones who feel the venue's bad math. Get 50 TMs to *ask* their venues to use SetList (via the TM communities — Tour Collective, Facebook TM groups, Daysheets' audience). One evangelist TM pulls in 5–10 venues.
- **Promoter beachhead.** Independent promoters routing 20–40 dates/month feel co-pro reconciliation pain worst; land a handful and their venue partners get pulled onto the shared-sheet.
- **Trade content that ranks.** The "how to settle a show" guides get real search traffic; publish the definitive settlement toolkit + free calculator as the top-of-funnel that converts to the paid reconciler.

## 10. Build complexity — justification

Medium. The math engine and settlement-sheet output are straightforward; the real work is robust document extraction across many ticketing-report and receipt formats plus the deal-logic edge cases (versus, caps, co-pro, comps, taxes). All of it is off-the-shelf model APIs plus a standard web stack — no custom models, no hardware, no compliance bureaucracy. A technical founder with a domain advisor (an ex-booker or TM) ships a credible v1 in ~10–14 weeks; the domain advisor is what keeps it from being a toy.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Financial reconciliation tool; no licensing needed. Not touching payments in v1. |
| Ethical — no harm / dark patterns | ✅ | Increases transparency between venue and artist — the opposite of a dark pattern. |
| Market exists (evidence above) | ✅ | 8,000+ venues, documented pain, funded incumbents, free crappy tools proving demand. |
| 1–5 person team can build this | ✅ | Doc-parsing + calc + PDF. Solo technical founder + domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Model API + web stack; main cost is founder time and a booker advisor. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring, high-stakes, and hated — but it's a monthly-ish task, not hair-on-fire daily, and many limp along on Excel. |
| Demand evidence | 15 | 11/15 | Strong: quantified market, documented pain quotes, funded incumbents, free tools proving want — but I lack a raw "shut up and take my money" venue thread. |
| Build feasibility | 15 | 11/15 | Doc extraction across many formats + deal-logic edge cases is the gnarly part; everything else is standard. ~10–14 weeks. |
| Distribution clarity | 15 | 12/15 | NIVA is a findable list, TMs are a viral vector, promoters a beachhead. Not a 2-week sprint, but named and cheap. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarks against suite subscriptions; ACV reasonable; $1M needs healthy penetration of a finite base. |
| Time to first revenue | 10 | 8/10 | Pre-sellable to a few venues off the demo; paid pilots within weeks of a working extractor. |
| Defensibility | 10 | 5/10 | Execution + workflow lock-in (your show history lives here) + booker/TM community trust. Suites could bolt on a better settlement, but they won't unbundle. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — the doc-extraction quality is the product, and you cannot fake knowing how a versus-deal co-pro settles at 1am. Get a real booker or tour manager as co-founder/advisor before writing a line.

### Key assumptions to validate (3–5)

1. **Assumption:** Independent bookers will pay ~$99/mo for a settlement-only tool rather than tolerate their spreadsheet for free. **How to test:** 30 booker interviews + a pre-sell landing page; count deposits/LOIs, not "that's cool."
2. **Assumption:** Document extraction is reliable enough across the top 6–8 ticketing report formats and messy receipts that the sheet is trustworthy without heavy manual correction. **How to test:** Run 50 real anonymized settlement packets through a prototype extractor; measure field-level accuracy and correction time.
3. **Assumption:** The finite market (few thousand target venues + promoters) can support a $1M+ ARR business at achievable penetration. **How to test:** Build the actual reachable list from Bandsintown/Songkick + NIVA; size it honestly before committing.
4. **Assumption:** Incumbents won't unbundle a good standalone settlement tool fast enough to matter. **How to test:** Track Prism/Opendate/VenuePilot roadmaps and pricing; watch for a low-tier settlement-only SKU.

### Risk flags

1. **Market size ceiling:** The reachable base is finite and thin-margined. $1M ARR is very doable; $5M requires geographic expansion and ancillary modules — the ceiling is real, plan for it.
2. **Platform dependency:** Box-office data comes from ticketing platforms you don't control (Eventbrite, DICE, AXS, etc.). Format changes or an API clampdown raises extraction cost; keep photo/PDF ingestion as the universal fallback.
3. **Incumbent bolt-on:** A funded venue-OS could ship "AI settlement" as a feature. Defense is depth + the unbundled, cheaper, faster wedge — win the bookers who will never buy the whole suite.
4. **Trust threshold:** Money is on the line; one wrong auto-computed sheet that costs a venue real cash burns trust hard. The error-catcher and "show the math" transparency aren't nice-to-haves, they're survival.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + ex-booker/tour-manager co-founder or advisor
Time to revenue:        6–10 weeks to paid pilots off a working extractor demo
Capital to launch:      $8–15K ($ mostly model-API + founder time; no capex)
Top 3 assumptions to validate first:
  1. Bookers pay ~$99/mo for settlement-only vs. free Excel — 30 interviews + pre-sell deposits
  2. Extraction accuracy across top ticketing/receipt formats is trustworthy — 50 real packets, measure correction time
  3. Reachable base is big enough for $1M+ ARR — build the actual list, size it honestly
Kill criteria:
  - Abandon if <15% of 40 target bookers show real intent (deposit/LOI, not praise)
  - Abandon if extraction requires manual correction on >30% of line items across the test packets
  - Abandon if a funded incumbent ships a cheap standalone settlement SKU before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the reachable list — pull 300 US independent venues in the 150–800-cap band from Bandsintown/Songkick, find the booker for each. Draft the 90-second "your last show, settled" demo pitch.
- **Day 3–4:** Collect 20–30 real anonymized settlement packets (deal memo + box-office report + receipts) from friendly venues/TMs; run them through an off-the-shelf extraction prototype and measure how close the auto-generated sheet gets. Interview 15 bookers on price and pain.
- **Day 5:** Decide go/no-go. **Go** if (a) ≥6 of 15 interviewed bookers say they'd pay ~$99/mo *and* put down a pilot commitment, and (b) the prototype gets settlement line items ≥70% right on the real packets with correction under ~10 minutes. Anything less, iterate the extractor or kill.

The falsifiable result: real pilot commitments from real bookers plus a measured extraction-accuracy number on real documents — not "the demo was cool."
