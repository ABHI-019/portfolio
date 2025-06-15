'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'CollaborativeX',
    description: 'A real-time collaborative platform for coding, chatting, and drawing, supporting over 100 users.',
    highlights: [
      'Designed low-latency communication using WebSockets, achieving synchronization under 200ms',
      'Improved collaboration efficiency by 35% through live code editing and real-time chat features',
    ],
    tech: ['React.js', 'Node.js', 'WebSockets', 'AWS'],
    github: 'https://github.com/Abhishek-raj-292002/Collborate-x',
  },
  {
    title: 'Scalable Music Streaming Platform',
    description: 'A full-stack music streaming platform with authentication, playlist management, and real-time playback.',
    highlights: [
      'Implemented microservices (User, Playlist, Music) with Redis caching to reduce response time from ~1.9s to 111ms',
      'Used PostgreSQL and MongoDB; deployed services on AWS (EC2, RDS, Cloudinary) for scalable media handling',
      'Developed a responsive UI with role-based access using JWT, React, Tailwind CSS, and Redux',
    ],
    tech: ['MERN Stack', 'Microservices', 'AWS', 'Redis'],
    github: 'https://github.com/Abhishek-raj-292002/MusicPlayer.git',
  },
  {
    title: 'Full Stack URL Shortener',
    description: 'A modern URL shortener with authentication, analytics, and QR code generation.',
    highlights: [
      'Added custom URL generation and tracking, increasing returning user rate by 30%',
      'Integrated Supabase authentication with social login, reducing login failure rate by 25%',
      'Implemented click analytics (location & device-based) to improve user engagement by 50%',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Supabase', 'Shadcn UI'],
    demo: 'https://url-shortener-fawn-ten.vercel.app/',
    //github: 'https://github.com/Abhishek-raj-292002/url-shortener.git',
  },
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my notable projects that showcase my skills and experience in full-stack development.
          </p>
        </motion.div>

        <div className="mt-16 space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <a
                  href={project.github || project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                </a>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{project.description}</p>
              <ul className="mt-4 space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300">
                    • {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 