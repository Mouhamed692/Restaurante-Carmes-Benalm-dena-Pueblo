import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Language, PageId } from '../types';
import { buildWhatsAppDirectUrl, PHONE_DISPLAY } from '../data/carmesiData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterAndFloatingProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

const FOOTER_COPY: Record<
  Language,
  {
    whatsappLabel: string;
    legal: string;
    privacy: string;
    rights: string;
    legalTitle: string;
    legalBody: string;
    privacyTitle: string;
    privacyBody: string;
  }
> = {
  fr: {
    whatsappLabel: 'WhatsApp',
    legal: 'Mentions Légales',
    privacy: 'Politique de Confidentialité',
    rights: '© 2026 Restaurante Carmesí · Benalmádena Pueblo, Málaga. Tous droits réservés.',
    legalTitle: 'Mentions Légales',
    legalBody:
      'Restaurante Carmesí · Dirigé par Chef Ton Overbeek & Inge. Avenida del Chorrillo, 29639 Benalmádena Pueblo, Málaga, Espagne. Téléphone : +34 623 53 44 94.',
    privacyTitle: 'Politique de Confidentialité',
    privacyBody:
      'Les informations saisies dans le formulaire de réservation sont utilisées exclusivement pour préparer votre message WhatsApp à destination du Restaurante Carmesí. Aucune donnée n’est stockée sur des serveurs tiers.',
  },
  en: {
    whatsappLabel: 'WhatsApp',
    legal: 'Legal Notice',
    privacy: 'Privacy Policy',
    rights: '© 2026 Restaurante Carmesí · Benalmádena Pueblo, Málaga. All rights reserved.',
    legalTitle: 'Legal Notice',
    legalBody:
      'Restaurante Carmesí · Operated by Chef Ton Overbeek & Inge. Avenida del Chorrillo, 29639 Benalmádena Pueblo, Málaga, Spain. Phone: +34 623 53 44 94.',
    privacyTitle: 'Privacy Policy',
    privacyBody:
      'Information entered in the reservation form is used solely to format your direct WhatsApp booking message to Restaurante Carmesí. No personal data is stored on external servers.',
  },
  es: {
    whatsappLabel: 'WhatsApp',
    legal: 'Aviso Legal',
    privacy: 'Política de Privacidad',
    rights: '© 2026 Restaurante Carmesí · Benalmádena Pueblo, Málaga. Todos los derechos reservados.',
    legalTitle: 'Aviso Legal',
    legalBody:
      'Restaurante Carmesí · Dirigido por Chef Ton Overbeek e Inge. Avenida del Chorrillo, 29639 Benalmádena Pueblo, Málaga, España. Teléfono: +34 623 53 44 94.',
    privacyTitle: 'Política de Privacidad',
    privacyBody:
      'Los datos introducidos en el formulario se utilizan exclusivamente para generar su mensaje de reserva por WhatsApp dirigido a Restaurante Carmesí.',
  },
};

export const FooterAndFloating: React.FC<FooterAndFloatingProps> = ({ lang, onNavigate }) => {
  const [modalType, setModalType] = useState<'legal' | 'privacy' | null>(null);
  const t = FOOTER_COPY[lang];

  return (
    <>
      <footer className="bg-[#070707] border-t border-[#F5F2EB]/10 py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="font-serif text-lg tracking-[0.22em] uppercase text-[#F5F2EB] hover:text-[#D4AF37] transition-colors mb-1 cursor-pointer"
            >
              CARMESÍ
            </button>
            <p className="text-xs text-[#F5F2EB]/50 font-light">{t.rights}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs tracking-[0.12em] uppercase text-[#F5F2EB]/60">
            <a
              href="tel:+34623534494"
              className="hover:text-[#D4AF37] transition-colors tabular-nums"
            >
              {PHONE_DISPLAY}
            </a>
            <button
              type="button"
              onClick={() => setModalType('legal')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              {t.legal}
            </button>
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              {t.privacy}
            </button>
          </div>
        </div>
      </footer>

      {/* Permanent Bottom-Right WhatsApp Contact Button */}
      <a
        href={buildWhatsAppDirectUrl(lang)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Restaurante Carmesí sur WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#141414]/95 backdrop-blur-md border border-[#25D366]/70 hover:border-[#25D366] hover:bg-[#1E1E1E] text-[#F5F2EB] shadow-xl transition-all duration-200 group"
      >
        <WhatsAppIcon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
        <span className="text-xs tracking-[0.14em] uppercase font-medium whitespace-nowrap">
          {t.whatsappLabel}
        </span>
      </a>

      {/* Legal / Privacy Modal */}
      {modalType && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm flex items-center justify-center p-5"
          onClick={() => setModalType(null)}
        >
          <div
            className="bg-[#141414] border border-[#D4AF37]/30 max-w-lg w-full p-7 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalType(null)}
              aria-label="Close"
              className="absolute top-5 right-5 text-[#F5F2EB]/60 hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-2xl text-[#F5F2EB] mb-4">
              {modalType === 'legal' ? t.legalTitle : t.privacyTitle}
            </h3>
            <p className="text-sm text-[#F5F2EB]/75 font-light leading-relaxed">
              {modalType === 'legal' ? t.legalBody : t.privacyBody}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
