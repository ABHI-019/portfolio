import { Navigation } from '@/components/Navigation';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { ContactForm } from '@/components/ContactForm';
import { BackToTop } from '@/components/BackToTop';
import { ProfileImage } from '@/components/ProfileImage';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center space-y-8 md:space-y-12">
            <div className="mt-16 md:mt-24">
              <ProfileImage />
            </div>
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white">
                Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Abhishek Raj</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                Backend Developer with a passion for DevOps and Cloud technologies
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto px-4">
                Experienced in building robust APIs, managing scalable infrastructure, and comfortable working across the full stack.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 px-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-base font-medium rounded-md text-indigo-600 dark:text-indigo-400 bg-transparent hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-2 border-indigo-600 dark:border-indigo-400 rounded-md transform scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
              </a>
              <a
                href={process.env.NEXT_PUBLIC_RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-2 border-gray-300 dark:border-gray-600 rounded-md transform scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
              </a>
            </div>
          </div>
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <svg
              className="h-8 w-8 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Skills />
      <Blog />
      <Testimonials />
      <Contact />
      <section id="contact-form" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Let's Work Together
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Have a project in mind? I'm always open to discussing new opportunities and challenges.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
      <BackToTop />
    </main>
  );
}
