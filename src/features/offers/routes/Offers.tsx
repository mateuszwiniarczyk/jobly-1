import { useForm } from 'react-hook-form';

import { Accordion } from '@/components/Elements/Accordion';
import { InputField } from '@/components/Form/InputField';
import { MainLayout } from '@/components/Layout/MainLayout';

import TuneIcon from '~/svg/tune.svg';

const Offers = () => {
  const { register } = useForm();
  return (
    <MainLayout>
      <section className='py-10'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start'>
          <div className='lg:col-span-3'>
            <h1>Offers</h1>
          </div>

          <div className='lg:sticky lg:top-4'>
            <Accordion header='Toogle Filters' headerClassName='px-6 lg:hidden'>
              <form>
                <div className='flex items-center gap-2.5 px-4 py-2'>
                  <TuneIcon className='h-6 w-6 fill-slate-100' />
                  <span className='text-sm font-bold text-slate-100'>
                    Filter by
                  </span>
                </div>

                <Accordion header='Category'>
                  <div className='space-y-2 px-5 py-2'>
                    <InputField
                      label='Backend Developer'
                      type='text'
                      registration={register('category')}
                    />
                  </div>
                </Accordion>

                <Accordion header='Location'>
                  <div className='space-y-2 px-5 py-2'>
                    <InputField
                      label='Berlin'
                      type='text'
                      registration={register('location')}
                    />
                  </div>
                </Accordion>

                <Accordion header='Job type'>
                  <div className='space-y-2 px-5 py-2'>
                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <label className='ml-3 text-sm font-medium'>
                        Full-time
                      </label>
                    </div>

                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <label className='ml-3 text-sm font-medium'>
                        Part-time
                      </label>
                    </div>
                  </div>
                </Accordion>

                <Accordion header='Employment type'>
                  <div className='space-y-2 px-5 py-2'>
                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <label className='ml-3 text-sm font-medium'>B2B</label>
                    </div>

                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <label className='ml-3 text-sm font-medium'>
                        Permanent
                      </label>
                    </div>

                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <label
                        htmlFor='outdoor'
                        className='ml-3 text-sm font-medium'
                      >
                        Mandate Contract
                      </label>
                    </div>
                  </div>
                </Accordion>

                <Accordion header='Seniority'>
                  <div className='space-y-2 px-5 py-2'>
                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <label className='ml-3 text-sm font-medium'>
                        Trainee
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <label className='ml-3 text-sm font-medium'>Junior</label>
                    </div>

                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <label className='ml-3 text-sm font-medium'>Mid</label>
                    </div>

                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <label className='ml-3 text-sm font-medium'>Senior</label>
                    </div>
                  </div>
                </Accordion>
              </form>
            </Accordion>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export { Offers };
