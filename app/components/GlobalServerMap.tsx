'use client';

import { FadeIn } from './AnimatedSection';
import { Wifi, Server, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

export default function GlobalServerMap() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28"
      aria-label="Carte mondiale de couverture des serveurs IPTV"
    >
      {/* Halo tricolore doux */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,85,164,0.25),_transparent_65%)] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#EF4135]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-[#FFCD00]/10 blur-[120px] rounded-full pointer-events-none" />

      <FadeIn className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FFCD00]/40 bg-[#122A4D] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#FFCD00]">
            <span className="flex gap-0.5">
              <span className="w-2 h-2 rounded-full bg-[#0055A4]" />
              <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
              <span className="w-2 h-2 rounded-full bg-[#EF4135]" />
            </span>
            <Wifi className="h-4 w-4 text-[#FFCD00]" />
            Réseau serveur IPTV 🇫🇷
          </div>

          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-[#FFFFFF] sm:text-4xl md:text-5xl">
            Couverture serveur mondiale dans <span className="text-[#FFCD00]">plus de 100 pays</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#FFFFFF]/80 sm:text-base font-medium">
            Profitez d’un streaming IPTV 4K ultra-rapide grâce à un réseau mondial d’abonnement IPTV. Zéro mise en mémoire tampon, stabilité maximale et disponibilité garantie à 99,9 % — avec des serveurs optimisés pour la France et l’Europe.
          </p>
        </div>

        {/* Carte graphique */}
        <div className="relative mx-auto my-8 max-w-5xl px-4">
          <Image
            src="/img/global.png"
            alt="Carte de couverture du réseau mondial de serveurs IPTV avec infrastructure optimisée pour la France"
            width={1400}
            height={787}
            className="w-full h-auto max-h-[600px] object-contain block mx-auto opacity-95"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        {/* Points forts */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-[#FFFFFF] p-6 rounded-xl border-2 border-[#D6DCE3] shadow-sm hover:border-[#0055A4] hover:shadow-[0_10px_30px_rgba(0,85,164,0.25)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <Zap className="h-6 w-6 text-[#0055A4]" />
            </div>
            <h3 className="text-base font-black uppercase text-[#0A1B33]">
              Latence ultra-faible
            </h3>
            <p className="text-xs text-[#0055A4] mt-1 font-medium">
              Routage réseau optimisé pour un zapping instantané et un sport en direct sans coupure.
            </p>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-xl border-2 border-[#D6DCE3] shadow-sm hover:border-[#0055A4] hover:shadow-[0_10px_30px_rgba(0,85,164,0.25)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <Server className="h-6 w-6 text-[#0055A4]" />
            </div>
            <h3 className="text-base font-black uppercase text-[#0A1B33]">
              Serveurs redondants
            </h3>
            <p className="text-xs text-[#0055A4] mt-1 font-medium">
              Systèmes de bascule automatique pour une diffusion continue et des performances sans interruption.
            </p>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-xl border-2 border-[#D6DCE3] shadow-sm hover:border-[#0055A4] hover:shadow-[0_10px_30px_rgba(0,85,164,0.25)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <ShieldCheck className="h-6 w-6 text-[#0055A4]" />
            </div>
            <h3 className="text-base font-black uppercase text-[#0A1B33]">
              Disponibilité 99,9 %
            </h3>
            <p className="text-xs text-[#0055A4] mt-1 font-medium">
              Surveillance de l’infrastructure 24h/24 et 7j/7 pour une expérience fiable et sans tracas.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}