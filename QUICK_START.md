# 🚀 QUICK START - Get Your Portfolio Running in 2 Minutes

## Step 1: Install Dependencies
```bash
cd d:/Portfolio
npm install
```

## Step 2: Start Development Server
```bash
npm run dev
```

## Step 3: View in Browser
Open: **http://localhost:3000**

---

## What You'll See
1. ✨ **Splash Screen** (1.6 seconds) - Animated "AE" monogram
2. 🎯 **Hero Section** - "Automation Meets Innovation" with your professional summary
3. 📊 **Experience** - Expandable timeline of your Automation Executive role at Crizac Ltd
4. 🏆 **Achievements** - 4 major wins + certifications with rankings
5. 💻 **Projects** - Weather App with full tech details
6. 🛠️ **Skills** - 5 categories of technical expertise
7. 📚 **Education** - Your BCA, Fine Arts diploma, and cybersecurity training

---

## ⚡ First Customization (5 minutes)

### Update Your Name
1. Open: `resume-data.json`
2. Change line 3: `"name": "Your Name"`
3. Save and refresh browser

### Update Your Initials  
1. Open: `components/SplashScreen.tsx`
2. Change line 20: `const initials = 'YN';` (change to your initials)
3. Save and refresh

### Add Missing Info
- Edit `resume-data.json`:
  - Add institution name for BCA degree
  - Add graduation year
  - Add location, email, phone
  - Add project links (GitHub/Live)

---

## 📦 Available Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run ESLint
```

---

## 🎨 Customization Examples

### Change Theme Colors
Edit `tailwind.config.js` (lines 10-15):
```javascript
colors: {
  'primary': '#00ffff',    // Change cyan to any color
  'secondary': '#6366f1',  // Change indigo
  'dark': '#0a0a0a',
  'card': '#1a1a2e',
  'border': '#2d2d44',
}
```

### Adjust Animation Speed
Edit component files, find `transition={{ duration: 0.6 }}` and change `0.6` to desired seconds.

### Hide/Show Sections
Edit `app/page.tsx` and comment out sections you want to hide.

---

## ✅ Content Already Included

✅ Professional summary  
✅ All 5 skill categories  
✅ Automation Executive experience (4 bullets)  
✅ 4 major achievements  
✅ Weather App project  
✅ BCA & Fine Arts degrees  
✅ A Rank Cybersecurity certification  
✅ Responsive design  
✅ Premium animations  

---

## 🌐 Deploy in 5 Minutes (Optional)

### Deploy to Vercel (Free)
```bash
npm install -g vercel
vercel
# Follow prompts and your site goes live!
```

### Deploy to Netlify (Free)
```bash
npm run build
# Drag & drop .next folder to Netlify dashboard
```

---

## 💡 Pro Tips

- Mobile nav automatically appears on small screens
- Scroll indicator shows your position
- All animations respect accessibility settings
- Hero section has smooth scroll navigation
- Achievements section highlights your top 3 wins

---

## ❓ Having Issues?

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Strange animations?**  
Check System Settings → Display → Show animations. The portfolio respects your accessibility preference.

**Build fails?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 📱 Test Responsiveness

The portfolio looks great on:
- ✅ iPhone/Android (360px+)
- ✅ Tablets (768px+)
- ✅ Laptops/Desktops (1280px+)

Resize your browser window to see responsive behavior live!

---

## 🎯 Next Steps

1. Update your personal info in `resume-data.json`
2. Add project links for Weather App
3. Customize colors if desired (optional)
4. Test on mobile devices
5. Deploy to Vercel/Netlify
6. Share with recruiters! 🚀

---

**Questions?** Everything is self-contained in this folder. All code is TypeScript + Tailwind CSS + Framer Motion.

Enjoy your premium portfolio! ✨
