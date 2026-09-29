'use client';

import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function LoaderContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Termine l’animation de chargement dès que la route ou les paramètres changent
    setLoading(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    // Intercepte les clics sur les liens internes pour déclencher la barre de chargement
    const handleAnchorClick = (event: MouseEvent) => {
      // Ignore les clics modifiés (Ctrl, Cmd, Shift, Alt ou clic du milieu)
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = (event.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const targetAttr = target.getAttribute('target');
      const downloadAttr = target.getAttribute('download');

      // Déclenche uniquement pour les navigations internes (pas les liens externes, ancres, téléchargements, ni target="_blank")
      if (
        href &&
        href.startsWith('/') &&
        !href.startsWith('/#') &&
        targetAttr !== '_blank' &&
        downloadAttr === null &&
        href !== pathname
      ) {
        setLoading(true);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none" aria-hidden="true">
      {/* Barre de progression tricolore en haut de page */}
      <div className="h-1.5 w-full bg-[#0A1B33]/60 overflow-hidden shadow-[0_0_18px_rgba(255,205,0,0.9)]">
        {/* Dégradé scintillant tricolore */}
        <div className="h-full w-full bg-gradient-to-r from-[#0055A4] via-[#FFFFFF] to-[#EF4135] origin-left animate-[loadingShimmer_1.4s_ease-in-out_infinite]" />
      </div>

      {/* Keyframes en ligne pour l’effet scintillant — aucune modification du config Tailwind nécessaire */}
      <style jsx>{`
        @keyframes loadingShimmer {
          0% {
            transform: translateX(-100%) scaleX(0.6);
            opacity: 0.6;
          }
          50% {
            transform: translateX(0%) scaleX(1);
            opacity: 1;
          }
          100% {
            transform: translateX(100%) scaleX(0.6);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}

export default function RouteLoader() {
  return (
    <Suspense fallback={null}>
      <LoaderContent />
    </Suspense>
  );
}