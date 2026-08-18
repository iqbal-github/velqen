'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/app/context/cart-context';
import { ShoppingBag, ArrowLeft, Trash2, ShieldCheck, Truck, Plus, Minus } from 'lucide-react';

export default function ShoppingBagPage() {
  const { cart, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#151C12]">
      
      {/* 1. TOP BANNER */}
      <div className="bg-[#283621] text-[#EFE7D3] text-xs py-2 px-4 text-center font-medium tracking-wide">
        🇬🇧 Official UK Store • Free Standard UK Delivery on all orders
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-30 bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#E2D8C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#283621]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            VELQEN<span className="text-[#849B72]">.</span>
          </Link>
          
          <Link href="/" className="flex items-center gap-1.5 text-xs font-bold text-[#283621] hover:text-[#5B7349] uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </header>

      {/* 3. MAIN SHOPPING BAG CONTENT (Next.co.uk Layout) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page Title */}
        <h1 className="text-xl sm:text-2xl font-black text-center uppercase tracking-widest text-[#283621] mb-10" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Shopping Bag
        </h1>

        {cart.length === 0 ? (
          <div className="bg-[#FAF6EE] rounded-3xl p-12 text-center border border-[#DCD0B4] max-w-lg mx-auto space-y-4">
            <ShoppingBag className="w-12 h-12 text-[#7A7360] mx-auto opacity-50" />
            <h2 className="text-lg font-bold text-[#283621]" style={{ fontFamily: "'Outfit', sans-serif" }}>Your shopping bag is empty</h2>
            <p className="text-xs text-[#5B6D51]">Explore our collection of effortless everyday silhouettes.</p>
            <Link
              href="/"
              className="inline-block mt-2 px-8 py-3.5 bg-[#283621] text-[#F4EFE6] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#1A2416] transition"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT COLUMN: PRODUCT LIST (8 COLS) */}
            <div className="lg:col-span-8 bg-[#FAF6EE] rounded-2xl p-6 sm:p-8 border border-[#DCD0B4] shadow-sm space-y-6">
              
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-6 pb-6 border-b border-[#E2D8C3] last:border-0 last:pb-0 items-start">
                  
                  {/* Square Product Image */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#E2D8C3] rounded-xl overflow-hidden flex-shrink-0 border border-[#D5C9A6]">
                    <img
                      src={item.images ? item.images[0] : item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details & Actions */}
                  <div className="flex-1 flex flex-col justify-between w-full min-h-[120px]">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-extrabold text-sm sm:text-base text-[#283621] leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            {item.name}
                          </h3>
                          <p className="text-xs font-semibold text-[#2e7d32] mt-0.5">In Stock</p>
                        </div>
                        <div className="text-right">
                          <span className="font-black text-sm sm:text-base text-[#283621]">
                            £{(item.price * item.quantity).toFixed(2)}
                          </span>
                          <span className="block text-[11px] text-[#7A7360] font-mono mt-0.5">
                            {item.itemCode || 'VQ-896-01'}
                          </span>
                        </div>
                      </div>

                      {/* Size & Quantity Selectors (Next UK Style) */}
                      <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-[#7A7360]">Size</span>
                          <span className="px-3 py-1.5 bg-[#F4EFE6] border border-[#D5C9A6] rounded-md text-xs font-bold text-[#283621]">
                            ONE
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs text-[#7A7360]">Quantity</span>
                          <div className="flex items-center border border-[#D5C9A6] rounded-md bg-[#F4EFE6]">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-2.5 py-1 text-slate-700 hover:text-black font-bold text-sm"
                            >
                              -
                            </button>
                            <span className="px-3 text-xs font-black text-[#283621]">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-2.5 py-1 text-slate-700 hover:text-black font-bold text-sm"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Links (Next UK: Save for Later | Remove) */}
                    <div className="flex items-center gap-4 mt-5 pt-3 border-t border-[#EAE2CE] text-xs">
                      <button className="text-[#283621] font-semibold underline underline-offset-2 hover:text-[#5B7349] transition">
                        Save For Later
                      </button>
                      <button
                        onClick={() => updateQuantity(item.id, -item.quantity)}
                        className="text-[#283621] font-semibold underline underline-offset-2 hover:text-rose-700 transition"
                      >
                        Remove
                      </button>
                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* RIGHT COLUMN: ORDER SUMMARY & CHECKOUT (4 COLS) */}
            <div className="lg:col-span-4 bg-[#FAF6EE] rounded-2xl p-6 sm:p-8 border border-[#DCD0B4] shadow-sm space-y-6">
              
              <div className="flex justify-between items-baseline border-b border-[#E2D8C3] pb-4">
                <span className="font-extrabold text-base text-[#283621]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Total:
                </span>
                <span className="font-black text-2xl text-[#283621]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  £{subtotal.toFixed(2)}
                </span>
              </div>

              {/* Delivery Breakdown (Next UK Format) */}
              <div className="space-y-2 text-xs text-[#5B6D51]">
                <p>Excluding UK Standard Delivery (Normally £0.00)</p>
                <p className="font-semibold text-[#283621]">FREE Delivery to UK (Subject to Availability)</p>
                <p className="font-bold text-[#2e7d32]">FREE Delivery with VELQEN UK Dispatched</p>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => alert("Proceeding to Secure UK Checkout...")}
                className="w-full py-4 bg-[#283621] hover:bg-[#1A2416] text-[#F4EFE6] text-xs font-black uppercase tracking-widest rounded-xl transition shadow-lg text-center"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                CHECKOUT
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#7A7360] pt-2">
                <ShieldCheck className="w-4 h-4 text-[#283621]" />
                <span>256-Bit Encrypted UK Checkout</span>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* 4. FOOTER */}
      <footer className="bg-[#202C1B] text-[#D0C7B0] py-10 text-xs border-t border-[#2E3D27] text-center mt-20">
        <p>© {new Date().getFullYear()} Velqen.co.uk. All rights reserved.</p>
      </footer>

    </div>
  );
}