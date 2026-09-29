'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ProductSchema, FAQSchema } from './components/PageSchemas';
import { blogPosts } from '@/lib/blog';
import {
  PlayCircle,
  UserCheck,
  BookOpen,
  Star,
  ShieldCheck,
  Zap,
  Download,
  CreditCard,
  CheckCircle2,
  MonitorSmartphone,
  Tv2,
  Cpu,
  ArrowRight,
  Lock,
  ThumbsUp,
  Trophy,
  Medal,
  LifeBuoy,
  Settings,
  Check,
  Smartphone,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './components/AnimatedSection';
import AnimatedCounter from './components/AnimatedCounter';
import TargetCountries from './components/TargetCountries';
import ShareButtons from './components/ShareButtons';

/* =========================================================
   ABONNEMENT IPTV — MODERN FRENCH DESIGN SYSTEM
   ---------------------------------------------------------
   🇫🇷 TRICOLORE FRANÇAIS
   Bleu France  : #0055A4   → CTA principal, accents forts
   Blanc        : #FFFFFF   → texte principal, surfaces claires
   Rouge France : #EF4135   → CTA secondaire, accents, bandeau
   ---------------------------------------------------------
   MARINE FRANÇAISE
   Marine deep  : #05101F
   Marine       : #0A1B33
   Marine alt   : #0E2444
   Card navy    : #122A4D
   Border navy  : #1E3A5F
   ---------------------------------------------------------
   CLAIR
   Fond clair   : #EEEEEE
   Card claire  : #FFFFFF
   Border clair : #D6DCE3
   ---------------------------------------------------------
   OR PREMIUM   : #FFCD00
   ========================================================= */

const LoadingSpinner = () => (
  <div className="min-h-[600px] flex items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#0055A4] border-t-transparent" />
  </div>
);

const PricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => <LoadingSpinner />,
});

const MovieSlider = dynamic(() => import('./components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#122A4D] rounded-2xl animate-pulse" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('./components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const GlobalServerMap = dynamic(() => import('./components/GlobalServerMap'), {
  loading: () => (
    <div className="h-[400px] bg-[#122A4D] rounded-3xl animate-pulse max-w-7xl mx-auto" />
  ),
});

const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#0055A4] border-t-transparent" />
    </div>
  ),
});

/* Appareils — icône + nom court uniquement */
const DEVICES = [
  { tag: 'Firestick', icon: Zap },
  { tag: 'Smart TV', icon: Tv2 },
  { tag: 'Android TV', icon: Cpu },
  { tag: 'Apple TV', icon: Smartphone },
  { tag: 'PC & Mac', icon: MonitorSmartphone },
  { tag: 'Box MAG', icon: ShieldCheck },
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0A1B33] text-[#FFFFFF]">
      <ProductSchema />
      <FAQSchema />

      {/* =========================================================
          SECTION HERO
          ========================================================= */}
      <section className="relative px-4 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#05101F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="Abonnement IPTV en France — chaînes en direct et sport en direct sur Firestick et Smart TV"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center brightness-[0.20]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05101F]/90 via-[#0A1B33]/70 to-[#0A1B33]/95" />
        </div>

        <div className="absolute top-0 left-0 right-0 h-1.5 z-20 flex">
          <div className="flex-1 bg-[#0055A4]" />
          <div className="flex-1 bg-[#FFFFFF]" />
          <div className="flex-1 bg-[#EF4135]" />
        </div>

        <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto w-full">
          <div className="inline-flex items-center gap-2 bg-[#0E2444]/80 border border-[#0055A4]/60 px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <span className="flex gap-0.5">
              <span className="w-2 h-2 rounded-full bg-[#0055A4]" />
              <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
              <span className="w-2 h-2 rounded-full bg-[#EF4135]" />
            </span>
            <span className="text-[#FFFFFF] font-extrabold text-xs uppercase tracking-widest">
              Service IPTV pour la France
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black tracking-tight uppercase text-[#FFFFFF] mb-6 leading-none break-words">
            MEILLEUR ABONNEMENT IPTV <br />
            <span className="relative inline-block">
              <span className="text-[#0055A4]">EN </span>
              <span className="text-[#FFFFFF]">FR</span>
              <span className="text-[#EF4135]">ANCE</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0055A4] via-[#FFFFFF] to-[#EF4135] rounded-full" />
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/85 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Vous cherchez le meilleur abonnement IPTV en France ? Ne cherchez plus. Profitez de plus de 36 000 chaînes en direct et de 120 000 films et séries en 4K sur tous vos appareils. Votre abonnement IPTV s’active en quelques minutes, avec une infrastructure serveur optimisée pour la France. Un service IPTV pensé pour une seule chose : des chaînes en direct fluides, du sport en direct sans coupure, et zéro engagement. Essayez gratuitement dès aujourd’hui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-sm hover:bg-[#004A8F] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#0055A4]/40"
            >
              Acheter maintenant
            </Link>
            <Link
              href="/free-trial"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#EF4135] text-[#FFFFFF] font-black text-sm hover:bg-[#D63528] transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-[#EF4135]/40"
            >
              <PlayCircle className="w-5 h-5 text-[#FFFFFF] shrink-0" /> Essai gratuit
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#FFFFFF] font-bold uppercase tracking-widest bg-[#0E2444]/70 backdrop-blur-md px-8 py-4 rounded-3xl border border-[#1E3A5F] shadow-2xl">
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#0055A4]" /> Streaming 4K Ultra HD
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FFFFFF]" /> 99,9 % de disponibilité
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#EF4135]" /> Technologie anti-freeze
            </span>
          </div>
        </FadeIn>
      </section>

      {/* =========================================================
          SLIDER PARTENAIRES
          ========================================================= */}
      <div className="min-h-[128px] bg-[#0A1B33]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* =========================================================
          GUIDE D’INSTALLATION EN 3 ÉTAPES — SECTION CLAIRE
          ========================================================= */}
      <section className="py-28 bg-[#EEEEEE] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0A1B33_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/40 px-4 py-2 rounded-full mb-6 shadow-sm">
                <span className="flex gap-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#0055A4]" />
                  <span className="w-2 h-2 rounded-full bg-[#FFFFFF] ring-1 ring-[#0A1B33]/20" />
                  <span className="w-2 h-2 rounded-full bg-[#EF4135]" />
                </span>
                <span className="text-[#0055A4] font-black text-xs uppercase tracking-widest">
                  Guide d’installation IPTV
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0A1B33] tracking-tight uppercase leading-[1.05]">
                COMMENCEZ À REGARDER EN <br className="hidden sm:block" />
                <span className="relative inline-block mt-1 text-[#0055A4]">
                  3 ÉTAPES SIMPLES
                  <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-[#0055A4] via-[#FFFFFF] to-[#EF4135] rounded-full" />
                </span>
              </h2>

              <p className="text-[#0A1B33]/80 text-base sm:text-lg mt-6 font-semibold max-w-2xl leading-relaxed">
                Aucune compétence technique requise. Choisissez une formule, recevez vos identifiants par e-mail et regardez sur n’importe quel appareil — Firestick, Smart TV, iPhone, Android, Roku ou PC. L’installation complète de votre abonnement IPTV prend moins de cinq minutes, du paiement au premier flux.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative">
            {/* Étape 1 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A1B33] text-[#FFFFFF] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#1E3A5F] shadow-[0_15px_35px_rgba(10,27,51,0.35)] hover:border-[#0055A4] hover:shadow-[0_25px_50px_rgba(0,85,164,0.45)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#05101F] text-[#FFFFFF] shadow-lg shadow-[#05101F]/60 border border-[#0055A4]/60 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Tv2 className="w-8 h-8 text-[#0055A4]" />
                  </div>
                  <span className="text-5xl font-black text-[#FFFFFF] bg-[#0055A4] px-4 py-1 rounded-2xl shadow-md tracking-tight">
                    01
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FFFFFF] bg-[#0055A4] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  Étape 1
                </div>

                <h3 className="text-2xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight group-hover:text-[#0055A4] transition-colors">
                  Choisissez votre formule
                </h3>

                <p className="text-[#FFFFFF]/85 text-sm font-medium leading-relaxed mb-6">
                  Sélectionnez l’abonnement IPTV adapté à votre foyer. Choisissez 1, 2 ou 3 écrans simultanés et optez pour une formule de 1, 3, 6 ou 12 mois. Tous les tarifs sont affichés en euros (€) — aucun frais caché, aucune surprise, aucun engagement impossible à résilier.
                </p>

                <ul className="text-xs font-bold text-[#FFFFFF]/75 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0055A4]" /> 1, 2 ou 3 écrans simultanés
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0055A4]" /> Formules de 1, 3, 6 ou 12 mois
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0055A4]" /> Tarifs en euros, sans engagement
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#1E3A5F] flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider group-hover:text-[#0055A4] transition-colors">
                  Sélection simple
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#05101F] text-[#FFFFFF] flex items-center justify-center shadow-md group-hover:bg-[#0055A4] group-hover:text-[#FFFFFF] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Étape 2 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A1B33] text-[#FFFFFF] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#1E3A5F] shadow-[0_15px_35px_rgba(10,27,51,0.35)] hover:border-[#FFFFFF] hover:shadow-[0_25px_50px_rgba(255,255,255,0.25)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#05101F] text-[#FFFFFF] shadow-lg shadow-[#05101F]/60 border border-[#FFFFFF]/50 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Download className="w-8 h-8 text-[#FFFFFF]" />
                  </div>
                  <span className="text-5xl font-black text-[#0A1B33] bg-[#FFFFFF] px-4 py-1 rounded-2xl shadow-md tracking-tight">
                    02
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#0A1B33] bg-[#FFFFFF] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  Étape 2
                </div>

                <h3 className="text-2xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight transition-colors">
                  Recevez vos identifiants instantanément
                </h3>

                <p className="text-[#FFFFFF]/85 text-sm font-medium leading-relaxed mb-6">
                  Votre playlist M3U et vos identifiants Xtream Codes arrivent dans votre boîte mail en moins de cinq minutes. Ouvrez un lecteur comme IPTV Extreme Pro, TiviMate ou Smart IPTV, collez vos identifiants et profitez. Compatible Firestick, Android TV, Apple TV, Smart TV, mobiles et ordinateurs.
                </p>

                <ul className="text-xs font-bold text-[#FFFFFF]/75 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" /> Codes M3U et Xtream
                    livrés par e-mail
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" /> Compatible IPTV Extreme
                    Pro et TiviMate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" /> Installation en moins de 5
                    minutes
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#1E3A5F] flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider transition-colors">
                  Livraison instantanée
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#05101F] text-[#FFFFFF] flex items-center justify-center shadow-md group-hover:bg-[#FFFFFF] group-hover:text-[#0A1B33] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Étape 3 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A1B33] text-[#FFFFFF] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#1E3A5F] shadow-[0_15px_35px_rgba(10,27,51,0.35)] hover:border-[#EF4135] hover:shadow-[0_25px_50px_rgba(239,65,53,0.45)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#05101F] text-[#FFFFFF] shadow-lg shadow-[#05101F]/60 border border-[#EF4135]/60 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-[#EF4135]" />
                  </div>
                  <span className="text-5xl font-black text-[#FFFFFF] bg-[#EF4135] px-4 py-1 rounded-2xl shadow-md tracking-tight">
                    03
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FFFFFF] bg-[#EF4135] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  Étape 3
                </div>

                <h3 className="text-2xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight group-hover:text-[#EF4135] transition-colors">
                  Regardez et profitez
                </h3>

                <p className="text-[#FFFFFF]/85 text-sm font-medium leading-relaxed mb-6">
                  Accédez à plus de 36 000 chaînes en direct, suivez chaque match de Ligue 1, de Ligue des Champions et de Premier League, et découvrez plus de 120 000 titres à la demande. Une question ? Notre équipe d’assistance est disponible 24/7 — de vraies personnes, de vraies réponses, sans file d’attente.
                </p>

                <ul className="text-xs font-bold text-[#FFFFFF]/75 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EF4135]" /> 36 000+ chaînes en direct et
                    120 000+ VOD
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EF4135]" /> Ligue 1, Ligue des
                    Champions, NBA, F1 et PPV
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EF4135]" /> Assistance client 24/7
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#1E3A5F] flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider group-hover:text-[#EF4135] transition-colors">
                  Prêt à regarder
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#05101F] text-[#FFFFFF] flex items-center justify-center shadow-md group-hover:bg-[#EF4135] group-hover:text-[#FFFFFF] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>


      {/* =========================================================
          BANDEAU PAYS CIBLES
          ========================================================= */}
      <section className="w-full bg-gradient-to-r from-[#0055A4] via-[#FFFFFF] to-[#EF4135] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <TargetCountries />
        </div>
      </section>


      {/* =========================================================
          SECTION SALON — SECTION CLAIRE
          ========================================================= */}
      <section className="w-full bg-[#EEEEEE] py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-full bg-[#0055A4]/10 border border-[#0055A4]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#0055A4]">
            Expérience cinéma à domicile
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#0A1B33] leading-none">
            LE STREAMING 4K DANS VOTRE <span className="text-[#0055A4]">SALON</span>
          </h2>
        </div>

        <div className="w-full bg-[#EEEEEE] py-10 flex justify-center items-center transition-all duration-300">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt="Abonnement IPTV en France — chaînes en direct et streaming 4K dans un salon français"
              width={1200}
              height={480}
              loading="lazy"
              className="h-full w-full object-contain"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-10">
          <p className="text-base md:text-lg leading-relaxed text-[#0A1B33]/80 font-medium">
            Rien ne vaut un match en direct sur grand écran. Notre infrastructure serveur garantit une image nette et un son parfaitement synchronisé, pour que vous puissiez vous installer confortablement et oublier les coupures pour de bon. Un abonnement IPTV bien configuré, c’est du sport en direct fluide sur toutes les chaînes.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link
              href="/pricing"
              className="bg-[#0055A4] px-8 py-3 text-sm font-black uppercase tracking-widest text-[#FFFFFF] hover:bg-[#004A8F] transition-transform hover:scale-105 rounded-full shadow-xl shadow-[#0055A4]/40"
            >
              Activer mon abonnement
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          GRILLE MÉDIAS / CHAÎNES — SECTION MARINE
          ========================================================= */}
      <section
        id="channels"
        className="pt-24 bg-[#0A1B33] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-[#1E3A5F]"
      >
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tight leading-none">
              36 000+ CHAÎNES FRANÇAISES ET INTERNATIONALES EN DIRECT
            </h2>
            <p className="text-[#FFFFFF]/80 font-medium text-lg">
              Toutes les grandes chaînes françaises sont là — TF1, France 2, France 3, M6, Canal+, beIN Sports, RMC Sport, Arte et bien d’autres — ainsi que des milliers de chaînes internationales du Royaume-Uni, du Canada, d’Europe, d’Asie et du Moyen-Orient. De nouveaux titres sont ajoutés chaque jour à notre catalogue à la demande. Le tout réuni dans un seul abonnement IPTV en France : chaînes en direct, sport en direct, films et séries en streaming.
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

      {/* =========================================================
          SECTION TARIFICATION
          ========================================================= */}
      <div className="min-h-[600px] bg-[#0A1B33]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      <section className="w-full max-w-4xl mx-auto px-4 my-8 flex justify-center items-center bg-[#0A1B33]">
        <ShareButtons />
      </section>

      {/* =========================================================
          BADGES DE CONFIANCE
          ========================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0A1B33]">
        <div className="bg-[#122A4D] text-[#FFFFFF] border border-[#1E3A5F] rounded-3xl p-8 md:p-12 shadow-2xl">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0A1B33] border border-[#0055A4]/50 flex items-center justify-center shrink-0">
                <Lock className="w-7 h-7 text-[#0055A4]" />
              </div>
              <div>
                <div className="font-black text-[#FFFFFF] text-lg uppercase tracking-tight">
                  Paiements sécurisés
                </div>
                <p className="text-[#FFFFFF]/70 font-medium text-xs mt-1">
                  Paiement chiffré par carte bancaire, PayPal ou crypto
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0A1B33] border border-[#FFFFFF]/30 flex items-center justify-center shrink-0">
                <ThumbsUp className="w-7 h-7 text-[#FFFFFF]" />
              </div>
              <div>
                <div className="font-black text-[#FFFFFF] text-lg uppercase tracking-tight">
                  Essai gratuit
                </div>
                <p className="text-[#FFFFFF]/70 font-medium text-xs mt-1">
                  Testez le service sur votre propre appareil avant de payer
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0A1B33] border border-[#EF4135]/50 flex items-center justify-center shrink-0">
                <LifeBuoy className="w-7 h-7 text-[#EF4135]" />
              </div>
              <div>
                <div className="font-black text-[#FFFFFF] text-lg uppercase tracking-tight">
                  Assistance 24/7
                </div>
                <p className="text-[#FFFFFF]/70 font-medium text-xs mt-1">
                  De vraies personnes, réactives — par e-mail et chat en direct
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0A1B33] border border-[#FFCD00]/50 flex items-center justify-center shrink-0">
                <Medal className="w-7 h-7 text-[#FFCD00]" />
              </div>
              <div>
                <div className="font-black text-[#FFFFFF] text-lg uppercase tracking-tight">
                  Infrastructure dédiée
                </div>
                <p className="text-[#FFFFFF]/70 font-medium text-xs mt-1">
                  Serveurs optimisés pour une latence réduite
                </p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          STATISTIQUES ANIMÉES
          ========================================================= */}
      <section className="py-24 bg-[#0A1B33] relative overflow-hidden border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tight">
              LES CHIFFRES CLÉS DE NOTRE SERVICE IPTV
            </h3>
            <p className="text-[#0055A4] text-base font-bold mt-4 uppercase tracking-wider">
              Rejoint par plus de 50 000 abonnés à Paris, Marseille, Lyon, Toulouse et Bordeaux.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeInItem className="flex flex-col items-center p-6 bg-[#122A4D] text-[#FFFFFF] rounded-3xl border border-[#1E3A5F] shadow-lg hover:border-[#0055A4] transition-colors">
              <span className="text-5xl md:text-7xl font-black text-[#00BFFF] mb-2">
                <AnimatedCounter value={25} suffix="K+" />
              </span>
              <span className="text-xs text-[#FFFFFF]/70 font-extrabold uppercase tracking-widest mt-2">
                Abonnés actifs              </span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-[#122A4D] text-[#FFFFFF] rounded-3xl border border-[#1E3A5F] shadow-lg hover:border-[#FFFFFF] transition-colors">
              <span className="text-5xl md:text-7xl font-black text-[#FFFFFF] mb-2">
                <AnimatedCounter value={36} suffix="K+" />
              </span>
              <span className="text-xs text-[#FFFFFF]/70 font-extrabold uppercase tracking-widest mt-2">
                Chaînes en direct
              </span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-[#122A4D] text-[#FFFFFF] rounded-3xl border border-[#1E3A5F] shadow-lg hover:border-[#EF4135] transition-colors">
              <span className="text-5xl md:text-7xl font-black text-[#EF4135] mb-2">
                <AnimatedCounter value={120} suffix="K+" />
              </span>
              <span className="text-xs text-[#FFFFFF]/70 font-extrabold uppercase tracking-widest mt-2">
                Titres à la demande
              </span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-[#122A4D] text-[#FFFFFF] rounded-3xl border border-[#1E3A5F] shadow-lg hover:border-[#FFCD00] transition-colors">
              <span className="text-5xl md:text-7xl font-black text-[#FFCD00] mb-2">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-[#FFFFFF]/70 font-extrabold uppercase tracking-widest mt-2">
                Disponibilité serveur
              </span>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          SECTION AVANTAGES — SECTION CLAIRE
          ========================================================= */}
      <section className="py-24 bg-[#EEEEEE] relative overflow-hidden border-t border-[#0A1B33]/20">
        <div className="absolute inset-0 bg-[radial-gradient(#0A1B33_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/40 px-4 py-2 rounded-full mb-6">
              <span className="flex gap-0.5">
                <span className="w-2 h-2 rounded-full bg-[#0055A4]" />
                <span className="w-2 h-2 rounded-full bg-[#FFFFFF] ring-1 ring-[#0A1B33]/20" />
                <span className="w-2 h-2 rounded-full bg-[#EF4135]" />
              </span>
              <span className="text-[#0055A4] font-black text-xs uppercase tracking-widest">
                Service IPTV fiable en France
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A1B33] mb-6 uppercase tracking-tight leading-none">
              POURQUOI CHOISIR NOTRE <span className="text-[#0055A4]">ABONNEMENT IPTV</span> EN
              FRANCE
            </h2>
            <p className="text-[#0A1B33]/80 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              Fini les abonnements câble hors de prix. Découvrez pourquoi de plus en plus de foyers français choisissent le meilleur abonnement IPTV — chaînes en direct, sport en direct, films et séries, pour un tarif mensuel bien inférieur au câble.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              {
                accent: '#0055A4',
                title: 'Catalogue VOD XXL',
                desc: 'Plus de 120 000 films et séries complètes, renouvelés chaque jour. Pistes audio multiples et sous-titres inclus.',
              },
              {
                accent: '#0A1B33',
                title: 'Technologie anti-blocage',
                desc: 'Nos serveurs répartissent la charge sur plusieurs centres de données pour que votre flux reste fluide, même aux heures de forte affluence.',
              },
              {
                accent: '#EF4135',
                title: 'Routage optimisé',
                desc: 'Un routage performant garantit une faible latence, un zapping rapide et une qualité d’image constante.',
              },
              {
                accent: '#0055A4',
                title: 'Tout le sport en direct',
                desc: 'Ligue 1, Ligue des Champions, Premier League, NBA, Formule 1 et grands événements PPV dans une qualité d’image irréprochable.',
              },
              {
                accent: '#0A1B33',
                title: 'Guide TV sur 7 jours',
                desc: 'Une semaine complète de programmes et des options de replay pour ne rien manquer.',
              },
              {
                accent: '#EF4135',
                title: 'Connexions multi-appareils',
                desc: 'Un seul compte, plusieurs écrans. Firestick, Android TV, Smart TV, tablettes et mobiles pris en charge.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] text-[#0A1B33] rounded-[2.5rem] p-8 border-2 border-[#D6DCE3] shadow-[0_10px_30px_rgba(10,27,51,0.10)] hover:border-[#0055A4] hover:shadow-[0_20px_45px_rgba(0,85,164,0.20)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-16 h-16 rounded-2xl bg-[#EEEEEE] border-2 flex items-center justify-center mb-6 shadow-sm"
                    style={{ borderColor: `${item.accent}55` }}
                  >
                    <CheckCircle2 className="w-7 h-7" style={{ color: item.accent }} />
                  </div>
                  <h3 className="text-2xl font-black text-[#0A1B33] mb-3 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#0A1B33]/80 font-medium text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#D6DCE3] flex items-center justify-between text-xs font-bold text-[#0055A4]">
                  <span className="uppercase tracking-wider">Fonctionnalité clé</span>
                  <span className="w-2 h-2 rounded-full bg-[#0055A4]" />
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>



      {/* =========================================================
          CARTE MONDIALE DES SERVEURS
          ========================================================= */}
      <div className="min-h-[400px] bg-[#0E2444]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>



      {/* =========================================================
          CATÉGORIES DE CHAÎNES — SECTION CLAIRE
          ========================================================= */}
      <section className="py-24 bg-[#EEEEEE] relative border-t border-[#0A1B33]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/40 px-4 py-2 rounded-full mb-6">
              <span className="flex gap-0.5">
                <span className="w-2 h-2 rounded-full bg-[#0055A4]" />
                <span className="w-2 h-2 rounded-full bg-[#FFFFFF] ring-1 ring-[#0A1B33]/20" />
                <span className="w-2 h-2 rounded-full bg-[#EF4135]" />
              </span>
              <span className="text-[#0055A4] font-black text-xs uppercase tracking-widest">
                36 000+ chaînes en direct
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A1B33] mb-6 uppercase tracking-tight leading-none">
              EXPLOREZ NOS <span className="text-[#0055A4]">CATÉGORIES DE CHAÎNES EN DIRECT</span>
            </h2>
            <p className="text-[#0A1B33]/80 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              Du sport en direct aux chaînes internationales, votre abonnement IPTV réunit tout au même endroit — pas d’applis à multiplier, pas de prise de tête. Un seul abonnement pour toute la famille.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                cat: 'Sport en direct',
                channels:
                  'Suivez la Ligue 1, la Ligue des Champions, la Premier League, la NBA, la Formule 1 et les grands combats PPV avec une image nette et fluide.',
                footer: ['Streaming 4K', 'En direct'],
                accent: '#0055A4',
              },
              {
                cat: 'Chaînes françaises',
                channels:
                  'Accédez à TF1, France 2, France 3, M6, Canal+, beIN Sports, RMC Sport, Arte, BFM TV et bien d’autres.',
                footer: ['Ultra HD', 'À l’antenne'],
                accent: '#0A1B33',
              },
              {
                cat: 'Films et à la demande',
                channels:
                  'Des milliers de films, de créations originales et de séries complètes, renouvelés chaque jour.',
                footer: ['Image nette', 'Disponible'],
                accent: '#EF4135',
              },
              {
                cat: 'Jeunesse et famille',
                channels:
                  'Dessins animés, programmes éducatifs et contenus adaptés aux plus jeunes, en toute sérénité.',
                footer: ['Qualité HD', 'Streaming'],
                accent: '#0055A4',
              },
              {
                cat: 'Royaume-Uni et international',
                channels:
                  'Les grandes chaînes britanniques, canadiennes et européennes en direct : information, séries et divertissement 24h/24.',
                footer: ['4K Ready', 'En direct'],
                accent: '#0A1B33',
              },
              {
                cat: 'Télévision mondiale',
                channels:
                  'Des chaînes internationales d’Europe, d’Asie, du Moyen-Orient et d’Amérique latine pour rester connecté à vos origines.',
                footer: ['Flux HD', 'À l’antenne'],
                accent: '#EF4135',
              },
              {
                cat: 'Documentaires et nature',
                channels:
                  'Science, histoire, animaux et géographie pour les esprits curieux.',
                footer: ['Image nette', 'Disponible'],
                accent: '#0055A4',
              },
              {
                cat: 'Sports de combat et PPV',
                channels:
                  'UFC, boxe professionnelle, catch et grands combats pay-per-view, regroupés dans une catégorie dédiée.',
                footer: ['Streaming 4K', 'En direct'],
                accent: '#EF4135',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] text-[#0A1B33] rounded-3xl p-6 border-2 border-[#D6DCE3] shadow-[0_8px_20px_rgba(10,27,51,0.08)] hover:border-[#0055A4] hover:shadow-[0_15px_30px_rgba(0,85,164,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl bg-[#EEEEEE] flex items-center justify-center shrink-0 border-2 shadow-sm"
                      style={{ borderColor: `${item.accent}55` }}
                    >
                      <CheckCircle2 className="w-5 h-5" style={{ color: item.accent }} />
                    </div>
                    <h3 className="font-black text-[#0A1B33] text-base uppercase tracking-wider">
                      {item.cat}
                    </h3>
                  </div>
                  <p className="text-[#0A1B33]/75 font-semibold text-xs leading-relaxed">
                    {item.channels}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D6DCE3] flex items-center justify-between text-[10px] font-extrabold uppercase text-[#0055A4] tracking-widest">
                  <span>{item.footer[0]}</span>
                  <span>{item.footer[1]}</span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          BLOCS FONCTIONNALITÉS (4K + SPORTS) — SECTION MARINE
          ========================================================= */}
      <section className="bg-[#0A1B33] py-24 border-y border-[#1E3A5F] relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0055A4]/25 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#EF4135]/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl space-y-28 px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Bloc 1 : qualité 4K */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-1 overflow-hidden rounded-[2.5rem] bg-[#122A4D] border-2 border-[#1E3A5F] p-3 shadow-2xl transition-all duration-500 hover:border-[#0055A4]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/image-1.webp"
                  alt="Abonnement IPTV en France diffusé en 4K Ultra HD sur un téléviseur connecté"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#05101F]/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#FFFFFF] border border-[#1E3A5F] shadow-md">
                  Qualité 4K Ultra HD
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#05101F]/95 backdrop-blur-md border border-[#1E3A5F] p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[340px] shadow-xl">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0055A4] text-[#FFFFFF] shrink-0 shadow-lg shadow-[#0055A4]/40">
                      <PlayCircle className="h-6 w-6 text-[#FFFFFF]" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-[#FFFFFF]">
                        Flux ultra nets
                      </p>
                      <p className="text-xs font-medium text-[#FFFFFF]/85 mt-0.5">
                        Profitez d’une image nette et d’un mouvement fluide sur tout écran compatible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FadeIn className="order-2">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#122A4D] border border-[#0055A4]/50 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#0055A4]">
                <span className="w-2 h-2 rounded-full bg-[#0055A4] animate-pulse" />
                Lecture haute définition
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#FFFFFF] leading-[1.1] mb-6">
                UNE QUALITÉ D&apos;IMAGE <br />
                <span className="relative inline-block mt-1">
                  <span className="text-[#0055A4]">4</span>
                  <span className="text-[#FFFFFF]">K E</span>
                  <span className="text-[#EF4135]">XCEPTIONNELLE</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0055A4] via-[#FFFFFF] to-[#EF4135] rounded-full" />
                </span>
              </h3>

              <p className="text-base leading-relaxed text-[#FFFFFF]/85 font-medium">
                En vous connectant à notre réseau, vous accédez à une infrastructure pensée pour la stabilité. Nous acheminons votre flux via des nœuds à haut débit qui limitent la mise en mémoire tampon et préservent la qualité 4K, Full HD et HD — à un taux de rafraîchissement stable de 60 FPS. Chaînes en direct et sport en direct restent fluides, même aux heures de pointe.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#FFFFFF]/75 font-medium">
                Information, séance cinéma, soirée match — tout se déroule sans accroc sur Firestick, Smart TV, Android TV, Apple TV, Roku et mobile.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Moteur de protection anti-freeze',
                  'Large sélection de chaînes en 4K et FHD',
                  'Plus de 120 000 titres à la demande',
                  'Compatible Firestick, TV et mobile',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#122A4D] text-[#FFFFFF] border border-[#1E3A5F] px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-md hover:border-[#0055A4] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#0055A4] text-[#FFFFFF] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex sm:inline-flex mt-8">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#0055A4] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#FFFFFF] hover:bg-[#004A8F] transition-all hover:scale-105 rounded-full shrink-0 shadow-lg shadow-[#0055A4]/40"
                >
                  Accéder immédiatement
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Bloc 2 : sport en direct */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#122A4D] border border-[#EF4135]/50 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF4135]">
                <span className="w-2 h-2 rounded-full bg-[#EF4135] animate-pulse" />
                Soirée match et PPV
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#FFFFFF] leading-[1.1] mb-6">
                NE MANQUEZ PLUS AUCUN <br />
                <span className="relative inline-block mt-1">
                  <span className="text-[#0055A4]">M</span>
                  <span className="text-[#FFFFFF]">ATCH NI ÉVÉN</span>
                  <span className="text-[#EF4135]">EMENT</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0055A4] via-[#FFFFFF] to-[#EF4135] rounded-full" />
                </span>
              </h3>

              <p className="text-base leading-relaxed text-[#FFFFFF]/85 font-medium">
                Les amateurs de sport en direct ont besoin de flux fluides et de temps de réponse rapides. Notre abonnement IPTV en France couvre la Ligue 1, la Ligue des Champions, la Premier League, la NBA, la Formule 1 et les grands combats pay-per-view — sans coupure, sans latence.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#FFFFFF]/75 font-medium">
                Finale de la Ligue des Champions, choc de Ligue 1, combat de championnat — notre infrastructure absorbe les pics de trafic sans broncher. Vous profitez d’une action fluide en 60 FPS.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Ligue 1, Ligue des Champions et Premier League',
                  'UFC, boxe et grands combats PPV',
                  'Flux à faible latence et haut débit',
                  'Chaînes sport et course dédiées',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#122A4D] text-[#FFFFFF] border border-[#1E3A5F] px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-md hover:border-[#EF4135] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#EF4135] text-[#FFFFFF] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex sm:inline-flex mt-8">
                <Link
                  href="#channels"
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#EF4135] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#FFFFFF] hover:bg-[#D63528] transition-all hover:scale-105 rounded-full shrink-0 shadow-lg shadow-[#EF4135]/40"
                >
                  Découvrir les chaînes sport
                </Link>
              </div>
            </FadeIn>

            <div className="relative order-1 overflow-hidden rounded-[2.5rem] bg-[#122A4D] border-2 border-[#1E3A5F] p-3 lg:order-2 shadow-2xl transition-all duration-500 hover:border-[#EF4135]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/bg-1.webp"
                  alt="Ligue 1 et sport en direct via un abonnement IPTV en France sur Firestick"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#05101F]/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#FFFFFF] border border-[#1E3A5F] shadow-md">
                  Diffusion en direct
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#05101F]/95 backdrop-blur-md border border-[#1E3A5F] p-4 shadow-xl">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EF4135] text-[#FFFFFF] shadow-lg shadow-[#EF4135]/40">
                      <Trophy className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-[#FFFFFF]">Pass Sport</p>
                      <p className="text-xs font-extrabold uppercase tracking-widest text-[#0055A4]">
                        Matchs en direct et chaînes sport
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          AVIS CLIENTS — SECTION CLAIRE
          ========================================================= */}
      <section className="py-24 bg-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 px-4 py-2 rounded-full border border-[#0055A4]/40 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#0055A4]" />
              <span className="text-[#0055A4] font-extrabold text-xs uppercase tracking-wider">
                Avis d’abonnés vérifiés
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A1B33] mb-6 uppercase tracking-tight">
              PLUS DE <span className="text-[#0055A4]">50 000 ABONNÉS </span>EN FRANCE
            </h2>
            <p className="text-[#0A1B33]/80 text-lg font-medium max-w-2xl mx-auto">
              Les retours d’abonnés à Paris, Marseille, Lyon, Toulouse et Bordeaux — ce qu’ils pensent de notre abonnement IPTV (et pourquoi ils ne retourneront pas au câble).
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Michel R.',
                avatar:
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
                text: "J'ai passé des mois à chercher un abonnement IPTV qui ne freeze pas pendant les matchs de Ligue 1 sur mon Firestick. Celui-ci a tenu ses promesses. Installation en cinq minutes et une image parfaitement nette.",
                role: 'Lyon',
              },
              {
                name: 'Julie L.',
                avatar:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
                text: "J'ai résilié mon abonnement câble le mois dernier et je me suis tournée vers un abonnement IPTV. L'équipe m'a guidée par chat en cinq minutes environ, et j'ai pu tout tester avec l'essai gratuit avant de payer. Je recommande vivement.",
                role: 'Paris',
              },
              {
                name: 'Thomas M.',
                avatar:
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
                text: "Un excellent mélange de sport en direct, de chaînes françaises et de contenus à la demande. IPTV Extreme Pro tourne parfaitement sur mon boîtier Android. Le meilleur abonnement IPTV que j'aie essayé — et j'en ai testé beaucoup.",
                role: 'Marseille',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] text-[#0A1B33] rounded-3xl p-8 border-2 border-[#D6DCE3] shadow-[0_10px_30px_rgba(10,27,51,0.10)] transition-all hover:-translate-y-2 hover:border-[#0055A4] hover:shadow-[0_20px_40px_rgba(0,85,164,0.20)] duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-2xl object-cover border-2 border-[#0055A4] shadow-md shrink-0"
                      />
                      <div>
                        <div className="font-black text-[#0A1B33] text-base uppercase tracking-tight flex items-center gap-1.5">
                          {testimonial.name}
                          <UserCheck className="w-4 h-4 text-[#0055A4]" />
                        </div>
                        <div className="text-[#0055A4] text-xs font-bold uppercase tracking-wider">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFCD00] text-[#FFCD00]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-[#0A1B33]/80 font-medium text-base leading-relaxed italic mb-6">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                <div className="border-t border-[#D6DCE3] pt-4 flex items-center justify-between">
                  <span className="text-[11px] font-black text-[#0055A4] uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0055A4]" /> Abonné vérifié
                  </span>
                  <span className="text-[11px] font-bold text-[#0A1B33]/50 uppercase">
                    France
                  </span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          APPAREILS COMPATIBLES — SECTION ROUGE, CARTES ICÔNE + NOM
          ========================================================= */}
      <section className="py-20 md:py-24 bg-[#EF4135] w-full relative overflow-hidden">
        {/* grille discrète */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFFFFF14_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF14_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#FFFFFF]/15 border border-[#FFFFFF]/40 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="flex gap-0.5">
                <span className="w-2 h-2 rounded-full bg-[#0055A4]" />
                <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
                <span className="w-2 h-2 rounded-full bg-[#0A1B33]" />
              </span>
              <span className="text-[#FFFFFF] font-extrabold text-xs uppercase tracking-widest">
                Compatibilité universelle
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#FFFFFF] uppercase tracking-tight max-w-4xl mx-auto leading-tight">
              COMPATIBLE AVEC TOUS LES APPAREILS POPULAIRES
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {DEVICES.map((device) => {
              const Icon = device.icon;
              return (
                <FadeInItem
                  key={device.tag}
                  className="group bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col items-center justify-center gap-3 sm:gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.20)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.30)] transition-all duration-300 cursor-pointer min-h-[120px] sm:min-h-[140px]"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#EF4135]/10 border-2 border-[#EF4135]/30 flex items-center justify-center group-hover:bg-[#EF4135] group-hover:border-[#EF4135] transition-all duration-300 shrink-0">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#EF4135] group-hover:text-[#FFFFFF] transition-colors duration-300" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#0A1B33] text-center leading-tight">
                    {device.tag}
                  </span>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          FAQ
          ========================================================= */}
      <div className="min-h-[400px] bg-[#0E2444]">
        {isMounted ? <FAQ /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* =========================================================
          SECTION BLOG — SECTION CLAIRE
          ========================================================= */}
      <section className="py-24 bg-[#EEEEEE] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0A1B33_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 px-4 py-2 rounded-full border border-[#0055A4]/40 mb-6">
                <BookOpen className="w-4 h-4 text-[#0055A4]" />
                <span className="text-[#0055A4] font-extrabold text-xs uppercase tracking-widest">
                  Guides et actualités
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0A1B33] mb-4 uppercase tracking-tight">
                DERNIERS <span className="text-[#0055A4]">GUIDES ET ACTUALITÉS</span>
              </h2>
              <p className="text-[#0A1B33]/70 text-lg font-medium max-w-2xl leading-relaxed">
                Tirez le meilleur de votre abonnement IPTV grâce à nos guides pas à pas, nos solutions de dépannage et nos astuces réseau pour un flux toujours rapide.
              </p>
            </div>

            <div className="flex shrink-0">
              <Link
                href="/blog"
                className="whitespace-nowrap px-7 py-4 rounded-2xl bg-[#0055A4] text-[#FFFFFF] font-black hover:bg-[#004A8F] transition-all duration-300 flex items-center gap-3 group shrink-0 shadow-xl hover:shadow-[0_10px_25px_rgba(0,85,164,0.35)]"
              >
                <span className="uppercase text-xs tracking-wider">Tous les articles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#FFFFFF]" />
              </Link>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="group cursor-pointer h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="bg-[#FFFFFF] text-[#0A1B33] rounded-3xl p-4 border-2 border-[#D6DCE3] shadow-[0_8px_20px_rgba(10,27,51,0.08)] hover:border-[#0055A4] hover:shadow-[0_20px_40px_rgba(0,85,164,0.18)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full relative">
                    <div>
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0A1B33]">
                        <Image
                          src={post.image}
                          alt={`${post.title} — guide d’installation IPTV`}
                          width={800}
                          height={450}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-3 py-1 bg-[#0055A4] text-[#FFFFFF] text-[10px] font-black uppercase tracking-widest rounded-lg shadow-md">
                            {post.author || 'Guide d’installation'}
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3">
                          <span className="px-2.5 py-1 bg-[#05101F]/80 backdrop-blur-md text-[#FFFFFF] text-[10px] font-extrabold uppercase tracking-wider rounded-lg border border-[#FFFFFF]/20">
                            5 min de lecture
                          </span>
                        </div>
                      </div>

                      <div className="p-4 pt-6">
                        <h3 className="text-lg font-black text-[#0A1B33] mb-2.5 group-hover:text-[#0055A4] transition-colors tracking-tight line-clamp-2 uppercase leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-[#0A1B33]/70 text-xs font-semibold line-clamp-3 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-4 pb-3 pt-3 border-t border-[#D6DCE3] flex items-center justify-between mt-auto">
                      <span className="inline-flex items-center gap-2 text-xs font-black text-[#0055A4] uppercase tracking-wider transition-colors">
                        Lire l’article
                      </span>

                      <div className="w-9 h-9 rounded-xl bg-[#0055A4]/10 border border-[#0055A4]/30 flex items-center justify-center text-[#0055A4] group-hover:bg-[#0055A4] group-hover:text-[#FFFFFF] group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          APPEL À L’ACTION FINAL — SECTION CLAIRE
          ========================================================= */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#EEEEEE] w-full">
        <div className="absolute inset-0 bg-[radial-gradient(#0A1B33_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border-2 border-[#0055A4]/30 bg-[#FFFFFF] shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0055A4]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#EF4135]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="h-2 w-full flex">
              <div className="flex-1 bg-[#0055A4]" />
              <div className="flex-1 bg-[#FFFFFF]" />
              <div className="flex-1 bg-[#EF4135]" />
            </div>

            <FadeIn className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0055A4]/30 bg-[#0055A4]/10 px-4 py-2 backdrop-blur-md">
                <span className="flex gap-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#0055A4]" />
                  <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
                  <span className="w-2 h-2 rounded-full bg-[#EF4135]" />
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[#0055A4]">
                  Service IPTV en France
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#0A1B33] leading-[1.05] mb-6">
                AMÉLIOREZ VOTRE DIVERTISSEMENT <br />
                <span className="relative inline-block">
                  <span className="text-[#0055A4]">DÈS </span>
                  <span className="text-[#0A1B33]">AUJOURD</span>
                  <span className="text-[#EF4135]">&apos;HUI</span>
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#0A1B33]/80">
                Choisissez votre formule, recevez immédiatement vos identifiants par e-mail et commencez à regarder sur votre appareil. Testez d’abord tout avec l’essai gratuit — passez à un abonnement IPTV payant quand vous êtes prêt. Un abonnement IPTV en France, c’est des chaînes en direct, du sport en direct et des films à la demande, sans engagement. Sans tracas. Sans surprise.
              </p>

              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['36 000+', 'Chaînes en direct'],
                  ['Ultra HD', 'Qualité de flux'],
                  ['99,9 %', 'Disponibilité serveur'],
                  ['24/7', 'Assistance'],
                ].map(([value, label], idx) => (
                  <div
                    key={label}
                    className="rounded-2xl sm:rounded-3xl border border-[#D6DCE3] bg-[#EEEEEE] p-4 shadow-sm hover:border-[#0055A4] transition-colors"
                  >
                    <div
                      className="text-2xl sm:text-3xl font-black"
                      style={{
                        color: idx === 0 ? '#0055A4' : idx === 1 ? '#0A1B33' : idx === 2 ? '#EF4135' : '#0055A4',
                      }}
                    >
                      {value}
                    </div>
                    <div className="mt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#0A1B33]/70">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#0055A4] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#FFFFFF] hover:bg-[#004A8F] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#0055A4]/40"
                >
                  Choisir ma formule
                </Link>
                <Link
                  href="/firestick-setup"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border border-[#EF4135]/40 bg-[#FFFFFF] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#EF4135] hover:bg-[#EF4135] hover:text-[#FFFFFF] transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  <Settings className="h-4 w-4 shrink-0" /> Guide Firestick
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#0055A4] uppercase tracking-wider">
                Essai gratuit • Livraison par e-mail instantanée • Assistance 24/7
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}