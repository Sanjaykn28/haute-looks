import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  id?: string;
  badgeText: string;
  title: string;
  subTitle?: string;
  description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ id, badgeText, title, subTitle, description }) => {
  return (
    <section id={id} className="text-center max-w-3xl mx-auto mb-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-ivory shadow-sm mb-4"
      >
        <Sparkles size={13} className="text-gold" />
        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-rich">
          {badgeText}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-serif text-3xl sm:text-5xl text-charcoal font-normal tracking-tight"
      >
        {title}
      </motion.h2>
      {subTitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-charcoal/70 text-base sm:text-lg font-light max-w-2xl mx-auto"
        >
          {subTitle}
        </motion.p>
      )}
      {description && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-16 h-[2px] bg-gold mx-auto mt-6"
        />
      )}
    </section>
  );
};

export default SectionHeader;
