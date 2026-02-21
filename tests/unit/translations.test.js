import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
const {
  calculateExperience,
  getText,
  switchLanguage,
  toggleLanguage,
  translations,
} = require('../../scripts/translations.js');

describe('translations.js', () => {
  let store;

  beforeEach(() => {
    store = {};
    vi.stubGlobal('localStorage', {
      getItem: vi.fn((key) => store[key] || null),
      setItem: vi.fn((key, value) => {
        store[key] = value;
      }),
      removeItem: vi.fn((key) => {
        delete store[key];
      }),
      clear: vi.fn(() => {
        Object.keys(store).forEach((key) => delete store[key]);
      }),
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('calculateExperience', () => {
    it('should calculate years correctly in English', () => {
      const result = calculateExperience('2020-01-01', 'en', '2025-01-01');
      expect(result).toBe('5 years');
    });

    it('should calculate years correctly in Portuguese', () => {
      const result = calculateExperience('2020-01-01', 'pt', '2025-01-01');
      expect(result).toBe('5 anos');
    });

    it('should return singular year for 1 year', () => {
      const result = calculateExperience('2024-01-01', 'en', '2025-01-01');
      expect(result).toBe('1 year');
    });

    it('should return singular month for 1 month', () => {
      const result = calculateExperience('2024-12-01', 'en', '2025-01-01');
      expect(result).toBe('1 month');
    });

    it('should return months for less than a year', () => {
      const result = calculateExperience('2024-07-01', 'en', '2025-01-01');
      expect(result).toBe('6 months');
    });

    it('should return months in Portuguese for less than a year', () => {
      const result = calculateExperience('2024-07-01', 'pt', '2025-01-01');
      expect(result).toBe('6 meses');
    });

    it('should add plus sign for ongoing experience with remaining months', () => {
      const result = calculateExperience('2020-06-01', 'en', '2025-01-01');
      expect(result).toBe('4 years+');
    });

    it('should use current date when endDate is null', () => {
      const result = calculateExperience('2020-01-01', 'en');
      expect(result).toMatch(/\d+ years?/);
    });

    it('should default to English for unknown language', () => {
      const result = calculateExperience('2024-01-01', 'fr', '2025-01-01');
      expect(result).toBe('1 year');
    });
  });

  describe('getText', () => {
    it('should return nested translation value', () => {
      const result = getText('nav.about', 'en');
      expect(result).toBe('About');
    });

    it('should return Portuguese translation', () => {
      const result = getText('nav.about', 'pt');
      expect(result).toBe('Sobre');
    });

    it('should return key if translation not found', () => {
      const result = getText('nonexistent.key', 'en');
      expect(result).toBe('nonexistent.key');
    });
  });

  describe('switchLanguage', () => {
    it('should store preference in localStorage', () => {
      switchLanguage('pt');
      expect(localStorage.setItem).toHaveBeenCalledWith('preferredLanguage', 'pt');
    });
  });

  describe('translations object', () => {
    it('should have all required sections in English', () => {
      expect(translations.en).toHaveProperty('nav');
      expect(translations.en).toHaveProperty('profile');
      expect(translations.en).toHaveProperty('about');
      expect(translations.en).toHaveProperty('experience');
      expect(translations.en).toHaveProperty('projects');
      expect(translations.en).toHaveProperty('contact');
      expect(translations.en).toHaveProperty('footer');
    });

    it('should have all required sections in Portuguese', () => {
      expect(translations.pt).toHaveProperty('nav');
      expect(translations.pt).toHaveProperty('profile');
      expect(translations.pt).toHaveProperty('about');
      expect(translations.pt).toHaveProperty('experience');
      expect(translations.pt).toHaveProperty('projects');
      expect(translations.pt).toHaveProperty('contact');
      expect(translations.pt).toHaveProperty('footer');
    });

    it('should have all 17 projects in English', () => {
      const projectKeys = Object.keys(translations.en.projects).filter((k) => k.startsWith('project'));
      expect(projectKeys).toHaveLength(17);
    });

    it('should have all 17 projects in Portuguese', () => {
      const projectKeys = Object.keys(translations.pt.projects).filter((k) => k.startsWith('project'));
      expect(projectKeys).toHaveLength(17);
    });
  });
});
