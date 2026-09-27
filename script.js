// MODESMS TZ - script.js

// Navbar effect on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.style.background = "rgba(7,21,46,.95)";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";
  } else {
    navbar.style.background = "rgba(255,255,255,.05)";
    navbar.style.boxShadow = "none";
  }
});

// Scroll to Pricing
const pricingBtn = document.querySelector(".btn.dark");
const pricingSection = document.querySelector(".pricing");

if (pricingBtn && pricingSection) {
  pricingBtn.addEventListener("click", (e) => {
    e.preventDefault();
    pricingSection.scrollIntoView({
      behavior: "smooth"
    });
  });
}

// Get Started
const startBtn = document.querySelector(".btn.gold");

if (startBtn) {
  startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Karibu MODESMS TZ! Login na Register vitajengwa hatua inayofuata.");
  });
}

// Card animation
const cards = document.querySelectorAll(".card,.price-card,.stat");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all .6s ease";
  observer.observe(card);
});
