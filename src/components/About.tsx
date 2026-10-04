import React from 'react';
import { BookOpen, Cpu, Globe, GraduationCap, CheckCircle2 } from 'lucide-react';
import { HarvardLogo, UnvLogo, AmazonKdpLogo } from './BrandIcons';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2.5">
            <span>About Samsul Hussain</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Author, Publisher &amp; AI Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display [text-wrap:balance]">
            From Scratch to Published: Bridging Author Craft, Self-Publishing Mastery &amp; AI Operations.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Guiding writers, educators, and creators from initial concept to live, high-ranking Amazon KDP publications.
          </p>
        </div>

        {/* Two-Column Story Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-14">
          
          {/* Main Story */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p className="font-serif text-slate-900 text-base sm:text-lg italic border-l-2 border-amber-500 pl-4 py-1 bg-amber-50/40 rounded-r-lg">
                &ldquo;True publishing success connects authentic human storytelling with rigorous typography, conversion design, and intelligent AI automation.&rdquo;
              </p>

              <p>
                I am <strong className="text-slate-900 font-semibold">Samsul Hussain</strong>, an independent author, Amazon KDP publisher, and AI operations strategist. As a former College Lecturer in Biology at Sylhet Science and Technology College, my analytical foundation in physiological systems sparked my passion for research-backed literature.
              </p>

              <p>
                On Amazon KDP, I author and publish non-fiction titles like <strong className="text-amber-800 font-semibold italic">Prophecy Proven</strong> (investigating peer-reviewed science behind 1,400-year-old health traditions) and a rich catalog of educational children&apos;s storybooks including <strong className="text-amber-800 font-semibold italic">The Fish That Swallowed a Prophet</strong>, <strong className="text-amber-800 font-semibold italic">Sunnah Fruits of Jannah</strong>, and <strong className="text-amber-800 font-semibold italic">Islamic Historical Places</strong>.
              </p>

              <p>
                Equipped with a <strong className="text-slate-900 font-semibold">Harvard University CS50x Certificate</strong> and AI certifications from the <strong className="text-slate-900 font-semibold">University of Helsinki</strong>, I build automated self-publishing pipelines and script impactful digital media for the <strong className="text-emerald-800 font-semibold">United Nations Volunteers (UNV) Media Team</strong> supporting SDG 17.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Specializations:</span>
              <span className="bg-slate-100 px-2.5 py-1 rounded text-slate-700 font-medium">KDP Interior &amp; Cover Design</span>
              <span className="bg-slate-100 px-2.5 py-1 rounded text-slate-700 font-medium">AI Agent Workflows</span>
              <span className="bg-slate-100 px-2.5 py-1 rounded text-slate-700 font-medium">UN SDG 17 Media</span>
            </div>
          </div>

          {/* Academic Highlights & Foundations */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-5 font-display flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <span>Core Academic Credentials</span>
            </h3>

            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <HarvardLogo className="w-6 h-6 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-indigo-600 mb-0.5">
                    Computer Science
                  </div>
                  <div className="text-sm font-bold text-slate-900">Harvard University (CS50x)</div>
                  <p className="text-xs text-slate-500 mt-1">
                    Algorithmic data structures, web frameworks, and computational systems.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <AmazonKdpLogo className="w-6 h-6 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-amber-600 mb-0.5">
                    Independent Publishing
                  </div>
                  <div className="text-sm font-bold text-slate-900">Amazon KDP Author</div>
                  <p className="text-xs text-slate-500 mt-1">
                    Publishing science non-fiction and interactive children's educational books.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <UnvLogo className="w-6 h-6 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-sky-700 mb-0.5">
                    Global Volunteering
                  </div>
                  <div className="text-sm font-bold text-slate-900">United Nations Volunteers (UNV)</div>
                  <p className="text-xs text-slate-500 mt-1">
                    Media Team member developing digital outreach for SDG 17 partnerships.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-[10px] uppercase tracking-wider font-bold text-cyan-700 mb-0.5">
                  Artificial Intelligence
                </div>
                <div className="text-sm font-bold text-slate-900">University of Helsinki &amp; Google Cloud</div>
                <p className="text-xs text-slate-500 mt-1">
                  Elements of AI certification, Bayesian logic, and enterprise prompt architecture.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
              Publishing Excellence
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Mastery of Amazon KDP interior formatting, spine calculations, 300 DPI covers, and conversion-focused A10 SEO keyword ranking.
            </p>
            <div className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
              <span>Hardcover</span>
              <span aria-hidden="true">·</span>
              <span>Paperback</span>
              <span aria-hidden="true">·</span>
              <span>Kindle eBook</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
              AI Operations &amp; Workflows
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Designing reproducible multi-agent pipelines, prompt scaffolds, and automated content workflows that eliminate manual friction.
            </p>
            <div className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
              <span>Automated Pipelines</span>
              <span aria-hidden="true">·</span>
              <span>Prompt Craft</span>
              <span aria-hidden="true">·</span>
              <span>Python &amp; Node</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
              Global Volunteering
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Deploying modern technology in service of humanitarian goals. UNV media contributor advancing Sustainable Development Goal 17.
            </p>
            <div className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
              <span>UNV Media Team</span>
              <span aria-hidden="true">·</span>
              <span>SDG 17</span>
              <span aria-hidden="true">·</span>
              <span>Global Advocacy</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
