export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  category: 'litigation' | 'corporate' | 'property' | 'family' | 'documentation';
  icon: string;
  fullDesc: string;
  keyServices: string[];
  procedure: string;
  requiredDocuments: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  designation: string;
  qualifications: string;
  barEnrolment?: string;
  copNumber?: string;
  barAssociation?: string;
  barEnrolmentDate?: string;
  experienceYears?: string;
  specialties: string[];
  bio: string;
  photoUrl: string;
  hasCustomPhoto: boolean;
  resumeUrl?: string;
  email?: string;
  mobile?: string;
  whatsappNumber?: string;
  linkedinUrl?: string;
  officeLocation?: string;
  careerTimeline?: {
    period: string;
    role: string;
    location: string;
    details?: string;
  }[];
  education?: {
    degree: string;
    institution: string;
    year: string;
  }[];
  certificates: {
    title: string;
    description: string;
    imageUrl: string;
    enrolmentNo?: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  summary: string;
  details: string;
  icon: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: 'Judicial Pronouncements' | 'Regulatory Updates' | 'Commercial Advisory' | 'Procedural Guides';
  summary: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  keyTakeaways: string[];
  fullAnalysis: string[];
}

export interface CounsellingDomain {
  id: string;
  number: number;
  title: string;
  category: 'students-parents' | 'stress-emotional' | 'psychoeducation' | 'therapeutic-mindfulness';
  categoryTitle: string;
  shortDesc: string;
  bullets: string[];
  recommendedFor: string;
  counsellorLead: string;
}
