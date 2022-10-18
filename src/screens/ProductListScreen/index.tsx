import Head from "next/head";
import { Column } from "../../components/Grid/Column";
import AppBar from "../../components/Surfaces/AppBar";
import FooterContact from "../../patterns/FooterContact";
import FooterDev from "../../patterns/FooterDev";
import ProductsList from "../../patterns/ProductsList";
import { useIntl } from "react-intl";
import { useEffect, useState } from "react";
import { getProductsByCategoryToExternal } from "../../../pages/api/productsApi";
import { CategoryProducts } from "../../models/categoryProducts";
import Label from "../../components/Typograph/Label";

const ProductListScreen = (code: number) => {

    const intl = useIntl();

    const allProducts = intl.formatMessage({ id: "page.products.allProducts" });
    const addProduct = intl.formatMessage({ id: "page.products.addProduct" });

    const [data, setData]: [CategoryProducts, Function] = useState(null);

    useEffect(() => {
        getProductsByCategoryToExternal(code).then((data: CategoryProducts) => {
            setData(data);
        })
    }, [code]);

    return (
        <>
            <Head>
                <title>{data ? data.name : 'Carregando...'}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Column>
                <AppBar />
                {
                    data == null
                        ? <Label text="Carregando..." />
                        : <ProductsList
                            productsList={data.products}
                            title={allProducts}
                            buttonLabel={addProduct}
                            codeCategory={code}
                        />
                }
                <FooterContact />
                <FooterDev />
            </Column>
        </>

    )
}

export default ProductListScreen;