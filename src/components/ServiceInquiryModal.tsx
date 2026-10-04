import React, { useState, useEffect } from 'react';
import { AUTHOR_INFO, SERVICES_DATA } from '../data/portfolioData';
import { X, CheckCircle, Send, Copy, Check, Sparkles, Loader2, AlertCircle } from 'lucide-react';

interface ServiceInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const ServiceInquiryModal: React.FC<ServiceInquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookDetails, setBookDetails] = useState('');
  const [targetDeadline, setTargetDeadline] = useState('Standard (1-2 weeks)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServices([preselectedServiceId]);
    }
  }, [preselectedServiceId, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const selectedTitles = SERVICES_DATA.filter((s) => selectedServices.includes(s.id))
      .map((s) => s.title)
      .join(', ') || 'General Consultation';

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(AUTHOR_INFO.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          _subject: `[Consultation Request] ${selectedTitles} - from ${name}`,
          services_requested: selectedTitles,
          target_deadline: targetDeadline,
          project_details: bookDetails || 'None specified',
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback to mailto
        const subject = encodeURIComponent(`Consultation Inquiry from ${name}: ${selectedTitles}`);
        const body = encodeURIComponent(
          `Hi Samsul,\n\nI would like to inquire about your services.\n\nClient Name: ${name}\nEmail: ${email}\nSelected Services: ${selectedTitles}\nTarget Timeline: ${targetDeadline}\n\nProject Scope & Book Details:\n${bookDetails}\n\nThank you!`
        );
        window.location.href = `mailto:${AUTHOR_INFO.email}?subject=${subject}&body=${body}`;
        setSubmitted(true);
      }
    } catch {
      // Fallback
      const subject = encodeURIComponent(`Consultation Inquiry from ${name}: ${selectedTitles}`);
      const body = encodeURIComponent(
        `Hi Samsul,\n\nI would like to inquire about your services.\n\nClient Name: ${name}\nEmail: ${email}\nSelected Services: ${selectedTitles}\nTarget Timeline: ${targetDeadline}\n\nProject Scope & Book Details:\n${bookDetails}\n\nThank you!`
      );
      window.location.href = `mailto:${AUTHOR_INFO.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyScope = () => {
    const selectedTitles = SERVICES_DATA.filter((s) => selectedServices.includes(s.id))
      .map((s) => s.title)
      .join(', ');
    const summary = `Inquiry to Samsul Hussain (${AUTHOR_INFO.email})\nName: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\nServices: ${selectedTitles || 'General'}\nTimeline: ${targetDeadline}\nDetails: ${bookDetails || 'N/A'}`;
    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl z-10 p-6 sm:p-8 text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display">Inquiry Sent Successfully!</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your consultation request has been delivered to <strong className="text-indigo-600 font-semibold">{AUTHOR_INFO.email}</strong>. Samsul will review your requirements and respond promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center pt-4">
              <button
                onClick={handleCopyScope}
                className="inline-flex items-center justify-center gap-2 py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl cursor-pointer"
              >
                {copiedSummary ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedSummary ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
              </button>
              <button
                onClick={onClose}
                className="py-2 px-6 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Professional Consultation</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                Request Publishing or AI Project Scope
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Direct inquiry to Samsul Hussain. Select your desired services to receive custom scope and timeline.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Service Checkboxes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Services Required
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICES_DATA.map((srv) => {
                  const isChecked = selectedServices.includes(srv.id);
                  return (
                    <div
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-indigo-600 bg-indigo-50/70 text-slate-900 font-semibold'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span className="pr-2">{srv.title}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Client Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  placeholder="e.g. Dr. Arthur Miller"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 disabled:opacity-60"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  placeholder="e.g. arthur@publishing.org"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 disabled:opacity-60"
                />
              </div>
            </div>

            {/* Target Timeline */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Target Timeline
              </label>
              <select
                value={targetDeadline}
                onChange={(e) => setTargetDeadline(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white disabled:opacity-60"
              >
                <option value="Urgent (24 - 48 hours)">Urgent (24 - 48 hours)</option>
                <option value="Standard (1-2 weeks)">Standard (1-2 weeks)</option>
                <option value="Flexible / Planning stage">Flexible / Planning stage</option>
              </select>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Manuscript or Project Details
              </label>
              <textarea
                rows={3}
                value={bookDetails}
                onChange={(e) => setBookDetails(e.target.value)}
                disabled={isSubmitting}
                placeholder="Mention word count, trim size, target genre, current Amazon status, or specific AI workflow bottlenecks..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 resize-none disabled:opacity-60"
              />
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="text-[11px] text-slate-500">
                Direct inquiry to {AUTHOR_INFO.email}
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 py-2.5 px-5 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
