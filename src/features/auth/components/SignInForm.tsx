import { signIn } from 'next-auth/react';
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
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(async ({ email, password }) => {
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
  });

  return (
    <form onSubmit={onSubmit}>
      <InputField
        className='mt-4'
        label='Enter email'
        type='email'
        registration={register('email')}
      />

      <InputField
        className='mt-4'
        label='Enter password'
        type='password'
        registration={register('password')}
      />

      <Button type='submit' className='mt-7 block w-full p-5'>
        Sign In
      </Button>
    </form>
  );
};

export { SignInForm };
