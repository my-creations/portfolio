function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');

  if (!menu || !icon) {
    return;
  }

  menu.classList.toggle('open');
  icon.classList.toggle('open');

  const isOpen = menu.classList.contains('open');
  icon.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  document.body.classList.toggle('menu-open', isOpen);
}

function closeMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');

  if (!menu || !icon) {
    return;
  }

  menu.classList.remove('open');
  icon.classList.remove('open');
  icon.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

function clearLocationHash() {
  const cleanUrl = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(null, '', cleanUrl);
}

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) {
    return;
  }

  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  clearLocationHash();
  closeMenu();
}

function initNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      const targetId = href ? href.replace('#', '') : '';

      if (!targetId) {
        return;
      }

      event.preventDefault();
      scrollToSection(targetId);
    });
  });

  if (window.location.hash) {
    const initialSectionId = window.location.hash.replace('#', '');
    const initialTarget = document.getElementById(initialSectionId);

    if (initialTarget) {
      initialTarget.scrollIntoView({ behavior: 'auto', block: 'start' });
      clearLocationHash();
    }
  }
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!revealElements.length) {
    return;
  }

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function initPageLoadAnimation() {
  if (!document.body) {
    return;
  }

  document.body.classList.add('page-enter');
}

if (typeof window !== 'undefined') {
  window.toggleMenu = toggleMenu;
  window.closeMenu = closeMenu;
  window.clearLocationHash = clearLocationHash;
  window.scrollToSection = scrollToSection;
  window.initNavigation = initNavigation;
  window.initScrollReveal = initScrollReveal;
  window.initPageLoadAnimation = initPageLoadAnimation;

  document.addEventListener('DOMContentLoaded', () => {
    closeMenu();
    initNavigation();
    initPageLoadAnimation();
    initScrollReveal();
  });

  window.addEventListener('pageshow', closeMenu);
}

try {
  module.exports = {
    toggleMenu,
    closeMenu,
    clearLocationHash,
    scrollToSection,
    initNavigation,
    initScrollReveal,
    initPageLoadAnimation,
  };
} catch (e) {}
