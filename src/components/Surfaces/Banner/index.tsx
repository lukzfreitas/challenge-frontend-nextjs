import { Column, Col1, Row } from "../../../../styles/globals";
import Button from "../../Inputs/Button";
import SubTitle from "../../Typograph/SubTitle";
import Title from "../../Typograph/Title";
import { BannerStyled } from "./styled";

const Banner = () => {
    return (
        <BannerStyled>
            <Column>
                <Row padding="8px 0">
                    <Title text="Dezembro Promocional" />
                </Row>
                <Row padding="8px 0">
                    <SubTitle text="Produtos selecionados com 33% de desconto"></SubTitle>
                </Row>
                <Row padding="8px 0">
                    <Button type="primary" label="Ver Consoles" width="130px"></Button>
                </Row>
            </Column>
        </BannerStyled>
    );
};

export default Banner;
