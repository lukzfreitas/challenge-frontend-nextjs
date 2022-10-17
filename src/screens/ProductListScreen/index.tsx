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

const ProductListScreen = () => {

    const intl = useIntl();

    const allProducts = intl.formatMessage({ id: "page.products.allProducts" });
    const addProduct = intl.formatMessage({ id: "page.products.addProduct" });
    const producstListLabel = intl.formatMessage({ id: "page.products.productsList" });

    const [data, setData]: [CategoryProducts, Function] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getProductsByCategoryToExternal().then((data: CategoryProducts) => {
            setData(data);
            console.log(data);
            setLoading(false);
        })
    }, []);

    return isLoading ? null :
        (
            <>
                <Head>
                    <title>{data.name}</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Column>
                    <AppBar />
                    <ProductsList productsList={data.products} title={allProducts} buttonLabel={addProduct} />
                    <FooterContact />
                    <FooterDev />
                </Column>
            </>

        )
}

export default ProductListScreen;