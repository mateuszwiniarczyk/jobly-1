import FacebookIcon from 'public/svg/facebook.svg';
import GoogleIcon from 'public/svg/google.svg';
import TwitterIcon from 'public/svg/twitter.svg';

import { Layout } from '@/features/auth/components/Layout';

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

const SignIn = () => (
  <Layout>
    <div className='mb-20 text-center'>
      <h2 className='mb-2.5'>Sign In to your account</h2>
      <p className='text-slate-100'>Enter your details to proceed further</p>
    </div>

    <form action='' className='mx-auto max-w-md'>
      <label htmlFor='email' className='sr-only'>
        Email
      </label>

      <input
        type='email'
        className='mt-4 h-14 w-full rounded-lg border-gray-700 p-4 text-sm shadow-sm placeholder:font-bold placeholder:text-slate-100'
        placeholder='Enter email'
      />

      <label htmlFor='password' className='sr-only'>
        Password
      </label>

      <input
        type='password'
        className='mt-4 h-14 w-full rounded-lg border-gray-700 p-4 text-sm shadow-sm placeholder:font-bold placeholder:text-slate-100'
        placeholder='Enter password'
      />
      <button
        type='submit'
        className='mt-7 block w-full rounded-lg bg-primary-200 p-5 text-sm font-bold text-white'
      >
        Sign In
      </button>

      <div className='relative mt-10'>
        <hr className='block h-0.5 bg-gray-700' />
        <span className='absolute bottom-full right-2/4 translate-y-1/2 translate-x-1/2 bg-white px-7'>
          Or
        </span>
      </div>

      <div className='mt-10'>
        {socialButtons.map(({ name, icon: Icon }) => (
          <button
            key={name}
            type='button'
            className='relative mt-2.5 block w-full rounded-lg border border-gray-700 p-5 text-center text-sm text-slate-100'
          >
            <span className='font-bold'>Sign In with {name}</span>
            <Icon className='absolute left-5 bottom-2/4 h-4 w-4 translate-y-1/2' />
          </button>
        ))}
      </div>
    </form>
  </Layout>
);

export { SignIn };
