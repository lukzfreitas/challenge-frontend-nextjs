import ImageComponent from "../../DataDisplay/Image";
import { Column } from "../../Grid/Column";
import { Row } from "../../Grid/Row";
import Link from "../../Navigation/Link";
import Label from "../../Typograph/Label";

interface CardProps {
    label1: string;
    label2: string;
    label3: string;
    image: string;
}

const Card = (props: CardProps) => {
    return (
        <Row>
            <Column padding="0px 8px">
                <ImageComponent src={props.image} height="290px" width="300px"></ImageComponent>
                <Label text={props.label1} type="label1" />
                <Label text={props.label2} type="label2" />
                <Link label={props.label3} onClick={() => { }} />
            </Column>
        </Row>
    )
}

export default Card;