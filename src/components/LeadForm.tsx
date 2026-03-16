'use client';

import { useState, FormEvent } from 'react';

interface LeadFormProps {
  variant?: 'default' | 'compact' | 'full';
  darkMode?: boolean;
  className?: string;
}

export default function LeadForm({ variant = 'default', darkMode = false, className = '' }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', address: '', message: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      setError('Something went wrong. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`${darkMode ? 'bg-green-900/50 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-6 text-center ${className}`}>
        <svg
          className={`w-12 h-12 ${darkMode ? 'text-green-400' : 'text-green-500'} mx-auto mb-4`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className={`text-xl font-bold ${darkMode ? 'text-green-300' : 'text-green-800'} mb-2`}>Thank You!</h3>
        <p className={darkMode ? 'text-green-200' : 'text-green-700'}>
          We&apos;ve received your information and will contact you within 24 hours with your cash offer.
        </p>
      </div>
    );
  }

  const isCompact = variant === 'compact';
  const isFull = variant === 'full';

  const labelClass = darkMode ? 'text-gray-200' : 'text-gray-700';
  const inputClass = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-colors text-gray-900 bg-white';
  const helperClass = darkMode ? 'text-gray-300' : 'text-gray-500';

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className={isFull ? 'grid md:grid-cols-2 gap-4' : 'space-y-4'}>
        <div>
          <label htmlFor="name" className={`block text-sm font-medium ${labelClass} mb-1`}>
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="phone" className={`block text-sm font-medium ${labelClass} mb-1`}>
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClass}
            placeholder="(254) 555-1234"
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className={`block text-sm font-medium ${labelClass} mb-1`}>
          Property Address *
        </label>
        <input
          type="text"
          id="address"
          required
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className={inputClass}
          placeholder="123 Main St, Killeen, TX 76541"
        />
      </div>

      {!isCompact && (
        <div>
          <label htmlFor="message" className={`block text-sm font-medium ${labelClass} mb-1`}>
            Tell Us About Your Situation (Optional)
          </label>
          <textarea
            id="message"
            rows={isFull ? 4 : 3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`${inputClass} resize-none`}
            placeholder="Any details about your property or timeline..."
          />
        </div>
      )}

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange hover:bg-orange-hover text-navy font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'GET MY OFFER'}
      </button>

      <p className={`text-xs ${helperClass} text-center`}>
        No obligation. No fees. We&apos;ll contact you within 24 hours.
      </p>
    </form>
  );
}
