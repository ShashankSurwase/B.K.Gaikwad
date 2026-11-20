import { PracticeArea, TeamMember, FAQItem, ValueProp, ApproachStep, InsightArticle, CounsellingDomain } from '../types';
import { getAssetUrl } from '../utils/assets';

export const firmConfig = {
  name: "B.K. Gaikwad and Associates",
  altName: "B.K. Gaikwad and Associates",
  chambersName: "B.K. Gaikwad and Associates",
  tagline: "Advocates, Legal Counsel & MindCare Counselling Chambers",
  shortTagline: "Advocates & MindCare Counselling",
  legalDivision: "B.K. Legal Practice (Courtroom Advocacy & Trial Practice)",
  counsellingDivision: "Mind Care & Counselling Wing",
  jurisdiction: "All-India Legal Practice · Enrolled under the Advocates Act, 1961",
  phone: "+91 75070 95230",
  altPhone: "+91 98501 45197",
  displayPhone: "+91 75070 95230 / +91 98501 45197",
  email: "gaikwad.legaladvisory@gmail.com",
  altEmail: "themindcare.counselling@gmail.com",
  legalEmail: "gaikwad.legaladvisory@gmail.com",
  counsellingEmail: "themindcare.counselling@gmail.com",
  address: "No. 204, Shivanushka Advocate Chambers, Near Session & District Court, Rajgurunagar, Tal. Khed, Dist. Pune - 410505",
  branchAddress: "Kranti Lodge, Bhavani Road, Near Tuljabhavani Temple, Tuljapur, Dist. Dharashiv - 413601",
  googleMapsUrl: "https://maps.app.goo.gl/CVAaBVgH2MLnPBBT6",
  branchGoogleMapsUrl: "https://maps.app.goo.gl/FvnMoYQ446jaeqvz8",
  offices: [
    {
      id: "pune-principal",
      type: "Principal Chambers (Pune / Rajgurunagar)",
      name: "B.K. Gaikwad and Associates",
      address: "No. 204, Shivanushka Advocate Chambers, Near Session & District Court, Rajgurunagar, Tal. Khed, Dist. Pune - 410505",
      phone: "+91 75070 95230 / +91 98501 45197",
      email: "gaikwad.legaladvisory@gmail.com",
      googleMapsUrl: "https://maps.app.goo.gl/CVAaBVgH2MLnPBBT6"
    },
    {
      id: "tuljapur-branch",
      type: "Associate Partner Chambers (Tuljapur / Dharashiv)",
      name: "Chambers of Adv. Deepak Hundekar (Associate Partner Office)",
      address: "Kranti Lodge, Bhavani Road, Near Tuljabhavani Temple, Tuljapur, Dist. Dharashiv - 413601",
      phone: "+91 98900 06200",
      email: "gaikwad.legaladvisory@gmail.com",
      googleMapsUrl: "https://maps.app.goo.gl/FvnMoYQ446jaeqvz8"
    }
  ],
  officeHours: "Monday – Saturday: 10:00 AM – 7:30 PM (Sunday: By Prior Appointment)",
  foundedYear: "1987",
  seniorHeritage: "38+ Years Senior Courtroom Heritage · Ex-Public Prosecutor",
  activeJurisdictions: [
    "Rajgurunagar (Khed) District & Sessions Court",
    "Pune District & Sessions Court & Family Courts",
    "Thane Court",
    "Belapur District & Sessions Court",
    "Junnar Civil & Criminal Courts",
    "Vadgaon Maval Judicial Court",
    "Tuljapur / Dharashiv District Courts"
  ]
};

export const valueProps: ValueProp[] = [
  {
    title: "Professional Integrity",
    description: "Strict adherence to the Advocates Act, 1961 and uncompromising ethical standards established across 38+ years of courtroom heritage.",
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
    fullDesc: "We provide comprehensive civil dispute representation before Civil Courts, District & Sessions Courts, and Appellate Forums. Our practice spans money recovery, property title declarations, perpetual and temporary injunctions, execution proceedings, and contractual breaches.",
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
    procedure: "Urgent review of FIR / charge-sheet, drafting bail petition highlighting judicial precedents, representation before Magistrates / JMFC & Sessions Courts, and rigorous trial cross-examination.",
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
      "Execution of MACT Awards & Statutory Appeals"
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
    name: "Adv. Balasaheb K. Gaikwad",
    role: "Founder & Senior Counsel",
    designation: "Advocate, District & Sessions Court · Ex-Special Public Prosecutor (PCPNDT, Pune & Thane) · Ex-Govt. Public Prosecutor (22 Yrs)",
    qualifications: "B.A., LL.B.",
    mobile: "+91 98501 45197",
    whatsappNumber: "919850145197",
    email: "appbkgaikwad@gmail.com",
    officeLocation: "No. 204, Shivanushka Advocate Chambers, Near Session & District Court, Rajgurunagar, Pune - 410505",
    barEnrolment: "MAH / 1647 / 1987",
    barEnrolmentDate: "22nd December 1987",
    experienceYears: "38+ Years Senior Courtroom Practice",
    specialties: [
      "Criminal Defense & Sessions Trials (10,000+ Cases Handled)",
      "Ex-Special Public Prosecutor for PCPNDT (Pune & Thane Districts)",
      "Defense Counsel in JMFC & Sessions Court",
      "High-Stakes Bail Applications (Sec 437/438/439 CrPC / BNSS)",
      "Land Revenue, 7/12 Mutation & Ancestral Partition",
      "Civil Suits & Appellate Advocacy"
    ],
    bio: "Enrolled with the Bar Council of Maharashtra in December 1987 under the Advocates Act, 1961, Adv. Balasaheb K. Gaikwad brings over 38+ years of courtroom mastery with over 10,000+ cases handled as senior defense counsel and prosecutor across JMFC (Judicial Magistrate First Class) and District & Sessions Courts. Appointed by the Government of Maharashtra, he served for over 22 years (1997–2019) as Ex-Public Prosecutor across Vaijapur, Barshi, Rajgurunagar, Thane Court, and Vadgaon Maval, and notably served as Ex-Special Public Prosecutor for PCPNDT cases across both Thane and Pune districts. Returning to senior private practice in 2019, his advocacy combines unmatched prosecution insight with formidable criminal defense and civil litigation leadership.",
    photoUrl: getAssetUrl('images/team-balasaheb.jpg'),
    hasCustomPhoto: true,
    careerTimeline: [
      {
        period: "2019 – Present",
        role: "Senior Counsel & Founder",
        location: "Chambers of Adv. B.K. Gaikwad & B.K. Gaikwad and Associates",
        details: "Senior trial counsel, strategic defense advocate, and mentor across District & Sessions Courts and JMFC."
      },
      {
        period: "2014 – 2019",
        role: "Ex-Public Prosecutor & Ex-Special Public Prosecutor (PCPNDT, Pune & Thane)",
        location: "Vadgaon Maval Court (Lonavala Jurisdiction)",
        details: "Supervised state prosecutions and served as nominated legal expert and Ex-Special Public Prosecutor for the Government of Maharashtra for PCPNDT cases in Pune and Thane districts."
      },
      {
        period: "2010 – 2014",
        role: "Ex-Public Prosecutor (Govt. of Maharashtra)",
        location: "Thane Court",
        details: "Handled extensive sessions trials, economic offenses, and serious penal code prosecutions in Thane district."
      },
      {
        period: "2005 – 2010",
        role: "Ex-Public Prosecutor (Govt. of Maharashtra)",
        location: "Rajgurunagar (Khed) Court",
        details: "Managed prosecution before Judicial Magistrates and Sessions Courts across the Khed-Rajgurunagar taluka."
      },
      {
        period: "1999 – 2005",
        role: "Ex-Public Prosecutor (Govt. of Maharashtra)",
        location: "Barshi Court (Solapur District)",
        details: "Led trial prosecution across IPC offenses, evidentiary witness cross-examinations, and contested bail oppositions."
      },
      {
        period: "1997 – 1999",
        role: "Ex-Public Prosecutor (Govt. of Maharashtra)",
        location: "Vaijapur Judicial Court (Aurangabad District)",
        details: "Conducted statutory state prosecutions, police charge-sheet reviews, and criminal trial hearings."
      },
      {
        period: "1987 – 1997",
        role: "Advocate – Independent Legal Practice",
        location: "District & Sessions Courts",
        details: "Built foundational trial practice across civil suits, land revenue litigations, and criminal defense matters."
      }
    ],
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
    id: "deepak-hundekar",
    name: "Adv. Deepak Hundekar",
    role: "Associate Partner · Advocate & Senior Business Tax Consultant",
    designation: "Associate Partner · Advocate (MAH/2119/2000) · Senior Business Tax Consultant",
    qualifications: "M.A., LL.B.",
    mobile: "+91 98900 06200",
    whatsappNumber: "919890006200",
    officeLocation: "Associate Partner Chambers: Kranti Lodge, Bhavani Road, Near Tuljabhavani Temple, Tuljapur, Dist. Dharashiv - 413601",
    barEnrolment: "MAH / 2119 / 2000",
    barEnrolmentDate: "Year 2000",
    experienceYears: "24+ Years Legal Practice (Since 2000)",
    specialties: [
      "Business Tax Consultancy (Since 2005)",
      "Corporate & Commercial Tax Planning",
      "GST, Income Tax & Revenue Compliance",
      "Civil & Commercial Litigation",
      "Contractual Due Diligence & Financial Advisory"
    ],
    bio: "Adv. Deepak Hundekar is an Associate Partner associated with B.K. Gaikwad and Associates, operating his own established chambers at Tuljapur (Dharashiv District). Holding an M.A. and LL.B. and enrolled with the Bar Council of Maharashtra & Goa (Enrolment No. MAH/2119/2000), he brings over 24+ years of rich legal and consulting experience. Since 2005, he has specialized in business tax consultancy, corporate tax planning, statutory revenue compliance, and commercial contract advisory from our Tuljapur / Dharashiv associate partner chambers, assisting enterprises and private clients with precision and fiscal acumen.",
    photoUrl: getAssetUrl('images/team-deepak.jpg'),
    hasCustomPhoto: true,
    careerTimeline: [
      {
        period: "2005 – Present",
        role: "Associate Partner & Senior Business Tax Consultant",
        location: "Associate Partner Chambers at Tuljapur / Dharashiv",
        details: "Specialized in corporate tax advisory, GST/income tax strategy, commercial structuring, and business compliance."
      },
      {
        period: "2000 – Present",
        role: "Advocate – Legal Practice",
        location: "District Courts & Tribunals",
        details: "Commenced active courtroom practice in 2000 under Bar Council Enrolment No. MAH/2119/2000 across civil, property, and commercial disputes."
      }
    ],
    certificates: []
  },
  {
    id: "shreya-gaikwad",
    name: "Adv. Shreya B. Gaikwad",
    role: "Advocate – District & Sessions Court",
    designation: "Advocate (Civil, Criminal & Business Law)",
    qualifications: "B.A., LL.B., LL.M. (Business Law)",
    mobile: "+91 75070 95230",
    whatsappNumber: "917507095230",
    email: "gaikwadshreya30@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/shreya-gaikwad-a16b0a442/",
    officeLocation: "No. 204, Shivanushka Advocate Chambers & Chambers of Adv. B.K. Gaikwad, Near District Court, Rajgurunagar, Pune - 410505",
    barEnrolment: "MAH / 10606 / 2021",
    copNumber: "COP/2023/1111388 (AIBE-XVII)",
    barAssociation: "Rajgurunagar Bar Association (Active Member, 2021–Present)",
    barEnrolmentDate: "11th October 2021",
    experienceYears: "5+ Years Active Trial Practice",
    resumeUrl: getAssetUrl('documents/Shreya_Gaikwad_Legal_Resume.pdf'),
    specialties: [
      "Criminal & Sessions Trials (IPC / BNSS & Bail Petitions)",
      "Corporate & Business Law (LL.M.) & Commercial Contracts",
      "Family Court & Matrimonial (Sole Custody & Maintenance)",
      "Civil & Commercial Suits (Order 39 CPC Injunctions)",
      "Motor Accident Claims (MACP / MACT)",
      "Consumer Court Disputes (DCDRC)",
      "Cheque Bounce (Sec 138 NI Act Recovery)",
      "Pre-Litigation Dispute Conciliation & Structured Mediation"
    ],
    education: [
      { degree: "LL.M. (Business Law)", institution: "DES Shri Navalmal Firodia Law College, Pune (SPPU)", year: "2021 – 2023" },
      { degree: "LL.B.", institution: "Sarsenapati Hambirrao Mohite Law College, Rajgurunagar (SPPU)", year: "2018 – 2021" },
      { degree: "B.A.", institution: "Modern College of Arts, Science & Commerce, Ganeshkhind (SPPU)", year: "2013 – 2016" }
    ],
    bio: "Dedicated Advocate with five years of active litigation experience practicing before the District and Sessions Courts across Maharashtra. Holding an LL.M. in Business Law, she independently manages a diverse litigation docket of 50+ contested matters across Criminal Defense, Anticipatory & Regular Bails (Sec 437/438/439 CrPC / BNSS), Family Law, Motor Accident Claims (MACP), and Commercial Debt Recovery (Sec 138 NI Act). Notable achievements include securing sole child custody of a minor boy in favor of the mother alongside maintenance relief in Family Court, and successfully settling over 35% of disputes through pre-litigation structured mediation. Enrolled with the Bar Council of Maharashtra & Goa (MAH/10606/2021, BCI COP/2023/1111388) and holder of Certification in Medico-Legal Studies.",
    photoUrl: getAssetUrl('images/team-shreya.jpg'),
    hasCustomPhoto: true,
    careerTimeline: [
      {
        period: "Oct 2021 – Present",
        role: "Advocate – Litigation & Trial Practice",
        location: "District & Sessions Court, Rajgurunagar (Khed) & Pune Judiciary",
        details: "Independently managing 50+ contested trial matters across Criminal Defense, Sessions Trials, Family Court, MACP, and Sec 138 NI Act recovery."
      },
      {
        period: "2021 – 2023",
        role: "LL.M. Candidate (Business Law)",
        location: "DES Shri Navalmal Firodia Law College, Pune",
        details: "Specialized in corporate governance, commercial contract drafting, IP assignments, and business law dispute resolution."
      }
    ],
    certificates: [
      {
        title: "Bar Council of Maharashtra & Goa Enrolment Certificate",
        description: "Enrolment No. MAH/10606/2021 (Sr. No. 204981) entered on 11th October 2021 in the Roll of Advocates.",
        imageUrl: getAssetUrl('images/certificate-shreya.png'),
        enrolmentNo: "MAH/10606/2021"
      },
      {
        title: "Certificate Course in Medico-Legal Studies",
        description: "Certification in Medico-Legal jurisprudence, forensic evidence analysis, and medical negligence from DES SNFLC Pune.",
        imageUrl: getAssetUrl('images/certificate-shreya.png')
      }
    ]
  },
  {
    id: "shraddha-gaikwad",
    name: "Adv. Shraddha B. Gaikwad",
    role: "Advocate & Dispute Resolution Counsellor",
    designation: "Advocate, Bar Council of Maharashtra & Goa · Certified Counsellor",
    qualifications: "B.A., LL.B. (Counsellor)",
    mobile: "+91 88578 03403",
    whatsappNumber: "918857803403",
    email: "shraddharajvirmahavir@gmail.com",
    officeLocation: "No. 204, Shivanushka Advocate Chambers, Near Session & District Court, Rajgurunagar, Pune - 410505",
    barEnrolment: "MAH / 11145 / 2021",
    barEnrolmentDate: "11th October 2021",
    experienceYears: "Active Practice",
    specialties: [
      "Parent Counselling & Parental Guidance",
      "Parent–Child Relationship Counselling",
      "Family & Matrimonial Dispute Mediation",
      "Pre-Litigation Conflict Conciliation",
      "Emotional Well-being & Marital Alignment",
      "Civil & Family Settlement Documentation"
    ],
    bio: "Adv. Shraddha B. Gaikwad holds a B.A., LL.B. and is enrolled with the Bar Council of Maharashtra & Goa (MAH/11145/2021). Distinctively combining legal expertise with a certified Diploma in Basic Counselling Skills (Brain Science, Mental Health & Psychology from Medhavi Skills University & Brainway Research Foundation), she focuses on resolving sensitive matrimonial disputes, parent-child generational gaps, and family conflicts through structured mediation, mutual understanding, and empathetic psychological guidance.",
    photoUrl: getAssetUrl('images/team-shraddha.jpg'),
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
    id: "abhijeet-gaikwad",
    name: "Adv. Abhijeet S. Gaikwad",
    role: "Advocate – Civil Suits, Documentation & Litigation",
    designation: "Advocate, Bar Council of Maharashtra & Goa · Civil Suits & Documentation Specialist",
    qualifications: "B.A., LL.M.",
    mobile: "+91 83810 10305",
    whatsappNumber: "918381010305",
    officeLocation: "No. 204, Shivanushka Advocate Chambers, Near Session & District Court, Rajgurunagar, Pune - 410505",
    barEnrolment: "MAH / 3455 / 2023",
    barEnrolmentDate: "1st July 2023",
    experienceYears: "Active Court Practice",
    specialties: [
      "Civil Suits (Plaints, Injunctions & Written Statements)",
      "Civil & Property Documentation (Deeds, Partition, Gift Deeds)",
      "Revenue Court Matters (7/12 Extracts, Mutation & PR Cards)",
      "Commercial Contract Drafting & Legal Review",
      "Criminal Bail Defense & Trial Support",
      "Title Verification & Real Estate Due Diligence"
    ],
    bio: "Adv. Abhijeet S. Gaikwad holds a B.A. and LL.M. and is enrolled with the Bar Council of Maharashtra & Goa (MAH/3455/2023, Sr. No. 226567). He specializes in contested Civil Suits, property conveyance deeds, ancestral partition agreements, revenue court filings (7/12 & mutation entries), and corporate contract drafting with precision and diligent procedural execution.",
    photoUrl: getAssetUrl('images/team-abhijeet.jpg'),
    hasCustomPhoto: true,
    certificates: [
      {
        title: "Bar Council of Maharashtra & Goa Enrolment Certificate",
        description: "Enrolment No. MAH/3455/2023 (Sr. No. 226567) entered on 1st July 2023 in the Roll of Advocates under Section 17 of the Advocates Act, 1961.",
        imageUrl: getAssetUrl('images/certificate-abhijeet.png'),
        enrolmentNo: "MAH/3455/2023"
      }
    ]
  },
  {
    id: "shruti-gaikwad",
    name: "Miss. Shruti B. Gaikwad",
    role: "Legal Associate & Research Analyst",
    designation: "Legal Researcher & Certified Brain Science Counsellor",
    qualifications: "M.Sc. (Organic Chemistry), Dip. in Counselling (Counsellor)",
    mobile: "+91 83800 83657",
    whatsappNumber: "918380083657",
    email: "shrutigaikwad3703@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/shruti-gaikwad-887a3232b/",
    officeLocation: "No. 204, Shivanushka Advocate Chambers, Near Session & District Court, Rajgurunagar, Pune - 410505",
    specialties: [
      "Student Counselling & Academic Guidance (Exam Anxiety & Focus)",
      "Adolescent Counselling & Youth Emotional Support",
      "Overthinking & Negative Thought Management",
      "Hormonal Health Awareness & Psychoeducation (Cortisol & Adrenaline)",
      "Introduction to Therapeutic Approaches (CBT Awareness & Mindfulness)",
      "Breathing & Diaphragmatic Relaxation Techniques"
    ],
    bio: "Miss Shruti B. Gaikwad holds a Master of Science (M.Sc.) in Organic Chemistry and a certified Diploma in Basic Counselling Skills & Brain Science from Medhavi Skills University and Brainway Research Foundation (Certificate No. 1930/2026). Combining her biochemical scientific background with psychological training, she specializes in student academic stress, adolescent guidance, overthinking patterns, psychoeducation on stress hormones (cortisol/adrenaline) and lifestyle habits, as well as practical mindfulness and breathing relaxation techniques.",
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
    answer: "You can schedule a consultation by submitting the consultation form on this website, calling our chambers directly at +91 75070 95230, or emailing gaikwad.legaladvisory@gmail.com (for legal practice) or themindcare.counselling@gmail.com (for MindCare psychological counselling). Our team will review the availability of counsel and confirm a mutually suitable time slot for an in-person or video conference."
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
    answer: "Our advocates regularly represent clients across District & Sessions Court Rajgurunagar (Khed), Pune Judiciary, Thane Court, Belapur District & Sessions Court, Junnar, and Vadgaon Maval Courts, as well as tribunals including MACT, DCDRC, and Revenue authorities."
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
      "Real estate transactions in Pune district and wider Maharashtra represent high-value commitments that necessitate exhaustive title scrutiny. Many purchasers incorrectly assume that having the seller's name on the 7/12 village extract (Saat-Baara) guarantees absolute ownership. However, the Supreme Court of India and appellate courts have consistently held that revenue records are maintained for fiscal revenue collection and do not confer ownership title.",
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
      "Our courtroom practice combines urgent preparation of bail petitions, concise presentation of judicial precedents, and unwavering advocacy before Magistrates, JMFC, and Sessions Courts."
    ]
  }
];

export const counsellingDomains: CounsellingDomain[] = [
  {
    id: "student-counselling",
    number: 10,
    title: "Student Counselling & Academic Guidance",
    category: "students-parents",
    categoryTitle: "Academic & Youth Guidance",
    shortDesc: "Understanding academic stress, exam anxiety, overthinking, and performance pressure.",
    bullets: [
      "Understanding academic stress, exam anxiety, overthinking, and performance pressure.",
      "Developing effective study habits, time management, concentration, and goal-setting skills.",
      "Providing emotional support to students dealing with academic challenges, peer pressure, and career-related confusion."
    ],
    recommendedFor: "School and college students, competitive exam aspirants, and youths facing career crossroads.",
    counsellorLead: "Miss. Shruti B. Gaikwad"
  },
  {
    id: "parent-counselling",
    number: 11,
    title: "Parent Counselling & Parental Guidance",
    category: "students-parents",
    categoryTitle: "Parental Guidance",
    shortDesc: "Understanding children's emotional, psychological, and developmental needs.",
    bullets: [
      "Understanding children's emotional, psychological, and developmental needs.",
      "Helping parents improve communication, build healthy relationships, and understand their children's behaviour.",
      "Guiding parents in managing academic pressure, behavioural challenges, screen time, and emotional difficulties."
    ],
    recommendedFor: "Parents seeking structured guidance on parenting styles, developmental shifts, and adolescent changes.",
    counsellorLead: "Adv. Shraddha B. Gaikwad"
  },
  {
    id: "parent-child-relationship",
    number: 12,
    title: "Parent–Child Relationship Counselling",
    category: "students-parents",
    categoryTitle: "Family Dynamics",
    shortDesc: "Improving parent–child communication through active listening and mutual understanding.",
    bullets: [
      "Improving parent–child communication through active listening and mutual understanding.",
      "Addressing generational gaps, conflicts, trust issues, and differences in expectations.",
      "Encouraging positive parenting practices and a supportive home environment."
    ],
    recommendedFor: "Families experiencing communication friction, generational disputes, or trust concerns.",
    counsellorLead: "Adv. Shraddha B. Gaikwad"
  },
  {
    id: "adolescent-counselling",
    number: 13,
    title: "Adolescent Counselling",
    category: "students-parents",
    categoryTitle: "Youth & Teen Support",
    shortDesc: "Supporting teenagers through emotional, physical, social, and behavioural changes.",
    bullets: [
      "Supporting teenagers through emotional, physical, social, and behavioural changes.",
      "Addressing peer pressure, self-esteem, identity concerns, and emotional challenges.",
      "Encouraging healthy decision-making, confidence, and responsible behaviour."
    ],
    recommendedFor: "Teenagers (12–19 yrs) coping with identity questions, peer pressure, and emotional shifts.",
    counsellorLead: "Miss. Shruti B. Gaikwad"
  },
  {
    id: "overthinking-negative-thoughts",
    number: 1,
    title: "Overthinking & Negative Thought Management",
    category: "stress-emotional",
    categoryTitle: "Cognitive Well-being",
    shortDesc: "Understanding the psychological causes and patterns of overthinking.",
    bullets: [
      "Understanding the psychological causes and patterns of overthinking.",
      "Identifying repetitive negative thoughts and developing healthier thinking habits.",
      "Learning practical strategies to manage excessive worrying and improve mental clarity."
    ],
    recommendedFor: "Individuals trapped in repetitive worry cycles, analysis paralysis, and rumination.",
    counsellorLead: "Miss. Shruti B. Gaikwad"
  },
  {
    id: "stress-management",
    number: 2,
    title: "Stress Management & Emotional Well-being",
    category: "stress-emotional",
    categoryTitle: "Stress Relief",
    shortDesc: "Understanding the psychological and physical effects of stress.",
    bullets: [
      "Understanding the psychological and physical effects of stress.",
      "Identifying personal stress triggers and developing healthy coping strategies.",
      "Learning relaxation and self-management techniques to improve emotional balance."
    ],
    recommendedFor: "Professionals, homemakers, and individuals undergoing acute work, legal, or personal stress.",
    counsellorLead: "Both Counsellors"
  },
  {
    id: "anxiety-awareness",
    number: 3,
    title: "Anxiety Awareness & Management",
    category: "stress-emotional",
    categoryTitle: "Anxiety Support",
    shortDesc: "Understanding anxiety, common symptoms, triggers, and behavioural patterns.",
    bullets: [
      "Understanding anxiety, common symptoms, triggers, and behavioural patterns.",
      "Learning grounding, relaxation, and emotional regulation techniques.",
      "Developing practical coping strategies to manage everyday anxiety."
    ],
    recommendedFor: "Individuals experiencing situational nervousness, restlessness, social discomfort, or panic feelings.",
    counsellorLead: "Both Counsellors"
  },
  {
    id: "depression-awareness",
    number: 4,
    title: "Depression Awareness & Supportive Counselling",
    category: "stress-emotional",
    categoryTitle: "Supportive Care",
    shortDesc: "Understanding depressive symptoms, emotional difficulties, and behavioural changes.",
    bullets: [
      "Understanding depressive symptoms, emotional difficulties, and behavioural changes.",
      "Exploring negative thought patterns and their influence on everyday functioning.",
      "Providing emotional support, psychological guidance, and referrals for clinical assessment when required."
    ],
    recommendedFor: "Those feeling persistent low energy, emotional fatigue, or loss of interest in daily life.",
    counsellorLead: "Both Counsellors"
  },
  {
    id: "hormonal-health-awareness",
    number: 5,
    title: "Hormonal Health Awareness & Psychoeducation",
    category: "psychoeducation",
    categoryTitle: "Mind-Body Health",
    shortDesc: "Understanding the role of hormones in mood, sleep, energy, stress, and emotional well-being.",
    bullets: [
      "Understanding the role of hormones in mood, sleep, energy, stress, and emotional well-being.",
      "Learning how hormonal deficiencies or imbalances may influence physical and psychological health.",
      "Providing awareness about healthy lifestyle habits that support hormonal well-being, while encouraging medical evaluation for suspected hormonal problems."
    ],
    recommendedFor: "Individuals seeking to understand how lifestyle, sleep, and physiological factors influence emotional balance.",
    counsellorLead: "Miss. Shruti B. Gaikwad"
  },
  {
    id: "stress-hormones-impact",
    number: 6,
    title: "Stress Hormones & Their Impact",
    category: "psychoeducation",
    categoryTitle: "Neurobiology & Stress",
    shortDesc: "Understanding the functions of cortisol and adrenaline in the body's stress response.",
    bullets: [
      "Understanding the functions of cortisol and adrenaline in the body's stress response.",
      "Exploring the effects of prolonged stress on sleep, mood, concentration, and physical well-being.",
      "Learning stress-management and relaxation practices that support healthy stress regulation."
    ],
    recommendedFor: "Anyone suffering from burnout, sleep disruption, chronic fatigue, or nervous exhaustion.",
    counsellorLead: "Miss. Shruti B. Gaikwad"
  },
  {
    id: "intro-therapeutic-approaches",
    number: 7,
    title: "Introduction to Therapeutic Approaches",
    category: "therapeutic-mindfulness",
    categoryTitle: "Evidence-Based Tools",
    shortDesc: "Understanding psychological approaches such as Cognitive Behavioural Therapy (CBT) and other evidence-based approaches.",
    bullets: [
      "Understanding psychological approaches such as Cognitive Behavioural Therapy (CBT) and other evidence-based approaches.",
      "Exploring how therapeutic techniques can help manage unhelpful thoughts, stress, and emotional difficulties.",
      "Learning practical coping, self-awareness, and emotional regulation strategies within the scope of counselling qualifications."
    ],
    recommendedFor: "Clients seeking structured, evidence-based self-awareness and emotional regulation strategies.",
    counsellorLead: "Both Counsellors"
  },
  {
    id: "meditation-mindfulness",
    number: 8,
    title: "Meditation & Mindfulness Practices",
    category: "therapeutic-mindfulness",
    categoryTitle: "Mindfulness & Focus",
    shortDesc: "Understanding the psychological benefits of mindfulness and meditation.",
    bullets: [
      "Understanding the psychological benefits of mindfulness and meditation.",
      "Practising guided meditation and present-moment awareness.",
      "Developing relaxation habits to support emotional well-being."
    ],
    recommendedFor: "Individuals seeking mental clarity, reduced emotional reactivity, and daily tranquility.",
    counsellorLead: "Miss. Shruti B. Gaikwad"
  },
  {
    id: "breathing-relaxation",
    number: 9,
    title: "Breathing & Relaxation Techniques",
    category: "therapeutic-mindfulness",
    categoryTitle: "Somatic Relaxation",
    shortDesc: "Learning diaphragmatic breathing, deep breathing, and controlled breathing exercises.",
    bullets: [
      "Learning diaphragmatic breathing, deep breathing, and controlled breathing exercises.",
      "Practising breathing techniques to manage everyday stress and anxiety.",
      "Using relaxation exercises to promote calmness and emotional regulation."
    ],
    recommendedFor: "Immediate self-regulation during moments of anxiety, stress spikes, or physical restlessness.",
    counsellorLead: "Both Counsellors"
  }
];

export const counsellingScopeNotice = {
  approachTitle: "Our Approach to Counselling",
  approachText: "Our counselling approach focuses on understanding thoughts, emotions, and behavioural patterns through psychological awareness and supportive guidance. We encourage individuals to develop healthier coping mechanisms, emotional resilience, self-awareness, and positive lifestyle habits.",
  scopeTitle: "Professional Scope & Clinical Boundaries",
  scopeText: "Counselling services focus on emotional support, psychological guidance, psychoeducation, and self-management techniques. We do not provide medical diagnosis, prescribe medication, or treat hormonal disorders. Individuals experiencing severe or persistent mental health symptoms are encouraged to seek assessment from a qualified clinical psychologist or psychiatrist. Hormonal concerns should be evaluated by a qualified medical professional.",
  ethicsNote: "Therapeutic approaches including Cognitive Behavioural Therapy (CBT) concepts, mindfulness, and breathing techniques are introduced as knowledge of evidence-based self-regulation and psychoeducation within the scope of basic counselling qualifications."
};
