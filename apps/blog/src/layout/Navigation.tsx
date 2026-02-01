import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Projects', href: '/projects' },
];

export default function Navigation() {
  return (
    <Popover>
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-warm-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-espresso focus:ring-2 focus:ring-terracotta focus:ring-offset-2 focus:ring-offset-cream'
      >
        Skip to content
      </a>
      <div className='pt-8 max-w-7xl mx-auto px-6 sm:px-6'>
        <nav
          className='flex items-center justify-between sm:h-10 lg:justify-center relative max-w-lg mx-auto lg:max-w-5xl'
          aria-label='Global'
        >
          <div className='flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0'>
            <div className='flex items-center justify-between w-full lg:w-auto'>
              <Link href='/' passHref>
                <a className='font-logo text-lg sm:text-xl lg:text-xl tracking-[0.02em] font-medium text-espresso hover:text-espresso/90 transition-colors'>
                  Vitto Lewerissa
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

      <MobileNavigation />
    </Popover>
  );
}

function MobileNavigation() {
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
        <div className='rounded-lg shadow-md bg-warm-white ring-1 ring-sand overflow-hidden'>
          <div className='px-5 pt-4 flex items-center justify-between'>
            <div>
              <span className='font-logo text-lg tracking-[0.02em] font-medium text-espresso'>
                Vitto Lewerissa
              </span>
            </div>
            <div className='-mr-2'>
              <Popover.Button className='p-2 inline-flex items-center justify-center text-stone hover:text-terracotta rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream'>
                <span className='sr-only'>Close menu</span>
                <XIcon className='h-8 w-8' aria-hidden='true' />
              </Popover.Button>
            </div>
          </div>
          <div className='px-2 pt-2 pb-3'>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <a
                  className='block px-3 py-2 rounded-md text-base font-medium text-walnut hover:text-espresso hover:bg-sand/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream'
                  onClick={() => {
                    // TODO: need to close drawer when we click a link
                  }}
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
