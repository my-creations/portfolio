# Pedro Robalo - Portfolio Website

A modern, responsive personal portfolio website showcasing my journey as a Software Engineer with expertise in test automation and a unique background in healthcare.

## 🚀 Live Demo

Visit my portfolio: [Your Live URL Here]

## 📋 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Multi-language Support**: English and Portuguese language switching
- **Interactive Components**: Smooth animations and hover effects
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Project Showcase**: Interactive carousel/swiper for project display
- **Contact Integration**: Direct email and social media links
- **Downloadable CV**: Easy access to resume/CV download
- **Professional Sections**: About, Experience, Projects, and Contact sections

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox/grid, animations, and media queries
- **Vanilla JavaScript**: Interactive functionality and language switching
- **Swiper.js**: Touch slider/carousel for project showcase
- **Font Awesome**: Icons for social media and navigation

## 📁 Project Structure

```
vanila-portfolio/
├── index.html              # Main HTML file
├── style.css               # Primary stylesheet
├── mediaqueries.css        # Responsive design styles
├── script.js               # Core JavaScript functionality
├── swiper-init.js          # Swiper carousel configuration
├── translations.js         # Multi-language content
└── assets/                 # Images and documents
    ├── about-pic.png
    ├── profile-pic.png
    ├── project-1.png
    ├── project-2.png
    ├── project-3.png
    ├── PedroRobalo_CV.pdf
    └── [various icons]
```

## 🎨 Sections Overview

### Navigation
- Desktop navigation with smooth scrolling
- Mobile hamburger menu with slide-out functionality

### Profile
- Professional headshot
- Dynamic greeting and title
- Call-to-action buttons (Download CV, Contact Info)

### About
- Experience and education highlights

### Experience
- Technical skills showcase
- Years of experience display
- Professional competencies

### Projects
- Interactive project carousel
- Live demo and GitHub links
- Technology stack highlights

### Contact
- Email integration
- Social media links (LinkedIn, GitHub)
- Professional contact information

## 🚀 Getting Started

### Prerequisites
- Web browser
- Local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/vanila-portfolio.git
   cd vanilla-portfolio
   ```

2. **Open locally**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     
     # Using Live Server (VS Code extension)
     # Right-click index.html → "Open with Live Server"
     ```

3. **View the portfolio**
   - Navigate to `http://localhost:8000` (if using local server)
   - Or directly open the `index.html` file

## 🔧 Customization

### Updating Content

1. **Personal Information**
   - Edit `translations.js` for text content
   - Replace images in `assets/` folder
   - Update `assets/PedroRobalo_CV.pdf` with your CV

2. **Styling**
   - Modify `style.css` for general styling
   - Update `mediaqueries.css` for responsive behavior
   - Customize color scheme and fonts

3. **Projects**
   - Add project images to `assets/`
   - Update project information in `translations.js`
   - Modify project links in `index.html`

To add a new language:
1. Add language object to `translations.js`
2. Update language toggle functionality
3. Test all sections for proper translation

## 📱 Responsive Design

The portfolio is designed to work seamlessly across all devices:

- **Desktop**: Full navigation and layout
- **Tablet**: Optimized spacing and touch interactions
- **Mobile**: Hamburger menu and stacked layout

Key breakpoints:
- Desktop: 1400px+
- Laptop: 1200px+
- Tablet: 600px+
- Mobile: <600px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 Performance Optimization

- Optimized images for web
- Minimal external dependencies
- Clean, semantic HTML
- Efficient CSS organization
- Vanilla JavaScript for fast loading

## 🧪 Testing

The project includes data-test attributes for automated testing:

```html
<button data-test="download-cv-button">Download CV</button>
```

This enables easy integration with testing frameworks like:
- Cypress
- Playwright
- Selenium

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

⭐ If you found this portfolio helpful, please give it a star!
