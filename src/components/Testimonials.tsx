'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Coming Soon: Feedback from clients and collaborators
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-3xl mx-auto bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg p-8"
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
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Testimonials Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              As I continue to work on exciting projects and collaborate with clients, I'll be adding their feedback and testimonials here. Check back soon to see what people are saying about working with me!
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Work With Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 