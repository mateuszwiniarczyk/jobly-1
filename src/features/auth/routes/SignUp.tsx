import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Layout } from '@/features/auth/components/Layout';

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => data);
  const [accountType, setAccountType] = useState('company');

  const handleAccountTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccountType(event.target.value);
  };

  return (
    <Layout>
      <div className='mb-20 text-center xl:mb-10'>
        <h2 className='mb-2.5 dark:text-white'>Tell us about yourself</h2>
        <p className='text-slate-100'>Enter your details to proceed further</p>
      </div>
      <div className='mx-auto max-w-md'>
        <div className='mb-6 grid grid-cols-2 gap-8'>
          <div className='relative'>
            <input
              className='group peer hidden'
              type='radio'
              name='signupOption'
              value='company'
              id='company'
              checked={accountType === 'company'}
              onChange={handleAccountTypeChange}
            />

            <label
              className='block cursor-pointer rounded-lg border border-gray-500 p-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 peer-checked:border-primary-200 peer-checked:ring-1 peer-checked:ring-primary-200 dark:border-slate-100 dark:hover:bg-slate-300'
              htmlFor='company'
            >
              <span className='dark:text-white'>Company</span>

              <span className='mt-1 block text-xs text-slate-100'>
                Description
              </span>
            </label>

            <svg
              className='absolute top-4 right-4 h-5 w-5 text-primary-200 opacity-0 peer-checked:opacity-100'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          <div className='relative'>
            <input
              className='group peer hidden'
              type='radio'
              name='signupOption'
              value='person'
              id='person'
              onChange={handleAccountTypeChange}
              checked={accountType === 'person'}
            />

            <label
              className='block cursor-pointer rounded-lg border border-gray-500 p-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 peer-checked:border-primary-200 peer-checked:ring-1 peer-checked:ring-primary-200 dark:border-slate-100 dark:hover:bg-slate-300'
              htmlFor='person'
            >
              <span className='dark:text-white'>Person</span>

              <span className='mt-1 block text-xs text-slate-100'>
                Description
              </span>
            </label>

            <svg
              className='absolute top-4 right-4 h-5 w-5 text-primary-200 opacity-0 peer-checked:opacity-100'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>

        <form onSubmit={onSubmit}>
          {accountType === 'company' ? (
            <>
              <label htmlFor='companyName' className='sr-only'>
                Company name
              </label>

              <input
                type='text'
                className='focus:ring-blue-200 focus:border-blue-200 mt-4 h-14 w-full rounded-lg border-gray-700 p-4 text-sm font-bold text-black placeholder:font-bold placeholder:text-slate-100 dark:bg-transparent dark:text-white'
                placeholder='Company name'
                {...register('companyName')}
              />
            </>
          ) : (
            <>
              <label htmlFor='fullName' className='sr-only'>
                Full name
              </label>

              <input
                type='text'
                className='focus:ring-blue-200 focus:border-blue-200 mt-4 h-14 w-full rounded-lg border-gray-700 p-4 text-sm font-bold text-black placeholder:font-bold placeholder:text-slate-100 dark:bg-transparent dark:text-white'
                placeholder='Full name'
                {...register('fullName')}
              />
            </>
          )}
          <label htmlFor='email' className='sr-only'>
            Email
          </label>

          <input
            type='email'
            className='focus:ring-blue-200 focus:border-blue-200 mt-4 h-14 w-full rounded-lg border-gray-700 p-4 text-sm font-bold text-black placeholder:font-bold placeholder:text-slate-100 dark:bg-transparent dark:text-white'
            placeholder='Email'
            {...register('email')}
          />

          <label htmlFor='password' className='sr-only'>
            Password
          </label>

          <input
            type='password'
            className='focus:ring-blue-200 focus:border-blue-200 mt-4 h-14 w-full rounded-lg border-gray-700 p-4 text-sm font-bold text-black placeholder:font-bold placeholder:text-slate-100 dark:bg-transparent dark:text-white'
            placeholder='Password'
            {...register('password')}
          />

          <label htmlFor='confirmPassword' className='sr-only'>
            Confirm password
          </label>

          <input
            type='password'
            className='focus:ring-blue-200 focus:border-blue-200 mt-4 h-14 w-full rounded-lg border-gray-700 p-4 text-sm font-bold text-black placeholder:font-bold placeholder:text-slate-100 dark:bg-transparent dark:text-white'
            placeholder='Confirm password'
            {...register('confirmPassword')}
          />

          <button
            type='submit'
            className='mt-7 block w-full rounded-lg bg-primary-200 p-5 text-sm font-bold text-white'
          >
            Sign Up
          </button>
        </form>
      </div>
    </Layout>
  );
};

export { SignUp };
