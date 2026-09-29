import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Eye,
  Mail,
  CheckCircle,
  Server,
  FileText,
} from 'lucide-react';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/confidentialite`;

// ---------------------------------------------------------------------------
// MÉTADONNÉES
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'Politique de confidentialité & protection des données',
  `Découvrez comment notre abonnement IPTV protège votre vie privée et vos données personnelles conformément au RGPD, à la loi Informatique et Libertés et au CCPA. 100 % confidentiel.`,
  '/confidentialite'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const PrivacySchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Politique de confidentialité | Abonnement IPTV`,
        description: `Politique de confidentialité de notre abonnement IPTV. Comment nous collectons, protégeons et gérons vos données personnelles conformément au RGPD et au CCPA.`,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Politique de confidentialité', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="privacy-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// PAGE PRINCIPALE
// ---------------------------------------------------------------------------
export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A1B33] text-[#FFFFFF]">

      <PrivacySchema />

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
              Confidentialité & données garanties 🇫🇷
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Politique de <span className="text-[#FFCD00]">confidentialité</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            Nous accordons la plus haute importance à votre vie privée. Découvrez comment nous collectons, protégeons et gérons vos données personnelles en toute confidentialité.
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

        {/* Carte d’engagement */}
        <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#0055A4]" />
              </div>
            </div>
            <div>
              <p className="text-[#0055A4] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#0055A4] font-black uppercase tracking-wide block mb-1">
                  Notre engagement confidentialité :
                </span>
                Nous traitons vos données avec une stricte confidentialité, en pleine conformité avec le RGPD européen, la loi française Informatique et Libertés, ainsi qu’avec le California Consumer Privacy Act (CCPA). Nous ne conservons jamais l’historique de visionnage et nous ne vendons jamais vos données à des tiers, en aucune circonstance.
              </p>
            </div>
          </div>
        </div>

        {/* Corps juridique */}
        <div className="space-y-10">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              1. Données collectées
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Lorsque vous utilisez nos services d’abonnement IPTV, nous ne traitons que le strict minimum de données nécessaires à la fourniture de votre abonnement :
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Adresse e-mail et/ou numéro WhatsApp (utilisés pour envoyer vos identifiants et le statut de votre abonnement).',
                'Vérification du paiement (de manière sécurisée et chiffrée via des prestataires de paiement agréés ; nous ne stockons jamais les coordonnées bancaires).',
                'Adresse IP et type d’appareil (à titre temporaire, pour la connexion au serveur, la répartition de charge et la prévention de la fraude).',
                'Durée d’abonnement choisie et nombre de flux ou écrans actifs.',
                'Historique des communications avec l’assistance client pour une aide rapide.',
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
                    <Eye className="w-5 h-5 text-[#0055A4]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0055A4] text-sm font-bold leading-relaxed">
                    <span className="text-[#0055A4] font-black uppercase tracking-wide block mb-0.5">
                      Ce que nous ne collectons jamais :
                    </span>
                    Nous n’enregistrons ni votre comportement de visionnage, ni vos sélections de chaînes, ni vos recherches, ni vos journaux de flux. Votre activité de streaming reste et demeurera 100 % privée.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              2. Utilisation de vos données
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Nous utilisons les informations collectées exclusivement aux fins suivantes :
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Activer et configurer votre abonnement et l’installation d’IPTV Smarters Pro.',
                'Traiter les transactions et la facturation en euros (€) de manière sécurisée.',
                'Fournir une assistance technique et un accompagnement à l’installation via WhatsApp et e-mail.',
                'Vous informer des maintenances serveur importantes ou des mises à jour de chaînes.',
                'Maintenir la stabilité des serveurs et prévenir tout usage abusif non autorisé.',
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

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              3. Sécurité des données
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles avancées pour protéger vos données :
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Chiffrement de bout en bout SSL/TLS 256 bits pour toutes les connexions web et de compte.',
                'Serveurs isolés et pare-feu pour prévenir les fuites de données et les attaques DDoS.',
                'Contrôles d’accès stricts : seuls les techniciens autorisés ont accès aux données de support.',
                'Aucun stockage local des coordonnées bancaires ou des numéros de carte de crédit.',
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
                    <Server className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0055A4] text-sm font-bold leading-relaxed">
                    <span className="text-green-600 font-black uppercase tracking-wide block mb-0.5">
                      Aucune vente de données :
                    </span>
                    Nous ne vendons, ne louons et ne partageons jamais vos données personnelles avec des agences marketing, des réseaux publicitaires ou des courtiers en données, en aucune circonstance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              4. Cookies et stockage fonctionnel
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Nous utilisons uniquement des cookies fonctionnels et analytiques anonymisés pour optimiser la vitesse de chargement du site et mémoriser votre préférence de langue. Vous pouvez désactiver les cookies à tout moment dans les paramètres de votre navigateur.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              5. Vos droits (RGPD, loi Informatique et Libertés & CCPA)
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Selon votre juridiction (France, Union européenne, Californie ou autres États américains), vous disposez des droits suivants en matière de vie privée :
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Droit d’accès : vous pouvez demander une copie des données que nous détenons sur vous.',
                'Droit de rectification : le droit de corriger des coordonnées inexactes.',
                'Droit à l’effacement (droit à l’oubli) : le droit de demander la suppression définitive de toutes les données de votre compte.',
                'Droit de limiter le traitement et droit à la portabilité des données.',
                'Droit de refuser toute vente de données. Nous ne vendons jamais de données, ce droit est donc naturellement respecté.',
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

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              6. Prestataires tiers
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Nous travaillons avec un petit nombre de prestataires tiers de confiance, notamment des processeurs de paiement tels que Stripe, PayPal et des passerelles de paiement crypto, ainsi que des outils de communication tels que WhatsApp Business. Ces prestataires respectent strictement les normes de protection des données, ne traitent les données que dans la mesure nécessaire à la fourniture de leurs services et sont interdits de les utiliser à toute autre fin.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              7. Confidentialité des mineurs
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Nos services ne s’adressent pas aux enfants de moins de 15 ans, ni à l’âge applicable de consentement numérique dans votre juridiction. Nous ne collectons pas sciemment de données personnelles auprès d’enfants. Si vous pensez qu’un enfant nous a fourni des données personnelles, veuillez nous contacter afin que nous les supprimions rapidement.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              8. Conservation des données
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Nous conservons les informations de votre compte et vos coordonnées uniquement aussi longtemps que votre abonnement reste actif, plus une période raisonnable par la suite pour des raisons légales, fiscales et comptables. Après cette période, toutes les données personnelles sont supprimées ou anonymisées de manière sécurisée.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              9. Contact pour la confidentialité
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Vous avez des questions sur notre politique de confidentialité ou souhaitez déposer une demande de suppression de données ? Contactez directement notre délégué à la protection des données :
            </p>
            <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#0055A4] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#0055A4] tracking-widest mb-1">
                Service Confidentialité & Protection des données
              </p>
              <a
                href={`mailto:privacy@${CONSTANTS.DOMAIN}`}
                className="text-[#0A1B33] font-black text-xl md:text-2xl hover:text-[#0055A4] transition-colors break-all"
              >
                privacy@{CONSTANTS.DOMAIN}
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

          {/* Section 10 — Mises à jour */}
          <section>
            <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#0055A4]/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#0055A4]" />
                </div>
                <div>
                  <p className="text-[#0055A4] font-black uppercase tracking-wider text-sm mb-1">
                    Mises à jour de la politique
                  </p>
                  <p className="text-[#0A1B33] font-bold text-sm md:text-base leading-relaxed">
                    Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment. Les modifications importantes seront annoncées sur notre page d’accueil ou via WhatsApp aux abonnés actifs. L’utilisation continue de nos services après toute modification vaut acceptation de la politique mise à jour.
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