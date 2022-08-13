import ArrowBack from 'public/svg/arrow_back.svg';

type LayoutProps = { children: React.ReactNode };

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen bg-white dark:bg-slate-200'>
      <nav className='sticky border-b border-slate-100 p-5'>
        <ArrowBack />
        <ul className='flex'>
          <li>Nav</li>
          <li>Nav</li>
          <li>Nav</li>
          <li>Nav</li>
          <li>Nav</li>
        </ul>
      </nav>
      <div className='pt-24'>{children}</div>
    </div>
  );
};
