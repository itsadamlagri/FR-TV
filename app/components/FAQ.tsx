'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const faqs = [
  {
    q: 'Qu’est-ce que l’IPTV et comment ça fonctionne ?',
    a: 'L’IPTV signifie « Internet Protocol Television ». Au lieu d’un décodeur câble ou satellite, vos chaînes et vos films passent par votre connexion Internet. Avec un abonnement IPTV, vous regardez plus de 36 000 chaînes en direct et plus de 120 000 films et séries en 4K sur votre Smart TV, Firestick, téléphone ou tablette. L’installation prend quelques minutes et vos identifiants arrivent dans votre boîte mail juste après le paiement.',
  },
  {
    q: 'Pourquoi choisir un abonnement IPTV comme meilleur abonnement IPTV en France ?',
    a: 'Un abonnement IPTV est pensé pour les téléspectateurs français. Vous accédez à plus de 36 000 chaînes en direct couvrant la Ligue 1, la Ligue des Champions, la Premier League, la NBA, la Formule 1 et les grands événements PPV, ainsi qu’à plus de 120 000 films et séries à la demande. Nos serveurs anti-freeze disposent d’une capacité dédiée optimisée pour la France, pour que votre flux reste fluide même pendant les grands matchs ou une soirée PPV chargée.',
  },
  {
    q: 'Quels appareils sont compatibles avec votre service IPTV ?',
    a: 'Presque tous ceux que vous possédez déjà — Smart TV Samsung et LG, Android TV, Google TV, Amazon Firestick, Apple TV, iPhone, iPad, PC Windows, Mac, ainsi que les box MAG et Formuler. Un doute sur votre appareil ? Contactez notre équipe d’assistance et nous vous confirmerons la compatibilité avant votre abonnement.',
  },
  {
    q: 'Comment se déroulent l’installation et l’activation ?',
    a: 'Une fois que vous avez choisi votre formule d’abonnement IPTV et le nombre d’écrans souhaités, votre playlist M3U et vos identifiants Xtream Codes arrivent par e-mail en moins de cinq minutes. Installez un lecteur comme IPTV Extreme Pro, TiviMate ou Smart IPTV, collez vos identifiants et regardez. L’activation est instantanée et l’installation prend moins de cinq minutes.',
  },
  {
    q: 'Puis-je demander un essai gratuit avant de payer ?',
    a: 'Oui, et nous vous le recommandons. Demandez un essai gratuit et nous vous configurons tout pour que vous puissiez tester la qualité d’image 4K, vérifier la liste des chaînes pour un match de Ligue 1 ou de Ligue des Champions, et vous assurer que tout fonctionne parfaitement sur votre appareil et votre connexion Internet. Sans engagement et sans pression.',
  },
  {
    q: 'Comment installer le lecteur IPTV sur ma Smart TV ou mon Firestick ?',
    a: 'Pour les Smart TV et le Firestick, téléchargez un lecteur compatible comme IPTV Extreme Pro, TiviMate, Smart IPTV ou IPTV Smarters depuis le store de votre appareil, puis saisissez les identifiants que nous vous envoyons par e-mail. Si une étape n’est pas claire, notre équipe d’assistance 24/7 vous accompagne pas à pas jusqu’à ce que vous regardiez vos chaînes.',
  },
  {
    q: 'Quels moyens de paiement acceptez-vous et quelle devise utilisez-vous ?',
    a: 'Tous les tarifs sont affichés en euros (€) sans engagement — résiliable à tout moment. Nous acceptons la carte bancaire, PayPal et les cryptomonnaies via un paiement chiffré sécurisé. Choisissez une formule d’abonnement IPTV de 1, 3, 6 ou 12 mois et sélectionnez 1, 2 ou 3 écrans pour votre foyer.',
  },
  {
    q: 'Proposez-vous une assistance pendant mon abonnement IPTV ?',
    a: 'Oui, pendant toute la durée de votre abonnement IPTV. Contactez notre équipe à tout moment par e-mail et chat en direct pour toute question sur l’installation, la configuration ou tout autre besoin. Cela inclut des conseils pour tirer le meilleur de votre application lecteur et des solutions rapides en cas de mise en mémoire tampon.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative overflow-hidden"
      aria-label="Questions fréquentes sur l’abonnement IPTV"
    >
      {/* Halos tricolores ambiants */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0055A4]/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FFCD00]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#EF4135]/10 blur-[100px] rounded-full pointer-events-none" />

      <FadeIn className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#122A4D] border border-[#FFCD00]/60 px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-[#0055A4]/20">
          <span className="flex gap-0.5">
            <span className="w-2 h-2 rounded-full bg-[#0055A4]" />
            <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
            <span className="w-2 h-2 rounded-full bg-[#EF4135]" />
          </span>
          <Sparkles className="w-4 h-4 text-[#FFCD00]" />
          <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
            Centre d’aide IPTV 🇫🇷
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tight leading-none">
          QUESTIONS <span className="text-[#FFCD00]">FRÉQUEMMENT POSÉES</span>
        </h2>
        <p className="text-[#FFFFFF]/80 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Tout ce que vous devez savoir sur{' '}
          <strong className="text-[#FFFFFF] font-bold">l’abonnement IPTV</strong>{' '}
          — l’installation instantanée par e-mail, l’essai gratuit et la liste complète des chaînes.
        </p>
      </FadeIn>

      <FadeInStagger className="space-y-4 relative z-10">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <FadeInItem key={i}>
              <div
                className={`relative rounded-2xl transition-all duration-300 overflow-hidden border-2 ${
                  isOpen
                    ? 'bg-[#FFFFFF] border-[#FFCD00] shadow-2xl shadow-[#FFCD00]/30'
                    : 'bg-[#FFFFFF] border-[#D6DCE3] hover:border-[#0055A4]/60 shadow-lg shadow-[#05101F]/60'
                }`}
              >
                {/* Barre d’accent tricolore à gauche */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 flex flex-col">
                  <div className="flex-1 bg-[#0055A4]" />
                  <div className="flex-1 bg-[#FFFFFF]" />
                  <div className="flex-1 bg-[#EF4135]" />
                </div>

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left p-5 sm:p-6 pl-7 sm:pl-8 flex justify-between items-center gap-4 transition-all duration-300 focus:outline-none rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <div className="flex items-center gap-4 pr-2">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? 'bg-[#FFCD00] text-[#0A1B33]'
                          : 'bg-[#0A1B33] text-[#FFFFFF]'
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 text-[#0A1B33]">
                      {faq.q}
                    </h3>
                  </div>

                  <div
                    className={`p-2 rounded-full shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#FFCD00] text-[#0A1B33] rotate-180'
                        : 'bg-[#0A1B33]/10 text-[#0A1B33]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Zone de réponse */}
                <div
                  id={`faq-answer-${i}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100 pb-6'
                      : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                  role="region"
                >
                  <div className="overflow-hidden">
                    <p className="text-[#0055A4] font-medium leading-relaxed pl-16 sm:pl-20 pr-6 sm:pr-8 text-sm sm:text-base border-t border-[#D6DCE3] pt-4 mt-1">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInItem>
          );
        })}
      </FadeInStagger>
    </section>
  );
}