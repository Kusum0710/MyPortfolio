'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 30;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const initials = 'AE';

  return (
    <div className="fixed inset-0 bg-dark flex items-center justify-center z-50">
      {/* Background animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <div className="w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated monogram */}
        <motion.div
          className="relative"
          animate={{
            scale: [0.8, 1, 0.95],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-400"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              boxShadow: '0 0 30px rgba(15, 255, 255, 0.3)',
            }}
          />

          {/* Inner circle with initials */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 backdrop-blur-xl border border-cyan-400/30 flex items-center justify-center relative">
            <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              {initials}
            </span>

            {/* Glowing dots */}
            <motion.div
              className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-2 h-2 bg-indigo-400 rounded-full"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        {/* Loading progress */}
        <div className="w-64 space-y-3">
          <motion.p
            className="text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Initializing Portfolio
          </motion.p>

          {/* Progress bar */}
          <div className="relative w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-indigo-400"
              style={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.3,
              }}
            />
          </div>

          {/* Progress text */}
          <motion.p className="text-center text-xs text-gray-500">
            {Math.min(Math.round(progress), 100)}%
          </motion.p>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-400 text-sm max-w-xs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Building something amazing
        </motion.p>
      </motion.div>
    </div>
  );
}
