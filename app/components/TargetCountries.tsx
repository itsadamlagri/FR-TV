'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import type { ReactElement } from 'react';

// ---------------------------------------------------------------------------
// COMPOSANTS SVG DRAPEAUX
// ---------------------------------------------------------------------------
const FlagFR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="10.67" height="24" fill="#0055A4" />
    <rect x="10.67" width="10.67" height="24" fill="#FFFFFF" />
    <rect x="21.33" width="10.67" height="24" fill="#EF4135" />
  </svg>
);

const FlagBE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="10.67" height="24" fill="#000" />
    <rect x="10.67" width="10.67" height="24" fill="#FDDA24" />
    <rect x="21.33" width="10.67" height="24" fill="#EF3340" />
  </svg>
);

const FlagCH = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#DA291C" />
    <rect x="14" y="6" width="4" height="12" fill="#FFF" />
    <rect x="10" y="10" width="12" height="4" fill="#FFF" />
  </svg>
);

const FlagCA = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#FFF" />
    <rect width="8" height="24" fill="#D80621" />
    <rect x="24" width="8" height="24" fill="#D80621" />
    <path fill="#D80621" d="M16 6l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 17l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 6z" />
  </svg>
);

const FlagDE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="8" fill="#000" />
    <rect y="8" width="32" height="8" fill="#DD0000" />
    <rect y="16" width="32" height="8" fill="#FFCE00" />
  </svg>
);

const FlagIT = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="10.67" height="24" fill="#009246" />
    <rect x="10.67" width="10.67" height="24" fill="#FFF" />
    <rect x="21.33" width="10.67" height="24" fill="#CE2B37" />
  </svg>
);

const FlagES = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#AA151B" />
    <rect y="6" width="32" height="12" fill="#F1BF00" />
  </svg>
);

const FlagPT = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#DA291C" />
    <rect width="12" height="24" fill="#006600" />
    <circle cx="12" cy="12" r="4" fill="#FFD700" />
    <circle cx="12" cy="12" r="2.4" fill="#DA291C" />
  </svg>
);

const FlagNL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="8" fill="#AE1C28" />
    <rect y="8" width="32" height="8" fill="#FFF" />
    <rect y="16" width="32" height="8" fill="#21468B" />
  </svg>
);

const FlagLU = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="8" fill="#EF3340" />
    <rect y="8" width="32" height="8" fill="#FFF" />
    <rect y="16" width="32" height="8" fill="#00A2E1" />
  </svg>
);

const FlagIE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="10.67" height="24" fill="#169B62" />
    <rect x="10.67" width="10.67" height="24" fill="#FFF" />
    <rect x="21.33" width="10.67" height="24" fill="#FF883E" />
  </svg>
);

const FlagAT = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="8" fill="#ED2939" />
    <rect y="8" width="32" height="8" fill="#FFF" />
    <rect y="16" width="32" height="8" fill="#ED2939" />
  </svg>
);

const FlagGR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#FFF" />
    {[0, 3.4, 6.9, 10.3, 13.7, 17.1, 20.6, 24].map((y, i) => (
      <rect key={i} y={y} width="32" height="3.4" fill="#0D5EAF" />
    ))}
    <rect width="13.7" height="13.7" fill="#0D5EAF" />
    <rect x="5.5" width="2.7" height="13.7" fill="#FFF" />
    <rect y="5.5" width="13.7" height="2.7" fill="#FFF" />
  </svg>
);

const FlagDK = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#C60C30" />
    <rect x="9" width="4" height="24" fill="#FFF" />
    <rect y="10" width="32" height="4" fill="#FFF" />
  </svg>
);

const FlagSE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#006AA7" />
    <rect x="9" width="4" height="24" fill="#FECC00" />
    <rect y="10" width="32" height="4" fill="#FECC00" />
  </svg>
);

const FlagNO = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#BA0C2F" />
    <rect x="9" width="4" height="24" fill="#FFF" />
    <rect y="10" width="32" height="4" fill="#FFF" />
    <rect x="10" width="2" height="24" fill="#00205B" />
    <rect y="11" width="32" height="2" fill="#00205B" />
  </svg>
);

const FlagFI = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#FFF" />
    <rect x="9" width="4" height="24" fill="#003580" />
    <rect y="10" width="32" height="4" fill="#003580" />
  </svg>
);

const FlagPL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="12" fill="#FFF" />
    <rect y="12" width="32" height="12" fill="#DC143C" />
  </svg>
);

const FlagUS = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#FFF" />
    {[0, 3.7, 7.4, 11.1, 14.8, 18.5, 22.2].map((y, i) => (
      <rect key={i} y={y} width="32" height="1.85" fill="#B22234" />
    ))}
    <rect width="13" height="11.1" fill="#3C3B6E" />
  </svg>
);

const FlagGB = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#012169" />
    <path stroke="#FFF" strokeWidth="4.8" d="M0 0l32 24M32 0L0 24" />
    <path stroke="#C8102E" strokeWidth="2.4" d="M0 0l32 24M32 0L0 24" />
    <path stroke="#FFF" strokeWidth="8" d="M16 0v24M0 12h32" />
    <path stroke="#C8102E" strokeWidth="4.8" d="M16 0v24M0 12h32" />
  </svg>
);

const FlagMA = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#C1272D" />
    <path
      fill="none"
      stroke="#006233"
      strokeWidth="0.9"
      d="M16 7.5l2.6 8-6.8-5h8.4l-6.8 5z"
    />
  </svg>
);

const FlagDZ = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#FFF" />
    <rect width="16" height="24" fill="#006233" />
    <circle cx="18" cy="12" r="4" fill="#D21034" />
    <circle cx="20" cy="12" r="4" fill="#FFF" />
  </svg>
);

const FlagTN = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="32" height="24" fill="#E70013" />
    <circle cx="16" cy="12" r="6" fill="#FFF" />
    <circle cx="17.5" cy="12" r="4.5" fill="#E70013" />
    <circle cx="18" cy="12" r="3.4" fill="#FFF" />
    <path fill="#E70013" d="M19 10l1 2-2 .5 1.5 1.5-1.5 1.5 2 .5-1 2-1.7-1.4.3-1.6-1.5 1-1.5-1 .3 1.6L13.2 19l-1-2 2-.5L12.7 15l1.5-1.5-2-.5 1-2 1.7 1.4-.3 1.6 1.5-1 1.5 1-.3-1.6z" />
  </svg>
);

// ---------------------------------------------------------------------------
// LISTE DES PAYS
// ---------------------------------------------------------------------------
type CountryEntry = { name: string; code: string; Flag: () => ReactElement };

const COUNTRY_POOL: CountryEntry[] = [
  { name: 'Belgique', code: 'BE', Flag: FlagBE },
  { name: 'Suisse', code: 'CH', Flag: FlagCH },
  { name: 'Canada', code: 'CA', Flag: FlagCA },
  { name: 'Allemagne', code: 'DE', Flag: FlagDE },
  { name: 'Italie', code: 'IT', Flag: FlagIT },
  { name: 'Espagne', code: 'ES', Flag: FlagES },
  { name: 'Portugal', code: 'PT', Flag: FlagPT },
  { name: 'Pays-Bas', code: 'NL', Flag: FlagNL },
  { name: 'Luxembourg', code: 'LU', Flag: FlagLU },
  { name: 'Irlande', code: 'IE', Flag: FlagIE },
  { name: 'Autriche', code: 'AT', Flag: FlagAT },
  { name: 'Grèce', code: 'GR', Flag: FlagGR },
  { name: 'Danemark', code: 'DK', Flag: FlagDK },
  { name: 'Suède', code: 'SE', Flag: FlagSE },
  { name: 'Norvège', code: 'NO', Flag: FlagNO },
  { name: 'Finlande', code: 'FI', Flag: FlagFI },
  { name: 'Pologne', code: 'PL', Flag: FlagPL },
  { name: 'Royaume-Uni', code: 'GB', Flag: FlagGB },
  { name: 'Maroc', code: 'MA', Flag: FlagMA },
  { name: 'Algérie', code: 'DZ', Flag: FlagDZ },
  { name: 'Tunisie', code: 'TN', Flag: FlagTN },
  { name: 'États-Unis', code: 'US', Flag: FlagUS },
];

const FR_ENTRY: CountryEntry = { name: 'France', code: 'FR', Flag: FlagFR };

// ---------------------------------------------------------------------------
// GÉNÉRATEUR DE SÉQUENCE
// France dupliquée en vedette toutes les 3 cartes (jamais deux France de suite)
// ---------------------------------------------------------------------------
const buildCountrySequence = (total: number): CountryEntry[] => {
  const sequence: CountryEntry[] = [];
  let poolIndex = 0;

  for (let i = 0; i < total; i++) {
    const shouldInsertFR = i > 0 && i % 3 === 0;
    const previousIsFR = sequence[sequence.length - 1]?.code === 'FR';

    if (shouldInsertFR && !previousIsFR) {
      sequence.push(FR_ENTRY);
    } else {
      while (COUNTRY_POOL[poolIndex % COUNTRY_POOL.length].code === 'FR') {
        poolIndex++;
      }
      sequence.push(COUNTRY_POOL[poolIndex % COUNTRY_POOL.length]);
      poolIndex++;
    }
  }

  return sequence;
};

// ---------------------------------------------------------------------------
// COMPOSANT PRINCIPAL
// ---------------------------------------------------------------------------
export default function CountryFlagsBar() {
  const loopItems = useMemo(() => {
    const base = buildCountrySequence(60);
    return [...base, ...base];
  }, []);

  return (
    <section
      className="w-screen max-w-[100vw] py-6 my-6 relative z-10 overflow-hidden ml-[calc(50%-50vw)]"
      aria-label="Pays desservis par ABO IPTV"
    >
      <div className="w-full mb-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-black uppercase tracking-widest text-[#FFFFFF] bg-[#0A1B33] border border-[#FFCD00]/40 px-5 py-2 rounded-full">
            <span className="flex gap-0.5">
              <span className="w-2 h-2 rounded-full bg-[#0055A4]" />
              <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
              <span className="w-2 h-2 rounded-full bg-[#EF4135]" />
            </span>
            Des téléspectateurs dans plus de 100 pays
          </span>
        </div>
      </div>

      {/* Slider infini pleine largeur */}
      <div className="relative w-screen max-w-[100vw] overflow-hidden">
        {/* Dégradé gauche */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-r from-[#0A1B33] to-transparent" />
        {/* Dégradé droit */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-l from-[#0A1B33] to-transparent" />

        <motion.div
          className="flex gap-3 sm:gap-4 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        >
          {loopItems.map((country, idx) => {
            const { Flag } = country;
            const isFR = country.code === 'FR';
            return (
              <div
                key={`${country.code}-${idx}`}
                className={`flex items-center gap-3 shrink-0 w-[180px] sm:w-[200px] h-[60px] sm:h-[64px] px-4 rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                  isFR
                    ? 'bg-[#EF4135] border-[#FFCD00] shadow-lg shadow-[#EF4135]/40'
                    : 'bg-[#122A4D] border-[#1E3A5F] hover:border-[#0055A4]'
                }`}
              >
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 shadow-md ring-2 ring-[#FFCD00]/60 bg-white">
                  <Flag />
                </div>
                <span
                  className={`flex-1 text-[12px] sm:text-[13px] font-black uppercase tracking-wider leading-tight truncate ${
                    isFR ? 'text-[#FFFFFF]' : 'text-[#FFFFFF]'
                  }`}
                >
                  {country.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}