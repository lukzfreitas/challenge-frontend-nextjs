import Head from "next/head";
import { Column } from "../../components/Grid/Column";
import AppBar from "../../components/Surfaces/AppBar";
import FooterContact from "../../patterns/FooterContact";
import FooterDev from "../../patterns/FooterDev";
import ProductForm from "../../patterns/ProductForm";
import ProductScreenStyled from "./styled";
import { useIntl } from "react-intl";

const ProductScreen = (code: number) => {

    const intl = useIntl();

    const menuAdmin = intl.formatMessage({ id: "page.newProduct.menuAdmin" });
    const registerProduct = intl.formatMessage({ id: "page.newProduct.registerProduct" });
        
    return (
        <>
            <Head>
                <title>{registerProduct}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Column>
                <AppBar buttonLabel={menuAdmin} />
                <ProductScreenStyled>
                    <ProductForm code={code} />
                </ProductScreenStyled>
                <FooterContact />
                <FooterDev />
            </Column>
        </>

    )
}

export default ProductScreen;