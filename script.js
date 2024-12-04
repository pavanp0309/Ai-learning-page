// Get hamburger icon and mobile navbar
const hamburgerIcon = document.getElementById("hamburger-icon");
const mobileNav = document.getElementById("mobile-nav");

// Toggle the mobile navbar visibility on hamburger icon click
hamburgerIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

// Star Rating

document.addEventListener("DOMContentLoaded", () => {
  const starSection = document.querySelector(".star-rating");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          starSection.classList.add("animate"); // Add animation class
          observer.unobserve(starSection); // Stop observing after animation
        }
      });
    },
    {
      threshold: 0.5, // Trigger animation when 50% of the element is visible
    }
  );

  observer.observe(starSection);
});
