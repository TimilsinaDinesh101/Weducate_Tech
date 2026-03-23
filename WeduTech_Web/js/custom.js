// ===== Display Current Year =====
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var el = document.querySelector("#displayYear");
  if (el) el.innerHTML = currentYear;
}
getYear();

// ===== Navbar Scroll Effect =====
(function () {
  var header = document.querySelector(".header_section");
  if (!header) return;

  var scrollThreshold = 50;

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
})();

// ===== Scroll-Triggered Animations =====
(function () {
  var animatedElements = document.querySelectorAll(".animate-on-scroll");
  if (!animatedElements.length) return;

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    animatedElements.forEach(function (el) {
      el.classList.add("animated");
    });
  }
})();

// ===== Smooth Scroll for Anchor Links =====
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId === "#" || targetId === "#!") return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
})();
