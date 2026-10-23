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
  barEnrolmentDate?: string;
  experienceYears?: string;
  specialties: string[];
  bio: string;
  photoUrl: string;
  hasCustomPhoto: boolean;
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
