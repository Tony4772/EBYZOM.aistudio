import React, { useState } from 'react';
import { Logo } from './Logo';

export type PageId = 'inicio' | 'servicios' | 'soluciones' | 'metodologia' | 'casos-de-exito' | 'contacto';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
  onOpenClientPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal,
  onOpenClientPortal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'soluciones', label: 'Soluciones' },
    { id: 'metodologia', label: 'Metodología' },
    { id: 'casos-de-exito', label: 'Casos de Éxito' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f9ff]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e5eeff]">
      <div className="h-20 max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl flex items-center justify-between gap-space-md">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center flex-shrink-0 cursor-pointer focus:outline-none hover:opacity-90 transition-opacity"
          aria-label="EBYZOM - Ir al inicio"
        >
          <Logo size="lg" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-space-xs">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-space-md py-space-sm transition-all rounded-lg cursor-pointer ${
                  isActive
                    ? 'bg-[#e5eeff] font-title-md text-title-md text-primary font-semibold'
                    : 'font-label-md text-label-md text-[#3f4a3c] hover:text-[#0b1c30] hover:bg-[#eff4ff]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA cluster */}
        <div className="flex items-center gap-space-md flex-shrink-0">
          {/* Official WhatsApp phone badge */}
          <a
            className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-lowest rounded-full shadow-[0_1px_8px_rgba(0,0,0,0.04)] border border-[#e5eeff] font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high hover:text-primary transition-colors"
            href="https://wa.me/51906591037?text=Hola%20EBYZOM,%20deseo%20hacer%20una%20consulta%20técnica%20sobre%20un%20proyecto."
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-code text-code text-[#0b1c30] font-semibold">+51 906 591 037</span>
          </a>

          {/* Primary Action Button */}
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center justify-center px-space-lg py-space-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-[0_4px_16px_rgba(0,107,30,0.28)] hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
          >
            Cotizar Proyecto
          </button>

          {/* Client Portal / Demo Avatar */}
          <button
            onClick={onOpenClientPortal}
            title="Portal de Clientes & Demostración"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-on-primary hover:bg-primary-container transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#0b1c30] hover:bg-[#e5eeff] transition-colors"
            aria-label="Abrir menú de navegación"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#e5eeff] bg-[#f8f9ff] px-margin-mobile py-4 flex flex-col gap-2 shadow-xl animate-in fade-in duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg font-title-md transition-colors ${
                currentPage === item.id
                  ? 'bg-primary text-white font-semibold'
                  : 'text-[#0b1c30] hover:bg-[#e5eeff]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#e5eeff] flex flex-col gap-2">
            <a
              href="https://wa.me/51906591037"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-surface-container font-code text-sm font-semibold text-primary"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp: +51 906 591 037
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 bg-primary text-white font-title-md rounded-lg shadow-md font-semibold text-center"
            >
              Iniciar Cotización
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
