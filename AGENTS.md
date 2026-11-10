# Working in One Health Lab

## Purpose
Help a student team find an ambitious, useful intervention for the HKUMed SPH One Health Team Challenge. Two routes remain open: reinterpret older health-hackathon workflows with current AI capabilities (roughly 70% of exploration) and investigate MetaSUB/other environmental AMR data (30%). These are working priorities, not official scoring weights. No final product is selected.

## Start here
Read `README.md`, `docs/COMPANION_GUIDE.md`, `docs/TEAM_BRIEF.md`, `docs/DECISIONS.md`, then `docs/STARTER_TASKS.md`. Research ancestors and sources are in `docs/IDEA_RESERVOIR.md` and `docs/SOURCES.json`. `docs/HANDOFF.md` gives starting prompts for Opus and Fable. Follow `CONTRIBUTING.md` for branches and evidence notes.

## Conversation and translation
The user wants to think aloud and learn the subject while developing ideas. Explain what actually happens before naming features or files. Define unfamiliar terms at their first use. Separate the implemented artifact, a proposed use and the unresolved choice of product. Translate an unfinished thought into a concrete person/situation/change, investigate the important uncertainty, then make a small inspectable artifact. Do not turn every conversation into a specification or a report. Explain one subject insight and how the evidence led to it.

Use relevant scientific, design, adoption, frontline and evaluation perspectives from the companion guide. Treat them as AI-assisted analysis with explicit sources and limits; do not claim real professional credentials or simulate endorsement. Bring in only the perspectives needed, synthesize disagreements, and seek real expert/user evidence when their judgment is necessary. Do not publish raw private conversations or treat every brainstorm as a team decision.

## Creative intent
Start with a person, a consequential moment and a change they can understand. You may challenge the current concepts or propose a better one. Explore mechanisms from other fields; make an experience that reveals an insight. Substance, comprehension and craft deserve separate attention. Deliver one complete encounter before adding more navigation, dashboards or decorative metrics. Personalization should change an actual decision. Keep the ambition open and make claims checkable.

## What exists
- A dependency-free evidence explorer: `src/`, original schematic SVG under `public/`.
- Two Colab-compatible notebooks: real descriptive data analysis plus three deterministic synthetic workflow probes.
- Twelve historical precedents, six proposed directions and a team decision framework.
- No live model calls, trained predictor, clinical service, current surveillance, measured user benefit or final competition selection.

## Run
Use Node 22+ and Python 3.10+. There are no third-party runtime packages to install.

```sh
npm run probes  # synthetic workflow demonstrations; no source download
npm run verify  # pinned data/cache, 8 evidence tests, both notebooks, build
```

`npm run data` downloads a pinned upstream source if the local cache is absent, verifies its canonical SHA-256, then generates `public/data/records.json`. Do not silently substitute a different dataset on failure. See `data/README.md` for an offline path. Build output is `dist/index.html` and `dist/follow-the-resistance.html`; open the former alongside `dist/data/` for its table-download link.

## Evidence boundaries
MetaSUB is an environmental sequencing consortium, unrelated to Meta the company. Our implemented explorer uses a separate Hong Kong E. coli study. The table contains 3,522 plasmid records from 942 isolate IDs; the paper's 1,016 isolates are a different denominator. Match exact marker tokens, count each record once, retain missing categories and show the filtered denominator. `Selection` describes laboratory recovery. Mobility is predicted. Shared markers alone do not prove identical plasmids, transmission, direction, exposure or clinical risk. The artwork is schematic, not sampling coordinates or gene positions.

Keep observed facts, interpretations, proposals and executed results distinct. A historical hackathon prize is not evidence of effectiveness. The full official rubric remains unverified. Do not claim AI performance from hand-coded toy rules. An assigned task is not a completed action, and a model critique is not a user study.

## Contribution discipline
Use a focused branch and pull request; preserve others' changes. Add an experiment note with its question, input, output, commands, actual result and limits. Run relevant checks after changes; avoid unrelated scaffolding. Keep private transcripts, identifiable health information, contacts and credentials out of this public repository. Upstream raw data and generated caches are ignored; do not relicense or publish them as our own. No provider keys or paid services are required for the current experiments.
