import React, { useState } from 'react';
import { Instagram, Facebook, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="bg-[#1B0E0B] text-[#FAF6F0] bg-noise-dark border-t border-[#331C16] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#331C16]">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif-display text-2xl sm:text-3xl tracking-[0.18em] uppercase text-[#FAF6F0] font-medium block">
              Atelier Velours
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#D8C3AE] block -mt-2">
              Haute Pâtisserie & Architecture
            </span>
            <p className="text-xs text-[#D8C3AE]/80 font-light leading-relaxed max-w-sm pt-2">
              Crafting transcendent edible monuments, artisanal chocolate entremets, and bespoke celebration cakes using single-origin Grand Cru cacao and wild botanicals.
            </p>

            <div className="pt-2 flex items-center gap-3 text-[#D8C3AE]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#4A2A22] flex items-center justify-center hover:text-[#FAF6F0] hover:border-[#D4AF37] hover:bg-[#331C16] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#4A2A22] flex items-center justify-center hover:text-[#FAF6F0] hover:border-[#D4AF37] hover:bg-[#331C16] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links Col 1 (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D8C3AE] font-semibold">
              Maison
            </h4>
            <ul className="space-y-2 text-xs text-[#D8C3AE]/80">
              <li>
                <a href="#featured" className="hover:text-[#FAF6F0] transition-colors">
                  Signature Cakes
                </a>
              </li>
              <li>
                <a href="#sensations" className="hover:text-[#FAF6F0] transition-colors">
                  Sensation Accord
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#FAF6F0] transition-colors">
                  The 4-Step Craft
                </a>
              </li>
              <li>
                <a href="#dna" className="hover:text-[#FAF6F0] transition-colors">
                  Cake DNA Layers
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FAF6F0] transition-colors">
                  Connoisseur Acclaims
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links Col 2 (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D8C3AE] font-semibold">
              Ateliers
            </h4>
            <div className="space-y-3 text-xs text-[#D8C3AE]/80">
              <div>
                <p className="font-medium text-[#FAF6F0]">Paris 7ème</p>
                <p className="text-[11px] font-light">48 Rue de Sèvres, 75007</p>
                <p className="text-[11px] font-light">Mardi – Dimanche: 8h30 – 19h30</p>
              </div>
              <div className="pt-1">
                <p className="font-medium text-[#FAF6F0]">New York Madison</p>
                <p className="text-[11px] font-light">740 Madison Ave, NY 10065</p>
                <p className="text-[11px] font-light">Tuesday – Sunday: 9am – 8pm</p>
              </div>
            </div>
          </div>

          {/* Newsletter Col (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D8C3AE] font-semibold">
              Salon Gazette
            </h4>
            <p className="text-xs text-[#D8C3AE]/80 font-light leading-relaxed">
              Receive private invitations to seasonal cacao harvests, private salon tastings, and limited couture drops.
            </p>

            <form onSubmit={handleSubscribe} className="pt-2">
              <div className="flex rounded-full overflow-hidden border border-[#4A2A22] bg-[#251410] focus-within:border-[#D4AF37] transition-colors p-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-transparent px-4 py-2 text-xs text-[#FAF6F0] placeholder:text-[#8D786A] focus:outline-none flex-1"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#FAF6F0] text-[#1B0E0B] rounded-full text-xs font-medium hover:bg-[#D4AF37] transition-colors flex items-center gap-1.5"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Inscribed</span>
                    </>
                  ) : (
                    <>
                      <span>Join</span>
                      <Send className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Legal / Accessibility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8D786A] gap-4">
          <p>© {new Date().getFullYear()} Atelier Velours SAS. All rights reserved. Haute Pâtisserie Française.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#D8C3AE] transition-colors">
              Privacy Charter
            </a>
            <a href="#" className="hover:text-[#D8C3AE] transition-colors">
              Bespoke Terms
            </a>
            <a href="#" className="hover:text-[#D8C3AE] transition-colors">
              Allergen Transparency
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
