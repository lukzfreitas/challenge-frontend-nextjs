import Head from "next/head";
import { useState } from "react";
import { Column } from "../../components/Grid/Column";
import { Row } from "../../components/Grid/Row";
import Button from "../../components/Inputs/Button";
import { Input } from "../../components/Inputs/Input";
import AppBar from "../../components/Surfaces/AppBar";
import Label from "../../components/Typograph/Label";
import FooterContact from "../../patterns/FooterContact";
import FooterDev from "../../patterns/FooterDev";
import { validateEmail } from "../../utils/validate";
import LoginScreenStyled from "./styled";
import { useIntl } from "react-intl";
import { postLogin } from "../../../pages/api/loginApi";
import { getAllProductsByCategoryToExternal } from "../../../pages/api/productsApi";
import { useRouter } from "next/router";

const LoginScreen = () => {

  const router = useRouter();
  const intl = useIntl();

  const beginSession = intl.formatMessage({ id: "page.login.beginSession" });
  const typeYourEmail = intl.formatMessage({ id: "page.login.typeYourEmail" });
  const typeYourPassword = intl.formatMessage({
    id: "page.login.typeYourPassword",
  });
  const login = intl.formatMessage({ id: "page.home.buttonLogin" });

  const [email, setEmail] = useState("");

  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");

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
    try {
      await postLogin({
        email: email,
        password: password,
      });
      router.push('/');
    } catch (e) {
      setValidForm(false);
    }    
  };

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
              fontSize={"16px"}
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
              invalidMessage={"Email n??o cadastrado ou incorreto"}
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
              invalidMessage={"Senaha n??o cadastrada ou incorreta"}
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
