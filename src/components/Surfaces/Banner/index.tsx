import { Column } from "../../Grid/Column";
import { Row } from "../../Grid/Row";
import Button from "../../Inputs/Button";
import SubTitle from "../../Typograph/SubTitle";
import Title from "../../Typograph/Title";
import { BannerStyled } from "./styled";
import { useIntl } from "react-intl";

const Banner = () => {

    const intl = useIntl();

    const bannerTitle = intl.formatMessage({ id: "page.home.bannerTitle" });
    const bannerSubTitle = intl.formatMessage({ id: "page.home.subTitle" });
    const seeConsoles = intl.formatMessage({ id: "page.home.seeConsoles" });

    return (
        <BannerStyled>
            <Column>
                <Row padding="8px 0">
                    <Title text={bannerTitle} />
                </Row>
                <Row padding="8px 0">
                    <SubTitle text={bannerSubTitle}></SubTitle>
                </Row>
                <Row padding="8px 0">
                    <Button type="primary" label={seeConsoles} width="130px"></Button>
                </Row>
            </Column>
        </BannerStyled>
    );
};

export default Banner;
