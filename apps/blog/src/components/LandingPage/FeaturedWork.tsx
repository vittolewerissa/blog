import Link from 'next/link';

const workExperience = [
  {
    id: 'chi',
    period: '2025 — Present',
    title: 'Senior Full Stack Engineer',
    company: 'CHI',
    href: 'https://chi.app/',
    logo: '/chi-logo.webp',
    logoBg: 'bg-[#000000]',
    logoPadding: 'p-1.5',
    logoFit: 'object-contain',
    description: `CHI is a Seed-funded (€1.6M raised) AI-powered event management platform for cashless payments, ticketing, and operational intelligence across 3 web apps and 2 mobile apps.`,
    technologies: [
      'React',
      'React Native',
      'TypeScript',
      'Node.js',
      'NestJS',
      'Prisma',
    ],
    current: true,
  },
  {
    id: 'tiptip',
    period: '2022 — 2025',
    title: 'Senior Front End Engineer',
    company: 'TipTip',
    href: 'https://www.tiptip.id/',
    logo: '/tiptip-logo.webp',
    logoBg: 'bg-transparent',
    logoPadding: 'p-0',
    logoFit: 'object-cover rounded-lg',
    description:
      'TipTip is a Series A funded ($25M total raised) creator economy platform empowering creators in Southeast Asia to monetize through digital content, memberships, and event ticketing.',
    technologies: ['Next.js', 'TypeScript'],
  },
  {
    id: 'phantom-network',
    period: '2022',
    title: 'Senior Front End Engineer',
    company: 'Phantom Network',
    href: 'https://www.phantom.sh/',
    logo: '/pxn-logo.webp',
    logoBg: 'bg-transparent',
    logoPadding: 'p-0',
    logoFit: 'object-cover rounded-lg',
    description:
      'Phantom Network is a New Zealand-based Web3 brand behind the top-ranking global NFT collection ($6M primary, $70M+ secondary sales in two weeks).',
    technologies: ['Next.js', 'TypeScript'],
  },
  {
    id: 'gdis',
    period: '2019 — 2022',
    title: 'Lead Front End Engineer',
    company: 'GDIS',
    href: 'https://www.linkedin.com/company/gdis-inovasi-indonesia/',
    logo: '/gdis-logo.webp',
    logoBg: 'bg-white',
    logoPadding: 'p-1.5',
    logoFit: 'object-contain',
    description:
      'GDIS is a Jakarta-based corporate technology firm specializing in enterprise-grade software solutions for the construction and manufacturing industries.',
    technologies: ['React.js', 'TypeScript', 'GraphQL', 'Apollo'],
  },
  {
    id: 'kodefox',
    period: '2016 — 2019',
    title: 'Software Engineer',
    company: 'KodeFox',
    href: 'https://kodefox.com/',
    logo: '/kodefox-logo.webp',
    logoBg: 'bg-white',
    logoPadding: 'p-1',
    logoFit: 'object-contain',
    description:
      'KodeFox is a Jakarta-based software house founded by a former Meta engineer (and now a YC and Google alumnus), specializes in delivering apps for early startups and major enterprise clients (Prudential, Sampoerna, Sinarmas, etc).',
    technologies: ['React.js', 'React Native', 'Node.js'],
  },
];

export default function RecentWork() {
  return (
    <div id='work' className='relative'>
      {/* Section divider */}
      <div className='max-w-lg mx-auto lg:max-w-5xl px-4 sm:px-8'>
        <div className='border-t border-sand' />
      </div>

      <div className='py-20 lg:py-28 px-4 sm:px-8'>
        <div className='relative max-w-lg mx-auto lg:max-w-5xl'>
          {/* Section header */}
          <div className='flex items-baseline justify-between mb-14'>
            <h2 className='text-3xl sm:text-4xl tracking-tight font-normal font-display text-espresso text-balance'>
              Work Experience
            </h2>
            <span className='hidden sm:block text-[12px] text-walnut/70 font-mono tabular-nums tracking-[0.12em] uppercase'>
              8+ years
            </span>
          </div>

          {/* Timeline */}
          <div className='relative'>
            {/* Vertical line */}
            <div className='absolute left-[19px] top-2 bottom-2 w-px bg-sand/60 hidden lg:block' />

            <div className='space-y-0'>
              {workExperience.map((job, index) => (
                <div key={job.company} className='group relative'>
                  {/* Entry row */}
                  <div
                    className={`relative flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-0 py-7 lg:py-8 rounded-xl transition-colors duration-200 ${
                      index < workExperience.length - 1
                        ? 'border-b border-sand/60 lg:border-0'
                        : ''
                    } ${
                      job.current
                        ? 'lg:-mx-6 lg:px-6 bg-warm-white/60 lg:bg-warm-white/80 rounded-2xl border-0 lg:border-0'
                        : 'lg:-mx-6 lg:px-6 hover:bg-warm-white/50 rounded-2xl'
                    }`}
                  >
                    {/* Left: Logo on the timeline + Period */}
                    <div className='flex items-center gap-4 lg:w-[280px] lg:flex-shrink-0'>
                      {/* Logo (sits on the timeline line) */}
                      <div
                        className={`relative z-10 w-10 h-10 rounded-xl shadow-sm flex-shrink-0 overflow-hidden ${job.logoBg} ${job.logoPadding}`}
                      >
                        <img
                          src={job.logo}
                          alt={`${job.company} logo`}
                          className={`w-full h-full ${job.logoFit}`}
                          width={40}
                          height={40}
                          loading='lazy'
                          decoding='async'
                          onError={(e) => {
                            const target = e.currentTarget;
                            const fallback =
                              target.nextElementSibling as HTMLElement;
                            target.style.display = 'none';
                            if (fallback) {
                              fallback.style.display = 'flex';
                            }
                          }}
                        />
                        <div
                          className='w-full h-full bg-stone rounded-xl flex items-center justify-center text-cream text-xs font-bold'
                          style={{ display: 'none' }}
                        >
                          {job.company.charAt(0)}
                        </div>
                      </div>

                      {/* Period + Now badge */}
                      <div className='flex items-center gap-2.5'>
                        <span className='text-[12px] text-walnut/70 font-mono uppercase tracking-[0.2em] tabular-nums'>
                          {job.period}
                        </span>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className='flex-1 min-w-0 pl-16 lg:pl-4'>
                      {/* Company + Role */}
                      <div className='mb-2'>
                        <div className='flex items-baseline gap-2 flex-wrap'>
                          <Link href={`/work/${job.id}`} passHref>
                            <a
                              className='inline-flex items-baseline gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream'
                              aria-label={`View ${job.company} case study`}
                            >
                              <h3 className='text-[20px] sm:text-[22px] font-display font-semibold text-espresso leading-tight text-balance group-hover:text-terracotta transition-colors'>
                                {job.company}
                              </h3>
                              <span className='text-sand text-sm select-none'>
                                /
                              </span>
                              <span className='text-walnut/80 text-[14px] sm:text-[15px] font-medium group-hover:text-espresso transition-colors'>
                                {job.title}
                              </span>
                            </a>
                          </Link>
                        </div>
                      </div>

                      {/* Description */}
                      <p className='text-walnut/80 text-base leading-relaxed mb-3 max-w-2xl'>
                        {job.description}
                      </p>

                      {/* Tech + Link */}
                      <div className='flex items-center gap-3 flex-wrap'>
                        <div className='flex flex-wrap gap-1.5 mt-3'>
                          {job.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className='px-2 py-0.5 text-[12px] font-mono font-medium text-walnut bg-warm-white rounded border border-sand/80'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button
                          type='button'
                          className='relative z-20 inline-flex items-center gap-1 text-[13px] text-stone/70 hover:text-terracotta transition-colors ml-auto'
                          aria-label={`Visit ${job.company} site`}
                          title={`Visit ${job.company} site`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(
                              job.href,
                              '_blank',
                              'noopener,noreferrer',
                            );
                          }}
                        >
                          <svg
                            className='w-3.5 h-3.5'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Hover arrow */}
                    <div className='relative z-20 hidden lg:flex items-center pl-4 pt-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                      <svg
                        className='w-5 h-5 text-terracotta/60'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1.5}
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
