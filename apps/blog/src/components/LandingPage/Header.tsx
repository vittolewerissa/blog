import Navigation from '../../layout/Navigation';
import { ReactIcon, NodeIcon, PythonIcon, JSIcon } from '../TechIcons';

export default function Header() {
  return (
    <div className='relative overflow-hidden'>
      <div
        className='absolute inset-0 opacity-30 animate-float [mask-image:linear-gradient(to_bottom,black_20%,transparent)]'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40h40M40 0v40' stroke='%230ea5e9' stroke-opacity='0.3' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />
      <div className='relative pb-10 lg:pb-24'>
        <Navigation />
        <main className='mt-0 px-4 sm:px-8 sm:mt-24'>
          <div className='mx-auto max-w-lg lg:max-w-5xl flex flex-col lg:flex-row lg:items-center'>
            <div className='order-last lg:order-first max-w-md'>
              <h1 className='text-4xl lg:text-6xl tracking-tight font-black text-white'>
                <span className='block leading-snug slide-in-bottom'>
                  <span className='wave mr-2'>👋🏼 </span> Hi, I&apos;m{' '}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300'>
                    Vitto
                  </span>
                  .
                </span>
              </h1>
              <h2 className='block leading-snug text-white font-bold font-display text-lg sm:text-xl lg:text-2xl mt-3 md:mt-2 slide-in-bottom slide-in-bottom-2'>
                Senior Software Engineer. Crafting high-quality, scalable
                applications.
              </h2>
              <p className='text-gray-200 mt-3 md:mt-5 text-md font-light md:text-xl slide-in-bottom-2'>
                Specializing in React, TypeScript, and modern web technologies.
                Based in Indonesia, delivering world-class solutions for 8+
                years.
              </p>
              <div className='flex flex-wrap items-center gap-4 mt-6 md:mt-8 slide-in-bottom-2'>
                <div className='inline-flex items-center px-3 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-sky-500/30 transition-colors duration-300 group'>
                  <svg
                    className='w-4 h-4 text-sky-400 mr-2 group-hover:text-sky-300 transition-colors'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
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
                  <span className='text-gray-200 text-sm font-medium group-hover:text-white transition-colors'>
                    Bali, Indonesia
                  </span>
                </div>

              </div>

              <div className='flex items-center gap-4 mt-6 slide-in-bottom-3'>
                <a
                  href='https://github.com/rvlewerissa'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300'
                  aria-label='GitHub'
                >
                  <svg
                    className='w-6 h-6'
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
                  className='p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300'
                  aria-label='LinkedIn'
                >
                  <svg
                    className='w-6 h-6'
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
                  href='mailto:rvlewerissa@gmail.com'
                  className='p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300'
                  aria-label='Email'
                >
                  <svg
                    className='w-6 h-6'
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

              <div className='mt-8 pt-8 border-t border-white/5 slide-in-bottom-4'>
                <p className='text-sm text-gray-500 mb-4 font-mono uppercase tracking-wider'>
                  Tech Stack
                </p>
                <div className='flex flex-wrap gap-6 opacity-60 hover:opacity-100 transition-opacity duration-500'>
                  {/* React */}
                  <div
                    className='group relative flex items-center justify-center'
                    title='React'
                  >
                    <ReactIcon className='w-6 h-6 text-gray-400 group-hover:text-[#61DAFB] transition-colors duration-300' />
                  </div>

                  {/* Node.js */}
                  <div
                    className='group relative flex items-center justify-center'
                    title='Node.js'
                  >
                    <NodeIcon className='w-6 h-6 text-gray-400 group-hover:text-[#339933] transition-colors duration-300' />
                  </div>

                  {/* Python */}
                  <div
                    className='group relative flex items-center justify-center'
                    title='Python'
                  >
                    <PythonIcon className='w-6 h-6 text-gray-400 group-hover:text-[#3776AB] transition-colors duration-300' />
                  </div>

                  {/* JavaScript */}
                  <div
                    className='group relative flex items-center justify-center'
                    title='JavaScript'
                  >
                    <JSIcon className='w-6 h-6 text-gray-400 group-hover:text-[#F7DF1E] transition-colors duration-300' />
                  </div>
                </div>
              </div>
            </div>

            <div className='relative mt-6 mb-8 ml-4 sm:mr-8 self-start lg:mt-12 md:ml-12 md:mt-0 shrink-0 puff-in-center'>
              <div className='w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-96 lg:h-96 relative rounded-full border-2 border-sky-500/20 shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)] overflow-hidden'>
                <img
                  src='/profile-picture.jpg'
                  alt='Vitto Lewerissa'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
