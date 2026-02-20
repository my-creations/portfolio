function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');

  if (!menu || !icon) {
    return;
  }

  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

function closeMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');

  if (!menu || !icon) {
    return;
  }

  menu.classList.remove('open');
  icon.classList.remove('open');
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

if (typeof window !== 'undefined') {
  window.toggleMenu = toggleMenu;
  window.closeMenu = closeMenu;
  window.clearLocationHash = clearLocationHash;
  window.scrollToSection = scrollToSection;
  window.initNavigation = initNavigation;
}

try {
  module.exports = {
    toggleMenu,
    closeMenu,
    clearLocationHash,
    scrollToSection,
    initNavigation,
  };
} catch (e) {}
