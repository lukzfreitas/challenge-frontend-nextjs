import { ColN } from "../../components/Grid/ColumnN";
import { Row } from "../../components/Grid/Row";
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
                <ColN nCols={1} padding="64px 152px 0px 152px">
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
                </ColN>
            )}
        </>
    )
}

export default ListProducts;