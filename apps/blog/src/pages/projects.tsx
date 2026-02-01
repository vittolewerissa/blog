import {
  KodefoxProjectsWithoutImage,
  KodefoxProjects,
  GDISProjects,
  CHIProjects,
  OtherProjectsWithoutImage,
} from '../components/Work/data';

type TableProject = {
  year: string;
  name: string;
  madeAt: string;
  builtWith: string[];
  link?: string;
  href?: string;
};

export default function Projects() {
  // Transform work data into table format
  const allProjects: TableProject[] = [
    ...CHIProjects.map((project) => ({
      year: project.date.dateFrom.split(' ')[1] || project.date.dateFrom,
      name: project.name,
      madeAt: 'CHI',
      builtWith: project.technologyUsed,
      link: project.href ? extractDomain(project.href) : undefined,
      href: project.href || undefined,
    })),
    ...GDISProjects.map((project) => ({
      year: project.date.dateFrom.split(' ')[1] || project.date.dateFrom,
      name: project.name,
      madeAt: 'GDIS',
      builtWith: project.technologyUsed,
      link: project.href ? extractDomain(project.href) : undefined,
      href: project.href || undefined,
    })),
    ...KodefoxProjects.map((project) => ({
      year: project.date.dateFrom.split(' ')[1] || project.date.dateFrom,
      name: project.name,
      madeAt: 'KodeFox',
      builtWith: project.technologyUsed,
      link: project.href ? extractDomain(project.href) : undefined,
      href: project.href || undefined,
    })),
    ...KodefoxProjectsWithoutImage.map((project) => ({
      year: project.date.dateFrom.split(' ')[1] || project.date.dateFrom,
      name: project.name,
      madeAt: 'KodeFox',
      builtWith: project.technologyUsed,
      link: project.href ? extractDomain(project.href) : undefined,
      href: project.href || undefined,
    })),
    ...OtherProjectsWithoutImage.map((project) => ({
      year: project.date.dateFrom.split(' ')[1] || project.date.dateFrom,
      name: project.name,
      madeAt: project.name,
      builtWith: project.technologyUsed,
      link: project.href ? extractDomain(project.href) : undefined,
      href: project.href || undefined,
    })),
  ].sort((a, b) => parseInt(b.year) - parseInt(a.year)); // Sort by year descending

  return (
    <div id='main-content' className='relative'>
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 65% 30%, rgba(139, 69, 87, 0.08) 0%, transparent 70%)',
        }}
      />

      <section className='relative pb-12 lg:pb-16'>
        <div className='mt-12 px-4 sm:px-8 sm:mt-20 lg:mt-24'>
          <div className='mx-auto max-w-lg lg:max-w-5xl'>
            <span className='inline-flex items-center gap-2 px-3 py-1.5 bg-warm-white rounded-full border border-sand text-[11px] font-mono text-stone tracking-[0.2em] uppercase w-fit'>
              <span className='h-1.5 w-1.5 rounded-full bg-terracotta' />
              Archive
            </span>

            <div className='mt-6'>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal font-display text-espresso text-balance'>
                All Projects
              </h1>
              <p className='text-walnut mt-4 text-base sm:text-lg leading-relaxed max-w-2xl'>
                A comprehensive list of projects I&apos;ve worked on, from web
                and mobile applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='max-w-lg mx-auto lg:max-w-5xl px-4 sm:px-8'>
        <div className='border-t border-sand' />
      </div>

      <section className='py-14 lg:py-20 px-4 sm:px-8'>
        <div className='max-w-lg mx-auto lg:max-w-5xl'>
          <div className='overflow-x-auto rounded-2xl border border-sand/80 bg-cream'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='border-b border-sand/70 bg-warm-white/80'>
                  <th className='py-4 pr-6 pl-6 text-espresso font-medium text-[11px] font-mono uppercase tracking-[0.2em]'>
                    Year
                  </th>
                  <th className='py-4 px-4 text-espresso font-medium text-[11px] font-mono uppercase tracking-[0.2em]'>
                    Project
                  </th>
                  <th className='py-4 px-4 text-espresso font-medium text-[11px] font-mono uppercase tracking-[0.2em] hidden md:table-cell'>
                    Made at
                  </th>
                  <th className='py-4 px-4 text-espresso font-medium text-[11px] font-mono uppercase tracking-[0.2em] hidden lg:table-cell'>
                    Built with
                  </th>
                  <th className='py-4 pl-4 pr-6 text-espresso font-medium text-[11px] font-mono uppercase tracking-[0.2em]'>
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {allProjects.map((project, index) => (
                  <tr
                    key={index}
                    className='border-b border-sand/60 hover:bg-warm-white/70 transition-colors group'
                  >
                    <td className='py-5 pr-6 pl-6 text-walnut text-sm font-mono'>
                      {project.year}
                    </td>
                    <td className='py-5 px-4 text-espresso font-semibold font-display text-lg group-hover:text-terracotta transition-colors'>
                      {project.name}
                    </td>
                    <td className='py-5 px-4 text-walnut text-sm hidden md:table-cell'>
                      {project.madeAt}
                    </td>
                    <td className='py-5 px-4 hidden lg:table-cell'>
                      <div className='flex flex-wrap gap-2'>
                        {project.builtWith.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium font-mono bg-warm-white text-walnut border border-sand/60'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className='py-5 pl-4 pr-6'>
                      {project.href && project.link ? (
                        <a
                          href={project.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-walnut hover:text-terracotta transition-colors inline-flex items-center text-sm font-medium'
                          aria-label={`Open ${project.name} (${project.link})`}
                        >
                          {project.link}
                          <svg
                            className='ml-2 w-3 h-3'
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
                      ) : (
                        <span className='text-walnut/60 text-sm'>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

function extractDomain(url: string): string {
  if (!url) return '';
  try {
    const domain = new URL(url.startsWith('http') ? url : `https://${url}`)
      .hostname;
    return domain.replace('www.', '');
  } catch {
    return url;
  }
}
