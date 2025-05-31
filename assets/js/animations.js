// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Animate elements when they come into view
const animateOnScroll = function () {
  const elements = document.querySelectorAll(
    ".feature-card, .research-card, .phase-card, .tech-card, .member-card, .supervisor-card"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.classList.add("animate");
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
animateOnScroll(); // Run once on page load

// Form submission handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      // Show success message
      alert(
        `Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`
      );

      // Reset the form
      this.reset();
    });
  }
});



// result page animation

  
  function animateCountUp(el, target, suffix = '%', duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  // Use IntersectionObserver to trigger animation when visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const isSeconds = el.textContent.includes('s');
        const suffix = isSeconds ? 's' : '%';

        animateCountUp(el, target, suffix);
        observer.unobserve(el); // only run once
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.metric-value').forEach(el => {
    observer.observe(el);
  });


