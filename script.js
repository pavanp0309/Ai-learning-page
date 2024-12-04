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

mobileNav.classList.toggle("hidden");
// pricing and plan
function monthPlan() {
  let month = document.getElementById("month");
  month.style.display = "block";
  month.style.display = "flex";
  document.getElementById("year").style.display = "none";
}

function yearPlan() {
  document.getElementById("month").style.display = "none";
  let year = document.getElementById("year");
  year.style.display = "block";
  year.style.display = "flex";
}

function toggleAnswer(button) {
  const answer = button.nextElementSibling;
  const sign = button.querySelector("span:nth-child(2)");
  answer.classList.toggle("hidden");
  sign.textContent = answer.classList.contains("hidden") ? "+" : "-";
}

mobileNav.classList.toggle("hidden");
