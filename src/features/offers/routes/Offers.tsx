import { MainLayout } from '@/components/Layout/MainLayout';

import { Filters } from '@/features/offers/components/Filters';

const Offers = () => (
  <MainLayout>
    <section className='py-10'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start'>
        <div className='lg:col-span-3'>
          <h1>Offers</h1>
        </div>
        <Filters />
      </div>
    </section>
  </MainLayout>
);

export { Offers };
