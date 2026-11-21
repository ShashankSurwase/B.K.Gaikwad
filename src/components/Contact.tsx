import React, { useState } from 'react';
import {
  Phone, MapPin, Send, CheckCircle2,
  MessageCircle, Navigation, ExternalLink, Mail
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

interface SubmittedInquiryData {
  refId: string;
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  targetEmail: string;
  targetDivision: string;
  targetPhone: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: 'Legal: Civil Litigation & Dispute Resolution',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<SubmittedInquiryData | null>(null);

  // Dynamic routing based on selected service
  const isCounselling = formData.service.startsWith('Counselling');
  const targetEmail = isCounselling
    ? 'themindcare.counselling@gmail.com'
    : 'gaikwad.legaladvisory@gmail.com';
  const targetDivision = isCounselling
    ? 'Mind Care & Counselling Wing'
    : 'Chambers Legal Practice Advisory';
  const targetPhone = isCounselling
    ? '918380083657'
    : '917507095230';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    const refId = `LA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Consultation Inquiry [${targetDivision}]: ${formData.fullName} (Ref: ${refId})`,
          _template: 'table',
          referenceId: refId,
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          serviceRequested: formData.service,
          description: formData.message,
          submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      });
    } catch (err) {
      console.log('Background dispatch forwarded:', err);
    }

    setIsSubmitting(false);
    setSubmittedData({
      refId,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      targetEmail,
      targetDivision,
      targetPhone
    });
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Legal: Civil Litigation & Dispute Resolution',
      message: '',
      consent: false
    });
    setErrors({});
    setSubmittedData(null);
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
          <div className="lg:col-span-2 space-y-6">
            {/* Office 1: Pune Head Chambers */}
            <div className="rounded-2xl bg-slate-soft dark:bg-navy-900 border border-slate-200 dark:border-navy-800 p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-400/30">
                  Principal Chambers
                </span>
                <span className="text-xs text-slate-500 font-mono font-medium">Pune / Khed</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-800 dark:text-white">
                B.K. Gaikwad and Associates
              </h3>

              <div className="space-y-3.5 pt-3 border-t border-slate-200 dark:border-navy-800 text-sm">
                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-navy-800 dark:text-white text-sm sm:text-base leading-relaxed">{firmConfig.address}</p>
                    <a
                      href={firmConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 hover:text-teal-800 font-semibold mt-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions (Near District Court)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Direct Phones with Call & WhatsApp */}
                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs sm:text-sm">
                  <a
                    href="tel:+917507095230"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 text-slate-800 dark:text-slate-200 hover:text-teal-600 font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-teal-500" />
                    <span>+91 75070 95230</span>
                  </a>
                  <a
                    href="tel:+919850145197"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 text-slate-800 dark:text-slate-200 hover:text-teal-600 font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-500" />
                    <span>+91 98501 45197</span>
                  </a>
                </div>

                {/* Direct Booking Emails for Legal & MindCare */}
                <div className="pt-3 border-t border-slate-200 dark:border-navy-800 space-y-2.5 text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                      <span className="font-semibold text-slate-300">Legal Practice:</span>
                    </div>
                    <a href="mailto:gaikwad.legaladvisory@gmail.com" className="text-gold-300 hover:text-white underline font-mono break-all text-xs">
                      gaikwad.legaladvisory@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                      <span className="font-semibold text-slate-300">MindCare Wing:</span>
                    </div>
                    <a href="mailto:themindcare.counselling@gmail.com" className="text-teal-300 hover:text-white underline font-mono break-all text-xs">
                      themindcare.counselling@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office 2: Tuljapur / Dharashiv Associate Partner Chambers */}
            <div className="rounded-2xl bg-slate-soft dark:bg-navy-900 border border-slate-200 dark:border-navy-800 p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-300 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
                  Associate Partner Chambers
                </span>
                <span className="text-xs text-slate-500 font-mono font-medium">Tuljapur / Dharashiv</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-800 dark:text-white">
                Chambers of Adv. Deepak Hundekar
              </h3>
              <p className="text-sm text-amber-600 dark:text-amber-400 font-medium -mt-2">
                Associate Partner with B.K. Gaikwad and Associates · Business Tax Consultancy & Revenue Advisory
              </p>

              <div className="space-y-3.5 pt-3 border-t border-slate-200 dark:border-navy-800 text-sm">
                {/* Branch Address */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-navy-800 dark:text-white text-sm sm:text-base leading-relaxed">
                      Kranti Lodge, Bhavani Road, Near Tuljabhavani Temple, Tuljapur, Dist. Dharashiv - 413601
                    </p>
                    <a
                      href={firmConfig.branchGoogleMapsUrl || "https://maps.app.goo.gl/FvnMoYQ446jaeqvz8"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 hover:text-teal-800 font-semibold mt-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions (Near Tuljabhavani Temple)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Direct Phone & WhatsApp for Tuljapur office */}
                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs sm:text-sm">
                  <a
                    href="tel:+919890006200"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 text-slate-800 dark:text-slate-200 hover:text-teal-600 font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-teal-500" />
                    <span>+91 98900 06200</span>
                  </a>
                  <a
                    href="https://wa.me/919890006200?text=Hello%20Advocate%20Deepak%20Hundekar,%20I%20would%20like%20to%20consult%20regarding%20tax%20and%20business%20matters."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 font-semibold"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

              {/* WhatsApp button */}
              <a
                href={`https://wa.me/${firmConfig.phone.replace(/[^0-9]/g, '')}?text=Hello%20B.K.%20Gaikwad%20and%20Associates,%20I%20would%20like%20to%20schedule%20a%20legal%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Connect on WhatsApp
              </a>
            </div>

          {/* Right: Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 p-6 sm:p-8 shadow-soft">

              {submittedData ? (
                <div className="py-6 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 mx-auto flex items-center justify-center border border-teal-200 dark:border-teal-700 shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-white">
                      Inquiry Successfully Dispatched
                    </h3>
                    <p className="text-sm text-slate-muted dark:text-slate-300 mt-2">
                      Thank you, <strong className="text-navy-800 dark:text-white">{submittedData.fullName}</strong>. Your consultation request has been forwarded directly to:
                    </p>
                  </div>

                  {/* Target Routing Destination Card */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 text-left space-y-2.5 shadow-sm">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                        {submittedData.targetDivision}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-navy-900 px-2 py-0.5 rounded">
                        Ref: {submittedData.refId}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-navy-800 dark:text-gold-300 font-semibold break-all bg-white dark:bg-navy-900 p-2.5 rounded-lg border border-slate-200 dark:border-navy-800">
                      <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                      <span>{submittedData.targetEmail}</span>
                    </div>

                    <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1 pt-1">
                      <div><strong>Selected Matter:</strong> {submittedData.service}</div>
                      <div><strong>Contact:</strong> {submittedData.phone} · {submittedData.email}</div>
                    </div>
                  </div>

                  {/* Direct Action Options */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Instant Direct Communication Options
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <a
                        href={`mailto:${submittedData.targetEmail}?subject=${encodeURIComponent(`Consultation Inquiry [${submittedData.targetDivision}]: ${submittedData.fullName} (Ref: ${submittedData.refId})`)}&body=${encodeURIComponent(
`Full Name: ${submittedData.fullName}
Phone: ${submittedData.phone}
Email: ${submittedData.email}
Reference ID: ${submittedData.refId}
Division: ${submittedData.targetDivision}
Service: ${submittedData.service}

Matter Description:
${submittedData.message}
`
                        )}`}
                        className="flex-1 py-2.5 px-3 rounded-lg bg-navy-800 hover:bg-navy-900 dark:bg-navy-800 dark:hover:bg-navy-750 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-slate-300 dark:border-navy-700 transition-colors shadow-sm"
                      >
                        <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span>Open in Email (Gmail)</span>
                      </a>

                      <a
                        href={`https://wa.me/${submittedData.targetPhone}?text=${encodeURIComponent(
`Hello ${submittedData.targetDivision}, I have submitted a consultation inquiry on your website:

Name: ${submittedData.fullName}
Phone: ${submittedData.phone}
Email: ${submittedData.email}
Ref ID: ${submittedData.refId}
Matter: ${submittedData.service}

Brief Description:
${submittedData.message}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Send via WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-navy-800">
                    <button
                      onClick={handleReset}
                      className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      ← Submit another inquiry
                    </button>
                  </div>
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
                      <optgroup label="── ⚖️ Legal Practice (38+ Yrs Heritage) ──">
                        {practiceAreas.map((pa) => (
                          <option key={pa.id} value={`Legal: ${pa.title}`}>{pa.title}</option>
                        ))}
                      </optgroup>
                      <optgroup label="── 🧠 Mind Care & Counselling Wing ──">
                        <option value="Counselling: Student Counselling & Academic Guidance">Counselling: Student Counselling & Academic Guidance</option>
                        <option value="Counselling: Parent Counselling & Parental Guidance">Counselling: Parent Counselling & Parental Guidance</option>
                        <option value="Counselling: Parent–Child Relationship Counselling">Counselling: Parent–Child Relationship Counselling</option>
                        <option value="Counselling: Adolescent Counselling">Counselling: Adolescent Counselling</option>
                        <option value="Counselling: Overthinking & Negative Thought Management">Counselling: Overthinking & Negative Thought Management</option>
                        <option value="Counselling: Stress Management & Emotional Well-being">Counselling: Stress Management & Emotional Well-being</option>
                        <option value="Counselling: Anxiety Awareness & Management">Counselling: Anxiety Awareness & Management</option>
                        <option value="Counselling: Depression Awareness & Supportive Care">Counselling: Depression Awareness & Supportive Care</option>
                        <option value="Counselling: Hormonal Health Awareness & Psychoeducation">Counselling: Hormonal Health Awareness & Psychoeducation</option>
                        <option value="Counselling: Therapeutic Approaches, CBT & Mindfulness">Counselling: Therapeutic Approaches, CBT & Mindfulness</option>
                        <option value="Counselling: Student & Parent Counselling">Counselling: Student & Parent Counselling</option>
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

                  {/* Dynamic Routing Indicator Pill */}
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 flex items-center justify-between text-xs flex-wrap gap-2">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Automatic Department Routing:</span>
                    <span className="font-mono font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1.5 break-all">
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span>{targetEmail}</span>
                    </span>
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
