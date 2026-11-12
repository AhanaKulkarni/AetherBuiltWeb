# AetherBuilt OS — Official Product Website

The official product website for **AetherBuilt OS**, an AI-native Manufacturing Operating System engineered and developed by **Aetheron.AI Technologies Private Limited**.

> **"Your factory. One connected operating system."**  
> *"From the first customer order to the final delivery, AetherBuilt connects the people, processes, machines, and information that keep manufacturing moving."*

---

## 01. Tech Stack & Architecture

- **Framework**: [Next.js](https://nextjs.org) (App Router, Turbopack, Partial Prerendering)
- **UI & Components**: React 19, TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with inline sunrise design tokens
- **Typography**: Manrope (Headings) & Inter (Body) via `next/font/google`
- **Animations & Micro-interactions**: Framer Motion
- **Icons**: Lucide React
- **API & Notification Service**: Next.js Route Handlers (`/api/demo`) with Nodemailer and structured logging fallback

---

## 02. Sunrise Aesthetic & Design Tokens

| Token | Hex Value | Role |
|---|---|---|
| Primary Background | `#F9F8F4` | Clean, warm, high-whitespace canvas |
| White Surfaces | `#FFFFFF` | Card chassis and elevated containers |
| Primary Orange | `#F59E0B` | Active state accents, key CTAs, highlights |
| Amber Accent | `#FBBF24` | Warm secondary glows and badges |
| Primary Text | `#252B33` | High-contrast slate charcoal headings and text |
| Secondary Text | `#6B7280` | Legible neutral descriptions |
| Borders | `#EAE7DF` | Hairline borders and subtle dividers |
| Soft Orange Tint | `#FFF4DE` | Badges, tags, and AI Copilot cards |
| Deep Text Accent | `#30343B` | Structural labels and card headers |

---

## 03. Implemented Sections & Interactive Modules

1. **Header Navigation (`Navbar.tsx`)**: Responsive, sticky navigation with blur backdrop, section jumping, configurable app login link, and mobile drawer.
2. **Hero Section (`Hero.tsx` & `ProductPreview.tsx`)**:
   - Eyebrow: `THE MANUFACTURING OPERATING SYSTEM`
   - Headline: *"Your entire factory. Finally, in sync."*
   - Interactive native React command centre preview showing active CNC cells, work orders, telemetry, and AI Copilot integration.
3. **The Problem (`ManufacturingProblem.tsx`)**:
   - Interactive toggle comparing the *"Fragmented Factory Today"* (WhatsApp, Excel, paper logs, blindspots) against *"Synchronized Operations with AetherBuilt OS"*.
4. **The 12 Modules (`PlatformOverview.tsx`)**:
   - Grouped and filterable by *Execution*, *Assets*, and *Supply Chain*.
   - Deep-dive inspect modal with sample records and capabilities for:
     1. Orders
     2. Production
     3. Machines
     4. Maintenance
     5. Inventory
     6. Procurement
     7. Vendor Management
     8. RFQs
     9. Workforce & Team
     10. Deliveries
     11. Documents
     12. Factory Performance
5. **Connected Workflow Engine (`FactoryWorkflow.tsx`)**:
   - 6-step interactive sequence with auto-play and step-by-step navigation detailing how requirements flow from order ingest through BOM, automated procurement, machine telemetry, maintenance safeguards, and delivery dispatch.
6. **Command Center (`CommandCenter.tsx`)**:
   - Multiview operational cockpit allowing switches between *Plant Floor Overview*, *Machine Telemetry*, *Supply Chain Buffers*, and *Shift Alerts*.
7. **AI Copilot (`AICopilot.tsx`)**:
   - Operational intelligence layer demonstration with preset sample queries, multi-point synthesized answers, and linked module citations.
8. **CAD-to-Quotation (`CADWorkflow.tsx`)**:
   - Engineering automation pipeline from CAD geometry interpretation to BOM generation, machine cycle time estimation, and customer quotation.
9. **Audience & Stakeholders (`AudienceSection.tsx`)**:
   - Role-specific breakdown for Factory Owners, Production Managers, Procurement Teams, Maintenance Teams, and Operations Teams.
10. **Core Differentiators (`Differentiators.tsx`)**:
    - 6 key manufacturing-first architectural principles.
11. **About the Company (`AboutAetheron.tsx`)**:
    - Corporate identity of Aetheron.AI Technologies Private Limited with emblem and direct link to `aetheron.ai`.
12. **Demo Request & Contact Form (`DemoForm.tsx` & `/api/demo`)**:
    - Full 8-field inquiry form with client-side and server-side validation, phone/email format checks, loading states, success screens, reference ID issuance, and Nodemailer integration.
13. **Footer (`Footer.tsx`)**:
    - Comprehensive directory, legal attribution, dynamic copyright year, and privacy/terms links.

---

## 04. Local Development & Build

```bash
# Install dependencies (if not already synced)
npm install

# Start development server
npm run dev

# Create optimized production build
npm run build

# Start production server
npm run start
```

---

## 05. Environment Variables (`.env.local`)

```env
NEXT_PUBLIC_SITE_URL=https://aetherbuilt.com
NEXT_PUBLIC_AETHERON_URL=https://aetheron.ai
NEXT_PUBLIC_LOGIN_URL=https://app.aetherbuilt.com/login

NEXT_PUBLIC_COMPANY_NAME="Aetheron.AI Technologies Private Limited"
NEXT_PUBLIC_PRODUCT_NAME="AetherBuilt OS"
NEXT_PUBLIC_CONTACT_EMAIL="contact@aetherbuilt.com"
NEXT_PUBLIC_COMPANY_PHONE="+91 8766536270 / +91 8928352406"

# Optional SMTP configuration for live demo email forwarding
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_SECURE=false
DEMO_RECIPIENT_EMAIL=contact@aetheron.ai
```

---

*AetherBuilt OS is an enterprise product developed by Aetheron.AI Technologies Private Limited.*
