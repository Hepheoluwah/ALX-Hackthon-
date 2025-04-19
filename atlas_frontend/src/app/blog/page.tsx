import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-pink-50 via-white to-purple-50 text-gray-800 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center mb-8 text-[#6C63FF]">Blog</h1>
          <p className="text-lg leading-relaxed text-center mb-6">
            Welcome to the Atlas Blog! Here, we share insights, updates, and stories about
            workspace management and productivity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-[#6C63FF]">How to Optimize Your Workspace</h2>
              <p className="text-black mt-2">Learn the best practices for creating a productive and efficient workspace.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-[#6C63FF]">The Future of Workspace Management</h2>
              <p className="text-black mt-2">Discover the trends shaping the future of how we work and collaborate.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-[#6C63FF]">How to Optimize Your Workspace</h2>
              <p className="text-black mt-2">Learn the best practices for creating a productive and efficient workspace.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-[#6C63FF]">The Future of Workspace Management</h2>
              <p className="text-black mt-2">Discover the trends shaping the future of how we work and collaborate.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-[#6C63FF]">How to Optimize Your Workspace</h2>
              <p className="text-black mt-2">Learn the best practices for creating a productive and efficient workspace.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-[#6C63FF]">The Future of Workspace Management</h2>
              <p className="text-black mt-2">Discover the trends shaping the future of how we work and collaborate.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}