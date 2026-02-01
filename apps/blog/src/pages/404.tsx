import Link from 'next/link';

export default function Custom404() {
  return (
    <div className='relative overflow-hidden'>
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 65% 30%, rgba(139, 69, 87, 0.08) 0%, transparent 70%)',
        }}
      />

      <main
        id='main-content'
        className='relative mt-10 px-4 sm:px-8 sm:mt-16 lg:mt-20'
      >
        <div className='mx-auto max-w-lg lg:max-w-5xl'>
          <div className='mt-6 grid gap-8 lg:grid-cols-[220px,1fr] lg:items-start'>
            <div className='lg:pt-1 lg:pr-4 text-right'>
              <p className='font-display text-[72px] sm:text-[96px] lg:text-[120px] leading-none text-espresso/15'>
                404
              </p>
            </div>

            <div className='lg:pt-2'>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal font-display text-espresso text-balance'>
                Page not found
              </h1>
              <p className='text-walnut/90 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl'>
                Sorry, the page you&apos;re looking for doesn&apos;t exist. It
                may have moved, been removed, or the URL is incorrect.
              </p>

              <div className='mt-8 flex flex-wrap gap-3'>
                <Link href='/' passHref>
                  <a className='inline-flex items-center px-6 py-3 bg-espresso text-cream hover:bg-walnut transition-colors duration-300 font-medium rounded-full group text-sm tracking-[0.08em]'>
                    Go Home
                    <svg
                      className='ml-2.5 w-4 h-4 transform group-hover:translate-x-1 transition-transform'
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

                <Link href='/projects' passHref>
                  <a className='inline-flex items-center px-6 py-3 bg-warm-white text-walnut hover:text-espresso hover:bg-cream transition-colors duration-300 font-medium rounded-full border border-sand text-sm tracking-[0.08em]'>
                    View Projects
                  </a>
                </Link>
              </div>

              <p className='mt-6 text-[13px] text-walnut/70'>
                Try the{' '}
                <Link href='/' passHref>
                  <a className='text-terracotta hover:text-terracotta-light transition-colors'>
                    homepage
                  </a>
                </Link>{' '}
                or browse the{' '}
                <Link href='/projects' passHref>
                  <a className='text-terracotta hover:text-terracotta-light transition-colors'>
                    projects
                  </a>
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
