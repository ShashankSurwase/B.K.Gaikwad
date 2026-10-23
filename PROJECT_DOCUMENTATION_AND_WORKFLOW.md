# B.K. Associates / Lawyers’ Associates — Complete Project Workflow & Maintenance Guide

> **Permanent Project Reference Document**  
> *Keep this file in the project root for future updates, content modifications, and deployments.*

---

## 📌 Executive Summary

This project is a high-performance, single-page legal practice portal designed specifically for **B.K. Associates | Lawyers’ Associates (Advocates & Legal Consultants)**. It combines modern corporate aesthetics with strict compliance under **Rule 36 of the Bar Council of India Rules** and the **Advocates Act, 1961**.

### 🔗 Key URLs & Repositories
- **Live Website:** [https://shashanksurwase.github.io/B.K.Gaikwad/](https://shashanksurwase.github.io/B.K.Gaikwad/)
- **GitHub Repository:** [https://github.com/ShashankSurwase/B.K.Gaikwad](https://github.com/ShashankSurwase/B.K.Gaikwad)
- **Local Dev Server:** `http://localhost:5173/`
- **Verified Resume (PDF):** [https://shashanksurwase.github.io/B.K.Gaikwad/documents/Shreya_Gaikwad_Legal_Resume.pdf](https://shashanksurwase.github.io/B.K.Gaikwad/documents/Shreya_Gaikwad_Legal_Resume.pdf)

---

## 🏢 Firm Details & Official Contact Information

All firm metadata is centralized in [`src/data/firmData.ts`](./src/data/firmData.ts):

| Parameter | Current Value |
| :--- | :--- |
| **Firm Name** | B.K. Associates *(operating as Lawyers’ Associates)* |
| **Chamber Name** | Shivanushka Advocate Chambers & Chambers of Adv. B.K. Gaikwad |
| **Chamber Address** | No. 204, Shivanushka Advocate Chambers & Chambers of Adv. B.K. Gaikwad, Near District Court, Rajgurunagar, Pune - 410505, Maharashtra, India |
| **Telephones** | Adv. Shreya: `+91 75070 95230` • Chambers: `+91 98220 12345` |
| **Emails** | `gaikwadshreya30@gmail.com` • `contact@lawyersassociates.in` |
| **Google Maps Link** | [Near District Court, Rajgurunagar, Pune - 410505](https://maps.google.com/?q=Near+District+Court,+Rajgurunagar,+Pune+-+410505) |
| **Active Jurisdictions** | Rajgurunagar (Khed), Pune District & Family Courts, Bombay High Court (Mumbai), Thane Judiciary, Junnar Court, Vadgaon Maval Court |
| **Consultation Hours** | Monday – Saturday: 10:00 AM – 7:30 PM (Sunday: By Prior Appointment) |

---

## 👥 Verified Advocate Profiles & Certifications

The website incorporates genuine certificates and photos located in `/public/images/`:

### 1. Shri Balu K. Gaikwad
- **Role:** Founder & Senior Counsel (35+ Years Senior Practice)
- **Enrolment:** Bar Council of Maharashtra (`MAH / 1647 / 1987`), Enrolled 22nd Dec 1987 under Sec. 17, Advocates Act 1961
- **Practice Focus:** Civil Litigation, Property Law, Land Revenue, Criminal Trials, Appellate Advocacy
- **Certificate Asset:** `/public/images/certificate-bk.jpg`

### 2. Adv. Shreya Balasaheb Gaikwad
- **Role:** Advocate – District & Sessions Court (5+ Years Active Practice)
- **Qualifications:** B.A., LL.B., LL.M. (Business Law)
- **Bar Enrolment:** Bar Council of Maharashtra & Goa (`MAH / 10606 / 2021`), Enrolled 11th Oct 2021
- **BCI Certificate of Practice:** `COP/2023/1111388 (AIBE-XVII)`
- **Bar Association:** Rajgurunagar Bar Association (Active Member, 2021–Present)
- **Education:** LL.M. (DES Shri Navalmal Firodia Law College, SPPU), LL.B. (Sarsenapati Hambirrao Mohite Law College, SPPU), B.A. (Modern College, Ganeshkhind, SPPU)
- **Practice Focus:** Criminal & Sessions Trials, Regular & Anticipatory Bails, Cheque Bounce (Sec 138 NI Act), Motor Accident Claims (MACP/MACT), Family Court, Contract Drafting
- **Assets:** Photo (`/public/images/team-shreya.jpg`), Certificate (`/public/images/certificate-shreya.png`), Legal Resume (`/public/documents/Shreya_Gaikwad_Legal_Resume.pdf`)

### 3. Adv. Shraddha B. Gaikwad (Sontakke)
- **Role:** Advocate & Dispute Resolution Counsel
- **Qualifications:** B.A., LL.B., Diploma in Basic Counselling Skills & Brain Science
- **Bar Enrolment:** Bar Council of Maharashtra & Goa (`MAH / 11145 / 2021`), Enrolled 11th Oct 2021
- **Certifications:** Brainway Research Foundation & Medhavi Skills University (Cert. No. 1973/2026)
- **Practice Focus:** Family & Matrimonial Law, Civil Dispute Resolution, Mediation & Conciliation, Consumer Rights
- **Assets:** Photo in Court Robes (`/public/images/team-shraddha.png`), Bar Certificate (`/public/images/certificate-shraddha.png`), Counselling Diploma (`/public/images/certificate-shraddha-counsel.jpg`)

### 4. Shruti B. Gaikwad
- **Role:** Legal Associate & Research Analyst
- **Qualifications:** B.A., Diploma in Basic Counselling Skills & Brain Science (Cert. No. 1930/2026)
- **Practice Focus:** Case Law Research, Pre-assessment Intake, Documentation Audit
- **Assets:** Photo (`/public/images/team-shruti.jpg`), Counselling Diploma (`/public/images/certificate-shruti.jpg`)

---

## 🎨 Design System & Styling Rules

- **Primary Color:** Deep Navy Blue `#183153` (`bg-navy-800`, `text-navy-800`)
- **Secondary Color:** Muted Teal `#2A8C82` (`bg-teal-500`, `text-teal-600`, `text-teal-700`)
- **Accent Color:** Warm Gold `#C6A15B` (`text-gold-400`, `text-gold-500`)
- **Backgrounds:** Pure White `#FFFFFF` & Soft Blue-Gray `#F4F7FA` (`bg-slate-soft`)
- **Body Text:** Dark Slate `#243247` (`text-slate-dark`)
- **Typography:**
  - Headings: Serif **Cormorant Garamond** (`font-serif`)
  - Body Text: Sans-Serif **Plus Jakarta Sans** (`font-sans`)

---

## 🗂️ Project File Structure

```text
/home/shashank/Projects/B.K.Assosiates/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions deployment to GitHub Pages
├── public/
│   ├── documents/
│   │   └── Shreya_Gaikwad_Legal_Resume.pdf   # Downloadable verified resume
│   └── images/
│       ├── about-office.jpg      # Law chambers visual
│       ├── hero-legal.jpg        # Hero section background
│       ├── certificate-bk.jpg    # 1987 Bar Council certificate
│       ├── certificate-shraddha.png
│       ├── certificate-shreya.png
│       ├── certificate-shruti.jpg
│       ├── certificate-shraddha-counsel.jpg
│       ├── team-shreya.jpg       # Adv. Shreya portrait
│       ├── team-shraddha.png     # Adv. Shraddha robe portrait
│       └── team-shruti.jpg       # Shruti associate portrait
├── src/
│   ├── components/
│   │   ├── About.tsx             # Two-column firm introduction & philosophy
│   │   ├── Approach.tsx          # 4-step client journey (timeline)
│   │   ├── BCIDisclaimerModal.tsx# Bar Council of India entrance notice
│   │   ├── CTA.tsx               # Final consultation call-to-action
│   │   ├── CertificateModal.tsx  # Zoomable viewer for official Bar Council certificates
│   │   ├── Contact.tsx           # Contact details, map link & intake form
│   │   ├── FAQ.tsx               # Accessible legal FAQ accordion
│   │   ├── FloatingActions.tsx   # Quick call, book, and back-to-top buttons
│   │   ├── Footer.tsx            # BCI disclaimer, links, policy triggers
│   │   ├── Hero.tsx              # First-screen banner with badges & CTAs
│   │   ├── Navbar.tsx            # Sticky navigation with mobile menu
│   │   ├── PolicyModals.tsx      # Privacy, Terms of Use, and Disclaimer popups
│   │   ├── PracticeAreas.tsx     # 10 service cards with category filter
│   │   ├── PracticeModal.tsx     # Practice area deep-dive drawer
│   │   ├── Team.tsx              # Advocate profile cards & resume links
│   │   ├── TrustValues.tsx       # 4 core value propositions
│   │   └── WhyChooseUs.tsx       # 6 editorial pillars
│   ├── data/
│   │   └── firmData.ts           # Central content file: lawyers, services, address, FAQs
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces
│   ├── utils/
│   │   └── assets.ts             # Dynamic asset URL resolver for GitHub Pages
│   ├── App.tsx                   # Master page assembler & modal state manager
│   ├── index.css                 # Tailwind directives & smooth scrolling
│   └── main.tsx                  # React DOM entry point
├── package.json
├── tailwind.config.js            # Custom color palette & font configuration
├── tsconfig.json
├── vite.config.ts                # Base path & build configuration
└── README.md
```

---

## 🛠️ Step-by-Step Maintenance Guide: How to Make Changes

### 1. How to Update Phone Numbers, Address, or Email
Edit [`src/data/firmData.ts`](./src/data/firmData.ts):
```typescript
export const firmConfig = {
  name: "B.K. Associates",
  phone: "+91 75070 95230",        // Edit primary phone
  altPhone: "+91 98220 12345",     // Edit secondary phone
  email: "gaikwadshreya30@gmail.com", // Edit primary email
  address: "No. 204, Shivanushka Advocate Chambers...", // Edit address
  officeHours: "Monday – Saturday: 10:00 AM – 7:30 PM", // Edit hours
};
```
*Saving this file instantly updates the Header, Contact section, and Footer!*

---

### 2. How to Add or Edit Practice Areas
Open [`src/data/firmData.ts`](./src/data/firmData.ts) and locate `practiceAreas`:
```typescript
{
  id: "your-new-service-id",
  title: "New Legal Service Name",
  shortDesc: "1-sentence summary displayed on the card",
  category: "litigation", // 'litigation' | 'corporate' | 'property' | 'family' | 'documentation'
  icon: "Scale",          // Lucide icon name
  fullDesc: "Comprehensive description shown when clicking 'Learn More'",
  keyServices: [
    "Service point 1",
    "Service point 2"
  ],
  procedure: "Explanation of court steps and filing procedure",
  requiredDocuments: [
    "Document 1 needed from client",
    "Document 2 needed from client"
  ]
}
```

---

### 3. How to Add or Edit Team Members / Advocates
In [`src/data/firmData.ts`](./src/data/firmData.ts), find `teamMembers`:
1. Add new portrait image to `/public/images/new-lawyer.jpg`
2. Add profile object to `teamMembers`:
```typescript
{
  id: "lawyer-id",
  name: "Adv. Full Name",
  role: "Designation (e.g. Associate Counsel)",
  designation: "Advocate, Bar Council of Maharashtra & Goa",
  qualifications: "B.A., LL.B.",
  barEnrolment: "MAH / XXXX / YYYY",
  experienceYears: "X Years Active Practice",
  specialties: ["Practice Area 1", "Practice Area 2"],
  bio: "Detailed professional biography...",
  photoUrl: getAssetUrl('images/new-lawyer.jpg'),
  hasCustomPhoto: true,
  certificates: [
    {
      title: "Bar Council Certificate",
      description: "Enrolment details...",
      imageUrl: getAssetUrl('images/new-certificate.jpg')
    }
  ]
}
```

---

### 4. How to Update the Resume PDF
If Adv. Shreya updates her resume:
1. Overwrite the file at `/home/shashank/Projects/B.K.Assosiates/public/documents/Shreya_Gaikwad_Legal_Resume.pdf`.
2. Commit and push (see deployment instructions below). The download button will immediately serve the updated resume!

---

### 5. How to Add or Edit FAQs
In [`src/data/firmData.ts`](./src/data/firmData.ts), find `faqs`:
```typescript
{
  question: "Your frequently asked legal question?",
  answer: "Clear, factual, client-friendly explanation compliant with BCI guidelines."
}
```

---

## 🚀 How to Run, Test & Deploy Updates

### 1. Run Locally on your computer
```bash
cd /home/shashank/Projects/B.K.Assosiates
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser to see your changes in real-time.

### 2. Verify Build with Zero Errors
Before deploying, ensure TypeScript and Vite compile cleanly:
```bash
npm run build
```
*(Should output `✓ built in X.XXs` with 0 errors).*

### 3. Deploy to the Live Website via Git
Whenever you make changes, run these 3 standard Git commands:
```bash
cd /home/shashank/Projects/B.K.Assosiates

# 1. Stage all changed files
git add .

# 2. Commit with a descriptive message
git commit -m "Update chamber contact hours and add new practice area"

# 3. Push to GitHub
git push origin main
```

**That’s it!** GitHub Actions automatically detects your push, runs the build, and publishes the updated website live to **[https://shashanksurwase.github.io/B.K.Gaikwad/](https://shashanksurwase.github.io/B.K.Gaikwad/)** within 1–2 minutes!

---

## 🔒 Bar Council of India (BCI) Compliance Reminders

- **No Promotional Claims:** Under Rule 36 of BCI Rules, never use superlatives like *"best lawyer"*, *"top firm"*, or claim guaranteed win rates / past case results.
- **Client Privilege:** Keep the confidentiality disclaimer in the contact form asking visitors not to submit privileged evidence through unencrypted web forms.
- **Verification Integrity:** Only display verified Bar Council roll numbers and certified qualifications.
