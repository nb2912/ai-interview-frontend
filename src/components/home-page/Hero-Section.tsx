'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import LoginModal from '@/components/modals/SigninModal';
import SignupModal from '@/components/modals/SignupModal';
import Footer from '@/components/global/Footer';

export default function HeroSection() {
  const router = useRouter();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleSwitchToSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignup={handleSwitchToSignup}
      />
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-300 rounded-full filter blur-3xl opacity-70" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl opacity-50" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-20 md:py-28 lg:py-32">
            <motion.div
              className="text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl"
                variants={itemVariants}
              >
                <span className="block">Master Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                  AI Interview
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Experience the future of interview preparation with AI-powered simulations that adapt to your skill level.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                variants={itemVariants}
              >
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="px-6 py-3 rounded-md text-white bg-orange-500 hover:bg-orange-600 transition duration-200 shadow"
                  aria-label="Get started with PrepTrail"
                >
                  Get Started
                </button>
                <button
                  onClick={() => router.push('/about')}
                  className="px-6 py-3 rounded-md text-orange-600 border border-orange-300 bg-white hover:bg-orange-50 transition duration-200"
                  aria-label="Learn more about PrepTrail"
                >
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Adaptive Questions',
                description:
                  'Our AI learns your strengths and weaknesses to tailor each session specifically to you.',
              },
              {
                title: 'Real-Time Feedback',
                description:
                  'Receive instant, actionable insights to improve your responses and confidence.',
              },
              {
                title: 'Expertly Designed',
                description:
                  'Our questions are crafted by industry professionals to match real-world interviews.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-orange-600 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
