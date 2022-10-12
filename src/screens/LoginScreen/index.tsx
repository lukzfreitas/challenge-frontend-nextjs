import Head from "next/head";
import { useRouter } from "next/router";
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

const LoginScreen = () => {    

    const intl = useIntl();

    const beginSession = intl.formatMessage({ id: "page.login.beginSession" });
    const typeYourEmail = intl.formatMessage({ id: "page.login.typeYourEmail" });
    const typeYourPassword = intl.formatMessage({ id: "page.login.typeYourPassword" });
    const login = intl.formatMessage({ id: "page.home.buttonLogin" });
    

    const [email, setEmail] = useState('');

    const [validEmail, setValidEmail] = useState(false);

    const [password, setPassword] = useState('');

    const [validPassword, setValidPassword] = useState(false);

    const emailIsValid = (text: string) => {
        setValidEmail(validateEmail(text));
        if (validEmail) setEmail(text);
    }

    const passwordIsValid = (text: string) => {
        setValidPassword(text.length > 4);
        if (validPassword) setPassword(text);
    }

    return (
        <>
            <Head>
                <title>{login}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Column>
                <AppBar />
                <LoginScreenStyled>
                    <Row padding="8px 0px" justifyContent="center" alignItems="center" width="423px">
                        <Label text={beginSession} textAlign="center" fontWeight={700} fontSize={'16px'}></Label>
                    </Row>
                    <Row padding="8px 0px" width="423px" justifyContent="center" alignItems="center">
                        <Input
                            onChange={(value: string) => emailIsValid(value)}
                            type="email"
                            value={email}                            
                            placeholder={typeYourEmail} />
                    </Row>
                    <Row padding="8px 0px" width="423px" justifyContent="center" alignItems="center">
                        <Input
                            onChange={(value: string) => passwordIsValid(value)}
                            type="password"
                            value={password}                            
                            placeholder={typeYourPassword} />
                    </Row>
                    <Row padding="8px 0px" width="100%" justifyContent="center" alignItems="center">
                        <Button label={login} width="423px" disabled={!validEmail || !validPassword}></Button>
                    </Row>
                </LoginScreenStyled>
                <FooterContact />
                <FooterDev />
            </Column >
        </>
    )
}

export default LoginScreen;