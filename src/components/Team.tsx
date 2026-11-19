import React from 'react';
import { ChevronRight, Heart, Award, MapPin } from 'lucide-react';
import { teamMembers } from '../data/firmData';
import { TeamMember } from '../types/index';

interface TeamProps {
  onConsultWithMember: (member: TeamMember) => void;
}

const counsellorIds = ['shraddha-gaikwad', 'shruti-gaikwad'];

const jurisdictionPills = [
  'Rajgurunagar (Khed) Court',
  'Pune District & Sessions Court',
  'Bombay High Court (Mumbai)',
  'Thane Judiciary',
  'Junnar Court',
  'Vadgaon Maval',
];

export const Team: React.FC<TeamProps> = ({ onConsultWithMember }) => {
  return (
    <section id="team" className="py-20 md:py-28 bg-navy-900 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Legal Practitioners
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
            Meet the Team
          </h2>
          <div className="h-0.5 w-16 bg-gold-500" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => {
            const isCounsellor = counsellorIds.includes(member.id);
            return (
              <div
                key={member.id}
                className="flex flex-col rounded-xl bg-navy-800 dark:bg-navy-900 border border-navy-700 dark:border-navy-800 overflow-hidden hover:border-gold-500/40 hover:shadow-card transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative h-60 bg-navy-950 overflow-hidden shrink-0">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                  {/* Counsellor badge */}
                  {isCounsellor && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-teal-600/90 text-white px-2.5 py-1 rounded-full border border-teal-400/40">
                        <Heart className="w-2.5 h-2.5" />
                        Certified Counsellor
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-5 space-y-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white leading-tight">{member.name}</h3>
                    <div className="text-gold-400 text-xs font-semibold mt-0.5">{member.role}</div>
                    <div className="text-slate-400 text-xs mt-1">{member.qualifications}</div>
                  </div>

                  {member.barEnrolment && (
                    <div className="text-[11px] font-mono text-slate-400 bg-navy-950/60 px-3 py-1.5 rounded-lg border border-navy-700 w-fit">
                      Enrolled {member.barEnrolmentDate?.split(' ').slice(-1)[0] ?? member.barEnrolment.split('/').slice(-1)[0]}
                    </div>
                  )}

                  <div className="flex-1" />

                  <button
                    onClick={() => onConsultWithMember(member)}
                    className="w-full py-2.5 px-4 rounded-lg border border-white/20 text-white text-xs font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5"
                  >
                    Consult
                    <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Jurisdictions bar */}
        <div className="mt-14 pt-10 border-t border-navy-800">
          <div className="flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4 text-teal-400" />
            Active Trial & Appellate Jurisdictions
          </div>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {jurisdictionPills.map((court) => (
              <span
                key={court}
                className="px-4 py-2 rounded-lg bg-navy-800/90 dark:bg-navy-900 border border-navy-700 text-sm text-slate-100 font-medium shadow-xs"
              >
                {court}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4 font-normal">
            Extensive courtroom and appellate representation across <strong className="text-gold-300 font-medium">Pan-India Courts</strong>, High Courts, and Special Forums (MACT, Consumer Forums, Land Revenue & Family Courts) with All-India practice credentials under the Advocates Act, 1961.
          </p>
        </div>

      </div>
    </section>
  );
};
