// app/testimonial/page.tsx
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | PrepTrail',
  description: 'Hear how PrepTrail is transforming interview preparation.',
};

const testimonials = [
  {
    name: 'Aarav S.',
    role: 'Software Engineer, Google',
    feedback: 'PrepTrail was the final push I needed. The AI feedback was game-changing.',
    image: '/profil.jpg',
  },
  {
    name: 'Megha R.',
    role: 'Data Analyst, TCS',
    feedback: 'I never thought a virtual platform could replicate real interviews this well.',
    image: '/profil.jpg',
  },
  {
    name: 'Vikram P.',
    role: 'ML Engineer, Amazon',
    feedback: 'Clean interface, actionable insights, and high-quality mocks. Perfect combo!',
    image: '/profil.jpg',
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Hear From <span className="text-orange-600">Our Users</span>
          </h1>
          <p className="text-lg text-gray-700">
            Real success stories from candidates who leveled up with PrepTrail’s cutting-edge AI-driven mock interview platform.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover border-2 border-orange-500"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 text-base leading-relaxed italic">
                “{t.feedback}”
              </blockquote>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to be our next success story?
          </h2>
          <p className="text-gray-600 mb-6">Join thousands of aspirants preparing smarter with PrepTrail.</p>
          <a
            href="/pricing"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition font-medium"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
