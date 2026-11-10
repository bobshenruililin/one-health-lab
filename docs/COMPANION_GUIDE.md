# What we have, and how we think together

The repository is our shared working folder with a history of changes. It contains material for choosing a project and a few things we can already run. It is not yet a service that a patient, community worker or researcher depends on.

Our immediate goal is to find one situation where an intervention would make a meaningful difference, then make that difference visible enough to test.

## Follow one question through the working demo

Imagine a researcher examining bacteria recovered from sewage, farm wastewater and river water in Hong Kong. A resistance-related gene label appears in records from all three. Are we looking at a useful clue? What can we say from the records alone?

Here is the vocabulary the previous explanation skipped:

| Word | Meaning in this project | Why it matters |
|---|---|---|
| Sample | Material collected from a place, such as water | The place and method shape what can be found |
| Isolate | Bacteria separated and cultured for study; here an E. coli isolate has its own identifier | One isolate can contribute several plasmid records |
| Plasmid | DNA separate from a bacterium's main chromosome; it may carry resistance-related genes | A plasmid record is the thing our table counts |
| Marker annotation | A gene label assigned in the published analysis, such as tet(A) | A matching label is less information than a matching full DNA sequence |
| Metadata | Information describing a sample or record: where, when and how it was collected or processed | It tells us whether a comparison is meaningful |
| Denominator | The total we divide by when calculating a fraction | “24 out of 271” and “304 out of 1,087” refer to different sets of records |

The relationship is: a water sample can yield bacterial isolates; an isolate can contain plasmids; a plasmid can have several gene annotations. These counts cannot be substituted for one another. The released table contains **3,522 plasmid records from 942 isolate IDs**. Those are not numbers of people, infections or independent water samples.

For the biology, see the [NHGRI plasmid explanation](https://www.genome.gov/genetics-glossary/Plasmid). The [Hong Kong study](https://doi.org/10.1038/s41467-025-62455-w) reports its wider research. Our [pinned table and provenance](../data/provenance.json) identify the smaller piece we actually process.

### What the program actually does

It reads the authors' table. You choose a gene label. It counts how many plasmid records contain that label, groups them by their source category, and shows the count alongside the total. You can inspect records or change the included recovery methods. There is no AI inference in this calculation.

For the label `tet(A)`, our reproduced result is:

| Source category | All recovered plasmid records | Only records recovered without antibiotic selection |
|---|---:|---:|
| Human-associated | 322 / 1,331 = 24.2% | 71 / 491 = 14.5% |
| Animal-associated | 189 / 1,103 = 17.1% | 54 / 349 = 15.5% |
| Environmental | 304 / 1,087 = 28.0% | 24 / 271 = 8.9% |

These are fractions of records in this dataset. Human-associated means a source attribution, such as sewage, rather than a patient cohort. One uncategorized record stays in the overall total and is absent from these three rows.

“Antibiotic selection” describes growing the bacteria on laboratory media containing antibiotics, which favors bacteria able to grow under those conditions. The researchers also recovered bacteria on media without antibiotics. This is explained in the paper's Methods; it does not mean these people were taking antibiotics. Switching the filter changes both the records counted and the totals they are divided by; the two sets also differ in composition.

**The useful observation:** the environmental category goes from the largest fraction in one view to the smallest in the other. A confident-looking ranking can depend on which records were included. We have not isolated a causal effect of the laboratory procedure, and neither table ranks infection risk.

You can see this yourself in the [data notebook](https://colab.research.google.com/github/bobshenruililin/one-health-lab/blob/main/notebooks/One_Health_Data_Exploration.ipynb). Click the play button (▶) to the left of the first code block; Colab may ask you to sign in or connect a runtime. Wait for the output, then run each later code block in order. The first should print a source checksum and `Rows: 3522`. No API key or package installation is needed. Compare the printed tables in sections 2 and 3. Successful output includes the fractions above; a download or checksum error is a problem to resolve, not a result of zero. [Google's Colab introduction](https://colab.research.google.com/notebooks/intro.ipynb) explains the interface.

The browser explorer adds specimen cards, filters, searchable records and exports around the same calculations. Its three opening specimens share a marker label. That alone does not reconstruct a route from a farm to a river to a person. The published paper uses additional analyses and experiments; we have not reproduced all of that work.

### Why build this at all?

It gives us a small, inspectable example of turning difficult research into something a person can reason about. It could become part of an educator's lesson or a researcher's comparison tool. Those are proposed uses: we still need someone who needs the task and evidence that our intervention helps them.

MetaSUB is [a different research consortium](https://metasub.org/about/) studying urban microbial material. It is separate from Meta the company. Our working program does not yet analyze MetaSUB data. The two belong in the same exploration because they raise related questions about environmental AMR and comparing samples.

## What the other experiments do

The [team notebook](https://colab.research.google.com/github/bobshenruililin/one-health-lab/blob/main/notebooks/One_Health_Team_Lab.ipynb) contains three fictional examples. They are short rules that make an idea tangible:

- A person needs step-free access. The nearest venue has unknown access, so the example returns a farther venue with confirmed access. Change the person's requirement and the answer changes.
- A prescription explanation can proceed only after instructions are complete and confirmed by a pharmacist. An unconfirmed draft remains in review. No medication or dose is generated.
- Two reports of standing water become one candidate inspection task; a report without a place needs clarification. Assigning the task still leaves zero completed inspections until closure evidence exists.

These examples do not read photos, interpret real voice notes or contact a venue, pharmacist or inspector. They demonstrate what a future workflow would need to preserve. The historical-project research supplies possible directions; the examples help us expose assumptions before building larger systems.

When we propose an **AI agent**, we mean a model connected to tools so it can carry out steps—for example, extract a question, identify missing information and prepare something for review. That capability still has to be implemented and evaluated. The current examples are ordinary code following rules we wrote. Passing their checks proves those rules behaved as expected on the examples; it does not prove an AI understands a real person's situation.

## Bring the thought before the specification

You do not need to translate your idea into code. Start with the part that interests or bothers you: “the consultation ends too early,” “this dataset feels powerful,” or “could someone actually finish this through WhatsApp?”

The assistant should first explain its interpretation in ordinary language and give a concrete scene. For example:

> A person leaves a short consultation with an unresolved question about their instructions. The useful change could be getting that specific question to an appropriate pharmacist, recording the answer and checking understanding. WhatsApp might be an entry point. The important outcome is whether the question was resolved correctly.

Then investigate the consequential uncertainty. Does this situation occur? Who receives the question? Would they participate? What information must be confirmed? What would make the proposed intervention better than an existing leaflet, phone call or form?

The next artifact might be a fictional conversation, a source comparison, a working interaction or an interview plan. Choose the form that makes the idea easier to judge. For this example, a first build could show one unresolved question passing through review to a recorded answer, using fictional cases. That would test the workflow logic; a pharmacist and intended users would be needed to assess usefulness.

After trying it, explain what happened, what changed in our understanding and what we should do next. Save the project reasoning and artifact in the repository. Keep private conversations and identifying details out of the public record. An idea raised in conversation is a proposal, not automatically a team decision.

## The companions we can consult

These are **AI research and review perspectives**, not real professors, clinicians, YC partners or evidence of institutional endorsement. Their value comes from methods, sources and useful challenges. A real participant or specialist remains necessary when their experience or professional judgment matters.

| Perspective | The question it should help answer | Useful contribution |
|---|---|---|
| Scientific mentor, chosen for the topic | What does the evidence support, and which methods would answer the unresolved question? | Explain a mechanism, inspect the original study, identify alternative explanations and design a valid comparison |
| Design and understanding partner | Can someone entering cold understand the situation, consequence and next action? | Develop one complete encounter and identify the first missing explanation |
| Adoption and venture adviser | Who needs this enough to use it, who adopts or pays, and what makes the first deployment realistic? | Examine a specific user, current alternative, distribution path, recurring workload and pilot cost |
| Frontline practitioner or intended-user perspective | What would make this useful or burdensome in the actual day? | Surface workflow constraints and questions to take to a real pharmacist, caretaker, educator or community worker |
| One Health and evaluation reviewer | Does the project connect meaningfully to the challenge, and what outcome could we honestly demonstrate? | Check the mechanism, affected groups, comparison and observable outcome; distinguish official criteria from our guesses |

Use the two or three perspectives that matter to the current question. Synthesize their disagreements into a clear explanation and next experiment. There is no need to stage a panel conversation every time or make the user read several reports.

For the data route, a microbial-genomics or environmental-AMR researcher is relevant. Prescription questions call for a pharmacist and behavior/implementation expertise. Cooling access calls for heat-health, accessibility and community-service expertise. The adviser changes with the problem.

The most useful additional **real people** are the intended user and the person who would own the ongoing work. A scientific mentor can judge whether a claim is defensible; an operator can show where a proposed service would break. For the present dataset, its HKU research authors are a concrete potential scientific connection. No one has been contacted or agreed to advise us.

## The next conversation

We can explore either open route without committing to a final product. A good place to begin is the moment that feels worth changing: making unfamiliar science understandable, or helping a person complete something that currently stops halfway. The repository should become a record of discoveries and tested ideas, while this conversation remains a place to think aloud.
