import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  FileText,
  AlertCircle,
  CheckCircle,
  CreditCard,
  UserCheck,
  Ban,
  RefreshCw,
  Mail,
  Scale,
  Gavel,
} from 'lucide-react';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/conditions`;

// ---------------------------------------------------------------------------
// MÉTADONNÉES
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'Conditions générales d’utilisation',
  `Consultez les conditions générales d’utilisation de notre abonnement IPTV. Accords clairs sur les abonnements, notre garantie qualité, l’usage acceptable et la juridiction applicable.`,
  '/conditions'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const TermsSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Conditions générales | Abonnement IPTV`,
        description: `Conditions générales d’utilisation de notre abonnement IPTV. Accords clairs sur les abonnements, la garantie qualité, l’usage acceptable et la juridiction applicable.`,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Conditions générales', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="terms-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// PAGE PRINCIPALE
// ---------------------------------------------------------------------------
export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A1B33] text-[#FFFFFF]">

      <TermsSchema />

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
            <Scale className="w-4 h-4 text-[#FFCD00]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
              Accord légal 🇫🇷
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Conditions <span className="text-[#FFCD00]">générales</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            Veuillez lire attentivement ces conditions avant d’utiliser les services et les abonnements de streaming de notre abonnement IPTV.
          </p>

          <p className="text-xs text-[#FFFFFF]/40 mt-4 font-bold uppercase tracking-wider">
            Dernière mise à jour :{' '}
            {new Date().toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">

        {/* Boîte d’acceptation */}
        <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#0055A4]" />
              </div>
            </div>
            <div>
              <p className="text-[#0055A4] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#0055A4] font-black uppercase tracking-wide block mb-1">
                  Acceptation des conditions :
                </span>
                En achetant un abonnement ou en utilisant le site et les services de notre abonnement IPTV, vous reconnaissez et acceptez d’être lié par les présentes conditions générales ainsi que par notre politique de confidentialité.
              </p>
            </div>
          </div>
        </div>

        {/* Sections juridiques */}
        <div className="space-y-10">

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              1. Description du service
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Nous fournissons des services de streaming IPTV numériques qui donnent aux abonnés accès à des chaînes de télévision en direct, des films à la demande (VOD) et des séries via Internet. Notre service est destiné exclusivement à un usage personnel et non commercial au sein du foyer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              2. Éligibilité et responsabilités
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              En utilisant nos services, vous déclarez et garantissez que :
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Vous avez au moins 18 ans et êtes juridiquement capable de conclure un accord contraignant.',
                'Vous fournissez des informations exactes et à jour lors de la création de votre compte.',
                'Vous gardez vos identifiants personnels et vos liens de playlist strictement confidentiels et ne les revendez pas.',
                'Vous n’utilisez pas notre service pour une rediffusion commerciale ou une projection publique.',
                'Vous disposez d’une connexion Internet adaptée (minimum 25 Mbps pour un streaming 4K fluide).',
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

            <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#0055A4]/10 flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-[#0055A4]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0055A4] text-sm font-bold leading-relaxed">
                    <span className="text-[#0055A4] font-black uppercase tracking-wide block mb-0.5">
                      Sécurité du compte :
                    </span>
                    Vous êtes responsable à tout moment de toute activité qui se produit sous votre compte et vos identifiants de connexion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              3. Abonnements, tarification et paiement
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Nos options d’abonnement et tarifs actuels sont indiqués sur la page des tarifs. Lors de l’achat, vous acceptez ce qui suit :
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Les paiements sont effectués à l’avance via des moyens de paiement sécurisés (carte bancaire, PayPal, crypto et Apple ou Google Pay).',
                'Les abonnements ne sont pas renouvelés automatiquement. Vous décidez quand renouveler.',
                'Votre compte est activé après confirmation du paiement et l’installation guidée via WhatsApp.',
                'Tous les tarifs sont en euros (€) et incluent toutes les taxes applicables, sauf mention contraire explicite.',
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

            <div className="bg-[#FFFFFF] border-4 border-green-600 rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0055A4] text-sm font-bold leading-relaxed">
                    <span className="text-green-600 font-black uppercase tracking-wide block mb-0.5">
                      Paiement sécurisé :
                    </span>
                    Toutes les transactions sont traitées via des passerelles de paiement certifiées PCI DSS avec chiffrement SSL 256 bits.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              4. Politique d’usage acceptable (usage loyal)
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Il est strictement interdit d’utiliser le service pour :
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Revendre, rediffuser ou cloner vos lignes de streaming attribuées.',
                'Diffuser sur plus d’appareils en même temps que votre formule choisie ne le permet.',
                'Tenter de faire de l’ingénierie inverse, scraper les serveurs ou surcharger le réseau (DDoS).',
                'Télécharger, enregistrer de façon permanente ou redistribuer une diffusion numérique.',
                'Tout usage qui violerait la loi applicable en France, dans l’Union européenne ou à l’international.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <Ban className="w-5 h-5 text-[#FFCD00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#0055A4]/10 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-[#0055A4]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0055A4] text-sm font-bold leading-relaxed">
                    <span className="text-[#0055A4] font-black uppercase tracking-wide block mb-0.5">
                      Conséquences d’une violation :
                    </span>
                    En cas de violation de cette politique d’usage acceptable, nous nous réservons le droit de suspendre immédiatement le compte sans remboursement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              5. Garantie qualité et remboursements
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Nous offrons une garantie qualité complète de 7 jours. Si le service ne fonctionne pas comme promis, ou si vous rencontrez des problèmes techniques que notre équipe ne peut pas résoudre, vous pouvez demander un remboursement intégral dans les 7 jours suivant l’achat en contactant notre équipe d’assistance.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Cette garantie couvre uniquement les véritables problèmes de service. Elle ne couvre pas les changements d’avis, les préférences personnelles, les problèmes d’Internet locaux ou les incompatibilités d’appareil de votre côté. Tous les détails sont disponibles dans notre{' '}
              <Link href="/remboursement" className="text-[#FFCD00] font-black hover:underline">
                politique de remboursement
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              6. Disponibilité et changements de chaînes
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Nous visons une disponibilité constante de 99,9 %. Cependant, des maintenances temporaires ou des changements de chaînes externes peuvent survenir. Nous nous réservons le droit de :
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Mettre à jour ou optimiser les grilles de chaînes et les catalogues VOD pour une meilleure qualité d’image.',
                'Effectuer de brèves maintenances serveur planifiées en dehors des heures de pointe.',
                'Ajuster les tarifs pour les futures périodes d’abonnement.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <RefreshCw className="w-5 h-5 text-[#FFCD00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              7. Propriété intellectuelle et responsabilité
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Toutes les marques, logos, textes et codes logiciels présents sur ce site sont la propriété intellectuelle de notre abonnement IPTV. Dans la mesure maximale permise par la loi applicable, nous ne pouvons être tenus responsables des dommages indirects, pertes de données ou coupures causées par des fournisseurs d’accès Internet tiers ou des équipements utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              8. Droit applicable et juridiction
            </h2>
            <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#0055A4]/10 flex items-center justify-center">
                    <Gavel className="w-5 h-5 text-[#0055A4]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0055A4] text-sm font-bold leading-relaxed">
                    <span className="text-[#0055A4] font-black uppercase tracking-wide block mb-0.5">
                      Droit applicable :
                    </span>
                    Les présentes conditions générales sont régies par le droit français et interprétées conformément à celui-ci. Tout litige sera résolu exclusivement devant les tribunaux français compétents.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              9. Modifications des présentes conditions
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Nous nous réservons le droit de modifier ces conditions générales à tout moment. Les modifications importantes seront annoncées sur notre page d’accueil ou via WhatsApp aux abonnés actifs. L’utilisation continue de nos services après toute mise à jour vaut acceptation des conditions révisées.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              10. Contact et assistance client
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Pour toute question relative à ces conditions générales ou pour obtenir de l’aide sur votre abonnement, contactez notre service juridique et support :
            </p>
            <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#0055A4] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#0055A4] tracking-widest mb-1">
                Service juridique & assistance client
              </p>
              <a
                href={`mailto:legal@${CONSTANTS.DOMAIN}`}
                className="text-[#0A1B33] font-black text-xl md:text-2xl hover:text-[#0055A4] transition-colors break-all"
              >
                legal@{CONSTANTS.DOMAIN}
              </a>
            </div>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Pour une assistance client générale, utilisez plutôt notre{' '}
              <Link href="/assistance" className="text-[#FFCD00] font-black hover:underline">
                équipe d’assistance WhatsApp
              </Link>{' '}
              disponible 24/7.
            </p>
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