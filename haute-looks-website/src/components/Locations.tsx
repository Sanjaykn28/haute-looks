import React from 'react';
import { MapPin, Phone, Clock, Navigation, Calendar, CheckCircle2 } from 'lucide-react';
import { BRANCHES } from '../data/salonData';

interface LocationsProps {
  onSelectBranchForBooking: (branchId: 'unisex' | 'mens') => void;
}

export const Locations: React.FC<LocationsProps> = ({ onSelectBranchForBooking }) => {
  return (
    <section id="locations" className="py-24 lg:py-32 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-wide text-gold-dark mb-3">Find us</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-normal tracking-tight">
            Two locations in Karaikudi
          </h2>
          <p className="mt-4 text-charcoal/80 text-base sm:text-lg max-w-2xl">
            Both branches are open daily from 8:30 am to 9:00 pm.
          </p>
        </div>

        {/* Both Locations Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {BRANCHES.map((branch) => {
            const isUnisex = branch.id === 'unisex';

            return (
              <div
                key={branch.id}
                className="group flex flex-col justify-between overflow-hidden rounded-[26px] border border-gold/25 bg-white text-left shadow-[0_18px_50px_rgba(41,37,34,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_28px_65px_rgba(41,37,34,0.13)]"
              >
                {/* Image & Branch Title Header */}
                <div>
                  <div className="relative h-64 overflow-hidden sm:h-72">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
                    
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-white/20 bg-charcoal/75 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                        {isUnisex ? 'Unisex salon & bridal studio' : "Men's grooming"}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-6 right-6 text-white">
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                        {branch.name}
                      </h3>
                      <p className="text-xs text-gold-light tracking-wide mt-1 font-light">
                        {branch.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Branch Details */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Address Block */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 text-gold-dark mt-0.5">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-charcoal/65 font-medium mb-1">
                          Address
                        </p>
                        <p className="text-sm sm:text-base text-charcoal font-normal leading-relaxed">
                          {branch.address}
                        </p>
                      </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 text-gold-dark mt-0.5">
                        <Clock size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-charcoal/65 font-medium mb-1">
                          Hours
                        </p>
                        <p className="text-sm font-medium text-charcoal">
                          {branch.hours}
                        </p>
                      </div>
                    </div>

                    {/* Phone Block (Only for Unisex Branch as required - do not invent for men's branch) */}
                    {branch.phone && (
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 text-gold-dark mt-0.5">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="text-sm text-charcoal/65 font-medium mb-1">
                            Phone
                          </p>
                          <a
                            href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                            className="text-sm font-semibold text-gold-dark hover:text-charcoal transition-colors"
                          >
                            {branch.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Branch Amenities / Features */}
                    <div className="pt-2">
                      <p className="text-sm text-charcoal/65 font-medium mb-3">
                        Services
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {branch.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-charcoal">
                            <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gold/20 bg-[linear-gradient(135deg,#fffaf4,#f6eee4)] p-6 sm:p-8">
                  <a
                    href={branch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-gold-dark transition-colors"
                  >
                    <Navigation size={14} className="text-gold" />
                    <span>Get directions</span>
                  </a>

                  <button
                    onClick={() => onSelectBranchForBooking(branch.id)}
                    className="inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-ivory shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal"
                  >
                    <Calendar size={13} />
                    <span>Book this branch</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
