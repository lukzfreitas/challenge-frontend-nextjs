import Head from "next/head";
import { Column } from "../../components/Grid/Column";
import AppBar from "../../components/Surfaces/AppBar";
import { Product } from "../../models/product";
import FooterContact from "../../patterns/FooterContact";
import FooterDev from "../../patterns/FooterDev";
import ProductDetails from "../../patterns/ProductDetails";
import ProductsList from "../../patterns/ProductsList";

const ProductDetailsScreen = (productJson: any, productListSimilarJson: any[]) => {
  const product = new Product(productJson);
  const productListSimilar = productListSimilarJson.map(p => new Product(p));  
  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Column>
        <AppBar />
        <ProductDetails product={product} />
        <ProductsList productsList={productListSimilar} title={'Produtos similares'} showSeeProduct={true} />
        <FooterContact />
        <FooterDev />
      </Column>
    </>

  )
}

export default ProductDetailsScreen;

