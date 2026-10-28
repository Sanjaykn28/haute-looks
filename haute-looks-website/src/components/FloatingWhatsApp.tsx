import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = encodeURIComponent(
    'Hello Haute Looks, I would like to enquire about your services & appointments.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip greeting */}
      {showTooltip && (
        <div className="relative mb-3 max-w-xs rounded-2xl border border-gold/30 bg-white p-4 text-xs text-charcoal shadow-[0_18px_50px_rgba(41,37,34,0.18)] animate-fadeIn">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-charcoal/40 hover:text-charcoal"
          >
            <X size={12} />
          </button>
          <p className="font-semibold text-charcoal font-serif text-sm mb-1">
            Haute Looks Front Desk
          </p>
          <p className="text-charcoal/70 leading-relaxed font-light">
            Have a question or want to book? Send us a message on WhatsApp.
          </p>
          <span className="text-[10px] text-gold-dark font-medium mt-1 block">
            Daily, 8:30 am–9:00 pm
          </span>
        </div>
      )}

      {/* Floating Pill */}
      <a
        href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center gap-2.5 rounded-full border border-white/25 bg-[#128C7E] px-4 py-3 text-white shadow-[0_10px_30px_rgba(18,140,126,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f796c] hover:shadow-[0_14px_36px_rgba(18,140,126,0.42)]"
        aria-label="Chat with Haute Looks on WhatsApp"
      >
        <MessageCircle size={22} className="relative z-10" />
        <span className="relative z-10 text-sm font-semibold hidden sm:inline">
          Message us
        </span>
      </a>
    </div>
  );
};
