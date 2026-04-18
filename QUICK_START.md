# Quick Start Guide - FinanceHub

Get up and running in 5 minutes!

---

## ✅ What You Have

A complete, professional financial wellness website with:

- ✅ **5 Pages** (Home, Services, About, Contact, Resources)
- ✅ **Modern Design** (Professional fintech aesthetic)
- ✅ **Dual Messaging** (For users in different financial situations)
- ✅ **Lead Capture** (Forms with validation)
- ✅ **Mobile Responsive** (Works on all devices)
- ✅ **Scalable Architecture** (Ready for backend integration)
- ✅ **Full Documentation** (README, Deployment, Development guides)

---

## 🚀 Start Viewing Your Site (1 minute)

### Option 1: Python Server (Easiest)
```bash
cd c:\Users\akshg\projects\goldenleaf
python -m http.server 8000
```
Then visit: **http://localhost:8000**

### Option 2: VS Code Live Server
1. Open `index.html` in VS Code
2. Right-click → "Open with Live Server"
3. Browser opens automatically

### Option 3: Direct Browser
- Open `c:\Users\akshg\projects\goldenleaf\index.html` in browser
- Limited functionality for forms

---

## 📝 Customize for Your Business (15 minutes)

### 1. **Update Company Name**
```bash
# Find and replace "FinanceHub" with your name in:
- index.html
- services.html
- about.html
- contact.html
- src/data/constants.js
- src/components/Header.html
- src/components/Footer.html
```

### 2. **Update Contact Information**
Edit `contact.html` and `src/components/Footer.html`:
- Phone number
- Email address
- Physical address
- Social media links

### 3. **Add Your Logo**
- Replace emoji (💰) with your logo
- Edit in Header.html and CSS if needed

### 4. **Update Services**
Edit `src/data/constants.js` - Change service titles, descriptions, and benefits

### 5. **Update Testimonials**
Edit `src/data/constants.js` - Add real client testimonials

---

## 🎨 Customize Colors (5 minutes)

Edit `/src/styles/variables.css`:

```css
:root {
  --color-primary: #0f172a;      /* Dark Navy */
  --color-secondary: #3b82f6;    /* Blue */
  --color-accent: #10b981;       /* Green */
  /* Change these hex codes to your colors */
}
```

Use [colorpicker.com](https://colorpicker.com) to find hex codes.

---

## 📧 Set Up Email Forms (10 minutes)

### Free Option: Formspree

1. Go to **[formspree.io](https://formspree.io)**
2. Sign up with your email
3. Create a new form
4. Get your form ID
5. Update forms in HTML files:

Find this line in the forms:
```html
<!-- In index.html, around line 300 -->
<form id="leadForm" class="contact-form card">
```

Change to:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Do this for all forms (contact.html, services.html, etc.)

---

## 🌐 Deploy Your Site

### Deploy to GitHub (Free, Easy)

```bash
# Initialize git
git init
git add .
git commit -m "Initial FinanceHub commit"

# Create repo on github.com
# Then:
git remote add origin https://github.com/YOUR_USERNAME/goldenleaf.git
git branch -M main
git push -u origin main

# Go to repo Settings → Pages → Deploy from branch → main
# Your site will be at: https://YOUR_USERNAME.github.io/goldenleaf
```

### Deploy to Netlify (Easier, Better)

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repo
4. Click Deploy
5. Done! Your site is live

### Deploy with Custom Domain

- Register domain (GoDaddy, Namecheap, etc.)
- Connect to Netlify/Vercel following their guides
- Get SSL certificate (automatic)

See **DEPLOYMENT.md** for detailed guides

---

## 📊 Track Visitors

### Add Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property
3. Copy your Measurement ID
4. Add this before `</body>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## ✔️ Pre-Launch Checklist

- [ ] Update all company info
- [ ] Test all links on all pages
- [ ] Test forms (submit test data)
- [ ] Test on mobile (F12 in browser)
- [ ] Check spelling and grammar
- [ ] Set up email integration
- [ ] Deploy to hosting
- [ ] Set up domain
- [ ] Add analytics
- [ ] Create privacy policy
- [ ] Create terms of service

---

## 📁 File Reference

| File | Purpose |
|------|---------|
| `index.html` | Homepage (main conversion page) |
| `services.html` | Detailed services page |
| `about.html` | Company info and team |
| `contact.html` | Contact form and info |
| `resources.html` | Blog/resources page (ready for content) |
| `src/data/constants.js` | All text content and data |
| `src/styles/variables.css` | Colors, spacing, fonts |
| `src/components/Header.html` | Navigation header |
| `src/components/Footer.html` | Footer with links |
| `README.md` | Full documentation |
| `DEPLOYMENT.md` | How to deploy |
| `DEVELOPMENT.md` | For developers |

---

## 🎯 Next Steps

### Immediate (This Week)
1. ✅ Customize company info
2. ✅ Update colors
3. ✅ Set up email forms
4. ✅ Test locally
5. ✅ Deploy to GitHub/Netlify

### Short Term (This Month)
1. Set up custom domain
2. Add Google Analytics
3. Write/add real content
4. Add your logo and images
5. Create privacy policy

### Medium Term (This Quarter)
1. Add blog/resources content
2. Integrate CRM (HubSpot, Pipedrive)
3. Set up email automation
4. Optimize for SEO
5. Monitor analytics and optimize

### Long Term (This Year)
1. Add user accounts
2. Build dashboard
3. Integrate financial APIs
4. Add payment processing
5. Full platform launch

---

## 🆘 Quick Help

### Site won't load
- Check file paths are correct
- Verify `index.html` is in root folder
- Try refreshing browser (Ctrl+F5)
- Clear cache (Ctrl+Shift+Delete)

### Forms not working
- Check browser console for errors (F12)
- Verify email service is set up
- Test in different browser
- Check file uploads complete

### Mobile looks broken
- Open DevTools (F12)
- Click "Toggle Device Toolbar"
- Refresh page
- Report which device/browser

### Need more help
- See **DEPLOYMENT.md** for deployment help
- See **DEVELOPMENT.md** for code help
- See **README.md** for full documentation

---

## 💡 Pro Tips

1. **Always test before deploying**
   - Test locally first
   - Test in staging
   - Then go live

2. **Keep backups**
   - Git commits are backups
   - Use GitHub as backup
   - Regular manual backups too

3. **Monitor performance**
   - Use Google PageSpeed Insights
   - Check analytics monthly
   - Optimize based on user behavior

4. **Update regularly**
   - Keep content fresh
   - Update testimonials
   - Add new services/features
   - Monitor security

---

## 📞 You Now Have

✅ Professional website - Ready to deploy  
✅ Lead capture system - Ready to integrate  
✅ Mobile responsive - Works everywhere  
✅ Scalable architecture - Ready to grow  
✅ Complete documentation - For future updates  

---

**Ready to launch?** 

Start with Option 1 above to see your site, then follow the customization steps.

**Questions?** See README.md, DEPLOYMENT.md, or DEVELOPMENT.md

**Good luck! 🚀**
