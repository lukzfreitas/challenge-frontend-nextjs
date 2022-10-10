import { Column } from "../../components/Grid/Column";
import { Row } from "../../components/Grid/Row";
import Label from "../../components/Typograph/Label";
import { useIntl } from "react-intl";

const FooterDev = () => {

    const intl = useIntl();

    const developedBy = intl.formatMessage({id: "page.home.developedBy"});

    return (
        <Row width="100%" justifyContent="center" padding="32px 0px">
            <Column>
                <Label text={`${developedBy} Lucas Freitas`} textAlign="center"></Label>
                <Label text={'2022'} textAlign="center"></Label>
            </Column>
        </Row>
    )
}

export default FooterDev;