import React from 'react';
import { ArrowRight, Clock3, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden bg-[#1b1715] text-ivory">
      <div className="absolute inset-0 z-0">
        <img
          src="/bridal-makeup.png"
          alt="Luxury bridal makeup portrait"
          className="h-full w-full object-cover object-[center_35%] opacity-55"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_30%,rgba(198,165,107,0.2),transparent_42%),linear-gradient(90deg,rgba(17,13,12,0.94)_0%,rgba(17,13,12,0.78)_42%,rgba(17,13,12,0.42)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#110d0c]/90 via-transparent to-[#110d0c]/15" />
        <div className="absolute inset-5 rounded-[26px] border border-gold/15 sm:inset-7 lg:inset-9" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-7 py-20 sm:px-12 lg:px-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-left"
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-charcoal/35 px-4 py-2 backdrop-blur-sm">
              <Sparkles size={14} className="text-gold-light" />
              <span className="text-[10px] font-medium tracking-[0.2em] text-gold-light uppercase sm:text-xs sm:tracking-[0.24em]">
                {SALON_INFO.tagline}
              </span>
            </div>

            <h1 className="max-w-3xl font-serif text-5xl font-normal leading-[1.02] tracking-[-0.045em] text-ivory sm:text-6xl lg:text-[4.75rem]">
              Beauty, made<br />
              <span className="text-gold-light italic">personal.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
              Hair, beauty and bridal services in Karaikudi, with thoughtful styling for your everyday and the moments you will always remember.
            </p>

            {/* <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
              >
                Book an appointment
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#bridal"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/30 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-ivory transition-all hover:border-gold/70 hover:bg-white/[0.08] hover:text-gold-light"
              >
                Explore Bridal Studio
                <ArrowRight size={14} />
              </a>
            </div> */}

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 border-t border-ivory/15 pt-6 sm:grid-cols-3 sm:gap-5">
              <div className="border-l border-gold/50 pl-3">
                <p className="font-serif text-2xl text-gold-light sm:text-3xl">Since 2020</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-ivory/60 sm:text-xs">Rooted in Karaikudi</p>
              </div>
              <div className="border-l border-gold/50 pl-3">
                <p className="font-serif text-2xl text-gold-light sm:text-3xl">2 branches</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-ivory/60 sm:text-xs">One local team</p>
              </div>
              <div className="col-span-2 border-l border-gold/50 pl-3 sm:col-span-1">
                <p className="font-serif text-2xl text-gold-light sm:text-3xl">Every day</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-ivory/60 sm:text-xs">8:30 AM – 9:00 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
            className="justify-self-center lg:justify-self-end"
          >
            <div className="luxury-panel relative w-full max-w-[390px] overflow-hidden rounded-[30px] border border-gold/35 bg-[#181311]/70 p-4 shadow-[0_32px_80px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:p-5">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent" />

              <div className="mb-4 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-ivory/80 sm:tracking-[0.24em]">
                <span>Made for your moment</span>
                <span className="inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2 py-1 text-gold-light">
                  <Star size={10} className="fill-current" />
                  Bridal
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[22px] border border-ivory/10 bg-[#211b18]">
                <img
                  src="/bridal-card.jpeg"
                  alt="Bridal makeup and traditional wedding styling"
                  className="h-72 w-full object-cover object-[center_30%] sm:h-[340px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-charcoal/45 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-ivory backdrop-blur-sm">
                  Your day, your signature
                </span>
              </div>

              <div className="mt-4 space-y-3 sm:mt-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold-light">Bridal studio</p>
                    <h2 className="mt-1.5 font-serif text-2xl text-ivory">A look that feels like you</h2>
                  </div>
                  <div className="mt-1 flex shrink-0 items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1.5 text-[10px] text-gold-light">
                    <Sparkles size={12} />
                    Personal
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm text-ivory/80">
                  <div className="rounded-2xl border border-ivory/10 bg-white/[0.04] p-3">
                    <div className="mb-2 flex items-center gap-2 text-gold-light">
                      <Sparkles size={13} />
                      <span className="text-[10px] uppercase tracking-[0.18em]">The details</span>
                    </div>
                    <p className="text-sm text-ivory">Hair &amp; makeup</p>
                  </div>
                  <div className="rounded-2xl border border-ivory/10 bg-white/[0.04] p-3">
                    <div className="mb-2 flex items-center gap-2 text-gold-light">
                      <Clock3 size={13} />
                      <span className="text-[10px] uppercase tracking-[0.18em]">The plan</span>
                    </div>
                    <p className="text-sm text-ivory">Consultation first</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-gold/80 transition-colors hover:text-gold sm:flex"
      >
        <span>About us</span>
        <span className="flex h-7 w-4 items-start justify-center rounded-full border border-gold/40 p-1">
          <span className="h-2 w-1 rounded-full bg-gold animate-bounce" />
        </span>
      </a>
    </section>
  );
};
