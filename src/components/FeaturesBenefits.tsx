import React from 'react';
import { Compass, Sparkles, Feather, Truck } from 'lucide-react';

export const FeaturesBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Compass,
      title: 'Grand Cru Sourcing',
      desc: 'Exclusive single-origin cacao harvested from biodynamic micro-plantations in Ecuador, Madagascar, and Venezuela.'
    },
    {
      icon: Feather,
      title: '48-Hour Tempering',
      desc: 'Patience over haste. Every chocolate emulsion is slow-rested and crystallized to achieve glass-like mirror clarity.'
    },
    {
      icon: Sparkles,
      title: 'Bespoke Sugar Florals',
      desc: 'Individual edible sculptures, 24k French gold leaf gilding, and custom calligraphy chocolate medallions.'
    },
    {
      icon: Truck,
      title: 'White-Glove Delivery',
      desc: 'Climate-guaranteed private courier service in specialized chilled transport to ensure pristine presentation.'
    }
  ];

  return (
    <section className="py-20 bg-[#F6EFE6] border-b border-[#E8D9CA]/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col space-y-3 p-6 rounded-2xl bg-[#FAF6F0]/80 border border-[#E8D9CA] hover:bg-[#FAF6F0] hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#EADDCF]/50 flex items-center justify-center text-[#3A2019] group-hover:bg-[#2B1712] group-hover:text-[#FAF6F0] transition-colors duration-300">
                  <Icon className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#8D786A] tabular-nums">
                    0{index + 1}.
                  </span>
                  <h4 className="font-serif-display text-lg font-medium text-[#211713]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-[#594236] font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
