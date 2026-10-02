---
layout: post
title: 'Sass — Toggles'
permalink: /homework/sass/toggles/
hide_date: true
show_reading_time: false
categories: [SASS]
lesson_language: SASS
lesson_topic: Toggles HW
lesson_part: interactive
lesson_type: lesson
author: ishans17321
---

<link data-sass-styles rel="stylesheet" href="{{ "/assets/css/sass-homework.css" | relative_url }}">

<div class="sass-homework" markdown="1">

[All Sass homework]({{ '/homework/sass/' | relative_url }}) · [Original lesson](https://pages.opencodingsociety.com/sass/toggles) · [Download notebook]({{ '/assets/sass-homework/notebooks/toggles.ipynb' | relative_url }})

Three independent settings control an RC flight project preview and update a live enabled-count.

Completed examples run below. Open the source to edit it, then choose **Run code**. **Reset solution** restores the original, and **Phone preview** narrows the result.

## Practice — fix the missing track

The missing ocs__toggle-track class is restored, with aria-hidden on the decorative span.

{% include sass-example.html file="sass-homework/toggles-bug.html" title="Practice — fix the missing track" id="toggles-bug" %}

## Practice — customize the checked color

The original green has been replaced by purple. This exercise intentionally permits custom styling.

{% include sass-example.html file="sass-homework/toggles-color.html" title="Practice — customize the checked color" id="toggles-color" %}

## Practice — connect a toggle to content

The checkbox and content have separate IDs, and a change handler connects the state to visibility.

{% include sass-example.html file="sass-homework/toggles-connect.html" title="Practice — connect a toggle to content" id="toggles-connect" %}

## Homework — interactive flight project settings

Three labeled toggles have different working purposes. The count initializes to 1 and updates through every combination.

{% include sass-example.html file="sass-homework/toggles-homework.html" title="Homework — interactive flight project settings" id="toggles-homework" %}

## Popcorn — fill in the blanks

1. **Checkbox:** stores whether the setting is enabled.
2. **Slider:** the visible track reflects the state.
3. **Alignment:** the switch wrapper aligns the control and label.
4. **border-radius:** rounds the track and thumb.
5. **White circle:** the `::before` pseudo-element draws the thumb. It is a pseudo-element, not a class.

## How the homework works

JavaScript reads each checkbox's boolean `.checked` property. The detail setting shows or hides the project notes; light mode changes the preview's palette; compact mode changes card spacing. Every change also recomputes the enabled count, so the count cannot drift out of sync. Labels stay clickable, native checkboxes support keyboard input, and the decorative track is hidden from assistive technology.

## Submission note

Classroom participation, peer review, and submitting the published URL are separate student actions; no submission or quiz attempt is claimed here.

</div>
<script src="{{ "/assets/js/sass-homework.js" | relative_url }}" defer></script>
