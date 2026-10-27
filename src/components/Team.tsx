import React from 'react';
import { Award, FileText, Download, GraduationCap, MapPin, ChevronRight, FileCheck } from 'lucide-react';
import { teamMembers } from '../data/firmData';
import { TeamMember } from '../types';

interface TeamProps {
  onViewMemberCertificates: (member: TeamMember) => void;
  onConsultWithMember: (member: TeamMember) => void;
}

export const Team: React.FC<TeamProps> = ({ 
  onViewMemberCertificates, 
  onConsultWithMember 
}) => {
  return (
    <section id="team" className="py-16 md:py-24 bg-slate-soft/50 dark:bg-navy-900/60 border-b border-slate-200/70 dark:border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/40 px-3 py-1 rounded-md border border-teal-200/60 dark:border-teal-700/50 inline-block">
            Legal Practitioners
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 dark:text-white">
            Meet Our Attorneys
          </h2>
          <p className="text-base sm:text-lg text-slate-muted dark:text-slate-400">
            Distinguished legal practitioners dedicated to protecting your rights, providing clear strategy, and resolving complex courtroom disputes.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 hover:border-teal-500/40 dark:hover:border-teal-500/50 hover:shadow-card-hover transition-all duration-300 overflow-hidden text-left"
            >
              <div>
                {/* Portrait Frame */}
                <div className="relative h-64 sm:h-72 bg-slate-100 dark:bg-navy-950 overflow-hidden">
                  {member.hasCustomPhoto ? (
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    // Senior Founder Presentation
                    <div className="w-full h-full bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 flex flex-col items-center justify-center p-6 text-center text-white relative">
                      <div className="w-16 h-16 rounded-full bg-navy-700/80 border-2 border-gold-400/80 flex items-center justify-center mb-3 shadow-md">
                        <Award className="w-8 h-8 text-gold-400" />
                      </div>
                      <div className="font-serif text-base font-bold text-gold-300">
                        Senior Legal Counsel
                      </div>
                      <div className="text-xs text-slate-300 font-medium mt-1">
                        Bar Enrolled 1987
                      </div>
                      <div className="text-[11px] text-teal-300 bg-teal-900/60 px-2.5 py-0.5 rounded-full mt-2 border border-teal-500/30">
                        MAH / 1647 / 1987
                      </div>
                    </div>
                  )}

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                  {/* Name on Photo */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="text-[11px] font-medium text-gold-300 uppercase tracking-wider">
                      {member.role}
                    </div>
                    <div className="font-serif text-lg font-bold leading-tight">
                      {member.name}
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4 sm:p-5 space-y-3.5">
                  {/* Qualifications & Designation */}
                  <div>
                    <div className="text-xs font-bold text-teal-700 dark:text-teal-400">
                      {member.qualifications}
                    </div>
                    <div className="text-xs text-slate-muted dark:text-slate-400 leading-tight mt-0.5">
                      {member.designation}
                    </div>
                  </div>

                  {/* Education snippet if available */}
                  {member.education && member.education.length > 0 && (
                    <div className="p-2.5 rounded-lg bg-teal-50/50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800/40 text-[11px] space-y-0.5">
                      <div className="font-bold text-teal-800 dark:text-teal-300 flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>Education</span>
                      </div>
                      <div className="text-slate-muted dark:text-slate-400 text-[10px] leading-tight line-clamp-1">
                        {member.education[0].degree} — {member.education[0].institution.split(',')[0]}
                      </div>
                    </div>
                  )}

                  {/* Practice Specialties */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-subtle dark:text-slate-500">
                      Specialties
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.slice(0, 3).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] bg-slate-soft dark:bg-navy-800 text-slate-dark dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-navy-700"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bio snippet */}
                  <p className="text-xs text-slate-muted dark:text-slate-400 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:p-5 pt-0 space-y-2">
                {member.resumeUrl && (
                  <a
                    href={member.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-lg bg-navy-50 dark:bg-navy-800 hover:bg-navy-100/80 dark:hover:bg-navy-700 text-navy-900 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-navy-200/80 dark:border-navy-700 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-navy-700 dark:text-teal-400" />
                    <span>View Resume (PDF)</span>
                    <Download className="w-3 h-3 text-navy-500 dark:text-slate-400 ml-auto" />
                  </a>
                )}

                {member.certificates.length > 0 && (
                  <button
                    onClick={() => onViewMemberCertificates(member)}
                    className="w-full py-1.5 px-3 rounded-lg bg-slate-soft dark:bg-navy-800/60 hover:bg-slate-200/70 dark:hover:bg-navy-800 text-slate-dark dark:text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5 border border-slate-200/70 dark:border-navy-700 transition-colors"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>Credentials ({member.certificates.length})</span>
                  </button>
                )}

                <button
                  onClick={() => onConsultWithMember(member)}
                  className="w-full py-2 px-3 rounded-lg bg-navy-800 hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Request Consultation</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400 dark:text-white" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Regulatory Transparency Box with Courts */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-slate-soft/70 dark:bg-navy-900/60 border border-slate-200 dark:border-navy-800 text-center max-w-4xl mx-auto space-y-2 transition-colors">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-navy-800 dark:text-slate-200 uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>Active Trial & Appellate Jurisdictions</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 pt-1 text-xs">
            <span className="px-2.5 py-1 bg-white dark:bg-navy-800 rounded-md border border-slate-200 dark:border-navy-700 text-navy-800 dark:text-slate-200 font-medium">Rajgurunagar (Khed) Court</span>
            <span className="px-2.5 py-1 bg-white dark:bg-navy-800 rounded-md border border-slate-200 dark:border-navy-700 text-navy-800 dark:text-slate-200 font-medium">Pune District & Sessions Court</span>
            <span className="px-2.5 py-1 bg-white dark:bg-navy-800 rounded-md border border-slate-200 dark:border-navy-700 text-navy-800 dark:text-slate-200 font-medium">Bombay High Court (Mumbai)</span>
            <span className="px-2.5 py-1 bg-white dark:bg-navy-800 rounded-md border border-slate-200 dark:border-navy-700 text-navy-800 dark:text-slate-200 font-medium">Thane District Court</span>
          </div>
        </div>

      </div>
    </section>
  );
};
