import React, { useState, useRef } from 'react';
import { AUTHOR_INFO, portraitCircle, portraitHoldingBook, portraitEditorial } from '../data/portfolioData';
import { ArrowRight, BookOpen, Sparkles, Camera, Check, Upload, RefreshCw, X } from 'lucide-react';
import { AmazonIcon, AmazonKdpLogo, UnvLogo, HarvardLogo } from './BrandIcons';

interface HeroProps {
  onExploreBooks: () => void;
  onOpenConsultation: () => void;
  photoUrl: string;
  onUpdatePhoto?: (photo: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreBooks,
  onOpenConsultation,
  photoUrl,
  onUpdatePhoto,
}) => {
  const [isPhotoPickerOpen, setIsPhotoPickerOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectPhoto = (photo: string) => {
    if (onUpdatePhoto) {
      onUpdatePhoto(photo);
    }
    setIsPhotoPickerOpen(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result && onUpdatePhoto) {
          onUpdatePhoto(result);
        }
        setIsPhotoPickerOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

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

          {/* Right Column: PERMANENT CIRCLE SHAPED PHOTO WITH SOFT SHADOW & OPTIONAL PHOTO SELECTOR */}
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
                  className="w-full h-full object-cover object-center rounded-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full rounded-full flex flex-col items-center justify-center p-6 bg-slate-100 text-center';
                      fallback.innerHTML = `
                        <div class="text-indigo-600 font-bold text-2xl mb-1">SH</div>
                        <div class="text-xs font-semibold text-slate-700">Samsul Hussain</div>
                        <div class="text-[10px] text-slate-500">Author & Publisher</div>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />

                {/* Subtle photo selector button overlay on hover */}
                {onUpdatePhoto && (
                  <button
                    onClick={() => setIsPhotoPickerOpen(!isPhotoPickerOpen)}
                    title="Change or select author photo"
                    aria-label="Change photo"
                    className="absolute bottom-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-2.5 rounded-full shadow-lg backdrop-blur-xs transition-opacity opacity-80 hover:opacity-100 cursor-pointer"
                  >
                    <Camera className="w-4 h-4 text-amber-300" />
                  </button>
                )}
              </div>

              {/* Floating verified badge with Amazon KDP logo */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-right-2 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-full px-3.5 py-1.5 shadow-lg shadow-slate-200/80 flex items-center gap-2.5 pointer-events-none">
                <AmazonKdpLogo className="w-5 h-5 shrink-0" />
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-900 leading-tight">Amazon KDP Author</div>
                  <div className="text-[9px] text-slate-500 leading-tight">Self-Publishing Specialist</div>
                </div>
              </div>

              {/* Hidden File Input for Custom Photo Upload */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />

              {/* Photo Switcher Modal / Dropdown */}
              {isPhotoPickerOpen && (
                <div className="absolute top-0 right-0 z-50 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                    <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                      <Camera className="w-4 h-4 text-amber-500" />
                      Select Author Portrait
                    </span>
                    <button
                      onClick={() => setIsPhotoPickerOpen(false)}
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    {/* Option 1: Official Circle Portrait */}
                    <button
                      onClick={() => handleSelectPhoto(portraitCircle)}
                      className={`w-full flex items-center gap-3 p-2 rounded-xl border text-left transition-all cursor-pointer ${
                        photoUrl === portraitCircle
                          ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500/20'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <img
                        src={portraitCircle}
                        alt="Official Circle Portrait"
                        className="w-11 h-11 rounded-full object-cover shrink-0 border border-slate-200"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                          Official Circle Portrait
                          {photoUrl === portraitCircle && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                        </div>
                        <div className="text-[10px] text-slate-500">Official author portrait (Recommended)</div>
                      </div>
                    </button>

                    {/* Option 2: Holding Book */}
                    <button
                      onClick={() => handleSelectPhoto(portraitHoldingBook)}
                      className={`w-full flex items-center gap-3 p-2 rounded-xl border text-left transition-all cursor-pointer ${
                        photoUrl === portraitHoldingBook
                          ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500/20'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <img
                        src={portraitHoldingBook}
                        alt="Holding Published Book"
                        className="w-11 h-11 rounded-full object-cover shrink-0 border border-slate-200"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                          Holding Published Book
                          {photoUrl === portraitHoldingBook && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                        </div>
                        <div className="text-[10px] text-slate-500">Holding physical author edition</div>
                      </div>
                    </button>

                    {/* Option 3: Editorial Studio Portrait */}
                    <button
                      onClick={() => handleSelectPhoto(portraitEditorial)}
                      className={`w-full flex items-center gap-3 p-2 rounded-xl border text-left transition-all cursor-pointer ${
                        photoUrl === portraitEditorial
                          ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500/20'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <img
                        src={portraitEditorial}
                        alt="Editorial Studio Portrait"
                        className="w-11 h-11 rounded-full object-cover shrink-0 border border-slate-200"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                          Editorial Studio Portrait
                          {photoUrl === portraitEditorial && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                        </div>
                        <div className="text-[10px] text-slate-500">Professional studio session</div>
                      </div>
                    </button>

                    {/* Option 4: Custom Upload */}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 mt-1 rounded-xl border border-dashed border-slate-300 hover:border-indigo-500 hover:bg-indigo-50/40 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Upload My Own Photo</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
