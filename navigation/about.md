---
layout: page
title: About Me
permalink: /about/
description: "Meet Ishan Shrivastava: San Diego builder, RC aviation enthusiast, and computer science student."
---

<style>
  .post > .post-title { display: none; }
  .post-content { margin-top: 0; }

  .about-page {
    --about-ink: #f7f7f2;
    --about-muted: #a9b2bd;
    --about-line: rgba(255, 255, 255, 0.13);
    --about-accent: #ffb84d;
    --about-blue: #75d5ff;
    color: var(--about-ink);
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    padding: 1.5rem 0 4rem;
  }

  .about-page * { box-sizing: border-box; }

  .about-hero {
    min-height: 520px;
    display: flex;
    align-items: end;
    padding: clamp(2rem, 6vw, 5rem);
    border: 1px solid var(--about-line);
    border-radius: 30px;
    background: linear-gradient(145deg, #111820 0%, #090c10 72%);
  }

  .about-kicker {
    margin: 0 0 1.5rem;
    color: var(--about-blue);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .about-title {
    max-width: 760px;
    margin: 0;
    color: #fff;
    font-size: clamp(3.4rem, 9vw, 7.4rem);
    font-weight: 800;
    line-height: 0.88;
    letter-spacing: -0.07em;
  }

  .about-title span { color: var(--about-accent); }

  .about-intro {
    max-width: 650px;
    margin: 2rem 0 0;
    color: #c7ced6;
    font-size: clamp(1.05rem, 2vw, 1.28rem);
    line-height: 1.7;
  }
</style>

<main class="about-page">
  <section class="about-hero" aria-labelledby="about-title">
    <div>
      <p class="about-kicker">Builder · Pilot · Programmer</p>
      <h1 class="about-title" id="about-title">Hi, I'm<br><span>Ishan.</span></h1>
      <p class="about-intro">
        I'm a San Diego–raised student who loves turning ideas into things that move, fly, and work. My world sits where engineering, computer science, and hands-on building meet.
      </p>
    </div>
  </section>
</main>
