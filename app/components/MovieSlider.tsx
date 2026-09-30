'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';

const MOVIES_COUNT = 16;
const SERIES_COUNT = 16;
const SPORTS_COUNT = 14;

const MOVIE_ALTS = [
  'Streaming du dernier blockbuster d’action en 4K sur Smart TV avec abonnement IPTV',
  'Drame primé diffusé sur Firestick ce soir via un abonnement IPTV français',
  'Sortie cinéma de science-fiction en Ultra HD pour une soirée film à la maison',
  'Thriller à suspense disponible à la demande sur Roku avec un service IPTV',
  'Film d’aventure familial à regarder sur Apple TV en streaming 4K',
  'Épopée fantastique en 4K sur Android TV avec abonnement IPTV',
  'Comédie plébiscitée en streaming sur Abonné IPTV pour toute la famille',
  'Classique du cinéma remasterisé en Full HD à la demande sur Smart TV',
  'Succès international au box-office diffusé sur Smart TV en Ultra HD',
  'Première de super-héros dans la bibliothèque à la demande sur Firestick',
  'Film policier à suspense à regarder à Paris et à Lyon via IPTV',
  'Romance hollywoodienne à l’affiche sur Roku en qualité HD',
  'Drame historique de guerre en 4K Ultra HD sur Apple TV',
  'Film d’animation familial diffusé sur Android TV en streaming',
  'Documentaire criminel à voir ce soir à la demande en France',
  'Pépite indépendante en streaming sur votre abonnement IPTV 4K',
];

const SERIES_ALTS = [
  'Série dramatique tendance en streaming 4K sur Smart TV via abonnement IPTV',
  'Série policière à binge-watcher disponible sur Firestick en France',
  'Série TV primée diffusée sur Android TV avec un abonnement IPTV',
  'Série de science-fiction disponible à la demande en France en 4K',
  'Coffret de sitcom comique à regarder sur Roku en streaming continu',
  'Série fantastique populaire en streaming Ultra HD sur Smart TV',
  'Collection de télé-réalité sur Apple TV ce soir avec IPTV',
  'Thriller mystère à voir à la demande sur Firestick en HD',
  'Drame historique en Full HD sur Firestick via abonnement IPTV',
  'Série médicale dans la bibliothèque à la demande en streaming 4K',
  'Série animée pour adultes en streaming 4K sur Android TV',
  'Coffret dramatique romantique diffusé en France en Ultra HD',
  'Thriller politique en 4K sur Smart TV avec abonnement IPTV',
  'Série de super-héros sur votre abonnement IPTV en streaming HD',
  'Collection documentaire sur Roku disponible à la demande',
  'Série internationale en streaming sur Apple TV en qualité 4K',
];

const SPORTS_ALTS = [
  'Match de Ligue 1 en direct sur Firestick en 4K avec abonnement IPTV',
  'Match de Ligue des Champions sur Smart TV en streaming 4K France',
  'Premier League en direct sur Roku via un service IPTV français',
  'Événement UFC en pay-per-view diffusé en 60FPS sur abonnement IPTV',
  'Grand Prix de Formule 1 en direct sur Apple TV en Ultra HD',
  'Match NBA en direct en 4K à travers la France avec IPTV',
  'Choc de Liga en direct en streaming HD sur Firestick',
  'Match de tennis du Grand Chelem en Full HD sur Smart TV',
  'Rencontre de Top 14 en direct sur Android TV via IPTV',
  'Combat de boxe pour le titre en direct ce soir sur abonnement IPTV',
  'beIN Sports en direct en 4K sur Smart TV avec service IPTV',
  'Tournoi de golf en direct sur Abonné IPTV en qualité HD',
  'Match de Ligue Europa en streaming en France via abonnement IPTV',
  'Événement PPV principal en 4K Ultra HD sur Firestick',
];

// ---------------------------------------------------------------------------
// Suffixes distincts pour les doublons (alt unique sur CHAQUE image rendue)
// ---------------------------------------------------------------------------
const DUPLICATE_SUFFIXES = [
  ' — aperçu catalogue IPTV',
  ' — disponible à la demande',
  ' — sur abonnement IPTV en France',
  ' — chaîne en direct incluse',
  ' — compatible Firestick et Smart TV',
  ' — qualité 4K Ultra HD',
  ' — accessible partout en France',
  ' — sans engagement',
  ' — installation en 5 minutes',
  ' — assistance client 24/7',
  ' — catalogue VOD Abonné IPTV',
  ' — nouveau titre ajouté',
  ' — bibliothèque IPTV premium',
  ' — streaming continu',
  ' — inclus dans l’abonnement',
  ' — disponible en 4K et FHD',
];

const movies = Array.from({ length: MOVIES_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `movie-${i}`,
    imagePath: `/img/sliders/movies/iptv-pro-usa-movies-${number}`,
    alt: MOVIE_ALTS[i],
  };
});

const series = Array.from({ length: SERIES_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `series-${i}`,
    imagePath: `/img/sliders/series/iptv-pro-usa-serie-${number}`,
    alt: SERIES_ALTS[i],
  };
});

const sports = Array.from({ length: SPORTS_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `sport-${i}`,
    imagePath: `/img/sliders/sports/iptv-pro-usa-sports-${number}`,
    alt: SPORTS_ALTS[i],
  };
});

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const InfiniteSlider = ({
  items,
  direction = 'left',
  speed = 50,
  fadeBgColor = '#0A1B33',
  cardBorderColor = 'rgba(0,85,164,0.4)',
  label = 'abonnement IPTV',
}: {
  items: any[];
  direction?: 'left' | 'right';
  speed?: number;
  fadeBgColor?: string;
  cardBorderColor?: string;
  label?: string;
}) => {
  const [failedImages, setFailedImages] = useState<{ [key: string]: boolean }>({});
  const infiniteItems = useMemo(() => [...items, ...items], [items]);
  const duration = (items.length * speed) / 10;

  return (
    <div className="relative w-full overflow-hidden py-3">
      <div
        className="absolute left-0 top-0 bottom-0 w-20 md:w-36 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${fadeBgColor}, transparent)` }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 md:w-36 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${fadeBgColor}, transparent)` }}
      />

      <motion.div
        className="flex w-max gap-4 md:gap-6 px-4"
        animate={{ x: direction === 'left' ? [0, '-50%'] : ['-50%', 0] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration, ease: 'linear' }}
      >
        {infiniteItems.map((item, idx) => {
          const key = `${item.id}-${idx}`;
          const isFirstHalf = idx < items.length;
          const isPriority = isFirstHalf && idx < 6;
          const isDuplicate = idx >= items.length;

          // Alt UNIQUE pour CHAQUE image (original ET doublon)
          const altText = isDuplicate
            ? `${item.alt}${DUPLICATE_SUFFIXES[idx % DUPLICATE_SUFFIXES.length]}`
            : item.alt;

          return (
            <button
              key={key}
              onClick={scrollToPricing}
              tabIndex={isFirstHalf ? 0 : -1}
              aria-label={`Voir ${altText} sur ${label}`}
              className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-52 block cursor-pointer group text-left bg-transparent border-none p-0 transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className="relative aspect-[2/3] rounded-xl overflow-hidden bg-[#122A4D] border shadow-lg group-hover:shadow-2xl transition-all duration-300"
                style={{ borderColor: cardBorderColor }}
              >
                {!failedImages[key] ? (
                  <Image
                    src={`${item.imagePath}.webp`}
                    alt={altText}
                    title={altText}
                    width={208}
                    height={312}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={isPriority ? 'eager' : 'lazy'}
                    priority={isPriority}
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 208px"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [key]: true }))
                    }
                  />
                ) : (
                  <div className="w-full h-full bg-[#122A4D]" />
                )}
              </div>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default function MovieSlider() {
  return (
    <section className="w-full" aria-label="Aperçu du catalogue multimédia Abonné IPTV en France">
      <div className="w-full py-12 sm:py-16 bg-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#0055A4] text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
              Cinéma 4K
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A1B33] uppercase tracking-tight">
              Dernières sorties blockbuster
            </h2>
          </div>
          <p className="text-[#0055A4] text-sm mt-2 font-semibold hidden md:block max-w-2xl">
            Une partie de la bibliothèque de plus de 120 000 titres à la demande incluse dans chaque abonnement IPTV. Regardez les nouveautés cinéma en Ultra HD, prêtes à être visionnées sur n’importe quel appareil.
          </p>
        </div>
        <InfiniteSlider
          items={movies}
          direction="left"
          speed={45}
          fadeBgColor="#EEEEEE"
          cardBorderColor="rgba(0,85,164,0.4)"
          label="l’abonnement IPTV Abonné IPTV"
        />
      </div>

      <div className="w-full py-12 sm:py-16 bg-[#0A1B33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#FFCD00] text-[#0A1B33] text-xs font-black uppercase tracking-wider">
              Séries VOD
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight">
              Séries et coffrets tendance
            </h2>
          </div>
          <p className="text-[#FFFFFF]/90 text-sm mt-2 font-medium hidden md:block max-w-2xl">
            Enchaînez des coffrets complets des grandes chaînes internationales. De nouveaux titres sont ajoutés chaque jour dans notre service IPTV.
          </p>
        </div>
        <InfiniteSlider
          items={series}
          direction="right"
          speed={40}
          fadeBgColor="#0A1B33"
          cardBorderColor="rgba(255,205,0,0.5)"
          label="l’abonnement IPTV Abonné IPTV"
        />
      </div>

      <div className="w-full py-12 sm:py-16 bg-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#EF4135] text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
              Sport en direct
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A1B33] uppercase tracking-tight">
              Sport en direct et événements PPV 
            </h2>
          </div>
          <p className="text-[#0055A4] text-sm mt-2 font-semibold hidden md:block max-w-2xl">
            Suivez chaque coup d’envoi, chaque entre-deux et chaque soirée de combat en direct — Ligue 1, Ligue des Champions, beIN Sports, Formule 1 et grands événements PPV.
          </p>
        </div>
        <InfiniteSlider
          items={sports}
          direction="left"
          speed={50}
          fadeBgColor="#EEEEEE"
          cardBorderColor="rgba(0,85,164,0.4)"
          label="l’abonnement IPTV"
        />
      </div>
    </section>
  );
}