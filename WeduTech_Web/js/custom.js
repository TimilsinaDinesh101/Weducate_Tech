(function () {
  var header = document.querySelector('.site-header');
  var menuButton = document.querySelector('[data-menu-button]');
  var menu = document.querySelector('[data-nav-menu]');
  var year = document.querySelectorAll('[data-current-year]');
  year.forEach(function (item) { item.textContent = new Date().getFullYear(); });

  function onScroll() { if (header) header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  if (menuButton && menu) {
    menuButton.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', open);
    });
  }

  var reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, { threshold: .12 });
    reveal.forEach(function (element) { observer.observe(element); });
  } else { reveal.forEach(function (element) { element.classList.add('is-visible'); }); }

  document.querySelectorAll('[data-contact-form]').forEach(function (form) {
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      var status = form.querySelector('[data-form-message]');
      var button = form.querySelector('button[type="submit"]');
      if (button) { button.disabled = true; button.textContent = 'Sending...'; }
      try {
        var response = await fetch('https://formspree.io/f/xrblzzel', { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (!response.ok) throw new Error('Request failed');
        form.reset(); if (status) { status.textContent = 'Thanks! Your message has been sent successfully.'; status.classList.add('show'); }
      } catch (error) { if (status) { status.textContent = 'We could not send your message. Please try again.'; status.classList.add('show'); } }
      if (button) { button.disabled = false; button.textContent = button.dataset.label || 'Send message'; }
    });
  });
})();
