import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  Award,
  Globe,
  Users,
  Server,
  Zap,
  ShieldCheck,
  Trophy,
  Headphones,
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  Tv,
  Film,
  Activity,
} from 'lucide-react';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/a-propos`;

// ---------------------------------------------------------------------------
// MÉTADONNÉES
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'À propos',
  `Découvrez l’histoire derrière notre abonnement IPTV, le fournisseur de confiance en France avec plus de 36 000 chaînes en direct en 4K Ultra HD et 99,9 % de disponibilité.`,
  '/a-propos'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const AboutPageSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${PAGE_URL}/#about`,
        url: PAGE_URL,
        name: `À propos de l’abonnement IPTV`,
        description: `Découvrez notre abonnement IPTV, le fournisseur de confiance en France avec plus de 36 000 chaînes en direct, 120 000 films et séries, et plus de 50 000 clients satisfaits en France et au-delà.`,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'À propos', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="about-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// PAGE PRINCIPALE
// ---------------------------------------------------------------------------
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A1B33] text-[#FFFFFF]">

      <AboutPageSchema />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-[#1E3A5F]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,85,164,0.25),_transparent_50%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #0055A408 1px, transparent 1px), linear-gradient(to bottom, #0055A408 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#122A4D] px-4 py-2 rounded-full mb-6 shadow-md border border-[#FFCD00]/40">
            <Sparkles className="w-4 h-4 text-[#FFCD00]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
              Notre histoire et notre mission 🇫🇷
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            À propos de <span className="text-[#FFCD00]">l’abonnement IPTV</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            Un abonnement IPTV premium en France. Profitez d’un streaming illimité en 4K sans coupure, sans engagement et sans frais cachés.
          </p>
        </div>
      </section>

      {/* STATISTIQUES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" aria-label="Statistiques de l’entreprise">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: '50 000+', label: 'Clients satisfaits' },
            { icon: Globe, value: '100+', label: 'Pays disponibles' },
            { icon: Server, value: '99,9 %', label: 'Disponibilité serveur' },
            { icon: Trophy, value: '4,9/5', label: 'Note moyenne' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="text-center p-6 bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl shadow-xl hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(255,205,0,0.25)] transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-[#0055A4] mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-black text-[#0A1B33] uppercase tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[#0A1B33]/70 text-xs font-black uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BANNIÈRE PROMO */}
      <section className="w-full bg-gradient-to-r from-[#0055A4] via-[#0A1B33] to-[#0055A4] py-10 px-4 sm:px-6 border-y-4 border-[#FFCD00]/30 shadow-[0_0_50px_rgba(0,85,164,0.4)] relative z-20 overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="bg-[#FFCD00] text-[#0A1B33] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md">
            ÉCONOMISEZ GROS SUR LA TV PAR CÂBLE
          </div>
          <h2 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            PRÊT POUR LA MEILLEURE EXPÉRIENCE IPTV ?
          </h2>
          <p className="text-[#FFFFFF]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            Arrêtez de payer trop cher pour des abonnements séparés. Obtenez tout le sport, les films et les chaînes françaises en une seule formule complète.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/tarifs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FFCD00] text-[#0A1B33] hover:bg-[#0A1B33] hover:text-[#FFCD00] hover:scale-105 transition-all duration-300 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl border border-[#0A1B33]/20"
            >
              <span>Voir les formules</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">

        {/* Carte d’introduction */}
        <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#0055A4]" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#0A1B33] uppercase tracking-tight mb-2">
                Bienvenue sur notre abonnement IPTV
              </h2>
              <p className="text-[#0055A4] font-bold text-base leading-relaxed">
                Nous avons été fondés avec un objectif clair : rendre la télévision premium en direct et les contenus à la demande accessibles et abordables pour chaque foyer en France, sans compromis sur la qualité d’image ni la stabilité.
              </p>
            </div>
          </div>
        </div>

        {/* Récit détaillé */}
        <div className="space-y-12">

          {/* Mission */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#FFCD00] rounded-full inline-block" />
              Notre mission et notre vision
            </h2>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium mb-4">
              Les abonnements câble traditionnels deviennent de plus en plus chers chaque année, tandis que le choix de chaînes reste limité. Les foyers français sont contraints de cumuler plusieurs services juste pour obtenir la Ligue 1, la Ligue des Champions, la NBA et les films, souvent en payant 100 € ou plus par mois pour une fraction du contenu.
            </p>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium">
              Chez nous, tout est réuni dans une seule plateforme intuitive. Sport en direct, chaînes françaises, chaînes internationales et dernières sorties cinéma en 4K Ultra HD. Nous investissons continuellement dans des capacités serveur avancées pour faire de la mise en mémoire tampon une chose du passé, même pendant la finale de la Ligue des Champions.
            </p>
          </section>

          {/* Grille de fonctionnalités */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#FFCD00] rounded-full inline-block" />
              Pourquoi notre abonnement IPTV est le meilleur choix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Disponibilité garantie à 99,9 %',
                  desc: 'Nos clusters serveur redondants garantissent que vos émissions préférées sont toujours diffusées sans interruption.',
                },
                {
                  icon: Zap,
                  title: 'Technologie anti-freeze',
                  desc: 'Des répartiteurs de charge avancés évitent la mise en mémoire tampon pendant les heures de pointe et les grands événements sportifs.',
                },
                {
                  icon: Server,
                  title: 'Serveurs haute vitesse en France et en Europe',
                  desc: 'Directement connectés aux principaux échanges Internet français et européens pour une latence minimale et un zapping instantané.',
                },
                {
                  icon: Headphones,
                  title: 'Assistance client WhatsApp 24/7',
                  desc: 'Une aide experte pour l’installation, le choix des applications et la configuration des chaînes, généralement en quelques minutes.',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-6 bg-[#FFFFFF] rounded-3xl border-4 border-[#FFCD00] shadow-lg hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,205,0,0.25)] transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-[#0055A4] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-black text-[#0A1B33] text-base uppercase tracking-wider">
                        {item.title}
                      </h3>
                      <p className="text-[#0055A4] text-xs font-bold mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Infrastructure */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#FFCD00] rounded-full inline-block" />
              Notre infrastructure serveur technique
            </h2>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium mb-6">
              Nous gérons nos propres serveurs de streaming avec des connexions fibre dédiées à 10 Gbps. Nos serveurs acheminent automatiquement le signal vidéo via le nœud le plus proche, pour que vous profitiez toujours d’une qualité de streaming fluide en 50 et 60 FPS, que vous soyez à Paris, Lyon, Marseille, Toulouse ou Bordeaux.
            </p>
            <div className="bg-[#122A4D] border border-[#1E3A5F] rounded-3xl p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-[#FFFFFF]/5 rounded-2xl hover:border hover:border-[#FFCD00] transition-all">
                  <Activity className="w-8 h-8 text-[#FFCD00] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">Faible latence</div>
                  <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                    Délai minimal pendant le sport en direct
                  </p>
                </div>
                <div className="p-4 bg-[#FFFFFF]/5 rounded-2xl hover:border hover:border-[#FFCD00] transition-all">
                  <Film className="w-8 h-8 text-[#FFCD00] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">H.265 / HEVC</div>
                  <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                    Consommation de données optimale en 4K
                  </p>
                </div>
                <div className="p-4 bg-[#FFFFFF]/5 rounded-2xl hover:border hover:border-[#FFCD00] transition-all">
                  <Tv className="w-8 h-8 text-[#FFCD00] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">Universel</div>
                  <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                    Fonctionne sur tous les systèmes Smart TV
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Catalogue de contenus */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#FFCD00] rounded-full inline-block" />
              La programmation la plus complète
            </h2>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium mb-6">
              Avec plus de <strong className="text-[#FFFFFF]">36 000 chaînes de télévision en direct</strong> et une vidéothèque de{' '}
              <strong className="text-[#FFFFFF]">120 000+ films et séries</strong>, nous offrons l’un des packages de chaînes les plus larges en France :
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Toutes les chaînes françaises (TF1, France 2, France 3, M6, Canal+, Arte, BFM TV, CNews) en 4K et Full HD',
                'Chaînes sportives en direct : beIN Sports, RMC Sport, Canal+ Sport, Eurosport, L’Équipe TV et PPV UFC',
                'Ligue 1, Ligue des Champions, Premier League, NBA, Formule 1, Top 14, Roland-Garros, Tour de France et sport international',
                'Programmation internationale complète du Royaume-Uni, du Canada, de Belgique, de Suisse, d’Europe et du Maghreb',
                'Catalogue VOD mis à jour quotidiennement avec sous-titres français pour les sorties cinéma et les meilleures séries',
                'Guide électronique des programmes (EPG) et fonction replay 7 jours',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <Star className="w-5 h-5 text-[#FFCD00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Essai gratuit */}
          <section>
            <div className="bg-[#FFFFFF] border-4 border-green-600 rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-green-600 font-black text-lg md:text-xl uppercase tracking-tight mb-2">
                    Essai gratuit de 24 heures d’abord
                  </h3>
                  <p className="text-[#0A1B33] text-sm md:text-base font-bold leading-relaxed">
                    Écrivez-nous sur WhatsApp et nous vous configurons un essai gratuit de 24 heures. Testez l’image 4K, vérifiez la programmation sportive et assurez-vous que tout fonctionne parfaitement sur votre appareil et votre connexion Internet. Passez à une formule payante uniquement quand vous êtes satisfait. Aucun engagement, aucune pression.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA bas de page */}
        <div className="mt-16 text-center">
          <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A1B33] uppercase tracking-tight mb-3">
              Essayez-le vous-même, sans risque
            </h2>
            <p className="text-[#0055A4] font-bold text-base max-w-lg mx-auto mb-8">
              Rejoignez des milliers de foyers satisfaits en France. Installation guidée sur WhatsApp et la plupart des clients regardent leurs chaînes en moins de 10 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto px-4">
              <Link
                href="/tarifs"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 shadow-md border border-[#0055A4]"
              >
                Choisir ma formule
              </Link>
              <Link
                href="/installation"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#0A1B33] text-[#FFFFFF] font-black text-sm uppercase tracking-widest border-2 border-[#FFCD00] transition-transform hover:scale-105"
              >
                Guide d’installation
              </Link>
            </div>
          </div>
        </div>

        {/* Lien retour */}
        <div className="mt-16 pt-8 border-t border-[#1E3A5F] text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#FFCD00] hover:text-[#FFFFFF] transition-colors font-black text-xs uppercase tracking-widest"
          >
            ← Retour à l’accueil
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-[#FFFFFF]/40 text-xs font-bold">
            © {new Date().getFullYear()} Abonnement IPTV. Tous droits réservés. Service IPTV en France 🇫🇷
          </p>
        </div>
      </div>
    </div>
  );
}