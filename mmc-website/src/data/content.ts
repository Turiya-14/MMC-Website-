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
  positioningStatement: string;
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

export interface CapabilityPreview {
  id: string;
  number: string;
  title: string;
  copy: string;
  mediaKey: string;
}

export interface FullService {
  id: string;
  number: string;
  title: string;
  copy: string;
  capabilities: string[];
}

export interface CaseStudy {
  id: string;
  category: 'Political' | 'Civic' | 'Healthcare' | 'Institutional' | 'Brand Growth';
  categoryLabel: string;
  title: string;
  copy: string;
  metadata?: string;
  mediaKey: string;
  isTemporary: boolean;
  requiresApproval: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  copy: string;
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
  avatarText: string;
  isTemporary: boolean;
}

export interface CoreTeamMember {
  name: string;
  role: string;
  avatarText: string;
  isTemporary: boolean;
}

export const AGENCY_INFO: AgencyInfo = {
  name: 'MakeMyCampaign',
  tagline: "We don’t run ads. We build brands.",
  secondaryTagline: 'Strategic Growth. Political Intelligence. Digital Influence.',
  heroDescription: 'We combine strategy, creativity, technology and audience intelligence to build brands that lead markets, leaders who command attention and campaigns that move people to act.',
  positioningStatement: 'Strategic growth, political intelligence, creative communication and campaign technology for brands, institutions and public leaders.',
  phonePrimary: '+91 8888533422',
  phoneSecondary: '+91 9850443750',
  email: 'business@makemycampaign.co.in',
  website: 'makemycampaign.co.in',
};

export const MEDIA_MANIFEST: Record<string, MediaAsset> = {
  homeHeroMain: {
    src: '/temp_images/home-hero-strategy-studio-temporary.png',
    alt: 'MMC campaign strategy team planning in a studio',
    isTemporary: true,
    requiresApproval: true,
  },
  homeHeroCreative: {
    src: '/temp_images/home-hero-creative-production-temporary.png',
    alt: 'Creative production team preparing campaign content',
    isTemporary: true,
    requiresApproval: true,
  },
  homeHeroOutreach: {
    src: '/temp_images/home-hero-field-outreach-temporary.png',
    alt: 'Campaign outreach team coordinating field communication',
    isTemporary: true,
    requiresApproval: true,
  },
  homeAgencyStudio: {
    src: '/temp_images/home-agency-strategy-workshop-temporary.png',
    alt: 'Campaign strategy workshop in progress',
    isTemporary: true,
    requiresApproval: true,
  },
  serviceBrandGrowth: {
    src: '/assets/images/service_brand_growth.svg',
    alt: 'Brand strategy and campaign identity development',
    isTemporary: true,
    requiresApproval: true,
  },
  servicePoliticalCommunication: {
    src: '/assets/images/service_political_communication.svg',
    alt: 'Political communication and public outreach planning',
    isTemporary: true,
    requiresApproval: true,
  },
  serviceCreativeStudio: {
    src: '/assets/images/service_creative_studio.svg',
    alt: 'Creative studio and campaign content production',
    isTemporary: true,
    requiresApproval: true,
  },
  serviceCampaignTechnology: {
    src: '/assets/images/service_campaign_technology.svg',
    alt: 'Campaign communication and audience outreach planning',
    isTemporary: true,
    requiresApproval: true,
  },
  projectAryanMaan: {
    src: '/assets/images/project_aryan_maan.svg',
    alt: 'Aryan Maan DUSU campaign communication',
    isTemporary: true,
    requiresApproval: true,
  },
  projectNashikCivic: {
    src: '/assets/images/project_nashik_civic.svg',
    alt: 'Civic communication and citizen engagement campaign',
    isTemporary: true,
    requiresApproval: true,
  },
  projectNewHorizons: {
    src: '/assets/images/project_new_horizons.svg',
    alt: 'Healthcare awareness and parent communication',
    isTemporary: true,
    requiresApproval: true,
  },
  projectAmolAnnadate: {
    src: '/assets/images/project_amol_annadate.svg',
    alt: 'Doctor and public leadership communication',
    isTemporary: true,
    requiresApproval: true,
  },
};

export const CAPABILITIES_MARQUEE = [
  'Brand Strategy',
  'Political Communication',
  'Creative Studio',
  'Performance Marketing',
  'Direct Outreach',
  'Campaign Technology',
  'Public Affairs',
  'Search & Discoverability',
];

export const MANDATES: Mandate[] = [
  {
    id: 'mandate-1',
    number: '01',
    title: 'Brand Growth',
    copy: 'Positioning, creative, performance media and conversion journeys that help companies and institutions earn attention and generate qualified action.',
    mediaKey: 'serviceBrandGrowth',
  },
  {
    id: 'mandate-2',
    number: '02',
    title: 'Political Campaigns',
    copy: 'Leadership positioning, campaign narratives, content, outreach and mobilisation for candidates, representatives and public causes.',
    mediaKey: 'servicePoliticalCommunication',
  },
  {
    id: 'mandate-3',
    number: '03',
    title: 'Corporate & Institutional Elections',
    copy: 'Credibility-led communication, member outreach, voting guidance and disciplined follow-up for professional bodies, councils, panels and associations.',
    mediaKey: 'serviceCampaignTechnology',
  },
];

export const CAPABILITIES_PREVIEW: CapabilityPreview[] = [
  {
    id: 'cap-1',
    number: '01',
    title: 'Strategy & Positioning',
    copy: 'Audience research, market differentiation, brand architecture and campaign messaging.',
    mediaKey: 'serviceBrandGrowth',
  },
  {
    id: 'cap-2',
    number: '02',
    title: 'Creative Studio & Content',
    copy: 'Campaign identities, films, social video, design, copy and multilingual communication.',
    mediaKey: 'serviceCreativeStudio',
  },
  {
    id: 'cap-3',
    number: '03',
    title: 'Performance & Digital Growth',
    copy: 'Paid media, social presence, search visibility, landing pages and conversion optimisation.',
    mediaKey: 'serviceBrandGrowth',
  },
  {
    id: 'cap-4',
    number: '04',
    title: 'Direct Communication & Automation',
    copy: 'WhatsApp, RCS, SMS, voice, CRM journeys, audience segmentation and campaign reporting.',
    mediaKey: 'serviceCampaignTechnology',
  },
];

export const FULL_SERVICES: FullService[] = [
  {
    id: 'serv-1',
    number: '01',
    title: 'Brand Strategy & Positioning',
    copy: 'We help organisations define who they are, why they matter and how they should be perceived.',
    capabilities: [
      'Brand positioning and market differentiation',
      'Audience and competitor research',
      'Brand architecture and messaging frameworks',
      'Corporate, institutional and personal branding',
    ],
  },
  {
    id: 'serv-2',
    number: '02',
    title: 'Performance Marketing & Paid Acquisition',
    copy: 'We build conversion-focused media systems that align campaign spend with meaningful business outcomes.',
    capabilities: [
      'Google, Meta, YouTube and LinkedIn campaigns',
      'Lead-generation and admissions campaigns',
      'Retargeting and full-funnel media structures',
      'Landing-page and conversion optimisation',
    ],
  },
  {
    id: 'serv-3',
    number: '03',
    title: 'Social Media & Digital Presence',
    copy: 'We turn social platforms into consistent engines for relevance, credibility and community building.',
    capabilities: [
      'Platform strategy and content planning',
      'End-to-end social media management',
      'Founder, doctor and public-leader branding',
      'Community engagement and reputation response',
    ],
  },
  {
    id: 'serv-4',
    number: '04',
    title: 'Political Campaigns & Public Communication',
    copy: 'We provide strategic and execution support for candidates, elected representatives, public leaders, panels and issue-based campaigns.',
    capabilities: [
      'Political positioning and campaign narrative',
      'Constituency and audience communication planning',
      'Campaign films and rapid-response creative',
      'Supporter outreach and mobilisation',
    ],
  },
  {
    id: 'serv-5',
    number: '05',
    title: 'Creative Studio & Content Production',
    copy: 'Our creative team converts strategy into visual and verbal communication built for attention and recall.',
    capabilities: [
      'Campaign identity systems and visual language',
      'Brand, campaign and corporate films',
      'Reels, social video and digital creatives',
      'Copywriting and multilingual content adaptation',
    ],
  },
  {
    id: 'serv-6',
    number: '06',
    title: 'Website, UI/UX & Digital Experience',
    copy: 'We create digital destinations that combine clear messaging, purposeful design and conversion-focused journeys.',
    capabilities: [
      'Corporate and campaign websites',
      'Landing pages and microsites',
      'UI/UX strategy and information architecture',
      'CRM, WhatsApp and analytics integration',
    ],
  },
  {
    id: 'serv-7',
    number: '07',
    title: 'Marketing Technology & Automation',
    copy: 'We build communication infrastructure that helps organisations engage audiences at scale while maintaining visibility and control.',
    capabilities: [
      'WhatsApp Business API implementation',
      'RCS, SMS, voice and email campaigns',
      'Chatbots and automated communication journeys',
      'Lead routing, segmentation and CRM integration',
    ],
  },
  {
    id: 'serv-8',
    number: '08',
    title: 'Search & Discoverability',
    copy: 'We improve long-term visibility where audiences actively search for organisations, leaders, services and solutions.',
    capabilities: [
      'Technical and on-page SEO',
      'Local SEO and Google Business Profile management',
      'Content-led authority building',
      'Search reputation and branded-search management',
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'project-aryan-maan',
    category: 'Political',
    categoryLabel: 'Student Political Campaign',
    title: 'Aryan Maan — DUSU Campaign',
    copy: 'A unified campaign spanning candidate positioning, youth-focused content, digital outreach and campus mobilisation.',
    metadata: 'Delhi University Students’ Union • 2025',
    mediaKey: 'projectAryanMaan',
    isTemporary: true,
    requiresApproval: true,
  },
  {
    id: 'project-nashik-civic',
    category: 'Civic',
    categoryLabel: 'Civic Communication',
    title: 'Nashik Municipal Corporation',
    copy: 'Public-awareness communication designed to make civic initiatives clear, accessible and consistent across digital channels.',
    mediaKey: 'projectNashikCivic',
    isTemporary: true,
    requiresApproval: true,
  },
  {
    id: 'project-new-horizons',
    category: 'Healthcare',
    categoryLabel: 'Healthcare Communication',
    title: 'New Horizons Child Development Centre',
    copy: 'Digital awareness and educational communication designed to help parents access developmental-health information with clarity and confidence.',
    mediaKey: 'projectNewHorizons',
    isTemporary: true,
    requiresApproval: true,
  },
  {
    id: 'project-amol-annadate',
    category: 'Healthcare',
    categoryLabel: 'Public Leadership Communication',
    title: 'Dr. Amol Annadate',
    copy: 'A structured communication system built around professional expertise, public engagement and consistent content.',
    mediaKey: 'projectAmolAnnadate',
    isTemporary: true,
    requiresApproval: true,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    copy: 'Understand the objective, audience, category, geography and current communication.',
  },
  {
    number: '02',
    title: 'Define',
    copy: 'Set the positioning, message pillars, priorities, channels and success criteria.',
  },
  {
    number: '03',
    title: 'Build',
    copy: 'Create the identity, content, media plan, journeys and execution system.',
  },
  {
    number: '04',
    title: 'Activate',
    copy: 'Launch coordinated creative, media, outreach and on-ground communication.',
  },
  {
    number: '05',
    title: 'Improve',
    copy: 'Review response, learn from performance and refine the campaign continuously.',
  },
];

export const OPERATING_PRINCIPLES = [
  'Strategy before spend.',
  'Relevance before reach.',
  'Narrative guided by insight.',
  'Systems over isolated activity.',
  'Outcomes before vanity metrics.',
];

export const LEADERSHIP: Leader[] = [
  {
    name: 'Sagar Shelar',
    role: 'Co-Founder & CEO',
    bio: 'Sagar leads strategic campaign planning, political communication, brand positioning and public narrative development. His work focuses on translating complex objectives into clear campaign direction, coordinated execution and meaningful audience engagement.',
    avatarText: 'SS',
    isTemporary: false,
  },
  {
    name: 'Aditya Adhav',
    role: 'Co-Founder & CBO',
    bio: 'Aditya leads growth strategy, campaign technology, communication automation, digital platforms and execution systems. His focus is on building scalable marketing and engagement infrastructure that connects strategy with measurable implementation.',
    avatarText: 'AA',
    isTemporary: false,
  },
];

export const CORE_TEAM: CoreTeamMember[] = [
  { name: 'Roshan Thoke', role: 'Associate Partner', avatarText: 'RT', isTemporary: false },
  { name: 'Rakesh Salunke', role: 'Associate Partner', avatarText: 'RS', isTemporary: false },
  { name: 'Manasi Deshmukh', role: 'Head, Content Strategy & Brand Communications', avatarText: 'MD', isTemporary: false },
  { name: 'Prasad Chaudhari', role: 'Creative Director', avatarText: 'PC', isTemporary: false },
  { name: 'Atharva Satote', role: 'Motion Graphics & Video Production Specialist', avatarText: 'AS', isTemporary: false },
];
