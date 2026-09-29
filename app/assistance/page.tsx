'use client';

import { useState, useRef, useEffect } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Clock,
  Check,
  X,
  Headphones,
  Zap,
  ShieldCheck,
  Users,
  LifeBuoy,
} from 'lucide-react';
import Link from 'next/link';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/assistance`;

// ---------------------------------------------------------------------------
// NOTIFICATION (Toast)
// ---------------------------------------------------------------------------
const Toast = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 z-50 max-w-md w-full animate-slide-in">
      <div
        className={`rounded-2xl p-6 shadow-2xl border-4 backdrop-blur-xl ${
          type === 'success' ? 'bg-[#FFFFFF] border-green-600' : 'bg-[#FFFFFF] border-[#0055A4]'
        }`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
              type === 'success' ? 'bg-green-600/20' : 'bg-[#0055A4]/20'
            }`}
          >
            {type === 'success' ? (
              <Check className="w-5 h-5 text-green-600" />
            ) : (
              <AlertCircle className="w-5 h-5 text-[#0055A4]" />
            )}
          </div>
          <div className="flex-1">
            <p className="text-[#0A1B33] font-black uppercase text-sm">{message}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer la notification"
            className="flex-shrink-0 text-[#0A1B33]/40 hover:text-[#0055A4] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// POPUP DE SUCCÈS
// ---------------------------------------------------------------------------
const SuccessPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in p-4">
      <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl text-center animate-scale-up">
        <div className="w-24 h-24 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-6">
          <div className="w-16 h-16 rounded-full bg-green-600/30 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-[#0A1B33] mb-3 uppercase tracking-tight">
          Message envoyé !
        </h3>

        <p className="text-[#0055A4] font-bold text-sm leading-relaxed mb-6">
          Merci d’avoir contacté notre équipe d’assistance. Nous vous répondrons dans les plus brefs délais.
        </p>

        <div className="bg-[#122A4D] rounded-2xl border border-white/5 p-5 mb-6 text-left">
          <p className="text-[#FFFFFF]/40 text-xs uppercase tracking-widest font-black mb-3">
            Que se passe-t-il ensuite ?
          </p>
          <ul className="space-y-2 text-sm text-[#FFFFFF]/80 font-bold uppercase tracking-wide">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFCD00] shrink-0" />
              Examen par un spécialiste IPTV
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFCD00] shrink-0" />
              Vérification de la demande ou de l’essai
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFCD00] shrink-0" />
              Réponse en quelques minutes via WhatsApp
            </li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="w-full py-4 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:bg-[#004A8F] transition-transform hover:scale-105 shadow-md cursor-pointer border border-[#0055A4]"
        >
          J’ai compris
        </button>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// PAGE PRINCIPALE
// ---------------------------------------------------------------------------
export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const encodedMsg = encodeURIComponent(
        `Bonjour,\n\nNom : ${formData.name}\nE-mail : ${formData.email}\nSujet : ${formData.subject}\nMessage : ${formData.message}`
      );
      window.open(`${whatsappBaseUrl}?text=${encodedMsg}`, '_blank');

      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setToast({ message: 'Votre message a bien été envoyé !', type: 'success' });
    } catch {
      setToast({ message: 'Échec de l’envoi. Veuillez réessayer via WhatsApp.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const startWhatsAppChat = () => {
    const defaultText = encodeURIComponent(
      `Bonjour, j’ai une question sur votre abonnement IPTV.`
    );
    window.open(`${whatsappBaseUrl}?text=${defaultText}`, '_blank');
  };

  // ----------------- JSON-LD -----------------
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${PAGE_URL}/#contact`,
        url: PAGE_URL,
        name: `Assistance abonnement IPTV`,
        description: `Contactez notre équipe d’assistance 24/7. WhatsApp, e-mail et chat en direct pour votre abonnement IPTV, son installation et sa facturation.`,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Assistance', item: PAGE_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Comment contacter l’assistance le plus rapidement possible ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Pour une assistance plus rapide, envoyez-nous un message directement sur WhatsApp. Notre équipe répond généralement en quelques minutes.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Proposez-vous une aide à l’installation ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. Notre équipe vous guide pas à pas dans l’installation de votre abonnement IPTV sur Smart TV, Firestick, Android et Apple TV, que ce soit manuellement ou par activation à distance sur WhatsApp.',
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je d’abord demander un essai gratuit ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolument. Demandez un essai IPTV gratuit de 24 heures via WhatsApp pour tester nos chaînes 4K sans risque avant de vous abonner.',
            },
          },
          {
            '@type': 'Question',
            name: 'Dans combien de temps serai-je installé ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Une fois votre formule confirmée et le paiement effectué, notre équipe vous installe en direct sur WhatsApp. La plupart des clients regardent leurs chaînes en moins de 10 minutes.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0A1B33] pt-32 pb-16 text-[#FFFFFF]">
      <script
        type="application/ld+json"
        id="support-page-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {showSuccessPopup && <SuccessPopup onClose={() => setShowSuccessPopup(false)} />}

      {/* HERO */}
      <section className="relative px-6 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(0,85,164,0.25),_transparent_50%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#122A4D] px-4 py-2 rounded-full mb-6 shadow-md border border-[#FFCD00]/40">
              <Mail className="w-4 h-4 text-[#FFCD00]" />
              <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
                Assistance 24/7 France 🇫🇷
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none">
              Contacter <span className="text-[#FFCD00]">notre assistance</span>
            </h1>

            <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
              Des questions sur nos chaînes IPTV, l’installation Smart TV ou le paiement ? Notre équipe d’assistance est disponible 24/7 via WhatsApp, e-mail et chat en direct.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FORMULAIRE + BARRE LATÉRALE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 md:p-8 shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-black text-[#0A1B33] uppercase tracking-tight mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-[#0055A4] font-bold text-sm mb-6">
                  Remplissez le formulaire ci-dessous et nous vous répondrons par WhatsApp ou e-mail, généralement en quelques minutes.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-black text-[#0A1B33] uppercase tracking-wide mb-2"
                    >
                      Nom complet <span className="text-[#0055A4]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A1B33]/40" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-black/[0.03] border-2 border-[#D6DCE3] rounded-xl text-[#0A1B33] font-bold placeholder-[#0A1B33]/40 focus:border-[#0055A4] transition-colors outline-none"
                        placeholder="Ex : Jean Dupont"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-black text-[#0A1B33] uppercase tracking-wide mb-2"
                    >
                      Adresse e-mail <span className="text-[#0055A4]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A1B33]/40" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-black/[0.03] border-2 border-[#D6DCE3] rounded-xl text-[#0A1B33] font-bold placeholder-[#0A1B33]/40 focus:border-[#0055A4] transition-colors outline-none"
                        placeholder="nom@exemple.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-black text-[#0A1B33] uppercase tracking-wide mb-2"
                    >
                      Sujet <span className="text-[#0055A4]">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A1B33]/40" />
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-10 py-3.5 bg-black/[0.03] border-2 border-[#D6DCE3] rounded-xl text-[#0A1B33] font-bold focus:border-[#0055A4] transition-colors outline-none appearance-none"
                      >
                        <option value="" className="bg-[#FFFFFF]">
                          Sélectionnez un sujet...
                        </option>
                        <option value="essai" className="bg-[#FFFFFF]">
                          Demande d’essai gratuit IPTV 24 heures
                        </option>
                        <option value="installation" className="bg-[#FFFFFF]">
                          Aide à l’installation & application
                        </option>
                        <option value="tarifs" className="bg-[#FFFFFF]">
                          Questions sur les formules et tarifs
                        </option>
                        <option value="technique" className="bg-[#FFFFFF]">
                          Assistance technique
                        </option>
                        <option value="paiement" className="bg-[#FFFFFF]">
                          Paiement (carte bancaire / PayPal / crypto / Apple Pay)
                        </option>
                        <option value="general" className="bg-[#FFFFFF]">
                          Question générale
                        </option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#0A1B33]/40">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M7 10l5 5 5-5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-black text-[#0A1B33] uppercase tracking-wide mb-2"
                    >
                      Message <span className="text-[#0055A4]">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3.5 bg-black/[0.03] border-2 border-[#D6DCE3] rounded-xl text-[#0A1B33] font-bold placeholder-[#0A1B33]/40 focus:border-[#0055A4] transition-colors outline-none resize-none"
                        placeholder="Décrivez votre question ou le type d’appareil concerné..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-xl bg-[#0055A4] text-[#FFFFFF] font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 border border-[#0055A4] ${
                      loading
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:bg-[#004A8F] hover:scale-[1.01] hover:shadow-xl cursor-pointer'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-[#FFFFFF]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Barre latérale */}
          <div className="lg:col-span-1">
            <FadeIn>
              <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
                <h3 className="text-xl font-black text-[#0A1B33] uppercase tracking-tight mb-6">
                  Coordonnées
                </h3>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#0055A4]" />
                  </div>
                  <div>
                    <p className="text-[#0A1B33]/50 text-xs uppercase tracking-widest font-black">E-mail</p>
                    <a
                      href={`mailto:${CONSTANTS.CONTACT.email}`}
                      className="text-[#0A1B33] hover:text-[#0055A4] transition-colors text-sm font-bold break-all"
                    >
                      {CONSTANTS.CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#0055A4]" />
                  </div>
                  <div>
                    <p className="text-[#0A1B33]/50 text-xs uppercase tracking-widest font-black">WhatsApp</p>
                    <a
                      href={whatsappBaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A1B33] hover:text-[#0055A4] transition-colors text-sm font-bold"
                    >
                      {CONSTANTS.CONTACT.phone || 'Discuter sur WhatsApp'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-[#0055A4]" />
                  </div>
                  <div>
                    <p className="text-[#0A1B33]/50 text-xs uppercase tracking-widest font-black">
                      Contact direct
                    </p>
                    <p className="text-[#0A1B33] text-sm font-bold">Disponible 24h/24 et 7j/7</p>
                    <button
                      onClick={startWhatsAppChat}
                      className="text-[#0055A4] text-xs font-black uppercase tracking-widest hover:text-[#0A1B33] transition-colors mt-1 cursor-pointer block"
                    >
                      Démarrer le chat WhatsApp →
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#0055A4]" />
                  </div>
                  <div>
                    <p className="text-[#0A1B33]/50 text-xs uppercase tracking-widest font-black">
                      Temps de réponse
                    </p>
                    <p className="text-[#0A1B33] text-sm font-bold">De 5 à 15 minutes</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="pt-6 border-t-2 border-black/5">
                  <p className="text-[#0A1B33]/50 text-xs uppercase tracking-widest font-black mb-4">
                    Service garanti
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <Headphones className="w-5 h-5 text-[#0055A4] mx-auto mb-1" />
                      <p className="text-[#0A1B33] text-[9px] uppercase font-black tracking-wider">
                        Aide 24/7
                      </p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <ShieldCheck className="w-5 h-5 text-[#0055A4] mx-auto mb-1" />
                      <p className="text-[#0A1B33] text-[9px] uppercase font-black tracking-wider">
                        Sécurisé
                      </p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <Zap className="w-5 h-5 text-[#0055A4] mx-auto mb-1" />
                      <p className="text-[#0A1B33] text-[9px] uppercase font-black tracking-wider">
                        Installation rapide
                      </p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <Users className="w-5 h-5 text-[#0055A4] mx-auto mb-1" />
                      <p className="text-[#0A1B33] text-[9px] uppercase font-black tracking-wider">
                        50 000+ clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BANNIÈRE DE CONFIANCE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        <FadeIn>
          <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center mx-auto mb-3">
                  <LifeBuoy className="w-6 h-6 text-[#0055A4]" />
                </div>
                <h4 className="text-[#0A1B33] font-black text-sm uppercase tracking-wide">
                  Assistance 24/7
                </h4>
                <p className="text-[#0055A4] text-xs font-bold mt-0.5">Toujours disponible</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-[#0055A4]" />
                </div>
                <h4 className="text-[#0A1B33] font-black text-sm uppercase tracking-wide">
                  Réponse rapide
                </h4>
                <p className="text-[#0055A4] text-xs font-bold mt-0.5">Directement sur WhatsApp</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-6 h-6 text-[#0055A4]" />
                </div>
                <h4 className="text-[#0A1B33] font-black text-sm uppercase tracking-wide">
                  Confidentialité garantie
                </h4>
                <p className="text-[#0055A4] text-xs font-bold mt-0.5">Connexion sécurisée</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0055A4]" />
                </div>
                <h4 className="text-[#0A1B33] font-black text-sm uppercase tracking-wide">
                  Meilleur service
                </h4>
                <p className="text-[#0055A4] text-xs font-bold mt-0.5">N°1 de l’abonnement IPTV en France</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 w-full">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight">
            Questions <span className="text-[#FFCD00]">fréquentes</span>
          </h2>
          <p className="text-[#FFFFFF]/70 font-bold text-base">
            Réponses rapides aux questions les plus courantes de l’assistance
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: 'Comment contacter l’assistance le plus rapidement possible ?',
              a: `Pour une assistance plus rapide, envoyez-nous directement un message sur WhatsApp. Notre équipe répond généralement en quelques minutes.`,
            },
            {
              q: 'Proposez-vous une aide à l’installation ?',
              a: 'Oui. Notre équipe vous guide pas à pas dans l’installation de votre abonnement IPTV sur Smart TV, Firestick, Android et Apple TV, que ce soit manuellement ou par activation à distance sur WhatsApp.',
            },
            {
              q: 'Puis-je d’abord demander un essai gratuit ?',
              a: 'Absolument. Demandez un essai IPTV gratuit de 24 heures via WhatsApp pour tester nos chaînes 4K sans risque avant de vous abonner.',
            },
            {
              q: 'Dans combien de temps serai-je installé ?',
              a: 'Une fois votre formule confirmée et le paiement effectué, notre équipe vous installe en direct sur WhatsApp. La plupart des clients regardent leurs chaînes en moins de 10 minutes.',
            },
          ].map((faq, idx) => (
            <FadeInItem
              key={idx}
              className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-2xl p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,205,0,0.25)]"
            >
              <h3 className="text-[#0A1B33] font-black text-base uppercase tracking-tight mb-2">
                {faq.q}
              </h3>
              <p className="text-[#0055A4] text-sm font-bold leading-relaxed">{faq.a}</p>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* CTA */}
        <FadeIn className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:bg-[#004A8F] hover:scale-105 transition-all shadow-lg border border-[#0055A4]"
          >
            Voir la FAQ complète
          </Link>
        </FadeIn>
      </section>

      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-up {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-up {
          animation: scale-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}