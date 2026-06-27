'use client';

import emailjs from '@emailjs/browser';
import { FormEvent, useMemo, useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function EmailContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const config = useMemo(
    () => ({
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
    }),
    []
  );

  const isConfigured = Boolean(config.serviceId && config.templateId && config.publicKey);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isConfigured) {
      setStatus('error');
      setMessage('EmailJS is not configured yet. Add the public keys in your environment variables.');
      return;
    }

    const form = event.currentTarget;

    try {
      setStatus('sending');
      setMessage('Sending your message...');

      await emailjs.sendForm(config.serviceId, config.templateId, form, {
        publicKey: config.publicKey,
      });

      form.reset();
      setStatus('success');
      setMessage('Your message has been sent successfully.');
    } catch {
      setStatus('error');
      setMessage('Something went wrong while sending. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-3xl rounded-[2rem] border border-[#F5A3C7]/40 bg-neutral-950/60 p-6 shadow-[0_0_40px_rgba(236,72,153,0.08)] backdrop-blur sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-left text-white/80">
          <span className="text-sm uppercase tracking-[0.2em]">Your Name</span>
          <input
            name="from_name"
            type="text"
            required
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[#F5A3C7]"
            placeholder="Your beautiful name"
          />
        </label>

        <label className="flex flex-col gap-2 text-left text-white/80">
          <span className="text-sm uppercase tracking-[0.2em]">Your Title</span>
          <input
            name="title"
            type="text"
            required
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[#F5A3C7]"
            placeholder="A sweet title for your note"
          />
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-2 text-left text-white/80">
        <span className="text-sm uppercase tracking-[0.2em]">Your Description</span>
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[#F5A3C7]"
          placeholder="Write your description here..."
        />
      </label>

      <input type="hidden" name="to_name" value="Sadaf" />

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-full bg-[#F5A3C7] px-6 py-3 text-base font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        <p
          className={`text-sm ${
            status === 'error'
              ? 'text-rose-300'
              : status === 'success'
                ? 'text-emerald-300'
                : 'text-white/60'
          }`}
        >
          {message || 'This form sends via EmailJS once your public keys are configured.'}
        </p>
      </div>
    </form>
  );
}
