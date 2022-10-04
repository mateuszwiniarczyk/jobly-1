import { AxiosError } from 'axios';
import { useForm, useWatch } from 'react-hook-form';

import { useAppDispatch } from '@/hooks/useAppStore';

import { Button } from '@/components/Elements/Button';
import { InputField } from '@/components/Form/InputField';

import { useCreateUser } from '@/features/auth/api/signUp';
import { addNotification } from '@/features/notifications/notificationSlice';

const SignUpForm = () => {
  const createUserMutation = useCreateUser();
  const dispatch = useAppDispatch();

  const { register, handleSubmit, control } = useForm();
  const type = useWatch({
    defaultValue: 'Company',
    control,
    name: 'type',
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
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

      await createUserMutation.mutateAsync(payload);
    } catch (error) {
      if (error instanceof Error && !(error instanceof AxiosError)) {
        dispatch(
          addNotification({
            type: 'error',
            title: 'The user has not been created',
            message: error.message,
          })
        );
      }
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

      <InputField
        id='name'
        className='mt-4'
        labelClassName='sr-only'
        label='Name'
        placeholder={type === 'Company' ? 'Company name' : 'Full name'}
        registration={register('name')}
      />

      <InputField
        id='email'
        className='mt-4'
        labelClassName='sr-only'
        label='Email'
        placeholder='Email'
        type='email'
        registration={register('email')}
      />

      <InputField
        id='phoneNumber'
        className='mt-4'
        labelClassName='sr-only'
        label='Phone number'
        placeholder='Phone number'
        type='tel'
        registration={register('phoneNumber')}
      />

      <InputField
        id='password'
        className='mt-4'
        labelClassName='sr-only'
        label='Password'
        placeholder='Password'
        type='password'
        registration={register('password')}
      />

      <InputField
        id='confirmPassword'
        className='mt-4'
        labelClassName='sr-only'
        label='Confirm password'
        placeholder='Confirm password'
        type='password'
        registration={register('confirmPassword')}
      />

      <Button
        type='submit'
        className='mt-7'
        isLoading={createUserMutation.isLoading}
      >
        Sign Up
      </Button>
    </form>
  );
};

export { SignUpForm };
