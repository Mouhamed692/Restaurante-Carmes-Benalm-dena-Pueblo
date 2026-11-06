import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Clock, Users, AlertCircle, Sparkles } from 'lucide-react';
import { Language, ReservationFormData, SeatingPreference } from '../types';
import { buildWhatsAppReservationUrl } from '../data/carmesiData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ReservationSectionProps {
  lang: Language;
}

const TIME_SLOTS = ['19:30', '20:00', '20:30', '21:00', '21:30'];
const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8];

function getDefaultDinnerDate(): string {
  const now = new Date();
  if (now.getDay() === 1) {
    now.setDate(now.getDate() + 1);
  }
  return now.toISOString().split('T')[0];
}

function isMonday(dateStr: string): boolean {
  if (!dateStr) return false;
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.getDay() === 1;
}

const RES_COPY: Record<
  Language,
  {
    kicker: string;
    title: string;
    subtitle: string;
    conciergeTitle: string;
    conciergeBody: string;
    hoursLabel: string;
    hoursValue: string;
    previewLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    dateLabel: string;
    timeLabel: string;
    guestsLabel: string;
    guestSingular: string;
    guestPlural: string;
    seatingLabel: string;
    terrace: string;
    interior: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    mondayError: string;
    requiredError: string;
    confirmedTitle: string;
    confirmedDesc: string;
    openAgain: string;
  }
> = {
  fr: {
    kicker: 'Réservation & Conciergerie',
    title: 'Réservez Votre Table',
    subtitle:
      'Une attention personnalisée pour chaque convive. Confirmation directe avec Ton & Inge via WhatsApp.',
    conciergeTitle: 'L’Art de Recevoir',
    conciergeBody:
      'Notre salle et notre terrasse vue mer accueillent un nombre limité de tables chaque soir afin de préserver l’intimité et la précision du service.',
    hoursLabel: 'Service du Dîner',
    hoursValue: 'Mardi – Dimanche · 19h30 – 23h30 (Fermé le lundi)',
    previewLabel: 'Aperçu de votre demande',
    nameLabel: 'Nom et prénom',
    namePlaceholder: 'Sophie Laurent',
    phoneLabel: 'Téléphone / WhatsApp',
    phonePlaceholder: '+33 6 12 34 56 78',
    dateLabel: 'Date du dîner',
    timeLabel: 'Créneau horaire',
    guestsLabel: 'Convives',
    guestSingular: 'convive',
    guestPlural: 'convives',
    seatingLabel: 'Placement souhaité',
    terrace: 'Terrasse avec vue',
    interior: 'Salle intérieure intime',
    notesLabel: 'Allergies ou occasion spéciale',
    notesPlaceholder: 'Anniversaire, dîner romantique, allergie...',
    submitBtn: 'Envoyer ma demande via WhatsApp',
    mondayError: 'Le restaurant est fermé le lundi. Veuillez choisir un soir du mardi au dimanche.',
    requiredError: 'Veuillez renseigner votre nom et votre numéro de téléphone.',
    confirmedTitle: 'Votre demande est prête sur WhatsApp',
    confirmedDesc:
      'Si la fenêtre WhatsApp ne s’est pas ouverte automatiquement, cliquez ci-dessous :',
    openAgain: 'Ouvrir WhatsApp maintenant',
  },
  en: {
    kicker: 'Reservations & Concierge',
    title: 'Reserve Your Table',
    subtitle:
      'Personal attention for every guest. Direct confirmation with Ton & Inge via WhatsApp.',
    conciergeTitle: 'The Art of Hospitality',
    conciergeBody:
      'Our intimate salon and sea-view terrace host a limited number of tables each evening to preserve quiet elegance and attentive service.',
    hoursLabel: 'Dinner Service',
    hoursValue: 'Tuesday – Sunday · 19:30 – 23:30 (Closed Mondays)',
    previewLabel: 'Live Request Summary',
    nameLabel: 'Full Name',
    namePlaceholder: 'Claire Bennett',
    phoneLabel: 'Phone / WhatsApp',
    phonePlaceholder: '+44 7700 900077',
    dateLabel: 'Dinner Date',
    timeLabel: 'Seating Time',
    guestsLabel: 'Guests',
    guestSingular: 'guest',
    guestPlural: 'guests',
    seatingLabel: 'Preferred Seating',
    terrace: 'Terrace with sea view',
    interior: 'Intimate interior salon',
    notesLabel: 'Allergies or special occasion',
    notesPlaceholder: 'Anniversary, romantic dinner, dietary notes...',
    submitBtn: 'Send Request via WhatsApp',
    mondayError: 'We are closed on Mondays. Please select a date from Tuesday to Sunday.',
    requiredError: 'Please enter your full name and phone number.',
    confirmedTitle: 'Your reservation message is ready',
    confirmedDesc:
      'If WhatsApp did not open automatically, click below to send your request:',
    openAgain: 'Open WhatsApp Now',
  },
  es: {
    kicker: 'Reservas y Atención Directa',
    title: 'Reserve Su Mesa',
    subtitle:
      'Atención personalizada para cada comensal. Confirmación directa con Ton e Inge por WhatsApp.',
    conciergeTitle: 'El Arte de Recibir',
    conciergeBody:
      'Nuestro salón íntimo y terraza con vistas al mar acogen un número limitado de mesas cada noche para garantizar tranquilidad y excelencia.',
    hoursLabel: 'Servicio de Cenas',
    hoursValue: 'Martes – Domingo · 19:30 – 23:30 (Cerrado los lunes)',
    previewLabel: 'Resumen de su solicitud',
    nameLabel: 'Nombre y apellidos',
    namePlaceholder: 'Sofía Martínez',
    phoneLabel: 'Teléfono / WhatsApp',
    phonePlaceholder: '+34 612 34 56 78',
    dateLabel: 'Fecha de la cena',
    timeLabel: 'Hora de llegada',
    guestsLabel: 'Comensales',
    guestSingular: 'comensal',
    guestPlural: 'comensales',
    seatingLabel: 'Ubicación deseada',
    terrace: 'Terraza con vistas',
    interior: 'Salón interior íntimo',
    notesLabel: 'Alergias u ocasión especial',
    notesPlaceholder: 'Aniversario, cena romántica, alergias...',
    submitBtn: 'Enviar mi solicitud por WhatsApp',
    mondayError: 'Cerramos los lunes. Por favor, seleccione una fecha de martes a domingo.',
    requiredError: 'Por favor, introduzca su nombre y número de teléfono.',
    confirmedTitle: 'Su solicitud está lista en WhatsApp',
    confirmedDesc:
      'Si WhatsApp no se abrió automáticamente, pulse abajo para enviar su reserva:',
    openAgain: 'Abrir WhatsApp ahora',
  },
};

export const ReservationSection: React.FC<ReservationSectionProps> = ({ lang }) => {
  const t = RES_COPY[lang];

  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    phone: '',
    date: getDefaultDinnerDate(),
    time: '20:30',
    guests: 2,
    seating: 'terrace',
    notes: '',
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);

  const mondaySelected = useMemo(() => isMonday(formData.date), [formData.date]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg(t.requiredError);
      return;
    }

    if (mondaySelected) {
      setErrorMsg(t.mondayError);
      return;
    }

    const whatsappUrl = buildWhatsAppReservationUrl(formData, lang);
    setGeneratedUrl(whatsappUrl);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="reservations"
      className="py-28 sm:py-32 bg-[#0A0A0A] border-t border-[#F5F2EB]/8 relative overflow-hidden"
    >
      {/* Subtle Carmesí ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[420px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #6E1A24 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-3">{t.kicker}</p>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#F5F2EB] leading-[1.12] mb-4"
            style={{ textWrap: 'balance' }}
          >
            {t.title}
          </h2>
          <p className="text-[#F5F2EB]/70 text-base font-light leading-relaxed">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sleek Concierge Card & Live Summary */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#121011] border border-[#D4AF37]/25 p-8 sm:p-10 space-y-8"
          >
            <div>
              <div className="w-8 h-[1px] bg-[#D4AF37] mb-5" />
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EB] mb-3">
                {t.conciergeTitle}
              </h3>
              <p className="text-sm text-[#F5F2EB]/70 font-light leading-relaxed">
                {t.conciergeBody}
              </p>
            </div>

            <div className="pt-6 border-t border-[#F5F2EB]/10">
              <div className="text-[11px] tracking-[0.16em] uppercase text-[#C5A880] mb-1.5">
                {t.hoursLabel}
              </div>
              <p className="text-sm text-[#F5F2EB] font-light tabular-nums">{t.hoursValue}</p>
            </div>

            {/* Live Invitation Preview */}
            <div className="pt-6 border-t border-[#F5F2EB]/10">
              <div className="flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-[#D4AF37] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.previewLabel}</span>
              </div>
              <div className="p-4 bg-[#0A0A0A]/80 border border-[#F5F2EB]/8 text-xs text-[#F5F2EB]/80 font-light leading-relaxed space-y-1.5 tabular-nums">
                <div>
                  <span className="text-[#C5A880]">{t.dateLabel}:</span> {formData.date} ·{' '}
                  {formData.time}
                </div>
                <div>
                  <span className="text-[#C5A880]">{t.guestsLabel}:</span> {formData.guests}{' '}
                  {formData.guests === 1 ? t.guestSingular : t.guestPlural}
                </div>
                <div>
                  <span className="text-[#C5A880]">{t.seatingLabel}:</span>{' '}
                  {formData.seating === 'terrace' ? t.terrace : t.interior}
                </div>
                {formData.fullName && (
                  <div>
                    <span className="text-[#C5A880]">{t.nameLabel}:</span> {formData.fullName}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Ultra-Sleek Underline Reservation Form */}
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-7 bg-[#121011]/60 border border-[#F5F2EB]/10 p-7 sm:p-10 space-y-8"
          >
            {/* Row 1: Name & Phone with Minimalist Gold Underline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="res-name"
                  className="block text-[11px] tracking-[0.16em] uppercase text-[#C5A880] mb-2"
                >
                  {t.nameLabel} *
                </label>
                <input
                  id="res-name"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={t.namePlaceholder}
                  className="w-full py-3 bg-transparent border-b border-[#D4AF37]/30 text-[#F5F2EB] placeholder-[#F5F2EB]/30 text-base font-light focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="res-phone"
                  className="block text-[11px] tracking-[0.16em] uppercase text-[#C5A880] mb-2"
                >
                  {t.phoneLabel} *
                </label>
                <input
                  id="res-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t.phonePlaceholder}
                  className="w-full py-3 bg-transparent border-b border-[#D4AF37]/30 text-[#F5F2EB] placeholder-[#F5F2EB]/30 text-base font-light tabular-nums focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Date & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="res-date"
                  className="flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase text-[#C5A880] mb-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{t.dateLabel} *</span>
                </label>
                <input
                  id="res-date"
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full py-3 bg-transparent border-b border-[#D4AF37]/30 text-[#F5F2EB] text-base font-light tabular-nums focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="res-guests"
                  className="flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase text-[#C5A880] mb-2"
                >
                  <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{t.guestsLabel} *</span>
                </label>
                <select
                  id="res-guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                  className="w-full py-3 bg-[#121011] border-b border-[#D4AF37]/30 text-[#F5F2EB] text-base font-light tabular-nums focus:outline-none focus:border-[#D4AF37] transition-colors"
                >
                  {GUEST_OPTIONS.map((num) => (
                    <option key={num} value={num} className="bg-[#141414] text-[#F5F2EB]">
                      {num} {num === 1 ? t.guestSingular : t.guestPlural}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Interactive Time Slot Selector */}
            <div>
              <span className="flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase text-[#C5A880] mb-3">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.timeLabel} *</span>
              </span>
              <div className="grid grid-cols-5 gap-2">
                {TIME_SLOTS.map((slot) => {
                  const selected = formData.time === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, time: slot })}
                      className={`py-2.5 text-xs tracking-[0.1em] tabular-nums border transition-all cursor-pointer ${
                        selected
                          ? 'bg-[#6E1A24] border-[#D4AF37] text-[#F5F2EB] font-medium'
                          : 'bg-transparent border-[#F5F2EB]/15 text-[#F5F2EB]/65 hover:border-[#D4AF37]/40 hover:text-[#F5F2EB]'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 4: Seating Preference */}
            <div>
              <span className="block text-[11px] tracking-[0.16em] uppercase text-[#C5A880] mb-3">
                {t.seatingLabel} *
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(['terrace', 'interior'] as SeatingPreference[]).map((option) => {
                  const selected = formData.seating === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, seating: option })}
                      className={`px-5 py-3.5 text-left text-xs tracking-[0.12em] uppercase border transition-all cursor-pointer flex items-center justify-between ${
                        selected
                          ? 'bg-[#6E1A24] border-[#D4AF37] text-[#F5F2EB] font-medium'
                          : 'bg-transparent border-[#F5F2EB]/15 text-[#F5F2EB]/70 hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <span>{option === 'terrace' ? t.terrace : t.interior}</span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          selected ? 'bg-[#D4AF37]' : 'bg-[#F5F2EB]/20'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 5: Notes */}
            <div>
              <label
                htmlFor="res-notes"
                className="block text-[11px] tracking-[0.16em] uppercase text-[#C5A880] mb-2"
              >
                {t.notesLabel}
              </label>
              <input
                id="res-notes"
                type="text"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder={t.notesPlaceholder}
                className="w-full py-3 bg-transparent border-b border-[#D4AF37]/30 text-[#F5F2EB] placeholder-[#F5F2EB]/30 text-sm font-light focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>

            {/* Monday Warning or Validation Error */}
            {(mondaySelected || errorMsg) && (
              <div
                role="alert"
                className="p-4 bg-[#6E1A24]/30 border border-[#D4AF37]/40 flex items-center gap-3 text-xs text-[#F5F2EB]"
              >
                <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{mondaySelected ? t.mondayError : errorMsg}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#D4AF37] hover:bg-[#C5A880] text-[#0A0A0A] text-xs tracking-[0.18em] uppercase font-semibold transition-colors flex items-center justify-center gap-3 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#0A0A0A]" />
              <span>{t.submitBtn}</span>
            </button>

            {/* Confirmation & Fallback Direct Link */}
            {generatedUrl && (
              <div className="p-5 bg-[#0A0A0A] border border-[#25D366]/40 space-y-3">
                <div className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#25D366] font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t.confirmedTitle}</span>
                </div>
                <p className="text-xs text-[#F5F2EB]/75 leading-relaxed">{t.confirmedDesc}</p>
                <a
                  href={generatedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-[#0A0A0A] text-xs tracking-[0.14em] uppercase font-semibold hover:opacity-90 transition-opacity"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>{t.openAgain}</span>
                </a>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};
