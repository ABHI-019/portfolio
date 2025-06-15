'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-lg group"
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full"
      >
        <Image
          src="/profile.jpg"
          alt="Profile picture"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 border-4 border-indigo-600 dark:border-indigo-400 rounded-full transform scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
    </motion.div>
  );
} 