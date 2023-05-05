import { Column } from '../../components/Grid/Column';
import { Row } from '../../components/Grid/Row';
import InputFile from '../../components/Inputs/InputFile';
import Button from '../../components/Inputs/Button';
import DragInputFile from '../../components/Inputs/DragInputFile';
import { Input } from '../../components/Inputs/Input';
import { TextArea } from '../../components/Inputs/TextArea';
import Label from '../../components/Typograph/Label';
import ProductFormStyled from './styled';
import { useState } from 'react';
import DeleteIcon from '../../components/DataDisplay/Icons/Delete';
import { useIntl } from 'react-intl';
import { FormField } from '../../models/formField';
import { Product } from '../../models/product';
import { useProduct } from '../../hooks/useProduct';

interface ProductFormProps {
  code: number;
}

const ProductForm = (props: ProductFormProps) => {
  const intl = useIntl();

  const addNewProduct = intl.formatMessage({
    id: 'page.newProduct.addNewProduct',
  });
  const dragImage = intl.formatMessage({ id: 'page.newProduct.dragImage' });
  const findInDesktop = intl.formatMessage({
    id: 'page.newProduct.findInDesktop',
  });

  const categoryLabel = intl.formatMessage({ id: 'page.newProduct.category' });
  const nameLabel = intl.formatMessage({ id: 'page.newProduct.name' });
  const priceLabel = intl.formatMessage({ id: 'page.newProduct.price' });
  const descriptionLabel = intl.formatMessage({
    id: 'page.newProduct.description',
  });
  const or = intl.formatMessage({ id: 'page.newProduct.or' });

  const [files, setFiles]: [File[], Function] = useState([]);

  const [category, setCategory]: [FormField, Function] = useState({
    value: props.code.toString(),
    valid: true,
  });

  const [name, setName]: [FormField, Function] = useState({
    value: '',
    valid: true,
  });

  const [price, setPrice]: [FormField, Function] = useState({
    value: '',
    valid: true,
  });

  const [description, setDescription]: [FormField, Function] = useState({
    value: '',
    valid: true,
  });

  const { createProduct } = useProduct();

  const handleText = (text: string, field: string) => {
    switch (field) {
      case 'category':
        setCategory({ value: text, valid: true });
        break;
      case 'name':
        setName({ value: text, valid: true });
        break;
      case 'price':
        setPrice({ value: text, valid: true });
        break;
      case 'description':
        setDescription({ value: text, valid: true });
    }
  };

  const isValid = (): boolean =>
    name.value.trim() !== '' &&
    description.value.trim() !== '' &&
    price.value.trim() !== '' &&
    description.value.trim() !== '' &&
    files.length > 0;

  const saveProduct = () => {    
    const product = new Product({
      name: name.value,
      price: price.value,
      image:
        'https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200',
      category: category.value,
    });    
    createProduct(product);
  };

  return (
    <Column>
      <Label
        text={addNewProduct}
        fontSize="32px"
        fontWeight={700}
        lineHeight="37px"
        color="#464646"
      />
      <Row
        padding="16px 0px 0px 0px"
        width="560px"
        widthTablet="100%"
        widthMobile="100%"
      >
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
      {files.length > 0 ? (
        <Row
          padding="16px 0px 4px 0px"
          justifyContent="center"
          alignItems="center"
          width="560px"
          widthTablet="100%"
          widthMobile="100%"
        >
          <Label text={files[0]?.name} color="#5595E9"></Label>
          <DeleteIcon onClick={() => setFiles([])}></DeleteIcon>
        </Row>
      ) : null}
      <Row
        padding="16px 0px 8px 0px"
        width="560px"
        widthTablet="100%"
        widthMobile="100%"
      >
        <Input
          value={category.value}
          label={categoryLabel}
          invalid={!category.valid}
          invalidMessage={'Categoria do produto não informada'}
          onChange={(value: string) => handleText(value, 'category')}
        />
      </Row>
      <Row
        padding="16px 0px 8px 0px"
        width="560px"
        widthTablet="100%"
        widthMobile="100%"
      >
        <Input
          value={name.value}
          label={nameLabel}
          invalid={!name.valid}
          invalidMessage={'Nome do produto não informado'}
          onChange={(value: string) => handleText(value, 'name')}
        />
      </Row>
      <Row
        padding="16px 0px 8px 0px"
        width="560px"
        widthTablet="100%"
        widthMobile="100%"
      >
        <Input
          value={price.value}
          label={priceLabel}
          invalid={!price.valid}
          invalidMessage={'Preço do produto não informado'}
          onChange={(value: string) => handleText(value, 'price')}
        />
      </Row>
      <Row
        padding="16px 0px 8px 0px"
        width="560px"
        widthTablet="100%"
        widthMobile="100%"
      >
        <TextArea
          value={description.value}
          label={descriptionLabel}
          invalid={!description.valid}
          invalidMessage={'Descrição do produto não informado'}
          onChange={(value: string) => handleText(value, 'description')}
        />
      </Row>
      <Row
        padding="8px 0px 8px 0px"
        width="560px"
        widthTablet="100%"
        widthMobile="100%"
      >
        <Button
          label={addNewProduct}
          width="100%"
          disabled={!isValid()}
          onClick={() => saveProduct()}
        ></Button>
      </Row>
    </Column>
  );
};

export default ProductForm;
