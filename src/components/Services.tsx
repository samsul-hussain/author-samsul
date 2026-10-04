import React, { useState } from 'react';
import { SERVICES_DATA, TESTIMONIALS } from '../data/portfolioData';
import { ServicePackage } from '../types';
import { ServiceInquiryModal } from './ServiceInquiryModal';
import {
  FileText,
  Palette,
  Search,
  Bot,
  CheckCircle2,
  Clock,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Quote,
  Star,
  ShieldCheck
} from 'lucide-react';
import { UpworkIcon, FiverrIcon } from './BrandIcons';

export const Services: React.FC = () => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const getServiceIcon = (name: ServicePackage['iconName']) => {
    switch (name) {
      case 'file-text':
        return <FileText className="w-5 h-5 text-amber-600" />;
      case 'palette':
        return <Palette className="w-5 h-5 text-indigo-600" />;
      case 'search':
        return <Search className="w-5 h-5 text-emerald-600" />;
      case 'bot':
        return <Bot className="w-5 h-5 text-cyan-600" />;
    }
  };

  const handleOpenConsultation = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setInquiryModalOpen(true);
  };

  return (
    <section id="services" className="py-20 md:py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Publishing &amp; AI Engineering</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500">Expert Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display [text-wrap:balance]">
              From Scratch to Published: Book &amp; AI Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Helping authors launch successfully on Amazon KDP. Complete interior typographical formatting, conversion cover design, algorithmic A10 keyword research, and custom generative AI pipelines with verified Fiverr &amp; Upwork delivery.
            </p>
          </div>

          <button
            onClick={() => handleOpenConsultation()}
            className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all self-start md:self-auto cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span>Request Custom Scope</span>
          </button>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all shadow-xs group"
            >
              <div>
                {/* Fiverr Gig Showcase Image if available */}
                {service.gigImage && (
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100 border-b border-slate-100 group/img">
                    <img
                      src={service.gigImage}
                      alt={`${service.title} Fiverr Gig Sample`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                      onError={(e) => {
                        e.currentTarget.parentElement?.classList.add('hidden');
                      }}
                    />
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/95 text-slate-800 backdrop-blur-md shadow-xs border border-slate-200">
                      <FiverrIcon className="w-3.5 h-3.5 text-[#1dbf73]" />
                      <span>Fiverr Portfolio</span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-7">
                  {/* Header & Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1.5 font-display group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 mb-3 font-sans font-medium">
                    {service.shortDesc}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5">
                    {service.fullDesc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-5">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                      Key Deliverables Included:
                    </div>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Meta details */}
                  <div className="py-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>Turnaround: <strong className="text-slate-800 font-semibold">{service.turnaround}</strong></span>
                    </div>
                    <div className="text-slate-500">
                      Platforms: <span className="text-slate-700 font-medium">{service.platforms.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50">
                <button
                  onClick={() => handleOpenConsultation(service.id)}
                  className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={service.upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 text-[#14A800] hover:text-[#108A00] text-xs font-semibold rounded-lg border border-slate-200 shadow-2xs transition-colors"
                  >
                    <UpworkIcon className="w-3.5 h-3.5 text-[#14A800]" />
                    <span>Upwork</span>
                    <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                  </a>
                  <a
                    href={service.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg border border-emerald-200 transition-colors"
                  >
                    <FiverrIcon className="w-3.5 h-3.5" />
                    <span>Fiverr Gig</span>
                    <ExternalLink className="w-2.5 h-2.5 text-emerald-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials / Verified Reviews */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Client Recommendations</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                Endorsements from Authors &amp; Publishing Partners
              </h3>
            </div>
            <div className="flex items-center gap-1.5 bg-amber-50/80 border border-amber-200/80 px-3.5 py-1.5 rounded-xl self-start sm:self-auto">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-900 ml-1">5.0 / 5.0</span>
              <span className="text-[11px] text-slate-500">· 100% Five-Star</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 hover:bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  {/* LinkedIn Profile Header */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3">
                      {/* Avatar with Open to Work ring */}
                      <div className="relative shrink-0">
                        <div className={`w-11 h-11 rounded-full ${t.avatarColor || 'bg-slate-800'} text-white font-bold text-sm flex items-center justify-center ring-2 ${t.openToWork ? 'ring-emerald-500' : 'ring-slate-200'} shadow-xs`}>
                          {t.initials || t.name.slice(0, 2).toUpperCase()}
                        </div>
                        {t.openToWork && (
                          <span
                            title="Open to work"
                            className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-600/30"
                          />
                        )}
                      </div>

                      {/* Name, Connection badge & Open to Work tag */}
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-sm font-bold text-slate-900 leading-tight">
                            {t.name}
                          </span>
                          {t.connection && (
                            <span className="text-[10px] font-semibold text-slate-500 bg-slate-200/70 px-1 rounded leading-none py-0.5">
                              {t.connection}
                            </span>
                          )}
                          {t.openToWork && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                              Open to work
                            </span>
                          )}
                        </div>

                        {/* Title and Company */}
                        <p className="text-xs text-slate-600 mt-1 leading-snug">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Service Badge, Rating & Date */}
                  <div className="flex flex-wrap items-center justify-between gap-2 py-2 px-3 bg-white rounded-xl border border-slate-200/80 mb-4 text-xs">
                    <span className="inline-flex items-center font-bold text-indigo-700 text-xs">
                      {t.service}
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="font-bold text-slate-900 text-[11px]">{t.rating.toFixed(1)}</span>
                      <span>·</span>
                      <span className="text-[11px] text-slate-500">{t.date}</span>
                    </div>
                  </div>

                  {/* Review Quote Text */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Client Project
                  </span>
                  <span>Direct Recommendation</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Inquiry Modal */}
      <ServiceInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        preselectedServiceId={selectedServiceId}
      />
    </section>
  );
};
