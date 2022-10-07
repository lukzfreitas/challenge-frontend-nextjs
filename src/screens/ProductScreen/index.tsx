import Head from "next/head";
import { Column } from "../../components/Grid/Column";
import AppBar from "../../components/Surfaces/AppBar";
import FooterContact from "../../patterns/FooterContact";
import FooterDev from "../../patterns/FooterDev";
import ProductForm from "../../patterns/ProductForm";
import ProductScreenStyled from "./styled";

const ProductScreen = () => {
    return (
        <>
            <Head>
                <title>Cadastrar Produto</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Column>
                <AppBar buttonLabel="Menu administrador" />
                <ProductScreenStyled>
                    <ProductForm />
                </ProductScreenStyled>
                <FooterContact />
                <FooterDev devName="Desenvolvido por Lucas Freitas" year='2022' />
            </Column>
        </>

    )
}

export default ProductScreen;