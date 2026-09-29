'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  CheckCircle2,
  Zap,
  Crown,
  MonitorPlay,
  Gift,
  Sparkles,
  Flame,
  ShieldCheck,
  Lock,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Payment Method SVG Icons — marché français & international
// ---------------------------------------------------------------------------
const PaymentIcons = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const isDark = variant === 'dark';
  const shellBg = isDark ? '#0A1B33' : '#FFFFFF';
  const shellBorder = isDark ? '#FFCD00' : '#0055A4';

  const Shell = ({ children }: { children: React.ReactNode }) => (
    <div
      className="flex items-center justify-center h-8 w-12 rounded-md overflow-hidden shrink-0 transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: shellBg, border: `1px solid ${shellBorder}` }}
    >
      {children}
    </div>
  );

  return (
    <div className="grid grid-cols-5 gap-2 items-center">
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="22" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="900" fontStyle="italic" fill="#1434CB" letterSpacing="-0.5">VISA</text>
        </svg>
      </Shell>

      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="16" r="9" fill="#EB001B" />
          <circle cx="29" cy="16" r="9" fill="#F79E1B" />
          <path d="M24 8.5a9 9 0 000 15 9 9 0 000-15z" fill="#FF5F00" />
        </svg>
      </Shell>

      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" fontWeight="900" fontStyle="italic" fill="#003087">Pay</text>
          <text x="24" y="27" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="9" fontWeight="800" fontStyle="italic" fill="#0079C1">Pal</text>
        </svg>
      </Shell>

      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="10" fill="#F7931A" />
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="900" fill="#FFFFFF">₿</text>
        </svg>
      </Shell>

      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" fontWeight="800" fill={isDark ? '#FFFFFF' : '#5F6368'}>GPay</text>
        </svg>
      </Shell>
    </div>
  );
};

// ---------------------------------------------------------------------------
// COMPOSANT PRINCIPAL
// ---------------------------------------------------------------------------
export default function PricingSection() {
  const [devices, setDevices] = useState<1 | 2 | 3>(1);

  // Tarification FRANCE en EUR (€) — ⚠️ Remplacer par les tarifs réels avant mise en ligne
  const pricing = {
    1: {
      3: { total: 29, mo: (29 / 3).toFixed(2) },
      6: { total: 39, mo: (49 / 6).toFixed(2) },
      12: { total: 55, mo: (79 / 12).toFixed(2) },
    },
    2: {
      3: { total: 45, mo: (49 / 3).toFixed(2) },
      6: { total: 60, mo: (79 / 6).toFixed(2) },
      12: { total: 75, mo: (129 / 12).toFixed(2) },
    },
    3: {
      3: { total: 65, mo: (69 / 3).toFixed(2) },
      6: { total: 75, mo: (109 / 6).toFixed(2) },
      12: { total: 99, mo: (179 / 12).toFixed(2) },
    },
  };

  const currentPricing = pricing[devices] || pricing[1];

  const handleWhatsAppRedirect = (months: number) => {
    const selectedPrice = currentPricing[months as 3 | 6 | 12]?.total;
    const message = `Bonjour, je souhaite commander un abonnement IPTV de ${months} mois pour ${devices} ${
      devices > 1 ? 'écrans' : 'écran'
    } au tarif de ${selectedPrice} €. Merci de m’envoyer le guide d’installation pour commencer.`;
    const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFreeTrialRedirect = () => {
    const message = `Bonjour, je souhaite demander un essai gratuit pour tester la qualité de streaming 4K et la liste des chaînes sur mon appareil avant de m’abonner.`;
    const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="pricing-section"
      className="w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20 bg-[#0A1B33] text-[#FFFFFF] overflow-hidden border-t border-[#1E3A5F]"
    >
      {/* Halo tricolore ambiant */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0055A4]/30 blur-[140px] rounded-full pointer-events-none" />
      {/* Grille de fond subtile */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFFFFF08_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF08_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* En-tête de section */}
        <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-16 md:mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#FFCD00] bg-[#122A4D] px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-[#FFCD00]/10">
            <Crown className="w-4 h-4 text-[#FFCD00]" />
            <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
              Meilleures offres d’abonnement IPTV 
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tight leading-tight">
            CHOISISSEZ VOTRE <span className="text-[#FFCD00]">ABONNEMENT IPTV</span>
          </h2>
          <p className="text-base sm:text-lg text-[#FFFFFF]/70 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Fournisseur IPTV de confiance en France avec streaming 4K Ultra HD instantané. Économisez jusqu’à{' '}
            <span className="text-[#FFCD00] font-bold">50 %</span> sur les formules de 12 mois avec support multi-écrans simultanés. Activation immédiate, essai gratuit et assistance 24/7.
          </p>

          {/* Sélecteur d’écrans */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-[#FFCD00]" />
              <span className="text-xs text-[#FFFFFF]/70 font-black uppercase tracking-widest">
                Sélectionnez les écrans simultanés
              </span>
            </div>
            <div className="inline-flex bg-[#122A4D] border border-[#1E3A5F] rounded-2xl p-1.5 shadow-2xl relative">
              {[1, 2, 3].map((d) => (
                <button
                  key={d}
                  onClick={() => setDevices(d as 1 | 2 | 3)}
                  className={`px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 relative cursor-pointer ${
                    devices === d
                      ? 'bg-[#FFCD00] text-[#0A1B33] shadow-lg shadow-[#FFCD00]/40 scale-[1.03] ring-2 ring-[#FFCD00]/40'
                      : 'text-[#FFFFFF]/70 hover:text-[#FFFFFF]'
                  }`}
                >
                  {d} {d > 1 ? 'Écrans' : 'Écran'}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Grille des cartes — pt pour badge VIP */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-stretch max-w-6xl mx-auto mt-16 pt-6 relative z-10">

          {/* ============================================================
              CARTE 1 : FORMULE 3 MOIS
              ============================================================ */}
          <FadeInItem className="relative flex flex-col group h-full">
            <div className="relative bg-[#FFFFFF] text-[#0A1B33] border-2 border-[#D6DCE3] rounded-3xl overflow-hidden flex flex-col h-full shadow-xl transition-all duration-500 hover:border-[#0055A4] hover:shadow-[0_25px_60px_rgba(0,85,164,0.35)] hover:-translate-y-3">
              {/* Bande tricolore */}
              <div className="h-1.5 w-full flex shrink-0">
                <div className="flex-1 bg-[#0055A4]" />
                <div className="flex-1 bg-[#FFFFFF] ring-1 ring-inset ring-[#D6DCE3]" />
                <div className="flex-1 bg-[#EF4135]" />
              </div>

              <div className="p-6 sm:p-8 flex flex-col h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0055A4]/0 to-[#0055A4]/0 group-hover:from-[#0055A4]/5 group-hover:to-[#0055A4]/10 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* En-tête */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-black text-[#0055A4] uppercase tracking-[0.2em]">
                      Formule Découverte
                    </h3>
                    <MonitorPlay className="w-5 h-5 text-[#0055A4] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                  </div>

                  <div className="text-3xl font-black text-[#0A1B33] mb-5 tracking-tighter uppercase">
                    3 Mois
                  </div>

                  {/* 🔵 BLOC PRIX avec bordure et fond */}
                  <div className="relative mb-4 rounded-2xl border-2 border-[#D6DCE3] bg-[#EEEEEE] p-4 transition-all duration-500 group-hover:border-[#0055A4] group-hover:bg-gradient-to-br group-hover:from-[#0055A4]/5 group-hover:to-[#0055A4]/15 group-hover:shadow-[0_10px_30px_rgba(0,85,164,0.20)]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-[#0A1B33] tracking-tighter transition-all duration-500 group-hover:text-[#0055A4] group-hover:scale-[1.04] origin-left">
                        {currentPricing[3]?.total || 0} €
                      </span>
                    </div>
                    <div className="text-[11px] font-black text-[#0055A4] mt-2 uppercase tracking-widest">
                      {currentPricing[3]?.mo || 0} € / mois
                    </div>
                  </div>

                  {/* 🔵 BOUTON juste sous le prix */}
                  <button
                    type="button"
                    onClick={() => handleWhatsAppRedirect(3)}
                    aria-label="Choisir la formule 3 mois"
                    className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#004A8F] transition-all shadow-lg shadow-[#0055A4]/40 active:scale-95 group-hover:shadow-[0_15px_35px_rgba(0,85,164,0.5)] cursor-pointer select-none mb-6"
                  >
                    Choisir 3 Mois
                  </button>

                  {/* Séparateur */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="h-px flex-1 bg-[#D6DCE3]" />
                    <span className="text-[9px] font-black text-[#0A1B33]/40 uppercase tracking-[0.2em]">
                      Ce qui est inclus
                    </span>
                    <div className="h-px flex-1 bg-[#D6DCE3]" />
                  </div>

                  {/* Caractéristiques */}
                  <ul className="w-full space-y-3.5 flex-grow mb-6">
                    {[
                      `${devices} ${devices > 1 ? 'Écrans simultanés' : 'Écran simultané'}`,
                      'Flux sportifs 4K Ultra HD & 60 FPS',
                      '36 000+ chaînes en direct internationales',
                      '120 000+ films et séries (mise à jour quotidienne)',
                      'Ligue 1, Ligue des Champions, NBA, F1 & PPV',
                      'Replay 7 jours & guide EPG complet',
                      'Serveurs anti-freeze optimisés pour la France',
                      'Smart TV, Firestick, iOS, Android, Shield',
                      'Assistance prioritaire 24/7',
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-[#0A1B33]/75 text-sm font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#0055A4] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Badge activation */}
                  <div className="mb-5 p-3 bg-[#0055A4]/10 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#FFCD00]/20">
                    <Zap className="w-4 h-4 text-[#0055A4] shrink-0" />
                    <span className="text-[11px] font-black text-[#0A1B33] uppercase tracking-wider">
                      Activation instantanée • 99,9 % de disponibilité
                    </span>
                  </div>

                  {/* Paiements — fin de carte */}
                  <div className="pt-4 border-t border-[#D6DCE3]">
                    <div className="flex items-center justify-between text-[10px] font-black text-[#0A1B33]/60 uppercase tracking-widest mb-3">
                      <span>Paiements acceptés</span>
                      <Lock className="w-3 h-3 text-[#0A1B33]/60" />
                    </div>
                    <PaymentIcons variant="light" />
                  </div>
                </div>
              </div>
            </div>
          </FadeInItem>

          {/* ============================================================
              CARTE 2 : FORMULE 12 MOIS VIP
              ============================================================ */}
          <FadeInItem className="relative flex flex-col group h-full lg:-translate-y-4 z-20">
            {/* Badge "Le plus populaire" flottant au-dessus */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap pointer-events-none">
              <div className="bg-[#FFCD00] text-[#0A1B33] text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full flex items-center gap-1.5 shadow-[0_10px_30px_rgba(255,205,0,0.5)] border-2 border-[#0A1B33]">
                <Flame className="w-3.5 h-3.5 fill-current text-[#0A1B33]" /> Le plus populaire en France
              </div>
            </div>

            <div className="relative bg-[#122A4D] text-[#FFFFFF] border-2 border-[#FFCD00] rounded-3xl overflow-hidden flex flex-col h-full shadow-[0_0_50px_rgba(255,205,0,0.3)] transition-all duration-500 group-hover:shadow-[0_0_70px_rgba(255,205,0,0.55)] group-hover:-translate-y-2">
              {/* Bande tricolore */}
              <div className="h-1.5 w-full flex shrink-0">
                <div className="flex-1 bg-[#0055A4]" />
                <div className="flex-1 bg-[#FFFFFF]" />
                <div className="flex-1 bg-[#EF4135]" />
              </div>

              <div className="p-6 sm:p-8 flex flex-col h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFCD00]/0 to-[#FFCD00]/0 group-hover:from-[#FFCD00]/5 group-hover:to-[#FFCD00]/10 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* En-tête */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-black text-[#FFCD00] uppercase tracking-[0.2em] flex items-center gap-1.5">
                      <Crown className="w-4 h-4 text-[#FFCD00]" /> VIP Ultime
                    </h3>
                    <Sparkles className="w-4 h-4 text-[#FFCD00] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                  </div>

                  <div className="text-3xl font-black text-[#FFCD00] mb-4 tracking-tighter uppercase">
                    12 Mois
                  </div>

                  {/* Badge économie */}
                  <div className="mb-4 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#EF4135] text-[#FFFFFF] text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#EF4135]/40">
                    <Flame className="w-3 h-3 fill-current" /> Économisez 50 % aujourd’hui
                  </div>

                  {/* 🟡 BLOC PRIX avec bordure et fond */}
                  <div className="relative mb-4 rounded-2xl border-2 border-[#FFCD00]/40 bg-[#0A1B33] p-4 transition-all duration-500 group-hover:border-[#FFCD00] group-hover:bg-gradient-to-br group-hover:from-[#FFCD00]/5 group-hover:to-[#FFCD00]/15 group-hover:shadow-[0_10px_30px_rgba(255,205,0,0.35)]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-black text-[#FFCD00] tracking-tighter drop-shadow-[0_0_20px_rgba(255,205,0,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_35px_rgba(255,205,0,0.9)] group-hover:scale-[1.04] origin-left">
                        {currentPricing[12]?.total || 0} €
                      </span>
                    </div>
                    <div className="text-[11px] font-black text-[#FFCD00] mt-2 uppercase tracking-widest">
                      MEILLEUR TARIF : {currentPricing[12]?.mo || 0} € / mois
                    </div>
                  </div>

                  {/* 🟡 BOUTON juste sous le prix */}
                  <button
                    type="button"
                    onClick={() => handleWhatsAppRedirect(12)}
                    aria-label="Obtenir la formule 12 mois VIP"
                    className="w-full text-center whitespace-nowrap px-6 py-4 sm:py-5 rounded-full bg-[#FFCD00] text-[#0A1B33] font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#E5B800] transition-all shadow-xl shadow-[#FFCD00]/30 active:scale-95 group-hover:shadow-[0_15px_40px_rgba(255,205,0,0.6)] cursor-pointer select-none mb-6"
                  >
                    Obtenir 12 Mois VIP
                  </button>

                  {/* Séparateur */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="h-px flex-1 bg-[#FFCD00]/30" />
                    <span className="text-[9px] font-black text-[#FFCD00]/70 uppercase tracking-[0.2em]">
                      Ce qui est inclus
                    </span>
                    <div className="h-px flex-1 bg-[#FFCD00]/30" />
                  </div>

                  {/* Caractéristiques */}
                  <ul className="w-full space-y-3.5 flex-grow mb-6">
                    {[
                      `${devices} ${devices > 1 ? 'Écrans simultanés' : 'Écran simultané'}`,
                      'Qualité Ultra HD 4K & Full HD pure',
                      '36 000+ chaînes premium en direct',
                      '120 000+ films et séries (mise à jour quotidienne)',
                      'Ligue 1, Ligue des Champions, UFC, boxe & tous les PPV',
                      'Replay 7 jours & guide électronique des programmes',
                      'Ligne serveur dédiée optimisée pour la France',
                      'Smart TV, Firestick, Apple TV, iOS, Android',
                      'Assistance VIP prioritaire 24/7',
                    ].map((feature, idx) => (
                      <li key={feature} className="flex items-center gap-3 text-[#FFFFFF] font-semibold text-sm">
                        <div className="bg-[#FFCD00]/20 p-0.5 rounded-full border border-[#FFCD00]/40 shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-[#FFCD00]" />
                        </div>
                        <span className="text-[#FFFFFF]">{feature}</span>
                        {idx === 4 && (
                          <span className="bg-[#EF4135]/30 text-[#FFFFFF] text-[9px] font-black uppercase px-2 py-0.5 rounded ml-auto border border-[#EF4135]/60">
                            Tous PPV
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Badge ligne prioritaire */}
                  <div className="mb-5 p-3 bg-[#FFCD00]/10 border border-[#FFCD00]/30 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#FFCD00]/20">
                    <Crown className="w-4 h-4 text-[#FFCD00] shrink-0" />
                    <span className="text-[11px] font-black text-[#FFCD00] uppercase tracking-wider">
                      Ligne serveur prioritaire incluse
                    </span>
                  </div>

                  {/* Paiements — fin de carte */}
                  <div className="pt-4 border-t border-[#FFCD00]/20">
                    <div className="flex items-center justify-between text-[10px] font-black text-[#FFCD00]/80 uppercase tracking-widest mb-3">
                      <span>Paiements acceptés</span>
                      <Lock className="w-3 h-3 text-[#FFCD00]" />
                    </div>
                    <PaymentIcons variant="dark" />
                  </div>
                </div>
              </div>
            </div>
          </FadeInItem>

          {/* ============================================================
              CARTE 3 : FORMULE 6 MOIS
              ============================================================ */}
          <FadeInItem className="relative flex flex-col group h-full">
            <div className="relative bg-[#FFFFFF] text-[#0A1B33] border-2 border-[#D6DCE3] rounded-3xl overflow-hidden flex flex-col h-full shadow-xl transition-all duration-500 hover:border-[#0055A4] hover:shadow-[0_25px_60px_rgba(0,85,164,0.35)] hover:-translate-y-3">
              <div className="h-1.5 w-full flex shrink-0">
                <div className="flex-1 bg-[#0055A4]" />
                <div className="flex-1 bg-[#FFFFFF] ring-1 ring-inset ring-[#D6DCE3]" />
                <div className="flex-1 bg-[#EF4135]" />
              </div>

              <div className="p-6 sm:p-8 flex flex-col h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0055A4]/0 to-[#0055A4]/0 group-hover:from-[#0055A4]/5 group-hover:to-[#0055A4]/10 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-black text-[#0055A4] uppercase tracking-[0.2em]">
                      Formule Standard
                    </h3>
                    <MonitorPlay className="w-5 h-5 text-[#0055A4] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                  </div>

                  <div className="text-3xl font-black text-[#0A1B33] mb-5 tracking-tighter uppercase">
                    6 Mois
                  </div>

                  {/* 🔵 BLOC PRIX avec bordure et fond */}
                  <div className="relative mb-4 rounded-2xl border-2 border-[#D6DCE3] bg-[#EEEEEE] p-4 transition-all duration-500 group-hover:border-[#0055A4] group-hover:bg-gradient-to-br group-hover:from-[#0055A4]/5 group-hover:to-[#0055A4]/15 group-hover:shadow-[0_10px_30px_rgba(0,85,164,0.20)]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-[#0A1B33] tracking-tighter transition-all duration-500 group-hover:text-[#0055A4] group-hover:scale-[1.04] origin-left">
                        {currentPricing[6]?.total || 0} €
                      </span>
                    </div>
                    <div className="text-[11px] font-black text-[#0055A4] mt-2 uppercase tracking-widest">
                      {currentPricing[6]?.mo || 0} € / mois
                    </div>
                  </div>

                  {/* 🔵 BOUTON juste sous le prix */}
                  <button
                    type="button"
                    onClick={() => handleWhatsAppRedirect(6)}
                    aria-label="Choisir la formule 6 mois"
                    className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#004A8F] transition-all shadow-lg shadow-[#0055A4]/40 active:scale-95 group-hover:shadow-[0_15px_35px_rgba(0,85,164,0.5)] cursor-pointer select-none mb-6"
                  >
                    Choisir 6 Mois
                  </button>

                  {/* Séparateur */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="h-px flex-1 bg-[#D6DCE3]" />
                    <span className="text-[9px] font-black text-[#0A1B33]/40 uppercase tracking-[0.2em]">
                      Ce qui est inclus
                    </span>
                    <div className="h-px flex-1 bg-[#D6DCE3]" />
                  </div>

                  {/* Caractéristiques */}
                  <ul className="w-full space-y-3.5 flex-grow mb-6">
                    {[
                      `${devices} ${devices > 1 ? 'Écrans simultanés' : 'Écran simultané'}`,
                      'Flux sportifs 4K Ultra HD & 60 FPS',
                      '36 000+ chaînes en direct internationales',
                      '120 000+ films et séries (mise à jour quotidienne)',
                      'Ligue 1, Ligue des Champions, NBA, F1 & PPV',
                      'Replay 7 jours & guide EPG complet',
                      'Serveurs anti-freeze optimisés pour la France',
                      'Smart TV, Firestick, iOS, Android, Shield',
                      'Assistance prioritaire 24/7',
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-[#0A1B33]/75 text-sm font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#0055A4] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Badge activation */}
                  <div className="mb-5 p-3 bg-[#0055A4]/10 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#FFCD00]/20">
                    <Zap className="w-4 h-4 text-[#0055A4] shrink-0" />
                    <span className="text-[11px] font-black text-[#0A1B33] uppercase tracking-wider">
                      Activation instantanée • 99,9 % de disponibilité
                    </span>
                  </div>

                  {/* Paiements — fin de carte */}
                  <div className="pt-4 border-t border-[#D6DCE3]">
                    <div className="flex items-center justify-between text-[10px] font-black text-[#0A1B33]/60 uppercase tracking-widest mb-3">
                      <span>Paiements acceptés</span>
                      <Lock className="w-3 h-3 text-[#0A1B33]/60" />
                    </div>
                    <PaymentIcons variant="light" />
                  </div>
                </div>
              </div>
            </div>
          </FadeInItem>

        </FadeInStagger>

        {/* Bannière Essai Gratuit */}
        <FadeIn className="max-w-2xl mx-auto mt-16 relative z-30">
          <div className="bg-[#122A4D] border border-[#FFCD00]/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl relative overflow-hidden group hover:border-[#FFCD00] transition-all duration-500">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#FFCD00]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-4 text-left relative z-10">
              <div className="bg-[#FFCD00]/15 border border-[#FFCD00]/40 p-3 rounded-xl text-[#FFCD00] shrink-0 hidden sm:block transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#FFCD00]" />
                  <h4 className="text-base font-black text-[#FFFFFF] uppercase tracking-tight">
                    Essai gratuit IPTV 
                  </h4>
                </div>
                <p className="text-xs text-[#FFFFFF]/70 font-medium">
                  Testez le streaming 4K sur votre propre appareil avant de vous engager. Notre équipe d’assistance vous accompagne pour être en ligne en quelques minutes.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-auto shrink-0 relative z-10">
              <button
                type="button"
                onClick={handleFreeTrialRedirect}
                aria-label="Demander un essai gratuit"
                className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-3 rounded-full bg-[#EF4135] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#D63528] transition-all shadow-lg active:scale-95 hover:scale-105 shadow-[#EF4135]/40 cursor-pointer select-none"
              >
                Demander un essai gratuit
              </button>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}