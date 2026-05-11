'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="py-16 px-6 relative border-t border-cyan-500/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-400 max-w-md mx-auto mb-8">
            Ready to discuss automation, DevOps, or cybersecurity opportunities? Reach out and let's create something amazing together.
          </motion.p>

          {/* Contact links */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              variants={itemVariants}
              href="mailto:connect@example.com"
              className="glass px-6 py-3 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="#"
              className="glass px-6 py-3 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10 transition-all flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="#"
              className="glass px-6 py-3 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10 transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-8" />

        {/* Footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Branding */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-white mb-2">Portfolio</h3>
            <p className="text-sm text-gray-400">
              Built with Next.js, React, and Framer Motion to showcase expertise in modern web development and automation.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-white mb-4">Quick Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <ExternalLink className="w-3 h-3" />
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <ExternalLink className="w-3 h-3" />
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <ExternalLink className="w-3 h-3" />
                  Skills
                </a>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-white mb-4">Next Steps</h3>
            <p className="text-sm text-gray-400 mb-3">
              Interested in collaboration or discussion? Let's talk about your automation and DevOps needs.
            </p>
            <button className="w-full glass px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold hover:shadow-lg transition-all text-sm">
              Start a Conversation
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center pt-8 border-t border-cyan-500/10"
        >
          <p className="text-gray-500 text-sm">
            © 2025 Portfolio. Built with passion for automation, cybersecurity, and DevOps excellence.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Showcasing expertise in: Automation Operations • API Workflows • Process Monitoring • Cybersecurity
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
