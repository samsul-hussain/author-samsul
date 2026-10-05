import React from 'react';
import { AUTHOR_INFO } from '../data/portfolioData';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { AmazonIcon, AmazonKdpLogo, UnvLogo, HarvardLogo } from './BrandIcons';

interface HeroProps {
  onExploreBooks: () => void;
  onOpenConsultation: () => void;
  photoUrl: string;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreBooks,
  onOpenConsultation,
  photoUrl,
}) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden border-b border-slate-100">
      {/* Subtle modern ambient background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-indigo-50/60 via-amber-50/40 to-indigo-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Short, title-related headline & clean actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            
            {/* Minimal metadata chips */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2.5 text-xs font-semibold text-slate-500 mb-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-amber-700 bg-amber-50/80 px-2.5 py-1 rounded-md border border-amber-200/80">
                <AmazonKdpLogo className="w-3.5 h-3.5" />
                Author &amp; Publisher
              </span>
              <span className="inline-flex items-center gap-1.5 text-indigo-600 bg-indigo-50/80 px-2.5 py-1 rounded-md border border-indigo-100/80">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                AI Operations
              </span>
              <span className="inline-flex items-center gap-1.5 text-sky-700 bg-sky-50/80 px-2.5 py-1 rounded-md border border-sky-200/80">
                <UnvLogo className="w-3.5 h-3.5" />
                UN Volunteer
              </span>
            </div>

            {/* Focused Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4 [text-wrap:balance]">
              Author, Publisher &amp;{' '}
              <span className="text-amber-600">AI Operations</span>
            </h1>

            {/* Clear value proposition */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 mb-7 [text-wrap:balance]">
              Helping authors and creators take books <strong className="font-semibold text-slate-900">from scratch to published</strong> on Amazon KDP. Professional interior layout, cover design, keyword ranking, and AI-accelerated publishing workflows.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
              <button
                onClick={onExploreBooks}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-md shadow-slate-900/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Explore Books</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 text-sm font-semibold text-slate-800 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Publishing Services</span>
              </button>

              <a
                href={AUTHOR_INFO.amazonProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-xl transition-colors"
              >
                <AmazonIcon className="w-4 h-4 text-amber-600" />
                <span>Amazon Profile</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
              </a>
            </div>

            {/* Credentials Badges */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs">
              <div className="flex items-center gap-2 bg-slate-50/80 hover:bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 shadow-2xs transition-colors">
                <HarvardLogo className="w-5 h-5 shrink-0 rounded-sm" />
                <div className="text-left leading-tight">
                  <div className="font-bold text-slate-900 text-xs">Harvard CS50x</div>
                  <div className="text-[10px] text-slate-500">Computer Science</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-amber-50/60 hover:bg-amber-50 border border-amber-200/80 rounded-xl px-3 py-2 shadow-2xs transition-colors">
                <AmazonKdpLogo className="w-5 h-5 shrink-0 rounded-sm" />
                <div className="text-left leading-tight">
                  <div className="font-bold text-slate-900 text-xs">Amazon KDP</div>
                  <div className="text-[10px] text-amber-800">Published Author</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-sky-50/60 hover:bg-sky-50 border border-sky-200/80 rounded-xl px-3 py-2 shadow-2xs transition-colors">
                <UnvLogo className="w-5 h-5 shrink-0 rounded-sm" />
                <div className="text-left leading-tight">
                  <div className="font-bold text-slate-900 text-xs">UN Volunteers</div>
                  <div className="text-[10px] text-sky-800">Media Team SDG 17</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: PERMANENT, REAL PROFILE PHOTO OF SAMSUL HUSSAIN */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center order-1 lg:order-2">
            <div className="relative group">
              
              {/* Subtle ambient glow behind the circle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/40 via-indigo-100/30 to-amber-100/40 rounded-full blur-2xl transform scale-105 pointer-events-none" />

              {/* Permanent Circle frame with white border, double ring, and elegant soft shadow */}
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full p-2 bg-white ring-8 ring-slate-100/90 shadow-2xl shadow-slate-300/70 border-4 border-white overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src={photoUrl}
                  alt="Samsul Hussain - Author, Publisher & AI Operations"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  className="w-full h-full object-cover object-center rounded-full"
                  onError={(e) => {
                    // Fail-safe: if relative asset fails, fallback to direct GitHub avatar URL
                    const img = e.currentTarget;
                    if (img.src !== 'https://avatars.githubusercontent.com/u/154060887?v=4') {
                      img.src = 'https://avatars.githubusercontent.com/u/154060887?v=4';
                    }
                  }}
                />
              </div>

              {/* Floating verified badge with Amazon KDP logo */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-right-2 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-full px-3.5 py-1.5 shadow-lg shadow-slate-200/80 flex items-center gap-2.5 pointer-events-none">
                <AmazonKdpLogo className="w-5 h-5 shrink-0" />
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-900 leading-tight">Amazon KDP Author</div>
                  <div className="text-[9px] text-slate-500 leading-tight">Self-Publishing Specialist</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
