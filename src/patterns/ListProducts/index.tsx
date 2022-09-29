import { Col1, ColN, Row } from "../../../styles/globals";
import Card from "../../components/Surfaces/Card";
import { Product } from "../../models/product";
import { ThemeProduct } from "../../models/themeProduct";
import LineProducts from "../LineProducts";

interface PropsListProducts {
    listThemeProdutc: ThemeProduct[];
}

const ListProducts = (props: PropsListProducts) => {
    return (
        <>
            {props.listThemeProdutc.map(item =>
                <Col1 padding="0px 152px">
                    <Row padding="16px 8px">
                        <LineProducts title={item.theme}></LineProducts>
                    </Row>
                    <Row justifyContent="space-between">
                        {item.listProducts.map((product: Product) => (
                            <ColN nCols={item.listProducts.length}>
                                <Card image={product.image} label1={product.name} label2={product.price} label3="Ver produto" />
                            </ColN>
                        ))}
                    </Row>
                </Col1>
            )}
        </>
    )
}

export default ListProducts;