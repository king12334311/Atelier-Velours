import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenBespoke: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenBespoke
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Creations', href: '#featured' },
    { name: 'Sensations', href: '#sensations' },
    { name: 'The Craft', href: '#process' },
    { name: 'Cake DNA', href: '#dna' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Atelier', href: '#bespoke-cta' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#D9C5B4]/50 py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element Brand Zone */}
          <a
            href="#"
            className="group flex flex-col text-left focus-visible:outline-none"
            aria-label="Atelier Velours Home"
          >
            <span className="font-serif-display text-2xl sm:text-3xl tracking-[0.18em] uppercase text-[#241712] font-medium transition-colors group-hover:text-[#4A2A22]">
              Atelier Velours
            </span>
            <span className="text-[9px] tracking-[0.28em] uppercase text-[#8D786A] font-medium -mt-0.5">
              Haute Pâtisserie Paris
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.15em] uppercase font-medium text-[#4A2A22]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative py-1 text-[#4A2A22]/80 hover:text-[#211713] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#2B1712] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions + functional controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#4A2A22] hover:text-[#211713] hover:bg-[#EADDCF]/40 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-[#2B1712]"
              aria-label="Search pastries and flavors"
            >
              <Search className="w-4 h-4 stroke-[1.5]" />
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#4A2A22] hover:text-[#211713] hover:bg-[#EADDCF]/40 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-[#2B1712]"
              aria-label={`Shopping bag containing ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#2B1712] text-[#FAF6F0] text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center tabular-nums shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenBespoke}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[11px] uppercase tracking-[0.16em] font-medium text-[#FAF6F0] bg-[#2B1712] rounded-full hover:bg-[#3A2019] hover:shadow-md transition-all active:scale-[0.98] whitespace-nowrap"
            >
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Bespoke Order</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4A2A22] hover:bg-[#EADDCF]/50 rounded-full transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#1B0E0B]/50 backdrop-blur-sm transition-opacity duration-300">
          <div className="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#FAF6F0] shadow-2xl p-8 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-8">
              <div className="flex items-center justify-between pb-6 border-b border-[#D9C5B4]/50">
                <span className="font-serif-display text-xl tracking-[0.15em] text-[#241712] uppercase">
                  Atelier Velours
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#4A2A22] rounded-full hover:bg-[#EADDCF]/60"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="font-serif-display text-2xl text-[#2B1712] hover:text-[#8D786A] transition-colors py-1 border-b border-[#EADDCF]/40"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBespoke();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 text-xs uppercase tracking-[0.18em] font-semibold text-[#FAF6F0] bg-[#2B1712] rounded-full shadow-md active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Commission Custom Cake</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="w-full py-3 px-6 text-xs uppercase tracking-[0.18em] font-medium text-[#2B1712] border border-[#2B1712] rounded-full hover:bg-[#2B1712]/5"
                >
                  View Shopping Bag ({cartCount})
                </button>
              </div>
            </div>

            <div className="pt-8 border-t border-[#D9C5B4]/50 text-xs text-[#8D786A] space-y-1">
              <p className="font-medium text-[#2B1712]">48 Rue de Sèvres, Paris 7e</p>
              <p>Mardi – Dimanche: 08:30 – 19:30</p>
              <p>concierge@ateliervelours.fr</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
