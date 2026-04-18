# Deployment Guide - FinanceHub

Complete step-by-step guide to deploy FinanceHub to various platforms.

---

## 🚀 Quick Deploy Options

### 1. **GitHub Pages (Free, Easiest)**
Perfect for: Testing, portfolio, static content

```bash
# From project root
git init
git add .
git commit -m "Initial FinanceHub commit"

# Create repo on github.com
# Then:
git remote add origin https://github.com/YOUR_USERNAME/goldenleaf.git
git branch -M main
git push -u origin main
```

Then in GitHub repo settings:
- Go to Settings → Pages
- Select "Deploy from a branch"
- Choose "main" branch and "/root" folder
- Wait 1-2 minutes
- Visit: `https://YOUR_USERNAME.github.io/goldenleaf`

**Pros:** Free, easy, included SSL  
**Cons:** Static only, no backend

---

### 2. **Netlify (Free, Recommended)**
Perfect for: Production site, custom domain, email integration

**Option A: Git Connection**
1. Push to GitHub (see above)
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect GitHub → select repo
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
6. Deploy

**Option B: Drag & Drop**
1. Create ZIP file of entire project
2. Go to [netlify.com](https://netlify.com)
3. Drag ZIP to deploy area
4. Done! URL provided

**Pro Tips:**
- Auto-deploys on every git push
- Custom domain: $12.99/year
- Unlimited bandwidth
- Email forwarding included

---

### 3. **Vercel (Free, Best for Next.js)**
Perfect for: Future Next.js migration, optimal performance

1. Go to [vercel.com](https://vercel.com)
2. "New Project" → Import Git Repo
3. Connect GitHub
4. Deploy settings:
   - Framework: Next.js (or None for static)
5. Deploy
6. Visit auto-generated URL

**Features:**
- Global CDN
- Automatic HTTPS
- Analytics included
- Serverless functions ready

---

### 4. **Traditional Hosting**
Perfect for: Full control, email, databases

#### Bluehost Example:
1. Sign up at [bluehost.com](https://bluehost.com)
2. Create cPanel account
3. Using File Manager:
   - Upload all files to `public_html/`
   - Ensure `index.html` is in root
4. Set default document: `index.html`
5. Enable HTTPS: AutoSSL
6. Email: Set up forwarding

#### Upload via FTP:
```bash
# Using WinSCP or FileZilla
Host: your-domain.com
Username: cpanel_username
Password: cpanel_password
Port: 22 (SFTP)

Upload all files to: public_html/
```

---

## 📋 Pre-Deployment Checklist

- [ ] Update company name throughout project
- [ ] Add company logo/images
- [ ] Update contact information
- [ ] Set up email form handling (Formspree, API, etc.)
- [ ] Test all links on all pages
- [ ] Test all forms
- [ ] Test on mobile (Chrome DevTools)
- [ ] Check for console errors (F12)
- [ ] Proofread all copy
- [ ] Test on different browsers
- [ ] Verify images load properly
- [ ] Check favicon displays

---

## 🔒 Security Setup

### SSL Certificate
- Netlify: ✅ Automatic
- Vercel: ✅ Automatic
- GitHub Pages: ✅ Automatic
- Traditional Hosting: Use AutoSSL or Let's Encrypt

### HTTPS Redirect
Add to `.htaccess` (traditional hosting):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

---

## 🌐 Custom Domain Setup

### For Netlify:
1. Register domain (GoDaddy, Namecheap, etc.)
2. In Netlify: Domain Settings → Add Domain
3. Update DNS:
   ```
   Nameservers:
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
4. Wait 24-48 hours for propagation

### For Vercel:
1. Register domain
2. In Vercel: Settings → Domains → Add Domain
3. Follow Vercel's DNS setup (simpler than Netlify)
4. Or point CNAME to Vercel

### For Traditional Hosting:
1. Update domain registrar's nameservers to hosting provider
2. Or update A record to hosting IP
3. Usually automatically works

---

## 📧 Email Integration

### Option 1: Formspree (Recommended)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>
```

### Option 2: EmailJS (Client-side)
```javascript
import emailjs from '@emailjs/browser';

emailjs.init("YOUR_PUBLIC_KEY");

emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
  to_email: "your@email.com",
  from_name: "Form Visitor",
  message: formData
});
```

### Option 3: Your API + Node.js
```javascript
// server.js
const nodemailer = require('nodemailer');

app.post('/api/send-email', async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: req.body.email,
    to: 'your@email.com',
    subject: 'New Lead',
    text: req.body.message
  });

  res.json({ success: true });
});
```

---

## 📊 Analytics Setup

### Google Analytics
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property
3. Get Measurement ID
4. Add to your site (before `</body>`):

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

## 🐛 Troubleshooting

### Form Not Submitting
- Check browser console for errors (F12)
- Verify email service is configured
- Test in different browser
- Check for JavaScript errors

### Pages Not Loading
- Verify all files uploaded
- Check file paths are correct
- Ensure index.html in root
- Check hosting file permissions

### Styles Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file paths
- Verify files uploaded completely
- Try different browser

### Domain Not Working
- Wait 24-48 hours for DNS
- Check DNS records with DNS checker
- Verify nameservers correct in registrar
- Check hosting points to correct IP

---

## 📈 Post-Launch

1. **Submit to Google Search Console**
   - [google.com/webmasters](https://www.google.com/webmasters)
   - Verify domain ownership
   - Submit sitemap
   - Check for errors

2. **Monitor Analytics**
   - Set goals for form submissions
   - Track user behavior
   - Monitor traffic sources
   - Optimize based on data

3. **Regular Updates**
   - Update content seasonally
   - Fix broken links
   - Monitor for security updates
   - Keep backups

---

## 💡 Pro Tips

1. **Always test before deploying**
   - Test locally first
   - Test in staging
   - Then deploy to production

2. **Keep backups**
   - Git commits are backups
   - Regular FTP backups for safety
   - Cloud storage backup

3. **Monitor performance**
   - Use PageSpeed Insights
   - Monitor uptime
   - Check error logs

4. **Keep security updated**
   - Update dependencies regularly
   - Monitor SSL certificate expiration
   - Keep passwords secure

---

## 🆘 Support Resources

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **GitHub Pages:** [pages.github.com](https://pages.github.com)
- **Google Search Console:** [google.com/webmasters](https://www.google.com/webmasters)

---

**Happy Deploying! 🚀**
