import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { axios } from '@/lib/axios';
import { useAppDispatch } from '@/hooks/useAppStore';

import { Button } from '@/components/Elements/Button';

import { addNotification } from '@/features/notifications/notificationSlice';

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, control } = useForm();
  const type = useWatch({
    defaultValue: 'Company',
    control,
    name: 'type',
  });

  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const { confirmPassword, password, email, type, name, phoneNumber } =
        data;

      if (password !== confirmPassword)
        throw new Error('confirm password is incorrect');

      const payload = {
        email,
        password,
        name,
        type,
        phoneNumber,
      };

      await axios.post('/users', payload);

      dispatch(
        addNotification({
          type: 'success',
          title: 'The account has been created',
        })
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;

        dispatch(
          addNotification({
            type: 'error',
            title: 'The account has not been created',
            message: response?.data?.error,
          })
        );
      }
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className='mb-6 grid grid-cols-2 gap-8'>
        <div className='relative'>
          <input
            className='group peer hidden'
            type='radio'
            value='Company'
            id='company'
            {...register('type')}
            defaultChecked
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
            value='Person'
            id='person'
            {...register('type')}
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

      <label htmlFor='name' className='sr-only'>
        {type === 'Company' ? 'Company name' : 'Full name'}
      </label>
      <input
        type='text'
        className='focus:ring-blue-200 focus:border-blue-200 mt-4 h-14 w-full rounded-lg border-gray-700 p-4 text-sm font-bold text-black placeholder:font-bold placeholder:text-slate-100 dark:bg-transparent dark:text-white'
        placeholder={type === 'Company' ? 'Company name' : 'Full name'}
        {...register('name')}
      />

      <label htmlFor='email' className='sr-only'>
        Email
      </label>

      <input
        type='email'
        className='focus:ring-blue-200 focus:border-blue-200 mt-4 h-14 w-full rounded-lg border-gray-700 p-4 text-sm font-bold text-black placeholder:font-bold placeholder:text-slate-100 dark:bg-transparent dark:text-white'
        placeholder='Email'
        {...register('email')}
      />

      <label htmlFor='email' className='sr-only'>
        Phone number
      </label>

      <input
        type='tel'
        className='focus:ring-blue-200 focus:border-blue-200 mt-4 h-14 w-full rounded-lg border-gray-700 p-4 text-sm font-bold text-black placeholder:font-bold placeholder:text-slate-100 dark:bg-transparent dark:text-white'
        placeholder='Phone number'
        {...register('phoneNumber')}
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

      <label htmlFor='password' className='sr-only'>
        Confirm password
      </label>

      <input
        type='password'
        className='focus:ring-blue-200 focus:border-blue-200 mt-4 h-14 w-full rounded-lg border-gray-700 p-4 text-sm font-bold text-black placeholder:font-bold placeholder:text-slate-100 dark:bg-transparent dark:text-white'
        placeholder='Confirm password'
        {...register('confirmPassword')}
      />

      <Button type='submit' className='mt-7 w-full p-5' isLoading={isLoading}>
        Sign Up
      </Button>
    </form>
  );
};

export { SignUpForm };
