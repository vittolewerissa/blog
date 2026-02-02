import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    name: 'CHI App',
    description:
      'Mobile event ticketing app for discovering events, purchasing tickets, and ordering food and drinks — all cashless with QR-based entry and in-app payments.',
    technologies: ['React Native', 'TypeScript'],
    demo: 'https://chi.app/',
    image: '/chi-app.webp',
    status: 'active',
    company: 'CHI',
    featured: true,
  },
  {
    name: 'TipTip',
    description:
      'Creator economy platform for ticketing, content, memberships, and live streaming. Serves 2M+ users across 50+ cities with concerts from Green Day, Dream Theater, and Muse.',
    technologies: ['Next.js', 'TypeScript'],
    demo: 'https://tiptip.id/',
    image: '/tiptip-mockup.webp',
    status: 'active',
    company: 'TipTip',
    featured: true,
  },
  {
    name: 'CHI Backstage',
    description:
      'Back-office platform for event organizers to manage crew, tickets, vendors, and real-time event analytics.',
    technologies: ['React.js', 'TypeScript'],
    demo: 'https://chi.app/',
    image: '/chi-backstage-mockup.webp',
    status: 'active',
    company: 'CHI',
  },
  {
    name: 'TipTip Hub',
    description:
      'Platform for creators to manage events, digital products, and an affiliate system for audience growth.',
    technologies: ['Next.js', 'TypeScript'],
    demo: 'https://tiptip.id/',
    image: '/tiptip-hub-mockup.webp',
    status: 'active',
    company: 'TipTip',
  },
  {
    name: 'ProCost',
    description:
      'Budget management system for construction and manufacturing companies — cost tracking, allocation, and financial reporting.',
    technologies: ['React.js', 'GraphQL'],
    image: '/procost-mockup.webp',
    status: 'archived',
    company: 'GDIS',
  },
  {
    name: 'Vospay',
    description:
      "Fintech platform bridging multifinance customers with Indonesia's e-commerce ecosystem for seamless online transactions.",
    technologies: ['React.js'],
    demo: 'https://www.linkedin.com/company/vostropay-paramarta-nusantara/',
    publication:
      'https://swa.co.id/read/343209/vospay-hadirkan-opsi-pembiayaan-dari-berbagai-perusahaan',
    design: 'https://www.sixtytwo.co/works/vospay',
    image: '/vospay-mockup.webp',
    status: 'archived',
    company: 'KodeFox',
  },
];

function ProjectCard({
  project,
  large,
}: {
  project: (typeof projects)[number];
  large?: boolean;
}) {
  const [imageError, setImageError] = useState(false);
  const imageSizes = large
    ? '(min-width: 1024px) 50vw, 100vw'
    : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw';

  return (
    <article
      className={`group relative flex flex-col rounded-2xl overflow-hidden bg-warm-white transition-colors transition-shadow duration-300 ring-1 ring-sand hover:ring-terracotta/20 focus-within:ring-terracotta/30 focus-within:ring-2 ${
        large
          ? 'lg:flex-row hover:shadow-md hover:shadow-espresso/5'
          : 'hover:shadow-sm hover:shadow-espresso/5'
      }`}
    >
      {/* Project Image */}
      <div
        className={`relative overflow-hidden bg-sand ${
          large
            ? 'w-full lg:w-1/2 h-56 lg:h-auto lg:min-h-[24rem]'
            : 'w-full aspect-[16/10]'
        }`}
      >
        {imageError ? (
          <div className='w-full h-full bg-sand flex items-center justify-center text-walnut text-sm font-medium'>
            {project.name}
          </div>
        ) : (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            layout='fill'
            objectFit='cover'
            className='transition-transform duration-500 group-hover:scale-[1.02]'
            sizes={imageSizes}
            onError={() => setImageError(true)}
          />
        )}

        <div className='absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
      </div>

      {/* Project Info */}
      <div
        className={`flex-1 flex flex-col ${
          large ? 'p-6 lg:p-10' : 'p-5'
        }`}
      >
        <div className='flex items-start justify-between mb-2 gap-3'>
          <h3
            className={`font-bold font-display text-espresso text-balance group-hover:text-terracotta transition-colors ${
              large ? 'text-[26px] lg:text-[32px]' : 'text-[19px]'
            }`}
          >
            {project.name}
          </h3>
          <span className='text-[11px] font-mono text-walnut/70 uppercase tracking-[0.12em] shrink-0'>
            {project.company}
          </span>
        </div>

        <p
          className={`leading-relaxed ${
            large
              ? 'text-walnut text-base leading-[1.7] mb-6'
              : 'text-walnut/90 text-[15px] line-clamp-3 mb-4'
          }`}
        >
          {project.description}
        </p>

        <div className='mt-auto'>
          {project.technologies.length > 0 && (
            <div className='flex flex-wrap gap-1.5 mb-3 mt-1'>
              {project.technologies.slice(0, large ? 5 : 4).map((tech) => (
                <span
                  key={tech}
                  className='px-2 py-0.5 text-[12px] font-medium font-mono bg-cream text-stone rounded border border-sand/60'
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className='pt-3 border-t border-sand/60'>
            <div className='flex items-center justify-between gap-3'>
              <span className='text-[11px] font-mono text-walnut/70 uppercase tracking-[0.12em] shrink-0'>
                {project.status}
              </span>

              <div className='flex items-center gap-2'>
                {project.publication && (
                  <a
                    href={project.publication}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex min-h-11 items-center gap-1.5 px-3 py-1 text-[12px] font-medium text-walnut bg-cream rounded-md border border-sand hover:border-terracotta/30 hover:text-terracotta transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white'
                    aria-label={`Read article about ${project.name}`}
                  >
                    <svg
                      className='w-3 h-3'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
                      />
                    </svg>
                    Read
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex min-h-11 items-center gap-1.5 px-3 py-1 text-[12px] font-medium text-walnut bg-cream rounded-md border border-sand hover:border-terracotta/30 hover:text-terracotta transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white'
                    aria-label={`Visit ${project.name} website`}
                  >
                    Visit
                    <svg
                      className='w-3 h-3'
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
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id='projects' className='relative' aria-labelledby='featured-projects-title'>
      {/* Section divider */}
      <div className='max-w-lg mx-auto lg:max-w-5xl px-4 sm:px-8'>
        <div className='border-t border-sand' />
      </div>

      <div className='py-20 lg:py-28 px-4 sm:px-8'>
        <div className='relative max-w-lg mx-auto lg:max-w-5xl'>
          <div className='mb-10 lg:mb-12'>
            <h2
              id='featured-projects-title'
              className='text-3xl sm:text-4xl lg:text-5xl tracking-tight font-normal font-display text-espresso text-balance'
            >
              Featured Projects
            </h2>
          </div>

          {/* Featured projects — larger, side-by-side layout */}
          <div className='grid gap-8 mb-12'>
            {featured.map((project) => (
              <ProjectCard key={project.name} project={project} large />
            ))}
          </div>

          {/* Remaining projects — smaller grid */}
          <div className='mb-5'>
            <h3 className='text-xl sm:text-2xl font-display text-espresso'>
              More Projects
            </h3>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-2'>
            {rest.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
