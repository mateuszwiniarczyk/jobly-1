import Link from 'next/link';
import ArrowBackIcon from 'public/svg/arrow_back.svg';
import WorkIcon from 'public/svg/work.svg';
import { useMemo } from 'react';

import { ROUTES } from '@/config';
import { Notifications } from '@/features/notifications/components/Notifications';

type LayoutProps = {
  children: React.ReactNode;
  authType: 'signIn' | 'signUp';
  pageHeader: string;
  pageDescription: string;
};

const authTypes = {
  signIn: {
    url: ROUTES.SIGN_UP,
    label: 'Sign Up',
    description: "You don't have an account?",
  },
  signUp: {
    url: ROUTES.SIGN_IN,
    label: 'Sign In',
    description: 'Already have an account?',
  },
};

export const Layout = ({
  children,
  authType,
  pageHeader,
  pageDescription,
}: LayoutProps) => {
  const { url, description, label } = useMemo(
    () => authTypes[authType],
    [authType]
  );

  return (
    <div className='relative min-h-screen bg-white pb-20 dark:bg-slate-200'>
      <nav className='border-b border-gray-700 dark:border-slate-100'>
        <div className='container relative mx-auto flex items-center justify-center py-5 px-7 sm:px-0 xl:justify-start'>
          <Link href={ROUTES.HOME}>
            <a className='absolute bottom-1/2 left-5 translate-y-1/2 cursor-pointer xl:hidden'>
              <ArrowBackIcon className='fill-slate-100' />
            </a>
          </Link>
          <Link href={ROUTES.HOME}>
            <a className='xl:flex xl:items-center xl:gap-2.5'>
              <div className='flex h-11 w-11 items-center justify-center rounded-full bg-primary-200 p-3'>
                <WorkIcon className='fill-white' />
              </div>
              <span className='hidden text-lg font-bold text-black dark:text-white xl:block'>
                Jobly
              </span>
            </a>
          </Link>
        </div>
      </nav>
      <div className='px-7 pb-8 pt-24'>
        <div className='mb-20 text-center xl:mb-10'>
          <h2 className='mb-2.5 dark:text-white'>{pageHeader}</h2>
          <p className='text-slate-100'>{pageDescription}</p>
        </div>
        <div className='mx-auto max-w-md'>{children}</div>
      </div>
      <footer className='absolute bottom-0 w-full bg-gray-400 dark:bg-slate-300'>
        <div className='cointainer mx-auto flex items-center justify-center py-6 text-sm'>
          <span className='flex items-center gap-2.5 text-slate-100 dark:text-white'>
            {description}
            <Link href={url}>
              <a className='font-bold'>{label}</a>
            </Link>
          </span>
        </div>
      </footer>
      <Notifications />
    </div>
  );
};
