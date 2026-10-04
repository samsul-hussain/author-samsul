import React from 'react';
import { AUTHOR_INFO, heroPortraitCircle } from '../data/portfolioData';
import { ArrowUp, BookOpen, ExternalLink, Heart } from 'lucide-react';
import { UpworkIcon, FiverrIcon, AmazonKdpLogo, UnvLogo, HarvardLogo } from './BrandIcons';

interface FooterProps {
  photoUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ photoUrl }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          
          {/* Brand & Author Profile with Photo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              {/* Samsul's Permanent Photo in Footer */}
              <div className="relative shrink-0">
                <img
                  src={photoUrl}
                  alt={AUTHOR_INFO.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-amber-500/20"
                />
                <div className="absolute -bottom-1 -right-1 bg-amber-500 rounded-full p-1 border border-white shadow-xs">
                  <AmazonKdpLogo className="w-3 h-3 text-white" />
                </div>
              </div>
              
              <div>
                <span className="text-base font-bold text-slate-900 font-display block">
                  {AUTHOR_INFO.name}
                </span>
                <span className="text-xs text-slate-500 font-medium block">
                  AI Operations Strategist &amp; Amazon KDP Author
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">
                    Harvard CS50x
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded">
                    UNV Media
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Empowering digital frontiers through AI operations, rigorous non-fiction writing, and educational storytelling for young readers worldwide.
            </p>
            
            <div className="flex items-center gap-2 pt-1 text-[11px] text-emerald-800 font-medium">
              <UnvLogo className="w-3.5 h-3.5 shrink-0" />
              <span>Active contributor to UN SDG 17: Partnerships for the Goals.</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <a href="#about" className="hover:text-indigo-600 transition-colors">About &amp; Background</a>
              </li>
              <li>
                <a href="#books" className="hover:text-indigo-600 transition-colors">Published Books &amp; Store</a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600 transition-colors">Publishing &amp; AI Services</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience &amp; Certifications</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact &amp; Consultations</a>
              </li>
            </ul>
          </div>

          {/* Publications & Storefront */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Amazon KDP Publications
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.amazon.co.uk/Prophecy-Proven-Spoken-Years-Science/dp/B0H9BRF4ZW?ref_=ast_author_dp&th=1&psc=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-700 transition-colors inline-flex items-center gap-1.5 text-slate-700 font-medium"
                >
                  <AmazonKdpLogo className="w-3.5 h-3.5 shrink-0" />
                  <span>Prophecy Proven: Spoken 1,400 Years Ago</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/dp/B0GNBZC681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-700 transition-colors inline-flex items-center gap-1.5 text-slate-700 font-medium"
                >
                  <AmazonKdpLogo className="w-3.5 h-3.5 shrink-0" />
                  <span>Sunnah Fruits of Jannah: Children&apos;s Activity Book</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.co.uk/dp/B0HDMHCMTL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-700 transition-colors inline-flex items-center gap-1.5 text-slate-700 font-medium"
                >
                  <AmazonKdpLogo className="w-3.5 h-3.5 shrink-0" />
                  <span>The Fish That Swallowed a Prophet</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.co.uk/dp/B0GMF2377T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-700 transition-colors inline-flex items-center gap-1.5 text-slate-700 font-medium"
                >
                  <AmazonKdpLogo className="w-3.5 h-3.5 shrink-0" />
                  <span>Islamic Historical Places Coloring Book</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.co.uk/dp/B0GHLHJ62R"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-700 transition-colors inline-flex items-center gap-1.5 text-slate-700 font-medium"
                >
                  <AmazonKdpLogo className="w-3.5 h-3.5 shrink-0" />
                  <span>A Fun Colouring Book for Kids (Ages 3-6)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li className="pt-1.5">
                <a
                  href={AUTHOR_INFO.amazonStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 hover:text-amber-900 font-bold inline-flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                  <span>Visit Amazon Author Store</span>
                  <ExternalLink className="w-3 h-3 text-amber-700" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div>
            &copy; {new Date().getFullYear()} {AUTHOR_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={AUTHOR_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={AUTHOR_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href={AUTHOR_INFO.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#14A800] transition-colors"
            >
              <UpworkIcon className="w-3.5 h-3.5 text-[#14A800]" />
              <span>Upwork</span>
            </a>
            <a
              href={AUTHOR_INFO.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-emerald-600 transition-colors"
            >
              <FiverrIcon className="w-3.5 h-3.5" />
              <span>Fiverr</span>
            </a>
            
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer shadow-2xs ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
