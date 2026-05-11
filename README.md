# My Portfolio Website

This portfolio website is built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

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
