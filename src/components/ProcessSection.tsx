import React, { useState } from 'react';
import { ArrowRight, Sparkles, Thermometer, Layers } from 'lucide-react';
import { PROCESS_STEPS } from '../data/patisserieData';
import { ProcessStep } from '../types';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep: ProcessStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-[#1B0E0B] text-[#FAF6F0] bg-noise-dark border-b border-[#331C16] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D8C3AE] font-semibold block">
              The Genesis of Perfection
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#FAF6F0] font-medium leading-tight">
              The Masterpiece Comes Alive
            </h2>
            <p className="text-[#D8C3AE]/80 text-sm leading-relaxed font-light">
              Watch the architecture unfold layer by layer. Four stages of uncompromising culinary precision taking 48 hours to complete.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#D8C3AE] tracking-widest uppercase">
              Step {activeStep.number} of 04
            </span>
          </div>
        </div>

        {/* 4 Process Steps Display with connecting desktop arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, index) => {
            const isSelected = activeStepIndex === index;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIndex(index)}
                className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 relative border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#2E1812] border-[#D4AF37] shadow-xl -translate-y-1'
                    : 'bg-[#251410] border-[#4A2A22]/50 hover:border-[#8D786A] hover:bg-[#2B1712]'
                }`}
              >
                {/* Step Thumbnail preview */}
                <div className="space-y-4">
                  <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-[#4A2A22]/60">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#1B0E0B]/80 backdrop-blur-xs text-[10px] font-mono tracking-wider text-[#D8C3AE]">
                      {step.number}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#D8C3AE] font-semibold block">
                      {step.subtitle}
                    </span>
                    <h3 className="font-serif-display text-xl sm:text-2xl text-[#FAF6F0] font-medium mt-0.5">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs leading-relaxed text-[#D8C3AE]/80 font-light line-clamp-3">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-4 mt-4 border-t border-[#4A2A22]/50 flex items-center justify-between text-xs">
                  <span
                    className={`text-[10px] uppercase tracking-wider font-semibold ${
                      isSelected ? 'text-[#D4AF37]' : 'text-[#8D786A]'
                    }`}
                  >
                    {isSelected ? 'Inspecting Technique' : 'Click to Inspect'}
                  </span>
                  {index < 3 && (
                    <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-[#8D786A] -mr-2" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Inspector Drawer of the Selected Step */}
        <div className="mt-10 rounded-2xl p-6 sm:p-8 bg-[#251410] border border-[#4A2A22] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Atelier Technical Note · {activeStep.title}</span>
            </div>
            <p className="text-sm text-[#FAF6F0] font-light leading-relaxed">
              <strong className="text-[#D8C3AE] font-medium">Culinary Technique: </strong>
              {activeStep.technique}
            </p>
          </div>

          {activeStep.temperature && (
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1B0E0B] border border-[#4A2A22] shrink-0">
              <Thermometer className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <span className="block text-[10px] tracking-wider uppercase text-[#8D786A]">
                  Precision Standard
                </span>
                <span className="text-xs font-mono font-medium text-[#FAF6F0]">
                  {activeStep.temperature}
                </span>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
