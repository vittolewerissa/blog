import Link from 'next/link';
import Projects from '../components/LandingPage/Projects';

export default function ProjectsPage() {
  return (
    <main id='main-content' className='relative'>
      <div className='relative'>
        <div
          className='absolute inset-0 pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse 70% 45% at 65% 30%, rgba(139, 69, 87, 0.05) 0%, transparent 70%)',
          }}
        />

        <section className='relative pb-12 lg:pb-16'>
          <div className='mt-12 px-4 sm:px-8 sm:mt-20 lg:mt-24'>
            <div className='mx-auto max-w-lg lg:max-w-5xl'>
              <div className='mt-6'>
                <div>
                  <h1 className='text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal font-display text-espresso text-balance'>
                    Projects
                  </h1>
                  <p className='text-walnut mt-4 text-base sm:text-lg leading-relaxed max-w-2xl'>
                    Products I&apos;ve built or contributed to, from early
                    stage MVPs to large-scale platforms used in live events and
                    digital commerce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Projects />

      <section className='pt-8 pb-14 lg:pt-10 lg:pb-16 px-4 sm:px-8'>
        <div className='max-w-lg mx-auto lg:max-w-5xl'>
          <div className='border-t border-sand/80 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <p className='text-walnut leading-relaxed'>
              Need the complete project history?
            </p>
            <Link href='/projects/archive' passHref>
              <a className='inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-espresso transition-colors hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm'>
                View full archive
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
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
