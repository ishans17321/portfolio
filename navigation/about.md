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

  .about-section { padding: clamp(4rem, 9vw, 7rem) 0 0; }

  .about-section-head {
    display: grid;
    grid-template-columns: 0.75fr 1.25fr;
    gap: 2rem;
    align-items: start;
    margin-bottom: 2.5rem;
  }

  .about-eyebrow {
    margin: 0;
    color: var(--about-accent);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .about-section h2 {
    margin: 0;
    color: #fff;
    font-size: clamp(2rem, 5vw, 3.7rem);
    line-height: 1.05;
    letter-spacing: -0.045em;
  }

  .about-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .about-card {
    min-height: 270px;
    padding: 1.65rem;
    border: 1px solid var(--about-line);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.055);
  }

  .about-card-number {
    color: var(--about-blue);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.12em;
  }

  .about-card h3 {
    margin: 3.5rem 0 0.8rem;
    color: #fff;
    font-size: 1.45rem;
  }

  .about-card p {
    margin: 0;
    color: var(--about-muted);
    line-height: 1.65;
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

  <section class="about-section" aria-labelledby="what-i-build">
    <div class="about-section-head">
      <p class="about-eyebrow">What drives me</p>
      <h2 id="what-i-build">I like understanding how things work—then building my own.</h2>
    </div>

    <div class="about-cards">
      <article class="about-card">
        <span class="about-card-number">01 / FLIGHT</span>
        <h3>RC Planes</h3>
        <p>I fly radio-controlled planes and enjoy the mix of precision, patience, aerodynamics, and pure fun that comes with every flight.</p>
      </article>

      <article class="about-card">
        <span class="about-card-number">02 / BUILD</span>
        <h3>RC Drones</h3>
        <p>Building drones lets me work across electronics, mechanics, tuning, and troubleshooting—exactly the kind of challenge I enjoy.</p>
      </article>

      <article class="about-card">
        <span class="about-card-number">03 / CODE</span>
        <h3>Engineering + CS</h3>
        <p>I love combining software with real hardware, using code not just on a screen but as a tool for creating useful, responsive systems.</p>
      </article>
    </div>
  </section>
</main>
