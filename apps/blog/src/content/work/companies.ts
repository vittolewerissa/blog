import { Company } from '../../utils/workContent';

// Company metadata mapping
export const companyMetadata: Record<string, Omit<Company, 'id'>> = {
  chi: {
    name: 'CHI',
    displayName: 'CHI',
    logo: '/chi-logo.webp',
    period: 'SEP 2025 — PRESENT',
    description:
      'CHI is an all-in-one cashless payments, ticketing and intelligence platform for seamless event management. As Senior Front End Engineer, I maintain CHI App (React Native), CHI POS, CHI Backstage, and CHI PWA, enabling event organizers to accept payments, manage ticketing, and gain real-time insights.',
  },
  tiptip: {
    name: 'TipTip',
    displayName: 'TipTip',
    logo: '/tiptip-logo.webp',
    period: 'OCT 2022 — APR 2025',
    description:
      'TipTip is a ticketing platform for events in Indonesia. As Senior Front End Engineer, I developed and maintained 5 applications, shipped 10+ product-led features, and enhanced web performance to support high-scale events like Green Day (30k capacity, 100 RPS).',
  },
  'phantom-network': {
    name: 'Phantom Network',
    displayName: 'Phantom Network',
    logo: '/pxn-logo.webp',
    period: 'APR 2022 — OCT 2022',
    description:
      'Phantom Network is an NFT project that reached #1 on OpenSea with $70M in secondary sales. As Senior Front End Engineer, I built a Discord-like chat app for their community and initialized their marketplace platform.',
  },
  kodefox: {
    name: 'KodeFox',
    displayName: 'KodeFox',
    logo: '/kodefox-logo.webp',
    period: 'OCT 2016 — NOV 2019',
    description:
      'KodeFox is a software house specializing in web and mobile development. As Front End Engineer, I delivered 4 client apps (React.js and React Native), contributed to VisionUI (a no-code framework for Prudential Indonesia), and mentored developers through workshops at Traveloka and other organizations.',
  },
  gdis: {
    name: 'GDIS',
    displayName: 'GDIS',
    logo: '/gdis-logo.webp',
    period: 'DEC 2019 — APR 2022',
    description:
      'GDIS is an IT consulting company. As Front End Engineer, I led a team of 4 developers, revamped the core product using React & GraphQL (reducing load times by 60%), and eliminated 25% of legacy code.',
  },
};
