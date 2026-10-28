import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowUpRight, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

const getSalonStatus = () => {
  const parts = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const hour = Number(parts.find((part) => part.type === 'hour')?.value);
  const minute = Number(parts.find((part) => part.type === 'minute')?.value);
  const currentMinutes = hour * 60 + minute;

  return currentMinutes >= 8 * 60 + 30 && currentMinutes < 21 * 60;
};

interface NavbarProps {
  currentPage?: 'home' | 'hair' | 'bridal' | 'mens';
  onNavigateHome?: () => void;
  onNavigatePage?: (page: 'hair' | 'bridal' | 'mens') => void;
  onOpenBooking: (serviceName?: string, branch?: 'unisex' | 'mens') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigateHome,
  onNavigatePage,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSalonOpen, setIsSalonOpen] = useState(getSalonStatus);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    const statusInterval = window.setInterval(() => setIsSalonOpen(getSalonStatus()), 60_000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearInterval(statusInterval);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Hair Studio', page: 'hair' as const },
    { name: 'Bridal Studio', page: 'bridal' as const },
    { name: "Men's Grooming", page: 'mens' as const },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Locations', href: '#locations' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleLinkClick = (e: React.MouseEvent, page?: 'hair' | 'bridal' | 'mens', href?: string) => {
    closeMobileMenu();
    if (page && onNavigatePage) {
      e.preventDefault();
      onNavigatePage(page);
    } else if (href && currentPage !== 'home' && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      setTimeout(() => {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <div className="relative z-50 bg-charcoal text-ivory">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2.5">
            <MapPin size={12} className="shrink-0 text-gold" />
            <span className="truncate text-[10px] font-medium uppercase tracking-[0.16em] text-ivory/85 sm:text-[11px] sm:tracking-[0.2em]">
              <span className="sm:hidden">Karaikudi · Est. 2020</span>
              <span className="hidden sm:inline">A little beauty, close to home · Karaikudi since 2020</span>
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-3 sm:gap-5">
            <span
              className={`inline-flex items-center gap-1.5 text-[10px] font-semibold sm:text-[11px] ${
                isSalonOpen ? 'text-emerald-300' : 'text-ivory/75'
              }`}
              aria-label={isSalonOpen ? 'Salon is open now' : 'Salon is closed now'}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isSalonOpen ? 'bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.7)]' : 'bg-ivory/45'
                }`}
              />
              <span className="sm:hidden">{isSalonOpen ? 'Open' : 'Closed'}</span>
              <span className="hidden sm:inline">{isSalonOpen ? 'Open now' : 'Closed now'}</span>
            </span>
            <span className="hidden text-[11px] tracking-wide text-ivory/70 md:inline">
              · Daily, 8:30 AM – 9:00 PM
            </span>
            <a
              href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-gold-light transition-colors hover:text-white sm:text-xs"
            >
              <Phone size={12} />
              {SALON_INFO.primaryPhone}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          isScrolled
            ? 'border-gold/25 bg-ivory/95 py-2 shadow-[0_12px_35px_rgba(41,37,34,0.10)] backdrop-blur-xl'
            : 'border-gold/15 bg-ivory/90 py-3 backdrop-blur-lg'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="group flex min-w-0 items-center gap-3 text-left bg-transparent border-0 p-0 cursor-pointer"
            aria-label="Haute Looks home"
            onClick={() => {
              closeMobileMenu();
              if (onNavigateHome) onNavigateHome();
            }}
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-charcoal text-[11px] font-semibold tracking-[0.12em] text-gold-light shadow-[0_5px_16px_rgba(41,37,34,0.16)] transition-transform duration-300 group-hover:rotate-[-8deg] sm:h-12 sm:w-12">
              HL
              <span className="absolute inset-[4px] rounded-full border border-gold/25" />
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-[0.12em] text-charcoal transition-colors group-hover:text-gold-dark sm:text-xl">
                HAUTE LOOKS
              </span>
              <span className="mt-1.5 truncate text-[9px] font-medium uppercase tracking-[0.16em] text-charcoal/60 sm:text-[10px] sm:tracking-[0.19em]">
                Unisex salon &amp; bridal studio
              </span>
            </span>
          </button>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => {
              const isActive = link.page && currentPage === link.page;
              return (
                <a
                  key={link.name}
                  href={link.href || `#${link.page}`}
                  onClick={(e) => handleLinkClick(e, link.page, link.href)}
                  className={`group relative rounded-full px-3 py-2 text-[12px] font-medium transition-colors ${
                    isActive
                      ? 'bg-gold/15 text-gold-dark font-semibold'
                      : 'text-charcoal/75 hover:bg-gold/10 hover:text-charcoal'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-1 left-1/2 h-px -translate-x-1/2 bg-gold-dark transition-all duration-300 ${
                      isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <a
              href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 text-charcoal transition-all hover:border-gold hover:bg-gold/10 hover:text-gold-dark"
              aria-label={`Call Haute Looks at ${SALON_INFO.primaryPhone}`}
            >
              <Phone size={15} />
            </a>
            {/* <button
              onClick={() => onOpenBooking()}
              className="group inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2.5 text-xs font-semibold text-ivory shadow-[0_6px_18px_rgba(41,37,34,0.18)] transition-all hover:bg-gold hover:text-charcoal hover:shadow-gold-glow sm:px-5 sm:text-sm"
            >
              <Calendar size={14} className="text-gold transition-colors group-hover:text-charcoal" />
              Book a visit
              <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button> */}
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenBooking();
              }}
              className="rounded-full bg-gold px-3.5 py-2 text-[11px] font-semibold text-charcoal shadow-sm transition-colors hover:bg-gold-light"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-charcoal transition-colors hover:bg-gold/10"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full border-t border-gold/20 bg-ivory/98 px-5 pb-6 pt-3 shadow-[0_22px_35px_rgba(41,37,34,0.12)] backdrop-blur-xl sm:px-8 lg:px-10 xl:hidden"
          >
            <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href || `#${link.page}`}
                  onClick={(e) => handleLinkClick(e, link.page, link.href)}
                  className={`flex items-center justify-between py-3.5 text-sm font-medium text-charcoal transition-colors hover:text-gold-dark ${
                    index !== navLinks.length - 1 ? 'border-b border-gold/15' : ''
                  }`}
                >
                  {link.name}
                  <ArrowUpRight size={14} className="text-gold-dark/70" />
                </a>
              ))}
              <a
                href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-gold/35 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-gold/10"
              >
                <Phone size={15} className="text-gold-dark" />
                Call {SALON_INFO.primaryPhone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
