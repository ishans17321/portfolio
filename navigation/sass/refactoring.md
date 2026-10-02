---
layout: post
title: 'Sass — CSS to Sass Refactoring'
permalink: /homework/sass/refactoring/
hide_date: true
show_reading_time: false
categories: [SASS]
lesson_language: SASS
lesson_topic: Refactoring HW
lesson_part: interactive
lesson_type: lesson
author: ishans17321
---

<link data-sass-styles rel="stylesheet" href="{{ "/assets/css/sass-homework.css" | relative_url }}">

<div class="sass-homework" markdown="1">

[All Sass homework]({{ '/homework/sass/' | relative_url }}) · [Original lesson](https://pages.opencodingsociety.com/sass/guide) · [Download notebook]({{ '/assets/sass-homework/notebooks/refactoring.ipynb' | relative_url }})

Applied the reference guide to the real image gallery on my About page.

## Completed refactor

The guide is a reference tutorial rather than a separately scored homework. I applied its workflow to `navigation/about.md`: moved the gallery's embedded CSS into `_sass/open-coding/about-gallery.scss`, registered that partial in `_sass/open-coding/_main.scss`, and removed the old style block. The existing image content stays in About.

The nested `img` rule becomes `.image-gallery img` when Sass compiles. `$gallery-gap` and `$gallery-radius` centralize reusable values, and `$gallery-gap * 15` preserves the original 150px image height. This gallery has no hardcoded colors to replace. The new homework stylesheet uses the repository's root color variables.

### Before: embedded CSS

```css
.image-gallery { display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 10px; }
.image-gallery img { max-height: 150px; object-fit: cover; border-radius: 5px; }
```

### After: a registered Sass partial

```scss
$gallery-gap: 10px;
$gallery-radius: 5px;
.image-gallery {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: $gallery-gap;
  img {
    max-height: $gallery-gap * 15;
    object-fit: cover;
    border-radius: $gallery-radius;
  }
}
```

### Import chain

`minima/custom-styles.scss` → `open-coding/_main.scss` → `about-gallery.scss` → compiled site CSS.

[View the actual About gallery]({{ "/about/" | relative_url }}).

### Sass features in the homework implementation

The homework stylesheet also uses a reusable `lab-panel` mixin, a map of button tones generated with `@each`, nested hover/focus rules, and spacing arithmetic. These choices keep the repeated components consistent. CSS custom properties handle runtime theme changes; Sass variables supply build-time defaults.

## Submission note

Classroom participation, peer review, and submitting the published URL are separate student actions; no submission or quiz attempt is claimed here.

</div>
<script src="{{ "/assets/js/sass-homework.js" | relative_url }}" defer></script>
