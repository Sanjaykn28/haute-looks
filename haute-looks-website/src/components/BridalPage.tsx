import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, Crown, CheckCircle2, ArrowUpRight, MessageCircle, Heart, Star } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { BranchId } from '../types';

interface BridalPageProps {
  onBack: () => void;
  onBookService: (serviceName: string, branch: BranchId) => void;
}

interface BridalLookItem {
  title: string;
  category: string;
  description: string;
  hairStyle: string;
  makeupStyle: string;
  image: string;
}

interface BridalPackage {
  name: string;
  tagline: string;
  duration: string;
  pricing: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const BRIDAL_GALLERY_ITEMS: BridalLookItem[] = [
  {
    title: 'Traditional Muhurtham Bridal Grandeur',
    category: 'Muhurtham Look',
    description: 'Timeless South Indian bridal look designed around rich Kanchipuram silk sarees and temple jewellery. Long-lasting, camera-ready base with subtle radiance.',
    hairStyle: 'Traditional Jadai with fresh floral veni, hair ornaments & structured temple parting',
    makeupStyle: 'High-definition waterproof base, soft warm gold lids, defined winged kohl and classic vermilion tones',
    image: '/bridal-service.png',
  },
  {
    title: 'Evening Sangeet & Reception Glam',
    category: 'Reception Look',
    description: 'Modern sophisticated glam crafted for dazzling stage lights, evening photography and free-flowing celebration.',
    hairStyle: 'Hollywood waves or sculpted voluminous half-up romantic curls with jewelled hairpins',
    makeupStyle: 'Soft glam, dewy glass skin finish, champagne shimmer lids and velvet rose lips',
    image: '/bridal-section.png',
  },
  {
    title: 'Engagement & Pre-Wedding Makeover',
    category: 'Engagement Look',
    description: 'Fresh, radiant makeover balancing ceremony traditions with contemporary lightness for morning or evening rings exchange.',
    hairStyle: 'Textured floral messy bun with baby’s breath or French twist adorned with hair crystals',
    makeupStyle: 'Luminous fresh skin, soft sculpted cheeks, soft smokey liner and nude-coral lips',
    image: '/bridal-makeover.png',
  },
  {
    title: 'Classic Muhurtham Portrait Finish',
    category: 'Ceremony Portrait',
    description: 'Refined, flawless close-up artistry with sweat-proof seal to withstand rituals and sacred fires effortlessly.',
    hairStyle: 'Braided floral jadai with poola jada accessories & maang tikka alignment',
    makeupStyle: 'Matte-radiant long-stay foundation, waterproof kajal, defined brow architecture and berry tones',
    image: '/bridal-card.jpeg',
  },
];

const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    name: 'Essential Bridal Makeover',
    tagline: 'Refined perfection for your auspicious ceremony',
    duration: '3 - 4 hours',
    pricing: 'Consultation & package tailored on enquiry',
    description: 'Comprehensive single-event bridal makeover designed for your Muhurtham, Engagement, or Reception ceremony.',
    features: [
      'In-depth outfit & jewellery consultation',
      'Professional long-lasting bridal makeup (HD finish)',
      'Bridal hairstyle with floral or accessory placement',
      'Saree draping and precision pin-up assistance',
      'Touch-up kit guidance for the ceremony',
    ],
  },
  {
    name: 'Haute Signature Bridal & Reception Journey',
    tagline: 'Complete two-look luxury experience',
    duration: 'Multi-session ceremony care',
    pricing: 'Tailored for combined Muhurtham + Reception',
    popular: true,
    description: 'Our most requested journey for brides wanting seamless transitions between morning sacred rituals and evening grand reception.',
    features: [
      'Full pre-wedding consultation & look design',
      'Look 1: Traditional Muhurtham makeup, floral jadai & saree draping',
      'Look 2: Evening Reception glam, romantic hairstyle change & gown/lehenga styling',
      'Waterproof, sweat-resistant formulas for high heat & stage lights',
      'Dedicated styling team for swift transitions',
    ],
  },
  {
    name: 'Complete Pre-Bridal Glow & Wellness Care',
    tagline: 'Radiant skin & lush hair in the weeks leading up',
    duration: 'Spread over 2 to 4 weeks prior',
    pricing: 'Customized based on skin & hair regimen',
    description: 'Holistic pre-wedding beauty treatments to ensure your skin is naturally glowing and hair is smooth and nourished before the big day.',
    features: [
      'Skin diagnosis & brightening facial therapies',
      'Deep hair spa, smoothening or nourishment treatments',
      'Full body de-tan, polishing & waxing services',
      'Luxury bridal manicure & pedicure rituals',
      'Eyebrow architecture & gentle skin prep',
    ],
  },
];

export const BridalPage: React.FC<BridalPageProps> = ({ onBack, onBookService }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappBridalUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Haute Looks Bridal Studio, I would like to enquire about your Bridal Packages and check availability for my wedding date.'
  )}`;

  return (
    <div className="bg-[#fbf7f2] text-charcoal min-h-screen">
      {/* Bridal Hero Header */}
      <section className="relative overflow-hidden bg-[#17110e] text-ivory py-16 sm:py-24 border-b border-gold/20">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(214,175,101,0.22),transparent_70%)]" />
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
              <Crown size={15} /> Haute Looks Bridal Studio · Karaikudi
            </p>
            <h1 className="font-serif text-3xl font-normal tracking-tight sm:text-5xl lg:text-6xl text-ivory">
              Plan Your Dream Bridal &amp; Occasion Look
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-ivory/80 max-w-2xl">
              From auspicious Muhurtham ceremonies to glamorous evening receptions, explore our signature bridal makeovers, customized hairstyles, and comprehensive bridal packages.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappBridalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-xs font-semibold tracking-wider uppercase text-charcoal transition-all hover:bg-gold-light"
              >
                <MessageCircle size={15} /> WhatsApp Bridal Enquiry
              </a>
              <button
                type="button"
                onClick={() => onBookService('Bridal: Bridal makeup', 'unisex')}
                className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/5 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-ivory transition-all hover:bg-white/10"
              >
                Book Bridal Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Looks & Hairstyles Gallery */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
              Real Bridal Artistry
            </span>
            <h2 className="mt-2 font-serif text-3xl font-normal sm:text-4xl text-charcoal">
              Bridal &amp; Occasion Gallery
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-charcoal/75">
              Explore our real bride looks, hairstyles, floral hair designs, and makeover artistry captured at Haute Looks Studio in Karaikudi.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {BRIDAL_GALLERY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-[26px] border border-gold/30 bg-white shadow-[0_16px_40px_rgba(40,20,10,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(40,20,10,0.15)] flex flex-col"
              >
                <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-charcoal">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full border border-gold/30 bg-charcoal/70 px-3.5 py-1 text-[10px] font-semibold tracking-wider uppercase text-gold-light backdrop-blur-md">
                    {item.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-ivory">
                    <h3 className="font-serif text-2xl">{item.title}</h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <p className="text-sm leading-relaxed text-charcoal/80">{item.description}</p>

                  <div className="mt-5 space-y-3 rounded-2xl bg-[#faf5ee] p-4 text-xs border border-gold/15">
                    <div>
                      <span className="font-semibold text-charcoal block mb-0.5">Hairstyle Artistry:</span>
                      <span className="text-charcoal/75 leading-relaxed">{item.hairStyle}</span>
                    </div>
                    <div className="pt-2 border-t border-gold/15">
                      <span className="font-semibold text-charcoal block mb-0.5">Makeup &amp; Base Styling:</span>
                      <span className="text-charcoal/75 leading-relaxed">{item.makeupStyle}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gold/15 flex items-center justify-between">
                    <span className="text-xs text-charcoal/65">Haute Looks Unisex Studio</span>
                    <button
                      type="button"
                      onClick={() => onBookService('Bridal: Bridal makeup', 'unisex')}
                      className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-charcoal transition-all hover:bg-gold-light"
                    >
                      Book This Look
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Packages */}
      <section className="bg-[#f2ece2] py-16 sm:py-24 border-y border-gold/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
              Curated Services
            </span>
            <h2 className="mt-2 font-serif text-3xl font-normal sm:text-4xl text-charcoal">
              Bridal &amp; Occasion Packages
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-charcoal/75">
              Thoughtfully curated to make your special day effortless and memorable. Contact us early to check artist availability for your dates.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {BRIDAL_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded-[26px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'border-2 border-gold bg-white shadow-[0_20px_45px_rgba(214,175,101,0.2)]'
                    : 'border border-gold/25 bg-white/90 shadow-[0_12px_30px_rgba(40,20,10,0.05)]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-charcoal px-4 py-1 text-[10px] font-semibold tracking-widest uppercase text-gold shadow-sm flex items-center gap-1.5">
                    <Star size={11} className="fill-gold" /> Most Recommended
                  </div>
                )}

                <div>
                  <div className="border-b border-gold/15 pb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">{pkg.tagline}</p>
                    <h3 className="font-serif text-2xl text-charcoal mt-1">{pkg.name}</h3>
                    <p className="mt-1 text-xs text-charcoal/60">{pkg.duration}</p>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{pkg.description}</p>

                  <div className="mt-6 space-y-2.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-charcoal">Package Highlights:</p>
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-charcoal/80">
                        <CheckCircle2 size={14} className="shrink-0 text-gold-dark mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-gold/15">
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-wider text-charcoal/60 block">Pricing &amp; Booking</span>
                    <span className="text-xs font-medium text-gold-dark">{pkg.pricing}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onBookService('Bridal: Bridal makeup', 'unisex')}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-xs font-semibold uppercase tracking-wider transition-all ${
                      pkg.popular
                        ? 'bg-charcoal text-ivory hover:bg-gold hover:text-charcoal'
                        : 'bg-gold text-charcoal hover:bg-gold-light'
                    }`}
                  >
                    Select This Package
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking and Consultation Callout */}
      <section className="py-16 sm:py-20 bg-charcoal text-ivory text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Heart className="mx-auto text-gold mb-3" size={28} />
          <h3 className="font-serif text-2xl sm:text-4xl text-ivory">
            Every Bride Has a Unique Story
          </h3>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-ivory/80">
            Schedule a bridal consultation to discuss your saree drape, hair ornamentation, and jewellery styling with our senior bridal artists in Karaikudi.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappBridalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-xs font-semibold tracking-wider uppercase text-charcoal transition-all hover:bg-gold-light"
            >
              <MessageCircle size={15} /> Talk to Bridal Stylist on WhatsApp
            </a>
            <button
              type="button"
              onClick={onBack}
              className="rounded-full border border-gold/40 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-gold-light transition-all hover:bg-white/5"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
