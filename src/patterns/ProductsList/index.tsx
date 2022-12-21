import { useRouter } from "next/router";
import { ColN } from "../../components/Grid/ColumnN";
import { Row } from "../../components/Grid/Row";
import Button from "../../components/Inputs/Button";
import Card from "../../components/Surfaces/Card";
import Label from "../../components/Typograph/Label";
import { Product } from "../../models/product";
import ProductsLine from "../ProductsLine";
import { ListProductsStyled, GridProductsStyled } from "./styled";
import { useIntl } from "react-intl";
import { CategoryProducts } from "../../models/categoryProducts";
import { currency } from "../../utils/currency";

interface PropsProductsList {
  categoryProducts?: CategoryProducts[];
  productsList?: Product[];
  title?: string;
  buttonLabel?: string;
  showSeeProduct?: boolean;
  codeCategory?: number;
}

const ProductsList = ({
  showSeeProduct = false,
  categoryProducts = [],
  productsList = [],
  ...props
}: PropsProductsList) => {
  if (categoryProducts.length > 0) {
    return ProductListByTheme(categoryProducts);
  }
  return ProductAllList(
    productsList,
    props.title,
    props.buttonLabel,
    showSeeProduct,
    props.codeCategory
  );
};

const ProductListByTheme = (categoryProducts: CategoryProducts[]) => {
  const router = useRouter();

  const intl = useIntl();

  const seeProduct = intl.formatMessage({ id: "page.home.seeProduct" });

  return (
    <ListProductsStyled>
      {categoryProducts.map((item, index) => (
        <ColN
          key={index}
          nCols={1}
          padding="64px 152px 0px 152px"
          paddingTablet="32px"
          paddingMobile="16px 32px"
        >
          <Row padding="16px 8px">
            <ProductsLine
              title={item.name}
              codeCategory={item.code}
            ></ProductsLine>
          </Row>
          <GridProductsStyled>
            {item.products.map((product: Product, index: number) => (
              <Card
                key={index}
                image={product.image}
                label1={product.name}
                label2={currency(product.price)}
                link={seeProduct}
                onClick={() => router.push(`/products/${product.code}`)}
              />
            ))}
          </GridProductsStyled>
        </ColN>
      ))}
    </ListProductsStyled>
  );
};

const ProductAllList = (
  productList: Product[],
  title: string,
  buttonLabel: string,
  showSeeProduct: boolean,
  codeCategory: number
) => {
  const router = useRouter();

  return (
    <ListProductsStyled>
      <Row
        justifyContent="space-between"
        alignItems="flex-start"
        padding="70px 152px 0px 152px"
        paddingTablet="32px"
        paddingMobile="16px 32px"
      >
        {title ? (
          <Label
            text={title}
            fontSize="32px"
            fontWeight={700}
            lineHeight="38px"
            color="#464646"
          />
        ) : null}
        {buttonLabel ? (
          <Button
            label={buttonLabel}
            width="165px"
            onClick={() => router.push(`/productForm/${codeCategory}`)}
          />
        ) : null}
      </Row>
      <Row
        justifyContent="space-between"
        alignItems="flex-start"
        padding="20px 152px 0px 152px"
        paddingTablet="32px"
        paddingMobile="16px 32px"
      >
        <GridProductsStyled>
          {productList.map((product, index) =>
            showSeeProduct ? (
              <Card
                key={index}
                image={product.image}
                label1={product.name}
                label2={currency(product.price)}
                link={"Ver produto"}
                onClick={() => router.push(`/products/${product.code}`)}
              />
            ) : (
              <Card
                key={index}
                image={product.image}
                label1={product.name}
                label2={currency(product.price)}
                label3={product.code.toString()}
              />
            )
          )}
        </GridProductsStyled>
      </Row>
    </ListProductsStyled>
  );
};

export default ProductsList;
