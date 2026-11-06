import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Language, PageId } from '../types';
import { buildWhatsAppDirectUrl, HERO_IMAGE } from '../data/carmesiData';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroSectionProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

const HERO_COPY: Record<
  Language,
  {
    kicker: string;
    headlineWords: string[];
    subtitle: string;
    ctaForm: string;
    ctaMenu: string;
    ctaWhatsapp: string;
    hoursNote: string;
  }
> = {
  fr: {
    kicker: 'CARMESÍ – HAUTE CUISINE · BENALMÁDENA PUEBLO',
    headlineWords: ["L'Élégance", 'Française,', 'la', 'Passion', 'Andalouse.'],
    subtitle:
      'Une expérience gastronomique intime orchestrée par le Chef Ton Overbeek & Inge au cœur de Benalmádena Pueblo.',
    ctaForm: 'Réserver via Formulaire',
    ctaMenu: 'Explorer La Carte',
    ctaWhatsapp: 'Réservation Directe WhatsApp',
    hoursNote: 'Mardi – Dimanche · 19h30 – 23h30 · Terrasse Vue Mer & Salle Intime',
  },
  en: {
    kicker: 'CARMESÍ – HAUTE CUISINE · BENALMÁDENA PUEBLO',
    headlineWords: ['French', 'Elegance,', 'Andalusian', 'Soul.'],
    subtitle:
      'An intimate fine dining experience orchestrated by Chef Ton Overbeek & Inge in the heart of Benalmádena Pueblo.',
    ctaForm: 'Reserve via Form',
    ctaMenu: 'Explore The Menu',
    ctaWhatsapp: 'Direct WhatsApp Booking',
    hoursNote: 'Tuesday – Sunday · 19:30 – 23:30 · Sea-View Terrace & Intimate Salon',
  },
  es: {
    kicker: 'CARMESÍ – HAUTE CUISINE · BENALMÁDENA PUEBLO',
    headlineWords: ['Elegancia', 'Francesa,', 'Pasión', 'Andaluza.'],
    subtitle:
      'Una experiencia gastronómica íntima orquestada por el Chef Ton Overbeek e Inge en el corazón de Benalmádena Pueblo.',
    ctaForm: 'Reservar por Formulario',
    ctaMenu: 'Explorar La Carta',
    ctaWhatsapp: 'Reserva Directa WhatsApp',
    hoursNote: 'Martes – Domingo · 19:30 – 23:30 · Terraza con Vistas y Salón Íntimo',
  },
};

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onNavigate }) => {
  const t = HERO_COPY[lang];

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 sm:pb-24 pt-28 overflow-hidden bg-[#0A0A0A]">
      {/* Background Photography with Subtle Ken Burns Motion & Measured Scrim */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0.7 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <ResilientImage
          src={HERO_IMAGE}
          alt="Restaurante Carmesí Benalmádena Pueblo terrasse au crépuscule"
          priority
          className="w-full h-full object-cover object-[center_45%] opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.42) 42%, rgba(110,26,36,0.24) 72%, #0A0A0A 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 25% 65%, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.25) 65%)',
          }}
        />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-3xl">
          {/* Unboxed Editorial Kicker & Rating */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#C5A880] mb-5"
          >
            <span>{t.kicker}</span>
            <span aria-hidden="true" className="text-[#D4AF37]/50">
              ·
            </span>
            <span className="inline-flex items-center gap-1 text-[#D4AF37] tabular-nums">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              4.9 / 5
            </span>
          </motion.div>

          {/* Animated Word-by-Word Luxury Display Headline */}
          <h1
            className="font-serif font-normal text-[#F5F2EB] leading-[1.06] tracking-[-0.01em] mb-6 flex flex-wrap gap-x-[0.26em] gap-y-1"
            style={{
              fontSize: 'clamp(2.5rem, 5.2vw, 4.5rem)',
            }}
          >
            {t.headlineWords.map((word, idx) => (
              <span key={`${lang}-${idx}`} className="inline-block overflow-hidden py-1">
                <motion.span
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.18 + idx * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`inline-block ${
                    idx >= t.headlineWords.length - 2 ? 'italic text-[#D4AF37]' : ''
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Animated Gold Hairline Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
            className="w-24 h-[1px] bg-[#D4AF37]/70 mb-6"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#F5F2EB]/80 font-light leading-relaxed max-w-2xl mb-9"
          >
            {t.subtitle}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.74, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4"
          >
            <button
              type="button"
              onClick={() => onNavigate('reservations')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#D4AF37] text-[#0A0A0A] text-xs tracking-[0.16em] uppercase font-semibold hover:bg-[#C5A880] transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>{t.ctaForm}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('menu')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#141414]/85 backdrop-blur-md border border-[#D4AF37]/40 text-[#F5F2EB] text-xs tracking-[0.15em] uppercase font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>{t.ctaMenu}</span>
            </button>

            <a
              href={buildWhatsAppDirectUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#141414]/85 backdrop-blur-md border border-[#25D366]/50 text-[#F5F2EB] text-xs tracking-[0.15em] uppercase font-medium hover:border-[#25D366] hover:bg-[#25D366]/15 transition-colors whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>{t.ctaWhatsapp}</span>
            </a>
          </motion.div>

          {/* Subtle Bottom Service Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 pt-6 border-t border-[#F5F2EB]/12 flex flex-wrap items-center justify-between gap-4 text-xs tracking-[0.12em] uppercase text-[#F5F2EB]/60"
          >
            <span>{t.hoursNote}</span>
            <span className="text-[#C5A880]">Fine French Dining with Spanish Soul</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
