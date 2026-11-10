# Verification snapshot — 10 November 2026

`npm run verify` passed locally with Node 26.5.0 and Python 3.11.4.

| Check | Observed result |
|---|---|
| Pinned local data preparation | Canonical checksum matched; 3,522 records generated |
| Evidence tests | 8 passed: record grain, source parity, exact marker counts, recovery denominators, specimens, filtering and CSV export |
| Notebook replay | All 13 code cells passed across the two notebooks (the five data cells occur in both) |
| Synthetic workflow probes | Three deterministic examples passed; no AI-performance or health-outcome claims |
| Standalone build | Generated a self-contained HTML explorer and local source/provenance files |

GitHub Actions is configured to repeat these checks on a clean runner, including the initial upstream download. Its result is visible in the repository's Actions tab; local success alone does not establish CI success. The notebook's own direct-download fallback was not exercised locally.

The interface has not completed a browser layout, keyboard or click-through review in this environment. No user study, clinical validation, live model integration, prospective surveillance or comparison of health outcomes has been performed. Historical claims and proposals remain linked to their sources in the research notes.

## Companion-guide revision

The README and companion guide received an independent AI heuristic review and a focused recheck for newcomer orientation. Revisions explain the unit being counted, laboratory selection, how to begin in Colab, and the distinction between working demonstrations and proposed uses. This was a document review, not a human comprehension test. The six fractions in the guide were recalculated from the pinned local records; Markdown links and the changed public text were checked. Executable code was unchanged.
