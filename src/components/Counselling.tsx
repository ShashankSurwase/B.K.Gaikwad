import React from 'react';
import { Heart, Brain, Users, Sparkles, GraduationCap, ChevronRight, Award, ShieldCheck, Lock } from 'lucide-react';
import { firmConfig } from '../data/firmData';

const counsellingServices = [
  {
    icon: Heart,
    title: 'Relationship & Marriage Counselling',
    tag: 'Couples & Family',
    description: 'Specialized support for communication breakdowns, marriage conflicts, pre-marital alignment, divorce prevention, and healthy co-parenting arrangements.',
  },
  {
    icon: Sparkles,
    title: 'Stress, Anxiety & Burnout Support',
    tag: 'Emotional Health',
    description: 'Evidence-based guidance to overcome acute stress, workplace burnout, anxiety, panic episodes, and the emotional overwhelm of litigation or life crises.',
  },
  {
    icon: Brain,
    title: 'OCD & Behavioral Health Guidance',
    tag: 'Brain Science & Habits',
    description: 'Supportive sessions focused on managing intrusive thought loops, compulsive behavioral patterns, grounding techniques, and emotional regulation.',
  },
  {
    icon: GraduationCap,
    title: 'Career & Student Life Guidance',
    tag: 'Youth & Professionals',
    description: 'Dedicated counselling for academic pressure, exam anxiety, career crossroads, job transitions, confidence building, and professional decision-making.',
  },
  {
    icon: Users,
    title: 'Pre-Litigation Conflict Conciliation',
    tag: 'ADR & Peaceful Resolution',
    description: 'Empathetic mediation to resolve domestic, matrimonial, and ancestral property disagreements peacefully before entering prolonged court litigation.',
  },
];

const counsellors = [
  {
    name: 'Adv. Shraddha B. Gaikwad (Sontakke)',
    role: 'Advocate & Certified Counsellor',
    credential: 'Diploma in Basic Counselling Skills (Brain Science, Mental Health & Psychology)',
    institution: 'Brainway Research Foundation & Medhavi Skills University, Pune',
    barEnrolment: 'MAH/11145/2021',
    specialties: 'Matrimonial Mediation, Relationship Dynamics & Emotional Health',
  },
  {
    name: 'Shruti B. Gaikwad',
    role: 'Legal Researcher & Certified Counsellor',
    credential: 'Diploma in Basic Counselling Skills & Brain Science',
    institution: 'Brainway Research Foundation & Medhavi Skills University',
    certNo: 'Certificate No. 1930/2026',
    specialties: 'Student Guidance, Stress Management & Cognitive Reframing',
  },
];

export const Counselling: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="counselling"
      className="py-20 md:py-28 bg-slate-soft dark:bg-navy-900 border-t border-slate-200/80 dark:border-navy-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border border-teal-200/80 dark:border-teal-700 text-xs font-bold tracking-widest uppercase">
            <Brain className="w-3.5 h-3.5" />
            <span>Dedicated Allied Wellness Division</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-800 dark:text-white leading-tight">
            Shivanushka MindCare & Counselling Wing
          </h2>
          <div className="h-0.5 w-16 bg-gold-500" />
          <p className="text-slate-muted dark:text-slate-300 text-base leading-relaxed pt-1">
            Complementing our 35-year legal foundation at {firmConfig.name}, our certified counsellors provide safe, confidential, and empathetic support across life’s emotional, relationship, stress, and career challenges.
          </p>
        </div>

        {/* 5 Specific Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {counsellingServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-navy-800 border border-slate-200/90 dark:border-navy-700 hover:border-teal-500/60 dark:hover:border-teal-500/50 hover:shadow-card transition-all duration-300 text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-900/40 border border-teal-100 dark:border-teal-800 flex items-center justify-center text-teal-600 dark:text-teal-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50/70 dark:bg-teal-950/60 px-2.5 py-1 rounded-md border border-teal-100 dark:border-teal-800">
                      {service.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy-800 dark:text-white leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-muted dark:text-slate-400 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-navy-700">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-300 transition-colors"
                  >
                    <span>Request Confidential Session</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Safe Space & Privacy Assurance Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 text-white border border-navy-800 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                100% Confidential & Non-Judgmental
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                All counselling conversations are conducted under strict privacy protocols. Sessions are available in-person at our confidential chamber rooms or virtually via private video/phone consultation.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-navy-800">
              <div className="inline-flex items-center gap-2 text-xs text-gold-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Protected Privacy Protocol</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certified Counsellors Showcase */}
        <div className="mb-14">
          <div className="text-left mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Our Certified Counsellors</span>
            <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-white mt-1">
              Brain Science & Psychology Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {counsellors.map((counsellor, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white dark:bg-navy-800 border border-slate-200/90 dark:border-navy-700 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 text-left"
              >
                <div className="px-6 py-5 bg-navy-800 dark:bg-navy-950 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0 text-gold-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white leading-tight">{counsellor.name}</h4>
                    <p className="text-xs text-gold-300 font-medium mt-0.5">{counsellor.role}</p>
                    {'barEnrolment' in counsellor && counsellor.barEnrolment && (
                      <span className="inline-block mt-1.5 text-[10px] font-mono bg-white/10 text-white/90 px-2.5 py-0.5 rounded-full border border-white/20">
                        {counsellor.barEnrolment}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">Diploma & Accreditation</div>
                    <p className="text-sm font-semibold text-navy-800 dark:text-white leading-snug mt-0.5">{counsellor.credential}</p>
                    <p className="text-xs text-slate-muted dark:text-slate-400 leading-relaxed mt-0.5">{counsellor.institution}</p>
                    {'certNo' in counsellor && counsellor.certNo && (
                      <p className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold mt-1">{counsellor.certNo}</p>
                    )}
                  </div>
                  <div className="pt-2 border-t border-slate-100 dark:border-navy-700">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Focus: </span>
                    <span className="text-xs font-medium text-slate-dark dark:text-slate-300">{counsellor.specialties}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Action Banner */}
        <div className="text-center p-8 rounded-2xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 shadow-card">
          <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-white">
            Need Private Relationship, Stress, OCD or Career Guidance?
          </h3>
          <p className="text-sm text-slate-muted dark:text-slate-400 max-w-xl mx-auto mt-2">
            Schedule a confidential one-on-one session. Whether you are dealing with marital strain, emotional overwhelm, or major life choices, we are here to guide you.
          </p>
          <div className="pt-5">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md transition-all duration-200"
            >
              <span>Book a Counselling Session</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
