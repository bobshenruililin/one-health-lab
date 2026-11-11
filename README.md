# One Health Lab

**We are using small experiments to decide what would be worth building for the One Health challenge.**

Right now this repository holds one working research demo, three small fictional workflow examples, and research on possible projects. The team has not selected a final product.

## Try one thing: does changing the data change the story?

Imagine finding the same resistance-related gene label in bacteria from sewage, farm wastewater and river water. What does that tell us—and what would we need to know next?

Our **Follow the Resistance** demo lets you inspect records from a published Hong Kong study, count a selected gene label, and change which laboratory records are included. The percentage changes with that choice. This helps us ask better questions about the evidence. It does not show where someone caught an infection or rank places by danger.

The easiest entry is [the data notebook in Colab](https://colab.research.google.com/github/bobshenruililin/one-health-lab/blob/main/notebooks/One_Health_Data_Exploration.ipynb). A notebook is a document with explanations and small calculations you can run. Click ▶ beside the first code block, wait for its result, then run the next blocks in order. Compare the tables under **Ask one exact question** and **Change the recovery method**. The [companion guide](docs/COMPANION_GUIDE.md) explains the biology, initial setup and what you should see. You can also read that guide without running anything.

This GitHub link is a collection of files, not a hosted demo website. The browser version is built locally using the instructions below.

## What exists, and what is still an idea?

| Material | What it does today | What remains open |
|---|---|---|
| Hong Kong data notebook and explorer | Inspect real published records and calculate descriptive counts | Who needs this, what decision it helps, and whether the experience improves understanding |
| Three fictional workflow examples | Show that access needs change a venue choice, unconfirmed instructions stay in review, and assigned work is not automatically complete | Real-world inputs, AI integration, partner review and user benefit |
| Historical-project research | Explain twelve precedents and six possible adaptations | Which problem the team should pursue |

There are two open routes: **use environmental data to answer a useful question**, or **reimagine an older health-hackathon idea with today's AI**. We are putting more exploration into the second route. The existing demo does not commit us to the first.

MetaSUB is an environmental sequencing consortium, separate from Meta the company. Our working demo uses a different Hong Kong E. coli dataset. It has no trained AI model or live surveillance feed.

New for discussion: the [team's MTR-air campaign proposal](contributions/2026-11-11-metasub-hk-proposal.md) and a [source-backed review with a small learning experiment](contributions/2026-11-11-metasub-review.md). These keep the data route open without selecting it or replacing the current demo.

## Bring an unfinished idea

You can start with an observation, an analogy or “I wish this were possible.” We will turn it into a concrete situation, identify what changes for someone, bring in relevant scientific and practical perspectives, then implement a test we can inspect together.

[The companion guide](docs/COMPANION_GUIDE.md) establishes that conversation. [The team brief](docs/TEAM_BRIEF.md) develops the six directions; [the idea reservoir](docs/IDEA_RESERVOIR.md) traces their ancestors. For Opus or Fable, start with [AGENTS.md](AGENTS.md) and [handoff prompts](docs/HANDOFF.md).

## Build or contribute

Use Node 22+ and Python 3.10+. No third-party runtime packages or API keys are needed.

```sh
git clone https://github.com/bobshenruililin/one-health-lab.git
cd one-health-lab
npm run verify
```

This prepares the pinned dataset, runs eight evidence tests and both notebooks, and builds `dist/index.html`. Open it in a browser. See [data preparation](data/README.md) if downloading fails. Generated data and builds are excluded from git.

`npm run probes` runs only the three fictional examples without a download. [The team notebook](https://colab.research.google.com/github/bobshenruililin/one-health-lab/blob/main/notebooks/One_Health_Team_Lab.ipynb) combines the project research and all experiments. [The Drive folder](https://drive.google.com/drive/folders/1GeXOX-W_pUi-rAGG5l2oRvxyRDLL3g82) is also available; personal copies do not automatically update this repository.

Use [CONTRIBUTING.md](CONTRIBUTING.md) and [starter tasks](docs/STARTER_TASKS.md). See [verification](docs/VERIFICATION.md), [decisions](docs/DECISIONS.md), [sources](docs/SOURCES.json) and [attribution](NOTICE.md) for the evidence and current limits. [Official challenge requirements and judging weights](docs/CHALLENGE_REQUIREMENTS.md) were checked on 11 November 2026.
