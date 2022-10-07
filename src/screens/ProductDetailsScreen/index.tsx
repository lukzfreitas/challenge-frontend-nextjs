import { Column } from "../../components/Grid/Column";
import AppBar from "../../components/Surfaces/AppBar";
import { Product } from "../../models/product";
import FooterContact from "../../patterns/FooterContact";
import FooterDev from "../../patterns/FooterDev";
import ProductDetails from "../../patterns/ProductDetails";
import ProductsList from "../../patterns/ProductsList";

const ProductDetailsScreen = (product: Product, productListSimilar: Product[]) => {

  return (
    <Column>
      <AppBar />
      <ProductDetails product={product} />      
      <ProductsList productsList={productListSimilar} title={'Produtos similares'} showSeeProduct={true}/>
      <FooterContact />
      <FooterDev devName="Desenvolvido por Lucas Freitas" year='2022' />
    </Column>

  )
}

export default ProductDetailsScreen;

