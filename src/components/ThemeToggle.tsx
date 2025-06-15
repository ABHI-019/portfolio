'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-colors duration-200"
      >
        <div className="relative w-5 h-5">
          <div className="absolute inset-0">
            <SunIcon className="h-5 w-5" />
          </div>
        </div>
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-colors duration-200"
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 90 : 0,
            scale: theme === 'dark' ? 0 : 1,
            opacity: theme === 'dark' ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <SunIcon className="h-5 w-5" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 0 : -90,
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <MoonIcon className="h-5 w-5" />
        </motion.div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
} 