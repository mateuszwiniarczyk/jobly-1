import { clsxm } from '@/lib/clsxm';

type AccordionProps = {
  children: React.ReactNode;
  header: string;
  headerClassName?: string;
  className?: string;
};

const Accordion = ({
  children,
  className,
  header,
  headerClassName,
}: AccordionProps) => (
  <details open className={clsxm('group my-2', className)}>
    <summary
      className={clsxm(
        'group mb-4 flex cursor-pointer items-center rounded-lg',
        headerClassName
      )}
    >
      <span className='text-sm font-bold'>{header}</span>

      <span className='ml-auto shrink-0 transition duration-300 group-open:-rotate-180'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </span>
    </summary>
    {children}
  </details>
);

export { Accordion };