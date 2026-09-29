'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  Sparkles,
  Zap,
  MessageCircle,
  Flame,
  Crown,
  CheckCircle2,
} from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

// ---------------------------------------------------------------------------
// FONCTIONS UTILITAIRES
// ---------------------------------------------------------------------------
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

function formatDateShort(dateStr: string): string {
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
// BARRE LATÉRALE
// ---------------------------------------------------------------------------
export default function ArticleScrollSidebar({
  relatedPosts,
  whatsappIboMsg,
  whatsappSubMsg,
}: {
  relatedPosts: any[];
  whatsappIboMsg: string;
  whatsappSubMsg: string;
}) {
  return (
    <aside className="lg:col-span-4 order-2 lg:order-2 lg:self-start lg:sticky lg:top-24 h-fit">
      <div className="space-y-6">
        {/* =====================================================
            Carte 1 — Lecteur recommandé
        ===================================================== */}
        <div className="bg-[#FFFFFF] border-4 border-[#0055A4] rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0055A4]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 bg-[#0055A4] text-[#FFFFFF] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5" /> Lecteur recommandé
          </div>

          <h2 className="text-lg sm:text-xl font-black text-[#0A1B33] uppercase tracking-tight mb-2">
            Accès IPTV Smarter Pro
          </h2>
          <p className="text-[#0055A4] text-xs sm:text-sm font-bold leading-relaxed mb-6">
            IPTV Smarter Pro fait partie de nos lecteurs recommandés pour une lecture rapide et sécurisée avec un minimum de mise en mémoire tampon. Notre équipe vous aide à le configurer et reste disponible pendant toute la durée de votre abonnement.
          </p>

          <a
            href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${whatsappIboMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#25D366] text-[#FFFFFF] font-black text-xs uppercase tracking-wider hover:bg-[#20BA5A] transition-all shadow-lg hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Commander IPTV Smarter Pro</span>
          </a>
        </div>

        {/* =====================================================
            Carte 2 — Formules officielles
        ===================================================== */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1B33] via-[#122A4D] to-[#0055A4]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,205,0,0.15),_transparent_60%)] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 p-6">
            <div className="inline-flex items-center gap-1.5 bg-[#FFCD00] text-[#0A1B33] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-md">
              <Crown className="w-3.5 h-3.5" /> Formules officielles
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight mb-2 drop-shadow-md">
              Abonnement IPTV <br />
              <span className="text-[#FFCD00]">Premium</span>
            </h2>
            <p className="text-[#FFFFFF]/85 text-xs sm:text-sm font-bold leading-relaxed mb-6">
              36 000+ chaînes en direct · 120 000+ films et séries · 4K Ultra HD · Serveurs anti-freeze.
            </p>

            <div className="space-y-3">
              {/* Standard */}
              <div className="group bg-[#FFFFFF] border-2 border-[#D6DCE3] rounded-2xl p-4 hover:border-[#0055A4] hover:-translate-y-0.5 transition-all shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#0055A4]/15 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[#0055A4]" />
                    </div>
                    <span className="text-[#0A1B33] font-black text-sm uppercase tracking-tight">
                      Standard
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-[#0A1B33] font-black text-xl leading-none">
                      29 €
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-wider text-[#0A1B33]/50 mt-0.5">
                      3 mois
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3 text-[10px] font-bold text-[#0055A4]">
                  <CheckCircle2 className="w-3 h-3 text-[#0055A4]" />
                  <span>Installation par e-mail en quelques minutes</span>
                </div>
                <a
                  href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${whatsappSubMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-full bg-[#25D366] text-[#FFFFFF] hover:bg-[#20BA5A] transition-all font-black text-[10px] uppercase tracking-widest block shadow-md hover:scale-105 cursor-pointer"
                >
                  Commander sur WhatsApp
                </a>
              </div>

              {/* VIP */}
              <div className="group relative bg-[#122A4D] border-2 border-[#FFCD00] rounded-2xl p-4 hover:border-[#FFFFFF] hover:-translate-y-0.5 transition-all shadow-2xl">
                <div className="absolute -top-3 right-4 bg-[#EF4135] text-[#FFFFFF] px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-md">
                  ⭐ Meilleur tarif
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#FFCD00]/20 flex items-center justify-center">
                      <Crown className="w-4 h-4 text-[#FFCD00]" />
                    </div>
                    <span className="text-[#FFFFFF] font-black text-sm uppercase tracking-tight">
                      12 Mois VIP
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-[#FFCD00] font-black text-xl leading-none">
                      55 €
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-wider text-[#FFFFFF]/50 mt-0.5">
                      Économisez 50 %
                    </div>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#FFFFFF]/80">
                    <CheckCircle2 className="w-3 h-3 text-[#FFCD00]" />
                    <span>Serveurs anti-freeze 4K</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#FFFFFF]/80">
                    <CheckCircle2 className="w-3 h-3 text-[#FFCD00]" />
                    <span>Essai gratuit avant paiement</span>
                  </div>
                </div>

                <a
                  href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${whatsappSubMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-full bg-[#25D366] text-[#FFFFFF] hover:bg-[#20BA5A] transition-all font-black text-[10px] uppercase tracking-widest block shadow-lg hover:scale-105 cursor-pointer"
                >
                  Commander VIP sur WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#FFFFFF]/20 text-center">
              <Link
                href="/pricing"
                className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider hover:underline inline-flex items-center gap-1 group"
              >
                Voir toutes les formules d’abonnement IPTV
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#FFCD00]" />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            Carte 3 — Articles similaires
        ===================================================== */}
        {relatedPosts.length > 0 && (
          <div className="bg-[#FFFFFF] border-4 border-[#0055A4] rounded-3xl p-5 shadow-xl">
            <h2 className="text-lg font-black text-[#0A1B33] uppercase tracking-tight mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#0055A4]" /> Articles similaires
            </h2>

            <div className="space-y-4">
              {relatedPosts.map((relPost) => {
                const relCategory = getCategoryLabel(relPost);
                const relReadTime = getReadTime(relPost);
                const relDate = formatDateShort(relPost.date);

                return (
                  <Link
                    key={relPost.slug}
                    href={`/blog/${relPost.slug}`}
                    className="group block bg-[#FFFFFF] rounded-2xl overflow-hidden border-2 border-[#D6DCE3] hover:border-[#0055A4] hover:shadow-[0_15px_35px_rgba(0,85,164,0.2)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0A1B33]">
                      <Image
                        src={relPost.image}
                        alt={relPost.title}
                        width={400}
                        height={250}
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 350px"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33] via-[#0A1B33]/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                      <div className="absolute top-2 left-2 z-10">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0055A4] text-[#FFFFFF] text-[9px] font-black uppercase tracking-wider shadow-lg">
                          <Tag className="w-2.5 h-2.5" />
                          {relCategory}
                        </span>
                      </div>

                      <div className="absolute top-2 right-2 z-10">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0A1B33]/80 backdrop-blur-md text-[#FFFFFF] text-[9px] font-black uppercase tracking-wider border border-[#1E3A5F]">
                          <Clock className="w-2.5 h-2.5" />
                          {relReadTime} min
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-[#0A1B33]/60 mb-2">
                        <Calendar className="w-3 h-3 text-[#0055A4]" />
                        <span>{relDate}</span>
                      </div>

                      <h3 className="text-sm font-black text-[#0A1B33] uppercase tracking-tight leading-snug mb-2 line-clamp-2 group-hover:text-[#0055A4] transition-colors">
                        {relPost.title}
                      </h3>

                      <p className="text-[#0055A4] text-xs font-medium leading-relaxed line-clamp-2 mb-3">
                        {relPost.description || relPost.excerpt}
                      </p>

                      <div className="pt-3 border-t border-[#D6DCE3] flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-[#0055A4] font-black text-[10px] uppercase tracking-widest group-hover:gap-2 transition-all">
                          Lire
                          <ArrowRight className="w-3 h-3" />
                        </span>
                        <div className="w-6 h-6 rounded-lg bg-[#0055A4]/10 border border-[#0055A4]/30 flex items-center justify-center text-[#0055A4] group-hover:bg-[#0055A4] group-hover:text-[#FFFFFF] transition-all duration-300">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}