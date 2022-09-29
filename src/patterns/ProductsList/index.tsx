import { ColN } from "../../components/Grid/ColumnN";
import { Row } from "../../components/Grid/Row";
import Card from "../../components/Surfaces/Card";
import { Product } from "../../models/product";
import { ThemeProduct } from "../../models/themeProduct";
import ProductsLine from "../ProductsLine";

interface PropsProductsList {
    listThemeProdutc: ThemeProduct[];
}

const ProductsList = (props: PropsProductsList) => {
    return (
        <>
            {props.listThemeProdutc.map(item =>
                <ColN nCols={1} padding="64px 152px 0px 152px">
                    <Row padding="16px 8px">
                        <ProductsLine title={item.theme}></ProductsLine>
                    </Row>
                    <Row justifyContent="space-between">
                        {item.productsList.map((product: Product) => (
                            <ColN nCols={item.productsList.length}>
                                <Card image={product.image} label1={product.name} label2={product.price} label3="Ver produto" />
                            </ColN>
                        ))}
                    </Row>
                </ColN>
            )}
        </>
    )
}

export default ProductsList;