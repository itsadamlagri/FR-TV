'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Verrouille le défilement du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  // Ferme le menu mobile lors d'un changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // -------------------------------------------------------------------------
  // LIENS DE NAVIGATION — routes en français
  // -------------------------------------------------------------------------
  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Installation', href: '/installation' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A1B33]/80 backdrop-blur-md border-b border-[#1E3A5F] py-2.5 shadow-2xl'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo de marque */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group" aria-label="Abonnement IPTV - Accueil">
                <div className="h-10 flex items-center group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/img/banner-logo.png"
                    alt="Logo abonnement IPTV"
                    width={160}
                    height={40}
                    className="object-contain h-full w-auto"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Pilule de navigation desktop */}
            <nav className="hidden lg:block" aria-label="Navigation principale">
              <ul className="flex items-center gap-1.5 bg-[#FFFFFF] backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D6DCE3] shadow-lg">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`font-black uppercase tracking-wider text-xs xl:text-sm transition-all duration-200 px-4 py-2 rounded-full inline-block ${
                          active
                            ? 'bg-[#0055A4] text-[#FFFFFF] shadow-md'
                            : 'text-[#0A1B33] hover:text-[#0055A4] hover:bg-[#0055A4]/10'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Bouton CTA desktop */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/tarifs"
                className="px-6 py-2.5 rounded-full bg-[#0055A4] text-[#FFFFFF] font-black tracking-widest uppercase text-xs xl:text-sm hover:bg-[#EF4135] transition-all duration-200 shadow-md active:scale-95 hover:scale-105 border-2 border-[#0055A4] hover:border-[#EF4135]"
              >
                Commencer
              </Link>
            </div>

            {/* Bouton menu mobile / tablette */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#FFFFFF] p-2.5 rounded-xl bg-[#122A4D] border border-[#1E3A5F] focus:outline-none z-50 relative active:scale-95 transition-transform cursor-pointer"
                aria-label={isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6 text-[#FFFFFF]" /> : <Menu className="w-6 h-6 text-[#FFFFFF]" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tiroir overlay mobile plein écran */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A1B33]/98 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col justify-center items-center ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation mobile"
      >
        <div className="w-full max-w-sm px-6 flex flex-col items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`w-full text-center py-4 rounded-2xl text-lg font-black tracking-widest uppercase transition-all duration-200 border-2 ${
                isActive(link.href)
                  ? 'text-[#FFFFFF] bg-[#0055A4] border-[#0055A4] shadow-lg'
                  : 'text-[#FFFFFF] bg-[#122A4D] border-[#1E3A5F] hover:bg-[#0055A4] hover:border-[#0055A4]'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="w-full pt-4">
            <Link
              href="/tarifs"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-4 rounded-2xl bg-[#0055A4] text-[#FFFFFF] border-2 border-[#0055A4] font-black text-lg tracking-widest uppercase shadow-xl transition-all duration-200 hover:bg-[#EF4135] hover:border-[#EF4135] active:scale-95"
            >
              Commencer
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}