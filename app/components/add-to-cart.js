'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Minus, Plus } from 'lucide-react';
import { useCart } from '@/app/context/cart-context';

export default function AddToCart({ product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border border-[#262D45] bg-[#161C2E]">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-[#F1EDE4]"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          <span className="w-8 text-center text-sm font-semibold text-[#F1EDE4]">{qty}</span>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-[#F1EDE4]"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="flex-1 rounded-full bg-[#F1EDE4] px-6 py-3 text-sm font-semibold text-[#0E1420] transition hover:bg-[#DCD5C4]"
        >
          {added ? 'Added to cart' : 'Add to cart'}
        </button>
      </div>

      {added && (
        <Link href="/cart" className="text-sm font-medium text-[#C1712F] underline underline-offset-2">
          View cart →
        </Link>
      )}
    </div>
  );
}
