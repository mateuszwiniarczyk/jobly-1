import { AxiosError } from 'axios';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '@/hooks/useAppStore';

import { Button } from '@/components/Elements/Button';
import { InputField } from '@/components/Form/InputField';

import { addNotification } from '@/features/notifications/notificationSlice';

type FormData = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      setIsLoading(true);
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (res?.ok) {
        dispatch(
          addNotification({
            type: 'success',
            title: 'Authorized',
          })
        );
      } else {
        dispatch(
          addNotification({
            type: 'error',
            title: 'Not authorized. Try again.',
            message: res?.error,
          })
        );
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;

        dispatch(
          addNotification({
            type: 'error',
            title: 'Not authorized. Try again.',
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
      <InputField
        id='email'
        className='mt-4'
        labelClassName='sr-only'
        placeholder='Enter email'
        label='Email'
        type='email'
        registration={register('email')}
      />

      <InputField
        id='password'
        className='mt-4'
        labelClassName='sr-only'
        placeholder='Enter password'
        label='Password'
        type='password'
        registration={register('password')}
      />

      <Button type='submit' className='mt-7 block' isLoading={isLoading}>
        Sign In
      </Button>
    </form>
  );
};

export { SignInForm };
