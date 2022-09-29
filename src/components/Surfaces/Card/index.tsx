import { Column, Row } from "../../../../styles/globals";
import ImageComponent from "../../DataDisplay/Image";
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
            <Column>
                <ImageComponent src={props.image} height="174px" width="176px"></ImageComponent>
                <Label text={props.label1} type="label1" />
                <Label text={props.label2} type="label2" />
                <Label text={props.label3} type="label3" />
            </Column>
        </Row>
    )
}

export default Card;