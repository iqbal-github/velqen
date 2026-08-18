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
    <div className="min-h-screen bg-[#F4EFE6] text-[#151C12]">
      
      {/* Top Banner */}
      <div className="bg-[#283621] text-[#EFE7D3] text-xs py-2 px-4 text-center font-medium tracking-wide">
        🇬🇧 Official UK Stock • Amazon Logistics Dispatched
      </div>

      {/* Header */}
      <header className="border-b border-[#E2D8C3] bg-[#F4EFE6]/95 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 text-xs font-bold text-[#283621] hover:text-[#5B7349] transition">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Bags</span>
          </Link>
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-[#283621]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            VELQEN<span className="text-[#849B72]">.</span>
          </Link>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-[#283621] text-[#F4EFE6] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#1C2617] transition shadow-md"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#EFE7D3]" />
            <span>Bag ({totalItems})</span>
          </button>
        </div>
      </header>

      {/* Main PDP Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#E2D8C3] border border-[#D5C9A6] shadow-sm">
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
                    selectedImage === idx ? 'border-[#283621] scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Buy Box */}
          <div className="bg-[#FAF6EE] rounded-2xl p-6 sm:p-10 border border-[#DCD0B4] shadow-sm space-y-6">
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#E5DCBF] text-[#283621] text-xs font-bold uppercase px-3 py-1 rounded-md">
                  {product.category}
                </span>
                <span className="text-emerald-800 text-xs font-bold flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" /> In Stock (UK Warehouse)
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#283621] tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {product.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#5B6D51] mt-1.5">{product.tagline}</p>
            </div>

            {/* Price & Rating */}
            <div className="flex items-baseline justify-between border-y border-[#E2D8C3] py-4">
              <div>
                <span className="text-3xl font-extrabold text-[#283621]">£{product.price.toFixed(2)}</span>
                <span className="text-xs text-[#7A7360] ml-2 font-medium">Free UK Standard Delivery</span>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-[#5B7349]">
                <Star className="w-4 h-4 fill-[#5B7349]" />
                <span>{product.rating}</span>
                <span className="text-slate-500 font-normal text-xs">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Add to Bag Action */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#D5C9A6] rounded-xl bg-[#F4EFE6] px-3 py-2.5">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="text-slate-700 font-bold px-2 hover:text-black text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-extrabold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="text-slate-700 font-bold px-2 hover:text-black text-sm"
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 bg-[#283621] hover:bg-[#1A2416] text-[#F4EFE6] rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 text-[#C9DDBB]" /> Added to Your Bag!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#EFE7D3]" /> Add to Bag • £{(product.price * quantity).toFixed(2)}
                    </>
                  )}
                </button>
              </div>

              {/* Verified Badges */}
              <div className="bg-[#F4EFE6] p-3.5 rounded-xl border border-[#DCD0B4] flex items-center justify-between text-xs">
                <span className="text-xs text-[#5B6D51] font-medium">Also verified on:</span>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 bg-white border border-[#D5C9A6] rounded text-xs font-semibold text-slate-800">Amazon UK</span>
                  <span className="px-2.5 py-1 bg-white border border-[#D5C9A6] rounded text-xs font-semibold text-slate-800">eBay UK</span>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-4 pt-4 border-t border-[#E2D8C3] text-xs">
              <h3 className="font-bold text-[#283621] uppercase tracking-wider text-xs" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Product Specifications
              </h3>
              
              <div className="grid grid-cols-2 gap-3 text-slate-700 bg-[#F4EFE6] p-4 rounded-xl border border-[#DCD0B4]">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#7A7360]">Material</span>
                  <span className="font-semibold text-slate-900">{product.material}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#7A7360]">Dimensions</span>
                  <span className="font-semibold text-slate-900">{product.dimensions}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[10px] uppercase font-bold text-[#7A7360]">Strap & Fit</span>
                  <span className="font-semibold text-slate-900">{product.strapLength}</span>
                </div>
              </div>

              <ul className="space-y-2 text-[#52614B] pt-2">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#5B7349] flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E2D8C3] text-xs">
              <div className="flex items-center gap-2 text-[#52614B]">
                <Truck className="w-4 h-4 text-[#283621]" />
                <span>Fast Tracked UK Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-[#52614B]">
                <ShieldCheck className="w-4 h-4 text-[#283621]" />
                <span>30-Day Easy UK Returns</span>
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}