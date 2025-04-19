import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const eduFeatures = [
  {
    title: 'Classroom Scheduling',
    description: 'Easily manage classroom bookings, lectures, and room availability in real-time.',
    icon: '📚',
  },
  {
    title: 'Campus-wide Oversight',
    description: 'Centralized control for multiple buildings, libraries, labs, and meeting spaces.',
    icon: '🏫',
  },
  {
    title: 'Student-Friendly Access',
    description: 'Allow students to view, book, and request space with secure, role-based permissions.',
    icon: '🎓',
  },
  {
    title: 'Custom Rules & Workflows',
    description: 'Set up space usage policies and approval workflows tailored to your academic calendar.',
    icon: '⚙️',
  },
];

export default function ForLearningInstitutionsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white text-gray-800 px-4 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#6C63FF] mb-4">
              For Learning Institutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Atlas helps schools, universities, and training centers streamline how they manage academic spaces and improve operational efficiency.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {eduFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-200 transition"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#6C63FF] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-[#6C63FF] text-white py-12 px-6 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">Empower Your Institution</h3>
            <p className="mb-6">
              Join the next generation of schools using smart space solutions to elevate education delivery.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#6C63FF] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
