import Link from 'next/link';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import {
  reviews,
  REVIEW_STATS,
  REVIEW_FAQS,
} from '@/lib/reviews';
import {
  Star,
  ShieldCheck,
  Zap,
  Headphones,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Users,
  MapPin,
  PlayCircle,
  ThumbsUp,
  Award,
  Sparkles,
  Quote,
  ChevronDown,
} from 'lucide-react';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/avis`;

// Générateur d’URL WhatsApp sécurisé
const WHATSAPP_BASE = CONSTANTS.CONTACT.whatsappUrl || 'https://live-support.netlify.app';

// Statistiques d’avis — chiffres France
const RATING_VALUE = String(REVIEW_STATS?.averageRating ?? 4.9);
const REVIEW_COUNT = String(REVIEW_STATS?.totalReviews ?? 1255);
const HAPPY_CUSTOMERS = String(REVIEW_STATS?.happyCustomers ?? '50 000');
const RECOMMEND_PERCENT = String(REVIEW_STATS?.recommendPercent ?? 98);

// ---------------------------------------------------------------------------
// MÉTADONNÉES
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  `Avis abonnement IPTV en France | Retours clients vérifiés 2026`,
  `Découvrez ${REVIEW_COUNT}+ avis vérifiés d’abonnés IPTV en France. Noté ${RATING_VALUE}/5 pour le streaming 4K, 36 000+ chaînes et une assistance 24/7.`,
  '/avis'
);

// ---------------------------------------------------------------------------
// DRAPEAUX — France, Canada, Belgique, Suisse, Luxembourg, Monaco
// ---------------------------------------------------------------------------
function CountryFlag({
  country,
  size = 'md',
}: {
  country: 'FR' | 'CA' | 'BE' | 'CH' | 'LU' | 'MC';
  size?: 'sm' | 'md' | 'lg';
}) {
  const dim = size === 'lg' ? 'w-7 h-7' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  const cls = `${dim} rounded-full shrink-0 shadow-md border border-white/20 overflow-hidden`;

  if (country === 'FR') {
    return (
      <svg className={cls} viewBox="0 0 32 32" aria-label="Drapeau de la France">
        <clipPath id="rv-flag-fr"><circle cx="16" cy="16" r="16" /></clipPath>
        <g clipPath="url(#rv-flag-fr)">
          <rect width="32" height="32" fill="#FFFFFF" />
          <rect width="10.67" height="32" fill="#0055A4" />
          <rect x="21.33" width="10.67" height="32" fill="#EF4135" />
        </g>
      </svg>
    );
  }
  if (country === 'CA') {
    return (
      <svg className={cls} viewBox="0 0 32 32" aria-label="Drapeau du Canada">
        <clipPath id="rv-flag-ca"><circle cx="16" cy="16" r="16" /></clipPath>
        <g clipPath="url(#rv-flag-ca)">
          <rect width="32" height="32" fill="#FFFFFF" />
          <rect width="8" height="32" fill="#D80621" />
          <rect x="24" width="8" height="32" fill="#D80621" />
          <path fill="#D80621" d="M16 7l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 18l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 7z" />
        </g>
      </svg>
    );
  }
  if (country === 'BE') {
    return (
      <svg className={cls} viewBox="0 0 32 32" aria-label="Drapeau de la Belgique">
        <clipPath id="rv-flag-be"><circle cx="16" cy="16" r="16" /></clipPath>
        <g clipPath="url(#rv-flag-be)">
          <rect width="10.67" height="32" fill="#000" />
          <rect x="10.67" width="10.67" height="32" fill="#FDDA24" />
          <rect x="21.33" width="10.67" height="32" fill="#EF3340" />
        </g>
      </svg>
    );
  }
  if (country === 'CH') {
    return (
      <svg className={cls} viewBox="0 0 32 32" aria-label="Drapeau de la Suisse">
        <clipPath id="rv-flag-ch"><circle cx="16" cy="16" r="16" /></clipPath>
        <g clipPath="url(#rv-flag-ch)">
          <rect width="32" height="32" fill="#DA291C" />
          <rect x="14" y="8" width="4" height="16" fill="#FFF" />
          <rect x="8" y="14" width="16" height="4" fill="#FFF" />
        </g>
      </svg>
    );
  }
  if (country === 'LU') {
    return (
      <svg className={cls} viewBox="0 0 32 32" aria-label="Drapeau du Luxembourg">
        <clipPath id="rv-flag-lu"><circle cx="16" cy="16" r="16" /></clipPath>
        <g clipPath="url(#rv-flag-lu)">
          <rect width="32" height="10.67" fill="#EF3340" />
          <rect y="10.67" width="32" height="10.67" fill="#FFFFFF" />
          <rect y="21.33" width="32" height="10.67" fill="#00A2E1" />
        </g>
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 32 32" aria-label="Drapeau de Monaco">
      <clipPath id="rv-flag-mc"><circle cx="16" cy="16" r="16" /></clipPath>
      <g clipPath="url(#rv-flag-mc)">
        <rect width="32" height="16" fill="#CE1126" />
        <rect y="16" width="32" height="16" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// SCHÉMA JSON-LD
// ---------------------------------------------------------------------------
const ReviewsPageSchema = () => {
  const productId = `${SITE_URL}/#product`;
  const orgId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization
      {
        '@type': 'Organization',
        '@id': orgId,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#logo`,
          url: `${SITE_URL}/img/iptv-logo.webp`,
          contentUrl: `${SITE_URL}/img/iptv-logo.webp`,
          width: 512,
          height: 512,
          caption: `Logo ${BRAND}`,
        },
        email: CONSTANTS.CONTACT.email,
        telephone: CONSTANTS.CONTACT.phone,
        areaServed: 'FR',
        sameAs: Object.values(CONSTANTS.SOCIALS ?? {}),
      },

      // WebSite
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: BRAND,
        inLanguage: 'fr-FR',
        publisher: { '@id': orgId },
      },

      // WebPage
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Avis et témoignages sur l’abonnement IPTV`,
        description: `Avis vérifiés des clients français de ${BRAND}.`,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': websiteId },
        about: { '@id': orgId },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },

      // Product
      {
        '@type': 'Product',
        '@id': productId,
        name: `Abonnement IPTV Premium`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `Un abonnement IPTV premium offrant la TV en direct en 4K et du contenu à la demande à travers la France, avec 99,9 % de disponibilité serveur et une activation rapide guidée sur WhatsApp.`,
        sku: 'ABONNEMENT-IPTV-FR-PREMIUM',
        category: 'Service de streaming',
        brand: {
          '@type': 'Brand',
          '@id': `${SITE_URL}/#brand`,
          name: BRAND,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: RATING_VALUE,
          reviewCount: REVIEW_COUNT,
          bestRating: '5',
          worstRating: '1',
        },
      },

      // Liste des avis
      ...reviews.map((rev, index) => ({
        '@type': 'Review',
        '@id': `${PAGE_URL}/#review-${index + 1}`,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(rev.rating),
          bestRating: '5',
          worstRating: '1',
        },
        author: {
          '@type': 'Person',
          name: rev.name,
        },
        reviewBody: rev.text,
        name: rev.title,
        datePublished: rev.date,
        itemReviewed: { '@id': productId },
      })),

      // Fil d’Ariane
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Avis', item: PAGE_URL },
        ],
      },

      // FAQ
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: REVIEW_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="reviews-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// ÉTOILES DE NOTATION
// ---------------------------------------------------------------------------
function StarRating({
  rating,
  size = 'md',
}: {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClass =
    size === 'lg' ? 'w-6 h-6' : size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${sizeClass} ${
            i < rating ? 'fill-[#FFCD00] text-[#FFCD00]' : 'text-[#0A1B33]/20'
          }`}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// CARTE D’AVIS
// ---------------------------------------------------------------------------
function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  const initials = review.name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="relative bg-[#FFFFFF] border-2 border-[#D6DCE3] hover:border-[#0055A4] rounded-3xl p-6 shadow-lg hover:shadow-[0_20px_50px_rgba(0,85,164,0.2)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col">
      <Quote className="absolute top-4 right-4 w-12 h-12 text-[#0055A4]/10 rotate-180" />

      <div className="flex items-start gap-3.5 mb-4">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0055A4] to-[#0A1B33] flex items-center justify-center text-[#FFFFFF] font-black text-base uppercase shadow-md">
            {initials}
          </div>
          <div className="absolute -bottom-1 -right-1 rounded-full ring-2 ring-[#FFFFFF]">
            <CountryFlag country={review.country} size="sm" />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
            <h3 className="font-black text-[#0A1B33] text-sm uppercase tracking-tight">
              {review.name}
            </h3>
            {review.verified && (
              <span title="Abonné vérifié">
                <CheckCircle2 className="w-4 h-4 text-[#0055A4] shrink-0" />
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#0A1B33]/60">
            <MapPin className="w-3 h-3 text-[#0055A4]" />
            <span>
              {review.city}, {review.province}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <StarRating rating={review.rating} size="sm" />
        <span className="text-[10px] font-black uppercase tracking-wider text-[#0A1B33]/50">
          {new Date(review.date).toLocaleDateString('fr-FR', {
            month: 'short',
            year: 'numeric',
          })}
        </span>
      </div>

      <h4 className="font-black text-[#0A1B33] text-base uppercase tracking-tight leading-tight mb-3 line-clamp-2">
        {review.title}
      </h4>

      <p className="text-[#0055A4] text-sm font-medium leading-relaxed line-clamp-6 flex-1 mb-4">
        {review.text}
      </p>

      <div className="pt-4 border-t border-[#D6DCE3] flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#0A1B33]/60">
          <PlayCircle className="w-3.5 h-3.5 text-[#0055A4]" />
          {review.device}
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#0055A4]">
          <ShieldCheck className="w-3 h-3" />
          Vérifié
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ÉLÉMENT FAQ
// ---------------------------------------------------------------------------
function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-2xl overflow-hidden">
      <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-4 hover:bg-[#EEEEEE] transition-colors">
        <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-[#0A1B33] flex items-start gap-3 text-left">
          <span className="text-[#0055A4] font-black text-xl shrink-0">Q.</span>
          <span>{q}</span>
        </h3>
        <ChevronDown className="w-5 h-5 flex-shrink-0 text-[#0055A4] transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="px-6 pb-6">
        <p className="text-[#0055A4] font-medium leading-relaxed text-sm md:text-base pl-9 border-l-4 border-[#0055A4] ml-1 py-1">
          {a}
        </p>
      </div>
    </details>
  );
}

// ---------------------------------------------------------------------------
// PAGE PRINCIPALE
// ---------------------------------------------------------------------------
export default function ReviewsPage() {
  return (
    <>
      <ReviewsPageSchema />

      <div className="flex flex-col min-h-screen bg-[#0A1B33] text-[#FFFFFF]">
        {/* HERO */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0055A4]/25 blur-[150px] rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #0055A4 1px, transparent 1px), linear-gradient(to bottom, #0055A4 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#122A4D] px-4 py-2 rounded-full mb-6 shadow-lg border border-[#FFCD00]/40">
              <Sparkles className="w-4 h-4 text-[#FFCD00]" />
              <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
                Retours clients réels 🇫🇷
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-[#FFFFFF] mb-6">
              AVIS ET TÉMOIGNAGES <br />
              <span className="text-[#FFCD00]">SUR L’ABONNEMENT IPTV</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/70 font-bold max-w-2xl mx-auto leading-relaxed mb-8">
              Découvrez les avis vérifiés de {HAPPY_CUSTOMERS} clients français satisfaits, de Paris à Marseille, notés{' '}
              <span className="text-[#FFCD00] font-black">
                {RATING_VALUE}/5
              </span>{' '}
              pour un streaming 4K sans coupure.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF]/5 border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 text-[#FFCD00] fill-[#FFCD00]" />
                {RATING_VALUE} / 5
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF]/5 border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
                <Users className="w-3.5 h-3.5 text-[#FFCD00]" />
                {HAPPY_CUSTOMERS} clients
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF]/5 border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
                <ThumbsUp className="w-3.5 h-3.5 text-[#FFCD00]" />
                {RECOMMEND_PERCENT} % de recommandation
              </span>
            </div>
          </div>
        </section>

        {/* CARTE DE NOTATION GLOBALE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="text-6xl md:text-7xl font-black text-[#0055A4] leading-none mb-2">
                  {RATING_VALUE}
                </div>
                <div className="mb-3 flex justify-center md:justify-start">
                  <StarRating rating={5} size="lg" />
                </div>
                <p className="text-[#0A1B33]/70 text-xs font-black uppercase tracking-wider">
                  Basé sur {REVIEW_COUNT} avis
                </p>
              </div>

              <div className="text-center border-y md:border-y-0 md:border-x border-[#D6DCE3] py-6 md:py-0 md:px-8">
                <div className="inline-flex items-center justify-center gap-2 bg-[#0055A4] text-[#FFCD00] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                  <Award className="w-3.5 h-3.5" /> Mieux noté
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#0A1B33] leading-none mb-2">
                  {RECOMMEND_PERCENT} %
                </div>
                <p className="text-[#0A1B33]/70 text-xs font-black uppercase tracking-wider">
                  Recommandent
                </p>
              </div>

              <div className="text-center md:text-right">
                <div className="text-4xl md:text-5xl font-black text-[#0A1B33] leading-none mb-2">
                  {HAPPY_CUSTOMERS}
                </div>
                <p className="text-[#0A1B33]/70 text-xs font-black uppercase tracking-wider mb-4">
                  Clients français satisfaits
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-end items-center">
                  <CountryFlag country="FR" size="md" />
                  <CountryFlag country="CA" size="md" />
                  <CountryFlag country="BE" size="md" />
                  <CountryFlag country="CH" size="md" />
                  <CountryFlag country="LU" size="md" />
                  <CountryFlag country="MC" size="md" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GRILLE DES AVIS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/40 px-4 py-1.5 rounded-full mb-4">
              <MessageCircle className="w-4 h-4 text-[#FFCD00]" />
              <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
                Témoignages clients
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight">
              Ce que disent <span className="text-[#FFCD00]">nos clients français</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>

        {/* BADGES DE CONFIANCE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: ShieldCheck,
                title: '99,9 % de disponibilité',
                desc: 'Serveurs de qualité professionnelle en France et en Europe',
              },
              {
                icon: Zap,
                title: '4K & 60 FPS',
                desc: 'Qualité de streaming Ultra HD',
              },
              {
                icon: Headphones,
                title: 'Assistance 24/7',
                desc: 'Une véritable équipe WhatsApp disponible',
              },
              {
                icon: Award,
                title: 'Essai gratuit d’abord',
                desc: 'Testez sur votre propre appareil',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#FFFFFF] border-2 border-[#D6DCE3] hover:border-[#0055A4] rounded-2xl p-5 text-center transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-[#0055A4]" />
                  </div>
                  <h3 className="text-sm font-black text-[#0A1B33] uppercase tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#0055A4] font-bold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA WHATSAPP */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#FFCD00]/40 bg-gradient-to-br from-[#0055A4] via-[#0A1B33] to-[#0055A4] p-8 md:p-10 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,205,0,0.12),_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FFCD00] text-[#0A1B33] px-4 py-2 rounded-full mb-5 shadow-lg">
                <MessageCircle className="w-4 h-4" />
                <span className="font-black text-xs uppercase tracking-widest">
                  Rejoignez {HAPPY_CUSTOMERS} clients français
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-4">
                Commencez avec un essai gratuit de 24 heures
              </h3>
              <p className="text-[#FFFFFF]/90 text-sm sm:text-base font-bold max-w-xl mx-auto mb-6">
                Écrivez à notre équipe sur WhatsApp. Nous configurons IPTV Smarters Pro pour vous et vous mettons en ligne en moins de 10 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                    `Bonjour ! J’ai lu vos avis et je souhaite tester l’essai gratuit de 24 heures.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFCD00] text-[#0A1B33] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#0A1B33]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Démarrer l’essai gratuit
                </a>
                <Link
                  href="/tarifs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0A1B33] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#FFCD00]"
                >
                  Voir les formules <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full mb-16 relative">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-[#0055A4]/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="text-center mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/40 px-4 py-1.5 rounded-full mb-4">
              <MessageCircle className="w-4 h-4 text-[#FFCD00]" />
              <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
                FAQ des avis
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight">
              Questions fréquentes{' '}
              <span className="text-[#FFCD00]">sur nos avis</span>
            </h2>
          </div>

          <div className="space-y-4 relative z-10">
            {REVIEW_FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* CTA BAS DE PAGE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pb-20">
          <div className="bg-[#FFFFFF] rounded-3xl p-8 md:p-12 border-2 border-[#D6DCE3] text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#0A1B33] leading-tight mb-4">
              Prêt à rejoindre nos{' '}
              <span className="text-[#0055A4]">clients satisfaits ?</span>
            </h3>
            <p className="text-[#0055A4] text-sm sm:text-base font-medium max-w-xl mx-auto mb-8">
              Choisissez parmi les formules de 3, 6 ou 12 mois à partir de 29 €. Installation guidée sur WhatsApp, 36 000+ chaînes et 120 000+ films et séries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/tarifs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:bg-[#004A8F] hover:scale-105 transition-all shadow-lg border border-[#0055A4]"
              >
                Voir les formules d’abonnement IPTV <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/installation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0A1B33] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all border-2 border-[#FFCD00]"
              >
                Guide d’installation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}