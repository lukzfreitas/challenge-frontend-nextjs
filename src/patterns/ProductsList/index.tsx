import { useRouter } from "next/router";
import { ColN } from "../../components/Grid/ColumnN";
import { Row } from "../../components/Grid/Row";
import Button from "../../components/Inputs/Button";
import Card from "../../components/Surfaces/Card";
import Label from "../../components/Typograph/Label";
import { Product } from "../../models/product";
import { ThemeProduct } from "../../models/themeProduct";
import ProductsLine from "../ProductsLine";
import { ColProductsStyled, ListProductsStyled, RowProductsStyled } from "./styled";

interface PropsProductsList {
    listThemeProduct?: ThemeProduct[];
    productsList?: Product[];
}

const ProductsList = ({ listThemeProduct = [], productsList = [], ..._ }: PropsProductsList) => {
    if (listThemeProduct.length > 0) {
        return ProductListByTheme(listThemeProduct)
    }
    return ProductAllList(productsList);
}

const ProductListByTheme = (listThemeProduct: ThemeProduct[]) => {

    const router = useRouter();
    
    return (
        <ListProductsStyled>
            {listThemeProduct.map((item, index) =>
                <ColN
                    key={index}
                    nCols={1}
                    padding="64px 152px 0px 152px"
                    paddingTablet="32px"
                    paddingMobile="16px 32px"
                >
                    <Row padding="16px 8px">
                        <ProductsLine title={item.theme}></ProductsLine>
                    </Row>
                    <RowProductsStyled>
                        {item.productsList.map((product: Product, index: number) =>
                            <ColProductsStyled key={index}>
                                <Card
                                    image={product.image}
                                    label1={product.name}
                                    label2={product.price}
                                    link={'Ver produto'}
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

const ProductAllList = (productList: Product[]) => {

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
                <Label text="Todos os produtos" fontSize="32px" fontWeight={700} lineHeight="38px" color="#464646"></Label>
                <Button label="Adicionar produto" width="165px" onClick={() => router.push("product")}></Button>
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
                                <Card
                                    image={product.image}
                                    label1={product.name}
                                    label2={product.price}
                                    label3={product.code}
                                />
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

