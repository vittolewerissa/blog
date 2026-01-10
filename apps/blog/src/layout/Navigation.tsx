import { Fragment } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
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
      <div className='pt-8 max-w-7xl mx-auto px-6 sm:px-6'>
        <nav
          className='flex items-center justify-between sm:h-10 lg:justify-center relative max-w-lg mx-auto lg:max-w-5xl'
          aria-label='Global'
        >
          <div className='flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0'>
            <div className='flex items-center justify-between w-full lg:w-auto'>
              <Link href='/' passHref>
                <a className='tracking-wider uppercase font-bold text-sm lg:text-lg text-white'>
                  Vitto Lewerissa
                </a>
              </Link>
              <div className='-mr-2 flex items-center lg:hidden'>
                <Popover.Button className='p-2 inline-flex items-center justify-center text-gray-300 hover:text-sky-400 focus:outline-none rounded-md transition-colors'>
                  <span className='sr-only'>Open main menu</span>
                  <MenuIcon className='h-8 w-8' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className='hidden lg:flex lg:space-x-12'>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <a className='font-medium text-md text-white hover:text-gray-300'>
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
        <div className='rounded-lg shadow-md bg-gray-800/95 backdrop-blur-sm ring-1 ring-gray-700 ring-opacity-50 overflow-hidden'>
          <div className='px-5 pt-4 flex items-center justify-between'>
            <div>
              <span className='tracking-wider uppercase font-bold text-sm lg:text-lg text-white'>
                Vitto Lewerissa
              </span>
            </div>
            <div className='-mr-2'>
              <Popover.Button className='p-2 inline-flex items-center justify-center text-gray-300 hover:text-sky-400 focus:outline-none rounded-md transition-colors'>
                <span className='sr-only'>Close menu</span>
                <XIcon className='h-8 w-8' aria-hidden='true' />
              </Popover.Button>
            </div>
          </div>
          <div className='px-2 pt-2 pb-3'>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <a
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500'
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
