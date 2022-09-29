import { Col1, Col3, ColN, Column, Row } from "../../../styles/globals";
import Card from "../../components/Surfaces/Card";
import { Product } from "../../models/product";
import LineProducts from "../LineProducts";

interface PropsListProducts {
    list: Product[];
}

const ListProducts = (props: PropsListProducts) => {
    return (
        <Col1 padding="0px 152px">
            <Row padding="16px 0px">
                <LineProducts title="Star Wars"></LineProducts>
            </Row>
            <Row >
                {props.list.map((item: Product) => (
                    <ColN nCols={props.list.length}>
                        <Card image={item.image} label1={item.name} label2={item.price} label3="Ver produto" />
                    </ColN>
                ))}
            </Row>
        </Col1>
    )
}

export default ListProducts;