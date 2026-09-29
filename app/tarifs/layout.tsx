// app/pricing/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

// ---------------------------------------------------------------------------
// FONCTIONS UTILITAIRES SEO — limites de caractères
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// CONSTANTES SEO
const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/pricing`;

// ---------------------------------------------------------------------------
// CHAÎNES SEO — France / EUR
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `Tarifs et formules d’abonnement IPTV en France | Chaînes 4K`
);

const PAGE_DESCRIPTION = clampDescription(
  `Économisez jusqu’à 50 % sur l’IPTV dès 29 € : +36 000 chaînes, 120 000 films, essai gratuit. Formules 3, 6 ou 12 mois.`
);

// ---------------------------------------------------------------------------
// CONFIGURATION DES MÉTADONNÉES
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  authors: [{ name: `${BRAND}` }],
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
        alt: 'Tarifs abonnement IPTV — Formules France en 4K',
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
    CONSTANTS.FOCUS_KEYWORD,
    CONSTANTS.SECONDARY_FOCUS_KEYWORD,
    'tarif abonnement iptv',
    'formule abonnement iptv',
    'prix abonnement iptv',
    'cout abonnement iptv',
    'acheter abonnement iptv',
    'abonnement iptv france',
    'iptv 4k france',
    'essai iptv gratuit',
    'iptv firestick france',
    'iptv ligue 1',
    'iptv ligue des champions',
    'iptv nba',
    'iptv formule 1',
    'iptv smart tv',
  ],
};

// ---------------------------------------------------------------------------
// SCHÉMAS JSON-LD — Organization, Product, FAQ, BreadcrumbList (France)
// ---------------------------------------------------------------------------
const PricingPageSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  // Spécifications de livraison numérique — France
  const digitalDeliveryDetails = {
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: CONSTANTS.CURRENCY,
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'FR',
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
      },
    },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'FR',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    },
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
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

      // PRODUIT — Offres tarifaires en EUR
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: `Formules d’abonnement IPTV France`,
        alternateName: CONSTANTS.FOCUS_KEYWORD,
        image: `${SITE_URL}/img/structer.webp`,
        description: `Formules d’abonnement IPTV premium à partir de 29 € avec plus de 36 000 chaînes en direct, 120 000 films et séries en 4K Ultra HD. Installation guidée sur WhatsApp et essai gratuit avant paiement.`,
        brand: {
          '@type': 'Brand',
          '@id': `${SITE_URL}/#brand`,
          name: BRAND,
        },
        sku: 'ABONNEMENT-IPTV-FR-TARIFS',
        category: 'Service de streaming',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1255',
          bestRating: '5',
          worstRating: '1',
        },
        offers: [
          {
            '@type': 'Offer',
            name: '1 écran - 3 mois',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '29.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `Abonnement de 3 mois sur 1 appareil avec plus de 36 000 chaînes en direct et 120 000 films et séries.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '1 écran - 6 mois',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '39.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `Abonnement de 6 mois sur 1 appareil avec plus de 36 000 chaînes en direct et 120 000 films et séries.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '1 écran - 12 mois',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '55.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `Abonnement de 12 mois sur 1 appareil avec plus de 36 000 chaînes en direct et 120 000 films et séries.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '2 écrans - 3 mois',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '45.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `Abonnement de 3 mois sur 2 appareils avec plus de 36 000 chaînes en direct et 120 000 films et séries.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '2 écrans - 6 mois',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '60.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `Abonnement de 6 mois sur 2 appareils avec plus de 36 000 chaînes en direct et 120 000 films et séries.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '2 écrans - 12 mois',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '75.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `Abonnement de 12 mois sur 2 appareils avec plus de 36 000 chaînes en direct et 120 000 films et séries.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '3 écrans - 3 mois',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '65.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `Abonnement de 3 mois sur 3 appareils avec plus de 36 000 chaînes en direct et 120 000 films et séries.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '3 écrans - 6 mois',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '75.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `Abonnement de 6 mois sur 3 appareils avec plus de 36 000 chaînes en direct et 120 000 films et séries.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '3 écrans - 12 mois',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '99.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `Abonnement de 12 mois sur 3 appareils avec plus de 36 000 chaînes en direct et 120 000 films et séries.`,
            ...digitalDeliveryDetails,
          },
        ],
      },

      // FAQ — France
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `Quels moyens de paiement acceptez-vous ?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Nous acceptons toutes les cartes bancaires principales (Visa, Mastercard, American Express), PayPal et les cryptomonnaies (Bitcoin, Ethereum, USDT). Tous les tarifs sont affichés en euros (€) et chaque paiement est traité de manière sécurisée via des connexions chiffrées SSL 256 bits.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je mettre à niveau ou modifier mon abonnement plus tard ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Oui, vous pouvez mettre à niveau à tout moment pour ajouter des écrans ou passer à une période plus longue. Contactez simplement notre équipe d’assistance sur WhatsApp et nous ajusterons votre compte immédiatement.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Y a-t-il un engagement ou un renouvellement automatique ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Non, absolument pas. Il n’y a aucun engagement à long terme ni renouvellement automatique. Chaque formule est un paiement unique prépayé qui s’arrête de lui-même à la fin de la période.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Que se passe-t-il à l’expiration de mon abonnement ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Nous vous enverrons un rappel avant la fin de votre abonnement. Vous pourrez le renouveler facilement via WhatsApp. Si vous décidez de ne pas renouveler, le service s’arrête automatiquement sans aucune obligation.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Proposez-vous un essai gratuit avant de m’engager ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Oui. Écrivez-nous sur WhatsApp et nous vous configurons un essai gratuit de 24 heures pour tester la qualité d’image 4K et la liste des chaînes sur votre propre appareil et connexion Internet. Passez à une formule payante uniquement quand vous êtes satisfait.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je utiliser le service sur plusieurs appareils simultanément ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Oui, selon la formule choisie. Vous pouvez sélectionner 1, 2 ou 3 écrans simultanés lors de la commande pour regarder dans plusieurs pièces à la fois. Chaque membre du foyer peut regarder ce qu’il souhaite.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Y a-t-il des réductions pour les abonnements plus longs ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Oui. Nos formules de 12 mois offrent les économies les plus importantes, jusqu’à 50 % de réduction par rapport aux formules courtes. C’est l’option la plus avantageuse pour un foyer qui sait qu’il restera fidèle.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Ai-je besoin d’un VPN pour utiliser votre service IPTV en France ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Aucun VPN n’est requis. Nos serveurs sont optimisés pour les connexions françaises et européennes afin d’offrir un streaming fluide et sans coupure sur votre connexion domestique.`,
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
            name: 'Tarifs',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="pricing-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// LAYOUT TARIFICATION — palette France
// ---------------------------------------------------------------------------
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0A1B33] text-[#FFFFFF]">
      <PricingPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}