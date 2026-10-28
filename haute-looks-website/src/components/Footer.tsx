import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, ArrowUp } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-12 border-t border-gold/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gold/20 text-left">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl sm:text-3xl tracking-[0.08em] text-ivory">
                HAUTE LOOKS
              </span>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold font-semibold -mt-0.5">
                Unisex Salon &amp; Bridal Studio
              </span>
            </div>

            <p className="text-xs sm:text-sm text-ivory/90 font-light leading-relaxed max-w-sm">
              A salon in Karaikudi for haircuts, beauty services, bridal makeup and men&apos;s grooming. Open since 2020.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-ivory">
              <span className="inline-block w-2 h-2 rounded-full bg-gold" />
              <span>Karaikudi, Tamil Nadu</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg text-gold font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-ivory/90">
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  About Haute Looks
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-gold transition-colors">
                  Bridal Studio
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gold transition-colors">
                  About the salon
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-gold transition-colors">
                  Salon Locations
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-gold transition-colors">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Unisex Salon Branch */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg text-gold font-medium">
              Unisex &amp; Bridal Branch
            </h4>
            <div className="text-sm text-ivory/90 space-y-2 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-gold flex-shrink-0 mt-0.5" />
                <span>1/5, 7th Street ICICI, opp. College Rd, Subramaniyapuram South, Vairavapuram, Karaikudi 630001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`} className="text-gold hover:underline">
                  {SALON_INFO.primaryPhone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={14} className="text-gold flex-shrink-0" />
                <span>8:30 AM to 9:00 PM Daily</span>
              </p>
            </div>
          </div>

          {/* Men's Grooming Branch */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg text-gold font-medium">
              Men&apos;s Grooming Branch
            </h4>
            <div className="text-sm text-ivory/90 space-y-2 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-gold flex-shrink-0 mt-0.5" />
                <span>JS Complex, CK Mahal Road, near Indian Oil Petrol Bunk, Burma Colony, Karaikudi, Kalanivasal 630002</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={14} className="text-gold flex-shrink-0" />
                <span>8:30 AM to 9:00 PM Daily</span>
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold-light transition-colors font-medium"
                >
                  <MessageCircle size={14} />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/70 font-light">
          <p>
            &copy; {new Date().getFullYear()} {SALON_INFO.name}. All Rights Reserved. Karaikudi, Tamil Nadu.
          </p>

          <div className="flex items-center gap-6">
            <span>Unisex salon &amp; bridal studio</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-charcoal transition-all text-ivory flex items-center justify-center"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
