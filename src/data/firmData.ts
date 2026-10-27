import { PracticeArea, TeamMember, FAQItem, ValueProp, ApproachStep, InsightArticle } from '../types';
import { getAssetUrl } from '../utils/assets';

export const firmConfig = {
  name: "Lawyers’ Associates",
  altName: "B.K. Associates",
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
    title: "Professional Integrity",
    description: "Strict adherence to the Advocates Act, 1961 and uncompromising ethical standards established across 35+ years of courtroom heritage.",
    icon: "ShieldCheck"
  },
  {
    title: "Clear Communication",
    description: "Honest appraisal of legal options, procedural timelines, and realistic dispute outcomes with transparent consultation and zero ambiguity.",
    icon: "MessageSquareQuote"
  },
  {
    title: "Confidentiality & Privilege",
    description: "All client records, disclosures, and strategic briefs are protected under statutory advocate-client privilege under Section 126 of the Evidence Act.",
    icon: "Lock"
  },
  {
    title: "Client-Focused Guidance",
    description: "Every legal matter is approached with dedicated personal attention, rigorous pre-trial research, and empathetic dispute mediation.",
    icon: "Users"
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
    photoUrl: getAssetUrl('images/certificate-bk.jpg'),
    hasCustomPhoto: false,
    certificates: [
      {
        title: "Bar Council of Maharashtra Enrolment Certificate",
        description: "Enrolment No. MAH/1647/1987 issued under Section 17 of the Advocates Act, 1961 on 22nd December 1987.",
        imageUrl: getAssetUrl('images/certificate-bk.jpg'),
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
    resumeUrl: getAssetUrl('documents/Shreya_Gaikwad_Legal_Resume.pdf'),
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
    photoUrl: getAssetUrl('images/team-shreya.jpg'),
    hasCustomPhoto: true,
    certificates: [
      {
        title: "Bar Council of Maharashtra & Goa Enrolment Certificate",
        description: "Enrolment No. MAH/10606/2021 (Sr. No. 204981) entered on 11th October 2021 in the Roll of Advocates.",
        imageUrl: getAssetUrl('images/certificate-shreya.png'),
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
    photoUrl: getAssetUrl('images/team-shraddha.png'),
    hasCustomPhoto: true,
    certificates: [
      {
        title: "Bar Council of Maharashtra & Goa Enrolment Certificate",
        description: "Enrolment No. MAH/11145/2021 (Sr. No. 205520) entered on 11th October 2021 in the Roll of Advocates.",
        imageUrl: getAssetUrl('images/certificate-shraddha.png'),
        enrolmentNo: "MAH/11145/2021"
      },
      {
        title: "Diploma of Basic Counselling Skills & Brain Science",
        description: "Certified field work in Mental Health Awareness, Brain Science, and Psychology from Brainway Research Foundation & Medhavi Skills University.",
        imageUrl: getAssetUrl('images/certificate-shraddha-counsel.jpg')
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
    photoUrl: getAssetUrl('images/team-shruti.jpg'),
    hasCustomPhoto: true,
    certificates: [
      {
        title: "Diploma in Basic Counselling Skill & Brain Science",
        description: "Certificate No. 1930/2026 issued by Brainway Research Foundation, Pune & Medhavi Skills University.",
        imageUrl: getAssetUrl('images/certificate-shruti.jpg')
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

export const insightArticles: InsightArticle[] = [
  {
    id: "sc-ni-act-guidelines",
    title: "Supreme Court Directives on Cheque Dishonour Trials under Section 138 of the NI Act",
    category: "Judicial Pronouncements",
    date: "October 2026",
    readTime: "5 min read",
    author: "Adv. Shreya B. Gaikwad",
    tags: ["NI Act", "Debt Recovery", "Criminal Defense", "JMFC"],
    summary: "An analysis of landmark judicial pronouncements expediting cheque bounce proceedings, evidentiary rebuttals under Section 139, and electronic notice mandates.",
    keyTakeaways: [
      "Strict 30-day statutory limitation window for issuing demand legal notice from cheque return memo date.",
      "Presumption of legally enforceable liability under Section 139 requires cogent rebuttal evidence from the drawer.",
      "Court endorsement of Section 143A interim compensation up to 20% of cheque amount during trial.",
      "Encouragement of court-annexed Lok Adalat and mediation settlements to secure commercial recovery."
    ],
    fullAnalysis: [
      "Cheque dishonour proceedings under Section 138 of the Negotiable Instruments Act, 1881 represent one of the most common commercial litigation actions before Judicial Magistrate First Class (JMFC) courts. Over recent terms, the Supreme Court of India has issued several directives aimed at unclogging trial dockets and curbing deliberate delays by drawers.",
      "A primary evidentiary battleground in Section 138 trials centers around Section 139 of the Act, which establishes a statutory presumption that the cheque was issued in discharge of a legally enforceable debt or liability. The apex court has repeatedly affirmed that while this presumption is rebuttable, a bare denial by the accused is insufficient. The drawer must establish a probable defense through cross-examination or documentary evidence raising reasonable doubt.",
      "Furthermore, the insertion and active implementation of Section 143A empowers trial courts to direct the drawer to deposit interim compensation not exceeding 20% of the cheque face value. This procedural tool provides timely liquidity relief to bona fide payees while trials progress.",
      "At our chambers, Section 138 prosecution and defense are approached with rigorous documentary discipline: verifying dispatch receipts, drafting unequivocal statutory demand notices, and examining banking audit trails to protect our clients' commercial and personal interests."
    ]
  },
  {
    id: "property-title-due-diligence",
    title: "30-Year Title Due Diligence & Land Revenue Verification in Maharashtra",
    category: "Regulatory Updates",
    date: "September 2026",
    readTime: "6 min read",
    author: "Shri Balu K. Gaikwad",
    tags: ["Property Law", "7/12 Extract", "Title Search", "Conveyance"],
    summary: "Critical due diligence steps for prospective buyers, families, and developers verifying 30-year parent title chains, mutation entries (Ferfar), and RERA compliance.",
    keyTakeaways: [
      "An unbroken 30-year chain of registered title deeds is mandatory to establish marketable ownership.",
      "Revenue entries (7/12 & Ferfar) create fiscal tax liability but do not independently confer proprietary title.",
      "Mandatory public notice in local daily newspapers invites bona fide third-party claims prior to sale.",
      "Rigorous verification of pending court lis pendens, encumbrance certificates, and zone planning permissions."
    ],
    fullAnalysis: [
      "Real estate transactions in Pune district and wider Maharashtra represent high-value commitments that necessitate exhaustive title scrutiny. Many purchasers incorrectly assume that having the seller's name on the 7/12 village extract (Saat-Baara) guarantees absolute ownership. However, the Supreme Court and Bombay High Court have consistently held that revenue records are maintained for fiscal revenue collection and do not confer ownership title.",
      "A diligent property audit requires examining the 'Parent Title Chain' covering a minimum of 30 continuous years. Every conveyance deed, gift deed, release deed, partition deed, and succession certificate must be inspected to ensure title flowed lawfully between predecessors without missing legal heirs or unpartitioned coparcenary shares.",
      "Special attention must be paid to ancestral property rights under the Hindu Succession (Amendment) Act, 2005. Daughters and coparceners possess equal birthrights in coparcenary property, and any family arrangement or sale executed without their consent remains susceptible to partition challenges.",
      "Our chambers regularly conduct 30-year Sub-Registrar title searches, issue statutory public notices in leading Marathi and English newspapers, and draft detailed Title Search Reports and watertight Sale Deeds to safeguard purchasers against future boundary, inheritance, or encumbrance litigation."
    ]
  },
  {
    id: "commercial-pre-institution-mediation",
    title: "Mandatory Pre-Institution Mediation under Commercial Courts Act: Strategic Advantages",
    category: "Commercial Advisory",
    date: "August 2026",
    readTime: "5 min read",
    author: "Adv. Shraddha B. Gaikwad (Sontakke)",
    tags: ["Commercial Courts", "Mediation", "ADR", "Section 12A"],
    summary: "How Section 12A of the Commercial Courts Act, 2015 enables businesses to resolve contractual and financial disputes swiftly while preserving valuable commercial partnerships.",
    keyTakeaways: [
      "Pre-institution mediation is mandatory unless urgent interim relief is genuinely required by the plaintiff.",
      "Settlement agreements executed under Section 12A hold the equivalent force and enforceability of an arbitral award.",
      "Substantial cost savings and privacy preservation compared to lengthy multi-year court litigation.",
      "A structured 3-month window provides a constructive forum to re-negotiate viable commercial terms."
    ],
    fullAnalysis: [
      "The Commercial Courts Act, 2015 introduced a transformative procedural milestone through Section 12A, which mandates that a commercial suit cannot be instituted unless the plaintiff first exhausts the remedy of pre-institution mediation, except in matters contemplating urgent interim injunctive relief.",
      "In commercial transactions involving vendor agreements, master service agreements, distributorship contracts, and outstanding corporate dues, prolonged litigation often drains company resources and irreparably destroys business relationships. Pre-institution mediation conducted under the Legal Services Authorities framework offers a private, confidential, and time-bound alternative.",
      "A crucial feature that businesses often overlook is Section 12A(4): any settlement reached in pre-institution mediation possesses the same legal status and effect as an arbitral award under Section 30(4) of the Arbitration & Conciliation Act, 1996. Consequently, if a defaulting party breaches the mediated agreement, it can be directly enforced through execution proceedings without filing a fresh suit.",
      "Combining legal acumen with certified counselling skills, our advocates represent commercial entities in mediation sessions to secure balanced settlements, structured repayment schedules, and binding consent terms."
    ]
  },
  {
    id: "mact-compensation-multipliers",
    title: "Motor Accident Claims (MACT): Determining Loss of Dependency & Income Multipliers",
    category: "Judicial Pronouncements",
    date: "July 2026",
    readTime: "4 min read",
    author: "Adv. Shreya B. Gaikwad",
    tags: ["MACT", "MACP", "Compensation", "Accident Claims"],
    summary: "A practical guide to proving actual occupational income, calculating statutory future prospects, and applying appropriate multipliers before Motor Accident Claims Tribunals.",
    keyTakeaways: [
      "Strict application of Sarla Verma & Pranay Sethi multiplier tables according to the age bracket of the victim.",
      "Addition of 10% to 50% for future prospects based on permanent employment or self-employed status.",
      "Medical expense reimbursement requires verified original hospital bills, treatment vouchers, and doctor testimony.",
      "Prompt filing of Section 166 claim petitions before the MACT having territorial jurisdiction."
    ],
    fullAnalysis: [
      "Proceedings before the Motor Accident Claims Tribunal (MACT) under the Motor Vehicles Act, 1988 are social welfare proceedings designed to provide fair, just, and reasonable compensation to accident victims and their grieving dependents. However, securing a just award requires meticulous factual presentation and evidentiary rigor.",
      "The computation of compensation rests on three pivotal pillars: established monthly income, deduction for personal living expenses, and the multiplier corresponding to the age of the deceased as crystallized in the landmark decisions of Sarla Verma v. DTC and National Insurance Co. v. Pranay Sethi.",
      "In situations involving unorganized workers, agriculturists, or business proprietors without formal salary slips, our chambers lead corroborative evidence including bank statements, land revenue extracts, trade licenses, and witness depositions to establish realistic earning capacity before the tribunal.",
      "We represent both victims seeking rightful compensation and vehicle owners/insurance respondents, ensuring all evidentiary mandates—from spot panchnama to medical disability certificates—are rigorously inspected."
    ]
  },
  {
    id: "bnss-bail-jurisprudence",
    title: "Bail Jurisprudence Under BNSS: Procedural Transitions & Safeguards",
    category: "Procedural Guides",
    date: "June 2026",
    readTime: "5 min read",
    author: "Adv. Shreya B. Gaikwad",
    tags: ["BNSS", "Criminal Law", "Bail Procedure", "Sessions Court"],
    summary: "Navigating regular and anticipatory bail petitions under the Bharatiya Nagarik Suraksha Sanhita (BNSS), electronic summons, and timeline compliances.",
    keyTakeaways: [
      "Anticipatory bail applications require demonstrable grounds showing genuine apprehension of arrest for non-bailable offences.",
      "Enhanced statutory emphasis on electronic records, digital signatures, and video-conferenced remand hearings.",
      "Clear distinction between preliminary inquiry and immediate FIR registration depending on offense gravity.",
      "Bail conditions must strike an equitable balance between individual personal liberty and witness protection."
    ],
    fullAnalysis: [
      "The enactment of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 marks a significant procedural shift in India's criminal justice system, modernizing investigative protocols, electronic summons, and court remands while preserving essential constitutional guarantees of personal liberty under Article 21.",
      "In bail jurisprudence, the fundamental maxim that 'bail is the rule, jail is the exception' continues to anchor judicial discretion. For anticipatory bail under BNSS, applicants must demonstrate a genuine, reasonable apprehension of arrest in connection with a non-bailable offense, supported by contextual facts showing absence of flight risk or tampering potential.",
      "The BNSS incorporates clear parameters for electronic evidence presentation, audio-video recording of search and seizure operations, and expedited communication of court orders. Advocates must ensure that procedural lapses by investigating agencies are promptly highlighted during initial remand hearings.",
      "Our courtroom practice combines urgent preparation of bail petitions, concise presentation of judicial precedents, and unwavering advocacy before Magistrates, Sessions Courts, and the High Court of Bombay."
    ]
  }
];
