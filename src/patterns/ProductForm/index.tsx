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
import { useIntl } from "react-intl";

const ProductForm = () => {

    const intl = useIntl();

    const addNewProduct = intl.formatMessage({ id: "page.newProduct.addNewProduct" });
    const dragImage = intl.formatMessage({ id: "page.newProduct.dragImage" });
    const findInDesktop = intl.formatMessage({ id: "page.newProduct.findInDesktop" });
    
    const categoryLabel = intl.formatMessage({ id: "page.newProduct.category" });
    const nameLabel = intl.formatMessage({ id: "page.newProduct.name" });
    const priceLabel = intl.formatMessage({ id: "page.newProduct.price" });
    const descriptionLabel = intl.formatMessage({ id: "page.newProduct.description" });
    const or = intl.formatMessage({ id: "page.newProduct.or" });
    const buttonNewProduct = intl.formatMessage({ id: "page.newProduct.buttonNewProduct" });

    const [files, setFiles]: [File[], Function] = useState([]);

    const [category, setCategory]: [string, Function] = useState('');

    const [name, setName]: [string, Function] = useState('');

    const [price, setPrice]: [string, Function] = useState('');

    const [description, setDescription]: [string, Function] = useState('');

    const handleText = (text: string, field: string) => {
        switch (field) {
            case 'category':
                setCategory(text);
                break;
            case 'name':
                setName(text);
                break;
            case 'price':
                setPrice(text);
                break;
            case 'description':
                setDescription(text);
        }
    }

    const isValid = (): boolean =>
        (name.trim() !== "" && description.trim() !== "" && price.trim() !== "" && description.trim() !== "" && files.length > 0);


    return (
        <Column>
            <Label text={addNewProduct} fontSize="32px" fontWeight={700} lineHeight="37px" color="#464646" />
            <Row padding="16px 0px 0px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <ProductFormStyled>
                    <Column padding="0px 4px">
                        <DragInputFile
                            label={dragImage}
                            handleFiles={(files: File[]) => setFiles(files)}
                        />
                    </Column>
                    <Column padding="0px 4px">
                        <Label text={or} />
                    </Column>
                    <Column padding="0px 4px">
                        <InputFile
                            label={findInDesktop}
                            type="secondary"
                            width="250px"
                            handleFiles={(files: File[]) => setFiles(files)}
                        />
                    </Column>
                </ProductFormStyled>
            </Row>
            {files.length > 0
                ? <Row padding="16px 0px 4px 0px" justifyContent="center" alignItems="center" width="560px" widthTablet="100%" widthMobile="100%">
                    <Label text={files[0]?.name} color="#5595E9"></Label>
                    <DeleteIcon onClick={() => setFiles([])}></DeleteIcon>
                </Row>
                : null
            }
            <Row padding="16px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <Input value={category} label={categoryLabel} onChange={(value: string) => handleText(value, 'category')} />
            </Row>
            <Row padding="16px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <Input value={name} label={nameLabel} onChange={(value: string) => handleText(value, 'name')} />
            </Row>
            <Row padding="16px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <Input value={price} label={priceLabel} onChange={(value: string) => handleText(value, 'price')} />
            </Row>
            <Row padding="16px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <TextArea value={description} label={descriptionLabel} onChange={(value: string) => handleText(value, 'description')} />
            </Row>
            <Row padding="8px 0px 8px 0px" width="560px" widthTablet="100%" widthMobile="100%">
                <Button label={addNewProduct} width="100%" disabled={!isValid()}></Button>
            </Row>
        </Column>
    )
}

export default ProductForm;