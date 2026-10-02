"""Build Sass pages and downloadable notebooks from shared lesson/example sources.

Run from the repository root: python3 scripts/build_sass_homework.py
The editable content lives in assets/sass-homework/manifest.json and
_includes/sass-homework/*.html. Generated files are checked in for Jekyll.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
lessons = json.loads((ROOT / "assets/sass-homework/manifest.json").read_text())
downloads = ROOT / "assets/sass-homework/notebooks"
downloads.mkdir(parents=True, exist_ok=True)
(ROOT / "navigation/sass").mkdir(parents=True, exist_ok=True)
(ROOT / "_notebooks/homework/sass").mkdir(parents=True, exist_ok=True)


def markdown_cell(source):
    return {"cell_type": "markdown", "metadata": {}, "source": source}


rows = []
for lesson in lessons:
    slug, title = lesson["slug"], lesson["title"]
    frontmatter = f"---\nlayout: post\ntitle: 'Sass — {title}'\npermalink: /homework/sass/{slug}/\nhide_date: true\nshow_reading_time: false\ncategories: [SASS]\nlesson_language: SASS\nlesson_topic: {slug.title()} HW\nlesson_part: interactive\nlesson_type: lesson\nauthor: ishans17321\n---\n"
    header = (
        f"[All Sass homework]({{{{ '/homework/sass/' | relative_url }}}}) · "
        f"[Original lesson]({lesson['url']}) · "
        f"[Download notebook]({{{{ '/assets/sass-homework/notebooks/{slug}.ipynb' | relative_url }}}})\n\n"
        + lesson["intro"] + "\n\n"
    )
    page = frontmatter + '\n<link data-sass-styles rel="stylesheet" href="{{ "/assets/css/sass-homework.css" | relative_url }}">\n\n'
    page += '<div class="sass-homework" markdown="1">\n\n' + header
    if lesson["examples"]:
        page += "Completed examples run below. Open the source to edit it, then choose **Run code**. **Reset solution** restores the original, and **Phone preview** narrows the result.\n\n"
    notebook_frontmatter = frontmatter.replace(f"/homework/sass/{slug}/", f"/homework/sass/{slug}/notebook/")
    cells = [markdown_cell(notebook_frontmatter + '\n' + header)]
    cells.append(markdown_cell(
        "## Running the examples\n\n"
        "Each code cell uses `%%html` and a `UI_RUNNER` marker as requested by the lesson. "
        "The portfolio lesson page provides styled, sandboxed previews and editable source. "
        "Plain Jupyter needs the OCS stylesheet and JavaScript support to reproduce those previews; "
        "the HTML markup itself is kept clean for submission. The optional preview shell below is separate from the submitted solutions."
    ))
    for example in lesson["examples"]:
        page += "## " + example["title"] + "\n\n" + example["explanation"] + "\n\n"
        page += '{% include sass-example.html file="' + example["file"] + '" title="' + example["title"] + '" id="' + example["id"] + '" %}\n\n'
        code = (ROOT / "_includes" / example["file"]).read_text()
        cells.append(markdown_cell("## " + example["title"] + "\n\n" + example["explanation"]))
        cells.append({"cell_type": "code", "metadata": {}, "source": "%%html\n<!-- UI_RUNNER: " + example["title"] + " -->\n" + code,
                      "execution_count": None, "outputs": []})
    page += lesson["notes"] + "\n\n"
    cells.append(markdown_cell(lesson["notes"].replace('{{ "/about/" | relative_url }}', 'https://ishans17321.github.io/portfolio/about/')))
    note = "Classroom participation, peer review, and submitting the published URL are separate student actions; no submission or quiz attempt is claimed here."
    page += "## Submission note\n\n" + note + '\n\n</div>\n<script src="{{ "/assets/js/sass-homework.js" | relative_url }}" defer></script>\n'
    cells.append(markdown_cell("## Submission note\n\n" + note))
    if lesson["examples"]:
        cells.append(markdown_cell("## Optional Jupyter preview\n\nThis Python cell puts the completed solutions into separate HTML frames and loads the published homework CSS. Run it after publishing the portfolio. It does not replace the individual submission cells above."))
        sources = [(e["title"], (ROOT / "_includes" / e["file"]).read_text()) for e in lesson["examples"]]
        preview_code = (
            "from IPython.display import HTML, display\nimport html\n\n"
            "examples = " + repr(sources) + "\n"
            "stylesheet = 'https://ishans17321.github.io/portfolio/assets/css/sass-homework.css'\n"
            "for title, source in examples:\n"
            "    document = '<!doctype html><html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"' + stylesheet + '\"></head><body class=\"sass-preview\">' + source + '</body></html>'\n"
            "    display(HTML('<h3>' + html.escape(title) + '</h3><iframe title=\"' + html.escape(title, quote=True) + '\" width=\"100%\" height=\"480\" sandbox=\"allow-scripts allow-forms allow-popups\" srcdoc=\"' + html.escape(document, quote=True) + '\"></iframe>'))\n"
        )
        cells.append({"cell_type": "code", "metadata": {}, "source": preview_code, "execution_count": None, "outputs": []})
    notebook = {"cells": cells, "metadata": {"kernelspec": {"display_name": "Python 3", "language": "python", "name": "python3"},
                "language_info": {"name": "python", "version": "3.12"}}, "nbformat": 4, "nbformat_minor": 5}
    for index, cell in enumerate(cells):
        cell["id"] = f"{slug}-{index}"
    content = json.dumps(notebook, indent=2) + "\n"
    (ROOT / f"navigation/sass/{slug}.md").write_text(page)
    (ROOT / f"_notebooks/homework/sass/2026-10-01-sass-{slug}.ipynb").write_text(content)
    (downloads / f"{slug}.ipynb").write_text(content)
    count = len(lesson["examples"])
    rows.append(f"| [{title}]({{{{ '/homework/sass/{slug}/' | relative_url }}}}) | {count} examples" + (" + applied About-page refactor" if not count else "") + f" | [IPYNB]({{{{ '/assets/sass-homework/notebooks/{slug}.ipynb' | relative_url }}}}) |")

hub = """---
layout: post
title: Sass Homework & Hacks
permalink: /homework/sass/
hide_date: true
show_reading_time: false
---

[Back to HW]({{ '/homework/' | relative_url }})

Completed work for all seven lessons linked from the [OCS Sass reference](https://pages.opencodingsociety.com/navigation/sass/). Each lesson has its own solutions and explanations; interactive examples include editable source, a reset button, and a phone-width preview. Notebooks contain the popcorn hacks and homework in separate cells.

| Lesson | Work included | Download |
| --- | --- | --- |
""" + "\n".join(rows) + """

The examples cover both Buttons homework assignments, all three toggle features with a live count, the Grids answer key and validation checklist, and the optional container variant. The refactoring guide is applied to the existing About gallery.

The OCS grammar stylesheet is compiled locally from Sass, so these examples work with this portfolio's older theme. Sample measurements and parade schedules are fictional. Form and button interactions are local demos.

Notebook cells preserve `%%html` and `UI_RUNNER` markers. Their optional Jupyter preview needs the published site stylesheet. Classroom participation, peer feedback, and assignment submission are not claimed by these solutions.
"""
(ROOT / "navigation/sass-homework.md").write_text(hub)
print(f"Built {len(lessons)} lesson pages, hub, and notebook pairs.")
