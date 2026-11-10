"""Fetch the pinned study table and derive the explorer's local cache (stdlib only)."""
from pathlib import Path
import argparse
import csv
import hashlib
import io
import json
import urllib.error
import urllib.request

ROOT = Path(__file__).resolve().parents[1]


def prepare(source=None):
    manifest = json.loads((ROOT / "data/provenance.json").read_text())
    cache = ROOT / "data/source.tsv"
    if source is not None:
        raw = Path(source).read_bytes()
        origin = "provided source file"
    elif cache.is_file():
        raw = cache.read_bytes()
        origin = "local cache"
    else:
        try:
            with urllib.request.urlopen(manifest["download_url"], timeout=30) as response:
                raw = response.read()
        except (OSError, urllib.error.URLError) as exc:
            raise SystemExit(
                "Could not download the pinned source. Download the URL in "
                "data/provenance.json on a connected machine, then run "
                "python3 tools/prepare_data.py --source /path/to/revused-plasmid-ARG.txt. "
                f"Reason: {exc}"
            ) from exc
        origin = "pinned upstream download"
    text = raw.decode("utf-8-sig").replace("\r\n", "\n").rstrip("\n") + "\n"
    digest = hashlib.sha256(text.encode("utf-8")).hexdigest()
    if digest != manifest["canonical_sha256"]:
        raise SystemExit("Source checksum mismatch; no cache files written. Review the source version.")
    rows = list(csv.DictReader(io.StringIO(text), delimiter="\t"))
    if len(rows) != manifest["rows"] or len({r["Plasmid-ID"] for r in rows}) != len(rows):
        raise SystemExit("Source record count or uniqueness check failed.")
    records = []
    for row in rows:
        if row["Circular"] not in ("Y", "N") or row["Selection"] not in ("Y", "N"):
            raise SystemExit("Unknown recovery or circularity code; do not silently coerce it to false.")
        records.append({
            "id": row["Plasmid-ID"], "isolate": row["Host"],
            "category": row["Niche"] or "Unspecified", "source": row["Source"],
            "length": int(row["Length"]), "circular": row["Circular"] == "Y",
            "mobility": row["Conj_type"],
            "replicons": [p.strip() for p in row["Plasmidfinder_type"].split(",") if p.strip()],
            "copies": float(row["Copy_number"]), "annotationCount": int(row["ARG_number"]),
            "markers": [p.strip() for p in row["ARG_Type_Subtype"].split(",") if p.strip()],
            "selected": row["Selection"] == "Y",
        })
    target = ROOT / "public/data/records.json"
    target.parent.mkdir(parents=True, exist_ok=True)
    cache.write_text(text, encoding="utf-8")
    target.write_text(json.dumps(records, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")
    print(json.dumps({"origin": origin, "rows": len(records), "canonical_sha256": digest}))


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, help="Use a downloaded source file instead of the network/cache.")
    prepare(parser.parse_args().source)
