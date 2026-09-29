// app/sitemap.ts
import { MetadataRoute } from 'next';
import { CONSTANTS } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';
import { channelsData } from '@/lib/channels-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${CONSTANTS.DOMAIN}`;
  const now = new Date();

  // -------------------------------------------------------------------------
  // 1. PAGES PRINCIPALES STATIQUES — avec routes françaises
  // -------------------------------------------------------------------------
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/installation`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/abonnement-iptv`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/meilleur-iptv`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/iptv-france`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/revendeur`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/avis`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/assistance`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // -------------------------------------------------------------------------
  // 2. INDEX DES CHAÎNES
  // -------------------------------------------------------------------------
  const channelsIndex: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/chaines`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // -------------------------------------------------------------------------
  // 3. PAGES LÉGALES
  // -------------------------------------------------------------------------
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/conditions`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/remboursement`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/dmca`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // -------------------------------------------------------------------------
  // 4. CATÉGORIES DE CHAÎNES DYNAMIQUES
  // -------------------------------------------------------------------------
  const channelPages: MetadataRoute.Sitemap = channelsData.map((category) => ({
    url: `${baseUrl}/chaines/${category.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // -------------------------------------------------------------------------
  // 5. ARTICLES DE BLOG DYNAMIQUES
  // -------------------------------------------------------------------------
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // -------------------------------------------------------------------------
  // FUSION & RETOUR
  // -------------------------------------------------------------------------
  return [
    ...corePages,
    ...channelsIndex,
    ...channelPages,
    ...blogPostPages,
    ...legalPages,
  ];
}