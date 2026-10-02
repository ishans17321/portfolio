---
layout: post
title: 'Sass — Semantic HTML & Typography'
permalink: /homework/sass/typography/
hide_date: true
show_reading_time: false
categories: [SASS]
lesson_language: SASS
lesson_topic: Typography HW
lesson_part: interactive
lesson_type: lesson
author: ishans17321
---

<link data-sass-styles rel="stylesheet" href="{{ "/assets/css/sass-homework.css" | relative_url }}">

<div class="sass-homework" markdown="1">

[All Sass homework]({{ '/homework/sass/' | relative_url }}) · [Original lesson](https://pages.opencodingsociety.com/sass/typography) · [Download notebook]({{ '/assets/sass-homework/notebooks/typography.ipynb' | relative_url }})

Semantic refactors that let headings, paragraphs, and lists communicate the structure.

Completed examples run below. Open the source to edit it, then choose **Run code**. **Reset solution** restores the original, and **Phone preview** narrows the result.

## Popcorn — replace presentation-only divs

One topic heading, one supporting heading, and one lead paragraph; no custom CSS.

{% include sass-example.html file="sass-homework/typography-popcorn.html" title="Popcorn — replace presentation-only divs" id="typography-popcorn" %}

## Homework — semantic cat instructions

Includes a meaningful heading hierarchy, prose, strong emphasis, and one ordered list with exactly three items.

{% include sass-example.html file="sass-homework/typography-homework.html" title="Homework — semantic cat instructions" id="typography-homework" %}

## Why these tags work

`h2` starts the topic; `h3` introduces subsections; `h4` names the steps inside a subsection. Paragraphs hold prose, `strong` marks an important instruction, and an ordered list preserves the sequence. OCS typography roles use a **single underscore** in this lesson (`ocs_card`, `ocs_lead`); the container lesson uses two.

The refactor removes the hand-written font rules and fake numbered divs. A screen reader can now navigate the headings and recognize a three-step list.

## Submission note

Classroom participation, peer review, and submitting the published URL are separate student actions; no submission or quiz attempt is claimed here.

</div>
<script src="{{ "/assets/js/sass-homework.js" | relative_url }}" defer></script>
