import React from 'react';
import { ArrowUpRight, Crown, Scissors, Sparkles } from 'lucide-react';
import { MEN_SERVICES, WOMEN_SERVICES } from '../data/salonData';
import { BranchId } from '../types';

interface ServiceFinderProps {
  onChooseService: (serviceName: string, branch: BranchId) => void;
  onNavigatePage?: (page: 'hair' | 'bridal' | 'mens') => void;
}

const experiences = [
  {
    pageKey: 'hair' as const,
    eyebrow: 'A little refresh',
    title: 'Everyday hair',
    description: 'A fresh cut, a new shape or a little time for your hair.',
    image: WOMEN_SERVICES[0].image,
    imageAlt: 'Hair styling inspiration',
    icon: Scissors,
    service: 'Women: Haircut and styling',
    branch: 'unisex' as const,
    action: 'Explore hair services',
  },
  {
    pageKey: 'bridal' as const,
    eyebrow: 'For the big moments',
    title: 'Bridal & occasion',
    description: 'Talk through your wedding-day or celebration look with our team.',
    image: '/bridal-card.jpeg',
    imageAlt: 'Bridal makeup and traditional wedding styling',
    icon: Crown,
    service: 'Bridal: Bridal makeup',
    branch: 'unisex' as const,
    action: 'Plan your bridal look',
  },
  {
    pageKey: 'mens' as const,
    eyebrow: 'Your regular, refined',
    title: "Men's grooming",
    description: 'A haircut, a beard tidy-up or time for a grooming refresh.',
    image: MEN_SERVICES[0].image,
    imageAlt: "Men's haircut and grooming",
    icon: Sparkles,
    service: 'Men: Haircut and styling',
    branch: 'mens' as const,
    action: 'Book men’s grooming',
  },
];

export const ServiceFinder: React.FC<ServiceFinderProps> = ({ onChooseService, onNavigatePage }) => (
  <section className="relative overflow-hidden bg-[#fbf5ed] py-20 text-charcoal sm:py-24 lg:py-28">
    <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(198,165,107,0.16),transparent_68%)]" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
            <Sparkles size={14} /> Your visit starts here
          </p>
          <h2 className="font-serif text-3xl font-normal tracking-tight sm:text-5xl">
            What would you like to feel good about?
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal/70 sm:text-base">
            Find a place to start. Choose an experience to explore our dedicated styles and services, or book directly with your preferred branch.
          </p>
        </div>
        <a
          href="#services"
          className="inline-flex w-fit items-center gap-2 border-b border-gold/60 pb-1 text-sm font-medium text-charcoal transition-colors hover:border-gold-dark hover:text-gold-dark"
        >
          Browse all services <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {experiences.map((experience, index) => {
          const Icon = experience.icon;
          const handleCardClick = () => {
            if (onNavigatePage) {
              onNavigatePage(experience.pageKey);
            } else {
              onChooseService(experience.service, experience.branch);
            }
          };

          return (
            <article
              key={experience.title}
              onClick={handleCardClick}
              className="group relative isolate flex min-h-[410px] cursor-pointer flex-col justify-end overflow-hidden rounded-[24px] border border-gold/20 bg-charcoal shadow-[0_16px_40px_rgba(41,37,34,0.1)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(41,37,34,0.25)] hover:border-gold sm:min-h-[450px]"
            >
              <img
                src={experience.image}
                alt={experience.imageAlt}
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#17110f]/95 via-[#17110f]/45 to-[#17110f]/5 transition-colors duration-500 group-hover:from-[#17110f]/90" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light/75 to-transparent" />

              <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-charcoal/35 text-gold-light backdrop-blur-md transition-colors group-hover:border-gold group-hover:bg-charcoal/60">
                <Icon size={19} />
              </div>

              <div className="p-6 text-left text-ivory sm:p-7">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                  {experience.eyebrow}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl">{experience.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory/75">
                  {experience.description}
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick();
                  }}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-ivory px-5 py-3 text-xs font-semibold text-charcoal transition-all duration-300 hover:bg-gold hover:text-charcoal focus-visible:outline-ivory group-hover:bg-gold-light"
                >
                  {experience.action}
                  <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
