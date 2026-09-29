'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search, Tv, Film } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden justify-center items-center py-20 sm:py-24 md:py-30">

      {/* Image d’arrière-plan avec overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/error-404.webp"
          alt="Abonnement IPTV - Page introuvable sur le service IPTV français"
          className="w-full h-full object-cover opacity-95 brightness-50"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1920&auto=format";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05101F]/90 via-[#0A1B33]/70 to-[#05101F]/90" />
      </div>

      {/* Effet de halo animé */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0055A4]/15 rounded-full blur-[120px] animate-pulse" />

      {/* Conteneur principal */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
        <div className="max-w-3xl mx-auto">

          {/* Conteneur du nombre 404 */}
          <div className="mb-6">
            <div className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none tracking-tighter uppercase select-none">
              <span className="text-[#0055A4]">4</span>
              <span className="text-[#FFFFFF]">0</span>
              <span className="text-[#EF4135]">4</span>
            </div>
          </div>

          {/* Message d’erreur */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tighter">
            Page introuvable
          </h1>

          <div className="w-24 h-1.5 bg-[#FFCD00] mx-auto mb-8 rounded-full" />

          <p className="text-[#FFFFFF]/80 text-base sm:text-lg font-medium max-w-xl mx-auto mb-12 leading-relaxed">
            Cette page n’est plus à l’antenne. Le lien est peut-être obsolète, ou l’adresse contient une faute de frappe. Utilisez les raccourcis ci-dessous pour revenir à votre abonnement IPTV.
          </p>

          {/* Grille de liens rapides */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <Link
              href="/"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#122A4D] border-2 border-[#1E3A5F] hover:border-[#0055A4] transition-all duration-300"
            >
              <Home className="w-5 h-5 text-[#0055A4] group-hover:scale-110 transition-transform" />
              <span className="text-[#FFFFFF] text-xs font-black uppercase tracking-wider">Accueil</span>
            </Link>

            <Link
              href="/pricing"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#122A4D] border-2 border-[#1E3A5F] hover:border-[#0055A4] transition-all duration-300"
            >
              <Tv className="w-5 h-5 text-[#0055A4] group-hover:scale-110 transition-transform" />
              <span className="text-[#FFFFFF] text-xs font-black uppercase tracking-wider">Formules</span>
            </Link>

            <Link
              href="/setup"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#122A4D] border-2 border-[#1E3A5F] hover:border-[#0055A4] transition-all duration-300"
            >
              <Film className="w-5 h-5 text-[#0055A4] group-hover:scale-110 transition-transform" />
              <span className="text-[#FFFFFF] text-xs font-black uppercase tracking-wider">Installation</span>
            </Link>

            <Link
              href="/blog"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#122A4D] border-2 border-[#1E3A5F] hover:border-[#0055A4] transition-all duration-300"
            >
              <Search className="w-5 h-5 text-[#0055A4] group-hover:scale-110 transition-transform" />
              <span className="text-[#FFFFFF] text-xs font-black uppercase tracking-wider">Blog</span>
            </Link>
          </div>

          {/* Boutons d’action principaux */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 shrink-0 shadow-2xl border-2 border-[#0055A4] hover:bg-[#004A8F]"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              Retour à l’accueil
            </Link>

            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#EF4135] border-2 border-[#EF4135] text-[#FFFFFF] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 shrink-0 shadow-2xl hover:bg-[#D63528]"
            >
              Voir les formules d’abonnement IPTV
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}