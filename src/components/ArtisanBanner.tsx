import React from 'react';
import chefProcessImg from '../assets/images/pastry_chef_artisan_process_1790794768118.jpg';

export const ArtisanBanner: React.FC = () => {
  return (
    <section className="relative w-full h-[65vh] min-h-[440px] max-h-[640px] overflow-hidden flex items-center justify-center border-y border-[#3A2019]">
      {/* Background Cinematic Image with slow subtle zoom on hover */}
      <div className="absolute inset-0">
        <img
          src={chefProcessImg}
          alt="Master pastry chef delicately gilding a couture cake in the Atelier Velours Paris kitchen"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrim for WCAG AA readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1B0E0B]/85 via-[#1B0E0B]/60 to-[#1B0E0B]/85"
          aria-hidden="true"
        />
      </div>

      {/* Editorial Statement Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center text-[#FAF6F0] space-y-4">
        <div className="flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-[#D8C3AE] font-semibold">
          <span className="w-8 h-[1px] bg-[#D8C3AE]/60" />
          <span>The Atelier Philosophy</span>
          <span className="w-8 h-[1px] bg-[#D8C3AE]/60" />
        </div>

        <h3 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl text-[#FAF6F0] font-normal leading-[1.15] tracking-tight text-balance">
          More Than A Confection.
          <br />
          <span className="italic text-[#D4AF37]">An Edible Work of Contemporary Art.</span>
        </h3>

        <p className="text-[#D8C3AE] text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed pt-2">
          "True gastronomic luxury cannot be rushed. It requires patience, uncompromising single-origin terroir, and the courage to pursue perfection in every millimeter."
        </p>

        <p className="text-[11px] tracking-[0.2em] uppercase font-mono text-[#D8C3AE]/70">
          Chef Laurent & Master Chocolatiers · Paris VIIe
        </p>
      </div>
    </section>
  );
};
