import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServiceFinder } from './components/ServiceFinder';
import { Services } from './components/Services';
import { BridalSection } from './components/BridalSection';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SalonExperienceShowcase } from './components/SalonExperienceShowcase';
import { Locations } from './components/Locations';
import { FAQs } from './components/FAQs';
// import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HairServicesPage } from './components/HairServicesPage';
import { BridalPage } from './components/BridalPage';
import { MensGroomingPage } from './components/MensGroomingPage';
import { BranchId } from './types';

type PageState = 'home' | 'hair' | 'bridal' | 'mens';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageState>('home');
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedBranch, setSelectedBranch] = useState<BranchId>('unisex');

  const handleOpenBooking = (serviceName?: string, branch?: BranchId) => {
    setSelectedService(serviceName || '');
    if (branch) setSelectedBranch(branch);

    if (currentPage !== 'home') {
      setCurrentPage('home');
    }

    setTimeout(() => {
      const bookingEl = document.getElementById('booking');
      if (bookingEl) {
        bookingEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSelectService = (serviceName: string, branch: BranchId) => {
    setSelectedService(serviceName);
    setSelectedBranch(branch);
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    setTimeout(() => {
      const bookingEl = document.getElementById('booking');
      if (bookingEl) {
        bookingEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSelectBranch = (branch: BranchId) => {
    setSelectedService('');
    setSelectedBranch(branch);
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    setTimeout(() => {
      const bookingEl = document.getElementById('booking');
      if (bookingEl) {
        bookingEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigatePage = (page: 'hair' | 'bridal' | 'mens') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans selection:bg-gold/25 selection:text-charcoal flex flex-col">
      {/* Sticky Luxury Navbar with page-aware navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigateHome={handleNavigateHome}
        onNavigatePage={handleNavigatePage}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero onOpenBooking={() => handleOpenBooking()} />

            {/* 2. About Haute Looks */}
            <About />

            {/* 3. Interactive Guided Service Discovery (3 Interactive Cards) */}
            <ServiceFinder
              onChooseService={handleSelectService}
              onNavigatePage={handleNavigatePage}
            />

            {/* 4. Premium Services */}
            <Services onSelectService={handleSelectService} />

            {/* 5. Bridal Studio Showcase */}
            <BridalSection />

            {/* 6. Hair Transformation & Beauty Gallery */}
            <Gallery />

            {/* 7. Why Choose Haute Looks */}
            <WhyChooseUs />

            {/* 8. Haute Looks Experience & Ambience Showcase */}
            <SalonExperienceShowcase />

            {/* 9. Our Locations (Karaikudi) */}
            <Locations onSelectBranchForBooking={handleSelectBranch} />

            {/* 10. Visitor FAQs */}
            <FAQs />

            {/* 11. Appointment Booking */}
            {/* <BookingForm */}
              // initialService={selectedService}
              // initialBranch={selectedBranch}
            {/* /> */}
          </>
        )}

        {currentPage === 'hair' && (
          <HairServicesPage
            onBack={handleNavigateHome}
            onBookService={handleSelectService}
          />
        )}

        {currentPage === 'bridal' && (
          <BridalPage
            onBack={handleNavigateHome}
            onBookService={handleSelectService}
          />
        )}

        {currentPage === 'mens' && (
          <MensGroomingPage
            onBack={handleNavigateHome}
            onBookService={handleSelectService}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
