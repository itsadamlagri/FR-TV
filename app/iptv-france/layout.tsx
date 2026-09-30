// app/iptv-france/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/iptv-france`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `IPTV France | Plus de 36 000 chaînes en 4K Ultra HD`
);

const PAGE_DESCRIPTION = clampDescription(
  `Recevez vos identifiants IPTV France sur WhatsApp. Xtream Codes API pour 36 000+ chaînes et 120 000 films en 4K. Essai gratuit, tarifs en euros (€), sans engagement.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'iptv france',
    'service iptv france',
    'abonnement iptv france',
    'fournisseur iptv france',
    'iptv français',
    'meilleur iptv france',
    'iptv france 4k',
    'iptv france xtream codes',
    'iptv france avis',
    'iptv france tarif',
    'iptv france firestick',
    'iptv france smart tv',
    'abonnement iptv france pas cher',
    'streaming iptv france',
    'essai iptv gratuit france',
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
        alt: `IPTV France - Plus de 36 000 chaînes en direct en 4K Ultra HD`,
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

const IPTVFranceSchema = () => {
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
        description: `${BRAND} est un fournisseur IPTV de confiance en France avec plus de 36 000 chaînes en direct et 120 000 films et séries en 4K Ultra HD. Les identifiants IPTV France sont livrés sur WhatsApp avec installation guidée.`,
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
        alternateName: `${BRAND} - Meilleur IPTV France`,
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
          {
            '@type': 'ListItem',
            position: 2,
            name: 'IPTV France',
            item: PAGE_URL,
          },
        ],
      },
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: 'IPTV France — abonnement premium',
        sku: 'IPTV-FR-PREMIUM',
        category: 'Service de streaming',
        description: `IPTV France premium. Recevez vos identifiants Xtream Codes API sur WhatsApp avec plus de 36 000 chaînes en direct et 120 000 films et séries en 4K Ultra HD. Essai gratuit disponible, tarifs en euros (€) sans engagement.`,
        image: `${SITE_URL}/img/structer.webp`,
        brand: { '@type': 'Brand', name: BRAND },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '1055',
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
            description: 'IPTV France — formule 3 mois sur 1 appareil avec plus de 36 000 chaînes en direct.',
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
            description: 'IPTV France — formule 6 mois sur 1 appareil avec plus de 36 000 chaînes en direct.',
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
            description: 'IPTV France — formule VIP 12 mois sur 1 appareil avec plus de 36 000 chaînes en direct.',
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
            description: 'IPTV France — formule 6 mois sur 2 appareils avec plus de 36 000 chaînes en direct.',
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
            description: 'IPTV France — formule VIP 12 mois sur 2 appareils avec plus de 36 000 chaînes en direct.',
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
            description: 'IPTV France — formule VIP 12 mois sur 3 appareils avec plus de 36 000 chaînes en direct.',
          },
        ],
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_URL}/#howto`,
        name: 'Comment installer IPTV France sur votre appareil',
        description: 'Guide étape par étape pour saisir vos identifiants IPTV France et commencer à regarder sur n’importe quel appareil.',
        totalTime: 'PT10M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'EUR',
          value: '29.00',
        },
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Choisissez votre formule',
            text: 'Choisissez le nombre d’écrans dont vous avez besoin à la maison et optez pour une formule de 3, 6 ou 12 mois en euros (€).',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Recevez vos identifiants IPTV France sur WhatsApp',
            text: 'Écrivez-nous sur WhatsApp et nous vous envoyons vos identifiants Xtream Codes API : URL serveur, nom d’utilisateur et mot de passe.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Installez une application lecteur compatible',
            text: 'Installez IPTV Smarters Pro, TiviMate, IBO Player Pro ou XCIPTV sur votre Firestick, Smart TV ou téléphone.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Saisissez vos identifiants IPTV France',
            text: 'Ouvrez le lecteur, choisissez Xtream Codes API et collez votre URL serveur, nom d’utilisateur et mot de passe. Votre liste de chaînes se charge automatiquement.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Qu’est-ce qu’IPTV France ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'IPTV France est un service IPTV premium qui diffuse des chaînes de télévision en direct, des films et des séries via votre connexion Internet. En France, IPTV France offre plus de 36 000 chaînes en direct et 120 000 films et séries en 4K Ultra HD, avec une installation guidée sur WhatsApp et des tarifs en euros (€).',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment obtenir mes identifiants IPTV France ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Choisissez votre formule, écrivez-nous sur WhatsApp et notre équipe vous envoie vos identifiants IPTV France au format Xtream Codes API dans le chat. Vous recevez également une aide pas à pas pour installer l’application lecteur et charger votre liste de chaînes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quels lecteurs IPTV sont compatibles avec IPTV France ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La plupart des lecteurs IPTV modernes prennent en charge le format Xtream Codes API. Les plus populaires pour les téléspectateurs français sont IPTV Smarters Pro, TiviMate, IBO Player Pro et XCIPTV. Notre équipe vous aide à choisir le bon pour votre appareil.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ai-je besoin de compétences techniques pour installer IPTV France ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. L’installation prend environ 10 minutes avec notre aide. Vous installez l’application lecteur, copiez les identifiants que nous vous envoyons sur WhatsApp, les collez dans les champs de connexion et votre liste de chaînes se charge automatiquement.',
            },
          },
          {
            '@type': 'Question',
            name: 'Y a-t-il un essai gratuit pour IPTV France ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. Écrivez-nous sur WhatsApp et nous vous envoyons un accès IPTV France en essai gratuit de 24 heures. Testez l’image 4K, vérifiez la programmation sportive et assurez-vous que tout fonctionne parfaitement sur votre connexion Internet avant de vous engager sur une formule payante.',
            },
          },
          {
            '@type': 'Question',
            name: 'IPTV France fonctionne-t-il sur Firestick et Smart TV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. IPTV France fonctionne sur Amazon Firestick, Smart TV Samsung et LG (Tizen et webOS), Android TV, Google TV, Apple TV, iPhone, iPad, PC Windows, Mac, ainsi que sur les box MAG et Formuler. Notre équipe vous guide sur WhatsApp pour l’installation sur votre appareil.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="iptv-france-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function IPTVFranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0A1B33] text-[#FFFFFF]">
      <IPTVFranceSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}