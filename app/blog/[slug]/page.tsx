// app/blog/[slug]/page.tsx
import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Clock,
  Zap,
  ShieldCheck,
  Headphones,
  BookOpen,
  PlayCircle,
  Award,
  Globe,
  ArrowUpRight,
} from 'lucide-react';
import ShareButtons from '../../components/ShareButtons';
import ArticleScrollSidebar from '../../components/ArticleScrollSidebar';

type Props = { params: Promise<{ slug: string }> };

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const LANGUAGE = CONSTANTS.LANGUAGE || 'fr-FR';

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

function getCategoryLabel(post: any): string {
  if (post.category) {
    const map: Record<string, string> = {
      setup: 'Guide d’installation',
      review: 'Avis',
      sports: 'Sport en direct',
      tips: 'Astuces',
      news: 'Actualités',
    };
    return map[post.category] || post.category;
  }
  if (post.keywords && post.keywords.length > 0) return post.keywords[0];
  return 'Guide abonnement IPTV';
}

function getReadTime(post: any): number {
  if (post.readTime) {
    const match = String(post.readTime).match(/(\d+)/);
    if (match) return parseInt(match[1]);
  }
  const words = (post.content || '')
    .replace(/<[^>]*>/g, '')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(3, Math.ceil(words / 200));
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function sanitizeContent(html: string): string {
  return html
    .replace(/<h1(\s[^>]*)?>/gi, '<h2$1>')
    .replace(/<\/h1>/gi, '<\/h2>')
    .replace(/<h2([^>]*)>(.*?faq.*?)<\/h2>/gi, '<h2 id="faq-section"$1>$2</h2>');
}

function extractFAQs(html: string): { q: string; a: string }[] {
  const faqs: { q: string; a: string }[] = [];

  const cardRegex =
    /<div class="faq-card[^"]*">\s*<h3[^>]*>[\s\S]*?<span>([\s\S]*?)<\/span>\s*<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/div>/gi;
  let match;
  while ((match = cardRegex.exec(html)) !== null) {
    const q = match[1].replace(/<[^>]*>/g, '').trim();
    const a = match[2].replace(/<[^>]*>/g, '').trim();
    if (q.length > 5 && a.length > 10) {
      faqs.push({ q, a });
    }
  }

  if (faqs.length === 0) {
    const legacyRegex = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
    let legacyMatch;
    while ((legacyMatch = legacyRegex.exec(html)) !== null) {
      const rawQ = legacyMatch[1].replace(/<[^>]*>/g, '').trim();
      const rawA = legacyMatch[2].replace(/<[^>]*>/g, '').trim();
      if (rawQ.includes('Q.') || rawQ.endsWith('?')) {
        const cleanQ = rawQ.replace(/^Q\.\s*/, '').trim();
        if (cleanQ.length > 5 && rawA.length > 10) {
          faqs.push({ q: cleanQ, a: rawA });
        }
      }
    }
  }

  return faqs.slice(0, 10);
}

function getRelatedPosts(currentPost: any, allPosts: any[], limit = 3): any[] {
  const scored = allPosts
    .filter((p) => p.slug !== currentPost.slug)
    .map((p) => {
      let score = 0;
      if (p.category && currentPost.category && p.category === currentPost.category) {
        score += 5;
      }
      const currentKw = (currentPost.keywords || []).map((k: string) => k.toLowerCase());
      const otherKw = (p.keywords || []).map((k: string) => k.toLowerCase());
      const shared = currentKw.filter((k: string) => otherKw.includes(k));
      score += shared.length * 2;
      if (p.author === currentPost.author) score += 1;
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.post);
}

function extractHeadings(html: string): string[] {
  const headings: string[] = [];
  const regex = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, '').trim();
    if (text.length > 3 && text.length < 100) {
      headings.push(text);
    }
  }
  return headings.slice(0, 8);
}

import { BlogPost } from '@/lib/blog';

function extractQuickFacts(post: Partial<BlogPost>): { label: string; value: string }[] {
  const content = (post.content || '').toLowerCase();

  const qualityValue =
    post.quality ||
    (content.includes('4k') || content.includes('uhd') ? '4K Ultra HD' : 'HD / 4K');

  const deviceValue =
    post.device ||
    (content.includes('firestick')
      ? 'Compatible Firestick'
      : content.includes('android tv') || content.includes('smart tv')
      ? 'Smart TV / Android'
      : 'Multi-appareils');

  const playerValue =
    post.player ||
    (content.includes('smarters')
      ? 'IPTV Smarters Pro'
      : content.includes('tivimate')
      ? 'TiviMate'
      : 'Tous les lecteurs');

  const eventsValue =
    post.events ||
    (content.includes('ligue 1') || content.includes('champions league') || content.includes('ppv') || content.includes('sport')
      ? 'Sport en direct et PPV'
      : 'Grands événements');

  return [
    { label: 'Qualité', value: qualityValue },
    { label: 'Appareil', value: deviceValue },
    { label: 'Lecteur', value: playerValue },
    { label: 'Événements', value: eventsValue },
  ];
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    const fallbackUrl = `${SITE_URL}/blog`;
    return {
      title: 'Article introuvable',
      description: 'L’article que vous recherchez est introuvable.',
      alternates: { canonical: fallbackUrl },
    };
  }

  const shortTitle = clampTitle(post.metatitle || post.title);

  const description = clampDescription(
    post.metadescription ||
      post.description ||
      post.excerpt ||
      `Découvrez le guide complet et les astuces pour votre abonnement IPTV en France.`
  );

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith('http')
    ? post.image
    : `${SITE_URL}${post.image}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: shortTitle },
    description,
    keywords: post.keywords?.length
      ? post.keywords.join(', ')
      : `${CONSTANTS.FOCUS_KEYWORD}, ${CONSTANTS.SECONDARY_FOCUS_KEYWORD}`,
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: BRAND,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'fr-FR': canonicalUrl,
        'fr-BE': canonicalUrl,
        'fr-CH': canonicalUrl,
        'fr-CA': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: shortTitle,
      description,
      url: canonicalUrl,
      siteName: 'Abonnement IPTV',
      locale: CONSTANTS.LOCALE,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: shortTitle,
      description,
      images: [imageUrl],
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
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const readTime = getReadTime(post);
  const displayCategory = getCategoryLabel(post);
  const dateStr = formatDate(post.date);
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  const imageSrc = post.image || '/img/blog/default.webp';

  const schemaImageUrl = imageSrc.startsWith('http')
    ? imageSrc
    : `${SITE_URL}${imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`}`;

  const safeContent = sanitizeContent(post.content);
  const faqs = extractFAQs(post.content);
  const relatedPosts = getRelatedPosts(post, blogPosts, 3);
  const articleHeadings = extractHeadings(safeContent);
  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
  const quickFacts = extractQuickFacts(post);

  const whatsappIboMsg = encodeURIComponent(
    `Bonjour ! Je souhaite obtenir l’abonnement IPTV Smarters Pro.`
  );
  const whatsappSubMsg = encodeURIComponent(
    `Bonjour ! Je souhaite obtenir un abonnement IPTV.`
  );

  const authorId = `${SITE_URL}/#author-${post.author
    .toLowerCase()
    .replace(/\s+/g, '-')}`;

  const orgId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  const jsonLdGraph: any = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': authorId,
        name: post.author,
        url: `${SITE_URL}/a-propos`,
        jobTitle: 'Spécialiste abonnement IPTV',
        description: `Spécialiste des guides de streaming et de l’installation d’un abonnement IPTV pour les téléspectateurs français.`,
        knowsAbout: [
          'Abonnement IPTV',
          'IPTV Smarters Pro',
          'Installation Firestick',
          'Streaming Smart TV',
          'Streaming 4K',
        ],
        worksFor: { '@id': orgId },
      },
      {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}/#article`,
        headline: post.title,
        name: post.title,
        description: post.description || post.excerpt,
        keywords: post.keywords ? post.keywords.join(', ') : '',
        articleSection: displayCategory,
        wordCount: wordCount,
        timeRequired: `PT${readTime}M`,
        image: {
          '@type': 'ImageObject',
          '@id': `${canonicalUrl}/#primaryimage`,
          url: schemaImageUrl,
          contentUrl: schemaImageUrl,
          width: 1200,
          height: 630,
          caption: post.title,
          representativeOfPage: true,
        },
        thumbnailUrl: schemaImageUrl,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: LANGUAGE,
        author: { '@id': authorId },
        publisher: { '@id': orgId },
        mainEntityOfPage: { '@id': `${canonicalUrl}/#webpage` },
        isPartOf: { '@id': `${canonicalUrl}/#webpage` },
        about: articleHeadings.slice(0, 4).map((h) => ({
          '@type': 'Thing',
          name: h,
        })),
        mentions: (post.keywords || []).slice(0, 6).map((k: string) => ({
          '@type': 'Thing',
          name: k,
        })),
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', 'article > p:first-of-type'],
        },
        accessMode: ['textual', 'visual'],
        isAccessibleForFree: true,
        copyrightHolder: { '@id': orgId },
        license: `${SITE_URL}/conditions`,
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}/#webpage`,
        url: canonicalUrl,
        name: post.title,
        description: post.description || post.excerpt,
        inLanguage: LANGUAGE,
        isPartOf: { '@id': websiteId },
        about: { '@id': `${canonicalUrl}/#article` },
        primaryImageOfPage: { '@id': `${canonicalUrl}/#primaryimage` },
        breadcrumb: { '@id': `${canonicalUrl}/#breadcrumb` },
        datePublished: post.date,
        dateModified: post.date,
        potentialAction: {
          '@type': 'ReadAction',
          target: [canonicalUrl],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${SITE_URL}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  if (faqs.length > 0) {
    jsonLdGraph['@graph'].push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}/#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return (
    <article className="flex flex-col min-h-screen bg-[#EEEEEE] text-[#0A1B33] relative">

      {/* BARRE DE PROGRESSION DE LECTURE */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-[#0055A4]/20 backdrop-blur-sm">
        <div className="h-full w-1/3 bg-gradient-to-r from-[#0055A4] via-[#0A1B33] to-[#0055A4] shadow-[0_0_12px_rgba(0,85,164,0.5)]" />
      </div>

      <script
        type="application/ld+json"
        id="article-schema-data"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {/* ==========================================================
          HERO — IMAGE DE COUVERTURE
      ========================================================== */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900 border-b border-slate-300">

        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/80 to-slate-950/90" />
        </div>

        {/* Grille décorative */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* CONTENU HERO */}
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 flex flex-col items-center text-center">

          {/* Badge catégorie */}
          <div className="inline-flex items-center gap-2 bg-[#0055A4] px-5 py-2 rounded-full mb-6 shadow-md border border-[#0055A4]/40">
            <BookOpen className="w-4 h-4 text-white" />
            <span className="text-white text-[11px] font-black uppercase tracking-widest">
              {displayCategory}
            </span>
          </div>

          {/* Titre */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase mb-6 leading-[1.1] max-w-5xl shadow-sm">
            {post.title}
          </h1>

          {/* Séparateur or */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#FFCD00]" />
            <div className="w-2 h-2 rotate-45 bg-[#FFCD00]" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#FFCD00]" />
          </div>

          {/* Sous-titre */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed mb-10">
            {post.description || post.excerpt}
          </p>

          {/* Auteur et métadonnées */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4">
            <div className="inline-flex items-center gap-3 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 pl-1.5 pr-4 py-1.5 rounded-full shadow-md">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#0055A4]">
                <Image
                  src="/img/profile.webp"
                  alt={post.author}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <div className="text-left">
                <div className="text-[9px] font-black uppercase tracking-widest text-[#FFCD00] leading-none">
                  Écrit par
                </div>
                <div className="text-[11px] font-black text-white uppercase tracking-wider leading-tight mt-0.5">
                  {post.author}
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 px-4 py-2 rounded-full text-slate-200 text-[11px] font-black uppercase tracking-widest shadow-md">
              <Calendar className="w-3.5 h-3.5 text-[#FFCD00]" />
              <span>{dateStr}</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 px-4 py-2 rounded-full text-slate-200 text-[11px] font-black uppercase tracking-widest shadow-md">
              <Clock className="w-3.5 h-3.5 text-[#FFCD00]" />
              <span>{readTime} min de lecture</span>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================
          BARRE DE FAITS RAPIDES
      ========================================================== */}
      <section className="bg-[#FFFFFF] border-y border-slate-300 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-300">
            {quickFacts.map((fact, idx) => (
              <div key={idx} className="py-6 sm:py-7 px-4 text-center group hover:bg-slate-100/50 transition-colors">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0055A4] mb-1.5">
                  {fact.label}
                </div>
                <div className="text-sm sm:text-base font-black text-[#0A1B33] uppercase tracking-tight">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIL D’ARIANE */}
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8 mt-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#0A1B33] hover:text-[#0055A4] transition-colors font-black text-xs uppercase tracking-widest group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour à tous les articles
        </Link>
      </div>

      {/* ==========================================================
          GRILLE PRINCIPALE — CONTAINER ÉLARGI, SIDEBAR PRÉSERVÉE
      ========================================================== */}
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

        {/* COLONNE CONTENU — col-span-8 (proportion préservée, gagne en largeur grâce au container) */}
        <div className="lg:col-span-8 order-1 space-y-10">

          {/* CARTE CORPS D’ARTICLE */}
          <div className="relative bg-[#FFFFFF] text-[#0A1B33] rounded-3xl border-2 border-[#0055A4]/40 shadow-[0_25px_60px_rgba(10,27,51,0.15)] overflow-hidden">
            {/* Barre drapeau France en haut de la carte article — SEUL CHANGEMENT DE COULEUR */}
            <div className="h-1.5 flex">
              <div className="flex-1 bg-[#0055A4]" />
              <div className="flex-1 bg-[#FFFFFF]" />
              <div className="flex-1 bg-[#EF4135]" />
            </div>

            <div className="p-6 sm:p-9 md:p-12 lg:p-14 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0055A4]/8 to-transparent rounded-bl-[4rem] pointer-events-none" />

<div
  className="
    article-body
    prose prose-lg max-w-none relative
    [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:md:text-3xl [&_h2]:font-black [&_h2]:text-[#0055A4] [&_h2]:mb-6 [&_h2]:mt-14 [&_h2]:sm:mt-16 [&_h2]:tracking-tight [&_h2]:uppercase [&_h2]:leading-tight
    [&_h2]:pb-4 [&_h2]:border-b-2 [&_h2]:border-[#0055A4]/20
    [&_h2]:relative [&_h2]:pl-5 [&_h2]:before:content-[''] [&_h2]:before:absolute [&_h2]:before:left-0 [&_h2]:before:top-0 [&_h2]:before:bottom-4 [&_h2]:before:w-1.5 [&_h2]:before:bg-[#FFCD00] [&_h2]:before:rounded-full
    [&_h2#faq-section]:pl-0 [&_h2#faq-section]:before:hidden
    [&_h2[id*='faq']]:pl-0 [&_h2[id*='faq']]:before:hidden
    [&_h2[id*='FAQ']]:pl-0 [&_h2[id*='FAQ']]:before:hidden
    [&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:md:text-2xl [&_h3]:font-black [&_h3]:text-[#0055A4] [&_h3]:mb-4 [&_h3]:mt-10 [&_h3]:uppercase
    [&_h4]:text-base [&_h4]:sm:text-lg [&_h4]:md:text-xl [&_h4]:font-black [&_h4]:text-[#0055A4] [&_h4]:mb-3 [&_h4]:mt-8 [&_h4]:uppercase
    [&_p]:text-[#0A1B33] [&_p]:text-[15px] [&_p]:sm:text-base [&_p]:md:text-lg [&_p]:font-medium [&_p]:leading-[1.85] [&_p]:mb-6 [&_p]:md:mb-7
    [&_a]:text-[#0055A4] [&_a]:font-black [&_a]:hover:text-[#0A1B33] [&_a]:transition-colors [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-2
    [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFCD00] [&_blockquote]:bg-[#0055A4]/5 [&_blockquote]:pl-6 [&_blockquote]:sm:pl-7 [&_blockquote]:py-4 [&_blockquote]:my-8 [&_blockquote]:text-[#0A1B33]/70 [&_blockquote]:italic [&_blockquote]:rounded-r-xl
    [&_code]:bg-[#0A1B33]/10 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-lg [&_code]:text-[#0055A4] [&_code]:text-sm [&_code]:font-bold
    [&_pre]:bg-[#0A1B33] [&_pre]:text-[#FFFFFF] [&_pre]:p-6 [&_pre]:sm:p-7 [&_pre]:rounded-2xl [&_pre]:overflow-x-auto
    [&_img]:rounded-2xl [&_img]:my-10 [&_img]:border-2 [&_img]:border-[#0055A4] [&_img]:w-full [&_img]:h-auto [&_img]:shadow-2xl
    [&_hr]:border-[#0055A4]/20 [&_hr]:my-14
  "
  dangerouslySetInnerHTML={{ __html: safeContent }}
/>

            </div>
          </div>

          {/* BOUTONS DE PARTAGE */}
          <ShareButtons title={`${post.title} - Abonnement IPTV`} url={canonicalUrl} />

          {/* SUJETS */}
          {post.keywords && post.keywords.length > 0 && (
            <div className="pt-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-[#0055A4]/20 border border-[#FFCD00]/40 flex items-center justify-center">
                  <Tag className="w-4 h-4 text-[#0A1B33]" />
                </div>
                <h2 className="text-[#0A1B33] font-black text-base md:text-lg uppercase tracking-wide">
                  Sujets abordés dans cet article
                </h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {post.keywords.slice(0, 8).map((keyword: string) => (
                  <span
                    key={keyword}
                    className="group/chip px-4 py-2 bg-[#FFFFFF] text-[#0A1B33] text-xs md:text-sm font-black uppercase tracking-wider rounded-full border-2 border-[#0055A4] shadow-md hover:bg-[#FFCD00] hover:text-[#0A1B33] hover:border-[#FFCD00] hover:scale-105 transition-all cursor-default"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CARTE AUTEUR */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#0055A4]/40 bg-gradient-to-br from-[#FFFFFF] via-[#FFFFFF] to-[#EEEEEE] shadow-2xl">
            <div className="h-1.5 bg-gradient-to-r from-[#FFCD00] via-[#0055A4] to-[#FFCD00]" />

            <div className="p-8 sm:p-10 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0055A4]/8 rounded-bl-[4rem] pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-7 relative z-10">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-4 border-[#0055A4] shadow-xl flex-shrink-0 rotate-2 hover:rotate-0 transition-transform">
                  <Image
                    src="/img/profile.webp"
                    alt={`${post.author} - Spécialiste abonnement IPTV`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 bg-[#0055A4] text-[#FFFFFF] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-[#FFCD00]/40">
                    <User className="w-3 h-3 text-[#FFCD00]" /> Auteur
                  </div>
                  <h2 className="text-[#0A1B33] font-black text-xl sm:text-2xl md:text-3xl mb-2 uppercase tracking-tight">
                    {post.author}
                  </h2>
                  <p className="text-[#0055A4] text-xs md:text-sm uppercase tracking-widest font-black mb-4">
                    Spécialiste abonnement IPTV
                  </p>
                  <p className="text-[#0A1B33]/85 text-sm md:text-base font-semibold leading-relaxed">
                    Spécialisé dans les protocoles de streaming, la configuration d’applications et l’optimisation des réseaux pour la France. Aide les clients à tirer le meilleur parti de leur abonnement IPTV 4K et de l’installation d’IPTV Smarters Pro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CARTE CTA INTERNE */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0055A4] via-[#0A1B33] to-[#0055A4] border-2 border-[#FFCD00]/40 p-8 sm:p-10 md:p-12 shadow-2xl">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FFCD00]/15 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#0055A4]/40 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#FFCD00] text-[#0A1B33] px-3 py-1 rounded-full mb-5 shadow-md">
                  <PlayCircle className="w-3.5 h-3.5" />
                  <span className="font-black text-[10px] uppercase tracking-widest">
                    Prêt à regarder ?
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight leading-tight mb-3">
                  Obtenez votre abonnement IPTV dès aujourd’hui
                </h3>
                <p className="text-[#FFFFFF]/80 text-sm md:text-base font-bold max-w-lg">
                  36 000+ chaînes en direct, 120 000+ films et séries, essai gratuit d’abord, installation instantanée via WhatsApp.
                </p>
              </div>

              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <a
                  href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${whatsappSubMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FFCD00] text-[#0A1B33] font-black text-xs uppercase tracking-widest hover:bg-[#E5B800] hover:scale-105 transition-all shadow-lg"
                >
                  Démarrer l’essai gratuit <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/tarifs"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#0A1B33] text-[#FFFFFF] font-black text-xs uppercase tracking-widest border-2 border-[#FFCD00] hover:bg-[#FFFFFF]/10 transition-all"
                >
                  Voir les formules
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BARRE LATÉRALE — col-span-4, taille originale préservée */}
        <div className="lg:col-span-4 order-2 lg:self-stretch">
          <ArticleScrollSidebar
            relatedPosts={relatedPosts}
            whatsappIboMsg={whatsappIboMsg}
            whatsappSubMsg={whatsappSubMsg}
          />
        </div>
      </div>

      {/* ==========================================================
          BANDEAU DE CONFIANCE
      ========================================================== */}
      <div className="border-t border-slate-300 mt-12 py-10 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-5 md:gap-10 text-[#0A1B33] text-xs font-black uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#0055A4]" /> 4K Ultra HD
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0055A4]" /> 99,9 % de disponibilité serveur
            </span>
            <span className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-[#0055A4]" /> Assistance WhatsApp 24/7
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FFCD00]" /> 50 000+ téléspectateurs satisfaits
            </span>
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#0055A4]" /> Couverture France entière
            </span>
          </div>
          <p className="text-center text-slate-500 text-xs mt-8 font-bold">
            © 2026 Abonnement IPTV. Tous droits réservés. Service IPTV en France 🇫🇷
          </p>
        </div>
      </div>
    </article>
  );
}