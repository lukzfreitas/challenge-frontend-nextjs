import { Column } from "../../Grid/Column";
import { LoaderStyled } from "./styled";

const CardLoading = () => {
  return (
    <Column padding="0px 8px">
      <LoaderStyled width="180px" height="180px" />
      <LoaderStyled width="150px" height="20px" margin="20px 0px" />
      <LoaderStyled width="120px" height="20px" margin="0px 0px" />
      <LoaderStyled width="80px" height="20px" margin="20px 0px" />
    </Column>
  );
};

export default CardLoading;
