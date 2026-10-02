---
layout: post
title: 'Sass — Buttons'
permalink: /homework/sass/buttons/
hide_date: true
show_reading_time: false
categories: [SASS]
lesson_language: SASS
lesson_topic: Buttons HW
lesson_part: interactive
lesson_type: lesson
author: ishans17321
---

<link data-sass-styles rel="stylesheet" href="{{ "/assets/css/sass-homework.css" | relative_url }}">

<div class="sass-homework" markdown="1">

[All Sass homework]({{ '/homework/sass/' | relative_url }}) · [Original lesson](https://pages.opencodingsociety.com/sass/buttons) · [Download notebook]({{ '/assets/sass-homework/notebooks/buttons.ipynb' | relative_url }})

Three popcorn hacks and both assigned homework refactors. These are classroom interface demos; sample actions report their result locally.

Completed examples run below. Open the source to edit it, then choose **Run code**. **Reset solution** restores the original, and **Phone preview** narrows the result.

## Popcorn 1 — base class

The base button class replaces the missing styling hook.

{% include sass-example.html file="sass-homework/buttons-popcorn-1.html" title="Popcorn 1 — base class" id="buttons-popcorn-1" %}

## Popcorn 2 — modifiers and group

The primary action has both pill and fill; both actions share one links container.

{% include sass-example.html file="sass-homework/buttons-popcorn-2.html" title="Popcorn 2 — modifiers and group" id="buttons-popcorn-2" %}

## Popcorn 3 — status tones and wide bar

The second action uses green, the group is wide, and the support action has fill.

{% include sass-example.html file="sass-homework/buttons-popcorn-3.html" title="Popcorn 3 — status tones and wide bar" id="buttons-popcorn-3" %}

## Homework 1 — adaptive resource toolbar

All three resource categories use the exact requested tone, fill/outline, and shape modifiers.

{% include sass-example.html file="sass-homework/buttons-homework-1.html" title="Homework 1 — adaptive resource toolbar" id="buttons-homework-1" %}

## Homework 2 — primary and secondary actions

The filled primary action stands out from the outlined secondary and alert actions. The links preserve the lesson’s resource destination.

{% include sass-example.html file="sass-homework/buttons-homework-2.html" title="Homework 2 — primary and secondary actions" id="buttons-homework-2" %}

## Design explanation

The base class gives every action consistent spacing. `pill` changes its shape, `fill` gives an action visual weight, and `outline` supports a secondary action. Semantic tone classes express urgency without hardcoding colors into markup. Text labels communicate intent even when colors are difficult to distinguish.

The second homework follows the written requirement **Crisis Hotline** where the starter inconsistently says Mental Health Blog. Resource links use a normal URL rather than Markdown embedded inside an HTML href.

## Submission note

Classroom participation, peer review, and submitting the published URL are separate student actions; no submission or quiz attempt is claimed here.

</div>
<script src="{{ "/assets/js/sass-homework.js" | relative_url }}" defer></script>
