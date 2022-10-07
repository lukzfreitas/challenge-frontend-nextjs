import { useRouter } from "next/router";
import ArrowIcon from "../../components/DataDisplay/Icons/Arrow";
import { Row } from "../../components/Grid/Row";
import Link from "../../components/Navigation/Link";
import { SeeMoreStyled, TitleLineStyle } from "./styled";

interface ProductsLineProps {
    title: string;
    showSeeMore?: boolean;
}

const ProductsLine = ({ showSeeMore = true, ...props }: ProductsLineProps) => {

    const router = useRouter();

    return (
        <Row justifyContent="space-between" alignItems="center" width="100%" color="#E5E5E5">
            <TitleLineStyle>
                {props.title}
            </TitleLineStyle>
            {showSeeMore ?
                <SeeMoreStyled>
                    <SeeMore text="Ver tudo" onClick={() => router.push('products/productList')} />
                </SeeMoreStyled>
                : null
            }
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