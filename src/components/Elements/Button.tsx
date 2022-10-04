import { clsxm } from '@/lib/clsxm';

import { Spinner } from '@/components/Elements/Spinner';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  children: React.ReactNode;
};

const Button = ({
  className,
  children,
  type = 'button',
  isLoading = false,
}: ButtonProps) => (
  <button
    type={type}
    className={clsxm(
      'flex w-full items-center justify-center rounded-lg bg-primary-200 p-5 text-sm font-bold text-white disabled:pointer-events-none disabled:opacity-75',
      className
    )}
    disabled={isLoading}
  >
    {children}
    {isLoading && <Spinner variant='light' size='sm' className='ml-2' />}
  </button>
);

export { Button };
