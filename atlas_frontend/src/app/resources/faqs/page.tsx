"use client";

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const faqs = [
  {
    question: 'What is Atlas and how does it work?',
    answer:
      'Atlas is a platform that connects people with unique, flexible workspaces. Browse listings, book spaces, and manage everything from your dashboard.',
  },
  {
    question: 'Is there a cost to sign up?',
    answer:
      'Signing up for Atlas is completely free! You only pay when you book or list a space.',
  },
  {
    question: 'How do I book a space?',
    answer:
      'Simply browse the available listings, select your dates, review the space rules, and confirm your booking in a few clicks.',
  },
  {
    question: 'Can I list my own space?',
    answer:
      'Absolutely! Create a host account, upload details and photos, and once approved, your space will be visible to renters.',
  },
  {
    question: 'What happens if I need to cancel?',
    answer:
      'Cancellations are subject to the policy set by each host. We recommend reviewing this before booking.',
  },
];

export default function FAQsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-white to-yellow-50 text-gray-800 px-4 md:px-10 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#6C63FF] mb-4">FAQs</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Got questions? We’ve got answers! Find everything you need to know below.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center text-lg font-medium text-[#6C63FF] focus:outline-none"
                >
                  {faq.question}
                  <span className="text-2xl transition-transform duration-300">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-5 text-gray-700 text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still need help? */}
          <div className="mt-20 text-center bg-[#6C63FF] text-white py-12 px-6 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">Still need help?</h3>
            <p className="mb-6">Reach out to our support team. We’re happy to assist!</p>
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
