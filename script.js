"use strict";

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const galleryList = document.querySelector(".gallery-list");

let currentIndex = 0;
const itemsToShow = 2; // Number of images to show at a time

function updateSlider() {
  const itemWidth = galleryList.querySelector(".gallery-item").offsetWidth;
  galleryList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

prevButton.addEventListener("click", () => {
  const totalItems = galleryList.children.length;
  currentIndex =
    (currentIndex - 1 + totalItems / itemsToShow) % (totalItems / itemsToShow);
  updateSlider();
});

nextButton.addEventListener("click", () => {
  const totalItems = galleryList.children.length;
  currentIndex = (currentIndex + 1) % (totalItems / itemsToShow);
  updateSlider();
});

// Initialize the slider
updateSlider();
