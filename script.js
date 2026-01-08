// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Active navbar highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - 150) {
      current = sec.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Counter animation
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.dataset.target;
      let count = 0;

      const update = () => {
        count += target / 80;
        if (count < target) {
          counter.innerText = Math.ceil(count);
          setTimeout(update, 20);
        } else {
          counter.innerText = target + "+";
        }
      };

      update();
      counterObserver.unobserve(counter);
    }
  });
});

counters.forEach(c => counterObserver.observe(c));

// Contact form
document.getElementById("contactForm")
  .addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("formMsg").innerText =
      "Thank you. We will get back to you shortly.";
  });
