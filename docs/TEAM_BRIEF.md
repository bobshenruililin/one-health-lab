# One Health Lab — start here
**Team discussion notebook | 10 November 2026 | No coding needed to read it**

We are exploring two routes. We have not chosen a product. Spend roughly 70% of the next exploration on useful workflows inspired by earlier hackathons, and 30% on environmental microbial data. These are working priorities, not a competition requirement.

## What are we trying to make possible?
Imagine showing a teammate one ordinary situation: someone has a prescription they do not understand; a community worker needs an accessible cooling space; a researcher has two studies that look comparable but are not. We should be able to show what happens before, what our intervention changes, and how we would know it helped.

Our design approach: establish substance, then comprehension, then craft. Keep observation, interpretation and uncertainty distinct. A practical assistant needs evidence that the action was completed. A learning experience needs observation of what a person understood. Personalization should change an actual decision. The opening of this notebook provides the prerequisites before the analysis.

## Route B — give an older good idea a newly possible workflow
These are our adaptations of historical projects. Several originals already used machine learning. Recognition at a hackathon is different from demonstrated effectiveness. No old code has been copied.

### 1. A prescription becomes an understood plan — AMR
**Scene:** After a short consultation, a patient can read the label but cannot explain what they should do or what question to ask. A pharmacist reviews the extracted instructions; the assistant explains them in the patient's preferred language and asks them to explain the plan back. Unresolved discrepancies return to the pharmacist.
**Ancestor:** PillPack, MIT Hacking Medicine 2012, redesigned sorting, delivery and refills; it became a deployed pharmacy. https://mitsloan.mit.edu/ideas-made-to-matter/a-redesigned-pharmacy-pillpack-gains-traction
**What AI adds:** reading varied labels, language support and interpreting questions. A confirmed prescription remains the authority; no invented dose or treatment change.
**Our insight to test:** the missing step may be checking understanding after information is delivered. This tests whether a short consultation leaves questions unresolved.
**First test:** a pharmacist creates ten fictional label/question cases. Compare an ordinary leaflet with the explanation/teach-back workflow; measure understanding, errors and pharmacist correction time. Today's notebook only tests the confirmation gate on synthetic records, not OCR, speech or comprehension.
**Dependency:** a pharmacist and evidence that this is a meaningful local problem.

### 2. A cooling-space listing becomes a successful arrival — climate and health
**Scene:** A community worker is helping someone who needs step-free access. The closest venue has an unverified entrance; another has verified access but is further away. The assistant shows those constraints, confirms today's opening and produces a short Cantonese/English arrival card with real landmarks.
**Ancestors:** HandyMap's accessible entrances and Eye in the Sky's community reports, HackMIT 2019. https://devpost.com/software/handymap ; https://devpost.com/software/eye-in-the-sky-nm1l3k
**What AI adds:** extracting changes from notices, structuring photo/voice corrections and explaining a route. Opening status, accessibility and verification time are explicit data. Generated pictures cannot replace real entrance evidence.
**Available data:** official temporary heat-shelter listings: https://data.gov.hk/en-data/dataset/hk-had-json1-temporary-heat-shelters . A list does not establish current opening or accessibility.
**First test:** audit ten sites; compare arrival tasks with the official listing. Measure wrong entrances, unresolved access and time. Today's synthetic replay tests whether requirements alter the shortlist and unknowns stay unknown.
**Dependency:** prove the access problem exists; find a community partner. Seasonal pilot timing matters.

### 3. An informal observation becomes a completed inspection — emerging infection / zoonotic risks
**Scene:** Several people report the same standing water at a school, or an animal observation to an existing expert service. A voice note lacks a precise location. The assistant asks for it, groups duplicates, creates a reviewable task and records what the responsible person actually did.
**Ancestor:** Dogemon, IMED 2016 supported by MIT Hacking Medicine, proposed routing dog observations to veterinarians. It was a prototype concept. https://doi.org/10.1016/j.ijid.2017.09.025
**What AI adds:** converting informal messages into usable reports and asking targeted follow-ups. A photo cannot establish infection or vaccination status.
**First test:** replay 30 staged reports with a caretaker or veterinary partner. Compare completeness, duplicates, review time and missed follow-ups. Today's code demonstrates deduplication and the difference between assigned and closed tasks on structured fixtures; it is not an AI classifier.
**Dependency:** one named receiver with capacity to act. Choose either a vector-control or an animal-reporting setting, not both for the first pilot.

### 4. Existing records become a practical environmental decision — climate and health
**Scene:** A small clinic wants to understand where its energy or supply use can change, but its records are scattered. AI extracts quantities and flags gaps; a calculator applies documented, versioned factors; the manager compares feasible actions.
**Ancestor:** Footprint, IMED 2016; its accelerator reported a beta and field testing in 2017. This is not evidence of emissions savings. https://medium.com/@sektor5/impact-start-up-footprint-launches-its-carbon-accounting-platform-in-public-beta-d253b7e5c95
**First test:** one clinic's permitted records against a manual audit; measure correction time and whether an implementable change emerges. No clinic data acquired or carbon model run yet. Need a partner and appropriate emission factors.

### 5. A food donation becomes a feasible collection — climate and health
**Scene:** An NGO gets several offers with mismatched dates, quantities and pickup windows. The assistant extracts constraints, proposes recipient/driver matches and flags missing storage information for staff review.
**Ancestor:** FreshDetect, HackMIT 2019, linked changing shipment condition to reassignment. Hardware demonstration; no food-safety validation established. https://devpost.com/software/fresh-detect
**First test:** replay 20-30 offers with a coordinator; compare feasible pickups and review time. No operator data or matching experiment run yet. Images cannot certify food safety. The health and climate link needs to be established through the actual service, not assumed from avoiding waste.

### 6. Scattered science becomes a defensible decision — AMR
**Scene:** An SPH educator asks whether two cities can fairly be compared. The assistant gathers studies, extracts the methods, links each claim to a passage or row and exposes incompatible denominators. A researcher approves the comparison before it becomes a public explanation.
**Ancestors:** ProMED Mapper (IMED 2016) and LabelLearn (HackMIT 2019). https://doi.org/10.1016/j.ijid.2017.09.025 ; https://devpost.com/software/doway
**First test:** 30-50 manually reviewed metadata records, then extraction accuracy, missed incompatibilities and reviewer time. Historic ProMED access is not assumed. This is the most natural bridge to Route A, provided a real educator or researcher needs it.

## Route A — what the MetaSUB idea opens up
MetaSUB is the Metagenomics and Metadesign of Subways and Urban Biomes consortium. It is separate from Meta, the technology company. Researchers collect environmental microbial material and sequence DNA; metadata records sampling location, time, specimen and methods. This is not named-passenger tracking.

**What researchers have already done:** urban microbial/AMR mapping, geographic signatures and exploration of biosynthetic gene clusters. The 2021 atlas contained 4,728 metagenomic samples in 60 cities. Useful starting sources: https://metasub.org/about/ ; https://doi.org/10.1016/j.cell.2021.05.002 ; https://github.com/MetaSUB/MetaSUB-metadata . A proposal to simply identify a city or map marker counts needs to explain its new contribution.

**Questions worth exploring:** Which comparisons survive adjustment for specimen, date, recovery method and sequencing depth? Which evidence is absent? Can an educator use the data to explain a specific misconception? A new model is justified only after a clear target, labels, baseline and held-out evaluation exist.

**Other data:** the Hong Kong aquatic E. coli study gives a more direct local human–animal–environment setting: https://doi.org/10.1038/s41467-025-62455-w . Our existing analysis uses its released plasmid table, not MetaSUB. The notebook below reproduces those real-data counts. It is not evidence that we discovered transmission routes. An official environmental/context dataset can add meaning only when its time, geography and measurement match the question; joining everything creates misleading precision.

**What is built:** the earlier Follow the Resistance evidence explorer and five executed analysis cells. **What remains proposed:** a complete learning intervention, a research-assistant agent, model training, current surveillance and health impact. We retain the demo as an experiment, not the selected team project.

## How we compare ideas
Update, 11 November: the official campaign requirements and judging weights have now been checked: https://github.com/bobshenruililin/one-health-lab/blob/main/docs/CHALLENGE_REQUIREMENTS.md . The criteria below remain OUR decision framework, not official scores. The challenge requires a community-facing campaign or activity; a research or service prototype alone does not establish fit. Organizer events explicitly discuss environmental AMR, human/veterinary antibiotic use and practical implementation: https://s.sph.hku.hk/theonehealthhub/events.html . This supports topic relevance, not a prediction about judges.

| Candidate | Theme fit | Observable first outcome | Strongest dependency | Current judgment |
|---|---|---|---|---|
| Prescription teach-back | Direct AMR; animal/environment link not yet developed | Understanding and pharmacist corrections | Pharmacist partner | First conversation worth seeking |
| Cooling access | Direct climate-health | Verified arrival and usable access | Local audit and community user | Strongest simple service experiment |
| Observation to inspection | Emerging infection if tied to a real prevention workflow | Complete reports and closed tasks | Responsible receiver | Promising with partner |
| Clinic audit | Climate-health through health-service operations | Auditable quantities and feasible action | Clinic records and factors | Keep in reserve |
| Food rescue | Climate-health link needs substantiation | Feasible collections and staff time | NGO operator | Keep in reserve |
| AMR evidence desk | Strong environmental AMR connection | Correct, traceable comparisons | Named research/education user | Best bridge between routes |

For each, ask: Does someone care? Is the One Health/theme connection substantive? What does AI enable beyond a form or spreadsheet? Can we observe benefit within student resources? What evidence would make us abandon it? Who maintains it after a demo? Avoid scoring unknowns as failures or inventing an overall percentage.

## What to do in our meeting
Read only through the six scenes first. Each teammate picks one scene they can explain and one assumption they doubt. Choose two concepts for short tests; keep the data route alive as shared research. Assign work by interest: user conversations, data/source investigation, workflow prototyping, evaluation and communication. The code is optional; the decisions belong to all of us.

A useful contribution can be a surprising observation, a source, a counterexample, a user introduction, a sketch or an experiment. Use contributions/TEMPLATE.md in the repository. Mark findings as observed, inferred, proposed or tested. Agents should leave runnable work, inputs, outputs and limits; model review is not user validation.

## Further precedents outside MIT

**Mo-Buzz+ — EpiHack Sri Lanka, 2017.** Connected citizen reports, inspectors, hospital information and education around dengue. The 2019 paper describes an initial 16-user evaluation; full deployment and evaluation were still planned. This strengthens the observation-to-inspection candidate: missing locations and irrelevant reports were concrete design problems. Our adaptation would ask one useful follow-up, propose duplicates and preserve an inspector's confirmation. First next test: 30 staged multilingual reports against keyword sorting, with a caretaker judging actionable output. Not performed yet. https://link.springer.com/article/10.1186/s12911-019-0829-5

**ezReferral — Hacking Health Edmonton, 2013.** Tracked a referral through opened, accepted and scheduled states. A founder interview reports real usage; independently demonstrated health improvements were not established by our review. For AMR, borrow the handoff: a patient's uncertain antibiotic instruction becomes a precise pharmacist question with an owner and a recorded answer. This could be more useful than a one-off explanation. Test 20 fictional message threads for overlooked questions, false resolution and reviewer effort. Not performed yet. https://healtharrows.ca/ezreferral/

**VectorWEB — Johns Hopkins Zika hackathon, 2016.** Proposed automated mosquito traps and transmitted observations for planning. University reporting in 2017 describes stakeholder research in Brazil and further development. An agent could help turn valid readings and maintenance notes into an inspection worklist; it does not validate the sensor or predict disease. Test offline/missing readings in a 12-trap synthetic replay before any hardware investment. Not performed yet. https://www.bme.jhu.edu/news-events/news/cbid-designs-automated-mosquito-trap-to-track-zika/

These add three precedents to the earlier nine-project reservoir. My current recommendation is to compare prescription-question resolution and observation-to-inspection with real potential partners, while keeping cooling access as a simpler service alternative and AMR evidence work as the bridge to the data route. This judgment can change after interviews.

## Shared workspace
Team notebook: https://colab.research.google.com/drive/1WaWNyLTmZW8AuPLCBPIhBzR2Tj9MZKlf
Drive folder: https://drive.google.com/drive/folders/1GeXOX-W_pUi-rAGG5l2oRvxyRDLL3g82
Anyone with the link can view. Make your own notebook copy for experiments. The canonical notebook is maintained by Bob; named editor access can be granted later. The canonical repository is https://github.com/bobshenruililin/one-health-lab . Repository notebooks can also open directly in Colab; personal copies do not update this source automatically.
