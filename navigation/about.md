---
layout: page
title: About Me
permalink: /about/
description: "Meet Ishan Shrivastava: San Diego builder, RC aviation enthusiast, and computer science student."
photos:
  portrait: "/images/ishan/portrait.jpg"
  rc_plane: "/images/ishan/rc-plane.jpg"
  drone: "/images/ishan/drone-build.jpg"
  engineering: "/images/ishan/engineering-cs.jpg"
  san_diego: "/images/ishan/san-diego.jpg"
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
    width: min(1280px, calc(100vw - 40px));
    margin-left: 50%;
    padding: 2rem 0 6rem;
    transform: translateX(-50%);
  }

  .about-page * { box-sizing: border-box; }

  .about-hero {
    position: relative;
    overflow: hidden;
    min-height: 650px;
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
    gap: clamp(3rem, 7vw, 7rem);
    align-items: end;
    padding: clamp(2.5rem, 6vw, 6rem);
    border: 1px solid var(--about-line);
    border-radius: 30px;
    background:
      radial-gradient(circle at 85% 15%, rgba(117, 213, 255, 0.16), transparent 28%),
      radial-gradient(circle at 15% 95%, rgba(255, 184, 77, 0.13), transparent 28%),
      linear-gradient(145deg, #111820 0%, #090c10 72%);
    isolation: isolate;
  }

  .about-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0.22;
    background-image:
      linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: linear-gradient(to bottom, black, transparent 80%);
  }

  .about-kicker {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    margin: 0 0 1.5rem;
    color: var(--about-blue);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .about-kicker::before {
    content: "";
    width: 28px;
    height: 2px;
    background: currentColor;
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

  .about-intro p { margin: 0; }
  .about-intro p + p { margin-top: 1rem; }

  .about-intro-note {
    color: var(--about-muted);
    font-size: 0.95rem;
  }

  .about-location-card {
    align-self: stretch;
    min-height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.8rem;
    border: 1px solid var(--about-line);
    border-radius: 22px;
    background: rgba(5, 8, 12, 0.52);
  }

  .about-location-card svg {
    width: 54px;
    height: 54px;
    margin-bottom: auto;
    color: var(--about-accent);
  }

  .about-location-card small {
    color: var(--about-muted);
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .about-location-card strong {
    display: block;
    margin-top: 0.55rem;
    color: #fff;
    font-size: clamp(1.65rem, 3vw, 2.35rem);
    line-height: 1.05;
  }

  .about-section { padding: clamp(6rem, 11vw, 10rem) clamp(0rem, 2vw, 1.5rem) 0; }

  .about-section-head {
    display: grid;
    grid-template-columns: minmax(180px, 0.6fr) minmax(0, 1.4fr);
    gap: clamp(2rem, 7vw, 7rem);
    align-items: start;
    margin-bottom: clamp(3rem, 6vw, 5rem);
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
    transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
  }

  .about-card:hover {
    transform: translateY(-5px);
    border-color: rgba(117, 213, 255, 0.42);
    background: rgba(117, 213, 255, 0.07);
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

  .about-stories {
    display: grid;
    gap: clamp(5rem, 10vw, 9rem);
  }

  .about-story {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
    gap: clamp(2rem, 7vw, 6rem);
    align-items: center;
  }

  .about-story-media {
    position: relative;
    min-height: 520px;
    overflow: hidden;
    border: 1px solid var(--about-line);
    border-radius: 28px;
    background: linear-gradient(145deg, rgba(117,213,255,.12), rgba(255,255,255,.025));
  }

  .about-story-media img {
    position: absolute;
    inset: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    margin: 0;
    object-fit: cover;
  }

  .about-photo-empty {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
  }

  .about-photo-empty svg { width: 82px; color: rgba(255,255,255,.42); }

  .about-photo-path {
    color: var(--about-muted);
    font-size: 0.78rem;
    line-height: 1.5;
  }

  .about-photo-path code {
    display: block;
    margin-top: 0.45rem;
    color: var(--about-blue);
    overflow-wrap: anywhere;
  }

  .about-story-copy { max-width: 520px; }

  .about-story-copy h3 {
    margin: 0 0 1.5rem;
    color: #fff;
    font-size: clamp(2rem, 4vw, 3.4rem);
    line-height: 1.05;
    letter-spacing: -0.04em;
  }

  .about-story-copy p {
    margin: 0;
    color: #c4ccd4;
    font-size: 1.05rem;
    line-height: 1.8;
  }

  .about-story-copy p + p { margin-top: 1.25rem; }

  .about-gallery {
    display: grid;
    grid-template-columns: 1.4fr 0.8fr 0.8fr;
    gap: 1rem;
  }

  .about-photo {
    min-height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
    overflow: hidden;
    border: 1px dashed rgba(255,255,255,.25);
    border-radius: 22px;
    background: radial-gradient(circle at 70% 20%, rgba(117,213,255,.13), transparent 35%), rgba(255,255,255,.035);
  }

  .about-photo:nth-child(2) {
    background: radial-gradient(circle at 20% 70%, rgba(255,184,77,.15), transparent 40%), rgba(255,255,255,.035);
  }

  .about-photo svg {
    width: 64px;
    height: 64px;
    color: rgba(255,255,255,.5);
  }

  .about-photo-label {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 1rem;
  }

  .about-photo-label strong { color: #fff; font-size: 1.05rem; }
  .about-photo-label span { color: var(--about-muted); font-size: 0.78rem; }

  .about-quote {
    margin-top: clamp(4rem, 9vw, 7rem);
    padding: clamp(2rem, 6vw, 4.5rem);
    border-left: 4px solid var(--about-accent);
    border-radius: 0 24px 24px 0;
    background: linear-gradient(90deg, rgba(255,184,77,.09), transparent);
  }

  .about-quote p {
    max-width: 850px;
    margin: 0;
    color: #fff;
    font-size: clamp(1.6rem, 4vw, 3.1rem);
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.035em;
  }

  .about-quote span {
    display: block;
    margin-top: 1rem;
    color: var(--about-muted);
    font-size: 0.9rem;
  }

  @media (max-width: 760px) {
    .about-page { padding-top: 0.5rem; }

    .about-hero {
      min-height: auto;
      grid-template-columns: 1fr;
      gap: 2.5rem;
      padding: 2rem 1.35rem;
      border-radius: 22px;
    }

    .about-title { font-size: clamp(3rem, 18vw, 5.2rem); }
    .about-location-card { min-height: 220px; }

    .about-section-head {
      grid-template-columns: 1fr;
      gap: 0.9rem;
    }

    .about-cards, .about-gallery { grid-template-columns: 1fr; }
    .about-card { min-height: 230px; }
    .about-photo { min-height: 260px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .about-card { transition: none; }
  }
</style>

<main class="about-page">
  <section class="about-hero" aria-labelledby="about-title">
    <div>
      <p class="about-kicker">Builder · Pilot · Programmer</p>
      <h1 class="about-title" id="about-title">Hi, I'm<br><span>Ishan.</span></h1>
      <div class="about-intro">
        <p>I'm Ishan. I've lived in San Diego my whole life, and most of the things I enjoy involve figuring out how something works and then trying to build a version of it myself.</p>
        <p class="about-intro-note">A lot of my time goes into RC planes, homemade drones, engineering, and computer science. This page is a place for the projects, photos, and lessons that come out of all of that.</p>
      </div>
    </div>

    <aside class="about-location-card" aria-label="Home location">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/>
        <circle cx="12" cy="10" r="2.5"/>
      </svg>
      <small>Home base</small>
      <strong>San Diego,<br>California</strong>
    </aside>
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

  <section class="about-section" aria-labelledby="project-stories">
    <div class="about-section-head">
      <p class="about-eyebrow">A closer look</p>
      <h2 id="project-stories">The hobbies that keep me curious.</h2>
    </div>

    <div class="about-stories">
      <article class="about-story">
        <div class="about-story-media">
          <img src="{{ page.photos.rc_plane | relative_url }}" alt="Ishan with one of his RC planes" loading="lazy" onerror="this.style.display='none'">
          <div class="about-photo-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">
              <path d="m3 14 8.5-4V5.5a.5.5 0 0 1 1 0V10l8.5 4v1.5l-8.5-2v4l2 1.5v1l-2.5-.7-2.5.7v-1l2-1.5v-4l-8.5 2V14Z"/>
            </svg>
            <span class="about-photo-path">Add the flying photo here:<code>{{ page.photos.rc_plane }}</code></span>
          </div>
        </div>
        <div class="about-story-copy">
          <p class="about-eyebrow">01 · RC planes</p>
          <h3>Flying makes engineering feel real.</h3>
          <p>I fly RC planes because there is always something to pay attention to. A small adjustment can change how a plane feels in the air, and every flight teaches me a little more about control, balance, and staying patient.</p>
          <p>I also just like being outside and seeing something I worked on leave the ground. Not every landing is perfect, but fixing what went wrong is part of what makes the next flight better.</p>
        </div>
      </article>
    </div>
  </section>

  <section class="about-section" aria-labelledby="field-notes">
    <div class="about-section-head">
      <p class="about-eyebrow">Field notes</p>
      <h2 id="field-notes">Projects are better when you can see the story behind them.</h2>
    </div>

    <div class="about-gallery" aria-label="Future photo gallery">
      <div class="about-photo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
          <path d="m3 14 8.5-4V5.5a.5.5 0 0 1 1 0V10l8.5 4v1.5l-8.5-2v4l2 1.5v1l-2.5-.7-2.5.7v-1l2-1.5v-4l-8.5 2V14Z"/>
        </svg>
        <div class="about-photo-label"><strong>At the flying field</strong><span>Photo coming soon</span></div>
      </div>

      <div class="about-photo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
          <circle cx="5" cy="6" r="3"/><circle cx="19" cy="6" r="3"/><circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/>
          <path d="m7 8 10 8m0-8L7 16m5-6v4"/>
        </svg>
        <div class="about-photo-label"><strong>Drone builds</strong><span>Photo coming soon</span></div>
      </div>

      <div class="about-photo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
          <rect x="3" y="5" width="18" height="13" rx="2"/><path d="m8 10-2 2 2 2m8-4 2 2-2 2m-5 3h2"/>
        </svg>
        <div class="about-photo-label"><strong>In the workshop</strong><span>Photo coming soon</span></div>
      </div>
    </div>
  </section>

  <section class="about-quote" aria-label="Personal philosophy">
    <p>Build it. Test it. Learn what broke. Make the next version better.</p>
    <span>My approach to engineering, coding, and just about everything else.</span>
  </section>
</main>
