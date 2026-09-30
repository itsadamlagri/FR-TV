'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';

// Suffixes distincts pour les doublons (alt unique sur CHAQUE image rendue)
const DUPLICATE_SUFFIXES = [
  ' — compatible abonnement IPTV',
  ' — inclus dans le service IPTV en France',
  ' — supporté sans configuration',
  ' — disponible sur toutes les formules',
  ' — installation rapide en 5 minutes',
  ' — assistance client 24/7 incluse',
  ' — parfait pour les chaînes en direct',
  ' — idéal pour le sport en direct',
  ' — qualité 4K Ultra HD garantie',
  ' — catalogue IPTV premium',
];

export default function PartnerSlider() {
  const partners = [
    { name: 'Amazon Firestick', alt: 'Amazon Firestick diffusant l’abonnement IPTV en 4K ultra nette' },
    { name: 'Samsung Smart TV', alt: 'Smart TV Samsung diffusant le sport en direct sans mise en mémoire tampon' },
    { name: 'LG Smart TV', alt: 'Smart TV LG diffusant plus de 36 000 chaînes via un abonnement IPTV' },
    { name: 'Apple TV 4K', alt: 'Apple TV 4K diffusant des films et séries en Ultra HD' },
    { name: 'Android TV', alt: 'Boîtier Android TV diffusant des contenus à la demande en 4K' },
    { name: 'Nvidia Shield', alt: 'Nvidia Shield offrant des flux sportifs en 60 FPS' },
    { name: 'IPTV Extreme Pro', alt: 'Lecteur IPTV Extreme Pro fonctionnant sur un abonnement IPTV' },
    { name: 'TiviMate Player', alt: 'Lecteur IPTV TiviMate chargeant les playlists M3U en quelques secondes' },
    { name: 'IPTV Smarters', alt: 'IPTV Smarters Pro avec prise en charge complète du guide EPG' },
    { name: 'MAG & Formuler', alt: 'Boîtiers MAG et Formuler fonctionnant avec le service IPTV' },
  ].map((p, i) => {
    const number = String(i + 1).padStart(2, '0');
    return {
      ...p,
      imagePath: `/img/partners/iptv-pro-usa-partners-${number}`,
      width: 128,
      height: 128,
    };
  });

  const sliderItems = useMemo(() => [...partners, ...partners], [partners]);
  const animationDistance = partners.length * 150;

  return (
    <div className="w-full overflow-hidden relative py-12">
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#0A1B33] via-[#0A1B33]/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#0A1B33] via-[#0A1B33]/50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm text-[#FFCD00] font-black uppercase tracking-widest flex items-center justify-center gap-2">
          <span className="flex gap-0.5">
            <span className="w-2 h-2 rounded-full bg-[#0055A4]" />
            <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
            <span className="w-2 h-2 rounded-full bg-[#EF4135]" />
          </span>
          <span>Applications et appareils IPTV pris en charge</span>
        </p>
      </div>

      <motion.div
        className="flex gap-12 md:gap-16 items-center w-max"
        animate={{ x: [0, -animationDistance] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {sliderItems.map((partner, idx) => {
          const isDuplicate = idx >= partners.length;

          // Alt UNIQUE pour CHAQUE image (original ET doublon)
          const altText = isDuplicate
            ? `${partner.alt}${DUPLICATE_SUFFIXES[idx % DUPLICATE_SUFFIXES.length]}`
            : `${partner.alt} — appareil compatible abonnement IPTV en France`;

          return (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center justify-center min-w-[120px] md:min-w-[150px] opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28">
                <Image
                  src={`${partner.imagePath}.png`}
                  alt={altText}
                  title={altText}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 112px"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}