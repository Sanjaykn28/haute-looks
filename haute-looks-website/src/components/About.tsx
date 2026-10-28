import React from 'react';
import { Scissors } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[linear-gradient(180deg,#fffaf4_0%,#fbf5ed_100%)] py-24 text-charcoal lg:py-32">
      <div className="pointer-events-none absolute -right-36 top-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(198,165,107,0.12),transparent_68%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-wide text-gold-dark mb-3">About us</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-normal tracking-tight">
            A local salon, open since <span className="italic text-gold font-light">2020.</span>
          </h2>
        </div>

        {/* Editorial Layout: Images & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Sophisticated Editorial Photography Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Large Image */}
              <div className="relative overflow-hidden rounded-[26px] border border-gold/25 bg-white shadow-[0_28px_70px_rgba(41,37,34,0.14)]">
                <img
                  src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80"
                  alt="Haute Looks salon interior styling aesthetic Karaikudi"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gold-light font-medium">
                    Sanctuary of Refinement
                  </p>
                  <p className="font-serif text-xl sm:text-2xl font-light text-ivory mt-1">
                    Hair and beauty services in Karaikudi.
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Accent Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-60 rounded-2xl border border-gold/30 bg-white p-5 shadow-luxury-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark">
                    <Scissors size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal/70">At Haute Looks</p>
                    <p className="font-serif text-base text-charcoal">Hair, beauty &amp; bridal</p>
                  </div>
                </div>
                <p className="text-[11px] text-charcoal/70 leading-relaxed">
                  Choose a service at our unisex salon or men&apos;s grooming branch.
                </p>
              </div>

              {/* Established Stamp Tag */}
              <div className="absolute -left-3 -top-4 rounded-2xl border border-gold/40 bg-charcoal px-5 py-3 text-ivory shadow-xl">
                <p className="font-display text-lg font-bold text-gold tracking-widest text-center">ESTD.</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ivory/80 text-center font-medium">2020</p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Highlight Statement */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <p className="text-sm font-semibold tracking-wide text-gold-dark mb-3">
                Our story
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal leading-snug">
                A place to get ready, freshen up and feel like yourself.
              </h3>
            </div>

            <p className="text-charcoal text-base sm:text-lg font-light leading-relaxed">
              <span className="font-medium text-gold-dark">Haute Looks</span> opened in Karaikudi in <strong className="font-semibold text-charcoal">2020</strong>. We offer haircuts, colour, hair and skin treatments, bridal makeup and grooming. There are two locations: our unisex salon and bridal studio near College Road, and a separate men&apos;s grooming branch on CK Mahal Road.
            </p>

            <div className="relative py-6 pl-6 border-l-2 border-gold">
              <p className="font-serif text-xl sm:text-2xl text-charcoal leading-relaxed font-normal">
                {SALON_INFO.aboutStatement}
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
              <div className="pt-4 border-t border-gold/30">
                <div className="text-gold font-serif text-2xl mb-1">01</div>
                <h4 className="font-medium text-base text-charcoal mb-1">Unisex salon</h4>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Hair and beauty services for women and men.
                </p>
              </div>

              <div className="pt-4 border-t border-gold/30">
                <div className="text-gold font-serif text-2xl mb-1">02</div>
                <h4 className="font-medium text-base text-charcoal mb-1">Bridal studio</h4>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Makeup and styling for weddings and occasions.
                </p>
              </div>

              <div className="pt-4 border-t border-gold/30">
                <div className="text-gold font-serif text-2xl mb-1">03</div>
                <h4 className="font-medium text-base text-charcoal mb-1">Two locations</h4>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Find us near College Road and on CK Mahal Road.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
