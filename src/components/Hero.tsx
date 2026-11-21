import React from 'react';
import {
  Scale, Brain, ChevronRight,
  ArrowUpRight, HeartHandshake, Briefcase,
  Building2, MapPin, ShieldCheck, Award, Lock
} from 'lucide-react';

interface HeroProps {
  onScheduleConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleConsultation, onExploreServices }) => {
  const scrollToCounselling = () => {
    const el = document.getElementById('counselling');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-navy-950 text-white">

      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. Master Dual-Pillar Hero (Model 1) */}
        <div className="pt-12 sm:pt-16 pb-12 sm:pb-20">

          {/* Top Announcement Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-navy-900 border border-navy-700 text-slate-300 text-[11px] sm:text-xs font-semibold max-w-full">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse shrink-0" />
              <span>38+ Years Senior Courtroom Heritage</span>
              <span className="text-slate-600 hidden xs:inline">•</span>
              <span className="text-teal-400 flex items-center gap-1 shrink-0">
                <Brain className="w-3 h-3" />
                Certified MindCare & Psychology Wing
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-10 sm:mb-14">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.1]">
              Resolute Legal Defense. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
                Empathetic MindCare.
              </span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed px-2">
              Where <strong className="text-white font-medium">38+ years of courtroom trial advocacy</strong> meets <strong className="text-teal-300 font-medium">certified psychological science</strong>—protecting your legal rights while restoring peace of mind.
            </p>

            {/* Quick Consultation CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2 max-w-md sm:max-w-none mx-auto">
              <button
                onClick={onScheduleConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 text-sm font-bold shadow-gold-glow transition-all duration-200"
              >
                <span>Book Chambers Consultation</span>
                <ChevronRight className="w-4 h-4 text-navy-950" />
              </button>
              <a
                href="#counselling"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-navy-900/80 hover:bg-navy-800 text-slate-200 border border-navy-700 text-sm font-medium transition-colors"
              >
                <Brain className="w-4 h-4 text-teal-400" />
                <span>Explore Mind Theory & Care</span>
              </a>
            </div>
          </div>

          {/* ══════════ THE DUAL-PILLAR INTERACTIVE SPLIT GATEWAYS (MODEL 1) ══════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">

            {/* PILLAR 1: Legal Practice & Courtroom Advocacy */}
            <div className="relative rounded-2xl bg-gradient-to-b from-navy-900/90 to-navy-900/60 border border-gold-500/40 p-6 sm:p-8 flex flex-col justify-between hover:border-gold-400 hover:shadow-2xl transition-all duration-300 group text-left">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform">
                    <Scale className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400 bg-gold-500/15 px-3 py-1 rounded-full border border-gold-500/30">
                    Primary Practice · 38+ Yrs
                  </span>
                </div>

                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-300 transition-colors">
                    Chambers of Law & Courtroom Advocacy
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-gold-400 mt-1 font-semibold">
                    Adv. Balasaheb Gaikwad · Former Asst. Public Prosecutor (22 Yrs) & Ex-Special PP (PCPNDT) · 10,000+ Total Cases Handled
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  Comprehensive courtroom defense before District & Sessions Courts, JMFC, and Judicial Forums across India. Built on 38+ years of trial mastery, 10,000+ cases handled, forensic cross-examination, and judicial integrity.
                </p>

                {/* Service highlights */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-2.5 pt-2 text-xs sm:text-sm text-slate-100 font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                    <span>Criminal Defense & Bail</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                    <span>Civil & Land Partition</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                    <span>Cheque Bounce (Sec 138)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                    <span>Corporate & Business Law</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-navy-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <button
                  onClick={onExploreServices}
                  className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 group-hover:text-gold-300 transition-colors"
                >
                  <span>Explore All 9 Practice Areas</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href="mailto:gaikwad.legaladvisory@gmail.com"
                  className="text-xs text-gold-300/90 hover:text-white font-mono underline decoration-gold-500/40 break-all"
                  title="Direct Legal Practice Booking"
                >
                  gaikwad.legaladvisory@gmail.com
                </a>
              </div>
            </div>

            {/* PILLAR 2: MindCare & Psychological Well-Being */}
            <div className="relative rounded-2xl bg-gradient-to-b from-navy-900/90 to-navy-900/60 border border-teal-500/40 p-6 sm:p-8 flex flex-col justify-between hover:border-teal-400 hover:shadow-2xl transition-all duration-300 group text-left">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                    <Brain className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-teal-300 bg-teal-500/15 px-3 py-1 rounded-full border border-teal-500/30">
                    Dedicated Wellness Division
                  </span>
                </div>

                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    Mind Care & Counselling Wing
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-teal-400 mt-1 font-semibold">
                    Certified Brain Science & Psychology · Medhavi Skills University & Brainway Research
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  Confidential, empathetic, and evidence-informed psychological support. Helping individuals, couples, and youths navigate severe marital friction, obsessive intrusive loops, burnout, and litigation stress.
                </p>

                {/* Service highlights */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-2.5 pt-2 text-xs sm:text-sm text-slate-100 font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span>Student & Parent Counselling</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span>Stress, Panic & Burnout</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span>OCD & Habit Reframing</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span>Adolescent Emotional Support</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-navy-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <button
                  onClick={scrollToCounselling}
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-300 group-hover:text-teal-200 transition-colors"
                >
                  <span>Explore MindCare Services</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href="mailto:themindcare.counselling@gmail.com"
                  className="text-xs text-teal-300/90 hover:text-white font-mono underline decoration-teal-500/40 break-all"
                  title="Direct Counselling Booking"
                >
                  themindcare.counselling@gmail.com
                </a>
              </div>
            </div>

          </div>

          {/* ══════════ METRICS & NUMBERS SHOWCASE (Chambers Credibility Dashboard) ══════════ */}
          <div className="mt-10 sm:mt-14 max-w-6xl mx-auto space-y-6 text-left">

            {/* Flagship Hero Banner: 10,000+ Cases Handled */}
            <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border-2 border-gold-500/40 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 w-full lg:w-auto">
                <div className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-gold-500 text-navy-950 font-serif text-3xl sm:text-4xl font-extrabold tracking-tight shrink-0 shadow-gold-glow text-center">
                  10,000+
                  <div className="text-[10px] font-sans font-bold uppercase tracking-widest text-navy-900 mt-0.5">Cases Handled</div>
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="text-base sm:text-xl font-bold text-white flex flex-wrap items-center gap-2 sm:gap-2.5">
                    <span>Senior Defense Counsel & Trial Advocacy</span>
                    <span className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40 font-mono font-semibold">
                      JMFC & Sessions Court
                    </span>
                  </div>
                  <p className="text-xs sm:text-base text-slate-200 leading-relaxed font-normal">
                    Over <strong className="text-gold-300 font-semibold">10,000+ criminal, civil, and bail cases handled</strong> before Judicial Magistrate First Class (JMFC) and District & Sessions Courts across Maharashtra. Former Asst. Public Prosecutor (1997–2019, 22 Years) & Ex-Special Public Prosecutor (PCPNDT, Pune & Thane).
                  </p>
                </div>
              </div>
              <button
                onClick={onExploreServices}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 text-sm font-bold shadow-md transition-all shrink-0 hover:scale-[1.02] whitespace-nowrap"
              >
                <span>Explore Legal Practices</span>
                <ArrowUpRight className="w-4 h-4 text-navy-950" />
              </button>
            </div>

            {/* The Hybrid Superpower Box directly below 10,000+ Cases Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-teal-500/40 shadow-xl space-y-2 text-left">
              <div className="text-xs sm:text-sm font-bold text-teal-300 uppercase tracking-wider flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-teal-400 shrink-0" />
                <span>The Hybrid Superpower: Law & MindCare Under One Roof</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Whether you require fierce courtroom litigation defense or compassionate, confidential guidance through marriage or personal emotional crisis, our chambers provide comprehensive, end-to-end guidance.
              </p>
            </div>

            {/* Authoritative 8-Metric Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
              
              {/* Stat 1: 38+ Years Court Heritage */}
              <div className="p-3.5 sm:p-5 rounded-xl bg-navy-900/90 border border-gold-500/30 hover:border-gold-400/60 shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2">
                    <span className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-gold-300 group-hover:text-gold-200 transition-colors">
                      38+
                    </span>
                    <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 shrink-0">
                      <Scale className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base font-bold text-white leading-snug mt-1">
                    Years Court Heritage
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-slate-300 mt-1 leading-relaxed">
                  Trial advocacy & dispute representation since 1987.
                </p>
              </div>

              {/* Stat 2: 14+ Legal Practice Areas */}
              <div className="p-3.5 sm:p-5 rounded-xl bg-navy-900/90 border border-gold-500/30 hover:border-gold-400/60 shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2">
                    <span className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-gold-300 group-hover:text-gold-200 transition-colors">
                      14+
                    </span>
                    <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 shrink-0">
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base font-bold text-white leading-snug mt-1">
                    Legal Practice Areas
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-slate-300 mt-1 leading-relaxed">
                  Criminal defense, civil suits, bail, corporate & business tax.
                </p>
              </div>

              {/* Stat 3: 13+ MindCare Verticals */}
              <div className="p-3.5 sm:p-5 rounded-xl bg-navy-900/90 border border-teal-500/30 hover:border-teal-400/60 shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2">
                    <span className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-teal-300 group-hover:text-teal-200 transition-colors">
                      13+
                    </span>
                    <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0">
                      <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base font-bold text-white leading-snug mt-1">
                    MindCare Verticals
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-slate-300 mt-1 leading-relaxed">
                  Student guidance, OCD & brain science.
                </p>
              </div>

              {/* Stat 4: 7+ Trial Court Jurisdictions */}
              <div className="p-3.5 sm:p-5 rounded-xl bg-navy-900/90 border border-teal-500/30 hover:border-teal-400/60 shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2">
                    <span className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-teal-300 group-hover:text-teal-200 transition-colors">
                      7+
                    </span>
                    <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0">
                      <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base font-bold text-white leading-snug mt-1">
                    Court Jurisdictions
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-slate-300 mt-1 leading-relaxed">
                  Pune, Thane Court, Belapur, Vadgaon Maval, Barshi & Tuljapur.
                </p>
              </div>

              {/* Stat 5: 2 Offices Across Maharashtra */}
              <div className="p-3.5 sm:p-5 rounded-xl bg-navy-900/90 border border-amber-500/30 hover:border-amber-400/60 shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2">
                    <span className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-amber-300 group-hover:text-amber-200 transition-colors">
                      2
                    </span>
                    <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base font-bold text-white leading-snug mt-1">
                    Chambers in Maharashtra
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-slate-300 mt-1 leading-relaxed">
                  Pune Principal Chambers & Tuljapur Dharashiv Branch.
                </p>
              </div>

              {/* Stat 6: 22+ Years State Prosecution */}
              <div className="p-3.5 sm:p-5 rounded-xl bg-navy-900/90 border border-gold-500/30 hover:border-gold-400/60 shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2">
                    <span className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-gold-300 group-hover:text-gold-200 transition-colors">
                      22+
                    </span>
                    <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 shrink-0">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base font-bold text-white leading-snug mt-1">
                    Years Asst. Public Prosecutor
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-slate-300 mt-1 leading-relaxed">
                  Govt. Asst. Prosecutor (22 Yrs) & Special PP (PCPNDT, Pune & Thane).
                </p>
              </div>

              {/* Stat 7: 24+ Years Tax & Corporate Consultancy */}
              <div className="p-3.5 sm:p-5 rounded-xl bg-navy-900/90 border border-amber-500/30 hover:border-amber-400/60 shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2">
                    <span className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-amber-300 group-hover:text-amber-200 transition-colors">
                      24+
                    </span>
                    <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base font-bold text-white leading-snug mt-1">
                    Years Tax & Corporate
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-slate-300 mt-1 leading-relaxed">
                  Commercial tax planning, revenue litigation & GST advisory.
                </p>
              </div>

              {/* Stat 8: 100% Strict Confidentiality & Privilege */}
              <div className="p-3.5 sm:p-5 rounded-xl bg-navy-900/90 border border-emerald-500/30 hover:border-emerald-400/60 shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2">
                    <span className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-emerald-300 group-hover:text-emerald-200 transition-colors">
                      100%
                    </span>
                    <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                      <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base font-bold text-white leading-snug mt-1">
                    Strict Confidentiality
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-slate-300 mt-1 leading-relaxed">
                  Sec 126 Evidence Act Privilege & Mental Health Ethical Code.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};