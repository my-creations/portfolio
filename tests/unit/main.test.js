import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
const {
  toggleMenu,
  closeMenu,
  clearLocationHash,
  scrollToSection,
  initScrollReveal,
} = require('../../scripts/main.js');

describe('main.js', () => {
  let menu;
  let icon;

  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="menu-links"></nav>
      <div class="hamburger-icon" aria-expanded="false"></div>
    `;
    menu = document.querySelector('.menu-links');
    icon = document.querySelector('.hamburger-icon');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('toggleMenu', () => {
    it('should toggle open class on menu and icon', () => {
      toggleMenu();
      expect(menu.classList.contains('open')).toBe(true);
      expect(icon.classList.contains('open')).toBe(true);

      toggleMenu();
      expect(menu.classList.contains('open')).toBe(false);
      expect(icon.classList.contains('open')).toBe(false);
    });

    it('should toggle aria-expanded attribute', () => {
      toggleMenu();
      expect(icon.getAttribute('aria-expanded')).toBe('true');

      toggleMenu();
      expect(icon.getAttribute('aria-expanded')).toBe('false');
    });

    it('should do nothing if menu does not exist', () => {
      document.body.innerHTML = '<div class="hamburger-icon"></div>';
      expect(() => toggleMenu()).not.toThrow();
    });

    it('should do nothing if icon does not exist', () => {
      document.body.innerHTML = '<nav class="menu-links"></nav>';
      expect(() => toggleMenu()).not.toThrow();
    });
  });

  describe('closeMenu', () => {
    it('should remove open class from menu and icon', () => {
      menu.classList.add('open');
      icon.classList.add('open');
      icon.setAttribute('aria-expanded', 'true');

      closeMenu();

      expect(menu.classList.contains('open')).toBe(false);
      expect(icon.classList.contains('open')).toBe(false);
    });

    it('should set aria-expanded to false', () => {
      icon.setAttribute('aria-expanded', 'true');
      closeMenu();
      expect(icon.getAttribute('aria-expanded')).toBe('false');
    });

    it('should do nothing if elements do not exist', () => {
      document.body.innerHTML = '';
      expect(() => closeMenu()).not.toThrow();
    });
  });

  describe('scrollToSection', () => {
    it('should scroll to target section', () => {
      const target = document.createElement('div');
      target.id = 'about';
      document.body.appendChild(target);
      target.scrollIntoView = vi.fn();

      scrollToSection('about');

      expect(target.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start',
      });
    });

    it('should do nothing if target does not exist', () => {
      expect(() => scrollToSection('nonexistent')).not.toThrow();
    });
  });

  describe('clearLocationHash', () => {
    it('should clear the location hash', () => {
      vi.spyOn(window.history, 'replaceState');
      clearLocationHash();
      expect(window.history.replaceState).toHaveBeenCalled();
    });
  });

  describe('initScrollReveal', () => {
    it('should do nothing if no .reveal elements exist', () => {
      document.body.innerHTML = '<div></div>';
      expect(() => initScrollReveal()).not.toThrow();
    });

    it('should add visible class immediately if IntersectionObserver is not supported', () => {
      const originalIO = window.IntersectionObserver;
      delete window.IntersectionObserver;

      document.body.innerHTML = `
        <section class="reveal"></section>
        <section class="reveal"></section>
      `;

      initScrollReveal();

      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        expect(el.classList.contains('visible')).toBe(true);
      });

      window.IntersectionObserver = originalIO;
    });

    it('should create an IntersectionObserver when supported', () => {
      const observeFn = vi.fn();
      const mockObserver = vi.fn(() => ({
        observe: observeFn,
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      }));

      const originalIO = window.IntersectionObserver;
      window.IntersectionObserver = mockObserver;

      document.body.innerHTML = `
        <section class="reveal"></section>
        <section class="reveal"></section>
      `;

      initScrollReveal();

      expect(mockObserver).toHaveBeenCalledWith(expect.any(Function), { threshold: 0.15 });
      expect(observeFn).toHaveBeenCalledTimes(2);

      window.IntersectionObserver = originalIO;
    });
  });
});
