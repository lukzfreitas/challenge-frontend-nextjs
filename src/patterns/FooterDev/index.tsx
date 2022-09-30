import { Column } from "../../components/Grid/Column";
import { Row } from "../../components/Grid/Row";
import Label from "../../components/Typograph/Label";

interface FooterDevProps {
    devName: string;
    year: string
}

const FooterDev = (props: FooterDevProps) => {
    return (
        <Row width="100%" justifyContent="center" padding="32px 0px">
            <Column>
                <Label text={props.devName} textAlign="center"></Label>
                <Label text={props.year} textAlign="center"></Label>
            </Column>
        </Row>
    )
}

export default FooterDev;