'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/global/Footer';
import { FaLightbulb, FaRocket, FaChartLine, FaUsers, FaCode, FaTrophy, FaCommentDots, FaCog, FaHandshake } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
      {/* Hero Section */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="py-24 px-6 sm:px-8 lg:px-12 xl:px-24 text-center bg-orange-100 rounded-b-xl shadow-lg"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-orange-700 mb-8">
          Empowering Your Interview Journey
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
          We believe everyone deserves to shine in their interviews. Our AI-powered platform provides realistic simulations,
          actionable feedback, and personalized learning paths to help you land your dream job.
        </p>
        <motion.div className="flex justify-center gap-4">
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="bg-transparent hover:bg-orange-100 text-orange-500 font-semibold py-3 px-6 rounded-full border border-orange-500 transition duration-300 ease-in-out shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-6 sm:px-8 lg:px-12 xl:px-24 bg-white border-b border-gray-200"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-700 mb-8">Our Guiding Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To democratize interview preparation through cutting-edge AI technology. We are committed to providing a
            platform that is not only effective but also engaging and accessible to all job seekers, regardless of their
            background or experience level. Our success is measured by your success.
          </p>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-orange-50 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-16">Unlock Your Potential in Three Simple Steps</h2>
        <motion.div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            ['1. Craft Your Profile', 'Share your career aspirations and background.', <FaUsers className="mx-auto text-3xl text-orange-500 mb-4" />],
            ['2. Dive into Practice', 'Engage with AI-powered simulations for diverse interview scenarios.', <FaRocket className="mx-auto text-3xl text-orange-500 mb-4" />],
            ['3. Analyze and Improve', 'Receive detailed feedback and track your progress with insightful analytics.', <FaChartLine className="mx-auto text-3xl text-orange-500 mb-4" />],
          ].map(([title, desc, icon], idx) => (
            <motion.div key={idx} variants={fadeInUp} className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition duration-300">
              {icon}
              <h3 className="text-xl font-semibold text-orange-600 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-6 sm:px-8 lg:px-12 xl:px-24 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-16">Why Choose Our AI-Powered Platform?</h2>
        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            ['Realistic Simulations', 'Experience interview scenarios that mirror real-world challenges.', <FaLightbulb className="text-2xl text-orange-500 mb-3" />],
            ['Instant, Actionable Feedback', 'Get immediate insights and tips to refine your interview techniques.', <FaCommentDots className="text-2xl text-orange-500 mb-3" />],
            ['Adaptive Learning Paths', 'Our system adjusts to your skill level, ensuring continuous growth.', <FaCog className="text-2xl text-orange-500 mb-3" />],
            ['Behavioral Mastery', 'Learn to effectively communicate your experiences using proven methodologies.', <FaHandshake className="text-2xl text-orange-500 mb-3" />],
            ['Technical Skill Enhancement', 'Practice coding challenges and technical questions with helpful guidance.', <FaCode className="text-2xl text-orange-500 mb-3" />],
            ['Track Your Success', 'Monitor your progress with detailed analytics and celebrate your achievements.', <FaTrophy className="text-2xl text-orange-500 mb-3" />],
          ].map(([title, desc, icon], idx) => (
            <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                {icon}
                <h3 className="font-semibold text-lg text-orange-600 ml-3">{title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Our Team Section */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-gray-50 px-6 sm:px-8 lg:px-12 xl:px-24"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-700 mb-12">Meet the Minds Behind the Innovation</h2>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: 'Alice Johnson', title: 'CEO & Founder', imageUrl: '/profil.jpg' }, // Changed to local path
              { name: 'Bob Williams', title: 'Lead Developer', imageUrl: '/profil.jpg' },
              { name: 'Catherine Davis', title: 'AI Specialist', imageUrl: '/profil.jpg' },
              { name: 'David Garcia', title: 'UX/UI Designer', imageUrl: '/profil.jpg' },
              { name: 'Eve Rodriguez', title: 'Marketing Manager', imageUrl: '/profil.jpg' },
              { name: 'Frank Martinez', title: 'Customer Success Lead', imageUrl: '/profil.jpg' },
            ].map((member, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-lg shadow-md p-6 text-center">
                <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
