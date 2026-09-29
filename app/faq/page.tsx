'use client';

import { useState, useMemo } from 'react';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import {
  HelpCircle,
  Tv,
  Zap,
  CreditCard,
  Smartphone,
  Search,
  ChevronDown,
  LifeBuoy,
  Wrench,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import ShareButtons from '../components/ShareButtons';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/faq`;

// ---------------------------------------------------------------------------
// Drapeaux SVG — France, Canada, Belgique, Suisse, Luxembourg, Monaco
// ---------------------------------------------------------------------------
const FlagFR = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-fr"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-fr)">
      <rect width="32" height="32" fill="#FFFFFF" />
      <rect width="10.67" height="32" fill="#0055A4" />
      <rect x="21.33" width="10.67" height="32" fill="#EF4135" />
    </g>
  </svg>
);

const FlagCA = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-ca"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-ca)">
      <rect width="32" height="32" fill="#FFFFFF" />
      <rect width="8" height="32" fill="#D80621" />
      <rect x="24" width="8" height="32" fill="#D80621" />
      <path fill="#D80621" d="M16 7l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 18l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 7z" />
    </g>
  </svg>
);

const FlagBE = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-be"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-be)">
      <rect width="10.67" height="32" fill="#000" />
      <rect x="10.67" width="10.67" height="32" fill="#FDDA24" />
      <rect x="21.33" width="10.67" height="32" fill="#EF3340" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-ch)">
      <rect width="32" height="32" fill="#DA291C" />
      <rect x="14" y="8" width="4" height="16" fill="#FFF" />
      <rect x="8" y="14" width="16" height="4" fill="#FFF" />
    </g>
  </svg>
);

const FlagLU = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-lu"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-lu)">
      <rect width="32" height="10.67" fill="#EF3340" />
      <rect y="10.67" width="32" height="10.67" fill="#FFFFFF" />
      <rect y="21.33" width="32" height="10.67" fill="#00A2E1" />
    </g>
  </svg>
);

const FlagMC = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-mc"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-mc)">
      <rect width="32" height="16" fill="#CE1126" />
      <rect y="16" width="32" height="16" fill="#FFFFFF" />
    </g>
  </svg>
);

// ---------------------------------------------------------------------------
// TYPES + DONNÉES FAQ (marché France)
// ---------------------------------------------------------------------------
interface FAQItem {
  id: string;
  category: 'general' | 'sport' | 'appareils' | 'paiement';
  q: string;
  a: string;
}

const faqList: FAQItem[] = [
  // GÉNÉRAL
  { id: 'gen-1', category: 'general', q: 'Qu’est-ce que l’IPTV et en quoi est-ce différent de la télévision par câble traditionnelle ?', a: 'L’IPTV signifie « Internet Protocol Television ». Au lieu d’un câble coaxial, d’un récepteur fibre ou d’une parabole satellite des fournisseurs traditionnels, les signaux TV sont diffusés directement via votre connexion Internet. Aucun décodeur physique n’est donc nécessaire. Vous regardez des milliers de chaînes en Full HD et 4K partout en France avec une simple connexion Internet.' },
  { id: 'gen-2', category: 'general', q: 'Dans combien de temps serai-je installé après le paiement ?', a: 'Une fois votre formule confirmée et le paiement effectué, notre équipe vous accompagne en direct sur WhatsApp. Nous vous envoyons vos identifiants, vous guidons pour installer un lecteur comme IPTV Smarters Pro et vous fournissons les contenus de test, le tout dans le même chat. La plupart des clients regardent leurs chaînes en moins de 10 minutes.' },
  { id: 'gen-3', category: 'general', q: 'Puis-je regarder sur plusieurs téléviseurs ou écrans en même temps ?', a: 'Oui, selon votre formule. Vous pouvez choisir 1, 2 ou 3 écrans simultanés lors de la commande. Plusieurs membres du foyer peuvent ainsi regarder des contenus différents au même moment sans aucune interruption.' },
  { id: 'gen-4', category: 'general', q: 'Comment fonctionne l’essai gratuit ?', a: 'Écrivez-nous sur WhatsApp et nous vous configurons un essai gratuit de 24 heures pour tester la qualité d’image 4K, vérifier la programmation sportive et les films, et vous assurer que tout fonctionne parfaitement sur votre appareil et votre connexion Internet. Passez à une formule payante uniquement quand vous êtes satisfait.' },
  { id: 'gen-5', category: 'general', q: 'Suis-je engagé par un contrat ou un renouvellement automatique ?', a: 'Non, absolument pas. Nous proposons des abonnements prépayés de 3, 6 ou 12 mois. À la fin de la période, la connexion au streaming s’arrête automatiquement. Aucun prélèvement automatique ni renouvellement silencieux.' },
  { id: 'gen-6', category: 'general', q: 'Puis-je tester le service avant de payer ?', a: 'Oui, c’est exactement notre façon de faire. Contactez notre équipe d’assistance WhatsApp et nous vous donnons un essai gratuit de 24 heures pour voir la qualité d’image sur votre propre TV avant de vous abonner.' },

  // SPORT
  { id: 'sport-1', category: 'sport', q: 'beIN Sports, RMC Sport, Canal+ Sport et Eurosport sont-ils inclus ?', a: 'Oui. Chaque formule inclut la totalité de la programmation sportive française en qualité 60 FPS fluide. Regardez la Ligue 1, la Ligue des Champions, la Premier League, la NBA, la Formule 1, le Top 14, Roland-Garros, le Tour de France et tous les grands combats, tout inclus.' },
  { id: 'sport-2', category: 'sport', q: 'Dois-je payer un supplément pour les événements UFC ou Boxe PPV ?', a: 'Non, tous les événements Pay Per View mondiaux sont inclus par défaut. Cela couvre les UFC Main Cards numérotées, la boxe de championnat, les événements WWE, AEW et les grands combats de MMA sans frais supplémentaires.' },
  { id: 'sport-3', category: 'sport', q: 'Les films et séries étrangers ont-ils des sous-titres français ?', a: 'Plus de 95 % de notre catalogue VOD complet, plus de 120 000 films et séries issus de Netflix, HBO Max, Disney Plus, Hulu et des sorties cinéma, incluent des sous-titres français sélectionnables et des pistes audio originales optionnelles.' },
  { id: 'sport-4', category: 'sport', q: 'Le guide EPG et la fonction replay fonctionnent-ils correctement ?', a: 'Oui. Notre guide EPG interactif est synchronisé automatiquement toutes les 6 heures avec la programmation en cours. Pour les principales chaînes françaises, européennes et internationales, une fonction replay 7 jours est disponible.' },
  { id: 'sport-5', category: 'sport', q: 'Puis-je masquer les listes de chaînes étrangères inutiles ?', a: 'Absolument. Vous pouvez facilement masquer les groupes de pays dans votre lecteur IPTV, comme IPTV Smarters Pro ou TiviMate. Notre équipe d’assistance peut également ajuster votre compte sur demande pour ne recevoir que les chaînes que vous regardez réellement.' },
  { id: 'sport-6', category: 'sport', q: 'Quelle est la stabilité de la qualité d’image pendant les grands événements sportifs ?', a: 'Nos serveurs utilisent un équilibrage de charge dynamique via des centres de données dédiés en France et en Europe. Même pendant les moments forts comme un choc de Ligue 1, la finale de la Ligue des Champions ou un grand combat UFC, le débit reste stable sans perte de frames.' },

  // APPAREILS
  { id: 'dev-1', category: 'appareils', q: 'Sur quels téléviseurs et appareils puis-je installer un abonnement IPTV ?', a: 'Notre service est universellement compatible avec les Smart TV (Samsung Tizen, LG webOS, Sony Android TV, Google TV), Amazon Fire TV Stick, Google Chromecast avec Google TV, Apple TV 4K, Nvidia Shield, boîtiers MAG, PC Windows, Mac, iPhone, iPad et téléphones Android.' },
  { id: 'dev-2', category: 'appareils', q: 'Quelles applications IPTV offrent la meilleure expérience de visionnage ?', a: 'Pour Android TV et Fire TV Stick, nous recommandons IPTV Smarters Pro pour le zapping le plus rapide, la consommation RAM la plus faible et les meilleures performances 4K. Pour les Smart TV Samsung et LG, IPTV Smarters Pro ou IBO Player Pro fonctionnent le mieux. Pour Apple TV, IPTVX ou GSE Smart IPTV sont les meilleurs choix.' },
  { id: 'dev-3', category: 'appareils', q: 'Quelle vitesse Internet minimale me faut-il pour la 4K et le 60 FPS ?', a: 'Pour les chaînes Full HD, nous recommandons au moins 15 à 20 Mbps. Pour la 4K Ultra HD et les flux sportifs en 60 FPS, 25 à 30 Mbps. Un câble Ethernet ou un réseau Wi-Fi 5 GHz offre toujours l’expérience la plus stable.' },
  { id: 'dev-4', category: 'appareils', q: 'Que faire si une chaîne se met en mémoire tampon ou freeze ?', a: 'La mise en mémoire tampon est causée dans 99 % des cas par une interférence Wi-Fi temporaire ou un cache d’application saturé. Redémarrez votre routeur et votre modem, redémarrez votre application IPTV, ou basculez le moteur de flux entre HLS et TS dans les paramètres du lecteur.' },
  { id: 'dev-5', category: 'appareils', q: 'Ai-je besoin de compétences techniques pour réaliser l’installation ?', a: 'Non. L’installation prend en moyenne moins de 5 minutes et notre équipe vous guide pas à pas sur WhatsApp. Vous téléchargez une application lecteur depuis le store de votre appareil, vous saisissez les identifiants que nous vous envoyons, et les chaînes se chargent automatiquement.' },
  { id: 'dev-6', category: 'appareils', q: 'Puis-je utiliser mon compte pendant mes déplacements hors de France ?', a: 'Oui. Nos flux sont accessibles dans le monde entier sans restriction géographique. Vous pouvez utiliser votre abonnement IPTV sereinement dans votre résidence secondaire en Espagne, en Italie, ou partout ailleurs.' },

  // PAIEMENT
  { id: 'pay-1', category: 'paiement', q: 'Quels moyens de paiement sécurisés acceptez-vous ?', a: 'Vous pouvez payer en toute sécurité par carte bancaire (Visa, Mastercard, American Express), PayPal et cryptomonnaies (Bitcoin, USDT, Ethereum) via une connexion SSL 256 bits fortement sécurisée. Tous les tarifs sont en euros (€).' },
  { id: 'pay-2', category: 'paiement', q: 'Un VPN est-il nécessaire ?', a: 'Non. Un VPN n’est pas nécessaire car tous nos flux passent par des connexions sécurisées et chiffrées. Si vous préférez plus de confidentialité, nos serveurs de streaming sont 100 % compatibles avec tous les principaux fournisseurs VPN.' },
  { id: 'pay-3', category: 'paiement', q: 'Comment mes données personnelles sont-elles protégées ?', a: 'Nous respectons le RGPD et les normes internationales de protection des données. Nous ne conservons jamais l’historique de visionnage ni les journaux de chaînes, nous ne vendons jamais de données à des tiers et nous ne conservons jamais de numéros de carte bancaire ou de compte bancaire sur nos serveurs locaux.' },
  { id: 'pay-4', category: 'paiement', q: 'Que se passe-t-il si je perds mes identifiants ?', a: 'Aucun problème. Envoyez un message avec votre numéro de commande ou votre e-mail d’inscription à notre équipe d’assistance WhatsApp et notre support vous renverra vos identifiants dans les 5 minutes.' },
  { id: 'pay-5', category: 'paiement', q: 'Est-ce que je reçois une facture ou un reçu après le paiement ?', a: 'Oui. Immédiatement après la transaction, vous recevez par e-mail une confirmation de commande automatique et une facture au format numérique.' },
  { id: 'pay-6', category: 'paiement', q: 'Y a-t-il des frais cachés ou des frais administratifs ?', a: 'Non. Les tarifs affichés sur notre page tarifaire sont entièrement tout compris. Vous payez une seule fois pour la période choisie, sans surcoût inattendu ni frais de connexion.' },
];

// ---------------------------------------------------------------------------
// PAGE PRINCIPALE
// ---------------------------------------------------------------------------
export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'sport' | 'appareils' | 'paiement'>('all');
  const [openAccordion, setOpenAccordion] = useState<string | null>('gen-1');

  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;

  const filteredFaqs = useMemo(() => {
    return faqList.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  // ------------------- SCHÉMAS JSON-LD (inline) -------------------
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // FAQPage
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: faqList.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      },
      // Fil d’Ariane
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: PAGE_URL },
        ],
      },
      // Page Web
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `FAQ abonnement IPTV | Centre d’aide`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'fr-FR',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/img/structer.webp`,
          width: '1200',
          height: '630',
        },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A1B33] text-[#FFFFFF] overflow-hidden">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        id="faq-page-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ==========================================================
          HERO
      ========================================================== */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#1E3A5F] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0055A4]/25 blur-[140px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `linear-gradient(to right, #0055A4 1px, transparent 1px), linear-gradient(to bottom, #0055A4 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#122A4D] px-4 py-2 rounded-full mb-6 shadow-lg border border-[#FFCD00]/40">
            <HelpCircle className="w-4 h-4 text-[#FFCD00]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
              Centre d’aide & réponses 🇫🇷
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none">
            QUESTIONS <br className="hidden sm:block" />
            <span className="text-[#FFCD00]">FRÉQUEMMENT POSÉES</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/70 font-bold max-w-2xl mx-auto leading-relaxed mb-8">
            Trouvez des réponses instantanées sur votre <span className="text-[#FFCD00]">abonnement IPTV</span>, le streaming 4K, l’installation Smart TV et les paiements sécurisés en euros (€).
          </p>

          {/* Rangée de drapeaux */}
          <div className="w-full flex items-center justify-center mb-8">
            <div className="inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-2.5 sm:gap-4 px-4 py-2 rounded-full bg-[#122A4D]/80 border border-[#1E3A5F] shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-1.5 shrink-0">
                <FlagFR /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">France</span>
              </div>
              <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <FlagCA /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Canada</span>
              </div>
              <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <FlagBE /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Belgique</span>
              </div>
              <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <FlagCH /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Suisse</span>
              </div>
              <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <FlagLU /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Luxembourg</span>
              </div>
              <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <FlagMC /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Monaco</span>
              </div>
            </div>
          </div>

          {/* Recherche */}
          <div className="w-full max-w-xl relative mt-2 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFCD00] to-[#0055A4] rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
            <div className="relative">
              <Search className="w-5 h-5 text-[#0055A4] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une question (Ligue 1, IPTV Smarters, PayPal, buffering)..."
                className="w-full pl-12 pr-4 py-4 rounded-full bg-[#FFFFFF] text-[#0A1B33] placeholder-[#0A1B33]/50 font-bold border-2 border-transparent focus:border-[#FFCD00] focus:outline-none shadow-2xl transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          ACCORDÉON FAQ
      ========================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">

        {/* Onglets de catégorie */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'Toutes les questions (24)', icon: HelpCircle },
            { id: 'general', label: 'Général & service', icon: Tv },
            { id: 'sport', label: 'Sport & chaînes', icon: Zap },
            { id: 'appareils', label: 'Smart TV & applis', icon: Smartphone },
            { id: 'paiement', label: 'Paiement & sécurité', icon: CreditCard },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md border-2 ${
                  active
                    ? 'bg-[#FFCD00] text-[#0A1B33] border-[#FFCD00] scale-105 shadow-lg shadow-[#FFCD00]/30'
                    : 'bg-[#FFFFFF]/5 text-[#FFFFFF]/70 border-white/10 hover:border-[#0055A4] hover:text-[#FFFFFF] hover:scale-105'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordéon */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openAccordion === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`group relative bg-[#FFFFFF] rounded-2xl sm:rounded-3xl overflow-hidden border-2 transition-all duration-300 ${
                    isOpen
                      ? 'border-[#FFCD00] shadow-[0_20px_50px_rgba(255,205,0,0.25)]'
                      : 'border-[#D6DCE3] hover:border-[#FFCD00] hover:shadow-[0_15px_35px_rgba(255,205,0,0.15)]'
                  }`}
                >
                  {/* Barre d’accent gauche quand ouvert */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 ${
                      isOpen ? 'bg-[#FFCD00]' : 'bg-transparent'
                    }`}
                  />

                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3 pr-2 flex-1">
                      <span
                        className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                          isOpen ? 'bg-[#0055A4] text-[#FFFFFF]' : 'bg-[#0055A4]/10 text-[#0055A4]'
                        }`}
                      >
                        <HelpCircle className="w-4 h-4" />
                      </span>
                      <span className="font-black text-[#0A1B33] text-base sm:text-lg uppercase tracking-tight leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#FFCD00] text-[#0A1B33]'
                          : 'bg-[#0A1B33]/5 text-[#0A1B33] group-hover:bg-[#0055A4]/10 group-hover:text-[#0055A4]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Réponse */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[#0055A4] text-sm sm:text-base font-medium leading-relaxed px-5 sm:px-6 pl-15 sm:pl-16 border-l-4 border-[#0055A4] ml-4 sm:ml-5 py-1">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-10 text-center shadow-xl">
            <AlertCircle className="w-10 h-10 text-[#0055A4] mx-auto mb-3" />
            <p className="font-black text-lg uppercase tracking-tight mb-1 text-[#0A1B33]">
              Aucun résultat trouvé
            </p>
            <p className="text-sm font-bold text-[#0055A4] mb-6">
              Essayez un autre terme de recherche ou contactez directement notre support WhatsApp.
            </p>
            <a
              href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Bonjour, je n’ai pas trouvé de réponse à ma question.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#004A8F] transition-all shadow-lg border border-[#0055A4]"
            >
              <MessageCircle className="w-4 h-4" /> Demander sur WhatsApp
            </a>
          </div>
        )}
      </section>

      {/* ==========================================================
          APPAREILS RECOMMANDÉS
      ========================================================== */}
      <section className="py-16 bg-[#05101F] border-y border-[#1E3A5F]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/40 px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#FFCD00]" />
              <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
                Installation recommandée
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tight mb-3">
              Meilleurs <span className="text-[#FFCD00]">appareils & applications</span>
            </h2>
            <p className="text-sm sm:text-base text-[#FFFFFF]/70 font-bold max-w-xl mx-auto">
              Les meilleurs lecteurs IPTV et les vitesses Internet minimales pour une expérience sans coupure en France.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone,
                title: 'Android & Firestick',
                desc: 'Stabilité maximale et zapping le plus rapide.',
                apps: ['IPTV Smarters Pro (recommandé)', 'TiviMate IPTV Player Pro', 'IBO Player Pro'],
                speed: 'Vitesse min. : 20 Mbps',
              },
              {
                icon: Tv,
                title: 'Smart TV Samsung & LG',
                desc: 'Diffusez directement sans boîtier externe.',
                apps: ['IPTV Smarters Pro (webOS / Tizen)', 'Smart IPTV (SIPTV)', 'IBO Player Pro'],
                speed: 'Vitesse min. : 25 Mbps',
              },
              {
                icon: Cpu,
                title: 'Apple TV & iOS',
                desc: 'Interface 4K ultra nette optimisée pour Apple.',
                apps: ['IPTVX (tvOS)', 'GSE Smart IPTV', 'IPTV Smarters Player Lite'],
                speed: 'Vitesse min. : 25 Mbps',
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group bg-[#FFFFFF] border-2 border-[#0055A4]/30 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FFCD00] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,205,0,0.25)] transition-all duration-500"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center mb-4 group-hover:bg-[#0055A4] transition-colors">
                      <Icon className="w-6 h-6 text-[#0055A4] group-hover:text-[#FFFFFF] transition-colors" />
                    </div>
                    <h3 className="text-lg font-black text-[#0A1B33] uppercase mb-1">{card.title}</h3>
                    <p className="text-xs text-[#0055A4] font-bold mb-4">{card.desc}</p>
                    <ul className="space-y-2 text-xs font-bold text-[#0055A4]">
                      {card.apps.map((app) => (
                        <li key={app} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#D6DCE3] text-[11px] font-black text-[#0055A4]">
                    {card.speed}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================
          DÉPANNAGE
      ========================================================== */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-8 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#0055A4] flex items-center justify-center">
              <Wrench className="w-6 h-6 text-[#FFCD00]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A1B33] uppercase tracking-tight">
              Auto-dépannage rapide pour les petits bugs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: 1, title: 'Redémarrez votre routeur', desc: 'Éteignez votre modem et votre TV pendant 30 secondes pour vider le cache DNS et la congestion réseau.' },
              { n: 2, title: 'Actualisez la playlist', desc: 'Dans votre application IPTV, choisissez « Mettre à jour la playlist » ou « Recharger le portail » pour charger les nouvelles chaînes et l’EPG.' },
              { n: 3, title: 'Changez le format de flux', desc: 'Dans les paramètres du lecteur, basculez le type de flux de TS à HLS pour une livraison de données plus fluide.' },
            ].map((step) => (
              <div key={step.n} className="p-5 bg-[#EEEEEE] rounded-2xl border border-[#D6DCE3] shadow-sm">
                <span className="w-8 h-8 rounded-full bg-[#FFCD00] text-[#0A1B33] font-black text-sm flex items-center justify-center mb-3">
                  {step.n}
                </span>
                <h3 className="font-black text-sm uppercase mb-1 text-[#0A1B33]">{step.title}</h3>
                <p className="text-xs font-bold text-[#0055A4] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partage */}
      <div className="w-full flex justify-center items-center my-10">
        <ShareButtons />
      </div>

      {/* ==========================================================
          APPEL À L’AIDE
      ========================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#FFCD00]/40 bg-gradient-to-br from-[#0055A4] via-[#0A1B33] to-[#0055A4] p-8 md:p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,205,0,0.12),_transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#FFCD00] text-[#0A1B33] px-4 py-2 rounded-full mb-4 shadow-md">
              <LifeBuoy className="w-4 h-4" />
              <span className="font-black text-xs uppercase tracking-widest">Aide personnalisée</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#FFFFFF] uppercase tracking-tight mb-3">
              Vous avez encore une question spécifique ?
            </h2>

            <p className="text-[#FFFFFF]/90 font-bold text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Notre équipe est disponible 24/7 sur WhatsApp pour vous aider à installer, répondre à vos questions sur les chaînes et vous fournir un essai gratuit de 24 heures.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Bonjour, j’ai une question sur le service d’abonnement IPTV.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFCD00] text-[#0A1B33] font-black text-xs uppercase tracking-widest hover:bg-[#E5B800] transition-all hover:scale-105 shadow-xl border-2 border-[#0A1B33]/20"
              >
                <MessageCircle className="w-4 h-4" /> Assistance WhatsApp
              </a>
              <Link
                href="/tarifs"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0A1B33] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl border-2 border-[#FFCD00]"
              >
                Voir toutes les formules
              </Link>
            </div>
          </div>
        </div>

        {/* Lien retour */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#FFCD00] hover:text-[#FFFFFF] transition-colors font-black text-xs uppercase tracking-widest"
          >
            ← Retour à l’accueil
          </Link>
        </div>
      </section>
    </div>
  );
}