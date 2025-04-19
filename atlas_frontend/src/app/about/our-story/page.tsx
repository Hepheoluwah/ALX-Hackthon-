import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

export default function OurStoryPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 text-gray-800 px-4 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#6C63FF] mb-4">Our Story</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Discover the journey of Atlas — from a simple idea to a powerful platform transforming workspace rentals.
            </p>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-[#6C63FF] mb-10">Our Journey</h2>
            <div className="space-y-10 relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-1 before:bg-[#6C63FF]/30">
              {[
                {
                  year: '2021',
                  title: 'The Spark',
                  desc: 'The idea for Atlas was born — a solution to the fragmented, outdated experience of finding and booking flexible workspaces.',
                },
                {
                  year: '2022',
                  title: 'Product Launch',
                  desc: 'We launched our MVP and onboarded our first customers. The feedback was clear: there’s a real need for this.',
                },
                {
                  year: '2023',
                  title: 'Scaling Up',
                  desc: 'We expanded across multiple cities, added mobile support, and refined our experience based on user insights.',
                },
                {
                  year: '2024',
                  title: 'Today & Beyond',
                  desc: 'We’re building smarter features, empowering hosts and renters, and preparing for global reach.',
                },
              ].map((event, i) => (
                <div
                  key={i}
                  className={`relative w-full md:w-1/2 px-6 py-4 ${
                    i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto md:text-right'
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-[#6C63FF]">
                    <h3 className="text-xl font-bold text-[#6C63FF]">{event.year}</h3>
                    <h4 className="text-lg font-semibold mb-1">{event.title}</h4>
                    <p className="text-gray-600">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#6C63FF] mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg mb-6">
              To simplify access to flexible workspaces and empower both space providers and professionals to thrive in a connected, hybrid world.
            </p>

            <h2 className="text-3xl font-bold text-[#6C63FF] mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg">
              To become the most trusted platform for workspace discovery, collaboration, and growth.
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-[#6C63FF] mb-10">What We Believe In</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Customer First',
                  desc: 'We listen, learn, and build with our users at the center of everything.',
                },
                {
                  title: 'Transparency',
                  desc: 'Open communication and trust form the foundation of how we work.',
                },
                {
                  title: 'Innovation',
                  desc: 'We embrace change and constantly seek better ways to serve and grow.',
                },
              ].map((value, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#6C63FF] mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#6C63FF] text-white text-center py-12 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">We’re just getting started.</h3>
            <p className="mb-6">Follow our journey or join us in shaping the future of workspaces.</p>
            <a
              href="/about/careers"
              className="inline-block bg-white text-[#6C63FF] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              View Careers
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
