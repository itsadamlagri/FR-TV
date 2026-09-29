// app/revendeur/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

// CONSTANTES SEO
const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const YEAR = new Date().getFullYear();
const PAGE_URL = `${SITE_URL}/revendeur`;

// ---------------------------------------------------------------------------
// FONCTIONS UTILITAIRES SEO — limites de caractères
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// ---------------------------------------------------------------------------
// CHAÎNES SEO — longueurs SERP sécurisées
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `Revendeur IPTV France | À partir de 299 €`
);

const PAGE_DESCRIPTION = clampDescription(
  `Devenez revendeur IPTV en France à partir de 299 €. Achetez des crédits en gros, vendez entre 60 € et 120 € par an, gagnez jusqu’à 90 € par vente. Accès instantané au panneau.`
);

// ---------------------------------------------------------------------------
// MÉTADONNÉES
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'revendeur iptv france',
    'devenir revendeur iptv',
    'panneau revendeur iptv france',
    'programme revendeur iptv',
    'meilleur revendeur iptv france',
    'crédits iptv france',
    'iptv en gros france',
    'activité revendeur iptv',
    'panneau revendeur iptv',
    'abonnement iptv revendeur',
  ],
  authors: [{ name: BRAND }],
  creator: BRAND,
  publisher: BRAND,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
        url: `${SITE_URL}/img/blog/article-reseller/cover.webp`,
        width: 1200,
        height: 630,
        alt: `Programme revendeur IPTV France ${YEAR}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/blog/article-reseller/cover.webp`],
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
  category: 'business',
};

// ---------------------------------------------------------------------------
// SCHÉMAS JSON-LD — WebPage + Service + Product + FAQ + Fil d’Ariane (France)
// ---------------------------------------------------------------------------
const ResellerSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // WEBPAGE
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Programme revendeur IPTV France | ${BRAND}`,
        description: PAGE_DESCRIPTION,
        inLanguage: CONSTANTS.LANGUAGE,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
        primaryImageOfPage: { '@id': `${PAGE_URL}/#primaryimage` },
      },

      // IMAGE PRINCIPALE
      {
        '@type': 'ImageObject',
        '@id': `${PAGE_URL}/#primaryimage`,
        url: `${SITE_URL}/img/blog/article-reseller/cover.webp`,
        contentUrl: `${SITE_URL}/img/blog/article-reseller/cover.webp`,
        width: 1200,
        height: 630,
        caption: `Programme revendeur IPTV France ${YEAR}`,
      },

      // FIL D’ARIANE
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Programme revendeur',
            item: PAGE_URL,
          },
        ],
      },

      // SERVICE — Offre B2B
      {
        '@type': 'Service',
        '@id': `${PAGE_URL}/#service`,
        name: `Programme revendeur IPTV France ${YEAR}`,
        description: `Devenez revendeur IPTV en France. Achetez des crédits en gros, vendez des abonnements annuels entre 60 € et 120 €, et gagnez jusqu’à 90 € de profit par client.`,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: {
          '@type': 'Country',
          name: 'France',
        },
        serviceType: 'Panneau revendeur IPTV',
        offers: [
          {
            '@type': 'Offer',
            name: 'Pack revendeur Starter (10 crédits)',
            price: '299.00',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            validFrom: currentDate,
            description:
              '10 crédits revendeur, accès complet au panneau, assistance WhatsApp 24/7. Crédits sans expiration.',
          },
          {
            '@type': 'Offer',
            name: 'Pack revendeur Growth (20 crédits)',
            price: '549.00',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            validFrom: currentDate,
            description:
              '20 crédits revendeur, assistance prioritaire, accès API, crédits sans expiration.',
          },
          {
            '@type': 'Offer',
            name: 'Pack revendeur Pro (30 crédits)',
            price: '749.00',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            validFrom: currentDate,
            description:
              '30 crédits revendeur, assistance dédiée, option marque blanche, accès API complet.',
          },
        ],
      },

      // PRODUCT + AGGREGATEOFFER
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: `Programme revendeur IPTV France`,
        description: `Crédits revendeur IPTV en gros pour la France. Achetez en gros, revendez à votre prix.`,
        brand: {
          '@id': `${SITE_URL}/#organization`,
        },
        category: 'Service professionnel',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: '299.00',
          highPrice: '749.00',
          offerCount: '3',
          availability: 'https://schema.org/InStock',
          url: PAGE_URL,
        },
      },

      // FAQ
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Qu’est-ce qu’un panneau revendeur IPTV exactement ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Un panneau revendeur est un tableau de bord privé qui vous permet de créer et de gérer des abonnements IPTV pour vos propres clients. Vous achetez des crédits en gros, puis vous les utilisez pour activer des abonnements annuels, mensuels ou d’essai pour vos clients.',
            },
          },
          {
            '@type': 'Question',
            name: 'Combien puis-je réellement gagner en tant que revendeur IPTV en France ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Les clients paient généralement entre 60 € et 120 € par an. Votre coût de gros démarre autour de 30 € par crédit, donc votre profit par vente varie de 30 € à 90 €. Vendez 10 abonnements à 90 € et vous avez gagné environ 600 € de bénéfice à partir d’un investissement de 299 €.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ai-je besoin de compétences techniques pour devenir revendeur ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. Le panneau revendeur est conçu pour être simple. Si vous savez utiliser WhatsApp et un navigateur web, vous pouvez gérer une activité de revendeur. Nous fournissons un accompagnement à la prise en main via WhatsApp dès que vous rencontrez une difficulté.',
            },
          },
          {
            '@type': 'Question',
            name: 'Les crédits revendeur expirent-ils ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. Vos crédits restent dans votre compte indéfiniment. Aucune date d’expiration, aucun minimum mensuel et aucune pression pour vendre rapidement.',
            },
          },
          {
            '@type': 'Question',
            name: 'Dans quelles devises puis-je vendre ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vous pouvez vendre à vos clients dans la devise de votre choix. Votre coût de gros avec nous est fixé en euros (€). Votre prix de vente est entièrement à votre discrétion, vous contrôlez donc votre marge.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="reseller-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// LAYOUT REVENDEUR — palette France
// ---------------------------------------------------------------------------
export default function ResellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0A1B33] text-[#FFFFFF]">
      <ResellerSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}