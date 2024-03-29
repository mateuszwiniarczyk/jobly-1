import Link from 'next/link';

import { ROUTES } from '@/config';

import WorkIcon from '~/svg/work.svg';

const Logo = () => (
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
);

export { Logo };
