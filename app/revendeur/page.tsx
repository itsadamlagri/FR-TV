'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Globe,
  Headphones,
  LayoutDashboard,
  MessageCircle,
  Package,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
  Zap,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const YEAR = new Date().getFullYear();

// ===========================================================================
// SYSTÈME DE DEVISES (Europe-first)
// ===========================================================================
type CurrencyCode = 'EUR' | 'CHF' | 'CAD';

const CURRENCIES: Record<
  CurrencyCode,
  { code: CurrencyCode; label: string; symbol: string; eurRate: number }
> = {
  EUR: { code: 'EUR', label: 'EUR', symbol: '€', eurRate: 1 },
  CHF: { code: 'CHF', label: 'CHF', symbol: 'CHF ', eurRate: 0.95 },
  CAD: { code: 'CAD', label: 'CAD', symbol: 'CA$', eurRate: 1.48 },
};

const CURRENCY_ORDER: CurrencyCode[] = ['EUR', 'CHF', 'CAD'];

const formatPrice = (eurAmount: number, currency: CurrencyCode): string => {
  const { symbol, eurRate } = CURRENCIES[currency];
  const converted = Math.round(eurAmount * eurRate);
  return `${symbol}${converted.toLocaleString('fr-FR')}`;
};

// ===========================================================================
// PALIERS DE TARIFICATION (marché France)
// ===========================================================================
interface PricingTier {
  name: string;
  tag: string;
  years: number;
  credits: number;
  wholesaleEUR: number;
  perYearEUR: number;
  retailMinEUR: number;
  retailMaxEUR: number;
  highlighted: boolean;
  features: string[];
  waMessage: string;
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    tag: '10 ans',
    years: 10,
    credits: 10,
    wholesaleEUR: 299,
    perYearEUR: 30,
    retailMinEUR: 60,
    retailMaxEUR: 120,
    highlighted: false,
    features: [
      '10 crédits revendeur (10 ans)',
      'Accès complet au panneau revendeur',
      'Activation instantanée par client',
      'Assistance WhatsApp 24/7',
      'Crédits sans expiration',
      'Générateur d’essais gratuit',
      'Prêt pour l’intégration de paiement',
    ],
    waMessage: 'Bonjour ! Je souhaite le pack revendeur Starter (10 ans / 299 €).',
  },
  {
    name: 'Growth',
    tag: '20 ans',
    years: 20,
    credits: 20,
    wholesaleEUR: 549,
    perYearEUR: 27,
    retailMinEUR: 60,
    retailMaxEUR: 120,
    highlighted: true,
    features: [
      '20 crédits revendeur (20 ans)',
      'Accès complet au panneau revendeur',
      'Activation instantanée par client',
      'Assistance WhatsApp prioritaire',
      'Crédits sans expiration',
      'Générateur d’essais gratuit',
      'Tarification personnalisée par client',
      'Accès API inclus',
    ],
    waMessage: 'Bonjour ! Je souhaite le pack revendeur Growth (20 ans / 549 €).',
  },
  {
    name: 'Pro',
    tag: '30 ans',
    years: 30,
    credits: 30,
    wholesaleEUR: 749,
    perYearEUR: 25,
    retailMinEUR: 60,
    retailMaxEUR: 120,
    highlighted: false,
    features: [
      '30 crédits revendeur (30 ans)',
      'Accès complet au panneau revendeur',
      'Activation instantanée par client',
      'Assistance WhatsApp dédiée',
      'Crédits sans expiration',
      'Générateur d’essais gratuit',
      'Tarification personnalisée par client',
      'Accès API complet inclus',
      'Option de marque en marque blanche',
    ],
    waMessage: 'Bonjour ! Je souhaite le pack revendeur Pro (30 ans / 749 €).',
  },
];

// ===========================================================================
// FAQ (marché France)
// ===========================================================================
const faqs = [
  {
    q: 'Qu’est-ce qu’un panneau revendeur IPTV exactement ?',
    a: 'Un panneau revendeur est un tableau de bord privé qui vous permet de créer et de gérer des abonnements IPTV pour vos propres clients. Vous achetez des crédits en gros, puis vous utilisez ces crédits pour activer des abonnements annuels, mensuels ou d’essai pour chaque client. Vous conservez la totalité du prix de vente moins votre coût de gros, et vos clients ne voient jamais que nous existons en arrière-plan.',
  },
  {
    q: 'Combien puis-je réellement gagner en tant que revendeur IPTV en France ?',
    a: `Cela dépend du nombre de clients que vous apportez. Les clients français et francophones paient généralement entre 60 € et 120 € par an, avec une moyenne autour de 90 €. Votre coût de gros par crédit démarre autour de 30 € par an, donc votre profit par vente varie de 30 € à 90 € selon votre prix de vente. Vendez 10 abonnements à 90 € et vous avez gagné environ 600 € de bénéfice à partir d’un investissement de 299 €.`,
  },
  {
    q: 'Ai-je besoin de compétences techniques pour devenir revendeur ?',
    a: 'Non. Le panneau revendeur est conçu pour être simple. Si vous savez utiliser WhatsApp et un navigateur web, vous pouvez gérer une activité de revendeur. Nous fournissons également un accompagnement à la prise en main via WhatsApp, donc dès que vous rencontrez une difficulté, notre équipe vous guide directement.',
  },
  {
    q: 'Les crédits revendeur expirent-ils ?',
    a: 'Non. Vos crédits restent dans votre compte indéfiniment. Vous pouvez les activer à votre rythme, que vous vendiez plusieurs abonnements en une semaine ou que vous les répartissiez sur plusieurs mois. Aucun minimum mensuel, aucune date d’expiration, aucune pression pour vendre rapidement.',
  },
  {
    q: 'Dans quelles devises puis-je vendre ?',
    a: `Vous pouvez vendre à vos clients dans la devise de votre choix. Euros, francs suisses, dollars canadiens, ou toute autre devise. Votre coût de gros avec nous est fixé en euros (€). Votre prix de vente est entièrement à votre discrétion, vous contrôlez donc votre marge. Utilisez le sélecteur de devise en haut de la section tarifaire pour voir tous les prix en EUR, CHF ou CAD.`,
  },
  {
    q: 'Quel type d’assistance ai-je en tant que revendeur ?',
    a: `Chaque revendeur, quel que soit son palier, bénéficie d’une assistance WhatsApp directe de notre équipe. Le plan Growth ajoute des temps de réponse prioritaires, et le plan Pro inclut un canal d’assistance dédié ainsi qu’une aide à la configuration en marque blanche.`,
  },
];

// ===========================================================================
// ÉTAPES
// ===========================================================================
const steps = [
  {
    icon: Wallet,
    number: '01',
    title: 'Achetez vos crédits',
    description: 'Choisissez un pack et recevez vos crédits instantanément. Starter, Growth et Pro s’activent tous en quelques minutes après confirmation du paiement.',
  },
  {
    icon: LayoutDashboard,
    number: '02',
    title: 'Accédez à votre panneau',
    description: 'Connectez-vous à votre tableau de bord revendeur privé. Créez des abonnements, générez des lignes d’essai et gérez chaque compte client depuis une interface claire.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Vendez à vos clients',
    description: 'Fixez vos propres prix et vendez des abonnements annuels, mensuels ou d’essai. Vous conservez la totalité du prix de vente et ne dépensez des crédits qu’à l’activation d’un client.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Développez votre profit',
    description: 'Achetez davantage de crédits à des prix unitaires plus bas à mesure que votre base client grandit. Chaque nouveau palier améliore votre marge et augmente vos revenus récurrents.',
  },
];

// ===========================================================================
// CARTES VALEUR (marché France)
// ===========================================================================
const valueCards = [
  {
    icon: BadgeDollarSign,
    title: 'Faible coût d’entrée',
    description: 'Lancez votre activité de revendeur IPTV avec un seul pack à 299 €. Aucun contrat, aucun frais mensuel, aucun frais caché. Il suffit d’acheter des crédits et de commencer à vendre.',
  },
  {
    icon: Users,
    title: 'Demande mondiale',
    description: 'Des millions de téléspectateurs cherchent chaque année des alternatives au câble. Le marché du revendeur IPTV continue de croître avec de la place pour de nouveaux vendeurs dans chaque région.',
  },
  {
    icon: Wallet,
    title: 'Marges élevées',
    description: 'Votre coût par abonnement annuel démarre entre 25 € et 30 €. Les clients paient volontiers 60 € à 120 € par an. C’est une marge solide sur chaque vente.',
  },
  {
    icon: Server,
    title: 'Infrastructure réelle',
    description: 'Vous revendez sur nos serveurs dédiés bare metal. Aucun hébergement mutualisé surchargé, aucune coupure aux heures de pointe, aucun problème technique à expliquer.',
  },
];

// ===========================================================================
// FONCTIONNALITÉS DU PANNEAU
// ===========================================================================
const panelFeatures = [
  { icon: LayoutDashboard, label: 'Tableau de bord revendeur' },
  { icon: Zap, label: 'Activation instantanée' },
  { icon: Package, label: 'Crédits sans expiration' },
  { icon: Bot, label: 'Générateur d’essais' },
  { icon: BarChart3, label: 'Suivi des ventes' },
  { icon: CreditCard, label: 'Prêt pour le paiement' },
  { icon: Globe, label: 'Multi-devises' },
  { icon: Headphones, label: 'Assistance 24/7' },
  { icon: ShieldCheck, label: 'Panneau chiffré' },
  { icon: Rocket, label: 'Automatisation API' },
];

// ===========================================================================
// CARTE DE TARIFICATION
// ===========================================================================
function PricingCard({ tier, currency }: { tier: PricingTier; currency: CurrencyCode }) {
  const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(tier.waMessage)}`;

  const wholesalePrice = formatPrice(tier.wholesaleEUR, currency);
  const perYearPrice = formatPrice(tier.perYearEUR, currency);
  const retailMin = formatPrice(tier.retailMinEUR, currency);
  const retailMax = formatPrice(tier.retailMaxEUR, currency);

  return (
    <div
      className={`relative flex flex-col rounded-3xl p-6 md:p-8 transition-all duration-500 ${
        tier.highlighted
          ? 'bg-gradient-to-br from-[#0055A4] via-[#0A1B33] to-[#0055A4] border-4 border-[#FFCD00] shadow-[0_25px_60px_rgba(0,85,164,0.4)] lg:-translate-y-4 z-20'
          : 'bg-[#FFFFFF] border-2 border-[#D6DCE3] hover:border-[#FFCD00] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,205,0,0.25)]'
      }`}
    >
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
        <div
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg border-2 whitespace-nowrap ${
            tier.highlighted
              ? 'bg-[#FFCD00] text-[#0A1B33] border-[#FFCD00]'
              : 'bg-[#EF4135] text-[#FFFFFF] border-[#EF4135]'
          }`}
        >
          {tier.highlighted && <Sparkles className="w-3 h-3 shrink-0" />}
          {tier.tag}
        </div>
      </div>

      <div className="pt-4">
        <h3
          className={`text-xs font-black uppercase tracking-[0.2em] mb-3 ${
            tier.highlighted ? 'text-[#FFFFFF]/90' : 'text-[#0055A4]'
          }`}
        >
          {tier.name}
        </h3>

        <div
          className={`text-2xl font-black uppercase tracking-tight mb-4 ${
            tier.highlighted ? 'text-[#FFFFFF]' : 'text-[#0A1B33]'
          }`}
        >
          {tier.years} ans
        </div>

        <div className="mb-4">
          <div
            className={`text-5xl md:text-6xl font-black tracking-tighter mb-2 ${
              tier.highlighted ? 'text-[#FFCD00]' : 'text-[#0A1B33]'
            }`}
          >
            {wholesalePrice}
          </div>
          <div
            className={`text-xs font-bold tracking-wide ${
              tier.highlighted ? 'text-[#FFFFFF]/80' : 'text-[#0055A4]'
            }`}
          >
            {tier.credits} crédits au total
          </div>
        </div>

        <div
          className={`text-[11px] font-black uppercase tracking-widest mb-6 inline-block px-3 py-1 rounded-full border whitespace-nowrap ${
            tier.highlighted
              ? 'text-[#FFCD00] border-[#FFCD00]/40 bg-[#FFCD00]/10'
              : 'text-[#0055A4] border-[#0055A4]/30 bg-[#0055A4]/10'
          }`}
        >
          {perYearPrice} par an
        </div>

        <div
          className={`rounded-2xl p-4 mb-6 ${
            tier.highlighted
              ? 'bg-[#0A1B33]/40 border border-[#FFCD00]/30'
              : 'bg-[#EEEEEE] border border-[#D6DCE3]'
          }`}
        >
          <div
            className={`text-[10px] font-black uppercase tracking-widest mb-2 ${
              tier.highlighted ? 'text-[#FFCD00]/80' : 'text-[#0055A4]'
            }`}
          >
            Votre potentiel de profit
          </div>
          <div
            className={`text-xs font-bold mb-1 ${
              tier.highlighted ? 'text-[#FFFFFF]' : 'text-[#0A1B33]'
            }`}
          >
            Vendez à {retailMin} à {retailMax} / an
          </div>
          <div
            className={`text-base font-black uppercase mt-2 ${
              tier.highlighted ? 'text-[#FFCD00]' : 'text-[#0055A4]'
            }`}
          >
            Jusqu’à {formatPrice((tier.retailMaxEUR - tier.perYearEUR) * tier.years, currency)} au total
          </div>
        </div>

        <ul className="space-y-2.5 mb-8 flex-1">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className={`flex items-start gap-2.5 text-xs font-bold ${
                tier.highlighted ? 'text-[#FFFFFF]' : 'text-[#0A1B33]/85'
              }`}
            >
              <CheckCircle2
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  tier.highlighted ? 'text-[#FFCD00]' : 'text-[#0055A4]'
                }`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 whitespace-nowrap ${
            tier.highlighted
              ? 'bg-[#FFCD00] text-[#0A1B33] hover:bg-[#E5B800] shadow-2xl'
              : 'bg-[#0055A4] text-[#FFFFFF] hover:bg-[#004A8F] shadow-lg'
          }`}
        >
          <span>Choisir ce pack</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </div>
  );
}

// ===========================================================================
// ÉLÉMENT FAQ
// ===========================================================================
function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-300 ${
        isOpen
          ? 'border-[#FFCD00] shadow-[0_20px_50px_rgba(255,205,0,0.2)]'
          : 'border-[#D6DCE3] hover:border-[#FFCD00]'
      } bg-[#FFFFFF]`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 md:p-7 flex items-start gap-5 cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0055A4] to-[#0A1B33] flex items-center justify-center text-[#FFCD00] font-black text-lg shadow-lg shadow-[#0055A4]/30">
          {num}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-black text-[#0A1B33] text-base md:text-lg uppercase tracking-tight leading-snug mb-1">
            {faq.q}
          </h3>
          {isOpen && (
            <p className="text-[#0055A4] font-medium leading-relaxed text-sm md:text-base mt-3 pl-4 border-l-4 border-[#0055A4]">
              {faq.a}
            </p>
          )}
        </div>
        <ChevronDown
          className={`shrink-0 w-5 h-5 text-[#0055A4] transition-transform duration-300 mt-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
    </div>
  );
}

// ===========================================================================
// PAGE PRINCIPALE
// ===========================================================================
export default function ResellerPage() {
  const [currency, setCurrency] = useState<CurrencyCode>('EUR');

  return (
    <div className="flex flex-col min-h-screen bg-[#0A1B33] text-[#FFFFFF]">

      {/* HERO — marine */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#1E3A5F]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0055A4]/25 blur-[150px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #0055A4 1px, transparent 1px), linear-gradient(to bottom, #0055A4 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#122A4D] px-5 py-2.5 rounded-full mb-8 shadow-lg shadow-[#0055A4]/30 border border-[#FFCD00]/40">
              <BadgeDollarSign className="w-4 h-4 text-[#FFCD00] shrink-0" />
              <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Revendeur IPTV France {YEAR} 🇫🇷
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05] text-[#FFFFFF] mb-6 max-w-4xl mx-auto">
              DEVENEZ <br className="hidden sm:block" />
              <span className="text-[#FFCD00]">REVENDEUR IPTV</span> <br className="hidden sm:block" />
              EN FRANCE
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/75 font-bold max-w-3xl mx-auto leading-relaxed mb-10">
              Lancez votre propre activité de revendeur IPTV avec un seul pack à 299 €. Achetez des crédits en gros, vendez des abonnements annuels entre 60 € et 120 €, et gagnez jusqu’à 90 € de profit par client.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-12">
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFCD00] text-[#0A1B33] font-black text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(255,205,0,0.4)] hover:scale-105 transition-transform whitespace-nowrap border border-[#0A1B33]/20"
              >
                Voir les tarifs
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
              <a
                href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  'Bonjour ! Je souhaite en savoir plus sur le programme revendeur IPTV en France.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFFFFF] text-[#0A1B33] font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                Nous contacter
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF]/[0.06] border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-widest whitespace-nowrap">
                <Zap className="w-3.5 h-3.5 text-[#FFCD00] shrink-0" />
                Accès instantané
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF]/[0.06] border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-widest whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFCD00] shrink-0" />
                Sans expiration
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF]/[0.06] border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-widest whitespace-nowrap">
                <Headphones className="w-3.5 h-3.5 text-[#FFCD00] shrink-0" />
                Assistance 24/7
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CARTES VALEUR — SECTION CLAIRE */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#EEEEEE] w-full">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/30 px-4 py-1.5 rounded-full mb-5">
              <TrendingUp className="w-4 h-4 text-[#0055A4] shrink-0" />
              <span className="text-[#0055A4] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Pourquoi nous rejoindre
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1B33] uppercase tracking-tighter leading-tight mb-5">
              POURQUOI REVENDRE UN ABONNEMENT IPTV <span className="text-[#0055A4]">AUJOURD’HUI</span> ?
            </h2>
            <p className="text-base md:text-lg text-[#0A1B33]/70 font-bold leading-relaxed">
              Le marché du revendeur IPTV n’a jamais été aussi simple à aborder. Faible coût initial, demande massive et contrôle total des profits en font aujourd’hui l’une des activités annexes les plus accessibles.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueCards.map((card) => {
              const Icon = card.icon;
              return (
                <FadeInItem
                  key={card.title}
                  className="group bg-[#FFFFFF] border-2 border-[#D6DCE3] rounded-3xl p-6 md:p-7 hover:border-[#FFCD00] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,205,0,0.2)] transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0055A4]/10 group-hover:bg-[#0055A4] flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-7 h-7 text-[#0055A4] group-hover:text-[#FFCD00] transition-colors" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-[#0A1B33] uppercase tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#0055A4] text-sm font-medium leading-relaxed">
                    {card.description}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* CALCUL DE PROFIT — SECTION MARINE */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1B33] border-y border-[#1E3A5F]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/30 px-4 py-1.5 rounded-full mb-5">
              <BarChart3 className="w-4 h-4 text-[#FFCD00] shrink-0" />
              <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Les vrais chiffres
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5">
              COMBIEN POUVEZ-VOUS <span className="text-[#FFCD00]">GAGNER</span> ?
            </h2>
            <p className="text-base md:text-lg text-[#FFFFFF]/70 font-bold max-w-3xl mx-auto">
              Un exemple concret. Voici ce qui se passe lorsque vous achetez un pack revendeur et vendez à vos clients au tarif retail habituel.
            </p>
          </FadeIn>

          <FadeIn className="bg-[#FFFFFF] text-[#0A1B33] border-4 border-[#FFCD00] rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-[#0A1B33]/50 mb-3">
                  Pack Starter
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#0055A4] tracking-tighter mb-2">
                  {formatPrice(299, currency)}
                </div>
                <div className="text-xs font-bold text-[#0055A4]">
                  10 crédits (10 ans)
                </div>
              </div>
              <div className="md:border-x-2 border-[#D6DCE3] md:px-8">
                <div className="text-xs font-black uppercase tracking-widest text-[#0A1B33]/50 mb-3">
                  Vendez par an à
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#0A1B33] tracking-tighter mb-2">
                  {formatPrice(90, currency)}
                </div>
                <div className="text-xs font-bold text-[#0055A4]">
                  prix de vente moyen
                </div>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-[#0A1B33]/50 mb-3">
                  Revenu total
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#0055A4] tracking-tighter mb-2">
                  {formatPrice(900, currency)}
                </div>
                <div className="text-xs font-bold text-[#0055A4]">
                  à partir de 10 clients
                </div>
              </div>
            </div>

            <div className="pt-6 md:pt-8 border-t-2 border-[#D6DCE3] mt-6 md:mt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-black uppercase tracking-widest text-[#0A1B33]/60 mb-2">
                    Revenu moins coût
                  </div>
                  <div className="text-sm font-bold text-[#0055A4]">
                    Bénéfice net sur vos 10 premiers clients
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-xs font-black uppercase tracking-widest text-[#0055A4] mb-1">
                    Votre profit
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-[#0055A4] tracking-tighter">
                    {formatPrice(601, currency)}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="text-[#FFFFFF]/75 font-bold text-base md:text-lg leading-relaxed">
              Vendez dans le haut de la fourchette et votre profit grimpe encore davantage. À 120 € par vente, votre profit sur 10 clients atteint <span className="text-[#FFCD00] font-black">{formatPrice(901, currency)}</span>. Les packs Growth et Pro réduisent votre coût annuel, votre profit total augmente donc avec chaque client supplémentaire.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TARIFICATION — SECTION MARINE */}
      <section id="pricing" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
        <FadeIn className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/30 px-4 py-1.5 rounded-full mb-5">
            <Package className="w-4 h-4 text-[#FFCD00] shrink-0" />
            <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest whitespace-nowrap">
              Packs revendeur
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5">
            CHOISISSEZ VOTRE <span className="text-[#FFCD00]">PACK</span>
          </h2>
          <p className="text-base md:text-lg text-[#FFFFFF]/70 font-bold max-w-3xl mx-auto">
            Chaque pack inclut l’accès complet au panneau revendeur, l’activation instantanée par client et une assistance WhatsApp 24/7. Les crédits n’expirent jamais.
          </p>
        </FadeIn>

        <FadeIn className="flex justify-center mb-12">
          <div className="inline-flex bg-[#122A4D] border border-[#1E3A5F] rounded-2xl p-1.5 shadow-2xl">
            {CURRENCY_ORDER.map((code) => {
              const active = currency === code;
              return (
                <button
                  key={code}
                  onClick={() => setCurrency(code)}
                  className={`px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#FFCD00] text-[#0A1B33] shadow-lg shadow-[#FFCD00]/30'
                      : 'text-[#FFFFFF]/60 hover:text-[#FFFFFF]'
                  }`}
                  aria-pressed={active}
                >
                  {CURRENCIES[code].label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch max-w-6xl mx-auto mt-8">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} currency={currency} />
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <p className="text-[#FFFFFF]/60 text-sm font-bold">
            Vous avez besoin d’un volume plus important ? Écrivez à notre équipe sur WhatsApp pour un tarif de gros sur 100+ crédits.
          </p>
        </FadeIn>
      </section>

      {/* COMMENT ÇA MARCHE — SECTION CLAIRE */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#EEEEEE] border-y border-[#0A1B33]/5">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/30 px-4 py-1.5 rounded-full mb-5">
              <Rocket className="w-4 h-4 text-[#0055A4] shrink-0" />
              <span className="text-[#0055A4] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Comment ça marche
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1B33] uppercase tracking-tighter leading-tight mb-5">
              DÉMARREZ EN <span className="text-[#0055A4]">QUATRE ÉTAPES</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <FadeInItem
                  key={step.number}
                  className="relative bg-[#FFFFFF] border-2 border-[#D6DCE3] rounded-3xl p-6 md:p-7 hover:border-[#FFCD00] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,205,0,0.2)] transition-all duration-500"
                >
                  <div className="absolute -top-4 -right-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0055A4] to-[#0A1B33] flex items-center justify-center text-[#FFCD00] font-black text-sm shadow-lg shadow-[#0055A4]/40 border border-[#FFCD00]/40">
                    {step.number}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0055A4]/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-[#0055A4]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-[#0A1B33] uppercase tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#0055A4] text-sm font-medium leading-relaxed">
                    {step.description}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* FONCTIONNALITÉS DU PANNEAU — SECTION MARINE ALTERNÉE */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#122A4D] w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCD00]/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0055A4]/25 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0A1B33]/60 border border-[#FFCD00]/40 px-4 py-1.5 rounded-full mb-5">
              <LayoutDashboard className="w-4 h-4 text-[#FFCD00] shrink-0" />
              <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Fonctionnalités du panneau
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5">
              TOUT DANS <span className="text-[#FFCD00]">UN SEUL TABLEAU DE BORD</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {panelFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <FadeInItem
                  key={feature.label}
                  className="bg-[#FFFFFF] border-2 border-[#FFCD00]/30 rounded-2xl p-4 flex flex-col items-center text-center hover:border-[#FFCD00] transition-colors duration-300 shadow-lg"
                >
                  <Icon className="w-6 h-6 text-[#0055A4] mb-2" />
                  <span className="text-[#0A1B33] font-black text-[11px] md:text-xs uppercase tracking-wide leading-tight">
                    {feature.label}
                  </span>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* FAQ — SECTION CLAIRE */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#EEEEEE] w-full border-t border-[#0A1B33]/5">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/30 px-4 py-1.5 rounded-full mb-5">
              <MessageCircle className="w-4 h-4 text-[#0055A4] shrink-0" />
              <span className="text-[#0055A4] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                FAQ revendeur
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1B33] uppercase tracking-tighter leading-tight mb-5">
              QUESTIONS <span className="text-[#0055A4]">FRÉQUENTES</span>
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL — SECTION MARINE */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1B33] max-w-5xl mx-auto w-full">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#FFCD00]/40 bg-gradient-to-br from-[#0055A4] via-[#0A1B33] to-[#0055A4] p-8 md:p-14 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,205,0,0.12),_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FFCD00] text-[#0A1B33] px-5 py-2 rounded-full mb-6 shadow-lg">
                <UserPlus className="w-4 h-4 shrink-0" />
                <span className="font-black text-xs uppercase tracking-widest whitespace-nowrap">
                  Prêt à commencer
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5 max-w-3xl mx-auto">
                LANCEZ VOTRE ACTIVITÉ DE REVENDEUR AUJOURD’HUI
              </h2>

              <p className="text-[#FFFFFF]/90 font-bold text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Écrivez à notre équipe sur WhatsApp et nous activerons votre panneau revendeur en 10 minutes. Choisissez votre pack, connectez-vous et commencez à vendre à votre premier client dès le jour même.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <a
                  href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                    'Bonjour ! Je souhaite devenir revendeur IPTV. Pouvez-vous m’aider à démarrer ?'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0A1B33] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#FFCD00] whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 text-[#FFCD00] shrink-0" />
                  Démarrer sur WhatsApp
                </a>
                <Link
                  href="/tarifs"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFCD00] text-[#0A1B33] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl whitespace-nowrap"
                >
                  Formules clients
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}