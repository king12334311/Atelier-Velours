import React, { useState } from 'react';
import { ArrowDown, ArrowRight, Sparkles, Award } from 'lucide-react';
import { HERO_FLAVOR_OPTIONS } from '../data/patisserieData';
import heroCakeImg from '../assets/images/hero_chocolate_couture_cake_1790794736318.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onBespokeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onBespokeClick }) => {
  const [activeFlavorIndex, setActiveFlavorIndex] = useState(0);
  const activeFlavor = HERO_FLAVOR_OPTIONS[activeFlavorIndex];

  return (
    <section className="relative min-h-[92vh] pt-24 lg:pt-32 pb-16 bg-[#FAF6F0] bg-noise-light flex items-center overflow-hidden border-b border-[#E8D9CA]/60">
      {/* Subtle warm ambient lighting glow in background */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E8D9CA]/40 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-10 w-80 h-80 bg-[#D9C5B4]/30 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Editorial Content Area (5 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center space-y-6">
            
            {/* Eyebrow label - clean unboxed typography */}
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#8D786A] font-semibold">
              <span className="w-6 h-[1px] bg-[#8D786A]/60" aria-hidden="true" />
              <span>Haute Pâtisserie & Architecture</span>
            </div>

            {/* Editorial Headline with Playfair/Cormorant high-contrast typography */}
            <h1 className="font-serif-display text-4xl sm:text-5xl xl:text-6xl text-[#211713] leading-[1.08] font-medium tracking-tight text-balance">
              DON’T JUST TASTE.
              <br />
              <span className="italic font-normal text-[#3A2019]">EXPERIENCE</span> THE MASTERPIECE.
            </h1>

            {/* Persuasive supporting paragraph */}
            <p className="text-[#594236] text-base sm:text-lg leading-relaxed max-w-lg font-light">
              More than celebratory cakes — we sculpt edible architecture. Handcrafted daily in our Parisian atelier using single-estate Grand Cru cacao, rare seasonal botanicals, and uncompromising French mastery.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#2B1712] text-[#FAF6F0] rounded-full text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#3D221A] hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
              >
                <span>Explore Creations</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onBespokeClick}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-[#2B1712] border border-[#2B1712]/40 rounded-full hover:border-[#2B1712] hover:bg-[#2B1712]/5 transition-all duration-200"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#8D786A] group-hover:text-[#2B1712]" />
                <span>Commission Bespoke</span>
              </button>
            </div>

            {/* Selected Flavor Tasting Note Micro-Card */}
            <div className="pt-4 border-t border-[#E8D9CA]/80">
              <div className="flex items-center gap-2 text-xs text-[#8D786A] uppercase tracking-wider mb-1 font-medium">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Active Tasting Profile · {activeFlavor.sub}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A2A22] italic font-serif">
                "{activeFlavor.notes}"
              </p>
              <div className="text-[11px] text-[#8D786A] mt-1">
                Suggested Accord: <span className="text-[#2B1712] font-medium">{activeFlavor.pairing}</span>
              </div>
            </div>

            {/* Circular Scroll prompt */}
            <div className="pt-2 hidden sm:flex items-center gap-3 text-xs tracking-widest uppercase text-[#8D786A]">
              <a
                href="#sensations"
                className="group flex items-center gap-2 hover:text-[#2B1712] transition-colors"
              >
                <span className="w-7 h-7 rounded-full border border-[#8D786A]/40 flex items-center justify-center group-hover:border-[#2B1712] group-hover:bg-[#EADDCF]/30 transition-all">
                  <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                </span>
                <span>Scroll to explore atelier</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Visual Area (7 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex justify-center items-center">
            
            {/* Fine handwritten decorative note */}
            <div className="hidden sm:block absolute -top-4 right-12 z-20 pointer-events-none transform -rotate-3 text-right">
              <span className="font-serif italic text-lg sm:text-xl text-[#3A2019]/90 tracking-wide">
                Pure French indulgence in every bite
              </span>
              <svg
                className="w-12 h-6 ml-auto -mt-1 text-[#8D786A]/70"
                viewBox="0 0 50 25"
                fill="none"
                stroke="currentColor"
              >
                <path d="M5,5 Q25,22 45,15" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M40,10 L45,15 L38,18" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Main Hero Photographic Composition */}
            <div className="relative w-full max-w-lg lg:max-w-xl mx-auto">
              
              {/* Soft pedestal shadow behind image */}
              <div
                className="absolute inset-4 -bottom-6 bg-[#3A2019]/15 rounded-3xl blur-2xl transform scale-95"
                aria-hidden="true"
              />

              {/* Main Image Frame with refined subtle border */}
              <div className="relative rounded-3xl overflow-hidden border border-[#E8D9CA] shadow-2xl bg-[#F6EFE6] aspect-4/3 sm:aspect-4/3.2 group">
                <img
                  src={heroCakeImg}
                  alt="Atelier Velours hand-sculpted Grand Cru dark chocolate couture cake with blackberries and 24k gold leaf"
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient scrim at base of image for depth */}
                <div
                  className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#241712]/60 via-[#241712]/20 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Bottom image overlay metadata */}
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[#FAF6F0] z-10">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#D9C5B4] font-medium">
                      Pièce N° 01 · Signature Couture
                    </p>
                    <p className="font-serif text-lg tracking-wide">
                      Le Monument Velours Noir
                    </p>
                  </div>
                  <span className="text-xs tracking-widest uppercase font-mono px-2.5 py-1 rounded bg-[#1B0E0B]/60 backdrop-blur-xs text-[#EADDCF] border border-[#EADDCF]/20">
                    75% Cacao
                  </span>
                </div>
              </div>

              {/* Interactive Flavor Note Selectors (Floating tabs along the side, matching reference style) */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-right-4 lg:-right-6 sm:top-1/2 sm:-translate-y-1/2 z-20 flex sm:flex-col gap-2 overflow-x-auto pb-2 sm:pb-0">
                {HERO_FLAVOR_OPTIONS.map((item, idx) => {
                  const isActive = activeFlavorIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveFlavorIndex(idx)}
                      className={`group flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all duration-300 whitespace-nowrap shadow-sm border ${
                        isActive
                          ? 'bg-[#2B1712] text-[#FAF6F0] border-[#2B1712] translate-x-0 sm:-translate-x-1 shadow-md'
                          : 'bg-[#FAF6F0]/95 hover:bg-[#FAF6F0] text-[#3A2019] border-[#E8D9CA] hover:border-[#8D786A]'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full transition-transform ${
                          isActive
                            ? 'bg-[#D4AF37] scale-125'
                            : 'bg-[#8D786A]/40 group-hover:bg-[#8D786A]'
                        }`}
                      />
                      <div className="flex flex-col">
                        <span className="text-[11px] font-medium tracking-wide">
                          {item.name}
                        </span>
                        <span
                          className={`text-[9px] tracking-wider uppercase ${
                            isActive ? 'text-[#D9C5B4]' : 'text-[#8D786A]'
                          }`}
                        >
                          {item.sub}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
