'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="mt-8 max-w-2xl mx-auto space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="space-y-2">
          <label 
            htmlFor="name" 
            className="block text-base font-semibold text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 
                     focus:ring-indigo-200 dark:focus:ring-indigo-800
                     placeholder-gray-500 dark:placeholder-gray-400
                     transition-colors duration-200"
          />
        </div>
        <div className="space-y-2">
          <label 
            htmlFor="email" 
            className="block text-base font-semibold text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 
                     focus:ring-indigo-200 dark:focus:ring-indigo-800
                     placeholder-gray-500 dark:placeholder-gray-400
                     transition-colors duration-200"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label 
          htmlFor="subject" 
          className="block text-base font-semibold text-gray-900 dark:text-white"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Job Opportunity"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                   focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 
                   focus:ring-indigo-200 dark:focus:ring-indigo-800
                   placeholder-gray-500 dark:placeholder-gray-400
                   transition-colors duration-200"
        />
      </div>
      <div className="space-y-2">
        <label 
          htmlFor="message" 
          className="block text-base font-semibold text-gray-900 dark:text-white"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={6}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="I would like to discuss..."
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                   focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 
                   focus:ring-indigo-200 dark:focus:ring-indigo-800
                   placeholder-gray-500 dark:placeholder-gray-400
                   transition-colors duration-200 resize-none"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 px-6 text-lg font-semibold text-white 
                   bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600
                   rounded-lg shadow-md hover:shadow-lg
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-200"
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
      {status === 'success' && (
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
          <p className="text-green-800 dark:text-green-200 text-center font-medium">
            Message sent successfully! I'll get back to you soon.
          </p>
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
          <p className="text-red-800 dark:text-red-200 text-center font-medium">
            Failed to send message. Please try again or contact me directly via email.
          </p>
        </div>
      )}
    </motion.form>
  );
} 