// Translation file for portfolio content
const translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact"
    },
    
    // Profile Section
    profile: {
      greeting: "Hello, I'm",
      name: "Pedro Robalo",
      title: "Software Engineer",
      downloadCV: "Download CV",
      contactInfo: "Contact Info"
    },
    
    // About Section
    about: {
      sectionSubtitle: "Get To Know More",
      sectionTitle: "About Me",
      experienceTitle: "Experience",
      experienceText: "4.5+ years / 4.5+ years<br/>Test Automation Engineer / Registered Nurse",
      educationTitle: "Education",
      educationText: "Bachelor's Degree in Computer Science<br/>Bachelor's Degree in Nursing",
      description: "I am a passionate Software Engineer with a unique background spanning both healthcare and technology. With over 4.5 years of experience as a Test Automation Engineer and a foundation in nursing, I bring a detail-oriented, problem-solving mindset to everything I do. My journey from healthcare to tech has taught me the importance of precision, user-centered thinking, and continuous learning. I specialize in test automation frameworks and quality assurance, while constantly expanding my skills in full-stack development. I thrive on building robust, scalable solutions and am always eager to tackle new challenges and explore emerging technologies."
    },
    
    // Experience Section
    experience: {
      sectionSubtitle: "Explore My",
      sectionTitle: "Experience",
      frontend: {
        title: "Frontend Development",
        skills: {
          html: { name: "HTML", level: "Experienced" },
          css: { name: "CSS", level: "Basic" },
          tailwind: { name: "Tailwind", level: "Intermediate" },
          react: { name: "React", level: "Basic" },
          svelte: { name: "Svelte", level: "Basic" },
          nextjs: { name: "Next.js", level: "Basic" }
        }
      },
      backend: {
        title: "Backend Development",
        skills: {
          nodejs: { name: "Node.js", level: "Intermediate" },
          prisma: { name: "Prisma", level: "Basic" },
          django: { name: "Django", level: "Basic" },
          mongodb: { name: "MongoDB", level: "Basic" },
          mysql: { name: "MySQL", level: "Basic" },
          graphql: { name: "GraphQL", level: "Basic" }
        }
      },
      testAutomation: {
        title: "Test Automation",
        skills: {
          javascript: { name: "JavaScript", level: "Experienced" },
          typescript: { name: "TypeScript", level: "Experienced" },
          python: { name: "Python", level: "Experienced" },
          selenium: { name: "Selenium", level: "Intermediate" },
          appium: { name: "Appium", level: "Experienced" },
          cypress: { name: "Cypress", level: "Experienced" },
          detox: { name: "Detox", level: "Experienced" },
          playwright: { name: "Playwright", level: "Experienced" }
        }
      }
    },
    
    // Projects Section
    projects: {
      sectionSubtitle: "Browse My Recent",
      sectionTitle: "Projects",
      projectOne: {
        title: "Project One",
        description: "Description of the project. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        github: "GitHub",
        liveDemo: "Live Demo"
      },
      projectTwo: {
        title: "Project Two",
        description: "Description of the project. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        github: "GitHub",
        liveDemo: "Live Demo"
      },
      projectThree: {
        title: "Project Three",
        description: "Description of the project. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        github: "GitHub",
        liveDemo: "Live Demo"
      },
      projectFour: {
        title: "Project Four",
        description: "Description of the project. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        github: "GitHub",
        liveDemo: "Live Demo"
      },
      projectFive: {
        title: "Project Fifth",
        description: "Description of the project. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        github: "GitHub",
        liveDemo: "Live Demo"
      }
    },
    
    // Contact Section
    contact: {
      sectionSubtitle: "Get in Touch",
      sectionTitle: "Contact Me",
      email: "pmrobalo@gmail.com",
      linkedin: "LinkedIn"
    },
    
    // Footer
    footer: {
      copyright: "Copyright © 2025 Pedro Robalo. All Rights Reserved."
    },
    
    // Alt text for images
    alt: {
      profilePicture: "Pedro Robalo profile picture",
      experienceIcon: "Experience icon",
      educationIcon: "Education icon",
      checkmarkIcon: "Experience icon",
      emailIcon: "Email icon",
      linkedinIcon: "LinkedIn icon",
      githubIcon: "Github icon"
    }
  }
};

// Function to get translation text
function getText(key) {
  const keys = key.split('.');
  let result = translations.en;
  
  for (const k of keys) {
    if (result && result[k]) {
      result = result[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }
  
  return result;
}

// Function to initialize translations on page load
function initializeTranslations() {
  // Update navigation
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    const text = getText(key);
    
    if (element.tagName === 'INPUT' && element.type === 'button') {
      element.value = text;
    } else if (text.includes('<br>') || text.includes('<br/>')) {
      element.innerHTML = text;
    } else {
      element.textContent = text;
    }
  });
}

// Initialize translations when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTranslations);
