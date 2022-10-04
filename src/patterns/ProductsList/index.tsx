import { ColN } from "../../components/Grid/ColumnN";
import { Row } from "../../components/Grid/Row";
import Card from "../../components/Surfaces/Card";
import { Product } from "../../models/product";
import { ThemeProduct } from "../../models/themeProduct";
import ProductsLine from "../ProductsLine";
import { ColProductsStyled, ListProductsStyled, RowProductsStyled } from "./styled";

interface PropsProductsList {
    listThemeProduct?: ThemeProduct[];
    productsList?: Product[];
}

const ProductsList = ({ listThemeProduct = [], productsList = [], ..._ }: PropsProductsList) => {
    if (listThemeProduct.length > 0) {
        return ProductListByTheme(listThemeProduct)
    }
    return ProductAllList(productsList);
}

const ProductListByTheme = (listThemeProduct: ThemeProduct[]) => {
    return (
        <ListProductsStyled>
            {listThemeProduct.map((item, index) =>
                <ColN
                    key={index}
                    nCols={1}
                    padding="64px 152px 0px 152px"
                    paddingTablet="32px"
                    paddingMobile="16px 32px"
                >
                    <Row padding="16px 8px">
                        <ProductsLine title={item.theme}></ProductsLine>
                    </Row>
                    <RowProductsStyled>
                        {item.productsList.map((product: Product, index: number) =>
                            <ColProductsStyled key={index}>
                                <Card
                                    image={product.image}
                                    label1={product.name}
                                    label2={product.price}
                                    label3={'Ver produto'}
                                />
                            </ColProductsStyled>
                        )}
                    </RowProductsStyled>
                </ColN>
            )}
        </ListProductsStyled>
    )
}

const ProductAllList = (productList: Product[]) => {
    return (
        <ListProductsStyled>
            {/* {listThemeProduct.map((item, index) =>
                <ColN
                    key={index}
                    nCols={1}
                    padding="64px 152px 0px 152px"
                    paddingTablet="32px"
                    paddingMobile="16px 32px"
                >
                    <Row padding="16px 8px">
                        <ProductsLine title={item.theme}></ProductsLine>
                    </Row> */}
            <RowProductsStyled>
                {productList.map((product: Product, index: number) =>
                    <ColProductsStyled key={index}>
                        <Card
                            image={product.image}
                            label1={product.name}
                            label2={product.price}
                            label3={'Ver produto'}
                        />
                    </ColProductsStyled>
                )}
            </RowProductsStyled>
            {/* </ColN>
            )} */}
        </ListProductsStyled>
    )
}

export default ProductsList;