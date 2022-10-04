import { Column } from "../../components/Grid/Column";
import AppBar from "../../components/Surfaces/AppBar";
import FooterContact from "../../patterns/FooterContact";
import ProductForm from "../../patterns/ProductForm";
import ProductScreenStyled from "./styled";

const ProductScreen = () => {
    return (
        <Column>
            <AppBar />
            <ProductScreenStyled>
                <ProductForm />
            </ProductScreenStyled>
            <FooterContact />
        </Column>
    )
}

export default ProductScreen;