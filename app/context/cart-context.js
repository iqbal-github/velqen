'use client';

import React, { createContext, useContext, useState } from 'react';
import Link from 'next/link';
import { X, Check } from 'lucide-react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState(null);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setLastAddedProduct({ ...product, addedQuantity: quantity });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, change) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, isCartOpen, setIsCartOpen, addToCart, updateQuantity, totalItems, subtotal }}
    >
      {children}

      {/* NEXT.CO.UK STYLE MINI-BAG DROPDOWN / POPOVER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          {/* Subtle Transparent Backdrop */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/20 backdrop-blur-[1px] transition-opacity"
          />

          {/* Top-Right Dropdown Modal (Exact Next UK Style) */}
          <div className="absolute top-20 right-4 sm:right-10 w-[92vw] max-w-[400px] bg-white rounded-none border border-neutral-200 shadow-2xl z-50">
            
            {/* Header: "X ITEMS IN BAG" */}
            <div className="px-5 py-4 border-b border-neutral-100 flex items-center justify-between">
              <span className="font-extrabold text-xs tracking-wider uppercase text-neutral-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {totalItems} {totalItems === 1 ? 'ITEM' : 'ITEMS'} IN BAG
              </span>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-neutral-400 hover:text-neutral-900 transition p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Product Item List */}
            <div className="p-5 max-h-[320px] overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-6 text-xs text-neutral-500">
                  Your bag is currently empty.
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-start pb-4 border-b border-neutral-100 last:border-0 last:pb-0">
                    
                    {/* Square Thumbnail */}
                    <div className="w-20 h-20 bg-neutral-100 flex-shrink-0 overflow-hidden border border-neutral-200">
                      <img
                        src={item.images ? item.images[0] : item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Middle Info + Right Price */}
                    <div className="flex-1 flex justify-between gap-2">
                      <div className="space-y-0.5">
                        <h4 className="font-bold text-xs text-neutral-900 leading-snug line-clamp-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                          {item.name}
                        </h4>
                        <p className="text-xs text-neutral-500">Size: ONE</p>
                        <p className="text-xs text-neutral-500">Quantity: {item.quantity}</p>
                        <p className="text-xs font-semibold text-[#2e7d32] pt-0.5">In Stock</p>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <span className="font-bold text-xs text-neutral-900">
                          £{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                  </div>
                ))
              )}
            </div>

            {/* Total & Delivery Summary */}
            {cart.length > 0 && (
              <div className="px-5 py-4 border-t border-neutral-100 bg-neutral-50/50 space-y-3">
                
                <div className="flex justify-between items-baseline">
                  <span className="font-extrabold text-sm text-neutral-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Total
                  </span>
                  <span className="font-extrabold text-base text-neutral-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    £{subtotal.toFixed(2)}
                  </span>
                </div>

                <p className="text-[11px] text-neutral-500">
                  Excluding UK Standard Delivery (Normally £4.95)
                </p>

                {/* Bottom Two Buttons (Next UK Format) */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full py-3 bg-white hover:bg-neutral-50 text-neutral-900 text-xs font-extrabold uppercase tracking-wider border border-neutral-900 transition text-center"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    View Bag
                  </button>

                  <button
                    onClick={() => alert("Proceeding to UK Checkout...")}
                    className="w-full py-3 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-extrabold uppercase tracking-wider transition text-center"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Checkout
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      )}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);