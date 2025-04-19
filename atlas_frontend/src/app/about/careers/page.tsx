import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 text-gray-800 px-4 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#6C63FF] mb-4">Careers at Atlas</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Join a passionate team building the future of workspace management.
            </p>
          </div>

          {/* Why Work With Us */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#6C63FF] mb-2">Innovative Culture</h3>
              <p className="text-gray-600">
                We foster creativity, innovation, and experimentation. Your ideas are not just heard — they’re built.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#6C63FF] mb-2">Remote Friendly</h3>
              <p className="text-gray-600">
                Work from anywhere. We’re committed to flexibility, balance, and empowering great work.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#6C63FF] mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                Learn and grow with us. We support your career development through mentorship and learning stipends.
              </p>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#6C63FF] mb-6 text-center">Open Positions</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-white shadow-md rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-2">Frontend Developer</h4>
                <p className="text-gray-600 mb-2">Location: Remote | Type: Full-time</p>
                <p className="text-gray-500">
                  Work on scalable, interactive web apps that are redefining space booking experiences.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-2">Product Designer</h4>
                <p className="text-gray-600 mb-2">Location: Remote | Type: Full-time</p>
                <p className="text-gray-500">
                  Craft intuitive, user-first designs that make our product a joy to use.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-2">DevOps Engineer</h4>
                <p className="text-gray-600 mb-2">Location: Remote | Type: Contract</p>
                <p className="text-gray-500">
                  Ensure reliable, fast, and secure infrastructure that powers everything at Atlas.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#6C63FF] text-white text-center py-12 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">Ready to build the future with us?</h3>
            <p className="mb-6">We&apos;re always looking for passionate individuals to join our team.</p>
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
