'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: process.env.NEXT_PUBLIC_EMAIL,
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: process.env.NEXT_PUBLIC_PHONE,
    href: `tel:${process.env.NEXT_PUBLIC_PHONE}`,
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    value: process.env.NEXT_PUBLIC_LOCATION,
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: process.env.NEXT_PUBLIC_GITHUB_URL,
  },
  {
    name: 'LinkedIn',
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  },
  {
    name: 'LeetCode',
    href: process.env.NEXT_PUBLIC_LEETCODE_URL,
  },
  {
    name: 'Instagram',
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  },
];

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Contact
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Feel free to reach out to me for any opportunities or just to say hello!
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {contactInfo.map((info) => (
            <motion.div
              key={info.label}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center group hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <info.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {info.label}
              </h3>
              {info.href ? (
                <a
                  href={info.href}
                  className="mt-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 inline-block"
                >
                  {info.value}
                </a>
              ) : (
                <p className="mt-2 text-gray-600 dark:text-gray-300">{info.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Connect with me
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 