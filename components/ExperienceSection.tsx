'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Automation Executive',
    company: 'Crizac Ltd',
    period: 'Sep 2025 - Present',
    description: 'Overseeing automation operations and process optimization with a focus on reliability and efficiency.',
    bullets: [
      'Monitored and resolved failed automation cases by analyzing logs and re-triggering workflows.',
      'Tracked pending IDs caused by machine downtime and coordinated timely reprocessing.',
      'Ensured data integrity and successful submission rates through continuous monitoring of automation status.',
      'Collaborated with operations and tech teams to reduce manual workload and improve turnaround time.',
    ],
    metrics: [
      { label: 'Cases Resolved', value: '100%' },
      { label: 'Uptime', value: '99.5%' },
      { label: 'Efficiency Gain', value: 'Data-Driven' },
    ],
  },
];

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
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
              Professional Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Driving automation and operational excellence</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
            >
              <div className="glass border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse-glow" />
                      <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                </div>

                {/* Expanded content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedId === exp.id ? 'auto' : 0,
                    opacity: expandedId === exp.id ? 1 : 0,
                    marginTop: expandedId === exp.id ? 16 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 border-t border-cyan-500/20 pt-4">
                    {/* Description */}
                    <p className="text-gray-300">{exp.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      {exp.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3 text-center"
                        >
                          <div className="text-cyan-400 font-bold text-lg">{metric.value}</div>
                          <div className="text-xs text-gray-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Bullets */}
                    <div className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex gap-3"
                        >
                          <span className="text-cyan-400 mt-1">→</span>
                          <p className="text-gray-300">{bullet}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact highlight panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass border border-cyan-500/20 rounded-lg p-8"
        >
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Impact Areas</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Automation & Monitoring</p>
                <p className="text-sm text-gray-400">Failed case resolution and log analysis expertise</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Data Integrity</p>
                <p className="text-sm text-gray-400">Continuous monitoring of automation status</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Cross-Team Collaboration</p>
                <p className="text-sm text-gray-400">Coordinating with operations and tech teams</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl">✓</span>
              <div>
                <p className="font-semibold text-white">Efficiency Optimization</p>
                <p className="text-sm text-gray-400">Reducing manual workload and improving turnaround time</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
