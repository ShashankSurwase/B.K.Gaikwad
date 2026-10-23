import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  AlertCircle, ShieldAlert, Copy, Check 
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

    // Realistic client-side simulation (safe for BCI and static deployment)
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `BK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRefId(generatedId);
    }, 700);
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
    <section id="contact" className="py-20 md:py-28 bg-slate-soft/40 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60 inline-block">
            Direct Chamber Communication
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800">
            Schedule a Confidential Consultation
          </h2>
          <p className="text-base sm:text-lg text-slate-muted">
            Connect with our advocates to discuss your situation, understand your legal options, and chart an effective strategy.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Contact Details & Chamber Hours */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-card space-y-6">
              <h3 className="font-serif text-2xl font-bold text-navy-800 pb-3 border-b border-slate-100">
                Advocate Chambers
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-teal-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-subtle">Chamber Location</h4>
                    <p className="text-sm font-medium text-navy-800 leading-relaxed mt-0.5">
                      {firmConfig.address}
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-teal-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-subtle">Chamber Telephone</h4>
                    <p className="text-sm font-medium text-navy-800 leading-relaxed mt-0.5">
                      <a href={`tel:${firmConfig.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-teal-700 transition-colors">
                        {firmConfig.displayPhone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-teal-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-subtle">Official Correspondence</h4>
                    <p className="text-sm font-medium text-navy-800 leading-relaxed mt-0.5">
                      <a href={`mailto:${firmConfig.email}`} className="hover:text-teal-700 transition-colors block">
                        {firmConfig.email}
                      </a>
                      <a href={`mailto:${firmConfig.altEmail}`} className="text-xs text-slate-muted hover:text-teal-700 transition-colors">
                        {firmConfig.altEmail}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-teal-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-subtle">Chamber Consult Hours</h4>
                    <p className="text-sm font-medium text-navy-800 leading-relaxed mt-0.5">
                      {firmConfig.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Preview Placeholder / Directions */}
              <div className="pt-4 border-t border-slate-100">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 p-4 text-center space-y-2">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-navy-800">
                    <MapPin className="w-4 h-4 text-teal-600" />
                    <span>Jurisdiction: District Courts & Bombay High Court</span>
                  </div>
                  <p className="text-[11px] text-slate-muted">
                    Located centrally near judicial chambers for immediate filing and urgent court motion appearances.
                  </p>
                </div>
              </div>
            </div>

            {/* Confidentiality Notice */}
            <div className="p-4 rounded-xl bg-gold-50/70 border border-gold-200 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-dark leading-relaxed">
                <strong className="font-semibold text-navy-800">Privilege Protocol:</strong> Please do not submit original evidentiary records or sensitive privileged disclosures through general website forms until an initial advocate-client consultation is confirmed.
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Intake Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-white border border-slate-200/90 shadow-card text-left">
              
              {submittedRefId ? (
                // Success Confirmation State
                <div className="py-8 space-y-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 mx-auto flex items-center justify-center border border-teal-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-navy-800">
                      Consultation Request Logged
                    </h3>
                    <p className="text-sm text-slate-muted max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-navy-800">{formData.fullName}</span>. Your consultation inquiry has been logged in our chamber intake register.
                    </p>
                  </div>

                  {/* Reference ID Card */}
                  <div className="p-4 rounded-xl bg-slate-soft border border-slate-200 max-w-xs mx-auto flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-subtle font-semibold">
                        Inquiry Reference ID
                      </div>
                      <div className="text-base font-mono font-bold text-navy-800">
                        {submittedRefId}
                      </div>
                    </div>
                    <button
                      onClick={handleCopyRef}
                      title="Copy Reference ID"
                      className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-dark text-xs flex items-center gap-1"
                    >
                      {copied ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-xs text-slate-subtle max-w-md mx-auto">
                    An advocate or chamber associate will review your query and contact you at <span className="font-medium text-navy-800">{formData.phone}</span> within 24 business hours to schedule the session.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-900 text-white text-xs font-semibold shadow-xs"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                // Active Form State
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl font-bold text-navy-800">
                      Consultation Intake Form
                    </h3>
                    <p className="text-xs text-slate-muted">
                      Fields marked with <span className="text-red-500">*</span> are required for conflict checking.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-dark mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Adv. Rajesh Sharma / Meera Kulkarni"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-white'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone 2-Col */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-dark mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-dark mb-1.5">
                        Phone / Mobile <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-white'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Practice Area & Contact Method */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-dark mb-1.5">
                        Type of Legal Assistance
                      </label>
                      <select
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      >
                        {practiceAreas.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title}
                          </option>
                        ))}
                        <option value="Other Legal Matter">Other Legal Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-dark mb-1.5">
                        Preferred Contact Mode
                      </label>
                      <select
                        value={formData.contactMethod}
                        onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      >
                        <option value="Phone Call">Phone Call</option>
                        <option value="Chambers In-Person Meeting">In-Person Meeting (Chambers)</option>
                        <option value="Video Conference (Google Meet / Zoom)">Video Conference</option>
                        <option value="Email Communication">Email Communication</option>
                      </select>
                    </div>
                  </div>

                  {/* Brief Description */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-dark mb-1.5">
                      Brief Description of the Inquiry <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly state key facts, dates, court involved (if any), and immediate assistance required..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-white'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 h-4 w-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
                      />
                      <span className="text-xs text-slate-muted leading-relaxed">
                        I acknowledge that submitting this inquiry does not automatically establish an advocate-client relationship. I confirm I have not disclosed non-public confidential trade secrets or privileged evidence in this form.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-navy-800 hover:bg-navy-900 rounded-xl shadow-card transition-all duration-200 disabled:opacity-70 group border border-navy-700"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          <span>Processing Inquiry...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <span>Submit Consultation Request</span>
                          <Send className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 transition-transform" />
                        </span>
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
