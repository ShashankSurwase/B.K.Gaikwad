import React, { useState } from 'react';
import { ChevronRight, Heart, Award, MapPin, Scale, Shield, X, Calendar, CheckCircle2, Phone, Mail, ExternalLink, BookOpen, GraduationCap } from 'lucide-react';
import { teamMembers } from '../data/firmData';
import { TeamMember } from '../types/index';

interface TeamProps {
  onConsultWithMember: (member?: TeamMember) => void;
}

const jurisdictionPills = [
  'Rajgurunagar (Khed) Court',
  'Pune District & Sessions Court & Family Courts',
  'Thane Court',
  'Belapur District & Sessions Court',
  'Junnar Civil & Criminal Courts',
  'Vadgaon Maval Judicial Court',
  'Tuljapur / Dharashiv District Courts',
];

export const Team: React.FC<TeamProps> = ({ onConsultWithMember }) => {
  const [activeModalMember, setActiveModalMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-28 bg-navy-900 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 space-y-3 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Legal Practitioners & Certified Counsellors
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Meet Our Legal & Counselling Chambers
          </h2>
          <div className="h-0.5 w-16 bg-gold-500" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
            Grounded in over 38 years of senior courtroom trial advocacy, public prosecution for the Government of Maharashtra, certified brain science psychological counselling, and dedicated business tax consultancy.
          </p>
        </div>

        {/* Team Grid: Fully Responsive (1 col mobile, 2 col tablet, 3 col laptop/desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member) => {
            const isFounder = member.id === 'balu-gaikwad';

            return (
              <div
                key={member.id}
                onClick={() => setActiveModalMember(member)}
                className="flex flex-col rounded-2xl bg-navy-800/90 dark:bg-navy-900 border border-navy-700 dark:border-navy-800 overflow-hidden hover:border-gold-500/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer text-left"
              >
                {/* Photo & Overlays (Clickable to open profile popup) */}
                <div className="relative h-64 sm:h-72 bg-navy-950 overflow-hidden shrink-0">
                  {member.hasCustomPhoto ? (
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-navy-950 flex flex-col items-center justify-center text-center p-6">
                      <div className="w-16 h-16 rounded-full bg-navy-800 border-2 border-gold-400/60 flex items-center justify-center mb-3">
                        <Award className="w-8 h-8 text-gold-400" />
                      </div>
                      <div className="font-serif text-sm font-bold text-gold-300">Senior Legal Counsel</div>
                      <div className="text-xs text-slate-400 mt-1">Bar Enrolled 1987</div>
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    {/* Left Top Corner Badge */}
                    {isFounder ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-gold-500 text-navy-950 px-2.5 py-1 rounded-full shadow-sm">
                        <Scale className="w-3 h-3" />
                        Founder · 38+ Yrs
                      </span>
                    ) : member.id === 'shraddha-gaikwad' ? (
                      /* USER REQUEST: "only keep the advicate tag in the sharadha image" */
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-navy-950/85 text-gold-400 px-2.5 py-1 rounded-full border border-gold-500/40 backdrop-blur-xs shadow-xs">
                        <Scale className="w-2.5 h-2.5" />
                        Advocate
                      </span>
                    ) : member.id === 'shruti-gaikwad' ? (
                      /* USER REQUEST: "remove the left top coner batch which you kepe" */
                      <span />
                    ) : member.id === 'deepak-hundekar' ? (
                      /* USER REQUEST: "in the depak hudner add the advocate and the tax consultant in the tag" */
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-navy-950/90 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/50 backdrop-blur-xs shadow-xs">
                        <Scale className="w-2.5 h-2.5" />
                        Advocate & Tax Consultant
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-navy-950/85 text-gold-400 px-2.5 py-1 rounded-full border border-gold-500/40 backdrop-blur-xs">
                        <Scale className="w-2.5 h-2.5" />
                        Advocate
                      </span>
                    )}

                    {/* Right Top Corner Badge */}
                    {/* USER REQUEST: "add this image right top coner" -> Certified Counsellor for Shraddha and Shruti */}
                    {member.id === 'shraddha-gaikwad' || member.id === 'shruti-gaikwad' ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-teal-600/95 text-white px-2.5 py-1 rounded-full border border-teal-400/40 shadow-xs backdrop-blur-xs">
                        <Heart className="w-2.5 h-2.5" />
                        Certified Counsellor
                      </span>
                    ) : member.barEnrolment && !isFounder ? (
                      <span className="text-[10px] font-mono text-slate-300 bg-navy-950/80 px-2 py-0.5 rounded border border-navy-700 backdrop-blur-xs">
                        {member.barEnrolment.split('/')[1] ? `${member.barEnrolment.split('/')[0]}/${member.barEnrolment.split('/')[1]}` : member.barEnrolment}
                      </span>
                    ) : null}
                  </div>

                  {/* Founder Highlight Banner */}
                  {isFounder && (
                    <div className="absolute bottom-2 left-3 right-3 bg-navy-950/95 backdrop-blur-xs border border-gold-400/50 rounded-xl px-3 py-2 pointer-events-none shadow-lg">
                      <div className="text-xs font-bold text-gold-300 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span className="truncate">Former Asst. Public Prosecutor (1997–2019, 22 Years) & Ex-Special PP (PCPNDT)</span>
                      </div>
                      <div className="text-[11px] text-slate-200 truncate mt-0.5 font-medium">
                        10,000+ Total Cases Handled · Vaijapur · Barshi · Rajgurunagar · Thane Court · Vadgaon Maval
                      </div>
                    </div>
                  )}

                  {/* Deepak Hundekar Associate Partner Chambers Badge */}
                  {member.id === 'deepak-hundekar' && (
                    <div className="absolute bottom-2 left-3 right-3 bg-navy-950/95 backdrop-blur-xs border border-amber-500/50 rounded-xl px-3 py-2 pointer-events-none shadow-lg">
                      <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5 truncate">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Associate Partner Chambers · Tuljapur</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info Content (Clickable Profile Area) */}
                <div className="flex flex-col flex-1 p-5 space-y-3">
                  <div>
                    {/* Name + LinkedIn (Only beside name) */}
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-gold-300 transition-colors">
                        {member.name}
                      </h3>
                      {member.linkedinUrl && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-[#0A66C2] transition-colors shrink-0"
                          title="View LinkedIn Profile"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                    <div className="text-gold-400 text-sm font-semibold mt-1.5 leading-snug">
                      {member.designation}
                    </div>
                    <div className="text-slate-200 text-xs sm:text-sm mt-1 font-medium">
                      {member.qualifications}
                    </div>
                  </div>

                  {/* Contact Snippets with Call, WhatsApp, and Email Symbols (NO MO. NO. TEXT) */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-sm">
                    {member.mobile && (
                      <div className="flex items-center gap-2 bg-navy-950/70 border border-navy-700/80 px-3 py-1.5 rounded-lg">
                        {/* Call Symbol */}
                        <a
                          href={`tel:${member.mobile.replace(/[^0-9+]/g, '')}`}
                          onClick={(e) => e.stopPropagation()}
                          className="text-teal-400 hover:text-teal-300 transition-colors"
                          title="Call directly"
                          aria-label="Call"
                        >
                          <Phone className="w-4 h-4" />
                        </a>

                        {/* WhatsApp Symbol */}
                        <a
                          href={`https://wa.me/${member.whatsappNumber || member.mobile.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(member.name)},%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-emerald-400 hover:text-emerald-300 transition-colors"
                          title="Chat on WhatsApp"
                          aria-label="WhatsApp"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.63 8.55 7.63 9.71C7.63 10.88 8.48 12 8.6 12.17C8.72 12.33 10.28 14.73 12.67 15.76C13.24 16.01 13.69 16.16 14.04 16.27C14.62 16.46 15.15 16.43 15.57 16.37C16.04 16.3 17.02 15.78 17.22 15.21C17.43 14.64 17.43 14.15 17.37 14.05C17.31 13.95 17.14 13.89 16.89 13.76C16.63 13.64 15.38 13.02 15.15 12.94C14.92 12.85 14.76 12.81 14.59 13.06C14.43 13.3 13.95 13.87 13.81 14.03C13.67 14.19 13.53 14.21 13.27 14.09C13.02 13.96 12.21 13.7 11.24 12.84C10.49 12.17 9.98 11.35 9.84 11.1C9.69 10.86 9.82 10.72 9.95 10.6C10.06 10.48 10.2 10.3 10.33 10.16C10.46 10.01 10.5 9.91 10.59 9.74C10.67 9.58 10.63 9.43 10.57 9.31C10.5 9.19 10.04 8.04 9.84 7.57C9.66 7.12 9.47 7.18 9.32 7.17C9.18 7.16 9.02 7.16 8.85 7.16L9.11 7.44Z"/>
                          </svg>
                        </a>

                        {/* Phone Number Display (Clean) */}
                        <span className="font-mono text-slate-100 text-xs sm:text-sm font-semibold tracking-wide">{member.mobile}</span>
                      </div>
                    )}

                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-navy-950/70 hover:bg-gold-500/20 text-gold-400 border border-navy-700/80 transition-colors"
                        title={`Email ${member.name}`}
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.specialties.slice(0, 3).map((spec, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded bg-navy-950/70 border border-navy-700/80 text-slate-200 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed line-clamp-3 pt-1">
                    {member.bio}
                  </p>

                  <div className="flex-1" />

                  {/* Bottom Action Bar: ONLY Consult With Advocate Button */}
                  <div className="pt-3 border-t border-navy-700/80">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onConsultWithMember(member);
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 text-sm font-bold transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm group/btn"
                    >
                      <span>{member.id === 'shruti-gaikwad' ? 'Consult With Counsellor' : 'Consult With Advocate'}</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Jurisdictions Bar */}
        <div className="mt-12 pt-10 border-t border-navy-800 text-left">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gold-400 uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4 text-teal-400" />
            Active Trial Jurisdictions (District & Sessions Courts · JMFC)
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {jurisdictionPills.map((court) => (
              <span
                key={court}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-navy-800/90 dark:bg-navy-900 border border-navy-700 text-xs sm:text-sm text-slate-100 font-medium shadow-xs"
              >
                {court}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-300 mt-4 font-normal leading-relaxed">
            Extensive courtroom representation across <strong className="text-gold-300 font-medium">District & Sessions Courts, JMFC (Judicial Magistrate First Class)</strong>, and Special Tribunals (MACT, Consumer Forums, Land Revenue & Family Courts) with practice credentials under Section 30 of the Advocates Act, 1961.
          </p>
        </div>

      </div>

      {/* Team Member Profile & Career Timeline Modal */}
      {activeModalMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-navy-900 border border-navy-700 rounded-2xl shadow-2xl p-6 sm:p-8 text-left text-white">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalMember(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-navy-800 text-slate-300 hover:text-white hover:bg-navy-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center pb-6 border-b border-navy-800">
              <img
                src={activeModalMember.photoUrl}
                alt={activeModalMember.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-gold-400/40 shrink-0 shadow-md"
              />
              <div className="space-y-1.5 flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                  {activeModalMember.role}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {activeModalMember.name}
                </h3>
                <p className="text-sm font-semibold text-gold-300">{activeModalMember.designation}</p>
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm font-mono text-slate-300">
                  <span className="text-slate-100 font-semibold">{activeModalMember.qualifications}</span>
                  {activeModalMember.barEnrolment && (
                    <>
                      <span>•</span>
                      <span className="text-gold-300 font-bold">{activeModalMember.barEnrolment}</span>
                    </>
                  )}
                  {activeModalMember.copNumber && (
                    <>
                      <span>•</span>
                      <span className="text-teal-300 font-bold">{activeModalMember.copNumber}</span>
                    </>
                  )}
                </div>

                {/* Office Location if present */}
                {activeModalMember.officeLocation && (
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 pt-1">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{activeModalMember.officeLocation}</span>
                  </div>
                )}

                {/* Direct Contact Buttons inside Modal with Symbols */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2.5">
                  {activeModalMember.mobile && (
                    <a
                      href={`tel:${activeModalMember.mobile.replace(/[^0-9+]/g, '')}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-teal-300 bg-teal-950/70 hover:bg-teal-900 px-3 py-1.5 rounded-lg border border-teal-700/70 transition-colors"
                      title="Direct Call"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{activeModalMember.mobile}</span>
                    </a>
                  )}

                  {activeModalMember.mobile && (
                    <a
                      href={`https://wa.me/${activeModalMember.whatsappNumber || activeModalMember.mobile.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(activeModalMember.name)},%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900 px-3 py-1.5 rounded-lg border border-emerald-700/70 transition-colors"
                      title="WhatsApp Chat"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.63 8.55 7.63 9.71C7.63 10.88 8.48 12 8.6 12.17C8.72 12.33 10.28 14.73 12.67 15.76C13.24 16.01 13.69 16.16 14.04 16.27C14.62 16.46 15.15 16.43 15.57 16.37C16.04 16.3 17.02 15.78 17.22 15.21C17.43 14.64 17.43 14.15 17.37 14.05C17.31 13.95 17.14 13.89 16.89 13.76C16.63 13.64 15.38 13.02 15.15 12.94C14.92 12.85 14.76 12.81 14.59 13.06C14.43 13.3 13.95 13.87 13.81 14.03C13.67 14.19 13.53 14.21 13.27 14.09C13.02 13.96 12.21 13.7 11.24 12.84C10.49 12.17 9.98 11.35 9.84 11.1C9.69 10.86 9.82 10.72 9.95 10.6C10.06 10.48 10.2 10.3 10.33 10.16C10.46 10.01 10.5 9.91 10.59 9.74C10.67 9.58 10.63 9.43 10.57 9.31C10.5 9.19 10.04 8.04 9.84 7.57C9.66 7.12 9.47 7.18 9.32 7.17C9.18 7.16 9.02 7.16 8.85 7.16L9.11 7.44Z"/>
                      </svg>
                      <span>WhatsApp Chat</span>
                    </a>
                  )}

                  {activeModalMember.email && (
                    <a
                      href={`mailto:${activeModalMember.email}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-navy-800 hover:bg-navy-700 px-3 py-1.5 rounded-lg border border-navy-700 transition-colors"
                      title="Direct Email"
                    >
                      <Mail className="w-4 h-4 text-gold-400" />
                      <span className="truncate max-w-[220px]">{activeModalMember.email}</span>
                    </a>
                  )}

                  {activeModalMember.linkedinUrl && (
                    <a
                      href={activeModalMember.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-[#0A66C2] hover:bg-[#004182] px-3.5 py-1.5 rounded-lg transition-colors shadow-xs"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Bio & Professional Summary */}
            <div className="py-5 space-y-4">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gold-400">Professional Summary</h4>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
                {activeModalMember.bio}
              </p>

              {/* Special Detailed Section for Adv. Balasaheb Gaikwad */}
              {activeModalMember.id === 'balu-gaikwad' && (
                <div className="space-y-4 pt-2">
                  <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-navy-950 via-navy-950 to-navy-900 border border-gold-500/40 space-y-3">
                    <div className="text-xs sm:text-sm font-bold text-gold-300 uppercase tracking-wider flex items-center gap-2">
                      <Shield className="w-4 h-4 text-gold-400" />
                      <span>38+ Years Judicial & Criminal Practice Milestones</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200 pt-1">
                      <li className="flex items-start gap-2">
                        <span className="text-gold-400 font-bold text-base leading-none">•</span>
                        <span><strong>10,000+ Contested Matters:</strong> Extensive trial experience across JMFC and District & Sessions Courts as criminal defense counsel and prosecutor.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-400 font-bold text-base leading-none">•</span>
                        <span><strong>Ex-Special Public Prosecutor (PCPNDT):</strong> Formally appointed by the Government of Maharashtra for Pune and Thane districts.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-400 font-bold text-base leading-none">•</span>
                        <span><strong>22 Years State Prosecution:</strong> Served Maharashtra State as Ex-Asst. Public Prosecutor across Vaijapur, Barshi, Rajgurunagar, Thane Court, and Vadgaon Maval (1997–2019).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-400 font-bold text-base leading-none">•</span>
                        <span><strong>Trial Advocacy Leadership:</strong> Deep mastery in Sessions Trials, cross-examinations, bail jurisprudence (CrPC / BNSS), and civil appeals.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Special Detailed Section for Adv. Abhijeet Gaikwad */}
              {activeModalMember.id === 'abhijeet-gaikwad' && (
                <div className="space-y-4 pt-2">
                  <div className="p-4 sm:p-5 rounded-xl bg-navy-950/80 border border-teal-500/30 space-y-3">
                    <div className="text-xs sm:text-sm font-bold text-teal-300 uppercase tracking-wider flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-teal-400" />
                      <span>Civil Suits & Documentation Practice Focus</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200 pt-1">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 font-bold text-base leading-none">•</span>
                        <span><strong>Civil Suits & Plaints:</strong> Drafting and filing of plaints, temporary and permanent injunctions, written statements, declaration, and partition suits.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 font-bold text-base leading-none">•</span>
                        <span><strong>Property & Title Due Diligence:</strong> 30-year search reports, 7/12 extract verification, mutation entry (Ferfar) dispute analysis.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 font-bold text-base leading-none">•</span>
                        <span><strong>Wills & Succession:</strong> Drafting testamentary wills, succession certificates, probate petitions, and partition deeds.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 font-bold text-base leading-none">•</span>
                        <span><strong>Commercial & Revenue Proceedings:</strong> Representing clients before Tahsildar, SDO, Collector, and Civil Judges Senior Division.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Special Detailed Section for Adv. Shreya Gaikwad */}
              {activeModalMember.id === 'shreya-gaikwad' && (
                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-navy-950/80 border border-gold-500/30 space-y-2">
                    <div className="text-xs font-bold text-gold-300 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-gold-400" />
                      <span>Trial Court & Appellate Practice Highlights (50+ Contested Matters Docket)</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-200 pt-1">
                      <li className="flex items-start gap-1.5">
                        <span className="text-gold-400 font-bold">•</span>
                        <span><strong>Criminal & Sessions Trials:</strong> Cross-examination of prosecution witnesses, bail hearings (Sec 437/438/439 CrPC / BNSS).</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-gold-400 font-bold">•</span>
                        <span><strong>Family Court Victory:</strong> Successfully secured sole child custody of minor boy in favor of mother + maintenance relief.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-gold-400 font-bold">•</span>
                        <span><strong>MACP Claims:</strong> Resolution of compensation claims before Motor Accident Claims Tribunals (MACT).</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-gold-400 font-bold">•</span>
                        <span><strong>Debt Recovery (Sec 138 NI Act):</strong> High-recovery summary trials and court-annexed settlements.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-gold-400 font-bold">•</span>
                        <span><strong>Pre-Litigation Mediation:</strong> Over 35% disputes resolved peacefully out of court through structured mediation.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-gold-400 font-bold">•</span>
                        <span><strong>Corporate & Contracts:</strong> Master services agreements, NDAs, business compliance (LL.M. Business Law).</span>
                      </li>
                    </ul>
                  </div>

                  {/* Academic Qualifications Table for Adv. Shreya */}
                  <div className="pt-2">
                    <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5 mb-2">
                      <GraduationCap className="w-4 h-4" />
                      Academic Qualifications & Universities
                    </h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs sm:text-sm text-left text-slate-200 border border-navy-800 rounded-lg overflow-hidden">
                        <thead className="bg-navy-950 text-gold-400 uppercase text-xs font-bold">
                          <tr>
                            <th className="p-2.5 border-b border-navy-800">Degree / Course</th>
                            <th className="p-2.5 border-b border-navy-800">College / Institute</th>
                            <th className="p-2.5 border-b border-navy-800">University</th>
                            <th className="p-2.5 border-b border-navy-800">Year</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-navy-800 bg-navy-900/60">
                          <tr>
                            <td className="p-2.5 font-semibold text-white">LL.M. (Business Law)</td>
                            <td className="p-2.5">DES Shri Navalmal Firodia Law College, Pune</td>
                            <td className="p-2.5">SPPU, Pune</td>
                            <td className="p-2.5 font-mono text-gold-300">2021 – 2023</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-semibold text-white">LL.B.</td>
                            <td className="p-2.5">Sarsenapati Hambirrao Mohite Law College, Rajgurunagar</td>
                            <td className="p-2.5">SPPU, Pune</td>
                            <td className="p-2.5 font-mono text-gold-300">2018 – 2021</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-semibold text-white">B.A.</td>
                            <td className="p-2.5">Modern College of Arts, Science & Commerce, Ganeshkhind</td>
                            <td className="p-2.5">SPPU, Pune</td>
                            <td className="p-2.5 font-mono text-gold-300">2013 – 2016</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Special Detailed Section for Adv. Shraddha Gaikwad */}
              {activeModalMember.id === 'shraddha-gaikwad' && (
                <div className="space-y-3 pt-2">
                  <div className="p-4 sm:p-5 rounded-xl bg-navy-950/80 border border-teal-500/30 space-y-2.5">
                    <div className="text-xs sm:text-sm font-bold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-teal-400" />
                      <span>Counselling Practice Domains & Brain Science Guidance</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-200 pt-1">
                      <li className="flex items-start gap-1.5">
                        <span className="text-teal-400 font-bold">•</span>
                        <span><strong>Parent Counselling & Parental Guidance:</strong> Understanding emotional & developmental needs, managing screen time & academic pressure.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-teal-400 font-bold">•</span>
                        <span><strong>Parent–Child Relationship Counselling:</strong> Active listening, bridging generational gaps, resolving trust conflicts.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-teal-400 font-bold">•</span>
                        <span><strong>Brain Science Counselling:</strong> Empathetic cognitive guidance, emotional realignment, and supportive psychoeducation.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-teal-400 font-bold">•</span>
                        <span><strong>Brain Science Counselling Diploma:</strong> Certified from Brainway Research Foundation & Medhavi Skills University.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Special Detailed Section for Miss Shruti Gaikwad */}
              {activeModalMember.id === 'shruti-gaikwad' && (
                <div className="space-y-3 pt-2">
                  <div className="p-4 sm:p-5 rounded-xl bg-navy-950/80 border border-teal-500/30 space-y-2.5">
                    <div className="text-xs sm:text-sm font-bold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-teal-400" />
                      <span>Counselling Practice Domains & Psychoeducational Guidance</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-200 pt-1">
                      <li className="flex items-start gap-1.5">
                        <span className="text-teal-400 font-bold">•</span>
                        <span><strong>Student Counselling & Academic Guidance:</strong> Exam anxiety, performance pressure, overthinking, time management & concentration.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-teal-400 font-bold">•</span>
                        <span><strong>Adolescent Counselling:</strong> Teenage transitions, peer pressure, self-esteem, identity questions, and responsible decision-making.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-teal-400 font-bold">•</span>
                        <span><strong>Overthinking & Negative Thought Management:</strong> Breaking repetitive mental loops, cognitive reframing, and mental clarity.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-teal-400 font-bold">•</span>
                        <span><strong>Hormonal Health Psychoeducation:</strong> The biochemistry of stress hormones (cortisol & adrenaline), sleep, and healthy lifestyle habits.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-teal-400 font-bold">•</span>
                        <span><strong>Introduction to Therapeutic Approaches:</strong> CBT awareness, guided mindfulness meditation, and diaphragmatic breathing exercises.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-teal-400 font-bold">•</span>
                        <span><strong>Academic Training:</strong> M.Sc. in Organic Chemistry + Diploma in Basic Counselling Skills (Certificate No. 1930/2026).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Career Timeline (for Adv. Balasaheb Gaikwad, Adv. Deepak, etc.) */}
              {activeModalMember.careerTimeline && activeModalMember.careerTimeline.length > 0 && (
                <div className="pt-3 space-y-3">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    Judicial Postings & Career Timeline
                  </h4>
                  <div className="space-y-3 border-l-2 border-gold-500/40 ml-2 pl-4">
                    {activeModalMember.careerTimeline.map((item, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold-400 border-2 border-navy-900" />
                        <div className="text-xs sm:text-sm font-mono font-bold text-gold-300">{item.period}</div>
                        <div className="text-sm font-semibold text-white">{item.role} — <span className="text-slate-200 font-normal">{item.location}</span></div>
                        {item.details && (
                          <div className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">{item.details}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Practice Specialties */}
              <div className="pt-3">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Practice Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalMember.specialties.map((spec, idx) => (
                    <span
                      key={idx}
                      className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-navy-800 border border-navy-700 text-slate-200 font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Certificates */}
              {activeModalMember.certificates && activeModalMember.certificates.length > 0 && (
                <div className="pt-3">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gold-400 mb-2">Verified Enrolment & Diplomas</h4>
                  <div className="space-y-2.5">
                    {activeModalMember.certificates.map((cert, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-navy-950/70 border border-navy-800 flex items-center justify-between"
                      >
                        <div className="space-y-0.5">
                          <div className="text-xs sm:text-sm font-semibold text-white">{cert.title}</div>
                          <div className="text-xs text-slate-300">{cert.description}</div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 ml-3" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-5 border-t border-navy-800 flex justify-end gap-3">
              <button
                onClick={() => setActiveModalMember(null)}
                className="px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-sm font-medium text-slate-200 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const m = activeModalMember;
                  setActiveModalMember(null);
                  onConsultWithMember(m);
                }}
                className="px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-sm font-bold text-navy-950 shadow-md transition-colors"
              >
                Book Consultation
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};