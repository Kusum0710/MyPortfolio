'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6"
        >
          <div className="glass px-4 py-2 rounded-full border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Cloud security enthusiast
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Kusum
          </span>
          <span className="block text-white">Swarnakar</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          BCA graduate with hands-on experience in automation operations, API workflows, and process monitoring. Passionate about cybersecurity with a detail-oriented approach to problem solving.
        </motion.p>

        {/* Impact highlights */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
        >
          <div className="glass p-4 rounded-lg border border-cyan-500/20">
            <div className="text-2xl font-bold text-cyan-400">4+</div>
            <div className="text-sm text-gray-400">Key Achievements</div>
          </div>
          <div className="glass p-4 rounded-lg border border-cyan-500/20">
            <div className="text-2xl font-bold text-cyan-400">5</div>
            <div className="text-sm text-gray-400">Technical Skills</div>
          </div>
          <div className="glass p-4 rounded-lg border border-cyan-500/20">
            <div className="text-2xl font-bold text-cyan-400">∞</div>
            <div className="text-sm text-gray-400">Growth Mindset</div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link href="#experience" className="group">
            <button className="glass px-8 py-3 rounded-lg border border-cyan-400/50 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-2">
              View Experience
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </Link>

          <button className="glass px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold hover:shadow-[0_0_30px_rgba(15,255,255,0.3)] transition-all duration-300 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500 text-sm"
        >
          Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}
