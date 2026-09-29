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
  Smartphone,
  CreditCard,
  Star,
  Users,
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

export default function IPTVFrancePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0A1B33] text-[#FFFFFF] overflow-hidden">

      {/* ==========================================================
          HERO — IPTV France
      ========================================================== */}
      <section className="relative px-4 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#05101F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="IPTV France — service IPTV premium diffusant plus de 36 000 chaînes en 4K Ultra HD"
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
              Service IPTV premium en France 🇫🇷
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#FFFFFF] mb-6 leading-none break-words">
            IPTV FRANCE <br />
            <span className="text-[#FFCD00]">4K ULTRA HD</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Profitez d’un service IPTV France premium avec plus de 36 000 chaînes en direct et une immense bibliothèque de films et séries en 4K Ultra HD sur tous vos appareils. Notre équipe vous envoie vos identifiants sur WhatsApp, vous guide pas à pas dans l’installation et vous offre un essai gratuit pour tester sur votre propre TV d’abord. Tarifs en euros (€), sans engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link
              href="/tarifs"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-sm hover:bg-[#004A8F] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#0055A4]/40"
            >
              Choisir mon IPTV France
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
              <KeyRound className="w-5 h-5 text-[#FFCD00]" /> Identifiants instantanés
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0055A4]" /> Compatible Xtream Codes API
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FFCD00]" /> Tous les lecteurs IPTV
            </span>
          </div>
        </FadeIn>
      </section>

      {/* ==========================================================
          3 ÉTAPES POUR DÉMARRER
      ========================================================== */}
      <section className="py-28 bg-[#EEEEEE] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0A1B33_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/25 px-4 py-2 rounded-full mb-6 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0055A4] animate-pulse" />
                <span className="text-[#0055A4] font-black text-xs uppercase tracking-widest">
                  Installation IPTV France
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0A1B33] tracking-tight uppercase leading-[1.05]">
                COMMENT UTILISER VOTRE <br className="hidden sm:block" />
                <span className="text-[#0055A4] relative inline-block mt-1">
                  ACCÈS IPTV FRANCE
                  <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#FFCD00]/60 to-transparent rounded-full" />
                </span>
              </h2>

              <p className="text-[#0055A4] text-base sm:text-lg mt-6 font-semibold max-w-2xl leading-relaxed">
                Pas d’inquiétude, nous gardons tout simple. Choisissez votre formule, écrivez-nous sur WhatsApp pour recevoir vos identifiants IPTV France, et notre équipe vous guide dans l’installation sur n’importe quel appareil.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative">
            {/* Étape 1 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A1B33] text-[#FFFFFF] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#0055A4] shadow-[0_15px_35px_rgba(0,85,164,0.2)] hover:border-[#FFCD00] hover:shadow-[0_25px_50px_rgba(255,205,0,0.25)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#0055A4] text-[#FFFFFF] shadow-lg shadow-[#0055A4]/40 border border-[#FFCD00] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-[#FFCD00]" />
                  </div>
                  <span className="text-5xl font-black text-[#0A1B33] bg-[#FFCD00] px-4 py-1 rounded-2xl shadow-md tracking-tight">
                    01
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FFFFFF] bg-[#EF4135] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  Étape 1
                </div>

                <h3 className="text-2xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight group-hover:text-[#FFCD00] transition-colors">
                  Choisissez votre formule
                </h3>

                <p className="text-[#FFFFFF]/90 text-sm font-medium leading-relaxed mb-6">
                  Choisissez le nombre d’écrans dont vous avez besoin à la maison et optez pour une formule de 3, 6 ou 12 mois. Tous les tarifs sont en euros (€) sans engagement.
                </p>

                <ul className="text-xs font-bold text-[#FFFFFF]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> 1, 2 ou 3 écrans</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> 3, 6 ou 12 mois</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> Carte, PayPal, crypto, Apple Pay</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#1E3A5F] flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider group-hover:text-[#FFCD00] transition-colors">
                  Sélection simple
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#0055A4] text-[#FFFFFF] flex items-center justify-center shadow-md group-hover:bg-[#FFCD00] group-hover:text-[#0A1B33] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Étape 2 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A1B33] text-[#FFFFFF] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#0055A4] shadow-[0_15px_35px_rgba(0,85,164,0.2)] hover:border-[#FFCD00] hover:shadow-[0_25px_50px_rgba(255,205,0,0.25)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#0055A4] text-[#FFFFFF] shadow-lg shadow-[#0055A4]/40 border border-[#FFCD00] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-[#FFCD00]" />
                  </div>
                  <span className="text-5xl font-black text-[#0A1B33] bg-[#FFCD00] px-4 py-1 rounded-2xl shadow-md tracking-tight">
                    02
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FFFFFF] bg-[#EF4135] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  Étape 2
                </div>

                <h3 className="text-2xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight group-hover:text-[#FFCD00] transition-colors">
                  Recevez vos identifiants
                </h3>

                <p className="text-[#FFFFFF]/90 text-sm font-medium leading-relaxed mb-6">
                  Écrivez-nous sur WhatsApp et nous vous envoyons vos identifiants IPTV France dans le chat. Vous recevez une URL serveur, un nom d’utilisateur et un mot de passe pour l’API Xtream Codes.
                </p>

                <ul className="text-xs font-bold text-[#FFFFFF]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> Identifiants instantanés sur WhatsApp</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> Format Xtream Codes API</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> Assistance en direct</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#1E3A5F] flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider group-hover:text-[#FFCD00] transition-colors">
                  Livraison instantanée
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#0055A4] text-[#FFFFFF] flex items-center justify-center shadow-md group-hover:bg-[#FFCD00] group-hover:text-[#0A1B33] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Étape 3 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A1B33] text-[#FFFFFF] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#0055A4] shadow-[0_15px_35px_rgba(0,85,164,0.2)] hover:border-[#FFCD00] hover:shadow-[0_25px_50px_rgba(255,205,0,0.25)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#0055A4] text-[#FFFFFF] shadow-lg shadow-[#0055A4]/40 border border-[#FFCD00] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <KeyRound className="w-8 h-8 text-[#FFCD00]" />
                  </div>
                  <span className="text-5xl font-black text-[#0A1B33] bg-[#FFCD00] px-4 py-1 rounded-2xl shadow-md tracking-tight">
                    03
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FFFFFF] bg-[#EF4135] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  Étape 3
                </div>

                <h3 className="text-2xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight group-hover:text-[#FFCD00] transition-colors">
                  Connectez-vous et regardez
                </h3>

                <p className="text-[#FFFFFF]/90 text-sm font-medium leading-relaxed mb-6">
                  Installez un lecteur compatible comme IPTV Smarters Pro, TiviMate ou IBO Player Pro. Collez vos identifiants IPTV France et votre liste de chaînes se charge automatiquement. Testez tout d’abord avec l’essai gratuit.
                </p>

                <ul className="text-xs font-bold text-[#FFFFFF]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> Compatible avec les lecteurs populaires</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> Chargement automatique des chaînes</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCD00]" /> Essai gratuit avant paiement</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#1E3A5F] flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider group-hover:text-[#FFCD00] transition-colors">
                  Prêt à regarder
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#0055A4] text-[#FFFFFF] flex items-center justify-center shadow-md group-hover:bg-[#FFCD00] group-hover:text-[#0A1B33] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* PARTNER SLIDER */}
      <div className="min-h-[128px] bg-[#0A1B33]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* SALON / CINÉMA */}
      <section className="w-full bg-[#0A1B33] py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-full bg-[#0055A4]/20 border border-[#0055A4]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFCD00]">
            Cinéma à la maison 🇫🇷
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#FFFFFF] leading-none">
            IPTV FRANCE SUR VOTRE <span className="text-[#FFCD00]">GRAND ÉCRAN</span>
          </h2>
        </div>

        <div className="w-full bg-[#122A4D]/40 py-10 flex justify-center items-center transition-all duration-300">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt="IPTV France diffusé sur une Smart TV dans un salon"
              width={1200}
              height={480}
              loading="lazy"
              className="h-full w-full object-contain"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-10">
          <p className="text-base md:text-lg leading-relaxed text-[#FFFFFF]/80 font-medium">
            Une fois vos identifiants IPTV France saisis dans un lecteur compatible, l’image reste nette et le son parfaitement synchronisé sur votre Smart TV, Firestick ou téléphone. Installez-vous confortablement et profitez de chaque match et film sans coupure.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link
              href="/tarifs"
              className="bg-[#0055A4] border border-[#0055A4] px-8 py-3 text-sm font-black uppercase tracking-widest text-[#FFFFFF] hover:bg-[#004A8F] transition-transform hover:scale-105 rounded-full shadow-xl shadow-[#0055A4]/30"
            >
              Activer mon IPTV France
            </Link>
          </div>
        </div>
      </section>

      {/* CE QUE VOUS OBTENEZ — 4 CARTES */}
      <section className="py-24 bg-[#EEEEEE] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0A1B33_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/25 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#0055A4]" />
              <span className="text-[#0055A4] font-black text-xs uppercase tracking-widest">
                Ce que débloque IPTV France
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1B33] uppercase tracking-tight leading-tight mb-6">
              UN SEUL ACCÈS, <span className="text-[#0055A4]">TOUT INCLUS</span>
            </h2>
            <p className="text-[#0055A4] font-semibold text-base md:text-lg leading-relaxed">
              Vos identifiants IPTV France sont un compte unique qui ouvre l’intégralité du service de streaming sur tous vos appareils. Voici tout ce qu’ils débloquent.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tv,
                title: '36 000+ chaînes en direct',
                desc: 'Toutes les grandes chaînes françaises plus des milliers de chaînes internationales du Royaume-Uni, du Canada, de Belgique, de Suisse, d’Europe et du Maghreb.',
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
                icon: KeyRound,
                title: 'Accès Xtream Codes API',
                desc: 'Une URL serveur, un nom d’utilisateur et un mot de passe compatibles avec IPTV Smarters Pro, TiviMate, IBO Player Pro et XCIPTV.',
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

          {/* Rangée de confiance */}
          <FadeIn className="mt-14 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Zap, label: 'Livraison instantanée' },
                { icon: ShieldCheck, label: 'Compatible API' },
                { icon: Users, label: 'Formules multi-écrans' },
                { icon: Star, label: 'Note 4,9/5' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[#0A1B33] text-[#FFFFFF] rounded-2xl p-4 border border-[#0055A4]/40"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0055A4] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#FFCD00]" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn className="text-center mt-14">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Link
                href="/tarifs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-sm uppercase tracking-widest shadow-lg hover:bg-[#004A8F] hover:scale-105 transition-all border border-[#0055A4]"
              >
                Voir les formules
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

      {/* SECTION TARIFICATION */}
      <div className="min-h-[600px] bg-[#0A1B33]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      {/* SLIDER DE FILMS */}
      <section id="channels" className="pt-24 bg-[#0A1B33] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-[#1E3A5F]">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tight leading-none">
              CHAÎNES ET FILMS SUR <span className="text-[#FFCD00]">IPTV FRANCE</span>
            </h2>
            <p className="text-[#FFFFFF]/70 font-medium text-lg">
              Votre abonnement IPTV France débloque des milliers de chaînes de télévision en direct ainsi que plus de 120 000 films et séries dans la bibliothèque à la demande.
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
                FAQ IPTV France
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tight leading-tight">
              VOS QUESTIONS SUR <span className="text-[#FFCD00]">IPTV FRANCE</span>
            </h2>
            <p className="text-[#FFFFFF]/70 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Les questions les plus fréquentes sur IPTV France, l’API Xtream Codes et la connexion à votre lecteur.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4">
            {[
              {
                q: 'Qu’est-ce qu’IPTV France ?',
                a: 'IPTV France est un service IPTV premium qui diffuse des chaînes de télévision en direct, des films et des séries via votre connexion Internet. En France, IPTV France offre plus de 36 000 chaînes en direct et 120 000 films et séries en 4K Ultra HD, avec une installation guidée sur WhatsApp et des tarifs en euros (€).',
              },
              {
                q: 'Comment obtenir mes identifiants IPTV France ?',
                a: 'Choisissez votre formule, écrivez-nous sur WhatsApp et notre équipe vous envoie vos identifiants IPTV France au format Xtream Codes API dans le chat. Vous recevez également une aide pas à pas pour installer l’application lecteur et charger votre liste de chaînes.',
              },
              {
                q: 'Quels lecteurs IPTV sont compatibles avec IPTV France ?',
                a: 'La plupart des lecteurs IPTV modernes prennent en charge le format Xtream Codes API. Les plus populaires pour les téléspectateurs français sont IPTV Smarters Pro, TiviMate, IBO Player Pro et XCIPTV. Notre équipe vous aide à choisir le bon pour votre appareil.',
              },
              {
                q: 'Ai-je besoin de compétences techniques pour installer IPTV France ?',
                a: 'Non. L’installation prend environ 10 minutes avec notre aide. Vous installez l’application lecteur, copiez les identifiants que nous vous envoyons sur WhatsApp, les collez dans les champs de connexion et votre liste de chaînes se charge automatiquement.',
              },
              {
                q: 'Y a-t-il un essai gratuit pour IPTV France ?',
                a: 'Oui. Écrivez-nous sur WhatsApp et nous vous envoyons un accès IPTV France en essai gratuit de 24 heures. Testez l’image 4K, vérifiez la programmation sportive et assurez-vous que tout fonctionne parfaitement sur votre connexion Internet avant de vous engager sur une formule payante.',
              },
              {
                q: 'IPTV France fonctionne-t-il sur Firestick et Smart TV ?',
                a: 'Oui. IPTV France fonctionne sur Amazon Firestick, Smart TV Samsung et LG (Tizen et webOS), Android TV, Google TV, Apple TV, iPhone, iPad, PC Windows, Mac, ainsi que sur les box MAG et Formuler. Notre équipe vous guide sur WhatsApp pour l’installation sur votre appareil.',
              },
              {
                q: 'Quelles chaînes sont incluses dans IPTV France ?',
                a: 'IPTV France inclut toutes les grandes chaînes françaises (TF1, France 2, France 3, M6, Canal+, Arte, BFM TV, CNews), les chaînes de sport en direct (beIN Sports, RMC Sport, Canal+ Sport, Eurosport, L’Équipe TV), ainsi que des milliers de chaînes internationales du Royaume-Uni, du Canada, de Belgique, de Suisse, d’Europe et du Maghreb.',
              },
              {
                q: 'Ai-je besoin d’un VPN pour utiliser IPTV France ?',
                a: 'Aucun VPN n’est requis. Nos serveurs IPTV France sont optimisés pour les connexions françaises et européennes afin d’offrir un streaming fluide et sans coupure sur votre connexion domestique. Si votre fournisseur d’accès Internet applique un bridage pendant les heures de pointe, un VPN est entièrement compatible.',
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
                  IPTV France 🇫🇷
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#0A1B33] leading-[1.05] mb-6">
                OBTENEZ IPTV FRANCE <br />
                <span className="text-[#0055A4]">DÈS AUJOURD’HUI</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#0055A4]">
                Choisissez votre formule, écrivez-nous sur WhatsApp et nous vous envoyons vos identifiants IPTV France avec une aide pas à pas pour commencer. Testez d’abord tout avec l’essai gratuit, puis passez à une formule payante uniquement quand vous êtes satisfait. Sans engagement. Sans tracas.
              </p>

              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['36K+', 'Chaînes en direct'],
                  ['120K+', 'Films et séries'],
                  ['99,99 %', 'Disponibilité serveur'],
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
                  Choisir ma formule IPTV France
                </Link>
                <Link
                  href="/essai-gratuit"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#EF4135]/40 bg-[#FFFFFF] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#EF4135] hover:bg-[#EF4135] hover:text-[#FFFFFF] transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  <PlayCircle className="h-4 w-4 shrink-0" /> Essai gratuit 24h
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#0055A4] uppercase tracking-wider">
                Livraison instantanée des identifiants • Installation guidée sur WhatsApp • Sans engagement
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}