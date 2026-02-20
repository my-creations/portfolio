import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
const {
  PROJECTS,
  PREVIEW_TIMEOUT_MS,
  renderProjectSlides,
  setPreviewState,
  setFallback,
  mountPreview,
  unmountPreview,
  getVisibleSlideIndexes,
} = require('../../scripts/swiper-init.js')

describe('swiper-init.js', () => {
  let wrapper

  beforeEach(() => {
    vi.useFakeTimers()
    document.body.innerHTML = `
      <div class="swiper-container">
        <div id="projects-wrapper"></div>
      </div>
    `
    wrapper = document.querySelector('#projects-wrapper')
  })

  afterEach(() => {
    vi.useRealTimers()
    document.body.innerHTML = ''
  })

  describe('PROJECTS constant', () => {
    it('should have 15 projects', () => {
      expect(PROJECTS).toHaveLength(15)
    })

    it('should have github and demo URLs for each project', () => {
      PROJECTS.forEach((project) => {
        expect(project).toHaveProperty('github')
        expect(project).toHaveProperty('demo')
        expect(project.github).toMatch(/^https:\/\/github\.com/)
        expect(project.demo).toMatch(/^https:\/\//)
      })
    })

    it('should have unique keys for each project', () => {
      const keys = PROJECTS.map((p) => p.key)
      const uniqueKeys = new Set(keys)
      expect(uniqueKeys.size).toBe(keys.length)
    })
  })

  describe('renderProjectSlides', () => {
    it('should create slides for all projects', () => {
      renderProjectSlides()
      const slides = wrapper.querySelectorAll('.swiper-slide')
      expect(slides).toHaveLength(15)
    })

    it('should do nothing if wrapper does not exist', () => {
      document.body.innerHTML = ''
      expect(() => renderProjectSlides()).not.toThrow()
    })

    it('should create project containers with correct data-test attributes', () => {
      renderProjectSlides()
      const firstContainer = wrapper.querySelector('[data-test="project-1-container"]')
      expect(firstContainer).not.toBeNull()
    })

    it('should create preview containers with correct URLs', () => {
      renderProjectSlides()
      const firstPreview = wrapper.querySelector('[data-test="project-1-image-container"]')
      expect(firstPreview.dataset.previewUrl).toBe(PROJECTS[0].demo)
    })

    it('should create github and demo buttons', () => {
      renderProjectSlides()
      const githubBtn = wrapper.querySelector('[data-test="project-1-github-button"]')
      const demoBtn = wrapper.querySelector('[data-test="project-1-demo-button"]')
      expect(githubBtn).not.toBeNull()
      expect(demoBtn).not.toBeNull()
      expect(githubBtn.href).toBe(PROJECTS[0].github)
      expect(demoBtn.href).toBe(PROJECTS[0].demo)
    })
  })

  describe('setPreviewState', () => {
    it('should set preview state on container', () => {
      const container = document.createElement('div')
      container.dataset.previewState = 'idle'
      setPreviewState(container, 'loading')
      expect(container.dataset.previewState).toBe('loading')
    })
  })

  describe('setFallback', () => {
    it('should clear frame content and set fallback state', () => {
      const container = document.createElement('div')
      container.innerHTML = '<div class="project-preview-frame"><iframe></iframe></div>'
      container.dataset.previewState = 'loading'

      setFallback(container)

      expect(container.dataset.previewState).toBe('fallback')
      expect(container.querySelector('.project-preview-frame').innerHTML).toBe('')
    })
  })

  describe('mountPreview', () => {
    it('should do nothing if container is null', () => {
      expect(() => mountPreview(null)).not.toThrow()
    })

    it('should do nothing if previewUrl is missing', () => {
      const container = document.createElement('div')
      container.innerHTML = '<div class="project-preview-frame"></div>'
      expect(() => mountPreview(container)).not.toThrow()
    })

    it('should do nothing if already in live state', () => {
      const container = document.createElement('div')
      container.dataset.previewUrl = 'https://example.com'
      container.dataset.previewState = 'live'
      container.innerHTML = '<div class="project-preview-frame"></div>'

      mountPreview(container)

      expect(container.dataset.previewState).toBe('live')
    })
  })

  describe('unmountPreview', () => {
    it('should do nothing if container is null', () => {
      expect(() => unmountPreview(null)).not.toThrow()
    })

    it('should clear frame and set idle state', () => {
      const container = document.createElement('div')
      container.innerHTML = '<div class="project-preview-frame"><iframe></iframe></div>'
      container.dataset.previewState = 'live'

      unmountPreview(container)

      expect(container.dataset.previewState).toBe('idle')
      expect(container.querySelector('.project-preview-frame').innerHTML).toBe('')
    })

    it('should not change state if already in fallback', () => {
      const container = document.createElement('div')
      container.innerHTML = '<div class="project-preview-frame"></div>'
      container.dataset.previewState = 'fallback'

      unmountPreview(container)

      expect(container.dataset.previewState).toBe('fallback')
    })
  })

  describe('getVisibleSlideIndexes', () => {
    it('should return visible slide indexes', () => {
      const mockSwiper = {
        activeIndex: 2,
        slides: [
          { classList: { contains: () => false } },
          { classList: { contains: () => false } },
          { classList: { contains: () => true } },
          { classList: { contains: () => true } },
          { classList: { contains: () => false } },
        ],
      }

      const result = getVisibleSlideIndexes(mockSwiper)

      expect(result.has(1)).toBe(true)
      expect(result.has(2)).toBe(true)
      expect(result.has(3)).toBe(true)
    })
  })

  describe('PREVIEW_TIMEOUT_MS', () => {
    it('should be 5000ms', () => {
      expect(PREVIEW_TIMEOUT_MS).toBe(5000)
    })
  })
})
