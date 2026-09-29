'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PricingSection from '../components/PricingSection';
import ShareButtons from '../components/ShareButtons';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import {
  ShieldCheck,
  Zap,
  ChevronDown,
  CreditCard,
  Award,
  Globe,
  Server,
  Trophy,
  Tv,
  Film,
  MonitorPlay,
  Wifi,
  Calendar,
  Lock,
  ThumbsUp,
  Sparkles,
  Headphones,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Drapeaux SVG — France, Canada, Belgique, Suisse, Luxembourg, Monaco
// ---------------------------------------------------------------------------
const FlagFR = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-fr"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-fr)">
      <rect width="32" height="32" fill="#FFFFFF" />
      <rect width="10.67" height="32" fill="#0055A4" />
      <rect x="21.33" width="10.67" height="32" fill="#EF4135" />
    </g>
  </svg>
);

const FlagCA = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-ca"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-ca)">
      <rect width="32" height="32" fill="#FFFFFF" />
      <rect width="8" height="32" fill="#D80621" />
      <rect x="24" width="8" height="32" fill="#D80621" />
      <path fill="#D80621" d="M16 7l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 18l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 7z" />
    </g>
  </svg>
);

const FlagBE = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-be"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-be)">
      <rect width="10.67" height="32" fill="#000" />
      <rect x="10.67" width="10.67" height="32" fill="#FDDA24" />
      <rect x="21.33" width="10.67" height="32" fill="#EF3340" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-ch)">
      <rect width="32" height="32" fill="#DA291C" />
      <rect x="14" y="8" width="4" height="16" fill="#FFF" />
      <rect x="8" y="14" width="16" height="4" fill="#FFF" />
    </g>
  </svg>
);

const FlagLU = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-lu"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-lu)">
      <rect width="32" height="10.67" fill="#EF3340" />
      <rect y="10.67" width="32" height="10.67" fill="#FFFFFF" />
      <rect y="21.33" width="32" height="10.67" fill="#00A2E1" />
    </g>
  </svg>
);

const FlagMC = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-mc"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-mc)">
      <rect width="32" height="16" fill="#CE1126" />
      <rect y="16" width="32" height="16" fill="#FFFFFF" />
    </g>
  </svg>
);

// ---------------------------------------------------------------------------
// Élément FAQ — Accordéon (palette page d’accueil)
// ---------------------------------------------------------------------------
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full text-left bg-[#FFFFFF] border-2 ${
        isOpen ? 'border-[#FFCD00]' : 'border-[#D6DCE3]'
      } rounded-2xl p-6 hover:border-[#0055A4]/60 shadow-lg transition-all duration-300 group cursor-pointer`}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center gap-4">
        <h3
          className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${
            isOpen ? 'text-[#0A1B33]' : 'text-[#0A1B33] group-hover:text-[#0055A4]'
          } flex items-center gap-3`}
        >
          <span
            className={`${
              isOpen ? 'text-[#0055A4]' : 'text-[#0A1B33]/30'
            } font-black text-2xl`}
          >
            Q.
          </span>
          {question}
        </h3>
        <ChevronDown
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen
              ? 'rotate-180 text-[#0055A4]'
              : 'text-[#0A1B33]/30 group-hover:text-[#0055A4]/50'
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[#0055A4] font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#0055A4] ml-2 py-2">
          {answer}
        </p>
      </div>
    </button>
  );
}

// ---------------------------------------------------------------------------
// PAGE TARIFICATION
// ---------------------------------------------------------------------------
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0A1B33] flex flex-col">

      {/* ==========================================================
          SECTION HERO
      ========================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-2.webp"
            alt="Formules d’abonnement IPTV et tarifs en euros pour la France"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover brightness-[0.2]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#0A1B33]/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05101F] via-transparent to-[#0A1B33]/0" />
        </div>

        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0055A4 1px, transparent 1px),
              linear-gradient(to bottom, #0055A4 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0055A4]/20 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#122A4D] px-4 py-2 rounded-full mb-6 shadow-md border border-[#FFCD00]/40">
                <Sparkles className="w-4 h-4 text-[#FFCD00]" />
                <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
                  Meilleures formules d’abonnement IPTV 2026 🇫🇷
                </span>
              </div>
            </FadeInItem>

            <FadeInItem>
              <h1 className="text-5xl md:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none text-center">
                FORMULES D’ABONNEMENT IPTV <br />
                <span className="text-[#FFCD00]">ET MEILLEURS TARIFS</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed px-2 text-center mb-6">
                Profitez de plus de 36 000 chaînes en direct et 120 000 films et séries en 4K sur tous vos appareils. Essayez d’abord gratuitement, bénéficiez d’une activation instantanée et payez en euros (€) sans tracas.
              </p>
            </FadeInItem>

            <FadeInItem>
              <div className="w-full flex items-center justify-center mb-8">
                <div className="inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-2.5 sm:gap-4 px-4 py-2 rounded-full bg-[#122A4D]/80 border border-[#1E3A5F] shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagFR />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#FFFFFF]">France</span>
                  </div>

                  <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagCA />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#FFFFFF]">Canada</span>
                  </div>

                  <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagBE />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#FFFFFF]">Belgique</span>
                  </div>

                  <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagCH />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#FFFFFF]">Suisse</span>
                  </div>

                  <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagLU />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#FFFFFF]">Luxembourg</span>
                  </div>

                  <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagMC />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#FFFFFF]">Monaco</span>
                  </div>
                </div>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-6 text-[#FFFFFF]/60 text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#FFCD00]" /> Activation instantanée
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FFCD00]" /> Installation guidée
                </span>
                <span className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-[#FFCD00]" /> Essai gratuit d’abord
                </span>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          CARTES DE TARIFICATION PRINCIPALES
      ========================================================== */}
      <div className="w-full relative z-20 bg-[#0A1B33] py-12" id="pricing-section">
        <PricingSection />
      </div>

      {/* ==========================================================
          GRILLE DE FONCTIONNALITÉS — SECTION CLAIRE
      ========================================================== */}
      <section className="py-24 bg-[#EEEEEE] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0A1B33] mb-4 uppercase tracking-tighter leading-none">
              Tout inclus dans <span className="text-[#0055A4]">chaque formule</span>
            </h2>
            <p className="text-[#0A1B33]/70 text-lg font-bold max-w-2xl mx-auto mt-4">
              Chaque abonnement IPTV inclut ces fonctionnalités premium par défaut.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tv,
                title: '36 000+ chaînes en direct',
                desc: `Sport, informations, divertissement et chaînes françaises et internationales de plus de 50 pays.`,
              },
              {
                icon: Film,
                title: '120 000+ films et séries',
                desc: `Les derniers films, séries complètes et documentaires mis à jour quotidiennement dans la bibliothèque à la demande.`,
              },
              {
                icon: MonitorPlay,
                title: 'Qualité 4K et 60 FPS',
                desc: `Streaming d’une netteté exceptionnelle sur les chaînes et appareils compatibles, sans mise en mémoire tampon.`,
              },
              {
                icon: Wifi,
                title: 'Technologie anti-freeze',
                desc: 'Visionnage sans coupure grâce à l’optimisation avancée des flux et à des répartiteurs de charge dédiés.',
              },
              {
                icon: Calendar,
                title: 'Guide TV EPG complet',
                desc: 'Guide interactif des programmes sur 7 jours couvrant toutes les chaînes françaises et internationales.',
              },
              {
                icon: Trophy,
                title: 'Événements PPV inclus',
                desc: 'Tous les grands combats UFC, boxe, Ligue 1, Ligue des Champions et PPV sans coût supplémentaire.',
              },
              {
                icon: Globe,
                title: 'Couverture France entière',
                desc: 'Serveurs optimisés pour la France et l’Europe afin de réduire la latence sur les retransmissions sportives.',
              },
              {
                icon: Server,
                title: 'Disponibilité serveur 99,9 %',
                desc: 'Infrastructure professionnelle avec serveurs de secours redondants pour une stabilité garantie.',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-[#FFFFFF] border-2 border-[#D6DCE3] rounded-2xl p-6 hover:border-[#0055A4] shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0055A4]/15 flex items-center justify-center mb-4 group-hover:bg-[#0055A4]/25 transition-colors">
                    <Icon className="w-6 h-6 text-[#0A1B33]" />
                  </div>
                  <h3 className="font-black text-[#0A1B33] uppercase tracking-wide text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#0055A4] text-sm font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          TABLEAU COMPARATIF — SECTION MARINE
      ========================================================== */}
      <section className="py-24 bg-[#0A1B33] border-y border-[#1E3A5F] w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tighter">
              Comparez <span className="text-[#FFCD00]">les formules d’abonnement IPTV</span>
            </h2>
            <p className="text-[#FFFFFF]/60 text-base font-bold uppercase tracking-widest mt-2">
              Trouvez la formule parfaite pour vos besoins de streaming
            </p>
          </FadeIn>

          <div className="overflow-x-auto bg-[#FFFFFF] border-2 border-[#0055A4]/50 rounded-3xl p-4 md:p-6 shadow-2xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#0A1B33]/10">
                  <th className="text-left p-4 text-[#0A1B33] font-black uppercase tracking-wider text-base md:text-lg">
                    Caractéristique
                  </th>
                  <th className="text-center p-4 text-[#0055A4] font-black uppercase tracking-wider text-base md:text-lg">
                    3 Mois
                  </th>
                  <th className="text-center p-4 text-[#0055A4] font-black uppercase tracking-wider text-base md:text-lg bg-[#0A1B33]/5 rounded-t-xl">
                    12 Mois (VIP)
                  </th>
                  <th className="text-center p-4 text-[#0055A4] font-black uppercase tracking-wider text-base md:text-lg">
                    6 Mois
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0A1B33]/5">
                {[
                  { feature: 'Chaînes en direct', basic: '36 000+', pro: '36 000+ VIP', premium: '36 000+' },
                  { feature: 'Films et séries', basic: '120 000+', pro: '120 000+ (mises à jour quotidiennes)', premium: '120 000+' },
                  { feature: 'Streaming 4K et 60 FPS', basic: 'Oui', pro: 'Oui (débit ultra)', premium: 'Oui' },
                  { feature: 'Sport en direct et PPV', basic: 'Inclus', pro: 'Tous les PPV + flux VIP', premium: 'Inclus' },
                  { feature: 'EPG et replay', basic: 'EPG standard', pro: 'Replay 7 jours + EPG', premium: 'EPG complet' },
                  { feature: 'Technologie anti-freeze', basic: 'Standard', pro: 'Routage prioritaire VIP', premium: 'Avancée' },
                  { feature: 'Compatible VPN', basic: 'Oui (non requis)', pro: '100 % compatible', premium: 'Oui' },
                  { feature: 'Nombre d’écrans', basic: '1 ou 2 écrans', pro: '1, 2 ou 3 écrans', premium: '1 ou 2 écrans' },
                  { feature: 'Assistance client', basic: 'Assistance 24/7', pro: 'Priorité VIP 24/7', premium: 'Assistance prioritaire' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#0A1B33]/[0.02] transition-colors">
                    <td className="p-4 text-[#0A1B33] font-black uppercase text-sm">{row.feature}</td>
                    <td className="p-4 text-center text-[#0A1B33]/70 font-bold text-sm">{row.basic}</td>
                    <td className="p-4 text-center text-[#0055A4] font-black text-sm bg-[#0A1B33]/[0.02]">{row.pro}</td>
                    <td className="p-4 text-center text-[#0A1B33]/70 font-bold text-sm">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==========================================================
          BADGES DE CONFIANCE — SECTION MARINE ALTERNÉE
      ========================================================== */}
      <section className="py-24 bg-[#122A4D] w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCD00]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0055A4]/25 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tighter">
              Pourquoi choisir <span className="text-[#FFCD00]">cet abonnement IPTV</span>
            </h2>
            <p className="text-[#FFFFFF]/85 text-lg font-bold max-w-2xl mx-auto mt-4">
              Plus de 50 000 téléspectateurs satisfaits en France, de Paris à Marseille.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#FFFFFF] border-2 border-[#FFCD00]/30 rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#0055A4]/15 flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-[#0A1B33]" />
              </div>
              <h4 className="text-xl font-black text-[#0A1B33] mb-2 uppercase tracking-wide">
                Paiements sécurisés
              </h4>
              <p className="text-[#0055A4] text-sm font-medium">
                Transactions chiffrées par carte bancaire, PayPal et crypto avec protection SSL 256 bits.
              </p>
            </FadeInItem>

            <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#FFFFFF] border-2 border-[#FFCD00]/30 rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#0055A4]/15 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-[#0A1B33]" />
              </div>
              <h4 className="text-xl font-black text-[#0A1B33] mb-2 uppercase tracking-wide">
                Activation instantanée
              </h4>
              <p className="text-[#0055A4] text-sm font-medium">
                Recevez vos identifiants instantanément et commencez à regarder en quelques minutes.
              </p>
            </FadeInItem>

            <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#FFFFFF] border-2 border-[#FFCD00]/30 rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#0055A4]/15 flex items-center justify-center mb-4">
                <CreditCard className="w-8 h-8 text-[#0A1B33]" />
              </div>
              <h4 className="text-xl font-black text-[#0A1B33] mb-2 uppercase tracking-wide">
                Essai gratuit d’abord
              </h4>
              <p className="text-[#0055A4] text-sm font-medium">
                Testez notre service IPTV sur votre propre appareil et connexion avant de payer.
              </p>
            </FadeInItem>

            <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#FFFFFF] border-2 border-[#FFCD00]/30 rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#0055A4]/15 flex items-center justify-center mb-4">
                <Headphones className="w-8 h-8 text-[#0A1B33]" />
              </div>
              <h4 className="text-xl font-black text-[#0A1B33] mb-2 uppercase tracking-wide">
                Assistance 24/7
              </h4>
              <p className="text-[#0055A4] text-sm font-medium">
                De vraies personnes disponibles 24h/24 pour vous aider sur l’installation, le streaming ou toute autre question.
              </p>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          BANNIÈRE ESSAI GRATUIT — SECTION MARINE
      ========================================================== */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0A1B33] w-full">
        <div className="bg-[#FFFFFF] border-2 border-[#0055A4]/40 rounded-3xl p-8 md:p-10 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-[#122A4D] px-4 py-2 rounded-full mb-4 shadow-md border border-[#FFCD00]/40">
            <Award className="w-4 h-4 text-[#FFCD00]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
              Essayez avant de payer 🇫🇷
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-[#0A1B33] uppercase tracking-tight mb-3">
            Essai gratuit d’abord
          </h3>
          <p className="text-[#0055A4] max-w-2xl mx-auto text-sm md:text-base font-bold leading-relaxed">
            Demandez un essai gratuit et nous vous configurons tout pour tester la qualité d’image 4K, vérifier la liste des sports et vous assurer que tout fonctionne parfaitement sur votre appareil et votre connexion Internet. Passez à un abonnement IPTV payant uniquement quand vous êtes satisfait.
          </p>
        </div>
      </section>

      {/* ==========================================================
          FAQ — SECTION CLAIRE
      ========================================================== */}
      <section className="w-full bg-[#EEEEEE] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#0055A4]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0A1B33] mb-6 uppercase tracking-tighter">
              Questions <span className="text-[#0055A4]">fréquentes</span>
            </h2>
            <p className="text-[#0A1B33]/70 font-bold text-lg">
              Tout ce que vous devez savoir sur nos formules d’abonnement IPTV, nos tarifs et l’installation.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4 relative z-10">
            <FAQItem
              question="Quels moyens de paiement acceptez-vous ?"
              answer="Nous acceptons toutes les cartes bancaires principales (Visa, Mastercard, American Express), PayPal et les cryptomonnaies (Bitcoin, Ethereum, USDT). Tous les tarifs sont en euros (€) et chaque paiement est traité via des connexions chiffrées SSL 256 bits."
            />
            <FAQItem
              question="Puis-je mettre à niveau ou modifier mon abonnement IPTV plus tard ?"
              answer="Oui, vous pouvez mettre à niveau à tout moment pour ajouter des écrans ou passer à une période plus longue. Contactez simplement notre équipe d’assistance et nous ajusterons votre compte immédiatement."
            />
            <FAQItem
              question="Y a-t-il un engagement ou un renouvellement automatique ?"
              answer="Non. Il n’y a aucun engagement à long terme ni renouvellement automatique. Chaque formule est un paiement unique prépayé qui s’arrête de lui-même à la fin de la période."
            />
            <FAQItem
              question="Que se passe-t-il à l’expiration de mon abonnement ?"
              answer="Nous vous enverrons un rappel avant la fin de votre abonnement IPTV. Vous pourrez le renouveler facilement auprès de notre équipe d’assistance. Si vous décidez de ne pas renouveler, le service s’arrête automatiquement sans aucune obligation."
            />
            <FAQItem
              question="Proposez-vous un essai gratuit avant de m’engager ?"
              answer="Oui. Demandez un essai gratuit et nous vous configurons tout pour tester la qualité d’image 4K et la liste des chaînes sur votre propre appareil et connexion Internet. Passez à un abonnement IPTV payant uniquement quand vous êtes satisfait."
            />
            <FAQItem
              question="Puis-je utiliser le service sur plusieurs appareils en même temps ?"
              answer="Oui, selon la formule choisie. Vous pouvez sélectionner 1, 2 ou 3 écrans simultanés lors de la commande pour regarder dans plusieurs pièces à la fois. Chaque membre du foyer peut regarder ce qu’il souhaite."
            />
            <FAQItem
              question="Y a-t-il des réductions pour les abonnements plus longs ?"
              answer="Oui. Les formules de 12 mois offrent les économies les plus importantes, jusqu’à 50 % de réduction par rapport aux formules courtes. C’est l’option la plus avantageuse pour un foyer qui sait qu’il restera fidèle."
            />
            <FAQItem
              question="Ai-je besoin d’un VPN pour utiliser ce service IPTV ?"
              answer="Aucun VPN n’est requis. Nos serveurs sont optimisés pour les connexions françaises et européennes afin d’offrir un streaming fluide et sans coupure sur votre connexion domestique."
            />
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          BOUTONS DE PARTAGE
      ========================================================== */}
      <div className="w-full flex justify-center items-center py-12 bg-[#0A1B33]">
        <ShareButtons />
      </div>

      {/* ==========================================================
          APPEL À L’ACTION FINAL — SECTION MARINE ALTERNÉE
      ========================================================== */}
      <section className="py-20 bg-[#122A4D] border-t border-[#FFCD00]/20 w-full relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFCD00]/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0055A4]/30 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tight">
              Prêt à commencer à regarder ?
            </h2>
            <p className="text-[#FFFFFF]/85 font-bold text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez plus de 50 000 téléspectateurs satisfaits en France. Choisissez votre formule, bénéficiez d’une activation instantanée et testez tout avec un essai gratuit d’abord.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="#pricing-section"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#FFCD00] text-[#0A1B33] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,205,0,0.3)] border-2 border-[#0A1B33]/30 hover:bg-[#E5B800]"
              >
                Choisir ma formule
              </Link>
              <Link
                href="/firestick-setup"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#0A1B33] text-[#FFFFFF] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 border-2 border-[#0A1B33]"
              >
                Guide d’installation
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-[#FFFFFF]/70 text-xs font-black uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#FFCD00]" /> Activation instantanée
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#FFCD00]" /> Paiement sécurisé
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-[#FFCD00]" /> Carte, PayPal et crypto
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}