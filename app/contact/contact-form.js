'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('idle');
      setError("Something went wrong — please try again, or email us directly.");
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-[#E4DFD1] bg-[#F7F4EE] p-6 text-sm text-[#16233D]">
        Thanks — your message has been received. We&apos;ll get back to you as soon as we can.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-[#16233D]">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-[#E4DFD1] bg-white px-4 py-2.5 text-sm text-[#16233D] outline-none focus:border-[#C1712F]"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-[#16233D]">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-[#E4DFD1] bg-white px-4 py-2.5 text-sm text-[#16233D] outline-none focus:border-[#C1712F]"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-[#16233D]">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-lg border border-[#E4DFD1] bg-white px-4 py-2.5 text-sm text-[#16233D] outline-none focus:border-[#C1712F]"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-full bg-[#16233D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0F1830] disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
