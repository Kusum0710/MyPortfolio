'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Weather App',
    description:
      'Developed a responsive and user-friendly weather application using React, designed to provide real-time weather updates for cities worldwide. The app leverages the OpenWeather API and GeoDB API to deliver accurate and up-to-date weather information with a sleek and intuitive interface with places auto-complete.',
    technologies: ['ReactJS', 'APIs', 'OpenWeather API', 'GeoDB API'],
    features: [
      'Real-time weather updates for cities worldwide',
      'OpenWeather API integration',
      'GeoDB API integration',
      'Places auto-complete functionality',
      'Sleek and intuitive interface',
      'Responsive design',
    ],
    links: {
      live: '',
      github: '',
    },
  },
];

export default function ProjectsSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

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
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Building solutions with modern technologies</p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 h-full">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:to-indigo-500/5 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="glass px-3 py-1 rounded-full text-sm text-cyan-400 border border-cyan-500/30 hover:border-cyan-400/50 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                      Key Features
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <span className="text-cyan-400">→</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass px-4 py-2 rounded-lg border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass px-4 py-2 rounded-lg border border-indigo-400/50 text-indigo-400 hover:bg-indigo-400/10 transition-all flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                    {!project.links.live && !project.links.github && (
                      <p className="text-gray-500 text-sm italic">Links available upon request</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass border border-cyan-500/20 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Want to see more?</h3>
          <p className="text-gray-400 mb-4">
            I'm constantly building and shipping new solutions. Check out my portfolio repositories and connect with me for collaborations.
          </p>
          <button className="glass px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold hover:shadow-lg transition-all">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
