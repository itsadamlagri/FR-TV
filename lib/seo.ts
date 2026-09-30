// lib/seo.ts
import { Metadata } from 'next';

// ---------------------------------------------------------------------------
// CORE BRAND & DOMAIN CONFIGURATION (FRANCE)
// ---------------------------------------------------------------------------
const DOMAIN = 'abonneiptv.org';
const BRAND_NAME = 'Abonné IPTV';
const SITE_URL = `https://${DOMAIN}`;

// Focus keywords (priority order)
const FOCUS_KEYWORD = 'abonnement IPTV';
const SECONDARY_FOCUS_KEYWORD = 'IPTV France';
const TERTIARY_FOCUS_KEYWORD = 'meilleure IPTV';

const LOCALE = 'fr_FR';
const LANGUAGE = 'fr-FR';
const ADDRESS_COUNTRY = 'FR';
const CURRENCY = 'EUR';

// Stable Organization @id used to link brand entities across JSON-LD blocks
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// ---------------------------------------------------------------------------
// EXPORTED CONSTANTS
// ---------------------------------------------------------------------------
export const CONSTANTS = {
  DOMAIN,
  BRAND_NAME,
  SITE_URL,

  // Focus keywords
  FOCUS_KEYWORD,
  SECONDARY_FOCUS_KEYWORD,
  TERTIARY_FOCUS_KEYWORD,

  LOCALE,
  LANGUAGE,
  ADDRESS_COUNTRY,
  CURRENCY,
  ORGANIZATION_ID,

  // Primary High-Intent French Keywords
  PRIMARY_KEYWORDS: [
    'abonnement IPTV',
    'IPTV France',
    'meilleure IPTV',
    'meilleur abonnement IPTV',
    'abonnement IPTV France',
    'fournisseur IPTV',
    'service IPTV',
    'IPTV français',
  ],

  // Secondary & High-Intent French Search Terms
  SECONDARY_KEYWORDS: [
    'abonnement IPTV pas cher',
    'chaînes IPTV',
    'IPTV premium',
    'abonnement IPTV en France',
    'abonnement IPTV multi-écrans',
    'IPTV 4K',
    'essai IPTV gratuit',
    'acheter IPTV',
    'IPTV sport',
    'streaming TV en direct',
  ],

  // Business Contact Details
  CONTACT: {
    email: 'support@aboiptv.org',
    phone: '+33 0 00 00 00 00', // ⚠️ Replace with your real French number
    whatsapp: '+33 0 00 00 00 00', // ⚠️ Replace with your real WhatsApp number
    whatsappUrl: 'https://live-support.netlify.app', // ⚠️ Replace with your real wa.me link
    supportHours: 'Assistance client 24/7 par e-mail et chat en direct',
  },

  // Social Media (used in Footer / Header)
  SOCIALS: {
    twitter: 'https://twitter.com/aboiptv', // ⚠️ Replace
    instagram: 'https://instagram.com/aboiptv', // ⚠️ Replace
    facebook: 'https://facebook.com/aboiptv', // ⚠️ Replace
  },

  // Payment Methods (used in Footer / Pricing badges)
  PAYMENT_METHODS: [
    { name: 'PayPal', icon: '/img/payment/1.png' },
    { name: 'Bitcoin & Crypto', icon: '/img/payment/2.png' },
    { name: 'Visa', icon: '/img/payment/3.png' },
    { name: 'Mastercard', icon: '/img/payment/4.png' },
  ],

  // Major Target Cities in France
  TARGET_REGIONS: [
    'Paris',
    'Marseille',
    'Lyon',
    'Toulouse',
    'Nice',
    'Nantes',
    'Strasbourg',
    'Bordeaux',
    'Lille',
    'Montpellier',
    'Rennes',
  ],

  // Value Propositions for French Viewers
  USPS: [
    'Streaming 4K et Full HD sans coupure grâce à une infrastructure serveur dédiée',
    'Accès à plus de 20 000 chaînes en direct, incluant les grandes chaînes françaises, les informations locales et le divertissement premium',
    'Activation instantanée du service dans les 5 minutes suivant la validation de l’abonnement',
    'Couverture complète de la Ligue 1, de la Ligue des Champions, de la Premier League, de la NBA, de la NFL et de la Formule 1, ainsi que des chaînes TF1, France 2, M6, Canal+, beIN Sports et RMC Sport',
    'Compatibilité universelle : Amazon Firestick, Smart TV, Android, iOS, Apple TV, Roku et MAG Box',
  ],
};

// ---------------------------------------------------------------------------
// SEO METADATA GENERATOR
// ---------------------------------------------------------------------------
export const generateSEOMetadata = (
  pageName: string,
  description?: string,
  path: string = '/'
): Metadata => {
  // Enforces strict 150-160 character count for Google snippet optimisation
  const defaultDescription =
    description ||
    `Vous cherchez le meilleur abonnement IPTV en France ? Profitez de plus de 20 000 chaînes en direct, de formules IPTV premium et d’un streaming 4K. Essayez dès aujourd’hui !`;

  // Enforces strict 50-60 character count for meta titles
  const defaultTitle = `${pageName} | ${BRAND_NAME} - Meilleur abonnement IPTV`;
  const formattedTitle =
    defaultTitle.length > 60 ? defaultTitle.substring(0, 60) : defaultTitle;

  const fullCanonicalUrl =
    path === '/'
      ? SITE_URL
      : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: formattedTitle,
    description: defaultDescription,
    keywords: [
      ...CONSTANTS.PRIMARY_KEYWORDS,
      ...CONSTANTS.SECONDARY_KEYWORDS,
    ].join(', '),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: fullCanonicalUrl,
      languages: {
        'fr-FR': fullCanonicalUrl,
        'fr-BE': fullCanonicalUrl,
        'fr-CH': fullCanonicalUrl,
        'x-default': fullCanonicalUrl,
      },
    },
    openGraph: {
      title: formattedTitle,
      description: defaultDescription,
      url: fullCanonicalUrl,
      siteName: BRAND_NAME,
      locale: LOCALE,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/img/og-image.webp`,
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} - ${FOCUS_KEYWORD}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: formattedTitle,
      description: defaultDescription,
      images: [`${SITE_URL}/img/og-image.webp`],
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
    authors: [{ name: BRAND_NAME, url: SITE_URL }],
    creator: BRAND_NAME,
    publisher: BRAND_NAME,
    category: 'Divertissement',
    applicationName: BRAND_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Organization
// ---------------------------------------------------------------------------
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/img/iptv-logo.webp`,
    description:
      'Fournisseur IPTV français proposant la diffusion de télévision en direct en haute définition, les chaînes françaises, des formules d’abonnement IPTV premium et le streaming sportif en 4K à travers toute la France.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONSTANTS.CONTACT.email,
      telephone: CONSTANTS.CONTACT.phone,
      contactType: 'customer support',
      areaServed: ADDRESS_COUNTRY,
      availableLanguage: ['French'],
    },
    sameAs: [
      CONSTANTS.SOCIALS.twitter,
      CONSTANTS.SOCIALS.instagram,
      CONSTANTS.SOCIALS.facebook,
    ],
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Product / Offer
// NOTE: Reserve strictly for sales or reseller pages. Do NOT use on /setup
// or other informational/guide pages.
// ---------------------------------------------------------------------------
export const generateProductSchema = (
  name: string,
  price: string,
  currency: string = CURRENCY,
  description: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    brand: {
      '@type': 'Brand',
      name: BRAND_NAME,
    },
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/pricing`,
      seller: {
        '@id': ORGANIZATION_ID,
      },
      areaServed: {
        '@type': 'Country',
        name: 'France',
      },
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — LocalBusiness (French Cities)
// ---------------------------------------------------------------------------
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BRAND_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/img/og-image.webp`,
    description:
      'Service d’abonnement IPTV français offrant la télévision en direct en 4K, le sport et le streaming VOD aux foyers de Paris, Marseille, Lyon, Toulouse et Bordeaux.',
    priceRange: '€€',
    telephone: CONSTANTS.CONTACT.phone,
    email: CONSTANTS.CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    areaServed: CONSTANTS.TARGET_REGIONS.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    parentOrganization: {
      '@id': ORGANIZATION_ID,
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — FAQPage
// ---------------------------------------------------------------------------
export const generateFAQSchema = (faqs: { q: string; a: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — BreadcrumbList
// ---------------------------------------------------------------------------
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
};