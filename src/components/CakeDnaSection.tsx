import React, { useState } from 'react';
import { ArrowRight, Layers, Sparkles, Heart } from 'lucide-react';
import { CAKE_DNA_LAYERS } from '../data/patisserieData';
import cakeDnaImg from '../assets/images/cake_cross_section_dna_1790794757539.jpg';

interface CakeDnaSectionProps {
  onExploreRecipe: () => void;
}

export const CakeDnaSection: React.FC<CakeDnaSectionProps> = ({ onExploreRecipe }) => {
  const [activeLayerId, setActiveLayerId] = useState<number>(1);
  const activeLayer = CAKE_DNA_LAYERS.find((l) => l.id === activeLayerId) || CAKE_DNA_LAYERS[0];

  return (
    <section id="dna" className="py-24 sm:py-32 bg-[#FAF6F0] bg-noise-light border-b border-[#E8D9CA]/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8D786A] font-semibold block">
              Inside The Architecture
            </span>
            <h2 className="font-serif-display text-4xl sm:text-5xl text-[#211713] font-medium tracking-tight">
              The Cake DNA
            </h2>
            <p className="text-[#594236] text-base leading-relaxed font-light max-w-lg">
              Five harmonious strata engineered for pure mouthfeel equilibrium. Contrast between crisp, tender, and silken textures engineered down to the millimeter.
            </p>
          </div>

          <div className="lg:col-span-6 flex lg:justify-end items-center gap-4">
            <button
              onClick={onExploreRecipe}
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#2B1712] text-[#FAF6F0] rounded-full text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#3A2019] transition-all"
            >
              <span>Explore Signature Layers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3-Column Layout: Visual Slice Center, Numbered Layers Right, Deep Detail Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* CENTER: Cross Section Photography Slice */}
          <div className="lg:col-span-6 xl:col-span-7 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-[#E8D9CA] shadow-2xl bg-[#F6EFE6] aspect-4/3 group">
              <img
                src={cakeDnaImg}
                alt="Cross-section slice of Atelier Velours chocolate opera cake displaying distinct layers"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Hand-drawn editorial badge */}
              <div className="absolute top-4 right-4 bg-[#FAF6F0]/90 backdrop-blur-xs p-3.5 rounded-2xl border border-[#E8D9CA] shadow-sm max-w-[170px] text-center hidden sm:block">
                <p className="font-serif italic text-xs text-[#2B1712]">
                  Real Grand Cru terroir. Zero artificial stabilizers.
                </p>
                <div className="flex items-center justify-center gap-1 mt-1 text-[#8D786A]">
                  <Heart className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                  <span className="text-[9px] uppercase tracking-wider font-semibold">Atelier Guarantee</span>
                </div>
              </div>

              {/* Layer Highlight Bar Overlay at bottom */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#241712]/80 via-[#241712]/40 to-transparent p-5 text-[#FAF6F0]">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#D8C3AE] font-mono">
                      Selected Layer 0{activeLayer.id} · {activeLayer.percentage}
                    </span>
                    <h4 className="font-serif-display text-xl text-[#FAF6F0]">
                      {activeLayer.frenchName}
                    </h4>
                  </div>
                  <span className="text-xs text-[#D8C3AE] italic hidden sm:block">
                    {activeLayer.texture}
                  </span>
                </div>
              </div>
            </div>

            {/* Micro Details Container underneath image */}
            <div className="mt-4 p-4 rounded-xl bg-[#FAF6F0] border border-[#E8D9CA] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#594236]">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-medium text-[#211713]">Formula Ingredients: </span>
                <span className="italic font-light">{activeLayer.ingredients}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Clickable Numbered Strata Details (Reference style 01, 02, 03, 04) */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-3 order-1 lg:order-2">
            {CAKE_DNA_LAYERS.map((layer) => {
              const isSelected = activeLayerId === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`cursor-pointer rounded-2xl p-4.5 sm:p-5 transition-all duration-300 border flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#2B1712] text-[#FAF6F0] border-[#2B1712] shadow-lg translate-x-1'
                      : 'bg-[#FAF6F0] text-[#241712] border-[#E8D9CA] hover:border-[#8D786A] hover:bg-[#FAF6F0]'
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-semibold tabular-nums mt-0.5 ${
                      isSelected ? 'text-[#D4AF37]' : 'text-[#8D786A]'
                    }`}
                  >
                    0{layer.id}
                  </span>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-baseline justify-between">
                      <h4
                        className={`font-serif-display text-lg font-medium ${
                          isSelected ? 'text-[#FAF6F0]' : 'text-[#211713]'
                        }`}
                      >
                        {layer.name}
                      </h4>
                      <span
                        className={`text-[10px] tracking-wider uppercase font-mono ${
                          isSelected ? 'text-[#D8C3AE]' : 'text-[#8D786A]'
                        }`}
                      >
                        {layer.percentage}
                      </span>
                    </div>

                    <p
                      className={`text-xs leading-relaxed font-light ${
                        isSelected ? 'text-[#D8C3AE]' : 'text-[#594236]'
                      }`}
                    >
                      {layer.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
