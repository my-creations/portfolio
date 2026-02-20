# Pedro Robalo - Portfolio Website

A modern, responsive personal portfolio website showcasing my journey as a Software Engineer with expertise in test automation and a unique background in healthcare.

## 🚀 Live Demo

Visit my portfolio: [Portfolio Live Demo](https://pedrorobalo1994.github.io/portfolio/)

## 📋 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Multi-language Support**: English and Portuguese language switching with dynamic content loading
- **Interactive Components**: Smooth animations, hover effects, and touch interactions
- **Mobile Navigation**: Hamburger menu with slide animation for mobile devices
- **Project Showcase**: Interactive Swiper carousel displaying 15 projects with seamless loop navigation
- **Live Project Previews**: Dynamic iframe previews for visible project cards with graceful fallback state
- **Contact Integration**: Direct email and social media links (LinkedIn, GitHub)
- **Downloadable CV**: Easy access to PDF resume download
- **Professional Sections**: About, Experience, Projects, and Contact sections
- **Comprehensive Testing**: 142 automated tests (43 unit + 99 E2E) with CI/CD pipeline
- **PWA Support**: Web app manifest for mobile installation
- **Optimized Performance**: Fast loading with vanilla JavaScript and minimal dependencies

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features and data-test attributes
- **CSS3**: Modern styling with flexbox/grid, smooth animations, and responsive media queries
- **Vanilla JavaScript**: Interactive functionality, language switching, and menu toggling
- **Swiper.js**: Touch-enabled carousel slider for project showcase
- **PWA**: Web App Manifest for progressive web app capabilities

### Testing Stack

- **Vitest**: Fast unit testing with jsdom environment
- **Playwright**: Cross-browser E2E testing (Chromium, Firefox, WebKit)
- **GitHub Actions**: CI/CD pipeline on Blacksmith runners

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file with semantic structure
├── style.css               # Primary stylesheet with modern CSS
├── mediaqueries.css        # Responsive design breakpoints
├── package.json            # Node.js dependencies and test scripts
├── vitest.config.js        # Vitest unit test configuration
├── playwright.config.js    # Playwright E2E test configuration
├── scripts/
│   ├── main.js             # Core JavaScript functionality (menu interactions)
│   ├── swiper-init.js      # Projects data, carousel behavior, and live preview lifecycle
│   └── translations.js     # Multi-language content (EN/PT)
├── tests/
│   ├── unit/               # Unit tests (Vitest)
│   │   ├── main.test.js
│   │   ├── translations.test.js
│   │   └── swiper-init.test.js
│   └── e2e/                # E2E tests (Playwright)
│       ├── navigation.spec.js
│       ├── language.spec.js
│       ├── projects.spec.js
│       └── accessibility.spec.js
├── site.webmanifest        # PWA manifest file
├── assets/                 # Images, documents, and icons
│   ├── docs/
│   │   └── PedroRobalo_CV.pdf # Downloadable resume
│   ├── favicons/
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── favicon-16x16.svg
│   │   └── favicon-48x48.svg
│   └── general/
│       ├── profile-pic.png     # Profile image
│       ├── checkmark.png       # Skills icon
│       ├── education.png       # Education section icon
│       ├── experience.png      # Experience section icon
│       ├── email.png           # Email contact icon
│       ├── github.png          # GitHub social icon
│       └── linkedin.png        # LinkedIn social icon
└── .github/
    └── workflows/
        ├── ci.yml              # CI pipeline (unit + E2E tests)
        └── build.yml           # Docker build and push
```

## 🎨 Sections Overview

### Navigation

- Desktop navigation with smooth scrolling and active section highlighting
- Mobile hamburger menu with slide-out animation and accessible controls
- Language toggle between English and Portuguese

### Profile Section

- Professional headshot with optimized image loading
- Dynamic multilingual greeting and professional title
- Call-to-action buttons with hover effects (Download CV, Contact Info)
- Responsive layout for all screen sizes

### About Section

- Comprehensive professional background highlighting healthcare to tech transition
- Dynamic experience timeline that automatically calculates years based on start dates
- Education credentials with dual bachelor's degrees
- Personal story emphasizing problem-solving mindset and continuous learning

### Experience Section

- Three specialized skill categories with visual progress indicators:
  - **Frontend Development**: HTML, CSS, Tailwind, React, Svelte, Next.js
  - **Backend Development**: Node.js, Prisma, Django, MongoDB, MySQL, GraphQL
  - **Test Automation**: JavaScript, TypeScript, Python, Selenium, Appium, Cypress, Detox, Playwright
- Skill level indicators (Basic, Intermediate, Experienced)
- Icon-based visual representation

### Projects Section

- Interactive Swiper carousel with touch/swipe support
- 15 portfolio projects showcasing diverse technical skills:
  - JavaScript applications (Calculator, Music Player, Quote Generator)
  - UI/UX projects (Animated Navigation, Nike Store)
  - API integrations (NASA APOD, Joke Teller)
  - Interactive games (Math Sprint, Spock Rock Game)
  - Productivity tools (Book Keeper, Form Validator, Infinite Scroll)
- Each project includes GitHub repository and live demo links
- Visible slides mount live web previews (active + adjacent), with automatic unmounting when not visible
- Preview loading has timeout/error fallback to keep the card usable
- Multilingual project descriptions
- Seamless infinite carousel loop from end to beginning

### Contact Section

- Professional email integration with mailto functionality
- Social media links (LinkedIn, GitHub) with external linking
- Contact form or direct communication options
- Consistent styling with overall design theme

## 🚀 Getting Started

### Prerequisites

- Web browser
- Node.js 18+ (for running tests)
- Local web server (optional, for development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/pedrorobalo/portfolio.git
   cd portfolio
   ```

2. **Install dependencies** (for testing)

   ```bash
   npm install
   ```

3. **Open locally**

   - Simply open `index.html` in your web browser
   - Or use a local server for optimal experience:

      ```bash
      # Using npm
      npm run serve

      # Using Python 3
      python -m http.server 8000

      # Using Live Server (VS Code extension)
      # Right-click index.html → "Open with Live Server"
      ```

4. **View the portfolio**
   - Navigate to `http://localhost:8080` (if using npm serve)
   - Or directly open the `index.html` file in your browser
   - Test responsiveness by resizing browser window or using developer tools

5. **Run tests** (optional)

   ```bash
   npm test              # Unit tests
   npm run test:e2e      # E2E tests
   ```

## 🔧 Customization

### Updating Personal Content

1. **Personal Information & Text**

   - Edit `scripts/translations.js` for all text content in both English and Portuguese
   - Update personal details, descriptions, and project information
   - Modify skill levels and experience descriptions

2. **Images & Documents**

   - Replace `assets/profile-pic.png` with your professional photo
   - Update `assets/PedroRobalo_CV.pdf` with your resume/CV
   - Add optional fallback project screenshots only if you decide to re-enable image fallback behavior
   - Ensure image optimization for web performance

3. **Projects Showcase**

   - Add a new project entry in `scripts/swiper-init.js` inside the `PROJECTS` array (`key`, `github`, `demo`)
   - Add matching translation keys in `scripts/translations.js` under `projects`
   - Optional: provide a fallback screenshot asset if desired
   - Customize Swiper settings in `scripts/swiper-init.js` for carousel behavior

4. **Styling & Design**

   - Modify `style.css` for colors, fonts, and general styling
   - Update `mediaqueries.css` for responsive behavior and breakpoints
   - Customize animations, transitions, and hover effects
   - Adjust layout spacing and component sizing

5. **Functionality**
   - Update `scripts/main.js` for menu interactions and JavaScript functionality
   - Modify language switching logic if needed
   - Add new interactive features or animations

### Adding New Languages

To add a new language (e.g., Spanish):

1. Add a new language object to `scripts/translations.js` (e.g., `es: { ... }`)
2. Update the language toggle functionality in your JavaScript
3. Add the new language option to the UI
4. Test all sections for proper translation display
5. Ensure consistent formatting across all languages

### Customizing Projects

For each new project:

1. Add a project object to `scripts/swiper-init.js` with `key`, `github`, and `demo`
2. Add the project title/description labels in `scripts/translations.js`
3. Optional: add a fallback screenshot in `assets/`
4. Ensure GitHub and live demo links are functional
5. Test responsive display and preview loading in the Swiper carousel

## 📱 Responsive Design

The portfolio is designed with a mobile-first approach and works seamlessly across all devices:

- **Desktop (1400px+)**: Full navigation bar, multi-column layouts, hover effects
- **Laptop (1200px+)**: Optimized spacing, maintained functionality
- **Tablet (600px-1199px)**: Adjusted layouts, touch-friendly interactions
- **Mobile (<600px)**: Hamburger menu, single-column layout, optimized touch targets

### Key Responsive Features:

- **Navigation**: Desktop horizontal nav transforms to mobile hamburger menu
- **Typography**: Scalable font sizes and line heights
- **Images**: Responsive images with proper aspect ratios
- **Touch Interactions**: Optimized for mobile gestures and swipe actions
- **Performance**: Optimized loading for mobile networks

### Breakpoints:

```css
/* Mobile First Approach */
@media screen and (min-width: 600px) {
  /* Tablet */
}
@media screen and (min-width: 1200px) {
  /* Laptop */
}
@media screen and (min-width: 1400px) {
  /* Desktop */
}
```

## 📊 Performance & Optimization

### Performance Features

- **Lightweight Build**: Vanilla JavaScript for fast loading and minimal bundle size
- **Optimized Images**: Compressed project images and icons for web delivery
- **Minimal Dependencies**: Only essential external library (Swiper.js)
- **Semantic HTML**: Clean, accessible markup structure
- **Efficient CSS**: Organized stylesheets with logical separation
- **PWA Ready**: Web App Manifest for mobile installation capabilities

### SEO & Accessibility

- **Meta Tags**: Proper meta descriptions and viewport configuration
- **Semantic HTML5**: Screen reader friendly structure
- **Alt Attributes**: Descriptive alt text for all images
- **ARIA Labels**: Enhanced accessibility for interactive elements
- **Cache Control**: Optimized caching headers for better performance

### Loading Optimization

- **Critical CSS**: Inline critical styles for faster rendering
- **Image Optimization**: Properly sized images for different screen densities
- **Minimal HTTP Requests**: Consolidated resources where possible
- **Progressive Enhancement**: Core functionality works without JavaScript

## 🌐 Browser Compatibility

### Desktop Browsers

- **Chrome**: Version 90+ (Full support)
- **Firefox**: Version 88+ (Full support)
- **Safari**: Version 14+ (Full support)
- **Edge**: Version 90+ (Full support)

### Mobile Browsers

- **iOS Safari**: Version 14+ (Full support)
- **Chrome Mobile**: Version 90+ (Full support)
- **Samsung Internet**: Version 14+ (Full support)
- **Firefox Mobile**: Version 88+ (Full support)

### Features & Fallbacks

- **CSS Grid & Flexbox**: Modern layout with fallbacks
- **ES6+ Features**: Modern JavaScript with graceful degradation
- **Touch Events**: Optimized for mobile interactions
- **Service Workers**: PWA features where supported

## 🧪 Testing & Quality Assurance

The portfolio includes a comprehensive test suite with **142 automated tests** covering unit and end-to-end scenarios.

### Test Coverage

| Type | Tests | Coverage |
|------|-------|----------|
| Unit Tests | 43 | JavaScript functions, translations, carousel logic |
| E2E Tests | 99 | Cross-browser UI testing (Chromium, Firefox, WebKit) |

### Running Tests Locally

```bash
# Install dependencies
npm install

# Run unit tests
npm test

# Run unit tests in watch mode
npm run test:watch

# Run E2E tests (all browsers)
npm run test:e2e

# Run E2E tests on specific browser
npm run test:e2e:chromium
npm run test:e2e:firefox
npm run test:e2e:webkit

# Run E2E tests with UI mode
npm run test:e2e:ui

# Run E2E tests in debug mode
npm run test:e2e:debug
```

### Unit Tests (43 tests)

**`tests/unit/main.test.js`** - Menu and navigation functions:
- `toggleMenu()` - Toggle behavior, null element handling
- `closeMenu()` - Close behavior, graceful error handling
- `scrollToSection()` - Smooth scroll with correct options
- `clearLocationHash()` - URL hash cleanup

**`tests/unit/translations.test.js`** - Internationalization:
- `calculateExperience()` - Date calculations in EN/PT
- `getText()` - Nested key resolution
- `switchLanguage()` - Language switching and localStorage persistence
- Translation structure validation (15 projects, all sections)

**`tests/unit/swiper-init.test.js`** - Projects carousel:
- `PROJECTS` array - 15 projects with valid URLs
- `renderProjectSlides()` - DOM rendering
- `setPreviewState()` / `setFallback()` - Preview state management
- `mountPreview()` / `unmountPreview()` - Iframe lifecycle
- `getVisibleSlideIndexes()` - Swiper integration

### E2E Tests (99 tests = 33 × 3 browsers)

**`tests/e2e/navigation.spec.js`** - 12 tests:
- Desktop navigation visibility and links
- Smooth scroll to all sections (About, Experience, Projects, Contact)
- Mobile hamburger menu toggle
- Mobile language toggle

**`tests/e2e/language.spec.js`** - 5 tests:
- Language toggle button visibility
- EN ↔ PT language switching
- Language persistence across page reload
- Mobile language toggle

**`tests/e2e/projects.spec.js`** - 9 tests:
- Projects section and swiper visibility
- Navigation buttons and pagination
- Next/previous slide navigation
- Project slides rendering
- Carousel infinite loop

**`tests/e2e/accessibility.spec.js`** - 7 tests:
- Page title and meta tags
- Alt text on images
- Semantic HTML structure
- Heading hierarchy
- Email link accessibility
- Keyboard navigation and focus management

### CI/CD Pipeline

Tests run automatically on push and pull requests via GitHub Actions on [Blacksmith](https://blacksmith.sh/) runners:

```yaml
# .github/workflows/ci.yml
jobs:
  unit-tests:
    runs-on: blacksmith-2vcpu-ubuntu-2404
    steps: [npm test]

  e2e-tests:
    runs-on: blacksmith-2vcpu-ubuntu-2404
    steps: [npm run test:e2e]  # Chromium, Firefox, WebKit
```

### Data Test Attributes

All interactive elements include `data-test` attributes for reliable E2E testing:

```html
<nav data-test="desktop-navigation">
  <a href="#about" data-test="desktop-nav-about">About</a>
</nav>

<button data-test="download-cv-button">Download CV</button>
<div data-test="hamburger-icon">...</div>

<section data-test="projects-section">...</section>
<article data-test="project-1-container">...</article>
```

### Manual Testing Checklist

- [ ] Navigation menu functionality (desktop & mobile)
- [ ] Language switching between English and Portuguese
- [ ] Project carousel swipe/click interactions
- [ ] Contact links and email functionality
- [ ] CV download functionality
- [ ] Responsive design across all breakpoints
- [ ] Cross-browser compatibility testing
- [ ] Performance and loading speed validation

## 🚀 Deployment

### Static Hosting Options

The portfolio is a static website and can be deployed on various platforms:

#### GitHub Pages

```bash
# Push to main branch, then enable GitHub Pages in repository settings
git add .
git commit -m "Deploy portfolio"
git push origin main
```

#### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty for static sites)
3. Set publish directory: `/` (root)
4. Deploy automatically on git push

#### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel --prod
```

#### Traditional Web Hosting

- Upload all files to your web hosting service
- Ensure `index.html` is in the root directory
- Configure domain and SSL as needed

### Custom Domain Setup

1. Purchase domain from registrar
2. Configure DNS settings:
   - For GitHub Pages: Add CNAME record pointing to `username.github.io`
   - For Netlify/Vercel: Follow platform-specific DNS instructions
3. Update repository settings with custom domain
4. Enable HTTPS/SSL certificate

### Environment Configuration

- No build process required (static site)
- No environment variables needed
- All assets are relative paths
- Works with or without trailing slashes in URLs

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/improvement-name
   ```
3. **Make your changes**
   - Follow the existing code style and structure
   - Test across different devices and browsers
   - Update documentation if needed
4. **Commit your changes**
   ```bash
   git commit -am "Add: brief description of improvement"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/improvement-name
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- Maintain responsive design principles
- Follow accessibility best practices
- Keep performance optimizations in mind
- Test on multiple browsers and devices
- Update README if adding new features

## 📞 Contact & Support

- **Portfolio Website**: [Live Demo Link]
- **GitHub**: [@pedrorobalo](https://github.com/pedrorobalo)
- **LinkedIn**: [Pedro Robalo](https://linkedin.com/in/pedrorobalo)
- **Email**: [your.email@example.com]

For questions about the portfolio structure or technical implementation, feel free to reach out!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

### MIT License Summary

- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

## 🌟 Acknowledgments

- **Swiper.js**: For the beautiful touch carousel functionality
- **Vitest**: For fast and modern unit testing
- **Playwright**: For reliable cross-browser E2E testing
- **Blacksmith**: For fast CI runners
- **Modern CSS**: Utilizing CSS Grid and Flexbox for responsive layouts
- **Web Standards**: Following HTML5 semantic markup and accessibility guidelines

---

⭐ **If you found this portfolio helpful, please give it a star!**

📝 **Last Updated**: February 2026

🔄 **Version**: 2.2.0 - Comprehensive test suite with Vitest unit tests and Playwright E2E tests
