import { Company } from '../../utils/workContent';

// Company metadata mapping
export const companyMetadata: Record<string, Omit<Company, 'id'>> = {
  chi: {
    name: 'CHI',
    displayName: 'CHI',
    logo: '/chi-logo.webp',
    period: 'SEP 2025 — PRESENT',
    description:
      'CHI is a Seed-funded (€1.6M raised) AI-powered event management platform for cashless payments, ticketing, and operational intelligence across 3 web apps and 2 mobile apps.',
    role: `As a Senior Front End Engineer, I am primarily responsible for the architecture and stability of the mobile suite, while also contributing to web and backend initiatives.`,
  },
  tiptip: {
    name: 'TipTip',
    displayName: 'TipTip',
    logo: '/tiptip-logo.webp',
    period: 'OCT 2022 — APR 2025',
    description: `TipTip is a Series A funded ($25M total raised) creator economy platform empowering creators in Southeast Asia to monetize through digital content, memberships, and event ticketing.`,
    role: `Joining the engineering team during the company's first year, I served as a Senior Front End Engineer on the Event Team, where I worked on the development of the platform's consumer-facing ticketing interfaces and internal event management dashboards.`,
  },
  'phantom-network': {
    name: 'Phantom Network',
    displayName: 'Phantom Network',
    logo: '/pxn-logo.webp',
    period: 'APR 2022 — OCT 2022',
    description:
      'Phantom Network is a New Zealand-based Web3 brand behind the top-ranking global NFT collection ($6M primary, $70M+ secondary sales in two weeks).',
    role: `As a Front End Engineer, I played a pivotal role in the platform's global launch, developing a Discord-style chat MVP and two core modules essential for stability during high-traffic windows. Collaborating within a distributed 10-member engineering team.`,
  },
  kodefox: {
    name: 'KodeFox',
    displayName: 'KodeFox',
    logo: '/kodefox-logo.webp',
    period: 'OCT 2016 — NOV 2019',
    description:
      'KodeFox is a Jakarta-based software house founded by a former Meta engineer (and now a YC and Google alumnus), specializes in delivering apps for early startups and major enterprise clients (Prudential, Sampoerna, Sinarmas, etc).',
    role: 'Delivered 4 client apps for enterprise clients including Prudential, Sinarmas, and Sampoerna. I built web and mobile front-ends and mentored 50+ developers through hands-on front-end workshops.',
  },
  gdis: {
    name: 'GDIS',
    displayName: 'GDIS',
    logo: '/gdis-logo.webp',
    period: 'DEC 2019 — APR 2022',
    description:
      'GDIS is a Jakarta-based corporate technology firm specializing in enterprise-grade software solutions for the construction and manufacturing industries.',
    role: `As Front End Engineer, I led a squad of 4 developers to modernize the firm's core enterprise application, overseeing all front-end deliverables.`,
  },
};
