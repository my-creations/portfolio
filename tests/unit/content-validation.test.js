import { describe, expect, it } from 'vitest';
const { validateDocuments } = require('../../scripts/validate-content.js');

function caseStudy(overrides = {}) {
  return {
    filePath: 'src/work/example.md',
    kind: 'case-study',
    locale: 'en',
    data: {
      layout: 'layouts/case-study.njk',
      permalink: '/work/example/',
      translationKey: 'example',
      projectKey: 'example',
      contentType: 'case-study',
      locale: 'en',
      title: 'Example',
      summary: 'A verified example.',
      tags: ['case-study'],
      featured: true,
      sanitized: false,
      order: 1,
      draft: false,
      ...overrides,
    },
  };
}

function writing(overrides = {}) {
  return {
    filePath: 'src/writing/example.md',
    kind: 'writing',
    locale: 'en',
    data: {
      layout: 'layouts/writing.njk',
      permalink: false,
      translationKey: 'example-writing',
      contentType: 'article',
      locale: 'en',
      title: 'Example writing',
      summary: 'A draft example.',
      date: '2026-08-14',
      tags: ['writing'],
      featured: true,
      draft: true,
      ...overrides,
    },
  };
}

describe('content validation', () => {
  it('accepts valid Case Study and Writing metadata', () => {
    expect(validateDocuments([caseStudy(), writing()])).toEqual([]);
  });

  it('reports missing and invalid required metadata', () => {
    const errors = validateDocuments([writing({ title: '', contentType: 'essay', date: 'not-a-date', tags: [] })]);

    expect(errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining('title must be a non-empty string'),
        expect.stringContaining('contentType must be article, note, or case-study'),
        expect.stringContaining('date must use a valid YYYY-MM-DD calendar date'),
        expect.stringContaining('tags must be a non-empty array of strings'),
      ])
    );
  });

  it.each([true, 0, [], '2026-02-30'])('rejects malformed Writing dates without coercing %j', (date) => {
    const errors = validateDocuments([writing({ date })]);

    expect(errors).toContain('src/writing/example.md: date must use a valid YYYY-MM-DD calendar date');
  });

  it('prevents drafts from producing public output', () => {
    const errors = validateDocuments([writing({ permalink: '/writing/example/' })]);

    expect(errors).toContain('src/writing/example.md: draft content must set permalink to false');
  });

  it('requires published content to define a permalink', () => {
    const errors = validateDocuments([caseStudy({ permalink: false })]);

    expect(errors).toContain('src/work/example.md: published content must define a permalink');
  });

  it.each([
    {
      label: 'English Case Studies',
      document: () => caseStudy({ permalink: '/pt/trabalho/example/' }),
      prefix: '/work/',
    },
    {
      label: 'Portuguese Case Studies',
      document: () => {
        const document = caseStudy({ locale: 'pt', permalink: '/work/example/' });
        document.locale = 'pt';
        document.filePath = 'src/pt/trabalho/example.md';
        return document;
      },
      prefix: '/pt/trabalho/',
    },
    {
      label: 'English Writing',
      document: () => writing({ draft: false, permalink: '/pt/escrita/example/' }),
      prefix: '/writing/',
    },
    {
      label: 'Portuguese Writing',
      document: () => {
        const document = writing({ draft: false, locale: 'pt', permalink: '/writing/example/' });
        document.locale = 'pt';
        document.filePath = 'src/pt/escrita/example.md';
        return document;
      },
      prefix: '/pt/escrita/',
    },
  ])('requires the $label permalink prefix', ({ document, prefix }) => {
    const errors = validateDocuments([document()]);

    expect(errors).toEqual(
      expect.arrayContaining([expect.stringContaining(`published permalink must start with ${prefix}`)])
    );
  });

  it('rejects duplicate translation keys within one locale', () => {
    const duplicate = writing({ title: 'Duplicate' });
    duplicate.filePath = 'src/writing/duplicate.md';

    const errors = validateDocuments([writing(), duplicate]);

    expect(errors).toContain(
      'src/writing/duplicate.md: duplicate translation identity en:example-writing; already used by src/writing/example.md'
    );
  });

  it('requires translated counterparts to keep identity fields consistent', () => {
    const portuguese = caseStudy({
      locale: 'pt',
      projectKey: 'different-project',
      permalink: '/pt/trabalho/example/',
    });
    portuguese.locale = 'pt';
    portuguese.filePath = 'src/pt/trabalho/example.md';

    const errors = validateDocuments([caseStudy(), portuguese]);

    expect(errors).toContain('example: translated Case Studies must use the same projectKey');
  });
});
