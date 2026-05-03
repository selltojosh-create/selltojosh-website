'use client';

import { Suspense, useState, useId, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface LeadFormProps {
  variant?: 'default' | 'compact' | 'full';
  darkMode?: boolean;
  className?: string;
  submitText?: string;
}

export default function LeadForm(props: LeadFormProps) {
  return (
    <Suspense>
      <LeadFormInner {...props} />
    </Suspense>
  );
}

function LeadFormInner({ variant = 'default', darkMode = false, className = '', submitText = 'GET MY OFFER' }: LeadFormProps) {
  const router = useRouter();
  const id = useId();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const utmParams = {
    utm_source: searchParams.get('utm_source') || '',
    utm_medium: searchParams.get('utm_medium') || '',
    utm_campaign: searchParams.get('utm_campaign') || '',
    utm_content: searchParams.get('utm_content') || '',
    utm_term: searchParams.get('utm_term') || '',
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      let recaptchaToken: string | undefined;
      try {
        const grecaptcha = (window as unknown as { grecaptcha?: { ready: (cb: () => void) => void; execute: (key: string, opts: { action: string }) => Promise<string> } }).grecaptcha;
        if (grecaptcha && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
          recaptchaToken = await new Promise<string>((resolve) => {
            grecaptcha.ready(() => {
              grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, { action: 'submit_lead' }).then(resolve);
            });
          });
        }
      } catch {
        // reCAPTCHA not loaded — proceed without token
      }

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken, utmParams }),
      });

      if (response.ok) {
        setFormData({ name: '', phone: '', address: '', message: '' });
        const w = window as Window & { dataLayer?: Record<string, unknown>[] };
        w.dataLayer?.push({
          event: 'generate_lead',
          lead_source: 'website_form',
          ...(utmParams.utm_source && { utm_source: utmParams.utm_source }),
          ...(utmParams.utm_campaign && { utm_campaign: utmParams.utm_campaign }),
        });
        router.push('/thank-you');
        return;
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      setError('Something went wrong. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isCompact = variant === 'compact';
  const isFull = variant === 'full';

  const labelClass = darkMode ? 'text-gray-200' : 'text-gray-700';
  const inputClass = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-colors text-gray-900 bg-white';
  const helperClass = darkMode ? 'text-gray-300' : 'text-gray-500';

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className={isFull ? 'grid md:grid-cols-2 gap-4' : 'space-y-4'}>
        <div>
          <label htmlFor={`${id}-name`} className={`block text-sm font-medium ${labelClass} mb-1`}>
            Your Name *
          </label>
          <input
            type="text"
            id={`${id}-name`}
            required
            aria-required="true"
            aria-describedby={error ? `${id}-error` : undefined}
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor={`${id}-phone`} className={`block text-sm font-medium ${labelClass} mb-1`}>
            Phone Number *
          </label>
          <input
            type="tel"
            id={`${id}-phone`}
            required
            aria-required="true"
            aria-describedby={error ? `${id}-error` : undefined}
            inputMode="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClass}
            placeholder="(254) 555-1234"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-address`} className={`block text-sm font-medium ${labelClass} mb-1`}>
          Property Address *
        </label>
        <input
          type="text"
          id={`${id}-address`}
          required
          aria-required="true"
          aria-describedby={error ? `${id}-error` : undefined}
          autoComplete="street-address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className={inputClass}
          placeholder="123 Main St, Killeen, TX 76541"
        />
      </div>

      {!isCompact && (
        <div>
          <label htmlFor={`${id}-message`} className={`block text-sm font-medium ${labelClass} mb-1`}>
            Tell Us About Your Situation (Optional)
          </label>
          <textarea
            id={`${id}-message`}
            rows={isFull ? 4 : 3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`${inputClass} resize-none`}
            placeholder="Any details about your property or timeline..."
          />
        </div>
      )}

      <div id={`${id}-error`} aria-live="polite" aria-atomic="true">
        {error && (
          <p className={`${darkMode ? 'text-red-300' : 'text-red-600'} text-sm`} role="alert">{error}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange hover:bg-orange-hover text-navy font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : submitText}
      </button>

      <p className={`text-xs ${helperClass} text-center`}>
        No obligation. No fees. We&apos;ll contact you within 24 hours.
      </p>
    </form>
  );
}
