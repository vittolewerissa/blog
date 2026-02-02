import Link from 'next/link';

export default function WritingsPage() {
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
              <h1 className='text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal font-display text-espresso text-balance'>
                Writings
              </h1>
              <p className='text-walnut mt-4 text-base sm:text-lg leading-relaxed max-w-2xl'>
                Essays on frontend engineering, product craft, and lessons from
                building software.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className='max-w-lg mx-auto lg:max-w-5xl px-4 sm:px-8'>
        <div className='border-t border-sand' />
      </div>

      <section className='py-14 lg:py-20 px-4 sm:px-8'>
        <div className='max-w-lg mx-auto lg:max-w-5xl'>
          <div className='rounded-2xl border border-sand/80 bg-warm-white p-6 sm:p-8 lg:p-10'>
            <p className='text-[11px] font-mono text-walnut/70 uppercase tracking-[0.16em]'>
              No posts yet
            </p>
            <h2 className='mt-4 text-2xl sm:text-3xl tracking-tight font-normal font-display text-espresso text-balance'>
              First entries are on the way.
            </h2>
            <p className='mt-3 text-walnut leading-relaxed max-w-2xl'>
              I&apos;m preparing the first articles. Check back soon.
            </p>

            <div className='mt-8'>
              <Link href='/projects' passHref>
                <a className='inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-espresso transition-colors hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white rounded-sm'>
                  Explore projects for now
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
        </div>
      </section>
    </main>
  );
}
