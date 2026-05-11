'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'BCA (Bachelor of Computer Applications)',
    institution: '[Institution]',
    year: '',
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    id: 2,
    degree: 'Diploma in Fine Arts',
    institution: 'Bangiya Sangeet Kala Kendra',
    detail: 'First Division Rank',
    year: '',
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: 3,
    degree: 'Cybersecurity Beginners Training',
    institution: 'ITOrizon',
    detail: 'A Rank Certification',
    year: '',
    icon: <Award className="w-6 h-6" />,
  },
];

export default function EducationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

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
              Education & Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Foundation built on continuous learning</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 to-indigo-500/50 transform -translate-x-1/2" />

          <div className="space-y-8">
            {education.map((item, idx) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative md:flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-8`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 w-6 h-6 bg-dark border-2 border-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10" />

                {/* Content */}
                <div className={`flex-1 md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ x: idx % 2 === 0 ? -8 : 8 }}
                    className="glass border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      {idx % 2 !== 0 && <div className="text-cyan-400 flex-shrink-0 mt-1">{item.icon}</div>}

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                        <p className="text-cyan-400 font-semibold mb-1">{item.institution}</p>
                        {item.detail && <p className="text-sm text-gray-400 mb-1">{item.detail}</p>}
                        {item.year && <p className="text-xs text-gray-500">{item.year}</p>}
                      </div>

                      {idx % 2 === 0 && <div className="text-cyan-400 flex-shrink-0 mt-1">{item.icon}</div>}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass border border-cyan-500/20 rounded-lg p-8"
        >
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Learning Focus Areas</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="font-semibold text-white mb-2">Computer Science</p>
              <p className="text-sm text-gray-400">BCA foundation with focus on application development</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Fine Arts</p>
              <p className="text-sm text-gray-400">Creative design thinking and user-centered approach</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Cybersecurity</p>
              <p className="text-sm text-gray-400">Foundational security principles and best practices</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
