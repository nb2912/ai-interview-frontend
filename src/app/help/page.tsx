// app/help/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
// import ChatBot from './components/chatbot';
import { Mail, MessageCircleQuestion, Info, Bug, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Help | PrepTrail',
  description: 'Find answers, get support, and connect with the PrepTrail team.',
};

const helpLinks = [
  {
    title: 'FAQs',
    description: 'Get quick answers to the most frequently asked questions.',
    icon: MessageCircleQuestion,
    href: '/help/faqs',
  },
  {
    title: 'Technical Support',
    description: 'Facing issues? Reach out to our tech support team.',
    icon: Bug,
    href: '/help/tech-support',
  },
  {
    title: 'How PrepTrail Works',
    description: 'Learn how our platform helps you prepare effectively.',
    icon: Info,
    href: '/about',
  },
  {
    title: 'Contact Us',
    description: 'Still need help? Get in touch with our support team.',
    icon: Mail,
    href: '/contact',
  },
];

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            How Can We Help?
          </h1>
          <p className="text-lg text-gray-700">
            Find the answers, support, and guidance you need to make the most of PrepTrail.
          </p>
        </div>
      </section>

      {/* Help Options */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {helpLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="flex items-start gap-5 p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition group"
            >
              <link.icon className="h-8 w-8 text-orange-600 group-hover:text-orange-700" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Emergency Support CTA */}
        <div className="mt-20 text-center">
          <Phone className="mx-auto text-orange-600 mb-4 h-8 w-8" />
          <h2 className="text-xl font-semibold text-gray-800">Still stuck?</h2>
          <p className="text-gray-600 mb-4">We’re just an email away — reach out directly to our support team.</p>
          <a
            href="mailto:support@preptrail.com"
            className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
          >
            Email Support
          </a>
        </div>
      </section>
    </main>
  );
}
