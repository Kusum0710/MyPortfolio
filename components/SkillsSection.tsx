'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Languages',
    skills: ['HTML/CSS', 'JavaScript', 'C', 'Python'],
  },
  {
    name: 'Frameworks',
    skills: ['ReactJS', 'Tailwind'],
  },
  {
    name: 'Technical Tools',
    skills: ['Git', 'VSCode', 'Canva', 'Figma'],
  },
  {
    name: 'Soft Skills',
    skills: ['Communication', 'Collaboration', 'Leadership', 'Problem Solving'],
  },
  {
    name: 'Other Tools',
    skills: ['MS Word', 'MS Excel', 'MS PowerPoint'],
  },
];

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Tools and skills for automation and modern development</p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={categoryVariants}
              className="group"
            >
              <div className="glass border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 h-full">
                {/* Category name */}
                <h3 className="text-lg font-bold text-cyan-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  {category.name}
                </h3>

                {/* Skills list */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      variants={skillVariants}
                      whileHover={{
                        x: 8,
                        boxShadow: '0 0 20px rgba(15, 255, 255, 0.2)',
                      }}
                      className="flex items-center gap-3 p-3 bg-cyan-500/5 rounded-lg border border-cyan-500/10 hover:border-cyan-400/30 transition-all cursor-pointer"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass border border-cyan-500/20 rounded-lg p-8 max-w-2xl mx-auto text-center"
        >
          <p className="text-gray-400">
            <span className="text-cyan-400 font-semibold">Eager to learn and adapt</span> to new technologies and frameworks. Core expertise in automation, DevOps principles, and cybersecurity fundamentals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
