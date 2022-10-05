import { Column } from "../../components/Grid/Column";
import { ColN } from "../../components/Grid/ColumnN";
import { Row } from "../../components/Grid/Row";
import InputFile from "../../components/InputFile";
import Button from "../../components/Inputs/Button";
import DragInputFile from "../../components/Inputs/DragInputFile";
import { Input } from "../../components/Inputs/Input";
import { TextArea } from "../../components/Inputs/TextArea";
import Label from "../../components/Typograph/Label";
import ProductFormStyled from "./styled";

const ProductForm = () => {
    return (
        <Column>
            <Label text="Adicionar novo produto" fontSize="32px" fontWeight={700} lineHeight="37px" color="#464646" />
            <Row padding="16px 0px 0px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <ProductFormStyled>
                    <Column padding="0px 4px">
                        <DragInputFile label="Arraste para adicionar uma imagem para o produto" />
                    </Column>
                    <Column padding="0px 4px">
                        <Label text="ou" />
                    </Column>
                    <Column padding="0px 4px">
                        <InputFile label="Procure no seu computador" type="secondary" width="250px" />
                    </Column>
                </ProductFormStyled>
            </Row>
            <Row padding="16px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <Input value="" label="Categoria" />
            </Row>
            <Row padding="16px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <Input value="" label="Nome do produto" />
            </Row>
            <Row padding="16px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <Input value="" label="Preço do produto" />
            </Row>
            <Row padding="16px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <TextArea value="" label="Descrição do produto" />
            </Row>
            <Row padding="8px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <Button label="Adicionar produto" width="100%"></Button>
            </Row>
        </Column>
    )
}

export default ProductForm;