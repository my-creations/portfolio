import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
const {
  toggleMenu,
  closeMenu,
  clearLocationHash,
  scrollToSection,
} = require('../../scripts/main.js')

describe('main.js', () => {
  let menu
  let icon

  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="menu-links"></nav>
      <div class="hamburger-icon"></div>
    `
    menu = document.querySelector('.menu-links')
    icon = document.querySelector('.hamburger-icon')
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('toggleMenu', () => {
    it('should toggle open class on menu and icon', () => {
      toggleMenu()
      expect(menu.classList.contains('open')).toBe(true)
      expect(icon.classList.contains('open')).toBe(true)

      toggleMenu()
      expect(menu.classList.contains('open')).toBe(false)
      expect(icon.classList.contains('open')).toBe(false)
    })

    it('should do nothing if menu does not exist', () => {
      document.body.innerHTML = '<div class="hamburger-icon"></div>'
      expect(() => toggleMenu()).not.toThrow()
    })

    it('should do nothing if icon does not exist', () => {
      document.body.innerHTML = '<nav class="menu-links"></nav>'
      expect(() => toggleMenu()).not.toThrow()
    })
  })

  describe('closeMenu', () => {
    it('should remove open class from menu and icon', () => {
      menu.classList.add('open')
      icon.classList.add('open')

      closeMenu()

      expect(menu.classList.contains('open')).toBe(false)
      expect(icon.classList.contains('open')).toBe(false)
    })

    it('should do nothing if elements do not exist', () => {
      document.body.innerHTML = ''
      expect(() => closeMenu()).not.toThrow()
    })
  })

  describe('scrollToSection', () => {
    it('should scroll to target section', () => {
      const target = document.createElement('div')
      target.id = 'about'
      document.body.appendChild(target)
      target.scrollIntoView = vi.fn()

      scrollToSection('about')

      expect(target.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start',
      })
    })

    it('should do nothing if target does not exist', () => {
      expect(() => scrollToSection('nonexistent')).not.toThrow()
    })
  })

  describe('clearLocationHash', () => {
    it('should clear the location hash', () => {
      vi.spyOn(window.history, 'replaceState')
      clearLocationHash()
      expect(window.history.replaceState).toHaveBeenCalled()
    })
  })
})
