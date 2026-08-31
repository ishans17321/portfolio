---
layout: post 
show_reading_time: false
title: About
permalink: /about/
description: My name is Ishan.
---

## As a conversation Starter

Here are some places I have lived.

<!-- SECTION 1: Flag are made with JavaScript using Wikipedia images -->
<div id="grid_container"></div>

<script>
var outputElement = document.getElementById("grid_container");

// Clear the output
outputElement.innerHTML = '';

// Data array
const living_in_the_world = [
  {flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg", greeting: "Hey!", description: "San Diego, CA"}
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

<!-- SECTION 2: Journey descriptions are made with Markdown using emojis -->

### Journey through Life

Here is what I did at those places

- 🏫 Monterey Ridge Elementary School in San Diego, CA
- 🏫 Oak Valley Middle School in San Diego, CA
- 🏫 Del Norte High School in San Diego, CA
- 🏆 Won the CyberPatriot National Championship
- 💻 Two-time ACSL national competitor
- 👨‍🏫 Founder and owner of CoreMinds Tutoring LLC, teaching kids online

### Culture, Family, and Fun

My family, faith, hobbies, and favorite things are a big part of who I am.

- I live with my mom and dad, my sister, and my brother
- I am Hindu, and my faith is important to me
- I love flying RC planes and drones, and I enjoy building, tuning, and learning how they work
- I enjoy watching Prison Break and Netflix
- I follow the Golden State Warriors
- I am interested in money and finance
- I also love eating at In-N-Out and Taco Bell
- The gallery has pictures of my favorite projects, interests, culture, and food

---

<!-- Section 3: Image Galley is made using Style and HTML and GitHub /images -->

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

<!-- This grid_container class is used by CSS styling and the id is used by JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<div class="image-gallery">
  <img src="{{site.baseurl}}/images/ishan/rc-plane.png" alt="RC Plane">
  <img src="{{site.baseurl}}/images/ishan/drone-build.png" alt="RC Drone">
  <img src="{{site.baseurl}}/images/ishan/engineering-cs.png" alt="Engineering and Computer Science">
  <img src="{{site.baseurl}}/images/ishan/prison-break.png" alt="Prison Break">
  <img src="{{site.baseurl}}/images/ishan/netflix.png" alt="Netflix">
  <img src="{{site.baseurl}}/images/ishan/warriors.png" alt="Golden State Warriors">
  <img src="{{site.baseurl}}/images/ishan/money.png" alt="Money and Finance">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="Flag of India">
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Om.svg" alt="Om symbol">
  <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/File-In-N-Out_Burger_hamburgers_and_cheeseburgers.jpg?width=960" alt="In-N-Out burgers">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Exterior_of_a_modern_Taco_Bell_fast_food_restaurant_chain_location_in_Murphy%2C_North_Carolina_01.jpg/960px-Exterior_of_a_modern_Taco_Bell_fast_food_restaurant_chain_location_in_Murphy%2C_North_Carolina_01.jpg" alt="Taco Bell restaurant">
</div>
