'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Blog
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Coming Soon: Technical articles, tutorials, and insights about web development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="text-center space-y-4">
            <svg
              className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Blog Posts Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I&apos;m currently working on creating valuable content about web development, programming best practices, and technical tutorials. Stay tuned for updates!
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Subscribe for Updates
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 