import { Layout } from '@/features/auth/components/Layout';
import { SignInForm } from '@/features/auth/components/SignInForm';

const SignIn = () => {
  return (
    <Layout
      authType='signIn'
      pageHeader='Sign In to your account'
      pageDescription='Enter your details to proceed further'
    >
      <SignInForm />
    </Layout>
  );
};

export { SignIn };
