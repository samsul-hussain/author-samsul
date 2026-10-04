import React, { useState, useEffect } from 'react';
import { Book } from '../types';
import { X, ExternalLink, Star, CheckCircle, BookOpen, Share2, Check } from 'lucide-react';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({ book, onClose }) => {
  const [selectedFormatIndex, setSelectedFormatIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'excerpt' | 'specs'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (book) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [book, onClose]);

  if (!book) return null;

  const currentFormat = book.formats[selectedFormatIndex] || book.formats[0];

  const handleShare = () => {
    navigator.clipboard.writeText(book.amazonUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Background click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl z-10 text-slate-800">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Book Cover & Quick Purchase */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[260px] rounded-xl overflow-hidden shadow-lg border border-slate-200 mb-5 group">
              <img
                src={book.coverImage}
                alt={`${book.title} book cover`}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {book.isBestseller && (
                <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded shadow uppercase tracking-wider">
                  Bestseller
                </div>
              )}
              {book.isNewRelease && (
                <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow uppercase tracking-wider">
                  New Release
                </div>
              )}
            </div>

            {/* Formats Selector */}
            <div className="w-full max-w-[260px] space-y-2 mb-5">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Select Edition
              </div>
              <div className="grid grid-cols-1 gap-1.5">
                {book.formats.map((fmt, idx) => (
                  <button
                    key={fmt.type}
                    onClick={() => setSelectedFormatIndex(idx)}
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                      selectedFormatIndex === idx
                        ? 'border-indigo-600 bg-indigo-50/70 text-slate-900 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-left">
                      <div className="font-semibold text-slate-900">{fmt.type}</div>
                      {fmt.badge && (
                        <div className="text-[10px] text-amber-700 font-medium">{fmt.badge}</div>
                      )}
                    </div>
                    <div className="font-bold text-sm text-indigo-700 tabular-nums">
                      {fmt.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full max-w-[260px] space-y-2">
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Buy {currentFormat.type} on Amazon</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {book.lookInsideUrl && (
                <a
                  href={book.lookInsideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 text-xs font-semibold rounded-xl transition-all cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Look Inside Sample on Amazon</span>
                  <ExternalLink className="w-3 h-3 text-indigo-500" />
                </a>
              )}

              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Copy Amazon Listing Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Book Details & Excerpt */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              {/* Category & Rating */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="text-indigo-600 font-semibold">{book.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span className="font-bold text-slate-900">{book.rating}</span>
                  <span className="text-slate-500">({book.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 font-display">
                {book.title}
              </h2>
              <div className="text-sm sm:text-base text-amber-800 font-serif italic mb-4">
                {book.subtitle}
              </div>

              {/* Tab Navigation */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg mb-4 border border-slate-200">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-all cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-white text-slate-900 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Overview &amp; Highlights
                </button>
                <button
                  onClick={() => setActiveTab('excerpt')}
                  className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'excerpt'
                      ? 'bg-white text-amber-900 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>Look Inside Sample</span>
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-all cursor-pointer ${
                    activeTab === 'specs'
                      ? 'bg-white text-slate-900 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Publishing Specs
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {book.synopsis}
                  </p>

                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-bold text-slate-900 mb-2.5">
                      Key Highlights:
                    </h3>
                    <ul className="space-y-2">
                      {book.keyHighlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'excerpt' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-xs font-serif italic text-amber-900 font-semibold">
                      {book.sampleExcerpt.chapterTitle}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                      Author Preview
                    </span>
                  </div>

                  <div className="space-y-2.5 font-serif text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {book.sampleExcerpt.text.map((paragraph, idx) => (
                      <p key={idx} className="first-letter:text-xl first-letter:font-bold first-letter:text-amber-800">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span>Full chapters available on Amazon Kindle &amp; Print.</span>
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-800 font-bold inline-flex items-center gap-1"
                    >
                      <span>Buy Full Book</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2 text-xs text-slate-700 animate-in fade-in duration-150">
                  <div className="flex justify-between py-1.5 border-b border-slate-200">
                    <span className="text-slate-500">Publisher:</span>
                    <span className="font-semibold text-slate-900">{book.publisher}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200">
                    <span className="text-slate-500">Publication Year:</span>
                    <span className="font-semibold text-slate-900">{book.publishDate}</span>
                  </div>
                  {book.asinOrIsbn && (
                    <div className="flex justify-between py-1.5 border-b border-slate-200">
                      <span className="text-slate-500">ASIN / ID:</span>
                      <span className="font-mono text-indigo-700 font-bold">{book.asinOrIsbn}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-1.5 border-b border-slate-200">
                    <span className="text-slate-500">Language:</span>
                    <span className="font-semibold text-slate-900">English</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Print Quality:</span>
                    <span className="font-semibold text-slate-900">Amazon KDP Premium White Paper &amp; CMYK</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom note */}
            <div className="mt-6 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>Prime shipping available on Amazon.</span>
              <span className="text-slate-400">100% Quality Guaranteed</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
