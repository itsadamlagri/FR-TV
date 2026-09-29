import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  ShieldCheck,
  Mail,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Copyright,
} from 'lucide-react';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/dmca`;

// ---------------------------------------------------------------------------
// MÉTADONNÉES
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'Politique DMCA & droits d’auteur',
  `Consultez la politique officielle DMCA et droits d’auteur. Informations sur la protection du copyright et la procédure pour déposer une demande de retrait.`,
  '/dmca'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const DMCASchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Politique DMCA | Abonnement IPTV`,
        description: `Notre abonnement IPTV respecte les droits de propriété intellectuelle de tiers et se conforme strictement au Digital Millennium Copyright Act (DMCA).`,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Politique DMCA', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="dmca-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// PAGE PRINCIPALE
// ---------------------------------------------------------------------------
export default function DMCAPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A1B33] text-[#FFFFFF]">

      <DMCASchema />

      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-[#1E3A5F]">
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
            <ShieldCheck className="w-4 h-4 text-[#FFCD00]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
              Copyright & propriété intellectuelle 🇫🇷
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Politique <span className="text-[#FFCD00]">DMCA</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            Notre abonnement IPTV respecte les droits de propriété intellectuelle de tiers et se conforme strictement au Digital Millennium Copyright Act (DMCA).
          </p>
        </div>
      </section>

      {/* BANNIÈRE PROMO */}
      <section className="w-full bg-gradient-to-r from-[#0055A4] via-[#0A1B33] to-[#0055A4] py-10 px-4 sm:px-6 border-y-4 border-[#FFCD00]/30 shadow-[0_0_50px_rgba(0,85,164,0.4)] relative z-20 overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="bg-[#FFCD00] text-[#0A1B33] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md">
            AVIS OFFICIEL
          </div>
          <h2 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            UN STREAMING PREMIUM AVEC INTÉGRITÉ
          </h2>
          <p className="text-[#FFFFFF]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            Des questions sur nos services, nos formules ou notre assistance ? Notre équipe se fera un plaisir de vous aider.
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

        {/* Avis important */}
        <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-[#0055A4]" />
              </div>
            </div>
            <div>
              <p className="text-[#0055A4] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#0055A4] font-black uppercase tracking-wide block mb-1">
                  Avis important :
                </span>
                Nous n’hébergeons, ne téléchargeons et ne gérons aucun fichier multimédia sur nos propres serveurs. Notre logiciel se contente d’indexer et d’organiser des flux et playlists publiquement disponibles sur Internet.
              </p>
            </div>
          </div>
        </div>

        {/* Corps juridique */}
        <div className="space-y-10">

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              1. Conformité au droit d’auteur
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Notre abonnement IPTV (« nous », « notre ») s’engage à respecter les droits des titulaires de droits d’auteur dans le monde entier et à se conformer strictement aux dispositions du Digital Millennium Copyright Act (DMCA) ainsi qu’aux lois applicables en matière de propriété intellectuelle. Nous attendons de tous nos utilisateurs et partenaires qu’ils adhèrent aux mêmes standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              2. Ce que nous n’hébergeons pas
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Il est essentiel de souligner que <strong className="text-[#FFFFFF]">notre service</strong> ne diffuse, ne stocke et n’héberge aucun média en streaming, fichier vidéo ou émission TV sur son propre matériel.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Notre service fonctionne strictement comme une interface technique et un annuaire qui indexe des liens de flux publiquement disponibles. Nous n’avons aucune propriété, aucun contrôle et aucune influence éditoriale sur le contenu des flux publiés par des fournisseurs externes sur Internet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              3. Notification d’infraction (demande de retrait)
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Si vous êtes le propriétaire légitime d’une œuvre protégée par le droit d’auteur, ou si vous êtes autorisé à agir au nom d’un propriétaire, et que vous estimez qu’un contenu de notre annuaire porte atteinte à vos droits, vous pouvez déposer une demande de retrait officielle (Notification DMCA). Dès réception d’une notification valide, nous désactiverons les références de flux concernées dans les plus brefs délais, généralement sous 48 heures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              4. Procédure pour déposer une demande
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-6">
              Pour déposer une demande DMCA officielle, veuillez nous contacter via notre adresse e-mail officielle dédiée au copyright :
            </p>

            {/* Carte e-mail */}
            <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#0055A4] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#0055A4] tracking-widest mb-1">
                Service Copyright
              </p>
              <a
                href={`mailto:dmca@${CONSTANTS.DOMAIN}`}
                className="text-[#0A1B33] font-black text-xl md:text-2xl hover:text-[#0055A4] transition-colors break-all"
              >
                dmca@{CONSTANTS.DOMAIN}
              </a>
            </div>

            <p className="text-[#FFFFFF]/80 text-base font-bold mb-4">
              Votre notification doit inclure les informations suivantes :
            </p>

            <ul className="space-y-3 mb-6">
              {[
                'Une signature physique ou électronique du titulaire du droit d’auteur ou de son représentant autorisé.',
                'Une description claire de l’œuvre protégée dont l’atteinte est alléguée.',
                'Les liens exacts ou références de flux à supprimer.',
                'Vos coordonnées complètes : nom légal, adresse, numéro de téléphone et adresse e-mail.',
                'Une déclaration de bonne foi selon laquelle l’utilisation contestée n’est pas autorisée par le titulaire du droit, son agent ou la loi.',
                'Une déclaration attestant que les informations fournies sont exactes, faite sous peine de parjure.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5 text-[#FFCD00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              5. Contrevenants récidivistes
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Nous appliquons une politique stricte selon laquelle les comptes et accès des revendeurs ou utilisateurs qui portent atteinte de manière répétée aux droits de propriété intellectuelle seront immédiatement et définitivement résiliés, sans préavis ni remboursement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              6. Contre-notification
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Si vous estimez que votre contenu a été retiré par erreur ou par mauvaise identification, vous pouvez soumettre une contre-notification à notre service copyright à <a href={`mailto:dmca@${CONSTANTS.DOMAIN}`} className="text-[#FFCD00] font-black hover:underline">dmca@{CONSTANTS.DOMAIN}</a>. Votre contre-notification doit être conforme aux exigences de la loi applicable et inclure votre consentement à la juridiction du tribunal compétent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              7. Contact et avis juridiques
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Pour toute question relative au copyright et au DMCA, veuillez nous contacter à <a href={`mailto:dmca@${CONSTANTS.DOMAIN}`} className="text-[#FFCD00] font-black hover:underline">dmca@{CONSTANTS.DOMAIN}</a>. Pour une assistance client générale, utilisez notre <Link href="/assistance" className="text-[#FFCD00] font-black hover:underline">équipe d’assistance WhatsApp</Link> disponible 24/7.
            </p>
          </section>

          <section>
            <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center flex-shrink-0">
                  <Copyright className="w-6 h-6 text-[#0055A4]" />
                </div>
                <div>
                  <p className="text-[#0055A4] font-black uppercase tracking-wider text-sm mb-1">
                    Dernière mise à jour
                  </p>
                  <p className="text-[#0A1B33] font-bold text-sm md:text-base leading-relaxed">
                    Cette politique DMCA a été mise à jour le 1ᵉʳ janvier {new Date().getFullYear()}. Nous nous réservons le droit de modifier cette politique à tout moment. L’utilisation continue de nos services après modification vaut acceptation de la politique mise à jour.
                  </p>
                </div>
              </div>
            </div>
          </section>
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