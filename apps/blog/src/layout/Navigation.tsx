import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Work', href: '/work' },
  { name: 'Projects', href: '/projects' },
  { name: 'Writings', href: '/writings' },
];

export default function Navigation() {
  return (
    <Popover>
      {({ close }) => (
        <>
          <a
            href='#main-content'
            className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-warm-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-espresso focus:ring-2 focus:ring-terracotta focus:ring-offset-2 focus:ring-offset-cream'
          >
            Skip to content
          </a>
          <div className='pt-8 max-w-7xl mx-auto px-4 sm:px-6'>
            <nav
              className='flex items-center justify-between sm:h-10 lg:justify-center relative max-w-lg mx-auto lg:max-w-5xl'
              aria-label='Global'
            >
              <div className='flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0'>
                <div className='flex items-center justify-between w-full lg:w-auto'>
                  <Link href='/' passHref>
                    <a
                      className='inline-flex items-center text-espresso hover:opacity-90 transition-opacity'
                      aria-label='Vitto Lewerissa home'
                    >
                      <Image
                        src='/favicon.svg'
                        alt=''
                        width={32}
                        height={32}
                        className='h-5 w-5 sm:h-7 sm:w-7 rounded-md'
                      />
                      <span className='sr-only'>Vitto Lewerissa</span>
                    </a>
                  </Link>
                  <div className='-mr-2 flex items-center lg:hidden'>
                    <Popover.Button className='p-2 inline-flex items-center justify-center text-stone hover:text-terracotta rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream'>
                      <span className='sr-only'>Open main menu</span>
                      <MenuIcon className='h-8 w-8' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='hidden lg:flex lg:space-x-12'>
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} passHref>
                    <a className='text-sm font-medium text-walnut uppercase tracking-[0.18em] hover:text-espresso transition-colors'>
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <MobileNavigation close={close} />
        </>
      )}
    </Popover>
  );
}

function MobileNavigation({ close }: { close: () => void }) {
  return (
    <Transition
      as={Fragment}
      enter='duration-150 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <Popover.Panel
        focus
        className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden'
      >
        <div className='relative rounded-lg shadow-md bg-warm-white ring-1 ring-sand overflow-hidden'>
          <div className='absolute right-2 top-2 z-10'>
            <Popover.Button className='p-2 inline-flex items-center justify-center text-stone hover:text-terracotta rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream'>
              <span className='sr-only'>Close menu</span>
              <XIcon className='h-8 w-8' aria-hidden='true' />
            </Popover.Button>
          </div>
          <div className='px-2 pt-2 pb-3 pr-14'>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <a
                  className='block px-3 py-2 rounded-md text-base font-medium text-walnut hover:text-espresso hover:bg-sand/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream'
                  onClick={close}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}
