import { Column, Row } from "../../../../styles/globals";
import ImageComponent from "../../DataDisplay/Image";
import Label from "../../Typograph/Label";

const Card = () => {
    return (
        <Row width="176px" height="174px">
            <Column>
                <ImageComponent src="/mug_stropper.png" height="174px" width="176px"></ImageComponent>
                <Label text="Produto XYZ" type="label1" />
                <Label text="R$ 60,00" type="label2" />
                <Label text="Ver Produto" type="label3" />
            </Column>
        </Row>
    )
}

export default Card;