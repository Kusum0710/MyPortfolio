'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'Hero' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
      setScrollProgress(progress);

      // Find active section
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Global progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Side scroll indicator (desktop only) */}
      <div className="hidden lg:fixed lg:right-8 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:z-40 lg:flex lg:flex-col lg:gap-4">
        {sections.map((section) => (
          <motion.a
            key={section.id}
            href={`#${section.id}`}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-cyan-400 border-cyan-400 scale-125'
                : 'bg-transparent border-gray-600 hover:border-cyan-400'
            }`}
            title={section.label}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      {/* Mobile bottom progress (smaller screens) */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 flex gap-1 z-40">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              activeSection === section.id ? 'bg-cyan-400 h-2' : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    </>
  );
}
