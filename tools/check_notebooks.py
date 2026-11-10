"""Replay this repository's trusted Python notebook cells without a Jupyter server."""
from pathlib import Path
import argparse
import contextlib
import io
import json
import os

ROOT = Path(__file__).resolve().parents[1]


def replay(path, workflow_only=False):
    notebook = json.loads(path.read_text())
    if notebook.get("nbformat") != 4:
        raise ValueError(f"Unsupported notebook format: {path}")
    cells = [cell for cell in notebook["cells"] if cell["cell_type"] == "code"]
    if workflow_only:
        cells = cells[:3]
    namespace = {"__name__": "__main__"}
    for number, cell in enumerate(cells, 1):
        output = io.StringIO()
        with contextlib.redirect_stdout(output):
            exec(compile("".join(cell["source"]), f"{path.name}:cell{number}", "exec"), namespace)
        print(f"{path.name} / code cell {number}: passed")
        print(output.getvalue(), end="")
    return len(cells)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--workflow-only", action="store_true", help="Run only the three synthetic probes; no data/network needed.")
    args = parser.parse_args()
    os.chdir(ROOT)
    paths = [ROOT / "notebooks/One_Health_Team_Lab.ipynb"]
    if not args.workflow_only:
        paths.append(ROOT / "notebooks/One_Health_Data_Exploration.ipynb")
    count = sum(replay(path, args.workflow_only) for path in paths)
    print(f"PASS: {count} code cells across {len(paths)} notebook(s).")
