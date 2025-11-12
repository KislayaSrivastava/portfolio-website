# Kislaya Srivastava - Portfolio Website

Modern, professional portfolio website for Cloud Solutions Architect. Built with pure HTML, CSS, and JavaScript - no frameworks required.

## 🎯 Features

- ✅ **Fixed Critical Issues**: Shows "Cloud Solutions Architect" and "15+ years" (not "Senior Product Developer" and "14.6 years")
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🎨 **Modern Design**: Clean, professional aesthetic with smooth animations
- ⚡ **Fast Loading**: Optimized for performance (< 3 second load time)
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML
- ♿ **Accessible**: WCAG compliant with proper ARIA labels
- 🚀 **Easy Deployment**: Deploy to GitHub Pages in minutes

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Quick Deployment Guide

### Option 1: GitHub Pages (Recommended - FREE)

**Step 1: Create GitHub Repository**
```bash
# Navigate to your project folder
cd portfolio-website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio website"

# Create new repo on GitHub (github.com/new)
# Then link and push:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

**Step 2: Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

**Step 3: Point Your Domain (kislaya.org)**
1. In your domain registrar (where you bought kislaya.org), find DNS settings
2. Add these records:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

3. In GitHub repo Settings → Pages → Custom domain, enter: `kislaya.org`
4. Enable "Enforce HTTPS"
5. Wait 24-48 hours for DNS propagation

**Done!** Your site will be live at https://kislaya.org

---

### Option 2: Vercel (Alternative - Also FREE)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Deploy**
```bash
cd portfolio-website
vercel
```

Follow the prompts. Your site will be live in seconds!

**Step 3: Add Custom Domain**
```bash
vercel domains add kislaya.org
```

Follow the DNS instructions provided.

---

### Option 3: Netlify (Alternative - Also FREE)

**Step 1: Create Account**
- Go to [netlify.com](https://netlify.com)
- Sign up (free)

**Step 2: Deploy**
1. Click "Add new site" → "Deploy manually"
2. Drag and drop your `portfolio-website` folder
3. Site is live instantly!

**Step 3: Add Custom Domain**
1. Site settings → Domain management → Add custom domain
2. Enter `kislaya.org`
3. Follow DNS configuration instructions

---

## ✏️ Customization Guide

### 1. Add Your Professional Photo

Replace the placeholder in `index.html`:

```html
<!-- Find this section around line 90 -->
<div class="profile-image-placeholder">
    <i class="fas fa-user-tie"></i>
    <p class="placeholder-text">Add your professional photo here</p>
</div>

<!-- Replace with: -->
<div class="profile-image-placeholder">
    <img src="your-photo.jpg" alt="Kislaya Srivastava" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-lg);">
</div>
```

Then add `your-photo.jpg` to the same folder.

### 2. Add Your Resume PDF

1. Save your resume as `Kislaya_Srivastava_Resume.pdf`
2. Place it in the same folder as `index.html`
3. The download button will automatically work

### 3. Update Contact Information

All contact info is in the Contact section. Update email, LinkedIn, GitHub URLs as needed.

### 4. Add Blog Articles (When Ready)

Replace the "Blog Coming Soon" section with:

```html
<div class="blog-grid">
    <article class="blog-card">
        <div class="blog-image">
            <img src="article-image.jpg" alt="Article title">
        </div>
        <div class="blog-content">
            <h3>Article Title</h3>
            <p>Article excerpt...</p>
            <a href="article-link.html" class="btn btn-outline btn-sm">Read More</a>
        </div>
    </article>
</div>
```

### 5. Color Scheme Customization

Edit CSS variables in `style.css`:

```css
:root {
    --primary-color: #1a73e8;  /* Change to your brand color */
    --secondary-color: #34a853;
    /* ... */
}
```

---

## 🔧 Local Development

### Prerequisites
- Any modern web browser
- A text editor (VS Code recommended)

### Running Locally

**Option 1: Simple HTTP Server (Python)**
```bash
cd portfolio-website
python -m http.server 8000
```
Visit: http://localhost:8000

**Option 2: VS Code Live Server**
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

**Option 3: Just Open the File**
Simply double-click `index.html` - it works without a server!

---

## 📧 Contact Form Setup

The contact form currently opens the user's default email client. For a better experience, integrate with:

### Option A: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, get your endpoint
3. Update `script.js`:

```javascript
// Replace the form handling code with:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
        'Content-Type': 'application/json'
    }
});
```

### Option B: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Follow their integration guide
3. Update form handling in `script.js`

---

## 📊 Analytics Setup (Optional)

### Google Analytics
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your tracking ID
3. Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

---

## ✅ Pre-Launch Checklist

Before deploying, verify:

- [ ] Added your professional photo
- [ ] Updated all contact information
- [ ] Added resume PDF
- [ ] Tested on mobile devices
- [ ] Verified all links work
- [ ] Checked for typos
- [ ] Tested contact form
- [ ] Optimized images (compress for web)
- [ ] Set up analytics (optional)
- [ ] Tested in multiple browsers (Chrome, Firefox, Safari)

---

## 🎨 Design System

### Colors
- **Primary Blue**: #1a73e8 (main brand color)
- **Secondary Green**: #34a853 (success, highlights)
- **Dark**: #202124 (text)
- **Gray**: #5f6368 (secondary text)
- **Light**: #f8f9fa (backgrounds)

### Typography
- **Font**: Inter (headings and body)
- **Mono**: Fira Code (code snippets, tech tags)

### Spacing
- Small: 0.5rem
- Medium: 1.5rem
- Large: 2rem
- XLarge: 3rem

---

## 🐛 Troubleshooting

### Site not loading after deployment
- Wait 5-10 minutes for deployment to complete
- Clear browser cache (Ctrl+Shift+R)
- Check GitHub Pages settings

### Custom domain not working
- Verify DNS records are correct
- DNS changes take 24-48 hours
- Check domain registrar for issues

### Images not displaying
- Verify image paths are relative (e.g., `./image.jpg`, not `/image.jpg`)
- Check file names match exactly (case-sensitive)
- Ensure images are in the correct folder

### Mobile menu not working
- Check browser console for JavaScript errors
- Verify `script.js` is loaded correctly
- Test in different browsers

---

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📈 Performance Tips

1. **Optimize Images**:
   ```bash
   # Use online tools like tinypng.com or squoosh.app
   # Target: < 200KB per image
   ```

2. **Enable Caching**: Add `.htaccess` (if using Apache):
   ```apache
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

3. **Use CDN**: Images are already using CDN for fonts and icons

---

## 🤝 Support

If you encounter issues:
1. Check this README first
2. Review browser console for errors
3. Verify all files are uploaded correctly
4. Check GitHub Pages deployment status

---

## 📄 License

This portfolio template is provided as-is for personal use.

---

## 🚀 Next Steps

After deployment:

1. **Week 1**:
   - [ ] Verify site is live at kislaya.org
   - [ ] Test on multiple devices
   - [ ] Share on LinkedIn
   - [ ] Update LinkedIn profile with website link

2. **Week 2**:
   - [ ] Write first blog article
   - [ ] Get 3-5 testimonials
   - [ ] Set up Google Analytics
   - [ ] Create social media share images

3. **Week 3**:
   - [ ] Write second blog article
   - [ ] Optimize for SEO
   - [ ] Submit to Google Search Console
   - [ ] Create case studies from Epicor work

4. **Week 4**:
   - [ ] Launch job applications with new portfolio
   - [ ] Continue content creation
   - [ ] Monitor analytics
   - [ ] Iterate based on feedback

---

## 🎯 Success Metrics

Track these after launch:

- **Traffic**: Target 100+ visits/month
- **Engagement**: 2+ minutes average session
- **Conversion**: 5% contact form submission rate
- **LinkedIn Profile Views**: 50+ views/week after sharing

---

Built with ❤️ for career success. Good luck with your job search!
