import ImageComponent from "../../components/DataDisplay/Image";
import { Column } from "../../components/Grid/Column";
import { ColN } from "../../components/Grid/ColumnN";
import { Row } from "../../components/Grid/Row";
import AppBar from "../../components/Surfaces/AppBar";
import Label from "../../components/Typograph/Label"
import { Product } from "../../models/product";
import FooterContact from "../../patterns/FooterContact";
import FooterDev from "../../patterns/FooterDev";
import ProductDetails from "../../patterns/ProductDetails";

const ProductDetailsScreen = (product: Product) => {

  return (
    <Column>
      <AppBar />
      <ProductDetails product={product} />      
      <FooterDev devName="Desenvolvido por Lucas Freitas" year='2022' />
    </Column>

  )
}

export default ProductDetailsScreen;

