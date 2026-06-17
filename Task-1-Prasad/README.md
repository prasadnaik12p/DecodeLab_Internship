# NexaUI — Modern Web Design System

A lightweight, responsive, and accessible design system landing page built with vanilla HTML, CSS, and JavaScript.

## Overview

NexaUI is a modern web application showcasing a professional design system with:
- **Responsive Design**: Seamlessly adapts from mobile to desktop
- **Accessibility First**: ARIA attributes and semantic HTML for screen readers
- **Interactive Components**: Smooth animations and smart interactions

## 🎯 Key Features

- 📱 **Fully Responsive**: Mobile-first design with adaptive breakpoints
- ♿ **Accessible**: WCAG AA compliant with proper ARIA attributes
- ⚡ **Lightweight**: Pure vanilla JavaScript, no frameworks or dependencies
- 🎨 **Modern UI**: Professional design system with smooth transitions
- 🔄 **Interactive Elements**:
  - Mobile navigation toggle with hamburger menu
  - Tabbed content sections for showcase
  - Annual/Monthly pricing toggle
  - Smooth hover effects and animations

## 🛠 Tech Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: DOM manipulation and event handling
- **Typography**: Google Fonts (Syne for display, Inter for body)
- **Icons**: Font Awesome 6.7.2

## 📁 Project Structure

```
Task-1-Prasad/
├── index.html              # Main HTML with all sections
├── style.css               # Styling, layout, and animations
├── function.js             # Interactive functionality
└── README.md               # This documentation
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools, no npm, no server required

### Installation

1. Download or clone the project files
2. Keep all files in the same folder
3. Open `index.html` in your browser

**Optional**: Use a local server for best results:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000`

## 📑 Page Sections

| Section | Features |
|---------|----------|
| **Header** | Logo, desktop navigation, mobile hamburger menu |
| **Hero** | Main headline, subheading, CTA buttons, grid background |
| **Features** | Showcase of key capabilities |
| **Showcase** | Tabbed content display (Mobile/Tablet/Desktop views) |
| **Pricing** | Flexible pricing cards with monthly/annual toggle |
| **Contact** | Call-to-action section |

## 🎮 JavaScript Features (`function.js`)

- **Mobile Navigation** — Hamburger menu toggle with ARIA attributes sync for accessibility
- **Tab Switcher** — Manage showcase tabs with active state and proper ARIA labels
- **Pricing Toggle** — Switch between monthly and annual pricing dynamically
- **Accessibility** — Proper ARIA roles, labels, and focus management

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
  --accent: #5b4eff;         /* Primary brand color */
  --accent-dark: #3c30d4;    /* Dark variant */
  --accent-light: #ede9ff;   /* Light variant */
  --green: #00c98d;          /* Success color */
  --ink: #0e0e12;            /* Dark text */
  --surface: #f7f7fb;        /* Light background */
  --white: #ffffff;
}
```

### Fonts
Modify Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
```

### Content
Edit directly in `index.html` — text, links, images, and sections

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|-----------|--------|
| 320px – 767px | Single column, mobile nav, stacked cards |
| 768px – 1023px | Two-column layout |
| 1024px+ | Full multi-column desktop layout |

## ♿ Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels and attributes on interactive elements
- ✅ Keyboard navigation support
- ✅ High contrast color ratios (WCAG AA)
- ✅ Touch-friendly interactive elements
- ✅ Properly labeled form inputs

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## ⚡ Performance

- Minimal JavaScript footprint
- No external dependencies or frameworks
- Optimized CSS with CSS variables
- Fast load times with optimized fonts
- Smooth 60fps animations

## 📝 License

ISC