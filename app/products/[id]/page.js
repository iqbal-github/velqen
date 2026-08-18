'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products } from '@/app/data/products';
import { useCart } from '@/app/context/cart-context';
import { 
  ShoppingBag, Star, Truck, ShieldCheck, ArrowLeft, 
  Sparkles, Check 
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id) || products[0];

  const { addToCart, totalItems, setIsCartOpen } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#222820]">
      
      {/* Top Banner */}
      <div className="bg-[#3B4A34] text-[#F4ECCF] text-[11px] py-2 px-4 text-center font-semibold tracking-wider uppercase">
        🇬🇧 Official UK Stock • Amazon Logistics Dispatched
      </div>

      {/* Header */}
      <header className="border-b border-[#E7E2D6] bg-[#F7F4EE]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 text-xs font-bold text-[#3B4A34] hover:text-[#C86D51] transition">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Bags</span>
          </Link>
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase text-[#3B4A34]" style={{ fontFamily: "'Syne', sans-serif" }}>
            VELQEN<span className="text-[#C86D51]">.</span>
          </Link>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-[#3B4A34] text-[#F7F4EE] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#283323] transition shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#F4ECCF]" />
            <span>Bag ({totalItems})</span>
          </button>
        </div>
      </header>

      {/* Main PDP Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-[2rem] overflow-hidden bg-[#ECE5D8] border border-[#DDD5C5] shadow-sm">
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
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition ${
                    selectedImage === idx ? 'border-[#3B4A34] scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Buy Box */}
          <div className="bg-[#FDFBF7] rounded-[2rem] p-6 sm:p-10 border border-[#E0D9CB] shadow-sm space-y-6">
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#EAE4D5] text-[#3B4A34] text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <span className="text-emerald-800 text-xs font-bold flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" /> Fast UK Dispatch
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#263121] tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                {product.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#5D6B56] mt-1 font-normal">{product.tagline}</p>
            </div>

            {/* Price & Rating */}
            <div className="flex items-baseline justify-between border-y border-[#ECE5D8] py-4">
              <div>
                <span className="text-3xl font-black text-[#263121]">£{product.price.toFixed(2)}</span>
                <span className="text-xs text-[#7A8A74] ml-2">Free UK Delivery</span>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-[#79885C]">
                <Star className="w-4 h-4 fill-[#79885C]" />
                <span>{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Add to Bag Action */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#DDD5C5] rounded-full bg-[#F7F4EE] px-3 py-2">
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
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-[#3B4A34] hover:bg-[#242D20] text-[#F7F4EE] rounded-full font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 text-[#F4ECCF]" /> Added to Your Bag!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#F4ECCF]" /> Add to Bag • £{(product.price * quantity).toFixed(2)}
                    </>
                  )}
                </button>
              </div>

              {/* Verified Badges */}
              <div className="bg-[#F7F4EE] p-3.5 rounded-2xl border border-[#E0D9CB] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#5D6B56] font-medium">Also available on verified marketplaces:</span>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 bg-white border border-[#DDD5C5] rounded-md text-[10px] font-bold text-slate-700">Amazon UK</span>
                  <span className="px-2.5 py-1 bg-white border border-[#DDD5C5] rounded-md text-[10px] font-bold text-slate-700">eBay UK</span>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-4 pt-4 border-t border-[#ECE5D8] text-xs">
              <h3 className="font-bold text-[#263121] uppercase tracking-wider text-[11px]" style={{ fontFamily: "'Syne', sans-serif" }}>
                Silhouette Specifications
              </h3>
              
              <div className="grid grid-cols-2 gap-3 text-slate-600 bg-[#F7F4EE] p-4 rounded-2xl border border-[#E0D9CB]">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#7A8A74]">Material</span>
                  <span className="font-semibold text-slate-800">{product.material}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#7A8A74]">Dimensions</span>
                  <span className="font-semibold text-slate-800">{product.dimensions}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[10px] uppercase font-bold text-[#7A8A74]">Strap & Fit</span>
                  <span className="font-semibold text-slate-800">{product.strapLength}</span>
                </div>
              </div>

              <ul className="space-y-2 text-[#55634E] pt-2">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#C86D51] flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#ECE5D8] text-[11px]">
              <div className="flex items-center gap-2 text-[#5D6B56]">
                <Truck className="w-4 h-4 text-[#3B4A34]" />
                <span>Fast Tracked UK Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-[#5D6B56]">
                <ShieldCheck className="w-4 h-4 text-[#3B4A34]" />
                <span>30-Day Easy UK Returns</span>
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}