import ArrowIcon from "../../components/DataDisplay/Icons/Arrow";
import { Row } from "../../components/Grid/Row";
import Link from "../../components/Navigation/Link";
import { SeeMoreStyled, TitleLineStyle } from "./styled";

interface ProductsLineProps {
    title: string;
}

const ProductsLine = (props: ProductsLineProps) => {
    return (
        <Row justifyContent="space-between" alignItems="center" width="100%">
            <TitleLineStyle>
                {props.title}
            </TitleLineStyle>
            <SeeMoreStyled>
                <SeeMore text="Ver tudo" onClick={() => { }} />
            </SeeMoreStyled>            
        </Row>
    );
}


const SeeMore = (props: { text: string, onClick: Function }) => {
    return (
        <Row alignItems="center">
            <Link label={props.text} onClick={() => props.onClick()} />
            <ArrowIcon />
        </Row>
    )
}

export default ProductsLine;