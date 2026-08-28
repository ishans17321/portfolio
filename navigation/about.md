---
layout: post
title: About
permalink: /about/
comments: true
---

## As a conversation Starter

Here are some things I enjoy.

<comment>
Images are from my custom image folder
</comment>

<style>
    /* Style looks pretty compact, 
       - grid-container and grid-item are referenced the code 
    */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }

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

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "{{site.baseurl}}/images/ishan/";
    var living_in_the_world = [
        {"flag": "rc-plane.png", "greeting": "RC Planes", "description": "Flying and aerodynamics"},
        {"flag": "drone-build.png", "greeting": "RC Drones", "description": "Building and tuning"},
        {"flag": "engineering-cs.png", "greeting": "Engineering + CS", "description": "Hardware and code"},
    ];

    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Image"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>

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

<comment>
Gallery of Pics, scroll to the right for more ...
</comment>
<div class="image-gallery">
  <img src="{{site.baseurl}}/images/ishan/rc-plane.png" alt="RC Plane">
  <img src="{{site.baseurl}}/images/ishan/drone-build.png" alt="RC Drone">
  <img src="{{site.baseurl}}/images/ishan/engineering-cs.png" alt="Engineering and Computer Science">
  <img src="{{site.baseurl}}/images/ishan/prison-break.png" alt="Prison Break">
  <img src="{{site.baseurl}}/images/ishan/netflix.png" alt="Netflix">
  <img src="{{site.baseurl}}/images/ishan/warriors.png" alt="Golden State Warriors">
  <img src="{{site.baseurl}}/images/ishan/money.png" alt="Money and Finance">
</div>