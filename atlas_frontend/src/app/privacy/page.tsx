import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-green-50 via-white to-blue-50 text-gray-800 px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center mb-8 text-[#6C63FF]">Privacy Policy</h1>
          <p className="text-lg leading-relaxed text-center mb-6">
            Your privacy is important to us. This Privacy Policy outlines how we collect, use,
            and protect your personal information.
          </p>
          <h2 className="text-3xl font-bold mt-8 mb-4 text-[#6C63FF]">Information We Collect</h2>
          <p className="text-black mb-4">
            We collect information to provide better services to our users. This includes:
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li className="text-lg">Personal information you provide to us</li>
            <li className="text-lg">Usage data from your interactions with our platform</li>
          </ul>
          <h2 className="text-3xl font-bold mt-8 mb-4 text-[#6C63FF]">How We Use Your Information</h2>
          <p className="text-black">
            We use your information to improve our services, communicate with you, and ensure
            the security of our platform.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}