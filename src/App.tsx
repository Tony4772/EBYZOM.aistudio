import React, { useState, useEffect } from 'react';
import { Header, PageId } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { SolutionsView } from './views/SolutionsView';
import { MethodologyView } from './views/MethodologyView';
import { CaseStudiesView } from './views/CaseStudiesView';
import { ContactView } from './views/ContactView';
import { QuoteModal } from './components/QuoteModal';
import { ClientPortalModal } from './components/ClientPortalModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteDefaultService, setQuoteDefaultService] = useState<'android' | 'web' | 'erp' | 'cloud'>('android');
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);

  // Sync hash if user navigates with #
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['inicio', 'servicios', 'soluciones', 'metodologia', 'casos-de-exito', 'contacto'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const handleOpenQuoteModal = (service: 'android' | 'web' | 'erp' | 'cloud' = 'android') => {
    setQuoteDefaultService(service);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col font-body-md text-on-surface">
      {/* Fixed Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal('android')}
        onOpenClientPortal={() => setIsClientPortalOpen(true)}
      />

      {/* Main View Container */}
      <main className="w-full pt-20 bg-surface flex-1">
        {currentPage === 'inicio' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
        {currentPage === 'servicios' && (
          <ServicesView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
        {currentPage === 'soluciones' && (
          <SolutionsView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
        {currentPage === 'metodologia' && (
          <MethodologyView
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => handleOpenQuoteModal('android')}
          />
        )}
        {currentPage === 'casos-de-exito' && (
          <CaseStudiesView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
        {currentPage === 'contacto' && (
          <ContactView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Standard Corporate Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Quotation Calculator & Budget Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultService={quoteDefaultService}
      />

      {/* Client Demonstration & Staging Portal Modal */}
      <ClientPortalModal
        isOpen={isClientPortalOpen}
        onClose={() => setIsClientPortalOpen(false)}
      />
    </div>
  );
}
