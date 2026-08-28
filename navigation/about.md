---
layout: page
title: About Me
permalink: /about/
description: "Meet Ishan Shrivastava: San Diego builder, RC aviation enthusiast, and computer science student."
photos:
  portrait: "/images/ishan/portrait.jpg"
  rc_plane: "/images/ishan/rc-plane.png"
  drone: "/images/ishan/drone-build.png"
  engineering: "/images/ishan/engineering-cs.png"
  san_diego: "/images/ishan/san-diego.jpg"
  prison_break: "/images/ishan/prison-break.png"
  netflix: "/images/ishan/netflix.png"
  warriors: "/images/ishan/warriors.png"
  money: "/images/ishan/money.png"
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
    min-height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.8rem;
    border: 1px solid var(--about-line);
    border-radius: 22px;
    background: rgba(5, 8, 12, 0.52);
  }

  .about-portrait {
    position: relative;
    min-height: 250px;
    margin-bottom: 2rem;
    overflow: hidden;
    border-radius: 16px;
    background: linear-gradient(145deg, rgba(117,213,255,.16), rgba(255,184,77,.12));
  }

  .about-portrait img {
    position: absolute;
    inset: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    margin: 0;
    object-fit: cover;
  }

  .about-portrait-placeholder {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: rgba(255,255,255,.55);
    font-size: 4rem;
    font-weight: 800;
    letter-spacing: -0.08em;
  }

  .about-location-card > svg {
    width: 54px;
    height: 54px;
    margin-bottom: 1rem;
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
    gap: 1.5rem;
  }

  .about-card {
    min-height: 320px;
    padding: 2.2rem;
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

  .about-story:nth-child(even) .about-story-media { order: 2; }
  .about-story:nth-child(even) .about-story-copy { justify-self: end; }

  .about-home {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: clamp(2rem, 7vw, 6rem);
    align-items: stretch;
    padding: clamp(2rem, 5vw, 4rem);
    border: 1px solid var(--about-line);
    border-radius: 30px;
    background: linear-gradient(135deg, rgba(255,184,77,.1), rgba(117,213,255,.055));
  }

  .about-home-copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(1rem, 3vw, 2rem);
  }

  .about-home-copy h2 {
    margin: 1rem 0 1.5rem;
    font-size: clamp(2.3rem, 5vw, 4.5rem);
  }

  .about-home-copy p {
    margin: 0;
    color: #c4ccd4;
    font-size: 1.08rem;
    line-height: 1.8;
  }

  .about-home-copy p + p { margin-top: 1.2rem; }

  .about-home-photo {
    min-height: 500px;
    background: linear-gradient(155deg, rgba(255,184,77,.15), rgba(255,255,255,.03));
  }

  .about-interests {
    display: grid;
    grid-template-columns: 1.25fr 1fr 1fr 1.25fr;
    gap: 1rem;
  }

  .about-interest {
    min-height: 240px;
    overflow: hidden;
    border: 1px solid var(--about-line);
    border-radius: 20px;
    background: #fff;
  }

  .about-interest img {
    width: 100%;
    height: 100%;
    margin: 0;
    object-fit: contain;
  }

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

  @media (max-width: 980px) {
    .about-hero,
    .about-story,
    .about-home {
      grid-template-columns: 1fr;
    }

    .about-hero { min-height: auto; }
    .about-location-card { min-height: 500px; }

    .about-story { gap: 2.5rem; }
    .about-story-media { min-height: 460px; }
    .about-story-copy { max-width: 680px; }
    .about-story:nth-child(even) .about-story-media { order: 0; }
    .about-story:nth-child(even) .about-story-copy { justify-self: start; }

    .about-home-photo { min-height: 440px; }
    .about-interests { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 760px) {
    .about-page {
      width: min(100% - 24px, 1280px);
      padding-top: 0.5rem;
    }

    .about-hero {
      min-height: auto;
      grid-template-columns: 1fr;
      gap: 2.5rem;
      padding: 2rem 1.35rem;
      border-radius: 22px;
    }

    .about-title { font-size: clamp(3rem, 18vw, 5.2rem); }
    .about-location-card { min-height: 460px; }

    .about-section-head {
      grid-template-columns: 1fr;
      gap: 0.9rem;
    }

    .about-cards { grid-template-columns: 1fr; }
    .about-card { min-height: 260px; }
    .about-story-media, .about-home-photo { min-height: 340px; }
    .about-home { padding: 1rem; border-radius: 22px; }
    .about-story-copy p, .about-home-copy p { font-size: 1rem; }
    .about-interests { grid-template-columns: 1fr; }
    .about-interest { min-height: 220px; }
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
      <div class="about-portrait">
        <img src="{{ page.photos.portrait | relative_url }}" alt="Portrait of Ishan Shrivastava" onerror="this.style.display='none'">
        <span class="about-portrait-placeholder" aria-hidden="true">IS</span>
      </div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/>
        <circle cx="12" cy="10" r="2.5"/>
      </svg>
      <small>Home base</small>
      <strong>San Diego,<br>California</strong>
      <span class="about-photo-path"><code>{{ page.photos.portrait }}</code></span>
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

      <article class="about-story">
        <div class="about-story-media">
          <img src="{{ page.photos.drone | relative_url }}" alt="An RC drone built by Ishan" loading="lazy" onerror="this.style.display='none'">
          <div class="about-photo-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">
              <circle cx="5" cy="6" r="3"/><circle cx="19" cy="6" r="3"/><circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/>
              <path d="m7 8 10 8m0-8L7 16m5-6v4"/>
            </svg>
            <span class="about-photo-path">Add the drone photo here:<code>{{ page.photos.drone }}</code></span>
          </div>
        </div>
        <div class="about-story-copy">
          <p class="about-eyebrow">02 · RC drones</p>
          <h3>I like building the whole thing, not only flying it.</h3>
          <p>Drones bring several kinds of problem solving together. There is the physical build, the electronics, the setup, and then the process of figuring out why something does not behave the way I expected.</p>
          <p>That troubleshooting can take a while, but it is usually the part I remember. When a drone finally works, I understand it much better because I had to work through the mistakes instead of only seeing the finished result.</p>
        </div>
      </article>

      <article class="about-story">
        <div class="about-story-media">
          <img src="{{ page.photos.engineering | relative_url }}" alt="Ishan working on an engineering or computer science project" loading="lazy" onerror="this.style.display='none'">
          <div class="about-photo-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">
              <rect x="3" y="5" width="18" height="13" rx="2"/><path d="m8 10-2 2 2 2m8-4 2 2-2 2m-5 3h2"/>
            </svg>
            <span class="about-photo-path">Add a project photo here:<code>{{ page.photos.engineering }}</code></span>
          </div>
        </div>
        <div class="about-story-copy">
          <p class="about-eyebrow">03 · Engineering + CS</p>
          <h3>Code is another way for me to build.</h3>
          <p>Computer science gives me a different kind of workshop. I can start with an idea, break it into smaller pieces, and keep improving it until the result feels useful. I like that the same thinking can apply to a website, a program, or hardware that needs software to control it.</p>
          <p>Engineering and CS make the most sense to me when they connect. One helps me understand the physical system, and the other gives me a way to add logic, interaction, and control.</p>
        </div>
      </article>
    </div>
  </section>

  <section class="about-section" aria-labelledby="more-interests">
    <div class="about-section-head">
      <p class="about-eyebrow">Beyond building · 🇺🇸</p>
      <h2 id="more-interests">A few more things I enjoy.</h2>
    </div>
    <div class="about-interests">
      <div class="about-interest"><img src="{{ page.photos.prison_break | relative_url }}" alt="Prison Break" loading="lazy"></div>
      <div class="about-interest"><img src="{{ page.photos.netflix | relative_url }}" alt="Netflix" loading="lazy"></div>
      <div class="about-interest"><img src="{{ page.photos.warriors | relative_url }}" alt="Golden State Warriors" loading="lazy"></div>
      <div class="about-interest"><img src="{{ page.photos.money | relative_url }}" alt="Money and finance" loading="lazy"></div>
    </div>
  </section>

  <section class="about-section" aria-labelledby="san-diego-story">
    <div class="about-home">
      <div class="about-home-copy">
        <p class="about-eyebrow">Always home</p>
        <h2 id="san-diego-story">San Diego is part of my story.</h2>
        <p>I have lived in San Diego my whole life. It is the place where I learned, found the hobbies I care about, and started making projects of my own.</p>
        <p>Because it has always been home, I do not think of it as just a location to list in a bio. It is the background to everything on this page—from going out to fly to coming back inside with a new idea I want to try.</p>
      </div>
      <div class="about-story-media about-home-photo">
        <img src="{{ page.photos.san_diego | relative_url }}" alt="A San Diego place that matters to Ishan" loading="lazy" onerror="this.style.display='none'">
        <div class="about-photo-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>
          </svg>
          <span class="about-photo-path">Add a San Diego photo here:<code>{{ page.photos.san_diego }}</code></span>
        </div>
      </div>
    </div>
  </section>

  <section class="about-quote" aria-label="Personal philosophy">
    <p>Most of what I know has come from trying something, getting part of it wrong, and going back to figure out why.</p>
    <span>That is honestly one of my favorite parts of building.</span>
  </section>
</main>
