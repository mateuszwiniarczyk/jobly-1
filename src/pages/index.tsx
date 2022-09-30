import type { NextPage } from 'next';

import { MainLayout } from '@/components/Layout/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <h1 className='text-3xl font-bold underline'>Home</h1>
    </MainLayout>
  );
};

export default Home;
