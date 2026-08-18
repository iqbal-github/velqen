'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { products } from '@/app/data/products';
import { 
  ShoppingBag, ArrowRight, Star, Truck, Sparkles, X, 
  Plus, Minus, Lock, CheckCircle, ShieldCheck 
} from 'lucide-react';

export default function VelqenStore() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutNotice, setCheckoutNotice] = useState(false);

  const categories = [
    { name: "Nylon Crescents", tag: "Viral Fit", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80", link: "/products/1" },
    { name: "Shoulder & Totes", tag: "Everyday Carry", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80", link: "/products/2" },
    { name: "Crossbody Slings", tag: "Hands-Free", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80", link: "/products/3" },
    { name: "Belt Bags & Packs", tag: "Utility", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", link: "/products/4" }
  ];

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, change) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + change;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E241E] font-sans antialiased selection:bg-[#435334] selection:text-white">
      
      {/* 1. TOP MARQUEE */}
      <div className="bg-[#3A472E] text-[#FAF8F5] text-[12px] py-2 px-4 text-center font-medium tracking-wide flex justify-center items-center gap-6">
        <span>🇬🇧 UK Free Standard Delivery</span>
        <span className="opacity-40">•</span>
        <span>Effortless Everyday Silhouettes</span>
        <span className="opacity-40">•</span>
        <span>Dispatched via Fast UK Logistics</span>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EBE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold tracking-wider uppercase text-[#3A472E]">
            <a href="#crescents" className="hover:opacity-70 transition">Crescents</a>
            <a href="#totes" className="hover:opacity-70 transition">Totes</a>
            <a href="#slings" className="hover:opacity-70 transition">Slings</a>
            <a href="#philosophy" className="hover:opacity-70 transition">Our Vibe</a>
          </nav>

          <div className="text-center">
            <Link href="/" className="text-2xl sm:text-3xl font-black tracking-widest uppercase text-[#3A472E]">
              VELQEN
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#3A472E] border border-[#3A472E]/30 px-3 py-1.5 rounded-full hover:bg-[#3A472E] hover:text-white transition">
              <span>UK (GBP £)</span>
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#3A472E] text-[#FAF8F5] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#2D3824] transition shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Bag ({totalItems})</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#EFEAE2] rounded-3xl p-8 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-[#E3DDD3]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#FAF8F5] text-[#3A472E] border border-[#D5CDC0] px-3.5 py-1 rounded-full text-xs font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#62774F]" />
              New Season Carry Essentials
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#262F1F] tracking-tight leading-[1.1]">
              Effortless bags for everyday individuality.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#55634E] leading-relaxed">
              Designed in the UK. Ultra-lightweight nylon crescent shapes, versatile slings, and minimalist totes designed for daily expression without the markup.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#shop" className="px-7 py-3.5 bg-[#3A472E] hover:bg-[#262F1F] text-[#FAF8F5] font-bold rounded-full text-sm transition flex items-center gap-2">
                Explore The Drop <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#philosophy" className="px-7 py-3.5 bg-transparent hover:bg-[#FAF8F5] text-[#3A472E] border border-[#3A472E]/40 font-bold rounded-full text-sm transition">
                Why Velqen?
              </a>
            </div>
          </div>

          <Link href="/products/1" className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-sm block group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80" 
              alt="Velqen Crescent Nylon Bag" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#EBE5DC] flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-[#62774F] uppercase tracking-wider">The Crescent Silhouette</p>
                <p className="text-sm font-extrabold text-[#262F1F]">Cloud Nylon Series</p>
              </div>
              <span className="text-xs font-bold text-[#3A472E] underline">View Details &rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS (Clickable cards) */}
      <section id="shop" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#62774F]">The Velqen Lineup</span>
            <h2 className="text-3xl font-black text-[#262F1F] mt-1">Featured Carry</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-3.5 border border-[#EBE5DC] flex flex-col justify-between hover:shadow-md transition">
              
              {/* Clicking image/title goes to detail page */}
              <Link href={`/products/${item.id}`} className="block cursor-pointer">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-[#FAF8F5] mb-4">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                  <span className="absolute top-2.5 left-2.5 bg-[#3A472E] text-[#FAF8F5] text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#62774F] text-xs font-bold mb-1">
                    <Star className="w-3.5 h-3.5 fill-[#62774F]" />
                    <span>{item.rating}</span>
                    <span className="text-slate-400 font-normal">({item.reviews})</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#262F1F] line-clamp-1 hover:text-[#3A472E] transition">{item.name}</h3>
                  <p className="text-[11px] text-[#55634E] mt-0.5">{item.category}</p>
                </div>
              </Link>

              {/* Bottom Price & Add to Bag */}
              <div className="mt-4 pt-3 border-t border-[#F0EBE3] flex items-center justify-between">
                <span className="text-base font-extrabold text-[#262F1F]">£{item.price.toFixed(2)}</span>
                <button 
                  onClick={() => addToCart(item)}
                  className="px-3.5 py-1.5 bg-[#3A472E] hover:bg-[#262F1F] text-white text-xs font-bold rounded-lg transition"
                >
                  Add to Bag
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 5. SLIDE-OUT SHOPPING BAG */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div onClick={() => setIsCartOpen(false)} className="absolute inset-0 bg-[#1E241E]/50 backdrop-blur-sm" />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col border-l border-[#EBE5DC]">
              <div className="p-6 border-b border-[#EBE5DC] flex items-center justify-between bg-white">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#3A472E]" />
                  <h3 className="font-black text-lg text-[#262F1F]">Your Bag ({totalItems})</h3>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 rounded-full hover:bg-slate-100 transition">
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 bg-white rounded-xl border border-[#EBE5DC]">
                    <img src={item.images ? item.images[0] : item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1 flex flex-col justify-between">
                      <h4 className="font-bold text-xs text-[#262F1F]">{item.name}</h4>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-[#EBE5DC] rounded-lg bg-[#FAF8F5]">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-slate-200 rounded-l-lg"><Minus className="w-3 h-3" /></button>
                          <span className="px-2.5 text-xs font-bold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-slate-200 rounded-r-lg"><Plus className="w-3 h-3" /></button>
                        </div>
                        <span className="text-xs font-black text-[#262F1F]">£{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {cart.length > 0 && (
                <div className="p-6 bg-white border-t border-[#EBE5DC] space-y-4">
                  <div className="flex justify-between text-base font-black text-[#262F1F]">
                    <span>Subtotal</span>
                    <span>£{subtotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full py-3.5 bg-[#3A472E] hover:bg-[#262F1F] text-white text-sm font-bold rounded-xl transition flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4" /> Proceed to UK Checkout • £{subtotal.toFixed(2)}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 6. FOOTER */}
      <footer className="bg-[#2D3824] text-[#D5DDD0] py-14 text-xs border-t border-[#3A472E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-2xl font-black text-white tracking-widest uppercase">VELQEN</span>
          <p className="text-xs text-[#B4C2AD]">Everyday carry silhouettes engineered for modern youth lifestyle. Designed in the UK.</p>
          <p className="text-[11px] text-[#8F9E89]">© {new Date().getFullYear()} Velqen.co.uk. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}