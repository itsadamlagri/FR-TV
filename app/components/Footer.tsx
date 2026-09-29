'use client';

import Link from "next/link";
import Image from "next/image";
import { CONSTANTS } from "@/lib/seo";
import { channelsData } from "@/lib/channels-data";
import { Facebook, Instagram, Twitter } from "lucide-react";

// ---------------------------------------------------------------------------
// Drapeaux circulaires — uniquement France, Canada, Belgique, Suisse,
// Luxembourg et Monaco
// ---------------------------------------------------------------------------
const FlagFR = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-fr"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-fr)">
      <rect width="32" height="32" fill="#FFFFFF" />
      <rect width="10.67" height="32" fill="#0055A4" />
      <rect x="21.33" width="10.67" height="32" fill="#EF4135" />
    </g>
  </svg>
);

const FlagCA = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-ca"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-ca)">
      <rect width="32" height="32" fill="#FFFFFF" />
      <rect width="8" height="32" fill="#D80621" />
      <rect x="24" width="8" height="32" fill="#D80621" />
      <path fill="#D80621" d="M16 7l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 18l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 7z" />
    </g>
  </svg>
);

const FlagBE = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-be"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-be)">
      <rect width="10.67" height="32" fill="#000" />
      <rect x="10.67" width="10.67" height="32" fill="#FDDA24" />
      <rect x="21.33" width="10.67" height="32" fill="#EF3340" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-ch)">
      <rect width="32" height="32" fill="#DA291C" />
      <rect x="14" y="8" width="4" height="16" fill="#FFF" />
      <rect x="8" y="14" width="16" height="4" fill="#FFF" />
    </g>
  </svg>
);

const FlagLU = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-lu"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-lu)">
      <rect width="32" height="10.67" fill="#EF3340" />
      <rect y="10.67" width="32" height="10.67" fill="#FFFFFF" />
      <rect y="21.33" width="32" height="10.67" fill="#00A2E1" />
    </g>
  </svg>
);

const FlagMC = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-mc"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-mc)">
      <rect width="32" height="16" fill="#CE1126" />
      <rect y="16" width="32" height="16" fill="#FFFFFF" />
    </g>
  </svg>
);

const flags = [
  { name: 'France', code: 'FR', component: FlagFR },
  { name: 'Canada', code: 'CA', component: FlagCA },
  { name: 'Belgique', code: 'BE', component: FlagBE },
  { name: 'Suisse', code: 'CH', component: FlagCH },
  { name: 'Luxembourg', code: 'LU', component: FlagLU },
  { name: 'Monaco', code: 'MC', component: FlagMC },
];

// ---------------------------------------------------------------------------
// LIENS DE NAVIGATION — routes en français
// ---------------------------------------------------------------------------
const navigationLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Tarifs et formules', href: '/tarifs' },
  { name: 'Guide d’installation', href: '/installation' },
  { name: 'Avis clients', href: '/avis' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog et guides', href: '/blog' },
  { name: 'Assistance', href: '/assistance' },
  { name: 'Programme revendeur', href: '/revendeur' },
];

const legalLinks = [
  { name: 'À propos', href: '/a-propos' },
  { name: 'Conditions générales', href: '/conditions' },
  { name: 'Politique de confidentialité', href: '/confidentialite' },
  { name: 'Politique de remboursement', href: '/remboursement' },
  { name: 'Politique DMCA', href: '/dmca' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A1B33] text-[#FFFFFF] pt-16 border-t-4 border-[#0055A4] overflow-hidden">
      {/* Ligne d’accent tricolore en haut */}
      <div className="absolute inset-x-0 top-0 h-1 flex">
        <div className="flex-1 bg-[#0055A4]" />
        <div className="flex-1 bg-[#FFFFFF]" />
        <div className="flex-1 bg-[#EF4135]" />
      </div>

      {/* Corps du footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Colonne marque */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="flex items-center gap-3 mb-5 group inline-flex"
                aria-label="Abonnement IPTV - Accueil"
              >
                <div className="w-auto h-12 flex items-center group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/img/banner-logo.png"
                    alt="Logo abonnement IPTV"
                    width={180}
                    height={48}
                    className="object-contain h-full w-auto"
                    loading="lazy"
                  />
                </div>
              </Link>

              <p className="text-sm md:text-base font-bold text-[#FFFFFF]/90 max-w-sm leading-relaxed mb-5">
                Découvrez le futur de la télévision française avec{' '}
                <strong className="text-[#FFCD00]">un abonnement IPTV</strong>{' '}
                premium. Diffusez des flux IPTV en 4K à Paris, Marseille, Lyon, Toulouse, Nice, Nantes, Strasbourg, Bordeaux, Lille, Montpellier et Rennes.
              </p>

              {/* Badge de couverture */}
              <div className="inline-flex items-center flex-wrap gap-2 sm:gap-3 py-1.5 px-3 mb-6 rounded-full bg-[#122A4D] border border-[#0055A4]/50 backdrop-blur-md w-fit shadow-sm">
                <span className="text-[10px] uppercase font-black tracking-wider text-[#FFFFFF]/70 shrink-0">
                  Desservis :
                </span>
                <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 flex-wrap">
                  {flags.map((flag) => {
                    const FlagComp = flag.component;
                    return (
                      <div
                        key={flag.code}
                        className="flex items-center gap-1 group cursor-default"
                        title={flag.name}
                      >
                        <FlagComp />
                        <span className="text-[10px] font-black uppercase text-[#FFFFFF] group-hover:text-[#FFCD00] transition-colors">
                          {flag.code}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Icônes sociales */}
            <div className="flex items-center gap-3">
              <a
                href={CONSTANTS.SOCIALS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivre l’abonnement IPTV sur Twitter"
                className="group w-10 h-10 rounded-full bg-[#122A4D] border border-[#1E3A5F] flex items-center justify-center hover:bg-[#FFCD00] hover:border-[#FFCD00] transition-all duration-300 active:scale-95"
              >
                <Twitter className="w-4 h-4 text-[#FFFFFF]/80 group-hover:text-[#0A1B33] transition-colors" />
              </a>

              <a
                href={CONSTANTS.SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivre l’abonnement IPTV sur Instagram"
                className="group w-10 h-10 rounded-full bg-[#122A4D] border border-[#1E3A5F] flex items-center justify-center hover:bg-[#FFCD00] hover:border-[#FFCD00] transition-all duration-300 active:scale-95"
              >
                <Instagram className="w-4 h-4 text-[#FFFFFF]/80 group-hover:text-[#0A1B33] transition-colors" />
              </a>

              <a
                href={CONSTANTS.SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivre l’abonnement IPTV sur Facebook"
                className="group w-10 h-10 rounded-full bg-[#122A4D] border border-[#1E3A5F] flex items-center justify-center hover:bg-[#FFCD00] hover:border-[#FFCD00] transition-all duration-300 active:scale-95"
              >
                <Facebook className="w-4 h-4 text-[#FFFFFF]/80 group-hover:text-[#0A1B33] transition-colors" />
              </a>
            </div>
          </div>

          {/* Liens de navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-[#FFFFFF] font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#0055A4] pb-1 inline-block">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#FFFFFF]/80 hover:text-[#FFCD00] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catégories de chaînes */}
          <div className="lg:col-span-3">
            <h3 className="text-[#FFFFFF] font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#0055A4] pb-1 inline-block">
              Chaînes incluses
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {channelsData.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/chaines/${category.slug}`}
                    className="text-[#FFFFFF]/80 hover:text-[#FFCD00] transition-colors block"
                  >
                    {category.name.replace(/\s*\([^)]*\)/g, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens légaux */}
          <div className="lg:col-span-2">
            <h3 className="text-[#FFFFFF] font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#0055A4] pb-1 inline-block">
              Légal
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#FFFFFF]/80 hover:text-[#FFCD00] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* BARRE INFÉRIEURE AVEC FOND MARINE & CARTES DE PAIEMENT CLAIRES       */}
      {/* ------------------------------------------------------------------- */}
      <div className="relative border-t border-[#1E3A5F] py-6 px-6 lg:px-12 shadow-lg z-20 bg-[#122A4D]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Copyright */}
          <p className="text-base md:text-sm font-extrabold text-[#FFFFFF] tracking-wide text-center md:text-left drop-shadow-sm">
            © {new Date().getFullYear()} <span className="text-[#FFCD00]">Abonnement IPTV</span>. Tous droits réservés.
          </p>

          {/* Cartes de paiement */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {CONSTANTS.PAYMENT_METHODS.map((item) => (
              <div
                key={item.name}
                className="relative h-10 w-16 shrink-0 rounded-lg border border-[#0055A4]/50 bg-[#FFFFFF] p-1 shadow-sm hover:scale-105 hover:border-[#FFCD00] hover:bg-[#FFCD00]/20 transition-all duration-200"
                title={item.name}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
                  className="object-contain p-1 filter drop-shadow-sm opacity-95"
                  loading="lazy"
                  sizes="64px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}