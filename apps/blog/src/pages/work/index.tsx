import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllCompanies, Company } from '../../utils/workContent';

type Props = {
  companies: Company[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const companies = getAllCompanies();

  return {
    props: {
      companies,
    },
  };
};

export default function WorkIndex({ companies }: Props) {
  return (
    <div className='relative'>
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 65% 30%, rgba(139, 69, 87, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className='relative pb-16 lg:pb-24'>
        <main
          id='main-content'
          className='mt-12 px-4 sm:px-8 sm:mt-20 lg:mt-24'
        >
          <div className='mx-auto max-w-lg lg:max-w-5xl'>
            <div className='flex flex-col gap-6'>
              <span className='inline-flex items-center gap-2 px-3 py-1.5 bg-warm-white rounded-full border border-sand text-[11px] font-mono text-walnut/70 tracking-[0.2em] uppercase w-fit'>
                <span className='h-1.5 w-1.5 rounded-full bg-terracotta' />
                Case Studies
              </span>

              <div>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal font-display text-espresso text-balance'>
                  Work Showcase
                </h1>
                <p className='text-walnut mt-4 text-base sm:text-lg leading-relaxed max-w-2xl'>
                  A collection of articles about the projects and challenges
                  I&apos;ve worked on throughout my career. Each company
                  represents a unique chapter of learning and growth.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className='max-w-lg mx-auto lg:max-w-5xl px-4 sm:px-8'>
        <div className='border-t border-sand' />
      </div>

      <section className='py-16 lg:py-20 px-4 sm:px-8'>
        <div className='relative max-w-lg mx-auto lg:max-w-5xl'>
          <div className='space-y-6'>
            {companies.map((company) => (
              <Link key={company.id} href={`/work/${company.id}`}>
                <a className='group block'>
                  <div className='relative rounded-2xl bg-warm-white border border-sand/80 hover:border-terracotta/30 transition-colors duration-200'>
                    <div className='p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8'>
                      <div className='sm:w-52 lg:w-56 flex-shrink-0'>
                        <p className='text-[12px] font-mono text-walnut/70 uppercase tracking-[0.16em] mb-3 whitespace-nowrap tabular-nums'>
                          {company.period}
                        </p>

                        {company.logo && (
                          <div
                            className={`w-12 h-12 rounded-xl overflow-hidden border border-sand/60 relative ${
                              company.name === 'TipTip' ||
                              company.name === 'Phantom Network'
                                ? 'bg-transparent'
                                : company.name === 'CHI'
                                ? 'bg-black p-2.5'
                                : 'bg-cream p-2'
                            }`}
                          >
                            <Image
                              src={company.logo}
                              alt={`${company.displayName} logo`}
                              layout='fill'
                              objectFit={
                                company.name === 'TipTip' ||
                                company.name === 'Phantom Network' ||
                                company.name === 'CHI'
                                  ? 'cover'
                                  : 'contain'
                              }
                            />
                          </div>
                        )}
                      </div>

                      <div className='flex-1'>
                        <div className='flex items-center gap-2'>
                          <h3 className='text-2xl sm:text-3xl font-semibold font-display text-espresso group-hover:text-terracotta transition-colors'>
                            {company.displayName}
                          </h3>
                          <svg
                            className='w-5 h-5 text-stone/70 group-hover:text-terracotta transform group-hover:translate-x-1 transition-transform transition-colors'
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
                        <p className='text-walnut/90 leading-relaxed mt-2'>
                          {company.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          {companies.length === 0 && (
            <div className='text-center py-12'>
              <p className='text-walnut text-lg'>
                No case studies available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
