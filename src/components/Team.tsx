import React from 'react';
import { Shield, FileCheck, Award, FileText, Download, GraduationCap, MapPin } from 'lucide-react';
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
    <section id="team" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60 inline-block">
            Our Legal Team & Associates
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800">
            Dedicated Advocates with Verified Credentials
          </h2>
          <p className="text-base sm:text-lg text-slate-muted">
            Representing clients across trial & appellate courts with verified Bar Council credentials, academic depth, and strict adherence to Bar Council of India standards.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 hover:border-teal-500/40 hover:shadow-card-hover transition-all duration-300 overflow-hidden text-left"
            >
              <div>
                {/* Portrait / Visual Frame */}
                <div className="relative h-72 sm:h-80 bg-slate-100 overflow-hidden">
                  {member.hasCustomPhoto ? (
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    // Senior Founder Presentation
                    <div className="w-full h-full bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 flex flex-col items-center justify-center p-6 text-center text-white relative">
                      <div className="w-20 h-20 rounded-full bg-navy-700/80 border-2 border-gold-400/80 flex items-center justify-center mb-3 shadow-lg">
                        <Award className="w-10 h-10 text-gold-400" />
                      </div>
                      <div className="font-serif text-lg font-bold text-gold-300">
                        Senior Legal Counsel
                      </div>
                      <div className="text-xs text-slate-300 font-medium mt-1">
                        Bar Enrolled 1987
                      </div>
                      <div className="text-[11px] text-teal-300 bg-teal-900/60 px-2.5 py-1 rounded-full mt-3 border border-teal-500/30">
                        MAH / 1647 / 1987
                      </div>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />

                  {/* Top Bar Registration Badge */}
                  {member.barEnrolment && (
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-navy-800 border border-slate-200 shadow-sm flex items-center gap-1">
                      <Shield className="w-3 h-3 text-teal-600" />
                      <span>{member.barEnrolment}</span>
                    </div>
                  )}

                  {/* Bottom Name on Photo */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="text-xs font-medium text-gold-300 uppercase tracking-wider">
                      {member.role}
                    </div>
                    <div className="font-serif text-xl font-bold leading-tight drop-shadow-sm">
                      {member.name}
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 space-y-4">
                  {/* Qualifications & Designation */}
                  <div>
                    <div className="text-xs font-bold text-teal-700">
                      {member.qualifications}
                    </div>
                    <div className="text-xs text-slate-muted leading-tight mt-0.5">
                      {member.designation}
                    </div>
                    {member.copNumber && (
                      <div className="text-[10px] text-navy-800 font-mono bg-slate-soft px-2 py-0.5 rounded mt-1.5 inline-block border border-slate-200">
                        BCI CoP: {member.copNumber}
                      </div>
                    )}
                  </div>

                  {/* Education snippet if available */}
                  {member.education && member.education.length > 0 && (
                    <div className="p-2.5 rounded-lg bg-teal-50/50 border border-teal-100 text-[11px] space-y-1">
                      <div className="font-bold text-teal-800 flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>Academic Excellence</span>
                      </div>
                      <div className="text-slate-muted text-[10px] leading-tight">
                        {member.education[0].degree} — {member.education[0].institution.split(',')[0]}
                      </div>
                    </div>
                  )}

                  {/* Practice Specialties */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-subtle">
                      Core Practice
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.slice(0, 3).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] bg-slate-soft text-slate-dark px-2 py-0.5 rounded border border-slate-200"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bio snippet */}
                  <p className="text-xs text-slate-muted leading-relaxed line-clamp-4">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 space-y-2">
                {/* Resume download / view button if available */}
                {member.resumeUrl && (
                  <a
                    href={member.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-lg bg-navy-50 hover:bg-navy-100/80 text-navy-900 text-xs font-semibold flex items-center justify-center gap-1.5 border border-navy-200 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-navy-700" />
                    <span>View Legal Resume (PDF)</span>
                    <Download className="w-3 h-3 text-navy-500 ml-auto" />
                  </a>
                )}

                {member.certificates.length > 0 && (
                  <button
                    onClick={() => onViewMemberCertificates(member)}
                    className="w-full py-2 px-3 rounded-lg bg-teal-50 hover:bg-teal-100/80 text-teal-800 text-xs font-semibold flex items-center justify-center gap-1.5 border border-teal-200/70 transition-colors"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>View Bar Certificate ({member.certificates.length})</span>
                  </button>
                )}

                <button
                  onClick={() => onConsultWithMember(member)}
                  className="w-full py-2 px-3 rounded-lg bg-navy-800 hover:bg-navy-900 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Request Consultation</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Regulatory Transparency Box with Courts */}
        <div className="mt-12 p-5 rounded-xl bg-slate-soft/70 border border-slate-200 text-center max-w-4xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-navy-800 uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-teal-600" />
            <span>Active Trial & Appellate Jurisdictions</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 pt-1 text-xs">
            <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200 text-navy-800 font-medium">Rajgurunagar (Khed) Court</span>
            <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200 text-navy-800 font-medium">Pune District & Sessions Court</span>
            <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200 text-navy-800 font-medium">Bombay High Court (Mumbai)</span>
            <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200 text-navy-800 font-medium">Thane Judiciary</span>
            <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200 text-navy-800 font-medium">Junnar Court</span>
            <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200 text-navy-800 font-medium">Vadgaon Maval</span>
          </div>
          <p className="text-[11px] text-slate-muted pt-1">
            Enrolment records and certifications displayed above are verified against original records maintained with the Bar Council of Maharashtra & Goa under Section 17 of the Advocates Act, 1961.
          </p>
        </div>

      </div>
    </section>
  );
};
