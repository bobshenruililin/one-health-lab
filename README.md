# One Health Lab

**A shared place to turn promising ideas into things we can understand, try and challenge.**

We are exploring a student project for the HKUMed SPH One Health Team Challenge 2026–27. Its themes are antimicrobial resistance, emerging infectious diseases / zoonotic risks, and climate change and health. We have not selected a final product.

Our starting question: **where could today's AI turn an older good idea into a useful, complete experience?** Alongside that, we are investigating what environmental microbial data can actually tell us—and what it cannot.

## Start with a scene

| Direction | A change someone could experience | Theme |
|---|---|---|
| Prescription questions | A confusing instruction becomes a pharmacist-confirmed answer and an understood plan | AMR |
| Cooling access | A venue listing becomes a successful arrival through a verified, usable entrance | Climate and health |
| Observation to inspection | An incomplete report becomes an actionable task with evidence of completion | Emerging infection / zoonotic risks |
| Clinic audit | Scattered records become an auditable environmental decision | Climate and health |
| Food rescue | Mismatched offers become feasible collections reviewed by an operator | Climate and health; link needs substantiation |
| AMR evidence desk | Studies that look comparable become a defensible comparison with visible limits | AMR |

These are hypotheses, not deployed services. [Read the team brief](docs/TEAM_BRIEF.md) for the human situations, historical precedents, dependencies and first tests. The [idea reservoir](docs/IDEA_RESERVOIR.md) covers twelve projects from HackMIT, MIT Hacking Medicine and other health hackathons.

## Read or experiment without setup

- [Open the team notebook in Colab](https://colab.research.google.com/github/bobshenruililin/one-health-lab/blob/main/notebooks/One_Health_Team_Lab.ipynb): six directions, three small synthetic workflow probes, then optional real-data analysis.
- [Open only the data analysis in Colab](https://colab.research.google.com/github/bobshenruililin/one-health-lab/blob/main/notebooks/One_Health_Data_Exploration.ipynb).
- [View the shared Drive folder](https://drive.google.com/drive/folders/1GeXOX-W_pUi-rAGG5l2oRvxyRDLL3g82). The repository is the canonical source; personal Colab copies are independent.

Roughly 70% of exploration is directed toward reimagined workflows, 30% toward MetaSUB and other environmental data. These are our working priorities, not official judging weights. **MetaSUB is a research consortium, separate from Meta the technology company.** The implemented analysis uses a different Hong Kong E. coli dataset.

## What already runs

**Follow the Resistance** is an evidence-explorer experiment. It reads a published Hong Kong plasmid table, lets a visitor inspect three example records, compare six marker annotations and change the laboratory-recovery filter. A schematic city illustration connects the source categories. It is one artifact for discussion, not the selected team product.

The notebooks reproduce the counts and demonstrate three workflow requirements: personal access needs change a shortlist; an unconfirmed prescription stays in review; an assigned inspection is not counted as completed. These are deterministic demonstrations. There is no trained model, live surveillance or measured health benefit.

### Run locally

Use **Node 22+** and **Python 3.10+**. No third-party packages or API keys are needed.

```sh
git clone https://github.com/bobshenruililin/one-health-lab.git
cd one-health-lab
npm run verify
```

This downloads the pinned upstream table when needed, verifies its checksum, runs the evidence tests and both notebooks, and builds `dist/index.html`. Open that file in a browser. Keep `dist/data/` beside it for the source-table download link. The generated page works offline after preparation.

To run only the three synthetic probes, without a download:

```sh
npm run probes
```

Individual commands: `npm run data`, `npm test`, `npm run notebooks`, `npm run build`. If the source download fails, use the [offline preparation instructions](data/README.md). Raw and derived dataset caches are excluded from git; source attribution and the exact version are in [the provenance manifest](data/provenance.json).

## Join the work

Start with [starter tasks](docs/STARTER_TASKS.md) or bring a better question. A useful contribution can be a source, an observation, a counterexample, a sketch or an experiment. [CONTRIBUTING.md](CONTRIBUTING.md) explains branches, pull requests and notebook copies.

For **Opus, Fable or another agent**, read [AGENTS.md](AGENTS.md), then [the handoff prompts](docs/HANDOFF.md). Creative freedom includes challenging the shortlist. Leave something a teammate can try, its actual result, and the next decision.

## Evidence and current limits

The table contains 3,522 plasmid records from 942 isolate IDs. Shared marker annotations do not establish transmission, direction or clinical risk. Counts describe the released records; they are not population prevalence estimates. Laboratory selection and denominators remain visible in every comparison.

The official invitation establishes the three themes. The full judging rubric remains unverified. Historical project success does not validate our adaptations. See [verification notes](docs/VERIFICATION.md), [decisions](docs/DECISIONS.md), [sources](docs/SOURCES.json) and [attribution](NOTICE.md).
