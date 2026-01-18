'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact-inquiry', {
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
        company: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-900">
        <span className="material-symbols-outlined text-primary">edit_note</span>
        Project Inquiry
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-slate-700">Full Name</span>
            <input
              type="text"
              className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-slate-700">Email Address</span>
            <input
              type="email"
              className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-slate-700">Company</span>
            <input
              type="text"
              className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              placeholder="AI Corp"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-slate-700">Budget Range</span>
            <select
              className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none transition-all"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            >
              <option value="">Select range</option>
              <option value="10-50k">$10k - $50k</option>
              <option value="50-150k">$50k - $150k</option>
              <option value="150k+">$150k+</option>
            </select>
          </label>
        </div>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-slate-700">Tell us about your AI use case</span>
          <textarea
            className="w-full rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none transition-all"
            placeholder="Describe your vision, technical requirements, or specific challenges..."
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </label>
        {/* Status Messages */}
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
              {errorMessage || 'Something went wrong. Please try again or contact us directly.'}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
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
  );
};

export default ContactForm;
