import React, { useState } from 'react';
import { BOOKS_DATA, AUTHOR_INFO } from '../data/portfolioData';
import { Book } from '../types';
import { BookDetailModal } from './BookDetailModal';
import { ExternalLink, Star, BookOpen, ShoppingBag, Eye, ArrowUpRight } from 'lucide-react';

export const BooksCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalBook, setActiveModalBook] = useState<Book | null>(null);

  const categories = [
    { id: 'all', label: `All Books (${BOOKS_DATA.length})` },
    { id: 'children', label: `Children & Activity (${BOOKS_DATA.filter((b) => b.category === 'children').length})` },
    { id: 'non-fiction', label: `Science & Research (${BOOKS_DATA.filter((b) => b.category === 'non-fiction').length})` },
  ];

  const filteredBooks = selectedCategory === 'all'
    ? BOOKS_DATA
    : BOOKS_DATA.filter((b) => b.category === selectedCategory);

  return (
    <section id="books" className="py-20 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2.5">
              <ShoppingBag className="w-4 h-4 text-amber-600" />
              <span>Published Works</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500">Amazon KDP Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display [text-wrap:balance]">
              Books &amp; Publications Showcase
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Published worldwide on Amazon KDP. Explore non-fiction science investigations, interactive children&apos;s activity books, and modern AI system guides.
            </p>
          </div>

          <a
            href={AUTHOR_INFO.amazonStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold rounded-xl transition-colors whitespace-nowrap self-start md:self-auto shadow-xs"
          >
            <span>Visit Amazon Author Store</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-fit mb-10 border border-slate-200 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <article
              key={book.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-xs"
            >
              {/* Cover Image Container */}
              <div
                className="relative aspect-[3/4] overflow-hidden bg-slate-50 cursor-pointer"
                onClick={() => setActiveModalBook(book)}
              >
                <img
                  src={book.coverImage}
                  alt={`${book.title} cover`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                  {book.isBestseller && (
                    <span className="bg-amber-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs uppercase tracking-wider">
                      Bestseller
                    </span>
                  )}
                  {book.isNewRelease && (
                    <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs uppercase tracking-wider">
                      New Release
                    </span>
                  )}
                </div>

                {/* Hover affordance */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 text-xs font-bold rounded-lg shadow-md">
                    <Eye className="w-4 h-4 text-indigo-600" />
                    <span>Look Inside &amp; Read Excerpt</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                <div>
                  {/* Category & Star Rating */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="text-indigo-600 font-semibold">{book.categoryLabel}</span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span className="font-bold text-slate-900">{book.rating}</span>
                      <span className="text-slate-400">({book.reviewCount})</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 mb-1 font-display group-hover:text-indigo-600 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-xs text-amber-800 font-serif italic mb-3">
                    {book.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {book.synopsis}
                  </p>

                  {/* Formats and Prices */}
                  <div className="pt-3 border-t border-slate-100 mb-5">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                      Available Formats
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-xs">
                      {book.formats.map((fmt) => (
                        <div
                          key={fmt.type}
                          className="bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1 text-slate-700 flex items-center gap-1.5"
                        >
                          <span className="font-medium">{fmt.type}</span>
                          <span className="font-bold text-amber-700 tabular-nums">{fmt.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setActiveModalBook(book)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Look Inside</span>
                  </button>

                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-all shadow-xs"
                  >
                    <span>Buy on Amazon</span>
                    <ExternalLink className="w-3 h-3 text-slate-950" />
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* Placeholder for upcoming titles */}
          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1 font-display">
              More Titles In Progress
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs mb-5">
              New Islamic activity workbooks, science companions, and autonomous AI system guides are continuously being authored and published.
            </p>
            <a
              href={AUTHOR_INFO.amazonAuthorCentralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 hover:underline"
            >
              <span>Follow on Amazon Author Central</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Book Detail Modal Drawer */}
      <BookDetailModal
        book={activeModalBook}
        onClose={() => setActiveModalBook(null)}
      />
    </section>
  );
};
