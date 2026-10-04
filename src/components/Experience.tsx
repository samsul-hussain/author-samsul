import React, { useState } from 'react';
import { TIMELINE_MILESTONES } from '../data/portfolioData';
import { Milestone } from '../types';
import { Globe, Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');

  const filteredMilestones = filterType === 'all'
    ? TIMELINE_MILESTONES
    : TIMELINE_MILESTONES.filter((m) => m.type === filterType);

  const getTypeIcon = (type: Milestone['type']) => {
    switch (type) {
      case 'volunteering':
        return <Globe className="w-4 h-4 text-emerald-600" />;
      case 'work':
        return <Briefcase className="w-4 h-4 text-indigo-600" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <section id="experience" className="py-20 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2.5">
              <Calendar className="w-4 h-4 text-indigo-600" />
              <span>Career Trajectory</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500">Milestones &amp; Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display [text-wrap:balance]">
              Experience &amp; Milestones
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From lecturing in biology to United Nations volunteering, Harvard CS50 computer science, and independent Amazon KDP authoring.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto self-start md:self-auto">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'all'
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setFilterType('volunteering')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'volunteering'
                  ? 'bg-white text-emerald-800 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              UN Volunteering
            </button>
            <button
              onClick={() => setFilterType('work')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'work'
                  ? 'bg-white text-indigo-800 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Work &amp; Publishing
            </button>
            <button
              onClick={() => setFilterType('education')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'education'
                  ? 'bg-white text-amber-800 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Education &amp; AI
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {filteredMilestones.map((m, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-white border-2 border-slate-400 group-hover:border-indigo-600 flex items-center justify-center shadow-xs transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-indigo-600" />
              </div>

              {/* Milestone Card */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-7 hover:border-slate-300 hover:bg-white transition-all shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                      {getTypeIcon(m.type)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                        {m.title}
                      </h3>
                      <div className="text-xs font-semibold text-indigo-600">
                        {m.organization}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 self-start sm:self-auto font-mono">
                    <span className="text-amber-800 font-semibold">{m.period}</span>
                    {m.location && (
                      <>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <MapPin className="w-3 h-3" />
                          <span>{m.location}</span>
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 font-sans">
                  {m.summary}
                </p>

                {/* Achievements List */}
                <div className="space-y-1.5 pt-2.5 border-t border-slate-200/80">
                  {m.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Badge text */}
                <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-medium text-slate-600">{m.badgeText}</span>
                  <span className="text-slate-400">Verified Milestone</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
