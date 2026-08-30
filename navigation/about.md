---
layout: post
title: About
permalink: /about/
comments: true
---

## As a conversation Starter

Here are some things I enjoy.

<!-- SECTION 1: Images are loaded with JavaScript from my custom image folder -->
<div id="grid_container"></div>

<script>
var outputElement = document.getElementById("grid_container");

// Clear the output
outputElement.innerHTML = '';

// Data array
const living_in_the_world = [
  {flag: "{{site.baseurl}}/images/ishan/rc-plane.png", greeting: "RC Planes", description: "Flying and aerodynamics"},
  {flag: "{{site.baseurl}}/images/ishan/drone-build.png", greeting: "RC Drones", description: "Building and tuning"},
  {flag: "{{site.baseurl}}/images/ishan/engineering-cs.png", greeting: "Engineering + CS", description: "Hardware and code"}
];

// Create grid container
const container = document.createElement('div');
container.id = 'grid_container';
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
container.style.gap = '10px';

// Loop through each location
for (const location of living_in_the_world) {
  // Create grid item
  const gridItem = document.createElement('div');
  gridItem.style.textAlign = 'center';

  // Create and add flag image
  const img = document.createElement('img');
  img.src = location.flag;
  img.alt = location.description + ' Flag';
  img.style.width = '100%';
  img.style.height = '100px';
  img.style.objectFit = 'contain';

  // Create description
  const description = document.createElement('p');
  description.textContent = location.description;
  description.style.margin = '5px 0';
  description.style.fontWeight = 'bold';

  // Create greeting
  const greeting = document.createElement('p');
  greeting.textContent = location.greeting;
  greeting.style.margin = '5px 0';
  greeting.style.fontStyle = 'italic';
  greeting.style.opacity = '0.7';

  // Add all elements to grid item
  gridItem.appendChild(img);
  gridItem.appendChild(description);
  gridItem.appendChild(greeting);

  // Add grid item to container
  container.appendChild(gridItem);
}

outputElement.appendChild(container);
</script>

---

<!-- SECTION 2: Journey descriptions are made with Markdown -->

### Journey through Life

Here are some things about me

- I have lived in San Diego my whole life
-  I fly radio-controlled planes and enjoy learning about control, balance, and aerodynamics
-  I build RC drones and work with electronics, mechanics, setup, and tuning
-  I study computer science and like turning ideas into programs and websites
-  I enjoy engineering and connecting software with real hardware
-  I learn by trying things, making mistakes, and figuring out how to improve them

### Culture, Family, and Fun

A lot of my interests involve building, learning, and having fun.

- I enjoy watching Prison Break and Netflix
- I follow the Golden State Warriors
- I am interested in money and finance
- The gallery has some of my favorite projects and interests

---

<!-- SECTION 3: Image Gallery is made using Style and HTML and GitHub /images -->

<style>
    .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }

    .image-gallery img {
        max-height: 150px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

<div class="image-gallery">
  <img src="{{site.baseurl}}/images/ishan/rc-plane.png" alt="RC Plane">
  <img src="{{site.baseurl}}/images/ishan/drone-build.png" alt="RC Drone">
  <img src="{{site.baseurl}}/images/ishan/engineering-cs.png" alt="Engineering and Computer Science">
  <img src="{{site.baseurl}}/images/ishan/prison-break.png" alt="Prison Break">
  <img src="{{site.baseurl}}/images/ishan/netflix.png" alt="Netflix">
  <img src="{{site.baseurl}}/images/ishan/warriors.png" alt="Golden State Warriors">
  <img src="{{site.baseurl}}/images/ishan/money.png" alt="Money and Finance">
</div>
