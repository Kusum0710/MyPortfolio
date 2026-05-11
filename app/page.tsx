'use client';

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/SplashScreen';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <main className="bg-dark text-white overflow-hidden">
      <Navigation />
      <ScrollProgress />

      <section id="hero">
        <HeroSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="achievements">
        <AchievementsSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="education">
        <EducationSection />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
