import React, { useState } from 'react';
import { ArrowRight, Sparkles, Clock, ShieldCheck, Heart, RotateCw, Check } from 'lucide-react';
import { SIGNATURE_CAKES } from '../data/patisserieData';
import { CakeProduct } from '../types';

interface FeaturedCreationProps {
  onAddToCart: (product: CakeProduct, size: string, serves: string, price: number) => void;
  onCustomize: (product: CakeProduct) => void;
}

export const FeaturedCreation: React.FC<FeaturedCreationProps> = ({
  onAddToCart,
  onCustomize
}) => {
  const cake = SIGNATURE_CAKES[0]; // Opéra Royal Truffle
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1); // 8-inch Classique by default
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const selectedSize = cake.servingSizes[selectedSizeIndex];

  const handleRotate = () => {
    setIsRotating(true);
    setRotationAngle((prev) => (prev + 90) % 360);
    setTimeout(() => setIsRotating(false), 500);
  };

  const handleAdd = () => {
    onAddToCart(cake, selectedSize.size, selectedSize.serves, selectedSize.price);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <section id="featured" className="py-24 sm:py-32 bg-[#FAF6F0] bg-noise-light border-b border-[#E8D9CA]/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Subtle Section Header Kicker */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8D786A] font-semibold block">
            Atelier Featured Masterpiece
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#211713] font-medium">
            The Pinnacle of Cacao Artistry
          </h2>
          <div className="w-12 h-[1px] bg-[#D9C5B4] mx-auto mt-3" aria-hidden="true" />
        </div>

        {/* Two-Column Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Interactive Cake Visual Showcase */}
          <div className="lg:col-span-6 relative">
            
            {/* Playful callout hint */}
            <div className="hidden sm:block absolute -top-8 left-6 z-10">
              <span className="font-serif italic text-sm text-[#4A2A22]/90 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Rotate 360° to inspect finish
              </span>
            </div>

            {/* Cake Showcase Plate */}
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#FAF6F0] to-[#EADDCF]/40 border border-[#E8D9CA] shadow-xl overflow-hidden flex flex-col items-center">
              
              {/* Rotating Image Container */}
              <div
                className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform duration-700 ease-out"
                style={{
                  transform: `rotate(${rotationAngle * 0.15}deg) scale(${isRotating ? 0.98 : 1})`
                }}
              >
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle soft shadow under cake */}
                <div
                  className="absolute -bottom-6 w-3/4 h-8 bg-[#241712]/20 rounded-full blur-xl pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* 360 Controller Toolbar */}
              <div className="mt-6 flex items-center gap-4 bg-[#FAF6F0] px-4 py-2 rounded-full border border-[#D9C5B4]/60 shadow-xs">
                <button
                  onClick={handleRotate}
                  className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#4A2A22] font-medium hover:text-[#211713] transition-colors"
                >
                  <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
                  <span>Interactive 360° · {rotationAngle}° View</span>
                </button>
              </div>

            </div>

          </div>

          {/* RIGHT: Product Details & Purchase Module */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#8D786A] font-semibold mb-2">
                <span>Signature Entremets</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#3A2019]">{cake.cacaoPercentage}</span>
              </div>
              <h3 className="font-serif-display text-4xl sm:text-5xl text-[#211713] font-medium tracking-tight">
                {cake.name}
              </h3>
              <p className="font-serif italic text-lg text-[#594236] mt-1">
                {cake.frenchTitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-[#594236] text-sm sm:text-base leading-relaxed font-light">
              {cake.description}
            </p>

            {/* Hallmarks with minimal line icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF6F0] border border-[#E8D9CA]">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-[#211713]">Grand Cru Valrhona</p>
                  <p className="text-[#8D786A]">Pure single-origin 72% cocoa</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF6F0] border border-[#E8D9CA]">
                <Clock className="w-4 h-4 text-[#8D786A] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-[#211713]">Baked at Dawn</p>
                  <p className="text-[#8D786A]">Made fresh morning of pickup</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF6F0] border border-[#E8D9CA]">
                <ShieldCheck className="w-4 h-4 text-[#8D786A] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-[#211713]">Gold Leaf Monogram</p>
                  <p className="text-[#8D786A]">Complimentary edible plaque</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF6F0] border border-[#E8D9CA]">
                <Heart className="w-4 h-4 text-[#8D786A] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-[#211713]">Artisanal Heritage</p>
                  <p className="text-[#8D786A]">48-hour slow tempering cycle</p>
                </div>
              </div>
            </div>

            {/* Serving Size Selector */}
            <div className="pt-2">
              <label className="block text-xs uppercase tracking-wider text-[#8D786A] font-semibold mb-2.5">
                Select Connoisseur Dimension:
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {cake.servingSizes.map((sizeOpt, idx) => {
                  const isSelected = selectedSizeIndex === idx;
                  return (
                    <button
                      key={sizeOpt.size}
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`p-3 rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'bg-[#2B1712] text-[#FAF6F0] border-[#2B1712] shadow-sm'
                          : 'bg-[#FAF6F0] text-[#3A2019] border-[#E8D9CA] hover:border-[#8D786A]'
                      }`}
                    >
                      <span className="block text-xs font-semibold">{sizeOpt.size}</span>
                      <span
                        className={`block text-[10px] mt-0.5 ${
                          isSelected ? 'text-[#D8C3AE]' : 'text-[#8D786A]'
                        }`}
                      >
                        {sizeOpt.serves}
                      </span>
                      <span className="block text-xs font-mono font-medium mt-1">
                        ${sizeOpt.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price & Contiguous CTA Purchase Row */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#E8D9CA]">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8D786A] block">
                  Atelier Price
                </span>
                <span className="font-serif-display text-3xl sm:text-4xl text-[#211713] font-semibold">
                  ${selectedSize.price}
                </span>
                <span className="text-xs text-[#8D786A] ml-2">
                  (incl. luxury packaging)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onCustomize(cake)}
                  className="px-5 py-3.5 border border-[#2B1712] text-[#2B1712] rounded-full text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#2B1712]/5 transition-colors whitespace-nowrap"
                >
                  Personalize
                </button>

                <button
                  onClick={handleAdd}
                  disabled={isAdded}
                  className={`group px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-3 transition-all duration-300 shadow-md active:scale-98 ${
                    isAdded
                      ? 'bg-emerald-800 text-white'
                      : 'bg-[#2B1712] text-[#FAF6F0] hover:bg-[#3A2019] hover:shadow-xl'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <span>Add to Cart</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
