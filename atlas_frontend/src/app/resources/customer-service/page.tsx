import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const serviceAreas = [
  {
    title: 'Account Support',
    description: 'Need help with logging in, profile updates, or settings? We’ve got you covered.',
    link: '#',
  },
  {
    title: 'Booking Issues',
    description: 'Having trouble booking a space or managing a reservation? Let us assist.',
    link: '#',
  },
  {
    title: 'Hosting Support',
    description: 'Questions about listing your space or managing guests? We’re here to help.',
    link: '#',
  },
  {
    title: 'Payment Questions',
    description: 'Get support for billing, payouts, and refund-related inquiries.',
    link: '#',
  },
];

export default function CustomerServicePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white text-gray-800 px-4 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#6C63FF] mb-4">Customer Service</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Need assistance? Our Customer Service team is here to help with any issues or inquiries.
            </p>
          </div>

          {/* Support Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {serviceAreas.map((area, index) => (
              <a
                key={index}
                href={area.link}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-200 transition"
              >
                <h3 className="text-xl font-semibold text-[#6C63FF] mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </a>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center bg-[#6C63FF] text-white py-12 px-6 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">Still need help?</h3>
            <p className="mb-6">Reach out to our dedicated support team — we are just a message away.</p>
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
