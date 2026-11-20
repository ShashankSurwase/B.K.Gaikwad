# B.K. Gaikwad and Associates — Project Completion & Important Details Summary

> **Permanent Project Reference Document**  
> *Saved in project directory for future maintenance, content updates, and deployment records.*  
> **Last Updated:** November 21, 2026

---

## 🌐 1. Live Domain & Hosting Infrastructure

| Item | Details |
| :--- | :--- |
| **Primary Custom Domain** | [http://bkgaikwadlegal.in/](http://bkgaikwadlegal.in/) (auto-upgrades to `https://bkgaikwadlegal.in/`) |
| **Subdomain** | `http://www.bkgaikwadlegal.in/` |
| **Direct GitHub Pages URL** | [https://shashanksurwase.github.io/B.K.Gaikwad/](https://shashanksurwase.github.io/B.K.Gaikwad/) |
| **GitHub Repository** | [https://github.com/ShashankSurwase/B.K.Gaikwad](https://github.com/ShashankSurwase/B.K.Gaikwad) |
| **Active Branch** | `main` |
| **Hosting Platform** | GitHub Pages with automated GitHub Actions CI/CD pipeline |
| **Domain Registrar** | GoDaddy India |
| **SSL / HTTPS Encryption** | Automatic Let's Encrypt TLS 1.3 (auto-managed by GitHub) |

---

## ⚙️ 2. GoDaddy DNS Configuration Table

These are the exact DNS records configured in your GoDaddy DNS Manager for `bkgaikwadlegal.in`:

| Record Type | Name / Host | Target / Value | Purpose |
| :--- | :---: | :--- | :--- |
| **A** | `@` | `185.199.108.153` | GitHub Pages Anycast IP #1 |
| **A** | `@` | `185.199.109.153` | GitHub Pages Anycast IP #2 |
| **A** | `@` | `185.199.110.153` | GitHub Pages Anycast IP #3 |
| **A** | `@` | `185.199.111.153` | GitHub Pages Anycast IP #4 |
| **CNAME** | `www` | `shashanksurwase.github.io` | Connects `www.bkgaikwadlegal.in` |
| **CNAME** | `_domainconnect` | `_domainconnect.gd.domaincontrol.com.` | GoDaddy system default |
| **NS** | `@` | `ns25.domaincontrol.com.`, `ns26.domaincontrol.com.` | GoDaddy Name Servers |

---

## 🏢 3. Official Chambers Metadata & Contact Details

All firm information is centralized in [`src/data/firmData.ts`](./src/data/firmData.ts):

### Official Firm Identity:
* **Firm Name:** B.K. Gaikwad and Associates
* **Tagline:** Advocates, Legal Counsel & MindCare Counselling Chambers
* **Heritage:** 38+ Years Courtroom Trial Mastery (Enrolled 22nd December 1987)

### Office 1: Principal Chambers (Pune / Khed)
* **Address:** No. 204, Shivanushka Advocate Chambers & Chambers of Adv. B.K. Gaikwad, Near District Court, Rajgurunagar (Khed), Pune - 410505, Maharashtra, India.
* **Direct Telephones:** `+91 75070 95230` / `+91 98501 45197`
* **Legal Practice Email:** `gaikwad.legaladvisory@gmail.com`
* **MindCare Wing Email:** `themindcare.counselling@gmail.com`
* **Google Maps:** [Near District Court, Rajgurunagar](https://maps.google.com/?q=Near+District+Court,+Rajgurunagar,+Pune+-+410505)

### Office 2: Associate Partner Chambers (Tuljapur / Dharashiv)
* **Partner Firm:** Chambers of Adv. Deepak Hundekar
* **Specialization:** Commercial Business Tax Consultancy & Revenue Litigation
* **Address:** Kranti Lodge, Bhavani Road, Near Tuljabhavani Temple, Tuljapur, Dist. Dharashiv - 413601
* **Direct Phone / WhatsApp:** `+91 98900 06200`
* **Google Maps:** [Near Tuljabhavani Temple, Tuljapur](https://maps.app.goo.gl/FvnMoYQ446jaeqvz8)

---

## 📊 4. Chambers Credibility & Metrics Dashboard

1. **Flagship Banner:**
   * **10,000+ Cases Handled** before Judicial Magistrate First Class (JMFC) and District & Sessions Courts.
2. **8 Authoritative Metrics:**
   * **38+** Years Court Heritage (Trial advocacy & dispute representation since 1987)
   * **14+** Legal Practice Areas (Criminal defense, civil suits, bail, corporate & business tax)
   * **13+** MindCare Verticals (Student guidance, matrimonial harmony, OCD & brain science)
   * **7+** Court Jurisdictions (Pune, Thane Court, Belapur, Vadgaon Maval, Barshi, Tuljapur, Junnar)
   * **2** Chambers in Maharashtra (Pune Principal Chambers & Tuljapur Dharashiv Branch)
   * **22+** Years Public Prosecutor (Ex-Public Prosecutor 1997–2019 & Ex-Special PP for PCPNDT Pune & Thane)
   * **24+** Years Tax & Corporate Consultancy (Revenue litigation & GST advisory)
   * **100%** Strict Confidentiality (Sec 126 Evidence Act Privilege & Mental Health Ethical Code)

---

## 👥 5. Team Hierarchy & Roles

1. **Adv. Balasaheb K. Gaikwad:**
   * Founder & Senior Counsel (Bar Enrolment: `MAH / 1647 / 1987`)
   * Ex-Public Prosecutor (Government of Maharashtra, 1997–2019, 22 Years)
   * Ex-Special Public Prosecutor for PCPNDT (Pune & Thane)
   * Career Timeline ordered in descending order (2019 down to 1987)
2. **Adv. Deepak Hundekar:**
   * Associate Partner · Advocate & Senior Business Tax Consultant
   * Heading Associate Partner Chambers in Tuljapur / Dharashiv
   * Tags: `Advocate & Tax Consultant`
3. **Adv. Shraddha Gaikwad:**
   * Advocate & Certified Psychological Counsellor (B.A., LL.B., Dip. Cyber Law, MSU MindCare Certified)
   * Left tag: `Advocate` | Right tag: `Certified Counsellor`
4. **Shruti Gaikwad:**
   * Certified Psychological Counsellor & MindCare Specialist (Medhavi Skills University & Brainway Research)
   * Right tag: `Certified Counsellor`
5. **Adv. Shreya Gaikwad:**
   * Advocate – District & Sessions Court (B.A., LL.B., LL.M. Business Law, Bar Enrolment: `MAH / 10606 / 2021`)

---

## 🖼️ 6. Verified Chambers Image Assets

Located in [`/public/images/office/`](./public/images/office/):
1. `reception-frosted-glass-entrance.jpg` — Reception, Frosted Glass Entrance & Bar Council Certificates
2. `main-executive-cabin.jpg` — Main Executive Cabin
3. `executive-chair-law-library.jpg` — Executive Chair, Scales of Justice Emblem & Law Library
4. `client-waiting-counselling-area.jpg` — Client Waiting & Counselling Wall Art Area

---

## 📱 7. Responsive Mobile Enhancements Applied

* **Header Bar Auto-Fit:** The desktop button hides on narrow mobile screens (`< sm`) while remaining prominent in the mobile drawer, preventing horizontal header overflow.
* **Viewport Containment:** `overflow-x: hidden` and `max-width: 100%` set across root HTML, body, and app container.
* **8-Metric Dashboard Scaling:** Text scaled to `text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black` with compact icon badges (`w-4 h-4`) and balanced padding, fitting cleanly on all mobile screens.
* **Fluid Rolling Track:** Practice areas and Counselling cards use responsive widths (`w-[82vw] xs:w-[310px] sm:w-[380px]`).
* **Stacked Email Addresses:** Contact emails employ `break-all` so long addresses never stretch card boundaries.

---

## 🛠️ 8. How to Maintain & Update Website in the Future

### A. Local Development:
```bash
cd /home/shashank/Projects/B.K.Assosiates
npm run dev
# Opens at http://localhost:5173/
```

### B. Build Production Test:
```bash
npm run build
# Runs TypeScript compiler & Vite build to output dist/
```

### C. Deploy Updates Live to GitHub & Custom Domain:
```bash
git add -A
git commit -m "Your update description"
git push origin main
```
*GitHub Actions automatically builds and deploys your changes to `bkgaikwadlegal.in` within ~60 seconds!*

---

## 🔒 9. Security & Account Maintenance Checklist

1. **GitHub Token Revocation:** Since a Personal Access Token was used for pushing, delete/revoke it in your GitHub Settings (**Settings → Developer settings → Personal access tokens**) as a security best practice.
2. **GoDaddy Account Security:** Enable Two-Factor Authentication (2FA) on your GoDaddy account.
3. **HTTPS Verification:** Once Let's Encrypt completes issuance (~15–30 mins from DNS creation), verify **"Enforce HTTPS"** is checked under **GitHub Repository Settings → Pages**.
