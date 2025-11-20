# Asset Folder Instructions

## 📁 Folder Structure

```
assets/
├── favicon.svg (✓ Created)
├── profile.jpg (⚠️ Add your photo)
├── projects/
│   └── project-placeholder.jpg (⚠️ Add project images)
└── research/
    └── research-placeholder.jpg (⚠️ Add research images)
```

## 🖼️ Image Requirements

### Profile Photo (`profile.jpg`)
- **Location:** `assets/profile.jpg`
- **Recommended Size:** 500x500 pixels (square)
- **Format:** JPG or PNG
- **Purpose:** Your professional headshot displayed in the hero section
- **Tips:** 
  - Use a high-quality, professional photo
  - Good lighting and neutral background
  - Face should be clearly visible

### Project Images
- **Location:** `assets/projects/`
- **Recommended Size:** 800x500 pixels (16:10 ratio)
- **Format:** JPG or PNG
- **Naming:** Use descriptive names like `ml-research-project.jpg`
- **Purpose:** Showcase visuals for your projects
- **Tips:**
  - Screenshots of running applications
  - Architecture diagrams
  - Result visualizations
  - Demo GIFs (convert to static image or use video)

### Research Images
- **Location:** `assets/research/`
- **Recommended Size:** 800x500 pixels (16:10 ratio)
- **Format:** JPG or PNG
- **Naming:** Use descriptive names like `neuro-symbolic-research.jpg`
- **Purpose:** Visual representations of your research
- **Tips:**
  - Paper figures/diagrams
  - Research methodology illustrations
  - Result graphs/charts
  - Abstract concept visualizations

## 🎨 Creating Placeholder Images

If you don't have images ready, you can:

1. **Use free stock photos:**
   - [Unsplash](https://unsplash.com/) - Free high-quality images
   - [Pexels](https://www.pexels.com/) - Free stock photos
   - Search for: "technology", "AI", "data science", "research"

2. **Generate placeholders:**
   - [Placeholder.com](https://placeholder.com/)
   - Use: `https://via.placeholder.com/800x500/3B82F6/FFFFFF?text=Project+Name`

3. **Create custom graphics:**
   - [Canva](https://www.canva.com/) - Free design tool
   - Use their templates for presentations/posters
   - Export as high-quality images

## 🚀 Quick Start

1. Add your profile photo:
   ```
   Copy your photo to: assets/profile.jpg
   ```

2. Add project images:
   ```
   Copy project images to: assets/projects/
   Name them descriptively: ml-model-project.jpg
   ```

3. Add research images:
   ```
   Copy research images to: assets/research/
   Name them descriptively: continual-learning-paper.jpg
   ```

4. Update the HTML if you use custom names:
   - Edit `index.html`
   - Update image src attributes in project/research cards

## 📝 Notes

- All images are automatically optimized by the browser
- Lazy loading is implemented for better performance
- Images have fallback handling if they fail to load
- The favicon (ADS logo) is already created and working
- Profile image has a fallback to a generated avatar with your initials

## ✨ Optional Enhancements

- Use WebP format for better compression
- Add alt text for accessibility (already implemented)
- Optimize images before upload using tools like TinyPNG
- Consider using a CDN for faster loading
