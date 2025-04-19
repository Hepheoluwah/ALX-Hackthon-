import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const adminFeatures = [
  {
    title: 'Workspace Oversight',
    description: 'Gain full visibility into bookings, user activity, and space usage across your organization.',
    icon: '🏢',
  },
  {
    title: 'User Management',
    description: 'Easily manage user roles, permissions, and access levels within your workspace environment.',
    icon: '👥',
  },
  {
    title: 'Analytics & Reports',
    description: 'Generate detailed usage reports and insights to optimize space utilization and performance.',
    icon: '📊',
  },
  {
    title: 'Custom Policies',
    description: 'Define custom usage rules, approval workflows, and cancellation policies tailored to your team.',
    icon: '⚙️',
  },
];

export default function ForAdminsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white text-gray-800 px-4 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#6C63FF] mb-4">For Admins</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Discover how Atlas empowers administrators to efficiently manage workspaces, users, and operations.
            </p>
          </div>

          {/* Admin Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {adminFeatures.map((feature, index) => (
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

          {/* Final CTA */}
          <div className="text-center bg-[#6C63FF] text-white py-12 px-6 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">Ready to streamline workspace management?</h3>
            <p className="mb-6">Start using Atlas as an admin and take control of your team&apos;s environment today.</p>
            <a
              href="/signup"
              className="inline-block bg-white text-[#6C63FF] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
