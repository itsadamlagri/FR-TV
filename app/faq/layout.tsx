import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/faq`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `FAQ abonnement IPTV | Installation, chaînes et paiement`
); // 58 caractères

const PAGE_DESCRIPTION = clampDescription(
  `Réponses aux questions les plus fréquentes sur un abonnement IPTV : streaming 4K, installation Smart TV, paiements en euros (€), essai gratuit et assistance WhatsApp 24/7.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'faq abonnement iptv',
    'aide installation iptv',
    'meilleur abonnement iptv',
    'abonnement iptv france',
    'abonnement iptv france',
    'iptv smart tv france',
    'iptv firestick france',
    'paiement abonnement iptv',
    'assistance abonnement iptv',
    'installation abonnement iptv',
    'service iptv france',
    'essai iptv gratuit',
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
        alt: `FAQ abonnement IPTV - Centre d’aide et réponses`,
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

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}