import { PracticeArea, TeamMember, FAQItem, ValueProp, ApproachStep } from '../types';

export const firmConfig = {
  name: "B.K. Associates",
  altName: "Lawyers’ Associates",
  tagline: "Advocates & Legal Consultants",
  jurisdiction: "Bar Council of Maharashtra & Goa, India",
  phone: "+91 98220 12345",
  displayPhone: "+91 98220 12345 / +91 94220 67890",
  email: "contact@lawyersassociates.in",
  altEmail: "office@bkassociateslegal.com",
  address: "Chamber No. 4, Lawyers’ Chambers Complex, District & Sessions Court Road, Pune - 411005, Maharashtra, India",
  officeHours: "Monday – Saturday: 10:00 AM – 7:30 PM (Sunday: By Prior Appointment)",
  foundedYear: "1987",
  seniorHeritage: "35+ Years of Legal Heritage"
};

export const valueProps: ValueProp[] = [
  {
    title: "Client-Focused Guidance",
    description: "Every legal matter is approached with dedicated personal attention, tailored strategy, and empathetic counsel.",
    icon: "Users"
  },
  {
    title: "Professional Integrity",
    description: "Strict adherence to the Advocates Act, 1961 and high ethical standards established across decades of courtroom practice.",
    icon: "ShieldCheck"
  },
  {
    title: "Transparent Communication",
    description: "Honest appraisal of legal options, procedural timelines, and realistic dispute outcomes with zero hidden complexities.",
    icon: "MessageSquareQuote"
  },
  {
    title: "Strategic Legal Solutions",
    description: "Blending comprehensive statutory knowledge with pragmatic litigation experience and alternative dispute mediation.",
    icon: "Compass"
  }
];

export const practiceAreas: PracticeArea[] = [
  {
    id: "civil-litigation",
    title: "Civil Litigation and Dispute Resolution",
    shortDesc: "Comprehensive representation in recovery suits, injunctions, declarations, land disputes, and appellate proceedings.",
    category: "litigation",
    icon: "Scale",
    fullDesc: "We provide comprehensive civil dispute representation before Civil Courts, District Courts, High Courts, and Appellate Tribunals. Our practice spans money recovery, property title declarations, perpetual and temporary injunctions, execution proceedings, and contractual breaches.",
    keyServices: [
      "Civil Suits for Declaration, Possession & Injunction",
      "Summary Suits & Commercial Money Recovery",
      "Specific Performance of Contracts",
      "Appeals, Civil Revisions & Review Petitions",
      "Execution of Decrees & Arbitral Awards"
    ],
    procedure: "Detailed inspection of documentary records, preliminary legal notice, institution of plaint/written statement, interim relief applications, witness examination, and final arguments.",
    requiredDocuments: [
      "Original agreements, deeds, or transaction receipts",
      "Correspondence, notices, and replies between parties",
      "Revenue records, 7/12 extract, or mutation entries (for property disputes)",
      "Bank statements or financial records evidencing dues"
    ]
  },
  {
    id: "criminal-law",
    title: "Criminal Law and Bail Matters",
    shortDesc: "Vigorous legal defense, anticipatory & regular bails, quashing petitions, and representation in trial proceedings.",
    category: "litigation",
    icon: "ShieldAlert",
    fullDesc: "Our criminal law defense is grounded in fundamental constitutional safeguards and meticulous evidentiary scrutiny. We represent clients across bail hearings, trial stages, statutory appeals, and private complaints under IPC, BNSS, and special criminal statutes.",
    keyServices: [
      "Regular Bail & Anticipatory Bail Applications (Sessions & High Court)",
      "Defense Representation in Criminal Trials & Inquiries",
      "Quashing of FIRs & Criminal Complaints under Sec. 482 CrPC / BNSS",
      "Cheque Dishonour Defense & Prosecution (Sec. 138 NI Act)",
      "Domestic Violence (DV Act) and Dowry Harassment Defense"
    ],
    procedure: "Urgent review of FIR / charge-sheet, drafting bail petition highlighting judicial precedents, representation before Magistrates / Sessions / High Courts, and rigorous trial cross-examination.",
    requiredDocuments: [
      "Copy of FIR, remand orders, or police complaint",
      "Charge-sheet / police investigation report (if filed)",
      "Identity proof and residence documentation of surety",
      "Relevant exculpatory communication or digital records"
    ]
  },
  {
    id: "corporate-commercial",
    title: "Corporate and Commercial Law",
    shortDesc: "Advisory on entity structuring, statutory compliance, corporate agreements, governance, and dispute mitigation.",
    category: "corporate",
    icon: "Briefcase",
    fullDesc: "We advise businesses, startups, MSMEs, and entrepreneurs on corporate compliance, contractual risk mitigation, and commercial transactions. We assist boards and founders with regulatory compliance under the Companies Act, LLP Act, and commercial dispute mechanisms.",
    keyServices: [
      "Business Entity Formation & Shareholder Agreements",
      "Commercial Advisory & Master Services Agreements (MSA)",
      "Joint Venture & Partnership Structuring",
      "Corporate Regulatory Compliance & ROC Filings",
      "Commercial Dispute Resolution before NCLT & Commercial Courts"
    ],
    procedure: "Transactional scoping, corporate due diligence, drafting bespoke commercial documentation, negotiation rounds, and filing regulatory compliances.",
    requiredDocuments: [
      "Certificate of Incorporation, MOA & AOA / LLP Agreement",
      "Board resolutions and authorizations",
      "Existing business contracts and vendor agreements",
      "Statutory licenses and GST / PAN records"
    ]
  },
  {
    id: "property-real-estate",
    title: "Property and Real Estate Law",
    shortDesc: "Title due diligence, sale deeds, lease deeds, partition suits, boundary disputes, and RERA complaints.",
    category: "property",
    icon: "Building2",
    fullDesc: "Real estate matters demand forensic title scrutiny and deep knowledge of state land laws, registration acts, and municipal regulations. We guide buyers, sellers, families, and developers through property transactions and contentious land disputes.",
    keyServices: [
      "Comprehensive 30-Year Title Search & Due Diligence Reports",
      "Drafting Conveyance Deeds, Sale Agreements & Development Agreements",
      "Ancestral Property Partition Suits & Succession Claims",
      "Filing Complaints before Real Estate Regulatory Authority (RERA)",
      "Revenue Court Matters (Tahsildar, SDO, Collector & Divisional Commissioner)"
    ],
    procedure: "Title verification from Sub-Registrar records, issuance of public notice in newspapers, drafting legal search report, drafting transfer deeds, and handling dispute litigation.",
    requiredDocuments: [
      "Index II, Registered Sale Deeds, and Parent Title Chain (30 years)",
      "Current 7/12 extracts, Ferfar (mutation) entries, or City Survey PR Cards",
      "Sanctioned layouts, building commencement / completion certificates",
      "Property tax receipts and encumbrance certificates"
    ]
  },
  {
    id: "family-matrimonial",
    title: "Family Law & Matrimonial Matters",
    shortDesc: "Compassionate counsel in divorce, maintenance, child custody, domestic disputes, and mutual settlement agreements.",
    category: "family",
    icon: "HeartHandshake",
    fullDesc: "Family disputes demand both legal rigor and emotional sensitivity. Our team includes certified counselling credentials, ensuring matters involving marital disputes, maintenance, and child custody are approached with mediation-first philosophy whenever possible.",
    keyServices: [
      "Mutual Consent Divorce (Sec. 13B Hindu Marriage Act / Special Marriage Act)",
      "Contested Divorce Petitions & Judicial Separation",
      "Maintenance & Alimony Claims (Sec. 125 CrPC / BNSS & HMA)",
      "Child Custody, Guardianship, & Visitation Arrangements",
      "Mediation & Pre-Litigation Matrimonial Conciliation"
    ],
    procedure: "Confidential one-on-one intake, voluntary counselling and settlement exploration, drafting petitions/responses, interim maintenance applications, and family court representation.",
    requiredDocuments: [
      "Marriage Certificate / Photographs / Wedding Invitation card",
      "Income tax returns and salary slips of spouses (for maintenance)",
      "Birth certificates of minor children",
      "Proof of residence and relevant correspondence"
    ]
  },
  {
    id: "contract-drafting",
    title: "Contract Drafting and Review",
    shortDesc: "Watertight legal drafting for vendor contracts, NDAs, employment agreements, IP assignments, and MoUs.",
    category: "documentation",
    icon: "FileText",
    fullDesc: "A well-drafted agreement prevents future litigation. We draft, review, and negotiate agreements tailored to Indian contract law, incorporating clear indemnity, dispute resolution, limitation of liability, and termination clauses.",
    keyServices: [
      "Non-Disclosure Agreements (NDA) & Confidentiality Pacts",
      "Vendor, Supplier & SaaS Service Agreements",
      "Employment, Independent Contractor & Consultancy Contracts",
      "Memorandum of Understanding (MoU) & Letters of Intent (LoI)",
      "Contractual Risk Audits & Red-Line Reviews"
    ],
    procedure: "Intake questionnaire on commercial intent, drafting bespoke first draft, iterative client review, negotiation alignment, and stamping/execution guidance.",
    requiredDocuments: [
      "Key commercial terms and scope of work specifications",
      "Parties' full legal details and corporate credentials",
      "Prior agreements or reference templates, if any"
    ]
  },
  {
    id: "employment-labour",
    title: "Employment and Labour Law",
    shortDesc: "Guidance on workplace policies, POSH compliance, employment termination, severance, and industrial disputes.",
    category: "corporate",
    icon: "Users2",
    fullDesc: "We advise employers and employees on employment regulations, non-compete enforceability, lawful terminations, severance disputes, and compliance with the Sexual Harassment of Women at Workplace (POSH) Act.",
    keyServices: [
      "Drafting Employment Manuals, HR Policies & Offer Letters",
      "POSH Policy Formulation & Internal Committee (IC) Advisory",
      "Employment Termination, Disciplinary Enquiries & Severance Structuring",
      "Non-Compete, Non-Solicitation & Trade Secret Enforcement",
      "Representation before Labour Courts and Industrial Tribunals"
    ],
    procedure: "Review of employment contracts and internal policies, legal notices, conciliation before Labour Commissioners, and adjudication before Labour Courts.",
    requiredDocuments: [
      "Employment contract, appointment letter, and increment letters",
      "HR handbook and internal company policies",
      "Termination notice, warning letters, or resignation correspondence",
      "Salary slips and Form 16 / provident fund records"
    ]
  },
  {
    id: "consumer-protection",
    title: "Consumer Protection & RERA Claims",
    shortDesc: "Effective advocacy against deficiency of service, defective goods, builder delays, and unfair trade practices.",
    category: "litigation",
    icon: "Gavel",
    fullDesc: "Consumers facing deficient services, medical negligence, insurance claim rejections, or real estate developer delays receive resolute representation under the Consumer Protection Act, 2019 and RERA regulations.",
    keyServices: [
      "Filing Complaints before District, State & National Consumer Commissions (NCDRC)",
      "Claims against Real Estate Builders for Delay in Possession & Refunds",
      "Insurance Claim Repudiation & Banking Service Deficiency Disputes",
      "Medical Negligence & Healthcare Deficiency Matters",
      "Defective Goods & False Advertising Complaints"
    ],
    procedure: "Statutory legal notice granting 15-30 days remedy period, drafting formal consumer complaint with supporting affidavits, mediation proceedings, and commission arguments.",
    requiredDocuments: [
      "Tax invoices, booking receipts, or purchase orders",
      "Warranty cards, service records, or policy documents",
      "Written complaints sent to service provider and their replies",
      "Proof of financial loss or mental distress incurred"
    ]
  },
  {
    id: "legal-notices",
    title: "Legal Notices and Documentation",
    shortDesc: "Precision drafting of statutory notices, rejoinders, affidavits, power of attorney, wills, and deed polls.",
    category: "documentation",
    icon: "FileCheck",
    fullDesc: "A well-framed legal notice often resolves disputes before entering formal court litigation. We draft authoritative statutory notices, cease-and-desist letters, testamentary wills, and sworn affidavits compliant with Indian evidentiary standards.",
    keyServices: [
      "Statutory Legal Notices under Sec. 138 NI Act & Sec. 80 CPC",
      "Cease-and-Desist Notices for IP Infringement & Defamation",
      "Drafting & Registration of Testamentary Wills and Codicils",
      "Special & General Power of Attorney (PoA) Drafting & Registration",
      "Gift Deeds, Relinquishment Deeds & Family Settlement Agreements"
    ],
    procedure: "Fact analysis, evidence cataloging, drafting notice with precise statutory recitals, service via Registered Post A.D. & Speed Post, and tracking tracking acknowledgments.",
    requiredDocuments: [
      "Factual timeline and details of dispute",
      "Relevant invoices, checks, dishonour memos, or agreements",
      "Full contact and address details of opposing parties"
    ]
  },
  {
    id: "adr-mediation",
    title: "Alternative Dispute Resolution (ADR) & Mediation",
    shortDesc: "Cost-effective, confidential resolution through arbitration, conciliation, and certified counselling mediation.",
    category: "litigation",
    icon: "Scale",
    fullDesc: "Litigation in courts can be lengthy and adversarial. We provide dedicated Alternative Dispute Resolution (ADR) services, including domestic arbitration, commercial mediation, and family conciliation led by advocates certified in counselling psychology.",
    keyServices: [
      "Arbitration Proceedings under the Arbitration & Conciliation Act, 1996",
      "Court-Referred & Private Mediation Sessions",
      "Pre-Litigation Settlement Negotiations & Restructuring",
      "Drafting Binding Settlement Agreements & Consent Terms",
      "Enforcement & Setting Aside of Arbitral Awards (Sec. 34 & 36)"
    ],
    procedure: "Invoking arbitration clause, appointment of arbitrator, filing statement of claim/defense, evidentiary hearings, and award enforcement.",
    requiredDocuments: [
      "Agreement containing the arbitration / dispute resolution clause",
      "Notice invoking arbitration and reply",
      "Statement of claims, invoices, and loss calculations"
    ]
  }
];

export const approachSteps: ApproachStep[] = [
  {
    number: "01",
    title: "Initial Consultation",
    summary: "Understand the client's concerns",
    details: "We start with a confidential in-person or virtual consultation to listen carefully to your circumstances, understand your immediate goals, and identify key facts.",
    icon: "Ear"
  },
  {
    number: "02",
    title: "Case Assessment",
    summary: "Review the available information and legal options",
    details: "Our advocates conduct an in-depth review of existing documents, applicable statutes, judicial precedents, and potential risks before advising next steps.",
    icon: "Search"
  },
  {
    number: "03",
    title: "Strategy and Action",
    summary: "Develop an appropriate legal approach",
    details: "We formulate a tailored action plan—whether through strategic negotiation, pre-litigation notice, or filing robust pleadings before the appropriate judicial forum.",
    icon: "Target"
  },
  {
    number: "04",
    title: "Ongoing Communication",
    summary: "Provide updates and explain next steps",
    details: "You receive consistent, transparent updates after every court hearing or procedural milestone, ensuring you remain clearly informed at every stage.",
    icon: "RefreshCw"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "balu-gaikwad",
    name: "Shri Balu K. Gaikwad",
    role: "Founder & Senior Counsel",
    designation: "Advocate, High Court & District Courts",
    qualifications: "B.A., LL.B.",
    barEnrolment: "MAH / 1647 / 1987",
    barEnrolmentDate: "22nd December 1987",
    experienceYears: "35+ Years of Practice",
    specialties: ["Civil Litigation", "Property Law & Land Revenue", "Criminal Trials", "Appellate Advocacy"],
    bio: "Enrolled with the Bar Council of Maharashtra in December 1987 under the Advocates Act, 1961, Shri Balu K. Gaikwad brings over three and a half decades of deep courtroom experience. Having represented clients across civil, land revenue, and criminal proceedings, his practice is rooted in meticulous legal drafting, unshakeable courtroom advocacy, and judicial integrity.",
    photoUrl: "/images/certificate-bk.jpg", // Has official certificate
    hasCustomPhoto: false,
    certificates: [
      {
        title: "Bar Council of Maharashtra Enrolment Certificate",
        description: "Enrolment No. MAH/1647/1987 issued under Section 17 of the Advocates Act, 1961 on 22nd December 1987.",
        imageUrl: "/images/certificate-bk.jpg",
        enrolmentNo: "MAH/1647/1987"
      }
    ]
  },
  {
    id: "shraddha-gaikwad",
    name: "Adv. Shraddha B. Gaikwad (Sontakke)",
    role: "Advocate & Dispute Resolution Counsel",
    designation: "Advocate, Bar Council of Maharashtra & Goa",
    qualifications: "B.A., LL.B., Dip. Basic Counselling Skills",
    barEnrolment: "MAH / 11145 / 2021",
    barEnrolmentDate: "11th October 2021",
    experienceYears: "Active Practice",
    specialties: ["Family & Matrimonial Law", "Civil Dispute Resolution", "Mediation & Conciliation", "Consumer Rights"],
    bio: "Adv. Shraddha B. Gaikwad holds a B.A., LL.B. and is enrolled with the Bar Council of Maharashtra & Goa (MAH/11145/2021). Distinctively combining legal expertise with a certified Diploma in Basic Counselling Skills (Brain Science, Mental Health & Psychology), she excels in resolving sensitive matrimonial disputes, family partitions, and mediation matters with exceptional clarity and empathy.",
    photoUrl: "/images/team-shraddha.png",
    hasCustomPhoto: true,
    certificates: [
      {
        title: "Bar Council of Maharashtra & Goa Enrolment Certificate",
        description: "Enrolment No. MAH/11145/2021 (Sr. No. 205520) entered on 11th October 2021 in the Roll of Advocates.",
        imageUrl: "/images/certificate-shraddha.png",
        enrolmentNo: "MAH/11145/2021"
      },
      {
        title: "Diploma of Basic Counselling Skills & Brain Science",
        description: "Certified field work in Mental Health Awareness, Brain Science, and Psychology from Brainway Research Foundation & Medhavi Skills University.",
        imageUrl: "/images/certificate-shraddha-counsel.jpg"
      }
    ]
  },
  {
    id: "shreya-gaikwad",
    name: "Adv. Shreya B. Gaikwad",
    role: "Advocate & Corporate/Litigation Counsel",
    designation: "Advocate, Bar Council of Maharashtra & Goa",
    qualifications: "B.A., LL.B.",
    barEnrolment: "MAH / 10606 / 2021",
    barEnrolmentDate: "11th October 2021",
    experienceYears: "Active Practice",
    specialties: ["Corporate & Commercial Advisory", "Contract Drafting & Vetting", "Civil Writs & Litigation", "Labour Laws"],
    bio: "Adv. Shreya B. Gaikwad is enrolled with the Bar Council of Maharashtra & Goa (MAH/10606/2021). With focused acumen in corporate advisory, commercial drafting, and regulatory litigation, she advises individuals, commercial businesses, and startups on safeguarding their legal interests through sound contracts and proactive compliance.",
    photoUrl: "/images/team-shreya.jpg",
    hasCustomPhoto: true,
    certificates: [
      {
        title: "Bar Council of Maharashtra & Goa Enrolment Certificate",
        description: "Enrolment No. MAH/10606/2021 (Sr. No. 204981) entered on 11th October 2021 in the Roll of Advocates.",
        imageUrl: "/images/certificate-shreya.png",
        enrolmentNo: "MAH/10606/2021"
      }
    ]
  },
  {
    id: "shruti-gaikwad",
    name: "Shruti B. Gaikwad",
    role: "Legal Associate & Research Analyst",
    designation: "Legal Researcher & Client Relations",
    qualifications: "B.A., Dip. Basic Counselling Skills",
    specialties: ["Case Law Research", "Client Intake Analysis", "Documentation Audit", "Conciliation Coordination"],
    bio: "Shruti B. Gaikwad plays a pivotal role in the firm's pre-litigation case preparation and statutory research. Holding a Diploma in Basic Counselling Skills & Brain Science, she assists the counsel team in organizing evidence, drafting chronological briefs, and ensuring clients experience smooth, responsive communication.",
    photoUrl: "/images/team-shruti.jpg",
    hasCustomPhoto: true,
    certificates: [
      {
        title: "Diploma in Basic Counselling Skill & Brain Science",
        description: "Certificate No. 1930/2026 issued by Brainway Research Foundation, Pune & Medhavi Skills University.",
        imageUrl: "/images/certificate-shruti.jpg"
      }
    ]
  }
];

export const whyChooseUsPillars = [
  {
    title: "Clear and Practical Legal Guidance",
    description: "We demystify complex statutes and legal jargon into straightforward, pragmatic steps so you can make informed decisions with total clarity.",
    icon: "Compass"
  },
  {
    title: "Individual Attention to Each Matter",
    description: "Every file receives the direct scrutiny of qualified advocates. We limit our case intake to maintain focused attention and rigorous courtroom preparation.",
    icon: "UserCheck"
  },
  {
    title: "Professional and Ethical Conduct",
    description: "We strictly uphold the Standards of Professional Conduct and Etiquette mandated by the Bar Council of India, ensuring unquestionable ethics at every step.",
    icon: "Scale"
  },
  {
    title: "Transparent Communication",
    description: "No ambiguous assurances or hidden fees. We provide realistic legal assessments, discussing strengths, counter-arguments, and timelines honestly.",
    icon: "MessagesSquare"
  },
  {
    title: "Thoughtful Assessment of Options",
    description: "We analyze both litigation and alternative dispute avenues (ADR/mediation) to find the most cost-effective and swift path to resolution.",
    icon: "GitBranch"
  },
  {
    title: "Confidential Handling of Information",
    description: "All client discussions, case notes, and documentary disclosures are protected under strict professional legal privilege and confidentiality protocols.",
    icon: "Lock"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "How can I schedule an initial consultation?",
    answer: "You can schedule a consultation by submitting the consultation form on this website, calling our chambers directly at +91 98220 12345, or sending an email to contact@lawyersassociates.in. Our team will review the availability of counsel and confirm a mutually suitable time slot for an in-person or video conference."
  },
  {
    question: "What documents should I bring to the first consultation?",
    answer: "Please bring all primary documents relevant to your matter in chronological order. For property matters, bring title deeds, 7/12 extracts, and agreements; for contractual or commercial matters, bring copies of agreements, invoices, and notices; for family matters, bring marriage certificates, correspondence, or previous orders. Bringing organized photocopies expedites the preliminary assessment."
  },
  {
    question: "What happens during the initial consultation?",
    answer: "During the first meeting, the advocate will listen to your factual narrative, review primary records, explain the applicable statutory framework, and outline available legal remedies. We will provide an honest preliminary appraisal of procedural timelines, potential risks, and next steps."
  },
  {
    question: "How are legal fees and billing structured?",
    answer: "In compliance with professional standards, our fees are determined based on the complexity of the matter, the court or forum involved, the time commitment required, and the nature of legal services (such as consultation, legal drafting, notice issuance, or ongoing litigation representation). A clear fee structure is explained and agreed upon before taking up any matter."
  },
  {
    question: "Can I request a review of my existing legal documents or contracts?",
    answer: "Yes. We offer independent contract and title document reviews. Our team inspects your draft agreements, lease deeds, sale deeds, or corporate covenants to identify potential liabilities, ambiguity, or unfavorable terms and provides a comprehensive red-line review."
  },
  {
    question: "How does the firm ensure client confidentiality?",
    answer: "Client confidentiality is an ethical cornerstone of our practice under Section 126 of the Indian Evidence Act. All communications, case materials, and personal disclosures shared with our advocates remain strictly privileged and protected against unauthorized disclosure."
  },
  {
    question: "How can I contact the firm in urgent legal matters or bail hearings?",
    answer: "For time-sensitive legal emergencies such as anticipatory bail applications, urgent injunction hearings, or police remand matters, you may contact our emergency chamber line directly at +91 94220 67890. Please specify the urgent nature of the matter immediately."
  }
];
