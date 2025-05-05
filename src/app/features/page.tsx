'use client';
import Footer from '@/components/global/Footer';
import { FaRobot, FaBrain, FaChartBar, FaUserCheck } from 'react-icons/fa';

export default function FeaturesPage() {
  return (
    <>
      <main className="bg-gradient-to-br from-orange-50 to-yellow-100 min-h-screen px-6 py-20 text-gray-800">
        <section className="text-center mb-20">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text transition-opacity duration-700 opacity-100">
            Unlock Powerful AI Interview Tools
          </h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-600 transition-opacity duration-700 delay-200 opacity-100">
            Discover a suite of smart tools designed to elevate your confidence, sharpen your responses, and fast-track your preparation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-white/60 border border-orange-200 shadow-md backdrop-blur-sm hover:shadow-xl transform hover:scale-105 hover:bg-orange-50 transition-all duration-300"
            >
              <div className="text-orange-500 mb-4 text-4xl group-hover:text-orange-600 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

const features = [
  {
    title: 'AI Mock Interviews',
    description: 'Engage in realistic, AI-conducted mock interviews with contextual follow-ups and scoring.',
    icon: <FaRobot />,
  },
  {
    title: 'Behavioral Feedback',
    description: 'Real-time sentiment analysis and facial expression tracking for improved delivery.',
    icon: <FaUserCheck />,
  },
  {
    title: 'Custom Interview Sets',
    description: 'Get tailored question banks aligned to your resume, role, and target companies.',
    icon: <FaBrain />,
  },
  {
    title: 'Progress Analytics',
    description: 'Visual dashboards that track strengths, weaknesses, and improvements over time.',
    icon: <FaChartBar />,
  },
  {
    title: 'Instant Transcripts',
    description: 'Receive word-by-word transcripts with timestamps and AI-generated improvement tips.',
    icon: <FaRobot />,
  },
  {
    title: 'Industry-Specific Modes',
    description: 'Practice interviews crafted for tech, finance, consulting, and more.',
    icon: <FaBrain />,
  },
];
