// app/abonnement-iptv/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/abonnement-iptv`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `Abonnement IPTV en France | Compatible Firestick, Smart TV`
);

const PAGE_DESCRIPTION = clampDescription(
  `Obtenez le meilleur abonnement IPTV en France à partir de 29 €. Plus de 36 000 chaînes, 120 000 films en 4K. Compatible Firestick, Smart TV et Android. Essai gratuit, sans engagement.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'abonnement iptv',
    'abonnement iptv france',
    'meilleur abonnement iptv',
    'abonnement iptv france 2026',
    'service iptv',
    'service iptv france',
    'meilleur service iptv',
    'iptv firestick',
    'installation iptv firestick',
    'iptv pour firestick',
    'iptv smart tv',
    'iptv pour smart tv',
    'installation iptv smart tv',
    'fournisseur iptv',
    'fournisseur iptv france',
    'abonnement iptv 4k',
    'tarif abonnement iptv',
    'essai iptv gratuit',
    'iptv smarters pro installation',
    'abonnement iptv multi-écrans',
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
        alt: `Abonnement IPTV France - Plus de 36 000 chaînes en direct en 4K sur Firestick, Smart TV et Android`,
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

const AbonnementIPTVSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // ----------------------------------------------------------------
      // ORGANIZATION
      // ----------------------------------------------------------------
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} est un fournisseur IPTV de confiance en France proposant des abonnements IPTV avec plus de 36 000 chaînes en direct et 120 000 films et séries en 4K Ultra HD. Compatible Firestick, Smart TV et Android avec une installation guidée sur WhatsApp.`,
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

      // ----------------------------------------------------------------
      // WEBSITE
      // ----------------------------------------------------------------
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND,
        alternateName: `${BRAND} - Meilleur abonnement IPTV en France`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'fr-FR',
      },

      // ----------------------------------------------------------------
      // WEBPAGE
      // ----------------------------------------------------------------
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

      // ----------------------------------------------------------------
      // BREADCRUMB
      // ----------------------------------------------------------------
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Abonnement IPTV',
            item: PAGE_URL,
          },
        ],
      },

      // ----------------------------------------------------------------
      // PRODUCT — abonnement avec offres EUR
      // ----------------------------------------------------------------
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: 'Abonnement IPTV France — Firestick, Smart TV & Android',
        sku: 'ABONNEMENT-IPTV-FR',
        category: 'Service de streaming',
        description: `Meilleur abonnement IPTV en France à partir de 29 €. Plus de 36 000 chaînes en direct, 120 000 films et séries en 4K Ultra HD. Compatible Firestick, Smart TV, Apple TV, Android et PC. Essai gratuit disponible, tarifs en euros (€) sans engagement.`,
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
            description: 'Abonnement IPTV 3 mois sur 1 appareil avec plus de 36 000 chaînes en direct et 120 000 films.',
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
            description: 'Abonnement IPTV 6 mois sur 1 appareil avec plus de 36 000 chaînes en direct et 120 000 films.',
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
            description: 'Abonnement IPTV 12 mois VIP sur 1 appareil avec plus de 36 000 chaînes en direct et 120 000 films.',
          },
          {
            '@type': 'Offer',
            name: '2 écrans - 3 mois',
            priceCurrency: 'EUR',
            price: '45.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/tarifs`,
            description: 'Abonnement IPTV 3 mois sur 2 appareils avec plus de 36 000 chaînes en direct.',
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
            description: 'Abonnement IPTV 6 mois sur 2 appareils avec plus de 36 000 chaînes en direct.',
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
            description: 'Abonnement IPTV 12 mois VIP sur 2 appareils avec plus de 36 000 chaînes en direct.',
          },
          {
            '@type': 'Offer',
            name: '3 écrans - 3 mois',
            priceCurrency: 'EUR',
            price: '65.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/tarifs`,
            description: 'Abonnement IPTV 3 mois sur 3 appareils avec plus de 36 000 chaînes en direct.',
          },
          {
            '@type': 'Offer',
            name: '3 écrans - 6 mois',
            priceCurrency: 'EUR',
            price: '75.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/tarifs`,
            description: 'Abonnement IPTV 6 mois sur 3 appareils avec plus de 36 000 chaînes en direct.',
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
            description: 'Abonnement IPTV 12 mois VIP sur 3 appareils avec plus de 36 000 chaînes en direct.',
          },
        ],
      },

      // ----------------------------------------------------------------
      // HOWTO — installation sur Firestick / Smart TV / Android
      // ----------------------------------------------------------------
      {
        '@type': 'HowTo',
        '@id': `${PAGE_URL}/#howto`,
        name: 'Comment installer votre abonnement IPTV sur Firestick, Smart TV ou Android',
        description: 'Guide étape par étape pour activer votre abonnement IPTV et commencer à regarder sur n’importe quel appareil en France.',
        totalTime: 'PT10M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'EUR',
          value: '29.00',
        },
        supply: [
          {
            '@type': 'HowToSupply',
            name: 'Firestick, Smart TV, Apple TV, appareil Android ou PC',
          },
          {
            '@type': 'HowToSupply',
            name: 'Connexion Internet stable (minimum 15 Mbps, 30 Mbps pour la 4K)',
          },
          {
            '@type': 'HowToSupply',
            name: 'Abonnement IPTV actif ou essai gratuit',
          },
        ],
        tool: [
          {
            '@type': 'HowToTool',
            name: 'IPTV Smarters Pro (lecteur IPTV recommandé)',
          },
          {
            '@type': 'HowToTool',
            name: 'WhatsApp (pour une assistance à l’installation 24/7)',
          },
        ],
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Choisissez votre formule d’abonnement IPTV',
            text: 'Choisissez le nombre d’écrans dont vous avez besoin et optez pour un abonnement IPTV de 3, 6 ou 12 mois. Tout est en euros (€) sans engagement.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Recevez vos identifiants sur WhatsApp',
            text: 'Écrivez-nous sur WhatsApp et nous vous envoyons vos identifiants dans le chat : URL serveur, nom d’utilisateur et mot de passe pour l’API Xtream Codes.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Installez IPTV Smarters Pro sur votre appareil',
            text: 'Installez IPTV Smarters Pro, IBO Player Pro ou TiviMate sur votre Firestick, Smart TV, Apple TV ou téléphone.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Saisissez vos identifiants',
            text: 'Ouvrez le lecteur, choisissez Xtream Codes API et collez votre URL serveur, nom d’utilisateur et mot de passe. Votre liste complète de chaînes se charge automatiquement.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Testez avec l’essai gratuit',
            text: 'Testez tout avec l’essai gratuit de 24 heures. Vérifiez la qualité d’image, la programmation sportive et la lecture sur votre appareil avant de passer à un abonnement payant.',
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Commencez à regarder en 4K',
            text: 'Profitez d’un accès instantané à plus de 36 000 chaînes en direct et 120 000 films et séries. La couverture sportive inclut la Ligue 1, la Ligue des Champions, la Premier League, la NBA, la Formule 1, l’UFC, les PPV de boxe, ainsi que TF1, France 2, M6, Canal+, beIN Sports et RMC Sport.',
          },
        ],
      },

      // ----------------------------------------------------------------
      // FAQ
      // ----------------------------------------------------------------
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Combien coûte un abonnement IPTV en France ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nos formules d’abonnement IPTV démarrent à seulement 29 € pour 3 mois sur 1 écran. La formule 6 mois est à 39 €, et la formule VIP 12 mois à 55 € — soit jusqu’à 50 % d’économie par rapport aux formules courtes. Des formules multi-écrans pour 2 ou 3 appareils à la maison sont également disponibles à partir de 75 €.',
            },
          },
          {
            '@type': 'Question',
            name: 'Que comprend un abonnement IPTV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Chaque abonnement IPTV inclut plus de 36 000 chaînes en direct, 120 000 films et séries, l’intégralité du sport en direct (Ligue 1, Ligue des Champions, Premier League, NBA, Formule 1, UFC, PPV de boxe, beIN Sports, RMC Sport, Canal+ Sport, Eurosport), un guide EPG sur 7 jours et une assistance WhatsApp 24/7. Aucun frais caché, aucun engagement.',
            },
          },
          {
            '@type': 'Question',
            name: 'L’abonnement IPTV fonctionne-t-il sur Firestick ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui — Firestick est l’appareil n°1 pour installer un abonnement IPTV en France. Vous installez IPTV Smarters Pro ou IBO Player Pro sur votre Fire TV Stick 4K, 4K Max, Lite ou Fire TV Cube en moins de 5 minutes. Envoyez-nous votre Device Key et nous activons votre abonnement IPTV à distance.',
            },
          },
          {
            '@type': 'Question',
            name: 'L’abonnement IPTV fonctionne-t-il sur Smart TV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. IPTV Smarters Pro fonctionne nativement sur Samsung Tizen (2017+), LG webOS (2018+), Android TV et Google TV. Aucun matériel supplémentaire requis. Notre équipe vous guide pas à pas sur WhatsApp pour l’installation et l’activation.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel lecteur IPTV dois-je utiliser ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nous recommandons IPTV Smarters Pro comme lecteur IPTV principal pour Firestick, Smart TV, Android et iOS. IBO Player Pro et TiviMate sont également entièrement pris en charge comme alternatives. Les trois chargent automatiquement votre liste de chaînes, votre EPG et vos favoris une fois vos identifiants saisis.',
            },
          },
          {
            '@type': 'Question',
            name: 'Y a-t-il un essai gratuit avant de payer un abonnement IPTV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. Écrivez-nous sur WhatsApp et nous vous configurons un essai gratuit de 24 heures de l’abonnement IPTV. Testez la qualité d’image 4K, vérifiez la programmation sportive et les films, et assurez-vous que tout fonctionne parfaitement sur votre appareil et votre connexion Internet avant de vous engager sur une formule payante.',
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je utiliser mon abonnement IPTV sur plusieurs appareils en même temps ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. Vous pouvez installer le service IPTV sur un nombre illimité d’appareils, mais le nombre de flux simultanés dépend de votre formule. Choisissez 1, 2 ou 3 écrans lors de la commande afin que votre foyer puisse regarder des contenus différents dans différentes pièces en même temps.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ai-je besoin d’un VPN pour un abonnement IPTV en France ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Aucun VPN n’est requis. Notre abonnement IPTV fonctionne sur des serveurs optimisés pour la France et l’Europe, offrant un streaming fluide et sans coupure sur votre connexion domestique. Si votre fournisseur d’accès Internet applique un bridage pendant les heures de pointe, un VPN est entièrement compatible et n’affectera pas la qualité de lecture.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="abonnement-iptv-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function AbonnementIPTVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0A1B33] text-[#FFFFFF]">
      <AbonnementIPTVSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}