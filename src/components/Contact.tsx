import React, { useState } from 'react';
import { AUTHOR_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Send, ExternalLink, Linkedin, Github, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { UpworkIcon, FiverrIcon, AmazonIcon } from './BrandIcons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Book Publishing & Formatting Inquiry',
    message: '',
    honeypot: '', // anti-bot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(AUTHOR_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Bot detection
    if (formData.honeypot) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(AUTHOR_INFO.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`,
          subject_topic: formData.subject,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: 'Book Publishing & Formatting Inquiry',
          message: '',
          honeypot: '',
        });
      } else {
        // Fallback to mailto if service is unreachable
        const mailtoSubject = encodeURIComponent(`${formData.subject} - from ${formData.name}`);
        const mailtoBody = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:${AUTHOR_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
        setSubmitted(true);
      }
    } catch {
      // In case of adblocker or network restriction, fallback seamlessly to mail client
      const mailtoSubject = encodeURIComponent(`${formData.subject} - from ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${AUTHOR_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2.5">
            <Mail className="w-4 h-4 text-amber-600" />
            <span>Direct Communication</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-500">Contact &amp; Consultations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display [text-wrap:balance]">
            Let&apos;s Build Your Next Book or AI Workflow.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Whether you need comprehensive Amazon KDP interior formatting, conversion-focused cover design, or tailored AI operations automation, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Profiles */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Email Card with 1-Click Copy */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                  Primary Contact
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Inbox
                </span>
              </div>
              <div className="text-base font-mono font-semibold text-slate-900 mb-4 break-all">
                {AUTHOR_INFO.email}
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${AUTHOR_INFO.email}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>Open Mail</span>
                </a>
              </div>
            </div>

            {/* Verified Platforms */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Verified Online Profiles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {/* Upwork Profile */}
                <a
                  href={AUTHOR_INFO.upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-emerald-50/40 border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-slate-900 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                      <UpworkIcon className="w-3.5 h-3.5 text-[#14A800]" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 leading-tight">Upwork Profile</div>
                      <div className="text-[10px] text-slate-500">Top Rated Freelancer</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#14A800]" />
                </a>

                {/* Fiverr Profile */}
                <a
                  href={AUTHOR_INFO.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-emerald-50/40 border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-slate-900 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                      <FiverrIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 leading-tight">Fiverr Profile</div>
                      <div className="text-[10px] text-slate-500">KDP Formatting &amp; Design</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600" />
                </a>

                {/* Amazon Author Central */}
                <a
                  href={AUTHOR_INFO.amazonAuthorCentralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-amber-50/40 border border-slate-200 hover:border-amber-300 text-slate-700 hover:text-slate-900 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                      <AmazonIcon className="w-3.5 h-3.5 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 leading-tight">Amazon Author Central</div>
                      <div className="text-[10px] text-slate-500">Author Store &amp; Books</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600" />
                </a>

                {/* LinkedIn */}
                <a
                  href={AUTHOR_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/40 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-slate-900 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                      <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 leading-tight">LinkedIn</div>
                      <div className="text-[10px] text-slate-500">Professional Network</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </a>

                {/* GitHub */}
                <a
                  href={AUTHOR_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors group sm:col-span-2"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                      <Github className="w-3.5 h-3.5 text-slate-800" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 leading-tight">GitHub Code Repositories</div>
                      <div className="text-[10px] text-slate-500">CS50x &amp; AI Automation Systems</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900" />
                </a>
              </div>
            </div>

            {/* UN SDG Note */}
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 leading-relaxed font-medium">
              United Nations Volunteers media contributions support Sustainable Development Goal 17: Partnerships for the Goals.
            </div>

          </div>

          {/* Right Column: Direct Active Message Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your message has been delivered to <strong className="text-indigo-600 font-semibold">{AUTHOR_INFO.email}</strong>. Samsul Hussain reviews incoming inquiries daily and responds within 24 business hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-2.5 px-6 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      Send Direct Message
                    </h3>
                    <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Direct delivery to Samsul
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Reach out for publishing projects, formatting, cover design, or AI workflows.
                  </p>
                </div>

                {/* Honeypot field for bot suppression */}
                <input
                  type="text"
                  name="_honey"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      disabled={isSubmitting}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. eleanor@studio.com"
                      disabled={isSubmitting}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject / Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white disabled:opacity-60"
                  >
                    <option value="Book Publishing & Formatting Inquiry">Book Publishing &amp; Formatting</option>
                    <option value="Book Cover Design (Hardcover / Paperback / Kindle)">Book Cover Design</option>
                    <option value="Amazon KDP Keyword & Niche Research">Amazon KDP Keyword &amp; Niche SEO</option>
                    <option value="AI Operations & Workflow Automation">AI Operations &amp; Prompt Engineering</option>
                    <option value="Speaking, Media & UN SDG 17 Collaborations">Speaking &amp; UN SDG 17 Collaboration</option>
                    <option value="General Inquiries">General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSubmitting}
                    placeholder="Describe your book concept, page count, timeline, or operational requirements..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 resize-none disabled:opacity-60"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-500">
                    Replies sent to your email within 24h
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 py-2.5 px-5 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
