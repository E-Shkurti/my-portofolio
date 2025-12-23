document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  const navList = nav.querySelector('.nav-list');
  const yearSpan = document.getElementById('year');

  // 1. Update Copyright Year automatically
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle
  function setNavOpen(open) {
    if (open) {
      nav.classList.add('mobile-open');
      navToggle.setAttribute('aria-expanded', 'true');
    } else {
      nav.classList.remove('mobile-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      setNavOpen(!isExpanded);
    });
  }

  // 3. Close mobile nav when clicking a link
  if (navList) {
    navList.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        setNavOpen(false);
      }
    });
  }

  // 4. Smooth Scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        setNavOpen(false); // Close menu if open
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});