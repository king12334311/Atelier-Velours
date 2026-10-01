import React, { useState } from 'react';
import { X, Sparkles, Calendar, CheckCircle2, ChevronRight, User, Mail, Phone, Heart } from 'lucide-react';
import { BespokeInquiry } from '../types';

interface BespokeBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (inquiry: BespokeInquiry) => void;
}

export const BespokeBuilderModal: React.FC<BespokeBuilderModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [step, setStep] = useState<number>(1);
  const [celebrationType, setCelebrationType] = useState('Wedding Gala');
  const [tiers, setTiers] = useState(3);
  const [guestCount, setGuestCount] = useState(60);
  const [flavorPreference, setFlavorPreference] = useState('Valrhona 72% Noir & Wild Blackberry');
  const [eventDate, setEventDate] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderReference, setOrderReference] = useState('');

  if (!isOpen) return null;

  const occasions = [
    'Wedding Gala',
    'Milestone Anniversary',
    'Couture Birthday',
    'Diplomatic / Corporate Gala',
    'Intimate Private Salon Dinner'
  ];

  const flavorOptions = [
    'Valrhona 72% Noir & Wild Blackberry',
    'Grasse Rose & Alpine Wild Strawberry',
    'Volcanic Bronte Pistachio & Kochi Yuzu',
    'Madagascar Bourbon Vanilla & Salted Praliné'
  ];

  // Dynamic estimated starting commission price
  const estimatedBasePrice = tiers === 1 ? 195 : tiers === 2 ? 380 : tiers === 3 ? 650 : 980;
  const estimatedTotal = estimatedBasePrice + Math.round(guestCount * 4.5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `VELOURS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderReference(refCode);
    setIsSubmitted(true);
    onSuccess({
      celebrationType,
      tiers,
      guestCount,
      flavorPreference,
      eventDate,
      specialRequests,
      clientName,
      clientEmail,
      clientPhone
    });
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B0E0B]/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#FAF6F0] rounded-3xl border border-[#D9C5B4] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="p-6 sm:px-8 border-b border-[#E8D9CA] flex items-center justify-between bg-[#FAF6F0]">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#8D786A] font-semibold block">
              Atelier Commission Concierge
            </span>
            <h3 className="font-serif-display text-2xl text-[#241712] font-medium">
              Bespoke Cake Architecture
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 text-[#8D786A] hover:text-[#211713] hover:bg-[#EADDCF]/40 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif-display text-3xl text-[#211713] font-medium">
                Commission Inquiry Received
              </h4>
              <p className="text-sm text-[#594236] max-w-md mx-auto font-light leading-relaxed">
                Merci, {clientName}. Your bespoke dossier has been assigned reference{' '}
                <strong className="font-mono text-[#2B1712]">{orderReference}</strong>. Our head pastry chef will review your architectural specifications and contact you within 24 hours to schedule your private tasting session.
              </p>
              <div className="p-4 rounded-2xl bg-[#F6EFE6] border border-[#E8D9CA] max-w-md mx-auto text-left text-xs space-y-1 text-[#594236]">
                <p><strong className="text-[#2B1712]">Occasion:</strong> {celebrationType} ({tiers} Tiers, ~{guestCount} Guests)</p>
                <p><strong className="text-[#2B1712]">Flavor Accord:</strong> {flavorPreference}</p>
                <p><strong className="text-[#2B1712]">Event Date:</strong> {eventDate || 'To be finalized'}</p>
                <p><strong className="text-[#2B1712]">Estimated Investment:</strong> ~${estimatedTotal} USD</p>
              </div>
              <button
                onClick={resetAndClose}
                className="mt-6 px-8 py-3 bg-[#2B1712] text-[#FAF6F0] rounded-full text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#3A2019]"
              >
                Return to Atelier
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Occasion & Architectural Scale */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8D786A] font-semibold mb-2">
                      1. Select Celebration Nature:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {occasions.map((occ) => (
                        <button
                          type="button"
                          key={occ}
                          onClick={() => setCelebrationType(occ)}
                          className={`p-3 text-left rounded-xl text-xs font-medium border transition-all ${
                            celebrationType === occ
                              ? 'bg-[#2B1712] text-[#FAF6F0] border-[#2B1712]'
                              : 'bg-[#F6EFE6] text-[#241712] border-[#E8D9CA] hover:border-[#8D786A]'
                          }`}
                        >
                          {occ}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs uppercase tracking-wider text-[#8D786A] font-semibold">
                        2. Architectural Tier Elevation:
                      </label>
                      <span className="text-xs font-mono text-[#2B1712] font-semibold">
                        {tiers} {tiers === 1 ? 'Tier (Salon)' : 'Tiers (Monument)'}
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setTiers(t)}
                          className={`py-2.5 rounded-xl text-xs font-mono font-medium border transition-all ${
                            tiers === t
                              ? 'bg-[#2B1712] text-[#FAF6F0] border-[#2B1712]'
                              : 'bg-[#F6EFE6] text-[#241712] border-[#E8D9CA]'
                          }`}
                        >
                          {t} Tier{t > 1 ? 's' : ''}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs uppercase tracking-wider text-[#8D786A] font-semibold">
                        3. Anticipated Connoisseur Count:
                      </label>
                      <span className="text-xs font-mono text-[#2B1712] font-semibold tabular-nums">
                        {guestCount} Guests
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="200"
                      step="5"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full accent-[#2B1712] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-[#8D786A] font-mono mt-1">
                      <span>10 Guests (Intimate)</span>
                      <span>100 Guests (Gala)</span>
                      <span>200+ Guests (Grand)</span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 bg-[#2B1712] text-[#FAF6F0] rounded-full text-xs uppercase tracking-[0.16em] font-medium flex items-center gap-2 hover:bg-[#3A2019]"
                    >
                      <span>Next: Flavor & Taste</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Flavor Accord & Event Date */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8D786A] font-semibold mb-2">
                      4. Preferred Flavor Symphony:
                    </label>
                    <div className="space-y-2">
                      {flavorOptions.map((f) => (
                        <button
                          type="button"
                          key={f}
                          onClick={() => setFlavorPreference(f)}
                          className={`w-full p-3 text-left rounded-xl text-xs font-medium border flex items-center justify-between transition-all ${
                            flavorPreference === f
                              ? 'bg-[#2B1712] text-[#FAF6F0] border-[#2B1712]'
                              : 'bg-[#F6EFE6] text-[#241712] border-[#E8D9CA] hover:border-[#8D786A]'
                          }`}
                        >
                          <span>{f}</span>
                          {flavorPreference === f && (
                            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8D786A] font-semibold mb-2">
                      5. Event Celebration Date:
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D9C5B4] bg-[#F6EFE6] text-xs text-[#241712] focus:outline-none focus:border-[#2B1712]"
                        required
                      />
                    </div>
                    <p className="text-[10px] text-[#8D786A] mt-1">
                      *We recommend minimum 2 weeks notice for bespoke multi-tiered architectures.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8D786A] font-semibold mb-2">
                      6. Floral Sculptures or Special Wishes:
                    </label>
                    <textarea
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      rows={2}
                      placeholder="e.g. 24k gold monogram 'C & J', sugar orchids, gluten-free base..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D9C5B4] bg-[#F6EFE6] text-xs text-[#241712] focus:outline-none focus:border-[#2B1712] placeholder:text-[#8D786A]"
                    />
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 border border-[#2B1712] text-[#2B1712] rounded-full text-xs uppercase tracking-[0.16em]"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 bg-[#2B1712] text-[#FAF6F0] rounded-full text-xs uppercase tracking-[0.16em] font-medium flex items-center gap-2 hover:bg-[#3A2019]"
                    >
                      <span>Next: Client Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact & Submission */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="p-4 rounded-2xl bg-[#EADDCF]/40 border border-[#D9C5B4] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8D786A] block">
                        Estimated Custom Commission:
                      </span>
                      <span className="font-serif-display text-2xl text-[#211713] font-semibold">
                        ~${estimatedTotal} USD
                      </span>
                    </div>
                    <span className="text-[11px] text-[#8D786A]">
                      Includes salon tasting & white-glove transport
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8D786A] font-semibold mb-1">
                      Full Name:
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 absolute left-3.5 top-3 text-[#8D786A]" />
                      <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Madame / Monsieur..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D9C5B4] bg-[#F6EFE6] text-xs text-[#241712] focus:outline-none focus:border-[#2B1712]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8D786A] font-semibold mb-1">
                      Email Address:
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 absolute left-3.5 top-3 text-[#8D786A]" />
                      <input
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="concierge@domain.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D9C5B4] bg-[#F6EFE6] text-xs text-[#241712] focus:outline-none focus:border-[#2B1712]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8D786A] font-semibold mb-1">
                      Phone Number:
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 absolute left-3.5 top-3 text-[#8D786A]" />
                      <input
                        type="tel"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="+33 or +1 ..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D9C5B4] bg-[#F6EFE6] text-xs text-[#241712] focus:outline-none focus:border-[#2B1712]"
                        required
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 border border-[#2B1712] text-[#2B1712] rounded-full text-xs uppercase tracking-[0.16em]"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#2B1712] text-[#FAF6F0] rounded-full text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#3A2019] shadow-lg flex items-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Submit Commission Dossier</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
