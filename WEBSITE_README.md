# 🌟 Professional Personal Website - Ajay D. Sudhir

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-success)](https://ajaydsudhir.github.io/)

A modern, responsive, and professionally designed personal website showcasing AI research, projects, skills, and blog posts. Built with pure HTML, CSS, and JavaScript following industry best practices.

## ✨ Features

### 🎨 Design
- **Professional Neo-Tech Minimalism Theme**
  - Dark Mode: Black → Blue → Gold gradient
  - Light Mode: White → Red → Gold gradient
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Particle background effects
- Glassmorphism UI elements
- Neural network-inspired connectors

### 🌓 Theme System
- Light/Dark mode toggle with persistent storage
- System preference detection
- Smooth theme transitions
- Color-coded GitHub stats

### 📱 Responsive Navigation
- Fixed navigation bar with scroll effects
- Mobile hamburger menu
- Active section highlighting
- Smooth scroll to sections

### 🎯 Sections
1. **Hero/Home** - Professional introduction with tagline and social links
2. **About** - Biography and research interests
3. **Skills** - Categorized technical expertise with visual badges
4. **Projects** - GitHub integration with live project cards
5. **Research** - Publications and research work
6. **Blog** - Markdown-based blog system
7. **CV** - Dedicated page with PDF viewer

### 🚀 Performance
- Lazy loading images
- Optimized animations
- Efficient particle system
- Service worker ready
- Accessibility compliant

### 📝 Blog System
- Custom markdown parser
- Easy content management
- Tag-based organization
- Reading time estimates
- Responsive blog post pages

## 📂 Project Structure

```
ajaydsudhir.github.io/
├── index.html              # Main landing page
├── cv.html                 # CV page with PDF viewer
├── styles.css              # Main stylesheet with theme system
├── blog-post.css           # Blog post specific styles
├── script.js               # Main JavaScript functionality
├── blog.js                 # Blog management system
├── Ajay_Divakar_Sudhir_CV.pdf  # Your CV PDF
├── assets/
│   ├── favicon.svg         # Website icon
│   ├── profile.jpg         # Your profile photo (add yours)
│   ├── README.md           # Asset guidelines
│   ├── projects/           # Project images
│   │   └── project-placeholder.jpg
│   └── research/           # Research images
│       └── research-placeholder.jpg
├── blog/
│   ├── posts.json          # Blog posts index
│   └── *.html              # Individual blog posts
├── LICENSE                 # MIT License
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/ajaydsudhir/ajaydsudhir.github.io.git
cd ajaydsudhir.github.io
```

### 2. Add Your Content

#### Profile Photo
```bash
# Add your professional photo (500x500px recommended)
cp /path/to/your/photo.jpg assets/profile.jpg
```

#### Update CV
```bash
# Replace with your CV (ensure it's named exactly this)
cp /path/to/your/cv.pdf Ajay_Divakar_Sudhir_CV.pdf
```

#### Project Images
```bash
# Add project screenshots/images
cp /path/to/project-images/* assets/projects/
```

#### Research Images
```bash
# Add research visuals
cp /path/to/research-images/* assets/research/
```

### 3. Customize Content

Edit `index.html` to update:
- Personal information
- Research interests
- Skills and expertise
- Project details
- Research publications

### 4. Create Blog Posts

#### Option 1: JSON Method (Recommended)
Edit `blog/posts.json`:
```json
{
  "posts": [
    {
      "title": "Your Blog Post Title",
      "excerpt": "Brief description...",
      "date": "2024-11-20",
      "readingTime": "5 min",
      "tags": ["AI", "Research"],
      "slug": "your-post-slug"
    }
  ]
}
```

#### Option 2: Markdown Files
Create `blog/your-post-slug.html` using the template in `blog.js`

### 5. Test Locally

Open `index.html` in your browser or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Visit: `http://localhost:8000`

### 6. Deploy to GitHub Pages

```bash
# Make sure you're on the dev branch
git checkout dev

# Add all changes
git add .

# Commit changes
git commit -m "Update website content"

# Push to dev branch
git push origin dev

# Merge to main (for deployment)
git checkout main
git merge dev
git push origin main
```

Your site will be live at: `https://ajaydsudhir.github.io/`

## 🎨 Customization Guide

### Change Color Scheme

Edit `styles.css` - CSS Variables section:

```css
:root {
    /* Light Mode */
    --color-accent-red: #D64545;      /* Primary accent */
    --color-accent-gold: #C48F2E;     /* Secondary accent */
    
    /* Dark Mode */
    --color-accent-blue: #3B82F6;     /* Primary accent */
    --color-accent-gold: #EFBF66;     /* Secondary accent */
}
```

### Modify Typography

```css
:root {
    --font-heading: 'Crimson Pro', serif;
    --font-body: 'Inter', sans-serif;
    --font-ui: 'DM Sans', sans-serif;
}
```

### Adjust Animations

```css
:root {
    --transition-fast: 0.2s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

### Update Particle Effects

Edit `script.js` - ParticleBackground class:

```javascript
this.particleCount = 50;              // Number of particles
this.connectionDistance = 150;        // Connection line distance
this.mouse.radius = 150;              // Mouse interaction radius
```

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Opera (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast support
- Focus visible states
- Reduced motion support

## 📊 GitHub Stats Integration

The website automatically fetches your GitHub statistics:
- Total contributions
- Current streak
- Top languages
- Repository stats

Powered by:
- [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats)
- [GitHub Readme Streak Stats](https://github.com/DenverCoder1/github-readme-streak-stats)

## 🔧 Advanced Features

### Service Worker (Optional)
Create `sw.js` in root for offline support:

```javascript
const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/blog.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
```

### Analytics Integration

Add to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Custom Domain

1. Create `CNAME` file in root:
```
yourdomain.com
```

2. Update DNS settings at your domain provider:
```
Type: CNAME
Name: @
Value: ajaydsudhir.github.io
```

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths (case-sensitive)
- Verify image files exist in `assets/` folder
- Check browser console for errors
- Ensure proper file permissions

### Theme Toggle Not Working
- Clear browser localStorage
- Check browser console for JavaScript errors
- Verify `script.js` is loaded

### GitHub Stats Not Showing
- Check internet connection
- Verify GitHub username in `script.js`
- Check API rate limits
- Use fallback static images if needed

### PDF Not Displaying
- Ensure PDF file is in root directory
- Check filename matches exactly
- Try different browser
- Use download button as alternative

## 🤝 Contributing

This is a personal website, but suggestions are welcome!

1. Fork the repository
2. Create feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern AI/tech companies
- Color scheme based on professional academic aesthetics
- Icons from inline SVG (no external dependencies)
- Fonts from Google Fonts
- GitHub Stats APIs

## 📞 Contact

**Ajay D. Sudhir**
- Website: [ajaydsudhir.github.io](https://ajaydsudhir.github.io/)
- GitHub: [@ajaydsudhir](https://github.com/ajaydsudhir)
- LinkedIn: [ajaydsudhir](https://www.linkedin.com/in/ajaydsudhir)
- Email: ajaydsudhir@gmail.com

---

**Built with ❤️ using HTML, CSS, and JavaScript**

*Teaching machines to learn, so humans can do more.*
