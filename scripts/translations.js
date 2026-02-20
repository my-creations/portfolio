// Translation file for portfolio content

function calculateExperience(startDate, language = 'en', endDate = null) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const diffTime = Math.abs(end - start);
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  
  const textMappings = {
    en: {
      month: { singular: 'month', plural: 'months' },
      year: { singular: 'year', plural: 'years' }
    },
    pt: {
      month: { singular: 'mês', plural: 'meses' },
      year: { singular: 'ano', plural: 'anos' }
    }
  };
  
  const texts = textMappings[language] || textMappings.en;
  
  if (diffYears < 1) {
    const months = Math.floor(diffYears * 12);
    const monthText = months === 1 ? texts.month.singular : texts.month.plural;
    return `${months} ${monthText}`;
  }
  
  const years = Math.floor(diffYears);
  const remainingMonths = Math.floor((diffYears - years) * 12);
  const yearText = years === 1 ? texts.year.singular : texts.year.plural;
  
  return remainingMonths === 0 ? `${years} ${yearText}` : `${years} ${yearText}+`;
}

var EXPERIENCE_START_DATES = {
  testAutomation: '2021-01-01',
  nursing: {
    start: '2018-01-01',
    end: '2023-01-01'
  }
};

var translations = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", contact: "Contact" },
    profile: { greeting: "Hello, I'm", name: "Pedro Robalo", title: "Software Engineer", downloadCV: "Download CV", contactInfo: "Contact Info" },
    about: {
      sectionSubtitle: "Get To Know More",
      sectionTitle: "About Me",
      experienceTitle: "Experience",
      experienceText: `${calculateExperience(EXPERIENCE_START_DATES.testAutomation, 'en')} / ${calculateExperience(EXPERIENCE_START_DATES.nursing.start, 'en', EXPERIENCE_START_DATES.nursing.end)}<br/>Test Automation Engineer / Registered Nurse`,
      educationTitle: "Education",
      educationText: "Bachelor's Degree in Computer Science<br/>Bachelor's Degree in Nursing",
      description: `I am a passionate Software Engineer with a unique background spanning both healthcare and technology.`
    },
    experience: {
      sectionSubtitle: "Explore My",
      sectionTitle: "Experience",
      frontend: { title: "Frontend Development", skills: { html: { name: "HTML", level: "Experienced" }, css: { name: "CSS", level: "Basic" }, tailwind: { name: "Tailwind", level: "Intermediate" }, react: { name: "React", level: "Basic" }, svelte: { name: "Svelte", level: "Basic" }, nextjs: { name: "Next.js", level: "Basic" } } },
      backend: { title: "Backend Development", skills: { nodejs: { name: "Node.js", level: "Intermediate" }, prisma: { name: "Prisma", level: "Basic" }, django: { name: "Django", level: "Basic" }, mongodb: { name: "MongoDB", level: "Basic" }, mysql: { name: "MySQL", level: "Basic" }, graphql: { name: "GraphQL", level: "Basic" } } },
      testAutomation: { title: "Test Automation", skills: { javascript: { name: "JavaScript", level: "Experienced" }, typescript: { name: "TypeScript", level: "Experienced" }, python: { name: "Python", level: "Experienced" }, selenium: { name: "Selenium", level: "Intermediate" }, appium: { name: "Appium", level: "Experienced" }, cypress: { name: "Cypress", level: "Experienced" }, detox: { name: "Detox", level: "Experienced" }, playwright: { name: "Playwright", level: "Experienced" } } }
    },
    projects: {
      sectionSubtitle: "Browse My Recent",
      sectionTitle: "Projects",
      projectOne: { title: "Joke Teller", description: "This project is about a funny robot that tells jokes.", github: "GitHub", liveDemo: "Live Demo" },
      projectTwo: { title: "Nike Store", description: "This project is an e-commerce platform for Nike products.", github: "GitHub", liveDemo: "Live Demo" },
      projectThree: { title: "Music Player", description: "This project is a music player application built with vanilla JavaScript.", github: "GitHub", liveDemo: "Live Demo" },
      projectFour: { title: "Animated Navigation", description: "This project showcases an animated navigation menu.", github: "GitHub", liveDemo: "Live Demo" },
      projectFive: { title: "Animated Template", description: "This project is an animated template showcasing various animations.", github: "GitHub", liveDemo: "Live Demo" },
      projectSix: { title: "Quote Generator", description: "This project is an inspirational quote generator.", github: "GitHub", liveDemo: "Live Demo" },
      projectSeven: { title: "Infinite Scroll", description: "This project demonstrates infinite scroll functionality.", github: "GitHub", liveDemo: "Live Demo" },
      projectEight: { title: "Custom Countdown", description: "An interactive countdown timer application.", github: "GitHub", liveDemo: "Live Demo" },
      projectNine: { title: "Book Keeper", description: "A bookmarking application for organizing websites.", github: "GitHub", liveDemo: "Live Demo" },
      projectTen: { title: "Form Validator", description: "A client-side form validation application.", github: "GitHub", liveDemo: "Live Demo" },
      projectEleven: { title: "Spock Rock Game", description: "An enhanced Rock-Paper-Scissors game.", github: "GitHub", liveDemo: "Live Demo" },
      projectTwelve: { title: "NASA APOD", description: "Explore NASA's Astronomy Picture of the Day.", github: "GitHub", liveDemo: "Live Demo" },
      projectThirteen: { title: "Math Sprint Game", description: "A fast-paced mathematical quiz game.", github: "GitHub", liveDemo: "Live Demo" },
      projectFourteen: { title: "Drag and Drop", description: "An interactive drag-and-drop application.", github: "GitHub", liveDemo: "Live Demo" },
      projectFifteen: { title: "Calculator", description: "A fully functional calculator application.", github: "GitHub", liveDemo: "Live Demo" }
    },
    contact: { sectionSubtitle: "Get in Touch", sectionTitle: "Contact Me", email: "pmrobalo@gmail.com", linkedin: "LinkedIn" },
    footer: { copyright: "Copyright © 2026 Pedro Robalo. All Rights Reserved." },
    alt: { profilePicture: "Pedro Robalo profile picture", experienceIcon: "Experience icon", educationIcon: "Education icon", checkmarkIcon: "Experience icon", emailIcon: "Email icon", linkedinIcon: "LinkedIn icon", githubIcon: "Github icon" }
  },
  pt: {
    nav: { about: "Sobre", experience: "Experiência", projects: "Projetos", contact: "Contacto" },
    profile: { greeting: "Olá, eu sou", name: "Pedro Robalo", title: "Engenheiro de Software", downloadCV: "Descarregar CV", contactInfo: "Contactos" },
    about: {
      sectionSubtitle: "Conhece Mais",
      sectionTitle: "Sobre Mim",
      experienceTitle: "Experiência",
      experienceText: `${calculateExperience(EXPERIENCE_START_DATES.testAutomation, 'pt')} / ${calculateExperience(EXPERIENCE_START_DATES.nursing.start, 'pt', EXPERIENCE_START_DATES.nursing.end)}<br/>Engenheiro de Automação de Testes / Enfermeiro`,
      educationTitle: "Educação",
      educationText: "Licenciatura em Ciências da Computação<br/>Licenciatura em Enfermagem",
      description: `Sou um Engenheiro de Software apaixonado com uma formação única.`
    },
    experience: {
      sectionSubtitle: "Explora a Minha",
      sectionTitle: "Experiência",
      frontend: { title: "Desenvolvimento Frontend", skills: { html: { name: "HTML", level: "Experiente" }, css: { name: "CSS", level: "Básico" }, tailwind: { name: "Tailwind", level: "Intermédio" }, react: { name: "React", level: "Básico" }, svelte: { name: "Svelte", level: "Básico" }, nextjs: { name: "Next.js", level: "Básico" } } },
      backend: { title: "Desenvolvimento Backend", skills: { nodejs: { name: "Node.js", level: "Intermédio" }, prisma: { name: "Prisma", level: "Básico" }, django: { name: "Django", level: "Básico" }, mongodb: { name: "MongoDB", level: "Básico" }, mysql: { name: "MySQL", level: "Básico" }, graphql: { name: "GraphQL", level: "Básico" } } },
      testAutomation: { title: "Automação de Testes", skills: { javascript: { name: "JavaScript", level: "Experiente" }, typescript: { name: "TypeScript", level: "Experiente" }, python: { name: "Python", level: "Experiente" }, selenium: { name: "Selenium", level: "Intermédio" }, appium: { name: "Appium", level: "Experiente" }, cypress: { name: "Cypress", level: "Experiente" }, detox: { name: "Detox", level: "Experiente" }, playwright: { name: "Playwright", level: "Experiente" } } }
    },
    projects: {
      sectionSubtitle: "Navega pelos Meus",
      sectionTitle: "Projetos Recentes",
      projectOne: { title: "Joke Teller", description: "Este projeto é sobre um robô divertido que conta piadas.", github: "GitHub", liveDemo: "Demo Ao Vivo" },
      projectTwo: { title: "Nike Store", description: "Este projeto é uma plataforma de e-commerce para produtos Nike.", github: "GitHub", liveDemo: "Demo Ao Vivo" },
      projectThree: { title: "Music Player", description: "Este projeto é uma aplicação de leitor de música.", github: "GitHub", liveDemo: "Demo Ao Vivo" },
      projectFour: { title: "Animated Navigation", description: "Este projeto mostra um menu de navegação animado.", github: "GitHub", liveDemo: "Demo Ao Vivo" },
      projectFive: { title: "Animated Template", description: "Este projeto é um template animado.", github: "GitHub", liveDemo: "Demo Ao Vivo" },
      projectSix: { title: "Quote Generator", description: "Este projeto é um gerador de citações inspiradoras.", github: "GitHub", liveDemo: "Demo Ao Vivo" },
      projectSeven: { title: "Infinite Scroll", description: "Este projeto demonstra scroll infinito.", github: "GitHub", liveDemo: "Demo Ao Vivo" },
      projectEight: { title: "Custom Countdown", description: "Uma aplicação interativa de cronômetro.", github: "GitHub", liveDemo: "Demo Ao Vivo" },
      projectNine: { title: "Book Keeper", description: "Uma aplicação de marcadores.", github: "GitHub", liveDemo: "Demo Ao Vivo" },
      projectTen: { title: "Form Validator", description: "Uma aplicação de validação de formulários.", github: "GitHub", liveDemo: "Demo Ao Vivo" },
      projectEleven: { title: "Spock Rock Game", description: "Um jogo melhorado de Pedra-Papel-Tesoura.", github: "GitHub", liveDemo: "Demo Ao Vivo" },
      projectTwelve: { title: "NASA APOD", description: "Explora a Imagem Astronômica do Dia da NASA.", github: "GitHub", liveDemo: "Demo Ao Vivo" },
      projectThirteen: { title: "Math Sprint Game", description: "Um jogo de quiz matemático rápido.", github: "GitHub", liveDemo: "Demo Ao Vivo" },
      projectFourteen: { title: "Drag and Drop", description: "Uma aplicação interativa de arrastar e soltar.", github: "GitHub", liveDemo: "Demo Ao Vivo" },
      projectFifteen: { title: "Calculator", description: "Uma aplicação de calculadora.", github: "GitHub", liveDemo: "Demo Ao Vivo" }
    },
    contact: { sectionSubtitle: "Entra em Contacto", sectionTitle: "Contacta-me", email: "pmrobalo@gmail.com", linkedin: "LinkedIn" },
    footer: { copyright: "Copyright © 2026 Pedro Robalo. Todos os Direitos Reservados." },
    alt: { profilePicture: "Foto de perfil de Pedro Robalo", experienceIcon: "Ícone de experiência", educationIcon: "Ícone de educação", checkmarkIcon: "Ícone de experiência", emailIcon: "Ícone de email", linkedinIcon: "Ícone do LinkedIn", githubIcon: "Ícone do Github" }
  }
};

var currentLanguage = 'en';

function getText(key, language) {
  language = language || currentLanguage;
  var keys = key.split('.');
  var result = translations[language];
  
  for (var i = 0; i < keys.length; i++) {
    if (result && result[keys[i]]) {
      result = result[keys[i]];
    } else {
      console.warn('Translation key not found: ' + key);
      return key;
    }
  }
  
  return result;
}

function updateTranslations(language) {
  language = language || currentLanguage;
  var elements = document.querySelectorAll('[data-translate]');
  
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var key = element.getAttribute('data-translate');
    var text = getText(key, language);
    
    if (element.tagName === 'INPUT' && element.type === 'button') {
      element.value = text;
    } else if (text.indexOf('<br>') !== -1 || text.indexOf('<br/>') !== -1) {
      element.innerHTML = text;
    } else {
      element.textContent = text;
    }
  }
  
  updateLanguageToggleButtons();
}

function switchLanguage(language) {
  if (language === currentLanguage) return;
  
  currentLanguage = language;
  updateTranslations(language);
  
  localStorage.setItem('preferredLanguage', language);
}

function updateLanguageToggleButtons() {
  var desktopToggle = document.querySelector('#desktop-lang-toggle');
  var mobileToggle = document.querySelector('#mobile-lang-toggle');
  
  if (desktopToggle) {
    desktopToggle.innerHTML = currentLanguage === 'en' ? 
      'EN <span class="lang-separator">/</span> <span class="inactive">PT</span>' : 
      '<span class="inactive">EN</span> <span class="lang-separator">/</span> PT';
  }
  
  if (mobileToggle) {
    mobileToggle.innerHTML = currentLanguage === 'en' ? 
      'EN <span class="lang-separator">/</span> <span class="inactive">PT</span>' : 
      '<span class="inactive">EN</span> <span class="lang-separator">/</span> PT';
  }
}

function toggleLanguage() {
  var newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
  switchLanguage(newLanguage);
}

function initializeTranslations() {
  var savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  currentLanguage = savedLanguage;
  updateTranslations(currentLanguage);
}

document.addEventListener('DOMContentLoaded', initializeTranslations);

try {
  module.exports = {
    calculateExperience,
    getText,
    updateTranslations,
    switchLanguage,
    toggleLanguage,
    initializeTranslations,
    translations,
    EXPERIENCE_START_DATES,
    get currentLanguage() { return currentLanguage; },
    set currentLanguage(val) { currentLanguage = val; }
  };
} catch (e) {}
