# Source data and reproducibility

The evidence explorer uses the authors' released `revused-plasmid-ARG.txt` from [EC_Ecological-connectivity](https://github.com/xxqxxq1994/EC_Ecological-connectivity), associated with [Xu et al., Nature Communications, 2025](https://doi.org/10.1038/s41467-025-62455-w). This is a separate dataset from MetaSUB.

`provenance.json` fixes the upstream commit, download URL and canonical SHA-256. Canonicalization decodes UTF-8 with an optional BOM, converts CRLF to LF, and keeps exactly one final newline. The checksum applies to that text, not arbitrary HTTP response bytes. Counts refer to plasmid records, not people or population prevalence.

```sh
npm run data
```

The script downloads only when `data/source.tsv` is absent, verifies the hash, and writes the local source cache and `public/data/records.json`. If downloading is unavailable, obtain the exact file using `download_url` in the manifest, then run:

```sh
python3 tools/prepare_data.py --source /path/to/revused-plasmid-ARG.txt
npm run verify
```

The upstream repository's inspected root and README did not establish an explicit data redistribution license. We publish our analysis code, source links and reproducibility instructions; the raw table and full derived record cache are excluded from git. Keep upstream terms and attribution separate from our own code. A future public deployment containing the full table needs a reuse review. Do not treat a public GitHub URL as a license.

No upstream analysis scripts or paper figures are copied. The city SVG is an original schematic. The generated `dist/` is local output and includes the dataset for offline inspection; it is also ignored by git.
