import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle2,
  MessageCircle, Navigation, ExternalLink
} from 'lucide-react';
import { firmConfig, practiceAreas } from '../data/firmData';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: 'Civil Litigation and Dispute Resolution',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);

  const validate = () => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3)
      errs.fullName = 'Please enter your full name (at least 3 characters).';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      errs.email = 'Please enter a valid email address.';
    if (!formData.phone.trim() || !/^[0-9+() -]{8,15}$/.test(formData.phone.trim()))
      errs.phone = 'Please enter a valid phone number.';
    if (!formData.message.trim() || formData.message.trim().length < 15)
      errs.message = 'Please describe your matter (at least 15 characters).';
    if (!formData.consent)
      errs.consent = 'You must acknowledge the consultation terms.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const id = `LA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRefId(id);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ fullName: '', email: '', phone: '', service: 'Civil Litigation and Dispute Resolution', message: '', consent: false });
    setErrors({});
    setSubmittedRefId(null);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Connect With Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-800 dark:text-white leading-tight">
            Get in Touch
          </h2>
          <div className="h-0.5 w-16 bg-gold-500" />
          <p className="text-slate-muted dark:text-slate-400 text-base leading-relaxed pt-1">
            Visit our chambers in Rajgurunagar or submit an inquiry for preliminary consultation.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* Left: Office Info (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-xl bg-slate-soft dark:bg-navy-900 border border-slate-200 dark:border-navy-800 p-6 space-y-5">
              <h3 className="font-serif text-xl font-bold text-navy-800 dark:text-white">
                Advocate Chambers
              </h3>
              <p className="text-xs text-teal-600 dark:text-teal-400 font-semibold">{firmConfig.chambersName}</p>

              <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-navy-800">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 flex items-center justify-center shrink-0 text-teal-600 dark:text-teal-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-muted dark:text-slate-500 mb-0.5">Address</div>
                    <p className="text-xs font-medium text-navy-800 dark:text-white leading-relaxed">{firmConfig.address}</p>
                    <a
                      href={firmConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-teal-600 dark:text-teal-400 hover:text-teal-800 font-semibold mt-1.5"
                    >
                      <Navigation className="w-3 h-3" />
                      Get Directions
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 flex items-center justify-center shrink-0 text-teal-600 dark:text-teal-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-muted dark:text-slate-500 mb-0.5">Phone</div>
                    <a href={`tel:${firmConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-xs font-semibold text-navy-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 block">
                      {firmConfig.phone}
                    </a>
                    <a href={`tel:${firmConfig.altPhone.replace(/[^0-9+]/g, '')}`} className="text-xs text-slate-muted dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 block mt-0.5">
                      {firmConfig.altPhone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 flex items-center justify-center shrink-0 text-teal-600 dark:text-teal-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-muted dark:text-slate-500 mb-0.5">Email</div>
                    <a href={`mailto:${firmConfig.email}`} className="text-xs font-semibold text-navy-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 block font-mono">
                      {firmConfig.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 flex items-center justify-center shrink-0 text-teal-600 dark:text-teal-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-muted dark:text-slate-500 mb-0.5">Hours</div>
                    <p className="text-xs font-medium text-navy-800 dark:text-white leading-relaxed">{firmConfig.officeHours}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp button */}
              <a
                href={`https://wa.me/${firmConfig.phone.replace(/[^0-9]/g, '')}?text=Hello%20Lawyers%20Associates,%20I%20would%20like%20to%20schedule%20a%20legal%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Connect on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 p-6 sm:p-8 shadow-soft">

              {submittedRefId ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 mx-auto flex items-center justify-center border border-teal-200 dark:border-teal-700">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-white">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-slate-muted dark:text-slate-300 mt-2">
                      Thank you, <strong className="text-navy-800 dark:text-white">{formData.fullName}</strong>. We will contact you shortly.
                    </p>
                  </div>
                  <div className="inline-block px-5 py-3 bg-slate-50 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700">
                    <div className="text-[10px] font-semibold text-slate-muted uppercase">Reference</div>
                    <div className="font-mono font-bold text-navy-800 dark:text-gold-300 text-lg">{submittedRefId}</div>
                  </div>
                  <button
                    onClick={handleReset}
                    className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-white">Request Consultation</h3>
                    <p className="text-xs text-slate-muted dark:text-slate-400 mt-1">All inquiries are treated with strict confidentiality.</p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-800 dark:text-slate-200 mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-dark dark:text-white bg-white dark:bg-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${errors.fullName ? 'border-red-400' : 'border-slate-300 dark:border-navy-700'}`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy-800 dark:text-slate-200 mb-1">Phone *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-dark dark:text-white bg-white dark:bg-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${errors.phone ? 'border-red-400' : 'border-slate-300 dark:border-navy-700'}`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy-800 dark:text-slate-200 mb-1">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@example.com"
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-dark dark:text-white bg-white dark:bg-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${errors.email ? 'border-red-400' : 'border-slate-300 dark:border-navy-700'}`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service dropdown with clear dual divisions */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-800 dark:text-slate-200 mb-1">Practice Wing / Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-navy-700 text-sm text-slate-dark dark:text-white bg-white dark:bg-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                    >
                      <optgroup label="── ⚖️ Legal Practice (35+ Yrs Heritage) ──">
                        {practiceAreas.map((pa) => (
                          <option key={pa.id} value={`Legal: ${pa.title}`}>{pa.title}</option>
                        ))}
                      </optgroup>
                      <optgroup label="── 🧠 Shivanushka MindCare & Counselling Wing ──">
                        <option value="Counselling: Relationship & Marriage">Counselling: Relationship & Marriage</option>
                        <option value="Counselling: Stress, Anxiety & Burnout">Counselling: Stress, Anxiety & Burnout</option>
                        <option value="Counselling: OCD & Behavioral Patterns">Counselling: OCD & Behavioral Guidance</option>
                        <option value="Counselling: Career & Student Life">Counselling: Career & Student Guidance</option>
                        <option value="Counselling: Pre-Litigation Conflict Mediation">Counselling: Pre-Litigation Family Conciliation</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-800 dark:text-slate-200 mb-1">Brief Description *</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your legal matter or inquiry..."
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-dark dark:text-white bg-white dark:bg-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all resize-none ${errors.message ? 'border-red-400' : 'border-slate-300 dark:border-navy-700'}`}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* Consent */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 w-4 h-4 rounded text-teal-600 focus:ring-teal-500 border-slate-300 dark:border-navy-700"
                      />
                      <span className="text-xs text-slate-muted dark:text-slate-400 leading-relaxed">
                        I acknowledge that submitting this form does not create an advocate-client relationship. All information shared is confidential.
                      </span>
                    </label>
                    {errors.consent && <p className="text-xs text-red-500 mt-1">{errors.consent}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-lg bg-navy-800 hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-500 text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Processing...' : (
                      <>
                        Submit Inquiry
                        <Send className="w-4 h-4 text-gold-400 dark:text-white" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
