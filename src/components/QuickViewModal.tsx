import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { CakeProduct } from '../types';

interface QuickViewModalProps {
  cake: CakeProduct | null;
  onClose: () => void;
  onAddToCart: (product: CakeProduct, size: string, serves: string, price: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  cake,
  onClose,
  onAddToCart
}) => {
  if (!cake) return null;

  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const selectedSize = cake.servingSizes[selectedSizeIndex];

  const handleAdd = () => {
    onAddToCart(cake, selectedSize.size, selectedSize.serves, selectedSize.price);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B0E0B]/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#FAF6F0] rounded-3xl border border-[#D9C5B4] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#8D786A] hover:text-[#211713] bg-[#FAF6F0]/80 rounded-full backdrop-blur-xs transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT: Image Column */}
        <div className="md:w-1/2 relative bg-[#F6EFE6] aspect-square md:aspect-auto">
          <img
            src={cake.image}
            alt={cake.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-[#1B0E0B]/70 backdrop-blur-xs p-3 rounded-xl text-[#FAF6F0]">
            <p className="text-[10px] uppercase tracking-wider text-[#D8C3AE]">
              Terroir Origin
            </p>
            <p className="font-serif text-sm">
              {cake.cacaoOrigin}
            </p>
          </div>
        </div>

        {/* RIGHT: Content & Tasting Dossier */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8D786A] font-semibold block">
                {cake.category.toUpperCase()} · {cake.cacaoPercentage}
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#211713] font-medium">
                {cake.name}
              </h3>
              <p className="font-serif italic text-sm text-[#8D786A]">
                {cake.frenchTitle}
              </p>
            </div>

            <p className="text-xs text-[#594236] leading-relaxed font-light">
              {cake.description}
            </p>

            {/* Tasting Notes */}
            <div className="p-3.5 rounded-2xl bg-[#F6EFE6] border border-[#E8D9CA] text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#211713] uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>Sommelier Accord & Tasting Notes</span>
              </div>
              <p className="text-[#594236]">
                <strong className="text-[#211713]">Palate:</strong> {cake.tastingNotes.palate}
              </p>
              <p className="text-[#594236]">
                <strong className="text-[#211713]">Pairing:</strong> {cake.tastingNotes.pairings}
              </p>
            </div>

            {/* Serving Size picker */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#8D786A] font-semibold mb-2">
                Connoisseur Dimension:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {cake.servingSizes.map((s, idx) => {
                  const isSelected = selectedSizeIndex === idx;
                  return (
                    <button
                      key={s.size}
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`p-2 rounded-xl text-left border transition-all text-xs ${
                        isSelected
                          ? 'bg-[#2B1712] text-[#FAF6F0] border-[#2B1712]'
                          : 'bg-[#F6EFE6] text-[#241712] border-[#E8D9CA]'
                      }`}
                    >
                      <span className="block font-semibold">{s.size}</span>
                      <span className="block text-[10px] mt-0.5 opacity-80">{s.serves}</span>
                      <span className="block font-mono font-medium mt-1">${s.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#E8D9CA] flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase text-[#8D786A] block">Total</span>
              <span className="font-serif-display text-2xl font-semibold text-[#211713]">
                ${selectedSize.price} USD
              </span>
            </div>

            <button
              onClick={handleAdd}
              disabled={isAdded}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2 transition-all ${
                isAdded
                  ? 'bg-emerald-800 text-white'
                  : 'bg-[#2B1712] text-[#FAF6F0] hover:bg-[#3A2019]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <span>Add to Bag</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
