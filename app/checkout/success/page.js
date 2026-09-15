'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';

function SuccessContent() {
  const params = useSearchParams();
  const order = params.get('order');

  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <CheckCircle2 className="mx-auto text-[#C1712F]" size={48} />
      <h1 className="mt-6 text-3xl font-bold text-[#F1EDE4]">Order received</h1>
      {order && <p className="mt-2 text-sm text-[#98A2B8]">Reference: {order}</p>}
      <p className="mt-4 text-sm text-[#98A2B8]">
        Thanks for your order. We&apos;ll be in touch with confirmation details.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-[#F1EDE4] px-7 py-3 text-sm font-semibold text-[#0E1420] transition hover:bg-[#DCD5C4]"
      >
        Back to home
      </Link>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessContent />
    </Suspense>
  );
}
