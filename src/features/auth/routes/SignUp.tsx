import { Layout } from '@/features/auth/components/Layout';
import { SignUpForm } from '@/features/auth/components/SignUpForm';

const SignUp = () => (
  <Layout>
    <div className='mb-20 text-center xl:mb-10'>
      <h2 className='mb-2.5 dark:text-white'>Tell us about yourself</h2>
      <p className='text-slate-100'>Enter your details to proceed further</p>
    </div>
    <div className='mx-auto max-w-md'>
      <SignUpForm />
    </div>
  </Layout>
);

export { SignUp };
