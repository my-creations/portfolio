/** Shared Project facts. Localized narrative lives in Case Study Markdown. */
module.exports = [
  {
    key: 'cuf-prepara',
    kind: 'project',
    featured: true,
    caseStudy: true,
    order: 1,
    sanitized: true,
    links: {
      source: null,
      sourceNote: 'private',
      demo: null,
    },
    stack: ['Vanilla JS (ES modules)', 'Vitest', 'Playwright', 'ESLint', 'Prettier', 'Husky'],
    evidence: {
      kind: 'flow',
      en: {
        label: 'Product flow',
        title: 'Clinical inputs become a plan patients can follow',
        items: ['Diet', 'Medication', 'Exam day', 'Calendar'],
      },
      pt: {
        label: 'Fluxo do produto',
        title: 'Dados clínicos tornam-se num plano fácil de seguir',
        items: ['Dieta', 'Medicação', 'Dia do exame', 'Calendário'],
      },
    },
    card: {
      en: {
        title: 'CUF Prepara',
        subtitle: 'Personalized colonoscopy prep for Hospital CUF Descobertas',
        summary:
          'A bilingual client-side wizard that turns clinical inputs into a timed, personalized prep plan — with quality treated as a product feature.',
        problem:
          'Patients need a clear, timed prep plan. Generic PDF instructions create confusion, missed steps, and avoidable exam delays.',
        approach:
          'Built a bilingual (PT/EN) client-side wizard that personalizes diet, medication, and exam-day guidance from clinical inputs, with local persistence, deep links, and calendar export (.ics + VALARM).',
        outcome: 'A responsive prep experience with testable core logic, end-to-end coverage, and CLS-conscious UI.',
      },
      pt: {
        title: 'CUF Prepara',
        subtitle: 'Preparação personalizada para colonoscopia no Hospital CUF Descobertas',
        summary:
          'Um assistente bilingue que transforma dados clínicos num plano de preparação claro e personalizado — com a qualidade integrada no produto.',
        problem:
          'As pessoas precisam de um plano de preparação claro e temporizado. Instruções genéricas em PDF podem gerar confusão, passos em falta e atrasos evitáveis.',
        approach:
          'Construí um assistente bilingue (PT/EN) que personaliza dieta, medicação e orientações para o dia do exame a partir de dados clínicos, com persistência local, ligações diretas e exportação de calendário (.ics + VALARM).',
        outcome:
          'Experiência de preparação responsiva com lógica principal testável, cobertura end-to-end e UI consciente de CLS.',
      },
    },
  },
  {
    key: 'dose-segura',
    kind: 'project',
    featured: true,
    caseStudy: true,
    order: 2,
    sanitized: false,
    links: {
      source: 'https://github.com/my-creations/dose-segura',
      demo: 'https://my-creations.github.io/dose-segura/',
    },
    stack: ['Expo / React Native', 'Expo Router', 'TypeScript', 'AsyncStorage', 'PWA', 'Jest', 'Playwright'],
    evidence: {
      kind: 'modes',
      en: {
        label: 'Delivery model',
        title: 'A clinical reference that does not depend on the ward network',
        items: ['Native', 'PWA', 'Offline'],
      },
      pt: {
        label: 'Modelo de entrega',
        title: 'Uma referência clínica que não depende da rede da enfermaria',
        items: ['Nativo', 'PWA', 'Offline'],
      },
    },
    card: {
      en: {
        title: 'Dose Segura',
        subtitle: 'Offline-first injectable-med reference for Portuguese clinicians',
        summary:
          'A mobile-first clinical reference shaped by real nursing workflow constraints, with a clear boundary: guidance, not prescription.',
        problem:
          'Nurses need fast, trustworthy reference material at the point of care — not a prescribing calculator, and not something that dies without network.',
        approach:
          'Shipped an offline-first reference app with structured domain modules and a PWA/web surface alongside native.',
        outcome:
          'A clinical utility with typed domain modules and automated checks for lint, types, unit, and web end-to-end tests.',
      },
      pt: {
        title: 'Dose Segura',
        subtitle: 'Referência offline-first de medicamentos injetáveis para profissionais de saúde em Portugal',
        summary:
          'Uma referência clínica mobile-first moldada por constrangimentos reais de enfermagem, com fronteira clara: orientação, não prescrição.',
        problem:
          'Os enfermeiros precisam de uma referência rápida e fiável durante os cuidados — não de uma calculadora de prescrição nem de algo que deixe de funcionar sem rede.',
        approach:
          'Criei uma app de referência offline-first com módulos de domínio estruturados e uma versão PWA/web, além da aplicação nativa.',
        outcome:
          'Ferramenta clínica com módulos de domínio tipados e verificações automatizadas de lint, tipos, testes unitários e E2E web.',
      },
    },
  },
  {
    key: 'portfolio-quality-system',
    kind: 'project',
    featured: true,
    caseStudy: true,
    order: 3,
    sanitized: false,
    links: {
      source: 'https://github.com/my-creations/portfolio',
      demo: 'https://my-creations.github.io/portfolio/',
    },
    stack: ['HTML', 'CSS', 'Vanilla JS', 'Vitest', 'Playwright', 'oxfmt', 'GitHub Actions', 'Eleventy'],
    evidence: {
      kind: 'pipeline',
      en: {
        label: 'Quality loop',
        title: 'Every push asks: is this safe to publish?',
        items: ['Content', 'Build', 'Unit', 'E2E', 'Deploy'],
      },
      pt: {
        label: 'Ciclo de qualidade',
        title: 'Cada push pergunta: é seguro publicar?',
        items: ['Conteúdo', 'Build', 'Unit', 'E2E', 'Deploy'],
      },
    },
    card: {
      en: {
        title: 'Portfolio quality system',
        subtitle: 'A personal site treated like production software',
        summary:
          'The Portfolio itself as evidence of Quality Engineering practice: bilingual content, semantic markup, automated tests, and CI on every push.',
        problem:
          'Portfolios often showcase projects but hide how the author works. Hiring managers cannot see testing discipline, CI, or accessibility rigor.',
        approach:
          'Built and is redesigning the site as a static, testable publication with bilingual content, semantic markup, Vitest, Playwright across three browser engines, and GitHub Actions CI.',
        outcome:
          'Cross-browser CI, accessibility patterns, and a documented quality bar — the site is proof of practice, not only a brochure.',
      },
      pt: {
        title: 'Sistema de qualidade do portefólio',
        subtitle: 'Um site pessoal tratado como software de produção',
        summary:
          'O próprio portefólio como exemplo prático de Quality Engineering: conteúdo bilingue, HTML semântico, testes automatizados e CI em cada push.',
        problem:
          'Os portefólios costumam mostrar projetos, mas escondem a forma de trabalhar. Quem está a contratar não vê a disciplina de testes, a CI nem o cuidado com a acessibilidade.',
        approach:
          'Construí e estou a redesenhar o site como uma publicação estática testável, com conteúdo bilingue, HTML semântico, Vitest, Playwright em três motores de browser e CI no GitHub Actions.',
        outcome:
          'CI em vários browsers, padrões de acessibilidade e um nível de qualidade documentado — o site mostra a prática, não é apenas um folheto.',
      },
    },
  },
];
