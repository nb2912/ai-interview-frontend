'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/global/Footer';

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-orange-100 via-orange-50 to-white py-24 px-4 text-center"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-orange-600 mb-6">About Us</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We're on a mission to transform interview preparation using AI-driven simulations that replicate real-world
          scenarios. Our platform empowers candidates to build confidence, master skills, and succeed in high-stakes interviews.
        </p>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-700 mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To make interview success accessible to everyone by providing realistic, intelligent, and adaptive
            preparation tools. Whether you're targeting your first job or a senior role, our simulations evolve with
            you—providing actionable feedback and measurable progress every step of the way.
          </p>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-20 bg-orange-50 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            ['1. Create a Profile', 'Tell us your goals and experience.'],
            ['2. Start Practicing', 'Use AI-driven simulations for technical and behavioral rounds.'],
            ['3. Get Feedback', 'Review insights and track progress through smart analytics.'],
          ].map(([title, desc], idx) => (
            <div key={idx} className="px-4">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      {/* <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-orange-700 mb-10">Why Choose Us?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            ['Realistic Simulations', 'Train with scenarios modeled after actual interview experiences.'],
            ['Instant Feedback', 'Actionable tips and analytics immediately after each session.'],
            ['Adaptive Learning', 'We adjust the difficulty based on your growth curve.'],
            ['Behavioral Insights', 'Master STAR technique through dynamic prompts and examples.'],
            ['Technical Depth', 'Mock coding sessions with live validation and hints.'],
            ['Progress Tracking', 'Stay on top of your improvement journey with detailed dashboards.'],
          ].map(([title, desc], idx) => (
            <div key={idx} className="px-2">
              <h3 className="font-bold text-lg text-orange-600 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </motion.section> */}

      {/* Footer */}
      <Footer />
    </main>
  );
}
