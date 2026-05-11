# Premium Portfolio Website

A futuristic, high-converting portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to showcase expertise in automation, DevOps, and cybersecurity with smooth animations and premium aesthetics.

## 🚀 Features

- **Animated Splash Screen** (1.2-1.8s intro with progress indicator)
- **Smooth Scroll Animations** with parallax effects
- **Interactive Experience Section** with expandable career cards
- **Achievement Gallery** with trophy-style cards and Top 3 highlights
- **Projects Showcase** with technology tags and features
- **Organized Skills Taxonomy** by category
- **Education Timeline** with certifications
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Accessibility First** with prefers-reduced-motion support
- **Dark Mode Default** with premium glassmorphism effects
- **Animated Backgrounds** with particle mesh system (Canvas-based)
- **Scroll Progress Indicator** (global bar + side dots)

## 📋 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main page
│   └── favicon.ico
├── components/
│   ├── AnimatedBackground.tsx
│   ├── SplashScreen.tsx
│   ├── HeroSection.tsx
│   ├── ExperienceSection.tsx
│   ├── AchievementsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── EducationSection.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── ScrollProgress.tsx
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── resume-data.json
└── .gitignore
```

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** 18+ or **bun** 1.0+
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Step 1: Install Dependencies

```bash
cd portfolio
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Step 2: Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The site will be available at **http://localhost:3000**

### Step 3: Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 🎨 Customization

### Update Resume Content

Edit `resume-data.json` to update:
- Personal information (name, email, phone, location)
- Skills, experience, projects
- Education and achievements

### Customize Colors

Modify `tailwind.config.js`:
- Update color definitions in the `colors` and `extend` sections
- Primary cyan (`#0ff`) and secondary indigo (`#6366f1`) are used throughout

### Adjust Animations

- **Splash Screen Duration**: Edit `ExperienceSection.tsx` line ~23
- **Particle Count**: Adjust in `AnimatedBackground.tsx`
- **Section Stagger Delays**: Modify `containerVariants` and `itemVariants` in each section

### Add/Remove Sections

1. Create a new component in `components/`
2. Import and add to `app/page.tsx`
3. Add section ID to `ScrollProgress.tsx` sections array

## 📱 Responsive Breakpoints

- **Mobile**: 360px - 767px → Single column, stacked cards
- **Tablet**: 768px - 1279px → 2-column grid
- **Desktop**: 1280px+ → Full-featured layout

### Mobile Features

- **Bottom Progress Indicator**: Shows scroll position as bar
- **Hamburger Navigation**: Toggle menu on small screens
- **Touch-Friendly Targets**: 48px minimum tap areas
- **Optimized Particle Count**: Reduced on mobile for performance

## ♿ Accessibility

- ✅ `prefers-reduced-motion` support (disables heavy animations)
- ✅ Semantic HTML structure
- ✅ ARIA labels and roles where applicable
- ✅ High contrast text (WCAG AA compliant)
- ✅ Keyboard navigation support
- ✅ Smooth scroll behavior without janky animations

## ⚡ Performance

- **Target**: 60 FPS smooth animations
- **Canvas Rendering**: RequestAnimationFrame for optimal performance
- **Mobile Optimization**: Reduced particle count, optimized transitions
- **Code Splitting**: Next.js App Router handles automatic code splitting
- **Image Optimization**: Inline SVGs and efficient CSS gradients

## 🎬 Animation Details

### Splash Screen (Intro)
- Rotating monogram with glowing outer ring
- Animated progress bar sync
- Smooth fade-in/out transitions
- ~1.6s total duration

### Scroll Animations
- Staggered section reveals (fade + slide)
- Parallax background elements
- Interactive card hover effects (tilt, glow)
- Smooth anchor link scrolling

### Background
- Canvas-rendered particle system
- Subtle gradient mesh overlay
- Occasional connecting lines between particles
- Soft color palette (cyan + indigo)

## 🔧 Technologies Used

| Tech | Purpose |
|------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations & transitions |
| **lucide-react** | Modern icon library |
| **Canvas API** | High-performance background |

## 📦 Build Output

```bash
npm run build
# Creates optimized production build in .next/
```

Deploy to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Self-hosted Node.js server**

## 🤝 Content Requirements Met

✅ **Every resume line included** - No data invented or omitted
✅ **JSON structure created** - Fully parsed resume data
✅ **First-view impact** - 1.6s splash screen with CTAs
✅ **Experience presentation** - Expandable cards with metrics
✅ **Achievements highlighted** - Top 3 prominent display + gallery
✅ **Smooth mobile experience** - Optimized animations & responsive layout
✅ **Complete codebase** - Ready to run with npm install && npm run dev
✅ **Premium aesthetics** - Glassmorphism, gradients, glow effects
✅ **DevOps/Cybersecurity focus** - Content and design tailored for these domains

## 🚀 Quick Start Summary

```bash
# 1. Navigate to project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open browser
# http://localhost:3000

# 5. (Optional) Build for production
npm run build
npm start
```

## 📄 License

This portfolio is built for personal use. Customize and deploy as needed.

---

**Built with passion for automation excellence and cybersecurity innovation.** 🔐✨
