import { Layout } from '@/features/auth/components/Layout';
import { SignUpForm } from '@/features/auth/components/SignUpForm';

const SignUp = () => (
  <Layout
    authType='signUp'
    pageHeader='Tell us about yourself'
    pageDescription='Enter your details to proceed further'
  >
    <SignUpForm />
  </Layout>
);

export { SignUp };
