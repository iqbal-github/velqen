'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/app/context/cart-context';

export default function CheckoutPage() {
  const { items, subtotal, clearCart, hydrated } = useCart();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  if (!hydrated) return null;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#16233D]">Your cart is empty</h1>
        <Link
          href="/products"
          className="mt-8 inline-block rounded-full bg-[#16233D] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0F1830]"
        >
          Shop now
        </Link>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const orderNumber = `VQ-${Date.now().toString().slice(-8)}`;
    clearCart();
    router.push(`/checkout/success?order=${orderNumber}`);
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <h1 className="text-3xl font-bold text-[#16233D]">Checkout</h1>

      <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <fieldset className="space-y-4">
            <legend className="text-sm font-semibold text-[#16233D]">Contact</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="fullName" label="Full name" required />
              <Field id="email" label="Email" type="email" required />
            </div>
            <Field id="phone" label="Phone" type="tel" required />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-sm font-semibold text-[#16233D]">Shipping address</legend>
            <Field id="address1" label="Address line 1" required />
            <Field id="address2" label="Address line 2 (optional)" />
            <div className="grid gap-4 sm:grid-cols-3">
              <Field id="city" label="City" required />
              <Field id="postcode" label="Postcode" required />
              <Field id="country" label="Country" defaultValue="United Kingdom" required />
            </div>
          </fieldset>

          <p className="text-xs text-[#5B6472]">
            Payment is not yet connected — placing an order here confirms your details without charging a
            card. A real checkout will process payment via a secure provider before going live.
          </p>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-[#16233D] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0F1830] disabled:opacity-60 sm:w-auto"
          >
            {submitting ? 'Placing order…' : 'Place order'}
          </button>
        </form>

        <div className="h-fit rounded-2xl border border-[#E4DFD1] bg-white p-6">
          <p className="text-sm font-semibold text-[#16233D]">Order summary</p>
          <div className="mt-4 space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm text-[#5B6472]">
                <span>{item.name} × {item.qty}</span>
                <span className="font-medium text-[#16233D]">£{(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between border-t border-[#E4DFD1] pt-4 text-sm font-semibold text-[#16233D]">
            <span>Subtotal</span>
            <span>£{subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ id, label, type = 'text', required = false, defaultValue }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-[#16233D]">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="mt-1 w-full rounded-lg border border-[#E4DFD1] bg-white px-4 py-2.5 text-sm text-[#16233D] outline-none focus:border-[#C1712F]"
      />
    </div>
  );
}
