'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a Computer Science undergraduate with a strong foundation in Data Structures and Algorithms, having solved over 600 problems across platforms. I specialize in backend development and enjoy building scalable, efficient systems using modern technologies and cloud platforms like AWS.
            <br /><br />
            I have hands-on experience with full-stack application development, working with technologies such as Node.js, React, MongoDB, PostgreSQL, and Docker. I'm deeply interested in DevOps, infrastructure as code, and cloud-native architectures.
            <br /><br />
            I'm also passionate about contributing to tech communities, continuously learning, and building impactful software that solves real-world problems.
          </p>

        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Education</h3>
            <p className="text-gray-600 dark:text-gray-300">
              B.Tech. in Computer Science & Engineering<br />
              Jaypee University of Engineering and Technology<br />
              Guna, Madhya Pradesh<br />
              Aug 2022 – present
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Achievements</h3>
            <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside">
              {/*<li>2★ CodeChef (Max Rating: 1410)</li>*/}
              <li>600+ DSA problems solved</li>
              <li>Problem Solving (Intermediate) – HackerRank</li>
              <li>Volunteer at Google Developer Students Club (GDSC)</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Coursework</h3>
            <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside">
              <li>Data Structures and Algorithms</li>
              <li>Object-Oriented Programming</li>
              <li>Database Management Systems</li>
              <li>Software Engineering</li>
              <li>Operating Systems</li>
              <li>Computer Networks</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 