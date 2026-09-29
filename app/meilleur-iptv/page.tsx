'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import {
  PlayCircle,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Medal,
  Trophy,
  MessageCircle,
  Tv,
  Film,
  Globe,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const PricingSection = dynamic(() => import('../components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#0055A4] border-t-transparent" />
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('../components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const MovieSlider = dynamic(() => import('../components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#122A4D] rounded-2xl animate-pulse" />
      ))}
    </div>
  ),
});

const GlobalServerMap = dynamic(() => import('../components/GlobalServerMap'), {
  loading: () => <div className="h-[400px] bg-[#122A4D] rounded-3xl animate-pulse max-w-7xl mx-auto" />,
});

// ---------------------------------------------------------------------------
// ACCORDÉON FAQ
// ---------------------------------------------------------------------------
function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full text-left bg-[#FFFFFF] border-4 ${
        isOpen ? 'border-[#FFCD00]' : 'border-[#D6DCE3]'
      } rounded-2xl p-6 hover:border-[#0055A4]/60 transition-all duration-300 group cursor-pointer`}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center gap-4">
        <h3
          className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${
            isOpen ? 'text-[#0055A4]' : 'text-[#0A1B33] group-hover:text-[#0055A4]'
          } flex items-center gap-3`}
        >
          <span
            className={`${
              isOpen ? 'text-[#0055A4]' : 'text-[#0A1B33]/30'
            } font-black text-2xl`}
          >
            Q.
          </span>
          {q}
        </h3>
        <ChevronDown
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen
              ? 'rotate-180 text-[#0055A4]'
              : 'text-[#0A1B33]/30 group-hover:text-[#0055A4]/50'
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[#0055A4] font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#0055A4] ml-2 py-2">
          {a}
        </p>
      </div>
    </button>
  );
}

export default function MeilleurIPTVPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0A1B33] text-[#FFFFFF] overflow-hidden">

      {/* ==========================================================
          HERO — Meilleur IPTV
      ========================================================== */}
      <section className="relative px-4 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#05101F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="Meilleur IPTV en France — plus de 36 000 chaînes en direct en qualité 4K Ultra HD"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center brightness-[0.22]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05101F]/90 via-[#0A1B33]/70 to-[#0A1B33]/95" />
        </div>

        <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto w-full">
          <div className="inline-flex items-center gap-2 bg-[#122A4D]/80 border border-[#0055A4]/60 px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <Medal className="w-4 h-4 text-[#FFCD00]" />
            <span className="text-[#FFFFFF] font-extrabold text-xs uppercase tracking-widest flex items-center gap-2">
              N°1 du service IPTV en France 🇫🇷
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#FFFFFF] mb-6 leading-none break-words">
            MEILLEUR <span className="text-[#FFCD00]">IPTV</span> <br />
            <span className="text-[#FFCD00]">EN FRANCE</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Découvrez le meilleur IPTV en France avec plus de 36 000 chaînes en direct et 120 000 films et séries en 4K Ultra HD. Notre meilleur abonnement IPTV inclut une installation guidée sur WhatsApp, un essai gratuit de 24 heures pour tester sur votre propre TV d’abord, et des tarifs en euros (€) sans engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link
              href="/tarifs"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-sm hover:bg-[#004A8F] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#0055A4]/40"
            >
              Choisir le meilleur IPTV
            </Link>
            <Link
              href="/essai-gratuit"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#EF4135] text-[#FFFFFF] font-black text-sm hover:bg-[#D63528] transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-[#EF4135]/40"
            >
              <PlayCircle className="w-5 h-5 text-[#FFFFFF] shrink-0" /> Essai gratuit
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#FFFFFF] font-bold uppercase tracking-widest bg-[#122A4D]/70 backdrop-blur-md px-8 py-4 rounded-3xl border border-[#1E3A5F] shadow-2xl">
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#FFCD00]" /> Qualité Ultra HD
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0055A4]" /> Réseau haute disponibilité
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FFCD00]" /> Technologie anti-freeze
            </span>
          </div>
        </FadeIn>
      </section>

      {/* PARTNER SLIDER */}
      <div className="min-h-[128px] bg-[#0A1B33]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* SALON / SECTION CINÉMA À LA MAISON */}
      <section className="w-full bg-[#0A1B33] py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-full bg-[#0055A4]/20 border border-[#0055A4]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFCD00]">
            Cinéma à la maison 🇫🇷
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#FFFFFF] leading-none">
            LE MEILLEUR IPTV DANS VOTRE <span className="text-[#FFCD00]">SALON</span>
          </h2>
        </div>

        <div className="w-full bg-[#122A4D]/40 py-10 flex justify-center items-center transition-all duration-300">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt="Meilleur IPTV en France diffusé sur une Smart TV dans un salon"
              width={1200}
              height={480}
              loading="lazy"
              className="h-full w-full object-contain"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-10">
          <p className="text-base md:text-lg leading-relaxed text-[#FFFFFF]/80 font-medium">
            Rien ne vaut regarder son équipe favorite ou une nouvelle sortie cinéma sur grand écran. Les serveurs du meilleur IPTV garantissent une image nette et un son parfaitement synchronisé, pour que vous puissiez vous détendre sans vous soucier de la mise en mémoire tampon ou des baisses de qualité.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link
              href="/tarifs"
              className="bg-[#0055A4] border border-[#0055A4] px-8 py-3 text-sm font-black uppercase tracking-widest text-[#FFFFFF] hover:bg-[#004A8F] transition-transform hover:scale-105 rounded-full shadow-xl shadow-[#0055A4]/30"
            >
              Activer le meilleur IPTV
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION MEILLEUR IPTV — INFO CARTES + PARAGRAPHES */}
      <section className="py-24 bg-[#EEEEEE] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0A1B33_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0055A4]/10 border border-[#0055A4]/25 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#0055A4]" />
              <span className="text-[#0055A4] font-black text-xs uppercase tracking-widest">
                Qu’est-ce que le meilleur IPTV
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1B33] uppercase tracking-tight leading-tight mb-6">
              TOUT CE QU’IL FAUT SAVOIR SUR LE <span className="text-[#0055A4]">MEILLEUR IPTV</span>
            </h2>
            <p className="text-[#0055A4] font-semibold text-base md:text-lg leading-relaxed">
              Le meilleur IPTV est un service de streaming premium qui diffuse des chaînes de télévision en direct, des films et des séries via votre connexion Internet. Voici ce que vous obtenez avec le meilleur IPTV en France.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Tv,
                title: '36 000+ chaînes en direct',
                desc: 'Toutes les grandes chaînes françaises plus des milliers de chaînes internationales du Royaume-Uni, du Canada, de Belgique, de Suisse, d’Europe et du Maghreb.',
              },
              {
                icon: Film,
                title: '120 000+ films et séries',
                desc: 'Coffrets complets et dernières sorties cinéma. De nouveaux titres arrivent chaque jour dans la bibliothèque à la demande du meilleur IPTV.',
              },
              {
                icon: Trophy,
                title: 'Sport en direct et PPV',
                desc: 'Ligue 1, Ligue des Champions, Premier League, NBA, Formule 1, UFC, Top 14, Roland-Garros, Tour de France et tous les PPV inclus sans frais supplémentaires.',
              },
              {
                icon: Globe,
                title: 'Installation guidée sur WhatsApp',
                desc: 'Notre équipe vous accompagne pas à pas sur WhatsApp jusqu’à ce que vous regardiez le meilleur IPTV sur votre propre appareil.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-[#FFFFFF] text-[#0A1B33] rounded-3xl p-6 md:p-7 border-2 border-[#D6DCE3] hover:border-[#FFCD00] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,205,0,0.25)] transition-all duration-500 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0055A4] flex items-center justify-center mb-5 shadow-lg">
                    <Icon className="w-7 h-7 text-[#FFCD00]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#0055A4] text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>

          <FadeIn className="text-center mt-14">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Link
                href="/tarifs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black text-sm uppercase tracking-widest shadow-lg hover:bg-[#004A8F] hover:scale-105 transition-all border border-[#0055A4]"
              >
                Voir les formules du meilleur IPTV
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/assistance"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0A1B33] text-[#FFFFFF] font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border-2 border-[#FFCD00]"
              >
                <MessageCircle className="w-5 h-5" />
                Poser une question
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION TARIFICATION */}
      <div className="min-h-[600px] bg-[#0A1B33]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      {/* SLIDER DE FILMS */}
      <section id="channels" className="pt-24 bg-[#0A1B33] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-[#1E3A5F]">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tight leading-none">
              CHAÎNES ET FILMS DU <span className="text-[#FFCD00]">MEILLEUR IPTV</span>
            </h2>
            <p className="text-[#FFFFFF]/70 font-medium text-lg">
              Explorez des milliers de chaînes de télévision en direct ainsi que plus de 120 000 films et séries dans la bibliothèque à la demande du meilleur IPTV. De nouveaux titres arrivent chaque jour.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#122A4D] rounded-2xl" />
            ))}
          </div>
        )}
      </section>

      {/* CARTE MONDIALE DES SERVEURS */}
      <div className="min-h-[400px] bg-[#0E2444]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* FAQ — MEILLEUR IPTV */}
      <section className="py-24 bg-[#0A1B33] relative overflow-hidden border-t border-[#1E3A5F]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0055A4]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#122A4D] border border-[#0055A4]/50 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#FFCD00]" />
              <span className="text-[#FFCD00] font-black text-xs uppercase tracking-widest">
                FAQ meilleur IPTV
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tight leading-tight">
              QUESTIONS SUR LE <span className="text-[#FFCD00]">MEILLEUR IPTV</span>
            </h2>
            <p className="text-[#FFFFFF]/70 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Les questions les plus fréquentes sur le meilleur IPTV en France.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4">
            {[
              {
                q: 'Qu’est-ce que le meilleur IPTV ?',
                a: 'Le meilleur IPTV est un service de streaming premium qui diffuse des chaînes de télévision en direct, des films et des séries via votre connexion Internet. En France, notre meilleur abonnement IPTV offre plus de 36 000 chaînes en direct et 120 000 films et séries en 4K Ultra HD, avec une installation guidée sur WhatsApp et des tarifs en euros (€).',
              },
              {
                q: 'Combien coûte le meilleur IPTV en France ?',
                a: 'Les formules du meilleur IPTV démarrent à 29 € pour 3 mois sur 1 écran. La formule VIP 12 mois coûte 55 € et permet d’économiser jusqu’à 50 %. Des formules multi-écrans sont disponibles pour 2 ou 3 appareils à la maison, à partir de 75 €.',
              },
              {
                q: 'Y a-t-il un essai gratuit pour le meilleur IPTV ?',
                a: 'Oui. Écrivez-nous sur WhatsApp et nous vous configurons un essai gratuit de 24 heures du meilleur IPTV. Testez l’image 4K, vérifiez la liste des chaînes et assurez-vous que tout fonctionne parfaitement sur votre appareil avant de passer à une formule payante.',
              },
              {
                q: 'Quels appareils sont compatibles avec le meilleur IPTV ?',
                a: 'Le meilleur IPTV fonctionne sur Amazon Firestick, Smart TV Samsung et LG, Android TV, Google TV, Apple TV, iPhone, iPad, PC Windows, Mac, ainsi que sur les box MAG et Formuler. Notre équipe vous aide à installer et configurer un lecteur comme IPTV Smarters Pro sur WhatsApp.',
              },
              {
                q: 'Ai-je besoin d’un VPN pour utiliser le meilleur IPTV en France ?',
                a: 'Aucun VPN n’est requis. Nos serveurs du meilleur IPTV sont optimisés pour les connexions françaises et européennes afin d’offrir un streaming fluide et sans coupure sur votre connexion domestique.',
              },
              {
                q: 'L’installation du meilleur IPTV est-elle rapide ?',
                a: 'La plupart des clients regardent leurs chaînes en moins de 10 minutes. Vous choisissez votre formule, écrivez-nous sur WhatsApp et notre équipe vous guide pas à pas jusqu’à ce que tout fonctionne.',
              },
              {
                q: 'Puis-je utiliser le meilleur IPTV sur plusieurs téléviseurs en même temps ?',
                a: 'Oui. Choisissez la formule 2 écrans ou 3 écrans lors de la commande et plusieurs membres du foyer pourront regarder des programmes différents en même temps sans aucune interruption.',
              },
              {
                q: 'Quelles chaînes inclut le meilleur IPTV ?',
                a: 'Le meilleur IPTV inclut toutes les grandes chaînes françaises (TF1, France 2, France 3, M6, Canal+, Arte, BFM TV), les chaînes de sport en direct (beIN Sports, RMC Sport, Canal+ Sport, Eurosport, L’Équipe TV), ainsi que des milliers de chaînes internationales du Royaume-Uni, du Canada, de Belgique, de Suisse, d’Europe et du Maghreb.',
              },
            ].map((faq, i) => (
              <FadeInItem key={i}>
                <FAQItem q={faq.q} a={faq.a} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* SECTION PARAGRAPHES + CTA FINAL */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#EEEEEE] w-full">

        {/* PARAGRAPHES */}
        <FadeIn className="max-w-4xl mx-auto">
          <div className="bg-[#FFFFFF] rounded-[2rem] p-8 md:p-12 border-4 border-[#FFCD00] shadow-2xl space-y-5">
            <h3 className="text-2xl md:text-3xl font-black text-[#0A1B33] uppercase tracking-tight mb-4">
              POURQUOI LE MEILLEUR IPTV EST LE CHOIX INTELLIGENT EN FRANCE
            </h3>

            <p className="text-[#0055A4] text-base md:text-lg leading-relaxed font-medium">
              Les abonnements câble traditionnels deviennent de plus en plus chers chaque année tout en offrant moins de chaînes à des tarifs plus élevés. Les foyers français à Paris, Marseille, Lyon, Toulouse et Bordeaux passent au meilleur IPTV parce qu’il délivre les mêmes contenus pour une fraction du coût mensuel, sans engagement et sans avoir besoin de décodeurs ou de matériel supplémentaire.
            </p>

            <p className="text-[#0055A4] text-base md:text-lg leading-relaxed font-medium">
              Le meilleur IPTV fonctionne sur une infrastructure de streaming moderne conçue pour les conditions françaises. Nos serveurs sont répartis en France et en Europe avec une bande passante dédiée, ce qui permet un zapping instantané et des flux parfaitement fluides même aux moments de trafic le plus intense comme la finale de la Ligue des Champions, la NBA Finals et les grands combats UFC.
            </p>

            <p className="text-[#0055A4] text-base md:text-lg leading-relaxed font-medium">
              L’installation est l’un des points les plus mentionnés par nos clients dans les avis. Vous n’avez pas besoin d’être un expert technique. Vous choisissez une formule, écrivez à notre équipe sur WhatsApp, et nous vous accompagnons pour installer un lecteur comme IPTV Smarters Pro sur votre Firestick, Smart TV ou téléphone. Une fois en ligne, vous bénéficiez d’un essai gratuit de 24 heures pour tester la qualité d’image, vérifier la programmation sportive et vous assurer que tout fonctionne parfaitement sur votre connexion Internet avant de passer à une formule payante.
            </p>

            <p className="text-[#0055A4] text-base md:text-lg leading-relaxed font-medium">
              La programmation du meilleur IPTV couvre tout ce qu’un foyer français peut souhaiter. Vous obtenez TF1, France 2, France 3, M6, Canal+ et Arte aux côtés du sport en direct sur beIN Sports, RMC Sport, Canal+ Sport et Eurosport. Les films et les coffrets complets de séries arrivent chaque jour dans la bibliothèque à la demande depuis HBO, Netflix, Disney, Paramount et Apple. Les chaînes internationales du Royaume-Uni, du Canada, de Belgique, de Suisse, d’Europe et du Maghreb sont organisées en groupes faciles à parcourir, pour trouver n’importe quel contenu en quelques secondes.
            </p>

            <p className="text-[#0055A4] text-base md:text-lg leading-relaxed font-medium">
              Les tarifs sont en euros (€) et il n’y a aucun engagement. Vous choisissez le nombre d’écrans dont vous avez besoin à la maison, vous optez pour une formule de 3, 6 ou 12 mois, et vous pouvez annuler ou modifier à tout moment. C’est la différence du meilleur IPTV. Aucun frais caché, aucun engagement à long terme, et aucune pression pour vous engager avant de savoir que le service vous convient.
            </p>
          </div>
        </FadeIn>

        <br /><br />

        <div className="absolute inset-0 bg-[radial-gradient(#0A1B33_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border-2 border-[#0055A4]/20 bg-[#FFFFFF] shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0055A4]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFCD00]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="h-2 w-full bg-gradient-to-r from-[#0055A4] via-[#FFCD00] to-[#EF4135]" />

            <FadeIn className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0055A4]/30 bg-[#0055A4]/10 px-4 py-2 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-[#0055A4]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#0055A4] flex items-center gap-1.5">
                  Meilleur IPTV en France 🇫🇷
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#0A1B33] leading-[1.05] mb-6">
                OBTENEZ LE MEILLEUR IPTV <br />
                <span className="text-[#0055A4]">DÈS AUJOURD’HUI</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#0055A4]">
                Choisissez votre formule du meilleur IPTV, écrivez-nous sur WhatsApp et nous vous installons sur votre propre appareil. Testez d’abord tout avec l’essai gratuit, puis passez à une formule payante uniquement quand vous êtes satisfait. Sans engagement. Sans tracas.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link
                  href="/tarifs"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#0055A4] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#FFFFFF] hover:bg-[#004A8F] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#0055A4]/25 border border-[#0055A4]"
                >
                  Choisir ma formule du meilleur IPTV
                </Link>
                <Link
                  href="/essai-gratuit"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#EF4135]/40 bg-[#FFFFFF] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#EF4135] hover:bg-[#EF4135] hover:text-[#FFFFFF] transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  <PlayCircle className="h-4 w-4 shrink-0" /> Essai gratuit 24h
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#0055A4] uppercase tracking-wider">
                Essai gratuit d’abord • Installation guidée sur WhatsApp • Sans engagement
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>

  );
}