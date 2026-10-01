import React, { useState } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { SIGNATURE_CAKES, SENSATION_CATEGORIES } from '../data/patisserieData';
import { CakeProduct } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (cake: CakeProduct) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredCakes = SIGNATURE_CAKES.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase()) ||
      c.flavorProfile.some((f) => f.toLowerCase().includes(query.toLowerCase())) ||
      c.cacaoOrigin.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-[#1B0E0B]/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-xl bg-[#FAF6F0] rounded-3xl border border-[#D9C5B4] shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E8D9CA] flex items-center gap-3 bg-[#FAF6F0]">
          <Search className="w-5 h-5 text-[#8D786A] ml-2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by cacao origin, pistachio, rose, truffle..."
            className="flex-1 bg-transparent text-sm text-[#211713] placeholder:text-[#8D786A] focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1.5 text-[#8D786A] hover:text-[#211713] rounded-full hover:bg-[#EADDCF]/40"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-2">
          {query.trim() === '' ? (
            <div className="py-6 px-2 space-y-4">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8D786A] font-semibold block">
                Popular Atelier Inquiries:
              </span>
              <div className="flex flex-wrap gap-2">
                {['Valrhona 72%', 'Grasse Rose', 'Sicilian Pistachio', 'Ecuadorian Cacao', 'Wedding Gala'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 rounded-full text-xs bg-[#F6EFE6] border border-[#E8D9CA] text-[#4A2A22] hover:bg-[#2B1712] hover:text-[#FAF6F0] transition-colors"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : filteredCakes.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#8D786A]">
              No creation found matching "{query}". Try "Cacao" or "Pistache".
            </div>
          ) : (
            filteredCakes.map((cake) => (
              <div
                key={cake.id}
                onClick={() => {
                  onSelectProduct(cake);
                  onClose();
                }}
                className="group flex items-center justify-between p-3 rounded-2xl hover:bg-[#F6EFE6] border border-transparent hover:border-[#E8D9CA] cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#D9C5B4]/50">
                    <img
                      src={cake.image}
                      alt={cake.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#211713] font-medium group-hover:text-[#4A2A22]">
                      {cake.name}
                    </h4>
                    <p className="text-[11px] text-[#8D786A]">
                      {cake.cacaoPercentage} · From ${cake.basePrice}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8D786A] group-hover:translate-x-1 group-hover:text-[#211713] transition-all" />
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
