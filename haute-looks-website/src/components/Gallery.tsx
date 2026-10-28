import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hair' | 'bridal' | 'men' | 'skincare'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filterOptions: { id: typeof activeFilter; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'hair', label: 'Hair' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'men', label: "Men's grooming" },
    { id: 'skincare', label: 'Skincare' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-wide text-gold-dark mb-3">Gallery</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-normal tracking-tight">
            A look at our services
          </h2>
          <p className="mt-4 text-charcoal/80 text-base sm:text-lg max-w-2xl">
            Browse hair, bridal, grooming and skincare photos.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
          {filterOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === f.id
                  ? 'border border-charcoal bg-charcoal text-ivory shadow-md'
                  : 'border border-gold/20 bg-white/80 text-charcoal hover:border-gold/45 hover:bg-white hover:text-gold-dark'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Magazine-Style Editorial Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => {
              const isTall = item.aspect === 'tall';
              const isWide = item.aspect === 'wide';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`View image: ${item.title}`}
                  onClick={() => setSelectedImage(item)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setSelectedImage(item);
                    }
                  }}
                  className={`group relative rounded-xl overflow-hidden cursor-pointer bg-white border border-gold/20 shadow-soft-card hover:shadow-hover-card transition-all duration-500 ${
                    isWide ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className={`w-full overflow-hidden ${isTall ? 'h-96' : isWide ? 'h-72 sm:h-80' : 'h-72'}`}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Gradient Overlay & Hover Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-light bg-charcoal/60 backdrop-blur-md px-2.5 py-1 rounded border border-gold/30">
                        {item.categoryLabel}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize2 size={14} />
                      </div>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl text-white font-normal leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs text-ivory/90 font-light mt-1 line-clamp-2 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-md p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedImage.title} image viewer`}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-gold hover:text-charcoal transition-colors"
              aria-label="Close Lightbox"
            >
              <X size={22} />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-gold hover:text-charcoal transition-colors"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-gold hover:text-charcoal transition-colors"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox Content Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] bg-charcoal rounded-xl overflow-hidden border border-gold/40 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-charcoal text-ivory border-t border-gold/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold block mb-1">
                    {selectedImage.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/90 font-light mt-1">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="#booking"
                    onClick={() => setSelectedImage(null)}
                    className="inline-block px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-charcoal bg-gold hover:bg-gold-light rounded-sm transition-all"
                  >
                    Book This Style
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
