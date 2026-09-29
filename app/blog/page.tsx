import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import {
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Tag,
  MessageCircle,
  BookOpen,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// CONSTANTES
// ---------------------------------------------------------------------------
const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/blog`;
const POSTS_PER_PAGE = 6;

// ---------------------------------------------------------------------------
// FONCTIONS UTILITAIRES SEO
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// ---------------------------------------------------------------------------
// CHAÎNES SEO
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `Blog abonnement IPTV en France | Guides, Astuces et Actus 2026`
);

const PAGE_DESCRIPTION = clampDescription(
  `Blog abonnement IPTV avec guides d’installation, avis d’applications et astuces de streaming pour Firestick, Smart TV et mobile. Mis à jour chaque semaine.`
);

// ---------------------------------------------------------------------------
// MÉTADONNÉES
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_TITLE,
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  authors: [{ name: BRAND }],
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
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `Blog abonnement IPTV - Guides d’installation et astuces de streaming`,
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
    'blog abonnement iptv',
    'meilleur abonnement iptv',
    'abonnement iptv france',
    'guide installation iptv',
    'installation iptv firestick',
    'guide iptv smarters pro',
    'avis iptv france',
    'abonnement iptv france',
    'iptv 4k france',
    'guide iptv smart tv',
    'astuces streaming france',
    'actualités iptv 2026',
  ],
};

// ---------------------------------------------------------------------------
// CONFIGURATION DES CATÉGORIES
// ---------------------------------------------------------------------------
const CATEGORIES = [
  { id: 'all', label: 'Tous les articles' },
  { id: 'setup', label: 'Guides d’installation' },
  { id: 'review', label: 'Avis' },
  { id: 'sports', label: 'Sport en direct' },
  { id: 'tips', label: 'Astuces' },
  { id: 'news', label: 'Actualités' },
];

function getPostCategory(post: any): string {
  if (post.category) return post.category;
  const kw = (post.keywords || []).join(' ').toLowerCase();
  const title = (post.title || '').toLowerCase();
  if (title.includes('setup') || title.includes('install') || kw.includes('setup guide')) return 'setup';
  if (title.includes('review') || title.includes('compare') || title.includes('best')) return 'review';
  if (title.includes('sport') || kw.includes('live sports')) return 'sports';
  if (title.includes('tip') || title.includes('troubleshoot')) return 'tips';
  return 'news';
}

function getCategoryLabel(id: string): string {
  const map: Record<string, string> = {
    setup: 'Guide d’installation',
    review: 'Avis',
    sports: 'Sport en direct',
    tips: 'Astuces',
    news: 'Actualités',
  };
  return map[id] || 'Guide';
}

function getReadTime(post: any): string {
  if (post.readTime) return post.readTime;
  const words = (post.content || '').split(/\s+/).length;
  const mins = Math.max(5, Math.round(words / 220));
  return `${mins} min de lecture`;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

// ---------------------------------------------------------------------------
// TRI DES ARTICLES PAR DATE DÉCROISSANTE
// ---------------------------------------------------------------------------
const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const featuredPost = sortedPosts[0];
const restPosts = sortedPosts.slice(1);

// ---------------------------------------------------------------------------
// SCHÉMAS JSON-LD
// ---------------------------------------------------------------------------
const BlogSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${PAGE_URL}/#blog`,
        name: `Blog abonnement IPTV`,
        description: `Guides d’installation, avis et astuces d’abonnement IPTV pour Firestick, Smart TV et streaming mobile.`,
        url: PAGE_URL,
        inLanguage: 'fr-FR',
        publisher: { '@id': `${SITE_URL}/#organization` },
        blogPost: blogPosts.map((post) => ({
          '@type': 'BlogPosting',
          '@id': `${SITE_URL}/blog/${post.slug}/#article`,
          headline: post.title,
          description: post.description || post.excerpt || '',
          url: `${SITE_URL}/blog/${post.slug}`,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: 'fr-FR',
          author: {
            '@type': 'Person',
            name: post.author,
          },
          publisher: { '@id': `${SITE_URL}/#organization` },
          image: {
            '@type': 'ImageObject',
            url: post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`,
          },
          keywords: (post.keywords || []).join(', '),
        })),
      },
      {
        '@type': 'CollectionPage',
        '@id': `${PAGE_URL}/#collection`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
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
            name: 'Blog',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="blog-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// CARTE D’ARTICLE DU BLOG
// ---------------------------------------------------------------------------
function BlogCard({ post, priority = false }: { post: any; priority?: boolean }) {
  const categoryId = getPostCategory(post);
  const categoryLabel = getCategoryLabel(categoryId);
  const readTime = getReadTime(post);
  const dateStr = formatDate(post.date);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col bg-[#FFFFFF] rounded-3xl overflow-hidden border-2 border-[#D6DCE3] hover:border-[#0055A4] hover:shadow-[0_20px_50px_rgba(0,85,164,0.25)] hover:-translate-y-2 transition-all duration-500"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0A1B33]">
        <Image
          src={post.image}
          alt={`${post.title} - blog abonnement IPTV`}
          width={800}
          height={500}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33] via-[#0A1B33]/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0055A4] text-[#FFFFFF] text-[10px] font-black uppercase tracking-wider shadow-lg">
            <Tag className="w-3 h-3" />
            {categoryLabel}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0A1B33]/80 backdrop-blur-md text-[#FFFFFF] text-[10px] font-black uppercase tracking-wider border border-white/10">
            <Clock className="w-3 h-3" />
            {readTime}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6">
        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#0A1B33]/60 mb-3">
          <Calendar className="w-3 h-3 text-[#0055A4]" />
          <span>{dateStr}</span>
          <span className="text-[#0055A4]">•</span>
          <span>{post.author}</span>
        </div>

        <h3 className="text-base md:text-lg font-black text-[#0A1B33] uppercase tracking-tight leading-snug mb-3 line-clamp-2 group-hover:text-[#0055A4] transition-colors">
          {post.title}
        </h3>

        <p className="text-[#0055A4] text-sm font-medium leading-relaxed line-clamp-3 mb-4 flex-1">
          {post.description || post.excerpt || ''}
        </p>

        <div className="pt-4 border-t border-[#D6DCE3] flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[#0055A4] font-black text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all">
            Lire l’article
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
          <div className="w-8 h-8 rounded-xl bg-[#0055A4]/10 border border-[#0055A4]/30 flex items-center justify-center text-[#0055A4] group-hover:bg-[#FFCD00] group-hover:text-[#0A1B33] group-hover:border-[#FFCD00] transition-all duration-300">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// CARTE DE L’ARTICLE À LA UNE
// ---------------------------------------------------------------------------
function FeaturedCard({ post }: { post: any }) {
  const categoryLabel = getCategoryLabel(getPostCategory(post));
  const readTime = getReadTime(post);
  const dateStr = formatDate(post.date);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#FFFFFF] rounded-[2rem] overflow-hidden border-2 border-[#FFCD00] hover:shadow-[0_25px_60px_rgba(255,205,0,0.3)] transition-all duration-500"
    >
      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-[#0A1B33]">
        <Image
          src={post.image}
          alt={`${post.title} - article à la une de l’abonnement IPTV`}
          width={900}
          height={600}
          priority
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0A1B33]/80 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0055A4] text-[#FFFFFF] text-[11px] font-black uppercase tracking-widest shadow-xl border border-[#FFCD00]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#FFCD00]" />
            À la une
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#0A1B33]/60 mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0055A4]/10 text-[#0055A4] border border-[#0055A4]/30">
            <Tag className="w-3 h-3" />
            {categoryLabel}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#0055A4]" />
            {dateStr}
          </span>
          <span className="text-[#0055A4]">•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#0055A4]" />
            {readTime}
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0A1B33] uppercase tracking-tight leading-tight mb-4 group-hover:text-[#0055A4] transition-colors">
          {post.title}
        </h2>

        <p className="text-[#0055A4] text-sm md:text-base font-medium leading-relaxed mb-6 line-clamp-3">
          {post.description || post.excerpt || ''}
        </p>

        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all shadow-lg border border-[#0055A4]">
            Lire l’article complet
            <ArrowRight className="w-4 h-4" />
          </span>
          <span className="text-[#0A1B33]/50 text-xs font-bold uppercase tracking-wider">
            par {post.author}
          </span>
        </div>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// PAGE PRINCIPALE
// ---------------------------------------------------------------------------
export default function BlogListing() {
  const postsForGrid = restPosts;
  const totalPages = Math.ceil(postsForGrid.length / POSTS_PER_PAGE);
  const currentPosts = postsForGrid.slice(0, POSTS_PER_PAGE);

  const tagCounts: Record<string, number> = {};
  blogPosts.forEach((post) => {
    (post.keywords || []).forEach((kw: string) => {
      const clean = kw.toLowerCase().trim();
      if (clean.length > 2 && clean.length < 40) {
        tagCounts[clean] = (tagCounts[clean] || 0) + 1;
      }
    });
  });

  return (
    <>
      <BlogSchema />

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
              <BookOpen className="w-4 h-4 text-[#FFCD00]" />
              <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
                Blog abonnement IPTV 🇫🇷
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-[#FFFFFF] mb-6">
              BLOG ET GUIDES <br />
              <span className="text-[#FFCD00]">ABONNEMENT IPTV</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/70 font-bold max-w-2xl mx-auto leading-relaxed mb-8">
              Guides d’installation, avis d’applications, astuces de streaming et actualités. Tout ce qu’il vous faut pour profiter au maximum de votre abonnement IPTV.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF]/5 border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5 text-[#FFCD00]" />
                {blogPosts.length} articles
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF]/5 border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FFCD00]" />
                Mis à jour chaque semaine
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF]/5 border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
                <MessageCircle className="w-3.5 h-3.5 text-[#FFCD00]" />
                Assistance 24/7
              </span>
            </div>
          </div>
        </section>

        {/* FILTRES DE CATÉGORIES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border-2 ${
                  cat.id === 'all'
                    ? 'bg-[#FFCD00] text-[#0A1B33] border-[#FFCD00] shadow-lg shadow-[#FFCD00]/30'
                    : 'bg-[#FFFFFF]/5 text-[#FFFFFF]/70 border-white/10 hover:bg-[#0055A4]/20 hover:text-[#FFFFFF] hover:border-[#0055A4]/60'
                }`}
                aria-label={`Filtrer par ${cat.label}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* ARTICLE À LA UNE */}
        {featuredPost && (
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-1 w-12 bg-[#FFCD00] rounded-full" />
              <h2 className="text-sm font-black uppercase tracking-widest text-[#FFCD00]">
                Article à la une
              </h2>
            </div>
            <FeaturedCard post={featuredPost} />
          </section>
        )}

        {/* GRILLE D’ARTICLES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-[#FFCD00] rounded-full" />
            <h2 className="text-sm font-black uppercase tracking-widest text-[#FFCD00]">
              Derniers articles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} priority={i < 3} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2 sm:gap-3">
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FFFFFF]/5 text-[#FFFFFF]/40 border border-white/10 text-xs font-black uppercase tracking-widest cursor-not-allowed"
                aria-label="Page précédente"
              >
                <ChevronLeft className="w-4 h-4" />
                Précédent
              </button>

              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`w-10 h-10 rounded-full text-xs font-black transition-all ${
                    idx === 0
                      ? 'bg-[#FFCD00] text-[#0A1B33] shadow-lg shadow-[#FFCD00]/30'
                      : 'bg-[#FFFFFF]/5 text-[#FFFFFF]/70 border border-white/10 hover:bg-[#0055A4]/20 hover:text-[#FFFFFF] hover:border-[#0055A4]/60'
                  }`}
                  aria-label={`Aller à la page ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                type="button"
                disabled={totalPages <= 1}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  totalPages > 1
                    ? 'bg-[#0055A4]/20 text-[#FFCD00] border border-[#FFCD00]/40 hover:bg-[#FFCD00] hover:text-[#0A1B33] cursor-pointer'
                    : 'bg-[#FFFFFF]/5 text-[#FFFFFF]/40 border border-white/10 cursor-not-allowed'
                }`}
                aria-label="Page suivante"
              >
                Suivant
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>

        {/* BANNIÈRE WHATSAPP */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#FFCD00]/40 bg-gradient-to-br from-[#0055A4] via-[#0A1B33] to-[#0055A4] p-8 md:p-10 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,205,0,0.12),_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FFCD00] text-[#0A1B33] px-4 py-2 rounded-full mb-5 shadow-lg">
                <MessageCircle className="w-4 h-4" />
                <span className="font-black text-xs uppercase tracking-widest">
                  Besoin d’aide ?
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-4">
                Obtenez une aide gratuite pour installer votre abonnement IPTV
              </h3>
              <p className="text-[#FFFFFF]/90 text-sm sm:text-base font-bold max-w-xl mx-auto mb-6">
                Notre équipe est disponible sur WhatsApp 24h/24 pour vous aider avec Firestick, Smart TV ou tout autre appareil. Activation guidée d’IPTV Smarter Pro incluse.
              </p>
              <a
                href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  `Bonjour, j’ai trouvé votre blog et j’ai besoin d’aide pour l’installation.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFCD00] text-[#0A1B33] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#0A1B33]/30"
              >
                <MessageCircle className="w-5 h-5" />
                Discuter sur WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* CTA BAS DE PAGE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pb-20">
          <div className="bg-[#FFFFFF] rounded-3xl p-8 md:p-12 border-2 border-[#0055A4]/30 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#0A1B33] leading-tight mb-4">
              Prêt à regarder votre <span className="text-[#0055A4]">abonnement IPTV ?</span>
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