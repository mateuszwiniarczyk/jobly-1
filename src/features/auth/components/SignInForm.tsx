import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/Elements/Button';
import { InputField } from '@/components/Form/InputField';

type FormData = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push('/');
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
        type='email'
        registration={register('password')}
      />

      <Button type='submit' className='mt-7 block w-full p-5'>
        Sign In
      </Button>
    </form>
  );
};

export { SignInForm };
