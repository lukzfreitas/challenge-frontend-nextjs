import { Row } from "../../../styles/globals";
import { LinkLineStyle, TitleLineStyle } from "./styled";

interface LineProductsProps {
    title: string;
}

const LineProducts = (props: LineProductsProps) => {
    return (
        <Row justifyContent="space-between" alignItems="center" width="100%">
            <TitleLineStyle>
                {props.title}
            </TitleLineStyle>
            <LinkLineStyle>
                {'Ver tudo'}
            </LinkLineStyle>
        </Row>
    );
}

export default LineProducts;