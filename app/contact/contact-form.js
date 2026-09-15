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
      <div className="rounded-2xl border border-[#262D45] bg-[#161C2E] p-6 text-sm text-[#F1EDE4]">
        Thanks — your message has been received. We&apos;ll get back to you as soon as we can.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-[#F1EDE4]">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-[#262D45] bg-[#161C2E] px-4 py-2.5 text-sm text-[#F1EDE4] outline-none focus:border-[#C1712F]"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-[#F1EDE4]">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-[#262D45] bg-[#161C2E] px-4 py-2.5 text-sm text-[#F1EDE4] outline-none focus:border-[#C1712F]"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-[#F1EDE4]">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-lg border border-[#262D45] bg-[#161C2E] px-4 py-2.5 text-sm text-[#F1EDE4] outline-none focus:border-[#C1712F]"
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-full bg-[#F1EDE4] px-6 py-3 text-sm font-semibold text-[#0E1420] transition hover:bg-[#DCD5C4] disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
