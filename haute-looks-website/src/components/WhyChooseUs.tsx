import React from 'react';
import { ArrowUpRight, Calendar, Users, Crown, Scissors, Building2, Sparkles } from 'lucide-react';
import { BRANCHES, BRIDAL_SERVICES, MEN_SERVICES, WHY_CHOOSE_US, WOMEN_SERVICES } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const icons = [Calendar, Users, Crown, Scissors, Building2];
  const images = [
    BRANCHES[0].image,
    WOMEN_SERVICES[0].image,
    BRIDAL_SERVICES[0].image,
    WOMEN_SERVICES[1].image,
    MEN_SERVICES[0].image,
  ];

  return (
    <section id="why-us" className="relative overflow-hidden bg-[#f6f0e9] py-24 text-charcoal lg:py-32">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(198,165,107,0.18),transparent_68%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
              <Sparkles size={14} /> Why Haute Looks
            </p>
            <h2 className="font-serif text-4xl font-normal tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Beauty, with a local touch.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/75 sm:text-lg">
              A thoughtful salon experience shaped around Karaikudi, our community and the moments that matter to you.
            </p>
          </div>
          <div className="hidden items-center gap-3 pb-2 text-xs uppercase tracking-[0.18em] text-charcoal/55 md:flex">
            <span className="h-px w-10 bg-gold/70" />
            <span>Our story in six moments</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.number}
                className="group relative isolate flex min-h-[290px] flex-col justify-between overflow-hidden rounded-[24px] border border-white/25 bg-charcoal p-6 text-left shadow-[0_18px_45px_rgba(42,31,25,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_55px_rgba(42,31,25,0.20)] sm:min-h-[320px] sm:p-8"
              >
                <img
                  src={images[index]}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#17110f]/80 via-[#17110f]/65 to-[#17110f]/85 transition-colors duration-500 group-hover:from-[#17110f]/70 group-hover:via-[#17110f]/55 group-hover:to-[#17110f]/80" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light/80 to-transparent" />
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125" />

                <div className="relative flex items-center justify-between">
                  <span className="font-serif text-3xl text-gold-light/90">{item.number}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-light/40 bg-charcoal/35 text-gold-light backdrop-blur-sm transition-all duration-300 group-hover:bg-gold group-hover:text-charcoal">
                    <Icon size={18} />
                  </span>
                </div>

                <div className="relative mt-10">
                  <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.24em] text-gold-light/90">
                    Haute Looks · Karaikudi
                  </span>
                  <h3 className="max-w-sm font-serif text-2xl font-medium leading-tight text-white sm:text-[1.7rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                    {item.description}
                  </p>
                  <div className="mt-5 h-px w-10 bg-gold-light/70 transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            );
          })}

          <div className="group relative isolate flex min-h-[290px] flex-col justify-between overflow-hidden rounded-[24px] border border-gold/40 bg-charcoal p-7 text-left text-ivory shadow-[0_22px_50px_rgba(35,25,20,0.2)] sm:min-h-[320px] sm:p-8">
            <img
              src={BRANCHES[0].image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#17110f]/90 via-[#17110f]/78 to-[#17110f]/88" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />

            <div>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-light shadow-[0_0_12px_rgba(229,205,163,0.9)]" />
                Find us in Karaikudi
              </span>
              <h3 className="max-w-sm font-serif text-3xl leading-tight text-ivory sm:text-[2rem]">
                Two branches.<br />One local team.
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/80">
                Visit our unisex salon near College Road or our men&apos;s grooming branch on CK Mahal Road.
              </p>
            </div>

            <a
              href="#locations"
              className="mt-8 inline-flex w-fit items-center gap-2 border-b border-gold/70 pb-1 text-sm font-semibold text-gold-light transition-colors hover:border-gold-light hover:text-white"
            >
              See our locations <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
