---
title: "TaxPerch — lodging-tax filer for self-managing STR hosts"
slug: str-lodging-tax-filer
date: 2026-06-25
category: PropTech / US Short-Term-Rental Hosts (1–5 properties)
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "TaxPerch reconciles your Airbnb/VRBO payouts and remits the occupancy tax your city actually expects — before the audit letter."
tags:
  vertical: PropTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder, Tax-automation]
axes:
  problem: 16
  demand: 12
  build: 10
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# TaxPerch

## 1. One-liner

TaxPerch reconciles your Airbnb/VRBO payouts and remits the occupancy tax your city actually expects — before the audit letter.

## 2. Trend signal — why now?

Occupancy / transient-lodging tax is the silent killer of the small short-term-rental host. The myth is "Airbnb collects it for me." The reality, per Airbnb's own help docs and Avalara's guides: Airbnb and VRBO auto-collect-and-remit in *some* jurisdictions and not others — and when they don't, the host is 100% liable, including the city-level tax even where the state-level one is handled. Hosts find out the hard way.

City enforcement is ramping. Penalties are real money: 10% of unpaid tax minimum, up to 25% plus a separate 25% fraud penalty plus a 10% audit-deficiency penalty in places like San Diego. And the kicker — failure-to-*file* (vs. failure-to-pay) often carries **no statute of limitations**, so a city can reach back to 2007. "I didn't know" is explicitly not a defense.

The incumbent, Avalara MyLodgeTax, charges **$27/mo per property + a $299 one-time setup fee per property**, and its reviews are a flank full of holes: "expensive," "opaque billing," "surprise charges," missed filings attributed to connector bugs, and one user reporting a wrongful $15,913.79 ACH pull after cancellation. It's tuned for multi-state property managers, not the host with two cabins.

Meanwhile cheap LLMs can now read 11,000+ jurisdiction rate/rule tables and parse the structured payout CSVs every OTA exports — the exact manual labor that made this a $27/property/mo service in the first place.

Provenance:
  - Signal 1 (demand): Avalara MyLodgeTax priced at $27/mo/property + $299 setup with consistent "expensive / missed filings / surprise billing" complaints — https://strspecialist.com/reviews/avalara-mylodgetax-tax-compliance-review & https://www.g2.com/products/avalara/reviews — 2026-06-25
  - Signal 2 (economic): ~2.25M active US Airbnb listings + ~650K VRBO; vertical SaaS growing 18–22% CAGR with compliance-fit pricing premium — https://awning.com/post/airbnb-statistics & https://stayfi.com/vrm-insider/2026/04/20/vacation-rental-statistics/ — 2026-06-25
  - Signal 3 (feasibility/regulatory): City audits reaching back years; 10–25%+ penalties; failure-to-file has no statute of limitations; "didn't know" is no defense — https://www.ashleypetersonlaw.com/city-audits-for-non-payment-of-transient-occupancy-taxes/ & https://www.avalara.com/mylodgetax/en/resources/airbnb-occupancy-tax-guide.html — 2026-06-25
  Category: Underserved niche

## 3. The opportunity

The market sorts into two camps. Big multi-state property managers buy Avalara and eat the per-property fees because the spreadsheet still pencils out at 40+ doors. The host with 1–5 properties — the long tail that *is* the STR market by headcount — gets nothing they can afford and ends up doing it by hand, badly, or not at all.

That host's actual problem is three sub-problems Avalara wraps in an enterprise price:
1. **"Which taxes do I even owe?"** — Is my city covered by Airbnb's auto-remit, or do I file the city portion myself? This is genuinely confusing and changes by jurisdiction.
2. **"What's the number?"** — Reconcile gross rents, cleaning fees, platform-collected amounts, and exemptions against the local rate to get the taxable base right.
3. **"File it on time, every period."** — Different jurisdictions file monthly / quarterly / annually, sometimes both city AND state on different cadences.

A focused AI-first tool can do all three for a host with two listings at a price that makes the $299-setup incumbent look absurd, and own the relationship the incumbent treats as too small to support well.

## 4. Target market

- **Primary customer:** US short-term-rental hosts who self-manage 1–5 properties — the "I have a beach condo and a cabin" owner, not the 200-door PM. Typically $20K–$150K annual STR revenue per host.
- **Why they buy:** Fear and time. They've heard the audit horror stories, they don't trust "Airbnb handles it," and they hate spending a Sunday cross-referencing a city tax PDF with a payout export. They want to pay someone $30 and never think about it.
- **Rough TAM reasoning:** ~2.25M US Airbnb listings + ~650K VRBO; most hosts own 1–2 listings. Even if only the subset in non-auto-remit or city-portion jurisdictions is addressable — conservatively 300K–600K hosts — that's a multi-hundred-million-dollar fee pool at $30/mo.
- **Why now for them:** Cities turned on enforcement post-pandemic to claw back budget; audit letters and 10–25% penalties are landing now, and "didn't know" doesn't work.

## 5. Product sketch (MVP)

- Connect Airbnb + VRBO (CSV/email payout import to start; API later) and pull payout and reservation data per property.
- **Jurisdiction resolver:** enter the property address → tells the host exactly which taxes they owe, which Airbnb/VRBO already remit for them, and which they must file themselves. This alone is worth the signup.
- Auto-reconcile taxable base: gross rents + applicable fees − platform-collected amounts − exemptions, mapped to the local rate.
- Generate the filled return for the jurisdiction (PDF/portal-ready) with a clear "you owe $X, due [date]" summary.
- Filing calendar with deadline reminders per property per cadence (monthly/quarterly/annual, city and state separately).
- "Catch-up mode": surface unfiled prior periods and produce back-return packets for voluntary disclosure before an audit.

## 6. AI angle — what's load-bearing

Two places. First, the **jurisdiction rule engine**: parsing and keeping current 11,000+ city/county/state lodging-tax rules — who auto-remits, what base, what rate, what cadence, what form — is exactly the brittle, high-labor work that justified Avalara's price. LLMs turn ingesting and structuring a city tax ordinance from a manual research task into a pipeline. Second, **reconciliation**: messy OTA payout exports with inconsistent fee labeling get normalized to a correct taxable base. Strip the AI out and you're back to a human reading PDFs at $27/property — the product stops existing as a cheap self-serve tool.

## 7. Localization angle (if any)

N/A as a geography play — this is US-first by design; the value IS the per-jurisdiction US rule knowledge. The natural expansion is the same shape in other STR-heavy regulated markets (EU tourist tax, Mexican lodging tax, Australian state STR levies), but each is a distinct rule-set, not a translation. Don't dilute v1.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $19/mo per property (annual) / $24 monthly — deliberately undercutting Avalara's $27 and killing the $299 setup fee entirely. Multi-property hosts get a small discount.
- **ACV:** ~$230/yr for a typical 1–2 property host (~$300–350 ACV blended once 2-property households are mixed in).
- **Rough math to $1M ARR:** ~3,500 hosts × ~$24/mo blended ≈ $1.0M. Very reachable within the long tail.
- **Rough math to $5M ARR:** ~17K hosts, OR fewer hosts + an embedded "we file AND remit the payment for you" premium tier at +$10/property/mo, OR an annual income-tax-prep add-on (Schedule E reconciliation) at filing season.
- **Expansion path:** per-property count grows with the host; add remittance-as-a-service, audit-defense packet generation, and a CPA-referral marketplace. Compliance products have low churn because the fear doesn't go away.

## 9. Go-to-market wedge — first 100 customers

- **STR Facebook groups + subreddits:** r/AirBnB, r/ShortTermRentals, r/airbnb_hosts and the big regional host Facebook groups (some 50K+ members). Post the free "Does my city tax me, or does Airbnb?" lookup tool. The jurisdiction resolver is a viral lead magnet because the answer is genuinely unclear to hosts.
- **Scrape + target non-auto-remit jurisdictions:** Airbnb publishes where it does/doesn't collect. Build a list of cities where hosts are personally liable, find local host meetups/groups for those cities, and lead with "in [city], Airbnb does NOT file your tax — here's proof."
- **STR CPA / bookkeeper partnerships:** small accountants who serve hosts hate doing occupancy-tax grunt work. White-label or refer; they bring their whole book.
- **Avalara-complaint mining:** DM/reply to the documented G2/BBB complainers and the "MyLodgeTax billed me wrong" threads with a cheaper, no-setup-fee alternative.

## 10. Build complexity — justification

Medium. The web app, payout-import, reconciliation, and reminder calendar are off-the-shelf. The real work is the **jurisdiction rule library** — it's broad, not deep, and you don't need all 11,000 jurisdictions for v1; you launch with the top 20–30 STR cities/states where hosts are personally liable and expand. AI does the ingestion, but a human-in-the-loop must verify each jurisdiction's rules before it goes live (getting a tax number wrong is the whole risk). Estimate 12–16 weeks to a credible v1 covering enough jurisdictions to charge, then continuous coverage expansion.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Tax-prep software; not providing fiduciary tax advice. Standard disclaimers + "verify before filing." |
| Ethical — no harm / dark patterns | ✅ | Helps hosts comply; reduces penalty exposure. |
| Market exists (evidence above) | ✅ | Avalara charges for exactly this; millions of hosts; active city enforcement. |
| 1–5 person team can build this | ✅ | Solo/pair build; rule library is the scaling work. |
| Launchable with <$50K / ₹40L | ✅ | No capital intensity; main cost is founder time + LLM inference. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Fear + penalties + recurring time-suck. Felt every filing period; "didn't know" carries real financial pain. Not daily, which caps it below 17. |
| Demand evidence | 15 | 12/15 | Incumbent charging money + documented complaints + huge host count. Lacks a clean "subreddit full of people begging" thread, so not 13+. |
| Build feasibility | 15 | 10/15 | App is easy; the jurisdiction rule library is genuine, verification-heavy ongoing work. |
| Distribution clarity | 15 | 12/15 | Named channels, a viral lead magnet, and a list of liable cities. Conversion math realistic but unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked below incumbent; ACV modest, so $5M needs volume or upsell tiers. |
| Time to first revenue | 10 | 8/10 | Can pre-sell off the free lookup tool and file one host's first return within weeks of a working MVP. |
| Defensibility | 10 | 6/10 | Moat = accumulating verified jurisdiction rule library + host workflow lock-in. Copyable, but the rule coverage compounds. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone comfortable building an LLM ingestion pipeline AND willing to get deep in lodging-tax rules (or a tax-savvy advisor). Filing-accuracy is the whole product; sloppiness kills it.

### Key assumptions to validate (3–5)

1. **Assumption:** Self-managing 1–5 property hosts will pay ~$20/mo/property for occupancy-tax filing. **How to test:** Stripe-pre-sell against the free jurisdiction-resolver lead magnet; target 30+ paid pre-orders before full build.
2. **Assumption:** Enough hosts are in "you must file the city portion yourself" jurisdictions to be a real market (vs. Airbnb auto-remitting everything). **How to test:** Quantify liable-jurisdiction host counts from Airbnb's published coverage list + AirDNA city data.
3. **Assumption:** AI can ingest a jurisdiction's lodging-tax ordinance to a filing-ready rule with acceptable accuracy under human review. **How to test:** Build the pipeline for 10 cities, have a tax pro audit the output; measure error rate.
4. **Assumption:** Hosts trust a small new tool with a compliance-critical task. **How to test:** Offer "we generate, you file + verify" before "we file for you"; watch conversion to the auto-file tier.

### Risk flags

1. **Liability / accuracy risk:** A wrong filing that triggers a penalty is reputationally and possibly legally serious. Must position as software-assist with verification, carry disclaimers, and consider E&O insurance before offering full auto-remit.
2. **Platform dependency:** OTA payout-data access via CSV/email is fragile; an Airbnb API change or them expanding auto-remit coverage shrinks the wedge. Mitigate by also owning the income-tax/Schedule-E and audit-defense jobs.
3. **Coverage-vs-credibility tension:** Launch too few jurisdictions and you can't serve a given host; launch too many unverified and you ship errors. The rule library cadence is the make-or-break.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + lodging-tax advisor (or CPA co-founder)
Time to revenue:        8–12 weeks (pre-sell off lead magnet, file first returns shortly after MVP)
Capital to launch:      $5–15K ($ for LLM inference, a tax advisor's review hours, basic legal/disclaimers)
Top 3 assumptions to validate first:
  1. Hosts pay ~$20/mo/property — pre-sell 30+ via the free jurisdiction resolver
  2. Liable-jurisdiction host count is large enough — quantify from Airbnb coverage list + AirDNA
  3. AI rule-ingestion hits acceptable accuracy under human review — audit 10-city pipeline with a tax pro
Kill criteria:
  - Abandon if <10% of free-lookup users convert to a paid pre-order after 60 days
  - Abandon if Airbnb/VRBO expand auto-remit to cover the bulk of target jurisdictions, collapsing the wedge
  - Abandon if AI rule-ingestion error rate can't be driven low enough to file safely without per-return manual rework
```

## 15. Next step — 1-week validation sprint

- Day 1–2: Build the free "Does Airbnb file my lodging tax, or do I?" jurisdiction-resolver covering 15–20 top STR cities. Hard-code the rules — no full pipeline yet.
- Day 3–4: Drop it in 3–4 large STR Facebook groups + r/AirBnB / r/ShortTermRentals with "find out if you owe back taxes." Add a Stripe $19/mo "file it for me" pre-order button.
- Day 5: Decide go / no-go on **≥30 paid pre-orders** (or ≥10% of lookup users hitting the pre-order button). No paid intent off a genuine fear-driven lead magnet = the willingness-to-pay isn't there.

Falsifiable: paid pre-orders, not "people said it's useful."
