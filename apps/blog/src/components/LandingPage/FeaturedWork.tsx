import Link from 'next/link';
import { useRouter } from 'next/router';

const workExperience = [
  {
    id: 'chi',
    period: 'SEP 2025 — PRESENT',
    title: 'Senior Front End Engineer',
    company: 'CHI',
    href: 'https://chi.app/',
    logo: '/chi-logo.webp',
    description:
      'Leading major React Native upgrades across iOS and Android platforms, navigating breaking changes across multiple versions. Focused on reducing technical debt by removing deprecated packages, cleaning up legacy code, and resolving lint violations to improve code quality and maintainability.',
    technologies: ['React Native', 'TypeScript', 'Vite'],
  },
  {
    id: 'tiptip',
    period: 'OCT 2022 — APR 2025',
    title: 'Senior Front End Engineer',
    company: 'TipTip',
    href: 'https://www.tiptip.id/',
    logo: '/tiptip-logo.webp',
    description:
      'Built and maintained multiple user-facing and internal applications using Next.js and TypeScript. Delivered product features and engineering initiatives while consistently meeting sprint deadlines. Optimized web performance to support high-scale ticketing events for major concerts, handling large traffic spikes efficiently.',
    technologies: ['Next.js', 'TypeScript', 'Retool'],
  },
  {
    id: 'phantom-network',
    period: 'APR 2022 — OCT 2022',
    title: 'Senior Front End Engineer',
    company: 'Phantom Network',
    href: 'https://www.phantom.sh/',
    logo: '/pxn-logo.webp',
    description:
      'Contributed to the successful launch of key features for the #1 NFT project on OpenSea. Developed a Discord-like real-time chat MVP while collaborating with a cross-functional team. Delivered major product features and resolved critical bugs, significantly improving platform stability and user experience.',
    technologies: ['Next.js', 'TypeScript'],
  },
  {
    id: 'gdis',
    period: 'DEC 2019 — APR 2022',
    title: 'Front End Engineer',
    company: 'GDIS',
    href: 'https://www.linkedin.com/company/gdis-inovasi-indonesia/',
    logo: '/gdis-logo.webp',
    description:
      'Led a team of developers while mentoring junior engineers and overseeing all front-end deliverables. Revamped the core product from scratch using React and GraphQL, improving load times and reducing maintenance overhead. Eliminated legacy code and technical debt, resulting in faster feature delivery and fewer bugs.',
    technologies: ['React.js', 'TypeScript', 'GraphQL'],
  },
  {
    id: 'kodefox',
    period: 'OCT 2016 — NOV 2019',
    title: 'Front End Engineer',
    company: 'KodeFox',
    href: 'https://kodefox.com/',
    logo: '/kodefox-logo.webp',
    description:
      'Delivered multiple client applications including web apps with React and mobile apps with React Native. Modernized legacy applications by upgrading to the latest React and integrating Redux for state management. Contributed to VisionUI, a no-code framework for rapid app generation. Led technical workshops and mentored developers at various organizations.',
    technologies: [
      'React.js',
      'React Native',
      'Node.js',
      'GraphQL',
      'REST API',
    ],
  },
];

export default function RecentWork() {
  const router = useRouter();

  return (
    <div id='work' className='py-8 sm:pb-4 px-4 sm:px-8 lg:pt-0 lg:pb-20'>
      <div className='relative max-w-lg mx-auto lg:max-w-5xl'>
        <div>
          <h2 className='text-2xl tracking-tight font-extrabold font-display text-white sm:text-3xl mb-8'>
            Work Experience
          </h2>

          <div className='relative'>
            <div className='space-y-6'>
              {workExperience.map((job) => (
                <div
                  key={job.company}
                  className='group relative p-6 rounded-lg transition-all duration-300 border border-transparent hover:bg-gray-800/30 hover:border-white/10 hover:shadow-lg cursor-pointer'
                  onClick={() => router.push(`/work/${job.id}`)}
                >
                  {/* Vertical line segment with margin below company logo - hidden on hover */}
                  <div className='absolute left-6 lg:left-12 top-32 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 to-gray-600 opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>

                  <div className='flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8'>
                    <div className='lg:w-48 flex-shrink-0 relative'>
                      <p className='text-sm font-medium text-gray-400 uppercase tracking-wider mb-3'>
                        {job.period}
                      </p>

                      {/* Company logo */}
                      <div
                        className={`w-12 h-12 rounded-lg shadow-sm ${
                          job.company === 'TipTip' ||
                          job.company === 'Phantom Network'
                            ? 'bg-transparent p-0'
                            : job.company === 'KodeFox'
                            ? 'bg-white p-1'
                            : job.company === 'CHI'
                            ? 'bg-black p-2.5'
                            : 'bg-white p-2'
                        }`}
                      >
                        <img
                          src={job.logo}
                          alt={`${job.company} logo`}
                          className={`w-full h-full ${
                            job.company === 'TipTip' ||
                            job.company === 'Phantom Network' ||
                            job.company === 'CHI'
                              ? 'object-cover rounded-lg'
                              : 'object-contain'
                          }`}
                          onError={(e) => {
                            // Fallback if logo doesn't exist
                            const target = e.currentTarget;
                            const fallback =
                              target.nextElementSibling as HTMLElement;
                            target.style.display = 'none';
                            if (fallback) {
                              fallback.style.display = 'flex';
                            }
                          }}
                        />
                        <div
                          className='w-full h-full bg-gray-600 rounded flex items-center justify-center text-white text-xs font-bold'
                          style={{ display: 'none' }}
                        >
                          {job.company.charAt(0)}
                        </div>
                      </div>
                    </div>

                    <div className='flex-1 pl-8 lg:pl-0'>
                      <div className='mb-4'>
                        <h3 className='text-xl font-semibold font-display text-white mb-1 group-hover:text-sky-400 transition-colors'>
                          {job.title}
                        </h3>
                        <div className='flex items-center mb-2'>
                          <Link href={job.href}>
                            <a
                              className='text-gray-300 hover:text-sky-400 group-hover:text-sky-400 transition-colors font-medium'
                              target='_blank'
                              rel='noopener noreferrer'
                              onClick={(e) => e.stopPropagation()}
                            >
                              {job.company}
                            </a>
                          </Link>
                          <svg
                            className='ml-2 w-4 h-4 text-gray-400'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                            />
                          </svg>
                        </div>
                      </div>

                      {job.description && (
                        <p className='text-gray-300 mb-4 leading-relaxed'>
                          {job.description}
                        </p>
                      )}

                      <div className='flex flex-wrap gap-2'>
                        {job.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='px-2.5 py-1 text-xs font-medium font-mono bg-white/5 text-gray-300 rounded-md border border-white/5'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
