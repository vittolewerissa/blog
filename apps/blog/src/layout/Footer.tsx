type IconProps = {
  className: string;
};

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/rvlewerissa',
    icon: (props: IconProps) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vittolewerissa/',
    icon: (props: IconProps) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:rvlewerissa@gmail.com',
    icon: (props: IconProps) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
        <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://x.com/vittolewerissa',
    icon: (props: IconProps) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mt-8 p-8 border-t border-sand/70'>
        <div className='max-w-lg mx-auto lg:max-w-5xl'>
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-3 lg:space-y-0'>
            <div className='flex flex-col space-y-3'>
              <div>
                <h3 className='font-logo text-lg lg:text-xl tracking-[0.02em] font-medium text-espresso'>
                  Vitto Lewerissa
                </h3>
              </div>
              <div className='flex space-x-3'>
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={
                      item.href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className='p-2 text-walnut/80 hover:text-espresso transition-colors duration-200'
                    aria-label={item.name}
                  >
                    <item.icon className='h-6 w-6' />
                  </a>
                ))}
              </div>
              <div>
                <p className='text-[15px] text-walnut/80'>
                  Copyright &copy; 2025. All rights reserved.
                </p>
              </div>
            </div>
            <div className='text-[13px] text-walnut/70 flex items-center gap-1'>
              Built with
              <svg
                className='h-3.5 w-3.5 text-terracotta'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
              </svg>
              in Bali
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
