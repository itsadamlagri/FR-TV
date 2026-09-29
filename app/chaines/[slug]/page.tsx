import {
  channelsData,
  getChannelCategoryBySlug,
  getAllCategorySlugs,
  type CountryCode,
} from '@/lib/channels-data';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Tv,
  ShieldCheck,
  Zap,
  ArrowLeft,
  Sparkles,
  HelpCircle,
  Activity,
  Cpu,
  MonitorSmartphone,
  MessageCircle,
  Users,
  Globe,
  Film,
  Trophy,
  Baby,
  Star,
} from 'lucide-react';
import ShareButtons from '../../components/ShareButtons';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;

// ---------------------------------------------------------------------------
// DRAPEAU PAYS — support complet pour chaque pays dans channels-data.ts
// ---------------------------------------------------------------------------
function CountryFlag({
  country,
  size = 'md',
  uid = '0',
}: {
  country: CountryCode;
  size?: 'sm' | 'md' | 'lg';
  uid?: string | number;
}) {
  const dim = size === 'lg' ? 'w-7 h-7' : size === 'sm' ? 'w-4 h-4' : 'w-6 h-6';
  const cls = `${dim} rounded-full shadow-md shrink-0 border-2 border-white/20 overflow-hidden`;
  const cid = `cf-${country}-${uid}`;

  const wrap = (children: React.ReactNode) => (
    <svg className={cls} viewBox="0 0 32 32" aria-label={`Drapeau ${country}`}>
      <clipPath id={cid}>
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath={`url(#${cid})`}>{children}</g>
    </svg>
  );

  switch (country) {
    case 'FR':
      return wrap(
        <>
          <rect width="32" height="32" fill="#FFFFFF" />
          <rect width="10.67" height="32" fill="#0055A4" />
          <rect x="21.33" width="10.67" height="32" fill="#EF4135" />
        </>
      );
    case 'BE':
      return wrap(
        <>
          <rect width="10.67" height="32" fill="#000" />
          <rect x="10.67" width="10.67" height="32" fill="#FDDA24" />
          <rect x="21.33" width="10.67" height="32" fill="#EF3340" />
        </>
      );
    case 'CH':
      return wrap(
        <>
          <rect width="32" height="32" fill="#DA291C" />
          <rect x="14" y="8" width="4" height="16" fill="#FFF" />
          <rect x="8" y="14" width="16" height="4" fill="#FFF" />
        </>
      );
    case 'LU':
      return wrap(
        <>
          <rect width="32" height="10.67" fill="#EF3340" />
          <rect y="10.67" width="32" height="10.67" fill="#FFFFFF" />
          <rect y="21.33" width="32" height="10.67" fill="#00A2E1" />
        </>
      );
    case 'MC':
      return wrap(
        <>
          <rect width="32" height="16" fill="#CE1126" />
          <rect y="16" width="32" height="16" fill="#FFFFFF" />
        </>
      );
    case 'CA':
      return wrap(
        <>
          <rect width="32" height="32" fill="#FFFFFF" />
          <rect width="8" height="32" fill="#D80621" />
          <rect x="24" width="8" height="32" fill="#D80621" />
          <path
            fill="#D80621"
            d="M16 7l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 18l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 7z"
          />
        </>
      );
    case 'EU':
      return wrap(
        <>
          <rect width="32" height="32" fill="#003399" />
          {[
            { cx: 16, cy: 6 },
            { cx: 22.7, cy: 8.8 },
            { cx: 25.5, cy: 15.4 },
            { cx: 22.7, cy: 22 },
            { cx: 16, cy: 24.8 },
            { cx: 9.3, cy: 22 },
            { cx: 6.5, cy: 15.4 },
            { cx: 9.3, cy: 8.8 },
          ].map((star, i) => (
            <circle key={i} cx={star.cx} cy={star.cy} r="1.3" fill="#FFCC00" />
          ))}
        </>
      );
    case 'UK':
      return wrap(
        <>
          <rect width="32" height="32" fill="#012169" />
          <path stroke="#FFF" strokeWidth="6" d="M0 0l32 32M32 0L0 32" />
          <path stroke="#C8102E" strokeWidth="3" d="M0 0l32 32M32 0L0 32" />
          <path stroke="#FFF" strokeWidth="10" d="M16 0v32M0 16h32" />
          <path stroke="#C8102E" strokeWidth="6" d="M16 0v32M0 16h32" />
        </>
      );
    case 'US':
      return wrap(
        <>
          <rect width="32" height="32" fill="#FFF" />
          {[0, 4.57, 9.14, 13.71, 18.29, 22.86, 27.43].map((y, i) => (
            <rect key={i} y={y} width="32" height="2.29" fill="#B22234" />
          ))}
          <rect width="13.7" height="14.86" fill="#3C3B6E" />
        </>
      );
    case 'DE':
      return wrap(
        <>
          <rect width="32" height="10.67" fill="#000" />
          <rect y="10.67" width="32" height="10.67" fill="#DD0000" />
          <rect y="21.33" width="32" height="10.67" fill="#FFCE00" />
        </>
      );
    case 'IT':
      return wrap(
        <>
          <rect width="10.67" height="32" fill="#009246" />
          <rect x="10.67" width="10.67" height="32" fill="#FFF" />
          <rect x="21.33" width="10.67" height="32" fill="#CE2B37" />
        </>
      );
    case 'ES':
      return wrap(
        <>
          <rect width="32" height="32" fill="#AA151B" />
          <rect y="8" width="32" height="16" fill="#F1BF00" />
        </>
      );
    case 'PT':
      return wrap(
        <>
          <rect width="32" height="32" fill="#DA291C" />
          <rect width="12.8" height="32" fill="#006600" />
          <circle cx="12.8" cy="16" r="5" fill="#FFD700" />
          <circle cx="12.8" cy="16" r="3" fill="#DA291C" />
        </>
      );
    case 'NL':
      return wrap(
        <>
          <rect width="32" height="10.67" fill="#AE1C28" />
          <rect y="10.67" width="32" height="10.67" fill="#FFF" />
          <rect y="21.33" width="32" height="10.67" fill="#21468B" />
        </>
      );
    case 'MA':
      return wrap(
        <>
          <rect width="32" height="32" fill="#C1272D" />
          <path
            fill="none"
            stroke="#006233"
            strokeWidth="1.2"
            d="M16 9l3.5 10.7-9.1-6.6h11.2l-9.1 6.6z"
          />
        </>
      );
    case 'DZ':
      return wrap(
        <>
          <rect width="32" height="32" fill="#FFFFFF" />
          <rect width="16" height="32" fill="#006233" />
          <circle cx="18" cy="16" r="5.5" fill="#D21034" />
          <circle cx="21" cy="16" r="5.5" fill="#FFFFFF" />
        </>
      );
    case 'TN':
      return wrap(
        <>
          <rect width="32" height="32" fill="#E70013" />
          <circle cx="16" cy="16" r="8" fill="#FFF" />
          <circle cx="18" cy="16" r="6" fill="#E70013" />
          <circle cx="18.5" cy="16" r="4.5" fill="#FFF" />
        </>
      );
    default:
      return wrap(<rect width="32" height="32" fill="#888" />);
  }
}

// ---------------------------------------------------------------------------
// ICÔNES DE CATÉGORIE
// ---------------------------------------------------------------------------
const categoryIcons: Record<string, any> = {
  sport: Trophy,
  france: Users,
  europe: Globe,
  canada: Users,
  'benelux-suisse': Globe,
  'maghreb-francophonie': Globe,
  'films-vod': Film,
  'jeunesse-famille': Baby,
};

const HERO_FLAGS: CountryCode[] = ['FR', 'BE', 'CH', 'CA', 'LU', 'MC', 'EU'];

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------
type Props = { params: Promise<{ slug: string }> };

// ---------------------------------------------------------------------------
// PARAMS STATIQUES
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// MÉTADONNÉES
// ---------------------------------------------------------------------------
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getChannelCategoryBySlug(resolvedParams.slug);

  if (!category) {
    return generateSEOMetadata('Catégorie de chaînes introuvable');
  }

  const title = `${category.name} | Abonnement IPTV 4K en France 2026`;
  const description = `Regardez ${category.name.toLowerCase()} sur un abonnement IPTV — plus de ${category.totalChannels.toLocaleString('fr-FR')} chaînes en direct dont ${category.channels.slice(0, 3).map((c) => c.name).join(', ')}.`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, absolute: title },
    description,
    keywords: category.keywords.join(', '),
    alternates: {
      canonical: `${SITE_URL}/chaines/${category.slug}`,
      languages: {
        'fr-FR': `${SITE_URL}/chaines/${category.slug}`,
        'fr-BE': `${SITE_URL}/chaines/${category.slug}`,
        'fr-CH': `${SITE_URL}/chaines/${category.slug}`,
        'fr-CA': `${SITE_URL}/chaines/${category.slug}`,
        'x-default': `${SITE_URL}/chaines/${category.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/chaines/${category.slug}`,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Abonnement IPTV',
      images: [
        {
          url: `${SITE_URL}/img/background.webp`,
          width: 1200,
          height: 630,
          alt: `${category.name} - Chaînes abonnement IPTV`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/img/background.webp`],
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
  };
}

// ---------------------------------------------------------------------------
// PAGE PRINCIPALE
// ---------------------------------------------------------------------------
export default async function ChannelCategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = getChannelCategoryBySlug(resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;
  const Icon = categoryIcons[category.slug] || Tv;

  // Tri : chaînes populaires d’abord
  const popularChannels = category.channels.filter((c) => c.popular);
  const otherChannels = category.channels.filter((c) => !c.popular);
  const sortedChannels = [...popularChannels, ...otherChannels];

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/chaines/${category.slug}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Chaînes', item: `${SITE_URL}/#channels` },
          { '@type': 'ListItem', position: 3, name: category.name, item: `${SITE_URL}/chaines/${category.slug}` },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/chaines/${category.slug}/#collection`,
        url: `${SITE_URL}/chaines/${category.slug}`,
        name: `${category.name} | Abonnement IPTV`,
        description: category.description,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'ItemList',
        name: `${category.name}`,
        numberOfItems: category.channels.length,
        itemListElement: category.channels.map((ch, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: ch.name,
          description: ch.description,
        })),
      },
      {
        '@type': 'Product',
        name: `${BRAND} — ${category.name}`,
        image: `${SITE_URL}/img/background.webp`,
        description: category.description,
        brand: { '@type': 'Brand', name: BRAND },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: '29.00',
          highPrice: '99.00',
          offerCount: '9',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/tarifs`,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/chaines/${category.slug}/#faq`,
        mainEntity: category.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A1B33] text-[#FFFFFF] overflow-hidden">

      <script
        type="application/ld+json"
        id="channel-category-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {/* HERO */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#1E3A5F] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0055A4]/25 blur-[140px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(to right, #0055A4 1px, transparent 1px), linear-gradient(to bottom, #0055A4 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6 text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#FFFFFF]/50 flex-wrap">
            <Link href="/" className="hover:text-[#FFCD00] transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-[#FFFFFF]/80">Chaînes</span>
            <span>/</span>
            <span className="text-[#FFCD00]">{category.name}</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#122A4D] px-4 py-2 rounded-full mb-6 shadow-lg border border-[#FFCD00]/40">
            <Icon className="w-4 h-4 text-[#FFCD00]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
              Hub de streaming en direct 🇫🇷
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none whitespace-normal break-words">
            {category.name} <br className="hidden sm:block" />
            <span className="text-[#FFCD00]">Chaînes</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/75 font-bold max-w-3xl mx-auto leading-relaxed mb-6">
            {category.description}
          </p>

          <div className="w-full max-w-3xl mx-auto my-6 px-3 py-2.5 rounded-full bg-[#122A4D]/80 border border-[#1E3A5F] backdrop-blur-md flex items-center justify-center gap-3 sm:gap-5 overflow-x-auto shadow-inner flex-wrap">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#FFFFFF]/60 shrink-0">
              Disponibles en :
            </span>
            <div className="flex items-center gap-3 sm:gap-4 shrink-0 flex-wrap justify-center">
              {HERO_FLAGS.map((code, i) => (
                <div
                  key={code}
                  className="flex items-center gap-1.5 group cursor-default transition-transform hover:scale-105"
                >
                  <CountryFlag country={code} size="md" uid={`hero-${i}`} />
                  <span className="text-[10px] sm:text-xs font-black uppercase text-[#FFFFFF] group-hover:text-[#FFCD00] transition-colors">
                    {code}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-[#FFFFFF]/70 font-black uppercase tracking-widest mt-6">
            <span className="flex items-center gap-2 bg-[#FFFFFF]/5 px-4 py-2 rounded-full border border-white/10">
              <Zap className="w-4 h-4 text-[#FFCD00]" /> {category.totalChannels.toLocaleString('fr-FR')}+ chaînes
            </span>
            <span className="flex items-center gap-2 bg-[#FFFFFF]/5 px-4 py-2 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#FFCD00]" /> Anti-freeze 60 FPS
            </span>
            <span className="flex items-center gap-2 bg-[#FFFFFF]/5 px-4 py-2 rounded-full border border-white/10">
              <Activity className="w-4 h-4 text-[#FFCD00]" /> 99,9 % de disponibilité
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/tarifs"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:bg-[#004A8F] transition-transform hover:scale-105 shadow-xl border border-[#0055A4]"
            >
              Choisir une formule
            </Link>
            <a
              href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Bonjour, je souhaite un essai gratuit de 24 heures pour la formule ${category.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#FFFFFF] text-[#0A1B33] font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
            >
              Essai gratuit 24 h
            </a>
          </div>
        </div>
      </section>

      {/* GRILLE DES CHAÎNES — populaires d’abord */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#FFFFFF] uppercase tracking-tight">
              {category.name} <span className="text-[#FFCD00]">disponibles</span>
            </h2>
            <p className="text-[#FFFFFF]/70 font-bold text-sm sm:text-base mt-2">
              Les chaînes populaires en premier. Chaque chaîne diffuse en FHD ou 4K avec une faible latence et un replay 7 jours.
            </p>
          </div>
          <div className="text-xs uppercase font-black tracking-widest text-[#FFFFFF]/60 bg-[#FFFFFF]/5 px-4 py-2 rounded-xl border border-white/10 w-fit">
            Guide EPG automatique inclus
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sortedChannels.map((channel, idx) => (
            <div
              key={idx}
              style={{
                contentVisibility: 'auto',
                containIntrinsicSize: '420px',
              }}
              className="group relative bg-[#FFFFFF] border-2 border-[#D6DCE3] rounded-2xl overflow-hidden hover:border-[#0055A4] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,85,164,0.25)] transition-all duration-500 flex flex-col"
            >
              <div className="flex items-start justify-between gap-2 p-4 pb-2">
                <div className="flex flex-col items-start gap-1.5">
                  <span className="px-2.5 py-1 bg-[#0055A4] text-[#FFFFFF] text-[10px] font-black uppercase tracking-wider rounded-md shadow-sm">
                    {channel.quality}
                  </span>
                  {channel.popular && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#0A1B33] text-[#FFFFFF] text-[9px] font-black uppercase tracking-wider rounded-md shadow-sm">
                      <Star className="w-2.5 h-2.5 fill-[#FFCD00] text-[#FFCD00]" />
                      Populaire
                    </span>
                  )}
                </div>
                <CountryFlag country={channel.country ?? 'FR'} size="md" uid={`card-${idx}`} />
              </div>

              <div className="px-4 flex items-start gap-3 mb-2">
                <div className="w-11 h-11 rounded-xl bg-[#0A1B33] flex items-center justify-center shrink-0 group-hover:bg-[#0055A4] transition-colors shadow-md">
                  <Tv className="w-5 h-5 text-[#FFFFFF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-[#0A1B33] text-base uppercase tracking-tight leading-tight">
                    {channel.name}
                  </h3>
                  {channel.genre && (
                    <p className="text-[10px] font-black uppercase tracking-wider text-[#0055A4] mt-0.5">
                      {channel.genre}
                    </p>
                  )}
                </div>
              </div>

              <div className="px-4 pb-4 flex flex-col flex-1">
                <p className="text-[#0055A4] text-xs font-bold leading-relaxed mb-3">
                  {channel.description}
                </p>

                {channel.whyWatch && (
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#0055A4]/5 border border-[#0055A4]/20 mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#0055A4] shrink-0 mt-0.5" />
                    <p className="text-[11px] font-black text-[#0055A4] leading-snug">
                      {channel.whyWatch}
                    </p>
                  </div>
                )}

                <div className="mt-auto pt-3 border-t border-[#D6DCE3] flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-[#0055A4]">
                  <span>✓ 50/60 FPS fluide</span>
                  <span>Replay 7 jours</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION POURQUOI + CONFIANCE + FAQ + CTA */}
      <section className="py-16 bg-[#0A1B33] border-t border-[#1E3A5F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A1B33] uppercase tracking-tight mb-4">
              Pourquoi regarder {category.name} avec un abonnement IPTV ?
            </h2>
            <div className="text-[#0055A4] font-medium text-sm sm:text-base leading-relaxed space-y-4">
              <p>{category.longDescription}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            <div className="p-6 bg-[#FFFFFF]/5 border border-white/10 rounded-2xl text-center hover:border-[#FFCD00] transition-colors">
              <Cpu className="w-8 h-8 text-[#FFCD00] mx-auto mb-2" />
              <h3 className="font-black text-sm uppercase text-[#FFFFFF]">H.265 / HEVC</h3>
              <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                Image 4K nette avec une consommation de données minimale
              </p>
            </div>
            <div className="p-6 bg-[#FFFFFF]/5 border border-white/10 rounded-2xl text-center hover:border-[#FFCD00] transition-colors">
              <MonitorSmartphone className="w-8 h-8 text-[#FFCD00] mx-auto mb-2" />
              <h3 className="font-black text-sm uppercase text-[#FFFFFF]">Compatibilité universelle</h3>
              <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                Smart TV, Firestick, Android, Apple TV et PC
              </p>
            </div>
            <div className="p-6 bg-[#FFFFFF]/5 border border-white/10 rounded-2xl text-center hover:border-[#FFCD00] transition-colors">
              <ShieldCheck className="w-8 h-8 text-[#FFCD00] mx-auto mb-2" />
              <h3 className="font-black text-sm uppercase text-[#FFFFFF]">Répartition anti-freeze</h3>
              <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                Aucune mise en mémoire tampon pendant les heures de pointe
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-8 text-center">
              Questions fréquentes sur <span className="text-[#FFCD00]">{category.name}</span>
            </h2>

            <div className="space-y-4">
              {category.faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-2xl p-6 shadow-xl">
                  <h3 className="text-base sm:text-lg font-black text-[#0A1B33] uppercase tracking-tight mb-3 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#0055A4] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-[#0055A4] text-sm font-medium leading-relaxed pl-7 border-l-4 border-[#0055A4] ml-1 py-1">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border-2 border-[#FFCD00]/40 bg-gradient-to-br from-[#0055A4] via-[#0A1B33] to-[#0055A4] p-8 md:p-10 text-center shadow-2xl mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,205,0,0.12),_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-4">
                Prêt à regarder {category.name} ?
              </h3>
              <p className="text-[#FFFFFF]/90 text-sm sm:text-base font-bold max-w-xl mx-auto mb-6">
                Écrivez à notre équipe sur WhatsApp. Nous activerons IPTV Smarters Pro pour vous et configurerons votre abonnement en moins de 10 minutes.
              </p>
              <a
                href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Bonjour, je souhaite m’abonner à la formule ${category.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFCD00] text-[#0A1B33] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#0A1B33]/20"
              >
                <MessageCircle className="w-5 h-5" />
                Commencer sur WhatsApp
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center items-center my-10">
            <ShareButtons
              title={`${category.name} - Abonnement IPTV`}
              url={`${SITE_URL}/chaines/${category.slug}`}
            />
          </div>

          <div className="mt-16 pt-10 border-t border-[#1E3A5F]">
            <h3 className="text-xl font-black text-[#FFFFFF] uppercase tracking-tight mb-6 text-center">
              Explorez les autres formules de chaînes
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {channelsData
                .filter((c) => c.slug !== category.slug)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/chaines/${cat.slug}`}
                    className="p-4 bg-[#FFFFFF]/5 border border-white/10 rounded-xl hover:border-[#FFCD00] hover:bg-[#0055A4]/20 transition-all text-center group"
                  >
                    <span className="text-xs sm:text-sm font-black uppercase text-[#FFFFFF] group-hover:text-[#FFCD00] transition-colors block">
                      {cat.name}
                    </span>
                    <span className="text-[10px] text-[#FFFFFF]/50 font-bold mt-1 block">
                      {cat.totalChannels.toLocaleString('fr-FR')}+ chaînes
                    </span>
                  </Link>
                ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#FFCD00] hover:text-[#FFFFFF] transition-colors font-black text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" /> Retour à l’accueil
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}