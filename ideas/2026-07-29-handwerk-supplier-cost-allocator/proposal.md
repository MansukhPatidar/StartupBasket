---
title: "KommNr — job-cost allocator for German trades firms"
slug: handwerk-supplier-cost-allocator
date: 2026-07-29
category: TradeTech / Germany-SMB — SHK, Elektro & Bau Firms (8–25 employees, €1.5–5M revenue)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Reads every wholesaler invoice, figures out which job the material actually went to, and finally makes Nachkalkulation happen."
tags:
  vertical: TradeTech
  model: SaaS
  geography: EU
  secondary: [AI-agent, Compliance-driven, SMB, Workflow-automation, Multilingual]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# KommNr — job-cost allocator for German trades firms

## 1. One-liner

Reads every wholesaler invoice, figures out which job the material actually went to, and finally makes Nachkalkulation happen.

## 2. Trend signal — why now?

Three things landed at once in the German trades market.

**One: the money stopped being forgiving.** Insolvencies in German Handwerk rose 13.3% in 2025 to 4,950 cases — the highest level in more than ten years (2024: 4,370), per [Handwerksblatt](https://www.handwerksblatt.de/betriebsfuehrung/handwerk-umsaetze-schwach-insolvenzen-auf-zehnjahreshoch). Construction runs 26.7 insolvencies per 10,000 businesses in Q1 2026. Small craft businesses under 5 employees took a 15.1% revenue decline in 2024. When margins were fat, not knowing which jobs made money was survivable. It isn't now.

**Two: everyone agrees the fix is Nachkalkulation, and almost nobody does it.** Nachkalkulation — comparing what you quoted (Soll) against what the job actually cost (Ist) — is the standard prescribed remedy in every German trades publication. `handwerk.com` calls operating without it "Blindflug." And yet: per a Bitkom 2025 study cited by [schaffsch.de](https://schaffsch.de/blog/nachkalkulation-handwerk-rechnungszuordnung), 72% of Handwerksbetriebe name "zu beschäftigt" as the reason they skip it.

**Three — and this is the actual insight — the reason it fails is not the software.** Every incumbent already ships a Nachkalkulation module: openHandwerk, HERO, Moser, Bosch OfficeOn, STREIT, KWP. The module is not the bottleneck. The bottleneck is one step upstream:

> "Nachkalkulation im Handwerk scheitert nicht am Willen und nicht an fehlender Software. Sie scheitert daran, dass Eingangsrechnungen von unzähligen Großhändlern nicht automatisch den richtigen Projekten zugeordnet werden können."
> — [schaffsch.de](https://schaffsch.de/blog/nachkalkulation-handwerk-rechnungszuordnung)

Every Nachkalkulation module in Germany has an empty Ist-Kosten column, because filling it requires a human to hand-allocate supplier invoices to jobs. That human doesn't have time. So the module sits unused and the shop keeps flying blind.

> **Sourcing note:** The 5–15 min/invoice, 40–55% material-cost, and €40–55K loss figures below come from schaffsch.de, a vendor blog arguing for its own product. They are directionally consistent with the independent statistics above but are **not independently verified** — treat them as a hypothesis to test in the validation sprint, not as established fact. This is the main reason confidence is Medium, not High.

```
Provenance:
  - Signal 1 (Demand): 72% of German trades firms skip Nachkalkulation citing "too busy" (Bitkom 2025, cited); every major Handwerkersoftware ships an unused Nachkalkulation module — https://schaffsch.de/blog/nachkalkulation-handwerk-rechnungszuordnung — 2026-07-29
  - Signal 2 (Feasibility): Multimodal LLM pricing collapsed — Gemini 2.5 Flash-Lite fell from $0.10/$0.40 to $0.05/$0.20 per 1M tokens; document-matching across heterogeneous invoice layouts is now cents per invoice, where rule-based tools (Make/Zapier/n8n) fail on "feste Felder an festen Stellen" — https://devtk.ai/en/blog/gemini-api-pricing-guide-2026/ — 2026-07-29
  - Signal 3 (Economic): German Handwerk insolvencies +13.3% in 2025 to 4,950, a ten-year high; construction at 26.7 per 10,000 businesses in Q1 2026; sub-5-employee firms -15.1% revenue in 2024 — https://www.handwerksblatt.de/betriebsfuehrung/handwerk-umsaetze-schwach-insolvenzen-auf-zehnjahreshoch — 2026-07-29
  Category: Workflow automation
```

## 3. The opportunity

The German Handwerkersoftware market is crowded at the front of the job lifecycle and empty at the back.

Count the competition on quoting alone: Plancraft, Craftnote, sevdesk, Meisterox, Turboangebot, Sprechnung, proangebot, Angebotsmeister, workcraft, craftivo — all selling AI Angebot generation at €12–80/mo. That fight is over and the prize is small.

Now count the competition on **automatic supplier-invoice-to-job allocation**: effectively zero, as a standalone. The big ERPs (Moser, STREIT, KWP, pds, TAIFUN) have the *feature* — an operator can manually assign an invoice to a project, and can split one invoice across several sites. What none of them has is the thing that makes the feature usable: a system that does the allocation *for you* when the Kommissionsnummer is missing, wrong, or written differently by every fitter on the crew.

The incumbents' answer to that is the UGL/IDS/Datanorm interface stack — structured order data flowing between wholesaler and trade software. The interfaces genuinely work. They also don't solve this, for a reason that's easy to miss: the failure is human, not technical. From the research:

- Commission numbers are "missing or incorrect" — a common problem
- "Different employees use different naming conventions" for the same job
- Uniform assignment criteria break down between office ordering and a fitter reordering directly from the site

A rigid interface cannot repair a reference number that was never entered. An LLM that has seen this shop's last 400 invoices, knows its active jobs, knows which fitter works which site, and knows that "Müller Bad OG" and "BV Müller 2.OG" are the same job — can.

That's the 10× gap. Not a better Nachkalkulation report. The missing input to everyone's Nachkalkulation report.

## 4. Target market

- **Primary customer:** Owner or office manager (Bürokraft / kaufmännische Leitung) of an SHK, Elektro, or Bau firm in Germany with **8–25 employees** and €1.5–5M annual revenue. They buy from 3–7 wholesalers (GC-Gruppe, Sonepar, UNI ELEKTRO, Richter+Frenzel, plus OBI/Bauhaus for oddments) and process 30–100 supplier invoices a month.

- **Why they buy:** Because the owner cannot answer "did we make money on the Müller job?" and it's starting to matter. The office person spends her afternoons opening PDFs from five different wholesalers, each with its own layout and article naming, trying to figure out which Baustelle a box of fittings went to. She gets partway, gives up on the ambiguous ones, dumps them into a generic Material account, and the Nachkalkulation column stays empty. Material is the single largest cost line in an SHK business — reportedly 40–55% of revenue — so the unallocated bucket isn't a rounding error, it's most of the cost base.

- **Rough TAM reasoning:** Germany has 1,038,126 registered Handwerk businesses ([ZDH](https://www.zdh.de/daten-und-fakten/kennzahlen-des-handwerks/)) employing ~6M people; ~517,000 people work in the electrical trades alone. Firms in the 8–25 employee band across SHK, Elektro, and Bau are a minority of that count but the overwhelming majority of the material spend. A conservative serviceable slice is 30,000–50,000 firms — big enough that 600 customers is under 2% penetration, small enough that no VC-scale player will bother.

- **Why now for them:** The insolvency numbers are personal now. Their competitors are going under. Material prices swing hard enough (copper especially — quoted purchase price can rise between Angebot and execution) that yesterday's calculation assumptions are actively wrong. And the E-Rechnung mandate has already forced their supplier invoices into structured electronic formats, which means the input to this product is arriving in their inbox as machine-readable data whether they wanted it or not.

## 5. Product sketch (MVP)

- **One inbox, all wholesalers.** Forward (or auto-fetch) supplier invoices from every wholesaler to one address. ZUGFeRD/XRechnung XML, PDF, and photographed paper all accepted.
- **Line-item job allocation, not document-level.** Each position on the invoice gets assigned to a job — because one invoice routinely covers three sites. Splitting is the normal case, not the exception.
- **Confidence-scored suggestions with a review queue.** High-confidence allocations post automatically; ambiguous ones surface in a queue with the AI's reasoning and the top 3 candidate jobs. The office person confirms with one click instead of investigating from scratch.
- **Learns this shop's vocabulary.** Every correction teaches it that "Müller Bad OG" = job 2026-114, that Fitter Kowalski's orders default to the Neubau site, that this wholesaler puts the Kommission in the header and that one buries it in the line text.
- **Soll-Ist per job, live.** Quoted material cost versus actual, updating as invoices land — not six weeks after final invoicing when it's too late to do anything.
- **Overrun alarm mid-job.** Push notification when a running job crosses its quoted material budget, while you can still raise a Nachtrag.
- **Export into what they already run.** Clean allocated cost data out to DATEV, sevdesk, Lexware, and the major Handwerkersoftware. We fill the Ist-Kosten column; their existing tools can render it.
- **The quarterly reckoning.** A plain-language report: these jobs made money, these lost money, this customer type is consistently underquoted, your Stundensatz assumption is off by X.

## 6. AI angle — what's load-bearing

Remove the AI and this product is a data-entry job — which is precisely why it doesn't exist today.

The core task is fuzzy entity resolution across heterogeneous, adversarially inconsistent documents. Concretely, the system must decide that line item "T-Stück 22mm Kupfer, Pos. 14" on a Richter+Frenzel invoice, ordered on a Tuesday by a fitter who typed the Kommission as "Bauvorhaben Müller", belongs to the job the office calls "Sanierung Müller, Hauptstr. 12, OG-Bad."

No rule engine does this. The research is explicit that Make, Zapier, and n8n fail here because they depend on "feste Felder an festen Stellen" — fixed fields in fixed positions. Every wholesaler uses different layouts, different article naming, different reference systems, and some pass the Kommissionsnummer while others don't. That's the exact shape of problem where rules break and language models excel.

Three things are genuinely load-bearing:

1. **Layout-agnostic extraction** — reading any wholesaler's format without a per-supplier template, including photographed paper receipts from the builders' merchant.
2. **Contextual matching under missing keys** — resolving allocation when the reference is absent or wrong, by reasoning over job addresses, active site list, order dates, fitter assignment, and material plausibility (a boiler flue doesn't belong to a bathroom refit).
3. **Per-tenant learning** — each correction compounds into a shop-specific vocabulary that a generic tool can never have.

And the economics only just arrived. Gemini 2.5 Flash-Lite dropped to $0.05/$0.20 per 1M tokens in 2026. At 30–100 invoices/month per shop, inference is cents per customer per month against a €149–349 price point. Two years ago the cost structure alone would have killed this.

## 7. Localization angle

Germany-first, and deeply so — this is not a global product with German strings.

- **Language:** The entire matching problem is German trade vocabulary. Article descriptions, abbreviations, regional naming, compound nouns that fitters shorten inconsistently. Models handle German well; the domain vocabulary is the work.
- **The wholesaler landscape is specifically German.** GC-Gruppe, Sonepar, UNI ELEKTRO, Richter+Frenzel and their formats, plus the UGL/IDS/Datanorm/OCI interface stack. Every one of these connections is a local asset that does not transfer.
- **Format compliance:** ZUGFeRD and XRechnung are German/EU-specific structured invoice standards. GoBD governs how records must be retained. Handling these natively is table stakes for credibility and is a real barrier to a US entrant.
- **Pricing fits:** German trades firms of this size already pay €20–80/mo for Handwerkersoftware and separately pay a Steuerberater. €149–349/mo for a tool that quantifies job profitability sits comfortably inside their existing spending frame.
- **Distribution is local:** Handwerkskammern, Innungen, Fachverbände (ZVSHK, ZVEH), and the trade press are real, reachable channels with genuine authority over this audience.

Expansion path: Austria and Switzerland share the language, much of the wholesaler structure, and similar trade organization. Same product, modest adaptation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers by invoice volume — **€149/mo** (up to 50 invoices/mo, ~8–12 employees), **€249/mo** (up to 150, the core segment), **€349/mo** (150+, multi-location). Annual prepay at 10 months for 12.
- **ACV:** ~€2,700 blended (€225/mo average), assuming mix skews to the middle tier.
- **Math to $1M ARR:** ~340 customers at €249/mo = €1.02M ARR. In a serviceable base of 30,000–50,000 firms, that's roughly 1% penetration.
- **Math to $5M ARR:** ~1,550 customers at a blended €270/mo. Requires two things to be true: (a) at least one channel partnership with a Fachverband or wholesaler group delivering steady inbound, and (b) DACH expansion into AT/CH. Achievable in 3–4 years with a team of 4–6. Not a two-year sprint.
- **Gross margin:** Strong. Inference is cents per shop per month; the real cost is support during onboarding.
- **Expansion path:** Start at material-cost allocation. Grow ACV by adding (1) labor-hour allocation from time tracking, closing the full Soll-Ist picture; (2) subcontractor invoice allocation; (3) a pricing-intelligence layer that tells a shop its quoted hourly rate is below what it actually costs — the highest-value output and the one they'd pay most for; (4) per-seat charges for multi-location firms.

The honest constraint: this is a mid-hundreds-of-euros product in a finite German market. It is an excellent €2–4M ARR business for 3–5 people. It is not a €50M business, and anyone pitching it as one is lying.

## 9. Go-to-market wedge — first 100 customers

**1. The Steuerberater and Handwerks-Berater channel (customers 1–30).** Tax advisors and trades consultants specializing in Handwerk already tell these shops "you need to do Nachkalkulation" and then watch them not do it. We're the thing that makes their advice executable. There are a few hundred consultants who specialize here and they're findable via DATEV's advisor directory and Handwerkskammer consultant listings. Approach 60, sign 10 as referral partners at 20% recurring, each with 15–40 Handwerk clients. This is the highest-conviction channel: warm intro, trusted source, and the advisor's own advice gets validated.

**2. Direct outreach with a done-for-you proof (customers 30–70).** The demo that closes this sells itself. Ask a prospect for last month's supplier invoices — a single email attachment they already have. Run them. Come back with: "Here are your 47 invoices allocated to 12 jobs. Three of those jobs are over their quoted material budget. Job 2026-089 is €4,200 underwater and you didn't know." That's not a demo, that's a finding about their business. Source targets from Handwerkskammer registries and Wer-liefert-was, filter to SHK/Elektro/Bau at 8–25 employees, run 400 with the free-analysis offer. A 10% take rate on the free analysis and 30% analysis-to-paid gets ~12 customers per 400 approached.

**3. Fachverband and Innung partnerships (customers 70–100+).** ZVSHK (plumbing/heating) and ZVEH (electrical) run regional Innungen with member newsletters, trade evenings, and Betriebsberater whose job is member profitability. A workshop titled "Warum Ihre Nachkalkulation nicht funktioniert" fills rooms — the pain is universal and publicly acknowledged in their own trade press. One regional Innung with 200 members converting at 5% is 10 customers, and it repeats across regions.

**4. Trade press and the incumbent's blind spot.** handwerk.com, Handwerksblatt, and the SHK/Elektro trade press publish constantly on Nachkalkulation. Every one of those articles ends with "so use Nachkalkulation software" — and none confronts why shops that own the software still don't do it. A well-argued piece naming the real bottleneck lands in a conversation that's already running, with a built-in audience.

## 10. Build complexity — justification

**Medium.** Roughly 12–16 weeks to a credible v1 for a pair.

Off-the-shelf: document extraction and matching (multimodal LLM APIs), email ingestion, standard web stack, ZUGFeRD/XRechnung parsing (mature open libraries exist).

Custom work, and it's real: the matching pipeline with calibrated confidence scoring; the per-tenant learning loop that turns corrections into durable shop-specific rules; a review queue whose UX is fast enough that the office person prefers it to her current process; and export adapters for DATEV plus 2–3 Handwerkersoftware systems. Wholesaler-side ingestion variety is grinding work — each new supplier format is a test case, not a code change, but you need a corpus.

The genuine risk isn't building it, it's accuracy. Below roughly 85% auto-allocation the product creates work rather than removing it, and you can't know where you land until you've run real invoices from real shops. That's why the validation sprint below is built entirely around measuring exactly that number before writing production code.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Processing a business's own supplier invoices. GoBD retention rules apply and are well-documented; no licensing needed. |
| Ethical — no harm / dark patterns | ✅ | Gives small firms cost visibility their larger competitors already have. The failure mode is a wrong allocation, surfaced and correctable, not a hidden harm. |
| Market exists (evidence above) | ✅ | Every incumbent ships the downstream module; the trade press documents the pain continuously; insolvency data shows the cost of ignoring it. |
| 1–5 person team can build this | ✅ | Pair for 12–16 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | ~€25–35K: two builders' time, inference, and travel to Innung events. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Material is the largest cost line and it's flying unmeasured, during a ten-year-high insolvency wave. Docked 3 because it's a slow bleed, not a deadline — nobody gets fined on Friday for skipping Nachkalkulation, which weakens urgency versus a compliance product. |
| Demand evidence | 15 | 12/15 | Strong and multi-sourced: every incumbent built the module, 72% skip it, trade press covers it relentlessly, insolvency data is independent and hard. Docked because the sharpest quantitative claims trace to a single vendor blog and I have no verbatim customer quotes — the forum sources were inaccessible. |
| Build feasibility | 15 | 11/15 | Standard stack plus LLM APIs, but accuracy tuning across many wholesaler formats and a learning loop is genuine engineering. 12–16 weeks, not 6. |
| Distribution clarity | 15 | 12/15 | Named channels with named organizations (ZVSHK, ZVEH, Handwerkskammern, DATEV advisor directory) and a demo that produces a finding rather than a pitch. Docked because German trades are conservative buyers and the advisor channel takes time to build. |
| Revenue mechanics | 15 | 12/15 | €149–349/mo is anchored against what they already pay for Handwerkersoftware and advisors; 340 customers to $1M is realistic in a 30–50K firm base. Docked because the ceiling is genuinely limited without DACH expansion. |
| Time to first revenue | 10 | 7/10 | The free-analysis offer converts fast once accuracy is proven, but v1 is 12–16 weeks and German SMB sales are not impulse purchases. Realistically 4–5 months to first euro. |
| Defensibility | 10 | 5/10 | Per-tenant learning data and accumulated wholesaler-format coverage compound into a real switching cost by month 12. But an incumbent ERP with distribution could bolt this onto their existing Nachkalkulation module — this is an execution-and-speed moat, not a structural one. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can build an accurate matching pipeline and someone who can walk into an Innung meeting and speak German trades fluently. The second is harder to hire than the first. Without a German trades insider on the founding team, the distribution plan above degrades into cold email.

### Key assumptions to validate

1. **Assumption:** An LLM pipeline hits ≥85% correct line-item job allocation on real, messy invoices from 5+ different wholesalers, with no per-supplier templates. **How to test:** Get 3 shops to hand over one month of real invoices plus their job list. Allocate manually to build ground truth. Run the pipeline. Measure. This is the single number the business lives or dies on — everything else is downstream.
2. **Assumption:** Shops will pay €249/mo for cost visibility rather than treating it as a nice-to-have. **How to test:** After delivering a free analysis, present the price immediately and ask for a signed LOI or deposit. Verbal interest is worthless here; only a signature counts.
3. **Assumption:** The vendor-sourced pain figures (5–15 min/invoice, 40–55% material cost) hold up in reality. **How to test:** Time the office person doing allocation during shop visits. Pull actual material-cost ratios from their own P&L.
4. **Assumption:** Steuerberater and Handwerks-Berater will refer rather than view this as a threat to their own advisory billing. **How to test:** Pitch 15 advisors directly. If fewer than 3 agree to a referral arrangement, channel 1 is dead and the GTM needs rebuilding.
5. **Assumption:** Incumbents won't ship this within 12 months. **How to test:** Monitor Plancraft, HERO, openHandwerk, and Moser release notes and trade-show announcements. Track whether any ships automatic (not manual) invoice-to-job allocation.

### Risk flags

1. **Incumbent absorption:** This is a feature-shaped opportunity sitting adjacent to modules that already exist. If HERO or openHandwerk ships automatic allocation into their installed base, the standalone case weakens badly. Mitigation is speed plus being materially better at the hard part — but this is the top risk and it should be watched monthly.
2. **Accuracy cliff:** There's no partial credit. At 90% auto-allocation the product is indispensable; at 70% it's a review queue that costs more time than it saves, and word travels fast in Innung circles. The entire thesis rests on landing above the threshold.
3. **Evidence quality:** The most quotable figures come from a vendor with an interest in the conclusion. The independent data (insolvencies, revenue decline, firm counts) supports the context but not the specific unit-of-pain claims. If real timing data shows allocation takes 2 minutes rather than 15, the ROI story shrinks by 7×.
4. **Conservative buyers, slow cycles:** German trades firms in this size band buy software slowly, through trusted intermediaries, often on a Meister's word rather than a demo. Cash planning must assume a longer ramp than a self-serve SaaS.
5. **Market ceiling:** Germany-only caps this in the low single-digit millions of ARR. That's a feature for a bootstrapper and a dealbreaker for anyone with venture expectations — know which you are before starting.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical pair, one of whom has German trades or
                        Handwerkersoftware background. Domain access to Innungen
                        matters more than raw engineering horsepower.
Time to revenue:        4–5 months (12–16 weeks to v1, then a fast-closing
                        free-analysis funnel)
Capital to launch:      €25–35K ($27–38K)
Top 3 assumptions to validate first:
  1. ≥85% line-item allocation accuracy on real multi-wholesaler invoices —
     measure against hand-built ground truth from 3 shops
  2. €249/mo willingness to pay — demand a signed LOI or deposit after
     delivering a free analysis, not verbal enthusiasm
  3. Steuerberater/Berater will refer — pitch 15, need 3+ to say yes
Kill criteria:
  - Abandon if allocation accuracy stays below 80% after tuning on invoices
    from 5+ wholesalers. Below that the product manufactures work.
  - Abandon if fewer than 3 of 15 shops given a free analysis will sign an LOI
    at €249/mo.
  - Abandon if a major incumbent (HERO, openHandwerk, Plancraft, Moser) ships
    automatic invoice-to-job allocation into their installed base before v1.
```

## 15. Next step — 1-week validation sprint

The entire week is aimed at one number: allocation accuracy on real data. Everything else is secondary.

- **Day 1–2 — Get real invoices.** Contact 10 SHK/Elektro firms in the 8–25 employee band through a local Innung or Handwerkskammer. Ask for one month of supplier invoices plus their job list, offering a free profitability analysis in exchange. Need 3 to say yes. If fewer than 3 of 10 will hand over invoices for a free analysis, the pain isn't as sharp as the trade press claims — that alone is a signal worth having on day 2.

- **Day 3–4 — Build ground truth, then measure.** Sit with each shop's office person and hand-allocate their invoices to jobs, recording how long each one actually takes (this simultaneously tests assumption 3). That's the answer key. Then run the same invoices through a prompted multimodal pipeline — no fine-tuning, no per-supplier templates, just careful prompting with job context. Score line-item accuracy against the key. Segment by wholesaler to find where it breaks.

- **Day 5 — Present findings and ask for money.** Walk each of the 3 shops through what the analysis found about their own jobs — including any that lost money. Then quote €249/mo and ask for a signed LOI.

**Go/no-go, both conditions required:**
1. Line-item allocation accuracy **≥80%** on real invoices with zero per-supplier tuning. Below that, the ceiling after tuning is unlikely to clear 85%.
2. At least **2 of 3** shops sign an LOI at €249/mo after seeing their own numbers.

Fail either and stop. The seductive failure mode here is a beautiful demo on clean invoices — the only invoices that matter are the messy ones where the Kommissionsnummer is missing, because those are the entire reason the product exists.
