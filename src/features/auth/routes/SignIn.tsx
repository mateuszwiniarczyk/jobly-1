import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/Elements/Button';
import { InputField } from '@/components/Form/InputField';

import { Layout } from '@/features/auth/components/Layout';

type FormData = {
  email: string;
  password: string;
};

const SignIn = () => {
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
    <Layout authType='signIn'>
      <div className='mb-20 text-center xl:mb-10'>
        <h2 className='mb-2.5 dark:text-white'>Sign In to your account</h2>
        <p className='text-slate-100'>Enter your details to proceed further</p>
      </div>

      <form onSubmit={onSubmit} className='mx-auto max-w-md'>
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
    </Layout>
  );
};

export { SignIn };
