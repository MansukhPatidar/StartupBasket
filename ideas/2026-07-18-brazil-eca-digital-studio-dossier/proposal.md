---
title: "MenorSeguro — ECA Digital dossier for Brazil game studios"
slug: brazil-eca-digital-studio-dossier
date: 2026-07-18
category: Compliance / Brazil
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Proves a Brazilian studio met ECA Digital child-safety duties before ANPD sanctions start in November 2026."
tags:
  vertical: Compliance
  model: SaaS
  geography: LATAM
  secondary: [Multilingual, AI-agent, Compliance-driven, SMB, Solo-builder, Portuguese-first]
axes:
  problem: 16
  demand: 12
  build: 12
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# MenorSeguro

## 1. One-liner

Proves a Brazilian studio met ECA Digital child-safety duties before ANPD sanctions start in November 2026.

## 2. Trend signal — why now?

Brazil passed Law 15.211/2025 — the "ECA Digital," also called the Lei Felca — in September 2025. It became enforceable **17 March 2026**. It is the most aggressive child-online-safety regime outside the EU, and unlike the EU's, it has a hard sanctions date already on the calendar.

Three things converged in the last twelve months:

**The law landed with a broad scope and a short fuse.** ECA Digital applies to any digital product "direcionado ou de acesso provável por crianças e adolescentes" — directed at, *or of probable access by*, minors. That "provável acesso" standard is the whole story. It does not matter that a studio never marketed to kids. If minors plausibly play it, the studio is in scope. Obligations include reliable age verification (self-declaration is explicitly banned), parental supervision tools **on by default**, a prohibition on paid loot boxes, a ban on profiling-based ads to under-18s, and — critically for this product — mapping risks and preparing an impact report.

**ANPD moved from educational posture to enforcement posture.** On 22 December 2025 the ANPD approved its 2026–2027 priority map with child protection in digital environments as a central theme and **30 planned inspection and enforcement actions**. The agency had already shifted from "moderately active" to "very active," issuing BRL 98 million in fines between 2023 and 2025. The phased timeline is public: final guidelines August 2026, **administrative sanctions begin November 2026**, formal enforcement verification January 2027.

**The penalty is existential for a small studio, and the buyer pool is almost entirely small studios.** Fines run to BRL 50 million per infraction or 10% of Brazilian revenue, with suspension and prohibition from operating available for repeat offenders. Meanwhile Brazil has roughly 1,042–1,100 game studios and ~13,225 industry professionals, and **93% of the region's studios are small in scale**. The sector did USD $251.6M in 2023. So: a mandate designed with Meta and Roblox in mind, landing on a thousand companies with under ten people each.

The vendor market has already formed — and it formed above these buyers. k-ID raised $45M from a16z to sell youth-compliance infrastructure to game developers; Persona, Didit, and Shufti all publish Brazil ECA Digital age-assurance explainers as lead magnets. Every one of them sells the *identity verification transaction*. None of them sells the thing an ANPD inspector actually opens: the file proving you assessed your risk, made a decision, and configured your product accordingly.

Provenance:
  - Signal 1 (demand): ECA Digital enforceable 17 Mar 2026; obligations include age verification, default-on parental controls, loot box ban, and "mapear riscos e elaborar um relatório de impacto"; fines to BRL 50M or 10% of revenue — https://www.conjur.com.br/2025-out-22/impactos-do-eca-digital-no-segmento-de-jogos-eletronicos/ — 22 Oct 2025; and https://caputoduarte.com.br/lei-felca-eca-digital-15-211-2025-novas-obrigacoes-e-impactos-praticos-para-estudios-de-jogos-brasileiros/ — 2026
  - Signal 2 (economic): ANPD approved 2026–2027 priority map 22 Dec 2025 with child protection central and 30 planned inspection/enforcement actions; sanctions begin Nov 2026, enforcement verification Jan 2027 — https://www.mayerbrown.com/en/insights/publications/2026/04/enforcement-of-brazils-eca-digital-introduces-new-obligations-for-companies — Apr 2026; https://babl.ai/brazils-data-protection-authority-sets-new-oversight-priorities-adds-age-verification-to-regulatory-agenda/ — Dec 2025
  - Signal 3 (feasibility): Vendor market sells age-verification transactions to enterprises, not documentation to SMBs — k-ID raised $45M (a16z) for youth compliance infra with no size-differentiated offering; ~1,042 Brazilian studios, 93% small-scale — https://techcrunch.com/2024/06/25/a16z-k-id-game-developers-child-safety-regulations/ — 25 Jun 2024; https://www.abragames.org/uploads/5/6/8/0/56805537/af-iicenso-summary_2.pdf
  Category: Regulatory arbitrage

## 3. The opportunity

The gap is between what the law demands and what the market sells.

The law demands two different things. First, a **control**: block the kid, verify the age, turn on the parental tool. Second, a **record**: a documented risk assessment showing you evaluated whether minors probably access your product, what you found, and what you changed. Vendors sell the first. Nobody sells the second to a studio of six people.

That is not an accident. Age verification is a per-transaction business — it scales with user volume, so vendors chase products with lots of users. A Brazilian indie studio with 40,000 monthly players is a rounding error to k-ID's sales team and a rounding error to Persona's. But that studio has exactly the same "provável acesso" exposure as a big one, because the standard is about *whether minors plausibly access*, not *how many*.

So the small studio's realistic options today are: hire a Brazilian tech lawyer to write a bespoke adequação memo (expensive, one-time, stale the moment the product ships an update), or do nothing and hope the ANPD's 30 planned actions land on someone else. Most are doing the second. That is the wedge.

What a focused team does 10× better: turn a lawyer's six-week bespoke engagement into a structured product that interviews the studio about its actual game, produces the risk assessment and impact report in ANPD-legible Portuguese, flags the specific design features that violate the law (a paid loot box, a default-open chat, an ad SDK doing behavioral targeting), and regenerates the whole dossier when the game changes. The lawyer writes prose. This writes an auditable file that stays current.

Important honesty about scope: this product does **not** verify ages. It should integrate with the vendors who do. Selling "we replace k-ID" would be a lie and a losing fight. Selling "we prove you did the assessment, and we tell you which vendor you actually need" is a real, unoccupied position.

## 4. Target market

- **Primary customer:** Founder, studio head, or lone technical lead at a Brazilian game or kids-app studio with 3–30 employees and BRL 500K–15M annual revenue. Mobile-first or Steam/console indie. They have a Brazilian CNPJ and Brazilian players. They do not have a compliance person, and their "legal" is a family lawyer or a startup firm on retainer for contracts, not regulatory work.
- **Why they buy:** Not because they love kids' safety policy — because sanctions start in November 2026 and they cannot articulate whether they are in scope. The "provável acesso" standard is genuinely ambiguous for a mid-core mobile game with an anime art style and a 16+ store rating. Their pain is not "I need age verification," it is "I don't know if this law applies to me, and if an inspector shows up I have nothing to hand them." That is a specific, dated, recurring anxiety.
- **Rough TAM reasoning:** ~1,042–1,100 Brazilian game studios (Abragames/ApexBrasil census), 93% small-scale. Expand the definition beyond games — the law covers social features, e-commerce, streaming, and generative AI products with probable minor access — and the reachable Brazilian SMB pool is plausibly 3,000–6,000 companies. At a realistic 8–12% penetration of a 4,000-company serviceable pool, that is 320–480 customers. This is a sub-$5M ARR business by construction. That is the point, not a flaw.
- **Why now for them:** The grace period ended 17 March 2026. Final ANPD guidelines publish August 2026. Sanctions begin November 2026. A studio reading this in July 2026 has roughly four months and a published enforcement calendar telling them exactly when the clock runs out. There has never been a better-dated urgency window in this portfolio.

## 5. Product sketch (MVP)

- **Scope interview** — a structured Portuguese questionnaire about the product: genre, art style, store rating, chat and UGC features, ad SDKs, monetization mechanics, actual player age telemetry if available. Output is a defensible in-scope / out-of-scope determination with the reasoning written out, not a yes/no badge.
- **Risk assessment + impact report generator** — produces the `relatório de impacto` the law requires, in ANPD-legible Portuguese, structured to the statute's own categories, with the studio's specific facts in it.
- **Design violation flags** — scans the studio's declared feature set against the hard prohibitions: paid loot boxes in a minor-accessible game, profiling-based ads to under-18s, parental controls not default-on, self-declaration age gates. Each flag cites the article of the law and states the concrete product change required.
- **Vendor routing** — tells the studio whether they actually need a paid age-assurance vendor and which tier, or whether a lighter mechanism satisfies their risk level. Honest routing, including "you don't need one."
- **Living dossier** — the studio re-runs the assessment when the game ships a feature. Every version is timestamped and retained, so the file shows a history of continuous compliance rather than a single panic document dated the week before an inspection.
- **Inspector packet export** — one PDF bundle: scope determination, impact report, remediation log, current control configuration. The thing you hand over when someone asks.
- **Regulatory changelog** — when ANPD publishes its August 2026 final guidelines, every customer's dossier is flagged for the specific sections now affected.

## 6. AI angle — what's load-bearing

Remove the AI and this is a Typeform that emits a Word template. Nobody pays for that. The AI does three jobs that are genuinely hard:

**Scope reasoning under ambiguity.** "Provável acesso" is a judgment call with no bright line. Determining whether a given game plausibly attracts minors requires weighing genre, art direction, store rating, marketing channels, chat design, and observed player behavior into a written argument. That is a reasoning task over messy, product-specific inputs — exactly what a model does well and what a static form cannot do at all.

**Translating product facts into statutory language.** The studio says "we have a gacha with a paid pull and a pity counter." The output has to be a paragraph that says which statutory prohibition that implicates and why, in the register a Brazilian regulator reads. That mapping — vernacular game-design vocabulary to legal category — is the core work, and it is the part a lawyer bills six weeks for.

**Keeping the corpus current.** ANPD guidance, Decree 12.880/2026, and the August 2026 final guidelines are moving. Ingesting new regulatory text and re-deriving which existing customer dossiers are now stale is continuous work no small team does by hand across 400 customers.

## 7. Localization angle

This is a localization play end to end — it is not a global product with a Brazil setting.

- **Language:** The deliverable must be native Brazilian Portuguese in regulatory register. An English-first tool with translated output produces documents that read as foreign to an ANPD reviewer. This alone deters US vendors from serving the low end.
- **Regulatory specificity:** The moat is knowing Law 15.211/2025, Decree 12.880/2026, ANPD's priority map, and how ECA Digital interacts with LGPD's existing children's-data provisions. That knowledge is worthless in every other market and essential in this one.
- **Pricing rails:** BRL pricing via Pix and boleto, not USD credit-card subscriptions. A BRL 400/mo tier is viable where a $199/mo tier is not — and the small studios in question genuinely cannot expense USD SaaS easily.
- **Distribution:** Abragames, ASC Jogos, regional studio associations, Gamescom Latam, and the Brazilian gamedev Discord/Telegram ecosystem are the real channels. These are relationship networks, not ad platforms.

There is a second-order expansion: the EU, UK, and several US states are legislating adjacent child-safety duties. The dossier structure generalizes even though the statute does not. But Brazil first, properly, for at least 18 months.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers in BRL. **Base BRL 390/mo** (~$70) — one product, scope determination, impact report, quarterly refresh. **Studio BRL 890/mo** (~$160) — up to five products, design violation flags, living dossier with version history, regulatory changelog. **Publisher BRL 2,400/mo** (~$430) — unlimited products, multi-studio portfolio view, priority support during an active inspection.
- **ACV:** Blended ~BRL 9,600/yr (~$1,730). Assumes tier mix skewing to Base and Studio.
- **Rough math to $1M ARR:** ~USD $1M ≈ BRL 5.5M. At BRL 9,600 ACV that is **~570 customers**. Against a serviceable pool of 3,000–6,000 Brazilian companies in scope, that is 10–19% penetration. Achievable but not trivial — this is the number to be honest about.
- **Rough math to $5M ARR:** Requires either geographic expansion (the adjacent LATAM child-safety statutes, or an EU/UK dossier product) or moving upmarket into publishers and platforms at 5–10× ACV. Brazil SMB alone plausibly caps around $1.5–2M ARR. I would plan for $1.5M in Brazil and treat $5M as contingent on a second jurisdiction.
- **Expansion path:** Product count is the natural usage meter — a studio with one game becomes a studio with four. Inspection-support becomes a paid service during an actual ANPD action. The regulatory changelog becomes the retention mechanism: once your dossier lives here, regenerating it elsewhere costs more than the subscription.

## 9. Go-to-market wedge — first 100 customers

- **The Abragames member roster is a published list.** Abragames is the Brazilian game developer association with a public member directory and an active newsletter. Build the free scope-check tool, take it to Abragames as a member benefit, and get one email to the roster. The association has an incentive to help members survive a law that threatens them. Target: 30–40 customers from association channels.
- **Free scope-check as the entire top of funnel.** A studio's first question is "does this even apply to me?" Answer it free, in five minutes, with a real reasoned determination. Every studio that comes back "in scope" has just been told they have a November 2026 problem and no document. That is the highest-intent lead this market can produce. Expect the free tool to convert 8–15% to paid because the anxiety it creates is the product's own demand generation.
- **Gamescom Latam + BIG Festival, in person.** Brazilian gamedev is a conference-and-Discord culture, not a cold-email culture. Both events draw the exact buyer. A booth or even a hallway presence with a live scope-check demo, plus a talk titled roughly "you have four months and no dossier," is worth more than 2,000 cold emails. Target: 20–30 customers per event cycle.
- **Co-sell with Brazilian tech law firms.** Firms like Caputo Duarte already publish ECA Digital guidance aimed at game studios — they are producing the content because they want the engagements. But they cannot profitably serve a six-person studio at their hourly rate. Offer them a referral arrangement: they send the small accounts they'd otherwise turn away, and keep the enterprise work. Target: 15–25 customers.
- **Portuguese-language content on the exact search intent.** "ECA Digital meu jogo se aplica," "relatório de impacto ECA Digital," "loot box proibido Brasil." Low-volume, near-zero-competition, extremely high-intent Portuguese queries. Slow channel, but it compounds and it is cheap.

## 10. Build complexity — justification

**Medium.** The stack is off-the-shelf: a structured interview flow, a document generation pipeline, a retrieval layer over Brazilian regulatory text, and PDF export. No novel infrastructure, no hardware, no custom models. What makes it Medium rather than Low is that the output has to be *correct* in a legal register — that requires building and maintaining a curated corpus of Law 15.211/2025, Decree 12.880/2026, and ANPD guidance, plus a review loop with an actual Brazilian lawyer before anything ships to a customer. Budget 10–14 weeks to a sellable v1 for a technical founder plus a part-time Brazilian legal advisor. The legal advisor is not optional; shipping confidently wrong compliance documents is the fastest way to kill this business.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance documentation tooling. Must position as software, not as practicing law — same line Brazilian LGPD tooling vendors already operate on. |
| Ethical — no harm / dark patterns | ✅ | The product's entire function is helping companies actually protect minors. Strongly aligned. |
| Market exists (evidence above) | ✅ | ~1,042 studios, dated sanctions calendar, funded vendor category, law firms publishing to attract the work. |
| 1–5 person team can build this | ✅ | Technical founder + part-time Brazilian legal advisor. |
| Launchable with <$50K / ₹40L | ✅ | Main costs are legal review retainer and two conference appearances. Well under $50K. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Dated sanctions (Nov 2026), existential fines, and genuine scope ambiguity. Not 18+ because many small studios will rationally gamble that 30 inspection actions won't reach them — the pain is real but the urgency is probabilistic until the first small studio gets fined. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: funded vendor category, law firms marketing to the exact buyer, published enforcement calendar, hard studio counts. Docked because I found no verbatim Brazilian studio founders complaining about this — the direct customer-voice signal is inferred from lawyer marketing, not observed. |
| Build feasibility | 15 | 12/15 | Standard stack, but the regulatory corpus and legal review loop are real work and the correctness bar is high. 10–14 weeks, not 6. |
| Distribution clarity | 15 | 12/15 | Abragames roster, two named conferences, law firm referrals, free scope-check funnel. Concrete and named. Docked because association access is a relationship that has to be earned, not a list you can scrape. |
| Revenue mechanics | 15 | 11/15 | Pricing fits BRL wallets and ACV is defensible, but ~570 customers for $1M ARR is 10–19% of the serviceable pool. That is an aggressive penetration assumption for a bootstrapped team. |
| Time to first revenue | 10 | 8/10 | The deadline sells for you. Pre-selling during the build against a November date is realistic; first revenue in 6–10 weeks. |
| Defensibility | 10 | 5/10 | Execution and regulatory-knowledge moat only. A funded vendor could add a documentation module. Real protection is the accumulated dossier history and being the name Abragames members already trust — both of which take a year to build. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs a builder who can ship a document-generation product **and** either has Brazilian regulatory fluency or can secure a Brazilian lawyer as a committed advisor with equity. A foreign founder without a Portuguese-native partner should not attempt this — the output register is the product.

### Key assumptions to validate

1. **Assumption:** Small Brazilian studios believe they are in scope and are anxious about it. **How to test:** Run the free scope-check with 30 Abragames-adjacent studios. Measure what fraction self-report as unsure of their status before running it. If most say "we already know we're fine," the anxiety thesis is wrong.
2. **Assumption:** They will pay BRL 390–890/mo rather than a one-time lawyer memo. **How to test:** Offer 20 studios a pre-sale at BRL 290/mo locked for 12 months, payable now, delivery in 10 weeks. Ten paid pre-sales validates. Fewer than four kills the pricing model.
3. **Assumption:** ANPD enforcement actually reaches small studios rather than stopping at app stores and platforms. **How to test:** Track ANPD's published actions from November 2026. The agency's phase 1 explicitly prioritizes app stores and operating systems — if phase 2 never descends to individual small studios, urgency evaporates.
4. **Assumption:** Abragames or a comparable association will grant channel access. **How to test:** Two conversations. Ask directly for a member-benefit arrangement. A no from both closes the cheapest channel and the distribution score drops materially.

### Risk flags

1. **Regulatory timing risk:** The enforcement calendar could slip. Brazilian regulators have delayed before, and ANPD has openly limited enforcement capacity. If sanctions slide from November 2026 to late 2027, the urgency that drives the entire sales motion softens for a year.
2. **Enforcement-target risk:** ANPD's stated phase 1 is app stores and operating systems — the giants. It is entirely possible the agency never meaningfully pursues six-person studios, in which case rational buyers correctly ignore the law. This is the single most dangerous assumption in the proposal.
3. **Vendor encroachment:** k-ID has $45M and already sells to game developers. If they ship a self-serve documentation tier in Portuguese, the differentiated position narrows fast. The defense is the low end they have no incentive to serve — but that is a bet on their priorities, not a moat.
4. **Liability exposure:** Generating compliance documents that later prove inadequate in an actual ANPD action invites blame and possibly claims of practicing law without a license. Requires careful terms, disclaimed scope, and lawyer-in-the-loop review on the templates.
5. **Market ceiling:** Brazil-only realistically caps near $1.5–2M ARR. That is a fine bootstrapped outcome and a poor one if the builder wants $5M without committing to a second jurisdiction.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with a committed Brazilian legal
                        advisor (equity, not hourly). Portuguese-native output
                        is non-negotiable.
Time to revenue:        6–10 weeks via pre-sales against the November 2026 date
Capital to launch:      $12–20K (legal retainer + two conference appearances)
Top 3 assumptions to validate first:
  1. Scope anxiety is real — free scope-check with 30 studios, measure the
     fraction that self-report as unsure before running it
  2. Recurring beats one-time — 20 pre-sale offers at BRL 290/mo paid upfront;
     need 10 conversions
  3. Enforcement descends to small studios — track ANPD published actions from
     Nov 2026; phase 1 targets app stores, not indies
Kill criteria:
  - Abandon if fewer than 4 of 20 pre-sale offers convert
  - Abandon if ANPD's first two enforcement waves (Nov 2026 – Mar 2027) contain
    zero actions against companies under 50 employees
  - Abandon if k-ID or a comparable funded vendor ships a Portuguese self-serve
    documentation tier under BRL 500/mo before v1 launches
  - Abandon if both Abragames and ASC Jogos decline a channel arrangement and
    no substitute association access emerges within 60 days
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free scope-check as a manual service, not software. Take the ECA Digital scope criteria, write the determination logic by hand, and produce three real scope determinations for three real Brazilian studios sourced through gamedev Discords and Abragames contacts. The output has to be good enough that a lawyer would not wince at it.
- **Day 3–4:** Contact 25 small Brazilian studios directly. Lead with the free determination, not a pitch. Record two numbers: how many did not know their status before the check, and how many asked "what do I do about it" unprompted. The second number is the real demand signal.
- **Day 5:** Make the pre-sale offer to everyone who came back in-scope. BRL 290/mo, 12 months locked, paid now, delivered in 10 weeks.

**Falsifiable outcome:** Of 25 studios contacted, at least 15 engage with a free scope check, at least 10 of those did not previously know their status, and at least 3 convert to a paid pre-sale within the week. Hit all three and build. Miss the pre-sale number and the pain is real but not yet purchase-motivating — which means waiting for the first ANPD action against a small studio and revisiting.
