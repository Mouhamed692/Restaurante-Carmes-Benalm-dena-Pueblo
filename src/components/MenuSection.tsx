import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Language, MenuCategoryId, PageId } from '../types';
import { CATEGORY_LABELS, DISHES } from '../data/carmesiData';
import { ResilientImage } from './ResilientImage';

interface MenuSectionProps {
  lang: Language;
  onNavigate?: (page: PageId) => void;
}

const MENU_COPY: Record<
  Language,
  {
    kicker: string;
    title: string;
    subtitle: string;
    pairingLabel: string;
    tastingTitle: string;
    tastingDesc: string;
    tastingPrice: string;
    reserveBtn: string;
  }
> = {
  fr: {
    kicker: 'Spécialités Culinaires',
    title: 'La Carte Prestige & Menu Dégustation',
    subtitle:
      'Naviguez librement entre nos entrées, poissons de la baie, viandes nobles, accompagnements de saison et desserts signatures.',
    pairingLabel: 'Accord suggéré',
    tastingTitle: 'Menu Dégustation Carmesí · 4 Services',
    tastingDesc:
      'Amuse-bouche du Chef, Entrée au choix, Plat de la Mer ou de la Terre, et Dessert Signature.',
    tastingPrice: '68 € / convive',
    reserveBtn: 'Réserver',
  },
  en: {
    kicker: 'Culinary Specialties',
    title: 'À La Carte & Tasting Menu',
    subtitle:
      'Explore our starters, local bay fish, prime meats, seasonal side dishes, and signature desserts.',
    pairingLabel: 'Suggested pairing',
    tastingTitle: 'Carmesí Tasting Menu · 4 Courses',
    tastingDesc:
      'Chef’s Amuse-Bouche, Choice of Starter, Sea or Land Main Course, and Signature Dessert.',
    tastingPrice: '€68 / guest',
    reserveBtn: 'Reserve',
  },
  es: {
    kicker: 'Especialidades Culinarias',
    title: 'La Carta Prestige y Menú Degustación',
    subtitle:
      'Navegue entre nuestros entrantes, pescados de la bahía, carnes nobles, guarniciones de temporada y postres de autor.',
    pairingLabel: 'Maridaje sugerido',
    tastingTitle: 'Menú Degustación Carmesí · 4 Pases',
    tastingDesc:
      'Aperitivo del Chef, Entrante a elegir, Principal de Mar o Tierra y Postre de Autor.',
    tastingPrice: '68 € / comensal',
    reserveBtn: 'Reservar',
  },
};

const CATEGORIES: MenuCategoryId[] = ['all', 'starters', 'sea', 'land', 'sides', 'desserts'];
const DISH_CATEGORIES: Exclude<MenuCategoryId, 'all'>[] = [
  'starters',
  'sea',
  'land',
  'sides',
  'desserts',
];

export const MenuSection: React.FC<MenuSectionProps> = ({ lang, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>('all');
  const t = MENU_COPY[lang];

  const categoriesToRender =
    activeCategory === 'all' ? DISH_CATEGORIES : [activeCategory];

  return (
    <section id="carte" className="py-28 sm:py-32 bg-[#0E0E0E] border-t border-[#F5F2EB]/8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-3">{t.kicker}</p>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#F5F2EB] leading-[1.12] mb-4"
            style={{ textWrap: 'balance' }}
          >
            {t.title}
          </h2>
          <p className="text-[#F5F2EB]/70 text-base font-light leading-relaxed">{t.subtitle}</p>
        </motion.div>

        {/* Interactive Category Tabs */}
        <div
          role="tablist"
          aria-label={t.title}
          className="flex flex-wrap items-center gap-2 pb-8 mb-12 border-b border-[#F5F2EB]/10"
        >
          {CATEGORIES.map((catId) => {
            const isActive = activeCategory === catId;
            return (
              <button
                key={catId}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(catId)}
                className={`relative px-4 py-2.5 text-xs tracking-[0.14em] uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'border-[#D4AF37]/70 text-[#F5F2EB] font-medium'
                    : 'bg-[#141414] border-[#F5F2EB]/10 text-[#F5F2EB]/65 hover:text-[#F5F2EB] hover:border-[#D4AF37]/30'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="menuTabIndicator"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    className="absolute inset-0 bg-[#6E1A24] -z-0"
                  />
                )}
                <span className="relative z-10">{CATEGORY_LABELS[catId][lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Dishes Grouped by Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-16"
          >
            {categoriesToRender.map((catKey) => {
              const items = DISHES.filter((d) => d.category === catKey);
              return (
                <div key={catKey}>
                  {activeCategory === 'all' && (
                    <div className="flex items-center gap-4 mb-7">
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#D4AF37]">
                        {CATEGORY_LABELS[catKey][lang]}
                      </h3>
                      <div className="flex-1 h-[1px] bg-[#D4AF37]/20" />
                    </div>
                  )}

                  <div
                    className={`grid grid-cols-1 ${
                      items.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
                    } gap-8`}
                  >
                    {items.map((dish, idx) => (
                      <motion.article
                        key={dish.id}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: idx * 0.06,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="group bg-[#141414] border border-[#F5F2EB]/10 hover:border-[#D4AF37]/45 transition-colors flex flex-col overflow-hidden"
                      >
                        {/* 4:3 Dish Photography */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0A]">
                          <ResilientImage
                            src={dish.image}
                            alt={dish.name[lang]}
                            className="w-full h-full object-cover object-[center_35%] scale-[1.07] group-hover:scale-[1.12] transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Dish Details */}
                        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-baseline justify-between gap-4 mb-2">
                              <h4 className="font-serif text-2xl text-[#F5F2EB] leading-snug">
                                {dish.name[lang]}
                              </h4>
                              <span className="font-serif text-xl text-[#D4AF37] tabular-nums shrink-0">
                                {dish.price} €
                              </span>
                            </div>

                            <p className="text-[11px] tracking-[0.14em] uppercase text-[#C5A880] mb-4">
                              {dish.subtitle[lang]}
                            </p>

                            <p className="text-sm text-[#F5F2EB]/75 font-light leading-relaxed mb-6">
                              {dish.description[lang]}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-[#F5F2EB]/8 text-xs text-[#F5F2EB]/55 flex items-center justify-between gap-2">
                            <span className="uppercase tracking-[0.1em] text-[#C5A880]/80">
                              {t.pairingLabel}
                            </span>
                            <span className="text-right text-[#F5F2EB]/80">
                              {dish.pairing[lang]}
                            </span>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Tasting Menu Editorial Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 p-7 sm:p-9 bg-[#141414] border border-[#D4AF37]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EB] mb-1.5">
              {t.tastingTitle}
            </h3>
            <p className="text-sm text-[#F5F2EB]/70 font-light">{t.tastingDesc}</p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <span className="font-serif text-2xl sm:text-3xl text-[#D4AF37] tabular-nums">
              {t.tastingPrice}
            </span>
            {onNavigate ? (
              <button
                type="button"
                onClick={() => onNavigate('reservations')}
                className="px-6 py-3 bg-[#D4AF37] text-[#0A0A0A] text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[#C5A880] transition-colors whitespace-nowrap cursor-pointer"
              >
                {t.reserveBtn}
              </button>
            ) : (
              <a
                href="#reservations"
                className="px-6 py-3 bg-[#D4AF37] text-[#0A0A0A] text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[#C5A880] transition-colors whitespace-nowrap"
              >
                {t.reserveBtn}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
