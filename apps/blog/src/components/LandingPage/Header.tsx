import Image from 'next/image';
import Navigation from '../../layout/Navigation';

export default function Header() {
  return (
    <div className='relative'>
      {/* Soft radial warmth behind hero */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 65% 40%, rgba(139, 69, 87, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className='relative pb-20 lg:pb-32'>
        <Navigation />
        <main
          id='main-content'
          className='mt-12 px-4 sm:px-8 sm:mt-24 lg:mt-32'
        >
          <div className='mx-auto max-w-lg lg:max-w-5xl flex flex-col lg:flex-row lg:items-center'>
            <div className='order-last lg:order-first max-w-lg'>
              <h1 className='text-5xl sm:text-6xl lg:text-8xl tracking-tight font-normal font-display text-espresso text-balance'>
                <span className='block leading-[1.05] slide-in-bottom'>
                  <span className='wave mr-2 inline-block align-[-6%] text-[0.85em]'>👋🏼</span> Hi, I&apos;m{' '}
                  <span className='text-terracotta italic font-medium'>Vitto</span>.
                </span>
              </h1>
              <p className='text-walnut/90 mt-6 md:mt-8 text-base sm:text-lg leading-relaxed max-w-lg slide-in-bottom-2'>
                Full-stack engineer building products at scale — from
                event platforms serving millions of users to enterprise
                apps across fintech and construction.
              </p>

              {/* Location + socials on one row */}
              <div className='flex flex-wrap items-center gap-3 mt-8 md:mt-10 slide-in-bottom-2'>
                <div className='inline-flex items-center px-3 py-1.5 bg-warm-white rounded-full border border-sand'>
                  <svg
                    className='w-3.5 h-3.5 text-terracotta mr-1.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  <span className='text-walnut text-[15px] font-medium'>
                    Bali, Indonesia
                  </span>
                </div>

                <div className='w-px h-5 bg-sand' />

                <div className='flex items-center gap-1.5'>
                  <a
                    href='https://github.com/vittolewerissa'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 text-stone hover:text-espresso hover:bg-sand/50 rounded-lg transition-colors duration-200'
                    aria-label='GitHub'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                  <a
                    href='https://linkedin.com/in/rvlewerissa'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 text-stone hover:text-espresso hover:bg-sand/50 rounded-lg transition-colors duration-200'
                    aria-label='LinkedIn'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                  <a
                    href='https://x.com/vittolewerissa'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 text-stone hover:text-espresso hover:bg-sand/50 rounded-lg transition-colors duration-200'
                    aria-label='Twitter'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                    </svg>
                  </a>
                  <a
                    href='mailto:rvlewerissa@gmail.com'
                    className='p-2 text-stone hover:text-espresso hover:bg-sand/50 rounded-lg transition-colors duration-200'
                    aria-label='Email'
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
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className='relative mt-6 mb-8 ml-4 sm:mr-8 self-start lg:mt-0 md:ml-12 md:mt-0 shrink-0 puff-in-center lg:-mr-8'>
              <div className='w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[22rem] lg:h-[22rem] relative rounded-2xl overflow-hidden shadow-lg shadow-espresso/10'>
                <Image
                  src='/profile-picture.jpg'
                  alt='Vitto Lewerissa'
                  className='object-cover'
                  width={352}
                  height={352}
                  priority
                  sizes='(min-width: 1024px) 352px, (min-width: 768px) 224px, 144px'
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
