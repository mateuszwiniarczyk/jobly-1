import Link from 'next/link';
import ArrowBackIcon from 'public/svg/arrow_back.svg';
import WorkIcon from 'public/svg/work.svg';

type LayoutProps = { children: React.ReactNode };

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen bg-white dark:bg-slate-200'>
      <nav className='sticky flex items-center justify-center border-b border-gray-700 py-5 px-7 dark:border-slate-100'>
        <Link href='/'>
          <a className='absolute bottom-1/2 left-5 translate-y-1/2'>
            <ArrowBackIcon className='fill-slate-100' />
          </a>
        </Link>
        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-200 p-2.5'>
          <WorkIcon className='fill-white' />
        </div>
      </nav>
      <div className='px-7 pt-24'>{children}</div>
    </div>
  );
};
