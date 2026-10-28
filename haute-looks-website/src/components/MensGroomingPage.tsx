import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, Scissors, CheckCircle2, ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react';
import { SALON_INFO, BRANCHES } from '../data/salonData';
import { BranchId } from '../types';

interface MensGroomingPageProps {
  onBack: () => void;
  onBookService: (serviceName: string, branch: BranchId) => void;
}

interface MensStyle {
  title: string;
  category: string;
  description: string;
  upkeep: string;
  bestFor: string;
  image: string;
}

interface GroomingServiceItem {
  title: string;
  duration: string;
  pricing: string;
  description: string;
  includes: string[];
  bookingService: string;
}

const MENS_STYLES: MensStyle[] = [
  {
    title: 'Textured Crop & Low Skin Fade',
    category: 'Haircut Style',
    description: 'Precision scissor-over-comb crop with textured micro-layers on top and a clean skin-tapered fade on the neck and sides.',
    upkeep: 'Refreshed every 2 to 3 weeks',
    bestFor: 'Modern casual, athletic and contemporary everyday style',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Executive Pompadour & Side Part',
    category: 'Haircut Style',
    description: 'Classic barbered side part with tapered neckline and a natural-shine pomade finish for a sharp, executive silhouette.',
    upkeep: 'Refreshed every 3 to 4 weeks',
    bestFor: 'Business, formal occasions, groomsmen and office attire',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Precision Beard Sculpture & Line-Up',
    category: 'Beard Design',
    description: 'Sharp razor line-up along cheekbones and jawline, graduated trimming for density balance, finished with nourishing beard elixir.',
    upkeep: 'Refreshed every 10 to 14 days',
    bestFor: 'Medium to heavy beards seeking clean, structured definition',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Stubble Gradient & Neck Clean-Up',
    category: 'Beard Design',
    description: 'Balanced short designer stubble with gentle fading into the neck and cheeks, eliminating rough edges while maintaining rugged texture.',
    upkeep: 'Refreshed weekly or bi-weekly',
    bestFor: 'Light to medium stubble, low maintenance refinement',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
  },
];

const MENS_SERVICES: GroomingServiceItem[] = [
  {
    title: 'Classic Haircut & Hot Towel Finish',
    duration: '30 - 45 mins',
    pricing: 'Standard salon service',
    description: 'Consultation with our master barber, custom scissor or clipper cut, refreshing hair wash, and hot towel neck finish.',
    includes: [
      'Face shape consultation',
      'Scissor & clipper precision cut',
      'Invigorating scalp wash & tonic',
    ],
    bookingService: 'Men: Haircut and styling',
  },
  {
    title: 'Signature Beard Grooming & Styling',
    duration: '25 - 40 mins',
    pricing: 'Standard salon service',
    description: 'Hot steam towel, custom clipper sculpting, razor cheek edge definition, and organic beard oil treatment for shine.',
    includes: [
      'Hot towel prep to soften facial hair',
      'Precision razor and clipper shaping',
      'Beard conditioner & soothing aftershave balm',
    ],
    bookingService: 'Men: Beard grooming',
  },
  {
    title: 'Revitalizing Hair Spa & Scalp Detox',
    duration: '45 - 60 mins',
    pricing: 'Specialized scalp therapy',
    description: 'Formulated to relieve stress, tackle dandruff, stimulate roots, and deeply cleanse the scalp using nutrient-rich hair cremes.',
    includes: [
      'Acupressure head, neck & shoulder massage',
      'Purifying anti-dandruff / nutritive mask',
      'Warm steam therapy & cold rinse',
    ],
    bookingService: 'Men: Hair spa and treatment',
  },
  {
    title: 'Men’s Brightening Facial & De-Tan Care',
    duration: '45 - 60 mins',
    pricing: 'Skincare wellness',
    description: 'Designed specifically for men’s skin exposed to sun and city pollutants. Deep cleans pores, fades tan, and restores natural radiance.',
    includes: [
      'Gentle exfoliating scrub & steam',
      'Cooling de-tan face pack',
      'Hydrating moisturizer with SPF protection',
    ],
    bookingService: 'Men: Facials and skincare',
  },
  {
    title: 'Natural Men’s Hair & Beard Colour',
    duration: '45 - 60 mins',
    pricing: 'Tailored to coverage required',
    description: 'Subtle, natural-looking grey blending for hair and beard without harsh reddish tones or artificial appearance.',
    includes: [
      'Tone matching consultation',
      'Ammonia-free gentle formula application',
      'Colour-lock wash & beard conditioning',
    ],
    bookingService: 'Men: Hair colour',
  },
  {
    title: 'Executive Manicure & Foot Pedicure',
    duration: '45 - 60 mins',
    pricing: 'Grooming therapy',
    description: 'Complete nail trimming, cuticle cleaning, foot soak, and dead skin scrub for impeccably groomed hands and relaxed feet.',
    includes: [
      'Warm antiseptic foot soak',
      'Callus smoothing & foot scrub',
      'Nail buffing and cuticle maintenance',
    ],
    bookingService: 'Men: Manicure and pedicure',
  },
];

export const MensGroomingPage: React.FC<MensGroomingPageProps> = ({ onBack, onBookService }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const mensBranch = BRANCHES.find((b) => b.id === 'mens');

  return (
    <div className="bg-[#fbf7f2] text-charcoal min-h-screen">
      {/* Mens Header Hero */}
      <section className="relative overflow-hidden bg-[#18191b] text-ivory py-16 sm:py-24 border-b border-gold/20">
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(214,175,101,0.18),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            type="button"
            onClick={onBack}
            className="group mb-8 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-gold-light transition-all hover:bg-gold hover:text-charcoal"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </button>

          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <Sparkles size={14} /> Haute Looks Men&apos;s Grooming · Burma Colony
            </p>
            <h1 className="font-serif text-3xl font-normal tracking-tight sm:text-5xl lg:text-6xl text-ivory">
              Sharper Cuts. Refined Grooming.
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-ivory/80 max-w-2xl">
              Step into our dedicated men&apos;s grooming studio on CK Mahal Road for master barbering, crisp beard shaping, revitalizing hair spas, and men&apos;s skincare.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                type="button"
                onClick={() => onBookService('Men: Haircut and styling', 'mens')}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-xs font-semibold tracking-wider uppercase text-charcoal transition-all hover:bg-gold-light"
              >
                <Scissors size={15} /> Book Men&apos;s Grooming
              </button>

              <div className="flex items-center gap-2 text-xs text-ivory/70 border-l border-gold/30 pl-4">
                <MapPin size={14} className="text-gold" />
                <span>JS Complex, CK Mahal Rd, Karaikudi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Haircuts & Beard Styles Gallery */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
              Style Catalog
            </span>
            <h2 className="mt-2 font-serif text-3xl font-normal sm:text-4xl text-charcoal">
              Men&apos;s Haircut Styles &amp; Beard Designs
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-charcoal/75">
              Explore the signature cuts and sculpted beard designs performed regularly at Haute Looks Men&apos;s Grooming.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {MENS_STYLES.map((style, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-gold/25 bg-white shadow-[0_14px_35px_rgba(40,20,10,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgba(40,20,10,0.12)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/15 to-transparent" />
                  <div className="absolute top-3 left-3 rounded-full border border-gold/30 bg-charcoal/70 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase text-gold-light backdrop-blur-md">
                    {style.category}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-ivory">
                    <h3 className="font-serif text-lg leading-snug">{style.title}</h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <p className="text-xs leading-relaxed text-charcoal/75">{style.description}</p>
                  
                  <div className="mt-4 pt-3 border-t border-gold/15 space-y-1.5 text-[11px]">
                    <div>
                      <span className="font-semibold text-charcoal">Recommended: </span>
                      <span className="text-charcoal/70">{style.bestFor}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-charcoal">Maintenance: </span>
                      <span className="text-charcoal/70">{style.upkeep}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onBookService(style.category === 'Beard Design' ? 'Men: Beard grooming' : 'Men: Haircut and styling', 'mens')}
                    className="mt-5 w-full inline-flex items-center justify-center gap-1.5 rounded-full border border-gold bg-[#fbf7f2] py-2 text-xs font-semibold uppercase tracking-wider text-charcoal transition-all hover:bg-gold hover:text-charcoal"
                  >
                    Select Look
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Grooming Services Menu */}
      <section className="bg-[#f2ece2] py-16 sm:py-24 border-y border-gold/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
              Men&apos;s Menu
            </span>
            <h2 className="mt-2 font-serif text-3xl font-normal sm:text-4xl text-charcoal">
              Grooming Services &amp; Rituals
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-charcoal/75">
              Full suite of grooming services designed specifically for men at our dedicated Burma Colony branch.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MENS_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="rounded-[22px] border border-gold/25 bg-white p-6 shadow-[0_12px_28px_rgba(40,20,10,0.05)] transition-all hover:border-gold flex flex-col justify-between"
              >
                <div>
                  <div className="border-b border-gold/15 pb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-dark">
                      {srv.pricing}
                    </span>
                    <h3 className="font-serif text-xl text-charcoal mt-1">{srv.title}</h3>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-charcoal/60">
                      <Clock size={12} className="text-gold-dark" />
                      <span>{srv.duration}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-charcoal/80">
                    {srv.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {srv.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-charcoal/70">
                        <CheckCircle2 size={12} className="shrink-0 text-gold-dark" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gold/15 flex items-center justify-between">
                  <span className="text-[11px] text-charcoal/60">Men&apos;s Grooming Branch</span>
                  <button
                    type="button"
                    onClick={() => onBookService(srv.bookingService, 'mens')}
                    className="inline-flex items-center gap-1.5 rounded-full bg-charcoal px-4 py-2 text-xs font-semibold text-ivory transition-all hover:bg-gold hover:text-charcoal"
                  >
                    Book Now
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Callout for Men's Branch */}
      {mensBranch && (
        <section className="py-16 bg-white border-b border-gold/15">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[26px] border border-gold/30 bg-[#fbf7f2] p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
              <div className="flex-1 space-y-4">
                <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  Exclusive Men&apos;s Location
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                  {mensBranch.name}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal/75">
                  {mensBranch.address}
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-medium text-charcoal/80">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-gold-dark" /> {mensBranch.hours}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone size={14} className="text-gold-dark" /> {SALON_INFO.primaryPhone}
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex flex-col gap-3 w-full sm:w-auto">
                <a
                  href={mensBranch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-charcoal transition-all hover:bg-gold/10"
                >
                  <MapPin size={14} /> Open in Google Maps
                </a>
                <button
                  type="button"
                  onClick={() => onBookService('Men: Haircut and styling', 'mens')}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-wider text-ivory transition-all hover:bg-gold hover:text-charcoal"
                >
                  Book Appointment Here
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
