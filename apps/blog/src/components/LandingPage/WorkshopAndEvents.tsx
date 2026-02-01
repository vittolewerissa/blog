export default function WorkshopAndEvents() {
  return (
    <div id='workshops' className='py-12 sm:pb-4 px-4 sm:px-8 lg:pt-0 lg:pb-20'>
      <div className='relative max-w-lg mx-auto lg:max-w-5xl'>
        <div className='mb-12'>
          <h2 className='text-2xl tracking-tight font-extrabold font-display text-white sm:text-3xl mb-8'>
            Workshop & Events
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl'>
            Sharing knowledge and engaging with the community through workshops
            and conferences.
          </p>
        </div>

        <div className='flex flex-col gap-8'>
          <div className='group relative flex flex-col lg:flex-row bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/80 transition-colors transition-shadow duration-300 ring-1 ring-white/10 hover:ring-sky-500/50 hover:shadow-lg hover:shadow-sky-900/20'>
            <div className='relative w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden bg-gray-800'>
              <img
                src='/bptn-workshop.webp'
                alt='BTPN and Jenius team workshop'
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </div>
            <div className='flex-1 p-8 flex flex-col justify-center'>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='px-2.5 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-md border border-white/5'>
                  Full Week Workshop
                </span>
              </div>

              <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors'>
                React Workshop for BTPN & Jenius Team
              </h3>

              <p className='text-gray-400 text-base leading-relaxed mb-6'>
                Together with 2 of my colleagues, I delivered an intensive full
                week React workshop for the development teams at{' '}
                <a
                  href='https://www.btpnsyariah.com/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-sky-400 hover:text-sky-300 transition-colors'
                >
                  BTPN
                </a>{' '}
                and{' '}
                <a
                  href='https://www.jenius.com/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-sky-400 hover:text-sky-300 transition-colors'
                >
                  Jenius
                </a>
                . The training covered fundamental React concepts, state
                management patterns, and hands-on project development with
                practical coding exercises.
              </p>

              <div className='flex items-center text-sm font-medium text-gray-500'>
                <svg
                  className='w-4 h-4 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  />
                </svg>
                Activities at KodeFox
              </div>
            </div>
          </div>

          <div className='group relative flex flex-col lg:flex-row bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/80 transition-colors transition-shadow duration-300 ring-1 ring-white/10 hover:ring-sky-500/50 hover:shadow-lg hover:shadow-sky-900/20'>
            <div className='relative w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden bg-gray-800'>
              <img
                src='/tech-in-asia-conference.webp'
                alt='Zumi x KodeFox in Tech in Asia Conference'
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </div>
            <div className='flex-1 p-8 flex flex-col justify-center'>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='px-2.5 py-1 text-xs font-medium font-mono bg-white/5 text-gray-300 rounded-md border border-white/5'>
                  Conference
                </span>
              </div>

              <h3 className='text-2xl font-bold font-display text-white mb-4 group-hover:text-sky-400 transition-colors'>
                Tech in Asia Conference
              </h3>

              <p className='text-gray-400 text-base leading-relaxed mb-6'>
                Alongside my colleagues from KodeFox, I represented Zumi at the{' '}
                <a
                  href='https://conference.techinasia.com/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-sky-400 hover:text-sky-300 transition-colors'
                >
                  Tech in Asia Conference
                </a>
                . We showcased our mobile application to industry leaders,
                investors, and fellow developers, demonstrating the app&apos;s
                features and gaining valuable exposure in Southeast Asia&apos;s
                tech ecosystem.
              </p>

              <div className='flex items-center text-sm font-medium text-gray-500'>
                <svg
                  className='w-4 h-4 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  />
                </svg>
                Activities at KodeFox
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
