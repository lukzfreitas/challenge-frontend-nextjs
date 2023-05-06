import Head from 'next/head';
import { Column } from '../../components/Grid/Column';
import { Row } from '../../components/Grid/Row';
import Button from '../../components/Inputs/Button';
import { Input } from '../../components/Inputs/Input';
import AppBar from '../../components/Surfaces/AppBar';
import Label from '../../components/Typograph/Label';
import FooterContact from '../../patterns/FooterContact';
import FooterDev from '../../patterns/FooterDev';
import LoginScreenStyled from './styled';
import { useIntl } from 'react-intl';
import { getProviders, getSession } from 'next-auth/react';
import useLogin from '../../hooks/useLogin';

const LoginScreen = () => {
  const intl = useIntl();

  const beginSession = intl.formatMessage({ id: 'page.login.beginSession' });
  const typeYourEmail = intl.formatMessage({ id: 'page.login.typeYourEmail' });
  const typeYourPassword = intl.formatMessage({
    id: 'page.login.typeYourPassword',
  });
  const login = intl.formatMessage({ id: 'page.home.buttonLogin' });
  const wrongEmail = intl.formatMessage({ id: 'page.login.wrongEmail' });
  const wrongPassword = intl.formatMessage({ id: 'page.login.wrongPassword' });

  const {
    email,
    password,
    passwordIsValid,
    validForm,
    validEmail,
    validPassword,
    formIsValid,
    emailIsValid,
  } = useLogin();

  return (
    <>
      <Head>
        <title>{login}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Column>
        <AppBar />
        <LoginScreenStyled>
          <Row
            padding="8px 0px"
            justifyContent="center"
            alignItems="center"
            width="423px"
          >
            <Label
              text={beginSession}
              textAlign="center"
              fontWeight={700}
              fontSize={'16px'}
            ></Label>
          </Row>
          <Row
            padding="8px 0px"
            width="423px"
            justifyContent="center"
            alignItems="center"
          >
            <Input
              onChange={(value: string) => emailIsValid(value)}
              type="email"
              value={email}
              placeholder={typeYourEmail}
              invalid={!validForm}
              invalidMessage={wrongEmail}
            />
          </Row>
          <Row
            padding="8px 0px"
            width="423px"
            justifyContent="center"
            alignItems="center"
          >
            <Input
              onChange={(value: string) => passwordIsValid(value)}
              type="password"
              value={password}
              placeholder={typeYourPassword}
              invalid={!validForm}
              invalidMessage={wrongPassword}
            />
          </Row>
          <Row
            padding="8px 0px"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              label={login}
              width="423px"
              disabled={!validEmail || !validPassword}
              onClick={() => formIsValid()}
            ></Button>
          </Row>
        </LoginScreenStyled>
        <FooterContact />
        <FooterDev />
      </Column>
    </>
  );
};

export default LoginScreen;

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders();
  if (session) {
    return {
      redirect: { destination: '/' },
    };
  }
  return {
    props: {
      providers,
    },
  };
}
