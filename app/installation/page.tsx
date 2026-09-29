'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONSTANTS } from '@/lib/seo';
import Image from 'next/image';
import Link from 'next/link';
import {
  MonitorSmartphone,
  Tv,
  Apple,
  Laptop,
  Sparkles,
  Lock,
  Zap,
  Users,
  CheckCircle2,
  PlayCircle,
  ArrowRight,
  MessageCircle,
  Clock,
  Headphones,
  Download,
  KeyRound,
  AlertCircle,
  X,
  ChevronDown,
  Gift,
  ShoppingCart,
  Plug,
  ShieldCheck,
  Globe,
  Phone,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import ShareButtons from '../components/ShareButtons';

// ---------------------------------------------------------------------------
// Drapeaux SVG — France, Canada, Belgique, Suisse, Luxembourg, Monaco
// ---------------------------------------------------------------------------
const FlagFR = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-fr"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-fr)">
      <rect width="32" height="32" fill="#FFFFFF" />
      <rect width="10.67" height="32" fill="#0055A4" />
      <rect x="21.33" width="10.67" height="32" fill="#EF4135" />
    </g>
  </svg>
);
const FlagCA = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-ca"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-ca)">
      <rect width="32" height="32" fill="#FFFFFF" />
      <rect width="8" height="32" fill="#D80621" />
      <rect x="24" width="8" height="32" fill="#D80621" />
      <path fill="#D80621" d="M16 7l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 18l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 7z" />
    </g>
  </svg>
);
const FlagBE = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-be"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-be)">
      <rect width="10.67" height="32" fill="#000" />
      <rect x="10.67" width="10.67" height="32" fill="#FDDA24" />
      <rect x="21.33" width="10.67" height="32" fill="#EF3340" />
    </g>
  </svg>
);
const FlagCH = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-ch)">
      <rect width="32" height="32" fill="#DA291C" />
      <rect x="14" y="8" width="4" height="16" fill="#FFF" />
      <rect x="8" y="14" width="16" height="4" fill="#FFF" />
    </g>
  </svg>
);
const FlagLU = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-lu"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-lu)">
      <rect width="32" height="10.67" fill="#EF3340" />
      <rect y="10.67" width="32" height="10.67" fill="#FFFFFF" />
      <rect y="21.33" width="32" height="10.67" fill="#00A2E1" />
    </g>
  </svg>
);
const FlagMC = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-mc"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-mc)">
      <rect width="32" height="16" fill="#CE1126" />
      <rect y="16" width="32" height="16" fill="#FFFFFF" />
    </g>
  </svg>
);

const IBO_DOWNLOAD_URL = 'https://iboplayer.pro/';

// ---------------------------------------------------------------------------
// APPAREILS — priorité marché français
// ---------------------------------------------------------------------------
const devices = [
  { id: 'firestick', name: 'Firestick / Android TV', icon: MonitorSmartphone, popular: true, steps: 6 },
  { id: 'smarttv', name: 'Smart TV', icon: Tv, popular: false, steps: 6 },
  { id: 'apple', name: 'Appareils Apple', icon: Apple, popular: false, steps: 6 },
  { id: 'pc', name: 'PC / Mac', icon: Laptop, popular: false, steps: 6 },
];

// ---------------------------------------------------------------------------
// DONNÉES DES ÉTAPES — France / EUR
// ---------------------------------------------------------------------------
const stepData = {
  firestick: {
    title: 'Installation d’un abonnement IPTV sur Firestick et Android TV',
    icon: MonitorSmartphone,
    steps: [
      {
        number: 1,
        title: 'Choisissez votre formule d’abonnement IPTV',
        description: 'Sélectionnez l’abonnement adapté à votre foyer. Choisissez 3, 6 ou 12 mois avec 1, 2 ou 3 écrans simultanés. Chaque formule inclut la totalité des 36 000+ chaînes, 120 000+ films et séries et le streaming 4K/60 FPS sur les chaînes compatibles.',
        chips: ['36 000+ chaînes', '120 000+ films', '4K & 60 FPS', 'Tarifs en euros (€)'],
        duration: '1 min',
        icon: ShoppingCart,
        cta: { label: 'Voir les formules d’abonnement IPTV', href: '/tarifs', type: 'internal' },
        tip: 'La formule VIP 12 mois permet d’économiser jusqu’à 50 % et débloque un routage serveur prioritaire optimisé pour la France et l’Europe.',
      },
      {
        number: 2,
        title: 'Contactez le support sur WhatsApp',
        description: 'Écrivez à notre équipe sur WhatsApp avec votre formule et le nombre d’écrans souhaités. Nous confirmons le tarif en euros (€) et vous envoyons un lien de paiement sécurisé directement dans le chat. Temps de réponse moyen : moins de 2 minutes, 24h/24 et 7j/7.',
        chips: ['Carte bancaire', 'PayPal', 'Crypto', 'Apple & Google Pay'],
        duration: '2-3 min',
        icon: MessageCircle,
        cta: { label: 'Discuter sur WhatsApp', type: 'whatsapp', message: 'Bonjour ! Je souhaite m’abonner et obtenir de l’aide pour l’installation sur mon Firestick.' },
        tip: 'Ayez votre appareil prêt avant de nous écrire. Le support vous enverra le lien de téléchargement d’IPTV Smarter Pro dès la confirmation du paiement.',
      },
      {
        number: 3,
        title: 'Téléchargez IPTV Smarter Pro',
        description: 'IPTV Smarter Pro est le lecteur IPTV le plus rapide et le plus stable pour Firestick et Android TV. Il prend en charge la 4K HDR, le guide électronique des programmes (EPG), le contrôle parental et inclut un essai intégré pour tester la lecture avant d’entrer vos identifiants.',
        chips: ['4K HDR', 'Faible RAM', 'Zapping rapide', 'Essai intégré'],
        duration: '2 min',
        icon: Download,
        cta: { label: 'Télécharger IPTV Smarter Pro', type: 'external', href: IBO_DOWNLOAD_URL },
        tip: 'Sur Firestick, activez « Applications de sources inconnues » dans Paramètres → My Fire TV → Options pour développeurs, puis utilisez l’application Downloader pour installer IPTV Smarter Pro s’il n’est pas dans l’Amazon App Store.',
      },
      {
        number: 4,
        title: 'Choisissez votre méthode d’installation',
        description: 'Deux façons de connecter votre abonnement IPTV à IPTV Smarter Pro. Choisissez celle qui vous semble la plus simple — les deux offrent des performances de streaming 4K identiques.',
        methods: [
          { title: 'Installation automatique par le support', subtitle: 'Recommandé', points: ['Envoyez-nous votre Device Key', 'Nous activons à distance en moins de 60 secondes', 'La liste des chaînes se charge automatiquement'], highlighted: true },
          { title: 'Installation manuelle', subtitle: 'Faites-le vous-même', points: ['Le support envoie l’URL M3U ou les codes Xtream', 'Vous collez les identifiants dans l’application', 'Les chaînes se chargent en quelques secondes'], highlighted: false },
        ],
        duration: '2 min',
        icon: KeyRound,
        tip: 'Vous hésitez ? Choisissez l’installation automatique. Notre équipe d’assistance gère 100 % de la configuration à votre place — aucune saisie, aucune erreur, aucune incertitude.',
      },
      {
        number: 5,
        title: 'Chargement du contenu — patientez 1 à 2 minutes',
        description: 'Une fois activé, IPTV Smarter Pro télécharge tout votre catalogue en arrière-plan. Chaînes, films, séries, guide EPG sur 7 jours et votre liste de favoris se remplissent automatiquement. Gardez l’application ouverte pendant ce premier chargement — il n’a lieu qu’une seule fois.',
        chips: ['1 à 2 min', 'EPG auto', 'Favoris prêts'],
        duration: '1-2 min',
        icon: Plug,
        tip: 'Si le contenu charge encore après 3 minutes, vérifiez que votre Firestick dispose d’au moins 1 Go d’espace libre et d’une connexion WiFi stable.',
      },
      {
        number: 6,
        title: 'Commencez à regarder votre abonnement IPTV !',
        description: 'Vous êtes en ligne. Profitez d’un accès instantané à toute la programmation française : TF1, France 2, France 3, M6, Canal+, beIN Sports, RMC Sport, Arte, BFM TV, Ligue 1, Ligue des Champions, NBA, Formule 1 et PPV, ainsi que des milliers de chaînes internationales de plus de 50 pays.',
        stats: [
          { value: '36 000+', label: 'Chaînes en direct' },
          { value: '120 000+', label: 'Films et séries' },
          { value: '4K/60 FPS', label: 'Qualité' },
          { value: '24/7', label: 'Assistance' },
        ],
        duration: 'Terminé !',
        icon: PlayCircle,
        tip: 'Épinglez vos chaînes favorites et ajoutez vos équipes aux raccourcis sport. Le zapping devient instantané.',
      },
    ],
  },
  smarttv: {
    title: 'Installation d’un abonnement IPTV sur Smart TV',
    icon: Tv,
    steps: [
      {
        number: 1,
        title: 'Choisissez votre formule d’abonnement IPTV',
        description: 'Sélectionnez 3, 6 ou 12 mois d’accès avec 1, 2 ou 3 écrans simultanés. Idéal pour les familles qui regardent des contenus différents dans différentes pièces.',
        chips: ['36 000+ chaînes', '120 000+ films', 'Samsung & LG', 'Tarifs en euros (€)'],
        duration: '1 min',
        icon: ShoppingCart,
        cta: { label: 'Voir les formules d’abonnement IPTV', href: '/tarifs', type: 'internal' },
        tip: 'Les formules multi-écrans sont idéales pour les familles qui regardent en même temps du sport, des films et des contenus jeunesse.',
      },
      {
        number: 2,
        title: 'Contactez le support sur WhatsApp',
        description: 'Écrivez à notre équipe sur WhatsApp. Nous confirmons votre formule en euros (€) et vous envoyons un lien de paiement sécurisé directement dans le chat. Indiquez-nous la marque de votre TV et nous vous envoyons un guide d’installation personnalisé pour Samsung Tizen, LG webOS, Sony Android TV ou Google TV.',
        chips: ['Carte bancaire', 'PayPal', 'Crypto', 'Apple & Google Pay'],
        duration: '2-3 min',
        icon: MessageCircle,
        cta: { label: 'Discuter sur WhatsApp', type: 'whatsapp', message: 'Bonjour ! Je souhaite installer un abonnement IPTV sur ma Smart TV.' },
        tip: 'Les stores Samsung et LG varient selon les régions. Les modèles récents disposent généralement d’IPTV Smarter Pro directement. Les modèles plus anciens peuvent nécessiter un Firestick.',
      },
      {
        number: 3,
        title: 'Installez IPTV Smarter Pro',
        description: 'IPTV Smarter Pro fonctionne nativement sur Samsung Tizen (2017+), LG webOS (2018+), Android TV et Google TV. Aucun matériel supplémentaire requis. Il prend en charge la 4K HDR, l’EPG et le zapping instantané directement depuis la télécommande.',
        chips: ['Samsung Tizen', 'LG webOS', 'Android TV', '4K HDR'],
        duration: '2 min',
        icon: Download,
        cta: { label: 'Télécharger IPTV Smarter Pro', type: 'external', href: IBO_DOWNLOAD_URL },
        tip: 'Recherchez « IPTV Smarter Pro » dans le store de votre TV. S’il n’est pas disponible, écrivez au support — nous vous enverrons un lien d’installation alternatif pour votre modèle.',
      },
      {
        number: 4,
        title: 'Choisissez votre méthode d’installation',
        description: 'Connectez votre abonnement IPTV de la manière la plus simple. Activation automatique par notre équipe d’assistance, ou connexion manuelle avec votre propre URL M3U ou vos codes Xtream.',
        methods: [
          { title: 'Installation automatique par le support', subtitle: 'Recommandé', points: ['Envoyez-nous votre Device Key', 'Nous lions votre abonnement', 'Les chaînes apparaissent automatiquement'], highlighted: true },
          { title: 'Installation manuelle', subtitle: 'Faites-le vous-même', points: ['Le support envoie M3U ou Xtream', 'Vous saisissez dans Ajouter une playlist', 'Les chaînes se chargent instantanément'], highlighted: false },
        ],
        duration: '2 min',
        icon: KeyRound,
        tip: 'L’installation automatique fonctionne sur toutes les marques de Smart TV compatibles avec IPTV Smarter Pro. Envoyez-nous simplement votre Device Key et nous nous occupons du reste.',
      },
      {
        number: 5,
        title: 'Chargement du contenu — patientez 1 à 2 minutes',
        description: 'IPTV Smarter Pro télécharge automatiquement vos chaînes en direct, votre bibliothèque de films et séries, et le guide EPG complet sur 7 jours. Tout se synchronise en arrière-plan pendant que vous regardez.',
        chips: ['1 à 2 min', 'EPG auto', 'Contrôle parental'],
        duration: '1-2 min',
        icon: Plug,
        tip: 'Ne fermez pas l’application pendant le premier chargement. Tout sera prêt en moins de 2 minutes sur une connexion stable.',
      },
      {
        number: 6,
        title: 'Regardez votre abonnement IPTV en 4K',
        description: 'Votre Smart TV est prête. Profitez d’un service IPTV 4K sans coupure avec TF1, France 2, M6, Canal+, beIN Sports, RMC Sport, Ligue 1, Ligue des Champions, NBA, Formule 1, PPV et des milliers de chaînes internationales.',
        stats: [
          { value: '36 000+', label: 'Chaînes en direct' },
          { value: '120 000+', label: 'Films et séries' },
          { value: '4K', label: 'Ultra HD' },
          { value: '24/7', label: 'Assistance' },
        ],
        duration: 'Terminé !',
        icon: PlayCircle,
        tip: 'Pour la meilleure qualité 4K, connectez votre TV via Ethernet ou WiFi 5 GHz. Évitez le 2,4 GHz pour le sport en direct.',
      },
    ],
  },
  apple: {
    title: 'Installation d’un abonnement IPTV sur appareils Apple',
    icon: Apple,
    steps: [
      {
        number: 1,
        title: 'Choisissez votre formule d’abonnement IPTV',
        description: 'Sélectionnez la formule adaptée à votre foyer Apple. Choisissez 3, 6 ou 12 mois avec 1, 2 ou 3 écrans simultanés. Compatible iPhone, iPad, Apple TV 4K et Mac.',
        chips: ['36 000+ chaînes', '120 000+ films', 'iPhone / iPad', 'Apple TV 4K'],
        duration: '1 min',
        icon: ShoppingCart,
        cta: { label: 'Voir les formules d’abonnement IPTV', href: '/tarifs', type: 'internal' },
        tip: 'La formule VIP 12 mois débloque les optimisations AirPlay 2 pour le streaming Apple TV et le routage serveur prioritaire.',
      },
      {
        number: 2,
        title: 'Contactez le support sur WhatsApp',
        description: 'Notre équipe d’assistance gère tout via WhatsApp. Confirmez votre formule en euros (€), effectuez le paiement sécurisé et recevez vos identifiants immédiatement dans le chat.',
        chips: ['Carte bancaire', 'PayPal', 'Crypto', 'Apple Pay'],
        duration: '2-3 min',
        icon: MessageCircle,
        cta: { label: 'Discuter sur WhatsApp', type: 'whatsapp', message: 'Bonjour ! J’ai besoin d’aide pour installer un abonnement IPTV sur mon appareil Apple.' },
        tip: 'Si vous utilisez le partage familial, mentionnez-le au support pour bénéficier de conseils multi-appareils entre iPhone, iPad et Apple TV.',
      },
      {
        number: 3,
        title: 'Installez IPTV Smarter Pro',
        description: 'IPTV Smarter Pro fonctionne nativement sur iPhone, iPad et Apple TV 4K avec AirPlay 2, Picture in Picture et la synchronisation iCloud pour les favoris et les données EPG. Disponible sur l’App Store pour iOS et tvOS.',
        chips: ['iOS + tvOS', 'AirPlay 2', 'Picture in Picture', 'Sync iCloud'],
        duration: '2 min',
        icon: Download,
        cta: { label: 'Télécharger IPTV Smarter Pro', type: 'external', href: IBO_DOWNLOAD_URL },
        tip: 'Sur Apple TV, utilisez l’application Apple TV Remote sur votre iPhone pour saisir vos identifiants beaucoup plus rapidement qu’avec la Siri Remote.',
      },
      {
        number: 4,
        title: 'Choisissez votre méthode d’installation',
        description: 'Activation automatique par notre équipe, ou connexion manuelle avec votre URL M3U ou vos codes Xtream. Les deux méthodes offrent des performances de streaming 4K identiques.',
        methods: [
          { title: 'Installation automatique par le support', subtitle: 'Recommandé', points: ['Envoyez votre Device Key', 'Nous activons à distance', 'Vos chaînes se chargent automatiquement'], highlighted: true },
          { title: 'Installation manuelle', subtitle: 'Faites-le vous-même', points: ['Nous envoyons M3U ou Xtream', 'Vous saisissez dans Ajouter une playlist', 'Chargement instantané des chaînes'], highlighted: false },
        ],
        duration: '2 min',
        icon: KeyRound,
        tip: 'L’installation automatique est la plus rapide. L’activation se termine généralement en moins de 60 secondes sur tous les appareils Apple.',
      },
      {
        number: 5,
        title: 'Chargement du contenu — patientez 1 à 2 minutes',
        description: 'Vos chaînes, votre bibliothèque de films et séries et le guide EPG complet sur 7 jours se chargent automatiquement dans IPTV Smarter Pro. Les favoris se synchronisent entre iPhone, iPad et Apple TV via iCloud.',
        chips: ['1 à 2 min', 'EPG auto', 'Favoris iCloud'],
        duration: '1-2 min',
        icon: Plug,
        tip: 'Les favoris se synchronisent automatiquement sur tous les appareils Apple connectés au même compte iCloud.',
      },
      {
        number: 6,
        title: 'Regardez votre abonnement IPTV en 4K',
        description: 'Votre appareil Apple est prêt. Profitez d’un service IPTV 4K premium avec le cast AirPlay, le Picture in Picture et toute la programmation française et internationale.',
        stats: [
          { value: '36 000+', label: 'Chaînes en direct' },
          { value: '120 000+', label: 'Films et séries' },
          { value: '4K HDR', label: 'Qualité' },
          { value: '24/7', label: 'Assistance' },
        ],
        duration: 'Terminé !',
        icon: PlayCircle,
        tip: 'Activez « Réduire les sons forts » dans les réglages audio tvOS pour un son équilibré pendant les retransmissions sportives.',
      },
    ],
  },
  pc: {
    title: 'Installation d’un abonnement IPTV sur PC et Mac',
    icon: Laptop,
    steps: [
      {
        number: 1,
        title: 'Choisissez votre formule d’abonnement IPTV',
        description: 'Sélectionnez 3, 6 ou 12 mois d’accès. Les formules multi-écrans sont parfaites pour les configurations à double écran ou le streaming en arrière-plan au bureau.',
        chips: ['36 000+ chaînes', '120 000+ films', 'Windows & Mac', 'Tarifs en euros (€)'],
        duration: '1 min',
        icon: ShoppingCart,
        cta: { label: 'Voir les formules d’abonnement IPTV', href: '/tarifs', type: 'internal' },
        tip: 'Les formules 2 ou 3 écrans sont idéales pour regarder en arrière-plan au bureau tout en gardant une TV dans une autre pièce.',
      },
      {
        number: 2,
        title: 'Contactez le support sur WhatsApp',
        description: 'Contactez notre équipe d’assistance sur WhatsApp. Nous confirmons la formule en euros (€) et vous envoyons un lien de paiement sécurisé. Demandez l’URL M3U si vous souhaitez utiliser VLC pour une lecture immédiate.',
        chips: ['Carte bancaire', 'PayPal', 'Crypto', 'Apple & Google Pay'],
        duration: '2-3 min',
        icon: MessageCircle,
        cta: { label: 'Discuter sur WhatsApp', type: 'whatsapp', message: 'Bonjour ! J’ai besoin d’installer un abonnement IPTV sur PC ou Mac.' },
        tip: 'Sous Windows, demandez l’URL M3U si vous voulez regarder immédiatement dans VLC avant d’installer un lecteur IPTV complet.',
      },
      {
        number: 3,
        title: 'Téléchargez IPTV Smarter Pro',
        description: 'IPTV Smarter Pro fonctionne sous Windows 10/11 et macOS (Intel + Apple Silicon) avec raccourcis clavier, support multi-fenêtres et lecture 4K accélérée par matériel.',
        chips: ['Windows 10/11', 'macOS', 'Multi-fenêtres', 'Compatible 4K'],
        duration: '2 min',
        icon: Download,
        cta: { label: 'Télécharger IPTV Smarter Pro', type: 'external', href: IBO_DOWNLOAD_URL },
        tip: 'VLC Media Player fonctionne aussi si vous préférez une option légère. Collez simplement l’URL M3U dans VLC → Ouvrir un flux réseau.',
      },
      {
        number: 4,
        title: 'Choisissez votre méthode d’installation',
        description: 'Installation automatique par notre équipe d’assistance, ou saisie manuelle de votre URL M3U ou de vos codes Xtream directement dans IPTV Smarter Pro.',
        methods: [
          { title: 'Installation automatique par le support', subtitle: 'Recommandé', points: ['Envoyez votre Device Key', 'Nous activons à distance', 'L’application se connecte instantanément'], highlighted: true },
          { title: 'Installation manuelle', subtitle: 'Faites-le vous-même', points: ['Nous envoyons l’URL M3U', 'Ou les codes Xtream', 'Collez et regardez'], highlighted: false },
        ],
        duration: '2 min',
        icon: KeyRound,
        tip: 'Sur VLC, appuyez sur Ctrl+L (Windows) ou Cmd+L (Mac) pour afficher la barre latérale de la playlist et gérer vos chaînes.',
      },
      {
        number: 5,
        title: 'Chargement du contenu — patientez 1 à 2 minutes',
        description: 'Votre catalogue IPTV complet se charge automatiquement. 36 000+ chaînes en direct, 120 000+ films et séries et le guide EPG complet sur 7 jours.',
        chips: ['1 à 2 min', 'EPG auto', 'Favoris synchronisés'],
        duration: '1-2 min',
        icon: Plug,
        tip: 'Gardez l’application au premier plan pendant le premier chargement pour une synchronisation plus rapide. Le chargement en arrière-plan fonctionne mais est plus lent.',
      },
      {
        number: 6,
        title: 'Regardez votre abonnement IPTV en 4K',
        description: 'Votre PC ou Mac est prêt. Regardez le sport français en direct, les films et les chaînes internationales en 4K Ultra HD avec lecture accélérée par matériel.',
        stats: [
          { value: '36 000+', label: 'Chaînes en direct' },
          { value: '120 000+', label: 'Films et séries' },
          { value: '4K', label: 'Qualité' },
          { value: '24/7', label: 'Assistance' },
        ],
        duration: 'Terminé !',
        icon: PlayCircle,
        tip: 'Activez l’accélération matérielle dans les paramètres d’IPTV Smarter Pro pour une lecture 4K plus fluide et une utilisation CPU réduite.',
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// FAQ courte — 8 questions (France)
// ---------------------------------------------------------------------------
const setupFaqs = [
  {
    q: 'Comment vais-je recevoir mes identifiants après avoir choisi une formule ?',
    a: 'Tout se fait en direct via WhatsApp. Une fois votre formule confirmée et le paiement effectué, notre équipe d’assistance vous envoie vos identifiants directement dans le chat, généralement en quelques minutes.',
  },
  {
    q: 'Quel lecteur IPTV recommandez-vous pour installer un abonnement IPTV ?',
    a: 'Nous recommandons IPTV Smarter Pro pour le zapping le plus rapide, la consommation RAM la plus faible et les meilleures performances 4K sur Firestick, Smart TV, appareils Apple et PC/Mac. C’est notre premier choix pour une lecture fluide.',
  },
  {
    q: 'Dois-je activer IPTV Smarter Pro séparément ?',
    a: 'Le service d’activation est inclus gratuitement avec chaque abonnement. Choisissez l’installation automatique (envoyez-nous votre Device Key et nous activons à distance) ou l’installation manuelle (saisissez votre URL M3U ou vos codes Xtream).',
  },
  {
    q: 'Combien de temps prend l’installation d’un abonnement IPTV ?',
    a: 'La plupart des clients regardent leurs chaînes en moins de 10 minutes. L’installation d’IPTV Smarter Pro prend environ 2 minutes, l’activation 1 à 2 minutes, et le chargement du contenu 1 à 2 minutes.',
  },
  {
    q: 'Puis-je utiliser mes identifiants sur plusieurs appareils ?',
    a: 'Oui. Vous pouvez installer l’application sur un nombre illimité d’appareils. Le nombre de flux simultanés dépend de votre formule : 1 écran sur la formule Découverte, et 2 ou 3 écrans sur les formules multi-écrans.',
  },
  {
    q: 'Que faire si j’obtiens une erreur de connexion dans IPTV Smarter Pro ?',
    a: 'Vérifiez que vous avez bien sélectionné la méthode Xtream Codes API (et non M3U) et qu’il n’y a aucun espace supplémentaire dans votre nom d’utilisateur ou mot de passe. Si le problème persiste, écrivez-nous sur WhatsApp et la plupart des incidents se résolvent en 2 minutes.',
  },
  {
    q: 'Quelle vitesse Internet est nécessaire pour le streaming 4K ?',
    a: 'Pour la 4K Ultra HD, nous recommandons un minimum de 30 Mbps. Le Full HD 1080p fonctionne parfaitement avec 15 Mbps. Notre technologie anti-freeze s’adapte automatiquement à votre connexion.',
  },
  {
    q: 'Ai-je besoin d’un VPN pour utiliser votre service IPTV ?',
    a: 'Non. Nos serveurs sont optimisés et sécurisés. Si votre fournisseur d’accès Internet applique un bridage pendant les heures de pointe, vous pouvez activer un VPN sans problème.',
  },
];

// ---------------------------------------------------------------------------
// Q&R longues (Section B) — France
// ---------------------------------------------------------------------------
const longFormFaqs = [
  {
    q: 'Quels appareils sont les meilleurs pour installer un abonnement IPTV ?',
    a: 'Pour la meilleure expérience d’abonnement IPTV, nous recommandons Amazon Firestick 4K Max pour les clés de streaming, Samsung Tizen ou LG webOS pour les Smart TV à applications intégrées, Apple TV 4K pour l’écosystème AirPlay, et tout ordinateur Windows 11 ou macOS Sonoma pour une lecture 4K complète. Tous ces appareils prennent en charge IPTV Smarter Pro, notre lecteur IPTV recommandé, et gèrent la 4K et le 60 FPS sans perte de frames. Les appareils plus anciens comme le Firestick Lite ou l’Apple TV de deuxième génération fonctionnent encore mais plafonnent en Full HD. Pour des performances 4K optimales, privilégiez du matériel des deux dernières générations.',
  },
  {
    q: 'Comment fonctionne réellement l’activation à distance ?',
    a: 'L’activation à distance est la méthode d’installation la plus simple. Après nous avoir contactés sur WhatsApp et effectué le paiement, notre équipe d’assistance vous demande votre identifiant d’appareil. Pour IPTV Smarter Pro, il s’agit d’une Device Key ou d’une adresse MAC affichée sur l’écran d’accueil de l’application. Nous enregistrons cette clé sur notre serveur, la lions à votre abonnement, et en moins de 60 secondes votre liste de chaînes se charge automatiquement dès que vous rouvrez l’application. Aucune saisie, aucun identifiant manuel, aucun risque d’erreur. Si vous préférez le faire vous-même, nous envoyons également l’URL M3U et les codes Xtream standard. Les deux méthodes offrent des performances de streaming 4K identiques.',
  },
  {
    q: 'Que faire si ma Smart TV est trop ancienne pour installer IPTV Smarter Pro ?',
    a: 'Si votre Smart TV a plus de 5 ans et ne peut pas installer IPTV Smarter Pro directement, vous avez tout de même des options. La solution la plus populaire est un Amazon Firestick 4K Max. Il se branche sur n’importe quel port HDMI et transforme les TV anciennes en lecteurs IPTV 4K complets en moins de 5 minutes. Alternativement, un boîtier Android TV, un Nvidia Shield ou un Apple TV 4K donne le même résultat. Notre équipe d’assistance WhatsApp aide régulièrement les clients à mettre à niveau des téléviseurs plus anciens avec une clé de streaming économique. Écrivez-nous et nous vous recommanderons le meilleur appareil pour votre modèle de TV et vos habitudes de visionnage.',
  },
  {
    q: 'Puis-je changer d’appareil plus tard ou déplacer mon abonnement ?',
    a: 'Oui, absolument. Votre abonnement IPTV est lié à votre compte, pas à un seul appareil. Si vous passez d’un Firestick à une Apple TV, ajoutez une seconde Smart TV ou déplacez votre installation vers un nouveau PC, contactez simplement notre équipe d’assistance WhatsApp et nous réactiverons l’abonnement sur votre nouvel appareil, généralement en 2 minutes. Les changements d’appareil sont illimités et gratuits pendant toute la durée de votre abonnement. Si vous avez besoin de streaming simultané dans plusieurs pièces, nous proposons des formules 2 écrans et 3 écrans pour que votre foyer puisse regarder différents contenus en même temps sans interruption.',
  },
];

// ---------------------------------------------------------------------------
// ÉTAPE — palette France
// ---------------------------------------------------------------------------
function StepItem({ step, index, isLast }: { step: any; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative">
      <div className="flex gap-4 md:gap-6">
        <div className="flex flex-col items-center shrink-0">
          <motion.div
            className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
              isInView
                ? 'bg-[#FFCD00] shadow-[0_0_25px_rgba(255,205,0,0.45)] scale-110'
                : 'bg-[#FFCD00]/20'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.4, type: 'spring', delay: index * 0.08 }}
          >
            <span className={`text-xl md:text-2xl font-black transition-all duration-300 ${isInView ? 'text-[#0A1B33]' : 'text-[#FFCD00]'}`}>
              {step.number}
            </span>
          </motion.div>
          {!isLast && (
            <motion.div
              className="relative w-0.5 flex-1 min-h-[60px] my-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: index * 0.12 + 0.3 }}
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#FFCD00] to-[#0055A4]"
                initial={{ height: 0 }}
                animate={{ height: isInView ? '100%' : 0 }}
                transition={{ duration: 0.8, delay: index * 0.12 + 0.2 }}
              />
            </motion.div>
          )}
        </div>

        <motion.div
          className="flex-1 pb-10 md:pb-12"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <div className={`bg-[#FFFFFF] border-2 rounded-2xl p-5 md:p-6 transition-all duration-500 ${isInView ? 'border-[#0055A4] shadow-[0_10px_35px_rgba(0,85,164,0.18)]' : 'border-transparent'}`}>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#0055A4]/15">
                  <Icon className="w-5 h-5 text-[#0A1B33]" />
                </div>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#0A1B33]">
                  {step.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0A1B33]/5">
                <Clock className="w-3 h-3 text-[#0055A4]" />
                <span className="text-[#0A1B33]/60 text-[10px] md:text-xs font-bold">{step.duration}</span>
              </div>
            </div>

            <p className="text-[#0055A4] font-medium leading-relaxed text-sm md:text-base mb-4">
              {step.description}
            </p>

            {step.chips && (
              <div className="flex flex-wrap gap-2 mb-4">
                {step.chips.map((chip: string) => (
                  <span key={chip} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0055A4]/10 border border-[#0055A4]/30 text-[#0A1B33] text-[10px] md:text-xs font-black uppercase tracking-wider">
                    {chip}
                  </span>
                ))}
              </div>
            )}

            {step.methods && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {step.methods.map((m: any) => (
                  <div key={m.title} className={`rounded-xl p-4 border-2 transition-all ${m.highlighted ? 'bg-[#0055A4]/5 border-[#0055A4]' : 'bg-[#EEEEEE] border-[#0A1B33]/10'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${m.highlighted ? 'bg-[#0055A4] text-[#FFFFFF]' : 'bg-[#0A1B33]/10 text-[#0A1B33]'}`}>
                        {m.subtitle}
                      </span>
                    </div>
                    <h4 className="text-sm font-black uppercase text-[#0A1B33] mb-2">{m.title}</h4>
                    <ul className="space-y-1">
                      {m.points.map((p: string) => (
                        <li key={p} className="flex items-center gap-2 text-[11px] md:text-xs font-semibold text-[#0055A4]">
                          <CheckCircle2 className="w-3 h-3 text-[#0055A4] shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {step.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {step.stats.map((s: any) => (
                  <div key={s.label} className="rounded-xl bg-[#0A1B33] text-center py-3 px-2 border border-[#FFCD00]/30">
                    <div className="text-base md:text-lg font-black text-[#FFCD00] leading-none">{s.value}</div>
                    <div className="text-[9px] md:text-[10px] font-black uppercase tracking-wider text-[#FFFFFF] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            {step.cta && (
              <div className="mb-4">
                {step.cta.type === 'internal' && (
                  <Link href={step.cta.href} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0055A4] text-[#FFFFFF] text-xs font-black uppercase tracking-widest hover:bg-[#004A8F] transition-all hover:scale-105 shadow-md border border-[#0055A4]">
                    {step.cta.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                {step.cta.type === 'external' && (
                  <a href={step.cta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A1B33] text-[#FFFFFF] text-xs font-black uppercase tracking-widest hover:bg-[#122A4D] transition-all hover:scale-105 shadow-md">
                    <Download className="w-4 h-4" /> {step.cta.label}
                  </a>
                )}
                {step.cta.type === 'whatsapp' && (
                  <a href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(step.cta.message)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 text-white text-xs font-black uppercase tracking-widest hover:bg-green-700 transition-all hover:scale-105 shadow-md">
                    <MessageCircle className="w-4 h-4" /> {step.cta.label}
                  </a>
                )}
              </div>
            )}

            {isInView && step.tip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-3 rounded-xl bg-[#0055A4]/5 border border-[#0055A4]/25 flex gap-2.5"
              >
                <div className="w-6 h-6 rounded-md bg-[#0055A4]/20 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-3.5 h-3.5 text-[#0055A4]" />
                </div>
                <div>
                  <p className="text-[#0055A4] font-black text-[10px] uppercase tracking-wider">Astuce pro</p>
                  <p className="text-[#0A1B33]/75 text-xs font-medium mt-0.5">{step.tip}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// PAGE PRINCIPALE
// ---------------------------------------------------------------------------
export default function SetupPage() {
  const [activeDevice, setActiveDevice] = useState('firestick');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openFaqIndex, setOpenIndex] = useState<number | null>(0);
  const currentData = stepData[activeDevice as keyof typeof stepData];
  const CurrentIcon = currentData.icon;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoOpen(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const closeVideo = () => {
    setIsVideoOpen(false);
    if (iframeRef.current) iframeRef.current.src = '';
  };

  const openVideo = () => {
    setIsVideoOpen(true);
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.src = 'https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0';
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A1B33]">

      {/* ==========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-1.webp"
            alt="Installation d’un abonnement IPTV sur Firestick, Smart TV, Apple et Android"
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
            backgroundImage: `linear-gradient(to right, #0055A4 1px, transparent 1px), linear-gradient(to bottom, #0055A4 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0055A4]/20 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-4 pt-24 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#122A4D] px-4 py-2 rounded-full mb-6 shadow-md border border-[#FFCD00]/40">
                <Sparkles className="w-4 h-4 text-[#FFCD00]" />
                <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
                  Installation facile de votre abonnement IPTV 🇫🇷
                </span>
              </div>
            </FadeInItem>

            <FadeInItem>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none text-center">
                INSTALLEZ VOTRE ABONNEMENT IPTV <br />
                <span className="text-[#FFCD00]">EN MOINS DE 10 MINUTES</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed px-2 text-center mb-6">
                Installez <strong className="text-[#FFFFFF]">IPTV Smarter Pro</strong> et laissez notre équipe d’assistance s’occuper du reste sur WhatsApp. Installation simplifiée pour Firestick, Smart TV, appareils Apple et PC ou Mac.
              </p>
            </FadeInItem>

            <FadeInItem>
              <div className="w-full flex items-center justify-center mb-8">
                <div className="inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-2.5 sm:gap-4 px-4 py-2 rounded-full bg-[#122A4D]/80 border border-[#1E3A5F] shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-1.5 shrink-0"><FlagFR /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">France</span></div>
                  <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>
                  <div className="flex items-center gap-1.5 shrink-0"><FlagCA /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Canada</span></div>
                  <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>
                  <div className="flex items-center gap-1.5 shrink-0"><FlagBE /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Belgique</span></div>
                  <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>
                  <div className="flex items-center gap-1.5 shrink-0"><FlagCH /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Suisse</span></div>
                  <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>
                  <div className="flex items-center gap-1.5 shrink-0"><FlagLU /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Luxembourg</span></div>
                  <span className="text-[#FFFFFF]/20 text-xs font-black">•</span>
                  <div className="flex items-center gap-1.5 shrink-0"><FlagMC /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Monaco</span></div>
                </div>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[#FFFFFF]/60 text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-[#FFCD00]" /> Installation sécurisée</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#FFCD00]" /> 10 min d’installation</span>
                <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-[#FFCD00]" /> Assistance 24/7</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-[#FFCD00]" /> 50 000+ téléspectateurs</span>
              </div>
            </FadeInItem>


            <FadeInItem className="mt-8 relative flex justify-center">
              <button
                onClick={openVideo}
                className="inline-flex items-center justify-center p-2 rounded-full bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 hover:border-[#FFCD00]/60 transition-all duration-300 relative z-10 shadow-inner group cursor-pointer"
                aria-label="Regarder le tutoriel vidéo d’installation d’un abonnement IPTV"
              >
                <div className="flex items-center gap-4 bg-[#FFFFFF]/5 px-6 sm:px-8 py-4 sm:py-5 rounded-full border border-[#FFFFFF]/10 hover:bg-[#FFFFFF]/10 transition-colors">
                  <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#FFCD00] shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-[#FFFFFF] font-black uppercase tracking-widest text-xs sm:text-sm md:text-base">
                      Tutoriel vidéo
                    </p>
                    <p className="text-[#FFFFFF]/60 text-[10px] sm:text-xs font-bold uppercase tracking-wide mt-0.5">
                      Guide visuel étape par étape
                    </p>
                  </div>
                </div>
              </button>
              <div className="absolute inset-0 rounded-full bg-[#FFCD00]/15 animate-pulse blur-md scale-110 pointer-events-none" />
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          BANNIÈRE CTA — Essai gratuit
      ========================================================== */}
      <section className="w-full bg-gradient-to-r from-[#0055A4] via-[#0A1B33] to-[#0055A4] py-10 px-4 sm:px-6 border-y-4 border-[#FFCD00]/30 shadow-[0_0_50px_rgba(0,85,164,0.4)] relative z-20 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="relative inline-block">
            <div className="bg-[#FFCD00] text-[#0A1B33] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md animate-bounce">
              ESSAI GRATUIT DE 24 HEURES
            </div>
            <div className="absolute inset-0 rounded-full bg-[#FFCD00]/30 animate-ping opacity-75 pointer-events-none" />
          </div>
          <h4 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            ESSAYEZ VOTRE ABONNEMENT IPTV GRATUITEMENT AVEC IPTV SMARTER PRO !
          </h4>
          <p className="text-[#FFFFFF]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            36 000+ chaînes en direct, 120 000+ films et séries, sport français en direct et PPV. Activation via WhatsApp en quelques minutes.
          </p>
          <div className="w-full sm:w-auto mt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Bonjour ! Je souhaite l’essai gratuit de 24 heures pour installer un abonnement IPTV.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FFCD00] text-[#0A1B33] hover:bg-[#0A1B33] hover:text-[#FFCD00] hover:scale-105 transition-all duration-300 px-8 sm:px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" /> <span>Obtenir l’essai gratuit</span>
            </a>
            <Link
              href="/tarifs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0A1B33] text-[#FFFFFF] hover:bg-[#FFCD00] hover:text-[#0A1B33] transition-all duration-300 px-8 sm:px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl border-2 border-[#FFCD00]"
            >
              Voir les formules <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SÉLECTION DE L’APPAREIL
      ========================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0A1B33]">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tighter leading-none">
            Installez votre abonnement IPTV sur <span className="text-[#FFCD00]">votre appareil</span>
          </h2>
          <p className="text-[#FFFFFF]/70 text-base md:text-lg font-bold max-w-2xl mx-auto mt-4">
            Sélectionnez votre plateforme ci-dessous pour des instructions d’installation détaillées étape par étape.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {devices.map((device) => {
            const Icon = device.icon;
            const isActive = activeDevice === device.id;
            return (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`relative p-4 sm:p-6 rounded-3xl text-center transition-all duration-300 cursor-pointer group ${
                  isActive
                    ? 'bg-[#FFFFFF] text-[#0A1B33] border-2 border-[#FFCD00] shadow-2xl scale-[1.02]'
                    : 'bg-[#FFFFFF] text-[#0A1B33] border-2 border-transparent hover:border-[#FFCD00]/40'
                }`}
              >
                {device.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#EF4135] text-[#FFFFFF] font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded-full whitespace-nowrap shadow-md border border-[#FFCD00]/40">
                    Le plus populaire
                  </div>
                )}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-colors ${isActive ? 'bg-[#0A1B33] text-[#FFCD00]' : 'bg-[#0A1B33]/5 text-[#0055A4]'}`}>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-wide mb-2">{device.name}</h3>
                <p className={`text-[10px] sm:text-xs font-bold ${isActive ? 'text-[#0A1B33]/60' : 'text-[#0A1B33]/40'}`}>
                  {device.steps} étapes simples
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* ==========================================================
          CHRONOLOGIE
      ========================================================== */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0A1B33]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#122A4D] text-[#FFFFFF] font-black uppercase text-xs tracking-widest mb-4 shadow-md max-w-full border border-[#FFCD00]/40">
            <CurrentIcon className="w-4 h-4 text-[#FFCD00] shrink-0" />
            <span className="truncate">{currentData.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tighter">
            Installation <span className="text-[#FFCD00]">étape par étape</span>
          </h2>
          <p className="text-[#FFFFFF]/60 text-sm md:text-base font-bold uppercase tracking-widest mt-2">
            Suivez les étapes pour une installation réussie en moins de 10 minutes
          </p>
        </div>

        <div className="relative px-2">
          {currentData.steps.map((step, index) => (
            <StepItem key={step.number} step={step} index={index} isLast={index === currentData.steps.length - 1} />
          ))}
        </div>

        {/* Carte de succès */}
        <motion.div
          className="text-center mt-12 p-6 sm:p-8 md:p-10 rounded-3xl bg-[#FFFFFF] border-4 border-[#FFCD00] shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-[#0055A4] mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0A1B33] uppercase tracking-tight mb-3">
            Installation terminée ! 🇫🇷
          </h3>
          <p className="text-[#0055A4] font-bold text-sm sm:text-base max-w-md mx-auto mb-8">
            Vous êtes prêt à regarder avec IPTV Smarter Pro. Profitez de 36 000+ chaînes et 120 000+ films et séries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            <Link href="/" className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 border border-[#0055A4]">
              Retour à l’accueil
            </Link>
            <Link href="/tarifs" className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#0A1B33] text-[#FFFFFF] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 border-2 border-[#FFCD00]">
              Voir les formules
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ==========================================================
          POURQUOI INSTALLER AVEC NOUS
      ========================================================== */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0A1B33]">
        <FadeIn className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/40 px-4 py-1.5 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4 text-[#FFCD00]" />
            <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
              Pourquoi les clients nous choisissent
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
            Pourquoi installer votre abonnement IPTV <span className="text-[#FFCD00]">avec notre équipe ?</span>
          </h2>
          <p className="text-[#FFFFFF]/70 text-base md:text-lg font-bold max-w-3xl mx-auto leading-relaxed">
            Des milliers de foyers français font confiance à notre support WhatsApp pour gérer toute l’installation de leur abonnement IPTV, de la sélection de la formule à l’activation d’IPTV Smarter Pro. Voici pourquoi nos clients nous préfèrent aux guides génériques.
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: 'Une véritable équipe francophone',
              desc: 'Une équipe réelle adaptée aux téléspectateurs français, avec des tarifs en euros et une connaissance du marché français et européen. Aucun script, aucune barrière linguistique.',
            },
            {
              icon: Zap,
              title: 'Activation clé en main',
              desc: 'Envoyez-nous votre Device Key sur WhatsApp et nous gérons 100 % de la partie technique. Vous n’avez qu’à installer IPTV Smarter Pro. Tout le reste est pour nous.',
            },
            {
              icon: Clock,
              title: 'Installation en moins de 10 minutes',
              desc: 'Le temps moyen d’installation entre le premier message et la première chaîne en direct est de 8 à 10 minutes. Les plus rapides activent en moins de 5 minutes.',
            },
            {
              icon: PlayCircle,
              title: 'Experts IPTV Smarter Pro',
              desc: 'Nous sommes spécialistes d’IPTV Smarter Pro, l’un des lecteurs IPTV les plus stables disponibles. Nous connaissons ses réglages, ses particularités et ses optimisations sur le bout des doigts.',
            },
            {
              icon: MessageCircle,
              title: 'Chat WhatsApp en temps réel',
              desc: 'Pas de tickets par e-mail, pas de réponses qui traînent. Notre support répond sur WhatsApp en moins de 2 minutes, 24h/24 et 7j/7.',
            },
            {
              icon: Lock,
              title: 'Paiements sécurisés',
              desc: 'Payez en toute sécurité par carte bancaire, PayPal, crypto ou Apple & Google Pay. Toutes les transactions sont chiffrées et traitées avec SSL 256 bits.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeInItem key={idx} className="bg-[#FFFFFF] border-2 border-[#0055A4]/30 rounded-2xl p-6 md:p-7 hover:border-[#FFCD00] hover:shadow-[0_15px_40px_rgba(255,205,0,0.18)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#0A1B33]" />
                </div>
                <h3 className="text-lg md:text-xl font-black text-[#0A1B33] uppercase tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-[#0055A4] text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>

        <FadeIn className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-[#FFFFFF]/70 text-sm sm:text-base font-medium leading-relaxed mb-8">
            Installer un abonnement IPTV ne devrait pas être compliqué. Notre équipe a activé des milliers d’abonnements sur Firestick, Smart TV, appareils Apple, boîtiers Android et ordinateurs. Chaque client bénéficie du même service haut de gamme : chat WhatsApp en temps réel, accompagnement en direct et service complet d’activation d’IPTV Smarter Pro. Que vous coupiez le câble pour la première fois ou que vous passiez d’un abonnement lent à la fibre, nous vous mettons en ligne en moins de 10 minutes.
          </p>
          <a
            href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Bonjour ! Je souhaite obtenir de l’aide pour installer mon abonnement IPTV.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFCD00] text-[#0A1B33] font-black text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(255,205,0,0.35)] hover:scale-105 transition-transform border border-[#FFCD00]"
          >
            <MessageCircle className="w-5 h-5" /> Obtenir de l’aide pour l’installation
          </a>
        </FadeIn>
      </section>

      {/* ==========================================================
          GRILLE DE SUPPORT
      ========================================================== */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0A1B33]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 sm:p-8 text-center shadow-xl group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#0055A4]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#0055A4]/20 transition-colors">
              <Gift className="w-7 h-7 sm:w-8 sm:h-8 text-[#0A1B33]" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#0A1B33] mb-2 uppercase tracking-wide">
              Essai gratuit de 24 heures
            </h3>
            <p className="text-[#0055A4] text-sm font-medium mb-5">
              Testez IPTV Smarter Pro et notre service complet gratuitement pendant 24 heures. Écrivez à notre équipe sur WhatsApp pour activer immédiatement.
            </p>
            <a
              href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Bonjour ! Je souhaite l’essai gratuit de 24 heures de l’abonnement IPTV.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0A1B33] font-black uppercase text-xs tracking-widest hover:gap-3 transition-all"
            >
              Demander l’essai gratuit <ArrowRight className="w-4 h-4 text-[#0055A4]" />
            </a>
          </div>

          <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 sm:p-8 text-center shadow-xl group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-green-500/20 transition-colors">
              <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#0A1B33] mb-2 uppercase tracking-wide">
              Assistance 24/7 pour l’installation
            </h3>
            <p className="text-[#0055A4] text-sm font-medium mb-5">
              Notre équipe gère tout via WhatsApp : formule, paiement, activation d’IPTV Smarter Pro et installation complète de votre abonnement IPTV.
            </p>
            <a
              href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Bonjour ! J’ai besoin d’aide pour installer mon abonnement IPTV.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-700 font-black uppercase text-xs tracking-widest hover:gap-3 transition-all"
            >
              Discuter sur WhatsApp <ArrowRight className="w-4 h-4 text-green-700" />
            </a>
          </div>
        </div>
      </section>

      {/* Partage */}
      <div className="w-full flex justify-center items-center mb-10">
        <ShareButtons />
      </div>

      {/* ==========================================================
          FAQ — 8 questions courtes
      ========================================================== */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0A1B33] relative" aria-label="FAQ installation abonnement IPTV">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#0055A4]/10 blur-[120px] rounded-full pointer-events-none" />

        <FadeIn className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#122A4D] px-4 py-2 rounded-full mb-6 shadow-md border border-[#FFCD00]/40">
            <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">FAQ installation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tighter leading-none">
            Questions sur <span className="text-[#FFCD00]">l’installation</span>
          </h2>
          <p className="text-[#FFFFFF]/70 font-bold text-base md:text-lg max-w-2xl mx-auto mt-4">
            Réponses rapides aux questions les plus courantes sur l’installation d’un abonnement IPTV.
          </p>
        </FadeIn>

        <FadeInStagger className="space-y-4 relative z-10">
          {setupFaqs.map((faq, i) => (
            <FadeInItem key={i}>
              <button
                onClick={() => setOpenIndex(openFaqIndex === i ? null : i)}
                className={`w-full text-left bg-[#FFFFFF] border-4 ${openFaqIndex === i ? 'border-[#FFCD00]' : 'border-transparent'} rounded-2xl p-5 sm:p-6 hover:border-[#FFCD00]/60 transition-all duration-300 group cursor-pointer`}
                aria-expanded={openFaqIndex === i}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className={`text-base sm:text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${openFaqIndex === i ? 'text-[#0055A4]' : 'text-[#0A1B33] group-hover:text-[#0055A4]'} flex items-start sm:items-center gap-3 text-left`}>
                    <span className={`${openFaqIndex === i ? 'text-[#0055A4]' : 'text-[#0A1B33]/30'} font-black text-xl sm:text-2xl shrink-0`}>Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180 text-[#0055A4]' : 'text-[#0A1B33]/30 group-hover:text-[#0055A4]/50'}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#0055A4] font-medium leading-relaxed text-sm sm:text-base pl-9 sm:pl-12 border-l-4 border-[#0055A4] ml-1 sm:ml-2 py-2">
                    {faq.a}
                  </p>
                </div>
              </button>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* ==========================================================
          Q&R LONGUES
      ========================================================== */}
      <section className="py-20 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0A1B33] relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-[#0055A4]/10 blur-[130px] rounded-full pointer-events-none" />

        <FadeIn className="text-center mb-12 md:mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/40 px-4 py-1.5 rounded-full mb-6">
            <Globe className="w-4 h-4 text-[#FFCD00]" />
            <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
              Guide détaillé
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
            L’installation <span className="text-[#FFCD00]">expliquée en profondeur</span>
          </h2>
          <p className="text-[#FFFFFF]/70 text-base md:text-lg font-bold max-w-3xl mx-auto leading-relaxed">
            Des réponses plus longues aux questions que notre équipe reçoit le plus souvent. Chaque réponse vous aide à tirer le meilleur parti de votre abonnement IPTV et de l’installation d’IPTV Smarter Pro.
          </p>
        </FadeIn>

        <FadeInStagger className="space-y-6 relative z-10">
          {longFormFaqs.map((item, idx) => (
            <FadeInItem key={idx} className="bg-[#FFFFFF] border-2 border-[#0055A4]/30 rounded-2xl p-6 md:p-8 hover:border-[#FFCD00]/60 transition-colors">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#0A1B33] uppercase tracking-tight mb-4 flex items-start gap-3">
                <span className="text-[#0055A4] text-2xl shrink-0">Q.</span>
                <span>{item.q}</span>
              </h3>
              <p className="text-[#0055A4] font-medium leading-relaxed text-sm sm:text-base pl-6 sm:pl-8 border-l-4 border-[#0055A4]">
                {item.a}
              </p>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-12 text-center">
          <a
            href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Bonjour ! J’ai une question sur l’installation de mon abonnement IPTV.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0A1B33] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,85,164,0.25)] border-2 border-[#FFCD00]"
          >
            <Phone className="w-5 h-5 text-[#FFCD00]" /> Poser une question sur WhatsApp
          </a>
        </FadeIn>
      </section>

      {/* ==========================================================
          MODALE VIDÉO
      ========================================================== */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeVideo(); }}
        >
          <div className="relative w-full max-w-4xl">
            <button onClick={closeVideo} className="absolute -top-12 right-0 text-[#FFFFFF]/60 hover:text-[#FFCD00] transition-colors cursor-pointer flex items-center gap-2 text-xs sm:text-sm font-bold z-10 uppercase tracking-widest">
              <X className="w-5 h-5 shrink-0" /> Fermer la vidéo
            </button>
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#0055A4] bg-black">
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0&modestbranding=1"
                title="Installation d’un abonnement IPTV - Tutoriel complet"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}