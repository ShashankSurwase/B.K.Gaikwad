import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  ShieldAlert, Copy, Check, ExternalLink, Navigation, MessageCircle 
} from 'lucide-react';
import { firmConfig, practiceAreas } from '../data/firmData';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  practiceArea: string;
  contactMethod: string;
  message: string;
  consent: boolean;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    practiceArea: 'Civil Litigation and Dispute Resolution',
    contactMethod: 'Phone Call',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Full name must be at least 3 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@example.com).';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a mobile or phone number.';
    } else if (!/^[0-9+() -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number (8–15 digits).';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of your matter.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing the inquiry.';
    }

    if (!formData.consent) {
      errs.consent = 'You must acknowledge the legal consultation terms & privacy notice.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `LA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRefId(generatedId);
    }, 600);
  };

  const handleCopyRef = () => {
    if (submittedRefId) {
      navigator.clipboard.writeText(submittedRefId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      practiceArea: 'Civil Litigation and Dispute Resolution',
      contactMethod: 'Phone Call',
      message: '',
      consent: false,
    });
    setErrors({});
    setSubmittedRefId(null);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-navy-950 border-b border-slate-200/70 dark:border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/40 px-3 py-1 rounded-md border border-teal-200/60 dark:border-teal-700/50 inline-block">
            Get in Touch with Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 dark:text-white">
            Schedule a Confidential Consultation
          </h2>
          <p className="text-base sm:text-lg text-slate-muted dark:text-slate-400">
            Visit our chambers in Rajgurunagar (Pune) or connect directly with our advocates to discuss your matter with complete privilege.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Contact Details & Office Location */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-soft/70 dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-soft space-y-5 transition-colors">
              <div>
                <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-white">
                  Advocate Chambers
                </h3>
                <p className="text-xs text-teal-700 dark:text-teal-400 font-semibold mt-0.5">
                  {firmConfig.chambersName}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-200/80 dark:border-navy-800">
                {/* Official Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-900/50 border border-teal-100 dark:border-teal-800 flex items-center justify-center shrink-0 text-teal-700 dark:text-teal-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-subtle dark:text-slate-400">Chamber Location</h4>
                    <p className="text-xs sm:text-sm font-semibold text-navy-800 dark:text-white leading-relaxed mt-0.5">
                      {firmConfig.address}
                    </p>
                    <a
                      href={firmConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-300 font-semibold mt-1.5 group"
                    >
                      <Navigation className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 group-hover:translate-x-0.5 transition-transform" />
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-900/50 border border-teal-100 dark:border-teal-800 flex items-center justify-center shrink-0 text-teal-700 dark:text-teal-400 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-subtle dark:text-slate-400">Telephones</h4>
                    <p className="text-xs sm:text-sm font-semibold text-navy-800 dark:text-white leading-relaxed mt-0.5">
                      <a href={`tel:${firmConfig.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors block">
                        Adv. Shreya: {firmConfig.phone}
                      </a>
                      <a href={`tel:${firmConfig.altPhone.replace(/[^0-9+]/g, '')}`} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors block text-xs font-normal text-slate-muted dark:text-slate-400 mt-0.5">
                        Chambers: {firmConfig.altPhone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-900/50 border border-teal-100 dark:border-teal-800 flex items-center justify-center shrink-0 text-teal-700 dark:text-teal-400 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-subtle dark:text-slate-400">Official Correspondence</h4>
                    <p className="text-xs sm:text-sm font-semibold text-navy-800 dark:text-white leading-relaxed mt-0.5 font-mono">
                      <a href={`mailto:${firmConfig.email}`} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors block">
                        {firmConfig.email}
                      </a>
                      <a href={`mailto:${firmConfig.altEmail}`} className="text-xs font-normal text-slate-muted dark:text-slate-400 hover:text-teal-600 transition-colors mt-0.5 block">
                        {firmConfig.altEmail}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-900/50 border border-teal-100 dark:border-teal-800 flex items-center justify-center shrink-0 text-teal-700 dark:text-teal-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-subtle dark:text-slate-400">Chamber Hours</h4>
                    <p className="text-xs sm:text-sm font-medium text-navy-800 dark:text-white leading-relaxed mt-0.5">
                      {firmConfig.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${firmConfig.phone.replace(/[^0-9]/g, '')}?text=Hello%20Lawyers%20Associates,%20I%20would%20like%20to%20schedule%20a%20legal%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Privilege Notice */}
            <div className="p-4 rounded-xl bg-gold-50/70 dark:bg-navy-900 border border-gold-200 dark:border-navy-700 flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-gold-600 dark:text-gold-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-dark dark:text-slate-300 leading-relaxed">
                <strong className="font-semibold text-navy-800 dark:text-white">Confidentiality Protocol:</strong> All consultations and initial inquiries are treated under attorney-client privilege.
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Intake Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-card text-left transition-colors">
              
              {submittedRefId ? (
                <div className="py-8 space-y-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 mx-auto flex items-center justify-center border border-teal-200 dark:border-teal-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-white">
                      Inquiry Successfully Received
                    </h3>
                    <p className="text-sm text-slate-muted dark:text-slate-300 max-w-md mx-auto">
                      Thank you, <strong className="text-navy-800 dark:text-white">{formData.fullName}</strong>. Our advocates will review your submission and contact you via {formData.contactMethod.toLowerCase()}.
                    </p>
                  </div>

                  {/* Reference ID card */}
                  <div className="p-4 rounded-xl bg-slate-soft dark:bg-navy-800 border border-slate-200 dark:border-navy-700 max-w-sm mx-auto flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-[11px] font-semibold text-slate-subtle dark:text-slate-400 uppercase">Consultation Reference</div>
                      <div className="font-mono text-base font-bold text-navy-800 dark:text-gold-300">{submittedRefId}</div>
                    </div>
                    <button
                      onClick={handleCopyRef}
                      className="p-2 rounded-lg bg-white dark:bg-navy-700 hover:bg-slate-100 text-slate-dark dark:text-slate-200 border border-slate-200 dark:border-navy-600 text-xs flex items-center gap-1"
                    >
                      {copied ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-navy-700 text-xs sm:text-sm font-semibold text-navy-800 dark:text-slate-200 hover:bg-slate-soft dark:hover:bg-navy-800 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={`https://wa.me/${firmConfig.phone.replace(/[^0-9]/g, '')}?text=Hello%20Lawyers%20Associates,%20my%20inquiry%20reference%20is%20${submittedRefId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-white">
                      Request Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-muted dark:text-slate-400">
                      Fill out this preliminary form to check advocate availability and schedule an appointment.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-800 dark:text-slate-200 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-dark dark:text-white bg-white dark:bg-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-300 dark:border-navy-700'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy-800 dark:text-slate-200 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rajesh@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-dark dark:text-white bg-white dark:bg-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300 dark:border-navy-700'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy-800 dark:text-slate-200 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-dark dark:text-white bg-white dark:bg-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300 dark:border-navy-700'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Practice Area & Contact Method Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy-800 dark:text-slate-200 mb-1">
                        Legal Domain *
                      </label>
                      <select
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-navy-700 text-sm text-slate-dark dark:text-white bg-white dark:bg-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                      >
                        {practiceAreas.map((pa) => (
                          <option key={pa.id} value={pa.title}>
                            {pa.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy-800 dark:text-slate-200 mb-1">
                        Preferred Contact Mode
                      </label>
                      <select
                        value={formData.contactMethod}
                        onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-navy-700 text-sm text-slate-dark dark:text-white bg-white dark:bg-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                      >
                        <option value="Phone Call">Phone Call</option>
                        <option value="WhatsApp">WhatsApp Message</option>
                        <option value="Email">Email Communication</option>
                        <option value="Chamber Visit">In-Person Chamber Visit</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-800 dark:text-slate-200 mb-1">
                      Brief Description of Legal Matter *
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please summarize the key background facts, court if any, and relief sought..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-dark dark:text-white bg-white dark:bg-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300 dark:border-navy-700'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-teal-600 focus:ring-teal-500 border-slate-300 dark:border-navy-700"
                      />
                      <span className="text-xs text-slate-muted dark:text-slate-400 leading-snug">
                        I acknowledge that submitting this inquiry does not create an advocate-client relationship. Information shared is protected under legal confidentiality protocols.
                      </span>
                    </label>
                    {errors.consent && <p className="text-xs text-red-500 mt-1">{errors.consent}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-navy-800 hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-500 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Request</span>
                          <Send className="w-4 h-4 text-gold-400 dark:text-white" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
