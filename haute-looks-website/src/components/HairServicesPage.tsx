import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles, CheckCircle2, Scissors, ArrowUpRight, ShieldCheck, HeartHandshake, Eye, Check, X, Phone } from 'lucide-react';
import { BranchId } from '../types';
import { SALON_INFO } from '../data/salonData';

interface HairServicesPageProps {
  onBack: () => void;
  onBookService: (serviceName: string, branch: BranchId) => void;
}

interface HairDesign {
  id: string;
  title: string;
  tagline: string;
  category: 'Cuts & Layers' | 'Styling & Waves' | 'Smoothing & Treatments' | 'Hair Colour';
  description: string;
  suitableFor: string;
  finish: string;
  image: string;
  bookingService: string;
}

interface HairServiceOption {
  title: string;
  duration: string;
  priceEstimate: string;
  description: string;
  includes: string[];
  recommendedFor: string;
  bookingService: string;
}

const HAIR_DESIGNS: HairDesign[] = [
  {
    id: 'hd-1',
    title: 'Textured Soft Waves & Crown Braid',
    tagline: 'Understated elegance with floral hairpin accents',
    category: 'Styling & Waves',
    description: 'Sculpted romantic cascading waves with decorative French crown braiding, pinned delicately to hold all day while maintaining a fluid, soft drape.',
    suitableFor: 'Celebrations, engagements, festivals and evening parties',
    finish: 'Lustrous soft wave hold with hair accessory placement',
    image: '/hair-styling.png',
    bookingService: 'Women: Haircut and styling',
  },
  {
    id: 'hd-2',
    title: 'Silk Protein Smoothening & Gloss',
    tagline: 'Humidity-resistant glass hair finish',
    category: 'Smoothing & Treatments',
    description: 'Expert thermal alignment and deep protein therapy that seals cuticles against Karaikudi humidity, leaving locks mirror-like, silky, and tangle-free.',
    suitableFor: 'Frizzy, wavy, rough or unmanageable locks seeking mirror shine',
    finish: 'Silky, mirror-like straight sheen',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
    bookingService: 'Women: Hair Smoothening and Anti-Frizz Treatments',
  },
  {
    id: 'hd-3',
    title: 'Rich Balayage & Dimensional Colour',
    tagline: 'Sun-kissed tones matched to your complexion',
    category: 'Hair Colour',
    description: 'Hand-painted multidimensional tones blending warm mocha, caramel, and chocolate hues with ammonia-safe nourishing salon pigments.',
    suitableFor: 'Adding depth, contrast, warm radiance & modern dimension',
    finish: 'Soft blended gradient with high-gloss reflex',
    image: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?auto=format&fit=crop&w=800&q=80',
    bookingService: 'Women: Hair Colour',
  },
  {
    id: 'hd-4',
    title: 'Precision Face-Framing Layered Cut',
    tagline: 'Feathered movement, bounce and natural shape',
    category: 'Cuts & Layers',
    description: 'Bespoke layering tailored to your face silhouette and hair density, finished with a bouncy blowout that accentuates natural texture.',
    suitableFor: 'Medium to long hair, removing split ends and adding body',
    finish: 'Voluminous, bouncy salon blowout',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    bookingService: 'Women: Haircut and styling',
  },
  {
    id: 'hd-5',
    title: 'Traditional Floral Bridal Jadai & Braid',
    tagline: 'Ceremonial perfection for South Indian brides',
    category: 'Styling & Waves',
    description: 'Classic ceremonial plaited braid styled with authentic fresh jasmine veni, gold temple billai ornaments, and secure all-day grip.',
    suitableFor: 'Muhurtham ceremonies, temple rituals & traditional functions',
    finish: 'Structured traditional floral jadai drape',
    image: '/bridal-card.jpeg',
    bookingService: 'Bridal: Bridal makeup',
  },
  {
    id: 'hd-6',
    title: 'Intensive Scalp Therapy & Botanical Spa',
    tagline: 'Deep nourishment, stress relief and follicle strength',
    category: 'Smoothing & Treatments',
    description: 'Restorative therapy combining stimulating pressure-point scalp massage, rich botanical hair butter, and soothing steam infusion.',
    suitableFor: 'Dry, stressed scalp, seasonal hair fall or lack of luster',
    finish: 'Deeply hydrated, soft, revitalized hair strands',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    bookingService: 'Women: Hair Spa and Treatment',
  },
];

const HAIR_SERVICE_OPTIONS: HairServiceOption[] = [
  {
    title: 'Signature Haircut, Wash & Blowdry',
    duration: '45 - 60 mins',
    priceEstimate: 'Consultation & service customized in salon',
    description: 'Complete personal consultation, scalp-cleansing wash with balancing conditioner, precision shear cut, and a polished blowdry finish.',
    includes: [
      'Personal face-shape & texture analysis',
      'Purifying wash & intensive conditioning',
      'Custom cut & professional blow-dry styling',
    ],
    recommendedFor: 'Routine refresh, split-end removal, new haircut styling',
    bookingService: 'Women: Haircut and styling',
  },
  {
    title: 'Keratin & Botox Anti-Frizz Smoothing',
    duration: '180 - 240 mins',
    priceEstimate: 'Based on hair length & density',
    description: 'Deep restorative protein infusion to eliminate frizz, restore elasticity, and seal cuticle fibres against tropical humidity.',
    includes: [
      'Strand health assessment',
      'Deep protein infusion treatment',
      'Thermal seal & long-term maintenance advice',
    ],
    recommendedFor: 'Tangled, damaged, frizzy or unmanageable hair',
    bookingService: 'Women: Hair Smoothening and Anti-Frizz Treatments',
  },
  {
    title: 'Intensive Scalp & Hair Spa Therapy',
    duration: '60 - 75 mins',
    priceEstimate: 'Customized based on scalp diagnostics',
    description: 'A deeply restorative session combining relaxing head and shoulder acupressure with deeply nourishing botanical hair cremes and steam therapy.',
    includes: [
      'Stimulating warm scalp massage',
      'Deep steam therapy for hydration',
      'Follicle conditioning & smooth rinse',
    ],
    recommendedFor: 'Stress relief, dry scalp, dull hair or hair-fall prevention',
    bookingService: 'Women: Hair Spa and Treatment',
  },
  {
    title: 'Custom Hair Colour, Balayage & Highlights',
    duration: '90 - 150 mins',
    priceEstimate: 'Tailored to shade selection & coverage',
    description: 'From seamless grey blending and rich root coverage to multidimensional tones and sun-kissed balayage, using gentle salon formulas.',
    includes: [
      'Skin undertone matching consultation',
      'Even pigment placement & post-colour gloss',
      'Colour-lock mask & home maintenance guidance',
    ],
    recommendedFor: 'Grey coverage, seasonal shade changes, dimension',
    bookingService: 'Women: Hair Colour',
  },
];

export const HairServicesPage: React.FC<HairServicesPageProps> = ({ onBack, onBookService }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedDesign, setSelectedDesign] = useState<HairDesign | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = ['All', 'Styling & Waves', 'Cuts & Layers', 'Smoothing & Treatments', 'Hair Colour'];

  const filteredDesigns = activeFilter === 'All'
    ? HAIR_DESIGNS
    : HAIR_DESIGNS.filter((d) => d.category === activeFilter);

  const handleSelectStyleForBooking = (design: HairDesign) => {
    setCopiedId(design.id);
    setTimeout(() => {
      onBookService(design.bookingService, 'unisex');
    }, 400);
  };

  return (
    <div className="bg-[#fbf7f2] text-charcoal min-h-screen">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-charcoal text-ivory py-16 sm:py-24 border-b border-gold/20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)]" />
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
              <Sparkles size={14} /> Haute Looks Hair Studio · Karaikudi
            </p>
            <h1 className="font-serif text-3xl font-normal tracking-tight sm:text-5xl lg:text-6xl text-ivory">
              Signature Hair Artistry &amp; Care
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-ivory/80 max-w-2xl">
              From precision haircuts and textured styling to restorative keratin and deep nourishing hair spa, experience haircare crafted to enhance your natural beauty and confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs tracking-wider uppercase text-gold-light/90">
              <span className="flex items-center gap-1.5 rounded-full border border-gold/30 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
                <CheckCircle2 size={13} className="text-gold" /> Unisex Salon · Subramaniyapuram
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-gold/30 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
                <ShieldCheck size={13} className="text-gold" /> Premium Salon Products
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-gold/30 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
                <HeartHandshake size={13} className="text-gold" /> Personal Stylist Consultation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Haute Looks Hair Designs Showcase */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
                In-Salon Lookbook
              </span>
              <h2 className="mt-2 font-serif text-3xl font-normal sm:text-4xl text-charcoal">
                Featured Hairstyle Designs
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-charcoal/75">
                Explore distinct hairstyles, cuts, waves, and treatments. Click any design to preview close-up details or request it directly for your visit.
              </p>
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300 ${
                    activeFilter === cat
                      ? 'bg-charcoal text-ivory shadow-sm'
                      : 'border border-gold/30 bg-white text-charcoal/75 hover:border-gold hover:text-charcoal'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDesigns.map((design) => (
              <div
                key={design.id}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-gold/25 bg-white shadow-[0_16px_36px_rgba(40,20,10,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(40,20,10,0.12)] hover:border-gold"
              >
                {/* Image Container with Quick Preview Action */}
                <div
                  onClick={() => setSelectedDesign(design)}
                  className="relative aspect-[4/5] cursor-pointer overflow-hidden bg-charcoal"
                >
                  <img
                    src={design.image}
                    alt={design.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 rounded-full border border-white/30 bg-charcoal/65 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-gold-light backdrop-blur-md">
                    {design.category}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDesign(design);
                    }}
                    className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-charcoal/60 text-ivory backdrop-blur-md transition-all hover:bg-gold hover:text-charcoal"
                    title="View details"
                  >
                    <Eye size={15} />
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 text-ivory">
                    <p className="text-[11px] font-medium text-gold-light uppercase tracking-wider">{design.tagline}</p>
                    <h3 className="font-serif text-xl sm:text-2xl mt-0.5">{design.title}</h3>
                  </div>
                </div>

                {/* Card Details & Actions */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="text-sm leading-relaxed text-charcoal/80">{design.description}</p>
                    <div className="mt-4 pt-4 border-t border-gold/15 space-y-2 text-xs">
                      <div>
                        <span className="font-semibold text-charcoal">Best suited for: </span>
                        <span className="text-charcoal/70">{design.suitableFor}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-charcoal">Finish: </span>
                        <span className="text-charcoal/70">{design.finish}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gold/15 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDesign(design)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-gold/40 bg-white py-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal transition-all hover:bg-gold/15"
                    >
                      <Eye size={13} /> View Style
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectStyleForBooking(design)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gold py-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal shadow-sm transition-all hover:bg-gold-light"
                    >
                      {copiedId === design.id ? (
                        <>
                          <Check size={14} className="text-charcoal" /> Selected!
                        </>
                      ) : (
                        <>
                          <Scissors size={13} /> Request Cut
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hair Service Options & Treatments Menu */}
      <section className="bg-[#f3ece2] py-16 sm:py-24 border-y border-gold/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
              Complete Menu
            </span>
            <h2 className="mt-2 font-serif text-3xl font-normal sm:text-4xl text-charcoal">
              Hair Service Options &amp; Care Treatments
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-charcoal/75">
              Transparent, professional salon services with dedicated time for consultation, washing, styling, and aftercare guidance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {HAIR_SERVICE_OPTIONS.map((srv, idx) => (
              <div
                key={idx}
                className="relative rounded-[22px] border border-gold/30 bg-white p-7 shadow-[0_12px_30px_rgba(40,20,10,0.05)] transition-all hover:border-gold hover:shadow-gold-glow/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-gold/15 pb-4">
                    <h3 className="font-serif text-2xl text-charcoal">{srv.title}</h3>
                    <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-dark">
                      {srv.duration}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
                    {srv.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-charcoal">What's Included:</p>
                    {srv.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-charcoal/75">
                        <CheckCircle2 size={13} className="shrink-0 text-gold-dark" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl bg-[#faf5ee] p-3 text-xs text-charcoal/70">
                    <span className="font-semibold text-charcoal">Recommended for: </span>
                    {srv.recommendedFor}
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-gold/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-charcoal/60 block">Price Details</span>
                    <span className="text-xs font-medium text-gold-dark">{srv.priceEstimate}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onBookService(srv.bookingService, 'unisex')}
                    className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-2.5 text-xs font-semibold text-ivory transition-all hover:bg-gold hover:text-charcoal"
                  >
                    Book This Service
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Modal Popup for Hairstyle Inspection */}
      {selectedDesign && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedDesign(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#fbf7f2] rounded-[28px] overflow-hidden border border-gold/40 shadow-[0_25px_60px_rgba(0,0,0,0.3)] max-h-[90vh] flex flex-col sm:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedDesign(null)}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/70 text-ivory hover:bg-gold hover:text-charcoal transition-colors backdrop-blur-sm"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            <div className="sm:w-1/2 relative bg-charcoal min-h-[260px] sm:min-h-full">
              <img
                src={selectedDesign.image}
                alt={selectedDesign.title}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full border border-gold/30 bg-charcoal/80 px-3 py-1 text-[10px] uppercase font-semibold text-gold-light backdrop-blur-md">
                {selectedDesign.category}
              </div>
            </div>

            <div className="sm:w-1/2 p-6 sm:p-7 flex flex-col justify-between overflow-y-auto">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gold-dark">Haute Looks Styling</p>
                <h3 className="font-serif text-2xl text-charcoal mt-1">{selectedDesign.title}</h3>
                <p className="mt-3 text-xs sm:text-sm text-charcoal/80 leading-relaxed">{selectedDesign.description}</p>

                <div className="mt-5 space-y-2 rounded-xl bg-white p-4 border border-gold/15 text-xs">
                  <div>
                    <span className="font-semibold text-charcoal block mb-0.5">Best Suited For:</span>
                    <span className="text-charcoal/70 leading-relaxed">{selectedDesign.suitableFor}</span>
                  </div>
                  <div className="pt-2 border-t border-gold/10">
                    <span className="font-semibold text-charcoal block mb-0.5">Styling Finish:</span>
                    <span className="text-charcoal/70 leading-relaxed">{selectedDesign.finish}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gold/20 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    const srv = selectedDesign.bookingService;
                    setSelectedDesign(null);
                    onBookService(srv, 'unisex');
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold py-3 text-xs font-semibold uppercase tracking-wider text-charcoal transition-all hover:bg-gold-light shadow-sm"
                >
                  <Scissors size={14} /> Book This Style at Salon
                </button>
                <a
                  href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 py-2.5 text-xs font-medium text-charcoal hover:bg-gold/10"
                >
                  <Phone size={13} /> Call Us: {SALON_INFO.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
            Unsure which hair service fits your needs?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-charcoal/75">
            Visit our Unisex Salon on College Road, Karaikudi for a direct hair consultation with our senior stylists.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onBookService('Women: Haircut and styling', 'unisex')}
              className="rounded-full bg-gold px-8 py-3 text-xs font-semibold tracking-wider uppercase text-charcoal transition-all hover:bg-gold-light"
            >
              Book Hair Appointment
            </button>
            <button
              type="button"
              onClick={onBack}
              className="rounded-full border border-gold/40 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-charcoal transition-all hover:bg-gold/10"
            >
              Back to Overview
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
