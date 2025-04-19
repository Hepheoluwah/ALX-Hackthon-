import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const plans = [
  {
    name: 'Basic',
    price: '$10',
    description: 'Perfect for small teams just getting started.',
    features: ['1 Workspace', 'Up to 5 Users', 'Basic Support'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$30',
    description: 'Ideal for growing teams with advanced needs.',
    features: ['5 Workspaces', 'Up to 25 Users', 'Priority Support', 'Analytics Dashboard'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Custom solutions for large organizations.',
    features: ['Unlimited Workspaces', 'Unlimited Users', 'Dedicated Account Manager', 'Custom Integrations'],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-[#6C63FF]">Flexible Pricing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you&apos;re a startup or an enterprise, Atlas has a plan for you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-3xl shadow-lg border transition-all duration-300 ${
                plan.highlight
                  ? 'border-[#6C63FF] bg-white scale-105 z-10'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 right-4 bg-[#6C63FF] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold text-[#6C63FF] mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
              <p className="text-4xl font-bold mb-6">
                {plan.price === 'Custom' ? (
                  <span>Contact Us</span>
                ) : (
                  <>
                    {plan.price}
                    <span className="text-base font-medium text-gray-500">/month</span>
                  </>
                )}
              </p>
              <ul className="text-left space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-[#6C63FF] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#6C63FF] text-white py-2 rounded-xl font-medium hover:bg-[#5b52e0] transition">
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-24 text-center bg-[#6C63FF] text-white py-12 rounded-2xl px-6 max-w-5xl mx-auto shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Need help choosing a plan?</h2>
          <p className="mb-6 text-lg">Let our team help you find the right solution for your needs.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#6C63FF] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
