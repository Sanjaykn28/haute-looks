import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export const SalonExperienceShowcase: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-ivory relative overflow-hidden border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-gold-dark mb-3">
            <Camera size={15} /> At the salon
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-normal tracking-tight">
            A closer look
          </h2>
          <p className="mt-4 text-charcoal/80 text-base sm:text-lg max-w-2xl">
            Hair, makeup and grooming services at Haute Looks in Karaikudi.
          </p>
        </div>

        {/* Asymmetrical Editorial Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Large Hero Image (Left Column - 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative group rounded-2xl overflow-hidden shadow-luxury border border-gold/30 bg-white min-h-[380px] sm:min-h-[500px] flex flex-col justify-end"
          >
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85"
              alt="Salon interior and styling stations"
              className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
            
            {/* Top Pill */}
            <div className="absolute top-5 left-5 z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-charcoal/80 backdrop-blur-md text-gold text-[10px] uppercase tracking-[0.22em] font-semibold border border-gold/30">
                Salon interior
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-10 p-6 sm:p-8 text-white text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-light font-medium block mb-2">
                At Haute Looks
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal leading-snug">
                Space to sit back and get ready
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-ivory/80 font-light max-w-xl leading-relaxed">
                Visit us for a haircut, beauty service or bridal appointment.
              </p>
            </div>
          </motion.div>

          {/* Supporting salon and service images */}
          <div className="md:col-span-5 flex flex-col gap-6 lg:gap-8 justify-between">
            
            {/* Top Card: Bridal Artistry & Styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative group rounded-2xl overflow-hidden shadow-luxury border border-gold/30 bg-white min-h-[230px] sm:min-h-[240px] flex flex-col justify-end"
            >
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=85"
                alt="Haute Looks professional makeup application and beauty details"
                className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
              
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded bg-charcoal/80 backdrop-blur-md text-gold text-[9px] uppercase tracking-[0.2em] font-semibold border border-gold/30">
                  Makeup
                </span>
              </div>

              <div className="relative z-10 p-5 text-left text-white">
                <h4 className="font-serif text-xl sm:text-2xl text-ivory font-normal">
                  Makeup and styling
                </h4>
                <p className="text-xs text-ivory/80 font-light mt-1">
                  Makeup for weddings and special occasions.
                </p>
              </div>
            </motion.div>

            {/* Bottom Card: Executive Men's Barbering */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group rounded-2xl overflow-hidden shadow-luxury border border-gold/30 bg-white min-h-[230px] sm:min-h-[240px] flex flex-col justify-end"
            >
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=85"
                alt="Men's grooming and barbering"
                className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />

              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded bg-charcoal/80 backdrop-blur-md text-gold text-[9px] uppercase tracking-[0.2em] font-semibold border border-gold/30">
                  Men&apos;s grooming
                </span>
              </div>

              <div className="relative z-10 p-5 text-left text-white">
                <h4 className="font-serif text-xl sm:text-2xl text-ivory font-normal">
                  Haircuts and beard trims
                </h4>
                <p className="text-xs text-ivory/80 font-light mt-1">
                  Find the men&apos;s grooming branch on CK Mahal Road.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Lower Highlight Strip: Hair Spa & Color Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="relative group rounded-xl overflow-hidden shadow-soft-card border border-gold/25 h-48 bg-white">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80"
              alt="Haute looks hair transformation and cutting"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-4">
              <div>
                <span className="text-xs text-gold font-semibold block">Haircuts</span>
                <p className="font-serif text-base text-ivory">Cuts and styling</p>
              </div>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-soft-card border border-gold/25 h-48 bg-white">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
              alt="Haute Looks salon styling tools and wash bar"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-4">
              <div>
                <span className="text-xs text-gold font-semibold block">Hair care</span>
                <p className="font-serif text-base text-ivory">Spa and treatments</p>
              </div>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-soft-card border border-gold/25 h-48 bg-white">
            <img
              src="https://images.unsplash.com/photo-1522337094846-8a818192de1f?auto=format&fit=crop&w=600&q=80"
              alt="Haute Looks dimensional hair color technique"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-4">
              <div>
                <span className="text-xs text-gold font-semibold block">Colour</span>
                <p className="font-serif text-base text-ivory">Colour services</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
