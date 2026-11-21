import React, { useState, useRef, useEffect } from 'react';
import {
  Heart, Brain, Users, GraduationCap, ChevronRight,
  ChevronLeft, ShieldCheck, Lock, CheckCircle2,
  Activity, Compass, BookOpen, Wind, X, AlertCircle, ArrowRight,
  Play, Pause, LayoutGrid, SlidersHorizontal, Dna, MessageCircle
} from 'lucide-react';

interface CombinedCounsellingService {
  id: string;
  title: string;
  category: 'students' | 'family' | 'stress' | 'anxiety' | 'hormones' | 'mindfulness' | 'therapy';
  categoryLabel: string;
  tag: string;
  iconType: 'grad' | 'teen' | 'family' | 'brain' | 'activity' | 'dna' | 'wind' | 'book' | 'heart';
  shortDesc: string;
  bullets: string[];
  recommendedFor: string;
}

const combinedServices: CombinedCounsellingService[] = [
  {
    id: 'student-academic-guidance',
    title: 'Student Counselling & Academic Guidance',
    category: 'students',
    categoryLabel: 'Students & Youth',
    tag: 'Academic Success',
    iconType: 'grad',
    shortDesc: 'Deconstructing academic stress, exam anxiety, and performance pressure with structured study and concentration skills.',
    bullets: [
      'Managing academic pressure, exam anxiety, overthinking, and fear of failure',
      'Developing effective study routines, time management, concentration, and goal-setting',
      'Emotional support for students facing peer pressure, competitive stress, and career crossroads'
    ],
    recommendedFor: 'School, college & university students, competitive exam aspirants, and youths navigating career decisions.'
  },
  {
    id: 'adolescent-teen-guidance',
    title: 'Adolescent & Teen Emotional Support',
    category: 'students',
    categoryLabel: 'Students & Youth',
    tag: 'Teen Well-being',
    iconType: 'teen',
    shortDesc: 'Empathetic guidance for teenagers navigating emotional swings, social friction, identity questions, and peer pressure.',
    bullets: [
      'Supporting teenagers through emotional, physical, social, and behavioral transitions',
      'Addressing peer pressure, self-esteem challenges, identity concerns, and social anxiety',
      'Fostering healthy decision-making, inner confidence, emotional resilience, and responsible habits'
    ],
    recommendedFor: 'Teenagers (12–19 years) and adolescents coping with emotional changes, body image, or social stress.'
  },
  {
    id: 'parenting-parent-child-harmony',
    title: 'Parenting Guidance & Parent–Child Harmony',
    category: 'family',
    categoryLabel: 'Parents & Family',
    tag: 'Family Dynamics',
    iconType: 'family',
    shortDesc: 'Bridging generational gaps, resolving trust conflicts, and cultivating positive parenting strategies and active listening.',
    bullets: [
      'Understanding children’s emotional, psychological, and developmental needs across ages',
      'Improving parent–child communication through active listening and mutual empathy',
      'Constructive approaches to academic expectations, behavioural challenges, and screen time management'
    ],
    recommendedFor: 'Parents, guardians, and families experiencing communication friction, generational disputes, or trust breakdown.'
  },
  {
    id: 'stress-overthinking-management',
    title: 'Stress Relief, Overthinking & Thought Pattern Management',
    category: 'stress',
    categoryLabel: 'Stress & Mind',
    tag: 'Cognitive Clarity',
    iconType: 'brain',
    shortDesc: 'Deconstructing repetitive mental loops, unhelpful cognitive habits, and excessive worry to restore mental clarity.',
    bullets: [
      'Understanding the psychological causes and cognitive loops of overthinking',
      'Identifying repetitive negative thought patterns and developing healthier thinking habits',
      'Learning practical relaxation and cognitive reframing strategies to manage acute and chronic stress'
    ],
    recommendedFor: 'Individuals experiencing racing thoughts, analysis paralysis, workplace burnout, or chronic worry.'
  },
  {
    id: 'anxiety-mood-awareness',
    title: 'Anxiety, Panic & Low-Mood Awareness',
    category: 'anxiety',
    categoryLabel: 'Anxiety & Mood',
    tag: 'Emotional Regulation',
    iconType: 'activity',
    shortDesc: 'Safe, supportive psychoeducation to recognize situational anxiety, panic triggers, and depressive feelings with grounding tools.',
    bullets: [
      'Understanding anxiety patterns, somatic panic symptoms, and everyday emotional triggers',
      'Learning immediate sensory grounding, emotional regulation, and calming exercises',
      'Exploring negative thoughts and providing clear guidance and referrals for clinical psychiatric assessment when required'
    ],
    recommendedFor: 'Those experiencing situational nervousness, panic episodes, restlessness, or prolonged low energy.'
  },
  {
    id: 'hormonal-stress-biochemistry',
    title: 'Hormonal Health & Stress Hormones (Cortisol & Adrenaline)',
    category: 'hormones',
    categoryLabel: 'Hormonal Health',
    tag: 'Mind-Body Science',
    iconType: 'dna',
    shortDesc: 'Understanding how cortisol, adrenaline, and endocrine rhythms influence mood, sleep, physical fatigue, and emotional stamina.',
    bullets: [
      'Understanding the functions of cortisol and adrenaline in acute and chronic fight-or-flight responses',
      'Exploring the effects of prolonged stress on sleep architecture, mental focus, fatigue, and mood',
      'Psychoeducation on restorative lifestyle habits, sleep hygiene, and stress regulation (non-medical / encouraging clinical tests)'
    ],
    recommendedFor: 'Individuals suffering from sleep disruptions, unexplained fatigue, nervous exhaustion, or stress burnout.'
  },
  {
    id: 'mindfulness-breathing-relaxation',
    title: 'Mindfulness, Meditation & Diaphragmatic Breathing',
    category: 'mindfulness',
    categoryLabel: 'Therapy & Mindfulness',
    tag: 'Somatic Calm',
    iconType: 'wind',
    shortDesc: 'Mastering diaphragmatic breathwork, somatic relaxation, and present-moment mindfulness to downregulate nervous system arousal.',
    bullets: [
      'Understanding the psychological benefits of mindfulness meditation and present-moment awareness',
      'Learning diaphragmatic breathing and controlled breathing techniques for acute anxiety and tension',
      'Developing sustainable daily relaxation rituals that foster somatic calmness and emotional equilibrium'
    ],
    recommendedFor: 'Anyone seeking immediate, drug-free somatic tools to soothe physical tension, panic spikes, or racing thoughts.'
  },
  {
    id: 'intro-therapeutic-approaches-cbt',
    title: 'Introduction to Therapeutic Approaches (CBT Concepts)',
    category: 'therapy',
    categoryLabel: 'Therapy & Mindfulness',
    tag: 'Evidence-Based Tools',
    iconType: 'book',
    shortDesc: 'Psychoeducational introduction to Cognitive Behavioural Therapy (CBT) principles and cognitive reframing techniques.',
    bullets: [
      'Understanding evidence-based psychological frameworks like CBT for deconstructing unhelpful beliefs',
      'Exploring how thoughts, emotions, and behaviors interact to influence daily wellbeing',
      'Learning practical coping, self-awareness, and emotional regulation skills within the scope of basic counselling qualifications'
    ],
    recommendedFor: 'Clients wanting structured, rational cognitive frameworks to understand and overcome self-limiting beliefs.'
  }
];

const shortFilterTabs = [
  { id: 'all', label: 'All Services' },
  { id: 'students', label: 'Students & Youth' },
  { id: 'family', label: 'Parents & Family' },
  { id: 'stress', label: 'Stress & Overthinking' },
  { id: 'anxiety', label: 'Anxiety & Mood' },
  { id: 'hormones', label: 'Hormonal Health' },
  { id: 'mindfulness', label: 'Therapy & Mindfulness' },
];

export const Counselling: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isRolling, setIsRolling] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'rolling' | 'grid'>('rolling');
  const [selectedService, setSelectedService] = useState<CombinedCounsellingService | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef<boolean>(false);

  const filteredServices = activeTab === 'all'
    ? combinedServices
    : combinedServices.filter(s => s.category === activeTab || (activeTab === 'mindfulness' && (s.category === 'mindfulness' || s.category === 'therapy')));

  // Duplicated list for seamless infinite loop
  const displayServices = [...filteredServices, ...filteredServices];

  // Smooth continuous horizontal scrolling (moving left to right / forward)
  useEffect(() => {
    if (viewMode !== 'rolling' || !isRolling) return;

    const el = carouselRef.current;
    if (!el) return;

    const scrollInterval = setInterval(() => {
      if (isHoveredRef.current || !carouselRef.current) return;
      const { scrollLeft, scrollWidth } = carouselRef.current;
      const halfWidth = scrollWidth / 2;

      // When reaching half width, loop seamlessly back to 0
      if (scrollLeft >= halfWidth) {
        carouselRef.current.scrollLeft = scrollLeft - halfWidth;
      } else {
        carouselRef.current.scrollLeft += 1.2;
      }
    }, 28);

    return () => clearInterval(scrollInterval);
  }, [viewMode, isRolling, activeTab]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 340;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollToContact = (serviceTitle?: string) => {
    setSelectedService(null);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (serviceTitle) {
        setTimeout(() => {
          const selectEl = document.querySelector('select') as HTMLSelectElement | null;
          if (selectEl) {
            const match = Array.from(selectEl.options).find(opt => opt.text.includes(serviceTitle) || opt.value.includes(serviceTitle));
            if (match) selectEl.value = match.value;
          }
        }, 500);
      }
    }
  };

  const renderIcon = (type: CombinedCounsellingService['iconType']) => {
    switch (type) {
      case 'grad':
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'teen':
        return <Compass className="w-5 h-5 text-teal-300" />;
      case 'family':
        return <Users className="w-5 h-5 text-amber-300" />;
      case 'brain':
        return <Brain className="w-5 h-5 text-cyan-300" />;
      case 'activity':
        return <Activity className="w-5 h-5 text-rose-300" />;
      case 'dna':
        return <Dna className="w-5 h-5 text-emerald-300" />;
      case 'wind':
        return <Wind className="w-5 h-5 text-sky-300" />;
      case 'book':
        return <BookOpen className="w-5 h-5 text-indigo-300" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-pink-300" />;
      default:
        return <Brain className="w-5 h-5 text-cyan-300" />;
    }
  };

  return (
    <section
      id="counselling"
      className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-[#06101E] via-[#091B33] to-[#050D1A] text-white overflow-hidden transition-colors border-t border-teal-500/20"
    >
      {/* Visual Ambient Glows & Psychology Neural SVG Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-2/3 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />

        {/* Neural Synapses SVG Matrix Background */}
        <svg
          className="w-full h-full opacity-15 stroke-teal-400/40"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <defs>
            <pattern id="neural-grid" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="#2dd4bf" opacity="0.6" />
              <circle cx="100" cy="40" r="2" fill="#38bdf8" opacity="0.8" />
              <circle cx="50" cy="90" r="1.5" fill="#818cf8" opacity="0.5" />
              <path d="M20 20 L100 40 L50 90 Z" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.35" />
              <path d="M100 40 L120 120 M50 90 L-10 100" strokeWidth="0.5" opacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-4xl mb-8 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950/80 text-teal-300 border border-teal-500/40 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Brain className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
            <span>Dedicated Psychological Science & Wellness Wing</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Mind Care & Counselling Wing
          </h2>

          <div className="h-0.5 w-20 bg-gradient-to-r from-teal-400 to-cyan-500" />

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            This is the specialized psychological counselling, emotional guidance, and evidence-based support we provide to you. Backed by certified brain science training, our chambers provide a safe, confidential sanctuary for academic pressures, adolescent changes, parenting harmony, and acute stress.
          </p>

          {/* Merged Ethical Framework & Practice Boundaries Notice */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0D2440]/90 via-[#0A1D35]/90 to-[#071526]/90 border border-teal-500/40 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-300 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Ethical Framework & Practice Boundaries</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs text-slate-200 leading-relaxed">
              <div className="p-3 rounded-xl bg-[#061221]/80 border border-teal-900/50 space-y-1">
                <span className="font-bold text-teal-300">Our Approach to Counselling:</span>
                <p className="text-slate-300">
                  Focuses on understanding thoughts, emotions, and behavioural patterns through psychological awareness and supportive guidance. We encourage individuals to develop healthier coping mechanisms, emotional resilience, self-awareness, and positive lifestyle habits.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#061221]/80 border border-teal-900/50 space-y-1">
                <span className="font-bold text-amber-300 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Professional Scope & Boundaries:</span>
                </span>
                <p className="text-slate-300">
                  Counselling services focus on emotional support, psychological guidance, psychoeducation, and self-management techniques. We do not provide medical diagnosis, prescribe medication, or treat hormonal disorders. Individuals experiencing severe symptoms are encouraged to seek assessment from a qualified clinical psychologist or psychiatrist. Hormonal concerns should be evaluated by a qualified medical professional.
                </p>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 italic pt-1 border-t border-teal-900/40">
              * Therapeutic approaches including Cognitive Behavioural Therapy (CBT) concepts, mindfulness, and breathing techniques are introduced as knowledge of evidence-based self-regulation and psychoeducation within the scope of basic counselling qualifications.
            </p>
          </div>
        </div>

        {/* Psychology Framework Visual Banner (Mind Science & Well-being) */}
        <div className="mb-10 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0C223E]/90 via-[#0E294A]/90 to-[#0A1D35]/90 border border-teal-500/30 backdrop-blur-md shadow-lg">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Cognitive Reframing</h4>
                <p className="text-[11px] text-slate-300 mt-0.5">Disrupting mental loops & overthinking</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-950/70 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0">
                <Dna className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Biochemical Balance</h4>
                <p className="text-[11px] text-slate-300 mt-0.5">Cortisol & stress hormone awareness</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-950/70 border border-sky-500/40 flex items-center justify-center text-sky-400 shrink-0">
                <Wind className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Somatic Calm</h4>
                <p className="text-[11px] text-slate-300 mt-0.5">Diaphragmatic breathing & mindfulness</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-950/70 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">100% Confidential</h4>
                <p className="text-[11px] text-slate-300 mt-0.5">Private chamber & virtual sessions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Short Category Tabs & Carousel Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-teal-900/60">
          {/* Punchy Short Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {shortFilterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-navy-950 shadow-md font-bold'
                    : 'bg-[#0E223D]/80 text-slate-300 border border-teal-800/40 hover:border-teal-400/60 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Interactive Controls: Rolling / Grid Toggle + Left/Right Arrows */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            {/* View Mode Switcher */}
            <div className="flex items-center rounded-lg bg-[#0C2038] border border-teal-800/50 p-0.5 text-xs">
              <button
                onClick={() => setViewMode('rolling')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                  viewMode === 'rolling'
                    ? 'bg-teal-600 text-white font-medium shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Continuous Rolling Track"
              >
                <SlidersHorizontal className="w-3 h-3" />
                <span className="hidden sm:inline">Rolling View</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-teal-600 text-white font-medium shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3 h-3" />
                <span className="hidden sm:inline">Grid View</span>
              </button>
            </div>

            {/* Rolling Navigation Arrows (Active in Rolling Mode) */}
            {viewMode === 'rolling' && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsRolling(!isRolling)}
                  className="p-1.5 rounded-lg bg-[#0C2038] hover:bg-[#122c4d] border border-teal-800/50 text-slate-300 hover:text-teal-300 transition-colors"
                  title={isRolling ? 'Pause Auto-Roll' : 'Resume Auto-Roll'}
                  aria-label="Pause or play auto roll"
                >
                  {isRolling ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => handleManualScroll('left')}
                  className="p-1.5 rounded-lg bg-[#0C2038] hover:bg-[#122c4d] border border-teal-800/50 text-slate-300 hover:text-teal-300 transition-colors"
                  title="Roll Left"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleManualScroll('right')}
                  className="p-1.5 rounded-lg bg-[#0C2038] hover:bg-[#122c4d] border border-teal-800/50 text-slate-300 hover:text-teal-300 transition-colors"
                  title="Roll Right"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* =========================================================================
            SERVICES CONTAINER: ROLLING TRACK or EXPANDED GRID
           ========================================================================= */}
        {viewMode === 'rolling' ? (
          /* Smooth Rolling Left-to-Right Carousel Track */
          <div className="relative mb-14">
            <div
              ref={carouselRef}
              onMouseEnter={() => { isHoveredRef.current = true; }}
              onMouseLeave={() => { isHoveredRef.current = false; }}
              className="flex gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth scrollbar-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {displayServices.map((service, index) => (
                <div
                  key={`${service.id}-${index}`}
                  onClick={() => setSelectedService(service)}
                  className="group shrink-0 w-[82vw] xs:w-[300px] sm:w-[360px] max-w-[360px] flex flex-col justify-between p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0F2542]/95 via-[#0C1F38]/95 to-[#08172C]/95 border border-teal-500/30 hover:border-teal-400/80 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.25)] transition-all duration-300 text-left cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* Header: Icon Halo & Tag (NO Numbering) */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-teal-950/80 border border-teal-500/40 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                        {renderIcon(service.iconType)}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-500/30">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title & Short Description */}
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-teal-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-200 mt-2 leading-relaxed font-normal">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Bullets (No Lead Name) */}
                    <div className="pt-3 space-y-2 border-t border-teal-900/50">
                      {service.bullets.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-4 mt-4 border-t border-teal-900/50">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToContact(service.title);
                      }}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-navy-950 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                    >
                      <span>Book Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Unified WhatsApp Query Bar for All Counselling Services */}
            <div className="mt-5 mb-8 flex flex-col sm:flex-row items-center justify-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#0C223E]/95 via-[#0E294A]/95 to-[#0A1D35]/95 border border-teal-500/40 shadow-lg text-center sm:text-left">
              <div className="flex items-center gap-2 text-teal-300 font-semibold text-xs sm:text-sm">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Quick Counselling Inquiries & Direct Consultation via WhatsApp:</span>
              </div>
              <a
                href="https://wa.me/918380083657?text=Hello%20MindCare%20Counselling,%20I%20would%20like%20to%20inquire%20about%20a%20counselling%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs sm:text-sm shadow-md transition-colors shrink-0"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.63 8.55 7.63 9.71C7.63 10.88 8.48 12 8.6 12.17C8.72 12.33 10.28 14.73 12.67 15.76C13.24 16.01 13.69 16.16 14.04 16.27C14.62 16.46 15.15 16.43 15.57 16.37C16.04 16.3 17.02 15.78 17.22 15.21C17.43 14.64 17.43 14.15 17.37 14.05C17.31 13.95 17.14 13.89 16.89 13.76C16.63 13.64 15.38 13.02 15.15 12.94C14.92 12.85 14.76 12.81 14.59 13.06C14.43 13.3 13.95 13.87 13.81 14.03C13.67 14.19 13.53 14.21 13.27 14.09C13.02 13.96 12.21 13.7 11.24 12.84C10.49 12.17 9.98 11.35 9.84 11.1C9.69 10.86 9.82 10.72 9.95 10.6C10.06 10.48 10.2 10.3 10.33 10.16C10.46 10.01 10.5 9.91 10.59 9.74C10.67 9.58 10.63 9.43 10.57 9.31C10.5 9.19 10.04 8.04 9.84 7.57C9.66 7.12 9.47 7.18 9.32 7.17C9.18 7.16 9.02 7.16 8.85 7.16L9.11 7.44Z"/>
                </svg>
                <span>WhatsApp Query: +91 83800 83657</span>
              </a>
            </div>
          </div>
        ) : (
          /* Grid View Mode */
          <div className="space-y-6 mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-[#0F2542]/95 via-[#0C1F38]/95 to-[#08172C]/95 border border-teal-500/30 hover:border-teal-400/80 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.25)] transition-all duration-300 text-left cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Header: Icon Halo & Tag (NO Numbering) */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-teal-950/80 border border-teal-500/40 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      {renderIcon(service.iconType)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-2.5 py-1 rounded-full border border-teal-500/30">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white leading-snug group-hover:text-teal-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Bullets (No Lead Name) */}
                  <div className="pt-3 space-y-2 border-t border-teal-900/50">
                    {service.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 mt-4 border-t border-teal-900/50">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToContact(service.title);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-navy-950 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Unified WhatsApp Query Bar for Grid Mode */}
          <div className="mb-14 flex flex-col sm:flex-row items-center justify-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#0C223E]/95 via-[#0E294A]/95 to-[#0A1D35]/95 border border-teal-500/40 shadow-lg text-center sm:text-left">
            <div className="flex items-center gap-2 text-teal-300 font-semibold text-xs sm:text-sm">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Quick Counselling Inquiries & Direct Consultation via WhatsApp:</span>
            </div>
            <a
              href="https://wa.me/918380083657?text=Hello%20MindCare%20Counselling,%20I%20would%20like%20to%20inquire%20about%20a%20counselling%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs sm:text-sm shadow-md transition-colors shrink-0"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.63 8.55 7.63 9.71C7.63 10.88 8.48 12 8.6 12.17C8.72 12.33 10.28 14.73 12.67 15.76C13.24 16.01 13.69 16.16 14.04 16.27C14.62 16.46 15.15 16.43 15.57 16.37C16.04 16.3 17.02 15.78 17.22 15.21C17.43 14.64 17.43 14.15 17.37 14.05C17.31 13.95 17.14 13.89 16.89 13.76C16.63 13.64 15.38 13.02 15.15 12.94C14.92 12.85 14.76 12.81 14.59 13.06C14.43 13.3 13.95 13.87 13.81 14.03C13.67 14.19 13.53 14.21 13.27 14.09C13.02 13.96 12.21 13.7 11.24 12.84C10.49 12.17 9.98 11.35 9.84 11.1C9.69 10.86 9.82 10.72 9.95 10.6C10.06 10.48 10.2 10.3 10.33 10.16C10.46 10.01 10.5 9.91 10.59 9.74C10.67 9.58 10.63 9.43 10.57 9.31C10.5 9.19 10.04 8.04 9.84 7.57C9.66 7.12 9.47 7.18 9.32 7.17C9.18 7.16 9.02 7.16 8.85 7.16L9.11 7.44Z"/>
              </svg>
              <span>WhatsApp Query: +91 83800 83657</span>
            </a>
          </div>
        </div>
      )}

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-gradient-to-br from-[#0F2542] via-[#0C1F38] to-[#08172C] border border-teal-500/50 rounded-2xl shadow-2xl p-6 sm:p-8 text-left text-white max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#0E223D] text-slate-300 hover:text-white hover:bg-[#153154] border border-teal-800/40 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pb-4 border-b border-teal-900/60">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-2.5 py-1 rounded-full border border-teal-500/40">
                  {selectedService.tag}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-xs text-slate-300">{selectedService.categoryLabel}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                {selectedService.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200">
                {selectedService.shortDesc}
              </p>
            </div>

            {/* Guidance Points */}
            <div className="py-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
                What We Help You Work Through:
              </h4>
              <ul className="space-y-2.5">
                {selectedService.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended For Box */}
            <div className="p-4 rounded-xl bg-[#071526]/90 border border-teal-900/60 space-y-2 text-xs">
              <div>
                <span className="font-bold text-teal-300">Who This Is For: </span>
                <span className="text-slate-200">{selectedService.recommendedFor}</span>
              </div>
            </div>

            {/* Scope Disclaimer */}
            <p className="text-[11px] text-slate-400 italic pt-3">
              * Non-clinical psychoeducational guidance and emotional support. Severe psychiatric conditions or hormonal disorders require evaluation by qualified medical professionals.
            </p>

            {/* Action Buttons */}
            <div className="pt-5 mt-2 border-t border-teal-900/60 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToContact(selectedService.title)}
                className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-navy-950 font-bold text-xs sm:text-sm transition-all text-center shadow-md"
              >
                Schedule Session for {selectedService.title.split('&')[0].trim()}
              </button>
              <a
                href={`https://wa.me/918380083657?text=Hello,%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(selectedService.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors inline-flex items-center gap-1.5 shadow-md"
              >
                <span>WhatsApp Query</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};