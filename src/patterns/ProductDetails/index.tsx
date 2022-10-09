import ImageComponent from "../../components/DataDisplay/Image";
import { ColN } from "../../components/Grid/ColumnN";
import { Row } from "../../components/Grid/Row";
import Label from "../../components/Typograph/Label";
import { Product } from "../../models/product"
import { ProductDetailStyled } from "./styled";

interface PropsProductDetails {
    product?: Product;
}

const ProductDetails = ({ product, ..._ }: PropsProductDetails) => {
    return (
        <ProductDetailStyled>
            <Row alignItems="center" padding="32px 154px" paddingTablet="32px 16px" paddingMobile="16px 22px">
                <ColN nCols={2} nColsMobile={1} paddingMobile={"0"}>
                    <ImageComponent src={product.image} height="400px" width="420px"></ImageComponent>
                </ColN>
                <ColN nCols={2} nColsMobile={1}>
                    <Label text={product.name} fontWeight={500} fontSize={'52px'} lineHeight={'61px'}></Label>
                    <Label text={product.price} fontWeight={700} fontSize={'16px'} lineHeight={'19px'}></Label>
                    <Label fontWeight={400} fontSize={'16px'} lineHeight={'19px'} text={'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam'}></Label>
                </ColN>
            </Row>
        </ProductDetailStyled>
    )
}

export default ProductDetails