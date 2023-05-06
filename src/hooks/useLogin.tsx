import { useState } from 'react';
import { validateEmail } from '../utils/validate';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

interface UseLoginProps {
  email: string;
  password: string;
  validForm: boolean;
  validEmail: boolean;
  validPassword: boolean;
  emailIsValid: Function;
  passwordIsValid: Function;
  formIsValid: Function;
}

const useLogin = (): UseLoginProps => {
  const router = useRouter();

  const [email, setEmail] = useState('');

  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState('');

  const [validPassword, setValidPassword] = useState(false);

  const [validForm, setValidForm] = useState(true);

  const emailIsValid = (text: string) => {
    setValidEmail(validateEmail(text));
    setEmail(text);
  };

  const passwordIsValid = (text: string) => {
    setValidPassword(text.length > 4);
    setPassword(text);
  };

  const formIsValid = async () => {
    signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
      redirect: false,
    }).then(({ ok, error }) => {
      if (ok) {
        router.push('/');
      }
      if (error) {
        setValidForm(false);
      }
    });
  };

  return {
    email,
    password,
    validForm,
    validEmail,
    validPassword,
    emailIsValid,
    formIsValid,
    passwordIsValid,
  };
};

export default useLogin;
