import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  getAllCompanies,
  getArticlesByCompany,
  Company,
  WorkArticle,
} from '../../../utils/workContent';

type Props = {
  company: Company;
  articles: WorkArticle[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const companies = getAllCompanies();

  return {
    paths: companies.map((company) => ({
      params: { company: company.id },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const companyId = params?.company as string;
  const companies = getAllCompanies();
  const company = companies.find((c) => c.id === companyId);

  if (!company) {
    return {
      notFound: true,
    };
  }

  const articles = getArticlesByCompany(companyId);

  return {
    props: {
      company,
      articles,
    },
    revalidate: 60,
  };
};

export default function CompanyWork({ company, articles }: Props) {
  const router = useRouter();
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
            <button
              onClick={() => {
                if (window.history.state && window.history.state.idx > 0) {
                  router.back();
                } else {
                  router.push('/');
                }
              }}
              className='inline-flex items-center px-3 py-1.5 text-sm bg-warm-white text-walnut hover:text-espresso hover:bg-cream rounded-full transition-colors border border-sand mb-8 group'
            >
              <svg
                className='w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
              Back
            </button>

            <div className='flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-6'>
              {company.logo && (
                <div
                  className={`w-16 h-16 rounded-xl border border-sand/60 overflow-hidden flex-shrink-0 relative ${
                    company.name === 'TipTip' || company.name === 'Phantom Network'
                      ? 'bg-transparent p-0'
                      : company.name === 'KodeFox'
                      ? 'bg-cream p-1.5'
                      : company.name === 'CHI'
                      ? 'bg-black p-3'
                      : 'bg-cream p-3'
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
                    className={
                      company.name === 'TipTip' ||
                      company.name === 'Phantom Network' ||
                      company.name === 'CHI'
                        ? 'rounded-lg'
                        : ''
                    }
                  />
                </div>
              )}
              <div>
                <h1 className='text-3xl sm:text-4xl tracking-tight font-normal font-display text-espresso text-balance'>
                  {company.displayName}
                </h1>
                <p className='text-[11px] font-mono text-stone uppercase tracking-[0.2em] mt-3'>
                  {company.period}
                </p>
                <p className='text-walnut mt-4 text-base sm:text-lg leading-relaxed max-w-2xl'>
                  {company.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='max-w-lg mx-auto lg:max-w-5xl px-4 sm:px-8'>
        <div className='border-t border-sand' />
      </div>

      <section className='py-16 lg:py-20 px-4 sm:px-8'>
        <div className='relative max-w-lg mx-auto lg:max-w-5xl'>
          <div className='flex items-baseline justify-between mb-10'>
            <h2 className='text-2xl sm:text-3xl tracking-tight font-normal font-display text-espresso text-balance'>
              Case Studies
            </h2>
            <span className='hidden sm:block text-sm text-stone font-mono'>
              {articles.length} entries
            </span>
          </div>

          {articles.length > 0 ? (
            <div className='grid gap-6 lg:grid-cols-2 lg:gap-8'>
              {articles.map((article) => {
                const dateString = new Date(article.date).toLocaleDateString(
                  undefined,
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                );

                const href = `/work/${company.id}/${article.slug}`;

                return (
                  <Link key={article.slug} href={href} passHref>
                    <a className='group block rounded-2xl bg-warm-white border border-sand/80 hover:border-terracotta/30 transition-colors duration-200 p-6 sm:p-7'>
                      <p className='text-[11px] font-mono text-stone uppercase tracking-[0.2em]'>
                        <time dateTime={article.date}>{dateString}</time>
                      </p>
                      <h3 className='mt-3 text-xl sm:text-2xl font-display font-semibold text-espresso group-hover:text-terracotta transition-colors'>
                        {article.title}
                      </h3>
                      <p className='mt-2 text-walnut/80 leading-relaxed line-clamp-3'>
                        {article.description}
                      </p>
                      <div className='mt-6 flex items-center justify-between text-sm text-stone'>
                        <span className='inline-flex items-center gap-1 text-terracotta/80 group-hover:text-terracotta transition-colors'>
                          Read article
                          <svg
                            className='w-4 h-4 transform group-hover:translate-x-0.5 transition-transform'
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
                        </span>
                        <span className='text-[11px] font-mono text-stone'>
                          {article.readingTime.text}
                        </span>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className='pt-6'>
              <p className='text-walnut text-center py-12'>
                No case studies available yet for {company.displayName}. Check
                back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
