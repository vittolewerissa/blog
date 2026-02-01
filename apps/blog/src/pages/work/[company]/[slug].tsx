import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  getAllCompanies,
  getArticleSlugs,
  getArticleBySlug,
  Company,
} from '../../../utils/workContent';
import CodeHighlighter from '../../../components/CodeHighlighter';

const Sandpack = dynamic(() => import('../../../components/Sandpack'), {
  ssr: false,
});

// MDX Image component with next/image optimization
const MDXImage = ({ src, alt, ...props }: { src?: string; alt?: string; [key: string]: unknown }) => {
  if (!src) return null;
  
  // Check if it's an external URL
  const isExternal = src.startsWith('http://') || src.startsWith('https://');
  
  if (isExternal) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt || ''} {...props} loading='lazy' />;
  }
  
  // For local images, use Next.js Image with fill layout
  return (
    <div className='relative w-full aspect-video my-6'>
      <Image
        src={src}
        alt={alt || ''}
        layout='fill'
        objectFit='contain'
        className='rounded-lg'
        loading='lazy'
      />
    </div>
  );
};

type Props = {
  company: Company;
  article: {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: MDXRemoteSerializeResult;
    readingTime: {
      text: string;
    };
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const companies = getAllCompanies();
  const paths: Array<{ params: { company: string; slug: string } }> = [];

  companies.forEach((company) => {
    const slugs = getArticleSlugs(company.id);
    slugs.forEach((slug) => {
      paths.push({
        params: {
          company: company.id,
          slug,
        },
      });
    });
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const companyId = params?.company as string;
  const slug = params?.slug as string;

  const companies = getAllCompanies();
  const company = companies.find((c) => c.id === companyId);

  if (!company) {
    return {
      notFound: true,
    };
  }

  const articleData = getArticleBySlug(companyId, slug);

  if (!articleData) {
    return {
      notFound: true,
    };
  }

  const content = await serialize(articleData.content);

  return {
    props: {
      company,
      article: {
        slug: articleData.slug,
        title: articleData.title,
        date: articleData.date,
        description: articleData.description,
        content,
        readingTime: articleData.readingTime,
      },
    },
    revalidate: 60,
  };
};

export default function WorkArticle({ company, article }: Props) {
  const dateString = new Date(article.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div id='main-content' className='relative'>
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 65% 30%, rgba(139, 69, 87, 0.08) 0%, transparent 70%)',
        }}
      />

      <section className='relative pb-10 lg:pb-16'>
        <div className='mt-12 px-4 sm:px-8 sm:mt-20 lg:mt-24'>
          <div className='mx-auto max-w-lg lg:max-w-5xl'>
            <Link href={`/work/${company.id}`} passHref>
              <a className='inline-flex items-center px-3 py-1.5 text-sm bg-warm-white text-walnut hover:text-espresso hover:bg-cream rounded-full transition-colors border border-sand mb-6 group'>
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
                Back to {company.displayName}
              </a>
            </Link>

            <h1 className='text-3xl sm:text-4xl lg:text-5xl tracking-tight font-normal font-display text-espresso text-balance'>
              {article.title}
            </h1>

            <div className='mt-4 flex flex-wrap items-center gap-2 text-sm text-stone font-medium'>
              <Image
                src='/me.jpeg'
                alt='Vitto Lewerissa'
                width={24}
                height={24}
                className='rounded-full'
              />
              <span>Vitto Lewerissa</span>
              <span className='text-sand'>•</span>
              <span>{dateString}</span>
              <span className='text-sand'>•</span>
              <span className='font-mono text-[11px] uppercase tracking-[0.2em]'>
                {article.readingTime.text}
              </span>
            </div>

            <div className='mt-6 flex items-center gap-3 p-4 bg-warm-white rounded-xl border border-sand/70'>
              {company.logo && (
                <div
                  className={`w-10 h-10 rounded-lg border border-sand/60 overflow-hidden flex-shrink-0 relative ${
                    company.name === 'TipTip' ||
                    company.name === 'Phantom Network'
                      ? 'bg-transparent p-0'
                      : company.name === 'KodeFox'
                      ? 'bg-cream p-1'
                      : company.name === 'CHI'
                      ? 'bg-black p-2'
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
                    className={
                      company.name === 'TipTip' ||
                      company.name === 'Phantom Network' ||
                      company.name === 'CHI'
                        ? 'rounded'
                        : ''
                    }
                  />
                </div>
              )}
              <div>
                <p className='text-[11px] font-mono text-stone uppercase tracking-[0.2em]'>
                  Part of the series
                </p>
                <p className='text-espresso font-semibold'>
                  {company.displayName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='max-w-lg mx-auto lg:max-w-5xl px-4 sm:px-8'>
        <div className='border-t border-sand' />
      </div>

      <section className='py-14 lg:py-20 px-4 sm:px-8'>
        <div className='max-w-lg mx-auto lg:max-w-5xl'>
          <article className='prose prose-amber max-w-none text-espresso prose-headings:font-display prose-headings:text-espresso prose-strong:text-espresso prose-a:text-terracotta hover:prose-a:text-terracotta-light prose-code:text-espresso prose-code:bg-warm-white prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:border prose-code:border-sand/60 prose-pre:bg-warm-white prose-pre:text-espresso prose-pre:border prose-pre:border-sand/70 prose-pre:rounded-xl prose-pre:p-4 prose-pre:shadow-[0_8px_24px_-18px_rgba(44,36,32,0.28)] prose-pre:overflow-x-auto'>
            <MDXRemote
              {...article.content}
              components={{ Sandpack, code: CodeHighlighter, img: MDXImage }}
              lazy
            />
          </article>
        </div>
      </section>
    </div>
  );
}
