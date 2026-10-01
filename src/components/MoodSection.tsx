import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SENSATION_CATEGORIES } from '../data/patisserieData';
import { SensationCategory } from '../types';

interface MoodSectionProps {
  onSelectSensation: (sensation: SensationCategory) => void;
}

export const MoodSection: React.FC<MoodSectionProps> = ({ onSelectSensation }) => {
  return (
    <section
      id="sensations"
      className="relative py-24 sm:py-32 bg-[#251410] text-[#FAF6F0] bg-noise-dark overflow-hidden border-b border-[#3A2019]"
    >
      {/* Delicate botanical line ornament in background */}
      <div
        className="absolute -top-12 -right-12 w-96 h-96 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="#D9C5B4" strokeWidth="0.8">
          <circle cx="100" cy="100" r="80" strokeDasharray="4 4" />
          <path d="M100,20 C100,100 180,100 180,100" />
          <path d="M100,20 C100,100 20,100 20,100" />
          <path d="M100,180 C100,100 180,100 180,100" />
          <path d="M100,180 C100,100 20,100 20,100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2.5 text-xs tracking-[0.25em] uppercase text-[#D8C3AE] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>Curate Your Experience</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#FAF6F0] font-medium leading-tight">
              Choose Your Sensation
            </h2>
            <p className="text-[#D8C3AE]/80 text-sm sm:text-base leading-relaxed font-light">
              Because every moment, longing, and milestone demands an attuned symphony of flavor. Select your present mood to reveal our tailored culinary recommendation.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-[#D8C3AE] tracking-wider uppercase font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Handcrafted Daily in Limited Batches</span>
          </div>
        </div>

        {/* 4 Mood / Sensation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SENSATION_CATEGORIES.map((cat, index) => {
            // Alternating card aesthetics: 2 lighter cream-tinted cards, 2 dark espresso cards for refined contrast
            const isLightCard = index === 1 || index === 2;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectSensation(cat)}
                className={`group cursor-pointer rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-400 border hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden ${
                  isLightCard
                    ? 'bg-[#FAF6F0] text-[#241712] border-[#E8D9CA]'
                    : 'bg-[#331C16] text-[#FAF6F0] border-[#4A2A22]/70'
                }`}
              >
                {/* Top Image Preview in Arched / Rounded Frame */}
                <div className="space-y-4">
                  <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#D4AF37]/40 shadow-inner group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        isLightCard
                          ? 'bg-[#241712]/10 group-hover:opacity-0'
                          : 'bg-[#1B0E0B]/20 group-hover:opacity-0'
                      }`}
                    />
                  </div>

                  {/* Accent Tag */}
                  <div className="text-center">
                    <span
                      className={`text-[10px] tracking-[0.2em] uppercase font-semibold block ${
                        isLightCard ? 'text-[#8D786A]' : 'text-[#D8C3AE]'
                      }`}
                    >
                      {cat.subtitle}
                    </span>
                    <h3
                      className={`font-serif-display text-xl sm:text-2xl mt-1 tracking-tight ${
                        isLightCard ? 'text-[#241712]' : 'text-[#FAF6F0]'
                      }`}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  <p
                    className={`text-xs leading-relaxed text-center font-light line-clamp-2 ${
                      isLightCard ? 'text-[#594236]' : 'text-[#D8C3AE]/80'
                    }`}
                  >
                    {cat.tagline}
                  </p>
                </div>

                {/* Bottom Action Affordance */}
                <div className="pt-6 mt-4 border-t flex items-center justify-between transition-colors border-current/15">
                  <span
                    className={`text-[10px] tracking-[0.16em] uppercase font-semibold ${
                      isLightCard ? 'text-[#8D786A]' : 'text-[#D8C3AE]'
                    }`}
                  >
                    Taste Accord
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isLightCard
                        ? 'bg-[#241712] text-[#FAF6F0] group-hover:bg-[#3A2019] group-hover:scale-110'
                        : 'bg-[#FAF6F0] text-[#241712] group-hover:bg-[#D4AF37] group-hover:text-[#1B0E0B] group-hover:scale-110'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
