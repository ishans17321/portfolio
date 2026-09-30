"""Execute each homework cell independently and save genuine notebook/page outputs.

Run: venv/bin/python scripts/verify_python_homework.py
Requires nbformat and Flask (for the Libraries route exercise).
"""
from pathlib import Path
import json
import subprocess
import sys
import nbformat

ROOT = Path(__file__).resolve().parents[1]
entries = json.loads((ROOT / 'assets/python-homework/manifest.json').read_text())
count = 0
for entry in entries:
    path = ROOT / entry['path']
    notebook = nbformat.read(path, as_version=4)
    notebook.nbformat_minor = 5
    notebook.cells = [cell for cell in notebook.cells if not cell.metadata.get('recorded_homework_output')]
    cells = []
    execution = 0
    for cell in notebook.cells:
        cells.append(cell)
        if cell.cell_type != 'code':
            continue
        assert cell.source.startswith('# CODE_RUNNER:'), f'Missing runner marker: {path}'
        result = subprocess.run([sys.executable, '-c', cell.source], cwd=ROOT,
                                capture_output=True, text=True, timeout=30)
        if result.returncode:
            raise RuntimeError(f'{path.name}: {cell.source.splitlines()[0]}\n{result.stderr}')
        assert result.stdout.strip(), f'No printed evidence: {path.name}'
        execution += 1
        cell.execution_count = execution
        cell.outputs = [nbformat.v4.new_output('stream', name='stdout', text=result.stdout)]
        # The converter deliberately removes runner outputs; preserve a separate
        # labeled snapshot so the published page still includes test evidence.
        evidence = nbformat.v4.new_markdown_cell(
            '### Recorded output\n\n```text\n' + result.stdout.rstrip() + '\n```',
            metadata={'recorded_homework_output': True})
        cells.append(evidence)
        count += 1
    notebook.cells = cells
    nbformat.validate(notebook)
    nbformat.write(notebook, path)
    print(f'{path.name}: {execution} independent cells passed')
    # Deliver a downloadable notebook; Jekyll excludes _notebooks by convention.
    download = ROOT / 'assets/python-homework/notebooks' / path.name
    download.parent.mkdir(parents=True, exist_ok=True)
    download.write_bytes(path.read_bytes())
print(f'PASS: {count} cells across {len(entries)} notebooks')
