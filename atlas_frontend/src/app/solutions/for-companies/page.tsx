import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const companyBenefits = [
  {
    title: 'Centralized Workspace Control',
    description:
      'Manage multiple office locations, hot desks, and hybrid schedules from one intuitive platform.',
    icon: '🏙️',
  },
  {
    title: 'Enhanced Team Collaboration',
    description:
      'Empower teams to reserve spaces that foster creativity, collaboration, and productivity.',
    icon: '🤝',
  },
  {
    title: 'Productivity Insights',
    description:
      'Access real-time analytics to make data-driven decisions about how your spaces are used.',
    icon: '📈',
  },
  {
    title: 'Seamless Integration',
    description:
      'Connect Atlas with your company’s tools — from calendars to HR systems — for smooth workflows.',
    icon: '🔗',
  },
];

export default function ForCompaniesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-800 px-4 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#6C63FF] mb-4">For Companies</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Discover how Atlas helps your company streamline workspace management and boost productivity across teams.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {companyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-200 transition"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-[#6C63FF] mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-[#6C63FF] text-white py-12 px-6 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">Transform how your company works</h3>
            <p className="mb-6">Start managing workspaces smarter — tailored for the needs of modern teams and enterprises.</p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#6C63FF] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
