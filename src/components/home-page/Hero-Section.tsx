'use client';
import Footer from '@/components/global/Footer';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import LoginModal from '@/components/modals/SigninModal';
import SignupModal from '@/components/modals/SignupModal';

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
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <section className="relative bg-white overflow-hidden">
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

        {/* Background Glow */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-300 rounded-full filter blur-3xl opacity-70"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl opacity-50"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative z-10 py-20 md:py-28 lg:py-32">
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
                <motion.span className="block">Master Your</motion.span>
                <motion.span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                  AI Interview
                </motion.span>
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
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsLoginOpen(true)}
                  className="px-6 py-3 rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200 shadow-sm"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push('/about')}
                  className="px-6 py-3 rounded-md text-orange-600 border border-orange-300 bg-white hover:bg-orange-50 transition-colors duration-200"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Adaptive Questions</h3>
              <p className="text-gray-600">
                Our AI learns your strengths and weaknesses to tailor each session specifically to you.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Real-Time Feedback</h3>
              <p className="text-gray-600">
                Receive instant, actionable insights to improve your responses and confidence.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Expertly Designed</h3>
              <p className="text-gray-600">
                Our questions are crafted by industry professionals to match real-world interviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
