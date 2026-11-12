#!/usr/bin/env python3
"""Rebuild learner downloads from the canonical public practice files."""

from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile

public = Path(__file__).resolve().parents[1] / 'docs/public'
downloads = public / 'downloads'
downloads.mkdir(exist_ok=True)
for day in (1, 2):
    files = public / f'files/day-{day}'
    assets = sorted(path for path in files.rglob('*') if path.is_file() and path.name != '.DS_Store')
    if not assets:
        raise ValueError(f'No practice files for Day {day}')
    with ZipFile(downloads / f'day-{day}-practice-files.zip', 'w', ZIP_DEFLATED) as archive:
        for asset in assets:
            archive.write(asset, asset.relative_to(files))
with ZipFile(downloads / 'handoff-review-starter.zip', 'w', ZIP_DEFLATED) as archive:
    archive.write(public / 'files/day-2/sme-handoff/handoff-review-starter/SKILL.md', 'SKILL.md')
