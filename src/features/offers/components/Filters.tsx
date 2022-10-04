import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { clsxm } from '@/lib/clsxm';

import { Accordion } from '@/components/Elements/Accordion';
import { Button } from '@/components/Elements/Button';
import { InputField } from '@/components/Form/InputField';

import TuneIcon from '~/svg/tune.svg';

const Filters = () => {
  const router = useRouter();
  const [filtersHidden, setFiltersHidden] = useState(true);
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(() => {
    router.push('?');
  });

  const toggleFiltersVisibility = () => {
    setFiltersHidden((prevState) => !prevState);
  };

  return (
    <div>
      <button
        className='mb-4 flex w-full items-center justify-center gap-2.5 rounded bg-gray-400 py-4 dark:bg-slate-100 lg:pointer-events-none lg:mb-0 lg:justify-start lg:rounded-none lg:bg-transparent lg:py-2 dark:lg:bg-transparent'
        onClick={toggleFiltersVisibility}
      >
        <TuneIcon className='h-6 w-6 fill-slate-100 dark:fill-white' />
        <span className='text-sm font-bold text-slate-100 dark:text-white'>
          Filter by
        </span>
      </button>

      <form
        onSubmit={onSubmit}
        className={clsxm(filtersHidden && 'hidden', 'lg:block')}
      >
        <Accordion header='Category'>
          <div className='mb-4'>
            <InputField
              id='backend'
              placeholder='Backend Developer'
              labelClassName='sr-only'
              label='Backend Developer'
              registration={register('category')}
            />
          </div>
        </Accordion>

        <Accordion header='Location'>
          <div className='mb-4'>
            <InputField
              id='location'
              placeholder='Berlin'
              labelClassName='sr-only'
              label='Location'
              registration={register('location')}
            />
          </div>
        </Accordion>

        <Accordion header='Job type'>
          <div className='mb-4 space-y-2'>
            <InputField
              id='fullTime'
              labelClassName='ml-2 text-sm font-medium text-slate-100'
              type='checkbox'
              registration={register('jobType')}
              label='Full-time'
            />

            <InputField
              id='partTime'
              labelClassName='ml-2 text-sm font-medium text-slate-100'
              type='checkbox'
              registration={register('jobType')}
              label='Part-time'
            />
          </div>
        </Accordion>

        <Accordion header='Employment type'>
          <div className='mb-4 space-y-2'>
            <InputField
              id='b2b'
              labelClassName='ml-2 text-sm font-medium text-slate-100'
              type='checkbox'
              registration={register('employmentType')}
              label='B2B'
            />

            <InputField
              id='permanent'
              labelClassName='ml-2 text-sm font-medium text-slate-100'
              type='checkbox'
              registration={register('employmentType')}
              label='Permanent'
            />

            <InputField
              id='mandateContract'
              labelClassName='ml-2 text-sm font-medium text-slate-100'
              type='checkbox'
              registration={register('employmentType')}
              label='Mandate Contract'
            />
          </div>
        </Accordion>

        <Accordion header='Seniority'>
          <div className='mb-4 space-y-2'>
            <InputField
              id='trainee'
              labelClassName='ml-2 text-sm font-medium text-slate-100'
              type='checkbox'
              registration={register('seniority')}
              label='Trainee'
            />

            <InputField
              id='junior'
              labelClassName='ml-2 text-sm font-medium text-slate-100'
              type='checkbox'
              registration={register('seniority')}
              label='Junior'
            />

            <InputField
              id='mid'
              labelClassName='ml-2 text-sm font-medium text-slate-100'
              type='checkbox'
              registration={register('seniority')}
              label='Mid'
            />

            <InputField
              id='senior'
              labelClassName='ml-2 text-sm font-medium text-slate-100'
              type='checkbox'
              registration={register('seniority')}
              label='Senior'
            />
          </div>
        </Accordion>
        <Button type='submit' className='mt-6'>
          Filter
        </Button>
      </form>
    </div>
  );
};

export { Filters };
