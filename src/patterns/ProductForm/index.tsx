import { Column } from "../../components/Grid/Column";
import { Row } from "../../components/Grid/Row";
import Button from "../../components/Inputs/Button";
import { Input } from "../../components/Inputs/Input";
import { TextArea } from "../../components/Inputs/TextArea";
import Label from "../../components/Typograph/Label";

const ProductForm = () => {
    return (
        <Column>
            <Label text="Adicionar novo produto" fontSize="32px" fontWeight={700} lineHeight="37px" color="#464646" />
            <Row padding="16px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <Input value="" label="URL da imagem"/>
            </Row>
            <Row padding="16px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <Input value="" label="Categoria"/>
            </Row>
            <Row padding="16px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <Input value="" label="Nome do produto"/>
            </Row>
            <Row padding="16px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <Input value="" label="Preço do produto"/>
            </Row>
            <Row padding="16px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <TextArea value="" label="Descrição do produto"/>
            </Row>
            <Row padding="8px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <Button label="Adicionar produto" width="100%"></Button>
            </Row>
        </Column>
    )
}

export default ProductForm;