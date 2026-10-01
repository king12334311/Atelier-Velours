import React from 'react';
import { ArrowRight, Sparkles, Calendar, Coffee } from 'lucide-react';

interface PrimaryCtaSectionProps {
  onOpenBespoke: () => void;
  onExploreMenu: () => void;
}

export const PrimaryCtaSection: React.FC<PrimaryCtaSectionProps> = ({
  onOpenBespoke,
  onExploreMenu
}) => {
  return (
    <section
      id="bespoke-cta"
      className="relative py-28 sm:py-36 bg-[#1F120E] text-[#FAF6F0] bg-noise-dark overflow-hidden border-b border-[#331C16]"
    >
      {/* Decorative ambient radial glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3A2019]/40 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-6">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#331C16] border border-[#4A2A22] text-xs uppercase tracking-[0.25em] text-[#D8C3AE] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Haute Pâtisserie Commissions</span>
        </div>

        {/* Large Serif Headline */}
        <h2 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FAF6F0] tracking-tight leading-[1.1] text-balance">
          Make Something
          <br />
          <span className="italic text-[#D4AF37]">Worth Remembering.</span>
        </h2>

        {/* Supporting copy */}
        <p className="text-[#D8C3AE] text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
          From intimate Parisian dinner centerpieces to breathtaking multi-tiered wedding monuments. Reserve your commission or book a private atelier salon tasting.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBespoke}
            className="group px-8 py-4 bg-[#FAF6F0] text-[#1B0E0B] rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#D4AF37] hover:text-[#1B0E0B] transition-all duration-300 shadow-xl flex items-center gap-3 active:scale-[0.98]"
          >
            <span>Commission Custom Cake</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreMenu}
            className="px-7 py-4 text-xs uppercase tracking-[0.2em] font-medium text-[#FAF6F0] border border-[#D8C3AE]/40 rounded-full hover:border-[#FAF6F0] hover:bg-[#FAF6F0]/5 transition-all flex items-center gap-2.5"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D8C3AE]" />
            <span>Seasonal Collection</span>
          </button>
        </div>

        {/* Handwritten signature accent */}
        <div className="pt-8">
          <p className="font-serif italic text-lg sm:text-xl text-[#D8C3AE]/80">
            Life is sweeter with genuine culinary reverence ♡
          </p>
        </div>

      </div>
    </section>
  );
};
