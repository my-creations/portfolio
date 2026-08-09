(function () {
  document.querySelectorAll('.locale-switcher a[hreflang]').forEach((link) => {
    link.addEventListener('click', () => {
      const targetLocale = link.getAttribute('hreflang');
      if (targetLocale !== 'en' && targetLocale !== 'pt') return;

      try {
        localStorage.setItem('portfolio:locale', targetLocale);
      } catch (error) {
        // The link still works when storage is restricted.
      }
    });
  });

  const toggle = document.querySelector('[data-nav-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const backdrop = document.querySelector('[data-nav-backdrop]');

  if (!toggle || !mobileNav) return;

  const labelOpen = toggle.getAttribute('aria-label') || 'Open menu';
  const labelClose = toggle.getAttribute('data-label-close') || 'Close menu';

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? labelClose : labelOpen);
    document.documentElement.classList.toggle('nav-is-open', open);

    if (open) {
      mobileNav.removeAttribute('hidden');
      backdrop?.removeAttribute('hidden');
    } else {
      mobileNav.setAttribute('hidden', '');
      backdrop?.setAttribute('hidden', '');
    }
  }

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!open);
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  backdrop?.addEventListener('click', () => {
    setOpen(false);
    toggle.focus();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  const media = window.matchMedia('(min-width: 721px)');
  const onChange = () => {
    if (media.matches) setOpen(false);
  };
  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', onChange);
  } else if (typeof media.addListener === 'function') {
    media.addListener(onChange);
  }
})();
