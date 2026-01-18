'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function WorkWithUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    industry: '',
    budget: '',
    timeline: '',
    services: [] as string[],
    description: '',
    referralSource: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'AI Strategy Consulting',
    'Custom Model Development',
    'Data Engineering',
    'Mobile App Development',
    'Website Development',
    'Business Consultancy'
  ];

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/work-with-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        companySize: '',
        industry: '',
        budget: '',
        timeline: '',
        services: [],
        description: '',
        referralSource: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-light text-slate-900">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="text-primary hover:text-blue-700 font-semibold text-sm mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 text-slate-900">
            Work with Us
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Ready to transform your business with custom AI solutions? Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700">Full Name *</span>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700">Email Address *</span>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </label>
            </div>

            {/* Phone and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700">Phone Number</span>
                <input
                  type="tel"
                  className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="+44 20 1234 5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700">Company *</span>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </label>
            </div>

            {/* Company Size and Industry */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700">Company Size</span>
                <select
                  className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none transition-all"
                  value={formData.companySize}
                  onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700">Industry</span>
                <select
                  className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none transition-all"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                >
                  <option value="">Select industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Retail">Retail</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Education">Education</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Media & Entertainment">Media & Entertainment</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>

            {/* Budget and Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700">Budget Range *</span>
                <select
                  required
                  className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none transition-all"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                >
                  <option value="">Select budget range</option>
                  <option value="5-25k">$5k - $25k</option>
                  <option value="25-50k">$25k - $50k</option>
                  <option value="50-150k">$50k - $150k</option>
                  <option value="150k+">$150k+</option>
                  <option value="custom">Custom/To be discussed</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700">Project Timeline</span>
                <select
                  className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none transition-all"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP / Urgent</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6-12months">6-12 months</option>
                  <option value="12months+">12+ months</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </label>
            </div>

            {/* Services Selection */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-slate-700">Which services are you interested in? *</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary focus:ring-2"
                    />
                    <span className="text-sm text-slate-700 font-medium">{service}</span>
                  </label>
                ))}
              </div>
              {formData.services.length === 0 && (
                <p className="text-xs text-red-500 mt-1">Please select at least one service</p>
              )}
            </div>

            {/* Description */}
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Project Description *</span>
              <textarea
                required
                className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none transition-all"
                placeholder="Tell us about your project, goals, technical requirements, and any specific challenges you're facing..."
                rows={6}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              ></textarea>
            </label>

            {/* How did you hear about us */}
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">How did you hear about us?</span>
              <select
                className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none transition-all"
                value={formData.referralSource}
                onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
              >
                <option value="">Select an option</option>
                <option value="search">Google Search</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral / Word of Mouth</option>
                <option value="linkedin">LinkedIn</option>
                <option value="portfolio">Saw our portfolio</option>
                <option value="event">Industry Event / Conference</option>
                <option value="other">Other</option>
              </select>
            </label>

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                <p className="text-sm font-semibold text-green-800">
                  ✓ Thank you! We've received your inquiry and will get back to you within 24 hours.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="text-sm font-semibold text-red-800">
                  {errorMessage || 'Something went wrong. Please try again or contact us directly at info@fieldhousestudio.com'}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || formData.services.length === 0}
              className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-md shadow-primary/10 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Inquiry
                  <span className="material-symbols-outlined text-sm">send</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <h3 className="text-xl font-bold text-navy mb-4">What happens next?</h3>
          <ol className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">1</span>
              <span>We'll review your inquiry within 24 hours</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">2</span>
              <span>Our team will reach out to schedule a consultation call</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">3</span>
              <span>We'll provide a detailed proposal tailored to your needs</span>
            </li>
          </ol>
        </div>
      </main>
      <Footer />
    </div>
  );
}
