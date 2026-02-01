import { Company } from '../../utils/workContent';

// Company metadata mapping
export const companyMetadata: Record<string, Omit<Company, 'id'>> = {
  chi: {
    name: 'CHI',
    displayName: 'CHI',
    logo: '/chi-logo.webp',
    period: 'SEP 2025 — PRESENT',
    description:
      'CHI is an AI-powered event management platform for cashless payments, ticketing, and operational intelligence across 3 web apps and 2 mobile apps. As Senior Front End Engineer, I own the mobile suite architecture and stability, contributing across web and backend.',
  },
  tiptip: {
    name: 'TipTip',
    displayName: 'TipTip',
    logo: '/tiptip-logo.webp',
    period: 'OCT 2022 — APR 2025',
    description:
      'TipTip is a Series A creator-economy platform in Southeast Asia ($25M raised). I joined in year one as Senior Front End Engineer on the Event Team, leading consumer ticketing experiences and internal event dashboards.',
  },
  'phantom-network': {
    name: 'Phantom Network',
    displayName: 'Phantom Network',
    logo: '/pxn-logo.webp',
    period: 'APR 2022 — OCT 2022',
    description:
      'Phantom Network is a NZ-based Web3 brand behind a top-ranking NFT collection ($70M secondary volume in two weeks). I built a Discord-style chat MVP and core modules for a stable global launch.',
  },
  kodefox: {
    name: 'KodeFox',
    displayName: 'KodeFox',
    logo: '/kodefox-logo.webp',
    period: 'OCT 2016 — NOV 2019',
    description:
      'KodeFox is a Jakarta-based software house founded by a former Meta engineer (YC & Google alumnus), serving early startups and enterprise clients like Prudential, Sampoerna, and Sinarmas.',
  },
  gdis: {
    name: 'GDIS',
    displayName: 'GDIS',
    logo: '/gdis-logo.webp',
    period: 'DEC 2019 — APR 2022',
    description:
      'GDIS is a Jakarta-based enterprise software firm for construction and manufacturing. I led a 4-person squad to modernize the core product and owned front-end delivery.',
  },
};
