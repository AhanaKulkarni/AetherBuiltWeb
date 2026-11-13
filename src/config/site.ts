/**
 * AetherBuilt OS - Product & Platform Configuration
 * Developed by Aetheron.AI Technologies Private Limited
 */

export const SITE_CONFIG = {
  name: "AetherBuilt OS",
  shortName: "AetherBuilt",
  tagline: "The Operating System for Modern Manufacturing",
  coreMessage: "Your factory. One connected operating system.",
  alternativeHeadline: "Run your factory. Not a hundred disconnected tools.",
  supportingStatement:
    "From the first customer order to the final delivery, AetherBuilt connects the people, processes, machines, and information that keep manufacturing moving.",
  heroEyebrow: "THE MANUFACTURING OPERATING SYSTEM",
  heroHeadline: "Your entire factory. Finally, in sync.",
  heroSubheadline:
    "AetherBuilt brings production, machines, inventory, procurement, workforce, and factory operations into one intelligent platform.",
  heroFootnote: "Built for the realities of modern manufacturing.",

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://aetherbuilt.com",
  loginUrl: process.env.NEXT_PUBLIC_LOGIN_URL || "https://app.aetherbuilt.com/login",
  aetheronUrl: process.env.NEXT_PUBLIC_AETHERON_URL || "https://aetheron.ai",

  company: {
    legalName: "Aetheron.AI Technologies Private Limited",
    shortName: "Aetheron.AI",
    parentCompanyUrl: "https://aetheron.ai",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@aetherbuilt.com",
    aetheronEmail: "contact@aetheron.ai",
    phones: ["+91 8766536270", "+91 8928352406"],
    description:
      "Aetheron.AI Technologies Private Limited is building AetherBuilt OS — an intelligent manufacturing operating system designed to connect factory operations and simplify industrial workflows.",
  },
} as const;

export interface NavDropdownItem {
  title: string;
  description: string;
  href: string;
  badge?: string;
  iconName: string;
}

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  dropdown?: NavDropdownItem[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Platform", href: "/#platform" },
  {
    label: "Modules",
    href: "/modules",
    dropdown: [
      {
        title: "The 12 Core Modules",
        description: "Complete operational suite across execution, plant assets & supply chain",
        href: "/modules#all-modules",
        iconName: "Layers",
      },
      {
        title: "Connected Workflow",
        description: "Synchronized pipeline from order ingest to delivery dispatch",
        href: "/modules#workflow",
        iconName: "Zap",
      },
      {
        title: "Command Center",
        description: "Unified factory floor cockpit with live machine telemetry and alerts",
        href: "/modules#command-center",
        iconName: "BarChart3",
      },
      {
        title: "AI Copilot",
        description: "Conversational operational intelligence grounded in plant records",
        href: "/modules#ai-copilot",
        badge: "AI",
        iconName: "Bot",
      },
      {
        title: "CAD Automation",
        description: "Engineering drawing interpretation to bill of materials & quotations",
        href: "/modules#cad-automation",
        badge: "Roadmap",
        iconName: "FileCode",
      },
    ],
  },
  { label: "Industries", href: "/#industries" },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
];

export interface ModuleItem {
  id: string;
  number: string;
  name: string;
  shortTag: string;
  category: "Execution" | "Assets" | "Supply Chain";
  headline: string;
  description: string;
  keyCapabilities: string[];
  interfaceMetric: {
    label: string;
    value: string;
    sublabel: string;
  };
  sampleRecord: {
    code: string;
    title: string;
    status: string;
    statusTone: "green" | "amber" | "blue" | "neutral";
    detail: string;
  };
  iconName: string;
}

export const PLATFORM_MODULES: ModuleItem[] = [
  {
    id: "orders",
    number: "01",
    name: "Orders",
    shortTag: "Order Management",
    category: "Execution",
    headline: "Manage customer orders and maintain visibility into their progress.",
    description:
      "Connect incoming customer requirements directly with shop-floor production activities, staged material availability, and dispatch logistics.",
    keyCapabilities: [
      "Customer work-order tracking with line-item BOM mapping",
      "Real-time order progress linked to assembly milestones",
      "Automated delivery date projection based on floor capacity",
      "Order status feeds accessible without manual check-in phone calls",
    ],
    interfaceMetric: {
      label: "Active Work Orders",
      value: "24 Batches",
      sublabel: "98.4% on schedule",
    },
    sampleRecord: {
      code: "ORD-2026-884",
      title: "Precision Valve Bodies (Qty: 1,200)",
      status: "In Machining",
      statusTone: "blue",
      detail: "Line 2 CNC Cell • 68% Completed",
    },
    iconName: "ShoppingCart",
  },
  {
    id: "production",
    number: "02",
    name: "Production",
    shortTag: "Floor Execution",
    category: "Execution",
    headline: "Organise production operations and track manufacturing progress.",
    description:
      "Give operational teams a structured view of what is currently being produced, machine allocations, shift outputs, and where bottlenecks require attention.",
    keyCapabilities: [
      "Digital job cards and station work-in-progress (WIP) tracking",
      "Real-time shift output against scheduled targets",
      "Station bottleneck detection and cycle time analytics",
      "Floor-ready tablet interface for shop supervisors",
    ],
    interfaceMetric: {
      label: "Floor OEE",
      value: "91.8%",
      sublabel: "+3.4% this shift",
    },
    sampleRecord: {
      code: "JOB-404-L2",
      title: "Station 04: High-Pressure Tolerance Test",
      status: "Operational",
      statusTone: "green",
      detail: "Cycle: 22.4s • Yield: 99.8%",
    },
    iconName: "Layers",
  },
  {
    id: "machines",
    number: "03",
    name: "Machines",
    shortTag: "Equipment Telemetry",
    category: "Assets",
    headline: "Maintain structured machine information and asset health.",
    description:
      "Consolidate machine master records, specifications, ownership, warranty certificates, runtime telemetry, and physical maintenance logs.",
    keyCapabilities: [
      "Centralised machine directory with serial specs & electrical ratings",
      "Live runtime and status tracking across factory bays",
      "OEM documentation, warranty periods, and spare parts catalog",
      "Historical breakdown log and MTBF (Mean Time Between Failures) insight",
    ],
    interfaceMetric: {
      label: "Active Plant Units",
      value: "18 / 19 Synced",
      sublabel: "1 Unit in Scheduled Care",
    },
    sampleRecord: {
      code: "MCH-CNC-04",
      title: "5-Axis High Precision Milling Cell",
      status: "Running Smooth",
      statusTone: "green",
      detail: "Vibration: 0.8 mm/s • Temp: 41°C",
    },
    iconName: "Cpu",
  },
  {
    id: "maintenance",
    number: "04",
    name: "Maintenance",
    shortTag: "Service & PM",
    category: "Assets",
    headline: "Organise maintenance records, service activities, and preventative care.",
    description:
      "Transition from reactive emergency repairs to structured preventative maintenance schedules, machine service tickets, and spare-parts tracking.",
    keyCapabilities: [
      "Scheduled Preventative Maintenance (PM) calendars and reminders",
      "Rapid maintenance ticket dispatch with technician tagging",
      "Root cause recording to prevent recurring equipment stoppages",
      "Spare-parts requisition tied into warehouse inventory",
    ],
    interfaceMetric: {
      label: "Preventative Compliance",
      value: "96.2%",
      sublabel: "Next service in 14h (Lathe #2)",
    },
    sampleRecord: {
      code: "MNT-TCK-119",
      title: "Spindle Bearing Grease Check (Line 3)",
      status: "Scheduled",
      statusTone: "amber",
      detail: "Technician: R. Sharma • Shift B Handover",
    },
    iconName: "Wrench",
  },
  {
    id: "inventory",
    number: "05",
    name: "Inventory",
    shortTag: "Material Control",
    category: "Supply Chain",
    headline: "Manage material availability and lot-level traceability.",
    description:
      "Connect raw material availability with active production schedules so lines never run dry, while tracking warehouse bins, finished goods, and scrap.",
    keyCapabilities: [
      "Real-time raw material balances and reorder-level alerts",
      "Lot, heat-number, and batch traceability for quality compliance",
      "WIP inventory buffer tracking between production cells",
      "Automated stock deduction against completed bill of materials",
    ],
    interfaceMetric: {
      label: "Material Buffer",
      value: "14 Days",
      sublabel: "Alloy 304 optimal • 0 critical shortages",
    },
    sampleRecord: {
      code: "SKU-AL-304",
      title: "Stainless Steel Round Bar Ø40mm",
      status: "Healthy Stock",
      statusTone: "green",
      detail: "Stock: 4,200 kg • Bay C Racks 4-6",
    },
    iconName: "Package",
  },
  {
    id: "procurement",
    number: "06",
    name: "Procurement",
    shortTag: "Purchasing",
    category: "Supply Chain",
    headline: "Organise purchasing requirements and procurement workflows.",
    description:
      "Generate purchase orders directly from material shortfall alerts, track supplier lead times, and streamline purchasing approvals in one workspace.",
    keyCapabilities: [
      "Demand-driven purchase requisitions linked to active jobs",
      "Multi-stage purchase order approvals and budget checks",
      "Inbound shipment milestone tracking and dock receiving receipts",
      "Purchase history and cost variance comparison against target margins",
    ],
    interfaceMetric: {
      label: "Open PO Value",
      value: "₹18.4L",
      sublabel: "4 Shipments in transit",
    },
    sampleRecord: {
      code: "PO-2026-092",
      title: "Hydraulic Seals & Industrial Gaskets",
      status: "Shipped",
      statusTone: "blue",
      detail: "Vendor: Apex Fasteners • ETA Tomorrow 11:00",
    },
    iconName: "ShoppingBag",
  },
  {
    id: "vendor-management",
    number: "07",
    name: "Vendor Management",
    shortTag: "Suppliers",
    category: "Supply Chain",
    headline: "Maintain structured vendor information and supplier relationships.",
    description:
      "Keep verified vendor profiles, GST/tax records, quality ratings, delivery punctuality history, and primary points of contact always accessible.",
    keyCapabilities: [
      "Complete vendor master with compliance documents & certificates",
      "On-time delivery (OTD) and quality rejection scorecards",
      "Direct email and quotation histories in one shared ledger",
      "Preferred supplier tagging by material grade and component class",
    ],
    interfaceMetric: {
      label: "Active Suppliers",
      value: "42 Vendors",
      sublabel: "97.1% on-time delivery index",
    },
    sampleRecord: {
      code: "VND-APX-01",
      title: "Apex Alloys & Castings Ltd",
      status: "Tier-1 Verified",
      statusTone: "green",
      detail: "Quality Rating: 4.9/5 • 98.4% OTD",
    },
    iconName: "Building2",
  },
  {
    id: "rfqs",
    number: "08",
    name: "RFQs",
    shortTag: "Quotation Requests",
    category: "Supply Chain",
    headline: "Create and organise requests for quotations across suppliers.",
    description:
      "Send structured RFQs with attached technical drawings, compare vendor quotes side by side, and award purchase contracts with complete auditability.",
    keyCapabilities: [
      "One-click multi-vendor RFQ distribution with drawing attachments",
      "Side-by-side bid comparison matrix (pricing, lead-time, payment terms)",
      "Automated bid expiry tracking and reminder notifications",
      "Seamless conversion of accepted vendor quotes into official POs",
    ],
    interfaceMetric: {
      label: "Active RFQ Rounds",
      value: "3 Pending",
      sublabel: "Lowest bid -4.2% under estimate",
    },
    sampleRecord: {
      code: "RFQ-2026-031",
      title: "CNC Tooling Inserts (Annual Blanket Contract)",
      status: "3 Quotes Received",
      statusTone: "amber",
      detail: "Bids: Apex, Sandvik, Kennametal",
    },
    iconName: "FileSpreadsheet",
  },
  {
    id: "workforce",
    number: "09",
    name: "Workforce & Team",
    shortTag: "Human Capital",
    category: "Execution",
    headline: "Bring team information and shift allocations into the manufacturing environment.",
    description:
      "Assign skilled operators to qualified machine lines, manage shift rosters, record safety certifications, and keep factory communications clear.",
    keyCapabilities: [
      "Shift rostering and machine skill-matrix matching",
      "Safety certification and operator machine authorization records",
      "Shift handover notes and operational defect logs",
      "Role-based access permissions tailored for plant managers & operators",
    ],
    interfaceMetric: {
      label: "Shift Strength",
      value: "34 On Duty",
      sublabel: "Shift A: 100% station coverage",
    },
    sampleRecord: {
      code: "SFT-A-CELL3",
      title: "Line 3 Milling & QA Team",
      status: "Full Coverage",
      statusTone: "green",
      detail: "Lead: M. Khan • 6 Operators • 1 QC Lead",
    },
    iconName: "Users",
  },
  {
    id: "deliveries",
    number: "10",
    name: "Deliveries",
    shortTag: "Dispatch & Logistics",
    category: "Execution",
    headline: "Connect customer orders, production progress, and dispatch activities.",
    description:
      "Coordinate finished goods inspection, packing slips, carrier scheduling, gate passes, and delivery proof in one synchronized dispatch lane.",
    keyCapabilities: [
      "Finished goods QA sign-off and packing list generation",
      "Carrier appointment booking and transport gate pass coordination",
      "Real-time shipment tracking with dispatch notification to customers",
      "POD (Proof of Delivery) digital archiving linked back to original orders",
    ],
    interfaceMetric: {
      label: "Dispatched Today",
      value: "3 Consignments",
      sublabel: "100% on-time carrier pickup",
    },
    sampleRecord: {
      code: "DSP-2026-118",
      title: "Batch #AB-842 Castings to Pune Client",
      status: "Out for Delivery",
      statusTone: "blue",
      detail: "Carrier: BlueDart Freight • ETA 16:30",
    },
    iconName: "Truck",
  },
  {
    id: "documents",
    number: "11",
    name: "Documents",
    shortTag: "Central Repository",
    category: "Assets",
    headline: "Organise factory drawings, mill test certificates, and compliance files.",
    description:
      "Maintain a single, searchable digital repository for CAD drawings, material test reports (MTRs), equipment warranties, tax invoices, and ISO audits.",
    keyCapabilities: [
      "Centralised document repository indexed by job, machine, and vendor",
      "Material test certificate (MTC/MTR) association with batch numbers",
      "Drawing version control with engineer sign-off timestamps",
      "Instant document retrieval directly inside the AI Copilot",
    ],
    interfaceMetric: {
      label: "Indexed Factory Files",
      value: "1,420 Docs",
      sublabel: "100% searchable with AI",
    },
    sampleRecord: {
      code: "DOC-MTR-992",
      title: "Mill Test Report - Heat #H-7741 (304 Alloy)",
      status: "Verified ISO",
      statusTone: "green",
      detail: "Uploaded by QA Dept • Linked to Order #884",
    },
    iconName: "FolderGit2",
  },
  {
    id: "factory-performance",
    number: "12",
    name: "Factory Performance",
    shortTag: "Unified Analytics",
    category: "Execution",
    headline: "Bring operational data together for a true understanding of factory efficiency.",
    description:
      "Transform disparate daily logs into clear visibility over overall equipment effectiveness (OEE), scrap rates, order cycle times, and operational health.",
    keyCapabilities: [
      "Factory-wide OEE, downtime breakdown, and yield trend charts",
      "On-time in-full (OTIF) delivery metrics by customer and product line",
      "Material wastage and scrap variance analysis",
      "Executive summary reports generated effortlessly for leadership",
    ],
    interfaceMetric: {
      label: "Monthly Yield",
      value: "98.7%",
      sublabel: "Target 98.0% • 12 consecutive shifts met",
    },
    sampleRecord: {
      code: "KPI-SHIFT-SUM",
      title: "Daily Plant Operational Digest",
      status: "Optimal",
      statusTone: "green",
      detail: "3 Lines Running • 0 Unplanned Stops",
    },
    iconName: "BarChart3",
  },
];

export const CONNECTED_WORKFLOW_STEPS = [
  {
    step: "01",
    phase: "Customer Order Ingest",
    title: "Order Entry & Engineering Check",
    description:
      "A customer purchase order arrives with technical specifications and target delivery date.",
    module: "Orders & Documents",
    action: "System parses required quantities, draws down approved CAD specs, and initializes the work schedule.",
    state: "Order #AB-842 Confirmed",
  },
  {
    step: "02",
    phase: "Requirements Analysis",
    title: "Production Routing & Bill of Materials",
    description:
      "AetherBuilt computes required machine hours, operational stations, and raw material quantities.",
    module: "Production & Inventory",
    action: "Verifies stock in Warehouse Bay 4. Identifies that 400kg of Stainless 304 alloy is immediately available, but a 150kg buffer is needed.",
    state: "Routing Established",
  },
  {
    step: "03",
    phase: "Automated Sourcing",
    title: "Procurement & Vendor RFQs",
    description:
      "A short-fall triggers an instant requisition without waiting for weekly reconciliation meetings.",
    module: "Procurement & RFQs",
    action: "Transmits structured RFQ to verified suppliers; compares quotes against historical purchase rates; purchase order authorized.",
    state: "PO Dispatched to Apex",
  },
  {
    step: "04",
    phase: "Floor Execution",
    title: "Shop Floor Scheduling & Machine Sync",
    description:
      "Line 2 CNC stations receive digital job cards while machine health and technician availability are verified.",
    module: "Machines & Workforce",
    action: "Telemetry confirms CNC-04 vibration within safe range (0.82 mm/s); operator Shift A signed on; production underway.",
    state: "Machining Active",
  },
  {
    step: "05",
    phase: "Continuous Safeguards",
    title: "Maintenance & Preventative Care",
    description:
      "Operational telemetry continuously tracks spindle thermals and tool wear during the run.",
    module: "Maintenance",
    action: "Preventative lubrication scheduled during planned 15-minute shift changeover to ensure zero unplanned stoppages.",
    state: "Uptime Guaranteed",
  },
  {
    step: "06",
    phase: "Quality & Dispatch",
    title: "Inspection, Packaging & Delivery",
    description:
      "Finished units clear tolerance validation, digital inspection certificates attach, and dispatch begins.",
    module: "Deliveries & Performance",
    action: "Consignment packed, gate pass issued, tracking link dispatched to client. Order ledger closed seamlessly.",
    state: "On-Time Dispatch",
  },
];

export const COPILOT_DEMO_QUERIES = [
  {
    id: "delay-analysis",
    question: "Why is production batch #AB-842 flagged with a 2-hour delay?",
    response: {
      answer:
        "Batch #AB-842 is experiencing a temporary hold due to two interconnected operational dependencies:",
      points: [
        "Material Shortage: Alloy Lot #AL-409 was held at inbound receiving gate for QA chemical verification (released 18 mins ago).",
        "Asset Dependency: CNC Milling Cell #04 completed a scheduled 20-minute spindle recalibration under preventative maintenance ticket #MNT-119.",
      ],
      recommendation:
        "Both dependencies are now cleared. CNC-04 has resumed operation at 420 units/hour. Projected delivery window to customer remains on track for 16:30 today.",
      connectedModules: ["Orders", "Production", "Inventory", "Maintenance"],
    },
  },
  {
    id: "material-stock",
    question: "What is our current stock position for 304 Stainless Bar and do we need to reorder?",
    response: {
      answer:
        "Current warehouse inventory for 304 Stainless Round Bar (Ø40mm):",
      points: [
        "Physical On-Hand: 4,200 kg located across Bay C Racks 4-6.",
        "Allocated to Active Jobs: 2,650 kg across Job #404 and Job #412.",
        "Net Available Buffer: 1,550 kg (equivalent to 14 days of typical plant consumption).",
      ],
      recommendation:
        "Stock is currently healthy. However, upcoming Order #ORD-890 will require 1,200 kg next Tuesday. Recommend triggering RFQ to preferred vendor Apex Alloys by Friday.",
      connectedModules: ["Inventory", "Procurement", "Vendors"],
    },
  },
  {
    id: "machine-health",
    question: "Which machines require maintenance attention before the next shift starts?",
    response: {
      answer:
        "Telemetry and preventative service scan across 19 monitored machines:",
      points: [
        "Loom Unit B-04: Spindle bearing vibration elevated slightly to 1.1 mm/s (threshold: 1.5 mm/s). Scheduled grease inspection due in 14 hours.",
        "Hydraulic Press HP-02: Fluid temperature steady at 42.6°C. Filter change logged 180 operating hours ago (nominal limit: 500 hours).",
      ],
      recommendation:
        "All critical lines are green for Shift B. Line supervisor M. Khan has been assigned the 15-minute lubrication checkpoint at 14:00 changeover.",
      connectedModules: ["Machines", "Maintenance", "Workforce"],
    },
  },
];

export const CAD_WORKFLOW_STEPS = [
  {
    step: "01",
    phase: "CAD Drawing Ingest",
    title: "Ingest Technical Drawings & Schematics",
    description:
      "Upload 2D drawings (DWG, DXF, PDF) or 3D CAD models (STEP, IGES). The system accepts raw customer blueprints with dimension callouts.",
    status: "Active Capability",
  },
  {
    step: "02",
    phase: "Drawing Interpretation",
    title: "AI Geometric & Tolerance Parsing",
    description:
      "Extracts critical GD&T features, surface roughness requirements, hole diameters, thread pitches, and material specifications directly from drawings.",
    status: "Active Development",
  },
  {
    step: "03",
    phase: "Structured Engineering Info",
    title: "Generate Manufacturing Feature Tree",
    description:
      "Converts blueprint dimensions into structured machining features (turning, 3-axis milling, boring, surface finishing) with required tolerance grades.",
    status: "Active Development",
  },
  {
    step: "04",
    phase: "Automated BOM Generation",
    title: "Compute Raw Material & Stock Sizing",
    description:
      "Determines optimal blank stock sizes to minimise scrap yield loss. Maps required metallurgy (e.g. SS 316L, AL 6061-T6) against current warehouse stock.",
    status: "Under Active Development",
  },
  {
    step: "05",
    phase: "Cycle Time & Cost Estimation",
    title: "Estimate Machine Hours & Tooling Costs",
    description:
      "Calculates cycle times per operation based on machine feed rates, tool changes, and hourly machine shop rates calibrated to factory history.",
    status: "Roadmap Feature",
  },
  {
    step: "06",
    phase: "Quotation Generation",
    title: "Produce Professional Customer Quotation",
    description:
      "Generates an auditable, transparent quotation with itemized material, machining, surface treatment, and delivery timelines ready for client approval.",
    status: "Roadmap Feature",
  },
];

export const TARGET_AUDIENCES = [
  {
    role: "Factory Owners",
    tagline: "Total Operational Visibility",
    challenge:
      "Managing through fragmented daily reports, disconnected phone calls, and surprises about machine breakdowns or delayed customer shipments.",
    howAetherBuiltHelps:
      "AetherBuilt gives owners an executive command centre that connects every facet of the plant in real time, restoring predictability to daily delivery schedules and margins.",
    statHighlight: "Unified Visibility",
    statDescription: "Over orders, plant assets, inventory, and margin leaks",
  },
  {
    role: "Production Managers",
    tagline: "Frictionless Shop Floor Flow",
    challenge:
      "Balancing shifting order priorities, sudden material stockouts, and unexpected machine downtime that derails the day's production plan.",
    howAetherBuiltHelps:
      "Provides live WIP visibility, digital station scheduling, bottleneck detection, and immediate alerts when an upstream dependency is falling behind.",
    statHighlight: "Clear Workflows",
    statDescription: "Shift targets, line allocations, and cycle telemetry in sync",
  },
  {
    role: "Procurement & Sourcing Teams",
    tagline: "Demand-Driven Material Sourcing",
    challenge:
      "Discovering material shortages after a job has already reached the floor, leading to urgent, expensive spot purchases and delayed batches.",
    howAetherBuiltHelps:
      "Directly ties purchase requisitions to scheduled production orders, giving procurement teams automatic foresight and supplier quote comparison tools.",
    statHighlight: "Proactive Sourcing",
    statDescription: "RFQs and supplier scorecards connected to production demand",
  },
  {
    role: "Maintenance Teams",
    tagline: "Zero Unplanned Machine Stoppages",
    challenge:
      "Running around fighting emergencies when high-value machines fail unexpectedly, with missing spare parts and incomplete service histories.",
    howAetherBuiltHelps:
      "Maintains complete machine asset registries, schedules preventative care during shift changeovers, and links spare part availability directly to the warehouse.",
    statHighlight: "Structured PM",
    statDescription: "Asset health, historical breakdown logs, and scheduled care",
  },
  {
    role: "Operations & Quality Teams",
    tagline: "End-to-End Batch Traceability",
    challenge:
      "Spending hours hunting down paper test certificates, batch heat numbers, and delivery challans when a customer audits or questions quality.",
    howAetherBuiltHelps:
      "Indexes inspection reports, mill test certificates (MTCs), and machine logs directly against the customer work order for one-click audit compliance.",
    statHighlight: "Audit-Ready Records",
    statDescription: "Instant batch traceability from raw material to dispatch",
  },
];

export const CORE_DIFFERENTIATORS = [
  {
    number: "01",
    title: "Manufacturing-First Design",
    summary:
      "Built from the ground up for the realities of the factory floor — dirty hands, fast shift changes, noisy shops, and complex multi-step assembly lines — not generic office collaboration.",
  },
  {
    number: "02",
    title: "Connected Operational Modules",
    summary:
      "Twelve purpose-built modules that communicate continuously. When a machine undergoes maintenance, production adjusts, inventory alerts adjust, and delivery dates stay realistic.",
  },
  {
    number: "03",
    title: "Centralised Factory Information",
    summary:
      "Eliminates the chaotic patchwork of WhatsApp chats, paper registers, unversioned Excel sheets, and departmental software silos that leave teams guessing.",
  },
  {
    number: "04",
    title: "AI-Oriented Architecture",
    summary:
      "A contextual intelligence layer built to understand engineering drawings, query live operational databases, and surface the root causes of shop floor bottlenecks naturally.",
  },
  {
    number: "05",
    title: "Document & Engineering Workflow Direction",
    summary:
      "Direct roadmap bridges engineering CAD drawings, bill-of-materials generation, and quotation workflows directly into shop-floor job scheduling.",
  },
  {
    number: "06",
    title: "One Unified Operational Environment",
    summary:
      "From incoming raw material delivery at the gate to final finished goods dispatch, everyone on your team shares the exact same operational truth.",
  },
];

export const DEMO_IMPROVEMENT_AREAS = [
  "Production Management",
  "Inventory Management",
  "Machine & Maintenance Tracking",
  "Procurement & Vendor Management",
  "Order & Delivery Management",
  "Complete Factory Operations",
  "Other",
] as const;

export const COMPANY_SIZE_OPTIONS = [
  "10 - 25 team members",
  "25 - 50 team members",
  "50 - 150 team members",
  "150 - 500 team members",
  "500+ team members",
] as const;

export const MANUFACTURING_INDUSTRIES = [
  "Precision Engineering & CNC Machining",
  "Automotive Components & Assemblies",
  "Fabrication & Sheet Metal",
  "Industrial Machinery & Equipment",
  "Plastics, Polymers & Tooling",
  "Electrical & Electronics Manufacturing",
  "Foundry, Forging & Metallurgy",
  "Process & Chemical Manufacturing",
  "General Manufacturing / Other",
] as const;
