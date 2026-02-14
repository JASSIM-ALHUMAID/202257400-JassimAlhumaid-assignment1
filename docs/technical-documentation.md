# SWE363 Portfolio - Technical Documentation

## 1. Project Overview

The SWE363 Portfolio is a modern, responsive personal portfolio website designed to showcase projects, skills, and contact information. It features a glassmorphism design aesthetic and a fully responsive layout suitable for all devices.

The project is built with a focus on clean architecture and performance, utilizing modern web standards.

## 2. Technology Stack

- **HTML5**: Semantic markup for structure and accessibility.
- **Tailwind CSS (v4)**: Utility-first CSS framework for styling, including custom configurations for colors and fonts.
- **Vanilla JavaScript**: Lightweight interactions and dynamic content (e.g., greeting message based on time of day).
- **Lucide Icons**: Simple and consistent icon library.

## 3. Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## 4. Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/YOUR_USERNAME/SWE363-portfolio.git
    cd SWE363-portfolio
    ```

2.  **Install dependencies:**
    This project uses Tailwind CSS accessed via npm.
    ```bash
    npm install
    ```

## 5. Development

To start the development server and watch for CSS changes:

```bash
npm run dev
```

This command runs the Tailwind CLI to compile `css/styles.css` into `css/output.css` and watches for any changes in your HTML or CSS files.

> **Note**: You must open `index.html` in your browser to view the site. Using a standardized local server (like Live Server in VS Code) is recommended for hot reloading.

## 6. Project Structure

```text
SWE363-portfolio/
├── assets/              # Images and static assets
├── css/
│   ├── styles.css       # Source CSS file with Tailwind directives & custom themes
│   └── output.css       # Compiled CSS (do not edit directly)
├── docs/                # Documentation files
├── js/
│   └── script.js        # valid JavaScript logic
├── index.html           # Main entry point
├── package.json         # Project metadata and scripts
└── tailwind.config.js   # (Optional) Tailwind configuration if needed, currently using v4 CLI
```

## 7. Customization

### Colors

The project uses CSS variables defined in `css/styles.css` for easy theming.

```css
@theme {
  --color-primary: #101322;
  --color-blob: #151e4b;
  --color-foreground: #d1d5db;
  --color-blue: #5161f0;
  --color-purple: #c5a3f7;
}
```

Update these values to change the color scheme globally.

### Content

- **Portfolio Items**: Edit the "Projects" section in `index.html`.
- **Bio/Skills**: Update the "About" and "Hero" sections in `index.html`.
- **Dynamic Greeting**: Modify the logic in `js/script.js` to change how the greeting behaves.
