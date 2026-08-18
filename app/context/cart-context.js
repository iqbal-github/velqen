'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ShoppingBag, X, Plus, Minus, Lock, Truck, ShieldCheck } from 'lucide-react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

      {/* GLOBAL SLIDE-OUT CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          <div
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-[#1E241E]/50 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col border-l border-[#EBE5DC]">
              
              {/* Header */}
              <div className="p-6 border-b border-[#EBE5DC] flex items-center justify-between bg-white">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#3A472E]" />
                  <h3 className="font-black text-lg text-[#262F1F]">Your Bag ({totalItems})</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 transition"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              {/* Free UK Delivery Notice */}
              <div className="bg-[#EFEAE2] px-6 py-2.5 text-xs text-[#4E5C46] font-semibold flex items-center gap-2 border-b border-[#E3DDD3]">
                <Truck className="w-4 h-4 text-[#3A472E]" />
                <span>UK Standard Delivery Applied</span>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-16">
                    <ShoppingBag className="w-12 h-12 text-[#A2B09A] mx-auto mb-3" />
                    <p className="text-base font-bold text-[#262F1F]">Your bag is empty</p>
                    <p className="text-xs text-[#6F7F66] mt-1">Discover our effortless carry collection.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4 p-3 bg-white rounded-xl border border-[#EBE5DC]">
                      <img
                        src={item.images ? item.images[0] : item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover bg-[#FAF8F5]"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-xs text-[#262F1F] line-clamp-1">{item.name}</h4>
                          <p className="text-[11px] text-[#6F7F66]">£{item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-[#EBE5DC] rounded-lg bg-[#FAF8F5]">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 hover:bg-slate-200 rounded-l-lg transition"
                            >
                              <Minus className="w-3 h-3 text-slate-700" />
                            </button>
                            <span className="px-2.5 text-xs font-bold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 hover:bg-slate-200 rounded-r-lg transition"
                            >
                              <Plus className="w-3 h-3 text-slate-700" />
                            </button>
                          </div>
                          <span className="text-xs font-black text-[#262F1F]">
                            £{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="p-6 bg-white border-t border-[#EBE5DC] space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-slate-500 font-medium">
                      <span>UK Standard Delivery</span>
                      <span className="text-emerald-700 font-bold">FREE</span>
                    </div>
                    <div className="flex justify-between text-base font-black text-[#262F1F]">
                      <span>Subtotal</span>
                      <span>£{subtotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="w-full py-3.5 bg-[#3A472E] hover:bg-[#262F1F] text-white text-sm font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-lg">
                    <Lock className="w-4 h-4" /> Proceed to UK Checkout • £{subtotal.toFixed(2)}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                    <span>256-bit Encrypted Checkout • 30-Day Guarantee</span>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);