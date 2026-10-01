import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/patisserieData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#FAF6F0] bg-noise-light border-b border-[#E8D9CA]/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8D786A] font-semibold">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Honored Acclaims</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#211713] font-medium tracking-tight">
            Words From Our Connoisseurs
          </h2>
          <p className="text-[#594236] text-sm sm:text-base font-light">
            Readings from Michelin critics, celebrated wedding hosts, and private celebration patrons.
          </p>
          <div className="w-12 h-[1px] bg-[#D9C5B4] mx-auto mt-4" aria-hidden="true" />
        </div>

        {/* 3 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="group bg-[#FAF6F0] rounded-3xl p-8 border border-[#E8D9CA] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5-Star Rating Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]"
                      />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#D9C5B4]/80" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-[#2B1712] text-sm leading-relaxed font-serif italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Occasion */}
              <div className="pt-6 mt-6 border-t border-[#E8D9CA]/80">
                <div className="flex items-center gap-3">
                  {/* Monogram Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[#2B1712] text-[#FAF6F0] flex items-center justify-center font-serif text-sm font-medium">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#211713] font-medium leading-none">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-[#8D786A] mt-1 font-light">
                      {t.role} · {t.location}
                    </p>
                  </div>
                </div>

                <div className="mt-3 text-[10px] text-[#8D786A] uppercase tracking-wider bg-[#EADDCF]/30 px-3 py-1.5 rounded-lg">
                  Commission: <span className="text-[#2B1712] font-medium">{t.cakeOrdered}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
