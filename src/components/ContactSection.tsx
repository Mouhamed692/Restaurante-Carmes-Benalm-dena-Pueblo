import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import {
  ADDRESS_FULL,
  buildWhatsAppQuestionUrl,
  PHONE_DISPLAY,
} from '../data/carmesiData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ContactSectionProps {
  lang: Language;
}

const CONTACT_COPY: Record<
  Language,
  {
    kicker: string;
    title: string;
    addressLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    hoursValue: string;
    whatsappBtn: string;
    directionsBtn: string;
    mapCaption: string;
  }
> = {
  fr: {
    kicker: 'Contact & Accès',
    title: 'Nous Trouver à Benalmádena Pueblo',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone & WhatsApp',
    hoursLabel: 'Horaires de Service',
    hoursValue: 'Mardi – Dimanche | 19h30 – 23h30 | Fermé le lundi',
    whatsappBtn: 'Nous contacter pour une question sur WhatsApp',
    directionsBtn: 'Itinéraire Google Maps',
    mapCaption: 'Avenida del Chorrillo · Village Blanc de Benalmádena Pueblo · Málaga',
  },
  en: {
    kicker: 'Contact & Location',
    title: 'Find Us in Benalmádena Pueblo',
    addressLabel: 'Address',
    phoneLabel: 'Phone & WhatsApp',
    hoursLabel: 'Service Hours',
    hoursValue: 'Tuesday – Sunday | 19:30 – 23:30 | Closed Mondays',
    whatsappBtn: 'Contact us with a question on WhatsApp',
    directionsBtn: 'Open in Google Maps',
    mapCaption: 'Avenida del Chorrillo · Whitewashed Village of Benalmádena Pueblo · Málaga',
  },
  es: {
    kicker: 'Contacto y Ubicación',
    title: 'Encuéntrenos en Benalmádena Pueblo',
    addressLabel: 'Dirección',
    phoneLabel: 'Teléfono y WhatsApp',
    hoursLabel: 'Horario de Servicio',
    hoursValue: 'Martes – Domingo | 19:30 – 23:30 | Cerrado los lunes',
    whatsappBtn: 'Contactar por WhatsApp para cualquier consulta',
    directionsBtn: 'Cómo llegar en Google Maps',
    mapCaption: 'Avenida del Chorrillo · Benalmádena Pueblo · Málaga',
  },
};

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = CONTACT_COPY[lang];
  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Avenida+del+Chorrillo+29639+Benalmadena+Pueblo+Malaga';

  return (
    <section id="acces" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#F5F2EB]/8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Contact Details & Direct WhatsApp */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-3">{t.kicker}</p>
            <h2
              className="font-serif text-3xl sm:text-4xl text-[#F5F2EB] leading-[1.14] mb-8"
              style={{ textWrap: 'balance' }}
            >
              {t.title}
            </h2>

            <div className="space-y-6 border-t border-[#F5F2EB]/10 pt-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs tracking-[0.14em] uppercase text-[#C5A880] mb-1">
                    {t.addressLabel}
                  </div>
                  <p className="text-sm sm:text-base text-[#F5F2EB]/85 font-light">
                    {ADDRESS_FULL}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs tracking-[0.14em] uppercase text-[#C5A880] mb-1">
                    {t.phoneLabel}
                  </div>
                  <a
                    href="tel:+34623534494"
                    className="text-base sm:text-lg font-serif text-[#F5F2EB] hover:text-[#D4AF37] transition-colors tabular-nums"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs tracking-[0.14em] uppercase text-[#C5A880] mb-1">
                    {t.hoursLabel}
                  </div>
                  <p className="text-sm text-[#F5F2EB]/85 font-light tabular-nums">
                    {t.hoursValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Question WhatsApp CTA */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={buildWhatsAppQuestionUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#141414] border border-[#25D366]/50 hover:border-[#25D366] hover:bg-[#25D366]/15 text-[#F5F2EB] text-xs tracking-[0.13em] uppercase font-medium transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>{t.whatsappBtn}</span>
              </a>
            </div>
          </div>

          {/* Right: Stylized Dark Architectural Map Card */}
          <div className="lg:col-span-6 bg-[#141414] border border-[#D4AF37]/25 p-6 sm:p-8 flex flex-col justify-between min-h-[360px] relative overflow-hidden">
            {/* Subtle Architectural Grid Lines */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />

            <div className="relative z-10 flex items-center justify-between text-xs tracking-[0.16em] uppercase text-[#C5A880]">
              <span>36.5956° N, 4.5724° W</span>
              <span>Costa del Sol · Málaga</span>
            </div>

            {/* Center Pin Marker */}
            <div className="relative z-10 my-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#6E1A24] border border-[#D4AF37] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EB] mb-1">
                Restaurante Carmesí
              </h3>
              <p className="text-xs tracking-[0.12em] uppercase text-[#C5A880] max-w-sm">
                {t.mapCaption}
              </p>
            </div>

            <div className="relative z-10 flex justify-center">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#0A0A0A] text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[#C5A880] transition-colors"
              >
                <span>{t.directionsBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
