import React from 'react';
import { ShoppingBag, ArrowRight, Star, Truck, Sparkles, Heart, ShieldCheck, Instagram } from 'lucide-react';

export default function VelqenStore() {
  const categories = [
    { name: "Nylon Crescents", tag: "Viral Fit", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80" },
    { name: "Shoulder & Totes", tag: "Everyday Carry", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80" },
    { name: "Crossbody Slings", tag: "Hands-Free", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80" },
    { name: "Belt Bags & Packs", tag: "Utility", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80" }
  ];

  const products = [
    {
      id: 1,
      name: "The Cloud Crescent Nylon Bag",
      category: "Nylon Crescent Shapes",
      price: "£24.00",
      badge: "Trending in UK",
      rating: 4.9,
      reviews: 84,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Minimalist Utility Shoulder Tote",
      category: "Shoulder Bags / Totes",
      price: "£32.00",
      badge: "Staff Pick",
      rating: 4.8,
      reviews: 62,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Urban Modular Crossbody Sling",
      category: "Crossbody Slings",
      price: "£28.00",
      badge: "Fast Dispatch",
      rating: 5.0,
      reviews: 110,
      image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Everyday Ergonomic Belt Pack",
      category: "Belt Bags",
      price: "£22.00",
      badge: "Essential",
      rating: 4.9,
      reviews: 47,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E241E] font-sans antialiased selection:bg-[#435334] selection:text-white">
      
      {/* TOP BAR */}
      <div className="bg-[#3A472E] text-[#FAF8F5] text-[12px] py-2 px-4 text-center font-medium tracking-wide flex justify-center items-center gap-6">
        <span>🇬🇧 UK Free Standard Delivery</span>
        <span className="opacity-40">•</span>
        <span>Effortless Everyday Silhouettes</span>
        <span className="opacity-40">•</span>
        <span>Dispatched via Fast UK Logistics</span>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EBE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold tracking-wider uppercase text-[#3A472E]">
            <a href="#crescents" className="hover:opacity-70 transition">Crescents</a>
            <a href="#totes" className="hover:opacity-70 transition">Totes</a>
            <a href="#slings" className="hover:opacity-70 transition">Slings</a>
            <a href="#philosophy" className="hover:opacity-70 transition">Our Vibe</a>
          </nav>

          <div className="text-center">
            <a href="#" className="text-2xl sm:text-3xl font-black tracking-widest uppercase text-[#3A472E]">
              VELQEN
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#3A472E] border border-[#3A472E]/30 px-3 py-1.5 rounded-full hover:bg-[#3A472E] hover:text-white transition">
              <span>UK (GBP £)</span>
            </button>
            <button className="flex items-center gap-2 bg-[#3A472E] text-[#FAF8F5] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#2D3824] transition shadow-sm">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Bag (0)</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
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

          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80" 
              alt="Velqen Crescent Nylon Bag" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#EBE5DC] flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-[#62774F] uppercase tracking-wider">The Crescent Silhouette</p>
                <p className="text-sm font-extrabold text-[#262F1F]">Cloud Nylon Series</p>
              </div>
              <span className="text-sm font-black text-[#3A472E]">£24.00</span>
            </div>
          </div>

        </div>
      </section>

      {/* VALUE PILLARS */}
      <section id="philosophy" className="py-12 border-y border-[#EBE5DC] bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="p-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#62774F]">01 / Design</span>
              <h3 className="text-lg font-bold text-[#262F1F] mt-1">Effortless & Expressive</h3>
              <p className="text-xs text-[#55634E] mt-2 leading-relaxed">
                Clean silhouettes designed to blend seamlessly with streetwear, casuals, or smart everyday wear.
              </p>
            </div>
            <div className="p-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#62774F]">02 / Identity</span>
              <h3 className="text-lg font-bold text-[#262F1F] mt-1">Individuality & Lifestyle</h3>
              <p className="text-xs text-[#55634E] mt-2 leading-relaxed">
                Lightweight, multi-pocket, and weather-resistant carry designed around real daily routines.
              </p>
            </div>
            <div className="p-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#62774F]">03 / Value</span>
              <h3 className="text-lg font-bold text-[#262F1F] mt-1">Optimized Spending</h3>
              <p className="text-xs text-[#55634E] mt-2 leading-relaxed">
                Premium materials and durable hardware without the inflated designer price tag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP CATEGORIES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black text-[#262F1F] mb-8">Shop by Silhouette</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden bg-[#EBE5DC] aspect-[4/5] cursor-pointer">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262F1F]/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D1E0C5]">{cat.tag}</span>
                <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">{cat.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="shop" className="py-16 bg-[#FAF8F5] border-t border-[#EBE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#62774F]">The Velqen Lineup</span>
              <h2 className="text-3xl font-black text-[#262F1F] mt-1">Featured Carry</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-3.5 border border-[#EBE5DC] flex flex-col justify-between hover:shadow-md transition">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-[#FAF8F5] mb-4">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
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
                  <h3 className="font-bold text-sm text-[#262F1F] line-clamp-1">{item.name}</h3>
                  <p className="text-[11px] text-[#55634E] mt-0.5">{item.category}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0EBE3] flex items-center justify-between">
                  <span className="text-base font-extrabold text-[#262F1F]">{item.price}</span>
                  <button className="px-3.5 py-1.5 bg-[#3A472E] hover:bg-[#262F1F] text-white text-xs font-bold rounded-lg transition flex items-center gap-1">
                    Add to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2D3824] text-[#D5DDD0] py-14 text-xs border-t border-[#3A472E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-3">
            <span className="text-2xl font-black text-white tracking-widest uppercase">
              VELQEN
            </span>
            <p className="text-xs text-[#B4C2AD] leading-relaxed max-w-xs">
              Everyday carry silhouettes engineered for modern youth lifestyle. Designed in the UK.
            </p>
            <p className="text-[11px] text-[#8F9E89]">© {new Date().getFullYear()} Velqen.co.uk. All rights reserved.</p>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Shop Silhouettes</h5>
            <ul className="space-y-2 text-[#B4C2AD]">
              <li><a href="#" className="hover:text-white transition">Nylon Crescents</a></li>
              <li><a href="#" className="hover:text-white transition">Everyday Shoulder Totes</a></li>
              <li><a href="#" className="hover:text-white transition">Crossbody Slings</a></li>
              <li><a href="#" className="hover:text-white transition">Belt Packs</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Customer Support</h5>
            <ul className="space-y-2 text-[#B4C2AD]">
              <li><a href="mailto:info@velqen.co.uk" className="hover:text-white transition">info@velqen.co.uk</a></li>
              <li><a href="#" className="hover:text-white transition">UK Delivery & FBA Dispatch</a></li>
              <li><a href="#" className="hover:text-white transition">30-Day UK Returns</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Verified Channels</h5>
            <p className="text-[#B4C2AD] mb-3">Shop genuine Velqen carry on our official storefronts:</p>
            <div className="flex gap-2">
              <span className="px-2.5 py-1 bg-[#3A472E] rounded text-[11px] font-semibold text-white">Amazon UK</span>
              <span className="px-2.5 py-1 bg-[#3A472E] rounded text-[11px] font-semibold text-white">eBay UK</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}