import React, { useState, useEffect } from 'react';
import { AUTHOR_INFO } from '../data/portfolioData';
import { Menu, X, ExternalLink, Sparkles } from 'lucide-react';
import { AmazonIcon } from './BrandIcons';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Books & Store', href: '#books' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3.5'
          : 'bg-white/60 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-slate-900 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs shadow-sm group-hover:bg-indigo-600 transition-colors">
              SH
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                {AUTHOR_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium hidden sm:inline-block">
                AI Operations · Author · UN Volunteer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-slate-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <a
              href={AUTHOR_INFO.amazonStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg transition-colors whitespace-nowrap shadow-xs"
              title="Visit Samsul Hussain's Amazon Author Store"
            >
              <AmazonIcon className="w-3.5 h-3.5 text-amber-600" />
              <span>Amazon Store</span>
              <ExternalLink className="w-3 h-3 text-amber-700 ml-0.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[58px] bg-white/98 backdrop-blur-xl border-b border-slate-200 p-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-slate-800 hover:text-indigo-600 transition-colors py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={AUTHOR_INFO.amazonStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-amber-900 bg-amber-50 border border-amber-300 rounded-lg"
              >
                <AmazonIcon className="w-4 h-4 text-amber-600" />
                <span>Visit Amazon Author Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              {onOpenConsultation && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Request Publishing Consultation</span>
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
