// Single source of truth for site copy and media.
// Every image in the site must be declared here as a MediaAsset and referenced
// by mediaKey — never a raw string path inline in a component.

export interface MediaAsset {
  src: string;
  alt: string;
  isTemporary: boolean;
  requiresApproval?: boolean;
}

export interface AgencyInfo {
  name: string;
  tagline: string;
  secondaryTagline: string;
  heroDescription: string;
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  website: string;
}

export interface Mandate {
  id: string;
  number: string;
  title: string;
  copy: string;
  mediaKey: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  copy: string;
  mediaKey: string;
  isTemporary: boolean;
  requiresApproval: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  copy: string;
}

export interface CtaLink {
  label: string;
  to: string;
}

export const AGENCY_INFO: AgencyInfo = {
  name: 'MakeMyCampaign',
  tagline: "We don't run ads. We build brands.",
  secondaryTagline: 'Strategic Growth. Political Intelligence. Digital Influence.',
  heroDescription:
    'We combine strategy, creativity, technology and audience intelligence to build brands that lead markets, leaders who command attention and campaigns that move people to act.',
  phonePrimary: '+91 8888533422',
  phoneSecondary: '+91 9850443750',
  email: 'business@makemycampaign.co.in',
  website: 'makemycampaign.co.in',
};

// Until real photography is supplied, every entry here is a placeholder:
// isTemporary + requiresApproval are both true, and src points at a clearly
// labelled placeholder file under /public/temp_images/.
export const MEDIA_MANIFEST: Record<string, MediaAsset> = {
  mandateBrandGrowth: {
    src: '/temp_images/mandate-brand-growth-placeholder.svg',
    alt: 'Brand growth strategy and campaign identity development',
    isTemporary: true,
    requiresApproval: true,
  },
  mandatePoliticalCampaigns: {
    src: '/temp_images/mandate-political-campaigns-placeholder.svg',
    alt: 'Political candidate positioning and campaign communication',
    isTemporary: true,
    requiresApproval: true,
  },
  mandateCorporateInstitutional: {
    src: '/temp_images/mandate-corporate-institutional-elections-placeholder.svg',
    alt: 'Corporate and institutional election campaign communication',
    isTemporary: true,
    requiresApproval: true,
  },
  caseStudyAryanMaan: {
    src: '/temp_images/case-study-aryan-maan-dusu-placeholder.svg',
    alt: 'Aryan Maan DUSU campaign communication',
    isTemporary: true,
    requiresApproval: true,
  },
  caseStudyNashik: {
    src: '/temp_images/case-study-nashik-municipal-corporation-placeholder.svg',
    alt: 'Nashik Municipal Corporation civic communication campaign',
    isTemporary: true,
    requiresApproval: true,
  },
  caseStudyNewHorizons: {
    src: '/temp_images/case-study-new-horizons-placeholder.svg',
    alt: 'New Horizons Child Development Centre healthcare awareness campaign',
    isTemporary: true,
    requiresApproval: true,
  },
  caseStudyAmolAnnadate: {
    src: '/temp_images/case-study-amol-annadate-placeholder.svg',
    alt: 'Dr. Amol Annadate public leadership communication',
    isTemporary: true,
    requiresApproval: true,
  },
  heroPrimary: {
    src: '/temp_images/home-hero-strategy-studio-temporary.png',
    alt: 'MMC campaign strategy team planning in a studio',
    isTemporary: true,
    requiresApproval: true,
  },
  heroSecondaryA: {
    src: '/temp_images/home-hero-creative-production-temporary.png',
    alt: 'Creative production team preparing campaign content',
    isTemporary: true,
    requiresApproval: true,
  },
  heroSecondaryB: {
    src: '/temp_images/home-hero-field-outreach-temporary.png',
    alt: 'Campaign outreach team coordinating field communication',
    isTemporary: true,
    requiresApproval: true,
  },
  agencyIntro: {
    src: '/temp_images/home-agency-strategy-workshop-temporary.png',
    alt: 'Campaign strategy workshop in progress',
    isTemporary: true,
    requiresApproval: true,
  },
};

// Homepage hero CTAs, per brief: "Primary CTA: Explore Our Work | Secondary CTA: Start a Conversation".
export const HERO_CTAS: { primary: CtaLink; secondary: CtaLink } = {
  primary: { label: 'Explore Our Work', to: '/work' },
  secondary: { label: 'Start a Conversation', to: '/contact' },
};

// The hero's kinetic-type stage: short capability words that fly across the
// viewport mid-sequence. Echoes AGENCY_INFO.secondaryTagline's own themes.
export const HERO_KINETIC_WORDS: string[] = ['Strategy', 'Creative', 'Technology', 'Influence'];

// The hero's closing statement, revealed over the blue takeover panel —
// the second half of AGENCY_INFO.tagline, isolated for its own reveal beat.
export const HERO_CLIMAX_STATEMENT = 'We build brands.';

export const HERO_SCROLL_INDICATOR = 'Scroll';

export interface AgencyIntroduction {
  heading: string;
  paragraphs: string[];
  mediaKey: string;
}

// From the brief's "About Us Page — Final Copy" section.
export const AGENCY_INTRODUCTION: AgencyIntroduction = {
  heading: 'The Science of Resonance. The Strategy of Growth.',
  paragraphs: [
    'Most agencies focus on media buying. We focus on the entire system that makes communication effective — positioning, audience insight, narrative, creative execution, distribution, technology and measurement.',
    'MakeMyCampaign was built on a simple belief: data without a compelling narrative is cold, and a narrative without data is blind. We bring both together to create communication that feels relevant, earns trust and inspires action.',
  ],
  mediaKey: 'agencyIntro',
};

export interface ClosingSection {
  heading: string;
  copy: string;
  cta: CtaLink;
}

// From the brief's "Contact & Conversion Section".
export const CLOSING_SECTION: ClosingSection = {
  heading: 'Ready to build a brand that leads?',
  copy: 'Whether you are scaling a company, strengthening an institution, building a public profile or preparing for a high-stakes political campaign, the right strategy begins with a focused conversation.',
  cta: { label: 'Schedule a Strategy Consultation', to: '/contact' },
};

// Ticker of service names, drawn from the eight lettered services in the brief.
export const CAPABILITIES_MARQUEE: string[] = [
  'Brand Strategy',
  'Performance Marketing',
  'Social Media',
  'Political Campaigns',
  'Creative Studio',
  'Digital Experience',
  'Marketing Automation',
  'Search & Discoverability',
];

export const MANDATES: Mandate[] = [
  {
    id: 'mandate-brand-growth',
    number: '01',
    title: 'Brand Growth',
    copy: 'Positioning, creative, performance media and conversion journeys that help companies and institutions improve market visibility, generate qualified enquiries and build long-term digital advantage.',
    mediaKey: 'mandateBrandGrowth',
  },
  {
    id: 'mandate-political-campaigns',
    number: '02',
    title: 'Political Campaigns',
    copy: 'Leadership positioning, campaign narrative, content and voter outreach for candidates, elected representatives, public leaders and issue-based campaigns.',
    mediaKey: 'mandatePoliticalCampaigns',
  },
  {
    id: 'mandate-corporate-institutional-elections',
    number: '03',
    title: 'Corporate & Institutional Elections',
    copy: 'Credibility-led candidate communication, member outreach, endorsements and structured voting follow-up for professional bodies, councils, panels and associations.',
    mediaKey: 'mandateCorporateInstitutional',
  },
];

// Facts kept to what the brief confirms. None of these have approved outcome
// claims yet, so no reach/result numbers are stated until management signs off.
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-study-aryan-maan',
    category: 'Political Campaign',
    title: 'Aryan Maan — DUSU',
    copy: "A campus political campaign spanning candidate positioning, content and digital outreach for the Delhi University Students' Union election. Full case study pending approved campaign assets.",
    mediaKey: 'caseStudyAryanMaan',
    isTemporary: true,
    requiresApproval: true,
  },
  {
    id: 'case-study-nashik',
    category: 'Civic Communication',
    title: 'Nashik Municipal Corporation',
    copy: 'Public-awareness campaign planning and citizen-focused creative communication designed to strengthen public communication and improve awareness around civic initiatives.',
    mediaKey: 'caseStudyNashik',
    isTemporary: true,
    requiresApproval: true,
  },
  {
    id: 'case-study-new-horizons',
    category: 'Healthcare Communication',
    title: 'New Horizons Child Development Centre',
    copy: 'Digital awareness campaigns, WhatsApp-led patient communication and educational content built to make developmental-healthcare information more accessible to parents and caregivers.',
    mediaKey: 'caseStudyNewHorizons',
    isTemporary: true,
    requiresApproval: true,
  },
  {
    id: 'case-study-amol-annadate',
    category: 'Public Leadership Communication',
    title: 'Dr. Amol Annadate',
    copy: 'Personal brand strategy, content pillars and social media execution built around professional medical expertise, public engagement and leadership positioning.',
    mediaKey: 'caseStudyAmolAnnadate',
    isTemporary: true,
    requiresApproval: true,
  },
];

export interface ServiceOffering {
  id: string;
  letter: string;
  title: string;
  copy: string;
}

// The eight lettered service categories from the brief, in order (A–H).
export const SERVICES: ServiceOffering[] = [
  {
    id: 'brand-strategy',
    letter: 'A',
    title: 'Brand Strategy & Positioning',
    copy: 'Category analysis, audience mapping and positioning work that gives a brand a clear, ownable place in the market before a single asset is designed.',
  },
  {
    id: 'performance-marketing',
    letter: 'B',
    title: 'Performance Marketing & Paid Acquisition',
    copy: 'Full-funnel paid media across search, social and programmatic — planned, tracked and optimised against real business outcomes, not vanity metrics.',
  },
  {
    id: 'social-digital-presence',
    letter: 'C',
    title: 'Social Media & Digital Presence',
    copy: 'Editorial calendars, community management and platform-native content that keep a brand or leader visible, consistent and relevant every week.',
  },
  {
    id: 'political-campaigns',
    letter: 'D',
    title: 'Political Campaigns & Public Communication',
    copy: 'Candidate positioning, campaign narrative, voter outreach and rapid-response communication built for the pace of a live election.',
  },
  {
    id: 'creative-studio',
    letter: 'E',
    title: 'Creative Studio & Content Production',
    copy: 'In-house design, video and photography production that turns strategy into content people actually stop for.',
  },
  {
    id: 'digital-experience',
    letter: 'F',
    title: 'Website, UI/UX & Digital Experience',
    copy: 'Websites and digital products designed and engineered to convert — from information architecture through to launch.',
  },
  {
    id: 'martech-automation',
    letter: 'G',
    title: 'Marketing Technology & Automation',
    copy: 'CRM, WhatsApp and email automation that turns one-time interest into a structured, trackable follow-up journey.',
  },
  {
    id: 'search-discoverability',
    letter: 'H',
    title: 'Search & Discoverability',
    copy: 'SEO, local search and on-platform discoverability work that compounds organic visibility over time.',
  },
];

export interface TeamMember {
  name: string;
  role: string;
}

export const LEADERSHIP: TeamMember[] = [
  { name: 'Sagar Shelar', role: 'Co-Founder & CEO' },
  { name: 'Aditya Adhav', role: 'Co-Founder & CBO' },
];

export const CORE_TEAM: TeamMember[] = [
  { name: 'Roshan Thoke', role: 'Core Team' },
  { name: 'Rakesh Salunke', role: 'Core Team' },
  { name: 'Manasi Deshmukh', role: 'Core Team' },
  { name: 'Prasad Chaudhari', role: 'Core Team' },
  { name: 'Atharva Satote', role: 'Core Team' },
];

export const PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    copy: 'Understand the objective, audience, competitive landscape, issues and available resources.',
  },
  {
    number: '02',
    title: 'Define',
    copy: 'Finalise positioning, narrative, priority audience segments, message pillars and the campaign calendar.',
  },
  {
    number: '03',
    title: 'Build',
    copy: 'Prepare research, identity systems, creative, digital assets, message journeys and reporting systems.',
  },
  {
    number: '04',
    title: 'Influence',
    copy: 'Execute coordinated digital, direct, media and ground communication while tracking response and sentiment.',
  },
  {
    number: '05',
    title: 'Mobilise',
    copy: 'Convert engagement into action — enquiries, support or turnout — with structured follow-up.',
  },
];
