import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Language, PageId } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { MenuSection } from './components/MenuSection';
import { CellarSection } from './components/CellarSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { FooterAndFloating } from './components/FooterAndFloating';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F2EB] flex flex-col">
      <Navbar
        lang={lang}
        setLang={setLang}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="page-home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroSection lang={lang} onNavigate={handleNavigate} />
              <StorySection lang={lang} />
              <MenuSection lang={lang} onNavigate={handleNavigate} />
              <CellarSection lang={lang} />
              <ReservationSection lang={lang} />
              <ContactSection lang={lang} />
            </motion.div>
          )}

          {currentPage === 'story' && (
            <motion.div
              key="page-story"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pt-12"
            >
              <StorySection lang={lang} />
              <ReservationSection lang={lang} />
            </motion.div>
          )}

          {currentPage === 'menu' && (
            <motion.div
              key="page-menu"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pt-12"
            >
              <MenuSection lang={lang} onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'cellar' && (
            <motion.div
              key="page-cellar"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pt-12"
            >
              <CellarSection lang={lang} />
            </motion.div>
          )}

          {currentPage === 'reservations' && (
            <motion.div
              key="page-reservations"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pt-12"
            >
              <ReservationSection lang={lang} />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="page-contact"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pt-12"
            >
              <ContactSection lang={lang} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <FooterAndFloating lang={lang} onNavigate={handleNavigate} />
    </div>
  );
}
