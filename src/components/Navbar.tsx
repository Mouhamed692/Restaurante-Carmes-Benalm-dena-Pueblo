import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Language, PageId } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_COPY: Record<
  Language,
  {
    home: string;
    story: string;
    menu: string;
    cellar: string;
    access: string;
    cta: string;
  }
> = {
  fr: {
    home: 'Accueil',
    story: "L'Histoire",
    menu: 'La Carte',
    cellar: 'La Cave',
    access: 'Accès',
    cta: 'Réserver une Table',
  },
  en: {
    home: 'Home',
    story: 'Our Story',
    menu: 'The Menu',
    cellar: 'Wine Cellar',
    access: 'Location',
    cta: 'Reserve a Table',
  },
  es: {
    home: 'Inicio',
    story: 'Historia',
    menu: 'La Carta',
    cellar: 'La Bodega',
    access: 'Ubicación',
    cta: 'Reservar Mesa',
  },
};

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  currentPage,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = NAV_COPY[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks: { page: PageId; label: string }[] = [
    { page: 'home', label: t.home },
    { page: 'story', label: t.story },
    { page: 'menu', label: t.menu },
    { page: 'cellar', label: t.cellar },
    { page: 'contact', label: t.access },
  ];

  const handleSelectPage = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled || currentPage !== 'home'
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-3.5'
            : 'bg-gradient-to-b from-[#0A0A0A]/85 to-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <button
            type="button"
            onClick={() => handleSelectPage('home')}
            className="font-serif text-xl sm:text-2xl tracking-[0.22em] text-[#F5F2EB] font-medium uppercase whitespace-nowrap shrink-0 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            CARMESÍ
          </button>

          {/* Zone 2: 5 concise single-line page links */}
          <nav
            aria-label="Navigation principale"
            className="hidden lg:flex items-center gap-7 text-xs tracking-[0.14em] uppercase text-[#F5F2EB]/80"
          >
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  type="button"
                  onClick={() => handleSelectPage(link.page)}
                  className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive ? 'text-[#D4AF37] font-medium' : 'hover:text-[#D4AF37]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveUnderline"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute left-0 right-0 bottom-0 h-[1px] bg-[#D4AF37]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Switcher + Primary Gold CTA */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <div
              role="group"
              aria-label="Language selector"
              className="flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-[#F5F2EB]/60"
            >
              {(['fr', 'en', 'es'] as Language[]).map((code, idx) => (
                <React.Fragment key={code}>
                  <button
                    type="button"
                    onClick={() => setLang(code)}
                    className={`px-1 py-0.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      lang === code
                        ? 'text-[#D4AF37] font-semibold'
                        : 'text-[#F5F2EB]/60 hover:text-[#F5F2EB]'
                    }`}
                  >
                    {code.toUpperCase()}
                  </button>
                  {idx < 2 && <span className="text-[#F5F2EB]/25 select-none">/</span>}
                </React.Fragment>
              ))}
            </div>

            <button
              type="button"
              onClick={() => handleSelectPage('reservations')}
              className={`px-5 py-2.5 text-xs tracking-[0.14em] uppercase font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'reservations'
                  ? 'bg-[#6E1A24] text-[#F5F2EB] border border-[#D4AF37]'
                  : 'bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#C5A880]'
              }`}
            >
              {t.cta}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 text-[11px] tracking-[0.12em] uppercase">
              {(['fr', 'en', 'es'] as Language[]).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={`px-1.5 py-1 transition-colors ${
                    lang === code ? 'text-[#D4AF37] font-semibold' : 'text-[#F5F2EB]/60'
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="p-2 text-[#F5F2EB] hover:text-[#D4AF37] transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-[#0A0A0A]/95 backdrop-blur-lg flex flex-col justify-center items-center px-6 lg:hidden">
          <nav className="flex flex-col items-center gap-6 text-center">
            {navLinks.map((link) => (
              <button
                key={link.page}
                type="button"
                onClick={() => handleSelectPage(link.page)}
                className={`font-serif text-3xl transition-colors ${
                  currentPage === link.page
                    ? 'text-[#D4AF37]'
                    : 'text-[#F5F2EB] hover:text-[#D4AF37]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleSelectPage('reservations')}
              className="mt-4 px-8 py-3.5 text-xs tracking-[0.16em] uppercase font-medium bg-[#D4AF37] text-[#0A0A0A]"
            >
              {t.cta}
            </button>
          </nav>
        </div>
      )}
    </>
  );
};
