import React from 'react';
import { Wine } from 'lucide-react';
import { Language } from '../types';
import { TERRACE_DISH_IMAGE, WINES } from '../data/carmesiData';
import { ResilientImage } from './ResilientImage';

interface CellarSectionProps {
  lang: Language;
}

const CELLAR_COPY: Record<
  Language,
  {
    kicker: string;
    title: string;
    subtitle: string;
    glass: string;
    bottle: string;
  }
> = {
  fr: {
    kicker: 'La Cave & Accords',
    title: 'Grands Crus Français & Trésors d’Espagne',
    subtitle:
      'Sélectionnés avec soin par Inge, nos flacons célèbrent les terroirs de Rioja, Ribera del Duero, Bourgogne et Champagne.',
    glass: 'Verre',
    bottle: 'Bouteille',
  },
  en: {
    kicker: 'The Wine Cellar',
    title: 'French Grands Crus & Spanish Treasures',
    subtitle:
      'Curated by Inge, our cellar celebrates iconic estates from Rioja, Ribera del Duero, Burgundy, and Champagne.',
    glass: 'Glass',
    bottle: 'Bottle',
  },
  es: {
    kicker: 'La Bodega y Maridajes',
    title: 'Grands Crus Franceses y Tesoros de España',
    subtitle:
      'Seleccionados por Inge, nuestros vinos celebran las denominaciones de Rioja, Ribera del Duero, Borgoña y Champagne.',
    glass: 'Copa',
    bottle: 'Botella',
  },
};

export const CellarSection: React.FC<CellarSectionProps> = ({ lang }) => {
  const t = CELLAR_COPY[lang];

  return (
    <section id="cave" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#F5F2EB]/8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left: Terrace Wine & Gastronomy Visual */}
          <div className="lg:col-span-5 relative min-h-[380px] border border-[#D4AF37]/20 bg-[#141414] overflow-hidden">
            <ResilientImage
              src={TERRACE_DISH_IMAGE}
              alt="Accords mets et vins sur la terrasse du Restaurante Carmesí"
              className="w-full h-full object-cover object-[center_35%] scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-[#D4AF37] mb-1">
                <Wine className="w-4 h-4" />
                <span>Sommelier Selection</span>
              </div>
              <p className="font-serif text-xl text-[#F5F2EB]">
                {lang === 'fr'
                  ? 'Dégustation au verre & millésimes rares'
                  : lang === 'en'
                  ? 'By-the-glass pours & rare vintages'
                  : 'Selección por copas y añadas excepcionales'}
              </p>
            </div>
          </div>

          {/* Right: Wine List */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-3">{t.kicker}</p>
            <h2
              className="font-serif text-3xl sm:text-4xl text-[#F5F2EB] leading-[1.14] mb-4"
              style={{ textWrap: 'balance' }}
            >
              {t.title}
            </h2>
            <p className="text-[#F5F2EB]/70 text-base font-light leading-relaxed mb-10">
              {t.subtitle}
            </p>

            <div className="divide-y divide-[#F5F2EB]/10 border-t border-b border-[#F5F2EB]/10">
              {WINES.map((wine) => (
                <div key={wine.id} className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                  <div className="max-w-lg">
                    <div className="text-[11px] tracking-[0.15em] uppercase text-[#C5A880] mb-1">
                      {wine.region} · {wine.vintage} · {wine.type[lang]}
                    </div>
                    <h3 className="font-serif text-xl text-[#F5F2EB] mb-1">{wine.name}</h3>
                    <p className="text-xs text-[#F5F2EB]/65 font-light leading-relaxed">
                      {wine.notes[lang]}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm font-serif tabular-nums shrink-0">
                    {wine.priceGlass && (
                      <span className="text-[#F5F2EB]/70">
                        {t.glass} <strong className="text-[#D4AF37] font-normal">{wine.priceGlass} €</strong>
                      </span>
                    )}
                    <span className="text-[#F5F2EB]/70">
                      {t.bottle} <strong className="text-[#D4AF37] font-normal text-lg">{wine.priceBottle} €</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
