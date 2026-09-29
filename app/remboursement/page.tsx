import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  RefreshCw,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Mail,
  MessageSquare,
  Wrench,
  Wifi,
  FileCheck,
} from 'lucide-react';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/remboursement`;

// ---------------------------------------------------------------------------
// MÉTADONNÉES
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'Politique de remboursement & garantie',
  `Consultez les conditions officielles de notre garantie qualité de 7 jours. Lignes directrices techniques transparentes et procédures d’assistance pour les clients en France.`,
  '/remboursement'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const RefundSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Politique de remboursement & garantie | Abonnement IPTV`,
        description: `Politique de remboursement et garantie qualité de 7 jours de notre abonnement IPTV. Lignes directrices techniques transparentes et procédures d’assistance.`,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Politique de remboursement', item: PAGE_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `Comment fonctionne la garantie qualité de 7 jours ?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Si vous rencontrez un problème technique vérifié dans notre infrastructure serveur dans les 7 jours calendaires suivant l’achat, et que notre équipe d’assistance 24/7 ne parvient pas à le résoudre en 24 heures, nous remboursons l’intégralité de votre achat. La garantie couvre les véritables problèmes de service, pas les changements d’avis.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Quelles situations ne sont PAS couvertes par la politique de remboursement ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Les remboursements ne sont pas disponibles en cas de changement d’avis, de préférence personnelle, de problèmes Wi-Fi ou Internet locaux inférieurs à 25 Mbps, d’incompatibilité d’appareil avec un micrologiciel obsolète, de changements de chaînes individuelles ou de violations de la politique d’usage loyal comme le streaming sur plus d’appareils que ceux achetés.',
            },
          },
          {
            '@type': 'Question',
            name: 'Combien de temps prend le traitement d’un remboursement ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Après confirmation de l’autorisation technique, les remboursements sont traités sous 1 à 3 jours ouvrés sur le moyen de paiement d’origine : carte bancaire, PayPal, crypto ou Apple/Google Pay.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="refund-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// PAGE PRINCIPALE
// ---------------------------------------------------------------------------
export default function RefundPolicyPage() {
  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;

  return (
    <div className="flex flex-col min-h-screen bg-[#0A1B33] text-[#FFFFFF]">

      <RefundSchema />

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
              Serveurs vérifiés & garantis 🇫🇷
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Remboursement & <span className="text-[#FFCD00]">garantie</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            Nous offrons une stabilité inégalée. Nous proposons une garantie qualité transparente de 7 jours sur toutes les connexions de streaming actives. Si le service ne fonctionne pas comme promis, nous ferons le nécessaire.
          </p>

          <p className="text-xs text-[#FFFFFF]/40 mt-4 font-bold uppercase tracking-wider">
            Dernière révision :{' '}
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

        {/* Bannière de confiance */}
        <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#0055A4]/15 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-[#0055A4]" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#0A1B33] uppercase tracking-tight mb-1">
                Notre garantie qualité de 7 jours
              </h2>
              <p className="text-[#0055A4] font-bold text-sm md:text-base leading-relaxed">
                Nous ne diffusons que des flux 4K et Full HD de haute qualité. Cette garantie s’applique aux véritables problèmes de service, tels qu’un défaut technique vérifié que notre équipe d’assistance ne peut pas corriger dans le délai indiqué. Elle ne s’applique pas aux changements d’avis, aux préférences personnelles ou aux problèmes d’appareil de votre côté.
              </p>
            </div>
          </div>
        </div>

        {/* Sections de la politique */}
        <div className="space-y-10">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              1. Portée de la garantie technique
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Un remboursement est accordé uniquement si le service livré est structurellement et manifestement non fonctionnel en raison de causes relevant de notre infrastructure serveur. Les conditions suivantes s’appliquent de manière cumulative :
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Le signalement est effectué par écrit dans les 7 jours calendaires exacts suivant la date d’achat initiale.',
                'Il existe une panne persistante liée au serveur qui empêche le service de fonctionner comme annoncé.',
                'Notre support technique 24/7 a disposé d’au moins 24 heures pour résoudre le problème de connexion signalé ou configurer un routage alternatif.',
                'Vous avez effectué les étapes de diagnostic standard que nous demandons, telles qu’un redémarrage du routeur, un vidage du cache de l’application et une vérification DNS.',
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

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              2. Exceptions & situations non remboursables
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Étant donné que les codes d’accès numériques et les playlists sont définitivement créés sur nos répartiteurs de charge immédiatement après l’achat, <strong className="text-[#FFFFFF]">aucun remboursement</strong> ne peut être demandé dans les situations suivantes :
            </p>

            <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#0055A4]/10 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-[#0055A4]" />
                  </div>
                </div>
                <div>
                  <ul className="space-y-2.5 text-[#0055A4] text-xs sm:text-sm font-bold leading-relaxed">
                    <li>
                      • <strong>Changement d’avis :</strong> demandes fondées sur le goût, l’expérience de l’interface ou le simple fait de ne plus avoir besoin de l’abonnement.
                    </li>
                    <li>
                      • <strong>Limitations réseau locales :</strong> mise en mémoire tampon causée par une connexion Wi-Fi instable, une congestion du réseau local ou des vitesses Internet inférieures à 25 Mbps.
                    </li>
                    <li>
                      • <strong>Incompatibilité d’appareil :</strong> problèmes causés par un micrologiciel de Smart TV obsolète, des applications IPTV tierces non prises en charge ou une configuration locale incorrecte.
                    </li>
                    <li>
                      • <strong>Changements de chaînes :</strong> restructurations ou modifications temporaires de chaînes individuelles parmi les dizaines de milliers de chaînes disponibles.
                    </li>
                    <li>
                      • <strong>Violations d’usage loyal :</strong> comptes automatiquement bloqués pour diffusion sur plus d’écrans que ceux achetés.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              3. Procédure obligatoire de diagnostic & de réparation
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Avant qu’un remboursement ne puisse être autorisé, notre équipe d’assistance complète le protocole en trois étapes suivant :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-[#FFFFFF]/5 border border-white/10 text-center flex flex-col justify-between hover:border-[#FFCD00] transition-colors">
                <div>
                  <Wrench className="w-6 h-6 text-[#FFCD00] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">1. Vérification de la ligne</h4>
                  <p className="text-xs text-[#FFFFFF]/60 font-medium">
                    Nous vérifions votre jeton de compte sur nos ports serveur actifs.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#FFFFFF]/5 border border-white/10 text-center flex flex-col justify-between hover:border-[#FFCD00] transition-colors">
                <div>
                  <Wifi className="w-6 h-6 text-[#FFCD00] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">2. Réinitialisation serveur</h4>
                  <p className="text-xs text-[#FFFFFF]/60 font-medium">
                    Nous redirigeons votre profil de streaming vers un nœud alternatif en France ou en Europe.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#FFFFFF]/5 border border-white/10 text-center flex flex-col justify-between hover:border-[#FFCD00] transition-colors">
                <div>
                  <FileCheck className="w-6 h-6 text-[#FFCD00] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">3. Validation</h4>
                  <p className="text-xs text-[#FFFFFF]/60 font-medium">
                    Si la panne reste non résolue, l’approbation immédiate du remboursement suit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#FFCD00] rounded-full inline-block" />
              4. Procédure de demande & délai de traitement
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-6">
              Si votre signalement remplit les conditions de la garantie technique, envoyez votre demande via l’un des canaux ci-dessous, en incluant votre numéro de commande et une brève description du problème :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0055A4]/10 flex items-center justify-center mb-3">
                    <MessageSquare className="w-5 h-5 text-[#0055A4]" />
                  </div>
                  <h3 className="text-lg font-black text-[#0A1B33] uppercase tracking-tight mb-1">
                    Assistance WhatsApp (le plus rapide)
                  </h3>
                  <p className="text-[#0055A4] text-xs sm:text-sm font-bold leading-relaxed mb-4">
                    Envoyez les détails de votre commande et une capture d’écran du message d’erreur pour un diagnostic en temps réel.
                  </p>
                </div>
                <a
                  href={`${whatsappBaseUrl}?text=${encodeURIComponent(
                    `Bonjour ! Je rencontre un problème technique persistant avec mon compte IPTV et je souhaite lancer la procédure de diagnostic.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-xs uppercase tracking-wider hover:bg-[#004A8F] transition-all border border-[#0055A4]"
                >
                  Démarrer le diagnostic sur WhatsApp →
                </a>
              </div>

              <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-6 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0055A4]/10 flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5 text-[#0055A4]" />
                  </div>
                  <h3 className="text-lg font-black text-[#0A1B33] uppercase tracking-tight mb-1">
                    Par écrit par e-mail
                  </h3>
                  <p className="text-[#0055A4] text-xs sm:text-sm font-bold leading-relaxed mb-4">
                    Envoyez votre reçu de transaction et votre code d’erreur à support@{CONSTANTS.DOMAIN}.
                  </p>
                </div>
                <a
                  href={`mailto:support@${CONSTANTS.DOMAIN}?subject=Demande%20d%27assistance%20technique`}
                  className="w-full text-center py-3 rounded-full bg-[#0A1B33] text-[#FFFFFF] font-black text-xs uppercase tracking-wider border-2 border-[#FFCD00] hover:bg-[#122A4D] transition-all"
                >
                  Contacter le support par e-mail →
                </a>
              </div>
            </div>

            <p className="text-[#FFFFFF]/60 text-xs leading-relaxed font-medium">
              Après autorisation technique officielle, le montant est remboursé sous 1 à 3 jours ouvrés via le moyen de paiement d’origine : carte bancaire, PayPal, crypto ou Apple/Google Pay.
            </p>
          </section>
        </div>

        {/* CTA Assistance */}
        <div className="mt-16 text-center">
          <div className="bg-[#FFFFFF] border-4 border-[#FFCD00] rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-black text-[#0A1B33] uppercase tracking-tight mb-2">
              Besoin d’aide pour votre installation ?
            </h3>
            <p className="text-[#0055A4] font-bold text-sm md:text-base max-w-md mx-auto mb-6">
              Dans 99 % des cas, nos experts en streaming résolvent les problèmes de mise en mémoire tampon en 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="/assistance"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#004A8F] transition-all shadow-md border border-[#0055A4]"
              >
                Obtenir une aide immédiate
              </Link>
              <Link
                href="/installation"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#0A1B33] text-[#FFFFFF] font-black text-xs uppercase tracking-widest border-2 border-[#FFCD00] hover:bg-[#122A4D] transition-all"
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