import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 text-gray-800 px-4 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#6C63FF] mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Got questions, feedback, or just want to say hi? We’d love to hear from you.
            </p>
          </div>

          {/* Contact Form + Info */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form className="bg-white rounded-2xl shadow-md p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#6C63FF] focus:border-[#6C63FF] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#6C63FF] focus:border-[#6C63FF] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  placeholder="Your message"
                  rows={5}
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#6C63FF] focus:border-[#6C63FF] outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#6C63FF] text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-600 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#6C63FF] mb-2">Email Us</h3>
                <p className="text-gray-600">support@atlasworkspaces.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#6C63FF] mb-2">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#6C63FF] mb-2">Our Office</h3>
                <p className="text-gray-600">
                  123 Atlas Street, Remote City,<br /> Anywhere, World
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#6C63FF] mb-2">Follow Us</h3>
                <div className="flex space-x-4 text-[#6C63FF] text-2xl">
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Optional CTA */}
          <div className="mt-20 bg-[#6C63FF] text-white text-center py-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">We&apos;re here to help!</h3>
            <p>Whether it&apos;s support or partnerships — reach out, and we&apos;ll respond swiftly.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
