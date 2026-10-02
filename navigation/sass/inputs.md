---
layout: post
title: 'Sass — Inputs'
permalink: /homework/sass/inputs/
hide_date: true
show_reading_time: false
categories: [SASS]
lesson_language: SASS
lesson_topic: Inputs HW
lesson_part: interactive
lesson_type: lesson
author: ishans17321
---

<link data-sass-styles rel="stylesheet" href="{{ "/assets/css/sass-homework.css" | relative_url }}">

<div class="sass-homework" markdown="1">

[All Sass homework]({{ '/homework/sass/' | relative_url }}) · [Original lesson](https://pages.opencodingsociety.com/sass/inputs/) · [Download notebook]({{ '/assets/sass-homework/notebooks/inputs.ipynb' | relative_url }})

PVO input refactors with explicit labels, size modifiers, and a class-based gradient.

Completed examples run below. Open the source to edit it, then choose **Run code**. **Reset solution** restores the original, and **Phone preview** narrows the result.

## Popcorn — large gradient and compact plain input

Removes both the inline styling and the made-up class while preserving the purpose of each field.

{% include sass-example.html file="sass-homework/inputs-popcorn.html" title="Popcorn — large gradient and compact plain input" id="inputs-popcorn" %}

## Homework — signup field refactor

All three fields have labels and the requested size classes; only the assistance field uses gradient.

{% include sass-example.html file="sass-homework/inputs-homework.html" title="Homework — signup field refactor" id="inputs-homework" %}

## Practice — local signup preview

The separate extension connects styled input controls to visible output and native form validation.

{% include sass-example.html file="sass-homework/inputs-bonus.html" title="Practice — local signup preview" id="inputs-bonus" %}

## Practice — values, conversion, and validation

The resource field updates as you type. The skill button reads a value on click. Age demonstrates string concatenation versus numeric addition; blank and invalid values are handled separately. Email checks illustrate a simple format check, not proof that an address exists.

{% include sass-example.html file="sass-homework/inputs-values.html" title="Practice — values, conversion, and validation" id="inputs-values" %}

## Input grammar and behavior

`ocs__input` supplies the shared appearance; `small`, `medium`, and `large` communicate size. `gradient` adds a reusable background. The name field is compact, the email field standard, and the assistance field large.

The bonus form reads strings from `.value`, uses the browser's required/email validation, and writes output with `textContent`. It does not transmit data or create a real signup. Use fictional values when trying it.

## Code runner answers

For `rawAge = "21"`, `rawAge + 1` produces `"211"`, whereas `Number(rawAge) + 1` produces `22`. Convert before arithmetic, and reject blank input first because `Number("")` is zero. A malformed number converts to `NaN`.

The email practice accepts `alex@example.com`; it rejects `alex`, `alex@`, and `alex @example.com`. Its pattern requires nonempty parts around `@`, a dot in the domain, and no whitespace. This is only a teaching check.

The browser input/output flow can also be expressed in AP CSP pseudocode:

```text
DISPLAY("Enter a volunteer skill")
skill ← INPUT()
DISPLAY(skill)
```

## Submission note

Classroom participation, peer review, and submitting the published URL are separate student actions; no submission or quiz attempt is claimed here.

</div>
<script src="{{ "/assets/js/sass-homework.js" | relative_url }}" defer></script>
