import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import FacebookIcon from 'public/svg/facebook.svg';
import GoogleIcon from 'public/svg/google.svg';
import TwitterIcon from 'public/svg/twitter.svg';
import { useForm } from 'react-hook-form';

import { Layout } from '@/features/auth/components/Layout';

type FormData = {
  email: string;
  password: string;
};

const socialButtons = [
  {
    name: 'Google',
    icon: GoogleIcon,
  },
  {
    name: 'Facebook',
    icon: FacebookIcon,
  },
  {
    name: 'Twitter',
    icon: TwitterIcon,
  },
];

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
        <label htmlFor='email' className='sr-only'>
          Email
        </label>

        <input
          type='email'
          className='focus:ring-blue-200 focus:border-blue-200 mt-4 h-14 w-full rounded-lg border-gray-700 p-4 text-sm font-bold text-black placeholder:font-bold placeholder:text-slate-100 dark:bg-transparent dark:text-white'
          placeholder='Enter email'
          {...register('email')}
        />

        <label htmlFor='password' className='sr-only'>
          Password
        </label>

        <input
          type='password'
          className='focus:ring-blue-200 focus:border-blue-200 mt-4 h-14 w-full rounded-lg border-gray-700 p-4 text-sm font-bold text-black placeholder:font-bold placeholder:text-slate-100 dark:bg-transparent dark:text-white'
          placeholder='Enter password'
          {...register('password')}
        />
        <button
          type='submit'
          className='mt-7 block w-full rounded-lg bg-primary-200 p-5 text-sm font-bold text-white'
        >
          Sign In
        </button>

        <div className='relative mt-10'>
          <hr className='block border-t-gray-700' />
          <span className='absolute bottom-full right-2/4 translate-y-1/2 translate-x-1/2 bg-white px-7 text-slate-100 dark:bg-slate-200 dark:text-gray-700'>
            Or
          </span>
        </div>

        <div className='mt-10'>
          {socialButtons.map(({ name, icon: Icon }) => (
            <button
              key={name}
              type='button'
              className='relative mt-2.5 block w-full rounded-lg border border-gray-700 p-5 text-center text-sm text-slate-100 dark:text-white'
            >
              <span className='font-bold'>Sign In with {name}</span>
              <Icon className='absolute left-5 bottom-2/4 h-4 w-4 translate-y-1/2' />
            </button>
          ))}
        </div>
      </form>
    </Layout>
  );
};

export { SignIn };
