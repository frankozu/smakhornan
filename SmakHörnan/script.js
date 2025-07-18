document.addEventListener("DOMContentLoaded", () => {
  // Hamburgermeny
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
  console.log("Hamburgare klickad, meny tillstånd:", navLinks.classList.contains("open"));
  });
  hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
  }
});

  // Meny-popup
  const menuBtn = document.getElementById("showMenuBtn");
  const closeBtn = document.getElementById("closeMenuBtn");
  const popup = document.getElementById("menu-popup");

  if (menuBtn && closeBtn && popup) {
    menuBtn.addEventListener("click", () => {
      popup.classList.remove("hidden");
      popup.classList.add("visible");
    });

    closeBtn.addEventListener("click", () => {
      popup.classList.remove("visible");
      popup.classList.add("hidden");
    });
  }

  // Bakgrundsväxlare
  const bgBtn = document.getElementById("changeBgBtn");
  const hero = document.getElementById("hero");
  const backgrounds = [
    "url('https://source.unsplash.com/1600x900/?restaurant')",
    "url('https://source.unsplash.com/1600x900/?food')",
    "url('https://source.unsplash.com/1600x900/?fine-dining')"
  ];
  let bgIndex = 0;

  if (bgBtn && hero) {
    bgBtn.addEventListener("click", () => {
      bgIndex = (bgIndex + 1) % backgrounds.length;
      hero.style.backgroundImage = backgrounds[bgIndex];
    });
  }

  window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

  // År i footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function rotateTestimonials() {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');
}

setInterval(rotateTestimonials, 3000); // every 6s

