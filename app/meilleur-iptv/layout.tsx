// app/meilleur-iptv/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/meilleur-iptv`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `Meilleur IPTV en France | Plus de 36 000 chaînes en 4K`
);

const PAGE_DESCRIPTION = clampDescription(
  `Découvrez le meilleur IPTV en France. Plus de 36 000 chaînes et 120 000 films en 4K. Essai gratuit d’abord, installation WhatsApp, tarifs en euros (€) sans engagement.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'meilleur iptv',
    'meilleur abonnement iptv',
    'meilleur iptv france',
    'meilleur fournisseur iptv',
    'meilleur service iptv',
    'meilleur iptv 4k',
    'meilleur iptv france 2026',
    'meilleur iptv pas cher',
    'comparatif iptv',
    'classement iptv france',
    'abonnement iptv france',
    'meilleur iptv firestick',
    'meilleur iptv smart tv',
    'fournisseur iptv france',
    'service iptv france',
  ],
  authors: [{ name: BRAND }],
  creator: BRAND,
  publisher: BRAND,
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
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `Meilleur IPTV en France - Plus de 36 000 chaînes en direct en 4K Ultra HD`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
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
  category: 'Divertissement',
};

const MeilleurIPTVSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

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
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} est un fournisseur IPTV de confiance en France avec plus de 36 000 chaînes en direct et 120 000 films et séries en 4K Ultra HD.`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT.phone,
          email: CONSTANTS.CONTACT.email,
          contactType: 'customer service',
          availableLanguage: ['French'],
          areaServed: 'FR',
          contactOption: 'https://schema.org/TollFree',
        },
        sameAs: [
          CONSTANTS.SOCIALS.twitter,
          CONSTANTS.SOCIALS.instagram,
          CONSTANTS.SOCIALS.facebook,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND,
        alternateName: `${BRAND} - Meilleur abonnement IPTV en France`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'fr-FR',
      },
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${PAGE_URL}/#product` },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Meilleur IPTV', item: PAGE_URL },
        ],
      },
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: 'Meilleur IPTV en France — abonnement premium',
        sku: 'MEILLEUR-IPTV-FR',
        category: 'Service de streaming',
        description: `Le meilleur IPTV en France. Plus de 36 000 chaînes en direct et 120 000 films et séries en 4K Ultra HD. Installation guidée sur WhatsApp, essai gratuit disponible, tarifs en euros (€) sans engagement.`,
        image: `${SITE_URL}/img/structer.webp`,
        brand: { '@type': 'Brand', name: BRAND },
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
            priceCurrency: 'EUR',
            price: '29.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/tarifs`,
            description: 'Meilleur IPTV — formule 3 mois sur 1 appareil avec plus de 36 000 chaînes en direct.',
          },
          {
            '@type': 'Offer',
            name: '1 écran - 6 mois',
            priceCurrency: 'EUR',
            price: '39.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/tarifs`,
            description: 'Meilleur IPTV — formule 6 mois sur 1 appareil avec plus de 36 000 chaînes en direct.',
          },
          {
            '@type': 'Offer',
            name: '1 écran - 12 mois',
            priceCurrency: 'EUR',
            price: '55.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/tarifs`,
            description: 'Meilleur IPTV — formule VIP 12 mois sur 1 appareil avec plus de 36 000 chaînes en direct.',
          },
          {
            '@type': 'Offer',
            name: '2 écrans - 6 mois',
            priceCurrency: 'EUR',
            price: '60.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/tarifs`,
            description: 'Meilleur IPTV — formule 6 mois sur 2 appareils avec plus de 36 000 chaînes en direct.',
          },
          {
            '@type': 'Offer',
            name: '2 écrans - 12 mois',
            priceCurrency: 'EUR',
            price: '75.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/tarifs`,
            description: 'Meilleur IPTV — formule VIP 12 mois sur 2 appareils avec plus de 36 000 chaînes en direct.',
          },
          {
            '@type': 'Offer',
            name: '3 écrans - 12 mois',
            priceCurrency: 'EUR',
            price: '99.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/tarifs`,
            description: 'Meilleur IPTV — formule VIP 12 mois sur 3 appareils avec plus de 36 000 chaînes en direct.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Qu’est-ce que le meilleur IPTV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le meilleur IPTV est un service de streaming premium qui diffuse des chaînes de télévision en direct, des films et des séries via votre connexion Internet. En France, notre meilleur abonnement IPTV offre plus de 36 000 chaînes en direct et 120 000 films et séries en 4K Ultra HD, avec une installation guidée sur WhatsApp et des tarifs en euros (€).',
            },
          },
          {
            '@type': 'Question',
            name: 'Combien coûte le meilleur IPTV en France ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Les formules du meilleur IPTV démarrent à 29 € pour 3 mois sur 1 écran. La formule VIP 12 mois coûte 55 € et permet d’économiser jusqu’à 50 %. Des formules multi-écrans sont disponibles pour 2 ou 3 appareils à la maison, à partir de 75 €.',
            },
          },
          {
            '@type': 'Question',
            name: 'Y a-t-il un essai gratuit pour le meilleur IPTV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. Écrivez-nous sur WhatsApp et nous vous configurons un essai gratuit de 24 heures du meilleur IPTV. Testez l’image 4K, vérifiez la liste des chaînes et assurez-vous que tout fonctionne parfaitement sur votre appareil avant de passer à une formule payante.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quels appareils sont compatibles avec le meilleur IPTV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le meilleur IPTV fonctionne sur Amazon Firestick, Smart TV Samsung et LG, Android TV, Google TV, Apple TV, iPhone, iPad, PC Windows, Mac, ainsi que sur les box MAG et Formuler. Notre équipe vous aide à installer et configurer un lecteur comme IPTV Smarters Pro sur WhatsApp.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ai-je besoin d’un VPN pour utiliser le meilleur IPTV en France ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Aucun VPN n’est requis. Nos serveurs du meilleur IPTV sont optimisés pour les connexions françaises et européennes afin d’offrir un streaming fluide et sans coupure sur votre connexion domestique.',
            },
          },
          {
            '@type': 'Question',
            name: 'L’installation du meilleur IPTV est-elle rapide ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La plupart des clients regardent leurs chaînes en moins de 10 minutes. Vous choisissez votre formule, écrivez-nous sur WhatsApp et notre équipe vous guide pas à pas jusqu’à ce que tout fonctionne.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="meilleur-iptv-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function MeilleurIPTVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0A1B33] text-[#FFFFFF]">
      <MeilleurIPTVSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}