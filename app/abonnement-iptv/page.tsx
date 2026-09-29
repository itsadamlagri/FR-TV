'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import {
  PlayCircle,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Medal,
  Trophy,
  MessageCircle,
  Tv,
  Film,
  Sparkles,
  ChevronDown,
  KeyRound,
  CreditCard,
  MonitorSmartphone,
  AlertCircle,
  Wifi,
  Link2,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const PricingSection = dynamic(() => import('../components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#0055A4] border-t-transparent" />
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('../components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const MovieSlider = dynamic(() => import('../components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#122A4D] rounded-2xl animate-pulse" />
      ))}
    </div>
  ),
});

const GlobalServerMap = dynamic(() => import('../components/GlobalServerMap'), {
  loading: () => <div className="h-[400px] bg-[#122A4D] rounded-3xl animate-pulse max-w-7xl mx-auto" />,
});

// ---------------------------------------------------------------------------
// ACCORDÉON FAQ
// ---------------------------------------------------------------------------
function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full text-left bg-[#FFFFFF] border-4 ${
        isOpen ? 'border-[#FFCD00]' : 'border-[#D6DCE3]'
      } rounded-2xl p-6 hover:border-[#0055A4]/60 transition-all duration-300 group cursor-pointer`}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center gap-4">
        <h3
          className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${
            isOpen ? 'text-[#0055A4]' : 'text-[#0A1B33] group-hover:text-[#0055A4]'
          } flex items-center gap-3`}
        >
          <span className={`${isOpen ? 'text-[#0055A4]' : 'text-[#0A1B33]/30'} font-black text-2xl`}>
            Q.
          </span>
          {q}
        </h3>
        <ChevronDown
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#0055A4]' : 'text-[#0A1B33]/30 group-hover:text-[#0055A4]/50'
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[#0055A4] font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#0055A4] ml-2 py-2">
          {a}
        </p>
      </div>
    </button>
  );
}

export default function AbonnementIPTVPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0A1B33] text-[#FFFFFF] overflow-hidden">

      {/* ==========================================================
          HERO — Abonnement IPTV
      ========================================================== */}
      <section className="relative px-4 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#05101F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="Abonnement IPTV en France - plus de 36 000 chaînes en direct en 4K"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center brightness-[0.22]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05101F]/90 via-[#0A1B33]/70 to-[#0A1B33]/95" />
        </div>

        <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto w-full">
          <div className="inline-flex items-center gap-2 bg-[#122A4D]/80 border border-[#0055A4]/60 px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <Medal className="w-4 h-4 text-[#FFCD00]" />
            <span className="text-[#FFFFFF] font-extrabold text-xs uppercase tracking-widest flex items-center gap-2">
              Service IPTV de confiance en France 🇫🇷
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#FFFFFF] mb-6 leading-none break-words">
            ABONNEMENT IPTV <br />
            <span className="text-[#FFCD00]">4K EN FRANCE</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Obtenez le meilleur abonnement IPTV en France avec plus de 36 000 chaînes en direct, 120 000 films et séries en 4K Ultra HD. Compatible Firestick, Smart TV, Android, Apple TV et tous vos appareils. Essai gratuit de 24 heures, installation guidée sur WhatsApp, tarifs en euros (€), sans engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link
              href="/tarifs"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-sm hover:bg-[#004A8F] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#0055A4]/40"
            >
              Choisir mon abonnement
            </Link>
            <Link
              href="/essai-gratuit"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#EF4135] text-[#FFFFFF] font-black text-sm hover:bg-[#D63528] transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-[#EF4135]/40"
            >
              <PlayCircle className="w-5 h-5 text-[#FFFFFF] shrink-0" /> Essai gratuit
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#FFFFFF] font-bold uppercase tracking-widest bg-[#122A4D]/70 backdrop-blur-md px-8 py-4 rounded-3xl border border-[#1E3A5F] shadow-2xl">
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#FFCD00]" /> Activation instantanée
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0055A4]" /> Serveurs anti-freeze
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FFCD00]" /> 99,9 % de disponibilité
            </span>
          </div>
        </FadeIn>
      </section>

      {/* ==========================================================
          CE QUE VOTRE ABONNEMENT DÉBLOQUE — 4 CARTES
      ========================================================== */}
      <section className="py-28 bg-[#EEEEEE] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0A1B33_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/25 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#0055A4]" />
              <span className="text-[#0055A4] font-black text-xs uppercase tracking-widest">
                Ce que votre abonnement IPTV débloque
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1B33] uppercase tracking-tight leading-tight mb-6">
              UN SEUL ABONNEMENT IPTV, <span className="text-[#0055A4]">TOUT INCLUS</span>
            </h2>
            <p className="text-[#0055A4] font-semibold text-base md:text-lg leading-relaxed">
              Chaque abonnement IPTV inclut l’intégralité du service de streaming sur tous vos appareils. Voici ce que vous obtenez.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tv,
                title: '36 000+ chaînes en direct',
                desc: 'Toutes les chaînes françaises plus les chaînes internationales du Royaume-Uni, du Canada, de Belgique, de Suisse, d’Europe et du Maghreb.',
              },
              {
                icon: Film,
                title: '120 000+ films et séries',
                desc: 'Coffrets complets et dernières sorties cinéma. De nouveaux titres arrivent chaque jour dans la bibliothèque à la demande.',
              },
              {
                icon: Trophy,
                title: 'Sport en direct et PPV',
                desc: 'Ligue 1, Ligue des Champions, Premier League, NBA, Formule 1, UFC, Top 14, Roland-Garros, Tour de France et tous les PPV inclus sans frais supplémentaires.',
              },
              {
                icon: MonitorSmartphone,
                title: 'Tous les appareils, tous les écrans',
                desc: 'Firestick, Smart TV, Apple TV, Android, iPhone, iPad, PC, Mac. Votre abonnement IPTV fonctionne partout.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-[#FFFFFF] text-[#0A1B33] rounded-3xl p-6 md:p-7 border-2 border-[#D6DCE3] hover:border-[#FFCD00] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,205,0,0.25)] transition-all duration-500 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0055A4] flex items-center justify-center mb-5 shadow-lg">
                    <Icon className="w-7 h-7 text-[#FFCD00]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#0055A4] text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>

          <FadeIn className="text-center mt-14">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Link
                href="/tarifs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-sm uppercase tracking-widest shadow-lg hover:bg-[#004A8F] hover:scale-105 transition-all border border-[#0055A4]"
              >
                Voir les formules d’abonnement
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/assistance"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0A1B33] text-[#FFFFFF] font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border-2 border-[#FFCD00]"
              >
                <MessageCircle className="w-5 h-5" />
                Poser une question
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==========================================================
          SECTION FIRESTICK
      ========================================================== */}
      <section className="py-24 bg-[#0A1B33] w-full relative overflow-hidden border-t border-[#1E3A5F]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0055A4]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche — copy */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-[#122A4D] border border-[#0055A4]/50 px-4 py-2 rounded-full mb-6">
                <MonitorSmartphone className="w-4 h-4 text-[#FFCD00]" />
                <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
                  Installation Firestick
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tight leading-tight mb-6">
                FIRESTICK — <span className="text-[#FFCD00]">L’INSTALLATION LA PLUS SIMPLE</span> EN FRANCE
              </h2>

              <p className="text-[#FFFFFF]/75 font-medium text-base md:text-lg leading-relaxed mb-6">
                Amazon Firestick est l’appareil n°1 pour regarder votre abonnement IPTV en France. L’installation prend moins de 5 minutes avec IPTV Smarters Pro ou IBO Player Pro installé directement sur votre Fire TV Stick 4K, 4K Max ou Fire TV Cube.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Compatible Fire TV Stick Lite, 4K, 4K Max et Fire TV Cube',
                  'Installez IPTV Smarters Pro ou IBO Player Pro en quelques minutes',
                  'Envoyez votre Device Key au support — activation à distance',
                  'La liste complète des 36 000+ chaînes se charge automatiquement',
                  'Flux sportifs en 60 FPS sans mise en mémoire tampon',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FFCD00] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/installation"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#004A8F] transition-all shadow-lg border border-[#0055A4]"
                >
                  Guide Firestick <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/assistance"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#122A4D] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#0A1B33] transition-all border border-[#FFCD00]/40"
                >
                  <MessageCircle className="w-4 h-4" /> Aide Firestick
                </Link>
              </div>
            </FadeIn>

            {/* Colonne droite — timeline 4 étapes */}
            <FadeIn>
              <div className="space-y-4">
                {[
                  {
                    n: '01',
                    title: 'Activer les sources inconnues',
                    desc: 'Paramètres Fire TV → My Fire TV → Options pour développeurs → Activer les applications de sources inconnues.',
                  },
                  {
                    n: '02',
                    title: 'Installer l’application Downloader',
                    desc: 'Recherchez « Downloader » dans l’Amazon App Store et installez-le en 30 secondes.',
                  },
                  {
                    n: '03',
                    title: 'Récupérer l’APK du lecteur',
                    desc: 'Nous vous envoyons le lien direct vers IPTV Smarters Pro ou IBO Player Pro sur WhatsApp.',
                  },
                  {
                    n: '04',
                    title: 'Activer et regarder',
                    desc: 'Envoyez-nous votre Device Key et nous activons votre abonnement IPTV à distance en moins de 60 secondes.',
                  },
                ].map((step) => (
                  <div
                    key={step.n}
                    className="flex items-start gap-4 bg-[#FFFFFF] border-2 border-[#0055A4]/30 rounded-2xl p-5 hover:border-[#FFCD00] transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0055A4] flex items-center justify-center shrink-0 border border-[#FFCD00]/40">
                      <span className="text-[#FFCD00] font-black text-base">{step.n}</span>
                    </div>
                    <div>
                      <h3 className="font-black text-[#0A1B33] text-sm md:text-base uppercase tracking-tight mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[#0055A4] text-xs md:text-sm font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>




      {/* ==========================================================
          SECTION IPTV SMARTERS PRO — équivalent FR de Roku
      ========================================================== */}
      <section className="py-24 bg-[#EEEEEE] w-full relative overflow-hidden border-t border-[#0A1B33]/10">
        <div className="absolute inset-0 bg-[radial-gradient(#0A1B33_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/30 px-4 py-2 rounded-full mb-5">
              <AlertCircle className="w-4 h-4 text-[#0055A4]" />
              <span className="text-[#0055A4] font-black text-xs uppercase tracking-widest">
                Guide des lecteurs IPTV
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1B33] uppercase tracking-tight leading-tight mb-5">
              IPTV SMARTERS PRO — <span className="text-[#0055A4]">LA VÉRITÉ SUR L’INSTALLATION</span>
            </h2>
            <p className="text-[#0055A4] font-semibold text-base md:text-lg leading-relaxed">
              IPTV Smarters Pro est le lecteur IPTV le plus stable en France. Il prend en charge tous les appareils, et trois méthodes d’installation garanties fonctionnent.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Link2,
                title: 'Méthode 1 — Installation directe',
                desc: 'Installez IPTV Smarters Pro depuis l’App Store (iOS/tvOS) ou le Google Play Store (Android). Fonctionne sur tous les appareils modernes. Idéal pour une utilisation quotidienne.',
              },
              {
                icon: Wifi,
                title: 'Méthode 2 — Sideload sur Firestick',
                desc: 'Utilisez l’application Downloader pour installer IPTV Smarters Pro sur Firestick 4K, 4K Max ou Fire TV Cube. Idéal pour un streaming sportif en 60 FPS.',
              },
              {
                icon: MonitorSmartphone,
                title: 'Méthode 3 — Activation à distance',
                desc: 'Envoyez-nous votre Device Key sur WhatsApp. Nous lions votre abonnement IPTV à votre lecteur en moins de 60 secondes. Zéro saisie, zéro erreur.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-[#FFFFFF] border-2 border-[#D6DCE3] rounded-3xl p-6 md:p-7 hover:border-[#0055A4] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,85,164,0.2)] transition-all duration-500 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0055A4] flex items-center justify-center mb-5 shadow-lg">
                    <Icon className="w-7 h-7 text-[#FFCD00]" />
                  </div>
                  <h3 className="text-lg font-black text-[#0A1B33] uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#0055A4] text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>

          <FadeIn className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-3 mx-auto">
              <a
                href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  `Bonjour ! Je souhaite installer IPTV Smarters Pro. Pouvez-vous m’aider à choisir la meilleure méthode ?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#004A8F] transition-all shadow-lg border border-[#0055A4]"
              >
                <MessageCircle className="w-4 h-4" /> Aide sur WhatsApp
              </a>
              <Link
                href="/installation"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0A1B33] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#122A4D] transition-all border-2 border-[#FFCD00]"
              >
                Guide complet <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>



      {/* SECTION TARIFICATION */}
      <div className="min-h-[600px] bg-[#0A1B33]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>


      {/* ==========================================================
          3 ÉTAPES POUR DÉMARRER
      ========================================================== */}
      <section className="py-24 bg-[#0A1B33] w-full relative overflow-hidden border-t border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-[#122A4D] border border-[#0055A4]/50 px-4 py-2 rounded-full mb-6 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFCD00] animate-pulse" />
                <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
                  Installation de votre abonnement IPTV
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] tracking-tight uppercase leading-[1.05]">
                COMMENT DÉMARRER VOTRE <br className="hidden sm:block" />
                <span className="text-[#FFCD00] relative inline-block mt-1">
                  ABONNEMENT IPTV
                  <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#FFCD00]/60 to-transparent rounded-full" />
                </span>
              </h2>

              <p className="text-[#FFFFFF]/75 text-base sm:text-lg mt-6 font-semibold max-w-2xl leading-relaxed">
                Trois étapes simples et vous regardez vos chaînes. Nous gérons toute la partie technique sur WhatsApp.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                n: '01',
                icon: CreditCard,
                badge: 'Étape 1',
                title: 'Choisissez votre formule',
                desc: 'Choisissez le nombre d’écrans dont vous avez besoin et optez pour un abonnement IPTV de 3, 6 ou 12 mois. Tous les tarifs sont en euros (€) sans engagement.',
                bullets: ['1, 2 ou 3 écrans', '3, 6 ou 12 mois', 'Carte, PayPal, crypto, Apple Pay'],
                footer: 'Sélection simple',
              },
              {
                n: '02',
                icon: KeyRound,
                badge: 'Étape 2',
                title: 'Recevez vos identifiants',
                desc: 'Écrivez-nous sur WhatsApp et nous vous envoyons vos identifiants dans le chat. Vous recevez une URL serveur, un nom d’utilisateur et un mot de passe.',
                bullets: ['Identifiants instantanés sur WhatsApp', 'Format Xtream Codes API', 'Assistance en direct'],
                footer: 'Livraison instantanée',
              },
              {
                n: '03',
                icon: PlayCircle,
                badge: 'Étape 3',
                title: 'Connectez-vous et regardez',
                desc: 'Installez IPTV Smarters Pro, TiviMate ou IBO Player Pro sur Firestick, Smart TV ou mobile. Collez vos identifiants et vos chaînes se chargent automatiquement.',
                bullets: ['Compatible avec les lecteurs populaires', 'Chargement automatique des chaînes', 'Essai gratuit avant paiement'],
                footer: 'Prêt à regarder',
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <FadeInItem
                  key={step.n}
                  className="group relative z-10 flex flex-col justify-between bg-[#FFFFFF] text-[#0A1B33] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#0055A4] shadow-[0_15px_35px_rgba(0,85,164,0.2)] hover:border-[#FFCD00] hover:shadow-[0_25px_50px_rgba(255,205,0,0.25)] hover:-translate-y-2.5 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8 relative">
                      <div className="w-16 h-16 rounded-2xl bg-[#0055A4] shadow-lg shadow-[#0055A4]/40 border border-[#FFCD00] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#FFCD00]" />
                      </div>
                      <span className="text-5xl font-black text-[#FFFFFF] bg-[#0055A4] px-4 py-1 rounded-2xl shadow-md tracking-tight">
                        {step.n}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FFFFFF] bg-[#EF4135] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                      {step.badge}
                    </div>

                    <h3 className="text-2xl font-black mb-3 uppercase tracking-tight group-hover:text-[#0055A4] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-[#0055A4] text-sm font-medium leading-relaxed mb-6">
                      {step.desc}
                    </p>

                    <ul className="text-xs font-bold text-[#0055A4] space-y-2.5 mb-8">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 border-t border-[#D6DCE3] flex items-center justify-between mt-auto">
                    <span className="text-xs font-black uppercase tracking-wider group-hover:text-[#0055A4] transition-colors">
                      {step.footer}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#0055A4] text-[#FFFFFF] flex items-center justify-center shadow-md group-hover:bg-[#FFCD00] group-hover:text-[#0A1B33] transition-all duration-300">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* PARTNER SLIDER */}
      <div className="min-h-[128px] bg-[#0A1B33]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>



      {/* SLIDER DE FILMS */}
      <section id="channels" className="pt-24 bg-[#0A1B33] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-[#1E3A5F]">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tight leading-none">
              CHAÎNES ET FILMS SUR <span className="text-[#FFCD00]">VOTRE ABONNEMENT IPTV</span>
            </h2>
            <p className="text-[#FFFFFF]/70 font-medium text-lg">
              Chaque abonnement IPTV débloque des milliers de chaînes de télévision en direct ainsi que plus de 120 000 films et séries dans la bibliothèque à la demande.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#122A4D] rounded-2xl" />
            ))}
          </div>
        )}
      </section>

      {/* CARTE MONDIALE DES SERVEURS */}
      <div className="min-h-[400px] bg-[#0E2444]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* FAQ */}
      <section className="py-24 bg-[#0A1B33] relative overflow-hidden border-t border-[#1E3A5F]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0055A4]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#122A4D] border border-[#0055A4]/50 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#FFCD00]" />
              <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
                FAQ abonnement IPTV
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tight leading-tight">
              VOS QUESTIONS SUR <span className="text-[#FFCD00]">L’ABONNEMENT IPTV</span>
            </h2>
            <p className="text-[#FFFFFF]/70 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Les questions les plus courantes sur les abonnements IPTV, le service IPTV, l’installation Firestick et IPTV Smarters Pro.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4">
            {[
              {
                q: 'Combien coûte un abonnement IPTV en France ?',
                a: 'Nos formules d’abonnement IPTV démarrent à seulement 29 € pour 3 mois sur 1 écran. La formule 6 mois est à 39 € et la formule VIP 12 mois à 55 € — soit jusqu’à 50 % d’économie par rapport aux formules courtes. Des formules multi-écrans pour 2 ou 3 appareils à la maison sont également disponibles à partir de 75 €.',
              },
              {
                q: 'Que comprend un abonnement IPTV ?',
                a: 'Chaque abonnement IPTV inclut plus de 36 000 chaînes en direct, 120 000 films et séries, l’intégralité du sport en direct (Ligue 1, Ligue des Champions, Premier League, NBA, Formule 1, UFC, PPV de boxe, beIN Sports, RMC Sport, Canal+ Sport, Eurosport), un guide EPG sur 7 jours et une assistance WhatsApp 24/7. Aucun frais caché, aucun engagement.',
              },
              {
                q: 'L’abonnement IPTV fonctionne-t-il sur Firestick ?',
                a: 'Oui — Firestick est l’appareil n°1 pour installer un abonnement IPTV en France. Vous installez IPTV Smarters Pro ou IBO Player Pro sur votre Fire TV Stick 4K, 4K Max, Lite ou Fire TV Cube en moins de 5 minutes. Envoyez-nous votre Device Key et nous activons votre abonnement IPTV à distance.',
              },
              {
                q: 'L’abonnement IPTV fonctionne-t-il sur Smart TV ?',
                a: 'Oui. IPTV Smarters Pro fonctionne nativement sur Samsung Tizen (2017+), LG webOS (2018+), Android TV et Google TV. Aucun matériel supplémentaire requis. Notre équipe vous guide pas à pas sur WhatsApp pour l’installation et l’activation.',
              },
              {
                q: 'Quel lecteur IPTV dois-je utiliser ?',
                a: 'Nous recommandons IPTV Smarters Pro comme lecteur IPTV principal pour Firestick, Smart TV, Android et iOS. IBO Player Pro et TiviMate sont également entièrement pris en charge comme alternatives. Les trois chargent automatiquement votre liste de chaînes, votre EPG et vos favoris une fois vos identifiants saisis.',
              },
              {
                q: 'Y a-t-il un essai gratuit avant de payer un abonnement IPTV ?',
                a: 'Oui. Écrivez-nous sur WhatsApp et nous vous configurons un essai gratuit de 24 heures de l’abonnement IPTV. Testez la qualité d’image 4K, vérifiez la programmation sportive et les films, et assurez-vous que tout fonctionne parfaitement sur votre appareil et votre connexion Internet avant de vous engager sur une formule payante.',
              },
              {
                q: 'Puis-je utiliser mon abonnement IPTV sur plusieurs appareils en même temps ?',
                a: 'Oui. Vous pouvez installer le service IPTV sur un nombre illimité d’appareils, mais le nombre de flux simultanés dépend de votre formule. Choisissez 1, 2 ou 3 écrans lors de la commande afin que votre foyer puisse regarder des contenus différents dans différentes pièces en même temps.',
              },
              {
                q: 'Ai-je besoin d’un VPN pour un abonnement IPTV en France ?',
                a: 'Aucun VPN n’est requis. Notre abonnement IPTV fonctionne sur des serveurs optimisés pour la France et l’Europe, offrant un streaming fluide et sans coupure sur votre connexion domestique. Si votre fournisseur d’accès Internet applique un bridage pendant les heures de pointe, un VPN est entièrement compatible et n’affectera pas la qualité de lecture.',
              },
            ].map((faq, i) => (
              <FadeInItem key={i}>
                <FAQItem q={faq.q} a={faq.a} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#EEEEEE] w-full">
        <div className="absolute inset-0 bg-[radial-gradient(#0A1B33_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border-2 border-[#0055A4]/20 bg-[#FFFFFF] shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0055A4]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFCD00]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="h-2 w-full bg-gradient-to-r from-[#0055A4] via-[#FFCD00] to-[#EF4135]" />

            <FadeIn className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0055A4]/30 bg-[#0055A4]/10 px-4 py-2 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-[#0055A4]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#0055A4] flex items-center gap-1.5">
                  Abonnement IPTV en France 🇫🇷
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#0A1B33] leading-[1.05] mb-6">
                DÉMARREZ VOTRE <br />
                <span className="text-[#0055A4]">ABONNEMENT IPTV AUJOURD’HUI</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#0055A4]">
                Choisissez votre formule, écrivez-nous sur WhatsApp et nous vous installons sur Firestick, Smart TV, Apple TV ou n’importe quel appareil. Testez d’abord tout avec l’essai gratuit, puis passez à un abonnement IPTV payant uniquement quand vous êtes satisfait. Sans engagement. Sans tracas.
              </p>

              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['36K+', 'Chaînes en direct'],
                  ['120K+', 'Films et séries'],
                  ['99,9 %', 'Disponibilité serveur'],
                  ['24/7', 'Assistance WhatsApp'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl sm:rounded-3xl border border-[#D6DCE3] bg-[#EEEEEE] p-4 shadow-sm hover:border-[#FFCD00] transition-colors">
                    <div className="text-2xl sm:text-3xl font-black text-[#0055A4]">{value}</div>
                    <div className="mt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#0A1B33]/70">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link
                  href="/tarifs"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#0055A4] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#FFFFFF] hover:bg-[#004A8F] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#0055A4]/25 border border-[#0055A4]"
                >
                  Choisir ma formule d’abonnement
                </Link>
                <Link
                  href="/essai-gratuit"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#EF4135]/40 bg-[#FFFFFF] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#EF4135] hover:bg-[#EF4135] hover:text-[#FFFFFF] transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  <PlayCircle className="h-4 w-4 shrink-0" /> Essai gratuit 24h
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#0055A4] uppercase tracking-wider">
                Essai gratuit d’abord • Installation guidée sur WhatsApp • Sans engagement
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}