import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [customInscription, setCustomInscription] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const packagingFee = subtotal > 0 ? 0 : 0; // Complimentary luxury packaging
  const total = subtotal - discountAmount + packagingFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'BIENVENUE10') {
      setDiscountPercent(10);
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "BIENVENUE10" for 10% privilege');
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNum = `AV-${Math.floor(10000 + Math.random() * 90000)}`;
    setConfirmedOrderId(orderNum);
    setOrderConfirmed(true);
    setIsCheckingOut(false);
    onClearCart();
  };

  const handleCloseAll = () => {
    setOrderConfirmed(false);
    setIsCheckingOut(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#1B0E0B]/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6F0] shadow-2xl flex flex-col justify-between border-l border-[#D9C5B4]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#E8D9CA] flex items-center justify-between">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8D786A] font-semibold block">
                Atelier Shopping Bag
              </span>
              <h3 className="font-serif-display text-2xl text-[#211713] font-medium">
                Your Selection ({items.reduce((sum, i) => sum + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={handleCloseAll}
              className="p-2 text-[#8D786A] hover:text-[#211713] rounded-full hover:bg-[#EADDCF]/50 transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {orderConfirmed ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-serif-display text-3xl text-[#211713]">
                  Order Confirmed
                </h4>
                <p className="text-xs uppercase tracking-widest text-[#8D786A] font-mono">
                  Receipt #{confirmedOrderId}
                </p>
                <p className="text-xs text-[#594236] leading-relaxed font-light">
                  Your pastry creation has been booked into tomorrow dawn’s baking docket. A luxury presentation box with white-glove packaging is prepared.
                </p>
                <button
                  onClick={handleCloseAll}
                  className="mt-4 px-6 py-2.5 bg-[#2B1712] text-[#FAF6F0] rounded-full text-xs uppercase tracking-wider"
                >
                  Continue Exploring
                </button>
              </div>
            ) : isCheckingOut ? (
              /* Checkout Form */
              <form onSubmit={handleCompleteOrder} className="space-y-4 animate-fade-in">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#8D786A]">
                    Complete Reservation
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-[#8D786A] underline"
                  >
                    Back to bag
                  </button>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8D786A] font-semibold mb-1">
                    Pickup / Handover Date:
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#D9C5B4] bg-[#F6EFE6] text-xs text-[#241712]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8D786A] font-semibold mb-1">
                    Recipient / Connoisseur Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Full name for salon pickup"
                    className="w-full px-3 py-2 rounded-xl border border-[#D9C5B4] bg-[#F6EFE6] text-xs text-[#241712]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8D786A] font-semibold mb-1">
                    Mobile Phone (For Dispatch Alerts):
                  </label>
                  <input
                    type="tel"
                    placeholder="+33 or +1 ..."
                    className="w-full px-3 py-2 rounded-xl border border-[#D9C5B4] bg-[#F6EFE6] text-xs text-[#241712]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8D786A] font-semibold mb-1">
                    Gold Chocolate Plaque Calligraphy (Complimentary):
                  </label>
                  <input
                    type="text"
                    value={customInscription}
                    onChange={(e) => setCustomInscription(e.target.value)}
                    placeholder="e.g. Joyeux Anniversaire Sophie ✨"
                    className="w-full px-3 py-2 rounded-xl border border-[#D9C5B4] bg-[#F6EFE6] text-xs text-[#241712]"
                  />
                </div>

                <div className="pt-2">
                  <div className="p-3 bg-[#EADDCF]/40 rounded-xl text-xs space-y-1 text-[#594236]">
                    <div className="flex justify-between">
                      <span>Total Due Upon Handover:</span>
                      <span className="font-semibold text-[#211713]">${total} USD</span>
                    </div>
                    <p className="text-[10px] text-[#8D786A]">
                      No upfront card charge needed. Pay on boutique pickup or courier handover.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#2B1712] text-[#FAF6F0] rounded-full text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#3A2019] shadow-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Confirm Handcrafted Reservation</span>
                </button>
              </form>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <p className="font-serif-display text-2xl text-[#8D786A]">
                  Your bag is empty
                </p>
                <p className="text-xs text-[#594236] max-w-xs mx-auto font-light">
                  Browse our couture chocolate entremets and signature cakes to begin your tasting experience.
                </p>
              </div>
            ) : (
              /* Itemized list */
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#F6EFE6] border border-[#E8D9CA] flex gap-4 items-center justify-between"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#D9C5B4]/50">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-base text-[#211713] font-medium truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-[10px] text-[#8D786A] uppercase tracking-wider">
                        {item.selectedSize} · {item.serves}
                      </p>
                      <p className="text-xs font-mono font-medium text-[#2B1712] mt-0.5">
                        ${item.unitPrice}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#8D786A] hover:text-red-700 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center border border-[#D9C5B4] rounded-lg bg-[#FAF6F0] px-1.5 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="p-0.5 text-[#594236] hover:text-[#211713]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono px-2 text-[#211713] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-0.5 text-[#594236] hover:text-[#211713]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Privilege code (BIENVENUE10)"
                      className="flex-1 px-3 py-2 text-xs rounded-xl border border-[#D9C5B4] bg-[#F6EFE6] text-[#241712] focus:outline-none uppercase"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#2B1712] text-[#FAF6F0] text-xs font-medium rounded-xl hover:bg-[#3A2019]"
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-[11px] text-emerald-700 mt-1 font-medium">
                      ✓ 10% Welcome Atelier privilege applied!
                    </p>
                  )}
                  {promoError && (
                    <p className="text-[11px] text-red-600 mt-1">{promoError}</p>
                  )}
                </form>
              </div>
            )}

          </div>

          {/* Footer Subtotal & Action */}
          {!orderConfirmed && items.length > 0 && !isCheckingOut && (
            <div className="p-6 border-t border-[#E8D9CA] bg-[#FAF6F0] space-y-4">
              <div className="space-y-1.5 text-xs text-[#594236]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-[#211713]">${subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Privilege Discount ({discountPercent}%)</span>
                    <span className="font-mono">-${discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#8D786A]">
                  <span>White-Glove Presentation Box</span>
                  <span className="font-mono text-emerald-700">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-[#211713] pt-2 border-t border-[#E8D9CA]">
                  <span>Total Amount</span>
                  <span className="font-serif text-lg font-semibold">${total} USD</span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-4 bg-[#2B1712] text-[#FAF6F0] rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#3A2019] shadow-xl flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                <span>Proceed to Reservation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#8D786A]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Boutique pickup or chilled courier delivery guaranteed</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
