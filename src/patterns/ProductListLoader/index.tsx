import { Row } from "../../components/Grid/Row";
import CardLoading from "../../components/Surfaces/CardLoading";
import { LoaderStyled } from "../../components/Surfaces/CardLoading/styled";
import { GridProductsStyled, ListProductsStyled } from "../ProductsList/styled";

const ProductListLoader = () => {
  const productList = [null, null, null, null, null, null];
  return (
    <ListProductsStyled>
      <Row
        justifyContent="space-between"
        alignItems="flex-start"
        padding="70px 152px 0px 152px"
        paddingTablet="32px"
        paddingMobile="16px 32px"
      >
        <LoaderStyled height="40px" width="200px" margin="0 8px" />
      </Row>
      <Row
        justifyContent="space-between"
        alignItems="flex-start"
        padding="20px 152px 0px 152px"
        paddingTablet="32px"
        paddingMobile="16px 32px"
      >
        <GridProductsStyled>
          {productList.map((_, index) => (
            <CardLoading key={index} />
          ))}
        </GridProductsStyled>
      </Row>
    </ListProductsStyled>
  );
};

export default ProductListLoader;
