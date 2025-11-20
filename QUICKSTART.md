# 🚀 Quick Start Guide

This guide will help you get your website up and running in **5 minutes**!

## ✅ Step 1: Add Your Profile Photo

1. Find a professional photo of yourself (square format recommended)
2. Name it `profile.jpg`
3. Place it in the `assets/` folder
4. Size: 500x500 pixels works best

**Don't have a photo ready?** 
The website will automatically show a nice avatar with your initials!

## ✅ Step 2: Verify Your CV

1. Check that `Ajay_Divakar_Sudhir_CV.pdf` exists in the root folder
2. If you need to update it, replace the PDF with the same filename
3. The CV page will automatically display it

## ✅ Step 3: Test Locally

### Option 1: Direct Open (Simplest)
- Double-click `index.html`
- It will open in your default browser

### Option 2: Local Server (Recommended)
```bash
# If you have Python installed:
python -m http.server 8000

# Then visit: http://localhost:8000
```

## ✅ Step 4: Check Everything Works

Test these features:
- [ ] Theme toggle (light/dark mode)
- [ ] Navigation menu (all links work)
- [ ] Smooth scrolling between sections
- [ ] Mobile menu (resize browser or use mobile)
- [ ] CV page loads your PDF
- [ ] Social media links go to correct profiles
- [ ] Blog section displays posts
- [ ] GitHub stats appear (requires internet)

## ✅ Step 5: Customize Content (Optional)

### Update Personal Info
Edit `index.html` - find and update:
- Line 80-85: Your name and tagline
- Line 90-100: Social media links
- Line 140-170: About section text
- Line 175-220: Research interests

### Add Projects
Projects auto-load from GitHub, but you can customize in `script.js`:
- Line 280-320: ProjectsManager class
- Add manual projects if needed

### Update Skills
Edit `index.html` - Skills section:
- Line 300-500: Skill badges
- Add/remove technologies as needed

### Create Blog Posts
1. Edit `blog/posts.json` to add new posts
2. Create corresponding HTML files in `blog/` folder
3. Use `blog/neuro-symbolic-ai-introduction.html` as template

## ✅ Step 6: Deploy to GitHub Pages

```bash
# Check which branch you're on
git branch

# Should show: * dev

# Stage all changes
git add .

# Commit
git commit -m "Initial website setup"

# Push to dev
git push origin dev

# Merge to main for deployment
git checkout main
git merge dev
git push origin main
```

**Wait 2-3 minutes**, then visit: `https://ajaydsudhir.github.io/`

## 🎨 Quick Customizations

### Change Colors
Edit `styles.css` - Lines 20-40:
```css
--color-accent-red: #D64545;    /* Change this */
--color-accent-gold: #C48F2E;   /* And this */
```

### Change Fonts
Edit `styles.css` - Lines 45-50:
```css
--font-heading: 'Your Font', serif;
--font-body: 'Your Font', sans-serif;
```

### Adjust Particle Count
Edit `script.js` - Line 180:
```javascript
this.particleCount = 50;  // Increase/decrease
```

## 🆘 Common Issues

### Profile Image Not Showing?
- Check filename: must be exactly `profile.jpg`
- Check location: must be in `assets/` folder
- Try refreshing with Ctrl+F5

### CV Not Loading?
- Verify PDF filename matches exactly
- Try opening in different browser
- Use "Open in New Tab" button

### GitHub Stats Not Appearing?
- Requires internet connection
- Check GitHub username in `script.js`
- Stats may take 30 seconds to load

### Theme Toggle Not Working?
- Check browser console (F12) for errors
- Clear browser cache
- Try incognito/private mode

### Mobile Menu Not Opening?
- Make sure JavaScript is enabled
- Try different browser
- Check for console errors

## 📱 Mobile Testing

Test on different screen sizes:
1. Desktop: 1920px+
2. Laptop: 1366px
3. Tablet: 768px
4. Mobile: 375px

Use Chrome DevTools:
1. Press F12
2. Click device toolbar icon (or Ctrl+Shift+M)
3. Select different devices

## ✨ Next Steps

Once your site is live:

1. **Share it!**
   - Add to LinkedIn profile
   - Update resume/CV
   - Share on social media

2. **Monitor Performance**
   - Use Google PageSpeed Insights
   - Check mobile usability
   - Test on different browsers

3. **Keep Updated**
   - Add new projects regularly
   - Write blog posts
   - Update skills section
   - Refresh CV

4. **Get Feedback**
   - Ask peers to review
   - Test with real users
   - Iterate based on feedback

## 🎓 Pro Tips

1. **Images**: Use WebP format for better performance
2. **Blog**: Write consistently (1 post per month)
3. **Projects**: Keep portfolio updated with latest work
4. **SEO**: Add relevant keywords in meta tags
5. **Analytics**: Consider adding Google Analytics
6. **Backup**: Keep local backup of all content

## 📞 Need Help?

- Check `WEBSITE_README.md` for detailed documentation
- Look at example files for reference
- Review browser console for error messages
- Test in different browsers if issues persist

---

**Congratulations! 🎉** 

Your professional website is ready to impress!

*Remember: The best website is one that's always improving. Keep iterating!*
