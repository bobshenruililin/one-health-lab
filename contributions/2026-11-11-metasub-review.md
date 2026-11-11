# MetaSUB proposal review: reproduce first, teach something specific

**Status:** AI-assisted review by Astra, 11 November 2026. Source checks completed; experiments below are proposed and unassigned. This is a response to the [team contributor's proposal](2026-11-11-metasub-hk-proposal.md), not a replacement for it or a team product decision.

## What changed after reading the sources

**The later years already have a publication.** Orr et al., *Spatial and temporal patterns of public transit aerobiomes*, published 19 January 2026, analyses 2017–2019 public-transit air, including Hong Kong. Its Methods and Data availability identify the same three BioProjects in the proposal. It studies bacterial/fungal composition and contamination controls. Simply adding those years or reclassifying their microbes is therefore not an established novelty claim. This does **not** settle whether a particular new resistance-gene analysis is novel. [Full paper](https://link.springer.com/article/10.1186/s40168-025-02303-7).

The same paper reports temperature and humidity metadata for a **selection** of sampling locations. Before importing outdoor weather, inspect its Table S1 for actual Hong Kong coverage. Neither complete local measurements nor their absence is established here. The proposal's 240-sample count and run-to-station mapping still need row-level reconciliation with exclusions and controls.

**Resistance-source inference is prior work too.** Leung et al. (2021) already analysed resistance-gene profiles and used SourceTracker with resistance-protein markers, not merely species composition, to estimate putative sources. Its Methods and Figures 4–6 provide the relevant baseline. The proposal's source-tracking idea should be framed as replication or a specified extension, not as the first such analysis. Estimated overlap with a reference source still does not demonstrate a particular gene's journey to a station or a passenger's infection. [Full paper](https://link.springer.com/article/10.1186/s40168-021-01044-7).

**The campaign requirements are now checked.** The [dated official-requirements summary](../docs/CHALLENGE_REQUIREMENTS.md) resolves the earlier rubric-access gap. A technically successful pipeline would still need an audience, a useful message and a campaign prototype. Research originality and campaign originality are different questions.

## Recommendation: test the learning encounter before scaling analysis

Keep this route open, but do not make eighty samples a prerequisite for discovering whether the campaign helps anyone. First try **“Choose the headline”**, a paper-card or simple screen encounter for a student reading an alarming microbial-DNA headline:

1. Show a card labelled **fictional teaching example, not a result from an MTR station**: “An analysis of an archived air sample returned a match to a resistance-related DNA sequence.”
2. Ask which headline the evidence supports: **A. Resistance-related DNA was detected in this sample. B. Passengers were infected here. C. This is the most dangerous station.** Ask the learner to explain the choice before revealing an answer.
3. Reveal **A**, qualified by the test's quality controls and annotation method. B needs evidence of infection and linkage; C needs comparable sampling and a valid risk measure. The finding alone establishes neither safety nor danger. Do not put fictional results on a real station map.
4. Give a second fictional case with a different sampling date or method. Ask what is known, what is missing and what would be needed for a fair comparison. This checks transfer of understanding rather than recall of “choose A”.

**Proposed comparison:** give a few consenting adult students either this encounter or a plain explanation of the same facts, then ask both groups the new-case question. Record anonymous correct explanations and unsupported danger/safety claims. A tiny convenience sample is formative feedback, not proof of learning effectiveness or health benefit. The full campaign would also need expert-reviewed One Health context and an evidence-based action relevant to its audience; this encounter alone is not a complete AMR campaign.

**What would change the recommendation:** if the encounter adds confusion or no useful understanding over the plain explanation, revise or stop it before investing in more sequencing analysis. If existing published outputs serve the lesson, use appropriately permitted, attributed outputs rather than manufacturing a need for a new pipeline. No AI model is needed for this first test.

## Only then: a bounded technical pilot

Before a two-sample pilot, agree a specific output and a storage/memory/runtime ceiling. Reconcile sample IDs, sampling unit, exclusions, controls and reuse terms. Choose comparison samples with a recorded reason, preserve database/tool versions and report failures as well as usable reads. Account for database and temporary-file storage, not only downloaded reads. Do not publish raw reads, including potentially human-derived reads, in this repository.

Treat the published output as a method-dependent reference, **not an answer key**: a changed classifier, database or contamination rule can change the result. A successful two-sample run establishes limited operational feasibility, not the validity of station rankings, year contrasts, gene-source assignments or an eighty-sample resource estimate. Missing controls or unexplained disagreement should pause biological interpretation, not be hidden by a clean map.

## Evidence and limits of this review

Read the unchanged source PDF version dated `2026-11-11T00:41:40Z`; checked the two papers' relevant full-text methods/results and the official challenge page. No SRA reads, supplementary-table census, metagenomic pipeline or participant test was run. The original PDF was not edited or republished. Existing software verification is recorded separately in [VERIFICATION.md](../docs/VERIFICATION.md); it does not validate this new proposal.
