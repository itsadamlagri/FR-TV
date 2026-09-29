// app/installation/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

// ---------------------------------------------------------------------------
// FONCTIONS UTILITAIRES SEO
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/installation`;

// ---------------------------------------------------------------------------
// CHAÎNES SEO — France / EUR
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `Installation abonnement IPTV en France | Firestick, Smart TV`
);

const PAGE_DESCRIPTION = clampDescription(
  `Abonnement IPTV en France : profitez du sport, des films et de la TV en 4K. +36 000 chaînes, 120 000 films et essai gratuit.`
);

// ---------------------------------------------------------------------------
// MÉTADONNÉES
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_TITLE,
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  authors: [{ name: BRAND }],
  creator: BRAND,
  publisher: BRAND,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'fr-FR': PAGE_URL,
      'fr-BE': PAGE_URL,
      'fr-CH': PAGE_URL,
      'fr-CA': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Abonnement IPTV',
    locale: CONSTANTS.LOCALE,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `Guide d’installation d’un abonnement IPTV pour Firestick, Smart TV et mobile`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  category: 'Divertissement',
  keywords: [
    'installation abonnement iptv',
    'installation iptv firestick',
    'installer iptv smart tv',
    'IPTV Smarter Pro installation',
    'meilleur abonnement iptv',
    'abonnement iptv france',
    'installation iptv france',
    'comment installer iptv',
    'iptv firestick france',
    'iptv android tv installation',
    'iptv apple tv installation',
    'iptv mag box installation',
    'iptv xtream codes installation',
    'guide playlist m3u iptv',
    'application iptv smart tv',
  ],
};

// ---------------------------------------------------------------------------
// SCHÉMAS JSON-LD — HowTo + FAQPage + Fil d’Ariane (France)
// ---------------------------------------------------------------------------
const SetupPageSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // ENTITÉ MARQUE
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        email: CONSTANTS.CONTACT?.email || '',
        telephone: CONSTANTS.CONTACT?.phone || '',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT?.phone || '',
          email: CONSTANTS.CONTACT?.email || '',
          contactType: 'customer service',
          availableLanguage: ['French'],
          areaServed: 'FR',
          contactOption: 'https://schema.org/TollFree',
        },
        sameAs: Object.values(CONSTANTS.SOCIALS ?? {}),
      },

      // SCHÉMA HOWTO
      {
        '@type': 'HowTo',
        '@id': `${PAGE_URL}/#howto`,
        name: `Comment installer un abonnement IPTV sur tous vos appareils en France`,
        description: `Guide d’installation complet étape par étape pour un abonnement IPTV sur Firestick, Smart TV, Android, Apple TV et PC ou Mac. Installation guidée sur WhatsApp et essai gratuit de 24 heures.`,
        totalTime: 'PT10M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'EUR',
          value: '29.00',
        },
        image: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/img/structer.webp`,
          width: 1200,
          height: 630,
        },
        supply: [
          {
            '@type': 'HowToSupply',
            name: 'Smart TV, Firestick, Android TV, Apple TV ou PC ou Mac',
          },
          {
            '@type': 'HowToSupply',
            name: 'Connexion Internet stable (minimum 15 Mbps, 30 Mbps pour la 4K)',
          },
          {
            '@type': 'HowToSupply',
            name: `Abonnement IPTV actif ou essai gratuit`,
          },
        ],
        tool: [
          {
            '@type': 'HowToTool',
            name: 'IPTV Smarter Pro (lecteur IPTV recommandé)',
          },
          {
            '@type': 'HowToTool',
            name: 'WhatsApp (pour une assistance 24/7 à l’installation)',
          },
        ],
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Choisissez votre formule',
            text: `Rendez-vous sur la page des tarifs et sélectionnez votre abonnement IPTV. Choisissez 3, 6 ou 12 mois avec 1, 2 ou 3 écrans simultanés. Les tarifs sont en euros (€).`,
            url: `${SITE_URL}/tarifs`,
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Contactez le support sur WhatsApp',
            text: 'Écrivez à notre équipe sur WhatsApp. Nous confirmons le tarif en euros (€), vous envoyons un lien de paiement sécurisé et vous guidons pas à pas de l’installation au premier visionnage.',
            url: CONSTANTS.CONTACT?.whatsappUrl || '#',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Téléchargez IPTV Smarter Pro',
            text: 'Installez IPTV Smarter Pro, l’un des lecteurs IPTV les plus rapides et les plus stables pour Firestick, Smart TV, appareils Apple et PC ou Mac.',
            url: 'https://iboplayer.pro/',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Choisissez l’installation automatique ou manuelle',
            text: 'Choisissez l’installation automatique où notre équipe active à distance à partir de votre Device Key, ou l’installation manuelle où vous saisissez l’URL M3U ou les codes Xtream que nous vous envoyons sur WhatsApp.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Chargement du contenu en 1 à 2 minutes',
            text: 'Une fois activé, IPTV Smarter Pro charge automatiquement votre liste complète de chaînes, votre bibliothèque de films et séries, et le guide EPG sur 7 jours.',
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Testez avec votre essai gratuit',
            text: 'Testez tout avec l’essai gratuit de 24 heures. Vérifiez la qualité d’image, la programmation sportive et la lecture sur votre appareil avant de passer à une formule payante.',
          },
          {
            '@type': 'HowToStep',
            position: 7,
            name: 'Commencez à regarder votre abonnement IPTV',
            text: 'Profitez d’un accès instantané à plus de 36 000 chaînes en direct et 120 000 films et séries en qualité 4K. La couverture sportive inclut la Ligue 1, la Ligue des Champions, la Premier League, la NBA, la Formule 1 et les grands combats PPV, ainsi que TF1, France 2, M6, Canal+, beIN Sports et RMC Sport.',
          },
        ],
      },

      // SCHÉMA FAQ
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Comment vais-je recevoir mes identifiants après avoir choisi une formule ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Tout se fait en direct via WhatsApp. Une fois votre formule confirmée et le paiement effectué, notre équipe vous envoie vos identifiants directement dans le chat, généralement en quelques minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel lecteur IPTV recommandez-vous ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Nous recommandons IPTV Smarter Pro pour le zapping le plus rapide, la consommation RAM la plus faible et les meilleures performances 4K sur Firestick, Smart TV, appareils Apple et PC/Mac. C’est l’un de nos premiers choix pour une lecture fluide.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Dois-je activer IPTV Smarter Pro séparément ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le service d’activation est inclus gratuitement avec chaque abonnement. Choisissez l’installation automatique où vous nous envoyez votre Device Key et nous activons à distance, ou l’installation manuelle où vous saisissez vous-même M3U ou Xtream Codes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Combien de temps prend l’installation complète ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La plupart des clients regardent leurs chaînes en moins de 10 minutes. L’installation d’IPTV Smarter Pro prend environ 2 minutes, l’activation 1 à 2 minutes et le chargement du contenu 1 à 2 minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je utiliser mes identifiants sur plusieurs appareils ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, vous pouvez installer l’application sur un nombre illimité d’appareils. Le nombre de flux simultanés dépend de votre formule : 1 écran sur la formule Découverte, 2 ou 3 écrans sur les formules multi-écrans.',
            },
          },
          {
            '@type': 'Question',
            name: 'Que faire si j’obtiens une erreur de connexion dans IPTV Smarter Pro ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vérifiez que vous avez bien sélectionné la méthode Xtream Codes API (et non M3U) et qu’il n’y a aucun espace supplémentaire dans votre nom d’utilisateur ou mot de passe. Si le problème persiste, écrivez-nous sur WhatsApp et la plupart des incidents se résolvent en 2 minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quelle vitesse Internet est nécessaire pour le streaming 4K ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pour la 4K Ultra HD, nous recommandons un minimum de 30 Mbps. Le Full HD 1080p fonctionne parfaitement avec 15 Mbps. Notre technologie anti-freeze s’adapte automatiquement à votre connexion.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ai-je besoin d’un VPN pour utiliser votre service ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non, nos serveurs sont optimisés et sécurisés. Si votre fournisseur d’accès Internet applique un bridage pendant les heures de pointe, vous pouvez activer un VPN sans problème.',
            },
          },
        ],
      },

      // FIL D’ARIANE
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guide d’installation',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="setup-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// LAYOUT INSTALLATION — palette France
// ---------------------------------------------------------------------------
export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0A1B33] text-[#FFFFFF]">
      <SetupPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}