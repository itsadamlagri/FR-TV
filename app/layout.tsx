import type { Metadata, Viewport } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import { CONSTANTS } from '@/lib/seo';
import { GoogleAnalytics } from '@next/third-parties/google';
import Loading from './components/loading';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;

// ---------------------------------------------------------------------------
// FONCTIONS UTILITAIRES SEO
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// ---------------------------------------------------------------------------
// CHAÎNES SEO — le brand name apparaît uniquement dans les schémas JSON-LD ci-dessous.
// ---------------------------------------------------------------------------
const SEO_TITLE = clampTitle(
  `Meilleur abonnement IPTV en France - Streaming 4K, Sport et Films`
);

const SEO_DESCRIPTION = clampDescription(
  `Abonnement IPTV en France : profitez du sport, des films et de la TV en 4K. +36 000 chaînes, 120 000 films et essai gratuit.`
);

const SEO_OG_TITLE = SEO_TITLE;
const SEO_OG_DESCRIPTION = SEO_DESCRIPTION;
const SEO_TWITTER_TITLE = clampTitle(SEO_TITLE, 70);
const SEO_TWITTER_DESCRIPTION = clampDescription(SEO_DESCRIPTION, 200);

// ---------------------------------------------------------------------------
// VIEWPORT
// ---------------------------------------------------------------------------
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A1B33',
};

// ---------------------------------------------------------------------------
// MÉTADONNÉES GLOBALES
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_TITLE,
    template: `%s | Abonnement IPTV`,
  },
  description: SEO_DESCRIPTION,
  authors: [{ name: CONSTANTS.BRAND_NAME }],
  creator: CONSTANTS.BRAND_NAME,
  publisher: CONSTANTS.BRAND_NAME,
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
    canonical: './',
    languages: {
      'fr-FR': SITE_URL,
      'fr-BE': SITE_URL,
      'fr-CH': SITE_URL,
      'fr-CA': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    title: SEO_OG_TITLE,
    description: SEO_OG_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Abonnement IPTV',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: 'Abonnement IPTV - Plus de 36 000 chaînes en direct en 4K Ultra HD',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TWITTER_TITLE,
    description: SEO_TWITTER_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  icons: {
    icon: [
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/img/favicons/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/img/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/img/favicons/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/img/favicons/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
      { url: '/img/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/img/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/img/favicons/favicon.ico',
    apple: [
      { url: '/img/favicons/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/img/favicons/safari-pinned-tab.svg',
        color: '#0055A4',
      },
    ],
  },
  manifest: '/img/favicons/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Abonnement IPTV',
    statusBarStyle: 'black-translucent',
  },
  other: {
    'msapplication-TileColor': '#0A1B33',
    'msapplication-TileImage': '/img/favicons/mstile-144x144.png',
    'msapplication-config': '/img/favicons/browserconfig.xml',
  },
  category: 'Divertissement',
  keywords: [
    'abonnement iptv',
    'meilleur abonnement iptv',
    'iptv france',
    'abonnement iptv france',
    'fournisseur iptv',
    'service iptv',
    'iptv français',
    'abonnement iptv pas cher',
    'chaînes iptv',
    'iptv premium',
    'abonnement iptv en france',
    'abonnement iptv multi-écrans',
    'iptv 4k',
    'essai iptv gratuit',
    'iptv firestick france',
    'iptv smart tv',
    'iptv paris',
    'iptv marseille',
    'iptv lyon',
    'iptv toulouse',
    'iptv bordeaux',
    'iptv extreme pro',
    'iptv sport',
  ],
};

// ---------------------------------------------------------------------------
// SCHÉMAS GLOBAUX — le brand name apparaît ici uniquement (champs de schéma)
// ---------------------------------------------------------------------------
const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    id="organization-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: CONSTANTS.BRAND_NAME,
        alternateName: `${CONSTANTS.BRAND_NAME} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `${CONSTANTS.BRAND_NAME} est un fournisseur IPTV de confiance en France proposant plus de 36 000 chaînes en direct et 120 000 films et séries en 4K Ultra HD. Activation instantanée par e-mail, essai gratuit disponible et tarifs en euros (€) sans engagement.`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT.phone,
          email: CONSTANTS.CONTACT.email,
          contactType: 'customer service',
          availableLanguage: ['French'],
          areaServed: 'FR',
          contactOption: 'TollFree',
        },
        sameAs: [
          CONSTANTS.SOCIALS.twitter,
          CONSTANTS.SOCIALS.instagram,
          CONSTANTS.SOCIALS.facebook,
        ],
      }),
    }}
  />
);

const WebSiteSchema = () => (
  <script
    type="application/ld+json"
    id="website-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: CONSTANTS.BRAND_NAME,
        alternateName: `${CONSTANTS.BRAND_NAME} - Meilleur abonnement IPTV en France`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'fr-FR',
      }),
    }}
  />
);

// ---------------------------------------------------------------------------
// LAYOUT RACINE
// ---------------------------------------------------------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${poppins.className} ${montserrat.variable} antialiased min-h-screen bg-[#0A1B33] text-[#FFFFFF] selection:bg-[#FFCD00] selection:text-[#0A1B33]`}
        suppressHydrationWarning
      >
        <OrganizationSchema />
        <WebSiteSchema />

        <Loading />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />

        <GoogleAnalytics gaId="G-3FM5J2659W" />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}