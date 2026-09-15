'use client';

import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/app/context/cart-context';

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal, hydrated } = useCart();

  if (!hydrated) return null;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#16233D]">Your cart is empty</h1>
        <p className="mt-3 text-sm text-[#5B6472]">Nothing here yet.</p>
        <Link
          href="/product"
          className="mt-8 inline-block rounded-full bg-[#16233D] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0F1830]"
        >
          Shop the organiser
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <h1 className="text-3xl font-bold text-[#16233D]">Your cart</h1>

      <div className="mt-8 divide-y divide-[#E4DFD1] rounded-2xl border border-[#E4DFD1] bg-white">
        {items.map((item) => (
          <div key={item.id} className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
            <div>
              <p className="text-sm font-semibold text-[#16233D]">{item.name}</p>
              <p className="mt-1 text-sm text-[#5B6472]">£{item.price.toFixed(2)} each</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-full border border-[#E4DFD1]">
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center text-[#16233D]"
                  onClick={() => updateQty(item.id, item.qty - 1)}
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  <Minus size={14} />
                </button>
                <span className="w-6 text-center text-sm font-semibold text-[#16233D]">{item.qty}</span>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center text-[#16233D]"
                  onClick={() => updateQty(item.id, item.qty + 1)}
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  <Plus size={14} />
                </button>
              </div>

              <p className="w-20 text-right text-sm font-semibold text-[#16233D]">
                £{(item.price * item.qty).toFixed(2)}
              </p>

              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="text-[#5B6472] transition hover:text-red-600"
                aria-label={`Remove ${item.name}`}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-end gap-4">
        <p className="text-lg font-semibold text-[#16233D]">Subtotal: £{subtotal.toFixed(2)}</p>
        <Link
          href="/checkout"
          className="rounded-full bg-[#16233D] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0F1830]"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
