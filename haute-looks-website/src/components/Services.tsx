import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle2, ArrowUpRight, Scissors, Crown, UserCheck, Sparkles, Search, X } from 'lucide-react';
import { WOMEN_SERVICES, MEN_SERVICES, BRIDAL_SERVICES } from '../data/salonData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string, branch: 'unisex' | 'mens') => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'women' | 'men' | 'bridal'>('women');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'women', label: "Women's Beauty", icon: Scissors, branch: 'unisex' as const },
    { id: 'men', label: "Men's Grooming", icon: UserCheck, branch: 'mens' as const },
    { id: 'bridal', label: "Bridal Studio", icon: Crown, branch: 'unisex' as const },
  ];

  const getCurrentServices = (): ServiceItem[] => {
    switch (activeTab) {
      case 'women':
        return WOMEN_SERVICES;
      case 'men':
        return MEN_SERVICES;
      case 'bridal':
        return BRIDAL_SERVICES;
      default:
        return WOMEN_SERVICES;
    }
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const currentServices = getCurrentServices().filter((service) => {
    if (!normalizedQuery) return true;
    return [
      service.name,
      service.description,
      ...(service.highlights ?? []),
    ].some((value) => value.toLowerCase().includes(normalizedQuery));
  });
  const featuredService = currentServices[0];
  const otherServices = currentServices.slice(1);

  return (
    <section id="services" className="py-24 lg:py-32 bg-white text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-wide text-gold-dark mb-3">What we do</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-normal tracking-tight">
            Services
          </h2>
          <p className="mt-4 text-charcoal/80 text-base sm:text-lg max-w-2xl">
            Choose a service below, or get in touch if you’re not sure what to book.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex max-w-full gap-1.5 overflow-x-auto rounded-full border border-gold/25 bg-ivory/80 p-1.5 shadow-soft-card">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as 'women' | 'men' | 'bridal');
                    setSearchQuery('');
                  }}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 sm:px-7 ${
                    isActive
                      ? 'bg-charcoal text-ivory shadow-[0_6px_18px_rgba(41,37,34,0.18)]'
                      : 'text-charcoal/70 hover:bg-white hover:text-gold-dark'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-gold' : 'text-charcoal/50'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mb-10 max-w-xl">
          <label htmlFor="service-search" className="sr-only">Search services</label>
          <div className="flex items-center gap-3 rounded-full border border-gold/25 bg-ivory/70 px-5 shadow-sm transition-colors focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/20">
            <Search size={18} aria-hidden="true" className="shrink-0 text-gold-dark" />
            <input
              id="service-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Find a service — try “hair spa”"
              className="min-h-12 min-w-0 flex-1 bg-transparent py-3 text-sm text-charcoal outline-none placeholder:text-charcoal/45"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-charcoal/60 transition-colors hover:bg-gold/10 hover:text-charcoal"
                aria-label="Clear service search"
              >
                <X size={16} />
              </button>
            )}
          </div>
          {normalizedQuery && (
            <p className="mt-2 text-center text-xs text-charcoal/60" aria-live="polite">
              {currentServices.length
                ? `${currentServices.length} ${currentServices.length === 1 ? 'service' : 'services'} found`
                : 'No services match that search. Try another term.'}
            </p>
          )}
        </div>

        {/* Dynamic Category Banner Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {featuredService ? (
            <>
            {/* Featured Hero Service Banner (Large Editorial Card) */}
            <div className={`group/featured relative grid grid-cols-1 overflow-hidden border shadow-luxury lg:grid-cols-12 ${
              activeTab === 'bridal'
                ? 'rounded-[28px] border-gold/40 bg-[#211a17]'
                : 'rounded-2xl border-gold/30 bg-ivory'
            }`}>
              <div className={`relative h-72 overflow-hidden sm:h-96 lg:col-span-7 ${
                activeTab === 'bridal' ? 'lg:h-[520px]' : 'lg:h-[420px]'
              }`}>
                <img
                  src={featuredService.image}
                  alt={featuredService.name}
                  className={`h-full w-full object-cover transition-transform duration-700 group-hover/featured:scale-[1.04] ${
                    activeTab === 'bridal' ? 'object-[center_22%]' : 'object-center'
                  }`}
                />
                <div className={`absolute inset-0 ${
                  activeTab === 'bridal'
                    ? 'bg-gradient-to-t from-[#17110f]/85 via-[#17110f]/5 to-[#17110f]/10'
                    : 'bg-gradient-to-t from-charcoal/70 via-transparent to-transparent lg:hidden'
                }`} />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-gold/40 bg-charcoal/85 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-ivory backdrop-blur-sm">
                  {activeTab === 'bridal' && <Sparkles size={12} className="text-gold" />}
                  {activeTab === 'bridal' ? 'The Bridal Edit' : 'Featured service'}
                </div>
                {activeTab === 'bridal' && (
                  <div className="absolute bottom-5 left-5 right-5 text-ivory lg:bottom-7 lg:left-7">
                    <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold-light">Your day, your signature look</p>
                    <p className="mt-1 font-serif text-2xl sm:text-3xl">A little magic for the moment that matters.</p>
                  </div>
                )}
              </div>

              <div className={`flex flex-col justify-between p-8 text-left sm:p-12 lg:col-span-5 ${
                activeTab === 'bridal' ? 'text-ivory' : ''
              }`}>
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className={`text-[11px] uppercase tracking-[0.25em] font-semibold ${
                      activeTab === 'bridal' ? 'text-gold-light' : 'text-gold-dark'
                    }`}>
                      {activeTab === 'women'
                        ? "Women's services"
                        : activeTab === 'men'
                          ? "Men's services"
                          : 'Bridal services'}
                    </span>
                    {featuredService.duration && (
                      <span className={`inline-flex items-center gap-1.5 rounded-full border border-gold/20 px-2.5 py-1 text-xs ${
                        activeTab === 'bridal' ? 'bg-white/10 text-ivory/80' : 'bg-white text-charcoal/60'
                      }`}>
                        <Clock size={12} className="text-gold" />
                        {featuredService.duration}
                      </span>
                    )}
                  </div>

                  <h3 className={`mb-4 font-serif text-2xl font-medium sm:text-3xl ${
                    activeTab === 'bridal' ? 'text-ivory' : 'text-charcoal'
                  }`}>
                    {featuredService.name}
                  </h3>

                  <p className={`mb-6 text-sm font-light leading-relaxed sm:text-base ${
                    activeTab === 'bridal' ? 'text-ivory/75' : 'text-charcoal/80'
                  }`}>
                    {featuredService.description}
                  </p>

                  {featuredService.highlights && (
                    <div className="space-y-2.5 mb-8">
                      {featuredService.highlights.map((h, i) => (
                        <div key={i} className={`flex items-center gap-2.5 text-xs sm:text-sm ${
                          activeTab === 'bridal' ? 'text-ivory/85' : 'text-charcoal/90'
                        }`}>
                          <CheckCircle2 size={16} className="flex-shrink-0 text-gold" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className={`flex items-center justify-between border-t pt-4 ${
                  activeTab === 'bridal' ? 'border-gold/30' : 'border-gold/20'
                }`}>
                  <button
                    onClick={() =>
                      onSelectService(
                        featuredService.name,
                        activeTab === 'men' ? 'mens' : 'unisex'
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
                  >
                    <span>Book This Service</span>
                    <ArrowUpRight size={15} />
                  </button>
                  <span className={`text-xs font-light italic ${
                    activeTab === 'bridal' ? 'text-ivory/55' : 'text-charcoal/50'
                  }`}>
                    Ask us about this service
                  </span>
                </div>
              </div>
            </div>

            {/* Diverse Services Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherServices.map((service) => (
                <div
                  key={service.id}
                  className="group rounded-xl overflow-hidden bg-ivory/60 hover:bg-white border border-gold/20 hover:border-gold/50 shadow-soft-card hover:shadow-hover-card transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div>
                    {/* Image Preview with Hover Zoom */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/5 transition-colors duration-300" />
                      
                      {service.duration && (
                        <div className="absolute bottom-3 right-3 bg-charcoal/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-ivory flex items-center gap-1.5 border border-gold/30">
                          <Clock size={11} className="text-gold" />
                          {service.duration}
                        </div>
                      )}
                    </div>

                    {/* Content Box */}
                    <div className="p-6">
                      <div className="text-xs text-gold-dark font-medium mb-2">
                        {activeTab === 'men' ? "Men's grooming" : activeTab === 'bridal' ? 'Bridal' : 'Hair & beauty'}
                      </div>

                      <h4 className="font-serif text-xl text-charcoal font-medium mb-2.5 group-hover:text-gold-rich transition-colors">
                        {service.name}
                      </h4>

                      <p className="text-xs sm:text-sm text-charcoal/90 font-light leading-relaxed mb-5">
                        {service.description}
                      </p>

                      {service.highlights && (
                        <ul className="space-y-1.5 mb-4">
                          {service.highlights.slice(0, 2).map((h, i) => (
                            <li key={i} className="text-xs text-charcoal flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Booking Card Action */}
                  <div className="px-6 pb-6 pt-2 border-t border-gold/10 flex items-center justify-between">
                    <button
                      onClick={() =>
                        onSelectService(
                          service.name,
                          activeTab === 'men' ? 'mens' : 'unisex'
                        )
                      }
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark hover:text-charcoal inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Book Service</span>
                      <ArrowUpRight size={14} />
                    </button>
                    <span className="text-[11px] text-charcoal/70 font-light">
                      {activeTab === 'men' ? "Men's Branch" : 'Unisex Studio'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            </>
            ) : (
              <div className="rounded-2xl border border-dashed border-gold/35 bg-ivory/60 px-6 py-14 text-center">
                <Search size={24} className="mx-auto text-gold-dark" />
                <h3 className="mt-4 font-serif text-2xl text-charcoal">No matching services just yet</h3>
                <p className="mt-2 text-sm text-charcoal/65">Try a different search, or clear it to see all services in this category.</p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-gold hover:text-charcoal"
                >
                  Clear search <X size={14} />
                </button>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

        {/* Bottom Booking Quick Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-charcoal text-ivory border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-luxury">
          <div className="text-center md:text-left">
            <p className="text-sm text-gold font-semibold mb-1">
              Have a question?
            </p>
            <h4 className="font-serif text-2xl text-ivory font-normal">
              We can help you choose a service.
            </h4>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onSelectService('Comprehensive Consultation', 'unisex')}
              className="px-6 py-3 text-xs uppercase tracking-[0.18em] font-semibold text-charcoal bg-gold hover:bg-gold-light rounded-sm shadow-gold-glow transition-all"
            >
              Ask about a service
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
