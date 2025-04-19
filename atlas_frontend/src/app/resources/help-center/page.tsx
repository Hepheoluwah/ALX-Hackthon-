import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const helpTopics = [
  {
    title: 'Getting Started',
    description: 'Learn how to set up your profile, find spaces, and make bookings.',
    link: '#',
  },
  {
    title: 'Managing Bookings',
    description: 'Modify, cancel, or view the details of your existing bookings.',
    link: '#',
  },
  {
    title: 'Listing Your Space',
    description: 'Everything you need to know to become a host and manage your listings.',
    link: '#',
  },
  {
    title: 'Payments & Refunds',
    description: 'Understand how payments work, including billing, payouts, and refunds.',
    link: '#',
  },
  {
    title: 'Trust & Safety',
    description: 'Learn how we keep your data and experience safe on Atlas.',
    link: '#',
  },
  {
    title: 'Account Settings',
    description: 'Manage your personal info, preferences, and notifications.',
    link: '#',
  },
];

export default function HelpCenterPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-white to-green-50 text-gray-800 px-4 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#6C63FF] mb-4">Help Center</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Find answers to your questions and get support for using Atlas.
            </p>
          </div>

          {/* Help Topics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {helpTopics.map((topic, index) => (
              <a
                key={index}
                href={topic.link}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-200 transition"
              >
                <h3 className="text-xl font-semibold text-[#6C63FF] mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm">{topic.description}</p>
              </a>
            ))}
          </div>

          {/* Still need help? */}
          <div className="text-center bg-[#6C63FF] text-white py-12 px-6 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">Still need help?</h3>
            <p className="mb-6">Contact our support team — we’re always ready to assist you.</p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#6C63FF] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
