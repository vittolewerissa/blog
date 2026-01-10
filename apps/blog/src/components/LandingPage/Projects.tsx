import Link from 'next/link';

const projects = [
  {
    name: 'CHI App',
    description:
      'A mobile event ticketing platform where users can discover events, purchase tickets, and order food and drinks. Features a seamless cashless experience with QR-based entry and in-app ordering, plus crew management tools for event staff.',
    technologies: ['React Native', 'TypeScript'],
    demo: 'https://chi.app/',
    image: '/chi-app.webp',
    status: 'active',
    company: 'CHI',
  },
  {
    name: 'CHI Backstage',
    description:
      'The comprehensive platform for event organizers to create and manage events end-to-end. Features include crew coordination and scheduling, product management for merchandise and concessions, real-time event operations, and detailed analytics to streamline the entire event lifecycle.',
    technologies: ['React.js', 'TypeScript'],
    demo: 'https://chi.app/',
    image: '/chi-backstage-mockup.webp',
    status: 'active',
    company: 'CHI',
  },
  {
    name: 'CHI Tickets',
    description:
      'The web version of CHI that allows users to browse events and purchase tickets directly from their browser. Provides a streamlined checkout experience for event-goers who prefer web over mobile.',
    technologies: ['React.js', 'TypeScript'],
    demo: 'https://chi.app/',
    image: '/chi-tickets-mockup.webp',
    status: 'active',
    company: 'CHI',
  },
  {
    name: 'TipTip',
    description:
      'An event ticketing platform where users can discover, buy, and sell tickets for concerts, festivals, and live events across Indonesia. Also features community creation tools, live streaming capabilities, and a marketplace for digital products.',
    technologies: ['Next.js', 'TypeScript'],
    demo: 'https://tiptip.id/',
    image: '/tiptip-mockup.webp',
    status: 'active',
    company: 'TipTip',
  },
  {
    name: 'TipTip Hub',
    description:
      'A platform for creators to manage their events and digital products. Also enables supporters to promote creator products through an affiliate system, helping creators grow their audience and revenue.',
    technologies: ['Next.js', 'TypeScript'],
    demo: 'https://tiptip.id/',
    image: '/tiptip-hub-mockup.webp',
    status: 'active',
    company: 'TipTip',
  },
  {
    name: 'ProCost',
    description:
      'A budget management system designed specifically for construction companies. Features project cost tracking, budget allocation, expense monitoring, and financial reporting to help construction firms manage their finances effectively.',
    technologies: ['React.js', 'GraphQL'],
    image: '/procost-mockup.webp',
    status: 'archived',
    company: 'GDIS',
  },
  {
    name: 'Vospay',
    description:
      "Vospay is looking to revolutionize the traditional multifinance industry and expand its market reach. One of the goals is to facilitate online transactions with multifinance platforms. Vospay is bridging multifinance customers with a large number of Indonesia's e-commerce platforms.",
    technologies: ['React.js'],
    demo: 'https://www.linkedin.com/company/vostropay-paramarta-nusantara/',
    publication:
      'https://swa.co.id/read/343209/vospay-hadirkan-opsi-pembiayaan-dari-berbagai-perusahaan',
    design: 'https://www.sixtytwo.co/works/vospay',
    image: '/vospay-mockup.webp',
    status: 'archived',
  },

  {
    name: 'Zumi',
    description:
      'Zumi is a parent-teacher communication app that disrupts traditional WhatsApp-based communication. Built frontend pages including signup flow, bulletins, class news, and reports, plus developed the backend using Node.js and MongoDB for seamless parent-teacher interactions.',
    technologies: ['React Native'],
    demo: 'https://zumiapp.com/',
    image: '/zumi-mockup.webp',
    status: 'archived',
  },
  {
    name: 'Marketwurks',
    description:
      'Marketwurks allows you to easily and affordably manage your market. Enhanced the platform with new features including drag & drop functionality for forms, new form types, labelling system, and maintained the application by fixing regressions and bugs.',
    technologies: ['React.js'],
    demo: 'https://www.marketwurks.com',
    demoVideo: 'https://vimeo.com/marketwurks',
    image: '/marketwurks-dashboard.webp',
    status: 'active',
  },
];

export default function Projects() {
  return (
    <div id='projects' className='py-12 sm:pb-4 px-4 sm:px-8 lg:pt-0 lg:pb-20'>
      <div className='relative max-w-lg mx-auto lg:max-w-5xl'>
        <div className='mb-12'>
          <h2 className='text-2xl tracking-tight font-extrabold font-display text-white sm:text-3xl mb-8'>
            Featured Projects
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl'>
            A collection of projects I&apos;ve worked on, ranging from web
            applications to mobile apps.
          </p>
        </div>

        <div className='grid gap-8 lg:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project, index) => (
            <div
              key={project.name}
              className='group relative flex flex-col bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-300 ring-1 ring-white/10 hover:ring-white/20'
            >
              {/* Project Image */}
              <div className='relative w-full h-56 overflow-hidden bg-gray-800'>
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div
                  className='w-full h-full bg-gray-800 flex items-center justify-center text-white text-sm font-medium'
                  style={{ display: 'none' }}
                >
                  {project.name}
                </div>

                {/* Overlay with status */}
                <div className='absolute top-3 right-3 flex gap-2'>
                  {project.status === 'archived' && (
                    <span className='px-2.5 py-1 text-xs font-medium bg-black/60 backdrop-blur-md text-gray-300 rounded-full border border-white/10'>
                      Archived
                    </span>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className='flex-1 p-6 flex flex-col'>
                <div className='flex items-center justify-between mb-3'>
                  <h3 className='text-xl font-bold font-display text-white group-hover:text-sky-400 transition-colors'>
                    {project.name}
                  </h3>
                  <div className='flex gap-2'>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all'
                        title='Visit Website'
                      >
                        <svg
                          className='w-5 h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                          />
                        </svg>
                      </a>
                    )}
                    {project.demoVideo && (
                      <a
                        href={project.demoVideo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all'
                        title='Watch Demo'
                      >
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M8 5v14l11-7z' />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <p className='text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3'>
                  {project.description}
                </p>

                <div className='mt-auto'>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={tech}
                        className='px-2.5 py-1 text-xs font-medium font-mono bg-white/5 text-gray-300 rounded-md border border-white/5'
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className='px-2.5 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-md border border-white/5'>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className='flex items-center justify-between pt-4 border-t border-white/5'>
                    <span className='text-xs font-medium text-gray-500'>
                      {project.company === 'Independent'
                        ? 'Personal Project'
                        : project.company || 'KodeFox'}
                    </span>

                    <div className='flex gap-3'>
                      {project.publication && (
                        <a
                          href={project.publication}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-xs font-medium text-gray-400 hover:text-white transition-colors'
                        >
                          Read Article
                        </a>
                      )}
                      {project.design && (
                        <a
                          href={project.design}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-xs font-medium text-gray-400 hover:text-white transition-colors'
                        >
                          View Design
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-left'>
          <Link href='/projects'>
            <a className='inline-flex items-center px-6 py-3 bg-white/5 text-white hover:bg-white/10 transition-all duration-300 font-medium rounded-full border border-white/10 hover:border-white/20 group'>
              Explore All Projects
              <svg
                className='ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
