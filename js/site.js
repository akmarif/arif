(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  // Sticky header shadow on scroll
  var header = document.querySelector(".site-header");
  var toTop = document.querySelector(".to-top");

  function onScroll() {
    var scrolled = window.scrollY > 8;
    if (header) header.classList.toggle("scrolled", scrolled);
    if (toTop) toTop.classList.toggle("visible", window.scrollY > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Rotating role titles in the hero
  var roles = [
    "Senior Software Engineer",
    "Software Architect",
    "Data & Platform Engineer",
    "Scalable Systems Builder"
  ];
  var rotator = document.querySelector(".role-rotator");
  if (rotator) {
    var i = 0;
    setInterval(function () {
      i = (i + 1) % roles.length;
      rotator.style.opacity = 0;
      setTimeout(function () {
        rotator.textContent = roles[i];
        rotator.style.opacity = 1;
      }, 250);
    }, 2800);
  }

  // Reveal-on-scroll animations
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
