---
layout: post
title: 'Sass — Containers'
permalink: /homework/sass/containers/
hide_date: true
show_reading_time: false
categories: [SASS]
lesson_language: SASS
lesson_topic: Containers HW
lesson_part: interactive
lesson_type: lesson
author: ishans17321
---

<link data-sass-styles rel="stylesheet" href="{{ "/assets/css/sass-homework.css" | relative_url }}">

<div class="sass-homework" markdown="1">

[All Sass homework]({{ '/homework/sass/' | relative_url }}) · [Original lesson](https://pages.opencodingsociety.com/navigation/sass/containers/lesson) · [Download notebook]({{ '/assets/sass-homework/notebooks/containers.ipynb' | relative_url }})

A repaired invite and a complete Poway Scripps Rotary Parade hub. Dates and schedule details below are fictional classroom examples, not event announcements.

Completed examples run below. Open the source to edit it, then choose **Run code**. **Reset solution** restores the original, and **Phone preview** narrows the result.

## Popcorn — parade invite rescue

Replaces the unstyled wrapper and hand-built flex row with the shared container grammar.

{% include sass-example.html file="sass-homework/containers-popcorn.html" title="Popcorn — parade invite rescue" id="containers-popcorn" %}

## Homework — Rotary Parade hub

The required solution uses only OCS container grammar, including the table and callout.

{% include sass-example.html file="sass-homework/containers-homework.html" title="Homework — Rotary Parade hub" id="containers-homework" %}

## Optional hack — tinted container

The custom modifier is limited to this optional example.

{% include sass-example.html file="sass-homework/containers-bonus.html" title="Optional hack — tinted container" id="containers-bonus" %}

## Structure and responsive behavior

Each required example has exactly one container around one card. The homework adds a three-column grid with header, accent, and muted roles, a wrapped table with two body rows, and a closing callout. Below 600px the standard grid uses two columns; the table wrapper scrolls if it needs more room.

## Optional Sass extension

The separate bonus preview uses the following variant, compiled in the homework stylesheet. It leaves the required solution class-only.

```scss
.parade-container--tinted {
  border-left: 4px solid var(--lab-accent);
  background: var(--lab-panel);
}
```

## Submission note

Classroom participation, peer review, and submitting the published URL are separate student actions; no submission or quiz attempt is claimed here.

</div>
<script src="{{ "/assets/js/sass-homework.js" | relative_url }}" defer></script>
