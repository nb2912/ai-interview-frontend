'use client';

import { useRouter } from 'next/navigation';
import Footer from '@/components/global/Footer';

export default function PricingPage() {
  const router = useRouter();

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Free',
      features: ['1 Interview / Day', 'Basic Transcripts', 'Community Access'],
      button: 'Get Started',
    },
    {
      name: 'Pro',
      price: '₹299/mo',
      features: ['5 Interviews / Day', 'Advanced Transcripts', 'AI Feedback', 'Priority Support'],
      button: 'Upgrade to Pro',
      highlight: true,
    },
    {
      name: 'Elite',
      price: '₹599/mo',
      features: [
        'Unlimited Interviews',
        'Detailed Performance Analytics',
        '1:1 Career Coaching',
        'Early Access to Features',
      ],
      button: 'Go Elite',
    },
  ];

  const handleRedirect = (planName: string) => {
    router.push(`/payment?plan=${encodeURIComponent(planName)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
      <main className="flex-grow px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-700">Choose Your Plan</h1>
            <p className="mt-4 text-lg text-gray-600">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 shadow-md border-2 transition-all duration-300 ${
                  plan.highlight
                    ? 'border-orange-600 bg-white hover:shadow-orange-200'
                    : 'border-gray-200 bg-white hover:shadow-md'
                }`}
              >
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{plan.name}</h2>
                <p className="text-3xl font-bold mb-4 text-orange-600">{plan.price}</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center">
                      <span className="mr-2 text-green-500">✔</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleRedirect(plan.name)}
                  className={`w-full py-3 rounded-md font-semibold transition-colors duration-300 ${
                    plan.highlight
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
