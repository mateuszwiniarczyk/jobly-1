import Link from 'next/link';
import ArrowBackIcon from 'public/svg/arrow_back.svg';
import WorkIcon from 'public/svg/work.svg';

type LayoutProps = { children: React.ReactNode };

export const Layout = ({ children }: LayoutProps) => (
  <div className='relative min-h-screen bg-white pb-20 dark:bg-slate-200'>
    <nav className='border-b border-gray-700 dark:border-slate-100'>
      <div className='container relative mx-auto flex items-center justify-center py-5 px-7 sm:px-0 xl:justify-start'>
        <Link href='/'>
          <a className='absolute bottom-1/2 left-5 translate-y-1/2 cursor-pointer xl:hidden'>
            <ArrowBackIcon className='fill-slate-100' />
          </a>
        </Link>
        <Link href='/'>
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
    <div className='px-7 pb-8 pt-24'>{children}</div>
    <footer className='absolute bottom-0 w-full bg-gray-400 dark:bg-slate-300'>
      <div className='cointainer mx-auto flex items-center justify-center py-6 text-sm'>
        <span className='flex items-center gap-2.5 text-slate-100 dark:text-white'>
          You don&#39;t have an account?
          <Link href='/signup'>
            <a className='font-bold'>Sign Up</a>
          </Link>
        </span>
      </div>
    </footer>
  </div>
);
