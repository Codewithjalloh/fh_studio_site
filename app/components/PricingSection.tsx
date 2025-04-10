'use client';

import { useState } from 'react';
import ContactFormModal from './ContactFormModal';

const tiers = [
  {
    name: 'Basic',
    price: '£1,000',
    description: 'Perfect for small businesses and startups',
    features: [
      'Basic website development',
      'Mobile-responsive design',
      '5 pages included',
      'Basic SEO setup',
      'Contact form integration',
      'Email support'
    ],
  },
  {
    name: 'Professional',
    price: '£7,000',
    description: 'Ideal for growing businesses',
    features: [
      'Custom web application',
      'Advanced UI/UX design',
      'Up to 10 pages',
      'Advanced SEO optimization',
      'Social media integration',
      'Analytics setup',
      'Priority support',
      '3 months maintenance'
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with complex needs',
    features: [
      'Full-scale digital solution',
      'Custom feature development',
      'Unlimited pages',
      'Advanced security features',
      'API integration',
      '24/7 support',
      'Dedicated project manager',
      '12 months maintenance',
      'Training sessions'
    ],
  },
];

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-50 py-16" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Choose the Right Plan for Your Business
          </p>
          <p className="mt-4 text-lg text-gray-500">
            We offer flexible pricing options to suit your needs. Contact us for a custom quote.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-2xl leading-6 font-semibold text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                </p>
                <button
                  onClick={() => handlePlanSelect(tier.name)}
                  className="mt-8 block w-full bg-indigo-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-700"
                >
                  Get Started
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-semibold text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan}
      />
    </div>
  );
};

export default PricingSection; 