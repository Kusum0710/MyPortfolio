'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Zap, Code } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Inter-College Coding Competition Winner',
    description: 'Won inter-college coding competition in Manegedia organised by iLead, Kolkata.',
    type: 'competition',
    icon: <Code className="w-6 h-6" />,
    isTop: true,
    rank: 1,
  },
  {
    id: 2,
    title: 'Cybersecurity Training - A Rank',
    description: 'Got an A rank in Cybersecurity beginners training by ITOrizon.',
    type: 'certification',
    icon: <Zap className="w-6 h-6" />,
    isTop: true,
    rank: 2,
  },
  {
    id: 3,
    title: 'Quiz and Painting Competition Winner',
    description: 'Won many inter school quiz and painting competitions.',
    type: 'competition',
    icon: <Trophy className="w-6 h-6" />,
    isTop: true,
    rank: 3,
  },
  {
    id: 4,
    title: 'UI/UX Design Recognition',
    description: 'Developed interactive UI/UX prototypes using Figma, receiving recognition for user-centered design.',
    type: 'recognition',
    icon: <Award className="w-6 h-6" />,
    isTop: false,
  },
];

export default function AchievementsSection() {
  const topAchievements = achievements.filter((a) => a.isTop);
  const otherAchievements = achievements.filter((a) => !a.isTop);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

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
              Achievements & Recognition
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Celebrating wins and milestones</p>
        </motion.div>

        {/* Top 3 Impact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-4">
            {topAchievements.map((achievement, idx) => (
              <motion.div
                key={achievement.id}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-lg glass border border-cyan-400/50 p-6 hover:border-cyan-300/80 transition-all duration-300"
              >
                {/* Background spotlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Rank badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, delay: idx * 0.1, repeat: Infinity }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"
                />

                {/* Rank number */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">#{achievement.rank}</span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-3 text-cyan-400">{achievement.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">{achievement.title}</h3>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-gray-300 mb-6">Additional Recognition</h3>
          <motion.div
            variants={containerVariants}
            className="space-y-3"
          >
            {otherAchievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="glass border border-cyan-500/20 rounded-lg p-5 hover:border-cyan-400/50 transition-all duration-300 flex items-start gap-4"
              >
                <div className="text-cyan-400 mt-1 flex-shrink-0">{achievement.icon}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-1">{achievement.title}</h4>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-4 gap-4"
        >
          <div className="glass border border-cyan-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">4</div>
            <p className="text-sm text-gray-400">Awards</p>
          </div>
          <div className="glass border border-cyan-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">1</div>
            <p className="text-sm text-gray-400">A Rank Certification</p>
          </div>
          <div className="glass border border-cyan-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">3</div>
            <p className="text-sm text-gray-400">Competition Wins</p>
          </div>
          <div className="glass border border-cyan-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">∞</div>
            <p className="text-sm text-gray-400">Growth Potential</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
