# Proposal: Hong Kong MTR air metagenomics for an AMR awareness campaign

**Status:** incoming team proposal, not a selected project, independently validated analysis or completed campaign. This note does not replace the existing [team decisions](../docs/DECISIONS.md).

**Review update, 11 November:** [A separate source audit](2026-11-11-metasub-review.md) identifies a 2026 publication covering the later years and proposes a small learning experiment. [Official challenge requirements](../docs/CHALLENGE_REQUIREMENTS.md) are now checked. The synopsis below preserves what the contributor proposed; do not read its original unchecked leads as current conclusions.

## Attribution and provenance

This is an AI-assisted synopsis of the team-contributed **“Metagenomics with MetaSUB Hong Kong Data”** idea summary, dated 11 November 2026. Credit for the proposal belongs to its source contributor; this note is not the original report.

- [Original PDF in the team Drive](https://drive.google.com/file/d/1qwLXYLD7YaOBETu2I5QZUfzKNknjhn-Q/view)
- Source filename: `MetaSUB_HK_metagenomics_summary_EN.pdf`
- Source version inspected: Drive modification time `2026-11-11T00:41:40Z`; inspected 11 November 2026.
- Scope of the original synopsis: read and summarise the PDF; identify useful questions and limits. No raw sequence download, pipeline execution or independent source audit was performed at that stage. The linked review records subsequent source checks separately.
- The original PDF remains in Drive. This contribution contains no copy of the PDF, raw sequencing data, contact details or private account information.

## What the contributor proposes

Use historical Hong Kong MTR air metagenomic data to explore microbial composition and antibiotic-resistance-gene annotations, then turn defensible findings into a community AMR awareness campaign.

The PDF describes **240 air samples from 20 stations across 2017–2019**, associated with BioProjects `PRJNA561080`, `PRJNA1129830` and `PRJNA1132165`. These counts and access claims are reported by the source and have **not been independently verified for this note**.

Its suggested minimum scope is microbial classification and resistance-gene analysis for the 80 reported 2017 samples. Later years, assembly and source tracking are proposed extensions. The first practical experiment would be a two-sample pilot, compared with the published 2017 analysis, before committing to a larger pipeline.

The proposed campaign could explain what environmental microbial DNA does and does not tell us. It should not rank stations as dangerous or present detected DNA as evidence of infection risk.

## Why this is useful to the current exploration

- It provides a concrete environmental-data route with candidate accessions and a staged analysis plan.
- It connects analysis to a possible public-facing campaign rather than treating a research map as the whole intervention.
- It identifies issues to test early: computational resources, reference databases, contamination controls, sequencing differences and campaign interpretation.
- It is distinct from the existing repository's Hong Kong **E. coli plasmid-record** demo. The present code does not implement this MetaSUB proposal.

The team still needs to decide who the campaign serves, which misunderstanding it addresses, and what a participant should understand or do differently afterwards. An interesting dataset alone does not settle those choices.

## Claims to check before adopting the plan

1. **Data access and metadata:** verify sample/run relationships, downloadable reads, station labels, controls, exclusions and the actual relationship between the air studies and the proposed MetaSUB comparison.
2. **Prior work and novelty:** inspect full papers and subsequent publications. “No table found” is not proof that no analysis exists. The source flags the 2018–2019 publication check as unfinished; the linked review identifies a relevant 2026 paper and prior resistance-source analysis. Define the remaining gap before claiming novelty.
3. **Feasibility:** measure pilot storage, memory, runtime and database requirements on an available authorised computer. The source's feasibility labels are estimates, not benchmark results.
4. **Resistance and source claims:** distinguish read-level gene annotations, inferred hosts/plasmids and measured resistance. Community source estimates do not by themselves establish the origin of a particular resistance gene or its transmission route.
5. **Comparability:** address low biomass, negative controls, sequencing depth and technology/library differences. Historical summer samples are not a current surveillance feed; a year contrast may reflect batch effects.
6. **Challenge requirements:** use the [checked official requirements](../docs/CHALLENGE_REQUIREMENTS.md), then recheck the [organiser's page](https://s.sph.hku.hk/theonehealthhub/team-challenge/) before registration or submission. The 17 November screening-seat milestone is distinct from the 30 November team-registration deadline.
7. **Campaign value:** test whether a proposed explanation improves understanding without creating fear or stigma. Do not infer community benefit from a successful pipeline.

## Candidate source leads from the PDF

These were the original synopsis's verification leads. The separate review records which were subsequently inspected; the remaining leads are not independently audited:

- Leung et al. (2021), *Microbiome*: [doi:10.1186/s40168-021-01044-7](https://doi.org/10.1186/s40168-021-01044-7)
- Danko et al. (2021), *Cell*: [doi:10.1016/j.cell.2021.05.002](https://doi.org/10.1016/j.cell.2021.05.002)
- [Public-transit air metagenomics repository](https://github.com/mhyleung/public_transit_air_metagenomics)
- [MetaSUB metadata repository](https://github.com/MetaSUB/MetaSUB-metadata)
- NCBI BioProjects: `PRJNA561080`, `PRJNA1129830`, `PRJNA1132165`.

## Suggested next experiment, not an assigned task

Audit the accession/metadata claims, then design a reproducible two-sample pilot with explicit resource limits and outputs. In parallel, sketch one campaign encounter using clearly labelled existing or fictional demonstration data. Use the pilot and a comprehension check to decide whether the larger analysis would materially improve that encounter.

**Executed checks for the original synopsis:** source PDF read; repository README, contribution rules and decisions compared; distinction between the proposal and existing implementation preserved. No analysis or application tests were run at that stage. Subsequent source checks and software verification are recorded in the linked review and verification note.
