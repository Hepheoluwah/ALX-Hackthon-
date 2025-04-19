import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const authFeatures = [
  {
    title: 'Secure Sign-In Options',
    description: 'Support for email/password, magic links, SSO (Single Sign-On), and 2FA out of the box.',
    icon: '🔐',
  },
  {
    title: 'Seamless Onboarding',
    description: 'New users can sign up and get started in seconds with a frictionless experience.',
    icon: '🚀',
  },
  {
    title: 'Role-Based Access Control',
    description: 'Define and manage user roles and permissions with precision for all workspace types.',
    icon: '🛡️',
  },
  {
    title: 'Session Management',
    description: 'Stay in control with automatic session expiration, device tracking, and login alerts.',
    icon: '🧭',
  },
];

export default function UserAuthenticationPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white text-gray-800 px-4 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#6C63FF] mb-4">
              User Authentication
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Atlas provides secure, scalable, and user-friendly authentication systems to protect your workspace and users.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {authFeatures.map((feature, index) => (
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
            <h3 className="text-2xl font-bold mb-3">Protect What Matters</h3>
            <p className="mb-6">
              Learn how to integrate Atlas authentication into your workspace or contact us for a security demo.
            </p>
            <a
              href="/about/contact"
              className="inline-block bg-white text-[#6C63FF] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Talk to Security Team
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
