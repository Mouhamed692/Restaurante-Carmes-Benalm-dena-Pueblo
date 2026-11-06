import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { HERO_TABLE_IMAGE, INTERIOR_IMAGE } from '../data/carmesiData';
import { ResilientImage } from './ResilientImage';

interface StorySectionProps {
  lang: Language;
}

const STORY_COPY: Record<
  Language,
  {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    stats: { value: string; label: string }[];
  }
> = {
  fr: {
    kicker: "L'Expérience & Les Hôtes",
    title: 'Plus de 24 ans de passion gastronomique, entre Paris et l’Andalousie.',
    p1: 'Derrière le Restaurante Carmesí se trouve un duo d’exception : le Chef Ton Overbeek en cuisine et son épouse Inge en salle. Forts de plus de vingt-quatre années de succès gastronomique — notamment en tant qu’anciens propriétaires du renommé restaurant Karmozijn — ils insufflent à chaque dîner une exigence rare.',
    p2: 'Leur signature, « Fine French Dining with Spanish Soul », marie la rigueur des sauces classiques françaises aux trésors saisonniers de la baie de Málaga et du terroir andalou.',
    p3: 'Que vous choisissiez notre terrasse intime ouverte sur les lumières lointaines de la Méditerranée ou notre salle intérieure feutrée aux fauteuils de velours, Inge veille personnellement à ce que chaque soirée devienne un souvenir inoubliable.',
    stats: [
      { value: '24+ Ans', label: 'Savoir-Faire Gastronomique (Ex-Karmozijn)' },
      { value: '4.9 / 5', label: "Note d'Excellence · Avis Vérifiés" },
      { value: '19h30 – 23h30', label: 'Service du Soir · Mardi au Dimanche' },
    ],
  },
  en: {
    kicker: 'The Experience & Your Hosts',
    title: 'Over 24 years of gastronomic mastery, bridging Paris and Andalusia.',
    p1: 'At the heart of Restaurante Carmesí stands a devoted culinary duo: Chef Ton Overbeek in the kitchen and his wife Inge leading the dining room. With over twenty-four years of acclaimed hospitality—formerly as proprietors of the celebrated restaurant Karmozijn—they bring timeless poise to every evening.',
    p2: 'Their culinary philosophy, “Fine French Dining with Spanish Soul,” unites classic French technique and reductions with the finest seasonal produce of Málaga Bay and Andalusia.',
    p3: 'Whether seated on our intimate terrace overlooking the distant lights of the Mediterranean coast or inside our hushed, velvet-draped salon, Inge ensures warm, attentive service tailored to your table.',
    stats: [
      { value: '24+ Years', label: 'Gastronomic Heritage (Former Karmozijn)' },
      { value: '4.9 / 5', label: 'Guest Rating · Exceptional Reviews' },
      { value: '19:30 – 23:30', label: 'Dinner Service · Tuesday to Sunday' },
    ],
  },
  es: {
    kicker: 'La Experiencia y Los Anfitriones',
    title: 'Más de 24 años de alta gastronomía, entre Francia y Andalucía.',
    p1: 'Al frente de Restaurante Carmesí se encuentra un tándem excepcional: el Chef Ton Overbeek en la cocina y su esposa Inge en la sala. Con más de veinticuatro años de trayectoria —antiguos propietarios del reconocido restaurante Karmozijn—, imprimen excelencia en cada detalle.',
    p2: 'Su propuesta, «Fine French Dining with Spanish Soul», fusiona la precisión de la alta cocina francesa con los mejores productos de temporada de la bahía de Málaga y Andalucía.',
    p3: 'Tanto en nuestra íntima terraza con vistas lejanas al mar Mediterráneo como en nuestro acogedor salón interior, Inge cuida cada velada con una hospitalidad cercana y refinada.',
    stats: [
      { value: '24+ Años', label: 'Trayectoria Gastronómica (Ex-Karmozijn)' },
      { value: '4.9 / 5', label: 'Valoración Media · Reseñas Excepcionales' },
      { value: '19:30 – 23:30', label: 'Servicio de Cenas · Martes a Domingo' },
    ],
  },
};

export const StorySection: React.FC<StorySectionProps> = ({ lang }) => {
  const t = STORY_COPY[lang];

  return (
    <section id="histoire" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#F5F2EB]/8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Editorial Storytelling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-4">{t.kicker}</p>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#F5F2EB] leading-[1.14] mb-8"
              style={{ textWrap: 'balance' }}
            >
              {t.title}
            </h2>

            <div className="space-y-5 text-[#F5F2EB]/75 text-base leading-[1.75] font-light">
              <p>{t.p1}</p>
              <p className="text-[#F5F2EB]/90 font-normal">{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            {/* Subtle Signature */}
            <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs tracking-[0.15em] uppercase text-[#C5A880]">
              <span>Chef Ton Overbeek & Inge</span>
              <span>Benalmádena Pueblo</span>
            </div>
          </motion.div>

          {/* Right Column: Dual Architectural & Table Photography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="relative h-80 sm:h-full min-h-[360px] overflow-hidden border border-[#D4AF37]/20 bg-[#141414]">
              <ResilientImage
                src={INTERIOR_IMAGE}
                alt="Salle intérieure feutrée du Restaurante Carmesí"
                className="w-full h-full object-cover object-[center_35%] scale-[1.06] hover:scale-[1.1] transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent">
                <span className="text-[11px] tracking-[0.16em] uppercase text-[#C5A880]">
                  {lang === 'fr' ? 'Le Salon Intime' : lang === 'en' ? 'The Intimate Salon' : 'El Salón Íntimo'}
                </span>
              </div>
            </div>

            <div className="relative h-80 sm:h-full min-h-[360px] overflow-hidden border border-[#D4AF37]/20 bg-[#141414] sm:mt-8">
              <ResilientImage
                src={HERO_TABLE_IMAGE}
                alt="Table dressée à la lueur des bougies avec rose rouge et vin"
                className="w-full h-full object-cover object-[center_35%] scale-[1.06] hover:scale-[1.1] transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent">
                <span className="text-[11px] tracking-[0.16em] uppercase text-[#C5A880]">
                  {lang === 'fr' ? 'Art de la Table' : lang === 'en' ? 'Table Artistry' : 'Arte de la Mesa'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Unboxed Editorial Metrics Strip */}
        <div className="mt-20 pt-12 border-t border-[#F5F2EB]/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`${
                index > 0 ? 'md:border-l md:border-[#F5F2EB]/10 md:pl-8' : ''
              }`}
            >
              <div className="font-serif text-3xl sm:text-4xl text-[#D4AF37] tabular-nums mb-1.5">
                {stat.value}
              </div>
              <div className="text-xs tracking-[0.12em] uppercase text-[#F5F2EB]/65">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
