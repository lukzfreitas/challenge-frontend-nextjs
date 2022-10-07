import Head from "next/head";
import { Column } from "../../components/Grid/Column";
import { Row } from "../../components/Grid/Row";
import Button from "../../components/Inputs/Button";
import { Input } from "../../components/Inputs/Input";
import AppBar from "../../components/Surfaces/AppBar";
import Label from "../../components/Typograph/Label";
import FooterContact from "../../patterns/FooterContact";
import FooterDev from "../../patterns/FooterDev";
import LoginScreenStyled from "./styled";

const LoginScreen = () => {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Column>
                <AppBar />
                <LoginScreenStyled>
                    <Row padding="8px 0px" justifyContent="center" alignItems="center" width="423px">
                        <Label text="Iniciar Sessão" textAlign="center" fontWeight={700} fontSize={'16px'}></Label>
                    </Row>
                    <Row padding="8px 0px" width="423px" justifyContent="center" alignItems="center">
                        <Input value="" height="41px" placeholder="Escreva seu email"></Input>
                    </Row>
                    <Row padding="8px 0px" width="423px" justifyContent="center" alignItems="center">
                        <Input value="" height="41px" placeholder="Escreva sua senha"></Input>
                    </Row>
                    <Row padding="8px 0px" width="100%" justifyContent="center" alignItems="center">
                        <Button label="Entrar" width="423px"></Button>
                    </Row>
                </LoginScreenStyled>
                <FooterContact />
                <FooterDev devName="Desenvolvido por Lucas Freitas" year='2022' />
            </Column >
        </>
    )
}

export default LoginScreen;