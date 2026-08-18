'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products } from '@/app/data/products';
import { 
  ShoppingBag, Star, Truck, ShieldCheck, ArrowLeft, 
  Check, Lock, Sparkles, ExternalLink 
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id) || products[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E241E] font-sans antialiased selection:bg-[#435334] selection:text-white">
      
      {/* Top Banner */}
      <div className="bg-[#3A472E] text-[#FAF8F5] text-[12px] py-2 px-4 text-center font-medium tracking-wide">
        🇬🇧 Official UK Stock • Fast Dispatched via Amazon Fulfillment
      </div>

      {/* Header */}
      <header className="border-b border-[#EBE5DC] bg-[#FAF8F5]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 text-xs font-bold text-[#3A472E] hover:opacity-75 transition">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Bags</span>
          </Link>
          <Link href="/" className="text-xl font-black tracking-widest uppercase text-[#3A472E]">
            VELQEN
          </Link>
          <Link href="/" className="flex items-center gap-1 bg-[#3A472E] text-white px-3.5 py-1.5 rounded-full text-xs font-bold">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Bag</span>
          </Link>
        </div>
      </header>

      {/* Product Detail Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Gallery (Depop Style) */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden bg-[#EBE5DC] border border-[#E3DDD3] shadow-sm">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition ${
                    selectedImage === idx ? 'border-[#3A472E] scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info & Purchase Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EBE5DC] shadow-sm space-y-6">
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#EFEAE2] text-[#3A472E] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md">
                  {product.category}
                </span>
                <span className="text-emerald-700 text-xs font-bold flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" /> In Stock (UK Warehouse)
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#262F1F] tracking-tight">{product.name}</h1>
              <p className="text-xs sm:text-sm text-[#55634E] mt-1">{product.tagline}</p>
            </div>

            {/* Price & Rating */}
            <div className="flex items-baseline justify-between border-y border-[#F0EBE3] py-4">
              <div>
                <span className="text-3xl font-black text-[#262F1F]">£{product.price.toFixed(2)}</span>
                <span className="text-xs text-slate-500 ml-2">Free UK Delivery Included</span>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-[#62774F]">
                <Star className="w-4 h-4 fill-[#62774F]" />
                <span>{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Quantity Selector & Action */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#EBE5DC] rounded-xl bg-[#FAF8F5] px-3 py-2">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="text-slate-600 font-bold px-2 hover:text-black text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-black">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="text-slate-600 font-bold px-2 hover:text-black text-sm"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={handleAdd}
                  className={`flex-1 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md ${
                    added ? 'bg-emerald-700 text-white' : 'bg-[#3A472E] hover:bg-[#262F1F] text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Your Bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add to Bag • £{(product.price * quantity).toFixed(2)}
                    </>
                  )}
                </button>
              </div>

              {/* Verified Marketplaces */}
              <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EBE5DC] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#55634E] font-medium">Also verified to buy via:</span>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-white border border-[#EBE5DC] rounded text-[10px] font-bold text-slate-700">Amazon UK</span>
                  <span className="px-2 py-0.5 bg-white border border-[#EBE5DC] rounded text-[10px] font-bold text-slate-700">eBay UK</span>
                </div>
              </div>
            </div>

            {/* Depop-Style Specs Section */}
            <div className="space-y-4 pt-4 border-t border-[#F0EBE3] text-xs">
              <h3 className="font-bold text-[#262F1F] uppercase tracking-wider text-[11px]">Product Specifications</h3>
              
              <div className="grid grid-cols-2 gap-3 text-slate-600 bg-[#FAF8F5] p-4 rounded-xl">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Material</span>
                  <span className="font-semibold text-slate-800">{product.material}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Dimensions</span>
                  <span className="font-semibold text-slate-800">{product.dimensions}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Strap Spec</span>
                  <span className="font-semibold text-slate-800">{product.strapLength}</span>
                </div>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-2 text-[#55634E] pt-2">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#62774F] flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Assurance */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#F0EBE3] text-[11px]">
              <div className="flex items-center gap-2 text-slate-600">
                <Truck className="w-4 h-4 text-[#3A472E]" />
                <span>Fast Dispatch (Amazon FBA / Royal Mail)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#3A472E]" />
                <span>30-Day Hassle-Free UK Returns</span>
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}