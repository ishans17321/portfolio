---
layout: post
title: 'Sass — Grids'
permalink: /homework/sass/grids/
hide_date: true
show_reading_time: false
categories: [SASS]
lesson_language: SASS
lesson_topic: Grids HW
lesson_part: interactive
lesson_type: lesson
author: ishans17321
---

<link data-sass-styles rel="stylesheet" href="{{ "/assets/css/sass-homework.css" | relative_url }}">

<div class="sass-homework" markdown="1">

[All Sass homework]({{ '/homework/sass/' | relative_url }}) · [Original lesson](https://pages.opencodingsociety.com/sass/grids/) · [Download notebook]({{ '/assets/sass-homework/notebooks/grids.ipynb' | relative_url }})

Lab layouts using the OCS grid grammar. All measurements are sample data.

Completed examples run below. Open the source to edit it, then choose **Run code**. **Reset solution** restores the original, and **Phone preview** narrows the result.

## Popcorn 1 — repair the beaker row

One standard grid, three cells, and no inline styles.

{% include sass-example.html file="sass-homework/grids-popcorn-1.html" title="Popcorn 1 — repair the beaker row" id="grids-popcorn-1" %}

## Popcorn 2 — four fractional tracks

Four values create four columns. The final 2fr track is twice as wide as each 1fr track, excluding the gaps.

{% include sass-example.html file="sass-homework/grids-popcorn-2.html" title="Popcorn 2 — four fractional tracks" id="grids-popcorn-2" %}

## Homework — readings and keypad

The live checklist evaluates the markup above it; all eight rules should pass. The keypad demonstrates layout only.

{% include sass-example.html file="sass-homework/grids-homework.html" title="Homework — readings and keypad" id="grids-homework" %}

## Practice — column counts and cell types

This extension moves the accent to Beaker 1 and demonstrates four columns, a muted control, and a wide notes cell. Change the variant in the editor to try color, holographic, or gallery.

{% include sass-example.html file="sass-homework/grids-practice.html" title="Practice — column counts and cell types" id="grids-practice" %}

## Practice — fourth beaker wraps

Four readings in a standard three-track grid put the fourth reading on the next row. On a phone, the grid has two tracks.

{% include sass-example.html file="sass-homework/grids-wrap.html" title="Practice — fourth beaker wraps" id="grids-wrap" %}

## Practice — complete lab card

A third cell adds the requested conclusion. Each report section has a heading and paragraph.

{% include sass-example.html file="sass-homework/grids-conclusion.html" title="Practice — complete lab card" id="grids-conclusion" %}

## Knowledge check answers

**Answer key: A, B, C, D (4 correct answers).** This is a worked answer key, not a claim of a submitted quiz attempt.

1. **A — `cols-4`:** four equal tracks in a standard grid.
2. **B — two boxes, first twice as wide:** `2fr 1fr` divides the available space into three shares.
3. **C — `ocs__grid-cell--header`:** spans all columns; `--wide` spans only two.
4. **D — the hand-styled row:** a made-up class and an inline layout break the class-only rule.

## Design explanation

The standard variant fits comparable readings. A header names the trial, while an accent flags the unusually high reading. The calculator variant gives the keypad four columns. In the fraction exercise only, an inline `grid-template-columns` declaration is intentionally allowed by the lesson. The final homework contains no inline styles or invented classes.

## Submission note

Classroom participation, peer review, and submitting the published URL are separate student actions; no submission or quiz attempt is claimed here.

</div>
<script src="{{ "/assets/js/sass-homework.js" | relative_url }}" defer></script>
