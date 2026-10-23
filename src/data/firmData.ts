import { PracticeArea, TeamMember, FAQItem, ValueProp, ApproachStep } from '../types';

export const firmConfig = {
  name: "B.K. Associates",
  altName: "Lawyers’ Associates",
  chambersName: "Shivanushka Advocate Chambers & Chambers of Adv. B.K. Gaikwad",
  tagline: "Advocates & Legal Consultants",
  jurisdiction: "Bar Council of Maharashtra & Goa, India",
  phone: "+91 75070 95230",
  altPhone: "+91 98220 12345",
  displayPhone: "+91 75070 95230 / +91 98220 12345",
  email: "gaikwadshreya30@gmail.com",
  altEmail: "contact@lawyersassociates.in",
  address: "No. 204, Shivanushka Advocate Chambers & Chambers of Adv. B.K. Gaikwad, Near District Court, Rajgurunagar, Pune - 410505, Maharashtra, India",
  googleMapsUrl: "https://maps.google.com/?q=Near+District+Court,+Rajgurunagar,+Pune+-+410505",
  officeHours: "Monday – Saturday: 10:00 AM – 7:30 PM (Sunday: By Prior Appointment)",
  foundedYear: "1987",
  seniorHeritage: "35+ Years of Legal Heritage",
  activeJurisdictions: [
    "Rajgurunagar (Khed) District & Sessions Court",
    "Pune District & Sessions Court & Family Courts",
    "High Court of Judicature at Bombay (Mumbai)",
    "Thane District & Sessions Court",
    "Junnar Civil & Criminal Courts",
    "Vadgaon Maval Judicial Court"
  ]
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
      "Civil Suits for Declaration, Possession & Injunction (Order 39 CPC)",
      "Summary Suits & Commercial Money Recovery",
      "Specific Performance of Contracts",
      "Appeals, Civil Revisions & Caveat Petitions",
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
      "Regular Bail & Anticipatory Bail Applications (Sec 437/438/439 CrPC / BNSS)",
      "Defense Representation in Criminal Trials & Cross-Examination",
      "Quashing of FIRs & Criminal Complaints under Sec. 482 CrPC / BNSS",
      "Cheque Dishonour Defense & Prosecution (Sec. 138 NI Act)",
      "Domestic Violence (DV Act) and Penal Offense Defense"
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
    id: "cheque-bounce-ni",
    title: "Cheque Dishonour & Debt Recovery (Sec 138 NI Act)",
    shortDesc: "Swift legal notice issuance, statutory prosecution, and defense in negotiable instrument bounce proceedings.",
    category: "litigation",
    icon: "FileCheck",
    fullDesc: "We specialize in both prosecution and defense under Section 138 of the Negotiable Instruments Act. We handle the entire statutory lifecycle: legal demand notice within the 30-day mandate, filing criminal complaint before Judicial Magistrates, and securing favorable recovery or mediation terms.",
    keyServices: [
      "Drafting & Serving Statutory 15-Day Demand Legal Notices",
      "Filing Complaints before Judicial Magistrate First Class (JMFC)",
      "Cross-Examination on Legally Enforceable Debt",
      "Interim Compensation Applications (Sec 143A NI Act)",
      "Court-Annexed Lok Adalat & Mediation Settlement Agreements"
    ],
    procedure: "Notice of dishonour from bank, issuance of statutory demand notice within 30 days, filing private complaint within 30 days of cause of action, verification affidavit, summons, and trial/settlement.",
    requiredDocuments: [
      "Original dishonoured cheque and Bank Return Memo",
      "Postal receipt and tracking acknowledgment of legal notice",
      "Invoices, promissory notes, ledger account, or contract evidencing liability",
      "Demand notice copy and reply received (if any)"
    ]
  },
  {
    id: "macp-accident-claims",
    title: "Motor Accident Claims (MACP / MACT)",
    shortDesc: "Dedicated representation for accident victims, families, and respondents before Motor Accident Claims Tribunals.",
    category: "litigation",
    icon: "ShieldCheck",
    fullDesc: "We represent accident claimants and insurance respondents before the Motor Accident Claims Tribunal (MACT). We handle comprehensive compensation calculation including future loss of income, medical bills, consortium, and permanent disability assessments.",
    keyServices: [
      "Filing Claim Petitions before MACT (Sec. 166 & 163A Motor Vehicles Act)",
      "Calculation of Multiplier, Future Income Loss & Medical Expenses",
      "Securing Interim Relief & 'No Fault Liability' Compensation",
      "Trial Representation & Expert Doctor / Mechanical Witness Cross-Examination",
      "Execution of MACT Awards & High Court First Appeals"
    ],
    procedure: "Gathering police Panchnama, FIR, and charge-sheet; filing claim petition before MACT having jurisdiction; framing issues; lead evidence of doctors and employers; and securing decree execution.",
    requiredDocuments: [
      "Certified copies of FIR, Spot Panchnama, and Charge-sheet",
      "Medical records, disability certificates, and hospital bills",
      "Salary slips, income tax returns, or proof of trade/occupation",
      "Vehicle RC book, insurance policy, and driver's license copies"
    ]
  },
  {
    id: "corporate-commercial",
    title: "Corporate, Business Law & Commercial Contracts",
    shortDesc: "Advisory on entity structuring, statutory compliance, commercial contracts, governance, and dispute mitigation.",
    category: "corporate",
    icon: "Briefcase",
    fullDesc: "Led by counsel specialized in LL.M. Business Law, we advise businesses, startups, MSMEs, and commercial entities on corporate compliance, contractual risk mitigation, and commercial transactions. We assist with regulatory filings, commercial negotiations, and contract disputes.",
    keyServices: [
      "Business Law Advisory & Commercial Governance",
      "Master Services Agreements (MSA), Vendor Contracts & SLAs",
      "Joint Venture & Partnership Structuring",
      "Corporate Regulatory Compliance & Commercial Injunctions",
      "Commercial Dispute Resolution before Commercial Courts"
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
    fullDesc: "Real estate matters demand forensic title scrutiny and deep knowledge of state land laws, registration acts, and municipal regulations. We guide buyers, sellers, families, and developers through property transactions and contentious land disputes across Pune district.",
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
    fullDesc: "Family disputes demand both legal rigor and emotional sensitivity. Our advocates possess hands-on trial experience in Family Courts securing custody and maintenance, coupled with certified counselling credentials to navigate conciliation effectively.",
    keyServices: [
      "Mutual Consent Divorce (Sec. 13B Hindu Marriage Act / Special Marriage Act)",
      "Contested Divorce Petitions & Judicial Separation",
      "Maintenance & Alimony Claims (Sec. 125 CrPC / BNSS & HMA)",
      "Child Custody, Guardianship, & Visitation Applications",
      "Pre-Litigation Matrimonial Conciliation & Consent Terms"
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
      "Vendor, Supplier & Service Level Agreements (SLA)",
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
    id: "consumer-protection",
    title: "Consumer Protection & DCDRC Disputes",
    shortDesc: "Effective advocacy against deficiency of service, defective goods, builder delays, and insurance repudiation.",
    category: "litigation",
    icon: "Gavel",
    fullDesc: "Consumers facing deficient services, medical negligence, insurance claim rejections, or real estate developer delays receive resolute representation under the Consumer Protection Act, 2019 before District and State Consumer Commissions.",
    keyServices: [
      "Filing Complaints before District (DCDRC) & State Consumer Commissions",
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
    id: "adr-mediation",
    title: "Alternative Dispute Resolution (ADR) & Mediation",
    shortDesc: "Cost-effective, confidential resolution through arbitration, conciliation, and certified counselling mediation.",
    category: "litigation",
    icon: "Scale",
    fullDesc: "With over 35% of disputes successfully settled out of court through structured mediation, our chambers emphasize pre-litigation resolution, conciliation, and domestic arbitration before entering protracted trial court proceedings.",
    keyServices: [
      "Arbitration Proceedings under the Arbitration & Conciliation Act, 1996",
      "Court-Referred & Private Mediation Sessions",
      "Pre-Litigation Settlement Negotiations & Restructuring",
      "Drafting Binding Settlement Agreements & Consent Terms",
      "Enforcement & Setting Aside of Arbitral Awards"
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
    experienceYears: "35+ Years Senior Courtroom Practice",
    specialties: ["Civil Litigation", "Property Law & Land Revenue", "Criminal Trials", "Appellate Advocacy"],
    bio: "Enrolled with the Bar Council of Maharashtra in December 1987 under the Advocates Act, 1961, Shri Balu K. Gaikwad brings over three and a half decades of deep courtroom experience. Having represented clients across civil, land revenue, and criminal proceedings, his practice is rooted in meticulous legal drafting, unshakeable courtroom advocacy, and judicial integrity.",
    photoUrl: "/images/certificate-bk.jpg",
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
    id: "shreya-gaikwad",
    name: "Adv. Shreya Balasaheb Gaikwad",
    role: "Advocate – District & Sessions Court",
    designation: "Advocate (Civil, Criminal & Business Law)",
    qualifications: "B.A., LL.B., LL.M. (Business Law)",
    barEnrolment: "MAH / 10606 / 2021",
    copNumber: "COP/2023/1111388 (AIBE-XVII)",
    barAssociation: "Rajgurunagar Bar Association (Active Member, 2021–Present)",
    barEnrolmentDate: "11th October 2021",
    experienceYears: "5+ Years Active Trial Practice",
    resumeUrl: "/documents/Shreya_Gaikwad_Legal_Resume.pdf",
    specialties: [
      "Criminal & Sessions Trials",
      "Family Court & Matrimonial",
      "Civil & Commercial Suits",
      "Bail & Interim Injunctions",
      "Motor Accident Claims (MACP)",
      "Cheque Bounce (Sec 138 NI Act)"
    ],
    education: [
      { degree: "LL.M. (Business Law)", institution: "DES Shri Navalmal Firodia Law College, Pune (SPPU)", year: "2021 – 2023" },
      { degree: "LL.B.", institution: "Sarsenapati Hambirrao Mohite Law College, Rajgurunagar (SPPU)", year: "2018 – 2021" },
      { degree: "B.A.", institution: "Modern College of Arts, Science & Commerce, Ganeshkhind (SPPU)", year: "2013 – 2016" }
    ],
    bio: "Adv. Shreya Balasaheb Gaikwad is an accomplished litigator with 5 years of courtroom experience practicing before the District and Sessions Courts across Maharashtra. Holding an LL.M. in Business Law and enrolled with the Bar Council of Maharashtra & Goa (MAH/10606/2021, BCI COP/2023/1111388), she has independently managed over 50 contested matters across criminal defense, anticipatory bails, matrimonial disputes, MACP compensation claims, and commercial debt recovery under Sec. 138 NI Act.",
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
    answer: "You can schedule a consultation by submitting the consultation form on this website, calling our chambers directly at +91 75070 95230, or emailing gaikwadshreya30@gmail.com. Our team will review the availability of counsel and confirm a mutually suitable time slot for an in-person or video conference."
  },
  {
    question: "What documents should I bring to the first consultation?",
    answer: "Please bring all primary documents relevant to your matter in chronological order. For property matters, bring title deeds, 7/12 extracts, and agreements; for contractual or commercial matters, bring copies of agreements, invoices, and notices; for family matters, bring marriage certificates, correspondence, or previous orders; for 138 NI Act or accident claims, bring the cheque return memo or FIR/panchnama copies."
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
    question: "Which courts and districts does your firm practice in?",
    answer: "Our advocates regularly represent clients across District & Sessions Court Rajgurunagar (Khed), Pune Judiciary, Bombay High Court (Mumbai), Thane District Court, Junnar, and Vadgaon Maval Courts, as well as tribunals including MACT, DCDRC, and Revenue authorities."
  },
  {
    question: "Can I request a review of my existing legal documents or contracts?",
    answer: "Yes. Led by LL.M. Business Law acumen, we offer independent contract, notice, and title document reviews. Our team inspects your draft agreements, lease deeds, sale deeds, or corporate covenants to identify potential liabilities and unfavorable terms."
  },
  {
    question: "How does the firm ensure client confidentiality?",
    answer: "Client confidentiality is an ethical cornerstone of our practice under Section 126 of the Indian Evidence Act. All communications, case materials, and personal disclosures shared with our advocates remain strictly privileged and protected against unauthorized disclosure."
  }
];
