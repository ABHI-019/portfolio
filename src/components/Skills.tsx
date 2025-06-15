'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const skills = {
  languages: ['C/C++', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
  webTechnologies: [ 'Node.js','Express.js','React.js', 'MongoDB', 'PostgreSQL', 'AWS',],
  tools: ['Git', 'Docker', 'VS Code', 'Postman',],
};

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Skills
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Web Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.webTechnologies.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 