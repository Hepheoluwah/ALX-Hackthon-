import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-purple-50 via-white to-indigo-50 text-gray-800 px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center mb-8 text-indigo-600">Security</h1>
          <p className="text-lg leading-relaxed text-center mb-6">
            At Atlas, we prioritize the security of your data. Our platform is built with
            state-of-the-art security measures to ensure your information is safe and secure.
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li className="text-lg">End-to-end encryption for all communications</li>
            <li className="text-lg">Regular security audits and updates</li>
            <li className="text-lg">Compliance with industry standards</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}