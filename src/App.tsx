import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MoodSection } from './components/MoodSection';
import { FeaturedCreation } from './components/FeaturedCreation';
import { FeaturesBenefits } from './components/FeaturesBenefits';
import { ProcessSection } from './components/ProcessSection';
import { CakeDnaSection } from './components/CakeDnaSection';
import { ArtisanBanner } from './components/ArtisanBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PrimaryCtaSection } from './components/PrimaryCtaSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { BespokeBuilderModal } from './components/BespokeBuilderModal';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { NotificationToast } from './components/NotificationToast';

import { SIGNATURE_CAKES } from './data/patisserieData';
import { CakeProduct, CartItem, SensationCategory, BespokeInquiry } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'initial-1',
      product: SIGNATURE_CAKES[0],
      selectedSize: '8-inch Classique',
      serves: '10–14 Connoisseurs',
      unitPrice: 175,
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBespokeOpen, setIsBespokeOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewCake, setQuickViewCake] = useState<CakeProduct | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart operations
  const handleAddToCart = (
    product: CakeProduct,
    size: string,
    serves: string,
    price: number
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [
        ...prev,
        {
          id: `${product.id}-${size}-${Date.now()}`,
          product,
          selectedSize: size,
          serves,
          unitPrice: price,
          quantity: 1
        }
      ];
    });

    setToastMessage(`"${product.name}" (${size}) added to your bag.`);
    setTimeout(() => {
      setToastMessage((msg) => (msg?.includes(product.name) ? null : msg));
    }, 3500);
  };

  const handleUpdateQuantity = (id: string, qty: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectSensation = (sensation: SensationCategory) => {
    const recommended =
      SIGNATURE_CAKES.find((c) => c.id === sensation.recommendedCakeId) ||
      SIGNATURE_CAKES[0];
    setQuickViewCake(recommended);
  };

  const handleBespokeSubmit = (inquiry: BespokeInquiry) => {
    setToastMessage(`Commission dossier submitted for ${inquiry.celebrationType}. Merci!`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F6EFE6] text-[#241712] flex flex-col font-sans-body">
      {/* Fixed Sticky Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBespoke={() => setIsBespokeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('featured');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onBespokeClick={() => setIsBespokeOpen(true)}
        />

        {/* Section 6: Introduction / Sensation Mood Cards (Dark espresso theme) */}
        <MoodSection onSelectSensation={handleSelectSensation} />

        {/* Section 7: Featured Creation (Opéra Royal Truffle with 360 viewer) */}
        <FeaturedCreation
          onAddToCart={handleAddToCart}
          onCustomize={(cake) => setQuickViewCake(cake)}
        />

        {/* Section 8: Feature Benefits (4 pillars) */}
        <FeaturesBenefits />

        {/* Section 9: Process Storytelling (How The Masterpiece Comes Alive) */}
        <ProcessSection />

        {/* Section 10: Cake DNA Layer Architecture */}
        <CakeDnaSection
          onExploreRecipe={() => {
            setQuickViewCake(SIGNATURE_CAKES[0]);
          }}
        />

        {/* Section 11: Immersive Artisan Banner */}
        <ArtisanBanner />

        {/* Section 12: Customer Reviews & Connoisseur Acclaims */}
        <TestimonialsSection />

        {/* Section 13: Primary Conversion CTA */}
        <PrimaryCtaSection
          onOpenBespoke={() => setIsBespokeOpen(true)}
          onExploreMenu={() => {
            const el = document.getElementById('featured');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </main>

      {/* Section 14: Polished Footer */}
      <Footer />

      {/* Slide-Over Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Interactive Bespoke Cake Commission Engine Modal */}
      <BespokeBuilderModal
        isOpen={isBespokeOpen}
        onClose={() => setIsBespokeOpen(false)}
        onSuccess={handleBespokeSubmit}
      />

      {/* Quick View & Sommelier Dossier Modal */}
      <QuickViewModal
        cake={quickViewCake}
        onClose={() => setQuickViewCake(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(cake) => setQuickViewCake(cake)}
      />

      {/* Notification Toast */}
      <NotificationToast
        message={toastMessage}
        onDismiss={() => setToastMessage(null)}
      />
    </div>
  );
}
