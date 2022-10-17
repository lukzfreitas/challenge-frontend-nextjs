import { useRouter } from "next/router";
import { ColN } from "../../components/Grid/ColumnN";
import { Row } from "../../components/Grid/Row";
import Button from "../../components/Inputs/Button";
import Card from "../../components/Surfaces/Card";
import Label from "../../components/Typograph/Label";
import { Product } from "../../models/product";
import ProductsLine from "../ProductsLine";
import { ColProductsStyled, ListProductsStyled, RowProductsStyled } from "./styled";
import { useIntl } from "react-intl";
import { CategoryProducts } from "../../models/categoryProducts";

interface PropsProductsList {
    categoryProducts?: CategoryProducts[];
    productsList?: Product[];
    title?: string;
    buttonLabel?: string;
    showSeeProduct?: boolean
}

const ProductsList = ({ showSeeProduct = false, categoryProducts = [], productsList = [], ...props }: PropsProductsList) => {
    if (categoryProducts.length > 0) {
        return ProductListByTheme(categoryProducts)
    }
    return ProductAllList(productsList, props.title, props.buttonLabel, showSeeProduct);
}

const ProductListByTheme = (categoryProducts: CategoryProducts[]) => {

    const router = useRouter();

    const intl = useIntl();

    const seeProduct = intl.formatMessage({ id: "page.home.seeProduct" });

    return (
        <ListProductsStyled>
            {categoryProducts.map((item, index) =>
                <ColN
                    key={index}
                    nCols={1}
                    padding="64px 152px 0px 152px"
                    paddingTablet="32px"
                    paddingMobile="16px 32px"
                >
                    <Row padding="16px 8px">
                        <ProductsLine title={item.name}></ProductsLine>
                    </Row>
                    <RowProductsStyled>
                        {item.products.map((product: Product, index: number) =>
                            <ColProductsStyled key={index}>
                                <Card
                                    image={product.image}
                                    label1={product.name}
                                    label2={product.price.toString()}
                                    link={seeProduct}
                                    onClick={() => router.push(`/products/${product.code}`)}
                                />
                            </ColProductsStyled>
                        )}
                    </RowProductsStyled>
                </ColN>
            )}
        </ListProductsStyled>
    )
}

const ProductAllList = (
    productList: Product[],
    title: string,
    buttonLabel: string,
    showSeeProduct: boolean,
) => {

    const router = useRouter();

    const newProductList: Product[][] = chunkArray(productList);
    return (
        <ListProductsStyled>
            <Row
                justifyContent="space-between"
                alignItems="flex-start"
                padding="70px 152px 0px 152px"
                paddingTablet="32px"
                paddingMobile="16px 32px">
                {
                    title ?
                        <Label
                            text={title}
                            fontSize="32px"
                            fontWeight={700}
                            lineHeight="38px"
                            color="#464646" />
                        : null
                }
                {
                    buttonLabel ?
                        <Button
                            label={buttonLabel}
                            width="165px"
                            onClick={() => router.push("product")} />
                        : null
                }

            </Row>
            {newProductList.map((item, index) =>
                <ColN
                    key={index}
                    nCols={1}
                    padding={index == 0 ? "8px 152px 0px 152px" : "64px 152px 0px 152px"}
                    paddingTablet="32px"
                    paddingMobile="16px 32px"
                >
                    <RowProductsStyled>
                        {item.map((product: Product, index: number) =>
                            <ColProductsStyled key={index}>
                                {showSeeProduct
                                    ? <Card
                                        image={product.image}
                                        label1={product.name}
                                        label2={product.price.toString()}
                                        link={'Ver produto'}
                                        onClick={() => router.push(`/products/${product.code}`)}
                                    />
                                    : <Card
                                        image={product.image}
                                        label1={product.name}
                                        label2={product.price.toString()}
                                        label3={product.code}
                                    />
                                }
                            </ColProductsStyled>
                        )}
                    </RowProductsStyled>
                </ColN>
            )}
        </ListProductsStyled>
    )
}

function chunkArray(list: Product[], perChunk = 6): Product[][] {
    return list.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);
}

export default ProductsList;

