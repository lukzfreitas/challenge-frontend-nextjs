import { Column } from "../../components/Grid/Column";
import { Row } from "../../components/Grid/Row";
import InputFile from "../../components/Inputs/InputFile";
import Button from "../../components/Inputs/Button";
import DragInputFile from "../../components/Inputs/DragInputFile";
import { Input } from "../../components/Inputs/Input";
import { TextArea } from "../../components/Inputs/TextArea";
import Label from "../../components/Typograph/Label";
import ProductFormStyled from "./styled";
import { useState } from "react";
import DeleteIcon from "../../components/DataDisplay/Icons/Delete";

const ProductForm = () => {

    const [files, setFiles]: [File[], Function] = useState([]);

    return (
        <Column>
            <Label text="Adicionar novo produto" fontSize="32px" fontWeight={700} lineHeight="37px" color="#464646" />
            <Row padding="16px 0px 0px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <ProductFormStyled>
                    <Column padding="0px 4px">
                        <DragInputFile
                            label="Arraste para adicionar uma imagem para o produto"
                            handleFiles={(files: File[]) => setFiles(files)}
                        />
                    </Column>
                    <Column padding="0px 4px">
                        <Label text="Ou" />
                    </Column>
                    <Column padding="0px 4px">
                        <InputFile label="Procure no seu computador" type="secondary" width="250px" />
                    </Column>
                </ProductFormStyled>
            </Row>
            {files.length > 0
                ? <Row padding="16px 0px 4px 0px" justifyContent="center" alignItems="center" width="560px" widthTablet="100%" widthMobile="100%">
                    <Label text={files[0]?.name}></Label>
                    <DeleteIcon onClick={() => setFiles([])}></DeleteIcon>
                </Row>
                : null
            }
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