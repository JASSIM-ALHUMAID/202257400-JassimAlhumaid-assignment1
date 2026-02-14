# SWE363 Portfolio

A modern, responsive portfolio website built with HTML, Tailwind CSS, and JavaScript. Features glassmorphism design and a clean layout showcasing projects and skills.

## 🚀 Features

- **Glassmorphism Design**: Modern glass-like effects with backdrop blur and transparency
- **Responsive Layout**: Fully responsive design that works seamlessly on all devices
- **Dynamic Content**: Time-based welcome message that changes throughout the day
- **Project Showcase**: Project cards with hover effects and technology tags

## 🛠️ Tech Stack

- **HTML5**: Semantic markup and structure
- **Tailwind CSS v4.1.18**: Utility-first CSS framework
- **JavaScript**: Dynamic functionality and interactions
- **Lucide Icons**: Beautiful, consistent iconography
- **GitHub Copilot**: AI-powered code completion and assistance

## 📁 Project Structure

```
SWE363-portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css          # Custom styles and Tailwind imports
│   └── output.css          # Compiled Tailwind CSS
├── js/
│   └── script.js           # JavaScript functionality
├── assets/
│   └── images/             # Project images and assets
├── docs/
│   ├── ai-usage-report.md  # Detailed AI usage documentation
│   └── technical-documentation.md  # Technical specifications
└── package.json            # Project dependencies and scripts
```

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JASSIM-ALHUMAID/SWE363-portfolio.git
   cd SWE363-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   # Run Tailwind CSS in watch mode for development
   npm run dev
   ```

4. **Open in browser**
   - Open `index.html` in your preferred browser
   - Or use a live server extension in your code editor

### Build for Production

To compile the final CSS for production:
```bash
npx tailwindcss -i ./css/styles.css -o ./css/output.css --minify
```

## 🤖 AI Usage Summary

This project was developed with significant AI assistance to enhance productivity and code quality:

### Tools Used
- **Google Stitch**: Initial website design and conceptualization
- **AI Assistant**: Implementation, refinement, and troubleshooting
- **GitHub Copilot**: Intelligent auto-completion and code suggestions

For detailed AI usage information, see [docs/ai-usage-report.md](docs/ai-usage-report.md).

## 📱 Live Deployment

The portfolio is deployed and available at:
- **GitHub Pages**: (https://jassim-alhumaid.github.io/202257400-JassimAlhumaid-assignment1)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for beautiful icons
- [GitHub Copilot](https://github.com/features/copilot) for AI-powered assistance
- AI tools for design guidance and code optimization

---