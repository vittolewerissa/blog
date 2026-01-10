export type ProjectWithImage = {
  name: string;
  href: string;
  date: {
    dateFrom: string;
    dateTo: string;
  };
  description: string;
  technologyUsed: string[];
  responsibilities: string[];
  challenges?: string[];
  image: {
    src: string;
    alt: string;
    aspectRatio: string;
    objectFit: 'object-contain' | 'object-cover';
    withMixBlend: boolean;
  };
};

export type ProjectWithoutImage = Omit<ProjectWithImage, 'image'>;

export const CHIProjects: Array<ProjectWithImage> = [
  {
    name: 'CHI App',
    href: 'https://chi.app/',
    date: { dateFrom: 'Apr 2025', dateTo: 'Present' },
    description:
      'A mobile event ticketing platform where users can discover events, purchase tickets, and order food and drinks. Features a seamless cashless experience with QR-based entry and in-app ordering, plus crew management tools for event staff.',
    technologyUsed: ['React Native', 'TypeScript'],
    responsibilities: [
      'Build and maintain the mobile app',
      'Implement ticketing and ordering features',
    ],
    image: {
      src: '/chi-app.webp',
      alt: 'CHI App mobile ticketing platform',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-contain',
      withMixBlend: true,
    },
  },
  {
    name: 'CHI Tickets',
    href: 'https://chi.app/',
    date: { dateFrom: 'Apr 2025', dateTo: 'Present' },
    description:
      'The web version of CHI that allows users to browse events and purchase tickets directly from their browser. Provides a streamlined checkout experience for event-goers who prefer web over mobile.',
    technologyUsed: ['React.js', 'TypeScript'],
    responsibilities: [
      'Build the web ticketing platform',
      'Implement checkout and payment flows',
    ],
    image: {
      src: '/chi-tickets-mockup.webp',
      alt: 'CHI Tickets web platform',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-contain',
      withMixBlend: true,
    },
  },
  {
    name: 'CHI Backstage',
    href: 'https://chi.app/',
    date: { dateFrom: 'Apr 2025', dateTo: 'Present' },
    description:
      'The comprehensive platform for event organizers to create and manage events end-to-end. Features include crew coordination and scheduling, product management for merchandise and concessions, real-time event operations, and detailed analytics to streamline the entire event lifecycle.',
    technologyUsed: ['React.js', 'TypeScript'],
    responsibilities: [
      'Build the event management dashboard',
      'Implement crew coordination features',
    ],
    image: {
      src: '/chi-backstage-mockup.webp',
      alt: 'CHI Backstage event management platform',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-contain',
      withMixBlend: true,
    },
  },
];

export const GDISProjects: Array<ProjectWithImage> = [
  {
    name: 'ProLogs',
    href: '',
    date: { dateFrom: 'Dec 2021', dateTo: 'Present' },
    description: `A ticketing software MVP for PT. TPK Koja (a container terminal company) to manage daily operations of container handling.`,
    technologyUsed: ['React', 'TailwindCSS'],
    responsibilities: ['Single handedly build the MVP in less than a month.'],
    image: {
      src: '/prologs-mockup.webp',
      alt: 'Showcasing Marketwurks app dashboard look.',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-contain',
      withMixBlend: true,
    },
  },
  {
    name: 'ProCost',
    href: 'https://gdis.procost.gdis-world.com/',
    date: { dateFrom: 'Feb 2020', dateTo: 'Nov 2021' },
    description: `Budget management system designed specifically for construction companies.`,
    technologyUsed: ['React', 'Apollo Client', 'GraphQL'],
    responsibilities: [
      'Architectural design (decide the stack to use)',
      'In charge of the frontend development',
    ],
    challenges: [
      'Initially, the deadline was too short (several months)',
      'Too many features with too few engineers (only 2 -- that includes me)',
    ],
    image: {
      src: '/procost-mockup.webp',
      alt: 'Showcasing Marketwurks app dashboard look.',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-contain',
      withMixBlend: true,
    },
  },
];

export const KodefoxProjects: Array<ProjectWithImage> = [
  {
    name: 'Vospay',
    href: 'https://vospay.co.id/',
    date: { dateFrom: 'Feb 2018', dateTo: 'Jul 2018' },
    description: `Vospay is looking to revolutionize the traditional multifinance industry and expand its market reach. One of the goals is to facilitate online transactions with multifinance platforms. Vospay is bridging multifinance customers with a large number of Indonesia's e-commerce platforms.`,
    technologyUsed: ['React', 'Node.js (with AdonisJS)', 'PostgreSQL'],
    responsibilities: [
      'Build dashboard',
      'Developed account registration & activation (for an in-depth look of what the UI looks like, please visit: https://www.sixtytwo.co/works/vospay)',
    ],
    image: {
      src: '/vospay-mockup.webp',
      alt: 'Showcasing Marketwurks app dashboard look.',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-contain',
      withMixBlend: true,
    },
  },
  {
    name: 'Zumi',
    href: 'https://www.zumiapp.com',
    date: { dateFrom: 'Aug 2017', dateTo: 'Jan 2018' },
    description:
      'Zumi is a parent-teacher communication app that disrupt the traditional Whatsapp based communication.',
    technologyUsed: ['React Native', 'Node.js', 'MongoDB'],
    responsibilities: [
      'Build some of the frontend pages, including signup flow, bulletins, class news, and reports.',
      'Build the backend using Node.js and MongoDB',
    ],
    image: {
      src: '/zumi-mockup.webp',
      alt: 'Showcasing Zumi app mockups.',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-contain',
      withMixBlend: true,
    },
  },
  {
    name: 'Marketwurks',
    href: 'https://www.marketwurks.com',
    date: { dateFrom: 'Feb 2017', dateTo: 'Aug 2017' },
    description:
      'Marketwurks allows you to easily and affordably manage your market.',
    technologyUsed: ['React', 'Node.js'],
    responsibilities: [
      'Build new features such as adding drag & drop feature to forms, new form types, labelling, etc.',
      'Maintain application by fixing regression and bugs.',
    ],
    image: {
      src: '/marketwurks-dashboard.webp',
      alt: 'Showcasing Marketwurks app dashboard look.',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-cover',
      withMixBlend: true,
    },
  },
  {
    name: 'Karsa',
    href: '',
    date: { dateFrom: 'Oct 2016', dateTo: 'Jan 2017' },
    description:
      'Karsa is an app designed for farmers. You can browse news related to crops, check the current weather, save catalogs of your own plant, have conversations in forums, sell and buy products related to farming, etc.',
    technologyUsed: ['React Native'],
    responsibilities: [
      'Revamp the app from ground up using new technology but with the same design.',
    ],
    image: {
      src: '/karsa-mockup.webp',
      alt: 'Showcasing Karsa app mockup look.',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-cover',
      withMixBlend: true,
    },
  },
];

export const KodefoxProjectsWithoutImage = [
  {
    name: 'Vision UI',
    href: '',
    date: { dateFrom: 'Mar 2019', dateTo: 'Dec 2019' },
    description: `It was designed as an in-house framework for clients to build
      applications without needing to code (no-code tool). The idea
      was to have a Drag-and-Drop GUI that generates a JSON schema
      that will be consumed by an executable. That executable then
      generates a cross-platform React app. We managed to generate the
      app just by using the JSON schema, but we didn&apos;t proceed
      with building the GUI.`,
    technologyUsed: ['React', 'React Native', 'Expo'],
    responsibilities: [
      'Help build the spec',
      'Help build the executables that consumes the JSON schema',
    ],
  },
  {
    name: 'ElitePro',
    href: '',
    date: { dateFrom: 'Jul 2018', dateTo: 'Dec 2018' },
    description: `A link rotator built for digital marketers. You generate a link that will be distributed to your marketplace. If a customer clicks on the link, they will be redirected to a target destination of your choice (most likely to be customer service/sales). The app needs to be able to rotate the link intelligently.`,
    technologyUsed: ['React', 'Node.js', 'MongoDB'],
    responsibilities: ['Build backend', 'Build frontend'],
  },
];

export const OtherProjectsWithoutImage = [
  {
    name: 'TipTip',
    href: 'tiptip.id',
    date: { dateFrom: 'Oct 2022', dateTo: 'Apr 2025' },
    description: `TipTip is the platform of choice for content creators to engage their audience and monetize their interactions. As the creator economy grows across Southeast Asia, TipTip aims to accelerate creators' income-earning opportunities by introducing innovative ways for creators to engage directly with their supporters through interactive video sessions. The company also provides native monetization features, such as on-platform tipping, as well as local KYC & payment integration to help creators earn more income.`,
    technologyUsed: ['Next.js', 'Material UI', 'Styled Component'],
    responsibilities: [
      'Maintain and build features related to the content pod',
    ],
  },
  {
    name: 'Phantom Network',
    href: 'phantom.sh',
    date: { dateFrom: 'Apr 2022', dateTo: 'Oct 2022' },
    description: `PXN builds out a network of utilities that will let you thrive within the web3 environment, unified into a single platform. This includes a web- based chat app, grey market, job board, stacking, and more.`,
    technologyUsed: ['Preact', 'Next.js', 'WebSocket', 'TailwindCSS'],
    responsibilities: [
      'Help maintain and launch alpha and beta versions of the app.',
      'Help build the chat system, inbox system, and grey market.',
    ],
  },
];
